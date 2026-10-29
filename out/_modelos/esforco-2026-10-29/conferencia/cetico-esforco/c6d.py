"""Pensamento por resposta, por modelo x esforco x papel (todos os agentes desde 12/10)."""
import json, csv, collections, statistics
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
g = collections.defaultdict(list)
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        a = int(row['arq'])
        if row['ts'] < '2026-10-12': continue
        m = row['modelo']
        f = 'fable' if 'fable' in m else 'opus' if 'opus' in m else 'sonnet' if 'sonnet' in m else None
        if not f: continue
        l = L.get(a, {})
        papel = l.get('papel', '?') if A[a]['tipo'] != 'principal' else 'conversa'
        if '|' in papel: papel = papel.split('|')[0]
        g[(f, papel, row['effort'])].append((int(row['saida']), int(row['pensamento'] or 0), int(row['thinking_ms'] or 0)))
print('modelo | papel | esforco | respostas | pensamento/resp media | mediana | % com pensamento | saida/resp')
for k in sorted(g):
    X = g[k]
    if len(X) < 150: continue
    th = [x[1] for x in X]
    print(k[0], '|', k[1][:22], '|', k[2], '|', len(X), '|', round(statistics.mean(th)), '|', statistics.median(th), '|', f'{100*sum(1 for t in th if t)/len(th):.0f}%', '|', round(statistics.mean(x[0] for x in X)))
