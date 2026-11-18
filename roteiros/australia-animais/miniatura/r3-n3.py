"""r3-n3, o número com dono (a RESERVA): "VENOM DEATHS 2016–2025 / SNAKES 35 / BEES & WASPS 42 / OTHERS 8" (a rodada 3 das miniaturas da Austrália,
18/11/2026; o pedido: pautas/australia-animais/_trabalho/pedido-miniaturas-r3.md). O Lucas, 18/11, ~15:3x: a r2-n3 fica de reserva.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/r3-n3.py           (da raiz do canal; sem rede)

É CÓPIA do r2-n3.py (que não foi editado). A ideia não muda: no livro de mortes do ABS de 2016 a 2025, as abelhas e vespas (X23, "hornets, wasps
and bees") mataram 42, mais que as cobras venenosas (X20, "venomous snakes and lizards"), 35 (pauta v2 §4.1, FIRME; a voz do ato 1: "Over that
decade, venomous snakes killed 35 people. Bees and wasps killed 42, more than the snakes").

Os dois consertos da rodada 3, e só eles (os leitores da rodada 2: out/_pautas/video-8-australia/teste-leitores.md, "A rodada 2"):
1. "a linha 'DEATHS, 2016–2025' some em 168 px" (os quatro): o substantivo cresce. A linha passa a ter dois tamanhos na mesma linha de base: "VENOM
   DEATHS" a 112 px (5,3 px de maiúscula na 168; era 4,0) e o período, "2016–2025", a 80 px (lê de 320 para cima). Numa linha de um tamanho só, a
   caixa não passava de 96 px (4,5 px) sem encostar na ilha Kangaroo (o ensaio e2; o e3, com 120 px, encostou);
2. "35 + 42 não fecha 85" (o Tunde): a conta passa a fechar na caixa. A linha de cima diz o objeto inteiro, "VENOM DEATHS" (as 85 mortes por todos
   os animais venenosos, X20–X29), e entra embaixo do sublinhado, pequena, a linha "OTHERS 8": X25, outros artrópodes venenosos (carrapatos,
   formigas), 6, e X26, animais marinhos venenosos, 2 (pautas/australia-animais/_trabalho/fatos-b.md, a série da tabela 1.2 do ABS; o registro da
   pauta, "Os 8 mortos que faltam na conta"). 35 + 42 + 8 = 85; as aranhas e os escorpiões são 0. Sem "VENOM" no alto, "OTHERS 8" leria como "todos
   os outros bichos", o que é falso (os não venenosos, W53–W59, mataram 154 na mesma década: fatos-b §1.2).
   O duelo (SNAKES 35 / BEES & WASPS 42) continua junto, e a amarela continua sublinhada; "OTHERS 8" vem depois, como a conta, não como o assunto
   (o ensaio e1, com "OTHERS 8" logo abaixo do título, virava uma parede de texto e separava o duelo: MINI_N3_ORDEM=subindo). O roteiro diz quem são
   os outros oito (o registro da pauta).
   Para as quatro linhas caberem no mar sob Albany, as do duelo encolhem: SNAKES 35 de 130 para 116 px, BEES & WASPS 42 de 156 para 144.

O que se vê (o resto, como na r2-n3): a Austrália inteira e a Tasmânia em VERMELHO (toda a terra do STE 2021 do ABS), a Nova Guiné e as ilhas da
Indonésia em amarelo no alto, o mar azul, nada em ciano; a caixa preta embaixo à esquerda, no mar; a seta branca, da caixa ao meio do continente
(MINI_N3_SETA=0 tira a seta, para o ensaio). O quadro é o comum (47 S a 9,4 S, centrado em 127,3 E).
"""
import json, math, os, sys
import numpy as np
import cv2
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU
import r2_comum as C
import r3_comum as R

NOME = os.environ.get("MINI_NOME", "r3-n3")
A = R.montar()
q, img, rel, terra, mar = A["q"], A["img"].copy(), A["rel"], A["terra"], A["mar"]
m_au = A["m_au"]

# ── a Austrália em vermelho (o método da m1 e da r2-n3: a sombra por fora, o relevo vermelho, o contorno branco só nas manchas de ILHOTA px ou mais) ──
ILHOTA = M.env("MINI_ILHOTA_PX", 150)
img = M.sombra_fora(img, m_au, np.ones_like(terra), sig=M.env("MINI_SOMBRA_SIG", 16), forca=M.env("MINI_SOMBRA", 1.0))
img = img * (1 - m_au[..., None]) + rel.vermelho() * m_au[..., None]
m_cont = AU.sem_ilhotas(m_au, ILHOTA)
img = M.compor(img, M.BRANCO, M.borda_de(m_cont, M.env("MINI_AU_BORDA", 5)))

medidas = dict(A["medidas"])
medidas["vermelho_australia"] = {"fracao_da_imagem": round(float((m_au > 0.5).mean()), 4),
                                 "fonte": "ABS, ASGS Ed. 3, STE 2021: a união de todos os estados e territórios",
                                 "contorno": "branco, %d px, em volta das manchas de pelo menos %d px" % (M.env("MINI_AU_BORDA", 5), ILHOTA)}

