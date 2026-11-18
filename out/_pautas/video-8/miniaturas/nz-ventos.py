"""A miniatura de `nz-ventos` (vídeo 8, esboço para a escolha do Lucas; 18/11/2026): "Why New Zealand Put Its Capital in the Path of
the Wind" (ou, sem o nome, "Why This Country Put Its Capital in a Wind Tunnel").

    python -X utf8 -B -P out/_pautas/video-8/miniaturas/nz-ventos.py                 (da raiz do canal; sem rede)
    MINI_SO_MAPA=x python -X utf8 -B -P out/_pautas/video-8/miniaturas/nz-ventos.py  (só o mapa, sem peças: _tmp/nz-mapa-x.jpg)
    MINI_ESCOLHA=here ...                                                            (troca qual texto vai para nz-ventos-*)

O mapa (mapa.py):
- o centro da Nova Zelândia (o sul da Ilha Norte e o norte da Ilha Sul) em relevo amarelo: o cinza da GIBS (ASTER GDEM) misturado com
  o sombreado calculado da altitude do ASTER GDEM; a terra é onde o ASTER tem dado (o mar vem sem dado), e os lagos são os do Natural
  Earth;
- o mar em azul, com a textura leve da batimetria da Blue Marble (GIBS), como no vídeo 7;
- o estreito de Cook em ciano: o mar ENTRE as duas ilhas, onde a soma das distâncias à Ilha Norte e à Ilha Sul fica abaixo de 46 a 56 km
  (o funil segue as duas costas e se abre nas bocas; MINI_ESTREITO=2). O polígono "Cook Strait" do Natural Earth (MINI_ESTREITO=1)
  fecha o estreito com retas no mar aberto e parecia um retângulo; MINI_ESTREITO=0 tira o ciano;
- Wellington em vermelho: as quatro cidades da área urbana (Wellington City, Porirua, Lower Hutt e Upper Hutt; OSM), só na terra;
Por cima: duas setas brancas grossas, do norte e do sul, que se espremem pelo estreito e terminam na cidade (o funil: no aeroporto, 71 %
das horas de vento forte vêm só do norte e do sul; o laudo do cético, §4), e a caixa preta com o texto.

Grava as duas versões do texto: a escolhida (WIND TUNNEL) em nz-ventos-*.jpg/png e a outra (WHY HERE?) em _variantes/.
As bases: nz-ventos-bases.py (rede, um pedido por vez). Este script não faz pedido de rede.
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

SLUG = "nz-ventos"
ESCOLHA = os.environ.get("MINI_ESCOLHA", "tunnel")

# ── o quadro: Wellington perto do centro, a Ilha Norte em cima à direita, a Ilha Sul embaixo à esquerda, o estreito entre elas ──
q = M.Quadro(M.env("MINI_LAT_S", -41.95), M.env("MINI_LAT_N", -40.55), M.env("MINI_LON_C", 174.7))

# ── a geometria ──
osm = M.ler_osm(os.path.join(M.BASES, "nz-ventos-osm.json"))
por_id = {t["_id"]: g for t, g in osm["areas"]}
CIDADES = {4266321: "Wellington City", 4266370: "Porirua City", 4266371: "Lower Hutt City", 4266375: "Upper Hutt City"}
VERMELHO_QUAL = os.environ.get("MINI_VERMELHO", "cidades")      # "cidades" (as quatro), "capital" (só Wellington City), "regiao"
if VERMELHO_QUAL == "cidades":
    wel = unary_union([por_id[i] for i in CIDADES])
elif VERMELHO_QUAL == "capital":
    wel = por_id[4266321]
else:
    wel = por_id[1638991]
_d = json.load(open(os.path.join(M.BASES, "nz-ventos-osm.json"), encoding="utf-8"))
C_WEL = [(e["lon"], e["lat"]) for e in _d["elements"] if e["type"] == "node" and e.get("tags", {}).get("name") == "Wellington"][0]
estreito = [g for p, g in M.ler_ne("ne_10m_geography_marine_polys.geojson", lambda p: p.get("name") == "Cook Strait")][0]
lagos = unary_union([g for p, g in M.ler_ne("ne_10m_lakes.geojson", lambda p: p.get("name") in ("Lake Wairarapa", "Lake Rotoroa", "Lake Rotoiti"))])

# ── o relevo e a terra ──
rel_base, info_rel = q.ler_base(os.path.join(M.BASES, "nz-ventos-aster-relevo.png"))
elev, info_alt = q.ler_altitude(os.path.join(M.BASES, "nz-ventos-aster-altitude.png"),
                                os.path.join(M.BASES, "gibs-colormap-ASTER_GDEM_Color_Index.xml"))
mar_bm, info_bm = q.ler_base(os.path.join(M.BASES, "nz-ventos-bluemarble.png"))
terra = cv2.GaussianBlur((elev > 0.5).astype(np.float32), (0, 0), 0.8)
m_lagos = q.mascara(lagos)
seca = np.clip(terra - m_lagos, 0, 1)
agua = 1 - seca
PX_M = q.MP * math.cos(math.radians((q.lat_s + q.lat_n) / 2))
AZ1, AZ2 = M.env("MINI_SOMB_AZIM", 315), M.env("MINI_SOMB_AZIM2", 250)
hs_dem = 0.5 * (M.sombreado(elev, PX_M, azim=AZ1, alt=40, z=M.env("MINI_SOMB_Z", 2.0), suave=M.env("MINI_SOMB_SUAVE", 1.5))
                + M.sombreado(elev, PX_M, azim=AZ2, alt=40, z=M.env("MINI_SOMB_Z", 2.0), suave=M.env("MINI_SOMB_SUAVE", 1.5)))
_sel = seca > 0.5


def _z(a):
    return (a - np.median(a[_sel])) / max(1e-6, np.percentile(a[_sel], 84) - np.percentile(a[_sel], 16))


MIX = M.env("MINI_SOMB_MIX", 0.6)
cinza = (1 - MIX) * _z(rel_base[..., 0] / 255.0) + MIX * _z(hs_dem)
rel = M.Relevo(cinza, _sel, suave=M.env("MINI_REL_SUAVE", 1.0), sig_vol=M.env("MINI_REL_SIG_VOL", 3.5), vol=M.env("MINI_REL_VOL", 0.4),
               nit=M.env("MINI_REL_NIT", 1.6), sig_loc=M.env("MINI_REL_SIG_LOC", 30), aprofundar=M.env("MINI_APROFUNDAR", 0.15),
               sig_rug=4.0)

# ── as máscaras do assunto ──
m_wel = q.mascara(wel) * seca
m_estr = q.mascara(estreito) * agua

# ── as cores ──
img = rel.amarelo()
img = M.pintar_agua(img, agua, M.AZUL, textura=mar_bm, a=M.env("MINI_MAR_A", 0.78), b=M.env("MINI_MAR_B", 0.36))


def funil_do_estreito(s0_km, s1_km):
    """o estreito como o mar ENTRE as duas ilhas: a soma da distância à Ilha Norte e da distância à Ilha Sul (com as ilhas pequenas de
    cada lado) é pequena só no corredor entre elas, e cresce nas bocas do funil, seguindo as duas costas. Ciano cheio até s0_km, e some
    até s1_km. As ilhas se separam por uma reta no eixo do estreito (de 173,9 -40,5 a 175,0 -42,0): Kapiti e Mana ficam com a Norte,
    D'Urville e Arapawa com a Sul. Só no mar aberto ligado ao estreito (o porto de Wellington e os fundos dos Sounds ficam azuis)."""
    n, rot, st, cen = cv2.connectedComponentsWithStats((seca > 0.5).astype(np.uint8), connectivity=8)
    ax, ay = q.palco(173.9, -40.5)
    bx, by_ = q.palco(175.0, -42.0)

    def lado(x, y):
        return (bx - ax) * (y - ay) - (by_ - ay) * (x - ax)
    s_wel = np.sign(lado(*q.palco(*C_WEL)))
    norte = np.zeros(n, bool)
    for i in range(1, n):
        norte[i] = np.sign(lado(*cen[i])) == s_wel
    m_n = norte[rot] & (rot > 0)
    m_s = (~norte[rot]) & (rot > 0)
    d_n = cv2.distanceTransform((~m_n).astype(np.uint8), cv2.DIST_L2, 5)
    d_s = cv2.distanceTransform((~m_s).astype(np.uint8), cv2.DIST_L2, 5)
    s_km = (d_n + d_s) * PX_M / 1000.0
    f = np.clip((s1_km - s_km) / max(1e-6, s1_km - s0_km), 0, 1)
    f = f * f * (3 - 2 * f)
    # o mar "aberto": o que sobra do mar depois de uma abertura larga (tira o porto e os braços estreitos dos Sounds)
    raio = max(3, int(round(M.env("MINI_ESTREITO_ABERTO_KM", 4.0) * 1000 / PX_M)))
    nuc = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * raio + 1, 2 * raio + 1))
    aberto = cv2.morphologyEx((agua > 0.5).astype(np.uint8), cv2.MORPH_OPEN, nuc).astype(np.float32)
    aberto = cv2.GaussianBlur(cv2.dilate(aberto, np.ones((5, 5), np.uint8)), (0, 0), 3)
    # as medidas: a menor distância entre as duas maiores massas de terra do quadro (o gargalo), e onde fica a menor soma (perto de
    # ilhotas de lados diferentes, ela cai muito: não é a largura do estreito)
    grandes_n = max((i for i in range(1, n) if norte[i]), key=lambda i: st[i, cv2.CC_STAT_AREA])
    grandes_s = max((i for i in range(1, n) if not norte[i]), key=lambda i: st[i, cv2.CC_STAT_AREA])
    d_gn = cv2.distanceTransform((rot != grandes_n).astype(np.uint8), cv2.DIST_L2, 5)
    gargalo_km = float(d_gn[rot == grandes_s].min() * PX_M / 1000.0)
    yy, xx = np.unravel_index(np.argmin(np.where(agua > 0.5, s_km, np.inf)), s_km.shape)

    def lonlat(x, y):
        return (round(math.degrees((q.FX0 + x * q.MP) / M.R_TERRA), 3),
                round(math.degrees(2 * math.atan(math.exp((q.FY1 - y * q.MP) / M.R_TERRA)) - math.pi / 2), 3))
    info = {"gargalo_entre_as_duas_maiores_massas_km": round(gargalo_km, 1), "menor_soma_km": round(float(s_km[yy, xx]), 1),
            "menor_soma_onde_lonlat": lonlat(xx, yy), "manchas_de_terra_lado_norte": int(norte[1:].sum()),
            "manchas_de_terra_lado_sul": int((~norte[1:]).sum())}
    return cv2.GaussianBlur(f.astype(np.float32), (0, 0), 6) * np.clip(aberto, 0, 1) * agua, info


