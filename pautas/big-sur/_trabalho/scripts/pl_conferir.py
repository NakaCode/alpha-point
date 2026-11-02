# Cetico Big Sur: confere as reguas na origem (arquivos do Census ja baixados).
# Uso: python -I -X utf8 -B conferir.py <pasta-scratchpad>
import csv, sys, os

base = sys.argv[1]
csvp = os.path.join(base, "dl", "co-est2025-alldata.csv")
pop = {}
st = {}
with open(csvp, encoding="latin-1") as f:
    for r in csv.DictReader(f):
        if r["SUMLEV"] == "040":
            st[r["STNAME"]] = r
        if r["STNAME"] == "California" and r["SUMLEV"] == "050":
            pop[r["CTYNAME"].replace(" County", "")] = (int(r["ESTIMATESBASE2020"]), int(r["POPESTIMATE2025"]))

msas = {
    "Los Angeles-Long Beach-Anaheim (LA+Orange)": ["Los Angeles", "Orange"],
    "San Francisco-Oakland (5 condados)": ["Alameda", "Contra Costa", "Marin", "San Francisco", "San Mateo"],
    "Riverside-San Bernardino-Ontario": ["Riverside", "San Bernardino"],
    "San Diego": ["San Diego"],
    "Sacramento (4)": ["Sacramento", "Placer", "El Dorado", "Yolo"],
    "San Jose (Santa Clara+San Benito)": ["Santa Clara", "San Benito"],
}
print("MSA | base2020 | 2025")
for n, cs in sorted(msas.items(), key=lambda kv: -sum(pop[c][1] for c in kv[1])):
    print(n, "|", sum(pop[c][0] for c in cs), "|", sum(pop[c][1] for c in cs))
for s in ("Wyoming", "California", "Montana"):
    r = st[s]
    print(s, "base2020", r["ESTIMATESBASE2020"], "2025", r["POPESTIMATE2025"])

# PL 94-171: as linhas da Big Sur CCD e da San Ardo CCD (ultimos campos)
geo = os.path.join(base, "censo", "cageo2020.pl")
with open(geo, encoding="latin-1") as f:
    for ln in f:
        c = ln.rstrip("\n").split("|")
        if c[2] == "060" and c[9] in ("0605390235", "0605392750"):
            nomes = [x for x in c if "CCD" in x]
            print(c[9], nomes[:1], "AREALAND", c[-12:-10], "tail", c[-9:-3])
