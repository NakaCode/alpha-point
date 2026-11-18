# Em que pedaco da Amazonia (mapa de biomas do IBGE, 2025) cai o vertice mais perto de Teresina? E o corpo principal, ate onde vai
# para leste no Maranhao? E as sedes municipais mais perto desse vertice.
# Uso: python -X utf8 -B amazonia_maranhao.py
import sys, os
import numpy as np
import shapefile
from shapely.geometry import shape, Point

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(AQUI, ".."))
from geo_util import Albers, area_km2, vincenty_km

MID = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", "..", "midia", "_pautas", "video-8-brasil"))
alb = Albers()
r = shapefile.Reader(os.path.join(MID, "cetico-duas-florestas", "biomas2025", "lml_bioma_e250k_v20250911_A.shp"), encoding="utf-8")
for sr in r.iterShapeRecords():
    if sr.record["NM_BIOMA"] == "Amazônia":
        am = shape(sr.shape.__geo_interface__)
partes = sorted(am.geoms, key=lambda p: -p.area)
alvo = Point(-43.891, -3.474)
for i, p in enumerate(partes):
    if p.distance(alvo) < 0.01:
        print(f"o vertice esta na parte {i} (0 = corpo principal), area {area_km2(p, alb):,.0f} km2")
corpo = partes[0]
a = np.array(corpo.exterior.coords)
leste = a[a[:, 1] > -6]
i = leste[:, 0].argmax()
print(f"corpo principal: ponto mais a leste ao norte de 6 S: ({leste[i,0]:.3f}, {leste[i,1]:.3f})")
rl = shapefile.Reader(os.path.join(MID, "ibge-localidades", "BR_localidades_2022.shp"), encoding="utf-8")
sedes = [(s.record["NM_MUN"], s.record["SIGLA_UF"], s.shape.points[0]) for s in rl.iterShapeRecords() if s.record["SCT_LOCALI"] == "Sede Municipal"]
for x0, y0, rot in ((-43.891, -3.474, "vertice da Amazonia mais perto de Teresina"), (-52.2505, -13.4131, "ponta amazonica do vao de 568 km"),
                    (-50.7052, -18.3210, "ponta atlantica do vao de 568 km")):
    pr = sorted(sedes, key=lambda s: (s[2][0] - x0) ** 2 + (s[2][1] - y0) ** 2)[:3]
    print(rot, [(n, uf, round(vincenty_km(x0, y0, p[0], p[1]), 1)) for n, uf, p in pr])
    # em que bioma cai cada sede
d = vincenty_km(-42.8019, -5.0892, -43.891, -3.474)
print(f"Teresina (sede) ate o vertice: {d:,.0f} km")
