"""O canal Marcapomacocha–Cuevas e o túnel Cuevas–Milloc, do OpenStreetMap (nada desenhado).
O túnel é a way/1226268824 ("Tunel Cuevas - Milloc", waterway=canal, tunnel=culvert): 2 nós, da boca de Cuevas
à lagoa Milloc. O canal: as ways waterway=drain|canal|ditch que se ligam, nó a nó, à boca do túnel; o caminho é o
mais curto (Dijkstra) da boca até o nó mais distante do componente, a montante.
uso: python -P geo_canal.py <q1-marca.json> <q2-canal.json> <saida-dir>"""
import json, math, sys, heapq, os


def hav(a, b):
    p1, p2 = math.radians(a[1]), math.radians(b[1])
    h = math.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(math.radians(b[0] - a[0]) / 2) ** 2
    return 2 * 6371.0088 * math.asin(math.sqrt(h))


q1 = json.load(open(sys.argv[1], encoding="utf-8")); q2 = json.load(open(sys.argv[2], encoding="utf-8")); out = sys.argv[3]
els = {e["id"]: e for e in q1["elements"] + q2["elements"] if e["type"] == "way"}
tunel = els[1226268824]
portal = (tunel["geometry"][0]["lon"], tunel["geometry"][0]["lat"])
G = {}
wayde = {}
for wid, e in els.items():
    t = e.get("tags", {})
    if wid == 1226268824 or t.get("waterway") not in ("drain", "canal", "ditch"):
        continue
    pts = [(round(p["lon"], 7), round(p["lat"], 7)) for p in e["geometry"]]
    for a, b in zip(pts, pts[1:]):
        d = hav(a, b)
        G.setdefault(a, []).append((b, d, wid)); G.setdefault(b, []).append((a, d, wid))
ini = min(G, key=lambda n: hav(n, portal))
print("nó do canal mais perto da boca do túnel:", ini, "%.1f m" % (hav(ini, portal) * 1000))
dist = {ini: 0}; prev = {}; pq = [(0, ini)]
while pq:
    d, n = heapq.heappop(pq)
    if d > dist[n]:
        continue
    for m, w, wid in G[n]:
        if d + w < dist.get(m, 1e9):
            dist[m] = d + w; prev[m] = (n, wid); heapq.heappush(pq, (d + w, m))
fim = max(dist, key=dist.get)
cam = [fim]; ways = []
while cam[-1] != ini:
    n, wid = prev[cam[-1]]; cam.append(n)
    if not ways or ways[-1] != wid:
        ways.append(wid)
cam = cam[::-1]  # da boca do túnel para montante
canal = cam[::-1]  # de montante para a boca (sentido da água)
km_canal = dist[fim]
km_tunel = hav((tunel["geometry"][0]["lon"], tunel["geometry"][0]["lat"]), (tunel["geometry"][1]["lon"], tunel["geometry"][1]["lat"]))
print("canal: %.2f km, %d nós, %d ways; montante em %s" % (km_canal, len(canal), len(set(ways)), canal[0]))
print("túnel: %.2f km" % km_tunel)
tun = [(tunel["geometry"][0]["lon"], tunel["geometry"][0]["lat"]), (tunel["geometry"][1]["lon"], tunel["geometry"][1]["lat"])]
fc = {"type": "FeatureCollection", "features": [
    {"type": "Feature", "properties": {"name": "Marcapomacocha–Cuevas canal", "rotulo": "TUNNEL", "parte": "canal",
     "km": round(km_canal, 2), "mi": round(km_canal / 1.609344, 2), "osm_ways": sorted(set(ways)),
     "nota": "ways sem nome (waterway=drain, em boa parte tunnel=culvert) ligadas nó a nó à boca do túnel"},
     "geometry": {"type": "LineString", "coordinates": [list(p) for p in canal]}},
    {"type": "Feature", "properties": {"name": "Cuevas–Milloc tunnel", "rotulo": "TUNNEL", "parte": "tunel",
     "km": round(km_tunel, 2), "mi": round(km_tunel / 1.609344, 2), "osm_ways": [1226268824],
     "nota": "no OSM o túnel é uma reta de 2 nós (boca de Cuevas → lagoa Milloc); o traçado real sob a montanha não está mapeado"},
     "geometry": {"type": "LineString", "coordinates": [list(p) for p in tun]}}]}
json.dump(fc, open(os.path.join(out, "_fc-tunel-transandino.json"), "w", encoding="utf-8"))
print("total canal+túnel: %.2f km = %.2f mi" % (km_canal + km_tunel, (km_canal + km_tunel) / 1.609344))
