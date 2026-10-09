"""A base da miniatura do vídeo 2: o relevo do sul da Califórnia, com a cidade de Los Angeles recortada por cima.

    python roteiros/los-angeles/miniatura/base-relevo.py        (da raiz do canal)

Pedido do Lucas (09/10/2026), depois de três tentativas no Nano Banana Pro: "Ta bem ruim, tente você fazer uma thumb", no
estilo das miniaturas de mapa de relevo que ele mandou ("eu queria mais nesse estilo, mas com nosso identidade").

O que é real aqui, e de onde vem:
- o relevo: os Terrain Tiles da AWS Open Data (formato terrarium, zoom 11, ~63 m por pixel), que nos EUA vêm do USGS 3DEP e do
  SRTM, em domínio público. Um pedido por vez, com o User-Agent do canal; os tiles ficam em cache em
  out/los-angeles/_tmp/miniatura/terrario/ e não se pedem de novo;
- a cidade: o contorno oficial do Census (TIGER/Line 2025, out/los-angeles/_media/geo/la-hoje-tiger.json, domínio público),
  recortado pela linha da costa do próprio relevo (o polígono do Census entra no mar na baía de Santa Monica e no porto).
Nada é desenhado à mão nem por IA. As cores são escolha de marca: o verde e o marrom do relevo, o azul-marinho do mar, a cidade
em --destaque com contorno em --tinta e sombra.

Grava out/los-angeles/_tmp/miniatura/mapa.png (2560 × 1440, o palco da miniatura) e mapa-pontos.json (onde caem, em pixels do
palco, a faixa e o porto, para a seta e o anel do miniatura.html).
"""
import io, json, math, os, time, urllib.request
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

RAIZ = os.getcwd()
SAIDA = os.path.join(RAIZ, "out", "los-angeles", "_tmp", "miniatura")
CACHE = os.path.join(SAIDA, "terrario")
GEO = os.path.join(RAIZ, "out", "los-angeles", "_media", "geo", "la-hoje-tiger.json")
UA = "AlphaPoint-canal/1.0 (miniatura do video 2; contato.naka@hotmail.com)"
Z = 11
W, H = 2560, 1440

# o quadro: a cidade (lat 33,70–34,34) ocupa ~78 % da altura; o centro dela a 37 % da largura
LAT_TOPO, LAT_BASE = 34.385, 33.645
LON_CIDADE, X_CIDADE = -118.41, 0.355


def merc(lon, lat, z=Z):
    n = 256 * 2 ** z
    x = (lon + 180) / 360 * n
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * n
    return x, y


y0 = merc(0, LAT_TOPO)[1]
y1 = merc(0, LAT_BASE)[1]
alt = y1 - y0
larg = alt * W / H
xc = merc(LON_CIDADE, 0)[0]
x0 = xc - X_CIDADE * larg
x1 = x0 + larg
escala = W / larg  # pixels do palco por pixel z11


def palco(lon, lat):
    x, y = merc(lon, lat)
    return ((x - x0) * escala, (y - y0) * escala)


def tile(tx, ty):
    os.makedirs(CACHE, exist_ok=True)
    p = os.path.join(CACHE, f"{Z}-{tx}-{ty}.png")
    if not os.path.isfile(p):
        url = f"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{Z}/{tx}/{ty}.png"
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=60) as r:
            dados = r.read()
        open(p, "wb").write(dados)
        time.sleep(0.2)
    a = np.asarray(Image.open(p).convert("RGB")).astype(np.float64)
    return a[..., 0] * 256 + a[..., 1] + a[..., 2] / 256 - 32768


