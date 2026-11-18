"""A miniatura de `banff` (vídeo 8, esboço para a escolha do Lucas; 17/11/2026): "Why You Can Buy a House in Banff but Can't Live in It".

    python -X utf8 -B -P out/_pautas/video-8/miniaturas/banff.py                 (da raiz do canal; sem rede)
    MINI_SO_MAPA=x python -X utf8 -B -P out/_pautas/video-8/miniaturas/banff.py  (só o mapa, sem peças: _tmp/bf-mapa-x.jpg)
    MINI_ESCOLHA=pct ...                                                         (troca qual texto vai para banff-*)

O mapa (mapa.py):
- o vale do Bow entre as Rochosas, de Banff a Canmore, em relevo amarelo: o cinza da GIBS (ASTER GDEM) misturado com o sombreado
  calculado da altitude do ASTER GDEM (o índice de cor da GIBS, decodificado pelo colormap), com luz de duas direções;
- a cidade de Banff em vermelho: o limite oficial no OSM (a relação 8452792, a que o cético mediu: 4,88 km²);
- o rio Bow e os lagos (OSM) em ciano;
- o fundo de vale (o chão baixo e plano dentro do parque, abaixo de 1.450 m e com declive de até 10°) é medido e vai ao pontos.json,
  mas não se pinta (em ciano lia como lago; MINI_FUNDO=1 o pinta);
- o limite do parque nacional de Banff (OSM, relação 6365995) em branco fino, com o lado de fora um pouco mais escuro;
- Canmore (fora do parque) marcada por um ponto branco no centro administrativo do OSM, com BANFF e CANMORE pequenos.
Por cima: a seta branca grossa de Canmore até Banff (quem trabalha em Banff e mora fora) e a caixa preta com o texto.

Grava as duas versões do texto: a escolhida (WORKERS ONLY) em banff-*.jpg/png e a outra (0.07%) em _variantes/.
As bases: banff-bases.py (rede, um pedido por vez). Este script não faz pedido de rede.
"""
import math, os, sys
import numpy as np
import cv2
from shapely.geometry import Point
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

SLUG = "banff"
ESCOLHA = os.environ.get("MINI_ESCOLHA", "workers")

# ── o quadro: de Banff (em cima, à esquerda) a Canmore (embaixo, à direita), o vale do Bow na diagonal; 0,38° de largura (26 km),
# para a cidade (3,2 km) ter ~310 px no palco e ~20 px no 168. Canmore fica a 73 % da largura e 84 % da altura: à esquerda do selo
# da duração no 168 (~36 × 18 px, de ~76 % da largura em diante) ──
q = M.Quadro(M.env("MINI_LAT_S", 51.0683), M.env("MINI_LAT_N", 51.2024), M.env("MINI_LON_C", -115.4466))

# ── a geometria (OSM) ──
osm = M.ler_osm(os.path.join(M.BASES, "banff-osm.json"))
por_id = {t["_id"]: g for t, g in osm["areas"]}
cidade = por_id[8452792]          # Banff (a cidade), admin_level 6
canmore = por_id[8452489]         # Town of Canmore
parque = por_id[6365995]          # Banff National Park (boundary=protected_area)
lagos = unary_union([g for t, g in osm["areas"] if t.get("natural") == "water" and t["_id"] not in (8452792, 8452489, 6365995)])
rio = unary_union([g for t, g in osm["linhas"] if t.get("waterway") == "river" and t.get("name") == "Bow River"])
# os centros administrativos das duas cidades (os nós admin_centre das relações, lidos do mesmo arquivo)
import json
_d = json.load(open(os.path.join(M.BASES, "banff-osm.json"), encoding="utf-8"))
centro = {}
for e in _d["elements"]:
    if e["type"] == "relation" and e["id"] in (8452792, 8452489):
        n = [m for m in e["members"] if m["type"] == "node" and m.get("role") == "admin_centre"][0]
        centro[e["id"]] = (n["lon"], n["lat"])
C_BANFF, C_CANMORE = centro[8452792], centro[8452489]

# ── as máscaras ──
m_agua = np.clip(q.mascara(lagos) + q.linha(rio, M.env("MINI_RIO", 9)), 0, 1)
seca = 1 - m_agua
m_parque = q.mascara(parque)
m_cidade = q.mascara(cidade)

