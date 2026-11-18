import json, math, os, collections
RAIZ = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "..", ".."))
j = json.load(open(os.path.join(RAIZ, "midia/_pautas/video-8/cetico-mississippi-divisas/rio-main-stream.json"), encoding="utf-8"))
L = 0; n = 0; seg = []
tags = collections.Counter()
for e in j["elements"]:
    g = e.get("geometry", [])
    n += len(g)
    for a, b in zip(g, g[1:]):
        d = math.hypot((b["lon"] - a["lon"]) * 111.32 * math.cos(math.radians(a["lat"])), (b["lat"] - a["lat"]) * 110.57)
        L += d; seg.append(d)
    tags[e["tags"].get("waterway")] += 1
seg.sort()
print("comprimento km:", round(L), "nós:", n, "mediana m:", round(seg[len(seg)//2]*1000), "p90 m:", round(seg[int(.9*len(seg))]*1000))
print(tags)
lats = [p["lat"] for e in j["elements"] for p in e.get("geometry", [])]
print("lat min/max", min(lats), max(lats))
print(json.dumps(j["elements"][0])[:600])
