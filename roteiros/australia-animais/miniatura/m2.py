"""m2, "NO VIPERS" (a nova do cético, K2, que a Sala pôs como a segunda do teste), com o título "Australia Has the Venom. Why Doesn't It Have the
Deaths?" embaixo.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/m2.py           (da raiz do canal; sem rede)

O que se vê (a mensagem da Sala, 18/11: "a Austrália e o sudeste da Ásia, uma seta branca grossa da Ásia para o continente, a Austrália em
vermelho, a Ásia em ciano, a caixa NO VIPERS"):
- a Austrália em VERMELHO (toda a terra do STE 2021 do ABS), com o relevo por baixo, o contorno branco e a sombra por fora, como na m1;
- a Ásia em CIANO: os países que o Natural Earth põe no continente "Asia" (no quadro: a Indonésia, a Malásia, Singapura, Brunei, o Timor-Leste e
  a ponta das Filipinas), com o relevo pintado em ciano e misturado ao amarelo (o método da Utah da Strip e da Amazônia), e o contorno branco
  só nas ilhas grandes. A Nova Guiné inteira fica amarela: a metade da Papua-Nova Guiné é da Oceania, e as duas províncias da Indonésia na ilha
  (Papua e Papua Barat) saem do ciano (australia.asia()), para o ciano não chegar à porta da Austrália por uma fronteira política;
- o rótulo branco "ASIA" no ciano;
- a seta branca, grossa e curva, da Ásia (Bornéu) para o norte da Austrália. É ESQUEMÁTICA: diz "vieram da Ásia" (as elapídeas, fa B1, Lee et
  al. 2016: "Basal lineages are predominantly Asian"); o caminho de verdade não é conhecido e a seta não o desenha;
- a caixa preta, à esquerda, sobre o Índico: "NO" em branco e "VIPERS" em amarelo, grande, com o sublinhado vermelho (Jackson et al. 2016,
  "viperid snakes are absent", fa B2; a lista oficial do AFD é NÃO CONFERIDA).
"""
import json, math, os, sys
import numpy as np
import cv2
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU

NOME = os.environ.get("MINI_NOME", "m2")
# ── o quadro: de 44,5 S (a Tasmânia dentro) a 3,5 N (Bornéu, Sumatra, Celebes e a ponta da Península Malaia, com Kuala Lumpur), centrado em
# 120,4 E (de ~73,0 a ~167,8 E). As rodadas (em _bases/_tmp/): e1, até 5 N e centrado em 123,5 E, a caixa encostava na costa oeste da Austrália
# Ocidental (0 px) e a ponta noroeste da Ilha Sul da Nova Zelândia entrava no canto de baixo à direita; e2, centrado em 122,8 E e a caixa embaixo,
# a Nova Zelândia ainda entrava (a costa oeste da Ilha Sul vai a 169–171 E entre 42 e 44,5 S); e3, até 3,5 N e centrado em 120,4 E: a borda
# direita fica a oeste de Milford Sound (167,9 E), e a esquerda, a leste da base da GIBS (72 E). Mais ao norte, o 16:9 alarga e entram o Sri
# Lanka e a Nova Zelândia ──
QUADRO = (-44.5, 3.5, 120.4)
A = AU.montar(QUADRO, bases="asia", divisas=False, mar_a=0.92)
q, img, rel, terra, mar = A["q"], A["img"].copy(), A["rel"], A["terra"], A["mar"]
m_au = A["m_au"]

# ── a Ásia em ciano ──
g_asia, reg_asia = AU.asia([(p, g) for p, g in A["vizinhos"] if g.intersects(q.caixa_geo(0.0))], sem_nova_guine=bool(M.env("MINI_SEM_NG", 1)))
m_asia = q.mascara(g_asia.simplify(AU.SIMPL, preserve_topology=True))
AS_MIX = M.env("MINI_AS_MIX", 0.88)
ciano_rel = rel.cor(M.CIANO, M.env("MINI_AS_SOMBRA", 0.42), (0.55, 0.85, 1.0), (225, 252, 255), M.env("MINI_AS_LUZ", 0.45))
img = img * (1 - AS_MIX * m_asia[..., None]) + ciano_rel * (AS_MIX * m_asia[..., None])
img = M.compor(img, M.BRANCO, M.borda_de(AU.sem_ilhotas(m_asia, M.env("MINI_AS_ILHA_PX", 2500)), M.env("MINI_AS_BORDA", 3.5)))

# ── a Austrália em vermelho (como na m1) ──
ILHOTA = M.env("MINI_ILHOTA_PX", 150)
img = M.sombra_fora(img, m_au, np.ones_like(terra), sig=M.env("MINI_SOMBRA_SIG", 14), forca=M.env("MINI_SOMBRA", 1.0))
img = img * (1 - m_au[..., None]) + rel.vermelho() * m_au[..., None]
img = M.compor(img, M.BRANCO, M.borda_de(AU.sem_ilhotas(m_au, ILHOTA), M.env("MINI_AU_BORDA", 5)))

