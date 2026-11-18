# Soma as classes agricolas do USDA Cropland Data Layer 2025 (condado de Imperial, FIPS 06025) e mede a fatia do feno.
# Atencao: e o CONDADO inteiro (inclui um pedaco de terra fora do IID e o vale de Bard/Winterhaven), e o CDL tem erro de
# classificacao; serve de ordem de grandeza, nao de numero de tela sem ressalva.
import csv, sys
arq = "cdl/webservice_nass_data_cache_byfips_CDL_2025_06025.csv"
nao_agro = {"Open Water", "Developed/Open Space", "Developed/Low Intensity", "Developed/Medium Intensity",
            "Developed/High Intensity", "Barren", "Deciduous Forest", "Evergreen Forest", "Mixed Forest", "Shrubland",
            "Woody Wetlands", "Herbaceous Wetlands", "Grass/Pasture"}
linhas = [r for r in csv.reader(open(arq, encoding="utf-8"))][1:]
agro = {}
for r in linhas:
    if len(r) < 4:
        continue
    cat, ac = r[1].strip(), float(r[3])
    if cat not in nao_agro:
        agro[cat] = ac
total = sum(agro.values())
cultivado = total - agro.get("Fallow/Idle Cropland", 0)
feno = agro.get("Alfalfa", 0) + agro.get("Other Hay/Non Alfalfa", 0)
folhas = sum(agro.get(k, 0) for k in ["Lettuce", "Greens", "Broccoli", "Cabbage", "Cauliflower", "Celery", "Carrots",
                                       "Onions", "Misc Vegs & Fruits", "Dbl Crop Lettuce/Cantaloupe", "Dbl Crop Lettuce/Cotton",
                                       "Spinach", "Radishes", "Herbs"])
print(f"terra agricola (com pousio): {total:,.0f} acres = {total/640:,.0f} mi2")
print(f"cultivada (sem pousio): {cultivado:,.0f} acres = {cultivado/640:,.0f} mi2")
print(f"alfafa: {agro.get('Alfalfa',0):,.0f} | outro feno: {agro.get('Other Hay/Non Alfalfa',0):,.0f} | feno total: {feno:,.0f} acres = {100*feno/cultivado:.1f}% da cultivada")
print(f"capim de semente (Sod/Grass Seed, inclui capim Bermuda e Sudao em parte): {agro.get('Sod/Grass Seed',0):,.0f}")
print(f"hortalicas e folhas (lista acima): {folhas:,.0f} acres = {100*folhas/cultivado:.1f}% da cultivada")
for k, v in sorted(agro.items(), key=lambda x: -x[1])[:12]:
    print(f"  {k}: {v:,.0f}")
