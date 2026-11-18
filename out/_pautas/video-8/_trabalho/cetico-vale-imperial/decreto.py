# Le o "Colorado River Accounting and Water Use Report" (Reclamation) e mostra as linhas de uso consuntivo
# do IID, dos totais de cada estado e do resumo. Uso: python -X utf8 -B decreto.py <pdf> [termo ...]
import sys, re, fitz
doc = fitz.open(sys.argv[1])
termos = sys.argv[2:] or ["IMPERIAL IRRIGATION DISTRICT", "ARIZONA TOTALS", "CALIFORNIA TOTALS", "NEVADA TOTALS",
                          "TOTAL CONSUMPTIVE USE", "Summary"]
print("paginas:", len(doc))
for i, p in enumerate(doc):
    t = p.get_text()
    for termo in termos:
        for m in re.finditer(re.escape(termo), t, re.I):
            a, b = max(0, m.start() - 200), min(len(t), m.end() + 600)
            print(f"\n--- p.{i+1} [{termo}]")
            print(re.sub(r"[ \t]+", " ", t[a:b]))
