#!/usr/bin/env python3
"""Convenience script to run the ETL inside the virtual environment."""

from __future__ import annotations

from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
PYTHON_BIN = ROOT / ".venv" / "bin" / "python"


def main() -> None:
    if not PYTHON_BIN.exists():
        raise RuntimeError("Virtual environment not found at .venv/bin/python")
    subprocess.run([str(PYTHON_BIN), str(ROOT / "main.py")], check=True)


if __name__ == "__main__":
    main()
