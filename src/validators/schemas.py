"""Dataset validation schemas using Pandera."""

from __future__ import annotations

import pandas as pd
import pandera.pandas as pa

from src.utils.logging import get_logger

LOGGER = get_logger(__name__)


CLEANED_SCHEMA = pa.DataFrameSchema(
    {
        "anio": pa.Column(pa.Int64, checks=pa.Check.in_range(2000, 2100), nullable=False),
    "mes": pa.Column(pa.Float64, checks=pa.Check.in_range(1, 12), nullable=True),
        "fecha_periodo": pa.Column(
            pa.String,
            checks=pa.Check.str_matches(r"^\d{4}-\d{2}$"),
            nullable=True,
        ),
        "cantidad_toneladas": pa.Column(pa.Float64, checks=pa.Check.ge(0)),
        "latitud": pa.Column(pa.Float64, checks=pa.Check.in_range(-90, 90), nullable=True),
        "longitud": pa.Column(pa.Float64, checks=pa.Check.in_range(-180, 180), nullable=True),
        "entrada_salida": pa.Column(pa.String, checks=pa.Check.isin(["Entrada", "Salida"])),
        "region": pa.Column(pa.String, nullable=True),
    },
    coerce=True,
    strict=False,
)


def ensure_valid_schema(df: pd.DataFrame) -> pd.DataFrame:
    """Validate the cleaned dataset and emit logs."""
    CLEANED_SCHEMA.validate(df, lazy=True)
    LOGGER.info("Validated dataset schema: rows=%s", len(df))
    return df
