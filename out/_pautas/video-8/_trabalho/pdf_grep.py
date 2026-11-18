# Extrai o texto de um PDF (PyMuPDF) e mostra trechos em volta de cada termo.
# Uso: python -X utf8 -B pdf_grep.py <arquivo.pdf> <termo> [<termo> ...]
import sys, re, fitz
doc = fitz.open(sys.argv[1])
txt = "\n".join(p.get_text() for p in doc)
print("paginas:", len(doc), "| inicio:", re.sub(r"\s+", " ", txt[:300]))
for termo in sys.argv[2:]:
    print("\n=== ", termo)
    for m in list(re.finditer(termo, txt, re.I))[:6]:
        a, b = max(0, m.start()-350), min(len(txt), m.end()+350)
        print("...", re.sub(r"\s+", " ", txt[a:b]), "...\n")
