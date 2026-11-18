"""cetico_titulos.py: conta os caracteres dos titulos que o cetico da v1 propoe (video 8, australia-animais) e das frases de troca, e o tempo a 179 palavras/min.
uso: python -I -X utf8 -B pautas/australia-animais/_trabalho/scripts/cetico_titulos.py"""
import re

TITULOS = [
    "Australia Has the Venom. Why Doesn't It Have the Deaths?",
    "Why Most of Australia's Snakes Are Venomous",
    "Australia's Deadliest Snake Isn't Its Most Venomous One",
    "Why So Few People Die From Australia's Deadly Animals",
    "Australia Has the World's Most Venomous Snake. It Rarely Kills.",
    "Why Australia's Spiders Stopped Killing People",
]
FRASES = [
    "From 2016 to 2025, every venomous animal in Australia combined killed 85 people. Spiders killed none. That's fewer than Australia's roads killed in an average month of 2025. Put next to the population, it's about one in three million a year.",
    "Of Australia's roughly 220 kinds of snakes, about 145 are venomous, the evolutionary biologist Michael Lee told Live Science. Worldwide, it's about 15 percent.",
]


def main():
    for t in TITULOS:
        print(f'{len(t):3d}  {t}')
    print()
    for f in FRASES:
        n = len(re.findall(r"[A-Za-z0-9'%,.-]+", f))
        print(f'{n:3d} palavras, {n / 179 * 60:.1f} s a 179/min: {f}')


main()
