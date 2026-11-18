# Baixa do OSM (Overpass, um pedido, User-Agent do canal) as vias main_stream da relação 1756854 (Mississippi River),
# entre 30,9° e 44,9° N, com geometria. Dados (c) OpenStreetMap contributors, ODbL.
# Saída (bruto, fora do git): midia/_pautas/video-8/cetico-mississippi-divisas/rio-main-stream.json
import json, os, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://overpass-api.de/api/interpreter"
RAIZ = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "..", ".."))
SAIDA = os.path.join(RAIZ, "midia", "_pautas", "video-8", "cetico-mississippi-divisas", "rio-main-stream.json")
q = """[out:json][timeout:180];
rel(1756854);
way(r:"main_stream")(30.9,-95.5,44.9,-88.0);
out tags geom;"""
req = urllib.request.Request(URL, data=urllib.parse.urlencode({"data": q}).encode(), headers=UA)
with urllib.request.urlopen(req, timeout=300) as r:
    corpo = r.read()
open(SAIDA, "wb").write(corpo)
j = json.loads(corpo)
print(len(corpo), "bytes;", len(j["elements"]), "vias;", sum(len(e.get("geometry", [])) for e in j["elements"]), "nós;", j.get("osm3s", {}).get("timestamp_osm_base"))
