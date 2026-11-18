# Conta os arquivos das categorias de Kiribati no Wikimedia Commons e faz algumas buscas de arquivo
# (API do MediaWiki, um pedido por vez, User-Agent do canal). Uso: python -I -X utf8 -B commons.py > commons-saida.txt
import json, time, urllib.request, urllib.parse
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))
cats = ["Category:Kiribati", "Category:Maps of Kiribati", "Category:Satellite pictures of Kiribati", "Category:Kiritimati",
        "Category:Tarawa", "Category:South Tarawa", "Category:Banaba", "Category:Kanton Island", "Category:Phoenix Islands",
        "Category:Line Islands", "Category:Gilbert Islands", "Category:Phoenix Islands Protected Area", "Category:Battle of Tarawa",
        "Category:Operation Grapple", "Category:Nikumaroro", "Category:Caroline Island", "Category:Canton Island Airport",
        "Category:International Date Line"]
d = api({"action": "query", "prop": "categoryinfo", "titles": "|".join(cats), "format": "json"})
for p in sorted(d["query"]["pages"].values(), key=lambda x: x.get("title", "")):
    print(p.get("title"), p.get("categoryinfo"), "missing" if "missing" in p else "")
time.sleep(1.5)
for q in ["Kiritimati ISS", "Tarawa atoll ISS astronaut photograph", "Kanton Island aerial", "Canton Island 1940s airfield", "Banaba phosphate mining",
          "Christmas Island Grapple test", "Kiribati map date line", "Phoenix Islands Protected Area reef"]:
    d = api({"action": "query", "list": "search", "srsearch": q, "srnamespace": 6, "srlimit": 10, "format": "json"})
    tot = d["query"].get("searchinfo", {}).get("totalhits")
    print(f"busca '{q}': {tot} arquivos; primeiros: {[s['title'] for s in d['query']['search'][:6]]}")
    time.sleep(1.5)
