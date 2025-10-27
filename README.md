# RNP 2023 · Residuos Peligrosos Los Ríos

Repositorio para la ingesta, transformación y análisis de los residuos peligrosos declarados en el Registro Nacional de Emisiones y Transferencias (RNP) 2023, con foco en la región de Los Ríos. El proyecto combina un pipeline ETL reproducible, validaciones automatizadas y visualizaciones interactivas orientadas a la toma de decisiones territoriales.

## Objetivos

- Consolidar en un solo flujo los datos RNP 2023 desde su descarga hasta la publicación de artefactos.
- Garantizar calidad mediante validaciones de esquema, perfiles y métricas de duplicidad.
- Entregar análisis exploratorios y reportes ejecutivos reutilizables para stakeholders regionales.

## Stack principal

- Python 3.10+, `pandas`, `pyarrow`, `numpy`
- Validaciones con `pandera` y esquemas propios (`src/validators`).
- Visualizaciones interactivas con Plotly y despliegue estático en `docs/`.
- Configuración YAML (`config/`) y utilidades compartidas en `src/utils`.

## Requisitos previos

- Python 3.10 o superior y `pip`
- Entorno virtual (recomendado) activado antes de instalar dependencias
- Acceso al dataset crudo `data/raw/rinp_generacion_2023_cl.csv` (incluido en la estructura del repo)

## Instalación rápida

```bash
git clone https://github.com/ObservaLosRios/los-rios-rinp-2023.git
cd los-rios-rinp-2023
python -m venv .venv
source .venv/bin/activate  # En Windows usar .venv\Scripts\activate
pip install -r requirements.txt
```

## Ejecución del pipeline

- `python main.py`: corre el pipeline completo y persiste salidas en `data/processed/`, `artifacts/` y `logs/`.
- `python main.py --no-persist`: ejecuta el flujo sin escribir a disco (útil para pruebas rápidas).
- `python main.py --config config/prod.yaml`: sobreescribe parámetros usando un YAML alternativo.
- `python demo.py`: realiza un sanity check sin persistencia y muestra las primeras filas limpias.
- `python scripts/run_pipeline.py`: helper que usa la instalación de `.venv` para ejecutar `main.py` sin escribir comandos largos.

## Estructura del repositorio

```
los-rios-rinp-2023/
├── artifacts/
│   └── rnp_comparativo_regiones/
│       ├── figures/             # Salidas Plotly (HTML)
│       └── tables/              # Tablas ejecutivas (CSV)
├── config/                      # Parámetros y rutas por ambiente
├── data/
│   ├── raw/                     # Fuentes originales (CSV)
│   ├── processed/               # Datasets limpios y agregados
│   └── output/                  # Resultados intermedios opcionales
├── docs/                        # Sitio estático con historias y recursos
├── logs/                        # Métricas de calidad y bitácoras
├── notebooks/                   # Exploración narrativa y prototipos
├── scripts/                     # Comandos auxiliares
├── src/                         # Código modular (data_models, etl, utils, validators)
├── tests/                       # Pruebas unitarias y de regresión
├── demo.py                      # Entrada ligera para validaciones rápidas
├── main.py                      # Entrada principal del pipeline
├── pyproject.toml               # Configuración de build/dependencias
└── requirements.txt             # Dependencias para pip
```

## Flujo de datos

1. **Extract** (`src/etl/extract.py`): lectura del CSV crudo con codificación `latin-1`, normalización básica y perfil inicial.
2. **Transform** (`src/etl/transform.py`): limpieza de columnas, estandarización de unidades, normalización de taxonomías y generación de indicadores regionales.
3. **Validate** (`src/validators` + `src/data_models`): verificación de esquemas, control de duplicados y cálculo de métricas nulas (`logs/quality_metrics.json`).
4. **Load** (`src/etl/load.py`): persistencia de datasets limpios, agregados por región y reporte de calidad; exportación de artefactos para visualizaciones y tablas.

## Entradas y artefactos principales

| Ruta | Descripción |
|------|-------------|
| `data/raw/rinp_generacion_2023_cl.csv` | Fuente oficial de residuos peligrosos (RNP 2023). |
| `data/processed/rinp_generacion_2023_cl_clean.parquet` | Dataset limpio y normalizado a nivel de registro. |
| `data/processed/region_summary.csv` | Agregados por región (toneladas, promedio, recuentos). |
| `data/processed/region_treatment.csv` | Matriz región × tratamiento con toneladas normalizadas. |
| `artifacts/rnp_comparativo_regiones/tables/*.csv` | Tablas ejecutivas usadas en presentaciones y dashboards. |
| `artifacts/rnp_comparativo_regiones/figures/*.html` | Visualizaciones Plotly (dumbbell, Cleveland, lollipop). |
| `logs/quality_metrics.json` | Resultado consolidado de validaciones y conteos nulos. |

## Configuración

- `config/default.yaml` define rutas, codificación, separadores y parámetros de calidad.
- Para usar un archivo alternativo exporta la variable `PIPELINE_CONFIG` o pasa `--config` en la CLI.
- Las rutas de salida se crean automáticamente; asegúrate de que la carpeta `data/` exista con permisos de escritura.

## Notebooks y visualizaciones

- `notebooks/rnp_comparativo_regiones.ipynb`: narrativa nacional vs. focos regionales con gráficos inspirados en The Economist.
- `notebooks/rnp_insights.ipynb`: zoom sobre Los Ríos, jerarquías de generadores y mix de tratamientos.
- Las visualizaciones finales viven en `artifacts/.../figures/` y se integran en el sitio estático `docs/`.

## Calidad y monitoreo

- `pytest` ejecuta la suite completa (`tests/test_pipeline.py`, `tests/test_transform.py`).
- `pytest -k transform` permite filtrar escenarios específicos.
- Los logs enriquecidos (`src/utils/logging.py`) escriben a consola y a disco para trazabilidad.
