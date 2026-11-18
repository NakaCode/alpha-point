"""n1, "ONLY 2%" (a 1ª das 2 novas do cético da reembalagem, out/_reembalagem/2026-11-18/peru-agua/cetico.md, §4), para o vídeo 3
(`peru-agua`, publicado). Na folha, o título embaixo é o mais clicável do cético (N3): "Lima Barely Gets Rain. How Do 10 Million People Get
Water?". O par que o cético recomenda para ela é o N1 ("Why Peru's People and Water Are on Opposite Sides of the Andes"); com o L3 e o N3, não.

    python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/n1.py           (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                                       (só o mapa, sem as peças: _bases/_tmp/n1-mapa-x.jpg)

É uma CÓPIA de roteiros/australia-animais/miniatura/m2.py (que não foi editado nem rodado), mudada para o Peru. O que se vê (o cético, §4, n1):
- o Peru inteiro (de 0° a 18,4° S), com o Pacífico à esquerda para a caixa. O quadro é o da A3 um pouco mais apertado (o cético: "Serve o
  quadro da A3 ou um pouco mais apertado"): de 18,62 S a 0,40 N, centrado em 81,40 O (de ~98,6 a ~64,2 O). Rodadas (em _bases/_tmp/): e1, o
  da A3 (0,02° para dentro, por causa da Blue Marble da A, que tem exatamente a janela da A3); e2, este, com o Peru ~4 % maior;
- VERMELHO: o lado do Pacífico (vertente-pacifico.json, HydroBASINS), a faixa estreita da costa à divisória, com o relevo por baixo, o contorno
  branco e a sombra por fora (o contorno branco também o separa do azul do mar: marca/embalagem.md §3);
- CIANO: o lado da Amazônia (vertente-atlantico.json), três quartos do país, com o relevo pintado em ciano e misturado ao amarelo; por cima,
  os rios amazônicos (Natural Earth) em azul saturado com contorno escuro fino, de 14 a 18 px no palco;
- AMARELO, sem cor: o lado do Titicaca e os vizinhos, com o contorno branco do Peru em volta de tudo (o sul ainda lê como Peru); as divisas
  de terra dos vizinhos em branco fino; o lago Titicaca em azul (Natural Earth, domínio público);
- "97%" em branco, grande, no ciano, e logo abaixo "OF PERU'S WATER" (lê só a 1280);
- a seta branca e grossa, da borda direita da caixa até o vermelho, na latitude de Lima, sem rótulo de cidade. A ponta entra 40 px na
  faixa (que tem ~109 px ali); o cético pedia ~60 px, que levaria a ponta quase à divisória (e1: 25 px; e2: 45 px, 0,25° ao sul de Lima);
- a caixa preta embaixo à esquerda, sobre o Pacífico: "ONLY" em branco e "2%" em vermelho, com o sublinhado vermelho.
Os fatos: 97,91 % e 1,76 % da água (PNRH da ANA, 2012); a voz diz "more than 97 percent" e "about 2 percent" (roteiro-narrador.md, linha 10).
"""
import json, math, os, sys
import numpy as np
import cv2
from PIL import Image, ImageDraw
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import peru as PE

NOME = os.environ.get("MINI_NOME", "n1")
QUADRO = (M.env("MINI_Q_S", -18.62), M.env("MINI_Q_N", 0.40), M.env("MINI_Q_C", -81.40))
A = PE.montar(QUADRO, bases="peru", mar_a=M.env("MINI_MAR_A", 0.86), z=M.env("MINI_SOMB_Z", 3.0), mix=0.7)
q, img, rel = A["q"], A["img"].copy(), A["rel"]
terra, seca, mar, agua = A["terra"], A["seca"], A["mar"], A["agua"]
m_peru, m_pac, m_atl, m_tit = A["m_peru"], A["m_pac"] * A["seca"], A["m_atl"] * A["seca"], A["m_tit"]

# ── as divisas de terra dos vizinhos (a costa fica sem linha), em branco fino ──
viz = A["vizinhos"]
todos = [g for p, g in viz] + [A["peru"]]
linhas = []
for i, (p, g) in enumerate(viz):
    outros = unary_union([h for j, h in enumerate(todos) if j != i]).buffer(0.03)
    linhas.append(g.boundary.intersection(outros))
img = M.compor(img, M.BRANCO, q.linha(unary_union(linhas), M.env("MINI_DIVISA", 3.0)) * seca * M.env("MINI_DIVISA_A", 0.75))

# ── o lado da Amazônia em ciano ──
img = PE.pintar_ciano(img, rel, m_atl, mix=M.env("MINI_CI_MIX", 0.88))

