"""A miniatura A do vídeo 4 (atlantico-fundo): O LUGAR.

    python -X utf8 -B out/atlantico-fundo/_tmp/miniatura/A/base-A.py </dev/null        (da raiz do canal; sem rede)

Os títulos em teste (roteiros/atlantico-fundo/decisoes-lucas.md, 24/10/2026, "Manter o meu e o "Only" para teste"):
  - The Deepest Point in the Atlantic Ocean
  - The Deepest Point in the Atlantic Ocean Is Only 83 Miles From a U.S. Island

A IDEIA. A vista de cima de Porto Rico e do mar ao norte, sobre o fundo do mar da GEBCO: a fossa escura e longa, o trecho mais
fundo dela em --destaque (o mesmo polígono que a s02 do vídeo acende) e o anel no ponto mais fundo do Atlântico, com a ilha
americana logo abaixo. A pílula-herói, em duas linhas como a A2 do Peru (marca/embalagem.md §3), aponta o lugar com a seta e
pergunta sem dizer o que há lá embaixo: "RIGHT HERE?". Não repete nenhum dos dois títulos e serve aos dois.

DE ONDE VEM CADA COISA (nada desenhado à mão nem por IA; este script não tem código de rede):
- o fundo do mar e a terra que não é Porto Rico: a grade GEBCO_2026 de 15" (o recorte gebco_2026_n26.0_s14.0_w-75.0_e-58.0,
  Esri ASCII, o mesmo que fez a _media/base/gebco-caribe.png; o sha256 confere com o _PROCEDENCIA.json da base antes de usar),
  com o relevo sombreado (Horn, azimute 315, altura 45) e uma rampa de azul própria, mais clara que a do vídeo (embalagem §3: a
  miniatura disputa o feed escuro). Domínio público, reconhecendo a fonte: o crédito vai na descrição, não na miniatura;
- Porto Rico: a foto ISS071-E-1036 da NASA (Wikimedia Commons, domínio público; _media/foto/s01/, aprovada no
  conferencia-midia.json para a s01/s02), posta no lugar pela afim em Mercator que a arte do vídeo ajustou ao polígono do Census
  (_tmp/arte-1/M1/georref-foto.json, IoU 0,906), e recortada no polígono porto-rico (Census cb_2025 1:500k, domínio público);
- o trecho mais fundo da fossa: _media/geo/fossa-porto-rico-trecho-mais-fundo.json (a isóbata de 8.000 m da mesma grade; nunca
  rotulado PUERTO RICO TRENCH);
- o anel: _media/geo/ponto-mais-fundo-atlantico.json (19,712°N, 67,311°W, o sonar da Five Deeps de 19/12/2018, F10);
- a costa de Aguadilla, só para conferir a distância: _media/geo/aguadilla-costa-ponto.json (18,5130°N, 67,1145°W, F04);
- as letras: marca/fontes/ (Barlow Condensed 800 e Inter, SIL OFL); as cores: marca/tokens.css.

Grava em out/atlantico-fundo/_tmp/miniatura/A2/: miniatura-A2-2560.png, miniatura-A2-1280.jpg (<= 2 MB), miniatura-A2-320.png,
miniatura-A2-168.png, _ver-168x4.png (a de 168 ampliada, só para olhar) e A2-pontos.json (as conferências).
"""
import hashlib, json, math, os, sys
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter, ImageFont

