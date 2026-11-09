"""Converte um JSON da API do MediaWiki (action=parse&prop=text) em texto puro e procura um regex.

Uso: python -I -X utf8 -B html_texto.py <arquivo.json> <regex> [--ctx=N]
Imprime os trechos (N caracteres de contexto de cada lado, padrão 400).
"""
import html
import json
import re
import sys


def main():
    caminho, padrao = sys.argv[1], sys.argv[2]
    ctx = 400
    for a in sys.argv[3:]:
        if a.startswith("--ctx="):
            ctx = int(a.split("=", 1)[1])
    with open(caminho, encoding="utf-8") as f:
        dados = json.load(f)
    bruto = dados["parse"]["text"]
    bruto = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", bruto, flags=re.S)
    bruto = re.sub(r"<br\s*/?>|</p>|</div>|</li>|</tr>", "\n", bruto)
    texto = html.unescape(re.sub(r"<[^>]+>", "", bruto))
    texto = re.sub(r"[ \t]+", " ", texto)
    texto = re.sub(r"\n\s*\n+", "\n", texto)
    achou = 0
    for m in re.finditer(padrao, texto, flags=re.I):
        achou += 1
        ini, fim = max(0, m.start() - ctx), min(len(texto), m.end() + ctx)
        print(f"--- [{achou}] pos {m.start()}")
        print(texto[ini:fim])
        if achou >= 8:
            break
    if not achou:
        print("sem ocorrência")


if __name__ == "__main__":
    main()
