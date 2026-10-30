"""A miniatura C do vídeo 4 (atlantico-fundo, "The Deepest Point in the Atlantic Ocean"): NÃO É A DAS MARIANAS.

    python -X utf8 -B out/atlantico-fundo/_tmp/miniatura/C/base-C.py </dev/null        (da raiz do canal; sem rede)

O PEDIDO (Lucas, 30/10/2026, no chat da Sala): "Eu quero uma terceira que desperte curiosidade comparando com a da Marianas 'Não é a
das marianas', algo assim". A marca já tem o exemplo (marca/embalagem.md §2, "O título não entrega a resposta": "A miniatura aponta a
virada sem dar a resposta ("NOT THE MARIANA TRENCH")"), e o vídeo paga a comparação na primeira fala (roteiro-narrador.md, l. 12:
"When you think "deepest ocean," you think Mariana. But that's the Pacific, about 9,500 miles away.").

A COMPOSIÇÃO (a 2 do pedido): o mundo pela GEBCO, com o Pacífico no meio, como a s04 do vídeo. À esquerda, a Fossa das Marianas em tom
neutro (o traço escuro da própria base, sem cor nenhuma), riscada no Challenger Deep por um X em --tensao com casco escuro (o vermelho só
no risco, e nunca contra o azul: o casco escuro fica entre os dois). À direita, do outro lado do Pacífico e das Américas, o ponto mais
fundo do Atlântico no anel da marca (--destaque), sem o ponto branco (como o anel do vídeo). A seta curva (--tinta) sai do X, atravessa o Pacífico por baixo e cai no anel: "não é ali, é aqui, longe". No alto,
a faixa-herói "NOT THE MARIANA TRENCH" numa pílula --rotulo, com NOT em --destaque (a virada). Nada nomeia Porto Rico nem a fossa dele.

DE ONDE VEM CADA COISA (nada desenhado à mão nem por IA; este script não tem código de rede):
- a base: _media/base/gebco-mundo-relevo.jpg (WMS oficial da GEBCO, camada GEBCO_LATEST, Web Mercator ±180°, 4096×4096; o .json ao
  lado tem o pedido e o sha256). Domínio público pelos termos da GEBCO, com a fonte reconhecida: o crédito vai na descrição, não na
  miniatura (pedido da Sala). Aqui ela é só recortada e reamostrada (Mercator para Mercator: uma transformação afim), rolada para o
  Pacífico ficar no meio, e tratada (saturação, brilho, contraste, vinheta);
- a Fossa das Marianas: _media/geo/fossa-marianas.json (isóbata de 7.000 m lida da grade GEBCO_2026; pauta-geo.json);
- o ponto mais fundo do Atlântico: _media/geo/ponto-mais-fundo-atlantico.json (19,712°N, 67,311°W; F10, S01 Tabela 1: o anel do
  vídeo inteiro, 8.378 ± 5 m);
- o Challenger Deep, para conferir a base e a distância: _media/geo/challenger-deep.json (11,369°N, 142,587°E; S01 Tabela 1);
- Porto Rico, só para conferir a base (não se desenha): _media/geo/porto-rico.json (Census 1:500.000).

Grava em out/atlantico-fundo/_tmp/miniatura/C/: miniatura-C-2560.png, miniatura-C-1280.jpg (≤ 2 MB), miniatura-C-320.png,
miniatura-C-168.png, C-pontos.json (as conferências) e, em _ver/, as ampliações para olhar.
"""
import json, math, os
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter, ImageFont

RAIZ = os.getcwd()
PROJ = os.path.join(RAIZ, "out", "atlantico-fundo")
SAIDA = os.path.join(PROJ, "_tmp", "miniatura", "C")
VER = os.path.join(SAIDA, "_ver")
GEO = os.path.join(PROJ, "_media", "geo")
BASE = os.path.join(PROJ, "_media", "base", "gebco-mundo-relevo.jpg")
FONTES = os.path.join(RAIZ, "marca", "fontes")
os.makedirs(VER, exist_ok=True)
W, H = 2560, 1440
Image.MAX_IMAGE_PIXELS = None

