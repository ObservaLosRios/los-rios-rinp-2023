"""Generate the tonnage lollipop chart and export it to self-contained HTML."""
from __future__ import annotations

from pathlib import Path
from typing import Final

import json
import math

import pandas as pd
import plotly.graph_objects as go
from plotly.utils import PlotlyJSONEncoder

PROJECT_ROOT: Final[Path] = Path(__file__).resolve().parents[1]
PROCESSED_DIR: Final[Path] = PROJECT_ROOT / "data" / "processed"
OUTPUT_HTML: Final[Path] = PROJECT_ROOT / "toneladasdeclarasporregion.html"
FOCUS_OUTPUT_HTML: Final[Path] = PROJECT_ROOT / "refionesfoos_toneladas_declaras.html"
TREATMENT_OUTPUT_HTML: Final[Path] = PROJECT_ROOT / "tratamientos_regiones_foco.html"
GENERATORS_OUTPUT_HTML: Final[Path] = PROJECT_ROOT / "top_generadores_los_rios.html"
RUBROS_OUTPUT_HTML: Final[Path] = PROJECT_ROOT / "principales_rubros_los_rios.html"

TONELADAS_CHART_ID: Final[str] = "toneladas-por-region"
FOCUS_CHART_ID: Final[str] = "regiones-foco-toneladas"
TREATMENT_CHART_ID: Final[str] = "tratamientos-regiones-foco"
GENERATORS_CHART_ID: Final[str] = "top-generadores-los-rios"
RUBROS_CHART_ID: Final[str] = "principales-rubros-los-rios"

HIGHLIGHT_REGION: Final[str] = "Los Ríos"
HIGHLIGHT_COLOR: Final[str] = "#d62828"
NEUTRAL_COLOR: Final[str] = "#9ca3af"

ECONOMIST_COLORS: Final[list[str]] = [
    "#005f73",
    "#0a9396",
    "#94d2bd",
    "#ee9b00",
    "#ca6702",
    "#bb3e03",
    "#ae2012",
    "#001219",
]

ECONOMIST_FONT: Final[str] = "Georgia, serif"

REGION_WRAP_MAP: Final[dict[str, str]] = {
    "Metropolitana De Santiago": "Metropolitana",
    "Los Ríos": "Los Ríos",
    "Los Lagos": "Los Lagos",
}

FOCUS_REGIONS: Final[list[str]] = [
    "Los Ríos",
    "Biobío",
    "Metropolitana De Santiago",
    "Los Lagos",
    "Araucanía",
]


def region_display_name(region: str) -> str:
    """Return the preferred display name for a region."""

    return REGION_WRAP_MAP.get(region, region)


def apply_economist_style(
    fig: go.Figure,
    *,
    font_family: str = "Georgia, serif",
    base_color: str = "#355070",
    highlight_color: str = "#d62828",
    background_color: str = "#f7f2ea",
    grid_color: str = "#d9d3c5",
    underline: bool = True,
    auto_marker_line: bool = True,
) -> go.Figure:
    """Apply the custom style shared across the project plots."""

    text_color = "#1e1b18"

    fig.update_layout(
        template="plotly_white",
        font=dict(family=font_family, color=text_color, size=15),
        title=dict(font=dict(family=font_family, size=22, color=text_color), x=0.0, y=0.96),
        xaxis=dict(
            title=dict(font=dict(family=font_family, color=text_color, size=14)),
            tickfont=dict(family=font_family, color=text_color, size=12),
            showgrid=True,
            gridcolor=grid_color,
            griddash="dot",
            zeroline=False,
            linecolor=grid_color,
        ),
        yaxis=dict(
            title=dict(font=dict(family=font_family, color=text_color, size=14)),
            tickfont=dict(family=font_family, color=text_color, size=12),
            showgrid=False,
            zeroline=False,
            linecolor=grid_color,
        ),
        legend=dict(font=dict(family=font_family, color=text_color, size=12)),
        hoverlabel=dict(bgcolor="#ffffff", font=dict(family=font_family, color=text_color)),
        bargap=0.28,
        plot_bgcolor=background_color,
        paper_bgcolor=background_color,
        margin=dict(l=90, r=40, t=95, b=70),
        colorway=[base_color],
    )

    if underline:
        underline_shape = dict(
            type="line",
            x0=0.0,
            x1=0.22,
            y0=1.09,
            y1=1.09,
            xref="paper",
            yref="paper",
            line=dict(color=highlight_color, width=4),
        )
        existing_shapes = list(fig.layout.shapes) if fig.layout.shapes else []
        fig.update_layout(shapes=[underline_shape, *existing_shapes])
    else:
        fig.update_layout(shapes=[])

    if auto_marker_line:
        fig.update_traces(
            marker_line_color=highlight_color,
            marker_line_width=0.7,
            selector=dict(type="bar"),
        )

    for annotation in fig.layout.annotations or []:
        annotation.font = dict(family=font_family, color="#4a4338", size=12)

    return fig


