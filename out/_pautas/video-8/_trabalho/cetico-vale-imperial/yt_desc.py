# Le a descricao inteira de videos na pagina publica /watch (o robots.txt do YouTube nao a veta), um pedido por vez.
# Uso: python -X utf8 -B yt_desc.py <id> [<id> ...]
import sys, re, json, time, urllib.request
for vid in sys.argv[1:]:
    req = urllib.request.Request("https://www.youtube.com/watch?v=" + vid, headers={"Accept-Language": "en-US,en;q=0.8"})
    html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")
    m = re.search(r'ytInitialPlayerResponse\s*=\s*(\{.+?\});(?:var|</script>)', html, re.S)
    vd = json.loads(m.group(1)).get("videoDetails", {}) if m else {}
    print("=====", vid, "|", vd.get("title"), "|", vd.get("viewCount"))
    print(vd.get("shortDescription", "")[:2500])
    print()
    time.sleep(1.5)
