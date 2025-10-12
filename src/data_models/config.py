"""Configuration dataclasses for the ETL pipeline."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any, Mapping

import yaml


@dataclass(frozen=True)
class AppPaths:
    """Canonical paths used across the pipeline."""

    project_root: Path
    raw_data: Path
    processed_data: Path
    aggregates: Path
    quality_report: Path
    logs_dir: Path

    @staticmethod
    def from_root(root: Path) -> "AppPaths":
        data_dir = root / "data"
        processed_dir = data_dir / "processed"
        return AppPaths(
            project_root=root,
            raw_data=data_dir / "raw" / "rinp_generacion_2023_cl.csv",
            processed_data=processed_dir / "rinp_generacion_2023_cl_clean.parquet",
            aggregates=processed_dir / "region_summary.csv",
            quality_report=root / "logs" / "quality_metrics.json",
            logs_dir=root / "logs",
        )


@dataclass(frozen=True)
class ETLConfig:
    """Configuration knobs for the ETL."""

    paths: AppPaths
    encoding: str = "latin-1"
    separator: str = ";"
    null_tokens: tuple[str, ...] = ("", "NA", "N/A", "nan", "s.i.")

    @staticmethod
    def from_mapping(mapping: Mapping[str, Any], *, project_root: Path) -> "ETLConfig":
        path_config = mapping.get("paths", {})
        paths = AppPaths(
            project_root=project_root,
            raw_data=project_root / path_config.get(
                "raw_data", "data/raw/rinp_generacion_2023_cl.csv"
            ),
            processed_data=project_root / path_config.get(
                "processed_data", "data/processed/rinp_generacion_2023_cl_clean.parquet"
            ),
            aggregates=project_root / path_config.get(
                "aggregates", "data/processed/region_summary.csv"
            ),
            quality_report=project_root / path_config.get(
                "quality_report", "logs/quality_metrics.json"
            ),
            logs_dir=project_root / path_config.get("logs_dir", "logs"),
        )
        null_tokens = mapping.get(
            "null_tokens",
            ("", "NA", "N/A", "nan", "s.i."),
        )
        if not isinstance(null_tokens, (list, tuple)):
            raise ValueError("null_tokens must be a sequence of strings")

        return ETLConfig(
            paths=paths,
            encoding=mapping.get("encoding", "latin-1"),
            separator=mapping.get("separator", ";"),
            null_tokens=tuple(str(token) for token in null_tokens),
        )

    @staticmethod
    def from_yaml(path: Path, *, project_root: Path) -> "ETLConfig":
        payload = yaml.safe_load(path.read_text(encoding="utf-8"))
        if not isinstance(payload, Mapping):
            raise ValueError("Configuration YAML must contain a mapping at the root")
        return ETLConfig.from_mapping(payload, project_root=project_root)
