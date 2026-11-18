# Imprime o texto de paginas de um PDF (PyMuPDF). Uso: python -X utf8 -B pdf_paginas.py <pdf> <p1> [<p2> ...] (1-based)
import sys, re, fitz
doc = fitz.open(sys.argv[1])
for p in sys.argv[2:]:
    i = int(p) - 1
    print("=== pagina", p, "===")
    print(re.sub(r"[ \t]+", " ", doc[i].get_text())[:3000])
