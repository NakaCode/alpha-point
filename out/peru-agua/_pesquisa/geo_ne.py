"""Camadas do Natural Earth 1:10m (domínio público) e os pontos de coordenada lida nas fontes do dossiê, sem rede.
- departamento-lima: NE admin-1 "Lima" (PER-591) + "Lima Province" (PER-587), o departamento inteiro (sem o Callao);
- loreto: NE admin-1 "Loreto" (PER-585);
- pacifico-sudeste: NE marine polys "South Pacific Ocean", recortado na janela do Peru e do Chile;
- cidades-ne: os pontos do NE populated places (Lima, Callao, Iquitos, Piura, Tacna, Nasca, Jauja, Satipo), com o teste
  terra/água contra o peru-ne e a distância até a borda;
- pontos-fontes: as coordenadas lidas nas fontes do dossiê (SENAMHI, CSV da OMM, fichas da UNESCO).
uso: python -P geo_ne.py <deriv-dir>"""
import json, os, sys, math, hashlib
from shapely.geometry import shape, mapping, Point, box
from shapely.ops import transform, unary_union
import numpy as np

d = sys.argv[1]
H = os.path.join(os.environ["USERPROFILE"], ".regie", "geo", "natural-earth")
peru = shape(json.load(open(os.path.join(d, "peru-ne.json")))["features"][0]["geometry"])
V = {k: shape(json.load(open(os.path.join(d, f"_fc-vertente-{k}.json")))["features"][0]["geometry"]) for k in ["pacifico", "atlantico", "titicaca"]}
A, F = 6378137.0, 1 / 298.257223563
E2 = F * (2 - F); E = math.sqrt(E2)


def cea(x, y, z=None):
    lam = np.radians(np.asarray(x)); s = np.sin(np.radians(np.asarray(y)))
    q = (1 - E2) * (s / (1 - E2 * s * s) - (1 / (2 * E)) * np.log((1 - E * s) / (1 + E * s)))
    return A * lam, A * q / 2


def km2(g):
    return round(transform(cea, g).area / 1e6, 1)


def r5(g):
    return transform(lambda x, y, z=None: (np.round(x, 6), np.round(y, 6)), g)


def hav(a, b):
    p1, p2 = math.radians(a[1]), math.radians(b[1])
    h = math.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(math.radians(b[0] - a[0]) / 2) ** 2
    return 2 * 6371.0088 * math.asin(math.sqrt(h))


def sha(arq):
    return hashlib.sha256(open(arq, "rb").read()).hexdigest()


def dms(g, m, s, sinal=-1):
    return sinal * (g + m / 60 + s / 3600)


PD = "Domínio público (Natural Earth) — sem crédito obrigatório; citável como fonte"
saidas = {}
a1 = os.path.join(H, "ne_10m_admin_1_states_provinces.geojson")
adm1 = json.load(open(a1, encoding="utf-8"))
sel = {f["properties"]["adm1_code"]: f for f in adm1["features"] if f["properties"]["adm0_a3"] == "PER"}
lim = unary_union([shape(sel["PER-591"]["geometry"]), shape(sel["PER-587"]["geometry"])]).simplify(0.002, preserve_topology=True)
lor = shape(sel["PER-585"]["geometry"]).simplify(0.002, preserve_topology=True)
saidas["departamento-lima"] = ({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {
    "name": "Lima Department (Lima Region + Lima Province)", "rotulo": "LIMA REGION", "ne_adm1": ["PER-591", "PER-587"], "area_km2": km2(lim),
    "nota": "o departamento inteiro, como o INEI o conta (sem o Callao); o 'Región Lima' do governo regional exclui a Província de Lima"},
    "geometry": mapping(r5(lim))}]}, "Natural Earth 1:10m Admin 1 (ne_10m_admin_1_states_provinces, PER-591 + PER-587)", sha(a1))
saidas["loreto"] = ({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {
    "name": "Loreto", "rotulo": "LORETO", "ne_adm1": "PER-585", "area_km2": km2(lor)}, "geometry": mapping(r5(lor))}]},
    "Natural Earth 1:10m Admin 1 (ne_10m_admin_1_states_provinces, PER-585)", sha(a1))
mp = os.path.join(H, "ne_10m_geography_marine_polys.geojson")
mar = [f for f in json.load(open(mp, encoding="utf-8"))["features"] if f["properties"].get("name") == "South Pacific Ocean"][0]
spo = shape(mar["geometry"]).intersection(box(-95, -35, -68, 2)).simplify(0.003, preserve_topology=True)
saidas["pacifico-sudeste"] = ({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {
    "name": "South Pacific Ocean (window off Peru and Chile)", "rotulo": "SOUTH PACIFIC", "recorte": [-95, -35, -68, 2]},
    "geometry": mapping(r5(spo))}]}, "Natural Earth 1:10m Geography Marine Polys (South Pacific Ocean), recortado na janela -95,-35,-68,2", sha(mp))

pp = os.path.join(H, "ne_10m_populated_places_simple.geojson")
cid = {f["properties"]["name"]: f for f in json.load(open(pp, encoding="utf-8"))["features"] if f["properties"]["adm0_a3"] == "PER"}
osm_alt = {"Jauja": (-75.5000068, -11.7751615, "node/5326264643"), "Satipo": (-74.6372639, -11.2538354, "node/2165108346"),
           "Nasca": (-74.9370624, -14.8277203, "node/1237030175")}