medidas = dict(A["medidas"])
medidas["vermelho_australia"] = {"fracao_da_imagem": round(float((m_au > 0.5).mean()), 4),
                                 "fonte": "ABS, ASGS Ed. 3, STE 2021: a união de todos os estados e territórios"}
medidas["ciano_asia"] = dict(reg_asia, fracao_da_imagem=round(float((m_asia > 0.5).mean()), 4), mistura=AS_MIX)

if os.environ.get("MINI_SO_MAPA"):
    AU.previa(img, "m2-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "vermelho_australia", "ciano_asia", "mar")}, ensure_ascii=False))
    sys.exit(0)

# ── o rótulo ASIA: branco, no ciano de Bornéu ──
PX_ROT = M.env("MINI_ROT_PX", 76)
xa, ya = q.palco(M.env("MINI_ASIA_LON", 113.0), M.env("MINI_ASIA_LAT", 0.4))
img, caixas_rot, a_rot = M.rotulos(img, [("ASIA", xa, ya, PX_ROT, "mm")])

# ── a seta: grossa e curva, de Bornéu (a costa sul de Kalimantan) ao norte da Austrália (a Terra de Arnhem), pelo mar de Java e o de Timor.
# Os pontos em lon/lat; a seta é esquemática ──
S0 = (M.env("MINI_S0_LON", 114.6), M.env("MINI_S0_LAT", -2.4))
S3 = (M.env("MINI_S3_LON", 132.0), M.env("MINI_S3_LAT", -14.2))
p0, p3 = q.palco(*S0), q.palco(*S3)
L = math.dist(p0, p3)
p1 = (p0[0] + M.env("MINI_C1_DX", 0.05) * L, p0[1] + M.env("MINI_C1_DY", 0.45) * L)
p2 = (p3[0] - M.env("MINI_C2_DX", 0.45) * L, p3[1] - M.env("MINI_C2_DY", 0.05) * L)
curva = M.bezier(p0, p1, p2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 40), w1=M.env("MINI_SETA_W1", 84),
                                      cab_l=M.env("MINI_CAB_L", 170), cab_w=M.env("MINI_CAB_W", 236))

# ── a caixa: à esquerda, sobre o Índico, entre Java e a costa oeste da Austrália ──
linhas = [("NO", M.env("MINI_FS_A", 206), 900, M.BRANCO), ("VIPERS", M.env("MINI_FS_B", 250), 900, (255, 196, 46))]
entre = [M.env("MINI_ENTRE", 40)]
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, M.env("MINI_BX", 50), M.env("MINI_BY", 900), linhas, pad_x, pad_y, entre, barra=barra)

alfa = np.maximum.reduce([a_caixa, a_seta, a_rot])
pontos = dict(medidas)
pontos["texto"] = "NO / VIPERS"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
sel_c = a_caixa > 0.15
dist_au = cv2.distanceTransform((m_au < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
dist_as = cv2.distanceTransform((m_asia < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
dist_terra = cv2.distanceTransform((terra < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                   "distancia_ao_vermelho_px": round(float(dist_au[sel_c].min()), 1),
                   "distancia_ao_ciano_px": round(float(dist_as[sel_c].min()), 1),
                   "distancia_a_terra_px": round(float(dist_terra[sel_c].min()), 1)}
pontos["seta"] = {"tipo": "esquemática: 'vieram da Ásia' (as elapídeas); não é o caminho", "comprimento_px": comps,
                  "pontas_lonlat": [list(S0), list(S3)], "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)],
                  "comeca_no_ciano": bool(m_asia[int(round(p0[1])), int(round(p0[0]))] > 0.5),
                  "ponta_no_vermelho": bool(m_au[int(round(p3[1])), int(round(p3[0]))] > 0.5)}
pontos["rotulos"] = caixas_rot
sel_r = a_rot > 0.15
pontos["rotulo_asia"] = {"sobre_o_ciano": round(float((sel_r & (m_asia > 0.5)).sum() / max(1, sel_r.sum())), 4), "fonte_px": PX_ROT,
                         "lonlat": [M.env("MINI_ASIA_LON", 113.0), M.env("MINI_ASIA_LAT", 0.4)]}
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_au > 0.5)).sum() / max(1, (m_au > 0.5).sum())), 4)
pontos["pecas_sobre_o_ciano"] = round(float(((alfa > 0.15) & (m_asia > 0.5)).sum() / max(1, (m_asia > 0.5).sum())), 4)
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
