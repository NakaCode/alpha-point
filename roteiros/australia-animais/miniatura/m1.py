"""m1, "1 IN 3 MILLION" (a reserva do §8 da pauta, que a Sala pôs como a primeira depois do cético, K2: "SPIDER DEATHS: ZERO" e "NOT THE KILLER"
colidem com vídeos recentes), com o título "Australia Has the Venom. Why Doesn't It Have the Deaths?" embaixo.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/m1.py           (da raiz do canal; sem rede)

O que se vê (pauta §8, item 3):
- o continente inteiro e a Tasmânia em VERMELHO: toda a terra da Austrália (o STE 2021 do ABS, todos os estados e territórios), com o relevo
  por baixo, o contorno branco e a sombra por fora. O número é do país todo: nada em ciano ("um segundo destaque inventaria um lugar");
- a Nova Guiné e as ilhas da Indonésia em amarelo, no alto (o Natural Earth); o mar azul;
- a caixa preta, sobre o oceano, embaixo à esquerda: "1 IN" em branco, pequeno, e "3 MILLION" em amarelo, grande, com o sublinhado vermelho;
- uma seta curta, branca, da caixa ao continente.

O quadro não é o do continente da reserva (australia.QUADRO_CONTINENTE): vai de 47 S a 7,5 S, centrado em 125,2 E (de ~84,4 a ~166,0 E), para a
caixa caber no mar embaixo da costa sul da Austrália Ocidental sem cobrir o vermelho (no quadro de 45 S, a caixa de duas linhas encostava no cabo
Leeuwin e em Albany; de 46,5 S, ficava a 19 px do vermelho). A borda direita fica antes de 166,4 E, para a Nova Zelândia não entrar. Usa as bases
da GIBS do recorte maior (asia-*), que vão a 72 E. O mar é mais claro que o da reserva (0,92 contra 0,78): com o continente inteiro em vermelho, o
quadro é quase todo azul e vermelho, e a luminância média caía a 77.

As rodadas (em _bases/_tmp/): e1, a seta curta saía da borda de cima da caixa e virava um gancho; e2, a seta sai da borda direita da caixa e
sobe curva até a Grande Baía Australiana; e3, o quadro desce a 47 S, "1 IN" sobe de 140 para 156 px e o mar clareia.
"""
import json, math, os, sys
import numpy as np
import cv2
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU

NOME = os.environ.get("MINI_NOME", "m1")
QUADRO = (-47.0, -7.5, 125.2)
A = AU.montar(QUADRO, bases="asia", divisas=False, mar_a=0.92)
q, img, rel, terra, mar = A["q"], A["img"].copy(), A["rel"], A["terra"], A["mar"]
m_au = A["m_au"]

# ── a Austrália em vermelho: a sombra por fora (sobre o mar também: é uma ilha), o relevo vermelho, o contorno branco em volta da costa (só nas
# manchas de pelo menos ILHOTA px: sem isso, cada ilhota longe da costa, como Christmas, Cocos e Lord Howe, viraria um ponto branco) ──
ILHOTA = M.env("MINI_ILHOTA_PX", 150)
img = M.sombra_fora(img, m_au, np.ones_like(terra), sig=M.env("MINI_SOMBRA_SIG", 16), forca=M.env("MINI_SOMBRA", 1.0))
img = img * (1 - m_au[..., None]) + rel.vermelho() * m_au[..., None]
m_cont = AU.sem_ilhotas(m_au, ILHOTA)
borda = M.borda_de(m_cont, M.env("MINI_AU_BORDA", 5))
img = M.compor(img, M.BRANCO, borda)

medidas = dict(A["medidas"])
medidas["vermelho_australia"] = {"fracao_da_imagem": round(float((m_au > 0.5).mean()), 4),
                                 "fonte": "ABS, ASGS Ed. 3, STE 2021: a união de todos os estados e territórios (com a Tasmânia e os territórios externos)",
                                 "contorno": "branco, %d px, em volta das manchas de pelo menos %d px" % (M.env("MINI_AU_BORDA", 5), ILHOTA)}

if os.environ.get("MINI_SO_MAPA"):
    AU.previa(img, "m1-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "vermelho_australia", "mar")}, ensure_ascii=False))
    sys.exit(0)

# ── a caixa: embaixo à esquerda, no mar, sob a costa sul da Austrália Ocidental ──
linhas = [("1 IN", M.env("MINI_FS_A", 156), 900, M.BRANCO), ("3 MILLION", M.env("MINI_FS_B", 226), 900, (255, 196, 46))]
entre = [M.env("MINI_ENTRE", 36)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
larg, alt = M.medir_texto(linhas, entre)
bx = M.env("MINI_BX", 56)
by = M.env("MINI_BY", M.H - 34 - (alt + 2 * pad_y + barra[0] + barra[1]))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

# ── a seta curta: sai da borda direita da caixa, na altura do "1 IN", e sobe curva até a costa da Grande Baía Australiana (a ponta entra 60 px no vermelho) ──
p0 = (caixa[0] + M.env("MINI_S0_FX", 1.0) * (caixa[2] - caixa[0]), caixa[1] - M.env("MINI_S0_DY", -150))
alvo = (M.env("MINI_ALVO_LON", 127.5), M.env("MINI_ALVO_LAT", -30.5))     # um ponto no interior, sobre a Grande Baía Australiana
ax, ay = q.palco(*alvo)
# a ponta: anda do alvo para trás, na direção de p0, até sair do vermelho, e recua RECUO px
ux, uy = (p0[0] - ax), (p0[1] - ay)
n = math.hypot(ux, uy)
ux, uy = ux / n, uy / n
t = 0.0
while m_au[int(round(ay + uy * t)), int(round(ax + ux * t))] > 0.5:
    t += 1.0
RECUO = M.env("MINI_RECUO", -60)        # negativo: a ponta entra no vermelho (a seta "cai" no continente)
p3 = (ax + ux * (t + RECUO), ay + uy * (t + RECUO))
L = math.dist(p0, p3)
p1 = (p0[0] + M.env("MINI_C1_DX", 0.45) * L, p0[1] - M.env("MINI_C1_DY", 0.05) * L)
p2 = (p3[0] - M.env("MINI_C2_DX", 0.0) * L, p3[1] + M.env("MINI_C2_DY", 0.40) * L)
curva = M.bezier(p0, p1, p2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 30), w1=M.env("MINI_SETA_W1", 60),
                                      cab_l=M.env("MINI_CAB_L", 130), cab_w=M.env("MINI_CAB_W", 176))

alfa = np.maximum.reduce([a_caixa, a_seta])
pontos = dict(medidas)
pontos["texto"] = "1 IN / 3 MILLION"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
sel_c = a_caixa > 0.15
dist_au = cv2.distanceTransform((m_au < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                   "distancia_ao_vermelho_px": round(float(dist_au[sel_c].min()), 1)}
pontos["seta"] = {"tipo": "curta, da caixa ao continente (não é rota)", "comprimento_px": comps,
                  "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                  "ponta_sobre_o_vermelho": bool(m_au[int(round(p3[1])), int(round(p3[0]))] > 0.5),
                  "fracao_sobre_o_vermelho": round(float(((a_seta > 0.15) & (m_au > 0.5)).sum() / max(1, (a_seta > 0.15).sum())), 4)}
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_au > 0.5)).sum() / max(1, (m_au > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
