# Baixa uma URL (um pedido, User-Agent do canal) para um arquivo. Uso: python -X utf8 -B baixar.py <url> <saida>
import sys, urllib.request
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
url, saida = sys.argv[1], sys.argv[2]
req = urllib.request.Request(url, headers=UA)
try:
    with urllib.request.urlopen(req, timeout=60) as r:
        dados = r.read()
        print("HTTP", r.status, r.headers.get("Content-Type"), len(dados), "bytes")
    open(saida, "wb").write(dados)
except urllib.error.HTTPError as e:
    print("HTTP", e.code, e.reason)
except Exception as e:
    print("ERRO", type(e).__name__, e)
