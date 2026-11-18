# Leitor C (vídeo 8, australia-animais). Extrai o texto de um PDF baixado (PyMuPDF) e mostra os trechos com as palavras pedidas. Nao faz pedido de rede.
# Uso: python -X utf8 -B c_pdf.py <arquivo.pdf> [--gravar] [--n=350] [--max=6] [--pag=1-5] <palavra> [...]
import sys, re
import fitz  # PyMuPDF

args = [a for a in sys.argv[1:] if not a.startswith('--')]
flags = [a for a in sys.argv[1:] if a.startswith('--')]
n = 350
mx = 6
pag = None
for f in flags:
    if f.startswith('--n='):
        n = int(f[4:])
    if f.startswith('--max='):
        mx = int(f[6:])
    if f.startswith('--pag='):
        a, b = f[6:].split('-')
        pag = (int(a), int(b))
path = args[0]
palavras = args[1:]
doc = fitz.open(path)
partes = []
for i, p in enumerate(doc):
    if pag and not (pag[0] <= i + 1 <= pag[1]):
        continue
    partes.append('\n[[p.%d]]\n' % (i + 1) + p.get_text())
t = ''.join(partes)
print('paginas:', len(doc), 'chars:', len(t))
if '--gravar' in flags:
    out = re.sub(r'\.pdf$', '', path, flags=re.I) + '.txt'
    open(out, 'w', encoding='utf-8').write(t)
    print('gravado', out)
low = t.lower()
for w in palavras:
    k = low.find(w.lower())
    achou = 0
    while k >= 0 and achou < mx:
        pg = t.rfind('[[p.', 0, k)
        print('[%s] @%d %s: %s' % (w, k, t[pg:pg + 8].split(']')[0] if pg >= 0 else '', ' '.join(t[max(0, k - n):k + n].split())))
        print('---')
        achou += 1
        k = low.find(w.lower(), k + len(w))
    if achou == 0:
        print('[%s] NAO ACHOU' % w)
