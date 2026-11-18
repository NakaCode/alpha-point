"""RESERVA, "SPIDER DEATHS: ZERO" (era a m1 do pedido, pautas/australia-animais/_trabalho/pedido-miniaturas.md; a primeira do §8 da pauta),
com o título do pedido, "Why So Few People Die From Australia's Deadly Animals", embaixo. Saiu do teste depois do cético (K2: o fato é de um
curto recente, "In 21 Years, Australia's Spiders Killed No One. Not One"); a Sala mandou guardar numa folha de reserva o que já estava feito.
Este script era o m1.py; só mudaram o nome (e o NOME de saída, "reserva-aranhas") e este texto. O quadro é o do continente
(australia.QUADRO_CONTINENTE), com as divisas dos estados.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/reserva-aranhas.py           (da raiz do canal; sem rede)

- o mapa comum (australia.py): o continente inteiro em relevo amarelo, o mar azul, as divisas dos estados em branco fino;
- New South Wales em VERMELHO (o STE 2021 do ABS), com o relevo por baixo, o contorno branco e a sombra por fora. O ACT e o Jervis Bay ficam de
  fora (são outros territórios, e o ABS os recorta da NSW). O vermelho fica só na NSW: a fonte diz "NSW e o sul de Queensland" (Isbister 2005), e
  o desenhista não inventa o limite do sul de Queensland (pauta §8, o risco);
- a Grande Sydney em CIANO (a GCCSA 1GSYD do ABS), com o relevo pintado em ciano e misturado ao amarelo (o método da Utah da Strip e da
  Amazônia), contorno branco; o rótulo branco "SYDNEY" ao lado, no mar;
- a seta branca, grossa e curva, da caixa até a Grande Sydney;
- a caixa preta, à esquerda: "SPIDER DEATHS" em branco, numa linha menor, e "ZERO" em amarelo, grande, com o sublinhado vermelho.
"""
import json, math, os, sys
import numpy as np
import cv2
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU

NOME = os.environ.get("MINI_NOME", "reserva-aranhas")
A = AU.montar()
q, img, rel, terra, mar = A["q"], A["img"].copy(), A["rel"], A["terra"], A["mar"]

# ── a NSW e a Grande Sydney ──
nsw = A["estados_s"]["New South Wales"]
syd = A["sydney"].simplify(AU.SIMPL / 3, preserve_topology=True)
m_nsw = q.mascara(nsw)
m_syd = q.mascara(syd)
img = M.sombra_fora(img, m_nsw, terra, sig=M.env("MINI_SOMBRA_SIG", 14), forca=M.env("MINI_SOMBRA", 1.0))
img = img * (1 - m_nsw[..., None]) + rel.vermelho() * m_nsw[..., None]
SY_MIX = M.env("MINI_SY_MIX", 0.92)
ciano_rel = rel.cor(M.CIANO, M.env("MINI_SY_SOMBRA", 0.42), (0.55, 0.85, 1.0), (225, 252, 255), M.env("MINI_SY_LUZ", 0.45))
img = img * (1 - SY_MIX * m_syd[..., None]) + ciano_rel * (SY_MIX * m_syd[..., None])
img = M.compor(img, M.BRANCO, M.borda_de(m_nsw, M.env("MINI_NSW_BORDA", 5)) * terra)
img = M.compor(img, M.BRANCO, M.borda_de(m_syd, M.env("MINI_SY_BORDA", 4)) * terra)

ys_, xs_ = np.nonzero(m_syd > 0.5)
c_syd = (float(xs_.mean()), float(ys_.mean()))
caixa_syd = [int(xs_.min()), int(ys_.min()), int(xs_.max()), int(ys_.max())]
medidas = dict(A["medidas"])
medidas["vermelho_nsw"] = {"fracao_da_imagem": round(float((m_nsw > 0.5).mean()), 4),
                           "fonte": "ABS, ASGS Ed. 3, STE 2021 'New South Wales' (sem o ACT e o Jervis Bay, que o ABS recorta)"}
medidas["ciano_grande_sydney"] = {"fracao_da_imagem": round(float((m_syd > 0.5).mean()), 5), "mistura": SY_MIX,
                                  "caixa_palco": caixa_syd, "centro_palco": [round(v, 1) for v in c_syd],
                                  "fonte": "ABS, ASGS Ed. 3, GCCSA 2021 1GSYD (Greater Sydney)"}

