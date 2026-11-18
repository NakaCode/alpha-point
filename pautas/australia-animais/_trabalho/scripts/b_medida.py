"""b_medida.py: a medida nossa do leitor B (video 8, australia-animais).
Fontes (todas baixadas hoje, 18/11/2026, em midia/australia-animais/fontes/b/):
  - ABS, Causes of Death, Australia, 2025 (cubo 2025_01, Table 1.2, registrados 2016-2025; 2025 preliminar) e cubo 2025_15 (Table 15.4)
  - ABS, National, state and territory population, March 2026 (310101.xlsx): populacao residente estimada (ERP) em 30 de junho
  - Welton et al. (Intern Med J 2017), pela tabela da University of Melbourne (Pursuit, 17/01/2017): obitos 2000-2013 e internacoes 2001-2013
  - Taronga, Australian Shark Incident Database, resumo 2025 (PDF)
  - Forrester et al. (Wilderness Environ Med 2018), resumo no Europe PMC: EUA 2008-2015; Banco Mundial (SP.POP.TOTL) para a populacao dos EUA
uso: python -X utf8 -B b_medida.py   (imprime tudo e grava medida-b.csv ao lado do fatos-b.md)"""
import csv, datetime, json, re, sys
sys.path.insert(0, r'C:\projetos\alpha-point\pautas\australia-animais\_trabalho\scripts')
from b_xlsx import ler_folha

RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\b'
OUT = r'C:\projetos\alpha-point\pautas\australia-animais\_trabalho\medida-b.csv'
ANOS = list(range(2016, 2026))

def erp_junho():
    linhas = ler_folha(RAIZ + r'\abs-pop-310101.xlsx', 'Data1')
    cab = linhas[0]
    col = [i for i, v in enumerate(cab) if v and 'Estimated Resident Population ; Australia' in str(v)]
    # a coluna do ERP e a de 'STOCK_CLOSE' com Series ID A2133251W; confere pelo ID (linha 9)
    ids = linhas[9]
    col = [i for i, v in enumerate(ids) if v == 'A2133251W']
    assert col, 'Series ID A2133251W nao achado'
    c = col[0]
    base = datetime.date(1899, 12, 30)
    out = {}
    for l in linhas[10:]:
        try:
            d = base + datetime.timedelta(days=int(float(l[0])))
        except Exception:
            continue
        if d.month == 6 and l[c] not in (None, ''):
            out[d.year] = float(l[c]) * 1000.0
    return out

def serie_abs():
    linhas = ler_folha(RAIZ + r'\abs-2025_01.xlsx', 'Table 1.2')
    cab = linhas[3]
    colp = {int(str(v).strip()): i + 2 for i, v in enumerate(cab) if v and re.fullmatch(r'\d{4}', str(v).strip())}
    res = {}
    for l in linhas:
        if not l or not l[0]:
            continue
        m = re.search(r'\(([A-Z]\d\d(?:\.\d)?(?:-[A-Z]\d\d)?)\)\s*$', str(l[0]).strip())
        if m and m.group(1) not in res:
            try:
                res[m.group(1)] = [int(float(l[colp[a]])) for a in ANOS]
            except Exception:
                pass
    return res

def mva():
    linhas = ler_folha(RAIZ + r'\abs-2025_15.xlsx', 'Table 15.4')
    for l in linhas:
        if l and l[0] and str(l[0]).startswith('Total motor vehicle accidents'):
            return dict(zip(range(2021, 2026), [int(float(x)) for x in l[2:7]]))

