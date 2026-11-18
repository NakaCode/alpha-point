# Resume a saida JSON de um vidiq_youtube_search numa linha TSV por video.
# Uso: python -X utf8 -B vidiq_tsv.py <arquivo.json> <rotulo-da-busca> [--desc]
import sys, json
arq, rotulo = sys.argv[1], sys.argv[2]
desc = "--desc" in sys.argv
d = json.load(open(arq, encoding="utf-8"))
for r in d.get("results", []):
    dur = r.get("duration") or ""
    linha = [rotulo, (r.get("publishedAt") or "")[:10], str(r.get("viewCount")), r.get("channelTitle") or "",
             str(r.get("subscriberCount")), dur.replace("PT", "").lower(), r.get("id") or "", (r.get("title") or "").replace("\t", " ")]
    if desc:
        linha.append((r.get("description") or "")[:300].replace("\n", " ").replace("\t", " "))
    print("\t".join(linha))
print("# creditos:", d.get("_credits"), file=sys.stderr)
