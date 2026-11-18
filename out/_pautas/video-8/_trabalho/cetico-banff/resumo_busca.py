# Resume uma resposta do vidiq_youtube_search (JSON) numa linha por video. Uso: python -X utf8 -B resumo_busca.py <arquivo.json>
import sys, json
d = json.load(open(sys.argv[1], encoding="utf-8"))
print("resultados:", len(d["results"]), "| creditos:", d.get("_credits"))
for r in d["results"]:
    print(f'{r["id"]} | {r["title"][:90]} | {r["channelTitle"]} ({r.get("subscriberCount")}) | {r.get("viewCount")} | {r["publishedAt"][:10]} | {r.get("duration")}')
    print("    ", (r.get("description") or "")[:260].replace("\n", " "))
