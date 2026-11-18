# O gerador escreveu "No Nordeste o vao passa de 1.000 km". Confere: a Mata Atlantica do mapa de biomas (IBGE 2025) ao norte de 10 S
# (sem as ilhas oceanicas), ate a Amazonia: o par de vertices mais perto (haversine para achar, Vincenty no par).
# Uso: python -X utf8 -B vao_nordeste.py
import sys, os, math
import numpy as np
import shapefile
from shapely.geometry import shape

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(AQUI, ".."))
from geo_util import vincenty_km

MID = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", "..", "midia", "_pautas", "video-8-brasil", "cetico-duas-florestas"))
r = shapefile.Reader(os.path.join(MID, "biomas2025", "lml_bioma_e250k_v20250911_A.shp"), encoding="utf-8")
bio = {sr.record["NM_BIOMA"]: shape(sr.shape.__geo_interface__) for sr in r.iterShapeRecords()}


def verts(g, filtro):
    out = []
    for pg in g.geoms:
        a = np.array(pg.exterior.coords)
        out.append(a[filtro(a)])
    return np.concatenate(out)


A = verts(bio["Amazônia"], lambda a: (a[:, 1] > -12) & (a[:, 0] > -50))[::3]
M = verts(bio["Mata Atlântica"], lambda a: (a[:, 1] > -10) & (a[:, 0] < -34.9) & (a[:, 0] > -40))
print("vertices:", len(A), len(M))
best = None
for i in range(0, len(M), 2000):
    m = M[i:i + 2000]
    p1, l1 = np.radians(m[:, 1])[:, None], np.radians(m[:, 0])[:, None]
    p2, l2 = np.radians(A[:, 1])[None, :], np.radians(A[:, 0])[None, :]
    h = np.sin((p2 - p1) / 2) ** 2 + np.cos(p1) * np.cos(p2) * np.sin((l2 - l1) / 2) ** 2
    j = np.unravel_index(h.argmin(), h.shape)
    if best is None or h[j] < best[0]:
        best = (h[j], m[j[0]], A[j[1]])
d = vincenty_km(best[1][0], best[1][1], best[2][0], best[2][1])
print(f"Mata Atlantica do Nordeste ({best[1][0]:.3f}, {best[1][1]:.3f}) -> Amazonia ({best[2][0]:.3f}, {best[2][1]:.3f}): {d:,.0f} km = {d/1.609344:,.0f} mi")
cc = bio["Cerrado"].area + bio["Caatinga"].area
