"""Demonstration script for quick sanity checks."""

from __future__ import annotations

from src.etl import run_pipeline
from src.utils import get_logger, load_config

LOGGER = get_logger(__name__)


def main() -> None:
    config = load_config()
    artifacts = run_pipeline(config, persist=False)
    LOGGER.info("Raw rows: %s", len(artifacts.raw))
    LOGGER.info("Clean rows: %s", len(artifacts.cleaned))
    LOGGER.info("Aggregates available: %s", list(artifacts.aggregates))
    print(artifacts.cleaned.head())


if __name__ == "__main__":
    main()
