"""n1, "83 MILES" (o lugar): a 1ª miniatura nova da reembalagem do vídeo 4 (`atlantico-fundo`, 18/11/2026), pelo laudo do cético
(out/_reembalagem/2026-11-18/atlantico-fundo/cetico.md, §4.2). Na folha, com o título mais clicável do cético embaixo ("A 1964 Crew Counted 200
Fish Deep in the Atlantic. In 2019, None."). O cético: serve ao N1, ao N2 e ao T1; NÃO ao T2, que já diz "83 Miles".

    python -X utf8 -B -P roteiros/atlantico-fundo/miniatura/reembalagem-2026-11-18/n1.py          (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                                         (só o mapa, em _bases/_tmp/)

O que se vê:
- o mapa de atlantico.py no quadro do cético (Web Mercator, de 71,0 a 64,2 O, centro em 19,25 N; ~376 px por grau no palco de 2560 × 1440):
  a fossa (a isóbata de 7.000 m) em vermelho, com o miolo de 8.000 m no vermelho × 0,6; Porto Rico (o Census, com as ilhas) em ciano; o resto
  da terra (a República Dominicana, as Ilhas Virgens) em amarelo; o mar azul com o relevo do fundo;
- o ponto branco de 44 px (contorno escuro de 6 px) no ponto mais fundo do Atlântico (19,712 N; 67,311 O; F10);
- a linha da medida, branca e tracejada (16 px; traço de 40, vão de 24), do ponto até a costa de Aguadilla (18,513 N; 67,1145 O; F04), com
  um ponto branco de 28 px na costa: 83,46 mi pela geodésica de Vincenty (a voz: "About 83 miles off Puerto Rico", aos 0,0 s);
- a seta branca, grossa e curva, da borda direita da caixa ao ponto, chegando pelo noroeste, sobre o mar aberto; a ponta para a ~30 px do
  ponto;
- o rótulo pequeno TRENCH (Inter 800, 58 px), no vermelho do lobo sul da fossa, longe da linha e da seta: palavra genérica, nunca o nome;
- a caixa preta em cima, à esquerda: "83" em amarelo e "MILES" em branco, em duas linhas, com o sublinhado vermelho.
Nenhum nome de lugar, nenhum número de profundidade, nenhum bicho, nenhuma foto.
"""
import json, math, os, sys
import numpy as np
import cv2
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import atlantico as AT

NOME = os.environ.get("MINI_NOME", "n1")
AMARELO_TEXTO = (255, 196, 46)      # o do "VIPERS" e do "3 MILLION" (roteiros/australia-animais/miniatura/m2.py, m1.py)

A = AT.montar(AT.QUADRO_N1, ciano_pr=True)
q, img = A["q"], A["img"].copy()
m7, m8, m_pr, terra = A["m7"], A["m8"], A["m_pr"], A["terra"]
xa, ya = q.palco(*A["anel"])
xc, yc = q.palco(*A["costa"])
medidas = dict(A["medidas"])

if os.environ.get("MINI_SO_MAPA"):
    AT.previa(img, "n1-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "vermelho_fossa", "porto_rico")}, ensure_ascii=False))
    sys.exit(0)

# ── o rótulo TRENCH: branco, no vermelho claro do lobo sul da fossa (66,5 a 65,8 O), a leste da linha da medida ──
PX_ROT = M.env("MINI_ROT_PX", 58)
xt, yt = q.palco(M.env("MINI_TR_LON", -66.05), M.env("MINI_TR_LAT", 19.33))
TR_GRAUS = M.env("MINI_TR_GRAUS", 0.0)
img, caixas_rot, a_rot = M.rotulos(img, [("TRENCH", xt, yt, PX_ROT, "mm", TR_GRAUS)] if TR_GRAUS else [("TRENCH", xt, yt, PX_ROT, "mm")])

# ── a caixa: em cima, à esquerda, no Atlântico ao norte da República Dominicana; "83" em amarelo, "MILES" em branco, o sublinhado vermelho ──
# "MILES" a 212 px (e não os ~200 do cético): a 200, a maiúscula dava 9,6 px no 168 (_bases/_tmp/n1-e1-*); a 212, 10,2
linhas = [("83", M.env("MINI_FS_A", 300), 900, AMARELO_TEXTO), ("MILES", M.env("MINI_FS_B", 212), 900, M.BRANCO)]
entre = [M.env("MINI_ENTRE", 40)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, M.env("MINI_BX", 51), M.env("MINI_BY", 48), linhas, pad_x, pad_y, entre, barra=barra)

# ── a linha da medida: do ponto à costa de Aguadilla (começa fora do ponto; o ponto da costa vai por cima da ponta) ──
R_PONTO, B_PONTO = 22, 6
ux, uy = (xc - xa), (yc - ya)
n = math.hypot(ux, uy)
ux, uy = ux / n, uy / n
ini = (xa + ux * (R_PONTO + B_PONTO + 10), ya + uy * (R_PONTO + B_PONTO + 10))
img, comp_linha, a_linha = M.tracejado(img, ini, (xc, yc), w=M.env("MINI_LINHA_W", 16), traco=M.env("MINI_TRACO", 40), vao=M.env("MINI_VAO", 24))
img, a_pc = M.ponto(img, xc, yc, r=14, borda=5)

# ── a seta: da borda direita da caixa (na altura do "83") ao ponto, chegando pelo noroeste; a ponta a ~30 px da borda do ponto ──
FOLGA_PONTA = M.env("MINI_FOLGA_PONTA", 30)
ang = math.radians(M.env("MINI_CHEGADA_GRAUS", 45))           # 45: vem do noroeste (o vetor da chegada aponta para o sudeste)
d_ponta = R_PONTO + B_PONTO + FOLGA_PONTA
p3 = (xa - d_ponta * math.cos(ang), ya - d_ponta * math.sin(ang))
p0 = (caixa[2] + M.env("MINI_S0_DX", 34), caixa[1] + M.env("MINI_S0_FY", 0.30) * (caixa[3] - caixa[1]))
L = math.dist(p0, p3)
p1 = (p0[0] + M.env("MINI_C1", 0.42) * L, p0[1] - M.env("MINI_C1_UP", 0.08) * L)
p2 = (p3[0] - M.env("MINI_C2", 0.38) * L * math.cos(ang), p3[1] - M.env("MINI_C2", 0.38) * L * math.sin(ang))
curva = M.bezier(p0, p1, p2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 40), w1=M.env("MINI_SETA_W1", 84),
                                      cab_l=M.env("MINI_CAB_L", 170), cab_w=M.env("MINI_CAB_W", 236))

