# Le so o cabecalho e o tamanho de um CSV remoto do ONRR (os primeiros 600 bytes, por Range), sem baixar tudo.
# Uso: python -X utf8 -B prod_head.py <url>
import sys, urllib.request
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)", "Range": "bytes=0-600"}
try:
    with urllib.request.urlopen(urllib.request.Request(sys.argv[1], headers=UA), timeout=60) as r:
        print("status", r.status, "| tamanho", r.headers.get("Content-Range") or r.headers.get("Content-Length"))
        print(r.read(600).decode("utf-8", "replace"))
except Exception as e:
    print("erro", e)
