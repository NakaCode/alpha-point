# Procura padroes no texto de um PDF (PyMuPDF), com a pagina e o contexto. Uso: python -X utf8 -B pdf_grep.py <pdf> <regex> [<regex> ...]
import sys, re
import fitz

doc = fitz.open(sys.argv[1])
print("paginas:", doc.page_count)
for p in sys.argv[2:]:
    n = 0
    print(f"\n### /{p}/")
    for i, pg in enumerate(doc):
        t = re.sub(r"\s+", " ", pg.get_text())
        for m in re.finditer(p, t, re.I):
            a, b = max(0, m.start() - 250), min(len(t), m.end() + 250)
            print(f"[p.{i+1}] ...{t[a:b]}...\n")
            n += 1
            if n >= 5:
                break
        if n >= 5:
            break
