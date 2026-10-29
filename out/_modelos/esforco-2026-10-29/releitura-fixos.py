"""Quanto do custo dos agentes e reler texto fixo a cada volta: o CLAUDE.md (+ MEMORY.md) que o Claude Code injeta em todo
agente, e os documentos fixos que o agente le (oficio, roupa, marca, regimento, ilustracao, molde).
Para cada chamada k: fixo_k = CLAUDE.md + docs fixos lidos antes de k. Custo do fixo = a parte do cache lido (ou escrito)
que e fixo, ao preco do modelo. Pontos = dolar x peso do modelo no semanal (Fable 2,09, Sonnet 1,52).
Uso: python -X utf8 -B releitura-fixos.py <pasta consumo-esforco> <desde ISO Z> [chars_por_token_md=2.2] [chars_por_token_read=2.0]"""
import json, sys, re, collections
D, DESDE = sys.argv[1], sys.argv[2]
R_MD = float(sys.argv[3]) if len(sys.argv) > 3 else 2.2
R_RD = float(sys.argv[4]) if len(sys.argv) > 4 else 2.0
BASE = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10), 'haiku': (1, 1.25, 2, 0.10, 5)}
PESO = {'fable': 2.09, 'opus': 1.0, 'sonnet': 1.52, 'haiku': 1.0}
CLASSES = [
    ('oficio', re.compile(r'\.claude[\\/]agents[\\/]')),
    ('roupa', re.compile(r'marca[\\/]agentes[\\/]')),
    ('marca', re.compile(r'marca[\\/](identidade|voz|midia|embalagem|cta|pronuncias|acervos|_neutra)')),
    ('regimento', re.compile(r'setores[\\/]REGIMENTO')),
    ('ilustracao', re.compile(r'(^|[\\/])ilustracao[\\/]')),
    ('molde', re.compile(r'(^|[\\/])(knowledge|seed|regua|contratos|templates-cena)[\\/]')),
    ('claude_md', re.compile(r'CLAUDE\.md')),
]
def classe(b):
    i = b.get('input') or {}
    alvo = (i.get('file_path') or '') if b.get('name') == 'Read' else ((i.get('command') or '') if b.get('name') in ('Bash', 'PowerShell') else '')
    if b.get('name') in ('Bash', 'PowerShell') and not re.search(r'\b(cat|sed|head|tail|Get-Content|type)\b', alvo):
        return None
    for nome, pat in CLASSES:
        if pat.search(alvo):
            return nome
    return None
def fam(mo):
    return next((k for k in PRECO if k in mo), 'opus')
G = collections.defaultdict(lambda: collections.Counter())
for i, r in enumerate(A):
    l = L.get(i)
    if not l or r['tipo'] == 'principal' or 'subagents' not in r['caminho'] or (r.get('primeiro') or '') < DESDE:
        continue
    instr = 0; chamadas = []; idx = {}; res = {}
    with open(BASE + r['caminho'], 'rb') as fh:
        for line in fh:
            try:
                d = json.loads(line.decode('utf-8', 'replace'))
            except ValueError:
                continue
            if d.get('type') == 'attachment':
                a = d.get('attachment') or {}
                if a.get('type') == 'instructions':
                    instr = max(instr, sum(len(f.get('content') or '') for f in a.get('files', [])))
                continue
            m = d.get('message') or {}
            if d.get('type') == 'assistant' and m.get('usage') and m.get('model') not in (None, '<synthetic>'):
                if m['id'] not in idx:
                    idx[m['id']] = len(chamadas); chamadas.append({'u': m['usage'], 'mo': m['model'], 'tools': []})
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
                        res[b.get('tool_use_id')] = len(cc or '')
    if not chamadas:
        continue
    papel = l['papel'] + ' (' + l['modelo'] + ')'
    f_md = instr / R_MD
    docs = collections.Counter()
    g = G[papel]; g['agentes'] += 1
    for c in chamadas:
        u = c['u']; f = fam(c['mo']); p = PRECO[f]; w = PESO[f]
        cc = u.get('cache_creation') or {}
        w1 = cc.get('ephemeral_1h_input_tokens') or 0
        wr = u.get('cache_creation_input_tokens') or 0
        w5 = wr - w1
        rd = u.get('cache_read_input_tokens') or 0
        inp = u.get('input_tokens') or 0
        out = u.get('output_tokens') or 0
        custo = (inp * p[0] + w5 * p[1] + w1 * p[2] + rd * p[3] + out * p[4]) / 1e6
        g['pts'] += custo * w; g['chamadas'] += 1; g['ctx'] += inp + wr + rd
        pw = (w5 * p[1] + w1 * p[2]) / wr if wr else p[2]
        # a parte fixa desta chamada: o CLAUDE.md e os docs lidos antes
        for nome, tok in [('claude_md_auto', f_md)] + list(docs.items()):
            lido = min(tok, rd); rd -= lido
            escrito = min(tok - lido, wr); wr -= escrito
            g['fixo_' + nome] += (lido * p[3] + escrito * pw) / 1e6 * w
        g['fixo_tok'] += f_md + sum(docs.values())
        g['read_pts'] += (u.get('cache_read_input_tokens') or 0) * p[3] / 1e6 * w
        for b in c['tools']:
            k = classe(b)
            if k:
                docs[k] += res.get(b.get('id'), 0) / R_RD
tot = sum(g['pts'] for g in G.values())
print(f'desde {DESDE}: {tot:.0f} US$-equivalente-Opus nos agentes ({sum(g["agentes"] for g in G.values()):.0f} agentes)')
cols = ['claude_md_auto', 'oficio', 'roupa', 'marca', 'regimento', 'ilustracao', 'molde', 'claude_md']
print('papel | % dos agentes | agentes | contexto medio (mil) | fixo medio (mil) | releitura % | ' + ' | '.join(cols) + ' | fixo total')
soma = collections.Counter()
for p, g in sorted(G.items(), key=lambda x: -x[1]['pts']):
    for k in cols:
        soma[k] += g['fixo_' + k]
    soma['read'] += g['read_pts']
    if g['pts'] / tot < 0.01:
        continue
    fx = sum(g['fixo_' + k] for k in cols)
    print(f"{p} | {100*g['pts']/tot:.0f}% | {g['agentes']:.0f} | {g['ctx']/g['chamadas']/1000:.0f} | {g['fixo_tok']/g['chamadas']/1000:.0f} | {100*g['read_pts']/g['pts']:.0f}% | "
          + ' | '.join(f"{100*g['fixo_'+k]/g['pts']:.0f}%" for k in cols) + f" | {100*fx/g['pts']:.0f}%")
fx = sum(soma[k] for k in cols)
print('TODOS | 100% | | | | ' + f"{100*soma['read']/tot:.0f}% | " + ' | '.join(f"{100*soma[k]/tot:.1f}%" for k in cols) + f' | {100*fx/tot:.0f}%')
