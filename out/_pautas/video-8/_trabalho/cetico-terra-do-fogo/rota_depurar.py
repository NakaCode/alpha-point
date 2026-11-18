# Depura o grafo do rota_osm.py: até onde se chega de Río Gallegos (rumo ao sul) e de Ushuaia (rumo ao norte),
# e que vias existem perto da balsa de Punta Delgada e de San Sebastián.
# Uso: python -X utf8 -B rota_depurar.py
import json, os, math
from collections import deque
D = r"C:\projetos\alpha-point\midia\_pautas\video-8\cetico-terra-do-fogo\osm"
est = json.load(open(os.path.join(D, "estradas.json"), encoding="utf-8"))
nos = {e["id"]: (e["lat"], e["lon"]) for e in est["elements"] if e["type"] == "node"}
vias = [e for e in est["elements"] if e["type"] == "way"]
adj = {}
for v in vias:
    nd = [n for n in v["nodes"] if n in nos]
    for a, b in zip(nd, nd[1:]):
        adj.setdefault(a, set()).add(b); adj.setdefault(b, set()).add(a)
def comp(o):
    vis = {o}; q = deque([o])
    while q:
        u = q.popleft()
        for v in adj.get(u, ()):
            if v not in vis:
                vis.add(v); q.append(v)
    return vis
c1 = comp(646718222); c2 = comp(7892395787)
print("de Río Gallegos:", len(c1), "nós; lat mín %.4f" % min(nos[n][0] for n in c1))
print("de Ushuaia:", len(c2), "nós; lat máx %.4f" % max(nos[n][0] for n in c2))
def perto(lat0, lat1, lon0, lon1):
    for v in vias:
        nd = [n for n in v["nodes"] if n in nos]
        if any(lat0 <= nos[n][0] <= lat1 and lon0 <= nos[n][1] <= lon1 for n in nd):
            t = v.get("tags", {})
            em1 = any(n in c1 for n in nd); em2 = any(n in c2 for n in nd)
            print("  ", v["id"], t.get("highway") or t.get("route"), "|", t.get("ref", ""), "|", t.get("name", ""), "| surface:", t.get("surface", ""), "| RG:", em1, "US:", em2,
                  "| lat %.4f..%.4f lon %.4f..%.4f" % (min(nos[n][0] for n in nd), max(nos[n][0] for n in nd), min(nos[n][1] for n in nd), max(nos[n][1] for n in nd)))
print("# perto da balsa (Punta Delgada / Bahía Azul):")
perto(-52.52, -52.43, -69.62, -69.45)
print("# perto de San Sebastián (a fronteira na ilha):")
perto(-53.36, -53.28, -68.70, -68.40)
print("# perto de Monte Aymond:")
perto(-52.17, -52.12, -69.56, -69.48)
