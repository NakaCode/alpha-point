# O cetico refaz a conta do preco por acre do Acre (1903), contra o Alasca (1867) e a Gadsden (1853), nominal e real.
# Numeros lidos em 18/11/2026:
#  - Tratado de Petropolis, art. III: 2.000.000 de libras em duas prestacoes (Camara, Decreto 5.161/1904).
#  - Rio Branco, Exposicao de motivos (FUNAG, Obras V, p. 58): 142.900 km2 disputados + 48.100 km2 "reconhecidamente" bolivianos = 191 mil;
#    concessoes a Bolivia: 2.296 + 723 + 116 + 20,3 + 8,2 km2. FUNAG (Goes Filho, p. 27): em 1909, 39.000 km2 ao Peru; o Acre "de 191.000 para 152.000".
#  - IBGE, areas territoriais 2022: Acre 164.173,429 km2; Brasil 8.510.417,771 km2.
#  - State Dept (history.state.gov): Alasca US$ 7,2 milhoes; Gadsden US$ 10 milhoes por 29.670 sq mi. Alasca 586.412 sq mi (en.wikipedia, gerador).
#  - EH.Net: paridade US$ 4,8665635 por libra. Minneapolis Fed (1967=100): 1853 = 25, 1867 = 42, 1903 = 27.
#  - A ferrovia (US$ 33 milhoes) e o sindicato (110 mil libras) sao da en.wikipedia: NAO CONFERIDOS na origem.
# Uso: python -X utf8 -B conta_acre.py
KM2_SQMI = 2.589988110336
AC = lambda km2: km2 / KM2_SQMI * 640
USD_GBP = 4.8665635
CPI = {1853: 25, 1867: 42, 1903: 27}
pago = 2_000_000 * USD_GBP
cedido_bo = 2296 + 723 + 116 + 20.3 + 8.2
areas = {"191 mil (o que a Bolivia cedeu, 1903)": 191_000,
         "191 mil menos o que o Brasil deu (liquido)": 191_000 - cedido_bo,
         "so os 48.100 'reconhecidamente' bolivianos": 48_100,
         "152 mil (o que ficou depois do Peru, 1909)": 152_000,
         "164.173 (o estado hoje, IBGE 2022)": 164_173.429}
alasca = 7_200_000 / (586_412 * 640)
gadsden = 10_000_000 / (29_670 * 640)
alasca_1903 = alasca * CPI[1903] / CPI[1867]
gadsden_1903 = gadsden * CPI[1903] / CPI[1853]
print(f"concessoes a Bolivia: {cedido_bo:,.1f} km2 | pago: US$ {pago:,.0f}")
print(f"Alasca: US$ {alasca:.4f}/acre (1867) = US$ {alasca_1903:.4f} em dolares de 1903")
print(f"Gadsden: US$ {gadsden:.4f}/acre (1853) = US$ {gadsden_1903:.4f} em dolares de 1903")
for nome, km2 in areas.items():
    pa = pago / AC(km2)
    print(f"{nome}: {km2:,.0f} km2 = {km2/KM2_SQMI:,.0f} sq mi = {AC(km2)/1e6:.1f} mi acres | US$ {pa:.3f}/acre | "
          f"Alasca x{pa/alasca:.1f} nominal, x{pa/alasca_1903:.1f} real | Gadsden x{pa/gadsden:.2f} nominal, x{pa/gadsden_1903:.2f} real | "
          f"{100*km2/8_510_417.771:.2f} % do Brasil de hoje")
ferro = 33_000_000; sind = 110_000 * USD_GBP
tot = pago + ferro + sind
pa = tot / AC(191_000)
print(f"com a ferrovia e o sindicato (NAO CONFERIDOS): US$ {tot:,.0f} -> US$ {pa:.2f}/acre | Alasca x{pa/alasca:.0f} nominal, x{pa/alasca_1903:.0f} real | Gadsden x{pa/gadsden:.1f}")
print(f"Uruguai: Natural Earth 177.342 km2 (gerador); o Acre de 1903 / Uruguai = {191_000/177_342:.3f}; o de 1909 = {152_000/177_342:.3f}; o de hoje = {164_173.429/177_342:.3f}")