def format_spanish(number: float) -> str:
    """Format a number with Spanish decimal separators."""

    formatted = f"{number:,.1f}"
    return formatted.replace(",", "X").replace(".", ",").replace("X", ".")


def format_spanish_dynamic(number: float, *, decimals: int = 1) -> str:
    """Format a number with a configurable number of decimals using Spanish separators."""

    formatted = f"{number:,.{decimals}f}"
    return formatted.replace(",", "X").replace(".", ",").replace("X", ".")


def humanize_tonnes(value: float) -> str:
    """Return a short string describing tonnage levels."""

    if value >= 1_000_000:
        return f"{value / 1_000_000:.1f} millones t"
    if value >= 1_000:
        return f"{value / 1_000:.1f} mil t"
    return f"{value:,.0f} t"


def load_region_totals() -> pd.DataFrame:
    """Read the aggregated tonnage by region from the processed dataset."""

    df = pd.read_csv(PROCESSED_DIR / "region_summary.csv", sep=";")
    df.columns = ["region", "toneladas_sum", "toneladas_promedio", "registros"]
    df["toneladas_sum"] = pd.to_numeric(df["toneladas_sum"], errors="coerce")
    df["registros"] = pd.to_numeric(df["registros"], errors="coerce", downcast="integer")
    return df.sort_values("toneladas_sum", ascending=False).reset_index(drop=True)


def load_treatment_data() -> tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]:
    """Load treatment tonnage and derive overall and per-region shares."""

    treatment_df = pd.read_csv(PROCESSED_DIR / "region_treatment.csv", sep=";")
    treatment_df.columns = ["region", "tratamiento_nivel_1", "toneladas"]
    treatment_df["toneladas"] = pd.to_numeric(treatment_df["toneladas"], errors="coerce")
    treatment_df["region"] = treatment_df["region"].astype(str)
    treatment_df["tratamiento_nivel_1"] = treatment_df["tratamiento_nivel_1"].astype(str)

    overall_mix = (
        treatment_df.groupby("tratamiento_nivel_1", as_index=False)["toneladas"].sum()
        .sort_values("toneladas", ascending=False)
        .reset_index(drop=True)
    )
    total_treatment_tonnes = overall_mix["toneladas"].sum()
    overall_mix["share"] = overall_mix["toneladas"] / total_treatment_tonnes if total_treatment_tonnes else 0.0

    focus_treatment_df = treatment_df[treatment_df["region"].isin(FOCUS_REGIONS)].copy()
    if not focus_treatment_df.empty:
        focus_treatment_df["share"] = (
            focus_treatment_df.groupby("region")["toneladas"].transform(
                lambda s: s / s.sum() if s.sum() else 0.0
            )
        )
    else:
        focus_treatment_df["share"] = 0.0

    focus_treatment_df["share"] = focus_treatment_df["share"].astype(float)

    return treatment_df, overall_mix, focus_treatment_df


def load_los_rios_generators(limit: int = 10) -> pd.DataFrame:
    """Aggregate the top waste generators located in Los Ríos."""

    parquet_path = PROCESSED_DIR / "rinp_generacion_2023_cl_clean.parquet"
    clean_df = pd.read_parquet(parquet_path)

    los_rios_generators = (
        clean_df[clean_df["region"] == "Los Ríos"]
        .groupby("razon_social", dropna=False)["cantidad_toneladas"].sum()
        .sort_values(ascending=False)
        .head(limit)
        .reset_index()
        .rename(columns={"cantidad_toneladas": "toneladas"})
    )

    los_rios_generators["razon_social"] = los_rios_generators["razon_social"].fillna("Sin información")
    los_rios_generators["toneladas"] = los_rios_generators["toneladas"].astype(float)

    return los_rios_generators


def load_los_rios_rubros(limit: int = 10) -> pd.DataFrame:
    """Aggregate the leading sectors in Los Ríos by generated volume."""

    parquet_path = PROCESSED_DIR / "rinp_generacion_2023_cl_clean.parquet"
    clean_df = pd.read_parquet(parquet_path)

    los_rios_rubros = (
        clean_df[clean_df["region"] == "Los Ríos"]
        .groupby("rubro_vu", dropna=False)["cantidad_toneladas"].sum()
        .sort_values(ascending=False)
        .head(limit)
        .reset_index()
        .rename(columns={"cantidad_toneladas": "toneladas"})
    )

    los_rios_rubros["rubro_vu"] = los_rios_rubros["rubro_vu"].fillna("Sin clasificar")
    los_rios_rubros["toneladas"] = los_rios_rubros["toneladas"].astype(float)

    return los_rios_rubros


