"""Agrega o consumo por esforco: por resposta e por agente, separado por papel e modelo."""
import json, csv, sys, collections, statistics, datetime, re
D = sys.argv[1]
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10),
         'haiku': (0.10, 0.125, 0.20, 0.01, 0.50)}
SALA = {'f42bc036-0fdc-43ca-af3a-3895cd6017bd': 'Sala', '6abb9076-59b2-4f2c-ba1f-4752c77f4fe3': 'Sala-reserva',
        '806a2100-003e-43df-8f44-a59619def589': 'Sala'}
SETOR = {'8b49bdf9': 'Pesquisa', 'dd3c4500': 'Direcao', '97895d01': 'Texto', '90213555': 'Arte', '0540596a': 'Qualidade'}
def fam(m):
    for k in PRECO:
        if k in m: return k
    return 'outro'
def brt(ts):
    t = datetime.datetime.fromisoformat(ts.replace('Z', '+00:00')) - datetime.timedelta(hours=3)
    return t.strftime('%Y-%m-%d %H:%M')
def dono(r):
    s = r['sessao']
    if s in SALA: return SALA[s]
    if s[:8] in SETOR: return 'setor:' + SETOR[s[:8]]
    return 'peca-conversa'
def papel(r):
    m = r.get('meta') or {}
    t = m.get('agentType') or '?'
    d = (m.get('description') or '').strip()
    if t in ('workflow-subagent', 'general-purpose', 'claude', '?'):
        p = re.split(r'[:\s/(]', d, 1)[0].lower() if d else t
        return t + '|' + p
    return t
agg = collections.defaultdict(lambda: {'n': 0, 'cost': 0.0, 'out': 0, 'think_ms': 0, 'w': 0, 'r': 0, 'e': 0,
                                       'cost_out': 0.0, 'ctx': 0})
per_resp = collections.defaultdict(list)
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        a = int(row['arq'])
        f = fam(row['modelo'])
        p = PRECO.get(f)
        if not p: continue
        e, w5, w1, r, o = (int(row[k]) for k in ('entrada', 'escrita_5m', 'escrita_1h', 'leitura', 'saida'))
        c = (e*p[0] + w5*p[1] + w1*p[2] + r*p[3] + o*p[4]) / 1e6
        x = agg[a]
        x['n'] += 1; x['cost'] += c; x['out'] += o; x['think_ms'] += int(row['thinking_ms'] or 0)
        x['w'] += w5 + w1; x['r'] += r; x['e'] += e; x['cost_out'] += o*p[4]/1e6; x['ctx'] += e + w5 + w1 + r
        x.setdefault('eff', collections.Counter())[row['effort'] or '-'] += 1
        x.setdefault('fam', collections.Counter())[f] += 1
        x['ts0'] = min(x.get('ts0') or row['ts'], row['ts'])
        per_resp[(a, row['effort'] or '-')].append(o)
# por agente
linhas = []
for i, r in enumerate(A):
    x = agg.get(i)
    if not x or not x['n']: continue
    eff = x['eff'].most_common(1)[0][0]
    linhas.append({'i': i, 'tipo': r['tipo'], 'dono': dono(r), 'papel': papel(r) if r['tipo'] != 'principal' else 'conversa',
                   'modelo': x['fam'].most_common(1)[0][0], 'effort': eff, 'meta_effort': (r.get('meta') or {}).get('effort', ''),
                   'data': brt(x['ts0']), 'n': x['n'], 'cost': x['cost'], 'out': x['out'], 'think_ms': x['think_ms'],
                   'cost_out': x['cost_out'], 'ctx': x['ctx'], 'wf': r.get('wf_nome') or '', 'desc': (r.get('meta') or {}).get('description', '')})
json.dump(linhas, open(D + '/por-agente.json', 'w', encoding='utf-8'), ensure_ascii=False)
# 1) esforco dos agentes ao longo do tempo
print('== AGENTES (subagentes): esforco por dia ==')
dia = collections.defaultdict(collections.Counter)
for l in linhas:
    if l['tipo'] == 'principal': continue
    dia[l['data'][:10]][l['effort']] += 1
for d in sorted(dia):
    print(d, dict(dia[d]))
# 2) por papel x modelo x esforco
print('\n== POR PAPEL x MODELO x ESFORCO (agentes) ==')
g = collections.defaultdict(list)
for l in linhas:
    if l['tipo'] == 'principal': continue
    g[(l['papel'], l['modelo'], l['effort'])].append(l)
print('papel | modelo | esforco | agentes | resp/agente (med) | saida/resp (med) | pensa s/resp (med) | US$/agente (med) | US$ total')
for k in sorted(g, key=lambda k: (k[0], k[1], k[2])):
    L = g[k]
    if len(L) < 3: continue
    rpa = statistics.median(l['n'] for l in L)
    opr = statistics.median(l['out'] / l['n'] for l in L)
    tpr = statistics.median(l['think_ms'] / l['n'] / 1000 for l in L)
    cpa = statistics.median(l['cost'] for l in L)
    print(f"{k[0][:40]} | {k[1]} | {k[2]} | {len(L)} | {rpa:.0f} | {opr:.0f} | {tpr:.1f} | {cpa:.2f} | {sum(l['cost'] for l in L):.0f}")
