# Conta arquivos em categorias do Wikimedia Commons (API do MediaWiki, um pedido, User-Agent do canal).
import json, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
cats = ["Kaskaskia Island", "Kaskaskia, Illinois", "Kentucky Bend", "Mississippi River meanders", "Harold Fisk",
        "Maps by Harold N. Fisk", "Oxbow lakes of the Mississippi River", "Centennial Island", "Reverie, Tennessee",
        "Wolf Island (Kentucky)", "Davis Bend", "Mississippi River from the air", "Lower Mississippi River",
        "Old River Control Structure", "Lake Chicot"]
p = {"action": "query", "format": "json", "prop": "categoryinfo", "titles": "|".join("Category:" + c for c in cats)}
with urllib.request.urlopen(urllib.request.Request("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(p), headers=UA), timeout=60) as r:
    j = json.loads(r.read())
for pg in j["query"]["pages"].values():
    ci = pg.get("categoryinfo")
    print(pg["title"], "->", ("arquivos %d, subcategorias %d" % (ci.get("files", 0), ci.get("subcats", 0))) if ci else "não existe / vazia")