def build_lollipop_dataframe(region_df: pd.DataFrame) -> pd.DataFrame:
    """Prepare the dataframe used to draw the lollipop chart."""

    lollipop_df = (
        region_df[["region", "toneladas_sum"]]
        .dropna()
        .sort_values("toneladas_sum", ascending=False)
        .reset_index(drop=True)
    )

    lollipop_df["region_display"] = (
        lollipop_df["region"].astype(str).map(REGION_WRAP_MAP).fillna(lollipop_df["region"].astype(str))
    )

    total_tonnes = lollipop_df["toneladas_sum"].sum()
    lollipop_df["tonnes_millions"] = lollipop_df["toneladas_sum"] / 1_000_000
    lollipop_df["participacion"] = lollipop_df["toneladas_sum"] / total_tonnes

    lollipop_df["label"] = lollipop_df.apply(
        lambda row: f"{format_spanish(row['tonnes_millions'])} M t · {format_spanish(row['participacion'] * 100)}%",
        axis=1,
    )

    return lollipop_df


def build_focus_dataframe(region_df: pd.DataFrame) -> pd.DataFrame:
    """Prepare the subset of focus regions used for the bar chart."""

    focus_df = region_df[region_df["region"].isin(FOCUS_REGIONS)].copy()
    focus_df = focus_df.sort_values("toneladas_sum", ascending=False).reset_index(drop=True)

    label_map = {
        "Metropolitana De Santiago": "Metropolitana",
        "Los Ríos": "Los Ríos",
        "Los Lagos": "Los Lagos",
        "Biobío": "Biobío",
        "Araucanía": "Araucanía",
    }

    focus_df["region"] = focus_df["region"].astype(str)
    focus_df["region_display"] = focus_df["region"].map(label_map).fillna(focus_df["region"])

    total_tonnes = region_df["toneladas_sum"].sum()
    focus_df["participacion"] = focus_df["toneladas_sum"] / total_tonnes
    focus_df["tonnes_millions"] = focus_df["toneladas_sum"] / 1_000_000

    focus_df["label"] = focus_df.apply(
        lambda row: (
            f"{format_spanish_dynamic(row['tonnes_millions'])} M t\n"
            f"({format_spanish_dynamic(row['participacion'] * 100)}%)"
        ),
        axis=1,
    )

    return focus_df


def build_chart(lollipop_df: pd.DataFrame) -> go.Figure:
    """Create the Plotly lollipop chart highlighting Los Ríos."""

    fig = go.Figure()

    for _, row in lollipop_df.iterrows():
        color = HIGHLIGHT_COLOR if row["region"] == HIGHLIGHT_REGION else NEUTRAL_COLOR
        region_display = row["region_display"]

        fig.add_trace(
            go.Scatter(
                x=[0, row["tonnes_millions"]],
                y=[region_display, region_display],
                mode="lines",
                line=dict(color=color, width=3),
                hoverinfo="skip",
                showlegend=False,
            )
        )
        fig.add_trace(
            go.Scatter(
                x=[row["tonnes_millions"]],
                y=[region_display],
                mode="markers+text",
                marker=dict(color=color, size=14, line=dict(color="#ffffff", width=1.5)),
                text=[row["label"]],
                textposition="middle right",
                textfont=dict(family="Georgia, serif", color="#1e1b18", size=12),
                hovertemplate=(
                    "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>"
                ),
                customdata=[[region_display, row["toneladas_sum"], row["participacion"]]],
                showlegend=False,
            )
        )

    fig = apply_economist_style(fig, base_color=NEUTRAL_COLOR)

    if fig.layout.shapes:
        fig.layout.shapes[0].update(x0=-0.22, x1=0.84)

    max_millions = lollipop_df["tonnes_millions"].max()
    tick_max = math.ceil(max_millions * 10) / 10
    tick_step = max(0.2, tick_max / 6)

    tick_values = [round(i * tick_step, 1) for i in range(int(tick_max / tick_step) + 1)]
    tick_values = sorted(set(tick_values))
    tick_text = [f"{format_spanish(val)} M" for val in tick_values]

    x_upper_padding = tick_step if tick_step > 0 else 0.2
    xaxis_range = [0, tick_max + x_upper_padding]

    fig.update_traces(textfont=dict(size=12, family="Georgia, serif"))

    fig.update_layout(
        title="Toneladas declaradas por región",
        title_font=dict(size=24),
        xaxis_title="Toneladas",
        yaxis_title="",
        xaxis=dict(tickvals=tick_values, ticktext=tick_text, rangemode="tozero", range=xaxis_range),
    yaxis=dict(categoryorder="array", categoryarray=lollipop_df["region_display"].tolist()),
        width=1380,
        height=760,
        margin=dict(l=200, r=170, t=130, b=130),
        annotations=[
            dict(
                text="Chile, RNP 2023",
                x=0,
                y=1.06,
                xref="paper",
                yref="paper",
                showarrow=False,
                font=dict(family="Georgia, serif", size=14, color="#4a4338"),
            ),
            dict(
                text="Fuente: Registro Nacional de Emisiones y Transferencias de Residuos (RNP) 2023",
                x=0,
                y=-0.22,
                xref="paper",
                yref="paper",
                showarrow=False,
                font=dict(family="Georgia, serif", size=11, color="#6e6252"),
            ),
        ],
    )

    return fig


