# A serie anual do transito irregular pelo Darien (Servico Nacional de Migracao do Panama), lida dos .txt extraidos
# pelo snm_texto.py (fontes/snm/). Pega a 1a linha "Total" de cada arquivo (a tabela por regiao, pagina 1).
# Uso (de dentro desta pasta): python -X utf8 -B snm_serie.py
import re, os

P = "fontes/snm"
serie = {}
# 2010-2019: colunas sao anos
s = re.sub(r"\s+", " ", open(os.path.join(P, "IRREGULARES-2010-2019-actualizado.txt"), encoding="utf-8").read())
m = re.search(r"2019 Total ([\d,]+) ((?:[\d,]+ ){10})", s)
vals = [int(v.replace(",", "")) for v in m.group(2).split()]
for ano, v in zip(range(2010, 2020), vals):
    serie[ano] = (v, None)
# 2020-2026: colunas sao meses
arqs = {2020: "IRREGULARES_POR_DARIEN_DICIEMBRE_2020", 2021: "IRREGULARES_POR_DARIEN_DICIEMBRE_2021",
        2022: "IRREGULARES_POR_DARIEN_DICIEMBRE_2022", 2023: "IRREGULARES-X-DARIEN-2023",
        2024: "IRREGULARES-POR-DARIEN-2024-2", 2025: "IRREGULARES-POR-DARIEN-2025-2", 2026: "IRREGULARES-POR-DARIEN-1"}
for ano, f in arqs.items():
    s = re.sub(r"\s+", " ", open(os.path.join(P, f + ".txt"), encoding="utf-8").read())
    m = re.search(r"Dic\. Total ([\d,]+) ((?:(?:[\d,]+|-) ){12})", s)
    tot = int(m.group(1).replace(",", ""))
    meses = [0 if v == "-" else int(v.replace(",", "")) for v in m.group(2).split()]
    serie[ano] = (tot, meses)

MES = "jan fev mar abr mai jun jul ago set out nov dez".split()
soma = 0
pico = (0, None, None)
for ano in sorted(serie):
    tot, meses = serie[ano]
    soma += tot
    extra = ""
    if meses:
        assert sum(meses) == tot, (ano, sum(meses), tot)
        i = max(range(12), key=lambda k: meses[k])
        extra = f" | pico {MES[i]} {meses[i]:,}"
        for k, v in enumerate(meses):
            if v > pico[0]:
                pico = (v, ano, MES[k])
    print(f"{ano}: {tot:>9,}{extra}")
print(f"\nsoma 2010 a out/2026: {soma:,}")
print(f"o maior mes: {pico[2]}/{pico[1]}, {pico[0]:,} ({pico[0] / 31:,.0f} por dia)")
t21_24 = sum(serie[a][0] for a in (2021, 2022, 2023, 2024))
print(f"2021 a 2024: {t21_24:,} ({t21_24 / soma * 100:.1f} % de tudo desde 2010)")
m26 = serie[2026][1]
print(f"2026, jan a out: {sum(m26[:10]):,}; out/2026: {m26[9]:,} = {m26[9] / pico[0] * 100:.2f} % do maior mes")
print(f"2025 contra 2023: {serie[2025][0] / serie[2023][0] * 100:.2f} %")
