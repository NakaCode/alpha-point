"""Lê uma planilha .ods (só a biblioteca padrão) e imprime o cabeçalho e as linhas que casam com um padrão.

Uso: python -I -X utf8 -B ods_ler.py <arquivo.ods> <regex> [--cabecalho=N]

- Imprime as N primeiras linhas de cada aba (padrão: 6) e depois as linhas cujo texto casa com o regex (sem diferenciar maiúsculas).
- Respeita as células repetidas (table:number-columns-repeated) até 60 colunas.
"""
import re
import sys
import zipfile
import xml.etree.ElementTree as ET

NS = {
    "table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
}
T = "{%s}" % NS["table"]
OFF = "{%s}" % NS["office"]


def celulas(linha):
    saida = []
    for c in linha:
        if c.tag not in (T + "table-cell", T + "covered-table-cell"):
            continue
        rep = int(c.get(T + "number-columns-repeated", "1"))
        valor = c.get(OFF + "value")
        texto = " ".join("".join(p.itertext()) for p in c.findall("text:p", NS)).strip()
        v = texto if texto else (valor or "")
        saida.extend([v] * min(rep, 60))
        if len(saida) >= 60:
            break
    while saida and saida[-1] == "":
        saida.pop()
    return saida


def main():
    if len(sys.argv) < 3:
        print("uso: ods_ler.py <arquivo.ods> <regex> [--cabecalho=N]")
        sys.exit(2)
    arq, padrao = sys.argv[1], re.compile(sys.argv[2], re.I)
    n_cab = 6
    for a in sys.argv[3:]:
        if a.startswith("--cabecalho="):
            n_cab = int(a.split("=", 1)[1])
    with zipfile.ZipFile(arq) as z:
        raiz = ET.fromstring(z.read("content.xml"))
    for aba in raiz.iter(T + "table"):
        print(f"=== aba: {aba.get(T + 'name')}")
        linhas = [celulas(l) for l in aba.iter(T + "table-row")]
        for i, l in enumerate(linhas[:n_cab]):
            if l:
                print(f"[{i}] " + " | ".join(l))
        print("--- linhas que casam:")
        for i, l in enumerate(linhas):
            if l and padrao.search(" | ".join(l)):
                print(f"[{i}] " + " | ".join(l))


if __name__ == "__main__":
    main()
