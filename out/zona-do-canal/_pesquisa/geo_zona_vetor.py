"""Vetoriza o resultado de geo_zona_ams1947.py: o poligono da Zona (terra + lagos), as linhas da divisa (a tinta da
folha) e a linha da Cidade do Panama; converte pixel -> lon/lat pela graticula da folha (geo_ams1947.Folha).
uso: python -I geo_zona_vetor.py <pasta _tmp/pesquisa-geo> <saida-dir>"""
import sys, json, cv2, numpy as np, math
sys.path.insert(0, r"C:/projetos/alpha-point/out/zona-do-canal/_pesquisa")
from geo_ams1947 import Folha
B = sys.argv[1].rstrip("/") + "/"; OUT = sys.argv[2].rstrip("/") + "/"
F = Folha(B + "linhas-graticula.json")
def dp(P, tol):
    if len(P) < 3: return P
    a, b = np.array(P[0]), np.array(P[-1]); ab = b - a; L = np.hypot(*ab)
    P_ = np.array(P)
    d = np.abs(np.cross(ab, P_ - a)) / L if L > 0 else np.hypot(*(P_ - a).T)
    i = int(np.argmax(d))
    if d[i] <= tol: return [P[0], P[-1]]
    return dp(P[:i+1], tol)[:-1] + dp(P[i:], tol)
def anel_ll(px, tol):
    s = cv2.approxPolyDP(np.array(px, np.int32).reshape(-1, 1, 2), tol, True)[:, 0, :].tolist()
    if len(s) < 3: return None
    s.append(s[0])
    return [[round(c, 6) for c in F.px2ll(x, y)] for x, y in s]
z = (cv2.imread(B + "zona-mask.png", 0) > 0).astype(np.uint8)
cs, hier = cv2.findContours(z, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
TOL = float(sys.argv[3]) if len(sys.argv) > 3 else 2.0
polis = []
for k, c in enumerate(cs):
    if hier[0][k][3] != -1: continue
    if cv2.contourArea(c) < 2000: continue          # migalhas (< ~0,14 km2)
    ext = anel_ll(c[:, 0, :].tolist(), TOL)
    if not ext: continue
    furos = []
    ch = hier[0][k][2]
    while ch != -1:
        if cv2.contourArea(cs[ch]) >= 2000:
            f = anel_ll(cs[ch][:, 0, :].tolist(), TOL)
            if f: furos.append(f)
        ch = hier[0][ch][0]
    polis.append([ext] + furos)
nv = sum(len(r) for p in polis for r in p)
print("partes", len(polis), "vertices", nv)
zona = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {
    "name": "Panama Canal Zone", "name_pt": "Panama Canal Zone", "rotulo": "Panama Canal Zone",
    "data_do_tracado": "1947", "fonte_folha": "U.S. Army Map Service, Canal Zone and Vicinity, 1:100,000 (1947); LOC 83694755",
    "o_que_inclui": "terra dentro da divisa + lagos Gatun e Madden como a folha os pinta (nivel normal); sem o mar de 3 milhas e sem as ilhas do Pacifico",
    "tolerancia_px": TOL},
    "geometry": {"type": "MultiPolygon", "coordinates": polis}}]}
json.dump(zona, open(OUT + "fc-zona-ams1947.json", "w"))
# linhas da divisa
T = json.load(open(B + "zona-tracado.json"))
feats = []
for nome, cad in T["linhas_px"].items():
    ll = [[round(c, 6) for c in F.px2ll(x, y)] for x, y in cad]
    feats.append({"type": "Feature", "properties": {"trecho": nome, "fonte": "tinta da folha AMS 1947"}, "geometry": {"type": "LineString", "coordinates": ll}})
json.dump({"type": "FeatureCollection", "features": feats}, open(OUT + "fc-divisa-ams1947.json", "w"))
# a linha da Cidade do Panama: o trecho E-leste de Curundu (y >= 5640) ate La Boca, mais o primeiro trecho do mar
cad = [p for p in T["linhas_px"]["E-leste"] if p[1] >= 5640]
ll = [[round(c, 6) for c in F.px2ll(x, y)] for x, y in cad]
L = sum(math.hypot((b[0]-a[0])*111320*math.cos(math.radians(9)), (b[1]-a[1])*110600) for a, b in zip(ll, ll[1:]))
json.dump({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"name": "Canal Zone boundary (Panama City)", "name_pt": "the line",
    "rotulo": "the line", "data_do_tracado": "1947", "comprimento_m": round(L)}, "geometry": {"type": "LineString", "coordinates": ll}}]}, open(OUT + "fc-linha-panama-ams1947.json", "w"))
print("linha panama", len(ll), "pontos", round(L), "m")
