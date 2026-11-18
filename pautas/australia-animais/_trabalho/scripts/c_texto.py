# Leitor C (vídeo 8, australia-animais). Converte uma página HTML (ou XML/JSON) baixada em texto e mostra os trechos com as palavras pedidas.
# Uso: python -X utf8 -B c_texto.py <arquivo> [--gravar] [--n=350] [--max=6] <palavra> [...]
# Para PDF use c_pdf.py. Nao faz pedido de rede.
import sys, re, html

args = [a for a in sys.argv[1:] if not a.startswith('--')]
flags = [a for a in sys.argv[1:] if a.startswith('--')]
n = 350
mx = 6
for f in flags:
    if f.startswith('--n='):
        n = int(f[4:])
    if f.startswith('--max='):
        mx = int(f[6:])
path = args[0]
palavras = args[1:]
t = open(path, encoding='utf-8', errors='replace').read()
if path.lower().endswith('.xml'):
    import xml.etree.ElementTree as ET
    _r = ET.fromstring(t.encode('utf-8'))
    _blocos = ('p', 'title', 'article-title', 'td', 'th', 'label', 'license-p', 'journal-title', 'pub-id', 'ext-link')
    t = '\n'.join(' '.join(x.itertext()) if x.tag in _blocos else '' for x in _r.iter())
    t = t.replace('<', '&lt;')
t = re.sub(r'<(script|style|noscript)[^>]*>.*?</\1>', ' ', t, flags=re.S | re.I)
t = re.sub(r'<(br|/p|/div|/li|/h\d|/tr|/td|/title|/abstract|/sec)[^>]*>', '\n', t, flags=re.I)
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
    while k >= 0 and achou < mx:
        print('[%s] @%d: %s' % (w, k, ' '.join(t[max(0, k - n):k + n].split())))
        print('---')
        achou += 1
        k = low.find(w.lower(), k + len(w))
    if achou == 0:
        print('[%s] NAO ACHOU' % w)
