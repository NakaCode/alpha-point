"""A miniatura A do vídeo 7 (rio-columbia): "$37.6M A YEAR" (pauta §8, miniatura 1; a aprovada pelo Lucas em 09/11/2026).

    python -X utf8 -B roteiros/rio-columbia/miniatura/base-A.py          (da raiz do canal; sem rede)
    MINI_K9=0 python -X utf8 -B roteiros/rio-columbia/miniatura/base-A.py   (sem a linha "Starting value, indexed to inflation")

A IDEIA. O relevo da Colúmbia Britânica ao Oregon, com a fronteira; a parte canadense da bacia em --destaque; o Arrow Lakes Reservoir
com o anel, desenhado vazio (só o contorno, tracejado); uma linha --agua fina com halo descendo o rio do Arrow (a barragem Keenleyside)
até Portland; uma seta curva branca do número ao anel. O texto, no estilo do herói da A2 do Big Sur: "$37.6M" em --destaque e "A YEAR"
em --tinta; logo abaixo, pequena, a linha do K9 ("Starting value, indexed to inflation"; a Sala, 17/11/2026), que MINI_K9=0 tira.

DE ONDE VEM CADA COISA (nada desenhado à mão nem por IA; este script não tem código de rede):
- a base: out/rio-columbia/_media/base/bluemarble-bacia-relevo.png (NASA Blue Marble com relevo sombreado e batimetria, pelo WMS da
  GIBS, EPSG:3857; domínio público). O sha256 confere com o .png.json; a janela é a janela_3857 dele;
- a parte canadense da bacia: _media/geo/bacia-columbia-canada.json (USGS WBD ∩ o lado canadense; domínio público);
- a fronteira: _media/geo/fronteira-canada-eua.json (Census Cartographic Boundary 2025; domínio público), o paralelo 49 em terra;
- o rio: _media/geo/rio-columbia.json (OSM, ODbL), cortado do ponto mais perto da Keenleyside (barragem-keenleyside.json, OSM) ao
  ponto mais perto de Portland (portland-or.json, Natural Earth); o lago: _media/geo/lago-arrow.json (OSM, ODbL). O crédito do OSM
  vai na descrição do vídeo (openstreetmap.org/copyright), como a Sala decidiu (17/11/2026);
- as letras: marca/fontes/ (Barlow Condensed 800 e Inter, SIL OFL); as cores: marca/tokens.css.

Grava: roteiros/rio-columbia/miniatura/miniatura-A-2560.jpg, miniatura-A-1280.jpg e A-pontos.json; em out/rio-columbia/_tmp/miniatura/:
A-previa-1280.png, A-previa-320.png, A-previa-168.png e A-ver.png (a 1280 reduzida, a 320, a 168 real e ×4, sobre o #0f0f0f do feed).
"""
import hashlib, json, math, os, sys
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter, ImageFont

Image.MAX_IMAGE_PIXELS = None
RAIZ = os.getcwd()
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"
PROJ = os.path.join(RAIZ, "out", "rio-columbia")
SAIDA = os.path.join(RAIZ, "roteiros", "rio-columbia", "miniatura")
PREVIA = os.path.join(PROJ, "_tmp", "miniatura")
GEO = os.path.join(PROJ, "_media", "geo")
FONTES = os.path.join(RAIZ, "marca", "fontes")
BASE = os.path.join(PROJ, "_media", "base", "bluemarble-bacia-relevo.png")
os.makedirs(PREVIA, exist_ok=True)

W, H = 2560, 1440
SS = 2
K = 2
R_TERRA = 6378137.0


def env(nome, padrao):
    return float(os.environ.get(nome, padrao))


TINTA = np.array((244, 241, 234), float)       # --tinta        #F4F1EA
DEST = np.array((245, 165, 36), float)         # --destaque     #F5A524
T = tuple(TINTA.astype(int))
D = tuple(DEST.astype(int))
AGUA = (175, 216, 246)                         # --agua         #AFD8F6
AGUA_LUZ = (234, 245, 253)                     # --agua-luz     #EAF5FD
TE = (20, 24, 31)                              # --tinta-escura #14181F
ESCURO = (4, 8, 16)


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


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