feats = []
borda = peru.boundary
for nome, rot in [("Lima", "Lima"), ("Callao", "Callao"), ("Iquitos", "Iquitos"), ("Piura", "Piura"), ("Tacna", "Tacna"),
                  ("Nasca", "Nazca"), ("Jauja", "Jauja"), ("Satipo", "Satipo")]:
    f = cid[nome]; c = f["geometry"]["coordinates"]; p = Point(c)
    lado = [k for k, g in V.items() if g.contains(p)]
    props = {"name": nome, "rotulo": rot, "papel": "ponto", "ne_id": f["properties"].get("ne_id"), "featurecla": f["properties"].get("featurecla"),
             "terra": peru.contains(p), "distancia_ate_borda_km": round(borda.distance(p) * 111.2 * math.cos(math.radians(abs(c[1]))) if False else hav(c, list(borda.interpolate(borda.project(p)).coords)[0]), 2),
             "vertente": lado[0] if lado else None, "license": "Domínio público (Natural Earth)"}
    if nome in osm_alt:
        o = osm_alt[nome]; props["alternativa_osm"] = {"lonlat": [o[0], o[1]], "osm": o[2], "distancia_km": round(hav(c, o[:2]), 2)}
    if nome == "Nasca":
        props["nota"] = "o NE grafa 'Nasca'; o roteiro e a tela dizem 'Nazca'"
    feats.append({"type": "Feature", "properties": props, "geometry": {"type": "Point", "coordinates": c}})
saidas["cidades-ne"] = ({"type": "FeatureCollection", "features": feats}, "Natural Earth 1:10m Populated Places Simple (ne_10m_populated_places_simple)", sha(pp))

PF = [  # (id, rótulo, lon, lat, fonte do dossiê, arquivo local)
    ("campo-de-marte", "Lima", dms(77, 2, 35.4), dms(12, 4, 13.9), "SENAMHI, estação Campo de Marte (mec-03), 12°04'13,9\" S 77°02'35,4\" O", "estação de referência das distâncias do dossiê"),
    ("estacao-marcapomacocha", "Marcapomacocha", dms(76, 19, 30), dms(11, 24, 16), "CSV da OMM (normais 1991–2020), Marcapomacocha_83406.csv (mec-02), 11|24|16 S 76|19|30 W, 4.447 m", "a estação, não a boca do túnel"),
    ("estacao-satipo", "Satipo", dms(74, 36, 31), dms(11, 13, 29), "CSV da OMM (normais 1991–2020), Satipo_81201.csv (mec-02), 11|13|29 S 74|36|31 W, 577 m", "a estação; a cidade fica a ~3,5 km"),
    ("estacao-matucana", "Matucana", dms(76, 22, 41), dms(11, 50, 21), "CSV da OMM (mec-02), 11°50'21\" S 76°22'41\" O, 2.417 m", "a estação, no vale do Rímac"),
    ("caral", "Caral", dms(77, 31, 17), dms(10, 53, 30), "UNESCO WHC 1269 (gen-11), S 10°53'30\" O 77°31'17\"", "o sítio"),
    ("chan-chan", "Chan Chan", dms(79, 4, 29.053), dms(8, 6, 28.21), "UNESCO WHC 366 (gen-12), S 8°6'28,21\" O 79°4'29,053\"", "o sítio"),
    ("linhas-de-nazca", "Nazca Lines", dms(75, 8, 54.996), dms(14, 43, 32.988), "UNESCO WHC 700 (gen-13), S 14°43'32,988\" O 75°8'54,996\"", "o ponto da ficha da UNESCO (as linhas, não a cidade)"),
]
fp = []
for i, rot, x, y, fonte, nota in PF:
    p = Point(x, y); lado = [k for k, g in V.items() if g.contains(p)]
    fp.append({"type": "Feature", "properties": {"id": i, "rotulo": rot, "papel": "ponto", "fonte": fonte, "nota": nota, "terra": peru.contains(p),
               "vertente": lado[0] if lado else None, "distancia_ate_borda_km": round(hav((x, y), list(borda.interpolate(borda.project(p)).coords)[0]), 2)},
               "geometry": {"type": "Point", "coordinates": [round(x, 6), round(y, 6)]}})
saidas["pontos-fontes"] = ({"type": "FeatureCollection", "features": fp}, "Coordenadas lidas nas fontes do dossiê (SENAMHI mec-03; CSV da OMM mec-02; fichas da UNESCO gen-11, gen-12, gen-13)", None)

for slug, (fc, fonte, h) in saidas.items():
    json.dump(fc, open(os.path.join(d, f"_fc-{slug}.json"), "w", encoding="utf-8"), ensure_ascii=False)
    if slug == "pontos-fontes":
        orig = {"fonte": fonte, "licenca": "Fato (coordenada publicada pela fonte oficial); sem crédito de geometria na tela — a fonte do dado vai no crédito da cena",
                "url": "https://whc.unesco.org/en/list/1269/", "exige_credito": False, "derivado_por": "out/peru-agua/_pesquisa/geo_ne.py (graus-minutos-segundos → decimal)"}
    else:
        orig = {"fonte": fonte + (f" (sha256 {h[:12]}…)" if h else ""), "licenca": PD, "url": "https://www.naturalearthdata.com/about/terms-of-use/",
                "exige_credito": False, "derivado_por": "out/peru-agua/_pesquisa/geo_ne.py"}
    json.dump(orig, open(os.path.join(d, f"_orig-{slug}.json"), "w", encoding="utf-8"), ensure_ascii=False)
    print(slug, len(fc["features"]))
for f in feats + fp:
    print("  ", f["properties"].get("rotulo"), f["geometry"]["coordinates"], "terra" if f["properties"]["terra"] else "ÁGUA", f["properties"]["distancia_ate_borda_km"], "km da borda", f["properties"]["vertente"], f["properties"].get("alternativa_osm", ""))
print("Lima dept km2", km2(lim), "Loreto km2", km2(lor))
