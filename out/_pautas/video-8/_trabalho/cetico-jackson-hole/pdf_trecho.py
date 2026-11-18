# Mostra N caracteres depois de um termo num PDF. Uso: python -X utf8 -B pdf_trecho.py <pdf> <termo> <n>
import sys, re, fitz
doc = fitz.open(sys.argv[1])
for i, p in enumerate(doc):
    t = p.get_text()
    k = t.find(sys.argv[2])
    if k >= 0:
        print("pagina", i + 1)
        print(t[k:k + int(sys.argv[3])])
        break
