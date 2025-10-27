const PLOTLY_CONFIG = {
  responsive: true,
  displayModeBar: false,
};

const CHART_DEFINITIONS = {
  "chart-toneladas": {
    "data": [
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          2.945986601587146
        ],
        "y": [
          "Metropolitana",
          "Metropolitana"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Metropolitana",
            2945986.601587146,
            0.28406608856703713
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "2,9 M t · 28,4%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          2.945986601587146
        ],
        "y": [
          "Metropolitana"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          1.7089483154553602
        ],
        "y": [
          "Antofagasta",
          "Antofagasta"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Antofagasta",
            1708948.31545536,
            0.164784952950259
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "1,7 M t · 16,5%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          1.7089483154553602
        ],
        "y": [
          "Antofagasta"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          1.27296767979
        ],
        "y": [
          "Biobío",
          "Biobío"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Biobío",
            1272967.67979,
            0.1227456192351271
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "1,3 M t · 12,3%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          1.27296767979
        ],
        "y": [
          "Biobío"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.788716049854
        ],
        "y": [
          "Libertador Gral. Bernardo O'Higgins",
          "Libertador Gral. Bernardo O'Higgins"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Libertador Gral. Bernardo O'Higgins",
            788716.049854,
            0.07605176586728696
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,8 M t · 7,6%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.788716049854
        ],
        "y": [
          "Libertador Gral. Bernardo O'Higgins"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.74773001708301
        ],
        "y": [
          "Los Lagos",
          "Los Lagos"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Los Lagos",
            747730.01708301,
            0.07209969697163653
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,7 M t · 7,2%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.74773001708301
        ],
        "y": [
          "Los Lagos"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.615331380841
        ],
        "y": [
          "Araucanía",
          "Araucanía"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Araucanía",
            615331.380841,
            0.05933318856028956
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,6 M t · 5,9%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.615331380841
        ],
        "y": [
          "Araucanía"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.436916481247
        ],
        "y": [
          "Valparaíso",
          "Valparaíso"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Valparaíso",
            436916.481247,
            0.04212957241266567
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,4 M t · 4,2%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.436916481247
        ],
        "y": [
          "Valparaíso"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.4231475632019
        ],
        "y": [
          "Maule",
          "Maule"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Maule",
            423147.5632019,
            0.040801907619226196
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,4 M t · 4,1%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.4231475632019
        ],
        "y": [
          "Maule"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.334056545019
        ],
        "y": [
          "Atacama",
          "Atacama"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Atacama",
            334056.545019,
            0.03221132643734415
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,3 M t · 3,2%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.334056545019
        ],
        "y": [
          "Atacama"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.27338605125
        ],
        "y": [
          "Arica Y Parinacota",
          "Arica Y Parinacota"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Arica Y Parinacota",
            273386.05124999996,
            0.026361187863358233
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,3 M t · 2,6%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.27338605125
        ],
        "y": [
          "Arica Y Parinacota"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#d62828",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.2418956876
        ],
        "y": [
          "Los Ríos",
          "Los Ríos"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Los Ríos",
            241895.6876,
            0.023324736704758327
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#d62828",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,2 M t · 2,3%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.2418956876
        ],
        "y": [
          "Los Ríos"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.22688315242100002
        ],
        "y": [
          "Ñuble",
          "Ñuble"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Ñuble",
            226883.152421,
            0.021877156411801102
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,2 M t · 2,2%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.22688315242100002
        ],
        "y": [
          "Ñuble"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.09904056568
        ],
        "y": [
          "Coquimbo",
          "Coquimbo"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Coquimbo",
            99040.56568,
            0.009549964038202737
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,1 M t · 1,0%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.09904056568
        ],
        "y": [
          "Coquimbo"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.0939663574693
        ],
        "y": [
          "Magallanes Y De La Antártica Chilena",
          "Magallanes Y De La Antártica Chilena"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Magallanes Y De La Antártica Chilena",
            93966.3574693,
            0.009060684664626586
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,1 M t · 0,9%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.0939663574693
        ],
        "y": [
          "Magallanes Y De La Antártica Chilena"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.089206803686
        ],
        "y": [
          "Tarapacá",
          "Tarapacá"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Tarapacá",
            89206.803686,
            0.0086017457727056
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,1 M t · 0,9%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.089206803686
        ],
        "y": [
          "Tarapacá"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.072599662145
        ],
        "y": [
          "Aysén Del Gral. Carlos Ibañez Del Campo",
          "Aysén Del Gral. Carlos Ibañez Del Campo"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Aysén Del Gral. Carlos Ibañez Del Campo",
            72599.662145,
            0.007000405923675238
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,1 M t · 0,7%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.072599662145
        ],
        "y": [
          "Aysén Del Gral. Carlos Ibañez Del Campo"
        ],
        "type": "scatter"
      }
    ],
    "layout": {
      "font": {
        "family": "Georgia, serif",
        "color": "#1e1b18",
        "size": 15
      },
      "title": {
        "text": "Toneladas declaradas por región",
        "font": {
          "size": 24
        },
        "x": 0.035,
        "xanchor": "left"
      },
      "xaxis": {
        "title": {
          "text": "Toneladas"
        },
        "tickfont": {
          "family": "Georgia, serif",
          "color": "#1e1b18",
          "size": 12
        },
        "showgrid": true,
        "gridcolor": "#d9d3c5",
        "griddash": "dot",
        "zeroline": false,
        "linecolor": "#d9d3c5",
        "tickvals": [
          0.0,
          0.5,
          1.0,
          1.5,
          2.0,
          2.5,
          3.0
        ],
        "ticktext": [
          "0,0 M",
          "0,5 M",
          "1,0 M",
          "1,5 M",
          "2,0 M",
          "2,5 M",
          "3,0 M"
        ],
        "rangemode": "tozero",
        "range": [
          0,
          3.5
        ]
      },
      "yaxis": {
        "title": {
          "text": ""
        },
        "tickfont": {
          "family": "Georgia, serif",
          "color": "#1e1b18",
          "size": 12
        },
        "showgrid": false,
    "zeroline": false,
    "linecolor": "#d9d3c5",
    "automargin": true,
        "categoryorder": "array",
        "categoryarray": [
          "Metropolitana",
          "Antofagasta",
          "Biobío",
          "Libertador Gral. Bernardo O'Higgins",
          "Los Lagos",
          "Araucanía",
          "Valparaíso",
          "Maule",
          "Atacama",
          "Arica Y Parinacota",
          "Los Ríos",
          "Ñuble",
          "Coquimbo",
          "Magallanes Y De La Antártica Chilena",
          "Tarapacá",
          "Aysén Del Gral. Carlos Ibañez Del Campo"
        ]
      },
      "legend": {
        "font": {
          "family": "Georgia, serif",
          "color": "#1e1b18",
          "size": 12
        }
      },
      "hoverlabel": {
        "font": {
          "family": "Georgia, serif",
          "color": "#1e1b18"
        },
        "bgcolor": "#ffffff"
      },
      "margin": {
        "l": 220,
        "r": 170,
        "t": 130,
        "b": 130
      },
      "bargap": 0.28,
      "plot_bgcolor": "#f7f2ea",
      "paper_bgcolor": "#f7f2ea",
      "colorway": [
        "#9ca3af"
      ],
      "shapes": [
        {
          "line": {
            "color": "#d62828",
            "width": 4
          },
          "type": "line",
          "x0": -0.22,
          "x1": 0.84,
          "xref": "paper",
          "y0": 1.09,
          "y1": 1.09,
          "yref": "paper"
        }
      ],
      "annotations": [
        {
          "font": {
            "color": "#4a4338",
            "family": "Georgia, serif",
            "size": 14
          },
          "showarrow": false,
          "text": "Chile, RNP 2023",
          "x": 0,
          "xref": "paper",
          "y": 1.06,
          "yref": "paper"
        },
        {
          "font": {
            "color": "#6e6252",
            "family": "Georgia, serif",
            "size": 11
          },
          "showarrow": false,
          "text": "Fuente: Registro Nacional de Emisiones y Transferencias de Residuos (RNP) 2023",
          "x": 0,
          "xref": "paper",
          "y": -0.22,
          "yref": "paper"
        }
      ]
    }
  },
  "chart-regiones-foco": {
    "data": [
      {
        "cliponaxis": false,
        "customdata": [
          [
            "Metropolitana",
            2945986.601587146,
            0.28406608856703713
          ],
          [
            "Biobío",
            1272967.67979,
            0.1227456192351271
          ],
          [
            "Los Lagos",
            747730.01708301,
            0.07209969697163653
          ],
          [
            "Araucanía",
            615331.380841,
            0.05933318856028956
          ],
          [
            "Los Ríos",
            241895.6876,
            0.023324736704758327
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación nacional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": [
            "#686d76",
            "#495057",
            "#8c8f99",
            "#b0b4ba",
            "#d62828"
          ],
          "line": {
            "color": "rgba(0,0,0,0)",
            "width": 0
          }
        },
        "showlegend": false,
        "text": [
          "2,9 M t\n(28,4%)",
          "1,3 M t\n(12,3%)",
          "0,7 M t\n(7,2%)",
          "0,6 M t\n(5,9%)",
          "0,2 M t\n(2,3%)"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 13
        },
        "textposition": "outside",
        "x": [
          "Metropolitana",
          "Biobío",
          "Los Lagos",
          "Araucanía",
          "Los Ríos"
        ],
        "y": [
          2.945986601587146,
          1.27296767979,
          0.74773001708301,
          0.615331380841,
          0.2418956876
        ],
        "type": "bar"
      }
    ],
    "layout": {
      "font": {
        "family": "Georgia, serif",
        "color": "#1e1b18",
        "size": 15
      },
      "title": {
        "text": "Regiones foco: toneladas declaradas",
        "x": 0.035,
        "xanchor": "left"
      },
      "xaxis": {
        "title": {
          "text": ""
        },
        "tickfont": {
          "family": "Georgia, serif",
          "color": "#1e1b18",
          "size": 13
        },
        "showgrid": true,
        "gridcolor": "#d9d3c5",
        "griddash": "dot",
        "zeroline": false,
        "linecolor": "#d9d3c5",
        "tickvals": [
          "Metropolitana",
          "Biobío",
          "Los Lagos",
          "Araucanía",
          "Los Ríos"
        ],
        "ticktext": [
          "Metropolitana",
          "Biobío",
          "Los Lagos",
          "Araucanía",
          "Los Ríos"
        ],
        "tickangle": 0
      },
      "yaxis": {
        "title": {
          "text": "Millones de toneladas"
        },
        "tickfont": {
          "family": "Georgia, serif",
          "color": "#1e1b18",
          "size": 12
        },
        "showgrid": false,
        "zeroline": false,
        "linecolor": "#d9d3c5",
        "tickvals": [
          0.0,
          0.5,
          1.0,
          1.5,
          2.0,
          2.5,
          3.0,
          3.5
        ],
        "ticktext": [
          "0,0 M",
          "0,5 M",
          "1,0 M",
          "1,5 M",
          "2,0 M",
          "2,5 M",
          "3,0 M",
          "3,5 M"
        ],
        "range": [
          0,
          3.8
        ]
      },
      "legend": {
        "font": {
          "family": "Georgia, serif",
          "color": "#1e1b18",
          "size": 12
        }
      },
      "hoverlabel": {
        "font": {
          "family": "Georgia, serif",
          "color": "#1e1b18"
        },
        "bgcolor": "#ffffff"
      },
      "margin": {
        "l": 120,
        "r": 90,
        "t": 140,
        "b": 160
      },
      "bargap": 0.35,
      "plot_bgcolor": "#f7f2ea",
      "paper_bgcolor": "#f7f2ea",
      "colorway": [
        "#686d76"
      ],
      "shapes": [
        {
          "line": {
            "color": "#d62828",
            "width": 4
          },
          "type": "line",
          "x0": -0.07,
          "x1": 0.95,
          "xref": "paper",
          "y0": 1.11,
          "y1": 1.11,
          "yref": "paper"
        }
      ],
      "annotations": [
        {
          "font": {
            "color": "#4a4338",
            "family": "Georgia, serif",
            "size": 14
          },
          "showarrow": false,
          "text": "Chile, RNP 2023",
          "x": 0,
          "xref": "paper",
          "y": 1.05,
          "yref": "paper"
        },
        {
          "font": {
            "color": "#6e6252",
            "family": "Georgia, serif",
            "size": 11
          },
          "showarrow": false,
          "text": "Los Ríos se destaca en rojo para enfatizar su liderazgo entre las regiones foco",
          "x": 0,
          "xref": "paper",
          "y": -0.2,
          "yref": "paper"
        },
        {
          "font": {
            "color": "#6e6252",
            "family": "Georgia, serif",
            "size": 11
          },
          "showarrow": false,
          "text": "Fuente: Registro Nacional de Emisiones y Transferencias de Residuos (RNP) 2023",
          "x": 0,
          "xref": "paper",
          "y": -0.28,
          "yref": "paper"
        }
      ]
    }
  },
  "chart-tratamientos": {
    "data": [
      {
        "customdata": [
          [
            "Los Ríos",
            "Recolección",
            1.2836690231264793
          ]
        ],
        "hovertemplate": "<b>Los Ríos</b><br>Recolección: 1.3%<extra></extra>",
        "legendgroup": "Recolección",
        "marker": {
          "color": "#94d2bd",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Recolección",
        "showlegend": true,
        "text": [
          "1%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          1.2836690231264793
        ],
        "y": [
          "Los Ríos"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#94a3b8",
          "width": 2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          1.8836690231264792,
          25.984888568306996
        ],
        "y": [
          "Los Ríos",
          "Los Ríos"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Los Ríos",
            "Valorización",
            26.584888568306997
          ]
        ],
        "hovertemplate": "<b>Los Ríos</b><br>Valorización: 26.6%<extra></extra>",
        "legendgroup": "Valorización",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Valorización",
        "showlegend": true,
        "text": [
          "27%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          26.584888568306997
        ],
        "y": [
          "Los Ríos"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#94a3b8",
          "width": 2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          27.184888568307,
          71.53144240856653
        ],
        "y": [
          "Los Ríos",
          "Los Ríos"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Los Ríos",
            "Eliminación",
            72.13144240856653
          ]
        ],
        "hovertemplate": "<b>Los Ríos</b><br>Eliminación: 72.1%<extra></extra>",
        "legendgroup": "Eliminación",
        "marker": {
          "color": "#005f73",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Eliminación",
        "showlegend": true,
        "text": [
          "72%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          72.13144240856653
        ],
        "y": [
          "Los Ríos"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Biobío",
            "Recolección",
            1.5745492087675437
          ]
        ],
        "hovertemplate": "<b>Biobío</b><br>Recolección: 1.6%<extra></extra>",
        "legendgroup": "Recolección",
        "marker": {
          "color": "#94d2bd",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Recolección",
        "showlegend": false,
        "text": [
          "2%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          1.5745492087675437
        ],
        "y": [
          "Biobío"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#94a3b8",
          "width": 2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          2.1745492087675435,
          36.10407453605409
        ],
        "y": [
          "Biobío",
          "Biobío"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Biobío",
            "Eliminación",
            36.704074536054094
          ]
        ],
        "hovertemplate": "<b>Biobío</b><br>Eliminación: 36.7%<extra></extra>",
        "legendgroup": "Eliminación",
        "marker": {
          "color": "#005f73",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Eliminación",
        "showlegend": false,
        "text": [
          "37%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          36.704074536054094
        ],
        "y": [
          "Biobío"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#94a3b8",
          "width": 2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          37.304074536054095,
          61.12137625517836
        ],
        "y": [
          "Biobío",
          "Biobío"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Biobío",
            "Valorización",
            61.72137625517836
          ]
        ],
        "hovertemplate": "<b>Biobío</b><br>Valorización: 61.7%<extra></extra>",
        "legendgroup": "Valorización",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Valorización",
        "showlegend": false,
        "text": [
          "62%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          61.72137625517836
        ],
        "y": [
          "Biobío"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Metropolitana",
            "Recolección",
            7.1331108397554885
          ]
        ],
        "hovertemplate": "<b>Metropolitana</b><br>Recolección: 7.1%<extra></extra>",
        "legendgroup": "Recolección",
        "marker": {
          "color": "#94d2bd",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Recolección",
        "showlegend": false,
        "text": [
          "7%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          7.1331108397554885
        ],
        "y": [
          "Metropolitana"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#94a3b8",
          "width": 2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          7.733110839755488,
          33.126944893097885
        ],
        "y": [
          "Metropolitana",
          "Metropolitana"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Metropolitana",
            "Valorización",
            33.72694489309789
          ]
        ],
        "hovertemplate": "<b>Metropolitana</b><br>Valorización: 33.7%<extra></extra>",
        "legendgroup": "Valorización",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Valorización",
        "showlegend": false,
        "text": [
          "34%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          33.72694489309789
        ],
        "y": [
          "Metropolitana"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#94a3b8",
          "width": 2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          34.32694489309789,
          58.36368718582783
        ],
        "y": [
          "Metropolitana",
          "Metropolitana"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Metropolitana",
            "Eliminación",
            58.96368718582783
          ]
        ],
        "hovertemplate": "<b>Metropolitana</b><br>Eliminación: 59.0%<extra></extra>",
        "legendgroup": "Eliminación",
        "marker": {
          "color": "#005f73",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Eliminación",
        "showlegend": false,
        "text": [
          "59%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          58.96368718582783
        ],
        "y": [
          "Metropolitana"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Los Lagos",
            "Recolección",
            1.7545217926624408
          ]
        ],
        "hovertemplate": "<b>Los Lagos</b><br>Recolección: 1.8%<extra></extra>",
        "legendgroup": "Recolección",
        "marker": {
          "color": "#94d2bd",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Recolección",
        "showlegend": false,
        "text": [
          "2%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          1.7545217926624408
        ],
        "y": [
          "Los Lagos"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#94a3b8",
          "width": 2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          2.3545217926624407,
          23.205572253260097
        ],
        "y": [
          "Los Lagos",
          "Los Lagos"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Los Lagos",
            "Eliminación",
            23.8055722532601
          ]
        ],
        "hovertemplate": "<b>Los Lagos</b><br>Eliminación: 23.8%<extra></extra>",
        "legendgroup": "Eliminación",
        "marker": {
          "color": "#005f73",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Eliminación",
        "showlegend": false,
        "text": [
          "24%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          23.8055722532601
        ],
        "y": [
          "Los Lagos"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#94a3b8",
          "width": 2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          24.4055722532601,
          73.83990595407748
        ],
        "y": [
          "Los Lagos",
          "Los Lagos"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Los Lagos",
            "Valorización",
            74.43990595407747
          ]
        ],
        "hovertemplate": "<b>Los Lagos</b><br>Valorización: 74.4%<extra></extra>",
        "legendgroup": "Valorización",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Valorización",
        "showlegend": false,
        "text": [
          "74%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          74.43990595407747
        ],
        "y": [
          "Los Lagos"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Araucanía",
            "Recolección",
            1.3770240822789221
          ]
        ],
        "hovertemplate": "<b>Araucanía</b><br>Recolección: 1.4%<extra></extra>",
        "legendgroup": "Recolección",
        "marker": {
          "color": "#94d2bd",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Recolección",
        "showlegend": false,
        "text": [
          "1%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          1.3770240822789221
        ],
        "y": [
          "Araucanía"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#94a3b8",
          "width": 2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          1.977024082278922,
          30.319617683071193
        ],
        "y": [
          "Araucanía",
          "Araucanía"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Araucanía",
            "Valorización",
            30.919617683071195
          ]
        ],
        "hovertemplate": "<b>Araucanía</b><br>Valorización: 30.9%<extra></extra>",
        "legendgroup": "Valorización",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Valorización",
        "showlegend": false,
        "text": [
          "31%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          30.919617683071195
        ],
        "y": [
          "Araucanía"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#94a3b8",
          "width": 2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          31.519617683071196,
          67.10335823464989
        ],
        "y": [
          "Araucanía",
          "Araucanía"
        ],
        "type": "scatter"
      },
      {
        "customdata": [
          [
            "Araucanía",
            "Eliminación",
            67.70335823464988
          ]
        ],
        "hovertemplate": "<b>Araucanía</b><br>Eliminación: 67.7%<extra></extra>",
        "legendgroup": "Eliminación",
        "marker": {
          "color": "#005f73",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers+text",
        "name": "Eliminación",
        "showlegend": false,
        "text": [
          "68%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "bottom center",
        "x": [
          67.70335823464988
        ],
        "y": [
          "Araucanía"
        ],
        "type": "scatter"
      }
    ],
    "layout": {
      "title": {
        "font": {
          "family": "Georgia, serif",
          "size": 24,
          "color": "#1e1b18"
        },
        "text": "Tratamientos en regiones foco",
        "x": 0.05,
        "y": 0.96
      },
      "font": {
        "family": "Georgia, serif",
        "size": 15,
        "color": "#1e1b18"
      },
      "margin": {
        "l": 220,
        "r": 160,
        "t": 120,
        "b": 80
      },
      "hoverlabel": {
        "font": {
          "family": "Georgia, serif",
          "color": "#1e1b18"
        },
        "bgcolor": "#ffffff"
      },
      "legend": {
        "itemclick": false,
        "itemdoubleclick": false
      },
      "plot_bgcolor": "#f7f2ea",
      "paper_bgcolor": "#f7f2ea",
      "shapes": [
        {
          "line": {
            "color": "#d9d3c5",
            "width": 1.4
          },
          "type": "line",
          "x0": 0,
          "x1": 0,
          "xref": "x",
          "y0": -0.08,
          "y1": 1.05,
          "yref": "paper"
        },
        {
          "line": {
            "color": "#d62828",
            "width": 2.5
          },
          "type": "line",
          "x0": -0.2,
          "x1": 0.88,
          "xref": "paper",
          "y0": 1.12,
          "y1": 1.12,
          "yref": "paper"
        }
      ],
      "xaxis": {
        "title": {
          "font": {
            "family": "Georgia, serif",
            "size": 14,
            "color": "#1e1b18"
          },
          "text": "Participación (%)"
        },
        "tickfont": {
          "family": "Georgia, serif",
          "size": 12,
          "color": "#1e1b18"
        },
        "showgrid": true,
        "gridcolor": "#d9d3c5",
        "griddash": "dot",
        "zeroline": false,
        "ticksuffix": "%",
        "range": [
          0,
          80
        ]
      },
      "yaxis": {
        "tickfont": {
          "family": "Georgia, serif",
          "size": 12,
          "color": "#1e1b18"
        },
        "title": {
          "text": ""
        },
        "ticklabelstandoff": 14,
        "showgrid": false,
        "zeroline": false,
        "categoryorder": "array",
        "categoryarray": [
          "Los Ríos",
          "Biobío",
          "Metropolitana",
          "Los Lagos",
          "Araucanía"
        ]
      }
    }
  },
  "chart-generadores": {
    "data": [
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#0a9396",
          "width": 2.2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          1936.991
        ],
        "y": [
          "SERVICIOS DE RECICLAJE PUDU LIMITADA",
          "SERVICIOS DE RECICLAJE PUDU LIMITADA"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "customdata": [
          [
            "SERVICIOS DE RECICLAJE PUDU LIMITADA",
            1936.991
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers",
        "showlegend": false,
        "x": [
          1936.991
        ],
        "y": [
          "SERVICIOS DE RECICLAJE PUDU LIMITADA"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "hoverinfo": "skip",
        "mode": "text",
        "showlegend": false,
        "text": [
          "1.9 mil t"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle left",
        "x": [
          16328.84432
        ],
        "y": [
          "SERVICIOS DE RECICLAJE PUDU LIMITADA"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#0a9396",
          "width": 2.2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          3188.554
        ],
        "y": [
          "PROLESUR S.A.",
          "PROLESUR S.A."
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "customdata": [
          [
            "PROLESUR S.A.",
            3188.554
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers",
        "showlegend": false,
        "x": [
          3188.554
        ],
        "y": [
          "PROLESUR S.A."
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "hoverinfo": "skip",
        "mode": "text",
        "showlegend": false,
        "text": [
          "3.2 mil t"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle left",
        "x": [
          17580.40732
        ],
        "y": [
          "PROLESUR S.A."
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#0a9396",
          "width": 2.2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          4736.66
        ],
        "y": [
          "CARNES NUBLE S A",
          "CARNES NUBLE S A"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "customdata": [
          [
            "CARNES NUBLE S A",
            4736.66
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers",
        "showlegend": false,
        "x": [
          4736.66
        ],
        "y": [
          "CARNES NUBLE S A"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "hoverinfo": "skip",
        "mode": "text",
        "showlegend": false,
        "text": [
          "4.7 mil t"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle left",
        "x": [
          19128.51332
        ],
        "y": [
          "CARNES NUBLE S A"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#0a9396",
          "width": 2.2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          6002.42
        ],
        "y": [
          "SURALIS S.A.",
          "SURALIS S.A."
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "customdata": [
          [
            "SURALIS S.A.",
            6002.42
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers",
        "showlegend": false,
        "x": [
          6002.42
        ],
        "y": [
          "SURALIS S.A."
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "hoverinfo": "skip",
        "mode": "text",
        "showlegend": false,
        "text": [
          "6.0 mil t"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle left",
        "x": [
          20394.27332
        ],
        "y": [
          "SURALIS S.A."
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#0a9396",
          "width": 2.2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          6055.947
        ],
        "y": [
          "CARTULINAS CMPC SPA",
          "CARTULINAS CMPC SPA"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "customdata": [
          [
            "CARTULINAS CMPC SPA",
            6055.947
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers",
        "showlegend": false,
        "x": [
          6055.947
        ],
        "y": [
          "CARTULINAS CMPC SPA"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "hoverinfo": "skip",
        "mode": "text",
        "showlegend": false,
        "text": [
          "6.1 mil t"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle left",
        "x": [
          20447.800320000002
        ],
        "y": [
          "CARTULINAS CMPC SPA"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#0a9396",
          "width": 2.2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          7627.135
        ],
        "y": [
          "CERVECERIA KUNSTMANN S A",
          "CERVECERIA KUNSTMANN S A"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "customdata": [
          [
            "CERVECERIA KUNSTMANN S A",
            7627.135
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers",
        "showlegend": false,
        "x": [
          7627.135
        ],
        "y": [
          "CERVECERIA KUNSTMANN S A"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "hoverinfo": "skip",
        "mode": "text",
        "showlegend": false,
        "text": [
          "7.6 mil t"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle left",
        "x": [
          22018.98832
        ],
        "y": [
          "CERVECERIA KUNSTMANN S A"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#0a9396",
          "width": 2.2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          12596.002
        ],
        "y": [
          "CHILE PANEL S.A.",
          "CHILE PANEL S.A."
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "customdata": [
          [
            "CHILE PANEL S.A.",
            12596.002
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers",
        "showlegend": false,
        "x": [
          12596.002
        ],
        "y": [
          "CHILE PANEL S.A."
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "hoverinfo": "skip",
        "mode": "text",
        "showlegend": false,
        "text": [
          "12.6 mil t"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle left",
        "x": [
          26987.855320000002
        ],
        "y": [
          "CHILE PANEL S.A."
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#0a9396",
          "width": 2.2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          17129.421
        ],
        "y": [
          "COOP AGRICOLA Y LECHERA DE LA UNION LTDA",
          "COOP AGRICOLA Y LECHERA DE LA UNION LTDA"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "customdata": [
          [
            "COOP AGRICOLA Y LECHERA DE LA UNION LTDA",
            17129.421
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers",
        "showlegend": false,
        "x": [
          17129.421
        ],
        "y": [
          "COOP AGRICOLA Y LECHERA DE LA UNION LTDA"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "hoverinfo": "skip",
        "mode": "text",
        "showlegend": false,
        "text": [
          "17.1 mil t"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle left",
        "x": [
          31521.274319999997
        ],
        "y": [
          "COOP AGRICOLA Y LECHERA DE LA UNION LTDA"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#0a9396",
          "width": 2.2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          45814.386
        ],
        "y": [
          "CELULOSA ARAUCO Y CONSTITUCION S A",
          "CELULOSA ARAUCO Y CONSTITUCION S A"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "customdata": [
          [
            "CELULOSA ARAUCO Y CONSTITUCION S A",
            45814.386
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
        "marker": {
          "color": "#0a9396",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers",
        "showlegend": false,
        "x": [
          45814.386
        ],
        "y": [
          "CELULOSA ARAUCO Y CONSTITUCION S A"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "hoverinfo": "skip",
        "mode": "text",
        "showlegend": false,
        "text": [
          "45.8 mil t"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle left",
        "x": [
          60206.23932
        ],
        "y": [
          "CELULOSA ARAUCO Y CONSTITUCION S A"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#d62828",
          "width": 2.2
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          119932.111
        ],
        "y": [
          "OCEAN SPRAY CHILE SPA",
          "OCEAN SPRAY CHILE SPA"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "customdata": [
          [
            "OCEAN SPRAY CHILE SPA",
            119932.111
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<extra></extra>",
        "marker": {
          "color": "#d62828",
          "line": {
            "color": "#ffffff",
            "width": 1.2
          },
          "size": 12
        },
        "mode": "markers",
        "showlegend": false,
        "x": [
          119932.111
        ],
        "y": [
          "OCEAN SPRAY CHILE SPA"
        ],
        "type": "scatter"
      },
      {
        "cliponaxis": false,
        "hoverinfo": "skip",
        "mode": "text",
        "showlegend": false,
        "text": [
          "119.9 mil t"
        ],
        "textfont": {
          "color": "#d62828",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle left",
        "x": [
          134323.96432
        ],
        "y": [
          "OCEAN SPRAY CHILE SPA"
        ],
        "type": "scatter"
      }
    ],
    "layout": {
      "title": {
        "font": {
          "family": "Georgia, serif",
          "size": 24,
          "color": "#1e1b18"
        },
        "text": "Top generadores en Los Ríos",
        "x": 0.08,
        "y": 0.95
      },
      "font": {
        "family": "Georgia, serif",
        "size": 15,
        "color": "#1e1b18"
      },
      "margin": {
        "l": 250,
        "r": 160,
        "t": 110,
        "b": 100
      },
      "hoverlabel": {
        "font": {
          "family": "Georgia, serif",
          "color": "#1e1b18"
        },
        "bgcolor": "#ffffff"
      },
      "plot_bgcolor": "#f7f2ea",
      "paper_bgcolor": "#f7f2ea",
      "shapes": [
        {
          "line": {
            "color": "#c9c1b4",
            "width": 1.2
          },
          "type": "line",
          "x0": 0,
          "x1": 0,
          "xref": "x",
          "y0": -0.08,
          "y1": 1.05,
          "yref": "paper"
        },
        {
          "line": {
            "color": "#d62828",
            "width": 4
          },
          "type": "line",
          "x0": -0.25,
          "x1": 0.92,
          "xref": "paper",
          "y0": 1.08,
          "y1": 1.08,
          "yref": "paper"
        }
      ],
      "xaxis": {
        "title": {
          "font": {
            "family": "Georgia, serif",
            "size": 14,
            "color": "#1e1b18"
          },
          "text": "Toneladas"
        },
        "tickfont": {
          "family": "Georgia, serif",
          "size": 12,
          "color": "#1e1b18"
        },
        "showgrid": true,
        "gridcolor": "#d9d3c5",
        "griddash": "dot",
        "zeroline": false,
        "range": [
          0,
          152313.78097
        ]
      },
      "yaxis": {
        "tickfont": {
          "family": "Georgia, serif",
          "size": 12,
          "color": "#1e1b18"
        },
        "title": {
          "text": ""
        },
        "automargin": true,
        "showgrid": false,
        "zeroline": false,
        "categoryorder": "array",
        "categoryarray": [
          "SERVICIOS DE RECICLAJE PUDU LIMITADA",
          "PROLESUR S.A.",
          "CARNES NUBLE S A",
          "SURALIS S.A.",
          "CARTULINAS CMPC SPA",
          "CERVECERIA KUNSTMANN S A",
          "CHILE PANEL S.A.",
          "COOP AGRICOLA Y LECHERA DE LA UNION LTDA",
          "CELULOSA ARAUCO Y CONSTITUCION S A",
          "OCEAN SPRAY CHILE SPA"
        ]
      }
    }
  },
  "chart-rubros": {
    "data": [
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.00044076
        ],
        "y": [
          "Plantas De Tratamiento De Aguas Servidas",
          "Plantas De Tratamiento De Aguas Servidas"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Plantas De Tratamiento De Aguas Servidas",
            440.76,
            0.0018236490068385001
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación regional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,0 M t · 0,2%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.00044076
        ],
        "y": [
          "Plantas De Tratamiento De Aguas Servidas"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.00047651299999999997
        ],
        "y": [
          "Producción Agropecuaria",
          "Producción Agropecuaria"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Producción Agropecuaria",
            476.513,
            0.0019715774099184004
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación regional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,0 M t · 0,2%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.00047651299999999997
        ],
        "y": [
          "Producción Agropecuaria"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.000658923
        ],
        "y": [
          "Comercio Mayorista",
          "Comercio Mayorista"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Comercio Mayorista",
            658.923,
            0.0027263006500885855
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación regional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,0 M t · 0,3%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.000658923
        ],
        "y": [
          "Comercio Mayorista"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.00338058952
        ],
        "y": [
          "Comercio Minorista",
          "Comercio Minorista"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Comercio Minorista",
            3380.58952,
            0.013987223706045562
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación regional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,0 M t · 1,4%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.00338058952
        ],
        "y": [
          "Comercio Minorista"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.0044454709999999995
        ],
        "y": [
          "Pesca Y Acuicultura",
          "Pesca Y Acuicultura"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Pesca Y Acuicultura",
            4445.471,
            0.018393181718121775
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación regional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,0 M t · 1,8%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.0044454709999999995
        ],
        "y": [
          "Pesca Y Acuicultura"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.0060024200000000005
        ],
        "y": [
          "Captación, Tratamiento Y Distribución De Agua",
          "Captación, Tratamiento Y Distribución De Agua"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Captación, Tratamiento Y Distribución De Agua",
            6002.42,
            0.02483507412566374
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación regional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,0 M t · 2,5%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.0060024200000000005
        ],
        "y": [
          "Captación, Tratamiento Y Distribución De Agua"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.00663437001
        ],
        "y": [
          "Otras Actividades",
          "Otras Actividades"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Otras Actividades",
            6634.37001,
            0.02744977375382437
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación regional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,0 M t · 2,7%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.00663437001
        ],
        "y": [
          "Otras Actividades"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.01471537707
        ],
        "y": [
          "Industria De La Madera Y Silvicultura",
          "Industria De La Madera Y Silvicultura"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Industria De La Madera Y Silvicultura",
            14715.37707,
            0.06088502309410913
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación regional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,0 M t · 6,1%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.01471537707
        ],
        "y": [
          "Industria De La Madera Y Silvicultura"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#9ca3af",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.051870333
        ],
        "y": [
          "Industria Del Papel Y Celulosa",
          "Industria Del Papel Y Celulosa"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Industria Del Papel Y Celulosa",
            51870.333,
            0.2146140331695986
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación regional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#9ca3af",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,1 M t · 21,5%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.051870333
        ],
        "y": [
          "Industria Del Papel Y Celulosa"
        ],
        "type": "scatter"
      },
      {
        "hoverinfo": "skip",
        "line": {
          "color": "#d62828",
          "width": 3
        },
        "mode": "lines",
        "showlegend": false,
        "x": [
          0,
          0.153066489
        ],
        "y": [
          "Otras Industrias Manufactureras",
          "Otras Industrias Manufactureras"
        ],
        "type": "scatter",
        "textfont": {
          "family": "Georgia, serif",
          "size": 12
        }
      },
      {
        "customdata": [
          [
            "Otras Industrias Manufactureras",
            153066.489,
            0.6333141633657914
          ]
        ],
        "hovertemplate": "<b>%{customdata[0]}</b><br>Toneladas: %{customdata[1]:,.0f}<br>Participación regional: %{customdata[2]:.1%}<extra></extra>",
        "marker": {
          "color": "#d62828",
          "line": {
            "color": "#ffffff",
            "width": 1.5
          },
          "size": 14
        },
        "mode": "markers+text",
        "showlegend": false,
        "text": [
          "0,2 M t · 63,3%"
        ],
        "textfont": {
          "color": "#1e1b18",
          "family": "Georgia, serif",
          "size": 12
        },
        "textposition": "middle right",
        "x": [
          0.153066489
        ],
        "y": [
          "Otras Industrias Manufactureras"
        ],
        "type": "scatter"
      }
    ],
    "layout": {
      "font": {
        "family": "Georgia, serif",
        "color": "#1e1b18",
        "size": 15
      },
      "title": {
        "font": {
          "size": 24,
          "color": "#1e1b18"
        },
        "text": "Principales rubros en Los Ríos por volumen generado",
        "x": 0.05,
        "y": 0.94
      },
      "xaxis": {
        "title": {
          "font": {
            "family": "Georgia, serif",
            "color": "#1e1b18",
            "size": 14
          },
          "text": "Toneladas"
        },
        "tickfont": {
          "family": "Georgia, serif",
          "color": "#1e1b18",
          "size": 12
        },
        "showgrid": true,
        "gridcolor": "#d9d3c5",
        "griddash": "dot",
        "zeroline": false,
        "linecolor": "#d9d3c5",
        "tickvals": [
          0.0,
          0.2
        ],
        "ticktext": [
          "0,0 M",
          "0,2 M"
        ],
        "rangemode": "tozero",
        "range": [
          0,
          0.4
        ]
      },
      "yaxis": {
        "tickfont": {
          "family": "Georgia, serif",
          "color": "#1e1b18",
          "size": 12
        },
        "title": {
          "text": ""
        },
        "showgrid": false,
        "zeroline": false,
  "linecolor": "#d9d3c5",
  "automargin": true,
        "categoryorder": "array",
        "categoryarray": [
          "Plantas De Tratamiento De Aguas Servidas",
          "Producción Agropecuaria",
          "Comercio Mayorista",
          "Comercio Minorista",
          "Pesca Y Acuicultura",
          "Captación, Tratamiento Y Distribución De Agua",
          "Otras Actividades",
          "Industria De La Madera Y Silvicultura",
          "Industria Del Papel Y Celulosa",
          "Otras Industrias Manufactureras"
        ]
      },
      "hoverlabel": {
        "font": {
          "family": "Georgia, serif",
          "color": "#1e1b18"
        },
        "bgcolor": "#ffffff"
      },
      "margin": {
        "l": 220,
        "r": 140,
        "t": 135,
        "b": 140
      },
      "plot_bgcolor": "#f7f2ea",
      "paper_bgcolor": "#f7f2ea",
      "shapes": [
        {
          "line": {
            "color": "#d62828",
            "width": 4
          },
          "type": "line",
          "x0": -0.26,
          "x1": 0.84,
          "xref": "paper",
          "y0": 1.12,
          "y1": 1.12,
          "yref": "paper"
        }
      ],
      "annotations": [
        {
          "font": {
            "color": "#4a4338",
            "family": "Georgia, serif",
            "size": 14
          },
          "showarrow": false,
          "text": "Los Ríos, RNP 2023",
          "x": 0,
          "xref": "paper",
          "y": 1.06,
          "yref": "paper"
        },
        {
          "font": {
            "color": "#6e6252",
            "family": "Georgia, serif",
            "size": 11
          },
          "showarrow": false,
          "text": "Fuente: Registro Nacional de Emisiones y Transferencias de Residuos (RNP) 2023",
          "x": 0,
          "xref": "paper",
          "y": -0.22,
          "yref": "paper"
        }
      ]
    }
  }
};

const sanitiseLayout = (layout = {}) => {
  const nextLayout = { ...layout };
  delete nextLayout.width;
  delete nextLayout.height;
  nextLayout.autosize = true;
  return nextLayout;
};

const renderedCharts = new Set();

const renderChart = (targetId) => {
  if (typeof Plotly === "undefined") {
    console.error('Plotly no está disponible en la página.');
    return;
  }

  const figure = CHART_DEFINITIONS[targetId];
  if (!figure) {
    console.warn(`No existe una definición de gráfico para ${targetId}.`);
    return;
  }

  const container = document.getElementById(targetId);
  if (!container) {
    console.warn(`No se encontró el contenedor para ${targetId}.`);
    return;
  }

  if (!container.offsetParent) {
    return;
  }

  if (renderedCharts.has(targetId)) {
    Plotly.Plots.resize(container);
    return;
  }

  container.innerHTML = '';
  const figureData = Array.isArray(figure.data) ? figure.data : [];
  const figureLayout = sanitiseLayout(figure.layout);

  Plotly.newPlot(container, figureData, figureLayout, PLOTLY_CONFIG)
    .then(() => {
      renderedCharts.add(targetId);
      Plotly.Plots.resize(container);
    })
    .catch((error) => {
      console.error(`No se pudo renderizar ${targetId}`, error);
      container.innerHTML = '<div class="chart-error">No se pudo cargar el gráfico.</div>';
    });
};

const renderChartsInSection = (section) => {
  if (!section) {
    return;
  }

  const charts = section.querySelectorAll('.plotly-chart[id]');
  charts.forEach((chartNode) => renderChart(chartNode.id));
};

const resizeRenderedCharts = () => {
  renderedCharts.forEach((targetId) => {
    const container = document.getElementById(targetId);
    if (container && container.offsetParent) {
      Plotly.Plots.resize(container);
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = document.querySelectorAll('.section');

  const setActiveSection = (targetId) => {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.section === targetId);
    });

    sections.forEach((section) => {
      section.classList.toggle('active', section.id === targetId);
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      renderChartsInSection(targetSection);
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setActiveSection(link.dataset.section));
  });

  const modal = document.getElementById('configModal');
  const closeBtn = modal ? modal.querySelector('.close') : null;

  const closeModal = () => {
    if (modal) {
      modal.style.display = 'none';
    }
  };

  window.openModal = () => {
    if (modal) {
      modal.style.display = 'block';
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  const initialSection = document.querySelector('.section.active');
  renderChartsInSection(initialSection);
});

window.addEventListener('resize', resizeRenderedCharts);

const setStatusMessage = (message, level = 'info') => {
  const container = document.getElementById('status-message');
  if (!container) {
    return;
  }

  const levelClass = {
    success: 'status-success',
    error: 'status-error',
    info: 'status-info',
  }[level] || 'status-info';

  container.className = `status-message ${levelClass}`;
  container.textContent = message;
};

window.applyConfiguration = () => {
  setStatusMessage('La configuración automática se habilitará próximamente. Puedes personalizar el contenido directamente en el código por ahora.');
};

window.loadExampleData = () => {
  setStatusMessage('La carga de datos de ejemplo no está disponible en esta versión de la plantilla.');
};
