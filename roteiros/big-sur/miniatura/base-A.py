"""A miniatura A do vídeo 5 (big-sur): "ONLY 1,474".

    python -X utf8 -B roteiros/big-sur/miniatura/base-A.py          (da raiz do canal; sem rede)

O título (decidido): "Why This Stretch of California Is as Empty as Wyoming". A miniatura não repete o título: ela dá o número
que o título não dá, e mostra o trecho sem dizer o nome dele (marca/embalagem.md §2, "O título não entrega a resposta").

A IDEIA (pautas/2026-11-01-video-5-big-sur.md §8, miniatura 1). A costa central da Califórnia de cima, no satélite: o distrito de
censo de Big Sur (Big Sur CCD, TIGER/Line 2020) pintado de --destaque com contorno --tinta, e o "ONLY 1,474" numa pílula escura em
duas linhas, com o 1,474 na cor do distrito (o número é o do Censo de 2020, a s03 do vídeo: "1,474 · CENSUS DISTRICT · 2020").
Los Angeles e San Francisco ficam FORA da base (a sangria vai de ~35,0° a ~37,3° N): entram como pílulas na borda do quadro, no
rumo verdadeiro de cada metrópole (a reta do centro do distrito ao centroide da metrópole, em Mercator, corta a borda dentro da
pílula), e cada uma manda uma seta curva branca a uma ponta do distrito. Lê-se: "entre LA e SF, só 1.474 pessoas aqui".

DE ONDE VEM CADA COISA (nada desenhado à mão nem por IA; este script não tem código de rede):
- a base: out/big-sur/_media/base/landsat-big-sur-sangria1400.png (Landsat 8/9 C2 L2, USGS, domínio público; o sha256 confere
  com o .png.json antes de usar). Recortada e reamostrada na grade dela mesma (Web Mercator), sem girar nem deformar;
- o distrito: _media/geo/ccd-big-sur.json (TIGER/Line 2020, sem a água marinha), projetado pela janela_3857 do .png.json;
- os rumos: os centroides de área de _media/geo/metro-los-angeles.json e metro-san-francisco.json (condados da OMB), em Mercator;
- as letras: marca/fontes/ (Barlow Condensed 800 e Inter 700, SIL OFL); as cores: marca/tokens.css.

Grava: roteiros/big-sur/miniatura/miniatura-A-2560.jpg e miniatura-A-1280.jpg (<= 2 MB); em out/big-sur/_tmp/miniatura/: as
prévias previa-1280.png, previa-320.png, previa-168.png, ver-pequenas.png (a 168 real e x4 e a 320 sobre o #0f0f0f do feed),
sobreposicao-contorno.png (a base crua com o contorno em magenta e dois zooms na costa) e A-pontos.json (as conferências).
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
R_TERRA = 6378137.0


def env(nome, padrao):
    return float(os.environ.get(nome, padrao))


# a marca (marca/tokens.css)
TINTA = np.array((244, 241, 234), float)       # --tinta   #F4F1EA
DEST = np.array((245, 165, 36), float)         # --destaque #F5A524
ROTULO = (11, 15, 20, int(0.88 * 255))         # --rotulo  rgba(11,15,20,.88)
ESCURO = (4, 8, 16)
T = tuple(TINTA.astype(int))
D = tuple(DEST.astype(int))


def sha256(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for bloco in iter(lambda: f.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()


# 0 · a base, conferida pelo sha256 da procedência; a janela 3857 e o tamanho saem do .png.json, não daqui
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
    """centroide de área (fórmula do polígono, anéis externos menos buracos), em metros Mercator"""
    A = Cx = Cy = 0.0
    for poli in poligonos(fc):
        for i, anel in enumerate(poli):
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


def area_m2_merc(anel):
    pts = [merc(*p) for p in anel]
    return abs(sum(x0 * y1 - x1 * y0 for (x0, y0), (x1, y1) in zip(pts, pts[1:] + pts[:1]))) / 2


ccd_fc = ler("ccd-big-sur.json")
assert ccd_fc["features"][0]["properties"]["GEOID"] == "0605390235"
ccd_polis = poligonos(ccd_fc)
todos = [base_px(*p) for poli in ccd_polis for p in poli[0]]
bxs, bys = [p[0] for p in todos], [p[1] for p in todos]
BXC, BYC = (min(bxs) + max(bxs)) / 2, (min(bys) + max(bys)) / 2

# 1 · o quadro: CW px da base viram os 2560 do palco (S = 2560/CW); o centro da caixa do distrito cai em (PCX, PCY)
CW = int(env("MINI_CW", 2912)) // 16 * 16
CH = CW * 9 // 16
S = W / CW
PCX, PCY = env("MINI_PCX", 1230), env("MINI_PCY", 770)
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
img0 = cv2.resize(recorte, (W, H), interpolation=cv2.INTER_AREA if S < 1 else cv2.INTER_LANCZOS4).astype(np.float32)


def mascara(polis, w=W, h=H, proj=palco, ss=SS, min_px2=0.0):
    im = Image.new("L", (w * ss, h * ss), 0)
    d = ImageDraw.Draw(im)
    for poli in polis:
        ext, *buracos = poli
        pe = [proj(*p, ss) for p in ext]
        d.polygon(pe, fill=255)
        for b in buracos:
            d.polygon([proj(*p, ss) for p in b], fill=0)
    return np.asarray(im.resize((w, h), Image.LANCZOS)).astype(float) / 255.0


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


# 2 · a água da base crua (para o relevo só na terra e para a conferência da costa): o mar do Landsat é azul-escuro, B bem acima de R
def agua_de(rgb):
    rgb = rgb.astype(np.float32)
    return ((rgb[..., 2] - rgb[..., 0] > 6) & (luma(rgb) < 80)).astype(np.float32)


AGUA = borrar(agua_de(img0), 2.0)
TERRA = 1 - AGUA

# 3 · o tratamento da base: o relevo puxado (CLAHE na luminância, só na terra), a luz levantada (embalagem §3: base mais clara que a
#     do vídeo; a miniatura disputa o feed escuro), o mar um pouco aberto para não virar mancha preta, e a vinheta de 35 %
CLIP = env("MINI_CLAHE", 2.2)
lab = cv2.cvtColor(np.clip(img0, 0, 255).astype(np.uint8), cv2.COLOR_RGB2LAB)
L = lab[..., 0]
L2 = cv2.createCLAHE(clipLimit=CLIP, tileGridSize=(16, 9)).apply(L)
lab[..., 0] = np.clip(L * AGUA + L2 * TERRA, 0, 255).astype(np.uint8)
img = cv2.cvtColor(lab, cv2.COLOR_LAB2RGB).astype(np.float32)
GAMA = env("MINI_GAMA", 0.80)
GANHO = env("MINI_GANHO", 1.20)
img = 255.0 * np.clip(img / 255.0, 0, 1) ** GAMA * GANHO
cinza = luma(img)[..., None]
SAT = env("MINI_SAT", 0.95)
img = cinza + (img - cinza) * SAT
img = np.clip((img / 255.0 - 0.5) * 1.05 + 0.5, 0, 1) * 255.0
# o mar: o azul do Landsat ganha um pouco de luz e de azul (fica água, não buraco)
mar_cor = np.array((30, 62, 98), float)
MAR = env("MINI_MAR", 0.30)
img = img * (1 - MAR * AGUA[..., None]) + np.maximum(img, mar_cor[None, None, :]) * (MAR * AGUA[..., None])
yy, xx = np.mgrid[0:H, 0:W]
dn = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / math.sqrt(2)
img = img * (1 - 0.35 * np.clip((dn - 0.45) / 0.55, 0, 1) ** 1.6)[..., None]
lum_base = float(luma(np.clip(img, 0, 255)).mean())

# 4 · o distrito: --destaque a 88 % com o relevo por baixo (a luz da base modula), contorno --tinta e uma sombra escura por fora
ccd = mascara(ccd_polis)
lum = luma(img)
lm = float(lum[ccd > 0.5].mean())
mod = np.clip(0.72 + 0.32 * (lum / lm), 0.64, 1.12)
laranja = DEST[None, None, :] * mod[..., None]
OPA = env("MINI_OPA", 0.88)
img = img * (1 - OPA * ccd[..., None]) + laranja * (OPA * ccd[..., None])
LW_CONT = env("MINI_LW", 9)
MIN_ROCHA = env("MINI_MIN_ROCHA", 400)    # px² no palco: as rochas do mar menores que isso não ganham contorno (viravam pontos)
borda = contorno(ccd_polis, LW_CONT, MIN_ROCHA)
somb = np.roll(np.roll(borrar(borda, 8), 6, axis=0), 4, axis=1)
img = compor(img, ESCURO, 0.70 * np.clip(somb * 2.2, 0, 1) * (1 - borda) * (1 - ccd))
img = compor(img, TINTA, borda)
base = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).convert("RGBA")

# 5 · as peças, em supersample 2×
K = 2
cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
somb_l = Image.new("L", (W * K, H * K), 0)
dc, ds = ImageDraw.Draw(cam), ImageDraw.Draw(somb_l)
barlow = ImageFont.truetype(os.path.join(FONTES, "barlowcondensed", "BarlowCondensed-ExtraBold.ttf"), 300 * K)
inter = ImageFont.truetype(os.path.join(FONTES, "inter", "Inter-VF.ttf"), 96 * K)
inter.set_variation_by_name("Bold")
caixas = {}


def pilula(nome, x0, y0, partes, fonte, padx, pady, bbox_ref):
    tb = fonte.getbbox(bbox_ref)
    w = sum(fonte.getlength(p) for p, _ in partes) / K + 2 * padx
    h = (tb[3] - tb[1]) / K + 2 * pady
    dc.rounded_rectangle([x0 * K, y0 * K, (x0 + w) * K, (y0 + h) * K], radius=24 * K, fill=ROTULO)
    ds.rounded_rectangle([x0 * K, y0 * K, (x0 + w) * K, (y0 + h) * K], radius=24 * K, fill=200)
    cx = (x0 + padx) * K
    for parte, cor in partes:
        dc.text((cx, (y0 + pady) * K - tb[1]), parte, font=fonte, fill=cor + (255,))
        cx += fonte.getlength(parte)
    caixas[nome] = (x0, y0, x0 + w, y0 + h)
    return caixas[nome]


def medir_pilula(partes, fonte, padx, pady, bbox_ref):
    tb = fonte.getbbox(bbox_ref)
    return sum(fonte.getlength(p) for p, _ in partes) / K + 2 * padx, (tb[3] - tb[1]) / K + 2 * pady


# 5a · o herói em duas linhas, no mar, à esquerda: Barlow Condensed 800, 300 px, CAIXA ALTA; o 1,474 em --destaque (a cor do distrito)
LINHAS = [("ONLY", [("ONLY", T)]), ("1,474", [("1,474", D)])]
HPX, HPY, GAP = 52, 36, 26
HX0 = env("MINI_HX0", 110)
hh = medir_pilula(LINHAS[0][1], barlow, HPX, HPY, "ONLY 1,474")[1]
bloco_h = len(LINHAS) * hh + GAP * (len(LINHAS) - 1)
y = round(env("MINI_HYC", 760) - bloco_h / 2)
for nome, partes in LINHAS:
    pilula("heroi-" + nome, HX0, y, partes, barlow, HPX, HPY, "ONLY 1,474")
    y += hh + GAP

# 5b · os rumos das metrópoles: a reta do centro do distrito ao centroide de cada uma, em Mercator, até a borda do quadro
CXP, CYP = (BXC - CX0) * S, (BYC - CY0) * S
rumos = {}
for chave, arq in (("sf", "metro-san-francisco.json"), ("la", "metro-los-angeles.json")):
    mx, my = centroide_merc(ler(arq))
    px, py = palco_m(mx, my)
    dx, dy = px - CXP, py - CYP
    ts = [t for t in ((-CXP / dx) if dx < 0 else ((W - CXP) / dx) if dx > 0 else 1e9,
                      (-CYP / dy) if dy < 0 else ((H - CYP) / dy) if dy > 0 else 1e9) if t > 0]
    t = min(ts)
    lon = math.degrees(mx / R_TERRA)
    lat = math.degrees(2 * math.atan(math.exp(my / R_TERRA)) - math.pi / 2)
    rumos[chave] = {"centroide_lonlat": [round(lon, 4), round(lat, 4)], "centroide_palco": [round(px), round(py)],
                    "borda": [round(CXP + t * dx), round(CYP + t * dy)],
                    "angulo_graus": round(math.degrees(math.atan2(dy, dx)), 1)}

# 5c · as pílulas das cidades (Inter 700, 96 px, a pílula do rótulo), na borda, cortadas pela reta do rumo
NOMES = {"sf": "San Francisco", "la": "Los Angeles"}
PADX, PADY = 40, 24
for chave in ("sf", "la"):
    w_, h_ = medir_pilula([(NOMES[chave], T)], inter, PADX, PADY, "San Francisco Los Angeles")
    bx_, by_ = rumos[chave]["borda"]
    if chave == "sf":
        x0 = bx_ - w_ / 2 + env("MINI_SF_DX", 0)
        y0 = env("MINI_SF_Y", 64)
    else:
        x0 = min(bx_ - w_ / 2 + env("MINI_LA_DX", 0), W - 320 - 40 - w_)   # fora do canto da duração
        y0 = H - env("MINI_LA_Y", 64) - h_
    x0 = max(60, min(x0, W - 60 - w_))
    pilula(chave, x0, y0, [(NOMES[chave], T)], inter, PADX, PADY, "San Francisco Los Angeles")
    c = caixas[chave]
    if chave == "sf":
        xb = CXP + (c[3] - CYP) * (rumos[chave]["borda"][0] - CXP) / (rumos[chave]["borda"][1] - CYP)
    else:
        xb = CXP + (c[1] - CYP) * (rumos[chave]["borda"][0] - CXP) / (rumos[chave]["borda"][1] - CYP)
    rumos[chave]["reta_cruza_a_pilula_em_x"] = round(xb)
    rumos[chave]["reta_dentro_da_pilula"] = bool(c[0] <= xb <= c[2])
    rumos[chave]["pilula"] = [round(v) for v in c]

# 5d · as setas (--tinta, traço 34, pontas redondas, sombra): de cada pílula a uma ponta do distrito
ys_, xs_ = np.nonzero(ccd > 0.5)
pts = np.stack([xs_, ys_], 1).astype(float)
mu = pts.mean(0)
_, _, vt = np.linalg.svd(pts - mu, full_matrices=False)
eixo = vt[0] if vt[0][1] > 0 else -vt[0]          # do noroeste (alto) ao sudeste (baixo)
proj = (pts - mu) @ eixo
comp_distrito = float(proj.max() - proj.min())


def no_eixo(f):
    return mu + eixo * (proj.min() + f * (proj.max() - proj.min()))


def ponta_fora(alvo, chegada_graus, folga):
    """anda do alvo para trás, contra a direção de chegada, até sair do distrito e do contorno, e recua mais `folga` px"""
    a = math.radians(chegada_graus)
    d = np.array((math.cos(a), math.sin(a)))
    p = np.array(alvo, float)
    for _ in range(4000):
        x, y = int(round(p[0])), int(round(p[1]))
        dentro = 0 <= x < W and 0 <= y < H and (ccd[y, x] > 0.2 or borda[y, x] > 0.2)
        if not dentro:
            break
        p -= d
    return p - d * folga, d


def bezier(p0, p1, p2, p3, n=200):
    out = []
    for i in range(n + 1):
        t = i / n
        out.append(tuple((1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * e
                         for a, b, c, e in zip(p0, p1, p2, p3)))
    return out


seta = np.zeros((H * K, W * K), np.uint8)
setas = {}
for chave, f_eixo, cheg, sai_dx, l1, l2 in (
        ("sf", env("MINI_SF_F", 0.10), env("MINI_SF_CHEG", 160), env("MINI_SF_SAI", 0.92), env("MINI_SF_L1", 240), env("MINI_SF_L2", 230)),
        ("la", env("MINI_LA_F", 0.78), env("MINI_LA_CHEG", 190), env("MINI_LA_SAI", 0.30), env("MINI_LA_L1", 170), env("MINI_LA_L2", 260))):
    c = caixas[chave]
    p3, d = ponta_fora(no_eixo(f_eixo), cheg, 34)
    if chave == "sf":
        p0 = np.array((c[0] + sai_dx * (c[2] - c[0]), c[3] + 34))
        p1 = p0 + (0, l1)
    else:
        p0 = np.array((c[0] + sai_dx * (c[2] - c[0]), c[1] - 34))
        p1 = p0 + (0, -l1)
    p2 = p3 - d * l2
    curva = bezier(tuple(p0), tuple(p1), tuple(p2), tuple(p3))
    comp = sum(math.dist(curva[i], curva[i + 1]) for i in range(len(curva) - 1))
    ddx, ddy = curva[-1][0] - curva[-10][0], curva[-1][1] - curva[-10][1]
    ang = math.atan2(ddy, ddx)
    braco = [(p3[0] - 92 * math.cos(ang + s * math.radians(38)), p3[1] - 92 * math.sin(ang + s * math.radians(38))) for s in (-1, 1)]
    for seg in (curva, [braco[0], tuple(p3)], [braco[1], tuple(p3)]):
        q = np.array([[round(xq * K * 16), round(yq * K * 16)] for xq, yq in seg], np.int32)
        cv2.polylines(seta, [q], False, 255, thickness=34 * K, lineType=cv2.LINE_AA, shift=4)
    setas[chave] = {"de": [round(v) for v in p0], "ponta": [round(v) for v in p3], "comprimento_px": round(comp)}
seta_l = Image.fromarray(seta)
somb_l.paste(220, (0, 0), seta_l)
cam_seta = Image.new("RGBA", (W * K, H * K), T + (0,))
cam_seta.putalpha(seta_l)

# 5e · a sombra difusa (deslocada) sob as peças, e a composição
sombra = somb_l.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(16))
sombra = Image.fromarray(np.roll(np.roll(np.asarray(sombra), 10, 0), 6, 1))
camada_sombra = Image.new("RGBA", (W, H), ESCURO + (0,))
camada_sombra.putalpha(sombra.point(lambda v: int(v * 0.75)))
final = Image.alpha_composite(base, camada_sombra)
cam_seta_r = cam_seta.resize((W, H), Image.LANCZOS)
final = Image.alpha_composite(final, cam_seta_r)
cam_r = cam.resize((W, H), Image.LANCZOS)
final = Image.alpha_composite(final, cam_r).convert("RGB")

# 6 · as saídas
final.save(os.path.join(SAIDA, "miniatura-A-2560.jpg"), quality=92, subsampling=0, optimize=True)
m1280 = final.resize((1280, 720), Image.LANCZOS)
q = 95
J = os.path.join(SAIDA, "miniatura-A-1280.jpg")
while True:
    m1280.save(J, quality=q, subsampling=0, optimize=True)
    if os.path.getsize(J) <= 2 * 1024 * 1024 or q <= 70:
        break
    q -= 5
m1280.save(os.path.join(PREVIA, "previa-1280.png"))
p320 = final.resize((320, 180), Image.LANCZOS)
p320.save(os.path.join(PREVIA, "previa-320.png"))
p168 = final.resize((168, 94), Image.LANCZOS)
p168.save(os.path.join(PREVIA, "previa-168.png"))
quadro = Image.new("RGB", (40 + 672 + 40 + 320 + 40, 40 + 376 + 40), (15, 15, 15))     # o #0f0f0f do feed
quadro.paste(p168.resize((672, 376), Image.NEAREST), (40, 40))
quadro.paste(p320, (40 + 672 + 40, 40))
quadro.paste(p168, (40 + 672 + 40, 40 + 180 + 60))
quadro.save(os.path.join(PREVIA, "ver-pequenas.png"))

# 7 · a conferência da costa, na grade da própria base (100 m/px): o distrito, deslocado de -8 a +8 px, contra a água da base crua.
#     Se o contorno cai na costa, a água dentro do distrito é mínima e a água no anel de 1 a 3 px por fora é máxima no deslocamento 0.
bx0, by0 = int(min(bxs)) - 40, int(min(bys)) - 40
bx1, by1 = int(max(bxs)) + 40, int(max(bys)) + 40
jan = crua[by0:by1, bx0:bx1]
agua_b = agua_de(jan) > 0.5
ww, hh_ = bx1 - bx0, by1 - by0


def proj_b(lon, lat, s=1):
    bx, by = base_px(lon, lat)
    return ((bx - bx0) * s, (by - by0) * s)


m_b = mascara(ccd_polis, ww, hh_, proj_b, ss=4) > 0.5
anel_b = cv2.dilate(m_b.astype(np.uint8), np.ones((7, 7), np.uint8)).astype(bool) & ~m_b
grade = {}
melhor = None
for ddy in range(-8, 9):
    for ddx in range(-8, 9):
        mm = np.roll(np.roll(m_b, ddy, 0), ddx, 1)
        aa = np.roll(np.roll(anel_b, ddy, 0), ddx, 1)
        dentro = float(agua_b[mm].mean())
        fora = float(agua_b[aa].mean())
        nota = fora - dentro
        grade[(ddx, ddy)] = (dentro, fora)
        if melhor is None or nota > melhor[0]:
            melhor = (nota, ddx, ddy)
d0, f0 = grade[(0, 0)]

# 7a · a prévia da sobreposição: a base crua do quadro (sem tratamento) com o contorno em magenta, e dois zooms 2× na costa
sob = Image.fromarray(np.clip(img0 * 1.6, 0, 255).astype(np.uint8)).resize((1600, 900), Image.LANCZOS)
ds_ = ImageDraw.Draw(sob)
f = 1600 / W
for poli in ccd_polis:
    for anel in poli:
        pp = [(x * f, y * f) for x, y in (palco(*p) for p in anel)]
        ds_.line(pp + [pp[0]], fill=(255, 0, 255), width=2)
for chave in ("sf", "la"):
    ds_.line([(CXP * f, CYP * f), (rumos[chave]["borda"][0] * f, rumos[chave]["borda"][1] * f)], fill=(0, 255, 255), width=1)
zooms = []
for lonc, latc in ((-121.89, 36.40), (-121.55, 36.08)):     # perto de Point Sur e perto da ponta sul do distrito
    zx, zy = base_px(lonc, latc)
    zx0, zy0 = int(zx) - 200, int(zy) - 100
    z = Image.fromarray(np.clip(crua[zy0:zy0 + 200, zx0:zx0 + 400].astype(np.float32) * 1.6, 0, 255).astype(np.uint8)).resize((800, 400), Image.NEAREST)
    dz = ImageDraw.Draw(z)
    for poli in ccd_polis:
        for anel in poli:
            pp = [((bx - zx0) * 2, (by - zy0) * 2) for bx, by in (base_px(*p) for p in anel)]
            dz.line(pp + [pp[0]], fill=(255, 0, 255), width=1)
    zooms.append(z)
folha = Image.new("RGB", (1600, 1300), (15, 15, 15))
folha.paste(sob, (0, 0))
folha.paste(zooms[0], (0, 900))
folha.paste(zooms[1], (800, 900))
folha.save(os.path.join(PREVIA, "sobreposicao-contorno.png"))

# 8 · as conferências
alfa = np.maximum(np.asarray(cam_r.split()[3]).astype(int), np.asarray(cam_seta_r.split()[3]).astype(int))
CANTO = (W - 320, H - 320)
ccd_px = np.nonzero(ccd > 0.5)
pecas_sobre_distrito = float(((alfa > 40) & (ccd > 0.5)).sum() / max(1, (ccd > 0.5).sum()))
rochas = [round(area_m2_merc(p[0]) / 1e6, 4) for p in ccd_polis]
pontos = {
    "quadro": {"base": os.path.relpath(BASE, RAIZ).replace("\\", "/"), "sha256_base": SHA_BASE, "janela_3857_base": JAN,
               "recorte_px_base": [CX0, CY0, CX0 + CW, CY0 + CH], "escala_palco_por_px_base": round(S, 5),
               "metros_mercator_por_px_palco": round(MPX / S, 2)},
    "distrito": {"geoid": "0605390235", "partes": len(ccd_polis), "areas_km2_mercator_das_partes": sorted(rochas, reverse=True)[:6],
                 "caixa_palco": [int(ccd_px[1].min()), int(ccd_px[0].min()), int(ccd_px[1].max()), int(ccd_px[0].max())],
                 "comprimento_no_eixo_palco_px": round(comp_distrito), "comprimento_no_168_px": round(comp_distrito * 168 / W, 1),
                 "fracao_coberta_por_pecas": round(pecas_sobre_distrito, 4)},
    "costa": {"agua_dentro_do_distrito_desl0": round(d0, 4), "agua_no_anel_externo_1a3px_desl0": round(f0, 4),
              "melhor_deslocamento_px_base": [melhor[1], melhor[2]], "melhor_nota": round(melhor[0], 4), "nota_desl0": round(f0 - d0, 4),
              "agua_dentro_desl_8px": {k: round(grade[v][0], 4) for k, v in (("oeste", (-8, 0)), ("leste", (8, 0)), ("norte", (0, -8)), ("sul", (0, 8)))}},
    "rumos": rumos, "setas": setas,
    "caixas": {k: [round(v) for v in c] for k, c in caixas.items()},
    "canto_duracao_320": {"caixa": [CANTO[0], CANTO[1], W, H], "alfa_max_pecas": int(alfa[CANTO[1]:, CANTO[0]:].max())},
    "luminancia_media_base": round(lum_base, 1),
    "luminancia_media_final": round(float(np.asarray(final.convert("L")).mean()), 1),
    "tratamento": {"clahe": CLIP, "gama": GAMA, "ganho": GANHO, "saturacao": SAT, "contraste": 1.05, "vinheta": 0.35,
                   "distrito_opacidade": OPA, "contorno_px": LW_CONT, "rochas_sem_contorno_abaixo_de_px2": MIN_ROCHA},
    "jpg_1280_bytes": os.path.getsize(J), "jpg_1280_qualidade": q,
    "pedidos_de_rede": 0,
}
json.dump(pontos, open(os.path.join(PREVIA, "A-pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(pontos, ensure_ascii=False, indent=1))
