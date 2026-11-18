"""cetico_contas.py: as contas do cetico da pauta v1 do video 8 (australia-animais), refeitas sem rede, das copias locais dos leitores.
uso (da raiz do canal): python -I -X utf8 -B pautas/australia-animais/_trabalho/scripts/cetico_contas.py
Le (so leitura): midia/australia-animais/fontes/b/abs-2025_01.xlsx (Table 1.2), abs-2025_15.xlsx (Table 15.4), abs-pop-310101.xlsx (Data1, A2133251W),
wb-pop-usa.json (Banco Mundial, SP.POP.TOTL) e o resumo de Forrester et al. 2018 (epmc-us-venomous.json).
O leitor de .xlsx e copiado aqui (zipfile + xml), para o script nao depender de outro."""
import datetime, json, re, zipfile, xml.etree.ElementTree as ET

B = r'C:\projetos\alpha-point\midia\australia-animais\fontes\b'
NS = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
      'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
ANOS = list(range(2016, 2026))


def ler_folha(caminho, nome):
    z = zipfile.ZipFile(caminho)
    ss = []
    if 'xl/sharedStrings.xml' in z.namelist():
        root = ET.fromstring(z.read('xl/sharedStrings.xml'))
        ss = [''.join(t.text or '' for t in si.iter('{%s}t' % NS['m'])) for si in root.findall('m:si', NS)]
    wb = ET.fromstring(z.read('xl/workbook.xml'))
    rels = ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
    alvo = {r.get('Id'): r.get('Target') for r in rels}
    mapa = {}
    for s in wb.find('m:sheets', NS):
        t = alvo[s.get('{%s}id' % NS['r'])]
        mapa[s.get('name')] = t if t.startswith('xl/') else 'xl/' + t.lstrip('/')
    root = ET.fromstring(z.read(mapa[nome]))
    linhas = []
    for row in root.iter('{%s}row' % NS['m']):
        cels = {}
        for c in row.findall('m:c', NS):
            ref = re.match(r'[A-Z]+', c.get('r')).group(0)
            i = 0
            for ch in ref:
                i = i * 26 + ord(ch) - 64
            v = c.find('m:v', NS)
            if c.get('t') == 's' and v is not None:
                val = ss[int(v.text)]
            elif c.get('t') == 'inlineStr':
                val = ''.join(t.text or '' for t in c.iter('{%s}t' % NS['m']))
            else:
                val = v.text if v is not None else None
            cels[i - 1] = val
        if cels:
            linhas.append([cels.get(i) for i in range(max(cels) + 1)])
    return linhas


def serie():
    linhas = ler_folha(B + r'\abs-2025_01.xlsx', 'Table 1.2')
    cab = linhas[3]
    colp = {int(str(v).strip()): i + 2 for i, v in enumerate(cab) if v and re.fullmatch(r'\d{4}', str(v).strip())}
    assert sorted(colp) == ANOS, colp
    res = {}
    for l in linhas:
        if not l or not l[0]:
            continue
        m = re.search(r'\(([A-Z]\d\d(?:\.\d)?(?:-[A-Z]\d\d)?)\)\s*$', str(l[0]).strip())
        if m and m.group(1) not in res:
            try:
                res[m.group(1)] = (str(l[0]).strip(), [int(float(l[colp[a]])) for a in ANOS])
            except Exception:
                res[m.group(1)] = (str(l[0]).strip(), [l[colp[a]] if colp[a] < len(l) else None for a in ANOS])
    return res


def erp():
    linhas = ler_folha(B + r'\abs-pop-310101.xlsx', 'Data1')
    c = [i for i, v in enumerate(linhas[9]) if v == 'A2133251W'][0]
    base = datetime.date(1899, 12, 30)
    out = {}
    for l in linhas[10:]:
        try:
            d = base + datetime.timedelta(days=int(float(l[0])))
        except Exception:
            continue
        if d.month == 6 and c < len(l) and l[c] not in (None, ''):
            out[d.year] = float(l[c]) * 1000.0
    return out


