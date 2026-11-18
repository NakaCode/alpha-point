"""n1, "BORN HERE?" (o cético da reembalagem, out/_reembalagem/2026-11-18/zona-do-canal/cetico.md §4), com o título mais clicável do cético
embaixo: "Why This Strip of Panama Had a U.S. Governor Until 1979" (N1).

    python -X utf8 -B -P roteiros/zona-do-canal/miniatura/reembalagem-2026-11-18/n1.py           (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                                          (só o mapa, em _bases/_tmp/)
    MINI_ENSAIO=1 ...                                                                           (grava em _bases/_tmp/, não na pasta)

O que se vê (o cético, §4):
- o istmo em relevo amarelo e os dois mares em azul: o Caribe em cima à esquerda e o Pacífico embaixo à direita, com os rótulos pequenos
  "CARIBBEAN" e "PACIFIC" (só leem a 1280);
- a Zona do Canal em VERMELHO (o polígono da folha AMS de 1947, com a junção do Madden e a generalização da B3; os lagos e o canal ficam
  vermelhos, porque a Zona os incluía), com o contorno branco e a sombra por fora. Nada de bandeira, nada em ciano;
- um ponto branco de 34 px com contorno escuro em Balboa (o Balboa Clubhouse da folha de 1936, lugares-1936.json), com o rótulo "BALBOA";
- a caixa preta em cima à direita, sobre a terra a leste da Zona e o Caribe: "BORN" em branco e "HERE?" em amarelo, com o sublinhado vermelho;
- uma seta branca, grossa e curva, da borda de baixo da caixa até o ponto de Balboa, por cima da terra a leste da Zona.
Sem ano, sem "U.S." e sem "American" na imagem: o título já diz.
O quadro (o da B3 alargado 1,12 vezes) e as rodadas estão em desenho.py; os ensaios, em _bases/_tmp/ (n1-e1, no quadro da B3; n1-e2, o final).
"""
import json, math, os, sys
import numpy as np
import cv2
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import zona as Z
from desenho import ponta_no_ponto, medir_pecas, QUADRO_N

NOME = os.environ.get("MINI_NOME", "n1")
A = Z.montar(QUADRO_N)
q, terra, mar, zona = A["q"], A["terra"], A["mar"], A["zona"]
img = Z.vermelho(A, A["img"].copy(), borda=M.env("MINI_Z_BORDA", 5))
medidas = dict(A["medidas"])
medidas["vermelho_zona"] = {"fracao_da_imagem": round(float((zona > 0.5).mean()), 4)}
if os.environ.get("MINI_SO_MAPA"):
    Z.previa(img, "n1-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "vermelho_zona", "mar")}, ensure_ascii=False))
    sys.exit(0)

# ── Balboa: o ponto ──
ll_balboa, prop_balboa = Z.lugar(Z.L1936, "balboa-clubhouse-1936")
xb, yb = q.palco(*ll_balboa)
R_PONTO = M.env("MINI_PONTO_R", 17)

# ── a caixa: em cima à direita ──
linhas = [("BORN", M.env("MINI_FS_A", 230), 900, M.BRANCO), ("HERE?", M.env("MINI_FS_B", 300), 900, (255, 196, 46))]
entre = [M.env("MINI_ENTRE", 40)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
larg, alt = M.medir_texto(linhas, entre)
bw, bh = larg + 2 * pad_x, alt + 2 * pad_y + barra[0] + barra[1]
bx = M.env("MINI_BX", M.W - M.env("MINI_BMARG", 56) - bw)
by = M.env("MINI_BY", 40)
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

# ── a seta: da borda de baixo da caixa, curva, por cima da terra a leste da Zona, até o ponto de Balboa ──
p0 = (caixa[0] + M.env("MINI_S0_FX", 0.30) * (caixa[2] - caixa[0]), caixa[3] - 6)
c1 = (p0[0] + M.env("MINI_C1_DX", 60), p0[1] + M.env("MINI_C1_DY", 330))
c2 = (xb + M.env("MINI_C2_DX", 300), yb + M.env("MINI_C2_DY", -170))
p3 = ponta_no_ponto(c2, (xb, yb), R_PONTO + M.env("MINI_FOLGA_PONTA", 12))
curva = M.bezier(p0, c1, c2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 30), w1=M.env("MINI_SETA_W1", 60),
                                      cab_l=M.env("MINI_CAB_L", 130), cab_w=M.env("MINI_CAB_W", 176))
img, a_ponto = M.ponto(img, xb, yb, R_PONTO)

# ── os rótulos pequenos (só leem a 1280) ──
itens = [("BALBOA", xb + M.env("MINI_BAL_DX", 30), yb + M.env("MINI_BAL_DY", 70), M.env("MINI_CID_PX", 52), "lm"),
         ("CARIBBEAN", *q.palco(M.env("MINI_CAR_LON", -80.22), M.env("MINI_CAR_LAT", 9.56)), M.env("MINI_MAR_PX", 58), "mm"),
         ("PACIFIC", *q.palco(M.env("MINI_PAC_LON", -79.15), M.env("MINI_PAC_LAT", 8.878)), M.env("MINI_MAR_PX", 58), "mm")]
img, caixas_rot, a_rot = M.rotulos(img, itens)

alfa = np.maximum.reduce([a_caixa, a_seta, a_ponto, a_rot])
pontos = dict(medidas)
pontos["texto"] = "BORN / HERE?"
pontos["balboa"] = {"lonlat": list(ll_balboa), "palco": [round(xb, 1), round(yb, 1)], "fonte": "out/zona-do-canal/_media/geo/lugares-1936.json › "
                    "balboa-clubhouse-1936 (%s; %s)" % (prop_balboa["fonte_folha"], prop_balboa["incerteza"]),
                    "dentro_da_zona_no_palco": bool(zona[int(round(yb)), int(round(xb))] > 0.5)}
pontos.update(medir_pecas(q, caixa, caixas_l, a_caixa, zona, terra, [curva], a_seta, comps, [(xb, yb)], R_PONTO, a_rot, caixas_rot))
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
