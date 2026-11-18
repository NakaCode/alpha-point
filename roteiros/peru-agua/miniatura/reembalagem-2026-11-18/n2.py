"""n2, "AMAZON SIDE" (a 2ª das 2 novas do cético da reembalagem, out/_reembalagem/2026-11-18/peru-agua/cetico.md, §4), para o vídeo 3
(`peru-agua`, publicado). Na folha, o título embaixo é o mais clicável do cético (N3): "Lima Barely Gets Rain. How Do 10 Million People Get
Water?", que é também o par que o cético recomenda para ela ("o título pergunta como, e a miniatura mostra de onde").

    python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/n2.py           (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                                       (só o mapa, sem as peças: _bases/_tmp/n2-mapa-x.jpg)

É uma CÓPIA de roteiros/australia-animais/miniatura/m2.py (que não foi editado nem rodado), mudada para o Peru central. O que se vê (o cético,
§4, n2):
- o Peru central, de Lima ao alto Mantaro, em Mercator 16:9; Lima fica à esquerda do centro, e o Pacífico ocupa o triângulo de baixo à
  esquerda (a costa corre de NO para SE);
- VERMELHO: o lado do Pacífico no quadro (vertente-pacifico.json, HydroBASINS), da costa à divisória, com Lima dentro;
- CIANO: o lado da Amazônia no quadro (vertente-atlantico.json): o alto Mantaro e o que vem a leste;
- a divisória (divisoria-continental-peru.json, o trecho "pacifico-atlantico") em branco grosso: é a "linha" do vídeo;
- LIMA: o ponto branco na estação Campo de Marte do SENAMHI (pontos-fontes.json), com "LIMA" em texto escuro numa caixa clara (a do Big Sur);
- os lagos: o ponto branco na estação de Marcapomacocha da OMM (pontos-fontes.json; a estação fica a ~4 km da lagoa de Marcapomacocha), com
  "HIGH LAKES" pequeno (lê só a 1280). Sem os polígonos dos lagos (são do OSM: pediriam o crédito na tela);
- a seta branca, grossa e curva, do ponto dos lagos ao ponto de Lima, cruzando a linha branca. É ESQUEMÁTICA: não é o traçado do canal e do
  túnel (que vão ao Santa Eulalia e descem pelo Rímac); diz só "a água guardada do outro lado da linha chega a Lima";
- a caixa preta embaixo à esquerda, sobre o Pacífico: "AMAZON" em ciano e "SIDE" em branco, com o sublinhado vermelho.
Os fatos: "more than half of the water Lima stores for the dry season sits in lakes on the other side of the line" (roteiro, linha 12;
SEDAPAL, 2007); "Those far-side lakes lie nearly 15,000 feet up, in the upper Mantaro basin, which drains toward the Amazon" (linha 56); "the
water on the Amazon side crosses the divide toward the Rímac" (linha 76).
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.ops import unary_union
from shapely.geometry import Point
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import peru as PE

NOME = os.environ.get("MINI_NOME", "n2")
# ── o quadro: de 13,62 a 11,12 S, centrado em 76,72 O (de ~79,0 a ~74,4 O). O cético propôs 78,6–74,6 O e 13,2–10,95 S, "ajustar até a caixa
# caber no mar". Rodadas (em _bases/_tmp/): e1, de 13,40 a 10,90 S e centrado em 76,90 O, com "AMAZON" a 250 px: a caixa ficava a 13 px da
# costa, e a seta reta dos lagos a Lima cruzava a divisória embaixo do ponto (a estação fica a 7,6 km dela); e2, a seta nova e a caixa a
# 224/190 px (134 px da costa); e3/e4, este quadro, mais ao sul e a leste: o ciano cresce (de 26,5 % a 27,6 %) e a caixa fica a 109 px da
# costa ──
QUADRO = (M.env("MINI_Q_S", -13.62), M.env("MINI_Q_N", -11.12), M.env("MINI_Q_C", -76.72))
A = PE.montar(QUADRO, bases="centro", mar_a=M.env("MINI_MAR_A", 0.86), z=M.env("MINI_SOMB_Z", 1.6), mix=0.7)
q, img, rel = A["q"], A["img"].copy(), A["rel"]
terra, seca, mar = A["terra"], A["seca"], A["mar"]
m_pac, m_atl = A["m_pac"] * seca, A["m_atl"] * seca

# ── o lado da Amazônia em ciano, o do Pacífico em vermelho, e a divisória em branco grosso ──
img = PE.pintar_ciano(img, rel, m_atl, mix=M.env("MINI_CI_MIX", 0.88))
img = PE.pintar_vermelho(img, rel, m_pac, np.ones_like(terra), borda=M.env("MINI_VM_BORDA", 5))
div = unary_union([g for p, g in A["divs"] if p.get("entre") == "pacifico-atlantico"])
m_div = q.linha(div, M.env("MINI_DIV_PX", 9))
img = M.compor(img, M.PRETO, cv2.GaussianBlur(cv2.dilate(m_div, np.ones((5, 5), np.uint8)), (0, 0), 2.0) * 0.35)
img = M.compor(img, M.BRANCO, m_div)

medidas = dict(A["medidas"])
medidas["vermelho_lado_do_pacifico"] = {"fracao_da_imagem": round(float((m_pac > 0.5).mean()), 4),
                                        "fonte": "vertente-pacifico.json (HydroBASINS v1c nível 6, recortado pelo peru-ne)"}
medidas["ciano_lado_da_amazonia"] = {"fracao_da_imagem": round(float((m_atl > 0.5).mean()), 4), "mistura": M.env("MINI_CI_MIX", 0.88),
                                     "fonte": "vertente-atlantico.json (HydroBASINS v1c nível 6, recortado pelo peru-ne)"}
medidas["divisoria"] = {"trecho": "pacifico-atlantico", "largura_px": M.env("MINI_DIV_PX", 9)}

pts = {p["id"]: g for p, g in PE.camada("pontos")[0]}
LIMA, LAGOS = pts["campo-de-marte"], pts["estacao-marcapomacocha"]
xl, yl = q.palco(LIMA.x, LIMA.y)
xk, yk = q.palco(LAGOS.x, LAGOS.y)

if os.environ.get("MINI_SO_MAPA"):
    img2, _ = M.ponto(img, xl, yl)
    img2, _ = M.ponto(img2, xk, yk)
    PE.previa(img2, "n2-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "vermelho_lado_do_pacifico", "ciano_lado_da_amazonia", "mar", "costa_vetores_contra_aster")},
                     ensure_ascii=False))
    print("lima", round(xl), round(yl), "lagos", round(xk), round(yk))
    sys.exit(0)

# ── a seta: do ponto dos lagos ao ponto de Lima, curva, cruzando a divisória. ESQUEMÁTICA. A estação fica a ~35 px da divisória (~7 km): uma
# seta reta para Lima cruzaria a linha embaixo do ponto. Por isso ela sai do ponto para o sudeste, por dentro do ciano, faz a curva para o
# sudoeste, cruza a linha branca à vista, e chega a Lima pelo leste. O desenho lembra o caminho de verdade (o canal para o sul, o túnel para o
# oeste, o rio descendo até Lima), mas não o segue: os controles são lon/lat escolhidos para a leitura, não o traçado ──
R_PONTO = M.env("MINI_PONTO_R", 17)
p0 = (xk, yk)                                              # o rabo da seta fica embaixo do ponto dos lagos
C1 = (M.env("MINI_C1_LON", -75.92), M.env("MINI_C1_LAT", -11.62))
C2 = (M.env("MINI_C2_LON", -76.20), M.env("MINI_C2_LAT", -12.16))
p1, p2 = q.palco(*C1), q.palco(*C2)
FOLGA_FIM = M.env("MINI_S3_FOLGA", 30)
ang3 = math.atan2(yl - p2[1], xl - p2[0])
p3 = (xl - math.cos(ang3) * (R_PONTO + FOLGA_FIM), yl - math.sin(ang3) * (R_PONTO + FOLGA_FIM))
curva = M.bezier(p0, p1, p2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 40), w1=M.env("MINI_SETA_W1", 80),
                                      cab_l=M.env("MINI_CAB_L", 165), cab_w=M.env("MINI_CAB_W", 225))

# ── os pontos: Lima e os lagos ──
img, a_pl = M.ponto(img, xl, yl, R_PONTO)
img, a_pk = M.ponto(img, xk, yk, R_PONTO)

# ── os rótulos: LIMA (escuro numa caixa clara, ao lado do ponto, sobre o mar) e HIGH LAKES (branco, pequeno, acima do ponto dos lagos) ──
PX_LIMA = M.env("MINI_LIMA_PX", 110)
img, caixa_lima, a_lima = M.rotulo_claro(img, "LIMA", xl + M.env("MINI_LIMA_DX", -60), yl + M.env("MINI_LIMA_DY", -50), PX_LIMA, "rb")
PX_HL = M.env("MINI_HL_PX", 60)
# (acima e à direita do ponto, no ciano: o rótulo prende os lagos ao lado da Amazônia, e não à linha branca, que passa a ~35 px do ponto)
img, caixas_rot, a_rot = M.rotulos(img, [("HIGH LAKES", xk + M.env("MINI_HL_DX", 12), yk - M.env("MINI_HL_DY", 36), PX_HL, "ls")])

# ── a caixa: embaixo à esquerda, sobre o Pacífico ──
linhas = [("AMAZON", M.env("MINI_FS_A", 224), 900, M.CIANO), ("SIDE", M.env("MINI_FS_B", 190), 900, M.BRANCO)]
entre = [M.env("MINI_ENTRE", 40)]
larg, alt = M.medir_texto(linhas, entre)
pad_x, pad_y = 52, 46
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
bx = M.env("MINI_BX", 64)
by = M.env("MINI_BY", M.H - 72 - (alt + 2 * pad_y + barra[0] + barra[1]))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

alfa = np.maximum.reduce([a_caixa, a_seta, a_pl, a_pk, a_lima, a_rot])
pontos = dict(medidas)
pontos["texto"] = "AMAZON / SIDE"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
sel_c = a_caixa > 0.15
dist_vm = cv2.distanceTransform((m_pac < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
dist_terra = cv2.distanceTransform((terra < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                   "distancia_ao_vermelho_px": round(float(dist_vm[sel_c].min()), 1),
                   "distancia_a_terra_px": round(float(dist_terra[sel_c].min()), 1)}
# a seta cruza a divisória? (a curva tem pontos dos dois lados)
lados = [("pac" if m_pac[int(round(y)), int(round(x))] > 0.5 else "atl" if m_atl[int(round(y)), int(round(x))] > 0.5 else "outro")
         for x, y in curva]
pontos["seta"] = {"tipo": "ESQUEMÁTICA: a água guardada nos lagos do alto Mantaro (o lado da Amazônia) chega a Lima; não é o traçado do canal "
                          "e do túnel", "comprimento_px": comps,
                  "comeca_no_ciano": lados[0] == "atl", "acaba_no_vermelho": lados[-1] == "pac",
                  "cruza_a_divisoria": ("atl" in lados and "pac" in lados),
                  "fracao_do_caminho_no_ciano": round(lados.count("atl") / len(lados), 3),
                  "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                  "controles_lonlat": [[round(v, 4) for v in M.lonlat(q, *p)] for p in (p0, p1, p2, p3)]}
# onde a seta cruza a divisória (a 1ª troca de lado ao longo da curva)
for i in range(1, len(lados)):
    if lados[i - 1] == "atl" and lados[i] == "pac":
        pontos["seta"]["cruza_em_palco"] = [round(v) for v in curva[i]]
        pontos["seta"]["cruza_em_lonlat"] = [round(v, 4) for v in M.lonlat(q, *curva[i])]
        pontos["seta"]["cruza_a_px_do_ponto_dos_lagos"] = round(math.dist(curva[i], (xk, yk)))
        break
pontos["pontos"] = {"lima": {"lonlat": [LIMA.x, LIMA.y], "palco": [round(xl, 1), round(yl, 1)], "fonte": "SENAMHI, estação Campo de Marte (pontos-fontes.json)",
                             "no_vermelho": bool(m_pac[int(round(yl)), int(round(xl))] > 0.5)},
                    "lagos": {"lonlat": [LAGOS.x, LAGOS.y], "palco": [round(xk, 1), round(yk, 1)],
                              "fonte": "OMM, estação de Marcapomacocha (pontos-fontes.json); a estação fica a ~4 km da lagoa",
                              "no_ciano": bool(m_atl[int(round(yk)), int(round(xk))] > 0.5)}}
sel_l = a_lima > 0.15
pontos["rotulo_lima"] = {"caixa_palco": caixa_lima, "fonte_px": PX_LIMA, "maiuscula_no_320_px": round(0.727 * PX_LIMA * 320 / M.W, 1),
                         "maiuscula_no_168_px": round(0.727 * PX_LIMA * 168 / M.W, 1),
                         "sobre_a_terra": round(float((sel_l & (terra > 0.5)).sum() / max(1, sel_l.sum())), 4)}
pontos["rotulo_lagos"] = {"caixas": caixas_rot, "fonte_px": PX_HL}
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_pac > 0.5)).sum() / max(1, (m_pac > 0.5).sum())), 4)
pontos["pecas_sobre_o_ciano"] = round(float(((alfa > 0.15) & (m_atl > 0.5)).sum() / max(1, (m_atl > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
