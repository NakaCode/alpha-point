# Acha o furo do grafo entre Tolhuin e Ushuaia: as vias da faixa de lat -54,70 a -54,45 e em que componente cada uma está.
# Uso: python -X utf8 -B rota_depurar2.py
import json, os
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
faltam = 0
for v in vias:
    t = v.get("tags", {})
    if t.get("ref") not in ("RN3", "3") and "Nacional 3" not in t.get("name", ""):
        continue
    nd = [n for n in v["nodes"] if n in nos]
    if len(nd) != len(v["nodes"]):
        faltam += 1
    la = [nos[n][0] for n in nd]
    if not la or max(la) < -54.70 or min(la) > -54.45:
        continue
    print(v["id"], t.get("highway"), "| nós %d/%d" % (len(nd), len(v["nodes"])), "| RG:", any(n in c1 for n in nd), "US:", any(n in c2 for n in nd),
          "| lat %.4f..%.4f" % (min(la), max(la)), "| pontas", nd[0], nd[-1])
print("vias da RN3 com nós faltando no arquivo:", faltam)
