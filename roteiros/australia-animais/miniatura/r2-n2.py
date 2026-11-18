"""r2-n2, a estrada: "10 YEARS OF VENOM / < 1 MONTH", com a pílula "ROADS" (a rodada 2 das miniaturas da Austrália, 18/11/2026; o pedido:
pautas/australia-animais/_trabalho/pedido-miniaturas-r2.md).

    python -X utf8 -B -P roteiros/australia-animais/miniatura/r2-n2.py           (da raiz do canal; sem rede)

O fato (pauta v2, §4.1, "A âncora da estrada", FIRME, conta): de 2016 a 2025, os animais venenosos (CID-10 X20–X29) mataram 85 pessoas na
Austrália; os acidentes de veículo a motor mataram 1.276 em 2025 (preliminar), 106,3 por mês em média. A voz do gancho A diz "That's fewer than
Australia's roads killed in an average month of 2025", e o Tunde, no teste dos leitores, disse que era "a frase que eu repetiria no almoço".

O que se vê:
- a Austrália inteira em relevo amarelo e o mar azul, no quadro comum das três (47 S a 9,4 S, centrado em 127,3 E);
- as estradas em VERMELHO, com o contorno branco e a sombra: as "Major Highway" e "Secondary Highway" do Natural Earth 1:10m, cortadas na terra
  do ABS. O número é do país todo, e a rede é a do país todo (nada de vermelho só num estado). A rede do NE é a das estradas principais; as mortes
  são de todas as estradas;
- a caixa preta, embaixo à esquerda, no mar: "10 YEARS OF VENOM" em branco e "< 1 MONTH" em amarelo, com o sublinhado vermelho;
- a seta branca, da borda direita da caixa, sobe curva até a rodovia do NE mais perto de 134,0 E, 29,0 S (uma "Major Highway" sem nome no NE,
  em 134,38 E, 28,62 S, na Austrália do Sul: pela posição, a Stuart Highway perto de Coober Pedy; o nome não está na fonte), e a pílula "ROADS"
  logo acima da ponta. Na rodada, a 1ª seta ia à estrada Eyre, na costa da Grande Baía, e ficava com 207 px, curta e torta (o ensaio e1).
Nada em ciano.
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.geometry import Point
from shapely.ops import unary_union, nearest_points
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU
import r2_comum as C

NOME = os.environ.get("MINI_NOME", "r2-n2")
QUADRO = (M.env("MINI_LAT_S", -47.0), M.env("MINI_LAT_N", -9.4), M.env("MINI_LON_C", 127.3))
A = AU.montar(QUADRO, bases="asia", divisas=False, mar_a=0.92)
q, img, rel, terra, mar = A["q"], A["img"].copy(), A["rel"], A["terra"], A["mar"]
m_au = A["m_au"]

# ── as estradas em vermelho: a sombra, o contorno branco (o casco) e o vermelho por cima ──
rede, reg_rede = C.estradas(A["australia"])
todas = unary_union(list(rede.values())).simplify(AU.SIMPL, preserve_topology=False)
LW = M.env("MINI_EST_LW", 16)
CASCO = M.env("MINI_EST_CASCO", 5)
m_red = q.linha(todas, LW)
m_casco = q.linha(todas, LW + 2 * CASCO)
somb = np.roll(np.roll(cv2.GaussianBlur(m_casco, (0, 0), 6), 5, 0), 4, 1)
img = M.compor(img, M.PRETO, np.clip(somb * 0.55, 0, 0.55) * (1 - m_casco))
img = M.compor(img, M.BRANCO, m_casco)
img = M.compor(img, M.VERMELHO, m_red)

medidas = dict(A["medidas"])
medidas["estradas"] = dict(reg_rede, largura_px=LW, casco_px=CASCO, fracao_da_imagem=round(float((m_red > 0.5).mean()), 4),
                           fracao_do_casco_sobre_a_australia=round(float(((m_casco > 0.5) & (m_au > 0.5)).sum() / max(1, (m_casco > 0.5).sum())), 4))

if os.environ.get("MINI_SO_MAPA"):
    AU.previa(img, "r2-n2-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "estradas")}, ensure_ascii=False)[:1500])
    sys.exit(0)

# ── a caixa: embaixo à esquerda, no mar ──
linhas = [("10 YEARS OF VENOM", M.env("MINI_FS_A", 130), 900, M.BRANCO), ("< 1 MONTH", M.env("MINI_FS_B", 250), 900, C.AMARELO_CAIXA)]
entre = [M.env("MINI_ENTRE", 34)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
larg, alt = M.medir_texto(linhas, entre)
bx = M.env("MINI_BX", 56)
by = M.env("MINI_BY", M.H - 34 - (alt + 2 * pad_y + barra[0] + barra[1]))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

# ── a seta: da borda direita da caixa, sobe curva até a rodovia (o ponto da rede mais perto do alvo) ──
alvo_ll = (M.env("MINI_ALVO_LON", 134.0), M.env("MINI_ALVO_LAT", -29.0))
pr = nearest_points(todas, Point(*alvo_ll))[0]
alvo = q.palco(pr.x, pr.y)
p0 = (caixa[0] + M.env("MINI_S0_FX", 1.0) * (caixa[2] - caixa[0]), caixa[1] - M.env("MINI_S0_DY", -150))
p3 = C.ponta_ate(m_casco, alvo, p0, M.env("MINI_RECUO", 6))
L = math.dist(p0, p3)
p1 = (p0[0] + M.env("MINI_C1_DX", 0.45) * L, p0[1] - M.env("MINI_C1_DY", 0.02) * L)
p2 = (p3[0] - M.env("MINI_C2_DX", 0.05) * L, p3[1] + M.env("MINI_C2_DY", 0.45) * L)
curva = M.bezier(p0, p1, p2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 30), w1=M.env("MINI_SETA_W1", 58),
                                      cab_l=M.env("MINI_CAB_L", 126), cab_w=M.env("MINI_CAB_W", 170))

# ── a pílula "ROADS": acima da ponta da seta ──
px_pil = M.env("MINI_PIL_PX", 92)
xp, yp = p3[0] + M.env("MINI_PIL_DX", 0), p3[1] - M.env("MINI_PIL_DY", 140)
img, caixa_pil, _, a_pil = C.pilula(img, xp, yp, "ROADS", px=px_pil)

alfa = np.maximum.reduce([a_caixa, a_seta, a_pil])
pontos = dict(medidas)
pontos["texto"] = "10 YEARS OF VENOM / < 1 MONTH (pílula: ROADS)"
pontos["fato"] = {"venenosos_2016_2025": 85, "estrada_2025_por_mes": 106.3, "fonte": "pauta v2 §4.1 (fb 1; fb §2; p_contas.py; cetico_contas.py)",
                  "a_voz": "That's fewer than Australia's roads killed in an average month of 2025"}
sel_c = a_caixa > 0.15
dist_au = cv2.distanceTransform((m_au < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l, "maiusculas_no_168_px": C.maiusculas_168(caixas_l),
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                   "distancia_a_australia_px": round(float(dist_au[sel_c].min()), 1)}
sel_p = a_pil > 0.15
pontos["pilula"] = {"caixa_palco": caixa_pil, "fonte_px": px_pil,
                    "fracao_sobre_as_estradas": round(float((sel_p & (m_casco > 0.5)).sum() / sel_p.sum()), 3)}
pontos["seta"] = {"tipo": "esquemática: liga a caixa a uma rodovia do NE na Austrália do Sul (não é rota)", "comprimento_px": comps,
                  "alvo_na_rede_lonlat": [round(pr.x, 3), round(pr.y, 3)],
                  "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                  "ponta_a_px_do_casco": round(float(cv2.distanceTransform((m_casco < 0.5).astype(np.uint8), cv2.DIST_L2, 5)[int(round(p3[1])), int(round(p3[0]))]), 1)}
pontos["pecas_sobre_as_estradas"] = round(float(((alfa > 0.15) & (m_red > 0.5)).sum() / max(1, (m_red > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
