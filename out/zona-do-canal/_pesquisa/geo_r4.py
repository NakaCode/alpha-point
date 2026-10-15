"""4a rodada (pesquisa-4): (1) lugares-1936 refeita: as 5 leituras da 2a rodada + o Hotel Tivoli, o Ancon Clubhouse e o
rotulo da cidade de Ancon, lidos na folha 'Road Map of Ancon, Balboa and Panama' (out/1936; NARA 192812325) com a
georreferencia da 1a rodada (gratícula + translacao de 346 m). Recortes: _tmp/pesquisa-geo/r4/v1936-*.jpg.
(2) balboa-high-school: o contorno do OSM way/609527463 ('Centro de Capacitacion Ascanio Arosemena', o predio da antiga
Balboa High School, pela La Prensa) e o seu centro; conferido contra a coordenada da Wikipedia.
uso: python -I geo_r4.py   (le os dumps r4 do Overpass; grava em _tmp/pesquisa-geo/r4/)"""
import sys, json, math, numpy as np
sys.path.insert(0, r"C:/projetos/alpha-point/out/zona-do-canal/_pesquisa")
from geo_road1936 import Folha1936
B = r"C:/projetos/alpha-point/out/zona-do-canal/_tmp/pesquisa-geo/"
G = r"C:/projetos/alpha-point/out/zona-do-canal/_media/geo/"
F = Folha1936(); T = np.array(json.load(open(B + "deslocamento-1936.json"))["T_px"])
def ll(x, y): lo, la = F.px2ll(x - T[0], y - T[1]); return [round(lo, 6), round(la, 6)]
MX, MY = 111320 * math.cos(math.radians(8.96)), 110600
def d(a, b): return math.hypot((a[0]-b[0])*MX, (a[1]-b[1])*MY)
base = dict(fonte_folha="Road Map of Ancon, Balboa and Panama, 1:8000, out/1936 (NARA 192812325)", data_do_tracado="1936")
fc = json.load(open(G + "lugares-1936.json", encoding="utf-8"))
assert len(fc["features"]) == 5
NOVOS = [
  ("tivoli-hotel-1936", "Tivoli Hotel", (3920, 1799), "o predio grande em cruz rotulado 'Tivoli Hotel' (ponto no meio do predio). O Shaler Triangle ficava 'frente al Hotel Tivoli', do lado da Zona, no limite com o Parque de Lesseps (La Prensa, 13/09/2026); a folha de 1936 nao rotula o triangulo, que tomou a forma depois de 1942", "+-40 m tipica (ate 90 m) + leitura do predio ~15 m"),
  ("ancon-clubhouse-1936", "Ancon Clubhouse", (3614, 1914), "o predio apontado pela seta do rotulo 'Ancon Clubhouse' (Frangipani St.). Se e o mesmo predio do clube 'gold' de Ancon de 1920, a folha nao diz", "+-40 m tipica (ate 90 m) + leitura do predio ~10 m"),
  ("ancon-1936", "Ancon", (3497, 1613), "o centro do rotulo grande 'A N C O N' da cidade (entre o Gorgas Hospital e o Ancon Boulevard, na encosta leste do Cerro Ancon). E onde a folha escreve o nome da cidade, nao um centro medido; a cidade se espalha da encosta ao Tivoli", "+-40-90 m (georreferencia); como 'centro da cidade', ~300 m"),
]
for s, n, px, nota, inc in NOVOS:
    fc["features"].append({"type": "Feature", "properties": dict(base, name=n, name_pt=n, rotulo=n, slug=s, px_folha=list(px), nota=nota, incerteza=inc),
                           "geometry": {"type": "Point", "coordinates": ll(*px)}})
json.dump(fc, open(B + "r4/fc-lugares-1936.json", "w", encoding="utf-8"), ensure_ascii=False)
# (2) Balboa High School, OSM
j = json.load(open(B + "dumps/r4-osm-geom-bhs-shaler.json", encoding="utf-8"))
w = [e for e in j["elements"] if e["type"] == "way" and e["id"] == 609527463][0]
anel = [[round(p["lon"], 7), round(p["lat"], 7)] for p in w["geometry"]]
assert anel[0] == anel[-1]
# centroide de area
A = cx = cy = 0.0
for (x0, y0), (x1, y1) in zip(anel, anel[1:]):
    c = x0*y1 - x1*y0; A += c; cx += (x0+x1)*c; cy += (y0+y1)*c
A /= 2; cen = [round(cx/(6*A), 7), round(cy/(6*A), 7)]
nota = ("o predio da antiga Balboa High School, hoje 'Centro de Capacitacion Ascanio Arosemena' da ACP (OSM way/609527463, "
        "name='%s'); a identidade pela La Prensa ('Muros con memoria, centinelas del Canal') e pela Wikipedia (HABS: 'Northeast end of El Prado')" % w["tags"].get("name"))
props = dict(name="Balboa High School", name_pt="Balboa High School", rotulo="Balboa High School", osm="way/609527463", nota=nota,
             data_do_tracado="OSM de 15/10/2026 (o predio de hoje; a escola ocupou o predio de 1942 a 1999, com acrescimos de 1948, 1949, 1963 e 1969)",
             incerteza="contorno do OSM (poucos metros); o predio de 1964 pode diferir do contorno de hoje pelos acrescimos")
bhs = {"type": "FeatureCollection", "features": [
    {"type": "Feature", "properties": dict(props, slug="balboa-high-school", geometria="centro do contorno"), "geometry": {"type": "Point", "coordinates": cen}},
    {"type": "Feature", "properties": dict(props, slug="balboa-high-school-predio", geometria="contorno do predio"), "geometry": {"type": "Polygon", "coordinates": [anel]}}]}
json.dump(bhs, open(B + "r4/fc-balboa-high-school.json", "w", encoding="utf-8"), ensure_ascii=False)
print("conferencias:")
print("  Tivoli Hotel (folha 1936) x 'Tivoli BLDG' do STRI (OSM way/1112176494): %.0f m" % d(ll(3920, 1799), [-79.54335, 8.96256]))
print("  Parque de Lesseps (folha 1936, px 3950,2050) x Palacio Justo Arosemena (OSM way/605386930): %.0f m" % d(ll(3950, 2050), [-79.542288, 8.962143]))
print("  Ancon (rotulo 1936) x Cerro Ancon (OSM): %.0f m; x place=quarter 'Ancon' do OSM de hoje: %.0f m" % (d(ll(3497, 1613), [-79.5492008, 8.9576485]), d(ll(3497, 1613), [-79.555181, 8.954429])))
print("  BHS centro OSM %s x Wikipedia (8.9589861, -79.5573528): %.0f m" % (cen, d(cen, [-79.5573528, 8.9589861])))
print("  BHS x Goethals Memorial (OSM): %.0f m; x linha-1914-panama: ver relato" % d(cen, [-79.5556902, 8.9584961]))
for f in fc["features"][5:]: print(" ", f["properties"]["slug"], f["geometry"]["coordinates"])