# ── os rios do lado da Amazônia, em azul saturado com contorno escuro fino (lidos no 320: de 14 a 18 px no palco) ──
RIO = (18, 92, 214)
PRINCIPAIS = {"Amazonas", "Ucayali", "Marañón"}
rios_fs, sha_rios = PE.camada("rios")
amaz_fs, sha_amaz = PE.camada("amaz")
W_P, W_S = M.env("MINI_RIO_P", 18), M.env("MINI_RIO_S", 14)
m_rio = np.maximum.reduce([q.linha(unary_union([g for p, g in rios_fs if p.get("name") in PRINCIPAIS]), W_P),
                           q.linha(unary_union([g for p, g in rios_fs if p.get("name") not in PRINCIPAIS]), W_S),
                           q.linha(unary_union([g for p, g in amaz_fs if p.get("name") == "Amazonas"]), W_P)])
casco = cv2.GaussianBlur(cv2.dilate((m_rio > 0.3).astype(np.float32), np.ones((7, 7), np.uint8)), (0, 0), 1.0)
img = M.compor(img, M.PRETO, casco * M.env("MINI_RIO_CASCO", 0.55) * (1 - mar))
img = M.compor(img, RIO, m_rio)

# ── o lado do Pacífico em vermelho ──
img = PE.pintar_vermelho(img, rel, m_pac, np.ones_like(terra), borda=M.env("MINI_VM_BORDA", 5))

# ── o contorno branco do Peru (por fora), em volta de tudo ──
img = M.compor(img, M.BRANCO, M.borda_de(PE.sem_ilhotas(m_peru, 150), M.env("MINI_PE_BORDA", 5)))

medidas = dict(A["medidas"])
medidas["vermelho_lado_do_pacifico"] = {"fracao_da_imagem": round(float((m_pac > 0.5).mean()), 4),
                                        "fonte": "vertente-pacifico.json (HydroBASINS v1c nível 6, recortado pelo peru-ne)"}
medidas["ciano_lado_da_amazonia"] = {"fracao_da_imagem": round(float((m_atl > 0.5).mean()), 4), "mistura": M.env("MINI_CI_MIX", 0.88),
                                     "fonte": "vertente-atlantico.json (HydroBASINS v1c nível 6, recortado pelo peru-ne)"}
medidas["amarelo_lado_do_titicaca"] = {"fracao_da_imagem": round(float((m_tit > 0.5).mean()), 4)}
medidas["rios"] = {"arquivos": {"rios-vertente-atlantico.json": sha_rios, "amazonas-ate-o-atlantico.json (só o Amazonas)": sha_amaz},
                   "largura_px": {"principais (Amazonas, Ucayali, Marañón)": W_P, "os outros": W_S}, "cor": list(RIO),
                   "nomes": sorted({p.get("name") for p, g in rios_fs})}

if os.environ.get("MINI_SO_MAPA"):
    PE.previa(img, "n1-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"])
    print(json.dumps({k: medidas[k] for k in ("quadro", "vermelho_lado_do_pacifico", "ciano_lado_da_amazonia", "mar")}, ensure_ascii=False))
    sys.exit(0)


def texto_branco(img, itens, sombra=1.0):
    """itens: [(texto, x, y, px, peso, ancora)]: branco, com a sombra escura das referências (mais forte que a dos rótulos)"""
    cam = Image.new("RGBA", (M.W, M.H), (0, 0, 0, 0))
    d = ImageDraw.Draw(cam)
    caixas = {}
    for texto, x, y, px, peso, ancora in itens:
        f = M.fonte(px, peso, 32 if px > 80 else 14)
        d.text((x, y), texto, font=f, fill=M.BRANCO + (255,), anchor=ancora)
        caixas[texto] = [round(v) for v in d.textbbox((x, y), texto, font=f, anchor=ancora)]
    a = np.asarray(cam.split()[3]).astype(np.float32) / 255
    k = max(3, int(M.env("MINI_TX_DIL", 9)))
    somb = np.roll(np.roll(cv2.GaussianBlur(cv2.dilate(a, np.ones((k, k), np.uint8)), (0, 0), M.env("MINI_TX_SIG", 9)), 7, 0), 5, 1)
    img = M.compor(img, M.PRETO, np.clip(somb * 1.4 * sombra, 0, 0.88))
    contorno = cv2.GaussianBlur(cv2.dilate(a, np.ones((5, 5), np.uint8)), (0, 0), 1.0)
    img = M.compor(img, M.PRETO, contorno * 0.55)
    img = M.compor(img, M.BRANCO, a)
    return img, caixas, a


# ── "97%" no ciano, e "OF PERU'S WATER" logo abaixo ──
N_LON, N_LAT = M.env("MINI_97_LON", -74.6), M.env("MINI_97_LAT", -7.0)
xn, yn = q.palco(N_LON, N_LAT)
PX_97, PX_OF = M.env("MINI_97_PX", 230), M.env("MINI_OF_PX", 60)
img, caixas_97, a_97 = texto_branco(img, [("97%", xn, yn, PX_97, 900, "ms"), ("OF PERU'S WATER", xn, yn + M.env("MINI_OF_DY", 26), PX_OF, 700, "mt")])

