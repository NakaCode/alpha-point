# -*- coding: utf-8 -*-
"""Recorte ampliado com grade de pixels, para ler a coordenada de um cruzamento numa folha escaneada.
Uso: python zoom_grade.py <imagem> <cx> <cy> <saida.png> [meia=100] [fator=4]
A grade tem linha fina a cada 10 px e rótulo a cada 50 px (coordenadas da imagem inteira)."""
import sys
from PIL import Image, ImageDraw
Image.MAX_IMAGE_PIXELS = None
img, cx, cy, out = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
meia = int(sys.argv[5]) if len(sys.argv) > 5 else 100
k = int(sys.argv[6]) if len(sys.argv) > 6 else 4
im = Image.open(img).convert('RGB')
x0, y0 = cx - meia, cy - meia
r = im.crop((x0, y0, cx + meia, cy + meia)).resize((2 * meia * k, 2 * meia * k), Image.NEAREST)
d = ImageDraw.Draw(r)
for v in range((x0 // 10 + 1) * 10, cx + meia, 10):
    X = (v - x0) * k
    d.line([(X, 0), (X, r.size[1])], fill=(255, 0, 0) if v % 50 == 0 else (255, 170, 170), width=1)
    if v % 50 == 0:
        d.text((X + 2, 2), str(v), fill=(200, 0, 0))
for v in range((y0 // 10 + 1) * 10, cy + meia, 10):
    Y = (v - y0) * k
    d.line([(0, Y), (r.size[0], Y)], fill=(255, 0, 0) if v % 50 == 0 else (255, 170, 170), width=1)
    if v % 50 == 0:
        d.text((2, Y + 2), str(v), fill=(200, 0, 0))
r.save(out)
