# A conta nossa do Acre (nominal, sem inflacao): quanto o Brasil pagou por acre em 1903, contra o Alasca em 1867.
# Numeros lidos em 18/11/2026: Treaty of Petropolis (191.000 km2; 2 milhoes de libras; ferrovia de US$ 33 milhoes; 110 mil libras ao
# Bolivian Syndicate, em Acre War); Alaska Purchase (US$ 7,2 milhoes; 586.412 sq mi; "$0.02 per acre"); Gold standard (US$ 4,86 por libra,
# a paridade de antes de 1914). Uso: python -X utf8 -B acre_conta.py
KM2_SQMI = 2.589988110336
ACRES_SQMI = 640
acre_km2 = 191_000
acre_sqmi = acre_km2 / KM2_SQMI
acre_acres = acre_sqmi * ACRES_SQMI
usd_lb = 4.86
pago = 2_000_000 * usd_lb
sindicato = 110_000 * usd_lb
ferrovia = 33_000_000
alasca = 7_200_000 / (586_412 * ACRES_SQMI)
print(f"Acre: {acre_km2:,} km2 = {acre_sqmi:,.0f} sq mi = {acre_acres:,.0f} acres")
print(f"2 milhoes de libras a US$ {usd_lb}: US$ {pago:,.0f} -> US$ {pago/acre_acres:.3f} por acre ({pago/acre_acres/alasca:.1f}x o Alasca, US$ {alasca:.4f})")
tot = pago + sindicato + ferrovia
print(f"com o sindicato (US$ {sindicato:,.0f}) e a ferrovia (US$ {ferrovia:,}): US$ {tot:,.0f} -> US$ {tot/acre_acres:.2f} por acre ({tot/acre_acres/alasca:.0f}x o Alasca)")
print(f"comparacao de area: Florida (65.758 sq mi, total, Census) -> Acre/Florida = {acre_sqmi/65758:.2f}")
