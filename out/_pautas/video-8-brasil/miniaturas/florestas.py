"""As 2 miniaturas das duas florestas (vídeo 8, Brasil; 18/11/2026), com o título "Why the Amazon Doesn't Touch Brazil's Other Rainforest"
(o do cético, out/_pautas/video-8-brasil/cetico-duas-florestas.md §6). O pedido: out/_pautas/video-8-brasil/pedido-miniatura-florestas.md.

    python -X utf8 -B -P out/_pautas/video-8-brasil/miniaturas/florestas.py           (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                                (só o mapa, sem as peças: _bases/_tmp/mapa-x.jpg)

O mapa é o mesmo nas duas (mapa.py, a cópia desta pasta):
- o leste do Brasil em relevo amarelo: o cinza da GIBS (ASTER GDEM) misturado com o sombreado calculado da altitude do ASTER GDEM, com
  exagero vertical (o planalto brasileiro, visto a ~1,2 km por px, é quase plano: sem exagero, o relevo some);
- a terra é a dos vetores (o Brasil, a união dos 6 biomas do IBGE 2025; os vizinhos, o Natural Earth 1:10m), e o mar é o resto, em azul
  com a textura leve da batimetria da Blue Marble (GIBS), como no vídeo 7 e na Nova Zelândia;
- a Mata Atlântica em VERMELHO (o assunto do título, "Brazil's other rainforest") e a Amazônia em CIANO (o relevo pintado em ciano e
  misturado ao amarelo, o método da Utah da Strip), as duas pela geometria do mapa de biomas do IBGE, edição 2025 (shp v20250911), com o
  contorno branco; a fronteira do Brasil com os vizinhos em branco fino;
- a seta branca grossa de DUAS PONTAS, reta, entre os dois pontos mais perto das duas florestas no mapa (os do cético: (52,2516 O;
  13,4135 S), perto de Canarana, MT, e (50,7052 O; 18,3210 S), perto de Quirinópolis, GO), conferidos aqui de novo (pontos.json, "vao");
- os rótulos pequenos AMAZON (no ciano) e ATLANTIC / FOREST (em duas linhas, no vermelho), de 1280; MINI_ROT_AM=0 e MINI_ROT_MA=0 tiram;
- m1: a caixa preta "THE GAP" ("THE" branco, "GAP" amarelo, a cor do vão), no amarelo de cima, à direita da ponta da Amazônia;
- m2: a caixa preta "350 MILES" ("350" amarelo, "MILES" branco) no vão, à direita da seta, como a cota de um desenho (567,7 km = 352,8 mi
  no mapa de biomas; arredondado para baixo), e a fonte do número, pequena, no canto de baixo à esquerda: "BIOME MAP: IBGE (2025)" (o
  cético, §6; MINI_FONTE_M2=0 tira).
MINI_COR_M1=<cor> (ou M2) grava uma variante de cor da palavra em _bases/_tmp/, sem tocar nas finais.
As bases: florestas-bases.py (rede, 3 pedidos à GIBS). Este script não faz pedido de rede.
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.geometry import Point
from shapely.ops import unary_union, nearest_points
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

BIO = os.path.join(M.RAIZ, "midia", "_pautas", "video-8-brasil", "cetico-duas-florestas", "biomas2025", "lml_bioma_e250k_v20250911_A.shp")
NE_PAISES = "C:/projetos/regie-v1/acervo/geojson/ne10m-admin0-countries.json"
NE_SHA = "239eec57ac17f100a11e2536cffc56752c318b50ae765b0918ff7aab4ce8f255"     # o do manifest.json da pré-v1
GEO_UTIL = os.path.join(M.RAIZ, "out", "_pautas", "video-8-brasil", "_trabalho")  # o Albers e o Vincenty do gerador (só leitura)
A_CETICO = (-52.2516, -13.4135)
B_CETICO = (-50.7052, -18.3210)

# ── o quadro: de 23,4 a 8,0 S, centrado em 47,0 O (de ~61,3 a ~32,7 O). A Amazônia ocupa o canto de cima à esquerda; a Mata Atlântica, a
# faixa da costa e o sudeste; o vão fica à esquerda do meio. Rodadas no esboço plano (sem relevo): de 25 a 5 S (a seta tinha 369 px) e de
# 24 a 2 S (338 px) mostravam a ponta do Nordeste, mas a seta ficava curta e o vermelho, fino (7,5 a 9,9 % da imagem) ──
q = M.Quadro(M.env("MINI_LAT_S", -23.4), M.env("MINI_LAT_N", -8.0), M.env("MINI_LON_C", -47.0))

# ── a geometria ──
SIMPL = M.env("MINI_SIMPL", 0.001)        # graus (~110 m): um décimo do px do palco
# o .shp que o cético extraiu do zip do IBGE (zip: sha256 247b15c4…a1ea8f, baixados.txt dele); este é o sha256 do .shp, medido aqui
bio, info_bio = M.ler_shp(BIO, "NM_BIOMA", "324dba8914530f8ddcd49001e13cce9a134eda88a8c0bb9578c3ef31f3be5154")
assert set(bio) == {"Amazônia", "Caatinga", "Cerrado", "Mata Atlântica", "Pampa", "Pantanal"}, sorted(bio)
bio_s = {k: g.simplify(SIMPL, preserve_topology=True) for k, g in bio.items()}
brasil = unary_union(list(bio_s.values()))
paises, sha_ne = M.ler_geojson(NE_PAISES, lambda p: p.get("CONTINENT") == "South America" and p.get("ADM0_A3") != "BRA", NE_SHA)
caixa = q.caixa_geo(1.5)
vizinhos = unary_union([g for p, g in paises if g.intersects(caixa)])
nomes_vizinhos = sorted(p["NAME"] for p, g in paises if g.intersects(q.caixa_geo(0.0)))

# ── o vão, conferido de novo: os dois pontos mais perto, no Albers de área igual do gerador (geo_util.py), na geometria cheia (sem
# simplificar), num recorte em volta do vão; a distância é a de Vincenty ──
sys.path.insert(0, GEO_UTIL)
from geo_util import Albers, vincenty_km
from shapely.geometry import box as _box
alb = Albers()
rec = _box(-56.0, -21.5, -47.0, -11.0)
am_r, ma_r = bio["Amazônia"].intersection(rec), bio["Mata Atlântica"].intersection(rec)
pa_alb, pm_alb = nearest_points(alb.project(am_r), alb.project(ma_r))


def _vertice(g, p):
    best = None
    for pg in getattr(g, "geoms", [g]):
        if pg.geom_type != "Polygon":
            continue
        xs, ys = np.array(pg.exterior.coords).T
        X, Y = alb.fwd(xs, ys)
        dd = np.hypot(X - p.x, Y - p.y)
        i = int(dd.argmin())
        if best is None or dd[i] < best[0]:
            best = (float(dd[i]), float(xs[i]), float(ys[i]))
    return best


va, vm = _vertice(am_r, pa_alb), _vertice(ma_r, pm_alb)
A, B = (va[1], va[2]), (vm[1], vm[2])
km = vincenty_km(A[0], A[1], B[0], B[1])
vao = {"toca": bool(bio["Amazônia"].intersects(bio["Mata Atlântica"])),
       "ponto_amazonia": [round(A[0], 4), round(A[1], 4)], "ponto_mata_atlantica": [round(B[0], 4), round(B[1], 4)],
       "distancia_ao_vertice_m": [round(va[0], 1), round(vm[0], 1)],
       "km_vincenty": round(km, 1), "mi": round(km / 1.609344, 1),
       "igual_ao_cetico": bool(abs(A[0] - A_CETICO[0]) < 2e-4 and abs(A[1] - A_CETICO[1]) < 2e-4 and abs(B[0] - B_CETICO[0]) < 2e-4
                               and abs(B[1] - B_CETICO[1]) < 2e-4),
       "metodo": "nearest_points no Albers de área igual do gerador (_trabalho/geo_util.py), geometria cheia num recorte de 56 a 47 O e "
                 "21,5 a 11 S; o vértice de cada lado mais perto do ponto achado; Vincenty no GRS80"}
assert not vao["toca"] and vao["igual_ao_cetico"], vao
print("vão:", vao)

# ── as máscaras ──
m_brasil = q.mascara(brasil)
m_viz = q.mascara(vizinhos.buffer(M.env("MINI_VIZ_BUFFER", 0.05)))     # o buffer fecha a fresta entre o IBGE e o Natural Earth na fronteira
terra = np.clip(m_brasil + m_viz * (1 - m_brasil), 0, 1)
mar = 1 - terra
m_am = q.mascara(bio_s["Amazônia"])
m_ma = q.mascara(bio_s["Mata Atlântica"])

# ── o relevo ──
rel_base, info_rel = q.ler_base(M.base_em("florestas-aster-relevo.png"))
elev, info_alt = q.ler_altitude(M.base_em("florestas-aster-altitude.png"), M.base_em("gibs-colormap-ASTER_GDEM_Color_Index.xml"))
mar_bm, info_bm = q.ler_base(M.base_em("florestas-bluemarble.png"))
PX_M = q.MP * math.cos(math.radians((q.lat_s + q.lat_n) / 2))
# a conferência da costa: a terra dos vetores (IBGE + Natural Earth) contra a terra do ASTER (a GIBS marca o mar como sem dado, que vira 0 m).
# Se o raster e os vetores estivessem fora de registro, a faixa de discordância cresceria além de uns poucos px da costa
_d_costa = cv2.distanceTransform((M.borda_de(terra, 1) < 0.3).astype(np.uint8), cv2.DIST_L2, 5)
_aster_terra = elev > 0.5
_long = _d_costa > 4
costa = {"terra_dos_vetores_sem_dado_no_aster_alem_de_4px": round(float(((terra > 0.5) & ~_aster_terra & _long).sum() / max(1, ((terra > 0.5) & _long).sum())), 5),
         "mar_dos_vetores_com_altitude_no_aster_alem_de_4px": round(float(((terra < 0.5) & _aster_terra & _long).sum() / max(1, ((terra < 0.5) & _long).sum())), 5),
         "discordancia_mais_longe_da_costa_px": round(float(_d_costa[(terra > 0.5) != _aster_terra].max()) if ((terra > 0.5) != _aster_terra).any() else 0.0, 1)}
_disc = ((terra > 0.5) != _aster_terra) & _long
costa["px_discordantes_alem_de_4px"] = int(_disc.sum())
if _disc.any():
    _yy, _xx = np.unravel_index(np.argmax(np.where(_disc, _d_costa, -1)), _d_costa.shape)
    costa["onde_a_mais_longe_lonlat"] = [round(v, 3) for v in M.lonlat(q, float(_xx), float(_yy))]
    costa["a_mais_longe_e"] = "terra dos vetores sem dado no ASTER" if terra[_yy, _xx] > 0.5 else "mar dos vetores com altitude no ASTER"
print("costa:", costa)
Z = M.env("MINI_SOMB_Z", 6.0)
AZ1, AZ2 = M.env("MINI_SOMB_AZIM", 315), M.env("MINI_SOMB_AZIM2", 270)
hs_dem = 0.5 * (M.sombreado(elev, PX_M, azim=AZ1, alt=40, z=Z, suave=M.env("MINI_SOMB_SUAVE", 2.2))
                + M.sombreado(elev, PX_M, azim=AZ2, alt=40, z=Z, suave=M.env("MINI_SOMB_SUAVE", 2.2)))
_sel = terra > 0.5


def _z(a):
    return (a - np.median(a[_sel])) / max(1e-6, np.percentile(a[_sel], 84) - np.percentile(a[_sel], 16))


MIX = M.env("MINI_SOMB_MIX", 0.8)
cinza = (1 - MIX) * _z(rel_base[..., 0] / 255.0) + MIX * _z(hs_dem)
rel = M.Relevo(cinza, _sel, suave=M.env("MINI_REL_SUAVE", 1.0), sig_vol=M.env("MINI_REL_SIG_VOL", 3.5), vol=M.env("MINI_REL_VOL", 0.4),
               nit=M.env("MINI_REL_NIT", 1.6), sig_loc=M.env("MINI_REL_SIG_LOC", 30), aprofundar=M.env("MINI_APROFUNDAR", 0.1),
               sig_rug=4.0)

# ── as cores ──
img = rel.amarelo()
img = M.pintar_agua(img, mar, M.AZUL, textura=mar_bm, a=M.env("MINI_MAR_A", 0.78), b=M.env("MINI_MAR_B", 0.36))
# a Amazônia: o relevo pintado em ciano, misturado ao amarelo (a Utah da Strip)
AM_MIX = M.env("MINI_AM_MIX", 0.85)
ciano_rel = rel.cor(M.CIANO, M.env("MINI_AM_SOMBRA", 0.42), (0.55, 0.85, 1.0), (225, 252, 255), M.env("MINI_AM_LUZ", 0.45))
img = img * (1 - AM_MIX * m_am[..., None]) + ciano_rel * (AM_MIX * m_am[..., None])
# a Mata Atlântica: a sombra por fora, o relevo vermelho por cima
img = M.sombra_fora(img, m_ma, terra, sig=M.env("MINI_MA_SOMBRA_SIG", 14), forca=M.env("MINI_MA_SOMBRA", 1.0))
img = img * (1 - m_ma[..., None]) + rel.vermelho() * m_ma[..., None]
# a fronteira do Brasil com os vizinhos (o contorno dos vizinhos do Natural Earth, só na terra)
fronteira = unary_union([g.boundary for p, g in paises if g.intersects(caixa)])
img = M.compor(img, M.BRANCO, q.linha(fronteira, M.env("MINI_FRONTEIRA", 3.5)) * terra * M.env("MINI_FRONTEIRA_A", 0.85))
# os contornos brancos das duas florestas (só na terra: a costa fica sem linha)
img = M.compor(img, M.BRANCO, M.borda_de(m_am, M.env("MINI_AM_BORDA", 5)) * terra)
img = M.compor(img, M.BRANCO, M.borda_de(m_ma, M.env("MINI_MA_BORDA", 5)) * terra)

pa, pb = q.palco(*A), q.palco(*B)
medidas = {"quadro": q.medidas(), "bases": {"relevo": info_rel, "altitude": info_alt, "mar": info_bm},
           "geometria": {"biomas": dict(info_bio, edicao="IBGE, Biomas e Sistema Costeiro-Marinho do Brasil 1:250.000, 2025 (shp v20250911)",
                                        simplificado_graus=SIMPL),
                         "vizinhos": {"arquivo": NE_PAISES, "sha256": sha_ne, "no_quadro": nomes_vizinhos}},
           "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": Z, "luz_azimutes": [AZ1, AZ2], "px_chao_m": round(PX_M, 1)},
           "vao": vao,
           "vermelho_mata_atlantica": {"fracao_da_imagem": round(float((m_ma > 0.5).mean()), 4)},
           "ciano_amazonia": {"fracao_da_imagem": round(float((m_am > 0.5).mean()), 4), "mistura": AM_MIX},
           "mar": {"fracao_da_imagem": round(float((mar > 0.5).mean()), 4)},
           "pontas_palco": {"amazonia": [round(v, 1) for v in pa], "mata_atlantica": [round(v, 1) for v in pb]},
           "costa_vetores_contra_aster": costa}

if os.environ.get("MINI_SO_MAPA"):
    from PIL import Image
    f = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    v = Image.new("RGB", (1280 + 20 + 320, 720), (15, 15, 15))
    v.paste(f.resize((1280, 720), Image.LANCZOS), (0, 0))
    v.paste(f.resize((320, 180), Image.LANCZOS), (1300, 0))
    v.paste(f.resize((168, 94), Image.LANCZOS), (1300, 200))
    v.save(os.path.join(M.BASES_NOVAS, "_tmp", "mapa-%s.jpg" % os.environ["MINI_SO_MAPA"]), quality=90)
    print(json.dumps({k: medidas[k] for k in ("quadro", "vao", "vermelho_mata_atlantica", "ciano_amazonia", "mar", "pontas_palco")},
                     ensure_ascii=False))
    sys.exit(0)

# ── os rótulos pequenos: AMAZON no ciano e ATLANTIC FOREST no vermelho (os nomes que o título usa e o que ele esconde; de 1280, não do 168) ──
PX_ROT = M.env("MINI_ROT_PX", 62)
itens, onde = [], {}
if M.env("MINI_ROT_AM", 1):
    itens.append(("AMAZON", M.env("MINI_AM_X", 400), M.env("MINI_AM_Y", 150), PX_ROT, "mm"))
    onde["AMAZON"] = m_am
if M.env("MINI_ROT_MA", 1):
    # em duas linhas, embaixo, no miolo do vermelho entre São Paulo e Minas: numa linha só (588 px a 62 px), o nome não cabe inteiro dentro
    # do vermelho em lugar nenhum do quadro (a faixa mais larga, a ~1.180 px de altura, tem ~570 px e cortava o contorno branco)
    xm, ym, pxm = M.env("MINI_MA_X", 1620), M.env("MINI_MA_Y", 1242), M.env("MINI_MA_PX", PX_ROT)
    itens.append(("ATLANTIC", xm, ym - 0.58 * pxm, pxm, "mm"))
    itens.append(("FOREST", xm, ym + 0.58 * pxm, pxm, "mm"))
    onde["ATLANTIC"] = onde["FOREST"] = m_ma
img, caixas_rot, a_rot = M.rotulos(img, itens) if itens else (img, {}, np.zeros((M.H, M.W), np.float32))
# cada rótulo, sozinho: quanto dele fica sobre a sua floresta, e a menor folga até a borda dela (o contorno branco tem 5 px)
rotulos_medidas = {}
for it in itens:
    _, _, a1 = M.rotulos(np.zeros((M.H, M.W, 3), np.float32), [it])
    s1 = a1 > 0.15
    reg = onde[it[0]] > 0.5
    dentro = cv2.distanceTransform(reg.astype(np.uint8), cv2.DIST_L2, 5)
    rotulos_medidas[it[0]] = {"caixa_palco": caixas_rot[it[0]], "fonte_px": it[3],
                              "fracao_sobre_a_floresta": round(float((s1 & reg).sum() / max(1, s1.sum())), 4),
                              "menor_folga_ate_a_borda_px": round(float(dentro[s1].min()), 1),
                              "maiuscula_no_1280_px": round((caixas_rot[it[0]][3] - caixas_rot[it[0]][1]) / 2, 1)}
print("rótulos:", rotulos_medidas)
base_img = img.copy()

# ── a seta de duas pontas: reta, de ponta a ponta do vão; as pontas recuam RECUO px para dentro do vão, para não comer o contorno branco ──
RECUO = M.env("MINI_RECUO", 6)
L0 = math.hypot(pb[0] - pa[0], pb[1] - pa[1])
ux, uy = (pb[0] - pa[0]) / L0, (pb[1] - pa[1]) / L0
pa_s, pb_s = (pa[0] + ux * RECUO, pa[1] + uy * RECUO), (pb[0] - ux * RECUO, pb[1] - uy * RECUO)

# ── as caixas: m1 "THE GAP" (duas linhas, no amarelo de cima, à direita da ponta da Amazônia); m2 "350 MILES" (duas linhas, no vão, à direita
# da seta). A cor da palavra de baixo é parâmetro (MINI_COR_<NOME>: amarelo, vermelho, branco) ──
CORES = {"amarelo": (255, 196, 46), "vermelho": M.TEXTO_VERMELHO, "branco": M.BRANCO, "ciano": M.CIANO}
MINIS = {
    "m1": {"linhas": [("THE", M.env("MINI_FS_M1_A", 140), 900, M.BRANCO), ("GAP", M.env("MINI_FS_M1_B", 280), 900, "amarelo")],
           "x": M.env("MINI_BX_M1", 1030), "y": M.env("MINI_BY_M1", 150), "texto": "THE GAP"},
    "m2": {"linhas": [("350", M.env("MINI_FS_M2_A", 250), 900, "amarelo"), ("MILES", M.env("MINI_FS_M2_B", 160), 900, M.BRANCO)],
           "x": M.env("MINI_BX_M2", 1040), "y": M.env("MINI_BY_M2", 400), "texto": "350 MILES"},
}
SO = os.environ.get("MINI_SO", "m1,m2").split(",")
dist_am = cv2.distanceTransform((m_am < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
dist_ma = cv2.distanceTransform((m_ma < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
for nome in SO:
    cfg = MINIS[nome]
    cor_var = os.environ.get("MINI_COR_" + nome.upper())
    linhas = []
    for s, px, peso, cor in cfg["linhas"]:
        if isinstance(cor, str):
            cor = CORES[cor_var or cor]
        linhas.append((s, px, peso, cor))
    img = base_img.copy()
    # a seta: 72 px de corpo e cabeças de 140 × 196 (na 1ª rodada, 62 e 132 × 178: no 168, o corpo tinha 4 px e sumia ao lado da caixa)
    img, L, a_seta = M.seta_dupla(img, pa_s, pb_s, w=M.env("MINI_SETA_W", 72), cab_l=M.env("MINI_CAB_L", 140), cab_w=M.env("MINI_CAB_W", 196))
    # m2: a fonte do número, pequena, no canto de baixo à esquerda (o cético, §6: "350 MILES" depende do mapa e, se for usado, leva a fonte
    # na tela). É de 1280, não lê no 168. MINI_FONTE_M2=0 tira
    a_fonte, fonte_medidas = np.zeros((M.H, M.W), np.float32), None
    if nome == "m2" and M.env("MINI_FONTE_M2", 1):
        FONTE_TXT = os.environ.get("MINI_FONTE_TXT", "BIOME MAP: IBGE (2025)")
        it_f = (FONTE_TXT, M.env("MINI_FONTE_X", 44), M.env("MINI_FONTE_Y", 1396), M.env("MINI_FONTE_PX", 34), "ls")
        img, cx_f, a_fonte = M.rotulos(img, [it_f])
        sel_f = a_fonte > 0.15
        fonte_medidas = {"texto": FONTE_TXT, "caixa_palco": cx_f[FONTE_TXT], "fonte_px": it_f[3],
                         "distancia_ao_vermelho_px": round(float(dist_ma[sel_f].min()), 1),
                         "sobre_o_mar": round(float((sel_f & (mar > 0.5)).sum() / max(1, sel_f.sum())), 4)}
    entre = [M.env("MINI_ENTRE_" + nome.upper(), 40)]
    pad_x, pad_y = 50, 44
    barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
    img, cx, caixas_l, a_caixa = M.caixa_texto(img, cfg["x"], cfg["y"], linhas, pad_x, pad_y, entre, barra=barra)
    alfa = np.maximum.reduce([a_caixa, a_seta, a_rot, a_fonte])
    cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
    sel_c = a_caixa > 0.15
    pontos = dict(medidas)
    pontos["texto"] = cfg["texto"]
    pontos["caixa"] = {"caixa_palco": cx, "linhas": caixas_l,
                       "cores": {s: list(c) for s, px, peso, c in linhas},
                       "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                       "fracao_da_largura": [round(cx[0] / M.W, 3), round(cx[2] / M.W, 3)],
                       "distancia_a_amazonia_px": round(float(dist_am[sel_c].min()), 1),
                       "distancia_a_mata_atlantica_px": round(float(dist_ma[sel_c].min()), 1),
                       "distancia_a_seta_px": round(float(cv2.distanceTransform((a_seta < 0.15).astype(np.uint8), cv2.DIST_L2, 5)[sel_c].min()), 1)}
    pontos["seta"] = {"tipo": "reta, de duas pontas, entre os dois pontos mais perto (o vão do mapa de biomas)",
                      "pontas_palco": [[round(v, 1) for v in pa_s], [round(v, 1) for v in pb_s]], "recuo_px": RECUO,
                      "comprimento_px": L, "km_por_px_no_eixo": round(km / L0, 3),
                      "ponta_sobre_amazonia_ou_vao": bool(dist_am[int(round(pa_s[1])), int(round(pa_s[0]))] <= RECUO + 2),
                      "ponta_sobre_mata_ou_vao": bool(dist_ma[int(round(pb_s[1])), int(round(pb_s[0]))] <= RECUO + 2),
                      "sobre_o_ciano_ou_o_vermelho": round(float(((a_seta > 0.15) & ((m_am > 0.5) | (m_ma > 0.5))).sum() / max(1, (a_seta > 0.15).sum())), 4)}
    pontos["rotulos"] = rotulos_medidas
    if fonte_medidas:
        pontos["fonte_do_numero"] = fonte_medidas
    pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_ma > 0.5)).sum() / max(1, (m_ma > 0.5).sum())), 4)
    pontos["pecas_sobre_o_ciano"] = round(float(((alfa > 0.15) & (m_am > 0.5)).sum() / max(1, (m_am > 0.5).sum())), 4)
    destino = M.PASTA if not cor_var else os.path.join(M.BASES_NOVAS, "_tmp")
    M.salvar(img, "florestas-" + nome + ("" if not cor_var else "-" + cor_var), pontos, alfa, destino)