# 0 · a base, conferida pelo sha256 do .json
meta = json.load(open(BASE + ".json", encoding="utf-8"))
SHA_BASE = sha256(BASE)
if SHA_BASE != meta["imagem"]["sha256"]:
    sys.exit("a base não confere com o sha256 do .png.json: parei")
JAN = meta["janela_3857"]
crua = cv2.cvtColor(cv2.imread(BASE, cv2.IMREAD_COLOR), cv2.COLOR_BGR2RGB)
TH, TW = crua.shape[:2]
assert (TW, TH) == (meta["imagem"]["largura"], meta["imagem"]["altura"])
MPX = (JAN[2] - JAN[0]) / TW
MPY = (JAN[3] - JAN[1]) / TH

# 1 · o quadro: lon da borda esquerda, lat da borda de baixo e a largura em graus; 16:9 em Mercator
LON_E, LAT_S, LARG_G = env("MINI_LON_E", -132.3), env("MINI_LAT_S", 44.5), env("MINI_LARG_G", 23.2)
FX0, FY0 = merc(LON_E, LAT_S)
FW = math.radians(LARG_G) * R_TERRA
FH = FW * H / W
FX1, FY1 = FX0 + FW, FY0 + FH
MP = FW / W                                    # metros Mercator por px do palco
if not (JAN[0] <= FX0 and FX1 <= JAN[2] and JAN[1] <= FY0 and FY1 <= JAN[3]):
    sys.exit("o quadro sai da base: parei")


def palco_m(x, y, s=1):
    return ((x - FX0) / MP * s, (FY1 - y) / MP * s)


def palco(lon, lat, s=1):
    return palco_m(*merc(lon, lat), s)


# o recorte da base: uma remap exata do palco para a base (as duas em Mercator; só escala e translação)
bx0, by0 = (FX0 - JAN[0]) / MPX, (JAN[3] - FY1) / MPY
esc = MP / MPX
cx0, cy0 = int(bx0) - 4, int(by0) - 4                    # um recorte com folga, desfocado antes de reduzir (antisserrilhado)
cx1, cy1 = int(bx0 + W * esc) + 6, int(by0 + H * esc) + 6
pedaco = cv2.GaussianBlur(crua[cy0:cy1, cx0:cx1].astype(np.float32), (0, 0), max(0.01, 0.42 * esc))
M = np.float32([[esc, 0, bx0 - cx0], [0, esc, by0 - cy0]])
img0 = cv2.warpAffine(pedaco, M, (W, H), flags=cv2.WARP_INVERSE_MAP | cv2.INTER_LINEAR)


def ler(nome):
    return json.load(open(os.path.join(GEO, nome), encoding="utf-8"))


def poligonos(fc):
    out = []
    for f in fc["features"]:
        g = f["geometry"]
        if g["type"] == "MultiPolygon":
            out += g["coordinates"]
        elif g["type"] == "Polygon":
            out.append(g["coordinates"])
    return out


def mascara(polis):
    im = Image.new("L", (W * SS, H * SS), 0)
    d = ImageDraw.Draw(im)
    for poli in polis:
        ext, *buracos = poli
        d.polygon([palco(*p, SS) for p in ext], fill=255)
        for b in buracos:
            d.polygon([palco(*p, SS) for p in b], fill=0)
    return np.asarray(im.resize((W, H), Image.LANCZOS)).astype(float) / 255.0


def contorno(polis, lw):
    im = Image.new("L", (W * SS, H * SS), 0)
    d = ImageDraw.Draw(im)
    for poli in polis:
        pts = [palco(*p, SS) for p in poli[0]]
        d.line(pts + [pts[0]], fill=255, width=int(lw * SS), joint="curve")
    return np.asarray(im.resize((W, H), Image.LANCZOS)).astype(float) / 255.0


