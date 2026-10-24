"""A miniatura A do vídeo 4 (Peru, "Why Peru Lives on the Dry Side of the Andes"): O CONTRASTE.

    python -X utf8 -B out/peru-agua/_tmp/miniatura/A/base-A.py        (da raiz do canal; sem rede)

A IDEIA. O Peru visto de cima, partido pela divisória dos Andes: o lado do Pacífico (estreito, seco, onde vive a maioria) pintado
de --destaque, o protagonista; o lado da Amazônia (largo, verde, onde está a água) no satélite, com os rios em --agua. Lima, no lado
seco, marcada pela receita com pílula (marca/embalagem.md §3): o anel, o ponto, o nome e a seta que sai da pílula-herói. A pílula
faz a pergunta que o título deixa aberta, sem dar a resposta (o porquê): "AND THE WATER?", com WATER em --agua, a cor dos rios.

DE ONDE VEM CADA COISA (nada desenhado à mão nem por IA):
- a base: NASA Blue Marble Next Generation com relevo sombreado e batimetria (camada BlueMarble_ShadedRelief_Bathymetry da NASA
  GIBS, WMS oficial, EPSG:3857), baixada por baixar-base-A.py num pedido só, com o User-Agent do canal
  (_base/bmng-relevo-batimetria-5120-w99.jpg e o .json ao lado, com URL e sha256). A 1ª rodada usou a BlueMarble_NextGeneration
  sem relevo (_base/bmng-peru-5120-w99.jpg): o mar saiu preto, a metade esquerda virou mancha, e os Andes ficaram lisos.
  Domínio público (imagem da NASA); o crédito vai na descrição, não na tela. Este script não tem código de rede;
- o Peru: _media/geo/peru-ne.json (Natural Earth 1:10m, domínio público);
- o lado do Pacífico e a divisória: _media/geo/vertente-pacifico.json e divisoria-continental-peru.json (HydroBASINS v1c nível 6,
  recortado pelo peru-ne; licença HydroSHEDS v1, aceita pelo Lucas em 22/10/2026; o Exhibit B vai na descrição, nada na tela);
- os rios: _media/geo/rios-vertente-atlantico.json e amazonas-ate-o-atlantico.json (Natural Earth 1:10m, domínio público). Nenhuma
  camada do OpenStreetMap (pediria o crédito na tela);
- Lima: _media/geo/cidades-peru-ne.json (Natural Earth, -77.052008, -12.046067).

Grava em out/peru-agua/_tmp/miniatura/A/: miniatura-A-2560.png, miniatura-A-1280.jpg (≤ 2 MB), miniatura-A-320.png,
miniatura-A-168.png e A-pontos.json (as conferências).
"""
import json, math, os
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter, ImageFont

RAIZ = os.getcwd()
AQUI = os.path.join(RAIZ, "out", "peru-agua", "_tmp", "miniatura", "A")
GEO = os.path.join(RAIZ, "out", "peru-agua", "_media", "geo")
FONTES = os.path.join(RAIZ, "marca", "fontes")
W, H = 2560, 1440
SS = 2  # supersample das camadas vetoriais

# o quadro: o mesmo bbox do pedido à GIBS (EPSG:3857, metros); 72 px por grau de longitude no palco
R = 6378137.0
X0, X1, Y0, Y1 = -11076290.0, -7118290.0, -2137340.0, 89060.0
MPP = (X1 - X0) / W
assert abs((Y1 - Y0) / H - MPP) < 1.0

# a marca (marca/tokens.css)
TINTA = np.array((244, 241, 234), float)       # --tinta
DEST = np.array((245, 165, 36), float)         # --destaque
AGUA = (175, 216, 246)                         # --agua
ROTULO = (11, 15, 20, int(0.88 * 255))         # --rotulo
ESCURO = (4, 8, 16)


def palco(lon, lat, s=1):
    x = R * math.radians(lon)
    y = R * math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))
    return ((x - X0) / MPP * s, (Y1 - y) / MPP * s)


def ler(nome):
    return json.load(open(os.path.join(GEO, nome), encoding="utf-8"))


def aneis(geom):
    if geom["type"] == "Polygon":
        return [geom["coordinates"]]
    if geom["type"] == "MultiPolygon":
        return geom["coordinates"]
    return []


def linhas(geom):
    if geom["type"] == "LineString":
        return [geom["coordinates"]]
    if geom["type"] == "MultiLineString":
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


