# As fracoes da limpeza e da erosao sobre a area oficial da ilha, e a contagem dos titulos e do gancho.
# Uso: python -X utf8 -B medidas.py
AC_POR_MI2 = 640.0
area_mi2 = 44.6                    # DBEDT, State of Hawaii Data Book 2020, tabela 5.10 (Censo 2010)
area_ac = area_mi2 * AC_POR_MI2
kirc = {"superficie limpa (75 %)": None, "limpa ate 4 pes": 2647, "nunca limpa": 6692,
        "erodida severa (core programs)": 12800, "replantavel hoje": 820}
print(f"area oficial: {area_mi2} mi2 = {area_ac:,.0f} acres")
print(f"area implicita pela KIRC: 2.647/0,10 = {2647/0.10:,.0f} ac; 6.692/0,25 = {6692/0.25:,.0f} ac")
for k, v in kirc.items():
    if v:
        print(f"{k}: {v:,} ac = {v/AC_POR_MI2:.2f} mi2 = {v/area_ac*100:.1f} % da ilha")
print(f"replantavel / erodida severa = {820/12800*100:.1f} %")
print(f"1 acre limpo ate 4 pes a cada {area_ac/2647:.1f} acres")
tits = [
    "Why Kahoolawe Is the Hawaiian Island Nobody Can Live On",
    "Why Kahoolawe Barely Gets Rain, 24 Miles From a Rain Forest",
    "Why Kahoolawe Is So Dry Next to One of America's Wettest Peaks",
    "Why Hawaii's Eighth Island Has Had No One Living on It Since 1941",
    "Why Kahoolawe Is Empty, 7 Miles From Maui",
    "Why Nobody Is Allowed on the Hawaiian Island the Navy Bombed for 49 Years",
]
for t in tits:
    print(len(t), t)
g = ("Twenty-four miles from this island, a mountaintop gets about 366 inches of rain a year. "
     "Kahoʻolawe gets about 16. Nobody lives here now, and the bombs are only half of the reason.")
print(len(g.split()), "palavras no gancho")
