# Conta caracteres de titulos (limite 65) e palavras do gancho. Uso: python -X utf8 -B titulos.py
T = """Why One Valley Holds Nearly as Much Colorado River Water as Arizona
Why the Colorado River Flows Downhill to California, Not Arizona
Why Arizona Pumps the Colorado River Uphill and California Doesn't
Why a Valley Below Sea Level Gets More Colorado River Than Arizona
Why Arizona Lifts Its Colorado River Water 2,900 Feet Uphill
The Colorado River Runs Downhill to California, Uphill to Arizona"""
for t in T.splitlines():
    print(len(t), t)
G = ("In 2025, one farm valley in California used more Colorado River water than all of Arizona, a state of 7.6 million. "
     "Arizona has to pump its share almost 2,900 feet uphill. "
     "So how did a valley below sea level end up first in line?")
print("\ngancho:", len(G.split()), "palavras")