# 2 · o tratamento: mais relevo (CLAHE na luminância da terra), mais luz; a saturação fica a do real
mar = ((img0[..., 2] > img0[..., 0] + 25) & (img0[..., 2] > img0[..., 1])).astype(np.float32)
MAR = borrar(mar, 2.0)
lab = cv2.cvtColor(np.clip(img0, 0, 255).astype(np.uint8), cv2.COLOR_RGB2LAB)
L = lab[..., 0].astype(np.float32)
CLIP = env("MINI_CLAHE", 2.2)
L2 = cv2.createCLAHE(clipLimit=CLIP, tileGridSize=(12, 7)).apply(lab[..., 0]).astype(np.float32)
lab[..., 0] = np.clip(L * MAR + L2 * (1 - MAR), 0, 255).astype(np.uint8)
img = cv2.cvtColor(lab, cv2.COLOR_LAB2RGB).astype(np.float32)
GAMA, GANHO, CONTR = env("MINI_GAMA", 0.86), env("MINI_GANHO", 1.12), env("MINI_CONTR", 1.08)
img = 255.0 * np.clip(img / 255.0, 0, 1) ** GAMA * GANHO
img = np.clip((img / 255.0 - 0.5) * CONTR + 0.5, 0, 1) * 255.0
bl = cv2.GaussianBlur(img, (0, 0), 1.6)
img = np.clip(img + env("MINI_NITIDEZ", 0.35) * (img - bl), 0, 255)
lum_antes_vinheta = float(luma(img).mean())
yy, xx = np.mgrid[0:H, 0:W]
dn = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / math.sqrt(2)
VIN = env("MINI_VINHETA", 0.45)
img = img * (1 - VIN * np.clip((dn - 0.40) / 0.60, 0, 1) ** 1.5)[..., None]
lum_base = float(luma(img).mean())

# 3 · a parte canadense da bacia: --destaque com o relevo por baixo, contorno --tinta, sombra escura por fora
bacia_polis = poligonos(ler("bacia-columbia-canada.json"))
bacia = mascara(bacia_polis)
lum = luma(img)
lm = float(lum[bacia > 0.5].mean())
mod = np.clip(0.70 + 0.36 * (lum / lm), 0.60, 1.15)
OPA = env("MINI_OPA", 0.66)
img = img * (1 - OPA * bacia[..., None]) + (DEST[None, None, :] * mod[..., None]) * (OPA * bacia[..., None])
LW_CONT = env("MINI_LW", 9)
borda = contorno(bacia_polis, LW_CONT)
somb_b = np.roll(np.roll(borrar(borda, 9), 6, axis=0), 4, axis=1)
img = compor(img, ESCURO, 0.70 * np.clip(somb_b * 2.2, 0, 1) * (1 - borda) * (1 - bacia))
img = compor(img, TINTA, borda)

# 4 · as camadas das peças (supersample 2×)
cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
somb_l = Image.new("L", (W * K, H * K), 0)
dc, ds = ImageDraw.Draw(cam), ImageDraw.Draw(somb_l)
halo_l = Image.new("L", (W * K, H * K), 0)
dhalo = ImageDraw.Draw(halo_l)


def kk(p):
    return (p[0] * K, p[1] * K)


# 4a · a fronteira: o paralelo 49 em terra, --tinta, 7 px, tracejado longo (a convenção de fronteira do canal nos mapas)
fr = ler("fronteira-canada-eua.json")["features"][0]["geometry"]["coordinates"]
fr_pal = [palco(*p) for p in fr]


