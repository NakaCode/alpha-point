"""C6: lista os despachos de cada papel nas duas janelas, com a descricao e o comeco do pedido."""
import json, sys, collections
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
B = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = json.load(open(D + '/por-agente.json', encoding='utf-8'))
JAN = {'Peru': ('2026-10-19 00:00', '2026-10-24 12:00'), 'Atlantico': ('2026-10-28 22:00', '2026-10-29 23:59')}
papeis = sys.argv[1].split(',')
def pedido(path):
    with open(path, 'rb') as fh:
        for line in fh:
            if b'"type":"user"' not in line: continue
            d = json.loads(line)
            if d.get('type') != 'user': continue
            c = (d.get('message') or {}).get('content')
            if isinstance(c, list):
                c = ' '.join(b.get('text', '') for b in c if isinstance(b, dict) and b.get('type') == 'text')
            return (c or '').replace('\n', ' ')
    return ''
out = []
for l in L:
    if l['tipo'] == 'principal' or l['papel'] not in papeis: continue
    for v, (a, b) in JAN.items():
        if a <= l['data'] <= b:
            p = pedido(B + A[l['i']]['caminho'])
            out.append((l['papel'], v, l['data'], l['modelo'], l['effort'], l['n'], round(l['cost'], 2), round(l['out'] / l['n']), round(l['ctx'] / l['n'] / 1000), l['dono'], l['desc'][:70], len(p), p[:int(sys.argv[2]) if len(sys.argv) > 2 else 300]))
json.dump(out, open('c6a-' + papeis[0] + '.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
for o in sorted(out):
    print(' | '.join(str(x) for x in o[:12]))