# a marca (marca/tokens.css)
TINTA = (244, 241, 234)        # --tinta
DEST = (245, 165, 36)          # --destaque
TENSAO = (228, 87, 46)         # --tensao
ROTULO = (11, 15, 20, int(0.88 * 255))   # --rotulo
ESCURO = (4, 8, 16)


def ler(nome):
    return json.load(open(os.path.join(GEO, nome), encoding="utf-8"))


ATL = ler("ponto-mais-fundo-atlantico.json")["features"][0]["geometry"]["coordinates"]     # [-67.311, 19.712]
CHA = ler("challenger-deep.json")["features"][0]["geometry"]["coordinates"]                # [142.587, 11.369]
MAR = ler("fossa-marianas.json")
PR = ler("porto-rico.json")


def ym(lat):
    return math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))


def lat_de_ym(y):
    return math.degrees(2 * math.atan(math.exp(y)) - math.pi / 2)


# ── o quadro: Mercator, o Pacífico no meio. O Challenger Deep em x = 360 e o ponto do Atlântico em x = 2140 (pelo Pacífico, o caminho
#    curto: 150,1° de longitude); o ponto do Atlântico em y = 720.
X_CHA, X_ATL, Y_ATL = 360.0, 2140.0, 720.0
DLON = (ATL[0] - CHA[0]) % 360.0                     # 150,102° para leste a partir das Marianas = para oeste a partir do Atlântico
S = (X_ATL - X_CHA) / DLON                            # px por grau de longitude
PXRAD = S * 180.0 / math.pi                           # px por radiano de y de Mercator
L0 = CHA[0] - X_CHA / S                               # a longitude da borda esquerda (leste)
YM_TOP = ym(ATL[1]) + Y_ATL / PXRAD


def palco(lon, lat, k=1):
    return (((lon - L0) % 360.0) * S * k, (YM_TOP - ym(lat)) * PXRAD * k)


# 1 · a base: reamostragem direta da GEBCO (cada pixel do palco → lon/lat → pixel da imagem), com o x dando a volta no antimeridiano
SRC = cv2.cvtColor(cv2.imread(BASE, cv2.IMREAD_COLOR), cv2.COLOR_BGR2RGB)
SH, SW = SRC.shape[:2]
xs = (np.arange(W) + 0.5) / S + L0
ys = YM_TOP - (np.arange(H) + 0.5) / PXRAD
u = (((xs + 180.0) % 360.0) / 360.0 * SW - 0.5).astype(np.float32)
v = ((math.pi - ys) / (2 * math.pi) * SH - 0.5).astype(np.float32)
mx, my = np.meshgrid(u, v)
crua = cv2.remap(SRC, mx, my, interpolation=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_WRAP).astype(float)

# 2 · o tratamento: a cor da GEBCO é viva demais para a marca (a s04 a escureceu a 0,42 e tirou 45 % da saturação). A miniatura fica
#     mais clara que o vídeo (embalagem §3, "Base mais clara"): saturação 0,50, brilho 0,80, contraste 1,08, e a vinheta de 35 %.
SAT, BRILHO, CONTR = 0.50, 0.80, 1.08
lum = crua @ np.array([0.2126, 0.7152, 0.0722])
img = lum[..., None] + SAT * (crua - lum[..., None])
img = np.clip(((img / 255.0 * BRILHO) - 0.5) * CONTR + 0.5, 0, 1) * 255.0
yy, xx = np.mgrid[0:H, 0:W]
dn = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / math.sqrt(2)
img = img * (1 - 0.35 * np.clip((dn - 0.45) / 0.55, 0, 1) ** 1.6)[..., None]
base = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).convert("RGBA")

# 3 · as peças, em supersample 2× (camada RGBA por cima) e uma máscara de sombra difusa comum
K = 2
cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
somb_l = Image.new("L", (W * K, H * K), 0)
dc, ds = ImageDraw.Draw(cam), ImageDraw.Draw(somb_l)


