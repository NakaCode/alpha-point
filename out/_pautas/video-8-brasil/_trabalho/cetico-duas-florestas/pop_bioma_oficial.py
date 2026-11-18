# Confere a conta do gerador (58,1 % dos brasileiros na Mata Atlantica, pela sede municipal) com a lista OFICIAL do IBGE:
# "Bioma predominante por municipio, 2024" (geoftp do IBGE, documentos/), cruzada com a populacao do Censo 2022 por municipio.
# Tambem lista as 25 maiores cidades com o bioma das duas contas, para ver onde elas divergem.
# Uso: python -X utf8 -B pop_bioma_oficial.py
import sys, os, csv

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(AQUI, ".."))
from xlsx_ler import linhas

MID = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", "..", "midia", "_pautas", "video-8-brasil", "cetico-duas-florestas"))
pop, nome = {}, {}
for l in linhas(os.path.join(AQUI, "..", "dados", "CD2022_Populacao_Coletada_Imputada_e_Total_Municipio_e_UF_20231222.xlsx"), 1)[2:]:
    if len(l) >= 8 and l[2].isdigit() and l[3].isdigit():
        pop[l[2] + l[3]] = int(float(l[7]))
        nome[l[2] + l[3]] = l[4] if len(l) > 4 else ""
bio = {}
with open(os.path.join(MID, "Bioma_Predominante_por_Municipio_2024.csv"), encoding="utf-8-sig") as f:
    for row in csv.reader(f, delimiter=";"):
        if row and row[0].isdigit():
            bio[row[0]] = (row[1], row[2], row[3])
T = sum(pop.values())
print("municipios no Censo:", len(pop), "| na lista do IBGE:", len(bio), "| sem par:", len(set(pop) - set(bio)), len(set(bio) - set(pop)))
soma = {}
for cod, p in pop.items():
    b = bio.get(cod, ("?", "?", "SEM PAR"))[2]
    soma[b] = soma.get(b, 0) + p
print(f"populacao total do Censo 2022: {T:,}")
for b, s in sorted(soma.items(), key=lambda x: -x[1]):
    print(f"  {b}: {s:,} ({100*s/T:.1f}%)")
print("as 25 maiores cidades e o bioma predominante oficial:")
for cod in sorted(pop, key=lambda c: -pop[c])[:25]:
    print(f"  {bio.get(cod, ('?','?','?'))[0]} ({bio.get(cod, ('?','?','?'))[1]}): {pop[cod]:,} -> {bio.get(cod, ('?','?','?'))[2]}")
