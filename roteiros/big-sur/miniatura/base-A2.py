"""A miniatura A2 do vídeo 5 (big-sur): "ONLY 1,474", na composição que o Lucas preferiu (06/11/2026).

    python -X utf8 -B roteiros/big-sur/miniatura/base-A2.py          (da raiz do canal; sem rede)

A A (base-A.py) continua como estava. A A2 leva o mesmo mapa e o mesmo distrito para a composição da imagem de IA que o Lucas
preferiu ao lado da A (images/4.jpg da sessão, só para comparar; o mapa dela é inventado e não entra aqui):
- o quadro fecha no distrito, que passa a ocupar boa parte da imagem;
- o herói fica sem pílula e bem maior: Barlow Condensed 800, "ONLY" em --tinta e "1,474" em --destaque, com um brilho escuro atrás;
- "SAN FRANCISCO" e "LOS ANGELES" vão em CAIXA ALTA, em pílulas --tinta com letra --tinta-escura, com setas --tinta grossas e
  curvas até as pontas do distrito;
- a base fica mais clara e com mais contraste, sem passar a saturação do real, e com uma vinheta escura nas bordas.

O que não muda (e é o que a imagem de IA não tem):
- o distrito é o polígono do Census (ccd-big-sur.json, TIGER/Line 2020), projetado pela janela_3857 da base Landsat;
- cada pílula fica no rumo verdadeiro da metrópole: a reta que sai do ponto onde a seta chega, rumo ao centroide de área da
  metrópole (metro-*.json, em Mercator), corta a pílula;
- a pílula de SF não fica sobre a Baía de Monterey (a água sob ela é medida);
- o canto de baixo à direita (320 × 320) fica livre.

Grava: roteiros/big-sur/miniatura/miniatura-A2-2560.jpg e miniatura-A2-1280.jpg; em out/big-sur/_tmp/miniatura/: A2-previa-1280.png,
A2-previa-320.png, A2-previa-168.png, A2-ver.png (a 1280 reduzida, a 320, a 168 real e ×4, sobre o #0f0f0f do feed) e A2-pontos.json.
"""
import hashlib, json, math, os, sys
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter, ImageFont

RAIZ = os.getcwd()
PROJ = os.path.join(RAIZ, "out", "big-sur")
SAIDA = os.path.join(RAIZ, "roteiros", "big-sur", "miniatura")
PREVIA = os.path.join(PROJ, "_tmp", "miniatura")
GEO = os.path.join(PROJ, "_media", "geo")
FONTES = os.path.join(RAIZ, "marca", "fontes")
BASE = os.path.join(PROJ, "_media", "base", "landsat-big-sur-sangria1400.png")
os.makedirs(PREVIA, exist_ok=True)
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"

W, H = 2560, 1440
SS = 2
K = 2
R_TERRA = 6378137.0


def env(nome, padrao):
    return float(os.environ.get(nome, padrao))


# a marca (marca/tokens.css)
TINTA = np.array((244, 241, 234), float)       # --tinta        #F4F1EA
DEST = np.array((245, 165, 36), float)         # --destaque     #F5A524
T = tuple(TINTA.astype(int))
D = tuple(DEST.astype(int))
TE = (20, 24, 31)                              # --tinta-escura #14181F (texto sobre claro)
ESCURO = (4, 8, 16)


def sha256(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for bloco in iter(lambda: f.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()


# 0 · a base, conferida pelo sha256 da procedência
meta = json.load(open(BASE + ".json", encoding="utf-8"))
SHA_BASE = sha256(BASE)
if SHA_BASE != meta["sha256"]:
    sys.exit("a base não confere com o sha256 do .png.json: parei")
JAN = meta["janela_3857"]
TW, TH = meta["tamanho"]
MPX = (JAN[2] - JAN[0]) / TW
MPY = (JAN[3] - JAN[1]) / TH
crua = cv2.cvtColor(cv2.imread(BASE, cv2.IMREAD_COLOR), cv2.COLOR_BGR2RGB)
assert crua.shape[1] == TW and crua.shape[0] == TH


def merc(lon, lat):
    return (math.radians(lon) * R_TERRA, R_TERRA * math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))


def base_px(lon, lat):
    x, y = merc(lon, lat)
    return ((x - JAN[0]) / MPX, (JAN[3] - y) / MPY)


def ler(nome):
    return json.load(open(os.path.join(GEO, nome), encoding="utf-8"))


def poligonos(fc):
    out = []
    for f in fc["features"]:
        g = f["geometry"]
        out += g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]
    return out


