"""Quantos caracteres de texto do canal cabem num token: mede o salto de contexto depois de cada Read grande de .md
(marca/, .claude/agents/, setores/, CLAUDE.md), descontada a saida da chamada. Imprime a mediana e os casos."""
import json, sys, re, statistics
D, DESDE = sys.argv[1], sys.argv[2]
BASE = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
ALVO = re.compile(r'(marca[\\/].*\.md|\.claude[\\/]agents[\\/].*\.md|setores[\\/].*\.md|CLAUDE\.md)$')
def tot(u):
    return (u.get('input_tokens') or 0) + (u.get('cache_creation_input_tokens') or 0) + (u.get('cache_read_input_tokens') or 0)
casos = []
for r in A:
    if r['tipo'] == 'principal' or (r.get('primeiro') or '') < DESDE or 'subagents' not in r['caminho']:
        continue
    chamadas = []; idx = {}; usos = {}; resultados = {}
    with open(BASE + r['caminho'], 'rb') as fh:
        for line in fh:
            try:
                d = json.loads(line.decode('utf-8', 'replace'))
            except ValueError:
                continue
            m = d.get('message') or {}
            if d.get('type') == 'assistant' and m.get('usage') and m.get('model') not in (None, '<synthetic>'):
                if m['id'] not in idx:
                    idx[m['id']] = len(chamadas); chamadas.append({'u': m['usage'], 'tools': []})
                c = chamadas[idx[m['id']]]
                if (m['usage'].get('output_tokens') or 0) >= (c['u'].get('output_tokens') or 0):
                    c['u'] = m['usage']
                for b in m.get('content') or []:
                    if isinstance(b, dict) and b.get('type') == 'tool_use':
                        c['tools'].append(b)
            elif d.get('type') == 'user' and isinstance(m.get('content'), list):
                for b in m['content']:
                    if isinstance(b, dict) and b.get('type') == 'tool_result':
                        cc = b.get('content')
                        if isinstance(cc, list):
                            cc = ''.join(x.get('text', '') for x in cc if isinstance(x, dict))
                        resultados[b.get('tool_use_id')] = cc or ''
    for k in range(len(chamadas) - 1):
        c = chamadas[k]
        if len(c['tools']) != 1 or c['tools'][0].get('name') != 'Read':
            continue
        fp = (c['tools'][0].get('input') or {}).get('file_path') or ''
        if not ALVO.search(fp):
            continue
        res = resultados.get(c['tools'][0].get('id'), '')
        if len(res) < 15000:
            continue
        out = c['u'].get('output_tokens') or 0
        if out > 800:
            continue
        delta = tot(chamadas[k + 1]['u']) - tot(c['u']) - out
        if delta <= 0:
            continue
        sem_num = re.sub(r'(?m)^\s*\d+\t', '', res)
        casos.append((len(sem_num) / delta, len(res) / delta, fp.split('alpha-point')[-1], len(res), delta))
casos.sort()
print(len(casos), 'casos')
if casos:
    print('chars (sem o numero de linha) por token: mediana', round(statistics.median(x[0] for x in casos), 2),
          '| p25', round(casos[len(casos) // 4][0], 2), '| p75', round(casos[3 * len(casos) // 4][0], 2))
    vistos = set()
    for x in casos:
        if x[2] in vistos:
            continue
        vistos.add(x[2])
        print(f'  {x[0]:.2f} c/t | {x[2]} | {x[3]} chars -> {x[4]} tokens')
