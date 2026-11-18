# Contas das medidas das pautas "inabitavel" (17/11/2026). Distancias em circulo maximo (haversine, raio 6371,0088 km).
# As coordenadas sao aproximadas (graus decimais, de memoria) e devem ser refinadas pelo GNIS/OSM antes do roteiro.
import math

R = 6371.0088
MI = 1.609344

def d(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

P = {
    "Attu (Chichagof Harbor)": (52.93, 173.24), "Anchorage": (61.217, -149.90), "Atka": (52.196, -174.20),
    "Petropavlovsk-Kamchatsky": (53.017, 158.65), "Otaru (Hokkaido)": (43.19, 140.99), "Unalaska": (53.889, -166.542),
    "Washington DC": (38.90, -77.04), "Tokyo": (35.68, 139.69),
    "Kahoolawe (centro)": (20.55, -156.60), "Kihei (Maui)": (20.76, -156.46), "Puu Kukui (W Maui)": (20.89, -156.59),
    "Haleakala (cume)": (20.71, -156.25), "Honolulu": (21.307, -157.858),
    "Saibai (vila)": (-9.38, 142.62), "Bamaga (cabo York)": (-10.89, 142.39), "Port Moresby": (-9.44, 147.18), "Canberra": (-35.28, 149.13),
    "Newtok": (60.94, -164.63), "Mertarvik": (60.82, -164.50),
    "Hilo": (19.72, -155.08), "Epicentro Chile 1960": (-38.24, -73.05), "Epicentro Unimak 1946": (52.75, -163.50),
    "Maralinga (vila)": (-30.16, 131.58), "Adelaide": (-34.93, 138.60), "Londres": (51.507, -0.128),
    "Lemieux (antigo)": (45.42, -75.05), "Ottawa (Parlamento)": (45.4236, -75.7009), "Montreal": (45.50, -73.57),
    "Lismore": (-28.81, 153.28), "Sydney": (-33.87, 151.21),
}
pares = [
    ("Attu (Chichagof Harbor)", "Anchorage"), ("Attu (Chichagof Harbor)", "Petropavlovsk-Kamchatsky"), ("Attu (Chichagof Harbor)", "Atka"),
    ("Attu (Chichagof Harbor)", "Otaru (Hokkaido)"), ("Attu (Chichagof Harbor)", "Unalaska"), ("Attu (Chichagof Harbor)", "Washington DC"),
    ("Attu (Chichagof Harbor)", "Tokyo"),
    ("Kahoolawe (centro)", "Kihei (Maui)"), ("Kahoolawe (centro)", "Puu Kukui (W Maui)"), ("Kahoolawe (centro)", "Haleakala (cume)"),
    ("Kahoolawe (centro)", "Honolulu"),
    ("Saibai (vila)", "Bamaga (cabo York)"), ("Saibai (vila)", "Port Moresby"), ("Saibai (vila)", "Canberra"),
    ("Newtok", "Mertarvik"),
    ("Hilo", "Epicentro Chile 1960"), ("Hilo", "Epicentro Unimak 1946"),
    ("Maralinga (vila)", "Adelaide"), ("Maralinga (vila)", "Londres"),
    ("Lemieux (antigo)", "Ottawa (Parlamento)"), ("Lemieux (antigo)", "Montreal"),
    ("Lismore", "Sydney"),
]
for a, b in pares:
    km = d(P[a], P[b])
    print(f"{a} -> {b}: {km:,.0f} km = {km / MI:,.0f} mi")

# Kaho'olawe: os numeros da KIRC (2004) -> area e fracoes
lim4 = 2647      # acres limpos ate 4 pes (10 %)
nao = 6692       # acres nao limpos (25 %)
tot_a = lim4 / 0.10; tot_b = nao / 0.25
print(f"\nKahoolawe: area implicita {tot_a:,.0f} a {tot_b:,.0f} acres = {tot_a/640:,.1f} a {tot_b/640:,.1f} mi2")
print(f"  limpo ate 4 pes: {lim4:,} acres = {lim4/640:.1f} mi2; nao limpo: {nao:,} acres = {nao/640:.1f} mi2")
print(f"  so a superficie (75 % - 10 %): {(tot_a+tot_b)/2*0.65:,.0f} acres")
print(f"  Manhattan (terra) = 22.7 mi2 -> o nao limpo e {nao/640/22.7:.0%} de Manhattan")

# Maralinga: as duas cifras da zona sem moradia permanente
for km2 in (120, 412):
    print(f"\nMaralinga: {km2} km2 = {km2/2.589988:,.0f} mi2 = {km2/58.7:.1f} Manhattans (terra 58,7 km2)")

# Hilo (NCEI, ncei-hilo-saida.txt): mortes registradas
hilo = {1837: 14, 1877: 5, 1923: 1, 1946: 96, 1960: 61}
hawaii = {1837: 16, 1868: 54, 1877: 5, 1923: 1, 1946: 158, 1957: 2, 1960: 61, 1975: 2, 2012: 1}
sh, sa = sum(hilo.values()), sum(hawaii.values())
sa_dist = sa - 54 - 2  # sem os dois tsunamis locais da ilha grande (1868 Kau e 1975 Halape)
print(f"\nHilo: {sh} mortes de tsunami registradas, de {sa} no Havai = {sh/sa:.0%}; de tsunamis vindos de longe: {sh-0}/{sa_dist} = {sh/sa_dist:.0%}")

# Lismore
print(f"\nLismore: 14,4 m em 2022 contra 12,11 m em 1954/1974 = +{14.4-12.11:.2f} m")
