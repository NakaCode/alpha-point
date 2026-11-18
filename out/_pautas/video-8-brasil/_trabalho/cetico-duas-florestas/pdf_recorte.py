# Rasteriza um recorte de uma pagina de PDF (PyMuPDF), em pontos do PDF. Uso:
# python -X utf8 -B pdf_recorte.py <arquivo.pdf> <x0> <y0> <x1> <y1> <dpi> <saida.png>
import sys
import fitz

doc = fitz.open(sys.argv[1])
p = doc[0]
print("pagina (pt):", p.rect)
x0, y0, x1, y1 = map(float, sys.argv[2:6])
pix = p.get_pixmap(dpi=int(sys.argv[6]), clip=fitz.Rect(x0, y0, x1, y1))
pix.save(sys.argv[7])
print("png:", sys.argv[7], pix.width, "x", pix.height)