def centroide_merc(fc):
    A = Cx = Cy = 0.0
    for poli in poligonos(fc):
        for anel in poli:
            pts = [merc(*p) for p in anel]
            a = cx = cy = 0.0
            for (x0, y0), (x1, y1) in zip(pts, pts[1:] + pts[:1]):
                c = x0 * y1 - x1 * y0
                a += c
                cx += (x0 + x1) * c
                cy += (y0 + y1) * c
            A += a / 2
            Cx += cx / 6
            Cy += cy / 6
    return Cx / A, Cy / A


ccd_fc = ler("ccd-big-sur.json")
assert ccd_fc["features"][0]["properties"]["GEOID"] == "0605390235"
ccd_polis = poligonos(ccd_fc)
todos = [base_px(*p) for poli in ccd_polis for p in poli[0]]
bxs, bys = [p[0] for p in todos], [p[1] for p in todos]
BXC, BYC = (min(bxs) + max(bxs)) / 2, (min(bys) + max(bys)) / 2

# 1 · o quadro, mais fechado que o da A: CW px da base viram os 2560 do palco; o centro da caixa do distrito cai em (PCX, PCY)
CW = int(env("MINI_CW", 2048)) // 16 * 16
CH = CW * 9 // 16
S = W / CW
PCX, PCY = env("MINI_PCX", 1330), env("MINI_PCY", 650)
CX0 = int(round(BXC - PCX / S))
CY0 = int(round(BYC - PCY / S))
if not (0 <= CX0 and CX0 + CW <= TW and 0 <= CY0 and CY0 + CH <= TH):
    sys.exit("o recorte sai da base: %r" % ((CX0, CY0, CW, CH),))


def palco(lon, lat, s=1):
    bx, by = base_px(lon, lat)
    return ((bx - CX0) * S * s, (by - CY0) * S * s)


def palco_m(x, y):
    return (((x - JAN[0]) / MPX - CX0) * S, ((JAN[3] - y) / MPY - CY0) * S)


recorte = crua[CY0:CY0 + CH, CX0:CX0 + CW]
img0 = cv2.resize(recorte, (W, H), interpolation=cv2.INTER_AREA if S < 1 else cv2.INTER_CUBIC).astype(np.float32)


def mascara(polis):
    im = Image.new("L", (W * SS, H * SS), 0)
    d = ImageDraw.Draw(im)
    for poli in polis:
        ext, *buracos = poli
        d.polygon([palco(*p, SS) for p in ext], fill=255)
        for b in buracos:
            d.polygon([palco(*p, SS) for p in b], fill=0)
    return np.asarray(im.resize((W, H), Image.LANCZOS)).astype(float) / 255.0


def contorno(polis, lw, min_px2=0.0):
    im = Image.new("L", (W * SS, H * SS), 0)
    d = ImageDraw.Draw(im)
    for poli in polis:
        for anel in poli:
            pts = [palco(*p, SS) for p in anel]
            a = abs(sum(x0 * y1 - x1 * y0 for (x0, y0), (x1, y1) in zip(pts, pts[1:] + pts[:1]))) / 2 / (SS * SS)
            if a < min_px2:
                continue
            d.line(pts + [pts[0]], fill=255, width=int(lw * SS), joint="curve")
    return np.asarray(im.resize((W, H), Image.LANCZOS)).astype(float) / 255.0


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


def compor(img, cor, a):
    return img * (1 - a[..., None]) + np.asarray(cor, float)[None, None, :3] * a[..., None]


