"""Gera conferencia/vereditos.md a partir do journal do workflow conferir-consumo-esforco (wf_91b9488b-39e)."""
import json, sys
J, SAIDA = sys.argv[1], sys.argv[2]
res = {}
for line in open(J, encoding='utf-8'):
    d = json.loads(line)
    if d.get('type') != 'result':
        continue
    r = d.get('result') or d.get('value') or d.get('output')
    if isinstance(r, str):
        try:
            r = json.loads(r)
        except Exception:
            continue
    if isinstance(r, dict):
        if 'itens' in r: res['recontar'] = r
        if 'vereditos' in r: res['cetico'] = r
        if 'fatos' in r: res['docs'] = r
L = ['# A conferência do consumo por esforço (29/10/2026)', '',
     'Saída dos três agentes do workflow `conferir-consumo-esforco` (wf_91b9488b-39e), rodado pela Sala em 29/10/2026, às 10:4x,',
     'sobre o `rascunho-esforco.md` desta pasta: um recontador (Sonnet), um cético (Opus) e um leitor da documentação oficial.',
     'Todos em esforço xhigh. Os scripts de cada um estão em `conferencia/`.', '']
r = res.get('recontar')
if r:
    L += ['## O recontador', '', r.get('resumo', ''), '', '| Afirmação | Rascunho | Recontado | Bate | Nota |', '| --- | --- | --- | --- | --- |']
    for i in r['itens']:
        L.append('| {} | {} | {} | {} | {} |'.format(i['afirmacao'].replace('|', '/'), i['numero_rascunho'].replace('|', '/'),
                 i['numero_recontado'].replace('|', '/'), 'sim' if i.get('bate') else 'não', (i.get('nota') or '').replace('|', '/').replace('\n', ' ')))
    L.append('')
c = res.get('cetico')
if c:
    L += ['## O cético', '']
    for v in c['vereditos']:
        L += ['### ' + v['afirmacao'], '', '**Veredito:** ' + v['veredito'], '', v.get('prova', '')]
        if v.get('numero_corrigido'):
            L += ['', '**Corrigido:** ' + v['numero_corrigido']]
        L.append('')
    L += ['### A faixa de economia, se os agentes voltarem ao high', '', c.get('faixa_economia_high', ''), '', '### Outros achados', '']
    L += ['- ' + o for o in c.get('outros_achados') or []]
    L.append('')
dd = res.get('docs')
if dd:
    L += ['## A documentação oficial', '']
    for f in dd['fatos']:
        L += ['- **{}** {} ({}){}'.format(f['pergunta'], f['fato'], f['url'], (' Trecho: "' + f['trecho'] + '"') if f.get('trecho') else '')]
    L += ['', '**Não documentado:**', ''] + ['- ' + x for x in dd.get('nao_documentado') or []] + ['']
open(SAIDA, 'w', encoding='utf-8', newline='\n').write('\n'.join(L))
print('gravado', SAIDA, len(L), 'linhas;', ', '.join(sorted(res)))