RAIZ = os.getcwd()
PROJ = os.path.join(RAIZ, "out", "atlantico-fundo")
SAIDA = os.path.join(PROJ, "_tmp", "miniatura", "A2")
CACHE = os.path.join(PROJ, "_tmp", "miniatura", "A", "_cache")  # A2: o mesmo .npy da A
GEO = os.path.join(PROJ, "_media", "geo")
FONTES = os.path.join(RAIZ, "marca", "fontes")
ASC = os.path.join(PROJ, "_tmp", "pesquisa-geo", "baixado", "gebco-cesta-1", "x", "gebco_2026_n26.0_s14.0_w-75.0_e-58.0_ascii.asc")
SHA_ASC = "8cd9cbbbda0518519cb1db686bcbb013874df30aa6a8443ccec897afc8abb096"   # gebco-caribe.png.json › procedencia.sha256_asc
FOTO = os.path.join(PROJ, "_media", "foto", "s01", "s01-iss071-e-1036-puerto-rico-nasa.jpg")
SHA_FOTO = "0de1767936d59da9167a1acc55e2b9f3b9159745d0d45d1bc01d95b87f0e4f15"  # _media/foto/s01/_PROCEDENCIA.json › medido.sha256
GEORREF = os.path.join(PROJ, "_tmp", "arte-1", "M1", "georref-foto.json")
os.makedirs(CACHE, exist_ok=True)

W, H = 2560, 1440
SS = 2

# a marca (marca/tokens.css)
TINTA = np.array((244, 241, 234), float)       # --tinta
DEST = np.array((245, 165, 36), float)         # --destaque
AGUA = np.array((175, 216, 246), float)        # --agua
ROTULO = (11, 15, 20, int(0.88 * 255))         # --rotulo
ESCURO = (4, 8, 16)

# o quadro, em Web Mercator: PXG px por grau de longitude; o anel cai em (RX, RY) no palco
PXG = float(os.environ.get("MINI_PXG", 520))
RX, RY = float(os.environ.get("MINI_RX", 1360)), float(os.environ.get("MINI_RY", 300))
ANEL = (-67.311, 19.712)
COSTA = (-67.1145, 18.5130)


def ymerc(lat):
    return math.degrees(math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))


def lat_de(ym):
    return math.degrees(2 * math.atan(math.exp(math.radians(ym))) - math.pi / 2)


LON0 = ANEL[0] - RX / PXG
YTOP = ymerc(ANEL[1]) + RY / PXG


def palco(lon, lat, s=1):
    return ((lon - LON0) * PXG * s, (YTOP - ymerc(lat)) * PXG * s)


def ler(nome):
    return json.load(open(os.path.join(GEO, nome), encoding="utf-8"))


def aneis(geom):
    if geom["type"] == "Polygon":
        return [geom["coordinates"]]
    if geom["type"] == "MultiPolygon":
        return geom["coordinates"]
    return []


def mascara(fc):
    im = Image.new("L", (W * SS, H * SS), 0)
    d = ImageDraw.Draw(im)
    for f in fc["features"]:
        for poli in aneis(f["geometry"]):
            ext, *buracos = poli
            d.polygon([palco(*p, SS) for p in ext], fill=255)
            for b in buracos:
                d.polygon([palco(*p, SS) for p in b], fill=0)
    return np.asarray(im.resize((W, H), Image.LANCZOS)).astype(float) / 255.0


def contorno(fc, lw):
    im = Image.new("L", (W * SS, H * SS), 0)
    d = ImageDraw.Draw(im)
    for f in fc["features"]:
        for poli in aneis(f["geometry"]):
            for anel in poli:
                pts = [palco(*p, SS) for p in anel]
                d.line(pts + [pts[0]], fill=255, width=int(lw * SS), joint="curve")
    return np.asarray(im.resize((W, H), Image.LANCZOS)).astype(float) / 255.0


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


def compor(img, cor, a):
    return img * (1 - a[..., None]) + np.asarray(cor, float)[None, None, :3] * a[..., None]


