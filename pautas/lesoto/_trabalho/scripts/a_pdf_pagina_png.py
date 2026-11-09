"""Rasteriza uma página de PDF para PNG (PyMuPDF) e imprime o caminho.

Uso: python -I -X utf8 -B a_pdf_pagina_png.py <arquivo.pdf> <pagina-1based> <saida.png> [--zoom=2]
"""
import sys

import fitz  # PyMuPDF


def main():
    pdf, pagina, saida = sys.argv[1], int(sys.argv[2]), sys.argv[3]
    zoom = 2.0
    for a in sys.argv[4:]:
        if a.startswith("--zoom="):
            zoom = float(a.split("=", 1)[1])
    doc = fitz.open(pdf)
    pg = doc[pagina - 1]
    pix = pg.get_pixmap(matrix=fitz.Matrix(zoom, zoom))
    pix.save(saida)
    print(f"gravado={saida} largura={pix.width} altura={pix.height}")


if __name__ == "__main__":
    main()
