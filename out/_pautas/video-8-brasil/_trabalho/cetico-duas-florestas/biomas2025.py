# O mapa oficial de biomas do IBGE tem edicao nova: "2025_Biomas-e-Sistema-Costeiro-Marinho-do-Brasil-1-250000" (shp v20250911,
# publicado no geoftp em 2025). O gerador mediu a de 2019. Aqui: as areas na de 2025, se as duas florestas se tocam, o vao minimo,
# e onde a Mata Atlantica mudou de 2019 para 2025.
# Uso: python -X utf8 -B biomas2025.py
import sys, os, time
import numpy as np
import shapefile, shapely
from shapely.geometry import shape
from shapely.ops import nearest_points

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(AQUI, ".."))
from geo_util import Albers, area_km2, vincenty_km

MID = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", "..", "midia", "_pautas", "video-8-brasil"))
t0 = time.time()
alb = Albers()


def ler(caminho, campo):
    r = shapefile.Reader(caminho, encoding="utf-8")
    out = {}
    for sr in r.iterShapeRecords():
        g = shape(sr.shape.__geo_interface__)
        if not g.is_valid:
            g = g.buffer(0)
        out[sr.record[campo]] = g
    return out


b25 = ler(os.path.join(MID, "cetico-duas-florestas", "biomas2025", "lml_bioma_e250k_v20250911_A.shp"), "NM_BIOMA")
b19 = ler(os.path.join(MID, "ibge-biomas", "lm_bioma_250.shp"), "Bioma")
tot = sum(area_km2(g, alb) for g in b25.values())
for k in b25:
    a25, a19 = area_km2(b25[k], alb), area_km2(b19[k], alb)
    print(f"{k}: 2025 {a25:,.0f} km2 ({100*a25/tot:.2f}%) | 2019 {a19:,.0f} km2 | diferenca {a25-a19:+,.0f} km2")
print(f"total 2025: {tot:,.0f} km2 ({time.time()-t0:.0f}s)")
am, ma = b25["Amazônia"], b25["Mata Atlântica"]
print("2025: Amazonia toca a Mata Atlantica (resolucao cheia)?", am.intersects(ma), f"({time.time()-t0:.0f}s)")
for k, g in b25.items():
    if k not in ("Amazônia", "Mata Atlântica"):
        print(f"  {k}: toca Amazonia={am.intersects(g)} | toca Mata Atlantica={g.intersects(ma)}")
sa, sm = am.simplify(0.001), ma.simplify(0.001)
pa, pm = nearest_points(alb.project(sa), alb.project(sm))


def vert(geom_geo, p):
    best = None
    for pg in getattr(geom_geo, "geoms", [geom_geo]):
        xs, ys = np.array(pg.exterior.coords).T
        X, Y = alb.fwd(xs, ys)
        dd = np.hypot(X - p.x, Y - p.y)
        i = int(dd.argmin())
        if best is None or dd[i] < best[0]:
            best = (dd[i], xs[i], ys[i])
    return best


va, vm = vert(sa, pa), vert(sm, pm)
dk = vincenty_km(va[1], va[2], vm[1], vm[2])
print(f"2025: vao minimo (Albers, simplificado a ~100 m): {pa.distance(pm)/1000:,.1f} km | Amazonia ({va[1]:.4f}, {va[2]:.4f}) | "
      f"Mata Atlantica ({vm[1]:.4f}, {vm[2]:.4f}) | Vincenty {dk:,.1f} km = {dk/1.609344:,.1f} mi ({time.time()-t0:.0f}s)")
# onde a Mata Atlantica mudou
ganhou = ma.difference(b19["Mata Atlântica"])
perdeu = b19["Mata Atlântica"].difference(ma)
print(f"Mata Atlantica 2025 menos 2019: ganhou {area_km2(ganhou, alb):,.0f} km2, perdeu {area_km2(perdeu, alb):,.0f} km2 ({time.time()-t0:.0f}s)")
for nome, g in (("ganhou", ganhou), ("perdeu", perdeu)):
    ps = sorted([p for p in getattr(g, "geoms", [g]) if p.geom_type == "Polygon"], key=lambda p: -p.area)[:8]
    print(f"  {nome}, os 8 maiores pedacos (km2, centroide lon/lat):", [(round(area_km2(p, alb)), round(p.centroid.x, 2), round(p.centroid.y, 2)) for p in ps])
print(f"fim ({time.time()-t0:.0f}s)")
