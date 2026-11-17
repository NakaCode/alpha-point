"""O mapa comum das miniaturas A e B do vídeo 7 (rio-columbia), no estilo das referências que o Lucas mandou em 17/11/2026
(The Geo Lens, Geography by Geoff): a terra em relevo sombreado amarelo-dourado, a água em azul saturado, o assunto em vermelho com o
relevo por baixo e contorno branco fino, e um destaque secundário em ciano. Quem o usa: base-A.py e base-B.py (da raiz do canal; sem rede).

AS CORES ficam aqui, no topo (VERMELHO, AMARELO, AZUL, CIANO), para trocar fácil. São as das referências, medidas nos prints
(out/rio-columbia/_tmp/miniatura/referencias/), não o --destaque do canal: a Sala, 17/11/2026, "o --destaque fica para o vídeo".

DE ONDE VEM CADA CAMADA (nada desenhado à mão nem por IA):
- o relevo: out/rio-columbia/_media/base/aster-relevo-cinza-bacia.png (ASTER GDEM, relevo sombreado em cinza, NASA GIBS);
- a textura do mar: out/rio-columbia/_media/base/bluemarble-bacia-relevo.png (NASA Blue Marble com batimetria, GIBS); as duas no mesmo
  recorte e na mesma projeção (EPSG:3857), conferidas pelo sha256 dos .json;
- a terra (o que não é mar): Natural Earth 1:10m, admin-1 (os estados e províncias), do cache da máquina (~/.regie/geo/natural-earth);
- os lagos: Natural Earth 1:10m, lakes (o mesmo cache), e o OSM do disco (lago-kinbasket, lago-koocanusa, lago-duncan);
- o Arrow (o ciano): _media/geo/lago-arrow.json (OSM);
- a parte canadense da bacia (o vermelho): _media/geo/bacia-columbia-canada.json (USGS WBD);
- a fronteira: _media/geo/fronteira-canada-eua.json (U.S. Census);
- as letras: marca/fontes/inter (Inter, SIL OFL).
"""
import hashlib, json, math, os, sys
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter, ImageFont

Image.MAX_IMAGE_PIXELS = None

# ── as cores das referências (RGB) ──
VERMELHO = (220, 48, 32)        # o Ohio, o Washington, a Louisiana (mediana 205–219, 45–51, 31–35)
AMARELO = (232, 176, 58)        # a terra (mediana 200–231, 151–179, 53–62)
AZUL = (30, 86, 172)            # o mar (entre o do Washington, 28/71/141, e o das San Juan, 57/130/189)
CIANO = (70, 214, 232)          # o lago Erie da The Geo Lens
TEXTO_VERMELHO = (234, 52, 36)  # o "DOOMED" e o "UNLIVABLE"
BRANCO = (255, 255, 255)
PRETO = (8, 8, 10)

W, H = 2560, 1440
SS = 2
K = 2
R_TERRA = 6378137.0
RAIZ = os.getcwd()
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"
PROJ = os.path.join(RAIZ, "out", "rio-columbia")
SAIDA = os.path.join(RAIZ, "roteiros", "rio-columbia", "miniatura")
PREVIA = os.path.join(PROJ, "_tmp", "miniatura")
GEO = os.path.join(PROJ, "_media", "geo")
NE = os.path.join(os.path.expanduser("~"), ".regie", "geo", "natural-earth")
FONTE = os.path.join(RAIZ, "marca", "fontes", "inter", "Inter-VF.ttf")
B_RELEVO = os.path.join(PROJ, "_media", "base", "aster-relevo-cinza-bacia.png")
B_MAR = os.path.join(PROJ, "_media", "base", "bluemarble-bacia-relevo.png")
os.makedirs(PREVIA, exist_ok=True)


def env(nome, padrao):
    return float(os.environ.get(nome, padrao))


