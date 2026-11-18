# Testa se o TIGERweb devolve o estado em resolução cheia sem maxAllowableOffset (AR), e mede o espaçamento dos vértices.
import json, urllib.request, urllib.parse, math
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/80/query"
p = {"where": "STUSAB='AR'", "outFields": "STUSAB", "returnGeometry": "true", "outSR": "4326", "geometryPrecision": "7", "f": "json"}
req = urllib.request.Request(URL, data=urllib.parse.urlencode(p).encode(), headers=UA)
with urllib.request.urlopen(req, timeout=300) as r:
    j = json.loads(r.read())
an = j["features"][0]["geometry"]["rings"]
nv = sum(len(a) for a in an)
print("AR sem offset:", nv, "vértices em", len(an), "anéis")
# espaçamento mediano a leste de -91.5 (o rio)
d = []
for a in an:
    for (x1, y1), (x2, y2) in zip(a, a[1:]):
        if x1 > -91.5:
            d.append(math.hypot((x2 - x1) * 111.32 * math.cos(math.radians(y1)), (y2 - y1) * 110.57) * 1000)
d.sort()
print("trechos a leste de -91.5:", len(d), "mediana m:", round(d[len(d)//2], 1), "p90 m:", round(d[int(len(d)*.9)], 1))
