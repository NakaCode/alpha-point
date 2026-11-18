"""m2, "265 MILES" (pauta do vídeo 8, §8, miniatura 2; 18/11/2026; RESERVA), com o título "Why Arizona Didn't Stop at the Grand Canyon".

    python -X utf8 -B -P roteiros/arizona-strip/miniatura/m2.py          (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                  (só o mapa e a seta, sem a caixa: _tmp/m2-mapa-x.jpg)
    MINI_CAIXA=linha ...                                                (a caixa numa linha só, "265 MILES"; o padrão é em duas)

O quadro é mais largo que o da m1, para caber a rota de verdade: Las Vegas, a Hoover Dam e Kingman dentro.
- o relevo amarelo, o cânion, a Strip em vermelho (os dois CCDs do Census), a água em ciano e as divisas: o mesmo método da m1, com
  as mesmas bases (out/_pautas/video-8/miniaturas/_bases/, lidas sem mover);
- a seta branca e grossa vai SOBRE A GEOMETRIA DAS RODOVIAS do HPMS 2025 (FHWA; os arquivos que o leitor B baixou em
  midia/arizona-strip/fontes/b/), cortada nos mesmos marcos de milha da conta do leitor B (b_hpms_rota.py; pautas/arizona-strip/
  _trabalho/fatos-b.md §2.1): AZ 389 (do centro de Colorado City à linha de Utah), UT 59 (até Hurricane), UT 9 (até a I-15), I-15 em
  Utah, no Arizona (o Virgin River Gorge) e em Nevada (até o Spaghetti Bowl, em Las Vegas), I-11 (até a ponte da Hoover Dam) e US 93
  no Arizona (até Kingman). A linha é reamostrada e alisada (gaussiana de 14 px do palco) para a seta não tremer; o desvio entre a seta e
  a estrada vai medido no m2-pontos.json;
- um ponto branco em Colorado City e outro em Kingman: as duas pontas da medida do cético e do leitor B (o centro de Colorado City, na
  Central St., e a sede do condado, no centro de Kingman; out/_pautas/video-8/_trabalho/cetico-arizona-strip/rotas.py);
- os rótulos pequenos: KINGMAN, UTAH, NEVADA e ARIZONA. O ponto de Colorado City vai sem nome (a Sala, 18/11/2026, depois do cético da
  pauta, K9: o nome da cidade não vai a nenhuma miniatura);
- RESERVA desde 18/11/2026 (a Sala, depois do cético da pauta, K3): fica fora da folha principal; a folha.py a põe em folha-reserva.png;
- a caixa preta, embaixo, entre a ponta da seta e o canto da duração, sem cobrir o vermelho: "265" em vermelho e "MILES" em branco.
Nenhum pedido de rede.
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.geometry import box, Point, LineString
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

NOME = "m2"

# ── o quadro: de 35,03 a 37,40 N, centrado em 112,85 O (a largura sai do 16:9): de ~115,45 a ~110,25 O. Las Vegas (115,15 O) e
# Kingman (35,19 N) entram com folga para a seta; a Strip inteira, com o Lake Powell no canto de cima à direita ──
q = M.Quadro(M.env("MINI_LAT_S", 35.03), M.env("MINI_LAT_N", 37.40), M.env("MINI_LON_C", -112.85))

# ── a geometria (a mesma da m1) ──
ccd = M.ler_shp_zip(M.base_em("cb_2025_04_cousub_500k.zip"),
                    lambda r: r["STATEFP"] == "04" and r["NAME"] in ("Kaibab Plateau", "North Mohave"))
assert sorted(r["NAMELSAD"] for r, g in ccd) == ["Kaibab Plateau CCD", "North Mohave CCD"], "os dois CCDs da Strip não vieram"
strip = unary_union([g for r, g in ccd])
estados = {r["STUSPS"]: g for r, g in M.ler_shp_zip(M.base_em("cb_2025_us_state_500k.zip"),
                                                    lambda r: r["STUSPS"] in ("AZ", "NV", "UT", "CA", "CO", "NM"))}
osm = M.ler_osm(M.base_em("arizona-strip-osm-agua.json"))
lagos = unary_union([g for t, g in osm["areas"] if t.get("name") in ("Lake Mead", "Lake Powell", "Lake Mohave") and g.area > 1e-5])
rio = unary_union([g for t, g in osm["linhas"] if t.get("waterway") == "river"])

# ── a rota pelas rodovias do HPMS 2025, nos marcos da conta do leitor B (hpms-rota-saida.txt) ──
PERNAS = [("hpms-AZ-4-389.json", 1.400, 0.000, "AZ 389"), ("hpms-UT-4-59.json", 0.000, 22.261, "UT 59"),
          ("hpms-UT-4-9.json", 9.782, 0.148, "UT 9"), ("hpms-UT-2-15.json", 15.962, 0.000, "I-15 UT"),
          ("hpms-AZ-2-15.json", 31.147, 0.000, "I-15 AZ"), ("hpms-NV-2-15.json", 123.765, 42.882, "I-15 NV"),
          ("hpms-NV-2-11.json", 37.258, 0.209, "I-11 NV"), ("hpms-AZ-3-93.json", 2.198, 72.168, "US 93 AZ")]
# as pontas da medida (o cético, rotas.py, e o leitor B, b_hpms_rota.py): o centro de Colorado City (Central St.) e a sede do condado de
# Mohave, no centro de Kingman
CC = (-112.9758, 36.9906)
KM = (-114.0516, 35.1908)
rota_ll, reg_pernas = [CC], []
for arq, a, b, nome in PERNAS:
    pts, reg = M.ler_hpms(arq, a, b)
    if nome == "I-15 AZ":
        # a base do Arizona estende a I-15 1,7 mi para dentro de Utah (fatos-b.md §2.1): fica só o que está ao sul da linha
        pts = [p for p in pts if p[1] <= 37.0]
        reg["vertices"] = len(pts)
        reg["milhas_pela_geometria"] = round(sum(M._hav_mi(pts[i], pts[i + 1]) for i in range(len(pts) - 1)), 2)
        reg["corte"] = "só os vértices ao sul de 37,0 N (a linha de Utah)"
    reg["perna"] = nome
    reg_pernas.append(reg)
    rota_ll += pts
rota_ll.append(KM)
mi_total = sum(M._hav_mi(rota_ll[i], rota_ll[i + 1]) for i in range(len(rota_ll) - 1))

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

# ── o relevo (o método da m1) ──
rel_base, info_rel = q.ler_base(M.base_em("arizona-strip-aster-relevo.png"))
elev, info_alt = q.ler_altitude(M.base_em("arizona-strip-aster-altitude.png"), M.base_em("gibs-colormap-ASTER_GDEM_Color_Index.xml"))
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
# o raio da profundidade e a faixa do rio vão na escala do quadro (na m1, 64 e 100 px a 177,6 m/px)
ESC = 177.6 / q.MP
prof = M.profundidade(elev, M.env("MINI_PROF_RAIO", 64 * ESC), M.env("MINI_PROF_D0", 1400), d_min=M.env("MINI_PROF_DMIN", 300))
GC = box(-114.06, 35.70, -111.585, 36.87)
perto = cv2.GaussianBlur(M.perto_de(q.linha(rio.intersection(GC), 3), M.env("MINI_GC_RAIO", 100 * ESC)), (0, 0), 12 * ESC)
prof_gc = prof * perto
rel.aprofundar_por(prof_gc, M.env("MINI_PROF_FORCA", 0.45))

# ── as cores ──
img = rel.amarelo()
img = M.sombra_fora(img, m_strip, seca, sig=M.env("MINI_STRIP_SOMBRA_SIG", 16), forca=M.env("MINI_STRIP_SOMBRA", 1.0))
img = img * (1 - m_strip_seca[..., None]) + rel.vermelho() * m_strip_seca[..., None]
prof_l = cv2.GaussianBlur(prof_gc, (0, 0), 2.5)
img = img * (1 - M.env("MINI_PROF_COR", 0.75) * prof_l)[..., None]
img = M.pintar_agua(img, agua, M.CIANO)
img = M.compor(img, M.BRANCO, M.borda_de(m_strip, M.env("MINI_STRIP_BORDA", 4)) * (1 - agua))
divisas = unary_union([g.boundary for g in estados.values()])
img = M.compor(img, M.BRANCO, q.linha(divisas, M.env("MINI_DIVISA", 4)) * seca * 0.95)

# ── a seta sobre a estrada: do ponto de Colorado City até encostar no ponto de Kingman ──
R_PONTO = M.env("MINI_PONTO_R", 17)
rota_palco = [q.palco(*p) for p in rota_ll]
curva, desvio = M.seta_suave(rota_palco, passo=M.env("MINI_SETA_PASSO", 6), sig=M.env("MINI_SETA_SIG", 14))
# a ponta para antes do centro de Kingman, encostando no ponto (o ponto vai por cima)
xk, yk = q.palco(*KM)
while len(curva) > 2 and math.dist(curva[-1], (xk, yk)) < R_PONTO + M.env("MINI_PONTA_FOLGA", 10):
    curva.pop()
img, comps, a_seta = M.desenhar_setas_traco(img, [curva], w0=M.env("MINI_SETA_W0", 22), w1=M.env("MINI_SETA_W1", 44),
                                      cab_l=M.env("MINI_CAB_L", 104), cab_w=M.env("MINI_CAB_W", 140))
xc, yc = q.palco(*CC)
img, a_p1 = M.ponto(img, xc, yc, R_PONTO)
img, a_p2 = M.ponto(img, xk, yk, R_PONTO)

# ── os rótulos ──
PX_ROT = M.env("MINI_ROT_PX", 60)
xy_ut = q.palco(M.env("MINI_UT_LON", -111.95), M.env("MINI_UT_LAT", 37.22))
xy_nv = q.palco(M.env("MINI_NV_LON", -115.00), M.env("MINI_NV_LAT", 37.15))
xy_az = q.palco(M.env("MINI_AZ_LON", -111.05), M.env("MINI_AZ_LAT", 35.72))
# o ponto de Colorado City vai SEM NOME (a Sala, 18/11, depois do cético da pauta, K9: em nenhuma miniatura vai o nome "Colorado City")
itens = [("UTAH", xy_ut[0], xy_ut[1], PX_ROT, "mm"), ("NEVADA", xy_nv[0], xy_nv[1], PX_ROT, "mm"),
         ("ARIZONA", xy_az[0], xy_az[1], PX_ROT, "mm"),
         ("KINGMAN",xk + M.env("MINI_KM_DX", 34), yk + M.env("MINI_KM_DY", 0), M.env("MINI_CID_PX", 50), "lm")]
img, caixas_rot, a_rot = M.rotulos(img, itens)

sp = np.nonzero(m_strip > 0.5)
medidas = {"quadro": q.medidas(), "bases": {"relevo": info_rel, "altitude": info_alt},
           "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": M.env("MINI_SOMB_Z", 2.5), "px_chao_m": round(PX_M, 1)},
           "canion": {"profundidade_de_m": M.env("MINI_PROF_DMIN", 300), "profundidade_ate_m": M.env("MINI_PROF_D0", 1400),
                      "raio_px": round(64 * ESC, 1), "faixa_do_rio_px": round(100 * ESC, 1)},
           "agua": "ciano",
           "strip": {"fracao_da_imagem": round(float((m_strip > 0.5).mean()), 4),
                     "caixa_palco": [int(sp[1].min()), int(sp[0].min()), int(sp[1].max()), int(sp[0].max())]},
           "seta": {"fonte": "HPMS 2025 (FHWA), as seções das rodovias nos marcos da conta do leitor B", "pernas": reg_pernas,
                    "milhas_da_linha_desenhada": round(mi_total, 1),
                    "pontas": {"colorado_city": {"lonlat": CC, "fonte": "o centro da cidade (Central St.) do cético e do leitor B"},
                               "kingman": {"lonlat": KM, "fonte": "a sede do condado de Mohave (centro de Kingman), do cético e do leitor B"}},
                    "alisamento": {"passo_px": M.env("MINI_SETA_PASSO", 6), "sigma_px": M.env("MINI_SETA_SIG", 14)},
                    "desvio_da_estrada": dict(desvio, km_max=round(desvio["desvio_max_px"] * q.MP * math.cos(math.radians(36.2)) / 1000, 2)),
                    "comprimento_px": comps[0]}}

if os.environ.get("MINI_SO_MAPA"):
    from PIL import Image
    os.makedirs(os.path.join(M.PASTA, "_tmp"), exist_ok=True)
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).resize((1280, 720), Image.LANCZOS).save(
        os.path.join(M.PASTA, "_tmp", "m2-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"]), quality=90)
    print(json.dumps({k: medidas[k] for k in ("quadro", "strip")}), medidas["seta"]["desvio_da_estrada"], medidas["seta"]["milhas_da_linha_desenhada"], caixas_rot)
    sys.exit(0)

# ── a caixa: embaixo, entre a ponta da seta (Kingman) e o canto da duração, sem cobrir o vermelho ──
FS = M.env("MINI_FS", 205)
if os.environ.get("MINI_CAIXA") == "linha":
    linhas = [([("265 ", M.TEXTO_VERMELHO), ("MILES", M.BRANCO)], FS, 900, M.TEXTO_VERMELHO)]
    entre = []
else:
    linhas = [("265", M.env("MINI_FS_NUM", 250), 900, M.TEXTO_VERMELHO), ("MILES", M.env("MINI_FS_MI", 172), 900, M.BRANCO)]
    entre = [M.env("MINI_ENTRE", 40)]
larg, alt = M.medir_texto(linhas, entre)
pad_x, pad_y = 50, 44
barra = (round(0.075 * FS), round(0.10 * FS), M.TEXTO_VERMELHO)
bx = M.env("MINI_BX", 1180)
by = M.env("MINI_BY", M.H - 72 - (alt + 2 * pad_y + barra[0] + barra[1]))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

alfa = np.maximum.reduce([a_caixa, a_seta, a_rot, a_p1, a_p2])
pontos = dict(medidas)
pontos["texto"] = "265 MILES"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "sobre_a_strip_px": int(((a_caixa > 0.15) & (m_strip > 0.5)).sum()),
                   "distancia_ao_vermelho_px": round(float(cv2.distanceTransform((m_strip < 0.5).astype(np.uint8), cv2.DIST_L2, 5)[a_caixa > 0.15].min()), 1)}
pontos["rotulos"] = caixas_rot
pontos["pecas_sobre_a_strip"] = round(float(((alfa > 0.15) & (m_strip > 0.5)).sum() / max(1, (m_strip > 0.5).sum())), 4)
M.salvar(img, NOME, pontos, alfa)
