# Conta arquivos em categorias do Wikimedia Commons (API do MediaWiki, um pedido, User-Agent do canal).
# Uso: python -X utf8 -B commons_cats.py
import json, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint/1.0 (https://www.youtube.com/@AlphaPoint; contato.naka@hotmail.com) pesquisa-de-pauta"}
cats = ["Category:1928 Lake Okeechobee hurricane", "Category:Okeechobee hurricane", "Category:1928 Okeechobee Hurricane", "Category:Hurricane San Felipe Segundo", "Category:Okeechobee Hurricane (1928)",
        "Category:Lake Okeechobee from space"]
u = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(
    {"action": "query", "prop": "categoryinfo", "titles": "|".join(cats), "format": "json"})
with urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60) as r:
    d = json.load(r)
for p in d["query"]["pages"].values():
    print(p["title"], p.get("categoryinfo", "nao existe"))