def luma(a):
    return a @ np.array([0.2126, 0.7152, 0.0722])


def agua_de(rgb):
    rgb = rgb.astype(np.float32)
    return ((rgb[..., 2] - rgb[..., 0] > 6) & (luma(rgb) < 80)).astype(np.float32)


AGUA_CRUA = agua_de(img0)
AGUA = borrar(AGUA_CRUA, 2.0)
TERRA = 1 - AGUA

# 2 · o tratamento: mais relevo (CLAHE na luminância, só na terra), mais luz e mais contraste; a saturação fica em 1,0 (a do real)
CLIP = env("MINI_CLAHE", 3.0)
lab = cv2.cvtColor(np.clip(img0, 0, 255).astype(np.uint8), cv2.COLOR_RGB2LAB)
L = lab[..., 0]
L2 = cv2.createCLAHE(clipLimit=CLIP, tileGridSize=(12, 7)).apply(L)
lab[..., 0] = np.clip(L * AGUA + L2 * TERRA, 0, 255).astype(np.uint8)
img = cv2.cvtColor(lab, cv2.COLOR_LAB2RGB).astype(np.float32)
GAMA, GANHO, CONTR = env("MINI_GAMA", 0.80), env("MINI_GANHO", 1.22), env("MINI_CONTR", 1.15)
img = 255.0 * np.clip(img / 255.0, 0, 1) ** GAMA * GANHO
img = np.clip((img / 255.0 - 0.5) * CONTR + 0.5, 0, 1) * 255.0
# a nitidez perdida na ampliação (a base tem 100 m/px e o palco, ~80 m/px): máscara de desfoque leve, sem inventar detalhe
bl = cv2.GaussianBlur(img, (0, 0), 2.2)
img = np.clip(img + env("MINI_NITIDEZ", 0.55) * (img - bl), 0, 255)
# o mar: o azul do Landsat ganha um piso de luz (fica água, não buraco)
mar_cor = np.array((34, 72, 116), float)
MAR = env("MINI_MAR", 0.40)
img = img * (1 - MAR * AGUA[..., None]) + np.maximum(img, mar_cor[None, None, :]) * (MAR * AGUA[..., None])
lum_antes_vinheta = float(luma(np.clip(img, 0, 255)).mean())
yy, xx = np.mgrid[0:H, 0:W]
dn = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / math.sqrt(2)
VIN = env("MINI_VINHETA", 0.50)
img = img * (1 - VIN * np.clip((dn - 0.40) / 0.60, 0, 1) ** 1.5)[..., None]
lum_base = float(luma(np.clip(img, 0, 255)).mean())

# 3 · o distrito: --destaque a 85 % com o relevo por baixo, contorno --tinta e sombra escura por fora
ccd = mascara(ccd_polis)
lum = luma(img)
lm = float(lum[ccd > 0.5].mean())
mod = np.clip(0.74 + 0.30 * (lum / lm), 0.66, 1.12)
OPA = env("MINI_OPA", 0.85)
img = img * (1 - OPA * ccd[..., None]) + (DEST[None, None, :] * mod[..., None]) * (OPA * ccd[..., None])
LW_CONT = env("MINI_LW", 12)
borda = contorno(ccd_polis, LW_CONT, env("MINI_MIN_ROCHA", 600))
somb = np.roll(np.roll(borrar(borda, 10), 7, axis=0), 5, axis=1)
img = compor(img, ESCURO, 0.72 * np.clip(somb * 2.2, 0, 1) * (1 - borda) * (1 - ccd))
img = compor(img, TINTA, borda)
base = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).convert("RGBA")

# 4 · as camadas das peças (supersample 2×)
cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
somb_l = Image.new("L", (W * K, H * K), 0)
dc, ds = ImageDraw.Draw(cam), ImageDraw.Draw(somb_l)
barlow_p = os.path.join(FONTES, "barlowcondensed", "BarlowCondensed-ExtraBold.ttf")
caixas = {}

