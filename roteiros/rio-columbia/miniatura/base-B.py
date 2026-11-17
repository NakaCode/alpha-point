"""A miniatura B do vídeo 7 (rio-columbia): "WHY?", no estilo das referências do Lucas (17/11/2026; a de Washington da The Geo Lens).

    python -X utf8 -B roteiros/rio-columbia/miniatura/base-B.py          (da raiz do canal; sem rede)

O mapa é o de mapa.py (o mesmo da A): o Noroeste do Pacífico em relevo amarelo, o mar e os lagos em azul, a parte canadense da bacia
do Columbia em vermelho, o Arrow em ciano e a fronteira em branco fino. Por cima: "WHY?" em vermelho numa caixa preta, à esquerda, e
duas setas brancas grossas e curvas, uma saindo de cima e outra de baixo da caixa, apontando o Arrow. O teste do YouTube mede só o texto.
O que a versão de antes (commit ce3538b) tinha e esta não tem: o satélite do Arrow, a lupa com o corte do lago e o anel.

Grava: miniatura-B-2560.jpg, miniatura-B-1280.jpg e B-pontos.json (aqui); B-previa-1280/320/168.png e B-ver.png em
out/rio-columbia/_tmp/miniatura/.
"""
import os, sys
import numpy as np
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

img, medidas, mascaras = M.montar_mapa()
img = M.paises(img, medidas, M.env("MINI_PAIS_X", 735))

FS = M.env("MINI_FS", 290)
by = M.env("MINI_BY", 580)
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, M.env("MINI_BX", 64), by, [("WHY?", FS, 900, M.TEXTO_VERMELHO)], 54, 48, [], barra=(round(0.075 * FS), round(0.10 * FS), M.TEXTO_VERMELHO))

# as duas setas: da borda de cima e da de baixo da caixa, curvando até a margem oeste do Arrow (no terço de cima e no de baixo do lago)
ays, axs = np.nonzero(mascaras["arrow"] > 0.5)
setas, pontas = [], []
for p_alvo, de_cima in ((M.env("MINI_ALVO_CIMA", 22), True), (M.env("MINI_ALVO_BAIXO", 80), False)):
    y_alvo = float(np.percentile(ays, p_alvo))
    x_alvo = float(axs[np.abs(ays - y_alvo) < 3].min()) - M.env("MINI_FOLGA", 30)
    p3 = (x_alvo, y_alvo)
    xs = caixa[0] + M.env("MINI_SAI", 0.62) * (caixa[2] - caixa[0])
    if de_cima:
        p0 = (xs, caixa[1] - 24)
        p1 = (xs + 20, p0[1] - M.env("MINI_L1", 230))
        p2 = (p3[0] - M.env("MINI_L2", 260), p3[1] - M.env("MINI_L2Y", 40))
    else:
        p0 = (xs, caixa[3] + 24)
        p1 = (xs + 20, p0[1] + M.env("MINI_L1", 230))
        p2 = (p3[0] - M.env("MINI_L2", 260), p3[1] + M.env("MINI_L2Y", 40))
    setas.append((p0, p1, p2, p3))
    pontas.append({"de": [round(v) for v in p0], "ponta": [round(v) for v in p3]})
img, comps, a_setas = M.desenhar_setas(img, setas)
for p, c in zip(pontas, comps):
    p["comprimento_px"] = c

alfa = np.maximum(a_caixa, a_setas)
pontos = dict(medidas)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "fonte": "Inter 900 a %d px (a maiúscula: %d px, %.1f px no 168)" % (FS, caixas_l["WHY?"][3] - caixas_l["WHY?"][1], (caixas_l["WHY?"][3] - caixas_l["WHY?"][1]) * 168 / M.W)}
pontos["setas"] = pontas
pontos["pecas_sobre_a_bacia"] = round(float(((alfa > 0.15) & (mascaras["bacia"] > 0.5)).sum() / max(1, (mascaras["bacia"] > 0.5).sum())), 4)
pontos["pecas_sobre_o_arrow"] = round(float(((alfa > 0.15) & (mascaras["arrow"] > 0.5)).sum() / max(1, (mascaras["arrow"] > 0.5).sum())), 4)
M.salvar(img, "B", pontos, alfa)
