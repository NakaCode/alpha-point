# Nauru: o planalto minerado ("Topside") e o anel do litoral, pela altitude (vídeo 8, 18/11/2026).
# O contorno do Nominatim veio com o mar territorial, então a medida usa a caixa da ilha (lat -0,56 a -0,50; lon 166,89 a 166,97)
# e conta como terra o ponto com altitude >= 1 m no SRTM 30 m (OpenTopoData; o mar sai 0). Reaproveita o cache nauru-alt.json
# e pede só os pontos que faltam na caixa (100 por pedido, pausa de 1,2 s, User-Agent do canal).
# Uso: python -X utf8 -B nauru_ilha.py
import json, os, time, urllib.request, urllib.parse, statistics

AQUI = os.path.dirname(os.path.abspath(__file__))
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
ALT = os.path.join(AQUI, "nauru-alt.json")
alt = json.load(open(ALT, encoding="utf-8"))

pts = []
y = -0.56
while y <= -0.4999:
    x = 166.89
    while x <= 166.9701:
        pts.append((round(y, 5), round(x, 5)))
        x += 0.002
    y += 0.002
# os pontos do cache dentro da caixa (grade do script anterior) mais a grade nova onde faltar
cache_caixa = {k: v for k, v in alt.items() if -0.56 <= float(k.split(",")[0]) <= -0.50 and 166.89 <= float(k.split(",")[1]) <= 166.97}
lat_max_cache = max(float(k.split(",")[0]) for k in alt)
falta = [p for p in pts if p[0] > lat_max_cache]
novos = {}
for i in range(0, len(falta), 100):
    lote = falta[i:i + 100]
    locs = "|".join("%s,%s" % p for p in lote)
    url = "https://api.opentopodata.org/v1/srtm30m?locations=" + urllib.parse.quote(locs, safe=",|.-")
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        res = json.load(r)
    for p, rr in zip(lote, res.get("results", [])):
        novos["%s,%s" % p] = rr.get("elevation")
    time.sleep(1.2)
alt.update(novos)
json.dump(alt, open(ALT, "w", encoding="utf-8"))
todos = dict(cache_caixa); todos.update(novos)
v = [e for e in todos.values() if e is not None and e >= 1]
v.sort()
cel = 0.002 * 111.32  # km por lado da célula, perto do equador
area = len(v) * cel * cel
s = []
s.append("Nauru, SRTM 30 m (OpenTopoData), caixa da ilha, grade de 0,002 grau (~223 m): %d pontos de terra (>= 1 m), área estimada %.1f km2" % (len(v), area))
s.append("média %.0f m; mediana %.0f m; máximo %.0f m" % (statistics.mean(v), statistics.median(v), v[-1]))
for lim in (5, 10, 15, 20, 25, 30):
    s.append("acima de %d m: %.1f %% da terra" % (lim, 100 * sum(1 for e in v if e > lim) / len(v)))
open(os.path.join(AQUI, "nauru-relevo-saida.txt"), "w", encoding="utf-8").write("\n".join(s) + "\n")
print("\n".join(s))
