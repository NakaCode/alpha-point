"""A base da miniatura B2 do vídeo 3: o centro do Panamá em relevo, a Zona do Canal pintada de --destaque (como a A) e uma
bandeira dos EUA num mastro, fincada em Balboa.

    python -X utf8 roteiros/zona-do-canal/miniatura/base-B2.py        (da raiz do canal)

Pedido do Lucas (16/10/2026, no chat), sobre a versão B: "Juntar o pedaço solto (Recomendado)", "Texto maior, em 2 linhas" e
"Talvez no lugar de todo território estar com a bandeira, ter uma bandeira "cravada" como em uma das referências que mandei" (a
referência é "Por que a Gâmbia não faz sentido?": o território pintado e uma bandeira num mastro fincado nele). As regras da marca
que esta versão ainda quebra estão no cabeçalho de miniatura-B2.html.

O que é real aqui, e de onde vem:
- o relevo e a costa: os Terrain Tiles da AWS Open Data (formato terrarium, zoom 10), que no Panamá vêm do SRTM, do GMTED e do
  ETOPO1 (domínio público). Os tiles são os do cache compartilhado das versões (out/zona-do-canal/_tmp/miniatura/terrario/); o
  script só pede um tile que falte, um por vez, com o User-Agent do canal, e diz quantos pediu. A costa é a linha de 2,5 m do
  próprio relevo;
- a Zona do Canal: out/zona-do-canal/_media/geo/zona-do-canal-1947.json (a divisa da folha do U.S. Army Map Service de 1947, LOC
  83694755, com os lagos Gatún e Madden; sem o mar de 3 milhas), recortada pela costa do relevo. NÃO é a faixa-esquema;
- Balboa, onde o mastro é fincado: o ponto do Balboa Clubhouse em out/zona-do-canal/_media/geo/lugares-1936.json (Road Map of
  Ancon, Balboa and Panama, 1936, NARA 192812325). O roteiro paga a bandeira em Balboa: o p6, "A flag at Balboa High School";
- a bandeira: desenhada em vetor aqui, nas proporções oficiais (Executive Order 10834, de 21/08/1959, e 4 U.S.C. §1-2):
  hasteamento A = 1,0; comprimento B = 1,9; cantão C = 7/13 por D = 0,76; estrelas em 9 fileiras alternadas de 6 e 5, E = F =
  0,054, G = H = 0,063, diâmetro K = 0,0616; 13 listras, a de cima e a de baixo vermelhas. Cores da especificação do Departamento
  de Estado (Old Glory Red #B22234, Old Glory Blue #3C3B6E, branco). A bandeira dos EUA não tem direito autoral. O tremular é uma
  onda leve na forma (deslocamento vertical que cresce do mastro para a ponta, com um sombreado de ±10 % nas dobras); sem 3D.

A única mudança de forma da Zona, feita por algoritmo e não à mão: um fechamento morfológico de raio R_FECHO px (~0,4 km), que
fecha o vão de ~165 m entre o lago Madden e o vale do Chagres que o próprio traçado registra como não fechado (o "aviso_rodada3"
do geojson: "a ligação entre o vale e o lago, na represa ... não foi fechada") e as reentrâncias mais estreitas que ~0,8 km. A
abertura da versão B (que separou o Madden) saiu. O buraco interno do polígono continua buraco.

Grava, em out/zona-do-canal/_tmp/miniatura/B2/: B2-mapa.png (2560 × 1440, o palco) e B2-pontos.json (a caixa da Zona, Balboa, a
caixa da bandeira, quanto da Zona a bandeira cobre e quantas peças a Zona tem em 168 px).
"""
import json, math, os, time, urllib.request
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter

RAIZ = os.getcwd()
BASE_TMP = os.path.join(RAIZ, "out", "zona-do-canal", "_tmp", "miniatura")
SAIDA = os.path.join(BASE_TMP, "B2")
CACHE = os.path.join(BASE_TMP, "terrario")
GEO_DIR = os.path.join(RAIZ, "out", "zona-do-canal", "_media", "geo")
UA = "AlphaPoint-canal/1.0 (miniatura do video 3; contato.naka@hotmail.com)"
Z = 10
W, H = 2560, 1440

