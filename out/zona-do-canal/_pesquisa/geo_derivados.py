"""Derivados deste video: (1) a faixa do PRINCIPIO do Art. II (5 milhas de cada lado do eixo), como esquema, a partir do
eixo real do canal do OSM; (2) os pontos de hoje do OSM (centros que o Overpass devolveu, 'out center'), com o id OSM."""
import json, math
from shapely.geometry import LineString, mapping
from shapely.ops import transform
B = r"C:/projetos/alpha-point/out/zona-do-canal/_tmp/pesquisa-geo/"
LAT0 = 9.1; KX = 111320*math.cos(math.radians(LAT0)); KY = 110574.0
fwd = lambda x, y, z=None: ((x+79.75)*KX, (y-LAT0)*KY)
inv = lambda x, y, z=None: (x/KX - 79.75, y/KY + LAT0)
eixo = json.load(open(B + "fc-eixo-do-canal.json"))["features"][0]["geometry"]["coordinates"]
L = transform(fwd, LineString(eixo))
faixa = transform(inv, L.buffer(5*1609.344, cap_style=2, join_style=1, resolution=16))
g = mapping(faixa)
def arred(c):
    return [arred(x) for x in c] if isinstance(c[0], (list, tuple)) else [round(c[0], 6), round(c[1], 6)]
json.dump({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"name": "10 miles wide (5 + 5)", "name_pt": "10 MILES WIDE (5 + 5)",
    "rotulo": "10 MILES WIDE (5 + 5)", "esquema": True, "o_que_e": "o principio do Art. II do tratado de 1903 (5 milhas de cada lado do eixo), aplicado ao eixo de hoje do OSM (tracado de 1914); NAO e a divisa",
    "largura_mi": 10}, "geometry": {"type": g["type"], "coordinates": arred(g["coordinates"])}}]}, open(B + "fc-faixa-art2-5mi.json", "w"))
print("faixa", faixa.geom_type, round(faixa.area*KX*KY/2589988.11, 1), "mi2 (na projecao local)")
# pontos de hoje do OSM
dp = json.load(open(B + "dumps/osm-nomes-pacifico.json", encoding="utf-8"))["elements"] + json.load(open(B + "dumps/osm-nomes-pacifico-2.json", encoding="utf-8"))["elements"] + json.load(open(B + "dumps/osm-canal-busca.json", encoding="utf-8"))["elements"]
idx = {(e["type"], e["id"]): e for e in dp}
ESCOLHA = [  # (slug, rotulo de tela sugerido, tipo osm, id, nota)
    ("cerro-ancon", "Ancón Hill", "node", 873585997, "natural=peak (o mastro da bandeira no topo)"),
    ("cerro-sosa", "Sosa Hill", "node", 3023838042, "natural=peak"),
    ("administration-building-balboa-heights", "Administration Building", "way", 370341568, "Edificio de la Administracion del Canal de Panama (centro do contorno do predio)"),
    ("goethals-memorial", "Goethals Memorial", "way", 387032142, "a cabeceira do Prado de Balboa, ao pe da escadaria do Administration Building"),
    ("balboa-estadio", "Balboa", "way", 1312270821, "Estadio de Balboa: dentro da cidade de Balboa (o Prado); ponto de referencia da CIDADE, nao do distrito"),
    ("la-boca-hoje", "La Boca", "node", 7785928698, "place=neighbourhood de hoje; a La Boca de 1914-1958 ficava junto as docas"),
    ("instituto-nacional", "National Institute", "way", 834036097, "amenity=school (centro do terreno)"),
    ("puente-de-las-americas", "the bridge over the canal", "way", 745707421, "man_made=bridge (centro); aberta em 1962 como Thatcher Ferry Bridge"),
    ("paraiso-hoje", "Paraíso", "node", 5866636842, "place=hamlet"),
    ("pedro-miguel-hoje", "Pedro Miguel", "node", 5886417249, "place=hamlet"),
    ("diablo-heights-hoje", "Diablo Heights", "node", 860712026, "place=neighbourhood"),
    ("ciudad-del-saber", "Fort Clayton", "node", 2348063411, "Ciudad del Saber, a antiga Fort Clayton"),
    ("albrook-aeroporto", "Albrook", "way", 179213554, "aeroporto Marcos A. Gelabert, a antiga Albrook Field"),
    ("plaza-5-de-mayo", "Plaza 5 de Mayo", "way", 305900411, "a praca da antiga estacao da ferrovia, do lado panamenho"),
    ("esclusas-miraflores", "Miraflores Locks", "relation", 11382234, "multipolygon (centro)"),
    ("esclusas-pedro-miguel", "Pedro Miguel Locks", "relation", 11382235, "multipolygon (centro)"),
    ("esclusas-gatun", "Gatún Locks", "relation", 12228856, "multipolygon (centro)"),
]
feats = []
for slug, rot, tp, i, nota in ESCOLHA:
    e = idx.get((tp, i))
    if not e: print("faltou", slug); continue
    c = e.get("center") or {"lat": e["lat"], "lon": e["lon"]}
    feats.append({"type": "Feature", "properties": {"name": e["tags"].get("name"), "name_pt": rot, "rotulo": rot, "slug": slug, "osm": f"{tp}/{i}", "nota": nota},
                  "geometry": {"type": "Point", "coordinates": [round(c["lon"], 7), round(c["lat"], 7)]}})
json.dump({"type": "FeatureCollection", "features": feats}, open(B + "fc-pontos-osm.json", "w"), ensure_ascii=False)
print("pontos osm", len(feats))
# lugares AMS: so os que a mancha resolveu sem duvida
lug = json.load(open(B + "fc-lugares-ams1947.json"))
manter = {"gatun-1947", "fort-davis-1947", "margarita-1947", "fort-sherman-1947", "silver-city-1947", "red-tank-1947", "pedro-miguel-1947", "paraiso-1947", "fort-clayton-1947", "albrook-field-1947", "fort-amador-1947"}
lug["features"] = [f for f in lug["features"] if f["properties"]["slug"] in manter]
json.dump(lug, open(B + "fc-lugares-1947.json", "w")); print("lugares 1947", len(lug["features"]))
