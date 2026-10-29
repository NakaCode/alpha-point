"""C8: contrafactual 'mesmos turnos, pensamento de high' sobre as respostas xhigh dos agentes.
O pensamento fica no contexto (c6c.py): cada token de pensamento a menos poupa a saida, uma escrita de cache e a leitura em cada turno seguinte do mesmo agente."""
import json, csv, collections, sys
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10)}
PESO = {'opus': 1, 'fable': 2.09, 'sonnet': 1.52}
# razao pensamento(high)/pensamento(xhigh), medida em c6d.py (desde 12/10)
R = {('opus', 'editor-de-arte'): 404/1249, ('opus', 'conferente-de-midia'): 433/872, ('opus', 'regente-de-imagem'): 501/888,
     ('opus', 'verificador-de-fatos'): 535/728, ('opus', 'redator-de-tela'): 609/1118, ('opus', 'montador'): 681/1191,
     ('sonnet', 'qc-visual'): 478/1023, ('fable', 'editor-de-arte'): 974/1409, ('opus', 'workflow-subagent'): 531/990,
     ('sonnet', 'workflow-subagent'): 474/1233}
R_OPUS = 531/990; R_SON = 474/1233; R_FAB = 974/1409
def fam(m):
    for k in PRECO:
        if k in m: return k
a0, a1 = sys.argv[1], sys.argv[2]
by = collections.defaultdict(list)
tot = collections.Counter(); totw = collections.Counter()
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        if not (a0 <= row['ts'] < a1): continue
        f = fam(row['modelo'])
        if not f: continue
        a = int(row['arq']); p = PRECO[f]
        e, w5, w1, r, o = (int(row[k]) for k in ('entrada', 'escrita_5m', 'escrita_1h', 'leitura', 'saida'))
        c = (e*p[0] + w5*p[1] + w1*p[2] + r*p[3] + o*p[4]) / 1e6
        tipo = 'conversa' if A[a]['tipo'] == 'principal' else 'agente'
        tot[(tipo, row['effort'])] += c; totw[(tipo, row['effort'])] += c * PESO[f]
        by[a].append((row['ts'], f, row['effort'], int(row['pensamento'] or 0), c, w5, w1))
T = sum(tot.values()); TW = sum(totw.values())
sav = collections.Counter(); savw = collections.Counter(); base = collections.Counter()
for a, X in by.items():
    if A[a]['tipo'] == 'principal': continue
    X.sort()
    l = L.get(a, {}); papel = l.get('papel', '?'); papel = papel.split('|')[0]
    n = len(X)
    for i, (ts, f, ef, th, c, w5, w1) in enumerate(X):
        if ef != 'xhigh': continue
        r = R.get((f, papel)) or {'opus': R_OPUS, 'sonnet': R_SON, 'fable': R_FAB}[f]
        p = PRECO[f]
        d = th * (1 - r)
        wp = p[2] if w1 > w5 else p[1]
        s = d * (p[4] + wp + p[3] * (n - 1 - i)) / 1e6
        s = min(s, c * 0.95 + 1e9) if False else s
        key = papel if papel in ('mapista', 'editor-de-arte', 'qc-visual', 'verificador-de-fatos', 'regente-de-imagem', 'diretor-de-arte', 'montador', 'redator-de-tela', 'conferente-de-midia') else ('pesquisa' if papel.startswith('pesquisa') else 'outros')
        sav[(key, f)] += s; savw[(key, f)] += s * PESO[f]; base[(key, f)] += c
S = sum(sav.values()); SW = sum(savw.values()); B = sum(base.values())
print(f'janela {a0}..{a1}: total US$ {T:.0f}; agentes xhigh US$ {B:.0f} ({100*B/T:.0f} %)')
print(f'economia do pensamento de high, mesmos turnos: US$ {S:.0f} = {100*S/B:.1f} % dos agentes xhigh = {100*S/T:.1f} % do total (ponderado pelo peso do semanal: {100*SW/TW:.1f} %)')
for k in sorted(sav, key=lambda k: -sav[k]):
    print('  ', k, f'base US$ {base[k]:.0f}', f'economia US$ {sav[k]:.1f} ({100*sav[k]/base[k]:.1f} %)')
