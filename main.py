"""Entry point for running the RNP ETL pipeline."""

from __future__ import annotations

import argparse
from pathlib import Path

from src.etl import run_pipeline
from src.utils import get_logger, load_config

LOGGER = get_logger(__name__)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the RNP ETL pipeline")
    parser.add_argument(
        "--config",
        type=Path,
        default=None,
        help="Optional path to a YAML configuration file.",
    )
    parser.add_argument(
        "--no-persist",
        action="store_true",
        help="Run the pipeline without writing artifacts to disk.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    config = load_config(args.config)
    artifacts = run_pipeline(config, persist=not args.no_persist)
    LOGGER.info(
        "Pipeline finished | rows_clean=%s | aggregates=%s",
        len(artifacts.cleaned),
        list(artifacts.aggregates.keys()),
    )


if __name__ == "__main__":
    main()
