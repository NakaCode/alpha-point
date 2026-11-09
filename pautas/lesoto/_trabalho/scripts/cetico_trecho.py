import sys, re
# uso: trecho.py <arquivo> <marcador_inicio> <n_chars> [ocorrencia]
p, marc, n = sys.argv[1], sys.argv[2], int(sys.argv[3])
occ = int(sys.argv[4]) if len(sys.argv) > 4 else 1
t = open(p, encoding="utf-8", errors="replace").read()
idx = -1
start = 0
for _ in range(occ):
    idx = t.find(marc, start)
    if idx < 0:
        break
    start = idx + 1
if idx < 0:
    print("nao achado")
    sys.exit(0)
print(t[idx:idx + n])
