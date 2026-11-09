"""Tira as tags de um HTML local e imprime os trechos que casam com um regex.

Uso: python -I -X utf8 -B a_html_grep.py <arquivo.html> <regex> [--ctx=N] [--max=M]
"""
import html
import re
import sys


def main():
    caminho, padrao = sys.argv[1], sys.argv[2]
    ctx = 300
    mx = 20
    for a in sys.argv[3:]:
        if a.startswith("--ctx="):
            ctx = int(a.split("=", 1)[1])
        if a.startswith("--max="):
            mx = int(a.split("=", 1)[1])
    with open(caminho, encoding="utf-8", errors="replace") as f:
        bruto = f.read()
    bruto = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", bruto, flags=re.S | re.I)
    bruto = re.sub(r"<br\s*/?>|</p>|</div>|</li>|</tr>|</h\d>", "\n", bruto, flags=re.I)
    texto = html.unescape(re.sub(r"<[^>]+>", "", bruto))
    texto = re.sub(r"[ \t\xa0]+", " ", texto)
    texto = re.sub(r"\n\s*\n+", "\n", texto)
    n = 0
    for m in re.finditer(padrao, texto, flags=re.I):
        n += 1
        if n > mx:
            print(f"... (mais ocorrências; limite {mx})")
            break
        ini, fim = max(0, m.start() - ctx), min(len(texto), m.end() + ctx)
        print(f"--- [{n}] pos {m.start()}")
        print(texto[ini:fim].replace("\n", " "))
    if n == 0:
        print("nenhuma ocorrência")


main()