if os.environ.get("MINI_SO_MAPA"):
    AU.previa(img, "reserva-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "vermelho_nsw", "ciano_grande_sydney")}, ensure_ascii=False))
    sys.exit(0)

# ── o rótulo SYDNEY: branco, à direita da Grande Sydney, no mar ──
PX_ROT = M.env("MINI_ROT_PX", 64)
xr, yr = caixa_syd[2] + M.env("MINI_SY_DX", 34), c_syd[1] + M.env("MINI_SY_DY", 0)
img, caixas_rot, a_rot = M.rotulos(img, [("SYDNEY", xr, yr, PX_ROT, "lm")])

# ── a caixa: à esquerda, sobre a Austrália Ocidental e o Índico ──
linhas = [("SPIDER DEATHS", M.env("MINI_FS_A", 140), 900, M.BRANCO), ("ZERO", M.env("MINI_FS_B", 300), 900, (255, 196, 46))]
entre = [M.env("MINI_ENTRE", 40)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
bx, by = M.env("MINI_BX", 90), M.env("MINI_BY", 470)
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

# ── a seta: da borda direita da caixa até a Grande Sydney, curva por cima; a ponta para na borda oeste do ciano ──
p0 = (caixa[2] + M.env("MINI_S0_DX", 24), caixa[1] + M.env("MINI_S0_FY", 0.30) * (caixa[3] - caixa[1]))
alvo = c_syd
# a ponta: anda do centro da Grande Sydney para trás, na direção de chegada, até sair do ciano, e recua RECUO px
ang = math.radians(M.env("MINI_CHEGADA_GRAUS", 200.0))      # de onde a seta chega (0 = do leste; 180 = do oeste; 200 = do oeste-sudoeste)
ux, uy = math.cos(ang), -math.sin(ang)
t = 0.0
while m_syd[int(round(alvo[1] + uy * t)), int(round(alvo[0] + ux * t))] > 0.5:
    t += 1.0
RECUO = M.env("MINI_RECUO", 10)
p3 = (alvo[0] + ux * (t + RECUO), alvo[1] + uy * (t + RECUO))
L = math.dist(p0, p3)
p1 = (p0[0] + M.env("MINI_C1_FX", 0.35) * (p3[0] - p0[0]), p0[1] - M.env("MINI_C1_FY", 0.32) * L)
p2 = (p3[0] + ux * M.env("MINI_C2_D", 0.30) * L, p3[1] + uy * M.env("MINI_C2_D", 0.30) * L)
curva = M.bezier(p0, p1, p2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 30), w1=M.env("MINI_SETA_W1", 62),
                                      cab_l=M.env("MINI_CAB_L", 140), cab_w=M.env("MINI_CAB_W", 190))

alfa = np.maximum.reduce([a_caixa, a_seta, a_rot])
pontos = dict(medidas)
pontos["texto"] = "SPIDER DEATHS / ZERO"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
sel_c = a_caixa > 0.15
dist_nsw = cv2.distanceTransform((m_nsw < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
au_wa = q.mascara(A["estados_s"]["Western Australia"])
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 3),
                   "fracao_da_australia_ocidental_coberta": round(float((sel_c & (au_wa > 0.5)).sum() / max(1, (au_wa > 0.5).sum())), 3),
                   "fracao_da_australia_coberta": round(float((sel_c & (A["m_au"] > 0.5)).sum() / max(1, (A["m_au"] > 0.5).sum())), 3),
                   "distancia_ao_vermelho_px": round(float(dist_nsw[sel_c].min()), 1)}
pontos["seta"] = {"tipo": "esquemática: liga a caixa à Grande Sydney (não é rota)", "comprimento_px": comps,
                  "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                  "ponta_a_px_do_ciano": round(float(cv2.distanceTransform((m_syd < 0.5).astype(np.uint8), cv2.DIST_L2, 5)[int(round(p3[1])), int(round(p3[0]))]), 1),
                  "fracao_sobre_o_vermelho": round(float(((a_seta > 0.15) & (m_nsw > 0.5)).sum() / max(1, (a_seta > 0.15).sum())), 4)}
pontos["rotulos"] = caixas_rot
sel_r = a_rot > 0.15
pontos["rotulo_sydney"] = {"sobre_o_mar": round(float((sel_r & (mar > 0.5)).sum() / max(1, sel_r.sum())), 4), "fonte_px": PX_ROT,
                           "distancia_ao_ciano_px": round(float(cv2.distanceTransform((m_syd < 0.5).astype(np.uint8), cv2.DIST_L2, 5)[sel_r].min()), 1)}
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_nsw > 0.5)).sum() / max(1, (m_nsw > 0.5).sum())), 4)
pontos["pecas_sobre_o_ciano"] = round(float(((alfa > 0.15) & (m_syd > 0.5)).sum() / max(1, (m_syd > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
