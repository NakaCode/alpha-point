# Le o dono de um video (/watch) e depois a aba /@<handle>/shorts (permitidas pelo robots.txt), um pedido por vez,
# e lista os curtos da primeira carga (id | views | titulo). Uso: python -X utf8 -B yt_shorts.py <video_id>
import sys, re, json, time, urllib.request

def get(url):
    req = urllib.request.Request(url, headers={"Accept-Language": "en-US,en;q=0.8"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", "replace")

vid = sys.argv[1]
html = get("https://www.youtube.com/watch?v=" + vid)
m = re.search(r'"ownerProfileUrl":"http://www\.youtube\.com/@([^"]+)"', html)
if not m:
    print("dono nao achado"); sys.exit(1)
h = m.group(1)
print("@" + h)
time.sleep(1.5)
html = get("https://www.youtube.com/@" + h + "/shorts")
m = re.search(r'var ytInitialData\s*=\s*(\{.+?\});</script>', html, re.S)
if not m:
    print("sem ytInitialData"); sys.exit(1)
d = json.loads(m.group(1))

def walk(o):
    if isinstance(o, dict):
        if "shortsLockupViewModel" in o:
            yield o["shortsLockupViewModel"]
        for v in o.values():
            yield from walk(v)
    elif isinstance(o, list):
        for v in o:
            yield from walk(v)

for s in walk(d):
    t = s.get("overlayMetadata", {})
    tit = t.get("primaryText", {}).get("content", "")
    vw = t.get("secondaryText", {}).get("content", "")
    sid = ""
    mm = re.search(r'"videoId": "([^"]+)"', json.dumps(s.get("onTap", {})))
    if mm:
        sid = mm.group(1)
    print(sid, "|", vw, "|", tit)
