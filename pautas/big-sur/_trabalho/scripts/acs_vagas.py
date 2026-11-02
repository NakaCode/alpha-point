# As casas vagas por tipo, da ACS de 5 anos (2020-2024), tabela B25004, no arquivo por tabela do Census (02/11/2026).
# Uso: python -I -X utf8 -B acs_vagas.py <acsdt5y2024-b25004.dat>
# Fonte: https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/5YRData/acsdt5y2024-b25004.dat
# (o data.census.gov pediu verificacao de robo em 02/11 e a API recusou em 01/11: nada contornado; o www2 deixa baixar)
import sys
alvos = {"0600000US0605390235": "Big Sur CCD", "0500000US06053": "Monterey County", "0400000US06": "California"}
linhas = {"001": "vagas, total", "002": "para alugar", "003": "alugadas, nao ocupadas", "004": "so para vender",
          "005": "vendidas, nao ocupadas", "006": "uso sazonal, recreativo ou ocasional", "007": "para trabalhador migrante",
          "008": "outras vagas"}
with open(sys.argv[1], encoding="utf-8") as f:
    cab = f.readline().rstrip("\n").split("|")
    i = {c: n for n, c in enumerate(cab)}
    for linha in f:
        campos = linha.rstrip("\n").split("|")
        if campos[0] not in alvos:
            continue
        print(f"\n{alvos[campos[0]]} ({campos[0]})")
        tot = float(campos[i["B25004_E001"]])
        for k, nome in linhas.items():
            e, m = campos[i[f"B25004_E{k}"]], campos[i[f"B25004_M{k}"]]
            parte = f" ({100 * float(e) / tot:.0f} % das vagas)" if tot and k != "001" else ""
            print(f"  {nome}: {e} +/- {m}{parte}")