# 4a · o herói, sem pílula: Barlow Condensed 800, "ONLY" em --tinta e "1,474" em --destaque, à esquerda, sobre o mar
FS = int(env("MINI_FS", 415))
heroi = ImageFont.truetype(barlow_p, FS * K)
cap = heroi.getbbox("ONLY")
alt_cap = (cap[3] - cap[1]) / K
ENTRE = env("MINI_ENTRE", 0.20) * FS
HX0 = env("MINI_HX0", 84)
bloco_h = 2 * alt_cap + ENTRE
y_topo = env("MINI_HYC", 700) - bloco_h / 2
txt = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
dt = ImageDraw.Draw(txt)
for i, (palavra, cor) in enumerate((("ONLY", T), ("1,474", D))):
    y0 = y_topo + i * (alt_cap + ENTRE)
    bb = heroi.getbbox(palavra)
    dt.text((HX0 * K - bb[0], y0 * K - cap[1]), palavra, font=heroi, fill=cor + (255,))
    caixas["heroi-" + palavra] = (HX0, y0, HX0 + (bb[2] - bb[0]) / K, y0 + (bb[3] - cap[1]) / K)
txt_r = txt.resize((W, H), Image.LANCZOS)
a_txt = np.asarray(txt_r.split()[3]).astype(np.float32) / 255
# o brilho escuro atrás do texto: a forma das letras engordada e desfocada, em --rotulo quase preto
brilho = cv2.dilate(a_txt, np.ones((25, 25), np.uint8))
brilho = cv2.GaussianBlur(brilho, (0, 0), 46)
brilho = np.clip(brilho * 1.5, 0, 1) * env("MINI_BRILHO", 0.80)
sombra_txt = np.roll(np.roll(cv2.GaussianBlur(a_txt, (0, 0), 6), 10, 0), 8, 1) * 0.65

# 4b · os rumos: do ponto onde cada seta chega ao centroide de área da metrópole, em Mercator
ys_, xs_ = np.nonzero(ccd > 0.5)
pts = np.stack([xs_, ys_], 1).astype(float)
mu = pts.mean(0)
_, _, vt = np.linalg.svd(pts - mu, full_matrices=False)
eixo = vt[0] if vt[0][1] > 0 else -vt[0]
proj = (pts - mu) @ eixo
comp_distrito = float(proj.max() - proj.min())


def no_eixo(f):
    return mu + eixo * (proj.min() + f * (proj.max() - proj.min()))


METRO = {}
for chave, arq in (("sf", "metro-san-francisco.json"), ("la", "metro-los-angeles.json")):
    mx, my = centroide_merc(ler(arq))
    METRO[chave] = palco_m(mx, my)


def raio_cruza(orig, alvo, caixa):
    """a reta de orig rumo a alvo corta a caixa? (Liang-Barsky)"""
    (x0, y0), (x1, y1) = orig, alvo
    dx, dy = x1 - x0, y1 - y0
    t0, t1 = 0.0, 1.0
    for p, q in ((-dx, x0 - caixa[0]), (dx, caixa[2] - x0), (-dy, y0 - caixa[1]), (dy, caixa[3] - y0)):
        if p == 0:
            if q < 0:
                return None
            continue
        r = q / p
        if p < 0:
            t0 = max(t0, r)
        else:
            t1 = min(t1, r)
    if t0 > t1:
        return None
    return [round(x0 + t0 * dx), round(y0 + t0 * dy)], [round(x0 + t1 * dx), round(y0 + t1 * dy)]


