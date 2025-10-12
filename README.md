# SII Empresas Data Analysis

Repositorio para la ingesta, transformación y análisis de los residuos peligrosos declarados en el Registro Nacional de Emisiones y Transferencias (RNP) 2023 en Chile. Incluye un pipeline ETL reproducible, validaciones de datos y visualizaciones interactivas orientadas a la toma de decisiones regionales.

## Estructura del proyecto

```
los-rios-rinp-2023/
├── artifacts/                   # Tablas y gráficos exportados
│   └── rnp_comparativo_regiones/
│       ├── figures/             # Salidas HTML (Plotly)
│       └── tables/              # CSV con métricas resumidas
├── config/                      # Archivos YAML con parámetros por ambiente
├── data/
│   ├── raw/                     # Datos originales descargados
│   ├── processed/               # Conjuntos limpios y normalizados
│   └── output/                  # Resultados adicionales del pipeline
├── docs/                        # Dashboard e historias web
├── logs/                        # Métricas de calidad y bitácoras
├── notebooks/                   # Exploración analítica y narrativa
├── scripts/                     # Utilidades de ejecución
├── src/                         # Código fuente modular (ETL + utilidades)
├── tests/                       # Pruebas unitarias y de regresión
├── demo.py                      # Ejecución rápida sin persistir
├── main.py                      # Entrada principal del pipeline
├── pyproject.toml               # Configuración de build y dependencias
└── requirements.txt             # Dependencias en formato pip
```

## Requisitos previos

- Python 3.10 o superior
- Entorno virtual activo (`python -m venv .venv && source .venv/bin/activate` en macOS/Linux)
- Dependencias instaladas: `pip install -r requirements.txt`

## Puesta en marcha

```bash
# 1. Clonar y preparar entorno
git clone https://github.com/ObservaLosRios/los-rios-rinp-2023.git
cd los-rios-rinp-2023
python -m venv .venv
source .venv/bin/activate  # En Windows usar .venv\Scripts\activate
pip install -r requirements.txt

# 2. Ejecutar pipeline completo y persistir artefactos
python main.py

# 3. Modo exploratorio sin escribir en disco
python demo.py

# 4. Helper con parámetros centralizados
python scripts/run_pipeline.py
```

## Flujo de datos

1. **Extract**: lectura de los archivos brutos `data/raw/rinp_generacion_2023_cl.csv` y anexos.
2. **Transform**: limpieza de columnas, estandarización de unidades, enriquecimiento regional y generación de indicadores.
3. **Validate**: verificaciones cuantitativas y porcentajes de nulos reportados en `logs/quality_metrics.json`.
4. **Load**: escritura de datasets normalizados en `data/processed/` y exportación de artefactos (tablas/figuras) en `artifacts/`.

### Configuración

- `config/default.yaml` define rutas de entrada/salida, parámetros de control de calidad y opciones de visualización.
- Se pueden añadir archivos YAML específicos por ambiente (ej. `config/prod.yaml`) y seleccionarlos con la variable de entorno `PIPELINE_CONFIG`.

## Datos clave y artefactos

| Archivo | Descripción |
|---------|-------------|
| `data/processed/rinp_generacion_2023_cl_clean.parquet` | Dataset limpio a nivel de registro.
| `data/processed/region_summary.csv` | Agregados por región con toneladas totales, promedio y recuento.
| `data/processed/region_treatment.csv` | Matriz región × tratamiento con toneladas asociadas.
| `artifacts/rnp_comparativo_regiones/tables/*.csv` | Reportes ejecutivos utilizados en presentaciones.
| `artifacts/rnp_comparativo_regiones/figures/*.html` | Visualizaciones Plotly exportadas (dumbbells, Cleveland plots, lollipop charts).
| `logs/quality_metrics.json` | Resultados de validaciones (nulos, rangos, consistencia).

## Notebooks y visualizaciones

- `notebooks/rnp_comparativo_regiones.ipynb`: relato nacional vs. regiones foco con barras horizontales, dumbbell plots y lollipop charts adaptados al estilo Economist.
- `notebooks/rnp_insights.ipynb`: zoom sobre Los Ríos, incluyendo jerarquía de generadores, mix de tratamientos y anotaciones personalizadas.
- Los notebooks utilizan Plotly para visualizaciones interactivas; ejecutar cada celda en orden (`Run All`) después de actualizar los datasets.

## Logs y monitoreo

- El pipeline escribe métricas de control en `logs/quality_metrics.json` (porcentaje de nulos, conteos de registros, validaciones por columna).
- Los pasos críticos registran mensajes a consola y archivo aprovechando `src/utils/logging.py`.

## Pruebas y calidad

```bash
pytest              # Ejecuta suite unitaria
pytest -k transform # Filtra por módulo específico
```

Las pruebas cubren el pipeline y las transformaciones críticas. Se recomienda ejecutarlas antes de generar artefactos oficiales.

## Próximos pasos sugeridos

- Añadir escenarios de comparación histórica (años anteriores) reutilizando la misma estructura ETL.
- Automatizar la publicación de figuras HTML en `docs/` mediante GitHub Pages o equivalente.
- Integrar validaciones adicionales usando `src/validators/schemas.py` para garantizar contratos de datos al ampliar el pipeline.
