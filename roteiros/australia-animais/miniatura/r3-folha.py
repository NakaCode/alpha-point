"""A folha da rodada 3 das miniaturas da Austrália (r3-n1, r3-n2, r3-n3; 18/11/2026; o pedido: pautas/australia-animais/_trabalho/
pedido-miniaturas-r3.md): cada uma AO LADO da da rodada 2, a 320 e a 168, com o título com que ela vai ao Test & Compare embaixo, como o espectador
vê no YouTube. Uma linha por par:
- r2-n1 e r3-n1 com "Australia's Deadliest Snake Isn't Its Most Venomous One" (o título 3);
- r2-n1 e r3-n1 com "Why Does Australia Have So Many Dangerous Animals?" (o do Lucas; a "NOT THE KILLER" vai com os dois);
- r2-n2 e r3-n2 com "Why So Few People Die From Australia's Deadly Animals" (o título 2);
- r2-n3 e r3-n3 (a reserva) com o título 2, o par mais forte dela no teste dos leitores.
Em cada metade: a 320 com o título embaixo (o celular), a 168 com o título ao lado (os "próximos vídeos") e a 168 ampliada 3 vezes, só para conferir
a palavra (o YouTube mostra a de 168). O selo de duração (14:36) é ILUSTRATIVO: os 14,6 min de fala da pauta v2 (§7).

As funções de desenho (o selo, os cantos, a quebra do título) são cópia das do r2-folha.py, que não foi editado.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/r3-folha.py        (da raiz; grava r3-folha.png; sem rede)
"""
import os
from PIL import Image, ImageDraw, ImageFont

RAIZ = os.getcwd()
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"
PASTA = os.path.join(RAIZ, "roteiros", "australia-animais", "miniatura")
FONTE = os.path.join(RAIZ, "marca", "fontes", "inter", "Inter-VF.ttf")
FUNDO = (15, 15, 15)
CINZA = (170, 170, 170)
DURACAO = "14:36"   # ilustrativa: os 14,6 min de fala da pauta v2 (§7)
T1 = "Why Does Australia Have So Many Dangerous Animals?"
T2 = "Why So Few People Die From Australia's Deadly Animals"
T3 = "Australia's Deadliest Snake Isn't Its Most Venomous One"


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


def metade(img1280, titulo, rotulo):
    """uma metade da linha: o rótulo; a 320 com o título embaixo; a 168 com o título ao lado; a 168 ampliada 3 vezes"""
    W, H = 320 + 14 + 168 + 168 + 14 + 168 * 3, 30 + 282 + 30
    m = Image.new("RGB", (W, H), FUNDO)
    d = ImageDraw.Draw(m)
    d.text((0, 2), rotulo, font=fonte(20, 700), fill=(255, 255, 255))
    y0 = 30
    m.paste(cantos(selo(img1280.resize((320, 180), Image.LANCZOS), 0.5), 8), (0, y0))
    f2 = fonte(16, 600)
    yy = y0 + 180 + 8
    for l in quebrar(d, titulo, f2, 320):
        d.text((0, yy), l, font=f2, fill=(255, 255, 255))
        yy += 21
    d.text((0, yy + 2), "Alpha Point", font=fonte(13, 400), fill=CINZA)
    x168 = 320 + 14
    p168 = cantos(selo(img1280.resize((168, 94), Image.LANCZOS), 0.5), 6)
    m.paste(p168, (x168, y0))
    f3 = fonte(14, 600)
    yy = y0 + 2
    for l in quebrar(d, titulo, f3, 160, linhas=3):
        d.text((x168 + 168 + 8, yy), l, font=f3, fill=(255, 255, 255))
        yy += 19
    d.text((x168 + 168 + 8, yy + 2), "Alpha Point", font=fonte(12, 400), fill=CINZA)
    x3 = W - 168 * 3
    m.paste(p168.resize((168 * 3, 94 * 3), Image.NEAREST), (x3, y0))
    d.text((x3, y0 + 94 * 3 + 4), "168 ampliada 3× (conferência)", font=fonte(13, 400), fill=CINZA)
    return m


LINHAS = [("r2-n1", "r3-n1", T3, "NOT THE KILLER · com o título 3"),
          ("r2-n1", "r3-n1", T1, "NOT THE KILLER · com o título do Lucas"),
          ("r2-n2", "r3-n2", T2, "10 YEARS OF VENOM < 1 MONTH · com o título 2"),
          ("r2-n3", "r3-n3", T2, "SNAKES 35 / BEES & WASPS 42 (reserva) · com o título 2")]
abrir = lambda n: Image.open(os.path.join(PASTA, n + "-1280.jpg")).convert("RGB")
blocos = []
for antes, depois, titulo, nome in LINHAS:
    a = metade(abrir(antes), titulo, "rodada 2 · " + antes)
    b = metade(abrir(depois), titulo, "rodada 3 · " + depois)
    gap = 50
    blk = Image.new("RGB", (a.width + gap + b.width, a.height + 40), FUNDO)
    d = ImageDraw.Draw(blk)
    d.text((0, 0), nome, font=fonte(24, 700), fill=(255, 196, 46))
    blk.paste(a, (0, 36))
    d.line([(a.width + gap // 2, 40), (a.width + gap // 2, blk.height - 4)], fill=(60, 60, 60), width=2)
    blk.paste(b, (a.width + gap, 36))
    blocos.append(blk)
margem, entre = 40, 36
W = max(b.width for b in blocos) + 2 * margem
H = sum(b.height for b in blocos) + entre * (len(blocos) - 1) + 2 * margem + 40
folha = Image.new("RGB", (W, H), FUNDO)
ImageDraw.Draw(folha).text((margem, 14), "Rodada 3 · as miniaturas do vídeo 8 (Austrália), cada uma ao lado da da rodada 2, a 320 e a 168 · selo de duração "
                           "ilustrativo", font=fonte(22, 500), fill=CINZA)
y = margem + 30
for b in blocos:
    folha.paste(b, (margem, y))
    y += b.height + entre
destino = os.path.join(PASTA, "r3-folha.png")
folha.save(destino, optimize=True)
print("gravada:", os.path.relpath(destino, RAIZ), folha.size)
