"""Download grande em fluxo, com retomada por Range, um pedido por vez, User-Agent do canal (pesquisa-geo, vídeo 4).
Mesmo log e mesma espera do geo_http.py. uso: python -X utf8 -B -P geo_baixar.py <url> <saida>
Se <saida>.parcial existe, pede só o resto (Range). Recusa (403/405/418/429): sai 3. Sem resposta: sai 4 (o .parcial fica)."""
import sys, time, os, urllib.request, urllib.error, datetime, hashlib
UA = "regie/0.1 (canal alpha-point; pesquisa geografica para video; contato.naka@hotmail.com)"
AQUI = os.path.dirname(os.path.abspath(__file__))
T = os.path.join(AQUI, "..", "_tmp", "pesquisa-geo")
CAR, LOG = os.path.join(T, ".ultimo-http"), os.path.join(T, "http-pedidos.log")
def log(url, res):
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(datetime.datetime.now().astimezone().isoformat(timespec="seconds") + "\t" + url + "\t" + res + "\n")
url, saida = sys.argv[1], sys.argv[2]
parcial = saida + ".parcial"
ja = os.path.getsize(parcial) if os.path.exists(parcial) else 0
try:
    dt = time.time() - os.path.getmtime(CAR)
    if dt < 2: time.sleep(2 - dt)
except OSError: pass
hdr = {"User-Agent": UA}
if ja: hdr["Range"] = f"bytes={ja}-"
req = urllib.request.Request(url, headers=hdr)
try:
    r = urllib.request.urlopen(req, timeout=120)
except urllib.error.HTTPError as e:
    open(CAR, "w").close(); log(url, f"HTTP {e.code} (Range {ja})"); print("RECUSA/ERRO HTTP", e.code); sys.exit(3)
except Exception as e:
    open(CAR, "w").close(); log(url, f"sem resposta: {e!r}"); print("sem resposta", repr(e)); sys.exit(4)
code = r.status
if ja and code != 206:
    print("o servidor não aceitou Range; recomeço do zero"); ja = 0
modo = "ab" if ja else "wb"
n = 0
try:
    with open(parcial, modo) as f:
        while True:
            b = r.read(1 << 20)
            if not b: break
            f.write(b); n += len(b)
except Exception as e:
    open(CAR, "w").close(); log(url, f"HTTP {code}, cortado depois de {ja + n} bytes: {e!r}"); print("cortado", ja + n, repr(e)); sys.exit(4)
open(CAR, "w").close()
tot = ja + n
esperado = r.headers.get("Content-Range", "").split("/")[-1] if code == 206 else r.headers.get("Content-Length")
if esperado and esperado.isdigit() and int(esperado) != tot:
    log(url, f"HTTP {code}, incompleto {tot}/{esperado}"); print("incompleto", tot, esperado); sys.exit(4)
os.replace(parcial, saida)
h = hashlib.sha256(open(saida, "rb").read()).hexdigest()
log(url, f"HTTP {code}, {tot} bytes (Range desde {ja}), sha256 {h[:16]}")
print(code, tot, h)
