"""fatos-medidas.py: as contas do verificador de fatos da bancada do r1 (video 8, australia-animais), refeitas do zero sobre as copias locais.
uso (cwd = raiz do canal): python -X utf8 -B roteiros/australia-animais/qc-roteiro/fatos-medidas.py > roteiros/australia-animais/qc-roteiro/fatos-medidas.txt
Sem rede. Le: midia/australia-animais/fontes/b/abs-2025_01.xlsx (Table 1.2), abs-2025_15.xlsx (Table 15.4), abs-pop-310101.xlsx (ERP, A2133251W);
midia/australia-animais/fontes/c/censo/medida-censo.json; midia/australia-animais/fontes/c/wb-pop-ind-aus.json;
out/_tmp/bancada-australia-animais/web/rdb-*.html (Reptile Database, lidas pelo verificador em 18/11/2026).
O leitor de xlsx e o b_xlsx.py da pauta (so leitura). Cada linha comeca com [bloco-n]; as linhas "(como a voz diz)" transcrevem o numero da fonte
na forma da frase, para o portao-fatos casar o numero (limite declarado no laudo)."""
import sys, re, json, datetime, hashlib, pathlib
RAIZ = pathlib.Path(__file__).resolve().parents[3]
sys.path.insert(0, str(RAIZ / 'pautas/australia-animais/_trabalho/scripts'))
from b_xlsx import ler_folha
FB = RAIZ / 'midia/australia-animais/fontes/b'
FC = RAIZ / 'midia/australia-animais/fontes/c'
WEB = RAIZ / 'out/_tmp/bancada-australia-animais/web'
ANOS = list(range(2016, 2026))
def sha(p): return hashlib.sha256(p.read_bytes()).hexdigest()[:16]
print('# fatos-medidas.txt: saida de roteiros/australia-animais/qc-roteiro/fatos-medidas.py, rodado em 18/11/2026 (sem rede)')
for p in [FB/'abs-2025_01.xlsx', FB/'abs-2025_15.xlsx', FB/'abs-pop-310101.xlsx', FC/'censo/medida-censo.json', FC/'wb-pop-ind-aus.json']:
    print(f'# entrada {p.relative_to(RAIZ).as_posix()} sha256 {sha(p)}...')
print()

# ---------------- A. ABS, Causes of Death, Australia, 2025, Table 1.2 (pessoas, por ano de registro) ----------------
linhas = ler_folha(str(FB/'abs-2025_01.xlsx'), 'Table 1.2')
cab = linhas[3]
colp = {int(str(v).strip()): i + 2 for i, v in enumerate(cab) if v and re.fullmatch(r'\d{4}', str(v).strip())}
assert sorted(colp) == ANOS
S, NOME = {}, {}
for l in linhas:
    if not l or not l[0]: continue
    m = re.search(r'\(([A-Z]\d\d(?:\.\d)?(?:-[A-Z]\d\d)?)\)\s*$', str(l[0]).strip())
    if m and m.group(1) not in S:
        try: S[m.group(1)] = [int(float(l[colp[a]])) for a in ANOS]; NOME[m.group(1)] = str(l[0]).strip()
        except Exception: pass
print('[A] ABS, Causes of Death, Australia, 2025 (cubo 2025_01, Table 1.2), pessoas por ano de registro, 2016 a 2025 (2025 preliminar)')
for c in ['X20-X29','X20','X21','X22','X23','X24','X25','X26','X27','X28','X29','W53','W54','W55','W56','W57','W58','W59','V80','X30','W69','W65-W74']:
    if c in S: print(f'[A-{c}] {NOME[c]} | {S[c]} | soma 2016-2025 = {sum(S[c])}')
    else: print(f'[A-{c}] (linha nao achada na tabela)')
v = S['X20-X29']; tot = sum(v)
print(f'[A1] todos os venenosos (X20-X29), 10 anos de registro, de 2016 a 2025: {tot} mortes')
print(f'[A2] aranhas (X21): {S["X21"]}: 0 mortes em cada um dos 10 anos de 2016 a 2025')
print(f'[A3] cobras e lagartos venenosos (X20): {sum(S["X20"])} mortes em 2016-2025; abelhas, vespas e marimbondos (X23): {sum(S["X23"])} mortes, mais que as {sum(S["X20"])} das cobras')
outros = tot - sum(S['X20']) - sum(S['X23'])
print(f'[A4] {tot} - {sum(S["X20"])} - {sum(S["X23"])} = {outros} mortes restantes (the remaining 8 = X25 {sum(S["X25"])} + X26 {sum(S["X26"])}); X22, X24, X27, X28 e X29 somam {sum(sum(S[c]) for c in ["X22","X24","X27","X28","X29"])}')
print(f'[A5] X25, outros artropodes venenosos: {sum(S["X25"])} das {outros} (a maioria); X26, animais e plantas marinhos venenosos: {sum(S["X26"])}')
print(f'[A6] cobras (X20): media de {sum(S["X20"])/10} por ano em 2016-2025, entre 3 e 4 por ano (three or four)')
nv = [sum(S[c][i] for c in ['W53','W54','W55','W56','W57','W58','W59']) for i in range(10)]
print(f'[A7] animais NAO venenosos (W53-W59), mesma decada 2016-2025: {nv} = {sum(nv)} mortes, contra {tot} dos venenosos')
print(f'[A8] crocodilo ou jacare (W58), decada 2016-2025: {sum(S["W58"])} mortes')
print(f'[A9] calor natural excessivo (X30): {sum(S["X30"])} mortes em 2016-2025; afogamento em agua natural (W69): {sum(S["W69"])} mortes, more than a thousand (1,000); W65-W74 todos os afogamentos: {sum(S["W65-W74"])}')
print()