def build_focus_chart(focus_df: pd.DataFrame) -> go.Figure:
    """Create the bar chart highlighting the focus regions."""

    palette_focus = {
        "Los Ríos": "#d62828",
        "Biobío": "#495057",
        "Metropolitana De Santiago": "#686d76",
        "Los Lagos": "#8c8f99",
        "Araucanía": "#b0b4ba",
    }
    neutral_color = "#686d76"
    bar_colors = [palette_focus.get(region, neutral_color) for region in focus_df["region"]]

    fig = go.Figure(
        go.Bar(
            x=focus_df["region_display"],
            y=focus_df["tonnes_millions"],
            marker=dict(color=bar_colors, line=dict(color="rgba(0,0,0,0)", width=0)),
            text=focus_df["label"],
            textposition="outside",
            textfont=dict(family="Georgia, serif", color="#1e1b18", size=13),
            hovertemplate=(
                "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}"
                "<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>"
            ),
            customdata=focus_df[["region_display", "toneladas_sum", "participacion"]].to_numpy().tolist(),
            cliponaxis=False,
            showlegend=False,
        )
    )

    fig = apply_economist_style(
        fig,
        base_color=neutral_color,
        underline=True,
        auto_marker_line=False,
    )

    if fig.layout.shapes:
        fig.layout.shapes[0].update(x0=-0.07, x1=0.95)

    max_millions = focus_df["tonnes_millions"].max()
    tick_step = 0.25 if max_millions <= 2.0 else 0.5
    tick_max = math.ceil((max_millions + tick_step * 0.2) / tick_step) * tick_step
    tick_vals = [round(tick_step * i, 2) for i in range(int(tick_max / tick_step) + 1)]
    tick_text = [f"{format_spanish_dynamic(val)} M" for val in tick_vals]
    yaxis_upper = tick_max + tick_step * 0.6

    fig.update_layout(
        title="Regiones foco: toneladas declaradas",
        xaxis_title="",
        yaxis_title="Millones de toneladas",
        xaxis=dict(
            tickvals=focus_df["region_display"].tolist(),
            ticktext=focus_df["region_display"].tolist(),
            tickangle=0,
            tickfont=dict(family="Georgia, serif", size=13, color="#1e1b18"),
        ),
        yaxis=dict(tickvals=tick_vals, ticktext=tick_text, range=[0, yaxis_upper]),
        bargap=0.35,
        width=1200,
        height=720,
        margin=dict(l=120, r=90, t=140, b=160),
        annotations=[
            dict(
                text="Chile, RNP 2023",
                x=0,
                y=1.05,
                xref="paper",
                yref="paper",
                showarrow=False,
                font=dict(family="Georgia, serif", size=14, color="#4a4338"),
            ),
            dict(
                text="Los Ríos se destaca en rojo para enfatizar su liderazgo entre las regiones foco",
                x=0,
                y=-0.2,
                xref="paper",
                yref="paper",
                showarrow=False,
                font=dict(family="Georgia, serif", size=11, color="#6e6252"),
            ),
            dict(
                text="Fuente: Registro Nacional de Emisiones y Transferencias de Residuos (RNP) 2023",
                x=0,
                y=-0.28,
                xref="paper",
                yref="paper",
                showarrow=False,
                font=dict(family="Georgia, serif", size=11, color="#6e6252"),
            ),
        ],
    )

    return fig


