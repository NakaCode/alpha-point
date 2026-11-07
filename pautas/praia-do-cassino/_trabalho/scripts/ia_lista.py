"""Lista os itens de uma resposta do advancedsearch do Internet Archive (JSON salvo).

Uso: python -I -X utf8 -B ia_lista.py <resposta.json> [filtro-regex-no-titulo]
Só lê o arquivo local.
"""
import json
import re
import sys


def main():
    with open(sys.argv[1], encoding="utf-8") as f:
        d = json.load(f)
    rx = re.compile(sys.argv[2], re.I) if len(sys.argv) > 2 else None
    docs = d.get("response", {}).get("docs", [])
    print(f"total encontrado: {d.get('response', {}).get('numFound')}; nesta página: {len(docs)}")
    for x in docs:
        t = x.get("title")
        if rx and not rx.search(str(t)):
            continue
        print(f"{x.get('identifier')} | {x.get('year')} | lang={x.get('language')} | "
              f"restrito={x.get('access-restricted-item')} | {x.get('publisher')} | {t}")


if __name__ == "__main__":
    main()
