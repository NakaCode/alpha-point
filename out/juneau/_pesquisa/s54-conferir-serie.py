#!/usr/bin/env python3
"""
s54 · confere a série diária "ANS West Coast" do Alaska Department of Revenue (pesquisa-dados, 28/09/2026).

Só lê: não grava nada, não vai à rede. Rode da raiz do canal:
    python out/juneau/_pesquisa/s54-conferir-serie.py           # a cópia, o calendário, os extremos e o FSEIS
    python out/juneau/_pesquisa/s54-conferir-serie.py --dados   # e também out/juneau/_dados/s54.json › serie

O que confere:
 1. A CÓPIA. O campo 'tabela' de s54-serie-ans-west-coast-dor.json (gravado pelo Claude central, que leu a
    tabela na tela, no navegador do app, em 28/09/2026) contra a 'prova_da_copia' que ele calculou na página:
    o sha256 da cadeia, o número de linhas com preço e a soma em centavos.
 2. O CALENDÁRIO. Datas únicas e crescentes, nenhuma em fim de semana, nenhuma fora do período pedido
    (1º/02/2013 a 31/01/2016), e a lista dos dias úteis sem preço.
 3. OS EXTREMOS. Máximo e mínimo do período, e a queda entre eles.
 4. O FSEIS 2018 (cópia local; o sha256 tem de ser o registrado em _dados/s54.json):
    - o trecho da p. 2-43 (PDF p. 123): "a high of more than $116 per barrel in February 2013 to a low of just
      over $26 per barrel in January 2016". "Just over" se lê aqui como "menos de $1 acima" (critério meu);
    - o Graph 2-1 da p. 2-44 (PDF p. 124), a imagem embutida (554 × 341 px). A escala sai da própria imagem:
      as 8 linhas de grade ($140 a $0) e os 5 tiques do eixo x (12/3/2012 a 12/3/2016, como os rótulos dizem).
      A série se sobrepõe ao traço azul nos dois sentidos: cada ponto do DOR até o pixel azul mais próximo, e
      cada pixel azul (dentro do período) até a poligonal do DOR. Passa com todo ponto a até 1,5 px do traço e
      todo pixel a até 2,5 px da série (1 px = $0,60; o traço tem uns 4 px de espessura).
 5. (--dados) Que _dados/s54.json › serie tem os mesmos 748 pontos, com as datas em ISO.

Sai 0 se tudo confere; 1 se algo não confere; 2 se não pôde medir (arquivo ou biblioteca faltando, imagem
diferente da medida). Precisa de PyMuPDF (fitz), numpy e Pillow.
"""
import datetime as dt
import hashlib
import json
import re
import sys
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

RAIZ = Path.cwd()
COPIA = RAIZ / "out/juneau/_pesquisa/s54-serie-ans-west-coast-dor.json"
DADOS = RAIZ / "out/juneau/_dados/s54.json"
FSEIS = RAIZ / "midia/juneau/fontes/triagem/fseis.pdf"
SHA_FSEIS = "6bc7a2f30a6648949b0626095d2f98a259966c345cf0a773691b20dba51f0281"
INICIO, FIM = dt.date(2013, 2, 1), dt.date(2016, 1, 31)
TIQUES = [dt.date(2012, 12, 3), dt.date(2013, 12, 3), dt.date(2014, 12, 3), dt.date(2015, 12, 3), dt.date(2016, 12, 3)]

falhas, nao_medido = [], []


def ok(cond, texto):
    print(("  ✓ " if cond else "  ✗ ") + texto)
    if not cond:
        falhas.append(texto)


def nm(texto):
    print("  NÃO MEDIDO: " + texto)
    nao_medido.append(texto)


def ler_copia():
    src = json.loads(COPIA.read_text(encoding="utf-8"))
    pts = []
    for linha in src["tabela"].split(";"):
        d, p = linha.split(",")
        m, dd, a = map(int, d.split("/"))
        if not re.fullmatch(r"\d+\.\d\d", p):
            raise ValueError(f"preço fora do formato: {linha!r}")
        pts.append((dt.date(a, m, dd), p))
    return src, pts


