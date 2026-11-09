"""Tira as tags de um HTML local e imprime os trechos que casam com um regex.

Uso: python -I -X utf8 -B b_html_grep.py <arquivo.html> <regex> [--ctx=N] [--max=N] [--slice=A:B]
Com --slice=A:B imprime o texto limpo entre as posições A e B (e ignora o regex).
Só lê arquivo local.
"""
import html
import re
import sys


def main():
    caminho, padrao = sys.argv[1], sys.argv[2]
    ctx, maximo, fatia = 300, 40, None
    for a in sys.argv[3:]:
        if a.startswith("--ctx="):
            ctx = int(a.split("=", 1)[1])
        if a.startswith("--max="):
            maximo = int(a.split("=", 1)[1])
        if a.startswith("--slice="):
            x, y = a.split("=", 1)[1].split(":")
            fatia = (int(x), int(y))
    with open(caminho, encoding="utf-8", errors="replace") as f:
        bruto = f.read()
    bruto = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", bruto, flags=re.S | re.I)
    bruto = re.sub(r"data:image/[^\"')]+", " ", bruto)
    bruto = re.sub(r"<br\s*/?>|</p>|</div>|</li>|</tr>|</h\d>", "\n", bruto)
    texto = html.unescape(re.sub(r"<[^>]+>", "", bruto))
    texto = re.sub(r"[ \t]+", " ", texto)
    texto = re.sub(r"\n\s*\n+", "\n", texto)
    print(f"[{len(texto)} caracteres de texto]")
    if fatia:
        print(texto[fatia[0]:fatia[1]])
        return
    n = 0
    for m in re.finditer(padrao, texto, flags=re.I):
        n += 1
        if n > maximo:
            print("... (mais resultados cortados)")
            break
        ini, fim = max(0, m.start() - ctx), min(len(texto), m.end() + ctx)
        print(f"--- [{n}] pos {m.start()}")
        print(texto[ini:fim].replace("\n", " "))


if __name__ == "__main__":
    main()
