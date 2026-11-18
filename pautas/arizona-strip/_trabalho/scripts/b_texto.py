# b_texto.py <arquivo.html> <regex> [largura]: tira as tags e mostra o contexto de cada ocorrência (leitor B, 18/11/2026)
import re, sys, html
arq, pad = sys.argv[1], sys.argv[2]
larg = int(sys.argv[3]) if len(sys.argv) > 3 else 300
t = open(arq, encoding='utf-8', errors='replace').read()
t = re.sub(r'(?is)<(script|style).*?</\1>', ' ', t)
t = re.sub(r'(?s)<[^>]+>', ' ', t)
t = html.unescape(re.sub(r'\s+', ' ', t))
n = 0
for m in re.finditer(pad, t, re.I):
    n += 1
    print('[%d] ...%s...' % (n, t[max(0, m.start()-larg):m.end()+larg]))
    print()
if n == 0:
    print('NADA ACHADO para', pad)
