# Conta caracteres dos titulos finais (limite 65) e palavras do gancho. Uso: python -X utf8 -B titulos2.py
T = ["The Colorado River Runs Downhill to California, Uphill to Phoenix",
     "Why Phoenix Has to Pump the Colorado River Uphill",
     "Why a Valley Below Sea Level Gets More Colorado River Than Arizona",
     "Why a Valley Below Sea Level Comes First on the Colorado River"]
for t in T:
    print(len(t), t)
G = ("In 2025, one farm valley in California used more Colorado River water than all of Arizona, a state of 7.6 million people. "
     "Arizona has to pump its share uphill to reach Phoenix. "
     "So why does the river run downhill to a valley below sea level, and why does that valley drink first?")
print("gancho:", len(G.split()), "palavras")
