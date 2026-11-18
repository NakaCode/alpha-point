# Rasteriza uma pagina de PDF (PyMuPDF) para conferir a olho o texto que o OCR embaralhou.
# Uso: python -I -X utf8 -B pdf_pagina.py <arquivo.pdf> <pagina 1-based> <saida.png> [dpi] [x0 y0 x1 y1 em fracao da pagina]
import sys, fitz
doc = fitz.open(sys.argv[1])
p = doc[int(sys.argv[2]) - 1]
dpi = int(sys.argv[4]) if len(sys.argv) > 4 else 150
clip = None
if len(sys.argv) > 8:
    r = p.rect
    x0, y0, x1, y1 = (float(v) for v in sys.argv[5:9])
    clip = fitz.Rect(r.x0 + x0 * r.width, r.y0 + y0 * r.height, r.x0 + x1 * r.width, r.y0 + y1 * r.height)
pix = p.get_pixmap(dpi=dpi, clip=clip)
pix.save(sys.argv[3])
print(sys.argv[3], pix.width, pix.height)
