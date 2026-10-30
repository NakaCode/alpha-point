"""A miniatura nova do vídeo 2 (Los Angeles), com o título "Why America's Second-Largest City Had No Coastline Until 1909".

    python -X utf8 -B out/los-angeles/_tmp/embalagem-2/base.py </dev/null        (da raiz do canal; sem rede)

O pedido (o Lucas, no chat, em 30/10/2026, com o vídeo já publicado): "Eu queria uma nova thumb e um novo título para o vídeo de Los
Angeles e para o do Panamá", e depois "apenas 1 thumb e 1 título para cada".

A IDEIA. O título guarda o nome (descreve a cidade) e dá o paradoxo (a cidade sem costa). A miniatura mostra o paradoxo sem dar o
porquê: Los Angeles como ela era em 1906, em --destaque, no meio de uma região cercada de mar (a baía de Santa Monica à esquerda, a de
San Pedro embaixo), com o braço comprido descendo até quase a água e parando antes dela. O anel da marca cai na ponta do braço, e a
pílula-herói diz "SO CLOSE", com a seta saindo dela até o anel. A miniatura não diz por que a cidade para ali (as duas outras cidades,
o porto, as votações): isso é o vídeo. Nenhum ano na tela (o "1906" brigaria com o "1909" do título, a lição do Juneau, embalagem §3.1).

DE ONDE VEM CADA COISA (nada desenhado à mão nem por IA; este script não tem código de rede):
- a base: out/los-angeles/_media/base/landsat-los-angeles-sangria1400.png, o Landsat 8 de 09/04/2024 (USGS, Collection 2 Level-2,
  LC08_L2SP_041036_20240409_02_T1 e LC08_L2SP_041037_20240409_02_T1, pelo Planetary Computer), domínio público, sem crédito na tela
  (_PROCEDENCIA.json da pasta). EPSG:3857, janela [-13239394, 3957303, -13091005, 4068148], 4150 × 3100;
- a cidade: out/los-angeles/_media/geo/la-1906-hamlin.json (o contorno de 26/12/1906, com a faixa, redesenhado do mapa de anexações
  de Hamlin; registrado em out/los-angeles/_pesquisa/pauta-geo.json). Nenhuma camada do OpenStreetMap nem da MapTiler.

A receita: marca/embalagem.md §1.1 e §3 (a com pílula): o mapa protagonista, o território em cor forte com contorno claro, uma caixa
escura com 2 palavras e uma colorida, a seta curva branca e o anel. Palco 2560 × 1440; envio 1280 × 720.

Grava em out/los-angeles/_tmp/embalagem-2/: miniatura-2560.png, miniatura-1280.jpg (≤ 2 MB), miniatura-320.png, miniatura-168.png,
_ver-168x4.png e pontos.json (as conferências).
"""
import json, math, os
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter, ImageFont

RAIZ = os.getcwd()
SAIDA = os.path.join(RAIZ, "out", "los-angeles", "_tmp", "embalagem-2", "sem-nome")
GEO = os.path.join(RAIZ, "out", "los-angeles", "_media", "geo")
BASE = os.path.join(RAIZ, "out", "los-angeles", "_media", "base", "landsat-los-angeles-sangria1400.png")
FONTES = os.path.join(RAIZ, "marca", "fontes")
W, H = 2560, 1440
SS = 2
R = 6378137.0

# a base Landsat (EPSG:3857)
BX0, BY0, BX1, BY1 = -13239394.0, 3957303.0, -13091005.0, 4068148.0
BW, BH = 4150, 3100
BMPP = (BX1 - BX0) / BW
assert abs((BY1 - BY0) / BH - BMPP) < 0.05


def merc(lon, lat):
    return R * math.radians(lon), R * math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))


# o quadro: de lat 33.665 a 34.140 na altura (a cidade de 1906 inteira, com folga em cima); a longitude -118.25 (o meio da cidade de 1906) em x = 1560
LAT_BASE, LAT_TOPO = 33.665, 34.140
_, Y0 = merc(0, LAT_BASE)
_, Y1 = merc(0, LAT_TOPO)
MPP = (Y1 - Y0) / H
XC, _ = merc(-118.25, 0)
X0 = XC - 1560 * MPP
X1 = X0 + W * MPP
assert X0 >= BX0 and X1 <= BX1 and Y0 >= BY0 and Y1 <= BY1, "o quadro sai da base Landsat"

