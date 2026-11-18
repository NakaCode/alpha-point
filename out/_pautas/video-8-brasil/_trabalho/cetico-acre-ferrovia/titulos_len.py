# Conta os caracteres e as palavras de titulos e ganchos candidatos.
# Uso: python -X utf8 -B titulos_len.py
T = ["Brazil Paid More for This Jungle Than America Paid for Alaska",
     "Why Brazil Paid More for a Corner of the Amazon Than Alaska Cost",
     "The Amazon Land Brazil Paid For, Then Promised a Railroad Too",
     "Why Brazil Paid for Amazon Land It Already Claimed",
     "The Railroad Brazil Built to Pay for a Piece of the Amazon"]
for t in T: print(len(t), "|", t)
G = ("In 1903, Brazil paid more for a corner of the Amazon than America paid for all of Alaska. "
     "Most of that land, Brazil already claimed as its own. So why pay at all, and why throw in a railroad?")
print(len(G.split()), "palavras |", G)