def tracejar(dr, pts, cor, larg, cheio, vazio, halo_dr=None, halo_larg=0):
    acum = 0.0
    desenhando = True
    resto = cheio
    for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
        L_ = math.hypot(x1 - x0, y1 - y0)
        s = 0.0
        while s < L_:
            passo = min(resto, L_ - s)
            if desenhando:
                a = (x0 + (x1 - x0) * s / L_, y0 + (y1 - y0) * s / L_)
                b = (x0 + (x1 - x0) * (s + passo) / L_, y0 + (y1 - y0) * (s + passo) / L_)
                if halo_dr is not None:
                    halo_dr.line([kk(a), kk(b)], fill=255, width=int(halo_larg * K))
                dr.line([kk(a), kk(b)], fill=cor, width=int(larg * K))
            s += passo
            resto -= passo
            if resto <= 1e-6:
                desenhando = not desenhando
                resto = cheio if desenhando else vazio


fr_vis = [p for p in fr_pal if -50 <= p[0] <= W + 50]
dhalo.line([kk(p) for p in fr_vis], fill=150, width=int(17 * K))
tracejar(dc, fr_vis, T + (235,), env("MINI_FR_LW", 7), 34, 18)

# 4b · o rio: do ponto mais perto da Keenleyside ao ponto mais perto de Portland, --agua 9 px com halo escuro
rio = ler("rio-columbia.json")["features"][0]["geometry"]["coordinates"]
kee = ler("barragem-keenleyside.json")["features"][0]["geometry"]["coordinates"]
pdx = ler("portland-or.json")["features"][0]["geometry"]["coordinates"]


def mais_perto(pt):
    x, y = merc(*pt)
    return int(np.argmin([(merc(*p)[0] - x) ** 2 + (merc(*p)[1] - y) ** 2 for p in rio]))


i_kee, i_pdx = mais_perto(kee), mais_perto(pdx)
assert i_kee < i_pdx, "o rio não corre da Keenleyside a Portland na ordem do arquivo"
trecho = rio[i_kee:i_pdx + 1]
d_kee = math.dist(merc(*rio[i_kee]), merc(*kee)) * math.cos(math.radians(kee[1]))
d_pdx = math.dist(merc(*rio[i_pdx]), merc(*pdx)) * math.cos(math.radians(pdx[1]))
rio_pal = [palco(*p) for p in trecho]
comp_rio_px = sum(math.dist(a, b) for a, b in zip(rio_pal, rio_pal[1:]))
RIO_LW, RIO_HALO = env("MINI_RIO_LW", 10), env("MINI_RIO_HALO", 30)
dhalo.line([kk(p) for p in rio_pal], fill=235, width=int(RIO_HALO * K), joint="curve")
dc.line([kk(p) for p in rio_pal], fill=AGUA + (255,), width=int(RIO_LW * K), joint="curve")

# 4c · o Arrow, vazio: só o contorno do lago (as duas partes), tracejado em --agua-luz, com halo escuro
arrow_polis = poligonos(ler("lago-arrow.json"))
for poli in arrow_polis:
    pts = [palco(*p) for p in poli[0]]
    pts = pts + [pts[0]]
    tracejar(dc, pts, AGUA_LUZ + (255,), env("MINI_LAGO_LW", 7), 15, 9, dhalo, env("MINI_LAGO_HALO", 18))

# 4d · o anel: --destaque, traço de 38 px, contorno escuro de 5 px. O centro anda pelo eixo do Arrow (o meio do lago em cada
#     latitude) e fica onde o anel mais se afasta da borda da bacia (que inclui a fronteira): na 1ª passada, no centro da caixa do
#     lago, o anel engolia o recorte da bacia do Fraser a oeste do Upper Arrow, e parecia marcar a borda. A borda fica a menos de
#     136 px (o raio por fora) do lago em toda latitude; no melhor ponto (o Lower Arrow), ela não entra no miolo do anel
R_ANEL, W_ANEL = 112.0, 38.0
R_FORA = R_ANEL + W_ANEL / 2 + 5
lago_pts = [p for poli in arrow_polis for p in poli[0]]
borda_pts = np.array([palco(*p) for poli in bacia_polis for p in poli[0]])
SEG_A, SEG_D = borda_pts[:-1], borda_pts[1:] - borda_pts[:-1]