ESTREITO = M.env("MINI_ESTREITO", 2)
estreito_info = None
m_e = np.zeros_like(agua)
if ESTREITO == 1:
    # o polígono do Natural Earth, alisado (ele fecha o estreito com retas no mar aberto: parece um retângulo)
    m_e = cv2.GaussianBlur(m_estr, (0, 0), M.env("MINI_ESTREITO_SUAVE", 30)) * agua
    m_e = np.clip((m_e - 0.25) / 0.5, 0, 1)
elif ESTREITO == 2:
    m_e, estreito_info = funil_do_estreito(M.env("MINI_ESTREITO_S0", 46.0), M.env("MINI_ESTREITO_S1", 56.0))
if ESTREITO:
    img = M.pintar_agua(img, m_e, M.CIANO, textura=mar_bm, a=0.86, b=0.22)
img = M.sombra_fora(img, m_wel, seca, sig=M.env("MINI_WEL_SOMBRA_SIG", 12), forca=1.2, teto=0.7)
img = img * (1 - m_wel[..., None]) + rel.vermelho() * m_wel[..., None]
img = M.compor(img, M.BRANCO, M.borda_de(m_wel, M.env("MINI_WEL_BORDA", 6)))

medidas = {"quadro": q.medidas(), "bases": {"relevo": info_rel, "altitude": info_alt, "mar": info_bm},
           "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": M.env("MINI_SOMB_Z", 2.0), "luz_azimutes": [AZ1, AZ2],
                      "px_chao_m": round(PX_M, 1)},
           "vermelho": {"qual": VERMELHO_QUAL, "fracao_da_imagem": round(float((m_wel > 0.5).mean()), 4),
                        "km2_na_terra": round(float((m_wel > 0.5).sum() * (PX_M / 1000) ** 2), 1)},
           "estreito": {"modo": {0: "sem", 1: "poligono_natural_earth", 2: "funil_soma_das_distancias"}[int(ESTREITO)],
                        "fracao_da_imagem_em_ciano": round(float((m_e > 0.5).mean()), 4),
                        "funil": estreito_info,
                        "s0_s1_km": [M.env("MINI_ESTREITO_S0", 46.0), M.env("MINI_ESTREITO_S1", 56.0)] if ESTREITO == 2 else None},
           "wellington_osm": C_WEL}