def sha256(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for bloco in iter(lambda: f.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()


def merc(lon, lat):
    return (math.radians(lon) * R_TERRA, R_TERRA * math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))


def luma(a):
    return a[..., :3] @ np.array([0.2126, 0.7152, 0.0722])


def compor(img, cor, a):
    return img * (1 - a[..., None]) + np.asarray(cor, float)[None, None, :3] * a[..., None]


def fonte(px, peso=900, opsz=32):
    f = ImageFont.truetype(FONTE, int(px))
    f.set_variation_by_axes([opsz, peso])
    return f


# ── o quadro: da lat de baixo à de cima, centrado numa lon; a largura sai do 16:9 em Mercator ──
# (17/11, 3ª rodada: o quadro fechado na bacia, para o vermelho ocupar ~31 % da imagem, como nas referências; perde-se o Oregon e a
# ponta norte do Kinbasket, e a fronteira fica numa faixa embaixo. Antes: 46.0, 53.15, -118.6, com a bacia em 9 %)
LAT_S, LAT_N, LON_C = env("MINI_LAT_S", 48.62), env("MINI_LAT_N", 52.41), env("MINI_LON_C", -119.15)
_, FY0 = merc(0, LAT_S)
_, FY1 = merc(0, LAT_N)
FH = FY1 - FY0
FW = FH * W / H
FXC, _ = merc(LON_C, 0)
FX0, FX1 = FXC - FW / 2, FXC + FW / 2
MP = FW / W


def palco_m(x, y, s=1):
    return ((x - FX0) / MP * s, (FY1 - y) / MP * s)


def palco(lon, lat, s=1):
    return palco_m(*merc(lon, lat), s)


def ler_base(caminho):
    meta = json.load(open(caminho + ".json", encoding="utf-8"))
    sha = sha256(caminho)
    if sha != meta["imagem"]["sha256"]:
        sys.exit("%s não confere com o sha256 do .json: parei" % os.path.basename(caminho))
    jan = meta["janela_3857"]
    crua = np.asarray(Image.open(caminho).convert("RGB")).astype(np.float32)
    th, tw = crua.shape[:2]
    mpx = (jan[2] - jan[0]) / tw
    if not (jan[0] <= FX0 and FX1 <= jan[2] and jan[1] <= FY0 and FY1 <= jan[3]):
        sys.exit("o quadro sai da base: parei")
    bx0, by0 = (FX0 - jan[0]) / mpx, (jan[3] - FY1) / mpx
    esc = MP / mpx
    cx0, cy0 = int(bx0) - 4, int(by0) - 4
    cx1, cy1 = int(bx0 + W * esc) + 6, int(by0 + H * esc) + 6
    pedaco = cv2.GaussianBlur(crua[cy0:cy1, cx0:cx1], (0, 0), max(0.01, 0.42 * esc))
    M = np.float32([[esc, 0, bx0 - cx0], [0, esc, by0 - cy0]])
    return cv2.warpAffine(pedaco, M, (W, H), flags=cv2.WARP_INVERSE_MAP | cv2.INTER_LINEAR), sha, meta


def ler_geo(caminho):
    return json.load(open(caminho, encoding="utf-8"))


def polis_de(fc, filtro=lambda p: True):
    out = []
    for f in fc["features"]:
        g = f["geometry"]
        if g is None or not filtro(f["properties"]):
            continue
        if g["type"] == "MultiPolygon":
            out += g["coordinates"]
        elif g["type"] == "Polygon":
            out.append(g["coordinates"])
    return out


def na_janela(poli, folga=1.5):
    xs = [p[0] for p in poli[0]]
    ys = [p[1] for p in poli[0]]
    l0 = math.degrees(FX0 / R_TERRA) - folga
    l1 = math.degrees(FX1 / R_TERRA) + folga
    return max(xs) > l0 and min(xs) < l1 and max(ys) > LAT_S - folga and min(ys) < LAT_N + folga


def mascara(polis):
    im = Image.new("L", (W * SS, H * SS), 0)
    d = ImageDraw.Draw(im)
    for poli in polis:
        ext, *buracos = poli
        d.polygon([palco(*p, SS) for p in ext], fill=255)
        for b in buracos:
            d.polygon([palco(*p, SS) for p in b], fill=0)
    return np.asarray(im.resize((W, H), Image.LANCZOS)).astype(np.float32) / 255.0


def linha(pts_lonlat, lw):
    im = Image.new("L", (W * SS, H * SS), 0)
    ImageDraw.Draw(im).line([palco(*p, SS) for p in pts_lonlat], fill=255, width=int(lw * SS), joint="curve")
    return np.asarray(im.resize((W, H), Image.LANCZOS)).astype(np.float32) / 255.0


def borda_de(m, lw):
    """o contorno de uma máscara, por fora, com lw px"""
    m8 = (m > 0.5).astype(np.uint8)
    k = max(1, int(round(lw)))
    dil = cv2.dilate(m8, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * k + 1, 2 * k + 1)))
    b = (dil - m8).astype(np.float32)
    return cv2.GaussianBlur(b, (0, 0), 0.7)


