"""r2-n1, "NOT THE KILLER": o endereço da taipan-do-interior (a rodada 2 das miniaturas da Austrália, 18/11/2026; o pedido:
pautas/australia-animais/_trabalho/pedido-miniaturas-r2.md). É o conceito "NOT THE KILLER" da pauta v1 (§8), que nunca tinha sido desenhado.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/r2-n1.py           (da raiz do canal; sem rede)

O que se vê:
- a Austrália inteira em relevo amarelo e o mar azul (o mapa comum, australia.py), no quadro comum das três: 47 S a 9,4 S, centrado em 127,3 E
  (de 88,2 a 166,35 E: a borda direita fica antes de 166,4 E, para a Nova Zelândia não entrar; embaixo, a caixa cabe no mar sob a costa sul da
  Austrália Ocidental). É 5 % mais perto que o da m1 da rodada 1 (47 S a 7,5 S);
- o Channel Country (a biorregião do IBRA 7.1, a que a pauta nomeia como a casa da taipan: §4.3, §10.1 item 9) em VERMELHO, com o relevo por
  baixo, o contorno branco e a sombra por fora;
- nada em ciano (a escolha, depois dos ensaios: os rios da ficha da taipan, o Cooper, o Diamantina e o Warburton, cortavam o vermelho em
  pedaços na 168; as 8 capitais do ABS viravam pontinhos sem nome, lidos como lagos). Os dois ensaios ficam: MINI_N1_CIANO=rios e
  MINI_N1_CIANO=capitais;
- o contorno do Channel Country limpo dos fiapos de 1 a 3 px do sudoeste (abaixo; a área trocada fica no -pontos.json);
- a pílula "INLAND TAIPAN" em cima do vermelho;
- a caixa preta: "NOT THE" em branco e "KILLER" em amarelo, com o sublinhado vermelho; a seta branca da caixa ao Channel Country.

O vermelho é a biorregião, não a área de ocorrência da cobra (pauta v1, §8: "o vermelho não se diz 'a área da taipan'"); a pílula dá o nome do
bicho, e a ficha põe a taipan nas planícies do Cooper e do Diamantina, que correm dentro do Channel Country (r2-conferir.py mede quanto).

O que NÃO se desenha, e por quê: a área da cobra-marrom. O habitat dela é A LER na pauta (§4.4, §11 item 3); o Atlas of Living Australia
(api.ala.org.au) e o Australian Faunal Directory recusaram o robô (a base de fatos, "Bloqueados"), e não procurei outra fonte de área (a IUCN, por
exemplo, cuja licença não li): pelo pedido, "desenhe só a região que a pauta nomeia". Nada na imagem diz "empty" nem "nobody" (a medida do Censo é
A MEDIR, §10.1 item 8).
"""
import json, math, os, sys
import numpy as np
import cv2
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU
import r2_comum as C

NOME = os.environ.get("MINI_NOME", "r2-n1")
QUADRO = (M.env("MINI_LAT_S", -47.0), M.env("MINI_LAT_N", -9.4), M.env("MINI_LON_C", 127.3))
A = AU.montar(QUADRO, bases="asia", divisas=False, mar_a=0.92)
q, img, rel, terra, mar = A["q"], A["img"].copy(), A["rel"], A["terra"], A["mar"]
m_au = A["m_au"]

