"""b_pdf.py: extrai o texto de um PDF (PyMuPDF) e mostra o contexto de cada termo.
uso: python -X utf8 -B b_pdf.py <arquivo.pdf> [<termo> ...] [--w=300] [--max=5] [--paginas]
Sem termos, imprime o texto inteiro (ate 8000 caracteres)."""
import re, sys
import fitz

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    opts = {a[2:].split('=')[0]: (a[2:].split('=')[1] if '=' in a else '1') for a in sys.argv[1:] if a.startswith('--')}
    w = int(opts.get('w', 300)); mx = int(opts.get('max', 5))
    doc = fitz.open(args[0])
    txt = ''
    for i, p in enumerate(doc):
        t = p.get_text()
        txt += f'\n[pag {i+1}]\n' + t
    flat = re.sub(r'\s+', ' ', txt)
    print(f'[{args[0]}] {len(doc)} paginas, {len(flat)} caracteres; metadados: {doc.metadata}')
    termos = args[1:]
    if not termos:
        print(flat[:8000]); return
    for termo in termos:
        achados = [m.start() for m in re.finditer(re.escape(termo), flat, re.I)]
        print(f'\n=== "{termo}": {len(achados)} ocorrencias')
        for p in achados[:mx]:
            print('...' + flat[max(0, p - w):p + w] + '...\n')

main()
