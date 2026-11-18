# Lista as paginas de um PDF que contem cada termo. Uso: python -X utf8 -B achar.py <pdf> <termo> [<termo> ...]
import sys, fitz
doc = fitz.open(sys.argv[1])
for termo in sys.argv[2:]:
    pags = [i + 1 for i, p in enumerate(doc) if termo.lower() in p.get_text().lower()]
    print(termo, "->", pags)
