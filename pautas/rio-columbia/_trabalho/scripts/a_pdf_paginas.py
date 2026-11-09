"""Imprime o texto de páginas de um PDF local (PyMuPDF).

Uso: python -I -X utf8 -B a_pdf_paginas.py <arquivo.pdf> <de> <ate>   (páginas a partir de 1)
"""
import sys

import fitz


def main():
    doc = fitz.open(sys.argv[1])
    de, ate = int(sys.argv[2]), int(sys.argv[3])
    for i in range(de - 1, min(ate, len(doc))):
        print(f"===== página {i + 1} =====")
        print(doc[i].get_text())


main()