if os.environ.get("MINI_SO_MAPA"):
    from PIL import Image
    os.makedirs(os.path.join(M.PASTA, "_tmp"), exist_ok=True)
    f = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    v = Image.new("RGB", (1280 + 20 + 320, 720), (15, 15, 15))
    v.paste(f.resize((1280, 720), Image.LANCZOS), (0, 0))
    v.paste(f.resize((320, 180), Image.LANCZOS), (1300, 0))
    v.paste(f.resize((168, 94), Image.LANCZOS), (1300, 200))
    v.save(os.path.join(M.PASTA, "_tmp", "nz-mapa-%s.jpg" % os.environ["MINI_SO_MAPA"]), quality=90)
    print(json.dumps(medidas, ensure_ascii=False)[-700:])
    sys.exit(0)

# ── os rótulos pequenos (o nome da cidade fica para o título e a fala: o título guarda Wellington) ──
PX_ROT = M.env("MINI_ROT_PX", 60)
itens = []
if M.env("MINI_ROT_ESTREITO", 1):
    # em duas linhas, no mar do estreito entre a Ilha Sul e a seta do sul (numa linha só, a seta cortava o nome)
    xe, ye = q.palco(M.env("MINI_ESTR_LON", 174.34), M.env("MINI_ESTR_LAT", -41.41))
    itens.append(("COOK", xe, ye - 0.55 * PX_ROT, PX_ROT, "mm"))
    itens.append(("STRAIT", xe, ye + 0.55 * PX_ROT, PX_ROT, "mm"))