def tracos(fc, larg, filtro=lambda f: True):
    """as linhas de um FeatureCollection como máscara (0..1), com a largura em px do palco"""
    im = Image.new("L", (W * SS, H * SS), 0)
    d = ImageDraw.Draw(im)
    for f in fc["features"]:
        if not filtro(f):
            continue
        lw = larg(f) if callable(larg) else larg
        for ln in linhas(f["geometry"]):
            pts = [palco(*p, SS) for p in ln]
            d.line(pts, fill=255, width=int(lw * SS), joint="curve")
            r = lw * SS / 2
            for p in (pts[0], pts[-1]):
                d.ellipse([p[0] - r, p[1] - r, p[0] + r, p[1] + r], fill=255)
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


def compor(img, cor, a):
    return img * (1 - a[..., None]) + np.asarray(cor, float)[None, None, :3] * a[..., None]


# 1 · a base: a Blue Marble, ao palco, com o filtro da receita (brightness .9, saturate 1, contrast 1.05)
b = Image.open(os.path.join(AQUI, "_base", "bmng-relevo-batimetria-5120-w99.jpg")).convert("RGB").resize((W, H), Image.LANCZOS)
img = np.asarray(b).astype(float) / 255.0
img = np.clip(((img * 0.9) - 0.5) * 1.05 + 0.5, 0, 1) * 255.0
lum = img @ np.array([0.2126, 0.7152, 0.0722])

# 2 · o Peru e os vizinhos: fora do Peru, a base cai a 62 % (o Peru salta); dentro, como está
peru_fc = ler("peru-ne.json")
peru = mascara(peru_fc)
img = img * (0.66 + 0.56 * peru)[..., None]  # rodada 2: dentro do Peru, 1,22× (o verde da Amazônia saía escuro demais em 168 px)

# 3 · o lado do Pacífico em --destaque, com o relevo da base por baixo (a luminância local modula o laranja)
pac_fc = ler("vertente-pacifico.json")
pac = mascara(pac_fc) * peru
lm = float(lum[pac > 0.5].mean())
sombra_rel = np.clip(0.62 + 0.42 * (lum / lm), 0.55, 1.18)
laranja = DEST[None, None, :] * sombra_rel[..., None]
img = img * (1 - 0.80 * pac[..., None]) + laranja * (0.80 * pac[..., None])

# 4 · os rios do lado da água, em --agua, com um filete escuro por baixo (lê sobre o verde e sobre o cinza dos vizinhos)
rios_fc = ler("rios-vertente-atlantico.json")
amaz_fc = ler("amazonas-ate-o-atlantico.json")
PRINCIPAIS = {"Amazonas", "Ucayali", "Marañón"}
larg_rio = lambda f: 15 if f["properties"].get("name") in PRINCIPAIS else 10  # rodada 2: de 11/7 para 15/10 (sumiam em 168 px)
rios = np.maximum(tracos(rios_fc, larg_rio), tracos(amaz_fc, 15))
rios_casco = np.maximum(tracos(rios_fc, lambda f: larg_rio(f) + 6), tracos(amaz_fc, 21))
img = compor(img, ESCURO, 0.55 * rios_casco)
img = compor(img, AGUA, rios)

# 5 · a divisória (Pacífico × Atlântico e Pacífico × Titicaca: a borda de dentro do lado seco) e o contorno do Peru, em --tinta,
#     com sombra deslocada
div_fc = ler("divisoria-continental-peru.json")
div = tracos(div_fc, 8, lambda f: f["properties"]["entre"].startswith("pacifico"))
borda = contorno(peru_fc, 10)
linhas_tinta = np.maximum(div, borda)
somb = np.roll(np.roll(borrar(linhas_tinta, 7), 6, axis=0), 4, axis=1)
img = compor(img, ESCURO, 0.70 * np.clip(somb * 2.2, 0, 1) * (1 - linhas_tinta))
img = compor(img, TINTA, linhas_tinta)

# 6 · a vinheta: até 35 % de preto nas bordas
yy, xx = np.mgrid[0:H, 0:W]
dn = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / math.sqrt(2)
img = img * (1 - 0.35 * np.clip((dn - 0.45) / 0.55, 0, 1) ** 1.6)[..., None]

base = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).convert("RGBA")

