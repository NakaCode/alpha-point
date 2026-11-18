# Rasteriza uma pagina de PDF em PNG (PyMuPDF). Uso: python -I -X utf8 -B pdf_pagina.py <pdf> <pagina 1-based> <saida.png> [dpi]
import sys, fitz
doc = fitz.open(sys.argv[1]); p = doc[int(sys.argv[2]) - 1]
dpi = int(sys.argv[4]) if len(sys.argv) > 4 else 150
p.get_pixmap(dpi=dpi).save(sys.argv[3]); print("ok", sys.argv[3])
