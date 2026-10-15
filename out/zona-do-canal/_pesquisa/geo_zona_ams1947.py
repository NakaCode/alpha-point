"""O contorno da Zona do Canal (terra + lagos Gatun e Madden), tracado da folha AMS 'Canal Zone and Vicinity' (1947, 1:100.000).
Nada se desenha a mao: a divisa e a tinta preta '— · —' da propria folha (tracos achados por componente conexo, escolhidos
por corredores lidos no olho e ligados na ordem), a agua e a cor de agua da folha, e o resultado e o que fica cercado por
essas duas coisas. Os pontos de passagem (CORREDORES) so escolhem QUAIS tracos sao a divisa; nenhum vertice sai deles,
exceto as pontas que levam a linha ate a agua (declaradas).
uso: python -I geo_zona_ams1947.py <pasta _tmp/pesquisa-geo>"""
import sys, json, cv2, numpy as np
sys.path.insert(0, r"C:/projetos/alpha-point/out/zona-do-canal/_pesquisa")
from geo_ams1947 import Folha
B = sys.argv[1].rstrip("/") + "/"
img = cv2.imread(B + "baixado/ams1947/ams1947.jpg")
H, W = img.shape[:2]
F = Folha(B + "linhas-graticula.json")
T = json.load(open(B + "tracos.json"))
CORR = json.load(open(B + "corredores.json"))
def dist_poli(p, poli):
    best = (1e9, 0)
    acc = 0
    for (x0, y0), (x1, y1) in zip(poli, poli[1:]):
        vx, vy = x1-x0, y1-y0; L2 = vx*vx+vy*vy; t = max(0, min(1, ((p[0]-x0)*vx+(p[1]-y0)*vy)/L2))
        d = np.hypot(p[0]-x0-t*vx, p[1]-y0-t*vy)
        if d < best[0]: best = (d, acc + t*np.sqrt(L2))
        acc += np.sqrt(L2)
    return best
barreira = np.zeros((H, W), np.uint8)
PONTAS_LAGO = []
linhas_px = {}
relato = {}
for nome, c in CORR.items():
    poli = c["pontos"]; R = c.get("R", 70)
    sel = []
    for cx, cy, L, Wd, e1, e2 in T:
        d, s = dist_poli((cx, cy), poli)
        if d <= R:
            s1 = dist_poli(e1, poli)[1]; s2 = dist_poli(e2, poli)[1]
            a, b = (e1, e2) if s1 <= s2 else (e2, e1)
            sel.append((s, a, b))
    sel.sort(key=lambda t: t[0])
    cadeia = []
    if c.get("inicio_livre"): cadeia.append(tuple(poli[0]))
    for s, a, b in sel: cadeia += [tuple(a), tuple(b)]
    if c.get("fim_livre"): cadeia.append(tuple(poli[-1]))
    # buracos (distancia entre tracos consecutivos)
    gaps = [np.hypot(cadeia[i+1][0]-cadeia[i][0], cadeia[i+1][1]-cadeia[i][1]) for i in range(1, len(cadeia)-1, 2)] if len(cadeia) > 2 else []
    relato[nome] = {"tracos": len(sel), "maior_vao_px": round(max(gaps), 1) if gaps else None,
                    "comprimento_px": round(sum(np.hypot(cadeia[i+1][0]-cadeia[i][0], cadeia[i+1][1]-cadeia[i][1]) for i in range(len(cadeia)-1)), 1)}
    linhas_px[nome] = cadeia
    pts = np.array(cadeia, np.int32)
    cv2.polylines(barreira, [pts], False, 1, 3)
    for ponta in c.get("ate_lago", []):
        PONTAS_LAGO.append(cadeia[-1] if ponta == "fim" else cadeia[0])
    # pontas ate a agua / mar (prolonga na direcao do corredor)
    for ponta in c.get("prolongar", []):
        (x0, y0), (x1, y1) = (cadeia[-2], cadeia[-1]) if ponta == "fim" else (cadeia[1], cadeia[0])
        v = np.array([x1-x0, y1-y0], float); v /= np.linalg.norm(v)
        p2 = (int(x1 + v[0]*c.get("prolongar_px", 250)), int(y1 + v[1]*c.get("prolongar_px", 250)))
        cv2.line(barreira, (int(x1), int(y1)), p2, 1, 3)
