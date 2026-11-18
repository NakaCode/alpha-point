# Testa a camada 10 (Census Blocks) do TIGERweb Census 2020: campos e contagem num envelope (Kaskaskia).
import json, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/10"
with urllib.request.urlopen(urllib.request.Request(URL + "?f=json", headers=UA), timeout=60) as r:
    j = json.loads(r.read())
print([f["name"] for f in j["fields"]], "maxRecordCount", j.get("maxRecordCount"))
p = {"where": "STATE='17'", "geometry": "-89.99,37.88,-89.86,37.97", "geometryType": "esriGeometryEnvelope", "inSR": "4326",
     "spatialRel": "esriSpatialRelIntersects", "outFields": "GEOID,AREALAND,AREAWATER,POP100,HU100,INTPTLAT,INTPTLON",
     "returnGeometry": "false", "f": "json"}
with urllib.request.urlopen(urllib.request.Request(URL + "/query", data=urllib.parse.urlencode(p).encode(), headers=UA), timeout=120) as r:
    q = json.loads(r.read())
fs = q.get("features", [])
print(len(fs), "blocos;", q.get("exceededTransferLimit"), q.get("error"))
print(fs[:2])
