# Baixa (Overpass, um pedido, User-Agent do canal) todas as vias com highway na caixa do furo da RN3 entre Tolhuin e Ushuaia,
# para ver como o trecho está marcado no OSM. Saída: midia/.../osm/furo.json. Uso: python -X utf8 -B osm_furo.py
import json, os, urllib.request, urllib.parse
D = r"C:\projetos\alpha-point\midia\_pautas\video-8\cetico-terra-do-fogo\osm"
est = json.load(open(os.path.join(D, "estradas.json"), encoding="utf-8"))
nos = {e["id"]: (e["lat"], e["lon"]) for e in est["elements"] if e["type"] == "node"}
for n in (5716343549, 5715746992, 252601383, 3336227028):
    print(n, nos.get(n))
a, b = nos[5716343549], nos[252601383]
s, n_ = min(a[0], b[0]) - 0.01, max(a[0], b[0]) + 0.01
w, e = min(a[1], b[1]) - 0.02, max(a[1], b[1]) + 0.02
q = '[out:json][timeout:60];way(%f,%f,%f,%f)[highway];out tags geom;' % (s, w, n_, e)
arq = os.path.join(D, "furo.json")
if not os.path.exists(arq):
    req = urllib.request.Request("https://overpass-api.de/api/interpreter", data=urllib.parse.urlencode({"data": q}).encode(),
                                 headers={"User-Agent": "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"})
    with urllib.request.urlopen(req, timeout=120) as r:
        open(arq, "wb").write(r.read())
d = json.load(open(arq, encoding="utf-8"))
for el in d["elements"]:
    t = el.get("tags", {}); g = el.get("geometry", [])
    if g:
        print(el["id"], t.get("highway"), t.get("ref", ""), t.get("name", ""), "| lat %.4f..%.4f" % (min(p["lat"] for p in g), max(p["lat"] for p in g)),
              {k: v for k, v in t.items() if k in ("construction", "bridge", "access", "surface", "proposed")})
