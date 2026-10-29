"""A Sala por esforco, os periodos (ultracode x max), a calibracao do semanal e Peru x Atlantico por papel."""
import json, csv, sys, collections, statistics, datetime, re
D = sys.argv[1]
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10),
         'haiku': (0.10, 0.125, 0.20, 0.01, 0.50)}
SALAS = ('f42bc036', '6abb9076', '806a2100')
def fam(m):
    for k in PRECO:
        if k in m: return k
    return 'outro'
def z(brt):  # 'YYYY-MM-DD HH:MM' BRT -> ISO Z
    t = datetime.datetime.strptime(brt, '%Y-%m-%d %H:%M') + datetime.timedelta(hours=3)
    return t.strftime('%Y-%m-%dT%H:%M:00Z')
rows = []
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        f = fam(row['modelo']); p = PRECO.get(f)
        if not p: continue
        e, w5, w1, r, o = (int(row[k]) for k in ('entrada', 'escrita_5m', 'escrita_1h', 'leitura', 'saida'))
        c = (e*p[0] + w5*p[1] + w1*p[2] + r*p[3] + o*p[4]) / 1e6
        rows.append((int(row['arq']), row['ts'], f, row['effort'] or '-', e, w5 + w1, r, o, c, int(row['thinking_ms'] or 0)))
# 1) a conversa da Sala por esforco
print('== CONVERSA DA SALA, POR ESFORCO (so Opus) ==')
g = collections.defaultdict(list)
for x in rows:
    a = A[x[0]]
    if a['tipo'] == 'principal' and a['sessao'][:8] in SALAS and x[2] == 'opus':
        g[x[3]].append(x)
print('esforco | respostas | saida/resp media | mediana | p90 | contexto/resp (mil) | US$/resp | US$ da saida/resp | US$ total')
for k, v in g.items():
    outs = sorted(x[7] for x in v)
    ctx = statistics.mean(x[4] + x[5] + x[6] for x in v) / 1000
    print(k, len(v), round(statistics.mean(outs)), outs[len(outs)//2], outs[int(len(outs)*0.9)], round(ctx),
          round(statistics.mean(x[8] for x in v), 3), round(statistics.mean(x[7] for x in v) * 20 / 1e6, 4), round(sum(x[8] for x in v)))
# a mesma coisa, so com contexto parecido (entre 150 e 350 mil tokens)
print('-- so respostas com contexto entre 150 e 350 mil --')
for k, v in g.items():
    vv = [x for x in v if 150e3 <= x[4] + x[5] + x[6] <= 350e3]
    if not vv: continue
    outs = sorted(x[7] for x in vv)
    print(k, len(vv), 'saida media', round(statistics.mean(outs)), 'mediana', outs[len(outs)//2], 'US$/resp', round(statistics.mean(x[8] for x in vv), 3))
# 2) a Sala por dia: conversa, workflows, Agent
print('\n== A SALA POR DIA (BRT): conversa | agentes de workflow | agentes avulsos (US$) ==')
dia = collections.defaultdict(lambda: [0.0, 0.0, 0.0, collections.Counter()])
for x in rows:
    a = A[x[0]]
    if a['sessao'][:8] not in SALAS: continue
    d = (datetime.datetime.fromisoformat(x[1].replace('Z', '+00:00')) - datetime.timedelta(hours=3)).strftime('%m-%d')
    if a['tipo'] == 'principal':
        dia[d][0] += x[8]; dia[d][3][x[3]] += 1
    elif a.get('wf'):
        dia[d][1] += x[8]
    else:
        dia[d][2] += x[8]
for d in sorted(dia):
    v = dia[d]
    print(d, round(v[0]), round(v[1]), round(v[2]), dict(v[3]))
# 3) calibracao do semanal em 29/10 (leituras da memoria do video)
print('\n== CALIBRACAO: US$ (preco de tabela) por ponto do semanal ==')
LEIT = [('2026-10-29 01:35', 3), ('2026-10-29 04:36', 11), ('2026-10-29 06:45', 25), ('2026-10-29 07:35', 28),
        ('2026-10-29 09:25', 40), ('2026-10-29 10:32', 40)]
for (t0, p0), (t1, p1) in zip(LEIT, LEIT[1:]):
    a0, a1 = z(t0), z(t1)
    c = sum(x[8] for x in rows if a0 <= x[1] < a1)
    print(t0, '->', t1, f'{p1-p0} pontos', f'US$ {c:.0f}', (f'= US$ {c/(p1-p0):.1f}/ponto' if p1 > p0 else ''))
a0, a1 = z(LEIT[0][0]), z(LEIT[-2][0])
c = sum(x[8] for x in rows if a0 <= x[1] < a1)
print('01:35 -> 09:25:', f'37 pontos, US$ {c:.0f} = US$ {c/37:.1f}/ponto')
# por modelo e esforco no intervalo
cc = collections.Counter()
for x in rows:
    if a0 <= x[1] < a1: cc[(x[2], x[3])] += x[8]
print('no intervalo, por modelo e esforco:', {k: round(v) for k, v in cc.most_common()})
# 4) marcas do ultracode na conversa da Sala
print('\n== MARCAS DO ULTRACODE NA SALA ==')
B = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
for s in ('f42bc036-0fdc-43ca-af3a-3895cd6017bd', '6abb9076-59b2-4f2c-ba1f-4752c77f4fe3'):
    vistos = collections.Counter(); prim = {}; ult = {}
    with open(B + s + '.jsonl', 'rb') as fh:
        for line in fh:
            if b'ltracode' not in line: continue
            m = re.search(rb'"timestamp":"([^"]+)"', line)
            ts = m.group(1).decode() if m else '?'
            for pat in (rb'ultracode is on', rb'Ultracode is on', rb'ultracode is off', rb'Ultracode is off', rb'opting this turn', rb'ultracode on', rb'ultracode off'):
                if pat in line:
                    k = pat.decode(); vistos[k] += 1; prim.setdefault(k, ts); ult[k] = ts
    print(s[:8], dict(vistos), {k: (prim[k][:16], ult[k][:16]) for k in prim})
