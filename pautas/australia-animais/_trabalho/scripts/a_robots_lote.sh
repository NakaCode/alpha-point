#!/bin/bash
# Leitor A: lê o robots.txt de vários hosts, um por vez (a_baixar.py --robots-so)
cd /c/projetos/alpha-point/pautas/australia-animais/_trabalho/scripts
for h in "$@"; do
  echo "== $h"
  python -X utf8 -B a_baixar.py "https://$h/" x --robots-so 2>&1 | tail -2
  sleep 1
done