# 7 · as peças da receita, em supersample 2× (camada RGBA por cima)
K = 2
cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
somb_l = Image.new("L", (W * K, H * K), 0)  # a sombra difusa de todas as peças
dc, ds = ImageDraw.Draw(cam), ImageDraw.Draw(somb_l)

lima = palco(-77.052008, -12.046067)
LX, LY = lima

# 7a · o anel (224 px, traço 38, --destaque, contorno escuro de 5 px por dentro e por fora) e o ponto branco de 34 px
RA = 112 - 19  # raio do meio do traço
for rr, lw, cor in ((RA, 38 + 10, ESCURO + (255,)), (RA, 38, tuple(DEST.astype(int)) + (255,))):
    dc.ellipse([(LX - rr) * K, (LY - rr) * K, (LX + rr) * K, (LY + rr) * K], outline=cor, width=int(lw * K))
ds.ellipse([(LX - RA) * K, (LY - RA) * K, (LX + RA) * K, (LY + RA) * K], outline=200, width=int(60 * K))
RP = 17
dc.ellipse([(LX - RP - 5) * K, (LY - RP - 5) * K, (LX + RP + 5) * K, (LY + RP + 5) * K], fill=ESCURO + (255,))
dc.ellipse([(LX - RP) * K, (LY - RP) * K, (LX + RP) * K, (LY + RP) * K], fill=tuple(TINTA.astype(int)) + (255,))

# 7b · o nome do lugar: "Lima", Inter 700, 96 px, na pílula --rotulo, acima do anel
inter = ImageFont.truetype(os.path.join(FONTES, "inter", "Inter-VF.ttf"), 96 * K)
inter.set_variation_by_name("Bold")
nome = "Lima"
bb = inter.getbbox(nome)
PADX, PADY = 40, 22
nw, nh = (bb[2] - bb[0]) / K + 2 * PADX, (bb[3] - bb[1]) / K + 2 * PADY
nx0, ny1 = LX - nw / 2, LY - 112 - 26
ny0 = ny1 - nh
dc.rounded_rectangle([nx0 * K, ny0 * K, (nx0 + nw) * K, ny1 * K], radius=24 * K, fill=ROTULO)
ds.rounded_rectangle([nx0 * K, ny0 * K, (nx0 + nw) * K, ny1 * K], radius=24 * K, fill=170)
dc.text(((nx0 + PADX) * K - bb[0], (ny0 + PADY) * K - bb[1]), nome, font=inter, fill=tuple(TINTA.astype(int)) + (255,))

# 7c · a pílula-herói, embaixo à esquerda, sobre o Pacífico: Barlow Condensed 800, CAIXA ALTA, WATER em --agua
barlow = ImageFont.truetype(os.path.join(FONTES, "barlowcondensed", "BarlowCondensed-ExtraBold.ttf"), 1)
PARTES = [("AND THE ", tuple(TINTA.astype(int))), ("WATER", AGUA), ("?", tuple(TINTA.astype(int)))]
TXT = "".join(p for p, _ in PARTES)
FS = 236
barlow = barlow.font_variant(size=FS * K)
tb = barlow.getbbox(TXT)  # o alto das maiúsculas (sem descendente: a caixa alta não tem)
HPX, HPY = 52, 34
hw = barlow.getlength(TXT) / K + 2 * HPX
hh = (tb[3] - tb[1]) / K + 2 * HPY
hx0, hy1 = 64, H - 64
hy0 = hy1 - hh
dc.rounded_rectangle([hx0 * K, hy0 * K, (hx0 + hw) * K, hy1 * K], radius=24 * K, fill=ROTULO)
ds.rounded_rectangle([hx0 * K, hy0 * K, (hx0 + hw) * K, hy1 * K], radius=24 * K, fill=200)
cx = (hx0 + HPX) * K
for parte, cor in PARTES:
    dc.text((cx, (hy0 + HPY) * K - tb[1]), parte, font=barlow, fill=cor + (255,))
    cx += barlow.getlength(parte)

# 7d · a seta: --tinta, traço 34, pontas redondas, sombra; uma curva (Bézier cúbica) do topo da pílula até a borda do anel
p0 = (hx0 + hw * 0.40, hy0 - 26)
alvo_ang = math.radians(205)  # chega pelo lado de baixo à esquerda do anel
p3 = (LX + (112 + 34) * math.cos(alvo_ang), LY - (112 + 34) * math.sin(alvo_ang))
p1 = (p0[0] - 40, p0[1] - 300)
p2 = (p3[0] - 330, p3[1] - 60)
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
for seg in (curva, [ponta[0], p3], [ponta[1], p3]):  # cv2: traço grosso com pontas redondas, sem os dentes do ImageDraw
    pts = np.array([[round(x * K * 16), round(y * K * 16)] for x, y in seg], np.int32)
    cv2.polylines(seta, [pts], False, 255, thickness=34 * K, lineType=cv2.LINE_AA, shift=4)
