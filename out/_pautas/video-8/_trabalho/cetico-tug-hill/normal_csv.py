# Le um CSV das normais anuais/sazonais 1991-2020 da NOAA (NCEI) e imprime as colunas de neve, com as bandeiras de completude.
# Uso: python -X utf8 -B normal_csv.py <ID> [<ID> ...]   (um pedido por vez, User-Agent do canal)
import csv, io, sys, time, urllib.request
UA = "AlphaPointCanal/1.0 (contato.naka@hotmail.com)"
for sid in sys.argv[1:]:
    url = f"https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/{sid}.csv"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=40) as r:
            txt = r.read().decode("utf-8", "replace")
    except Exception as e:
        print(sid, "ERRO", e); continue
    rows = list(csv.DictReader(io.StringIO(txt)))
    row = rows[0]
    print("==", sid, url)
    for k in ("STATION", "NAME", "LATITUDE", "LONGITUDE", "ELEVATION"):
        print(f"  {k}={row.get(k)}")
    for k, v in row.items():
        ku = k.upper()
        if "SNOW" in ku and ("ANN" in ku or "DJF" in ku) and "SNWD" not in ku:
            if v and v.strip():
                print(f"  {k}={v.strip()}")
    time.sleep(1.2)
