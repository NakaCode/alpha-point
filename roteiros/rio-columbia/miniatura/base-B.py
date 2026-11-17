"""A miniatura B do vídeo 7 (rio-columbia): "EMPTY ON PURPOSE" (pauta §8, miniatura 2; a receita com lupa, embalagem §3.1).

    python -X utf8 -B roteiros/rio-columbia/miniatura/base-B.py          (da raiz do canal; sem rede)

A IDEIA. O Landsat de 14/04/2024 do Arrow Lakes Reservoir no fundo do inverno (o Upper Arrow estreito entre as Monashee e as Selkirk
nevadas), o anel da marca sobre o lago, e o cone até uma lupa com o corte do lago no traço de engenheiro: a linha d'água baixa e,
acima dela, a faixa de cima vazia, tracejada. Sem número. O texto, no estilo do herói da A2 do Big Sur (Barlow Condensed 800, sem
pílula, com brilho escuro atrás): "EMPTY" em --tinta e "ON PURPOSE" em --destaque.

DE ONDE VEM CADA COISA (nada desenhado à mão nem por IA; este script não tem código de rede):
- a base: out/rio-columbia/_media/base/arrow-largo/landsat-arrow-fundo-2024-04-14.png (Landsat 8 OLI, USGS, Collection 2 Level-2,
  domínio público). O sha256 confere com o .png.json; a janela é a do campo "recorte" (Web Mercator, norte para cima);
- o ponto do anel: o lugar do lago mais longe da margem, lido na própria base (a água do Landsat, conectada a uma semente no Upper
  Arrow), numa faixa de linhas escolhida para a composição. O polígono do OSM (lago-arrow.json) NÃO é desenhado: só confere que o
  ponto cai dentro do Arrow (por isso não há crédito do OSM na imagem);
- o corte do lago: a geometria do bloco "PEÇA 1 · O CORTE DO LAGO" de out/rio-columbia/graphics/s03.html (o desenho do canal, a
  partir do diagrama do espaço reservado, L4), com os mesmos números (G, NIVEL), só escalado e recortado pela lupa, com o traço
  engrossado para o tamanho da miniatura. A água fica no nível RESERVADO, como na pose canônica da s03;
- as letras: marca/fontes/ (Barlow Condensed 800 e Inter, SIL OFL); as cores: marca/tokens.css.

Grava: roteiros/rio-columbia/miniatura/miniatura-B-2560.jpg, miniatura-B-1280.jpg e B-pontos.json; em out/rio-columbia/_tmp/miniatura/:
B-previa-1280.png, B-previa-320.png, B-previa-168.png e B-ver.png (a 1280 reduzida, a 320, a 168 real e ×4, sobre o #0f0f0f do feed).
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
BASE = os.path.join(PROJ, "_media", "base", "arrow-largo", "landsat-arrow-fundo-2024-04-14.png")
S03 = os.path.join(PROJ, "graphics", "s03.html")
os.makedirs(PREVIA, exist_ok=True)

W, H = 2560, 1440
K = 2                      # supersample das peças
R_TERRA = 6378137.0


def env(nome, padrao):
    return float(os.environ.get(nome, padrao))


# a marca (marca/tokens.css)
TINTA = (244, 241, 234)        # --tinta        #F4F1EA
DEST = (245, 165, 36)          # --destaque     #F5A524
AGUA = (175, 216, 246)         # --agua         #AFD8F6
FUNDO = (14, 23, 38)           # --fundo        #0E1726
TE = (20, 24, 31)              # --tinta-escura #14181F
ESCURO = (4, 8, 16)


def sha256(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for bloco in iter(lambda: f.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()


def merc(lon, lat):
    return (math.radians(lon) * R_TERRA, R_TERRA * math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))


def lonlat(x, y):
    return (math.degrees(x / R_TERRA), math.degrees(2 * math.atan(math.exp(y / R_TERRA)) - math.pi / 2))


def luma(a):
    return a[..., :3] @ np.array([0.2126, 0.7152, 0.0722])


def compor(img, cor, a):
    return img * (1 - a[..., None]) + np.asarray(cor, float)[None, None, :3] * a[..., None]


# 0 · a base, conferida pelo sha256 da procedência
meta = json.load(open(BASE + ".json", encoding="utf-8"))
SHA_BASE = sha256(BASE)
if SHA_BASE != meta["sha256"]:
    sys.exit("a base não confere com o sha256 do .png.json: parei")
TW, TH = meta["tamanho_px"]
lo0, la0, lo1, la1 = meta["recorte"]["lonlat"]
X0, Y0 = merc(lo0, la0)
X1, Y1 = merc(lo1, la1)
MPX, MPY = (X1 - X0) / TW, (Y1 - Y0) / TH
if abs(MPX - meta["recorte"]["metros_mercator_por_px"]) > 0.05:
    sys.exit("a janela não bate com os metros por px declarados: parei")
crua = cv2.cvtColor(cv2.imread(BASE, cv2.IMREAD_COLOR), cv2.COLOR_BGR2RGB)
assert crua.shape[1] == TW and crua.shape[0] == TH


def base_px(lon, lat):
    x, y = merc(lon, lat)
    return ((x - X0) / MPX, (Y1 - y) / MPY)


def base_ll(bx, by):
    return lonlat(X0 + bx * MPX, Y1 - by * MPY)


# 1 · o ponto do anel, lido na base: a água do Landsat conectada à semente no Upper Arrow; na faixa de linhas pedida, o pixel de
#     água mais longe da margem
cf = crua.astype(np.float32)
agua_b = ((cf[..., 2] - cf[..., 0] > 6) & (luma(cf) < 80)).astype(np.uint8)
SEM_LON, SEM_LAT = env("MINI_SEM_LON", -117.919), env("MINI_SEM_LAT", 50.375)
sx, sy = [int(round(v)) for v in base_px(SEM_LON, SEM_LAT)]
n_cc, rot = cv2.connectedComponents(agua_b, connectivity=8)
ys_w, xs_w = np.nonzero(agua_b)
k_sem = int(np.argmin((xs_w - sx) ** 2 + (ys_w - sy) ** 2))
lago = (rot == rot[ys_w[k_sem], xs_w[k_sem]]).astype(np.uint8)
dist = cv2.distanceTransform(lago, cv2.DIST_L2, 5)
FAIXA_LIN = int(env("MINI_FAIXA_LIN", 160))
banda = np.zeros_like(dist)
banda[max(0, sy - FAIXA_LIN):sy + FAIXA_LIN] = dist[max(0, sy - FAIXA_LIN):sy + FAIXA_LIN]
ry_b, rx_b = np.unravel_index(int(np.argmax(banda)), banda.shape)
ANEL_LON, ANEL_LAT = base_ll(rx_b + 0.5, ry_b + 0.5)
anel_dist_m = float(dist[ry_b, rx_b]) * MPX * math.cos(math.radians(ANEL_LAT))


# a conferência com o OSM (só confere; nada do OSM é desenhado)
def dentro(lon, lat, anel):
    c = False
    for (x0, y0), (x1, y1) in zip(anel, anel[1:] + anel[:1]):
        if (y0 > lat) != (y1 > lat) and lon < x0 + (lat - y0) * (x1 - x0) / (y1 - y0):
            c = not c
    return c


osm = json.load(open(os.path.join(GEO, "lago-arrow.json"), encoding="utf-8"))
no_arrow = False
pts_osm = {}
for f in osm["features"]:
    g = f["geometry"]
    if g["type"] == "MultiPolygon":
        for poli in g["coordinates"]:
            if dentro(ANEL_LON, ANEL_LAT, poli[0]) and not any(dentro(ANEL_LON, ANEL_LAT, b) for b in poli[1:]):
                no_arrow = True
    elif g["type"] == "Point":
        lon_, lat_ = g["coordinates"]
        dx = math.radians(lon_ - ANEL_LON) * math.cos(math.radians(ANEL_LAT)) * R_TERRA
        dy = math.radians(lat_ - ANEL_LAT) * R_TERRA
        pts_osm[f["properties"]["name"]] = round(math.hypot(dx, dy))
if not no_arrow:
    sys.exit("o ponto do anel não cai dentro do Arrow Lakes Reservoir (OSM): parei")

# 2 · o quadro: CW px da base viram os 2560 do palco; o ponto do anel cai em (RX, RY)
CW = int(env("MINI_CW", 3200)) // 16 * 16
CH = CW * 9 // 16
S = W / CW
RX, RY = env("MINI_RX", 1000), env("MINI_RY", 1190)
CX0 = int(round(rx_b + 0.5 - RX / S))
CY0 = int(round(ry_b + 0.5 - RY / S))
if not (0 <= CX0 and CX0 + CW <= TW and 0 <= CY0 and CY0 + CH <= TH):
    sys.exit("o recorte sai da base: %r" % ((CX0, CY0, CW, CH),))
RX, RY = (rx_b + 0.5 - CX0) * S, (ry_b + 0.5 - CY0) * S
recorte = crua[CY0:CY0 + CH, CX0:CX0 + CW]
img = cv2.resize(recorte, (W, H), interpolation=cv2.INTER_AREA if S < 1 else cv2.INTER_CUBIC).astype(np.float32)

# 3 · o tratamento: a neve é clara e o vale, escuro; um pouco menos de luz no alto (gama > 1), contraste leve, nitidez leve
GAMA, GANHO, CONTR = env("MINI_GAMA", 1.10), env("MINI_GANHO", 0.97), env("MINI_CONTR", 1.08)
img = 255.0 * np.clip(img / 255.0, 0, 1) ** GAMA * GANHO
img = np.clip((img / 255.0 - 0.5) * CONTR + 0.5, 0, 1) * 255.0
bl = cv2.GaussianBlur(img, (0, 0), 2.0)
img = np.clip(img + env("MINI_NITIDEZ", 0.45) * (img - bl), 0, 255)
lum_antes_vinheta = float(luma(img).mean())
yy, xx = np.mgrid[0:H, 0:W]
dn = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / math.sqrt(2)
VIN = env("MINI_VINHETA", 0.40)
img = img * (1 - VIN * np.clip((dn - 0.40) / 0.60, 0, 1) ** 1.5)[..., None]
lum_base = float(luma(img).mean())

# 4 · o texto: Barlow Condensed 800, "EMPTY" em --tinta e "ON PURPOSE" em --destaque, no alto à esquerda, com brilho escuro atrás
barlow_p = os.path.join(FONTES, "barlowcondensed", "BarlowCondensed-ExtraBold.ttf")
inter_p = os.path.join(FONTES, "inter", "Inter-VF.ttf")
FS = int(env("MINI_FS", 330))
heroi = ImageFont.truetype(barlow_p, FS * K)
cap = heroi.getbbox("EMPTY")
alt_cap = (cap[3] - cap[1]) / K
ENTRE = env("MINI_ENTRE", 0.20) * FS
HX0, HY0 = env("MINI_HX0", 84), env("MINI_HY0", 70)
txt = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
dt = ImageDraw.Draw(txt)
caixas = {}
for i, (palavra, cor) in enumerate((("EMPTY", TINTA), ("ON PURPOSE", DEST))):
    y0 = HY0 + i * (alt_cap + ENTRE)
    bb = heroi.getbbox(palavra)
    dt.text((HX0 * K - bb[0], y0 * K - cap[1]), palavra, font=heroi, fill=cor + (255,))
    caixas["heroi-" + palavra] = (HX0, y0, HX0 + (bb[2] - bb[0]) / K, y0 + (bb[3] - cap[1]) / K)
txt_r = txt.resize((W, H), Image.LANCZOS)
a_txt = np.asarray(txt_r.split()[3]).astype(np.float32) / 255
brilho = cv2.dilate(a_txt, np.ones((25, 25), np.uint8))
brilho = cv2.GaussianBlur(brilho, (0, 0), 46)
brilho = np.clip(brilho * 1.6, 0, 1) * env("MINI_BRILHO", 0.86)
sombra_txt = np.roll(np.roll(cv2.GaussianBlur(a_txt, (0, 0), 6), 10, 0), 8, 1) * 0.65

# 5 · o anel, a lupa e o cone (as tangentes externas, calculadas)
R_ANEL = 112.0                 # 224 px de diâmetro (na linha do traço)
W_ANEL = 38.0
LX, LY = env("MINI_LX", 2070), env("MINI_LY", 740)
R_LUPA = env("MINI_RL", 400)   # o raio por fora da borda (640 px de diâmetro na receita; aqui 800, para o corte ler no 320)
B_LUPA = 20.0
r1, r2 = R_ANEL + W_ANEL / 2 + 5, R_LUPA + 5
dx_, dy_ = LX - RX, LY - RY
d = math.hypot(dx_, dy_)
th = math.atan2(dy_, dx_)
phi = math.acos((r1 - r2) / d)
tang = []
for sgn in (1, -1):
    a = th + sgn * phi
    tang.append(((RX + r1 * math.cos(a), RY + r1 * math.sin(a)), (LX + r2 * math.cos(a), LY + r2 * math.sin(a))))

cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
somb = Image.new("L", (W * K, H * K), 0)
dc, ds = ImageDraw.Draw(cam), ImageDraw.Draw(somb)


def kk(p):
    return (p[0] * K, p[1] * K)


# 5a · o cone: o preenchimento --tinta a 12 % e os dois traços de 10 px
cone = [tang[0][0], tang[0][1], tang[1][1], tang[1][0]]
cone_l = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
ImageDraw.Draw(cone_l).polygon([kk(p) for p in cone], fill=TINTA + (31,))
for (p, q) in tang:
    ImageDraw.Draw(cone_l).line([kk(p), kk(q)], fill=TINTA + (255,), width=10 * K)
    ds.line([kk(p), kk(q)], fill=200, width=10 * K)


# 5b · o anel: --destaque, traço de 38 px, contorno escuro de 5 px por dentro e por fora
def circulo(dr, cx, cy, r, cor, larg):
    dr.ellipse([(cx - r) * K, (cy - r) * K, (cx + r) * K, (cy + r) * K], outline=cor, width=int(larg * K))


anel_l = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
da = ImageDraw.Draw(anel_l)
circulo(da, RX, RY, R_ANEL + W_ANEL / 2 + 5, ESCURO + (235,), W_ANEL + 10)
circulo(da, RX, RY, R_ANEL + W_ANEL / 2, DEST + (255,), W_ANEL)
circulo(ds, RX, RY, R_ANEL + W_ANEL / 2 + 5, 230, W_ANEL + 10)

# 5c · a lupa: o corte do lago da s03 (a mesma geometria), sobre --fundo, recortado pelo círculo
# a geometria, lida do bloco da s03 (e conferida: se o bloco mudar, o script para)
s03 = open(S03, encoding="utf-8").read()
for trecho in ('caixa: { x0: 520, y0: 560, x1: 3320, y1: 1640 }', 'crista: { x: 520, y: 600 }',
               'chao: { x0: 560, y0: 780, x1: 3000, y1: 1560 }',
               'barragem: { montante: 3000, coroaX1: 3040, jusante: 3160, coroamento: 800, base: 1560 }',
               'conduto: { y1: 1500, y2: 1532 }', 'var NIVEL = { CHEIO: 860, RESERVADO: 1040, BAIXO: 1220 };',
               'return [[G.crista.x, G.crista.y], [610, 596], [p3x - lam, p3y - lam / K], [p3x, p3y]];', 'lam = 110',
               'hachura: { passo: 48, traco: 4 }', 'simbolo: { x: 2880 }'):
    if trecho not in s03:
        sys.exit("o bloco do corte na s03 mudou (%s): parei" % trecho)
CH0 = (560, 780, 3000, 1560)                  # o chão do vale (o talvegue)
KC = (CH0[2] - CH0[0]) / (CH0[3] - CH0[1])
CHEIO, RESERV = 860, 1040
BAR = dict(montante=3000, coroaX1=3040, jusante=3160, coroamento=800, base=1560)
CONDUTO = (1500, 1532)


def xChao(y):
    return CH0[0] + (y - CH0[1]) * KC


def yChao(x):
    return CH0[1] + (x - CH0[0]) / KC


ENC = [(520, 600), (610, 596), (800 - 110, yChao(800) - 110 / KC), (800, yChao(800))]


def bez_enc(s):
    u = 1 - s
    return tuple(u ** 3 * ENC[0][i] + 3 * u * u * s * ENC[1][i] + 3 * u * s * s * ENC[2][i] + s ** 3 * ENC[3][i] for i in (0, 1))


ESC = env("MINI_ESC_CORTE", 0.40)             # px do palco por px do corte
CCX, CCY = env("MINI_CORTE_CX", 2250), env("MINI_CORTE_CY", 1150)   # o ponto do corte no centro da lupa
RI = R_LUPA - B_LUPA                          # o raio de dentro
LW = int(2 * RI + 4)
lupa = Image.new("RGBA", (LW * K, LW * K), FUNDO + (255,))
dl = ImageDraw.Draw(lupa)


def cl(p):                                     # do corte ao px da lupa (supersample)
    return ((LW / 2 + (p[0] - CCX) * ESC) * K, (LW / 2 + (p[1] - CCY) * ESC) * K)


# o chão cortado: abaixo do traço do terreno, --tinta a 9 % sobre o --fundo (só um tom, para o vale ler no 320; nada novo)
chao_pol = [bez_enc(i / 60) for i in range(61)] + [(CH0[2], CH0[3]), (BAR["jusante"], BAR["base"]), (3320, BAR["base"]), (3320, 2600), (300, 2600), (300, 600)]
dl.polygon([cl(p) for p in chao_pol], fill=tuple(int(FUNDO[i] + env("MINI_CHAO", 0.09) * (TINTA[i] - FUNDO[i])) for i in range(3)) + (255,))
# a barragem cheia do mesmo tom (o concreto cortado)
dl.polygon([cl(p) for p in [(BAR["montante"], BAR["base"]), (BAR["montante"], BAR["coroamento"]), (BAR["coroaX1"], BAR["coroamento"]), (BAR["jusante"], BAR["base"])]],
           fill=tuple(int(FUNDO[i] + env("MINI_CHAO", 0.09) * (TINTA[i] - FUNDO[i])) for i in range(3)) + (255,))
# a água no nível RESERVADO: o triângulo entre o chão, a face da barragem e o nível (--agua, mais cheia que no vídeo: 55 %)
agua_tri = [(xChao(RESERV), RESERV), (BAR["montante"], RESERV), (BAR["montante"], BAR["base"])]
dl.polygon([cl(p) for p in agua_tri], fill=tuple(int(FUNDO[i] + 0.55 * (AGUA[i] - FUNDO[i])) for i in range(3)) + (255,))
# a faixa de cima, vazia: o trapézio entre CHEIO e RESERVADO, só a hachura a 45° em --destaque (o símbolo da s03) e o teto tracejado
faixa = [(xChao(CHEIO), CHEIO), (BAR["montante"], CHEIO), (BAR["montante"], RESERV), (xChao(RESERV), RESERV)]
mask_f = Image.new("L", (LW * K, LW * K), 0)
ImageDraw.Draw(mask_f).polygon([cl(p) for p in faixa], fill=255)
hach = Image.new("RGBA", (LW * K, LW * K), (0, 0, 0, 0))
dh = ImageDraw.Draw(hach)
PASSO = env("MINI_HACH_PASSO", 48)             # no corte (o da s03)
TRACO_H = env("MINI_HACH_TRACO", 7)            # no palco
c0 = int((xChao(CHEIO) + CHEIO) // PASSO) * PASSO - PASSO
c = c0
while c <= BAR["montante"] + RESERV + PASSO:
    dh.line([cl((c - (CHEIO - 30), CHEIO - 30)), cl((c - (RESERV + 30), RESERV + 30))], fill=DEST + (int(255 * env("MINI_HACH_A", 0.80)),),
            width=int(TRACO_H * K))
    c += PASSO
lupa.paste(hach, (0, 0), Image.fromarray(np.minimum(np.asarray(hach.split()[3]), np.asarray(mask_f))))


def tracejado(dr, p, q, cor, larg, cheio, vazio):
    L_ = math.dist(p, q)
    ux, uy = (q[0] - p[0]) / L_, (q[1] - p[1]) / L_
    s = 0.0
    while s < L_:
        e = min(L_, s + cheio)
        dr.line([(p[0] + ux * s, p[1] + uy * s), (p[0] + ux * e, p[1] + uy * e)], fill=cor, width=int(larg))
        s += cheio + vazio


TL = env("MINI_TRACO", 13)                     # o traço de engenheiro, no palco
# o teto da faixa (o nível CHEIO), tracejado em --destaque
tracejado(dl, cl(faixa[0]), cl(faixa[1]), DEST + (255,), env("MINI_TETO", 12) * K, 34 * K, 20 * K)
# a superfície da água (--agua) e o símbolo de nível (▽ e os dois traços)
dl.line([cl(agua_tri[0]), cl(agua_tri[1])], fill=AGUA + (255,), width=int(env("MINI_SUP", 12) * K))
sx_, sy_ = 2880, RESERV
SIMB = env("MINI_SIMB", 1.7)                   # o ▽ da s03, maior
q = lambda dx, dy: cl((sx_ + dx * SIMB, sy_ + dy * SIMB))
dl.polygon([q(-24, -40), q(24, -40), q(0, -6)], outline=AGUA + (255,), width=int(5 * K))
dl.line([q(-18, 16), q(18, 16)], fill=AGUA + (255,), width=int(5 * K))
dl.line([q(-9, 30), q(9, 30)], fill=AGUA + (255,), width=int(5 * K))
# o traço: o terreno (a encosta e o chão), a barragem, o chão de jusante, o conduto (tracejado)
ter = [bez_enc(i / 60) for i in range(61)] + [(CH0[2], CH0[3])]
dl.line([cl(p) for p in ter], fill=TINTA + (255,), width=int(TL * K), joint="curve")
bar = [(BAR["montante"], BAR["base"]), (BAR["montante"], BAR["coroamento"]), (BAR["coroaX1"], BAR["coroamento"]), (BAR["jusante"], BAR["base"])]
dl.line([cl(p) for p in bar], fill=TINTA + (255,), width=int(TL * K), joint="curve")
dl.line([cl((BAR["jusante"], BAR["base"])), cl((3320, BAR["base"]))], fill=TINTA + (255,), width=int(TL * K))
xJus = lambda y: BAR["coroaX1"] + (y - BAR["coroamento"]) * (BAR["jusante"] - BAR["coroaX1"]) / (BAR["base"] - BAR["coroamento"])
for yc in CONDUTO:
    tracejado(dl, cl((BAR["montante"], yc)), cl((xJus(yc), yc)), TINTA + (255,), 5 * K, 20 * K * ESC * 2, 14 * K * ESC * 2)
# o selo da s03, "Not to scale" (a honestidade do desenho), pequeno, embaixo
SELO_FS = int(env("MINI_SELO_FS", 40))
inter = ImageFont.truetype(inter_p, SELO_FS * K)
try:
    inter.set_variation_by_axes([600])
except Exception:
    pass
selo = "NOT TO SCALE"
sw = inter.getlength(selo)
dl.text((LW * K / 2 - sw / 2 - RI * 0.12 * K, (LW / 2 + RI * env("MINI_SELO_Y", -0.62)) * K), selo, font=inter, fill=TINTA + (190,))
# o recorte pelo círculo de dentro
mc = Image.new("L", (LW * K, LW * K), 0)
ImageDraw.Draw(mc).ellipse([(LW / 2 - RI) * K, (LW / 2 - RI) * K, (LW / 2 + RI) * K, (LW / 2 + RI) * K], fill=255)
lupa.putalpha(mc)
lupa_l = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
lupa_l.paste(lupa, (int((LX - LW / 2) * K), int((LY - LW / 2) * K)), lupa)
dlu = ImageDraw.Draw(lupa_l)
circulo(dlu, LX, LY, R_LUPA + 2.5, ESCURO + (235,), 5)
circulo(dlu, LX, LY, R_LUPA - B_LUPA / 2, DEST + (255,), B_LUPA)
ds.ellipse([(LX - R_LUPA) * K, (LY - R_LUPA) * K, (LX + R_LUPA) * K, (LY + R_LUPA) * K], fill=235)

# 6 · a composição: o brilho escuro do texto, as sombras, o cone, a lupa, o anel e o texto
final = compor(img, ESCURO, brilho)
sombra = np.asarray(somb.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(16))).astype(np.float32) / 255
sombra = np.roll(np.roll(sombra, 12, 0), 8, 1) * 0.70
final = compor(final, ESCURO, np.maximum(sombra, sombra_txt))
final = Image.fromarray(np.clip(final, 0, 255).astype(np.uint8)).convert("RGBA")
for camada in (cone_l, lupa_l, anel_l):
    final = Image.alpha_composite(final, camada.resize((W, H), Image.LANCZOS))
final = Image.alpha_composite(final, txt_r).convert("RGB")

# 7 · as saídas
final.save(os.path.join(SAIDA, "miniatura-B-2560.jpg"), quality=92, subsampling=0, optimize=True)
m1280 = final.resize((1280, 720), Image.LANCZOS)
qj = 95
J = os.path.join(SAIDA, "miniatura-B-1280.jpg")
while True:
    m1280.save(J, quality=qj, subsampling=0, optimize=True)
    if os.path.getsize(J) <= 2 * 1024 * 1024 or qj <= 70:
        break
    qj -= 5
m1280.save(os.path.join(PREVIA, "B-previa-1280.png"))
p320 = final.resize((320, 180), Image.LANCZOS)
p320.save(os.path.join(PREVIA, "B-previa-320.png"))
p168 = final.resize((168, 94), Image.LANCZOS)
p168.save(os.path.join(PREVIA, "B-previa-168.png"))
quadro = Image.new("RGB", (40 + 960 + 40 + 672 + 40, 40 + 540 + 40 + 376 + 40), (15, 15, 15))     # o #0f0f0f do feed
quadro.paste(m1280.resize((960, 540), Image.LANCZOS), (40, 40))
quadro.paste(p168.resize((672, 376), Image.NEAREST), (40 + 960 + 40, 40))
quadro.paste(p320, (40, 40 + 540 + 40))
quadro.paste(p168, (40 + 320 + 40, 40 + 540 + 40))
quadro.save(os.path.join(PREVIA, "B-ver.png"))


# 8 · as conferências
def alfa_de(im):
    return np.asarray(im.resize((W, H), Image.LANCZOS).split()[3]).astype(int)


alfa = np.maximum.reduce([alfa_de(cone_l), alfa_de(lupa_l), alfa_de(anel_l), np.asarray(txt_r.split()[3]).astype(int)])
alfa_pecas = np.maximum.reduce([alfa_de(cone_l), alfa_de(lupa_l), alfa_de(anel_l)])
CANTO = (W - 320, H - 320)
lum_txt = {}
for nome in ("heroi-EMPTY", "heroi-ON PURPOSE"):
    x0, y0, x1, y1 = [int(v) for v in caixas[nome]]
    fundo = np.asarray(final.convert("L"))[y0:y1, x0:x1].astype(float)
    letras = np.asarray(txt_r.split()[3])[y0:y1, x0:x1] > 200
    perto = cv2.dilate(letras.astype(np.uint8), np.ones((21, 21), np.uint8)).astype(bool) & ~cv2.dilate(letras.astype(np.uint8), np.ones((5, 5), np.uint8)).astype(bool)
    lum_txt[nome] = {"luma_media_em_volta_das_letras": round(float(fundo[perto].mean()), 1)}
txt_box = np.zeros((H, W), bool)
for nome in ("heroi-EMPTY", "heroi-ON PURPOSE"):
    x0, y0, x1, y1 = [int(v) for v in caixas[nome]]
    txt_box[y0:y1, x0:x1] = True
agua_palco = cv2.resize(agua_b[CY0:CY0 + CH, CX0:CX0 + CW].astype(np.float32), (W, H), interpolation=cv2.INTER_AREA)
dentro_anel = (xx - RX) ** 2 + (yy - RY) ** 2 <= (R_ANEL - W_ANEL / 2) ** 2
pontos = {
    "quadro": {"base": os.path.relpath(BASE, RAIZ).replace("\\", "/"), "sha256_base": SHA_BASE, "data_da_imagem": meta.get("data"),
               "janela_lonlat_base": [lo0, la0, lo1, la1], "metros_mercator_por_px_base": round(MPX, 3),
               "recorte_px_base": [CX0, CY0, CX0 + CW, CY0 + CH], "escala_palco_por_px_base": round(S, 5),
               "metros_mercator_por_px_palco": round(MPX / S, 2),
               "metros_no_chao_por_px_palco": round(MPX / S * math.cos(math.radians(ANEL_LAT)), 2)},
    "anel": {"lugar": "Upper Arrow Lake (Arrow Lakes Reservoir)", "lonlat": [round(ANEL_LON, 5), round(ANEL_LAT, 5)],
             "lido_em": "a água do Landsat conectada à semente %r, a mais longe da margem nas linhas %d±%d da base" % ([SEM_LON, SEM_LAT], sy, FAIXA_LIN),
             "px_base": [int(rx_b), int(ry_b)], "palco": [round(RX, 1), round(RY, 1)], "diametro_px": 2 * R_ANEL, "traco_px": W_ANEL,
             "m_da_margem_no_landsat": round(anel_dist_m), "dentro_do_poligono_osm_lago_arrow": no_arrow,
             "m_ate_os_pontos_do_anel_do_osm": pts_osm, "fracao_de_agua_dentro_do_anel": round(float(agua_palco[dentro_anel].mean()), 3),
             "no_168_px": round(2 * (R_ANEL + W_ANEL / 2) * 168 / W, 1)},
    "lupa": {"centro": [LX, LY], "raio_px": R_LUPA, "borda_px": B_LUPA, "no_168_px": round(2 * R_LUPA * 168 / W, 1),
             "no_320_px": round(2 * R_LUPA * 320 / W, 1),
             "corte": {"fonte": "out/rio-columbia/graphics/s03.html, bloco PEÇA 1 · O CORTE DO LAGO (G e NIVEL conferidos no texto)",
                       "nivel_da_agua": "RESERVADO (y 1040)", "faixa": "CHEIO 860 a RESERVADO 1040, vazia (hachura e teto tracejado)",
                       "escala_palco_por_px_do_corte": ESC, "centro_da_lupa_no_corte": [CCX, CCY],
                       "faixa_altura_palco_px": round((RESERV - CHEIO) * ESC, 1),
                       "faixa_altura_no_320_px": round((RESERV - CHEIO) * ESC * 320 / W, 1),
                       "faixa_altura_no_168_px": round((RESERV - CHEIO) * ESC * 168 / W, 1),
                       "traco_px": TL, "hachura": {"passo_no_corte": PASSO, "traco_palco_px": TRACO_H}}},
    "cone": {"tangentes": [[[round(v) for v in p], [round(v) for v in q_]] for p, q_ in tang],
             "comprimento_px": round(math.dist(tang[0][0], tang[0][1]))},
    "heroi": {"fonte_px": FS, "altura_maiuscula_px": round(alt_cap), "no_168_px": round(alt_cap * 168 / W, 1),
              "caixas": {k: [round(v) for v in caixas[k]] for k in ("heroi-EMPTY", "heroi-ON PURPOSE")}, "fundo": lum_txt,
              "pecas_sobre_as_caixas_do_texto_px": int(((alfa_pecas > 40) & txt_box).sum())},
    "canto_duracao_320": {"caixa": [CANTO[0], CANTO[1], W, H], "alfa_max_pecas": int(alfa[CANTO[1]:, CANTO[0]:].max())},
    "luminancia_media_base_antes_da_vinheta": round(lum_antes_vinheta, 1),
    "luminancia_media_base": round(lum_base, 1),
    "luminancia_media_final": round(float(np.asarray(final.convert("L")).mean()), 1),
    "tratamento": {"gama": GAMA, "ganho": GANHO, "contraste": CONTR, "saturacao": 1.0, "vinheta": VIN, "brilho_texto": env("MINI_BRILHO", 0.86)},
    "jpg_1280_bytes": os.path.getsize(J), "jpg_1280_qualidade": qj,
    "pedidos_de_rede": 0,
}
json.dump(pontos, open(os.path.join(SAIDA, "B-pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(pontos, ensure_ascii=False))
