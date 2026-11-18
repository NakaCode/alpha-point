# Medida do Censo (vídeo 8). Olha por dentro o "Mesh Block Counts, 2021" do ABS (as folhas, o cabeçalho, as notas) e grava a tabela inteira
# num CSV compacto (midia/.../censo/mb-counts-2021.csv: MB_CODE_2021, categoria, área, dwellings, persons, estado), para os outros scripts.
# Uso (da raiz): python -X utf8 -B -I pautas/australia-animais/_trabalho/scripts/c_censo_mb_ler.py
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import c_censo_geo as G

XLSX = os.path.join(G.CENSO, 'abs-mesh-block-counts-2021.xlsx')
XLSX_SHA = '1ab520c2ff0e07ca88729258c30ee9f7a7133df113a81bac94812582f3b540a3'
G.conferir_sha(XLSX, XLSX_SHA)
folhas = G.xlsx_folhas(XLSX)
print('folhas:', [f[0] for f in folhas])
saida = os.path.join(G.CENSO, 'mb-counts-2021.csv')
total = {}
n_linhas = 0
cab = None
with open(saida, 'w', newline='', encoding='utf-8') as fo:
    w = csv.writer(fo)
    w.writerow(['folha', 'MB_CODE_2021', 'MB_CATEGORY_2021', 'AREA_ALBERS_SQKM', 'Dwelling', 'Person', 'State'])
    for nome, _ in folhas:
        linhas = G.xlsx_linhas(XLSX, nome)
        cab_local = None
        notas = []
        for i, l in enumerate(linhas):
            if cab_local is None:
                txt = [str(x) for x in l if x is not None]
                if any('MB_CODE' in t.upper() for t in txt):
                    cab_local = [str(x).strip() if x is not None else '' for x in l]
                    print('\n[%s] cabeçalho na linha %d: %s' % (nome, i + 1, cab_local))
                    if notas:
                        print('  acima do cabeçalho:', notas[:12])
                elif txt:
                    notas.append(' | '.join(txt)[:200])
                continue
            reg = dict(zip(cab_local, l))
            cod = reg.get('MB_CODE_2021')
            if cod is None or not str(cod).strip():
                txt = [str(x) for x in l if x is not None]
                if txt:
                    notas.append(' | '.join(txt)[:300])
                continue
            cod = str(cod).strip()
            if cod.endswith('.0'):
                cod = cod[:-2]
            if not cod.isdigit():
                notas.append(' | '.join(str(x) for x in l if x is not None)[:300])
                continue
            pessoa = reg.get('Person')
            dwel = reg.get('Dwelling')
            est = reg.get('State')
            w.writerow([nome, cod, reg.get('MB_CATEGORY_2021') or reg.get('MB_CATEGORY_NAME_2021'), reg.get('AREA_ALBERS_SQKM'), dwel, pessoa, est])
            n_linhas += 1
            if isinstance(pessoa, float):
                total[str(est)] = total.get(str(est), 0) + pessoa
        if cab_local is None:
            print('\n[%s] sem cabeçalho de MB; o texto da folha:' % nome)
            for t in notas[:60]:
                print('  ', t)
        else:
            rodape = [t for t in notas if t]
            if rodape:
                print('  texto abaixo/fora da tabela (%d linhas):' % len(rodape))
                for t in rodape[-15:]:
                    print('   ', t)
print('\nlinhas de MB gravadas: %d -> %s' % (n_linhas, saida))
print('soma de Person por State:')
for k in sorted(total):
    print('  %-40s %12.0f' % (k, total[k]))
print('  %-40s %12.0f' % ('TOTAL', sum(total.values())))
print('sha256 do csv:', G.sha256(saida))