# ── o Channel Country em vermelho ──
cc, reg_cc = C.channel_country()
m_cc = q.mascara(cc.simplify(AU.SIMPL, preserve_topology=True))
# o contorno do IBRA tem franjas finas no sudoeste (os canais do Diamantina e do Warburton entrando no Simpson-Strzelecki): na escala do quadro
# (~3,5 km por px) elas viram fiapos de 1 a 3 px, e o contorno branco em volta deles vira uma renda clara. Um fechamento e uma abertura
# morfológicos de LIMPA px tiram os fiapos; a mudança na área é medida (abaixo) e fica no -pontos.json
LIMPA = int(M.env("MINI_CC_LIMPA", 2))      # 4 px (o ensaio) fechava o entalhe entre os dois braços do norte: o X virava um borrão
if LIMPA > 0:
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * LIMPA + 1, 2 * LIMPA + 1))
    m8 = (m_cc > 0.5).astype(np.uint8)
    m8b = cv2.morphologyEx(cv2.morphologyEx(m8, cv2.MORPH_CLOSE, k), cv2.MORPH_OPEN, k)
    # e os furos de menos de FURO px (um furo do IBRA no sudoeste virava um ponto branco solto no vermelho)
    n_f, rot_f, st_f, _ = cv2.connectedComponentsWithStats((1 - m8b).astype(np.uint8), 4)
    FURO = int(M.env("MINI_CC_FURO", 600))
    furos = [i for i in range(1, n_f) if st_f[i, cv2.CC_STAT_AREA] < FURO]
    for i in furos:
        m8b[rot_f == i] = 1
    # e as manchas soltas de menos de SOLTA px (um pedacinho de canal separado do corpo, que virava um ponto vermelho com aro branco)
    n_s, rot_s, st_s, _ = cv2.connectedComponentsWithStats(m8b, 8)
    SOLTA = int(M.env("MINI_CC_SOLTA", 200))
    soltas = [i for i in range(1, n_s) if st_s[i, cv2.CC_STAT_AREA] < SOLTA]
    for i in soltas:
        m8b[rot_s == i] = 0
    limpeza = {"raio_px": LIMPA, "px_antes": int(m8.sum()), "px_depois": int(m8b.sum()),
               "px_trocados": int((m8 != m8b).sum()), "fracao_trocada": round(float((m8 != m8b).sum() / m8.sum()), 4),
               "furos_fechados": len(furos), "furo_max_px": FURO, "manchas_soltas_tiradas": len(soltas), "mancha_solta_max_px": SOLTA}
    m_cc = cv2.GaussianBlur(m8b.astype(np.float32), (0, 0), 0.8)
else:
    limpeza = None
img = M.sombra_fora(img, m_cc, terra, sig=M.env("MINI_SOMBRA_SIG", 14), forca=M.env("MINI_SOMBRA", 1.0))
img = img * (1 - m_cc[..., None]) + rel.vermelho() * m_cc[..., None]
img = M.compor(img, M.BRANCO, M.borda_de(m_cc, M.env("MINI_CC_BORDA", 5)) * terra)

medidas = dict(A["medidas"])
medidas["vermelho_channel_country"] = dict(reg_cc, fracao_da_imagem=round(float((m_cc > 0.5).mean()), 4), limpeza_do_contorno=limpeza)

# ── o ciano: nenhum (a escolha), os rios e o lago Eyre (MINI_N1_CIANO=rios) ou as capitais (MINI_N1_CIANO=capitais), só nos ensaios ──
CIANO = os.environ.get("MINI_N1_CIANO", "nenhum")
a_ciano = np.zeros_like(m_cc)
if CIANO == "nenhum":
    medidas["ciano"] = ("nenhum: os rios (o ensaio e1, 9 px; o e3, 4 px) cortavam o vermelho em pedaços na 168, e as capitais (e2) viravam "
                        "pontinhos ciano sem nome, lidos como lagos")
elif CIANO == "capitais":
    gcc, reg_gcc = C.capitais()
    from shapely.ops import unary_union
    m_ci = q.mascara(unary_union(list(gcc.values())).simplify(AU.SIMPL / 3, preserve_topology=True))
    ciano_rel = rel.cor(M.CIANO, 0.42, (0.55, 0.85, 1.0), (225, 252, 255), 0.45)
    img = img * (1 - 0.92 * m_ci[..., None]) + ciano_rel * (0.92 * m_ci[..., None])
    img = M.compor(img, M.BRANCO, M.borda_de(m_ci, 4) * terra)
    medidas["ciano_capitais"] = dict(reg_gcc, fracao_da_imagem=round(float((m_ci > 0.5).mean()), 5))
    a_ciano = m_ci
elif CIANO == "rios":
    rios, reg_rios = C.rios_do_channel_country()
    eyre, reg_eyre = C.lago_eyre()
    LW = M.env("MINI_RIO_LW", 9)
    m_rio = q.linha(rios.simplify(AU.SIMPL / 2, preserve_topology=True), LW)
    m_lago = q.mascara(eyre.simplify(AU.SIMPL / 2, preserve_topology=True))
    m_ci = np.clip(np.maximum(m_rio, m_lago), 0, 1)
    # um fio escuro por fora (a linha some no vermelho e no amarelo sem ele) e o ciano liso por cima
    fio = np.clip(cv2.GaussianBlur(cv2.dilate((m_ci > 0.3).astype(np.uint8), np.ones((5, 5), np.uint8)).astype(np.float32), (0, 0), 1.0) - m_ci, 0, 1)
    img = M.compor(img, (40, 22, 18), fio * 0.55)
    img = M.compor(img, M.CIANO, m_ci)
    medidas["ciano_rios_e_lago"] = {"rios": reg_rios, "lago": reg_eyre, "largura_px": LW,
                                    "fracao_da_imagem": round(float((m_ci > 0.5).mean()), 5),
                                    "fracao_do_ciano_dentro_do_vermelho": round(float(((m_ci > 0.5) & (m_cc > 0.5)).sum() / max(1, (m_ci > 0.5).sum())), 3)}
    a_ciano = m_ci

