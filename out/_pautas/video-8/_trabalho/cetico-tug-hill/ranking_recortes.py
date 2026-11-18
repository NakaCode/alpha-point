# Recortes do ranking da neve normal (1991-2020), a partir do ranking-neve.csv (saida do ranking_neve.py).
# Uso: python -X utf8 -B ranking_recortes.py ranking-neve.csv
import csv, sys
L = list(csv.DictReader(open(sys.argv[1], encoding="utf-8")))
for x in L:
    x["neve_in"] = float(x["neve_in"]); x["elev_ft"] = float(x["elev_m"]) * 3.28084
    x["uf"] = x["nome"].split(",")[-1].strip().replace(" US", "")
hooker = next(x for x in L if x["id"] == "USC00303961")
fora48 = {"AK", "HI", "PR", "VI", "GU", "AS", "MP", "FM", "MH", "PW"}
l48 = [x for x in L if x["uf"] not in fora48]
ak = [x for x in L if x["uf"] == "AK"]
print(f"Todas as estacoes com normal de neve: {len(L)}; nos 48 estados contiguos: {len(l48)}; no Alasca: {len(ak)}")
print(f"Alasca acima de Hooker ({hooker['neve_in']}): {sum(1 for x in ak if x['neve_in'] > hooker['neve_in'])} de {len(ak)}")
for teto in (3000, 2500, 2000):
    sub = sorted([x for x in l48 if x["elev_ft"] < teto], key=lambda x: -x["neve_in"])
    pos = next(i for i, x in enumerate(sub, 1) if x["id"] == hooker["id"])
    print(f"\n48 estados, abaixo de {teto} ft: {len(sub)} estacoes; Hooker em {pos}o")
    for x in sub[:5]:
        print(f"   {x['neve_in']:6.1f} in  {x['nome']:<34} {x['elev_ft']:5.0f} ft comp={x['comp']} anos={x['anos']}")
acima48 = [x for x in l48 if x["neve_in"] > hooker["neve_in"]]
print(f"\n48 estados, acima de Hooker: {len(acima48)}; a mais baixa delas: {min(acima48, key=lambda x: x['elev_ft'])['nome']} a {min(x['elev_ft'] for x in acima48):.0f} ft")
leste_miss = sorted([x for x in l48 if float(x["lon"]) > -90.0], key=lambda x: -x["neve_in"])
print("\nA leste do meridiano 90 W (aprox. o Mississippi), as 5 primeiras:")
for x in leste_miss[:5]:
    print(f"   {x['neve_in']:6.1f} in  {x['nome']:<34} {x['elev_ft']:5.0f} ft comp={x['comp']}")
# Combinacoes de cidades do Alasca
c = {x["id"]: x for x in L}
anc, fai, nom, jnu = c["USW00026451"], c["USW00026411"], c["USW00026617"], c["USW00025309"]
print(f"\nAnchorage {anc['neve_in']} + Fairbanks {fai['neve_in']} + Nome {nom['neve_in']} = {anc['neve_in']+fai['neve_in']+nom['neve_in']:.1f} (Hooker {hooker['neve_in']})")
print(f"Anchorage + Fairbanks + Juneau = {anc['neve_in']+fai['neve_in']+jnu['neve_in']:.1f}")
print(f"Hooker / Anchorage = {hooker['neve_in']/anc['neve_in']:.2f}; / Buffalo = {hooker['neve_in']/c['USW00014733']['neve_in']:.2f}; / Central Park = {hooker['neve_in']/c['USW00094728']['neve_in']:.2f}; / Chicago = {hooker['neve_in']/c['USW00094846']['neve_in']:.2f}")
print(f"Hooker em pes: {hooker['neve_in']/12:.2f} ft; em metros: {hooker['neve_in']*0.0254:.2f} m")
# O transecto do vento: da margem ao vale do Black
print("\nO transecto (de oeste para leste):")
for sid in ("USC00306314", "USC00301110", "USC00303961", "USC00303851", "USC00300785", "USC00304912", "USC00309000", "USC00306184"):
    x = c.get(sid)
    if x: print(f"   {x['nome']:<26} {x['neve_in']:6.1f} in  {x['elev_ft']:5.0f} ft  lat {float(x['lat']):.3f} lon {float(x['lon']):.3f} comp={x['comp']}")
