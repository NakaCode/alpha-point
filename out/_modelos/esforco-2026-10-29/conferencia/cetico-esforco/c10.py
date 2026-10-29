"""C10: custo dos agentes de workflow por dia, por sessao-mae, separando especialistas (producao) de agentes gerais (ceticos, leitores, bancadas)."""
import json, csv, collections, glob, os, re, datetime
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
ESP = set(os.path.basename(f)[:-3] for f in glob.glob('C:/projetos/alpha-point/.claude/agents/*.md'))
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10), 'haiku': (0.10, 0.125, 0.20, 0.01, 0.50)}
def fam(m):
    for k in PRECO:
        if k in m: return k
NOME = {'f42bc036': 'Sala', '6abb9076': 'Reserva', '806a2100': 'Sala', '8b49bdf9': 'setor', 'dd3c4500': 'setor', '97895d01': 'setor', '90213555': 'setor', '0540596a': 'setor'}
g = collections.defaultdict(collections.Counter)
tot_dia = collections.Counter()
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        f = fam(row['modelo']); p = PRECO.get(f)
        if not p: continue
        a = int(row['arq']); r = A[a]
        e, w5, w1, rr, o = (int(row[k]) for k in ('entrada', 'escrita_5m', 'escrita_1h', 'leitura', 'saida'))
        c = (e*p[0] + w5*p[1] + w1*p[2] + rr*p[3] + o*p[4]) / 1e6
        dia = (datetime.datetime.fromisoformat(row['ts'].replace('Z', '+00:00')) - datetime.timedelta(hours=3)).strftime('%m-%d')
        tot_dia[dia] += c
        dono = NOME.get(r['sessao'][:8], 'outra')
        if r['tipo'] == 'principal':
            k = 'conversa'
        else:
            t = (r.get('meta') or {}).get('agentType')
            esp = 'esp' if t in ESP else 'geral'
            k = ('wf-' if r.get('wf') else 'agent-') + esp
        g[(dia, dono)][k] += c
print('dia | dono | conversa | wf-especialistas | wf-gerais | Agent-especialistas | Agent-gerais | total do dia (todas)')
for (dia, dono) in sorted(g):
    if dia < '09-30': continue
    x = g[(dia, dono)]
    if sum(x.values()) < 20: continue
    print(dia, dono, *(round(x[k]) for k in ('conversa', 'wf-esp', 'wf-geral', 'agent-esp', 'agent-geral')), round(tot_dia[dia]), sep=' | ')
