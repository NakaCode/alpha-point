"""O pensamento fica no contexto? Delta do contexto entre respostas consecutivas do mesmo agente x saida e pensamento da anterior."""
import json, csv, collections, statistics
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
by = collections.defaultdict(list)
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        a = int(row['arq'])
        if A[a]['tipo'] != 'agente': continue
        if row['ts'] < '2026-10-19': continue
        e, w5, w1, r, o = (int(row[k]) for k in ('entrada', 'escrita_5m', 'escrita_1h', 'leitura', 'saida'))
        by[a].append((row['ts'], e + w5 + w1 + r, o, int(row['pensamento'] or 0), row['modelo']))
res = collections.defaultdict(list)
for a, X in by.items():
    X.sort()
    for i in range(len(X) - 1):
        ts, ctx, o, th, m = X[i]
        d = X[i + 1][1] - ctx
        if th >= 1500 and o > 0:
            # quanto do delta pode ser explicado: se d < (o - th) o pensamento certamente saiu
            res[m[:12]].append((d, o, th))
for m, R in res.items():
    n = len(R)
    menor_que_visivel_mais_meio = sum(1 for d, o, th in R if d < o - th * 0.5)
    menor_que_saida = sum(1 for d, o, th in R if d < o)
    print(m, n, 'delta<saida:', f'{100*menor_que_saida/n:.0f}%', 'delta<visivel+meio pensamento:', f'{100*menor_que_visivel_mais_meio/n:.0f}%',
          'mediana delta', statistics.median(d for d, o, th in R), 'mediana saida', statistics.median(o for d, o, th in R), 'mediana pens', statistics.median(th for d, o, th in R))
