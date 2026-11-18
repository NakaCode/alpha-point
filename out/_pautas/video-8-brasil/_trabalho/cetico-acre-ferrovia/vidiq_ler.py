# Le uma resposta bruta do vidiq_youtube_search (JSON) e imprime uma linha por video, em TSV.
# Uso: python -X utf8 -B vidiq_ler.py <arquivo.json> [n_desc]
import sys, json
d = json.load(open(sys.argv[1], encoding="utf-8"))
nd = int(sys.argv[2]) if len(sys.argv) > 2 else 0
print("id\ttitulo\tcanal\tinscritos\tviews\tdata\tduracao" + ("\tdesc" if nd else ""))
for r in d.get("results", []):
    lin = [r.get("id"), r.get("title"), r.get("channelTitle"), str(r.get("subscriberCount")), str(r.get("viewCount")),
           (r.get("publishedAt") or "")[:10], r.get("duration") or ""]
    if nd:
        lin.append((r.get("description") or "")[:nd].replace("\n", " ").replace("\t", " "))
    print("\t".join(x or "" for x in lin))
print("creditos:", d.get("_credits"))