# ── a caixa: embaixo à esquerda, no mar. O objeto (pequena), as cobras, as abelhas e vespas em amarelo, com o sublinhado, e embaixo dele a linha da
#    conta, "OTHERS 8" (pequena). MINI_N3_ORDEM=subindo põe "OTHERS 8" logo abaixo do objeto (o ensaio e1: a parede de texto separava o duelo) ──
FS_P = M.env("MINI_FS_TOPO", 90)        # a linha de cima e a dos outros (a de cima era 84 na r2)
FS_A = M.env("MINI_FS", 116)            # SNAKES 35 (era 130)
FS_B = M.env("MINI_FS_B", 144)          # BEES & WASPS 42 (era 156)
TOPO = os.environ.get("MINI_N3_TOPO", "VENOM DEATHS, 2016–2025")
OUTROS = os.environ.get("MINI_N3_OUTROS", "OTHERS 8")
pad_x, pad_y = 46, M.env("MINI_PAD_Y", 26)
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
bx = M.env("MINI_BX", 56)
margem = M.env("MINI_MARGEM_BAIXO", 18)
if os.environ.get("MINI_N3_ORDEM") == "subindo" or not OUTROS:
    linhas = [(TOPO, FS_P, 800, M.BRANCO)] + ([(OUTROS, FS_P, 900, M.BRANCO)] if OUTROS else []) + \
             [("SNAKES 35", FS_A, 900, M.BRANCO), ("BEES & WASPS 42", FS_B, 900, C.AMARELO_CAIXA)]
    entre = ([M.env("MINI_ENTRE_OUTROS", 18)] if OUTROS else []) + [M.env("MINI_ENTRE_A", 20), M.env("MINI_ENTRE_B", 22)]
    larg, alt = M.medir_texto(linhas, entre)
    by = M.env("MINI_BY", M.H - margem - (alt + 2 * pad_y + barra[0] + barra[1]))
    img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)
else:
    # a linha de cima em dois tamanhos (MINI_N3_TOPO_MISTO=0 a deixa num tamanho só, o ensaio e2): "VENOM DEATHS," grande, para o substantivo ler na
    # 168 (os leitores: sem "DEATHS", "SNAKES 35" podia ser "35 espécies"), e o período, " 2016–2025", menor, na mesma linha de base: o período lê
    # de 320 para cima. A linha inteira, num tamanho só, não passa de 96 px sem a caixa encostar na ilha Kangaroo
    if os.environ.get("MINI_N3_TOPO_MISTO", "1") == "1" and TOPO == "VENOM DEATHS, 2016–2025":
        FS_H = M.env("MINI_FS_TOPO_GRANDE", 112)
        topo = [("VENOM DEATHS", FS_H, 900, M.BRANCO), (" 2016–2025", M.env("MINI_FS_PERIODO", 80), 800, M.BRANCO)]
    else:
        topo = (TOPO, FS_P, 800, M.BRANCO)
    linhas = [topo, ("SNAKES 35", FS_A, 900, M.BRANCO), ("BEES & WASPS 42", FS_B, 900, C.AMARELO_CAIXA),
              (OUTROS, FS_P, 900, M.BRANCO)]
    entre = [M.env("MINI_ENTRE_TOPO", 22), M.env("MINI_ENTRE_B", 18), 0]
    DEPOIS = M.env("MINI_DEPOIS_BARRA", 16)
    h_caixa = R.caixa_barra_no_meio(None, 0, 0, linhas, pad_x, pad_y, entre, barra, 2, DEPOIS)
    by = M.env("MINI_BY", M.H - margem - h_caixa)
    img, caixa, caixas_l, a_caixa, _ = R.caixa_barra_no_meio(img, bx, by, linhas, pad_x, pad_y, entre, barra, 2, DEPOIS)

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
pontos["texto"] = " / ".join("".join(p[0] for p in l) if isinstance(l, list) else l[0] for l in linhas)
pontos["fato"] = {"X20_cobras_e_lagartos_venenosos_2016_2025": 35, "X23_vespas_abelhas_e_marimbondos_2016_2025": 42,
                  "X25_outros_artropodes_venenosos_2016_2025": 6, "X26_animais_marinhos_venenosos_2016_2025": 2,
                  "X21_aranhas": 0, "X22_escorpioes": 0, "outros_na_caixa": 6 + 2, "soma_da_caixa": 8 + 35 + 42, "X20_X29_total": 85,
                  "a_conta_fecha": 8 + 35 + 42 == 85,
                  "fonte": "ABS, Causes of Death, Australia, 2025 (27/10/2026), tabela 1.2, CC BY 4.0; pauta v2 §4.1 (fb 1, fb 3); fatos-b.md, a série "
                           "por código; o registro da pauta, 'Os 8 mortos que faltam na conta'",
                  "a_voz": "Over that decade, venomous snakes killed 35 people. Bees and wasps killed 42, more than the snakes (ato 1); o roteiro diz quem "
                           "são os outros oito"}
sel_c = a_caixa > 0.15
dist_au = cv2.distanceTransform((m_au < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l, "maiusculas_no_168_px": R.maiusculas_168(caixas_l),
                   "fonte_px": {"topo_e_outros": FS_P, "snakes": FS_A, "bees": FS_B},
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
