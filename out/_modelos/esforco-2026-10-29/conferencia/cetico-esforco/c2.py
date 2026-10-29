"""C2/C3: calibracao e quem gastou em 29/10, separado por sessao-mae."""
import json, csv, collections, datetime
D = 'C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/consumo-esforco'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
PRECO = {'fable': (10, 12.5, 20, 0.25, 50), 'opus': (4, 5, 8, 0.20, 20), 'sonnet': (2, 2.5, 4, 0.10, 10), 'haiku': (0.10, 0.125, 0.20, 0.01, 0.50)}
def fam(m):
    for k in PRECO:
        if k in m: return k
def z(brt):
    t = datetime.datetime.strptime(brt, '%Y-%m-%d %H:%M') + datetime.timedelta(hours=3)
    return t.strftime('%Y-%m-%dT%H:%M:00Z')
rows = []
with open(D + '/msgs.csv', encoding='utf-8') as fh:
    for row in csv.DictReader(fh):
        f = fam(row['modelo']); p = PRECO.get(f)
        if not p: continue
        e, w5, w1, r, o = (int(row[k]) for k in ('entrada', 'escrita_5m', 'escrita_1h', 'leitura', 'saida'))
        c = (e*p[0] + w5*p[1] + w1*p[2] + r*p[3] + o*p[4]) / 1e6
        rows.append((int(row['arq']), row['ts'], f, row['effort'] or '-', c, o, e + w5 + w1 + r))
LEIT = [('2026-10-29 01:35', 3), ('2026-10-29 04:36', 11), ('2026-10-29 05:45', 14), ('2026-10-29 06:45', 25), ('2026-10-29 07:35', 28),
        ('2026-10-29 09:25', 40), ('2026-10-29 10:32', 40)]
print('== por intervalo: US$, por sessao-mae e modelo ==')
for (t0, p0), (t1, p1) in zip(LEIT, LEIT[1:]):
    a0, a1 = z(t0), z(t1)
    X = [x for x in rows if a0 <= x[1] < a1]
    c = sum(x[4] for x in X)
    ms = collections.Counter(); fm = collections.Counter()
    for x in X:
        ms[A[x[0]]['sessao'][:8]] += x[4]; fm[x[2]] += x[4]
    print(t0, '->', t1, p1 - p0, 'pts', round(c), (round(c / (p1 - p0), 1) if p1 > p0 else '-'), {k: round(v) for k, v in ms.most_common(8)}, {k: round(v) for k, v in fm.items()})
# variante: com as leituras arredondadas (+-1 ponto em cada ponta)
a0, a1 = z('2026-10-29 01:35'), z('2026-10-29 09:25')
c = sum(x[4] for x in rows if a0 <= x[1] < a1)
print('total 01:35-09:25', round(c), 'faixa por ponto com +-1 em cada ponta:', round(c / 39, 1), '..', round(c / 35, 1))
# a janela de 5h: 01:35 10% / 04:36 42% / 06:4x 27% (renovou?) / 07:3x 39% / 09:2x 85%
# Fable em separado: Fable% 01:35 2, 04:36 7, 06:4x 19, 07:3x 20, 09:2x 31
cf = collections.Counter()
for x in rows:
    if a0 <= x[1] < a1: cf[x[2]] += x[4]
print('por modelo 01:35-09:25', {k: round(v) for k, v in cf.items()}, 'Fable pts 29; US$ Fable/pt Fable', round(cf['fable'] / 29, 1))
# sessao 6abb9076 (reserva) ativa em 29/10?
for s in ('6abb9076',):
    X = [x for x in rows if A[x[0]]['sessao'][:8] == s and x[1] >= '2026-10-29T03:00']
    print('reserva em 29/10:', len(X), round(sum(x[4] for x in X)))
# 08/10 levantamento: US$ 24,7/ponto?
