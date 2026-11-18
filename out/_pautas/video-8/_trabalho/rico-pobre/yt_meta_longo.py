# Le metadados publicos de paginas /watch do YouTube (permitidas pelo robots.txt), um pedido por vez.
# Uso: python -X utf8 -B yt_meta.py <id> [<id> ...]
import sys, re, json, time, urllib.request

def meta(vid):
    url = "https://www.youtube.com/watch?v=" + vid
    req = urllib.request.Request(url, headers={"Accept-Language": "en-US,en;q=0.8"})
    with urllib.request.urlopen(req, timeout=30) as r:
        html = r.read().decode("utf-8", "replace")
    out = {"id": vid}
    m = re.search(r'ytInitialPlayerResponse\s*=\s*(\{.+?\});(?:var|</script>)', html, re.S)
    if m:
        try:
            pr = json.loads(m.group(1))
            vd = pr.get("videoDetails", {})
            mf = pr.get("microformat", {}).get("playerMicroformatRenderer", {})
            out.update({
                "titulo": vd.get("title"),
                "canal": vd.get("author"),
                "views": vd.get("viewCount"),
                "duracao_s": vd.get("lengthSeconds"),
                "publicado": mf.get("publishDate") or mf.get("uploadDate"),
                "desc": (vd.get("shortDescription") or "")[:1500].replace("\n", " "),
            })
        except Exception as e:
            out["erro"] = "json: " + str(e)
    else:
        out["erro"] = "sem ytInitialPlayerResponse"
    sm = re.search(r'"subscriberCountText":\{"accessibility":\{"accessibilityData":\{"label":"([^"]+)"', html)
    if sm:
        out["inscritos"] = sm.group(1)
    return out

for vid in sys.argv[1:]:
    try:
        print(json.dumps(meta(vid), ensure_ascii=False))
    except Exception as e:
        print(json.dumps({"id": vid, "erro": str(e)}))
    time.sleep(1.5)
