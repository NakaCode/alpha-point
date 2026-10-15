"""2a rodada (pesquisa-2): lugares lidos na folha 'Road Map of Ancon, Balboa and Panama' (out/1936; NARA 192812325), com a
georreferencia da 1a rodada (geo_road1936.Folha1936 + a translacao de 346 m medida contra o OSM, deslocamento-1936.json).
Pixels lidos nos recortes com grade da 2a rodada (r2/v1936-balboa, v1936-prado, v1936-laboca, v1936-shaler).
Conferencia independente: a arquibancada (Grandstand) da folha contra o Estadio de Balboa do OSM; La Boca de 1936 contra
o no 'La Boca' do OSM de hoje.
uso: python geo_r2_lugares1936.py"""
import sys, json, math, numpy as np
sys.path.insert(0, r"C:/projetos/alpha-point/out/zona-do-canal/_pesquisa")
from geo_road1936 import Folha1936
B = r"C:/projetos/alpha-point/out/zona-do-canal/_tmp/pesquisa-geo/"
F = Folha1936(); T = np.array(json.load(open(B + "deslocamento-1936.json"))["T_px"])
def ll(x, y): lo, la = F.px2ll(x - T[0], y - T[1]); return [round(lo, 6), round(la, 6)]
MX, MY = 111320 * math.cos(math.radians(8.955)), 110600
def d(a, b): return math.hypot((a[0]-b[0])*MX, (a[1]-b[1])*MY)
base = dict(fonte_folha="Road Map of Ancon, Balboa and Panama, 1:8000, out/1936 (NARA 192812325)", data_do_tracado="1936")
P = [("balboa-commissary-1936", "Balboa Commissary", (1887, 1172), "o predio ao lado do rotulo 'Balboa Commissary' (bloco sul dos dois predios a oeste do circulo do Prado); o bloco norte, a ~95 m, pode ser parte do mesmo conjunto: leitura duvidosa"),
     ("balboa-clubhouse-1936", "Balboa Clubhouse", (1838, 1240), "o predio junto ao rotulo 'Balboa Clubhouse', na ponta oeste do Prado"),
     ("la-boca-1936", "La Boca", (800, 1640), "o centro da grade de ruas de La Boca (Martinique, Barbados, Jamaica, Thomas, Trinidad, Domingo St.)"),
     ("la-boca-school-1936", "La Boca School", (700, 1945), "o predio rotulado 'La Boca School'")]
feats = [{"type": "Feature", "properties": dict(base, name=n, name_pt=n, rotulo=n, slug=s, px_folha=list(px), nota=nota,
          incerteza="georreferencia da folha +-40 m tipica (ate 90 m) + leitura do predio ~10 m"), "geometry": {"type": "Point", "coordinates": ll(*px)}}
         for s, n, px, nota in P]
# La Boca de 1936: o contorno da grade, pelos cruzamentos das ruas externas desenhadas (lidos no recorte v1936-laboca)
RUAS = [(700, 1415), (1010, 1530), (1000, 1600), (930, 1830), (720, 1790), (605, 1790), (595, 1690), (650, 1600), (700, 1415)]
feats.append({"type": "Feature", "properties": dict(base, name="La Boca (1936 town grid)", name_pt="La Boca", rotulo="La Boca", slug="la-boca-1936-area",
              nota="contorno pelas ruas externas desenhadas (La Boca Rd ao norte, Trinidad a leste, Domingo St ao sul, Martinique a oeste); vertices nos cruzamentos lidos, nao desenho livre",
              incerteza="+-40-90 m (georreferencia) + ~15 m (leitura do cruzamento)"),
              "geometry": {"type": "Polygon", "coordinates": [[ll(*p) for p in RUAS]]}})
json.dump({"type": "FeatureCollection", "features": feats}, open(B + "r2/fc-lugares-1936.json", "w"))
print("conferencias:")
print("  Grandstand (folha) x Estadio de Balboa (OSM way/1312270821): %.0f m" % d(ll(1955, 1085), [-79.5588894, 8.9572619]))
print("  La Boca 1936 (centro da grade) x no 'La Boca' de hoje (OSM node/7785928698): %.0f m" % d(ll(800, 1640), [-79.5613004, 8.9481123]))
print("  Balboa Clubhouse x Teatro Balboa (OSM, vizinho de hoje): %.0f m" % d(ll(1838, 1240), [-79.558709, 8.95549]))
for f in feats: print(" ", f["properties"]["slug"], f["geometry"]["coordinates"] if f["geometry"]["type"] == "Point" else "poligono")
