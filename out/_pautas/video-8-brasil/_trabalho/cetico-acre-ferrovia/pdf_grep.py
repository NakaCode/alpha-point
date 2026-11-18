# Extrai o texto de um PDF (PyMuPDF) e mostra os trechos que casam com os padroes, com a pagina.
# Uso: python -X utf8 -B pdf_grep.py <pdf> <largura> <padrao1> [<padrao2> ...]
import sys, re, fitz
doc = fitz.open(sys.argv[1]); larg = int(sys.argv[2])
pags = [(i + 1, re.sub(r"\s+", " ", p.get_text())) for i, p in enumerate(doc)]
print("paginas:", len(pags))
for pad in sys.argv[3:]:
    print(f"\n### /{pad}/")
    n = 0
    for num, t in pags:
        for m in re.finditer(pad, t, re.I):
            n += 1
            if n <= 8:
                print(f"[p.{num}] ...{t[max(0, m.start()-larg):m.end()+larg]}...\n")
    print("total:", n)
