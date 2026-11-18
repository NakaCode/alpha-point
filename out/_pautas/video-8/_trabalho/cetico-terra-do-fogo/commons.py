# Terra do Fogo (cético, 18/11/2026): quantos arquivos o Wikimedia Commons tem nas categorias do assunto.
# API do MediaWiki, um pedido por vez (pausa de 1,5 s), User-Agent do canal. Uso: python -X utf8 -B commons.py
import json, time, urllib.request, urllib.parse, os

UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
CATS = [
    "Primera Angostura", "Strait of Magellan", "Ferries in the Strait of Magellan", "Paso San Sebastián",
    "Paso Integración Austral", "Argentina–Chile border", "Boundary markers of the Argentina–Chile border",
    "Isla Grande de Tierra del Fuego", "Ushuaia", "Porvenir (Chile)", "Río Grande, Tierra del Fuego", "Beagle Channel",
    "Beagle conflict", "Boundary Treaty of 1881 between Chile and Argentina", "Treaty of Peace and Friendship of 1984 between Chile and Argentina",
    "Cabo del Espíritu Santo", "Puerto Williams", "Landsat images of Tierra del Fuego", "Tierra del Fuego Province, Chile",
]
out = []
for c in CATS:
    q = {"action": "query", "format": "json", "prop": "categoryinfo", "titles": "Category:" + c}
    req = urllib.request.Request("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(q), headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            d = json.load(r)
        pg = next(iter(d["query"]["pages"].values()))
        ci = pg.get("categoryinfo")
        linha = "%s | %s" % (c, ("arquivos %d, subcategorias %d" % (ci.get("files", 0), ci.get("subcats", 0))) if ci else "(não existe)")
    except Exception as e:
        linha = "%s | erro %s" % (c, e)
    print(linha); out.append(linha)
    time.sleep(1.5)
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "commons-saida.txt"), "w", encoding="utf-8").write("\n".join(out) + "\n")