# ── a caixa: embaixo à esquerda, sobre o Pacífico ──
linhas = [("ONLY", M.env("MINI_FS_A", 210), 900, M.BRANCO), ("2%", M.env("MINI_FS_B", 330), 900, M.TEXTO_VERMELHO)]
entre = [M.env("MINI_ENTRE", 44)]
larg, alt = M.medir_texto(linhas, entre)
pad_x, pad_y = 54, 46
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
bx = M.env("MINI_BX", 80)
by = M.env("MINI_BY", M.H - 80 - (alt + 2 * pad_y + barra[0] + barra[1]))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

# ── a seta: da borda direita da caixa (na altura do "2%") até o vermelho, perto de Lima. A ponta é um ponto do lado do Pacífico, a
# MINI_PONTA_DENTRO px da costa para dentro, na linha que liga a caixa a Lima ──
lima_ll = (-77.043167, -12.070528)          # a estação Campo de Marte do SENAMHI (pontos-fontes.json)
xl, yl = q.palco(*lima_ll)
dist_mar = cv2.distanceTransform((terra > 0.5).astype(np.uint8), cv2.DIST_L2, 5)     # para cada px da terra, a distância até o mar
x2 = caixas_l["2%"]
p0 = (caixa[2] + M.env("MINI_S0_DX", 22), (x2[1] + x2[3]) / 2 - M.env("MINI_S0_DY", 40))
PONTA_DENTRO = M.env("MINI_PONTA_DENTRO", 40)
# a ponta: no vermelho, perto de Lima (um pouco ao sul, MINI_PONTA_DLAT graus), onde a distância à costa é PONTA_DENTRO
alvo_lat = lima_ll[1] + M.env("MINI_PONTA_DLAT", 0.0)
yy = int(round(q.palco(lima_ll[0], alvo_lat)[1]))
fila = np.nonzero((m_pac[yy] > 0.5) & (dist_mar[yy] >= PONTA_DENTRO))[0]
xp = float(fila.min())
p3 = (xp, float(yy))
L = math.dist(p0, p3)
p1 = (p0[0] + M.env("MINI_C1_DX", 0.45) * L, p0[1] + M.env("MINI_C1_DY", 0.05) * L)
p2 = (p3[0] - M.env("MINI_C2_DX", 0.30) * L, p3[1] + M.env("MINI_C2_DY", 0.30) * L)
curva = M.bezier(p0, p1, p2, p3)
img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_SETA_W0", 40), w1=M.env("MINI_SETA_W1", 76),
                                      cab_l=M.env("MINI_CAB_L", 150), cab_w=M.env("MINI_CAB_W", 200))

alfa = np.maximum.reduce([a_caixa, a_seta, a_97])
pontos = dict(medidas)
pontos["texto"] = "ONLY / 2%"
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
dentro_vm = cv2.distanceTransform((m_pac > 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["seta"] = {"tipo": "aponta o lado do Pacífico perto de Lima (sem rótulo de cidade)", "comprimento_px": comps,
                  "ponta_palco": [round(v, 1) for v in p3], "ponta_lonlat": [round(v, 4) for v in M.lonlat(q, *p3)],
                  "ponta_no_vermelho": bool(m_pac[int(round(p3[1])), int(round(p3[0]))] > 0.5),
                  "ponta_distancia_da_costa_px": round(float(dist_mar[int(round(p3[1])), int(round(p3[0]))]), 1),
                  "largura_do_vermelho_na_linha_da_ponta_px": int(((m_pac[int(round(p3[1]))] > 0.5)).sum()),
                  "lima_palco": [round(xl, 1), round(yl, 1)], "distancia_da_ponta_a_lima_px": round(math.dist(p3, (xl, yl)), 1),
                  "controles_palco": [[round(v, 1) for v in p] for p in (p0, p1, p2, p3)]}
sel_97 = a_97 > 0.15
pontos["numero_97"] = {"caixas": caixas_97, "lonlat": [N_LON, N_LAT], "fonte_px": [PX_97, PX_OF],
                       "sobre_o_ciano": round(float((sel_97 & (m_atl > 0.5)).sum() / max(1, sel_97.sum())), 4),
                       "sobre_o_vermelho": round(float((sel_97 & (m_pac > 0.5)).sum() / max(1, sel_97.sum())), 4),
                       "maiuscula_97_no_168_px": round((caixas_97["97%"][3] - caixas_97["97%"][1]) * 168 / M.W, 1),
                       "maiuscula_of_no_168_px": round((caixas_97["OF PERU'S WATER"][3] - caixas_97["OF PERU'S WATER"][1]) * 168 / M.W, 1)}
pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_pac > 0.5)).sum() / max(1, (m_pac > 0.5).sum())), 4)
pontos["fatos"] = {"2%": "1,76 % da água no lado do Pacífico (PNRH da ANA, 2012); a voz: 'with about 2 percent' (roteiro, linha 10). O '2%' "
                         "arredonda para cima: o 'ONLY' não exagera",
                   "97%": "97,91 % no lado da Amazônia (PNRH, 2012); a voz: 'holds more than 97 percent of Peru's water' (linha 10)"}
destino = M.PASTA if not os.environ.get("MINI_ENSAIO") else os.path.join(M.BASES_NOVAS, "_tmp")
M.salvar(img, NOME, pontos, alfa, destino)
