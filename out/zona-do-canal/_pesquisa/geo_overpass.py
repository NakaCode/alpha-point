"""Consulta Overpass (OSM ou OpenHistoricalMap) com o User-Agent do canal, um pedido por vez, >=1,5 s entre pedidos.
uso: python geo_overpass.py <osm|ohm> <saida.json> "<consulta overpass QL>"
Recusa (403/429/504/captcha): para e sai 3, sem repetir."""
import sys, time, json, urllib.request, urllib.parse, os, hashlib, datetime
UA = "regie/0.1 (canal alpha-point; pesquisa geografica para video; contato.naka@hotmail.com)"
URL = {"osm": "https://overpass-api.de/api/interpreter",
       "ohm": "https://overpass-api.openhistoricalmap.org/api/interpreter"}
CARIMBO = os.path.join(os.path.dirname(__file__), "..", "_tmp", "pesquisa-geo", ".ultimo-pedido")
def main():
    alvo, saida, q = sys.argv[1], sys.argv[2], sys.argv[3]
    try:
        dt = time.time() - os.path.getmtime(CARIMBO)
        if dt < 1.5: time.sleep(1.5 - dt)
    except OSError: pass
    data = urllib.parse.urlencode({"data": q}).encode()
    req = urllib.request.Request(URL[alvo], data=data, headers={"User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded"})
    try:
        with urllib.request.urlopen(req, timeout=180) as r:
            b = r.read(); code = r.status
    except urllib.error.HTTPError as e:
        open(CARIMBO, "w").close()
        print(f"RECUSA/ERRO HTTP {e.code} em {URL[alvo]}: pare e registre"); sys.exit(3)
    open(CARIMBO, "w").close()
    if b[:1] != b"{":
        print("resposta não-JSON (possível verificação):", b[:300]); sys.exit(3)
    open(saida, "wb").write(b)
    j = json.loads(b)
    meta = {"servico": URL[alvo], "consulta": q, "baixado_em": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
            "sha256": hashlib.sha256(b).hexdigest(), "bytes": len(b), "osm3s": j.get("osm3s")}
    json.dump(meta, open(saida + ".meta.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(code, len(b), "bytes;", len(j.get("elements", [])), "elementos")
main()
