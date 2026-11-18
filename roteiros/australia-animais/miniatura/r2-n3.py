"""r2-n3, o número com dono: "DEATHS, 2016–2025 / SNAKES 35 / BEES & WASPS 42" (a rodada 2 das miniaturas da Austrália, 18/11/2026; o pedido:
pautas/australia-animais/_trabalho/pedido-miniaturas-r2.md).

    python -X utf8 -B -P roteiros/australia-animais/miniatura/r2-n3.py           (da raiz do canal; sem rede)

O fato (pauta v2, §4.1, FIRME; a base, "O registro"): de 2016 a 2025, no livro de mortes do ABS, as cobras venenosas (X20, "venomous snakes and
lizards") mataram 35 pessoas, e as abelhas, vespas e marimbondos (X23, "hornets, wasps and bees"), 42, "more than the snakes". A voz do ato 1 diz:
"Over that decade, venomous snakes killed 35 people. Bees and wasps killed 42, more than the snakes." A caixa diz os dois números com o dono de
cada um, como a voz; "& WASPS" fica porque o código do ABS junta as vespas às abelhas (nenhuma fonte da base separa as duas).

O que se vê:
- a Austrália inteira e a Tasmânia em VERMELHO (toda a terra do STE 2021 do ABS, como a m1 da rodada 1): os dois números são do país todo;
- a Nova Guiné e as ilhas da Indonésia em amarelo, no alto; o mar azul; nada em ciano;
- a caixa preta, embaixo à esquerda, no mar: "DEATHS, 2016–2025" em branco, pequeno (o dono dos números: o que faltou à "1 IN 3 MILLION" no
  teste dos leitores, "de quê?"), "SNAKES 35" em branco e "BEES & WASPS 42" em amarelo, maior, com o sublinhado vermelho;
- a seta branca, da caixa ao meio do continente (MINI_N3_SETA=0 tira a seta, para o ensaio).
O quadro é o comum das três (47 S a 9,4 S, centrado em 127,3 E).
"""
import json, math, os, sys
import numpy as np
import cv2
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU
import r2_comum as C

NOME = os.environ.get("MINI_NOME", "r2-n3")
QUADRO = (M.env("MINI_LAT_S", -47.0), M.env("MINI_LAT_N", -9.4), M.env("MINI_LON_C", 127.3))
A = AU.montar(QUADRO, bases="asia", divisas=False, mar_a=0.92)
q, img, rel, terra, mar = A["q"], A["img"].copy(), A["rel"], A["terra"], A["mar"]
m_au = A["m_au"]

# ── a Austrália em vermelho (o método da m1: a sombra por fora, o relevo vermelho, o contorno branco só nas manchas de ILHOTA px ou mais) ──
ILHOTA = M.env("MINI_ILHOTA_PX", 150)
img = M.sombra_fora(img, m_au, np.ones_like(terra), sig=M.env("MINI_SOMBRA_SIG", 16), forca=M.env("MINI_SOMBRA", 1.0))
img = img * (1 - m_au[..., None]) + rel.vermelho() * m_au[..., None]
m_cont = AU.sem_ilhotas(m_au, ILHOTA)
img = M.compor(img, M.BRANCO, M.borda_de(m_cont, M.env("MINI_AU_BORDA", 5)))

medidas = dict(A["medidas"])
medidas["vermelho_australia"] = {"fracao_da_imagem": round(float((m_au > 0.5).mean()), 4),
                                 "fonte": "ABS, ASGS Ed. 3, STE 2021: a união de todos os estados e territórios",
                                 "contorno": "branco, %d px, em volta das manchas de pelo menos %d px" % (M.env("MINI_AU_BORDA", 5), ILHOTA)}

# ── a caixa: embaixo à esquerda, no mar; as duas linhas do mesmo tamanho (é um placar) ──
FS = M.env("MINI_FS", 130)
linhas = [([("SNAKES ", M.BRANCO), ("35", M.BRANCO)], FS, 900, M.BRANCO),
          ([("BEES & WASPS ", C.AMARELO_CAIXA), ("42", C.AMARELO_CAIXA)], M.env("MINI_FS_B", 156), 900, C.AMARELO_CAIXA)]
entre = [M.env("MINI_ENTRE", 38)]
# a linha pequena de cima, com o dono dos números ("de quê?", o que faltou à "1 IN 3 MILLION" no teste dos leitores)
TOPO = os.environ.get("MINI_N3_TOPO", "DEATHS, 2016–2025")
if TOPO:
    linhas.insert(0, (TOPO, M.env("MINI_FS_TOPO", 84), 800, M.BRANCO))
    entre.insert(0, M.env("MINI_ENTRE_TOPO", 26))
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
larg, alt = M.medir_texto(linhas, entre)
bx = M.env("MINI_BX", 56)
by = M.env("MINI_BY", M.H - 34 - (alt + 2 * pad_y + barra[0] + barra[1]))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

# ── a seta: da borda direita da caixa, sobe curva para dentro do continente (a ponta entra no vermelho: é o país todo, não um ponto da costa) ──
a_seta = np.zeros_like(m_au)
comps, p0 = [], None
if os.environ.get("MINI_N3_SETA", "1") == "1":
    p0 = (caixa[2] + M.env("MINI_S0_DX", 24), caixa[1] + M.env("MINI_S0_FY", 0.30) * (caixa[3] - caixa[1]))
    alvo = q.palco(M.env("MINI_ALVO_LON", 133.5), M.env("MINI_ALVO_LAT", -26.0))
    p3 = alvo
    L = math.dist(p0, p3)
    p1 = (p0[0] + M.env("MINI_C1_DX", 0.45) * L, p0[1] - M.env("MINI_C1_DY", 0.02) * L)
    p2 = (p3[0] + M.env("MINI_C2_DX", 0.05) * L, p3[1] + M.env("MINI_C2_DY", 0.40) * L)
    curva = M.bezier(p0, p1, p2, p3)
    img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 30), w1=M.env("MINI_SETA_W1", 58),
                                          cab_l=M.env("MINI_CAB_L", 126), cab_w=M.env("MINI_CAB_W", 170))

alfa = np.maximum.reduce([a_caixa, a_seta])
pontos = dict(medidas)
pontos["texto"] = " / ".join(([TOPO] if TOPO else []) + ["SNAKES 35", "BEES & WASPS 42"])
pontos["fato"] = {"X20_cobras_e_lagartos_venenosos_2016_2025": 35, "X23_vespas_abelhas_e_marimbondos_2016_2025": 42,
                  "fonte": "ABS, Causes of Death, Australia, 2025 (27/10/2026), tabela 1.2, CC BY 4.0; pauta v2 §4.1 (fb 1, fb 3)",
                  "a_voz": "Over that decade, venomous snakes killed 35 people. Bees and wasps killed 42, more than the snakes."}
sel_c = a_caixa > 0.15
dist_au = cv2.distanceTransform((m_au < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l, "maiusculas_no_168_px": C.maiusculas_168(caixas_l),
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                   "distancia_ao_vermelho_px": round(float(dist_au[sel_c].min()), 1)}
if p0:
    pontos["seta"] = {"tipo": "curta, da caixa ao meio do continente (não é rota)", "comprimento_px": comps,
                      "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                      "ponta_sobre_o_vermelho": bool(m_au[int(round(p3[1])), int(round(p3[0]))] > 0.5),
                      "fracao_sobre_o_vermelho": round(float(((a_seta > 0.15) & (m_au > 0.5)).sum() / max(1, (a_seta > 0.15).sum())), 4)}
else:
    pontos["seta"] = None
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_au > 0.5)).sum() / max(1, (m_au > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
