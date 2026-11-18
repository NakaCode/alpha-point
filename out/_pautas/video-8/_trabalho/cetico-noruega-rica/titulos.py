# Conta os caracteres dos titulos candidatos (limite 65) e as palavras do gancho.
T = """Three Quarters of Norway's Oil Is on the Wrong Side of a Trench
Why Is Norway So Rich? Look on the Other Side of the Trench
Why Norway's Oil Sits on the Far Side of a Deep Sea Trench
The Trench Off Norway That Could Have Cost It the North Sea""".splitlines()
for t in T:
    print(len(t), t)
G = ("Off Norway's coast, the seabed falls into a trench a thousand feet deep. "
     "In 1958, the rules said a country's seabed could stop at about 650 feet. "
     "Three quarters of all the oil and gas Norway has ever found lies on the other side.")
print(len(G.split()), "palavras no gancho")
