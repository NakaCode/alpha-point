# Area total de Delaware (soma dos 3 condados, Census Gazetteer 2024, ja baixado pelo cetico de Jackson Hole) contra o parque de Banff.
import zipfile, io, csv
z = zipfile.ZipFile("../cetico-jackson-hole/gaz2024.zip")
nome = [n for n in z.namelist() if n.endswith(".txt")][0]
linhas = list(csv.reader(io.TextIOWrapper(z.open(nome), encoding="latin-1"), delimiter="\t"))
cab = [c.strip() for c in linhas[0]]
iA, iW, iU = cab.index("ALAND_SQMI"), cab.index("AWATER_SQMI"), cab.index("USPS")
de = [l for l in linhas[1:] if l[iU] == "DE"]
terra = sum(float(l[iA]) for l in de); agua = sum(float(l[iW]) for l in de)
print(f"Delaware: {len(de)} condados | terra {terra:,.1f} mi2 | agua {agua:,.1f} | total {terra+agua:,.1f} mi2 = {(terra+agua)*2.589988:,.0f} km2 | terra {terra*2.589988:,.0f} km2")
print(f"Banff NP: 6.641 km2 = {6641/2.589988:,.0f} mi2")
