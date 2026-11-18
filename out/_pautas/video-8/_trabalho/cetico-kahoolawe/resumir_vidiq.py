# Resume uma resposta do vidiq_youtube_search (JSON salvo) em linhas TSV.
# Uso: python -X utf8 -B resumir_vidiq.py <arquivo.json> [rotulo]
import sys, json
arq = sys.argv[1]
rot = sys.argv[2] if len(sys.argv) > 2 else ""
d = json.load(open(arq, encoding="utf-8"))
if isinstance(d, list):
    d = d[0]
if "text" in d and isinstance(d.get("text"), str):
    d = json.loads(d["text"])
for r in d.get("results", []):
    print("\t".join(str(x) for x in [rot, r.get("id"), r.get("title"), r.get("channelTitle"),
          r.get("subscriberCount"), r.get("viewCount"), (r.get("publishedAt") or "")[:10],
          r.get("duration"), r.get("outlierScore")]))
print("creditos", d.get("_credits"), file=sys.stderr)
