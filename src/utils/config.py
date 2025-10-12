"""Configuration loader utilities."""

from __future__ import annotations

from pathlib import Path

from src.data_models import ETLConfig


def load_config(path: Path | None = None) -> ETLConfig:
    """Load ETL configuration from YAML, defaulting to config/default.yaml."""
    project_root = Path.cwd()
    config_path = path or (project_root / "config" / "default.yaml")
    if not config_path.exists():
        raise FileNotFoundError(f"Configuration file not found at {config_path}")
    return ETLConfig.from_yaml(config_path, project_root=project_root)
