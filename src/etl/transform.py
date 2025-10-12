"""Transformation logic for the RNP dataset."""

from __future__ import annotations

import re
import unicodedata
from datetime import UTC, datetime
from typing import Dict, Tuple

import pandas as pd

from src.data_models import QualitySnapshot
from src.utils.logging import get_logger

LOGGER = get_logger(__name__)

# Canonical column order to stabilise downstream outputs
BASE_COLUMN_ORDER = [
    "anio",
    "mes",
    "fecha_periodo",
    "rol_establecimiento",
    "id_vu",
    "nombre_establecimiento",
    "razon_social",
    "rut",
    "ciiu4",
    "id_ciiu4",
    "ciiu6",
    "id_ciiu6",
    "rubro_vu",
    "entrada_salida",
    "cantidad_toneladas",
    "tratamiento_nivel_1",
    "id_tratamiento_nivel_1",
    "tratamiento_nivel_2",
    "id_tratamiento_nivel_2",
    "tratamiento_nivel_3",
    "id_tratamiento_nivel_3",
    "capitulo_ler",
    "subcapitulo_ler",
    "nombre_ler",
    "ler_capitulo_codigo",
    "ler_capitulo_descripcion",
    "ler_subcapitulo_codigo",
    "ler_subcapitulo_descripcion",
    "ler_codigo",
    "ler_descripcion",
    "comuna",
    "id_comuna",
    "provincia",
    "region",
    "id_region",
    "latitud",
    "longitud",
    "nombre_establecimiento_trazabilidad",
    "razon_social_trazabilidad",
    "rut_razon_social_trazabilidad",
    "comuna_trazabilidad",
    "id_comuna_trazabilidad",
    "region_trazabilidad",
]

ENTRADA_SALIDA_MAP = {"1": "Entrada", "2": "Salida"}
DEFAULT_ENTRADA_SALIDA = "Salida"
FLOAT_COLUMNS = ("cantidad_toneladas", "latitud", "longitud")
INT_COLUMNS = (
    "anio",
    "mes",
    "id_vu",
    "id_ciiu4",
    "id_ciiu6",
    "id_comuna",
    "id_region",
    "id_tratamiento_nivel_3",
    "id_tratamiento_nivel_2",
    "id_tratamiento_nivel_1",
    "id_vu_trazabilidad",
    "id_comuna_trazabilidad",
)
LER_FIELD_SPLITS: Dict[str, Tuple[str, str]] = {
    "capitulo_ler": ("ler_capitulo_codigo", "ler_capitulo_descripcion"),
    "subcapitulo_ler": ("ler_subcapitulo_codigo", "ler_subcapitulo_descripcion"),
    "nombre_ler": ("ler_codigo", "ler_descripcion"),
}


def summarize_null_ratios(df: pd.DataFrame, *, top_n: int = 10) -> Dict[str, float]:
    """Return the top-N null ratios as a dictionary."""
    if df.empty:
        return {}
    ratios = (df.isna().sum() / len(df)).sort_values(ascending=False)
    return ratios.head(top_n).round(3).to_dict()


def profile_dataset(df: pd.DataFrame) -> QualitySnapshot:
    """Compute a lightweight data quality profile."""
    profile_payload = {
        "row_count": int(len(df)),
        "column_count": int(len(df.columns)),
        "generated_at": datetime.now(UTC).isoformat(),
    }
    duplicates = int(df.duplicated().sum())
    sampled_cardinality = {
        column: int(df[column].nunique(dropna=True))
        for column in df.columns[:5]
    }
    null_ratios = summarize_null_ratios(df)
    LOGGER.info("Profile snapshot: %s", profile_payload)
    LOGGER.info("Duplicate rows: %s", duplicates)
    LOGGER.info("Sample cardinalities: %s", sampled_cardinality)
    LOGGER.info("Null ratios (top %s): %s", len(null_ratios), null_ratios)
    return QualitySnapshot(
        profile=profile_payload,
        null_ratios=null_ratios,
        duplicate_rows=duplicates,
    )


def _strip_accents(value: str) -> str:
    return "".join(
        char for char in unicodedata.normalize("NFKD", value) if not unicodedata.combining(char)
    )


def normalize_column_name(name: str) -> str:
    """Convert column names to snake_case identifiers."""
    normalized = _strip_accents(name)
    normalized = normalized.lower()
    normalized = re.sub(r"[^a-z0-9]+", "_", normalized).strip("_")
    overrides = {"ano": "anio"}
    return overrides.get(normalized, normalized)


def normalize_headers(df: pd.DataFrame) -> pd.DataFrame:
    """Apply canonical normalization to column headers."""
    renamed = df.rename(columns=lambda col: normalize_column_name(str(col)))
    ordered = [column for column in BASE_COLUMN_ORDER if column in renamed.columns]
    remaining = [column for column in renamed.columns if column not in ordered]
    missing = sorted(set(BASE_COLUMN_ORDER) - set(renamed.columns))
    if missing:
        LOGGER.warning("Columns missing after normalization: %s", missing)
    return renamed.loc[:, ordered + remaining]


