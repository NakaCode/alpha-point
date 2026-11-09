"""Leitor B: le o PDF 'AllSales' da LHDA (relatorio de vendas de agua e royalties, linha por mes) e imprime
os totais por ano (os blocos 'Total Sales ... Accumulated Delivery ... Total Revenue') e as linhas de 2024-2026.

Uso: python -I -X utf8 -B b_royalties.py <AllSales.pdf>
So le o arquivo local. Unidades do relatorio: entregas em milhoes de m3 (MCM); receita em rand (R) ate 2000-e-pouco e em maloti (M) depois (1 M = 1 R).
"""
import re
import sys

import fitz  # PyMuPDF


def main():
    d = fitz.open(sys.argv[1])
    toks = []
    for p in d:
        toks += [t.strip() for t in p.get_text().splitlines() if t.strip()]
    # blocos de total anual
    i = 0
    ano = None
    ultimo_mes = None
    meses = re.compile(r"^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)-(\d\d)$")
    while i < len(toks):
        t = toks[i]
        m = meses.match(t)
        if m:
            ultimo_mes = t
            ano = m.group(2)
        if t == "Total Sales":
            # tokens seguintes: [entrega real] [entrega faturada]? 'Accumulated Delivery' '=' valor 'Total Revenue' valor
            j = i + 1
            vals = []
            while j < len(toks) and toks[j] != "Total Revenue" and j < i + 14:
                vals.append(toks[j])
                j += 1
            rev = toks[j + 1] if j + 1 < len(toks) and toks[j] == "Total Revenue" else "?"
            print(f"ate {ultimo_mes}: Total Sales {vals} -> Total Revenue {rev}")
            i = j
        i += 1
    print("--- cabecalho da ultima pagina (taxas unitarias etc.) ---")
    last = [t.strip() for t in d[len(d) - 2].get_text().splitlines() if t.strip()][:30]
    print(" | ".join(last))


if __name__ == "__main__":
    main()
