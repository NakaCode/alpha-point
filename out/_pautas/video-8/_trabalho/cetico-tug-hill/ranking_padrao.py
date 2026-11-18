# Quantas estacoes tem normal de neve com completude padrao (S ou C) e onde Hooker fica entre elas.
# Uso: python -X utf8 -B ranking_padrao.py ranking-neve.csv
import csv, sys
L = [x for x in csv.DictReader(open(sys.argv[1], encoding="utf-8"))]
from collections import Counter
print("completude:", Counter(x["comp"] for x in L))
S = sorted([x for x in L if x["comp"] in ("S", "C")], key=lambda x: -float(x["neve_in"]))
print("estacoes S ou C:", len(S))
for i, x in enumerate(S[:6], 1):
    print(i, x["neve_in"], x["nome"], x["comp"], x["anos"], round(float(x["elev_m"]) * 3.28084), "ft")