def sha256(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for bloco in iter(lambda: f.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()


def vincenty(lon1, lat1, lon2, lat2):
    """distância geodésica no WGS84, em metros (Vincenty, inversa)"""
    a, f = 6378137.0, 1 / 298.257223563
    b = (1 - f) * a
    L = math.radians(lon2 - lon1)
    U1, U2 = math.atan((1 - f) * math.tan(math.radians(lat1))), math.atan((1 - f) * math.tan(math.radians(lat2)))
    sU1, cU1, sU2, cU2 = math.sin(U1), math.cos(U1), math.sin(U2), math.cos(U2)
    lam = L
    for _ in range(200):
        sl, cl = math.sin(lam), math.cos(lam)
        ss = math.hypot(cU2 * sl, cU1 * sU2 - sU1 * cU2 * cl)
        cs = sU1 * sU2 + cU1 * cU2 * cl
        sig = math.atan2(ss, cs)
        sa = cU1 * cU2 * sl / ss
        c2a = 1 - sa * sa
        c2sm = cs - 2 * sU1 * sU2 / c2a
        C = f / 16 * c2a * (4 + f * (4 - 3 * c2a))
        lam0, lam = lam, L + (1 - C) * f * sa * (sig + C * ss * (c2sm + C * cs * (-1 + 2 * c2sm * c2sm)))
        if abs(lam - lam0) < 1e-12:
            break
    u2 = c2a * (a * a - b * b) / (b * b)
    A = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)))
    B = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)))
    ds = B * ss * (c2sm + B / 4 * (cs * (-1 + 2 * c2sm * c2sm) - B / 6 * c2sm * (-3 + 4 * ss * ss) * (-3 + 4 * c2sm * c2sm)))
    return b * A * (sig - ds)


# 0 · a grade GEBCO, conferida pelo sha256 e guardada em .npy (só a primeira vez lê o texto de 68 MB)
NPY = os.path.join(CACHE, "gebco-caribe-asc.npy")
if not os.path.exists(NPY):
    if sha256(ASC) != SHA_ASC:
        sys.exit("a grade GEBCO não confere com o sha256 do _PROCEDENCIA.json da base: parei")
    with open(ASC, "rb") as f:
        cab = [f.readline() for _ in range(6)]
        z = np.array(f.read().split(), dtype=np.int32)
    hdr = {l.split()[0].decode().lower(): float(l.split()[1]) for l in cab}
    z = z.reshape(int(hdr["nrows"]), int(hdr["ncols"]))
    np.save(NPY, z)
    json.dump(hdr, open(NPY + ".json", "w"))
z = np.load(NPY).astype(np.float32)
hdr = json.load(open(NPY + ".json"))
CS = hdr["cellsize"]
XLL, YLL, NR, NC = hdr["xllcorner"], hdr["yllcorner"], int(hdr["nrows"]), int(hdr["ncols"])
LAT_TOPO_GRADE = YLL + NR * CS
assert (NR, NC) == z.shape

# 1 · o relevo sombreado na grade (Horn, espaçamento real em metros, exagero vertical 4×), depois levado ao palco (Mercator)
lat_c = LAT_TOPO_GRADE - (np.arange(NR) + 0.5) * CS
dy = 6371008.8 * math.radians(CS)
dx = dy * np.cos(np.radians(lat_c))[:, None]
EXAG = 4.0
zp = np.pad(z * EXAG, 1, mode="edge")
gx = ((zp[:-2, 2:] + 2 * zp[1:-1, 2:] + zp[2:, 2:]) - (zp[:-2, :-2] + 2 * zp[1:-1, :-2] + zp[2:, :-2])) / (8 * dx)
gy = ((zp[2:, :-2] + 2 * zp[2:, 1:-1] + zp[2:, 2:]) - (zp[:-2, :-2] + 2 * zp[:-2, 1:-1] + zp[:-2, 2:])) / (8 * dy)
AZM, ALT = math.radians(360 - 315 + 90), math.radians(45)   # azimute 315 (noroeste) no ângulo matemático da fórmula da ESRI
declive = np.arctan(np.hypot(gx, gy))
aspecto = np.arctan2(gy, -gx)
hs = np.sin(ALT) * np.cos(declive) + np.cos(ALT) * np.sin(declive) * np.cos(AZM - aspecto)
hs = np.clip(hs, 0, 1).astype(np.float32)

