"""A miniatura de `arizona-strip` (vídeo 8, esboço para a escolha do Lucas; 17/11/2026): "Why Arizona Didn't Stop at the Grand Canyon".

    python -X utf8 -B -P out/_pautas/video-8/miniaturas/arizona-strip.py                 (da raiz do canal; sem rede)
    MINI_SO_MAPA=x python -X utf8 -B -P out/_pautas/video-8/miniaturas/arizona-strip.py  (só o mapa, sem peças: _tmp/az-mapa-x.jpg)
    MINI_ESCOLHA=why ...                                                                 (troca qual texto vai para arizona-strip-*)

O mapa (mapa.py):
- o norte do Arizona em relevo amarelo: o cinza da GIBS (ASTER GDEM) misturado com o sombreado calculado da altitude do ASTER GDEM
  (o índice de cor da GIBS, decodificado pelo colormap), com exagero vertical 2,5;
- o Grand Canyon marcado pela profundidade medida na altitude (quanto cada ponto está abaixo do terreno mais alto num raio de ~11 km),
  só na faixa do rio entre Lees Ferry e o lago Mead;
- a Arizona Strip em vermelho: os dois CCDs do Census que o cético somou (Kaibab Plateau e North Mohave, cb_2025_04_cousub_500k);
- o rio Colorado e os lagos Mead, Powell e Mohave (OSM, Overpass) em ciano;
- as divisas dos estados em branco fino (cb_2025_us_state_500k), com UTAH, NEVADA e ARIZONA pequenos.
Por cima: a seta branca do caminho de fora (de Colorado City, na Strip, sobe a Utah, desce por Nevada e volta ao Arizona ao sul do lago
Mead; a rota mais rápida até Kingman pelo cético, estilizada) e a caixa preta com o texto.

Grava as duas versões do texto: a escolhida (CUT OFF) em arizona-strip-*.jpg/png e a outra (WHY?) em _variantes/.
As bases: arizona-strip-bases.py (rede, um pedido por vez). Este script não faz pedido de rede.
"""
import math, os, sys
import numpy as np
import cv2
from shapely.geometry import box
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

SLUG = "arizona-strip"
ESCOLHA = os.environ.get("MINI_ESCOLHA", "cutoff")      # a versão que vai para arizona-strip-1280.jpg; a outra vai para _variantes/

# ── o quadro (lat de baixo, lat de cima, lon do centro): a Strip ocupa ~27 % da imagem, com Utah em cima, Nevada à esquerda e o
# resto do Arizona embaixo (o lugar da caixa) ──
q = M.Quadro(M.env("MINI_LAT_S", 35.45), M.env("MINI_LAT_N", 37.30), M.env("MINI_LON_C", -112.75))

# ── a geometria ──
ccd = M.ler_shp_zip(os.path.join(M.BASES, "cb_2025_04_cousub_500k.zip"),
                    lambda r: r["STATEFP"] == "04" and r["NAME"] in ("Kaibab Plateau", "North Mohave"))
assert sorted(r["NAMELSAD"] for r, g in ccd) == ["Kaibab Plateau CCD", "North Mohave CCD"], "os dois CCDs da Strip não vieram"
strip = unary_union([g for r, g in ccd])
estados = {r["STUSPS"]: g for r, g in M.ler_shp_zip(os.path.join(M.BASES, "cb_2025_us_state_500k.zip"),
                                                    lambda r: r["STUSPS"] in ("AZ", "NV", "UT", "CA", "CO", "NM"))}
osm = M.ler_osm(os.path.join(M.BASES, "arizona-strip-osm-agua.json"))
lagos = unary_union([g for t, g in osm["areas"] if t.get("name") in ("Lake Mead", "Lake Powell", "Lake Mohave") and g.area > 1e-5])
rio = unary_union([g for t, g in osm["linhas"] if t.get("waterway") == "river"])

