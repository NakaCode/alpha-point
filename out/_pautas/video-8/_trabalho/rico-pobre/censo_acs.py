# Le do API aberto do Census (ACS 1 ano, tabelas de assunto) a taxa de pobreza e a renda mediana dos domicilios.
# Uso: python -X utf8 -B censo_acs.py
import json, urllib.request
UA = {"User-Agent": "AlphaPoint-pauta/1.0 (canal de geografia; pesquisa de pauta)"}
def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return json.loads(r.read().decode("utf-8"))
ano = 2024
base = f"https://api.census.gov/data/{ano}/acs/acs1/subject?get=NAME,S1701_C03_001E,S1901_C01_012E"
for rotulo, geo in [("EUA", "&for=us:1"), ("NM", "&for=state:35"), ("TX", "&for=state:48"), ("MS", "&for=state:28"),
                    ("Laredo (cidade)", "&for=place:41464&in=state:48"), ("Laredo metro", "")]:
    if not geo:
        url = f"https://api.census.gov/data/{ano}/acs/acs1/subject?get=NAME,S1701_C03_001E,S1901_C01_012E&for=metropolitan%20statistical%20area/micropolitan%20statistical%20area:29700"
    else:
        url = base + geo
    try:
        d = get(url)
        print(rotulo, "|", d[1][0], "| pobreza % =", d[1][1], "| renda mediana dom. US$ =", d[1][2], "|", url)
    except Exception as e:
        print(rotulo, "erro", e, url)