xs = np.arange(W, dtype=np.float64)
ys = np.arange(H, dtype=np.float64)
lon_px = LON0 + (xs + 0.5) / PXG
lat_px = np.degrees(2 * np.arctan(np.exp(np.radians(YTOP - (ys + 0.5) / PXG))) - math.pi / 2)
col = ((lon_px - XLL) / CS - 0.5).astype(np.float32)
lin = ((LAT_TOPO_GRADE - lat_px) / CS - 0.5).astype(np.float32)
mapx = np.repeat(col[None, :], H, 0)
mapy = np.repeat(lin[:, None], W, 1)
Z = cv2.remap(z, mapx, mapy, cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
HS = cv2.remap(hs, mapx, mapy, cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
HS = np.clip(HS, 0, 1)

# 2 · a rampa do mar: azul da família --agua no raso, descendo a um azul-noite na fossa; o relevo modula (plano = 1,0)
RAMPA = [(0, (150, 196, 226)), (60, (112, 164, 204)), (250, (78, 128, 174)), (1000, (56, 100, 146)), (2500, (44, 82, 124)),
         (4500, (36, 68, 106)), (6000, (29, 55, 89)), (7500, (21, 41, 70)), (8500, (15, 30, 54))]
prof = np.clip(-Z, 0, None)
mar = np.stack([np.interp(prof, [p for p, _ in RAMPA], [c[i] for _, c in RAMPA]) for i in range(3)], -1)
sombra_rel = np.clip(0.30 + 0.99 * HS, 0.25, 1.35)
img = mar * sombra_rel[..., None]

# 3 · a terra que não é Porto Rico (a Hispaniola): o relevo da própria grade, num oliva apagado (contexto, sem cor de papel)
pr_fc = ler("porto-rico.json")
pr = mascara(pr_fc)
terra_gebco = (Z > 0).astype(float)
terra_gebco = borrar(terra_gebco, 1.0)
# perto de Porto Rico manda o polígono do Census (a foto é recortada nele); longe, a grade
perto_pr = np.zeros((H, W))
x0p, y0p = palco(-68.05, 18.75)
x1p, y1p = palco(-65.05, 17.75)
perto_pr[int(max(0, y0p)):int(min(H, y1p)), int(max(0, x0p)):int(min(W, x1p))] = 1
perto_pr = borrar(perto_pr, 20)
terra = terra_gebco * (1 - perto_pr) + pr * perto_pr
olivo = np.array((92, 104, 80), float)
alt_rel = np.clip(Z / 1500.0, 0, 1)
cor_terra = (olivo[None, None, :] * (1 + 0.25 * alt_rel[..., None])) * np.clip(0.35 + 0.9 * HS, 0.3, 1.3)[..., None]
img = img * (1 - terra[..., None]) + cor_terra * terra[..., None]

# 4 · Porto Rico: a foto da ISS, no lugar pela afim em Mercator, recortada no polígono do Census
if sha256(FOTO) != SHA_FOTO:
    sys.exit("a foto ISS071-E-1036 não confere com o sha256 do _PROCEDENCIA.json: parei")
gr = json.load(open(GEORREF, encoding="utf-8"))
a, b, c, d, e, f = gr["afim_merc_por_px_reduzido"]
k = gr["escala_reducao"]
assert abs(lat_de(f) - gr["cantos_lnglat"]["tl"][1]) < 1e-4 and abs(c - gr["cantos_lnglat"]["tl"][0]) < 1e-4
# palco (x, y) -> (lon, ym): lon = LON0 + x/PXG ; ym = YTOP - y/PXG ; foto reduzida (u, v) = A^-1 ([lon, ym] - t) ; foto cheia = /k
Ainv = np.linalg.inv(np.array([[a, b], [d, e]]))
P = np.array([[1 / PXG, 0, LON0], [0, -1 / PXG, YTOP]])
M = Ainv @ (P - np.array([[0, 0, c], [0, 0, f]]))
M = M / k
foto = cv2.cvtColor(cv2.imread(FOTO, cv2.IMREAD_COLOR), cv2.COLOR_BGR2RGB)
assert foto.shape[1] == round(gr["px"][0]) and foto.shape[0] == round(gr["px"][1])
foto_p = cv2.warpAffine(foto, M.astype(np.float64), (W, H), flags=cv2.INTER_CUBIC | cv2.WARP_INVERSE_MAP,
                        borderMode=cv2.BORDER_CONSTANT, borderValue=0).astype(float)
cobre = cv2.warpAffine(np.full(foto.shape[:2], 255, np.uint8), M.astype(np.float64), (W, H),
                       flags=cv2.INTER_LINEAR | cv2.WARP_INVERSE_MAP, borderMode=cv2.BORDER_CONSTANT, borderValue=0).astype(float) / 255
cobre = np.clip((cobre - 0.02) * 1.1, 0, 1)
# o tom da foto: um pouco mais de luz e de verde, para a ilha saltar do azul em 168 px
fl = foto_p @ np.array([0.2126, 0.7152, 0.0722])
foto_p = np.clip(fl[..., None] + (foto_p - fl[..., None]) * 1.18, 0, 255) * 1.10
a_foto = pr * cobre
img = img * (1 - a_foto[..., None]) + foto_p * a_foto[..., None]

# 5 · o filtro da receita sobre a base (brightness .9, saturate 1, contrast 1.05)
img = np.clip(((img / 255.0 * 0.9) - 0.5) * 1.05 + 0.5, 0, 1) * 255.0

# 6 · o trecho mais fundo da fossa em --destaque (85 %, o --territorio-cor do vídeo), com o relevo por baixo, e o contorno --tinta
fossa_fc = ler("fossa-porto-rico-trecho-mais-fundo.json")
fossa = mascara(fossa_fc)
lum = img @ np.array([0.2126, 0.7152, 0.0722])
lm = float(lum[fossa > 0.5].mean())
mod = np.clip(0.70 + 0.34 * (lum / lm), 0.62, 1.12)
laranja = DEST[None, None, :] * mod[..., None]
img = img * (1 - 0.85 * fossa[..., None]) + laranja * (0.85 * fossa[..., None])
borda_f = contorno(fossa_fc, 8)
borda_pr = contorno(pr_fc, 5) * perto_pr
somb = np.roll(np.roll(borrar(np.maximum(borda_f, fossa * 0.0), 7), 6, axis=0), 4, axis=1)
img = compor(img, ESCURO, 0.65 * np.clip(somb * 2.2, 0, 1) * (1 - borda_f))
img = compor(img, TINTA, borda_f)
# a ilha: um filete escuro em volta (não é protagonista: sem contorno --tinta), para a costa ler sobre o azul raso
img = compor(img, ESCURO, 0.55 * borda_pr * (1 - a_foto * 0.6))

# 7 · a vinheta: até 35 % de preto nas bordas
yy, xx = np.mgrid[0:H, 0:W]
dn = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / math.sqrt(2)
img = img * (1 - 0.35 * np.clip((dn - 0.45) / 0.55, 0, 1) ** 1.6)[..., None]
base = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).convert("RGBA")
lum_base = float((np.clip(img, 0, 255) @ np.array([0.2126, 0.7152, 0.0722])).mean())

# 8 · as peças da receita, em supersample 2×
K = 2
cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
somb_l = Image.new("L", (W * K, H * K), 0)
dc, ds = ImageDraw.Draw(cam), ImageDraw.Draw(somb_l)
T = tuple(TINTA.astype(int))
D = tuple(DEST.astype(int))
AX, AY = palco(*ANEL)

# 8a · o anel (224 px, traço 38, --destaque, contorno escuro de 5 px por dentro e por fora) e o ponto branco de 34 px no centro
RA = 112 - 19
# rodada 2: dentro do anel, o trecho escurece (--rotulo a 70 %): em 168 px, o anel --destaque sobre a fossa --destaque sumia, e o
# miolo escuro faz dele um alvo; é também a leitura certa do lugar (o fundo do fundo). A receita não diz o que vai dentro do anel.
RI = RA - 19 - 5
dc.ellipse([(AX - RI) * K, (AY - RI) * K, (AX + RI) * K, (AY + RI) * K], fill=(11, 15, 20, int(0.70 * 255)))
for rr, lw, cor in ((RA, 38 + 10, ESCURO + (255,)), (RA, 38, D + (255,))):
    dc.ellipse([(AX - rr) * K, (AY - rr) * K, (AX + rr) * K, (AY + rr) * K], outline=cor, width=int(lw * K))
ds.ellipse([(AX - RA) * K, (AY - RA) * K, (AX + RA) * K, (AY + RA) * K], outline=200, width=int(60 * K))
RP = 17
dc.ellipse([(AX - RP - 5) * K, (AY - RP - 5) * K, (AX + RP + 5) * K, (AY + RP + 5) * K], fill=ESCURO + (255,))
dc.ellipse([(AX - RP) * K, (AY - RP) * K, (AX + RP) * K, (AY + RP) * K], fill=T + (255,))

# 8b · o nome do lugar: "Puerto Rico", Inter 700, 96 px, na pílula --rotulo, logo abaixo da ilha, encostando na costa sul
#      (rodada 2: no meio da ilha, a pílula cobria 72 % da largura dela e, em 168 px, a ilha virava um retângulo escuro)
inter = ImageFont.truetype(os.path.join(FONTES, "inter", "Inter-VF.ttf"), 96 * K)
inter.set_variation_by_name("Bold")
nome = "Puerto Rico"
bb = inter.getbbox(nome)
PADX, PADY = 40, 24
nw, nh = (bb[2] - bb[0]) / K + 2 * PADX, (bb[3] - bb[1]) / K + 2 * PADY
NOME_C = palco(float(os.environ.get("MINI_NOME_LON", -66.45)), float(os.environ.get("MINI_NOME_LAT", 17.90)))
nx0, ny0 = NOME_C[0] - nw / 2, NOME_C[1] - nh / 2
MOSTRAR_NOME = False  # A2 (Lucas, 30/10/2026: "Acho que tirar o nome Puerto Rico da A"): a pílula do nome não se desenha
if MOSTRAR_NOME:
    dc.rounded_rectangle([nx0 * K, ny0 * K, (nx0 + nw) * K, (ny0 + nh) * K], radius=24 * K, fill=ROTULO)
    ds.rounded_rectangle([nx0 * K, ny0 * K, (nx0 + nw) * K, (ny0 + nh) * K], radius=24 * K, fill=170)
    dc.text(((nx0 + PADX) * K - bb[0], (ny0 + PADY) * K - bb[1]), nome, font=inter, fill=T + (255,))

# 8c · a pílula-herói em duas linhas, no centro-esquerda: Barlow Condensed 800, 300 px, CAIXA ALTA; HERE em --destaque (a cor do anel)
barlow = ImageFont.truetype(os.path.join(FONTES, "barlowcondensed", "BarlowCondensed-ExtraBold.ttf"), 300 * K)
LINHAS = [[("RIGHT", T)], [("HERE", D), ("?", T)]]
TXT = " / ".join("".join(p for p, _ in l) for l in LINHAS)
FS = 300
tb = barlow.getbbox("RIGHT HERE?")
HPX, HPY, GAP = 52, 36, 26
hh = (tb[3] - tb[1]) / K + 2 * HPY
larguras = [sum(barlow.getlength(p) for p, _ in l) / K + 2 * HPX for l in LINHAS]
bloco_h = len(LINHAS) * hh + GAP * (len(LINHAS) - 1)
hx0 = float(os.environ.get("MINI_HX0", 120))
hy0 = round(H * float(os.environ.get("MINI_HYC", 0.56)) - bloco_h / 2)
caixas = []
y = hy0
for linha, hw in zip(LINHAS, larguras):
    dc.rounded_rectangle([hx0 * K, y * K, (hx0 + hw) * K, (y + hh) * K], radius=24 * K, fill=ROTULO)
    ds.rounded_rectangle([hx0 * K, y * K, (hx0 + hw) * K, (y + hh) * K], radius=24 * K, fill=200)
    cx = (hx0 + HPX) * K
    for parte, cor in linha:
        dc.text((cx, (y + HPY) * K - tb[1]), parte, font=barlow, fill=cor + (255,))
        cx += barlow.getlength(parte)
    caixas.append((hx0, y, hx0 + hw, y + hh))
    y += hh + GAP

# 8d · a seta: --tinta, traço 34, pontas redondas, sombra; sai da direita da 1ª linha, sobe em curva e chega ao anel por baixo, à esquerda
c0 = caixas[0]
p0 = (c0[2] + 34, (c0[1] + c0[3]) / 2 + 30)
alvo_ang = math.radians(float(os.environ.get("MINI_SETA_ANG", 222)))
p3 = (AX + (112 + 34) * math.cos(alvo_ang), AY - (112 + 34) * math.sin(alvo_ang))
p1 = (p0[0] + 260, p0[1] + 40)
p2 = (p3[0] - 150, p3[1] + 210)
curva = []
for i in range(161):
    t = i / 160
    xq = (1 - t) ** 3 * p0[0] + 3 * (1 - t) ** 2 * t * p1[0] + 3 * (1 - t) * t * t * p2[0] + t ** 3 * p3[0]
    yq = (1 - t) ** 3 * p0[1] + 3 * (1 - t) ** 2 * t * p1[1] + 3 * (1 - t) * t * t * p2[1] + t ** 3 * p3[1]
    curva.append((xq, yq))
comp_seta = sum(math.dist(curva[i], curva[i + 1]) for i in range(160))
ddx, ddy = curva[-1][0] - curva[-8][0], curva[-1][1] - curva[-8][1]
ang = math.atan2(ddy, ddx)
ponta = [(p3[0] - 92 * math.cos(ang + s * math.radians(38)), p3[1] - 92 * math.sin(ang + s * math.radians(38))) for s in (-1, 1)]
seta = np.zeros((H * K, W * K), np.uint8)
for seg in (curva, [ponta[0], p3], [ponta[1], p3]):
    pts = np.array([[round(xq * K * 16), round(yq * K * 16)] for xq, yq in seg], np.int32)
    cv2.polylines(seta, [pts], False, 255, thickness=34 * K, lineType=cv2.LINE_AA, shift=4)
seta_l = Image.fromarray(seta)
somb_l.paste(220, (0, 0), seta_l)
cam_seta = Image.new("RGBA", (W * K, H * K), T + (0,))
cam_seta.putalpha(seta_l)

# 8e · a sombra difusa (deslocada) sob tudo, e a composição
sombra = somb_l.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(16))
sombra = Image.fromarray(np.roll(np.roll(np.asarray(sombra), 10, 0), 6, 1))
camada_sombra = Image.new("RGBA", (W, H), ESCURO + (0,))
camada_sombra.putalpha(sombra.point(lambda v: int(v * 0.75)))
final = Image.alpha_composite(base, camada_sombra)
final = Image.alpha_composite(final, cam_seta.resize((W, H), Image.LANCZOS))
cam_r = cam.resize((W, H), Image.LANCZOS)
final = Image.alpha_composite(final, cam_r).convert("RGB")