# ── o relevo ──
rel_base, info_rel = q.ler_base(os.path.join(M.BASES, "banff-aster-relevo.png"))
elev, info_alt = q.ler_altitude(os.path.join(M.BASES, "banff-aster-altitude.png"),
                                os.path.join(M.BASES, "gibs-colormap-ASTER_GDEM_Color_Index.xml"))
PX_M = q.MP * math.cos(math.radians((q.lat_s + q.lat_n) / 2))
# o sombreado da altitude com luz de duas direções (noroeste e oeste-sudoeste): as cristas das Rochosas correm de noroeste a sudeste,
# paralelas à luz de noroeste da GIBS, e com uma luz só as duas faces saíam iguais (o relevo ficava chato)
AZ1, AZ2 = M.env("MINI_SOMB_AZIM", 315), M.env("MINI_SOMB_AZIM2", 250)
hs_dem = 0.5 * (M.sombreado(elev, PX_M, azim=AZ1, alt=M.env("MINI_SOMB_ALT", 40), z=M.env("MINI_SOMB_Z", 1.8), suave=M.env("MINI_SOMB_SUAVE", 2.5))
                + M.sombreado(elev, PX_M, azim=AZ2, alt=M.env("MINI_SOMB_ALT", 40), z=M.env("MINI_SOMB_Z", 1.8), suave=M.env("MINI_SOMB_SUAVE", 2.5)))
_sel = seca > 0.5


def _z(a):
    return (a - np.median(a[_sel])) / max(1e-6, np.percentile(a[_sel], 84) - np.percentile(a[_sel], 16))


MIX = M.env("MINI_SOMB_MIX", 0.7)
cinza = (1 - MIX) * _z(rel_base[..., 0] / 255.0) + MIX * _z(hs_dem)
rel = M.Relevo(cinza, _sel, suave=M.env("MINI_REL_SUAVE", 0.8), sig_vol=M.env("MINI_REL_SIG_VOL", 3.0), vol=M.env("MINI_REL_VOL", 0.3),
               nit=M.env("MINI_REL_NIT", 1.8), sig_loc=M.env("MINI_REL_SIG_LOC", 40), aprofundar=M.env("MINI_APROFUNDAR", 0.1),
               sig_rug=M.env("MINI_REL_SIG_RUG", 4.0))

# ── o fundo de vale (ciano): baixo e plano, dentro do parque, medido na altitude ──
ALT_MAX, DECL_MAX = M.env("MINI_FUNDO_ALT", 1450), M.env("MINI_FUNDO_DECL", 10)
e_s = cv2.GaussianBlur(elev.astype(np.float32), (0, 0), M.env("MINI_FUNDO_SUAVE", 8))
gy, gx = np.gradient(e_s, PX_M)
decl = np.degrees(np.arctan(np.hypot(gx, gy)))
fundo = ((e_s <= ALT_MAX) & (decl <= DECL_MAX)).astype(np.float32)
# o ASTER tem ruído de dezenas de metros no fundo plano: a máscara se alisa (média local e limiar) e se fecha, para virar mancha limpa
fundo = (cv2.GaussianBlur(fundo, (0, 0), M.env("MINI_FUNDO_ALISA", 6)) > 0.5).astype(np.uint8)
k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * int(M.env("MINI_FUNDO_K", 12)) + 1,) * 2)
fundo = cv2.morphologyEx(cv2.morphologyEx(fundo, cv2.MORPH_CLOSE, k), cv2.MORPH_OPEN, k)
n, rot, est, _ = cv2.connectedComponentsWithStats(fundo, 8)
min_px = M.env("MINI_FUNDO_MIN_KM2", 0.3) * 1e6 / PX_M ** 2
for i in range(1, n):
    if est[i, cv2.CC_STAT_AREA] < min_px:
        fundo[rot == i] = 0
m_fundo = cv2.GaussianBlur(fundo.astype(np.float32), (0, 0), 1.2) * (m_parque > 0.5)
m_fundo_seco = m_fundo * seca * (1 - m_cidade)

