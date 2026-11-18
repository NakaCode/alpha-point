# Lista os titulos da pagina /videos de um canal do YouTube (permitida pelo robots.txt), um pedido. Uso: python -X utf8 -B yt_canal.py <@handle>
import sys, re, json, urllib.request

h = sys.argv[1]
url = f"https://www.youtube.com/{h}/videos"
req = urllib.request.Request(url, headers={"Accept-Language": "en-US,en;q=0.8"})
with urllib.request.urlopen(req, timeout=30) as r:
    html = r.read().decode("utf-8", "replace")
m = re.search(r"var ytInitialData\s*=\s*(\{.+?\});</script>", html, re.S)
if not m:
    print("sem ytInitialData"); sys.exit(0)
d = json.loads(m.group(1))
out = []
def anda(x):
    if isinstance(x, dict):
        if "videoId" in x and "title" in x and isinstance(x["title"], dict):
            t = x["title"].get("runs", [{}])[0].get("text") or x["title"].get("simpleText")
            v = (x.get("viewCountText") or {}).get("simpleText", "")
            p = (x.get("publishedTimeText") or {}).get("simpleText", "")
            out.append((x["videoId"], t, v, p))
        if "lockupViewModel" in x:
            lv = x["lockupViewModel"]
            md = lv.get("metadata", {}).get("lockupMetadataViewModel", {})
            t = md.get("title", {}).get("content", "")
            linhas = md.get("metadata", {}).get("contentMetadataViewModel", {}).get("metadataRows", [])
            partes = [p.get("text", {}).get("content", "") for r in linhas for p in r.get("metadataParts", [])]
            out.append((lv.get("contentId", ""), t, " | ".join(partes), ""))
        if "richItemRenderer" in x and "content" in x["richItemRenderer"]:
            c = x["richItemRenderer"]["content"]
            sv = c.get("shortsLockupViewModel")
            if sv:
                out.append((sv.get("entityId", ""), sv.get("overlayMetadata", {}).get("primaryText", {}).get("content", ""), "", "short"))
        for y in x.values():
            anda(y)
    elif isinstance(x, list):
        for y in x:
            anda(y)
anda(d)
vistos = set()
for vid, t, v, p in out:
    if vid in vistos:
        continue
    vistos.add(vid)
    print(f"{vid}\t{p}\t{v}\t{t}")
