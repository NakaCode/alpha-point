# Cético mississippi-divisas (17/11/2026): a medida preliminar.
# Quantos pedaços de estado ficam do "lado errado" do leito de hoje do Mississippi, e quanta área somam.
#
# Método:
# 1. As divisas: os polígonos dos 10 estados do Censo 2020 (TIGERweb, camada 80, resolução cheia; baixar_estados.py).
#    Das 9 divisas que o rio forma (MN-WI, IA-WI, IA-IL, MO-IL, MO-KY, MO-TN, AR-TN, AR-MS, LA-MS) se tira a linha comum
#    (a fronteira de um estado que toca o outro).
# 2. O leito de hoje: a linha do canal principal do Mississippi no OSM (relação 1756854, papel main_stream; osm_rio.py),
#    sem o trecho marcado como canal.
# 3. As duas linhas juntas, com os cruzamentos como nós, viram faces (polygonize). Cada face fechada entre a divisa e o rio é
#    terra (e água) de um estado do outro lado do leito de hoje. A face se reparte entre os estados pela interseção com os
#    polígonos do Censo.
# 4. Área numa projeção de áreas iguais (cilíndrica de Lambert sobre a esfera autálica, R = 6371,007 km).
# Saída: pedacos.json (todas as faces) e pedacos-resumo.txt.
# Dados: U.S. Census Bureau (TIGERweb); (c) OpenStreetMap contributors, ODbL.
import json, os, math, collections
from shapely.geometry import Polygon, MultiPolygon, LineString, MultiLineString, shape, mapping
from shapely.ops import unary_union, polygonize, linemerge, transform
import warnings; warnings.filterwarnings('ignore', category=DeprecationWarning)
AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", ".."))
BRUTO = os.path.join(RAIZ, "midia", "_pautas", "video-8", "cetico-mississippi-divisas")
UFS = ["MN", "WI", "IA", "IL", "MO", "KY", "TN", "AR", "MS", "LA"]
PARES = [("MN", "WI"), ("IA", "WI"), ("IA", "IL"), ("MO", "IL"), ("MO", "KY"), ("MO", "TN"), ("AR", "TN"), ("AR", "MS"), ("LA", "MS")]
OESTE = {"MN", "IA", "MO", "AR", "LA"}
R = 6371.007; F0 = math.radians(38.0)
def proj(x, y, z=None):
    # Lambert cilíndrica de áreas iguais, em km
    import numpy as np
    x = np.asarray(x); y = np.asarray(y)
    return (R * np.radians(x) * math.cos(F0), R * np.sin(np.radians(y)) / math.cos(F0))
def area_km2(g):
    return transform(proj, g).area
def comp_km(g):
    # comprimento aproximado (km), pela escala local
    tot = 0.0
    linhas = [g] if g.geom_type == "LineString" else list(getattr(g, "geoms", []))
    for l in linhas:
        if l.geom_type != "LineString":
            continue
        c = list(l.coords)
        for (x1, y1), (x2, y2) in zip(c, c[1:]):
            tot += math.hypot((x2 - x1) * 111.32 * math.cos(math.radians((y1 + y2) / 2)), (y2 - y1) * 110.57)
    return tot
def carrega_estado(uf):
    j = json.load(open(os.path.join(BRUTO, f"estados-{uf}.json"), encoding="utf-8"))
    aneis = j["features"][0]["geometry"]["rings"]
    externos, buracos = [], []
    for a in aneis:
        p = Polygon(a)
        if not p.is_valid:
            p = p.buffer(0)
        # ArcGIS: anel externo em sentido horário (área com sinal negativa no shapely)
        sinal = 0.0
        for (x1, y1), (x2, y2) in zip(a, a[1:]):
            sinal += (x2 - x1) * (y2 + y1)
        (externos if sinal > 0 else buracos).append(p)
    polys = []
    for e in externos:
        hs = [h for h in buracos if e.contains(h.representative_point())]
        g = e
        for h in hs:
            g = g.difference(h)
        polys.append(g)
    return unary_union(polys)
estados = {uf: carrega_estado(uf) for uf in UFS}
for uf, g in estados.items():
    print(uf, g.geom_type, "área km2 %.0f" % area_km2(g))
# 1. as divisas do rio
divisas = {}
for a, b in PARES:
    l = estados[a].boundary.intersection(estados[b].boundary)
    l = linemerge([x for x in getattr(l, "geoms", [l]) if x.geom_type in ("LineString", "MultiLineString")]) if not l.is_empty else l
    divisas[(a, b)] = l
    print("divisa %s-%s: %.1f km" % (a, b, comp_km(l)))
