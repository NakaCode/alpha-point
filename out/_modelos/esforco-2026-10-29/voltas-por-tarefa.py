"""Em que os agentes e as conversas gastam as voltas: cada resposta classificada pela ferramenta que ela chamou.
Uso: python -X utf8 -B voltas-por-tarefa.py <pasta consumo-esforco> [desde-ISO-Z]
"""
import json, sys, os, re, collections
D = sys.argv[1]
DESDE = sys.argv[2] if len(sys.argv) > 2 else '2026-10-29T01:00:00Z'  # 28/10 22:00 BRT
BASE = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10), 'haiku': (0.10, 0.125, 0.20, 0.01, 0.50)}
def fam(m):
    for k in PRECO:
        if k in m: return k
CATS = [
    ('portao', r'qc-cena|portao-mapa|portao-margens|chaves-nos-portoes|scripts/qc-|check-overlap|probe-elemento|scripts/shot|validar-contrato|medir-imagem|_audit-til|qc-rodape|qc-video|qc-procedencia|conferir-copias'),
    ('render/quadro', r'renderizar\.mjs|quadro\.mjs|ffmpeg|ffprobe|linha-do-tempo\.mjs|folhas-espectador'),
    ('preparar-cena', r'preparar-cena|geo-|buscar-midia|_commons|mapa/'),
    ('git/regie', r'\bgit\b|regie'),
    ('python', r'python'),
    ('node outro', r'\bnode\b'),
    ('ler texto (shell)', r'^\s*(cat|head|tail|sed|grep|rg|ls|find|wc|diff|sha1sum|sha256sum|stat|jq|Get-Content|Select-String)\b'),
]
def cat_cmd(c):
    for nome, pat in CATS:
        if re.search(pat, c):
            return nome
    return 'shell outro'
def cat_tool(b):
    n = b.get('name', '')
    i = b.get('input') or {}
    if n in ('Bash', 'PowerShell', 'Monitor'):
        return cat_cmd(i.get('command') or '')
    if n == 'Read':
        p = (i.get('file_path') or '').lower()
        if p.endswith(('.png', '.jpg', '.jpeg', '.webp', '.gif')):
            return 'ver imagem'
        return 'ler texto'
    if n in ('Grep', 'Glob'):
        return 'ler texto'
    if n in ('Edit', 'Write', 'NotebookEdit'):
        return 'editar'
    if n in ('Agent', 'Workflow', 'Task'):
        return 'despachar agente'
    if 'send_message' in n or 'list_events' in n or n == 'SendMessage' or 'get_session' in n:
        return 'mensagens setor/Sala'
    if 'Browser' in n or 'chrome' in n:
        return 'navegador'
    if n in ('WebFetch', 'WebSearch'):
        return 'web'
    if n == 'StructuredOutput':
        return 'entregar resultado'
    return 'outra: ' + n
def ler(path, desde):
    resp = {}
    with open(path, 'rb') as fh:
        for line in fh:
            if b'"type":"assistant"' not in line:
                continue
            d = json.loads(line)
            if d.get('type') != 'assistant':
                continue
            ts = d.get('timestamp') or ''
            if ts < desde:
                continue
            m = d.get('message') or {}
            u = m.get('usage'); mo = m.get('model')
            if not u or not mo or mo == '<synthetic>':
                continue
            mid = m.get('id')
            r = resp.setdefault(mid, {'u': u, 'mo': mo, 'tools': []})
            if (u.get('output_tokens') or 0) >= (r['u'].get('output_tokens') or 0):
                r['u'] = u
            for b in m.get('content') or []:
                if isinstance(b, dict) and b.get('type') == 'tool_use':
                    r['tools'].append(cat_tool(b))
    return resp
def custo(r):
    p = PRECO.get(fam(r['mo']))
    u = r['u']; cc = u.get('cache_creation') or {}
    w1 = cc.get('ephemeral_1h_input_tokens') or 0
    w5 = (u.get('cache_creation_input_tokens') or 0) - w1
    return ((u.get('input_tokens') or 0)*p[0] + w5*p[1] + w1*p[2] + (u.get('cache_read_input_tokens') or 0)*p[3] + (u.get('output_tokens') or 0)*p[4]) / 1e6
# quem entra: agentes que comecaram desde DESDE, e as conversas (Sala e setores) nas respostas desde DESDE
grupos = collections.defaultdict(lambda: {'resp': 0, 'custo': 0.0, 'cat': collections.Counter(), 'cat_custo': collections.Counter(), 'arqs': 0})
for i, r in enumerate(A):
    l = L.get(i)
    if not l: continue
    if r['tipo'] == 'principal':
        if l['dono'] == 'peca-conversa' or l['dono'] == 'Sala-reserva': continue
        g = 'conversa ' + l['dono']
    else:
        if (r.get('primeiro') or '') < DESDE: continue
        g = l['papel'] + ' (' + l['modelo'] + ')'
    res = ler(BASE + r['caminho'], DESDE)
    if not res: continue
    G = grupos[g]; G['arqs'] += 1
    for x in res.values():
        c = custo(x)
        G['resp'] += 1; G['custo'] += c
        ts = x['tools'] or ['so texto / pensar']
        for t in ts:
            G['cat'][t] += 1 / len(ts)
            G['cat_custo'][t] += c / len(ts)
tot = sum(G['custo'] for G in grupos.values())
print(f'desde {DESDE}: US$ {tot:.0f} em {sum(G["resp"] for G in grupos.values())} respostas\n')
for g, G in sorted(grupos.items(), key=lambda x: -x[1]['custo']):
    if G['custo'] < 5: continue
    print(f"== {g}: {G['arqs']} arquivo(s), {G['resp']} respostas, US$ {G['custo']:.0f} ({100*G['custo']/tot:.0f}% do total)")
    for t, v in G['cat_custo'].most_common(9):
        print(f"   {t:24s} {100*G['cat'][t]/G['resp']:5.1f}% das respostas  US$ {v:6.1f}")
