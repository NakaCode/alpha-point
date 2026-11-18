"""A folha de comparação das miniaturas da pauta do vídeo 8, a Austrália (`australia-animais`, 18/11/2026), como o espectador vê no YouTube: as
duas lado a lado em 1280, com o título embaixo (branco sobre o fundo escuro do app, 2 linhas no máximo); embaixo de cada uma, a mesma em 320 (o
título embaixo, como no celular) e em 168 (o título ao lado, como nos "próximos vídeos"), e a 168 ampliada 3 vezes, só para conferir a palavra. Um
selo de duração (15:54) no canto de baixo à direita mostra o que ele cobre: a duração é ILUSTRATIVA (os 15,9 min de fala da pauta v1, §7; não há
roteiro ainda, e o cético, K7, mexe na duração).
É a folha.py de out/_pautas/video-8-brasil/miniaturas/ (que não foi editada), copiada, com a pasta, os títulos, o selo e as listas mudados:
- folha.png: a m1 ("1 IN 3 MILLION") e a m2 ("NO VIPERS"), com o título que a Sala mandou depois do cético: "Australia Has the Venom. Why
  Doesn't It Have the Deaths?";
- folha-reserva.png: a "SPIDER DEATHS / ZERO" (reserva-aranhas), que estava feita quando a Sala trocou as miniaturas, com o título do pedido
  original ("Why So Few People Die From Australia's Deadly Animals"). A "NOT THE KILLER" não chegou a ser feita.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/folha.py        (da raiz; grava folha.png e folha-reserva.png)
"""
import os
from PIL import Image, ImageDraw, ImageFont

RAIZ = os.getcwd()
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"
PASTA = os.path.join(RAIZ, "roteiros", "australia-animais", "miniatura")
FONTE = os.path.join(RAIZ, "marca", "fontes", "inter", "Inter-VF.ttf")
FUNDO = (15, 15, 15)
CINZA = (170, 170, 170)
DURACAO = "15:54"   # ilustrativa: os 15,9 min de fala da pauta v1 (§7)


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
    w = d.textlength(DURACAO, font=f)
    h = 24 * escala
    m = 8 * escala
    x1, y1 = im.width - m, im.height - m
    d.rounded_rectangle([x1 - w - 10 * escala, y1 - h - 8 * escala, x1, y1], radius=max(2, 5 * escala), fill=(0, 0, 0, 200))
    d.text((x1 - 5 * escala, y1 - 4 * escala), DURACAO, font=f, fill=(255, 255, 255), anchor="rd")
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
    col = Image.new("RGB", (W, 720 + 150 + 330), FUNDO)
    d = ImageDraw.Draw(col)
    col.paste(cantos(selo(img1280.copy(), 1.6), 22), (0, 0))
    f1 = fonte(40, 600)
    y = 720 + 22
    for l in quebrar(d, titulo, f1, W - 20):
        d.text((4, y), l, font=f1, fill=(255, 255, 255))
        y += 50
    d.text((4, y + 4), "Alpha Point" + (" · " + rotulo if rotulo else ""), font=fonte(28, 400), fill=CINZA)
    y0 = 720 + 150 + 20
    p320 = cantos(selo(img1280.resize((320, 180), Image.LANCZOS), 0.5), 8)
    col.paste(p320, (0, y0))
    f2 = fonte(16, 600)
    yy = y0 + 180 + 8
    for l in quebrar(d, titulo, f2, 320):
        d.text((0, yy), l, font=f2, fill=(255, 255, 255))
        yy += 21
    p168 = cantos(selo(img1280.resize((168, 94), Image.LANCZOS), 0.5), 6)
    x168 = 360
    col.paste(p168, (x168, y0))
    # a 168 ampliada 3 vezes, encostada à direita da coluna (só para a Sala conferir a palavra; o YouTube mostra a de 168)
    x3 = W - 168 * 3
    f3 = fonte(14, 600)
    yy = y0 + 2
    for l in quebrar(d, titulo, f3, x3 - (x168 + 168 + 10) - 16, linhas=3):
        d.text((x168 + 168 + 10, yy), l, font=f3, fill=(255, 255, 255))
        yy += 19
    d.text((x168 + 168 + 10, yy + 2), "Alpha Point", font=fonte(12, 400), fill=CINZA)
    z = cantos(selo(img1280.resize((168, 94), Image.LANCZOS), 0.5), 6).resize((168 * 3, 94 * 3), Image.NEAREST)
    col.paste(z, (x3, y0))
    d.text((x3, y0 + 94 * 3 + 6), "168 ampliada 3× (conferência)", font=fonte(14, 400), fill=CINZA)
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


# ── a folha: as duas do teste, com o título da Sala (depois do cético, K2) ──
FOLHAS = [("folha.png", "Australia Has the Venom. Why Doesn't It Have the Deaths?",
           [("m1", "m1 · 1 IN 3 MILLION"), ("m2", "m2 · NO VIPERS")]),
          ("folha-reserva.png", "Why So Few People Die From Australia's Deadly Animals",
           [("reserva-aranhas", "reserva · SPIDER DEATHS / ZERO (o título do pedido original)")])]
for arquivo, titulo, minis in FOLHAS:
    cols = []
    for nome, rot in minis:
        p = os.path.join(PASTA, nome + "-1280.jpg")
        if not os.path.exists(p):
            print("sem miniatura ainda:", nome)
            continue
        cols.append(coluna(Image.open(p).convert("RGB"), titulo, rot))
    if cols:
        montar(cols, os.path.join(PASTA, arquivo))
