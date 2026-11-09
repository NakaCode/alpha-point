"""Cetico: a parte de cada componente do royalty em TODOS os anos (1996-2026) do AllSales da LHDA,
e a tarifa da eletricidade por m3 entregue (M/m3), para ver se a parte 'eletricidade' e grande desde sempre
ou so depois da alta das tarifas da Eskom (o Art. 12(20)(b) indexa essa parte ao preco medio da Eskom).
Os anos de 1996 a 1999 saem com percentuais sem sentido (o total do ano soma perto de zero): ignorar.
Uso: python -I -X utf8 -B cetico_royalty_historia.py <AllSales.pdf>
"""
import re
import sys
from collections import defaultdict

import fitz

rx = re.compile(r"^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)-(\d\d)$")


def num(s):
    return float(re.sub(r"[^0-9.\-]", "", s) or 0)


toks = []
for p in fitz.open(sys.argv[1]):
    toks += [t.strip() for t in p.get_text().splitlines() if t.strip()]
por_ano = defaultdict(lambda: [0.0] * 6)  # real, faturada, fixo, om, el, total
meses = []
i = 0
while i < len(toks):
    m = rx.match(toks[i])
    if m and i + 11 < len(toks) and re.match(r"^\d+$", toks[i + 1]):
        ano = 2000 + int(m.group(2)) if int(m.group(2)) < 90 else 1900 + int(m.group(2))
        v = toks[i + 1: i + 12]
        a = por_ano[ano]
        a[0] += num(v[1]); a[1] += num(v[2]); a[2] += num(v[7]); a[3] += num(v[8]); a[4] += num(v[9]); a[5] += num(v[10])
        meses.append((ano, m.group(1), num(v[1]), num(v[2]), num(v[7]), num(v[8]), num(v[9]), num(v[10])))
        i += 12
        continue
    i += 1
print("ano | entrega real Mm3 | faturada | total M mi | fixo % | O&M % | elet % | elet M/m3 faturado | fixo+O&M %")
for ano in sorted(por_ano):
    r, f, fx, om, el, tot = por_ano[ano]
    if tot:
        tar = el / (f * 1e6) if f else 0
        print(f"{ano} | {r:7.1f} | {f:7.1f} | {tot/1e6:8.1f} | {fx/tot*100:5.1f} | {om/tot*100:5.1f} | {el/tot*100:5.1f} | {tar:.4f} | {(fx+om)/tot*100:5.1f}")
print("--- meses de 2023-12 a 2024-02 e 2024-09 a 2025-06")
for ano, mes, r, f, fx, om, el, tot in meses:
    if (ano == 2023 and mes == "Dec") or (ano == 2024) or (ano == 2025 and mes in ("Jan", "Feb", "Mar", "Apr", "May", "Jun")):
        print(ano, mes, f"real {r:.2f}", f"fat {f:.2f}", f"fixo {fx/1e6:.2f}", f"om {om/1e6:.2f}", f"el {el/1e6:.2f}", f"tot {tot/1e6:.2f}")