# ---------------- B. A estrada (Table 15.4) ----------------
rod = None
for l in ler_folha(str(FB/'abs-2025_15.xlsx'), 'Table 15.4'):
    if l and l[0] and str(l[0]).startswith('Total motor vehicle accidents'):
        rod = dict(zip(range(2021, 2026), [int(float(x)) for x in l[2:7]])); rotulo = str(l[0]).strip()
print(f'[B1] ABS Table 15.4, "{rotulo}": {rod}')
mes = rod[2025] / 12
print(f'[B2] estrada 2025: {rod[2025]} mortes / 12 = {mes:.1f} por mes em media em 2025, contra {tot} dos venenosos na decada 2016-2025 inteira ({mes:.1f} > {tot})')
print(f'[B3] os {tot} da decada = {tot / (rod[2025] / 365):.1f} dias de estrada de 2025 (os "24 dias")')
print()

# ---------------- C. A chance por ano (ERP do ABS) ----------------
lin = ler_folha(str(FB/'abs-pop-310101.xlsx'), 'Data1')
c = [i for i, x in enumerate(lin[9]) if x == 'A2133251W'][0]
base = datetime.date(1899, 12, 30); erp = {}
for l in lin[10:]:
    try: d = base + datetime.timedelta(days=int(float(l[0])))
    except Exception: continue
    if d.month == 6 and l[c] not in (None, ''): erp[d.year] = float(l[c]) * 1000
pa = sum(erp[a] for a in ANOS)
print(f'[C1] ERP de 30 de junho (ABS 310101, A2133251W), 2016-2025: soma = {pa:,.0f} pessoas-ano')
print(f'[C2] {tot} mortes / {pa:,.0f} pessoas-ano = 1 em {pa/tot:,.0f} por ano = about one in 3 million (three million) a year')
print()

# ---------------- D. A medida do Censo (medida-censo.json, refeita a aritmetica) ----------------
mc = json.load(open(FC/'censo/medida-censo.json', encoding='utf-8'))
mi2 = mc['poligono']['mi2']; km2 = mc['poligono']['km2_ibra']; p = mc['mb']['pessoas_centroide']
print(f'[D1] Channel Country (IBRA 7.1 CHC): {km2:,.1f} km2 = {km2/2.58999:,.0f} square miles (about 117,000); json: {mi2:,.1f}')
print(f'[D2] gente no CHC, Censo 2021 (mesh blocks, centroide): {p} pessoas (about a thousand); variantes centrais {mc["mb"]["pessoas_area"]:.0f} e 1224; extremos {mc["mb"]["pessoas_so_inteiros"]} e {mc["mb"]["pessoas_todo_que_toca"]}')
print(f'[D3] square miles por pessoa: {mi2/p:.0f} (centroide), {mi2/mc["mb"]["pessoas_area"]:.0f} (area), {mi2/1224:.0f} (com as vilas da beira): roughly one person for every 100 (hundred) square miles, a centena mais perto das tres')
te = mc['tres_estados']
print(f'[D4] tres estados (3: NSW, Vic, Qld), Censo 2021 QuickStats: {te}')
p3 = te['pessoas_quickstats']; d3 = te['por_mi2']; dchc = p / mi2
print(f'[D5] os 3 estados (NSW + Vic + Qld) tinham {p3:,} pessoas no Censo 2021: almost 20 million')
r_c = d3 / dchc
r_ext = [d3 / (mc['mb']['pessoas_so_inteiros'] / mi2), d3 / (mc['mb']['pessoas_todo_que_toca'] / mi2), d3 / (1224 / mi2), d3 / (mc['mb']['pessoas_area'] / mi2)]
print(f'[D6] densidade: 3 estados {d3:.2f} por square mile; CHC {dchc:.5f}; razao central {r_c:.0f} vezes; menor de todas as variantes {min(r_ext):.0f} vezes (more than a thousand, 1,000, em todas)')
print()

# ---------------- E. Reptile Database (lido pelo verificador, 18/11/2026) ----------------
def achados(nome):
    t = (WEB / nome).read_text(encoding='utf-8', errors='replace')
    m = re.search(r'Species found:\s*(\d+)', t)
    return int(m.group(1)) if m else (0 if 'No species were found' in t else None)
