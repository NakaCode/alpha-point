# Extrai o texto de um PDF (PyMuPDF) para um .txt, com o sha256 do PDF no topo, e procura termos.
# Uso: python -X utf8 -B pdf_texto.py <arquivo.pdf> <saida.txt> [termo1 termo2 ...]
import sys, hashlib, fitz, re

pdf, saida = sys.argv[1], sys.argv[2]
termos = sys.argv[3:]
h = hashlib.sha256(open(pdf, "rb").read()).hexdigest()
doc = fitz.open(pdf)
linhas = [f"# {pdf}\n# sha256 {h}\n# paginas {doc.page_count}\n"]
for i, p in enumerate(doc):
    linhas.append(f"\n===== pagina {i + 1} =====\n")
    linhas.append(p.get_text())
open(saida, "w", encoding="utf-8").write("".join(linhas))
print("sha256", h, "paginas", doc.page_count)
for t in termos:
    for i, p in enumerate(doc):
        tx = p.get_text()
        for m in re.finditer(re.escape(t), tx, re.I):
            a = max(0, m.start() - 160); b = min(len(tx), m.end() + 220)
            print(f"[p{i + 1}] {t}: ...{tx[a:b]!r}...")