def dist_borda(c):                                      # a distância até a borda, por segmento (a fronteira tem poucos vértices)
    c = np.asarray(c, float)
    t = np.clip(((c - SEG_A) * SEG_D).sum(1) / np.maximum((SEG_D * SEG_D).sum(1), 1e-9), 0, 1)
    return float(np.sqrt(((SEG_A + SEG_D * t[:, None] - c) ** 2).sum(1)).min())


candidatos = []
for lat_c in np.linspace(49.35, 50.95, 65):
    perto = [p[0] for p in lago_pts if abs(p[1] - lat_c) < 0.03]
    if not perto:
        continue
    cx_, cy_ = palco((min(perto) + max(perto)) / 2, lat_c)
    folga = dist_borda((cx_, cy_))
    candidatos.append((folga, cx_, cy_, float(lat_c)))
FOLGA, RX, RY, LAT_ANEL = max(candidatos)
if "MINI_ANEL_LAT" in os.environ:                       # para fixar à mão, se preciso
    LAT_ANEL = env("MINI_ANEL_LAT", 50.0)
    FOLGA, RX, RY, _ = min(candidatos, key=lambda c: abs(c[3] - LAT_ANEL))
anel_l = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
da = ImageDraw.Draw(anel_l)


def circulo(dr, cx, cy, r, cor, larg):
    dr.ellipse([(cx - r) * K, (cy - r) * K, (cx + r) * K, (cy + r) * K], outline=cor, width=int(larg * K))


circulo(da, RX, RY, R_ANEL + W_ANEL / 2 + 5, ESCURO + (235,), W_ANEL + 10)
circulo(da, RX, RY, R_ANEL + W_ANEL / 2, D + (255,), W_ANEL)
circulo(ds, RX, RY, R_ANEL + W_ANEL / 2 + 5, 230, W_ANEL + 10)

# 4e · Portland: o ponto branco de 34 px e a pílula --tinta com letra --tinta-escura (as cidades da A2)
barlow_p = os.path.join(FONTES, "barlowcondensed", "BarlowCondensed-ExtraBold.ttf")
inter_p = os.path.join(FONTES, "inter", "Inter-VF.ttf")
PX, PY = palco(*pdx)
dc.ellipse([(PX - 17) * K, (PY - 17) * K, (PX + 17) * K, (PY + 17) * K], fill=T + (255,), outline=ESCURO + (255,), width=5 * K)
ds.ellipse([(PX - 20) * K, (PY - 20) * K, (PX + 20) * K, (PY + 20) * K], fill=220)
FC = int(env("MINI_FC", 100))
cid = ImageFont.truetype(barlow_p, FC * K)
capc = cid.getbbox("PORTLAND")
pw = cid.getlength("PORTLAND") / K + 2 * 30
ph = (capc[3] - capc[1]) / K + 2 * 20
pil_x1 = PX - env("MINI_PDX_GAP", 40)
pil = (pil_x1 - pw, PY - ph / 2, pil_x1, PY + ph / 2)
dc.rounded_rectangle([v * K for v in pil], radius=12 * K, fill=T + (255,))
ds.rounded_rectangle([v * K for v in pil], radius=12 * K, fill=210)
dc.text(((pil[0] + 30) * K, (pil[1] + 20) * K - capc[1]), "PORTLAND", font=cid, fill=TE + (255,))

# 4f · os países: só o nome, --tinta, a leste da bacia, dos dois lados da fronteira
FP = int(env("MINI_FP", 96))
paisf = ImageFont.truetype(barlow_p, FP * K)
capp = paisf.getbbox("CANADA")
_, YF = palco(-110, 49.0)
XPA = env("MINI_PAIS_X", 2110)
nomes_pais = {}
for nome, y_ in (("CANADA", YF - 26 - (capp[3] - capp[1]) / K), ("U.S.", YF + 26)):
    dc.text((XPA * K, y_ * K - capp[1]), nome, font=paisf, fill=T + (255,))
    nomes_pais[nome] = (XPA, y_, XPA + paisf.getlength(nome) / K, y_ + (capp[3] - capp[1]) / K)