# o quadro: a caixa da Zona (lon -80,0945 a -79,5141; lat 8,8891 a 9,4028) a 1500 px por grau de longitude, com o canto de cima
# à esquerda dela em (X_ZONA, Y_ZONA). A caixa de texto do miniatura-B2.html fica em cima, à direita (x de ~500 a 2476, até
# y ~ 640); a Zona fica à esquerda e embaixo dela, com a ponta do Caribe (Colón e Cristóbal) subindo ao lado da caixa, onde o mar
# aparece acima dela. Balboa e a bandeira ficam no meio; o canto da duração (x > 2240, y > 1120), longe de tudo.
# (A 1ª tentativa, com a caixa à esquerda e a Zona inteira abaixo dela, escondia o Caribe atrás da caixa.)
PX_POR_GRAU = float(os.environ.get("PX_POR_GRAU", 1500))
X_ZONA = float(os.environ.get("X_ZONA", 90))
Y_ZONA = float(os.environ.get("Y_ZONA", 632))
LON_Z0, LAT_Z1 = -80.09448, 9.402772
R_FECHO = float(os.environ.get("R_FECHO", 5))   # px do palco
CAIXA_TEXTO_BASE = 650                          # nada da bandeira nem da Zona acima desta linha à direita de CAIXA_TEXTO_ESQ
CAIXA_TEXTO_ESQ = 480                           # (a caixa de texto, com folga para a sombra dela)
CANTO_DURACAO = (2240, 1120)

# a bandeira
HASTE = float(os.environ.get("HASTE", 370))     # hasteamento A, em px do palco
TOPO_MASTRO = float(os.environ.get("TOPO_MASTRO", 684))
MASTRO_L = 22


def merc(lon, lat, z=Z):
    n = 256 * 2 ** z
    x = (lon + 180) / 360 * n
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * n
    return x, y


escala = PX_POR_GRAU * 360 / (256 * 2 ** Z)  # px do palco por px z10
x0 = merc(LON_Z0, 0)[0] - X_ZONA / escala
y0 = merc(0, LAT_Z1)[1] - Y_ZONA / escala
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


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


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
m_px = 156543.03 * math.cos(math.radians(9.1)) / 2 ** Z / escala
gy, gx = np.gradient(el * 2.2, m_px)
inc = np.arctan(np.hypot(gx, gy))
asp = np.arctan2(-gx, gy)


def sombra(az, altd):
    az, alt_ = math.radians(az), math.radians(altd)
    return np.clip(np.sin(alt_) * np.cos(inc) + np.cos(alt_) * np.sin(inc) * np.cos(az - asp), 0, 1)


hs = 0.65 * sombra(315, 40) + 0.35 * sombra(270, 50)

# 3 · as cores da base: as da versão B (os tons de LA, um pouco mais escuros), o mar em azul-marinho
TINTA_TERRA = [(0, (122, 158, 92)), (120, (114, 150, 84)), (350, (134, 142, 80)), (750, (164, 140, 92)),
               (1300, (190, 166, 128)), (2200, (220, 210, 190))]


def rampa(v, pares):
    xs = [p[0] for p in pares]
    return np.stack([np.interp(v, xs, [p[1][i] for p in pares]) for i in range(3)], axis=-1)


terra = rampa(el, TINTA_TERRA) * (0.40 + 0.75 * hs)[..., None]
eh_terra = borrar(el > 2.5, 4) > 0.62
m_terra = borrar(eh_terra, 1.2)
perto = borrar(eh_terra, 45)
mar = np.array((14, 25, 44), dtype=float) * (1 - perto[..., None]) + np.array((30, 52, 82), dtype=float) * perto[..., None]
base = mar * (1 - m_terra[..., None]) + terra * m_terra[..., None]