def main():
    if not COPIA.exists():
        print(f"NÃO MEDIDO: falta {COPIA}")
        return 2
    src, pts = ler_copia()
    prova = src["prova_da_copia"]

    print("1 · a cópia contra a página")
    sha = hashlib.sha256(src["tabela"].encode("utf-8")).hexdigest()
    ok(sha == prova["sha256_da_tabela"], f"sha256 da cadeia {sha[:16]}… = o calculado na página")
    ok(len(pts) == prova["linhas_com_preco"], f"{len(pts)} linhas com preço = {prova['linhas_com_preco']}")
    soma = sum(int(p.replace(".", "")) for _, p in pts)
    ok(soma == prova["soma_centavos"], f"soma {soma} centavos = {prova['soma_centavos']}")

    print("2 · o calendário")
    datas = [d for d, _ in pts]
    ok(all(a < b for a, b in zip(datas, datas[1:])), "datas únicas e crescentes")
    ok(not [d for d in datas if d.weekday() >= 5], "nenhuma data em fim de semana")
    ok(not [d for d in datas if not INICIO <= d <= FIM], "nenhuma data fora de 1º/02/2013–31/01/2016")
    dias = [INICIO + dt.timedelta(days=i) for i in range((FIM - INICIO).days + 1)]
    uteis = [d for d in dias if d.weekday() < 5]
    sem = [d for d in uteis if d not in set(datas)]
    print(f"    {len(dias)} dias no período, {len(uteis)} úteis; {len(sem)} dias úteis sem preço:")
    print("    " + ", ".join(d.isoformat() for d in sem))

    print("3 · os extremos")
    vals = [(d, float(p)) for d, p in pts]
    mx = max(vals, key=lambda t: t[1])
    mn = min(vals, key=lambda t: t[1])
    queda = (mx[1] - mn[1]) / mx[1] * 100
    print(f"    máximo ${mx[1]:.2f} em {mx[0]} · mínimo ${mn[1]:.2f} em {mn[0]} · queda de {queda:.2f} %")
    ok(mx[0].year == 2013 and mx[0].month == 2 and mx[1] > 116, "o máximo do período é de fevereiro de 2013 e passa de $116")
    ok(mn[0].year == 2016 and mn[0].month == 1 and 26 < mn[1] < 27, "o mínimo do período é de janeiro de 2016 e fica pouco acima de $26 (menos de $1)")
    ok(queda > 75, "a queda passa de três quartos")

    print("4 · o FSEIS 2018 (cópia local)")
    try:
        import fitz  # PyMuPDF
        import numpy as np
        from PIL import Image
    except ImportError as e:
        nm(f"falta biblioteca ({e.name}): o passo 4 não rodou")
        return fim(pts)
    if not FSEIS.exists():
        nm(f"falta {FSEIS}")
        return fim(pts)
    sha_f = hashlib.sha256(FSEIS.read_bytes()).hexdigest()
    ok(sha_f == SHA_FSEIS, f"sha256 da cópia local do FSEIS {sha_f[:16]}… = o registrado")
    doc = fitz.open(str(FSEIS))
    t123 = " ".join(doc[122].get_text().split())
    t124 = " ".join(doc[123].get_text().split())
    ok("going from a high of more than $116 per barrel in February 2013 to a low of just over $26 per barrel in January 2016" in t123,
       "p. 2-43 (PDF p. 123): o trecho dos dois extremos, letra a letra")
    ok("Graph 2-1: Daily West Coast Oil Price, 2012-2016" in t124 and "Source: State of Alaska, 2017b" in t124,
       "p. 2-44 (PDF p. 124): a legenda do Graph 2-1 e a fonte dele")
    imgs = doc[123].get_images(full=True)
    if not imgs or (imgs[0][2], imgs[0][3]) != (554, 341):
        nm("a imagem do Graph 2-1 não é a de 554 × 341 px que foi medida")
        return fim(pts)
    pix = fitz.Pixmap(doc, imgs[0][0])
    if pix.n - pix.alpha >= 4:
        pix = fitz.Pixmap(fitz.csRGB, pix)
    im = np.array(Image.frombytes("RGB" if pix.n == 3 else "RGBA", (pix.width, pix.height), pix.samples).convert("RGB")).astype(int)
    H, W, _ = im.shape
    R, G, B = im[..., 0], im[..., 1], im[..., 2]
    cinza = (abs(R - G) < 12) & (abs(G - B) < 12) & (R > 190) & (R < 240)
    grade = [y for y in range(1, H - 1) if cinza[y].sum() > W * 0.5]
    y0 = grade[-1] if grade else None
    tiques = []
    if y0 is not None:
        # só na extensão da linha de grade do $0 (a maior corrida cinza), para não pegar o rótulo "$0.00"
        corridas, ini = [], None
        for x in range(1, W - 1):
            if cinza[y0, x] and ini is None:
                ini = x
            if (not cinza[y0, x] or x == W - 2) and ini is not None:
                corridas.append((ini, x - 1 if not cinza[y0, x] else x))
                ini = None
        xa, xb = max(corridas, key=lambda r: r[1] - r[0]) if corridas else (1, W - 2)
        linha = im[y0 + 2]
        tiques = [x for x in range(xa, xb + 1) if linha[x].min() < 245]
    if len(grade) != 8 or len(tiques) != 5:
        nm(f"a escala não se leu na imagem (grade {grade}, tiques {tiques})")
        return fim(pts)
    passos = [b - a for a, b in zip(grade, grade[1:])]
    if max(passos) - min(passos) > 1:
        nm(f"as linhas de grade não estão igualmente espaçadas: {grade}")
        return fim(pts)
    print(f"    escala lida na imagem: grade $140…$0 em y = {grade}; tiques em x = {tiques}")
    pxu = (grade[-1] - grade[0]) / 140.0
    pxd = (tiques[-1] - tiques[0]) / (TIQUES[-1] - TIQUES[0]).days
    for x, d in zip(tiques, TIQUES):  # os tiques do meio têm de cair na escala dos extremos
        if abs(tiques[0] + (d - TIQUES[0]).days * pxd - x) > 1:
            nm(f"o tique de {d} não cai na escala linear")
            return fim(pts)
    X = lambda d: tiques[0] + 0.5 + (d - TIQUES[0]).days * pxd
    Y = lambda p: grade[0] + 0.5 + (140 - p) * pxu
    azul = (B > 150) & (R < 150) & (B - R > 60)
    by, bx = np.nonzero(azul)
    C = np.stack([bx + 0.5, by + 0.5], axis=1)
    P = np.array([[X(d), Y(v)] for d, v in vals])
    # (a) cada ponto do DOR até o pixel azul mais próximo
    dpt = np.sqrt(((P[:, None, :] - C[None, :, :]) ** 2).sum(-1)).min(1)
    print(f"    ponto do DOR → traço: mediana {np.median(dpt):.2f} px, p95 {np.percentile(dpt, 95):.2f}, máx {dpt.max():.2f} px (${dpt.max() / pxu:.2f})")
    ok(dpt.max() <= 1.5, f"os {len(P)} pontos do DOR caem sobre o traço do gráfico (até 1,5 px)")
    # (b) cada pixel azul do período até a poligonal do DOR
    sel = (C[:, 0] >= P[0, 0] + 3) & (C[:, 0] <= P[-1, 0] - 3)
    Q = C[sel]
    A, AB = P[:-1], P[1:] - P[:-1]
    L2 = (AB ** 2).sum(1)
    AQ = Q[:, None, :] - A[None, :, :]
    tt = np.clip((AQ * AB[None]).sum(-1) / L2[None], 0, 1)
    dz = np.sqrt(((Q[:, None, :] - (A[None] + tt[..., None] * AB[None])) ** 2).sum(-1)).min(1)
    print(f"    traço → série do DOR: {len(Q)} pixels, mediana {np.median(dz):.2f} px, p95 {np.percentile(dz, 95):.2f}, máx {dz.max():.2f} px (${dz.max() / pxu:.2f})")
    ok(dz.max() <= 2.5, "nenhum pixel do traço, no período, fica longe da série de hoje (até 2,5 px)")
    # (c) o pico e o fundo desenhados, nas colunas de fev/2013 e de jan/2016
    def coluna_extrema(d1, d2, topo):
        melhor = None
        for x in range(int(X(d1)), int(X(d2)) + 1):
            ys = np.nonzero(azul[:, x])[0]
            if len(ys):
                y = ys.min() if topo else ys.max()
                if melhor is None or (y < melhor[1] if topo else y > melhor[1]):
                    melhor = (x, y)
        return melhor
    xt, yt = coluna_extrema(dt.date(2013, 2, 1), dt.date(2013, 2, 28), True)
    xf, yf = coluna_extrema(dt.date(2016, 1, 1), dt.date(2016, 1, 31), False)
    pt = 140 - (yt + 0.5 - grade[0] - 0.5) / pxu
    pf = 140 - (yf + 0.5 - grade[0] - 0.5) / pxu
    print(f"    no desenho: topo de fev/2013 na linha y={yt} (≈ ${pt:.2f}) · fundo de jan/2016 na linha y={yf} (≈ ${pf:.2f}); 1 px = ${1 / pxu:.2f}")
    ok(int(Y(mx[1])) == yt, f"o máximo do DOR (${mx[1]:.2f}) cai na mesma linha de pixel do topo desenhado")
    ok(int(Y(mn[1])) == yf, f"o mínimo do DOR (${mn[1]:.2f}) cai na mesma linha de pixel do fundo desenhado")

    return fim(pts)


def fim(pts):
    if "--dados" in sys.argv:
        print("5 · _dados/s54.json › serie")
        if not DADOS.exists():
            nm(f"falta {DADOS}")
        else:
            serie = json.loads(DADOS.read_text(encoding="utf-8")).get("serie")
            if not isinstance(serie, list):
                ok(False, "serie existe e é uma lista")
            else:
                esperado = [{"label": d.isoformat(), "valor": float(p), "unidade": "US dollars per barrel"} for d, p in pts]
                ok(len(serie) == len(esperado), f"{len(serie)} pontos = {len(esperado)}")
                ok(serie == esperado, "cada ponto: label = a data ISO, valor = o preço da cópia, unidade = US dollars per barrel")
    print()
    if falhas:
        print(f"NÃO CONFERE: {len(falhas)} item(ns)")
        return 1
    if nao_medido:
        print(f"NÃO MEDIDO: {len(nao_medido)} item(ns)")
        return 2
    print("CONFERE")
    return 0


if __name__ == "__main__":
    sys.exit(main())
