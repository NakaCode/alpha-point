# Baixa uma URL para fontes/<nome>, com o User-Agent do canal, um pedido por vez.
# Recusa (403, captcha) nao se contorna: o script so registra o status.
# Uso: python -X utf8 -B baixar.py <url> <nome>
import sys, os, urllib.request, urllib.error
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
url, nome = sys.argv[1], sys.argv[2]
pasta = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fontes")
os.makedirs(pasta, exist_ok=True)
destino = os.path.join(pasta, nome)
try:
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        dados = r.read()
        print("status", r.status, "| tipo", r.headers.get("Content-Type"), "| bytes", len(dados), "| final", r.geturl())
    with open(destino, "wb") as f:
        f.write(dados)
    print("gravado:", destino)
except urllib.error.HTTPError as e:
    print("HTTPError", e.code, e.reason)
except Exception as e:
    print("erro", type(e).__name__, e)