# 4c · as pílulas das cidades: --tinta, letra --tinta-escura, Barlow Condensed 800 em CAIXA ALTA
FC = int(env("MINI_FC", 150))
cid = ImageFont.truetype(barlow_p, FC * K)
cap_c = cid.getbbox("SAN FRANCISCO LOS ANGELES")
PX_, PY_ = 38, 26
NOMES = {"sf": "SAN FRANCISCO", "la": "LOS ANGELES"}
ALVO_F = {"sf": env("MINI_SF_F", 0.30), "la": env("MINI_LA_F", 0.95)}
# a seta de LA chega à ponta sul do distrito: o ponto mais baixo da máscara (média das colunas nas 8 linhas de baixo).
# O extremo do eixo cai no flanco leste, ao lado do entalhe retangular do Census, e a seta parecia apontar para o entalhe.
_yb = ys_.max()
_sul = xs_[ys_ >= _yb - 8]
PONTA_SUL = np.array((float(_sul.mean()), float(_yb - 4)))
ALVO = {"sf": no_eixo(ALVO_F["sf"]), "la": PONTA_SUL if env("MINI_LA_SUL", 1) else no_eixo(ALVO_F["la"])}
rumos = {}
for chave in ("sf", "la"):
    w_ = cid.getlength(NOMES[chave]) / K + 2 * PX_
    h_ = (cap_c[3] - cap_c[1]) / K + 2 * PY_
    orig = ALVO[chave]
    ox, oy = orig
    mx, my = METRO[chave]
    if chave == "sf":
        y0 = env("MINI_SF_Y", 36)
        # o ponto em que o rumo corta a faixa da pílula; a pílula começa um pouco à esquerda dele e se estende para a direita
        t = (y0 + h_ / 2 - oy) / (my - oy)
        xr = ox + t * (mx - ox)
        x0 = xr - env("MINI_SF_ANTES", 30)
    else:
        y0 = H - env("MINI_LA_Y", 40) - h_
        t = (y0 + h_ / 2 - oy) / (my - oy)
        xr = ox + t * (mx - ox)
        x0 = xr - w_ + env("MINI_LA_DEPOIS", 140)
        x0 = min(x0, W - 320 - 40 - w_)                    # fora do canto da duração
    x0 = max(40, min(x0, W - 40 - w_))
    c = (x0, y0, x0 + w_, y0 + h_)
    dc.rounded_rectangle([c[0] * K, c[1] * K, c[2] * K, c[3] * K], radius=14 * K, fill=T + (255,))
    ds.rounded_rectangle([c[0] * K, c[1] * K, c[2] * K, c[3] * K], radius=14 * K, fill=210)
    dc.text(((x0 + PX_) * K, (y0 + PY_) * K - cap_c[1]), NOMES[chave], font=cid, fill=TE + (255,))
    caixas[chave] = c
    cr = raio_cruza((ox, oy), (mx, my), c)
    sob = AGUA_CRUA[int(c[1]):int(c[3]), int(c[0]):int(c[2])]
    agua_sob = float(sob.mean())
    tercos = [round(float(t.mean()), 3) for t in np.array_split(sob, 3, axis=1)]
    rumos[chave] = {"de_palco": [round(ox), round(oy)], "centroide_palco": [round(mx), round(my)],
                    "angulo_graus": round(math.degrees(math.atan2(my - oy, mx - ox)), 1),
                    "pilula": [round(v) for v in c], "rumo_corta_a_pilula": cr, "agua_sob_a_pilula": round(agua_sob, 4),
                    "agua_sob_a_pilula_por_terco": tercos}


# 4d · as setas grossas: corpo que engrossa da cauda à cabeça e cabeça triangular cheia, --tinta, com sombra
def ponta_fora(alvo, chegada_graus, folga):
    a = math.radians(chegada_graus)
    d = np.array((math.cos(a), math.sin(a)))
    p = np.array(alvo, float)
    for _ in range(4000):
        x, y = int(round(p[0])), int(round(p[1]))
        if not (0 <= x < W and 0 <= y < H and (ccd[y, x] > 0.2 or borda[y, x] > 0.2)):
            break
        p -= d
    return p - d * folga, d


