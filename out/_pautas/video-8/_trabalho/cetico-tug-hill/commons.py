# Conta os arquivos das categorias de Tug Hill e da neve de lago no Wikimedia Commons
# (API do MediaWiki, um pedido por vez, User-Agent do canal).
# Uso: python -X utf8 -B commons.py
import json, time, urllib.request, urllib.parse
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))

cats = ["Category:Tug Hill", "Category:Tug Hill Plateau", "Category:Lake-effect snow", "Category:Lake effect snow",
        "Category:Lake Ontario", "Category:Redfield, New York", "Category:Montague, New York", "Category:Lowville, New York",
        "Category:Lewis County, New York", "Category:Fort Drum", "Category:Snow in New York (state)",
        "Category:Satellite pictures of Lake Ontario", "Category:Black River (New York)", "Category:Salmon River Reservoir"]
d = api({"action": "query", "prop": "categoryinfo", "titles": "|".join(cats), "format": "json"})
for p in d["query"]["pages"].values():
    print(p.get("title"), p.get("categoryinfo"), "missing" if "missing" in p else "")
time.sleep(1.5)
for c in ["Category:Lake-effect snow", "Category:Tug Hill"]:
    try:
        d = api({"action": "query", "list": "categorymembers", "cmtitle": c, "cmtype": "subcat|file", "cmlimit": 50, "format": "json"})
        print(c, "membros:", [m["title"] for m in d["query"]["categorymembers"]][:40])
    except Exception as e:
        print(c, "ERRO", e)
    time.sleep(1.5)
for q in ["lake effect snow Lake Ontario MODIS", "lake-effect snow Tug Hill", "Tug Hill snow", "lake effect snow bands NASA",
          "Montague New York snow 1997", "Redfield New York snow"]:
    d = api({"action": "query", "list": "search", "srsearch": q, "srnamespace": 6, "srlimit": 10, "format": "json"})
    tot = d["query"].get("searchinfo", {}).get("totalhits")
    print(f"busca '{q}': {tot} arquivos; primeiros: {[s['title'] for s in d['query']['search'][:8]]}")
    time.sleep(1.5)
