"""A base da miniatura B do vídeo 3 ("BROKEN BY DESIGN"): o centro do Panamá em relevo, com a Zona do Canal pintada com a
bandeira dos EUA.

    python -X utf8 roteiros/zona-do-canal/miniatura/base-B-bandeira.py        (da raiz do canal)

Pedido (16/10/2026): uma versão no estilo da referência da OBF ("Por que a Indonésia é o país com o pior design do mundo", o
território pintado com a bandeira), que o Lucas mandou no "ângulo do canal" (marca/embalagem.md §1.1). Esta versão quebra de
propósito regras da marca: ver o cabeçalho de miniatura-B.html.

O que é real aqui, e de onde vem:
- o relevo e a costa: os Terrain Tiles da AWS Open Data (formato terrarium, zoom 10, ~150 m por pixel), que no Panamá vêm do
  SRTM, do GMTED e do ETOPO1 (dados do governo dos EUA, domínio público). Um pedido por vez, com o User-Agent do canal; os
  tiles ficam no cache compartilhado das versões, out/zona-do-canal/_tmp/miniatura/terrario/, e o que já está lá não se pede
  de novo. A costa é a linha de 2,5 m do próprio relevo (como no base-relevo.py de Los Angeles);
- a Zona do Canal: o polígono out/zona-do-canal/_media/geo/zona-do-canal-1947.json (a terra dentro da divisa da folha do U.S.
  Army Map Service de 1947, LOC 83694755, com os lagos Gatún e Madden; sem o mar de 3 milhas), o mesmo traçado de
  divisa-zona-1947.json, recortado pela costa do relevo. NÃO é a faixa-art2-5mi (esquema de 10 milhas);
- a bandeira: desenhada em vetor aqui, nas proporções oficiais (Executive Order 10834, de 21/08/1959, e 4 U.S.C. §1-2):
  hasteamento A = 1,0; comprimento B = 1,9; cantão C = 7/13 (0,5385) por D = 0,76; estrelas em 9 fileiras alternadas de 6 e 5,
  E = F = 0,054, G = H = 0,063, diâmetro K = 0,0616; 13 listras de L = 1/13, a de cima e a de baixo vermelhas. Cores: as da
  especificação do Departamento de Estado (Old Glory Red #B22234, Old Glory Blue #3C3B6E, branco). A bandeira dos EUA não tem
  direito autoral.
Nada é desenhado à mão nem por IA. As cores do relevo e do mar são escolha de marca (as do base-relevo.py de LA, um pouco
mais escuras para a bandeira saltar); o contorno é --tinta, com a sombra escura de LA.

Grava, em out/zona-do-canal/_tmp/miniatura/B/: B-mapa.png (2560 × 1440, o palco da miniatura) e B-pontos.json (onde caem,
em pixels do palco, a caixa da Zona e Balboa).
"""
import io, json, math, os, time, urllib.request
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

RAIZ = os.getcwd()
BASE_TMP = os.path.join(RAIZ, "out", "zona-do-canal", "_tmp", "miniatura")
SAIDA = os.path.join(BASE_TMP, "B")
CACHE = os.path.join(BASE_TMP, "terrario")
GEO = os.path.join(RAIZ, "out", "zona-do-canal", "_media", "geo", "zona-do-canal-1947.json")
UA = "AlphaPoint-canal/1.0 (miniatura do video 3; contato.naka@hotmail.com)"
Z = 10
W, H = 2560, 1440

# o quadro: a Zona (lon -80,094 a -79,514; lat 8,889 a 9,403) a 1700 px por grau de longitude, com o topo da Zona logo abaixo
# da caixa de texto (y ~ 450) e a ponta do Pacífico longe do canto da duração
PX_POR_GRAU = 1700.0
LON_ESQ = -80.47
Y_TOPO_ZONA, LAT_TOPO_ZONA = 455, 9.4028


def merc(lon, lat, z=Z):
    n = 256 * 2 ** z
    x = (lon + 180) / 360 * n
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * n
    return x, y


escala = PX_POR_GRAU * 360 / (256 * 2 ** Z)  # pixels do palco por pixel z10
x0 = merc(LON_ESQ, 0)[0]
y0 = merc(0, LAT_TOPO_ZONA)[1] - Y_TOPO_ZONA / escala
x1, y1 = x0 + W / escala, y0 + H / escala


def palco(lon, lat):
    x, y = merc(lon, lat)
    return ((x - x0) * escala, (y - y0) * escala)


def ler_tile(p):
    a = np.asarray(Image.open(p).convert("RGB")).astype(np.float64)
    return a[..., 0] * 256 + a[..., 1] + a[..., 2] / 256 - 32768


pedidos = 0


