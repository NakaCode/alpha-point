# Andorra: a altitude média do país, medida por nós (vídeo 8, 18/11/2026).
#  - contorno: Nominatim (OSM), polygon_geojson, um pedido, User-Agent do canal; cache em andorra-contorno.json;
#  - altitudes: API pública do OpenTopoData (dataset srtm30m, SRTM 1 arco-segundo, NASA), 100 pontos por pedido,
#    um pedido por vez com pausa de 1,2 s (limite público: 1 por segundo, 1.000 por dia); cache em andorra-alt.json.
#  - grade regular de ~0,01 grau (~0,8 a 1,1 km) dentro do contorno.
# Uso: python -X utf8 -B andorra_relevo.py
import json, os, time, urllib.request, urllib.parse, statistics

AQUI = os.path.dirname(os.path.abspath(__file__))
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
CONT = os.path.join(AQUI, "andorra-contorno.json")
ALT = os.path.join(AQUI, "andorra-alt.json")

if not os.path.exists(CONT):
    url = "https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode(
        {"country": "Andorra", "format": "json", "limit": 1, "polygon_geojson": 1, "featuretype": "country"})
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        d = json.load(r)
    json.dump(d, open(CONT, "w", encoding="utf-8"))
    time.sleep(1.2)
d = json.load(open(CONT, encoding="utf-8"))
g = d[0]["geojson"]
polys = g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]
aneis = [p[0] for p in polys]

def dentro(x, y):
    c = False
    for anel in aneis:
        n = len(anel); j = n - 1
        for i in range(n):
            xi, yi = anel[i]; xj, yj = anel[j]
            if ((yi > y) != (yj > y)) and (x < (xj - xi) * (y - yi) / (yj - yi + 1e-15) + xi):
                c = not c
            j = i
    return c

xs = [pt[0] for a in aneis for pt in a]; ys = [pt[1] for a in aneis for pt in a]
passo = 0.01
pts = []
y = min(ys)
while y <= max(ys):
    x = min(xs)
    while x <= max(xs):
        if dentro(x, y):
            pts.append((round(y, 5), round(x, 5)))
        x += passo
    y += passo
print("pontos na grade:", len(pts))

alt = json.load(open(ALT, encoding="utf-8")) if os.path.exists(ALT) else {}
falta = [p for p in pts if "%s,%s" % p not in alt]
for i in range(0, len(falta), 100):
    lote = falta[i:i + 100]
    locs = "|".join("%s,%s" % p for p in lote)
    url = "https://api.opentopodata.org/v1/srtm30m?locations=" + urllib.parse.quote(locs, safe=",|.-")
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        res = json.load(r)
    for p, rr in zip(lote, res.get("results", [])):
        alt["%s,%s" % p] = rr.get("elevation")
    json.dump(alt, open(ALT, "w", encoding="utf-8"))
    time.sleep(1.2)

v = [alt["%s,%s" % p] for p in pts if alt.get("%s,%s" % p) is not None]
v.sort()
saida = []
saida.append("Andorra, SRTM 30 m (OpenTopoData), grade de 0,01 grau dentro do contorno do OSM: %d pontos" % len(v))
saida.append("média %.0f m (%.0f pés); mediana %.0f m; mínimo %.0f m; máximo %.0f m" % (
    statistics.mean(v), statistics.mean(v) * 3.28084, statistics.median(v), v[0], v[-1]))
for lim in (1000, 1500, 2000, 2500):
    saida.append("acima de %d m: %.1f %%" % (lim, 100 * sum(1 for e in v if e > lim) / len(v)))
open(os.path.join(AQUI, "andorra-relevo-saida.txt"), "w", encoding="utf-8").write("\n".join(saida) + "\n")
print("\n".join(saida))
