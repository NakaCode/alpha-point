"""Dados para a pagina didatica: (1) o tamanho de cada secao do CLAUDE.md, (2) o custo das reescritas por tipo de pausa,
(3) a pilha de um agente real, volta a volta, com o tipo de cada volta. Grava pagina-dados.json ao lado."""
import json, sys, re, collections
from datetime import datetime
D, DESDE, AGENTE = sys.argv[1], sys.argv[2], sys.argv[3]
R_MD = 2.2
BASE = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10)}
PESO = {'fable': 2.09, 'opus': 1.0, 'sonnet': 1.52}
fam = lambda mo: next((k for k in PRECO if k in mo), 'opus')
ts = lambda s: datetime.fromisoformat(s.replace('Z', '+00:00'))
out = {}
# 1. as secoes do CLAUDE.md
txt = open('C:/projetos/alpha-point/CLAUDE.md', encoding='utf-8').read()
partes = re.split(r'(?m)^(?=## )', txt)
secs = []
for p in partes:
    m = re.match(r'## (.*)', p)
    secs.append({'secao': m.group(1).strip() if m else '(topo)', 'chars': len(p), 'mil_tokens': round(len(p) / R_MD / 1000, 1)})
out['claude_md'] = {'chars': len(txt), 'mil_tokens': round(len(txt) / R_MD / 1000, 1), 'secoes': secs}
# 2 e 3
FIXO = re.compile(r'\.claude/agents/|\.claude\\agents\\|marca[\\/]|CLAUDE\.md|ilustracao[\\/]|templates-cena|contratos|knowledge|setores[\\/]REGIMENTO|seed[\\/]|regua[\\/]')
DADO = re.compile(r'(regencia|espelho|conceito-visual|textos-tela|words|transcricao|_pesquisa|qc[\\/]|_tmp[\\/]setores|_portao|roteiro|pautas|PROCEDENCIA|conferencia-midia|pauta-geo)')
QUADRO = re.compile(r'ffmpeg|ffprobe|contact|folha|sheet|quadro\.mjs|xstack|hstack|vstack|\.png|\.jpg', re.I)
PORTAO = re.compile(r'qc-cena|portao-mapa|portao-margens|chaves-nos-portoes|scripts/qc-|check-overlap|probe-elemento|validar-contrato|_audit-til')
def classe(b):
    n = b.get('name', ''); i = b.get('input') or {}
    alvo = (i.get('file_path') or '') + ' ' + (i.get('command') or '') + ' ' + (i.get('pattern') or '') + ' ' + (i.get('path') or '')
    if n in ('Edit', 'Write'): return 'construir'
    if PORTAO.search(alvo): return 'portoes'
    if n == 'Read' and re.search(r'\.(png|jpe?g|webp)$', i.get('file_path') or '', re.I): return 'ver_quadros'
    if QUADRO.search(alvo) and n in ('Bash', 'PowerShell'): return 'montar_quadros'
    if re.search(r'renderizar|preparar-cena|sed -i', alvo): return 'construir'
    if DADO.search(alvo): return 'procurar_dado'
    if FIXO.search(alvo): return 'ler_fixo'
    return 'outro'
reesc = collections.Counter(); agente = None
for i, r in enumerate(A):
    l = L.get(i)
    if not l or r['tipo'] == 'principal' or 'subagents' not in r['caminho'] or (r.get('primeiro') or '') < DESDE:
        continue
    chamadas = []; idx = {}; instr = 0
    with open(BASE + r['caminho'], 'rb') as fh:
        for line in fh:
            try:
                d = json.loads(line.decode('utf-8', 'replace'))
            except ValueError:
                continue
            if d.get('type') == 'attachment' and (d.get('attachment') or {}).get('type') == 'instructions':
                instr = sum(len(f.get('content') or '') for f in d['attachment'].get('files', []))
            m = d.get('message') or {}
            if d.get('type') == 'assistant' and m.get('usage') and m.get('model') not in (None, '<synthetic>'):
                if m['id'] not in idx:
                    idx[m['id']] = len(chamadas); chamadas.append({'u': m['usage'], 'mo': m['model'], 't0': d['timestamp'], 't1': d['timestamp'], 'c': []})
                c = chamadas[idx[m['id']]]; c['t1'] = d['timestamp']
                if (m['usage'].get('output_tokens') or 0) >= (c['u'].get('output_tokens') or 0):
                    c['u'] = m['usage']
                for b in m.get('content') or []:
                    if isinstance(b, dict) and b.get('type') == 'tool_use':
                        c['c'].append(classe(b))
    eu = r['caminho'].endswith(AGENTE)
    voltas = []; ant = None
    for k, c in enumerate(chamadas):
        u = c['u']; f = fam(c['mo']); p = PRECO[f]; w = PESO[f]
        cc = u.get('cache_creation') or {}; w1 = cc.get('ephemeral_1h_input_tokens') or 0
        wr = u.get('cache_creation_input_tokens') or 0; rd = u.get('cache_read_input_tokens') or 0
        inp = u.get('input_tokens') or 0; o = u.get('output_tokens') or 0
        cw = ((wr - w1) * p[1] + w1 * p[2]) / 1e6 * w
        tot = inp + wr + rd
        if k and ant and rd < 0.6 * ant['tot']:
            pausa = (ts(c['t0']) - ts(ant['t1'])).total_seconds()
            reesc['mais_de_5min' if pausa > 300 else 'ate_5min'] += cw
        if eu:
            voltas.append({'k': k + 1, 'ctx': round(tot / 1000, 1), 'ler': round(rd * p[3] / 1e6 * w, 4), 'gravar': round(cw, 4),
                           'resposta': round(o * p[4] / 1e6 * w, 4), 'tipo': (c['c'] or ['pensar'])[0]})
        ant = {'tot': tot, 't1': c['t1']}
    if eu:
        agente = {'arquivo': r['caminho'][-40:], 'papel': l['papel'], 'modelo': l['modelo'], 'claude_md_mil_tokens': round(instr / R_MD / 1000, 1), 'voltas': voltas}
out['reescritas_pts'] = {k: round(v, 1) for k, v in reesc.items()}
out['agente'] = agente
json.dump(out, open(D + '/../pagina-dados.json', 'w', encoding='utf-8'), ensure_ascii=False)
print(json.dumps({'claude_md': {k: v for k, v in out['claude_md'].items() if k != 'secoes'}, 'reescritas_pts': out['reescritas_pts']}, ensure_ascii=False))
for s in out['claude_md']['secoes']:
    print(f"  {s['mil_tokens']:5.1f} mil  {s['secao'][:70]}")
if agente:
    v = agente['voltas']
    print(agente['papel'], agente['modelo'], len(v), 'voltas; ctx', v[0]['ctx'], '->', v[-1]['ctx'], '; custo', round(sum(x['ler'] + x['gravar'] + x['resposta'] for x in v), 2),
          '; tipos', collections.Counter(x['tipo'] for x in v).most_common())
