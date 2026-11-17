"""A miniatura A do vídeo 7 (rio-columbia): "$37.6M A YEAR", no estilo das referências do Lucas (17/11/2026).

    python -X utf8 -B roteiros/rio-columbia/miniatura/base-A.py           (da raiz do canal; sem rede)
    MINI_K9=0 python -X utf8 -B roteiros/rio-columbia/miniatura/base-A.py  (sem a linha "Starting value, indexed to inflation")

O mapa é o de mapa.py (o mesmo da B): o Noroeste do Pacífico em relevo amarelo, o mar e os lagos em azul, a parte canadense da bacia
do Columbia em vermelho, o Arrow em ciano e a fronteira em branco fino. Por cima: "$37.6M" e "A YEAR" em vermelho numa caixa preta,
com a linha do K9 pequena, em branco, dentro da caixa (a Sala, 17/11/2026), e uma seta branca grossa e curva da caixa até o Arrow.
O que a versão de antes (commit ce3538b) tinha e esta não tem: o satélite, o laranja do canal, o anel, o rio até Portland e as pílulas.

Grava: miniatura-A-2560.jpg, miniatura-A-1280.jpg e A-pontos.json (aqui); A-previa-1280/320/168.png e A-ver.png em
out/rio-columbia/_tmp/miniatura/.
"""
import os, sys
import numpy as np
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

img, medidas, mascaras = M.montar_mapa()
img = M.paises(img, medidas, M.env("MINI_PAIS_X", 735))

# a caixa: "$37.6M" e "A YEAR" em vermelho; a linha do K9 em branco, pequena, sob o número
K9 = int(M.env("MINI_K9", 1))
FS = M.env("MINI_FS", 232)
linhas = [("$37.6M", FS, 900, M.TEXTO_VERMELHO), ("A YEAR", FS, 900, M.TEXTO_VERMELHO)]
entre = [M.env("MINI_ENTRE", 0.30) * FS]
if K9:
    linhas.append(("Starting value, indexed to inflation", M.env("MINI_FK", 44), 600, M.BRANCO))
    entre.append(M.env("MINI_K9_GAP", 34))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, M.env("MINI_BX", 64), M.env("MINI_BY", 64), linhas, 46, 40, entre)

# a seta: da borda direita da caixa (à altura de "$37.6M") até a margem oeste do Arrow, no meio do lago
ays, axs = np.nonzero(mascaras["arrow"] > 0.5)
y_alvo = float(np.percentile(ays, M.env("MINI_ALVO_P", 45)))
linha_alvo = axs[np.abs(ays - y_alvo) < 3]
x_alvo = float(linha_alvo.min()) - M.env("MINI_FOLGA", 30)
p3 = (x_alvo, y_alvo)
p0 = (caixa[2] + 26, (caixas_l["$37.6M"][1] + caixas_l["$37.6M"][3]) / 2)
p1 = (p0[0] + M.env("MINI_L1", 300), p0[1] - M.env("MINI_L1Y", 30))
p2 = (p3[0] - M.env("MINI_L2", 150), p3[1] - M.env("MINI_L2Y", 260))
img, comps, a_setas = M.desenhar_setas(img, [(p0, p1, p2, p3)])

alfa = np.maximum(a_caixa, a_setas)
pontos = dict(medidas)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l, "fonte": "Inter 900 a %d px (a maiúscula: %d px, %.1f px no 168)" % (FS, caixas_l["A YEAR"][3] - caixas_l["A YEAR"][1], (caixas_l["A YEAR"][3] - caixas_l["A YEAR"][1]) * 168 / M.W),
                   "k9": {"ligada": bool(K9), "fonte_px": M.env("MINI_FK", 44) if K9 else None,
                          "altura_no_1280_px": round((caixas_l["Starting value, indexed to inflation"][3] - caixas_l["Starting value, indexed to inflation"][1]) / 2, 1) if K9 else None}}
pontos["seta"] = {"de": [round(v) for v in p0], "ponta": [round(v) for v in p3], "comprimento_px": comps[0]}
pontos["pecas_sobre_a_bacia"] = round(float(((alfa > 0.15) & (mascaras["bacia"] > 0.5)).sum() / max(1, (mascaras["bacia"] > 0.5).sum())), 4)
pontos["pecas_sobre_o_arrow"] = round(float(((alfa > 0.15) & (mascaras["arrow"] > 0.5)).sum() / max(1, (mascaras["arrow"] > 0.5).sum())), 4)
M.salvar(img, "A", pontos, alfa)
