# Para a comparação de tamanho: a terra da cidade de Nova York (Censo 2020, TIGERweb camada 26, GEOID 3651000).
import json, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/26/query"
p = {"where": "GEOID='3651000'", "outFields": "NAME,GEOID,POP100,AREALAND,AREAWATER", "returnGeometry": "false", "f": "json"}
with urllib.request.urlopen(urllib.request.Request(URL, data=urllib.parse.urlencode(p).encode(), headers=UA), timeout=60) as r:
    for f in json.loads(r.read())["features"]:
        a = f["attributes"]; print(a, "terra mi2 = %.1f" % (a["AREALAND"] / 2589988.11))