def build_treatment_chart(
    *,
    overall_mix: pd.DataFrame,
    focus_treatment_df: pd.DataFrame,
) -> go.Figure:
    """Create the dumbbell chart for treatment shares across focus regions."""

    plot_df = focus_treatment_df.copy()
    plot_df["share_pct"] = plot_df["share"] * 100
    plot_df = plot_df.sort_values(["region", "share_pct"], ascending=[True, False])

    top_treatments = (
        overall_mix.sort_values("share", ascending=False)["tratamiento_nivel_1"].unique().tolist()
    )

    priority_labels = ["Eliminación", "Valorización", "Recolección"]
    primary_treatments = [label for label in priority_labels if label in top_treatments]
    for treatment in top_treatments:
        if treatment not in primary_treatments:
            primary_treatments.append(treatment)
    primary_treatments = primary_treatments[:3]

    dumbbell_base = (
        plot_df[plot_df["tratamiento_nivel_1"].isin(primary_treatments)]
        .pivot_table(
            index="region",
            columns="tratamiento_nivel_1",
            values="share_pct",
            aggfunc="sum",
            observed=False,
        )
        .reindex(FOCUS_REGIONS)
    )

    connector_color = "#94a3b8"
    background_color = "#f7f2ea"
    grid_color = "#d9d3c5"
    text_color = "#1e1b18"
    highlight_color = "#d62828"

    marker_colors = {
        primary_treatments[i]: ECONOMIST_COLORS[i]
        for i in range(min(len(primary_treatments), len(ECONOMIST_COLORS)))
    }

    fig = go.Figure()

    connector_padding = 0.6

    for region in dumbbell_base.index:
        row = dumbbell_base.loc[region]
        region_display = region_display_name(region)
        values = row.dropna()
        if values.empty:
            continue
        sorted_values = values.sort_values()
        previous_share: float | None = None
        for idx, (treatment, share_value) in enumerate(sorted_values.items()):
            color = marker_colors.get(
                treatment,
                ECONOMIST_COLORS[(idx + 2) % len(ECONOMIST_COLORS)],
            )
            hover_text = f"<b>{region_display}</b><br>{treatment}: {share_value:.1f}%<extra></extra>"
            show_legend = region == FOCUS_REGIONS[0]

            if previous_share is not None:
                direction = 1 if share_value >= previous_share else -1
                gap = abs(share_value - previous_share)
                padding = min(connector_padding, gap / 2)
                start = previous_share + direction * padding
                end = share_value - direction * padding
                if (direction == 1 and start < end) or (direction == -1 and start > end):
                    fig.add_trace(
                        go.Scatter(
                            x=[start, end],
                            y=[region_display, region_display],
                            mode="lines",
                            line=dict(color=connector_color, width=2),
                            hoverinfo="skip",
                            showlegend=False,
                        )
                    )

            fig.add_trace(
                go.Scatter(
                    x=[share_value],
                    y=[region_display],
                    mode="markers+text",
                    marker=dict(color=color, size=12, line=dict(color="#ffffff", width=1.2)),
                    text=[f"{share_value:.0f}%"],
                    textposition="bottom center",
                    textfont=dict(family=ECONOMIST_FONT, size=12, color=text_color),
                    customdata=[[region_display, treatment, share_value]],
                    hovertemplate=hover_text,
                    name=treatment,
                    legendgroup=treatment,
                    showlegend=show_legend,
                )
            )

            previous_share = share_value

    underline_x0 = -0.20
    underline_x1 = 0.88
    underline_y = 1.12

    fig.update_layout(
        template="plotly_white",
        title=dict(
            text="Tratamientos en regiones foco",
            font=dict(family=ECONOMIST_FONT, size=24, color=text_color),
            x=0.05,
            y=0.96,
        ),
        font=dict(family=ECONOMIST_FONT, size=15, color=text_color),
        plot_bgcolor=background_color,
        paper_bgcolor=background_color,
        margin=dict(l=220, r=160, t=120, b=80),
        hoverlabel=dict(bgcolor="#ffffff", font=dict(family=ECONOMIST_FONT, color=text_color)),
        width=1200,
        height=700,
        legend=dict(itemclick=False, itemdoubleclick=False),
        shapes=[
            dict(
                type="line",
                x0=0,
                x1=0,
                y0=-0.08,
                y1=1.05,
                xref="x",
                yref="paper",
                line=dict(color=grid_color, width=1.4),
            ),
            dict(
                type="line",
                x0=underline_x0,
                x1=underline_x1,
                y0=underline_y,
                y1=underline_y,
                xref="paper",
                yref="paper",
                line=dict(color=highlight_color, width=2.5),
            ),
        ],
    )

    max_candidate = dumbbell_base.max().max() if not dumbbell_base.empty else float("nan")
    max_share = float(max_candidate) if pd.notna(max_candidate) else 0.0
    x_axis_max = math.ceil(max_share / 5) * 5 + 5 if max_share else 40

    fig.update_layout(
        xaxis=dict(
            title=dict(text="Participación (%)", font=dict(family=ECONOMIST_FONT, size=14, color=text_color)),
            tickfont=dict(family=ECONOMIST_FONT, size=12, color=text_color),
            showgrid=True,
            gridcolor=grid_color,
            griddash="dot",
            zeroline=False,
            ticksuffix="%",
            range=[0, max(40, x_axis_max)],
        ),
        yaxis=dict(
            title="",
            tickfont=dict(family=ECONOMIST_FONT, size=12, color=text_color),
            ticklabelstandoff=14,
            showgrid=False,
            zeroline=False,
            categoryorder="array",
            categoryarray=[region_display_name(region) for region in FOCUS_REGIONS],
        ),
    )

    return fig


