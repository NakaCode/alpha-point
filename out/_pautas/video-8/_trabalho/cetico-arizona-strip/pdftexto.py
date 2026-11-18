# Extrai o texto de um PDF e mostra as linhas com as palavras pedidas. Uso: python -I -X utf8 -B pdftexto.py <pdf> <palavra> [...]
import sys, fitz
doc = fitz.open(sys.argv[1])
for i, p in enumerate(doc):
    t = p.get_text()
    low = t.lower()
    for w in sys.argv[2:]:
        k = low.find(w.lower())
        while k >= 0:
            print('pág. %d [%s]: %s' % (i + 1, w, ' '.join(t[max(0, k - 400):k + 400].split())))
            k = low.find(w.lower(), k + 1)
