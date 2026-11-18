# Olha o que veio do OSM: as vias de fronteira (nome, extensão em lon/lat) e os marcos/aduanas.
# Uso: python -X utf8 -B osm_olhar.py
import json, os
D = r"C:\projetos\alpha-point\midia\_pautas\video-8\cetico-terra-do-fogo\osm"
f = json.load(open(os.path.join(D, "fronteira.json"), encoding="utf-8"))
print("# fronteira:", len(f["elements"]))
for e in f["elements"]:
    g = e.get("geometry") or []
    if not g:
        continue
    lons = [p["lon"] for p in g]; lats = [p["lat"] for p in g]
    t = e.get("tags", {})
    print(e["id"], "|", t.get("name", ""), "|", t.get("maritime", ""), t.get("border_type", ""), "| lon %.5f..%.5f lat %.4f..%.4f | %d pts" % (min(lons), max(lons), min(lats), max(lats), len(g)))
m = json.load(open(os.path.join(D, "marcos.json"), encoding="utf-8"))
print("# marcos:", len(m["elements"]))
for e in m["elements"]:
    t = e.get("tags", {})
    print(e["id"], "| %.6f %.6f |" % (e["lat"], e["lon"]), {k: v for k, v in t.items() if k in ("name", "barrier", "historic", "boundary", "operator", "border_type", "ref")})
