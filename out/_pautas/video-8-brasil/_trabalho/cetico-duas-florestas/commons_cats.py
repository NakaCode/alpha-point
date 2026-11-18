# Quantos arquivos ha em algumas categorias do Wikimedia Commons (API do MediaWiki, um pedido, User-Agent do canal).
# Uso: python -X utf8 -B commons_cats.py
import json, urllib.request, urllib.parse

UA = "AlphaPointResearch/1.0 (contato.naka@hotmail.com)"
cats = ["Atlantic Forest", "Atlantic Forest in Brazil", "Caatinga", "Cerrado", "Gallery forests", "Mata Atlântica",
        "Canarana (Mato Grosso)", "Quirinópolis", "Brejos de altitude", "Serra de Baturité"]
q = {"action": "query", "format": "json", "prop": "categoryinfo", "titles": "|".join("Category:" + c for c in cats)}
url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(q)
d = json.load(urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60))
for p in d["query"]["pages"].values():
    ci = p.get("categoryinfo", {})
    print(p["title"], "| arquivos:", ci.get("files", "nao existe" if "missing" in p else 0), "| subcategorias:", ci.get("subcats", "-"))