def build_generators_chart(generators_df: pd.DataFrame) -> go.Figure:
    """Create the horizontal lollipop chart for top generators in Los Ríos."""

    plot_df = (
        generators_df.copy()
        .fillna({"razon_social": "Sin información"})
        .sort_values("toneladas", ascending=True)
        .reset_index(drop=True)
    )

    plot_df["label"] = plot_df["toneladas"].apply(humanize_tonnes)

    highlight_color = "#d62828"
    neutral_color = "#0a9396"
    background_color = "#f7f2ea"
    grid_color = "#d9d3c5"
    text_color = "#1e1b18"

    highlight_company = plot_df.iloc[-1]["razon_social"] if not plot_df.empty else None

    max_value = plot_df["toneladas"].max() if not plot_df.empty else 0.0
    x_padding = max_value * 0.10 if max_value else 1.0
    label_offset = max(max_value * 0.12, 1.0) if max_value else 1.0

    fig = go.Figure()

    for _, row in plot_df.iterrows():
        razon_social = row["razon_social"]
        toneladas = row["toneladas"]
        color = highlight_color if razon_social == highlight_company else neutral_color
        label_color = highlight_color if razon_social == highlight_company else text_color

        fig.add_trace(
            go.Scatter(
                x=[0, toneladas],
                y=[razon_social, razon_social],
                mode="lines",
                line=dict(color=color, width=2.2),
                hoverinfo="skip",
                showlegend=False,
            )
        )

        fig.add_trace(
            go.Scatter(
                x=[toneladas],
                y=[razon_social],
                mode="markers",
                marker=dict(color=color, size=12, line=dict(color="#ffffff", width=1.2)),
                hovertemplate="<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
                customdata=[[razon_social, toneladas]],
                cliponaxis=False,
                showlegend=False,
            )
        )

        fig.add_trace(
            go.Scatter(
                x=[toneladas + label_offset],
                y=[razon_social],
                mode="text",
                text=[row["label"]],
                textposition="middle left",
                textfont=dict(family=ECONOMIST_FONT, size=12, color=label_color),
                hoverinfo="skip",
                showlegend=False,
                cliponaxis=False,
            )
        )

    underline_x0 = -0.40
    underline_x1 = 0.95
    underline_y = 1.10

    fig.update_layout(
        template="plotly_white",
        title=dict(
            text="Top generadores en Los Ríos",
            font=dict(family=ECONOMIST_FONT, size=24, color=text_color),
            x=0.05,
            y=0.96,
        ),
        font=dict(family=ECONOMIST_FONT, size=15, color=text_color),
        plot_bgcolor=background_color,
        paper_bgcolor=background_color,
        margin=dict(l=250, r=200, t=120, b=80),
        hoverlabel=dict(bgcolor="#ffffff", font=dict(family=ECONOMIST_FONT, color=text_color)),
        width=1200,
        height=700,
        shapes=[
            dict(
                type="line",
                x0=0,
                x1=0,
                y0=-0.08,
                y1=1.05,
                xref="x",
                yref="paper",
                line=dict(color="#c9c1b4", width=1.2),
            ),
            dict(
                type="line",
                x0=underline_x0,
                x1=underline_x1,
                y0=underline_y,
                y1=underline_y,
                xref="paper",
                yref="paper",
                line=dict(color=highlight_color, width=4),
            ),
        ],
    )

    extra_padding = 0.05 * max_value if max_value else 0.0
    x_axis_max = max_value + x_padding + label_offset + extra_padding

    fig.update_layout(
        xaxis=dict(
            title=dict(text="Toneladas", font=dict(family=ECONOMIST_FONT, size=14, color=text_color)),
            showgrid=True,
            gridcolor=grid_color,
            griddash="dot",
            zeroline=False,
            tickfont=dict(family=ECONOMIST_FONT, size=12, color=text_color),
            range=[0, x_axis_max],
        ),
        yaxis=dict(
            title="",
            tickfont=dict(family=ECONOMIST_FONT, size=12, color=text_color),
            showgrid=False,
            zeroline=False,
            categoryorder="array",
            categoryarray=plot_df["razon_social"].tolist(),
        ),
    )

    return fig