def tile(tx, ty):
    global pedidos
    os.makedirs(CACHE, exist_ok=True)
    p = os.path.join(CACHE, f"{Z}-{tx}-{ty}.png")
    for _ in range(3):  # outra versão pode estar gravando o mesmo tile agora: espera antes de pedir de novo
        if os.path.isfile(p):
            try:
                return ler_tile(p)
            except Exception:
                time.sleep(2)
        else:
            break
    url = f"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{Z}/{tx}/{ty}.png"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        dados = r.read()
    pedidos += 1
    tmp = p + f".{os.getpid()}.tmp"
    open(tmp, "wb").write(dados)
    os.replace(tmp, p)
    time.sleep(0.2)
    return ler_tile(p)


# 1 · o mosaico do relevo, recortado no quadro e levado ao palco
tx0, tx1 = int(x0 // 256), int(x1 // 256)
ty0, ty1 = int(y0 // 256), int(y1 // 256)
mos = np.zeros(((ty1 - ty0 + 1) * 256, (tx1 - tx0 + 1) * 256))
for ty in range(ty0, ty1 + 1):
    for tx in range(tx0, tx1 + 1):
        mos[(ty - ty0) * 256:(ty - ty0 + 1) * 256, (tx - tx0) * 256:(tx - tx0 + 1) * 256] = tile(tx, ty)
print(f"relevo: {(tx1 - tx0 + 1) * (ty1 - ty0 + 1)} tiles z{Z}, {pedidos} pedidos novos")
cx0, cy0 = x0 - tx0 * 256, y0 - ty0 * 256
img_el = Image.fromarray(mos.astype(np.float32), mode="F")
el = np.asarray(img_el.transform((W, H), Image.AFFINE, (1 / escala, 0, cx0, 0, 1 / escala, cy0), resample=Image.BICUBIC))

# 2 · o sombreado (dois sóis, noroeste e oeste, relevo exagerado 2,2×: o Panamá central é baixo)
lat_meio = 9.1
m_px = 156543.03 * math.cos(math.radians(lat_meio)) / 2 ** Z / escala
gy, gx = np.gradient(el * 2.2, m_px)
inc = np.arctan(np.hypot(gx, gy))
asp = np.arctan2(-gx, gy)


def sombra(az, altd):
    az, alt_ = math.radians(az), math.radians(altd)
    return np.clip(np.sin(alt_) * np.cos(inc) + np.cos(alt_) * np.sin(inc) * np.cos(az - asp), 0, 1)


hs = 0.65 * sombra(315, 40) + 0.35 * sombra(270, 50)

# 3 · as cores: o relevo em tons naturais (os de LA, um pouco mais escuros), o mar em azul-marinho
TINTA_TERRA = [(0, (122, 158, 92)), (120, (114, 150, 84)), (350, (134, 142, 80)), (750, (164, 140, 92)),
               (1300, (190, 166, 128)), (2200, (220, 210, 190))]


def rampa(v, pares):
    xs = [p[0] for p in pares]
    return np.stack([np.interp(v, xs, [p[1][i] for p in pares]) for i in range(3)], axis=-1)


terra = rampa(el, TINTA_TERRA) * (0.40 + 0.75 * hs)[..., None]


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


eh_terra = borrar(el > 2.5, 4) > 0.62
m_terra = borrar(eh_terra, 1.2)
perto = borrar(eh_terra, 45)
mar = np.array((14, 25, 44), dtype=float) * (1 - perto[..., None]) + np.array((30, 52, 82), dtype=float) * perto[..., None]
base = mar * (1 - m_terra[..., None]) + terra * m_terra[..., None]

# 4 · a Zona: o polígono de 1947 em 2× (supersample), recortado pela costa do relevo
gj = json.load(open(GEO, encoding="utf-8"))
SS = 2
zona_img = Image.new("L", (W * SS, H * SS), 0)
dz = ImageDraw.Draw(zona_img)


def aneis(g):
    if g["type"] == "Polygon":
        yield g["coordinates"]
    elif g["type"] == "MultiPolygon":
        yield from g["coordinates"]


xs_z, ys_z = [], []
for f in gj["features"]:
    for poli in aneis(f["geometry"]):
        ext, *buracos = poli
        pts = [palco(*p) for p in ext]
        xs_z += [p[0] for p in pts]
        ys_z += [p[1] for p in pts]
        dz.polygon([(x * SS, y * SS) for x, y in pts], fill=255)
        for b in buracos:
            dz.polygon([tuple(c * SS for c in palco(*p)) for p in b], fill=0)
zona_img = zona_img.resize((W, H), Image.LANCZOS)
# generalização para o tamanho da miniatura (a única mudança de forma, feita por algoritmo e não à mão): uma abertura
# morfológica de raio ~6 px (~0,4 km; erosão e dilatação por borrão e corte, que dão borda redonda) tira os braços do lago
# Gatún mais finos que ~0,8 km, que a 168 px viram fiapos e enchiam o contorno de manchas brancas. A forma da Zona, a costa
# e as pontas continuam as do polígono.
bin_z = np.asarray(zona_img) / 255.0 >= 0.5
erodida = borrar(bin_z, 5) > 0.82
aberta = borrar(erodida, 5) > 0.18
zona = np.minimum(np.asarray(zona_img) / 255.0, borrar(aberta, 1.0))
fechada = borrar(eh_terra, 6) > 0.30
zona = zona * borrar(fechada, 1.0)
caixa = (min(xs_z), min(ys_z), max(xs_z), max(ys_z))
print("caixa da Zona no palco:", [round(v) for v in caixa])

# 5 · a bandeira, em vetor (supersample 3×), com o hasteamento na altura da caixa da Zona e o canto do cantão no canto de
# cima à esquerda dela (o lado do Caribe: Colón e o Gatún)
SSB = 3
FA = caixa[3] - caixa[1]  # hasteamento (A) em pixels do palco
fx0, fy0 = caixa[0], caixa[1]
RED, BLUE, WHITE = (178, 34, 52), (60, 59, 110), (255, 255, 255)
band = Image.new("RGB", (W * SSB, H * SSB), WHITE)
db = ImageDraw.Draw(band)
L = FA / 13
for i in range(13):
    if i % 2 == 0:
        db.rectangle([fx0 * SSB, (fy0 + i * L) * SSB, (fx0 + 1.9 * FA) * SSB, (fy0 + (i + 1) * L) * SSB], fill=RED)
db.rectangle([fx0 * SSB, fy0 * SSB, (fx0 + 0.76 * FA) * SSB, (fy0 + 7 / 13 * FA) * SSB], fill=BLUE)
E = F = 0.054
G = Hh = 0.063
K = 0.0616


def estrela(cx, cy, r):
    pts = []
    for k in range(10):
        ang = -math.pi / 2 + k * math.pi / 5
        rr = r if k % 2 == 0 else r * 0.381966  # a razão do pentagrama (sin 18° / sin 54°)
        pts.append(((cx + rr * math.cos(ang)) * SSB, (cy + rr * math.sin(ang)) * SSB))
    return pts


n_est = 0
for fil in range(9):
    cy = fy0 + (E + fil * F) * FA
    if fil % 2 == 0:
        cols = [Hh + j * 2 * G for j in range(6)]
    else:
        cols = [Hh + G + j * 2 * G for j in range(5)]
    for cxr in cols:
        db.polygon(estrela(fx0 + cxr * FA, cy, K / 2 * FA), fill=WHITE)
        n_est += 1
assert n_est == 50, n_est
band = np.asarray(band.resize((W, H), Image.LANCZOS)).astype(float)
# a bandeira "pintada" sobre o relevo: um sombreado leve, para o território continuar lendo como terra
band = band * np.clip(0.80 + 0.28 * hs, 0, 1.08)[..., None]

# 6 · o contorno em --tinta (a Zona dilatada ~12 px) e a sombra deslocada, como em LA
a_z = Image.fromarray((zona * 255).astype(np.uint8))
dil = np.clip(np.asarray(a_z.filter(ImageFilter.GaussianBlur(9))) / 255.0 * 6.0, 0, 1)
somb = np.asarray(Image.fromarray((dil * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(18))) / 255.0
somb = np.roll(np.roll(somb, 12, axis=0), 7, axis=1)
out = base * (1 - 0.66 * somb[..., None])
TINTA = np.array((244, 241, 234), dtype=float)
out = out * (1 - dil[..., None]) + TINTA * dil[..., None]
# um filete escuro (--fundo, ~5 px) entre a bandeira e o contorno, para a listra branca não se fundir com o --tinta
filete = np.clip(np.asarray(a_z.filter(ImageFilter.GaussianBlur(3))) / 255.0 * 4.0, 0, 1)
FUNDO = np.array((14, 23, 38), dtype=float)
out = out * (1 - filete[..., None]) + FUNDO * filete[..., None]
out = out * (1 - zona[..., None]) + band * zona[..., None]

os.makedirs(SAIDA, exist_ok=True)
Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(os.path.join(SAIDA, "B-mapa.png"))
pontos = {
    "caixa_zona": caixa,
    "balboa": palco(-79.5664, 8.9583),
    "colon": palco(-79.9005, 9.3592),
    "escala_px_por_km": 1000 / m_px,
    "quadro_lonlat": {"oeste": LON_ESQ, "leste": LON_ESQ + W / PX_POR_GRAU},
}
json.dump(pontos, open(os.path.join(SAIDA, "B-pontos.json"), "w"), indent=1)
print("ok", os.path.join(SAIDA, "B-mapa.png"), json.dumps(pontos))
