# Contas das medidas e contagem de caracteres dos titulos (rico-pobre, 17/11/2026).
T = """Why Texas Got Rich From Land Nobody Wanted
How a Desert Nobody Wanted Made the University of Texas Rich
Why Texas Keeps Its Oil Money and New Mexico Doesn't
Why the Falkland Islands Got Rich After the War
How a War Made 3,662 Falkland Islanders Rich
The Line in the Sea That Made the Falklands Rich
Why Quebec Got Rich From Newfoundland's Biggest River
Why Newfoundland Sold Its Biggest River for 0.2 Cents
The Border That Let Quebec Profit From Labrador's River
Why New Mexico Can Pay for Everyone's Child Care
Why New Mexico Gets 28 Times Texas's Federal Oil Money
Why One of America's Poorest States Has a $10 Billion Fund
Why Chile Got Rich From a Desert It Won in a War
Why Chile Is Richer Than Bolivia: The Desert It Won
Why Bolivia Lost the Desert That Made Chile Rich
Why Canada's Diamond Territory Is Running Out of Money
Why the Northwest Territories Is Losing Its Diamonds
Why Canada's Ice Road to the Diamond Mines Is Dying
Why America's Top Trade Port Is a Poor Border City
Why $354 Billion a Year Crosses the Border at Laredo
Why Laredo Moves More Trade Than Most Seaports
Why Paraguay Owns Half a Giant Dam and Stays Poor
Why Paraguay Sells Its Power to Brazil for $15
Why Paraguay's Biggest Asset Sits on Its Border"""
for t in T.splitlines():
    print(len(t), t)
print()
# Malvinas
eez_km2, terra_km2, pop = 550566, 4700 * 2.589988, 3662
print("Malvinas: terra km2 = %.0f; ZEE/terra = %.1fx; km2 de mar por morador = %.1f; mi2 por morador = %.1f" % (terra_km2, eez_km2 / terra_km2, eez_km2 / pop, eez_km2 / pop / 2.589988))
print("Malvinas: ZEE em mi2 = %.0f" % (eez_km2 / 2.589988))
# Texas
acres_ut, ri, de = 2.1e6, 677120, 1265920
print("UT: %.2f x Rhode Island; %.2f x Delaware; mi2 = %.0f" % (acres_ut / ri, acres_ut / de, acres_ut / 640))
print("PUF Lands Receipts FY2025 por dia: US$ %.2f mi" % (1719 / 365))
print("Federal: NM/TX = %.1fx" % (31.6 / 1.9))
nm_pop, tx_pop = 2125498, 31709821
print("ONRR FY2025: NM US$ %.0f por morador; TX US$ %.2f por morador; NM/TX total = %.1fx" % (2.76e9 / nm_pop, 99.83e6 / tx_pop, 2.76e9 / 99.83e6))
print("ECTF ~US$10 bi por morador do NM: US$ %.0f" % (10e9 / nm_pop))
# Laredo
webb = 281224
print("Laredo: US$ %.2f mi de comercio por morador do condado de Webb por ano" % (353.94e9 / webb / 1e6))
print("Laredo: caminhoes/dia 14.000 -> por ano %.1f mi" % (14000 * 365 / 1e6))
# Chile
print("PIB pc 2024: Chile/Bolivia = %.2fx; Chile/Peru = %.2fx" % (16658.97 / 4421.17, 16658.97 / 8526.30))
# Paraguai
tot, ande = 72879, 25768
print("Itaipu 2025: ANDE = %.1f%% do total; da metade paraguaia (%.0f GWh) = %.1f%%; cedido ~ %.0f GWh" % (100 * ande / tot, tot / 2, 100 * ande / (tot / 2), tot / 2 - ande))
print("PIB pc 2024: Paraguai/Brasil = %.2f" % (6456.61 / 10310.55))
# Churchill
print("Churchill (CTV/Global 2023, ate 2019): Quebec/NL = %.0fx" % (28 / 2))