# 5 · o texto: "$37.6M" em --destaque e "A YEAR" em --tinta, no alto à esquerda; a linha do K9 logo abaixo
FS = int(env("MINI_FS", 330))
heroi = ImageFont.truetype(barlow_p, FS * K)
cap = heroi.getbbox("A YEAR")
alt_cap = (cap[3] - cap[1]) / K
ENTRE = env("MINI_ENTRE", 0.22) * FS
HX0, HY0 = env("MINI_HX0", 84), env("MINI_HY0", 84)
txt = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
dt = ImageDraw.Draw(txt)
caixas = {}
for i, (palavra, cor) in enumerate((("$37.6M", D), ("A YEAR", T))):
    y0 = HY0 + i * (alt_cap + ENTRE)
    bb = heroi.getbbox(palavra)
    dt.text((HX0 * K - bb[0], y0 * K - cap[1]), palavra, font=heroi, fill=cor + (255,))
    caixas["heroi-" + palavra] = (HX0, y0 + (bb[1] - cap[1]) / K, HX0 + (bb[2] - bb[0]) / K, y0 + (bb[3] - cap[1]) / K)
K9 = int(env("MINI_K9", 1))
K9_TXT = "Starting value, indexed to inflation"
FK = int(env("MINI_FK", 58))
if K9:
    k9f = ImageFont.truetype(inter_p, FK * K)
    k9f.set_variation_by_axes([14, 600])
    yk = caixas["heroi-A YEAR"][3] + env("MINI_K9_GAP", 34)
    bbk = k9f.getbbox(K9_TXT)
    dt.text((HX0 * K + 4 * K - bbk[0], yk * K - bbk[1]), K9_TXT, font=k9f, fill=T + (255,))
    caixas["k9"] = (HX0 + 4, yk, HX0 + 4 + (bbk[2] - bbk[0]) / K, yk + (bbk[3] - bbk[1]) / K)
txt_r = txt.resize((W, H), Image.LANCZOS)
a_txt = np.asarray(txt_r.split()[3]).astype(np.float32) / 255
brilho = cv2.dilate(a_txt, np.ones((25, 25), np.uint8))
brilho = cv2.GaussianBlur(brilho, (0, 0), 46)
brilho = np.clip(brilho * 1.6, 0, 1) * env("MINI_BRILHO", 0.82)
sombra_txt = np.roll(np.roll(cv2.GaussianBlur(a_txt, (0, 0), 6), 10, 0), 8, 1) * 0.65


