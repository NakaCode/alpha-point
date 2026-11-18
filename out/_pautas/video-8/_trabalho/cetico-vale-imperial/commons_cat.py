# Conta arquivos em categorias do Wikimedia Commons pela API do MediaWiki (a porta que a Wikimedia abre a programas),
# um pedido por vez, com o User-Agent do canal. Uso: python -X utf8 -B commons_cat.py "Category:X" ["Category:Y" ...]
import sys, json, time, urllib.request, urllib.parse
UA = "regie/0.1 (canal alpha-point; pesquisa geografica para video; contato.naka@hotmail.com)"
for cat in sys.argv[1:]:
    q = urllib.parse.urlencode({"action": "query", "list": "categorymembers", "cmtitle": cat, "cmtype": "file|subcat",
                                "cmlimit": "100", "format": "json"})
    url = "https://commons.wikimedia.org/w/api.php?" + q
    d = json.loads(urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60).read())
    m = d.get("query", {}).get("categorymembers", [])
    arqs = [x["title"] for x in m if x["ns"] == 6]
    subs = [x["title"] for x in m if x["ns"] == 14]
    print(f"{cat}: {len(arqs)} arquivos (primeiros 100), {len(subs)} subcategorias; continua: {'continue' in d}")
    for t in arqs[:12]:
        print("   ", t)
    print("    subcats:", subs[:15])
    time.sleep(1.5)
