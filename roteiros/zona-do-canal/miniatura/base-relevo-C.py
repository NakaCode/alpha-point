"""A base da miniatura C do vídeo 3 (o estilo "Maldivas": o anel que amplia um ponto): o relevo do istmo do Panamá, com a
Zona do Canal recortada por cima, e o recorte da foto que vai dentro da lupa.

    python roteiros/zona-do-canal/miniatura/base-relevo-C.py        (da raiz do canal)

O molde técnico é roteiros/los-angeles/miniatura/base-relevo.py (a miniatura D de Los Angeles).

O que é real aqui, e de onde vem:
- o relevo e a linha da costa: os Terrain Tiles da AWS Open Data (formato terrarium, zoom 12, ~38 m por pixel no Panamá), que
  ali vêm do SRTM (NASA/USGS) e, no mar, do ETOPO/GEBCO; domínio público. Um pedido por vez, com o User-Agent do canal; os tiles
  ficam em cache em out/zona-do-canal/_tmp/miniatura/terrario/ (compartilhado com as outras versões) e não se pedem de novo;
- a Zona do Canal: out/zona-do-canal/_media/geo/zona-do-canal-1947.json, o polígono tirado da divisa da folha "Canal Zone and
  Vicinity" do U.S. Army Map Service, 1:100,000, 1947 (LOC 83694755; a divisa em linhas é divisa-zona-1947.json, da mesma
  tinta). Inclui os lagos Gatún e Madden, como a folha os pinta; não inclui o mar de 3 milhas nem as ilhas do Pacífico. Obra
  federal dos EUA, domínio público. NÃO é a faixa-art2-5mi (esquema de 5 + 5 milhas sobre o eixo, que não é a divisa);
- o ponto de Balboa (o centro do anel): out/zona-do-canal/_media/geo/lugares-1936.json › balboa-clubhouse-1936
  (-79.558874, 8.954538), lido no "Road Map of Ancon, Balboa and Panama", 1:8000, outubro de 1936 (NARA 192812325, domínio
  público), com ±40–90 m de georreferência; a 20 px/km do palco, isso é menos de 2 px. Conferido contra o ponto do Estádio de
  Balboa do OSM (pontos-osm-hoje.json › balboa-estadio, -79.5589, 8.9573): 300 m ao norte, dentro do anel. O OSM não entra
  na imagem;
- a foto da lupa: out/zona-do-canal/_media/foto/s22/four-family-gold-quarters-nara-202800899.jpg, "Four-Family Type, Gold
  Quarters, Balboa, C. Z. September 1944" (NARA 202800899, RG 185, useRestriction "Unrestricted", obra federal). sha256
  6eebf16a…e052953, o mesmo do veredito "aprovado" do conferente-de-midia (conferencia-midia.json, cena s22). Só recortada
  (sem a legenda da borda) e com o contraste ajustado; nada acrescentado nem tirado.
Nada é desenhado à mão nem por IA. As cores são escolha de marca: o verde e o marrom do relevo, o azul-marinho do mar, a Zona em
--destaque com contorno --tinta e sombra.

Grava em out/zona-do-canal/_tmp/miniatura/C/: C-mapa.png (2560 × 1440, o palco), C-lupa.png (o recorte da foto) e
C-pontos.json (onde cai Balboa no palco, a escala, e a geometria do anel, da lupa e do cone para o miniatura-C.html).
"""
import io, json, math, os, time, urllib.request
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageOps

RAIZ = os.getcwd()
TMP = os.path.join(RAIZ, "out", "zona-do-canal", "_tmp", "miniatura")
SAIDA = os.path.join(TMP, "C")
CACHE = os.path.join(TMP, "terrario")
GEO = os.path.join(RAIZ, "out", "zona-do-canal", "_media", "geo")
FOTO = os.path.join(RAIZ, "out", "zona-do-canal", "_media", "foto", "s22", "four-family-gold-quarters-nara-202800899.jpg")
FOTO_SHA = "6eebf16adecc45e99aff6efc8eb7960ca321b2c23aeeac84d8ae0dba3e052953"
UA = "AlphaPoint-canal/1.0 (miniatura do video 3; contato.naka@hotmail.com)"
Z = 12
W, H = 2560, 1440

# o quadro: do Caribe (em cima, à esquerda) ao Pacífico (embaixo); a Zona atravessa na diagonal, Balboa embaixo, no meio
LAT_TOPO, LAT_BASE = 9.45, 8.80
LON_ESQ = -80.273

