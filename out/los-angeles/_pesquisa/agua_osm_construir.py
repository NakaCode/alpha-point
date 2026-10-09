# Monta a camada agua-osm-la: o mar e o porto do OpenStreetMap (water polygons do osmdata, ODbL), recortados à caixa das câmeras
# do vídeo 2, com o San Pedro Breakwater e as estruturas em área (quebra-mar, píer, espigão, farol) tirados da água.
# Entradas (de dentro de C:/projetos/alpha-point):
#   out/los-angeles/_tmp/agua/work/pedacos.json          <- agua_osm_extrair.py -120.40 32.80 -116.30 34.95 (lê o zip sem extrair)
#   out/los-angeles/_media/geo/quebra-mar-osm.json       <- o eixo do San Pedro Breakwater que o canal já tem
#   out/los-angeles/_tmp/agua/work/overpass-estruturas.json <- Overpass (overpass-api.de), 08/10/2026 20:48 UTC (base 20:46:34Z):
#       [out:json][timeout:120];(way["man_made"~"^(pier|breakwater|groyne|quay|lighthouse)$"](33.60,-118.80,34.20,-117.95);
#        relation["man_made"~"^(pier|breakwater|groyne|quay)$"](33.60,-118.80,34.20,-117.95););out geom;
#   out/los-angeles/_tmp/agua/work/overpass-aguas-internas.json <- Overpass, 08/10/2026 20:56 UTC (base 20:54:50Z):
#       [out:json][timeout:120];(way["natural"="water"](33.60,-118.80,34.20,-117.95);relation["natural"="water"](…);
#        way["waterway"="riverbank"](…);relation["waterway"="riverbank"](…););out geom;
# Saída: out/los-angeles/_tmp/agua/work/agua-osm-la.geojson (+ resumo.json). O agua_osm_gravar.mjs leva ao _media/geo.
import json, math, sys, warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)
from shapely import wkb
from shapely.geometry import Polygon, LineString, MultiPolygon, box, mapping, shape
from shapely.ops import unary_union, linemerge, polygonize, transform
from shapely.validation import make_valid
CAIXA = (-120.40, 32.80, -116.30, 34.95)
FOLGA_MURO_M = 15.0          # meia largura do buraco do San Pedro Breakwater (justificativa no relato)
TOL_M = 1.2                  # Douglas-Peucker com topologia, em metros: o teto pedido é 2 m de deslocamento, e o simplificador
                             # topológico passa um pouco da tolerância (a 1,5 m, 2,14 m no pior vértice; a 1,2 m, 1,73 m)
MIN_AGUA_M2 = 0.0            # nenhum pedaço de água se descarta
LAT0 = 33.75; KX = 111320.0 * math.cos(math.radians(LAT0)); KY = 110574.0
def am(x, y, z=None): return ((x + 118.25) * KX, (y - LAT0) * KY)                 # lon/lat -> metros locais
def ll(x, y, z=None): return (x / KX - 118.25, y / KY + LAT0)
W = "out/los-angeles/_tmp/agua/work/"
d = json.load(open(W + "pedacos.json"))
assert tuple(d["caixa"]) == CAIXA or all(abs(a - b) < 1e-9 for a, b in zip(d["caixa"], CAIXA))
mar = unary_union([wkb.loads(p["wkb"], hex=True) for p in d["pedacos"]])
# ── as águas do porto que a costa do OSM fecha: entram junto com o mar (sem elas, a costa do OSM corta a água aberta numa reta) ──
# O porto de Long Beach: a Shoreline Marina, a Rainbow Harbor e a foz do LA River com Queensway Bay (os polígonos natural=water que a
# costa fecha na boca). As outras águas que a costa fecha (Marina del Rey, Ballona Creek, Dominguez Channel, San Gabriel River e
# Alamitos Bay, Bolsa Chica, Santa Ana River) ficam no satélite: são rio, canal, laguna ou marina fora do porto (relato).
AGUAS_DO_PORTO = [("way", 428829750), ("way", 428829751), ("way", 30824975)]
EI = json.load(open(W + "overpass-aguas-internas.json", encoding="utf-8"))
res_int = []
for e in EI["elements"]:
    if (e["type"], e["id"]) in AGUAS_DO_PORTO:
        G = Polygon([(p["lon"], p["lat"]) for p in e["geometry"]])
        if not G.is_valid: G = make_valid(G)
        mar = mar.union(G)
        res_int.append({"osm": "%s/%d" % (e["type"], e["id"]), "tags": {k: v for k, v in e.get("tags", {}).items() if k in ("name", "natural", "water", "leisure")},
                        "m2": round(transform(lambda x, y, z=None: ((x + 118.25) * KX, (y - LAT0) * KY), G).area)})
assert len(res_int) == len(AGUAS_DO_PORTO), "falta água do porto no dump do Overpass"
agua = mar.intersection(box(*CAIXA))
res = {"aguas_do_porto_somadas": None, "caixa": CAIXA, "pedacos_osmdata": len(d["pedacos"]), "registros_osmdata": [p["rec"] for p in d["pedacos"]]}
# ── o San Pedro Breakwater: o eixo do canal com a folga ────────────────────────────────────────────────
ax = json.load(open("out/los-angeles/_media/geo/quebra-mar-osm.json", encoding="utf-8"))["features"][0]["geometry"]["coordinates"]
muro_m = LineString([am(*p) for p in ax]).buffer(FOLGA_MURO_M, cap_style="round", join_style="round", quad_segs=8)
muro = transform(ll, muro_m)
# ── as estruturas em área do OSM ────────────────────────────────────────────────────────────────────────
E = json.load(open(W + "overpass-estruturas.json", encoding="utf-8"))
res["overpass_base"] = E["osm3s"]["timestamp_osm_base"]
def poligono_de_relacao(e):
    outers, inners = [], []
    for m in e.get("members", []):
        if m.get("type") != "way" or not m.get("geometry"): continue
        (outers if m.get("role", "outer") != "inner" else inners).append(LineString([(p["lon"], p["lat"]) for p in m["geometry"]]))
    def aneis(ls):
        if not ls: return []
        u = unary_union(ls)
        return list(polygonize(u if u.geom_type != "MultiLineString" else linemerge(u)))
    o = unary_union(aneis(outers)); i = unary_union(aneis(inners))
    return o.difference(i) if not i.is_empty else o
