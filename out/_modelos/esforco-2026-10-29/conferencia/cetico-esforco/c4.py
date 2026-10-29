"""C4: a Sala por esforco, por sessao e periodo; thinking; janelas vizinhas da troca de 24/10."""
import json, csv, collections, statistics
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
P = (4, 5, 8, 0.20, 20)
g = collections.defaultdict(list)
pens = collections.Counter()
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        a = int(row['arq'])
        if A[a]['tipo'] != 'principal' or A[a]['sessao'][:8] not in ('f42bc036', '6abb9076', '806a2100'): continue
        if 'opus' not in row['modelo']: continue
        e, w5, w1, r, o = (int(row[k]) for k in ('entrada', 'escrita_5m', 'escrita_1h', 'leitura', 'saida'))
        c = (e*P[0] + w5*P[1] + w1*P[2] + r*P[3] + o*P[4]) / 1e6
        g[(A[a]['sessao'][:8], row['effort'], row['ts'][:10])].append((o, c, e + w5 + w1 + r, int(row['pensamento'] or 0), int(row['thinking_ms'] or 0)))
        pens['com_pensamento' if int(row['pensamento'] or 0) else 'sem'] += 1
print(pens)
S = collections.defaultdict(list)
for (s, ef, d), v in sorted(g.items()):
    S[(s, ef)] += v
for k, v in S.items():
    print(k, len(v), 'saida media', round(statistics.mean(x[0] for x in v)), 'mediana', statistics.median(x[0] for x in v),
          'ctx mil', round(statistics.mean(x[2] for x in v) / 1000), 'US$/resp', round(statistics.mean(x[1] for x in v), 3),
          'pens med', round(statistics.mean(x[3] for x in v)), 'think s', round(statistics.mean(x[4] for x in v) / 1000, 1),
          'dias', min(d for (s2, e2, d) in g if (s2, e2) == k), max(d for (s2, e2, d) in g if (s2, e2) == k))
# so a sessao f42bc036, janelas de 4 dias antes e depois da troca
print('-- f42bc036, por dia --')
for (s, ef, d), v in sorted(g.items(), key=lambda x: x[0][2]):
    if s != 'f42bc036' or d < '2026-10-19': continue
    print(d, ef, len(v), 'saida med', round(statistics.mean(x[0] for x in v)), 'mediana', statistics.median(x[0] for x in v),
          'ctx', round(statistics.mean(x[2] for x in v) / 1000), 'US$', round(statistics.mean(x[1] for x in v), 3))
