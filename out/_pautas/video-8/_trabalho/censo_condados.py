# Baixa (uma vez) as estimativas de condados do Census (safra 2025) e imprime linhas pedidas.
# Uso: python -X utf8 -B censo_condados.py "Estado,Condado" ...   (Condado vazio = linha do estado)
import sys, os, csv, io, urllib.request
URL = "https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/counties/totals/co-est2025-alldata.csv"
ARQ = "co-est2025-alldata.csv"
if not os.path.exists(ARQ):
    with urllib.request.urlopen(URL, timeout=120) as r:
        open(ARQ, "wb").write(r.read())
dados = open(ARQ, "rb").read().decode("latin-1")
linhas = list(csv.DictReader(io.StringIO(dados)))
print("colunas:", [c for c in linhas[0].keys()][:12], "... total linhas", len(linhas))
for alvo in sys.argv[1:]:
    est, cond = (alvo.split(",") + [""])[:2]
    for l in linhas:
        if l["STNAME"] == est and ((cond == "" and l["SUMLEV"] == "040") or l["CTYNAME"] == cond):
            print(alvo, "| base2020:", l["ESTIMATESBASE2020"], "| 2025:", l.get("POPESTIMATE2025"))