def _to_float(series: pd.Series) -> pd.Series:
    cleaned = (
        series.astype("string")
        .str.replace(" ", "", regex=False)
        .str.replace(".", "", regex=False)
        .str.replace(",", ".", regex=False)
    )
    return pd.to_numeric(cleaned, errors="coerce")


def _to_int(series: pd.Series) -> pd.Series:
    return pd.to_numeric(series, errors="coerce").astype("Int64")


def clean_rut_series(series: pd.Series) -> pd.Series:
    cleaned = series.astype("string").str.strip().str.upper()
    cleaned = cleaned.replace({"": pd.NA})
    cleaned = cleaned.str.replace(r"[^0-9K]", "", regex=True)

    def _format(value: str | None) -> str | None:
        if value in (None, ""):
            return None
        if len(value) <= 1:
            return value
        return f"{value[:-1]}-{value[-1]}"

    return cleaned.map(_format, na_action="ignore")


def parse_temporal_features(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    if "anio" in df.columns:
        df["anio"] = _to_int(df["anio"])
    if "mes" in df.columns:
        df["mes"] = _to_int(df["mes"])
        df["mes"] = df["mes"].where(df["mes"].between(1, 12), other=pd.NA)
    if {"anio", "mes"}.issubset(df.columns):
        valid = df["anio"].notna() & df["mes"].notna()
        df["fecha_periodo"] = pd.NA
        if valid.any():
            periods = pd.PeriodIndex.from_fields(
                year=df.loc[valid, "anio"].astype(int),
                month=df.loc[valid, "mes"].astype(int),
                freq="M",
            )
            df.loc[valid, "fecha_periodo"] = periods.astype(str)
    return df


def clean_core_fields(df: pd.DataFrame) -> pd.DataFrame:
    """Standardise numeric, geo and identifier fields."""
    df = df.copy()
    for column in FLOAT_COLUMNS:
        if column in df.columns:
            df[column] = _to_float(df[column])
    if "cantidad_toneladas" in df.columns:
        df["cantidad_toneladas"] = df["cantidad_toneladas"].clip(lower=0.0)
    for column in INT_COLUMNS:
        if column in df.columns:
            df[column] = _to_int(df[column])
    df = parse_temporal_features(df)
    if "latitud" in df.columns:
        df["latitud"] = df["latitud"].clip(lower=-90, upper=90)
    if "longitud" in df.columns:
        df["longitud"] = df["longitud"].clip(lower=-180, upper=180)
    if "rut" in df.columns:
        df["rut"] = clean_rut_series(df["rut"])
    if "rut_razon_social_trazabilidad" in df.columns:
        df["rut_razon_social_trazabilidad"] = clean_rut_series(
            df["rut_razon_social_trazabilidad"]
        )
    if "entrada_salida" in df.columns:
        df["entrada_salida"] = (
            df["entrada_salida"].astype("string").map(ENTRADA_SALIDA_MAP).fillna(
                DEFAULT_ENTRADA_SALIDA
            )
        )
    return df


def split_taxonomy_column(df: pd.DataFrame, source: str, targets: Tuple[str, str]) -> pd.DataFrame:
    if source not in df.columns:
        return df
    left_key, right_key = targets
    parts = df[source].astype("string").str.split("|", n=1, expand=True)
    df[left_key] = parts[0].str.strip()
    if parts.shape[1] > 1:
        df[right_key] = parts[1].str.strip()
    else:
        df[right_key] = pd.NA
    return df


def normalize_taxonomies(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    for source, targets in LER_FIELD_SPLITS.items():
        df = split_taxonomy_column(df, source, targets)
    text_columns = [
        "tratamiento_nivel_1",
        "tratamiento_nivel_2",
        "tratamiento_nivel_3",
        "region",
        "region_trazabilidad",
        "comuna",
        "comuna_trazabilidad",
        "rubro_vu",
    ]
    for column in text_columns:
        if column in df.columns:
            df[column] = df[column].astype("string").str.strip().str.title()
    return df


def calculate_aggregates(df: pd.DataFrame) -> Dict[str, pd.DataFrame]:
    """Produce analytics-friendly aggregates."""
    aggregates: Dict[str, pd.DataFrame] = {}
    if {"region", "cantidad_toneladas"}.issubset(df.columns):
        region_summary = (
            df.groupby("region", dropna=False)["cantidad_toneladas"]
            .agg(["sum", "mean", "count"])
            .rename(
                columns={
                    "sum": "toneladas_sum",
                    "mean": "toneladas_promedio",
                    "count": "registros",
                }
            )
            .sort_values("toneladas_sum", ascending=False)
            .reset_index()
        )
        aggregates["region_summary"] = region_summary
    if {"region", "tratamiento_nivel_1", "cantidad_toneladas"}.issubset(df.columns):
        treatment_summary = (
            df.groupby(["region", "tratamiento_nivel_1"], dropna=False)[
                "cantidad_toneladas"
            ]
            .sum()
            .reset_index()
            .rename(columns={"cantidad_toneladas": "toneladas"})
            .sort_values("toneladas", ascending=False)
        )
        aggregates["region_treatment"] = treatment_summary
    return aggregates
