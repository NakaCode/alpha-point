# Le a area de condados no Gazetteer 2024 do Census. Uso: python -X utf8 -B gaz.py <zip> <GEOID> [...]
import sys, zipfile, io, csv
z = zipfile.ZipFile(sys.argv[1])
nome = [n for n in z.namelist() if n.endswith(".txt")][0]
txt = z.read(nome).decode("latin-1")
rows = list(csv.reader(io.StringIO(txt), delimiter="\t"))
cab = [c.strip() for c in rows[0]]
print(nome, cab)
for r in rows[1:]:
    if r[cab.index("GEOID")] in sys.argv[2:]:
        print([x.strip() for x in r])
