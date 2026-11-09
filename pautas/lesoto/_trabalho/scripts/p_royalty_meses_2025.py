"""Pauta v2 (09/11/2026): todas as colunas do AllSales da LHDA de 2025-05 a 2026-08, para conferir out/2025 contra os meses vizinhos.
Mesma leitura do cetico_royalty_colunas.py (12 tokens por mes), so com outro recorte.
Uso: python -I -X utf8 -B p_royalty_meses_2025.py <AllSales.pdf>
So le o arquivo local.
"""
import re
import sys

import fitz  # PyMuPDF

rx = re.compile(r"^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)-(\d\d)$")
ORD = {"Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6, "Jul": 7, "Aug": 8, "Sept": 9, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12}
d = fitz.open(sys.argv[1])
p1 = [t.strip() for t in d[0].get_text().splitlines() if t.strip()]
print("--- cabecalho (primeiros 60 tokens da p1)")
print(" | ".join(p1[:60]))
toks = []
for p in d:
    toks += [t.strip() for t in p.get_text().splitlines() if t.strip()]
i = 0
while i < len(toks):
    m = rx.match(toks[i])
    if m and i + 11 < len(toks) and re.match(r"^\d+$", toks[i + 1]):
        chave = (2000 + int(m.group(2))) * 100 + ORD[m.group(1)]
        if 202505 <= chave <= 202608:
            print(toks[i], " | ".join(toks[i + 1: i + 12]))
        i += 12
        continue
    i += 1
