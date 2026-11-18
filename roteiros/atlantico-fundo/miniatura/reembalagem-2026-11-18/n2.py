"""n2, "NOT FISH?" (o mistério): a 2ª miniatura nova da reembalagem do vídeo 4 (`atlantico-fundo`, 18/11/2026), pelo laudo do cético
(out/_reembalagem/2026-11-18/atlantico-fundo/cetico.md, §4.2). SÓ FUNCIONA COM O N1, o título mais clicável do cético ("A 1964 Crew Counted 200
Fish Deep in the Atlantic. In 2019, None."), que vai embaixo dela na folha. Com o T1, o T2, o T3 ou o N2, "NOT FISH?" fica sem objeto.

    python -X utf8 -B -P roteiros/atlantico-fundo/miniatura/reembalagem-2026-11-18/n2.py          (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                                         (só o mapa, em _bases/_tmp/)

O que se vê:
- o mapa de atlantico.py no quadro do cético (Web Mercator, de 68,8 a 63,4 O, centro em 19,6 N; ~474 px por grau no palco de 2560 × 1440): a
  fossa (a isóbata de 7.000 m) em vermelho, quase de borda a borda, com o miolo de 8.000 m no vermelho × 0,6; a costa norte de Porto Rico, a
  ponta leste da República Dominicana e as Ilhas Virgens em amarelo, embaixo; nada em ciano; o mar azul com o relevo do fundo;
- a seta branca, grossa e curva, que sai da borda de baixo da caixa (sob "FISH?") e desce até o vermelho claro da parede norte da fossa, na
  metade oeste (entre 67,8 e 66,0 O), FORA do miolo escuro. A SETA É ESQUEMÁTICA: o disco não tem o ponto do mergulho de 1964 (a fonte, S06,
  dá só "7300 m in the Puerto Rico trench"); ela diz "nesta fossa", não "aqui". Fora do miolo porque 7.300 m fica entre a isóbata de 7.000 e a
  de 8.000;
- o rótulo pequeno TRENCH (Inter 800, 58 px), no vermelho claro do lobo sul da fossa: palavra genérica, nunca o nome;
- a caixa preta em cima, à esquerda, sobre o Atlântico aberto ao norte da fossa: "NOT" em branco e "FISH?" em amarelo, numa linha, com o
  sublinhado vermelho.
Nenhum ponto, nenhum nome de lugar, nenhum número de profundidade, nenhum bicho, nenhuma foto.
"""
import json, math, os, sys
import numpy as np
import cv2
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import atlantico as AT

NOME = os.environ.get("MINI_NOME", "n2")
AMARELO_TEXTO = (255, 196, 46)      # o do "VIPERS" e do "3 MILLION"

A = AT.montar(AT.QUADRO_N2, ciano_pr=False)
q, img = A["q"], A["img"].copy()
m7, m8, terra = A["m7"], A["m8"], A["terra"]
medidas = dict(A["medidas"])

