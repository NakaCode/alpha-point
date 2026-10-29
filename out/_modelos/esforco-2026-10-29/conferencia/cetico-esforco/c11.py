import json, csv, collections
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
S = ('8b49bdf9', 'dd3c4500', '97895d01', '90213555', '0540596a')
c = collections.Counter(); first = {}; last = {}
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        a = int(row['arq'])
        if A[a]['tipo'] != 'principal' or A[a]['sessao'][:8] not in S: continue
        k = (A[a]['sessao'][:8], row['effort'])
        c[k] += 1
        first[k] = min(first.get(k, 'z'), row['ts']); last[k] = max(last.get(k, ''), row['ts'])
for k in sorted(c): print(k, c[k], first[k][:16], last[k][:16])
