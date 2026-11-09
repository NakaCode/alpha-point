"""Leitor B: tira as marcas de um HTML baixado e imprime os trechos que casam com um padrao, com contexto de caracteres.

Uso: python -I -X utf8 -B b_html_texto.py <arquivo.html> <regex> [--ctx=N] [--max=N] [--salvar=<saida.txt>]

- --ctx: caracteres antes e depois de cada casamento (padrao 220).
- --max: no maximo N casamentos (padrao 12).
- --salvar: grava o texto limpo (com o sha256 do original no topo) para consulta.
So le o arquivo local. (Existe um html_texto.py de outro leitor, para JSON do MediaWiki: este e o do leitor B.)
"""
import hashlib
import html
import re
import sys


def limpo(bruto: str) -> str:
    t = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", bruto)
    t = re.sub(r"(?s)<[^>]+>", " ", t)
    t = html.unescape(t)
    return re.sub(r"\s+", " ", t)


def main():
    if len(sys.argv) < 3:
        print("uso: b_html_texto.py <arquivo.html> <regex> [--ctx=N] [--max=N] [--salvar=<saida>]")
        sys.exit(2)
    caminho, padrao = sys.argv[1], sys.argv[2]
    ctx, mx, salvar = 220, 12, None
    for a in sys.argv[3:]:
        if a.startswith("--ctx="):
            ctx = int(a.split("=", 1)[1])
        if a.startswith("--max="):
            mx = int(a.split("=", 1)[1])
        if a.startswith("--salvar="):
            salvar = a.split("=", 1)[1]
    with open(caminho, "rb") as f:
        raw = f.read()
    sha = hashlib.sha256(raw).hexdigest()
    texto = limpo(raw.decode("utf-8", errors="replace"))
    if salvar:
        with open(salvar, "w", encoding="utf-8") as f:
            f.write(f"# origem: {caminho}\n# sha256: {sha}\n\n{texto}\n")
        print(f"texto limpo gravado em {salvar} ({len(texto)} caracteres)")
    print(f"sha256={sha} caracteres={len(texto)}")
    n = 0
    for m in re.finditer(padrao, texto, re.IGNORECASE):
        ini, fim = max(0, m.start() - ctx), min(len(texto), m.end() + ctx)
        print(f"--- [{m.start()}] ...{texto[ini:fim]}...")
        n += 1
        if n >= mx:
            break
    if n == 0:
        print("nenhum casamento")


if __name__ == "__main__":
    main()