# 6 · a seta curva branca: do número ao anel (corpo que engrossa e cabeça cheia, --tinta, com sombra)
def bezier(p0, p1, p2, p3, n=240):
    return [tuple((1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * e
                  for a, b, c, e in zip(p0, p1, p2, p3)) for t in (i / n for i in range(n + 1))]


def seta_grossa(curva, w0, w1, cab_l, cab_w):
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
    for dr, cor in ((dc, T + (255,)), (ds, 225)):
        dr.polygon([(x * K, y * K) for x, y in esq + dirr[::-1]], fill=cor)
        dr.polygon([(x * K, y * K) for x, y in cabeca], fill=cor)
        x0_, y0_ = corpo[0][0]
        dr.ellipse([(x0_ - w0 / 2) * K, (y0_ - w0 / 2) * K, (x0_ + w0 / 2) * K, (y0_ + w0 / 2) * K], fill=cor)
    return Lc


c_num = caixas["heroi-$37.6M"]
p0 = np.array((c_num[2] + env("MINI_SETA_X0", 40), (c_num[1] + c_num[3]) / 2 - env("MINI_SETA_Y0", 30)))
CHEG = math.radians(env("MINI_SETA_CHEG", 20))          # o rumo em que a seta chega ao anel (graus, 0 = para a direita)
dch = np.array((math.cos(CHEG), math.sin(CHEG)))
p3 = np.array((RX, RY)) - dch * (R_ANEL + W_ANEL / 2 + 5 + env("MINI_SETA_FOLGA", 22))
p1 = p0 + np.array((env("MINI_SETA_L1", 260), env("MINI_SETA_L1Y", -40)))
p2 = p3 - dch * env("MINI_SETA_L2", 260)
comp_seta = seta_grossa(bezier(tuple(p0), tuple(p1), tuple(p2), tuple(p3)), env("MINI_W0", 30), env("MINI_W1", 50),
                        env("MINI_CAB_L", 110), env("MINI_CAB_W", 150))

# 7 · a composição
halo = np.asarray(halo_l.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(3))).astype(np.float32) / 255
final = compor(img, ESCURO, halo * env("MINI_HALO_A", 0.62))
final = compor(final, ESCURO, brilho)
sombra = np.asarray(somb_l.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(14))).astype(np.float32) / 255
sombra = np.roll(np.roll(sombra, 10, 0), 6, 1) * 0.70
final = compor(final, ESCURO, np.maximum(sombra, sombra_txt))
final = Image.fromarray(np.clip(final, 0, 255).astype(np.uint8)).convert("RGBA")
cam_r = cam.resize((W, H), Image.LANCZOS)
anel_r = anel_l.resize((W, H), Image.LANCZOS)
final = Image.alpha_composite(final, cam_r)
final = Image.alpha_composite(final, anel_r)
final = Image.alpha_composite(final, txt_r).convert("RGB")

# 8 · as saídas
final.save(os.path.join(SAIDA, "miniatura-A-2560.jpg"), quality=92, subsampling=0, optimize=True)
m1280 = final.resize((1280, 720), Image.LANCZOS)
qj = 95
J = os.path.join(SAIDA, "miniatura-A-1280.jpg")
while True:
    m1280.save(J, quality=qj, subsampling=0, optimize=True)
    if os.path.getsize(J) <= 2 * 1024 * 1024 or qj <= 70:
        break
    qj -= 5
m1280.save(os.path.join(PREVIA, "A-previa-1280.png"))
p320 = final.resize((320, 180), Image.LANCZOS)
p320.save(os.path.join(PREVIA, "A-previa-320.png"))
p168 = final.resize((168, 94), Image.LANCZOS)
p168.save(os.path.join(PREVIA, "A-previa-168.png"))
quadro = Image.new("RGB", (40 + 960 + 40 + 672 + 40, 40 + 540 + 40 + 376 + 40), (15, 15, 15))
quadro.paste(m1280.resize((960, 540), Image.LANCZOS), (40, 40))
quadro.paste(p168.resize((672, 376), Image.NEAREST), (40 + 960 + 40, 40))
quadro.paste(p320, (40, 40 + 540 + 40))
quadro.paste(p168, (40 + 320 + 40, 40 + 540 + 40))
quadro.save(os.path.join(PREVIA, "A-ver.png"))

# 9 · as conferências
alfa_pecas = np.maximum(np.asarray(cam_r.split()[3]).astype(int), np.asarray(anel_r.split()[3]).astype(int))
alfa = np.maximum(alfa_pecas, np.asarray(txt_r.split()[3]).astype(int))
CANTO = (W - 320, H - 320)
txt_box = np.zeros((H, W), bool)
for k_, c_ in caixas.items():
    x0, y0, x1, y1 = [int(v) for v in c_]
    txt_box[y0:y1, x0:x1] = True
lum_txt = {}
for nome in caixas:
    x0, y0, x1, y1 = [int(v) for v in caixas[nome]]
    fundo = np.asarray(final.convert("L"))[y0:y1, x0:x1].astype(float)
    letras = np.asarray(txt_r.split()[3])[y0:y1, x0:x1] > 200
    perto = cv2.dilate(letras.astype(np.uint8), np.ones((15, 15), np.uint8)).astype(bool) & ~cv2.dilate(letras.astype(np.uint8), np.ones((5, 5), np.uint8)).astype(bool)
    lum_txt[nome] = round(float(fundo[perto].mean()), 1)
