"""Eixo do Canal do Panama, de mar a mar, pelo tracado de 1914 (eclusas de Gatun, Pedro Miguel e Miraflores).
Fonte: OSM relation/2389520 (Canal de Panama, waterway=canal), dump do Overpass gravado em _tmp/pesquisa-geo/dumps.
Tira os canais de acesso das eclusas novas de 2016 (way/516775939, Cocoli; way/516778212, Agua Clara) e acha o
caminho mais curto pelo grafo dos ways (as duas pistas das eclusas sao paralelas; fica a de menor comprimento).
uso: python geo_canal.py <dump ways-tags> <saida fc.json>"""
import json, sys, math, heapq
NOVAS = {516775939, 516778212}
j = json.load(open(sys.argv[1], encoding="utf-8"))
def d(a, b): return math.hypot((b[0]-a[0])*111.32*math.cos(math.radians(9.1)), (b[1]-a[1])*110.6)
G = {}
ways = [e for e in j["elements"] if e["type"] == "way" and e["id"] not in NOVAS]
for w in ways:
    pts = [(p["lon"], p["lat"]) for p in w["geometry"]]
    for a, b in zip(pts, pts[1:]):
        G.setdefault(a, []).append((b, d(a, b))); G.setdefault(b, []).append((a, d(a, b)))
ini = max(G, key=lambda p: p[1]); fim = min(G, key=lambda p: p[1])
dist = {ini: 0}; prev = {}; pq = [(0, ini)]
while pq:
    c, u = heapq.heappop(pq)
    if u == fim: break
    if c > dist[u]: continue
    for v, w in G[u]:
        if c + w < dist.get(v, 1e18): dist[v] = c + w; prev[v] = u; heapq.heappush(pq, (c + w, v))
path = [fim]
while path[-1] != ini: path.append(prev[path[-1]])
path.reverse()
def dp(P, tol):
    if len(P) < 3: return P
    a, b = P[0], P[-1]; imax, dmax = 0, 0
    for i in range(1, len(P)-1):
        x, y = P[i]; ax, ay = a; bx, by = b
        L = math.hypot(bx-ax, by-ay) or 1e-12
        dd = abs((bx-ax)*(ay-y) - (ax-x)*(by-ay)) / L
        if dd > dmax: imax, dmax = i, dd
    if dmax <= tol: return [a, b]
    return dp(P[:imax+1], tol)[:-1] + dp(P[imax:], tol)
simp = dp(path, 0.0001)
L = sum(d(a, b) for a, b in zip(path, path[1:]))
print(f"inicio {ini} fim {fim} · {len(path)} vertices -> {len(simp)} · {L:.2f} km ({L/1.609344:.2f} mi)")
fc = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {
    "name": "Panama Canal", "name_pt": "Panama Canal", "rotulo": "Panama Canal", "osm": "relation/2389520",
    "comprimento_km": round(L, 2), "nota": "tracado de hoje das eclusas de 1914 (sem as pistas de 2016); ponta do Atlantico e do Pacifico pelos canais de acesso do OSM"},
    "geometry": {"type": "LineString", "coordinates": [[round(x, 6), round(y, 6)] for x, y in simp]}}]}
json.dump(fc, open(sys.argv[2], "w", encoding="utf-8"))
