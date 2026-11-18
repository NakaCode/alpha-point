# A medida preliminar do cetico do vale-imperial (17/11/2026). Numeros lidos nos relatorios da Reclamation
# (Colorado River Accounting and Water Use Report, Table 1 e Table 5; previsao de 17/11/2026), no 3DEP (cotas.json)
# e no Census (safra 2025). Uso: python -X utf8 -B medida.py
import json

# uso consuntivo, acre-pes (Reclamation). 2026 = previsao de fim de ano publicada em 17/11/2026.
uso = {
    2019: {"IID": 2558136, "AZ": 2491707, "NV": 233996, "CA": 3840686},
    2022: {"IID": 2577164, "AZ": 2014176, "NV": 223670, "CA": 4424247},
    2023: {"IID": 2417024, "AZ": 1889517, "NV": 186844, "CA": 3699155},
    2024: {"IID": 2311905, "AZ": 1934518, "NV": 212428, "CA": 3943741},
    2025: {"IID": 2187165, "AZ": 1910524, "NV": 197570, "CA": 3646992},
    2026: {"IID": 2180326, "AZ": 1913462, "NV": 224384, "CA": 3674977},
}
print("ano  | IID       | Arizona   | IID-AZ    | IID/AZ | IID>AZ+NV? | IID/NV | IID/CA")
for a, d in uso.items():
    print(f"{a} | {d['IID']:>9,} | {d['AZ']:>9,} | {d['IID']-d['AZ']:>+9,} | {d['IID']/d['AZ']:.2f}   | {'sim' if d['IID'] > d['AZ']+d['NV'] else 'nao':>3} ({d['IID']-d['AZ']-d['NV']:+,}) | {d['IID']/d['NV']:.1f}x | {100*d['IID']/d['CA']:.0f}%")

# 2027-2028 (Operating Guidelines, ago/2026, sec. 5.3.A.2): apportionamento
ap27 = {"AZ": 2040000, "CA": 3960000, "NV": 250000}
print("\n2027: Arizona pode usar 2,04 MAF; o IID usou", f"{uso[2025]['IID']:,}", "em 2025 =", f"{uso[2025]['IID']/ap27['AZ']:.2f}", "x o teto do Arizona em 2027")
print("2027: o teto do Arizona (2,04) contra o uso real do Arizona em 2025 (1,91):", f"{ap27['AZ']-uso[2025]['AZ']:+,}", "acre-pes")
print("2027: o teto da California (3,96) contra o uso real da California em 2025 (3,65):", f"{ap27['CA']-uso[2025]['CA']:+,}", "acre-pes")

# populacao (Census, safra 2025)
pop = {"Imperial": 181411, "AZ": 7623818, "NV": 3282188}
print("\nacre-pes por morador em 2025: condado de Imperial (agua do IID)", f"{uso[2025]['IID']/pop['Imperial']:.1f}",
      "| Arizona", f"{uso[2025]['AZ']/pop['AZ']:.2f}", "| Nevada", f"{uso[2025]['NV']/pop['NV']:.3f}", " (medida enganosa: a agua do vale vira comida e feno vendidos fora)")

# gravidade (3DEP, EPQS)
c = {d["ponto"]: d.get("cota_pes") for d in json.load(open("cotas.json", encoding="utf-8"))}
dam = c["Imperial Dam (rio Colorado, tomada do All-American Canal)"]
print(f"\nImperial Dam {dam:+.0f} ft -> El Centro {c['El Centro']:+.0f} ft (queda {dam-c['El Centro']:.0f} ft) -> Calipatria {c['Calipatria']:+.0f} ft (queda {dam-c['Calipatria']:.0f} ft)")
hav = c["Lake Havasu, tomada do CAP"]
print(f"Lake Havasu {hav:+.0f} ft -> Phoenix {c['Phoenix (centro)']:+.0f} ft (subida {c['Phoenix (centro)']-hav:.0f} ft no terreno) -> Tucson {c['Tucson (centro)']:+.0f} ft (subida {c['Tucson (centro)']-hav:.0f} ft no terreno);"
      " a Reclamation da 'nearly 2,900 feet' ate o fim do aqueduto")
