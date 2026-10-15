"""2a rodada (pesquisa-2): acrescenta ao contorno de 1947 a ponta de Cristobal.
Na folha AMS 1947 a ilha de Manzanillo (Colon + Cristobal + New Cristobal) e uma mancha amarela (area construida); os
rotulos COLON e CRISTOBAL ficam sobre a baia de Limon, a oeste. A folha desenha so a linha sul de Colon (os tracos '— —'
do corredor H-colon da 1a rodada), que separa Colon (ao norte) de Cristobal (ao sul, com as docas). A 1a rodada perdeu a
ilha inteira porque o Natural Earth poe a costa de Colon fora dela (o filtro de terra do NE a contava como mar).
Aqui: o amarelo da folha (cor), dentro de uma caixa da ilha, ao SUL da linha H-colon desenhada, vira parte da Zona.
New Cristobal (o nordeste da ilha) NAO entra: a folha nao desenha a linha que a separa de Colon.
Conferencia independente: o Edificio de Administracion de Cristobal e o Puerto de Cristobal (OSM) tem de cair dentro
da peca; o no 'Colon' e Barrio Norte (OSM), fora.
uso: python -I geo_zona_r2_cristobal.py <pasta com zona-mask.png da 1a rodada e zona-tracado.json> <saida zona-mask.png>"""
import sys, json, cv2, numpy as np
sys.path.insert(0, r"C:/projetos/alpha-point/out/zona-do-canal/_pesquisa")
from geo_ams1947 import Folha
B = sys.argv[1].rstrip("/") + "/"; SAIDA = sys.argv[2]
RAIZ = r"C:/projetos/alpha-point/out/zona-do-canal/_tmp/pesquisa-geo/"
img = cv2.imread(RAIZ + "baixado/ams1947/ams1947.jpg")
F = Folha(RAIZ + "linhas-graticula.json")
zona = (cv2.imread(B + "zona-mask.png", 0) > 0).astype(np.uint8)
linha = np.array(json.load(open(B + "zona-tracado.json"))["linhas_px"]["H-colon"], float)
CX0, CY0, CX1, CY1 = 2850, 800, 3075, 960            # a ilha de Manzanillo ao sul da linha de Colon (lida no recorte v1947-colon-osm)
hsv = cv2.cvtColor(img[CY0:CY1, CX0:CX1], cv2.COLOR_BGR2HSV)
amarelo = ((hsv[..., 0] >= 18) & (hsv[..., 0] <= 34) & (hsv[..., 1] >= 110) & (hsv[..., 2] >= 150)).astype(np.uint8)
# ao sul da linha: para cada coluna, y > y_da_linha(x) (interpolado na polilinha desenhada; fora dela, a ponta mais proxima)
xs = linha[:, 0]; ordem = np.argsort(xs); xs = xs[ordem]; ys = linha[ordem, 1]
sul = np.zeros_like(amarelo)
for u in range(CX1 - CX0):
    yl = np.interp(CX0 + u, xs, ys)
    sul[max(0, int(np.ceil(yl - CY0)) + 3):, u] = 1
peca = amarelo & sul
peca = cv2.morphologyEx(peca, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
n, lab, st, _ = cv2.connectedComponentsWithStats(peca, connectivity=8)
manter = [i for i in range(1, n) if st[i, cv2.CC_STAT_AREA] >= 300]
peca = np.isin(lab, manter).astype(np.uint8)
cheia = np.zeros_like(zona); cheia[CY0:CY1, CX0:CX1] = peca
antes = int(zona.sum()); zona2 = (zona | cheia).astype(np.uint8)
zona2 = cv2.morphologyEx(zona2, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
cv2.imwrite(SAIDA, zona2 * 255)
# area da peca
x, y = 2960, 880; l0, a0 = F.px2ll(x, y); l1, a1 = F.px2ll(x + 1, y); l2, a2 = F.px2ll(x, y + 1)
m2px = abs((l1 - l0) * 111320 * np.cos(np.radians(a0)) * (a2 - a0) * 110600 - (a1 - a0) * 110600 * (l2 - l0) * 111320 * np.cos(np.radians(a0)))
print("peca de Cristobal: %d px = %.2f km2 = %.3f mi2; componentes %d" % (int(peca.sum()), peca.sum() * m2px / 1e6, peca.sum() * m2px / 2589988.11, len(manter)))
for nome, (lo, la), esperado in [("Edificio de Administracion de Cristobal (OSM)", (-79.90457, 9.35328), 1), ("Puerto de Cristobal (OSM)", (-79.90715, 9.35041), 1),
                                 ("Colon, no place=city (OSM)", (-79.89741, 9.3553), 0), ("Barrio Norte (OSM)", (-79.90025, 9.36194), 0), ("Barrio Sur (OSM, centro)", (-79.89686, 9.35306), 0)]:
    px, py = F.ll2px(lo, la); px, py = int(round(px)), int(round(py))
    d = cv2.distanceTransform((1 - zona2[py-150:py+151, px-150:px+151]).astype(np.uint8), cv2.DIST_L2, 5)[150, 150] if zona2[py, px] == 0 else 0.0
    print(f"  {nome:48s} dentro={int(zona2[py, px])} (esperado {esperado}); distancia a Zona {d*8.4:.0f} m")
