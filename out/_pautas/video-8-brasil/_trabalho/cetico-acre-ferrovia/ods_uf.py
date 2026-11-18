# Le o .ods das areas territoriais do IBGE (2022) sem biblioteca externa e mostra as linhas que citam os nomes dados.
# Uso: python -X utf8 -B ods_uf.py <arquivo.ods> <nome1> [<nome2> ...]
import sys, zipfile, re, xml.etree.ElementTree as ET
ns = {"table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0"}
T = "{urn:oasis:names:tc:opendocument:xmlns:table:1.0}"
root = ET.fromstring(zipfile.ZipFile(sys.argv[1]).read("content.xml"))
for tab in root.iter(T + "table"):
    nome = tab.get(T + "name"); linhas = 0
    for row in tab.iter(T + "table-row"):
        cel = []
        for c in row.iter(T + "table-cell"):
            v = c.get("{urn:oasis:names:tc:opendocument:xmlns:office:1.0}value") or "".join(c.itertext())
            rep = int(c.get(T + "number-columns-repeated", "1"))
            cel += [v] * min(rep, 3)
        txt = " | ".join(x for x in cel if x)
        linhas += 1
        if linhas <= 2 or any(re.search(n, txt) for n in sys.argv[2:]):
            if len(txt) < 300: print(f"[{nome}] {txt}")
