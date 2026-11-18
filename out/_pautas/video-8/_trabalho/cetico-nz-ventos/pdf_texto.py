# Extrai o texto de um PDF com o PyMuPDF.
# Uso: python -I -X utf8 -B pdf_texto.py <arquivo.pdf>
import sys, fitz
doc = fitz.open(sys.argv[1])
for i, p in enumerate(doc):
    print(f"=== pagina {i+1} ===")
    print(p.get_text())
