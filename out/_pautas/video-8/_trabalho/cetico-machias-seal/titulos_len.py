# Conta os caracteres dos titulos candidatos.
# Uso: python -X utf8 -B titulos_len.py
T = [
    "Why Canada Pays Two People to Live on a Rock the U.S. Claims",
    "Why the U.S.-Canada Sea Border Stops 23 Miles Short of This Rock",
    "The Corner of the Bay of Fundy the U.S. and Canada Never Divided",
    "Canada Staffs 51 Lighthouses. Only One Is There to Hold a Border",
    "Why a 1984 Court Left a Hole in the U.S.-Canada Border",
    "The 280 Square Miles of Sea the U.S. and Canada Never Divided",
]
for t in T:
    print(len(t), t)
