"""A folha de comparação das miniaturas do vídeo 8 (esboços das finalistas, 17/11/2026), como o espectador vê no YouTube: em cima, as
miniaturas lado a lado em 1280, com o título embaixo (branco sobre o fundo escuro do app, 2 linhas no máximo); embaixo de cada uma, a
mesma em 320 (o título embaixo, como no celular) e em 168 (o título ao lado, como nos "próximos vídeos"). Um selo de duração no canto de
baixo à direita mostra o que ele cobre.

    python -X utf8 -B -P out/_pautas/video-8/miniaturas/folha.py                       (da raiz; grava folha.png)
    python -X utf8 -B -P out/_pautas/video-8/miniaturas/folha.py arizona-strip         (grava arizona-strip-textos.png: a escolhida e as
                                                                                        variantes de texto de _variantes/, no mesmo molde)

As finalistas e os títulos ficam em finalistas.json (slug, título); a que ainda não tem <slug>-1280.jpg fica fora, com um aviso.
"""
import json, os, sys, textwrap
from PIL import Image, ImageDraw, ImageFont

RAIZ = os.getcwd()
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"
PASTA = os.path.join(RAIZ, "out", "_pautas", "video-8", "miniaturas")
FONTE = os.path.join(RAIZ, "marca", "fontes", "inter", "Inter-VF.ttf")
FUNDO = (15, 15, 15)
CINZA = (170, 170, 170)


def fonte(px, peso=600):
    f = ImageFont.truetype(FONTE, int(px))
    f.set_variation_by_axes([14 if px < 40 else 32, peso])
    return f


def quebrar(d, texto, f, largura, linhas=2):
    palavras, out, atual = texto.split(), [], ""
    for p in palavras:
        teste = (atual + " " + p).strip()
        if d.textlength(teste, font=f) <= largura:
            atual = teste
        else:
            out.append(atual)
            atual = p
    out.append(atual)
    if len(out) > linhas:
        out = out[:linhas]
        while d.textlength(out[-1] + "…", font=f) > largura:
            out[-1] = out[-1][:-1]
        out[-1] += "…"
    return out


def selo(im, escala):
    """o selo de duração do YouTube (preto translúcido, canto de baixo à direita)"""
    d = ImageDraw.Draw(im, "RGBA")
    f = fonte(max(9, 24 * escala), 600)
    t = "14:05"
    w = d.textlength(t, font=f)
    h = 24 * escala
    m = 8 * escala
    x1, y1 = im.width - m, im.height - m
    d.rounded_rectangle([x1 - w - 10 * escala, y1 - h - 8 * escala, x1, y1], radius=max(2, 5 * escala), fill=(0, 0, 0, 200))
    d.text((x1 - 5 * escala, y1 - 4 * escala), t, font=f, fill=(255, 255, 255), anchor="rd")
    return im


def cantos(im, r):
    m = Image.new("L", im.size, 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, im.width - 1, im.height - 1], radius=r, fill=255)
    out = Image.new("RGB", im.size, FUNDO)
    out.paste(im, (0, 0), m)
    return out


def coluna(img1280, titulo, rotulo=None):
    """uma coluna da folha: 1280 com o título; embaixo, 320 com o título e 168 com o título ao lado"""
    W = 1280
    col = Image.new("RGB", (W, 720 + 150 + 300), FUNDO)
    d = ImageDraw.Draw(col)
    col.paste(cantos(selo(img1280.copy(), 1.6), 22), (0, 0))
    f1 = fonte(40, 600)
    y = 720 + 22
    for l in quebrar(d, titulo, f1, W - 20):
        d.text((4, y), l, font=f1, fill=(255, 255, 255))
        y += 50
    d.text((4, y + 4), "Alpha Point · esboço" + (" · " + rotulo if rotulo else ""), font=fonte(28, 400), fill=CINZA)
    y0 = 720 + 150 + 20
    p320 = cantos(selo(img1280.resize((320, 180), Image.LANCZOS), 0.5), 8)
    col.paste(p320, (0, y0))
    f2 = fonte(16, 600)
    yy = y0 + 180 + 8
    for l in quebrar(d, titulo, f2, 320):
        d.text((0, yy), l, font=f2, fill=(255, 255, 255))
        yy += 21
    p168 = cantos(selo(img1280.resize((168, 94), Image.LANCZOS), 0.5), 6)
    x168 = 380
    col.paste(p168, (x168, y0))
    f3 = fonte(14, 600)
    yy = y0 + 2
    for l in quebrar(d, titulo, f3, W - x168 - 168 - 20):
        d.text((x168 + 168 + 10, yy), l, font=f3, fill=(255, 255, 255))
        yy += 19
    d.text((x168 + 168 + 10, yy + 2), "Alpha Point", font=fonte(12, 400), fill=CINZA)
    return col


def montar(colunas, destino):
    gap = 60
    W = sum(c.width for c in colunas) + gap * (len(colunas) + 1)
    H = max(c.height for c in colunas) + 2 * gap
    folha = Image.new("RGB", (W, H), FUNDO)
    x = gap
    for c in colunas:
        folha.paste(c, (x, gap))
        x += c.width + gap
    folha.save(destino, optimize=True)
    print("gravada:", os.path.relpath(destino, RAIZ), folha.size)


fin = json.load(open(os.path.join(PASTA, "finalistas.json"), encoding="utf-8"))
if len(sys.argv) > 1:
    slug = sys.argv[1]
    item = [f for f in fin if f["slug"] == slug][0]
    cols = [coluna(Image.open(os.path.join(PASTA, slug + "-1280.jpg")).convert("RGB"), item["titulo"], "a escolhida (%s)" % item.get("texto", ""))]
    for v in sorted(os.listdir(os.path.join(PASTA, "_variantes"))):
        if v.startswith(slug + "-") and v.endswith("-1280.jpg"):
            nome = v[len(slug) + 1:-len("-1280.jpg")]
            cols.append(coluna(Image.open(os.path.join(PASTA, "_variantes", v)).convert("RGB"), item["titulo"], "variante " + nome))
    montar(cols, os.path.join(PASTA, slug + "-textos.png"))
else:
    cols = []
    for f in fin:
        p = os.path.join(PASTA, f["slug"] + "-1280.jpg")
        if not os.path.exists(p):
            print("sem miniatura ainda:", f["slug"])
            continue
        cols.append(coluna(Image.open(p).convert("RGB"), f["titulo"], f["slug"]))
    montar(cols, os.path.join(PASTA, "folha.png"))