if os.environ.get("MINI_SO_MAPA"):
    AT.previa(img, "n2-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "vermelho_fossa")}, ensure_ascii=False))
    sys.exit(0)

# ── o rótulo TRENCH: branco, no vermelho claro do lobo sul da fossa ──
PX_ROT = M.env("MINI_ROT_PX", 58)
xt, yt = q.palco(M.env("MINI_TR_LON", -66.35), M.env("MINI_TR_LAT", 19.25))
TR_GRAUS = M.env("MINI_TR_GRAUS", 0.0)
img, caixas_rot, a_rot = M.rotulos(img, [("TRENCH", xt, yt, PX_ROT, "mm", TR_GRAUS)] if TR_GRAUS else [("TRENCH", xt, yt, PX_ROT, "mm")])

# ── a caixa: em cima, à esquerda, sobre o Atlântico aberto; "NOT " em branco e "FISH?" em amarelo, numa linha, com o sublinhado vermelho ──
FS = M.env("MINI_FS", 250)
linhas = [([("NOT ", M.BRANCO), ("FISH?", AMARELO_TEXTO)], FS, 900, M.BRANCO)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, M.env("MINI_BX", 51), M.env("MINI_BY", 44), linhas, pad_x, pad_y, [], barra=barra)
f = M.fonte(FS * M.K, 900, 32)
x_fish0 = caixa[0] + pad_x + f.getlength("NOT ") / M.K
x_fish1 = caixa[0] + pad_x + f.getlength("NOT FISH?") / M.K

# ── a seta: da borda de baixo da caixa, sob "FISH?", em curva até o vermelho claro da parede norte, na lon MINI_ALVO_LON (fora do miolo) ──
ALVO_LON = M.env("MINI_ALVO_LON", -67.6)
xs = int(round(q.palco(ALVO_LON, 19.7)[0]))
col7 = np.nonzero(m7[:, xs] > 0.5)[0]
col8 = np.nonzero(m8[:, xs] > 0.5)[0]
y7, y8 = int(col7.min()), int(col8.min())            # o topo do vermelho e o do miolo, nessa coluna
p3 = (float(xs), y7 + M.env("MINI_PONTA_F", 0.5) * (y8 - y7))
p0 = (x_fish0 + M.env("MINI_S0_F", 0.45) * (x_fish1 - x_fish0), caixa[3] + M.env("MINI_S0_DY", 30))
L = math.dist(p0, p3)
# os controles: desce reto da caixa e chega pelo nordeste (~38° abaixo da horizontal), com a cabeça sobre o mar e só a ponta no vermelho. A 1ª
# rodada (_bases/_tmp/n2-e1-*: C1 0,05/0,40, C2 0,42/0,12) chegava quase na horizontal, e a cabeça cobria 12,6 % de miolo
p1 = (p0[0] + M.env("MINI_C1_DX", 0.0) * L, p0[1] + M.env("MINI_C1_DY", 0.30) * L)
p2 = (p3[0] + M.env("MINI_C2_DX", 0.38) * L, p3[1] - M.env("MINI_C2_DY", 0.30) * L)
curva = M.bezier(p0, p1, p2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 40), w1=M.env("MINI_SETA_W1", 84),
                                      cab_l=M.env("MINI_CAB_L", 170), cab_w=M.env("MINI_CAB_W", 236))

# ── as medidas ──
alfa = np.maximum.reduce([a_caixa, a_seta, a_rot])
pontos = dict(medidas)
pontos["texto"] = "NOT FISH?"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
sel_c = a_caixa > 0.15
dist_7 = cv2.distanceTransform((m7 < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
dist_terra = cv2.distanceTransform((terra < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
# a altura da maiúscula de "FISH?" (a mesma da linha: a caixa_texto mede o "H")
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fish_x_palco": [round(x_fish0), round(x_fish1)],
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "distancia_ao_vermelho_px": round(float(dist_7[sel_c].min()), 1),
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4)}
ponta = curva[-1]
lon_p, lat_p = M.lonlat(q, *ponta)
pontos["seta"] = {"tipo": "ESQUEMÁTICA: 'nesta fossa', não 'aqui' (o disco não tem o ponto do mergulho de 1964; S06: '7300 m in the Puerto Rico "
                          "trench')", "comprimento_px": comps, "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                  "ponta_lonlat": [round(lon_p, 4), round(lat_p, 4)], "coluna_da_ponta": {"x": xs, "topo_do_vermelho_y": y7, "topo_do_miolo_y": y8},
                  "ponta_no_vermelho": bool(m7[int(round(ponta[1])), int(round(ponta[0]))] > 0.5),
                  "ponta_no_miolo": bool(m8[int(round(ponta[1])), int(round(ponta[0]))] > 0.5),
                  "Z_gebco_na_ponta_m": round(float(A["Z"][int(round(ponta[1])), int(round(ponta[0]))])),
                  "sobre_o_miolo": round(float(((a_seta > 0.3) & (m8 > 0.5)).sum() / max(1, (a_seta > 0.3).sum())), 4),
                  "sobre_o_vermelho": round(float(((a_seta > 0.3) & (m7 > 0.5)).sum() / max(1, (a_seta > 0.3).sum())), 4)}
sel_r = a_rot > 0.15
pontos["rotulo_trench"] = {"caixa": caixas_rot["TRENCH"], "fonte_px": PX_ROT, "graus": TR_GRAUS,
                           "sobre_o_vermelho": round(float((sel_r & (m7 > 0.5)).sum() / max(1, sel_r.sum())), 4),
                           "sobre_o_miolo": round(float((sel_r & (m8 > 0.5)).sum() / max(1, sel_r.sum())), 4)}
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m7 > 0.5)).sum() / max(1, (m7 > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