seta_l = Image.fromarray(seta)
somb_l.paste(220, (0, 0), seta_l)
cam_seta = Image.new("RGBA", (W * K, H * K), tuple(TINTA.astype(int)) + (0,))
cam_seta.putalpha(seta_l)

# 7e · a sombra difusa (deslocada) sob tudo, e a composição
sombra = somb_l.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(16))
sombra = Image.fromarray(np.roll(np.roll(np.asarray(sombra), 10, 0), 6, 1))
camada_sombra = Image.new("RGBA", (W, H), ESCURO + (0,))
camada_sombra.putalpha(sombra.point(lambda v: int(v * 0.75)))
final = Image.alpha_composite(base, camada_sombra)
final = Image.alpha_composite(final, cam_seta.resize((W, H), Image.LANCZOS))
final = Image.alpha_composite(final, cam.resize((W, H), Image.LANCZOS)).convert("RGB")

final.save(os.path.join(AQUI, "miniatura-A-2560.png"))
m1280 = final.resize((1280, 720), Image.LANCZOS)
q = 95
while True:
    m1280.save(os.path.join(AQUI, "miniatura-A-1280.jpg"), quality=q, subsampling=0, optimize=True)
    if os.path.getsize(os.path.join(AQUI, "miniatura-A-1280.jpg")) <= 2 * 1024 * 1024 or q <= 70:
        break
    q -= 5
final.resize((320, 180), Image.LANCZOS).save(os.path.join(AQUI, "miniatura-A-320.png"))
final.resize((168, 94), Image.LANCZOS).save(os.path.join(AQUI, "miniatura-A-168.png"))

# 8 · as conferências
CANTO = (W - 320, H - 320)
ocupa = np.asarray(cam.resize((W, H)).split()[3]) > 10
ocupa |= peru > 0.5
canto_livre_pecas = not bool(np.asarray(cam.resize((W, H)).split()[3])[CANTO[1]:, CANTO[0]:].max() > 10)
canto_peru = float((peru[H - 160:, W - 300:] > 0.5).mean())
pontos = {
    "quadro": {"bbox_epsg3857_m": [X0, Y0, X1, Y1], "m_por_px": round(MPP, 2), "px_por_grau_lon": round(W / ((X1 - X0) / R * 180 / math.pi), 2)},
    "lima_palco": [round(LX, 1), round(LY, 1)],
    "peru_caixa_palco": [int(np.nonzero(peru.max(0) > 0.5)[0].min()), int(np.nonzero(peru.max(1) > 0.5)[0].min()),
                         int(np.nonzero(peru.max(0) > 0.5)[0].max()), int(np.nonzero(peru.max(1) > 0.5)[0].max())],
    "lima_dentro_do_lado_pacifico": bool(pac[int(LY), int(LX)] > 0.5) or bool(pac[int(LY) - 4:int(LY) + 5, int(LX) - 4:int(LX) + 5].max() > 0.5),
    "lado_pacifico_km2_no_palco": round(float(pac.sum()) * MPP * MPP / 1e6 * math.cos(math.radians(9.5)) ** 2),
    "seta_comprimento_px": round(comp_seta),
    "heroi": {"texto": TXT, "fonte_px": FS, "caixa": [hx0, round(hy0), round(hx0 + hw), hy1]},
    "nome": {"texto": nome, "caixa": [round(nx0), round(ny0), round(nx0 + nw), round(ny1)]},
    "canto_duracao_320": {"caixa": [CANTO[0], CANTO[1], W, H], "sem_pecas": canto_livre_pecas},
    "canto_duracao_300x160_fracao_peru": round(canto_peru, 4),
    "jpg_1280_bytes": os.path.getsize(os.path.join(AQUI, "miniatura-A-1280.jpg")), "jpg_qualidade": q,
    "pedidos_de_rede": 0,
}
json.dump(pontos, open(os.path.join(AQUI, "A-pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(pontos, ensure_ascii=False))
