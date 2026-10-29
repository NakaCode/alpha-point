"""O custo dos agentes em partes: ler o cache, escrever o que e novo, reescrever o contexto inteiro depois que o cache venceu,
a saida (texto e pensamento) e a entrada sem cache. Mede tambem o prazo do cache (5 min ou 1 h) e a pausa antes de cada reescrita.
Pontos = dolar x peso do modelo no semanal (Fable 2,09, Sonnet 1,52)."""
import json, sys, collections, statistics
from datetime import datetime
D, DESDE = sys.argv[1], sys.argv[2]
BASE = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10), 'haiku': (1, 1.25, 2, 0.10, 5)}
PESO = {'fable': 2.09, 'opus': 1.0, 'sonnet': 1.52, 'haiku': 1.0}
def fam(mo):
    return next((k for k in PRECO if k in mo), 'opus')
def ts(s):
    return datetime.fromisoformat(s.replace('Z', '+00:00'))
G = collections.defaultdict(collections.Counter)
PAUSAS = collections.defaultdict(list)
for i, r in enumerate(A):
    l = L.get(i)
    if not l or r['tipo'] == 'principal' or 'subagents' not in r['caminho'] or (r.get('primeiro') or '') < DESDE:
        continue
    chamadas = []; idx = {}
    with open(BASE + r['caminho'], 'rb') as fh:
        for line in fh:
            try:
                d = json.loads(line.decode('utf-8', 'replace'))
            except ValueError:
                continue
            m = d.get('message') or {}
            if d.get('type') == 'assistant' and m.get('usage') and m.get('model') not in (None, '<synthetic>'):
                if m['id'] not in idx:
                    idx[m['id']] = len(chamadas); chamadas.append({'u': m['usage'], 'mo': m['model'], 't0': d.get('timestamp'), 't1': d.get('timestamp')})
                c = chamadas[idx[m['id']]]
                c['t1'] = d.get('timestamp') or c['t1']
                if (m['usage'].get('output_tokens') or 0) >= (c['u'].get('output_tokens') or 0):
                    c['u'] = m['usage']
    papel = l['papel'] + ' (' + l['modelo'] + ')'
    g = G[papel]; g['agentes'] += 1
    ant = None
    for k, c in enumerate(chamadas):
        u = c['u']; f = fam(c['mo']); p = PRECO[f]; w = PESO[f]
        cc = u.get('cache_creation') or {}
        w1 = cc.get('ephemeral_1h_input_tokens') or 0
        wr = u.get('cache_creation_input_tokens') or 0; w5 = wr - w1
        rd = u.get('cache_read_input_tokens') or 0; inp = u.get('input_tokens') or 0; out = u.get('output_tokens') or 0
        cw = (w5 * p[1] + w1 * p[2]) / 1e6 * w
        g['ler'] += rd * p[3] / 1e6 * w
        g['entrada'] += inp * p[0] / 1e6 * w
        g['saida'] += out * p[4] / 1e6 * w
        g['w1'] += w1; g['w5'] += w5
        if k == 0:
            g['escrever_inicio'] += cw
        elif ant and rd < 0.6 * ant['tot']:
            g['reescrever'] += cw; g['n_reescritas'] += 1
            try:
                PAUSAS[papel].append((ts(c['t0']) - ts(ant['t1'])).total_seconds())
            except Exception:
                pass
        else:
            g['escrever_novo'] += cw
        ant = {'tot': inp + wr + rd, 't1': c['t1']}
        g['chamadas'] += 1
tot = sum(sum(v for k, v in g.items() if k in ('ler', 'entrada', 'saida', 'escrever_inicio', 'reescrever', 'escrever_novo')) for g in G.values())
cols = ['ler', 'escrever_novo', 'escrever_inicio', 'reescrever', 'saida', 'entrada']
print(f'desde {DESDE}: {tot:.0f} US$-equivalente-Opus nos agentes')
print('papel | % dos agentes | chamadas | ' + ' | '.join(cols) + ' | reescritas | pausa mediana antes da reescrita (s) | escrita em 1 h')
S = collections.Counter()
for p, g in sorted(G.items(), key=lambda x: -sum(x[1][k] for k in cols)):
    t = sum(g[k] for k in cols)
    for k in cols + ['n_reescritas', 'chamadas', 'w1', 'w5']:
        S[k] += g[k]
    if t / tot < 0.01:
        continue
    pa = PAUSAS[p]
    print(f"{p} | {100*t/tot:.0f}% | {g['chamadas']} | " + ' | '.join(f"{100*g[k]/t:.0f}%" for k in cols)
          + f" | {g['n_reescritas']} | {statistics.median(pa):.0f} | {100*g['w1']/max(1,g['w1']+g['w5']):.0f}%" if pa else
          f"{p} | {100*t/tot:.0f}% | {g['chamadas']} | " + ' | '.join(f"{100*g[k]/t:.0f}%" for k in cols) + f" | 0 | - | {100*g['w1']/max(1,g['w1']+g['w5']):.0f}%")
print('TODOS | 100% | ' + f"{S['chamadas']} | " + ' | '.join(f"{100*S[k]/tot:.0f}%" for k in cols) + f" | {S['n_reescritas']} | | {100*S['w1']/max(1,S['w1']+S['w5']):.0f}%")
todas = [x for v in PAUSAS.values() for x in v]
if todas:
    todas.sort()
    print('pausas antes das reescritas (s): p10', round(todas[len(todas)//10]), 'mediana', round(statistics.median(todas)), 'p90', round(todas[9*len(todas)//10]), '| acima de 300 s:', sum(1 for x in todas if x > 300), 'de', len(todas))
