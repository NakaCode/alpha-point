# Conta arquivos em categorias do Wikimedia Commons pela API do MediaWiki (prop=categoryinfo), um pedido so, com o User-Agent do canal.
# Uso: python -X utf8 -B commons_cats.py "Category:A" "Category:B" ...
import sys, json, urllib.request, urllib.parse
UA = "AlphaPoint/1.0 (https://www.youtube.com/@AlphaPoint; contato.naka@hotmail.com) pesquisa-de-pauta"
titulos = "|".join(sys.argv[1:])
url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(
    {"action": "query", "prop": "categoryinfo", "titles": titulos, "format": "json", "formatversion": "2"})
req = urllib.request.Request(url, headers={"User-Agent": UA})
with urllib.request.urlopen(req, timeout=60) as r:
    d = json.loads(r.read().decode("utf-8"))
for p in d["query"]["pages"]:
    ci = p.get("categoryinfo", {})
    print(f"{p['title']}\tarquivos={ci.get('files')}\tsubcats={ci.get('subcats')}\t{'(nao existe)' if p.get('missing') else ''}")