TINTA = np.array((244, 241, 234), float)       # --tinta
DEST = np.array((245, 165, 36), float)         # --destaque
ROTULO = (11, 15, 20, int(0.88 * 255))         # --rotulo
ESCURO = (4, 8, 16)


def palco(lon, lat, s=1):
    x, y = merc(lon, lat)
    return ((x - X0) / MPP * s, (Y1 - y) / MPP * s)


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


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


def compor(img, cor, a):
    return img * (1 - a[..., None]) + np.asarray(cor, float)[None, None, :3] * a[..., None]


# 1 · a base: o recorte do Landsat no quadro, ao palco, com o filtro da receita (brightness .9, contrast 1.05) e um pouco mais de cor
b = Image.open(BASE).convert("RGB")
cx0, cy0 = (X0 - BX0) / BMPP, (BY1 - Y1) / BMPP
cx1, cy1 = (X1 - BX0) / BMPP, (BY1 - Y0) / BMPP
b = b.resize((W, H), Image.LANCZOS, box=(cx0, cy0, cx1, cy1))
img = np.asarray(b).astype(float) / 255.0
lum0 = img @ np.array([0.2126, 0.7152, 0.0722])
cinza = lum0[..., None]
img = np.clip(cinza + (img - cinza) * 1.25, 0, 1)                      # saturação 1,25 (o Landsat da cidade é cinza-bege)
img = np.clip(((img ** 0.78 * 0.9) - 0.5) * 1.05 + 0.5, 0, 1) * 255.0   # rodada 2: gama 0,78 (a 1ª saiu com luma média 64, escura no feed)
lum = img @ np.array([0.2126, 0.7152, 0.0722])

# 2 · a cidade de 1906 em --destaque, com a textura da base por baixo (a luminância local modula o laranja); fora dela, a base a 90 %
fc06 = ler("la-1906-hamlin.json")
cid = mascara(fc06)
img = img * (0.90 + 0.10 * cid)[..., None]
lm = float(lum[cid > 0.5].mean())
mod = np.clip(0.80 + 0.30 * (lum / lm), 0.72, 1.12)
img = img * (1 - 0.90 * cid[..., None]) + (DEST[None, None, :] * mod[..., None]) * (0.90 * cid[..., None])

# 3 · o contorno em --tinta (a cidade dilatada ~10 px por fora) e a sombra escura deslocada, como um recorte
dil = np.clip(borrar(cid, 7) * 6.0, 0, 1)
borda = np.clip(dil - cid, 0, 1)
somb = np.roll(np.roll(borrar(dil, 14), 12, axis=0), 7, axis=1)
img = compor(img, ESCURO, 0.62 * somb * (1 - dil))
img = compor(img, TINTA, borda)

# 4 · a vinheta: até 35 % de preto nas bordas
yy, xx = np.mgrid[0:H, 0:W]
dn = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / math.sqrt(2)
img = img * (1 - 0.35 * np.clip((dn - 0.45) / 0.55, 0, 1) ** 1.6)[..., None]
base = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).convert("RGBA")

# 5 · as peças da receita, em supersample 2×
K = 2
cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
somb_l = Image.new("L", (W * K, H * K), 0)
dc, ds = ImageDraw.Draw(cam), ImageDraw.Draw(somb_l)

# 5a · o anel na ponta do braço (o vértice mais ao sul do contorno de 1906: -118.29204, 33.74502), um pouco a leste dela, para
#      mostrar no furo a ponta e, a leste dela, a água do porto de hoje
PONTA = (-118.29204, 33.74502)
TX, TY = palco(*PONTA)
LX, LY = TX + 24, TY + 8   # rodada 3: a ponta dentro do furo do anel, à esquerda, e a água de hoje à direita (a 34 px ao sul, o traço do anel cobria a ponta)
RA = 112 - 19
for rr, lw, cor in ((RA, 38 + 10, ESCURO + (255,)), (RA, 38, tuple(DEST.astype(int)) + (255,))):
    dc.ellipse([(LX - rr) * K, (LY - rr) * K, (LX + rr) * K, (LY + rr) * K], outline=cor, width=int(lw * K))
