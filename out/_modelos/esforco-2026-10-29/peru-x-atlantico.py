"""Experimento natural: o mesmo processo (setores) no Peru (esforco do frontmatter: medium/high) e no Atlantico (xhigh)."""
import json, sys, collections, statistics
D = sys.argv[1]
L = json.load(open(D + '/por-agente.json', encoding='utf-8'))
JAN = {'Peru': ('2026-10-19 00:00', '2026-10-24 12:00'), 'Atlantico': ('2026-10-28 22:00', '2026-10-29 23:59')}
PAPEIS = ['montador', 'diretor-de-arte', 'regente-de-imagem', 'redator-de-tela', 'verificador-de-fatos', 'editor-de-arte',
          'mapista', 'qc-visual', 'conferente-de-midia', 'pesquisa-imagens', 'pesquisa-geo', 'pesquisa-documentos', 'pesquisa-pessoas']
print('papel | video | modelo | esforcos | agentes | resp/agente (med) | saida/resp (med) | contexto/resp mil (med) | US$/agente (med) | US$ total')
tot = collections.Counter()
for p in PAPEIS:
    for v, (a, b) in JAN.items():
        G = collections.defaultdict(list)
        for l in L:
            if l['tipo'] == 'principal' or l['papel'] != p: continue
            if not (a <= l['data'] <= b): continue
            G[l['modelo']].append(l)
        for m, X in G.items():
            ef = collections.Counter(x['effort'] for x in X)
            tot[(v, 'agentes')] += sum(x['cost'] for x in X)
            print(f"{p} | {v} | {m} | {dict(ef)} | {len(X)} | {statistics.median(x['n'] for x in X):.0f} | "
                  f"{statistics.median(x['out']/x['n'] for x in X):.0f} | {statistics.median(x['ctx']/x['n']/1000 for x in X):.0f} | "
                  f"{statistics.median(x['cost'] for x in X):.2f} | {sum(x['cost'] for x in X):.0f}")
# tudo dos setores e da Sala nas duas janelas
print()
for v, (a, b) in JAN.items():
    c = collections.Counter()
    for l in L:
        if not (a <= l['data'] <= b): continue
        c[(l['dono'], 'conversa' if l['tipo'] == 'principal' else 'agentes')] += l['cost']
    print(v, {k: round(x) for k, x in c.most_common()}, 'total', round(sum(c.values())))