# ── as máscaras ──
terra = q.cheio()                                        # sem mar no quadro: a terra é tudo menos a água
m_lagos = q.mascara(lagos)
m_rio = q.linha(rio, M.env("MINI_RIO", 9))
agua = np.clip(m_lagos + m_rio, 0, 1)
seca = terra * (1 - agua)
# a Strip: os dois CCDs, alargados um pouco por baixo da água (o limite 1:500k do Census e a margem do OSM não coincidem ao metro;
# a água por cima esconde a costura), sem passar das divisas do Arizona
FOLGA = M.env("MINI_STRIP_FOLGA", 0.006)
strip_r = strip.buffer(FOLGA).intersection(estados["AZ"]).intersection(strip.union(lagos.buffer(0.004)).union(rio.buffer(0.004)))
m_strip = q.mascara(strip_r)
m_strip_seca = m_strip * seca

# ── o relevo ──
rel_base, info_rel = q.ler_base(os.path.join(M.BASES, "arizona-strip-aster-relevo.png"))
elev, info_alt = q.ler_altitude(os.path.join(M.BASES, "arizona-strip-aster-altitude.png"),
                                os.path.join(M.BASES, "gibs-colormap-ASTER_GDEM_Color_Index.xml"))
# o cinza da GIBS (o detalhe fino) misturado com o sombreado calculado da altitude na escala do palco, com exagero vertical (o volume
# largo das referências). Os dois em escore z na terra antes de misturar. Só com o cinza (1ª rodada), o cânion era textura fina
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
# o Grand Canyon marcado pela profundidade: "quanto abaixo do terreno mais alto num raio de ~11 km", de 300 m (0) a 1.400 m (1); o
# fundo do cânion vai para a cor da sombra, e a cor escurece, lisa, na medida da profundidade. Só na faixa do Grand Canyon (até ~18 km
# do rio do OSM, de Lees Ferry ao lago Mead): no quadro inteiro (2ª rodada), as serras de Nevada viraram manchas
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
COR_AGUA = {"azul": M.AZUL, "ciano": M.CIANO}[os.environ.get("MINI_AGUA", "ciano")]
img = M.pintar_agua(img, agua, COR_AGUA)
img = M.compor(img, M.BRANCO, M.borda_de(m_strip, M.env("MINI_STRIP_BORDA", 4)) * (1 - agua))
divisas = unary_union([g.boundary for g in estados.values()])
img = M.compor(img, M.BRANCO, q.linha(divisas, M.env("MINI_DIVISA", 4)) * seca * 0.95)

sp = np.nonzero(m_strip > 0.5)
medidas = {"quadro": q.medidas(), "bases": {"relevo": info_rel, "altitude": info_alt},
           "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": M.env("MINI_SOMB_Z", 2.5), "px_chao_m": round(PX_M, 1)},
           "canion": {"profundidade_de_m": M.env("MINI_PROF_DMIN", 300), "profundidade_ate_m": M.env("MINI_PROF_D0", 1400),
                      "raio_px": M.env("MINI_PROF_RAIO", 64), "faixa_do_rio_px": M.env("MINI_GC_RAIO", 100)},
           "agua": "ciano" if COR_AGUA == M.CIANO else "azul",
           "strip": {"fracao_da_imagem": round(float((m_strip > 0.5).mean()), 4),
                     "caixa_palco": [int(sp[1].min()), int(sp[0].min()), int(sp[1].max()), int(sp[0].max())]}}

if os.environ.get("MINI_SO_MAPA"):
    from PIL import Image
    os.makedirs(os.path.join(M.PASTA, "_tmp"), exist_ok=True)
    f = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    v = Image.new("RGB", (1280 + 20 + 320, 720), (15, 15, 15))
    v.paste(f.resize((1280, 720), Image.LANCZOS), (0, 0))
    v.paste(f.resize((320, 180), Image.LANCZOS), (1300, 0))
    v.paste(f.resize((168, 94), Image.LANCZOS), (1300, 200))
    v.save(os.path.join(M.PASTA, "_tmp", "az-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"]), quality=90)
    print(medidas)
    sys.exit(0)

