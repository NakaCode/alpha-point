"""C6: pares comparaveis (mesmo tipo de tarefa) Peru x Atlantico, com pensamento por resposta e custo por cena."""
import json, csv, collections, re, statistics
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = json.load(open(D + '/por-agente.json', encoding='utf-8'))
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10)}
def fam(m):
    for k in PRECO:
        if k in m: return k
per = collections.defaultdict(lambda: collections.Counter())
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        a = int(row['arq']); f = fam(row['modelo'])
        if not f: continue
        p = PRECO[f]
        e, w5, w1, r, o = (int(row[k]) for k in ('entrada', 'escrita_5m', 'escrita_1h', 'leitura', 'saida'))
        th = int(row['pensamento'] or 0)
        c = per[a]
        c['n'] += 1; c['o'] += o; c['th'] += th; c['vis'] += o - th; c['ctx'] += e + w5 + w1 + r
        c['cost'] += (e*p[0] + w5*p[1] + w1*p[2] + r*p[3] + o*p[4]) / 1e6
        c['cost_ctx'] += (e*p[0] + w5*p[1] + w1*p[2] + r*p[3]) / 1e6
        c['cost_out'] += o*p[4] / 1e6
        c['ms'] += int(row['thinking_ms'] or 0)
def ncenas(desc):
    d = re.sub(r'^(arte-\d+\s+)?', '', desc)
    return len(re.findall(r'\bs\d\d(?:-\d\d)?\b', d))
G = collections.defaultdict(list)
for l in L:
    if l['tipo'] == 'principal': continue
    d, p, desc = l['data'], l['papel'], l['desc']
    peru = '2026-10-19' <= d <= '2026-10-24 12:00'; atl = '2026-10-28 22:00' <= d
    v = 'Peru' if peru else ('Atl' if atl else None)
    if not v: continue
    g = None
    if p == 'mapista':
        if v == 'Peru' and (re.match(r'^M\d mapista', desc) or desc.startswith('arte-12 M')): g = 'mapista 1a construcao'
        elif v == 'Atl': g = 'mapista 1a construcao'
        else: g = 'mapista consertos'
    elif p == 'editor-de-arte' and l['dono'] == 'setor:Arte':
        if v == 'Peru' and (re.match(r'^E[FO]\d? editor', desc) or re.match(r'^arte-12 E', desc)): g = 'editor 1a construcao ' + l['modelo']
        elif v == 'Atl': g = 'editor 1a construcao ' + l['modelo']
    elif p == 'qc-visual':
        m = re.match(r'qc-visual:L(\d+)$', desc)
        if v == 'Peru' and m and 48 <= int(m.group(1)) <= 58: g = 'qc-visual qualidade-1 mapa'
        elif v == 'Atl' and m: g = 'qc-visual qualidade-1 mapa'
    elif p == 'verificador-de-fatos' and 'laudo-delta da pesquisa' in desc: g = 'verificador laudo-delta pesquisa'
    elif p == 'redator-de-tela' and 'textos de tela do' in desc: g = 'redator textos do video'
    elif p == 'regente-de-imagem' and re.search(r'regência do (vídeo 4|Atlântico)', desc): g = 'regente regencia do video'
    elif p == 'diretor-de-arte' and re.search(r'onceito do (vídeo 4|Atlântico)', desc): g = 'diretor conceito do video'
    elif p == 'montador' and l['dono'].startswith('setor'): g = 'montador ajustes (setor)'
    if g: G[(g, v)].append(l)
print('grupo | video | despachos | cenas | resp | saida/resp | pensamento/resp | visivel/resp | ctx mil/resp | US$ | US$/cena | US$ contexto % ')
for k in sorted(G):
    X = G[k]
    C = collections.Counter()
    cen = 0
    for l in X:
        C.update(per[l['i']]); cen += ncenas(l['desc'])
    n = C['n']
    print(f"{k[0]} | {k[1]} | {len(X)} | {cen} | {n} | {C['o']/n:.0f} | {C['th']/n:.0f} | {C['vis']/n:.0f} | {C['ctx']/n/1000:.0f} | {C['cost']:.1f} | {(C['cost']/cen if cen else 0):.2f} | {100*C['cost_ctx']/C['cost']:.0f}")
