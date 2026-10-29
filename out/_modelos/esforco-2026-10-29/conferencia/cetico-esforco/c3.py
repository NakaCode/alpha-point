"""C3: 29/10 01:00-10:40 BRT, por dono/tipo/esforco, em US$ e em pontos ponderados (Fable 2,09x, Sonnet 1,52x o preco; base 24,7)."""
import json, csv, collections
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10), 'haiku': (0.10, 0.125, 0.20, 0.01, 0.50)}
PESO = {'opus': 1, 'fable': 2.09, 'sonnet': 1.52, 'haiku': 1}
def fam(m):
    for k in PRECO:
        if k in m: return k
a0, a1 = '2026-10-29T04:00:00Z', '2026-10-29T13:40:00Z'
por = collections.Counter(); pts = collections.Counter(); ef = collections.Counter(); efp = collections.Counter()
papel = collections.Counter(); papelp = collections.Counter()
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        if not (a0 <= row['ts'] < a1): continue
        f = fam(row['modelo']); p = PRECO.get(f)
        if not p: continue
        e, w5, w1, r, o = (int(row[k]) for k in ('entrada', 'escrita_5m', 'escrita_1h', 'leitura', 'saida'))
        c = (e*p[0] + w5*p[1] + w1*p[2] + r*p[3] + o*p[4]) / 1e6
        i = int(row['arq']); l = L.get(i, {})
        tipo = 'conversa' if A[i]['tipo'] == 'principal' else 'agente'
        dono = l.get('dono', '?')
        por[(dono, tipo)] += c; pts[(dono, tipo)] += c * PESO[f]
        ef[(tipo, row['effort'])] += c; efp[(tipo, row['effort'])] += c * PESO[f]
        k = (l.get('papel', '?') if tipo == 'agente' else 'conversa', f)
        papel[k] += c; papelp[k] += c * PESO[f]
T = sum(por.values()); TP = sum(pts.values())
print(f'US$ {T:.0f}; Opus-equivalente {TP:.0f} = {TP/24.7:.0f} pontos a 24,7')
for k in sorted(por, key=lambda k: -por[k]):
    print(k, f'US$ {por[k]:.0f} ({100*por[k]/T:.0f} %) | ponderado {100*pts[k]/TP:.0f} %')
print('-- por tipo e esforco --')
for k in sorted(ef, key=lambda k: -ef[k]):
    print(k, f'US$ {ef[k]:.0f} ({100*ef[k]/T:.1f} %) | ponderado {100*efp[k]/TP:.1f} %')
print('-- por papel e modelo --')
for k in sorted(papel, key=lambda k: -papel[k])[:14]:
    print(k, f'US$ {papel[k]:.0f} ({100*papel[k]/T:.0f} %) | ponderado {100*papelp[k]/TP:.0f} %')
