"""n2, "NOT LA / YET" (o laudo do cético da reembalagem, out/_reembalagem/2026-11-18/los-angeles/cetico.md, §4.2). Vai com os títulos de 1909 (L6,
L7, N2), nunca com um título no presente (§0 e §4.2 do laudo). Na folha, o título embaixo é o N1 (o pedido: o mais clicável do cético para
todas), o que repete o descompasso que o laudo aponta: está no RELATO.md.

    python -X utf8 -B -P roteiros/los-angeles/miniatura/reembalagem-2026-11-18/n2.py           (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                                         (só o mapa, sem as peças: _bases/_tmp/n2-mapa-x.jpg)
    MINI_ENSAIO=1 ...                                                                          (grava em _bases/_tmp/, não na pasta)

O que se vê:
- Los Angeles EM 1906, com a faixa, em VERMELHO (la-1906-hamlin.json: a Shoestring Addition em vigor em 26/12/1906, redesenhada do mapa de
  Hamlin, 1916), com o relevo por baixo, o contorno branco de 5 px e a sombra por fora. A ponta sul toca as duas divisas a 0 m (E-RELATO.md);
- Wilmington e San Pedro em CIANO, com o contorno branco, cortados pela terra de hoje:
  - Wilmington: wilmington-1909-hamlin.json, um polígono fechado;
  - San Pedro: san-pedro-1909-divisa-hamlin.json, uma LINHA ABERTA (Hamlin não fecha o lado do mar). Fecho: as três partes em ordem (a de oeste
    e norte, com a faixa, invertida para começar na costa de Point Fermin; o canto de Wilmington entre a 1ª e a 2ª, que são os dois vértices
    seguidos do polígono de Wilmington; a com Wilmington; a de Terminal Island, que acaba dentro de Fish Harbor), e daí PELA ÁGUA: o caminho
    mais curto pela água de hoje até o mar aberto ao sul de Point Fermin (33,700 N), e ao norte até a ponta de Point Fermin. Pinta-se só a
    terra de hoje que fica dentro (o recorte pela terra do la.py): a linha inventada some sob o azul. O quanto ela cruza de terra fica no
    -pontos.json (ciano › san_pedro › fecho). (A 1ª rodada prolongava a linha leste para o sul no mesmo meridiano: cruzava 1,8 km de aterro
    de hoje, Reservation Point, e pintava-o de San Pedro; saiu.);
  - os dois limites são os da consolidação de 1909 (o que o dossiê tem mais perto de 1906);
- as cidades que hoje ladeiam a faixa ficam no AMARELO: "The towns that line it today weren't cities yet" (9:11);
- a caixa preta à esquerda, sobre a baía de Santa Monica, na metade de baixo: "NOT LA" em branco e, embaixo, "YET" em amarelo, maior, com o
  sublinhado vermelho;
- a seta branca curva, da caixa à terra ciano de San Pedro, sem cobrir a ponta da faixa;
- os rótulos pequenos WILMINGTON e SAN PEDRO, brancos, ao lado do ciano (as duas são pequenas demais para o rótulo caber dentro).
Nenhum ano na imagem, nem o nome "LOS ANGELES". A água é a de HOJE (o TIGER 2025, com os aterros do porto), sob uma cidade de 1906.
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.geometry import Polygon, LineString
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import la as L

NOME = os.environ.get("MINI_NOME", "n2")
# ── o quadro: de 33,685 a 34,105 N, centrado em 118,37 O (de ~118,82 a ~117,92 O). O do cético ia a 34,13 N, com a cidade de 1906 inteira, mas a
# faixa ficava com ~25 px de vermelho (menos que os ~26 do laudo): o topo desce e corta a ponta do braço de Highland Park (que vai a 34,12 N) ──
q = M.Quadro(M.env("MINI_LAT_S", 33.685), M.env("MINI_LAT_N", 34.105), M.env("MINI_LON_C", -118.37))
A = L.montar(q)
img, rel, terra, mar, t_geo = A["img"].copy(), A["rel"], A["terra"], A["mar"], A["terra_geo"]

# ── a geometria ──
f06, reg06 = L.ler_geo("la-1906-hamlin")
fwl, regwl = L.ler_geo("wilmington-1909-hamlin")
fsp, regsp = L.ler_geo("san-pedro-1909-divisa-hamlin")
assert f06[0][0]["epoca"] == "1906" and len(fsp[0][1].geoms) == 3
g06 = L.cortar(f06[0][1], t_geo)
wl_poly = fwl[0][1]
wl = L.cortar(wl_poly, t_geo)

# San Pedro: o fecho (a docstring)
p1, p2, p3 = [list(ln.coords) for ln in fsp[0][1].geoms]
canto = [tuple(c) for c in wl_poly.exterior.coords]
assert tuple(p1[0]) in canto and tuple(p2[0]) in canto, "as pontas da divisa de San Pedro não são vértices de Wilmington"
assert tuple(p2[-1]) == tuple(p3[0]), "a 2ª e a 3ª parte da divisa não se encontram"
LAT_FECHO = M.env("MINI_SP_LAT_FECHO", 33.700)
fim = p3[-1]
fermin = p1[-1]


def caminho_pela_agua(a, b, caixa=(-118.315, 33.693, -118.232, 33.762), passo=0.0001, custo_terra=500.0):
    """o caminho mais curto de a até b que evita a terra de hoje (a terra do la.py, numa grade de ~10 m): a água custa 1 por passo, a terra
    custa custo_terra (o caminho só cruza terra se não houver passagem por água, e então pelo trecho mais curto). Dijkstra, 8 vizinhos"""
    import heapq
    from PIL import Image, ImageDraw
    x0, y0, x1, y1 = caixa
    nx, ny = int(round((x1 - x0) / passo)), int(round((y1 - y0) / passo))
    im = Image.new("L", (nx, ny), 0)
    d = ImageDraw.Draw(im)
    rec = t_geo.intersection(__import__("shapely.geometry", fromlist=["box"]).box(*caixa))
    gx = lambda x, y: ((x - x0) / passo, (y1 - y) / passo)
    for p in getattr(rec, "geoms", [rec]):
        if p.geom_type != "Polygon" or p.is_empty:
            continue
        d.polygon([gx(*c) for c in p.exterior.coords], fill=255)
        for h in p.interiors:
            d.polygon([gx(*c) for c in h.coords], fill=0)
    terra_g = np.asarray(im) > 127
    custo = np.where(terra_g, custo_terra, 1.0)
    ia = (int(round(gx(*a)[1])), int(round(gx(*a)[0])))
    ib = (int(round(gx(*b)[1])), int(round(gx(*b)[0])))
    dist = np.full(terra_g.shape, np.inf)
    ant = -np.ones(terra_g.shape + (2,), np.int32)
    dist[ia] = 0.0
    fila = [(0.0, ia)]
    viz = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
    while fila:
        dd, (r, c) = heapq.heappop(fila)
        if dd > dist[r, c]:
            continue
        if (r, c) == ib:
            break
        for dr, dc in viz:
            rr, cc = r + dr, c + dc
            if 0 <= rr < ny and 0 <= cc < nx:
                nd = dd + (1.4142 if dr and dc else 1.0) * 0.5 * (custo[r, c] + custo[rr, cc])
                if nd < dist[rr, cc]:
                    dist[rr, cc] = nd
                    ant[rr, cc] = (r, c)
                    heapq.heappush(fila, (nd, (rr, cc)))
    cam = [ib]
    while cam[-1] != ia:
        cam.append(tuple(ant[cam[-1]]))
    cam.reverse()
    pts = [(x0 + (c + 0.0) * passo, y1 - (r + 0.0) * passo) for r, c in cam]
    pts[0], pts[-1] = a, b
    linha = LineString(pts).simplify(passo * 1.5)
    em_terra = sum(1 for r, c in cam if terra_g[r, c])
    return list(linha.coords), round(em_terra * passo * 111.32 * 1000 * 0.9, 0)      # m (o passo em lon e lat é ~9 a ~11 m)


# o fecho: do fim da linha leste (dentro de Fish Harbor) até o mar aberto ao sul de Point Fermin, pelo caminho mais curto pela água; daí ao norte
# até a ponta de Point Fermin, que é o começo do anel
MAR_SUL = (fermin[0], LAT_FECHO)
fecho_pts, fecho_em_terra_m = caminho_pela_agua(fim, MAR_SUL)
anel = list(reversed(p1)) + p2 + p3[1:] + fecho_pts[1:]
sp_poly = Polygon(anel)
if not sp_poly.is_valid:
    sp_poly = sp_poly.buffer(0)
sp = L.cortar(sp_poly, t_geo)
fecho = LineString(fecho_pts + [fermin])
fecho_km = fecho.length * 111.32 * math.cos(math.radians(33.72))

m_06 = q.mascara(g06)
m_wl = q.mascara(wl)
m_sp = q.mascara(sp)
m_cy = np.clip(np.maximum(m_wl, m_sp), 0, 1)

# ── o ciano e o vermelho (como na n1) ──
CY_MIX = M.env("MINI_CY_MIX", 0.86)
ciano_rel = rel.cor(M.CIANO, M.env("MINI_CY_SOMBRA", 0.42), (0.55, 0.85, 1.0), (225, 252, 255), M.env("MINI_CY_LUZ", 0.45))
img = img * (1 - CY_MIX * m_cy[..., None]) + ciano_rel * (CY_MIX * m_cy[..., None])
borda_cy = np.maximum(M.borda_de(m_wl, M.env("MINI_CY_BORDA", 4)), M.borda_de(m_sp, M.env("MINI_CY_BORDA", 4)))
img = M.compor(img, M.BRANCO, borda_cy * (1 - (m_06 > 0.5)))
img = M.sombra_fora(img, m_06, np.ones_like(terra), sig=M.env("MINI_SOMBRA_SIG", 12), forca=M.env("MINI_SOMBRA", 1.0))
img = img * (1 - m_06[..., None]) + rel.vermelho() * m_06[..., None]
img = M.compor(img, M.BRANCO, M.borda_de(m_06, M.env("MINI_LA_BORDA", 5)))


def largura_px(lat, lon0=-118.33, lon1=-118.27):
    y = int(round(q.palco(-118.3, lat)[1]))
    x0, x1 = int(q.palco(lon0, lat)[0]), int(q.palco(lon1, lat)[0])
    return int((m_06[y, x0:x1] > 0.5).sum())


ys06 = np.nonzero(m_06.max(1) > 0.5)[0]
medidas = dict(A["medidas"])
medidas["vermelho_los_angeles_1906"] = {"fracao_da_imagem": round(float((m_06 > 0.5).mean()), 4), "camada": reg06,
                                        "toca_a_borda_de_cima": bool(ys06.min() == 0),
                                        "corte_no_topo_lat": round(q.lat_n, 3), "topo_da_cidade_lat": round(f06[0][1].bounds[3], 4),
                                        "faixa_largura_px_vermelho": {"%.3f" % la_: largura_px(la_) for la_ in (33.77, 33.80, 33.83, 33.89, 33.92, 33.95)}}
medidas["ciano"] = {"wilmington": {"camada": regwl, "fracao_da_imagem": round(float((m_wl > 0.5).mean()), 4)},
                    "san_pedro": {"camada": regsp, "fracao_da_imagem": round(float((m_sp > 0.5).mean()), 4),
                                  "fecho": {"de": [round(v, 6) for v in fim], "ate": [round(v, 6) for v in MAR_SUL],
                                            "como": "o caminho mais curto pela água de hoje (Dijkstra numa grade de ~10 m; terra 500× mais cara), e daí ao "
                                                    "norte até a ponta de Point Fermin",
                                            "vertices": len(fecho_pts), "comprimento_km": round(fecho_km, 2),
                                            "metros_sobre_a_terra_de_hoje": fecho_em_terra_m,
                                            "poligono_valido_sem_conserto": bool(Polygon(anel).is_valid),
                                            "pontos_lonlat": [[round(x, 5), round(y, 5)] for x, y in fecho_pts]}},
                    "mistura": CY_MIX}

if os.environ.get("MINI_SO_MAPA"):
    L.previa(img, "n2-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "px_por_km", "vermelho_los_angeles_1906", "ciano")}, ensure_ascii=False)[:2500])
    sys.exit(0)

# ── a caixa: à esquerda, sobre a baía, na metade de baixo ──
linhas = [("NOT LA", M.env("MINI_FS_A", 216), 900, M.BRANCO), ("YET", M.env("MINI_FS_B", 300), 900, (255, 196, 46))]
entre = [M.env("MINI_ENTRE", 36)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
larg, alt = M.medir_texto(linhas, entre)
h_caixa = alt + 2 * pad_y + barra[0] + barra[1]
bx = M.env("MINI_BX", 40)
by = M.env("MINI_BY", q.palco(-118.6, M.env("MINI_BOX_LAT", 33.79))[1] - h_caixa / 2)
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

# ── a seta: da borda direita da caixa à terra ciano de San Pedro (o alvo em lon/lat), por cima de Palos Verdes ──
alvo = (M.env("MINI_ALVO_LON", -118.286), M.env("MINI_ALVO_LAT", 33.719))
ax, ay = q.palco(*alvo)
p0 = (caixa[2] + M.env("MINI_S0_DX", 30), caixa[1] + M.env("MINI_S0_FY", 0.70) * (caixa[3] - caixa[1]))
p3 = (ax, ay)
Ls = math.dist(p0, p3)
c1 = (p0[0] + M.env("MINI_C1_DX", 0.40) * Ls, p0[1] - M.env("MINI_C1_DY", 0.05) * Ls)
c2 = (p3[0] - M.env("MINI_C2_DX", 0.45) * Ls, p3[1] - M.env("MINI_C2_DY", -0.02) * Ls)
curva = M.bezier(p0, c1, c2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 28), w1=M.env("MINI_SETA_W1", 54),
                                      cab_l=M.env("MINI_CAB_L", 110), cab_w=M.env("MINI_CAB_W", 144))

# ── os rótulos: WILMINGTON a leste de Wilmington, SAN PEDRO a leste de San Pedro (as duas pequenas demais para o rótulo caber no ciano) ──
PX_ROT = M.env("MINI_ROT_PX", 50)
xs_wl = np.nonzero(m_wl.max(0) > 0.5)[0]
xs_sp = np.nonzero(m_sp.max(0) > 0.5)[0]
ITENS = [("WILMINGTON", xs_wl.max() + M.env("MINI_WL_DX", 34), q.palco(-118.2, M.env("MINI_WL_LAT", 33.79))[1], PX_ROT, "lm"),
         ("SAN PEDRO", q.palco(M.env("MINI_SPR_LON", -118.247), 0)[0], q.palco(-118.2, M.env("MINI_SPR_LAT", 33.716))[1], PX_ROT, "lm")]
img, caixas_rot, a_rot = M.rotulos(img, ITENS)

# ── as conferências ──
alfa = np.maximum.reduce([a_caixa, a_seta, a_rot])
pontos = dict(medidas)
pontos["texto"] = "NOT LA / YET"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
sel_c = a_caixa > 0.15
dist_terra = cv2.distanceTransform((terra < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
dist_06 = cv2.distanceTransform((m_06 < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "lat_de_cima_e_de_baixo": [round(M.lonlat(q, caixa[0], caixa[1])[1], 4), round(M.lonlat(q, caixa[0], caixa[3])[1], 4)],
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                   "distancia_a_terra_px": round(float(dist_terra[sel_c].min()), 1),
                   "distancia_ao_vermelho_px": round(float(dist_06[sel_c].min()), 1)}
sel_s = a_seta > 0.15
ponta = (int(round(p3[1])), int(round(p3[0])))
pontos["seta"] = {"tipo": "curta, da caixa à terra ciano de San Pedro", "comprimento_px": comps, "alvo_lonlat": list(alvo),
                  "controles_palco": [[round(v, 1) for v in p] for p in (p0, c1, c2, p3)],
                  "ponta_no_ciano": bool(m_cy[ponta] > 0.5), "ponta_no_mar": bool(mar[ponta] > 0.5),
                  "sobre_o_vermelho_px": int((sel_s & (m_06 > 0.5)).sum()),
                  "distancia_ao_vermelho_px": round(float(dist_06[sel_s].min()), 1)}
outras = np.maximum.reduce([a_caixa, a_seta])
d_outras = cv2.distanceTransform((outras < 0.15).astype(np.uint8), cv2.DIST_L2, 5)
pontos["rotulos"] = {}
for it in ITENS:
    _, _, a1 = M.rotulos(np.zeros((M.H, M.W, 3), np.float32), [it])
    s1 = a1 > 0.15
    pontos["rotulos"][it[0]] = {"lonlat": [round(v, 4) for v in M.lonlat(q, it[1], it[2])], "ancora": it[4], "caixa_palco": caixas_rot[it[0]],
                                "sobre_o_ciano": round(float((s1 & (m_cy > 0.5)).sum() / max(1, s1.sum())), 4),
                                "sobre_o_mar": round(float((s1 & (mar > 0.5)).sum() / max(1, s1.sum())), 4),
                                "sobre_o_vermelho": round(float((s1 & (m_06 > 0.5)).sum() / max(1, s1.sum())), 4),
                                "distancia_a_outra_peca_px": round(float(d_outras[s1].min()), 1)}
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_06 > 0.5)).sum() / max(1, (m_06 > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
