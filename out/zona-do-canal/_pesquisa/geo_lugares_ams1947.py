"""Pontos de 1947 lidos na folha AMS: para cada lugar, o centroide da mancha amarela (area construida, como a folha pinta)
mais proxima do rotulo; e o poligono de Colon (a terra ao norte da linha de Colon, na ilha de Manzanillo).
O rotulo so escolhe QUAL mancha; o ponto e o centroide da mancha da folha."""
import sys, json, cv2, numpy as np
sys.path.insert(0, r"C:/projetos/alpha-point/out/zona-do-canal/_pesquisa")
from geo_ams1947 import Folha
B = r"C:/projetos/alpha-point/out/zona-do-canal/_tmp/pesquisa-geo/"
F = Folha(B + "linhas-graticula.json")
img = cv2.imread(B + "baixado/ams1947/ams1947.jpg").astype(np.int16)
b, g, r = img[..., 0], img[..., 1], img[..., 2]
amarelo = ((r > 170) & (g > 150) & (b < 110) & (r - b > 90)).astype(np.uint8)
amarelo = cv2.morphologyEx(amarelo, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
n, lab, st, cen = cv2.connectedComponentsWithStats(amarelo, 8)
i8 = lambda u, v: (900 + u/0.33, 100 + v/0.33); i12 = lambda u, v: (2650 + u/0.9, 500 + v/0.9)
i2 = lambda u, v: (6678 + u/0.9, 5102 + v/0.9)
LUGARES = {"gatun-1947": ("Gatun", i8(630, 600)), "fort-davis-1947": ("Fort Davis", i8(690, 520)), "margarita-1947": ("Margarita", i8(750, 365)),
           "coco-solo-1947": ("Coco Solo", i8(850, 250)), "fort-sherman-1947": ("Fort Sherman", i8(490, 200)),
           "silver-city-1947": ("Silver City", i12(425, 430)), "cristobal-1947": ("Cristobal", i12(370, 350)),
           "red-tank-1947": ("Red Tank", i2(220, 205)), "pedro-miguel-1947": ("Pedro Miguel", i2(120, 140)), "paraiso-1947": ("Paraiso", i2(15, 60)),
           "fort-clayton-1947": ("Fort Clayton", i2(450, 375)), "albrook-field-1947": ("Albrook Field", i2(740, 665)), "fort-amador-1947": ("Fort Amador", i2(880, 1120)),
           "la-boca-1947": ("La Boca", i2(760, 1070)), "balboa-1947": ("Balboa", i2(600, 870)), "ancon-1947": ("Ancon", i2(950, 820)), "gamboa-1947": ("Gamboa", None)}
feats = []
for slug, (nome, p) in LUGARES.items():
    if p is None: continue
    x, y = p
    win = lab[int(y)-120:int(y)+121, int(x)-120:int(x)+121]
    ids = [i for i in np.unique(win) if i > 0 and st[i, cv2.CC_STAT_AREA] > 80]
    if not ids: print("sem mancha:", nome); continue
    best = min(ids, key=lambda i: np.hypot(cen[i][0]-x, cen[i][1]-y))
    cx, cy = cen[best]; area = st[best, cv2.CC_STAT_AREA]
    lon, lat = F.px2ll(cx, cy)
    feats.append({"type": "Feature", "properties": {"name": nome, "name_pt": nome, "rotulo": nome, "slug": slug, "ano": 1947,
                  "metodo": "centroide da mancha amarela (area construida) da folha AMS 1947", "mancha_px": int(area),
                  "dist_rotulo_px": round(float(np.hypot(cx-x, cy-y)))}, "geometry": {"type": "Point", "coordinates": [round(lon, 6), round(lat, 6)]}})
    print(f"{nome:14s} {lat:.5f} {lon:.5f} mancha {area} px, a {np.hypot(cx-x, cy-y):.0f} px do rotulo")
json.dump({"type": "FeatureCollection", "features": feats}, open(B + "fc-lugares-ams1947.json", "w"))
# Colon: a terra fora da Zona ao norte da linha de Colon
t = np.load(B + "terra-dbg.npy")
n2, lab2 = cv2.connectedComponents(t, connectivity=4)
k = lab2[770, 2830]
m = (lab2 == k).astype(np.uint8)
print("colon comp", k, "px", int(m.sum()))
cs, _ = cv2.findContours(m, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
c = max(cs, key=cv2.contourArea)
s = cv2.approxPolyDP(c, 2.0, True)[:, 0, :].tolist(); s.append(s[0])
ring = [[round(v, 6) for v in F.px2ll(x, y)] for x, y in s]
json.dump({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"name": "Colon", "name_pt": "Colon", "rotulo": "Colón", "ano": 1947,
          "metodo": "terra ao norte da linha de Colon na folha AMS 1947 (fora da Zona), cercada pela agua da folha"},
          "geometry": {"type": "Polygon", "coordinates": [ring]}}]}, open(B + "fc-colon-1947.json", "w"))
x0, y0, w, h = cv2.boundingRect(c); print("colon bbox px", x0, y0, w, h, "vertices", len(ring))