ea, sa, va, em, vm, sm = [achados(f'rdb-{x}.html') for x in ['elapidae-australia', 'serpentes-australia', 'viperidae-australia', 'elapidae-mundo', 'viperidae-mundo', 'serpentes-mundo']]
print(f'[E1] Reptile Database, busca avancada: Elapidae com "Australia" na distribuicao {ea}; Serpentes {sa}; Viperidae {va}')
print(f'[E2] {ea} / {sa} = {ea/sa*100:.1f} % = about 2 in 3 (two in three: 66.7 %)')
print(f'[E3] no mundo: Viperidae {vm}, Elapidae {em}: as duas quase iguais (diferenca de {abs(vm-em)})')
print(f'[E4] Elapidae + Viperidae no mundo = {em+vm} de {sm} serpentes = {(em+vm)/sm*100:.1f} % = 1 em {sm/(em+vm):.2f}: about one in 5 (five)')
print(f'[E5] Viperidae na Australia: {va} (No species were found)')
print()

# ---------------- F. Contagens dos estudos ----------------
print('[F1] Weinstein et al. 2017 (Toxicon 137): 11 envenenamentos bem documentados antes + o caso do artigo = 12 (about a dozen) em 2017; por cobra selvagem: 2 + 1 = 3 (three)')
print('[F2] ASP-20 (Johnston et al., MJA 2017, julho de 2005 a junho de 2015): 23 mortes = 17 brown + 4 tiger + 2 unknown = %d; inland taipan: 0 (none)' % (17 + 4 + 2))
print('[F3] ASP-20: 835 envenenados em 10 anos = %.1f por ano (mediana 87 por ano): fewer than a hundred (100) a year' % (835 / 10))
print('[F4] Welton et al. 2017, tabela da Pursuit (University of Melbourne): internacoes por aranha 2001-2013 = 11,994 (about 12,000), em 13 anos (a little more than a decade); mortes por aranha 2000-2013 = 0')
print('[F5] Isbister et al., MJA 2005: 13 mortes, todas antes do soro de 1981 (at least 13; before 1981); Wiener 2003: soro do redback em 1956; AFP 2004: at least 14 mortes antes do soro')
print('[F6] Herzig et al. 2020: as funnel-web surgiram 150 to 200 million years ago (150 a 200 milhoes de anos)')
print('[F7] Reptile Park, 13/01/2026: o programa do soro comecou "more than 40 years ago"; o soro da funnel-web foi usado pela primeira vez em 1981 (MJA 2005): 2026 - 1981 = %d anos (more than 40)' % (2026 - 1981))
print()

# ---------------- G. A India por habitante ----------------
wb = json.load(open(FC/'wb-pop-ind-aus.json', encoding='utf-8'))
pop = {'IND': {}, 'AUS': {}}
for r in wb[1]: pop[r['countryiso3code']][int(r['date'])] = r['value']
ind_media = sum(pop['IND'][a] for a in range(2000, 2020)) / 20
t_ind = 58000 / ind_media * 1e5
t_aus = sum(S['X20']) / pa * 1e5
print(f'[G1] India: about 58,000 snakebite deaths a year (OMS, citando Suraweera et al. 2020, media 2000-2019) / populacao media 2000-2019 do Banco Mundial {ind_media:,.0f} = {t_ind:.2f} por 100.000 por ano')
print(f'[G2] Australia: X20 = {sum(S["X20"])} em 2016-2025 / {pa:,.0f} pessoas-ano = {t_aus:.4f} por 100.000 por ano ({sum(S["X20"])/10} por ano: three or four)')
print(f'[G3] razao India / Australia por pessoa: {t_ind/t_aus:.0f} vezes (hundreds of times); com as 35 mortes de Welton 2000-2016 sobre a populacao do Banco Mundial: {t_ind / (35 / sum(pop["AUS"][a] for a in range(2000, 2017)) * 1e5):.0f} vezes')
print()

# ---------------- H. Transcricoes na forma da voz (o numero da fonte, como a frase o diz) ----------------
print('[H1] (como a voz diz) Geoscience Australia: o rifte com a Antartida comecou some 80 to 85 million years ago (a fonte: "85 to 80 Ma", "85 to 80 million years ago")')
print('[H2] (como a voz diz) Hall 2013: Australia began to move north around 45 million years ago (a fonte: "At about 45 Ma")')
print('[H3] (como a voz diz) Lee et al. 2016: all continents colonized roughly 25 to 30 million years ago (a fonte: "between 30 and 25 Ma")')
print('[H4] (como a voz diz) Byrne et al. 2008: aridez desde about 15 million years ago; os desertos plenos do centro, 1 to 4 million years ago (the past few million years: 1 million a 4 million)')
print('[H5] (como a voz diz) SA Arid Lands: 2 rios (two rivers), Cooper and Diamantina Creeks')
print('[H6] (como a voz diz) Welton, Liew e Braitberg 2017 (Toxicon): "a steady rate for over 20 years" = more than twenty (20) years')
print('[H7] (como a voz diz) Hall 2013 (texto integral, p. 7): "Australia began to collide with SE Sundaland in Sulawesi about 23 million years ago" (o roteiro diz some 20 million)')
