# b_usgs_picos.py: lê os picos anuais (USGS NWIS peak, rdb) já baixados e diz onde o pico de 22/10/2026 cai na história (leitor B)
import re
PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'
ATUAL = {'09402000': 18000.0, '09401260': 21400.0, '09402500': 30100.0}   # máximos instantâneos de 22/10/2026 (b_usgs.py)
for s in ('09402000', '09401260', '09402500'):
    linhas = [l.rstrip('\n') for l in open('%s/usgs-peak-%s.rdb' % (PASTA, s), encoding='utf-8', errors='replace') if not l.startswith('#')]
    cab = linhas[0].split('\t'); dados = [l.split('\t') for l in linhas[2:] if l.strip()]
    i_dt = cab.index('peak_dt'); i_q = cab.index('peak_va')
    reg = []
    for r in dados:
        try: reg.append((r[i_dt], float(r[i_q])))
        except Exception: pass
    reg.sort(key=lambda t: -t[1])
    print('==', s, 'registros', len(reg), 'de', min(r[0] for r in reg), 'a', max(r[0] for r in reg))
    print('   10 maiores picos:', reg[:10])
    a = ATUAL[s]
    maiores = [r for r in reg if r[1] > a]
    print('   pico de 22/10/2026 (provisório, IV):', a, '| picos anuais MAIORES que isso:', maiores)
    # quando foi o último pico anual >= a
    print('   últimos 8 anos registrados:', sorted(reg, key=lambda t: t[0])[-8:])
