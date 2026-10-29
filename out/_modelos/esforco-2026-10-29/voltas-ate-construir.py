"""Quantas voltas (e quanto custo) cada despacho gasta antes da 1a edicao do que entrega, e quantas vezes ele monta folha de quadros."""
import json, sys, re, collections, statistics
D = sys.argv[1]; DESDE = sys.argv[2]
BASE = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10)}
ENTREGA = re.compile(r'graphics/s\d+\.html|regencia\.json|espelho\.json|conceito-visual\.json|textos-tela\.json|qc/s\d+\.laudo\.json|laudo|_tmp/setores/')
def custo(mo, u):
    p = next(v for k, v in PRECO.items() if k in mo)
    cc = u.get('cache_creation') or {}; w1 = cc.get('ephemeral_1h_input_tokens') or 0
    w5 = (u.get('cache_creation_input_tokens') or 0) - w1
    return ((u.get('input_tokens') or 0)*p[0] + w5*p[1] + w1*p[2] + (u.get('cache_read_input_tokens') or 0)*p[3] + (u.get('output_tokens') or 0)*p[4]) / 1e6
R = collections.defaultdict(list)
for i, r in enumerate(A):
    l = L.get(i)
    if not l or r['tipo'] == 'principal' or (r.get('primeiro') or '') < DESDE: continue
    if l['papel'] not in ('mapista', 'editor-de-arte', 'regente-de-imagem', 'redator-de-tela', 'verificador-de-fatos', 'qc-visual', 'montador', 'diretor-de-arte'):
        continue
    resp = {}; ordem = []
    with open(BASE + r['caminho'], 'rb') as fh:
        for line in fh:
            if b'"type":"assistant"' not in line: continue
            d = json.loads(line)
            if d.get('type') != 'assistant': continue
            m = d.get('message') or {}; u = m.get('usage'); mo = m.get('model')
            if not u or not mo or mo == '<synthetic>': continue
            mid = m.get('id')
            if mid not in resp:
                resp[mid] = {'u': u, 'mo': mo, 'edit': False, 'folha': False}; ordem.append(mid)
            x = resp[mid]
            if (u.get('output_tokens') or 0) >= (x['u'].get('output_tokens') or 0): x['u'] = u
            for b in m.get('content') or []:
                if not (isinstance(b, dict) and b.get('type') == 'tool_use'): continue
                inp = b.get('input') or {}
                alvo = (inp.get('file_path') or '') + ' ' + (inp.get('command') or '')[:400]
                if b.get('name') in ('Edit', 'Write') and ENTREGA.search(alvo): x['edit'] = True
                if b.get('name') in ('Bash', 'PowerShell') and re.search(r'sed -i|> *\S*(graphics/s\d+\.html|regencia\.json|espelho\.json|textos-tela\.json|laudo)', alvo): x['edit'] = True
                if re.search(r'contact|folha|sheet|tile=|hstack|vstack|xstack|ffmpeg', alvo, re.I): x['folha'] = True
    if not ordem: continue
    cs = [custo(resp[k]['mo'], resp[k]['u']) for k in ordem]
    primeira = next((n for n, k in enumerate(ordem) if resp[k]['edit']), len(ordem))
    R[l['papel'] + ' (' + l['modelo'] + ')'].append({
        'voltas': len(ordem), 'antes': primeira, 'custo': sum(cs), 'custo_antes': sum(cs[:primeira]),
        'folha': sum(1 for k in ordem if resp[k]['folha'])})
print('papel | despachos | voltas (med) | voltas antes da 1a edicao (med) | % do custo antes da 1a edicao (soma) | voltas com quadros/folha (soma)')
for p, X in sorted(R.items(), key=lambda x: -sum(y['custo'] for y in x[1])):
    tot = sum(x['custo'] for x in X)
    print(f"{p} | {len(X)} | {statistics.median(x['voltas'] for x in X):.0f} | {statistics.median(x['antes'] for x in X):.0f} | "
          f"{100*sum(x['custo_antes'] for x in X)/tot:.0f}% (US$ {sum(x['custo_antes'] for x in X):.0f} de {tot:.0f}) | {sum(x['folha'] for x in X)}")
