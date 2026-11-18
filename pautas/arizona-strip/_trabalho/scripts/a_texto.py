# Leitor A (vídeo 8, arizona-strip). Converte uma página HTML baixada em texto e mostra os trechos com as palavras pedidas.
# Uso: python -X utf8 -B a_texto.py <arquivo.html> [--gravar] [--n=400] <palavra> [...]
#   --gravar grava <arquivo>.txt ao lado; --n=<chars> muda o contexto (padrão 350).
import sys, re, html

args = [a for a in sys.argv[1:] if not a.startswith('--')]
flags = [a for a in sys.argv[1:] if a.startswith('--')]
n = 350
for f in flags:
    if f.startswith('--n='):
        n = int(f[4:])
path = args[0]
palavras = args[1:]
t = open(path, encoding='utf-8', errors='replace').read()
t = re.sub(r'<(script|style|noscript)[^>]*>.*?</\1>', ' ', t, flags=re.S | re.I)
t = re.sub(r'<(br|/p|/div|/li|/h\d|/tr|/td)[^>]*>', '\n', t, flags=re.I)
t = re.sub(r'<[^>]+>', ' ', t)
t = html.unescape(t)
t = re.sub(r'[ \t\r\f\v]+', ' ', t)
t = re.sub(r'\n\s*\n+', '\n', t)
if '--gravar' in flags:
    out = re.sub(r'\.[a-z]+$', '', path) + '.txt'
    open(out, 'w', encoding='utf-8').write(t)
    print('gravado', out, len(t))
low = t.lower()
for w in palavras:
    k = low.find(w.lower())
    achou = 0
    while k >= 0 and achou < 6:
        print('[%s] @%d: %s' % (w, k, ' '.join(t[max(0, k - n):k + n].split())))
        print('---')
        achou += 1
        k = low.find(w.lower(), k + len(w))
    if achou == 0:
        print('[%s] NAO ACHOU' % w)