# ── o ponto mais fundo, por cima de tudo ──
img, a_p = M.ponto(img, xa, ya, r=R_PONTO, borda=B_PONTO)

# ── as medidas ──
alfa = np.maximum.reduce([a_caixa, a_seta, a_rot, a_linha, a_pc, a_p])
pontos = dict(medidas)
pontos["texto"] = "83 / MILES"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
sel_c = a_caixa > 0.15
dist_7 = cv2.distanceTransform((m7 < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
dist_terra = cv2.distanceTransform((terra < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "distancia_ao_vermelho_px": round(float(dist_7[sel_c].min()), 1),
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                   "distancia_a_terra_px": round(float(dist_terra[sel_c].min()), 1)}
dist_m = AT.vincenty(A["anel"][0], A["anel"][1], A["costa"][0], A["costa"][1])
pontos["linha_da_medida"] = {"de_lonlat": list(A["anel"]), "ate_lonlat": list(A["costa"]), "palco_de": [round(xa, 1), round(ya, 1)],
                             "palco_ate": [round(xc, 1), round(yc, 1)], "comprimento_desenhado_px": comp_linha,
                             "do_centro_do_ponto_a_costa_px": round(math.dist((xa, ya), (xc, yc))),
                             "vincenty_km": round(dist_m / 1000, 2), "vincenty_mi": round(dist_m / 1609.344, 2),
                             "traco": {"largura": M.env("MINI_LINHA_W", 16), "traco": M.env("MINI_TRACO", 40), "vao": M.env("MINI_VAO", 24)}}
ponta = curva[-1]
cruza_linha = bool(((a_seta > 0.3) & (a_linha > 0.3)).any())
pontos["seta"] = {"comprimento_px": comps, "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                  "ponta_ate_o_centro_do_ponto_px": round(math.dist(ponta, (xa, ya)), 1),
                  "ponta_ate_a_borda_do_ponto_px": round(math.dist(ponta, (xa, ya)) - R_PONTO - B_PONTO, 1),
                  "chegada": "do noroeste (%.0f°)" % math.degrees(ang), "cruza_a_linha_da_medida": cruza_linha,
                  "sobre_o_vermelho": round(float(((a_seta > 0.3) & (m7 > 0.5)).sum() / max(1, (a_seta > 0.3).sum())), 4)}
sel_r = a_rot > 0.15
pontos["rotulo_trench"] = {"caixa": caixas_rot["TRENCH"], "fonte_px": PX_ROT, "graus": TR_GRAUS,
                           "sobre_o_vermelho": round(float((sel_r & (m7 > 0.5)).sum() / max(1, sel_r.sum())), 4),
                           "sobre_o_miolo": round(float((sel_r & (m8 > 0.5)).sum() / max(1, sel_r.sum())), 4)}
pontos["ponto"] = {"diametro_px": 2 * R_PONTO, "contorno_px": B_PONTO, "palco": [round(xa, 1), round(ya, 1)]}
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m7 > 0.5)).sum() / max(1, (m7 > 0.5).sum())), 4)
pontos["pecas_sobre_porto_rico"] = round(float(((alfa > 0.15) & (m_pr > 0.5)).sum() / max(1, (m_pr > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
