"""m1, "STILL ARIZONA" (pauta do vídeo 8, §8, miniatura 1; 18/11/2026), com o título "Why Arizona Didn't Stop at the Grand Canyon".

    python -X utf8 -B -P roteiros/arizona-strip/miniatura/m1.py          (da raiz do canal; sem rede)
    MINI_SO_MAPA=x ...                                                  (só o mapa e os rótulos: _tmp/m1-mapa-x.jpg)

É a miniatura da busca (out/_pautas/video-8/miniaturas/arizona-strip.py, que não foi editada), copiada para cá, com duas mudanças:
- o rótulo "GRAND CANYON" (branco, Inter 800, 58 px, quase do tamanho dos estados) no amarelo logo ao sul do rio, sob o trecho do meio
  do cânion: o §8 propõe; o cético da pauta (K3) e a Sala (18/11) pedem, porque sem ele o cânion é só uma linha azul;
- o texto da caixa: sai "CUT OFF" (a palavra do enxame e das manchetes da enchente; cético da pauta, K3) e entra "STILL ARIZONA", em duas
  linhas ("STILL" branco, "ARIZONA" vermelho), a pedido da Sala (18/11). A caixa muda de tamanho e de lugar para caber (abaixo).
A arte é a mesma, com os mesmos números (conferir.py, item 5: fora da caixa e do rótulo, nenhum pixel mudou):
- o norte do Arizona em relevo amarelo: o cinza da GIBS (ASTER GDEM) misturado com o sombreado calculado da altitude do ASTER GDEM
  (o índice de cor da GIBS, decodificado pelo colormap), com exagero vertical 2,5;
- o Grand Canyon marcado pela profundidade medida na altitude, só na faixa do rio entre Lees Ferry e o lago Mead;
- a Arizona Strip em vermelho: os dois CCDs do Census (Kaibab Plateau e North Mohave, cb_2025_04_cousub_500k);
- o rio Colorado e os lagos Mead, Powell e Mohave (OSM, Overpass) em ciano;
- as divisas dos estados em branco fino (cb_2025_us_state_500k), com UTAH, NEVADA e ARIZONA pequenos;
- a seta branca do caminho de fora (de Colorado City sobe a Utah, desce por Nevada e volta ao Arizona ao sul do lago Mead). É
  ESQUEMÁTICA, como o §8 registra: a rota de verdade passa por Las Vegas, a oeste do quadro, e termina em Kingman, ao sul dele. A seta
  sobre as rodovias de verdade é a da m2;
- a caixa preta com "STILL ARIZONA".
As bases: as de out/_pautas/video-8/miniaturas/_bases/ (lidas, sem mover). Nenhum pedido de rede.
"""
import math, os, sys
import numpy as np
import cv2
from shapely.geometry import box
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

NOME = "m1"

q = M.Quadro(M.env("MINI_LAT_S", 35.45), M.env("MINI_LAT_N", 37.30), M.env("MINI_LON_C", -112.75))

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

# ── o relevo ──
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
prof = M.profundidade(elev, M.env("MINI_PROF_RAIO", 64), M.env("MINI_PROF_D0", 1400), d_min=M.env("MINI_PROF_DMIN", 300))
GC = box(-114.06, 35.70, -111.585, 36.87)
perto = cv2.GaussianBlur(M.perto_de(q.linha(rio.intersection(GC), 3), M.env("MINI_GC_RAIO", 100)), (0, 0), 12)
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

sp = np.nonzero(m_strip > 0.5)
medidas = {"quadro": q.medidas(), "bases": {"relevo": info_rel, "altitude": info_alt},
           "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": M.env("MINI_SOMB_Z", 2.5), "px_chao_m": round(PX_M, 1)},
           "canion": {"profundidade_de_m": M.env("MINI_PROF_DMIN", 300), "profundidade_ate_m": M.env("MINI_PROF_D0", 1400),
                      "raio_px": M.env("MINI_PROF_RAIO", 64), "faixa_do_rio_px": M.env("MINI_GC_RAIO", 100)},
           "agua": "ciano",
           "strip": {"fracao_da_imagem": round(float((m_strip > 0.5).mean()), 4),
                     "caixa_palco": [int(sp[1].min()), int(sp[0].min()), int(sp[1].max()), int(sp[0].max())]}}


