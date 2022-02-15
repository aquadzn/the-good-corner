# API Rest de The Good Corner

## Installation

- Installer les librairies

`pip install -r requirements.txt`

## Lancement

- Développement

`python main.py`

- Production

`gunicorn --bind 0.0.0.0:5000 main:app`
