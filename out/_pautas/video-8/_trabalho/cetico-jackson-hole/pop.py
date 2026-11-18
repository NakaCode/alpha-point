# Populacao (Census, estimativas de condados, safra 2025) do condado de Teton (WY), de Teton (ID) e do Wyoming.
import csv, io
txt = open("../co-est2025-alldata.csv", "rb").read().decode("latin-1")
for r in csv.DictReader(io.StringIO(txt)):
    if (r["STATE"], r["COUNTY"]) in {("56", "039"), ("16", "081"), ("56", "000"), ("56", "023")}:
        print(r["STNAME"], "|", r["CTYNAME"], "| base 2020:", r["ESTIMATESBASE2020"], "| 2025:", r["POPESTIMATE2025"], "| 2024:", r["POPESTIMATE2024"])
