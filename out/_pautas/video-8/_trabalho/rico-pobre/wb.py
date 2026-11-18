# PIB per capita (US$ correntes, NY.GDP.PCAP.CD) do Banco Mundial (API aberta), um pedido por vez.
# Uso: python -X utf8 -B wb.py CHL;BOL;PER 2024
import sys, json, urllib.request
UA = {"User-Agent": "AlphaPoint-pauta/1.0 (canal de geografia; pesquisa de pauta)"}
paises, ano = sys.argv[1], sys.argv[2]
url = f"https://api.worldbank.org/v2/country/{paises}/indicator/NY.GDP.PCAP.CD?date={ano}&format=json&per_page=50"
with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
    d = json.loads(r.read().decode("utf-8"))
print("fonte:", url, "| atualizado:", d[0].get("lastupdated"))
for x in d[1]:
    print(x["country"]["value"], x["date"], x["value"])
