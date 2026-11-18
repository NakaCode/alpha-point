# Baixa um arquivo (um pedido, User-Agent do canal) para midia/_pautas/video-8-brasil/cetico-acre-ferrovia/ e mostra o sha256.
# Uso: python -X utf8 -B baixar.py <url> <nome>
import sys, os, hashlib, urllib.request
UA = "AlphaPointResearch/1.0 (contato.naka@hotmail.com)"
DEST = "C:/projetos/alpha-point/midia/_pautas/video-8-brasil/cetico-acre-ferrovia"
url, nome = sys.argv[1], sys.argv[2]
req = urllib.request.Request(url, headers={"User-Agent": UA})
with urllib.request.urlopen(req, timeout=180) as r:
    dados = r.read(); print("HTTP", r.status, r.headers.get("Content-Type"))
p = os.path.join(DEST, nome)
open(p, "wb").write(dados)
print(nome, len(dados), "bytes, sha256", hashlib.sha256(dados).hexdigest())