ds.ellipse([(LX - RA) * K, (LY - RA) * K, (LX + RA) * K, (LY + RA) * K], outline=200, width=int(60 * K))

# 5a2 · o nome do lugar (rodada 2): "Los Angeles", Inter 700, 96 px, na pílula --rotulo, à direita do miolo da cidade. O título
#       descreve a cidade sem o nome (o molde do Geoff); a miniatura dá o nome, para quem não liga "second-largest" a LA
inter = ImageFont.truetype(os.path.join(FONTES, "inter", "Inter-VF.ttf"), 96 * K)
inter.set_variation_by_name("Bold")
nome = "Los Angeles"
bb = inter.getbbox(nome)
PADX, PADY = 40, 22
nw, nh = (bb[2] - bb[0]) / K + 2 * PADX, (bb[3] - bb[1]) / K + 2 * PADY
cx_dir = int(np.nonzero(cid.max(0) > 0.5)[0].max())
nx0 = cx_dir + 70
ny0 = palco(0, 34.035)[1] - nh / 2
MOSTRAR_NOME = False  # Lucas, 30/10/2026: "Novo, sem o nome na miniatura" (a pílula "Los Angeles" não se desenha, como na A2 do Atlântico)
if MOSTRAR_NOME:
    dc.rounded_rectangle([nx0 * K, ny0 * K, (nx0 + nw) * K, (ny0 + nh) * K], radius=24 * K, fill=ROTULO)
    ds.rounded_rectangle([nx0 * K, ny0 * K, (nx0 + nw) * K, (ny0 + nh) * K], radius=24 * K, fill=170)
    dc.text(((nx0 + PADX) * K - bb[0], (ny0 + PADY) * K - bb[1]), nome, font=inter, fill=tuple(TINTA.astype(int)) + (255,))

# 5b · a pílula-herói em duas linhas, à esquerda, sobre a baía de Santa Monica: Barlow Condensed 800, 300 px, CLOSE em --destaque
barlow = ImageFont.truetype(os.path.join(FONTES, "barlowcondensed", "BarlowCondensed-ExtraBold.ttf"), 1)
T = tuple(TINTA.astype(int))
D = tuple(DEST.astype(int))
LINHAS = [[("SO", T)], [("CLOSE", D)]]
TXT = " / ".join("".join(p for p, _ in l) for l in LINHAS)
FS = 300
barlow = barlow.font_variant(size=FS * K)
tb = barlow.getbbox("SO CLOSE")
HPX, HPY, GAP = 56, 38, 26
hh = (tb[3] - tb[1]) / K + 2 * HPY
larguras = [sum(barlow.getlength(p) for p, _ in l) / K + 2 * HPX for l in LINHAS]
bloco_h = len(LINHAS) * hh + GAP * (len(LINHAS) - 1)
hx0 = 130
hy0 = 150
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
hy1 = caixas[-1][3]

# 5c · a seta: --tinta, traço 34, pontas redondas, sombra; sai de baixo da pílula, desce e varre para a direita até o anel, chegando
#      pela esquerda
p0 = (hx0 + larguras[-1] * 0.42, hy1 + 34)
alvo_ang = math.radians(196)
p3 = (LX + (112 + 34) * math.cos(alvo_ang), LY - (112 + 34) * math.sin(alvo_ang))
p1 = (p0[0] - 10, p0[1] + 330)
p2 = (p3[0] - 420, p3[1] + 40)
curva = []
for i in range(161):
    t = i / 160
    x = (1 - t) ** 3 * p0[0] + 3 * (1 - t) ** 2 * t * p1[0] + 3 * (1 - t) * t * t * p2[0] + t ** 3 * p3[0]
    y = (1 - t) ** 3 * p0[1] + 3 * (1 - t) ** 2 * t * p1[1] + 3 * (1 - t) * t * t * p2[1] + t ** 3 * p3[1]
    curva.append((x, y))
comp_seta = sum(math.dist(curva[i], curva[i + 1]) for i in range(160))
dx, dy = curva[-1][0] - curva[-8][0], curva[-1][1] - curva[-8][1]
ang = math.atan2(dy, dx)
ponta = [(p3[0] - 92 * math.cos(ang + s * math.radians(38)), p3[1] - 92 * math.sin(ang + s * math.radians(38))) for s in (-1, 1)]
seta = np.zeros((H * K, W * K), np.uint8)
for seg in (curva, [ponta[0], p3], [ponta[1], p3]):
    pts = np.array([[round(x * K * 16), round(y * K * 16)] for x, y in seg], np.int32)
    cv2.polylines(seta, [pts], False, 255, thickness=34 * K, lineType=cv2.LINE_AA, shift=4)
