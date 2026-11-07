"""O cético (07/11/2026): lê o PDF do Quadro Geográfico 2024 do IBGE que a autora baixou e lista as linhas do RS.

Uso: python -I -X utf8 -B cetico_ibge_pdf.py <qg_2024_060_defrontmar.pdf>
Só lê. Procura Rio Grande, Santa Vitória do Palmar, Chuí e São José do Norte, e diz se há algum número com cara de km.
"""
import hashlib
import re
import sys

import fitz  # PyMuPDF

caminho = sys.argv[1]
with open(caminho, "rb") as f:
    dados = f.read()
print("sha256", hashlib.sha256(dados).hexdigest(), len(dados), "bytes")

doc = fitz.open(caminho)
print("páginas:", doc.page_count)
texto = "\n".join(p.get_text() for p in doc)
linhas = [l.strip() for l in texto.splitlines() if l.strip()]
print("linhas:", len(linhas))

alvos = ["Rio Grande", "Santa Vit", "Chu", "São José do Norte", "Sao Jose do Norte", "Tavares", "Mostardas"]
for i, l in enumerate(linhas):
    if any(a.lower() in l.lower() for a in alvos):
        ctx = " | ".join(linhas[max(0, i - 1): i + 2])
        print(f"[{i}] {ctx[:200]}")

print("\n== cabeçalho (primeiras 25 linhas)")
for l in linhas[:25]:
    print("  ", l[:160])

kms = [l for l in linhas if re.search(r"\b\d{1,3},\d{2}\b", l)]
print("\nlinhas com número decimal (vírgula, 2 casas):", len(kms))
for l in kms[:10]:
    print("  ", l[:120])

rs = [l for l in linhas if re.search(r"\bRS\b|Rio Grande do Sul|^43\d{5}", l)]
print("\nlinhas com RS ou código 43xxxxx:", len(rs))
for l in rs[:40]:
    print("  ", l[:120])
