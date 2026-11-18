# Onde moram os trabalhadores com emprego no condado de Teton (WY), pelo LEHD LODES 8 (Census, dado aberto).
# main = mora e trabalha no Wyoming; aux = trabalha no Wyoming e mora em outro estado.
# Uso: python -X utf8 -B lodes_teton.py <ano> <JT>   (ex.: 2023 JT01 = empregos principais; JT00 = todos)
import sys, os, gzip, csv, io, time, urllib.request
from collections import Counter
ano, jt = sys.argv[1], sys.argv[2]
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
NOMES = {"56039": "Teton WY", "56023": "Lincoln WY (Star Valley)", "56035": "Sublette WY", "56013": "Fremont WY",
         "16081": "Teton ID (Driggs/Victor)", "16019": "Bonneville ID (Idaho Falls)", "16065": "Madison ID (Rexburg)",
         "16051": "Jefferson ID", "16043": "Fremont ID"}
tot = Counter()
for parte in ("main", "aux"):
    nome = f"wy_od_{parte}_{jt}_{ano}.csv.gz"
    if not os.path.exists(nome):
        url = f"https://lehd.ces.census.gov/data/lodes/LODES8/wy/od/{nome}"
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=120) as r:
            open(nome, "wb").write(r.read())
        time.sleep(2)
    with gzip.open(nome, "rt", encoding="utf-8") as f:
        for row in csv.DictReader(f):
            if row["w_geocode"].startswith("56039"):
                tot[row["h_geocode"][:5]] += int(row["S000"])
total = sum(tot.values())
print(f"LODES8 {jt} {ano}: empregos com local de trabalho no condado de Teton, WY = {total}")
mora = tot["56039"]
print(f"  moram no proprio condado: {mora} ({mora/total:.1%}); moram fora: {total-mora} ({(total-mora)/total:.1%})")
idaho = sum(v for k, v in tot.items() if k.startswith("16"))
print(f"  moram em Idaho: {idaho} ({idaho/total:.1%})")
outros_wy = sum(v for k, v in tot.items() if k.startswith("56") and k != "56039")
print(f"  moram em outro condado do Wyoming: {outros_wy} ({outros_wy/total:.1%})")
print("  os 12 maiores condados de moradia:")
for k, v in tot.most_common(12):
    print(f"    {k} {NOMES.get(k, ''):28s} {v:6d} {v/total:6.1%}")