# 1 · o mosaico do relevo, recortado no quadro e levado ao palco
tx0, tx1 = int(x0 // 256), int(x1 // 256)
ty0, ty1 = int(y0 // 256), int(y1 // 256)
mos = np.zeros(((ty1 - ty0 + 1) * 256, (tx1 - tx0 + 1) * 256))
for ty in range(ty0, ty1 + 1):
    for tx in range(tx0, tx1 + 1):
        mos[(ty - ty0) * 256:(ty - ty0 + 1) * 256, (tx - tx0) * 256:(tx - tx0 + 1) * 256] = tile(tx, ty)
print(f"relevo: {(tx1 - tx0 + 1) * (ty1 - ty0 + 1)} tiles z{Z}")
cx0, cy0 = x0 - tx0 * 256, y0 - ty0 * 256
img_el = Image.fromarray(mos.astype(np.float32), mode="F")
el = np.asarray(img_el.transform((W, H), Image.AFFINE, (1 / escala, 0, cx0, 0, 1 / escala, cy0), resample=Image.BICUBIC))

# 2 · o sombreado (dois sóis, noroeste e oeste, com o relevo exagerado 1,8×)
m_px = 156543.03 * math.cos(math.radians((LAT_TOPO + LAT_BASE) / 2)) / 2 ** Z / escala
gy, gx = np.gradient(el * 1.8, m_px)
inc = np.arctan(np.hypot(gx, gy))
asp = np.arctan2(-gx, gy)


def sombra(az, altd):
    az, alt_ = math.radians(az), math.radians(altd)
    return np.clip(np.sin(alt_) * np.cos(inc) + np.cos(alt_) * np.sin(inc) * np.cos(az - asp), 0, 1)


hs = 0.65 * sombra(315, 40) + 0.35 * sombra(270, 50)

# 3 · as cores: o relevo em tons naturais vivos, o mar em azul-marinho com a plataforma rasa mais clara
TINTA_TERRA = [(0, (150, 188, 112)), (120, (140, 180, 102)), (350, (160, 170, 96)), (750, (192, 166, 108)),
               (1300, (214, 188, 146)), (2200, (236, 224, 200))]


def rampa(v, pares):
    xs = [p[0] for p in pares]
    return np.stack([np.interp(v, xs, [p[1][i] for p in pares]) for i in range(3)], axis=-1)


terra = rampa(el, TINTA_TERRA) * (0.42 + 0.78 * hs)[..., None]


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


# a terra: acima de 2,5 m, e "aberta" (borra e corta) para tirar a fita de ruído que o dado deixa na linha da água
eh_terra = borrar(el > 2.5, 5) > 0.68
m_terra = borrar(eh_terra, 1.2)  # a beira suavizada, para a costa não serrilhar
# o mar: um azul-marinho só (a batimetria muda de fonte no quadro e deixava um retângulo), com a plataforma rasa mais clara
perto = borrar(eh_terra, 45)
mar = np.array((14, 25, 44), dtype=float) * (1 - perto[..., None]) + np.array((30, 52, 82), dtype=float) * perto[..., None]
base = mar * (1 - m_terra[..., None]) + terra * m_terra[..., None]

# 4 · a cidade: o polígono do Census em 2× (supersample), recortado pela costa do relevo
gj = json.load(open(GEO, encoding="utf-8"))
SS = 2
cid = Image.new("L", (W * SS, H * SS), 0)
dc = ImageDraw.Draw(cid)


def aneis(g):
    if g["type"] == "Polygon":
        yield g["coordinates"]
    elif g["type"] == "MultiPolygon":
        yield from g["coordinates"]


for f in gj["features"]:
    for poli in aneis(f["geometry"]):
        ext, *buracos = poli
        dc.polygon([tuple(c * SS for c in palco(*p)) for p in ext], fill=255)
        for b in buracos:
            dc.polygon([tuple(c * SS for c in palco(*p)) for p in b], fill=0)
cid = np.asarray(cid.resize((W, H), Image.LANCZOS)) / 255.0
# recorte pela costa "fechada" (os canais estreitos do porto contam como cidade, para o porto ler como um bloco)
fechada = borrar(eh_terra, 14) > 0.25
cid = cid * borrar(fechada, 1.2)
a_cid = Image.fromarray((cid * 255).astype(np.uint8))

# o contorno em --tinta (a cidade dilatada ~11 px) e a sombra escura deslocada, como um recorte em relevo
dil = np.clip(np.asarray(a_cid.filter(ImageFilter.GaussianBlur(9))) / 255.0 * 7.0, 0, 1)
somb = np.asarray(Image.fromarray((dil * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(16))) / 255.0
somb = np.roll(np.roll(somb, 10, axis=0), 6, axis=1)
out = base * (1 - 0.62 * somb[..., None])
TINTA = np.array((244, 241, 234), dtype=float)
DEST = np.array((245, 165, 36), dtype=float)
out = out * (1 - dil[..., None]) + TINTA * dil[..., None]
laranja = DEST * (0.70 + 0.42 * hs)[..., None]
out = out * (1 - cid[..., None]) + laranja * cid[..., None]

os.makedirs(SAIDA, exist_ok=True)
Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(os.path.join(SAIDA, "mapa.png"))

# 5 · os pontos para a seta e o anel: o meio da faixa e o porto (Main Channel, GNIS 245395, e o fim sul da cidade)
pontos = {
    "faixa": palco(-118.2835, 33.858),
    "porto": palco(-118.268, 33.738),
    "escala_px_por_km": 1000 / m_px,
}
json.dump(pontos, open(os.path.join(SAIDA, "mapa-pontos.json"), "w"), indent=1)
print("ok", os.path.join(SAIDA, "mapa.png"), json.dumps(pontos))
