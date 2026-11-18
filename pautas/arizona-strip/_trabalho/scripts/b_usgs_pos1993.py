# b_usgs_pos1993.py: o maior pico anual do Little Colorado perto de Cameron (09402000) depois de 12/01/1993, no arquivo NWIS peak (leitor B)
PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'
L = [l.rstrip('\n').split('\t') for l in open(PASTA + '/usgs-peak-09402000.rdb', encoding='utf-8', errors='replace') if not l.startswith('#')]
cab = L[0]; i_dt = cab.index('peak_dt'); i_q = cab.index('peak_va')
reg = []
for r in L[2:]:
    try: reg.append((r[i_dt], float(r[i_q])))
    except Exception: pass
pos = sorted([x for x in reg if x[0] > '1993-01-13'], key=lambda t: -t[1])
print('depois de 13/01/1993:', len(pos), 'picos; os 3 maiores:', pos[:3])
