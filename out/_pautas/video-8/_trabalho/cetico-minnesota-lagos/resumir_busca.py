# Resume a resposta de um vidiq_youtube_search (JSON) numa TSV: id, data, views, inscritos, duracao, canal, titulo, inicio da descricao.
# Uso: python -X utf8 -B resumir_busca.py <entrada.json> <saida.tsv> [chars_desc]
import sys, json, re

ent, sai = sys.argv[1], sys.argv[2]
nd = int(sys.argv[3]) if len(sys.argv) > 3 else 220
with open(ent, encoding="utf-8") as f:
    d = json.load(f)
linhas = ["id\tdata\tviews\tinscritos\tduracao\tcanal\ttitulo\tdesc"]
for r in d.get("results", []):
    desc = re.sub(r"\s+", " ", r.get("description") or "")[:nd]
    linhas.append("\t".join(str(x) for x in [
        r.get("id"), (r.get("publishedAt") or "")[:10], r.get("viewCount"), r.get("subscriberCount"),
        r.get("duration"), r.get("channelTitle"), r.get("title"), desc]))
with open(sai, "w", encoding="utf-8") as f:
    f.write("\n".join(linhas) + "\n")
print("\n".join(linhas))
print("creditos:", d.get("_credits"))
