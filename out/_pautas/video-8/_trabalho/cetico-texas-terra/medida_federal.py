# A medida nossa (preliminar): quanto do petroleo de cada lado da divisa sai de terra federal, e quanto Washington repassa.
# Dados abertos:
#  - ONRR, calendar_year_production.csv (producao em terra federal, por condado; revenuedata.doi.gov)
#  - EIA, producao de petroleo bruto por estado, anual, mil barris (MCRFPNM1, MCRFPTX1; release 30/10/2026)
#  - ONRR, monthly_disbursements.csv (repasses aos estados; somados em onrr_estados.py)
#  - Census, estimativas de populacao 2025 (o arquivo da 1a rodada, co-est2025-alldata.csv)
# Uso: python -X utf8 -B medida_federal.py
import csv, os, collections
aqui = os.path.dirname(os.path.abspath(__file__))
prod = os.path.join(aqui, "..", "..", "..", "..", "..", "midia", "_pautas", "video-8", "cetico-texas-terra", "onrr-cy-production.csv")
EIA_2025 = {"New Mexico": 804_950_000, "Texas": 2_102_613_000}  # barris, EIA (mil barris x 1000)
# Repasses do ONRR no ano fiscal 2025 (onrr_estados.py): total e so terra (Onshore)
REPASSE_FY25 = {"New Mexico": (2_755.19e6, 2_755.19e6), "Texas": (99.83e6, 3.614e6)}
REPASSE_FY26 = {"New Mexico": (5_263.03e6, 5_263.03e6), "Texas": (131.74e6, 7.181e6)}

fed = collections.defaultdict(float)
cond = collections.defaultdict(float)
with open(prod, encoding="utf-8-sig") as f:
    for r in csv.DictReader(f):
        if r["Calendar Year"] != "2025" or r["Land Category"] != "Onshore":
            continue
        if r["State"] not in EIA_2025 or not r["Product"].startswith("Oil"):
            continue
        v = float(r["Volume"] or 0)
        fed[(r["State"], r["Land Class"])] += v
        cond[(r["State"], r["County"], r["Land Class"])] += v

print("Petroleo de terra federal e indigena (ONRR), 2025, contra o total do estado (EIA):")
for st in ("New Mexico", "Texas"):
    f_ = fed[(st, "Federal")]
    n_ = fed[(st, "Native American")]
    m_ = fed[(st, "Mixed Exploratory")]
    print(f"  {st}: federal {f_/1e6:,.1f} mi bbl ({f_/EIA_2025[st]:.1%}); unidades mistas {m_/1e6:,.1f} mi bbl "
          f"(com elas: {(f_+m_)/EIA_2025[st]:.1%}); indigena {n_/1e6:,.2f} mi bbl; total EIA {EIA_2025[st]/1e6:,.1f} mi bbl")
print("\nCondados com mais petroleo federal, 2025:")
for (st, c, lc), v in sorted(cond.items(), key=lambda x: -x[1])[:8]:
    print(f"  {st:<11} {c:<14} {lc:<16} {v/1e6:>8,.2f} mi bbl")

pop = {}
censo = os.path.join(aqui, "..", "co-est2025-alldata.csv")
if os.path.exists(censo):
    with open(censo, encoding="latin-1") as f:
        for r in csv.DictReader(f):
            if r["SUMLEV"] == "040" and r["STNAME"] in EIA_2025:
                pop[r["STNAME"]] = int(r["POPESTIMATE2025"])
print("\nPopulacao 2025 (Census):", pop)

for rot, rep in (("ano fiscal 2025", REPASSE_FY25), ("ano fiscal 2026", REPASSE_FY26)):
    print(f"\nRepasses de Washington, {rot}:")
    for st in ("New Mexico", "Texas"):
        tot, terra = rep[st]
        pp = f" | por morador: US$ {tot/pop[st]:,.2f} (total), US$ {terra/pop[st]:,.2f} (so terra)" if st in pop else ""
        print(f"  {st}: total US$ {tot/1e6:,.1f} mi; so terra US$ {terra/1e6:,.2f} mi{pp}")
    print(f"  razao total {rep['New Mexico'][0]/rep['Texas'][0]:,.1f}x; so terra {rep['New Mexico'][1]/rep['Texas'][1]:,.0f}x")

# Por barril produzido no estado (2025, calendario) contra o repasse do ano fiscal 2025 (aproximacao: anos nao coincidem)
print("\nRepasse de terra (FY25) por barril produzido no estado (2025, EIA), aproximado:")
for st in ("New Mexico", "Texas"):
    print(f"  {st}: US$ {REPASSE_FY25[st][1]/EIA_2025[st]:,.4f} por barril")
