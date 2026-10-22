"""GET com o User-Agent do canal, um pedido por vez, >=1,5 s entre pedidos; log em _tmp/pesquisa-geo/http-pedidos.log.
uso: python geo_http.py <url> <saida>     Recusa (403/418/429/anti-robô): sai 3, sem repetir."""
import sys, time, os, urllib.request, urllib.error, datetime, hashlib
UA = "regie/0.1 (canal alpha-point; pesquisa geografica para video; contato.naka@hotmail.com)"
AQUI = os.path.dirname(os.path.abspath(__file__))
T = os.path.join(AQUI, "..", "_tmp", "pesquisa-geo")
CAR, LOG = os.path.join(T, ".ultimo-http"), os.path.join(T, "http-pedidos.log")
def log(url, res):
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(datetime.datetime.now().astimezone().isoformat(timespec="seconds") + "\t" + url + "\t" + res + "\n")
url, saida = sys.argv[1], sys.argv[2]
espera = float(os.environ.get("ESPERA_S", "1.5"))
try:
    dt = time.time() - os.path.getmtime(CAR)
    if dt < espera: time.sleep(espera - dt)
except OSError: pass
req = urllib.request.Request(url, headers={"User-Agent": UA})
try:
    with urllib.request.urlopen(req, timeout=float(os.environ.get("TIMEOUT_S", "120"))) as r:
        b = r.read(); code = r.status; ct = r.headers.get("Content-Type", "")
except urllib.error.HTTPError as e:
    open(CAR, "w").close(); log(url, f"HTTP {e.code}"); print(f"RECUSA/ERRO HTTP {e.code}"); sys.exit(3)
except Exception as e:
    open(CAR, "w").close(); log(url, f"sem resposta: {e!r}"); print("sem resposta", repr(e)); sys.exit(4)
open(CAR, "w").close()
low = b[:4000].lower()
if b"captcha" in low or b"just a moment" in low or b"access denied" in low or b"acceso restringido" in low:
    log(url, f"HTTP {code} ANTI-ROBO?"); print("página anti-robô? parei"); open(saida + ".recusa.html", "wb").write(b); sys.exit(3)
open(saida, "wb").write(b)
log(url, f"HTTP {code}, {len(b)} bytes, {ct}, sha256 {hashlib.sha256(b).hexdigest()[:16]}")
print(code, len(b), ct)