# 4 · a Zona: o polígono de 1947 em 2× (supersample), fechado (R_FECHO), sem o buraco interno, recortado pela costa
SS = 2
gj = json.load(open(os.path.join(GEO_DIR, "zona-do-canal-1947.json"), encoding="utf-8"))
z_img = Image.new("L", (W * SS, H * SS), 0)
b_img = Image.new("L", (W * SS, H * SS), 0)
dz, dbur = ImageDraw.Draw(z_img), ImageDraw.Draw(b_img)
for f in gj["features"]:
    g = f["geometry"]
    for poli in ([g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]):
        ext, *buracos = poli
        dz.polygon([tuple(c * SS for c in palco(*p)) for p in ext], fill=255)
        for b in buracos:
            pts = [tuple(c * SS for c in palco(*p)) for p in b]
            dz.polygon(pts, fill=0)
            dbur.polygon(pts, fill=255)
bruta = (np.asarray(z_img) > 127).astype(np.uint8)
r = int(round(R_FECHO * SS))
fechada_z = cv2.morphologyEx(bruta, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * r + 1, 2 * r + 1)))
fechada_z &= (np.asarray(b_img) <= 127).astype(np.uint8)
zona = cv2.resize(fechada_z.astype(np.float32), (W, H), interpolation=cv2.INTER_AREA)
costa = borrar(eh_terra, 6) > 0.30  # os lagos contam como terra (o relevo os tem acima de 2,5 m); o mar, não
zona = zona * borrar(costa, 1.0)
ganho = float(fechada_z.sum()) / float(bruta.sum()) - 1
ys, xs = np.nonzero(zona > 0.5)
caixa_zona = [int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())]
print("caixa da Zona no palco:", caixa_zona, f"(fechamento: +{ganho * 100:.1f} % de área)")

