"""r3-n2, a estrada: "10 YEARS OF / VENOM DEATHS / < 1 MONTH", com a pílula "ROADS" (a rodada 3 das miniaturas da Austrália, 18/11/2026; o pedido:
pautas/australia-animais/_trabalho/pedido-miniaturas-r3.md). Vai ao ar no Test & Compare com "Why So Few People Die From Australia's Deadly Animals"
(o Lucas, 18/11, ~15:3x: "Uma por título (Recomendado)").

    python -X utf8 -B -P roteiros/australia-animais/miniatura/r3-n2.py           (da raiz do canal; sem rede)

A ideia é a da r2-n2 (r2-n2.py, que não foi editado): de 2016 a 2025, todos os animais venenosos mataram 85 pessoas na Austrália (CID-10 X20–X29, ABS);
as estradas mataram 1.276 em 2025 (preliminar), 106,3 num mês médio. Dez anos de veneno são menos que um mês de estrada (pauta v2 §4.1, "A âncora da
estrada"; a voz do gancho A: "That's fewer than Australia's roads killed in an average month of 2025").

Os três consertos da rodada 3, e só eles (os leitores da rodada 2: out/_pautas/video-8-australia/teste-leitores.md, "A rodada 2"):
1. "falta a palavra 'deaths'" (a Mia: "a caixa fala de 'venom' e de 'month' sem dizer o que se mede"): a linha branca passa a dizer o objeto, "10 YEARS
   OF / VENOM DEATHS", em duas linhas (numa linha só, a caixa passava de 70 % da largura e cobria a Tasmânia). "VENOM DEATHS" são os 85 de todos os
   animais venenosos (X20–X29), o objeto que o pedido manda; o mês é o da estrada, que a pílula ROADS e o vermelho dizem. Para a caixa de três linhas
   caber no mar sob a costa sul da Austrália Ocidental (Albany, 35,1 S), as letras encolhem: as brancas de 130 para 126 px, a amarela de 250 para 210;
2. "o '< 1 MONTH' sai colado" (o Tunde: "1MONTH"): o espaço entre o "1" e o "MONTH" passa a ser o de 1/3 de eme da Inter (U+2004), em vez do espaço
   comum da Inter Black (0,184 eme); MINI_ESPACO=comum volta ao da r2;
3. "a malha de rodovias vira ruído em 168 px" (o Tunde): ficam só as "Major Highway" do Natural Earth de scalerank até 4 (a hierarquia do próprio
   NE: 3 é o tronco), sem as "Secondary Highway" e sem as de scalerank 5 a 9, simplificadas para o desenho (0,04°), com o traço mais largo (22 px; era
   16) e o casco branco mais fino (4 px; era 5). Os ensaios: só as Major de todos os ranks (e1, ainda granulado no sudeste), scalerank até 3 (e2, o
   tronco, limpo mas ralo) e até 4 (e2, a escolha: o anel e as cruzadas, com o sudeste mais cheio, onde mora a gente). A rede continua a do país
   todo (há rodovia em todos os estados e territórios: o r3-conferir.py mede).
E a pílula "ROADS" cresce (de 92 para 120 px), para ler na 168, onde ela completa a frase ("< 1 MONTH" de quê).

O que se vê: a Austrália em relevo amarelo e o mar azul, no quadro comum (47 S a 9,4 S, centrado em 127,3 E); as rodovias em VERMELHO, com o casco
branco e a sombra; a caixa preta embaixo à esquerda, no mar; a seta branca, da borda direita da caixa até a rodovia do NE mais perto de 134,0 E,
29,0 S (uma "Major Highway" sem nome no NE, na Austrália do Sul: pela posição, a Stuart Highway perto de Coober Pedy; o nome não está na fonte); a
pílula "ROADS" logo acima da ponta. Nada em ciano.
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.geometry import Point, LineString, MultiLineString
from shapely.ops import unary_union, nearest_points, linemerge
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU
import r2_comum as C
import r3_comum as R

NOME = os.environ.get("MINI_NOME", "r3-n2")
A = R.montar()
q, img, rel, terra, mar = A["q"], A["img"].copy(), A["rel"], A["terra"], A["mar"]
m_au = A["m_au"]

# ── as rodovias em vermelho: só as "Major Highway" de scalerank até 4 (MINI_EST_TIPOS=ambas e MINI_EST_RANK=9 devolvem as da r2), simplificadas
#    para o desenho, sem os pedaços soltos curtos; a sombra, o casco branco e o vermelho por cima ──
TIPOS = ("Major Highway", "Secondary Highway") if os.environ.get("MINI_EST_TIPOS") == "ambas" else ("Major Highway",)
RANK = int(M.env("MINI_EST_RANK", 4))             # o scalerank máximo do NE (3 é o tronco; 9, todas as da Austrália)
rede, reg_rede = R.estradas(A["australia"], tipos=TIPOS, rank_max=RANK)
SIMPL_EST = M.env("MINI_EST_SIMPL", 0.04)          # graus (~1,3 px do palco no meio do quadro): tira o zigue-zague que, na 168, vira granulado
MIN_GRAUS = M.env("MINI_EST_MIN", 0.6)             # o pedaço solto (depois de juntar a rede) mais curto que isto sai: os tocos da costa e das ilhas
bruta = linemerge(unary_union(list(rede.values())))
pedacos = list(getattr(bruta, "geoms", [bruta]))
# os pedaços que se tocam formam uma componente; sai a componente inteira mais curta que MIN_GRAUS (um toco solto), nunca um trecho de rodovia ligada
comps = []
for p in pedacos:
    juntou = [c for c in comps if any(p.distance(x) < 1e-6 for x in c)]
    novo = [p] + [x for c in juntou for x in c]
    comps = [c for c in comps if c not in juntou] + [novo]
ficam = [c for c in comps if sum(x.length for x in c) >= MIN_GRAUS]
saem = [c for c in comps if sum(x.length for x in c) < MIN_GRAUS]
todas = unary_union([x for c in ficam for x in c]).simplify(SIMPL_EST, preserve_topology=False)
LW = M.env("MINI_EST_LW", 22)
CASCO = M.env("MINI_EST_CASCO", 4)
m_red = q.linha(todas, LW)
m_casco = q.linha(todas, LW + 2 * CASCO)
somb = np.roll(np.roll(cv2.GaussianBlur(m_casco, (0, 0), 6), 5, 0), 4, 1)
img = M.compor(img, M.PRETO, np.clip(somb * 0.55, 0, 0.55) * (1 - m_casco))
img = M.compor(img, M.BRANCO, m_casco)
img = M.compor(img, M.VERMELHO, m_red)

medidas = dict(A["medidas"])
medidas["estradas"] = dict(reg_rede, largura_px=LW, casco_px=CASCO, simplificado_graus=SIMPL_EST,
                           componentes={"ficam": len(ficam), "saem_por_curtas": len(saem), "minimo_graus": MIN_GRAUS,
                                        "graus_que_saem": round(sum(x.length for c in saem for x in c), 2),
                                        "graus_que_ficam": round(sum(x.length for c in ficam for x in c), 2)},
                           fracao_da_imagem=round(float((m_red > 0.5).mean()), 4),
                           fracao_do_casco_sobre_a_australia=round(float(((m_casco > 0.5) & (m_au > 0.5)).sum() / max(1, (m_casco > 0.5).sum())), 4),
                           mudanca_da_r2="só as Major Highway de scalerank <= %d (eram as Major e as Secondary, todos os ranks); simplificadas a %.2f°; "
                                         "sem os tocos soltos; traço %d px (era 16) e casco %d px (era 5)" % (RANK, SIMPL_EST, LW, CASCO))

if os.environ.get("MINI_SO_MAPA"):
    AU.previa(img, "r3-n2-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps(medidas["estradas"], ensure_ascii=False)[:1500])
    sys.exit(0)

# ── a caixa: embaixo à esquerda, no mar. Três linhas: o objeto em branco, em duas ("10 YEARS OF" / "VENOM DEATHS"), e a virada em amarelo ──
FS_A = M.env("MINI_FS_A", 126)
FS_B = M.env("MINI_FS_B", 210)
ESP = {"terco": R.ESPACO_TERCO, "quarto": R.ESPACO_QUARTO, "comum": " "}[os.environ.get("MINI_ESPACO", "terco")]
linhas = [("10 YEARS OF", FS_A, 900, M.BRANCO), ("VENOM DEATHS", FS_A, 900, M.BRANCO), ("< 1" + ESP + "MONTH", FS_B, 900, C.AMARELO_CAIXA)]
entre = [M.env("MINI_ENTRE_A", 16), M.env("MINI_ENTRE_B", 22)]
pad_x, pad_y = 46, M.env("MINI_PAD_Y", 32)
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
larg, alt = M.medir_texto(linhas, entre)
bx = M.env("MINI_BX", 56)
by = M.env("MINI_BY", M.H - M.env("MINI_MARGEM_BAIXO", 22) - (alt + 2 * pad_y + barra[0] + barra[1]))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

# ── a seta: da borda direita da caixa, sobe curva até a rodovia (o ponto da rede mais perto do alvo) ──
alvo_ll = (M.env("MINI_ALVO_LON", 134.0), M.env("MINI_ALVO_LAT", -29.0))
pr = nearest_points(todas, Point(*alvo_ll))[0]
alvo = q.palco(pr.x, pr.y)
p0 = (caixa[2] + M.env("MINI_S0_DX", 0), caixa[1] + M.env("MINI_S0_FY", 0.36) * (caixa[3] - caixa[1]))
p3 = C.ponta_ate(m_casco, alvo, p0, M.env("MINI_RECUO", 6))
L = math.dist(p0, p3)
p1 = (p0[0] + M.env("MINI_C1_DX", 0.45) * L, p0[1] - M.env("MINI_C1_DY", 0.02) * L)
p2 = (p3[0] - M.env("MINI_C2_DX", 0.05) * L, p3[1] + M.env("MINI_C2_DY", 0.45) * L)
curva = M.bezier(p0, p1, p2, p3)
img, comps_s, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 30), w1=M.env("MINI_SETA_W1", 58),
                                        cab_l=M.env("MINI_CAB_L", 126), cab_w=M.env("MINI_CAB_W", 170))

# ── a pílula "ROADS": acima da ponta da seta ──
px_pil = M.env("MINI_PIL_PX", 120)
xp, yp = p3[0] + M.env("MINI_PIL_DX", 0), p3[1] - M.env("MINI_PIL_DY", 160)
img, caixa_pil, lin_pil, a_pil = R.pilula(img, xp, yp, [("ROADS", px_pil, 800)])

alfa = np.maximum.reduce([a_caixa, a_seta, a_pil])
pontos = dict(medidas)
pontos["texto"] = "10 YEARS OF / VENOM DEATHS / < 1 MONTH (pílula: ROADS)"
pontos["fato"] = {"venenosos_2016_2025": 85, "estrada_2025_por_mes": round(1276 / 12, 1), "estrada_2025": 1276,
                  "venenosos_em_meses_de_estrada": round(85 / (1276 / 12), 2),
                  "fonte": "pauta v2 §4.1 (fb 1; fb §2; p_contas.py; cetico_contas.py); ABS, Causes of Death, Australia, 2025 (2025 preliminar)",
                  "a_voz": "From 2016 to 2025, every venomous animal in Australia combined killed 85 people. … That's fewer than Australia's roads "
                           "killed in an average month of 2025 (gancho A)",
                  "o_objeto_de_DEATHS": "VENOM DEATHS = as 85 mortes por todos os animais venenosos (X20–X29), 2016–2025; o mês é um mês médio de "
                                        "estrada em 2025 (1.276 ÷ 12)"}
sel_c = a_caixa > 0.15
dist_au = cv2.distanceTransform((m_au < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": R.legivel(caixas_l), "maiusculas_no_168_px": R.legivel(R.maiusculas_168(caixas_l)),
                   "fonte_px": {"brancas": FS_A, "amarela": FS_B}, "espaco_entre_1_e_MONTH": os.environ.get("MINI_ESPACO", "terco"),
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                   "distancia_a_australia_px": round(float(dist_au[sel_c].min()), 1)}
sel_p = a_pil > 0.15
pontos["pilula"] = {"caixa_palco": caixa_pil, "fonte_px": px_pil, "maiuscula_no_168_px": R.maiusculas_168(lin_pil),
                    "fracao_sobre_as_estradas": round(float((sel_p & (m_casco > 0.5)).sum() / sel_p.sum()), 3)}
pontos["seta"] = {"tipo": "esquemática: liga a caixa a uma rodovia do NE na Austrália do Sul (não é rota)", "comprimento_px": comps_s,
                  "alvo_na_rede_lonlat": [round(pr.x, 3), round(pr.y, 3)],
                  "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                  "ponta_a_px_do_casco": round(float(cv2.distanceTransform((m_casco < 0.5).astype(np.uint8), cv2.DIST_L2, 5)[int(round(p3[1])), int(round(p3[0]))]), 1)}
pontos["pecas_sobre_as_estradas"] = round(float(((alfa > 0.15) & (m_red > 0.5)).sum() / max(1, (m_red > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
