# Baixa do OSM (Overpass API, um pedido, User-Agent do canal) o limite da cidade de Banff (Town of Banff), com a geometria.
import json, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
q = '[out:json][timeout:60];relation["boundary"="administrative"]["name"~"Banff"](50.9,-116.0,51.4,-115.3);out geom;'
req = urllib.request.Request("https://overpass-api.de/api/interpreter", data=urllib.parse.urlencode({"data": q}).encode(), headers=UA)
d = json.load(urllib.request.urlopen(req, timeout=120))
json.dump(d, open("dados/osm_banff.json", "w", encoding="utf-8"))
for el in d["elements"]:
    print(el["type"], el["id"], el.get("tags", {}).get("name"), el.get("tags", {}).get("admin_level"), len(el.get("members", [])))
