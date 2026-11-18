"""b_texto.py: tira as tags de uma pagina baixada e mostra o contexto em volta de cada termo.
uso: python -X utf8 -B b_texto.py <arquivo.html> <termo1> [<termo2> ...] [--w=300] [--max=6]
Sem termos, imprime o texto limpo (ate 6000 caracteres)."""
import re, sys, html

def limpa(txt):
    txt = re.sub(r'(?is)<(script|style|noscript)[^>]*>.*?</\1>', ' ', txt)
    txt = re.sub(r'(?s)<[^>]+>', ' ', txt)
    txt = html.unescape(txt)
    return re.sub(r'\s+', ' ', txt)

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    opts = dict(a[2:].split('=') for a in sys.argv[1:] if a.startswith('--') and '=' in a)
    w = int(opts.get('w', 300)); mx = int(opts.get('max', 6))
    arq, termos = args[0], args[1:]
    raw = open(arq, encoding='utf-8', errors='replace').read()
    t = limpa(raw)
    print(f'[{arq}] {len(t)} caracteres de texto')
    if not termos:
        print(t[:6000]); return
    for termo in termos:
        achados = [m.start() for m in re.finditer(re.escape(termo), t, re.I)]
        print(f'\n=== "{termo}": {len(achados)} ocorrencias')
        for p in achados[:mx]:
            print('...' + t[max(0, p - w):p + w] + '...\n')

main()
