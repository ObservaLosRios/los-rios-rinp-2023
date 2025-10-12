"""Unit tests for transformation utilities."""

from __future__ import annotations

import pandas as pd

from src.etl.transform import clean_core_fields, normalize_headers, normalize_taxonomies


def test_normalize_headers_orders_columns() -> None:
    df = pd.DataFrame({
        "Año": [2023],
        "Mes": [0],
        "Cantidad Toneladas": ["1.234"],
    })
    normalized = normalize_headers(df)
    assert list(normalized.columns[:3]) == ["anio", "mes", "cantidad_toneladas"]


def test_clean_core_fields_casts_numeric_and_dates() -> None:
    df = pd.DataFrame({
        "anio": ["2023"],
        "mes": ["01"],
        "cantidad_toneladas": ["1.234,5"],
        "latitud": ["-33,45"],
        "longitud": ["-70,67"],
        "rut": ["12.345.678-9"],
        "entrada_salida": ["2"],
    })
    cleaned = clean_core_fields(df)
    assert cleaned.loc[0, "cantidad_toneladas"] == 1234.5
    assert cleaned.loc[0, "latitud"] == -33.45
    assert cleaned.loc[0, "entrada_salida"] == "Salida"
    assert cleaned.loc[0, "fecha_periodo"] == "2023-01"


def test_normalize_taxonomies_splits_ler_fields() -> None:
    df = pd.DataFrame({
        "capitulo_ler": ["16 | Residuos"],
        "subcapitulo_ler": ["01 | Vehículos"],
        "nombre_ler": ["16 01 03 | Neumáticos"],
        "tratamiento_nivel_1": ["valorizacion"],
    })
    normalized = normalize_taxonomies(df)
    assert normalized.loc[0, "ler_capitulo_codigo"] == "16"
    assert normalized.loc[0, "ler_capitulo_descripcion"] == "Residuos"
    assert normalized.loc[0, "tratamiento_nivel_1"] == "Valorizacion"
