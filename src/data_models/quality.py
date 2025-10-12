"""Structures describing quality metrics captured during the ETL."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Mapping


@dataclass(frozen=True)
class QualitySnapshot:
    """Lightweight container for quality metrics."""

    profile: Mapping[str, object]
    null_ratios: Mapping[str, float]
    duplicate_rows: int
