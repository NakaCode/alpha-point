"""Um pedido HTTP por vez, com o User-Agent do canal e >= 2 s entre pedidos; log em _tmp/pesquisa-geo/http-pedidos.log.
Vídeo 4 (atlantico-fundo), pesquisa-geo (parte B). Mesma regra do geo_http.py do Peru (out/peru-agua/_pesquisa/).
uso: python -X utf8 -B -I geo_http.py <url> <saida> [--post=<arquivo.json>]
Recusa (403/405/418/429/anti-robô): sai 3, sem repetir. Sem resposta: sai 4."""
import sys, time, os, urllib.request, urllib.error, datetime, hashlib
UA = "regie/0.1 (canal alpha-point; pesquisa geografica para video; contato.naka@hotmail.com)"
AQUI = os.path.dirname(os.path.abspath(__file__))
T = os.path.join(AQUI, "..", "_tmp", "pesquisa-geo")
os.makedirs(T, exist_ok=True)
CAR, LOG = os.path.join(T, ".ultimo-http"), os.path.join(T, "http-pedidos.log")
def log(url, res):
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(datetime.datetime.now().astimezone().isoformat(timespec="seconds") + "\t" + url + "\t" + res + "\n")
args = [a for a in sys.argv[1:] if not a.startswith("--post=")]
post = next((a[7:] for a in sys.argv[1:] if a.startswith("--post=")), None)
url, saida = args[0], args[1]
espera = float(os.environ.get("ESPERA_S", "2"))
try:
    dt = time.time() - os.path.getmtime(CAR)
    if dt < espera: time.sleep(espera - dt)
except OSError: pass
hdr = {"User-Agent": UA}
data = None
if post:
    data = open(post, "rb").read(); hdr["Content-Type"] = "application/json"
req = urllib.request.Request(url, headers=hdr, data=data, method="POST" if post else "GET")
rot = ("POST " if post else "") + url
try:
    with urllib.request.urlopen(req, timeout=float(os.environ.get("TIMEOUT_S", "600"))) as r:
        b = r.read(); code = r.status; ct = r.headers.get("Content-Type", "")
except urllib.error.HTTPError as e:
    open(CAR, "w").close(); log(rot, f"HTTP {e.code}")
    try: corpo = e.read()[:2000].decode("utf-8", "replace")
    except Exception: corpo = ""
    print(f"RECUSA/ERRO HTTP {e.code}"); print(corpo[:800]); sys.exit(3)
except Exception as e:
    open(CAR, "w").close(); log(rot, f"sem resposta: {e!r}"); print("sem resposta", repr(e)); sys.exit(4)
open(CAR, "w").close()
low = b[:4000].lower()
if b"captcha" in low or b"just a moment" in low or b"access denied" in low or b"cf-chl" in low:
    log(rot, f"HTTP {code} ANTI-ROBO?"); print("página anti-robô? parei"); open(saida + ".recusa.html", "wb").write(b); sys.exit(3)
os.makedirs(os.path.dirname(os.path.abspath(saida)), exist_ok=True)
open(saida, "wb").write(b)
log(rot, f"HTTP {code}, {len(b)} bytes, {ct}, sha256 {hashlib.sha256(b).hexdigest()[:16]}")
print(code, len(b), ct)
