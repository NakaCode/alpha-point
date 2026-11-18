# Acha no OSM (Overpass, um pedido, User-Agent do canal) a relação waterway=river do Mississippi e conta os papéis dos membros.
# Dados (c) OpenStreetMap contributors, ODbL.
import json, urllib.request, urllib.parse, collections
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://overpass-api.de/api/interpreter"
q = """[out:json][timeout:120];
rel["waterway"="river"]["name"="Mississippi River"];
out body;"""
req = urllib.request.Request(URL, data=urllib.parse.urlencode({"data": q}).encode(), headers=UA)
with urllib.request.urlopen(req, timeout=200) as r:
    j = json.loads(r.read())
for e in j["elements"]:
    c = collections.Counter((m["type"], m.get("role", "")) for m in e.get("members", []))
    print(e["id"], {k: v for k, v in e["tags"].items() if k in ("name", "waterway", "wikidata", "type")}, dict(c))
