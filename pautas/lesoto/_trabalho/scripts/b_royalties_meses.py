"""Leitor B: do PDF 'AllSales' da LHDA, lista mes a mes (2022 em diante) a entrega real (MCM), a demanda e o total de royalties (M),
e soma por ano fiscal de Lesoto (abril a marco) e por ano-calendario.

Uso: python -I -X utf8 -B b_royalties_meses.py <AllSales.pdf> [ano_inicial=2022]
So le o arquivo local.
"""
import re
import sys
from collections import defaultdict

import fitz  # PyMuPDF

MES = {"Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6, "Jul": 7, "Aug": 8, "Sept": 9, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12}
rx_mes = re.compile(r"^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)-(\d\d)$")


def num(s: str) -> float:
    return float(re.sub(r"[^0-9.\-]", "", s) or 0)


def main():
    d = fitz.open(sys.argv[1])
    ini = int(sys.argv[2]) if len(sys.argv) > 2 else 2022
    toks = []
    for p in d:
        toks += [t.strip() for t in p.get_text().splitlines() if t.strip()]
    linhas = []
    i = 0
    while i < len(toks):
        m = rx_mes.match(toks[i])
        if m and i + 11 < len(toks):
            mes, ano = MES[m.group(1)], 2000 + int(m.group(2)) if int(m.group(2)) < 90 else 1900 + int(m.group(2))
            v = toks[i + 1 : i + 12]  # invoice, actual, invoiced, demand, followup, converted, excess, fixed, o&m, elec, total
            if re.match(r"^\d+$", v[0]):
                linhas.append((ano, mes, num(v[1]), num(v[2]), num(v[3]), num(v[10]), num(v[7]), num(v[8]), num(v[9])))
                i += 12
                continue
        i += 1
    cal = defaultdict(lambda: [0.0, 0.0, 0])
    fisc = defaultdict(lambda: [0.0, 0.0, 0])
    for ano, mes, real, fat, dem, tot, fix, om, el in linhas:
        if ano < ini:
            continue
        print(f"{ano}-{mes:02d}: entrega real {real:8.3f} MCM | demanda {dem:6.2f} | royalty total M {tot/1e6:8.2f} mi (fixo {fix/1e6:7.2f}, O&M {om/1e6:6.2f}, eletricidade {el/1e6:7.2f})")
        c = cal[ano]; c[0] += real; c[1] += tot; c[2] += 1
        fy = ano if mes >= 4 else ano - 1
        f = fisc[fy]; f[0] += real; f[1] += tot; f[2] += 1
    print("--- ano-calendario: entrega (MCM), royalty (M milhoes), meses")
    for a in sorted(cal):
        print(a, f"{cal[a][0]:.3f}", f"{cal[a][1]/1e6:.1f}", cal[a][2])
    print("--- ano fiscal de Lesoto (abr a mar; chave = ano em que abre): entrega, royalty, meses")
    for a in sorted(fisc):
        print(f"{a}/{a+1}", f"{fisc[a][0]:.3f}", f"{fisc[a][1]/1e6:.1f}", fisc[a][2])


if __name__ == "__main__":
    main()