def main():
    s = serie()
    print('== 1. A serie do ABS (Table 1.2, pessoas, 2016-2025; o rotulo e o que a planilha diz)')
    for cod in ['X20-X29', 'X20', 'X21', 'X22', 'X23', 'X25', 'X26', 'W54', 'W55', 'W56', 'W57', 'W58', 'W59', 'W53', 'V80', 'W06', 'X30', 'W69', 'W65-W74']:
        if cod in s:
            rot, ser = s[cod]
            print(f'  {cod:8s} soma={sum(x for x in ser if isinstance(x, int)):5d}  2025={ser[-1]}  {ser}  | {rot[:75]}')
        else:
            print(f'  {cod:8s} NAO ACHADO na Table 1.2')
    v = s['X20-X29'][1]
    nv = [sum(s[c][1][i] for c in ('W53', 'W54', 'W55', 'W56', 'W57', 'W58', 'W59') if c in s) for i in range(10)]
    print(f'  W53-W59 somados: {sum(nv)}  {nv}')

    rod = None
    for l in ler_folha(B + r'\abs-2025_15.xlsx', 'Table 15.4'):
        if l and l[0] and str(l[0]).startswith('Total motor vehicle accidents'):
            rod = dict(zip(range(2021, 2026), [int(float(x)) for x in l[2:7]]))
    print(f'  Table 15.4, total de acidentes de veiculo a motor (V01-V79, V89.2): {rod}')

    e = erp()
    pa = sum(e[a] for a in ANOS)
    tot = sum(v)
    print('\n== 2. A medida nossa (ERP de 30/jun, serie A2133251W)')
    print(f'  pessoas-ano 2016-2025 = {pa:,.0f}; X20-X29 = {tot}; 1 em {pa / tot:,.0f} por ano; {tot / pa * 1e5:.4f} por 100.000; {tot / pa * 1e7:.2f} por 10 milhoes')
    print(f'  so as cobras (X20): 1 em {pa / sum(s["X20"][1]):,.0f} por ano')

    print('\n== 3. Uma ancora para o 85 que nao e a cama: a estrada de 2025')
    d = rod[2025] / 365.0
    print(f'  estrada 2025: {rod[2025]} = {d:.2f} por dia = {rod[2025] / 12:.1f} por mes (media); os 85 de dez anos = {tot / d:.1f} dias de estrada de 2025')
    print(f'  2021-2025: estrada {sum(rod.values())} contra venenosos {sum(v[5:])}')

    print('\n== 4. Os EUA pelo resumo de Forrester et al. 2018 (o que o resumo permite, e onde ele nao fecha)')
    wb = json.load(open(B + r'\wb-pop-usa.json', encoding='utf-8'))[1]
    pop = {int(x['date']): x['value'] for x in wb}
    p2011 = pop[2011]
    pa_us = sum(pop[a] for a in range(2008, 2016))
    tot_us = 1610
    print(f'  populacao dos EUA 2011 (Banco Mundial) = {p2011:,}; soma 2008-2015 = {pa_us:,}')
    r_tot_2011 = tot_us / 8 / p2011 * 1e7
    print(f'  todas as mortes por animal: {r_tot_2011:.2f} por 10 milhoes por ano (populacao de 2011, como o resumo); {tot_us / pa_us * 1e7:.2f} (soma 2008-2015)')
    for taxa in (4.75, 4.8, 4.85):
        nv_us = taxa * p2011 / 1e7 * 8
        print(f'  se os nao venenosos sao {taxa} por 10 mi (resumo: "4.8"): {nv_us:,.0f} mortes; sobram {tot_us - nv_us:,.0f} venenosas ({(tot_us - nv_us) / 8 / p2011 * 1e7:.2f} por 10 mi)')
    hym = 0.297 * tot_us
    print(f'  himenopteros = 29,7 % de 1.610 = {hym:,.0f} mortes ({hym / 8 / p2011 * 1e7:.2f} por 10 mi): MAIS que todas as venenosas que sobram acima. O resumo nao fecha.')
    au_v = tot / pa * 1e7
    au_nv = sum(nv) / pa * 1e7
    print(f'  Australia (ABS 2016-2025): venenosos {au_v:.2f}; nao venenosos {au_nv:.2f}; todos {(tot + sum(nv)) / pa * 1e7:.2f} por 10 mi por ano')
    print(f'  a razao "dos venenosos" Australia/EUA iria de {au_v / (hym / 8 / p2011 * 1e7):.2f} (se os EUA tivessem so os himenopteros) a {au_v / ((tot_us - 4.85 * p2011 / 1e7 * 8) / 8 / p2011 * 1e7):.2f} (pelo resto do "4.8"): o numero depende de qual frase do resumo se acredita')

    print('\n== 5. Welton (resumo [R]): "199 per 100 000 persons over the 11 years"')
    for popm in (19.4, 21.0, 22.7):
        print(f'  com uma populacao media de {popm} milhoes: {199e-5 * popm * 1e6:,.0f} internacoes (a tabela do comunicado soma 39.424; o texto dele diz "almost 42,000")')
    print(f'  aranhas, 30 % de ~41.800 = {0.30 * 41800:,.0f}; da tabela, 11.994 = {11994 / 39424:.1%} de 39.424')

    print('\n== 6. A taipan (Weinstein 2017 [R]): 11 + 1 = 12 envenenamentos bem documentados; 2 + 1 = 3 por cobra selvagem; contagem de 2017')


main()
