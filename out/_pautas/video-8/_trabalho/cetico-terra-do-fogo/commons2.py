# Terra do Fogo (cético, 18/11/2026): busca de categorias e arquivos no Commons (API, um pedido por vez, User-Agent do canal).
# Uso: python -X utf8 -B commons2.py
import json, time, urllib.request, urllib.parse, os

UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
def api(q):
    q = dict(q, action="query", format="json")
    req = urllib.request.Request("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(q), headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        d = json.load(r)
    time.sleep(1.5)
    return d
out = []
def pr(s):
    print(s); out.append(s)
# subcategorias do estreito
d = api({"list": "categorymembers", "cmtitle": "Category:Strait of Magellan", "cmtype": "subcat", "cmlimit": 50})
pr("# subcategorias de Strait of Magellan: " + "; ".join(m["title"].replace("Category:", "") for m in d["query"]["categorymembers"]))
for termo, ns in [("Primera Angostura", 14), ("Primera Angostura ferry", 6), ("San Sebastián border Tierra del Fuego", 6), ("Hito Tierra del Fuego frontera", 6),
                  ("Tierra del Fuego Landsat", 6), ("Isla Grande de Tierra del Fuego", 14), ("Argentina Chile border", 14), ("Laudo arbitral Beagle 1977", 6)]:
    d = api({"list": "search", "srsearch": termo, "srnamespace": ns, "srlimit": 10})
    hits = d["query"]["search"]
    pr("# '%s' (ns %d): %d resultados no total; primeiros: %s" % (termo, ns, d["query"].get("searchinfo", {}).get("totalhits", -1), "; ".join(h["title"] for h in hits[:8])))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "commons2-saida.txt"), "w", encoding="utf-8").write("\n".join(out) + "\n")
