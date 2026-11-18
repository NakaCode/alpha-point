# O "outro mapa oficial": o Mapa da Area de Aplicacao da Lei 11.428 (IBGE, 2a ed. 2012, 1:5.000.000, so em PDF). Ele poe na
# Mata Atlantica os encraves do Nordeste (Teresina, a Ibiapaba, Baturite, o Araripe). Sem o vetor, leio pontos das bordas desses
# encraves no PDF (pela grade de meridianos e paralelos, erro de uns 10 km) e meco a distancia deles ate a Amazonia do mapa de
# biomas do IBGE de 2025 (geodesica de Vincenty ate o vertice mais proximo). Tambem: a distancia de cada capital ate a Amazonia.
# Uso: python -X utf8 -B vao_lei.py
import sys, os, math
import numpy as np
import shapefile
from shapely.geometry import shape

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(AQUI, ".."))
from geo_util import vincenty_km

MID = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", "..", "midia", "_pautas", "video-8-brasil", "cetico-duas-florestas"))
r = shapefile.Reader(os.path.join(MID, "biomas2025", "lml_bioma_e250k_v20250911_A.shp"), encoding="utf-8")
am = None
for sr in r.iterShapeRecords():
    if sr.record["NM_BIOMA"] == "Amazônia":
        am = shape(sr.shape.__geo_interface__)
xs, ys = [], []
for pg in am.geoms:
    a = np.array(pg.exterior.coords)
    xs.append(a[:, 0]); ys.append(a[:, 1])
X, Y = np.concatenate(xs), np.concatenate(ys)


def perto(lon, lat):
    # haversine vetorial para achar o candidato, Vincenty no melhor
    p1, l1 = math.radians(lat), math.radians(lon)
    p2, l2 = np.radians(Y), np.radians(X)
    h = np.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * np.cos(p2) * np.sin((l2 - l1) / 2) ** 2
    i = int(h.argmin())
    return vincenty_km(lon, lat, X[i], Y[i]), X[i], Y[i]


pontos = [
    ("encrave de Teresina (C), borda oeste, norte", -42.95, -4.30),
    ("encrave de Teresina (C), borda oeste, na cidade", -42.83, -5.09),
    ("Ibiapaba (A), borda oeste", -41.20, -3.60),
    ("Ibiapaba (A), borda oeste, sul", -41.05, -4.30),
    ("Baturite (A/F)", -38.95, -4.30),
    ("Araripe (F), perto de Juazeiro do Norte", -39.40, -7.25),
    ("ponta da Mata Atlantica no mapa de biomas (sul de Goias)", -50.7052, -18.3210),
]
for nome, lon, lat in pontos:
    d, x, y = perto(lon, lat)
    print(f"{nome} ({lon}, {lat}) -> Amazonia em ({x:.3f}, {y:.3f}): {d:,.0f} km = {d/1.609344:,.0f} mi")