img, caixas_rot, a_rot = M.rotulos(img, itens) if itens else (img, {}, np.zeros((M.H, M.W), np.float32))
base_img = img.copy()

# ── as setas do funil: uma do norte (do mar da Tasmânia, descendo a costa de Kapiti para dentro do estreito) e uma do sul (do Pacífico,
# subindo a boca sul do estreito), as duas terminando na cidade, uma de cada lado do gargalo ──
ROTA_N = [(174.49, -40.648), (174.467, -40.844), (174.532, -41.06), (174.635, -41.222)]
ROTA_S = [(174.667, -41.854), (174.726, -41.67), (174.775, -41.47), (174.765, -41.385)]
curvas = [M.caminho([q.palco(*p) for p in r], 400) for r in (ROTA_N, ROTA_S)]

TEXTOS = {"tunnel": [("WIND", M.env("MINI_FS_T", 205), 900, M.TEXTO_VERMELHO), ("TUNNEL", M.env("MINI_FS_T", 205), 900, M.TEXTO_VERMELHO)],
          "here": [("WHY", M.env("MINI_FS_H", 225), 900, M.TEXTO_VERMELHO), ("HERE?", M.env("MINI_FS_H", 225), 900, M.TEXTO_VERMELHO)]}
for nome_t, linhas in TEXTOS.items():
    img = base_img.copy()
    img, comps, a_seta = M.desenhar_setas(img, curvas, w0=M.env("MINI_W0", 26), w1=M.env("MINI_W1", 56), cab_l=M.env("MINI_CAB_L", 120), cab_w=M.env("MINI_CAB_W", 165))
    larg, alt = M.medir_texto(linhas)
    pad_x, pad_y = 50, 44
    entre = [round(0.28 * linhas[0][1])] * (len(linhas) - 1)
    barra = (round(0.075 * linhas[-1][1]), round(0.10 * linhas[-1][1]), M.TEXTO_VERMELHO)
    bx = M.env("MINI_BX_" + nome_t.upper(), 64)
    by = M.env("MINI_BY_" + nome_t.upper(), 64)
    img, caixa, caixas_l, a_caixa = M.caixa_texto(img, bx, by, linhas, pad_x, pad_y, entre, barra=barra)
    alfa = np.maximum(np.maximum(a_caixa, a_seta), a_rot)
    lt = caixas_l[linhas[0][0]]
    pontos = dict(medidas)
    pontos["texto"] = nome_t
    pontos["caixa"] = {"caixa_palco": caixa, "linhas": caixas_l, "fonte": "Inter 900 a %d px (a maiúscula: %d px, %.1f px no 168)" % (
        linhas[0][1], lt[3] - lt[1], (lt[3] - lt[1]) * 168 / M.W)}
    pontos["setas"] = {"norte_lonlat": ROTA_N, "sul_lonlat": ROTA_S, "comprimentos_px": comps}
    pontos["rotulos"] = caixas_rot
    pontos["pecas_sobre_o_vermelho"] = round(float(((alfa > 0.15) & (m_wel > 0.5)).sum() / max(1, (m_wel > 0.5).sum())), 4)
    destino = M.PASTA if nome_t == ESCOLHA else os.path.join(M.PASTA, "_variantes")
    nome_arq = SLUG if nome_t == ESCOLHA else "%s-%s" % (SLUG, nome_t)
    M.salvar(img, nome_arq, pontos, alfa, destino)