def montar_mapa():
    """devolve o mapa (float RGB, W×H) e as medidas"""
    rel, sha_rel, meta_rel = ler_base(B_RELEVO)
    mar_bm, sha_bm, meta_bm = ler_base(B_MAR)
    hs = rel[..., 0] / 255.0
    # a terra (Natural Earth admin-1) e os lagos (Natural Earth lakes, sem o Arrow; o OSM do disco)
    adm = ler_geo(os.path.join(NE, "ne_10m_admin_1_states_provinces.geojson"))
    terra_polis = [p for p in polis_de(adm, lambda pr: pr.get("adm0_a3") in ("CAN", "USA")) if na_janela(p)]
    terra = mascara(terra_polis)
    lagos_ne = ler_geo(os.path.join(NE, "ne_10m_lakes.geojson"))
    lagos_polis = [p for p in polis_de(lagos_ne, lambda pr: pr.get("name") not in ("Upper Arrow Lake", "Lower Arrow Lake")) if na_janela(p)]
    for nome in ("lago-kinbasket.json", "lago-koocanusa.json", "lago-duncan.json"):
        lagos_polis += polis_de(ler_geo(os.path.join(GEO, nome)))
    lagos = mascara(lagos_polis)
    arrow_polis = polis_de(ler_geo(os.path.join(GEO, "lago-arrow.json")))
    arrow = mascara(arrow_polis)
    bacia_polis = polis_de(ler_geo(os.path.join(GEO, "bacia-columbia-canada.json")))
    bacia = mascara(bacia_polis)
    agua = np.clip((1 - terra) + lagos, 0, 1)
    terra_seca = terra * (1 - lagos)

    # o relevo: o cinza ganha contraste local (máscara de desfoque) e é esticado entre os percentis 2 e 98 da terra; vira luz sobre
    # a cor (0,28 a 1,36 no amarelo; 0,42 a 1,30 no vermelho). Na 1ª passada, o cinza cru (mediana 139, quase tudo entre 120 e 160)
    # deixou a terra lisa
    # (3ª rodada: o volume das referências. O cinza é suavizado (o grão fino vira ruído a 320), misturado com a sombra em escala
    # maior (o relevo de um terreno mais liso), ganha contraste local largo e vira cor por três pontos: a sombra marrom, a cor
    # da referência no meio (a mediana da terra) e a luz creme. Antes: a cor multiplicada pelo cinza, e a terra lisa)
    hs_s = cv2.GaussianBlur(hs, (0, 0), env("MINI_REL_SUAVE", 1.6))
    hs_l = cv2.GaussianBlur(hs, (0, 0), env("MINI_REL_SIG_VOL", 4.5))
    vol = env("MINI_REL_VOL", 0.62)
    hs_m = (1 - vol) * hs_s + vol * hs_l
    hs_d = hs_m + env("MINI_REL_NIT", 1.5) * (hs_m - cv2.GaussianBlur(hs_m, (0, 0), env("MINI_REL_SIG_LOC", 26)))
    sel_t = terra_seca > 0.5
    p2, p98 = np.percentile(hs_d[sel_t], 1.5), np.percentile(hs_d[sel_t], 98.5)
    hs_n = np.clip((hs_d - p2) / max(1e-6, p98 - p2), 0, 1)
    piv = float(np.median(hs_n[sel_t]))

    def tres_pontos(t, sombra, meio, luz):
        sombra, meio, luz = (np.asarray(c, float)[None, None, :] for c in (sombra, meio, luz))
        a = np.clip(t / piv, 0, 1)[..., None]
        b = np.clip((t - piv) / (1 - piv), 0, 1)[..., None]
        return np.where((t < piv)[..., None], sombra + (meio - sombra) * a, meio + (luz - meio) * b)

    s_t, l_t = env("MINI_REL_SOMBRA", 0.30), env("MINI_REL_LUZ", 0.72)
    cor_terra = tres_pontos(hs_n, np.asarray(AMARELO) * s_t * np.array([1.0, 0.86, 0.6]), AMARELO,
                            np.asarray(AMARELO) + (np.array([255, 244, 186]) - AMARELO) * l_t)
    s_v, l_v = env("MINI_REV_SOMBRA", 0.48), env("MINI_REV_LUZ", 0.40)
    cor_verm = tres_pontos(hs_n, np.asarray(VERMELHO) * s_v * np.array([1.0, 0.7, 0.8]), VERMELHO,
                           np.asarray(VERMELHO) + (np.array([255, 150, 122]) - VERMELHO) * l_v)
    # o mar: o azul com a textura leve da batimetria da Blue Marble (a luminância dela, normalizada no mar)
    lm = luma(mar_bm)
    sel = agua > 0.5
    t = (lm - np.percentile(lm[sel], 5)) / max(1.0, np.percentile(lm[sel], 95) - np.percentile(lm[sel], 5))
    t = cv2.GaussianBlur(np.clip(t, 0, 1).astype(np.float32), (0, 0), 1.5)
    cor_mar = np.clip(np.asarray(AZUL, float)[None, None, :] * (env("MINI_MAR_A", 0.78) + env("MINI_MAR_B", 0.36) * t)[..., None], 0, 255)
    img = cor_mar * (1 - terra_seca[..., None]) + cor_terra * terra_seca[..., None]
    # a bacia canadense em vermelho, com o relevo por baixo (só na terra)
    bv = bacia * terra_seca
    # (3ª rodada) a sombra escura e macia por fora da bacia, que a descola do amarelo (a da Louisiana)
    somb_b = cv2.GaussianBlur(bacia, (0, 0), env("MINI_BACIA_SOMBRA_SIG", 18)) * (1 - bacia) * terra_seca
    img = compor(img, PRETO, np.clip(somb_b * env("MINI_BACIA_SOMBRA", 1.1), 0, 0.6))
    img = img * (1 - bv[..., None]) + cor_verm * bv[..., None]
    # o Arrow em ciano: o polígono do OSM fechado (os estreitos entre os dois lagos viram um corpo só) e engrossado, com contorno
    # branco. É estilização, como as referências simplificam: o lago tem 4 a 9 px no palco, e precisa ler a 320 como um lago comprido
    LARG_ARROW = int(env("MINI_ARROW_ENGROSSA", 10))
    a8 = (arrow > 0.35).astype(np.uint8)
    a8 = cv2.morphologyEx(a8, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (21, 21)))
    arrow_g = cv2.dilate(a8, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * LARG_ARROW + 1, 2 * LARG_ARROW + 1))).astype(np.float32)
    arrow_g = cv2.GaussianBlur(arrow_g, (0, 0), 1.0)
    somb_a = cv2.GaussianBlur(arrow_g, (0, 0), 8) * (1 - arrow_g)
    img = compor(img, PRETO, np.clip(somb_a * 0.9, 0, 0.5))
    img = compor(img, CIANO, arrow_g)
    img = compor(img, BRANCO, borda_de(arrow_g, env("MINI_ARROW_BORDA", 5)) * 0.97)
    # o contorno branco fino da bacia e a fronteira em branco fino
    img = compor(img, BRANCO, borda_de(bacia, env("MINI_BACIA_BORDA", 4)))
    fr = ler_geo(os.path.join(GEO, "fronteira-canada-eua.json"))["features"][0]["geometry"]["coordinates"]
    img = compor(img, BRANCO, linha(fr, env("MINI_FRONTEIRA", 4)) * terra_seca)
    medidas = {
        "quadro": {"lat_baixo": LAT_S, "lat_cima": LAT_N, "lon_centro": LON_C,
                   "lon_esquerda": round(math.degrees(FX0 / R_TERRA), 3), "lon_direita": round(math.degrees(FX1 / R_TERRA), 3),
                   "quadro_3857": [round(FX0, 1), round(FY0, 1), round(FX1, 1), round(FY1, 1)], "metros_mercator_por_px_palco": round(MP, 1)},
        "bases": {"relevo": {"arquivo": os.path.relpath(B_RELEVO, RAIZ).replace("\\", "/"), "sha256": sha_rel},
                  "mar": {"arquivo": os.path.relpath(B_MAR, RAIZ).replace("\\", "/"), "sha256": sha_bm}},
        "camadas": {"terra_ne_admin1_poligonos": len(terra_polis), "lagos_poligonos": len(lagos_polis), "arrow_engrossado_px": LARG_ARROW},
    }
    bpx = np.nonzero(bacia > 0.5)
    apx = np.nonzero(arrow_g > 0.5)
    medidas["bacia"] = {"caixa_palco": [int(bpx[1].min()), int(bpx[0].min()), int(bpx[1].max()), int(bpx[0].max())],
                        "fracao_da_imagem": round(float((bacia > 0.5).mean()), 4)}
    medidas["arrow"] = {"caixa_palco": [int(apx[1].min()), int(apx[0].min()), int(apx[1].max()), int(apx[0].max())],
                        "fracao_da_imagem": round(float((arrow_g > 0.5).mean()), 5)}
    return img, medidas, {"bacia": bacia, "arrow": arrow_g, "arrow_polis": arrow_polis, "terra": terra_seca}


