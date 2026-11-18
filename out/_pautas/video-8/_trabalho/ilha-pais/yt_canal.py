# Le a pagina /@<handle>/videos de um canal do YouTube (permitida pelo robots.txt; /youtubei/ e /feeds/ nao) e lista
# os videos da primeira carga (id | ha quanto tempo | views | titulo | duracao). Um pedido so.
# Uso: python -X utf8 -B yt_canal.py <handle-sem-@>
import sys, re, json, urllib.request

h = sys.argv[1]
url = "https://www.youtube.com/@" + h + "/videos"
req = urllib.request.Request(url, headers={"Accept-Language": "en-US,en;q=0.8"})
with urllib.request.urlopen(req, timeout=30) as r:
    html = r.read().decode("utf-8", "replace")
m = re.search(r'var ytInitialData\s*=\s*(\{.+?\});</script>', html, re.S)
if not m:
    print("sem ytInitialData"); sys.exit(1)
d = json.loads(m.group(1))

def walk(o):
    if isinstance(o, dict):
        if "lockupViewModel" in o:
            yield o["lockupViewModel"]
        for v in o.values():
            yield from walk(v)
    elif isinstance(o, list):
        for v in o:
            yield from walk(v)

def textos(o, acc):
    if isinstance(o, dict):
        if "content" in o and isinstance(o["content"], str):
            acc.append(o["content"])
        for v in o.values():
            textos(v, acc)
    elif isinstance(o, list):
        for v in o:
            textos(v, acc)
    return acc

for v in walk(d):
    vid = v.get("contentId")
    md = v.get("metadata", {}).get("lockupMetadataViewModel", {})
    titulo = md.get("title", {}).get("content", "")
    linhas = textos(md.get("metadata", {}), [])
    dur = ""
    s = json.dumps(v.get("contentImage", {}))
    mm = re.search(r'"thumbnailBadgeViewModel": \{"text": "([^"]+)"', s)
    if mm:
        dur = mm.group(1)
    print(vid, "|", " / ".join(linhas), "|", titulo, "|", dur)
