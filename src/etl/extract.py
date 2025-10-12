"""Extraction routines for the RNP dataset."""

from __future__ import annotations

import pandas as pd

from src.data_models import ETLConfig
from src.utils.logging import get_logger

LOGGER = get_logger(__name__)


def extract_raw_dataset(config: ETLConfig) -> pd.DataFrame:
    """Load the raw CSV dataset using configuration settings."""
    raw_path = config.paths.raw_data
    if not raw_path.exists():
        raise FileNotFoundError(f"Raw dataset not found at {raw_path}")

    df = pd.read_csv(
        raw_path,
        encoding=config.encoding,
        sep=config.separator,
        dtype="string",
        na_values=config.null_tokens,
    )
    LOGGER.info(
        "Extracted raw dataset | rows=%s | columns=%s | path=%s",
        len(df),
        len(df.columns),
        raw_path,
    )
    return df
