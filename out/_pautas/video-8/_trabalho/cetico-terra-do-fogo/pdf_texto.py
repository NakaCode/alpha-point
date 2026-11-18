# Extrai o texto de um PDF (PyMuPDF) e grava ao lado, com o sha256 no topo.
# Uso: python -X utf8 -B pdf_texto.py <arquivo.pdf> [<saida.txt>]
import sys, hashlib, fitz

pdf = sys.argv[1]
saida = sys.argv[2] if len(sys.argv) > 2 else pdf.rsplit(".", 1)[0] + ".txt"
h = hashlib.sha256(open(pdf, "rb").read()).hexdigest()
doc = fitz.open(pdf)
partes = ["# sha256 %s | %d paginas | %s" % (h, doc.page_count, pdf)]
for i, p in enumerate(doc):
    partes.append("\n=== pagina %d ===\n" % (i + 1))
    partes.append(p.get_text())
open(saida, "w", encoding="utf-8").write("".join(partes))
print("ok", saida, doc.page_count, "paginas", sum(len(x) for x in partes), "caracteres")
