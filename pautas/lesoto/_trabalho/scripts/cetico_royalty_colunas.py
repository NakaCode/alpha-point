"""Cetico (09/11/2026): todas as colunas do AllSales para os meses de 2024-01 a 2025-07 (a entrega real, a faturada, a demanda,
o follow-up, o 'Converted', o excesso e as tres partes do royalty), e o cabecalho da tabela. Mostra a agua mandada a mais antes do
tunel fechar (excesso de mai a set/2024) e cobrada como 'Converted' em out e nov/2024.
Uso: python -I -X utf8 -B cetico_royalty_colunas.py <AllSales.pdf>
"""
import re
import sys

import fitz

rx = re.compile(r"^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)-(\d\d)$")
toks = []
d = fitz.open(sys.argv[1])
print("--- cabecalho (primeiros 60 tokens da p1)")
p1 = [t.strip() for t in d[0].get_text().splitlines() if t.strip()]
print(" | ".join(p1[:60]))
for p in d:
    toks += [t.strip() for t in p.get_text().splitlines() if t.strip()]
i = 0
while i < len(toks):
    m = rx.match(toks[i])
    if m and i + 11 < len(toks) and re.match(r"^\d+$", toks[i + 1]):
        ano = 2000 + int(m.group(2))
        if (ano == 2024) or (ano == 2025 and m.group(1) in ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul")):
            print(toks[i], " | ".join(toks[i + 1: i + 12]))
        i += 12
        continue
    i += 1
