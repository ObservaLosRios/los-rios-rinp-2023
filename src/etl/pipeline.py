"""High-level orchestration for the ETL pipeline."""

from __future__ import annotations

from src.data_models import ETLConfig, PipelineArtifacts, QualitySnapshot
from src.etl.extract import extract_raw_dataset
from src.etl.load import (
    persist_aggregates,
    persist_clean_data,
    persist_quality_report,
)
from src.etl.transform import (
    calculate_aggregates,
    clean_core_fields,
    normalize_headers,
    normalize_taxonomies,
    profile_dataset,
    summarize_null_ratios,
)
from src.utils.logging import get_logger
from src.validators import ensure_valid_schema

LOGGER = get_logger(__name__)


def run_pipeline(config: ETLConfig, *, persist: bool = True) -> PipelineArtifacts:
    """Execute the ETL pipeline end-to-end."""
    LOGGER.info("Starting ETL pipeline execution")
    raw_df = extract_raw_dataset(config)
    raw_quality = profile_dataset(raw_df)

    normalized_df = normalize_headers(raw_df)
    cleaned_df = clean_core_fields(normalized_df)
    taxonomy_df = normalize_taxonomies(cleaned_df)
    validated_df = ensure_valid_schema(taxonomy_df)

    post_quality = QualitySnapshot(
        profile={
            **raw_quality.profile,
            "post_clean_row_count": int(len(validated_df)),
        },
        null_ratios=summarize_null_ratios(validated_df),
        duplicate_rows=raw_quality.duplicate_rows,
    )

    aggregates = calculate_aggregates(validated_df)

    if persist:
        persist_clean_data(validated_df, config)
        persist_aggregates(aggregates, config)
        persist_quality_report(post_quality, config)

    LOGGER.info("ETL pipeline completed successfully")
    return PipelineArtifacts(
        raw=raw_df,
        cleaned=validated_df,
        aggregates=aggregates,
        quality=post_quality,
    )