def paises(img, medidas, x_dir):
    """CANADA e U.S., pequenos, brancos com sombra, dos dois lados da fronteira; alinhados à direita em x_dir (3ª rodada: a oeste da
    bacia, na faixa de baixo, longe do canto da duração; antes, a leste dela)"""
    f = fonte(env("MINI_PAIS_PX", 66), 800, 14)
    cam = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(cam)
    _, yf = palco(-110.0, 49.0)
    caixas = {}
    for nome, cima in (("CANADA", True), ("U.S.", False)):
        bb = f.getbbox(nome)
        h = bb[3] - bb[1]
        x_rotulo = x_dir - (bb[2] - bb[0])
        y = yf - 22 - h if cima else yf + 22
        d.text((x_rotulo - bb[0], y - bb[1]), nome, font=f, fill=BRANCO + (255,))
        caixas[nome] = [round(x_rotulo), round(y), round(x_rotulo + bb[2] - bb[0]), round(y + h)]
    a = np.asarray(cam.split()[3]).astype(np.float32) / 255
    somb = np.roll(np.roll(cv2.GaussianBlur(cv2.dilate(a, np.ones((5, 5), np.uint8)), (0, 0), 4), 4, 0), 3, 1)
    img = compor(img, PRETO, np.clip(somb * 1.2, 0, 0.85))
    img = compor(img, BRANCO, a)
    medidas["paises"] = caixas
    return img


