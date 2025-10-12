"""Output structures for the ETL pipeline."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Dict

import pandas as pd

from .quality import QualitySnapshot


@dataclass(frozen=True)
class PipelineArtifacts:
    """Container aggregating ETL outputs."""

    raw: pd.DataFrame
    cleaned: pd.DataFrame
    aggregates: Dict[str, pd.DataFrame]
    quality: QualitySnapshot
