"""A miniatura B do vídeo 5 (big-sur): "ROAD KEEPS FALLING" (pauta §8, miniatura 2), da mesma família visual da A2.

    python -X utf8 -B roteiros/big-sur/miniatura/base-B.py          (da raiz do canal; sem rede)

A IDEIA. A foto aérea do USGS do deslizamento de Mud Creek (27/05/2017), em tela cheia: o leque de terra descendo a serra até o mar,
e a estrada cortada dos dois lados dele. O texto, no estilo do herói da A2 (Barlow Condensed 800, sem pílula, com brilho escuro),
diz "ROAD KEEPS / FALLING", com FALLING em --destaque. Uma pílula --tinta, "HIGHWAY 1", manda uma seta grossa ao ponto em que a
estrada some sob a terra, do lado esquerdo do leque (o que o título não diz e a foto mostra). Um selo pequeno dá o lugar e a data da
foto ("MUD CREEK · MAY 2017"): o veredito da s09 pediu o aviso do ano, e a miniatura fala no presente.

Por que tela cheia, e não a lupa sobre a base Landsat: a lupa de 640 px do palco (embalagem §3.1) vira um círculo de 42 px no 168,
e o leque some; em tela cheia, ele é a forma que se lê a 168.

DE ONDE VEM CADA COISA (nada desenhado à mão nem por IA; este script não tem código de rede):
- a foto: out/big-sur/_media/foto/s26/s26-mud-creek-landslide-air-photo-2017-05-27-usgs.jpg (USGS, Landslide Hazards Program,
  domínio público; o sha256 confere com o _PROCEDENCIA.json da pasta, e o script exige um "aprovado" para esse sha256 no
  out/big-sur/_pesquisa/conferencia-midia.json). Recortada em 16:9 e ampliada, sem girar nem deformar; nenhuma outra foto;
- as letras: marca/fontes/ (Barlow Condensed 800 e Inter 700, SIL OFL); as cores: marca/tokens.css.

Grava: roteiros/big-sur/miniatura/miniatura-B-2560.jpg e miniatura-B-1280.jpg; em out/big-sur/_tmp/miniatura/: B-previa-1280.png,
B-previa-320.png, B-previa-168.png, B-ver.png (a 1280 reduzida, a 320, a 168 real e ×4, sobre o #0f0f0f) e B-pontos.json.
"""
import hashlib, json, math, os, sys
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter, ImageFont

RAIZ = os.getcwd()
PROJ = os.path.join(RAIZ, "out", "big-sur")
SAIDA = os.path.join(RAIZ, "roteiros", "big-sur", "miniatura")
PREVIA = os.path.join(PROJ, "_tmp", "miniatura")
FONTES = os.path.join(RAIZ, "marca", "fontes")
PASTA_FOTO = os.path.join(PROJ, "_media", "foto", "s26")
FOTO = os.path.join(PASTA_FOTO, "s26-mud-creek-landslide-air-photo-2017-05-27-usgs.jpg")
CONF = os.path.join(PROJ, "_pesquisa", "conferencia-midia.json")
os.makedirs(PREVIA, exist_ok=True)
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"

W, H = 2560, 1440
K = 2


def env(nome, padrao):
    return float(os.environ.get(nome, padrao))


TINTA = np.array((244, 241, 234), float)       # --tinta        #F4F1EA
DEST = np.array((245, 165, 36), float)         # --destaque     #F5A524
T = tuple(TINTA.astype(int))
D = tuple(DEST.astype(int))
TE = (20, 24, 31)                              # --tinta-escura #14181F
ROTULO = (11, 15, 20, int(0.88 * 255))         # --rotulo
ESCURO = (4, 8, 16)


