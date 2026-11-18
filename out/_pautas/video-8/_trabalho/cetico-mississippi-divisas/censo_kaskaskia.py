# Censo 2020 (TIGERweb camada 26, lugares incorporados): a vila de Kaskaskia, IL, por ponto (37.921, -89.914).
import json, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/26/query"
p = {"geometry": "-89.97,37.88,-89.88,37.96", "geometryType": "esriGeometryEnvelope", "inSR": "4326", "spatialRel": "esriSpatialRelIntersects",
     "outFields": "NAME,STATE,GEOID,POP100,HU100,AREALAND,AREAWATER", "returnGeometry": "false", "f": "json"}
with urllib.request.urlopen(urllib.request.Request(URL, data=urllib.parse.urlencode(p).encode(), headers=UA), timeout=120) as r:
    print(json.loads(r.read()).get("features"))