# 5 · a Zona pintada como a A: --destaque com o relevo por baixo, contorno --tinta (~12 px) e a sombra deslocada
a_z = Image.fromarray((np.clip(zona, 0, 1) * 255).astype(np.uint8))
dil = np.clip(np.asarray(a_z.filter(ImageFilter.GaussianBlur(9))) / 255.0 * 6.0, 0, 1)
somb = np.asarray(Image.fromarray((dil * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(18))) / 255.0
somb = np.roll(np.roll(somb, 12, axis=0), 7, axis=1)
out = base * (1 - 0.65 * somb[..., None])
TINTA = np.array((244, 241, 234), dtype=float)
DEST = np.array((245, 165, 36), dtype=float)
out = out * (1 - dil[..., None]) + TINTA * dil[..., None]
laranja = DEST * (0.78 + 0.30 * hs)[..., None]
out = out * (1 - zona[..., None]) + laranja * zona[..., None]

# 6 · a bandeira num mastro, fincada em Balboa (supersample 3×)
lug = json.load(open(os.path.join(GEO_DIR, "lugares-1936.json"), encoding="utf-8"))
clube = next(f for f in lug["features"] if f["properties"].get("slug") == "balboa-clubhouse-1936")
bx, by = palco(*clube["geometry"]["coordinates"])
S3 = 3
A = HASTE
L = 1.9 * A
RED, BLUE, WHITE = (178, 34, 52), (60, 59, 110), (255, 255, 255)

# 6a · a bandeira plana, em 3×, com folga em cima e embaixo para a onda
FOLGA = int(0.16 * A * S3)
fw, fh = int(round(L * S3)), int(round(A * S3))
plana = Image.new("RGBA", (fw, fh + 2 * FOLGA), (0, 0, 0, 0))
dp = ImageDraw.Draw(plana)
Ls = fh / 13
for i in range(13):
    dp.rectangle([0, FOLGA + i * Ls, fw, FOLGA + (i + 1) * Ls], fill=RED if i % 2 == 0 else WHITE)
dp.rectangle([0, FOLGA, 0.76 * fh, FOLGA + 7 / 13 * fh], fill=BLUE)
E = F = 0.054
G = Hh = 0.063
K = 0.0616


def estrela(cx, cy, rr):
    pts = []
    for k in range(10):
        ang = -math.pi / 2 + k * math.pi / 5
        rk = rr if k % 2 == 0 else rr * 0.381966  # a razão do pentagrama
        pts.append((cx + rk * math.cos(ang), cy + rk * math.sin(ang)))
    return pts


n_est = 0
for fil in range(9):
    cy = FOLGA + (E + fil * F) * fh
    cols = [Hh + j * 2 * G for j in range(6)] if fil % 2 == 0 else [Hh + G + j * 2 * G for j in range(5)]
    for cxr in cols:
        dp.polygon(estrela(cxr * fh, cy, K / 2 * fh), fill=WHITE)
        n_est += 1
assert n_est == 50, n_est
plana = np.asarray(plana).astype(np.float32)

# 6b · o tremular: cada coluna desce ou sobe d(x), uma onda que nasce no mastro e cresce até a ponta (1,25 ciclo), mais uma
#      queda leve na ponta; o sombreado acompanha a inclinação da onda (±10 %). Só forma: nada de perspectiva
xs_f = np.arange(fw, dtype=np.float32)
u = xs_f / fw
FASE = 0.55
amp = 0.050 * fh * u ** 0.85
dy = amp * np.sin(2 * np.pi * 1.25 * u - FASE) + 0.035 * fh * u ** 2
inclin = np.gradient(dy)
luz = 1 - 0.10 * np.clip(inclin / (np.abs(inclin).max() + 1e-6), -1, 1) * np.clip(u * 4, 0, 1)
map_x = np.tile(xs_f, (fh + 2 * FOLGA, 1))
map_y = np.arange(fh + 2 * FOLGA, dtype=np.float32)[:, None] - dy[None, :]
ondulada = cv2.remap(plana, map_x, map_y.astype(np.float32), cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=0)
ondulada[..., :3] *= luz[None, :, None]

# 6c · a camada do objeto (mastro + bandeira), em 3×, num recorte do palco em volta dele (múltiplo de 3 para voltar ao 1×)
RX0 = int(bx - 60)
RY0 = int(TOPO_MASTRO - 120)
RX1 = int(bx + L + 80)
RY1 = int(by + 40)
rw, rh = (RX1 - RX0), (RY1 - RY0)
cam = np.zeros((rh * S3, rw * S3, 4), dtype=np.float32)
mx0 = (bx - MASTRO_L / 2 - RX0) * S3
mx1 = (bx + MASTRO_L / 2 - RX0) * S3
fx0 = int(round(mx1 - 2 * S3))                    # a bandeira presa à borda direita do mastro
fy0 = int(round((TOPO_MASTRO + 30 - RY0) * S3)) - FOLGA
cam[fy0:fy0 + ondulada.shape[0], fx0:fx0 + fw] = ondulada
obj = Image.fromarray(np.clip(cam, 0, 255).astype(np.uint8), "RGBA")
do = ImageDraw.Draw(obj)
# o mastro: claro, com o lado direito um pouco mais escuro (cilindro discreto)
MASTRO_CLARO, MASTRO_ESCURO = (236, 232, 222, 255), (196, 190, 178, 255)
topo = (TOPO_MASTRO - RY0) * S3
pe_y = (by - RY0) * S3
cxm = (bx - RX0) * S3
do.rectangle([mx0, topo, mx1, pe_y], fill=MASTRO_CLARO)
do.rectangle([mx0 + (mx1 - mx0) * 0.62, topo, mx1, pe_y], fill=MASTRO_ESCURO)
# a bola do topo
rb = 21 * S3
do.ellipse([cxm - rb, topo - rb * 1.55, cxm + rb, topo + rb * 0.45], fill=MASTRO_CLARO)
do.ellipse([cxm - rb * 0.2, topo - rb * 1.25, cxm + rb * 0.85, topo + rb * 0.2], fill=(214, 208, 196, 255))
do.ellipse([cxm - rb * 0.62, topo - rb * 1.32, cxm - rb * 0.05, topo - rb * 0.75], fill=(252, 250, 245, 255))
# de volta ao 1×, com alfa pré-multiplicado (para a borda não escurecer nem clarear)
o3 = np.asarray(obj).astype(np.float32) / 255.0
pm = np.dstack([o3[..., :3] * o3[..., 3:4], o3[..., 3:4]])
pm = cv2.resize(pm, (rw, rh), interpolation=cv2.INTER_AREA)
alfa = np.zeros((H, W), dtype=np.float32)
cor = np.zeros((H, W, 3), dtype=np.float32)
alfa[RY0:RY1, RX0:RX1] = pm[..., 3]
cor[RY0:RY1, RX0:RX1] = pm[..., :3] / np.maximum(pm[..., 3:4], 1e-6) * 255

# 6d · separação do mapa: um filete escuro (--fundo, ~4 px) em volta do objeto e a sombra (deslocada para baixo e à direita,
#      como a da Zona); no pé do mastro, uma sombra curta e achatada, onde ele entra no chão
FUNDO = np.array((14, 23, 38), dtype=float)
a_obj = Image.fromarray((alfa * 255).astype(np.uint8))
filete = np.clip(np.asarray(a_obj.filter(ImageFilter.GaussianBlur(2.2))) / 255.0 * 3.0, 0, 1)
sombra_obj = np.asarray(a_obj.filter(ImageFilter.GaussianBlur(14))) / 255.0
sombra_obj = np.roll(np.roll(sombra_obj, 16, axis=0), 12, axis=1)
pe = Image.new("L", (W, H), 0)
ImageDraw.Draw(pe).ellipse([bx - 34, by - 9, bx + 40, by + 11], fill=255)
pe = np.asarray(pe.filter(ImageFilter.GaussianBlur(6))) / 255.0
out = out * (1 - 0.55 * np.clip(sombra_obj + pe, 0, 1)[..., None])
out = out * (1 - 0.85 * filete[..., None]) + FUNDO * (0.85 * filete[..., None])
out = out * (1 - alfa[..., None]) + cor * alfa[..., None]

os.makedirs(SAIDA, exist_ok=True)
Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(os.path.join(SAIDA, "B2-mapa.png"))

# 7 · conferências: a bandeira fora da caixa de texto e do canto da duração; quanto da Zona ela cobre; a Zona em 168 px
oy, ox = np.nonzero(alfa > 0.05)
caixa_band = [int(ox.min()), int(oy.min()), int(ox.max()), int(oy.max())]
assert caixa_band[1] >= CAIXA_TEXTO_BASE, ("a bandeira sobe na caixa de texto", caixa_band)
zy, zx = np.nonzero(dil > 0.3)
sob_caixa = zy[zx >= CAIXA_TEXTO_ESQ]
assert sob_caixa.min() >= CAIXA_TEXTO_BASE, ("a Zona (com o contorno) entra na caixa de texto", int(sob_caixa.min()))
assert not (caixa_band[2] > CANTO_DURACAO[0] and caixa_band[3] > CANTO_DURACAO[1]), ("a bandeira no canto da duração", caixa_band)
cobre = float(((alfa > 0.5) & (zona > 0.5)).sum()) / float((zona > 0.5).sum())
z168 = cv2.resize(zona.astype(np.float32), (168, 94), interpolation=cv2.INTER_AREA)
n168 = []
for lim in (0.25, 0.5):
    n, _, st, _ = cv2.connectedComponentsWithStats((z168 > lim).astype(np.uint8), connectivity=8)
    n168.append({"limiar": lim, "pecas_px": sorted((int(s[4]) for s in st[1:]), reverse=True)})
# com o contorno (o que o olho vê como "Zona" em 168 px: o laranja e o filete claro em volta)
d168 = cv2.resize(dil.astype(np.float32), (168, 94), interpolation=cv2.INTER_AREA)
n, _, st, _ = cv2.connectedComponentsWithStats((d168 > 0.5).astype(np.uint8), connectivity=8)
pontos = {
    "caixa_zona": caixa_zona,
    "balboa_clubhouse": [round(bx, 1), round(by, 1)],
    "caixa_bandeira_e_mastro": caixa_band,
    "zona_coberta_pela_bandeira": round(cobre, 4),
    "fechamento_px": R_FECHO,
    "fechamento_ganho_area": round(ganho, 4),
    "zona_em_168": n168,
    "zona_com_contorno_em_168_pecas_px": sorted((int(s[4]) for s in st[1:]), reverse=True),
    "escala_px_por_km": round(1000 / m_px, 2),
    "quadro": {"px_por_grau": PX_POR_GRAU, "zona_em": [X_ZONA, Y_ZONA]},
}
json.dump(pontos, open(os.path.join(SAIDA, "B2-pontos.json"), "w"), indent=1)
print("ok", os.path.join(SAIDA, "B2-mapa.png"))
print(json.dumps(pontos, ensure_ascii=False))
