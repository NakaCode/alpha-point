"""A base da miniatura do vídeo 3, versão A (o estilo "Gâmbia"): o Panamá em relevo, com a Zona do Canal pintada por cima.

    python roteiros/zona-do-canal/miniatura/base-relevo-A.py        (da raiz do canal)

Pedido (16/10/2026): o ângulo novo do canal (marca/embalagem.md §1.1), o mapa como protagonista, o território pintado de cor
forte com contorno claro. O molde técnico é roteiros/los-angeles/miniatura/base-relevo.py.

O que é real aqui, e de onde vem:
- o relevo e a linha da costa: os Terrain Tiles da AWS Open Data (formato terrarium, zoom 10, ~150 m por pixel; fora dos EUA
  vêm do SRTM e do GMTED, em domínio público). Um pedido por vez, com o User-Agent do canal; os tiles ficam em cache em
  out/zona-do-canal/_tmp/miniatura/terrario/ (compartilhado pelas versões) e não se pedem de novo;
- a divisa do Panamá com a Costa Rica e com a Colômbia: Natural Earth 10m admin-0, domínio público (os polígonos da Costa
  Rica e da Colômbia, lidos de C:/projetos/regie-v1/acervo/geojson/ne10m-admin0-countries.json); a costa é a do próprio relevo;
- a Zona do Canal: out/zona-do-canal/_media/geo/zona-do-canal-1947.json, o polígono traçado da divisa da folha do U.S. Army
  Map Service "Canal Zone and Vicinity", 1:100,000 (1947; LOC 83694755), com os lagos Gatún e Madden como a folha os pinta e
  sem o mar de 3 milhas. Panamá e Colón ficam fora dele, como no tratado. NÃO é a faixa-esquema de 5 + 5 milhas.
Nada é desenhado à mão nem por IA. As cores são escolha de marca: os tons do relevo, o mar azul-marinho, o vizinho (Costa Rica,
Colômbia) mais escuro e apagado, a Zona em --destaque com contorno em --tinta e sombra.

Grava out/zona-do-canal/_tmp/miniatura/A-mapa.png (2560 × 1440) e A-mapa-pontos.json (onde caem, em pixels do palco, a Zona,
Colón e Balboa, para as setas do miniatura-A.html).
"""
import json, math, os, time, urllib.request
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

RAIZ = os.getcwd()
SAIDA = os.path.join(RAIZ, "out", "zona-do-canal", "_tmp", "miniatura")
CACHE = os.path.join(SAIDA, "terrario")
GEO = os.path.join(RAIZ, "out", "zona-do-canal", "_media", "geo")
UA = "AlphaPoint-canal/1.0 (miniatura do video 3; contato.naka@hotmail.com)"
Z = 10
W, H = 2560, 1440

# o quadro: o meio do istmo, de Veraguas a San Blas (as duas pontas do país saem, para a Zona ler em 168 px; a 1ª tentativa,
# com o istmo inteiro, de -83,05 a -77,65, deixou a Zona com ~10 px na lateral), com o Caribe no alto para a caixa
LON_W, LON_E = float(os.environ.get("LON_W", -81.9)), float(os.environ.get("LON_E", -78.3))
LAT_TOPO = float(os.environ.get("LAT_TOPO", 10.0))


def merc(lon, lat, z=Z):
    n = 256 * 2 ** z
    x = (lon + 180) / 360 * n
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * n
    return x, y


x0, y0 = merc(LON_W, LAT_TOPO)
x1 = merc(LON_E, 0)[0]
escala = W / (x1 - x0)
y1 = y0 + H / escala


def palco(lon, lat):
    x, y = merc(lon, lat)
    return ((x - x0) * escala, (y - y0) * escala)


def tile(tx, ty):
    os.makedirs(CACHE, exist_ok=True)
    p = os.path.join(CACHE, f"{Z}-{tx}-{ty}.png")
    for _ in range(3):
        if os.path.isfile(p):
            try:
                a = np.asarray(Image.open(p).convert("RGB")).astype(np.float64)
                return a[..., 0] * 256 + a[..., 1] + a[..., 2] / 256 - 32768
            except Exception:
                time.sleep(2)  # outra versão pode estar gravando; espera e relê
                continue
        url = f"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{Z}/{tx}/{ty}.png"
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=60) as r:
            dados = r.read()
        tmp = f"{p}.{os.getpid()}.tmp"
        open(tmp, "wb").write(dados)
        os.replace(tmp, p)  # grava inteiro de uma vez: outra versão nunca lê meio arquivo
        time.sleep(0.2)
    raise SystemExit(f"tile ilegível: {p}")


