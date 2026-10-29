"""C1: o campo effort das respostas do agente contra o meta.json, o frontmatter e a sessao-mae."""
import json, csv, collections, re, glob, os
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
FM = {}
for f in glob.glob('C:/projetos/alpha-point/.claude/agents/*.md'):
    t = open(f, encoding='utf-8').read(2000)
    m = re.search(r'^effort:\s*(\S+)', t, re.M)
    FM[os.path.basename(f)[:-3]] = m.group(1) if m else None
eff = collections.defaultdict(collections.Counter)
pt = collections.defaultdict(collections.Counter)
first = {}
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        a = int(row['arq'])
        eff[a][row['effort'] or '-'] += 1
        pt[a][row['per_turn'] or '-'] += 1
# sessao-mae: esforco por timestamp
mae_ts = collections.defaultdict(list)
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        a = int(row['arq'])
        if A[a]['tipo'] == 'principal':
            mae_ts[A[a]['sessao']].append((row['ts'], row['effort'] or '-'))
for k in mae_ts: mae_ts[k].sort()
import bisect
def mae_eff(s, ts):
    L = mae_ts.get(s)
    if not L or not ts: return '?'
    i = bisect.bisect_right(L, (ts, 'zzz')) - 1
    return L[max(i, 0)][1]
# 1) meta com effort x campo
print('== meta.effort x campo effort das respostas ==')
tab = collections.Counter()
ex = []
for i, r in enumerate(A):
    m = r.get('meta') or {}
    if 'effort' not in m or not eff.get(i): continue
    top = eff[i].most_common(1)[0][0]
    tab[(m['effort'], top, len(eff[i]) > 1)] += 1
for k, v in sorted(tab.items()): print(k, v)
# 2) especialistas: campo x frontmatter x mae, por dia
print('\n== especialistas (agentType no frontmatter): campo effort x frontmatter x esforco da mae no 1o turno ==')
tab2 = collections.Counter()
for i, r in enumerate(A):
    if r['tipo'] == 'principal' or not eff.get(i): continue
    m = r.get('meta') or {}
    t = m.get('agentType')
    if t not in FM: continue
    top = eff[i].most_common(1)[0][0]
    me = mae_eff(r['sessao'], r.get('primeiro'))
    dia = (r.get('primeiro') or '')[:10]
    per = 'antes-24/10' if dia < '2026-10-24' else 'desde-24/10'
    tab2[(per, t, FM[t], 'meta=' + str(m.get('effort', '')), 'campo=' + top, 'mae=' + me)] += 1
for k, v in sorted(tab2.items()): print(v, k)
# 3) per_turn x effort nas respostas: concordam?
print('\n== per_turn x effort, todas as respostas ==')
c = collections.Counter()
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        c[(row['effort'] or '-', row['per_turn'] or '-')] += 1
for k, v in c.most_common(20): print(k, v)
