# Le o wikitexto do verbete "Banff, Alberta" pela API do MediaWiki (um pedido, User-Agent do canal) e mostra o censo.
import json, re, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint/1.0 (https://www.youtube.com/@AlphaPoint; contato.naka@hotmail.com) pesquisa-de-pauta"}
u = "https://en.wikipedia.org/w/api.php?" + urllib.parse.urlencode({"action": "parse", "page": "Banff, Alberta", "prop": "wikitext", "format": "json", "formatversion": 2})
d = json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60))
w = d["parse"]["wikitext"]
open("dados/wiki_banff.txt", "w", encoding="utf-8").write(w)
for k in ["population_total", "population_as_of", "area_land_km2", "area_total_km2", "population_footnotes", "pop_change"]:
    m = re.search(r"\|\s*" + k + r"\s*=\s*([^\n|]*)", w)
    print(k, "=", m.group(1).strip() if m else None)
for m in re.finditer(r"(2021 Census[^\n]{0,400})", w):
    print("...", m.group(1)[:400]); break
for m in re.finditer(r"(municipal census[^\n]{0,300})", w, re.I):
    print("MUN ...", m.group(1)[:300])
