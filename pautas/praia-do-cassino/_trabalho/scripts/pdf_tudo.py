"""Imprime o texto inteiro de um PDF (PyMuPDF), página por página, com as linhas juntadas em parágrafos.

Uso: python -I -X utf8 -B pdf_tudo.py <arquivo.pdf>
Só lê o arquivo local.
"""
import sys

import fitz  # PyMuPDF

if len(sys.argv) < 2:
    print("uso: pdf_tudo.py <arquivo.pdf>")
    sys.exit(2)
doc = fitz.open(sys.argv[1])
for i, pag in enumerate(doc, 1):
    txt = pag.get_text("text")
    linhas = [l.strip() for l in txt.splitlines()]
    print(f"=== página {i} ===")
    print(" ".join(l for l in linhas if l).replace("- ", ""))
