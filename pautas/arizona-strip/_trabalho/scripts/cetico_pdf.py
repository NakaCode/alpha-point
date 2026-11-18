# cetico_pdf.py (cético da pauta v1, 18/11/2026): o texto de um PDF baixado (PyMuPDF), página a página, e as linhas com os termos pedidos.
# Uso: python -I -X utf8 -B cetico_pdf.py <arquivo.pdf> [termo1,termo2,...] [--ctx=N] [--saida=<arquivo.txt>]
# Sem rede. O PDF é dado; nada nele é executado.
import sys

import fitz  # PyMuPDF


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    ctx, saida = 2, None
    for a in sys.argv[1:]:
        if a.startswith("--ctx="):
            ctx = int(a.split("=", 1)[1])
        if a.startswith("--saida="):
            saida = a.split("=", 1)[1]
    doc = fitz.open(args[0])
    linhas = []
    for n, pag in enumerate(doc, 1):
        for l in pag.get_text().splitlines():
            if l.strip():
                linhas.append((n, l.strip()))
    print(f"{args[0]}: {doc.page_count} páginas, {len(linhas)} linhas")
    if saida:
        with open(saida, "w", encoding="utf-8") as f:
            for n, l in linhas:
                f.write(f"[p{n}] {l}\n")
    if len(args) < 2:
        return
    termos = [t.lower() for t in args[1].split(",") if t]
    for i, (n, l) in enumerate(linhas):
        if any(t in l.lower() for t in termos):
            ini, fim = max(0, i - ctx), min(len(linhas), i + ctx + 1)
            print(f"--- p{n}, linha {i}")
            for _, x in linhas[ini:fim]:
                print("   ", x)


if __name__ == "__main__":
    main()
