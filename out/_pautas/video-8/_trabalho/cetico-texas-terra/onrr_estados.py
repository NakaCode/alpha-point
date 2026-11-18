# Soma os repasses do ONRR (monthly_disbursements.csv, revenuedata.doi.gov) ao Texas e ao Novo Mexico,
# por ano fiscal federal (out-set), tipo de fundo, categoria de terra e mercadoria.
# Uso: python -X utf8 -B onrr_estados.py
import csv, os, collections
arq = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "..", "..", "midia", "_pautas", "video-8", "cetico-texas-terra", "onrr-monthly-disb.csv")

def ano_fiscal(data):
    m, d, a = data.split("/")
    m, a = int(m), int(a)
    return a + 1 if m >= 10 else a

tot = collections.defaultdict(float)
det = collections.defaultdict(float)
meses = collections.defaultdict(set)
with open(arq, encoding="utf-8-sig") as f:
    for r in csv.DictReader(f):
        st = r["State"]
        if st not in ("Texas", "New Mexico"):
            continue
        fy = ano_fiscal(r["Date"])
        v = float(r["Disbursement"] or 0)
        tot[(st, fy)] += v
        det[(st, fy, r["Fund Type"], r["Land Category"], r["Commodity"])] += v
        meses[fy].add(r["Date"][:2])

for fy in (2023, 2024, 2025, 2026):
    print(f"\n=== Ano fiscal {fy} (meses presentes: {sorted(meses[fy])})")
    for st in ("New Mexico", "Texas"):
        print(f"  {st}: total {tot[(st, fy)]/1e6:,.2f} mi")
        linhas = sorted(((k, v) for k, v in det.items() if k[0] == st and k[1] == fy), key=lambda x: -x[1])
        for k, v in linhas[:8]:
            print(f"     {k[2]:<14} {k[3]:<10} {k[4]:<22} {v/1e6:>12,.3f} mi")
    nm, tx = tot[("New Mexico", fy)], tot[("Texas", fy)]
    tx_on = sum(v for k, v in det.items() if k[0] == "Texas" and k[1] == fy and k[3] == "Onshore")
    nm_on = sum(v for k, v in det.items() if k[0] == "New Mexico" and k[1] == fy and k[3] == "Onshore")
    if tx:
        print(f"  razao NM/TX (total): {nm/tx:,.1f}x")
    if tx_on:
        print(f"  so terra (Onshore): NM {nm_on/1e6:,.2f} mi, TX {tx_on/1e6:,.3f} mi, razao {nm_on/tx_on:,.0f}x")
