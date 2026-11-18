# Conta arquivos em categorias do Wikimedia Commons (API do MediaWiki, um pedido, User-Agent do canal).
import json, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint/1.0 (https://www.youtube.com/@AlphaPoint; contato.naka@hotmail.com) pesquisa-de-pauta"}
cats = ["Category:Banff, Alberta", "Category:Banff National Park", "Category:Cave and Basin National Historic Site", "Category:History of Banff, Alberta", "Category:Banff Springs Hotel", "Category:Banff Avenue", "Category:Bow Valley", "Category:Canmore, Alberta",
        "Category:Wildlife crossings in Banff National Park", "Category:Bankhead, Alberta"]
u = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(
    {"action": "query", "prop": "categoryinfo", "titles": "|".join(cats), "format": "json"})
with urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60) as r:
    d = json.load(r)
for p in d["query"]["pages"].values():
    print(p["title"], p.get("categoryinfo", "nao existe"))