# ── os rótulos dos estados (pequenos, brancos com sombra), em lon/lat ──
PX_ROT = M.env("MINI_ROT_PX", 64)
xy_ut = q.palco(M.env("MINI_UT_LON", -111.95), M.env("MINI_UT_LAT", 37.16))
xy_nv = q.palco(M.env("MINI_NV_LON", -114.52), M.env("MINI_NV_LAT", 37.16))
xy_az = q.palco(M.env("MINI_AZ_LON", -113.60), M.env("MINI_AZ_LAT", 35.62))
img, caixas_rot, a_rot = M.rotulos(img, [("UTAH", xy_ut[0], xy_ut[1], PX_ROT, "mm"), ("NEVADA", xy_nv[0], xy_nv[1], PX_ROT, "mm"),
                                         ("ARIZONA", xy_az[0], xy_az[1], PX_ROT, "mm")])
base_img = img.copy()

# ── a seta do caminho de fora: de Colorado City (na Strip), sobe a Utah, desce por Nevada e volta ao Arizona ao sul do lago Mead ──
# (a rota mais rápida até Kingman, pelo cético: Utah, I-15, Nevada, Hoover Dam; estilizada numa curva lisa por estes pontos)
ROTA = [(-112.975, 36.93), (-113.10, 37.17), (-113.75, 37.22), (-114.30, 37.02), (-114.44, 36.60), (-114.42, 36.15),
        (-114.20, 35.80), (-113.95, 35.66)]
curva = M.caminho([q.palco(*p) for p in ROTA], 500)

# ── a caixa: embaixo, no resto do Arizona, entre o lóbulo oeste da Strip e o canto da duração. O texto acaba em x 1950 (76 % da
# largura): o selo da duração no 168 (~36 × 18 px, fonte fixa) começa em ~76 % e não o cobre ──
TEXTOS = {"cutoff": [("CUT OFF", M.env("MINI_FS_CUT", 205), 900, M.TEXTO_VERMELHO)],
          "why": [("WHY?", M.env("MINI_FS_WHY", 260), 900, M.TEXTO_VERMELHO)]}
for nome_t, linhas in TEXTOS.items():
    img = base_img.copy()
    img, comps, a_seta = M.desenhar_setas(img, [curva])
    larg, alt = M.medir_texto(linhas)
    pad_x, pad_y = 50, 44
    barra = (round(0.075 * linhas[0][1]), round(0.10 * linhas[0][1]), M.TEXTO_VERMELHO)
    bx = M.env("MINI_BX_" + nome_t.upper(), M.env("MINI_BOX_DIR", 2000) - (larg + 2 * pad_x))
    by = M.env("MINI_BY_" + nome_t.upper(), min(1060, M.H - 72 - (alt + 2 * pad_y + barra[0] + barra[1])))
    img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, [], barra=barra)
    alfa = np.maximum(np.maximum(a_caixa, a_seta), a_rot)
    lt = caixas_l[linhas[0][0]]
    pontos = dict(medidas)
    pontos["texto"] = nome_t
    pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l, "fonte": "Inter 900 a %d px (a maiúscula: %d px, %.1f px no 168)" % (
        linhas[0][1], lt[3] - lt[1], (lt[3] - lt[1]) * 168 / M.W), "texto_acaba_em_fracao_da_largura": round(lt[2] / M.W, 3)}
    pontos["seta"] = {"rota_lonlat": ROTA, "comprimento_px": comps[0]}
    pontos["rotulos"] = caixas_rot
    pontos["pecas_sobre_a_strip"] = round(float(((alfa > 0.15) & (m_strip > 0.5)).sum() / max(1, (m_strip > 0.5).sum())), 4)
    destino = M.PASTA if nome_t == ESCOLHA else os.path.join(M.PASTA, "_variantes")
    nome_arq = SLUG if nome_t == ESCOLHA else "%s-%s" % (SLUG, nome_t)
    M.salvar(img, nome_arq, pontos, alfa, destino)