# ── as cores ──
img = rel.amarelo()
FORA = M.env("MINI_FORA_PARQUE", 0.15)                    # o lado de fora do parque um pouco mais escuro
img = img * (1 - FORA * (1 - m_parque))[..., None]
# (2ª rodada) o fundo de vale em ciano saiu da pintura: ciano, nas referências e na arizona-strip, é água, e a mancha de ~50 km² em
# volta de Banff lia como lago; a medida dele continua no pontos.json. MINI_FUNDO=1 o põe de volta
if M.env("MINI_FUNDO", 0):
    cor_ciano = rel.cor(M.CIANO, 0.42, (0.6, 0.95, 1.0), (235, 255, 255), 0.45)
    img = img * (1 - m_fundo_seco[..., None]) + cor_ciano * m_fundo_seco[..., None]
img = M.sombra_fora(img, m_cidade, seca, sig=M.env("MINI_CIDADE_SOMBRA_SIG", 12), forca=M.env("MINI_CIDADE_SOMBRA", 1.2), teto=0.7)
m_cid_seca = m_cidade * seca
img = img * (1 - m_cid_seca[..., None]) + rel.vermelho() * m_cid_seca[..., None]
COR_AGUA = {"azul": M.AZUL, "ciano": M.CIANO}[os.environ.get("MINI_AGUA", "ciano")]
img = M.pintar_agua(img, m_agua, COR_AGUA)
img = M.compor(img, M.BRANCO, M.borda_de(m_cidade, M.env("MINI_CIDADE_BORDA", 8)))
img = M.compor(img, M.BRANCO, q.linha(parque.boundary, M.env("MINI_PARQUE_LINHA", 4)) * 0.9)

# a medida do fundo de vale no quadro (km² de terra: px × lado do px no chão²)
km2_px = (PX_M / 1000) ** 2
dentro_q = (m_parque > 0.5)
medidas = {"quadro": q.medidas(), "bases": {"relevo": info_rel, "altitude": info_alt},
           "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": M.env("MINI_SOMB_Z", 1.8), "luz_azimutes": [AZ1, AZ2], "px_chao_m": round(PX_M, 1)},
           "fundo_de_vale": {"regra": "altitude <= %g m e declive <= %g graus (altitude alisada a %g px), dentro do parque, manchas de %g km2 ou mais"
                                      % (ALT_MAX, DECL_MAX, M.env("MINI_FUNDO_SUAVE", 8), M.env("MINI_FUNDO_MIN_KM2", 0.3)),
                             "km2_no_quadro": round(float((m_fundo > 0.5).sum() * km2_px), 1),
                             "parque_no_quadro_km2": round(float(dentro_q.sum() * km2_px), 1),
                             "cidade_km2_no_quadro": round(float((m_cidade > 0.5).sum() * km2_px), 2),
                             "aviso": "medida de esboço, na escala do palco (px de %.0f m); não é o número da tela" % PX_M},
           "cidade": {"fracao_da_imagem": round(float((m_cidade > 0.5).mean()), 4),
                      "caixa_palco": [round(v) for v in (*q.palco(cidade.bounds[0], cidade.bounds[3]), *q.palco(cidade.bounds[2], cidade.bounds[1]))]},
           "centros_osm": {"banff": C_BANFF, "canmore": C_CANMORE}}

if os.environ.get("MINI_SO_MAPA"):
    from PIL import Image
    os.makedirs(os.path.join(M.PASTA, "_tmp"), exist_ok=True)
    f = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    v = Image.new("RGB", (1280 + 20 + 320, 720), (15, 15, 15))
    v.paste(f.resize((1280, 720), Image.LANCZOS), (0, 0))
    v.paste(f.resize((320, 180), Image.LANCZOS), (1300, 0))
    v.paste(f.resize((168, 94), Image.LANCZOS), (1300, 200))
    v.save(os.path.join(M.PASTA, "_tmp", "bf-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"]), quality=90)
    print(json.dumps(medidas, ensure_ascii=False)[:1800])
    sys.exit(0)

