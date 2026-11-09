"""Tira da pauta do Lesoto os dois ganchos em inglês (as linhas "> " das seções do gancho), sem as marcas de fonte [..], para o teste dos leitores.

Uso: python -I -X utf8 -B s_ganchos_limpos.py <pauta.md> <saida.md>
"""
import re
import sys

linhas = open(sys.argv[1], encoding="utf-8").read().splitlines()
blocos, atual = [], []
for i, l in enumerate(linhas[651:726]):
    if l.startswith("> "):
        atual.append(l[2:])
    elif atual:
        blocos.append(" ".join(atual))
        atual = []
if atual:
    blocos.append(" ".join(atual))
limpos = [re.sub(r"\s+", " ", re.sub(r"\*\[[^\]]*\]\*", "", b)).strip() for b in blocos]
with open(sys.argv[2], "w", encoding="utf-8", newline="\n") as f:
    for n, b in zip(("Opening 1", "Opening 2"), limpos[:2]):
        f.write(f"## {n}\n\n{b}\n\n")
print(len(blocos), "blocos;", [len(b.split()) for b in limpos])
