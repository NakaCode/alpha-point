"""m3, "UTAH WANTED IT" (pauta do vídeo 8, §8, miniatura 3; 18/11/2026), com o título "Why Arizona Didn't Stop at the Grand Canyon".
A PRIMEIRA desde 18/11/2026 (a Sala, depois do cético da pauta, K3 e K6: é a única que vende a história que só o canal tem).

    python -X utf8 -B -P roteiros/arizona-strip/miniatura/m3.py          (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                  (só o mapa, sem as peças: _tmp/m3-mapa-x.jpg)

O quadro vai mais ao norte que o da m1, para mostrar o sul de Utah (St. George e Kanab), e mais a oeste, para a caixa caber sobre Nevada:
- o relevo amarelo e o cânion: o método da m1, sobre as bases novas do m3-bases.py (o mesmo ASTER GDEM da GIBS, num recorte maior);
- a Arizona Strip em vermelho (os dois CCDs do Census);
- UTAH em ciano: o mesmo relevo pintado em ciano e misturado ao amarelo a 80 % (MINI_UT_MIX), com o contorno branco. O §8 fala em ~40 %:
  a 40 %, o ciano com o amarelo por baixo deu um verde-oliva que não lia como ciano (_tmp da 1ª rodada);
- "GRAND CANYON" pequeno no amarelo logo ao sul do rio, sob o trecho do meio do cânion (como na m1), e ARIZONA e NEVADA pequenos;
- a água (o rio Colorado e os lagos Mead, Powell e Mohave, do OSM) em AZUL saturado, e não em ciano, para não se confundir com Utah;
- os pontos brancos de St. George e de Kanab (Natural Earth), com os nomes pequenos;
- duas setas brancas e grossas, curvas, que saem dos dois pontos e descem até o meio do vermelho, "como quem estica a mão". Não são
  estradas: são o pedido de Utah;
- a caixa preta embaixo à esquerda, sobre Nevada: "UTAH" em ciano e "WANTED IT" em branco, com o sublinhado vermelho.
As bases: m3-aster-relevo e m3-aster-altitude (roteiros/arizona-strip/miniatura/_bases/, do m3-bases.py); o colormap, o Census e a água,
de out/_pautas/video-8/miniaturas/_bases/ (lidos sem mover). Nenhum pedido de rede.
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.geometry import box
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

NOME = "m3"

# ── o quadro: de 35,53 a 37,88 N, centrado em 113,95 O (de ~116,56 a ~111,34 O). Utah ocupa o terço de cima; Nevada, à esquerda, recebe a
# caixa (a divisa de 114,05 O fica a ~1.230 px da borda); a Strip fica à direita do meio, a ~70 px da borda direita. Rodadas: de 35,45 a
# 37,90 N (de ~116,67 a ~111,23 O), a Strip tinha 15,6 % da imagem; apertado até o que a caixa deixa, 16,9 % ──
q = M.Quadro(M.env("MINI_LAT_S", 35.53), M.env("MINI_LAT_N", 37.88), M.env("MINI_LON_C", -113.95))

# ── a geometria ──
ccd = M.ler_shp_zip(M.base_em("cb_2025_04_cousub_500k.zip"),
                    lambda r: r["STATEFP"] == "04" and r["NAME"] in ("Kaibab Plateau", "North Mohave"))
assert sorted(r["NAMELSAD"] for r, g in ccd) == ["Kaibab Plateau CCD", "North Mohave CCD"], "os dois CCDs da Strip não vieram"
strip = unary_union([g for r, g in ccd])
estados = {r["STUSPS"]: g for r, g in M.ler_shp_zip(M.base_em("cb_2025_us_state_500k.zip"),
                                                    lambda r: r["STUSPS"] in ("AZ", "NV", "UT", "CA", "CO", "NM"))}
osm = M.ler_osm(M.base_em("arizona-strip-osm-agua.json"))
lagos = unary_union([g for t, g in osm["areas"] if t.get("name") in ("Lake Mead", "Lake Powell", "Lake Mohave") and g.area > 1e-5])
rio = unary_union([g for t, g in osm["linhas"] if t.get("waterway") == "river"])
cidades = {p["name"]: (g.x, g.y) for p, g in M.ler_ne("ne_10m_populated_places_simple.geojson",
                                                       lambda p: p["adm1name"] == "Utah" and p["name"] in ("St. George", "Kanab"))}
assert set(cidades) == {"St. George", "Kanab"}, cidades

# ── as máscaras ──
terra = q.cheio()
m_lagos = q.mascara(lagos)
m_rio = q.linha(rio, M.env("MINI_RIO", 9))
agua = np.clip(m_lagos + m_rio, 0, 1)
seca = terra * (1 - agua)
FOLGA = M.env("MINI_STRIP_FOLGA", 0.006)
strip_r = strip.buffer(FOLGA).intersection(estados["AZ"]).intersection(strip.union(lagos.buffer(0.004)).union(rio.buffer(0.004)))
m_strip = q.mascara(strip_r)
m_strip_seca = m_strip * seca
m_ut = q.mascara(estados["UT"])
m_ut_seca = m_ut * seca

# ── o relevo (o método da m1, nas bases novas) ──
rel_base, info_rel = q.ler_base(M.base_em("m3-aster-relevo.png"))
elev, info_alt = q.ler_altitude(M.base_em("m3-aster-altitude.png"), M.base_em("gibs-colormap-ASTER_GDEM_Color_Index.xml"))
PX_M = q.MP * math.cos(math.radians((q.lat_s + q.lat_n) / 2))
hs_dem = M.sombreado(elev, PX_M, z=M.env("MINI_SOMB_Z", 2.5), suave=M.env("MINI_SOMB_SUAVE", 1.4))
_sel = seca > 0.5


def _z(a):
    return (a - np.median(a[_sel])) / max(1e-6, np.percentile(a[_sel], 84) - np.percentile(a[_sel], 16))


MIX = M.env("MINI_SOMB_MIX", 0.6)
cinza = (1 - MIX) * _z(rel_base[..., 0] / 255.0) + MIX * _z(hs_dem)
rel = M.Relevo(cinza, _sel, suave=M.env("MINI_REL_SUAVE", 1.2), sig_vol=M.env("MINI_REL_SIG_VOL", 4.0), vol=M.env("MINI_REL_VOL", 0.5),
               nit=M.env("MINI_REL_NIT", 1.8), sig_loc=M.env("MINI_REL_SIG_LOC", 22), aprofundar=M.env("MINI_APROFUNDAR", 0.2),
               sig_rug=M.env("MINI_REL_SIG_RUG", 4.0))
ESC = 177.6 / q.MP
prof = M.profundidade(elev, M.env("MINI_PROF_RAIO", 64 * ESC), M.env("MINI_PROF_D0", 1400), d_min=M.env("MINI_PROF_DMIN", 300))
GC = box(-114.06, 35.70, -111.585, 36.87)
perto = cv2.GaussianBlur(M.perto_de(q.linha(rio.intersection(GC), 3), M.env("MINI_GC_RAIO", 100 * ESC)), (0, 0), 12 * ESC)
prof_gc = prof * perto
rel.aprofundar_por(prof_gc, M.env("MINI_PROF_FORCA", 0.45))

# ── as cores ──
img = rel.amarelo()
# Utah: o relevo pintado em ciano (a sombra puxada para o azul-petróleo, a luz quase branca), misturado ao amarelo
UT_MIX = M.env("MINI_UT_MIX", 0.8)
ciano_rel = rel.cor(M.CIANO, M.env("MINI_UT_SOMBRA", 0.42), (0.55, 0.85, 1.0), (225, 252, 255), M.env("MINI_UT_LUZ", 0.45))
img = img * (1 - UT_MIX * m_ut_seca[..., None]) + ciano_rel * (UT_MIX * m_ut_seca[..., None])
img = M.sombra_fora(img, m_strip, seca, sig=M.env("MINI_STRIP_SOMBRA_SIG", 16), forca=M.env("MINI_STRIP_SOMBRA", 1.0))
img = img * (1 - m_strip_seca[..., None]) + rel.vermelho() * m_strip_seca[..., None]
prof_l = cv2.GaussianBlur(prof_gc, (0, 0), 2.5)
img = img * (1 - M.env("MINI_PROF_COR", 0.75) * prof_l)[..., None]
img = M.pintar_agua(img, agua, M.AZUL)
img = M.compor(img, M.BRANCO, M.borda_de(m_strip, M.env("MINI_STRIP_BORDA", 4)) * (1 - agua))
divisas = unary_union([g.boundary for g in estados.values()])
img = M.compor(img, M.BRANCO, q.linha(divisas, M.env("MINI_DIVISA", 4)) * seca * 0.95)
# o contorno de Utah um pouco mais forte que as outras divisas (o secundário, como o vermelho tem o dele)
img = M.compor(img, M.BRANCO, q.linha(estados["UT"].boundary, M.env("MINI_UT_BORDA", 6)) * seca)

sp = np.nonzero(m_strip > 0.5)
up = np.nonzero(m_ut > 0.5)
medidas = {"quadro": q.medidas(), "bases": {"relevo": info_rel, "altitude": info_alt},
           "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": M.env("MINI_SOMB_Z", 2.5), "px_chao_m": round(PX_M, 1)},
           "canion": {"profundidade_de_m": M.env("MINI_PROF_DMIN", 300), "profundidade_ate_m": M.env("MINI_PROF_D0", 1400),
                      "raio_px": round(64 * ESC, 1), "faixa_do_rio_px": round(100 * ESC, 1)},
           "agua": "azul",
           "strip": {"fracao_da_imagem": round(float((m_strip > 0.5).mean()), 4),
                     "caixa_palco": [int(sp[1].min()), int(sp[0].min()), int(sp[1].max()), int(sp[0].max())]},
           "utah": {"fracao_da_imagem": round(float((m_ut > 0.5).mean()), 4), "mistura_do_ciano": UT_MIX,
                    "caixa_palco": [int(up[1].min()), int(up[0].min()), int(up[1].max()), int(up[0].max())]}}

if os.environ.get("MINI_SO_MAPA"):
    from PIL import Image
    os.makedirs(os.path.join(M.PASTA, "_tmp"), exist_ok=True)
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).resize((1280, 720), Image.LANCZOS).save(
        os.path.join(M.PASTA, "_tmp", "m3-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"]), quality=90)
    print(json.dumps({k: medidas[k] for k in ("quadro", "strip", "utah")}))
    sys.exit(0)

# ── as setas: de St. George e de Kanab, curvas, até o meio do vermelho (pontos de controle em lon/lat) ──
xs, ys = q.palco(*cidades["St. George"])
xk, yk = q.palco(*cidades["Kanab"])
R_PONTO = M.env("MINI_PONTO_R", 17)


def seta_de(x0, y0, c1, c2, fim):
    """uma curva de Bézier do ponto da cidade (saindo logo abaixo dele) até o fim, com os controles em lon/lat"""
    return M.bezier((x0, y0 + R_PONTO + 8), q.palco(*c1), q.palco(*c2), q.palco(*fim))


SETAS = {"St. George": ((-113.70, 36.85), (-113.62, 36.58), (-113.38, 36.47)),
         "Kanab": ((-112.62, 36.80), (-112.55, 36.55), (-112.32, 36.45))}
curvas = [seta_de(xs, ys, *SETAS["St. George"]), seta_de(xk, yk, *SETAS["Kanab"])]
img, comps, a_seta = M.desenhar_setas(img, curvas)
img, a_p1 = M.ponto(img, xs, ys, R_PONTO)
img, a_p2 = M.ponto(img, xk, yk, R_PONTO)

# ── os rótulos ──
PX_ROT = M.env("MINI_ROT_PX", 60)
PX_CID = M.env("MINI_CID_PX", 50)
xy_nv = q.palco(M.env("MINI_NV_LON", -115.75), M.env("MINI_NV_LAT", 37.62))
xy_az = q.palco(M.env("MINI_AZ_LON", -112.75), M.env("MINI_AZ_LAT", 35.64))
# "GRAND CANYON" (o pedido da Sala, 18/11, para a m1, que vale aqui também: sem ele, o cânion é só uma linha azul): no amarelo logo ao sul
# do rio, sob o trecho do meio do cânion (do Kanab Creek ao Grand Canyon Village), inclinado como o rio desce ali, entre o rio e "ARIZONA"
PX_GC = M.env("MINI_GC_PX", 56)
GC_GRAUS = M.env("MINI_GC_GRAUS", 6.0)                               # positivo: desce para a direita
xy_gc = (M.env("MINI_GC_X", 1915.0), M.env("MINI_GC_Y", 1162.0))
itens = [("NEVADA", xy_nv[0], xy_nv[1], PX_ROT, "mm"), ("ARIZONA", xy_az[0], xy_az[1], PX_ROT, "mm"),
         ("ST. GEORGE", xs + M.env("MINI_SG_DX", 0), ys - M.env("MINI_SG_DY", 52), PX_CID, "ms"),
         ("KANAB", xk + M.env("MINI_KB_DX", 0), yk - M.env("MINI_KB_DY", 52), PX_CID, "ms"),
         ("GRAND CANYON", xy_gc[0], xy_gc[1], PX_GC, "mm", -GC_GRAUS)]
img, caixas_rot, a_rot = M.rotulos(img, itens)
_, _, a_gc = M.rotulos(np.zeros((M.H, M.W, 3), np.float32), [("GRAND CANYON", xy_gc[0], xy_gc[1], PX_GC, "mm", -GC_GRAUS)])

# ── a caixa: embaixo à esquerda, sobre Nevada, sem passar da divisa de 114,05 O. "WANTED IT" a 180 px é o que a largura de Nevada deixa;
# "UTAH" (4 letras) sobe a 290 px, a palavra que liga a caixa ao ciano (na 1ª rodada, 250) ──
linhas = [("UTAH", M.env("MINI_FS_UT", 290), 900, M.CIANO), ("WANTED IT", M.env("MINI_FS_WI", 180), 900, M.BRANCO)]
entre = [M.env("MINI_ENTRE", 40)]
larg, alt = M.medir_texto(linhas, entre)
pad_x, pad_y = 50, 44
barra = (round(0.075 * 205), round(0.10 * 205), M.TEXTO_VERMELHO)
bx = M.env("MINI_BX", 64)
by = M.env("MINI_BY", M.H - 72 - (alt + 2 * pad_y + barra[0] + barra[1]))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

alfa = np.maximum.reduce([a_caixa, a_seta, a_rot, a_p1, a_p2])
pontos = dict(medidas)
pontos["texto"] = "UTAH WANTED IT"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
x_div = q.palco(-114.05, 36.5)[0]
dist_vermelho = cv2.distanceTransform((m_strip < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
dist_utah = cv2.distanceTransform((m_ut < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "folga_ate_a_divisa_de_114_05_px": round(x_div - caixa[2]),
                   "distancia_ao_vermelho_px": round(float(dist_vermelho[a_caixa > 0.15].min()), 1),
                   "distancia_a_utah_px": round(float(dist_utah[a_caixa > 0.15].min()), 1)}
pontos["setas"] = {"tipo": "o pedido de Utah (não são estradas)", "comprimento_px": comps,
                   "controles_lonlat": SETAS,
                   "cidades": {k: {"lonlat": [round(v[0], 5), round(v[1], 5)], "fonte": "Natural Earth 10m populated places (cache)"}
                               for k, v in cidades.items()},
                   "ponta_sobre_o_vermelho": [bool(m_strip[int(round(c[-1][1])), int(round(c[-1][0]))] > 0.5) for c in curvas]}
pontos["rotulos"] = caixas_rot
dist_agua = cv2.distanceTransform((agua < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
sel = a_gc > 0.15
outros = np.maximum.reduce([a_caixa, a_seta, a_p1, a_p2, np.where(sel, 0, a_rot)])
dist_outros = cv2.distanceTransform((outros < 0.15).astype(np.uint8), cv2.DIST_L2, 5)
pontos["rotulo_grand_canyon"] = {"centro_palco": [round(v) for v in xy_gc], "graus_descendo_para_a_direita": GC_GRAUS, "fonte_px": PX_GC,
                                 "menor_distancia_ao_rio_px": round(float(dist_agua[sel].min()), 1),
                                 "menor_distancia_a_outra_peca_px": round(float(dist_outros[sel].min()), 1),
                                 "sobre_a_strip": round(float((sel & (m_strip > 0.5)).sum() / max(1, sel.sum())), 4),
                                 "no_canto_da_duracao": bool(sel[1120:, 2240:].any())}
pontos["pecas_sobre_a_strip"] = round(float(((alfa > 0.15) & (m_strip > 0.5)).sum() / max(1, (m_strip > 0.5).sum())), 4)
M.salvar(img, NOME, pontos, alfa)