# 1 · o mosaico do relevo, recortado no quadro e levado ao palco
tx0, tx1 = int(x0 // 256), int(x1 // 256)
ty0, ty1 = int(y0 // 256), int(y1 // 256)
novos = sum(not os.path.isfile(os.path.join(CACHE, f"{Z}-{tx}-{ty}.png"))
            for tx in range(tx0, tx1 + 1) for ty in range(ty0, ty1 + 1))
mos = np.zeros(((ty1 - ty0 + 1) * 256, (tx1 - tx0 + 1) * 256))
for ty in range(ty0, ty1 + 1):
    for tx in range(tx0, tx1 + 1):
        mos[(ty - ty0) * 256:(ty - ty0 + 1) * 256, (tx - tx0) * 256:(tx - tx0 + 1) * 256] = tile(tx, ty)
print(f"relevo: {(tx1 - tx0 + 1) * (ty1 - ty0 + 1)} tiles z{Z} ({novos} pedidos novos)")
cx0, cy0 = x0 - tx0 * 256, y0 - ty0 * 256
img_el = Image.fromarray(mos.astype(np.float32), mode="F")
el = np.asarray(img_el.transform((W, H), Image.AFFINE, (1 / escala, 0, cx0, 0, 1 / escala, cy0), resample=Image.BICUBIC))

# 2 · o sombreado (dois sóis, noroeste e oeste, com o relevo exagerado)
m_px = 156543.03 * math.cos(math.radians(8.6)) / 2 ** Z / escala
gy, gx = np.gradient(el * float(os.environ.get("EXAGERO", 2.6)), m_px)
inc = np.arctan(np.hypot(gx, gy))
asp = np.arctan2(-gx, gy)


def sombra(az, altd):
    az, alt_ = math.radians(az), math.radians(altd)
    return np.clip(np.sin(alt_) * np.cos(inc) + np.cos(alt_) * np.sin(inc) * np.cos(az - asp), 0, 1)


hs = 0.65 * sombra(315, 40) + 0.35 * sombra(270, 50)

TINTA_TERRA = [(0, (150, 188, 112)), (150, (140, 180, 102)), (500, (160, 170, 96)), (1100, (192, 166, 108)),
               (2000, (214, 188, 146)), (3200, (236, 224, 200))]


def rampa(v, pares):
    xs = [p[0] for p in pares]
    return np.stack([np.interp(v, xs, [p[1][i] for p in pares]) for i in range(3)], axis=-1)


terra = rampa(el, TINTA_TERRA) * (0.42 + 0.78 * hs)[..., None]


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


eh_terra = borrar(el > 1.5, 3) > 0.6
m_terra = borrar(eh_terra, 1.2)
perto = borrar(eh_terra, 40)
mar = np.array((16, 30, 52), dtype=float) * (1 - perto[..., None]) + np.array((34, 60, 94), dtype=float) * perto[..., None]


def rasterizar_feature(*feats):
    SS = 2
    img = Image.new("L", (W * SS, H * SS), 0)
    d = ImageDraw.Draw(img)
    for f in feats:
        g = f["geometry"]
        polis = [g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]
        for poli in polis:
            ext, *buracos = poli
            d.polygon([tuple(c * SS for c in palco(*p)) for p in ext], fill=255)
            for b in buracos:
                d.polygon([tuple(c * SS for c in palco(*p)) for p in b], fill=0)
    return np.asarray(img.resize((W, H), Image.LANCZOS)) / 255.0


def rasterizar(arquivo):
    return rasterizar_feature(*json.load(open(os.path.join(GEO, arquivo), encoding="utf-8"))["features"])


# 3 · o Panamá e o vizinho: a terra do relevo que cai na Costa Rica ou na Colômbia do Natural Earth (acervo da pré-v1, só
#     leitura) fica apagada; o resto da terra do quadro é o Panamá (assim as ilhas pequenas, que o NE simplifica, contam como dele)
NE_PAISES = "C:/projetos/regie-v1/acervo/geojson/ne10m-admin0-countries.json"
viz = np.zeros((H, W))
for f in json.load(open(NE_PAISES, encoding="utf-8"))["features"]:
    if f["properties"].get("ADM0_A3") in ("CRI", "COL"):
        viz = np.maximum(viz, rasterizar_feature(f))
viz = np.clip(borrar(viz, 1.5) * 1.3, 0, 1)
viz_terra = viz * m_terra
pan_terra = (1 - viz) * m_terra
cinza = terra.mean(axis=-1, keepdims=True)
vizinho = (terra * 0.35 + cinza * 0.65) * 0.55
base = mar * (1 - m_terra[..., None]) + terra * pan_terra[..., None] + vizinho * viz_terra[..., None]

# 4 · a Zona: o polígono de 1947, recortado pela costa "fechada" do relevo (os lagos e o canal contam como Zona)
zona = rasterizar("zona-do-canal-1947.json")
fechada = borrar(eh_terra, 10) > 0.25
zona = zona * borrar(fechada, 1.2)
a_z = Image.fromarray((zona * 255).astype(np.uint8))
R_CONT = float(os.environ.get("R_CONT", 9))
dil = np.clip(np.asarray(a_z.filter(ImageFilter.GaussianBlur(R_CONT))) / 255.0 * 6.0, 0, 1)
somb = np.asarray(Image.fromarray((dil * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(18))) / 255.0
somb = np.roll(np.roll(somb, 12, axis=0), 7, axis=1)
out = base * (1 - 0.65 * somb[..., None])
TINTA = np.array((244, 241, 234), dtype=float)
DEST = np.array((245, 165, 36), dtype=float)
out = out * (1 - dil[..., None]) + TINTA * dil[..., None]
laranja = DEST * (0.78 + 0.30 * hs)[..., None]
out = out * (1 - zona[..., None]) + laranja * zona[..., None]

os.makedirs(SAIDA, exist_ok=True)
Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(os.path.join(SAIDA, "A-mapa.png"))

ys, xs = np.nonzero(zona > 0.5)
pontos = {
    "zona_bbox": [int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())],
    "zona_centro": [round(float(xs.mean()), 1), round(float(ys.mean()), 1)],
    "colon": palco(-79.90, 9.36),
    "balboa": palco(-79.565, 8.955),
    "px_por_km": 1000 / m_px,
    "quadro": {"lon": [LON_W, LON_E], "lat_topo": LAT_TOPO},
}
json.dump(pontos, open(os.path.join(SAIDA, "A-mapa-pontos.json"), "w"), indent=1)
print("ok", os.path.join(SAIDA, "A-mapa.png"), json.dumps(pontos))
