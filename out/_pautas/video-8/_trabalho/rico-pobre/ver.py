# Imprime id, data, views, canal e a descricao (longa) de um jsonl do yt_meta.
import sys, json
for l in open(sys.argv[1], encoding="utf-8"):
    l = l.strip()
    if not l:
        continue
    d = json.loads(l)
    print("==", d.get("id"), (d.get("publicado") or "?")[:10], d.get("views"), d.get("canal"), d.get("inscritos"), "|", d.get("titulo"), d.get("erro", ""))
    if len(sys.argv) > 2:
        print("   ", d.get("desc", "")[: int(sys.argv[2])])
