"""n1, "9 MILES" (o laudo do cético da reembalagem, out/_reembalagem/2026-11-18/los-angeles/cetico.md, §4.2), com o título "Why Los Angeles Is
Only Half a Mile Wide Here" (N1, o mais clicável do cético) embaixo.

    python -X utf8 -B -P roteiros/los-angeles/miniatura/reembalagem-2026-11-18/n1.py           (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                                         (só o mapa, sem as peças: _bases/_tmp/n1-mapa-x.jpg)
    MINI_ENSAIO=1 ...                                                                          (grava em _bases/_tmp/, não na pasta)

O que se vê:
- Los Angeles de HOJE em VERMELHO, no que cabe no quadro (o TIGER 2025, la-hoje-tiger.json, cortado pela terra): a massa do Westside e do sul da
  cidade em cima, cortada pela borda, a faixa fina no meio e o distrito do porto embaixo (San Pedro, Wilmington, Harbor City), com o relevo por
  baixo, o contorno branco de 5 px e a sombra por fora;
- as cinco cidades vizinhas da faixa em CIANO (vizinhos-faixa-tiger.json: Gardena, Torrance, Carson, Lomita e Long Beach), o relevo pintado em
  ciano e misturado ao amarelo, com o contorno branco de 4 px em volta de cada uma. A terra do condado e as outras cidades ficam no amarelo;
- a COTA: uma régua branca vertical, com as pontas em seta e um travessão em cada ponta, a oeste da faixa e sem tocar o vermelho, que vai
  EXATAMENTE de 33,9232 N a 33,7976 N: o trecho fino de 8,66 mi do contorno de hoje (out/los-angeles/_pesquisa/pauta-geo.md, "Trecho fino de
  hoje"; roteiros/los-angeles/embalagem.md §10.3). É vertical porque a medida é de norte a sul (a diferença de latitude);
- a caixa preta à esquerda, sobre o Pacífico ao largo de Redondo e Torrance: "9" em amarelo, grande, em cima, e "MILES" em branco embaixo, com o
  sublinhado vermelho (numa linha só, "9 MILES" não lia no 168 com a largura que o mar deixa: ver as rodadas);
- a seta branca curva e curta, da borda direita da caixa ao meio da cota (~33,86 N);
- os rótulos pequenos CARSON e LONG BEACH, brancos, sobre o ciano, e TORRANCE no mar, encostado ao trecho em que Torrance toca a costa (Torrance
  Beach): a cota corta Torrance de norte a sul, e entre a costa e a régua não cabe o rótulo (só leem a 1280).
Nenhum ano na imagem, nem o nome "LOS ANGELES" (Lucas, 30/10/2026: "sem o nome na miniatura").

O quadro é mais apertado que o do cético (de 33,695 a 34,01 N, e não de 33,69 a 34,07): a faixa passa de ~30 para ~35 px de vermelho no palco
(41 px por km), e a massa da cidade continua em cima, cortada pela borda, como na D. O cético deixou apertar.

As rodadas (em _bases/_tmp/, n1-e*): e1, o quadro do cético (a faixa com ~30 px; o rótulo TORRANCE em cima da cota); e2, o quadro apertado (a
caixa encostava na costa de Playa del Rey, e a cota tocava o vermelho na ponta de baixo, pelo travessão e pela cabeça da seta, porque o distrito
do porto começa em 33,7976 N na mesma longitude da borda oeste da faixa); e3 a e5, o travessão e a cabeça mais estreitos e a régua a 60 px, a caixa
menor e mais baixa, TORRANCE no mar; e6, a água só ligada ao mar (la.py).
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import la as L

NOME = os.environ.get("MINI_NOME", "n1")
# ── o quadro (o do cético): de 33,69 a 34,07 N, centrado em 118,345 O (de ~118,752 a ~117,938 O); a faixa (~118,30 O) fica a ~57 % da largura ──
q = M.Quadro(M.env("MINI_LAT_S", 33.695), M.env("MINI_LAT_N", 34.01), M.env("MINI_LON_C", -118.346))
A = L.montar(q)
img, rel, terra, mar, t_geo = A["img"].copy(), A["rel"], A["terra"], A["mar"], A["terra_geo"]

# ── a geometria ──
la_f, reg_la = L.ler_geo("la-hoje-tiger")
viz_f, reg_viz = L.ler_geo("vizinhos-faixa-tiger")
assert [p["GEOID"] for p, g in la_f] == ["0644000"], "o contorno de hoje não é o de Los Angeles"
assert sorted(p["name"] for p, g in viz_f) == ["Carson", "Gardena", "Lomita", "Long Beach", "Torrance"], "os 5 vizinhos não vieram"
la_g = L.cortar(la_f[0][1], t_geo)
viz = {p["name"]: L.cortar(g, t_geo) for p, g in viz_f}
m_la = q.mascara(la_g)
m_viz = {k: q.mascara(g) for k, g in viz.items()}
m_cy = np.clip(np.maximum.reduce(list(m_viz.values())), 0, 1)

# ── o ciano: o relevo pintado em ciano, misturado ao amarelo (o método da Utah da Strip), e o contorno branco de cada cidade ──
CY_MIX = M.env("MINI_CY_MIX", 0.86)
ciano_rel = rel.cor(M.CIANO, M.env("MINI_CY_SOMBRA", 0.42), (0.55, 0.85, 1.0), (225, 252, 255), M.env("MINI_CY_LUZ", 0.45))
img = img * (1 - CY_MIX * m_cy[..., None]) + ciano_rel * (CY_MIX * m_cy[..., None])
borda_cy = np.maximum.reduce([M.borda_de(m, M.env("MINI_CY_BORDA", 4)) for m in m_viz.values()])
img = M.compor(img, M.BRANCO, borda_cy * (1 - (m_la > 0.5)))

# ── o vermelho: a sombra por fora, o relevo vermelho, o contorno branco de 5 px (também na costa: nada de vermelho contra azul) ──
img = M.sombra_fora(img, m_la, np.ones_like(terra), sig=M.env("MINI_SOMBRA_SIG", 12), forca=M.env("MINI_SOMBRA", 1.0))
img = img * (1 - m_la[..., None]) + rel.vermelho() * m_la[..., None]
img = M.compor(img, M.BRANCO, M.borda_de(m_la, M.env("MINI_LA_BORDA", 5)))

# ── as medidas da faixa no palco ──
def largura_px(lat, lon0=-118.33, lon1=-118.27):
    y = int(round(q.palco(-118.3, lat)[1]))
    x0, x1 = int(q.palco(lon0, lat)[0]), int(q.palco(lon1, lat)[0])
    return int((m_la[y, x0:x1] > 0.5).sum())


medidas = dict(A["medidas"])
medidas["vermelho_los_angeles_hoje"] = {"fracao_da_imagem": round(float((m_la > 0.5).mean()), 4), "camada": reg_la,
                                        "faixa_largura_px_vermelho": {"%.3f" % la_: largura_px(la_) for la_ in (33.80, 33.83, 33.86, 33.89, 33.92)}}
medidas["ciano_vizinhos"] = {"fracao_da_imagem": round(float((m_cy > 0.5).mean()), 4), "camada": reg_viz, "mistura": CY_MIX,
                             "fracao_por_cidade": {k: round(float((m > 0.5).mean()), 4) for k, m in m_viz.items()}}

if os.environ.get("MINI_SO_MAPA"):
    L.previa(img, "n1-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "px_por_km", "vermelho_los_angeles_hoje", "ciano_vizinhos")}, ensure_ascii=False)[:2000])
    sys.exit(0)

# ── a cota: vertical, a oeste da faixa; a borda oeste do trecho fino é -118,3091 (de 33,7976 a 33,865 N), e a de cima, -118,2917. A distância ao
# vermelho se mede na máscara (o mínimo ao longo da régua inteira, com os travessões), não se supõe ──
LAT_N, LAT_S = 33.9232, 33.7976
W_COTA = M.env("MINI_COTA_W", 24)
TRAV = M.env("MINI_COTA_TRAV", 90)                  # o comprimento do travessão de cada ponta
dist_la = cv2.distanceTransform((m_la < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
x_borda = min(q.palco(-118.3091, 33.83)[0], q.palco(-118.2917, 33.90)[0])
GAP = M.env("MINI_COTA_GAP", 60)                     # do vermelho à borda da régua (o contorno branco de 5 px fica dentro)
x_cota = x_borda - GAP - W_COTA / 2
_, y_n = q.palco(-118.3, LAT_N)
_, y_s = q.palco(-118.3, LAT_S)
p_n, p_s = (x_cota, y_n), (x_cota, y_s)
img, comp_cota, a_cota = M.seta_dupla(img, p_n, p_s, w=W_COTA, cab_l=M.env("MINI_COTA_CAB_L", 74), cab_w=M.env("MINI_COTA_CAB_W", 84))
# os travessões: barras horizontais nas duas pontas, centradas na régua (a leitura de "medida", e não de estrada)
from PIL import Image, ImageDraw
mt = Image.new("L", (M.W * M.K, M.H * M.K), 0)
dt = ImageDraw.Draw(mt)
ESP = M.env("MINI_COTA_TRAV_ESP", 18)
for y in (y_n, y_s):
    dt.rectangle([(x_cota - TRAV / 2) * M.K, (y - ESP / 2) * M.K, (x_cota + TRAV / 2) * M.K, (y + ESP / 2) * M.K], fill=255)
a_trav = np.asarray(mt.resize((M.W, M.H), Image.LANCZOS)).astype(np.float32) / 255
cont_t = cv2.GaussianBlur(cv2.dilate(a_trav, np.ones((7, 7), np.uint8)), (0, 0), 1.0)
somb_t = np.roll(np.roll(cv2.GaussianBlur(cv2.dilate(a_trav, np.ones((9, 9), np.uint8)), (0, 0), 10), 12, 0), 8, 1)
img = M.compor(img, M.PRETO, np.clip(somb_t * 0.75, 0, 0.75) * (1 - a_cota))
img = M.compor(img, M.PRETO, cont_t * 0.85 * (1 - a_cota))
img = M.compor(img, M.BRANCO, a_trav)
a_cota = np.maximum(a_cota, a_trav)

# ── a caixa: à esquerda, sobre o Pacífico ao largo de Redondo e Torrance ──
FS_9, FS_MI = M.env("MINI_FS_9", 316), M.env("MINI_FS_MI", 236)
if os.environ.get("MINI_UMA_LINHA"):
    linhas = [([("9 ", (255, 196, 46)), ("MILES", M.BRANCO)], M.env("MINI_FS_1L", 215), 900, M.BRANCO)]
    entre = []
else:
    linhas = [("9", FS_9, 900, (255, 196, 46)), ("MILES", FS_MI, 900, M.BRANCO)]
    entre = [M.env("MINI_ENTRE", 34)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
larg, alt = M.medir_texto(linhas, entre)
h_caixa = alt + 2 * pad_y + barra[0] + barra[1]
bx = M.env("MINI_BX", 40)
# o meio da caixa na altura de MINI_BOX_LAT (33,885 N: a caixa fica de 33,82 a 33,95, ao largo de Redondo; o canto de cima à direita fica a
# ~30 px da costa de Playa del Rey, e embaixo sobra lugar para o rótulo TORRANCE)
by = M.env("MINI_BY", q.palco(-118.6, M.env("MINI_BOX_LAT", 33.885))[1] - h_caixa / 2)
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

# ── a seta: da borda direita da caixa ao meio da cota (a ponta para antes da régua) ──
y_meio = (y_n + y_s) / 2
p0 = (caixa[2] + M.env("MINI_S0_DX", 30), M.env("MINI_S0_Y", caixa[1] + 0.50 * (caixa[3] - caixa[1])))
p3 = (x_cota - W_COTA / 2 - M.env("MINI_S3_FOLGA", 22), y_meio)
Ls = math.dist(p0, p3)
p1 = (p0[0] + M.env("MINI_C1_DX", 0.40) * Ls, p0[1] + M.env("MINI_C1_DY", 0.22) * Ls)
p2 = (p3[0] - M.env("MINI_C2_DX", 0.40) * Ls, p3[1] + M.env("MINI_C2_DY", 0.10) * Ls)
curva = M.bezier(p0, p1, p2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 28), w1=M.env("MINI_SETA_W1", 54),
                                      cab_l=M.env("MINI_CAB_L", 112), cab_w=M.env("MINI_CAB_W", 150))

# ── os rótulos: CARSON e LONG BEACH, brancos, sobre o ciano. TORRANCE não cabe no ciano: a cota corta Torrance de norte a sul, e entre a costa e a
# régua sobram ~200 px (o rótulo tem ~290). Vai no mar, encostado à costa de Torrance (Torrance Beach), com a ponta direita a ROT_COSTA px dela ──
PX_ROT = M.env("MINI_ROT_PX", 52)
m_to = m_viz["Torrance"]
_n, _rot_mar = cv2.connectedComponents((mar > 0.5).astype(np.uint8), connectivity=4)
oceano = np.isin(_rot_mar, [r for r in np.unique(_rot_mar[:, 0]) if r > 0])          # o mar que toca a borda esquerda (sem os lagos)
perto_mar = cv2.dilate(oceano.astype(np.uint8), np.ones((7, 7), np.uint8)) > 0
linhas_to = np.nonzero(((m_to > 0.5) & perto_mar).any(1))[0]
TO_COSTA_LAT = [round(M.lonlat(q, 0, float(linhas_to.max()))[1], 4), round(M.lonlat(q, 0, float(linhas_to.min()))[1], 4)]
TO_LAT = M.env("MINI_TO_LAT", 33.808)       # no trecho em que Torrance toca o mar, abaixo da caixa
y_to = q.palco(-118.4, TO_LAT)[1]
x_costa_to = float(np.nonzero(terra[int(round(y_to)), :int(q.palco(-118.33, TO_LAT)[0])] < 0.5)[0].max())
ROT = {"CARSON": q.palco(M.env("MINI_CA_LON", -118.262), M.env("MINI_CA_LAT", 33.838)),
       "LONG BEACH": q.palco(M.env("MINI_LB_LON", -118.160), M.env("MINI_LB_LAT", 33.818))}
ITENS = [(t, x, y, PX_ROT, "mm") for t, (x, y) in ROT.items()] + [("TORRANCE", x_costa_to - M.env("MINI_ROT_COSTA", 26), y_to, PX_ROT, "rm")]
img, caixas_rot, a_rot = M.rotulos(img, ITENS)

# ── as conferências ──
alfa = np.maximum.reduce([a_caixa, a_seta, a_rot, a_cota])
pontos = dict(medidas)
pontos["texto"] = "9 MILES" if os.environ.get("MINI_UMA_LINHA") else "9 / MILES"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
sel_c = a_caixa > 0.15
dist_terra = cv2.distanceTransform((terra < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "lat_de_cima_e_de_baixo": [round(M.lonlat(q, caixa[0], caixa[1])[1], 4), round(M.lonlat(q, caixa[0], caixa[3])[1], 4)],
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                   "distancia_a_terra_px": round(float(dist_terra[sel_c].min()), 1),
                   "distancia_ao_vermelho_px": round(float(dist_la[sel_c].min()), 1)}
sel_k = a_cota > 0.15
pontos["cota"] = {"de_lat": LAT_N, "ate_lat": LAT_S, "milhas_norte_sul": round((LAT_N - LAT_S) * 69.05, 2),
                  "y_palco": [round(y_n, 1), round(y_s, 1)], "x_palco": round(x_cota, 1), "lon": round(M.lonlat(q, x_cota, y_n)[0], 5),
                  "comprimento_px": comp_cota, "traco_px": W_COTA, "travessao_px": [TRAV, ESP],
                  "menor_distancia_ao_vermelho_px": round(float(dist_la[sel_k].min()), 1),
                  "sobre_o_vermelho": int((sel_k & (m_la > 0.5)).sum()),
                  "fonte": "pauta-geo.md do vídeo: 'Trecho fino de hoje, de norte a sul: 8,66 mi (33,7976 a 33,9232 N, TIGER)'"}
pontos["seta"] = {"tipo": "curta, da caixa ao meio da cota", "comprimento_px": comps,
                  "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                  "ponta_lat": round(M.lonlat(q, *p3)[1], 4),
                  "sobre_o_vermelho": int(((a_seta > 0.15) & (m_la > 0.5)).sum()),
                  "distancia_a_cota_px": round(float(cv2.distanceTransform((a_cota < 0.15).astype(np.uint8), cv2.DIST_L2, 5)[a_seta > 0.15].min()), 1)}
pontos["rotulos"] = {"torrance_toca_o_mar_entre_lat": TO_COSTA_LAT}
outras = np.maximum.reduce([a_caixa, a_seta, a_cota])
d_outras = cv2.distanceTransform((outras < 0.15).astype(np.uint8), cv2.DIST_L2, 5)
for it in ITENS:
    _, _, a1 = M.rotulos(np.zeros((M.H, M.W, 3), np.float32), [it])
    s1 = a1 > 0.15
    pontos["rotulos"][it[0]] = {"lonlat": [round(v, 4) for v in M.lonlat(q, it[1], it[2])], "ancora": it[4], "caixa_palco": caixas_rot[it[0]],
                                "sobre_o_ciano": round(float((s1 & (m_cy > 0.5)).sum() / max(1, s1.sum())), 4),
                                "sobre_o_mar": round(float((s1 & (mar > 0.5)).sum() / max(1, s1.sum())), 4),
                                "sobre_o_vermelho": round(float((s1 & (m_la > 0.5)).sum() / max(1, s1.sum())), 4),
                                "distancia_a_outra_peca_px": round(float(d_outras[s1].min()), 1)}
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_la > 0.5)).sum() / max(1, (m_la > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
