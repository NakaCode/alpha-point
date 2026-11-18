# b_pagina.py <arquivo.html> [n_chars] [ini]: imprime o texto da página (sem tags) a partir do corpo principal (leitor B)
import re, sys, html
arq = sys.argv[1]; n = int(sys.argv[2]) if len(sys.argv) > 2 else 5000; ini = int(sys.argv[3]) if len(sys.argv) > 3 else 0
t = open(arq, encoding='utf-8', errors='replace').read()
t = re.sub(r'(?is)<(script|style|nav|header|footer).*?</\1>', ' ', t)
t = re.sub(r'(?s)<[^>]+>', ' ', t)
t = html.unescape(re.sub(r'\s+', ' ', t))
for marca in ('Skip to the footer section',):
    i = t.find(marca)
    if i >= 0: t = t[i + len(marca):]
print(t[ini:ini + n])
