"""As mensagens do app sobre o ultracode na Sala, e o consumo de 29/10 por dono e papel."""
import json, csv, sys, collections, re, datetime
D = sys.argv[1]
B = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
print('== O QUE O APP DISSE SOBRE O ULTRACODE (fora das ferramentas) ==')
for s in ('f42bc036-0fdc-43ca-af3a-3895cd6017bd', '6abb9076-59b2-4f2c-ba1f-4752c77f4fe3', '806a2100-003e-43df-8f44-a59619def589'):
    vistos = {}
    with open(B + s + '.jsonl', 'rb') as fh:
        for line in fh:
            if b'ltracode' not in line or line.startswith(b'{"type":"api-request'):
                continue
            try:
                d = json.loads(line)
            except Exception:
                continue
            if d.get('type', '').startswith('api-request') or d.get('type') == 'assistant':
                continue
            txt = json.dumps(d, ensure_ascii=False)
            for m in re.finditer(r'[Uu]ltracode', txt):
                trecho = txt[max(0, m.start() - 160): m.end() + 160].replace('\\n', ' ')
                chave = re.sub(r'\d', '#', trecho[100:260])
                if chave in vistos:
                    vistos[chave][1] = d.get('timestamp'); vistos[chave][2] += 1
                else:
                    vistos[chave] = [d.get('timestamp'), d.get('timestamp'), 1, d.get('type'), trecho]
    for k, v in sorted(vistos.items(), key=lambda x: x[1][0] or ''):
        if v[3] == 'user' and 'pasted' not in v[4] and 'ultracode' in v[4].lower() and v[2] < 3 and 'system-reminder' not in v[4]:
            pass
        print(s[:8], (v[0] or '')[:16], '..', (v[1] or '')[:16], f'x{v[2]}', v[3], '|', v[4][60:330])
    print()
# consumo de 29/10 (BRT) por dono e papel
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10), 'haiku': (0.10, 0.125, 0.20, 0.01, 0.50)}
def fam(m):
    for k in PRECO:
        if k in m: return k
a0, a1 = '2026-10-29T04:00:00Z', '2026-10-29T13:40:00Z'
por = collections.Counter(); por_papel = collections.Counter()
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        if not (a0 <= row['ts'] < a1): continue
        f = fam(row['modelo']); p = PRECO.get(f)
        if not p: continue
        e, w5, w1, r, o = (int(row[k]) for k in ('entrada', 'escrita_5m', 'escrita_1h', 'leitura', 'saida'))
        c = (e*p[0] + w5*p[1] + w1*p[2] + r*p[3] + o*p[4]) / 1e6
        i = int(row['arq']); l = L.get(i, {})
        dono = l.get('dono', '?'); tipo = 'conversa' if A[i]['tipo'] == 'principal' else 'agentes'
        por[(dono, tipo)] += c
        papel = l.get('papel', '?') if tipo == 'agentes' else 'conversa ' + dono
        por_papel[(papel, f, row['effort'] or '-')] += c
tot = sum(por.values())
print(f'== 29/10, 01:00-10:40 BRT: US$ {tot:.0f} ==')
for k, v in por.most_common():
    print(k, round(v), f'{100*v/tot:.0f}%')
print('-- por papel, modelo e esforco --')
for k, v in por_papel.most_common(25):
    print(k, round(v), f'{100*v/tot:.0f}%')
