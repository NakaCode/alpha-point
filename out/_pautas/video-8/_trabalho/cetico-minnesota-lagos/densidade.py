# Le nhd-por-estado.tsv e o shapefile de estados do Census (ALAND) e da a densidade de corpos d'agua de 10 acres ou mais
# (LakePond, Reservoir, Playa) por 1.000 km2 de terra, por estado.
# Uso: python -X utf8 -B densidade.py <nhd-por-estado.tsv> <dir_do_shapefile_de_estados> <saida.md>
import sys, csv
import shapefile

tsv, dirshp, saida = sys.argv[1], sys.argv[2], sys.argv[3]
r = shapefile.Reader(dirshp + "/cb_2024_us_state_20m")
campos = [f[0] for f in r.fields[1:]]
aland = {}
for rec in r.records():
    d = dict(zip(campos, rec))
    aland[d["STUSPS"]] = d["ALAND"] / 1e6  # km2

dados = {}
with open(tsv, encoding="utf-8") as f:
    for row in csv.DictReader(f, delimiter="\t"):
        if row["ftype"] == "ERRO":
            continue
        dados.setdefault(row["uf"], {})[row["ftype"]] = int(row["n"])

ordem = list(dados.keys())
linhas = ["| Estado | Terra (mil km²) | LakePond | Reservoir | Playa | LakePond por 1.000 km² | Reservoir / (LakePond + Reservoir) |",
          "|---|---|---|---|---|---|---|"]
for uf in ordem:
    d = dados[uf]
    lp, rs, pl = d.get("LakePond", 0), d.get("Reservoir", 0), d.get("Playa", 0)
    km = aland.get(uf, 0)
    dens = lp / km * 1000 if km else 0
    frac = rs / (lp + rs) * 100 if (lp + rs) else 0
    linhas.append(f"| {uf} | {km/1000:.0f} | {lp:,} | {rs:,} | {pl:,} | {dens:.1f} | {frac:.1f} % |")
txt = "\n".join(linhas) + "\n"
with open(saida, "w", encoding="utf-8") as f:
    f.write(txt)
print(txt)
