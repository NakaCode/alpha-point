"""2a rodada (pesquisa-2): OPCAO (c), AGUARDA O LUCAS. A area construida (o amarelo) da folha AMS 1947 para a Cidade do
Panama e para Colon, fora da Zona (a mascara da Zona da 2a rodada). Nenhuma cena cita estas camadas ate a decisao.
- Cidade do Panama: o amarelo a leste/sul da linha, nas manchas com centro a ate 3 km da Plaza 5 de Mayo (OSM).
  Herda o deslocamento da folha na cidade (200-530 m contra a folha de 1936; relato da 1a rodada).
- Colon: o amarelo da ilha de Manzanillo ao NORTE da linha H-colon desenhada; inclui New Cristobal, que a folha nao separa.
uso: python geo_r2_opcao_c.py <zona-mask.png da 2a rodada> <zona-tracado.json>"""
import sys, json, math, cv2, numpy as np
sys.path.insert(0, r"C:/projetos/alpha-point/out/zona-do-canal/_pesquisa")
from geo_ams1947 import Folha
RAIZ = r"C:/projetos/alpha-point/out/zona-do-canal/_tmp/pesquisa-geo/"
F = Folha(RAIZ + "linhas-graticula.json")
img = cv2.imread(RAIZ + "baixado/ams1947/ams1947.jpg")
zona = cv2.imread(sys.argv[1], 0) > 0
H_colon = np.array(json.load(open(sys.argv[2]))["linhas_px"]["H-colon"], float)
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
amarelo = ((hsv[..., 0] >= 18) & (hsv[..., 0] <= 34) & (hsv[..., 1] >= 110) & (hsv[..., 2] >= 150)) & ~zona
amarelo = amarelo.astype(np.uint8)
COS = math.cos(math.radians(9)); MX, MY = 111320*COS, 110600
def ll(x, y): lo, la = F.px2ll(float(x), float(y)); return [round(lo, 6), round(la, 6)]
def poligonos(mask, x0, y0, filtro):
    m = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, np.ones((11, 11), np.uint8))
    cs, hier = cv2.findContours(m, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE); out = []
    for k, c in enumerate(cs):
        if hier[0][k][3] != -1 or cv2.contourArea(c) < 1500: continue
        M_ = cv2.moments(c); cx, cy = M_["m10"]/M_["m00"] + x0, M_["m01"]/M_["m00"] + y0
        if not filtro(cx, cy): continue
        s = cv2.approxPolyDP(c, 2.0, True)[:, 0, :].tolist(); s.append(s[0])
        out.append([[ll(x + x0, y + y0) for x, y in s]])
    return out
def area_km2(polys):
    a = 0
    for p in polys:
        r = np.array(p[0]); x, y = r[:, 0]*MX, r[:, 1]*MY; a += abs(np.dot(x, np.roll(y, 1)) - np.dot(y, np.roll(x, 1)))/2
    return a/1e6
AVISO = "OPCAO (c), AGUARDA O LUCAS: nenhuma cena cita esta camada ate a decisao"
# Cidade do Panama
p5 = F.ll2px(-79.5406181, 8.9613977)
xs, ys = [F.ll2px(lo, la) for lo, la in [(-79.575, 8.935), (-79.50, 9.0)]], None
(xa, ya), (xb, yb) = xs; x0, x1 = int(min(xa, xb)), int(max(xa, xb)); y0, y1 = int(min(ya, yb)), int(max(ya, yb))
def perto(cx, cy): return math.hypot(cx - p5[0], cy - p5[1]) * 8.4 <= 3000
pan = poligonos(amarelo[y0:y1, x0:x1].copy(), x0, y0, perto)
# Colon: a ilha ao norte da linha H-colon
CX0, CY0, CX1, CY1 = 2900, 620, 3170, 960
sub = amarelo[CY0:CY1, CX0:CX1].copy()
xsH = H_colon[np.argsort(H_colon[:, 0]), 0]; ysH = H_colon[np.argsort(H_colon[:, 0]), 1]
for u in range(CX1 - CX0):
    yl = np.interp(CX0 + u, xsH, ysH); sub[max(0, int(yl - CY0) - 3):, u] = 0
col = poligonos(sub, CX0, CY0, lambda cx, cy: True)
props = dict(fonte_folha="U.S. Army Map Service, Canal Zone and Vicinity, 1:100,000 (1947); LOC 83694755", data_do_tracado="1947", opcao="c", aviso=AVISO)
fcp = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": dict(props, name="Panama City (built-up area, 1947)", name_pt="Panama City", rotulo="Panama City",
       area_km2=round(area_km2(pan), 2), metodo="o amarelo (area construida) da folha, fora da Zona, manchas com centro a ate 3 km da Plaza 5 de Mayo",
       incerteza="a folha esta 200-530 m deslocada na cidade (1a rodada); a borda do amarelo e a borda da mancha impressa"),
       "geometry": {"type": "MultiPolygon", "coordinates": pan}}]}
fcc = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": dict(props, name="Colón (built-up area, 1947)", name_pt="Colón", rotulo="Colón",
       area_km2=round(area_km2(col), 2), metodo="o amarelo da ilha de Manzanillo ao norte da linha de Colon desenhada (corredor H-colon)",
       incerteza="inclui New Cristobal (Zona), que a folha nao separa de Colon; ~100-200 m"),
       "geometry": {"type": "MultiPolygon", "coordinates": col}}]}
json.dump(fcp, open(RAIZ + "r2/fc-opcao-c-cidade-do-panama-1947.json", "w")); json.dump(fcc, open(RAIZ + "r2/fc-opcao-c-colon-1947.json", "w"))
print("Panama: %d manchas, %.2f km2 | Colon: %d manchas, %.2f km2" % (len(pan), area_km2(pan), len(col), area_km2(col)))
