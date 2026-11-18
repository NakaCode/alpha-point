# Le uma resposta salva do vidiq_youtube_search (JSON) e imprime uma linha por video:
# id, data, duracao, views, inscritos, canal, titulo. Uso: python -X utf8 -B vq.py <arquivo.json> [rotulo]
import json, sys, re
def dur(s):
    m = re.match(r'PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?', s or '')
    if not m: return s
    h, mi, se = (int(x) if x else 0 for x in m.groups())
    t = h*3600+mi*60+se
    return f"{t//60}:{t%60:02d}"
raw = open(sys.argv[1], encoding="utf-8").read()
try:
    d = json.loads(raw)
except Exception:
    i = raw.find('{'); d = json.loads(raw[i:])
rot = sys.argv[2] if len(sys.argv) > 2 else ''
for r in d.get("results", []):
    print("\t".join(str(x) for x in [rot, r.get("id"), (r.get("publishedAt") or "")[:10], dur(r.get("duration")), r.get("viewCount"), r.get("subscriberCount"), r.get("channelTitle"), (r.get("title") or "").replace("\t"," ")]))
print(f"# creditos: {d.get('_credits')}", file=sys.stderr)
