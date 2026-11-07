"""Extrai o texto de um PDF (PyMuPDF) e imprime as linhas que casam com um padrão, com contexto.

Uso: python -I -X utf8 -B pdf_texto.py <arquivo.pdf> <regex> [--ctx=N] [--paginas]

Com --paginas, imprime só quantas páginas há e quantos caracteres de texto cada uma tem.
Só lê o arquivo local.
"""
import re
import sys

import fitz  # PyMuPDF


def main():
    if len(sys.argv) < 3:
        print("uso: pdf_texto.py <arquivo.pdf> <regex> [--ctx=N] [--paginas]")
        sys.exit(2)
    caminho, padrao = sys.argv[1], sys.argv[2]
    ctx = 2
    for a in sys.argv[3:]:
        if a.startswith("--ctx="):
            ctx = int(a.split("=", 1)[1])
    doc = fitz.open(caminho)
    if "--paginas" in sys.argv[3:]:
        for i, p in enumerate(doc):
            print(f"p{i + 1}: {len(p.get_text())} caracteres")
        return
    rx = re.compile(padrao, re.IGNORECASE)
    for i, p in enumerate(doc):
        linhas = p.get_text().splitlines()
        for j, l in enumerate(linhas):
            if rx.search(l):
                ini, fim = max(0, j - ctx), min(len(linhas), j + ctx + 1)
                trecho = " | ".join(x.strip() for x in linhas[ini:fim])
                print(f"p{i + 1} l{j}: {trecho}")


if __name__ == "__main__":
    main()