def bezier(p0, p1, p2, p3, n=240):
    return [tuple((1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * e
                  for a, b, c, e in zip(p0, p1, p2, p3)) for t in (i / n for i in range(n + 1))]


def seta_grossa(curva, w0, w1, cab_l, cab_w):
    acum = [0.0]
    for i in range(1, len(curva)):
        acum.append(acum[-1] + math.dist(curva[i - 1], curva[i]))
    L = acum[-1]
    corte = L - cab_l * 0.9
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
    i_b = max(i for i, a in enumerate(acum) if a <= L - cab_l)
    bx, by = curva[i_b]
    dx, dy = ponta[0] - bx, ponta[1] - by
    n = math.hypot(dx, dy)
    ux, uy = dx / n, dy / n
    bx, by = ponta[0] - ux * cab_l, ponta[1] - uy * cab_l
    cabeca = [(bx - uy * cab_w / 2, by + ux * cab_w / 2), ponta, (bx + uy * cab_w / 2, by - ux * cab_w / 2)]
    for dr, cor in ((dc, T + (255,)), (ds, 225)):
        dr.polygon([(x * K, y * K) for x, y in esq + dirr[::-1]], fill=cor)
        dr.polygon([(x * K, y * K) for x, y in cabeca], fill=cor)
        x0_, y0_ = corpo[0][0]
        dr.ellipse([(x0_ - w0 / 2) * K, (y0_ - w0 / 2) * K, (x0_ + w0 / 2) * K, (y0_ + w0 / 2) * K], fill=cor)
    return L


setas = {}
for chave, cheg, sai, l1, l2 in (("sf", env("MINI_SF_CHEG", 158), env("MINI_SF_SAI", 0.70), env("MINI_SF_L1", 230), env("MINI_SF_L2", 300)),
                                 ("la", env("MINI_LA_CHEG", 195), env("MINI_LA_SAI", 0.85), env("MINI_LA_L1", 220), env("MINI_LA_L2", 230))):
    c = caixas[chave]
    p3, d = ponta_fora(ALVO[chave], cheg, 30)
    if chave == "sf":
        p0 = np.array((c[0] + sai * (c[2] - c[0]), c[3] + 22))
        p1 = p0 + (0, l1)
    else:
        p0 = np.array((c[0] + sai * (c[2] - c[0]), c[1] - 22))
        p1 = p0 + (0, -l1)
    p2 = p3 - d * l2
    comp = seta_grossa(bezier(tuple(p0), tuple(p1), tuple(p2), tuple(p3)), env("MINI_W0", 46), env("MINI_W1", 84),
                       env("MINI_CAB_L", 165), env("MINI_CAB_W", 215))
    setas[chave] = {"de": [round(v) for v in p0], "ponta": [round(v) for v in p3], "comprimento_px": round(comp)}

# 5 · a composição: o brilho escuro e a sombra do texto, a sombra das peças, as peças e o texto
final = np.asarray(base.convert("RGB")).astype(np.float32)
final = compor(final, ESCURO, brilho)
sombra = np.asarray(somb_l.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(14))).astype(np.float32) / 255
sombra = np.roll(np.roll(sombra, 10, 0), 6, 1) * 0.70
final = compor(final, ESCURO, np.maximum(sombra, sombra_txt))
final = Image.fromarray(np.clip(final, 0, 255).astype(np.uint8)).convert("RGBA")
cam_r = cam.resize((W, H), Image.LANCZOS)
final = Image.alpha_composite(final, cam_r)
final = Image.alpha_composite(final, txt_r).convert("RGB")

# 6 · as saídas
final.save(os.path.join(SAIDA, "miniatura-A2-2560.jpg"), quality=92, subsampling=0, optimize=True)
m1280 = final.resize((1280, 720), Image.LANCZOS)
q = 95
J = os.path.join(SAIDA, "miniatura-A2-1280.jpg")
while True:
    m1280.save(J, quality=q, subsampling=0, optimize=True)
    if os.path.getsize(J) <= 2 * 1024 * 1024 or q <= 70:
        break
    q -= 5
