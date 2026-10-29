import json, csv, collections
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
h = collections.Counter()
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        a = int(row['arq'])
        if A[a]['sessao'][:8] == '6abb9076' and row['ts'] >= '2026-10-28T20:00':
            h[(row['ts'][:13], A[a]['tipo'])] += 1
for k in sorted(h): print(k, h[k])
