"""A linha entre a Cidade do Panama e a Zona, lida na folha 'Road Map of Ancon, Balboa and Panama' (out/1936, 1:8.000),
corrigida pelo deslocamento medido contra o OSM (geo_road1936_deslocamento.py). Os pontos foram lidos na folha, em
recortes com grade (v-1936-a e v-1936-b), sobre a linha desenhada: o tracejado 'CANAL ZONE / REPUBLIC OF PANAMA' que vem do
mar por Chorrillo, a 4th of July Avenue ('BOUNDARY OF PANAMA ... 4TH OF JULY AVE ... LINE'), a avenida que sobe para o
norte ate a Avenida Nacional, o traco-ponto ate o Rio Curundu e o tracejado do rio. Erro de leitura: ~12 px (~10 m)."""
import sys, json, numpy as np, math
sys.path.insert(0, r"C:/projetos/alpha-point/out/zona-do-canal/_pesquisa")
from geo_road1936 import Folha1936
B = r"C:/projetos/alpha-point/out/zona-do-canal/_tmp/pesquisa-geo/"
F = Folha1936(); T = np.array(json.load(open(B + "deslocamento-1936.json"))["T_px"])
a = lambda pts: [(1600 + u/0.42, 1100 + v/0.42) for u, v in pts]
b = lambda pts: [(3300 + u/0.42, 200 + v/0.42) for u, v in pts]
MAR = a([(135, 700), (400, 548)])
AVENIDA = a([(400, 548), (470, 545), (560, 527), (660, 505), (760, 482), (850, 463)]) + b([(130, 835), (250, 815), (300, 842)])
NORTE = b([(318, 830), (318, 560), (310, 300)])
RIO = b([(320, 300), (350, 285), (390, 270), (410, 255), (440, 225), (460, 215), (480, 240), (520, 275), (580, 290), (640, 300), (680, 350), (700, 360), (740, 330), (800, 320), (830, 290), (860, 280), (880, 300)])
def ll(pts): return [[round(c, 6) for c in F.px2ll(x - T[0], y - T[1])] for x, y in pts]
def comp(c): return sum(math.hypot((q[0]-p[0])*111320*math.cos(math.radians(8.96)), (q[1]-p[1])*110600) for p, q in zip(c, c[1:]))
linha = ll(MAR + AVENIDA[1:] + NORTE[1:] + RIO[1:])
av = ll(AVENIDA)
meta = {"data_do_tracado": "1936 (folha de out/1936, baseada no mapa de 1927 do Panama Canal)", "folha": "Road Map of Ancon, Balboa and Panama, 1:8000, NARA 192812325"}
json.dump({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": dict(meta, name="Canal Zone boundary (Panama City)", name_pt="the line", rotulo="the line", comprimento_m=round(comp(linha)),
          trechos="mar por Chorrillo -> 4th of July Ave -> avenida ao norte -> Rio Curundu"), "geometry": {"type": "LineString", "coordinates": linha}}]}, open(B + "fc-linha-1914-panama.json", "w"))
json.dump({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": dict(meta, name="Fourth of July Avenue", name_pt="Fourth of July Avenue", rotulo="Fourth of July Avenue",
          comprimento_m=round(comp(av)), hoje="Avenida de los Martires"), "geometry": {"type": "LineString", "coordinates": av}}]}, open(B + "fc-fourth-of-july-ave-1936.json", "w"))
print("linha", len(linha), "pts", round(comp(linha)), "m; avenida", round(comp(av)), "m")
# conferencia de lado: quem tem de ficar do lado da Zona e quem do lado do Panama (pelo OSM de hoje)
from shapely.geometry import LineString, Point
L = LineString(linha)
def lado(lon, lat):
    p = Point(lon, lat); d = L.project(p); q = L.interpolate(d); q2 = L.interpolate(min(d + 1e-5, L.length))
    cr = (q2.x - q.x)*(lat - q.y) - (q2.y - q.y)*(lon - q.x)
    return ("esquerda" if cr > 0 else "direita"), round(p.distance(q)*110000)
for nome, (lo, la) in {"Edificio de la Administracion (Zona)": (-79.554833, 8.95968), "Cerro Ancon (Zona)": (-79.549201, 8.957648),
                       "Instituto Oncologico/Gorgas (Zona)": (-79.545587, 8.959857), "Instituto Nacional (Panama)": (-79.543155, 8.957579),
                       "Plaza 5 de Mayo (Panama)": (-79.540618, 8.961398), "Calidonia junta (Panama)": (-79.536962, 8.97319)}.items():
    print(f"  {nome:40s}", *lado(lo, la), "m da linha")