bpx = np.nonzero(bacia > 0.5)
pontos = {
    "quadro": {"base": os.path.relpath(BASE, RAIZ).replace("\\", "/"), "sha256_base": SHA_BASE, "janela_3857_base": JAN,
               "quadro_lonlat": {"lon_esquerda": LON_E, "lat_baixo": LAT_S, "largura_graus": LARG_G},
               "quadro_3857": [round(FX0, 1), round(FY0, 1), round(FX1, 1), round(FY1, 1)],
               "metros_mercator_por_px_palco": round(MP, 2), "palco_por_px_base": round(1 / esc, 4)},
    "bacia_canadense": {"caixa_palco": [int(bpx[1].min()), int(bpx[0].min()), int(bpx[1].max()), int(bpx[0].max())],
                        "fracao_da_imagem": round(float((bacia > 0.5).mean()), 4), "opacidade": OPA,
                        "fracao_coberta_por_pecas_e_texto": round(float(((alfa > 40) & (bacia > 0.5)).sum() / max(1, (bacia > 0.5).sum())), 4)},
    "anel": {"lugar": "Arrow Lakes Reservoir (no eixo do lago, onde o anel mais se afasta da borda da bacia)", "palco": [round(RX, 1), round(RY, 1)],
             "lat_no_eixo": round(LAT_ANEL, 3), "folga_ate_a_borda_da_bacia_px": round(FOLGA, 1), "raio_por_fora_px": R_FORA,
             "diametro_px": 2 * R_ANEL, "traco_px": W_ANEL, "no_168_px": round(2 * (R_ANEL + W_ANEL / 2) * 168 / W, 1)},
    "rio": {"de": "o vértice mais perto da Keenleyside (%d m)" % round(d_kee), "ate": "o vértice mais perto de Portland (%d m)" % round(d_pdx),
            "vertices": len(trecho), "comprimento_palco_px": round(comp_rio_px), "traco_px": RIO_LW, "halo_px": RIO_HALO},
    "portland": {"ponto_palco": [round(PX), round(PY)], "pilula": [round(v) for v in pil]},
    "paises": {k_: [round(v) for v in c_] for k_, c_ in nomes_pais.items()},
    "heroi": {"fonte_px": FS, "altura_maiuscula_px": round(alt_cap), "no_168_px": round(alt_cap * 168 / W, 1),
              "caixas": {k_: [round(v) for v in c_] for k_, c_ in caixas.items()}, "luma_em_volta_das_letras": lum_txt,
              "k9": {"ligada": bool(K9), "texto": K9_TXT if K9 else None, "fonte_px": FK if K9 else None,
                     "altura_no_1280_px": round((caixas["k9"][3] - caixas["k9"][1]) / 2, 1) if K9 else None}},
    "seta": {"de": [round(v) for v in p0], "ponta": [round(v) for v in p3], "comprimento_px": round(comp_seta)},
    "canto_duracao_320": {"caixa": [CANTO[0], CANTO[1], W, H], "alfa_max_pecas": int(alfa[CANTO[1]:, CANTO[0]:].max())},
    "luminancia_media_base_antes_da_vinheta": round(lum_antes_vinheta, 1),
    "luminancia_media_base": round(lum_base, 1),
    "luminancia_media_final": round(float(np.asarray(final.convert("L")).mean()), 1),
    "tratamento": {"clahe": CLIP, "gama": GAMA, "ganho": GANHO, "contraste": CONTR, "saturacao": 1.0, "vinheta": VIN},
    "jpg_1280_bytes": os.path.getsize(J), "jpg_1280_qualidade": qj,
    "pedidos_de_rede": 0,
}
json.dump(pontos, open(os.path.join(SAIDA, "A-pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(pontos, ensure_ascii=False))