def traco(pontos, larg, cor, alvo=None):
    """traço grosso com pontas redondas (cv2, sem os dentes do ImageDraw), numa máscara; devolve a máscara"""
    m = np.zeros((H * K, W * K), np.uint8)
    for seg in pontos:
        pts = np.array([[round(x * K * 16), round(y * K * 16)] for x, y in seg], np.int32)
        cv2.polylines(m, [pts], False, 255, thickness=int(larg * K), lineType=cv2.LINE_AA, shift=4)
    return Image.fromarray(m)


def pintar(mascara, cor, alfa=1.0):
    global cam
    c = Image.new("RGBA", (W * K, H * K), cor + (0,))
    c.putalpha(mascara.point(lambda q: int(q * alfa)))
    cam = Image.alpha_composite(cam, c)


# 3a · a Fossa das Marianas: a isóbata de 7.000 m (máscara para as conferências; não se pinta desde a rodada 2, abaixo)
mar_fill = Image.new("L", (W * K, H * K), 0)
dm = ImageDraw.Draw(mar_fill)
mar_aneis = []
for f in MAR["features"]:
    g = f["geometry"]
    for poli in (g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]):
        pts = [palco(lo, la, K) for lo, la in poli[0]]
        dm.polygon(pts, fill=255)
        mar_aneis.append([(x / K, y / K) for x, y in pts])
mar_borda = traco([a + [a[0]] for a in mar_aneis], 9, None)
mar_tudo = Image.fromarray(np.maximum(np.asarray(mar_fill), np.asarray(mar_borda)))
mar_casco = mar_tudo.filter(ImageFilter.MaxFilter(9))
# Rodada 2: a isóbata NÃO se pinta mais. A 0,55 (rodada 0) ela sumia sob o X; com o X no Challenger e a 0,70 (rodada 1), as partes de
# cima do arco (a isóbata de 7.000 m tem 4 pedaços soltos) saíram como uma pedrinha cinza perdida acima do X, que não lê como fossa. A
# fossa fica a da própria base (o traço escuro da GEBCO, em tom neutro), riscada pelo X. A isóbata continua aqui para as conferências.
PINTAR_ISOBATA = False
if PINTAR_ISOBATA:
    pintar(mar_casco, ESCURO, 0.60)
    pintar(mar_tudo, TINTA, 0.70)
    somb_l.paste(120, (0, 0), mar_tudo)

# o centro da fossa (o meio da caixa da isóbata) e o Challenger Deep no palco
lons = [lo for f in MAR["features"] for poli in f["geometry"]["coordinates"] for lo, la in poli[0]]
lats = [la for f in MAR["features"] for poli in f["geometry"]["coordinates"] for lo, la in poli[0]]
MC = palco((min(lons) + max(lons)) / 2, (min(lats) + max(lats)) / 2)
CX, CY = palco(*CHA)

# 3b · o X sobre a fossa: --tensao, traço 28, com casco escuro de 10 px (o vermelho nunca encosta no azul), centrado no Challenger Deep
#      (o ponto mais fundo das Marianas, como o anel marca o do Atlântico). Rodada 1: era no meio da caixa da isóbata, com meio-braço de
#      96 px; o X cobria o crescente inteiro e pesava tanto quanto o anel. No Challenger, o resto do crescente aparece acima, à direita.
XA, XT = 84, 28   # o X ocupa 168 × 168, menor que o anel (224): o herói é o anel
XC = (CX, CY)
braco = [[(XC[0] - XA, XC[1] - XA), (XC[0] + XA, XC[1] + XA)], [(XC[0] - XA, XC[1] + XA), (XC[0] + XA, XC[1] - XA)]]
x_casco = traco(braco, XT + 20, None)
x_cor = traco(braco, XT, None)
somb_l.paste(220, (0, 0), x_casco)