final.save(os.path.join(SAIDA, "miniatura-A2-2560.png"))
m1280 = final.resize((1280, 720), Image.LANCZOS)
q = 95
J = os.path.join(SAIDA, "miniatura-A2-1280.jpg")
while True:
    m1280.save(J, quality=q, subsampling=0, optimize=True)
    if os.path.getsize(J) <= 2 * 1024 * 1024 or q <= 70:
        break
    q -= 5
final.resize((320, 180), Image.LANCZOS).save(os.path.join(SAIDA, "miniatura-A2-320.png"))
p168 = final.resize((168, 94), Image.LANCZOS)
p168.save(os.path.join(SAIDA, "miniatura-A2-168.png"))
p168.resize((672, 376), Image.NEAREST).save(os.path.join(SAIDA, "_ver-168x4.png"))

# 9 · as conferências
alfa_pecas = np.asarray(cam_r.split()[3]).astype(int)
alfa_pecas = np.maximum(alfa_pecas, np.asarray(cam_seta.resize((W, H), Image.LANCZOS).split()[3]).astype(int))
CANTO = (W - 320, H - 320)
cx_, cy_ = palco(*COSTA)
dist_m = vincenty(ANEL[0], ANEL[1], COSTA[0], COSTA[1])
fossa_px = np.nonzero(fossa > 0.5)
pr_px = np.nonzero(pr > 0.5)
pontos = {
    "quadro": {"projecao": "Web Mercator", "px_por_grau_lon": PXG, "lon_esq": round(LON0, 4), "lon_dir": round(LON0 + W / PXG, 4),
               "lat_topo": round(lat_de(YTOP), 4), "lat_base": round(lat_de(YTOP - H / PXG), 4)},
    "anel": {"lonlat": ANEL, "palco": [round(AX, 1), round(AY, 1)], "dentro_do_trecho_8000m": bool(fossa[int(AY), int(AX)] > 0.5),
             "profundidade_gebco_no_palco_m": round(float(Z[int(AY), int(AX)]))},
    "costa_aguadilla": {"lonlat": COSTA, "palco": [round(cx_, 1), round(cy_, 1)], "dentro_ou_na_borda_de_pr": bool(pr[int(cy_) - 3:int(cy_) + 4, int(cx_) - 3:int(cx_) + 4].max() > 0.3)},
    "distancia_anel_costa": {"km": round(dist_m / 1000, 2), "mi": round(dist_m / 1609.344, 2), "rumo_do_anel": "norte (o anel está %.3f° ao norte e %.3f° a oeste da costa)" % (ANEL[1] - COSTA[1], COSTA[0] - ANEL[0]),
                             "no_palco_px": round(math.dist((AX, AY), (cx_, cy_)))},
    "trecho_8000m_palco": [int(fossa_px[1].min()), int(fossa_px[0].min()), int(fossa_px[1].max()), int(fossa_px[0].max())],
    "porto_rico_palco": [int(pr_px[1].min()), int(pr_px[0].min()), int(pr_px[1].max()), int(pr_px[0].max())],
    "foto_cobre_pr_fracao": round(float((pr * cobre).sum() / pr.sum()), 4),
    "heroi": {"texto": TXT, "fonte_px": FS, "caixas": [[round(v) for v in cx] for cx in caixas]},
    "nome": {"texto": nome, "desenhado": MOSTRAR_NOME, "caixa": [round(nx0), round(ny0), round(nx0 + nw), round(ny0 + nh)]},
    "seta_comprimento_px": round(comp_seta),
    "canto_duracao_320": {"caixa": [CANTO[0], CANTO[1], W, H], "sem_pecas": bool(alfa_pecas[CANTO[1]:, CANTO[0]:].max() <= 10)},
    "luminancia_media_base": round(lum_base, 1),
    "luminancia_media_final": round(float(np.asarray(final.convert("L")).mean()), 1),
    "jpg_1280_bytes": os.path.getsize(J), "jpg_qualidade": q,
    "sha256": {"grade_asc": SHA_ASC, "foto": SHA_FOTO},
    "pedidos_de_rede": 0,
}
json.dump(pontos, open(os.path.join(SAIDA, "A2-pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(pontos, ensure_ascii=False))
