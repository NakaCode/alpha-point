"""n2, "GOLD" / "SILVER" (o cético da reembalagem, out/_reembalagem/2026-11-18/zona-do-canal/cetico.md §4), com o título mais clicável do
cético embaixo: "Why This Strip of Panama Had a U.S. Governor Until 1979" (N1).

    python -X utf8 -B -P roteiros/zona-do-canal/miniatura/reembalagem-2026-11-18/n2.py           (da raiz do canal; sem rede)
    MINI_ENSAIO=1 ...                                                                           (grava em _bases/_tmp/, não na pasta)

O que se vê (o cético, §4):
- o mapa da n1: o istmo em relevo amarelo, o Caribe e o Pacífico em azul (com os rótulos pequenos), a Zona em VERMELHO (o polígono de 1947,
  com a junção do Madden e a generalização da B3), com o contorno branco e a sombra por fora;
- dois pontos, cada um com o anel na cor da sua palavra:
  - Balboa, no Pacífico (o Balboa Clubhouse da folha de 1936, o ponto da n1), com o anel amarelo e o rótulo "BALBOA" ("the permanent gold site at
    Balboa", roteiro l. 20);
  - Silver City, no Atlântico (lugares-1947.json, a folha AMS de 1947), com o anel prata e o rótulo "SILVER CITY" (a Rainbow City do gancho,
    chamada de Silver City no censo de 1950; roteiro l. 58);
- a caixa preta em cima à direita, com as duas palavras em duas linhas, sem aspas e sem "vs", e o sublinhado vermelho: "GOLD" em amarelo e
  "SILVER" em prata (#C9CED6);
- duas setas brancas, grossas e curvas: a de "SILVER" até Silver City e a de "GOLD" até Balboa.
A ORDEM DAS PALAVRAS (MINI_ORDEM): "sg" (a final) põe SILVER em cima e GOLD embaixo, na ordem do mapa (Silver City fica ao norte, no Caribe;
Balboa, ao sul, no Pacífico): a seta de SILVER sai da borda esquerda da caixa, na altura da palavra, e vai à esquerda; a de GOLD sai da borda de
baixo, sob a palavra, e desce. Com "gs" (GOLD em cima, como o cético escreveu), as duas saem da borda esquerda e se cruzam, ou a de GOLD sai da
borda de baixo, sob SILVER, e parece ser dela (o ensaio n2-gs, em _bases/_tmp/).
Sem ano, sem "U.S." e sem "American" na imagem.
O quadro (o da B3 alargado 1,12 vezes) e as rodadas estão em desenho.py; os ensaios, em _bases/_tmp/ (n2-e1, no quadro da B3; n2-e2, o final;
n2-gs, GOLD em cima).
"""
import json, math, os, sys
import numpy as np
import cv2
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import zona as Z
from desenho import ponta_no_ponto, ponto_anel, medir_pecas, QUADRO_N

NOME = os.environ.get("MINI_NOME", "n2")
ORDEM = os.environ.get("MINI_ORDEM", "sg")
A = Z.montar(QUADRO_N)
q, terra, mar, zona = A["q"], A["terra"], A["mar"], A["zona"]
img = Z.vermelho(A, A["img"].copy(), borda=M.env("MINI_Z_BORDA", 5))
medidas = dict(A["medidas"])
medidas["vermelho_zona"] = {"fracao_da_imagem": round(float((zona > 0.5).mean()), 4)}

# ── os dois lugares ──
ll_b, prop_b = Z.lugar(Z.L1936, "balboa-clubhouse-1936")
ll_s, prop_s = Z.lugar(Z.L1947, "silver-city-1947")
xb, yb = q.palco(*ll_b)
xs, ys = q.palco(*ll_s)
OURO = (255, 196, 46)
PRATA = (201, 206, 214)

# ── a caixa: em cima à direita ──
FS = M.env("MINI_FS", 280)
w_gold = ("GOLD", FS, 900, OURO)
w_silver = ("SILVER", FS, 900, PRATA)
linhas = [w_silver, w_gold] if ORDEM == "sg" else [w_gold, w_silver]
entre = [M.env("MINI_ENTRE", 40)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
larg, alt = M.medir_texto(linhas, entre)
bw = larg + 2 * pad_x
bx = M.env("MINI_BX", M.W - M.env("MINI_BMARG", 56) - bw)
by = M.env("MINI_BY", 40)
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)
y_silver = (caixas_l["SILVER"][1] + caixas_l["SILVER"][3]) / 2
x_gold = (caixas_l["GOLD"][0], caixas_l["GOLD"][2])