# 3c · o anel no ponto do Atlântico (224 px, traço 38, --destaque, contorno escuro de 5 px por dentro e por fora) e o ponto branco
AX, AY = palco(*ATL)
RA = 112 - 19
anel_c = Image.new("L", (W * K, H * K), 0)
da = ImageDraw.Draw(anel_c)
da.ellipse([(AX - RA) * K, (AY - RA) * K, (AX + RA) * K, (AY + RA) * K], outline=255, width=int((38 + 10) * K))
anel_d = Image.new("L", (W * K, H * K), 0)
ImageDraw.Draw(anel_d).ellipse([(AX - RA) * K, (AY - RA) * K, (AX + RA) * K, (AY + RA) * K], outline=255, width=int(38 * K))
ds.ellipse([(AX - RA) * K, (AY - RA) * K, (AX + RA) * K, (AY + RA) * K], outline=200, width=int(60 * K))
RP = 13
ponto_c = Image.new("L", (W * K, H * K), 0)
ImageDraw.Draw(ponto_c).ellipse([(AX - RP - 5) * K, (AY - RP - 5) * K, (AX + RP + 5) * K, (AY + RP + 5) * K], fill=255)
ponto_d = Image.new("L", (W * K, H * K), 0)
ImageDraw.Draw(ponto_d).ellipse([(AX - RP) * K, (AY - RP) * K, (AX + RP) * K, (AY + RP) * K], fill=255)

# 3d · a seta: --tinta, traço 34, pontas redondas, sombra. Bézier cúbica do lado direito do X, por baixo, sobre o Pacífico aberto, até a
#      borda do anel, chegando por baixo à esquerda (225°)
p0 = (XC[0] + XA + 70, XC[1] + 30)
ang_alvo = math.radians(222)
p3 = (AX + (112 + 34) * math.cos(ang_alvo), AY - (112 + 34) * math.sin(ang_alvo))
p1 = (p0[0] + 420, p0[1] + 470)
p2 = (p3[0] - 640, p3[1] + 470)
curva = []
for i in range(241):
    t = i / 240
    x = (1 - t) ** 3 * p0[0] + 3 * (1 - t) ** 2 * t * p1[0] + 3 * (1 - t) * t * t * p2[0] + t ** 3 * p3[0]
    y = (1 - t) ** 3 * p0[1] + 3 * (1 - t) ** 2 * t * p1[1] + 3 * (1 - t) * t * t * p2[1] + t ** 3 * p3[1]
    curva.append((x, y))
comp_seta = sum(math.dist(curva[i], curva[i + 1]) for i in range(240))
ddx, ddy = curva[-1][0] - curva[-10][0], curva[-1][1] - curva[-10][1]
ang = math.atan2(ddy, ddx)
ponta = [(p3[0] - 92 * math.cos(ang + s * math.radians(38)), p3[1] - 92 * math.sin(ang + s * math.radians(38))) for s in (-1, 1)]
seta = traco([curva, [ponta[0], p3], [ponta[1], p3]], 34, None)
somb_l.paste(220, (0, 0), seta)

# 3e · a faixa-herói no alto: "NOT THE MARIANA TRENCH", Barlow Condensed 800, 240 px, CAIXA ALTA, NOT em --destaque, numa pílula --rotulo
FS = 240
barlow = ImageFont.truetype(os.path.join(FONTES, "barlowcondensed", "BarlowCondensed-ExtraBold.ttf"), FS * K)
PARTES = [("NOT", DEST), (" THE MARIANA TRENCH", TINTA)]
TXT = "".join(p for p, _ in PARTES)
tb = barlow.getbbox(TXT)
tw = sum(barlow.getlength(p) for p, _ in PARTES) / K
HPX, HPY = 48, 36
hw, hh = tw + 2 * HPX, (tb[3] - tb[1]) / K + 2 * HPY
hx0, hy0 = (W - hw) / 2, 44

