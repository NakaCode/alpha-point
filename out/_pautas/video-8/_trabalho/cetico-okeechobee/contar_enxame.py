# Conta o enxame nas buscas do vidIQ (TSV): longos (> 3 min) e curtos, por tema (dique/1928/agua), por semana.
# Uso: python -X utf8 -B contar_enxame.py v2-dike-12m-data.tsv
import sys, csv, re
def seg(d):
    m = re.match(r"PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?", d or "")
    return sum(int(x or 0)*k for x, k in zip(m.groups(), (3600, 60, 1))) if m else 0
rows = list(csv.DictReader(open(sys.argv[1], encoding="utf-8"), delimiter="\t"))
tem = lambda r, p: re.search(p, (r["titulo"] + " " + r["descricao_220"]), re.I)
cont = {}
for r in rows:
    longo = seg(r["duracao"]) > 180
    if tem(r, r"dike|wall|levee|143|walled|wrapped|trapped"):
        t = "dique"
    elif tem(r, r"1928|hurricane|drown|2,500"):
        t = "1928"
    else:
        t = "outro"
    k = (t, "longo" if longo else "curto")
    cont[k] = cont.get(k, 0) + 1
print("datas:", min(r["data"] for r in rows), "a", max(r["data"] for r in rows), "| total", len(rows))
for k in sorted(cont): print(k, cont[k])