def build_rubros_chart(rubros_df: pd.DataFrame) -> go.Figure:
    """Create the lollipop chart for leading sectors in Los Ríos."""

    plot_df = (
        rubros_df.copy()
        .fillna({"rubro_vu": "Sin clasificar"})
        .sort_values("toneladas", ascending=True)
        .reset_index(drop=True)
    )

    fig = go.Figure()

    if plot_df.empty:
        fig.update_layout(
            template="plotly_white",
            title=dict(text="Principales rubros en Los Ríos por volumen generado", font=dict(size=24)),
        )
        return fig

    plot_df["tonnes_millions"] = plot_df["toneladas"] / 1_000_000
    plot_df["share"] = plot_df["toneladas"] / plot_df["toneladas"].sum()
    plot_df["label"] = plot_df.apply(
        lambda row: f"{format_spanish(row['tonnes_millions'])} M t · {format_spanish(row['share'] * 100)}%",
        axis=1,
    )

    highlight_color = "#d62828"
    neutral_color = "#9ca3af"
    highlight_category = plot_df.iloc[-1]["rubro_vu"]

    for _, row in plot_df.iterrows():
        rubro = row["rubro_vu"]
        color = highlight_color if rubro == highlight_category else neutral_color

        fig.add_trace(
            go.Scatter(
                x=[0, row["tonnes_millions"]],
                y=[rubro, rubro],
                mode="lines",
                line=dict(color=color, width=3),
                hoverinfo="skip",
                showlegend=False,
            )
        )

        fig.add_trace(
            go.Scatter(
                x=[row["tonnes_millions"]],
                y=[rubro],
                mode="markers+text",
                marker=dict(color=color, size=14, line=dict(color="#ffffff", width=1.5)),
                text=[row["label"]],
                textposition="middle right",
                textfont=dict(family=ECONOMIST_FONT, color="#1e1b18", size=12),
                hovertemplate=(
                    "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}"
                    "<br>Participación regional: %{customdata[2]:.1%}<extra></extra>"
                ),
                customdata=[[rubro, row["toneladas"], row["share"]]],
                showlegend=False,
            )
        )

    text_color = "#1e1b18"
    background_color = "#f7f2ea"
    grid_color = "#d9d3c5"

    fig.update_layout(
        template="plotly_white",
        font=dict(family=ECONOMIST_FONT, color=text_color, size=15),
        title=dict(
            text="Principales rubros en Los Ríos por volumen generado",
            font=dict(size=24, color=text_color),
            x=0.05,
            y=0.94,
        ),
        xaxis=dict(
            title=dict(text="Toneladas", font=dict(family=ECONOMIST_FONT, color=text_color, size=14)),
            tickfont=dict(family=ECONOMIST_FONT, color=text_color, size=12),
            showgrid=True,
            gridcolor=grid_color,
            griddash="dot",
            zeroline=False,
            linecolor=grid_color,
        ),
        yaxis=dict(
            title="",
            tickfont=dict(family=ECONOMIST_FONT, color=text_color, size=12),
            showgrid=False,
            zeroline=False,
            linecolor=grid_color,
        ),
        plot_bgcolor=background_color,
        paper_bgcolor=background_color,
        hoverlabel=dict(bgcolor="#ffffff", font=dict(family=ECONOMIST_FONT, color=text_color)),
        margin=dict(l=200, r=170, t=140, b=130),
        width=1380,
        height=760,
    )

    underline_shape = dict(
        type="line",
        x0=-0.26,
        x1=0.84,
        y0=1.12,
        y1=1.12,
        xref="paper",
        yref="paper",
        line=dict(color=highlight_color, width=4),
    )
    existing_shapes = list(fig.layout.shapes) if fig.layout.shapes else []
    fig.update_layout(shapes=[underline_shape, *existing_shapes])

    max_millions = plot_df["tonnes_millions"].max() if not plot_df.empty else 0.0
    tick_max = math.ceil(max_millions * 10) / 10 if max_millions > 0 else 0.5
    tick_step = max(0.2, tick_max / 6)
    tick_values = [round(i * tick_step, 1) for i in range(int(tick_max / tick_step) + 1)]
    if tick_values and tick_values[-1] < tick_max:
        tick_values.append(round(tick_max, 1))
    tick_values = sorted(set(tick_values))
    tick_text = [f"{format_spanish(val)} M" for val in tick_values]

    x_upper_padding = tick_step if tick_step > 0 else 0.2
    xaxis_range = [0, tick_max + x_upper_padding]

    fig.update_traces(textfont=dict(size=12, family=ECONOMIST_FONT))

    fig.update_layout(
        xaxis=dict(
            tickvals=tick_values,
            ticktext=tick_text,
            rangemode="tozero",
            range=xaxis_range,
        ),
        yaxis=dict(
            categoryorder="array",
            categoryarray=plot_df["rubro_vu"].tolist(),
        ),
        annotations=[
            dict(
                text="Los Ríos, RNP 2023",
                x=0,
                y=1.06,
                xref="paper",
                yref="paper",
                showarrow=False,
                font=dict(family=ECONOMIST_FONT, size=14, color="#4a4338"),
            ),
            dict(
                text="Fuente: Registro Nacional de Emisiones y Transferencias de Residuos (RNP) 2023",
                x=0,
                y=-0.22,
                xref="paper",
                yref="paper",
                showarrow=False,
                font=dict(family=ECONOMIST_FONT, size=11, color="#6e6252"),
            ),
        ],
    )

    return fig