ys_, xs_ = np.nonzero(m_cc > 0.5)
c_cc = (float(xs_.mean()), float(ys_.mean()))
cx_cc = [int(xs_.min()), int(ys_.min()), int(xs_.max()), int(ys_.max())]
medidas["vermelho_channel_country"].update(caixa_palco=cx_cc, centro_palco=[round(v, 1) for v in c_cc])

if os.environ.get("MINI_SO_MAPA"):
    AU.previa(img, "r2-n1-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "vermelho_channel_country")}, ensure_ascii=False)[:1500])
    sys.exit(0)

# ── a caixa: embaixo à esquerda, no Índico, sob a costa sul da Austrália Ocidental ──
linhas = [("NOT THE", M.env("MINI_FS_A", 170), 900, M.BRANCO), ("KILLER", M.env("MINI_FS_B", 250), 900, C.AMARELO_CAIXA)]
entre = [M.env("MINI_ENTRE", 36)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
larg, alt = M.medir_texto(linhas, entre)
bx = M.env("MINI_BX", 56)
by = M.env("MINI_BY", M.H - 34 - (alt + 2 * pad_y + barra[0] + barra[1]))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

# ── a seta: da borda direita da caixa, sobe curva até o Channel Country (a ponta para RECUO px antes do vermelho) ──
p0 = (caixa[2] + M.env("MINI_S0_DX", 24), caixa[1] + M.env("MINI_S0_FY", 0.32) * (caixa[3] - caixa[1]))
alvo = q.palco(M.env("MINI_ALVO_LON", 139.3), M.env("MINI_ALVO_LAT", -25.5))
p3 = C.ponta_ate(m_cc, alvo, (alvo[0] - 1.0, alvo[1] + M.env("MINI_CHEGADA_INCL", 0.55)), M.env("MINI_RECUO", 14))
L = math.dist(p0, p3)
p1 = (p0[0] + M.env("MINI_C1_DX", 0.45) * L, p0[1] - M.env("MINI_C1_DY", 0.02) * L)
p2 = (p3[0] - M.env("MINI_C2_DX", 0.30) * L, p3[1] + M.env("MINI_C2_DY", 0.18) * L)
curva = M.bezier(p0, p1, p2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 30), w1=M.env("MINI_SETA_W1", 60),
                                      cab_l=M.env("MINI_CAB_L", 130), cab_w=M.env("MINI_CAB_W", 176))

# ── a pílula "INLAND TAIPAN": em cima do Channel Country, centrada nele ──
px_pil = M.env("MINI_PIL_PX", 84)
xp = c_cc[0] + M.env("MINI_PIL_DX", 0)
yp = cx_cc[1] - M.env("MINI_PIL_DY", 70)
img, caixa_pil, _, a_pil = C.pilula(img, xp, yp, "INLAND TAIPAN", px=px_pil)

alfa = np.maximum.reduce([a_caixa, a_seta, a_pil])
pontos = dict(medidas)
pontos["texto"] = "NOT THE / KILLER (pílula: INLAND TAIPAN)"
sel_c = a_caixa > 0.15
dist_cc = cv2.distanceTransform((m_cc < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
dist_au = cv2.distanceTransform((m_au < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l, "maiusculas_no_168_px": C.maiusculas_168(caixas_l),
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                   "distancia_a_australia_px": round(float(dist_au[sel_c].min()), 1)}
sel_p = a_pil > 0.15
pontos["pilula"] = {"caixa_palco": caixa_pil, "fonte_px": px_pil,
                    "fracao_sobre_o_vermelho": round(float((sel_p & (m_cc > 0.5)).sum() / sel_p.sum()), 3),
                    "fracao_do_vermelho_coberta": round(float((sel_p & (m_cc > 0.5)).sum() / max(1, (m_cc > 0.5).sum())), 3)}
pontos["seta"] = {"tipo": "esquemática: liga a caixa ao Channel Country (não é rota)", "comprimento_px": comps,
                  "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                  "ponta_a_px_do_vermelho": round(float(dist_cc[int(round(p3[1])), int(round(p3[0]))]), 1)}
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_cc > 0.5)).sum() / max(1, (m_cc > 0.5).sum())), 4)
pontos["pecas_sobre_o_ciano"] = round(float(((alfa > 0.15) & (a_ciano > 0.5)).sum() / max(1, (a_ciano > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