tirar, tiradas, ignoradas, linhas_na_agua = [], [], [], 0
for e in E["elements"]:
    t = e.get("tags", {}); mm = t.get("man_made")
    if e["type"] == "relation":
        if t.get("type") != "multipolygon": continue
        G = poligono_de_relacao(e)
    else:
        g = [(p["lon"], p["lat"]) for p in e["geometry"]]
        fechado = len(g) >= 4 and g[0] == g[-1]
        area = fechado and t.get("area") != "no" and (mm in ("breakwater", "groyne", "lighthouse") or t.get("area") == "yes" or mm == "pier")
        if not area:
            if LineString(g).intersects(agua): linhas_na_agua += 1
            continue
        G = Polygon(g)
    if G.is_empty: continue
    if not G.is_valid: G = make_valid(G)
    if t.get("natural") == "coastline": continue                      # já é terra no water polygons (Middle e Long Beach)
    if e["type"] == "way" and e["id"] == 1312790328:                 # o San Pedro Breakwater vai pelo eixo do canal, com a folga
        ignoradas.append({"osm": "way/1312790328", "porque": "trocado pelo eixo quebra-mar-osm com folga de %.0f m" % FOLGA_MURO_M}); continue
    ai = transform(am, G.intersection(agua)).area
    if ai < 0.5: continue
    tirar.append(G)
    tiradas.append({"osm": "%s/%d" % (e["type"], e["id"]), "man_made": mm, "nome": t.get("name", ""), "flutuante": t.get("floating", ""),
                    "m2_na_agua": round(ai), "centro": [round(G.centroid.x, 5), round(G.centroid.y, 5)]})
res["aguas_do_porto_somadas"] = res_int
res["overpass_aguas_base"] = EI["osm3s"]["timestamp_osm_base"]
buracos = unary_union([muro] + tirar)
res["muro_m2_tirado"] = round(transform(am, muro.intersection(agua)).area)
agua2 = agua.difference(buracos)
res["estruturas_tiradas"] = sorted(tiradas, key=lambda x: -x["m2_na_agua"]); res["estruturas_ignoradas"] = ignoradas
res["pier_linhas_na_agua_mantidas"] = linhas_na_agua
# ── simplificação em metros, com a medida do deslocamento ──────────────────────────────────────────────
am_ = transform(am, agua2)
simp = am_.simplify(TOL_M, preserve_topology=True)
if not simp.is_valid: simp = make_valid(simp)
partes = [g for g in getattr(simp, "geoms", [simp]) if g.geom_type == "Polygon" and g.area > MIN_AGUA_M2]
simp = MultiPolygon(partes) if len(partes) > 1 else partes[0]
import shapely, numpy as np
def desloc(orig, novo):   # distância de cada vértice da costa original à costa simplificada, em metros
    dd = shapely.distance(shapely.points(shapely.get_coordinates(orig.boundary)), novo.boundary)
    return round(float(dd.max()), 3), round(float(np.percentile(dd, 99.9)), 3)
res["desloc_max_m"], res["desloc_p999_m"] = desloc(am_, simp)
res["hausdorff_m"] = round(am_.boundary.hausdorff_distance(simp.boundary), 3)
res["area_km2_antes"] = round(am_.area / 1e6, 4); res["area_km2_depois"] = round(simp.area / 1e6, 4)
def nv(g): return sum(len(p.exterior.coords) + sum(len(i.coords) for i in p.interiors) for p in getattr(g, "geoms", [g]))
res["vertices_antes"] = nv(am_); res["vertices_depois"] = nv(simp); res["poligonos"] = len(partes)
res["buracos"] = sum(len(p.interiors) for p in partes)
fim = transform(ll, simp)
def r6(o):
    if isinstance(o, (list, tuple)):
        if o and isinstance(o[0], (int, float)): return [round(o[0], 6), round(o[1], 6)]
        return [r6(x) for x in o]
    return o
geom = mapping(fim); geom = {"type": geom["type"], "coordinates": r6(geom["coordinates"])}
# confere que o arredondamento não quebrou nada
chk = shape(geom); res["valida_depois_de_arredondar"] = chk.is_valid
if not chk.is_valid:
    geom2 = mapping(make_valid(chk)); geom = {"type": geom2["type"], "coordinates": r6(geom2["coordinates"])}; res["corrigida_make_valid"] = True
res["desloc_max_m_depois_de_arredondar"] = desloc(am_, transform(am, shape(geom)))[0]
fc = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {
    "name": "Ocean and harbor water (OpenStreetMap water polygons)", "papel": "agua-base",
    "src": "OpenStreetMap water polygons (osmdata.openstreetmap.de, water-polygons-split-4326, 2026-10-08 03:47 UTC) — ODbL 1.0, © OpenStreetMap contributors"},
    "geometry": geom}]}
json.dump(fc, open(W + "agua-osm-la.geojson", "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
json.dump(res, open(W + "resumo.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({k: v for k, v in res.items() if k not in ("estruturas_tiradas",)}, ensure_ascii=False))
print("estruturas tiradas:", len(tiradas), "m2:", sum(x["m2_na_agua"] for x in tiradas))