# ── os rótulos: os estados (pequenos, brancos com sombra) e, novo, "GRAND CANYON" ao longo do cânion ──
PX_ROT = M.env("MINI_ROT_PX", 64)
xy_ut = q.palco(M.env("MINI_UT_LON", -111.95), M.env("MINI_UT_LAT", 37.16))
xy_nv = q.palco(M.env("MINI_NV_LON", -114.52), M.env("MINI_NV_LAT", 37.16))
xy_az = q.palco(M.env("MINI_AZ_LON", -113.60), M.env("MINI_AZ_LAT", 35.62))
# "GRAND CANYON": no amarelo logo ao sul do rio, sob o trecho do meio do cânion (do Kanab Creek ao Grand Canyon Village), entre o rio e a
# caixa. Rodadas: (1) paralelo à reta ajustada ao rio entre 112,62 e 112,05 O, 36,6°, caía sobre a caixa; (2) a 6°, do tamanho dos
# estados (64 px), ficava a 7 px da caixa de duas linhas do "STILL ARIZONA"; (3) paralelo ao trecho oeste (−27°), encostava no rio na ponta
# e empurrava a caixa para debaixo da volta do Village. Ficou na horizontal, a 58 px. As distâncias ao rio e à caixa vão medidas
PX_GC = M.env("MINI_GC_PX", 58)
ang = M.env("MINI_GC_GRAUS", 0.0)                                  # positivo: desce para a direita
cx, cy = M.env("MINI_GC_X", 1335.0), M.env("MINI_GC_Y", 958.0)
img, caixas_rot, a_rot = M.rotulos(img, [("UTAH", xy_ut[0], xy_ut[1], PX_ROT, "mm"), ("NEVADA", xy_nv[0], xy_nv[1], PX_ROT, "mm"),
                                         ("ARIZONA", xy_az[0], xy_az[1], PX_ROT, "mm"),
                                         ("GRAND CANYON", cx, cy, PX_GC, "mm", -ang)])
_, _, a_gc = M.rotulos(np.zeros((M.H, M.W, 3), np.float32), [("GRAND CANYON", cx, cy, PX_GC, "mm", -ang)])   # só o alfa dele, para medir

if os.environ.get("MINI_SO_MAPA"):
    from PIL import Image
    os.makedirs(os.path.join(M.PASTA, "_tmp"), exist_ok=True)
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).resize((1280, 720), Image.LANCZOS).save(
        os.path.join(M.PASTA, "_tmp", "m1-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"]), quality=90)
    print(medidas["strip"], "rotulo GC", round(cx), round(cy), round(ang, 1), caixas_rot)
    sys.exit(0)

# ── a seta do caminho de fora (esquemática, a mesma da busca) ──
ROTA = [(-112.975, 36.93), (-113.10, 37.17), (-113.75, 37.22), (-114.30, 37.02), (-114.44, 36.60), (-114.42, 36.15),
        (-114.20, 35.80), (-113.95, 35.66)]
curva = M.caminho([q.palco(*p) for p in ROTA], 500)
img, comps, a_seta = M.desenhar_setas(img, [curva])

# ── a caixa: embaixo, no resto do Arizona, entre o lóbulo oeste da Strip e a volta do Grand Canyon Village, em duas linhas: "STILL" em
# branco e "ARIZONA" em vermelho (a cor da Strip), com o sublinhado vermelho. Os limites: o lóbulo oeste (x ~930), a volta do Village (o
# vermelho desce a y ~985 em x 1.800–1.880), o selo da duração no 168 (o texto da faixa de baixo acaba antes de 76 % da largura) e a borda
# de baixo. Numa linha só, "STILL ARIZONA" teria de acabar em 76 % e sairia a ~127 px (6 px de maiúscula no 168); com "ARIZONA" a 205,
# como o "CUT OFF", a caixa cobria a volta do Village ──
linhas = [("STILL", M.env("MINI_FS_STILL", 136), 900, M.BRANCO), ("ARIZONA", M.env("MINI_FS_AZ", 182), 900, M.TEXTO_VERMELHO)]
entre = [M.env("MINI_ENTRE", 28)]
larg, alt = M.medir_texto(linhas, entre)
pad_x, pad_y = 44, 38
barra = (round(0.075 * 182), round(0.10 * 182), M.TEXTO_VERMELHO)
bx = M.env("MINI_BX", 972)
by = M.env("MINI_BY", M.H - 50 - (alt + 2 * pad_y + barra[0] + barra[1]))
img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)

alfa = np.maximum.reduce([a_caixa, a_seta, a_rot])
pontos = dict(medidas)
pontos["texto"] = "STILL ARIZONA"
cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
dist_caixa = cv2.distanceTransform((a_caixa < 0.15).astype(np.uint8), cv2.DIST_L2, 5)
dist_strip = cv2.distanceTransform((m_strip < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l,
                   "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                   "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                   "distancia_ao_vermelho_px": round(float(dist_strip[a_caixa > 0.15].min()), 1)}
pontos["seta"] = {"rota_lonlat": ROTA, "comprimento_px": comps[0], "tipo": "esquemática (a rota real sai do quadro por Las Vegas)"}
pontos["rotulos"] = caixas_rot
dist_agua = cv2.distanceTransform((agua < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
sel = a_gc > 0.15
pontos["rotulo_grand_canyon"] = {"centro_palco": [round(cx), round(cy)], "graus_descendo_para_a_direita": round(ang, 1),
                                 "fonte_px": PX_GC,
                                 "menor_distancia_ao_rio_px": round(float(dist_agua[sel].min()), 1),
                                 "menor_distancia_a_caixa_px": round(float(dist_caixa[sel].min()), 1),
                                 "sobre_a_agua": round(float((sel & (agua > 0.5)).sum() / max(1, sel.sum())), 4),
                                 "sobre_a_strip": round(float((sel & (m_strip > 0.5)).sum() / max(1, sel.sum())), 4)}
pontos["pecas_sobre_a_strip"] = round(float(((alfa > 0.15) & (m_strip > 0.5)).sum() / max(1, (m_strip > 0.5).sum())), 4)
M.salvar(img, NOME, pontos, alfa)
