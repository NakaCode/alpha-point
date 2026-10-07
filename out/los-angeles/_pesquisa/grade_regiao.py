# -*- coding: utf-8 -*-
"""Região da folha com grade rotulada em coordenadas da imagem inteira. Uso: python grade_regiao.py <img> x0 y0 x1 y1 escala passo saida"""
import sys
from PIL import Image, ImageDraw
Image.MAX_IMAGE_PIXELS = None
img, x0, y0, x1, y1, esc, passo, out = sys.argv[1], *map(int, sys.argv[2:6]), float(sys.argv[6]), int(sys.argv[7]), sys.argv[8]
im = Image.open(img).convert('RGB').crop((x0, y0, x1, y1))
im = im.resize((int(im.size[0] * esc), int(im.size[1] * esc)), Image.LANCZOS)
d = ImageDraw.Draw(im)
for v in range((x0 // passo + 1) * passo, x1, passo):
    X = (v - x0) * esc
    d.line([(X, 0), (X, im.size[1])], fill=(255, 0, 0) if v % (passo * 2) == 0 else (255, 160, 160), width=1)
    d.text((X + 2, 2), str(v), fill=(220, 0, 0))
for v in range((y0 // passo + 1) * passo, y1, passo):
    Y = (v - y0) * esc
    d.line([(0, Y), (im.size[0], Y)], fill=(255, 0, 0) if v % (passo * 2) == 0 else (255, 160, 160), width=1)
    d.text((2, Y + 2), str(v), fill=(220, 0, 0))
im.save(out)