# 4 · a composição, na ordem: a sombra difusa sob tudo; a fossa já está na camada; o X (casco, cor); a seta; o anel; o ponto; a faixa
# rodada 2: sem o ponto branco no meio do anel (lia como um "olho" sobre a ilha; o anel do vídeo não tem ponto)
for m, cor in ((x_casco, ESCURO), (x_cor, TENSAO), (seta, TINTA), (anel_c, ESCURO), (anel_d, DEST)):
    pintar(m, cor)
dc = ImageDraw.Draw(cam)
dc.rounded_rectangle([hx0 * K, hy0 * K, (hx0 + hw) * K, (hy0 + hh) * K], radius=24 * K, fill=ROTULO)
ds.rounded_rectangle([hx0 * K, hy0 * K, (hx0 + hw) * K, (hy0 + hh) * K], radius=24 * K, fill=200)
cx = (hx0 + HPX) * K
for parte, cor in PARTES:
    dc.text((cx, (hy0 + HPY) * K - tb[1]), parte, font=barlow, fill=cor + (255,))
    cx += barlow.getlength(parte)

sombra = somb_l.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(16))
sombra = Image.fromarray(np.roll(np.roll(np.asarray(sombra), 10, 0), 6, 1))
camada_sombra = Image.new("RGBA", (W, H), ESCURO + (0,))
camada_sombra.putalpha(sombra.point(lambda q: int(q * 0.75)))
pecas = cam.resize((W, H), Image.LANCZOS)
final = Image.alpha_composite(base, camada_sombra)
final = Image.alpha_composite(final, pecas).convert("RGB")

final.save(os.path.join(SAIDA, "miniatura-C-2560.png"))
m1280 = final.resize((1280, 720), Image.LANCZOS)
q = 95
while True:
    m1280.save(os.path.join(SAIDA, "miniatura-C-1280.jpg"), quality=q, subsampling=0, optimize=True)
    if os.path.getsize(os.path.join(SAIDA, "miniatura-C-1280.jpg")) <= 2 * 1024 * 1024 or q <= 70:
        break
    q -= 5
final.resize((320, 180), Image.LANCZOS).save(os.path.join(SAIDA, "miniatura-C-320.png"))
p168 = final.resize((168, 94), Image.LANCZOS)
p168.save(os.path.join(SAIDA, "miniatura-C-168.png"))
p168.resize((672, 376), Image.NEAREST).save(os.path.join(VER, "ver-168x4.png"))
# no feed escuro do YouTube (#0f0f0f), com a duração no canto, para olhar
feed = Image.new("RGB", (168 + 24, 94 + 24), (15, 15, 15))
feed.paste(p168, (12, 12))
feed.resize((feed.width * 4, feed.height * 4), Image.NEAREST).save(os.path.join(VER, "ver-168-feed-x4.png"))

# 5 · as conferências
# 5a · a geografia no quadro: Porto Rico (o polígono do Census) tem de cair sobre a terra da base crua, e os dois pontos, no mar
pr_m = Image.new("L", (W, H), 0)
dp = ImageDraw.Draw(pr_m)
for f in PR["features"]:
    g = f["geometry"]
    for poli in (g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]):
        dp.polygon([palco(lo, la) for lo, la in poli[0]], fill=255)
prm = np.asarray(pr_m) > 0
terra = (crua[..., 0] > crua[..., 2])          # a rampa da GEBCO: terra em verde/ocre/marrom (R > B), mar em azul (B > R)
anel_pr = (np.asarray(pr_m.filter(ImageFilter.MaxFilter(15))) > 0) & ~prm


def amostra(x, y, r=0):
    p = crua[int(round(y)) - r:int(round(y)) + r + 1, int(round(x)) - r:int(round(x)) + r + 1].reshape(-1, 3).mean(0)
    return [round(float(c)) for c in p]


def vizinhanca(x, y, r):
    blk = crua[int(y) - r:int(y) + r + 1, int(x) - r:int(x) + r + 1] @ np.array([0.2126, 0.7152, 0.0722])
    return round(float(blk.mean()), 1)


