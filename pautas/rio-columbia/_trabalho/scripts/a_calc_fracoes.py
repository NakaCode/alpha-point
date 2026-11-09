"""Calcula a fração da vazão média de The Dalles que passa em Birchbank (WSC 08NE049) e na fronteira (USGS 12399500),
com os brutos já baixados em BAIXADOS (a_wsc_mensal.py e a_vazao.py usgs). Anos casados.

Uso: BAIXADOS=<pasta> python -I -X utf8 -B a_calc_fracoes.py
"""
import json
import os
import statistics
from collections import defaultdict

B = os.environ["BAIXADOS"]
CFS = 0.028316846592  # m3/s por cfs
MAF = 1.233481837548e9  # m3 por milhão de acre-pés (1e6 acre-ft = 1.2335e9 m3)
SEG = 365.25 * 86400


def usgs(site):
    d = {}
    for l in open(os.path.join(B, f"usgs-anual-{site}.rdb"), encoding="utf-8"):
        if l.startswith("#") or l.startswith("agency") or l.startswith("5s"):
            continue
        c = l.rstrip("\n").split("\t")
        try:
            d[int(c[5])] = float(c[6])
        except Exception:
            pass
    return d


dal = usgs("14105700")
fro = usgs("12399500")
feats = json.load(open(os.path.join(B, "wsc-mensal-08NE049.json"), encoding="utf-8"))
por = defaultdict(list)
for f in feats:
    p = f["properties"]
    if p.get("MONTHLY_MEAN_DISCHARGE") is not None:
        por[int(p["DATE"][:4])].append(float(p["MONTHLY_MEAN_DISCHARGE"]))
bir = {a: statistics.mean(v) / CFS for a, v in por.items() if len(v) == 12}  # em cfs (média das médias mensais)


def casado(a, b, nome_a, nome_b, a0=None, a1=None):
    anos = sorted(set(a) & set(b))
    if a0:
        anos = [y for y in anos if a0 <= y <= a1]
    ma = statistics.mean(a[y] for y in anos)
    mb = statistics.mean(b[y] for y in anos)
    print(f"{nome_a}/{nome_b} {anos[0]}-{anos[-1]} n={len(anos)}: {ma:,.0f} / {mb:,.0f} cfs = {100*ma/mb:.1f} %")
    return ma, mb


print("The Dalles, média 1879-2024 (cfs):", f"{statistics.mean(dal.values()):,.0f}", " = ", f"{statistics.mean(dal.values())*CFS*SEG/MAF:.1f} Maf/ano")
print("Birchbank, média 1938-2025 (cfs):", f"{statistics.mean(bir.values()):,.0f}", " = ", f"{statistics.mean(bir.values())*CFS:,.0f} m3/s", f"{statistics.mean(bir.values())*CFS*SEG/MAF:.1f} Maf/ano")
print("Fronteira USGS 12399500, média 1939-2025 (cfs):", f"{statistics.mean(fro.values()):,.0f}", f"{statistics.mean(fro.values())*CFS*SEG/MAF:.1f} Maf/ano")
casado(bir, dal, "Birchbank", "The Dalles")
casado(fro, dal, "Fronteira", "The Dalles")
casado(bir, dal, "Birchbank", "The Dalles", 1961, 1990)
casado(bir, dal, "Birchbank", "The Dalles", 1991, 2020)
casado(bir, dal, "Birchbank", "The Dalles", 1938, 1967)
casado(bir, dal, "Birchbank", "The Dalles", 1974, 2024)
print("Birchbank/134 Maf (referência do tratado):", f"{100*statistics.mean(bir.values())*CFS*SEG/MAF/134:.1f} %")
