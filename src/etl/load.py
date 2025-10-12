"""Loading and persistence utilities."""

from __future__ import annotations

from typing import Dict

import pandas as pd

from src.data_models import ETLConfig, QualitySnapshot
from src.utils.io import save_csv, save_json, save_parquet


def persist_clean_data(df: pd.DataFrame, config: ETLConfig) -> None:
    save_parquet(df, config.paths.processed_data)


def persist_aggregates(aggregates: Dict[str, pd.DataFrame], config: ETLConfig) -> None:
    for name, table in aggregates.items():
        target = config.paths.processed_data.parent / f"{name}.csv"
        save_csv(table, target)


def persist_quality_report(snapshot: QualitySnapshot, config: ETLConfig) -> None:
    payload = {
        **snapshot.profile,
        "null_ratios": snapshot.null_ratios,
        "duplicate_rows": snapshot.duplicate_rows,
    }
    save_json(payload, config.paths.quality_report)
