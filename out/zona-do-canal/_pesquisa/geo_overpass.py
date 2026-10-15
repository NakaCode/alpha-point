"""Consulta Overpass (OSM ou OpenHistoricalMap) com o User-Agent do canal, um pedido por vez, >=10 s entre pedidos
(2a rodada; na 1a eram 1,5 s e veio 429). ESPERA_S=<s> aumenta a espera.
uso: python geo_overpass.py <osm|ohm> <saida.json> "<consulta overpass QL>"
     python geo_overpass.py status          (GET /api/status do overpass-api.de)
Recusa (403/429/504/captcha): para e sai 3, sem repetir. Sem resposta (timeout): sai 4.
Cada pedido vai a _tmp/pesquisa-geo/overpass-pedidos.log."""
import sys, time, json, urllib.request, urllib.parse, os, hashlib, datetime
UA = "regie/0.1 (canal alpha-point; pesquisa geografica para video; contato.naka@hotmail.com)"
URL = {"osm": "https://overpass-api.de/api/interpreter",
       "ohm": "https://overpass-api.openhistoricalmap.org/api/interpreter"}
ESPERA = float(os.environ.get("ESPERA_S", "10"))
AQUI = os.path.dirname(os.path.abspath(__file__))
CARIMBO = os.path.join(AQUI, "..", "_tmp", "pesquisa-geo", ".ultimo-pedido")
LOG = os.path.join(AQUI, "..", "_tmp", "pesquisa-geo", "overpass-pedidos.log")
TAB, NL = chr(9), chr(10)


def log(alvo, saida, q, res):
    agora = datetime.datetime.now().astimezone().isoformat(timespec="seconds")
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(TAB.join([agora, alvo, os.path.basename(saida), res, q]) + NL)


def esperar():
    try:
        dt = time.time() - os.path.getmtime(CARIMBO)
        if dt < ESPERA:
            time.sleep(ESPERA - dt)
    except OSError:
        pass


def status():
    esperar()
    req = urllib.request.Request("https://overpass-api.de/api/status", headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            txt = r.read().decode("utf-8", "replace"); print(r.status); print(txt)
            log("osm", "status", "GET /api/status", f"HTTP {r.status}: " + txt.replace(NL, " | ")[:300])
    except urllib.error.HTTPError as e:
        log("osm", "status", "GET /api/status", f"HTTP {e.code}"); print(f"RECUSA/ERRO HTTP {e.code}"); sys.exit(3)
    except (TimeoutError, urllib.error.URLError, OSError) as e:
        log("osm", "status", "GET /api/status", f"sem resposta: {e!r}"); print("sem resposta", repr(e)); sys.exit(4)
    finally:
        open(CARIMBO, "w").close()


def main():
    if sys.argv[1] == "status":
        return status()
    alvo, saida, q = sys.argv[1], sys.argv[2], sys.argv[3]
    esperar()
    data = urllib.parse.urlencode({"data": q}).encode()
    req = urllib.request.Request(URL[alvo], data=data, headers={"User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded"})
    try:
        with urllib.request.urlopen(req, timeout=180) as r:
            b = r.read(); code = r.status
    except urllib.error.HTTPError as e:
        open(CARIMBO, "w").close(); log(alvo, saida, q, f"HTTP {e.code}")
        print(f"RECUSA/ERRO HTTP {e.code} em {URL[alvo]}: pare e registre"); sys.exit(3)
    except (TimeoutError, urllib.error.URLError, OSError) as e:
        open(CARIMBO, "w").close(); log(alvo, saida, q, f"sem resposta: {e!r}")
        print(f"SEM RESPOSTA de {URL[alvo]}: {e!r}"); sys.exit(4)
    open(CARIMBO, "w").close()
    log(alvo, saida, q, f"HTTP {code}, {len(b)} bytes")
    if b[:1] != b"{":
        print("resposta não-JSON (possível verificação):", b[:300]); sys.exit(3)
    open(saida, "wb").write(b)
    j = json.loads(b)
    meta = {"servico": URL[alvo], "consulta": q, "baixado_em": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
            "sha256": hashlib.sha256(b).hexdigest(), "bytes": len(b), "osm3s": j.get("osm3s"), "remark": j.get("remark")}
    json.dump(meta, open(saida + ".meta.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(code, len(b), "bytes;", len(j.get("elements", [])), "elementos", ("REMARK: " + j["remark"]) if j.get("remark") else "")


main()