mar_m = np.asarray(mar_fill.resize((W, H), Image.LANCZOS)) > 127
lum_crua = crua @ np.array([0.2126, 0.7152, 0.0722])
ys_mar, xs_mar = np.nonzero(mar_m)
faixa_mar = (np.asarray(mar_fill.resize((W, H), Image.LANCZOS).filter(ImageFilter.MaxFilter(31))) > 0) & ~mar_m


def vincenty(lon1, lat1, lon2, lat2):
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
        sg = math.atan2(ss, cs)
        sa = cU1 * cU2 * sl / ss
        c2a = 1 - sa * sa
        c2sm = cs - 2 * sU1 * sU2 / c2a if c2a else 0.0
        C = f / 16 * c2a * (4 + f * (4 - 3 * c2a))
        lp, lam = lam, L + (1 - C) * f * sa * (sg + C * ss * (c2sm + C * cs * (-1 + 2 * c2sm * c2sm)))
        if abs(lam - lp) < 1e-12:
            break
    u2 = c2a * (a * a - b * b) / (b * b)
    A = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)))
    B = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)))
    ds_ = B * ss * (c2sm + B / 4 * (cs * (-1 + 2 * c2sm * c2sm) - B / 6 * c2sm * (-3 + 4 * ss * ss) * (-3 + 4 * c2sm * c2sm)))
    return b * A * (sg - ds_)


km = vincenty(ATL[0], ATL[1], CHA[0], CHA[1]) / 1000
alfa_pecas = np.asarray(pecas.split()[3])
CANTO = (W - 320, H - 320)


