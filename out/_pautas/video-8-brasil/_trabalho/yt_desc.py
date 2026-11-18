# Le a descricao longa de paginas /watch do YouTube (permitidas pelo robots.txt), um pedido por vez.
# Uso: python -X utf8 -B yt_desc.py <id> [<id> ...]
import sys, re, json, time, urllib.request

def desc(vid):
    url = "https://www.youtube.com/watch?v=" + vid
    req = urllib.request.Request(url, headers={"Accept-Language": "en-US,en;q=0.8"})
    with urllib.request.urlopen(req, timeout=30) as r:
        html = r.read().decode("utf-8", "replace")
    m = re.search(r'ytInitialPlayerResponse\s*=\s*(\{.+?\});(?:var|</script>)', html, re.S)
    if not m:
        return {"id": vid, "erro": "sem ytInitialPlayerResponse"}
    pr = json.loads(m.group(1))
    vd = pr.get("videoDetails", {})
    mf = pr.get("microformat", {}).get("playerMicroformatRenderer", {})
    return {"id": vid, "titulo": vd.get("title"), "canal": vd.get("author"), "views": vd.get("viewCount"),
            "publicado": (mf.get("publishDate") or "")[:10],
            "desc": (vd.get("shortDescription") or "")[:1500].replace("\n", " ")}

for vid in sys.argv[1:]:
    try:
        print(json.dumps(desc(vid), ensure_ascii=False))
    except Exception as e:
        print(json.dumps({"id": vid, "erro": str(e)}))
    time.sleep(1.5)
