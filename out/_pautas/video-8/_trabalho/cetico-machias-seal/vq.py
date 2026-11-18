# Le um JSON do vidIQ (youtube_search) e imprime uma linha por video.
# Uso: python -X utf8 -B vq.py <arquivo.json>
import json, sys, re
d = json.load(open(sys.argv[1], encoding="utf-8"))
def dur(s):
    m = re.match(r"PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?", s or "")
    if not m: return s
    h, mi, se = (int(x) if x else 0 for x in m.groups())
    return f"{h*60+mi}:{se:02d}"
for r in d["results"]:
    print("\t".join(str(x) for x in [r["publishedAt"][:10], dur(r.get("duration")), r.get("viewCount"), r.get("subscriberCount"), r["channelTitle"], r["title"][:95], r["id"]]))
print("creditos:", d.get("_credits"))
