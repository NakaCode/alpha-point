# Conta os arquivos das categorias de Hector e das ilhas Tiwi no Wikimedia Commons e lista licencas de arquivos-chave
# (API do MediaWiki, um pedido por vez, User-Agent do canal). Uso: python -I -X utf8 -B commons.py
import json, time, urllib.request, urllib.parse
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))
cats = ["Category:Hector (cloud)", "Category:Tiwi Islands", "Category:Melville Island (Australia)", "Category:Bathurst Island (Australia)",
        "Category:Apsley Strait", "Category:Morning Glory clouds", "Category:Darwin, Northern Territory", "Category:Cumulonimbus clouds in Australia",
        "Category:Satellite pictures of the Northern Territory", "Category:Thunderstorms in Australia", "Category:Bombing of Darwin"]
d = api({"action": "query", "prop": "categoryinfo", "titles": "|".join(cats), "format": "json"})
for p in d["query"]["pages"].values():
    print(p.get("title"), p.get("categoryinfo"), "missing" if "missing" in p else "")
time.sleep(1.5)
for c in ["Category:Hector (cloud)", "Category:Tiwi Islands"]:
    d = api({"action": "query", "list": "categorymembers", "cmtitle": c, "cmlimit": 60, "format": "json"})
    print(c, "membros:", [m["title"] for m in d["query"]["categorymembers"]])
    time.sleep(1.5)
for q in ["Hector cloud Tiwi", "Tiwi Islands Landsat", "Tiwi Islands MODIS", "Melville Island Australia satellite", "Morning Glory cloud Burketown"]:
    d = api({"action": "query", "list": "search", "srsearch": q, "srnamespace": 6, "srlimit": 10, "format": "json"})
    tot = d["query"].get("searchinfo", {}).get("totalhits")
    print(f"busca '{q}': {tot} arquivos; primeiros: {[s['title'] for s in d['query']['search'][:8]]}")
    time.sleep(1.5)
arqs = ["File:HectorCloud.jpg", "File:Hector cloud from Gunn Point.jpg"]
d = api({"action": "query", "prop": "imageinfo", "titles": "|".join(arqs), "iiprop": "extmetadata|size|url", "format": "json"})
for p in d["query"]["pages"].values():
    ii = (p.get("imageinfo") or [{}])[0]; em = ii.get("extmetadata", {})
    print(p.get("title"), ii.get("width"), "x", ii.get("height"), "|", em.get("LicenseShortName", {}).get("value"), "|", em.get("Artist", {}).get("value", "")[:120], "|", em.get("DateTimeOriginal", {}).get("value", "")[:40])
