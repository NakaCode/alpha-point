# Le a area (area_km2) de EEZ no Marine Regions (WFS do VLIZ, dado aberto CC-BY), sem baixar a geometria.
# Uso: python -X utf8 -B mr_eez.py <mrgid> [<mrgid> ...]
import sys, json, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint-pauta/1.0 (canal de geografia; pesquisa de pauta)"}
for m in sys.argv[1:]:
    q = {"service": "WFS", "version": "1.0.0", "request": "GetFeature", "typeName": "MarineRegions:eez",
         "CQL_FILTER": "mrgid=" + m, "propertyName": "mrgid,geoname,territory1,sovereign1,area_km2", "outputFormat": "application/json"}
    url = "https://geo.vliz.be/geoserver/MarineRegions/wfs?" + urllib.parse.urlencode(q)
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
            d = json.loads(r.read().decode("utf-8"))
        for f in d.get("features", []):
            print(json.dumps(f["properties"], ensure_ascii=False))
        if not d.get("features"):
            print(m, "sem resultado")
    except Exception as e:
        print(m, "erro", e)