# ── Canmore: um ponto branco no centro administrativo do OSM; os rótulos pequenos ──
from PIL import Image, ImageDraw
xc, yc = q.palco(*C_CANMORE)
R_PT = M.env("MINI_PONTO_R", 24)
cam = Image.new("L", (M.W * 2, M.H * 2), 0)
ImageDraw.Draw(cam).ellipse([(xc - R_PT) * 2, (yc - R_PT) * 2, (xc + R_PT) * 2, (yc + R_PT) * 2], fill=255)
a_pt = np.asarray(cam.resize((M.W, M.H), Image.LANCZOS)).astype(np.float32) / 255
img = M.compor(img, M.PRETO, np.clip(np.roll(np.roll(cv2.GaussianBlur(a_pt, (0, 0), 6), 6, 0), 4, 1) * 0.8, 0, 0.7))
img = M.compor(img, M.PRETO, cv2.GaussianBlur(cv2.dilate(a_pt, np.ones((9, 9), np.uint8)), (0, 0), 1.0) * 0.9)
img = M.compor(img, M.BRANCO, a_pt)
PX_ROT = M.env("MINI_ROT_PX", 64)
xb, yb = q.palco(M.env("MINI_BANFF_LON", -115.567), M.env("MINI_BANFF_LAT", 51.156))
xm, ym = xc + M.env("MINI_CANMORE_DX", -40), yc + M.env("MINI_CANMORE_DY", 70)
itens = [("BANFF", xb, yb, PX_ROT, "mt"), ("CANMORE", xm, ym, PX_ROT, "rt")]
if M.env("MINI_ROT_PARQUE", 1):
    xp, yp = q.palco(M.env("MINI_PARQUE_LON", -115.372), M.env("MINI_PARQUE_LAT", 51.186))
    itens.append(("NATIONAL PARK", xp, yp, M.env("MINI_ROT_PARQUE_PX", 50), "mm"))
img, caixas_rot, a_rot = M.rotulos(img, itens)
a_rot = np.maximum(a_rot, a_pt)
base_img = img.copy()

# ── a seta: de Canmore, subindo o vale do Bow pelo lado nordeste (o da Trans-Canada), até a borda leste da cidade ──
ROTA = [(C_CANMORE[0] - 0.005, C_CANMORE[1] + 0.004), (-115.392, 51.122), (-115.445, 51.156), (-115.50, 51.176), (-115.538, 51.179)]
curva = M.caminho([q.palco(*p) for p in ROTA], 400)

TEXTOS = {"workers": [("WORKERS", M.env("MINI_FS_W", 210), 900, M.TEXTO_VERMELHO), ("ONLY", M.env("MINI_FS_W", 210), 900, M.TEXTO_VERMELHO)],
          "pct": [("0.07%", M.env("MINI_FS_P", 300), 900, M.TEXTO_VERMELHO)]}
for nome_t, linhas in TEXTOS.items():
    img = base_img.copy()
    img, comps, a_seta = M.desenhar_setas(img, [curva], w0=M.env("MINI_W0", 24), w1=M.env("MINI_W1", 50), cab_l=M.env("MINI_CAB_L", 110), cab_w=M.env("MINI_CAB_W", 150))
    larg, alt = M.medir_texto(linhas)
    pad_x, pad_y = 50, 44
    entre = [round(0.28 * linhas[0][1])] * (len(linhas) - 1)
    barra = (round(0.075 * linhas[-1][1]), round(0.10 * linhas[-1][1]), M.TEXTO_VERMELHO)
    alt_caixa = alt + sum(entre) + 2 * pad_y + barra[0] + barra[1]
    bx = M.env("MINI_BX_" + nome_t.upper(), 64)
    by = M.env("MINI_BY_" + nome_t.upper(), M.H - 64 - alt_caixa)
    img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)
    alfa = np.maximum(np.maximum(a_caixa, a_seta), a_rot)
    lt = caixas_l[linhas[0][0]]
    pontos = dict(medidas)
    pontos["texto"] = nome_t
    pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l, "fonte": "Inter 900 a %d px (a maiúscula: %d px, %.1f px no 168)" % (
        linhas[0][1], lt[3] - lt[1], (lt[3] - lt[1]) * 168 / M.W)}
    pontos["seta"] = {"rota_lonlat": ROTA, "comprimento_px": comps[0]}
    pontos["rotulos"] = caixas_rot
    pontos["pecas_sobre_a_cidade"] = round(float(((alfa > 0.15) & (m_cidade > 0.5)).sum() / max(1, (m_cidade > 0.5).sum())), 4)
    destino = M.PASTA if nome_t == ESCOLHA else os.path.join(M.PASTA, "_variantes")
    nome_arq = SLUG if nome_t == ESCOLHA else "%s-%s" % (SLUG, nome_t)
    M.salvar(img, nome_arq, pontos, alfa, destino)
