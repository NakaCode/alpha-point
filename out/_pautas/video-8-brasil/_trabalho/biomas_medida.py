# A medida nossa da semente dos biomas: as duas florestas (Amazonia e Mata Atlantica) se tocam no mapa oficial do IBGE?
# Dado: IBGE, Biomas do Brasil 1:250.000 (2019), geoftp.ibge.gov.br (publico). Bruto em midia/_pautas/video-8-brasil/ibge-biomas/.
# Uso: python -X utf8 -B biomas_medida.py
import sys, os, time
import numpy as np
import shapefile
import shapely
from shapely.geometry import shape
from shapely.ops import nearest_points
sys.path.insert(0, os.path.dirname(__file__))
from geo_util import Albers, area_km2, vincenty_km

def log(*a):
    print(*a, flush=True)

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", ".."))
SHP = os.path.join(RAIZ, "midia", "_pautas", "video-8-brasil", "ibge-biomas", "lm_bioma_250.shp")
t0 = time.time()
r = shapefile.Reader(SHP, encoding="utf-8")
log("campos:", [f[0] for f in r.fields[1:]])
alb = Albers()
geoms = {}
for sr in r.iterShapeRecords():
    rec = sr.record.as_dict()
    nome = rec.get("Bioma") or rec.get("BIOMA") or rec.get("NOM_BIOMA") or str(rec)
    g = shape(sr.shape.__geo_interface__)
    log(nome, "| registro:", rec, "| partes:", len(sr.shape.parts), "| vertices:", len(sr.shape.points), "| valido:", g.is_valid, f"({time.time()-t0:.0f}s)")
    if not g.is_valid:
        g = g.buffer(0)
    geoms[nome] = g

tot = 0
areas = {}
for k, g in geoms.items():
    a = area_km2(g, alb)
    areas[k] = a
    tot += a
for k, a in areas.items():
    log(f"area {k}: {a:,.0f} km2 = {a/2.589988:,.0f} sq mi ({100*a/tot:.1f}%)")
log(f"total: {tot:,.0f} km2 = {tot/2.589988:,.0f} sq mi ({time.time()-t0:.0f}s)")

def achar(sub):
    for k in geoms:
        if sub.lower() in k.lower():
            return k
    raise SystemExit("sem " + sub)

am, ma = achar("Amaz"), achar("Atl")
ga, gm = geoms[am], geoms[ma]
shapely.prepare(ga)
log("Amazonia toca a Mata Atlantica (resolucao cheia)?", ga.intersects(gm), f"({time.time()-t0:.0f}s)")
for k, g in geoms.items():
    if k in (am, ma):
        continue
    log(f"  {k}: toca Amazonia={ga.intersects(g)} | toca Mata Atlantica={g.intersects(gm)}")

# distancia: simplifico a ~100 m (0.001 grau) e meco no plano Albers; depois a geodesica entre os pontos achados
sa, sm = ga.simplify(0.001), gm.simplify(0.001)
pa, pm = nearest_points(alb.project(sa), alb.project(sm))
log(f"distancia minima no plano Albers (simplificado a ~100 m): {pa.distance(pm)/1000:,.1f} km ({time.time()-t0:.0f}s)")

def vert_mais_prox(geom_geo, p_plano):
    best = None
    for pg in getattr(geom_geo, "geoms", [geom_geo]):
        if pg.geom_type != "Polygon":
            continue
        xs, ys = np.array(pg.exterior.coords).T
        X, Y = alb.fwd(xs, ys)
        dd = np.hypot(X - p_plano.x, Y - p_plano.y)
        i = int(dd.argmin())
        if best is None or dd[i] < best[0]:
            best = (dd[i], xs[i], ys[i])
    return best
ba, bm = vert_mais_prox(sa, pa), vert_mais_prox(sm, pm)
dk = vincenty_km(ba[1], ba[2], bm[1], bm[2])
log(f"vertices mais proximos: Amazonia ({ba[1]:.4f}, {ba[2]:.4f}) | Mata Atlantica ({bm[1]:.4f}, {bm[2]:.4f}) | geodesica {dk:,.1f} km = {dk/1.609344:,.1f} mi")

pol_m = sorted([p for p in getattr(gm, 'geoms', [gm]) if p.geom_type == 'Polygon'], key=lambda p: -p.area)
pol_a = sorted([p for p in getattr(ga, 'geoms', [ga]) if p.geom_type == 'Polygon'], key=lambda p: -p.area)
log("Mata Atlantica: poligonos", len(pol_m), "| os 5 maiores (km2):", [round(area_km2(p, alb)) for p in pol_m[:5]])
log("Amazonia: poligonos", len(pol_a), "| os 3 maiores (km2):", [round(area_km2(p, alb)) for p in pol_a[:3]])
# corpos principais
ca, cm = pol_a[0].simplify(0.001), pol_m[0].simplify(0.001)
p1, p2 = nearest_points(alb.project(ca), alb.project(cm))
b1, b2 = vert_mais_prox(ca, p1), vert_mais_prox(cm, p2)
d2 = vincenty_km(b1[1], b1[2], b2[1], b2[2])
log(f"corpos principais: Amazonia ({b1[1]:.3f},{b1[2]:.3f}) | Mata Atlantica ({b2[1]:.3f},{b2[2]:.3f}) | {d2:,.1f} km = {d2/1.609344:,.1f} mi")
# os enclaves de Mata Atlantica mais proximos da Amazonia (brejos de altitude etc.)
viz = []
for p in pol_m[:60]:
    ps = p.simplify(0.001)
    q1, q2 = nearest_points(alb.project(sa), alb.project(ps))
    viz.append((q1.distance(q2) / 1000, area_km2(p, alb), p.centroid.x, p.centroid.y))
viz.sort()
log("poligonos de Mata Atlantica mais perto da Amazonia (km, area km2, centroide):", [(round(a), round(b), round(c, 2), round(e, 2)) for a, b, c, e in viz[:6]])
log(f"fim ({time.time()-t0:.0f}s)")
