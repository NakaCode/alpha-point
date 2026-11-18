# A neve normal anual (1991-2020) das normais da NOAA (annual/seasonal), um pedido por vez, com o User-Agent do canal.
# Uso: python -X utf8 -B neve_normais.py
import csv, io, time, urllib.request
UA = "AlphaPointCanal/1.0 (contato.naka@hotmail.com)"
est = {
 "USC00303961": "Hooker 12 NNW (Tug Hill)", "USC00305438": "Montague (Tug Hill)", "USC00306988": "Redfield 8N (Tug Hill)",
 "USC00303851": "Highmarket 2W (Tug Hill)", "USC00300424": "Barnes Corners (Tug Hill)", "USC00306300": "Osceola (Tug Hill)",
 "USW00014771": "Syracuse (aeroporto)", "USW00014733": "Buffalo (aeroporto)", "USW00003017": "Denver (aeroporto)",
 "USW00026451": "Anchorage (aeroporto)", "USW00094846": "Chicago O'Hare", "USW00014739": "Boston Logan",
}
for sid, nome in est.items():
    url = f"https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/{sid}.csv"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=40) as r:
            txt = r.read().decode("utf-8", "replace")
        rows = list(csv.DictReader(io.StringIO(txt)))
        row = rows[0]
        v = row.get("ANN-SNOW-NORMAL", "").strip()
        f = row.get("ANN-SNOW-NORMAL_ATTRIBUTES", "").strip() if "ANN-SNOW-NORMAL_ATTRIBUTES" in row else ""
        print(f"{sid}\t{nome}\tANN-SNOW-NORMAL={v} in\tflag={f}")
    except Exception as e:
        print(f"{sid}\t{nome}\tERRO {e}")
    time.sleep(1.2)