# ── as peças por cima: a caixa preta com o texto, e as setas brancas grossas e curvas ──
def bezier(p0, p1, p2, p3, n=260):
    return [tuple((1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * e
                  for a, b, c, e in zip(p0, p1, p2, p3)) for t in (i / n for i in range(n + 1))]


def forma_seta(curva, w0, w1, cab_l, cab_w):
    acum = [0.0]
    for i in range(1, len(curva)):
        acum.append(acum[-1] + math.dist(curva[i - 1], curva[i]))
    Lc = acum[-1]
    corte = Lc - cab_l * 0.9
    corpo = [(p, a) for p, a in zip(curva, acum) if a <= corte]
    esq, dirr = [], []
    for i, (p, a) in enumerate(corpo):
        q0 = corpo[max(0, i - 1)][0]
        q1 = corpo[min(len(corpo) - 1, i + 1)][0]
        tx, ty = q1[0] - q0[0], q1[1] - q0[1]
        n = math.hypot(tx, ty) or 1
        nx, ny = -ty / n, tx / n
        w = w0 + (w1 - w0) * (a / corte) ** 0.7
        esq.append((p[0] + nx * w / 2, p[1] + ny * w / 2))
        dirr.append((p[0] - nx * w / 2, p[1] - ny * w / 2))
    ponta = curva[-1]
    i_b = max(i for i, a in enumerate(acum) if a <= Lc - cab_l)
    bx, by = curva[i_b]
    dx, dy = ponta[0] - bx, ponta[1] - by
    n = math.hypot(dx, dy)
    ux, uy = dx / n, dy / n
    bx, by = ponta[0] - ux * cab_l, ponta[1] - uy * cab_l
    cabeca = [(bx - uy * cab_w / 2, by + ux * cab_w / 2), ponta, (bx + uy * cab_w / 2, by - ux * cab_w / 2)]
    return esq + dirr[::-1], cabeca, corpo[0][0], Lc


def desenhar_setas(img, setas):
    """setas: lista de (p0, p1, p2, p3); brancas, com contorno escuro fino e sombra (as das referências)"""
    m = Image.new("L", (W * K, H * K), 0)
    d = ImageDraw.Draw(m)
    comps = []
    for p0, p1, p2, p3 in setas:
        # (3ª rodada: mais grossas, no tamanho das de Washington; antes 22/38/92/120)
        corpo, cab, ini, Lc = forma_seta(bezier(p0, p1, p2, p3), env("MINI_W0", 26), env("MINI_W1", 52), env("MINI_CAB_L", 118), env("MINI_CAB_W", 158))
        d.polygon([(x * K, y * K) for x, y in corpo], fill=255)
        d.polygon([(x * K, y * K) for x, y in cab], fill=255)
        w0 = env("MINI_W0", 26)
        d.ellipse([(ini[0] - w0 / 2) * K, (ini[1] - w0 / 2) * K, (ini[0] + w0 / 2) * K, (ini[1] + w0 / 2) * K], fill=255)
        comps.append(round(Lc))
    a = np.asarray(m.resize((W, H), Image.LANCZOS)).astype(np.float32) / 255
    contorno = cv2.GaussianBlur(cv2.dilate(a, np.ones((7, 7), np.uint8)), (0, 0), 1.0)
    somb = np.roll(np.roll(cv2.GaussianBlur(cv2.dilate(a, np.ones((9, 9), np.uint8)), (0, 0), 10), 12, 0), 8, 1)
    img = compor(img, PRETO, np.clip(somb * 0.75, 0, 0.75))
    img = compor(img, PRETO, contorno * 0.85)
    img = compor(img, BRANCO, a)
    return img, comps, a


def caixa_texto(img, x0, y0, linhas, pad_x, pad_y, entre, raio=10, barra=None):
    """linhas: [(texto, px, peso, cor)]; uma caixa preta só, com as linhas alinhadas à esquerda; devolve a imagem e a caixa.
    barra: (espessura, distância, cor), o sublinhado vermelho sob a última linha, na largura dela (o do "WHY?" de Washington e do
    "UNLIVABLE"; 3ª rodada)"""
    medidas_l, larg, alt = [], 0, 0
    for i, (s, px, peso, cor) in enumerate(linhas):
        f = fonte(px * K, peso, 32 if px > 80 else 14)
        bb = f.getbbox(s)
        cap = f.getbbox("H")
        w_ = (bb[2] - bb[0]) / K
        h_ = (cap[3] - cap[1]) / K
        medidas_l.append((s, f, bb, cap, w_, h_, cor))
        larg = max(larg, w_)
        alt += h_ + (entre[i - 1] if i else 0)
    if barra:
        alt += barra[0] + barra[1]
    caixa = (x0, y0, x0 + larg + 2 * pad_x, y0 + alt + 2 * pad_y)
    cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
    d = ImageDraw.Draw(cam)
    d.rounded_rectangle([v * K for v in caixa], radius=raio * K, fill=PRETO + (250,))
    y = y0 + pad_y
    caixas_l = {}
    for i, (s, f, bb, cap, w_, h_, cor) in enumerate(medidas_l):
        if i:
            y += entre[i - 1]
        d.text(((x0 + pad_x) * K - bb[0], y * K - cap[1]), s, font=f, fill=cor + (255,))
        caixas_l[s] = [round(x0 + pad_x), round(y), round(x0 + pad_x + w_), round(y + h_)]
        y += h_
    if barra:
        y += barra[1]
        d.rectangle([(x0 + pad_x) * K, y * K, (x0 + pad_x + medidas_l[-1][4]) * K, (y + barra[0]) * K], fill=barra[2] + (255,))
        caixas_l["_barra"] = [round(x0 + pad_x), round(y), round(x0 + pad_x + medidas_l[-1][4]), round(y + barra[0])]
    camr = cam.resize((W, H), Image.LANCZOS)
    a = np.asarray(camr.split()[3]).astype(np.float32) / 255
    somb = np.roll(np.roll(cv2.GaussianBlur(a, (0, 0), 14), 12, 0), 9, 1)
    img = compor(img, PRETO, np.clip(somb * 0.6, 0, 0.6))
    rgb = np.asarray(camr.convert("RGB")).astype(np.float32)
    img = img * (1 - a[..., None]) + rgb * a[..., None]
    return img, [round(v) for v in caixa], caixas_l, a


def salvar(img, letra, pontos, alfa_pecas):
    final = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    final.save(os.path.join(SAIDA, "miniatura-%s-2560.jpg" % letra), quality=92, subsampling=0, optimize=True)
    m1280 = final.resize((1280, 720), Image.LANCZOS)
    q = 95
    J = os.path.join(SAIDA, "miniatura-%s-1280.jpg" % letra)
    while True:
        m1280.save(J, quality=q, subsampling=0, optimize=True)
        if os.path.getsize(J) <= 2 * 1024 * 1024 or q <= 70:
            break
        q -= 5
    m1280.save(os.path.join(PREVIA, "%s-previa-1280.png" % letra))
    p320 = final.resize((320, 180), Image.LANCZOS)
    p320.save(os.path.join(PREVIA, "%s-previa-320.png" % letra))
    p168 = final.resize((168, 94), Image.LANCZOS)
    p168.save(os.path.join(PREVIA, "%s-previa-168.png" % letra))
    quadro = Image.new("RGB", (40 + 960 + 40 + 672 + 40, 40 + 540 + 40 + 376 + 40), (15, 15, 15))
    quadro.paste(m1280.resize((960, 540), Image.LANCZOS), (40, 40))
    quadro.paste(p168.resize((672, 376), Image.NEAREST), (40 + 960 + 40, 40))
    quadro.paste(p320, (40, 40 + 540 + 40))
    quadro.paste(p168, (40 + 320 + 40, 40 + 540 + 40))
    quadro.save(os.path.join(PREVIA, "%s-ver.png" % letra))
    CANTO = (W - 320, H - 320)
    pontos["canto_duracao_320"] = {"caixa": [CANTO[0], CANTO[1], W, H], "alfa_max_pecas": int(round(255 * float(alfa_pecas[CANTO[1]:, CANTO[0]:].max())))}
    pontos["luminancia_media_final"] = round(float(np.asarray(final.convert("L")).mean()), 1)
    pontos["jpg_1280_bytes"] = os.path.getsize(J)
    pontos["jpg_1280_qualidade"] = q
    pontos["pedidos_de_rede"] = 0
    json.dump(pontos, open(os.path.join(SAIDA, "%s-pontos.json" % letra), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(json.dumps(pontos, ensure_ascii=False))