m1280.save(os.path.join(PREVIA, "A2-previa-1280.png"))
p320 = final.resize((320, 180), Image.LANCZOS)
p320.save(os.path.join(PREVIA, "A2-previa-320.png"))
p168 = final.resize((168, 94), Image.LANCZOS)
p168.save(os.path.join(PREVIA, "A2-previa-168.png"))
quadro = Image.new("RGB", (40 + 960 + 40 + 672 + 40, 40 + 540 + 40 + 376 + 40), (15, 15, 15))     # o #0f0f0f do feed
quadro.paste(m1280.resize((960, 540), Image.LANCZOS), (40, 40))
quadro.paste(p168.resize((672, 376), Image.NEAREST), (40 + 960 + 40, 40))
quadro.paste(p320, (40, 40 + 540 + 40))
quadro.paste(p168, (40 + 320 + 40, 40 + 540 + 40))
quadro.save(os.path.join(PREVIA, "A2-ver.png"))

# 7 · as conferências
alfa = np.maximum(np.asarray(cam_r.split()[3]).astype(int), np.asarray(txt_r.split()[3]).astype(int))
CANTO = (W - 320, H - 320)
ccd_px = np.nonzero(ccd > 0.5)
lum_txt = {}
for nome in ("heroi-ONLY", "heroi-1,474"):
    x0, y0, x1, y1 = [int(v) for v in caixas[nome]]
    fundo = np.asarray(final.convert("L"))[y0:y1, x0:x1].astype(float)
    letras = np.asarray(txt_r.split()[3])[y0:y1, x0:x1] > 200
    perto = cv2.dilate(letras.astype(np.uint8), np.ones((21, 21), np.uint8)).astype(bool) & ~cv2.dilate(letras.astype(np.uint8), np.ones((5, 5), np.uint8)).astype(bool)
    lum_txt[nome] = {"luma_media_em_volta_das_letras": round(float(fundo[perto].mean()), 1)}
pontos = {
    "quadro": {"base": os.path.relpath(BASE, RAIZ).replace("\\", "/"), "sha256_base": SHA_BASE, "janela_3857_base": JAN,
               "recorte_px_base": [CX0, CY0, CX0 + CW, CY0 + CH], "escala_palco_por_px_base": round(S, 5),
               "metros_mercator_por_px_palco": round(MPX / S, 2)},
    "distrito": {"geoid": "0605390235", "caixa_palco": [int(ccd_px[1].min()), int(ccd_px[0].min()), int(ccd_px[1].max()), int(ccd_px[0].max())],
                 "comprimento_no_eixo_palco_px": round(comp_distrito), "comprimento_no_168_px": round(comp_distrito * 168 / W, 1),
                 "fracao_da_imagem": round(float((ccd > 0.5).mean()), 4),
                 "fracao_coberta_por_pecas": round(float(((alfa > 40) & (ccd > 0.5)).sum() / max(1, (ccd > 0.5).sum())), 4)},
    "heroi": {"fonte_px": FS, "altura_maiuscula_px": round(alt_cap), "no_168_px": round(alt_cap * 168 / W, 1),
              "caixas": {k: [round(v) for v in caixas[k]] for k in ("heroi-ONLY", "heroi-1,474")}, "fundo": lum_txt},
    "cidades": {"fonte_px": FC, "altura_maiuscula_px": round((cap_c[3] - cap_c[1]) / K), "no_320_px": round((cap_c[3] - cap_c[1]) / K * 320 / W, 1)},
    "rumos": rumos, "setas": setas,
    "canto_duracao_320": {"caixa": [CANTO[0], CANTO[1], W, H], "alfa_max_pecas": int(alfa[CANTO[1]:, CANTO[0]:].max())},
    "luminancia_media_base_antes_da_vinheta": round(lum_antes_vinheta, 1),
    "luminancia_media_base": round(lum_base, 1),
    "luminancia_media_final": round(float(np.asarray(final.convert("L")).mean()), 1),
    "tratamento": {"clahe": CLIP, "gama": GAMA, "ganho": GANHO, "contraste": CONTR, "saturacao": 1.0, "vinheta": VIN,
                   "distrito_opacidade": OPA, "contorno_px": LW_CONT},
    "jpg_1280_bytes": os.path.getsize(J), "jpg_1280_qualidade": q,
    "pedidos_de_rede": 0,
}
json.dump(pontos, open(os.path.join(PREVIA, "A2-pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(pontos, ensure_ascii=False))
