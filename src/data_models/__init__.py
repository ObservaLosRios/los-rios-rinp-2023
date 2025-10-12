"""Data models for the ETL pipeline."""

from .config import AppPaths, ETLConfig
from .pipeline import PipelineArtifacts
from .quality import QualitySnapshot

__all__ = [
    "AppPaths",
    "ETLConfig",
    "PipelineArtifacts",
    "QualitySnapshot",
]