def main():
    linhas_csv = [('bloco', 'item', 'valor', 'unidade', 'fonte_e_conta')]
    def reg(b, i, v, u, f):
        linhas_csv.append((b, i, v, u, f))
        print(f'[{b}] {i}: {v} {u}   <- {f}')

    erp = erp_junho()
    print('ERP 30/jun (ABS 310101):', {a: round(erp[a] / 1e6, 3) for a in ANOS})
    s = serie_abs()
    pessoas_anos = sum(erp[a] for a in ANOS)
    print('pessoas-ano 2016-2025 (soma das ERP de 30/jun):', round(pessoas_anos))

    # --- A. o livro-caixa dos venenosos (ABS)
    v = s['X20-X29']
    tot = sum(v)
    reg('A', 'X20-X29 mortes 2016-2025', tot, 'mortes', 'ABS 2025_01 Table 1.2, soma de ' + str(v))
    reg('A', 'X20-X29 media por ano', round(tot / 10, 1), 'mortes/ano', 'soma/10')
    taxa = tot / pessoas_anos * 1e5
    reg('A', 'X20-X29 taxa 2016-2025', round(taxa, 4), 'por 100.000 por ano', 'soma de mortes / soma das ERP x 100.000')
    reg('A', 'X20-X29 chance anual (1 em N)', round(pessoas_anos / tot), 'pessoas', 'soma das ERP / soma de mortes')
    reg('A', 'X20-X29 chance numa vida de 80 anos (1 em N, ilustrativo)', round(pessoas_anos / tot / 80), 'pessoas', '80 anos x a taxa anual; vida de 80 anos e arredondamento NOSSO')
    reg('A', 'X20-X29 2025', v[-1], 'mortes', f'ERP 2025 = {erp[2025]/1e6:.2f} mi; 1 em {round(erp[2025]/v[-1]):,} em 2025'.replace(',', '.'))
    for cod, nome in [('X20', 'cobras e lagartos'), ('X21', 'aranhas'), ('X22', 'escorpioes'), ('X23', 'vespas, abelhas, marimbondos'),
                      ('X25', 'outros artropodes (carrapatos, formigas)'), ('X26', 'animais marinhos venenosos')]:
        reg('A', f'{cod} {nome} 2016-2025', sum(s[cod]), 'mortes', 'ABS ' + str(s[cod]))

    # --- B. a comparacao: o que o ABS registra de mais mortal (2025, e dez anos)
    reg('B', 'X20-X29 2025', v[-1], 'mortes', 'ABS')
    rod = mva()
    reg('B', 'acidentes de veiculo a motor (V01-V79, V89.2) 2025', rod[2025], 'mortes', 'ABS 2025_15 Table 15.4 (preliminar)')
    reg('B', 'razao estrada/venenosos 2025', round(rod[2025] / v[-1], 1), 'x', f'{rod[2025]} / {v[-1]}')
    r5 = sum(rod[a] for a in range(2021, 2026)); v5 = sum(v[5:])
    reg('B', 'estrada 2021-2025', r5, 'mortes', str(rod))
    reg('B', 'venenosos 2021-2025', v5, 'mortes', str(v[5:]))
    reg('B', 'razao estrada/venenosos 2021-2025', round(r5 / v5, 1), 'x', f'{r5} / {v5}')
    for cod, nome in [('W06', 'queda envolvendo cama'), ('W10', 'queda em escada'), ('W11', 'queda de escada de mao') , ('W69', 'afogamento em agua natural'),
                      ('W54', 'mordida/golpe de cao'), ('W55', 'mordida/golpe de outros mamiferos (cavalo, gado etc.)'), ('V80', 'ginete/carroca de animal em acidente de transporte'),
                      ('W58', 'crocodilo/jacare'), ('W56', 'contato com animal marinho (tubarao e outros)'), ('X30', 'calor natural excessivo'), ('W65-W74', 'afogamento e submersao')]:
        if cod in s:
            a25 = s[cod][-1]; t10 = sum(s[cod])
            reg('B', f'{cod} {nome}', f'2025={a25}; 2016-2025={t10}; media={t10/10:.1f}/ano', 'mortes', f'ABS {s[cod]}; 2025 = {a25/v[-1]:.1f}x os venenosos de 2025; 10 anos = {t10/tot:.2f}x os venenosos de 10 anos')
    # cavalo + gado (proxy ABS): W55 + V80
    cg = [a + b for a, b in zip(s['W55'], s['V80'])]
    reg('B', 'W55 + V80 (proxy "cavalo e gado", mistura mamiferos e ginetes)', sum(cg), 'mortes 2016-2025', f'{cg}; contra {tot} dos venenosos')
    animais_nv = [sum(s[c][i] for c in ('W53', 'W54', 'W55', 'W56', 'W57', 'W58', 'W59') if c in s) for i in range(10)]
    reg('B', 'W53-W59 (animais nao venenosos, ABS)', sum(animais_nv), 'mortes 2016-2025', str(animais_nv))

    # --- C. internacoes x mortes (Welton, 2000-2013; tabela da Pursuit)
    tabela = {'cobras': (27, 6123), 'vespas e abelhas': (27, 12351), 'aranhas': (0, 11994), 'carrapatos e formigas': (5, 4533),
              'animais marinhos': (3, 3707), 'escorpioes': (0, 61), 'centopeias/piolhos-de-cobra': (0, 119), 'desconhecido': (2, 536)}
    td = sum(d for d, h in tabela.values()); th = sum(h for d, h in tabela.values())
    reg('C', 'soma das internacoes da tabela', th, 'internacoes 2001-2013', 'soma das linhas da tabela (o texto da Pursuit diz "almost 42,000": nao bate)')
    reg('C', 'soma das mortes da tabela', td, 'mortes 2000-2013', 'bate com "64 people were killed"')
    for k, (d, h) in tabela.items():
        reg('C', f'{k}', f'{d} mortes / {h} internacoes', '', ('1 morte a cada %d internacoes' % round(h / d)) if d else 'zero mortes')
    reg('C', 'todas', f'{td} / {th}', '', '1 morte a cada %d internacoes' % round(th / td))

    # --- D. tubaroes (Taronga ASID): fatais por ano 2000-2025
    asid = {2025: 5, 2024: 1, 2023: 4, 2022: 1, 2021: 4, 2020: 8, 2019: 0, 2018: 1, 2017: 1, 2016: 2, 2015: 2, 2014: 5, 2013: 2, 2012: 2, 2011: 5,
            2010: 1, 2009: 0, 2008: 2, 2007: 0, 2006: 1, 2005: 2, 2004: 3, 2003: 1, 2002: 2, 2001: 0, 2000: 3}
    f10 = sum(asid[a] for a in range(2016, 2026)); f21 = sum(asid[a] for a in range(2001, 2022))
    reg('D', 'tubaroes: fatais 2016-2025 (Taronga ASID)', f10, 'mortes', f'media {f10/10:.1f}/ano; a pagina da Taronga diz 2,7/ano')
    reg('D', 'tubaroes: fatais 2001-2021 (Taronga ASID)', f21, 'mortes', 'o NCIS 2001-2021 diz 39 [S]: diferenca de definicao')
    reg('D', 'tubaroes: media 2000-2009 / 2010-2019 / 2020-2025', f'{sum(asid[a] for a in range(2000,2010))/10:.1f} / {sum(asid[a] for a in range(2010,2020))/10:.1f} / {sum(asid[a] for a in range(2020,2026))/6:.2f}', 'mortes/ano', 'Taronga ASID, por mim')
    reg('D', 'tubaroes: fatais por 10 milhoes por ano 2016-2025', round(f10 / pessoas_anos * 1e7, 2), 'por 10 mi', 'f10 / soma ERP x 10 mi')

    # --- E. comparador dos EUA (Forrester 2018)
    wb = json.load(open(RAIZ + r'\wb-pop-usa.json', encoding='utf-8'))[1]
    popus = {int(x['date']): x['value'] for x in wb}
    pus = sum(popus[a] for a in range(2008, 2016))
    us_tot = 1610
    reg('E', 'EUA 2008-2015: mortes por animais (W53-W59 + X20-X29)', us_tot, 'mortes', 'Forrester et al. 2018, resumo (Europe PMC, PMID 29373216)')
    reg('E', 'EUA: taxa', round(us_tot / pus * 1e7, 2), 'por 10 mi por ano', f'1610 / soma da populacao 2008-2015 (Banco Mundial; media {pus/8/1e6:.1f} mi) x 10 mi')
    au_tot = sum(animais_nv) + tot
    reg('E', 'Australia 2016-2025: mortes por animais (W53-W59 + X20-X29, ABS)', au_tot, 'mortes', f'{sum(animais_nv)} + {tot}')
    reg('E', 'Australia: taxa', round(au_tot / pessoas_anos * 1e7, 2), 'por 10 mi por ano', 'soma de mortes / soma das ERP x 10 mi')
    hym_us = round(0.297 * us_tot)
    reg('E', 'EUA: himenopteros (29,7 % de 1.610)', hym_us, 'mortes 2008-2015', f'{hym_us/8:.0f}/ano; {hym_us / pus * 1e7:.2f} por 10 mi por ano')
    reg('E', 'Australia: himenopteros (X23)', sum(s['X23']), 'mortes 2016-2025', f'{sum(s["X23"])/10:.1f}/ano; {sum(s["X23"]) / pessoas_anos * 1e7:.2f} por 10 mi por ano')

    with open(OUT, 'w', newline='', encoding='utf-8') as f:
        csv.writer(f).writerows(linhas_csv)
    print('gravado', OUT)

main()
