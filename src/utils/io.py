"""I/O utilities with explicit error handling."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

import pandas as pd

from .logging import get_logger

LOGGER = get_logger(__name__)


def resolve_path_safe(path: Path) -> Path:
    """Ensure the parent folder exists before using a path."""
    path.parent.mkdir(parents=True, exist_ok=True)
    return path


def save_json(payload: dict[str, Any], target: Path) -> Path:
    """Persist JSON content with UTF-8 encoding."""
    target = resolve_path_safe(target)
    target.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    LOGGER.info("Saved JSON report: %s", target)
    return target


def save_parquet(df: pd.DataFrame, target: Path) -> Path:
    """Write a DataFrame to a Parquet file with snappy compression."""
    target = resolve_path_safe(target)
    df.to_parquet(target, index=False)
    LOGGER.info("Saved parquet dataset: %s", target)
    return target


def save_csv(df: pd.DataFrame, target: Path) -> Path:
    """Write a DataFrame to CSV using ; as delimiter for regional compatibility."""
    target = resolve_path_safe(target)
    df.to_csv(target, index=False, sep=";")
    LOGGER.info("Saved csv dataset: %s", target)
    return target
