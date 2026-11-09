"""O cético da pauta v1 (rio-columbia): os picos anuais do Columbia em The Dalles (USGS 14105700) contra os gatilhos do
"called-upon" (CRS R43287, nota 39: a US Entity projeta de 450.000 a 650.000 cfs; a Canadian Entity, 600.000 cfs).

Uso: python -I -X utf8 -B cetico_picos.py <usgs-pico-14105700.rdb>

Conta, por período, quantos anos tiveram o pico anual acima de 450, 500, 600 e 650 mil cfs, e lista os maiores.
Os picos depois das barragens já são regulados (o Canadá operava a cheia garantida do tratado até 2024): a conta mostra
a frequência com que o rio de hoje chega a esses números, não a que chegaria sem o armazenamento.
Só lê o arquivo local.
"""
import sys


def main():
    linhas = open(sys.argv[1], encoding="utf-8").read().splitlines()
    dados = []
    for l in linhas:
        if l.startswith("#") or l.startswith("agency_cd") or l.startswith("5s"):
            continue
        c = l.split("\t")
        if len(c) < 5 or not c[4].strip():
            continue
        ano = int(c[2][:4])
        dados.append((ano, int(c[4]), c[2], c[5]))
    periodos = [("1858–1940 (antes do Grand Coulee)", 1858, 1940), ("1879–1940 (só a série medida, sem as estimativas antigas)", 1879, 1940),
                ("1879–1967 (antes das barragens do tratado)", 1879, 1967),("1941–1967 (antes das barragens do tratado)", 1941, 1967),
                ("1968–1973 (as barragens entrando)", 1968, 1973), ("1974–2025 (depois da última)", 1974, 2025),
                ("1997–2025", 1997, 2025)]
    for rot, a0, a1 in periodos:
        sub = [d for d in dados if a0 <= d[0] <= a1]
        if not sub:
            continue
        cont = {lim: sum(1 for d in sub if d[1] >= lim) for lim in (450_000, 500_000, 600_000, 650_000)}
        print(f"{rot}: {len(sub)} anos; mediana do pico {sorted(x[1] for x in sub)[len(sub) // 2]:,} cfs")
        print("   anos ≥ " + "; ".join(f"{lim // 1000} mil: {n}" for lim, n in cont.items()))
        maiores = sorted(sub, key=lambda d: -d[1])[:5]
        print("   maiores: " + "; ".join(f"{d[2]} {d[1]:,} ({d[3] or '-'})" for d in maiores))


if __name__ == "__main__":
    main()