# 2. o rio
rio_j = json.load(open(os.path.join(BRUTO, "rio-main-stream.json"), encoding="utf-8"))
vias = []
for e in rio_j["elements"]:
    if e["tags"].get("waterway") != "river":
        print("incluído (canal da eclusa, no curso principal):", e["id"], e["tags"].get("waterway"), e["tags"].get("lock_name"))
    vias.append(LineString([(p["lon"], p["lat"]) for p in e["geometry"]]))
# a lacuna da eclusa 8 (43,58° N): as pontas das duas partes se ligam por um segmento reto
rio0 = linemerge(vias)
pontas = [(list(g.coords)[0], list(g.coords)[-1]) for g in rio0.geoms]
for (a0, a1) in pontas:
    for (b0, b1) in pontas:
        if a1 != b0 and abs(a1[1] - b0[1]) < 0.02 and abs(a1[0] - b0[0]) < 0.02 and a1[1] < 44.0:
            vias.append(LineString([a1, b0])); print("lacuna fechada: %.4f,%.4f -> %.4f,%.4f" % (a1[1], a1[0], b0[1], b0[0]))
rio = linemerge(vias)
print("rio:", rio.geom_type, len(getattr(rio, "geoms", [rio])), "partes; %.0f km" % comp_km(rio))
# 3. faces
todas = [divisas[p] for p in PARES] + [rio]
rede = unary_union(todas)
faces = list(polygonize(rede))
print("faces:", len(faces))
div_uniao = unary_union([divisas[p] for p in PARES])
saida = []
for i, f in enumerate(faces):
    ak = area_km2(f)
    # quanto do contorno da face é divisa (o resto é rio)
    cont = f.exterior
    per = comp_km(LineString(cont.coords))
    em_div = comp_km(cont.intersection(div_uniao.buffer(1e-6)))
    partes = {}
    for uf in UFS:
        if not estados[uf].intersects(f):
            continue
        inter = estados[uf].intersection(f)
        a = area_km2(inter)
        if a > 1e-4:
            partes[uf] = round(a, 4)
    c = f.representative_point()
    saida.append({"i": i, "area_km2": round(ak, 4), "perim_km": round(per, 2), "contorno_na_divisa_km": round(em_div, 2),
                  "largura_media_m": round(1000 * 2 * ak / per, 1) if per else 0, "estados": partes,
                  "lat": round(c.y, 5), "lon": round(c.x, 5), "bbox": [round(v, 5) for v in f.bounds],
                  "wkt_simpl": f.simplify(0.0005).wkt})
json.dump(saida, open(os.path.join(AQUI, "pedacos.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)
json.dump([{"i": i, "wkt": f.wkt} for i, f in enumerate(faces) if area_km2(f) >= 0.1], open(os.path.join(BRUTO, "faces-wkt.json"), "w", encoding="utf-8"))
# resumo
saida.sort(key=lambda d: -d["area_km2"])
linhas = []
for lim in (0.0, 0.1, 0.5, 1.0, 2.6, 5.0):
    sel = [d for d in saida if d["area_km2"] >= lim]
    linhas.append("faces com área >= %.1f km2: %d; soma %.1f km2 (%.1f mi2)" % (lim, len(sel), sum(d["area_km2"] for d in sel), sum(d["area_km2"] for d in sel) / 2.589988))
por_uf = collections.defaultdict(lambda: [0, 0.0])
for d in saida:
    if d["area_km2"] < 0.5:
        continue
    for uf, a in d["estados"].items():
        por_uf[uf][0] += 1; por_uf[uf][1] += a
linhas.append("por estado (faces >= 0,5 km2): " + "; ".join("%s %d pedaços %.1f km2" % (k, v[0], v[1]) for k, v in sorted(por_uf.items(), key=lambda t: -t[1][1])))
linhas.append("")
linhas.append("as 40 maiores: área km2 | mi2 | largura média m | estados | lat lon")
for d in saida[:40]:
    linhas.append("%8.2f | %7.2f | %6.0f | %s | %.4f %.4f" % (d["area_km2"], d["area_km2"] / 2.589988, d["largura_media_m"], d["estados"], d["lat"], d["lon"]))
open(os.path.join(AQUI, "pedacos-resumo.txt"), "w", encoding="utf-8").write("\n".join(linhas) + "\n")
print("\n".join(linhas))
