# Baixa do OSM (Overpass API, um pedido por vez, User-Agent do canal) o dique Herbert Hoover e o lago Okeechobee.
# Uso: python -X utf8 -B osm_baixar.py
# Saida: dique.json e lago.json nesta pasta (geometria "out geom" do Overpass). Dados (c) OpenStreetMap contributors, ODbL.
import json, time, urllib.request, urllib.parse, os

UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://overpass-api.de/api/interpreter"
AQUI = os.path.dirname(os.path.abspath(__file__))
BBOX = "26.60,-81.20,27.30,-80.55"

consultas = {
    "dique.json": f"""[out:json][timeout:90];
(
  way["name"~"Hoover Dike|Herbert Hoover",i]({BBOX});
  way["man_made"="dyke"]({BBOX});
  way["embankment"="yes"]["name"~"Dike|Levee",i]({BBOX});
);
out tags geom;""",
    "lago.json": f"""[out:json][timeout:90];
(
  relation["name"="Lake Okeechobee"]["natural"="water"];
  way["name"="Lake Okeechobee"]["natural"="water"];
);
out tags geom;""",
}

for nome, q in consultas.items():
    dados = urllib.parse.urlencode({"data": q}).encode()
    req = urllib.request.Request(URL, data=dados, headers=UA)
    with urllib.request.urlopen(req, timeout=180) as r:
        corpo = r.read()
    with open(os.path.join(AQUI, nome), "wb") as f:
        f.write(corpo)
    j = json.loads(corpo)
    print(nome, len(corpo), "bytes,", len(j.get("elements", [])), "elementos")
    time.sleep(5)
