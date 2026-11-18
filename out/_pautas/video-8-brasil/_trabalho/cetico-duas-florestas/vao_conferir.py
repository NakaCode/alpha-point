# O cetico confere a medida do gerador por outro caminho, no mapa de biomas do IBGE de 2025 (o vigente; o gerador mediu o de 2019):
# 1) busca global com a geometria simplificada a ~200 m numa projecao azimutal equidistante centrada no vao (nao o Albers do gerador);
# 2) refino em resolucao cheia num recorte de 4 graus em volta dos pontos achados; geodesica de Vincenty entre os vertices;
# 3) teste do buffer (Amazonia + 560/565/570/575 km toca a Mata Atlantica?), no recorte e em resolucao cheia;
# 4) as cidades mais perto das duas pontas; os pedacos de Mata Atlantica no interior do Nordeste (os brejos estao no mapa de biomas?).
# Uso: python -X utf8 -B vao_conferir.py
import sys, os, math, time
import numpy as np
import shapefile, shapely
from shapely.geometry import shape, box
from shapely.ops import nearest_points

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(AQUI, ".."))
from geo_util import vincenty_km, Albers, area_km2  # so a geodesica e a area; a projecao do vao e outra (abaixo)

MID = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", "..", "midia", "_pautas", "video-8-brasil"))
t0 = time.time()
R = 6371008.8


def log(*a):
    print(*a, f"({time.time()-t0:.0f}s)", flush=True)


class AEQD:
    """Azimutal equidistante esferica (Snyder 1987, eq. 25-2 a 25-4): distancia exata a partir do centro."""

    def __init__(self, lon0, lat0):
        self.l0, self.p0 = math.radians(lon0), math.radians(lat0)

    def fwd(self, lon, lat):
        l = np.radians(np.asarray(lon, float)); p = np.radians(np.asarray(lat, float))
        cosc = np.sin(self.p0) * np.sin(p) + np.cos(self.p0) * np.cos(p) * np.cos(l - self.l0)
        c = np.arccos(np.clip(cosc, -1, 1))
        s = np.sin(c)
        k = np.where(s == 0, 1.0, c / np.where(s == 0, 1, s))
        x = R * k * np.cos(p) * np.sin(l - self.l0)
        y = R * k * (np.cos(self.p0) * np.sin(p) - np.sin(self.p0) * np.cos(p) * np.cos(l - self.l0))
        return x, y

    def project(self, g):
        return shapely.transform(g, lambda c: np.column_stack(self.fwd(c[:, 0], c[:, 1])))


r = shapefile.Reader(os.path.join(MID, "cetico-duas-florestas", "biomas2025", "lml_bioma_e250k_v20250911_A.shp"), encoding="utf-8")
bio = {sr.record["NM_BIOMA"]: shape(sr.shape.__geo_interface__) for sr in r.iterShapeRecords()}
am, ma = bio["Amazônia"], bio["Mata Atlântica"]
log("toca (intersects, resolucao cheia):", am.intersects(ma))
prj = AEQD(-51.48, -15.87)

# 1) busca global, simplificada a ~200 m
A1, M1 = prj.project(am.simplify(0.002)), prj.project(ma.simplify(0.002))
p1, q1 = nearest_points(A1, M1)
log(f"global (simplificado a ~200 m, AEQD): {p1.distance(q1)/1000:,.1f} km")


def inv_aprox(geom_geo, p):
    best = None
    for pg in getattr(geom_geo, "geoms", [geom_geo]):
        for ring in [pg.exterior] + list(pg.interiors):
            xs, ys = np.array(ring.coords).T
            X, Y = prj.fwd(xs, ys)
            dd = np.hypot(X - p.x, Y - p.y)
            i = int(dd.argmin())
            if best is None or dd[i] < best[0]:
                best = (dd[i], xs[i], ys[i])
    return best


ga, gm = inv_aprox(am.simplify(0.002), p1), inv_aprox(ma.simplify(0.002), q1)
# 2) refino em resolucao cheia num recorte de 4 graus em volta de cada ponta
ca = am.intersection(box(ga[1] - 4, ga[2] - 4, ga[1] + 4, ga[2] + 4))
cm = ma.intersection(box(gm[1] - 4, gm[2] - 4, gm[1] + 4, gm[2] + 4))
A2, M2 = prj.project(ca), prj.project(cm)
p2, q2 = nearest_points(A2, M2)
va, vm = inv_aprox(ca, p2), inv_aprox(cm, q2)
dg = vincenty_km(va[1], va[2], vm[1], vm[2])
log(f"refino (resolucao cheia, recorte): {p2.distance(q2)/1000:,.1f} km no plano | vertices Amazonia ({va[1]:.4f}, {va[2]:.4f}) "
    f"[{va[0]:.0f} m do ponto] | Mata Atlantica ({vm[1]:.4f}, {vm[2]:.4f}) [{vm[0]:.0f} m] | Vincenty {dg:,.1f} km = {dg/1.609344:,.1f} mi")
# 3) buffer
shapely.prepare(M2)
for b in (560, 565, 570, 575):
    log(f"  Amazonia (recorte) + {b} km toca a Mata Atlantica (recorte)? {A2.buffer(b * 1000, 16).intersects(M2)}")
# 4) cidades nas pontas
rl = shapefile.Reader(os.path.join(MID, "ibge-localidades", "BR_localidades_2022.shp"), encoding="utf-8")
sedes = [(s.record["NM_MUN"], s.record["SIGLA_UF"], s.shape.points[0]) for s in rl.iterShapeRecords() if s.record["SCT_LOCALI"] == "Sede Municipal"]
for rot, (x0, y0) in (("ponta amazonica", (va[1], va[2])), ("ponta atlantica", (vm[1], vm[2]))):
    pr = sorted(sedes, key=lambda s: (s[2][0] - x0) ** 2 + (s[2][1] - y0) ** 2)[:3]
    log(rot, [(n, uf, round(vincenty_km(x0, y0, p[0], p[1]), 1)) for n, uf, p in pr])
# 5) Mata Atlantica no interior do Nordeste, no mapa de biomas
alb = Albers()
partes = [p for p in getattr(ma, "geoms", [ma]) if p.geom_type == "Polygon"]
ne = [p for p in partes if -42.5 < p.centroid.x < -35.6 and -9.5 < p.centroid.y < -2.5]
log("Mata Atlantica: partes", len(partes), "| com centroide no interior do Nordeste (lon -42,5 a -35,6; lat -9,5 a -2,5):", len(ne),
    sorted([(round(area_km2(p, alb), 1), round(p.centroid.x, 2), round(p.centroid.y, 2)) for p in ne], reverse=True)[:12])
caat = bio["Caatinga"]
log("Caatinga: buracos (enclaves de outro bioma dentro dela):", sum(len(p.interiors) for p in getattr(caat, "geoms", [caat])))
