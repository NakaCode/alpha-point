# Lê o water-polygons-split-4326.zip (osmdata.openstreetmap.de, ODbL) SEM extrair: percorre o .shp dentro do zip em fluxo,
# registro a registro, e guarda só os polígonos cuja caixa toca a caixa pedida. Grava out/los-angeles/_tmp/agua/work/pedacos.wkb.json
# Uso, de dentro de C:/projetos/alpha-point: python out/los-angeles/_pesquisa/agua_osm_extrair.py -120.40 32.80 -116.30 34.95
import sys, zipfile, struct, json, time
from shapely.geometry import Polygon, MultiPolygon
from shapely import wkb
from shapely.geometry.polygon import orient
ZIP = "out/los-angeles/_media/geo/_osm-agua/water-polygons-split-4326.zip"
SHP = "water-polygons-split-4326/water_polygons.shp"
x0, y0, x1, y1 = map(float, sys.argv[1:5])
def ler(f, n):
    b = f.read(n)
    if len(b) != n: raise EOFError
    return b
def aneis_para_poligonos(aneis):
    # shapefile: anel externo em sentido horário, buracos anti-horário
    def area(r):
        return sum(r[i][0] * r[i + 1][1] - r[i + 1][0] * r[i][1] for i in range(len(r) - 1)) / 2
    polys = []
    for r in aneis:
        if area(r) < 0: polys.append([r, []])
        else:
            if not polys: polys.append([r, []])  # defensivo
            else:
                # buraco: no polígono que o contém
                from shapely.geometry import Point
                pt = Point(r[0])
                for P in reversed(polys):
                    if Polygon(P[0]).contains(pt): P[1].append(r); break
                else: polys[-1][1].append(r)
    return [Polygon(e, h) for e, h in polys]
t = time.time()
z = zipfile.ZipFile(ZIP)
f = z.open(SHP)
ler(f, 100)
n = keep = 0
out = []
try:
    while True:
        rec, clen = struct.unpack(">ii", ler(f, 8)); n += 1
        body = ler(f, clen * 2)
        st = struct.unpack("<i", body[:4])[0]
        if st != 5: continue
        bx0, by0, bx1, by1 = struct.unpack("<4d", body[4:36])
        if bx1 < x0 or bx0 > x1 or by1 < y0 or by0 > y1: continue
        np_, npt = struct.unpack("<2i", body[36:44])
        parts = list(struct.unpack("<%di" % np_, body[44:44 + 4 * np_]))
        pts = struct.unpack("<%dd" % (2 * npt), body[44 + 4 * np_:44 + 4 * np_ + 16 * npt])
        P = [(pts[2 * i], pts[2 * i + 1]) for i in range(npt)]
        parts.append(npt)
        aneis = [P[parts[i]:parts[i + 1]] for i in range(np_)]
        for pg in aneis_para_poligonos(aneis):
            out.append({"rec": rec, "bbox": [bx0, by0, bx1, by1], "wkb": wkb.dumps(pg, hex=True)})
        keep += 1
except EOFError:
    pass
json.dump({"caixa": [x0, y0, x1, y1], "registros_lidos": n, "registros_na_caixa": keep, "pedacos": out}, open("out/los-angeles/_tmp/agua/work/pedacos.json", "w"))
print(f"lidos {n} registros, {keep} na caixa, {len(out)} polígonos, {time.time()-t:.0f} s")
