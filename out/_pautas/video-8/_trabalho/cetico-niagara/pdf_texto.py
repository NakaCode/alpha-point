# Extrai o texto de um PDF (PyMuPDF) para um .txt ao lado. Uso: python -X utf8 -B -I pdf_texto.py <entrada.pdf> <saida.txt>
import sys
import fitz
doc = fitz.open(sys.argv[1])
with open(sys.argv[2], "w", encoding="utf-8") as f:
    for i, p in enumerate(doc):
        f.write(f"\n===== pagina {i+1} =====\n")
        f.write(p.get_text())
print(len(doc), "paginas")
