"""Baixa a base da miniatura A do Peru: NASA Blue Marble Next Generation pela NASA GIBS (WMS oficial), um pedido por vez,
com o User-Agent do canal. Primeiro lê o robots.txt da GIBS; se ele vetar /wms/, para.
    python -X utf8 -B out/peru-agua/_tmp/miniatura/A/baixar-base-A.py robots
    python -X utf8 -B out/peru-agua/_tmp/miniatura/A/baixar-base-A.py base <camada> <xmin> <ymin> <xmax> <ymax> <w> <h> <saida.jpg>
(bbox em EPSG:3857, metros)."""
import sys, os, time, json, hashlib, urllib.request, urllib.parse
UA = "AlphaPoint-canal/1.0 (YouTube Alpha Point; contato.naka@hotmail.com)"
DIR = os.path.join(os.getcwd(), "out", "peru-agua", "_tmp", "miniatura", "A", "_base")
os.makedirs(DIR, exist_ok=True)

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.status, r.headers.get("Content-Type"), r.read()

if sys.argv[1] == "robots":
    st, ct, b = get("https://gibs.earthdata.nasa.gov/robots.txt")
    print(st, ct); print(b.decode("utf-8", "replace")[:2000])
elif sys.argv[1] == "base":
    camada, xmin, ymin, xmax, ymax, w, h, saida = sys.argv[2:10]
    q = {"SERVICE": "WMS", "REQUEST": "GetMap", "VERSION": "1.1.1", "LAYERS": camada, "STYLES": "", "SRS": "EPSG:3857",
         "BBOX": f"{xmin},{ymin},{xmax},{ymax}", "WIDTH": w, "HEIGHT": h, "FORMAT": "image/jpeg"}
    url = "https://gibs.earthdata.nasa.gov/wms/epsg3857/best/wms.cgi?" + urllib.parse.urlencode(q)
    st, ct, b = get(url)
    print(st, ct, len(b))
    if not (ct or "").startswith("image/"):
        print(b[:1500].decode("utf-8", "replace")); sys.exit(2)
    p = os.path.join(DIR, saida)
    open(p, "wb").write(b)
    reg = {"arquivo": p.replace("\\", "/"), "url": url, "camada": camada, "bytes": len(b), "sha256": hashlib.sha256(b).hexdigest(),
           "baixado_em": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "user_agent": UA}
    json.dump(reg, open(p + ".json", "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(json.dumps(reg, ensure_ascii=False))
