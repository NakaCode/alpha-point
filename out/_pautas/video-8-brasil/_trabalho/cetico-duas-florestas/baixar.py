# Baixa arquivos publicos do geoftp do IBGE (um pedido por vez, User-Agent do canal) para midia/ (fora do git) e grava o sha256.
# Uso: python -X utf8 -B baixar.py <url> [<url> ...]
import sys, os, time, hashlib, urllib.request

UA = "AlphaPointResearch/1.0 (contato.naka@hotmail.com)"
AQUI = os.path.dirname(os.path.abspath(__file__))
MID = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", "..", "midia", "_pautas", "video-8-brasil", "cetico-duas-florestas"))
os.makedirs(MID, exist_ok=True)
for url in sys.argv[1:]:
    nome = url.rstrip("/").split("/")[-1]
    destino = os.path.join(MID, nome)
    with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=300) as r:
        dados = r.read()
    with open(destino, "wb") as f:
        f.write(dados)
    h = hashlib.sha256(dados).hexdigest()
    linha = f"{time.strftime('%Y-%m-%d %H:%M')} | {url} | {len(dados)} bytes | sha256 {h}"
    print(linha)
    with open(os.path.join(AQUI, "baixados.txt"), "a", encoding="utf-8") as f:
        f.write(linha + "\n")
    time.sleep(2)
