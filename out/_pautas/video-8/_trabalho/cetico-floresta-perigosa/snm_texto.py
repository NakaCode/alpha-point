# Extrai o texto dos PDFs do Servico Nacional de Migracao do Panama (Transito irregular por Darien), com o sha256 de cada um.
# Uso (de dentro desta pasta): python -P -X utf8 -B snm_texto.py <pasta-dos-pdfs> <pasta-de-saida>
import sys, os, hashlib
import fitz  # PyMuPDF

src, dst = sys.argv[1], sys.argv[2]
os.makedirs(dst, exist_ok=True)
for f in sorted(os.listdir(src)):
    if not f.lower().endswith(".pdf"):
        continue
    p = os.path.join(src, f)
    h = hashlib.sha256(open(p, "rb").read()).hexdigest()
    doc = fitz.open(p)
    partes = [f"# {f}\n# sha256 {h}\n# paginas {doc.page_count}\n"]
    for i, pg in enumerate(doc):
        partes.append(f"\n=== pagina {i + 1} ===\n" + pg.get_text())
    out = os.path.join(dst, f[:-4] + ".txt")
    open(out, "w", encoding="utf-8").write("".join(partes))
    print(f, doc.page_count, "paginas", h[:12])
