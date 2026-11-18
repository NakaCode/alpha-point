# Serie anual (Census, estimativas de condados, safra 2025): Teton WY, Teton ID, Lincoln WY, Wyoming e EUA.
import csv, io
txt = open("../co-est2025-alldata.csv", "rb").read().decode("latin-1")
anos = ["ESTIMATESBASE2020"] + [f"POPESTIMATE{a}" for a in range(2020, 2026)]
for r in csv.DictReader(io.StringIO(txt)):
    if (r["STATE"], r["COUNTY"]) in {("56", "039"), ("16", "081"), ("56", "023"), ("56", "000")}:
        v = [int(r[a]) for a in anos]
        print(f"{r['CTYNAME']:16s} {r['STNAME']:8s}", v, f"variacao base2020->2025: {v[-1]-v[0]:+d} ({(v[-1]-v[0])/v[0]:+.1%})",
              "| saldo migratorio domestico 2021-2025:", sum(int(r[f'DOMESTICMIG{a}']) for a in range(2021, 2026)),
              "| internacional:", sum(int(r[f'INTERNATIONALMIG{a}']) for a in range(2021, 2026)))