def build_html_document(
    fig: go.Figure,
    *,
    chart_dom_id: str,
    aria_label: str,
) -> str:
    """Return a tidy HTML fragment to embed the Plotly chart anywhere."""

    figure_json = json.dumps(
        fig.to_plotly_json(),
        ensure_ascii=False,
        indent=2,
        cls=PlotlyJSONEncoder,
    )

    return f"""<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.plot.ly" />
        <script src="https://cdn.plot.ly/plotly-3.1.1.min.js"></script>
        <style>
            html,
            body {{
                margin: 0;
                padding: 0;
                background-color: #ffffff;
            }}
        </style>
    </head>
    <body>
        <div id="{chart_dom_id}" class="plotly-graph-div" role="img" aria-label="{aria_label}"></div>
        <script>
            (function() {{
                const target = document.getElementById("{chart_dom_id}");
                const figure = {figure_json};
                const config = {{ displayModeBar: false, responsive: true }};

                Plotly.newPlot(target, figure.data, figure.layout, config);
                window.addEventListener("resize", () => Plotly.Plots.resize(target));
            }})();
        </script>
    </body>
</html>
"""


def export_html(
    fig: go.Figure,
    *,
    output_path: Path,
    chart_dom_id: str,
    aria_label: str,
) -> None:
    """Write a formatted HTML file referencing Plotly from the CDN."""

    output_path.write_text(
        build_html_document(fig, chart_dom_id=chart_dom_id, aria_label=aria_label),
        encoding="utf-8",
    )


def main() -> None:
    region_df = load_region_totals()
    lollipop_df = build_lollipop_dataframe(region_df)
    fig = build_chart(lollipop_df)
    export_html(
        fig,
        output_path=OUTPUT_HTML,
        chart_dom_id=TONELADAS_CHART_ID,
        aria_label="Gráfico de toneladas declaradas por región",
    )

    focus_df = build_focus_dataframe(region_df)
    focus_fig = build_focus_chart(focus_df)
    export_html(
        focus_fig,
        output_path=FOCUS_OUTPUT_HTML,
        chart_dom_id=FOCUS_CHART_ID,
        aria_label="Gráfico de barras de regiones foco con toneladas declaradas",
    )

    _, overall_mix, focus_treatment_df = load_treatment_data()
    treatment_fig = build_treatment_chart(overall_mix=overall_mix, focus_treatment_df=focus_treatment_df)
    export_html(
        treatment_fig,
        output_path=TREATMENT_OUTPUT_HTML,
        chart_dom_id=TREATMENT_CHART_ID,
        aria_label="Gráfico de participación de tratamientos en regiones foco",
    )

    generators_df = load_los_rios_generators()
    generators_fig = build_generators_chart(generators_df)
    export_html(
        generators_fig,
        output_path=GENERATORS_OUTPUT_HTML,
        chart_dom_id=GENERATORS_CHART_ID,
        aria_label="Gráfico de los principales generadores en Los Ríos",
    )

    rubros_df = load_los_rios_rubros()
    rubros_fig = build_rubros_chart(rubros_df)
    export_html(
        rubros_fig,
        output_path=RUBROS_OUTPUT_HTML,
        chart_dom_id=RUBROS_CHART_ID,
        aria_label="Gráfico de los principales rubros en Los Ríos por volumen generado",
    )


if __name__ == "__main__":
    main()
