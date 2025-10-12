"""Integration tests for the ETL pipeline."""

from __future__ import annotations

from src.etl import run_pipeline
from src.utils import load_config


def test_pipeline_runs_without_persisting() -> None:
    config = load_config()
    artifacts = run_pipeline(config, persist=False)
    assert not artifacts.cleaned.empty
    assert "region_summary" in artifacts.aggregates
