# Lista os href de uma pagina de indice (um pedido, User-Agent do canal).
# Uso: python -X utf8 -B hrefs.py <url>
import sys, re, urllib.request
UA = "AlphaPointResearch/1.0 (contato.naka@hotmail.com)"
req = urllib.request.Request(sys.argv[1], headers={"User-Agent": UA})
html = urllib.request.urlopen(req, timeout=60).read().decode("utf-8", "replace")
for h in re.findall(r'href="([^"]+)"', html): print(h)
