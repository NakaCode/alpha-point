# Imprime a descricao inteira dos videos pedidos de uma saida do vidiq_youtube_search.
# Uso: python -X utf8 -B desc_full.py <arquivo.json> <id> [<id> ...]
import sys, json
d = json.load(open(sys.argv[1], encoding="utf-8"))
ids = set(sys.argv[2:])
for r in d.get("results", []):
    if r.get("id") in ids:
        print("=====", r["id"], r.get("title"), "|", r.get("channelTitle"), r.get("publishedAt"))
        print(r.get("description"))
