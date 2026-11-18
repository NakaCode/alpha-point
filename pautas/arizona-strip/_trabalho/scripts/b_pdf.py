# b_pdf.py <arquivo.pdf> <regex> [largura] : extrai o texto do PDF (PyMuPDF) e mostra o contexto de cada ocorrência (leitor B)
import sys, re
import fitz
arq, pad = sys.argv[1], sys.argv[2]
larg = int(sys.argv[3]) if len(sys.argv) > 3 else 300
doc = fitz.open(arq)
t = ' '.join(p.get_text() for p in doc)
t = re.sub(r'\s+', ' ', t)
print('páginas', len(doc), 'caracteres', len(t))
n = 0
for m in re.finditer(pad, t, re.I):
    n += 1
    print('[%d] ...%s...\n' % (n, t[max(0, m.start() - larg):m.end() + larg]))
    if n >= 8: break
if n == 0: print('NADA ACHADO para', pad)
