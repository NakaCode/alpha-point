# Le um JSON salvo do vidiq_youtube_search e imprime uma linha curta por video (data | views | canal | titulo | duracao).
# Uso: python -X utf8 -B vidiq_ler.py <arquivo.json> [--todos]
import sys, json, re

def dur(s):
    if not s:
        return "?"
    m = re.match(r"P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?", s)
    if not m:
        return s
    d, h, mi, se = (int(x or 0) for x in m.groups())
    t = d * 86400 + h * 3600 + mi * 60 + se
    return f"{t // 60}:{t % 60:02d}"

d = json.load(open(sys.argv[1], encoding="utf-8"))
print("creditos:", d.get("_credits"))
res = d.get("results", [])
print("resultados:", len(res))
if res:
    print("chaves:", sorted(res[0].keys()))
for r in res:
    st = r.get("statistics") or {}
    cd = r.get("contentDetails") or {}
    sn = r.get("snippet") or {}
    views = r.get("viewCount") or st.get("viewCount") or r.get("views")
    pub = (r.get("publishedAt") or sn.get("publishedAt") or "?")[:10]
    canal = r.get("channelTitle") or sn.get("channelTitle") or r.get("channelName")
    t = r.get("title") or sn.get("title")
    du = dur(r.get("duration") or cd.get("duration"))
    print(f"{pub} | {views} | {canal} ({r.get('subscriberCount')}) | {t} | {du} | {r.get('id')}")