def sha256(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for bloco in iter(lambda: f.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()


def compor(img, cor, a):
    return img * (1 - a[..., None]) + np.asarray(cor, float)[None, None, :3] * a[..., None]


def luma(a):
    return a @ np.array([0.2126, 0.7152, 0.0722])


# 0 · a foto: o sha256 da procedência e o "aprovado" do conferente para esse sha256
proc = json.load(open(os.path.join(PASTA_FOTO, "_PROCEDENCIA.json"), encoding="utf-8"))
item = [i for i in proc["itens"] if i["arquivo"] == os.path.basename(FOTO)][0]
SHA_FOTO = sha256(FOTO)
if SHA_FOTO != item["medido"]["sha256"]:
    sys.exit("a foto não confere com o sha256 do _PROCEDENCIA.json: parei")
aprovados = []


def anda(o):
    if isinstance(o, dict):
        if o.get("veredito") and SHA_FOTO in json.dumps(o):
            aprovados.append({"cena": o.get("cena"), "veredito": o.get("veredito"), "data_na_origem": o.get("data_na_origem"),
                              "aviso_de_ano": o.get("aviso_de_ano"), "lugar_na_origem": o.get("lugar_na_origem")})
            return
        for v in o.values():
            anda(v)
    elif isinstance(o, list):
        for v in o:
            anda(v)


anda(json.load(open(CONF, encoding="utf-8")))
if not any(a["veredito"] == "aprovado" for a in aprovados):
    sys.exit("a foto não tem 'aprovado' no conferencia-midia.json para este sha256: parei")
foto = cv2.cvtColor(cv2.imread(FOTO, cv2.IMREAD_COLOR), cv2.COLOR_BGR2RGB)
FH, FW = foto.shape[:2]

# 1 · o recorte 16:9 (a largura inteira; a altura começa em Y0 da foto) e a ampliação ao palco
CHF = round(FW * 9 / 16)
Y0 = int(env("MINI_Y0", 40))
assert 0 <= Y0 and Y0 + CHF <= FH
ESC = W / FW


def palco_f(x, y):
    """da foto (px) ao palco"""
    return (x * ESC, (y - Y0) * ESC)


img = cv2.resize(foto[Y0:Y0 + CHF], (W, H), interpolation=cv2.INTER_CUBIC).astype(np.float32)
bl = cv2.GaussianBlur(img, (0, 0), 2.0)
img = np.clip(img + env("MINI_NITIDEZ", 0.45) * (img - bl), 0, 255)
CONTR, GANHO = env("MINI_CONTR", 1.10), env("MINI_GANHO", 0.98)
img = np.clip(((img / 255.0 * GANHO) - 0.5) * CONTR + 0.5, 0, 1) * 255.0
yy, xx = np.mgrid[0:H, 0:W]
dn = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / math.sqrt(2)
VIN = env("MINI_VINHETA", 0.50)
img = img * (1 - VIN * np.clip((dn - 0.40) / 0.60, 0, 1) ** 1.5)[..., None]
lum_base = float(luma(img).mean())

# 2 · as camadas
cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
somb_l = Image.new("L", (W * K, H * K), 0)
dc, ds = ImageDraw.Draw(cam), ImageDraw.Draw(somb_l)
barlow_p = os.path.join(FONTES, "barlowcondensed", "BarlowCondensed-ExtraBold.ttf")
caixas = {}

# 2a · o herói, sem pílula, no alto à esquerda: "ROAD KEEPS" em --tinta, "FALLING" em --destaque
FS = int(env("MINI_FS", 340))
heroi = ImageFont.truetype(barlow_p, FS * K)
cap = heroi.getbbox("ROAD KEEPS FALLING")
alt_cap = (cap[3] - cap[1]) / K
ENTRE = env("MINI_ENTRE", 0.20) * FS
HX0, HY0 = env("MINI_HX0", 84), env("MINI_HY0", 70)
txt = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
dt = ImageDraw.Draw(txt)
for i, (frase, cor) in enumerate((("ROAD KEEPS", T), ("FALLING", D))):
    y0 = HY0 + i * (alt_cap + ENTRE)
    bb = heroi.getbbox(frase)
    dt.text((HX0 * K - bb[0], y0 * K - cap[1]), frase, font=heroi, fill=cor + (255,))
    caixas["heroi-" + frase] = (HX0, y0, HX0 + (bb[2] - bb[0]) / K, y0 + alt_cap)
txt_r = txt.resize((W, H), Image.LANCZOS)
a_txt = np.asarray(txt_r.split()[3]).astype(np.float32) / 255
brilho = cv2.GaussianBlur(cv2.dilate(a_txt, np.ones((25, 25), np.uint8)), (0, 0), 46)
brilho = np.clip(brilho * 1.5, 0, 1) * env("MINI_BRILHO", 0.82)
sombra_txt = np.roll(np.roll(cv2.GaussianBlur(a_txt, (0, 0), 6), 10, 0), 8, 1) * 0.65

# 2b · a pílula "HIGHWAY 1" (--tinta, letra --tinta-escura, Barlow Condensed 800 em CAIXA ALTA), embaixo à esquerda, sobre o mar
FC = int(env("MINI_FC", 150))
cid = ImageFont.truetype(barlow_p, FC * K)
cap_c = cid.getbbox("HIGHWAY 1")
PX_, PY_ = 38, 26
nome = "HIGHWAY 1"
w_ = cid.getlength(nome) / K + 2 * PX_
h_ = (cap_c[3] - cap_c[1]) / K + 2 * PY_
px0, py0 = env("MINI_PIL_X", 84), H - env("MINI_PIL_Y", 60) - h_
c = (px0, py0, px0 + w_, py0 + h_)
dc.rounded_rectangle([c[0] * K, c[1] * K, c[2] * K, c[3] * K], radius=14 * K, fill=T + (255,))
ds.rounded_rectangle([c[0] * K, c[1] * K, c[2] * K, c[3] * K], radius=14 * K, fill=210)
dc.text(((px0 + PX_) * K, (py0 + PY_) * K - cap_c[1]), nome, font=cid, fill=TE + (255,))
caixas["highway-1"] = c

# 2c · o selo do lugar e da data da foto: Inter 700, 56 px, na pílula --rotulo, no alto à direita
inter = ImageFont.truetype(os.path.join(FONTES, "inter", "Inter-VF.ttf"), int(env("MINI_SELO_FS", 56)) * K)
inter.set_variation_by_name("Bold")
selo = "MUD CREEK · MAY 2017"
sb = inter.getbbox(selo)
sw, sh = (sb[2] - sb[0]) / K + 2 * 28, (sb[3] - sb[1]) / K + 2 * 18
sx0, sy0 = W - env("MINI_SELO_X", 70) - sw, env("MINI_SELO_Y", 70)
dc.rounded_rectangle([sx0 * K, sy0 * K, (sx0 + sw) * K, (sy0 + sh) * K], radius=12 * K, fill=ROTULO)
ds.rounded_rectangle([sx0 * K, sy0 * K, (sx0 + sw) * K, (sy0 + sh) * K], radius=12 * K, fill=170)
dc.text(((sx0 + 28) * K - sb[0], (sy0 + 18) * K - sb[1]), selo, font=inter, fill=T + (255,))
caixas["selo"] = (sx0, sy0, sx0 + sw, sy0 + sh)


# 2d · a seta grossa (a mesma da A2): da pílula ao ponto em que a estrada some sob a terra, à esquerda do leque
def bezier(p0, p1, p2, p3, n=240):
    return [tuple((1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c_ + t ** 3 * e
                  for a, b, c_, e in zip(p0, p1, p2, p3)) for t in (i / n for i in range(n + 1))]


def seta_grossa(curva, w0, w1, cab_l, cab_w):
    acum = [0.0]
    for i in range(1, len(curva)):
        acum.append(acum[-1] + math.dist(curva[i - 1], curva[i]))
    L = acum[-1]
    corte = L - cab_l * 0.9
    corpo = [(p, a) for p, a in zip(curva, acum) if a <= corte]
    esq, dirr = [], []
    for i, (p, a) in enumerate(corpo):
        q0 = corpo[max(0, i - 1)][0]
        q1 = corpo[min(len(corpo) - 1, i + 1)][0]
        tx, ty = q1[0] - q0[0], q1[1] - q0[1]
        n = math.hypot(tx, ty) or 1
        nx, ny = -ty / n, tx / n
        w = w0 + (w1 - w0) * (a / corte) ** 0.7
        esq.append((p[0] + nx * w / 2, p[1] + ny * w / 2))
        dirr.append((p[0] - nx * w / 2, p[1] - ny * w / 2))
    ponta = curva[-1]
    i_b = max(i for i, a in enumerate(acum) if a <= L - cab_l)
    bx, by = curva[i_b]
    dx, dy = ponta[0] - bx, ponta[1] - by
    n = math.hypot(dx, dy)
    ux, uy = dx / n, dy / n
    bx, by = ponta[0] - ux * cab_l, ponta[1] - uy * cab_l
    cabeca = [(bx - uy * cab_w / 2, by + ux * cab_w / 2), ponta, (bx + uy * cab_w / 2, by - ux * cab_w / 2)]
    for dr, cor in ((dc, T + (255,)), (ds, 225)):
        dr.polygon([(x * K, y * K) for x, y in esq + dirr[::-1]], fill=cor)
        dr.polygon([(x * K, y * K) for x, y in cabeca], fill=cor)
        x0_, y0_ = corpo[0][0]
        dr.ellipse([(x0_ - w0 / 2) * K, (y0_ - w0 / 2) * K, (x0_ + w0 / 2) * K, (y0_ + w0 / 2) * K], fill=cor)
    return L


# o fim da estrada à esquerda do leque, na foto (px da foto, lido na foto de 1500 × 992): a estrada vem da borda esquerda a
# y ~490 e some sob a terra perto de x ~470, y ~540. A ponta da seta para logo abaixo dela, apontando para cima.
FIM_ESTRADA_FOTO = (env("MINI_FIM_X", 455), env("MINI_FIM_Y", 542))
fx, fy = palco_f(*FIM_ESTRADA_FOTO)
p3 = np.array((fx - env("MINI_PONTA_DX", 0), fy + env("MINI_PONTA_DY", 32)))
ang = math.radians(env("MINI_CHEG", 300))            # a direção em que a seta chega (tela: y para baixo; 270 = para cima)
d = np.array((math.cos(ang), math.sin(ang)))
p0 = np.array((c[0] + env("MINI_SAI", 0.60) * (c[2] - c[0]), c[1] - 22))
p1 = p0 + (env("MINI_L1X", -120), -env("MINI_L1", 220))
p2 = p3 - d * env("MINI_L2", 300)
comp = seta_grossa(bezier(tuple(p0), tuple(p1), tuple(p2), tuple(p3)), 46, 84, 165, 215)

# 3 · a composição
final = compor(img, ESCURO, brilho)
sombra = np.asarray(somb_l.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(14))).astype(np.float32) / 255
sombra = np.roll(np.roll(sombra, 10, 0), 6, 1) * 0.70
final = compor(final, ESCURO, np.maximum(sombra, sombra_txt))
final = Image.fromarray(np.clip(final, 0, 255).astype(np.uint8)).convert("RGBA")
cam_r = cam.resize((W, H), Image.LANCZOS)
final = Image.alpha_composite(final, cam_r)
final = Image.alpha_composite(final, txt_r).convert("RGB")

# 4 · as saídas
final.save(os.path.join(SAIDA, "miniatura-B-2560.jpg"), quality=92, subsampling=0, optimize=True)
m1280 = final.resize((1280, 720), Image.LANCZOS)
q = 95
J = os.path.join(SAIDA, "miniatura-B-1280.jpg")
while True:
    m1280.save(J, quality=q, subsampling=0, optimize=True)
    if os.path.getsize(J) <= 2 * 1024 * 1024 or q <= 70:
        break
    q -= 5
m1280.save(os.path.join(PREVIA, "B-previa-1280.png"))
p320 = final.resize((320, 180), Image.LANCZOS)
p320.save(os.path.join(PREVIA, "B-previa-320.png"))
p168 = final.resize((168, 94), Image.LANCZOS)
p168.save(os.path.join(PREVIA, "B-previa-168.png"))
quadro = Image.new("RGB", (40 + 960 + 40 + 672 + 40, 40 + 540 + 40 + 376 + 40), (15, 15, 15))
quadro.paste(m1280.resize((960, 540), Image.LANCZOS), (40, 40))
quadro.paste(p168.resize((672, 376), Image.NEAREST), (40 + 960 + 40, 40))
quadro.paste(p320, (40, 40 + 540 + 40))
quadro.paste(p168, (40 + 320 + 40, 40 + 540 + 40))
quadro.save(os.path.join(PREVIA, "B-ver.png"))

# 5 · as conferências
alfa = np.maximum(np.asarray(cam_r.split()[3]).astype(int), np.asarray(txt_r.split()[3]).astype(int))
CANTO = (W - 320, H - 320)
pontos = {
    "foto": {"arquivo": os.path.relpath(FOTO, RAIZ).replace("\\", "/"), "sha256": SHA_FOTO, "px": [FW, FH],
             "vereditos_para_este_sha256": aprovados, "licenca": item["licenca"], "exige_credito": item["exige_credito"],
             "recorte_px_foto": [0, Y0, FW, Y0 + CHF], "ampliacao": round(ESC, 4)},
    "heroi": {"fonte_px": FS, "altura_maiuscula_px": round(alt_cap), "no_168_px": round(alt_cap * 168 / W, 1),
              "caixas": {k: [round(v) for v in caixas[k]] for k in caixas if k.startswith("heroi")}},
    "highway_1": {"pilula": [round(v) for v in caixas["highway-1"]], "fim_da_estrada_foto": list(FIM_ESTRADA_FOTO),
                  "fim_da_estrada_palco": [round(fx), round(fy)], "ponta_da_seta": [round(v) for v in p3], "seta_comprimento_px": round(comp)},
    "selo": {"texto": selo, "caixa": [round(v) for v in caixas["selo"]]},
    "canto_duracao_320": {"caixa": [CANTO[0], CANTO[1], W, H], "alfa_max_pecas": int(alfa[CANTO[1]:, CANTO[0]:].max())},
    "luminancia_media_base": round(lum_base, 1),
    "luminancia_media_final": round(float(np.asarray(final.convert("L")).mean()), 1),
    "jpg_1280_bytes": os.path.getsize(J), "jpg_1280_qualidade": q,
    "pedidos_de_rede": 0,
}
json.dump(pontos, open(os.path.join(PREVIA, "B-pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(pontos, ensure_ascii=False))