BALBOA = (-79.558874, 8.954538)  # lugares-1936.json › balboa-clubhouse-1936 (NARA 192812325)


def merc(lon, lat, z=Z):
    n = 256 * 2 ** z
    x = (lon + 180) / 360 * n
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * n
    return x, y


y0 = merc(0, LAT_TOPO)[1]
y1 = merc(0, LAT_BASE)[1]
alt = y1 - y0
larg = alt * W / H
x0 = merc(LON_ESQ, 0)[0]
x1 = x0 + larg
escala = W / larg  # pixels do palco por pixel z12


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
        tmp = p + f".{os.getpid()}.part"
        open(tmp, "wb").write(dados)
        os.replace(tmp, p)  # atômico: outra versão lendo o cache nunca vê meio arquivo
        time.sleep(0.2)
    a = np.asarray(Image.open(p).convert("RGB")).astype(np.float64)
    return a[..., 0] * 256 + a[..., 1] + a[..., 2] / 256 - 32768


# 1 · o mosaico do relevo, recortado no quadro e levado ao palco
tx0, tx1 = int(x0 // 256), int(x1 // 256)
ty0, ty1 = int(y0 // 256), int(y1 // 256)
mos = np.zeros(((ty1 - ty0 + 1) * 256, (tx1 - tx0 + 1) * 256))
novos = 0
for ty in range(ty0, ty1 + 1):
    for tx in range(tx0, tx1 + 1):
        if not os.path.isfile(os.path.join(CACHE, f"{Z}-{tx}-{ty}.png")):
            novos += 1
        mos[(ty - ty0) * 256:(ty - ty0 + 1) * 256, (tx - tx0) * 256:(tx - tx0 + 1) * 256] = tile(tx, ty)
print(f"relevo: {(tx1 - tx0 + 1) * (ty1 - ty0 + 1)} tiles z{Z} ({novos} pedidos, o resto do cache)")
cx0, cy0 = x0 - tx0 * 256, y0 - ty0 * 256
img_el = Image.fromarray(mos.astype(np.float32), mode="F")
el = np.asarray(img_el.transform((W, H), Image.AFFINE, (1 / escala, 0, cx0, 0, 1 / escala, cy0), resample=Image.BICUBIC))

# 2 · o sombreado (dois sóis, noroeste e oeste, com o relevo exagerado 2×: o istmo é baixo)
m_px = 156543.03 * math.cos(math.radians((LAT_TOPO + LAT_BASE) / 2)) / 2 ** Z / escala
gy, gx = np.gradient(el * 2.0, m_px)
inc = np.arctan(np.hypot(gx, gy))
asp = np.arctan2(-gx, gy)


def sombra(az, altd):
    az, alt_ = math.radians(az), math.radians(altd)
    return np.clip(np.sin(alt_) * np.cos(inc) + np.cos(alt_) * np.sin(inc) * np.cos(az - asp), 0, 1)


hs = 0.65 * sombra(315, 40) + 0.35 * sombra(270, 50)

# 3 · as cores: o relevo em tons naturais (o istmo é verde até uns 500 m), o mar em azul-marinho com a plataforma mais clara
TINTA_TERRA = [(0, (138, 182, 104)), (80, (128, 174, 96)), (250, (142, 168, 92)), (500, (176, 166, 104)),
               (900, (204, 184, 140)), (1500, (232, 220, 196))]


def rampa(v, pares):
    xs = [p[0] for p in pares]
    return np.stack([np.interp(v, xs, [p[1][i] for p in pares]) for i in range(3)], axis=-1)


terra = rampa(el, TINTA_TERRA) * (0.45 + 0.75 * hs)[..., None]


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


eh_terra = borrar(el > 1.5, 3) > 0.6
# só é mar a água ligada ao Caribe (canto de cima, à esquerda) ou ao Pacífico (canto de baixo, à direita): o mangue e o arrozal
# abaixo de 1,5 m, longe da costa, ficavam como lagos que não existem
agua = Image.fromarray(np.where(eh_terra, 0, 255).astype(np.uint8)).copy()  # cópia: a imagem que divide a memória do numpy não aceita o floodfill
for semente in ((0, 0), (W - 1, H - 1)):
    ImageDraw.floodfill(agua, semente, 128)
eh_terra = np.asarray(agua) != 128
m_terra = borrar(eh_terra, 1.2)
perto = borrar(eh_terra, 40)
mar = np.array((20, 36, 60), dtype=float) * (1 - perto[..., None]) + np.array((38, 64, 98), dtype=float) * perto[..., None]
base = mar * (1 - m_terra[..., None]) + terra * m_terra[..., None]

# 4 · a Zona: o polígono de 1947 em 2× (supersample), recortado pela costa do relevo ("fechada", para o canal e os portos
#     contarem como Zona e a faixa ler como um bloco)
gj = json.load(open(os.path.join(GEO, "zona-do-canal-1947.json"), encoding="utf-8"))
SS = 2
zona = Image.new("L", (W * SS, H * SS), 0)
dz = ImageDraw.Draw(zona)


def aneis(g):
    if g["type"] == "Polygon":
        yield g["coordinates"]
    elif g["type"] == "MultiPolygon":
        yield from g["coordinates"]


for f in gj["features"]:
    for poli in aneis(f["geometry"]):
        ext, *buracos = poli
        dz.polygon([tuple(c * SS for c in palco(*p)) for p in ext], fill=255)
        for b in buracos:
            dz.polygon([tuple(c * SS for c in palco(*p)) for p in b], fill=0)
zona = np.asarray(zona.resize((W, H), Image.LANCZOS)) / 255.0
fechada = borrar(eh_terra, 10) > 0.3
zona = zona * borrar(fechada, 1.2)
a_z = Image.fromarray((zona * 255).astype(np.uint8))

dil = np.clip(np.asarray(a_z.filter(ImageFilter.GaussianBlur(8))) / 255.0 * 7.0, 0, 1)
somb = np.asarray(Image.fromarray((dil * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(16))) / 255.0
somb = np.roll(np.roll(somb, 10, axis=0), 6, axis=1)
out = base * (1 - 0.6 * somb[..., None])
TINTA = np.array((244, 241, 234), dtype=float)
DEST = np.array((245, 165, 36), dtype=float)
out = out * (1 - dil[..., None]) + TINTA * dil[..., None]
laranja = DEST * (0.72 + 0.40 * hs)[..., None]
out = out * (1 - zona[..., None]) + laranja * zona[..., None]

os.makedirs(SAIDA, exist_ok=True)
Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(os.path.join(SAIDA, "C-mapa.png"))

# 5 · a foto da lupa: confere o sha256 do veredito, tira a legenda da borda e recorta o quadrado em volta da casa
import hashlib
sha = hashlib.sha256(open(FOTO, "rb").read()).hexdigest()
assert sha == FOTO_SHA, f"a foto não é a do veredito aprovado: {sha}"
foto = Image.open(FOTO).convert("L")  # 5000 × 4003; a legenda começa em y ≈ 3590
CX, CY, R = 2440, 1990, 1500  # a casa inteira, do telhado ao gramado, sem a legenda
foto = foto.crop((CX - R, CY - R, CX + R, CY + R)).resize((720, 720), Image.LANCZOS)
foto = ImageOps.autocontrast(foto, cutoff=0.6)
foto.save(os.path.join(SAIDA, "C-lupa.png"))

# 6 · a geometria do anel, da lupa e do cone (as tangentes externas dos dois círculos, calculadas)
bx, by = palco(*BALBOA)
ANEL_R = 112          # 224 px de diâmetro (embalagem.md §3)
LUPA = (560.0, 1030.0)
LUPA_R = 340.0        # o raio de fora da borda de 20 px


def tangentes(c1, r1, c2, r2):
    (ax, ay), (cx_, cy_) = c1, c2
    dx, dy = cx_ - ax, cy_ - ay
    d = math.hypot(dx, dy)
    base_ang = math.atan2(dy, dx)
    a = math.acos((r1 - r2) / d)
    res = []
    for s in (1, -1):
        t = base_ang + s * a
        res.append(((ax + r1 * math.cos(t), ay + r1 * math.sin(t)), (cx_ + r2 * math.cos(t), cy_ + r2 * math.sin(t))))
    return res


tg = tangentes((bx, by), ANEL_R, LUPA, LUPA_R)
pontos = {
    "balboa": [round(bx, 1), round(by, 1)],
    "escala_px_por_km": round(1000 / m_px, 2),
    "anel_r": ANEL_R,
    "lupa": list(LUPA), "lupa_r": LUPA_R,
    "cone": [[[round(v, 1) for v in p] for p in par] for par in tg],
    "colon_cristobal": [round(v, 1) for v in palco(-79.90, 9.355)],
}
json.dump(pontos, open(os.path.join(SAIDA, "C-pontos.json"), "w"), indent=1)
print("ok", os.path.join(SAIDA, "C-mapa.png"), json.dumps(pontos))
