# Resume uma resposta JSON do vidiq_youtube_search em TSV (uma linha por video) e grava ao lado.
# Uso: python -X utf8 -B vidiq_tsv.py <entrada.json|.txt> <saida.tsv>
import sys, json
d = json.load(open(sys.argv[1], encoding="utf-8"))
linhas = []
for r in d.get("results", []):
    dur = r.get("duration") or ""
    linhas.append("\t".join(str(x) for x in [
        r.get("id"), (r.get("publishedAt") or "")[:10], r.get("viewCount"), r.get("subscriberCount"),
        dur, r.get("outlierScore"), r.get("channelTitle"), r.get("title"),
        (r.get("description") or "")[:220].replace("\n", " ").replace("\t", " ")]))
cab = "id\tdata\tviews\tinscritos\tduracao\testouro\tcanal\ttitulo\tdescricao_220"
open(sys.argv[2], "w", encoding="utf-8").write(cab + "\n" + "\n".join(linhas) + "\n")
print(cab)
for l in linhas:
    print(l[:330])
print("creditos:", d.get("_credits"))