CAIXAS = json.load(open(B + "caixas.json")) if __import__("os").path.exists(B + "caixas.json") else []
bb_, gg_, rr_ = [img[..., i].astype(np.int16) for i in range(3)]
mx_ = np.maximum(np.maximum(rr_, gg_), bb_); mn_ = np.minimum(np.minimum(rr_, gg_), bb_)
tinta_ = ((mx_ < 100) & ((mx_ - mn_) < 45)).astype(np.uint8)
for x0, y0, x1, y1, r in CAIXAS:
    t = cv2.dilate(tinta_[y0:y1, x0:x1], cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2*r+1, 2*r+1)))
    barreira[y0:y1, x0:x1] |= t
# cortes de classificacao (separam lago e mar onde um rio largo os liga; nao viram contorno)
for (x0, y0), (x1, y1) in json.load(open(B + "cortes.json")):
    cv2.line(barreira, (x0, y0), (x1, y1), 1, 3)
agua = (cv2.imread(B + __import__("os").environ.get("AGUA", "agua-mask.png"), 0) > 0).astype(np.uint8)
agua[barreira > 0] = 0
n, lab = cv2.connectedComponents(agua, connectivity=4)
SEM = json.load(open(B + "sementes.json"))
lagos = np.isin(lab, [lab[y, x] for x, y in SEM["lagos"] if lab[y, x] > 0]).astype(np.uint8)
mar = np.isin(lab, [lab[y, x] for x, y in SEM["mar"] if lab[y, x] > 0]).astype(np.uint8)
# liga cada ponta marcada ao pixel de agua mais proximo; o corpo d'agua ligado passa a contar como lago (dentro)
if PONTAS_LAGO:
    aguab = (agua > 0).astype(np.uint8)
    dist, rot = cv2.distanceTransformWithLabels(1-aguab, cv2.DIST_L2, 5, labelType=cv2.DIST_LABEL_PIXEL)
    ly, lx = np.nonzero(aguab == 1); rr = rot[aguab == 1]
    idx_por_rot = dict(zip(rr.tolist(), zip(lx.tolist(), ly.tolist())))
    LIGACOES = []; extra = []
    for x, y in PONTAS_LAGO:
        x, y = int(round(x)), int(round(y)); alvo = idx_por_rot.get(int(rot[y, x]))
        if alvo is None or dist[y, x] > 200: LIGACOES.append([[x, y], None, None]); continue
        cv2.line(barreira, (x, y), (int(alvo[0]), int(alvo[1])), 1, 3); LIGACOES.append([[x, y], [int(alvo[0]), int(alvo[1])], round(float(dist[y, x]), 1)])
        extra.append(lab[alvo[1], alvo[0]])
    lagos = (lagos | np.isin(lab, [e for e in extra if e > 0])).astype(np.uint8)
    relato["_ligacoes_ao_lago_px"] = LIGACOES
mar = cv2.morphologyEx(mar, cv2.MORPH_CLOSE, np.ones((25, 25), np.uint8))
ne = json.load(open(r"C:/projetos/alpha-point/out/zona-do-canal/_media/geo/panama-ne.json"))
terra_ne = np.zeros((H, W), np.uint8)
for f in ne["features"]:
    polys = f["geometry"]["coordinates"] if f["geometry"]["type"] == "MultiPolygon" else [f["geometry"]["coordinates"]]
    for pol in polys:
        ring = pol[0]
        if not any(-80.2 < x < -79.2 and 8.7 < y < 9.5 for x, y in ring): continue
        pts = np.array([F.ll2px(x, y) for x, y in ring], np.int32)
        cv2.fillPoly(terra_ne, [pts], 1)
