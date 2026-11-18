# Conta os arquivos das categorias do Darien no Wikimedia Commons e faz buscas de arquivo
# (API do MediaWiki, um pedido por vez, User-Agent do canal). Uso: python -I -X utf8 -B commons.py
import json, time, urllib.request, urllib.parse
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))
cats = ["Category:Darién Gap", "Category:Darién National Park", "Category:Darién Province", "Category:Los Katíos National Park",
        "Category:Atrato River", "Category:Yaviza", "Category:Serranía del Darién", "Category:Migrants in the Darién Gap",
        "Category:Gulf of Urabá", "Category:Satellite pictures of Panama", "Category:Pan-American Highway in Panama",
        "Category:Darién scheme", "Category:Cerro Tacarcuna"]
d = api({"action": "query", "prop": "categoryinfo", "titles": "|".join(cats), "format": "json"})
for p in d["query"]["pages"].values():
    print(p.get("title"), p.get("categoryinfo"), "missing" if "missing" in p else "")
time.sleep(1.5)
for c in ["Category:Darién Gap"]:
    d = api({"action": "query", "list": "categorymembers", "cmtitle": c, "cmlimit": 80, "format": "json"})
    print(c, "membros:", [m["title"] for m in d["query"]["categorymembers"]])
    time.sleep(1.5)
for q in ["Darien Gap migrants", "Darién jungle migrants Panama", "Darien Gap Landsat", "Darien Panama satellite NASA", "Yaviza Pan-American Highway",
          "Atrato swamp", "Darien National Park"]:
    d = api({"action": "query", "list": "search", "srsearch": q, "srnamespace": 6, "srlimit": 10, "format": "json"})
    tot = d["query"].get("searchinfo", {}).get("totalhits")
    print(f"busca '{q}': {tot} arquivos; primeiros: {[s['title'] for s in d['query']['search'][:8]]}")
    time.sleep(1.5)