def lin(c):
    c = c / 255.0
    return np.where(c <= 0.03928, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def razao(c1, c2):
    l1, l2 = (float(lin(np.array(c, float)) @ np.array([0.2126, 0.7152, 0.0722])) for c in (c1, c2))
    return round((max(l1, l2) + 0.05) / (min(l1, l2) + 0.05), 2)


fundo_pilula = tuple(np.asarray(final)[int(hy0 + 12), int(hx0 + 30)].tolist())
pontos = {
    "quadro": {"projecao": "Web Mercator (como a base)", "px_por_grau_lon": round(S, 4), "lon_borda_esquerda": round(L0 % 360 if L0 > 180 else L0, 4),
               "lon_borda_direita": round(((L0 + W / S + 180) % 360) - 180, 4),
               "lat_topo": round(lat_de_ym(YM_TOP), 3), "lat_base": round(lat_de_ym(YM_TOP - H / PXRAD), 3),
               "reamostragem": f"x {W / S / 360 * SW / W:.4f} px da base por px do palco (fator {S / (SW / 360):.3f}×)"},
    "ponto_atlantico": {"lonlat": ATL, "palco": [round(AX, 1), round(AY, 1)], "cor_crua_rgb_5x5": amostra(AX, AY, 2),
                        "e_mar": bool(amostra(AX, AY, 2)[2] > amostra(AX, AY, 2)[0]),
                        "lum_ponto_vs_vizinhanca_41px": [round(float(lum_crua[int(AY) - 2:int(AY) + 3, int(AX) - 2:int(AX) + 3].mean()), 1), vizinhanca(AX, AY, 20)]},
    "challenger_deep": {"lonlat": CHA, "palco": [round(CX, 1), round(CY, 1)], "cor_crua_rgb_5x5": amostra(CX, CY, 2),
                        "e_mar": bool(amostra(CX, CY, 2)[2] > amostra(CX, CY, 2)[0]),
                        "dentro_da_isobata_7000": bool(mar_m[int(round(CY)), int(round(CX))] or mar_m[int(CY) - 2:int(CY) + 3, int(CX) - 2:int(CX) + 3].any())},
    "fossa_marianas": {"centro_da_caixa_palco": [round(MC[0], 1), round(MC[1], 1)], "caixa_lonlat": [min(lons), min(lats), max(lons), max(lats)],
                       "lum_crua_dentro_vs_faixa_15px_fora": [round(float(lum_crua[mar_m].mean()), 1), round(float(lum_crua[faixa_mar].mean()), 1)]},
    "porto_rico_na_base": {"px_no_palco": int(prm.sum()), "fracao_terra_dentro": round(float(terra[prm].mean()), 3),
                           "fracao_terra_na_faixa_7px_fora": round(float(terra[anel_pr].mean()), 3),
                           "r_menos_b_dentro_vs_fora": [round(float((crua[..., 0] - crua[..., 2])[prm].mean()), 1),
                                                        round(float((crua[..., 0] - crua[..., 2])[anel_pr].mean()), 1)],
                           "lum_dentro_vs_fora": [round(float(lum_crua[prm].mean()), 1), round(float(lum_crua[anel_pr].mean()), 1)]},
    "separacao": {"lon_graus_pelo_pacifico": round(DLON, 3), "lon_graus_pelo_atlantico": round(360 - DLON, 3),
                  "px_entre_os_pontos": round(math.dist((AX, AY), (CX, CY)), 1),
                  "vincenty_wgs84_km": round(km, 1), "vincenty_wgs84_mi": round(km / 1.609344, 1)},
    "heroi": {"texto": TXT, "fonte_px": FS, "pilula": [round(hx0), round(hy0), round(hx0 + hw), round(hy0 + hh)],
              "altura_maiuscula_px": round((tb[3] - tb[1]) / K), "altura_maiuscula_a_168px": round((tb[3] - tb[1]) / K * 168 / W, 1),
              "contraste_tinta_sobre_pilula": razao(TINTA, fundo_pilula), "contraste_destaque_sobre_pilula": razao(DEST, fundo_pilula),
              "fundo_pilula_rgb": fundo_pilula},
    "x": {"centro_palco": [round(XC[0], 1), round(XC[1], 1)], "no": "Challenger Deep", "meio_braco_px": XA, "traco_px": XT, "casco_px": 10,
          "a_168px": round(2 * XA * 168 / W, 1)},
    "anel": {"diametro_px": 224, "a_168px": round(224 * 168 / W, 1)},
    "seta": {"comprimento_px": round(comp_seta), "ponto_mais_baixo_y": round(max(y for _, y in curva)),
             "x_max": round(max(x for x, _ in curva))},
    "canto_duracao_320": {"caixa": [CANTO[0], CANTO[1], W, H], "sem_pecas": bool(alfa_pecas[CANTO[1]:, CANTO[0]:].max() <= 10),
                          "alfa_max": int(alfa_pecas[CANTO[1]:, CANTO[0]:].max())},
    "luminancia_media_final": round(float(np.asarray(final.convert("L")).mean()), 1),
    "jpg_1280_bytes": os.path.getsize(os.path.join(SAIDA, "miniatura-C-1280.jpg")), "jpg_qualidade": q,
    "pedidos_de_rede": 0,
}
json.dump(pontos, open(os.path.join(SAIDA, "C-pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(pontos, ensure_ascii=False, indent=1))

# 5b · a prova no quadro, para olhar: a base crua com Porto Rico (contorno) e os dois pontos, recortada em volta de cada um
prova = Image.fromarray(np.clip(crua, 0, 255).astype(np.uint8))
dpv = ImageDraw.Draw(prova)
for f in PR["features"]:
    g = f["geometry"]
    for poli in (g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]):
        pts = [palco(lo, la) for lo, la in poli[0]]
        dpv.line(pts + [pts[0]], fill=(255, 0, 255), width=1)
for a in mar_aneis:
    dpv.line(a + [a[0]], fill=(255, 0, 255), width=1)
for (x, y) in ((AX, AY), (CX, CY)):
    dpv.ellipse([x - 3, y - 3, x + 3, y + 3], outline=(255, 255, 0), width=1)
for nome, (x, y) in (("prova-atlantico", (AX, AY)), ("prova-marianas", (CX, CY - 60))):
    prova.crop((int(x - 150), int(y - 110), int(x + 150), int(y + 110))).resize((900, 660), Image.NEAREST).save(os.path.join(VER, nome + ".png"))