terra_ne = cv2.dilate(terra_ne, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (61, 61)))
mar[terra_ne == 0] = 1
mar[lagos > 0] = 0
terra = ((agua == 0) | ((agua > 0) & (lagos == 0) & (mar == 0))).astype(np.uint8)   # agua miuda que nao e lago nem mar conta como terra
k5 = np.ones((5, 5), np.uint8)
terra[cv2.dilate(barreira, k5) > 0] = 0; terra[cv2.dilate(lagos, k5) > 0] = 0; terra[cv2.dilate(mar, k5) > 0] = 0
np.save(B + 'terra-dbg.npy', terra)
n2, lab2, st2, _ = cv2.connectedComponentsWithStats(terra, connectivity=4)
borda = set(np.unique(np.r_[lab2[0, :], lab2[-1, :], lab2[:, 0], lab2[:, -1]]))
# perto de lago: componentes que encostam no lago (dilatado 3 px)
lagod = cv2.dilate(lagos, np.ones((7, 7), np.uint8))
toca_lago = set(np.unique(lab2[(lagod > 0) & (terra > 0)]))
sement = set(lab2[y, x] for x, y in SEM["dentro"] if lab2[y, x] > 0)
fora = set(lab2[y, x] for x, y in SEM["fora"] if lab2[y, x] > 0)
inset = set(np.unique(lab2[0:2620, 8150:]))
dentro = []
for x, y in SEM['dentro']:
    i = lab2[y, x]; print('semente', x, y, 'comp', i, 'borda', i in borda, 'area', st2[i, cv2.CC_STAT_AREA] if i else 0, 'terra', terra[y, x], 'lago', lagos[y,x], 'mar', mar[y,x])
for i in range(1, n2):
    if i in borda or i in fora or i in inset: continue
    if i in sement or (i in toca_lago and st2[i, cv2.CC_STAT_AREA] > 400): dentro.append(i)
zona = (np.isin(lab2, dentro) | (lagos > 0)).astype(np.uint8)
zona = cv2.dilate(zona, k5)   # devolve os 2 px tirados acima
zona = cv2.morphologyEx(zona, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))   # fecha a linha de 3 px da barreira interna
# tapa os buracos (ilhas do lago)
cs, hier = cv2.findContours(zona, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
cheia = np.zeros_like(zona)
for k, cc in enumerate(cs):
    if hier[0][k][3] == -1: cv2.drawContours(cheia, cs, k, 1, -1)
for x0, y0, x1, y1, r in CAIXAS:
    sub = cv2.dilate(cheia[y0:y1, x0:x1], cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2*r+1, 2*r+1)))
    cheia[y0:y1, x0:x1] = sub
cheia[mar > 0] = 0
cv2.imwrite(B + "zona-mask.png", cheia*255)
# area (m2) por pixel, pela georreferencia
def area_px(mask):
    ys, xs = np.nonzero(mask)
    # escala local media: derivadas de px2ll no centro
    tot = 0.0
    for gy in range(0, H, 500):
        for gx in range(0, W, 500):
            m = mask[gy:gy+500, gx:gx+500]
            k = int(m.sum())
            if not k: continue
            cx, cy = gx+250, gy+250
            l0, a0 = F.px2ll(cx, cy); l1, a1 = F.px2ll(cx+1, cy); l2, a2 = F.px2ll(cx, cy+1)
            mx = 111320*np.cos(np.radians(a0)); my = 110600
            det = abs((l1-l0)*mx*(a2-a0)*my - (a1-a0)*my*(l2-l0)*mx)
            tot += k*det
    return tot
mi2 = 2589988.11
A = area_px(cheia); Al = area_px(cheia & lagos)
relato["_area"] = {"total_mi2": round(A/mi2, 1), "lagos_mi2": round(Al/mi2, 1), "terra_mi2": round((A-Al)/mi2, 1)}
json.dump({"relato": relato, "linhas_px": linhas_px}, open(B + "zona-tracado.json", "w"), indent=1)
print(json.dumps(relato, indent=1))
small = cv2.resize(img, None, fx=0.15, fy=0.15, interpolation=cv2.INTER_AREA)
mz = cv2.resize(cheia, (small.shape[1], small.shape[0]), interpolation=cv2.INTER_NEAREST)
ov = small.copy(); ov[mz > 0] = (0, 160, 255)
small = cv2.addWeighted(ov, 0.45, small, 0.55, 0)
mb = cv2.resize(cv2.dilate(barreira, np.ones((9, 9), np.uint8)), (small.shape[1], small.shape[0]), interpolation=cv2.INTER_NEAREST)
small[mb > 0] = (0, 0, 255)
cv2.imwrite(B + "v-zona.jpg", small, [cv2.IMWRITE_JPEG_QUALITY, 85])
