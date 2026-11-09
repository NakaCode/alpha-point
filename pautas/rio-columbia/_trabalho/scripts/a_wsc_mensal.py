"""Médias mensais de vazão de uma estação do Water Survey of Canada, pela API aberta do ECCC.

Uso: python -I -X utf8 -B a_wsc_mensal.py <estacao>
Pagina de 1000 em 1000 (um pedido por vez), grava o bruto em BAIXADOS e imprime média por ano completo e média geral.
"""
import json
import os
import sys
import urllib.request
import statistics
from collections import defaultdict

BAIXADOS = os.environ.get("BAIXADOS") or sys.exit("defina BAIXADOS")
UA = "AlphaPoint-pauta/1.0 (canal Alpha Point; contato.naka@hotmail.com)"
est = sys.argv[1]
todos = []
off = 0
while True:
    url = f"https://api.weather.gc.ca/collections/hydrometric-monthly-mean/items?STATION_NUMBER={est}&f=json&limit=1000&offset={off}"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=90) as r:
        d = json.loads(r.read())
    feats = d.get("features", [])
    todos.extend(feats)
    if len(feats) < 1000:
        break
    off += 1000
open(os.path.join(BAIXADOS, f"wsc-mensal-{est}.json"), "w", encoding="utf-8").write(json.dumps(todos))
print("registros:", len(todos))
if todos:
    print(json.dumps(todos[0]["properties"], ensure_ascii=False))
por_ano = defaultdict(list)
for f in todos:
    p = f["properties"]
    v = p.get("MONTHLY_MEAN_DISCHARGE")
    if v is None:
        continue
    por_ano[int(p["DATE"][:4])].append(float(v))
anos = sorted(a for a, l in por_ano.items() if len(l) == 12)
print("anos completos:", len(anos), anos[:1], anos[-1:])
medias = [statistics.mean(por_ano[a]) for a in anos]
print("média das médias anuais (m3/s):", round(statistics.mean(medias), 1))
# 1961-1990 e 1991-2020
for a0, a1 in [(1961, 1990), (1991, 2020), (1971, 2000)]:
    m = [statistics.mean(por_ano[a]) for a in anos if a0 <= a <= a1]
    if m:
        print(f"{a0}-{a1}: n={len(m)} média {statistics.mean(m):.1f} m3/s")
