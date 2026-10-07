# -*- coding: utf-8 -*-
"""Sobrepõe os polígonos refinados (vermelho) a uma região da folha, para conferir a olho.
Uso: python hamlin_sobrepor.py x0 y0 x1 y1 escala saida [ids...]"""
import json, os, sys
from PIL import Image, ImageDraw
Image.MAX_IMAGE_PIXELS = None
AQUI = os.path.dirname(os.path.abspath(__file__))
IMG = os.path.join(AQUI, '..', '_tmp', 'geo-fontes', 'hamlin1916', 'hamlin-1916-LOC-2006627663.jpg')
x0, y0, x1, y1 = map(int, sys.argv[1:5]); esc = float(sys.argv[5]); out = sys.argv[6]; ids = sys.argv[7:]
ref = json.load(open(os.path.join(AQUI, '..', '_tmp', 'hamlin-vertices-refinados.json'), encoding='utf-8'))
im = Image.open(IMG).convert('RGB').crop((x0, y0, x1, y1))
im = im.resize((int(im.size[0] * esc), int(im.size[1] * esc)), Image.LANCZOS)
d = ImageDraw.Draw(im)
cores = [(255, 0, 0), (0, 160, 0), (255, 0, 255), (255, 120, 0), (0, 150, 150)]
for k, (pid, vs) in enumerate(ref.items()):
    if ids and pid not in ids: continue
    P = [((v[0] - x0) * esc, (v[1] - y0) * esc) for v in vs]
    d.line(P + [P[0]], fill=cores[k % len(cores)], width=1)
    for j, (x, y) in enumerate(P):
        if -5 < x < im.size[0] + 5 and -5 < y < im.size[1] + 5:
            d.text((x + 2, y + 1), str(j), fill=cores[k % len(cores)])
im.save(out)
