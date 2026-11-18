# Conta os arquivos das categorias do vento de Wellington e do estreito de Cook no Wikimedia Commons
# (API do MediaWiki, um pedido por vez, User-Agent do canal).
# Uso: python -X utf8 -B commons.py
import json, time, urllib.request, urllib.parse
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))

cats = ["Category:Cook Strait", "Category:Wellington Harbour", "Category:TEV Wahine", "Category:Wahine disaster",
        "Category:Wind in New Zealand", "Category:Slope Point", "Category:Wellington International Airport",
        "Category:Satellite pictures of New Zealand", "Category:Hawkins Hill", "Category:West Wind Wind Farm",
        "Category:Brooklyn Wind Turbine", "Category:Southern Alps", "Category:Wellington (city)",
        "Category:Te Ara - The Encyclopedia of New Zealand", "Category:Archives New Zealand"]
d = api({"action": "query", "prop": "categoryinfo", "titles": "|".join(cats), "format": "json"})
for p in d["query"]["pages"].values():
    print(p.get("title"), p.get("categoryinfo"), "missing" if "missing" in p else "")
time.sleep(1.5)
for c in ["Category:Wind in New Zealand", "Category:Cook Strait"]:
    d = api({"action": "query", "list": "categorymembers", "cmtitle": c, "cmtype": "subcat", "cmlimit": 50, "format": "json"})
    print(c, "subcats:", [m["title"] for m in d["query"]["categorymembers"]])
    time.sleep(1.5)
# busca de arquivos (namespace 6) com as palavras
for q in ["Wahine 1968 Wellington", "Cook Strait MODIS", "Cook Strait Landsat", "Slope Point trees", "Wellington wind"]:
    d = api({"action": "query", "list": "search", "srsearch": q, "srnamespace": 6, "srlimit": 10, "format": "json"})
    tot = d["query"].get("searchinfo", {}).get("totalhits")
    print(f"busca '{q}': {tot} arquivos; primeiros: {[s['title'] for s in d['query']['search'][:6]]}")
    time.sleep(1.5)