# ── as setas ──
R_MIOLO, ANEL = M.env("MINI_MIOLO_R", 11), M.env("MINI_ANEL", 11)
R_TOT = R_MIOLO + ANEL
FOLGA = R_TOT + M.env("MINI_FOLGA_PONTA", 12)
# SILVER: da borda esquerda da caixa, na altura da palavra, à esquerda e para baixo, até Silver City (chega por cima, pelo nordeste)
s0 = (caixa[0] + 8, y_silver if ORDEM == "sg" else y_silver)
s1 = (s0[0] - M.env("MINI_SC1_DX", 260), s0[1] + M.env("MINI_SC1_DY", 0))
s2 = (xs + M.env("MINI_SC2_DX", 170), ys + M.env("MINI_SC2_DY", -230))
s3 = ponta_no_ponto(s2, (xs, ys), FOLGA)
curva_s = M.bezier(s0, s1, s2, s3)
# GOLD: da borda de baixo da caixa, sob a palavra, curva por cima da terra a leste da Zona, até Balboa (a da n1)
g0 = (x_gold[0] + M.env("MINI_G0_FX", 0.35) * (x_gold[1] - x_gold[0]), caixa[3] - 6)
g1 = (g0[0] + M.env("MINI_GC1_DX", 60), g0[1] + M.env("MINI_GC1_DY", 330))
g2 = (xb + M.env("MINI_GC2_DX", 300), yb + M.env("MINI_GC2_DY", -170))
g3 = ponta_no_ponto(g2, (xb, yb), FOLGA)
curva_g = M.bezier(g0, g1, g2, g3)
curvas = [curva_s, curva_g]
img, comps, a_seta = M.desenhar_setas(img, curvas, w0=M.env("MINI_SETA_W0", 30), w1=M.env("MINI_SETA_W1", 60),
                                      cab_l=M.env("MINI_CAB_L", 130), cab_w=M.env("MINI_CAB_W", 176))
img, a_pb = ponto_anel(img, xb, yb, R_MIOLO, ANEL, OURO)
img, a_ps = ponto_anel(img, xs, ys, R_MIOLO, ANEL, PRATA)

# ── os rótulos pequenos (só leem a 1280) ──
PX_CID = M.env("MINI_CID_PX", 52)
itens = [("BALBOA", xb + M.env("MINI_BAL_DX", 30), yb + M.env("MINI_BAL_DY", 70), PX_CID, "lm"),
         ("SILVER CITY", xs + M.env("MINI_SCL_DX", -40), ys + M.env("MINI_SCL_DY", -50), PX_CID, "rs"),
         ("CARIBBEAN", *q.palco(M.env("MINI_CAR_LON", -80.22), M.env("MINI_CAR_LAT", 9.56)), M.env("MINI_MAR_PX", 58), "mm"),
         ("PACIFIC", *q.palco(M.env("MINI_PAC_LON", -79.15), M.env("MINI_PAC_LAT", 8.878)), M.env("MINI_MAR_PX", 58), "mm")]
img, caixas_rot, a_rot = M.rotulos(img, itens)

alfa = np.maximum.reduce([a_caixa, a_seta, a_pb, a_ps, a_rot])
pontos = dict(medidas)
pontos["texto"] = " / ".join(l[0] for l in linhas)
pontos["ordem"] = ORDEM
pontos["lugares"] = {
    "balboa": {"lonlat": list(ll_b), "palco": [round(xb, 1), round(yb, 1)], "anel": "amarelo %s" % (OURO,),
               "fonte": "lugares-1936.json › balboa-clubhouse-1936 (%s; %s)" % (prop_b["fonte_folha"], prop_b["incerteza"]),
               "dentro_da_zona_no_palco": bool(zona[int(round(yb)), int(round(xb))] > 0.5)},
    "silver_city": {"lonlat": list(ll_s), "palco": [round(xs, 1), round(ys, 1)], "anel": "prata %s" % (PRATA,),
                    "fonte": "lugares-1947.json › silver-city-1947 (folha AMS 1947, %s)" % prop_s["metodo"],
                    "dentro_da_zona_no_palco": bool(zona[int(round(ys)), int(round(xs))] > 0.5)},
    "ponto_raio_px": R_TOT}
pontos.update(medir_pecas(q, caixa, caixas_l, a_caixa, zona, terra, curvas, a_seta, comps, [(xs, ys), (xb, yb)], R_TOT, a_rot, caixas_rot))
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
