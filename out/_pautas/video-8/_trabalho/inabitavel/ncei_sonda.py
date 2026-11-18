# Um pedido só à API da NCEI, para ver se o filtro por lugar funciona e quantas paginas ha.
import json, sys, urllib.request, urllib.parse
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
params = dict(a.split("=", 1) for a in sys.argv[1:])
url = "https://www.ngdc.noaa.gov/hazel/hazard-service/api/v1/tsunamis/runups?" + urllib.parse.urlencode(params)
req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
with urllib.request.urlopen(req, timeout=60) as r:
    d = json.load(r)
print(url)
print({k: d[k] for k in d if k != "items"})
it = d.get("items", [])
print(len(it), "itens nesta pagina")
for x in it[:3]:
    print({k: x.get(k) for k in ("year", "country", "area", "locationName", "runupHt", "deaths", "distFromSource")})
json.dump(d, open("ncei-sonda.json", "w", encoding="utf-8"), ensure_ascii=False)
