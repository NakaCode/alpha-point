# Extrai o texto de um PDF com o PyMuPDF e grava <saida>.txt; imprime o sha256 do PDF.
# Uso: python -I -X utf8 -B pdf_texto.py <arquivo.pdf> <saida.txt>
import sys, fitz, hashlib
pdf, out = sys.argv[1], sys.argv[2]
h = hashlib.sha256(open(pdf, "rb").read()).hexdigest()
doc = fitz.open(pdf)
with open(out, "w", encoding="utf-8") as f:
    f.write(f"# {pdf}\n# sha256 {h}\n# paginas {len(doc)}\n")
    for i, p in enumerate(doc):
        f.write(f"=== pagina {i+1} ===\n")
        f.write(p.get_text())
print(pdf, len(doc), "paginas", h)
