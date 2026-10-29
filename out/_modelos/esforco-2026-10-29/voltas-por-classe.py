"""Cada volta dos agentes numa classe: ler doc fixo, ler dado da cena, quadros/folhas, portoes, construir, outro.
Peso do semanal: Fable x2.09 e Sonnet x1.52 por dolar (cetico de 08/10, reconferido em 29/10)."""
import json, sys, re, collections
D = sys.argv[1]; DESDE = sys.argv[2]
BASE = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10)}
PESO = {'fable': 2.09, 'opus': 1.0, 'sonnet': 1.52}
FIXO = re.compile(r'\.claude/agents/|marca/|CLAUDE\.md|ilustracao/|templates-cena/|contratos/|knowledge/|setores/REGIMENTO|seed/|regua/|_rig\.js|ORIGEM|ferramentas/[^ ]*\.md|LEIA-ME|APRENDIZADOS')
DADO = re.compile(r'out/[a-z-]+/(regencia|espelho|conceito-visual|textos-tela|words|transcricao|_pesquisa/|qc/|_tmp/setores/|_portao|roteiro)|roteiros/|pautas/|_media/[^ ]*PROCEDENCIA|conferencia-midia|pauta-geo')
QUADRO = re.compile(r'ffmpeg|ffprobe|contact|folha|sheet|quadro\.mjs|xstack|hstack|vstack|\.png|\.jpg', re.I)
PORTAO = re.compile(r'qc-cena|portao-mapa|portao-margens|chaves-nos-portoes|scripts/qc-|check-overlap|probe-elemento|validar-contrato|_audit-til')
CONSTR = re.compile(r'graphics/s\d+\.html|renderizar\.mjs|preparar-cena|laudo\.json')
def classe(b):
    n = b.get('name', ''); i = b.get('input') or {}
    alvo = (i.get('file_path') or '') + ' ' + (i.get('command') or '') + ' ' + (i.get('pattern') or '') + ' ' + (i.get('path') or '')
    if n in ('Edit', 'Write'):
        return 'construir/editar'
    if PORTAO.search(alvo): return 'portoes'
    if n == 'Read' and re.search(r'\.(png|jpe?g|webp)$', i.get('file_path') or '', re.I): return 'ver quadros'
    if QUADRO.search(alvo) and n in ('Bash', 'PowerShell'): return 'montar quadros/folhas'
    if CONSTR.search(alvo) and (n in ('Bash', 'PowerShell')) and re.search(r'sed -i|renderizar|preparar-cena|>\s*\S*graphics', alvo): return 'construir/editar'
    if DADO.search(alvo): return 'ler dado da cena'
    if FIXO.search(alvo): return 'ler doc fixo'
    if n == 'StructuredOutput': return 'entregar'
    return 'outro'
def custo(mo, u):
    f = next(k for k in PRECO if k in mo); p = PRECO[f]
    cc = u.get('cache_creation') or {}; w1 = cc.get('ephemeral_1h_input_tokens') or 0
    w5 = (u.get('cache_creation_input_tokens') or 0) - w1
    return f, ((u.get('input_tokens') or 0)*p[0] + w5*p[1] + w1*p[2] + (u.get('cache_read_input_tokens') or 0)*p[3] + (u.get('output_tokens') or 0)*p[4]) / 1e6
G = collections.defaultdict(lambda: collections.Counter())
N = collections.defaultdict(collections.Counter)
TOT = collections.Counter()
for i, r in enumerate(A):
    l = L.get(i)
    if not l or r['tipo'] == 'principal' or (r.get('primeiro') or '') < DESDE: continue
    resp = {}
    with open(BASE + r['caminho'], 'rb') as fh:
        for line in fh:
            if b'"type":"assistant"' not in line: continue
            d = json.loads(line)
            if d.get('type') != 'assistant': continue
            m = d.get('message') or {}; u = m.get('usage'); mo = m.get('model')
            if not u or not mo or mo == '<synthetic>': continue
            x = resp.setdefault(m.get('id'), {'u': u, 'mo': mo, 'c': []})
            if (u.get('output_tokens') or 0) >= (x['u'].get('output_tokens') or 0): x['u'] = u
            for b in m.get('content') or []:
                if isinstance(b, dict) and b.get('type') == 'tool_use':
                    x['c'].append(classe(b))
    papel = l['papel'] + ' (' + l['modelo'] + ')'
    for x in resp.values():
        f, c = custo(x['mo'], x['u'])
        pts = c * PESO.get(f, 1)
        cs = x['c'] or ['pensar/texto']
        for k in cs:
            G[papel][k] += pts / len(cs); N[papel][k] += 1 / len(cs)
        TOT[papel] += pts
tudo = sum(TOT.values())
print(f'desde {DESDE}: {tudo:.0f} US$-equivalente-Opus nos agentes\n')
CL = ['ler doc fixo', 'ler dado da cena', 'montar quadros/folhas', 'ver quadros', 'portoes', 'construir/editar', 'outro', 'pensar/texto', 'entregar']
print('papel | % do total dos agentes | ' + ' | '.join(CL))
for p in sorted(TOT, key=lambda k: -TOT[k]):
    if TOT[p] / tudo < 0.01: continue
    print(f"{p} | {100*TOT[p]/tudo:.0f}% | " + ' | '.join(f"{100*G[p][k]/TOT[p]:.0f}%" for k in CL))
