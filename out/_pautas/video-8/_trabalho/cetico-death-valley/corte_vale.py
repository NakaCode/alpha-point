# Cético death-valley (17/11/2026): o corte do Death Valley de Telescope Peak a Dantes View, passando pelo ponto GNIS de
# Badwater Basin, no USGS 3DEP (getSamples, um pedido por lote), para comparar o desnível com o Grand Canyon (NPS: média de 1 mi).
# Uso: python -X utf8 -B corte_vale.py   (cwd = esta pasta). Grava corte_vale.tsv.
import time
from perfil import gc_interp, amostras, FT

TELESCOPE = (36.16985, -117.08927)   # GNIS 250316
BADWATER = (36.25023418335752, -116.82589684182979)  # GNIS 255963
DANTES = (36.22051, -116.72672)      # GNIS 241258

def trecho(a, b, passo=100.0):
    _, d = gc_interp(a, b, 1)
    n = max(2, int(d // passo))
    pts, d = gc_interp(a, b, n)
    vals = []
    for i in range(0, len(pts), 150):
        vals += amostras(pts[i:i + 150]); time.sleep(1)
    return pts, vals, d

linhas = []
total = 0.0
for nome, a, b in [("Telescope->Badwater", TELESCOPE, BADWATER), ("Badwater->Dantes View", BADWATER, DANTES)]:
    pts, vals, d = trecho(a, b)
    print(f"{nome}: {d/1609.344:.2f} mi; início {vals[0]*FT:,.0f} ft; fim {vals[-1]*FT:,.0f} ft; mín {min(v for v in vals if v is not None)*FT:,.0f} ft")
    for (la, lo), v in zip(pts, vals):
        linhas.append(f"{nome}\t{la:.5f}\t{lo:.5f}\t{'' if v is None else round(v*FT)}")
    total += d
open("corte_vale.tsv", "w", encoding="utf-8").write("trecho\tlat\tlon\talt_ft\n" + "\n".join(linhas) + "\n")
print(f"largura Telescope -> Dantes View pelo fundo: {total/1609.344:.1f} mi")
