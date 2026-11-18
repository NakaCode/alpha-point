# Imprime o texto (espacos normalizados) de paginas de um PDF.
# Uso: python -X utf8 -B pdf_pags.py <pdf> <pag_ini> <pag_fim>
import sys, re, fitz
doc = fitz.open(sys.argv[1])
for i in range(int(sys.argv[2]) - 1, int(sys.argv[3])):
    print(f"\n===== p.{i+1}\n" + re.sub(r"\s+", " ", doc[i].get_text()))
