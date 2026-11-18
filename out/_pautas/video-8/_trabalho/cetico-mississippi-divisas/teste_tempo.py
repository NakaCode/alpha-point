# Mede o tempo de um pedido de blocos (camada 10) num retângulo pequeno (face 1433, AR).
import time, json, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/10/query"
p = {"where": "STATE='05'", "geometry": "-90.81245,34.26951,-90.73515,34.32888", "geometryType": "esriGeometryEnvelope", "inSR": "4326",
     "spatialRel": "esriSpatialRelIntersects", "outFields": "GEOID,AREALAND,POP100,INTPTLAT,INTPTLON", "returnGeometry": "false", "f": "json"}
t = time.time()
with urllib.request.urlopen(urllib.request.Request(URL, data=urllib.parse.urlencode(p).encode(), headers=UA), timeout=180) as r:
    j = json.loads(r.read())
print(len(j.get("features", [])), "blocos em %.1f s" % (time.time() - t), j.get("error"))
