# Extrai o texto de um PDF (PyMuPDF), pagina a pagina, e opcionalmente rasteriza uma pagina em PNG.
# Uso: python -X utf8 -B pdf_texto.py <arquivo.pdf> [--png=<pagina>,<dpi>,<saida.png>]
import sys
import fitz

doc = fitz.open(sys.argv[1])
print("paginas:", doc.page_count)
png = [a for a in sys.argv[2:] if a.startswith("--png=")]
if png:
    pg, dpi, saida = png[0][6:].split(",")
    pix = doc[int(pg)].get_pixmap(dpi=int(dpi))
    pix.save(saida)
    print("png:", saida, pix.width, "x", pix.height)
else:
    for i, p in enumerate(doc):
        print(f"--- pagina {i+1} ---")
        print(p.get_text())
