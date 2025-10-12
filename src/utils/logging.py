"""Logging utilities with structured context."""

from __future__ import annotations

import logging
import sys
from typing import Optional

_LOG_FORMAT = (
    "%(asctime)s | %(levelname)s | %(name)s | %(message)s"
)


def configure_root_logger(level: int = logging.INFO) -> None:
    """Configure application-wide logging with sane defaults."""
    root_logger = logging.getLogger()
    for handler in list(root_logger.handlers):
        root_logger.removeHandler(handler)
    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(logging.Formatter(_LOG_FORMAT))
    root_logger.addHandler(handler)
    root_logger.setLevel(level)


def get_logger(name: Optional[str] = None) -> logging.Logger:
    """Return a module-level logger, ensuring root configuration exists."""
    logger = logging.getLogger(name)
    if not logging.getLogger().handlers:
        configure_root_logger()
    return logger