seta_l = Image.fromarray(seta)
somb_l.paste(220, (0, 0), seta_l)
cam_seta = Image.new("RGBA", (W * K, H * K), T + (0,))
cam_seta.putalpha(seta_l)

# 5d · a sombra difusa sob as peças, e a composição
sombra = somb_l.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(16))
sombra = Image.fromarray(np.roll(np.roll(np.asarray(sombra), 10, 0), 6, 1))
camada_sombra = Image.new("RGBA", (W, H), ESCURO + (0,))
camada_sombra.putalpha(sombra.point(lambda v: int(v * 0.75)))
final = Image.alpha_composite(base, camada_sombra)
final = Image.alpha_composite(final, cam_seta.resize((W, H), Image.LANCZOS))
final = Image.alpha_composite(final, cam.resize((W, H), Image.LANCZOS)).convert("RGB")

final.save(os.path.join(SAIDA, "miniatura-2560.png"))
m1280 = final.resize((1280, 720), Image.LANCZOS)
q = 95
while True:
    m1280.save(os.path.join(SAIDA, "miniatura-1280.jpg"), quality=q, subsampling=0, optimize=True)
    if os.path.getsize(os.path.join(SAIDA, "miniatura-1280.jpg")) <= 2 * 1024 * 1024 or q <= 70:
        break
    q -= 5
final.resize((320, 180), Image.LANCZOS).save(os.path.join(SAIDA, "miniatura-320.png"))
p168 = final.resize((168, 94), Image.LANCZOS)
p168.save(os.path.join(SAIDA, "miniatura-168.png"))
p168.resize((672, 376), Image.NEAREST).save(os.path.join(SAIDA, "_ver-168x4.png"))

# 6 · as conferências
alpha = np.asarray(cam.resize((W, H)).split()[3])
CANTO = (W - 320, H - 320)
km_px = 1000 / (MPP * math.cos(math.radians((LAT_BASE + LAT_TOPO) / 2)))
pontos = {
    "quadro": {"bbox_epsg3857_m": [round(X0), round(Y0), round(X1), round(Y1)], "m3857_por_px": round(MPP, 2),
               "px_por_km": round(km_px, 2), "lon": [round(math.degrees(X0 / R), 4), round(math.degrees(X1 / R), 4)],
               "lat": [LAT_BASE, LAT_TOPO]},
    "ponta_1906_palco": [round(TX, 1), round(TY, 1)],
    "anel_centro": [round(LX, 1), round(LY, 1)],
    "cidade_caixa_palco": [int(np.nonzero(cid.max(0) > 0.5)[0].min()), int(np.nonzero(cid.max(1) > 0.5)[0].min()),
                           int(np.nonzero(cid.max(0) > 0.5)[0].max()), int(np.nonzero(cid.max(1) > 0.5)[0].max())],
    "faixa_largura_px_em_33_85": None,
    "seta_comprimento_px": round(comp_seta),
    "heroi": {"texto": TXT, "fonte_px": FS, "caixas": [[round(v) for v in c] for c in caixas],
              "fracao_sobre_a_cidade": round(float(max(cid[int(c[1]):int(c[3]), int(c[0]):int(c[2])].mean() for c in caixas)), 4)},
    "canto_duracao_320": {"caixa": [CANTO[0], CANTO[1], W, H], "sem_pecas": not bool(alpha[CANTO[1]:, CANTO[0]:].max() > 10),
                          "fracao_cidade": round(float((cid[CANTO[1]:, CANTO[0]:] > 0.5).mean()), 4)},
    "jpg_1280_bytes": os.path.getsize(os.path.join(SAIDA, "miniatura-1280.jpg")), "jpg_qualidade": q,
    "pedidos_de_rede": 0,
}
row = int(round(palco(-118.29, 33.85)[1]))
pontos["faixa_largura_px_em_33_85"] = int((cid[row] > 0.5).sum())
json.dump(pontos, open(os.path.join(SAIDA, "pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(pontos, ensure_ascii=False))
