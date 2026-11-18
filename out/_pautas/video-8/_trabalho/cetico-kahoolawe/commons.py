# Conta os arquivos das categorias de Kaho'olawe no Wikimedia Commons (API, um pedido por vez, User-Agent do canal).
# Uso: python -X utf8 -B commons.py
import json, time, urllib.request, urllib.parse
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))
cats = ["Category:Kahoʻolawe", "Category:Kahoolawe", "Category:Operation Sailor Hat", "Category:Protect Kahoʻolawe ʻOhana"]
d = api({"action": "query", "prop": "categoryinfo", "titles": "|".join(cats), "format": "json"})
for p in d["query"]["pages"].values():
    print(p.get("title"), p.get("categoryinfo"), "missing" if "missing" in p else "")
time.sleep(1.5)
d = api({"action": "query", "list": "categorymembers", "cmtitle": "Category:Kahoolawe", "cmtype": "subcat", "cmlimit": 50, "format": "json"})
for m in d["query"]["categorymembers"]:
    print("  subcat:", m["title"])
