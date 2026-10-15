"""API do MediaWiki do Commons, com o User-Agent do canal, um pedido por vez, >=1,5 s entre pedidos.
uso: python geo_commons.py '<querystring sem format>'  -> imprime JSON"""
import sys, time, json, urllib.request, os
UA = "regie/0.1 (canal alpha-point; pesquisa geografica para video; contato.naka@hotmail.com)"
CARIMBO = os.path.join(os.path.dirname(__file__), "..", "_tmp", "pesquisa-geo", ".ultimo-commons")
try:
    dt = time.time() - os.path.getmtime(CARIMBO)
    if dt < 1.5: time.sleep(1.5 - dt)
except OSError: pass
url = "https://commons.wikimedia.org/w/api.php?format=json&formatversion=2&" + sys.argv[1]
req = urllib.request.Request(url, headers={"User-Agent": UA})
try:
    b = urllib.request.urlopen(req, timeout=60).read()
except urllib.error.HTTPError as e:
    print("RECUSA HTTP", e.code); open(CARIMBO,"w").close(); sys.exit(3)
open(CARIMBO, "w").close()
print(json.dumps(json.loads(b), ensure_ascii=False, indent=1))
