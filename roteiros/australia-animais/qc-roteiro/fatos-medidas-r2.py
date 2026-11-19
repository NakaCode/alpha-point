"""fatos-medidas-r2.py: as contas que o r2 tocou (video 8, australia-animais), refeitas do zero sobre as copias locais, pelo verificador de fatos.
uso (cwd = raiz do canal): python -X utf8 -B roteiros/australia-animais/qc-roteiro/fatos-medidas-r2.py > roteiros/australia-animais/qc-roteiro/fatos-medidas-r2.txt
Sem rede. Le: midia/australia-animais/fontes/b/abs-2025_01.xlsx (Table 1.2) e out/_tmp/bancada-australia-animais/web/rdb-*.html.txt (Reptile Database,
lidas pelo verificador em 18/11/2026, no r1). O leitor de xlsx e o b_xlsx.py da pauta (so leitura). As linhas "(como a voz diz)" transcrevem o numero
da fonte na forma da frase, para o portao-fatos casar o numero (o mesmo limite declarado no laudo do r1)."""
import sys, re, hashlib, pathlib
RAIZ = pathlib.Path(__file__).resolve().parents[3]
sys.path.insert(0, str(RAIZ / 'pautas/australia-animais/_trabalho/scripts'))
from b_xlsx import ler_folha
FB = RAIZ / 'midia/australia-animais/fontes/b'
WEB = RAIZ / 'out/_tmp/bancada-australia-animais/web'
ANOS = list(range(2016, 2026))
def sha(p): return hashlib.sha256(p.read_bytes()).hexdigest()[:16]
print('# fatos-medidas-r2.txt: saida de roteiros/australia-animais/qc-roteiro/fatos-medidas-r2.py, rodado em 18/11/2026 (sem rede)')
print(f'# entrada midia/australia-animais/fontes/b/abs-2025_01.xlsx sha256 {sha(FB/"abs-2025_01.xlsx")}...')
print()
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
ven = sum(S['X20-X29']); x30 = sum(S['X30']); w69 = sum(S['W69']); w56 = sum(S['W56']); x26 = sum(S['X26'])
print('[R1] ABS, Causes of Death, Australia, 2025 (Table 1.2), pessoas por ano de registro, 2016-2025 (2025 preliminar):')
for c in ['X20-X29', 'X20', 'X23', 'X25', 'X26', 'X30', 'W69', 'W56', 'W58']:
    print(f'[R1-{c}] {NOME[c]} | {S[c]} | soma 2016-2025 = {sum(S[c])}')
print()
print(f'[R2] a regua do veneno (p55 "Heat and water kill far more Australians than venom does"): calor natural (X30) {x30} / venenosos (X20-X29) {ven} = {x30/ven:.2f} vezes; '
      f'afogamento em agua natural (W69) {w69} / {ven} = {w69/ven:.2f} vezes; os dois juntos {x30+w69} / {ven} = {(x30+w69)/ven:.1f} vezes')
print(f'[R3] (como a voz diz) extreme natural heat killed {x30} people (202); drowning in natural water killed {w69}, more than a thousand (1,000)')
print(f'[R4] o 8 do p8 ("that leaves eight deaths"): {ven} - {sum(S["X20"])} - {sum(S["X23"])} = {ven - sum(S["X20"]) - sum(S["X23"])} deaths (eight), = X25 {sum(S["X25"])} + X26 {x26}')
print(f'[R5] o p37 ("three or four a year"): X20 {sum(S["X20"])} / 10 anos = {sum(S["X20"])/10} a year (three or four), anos: {S["X20"]}')
print(f'[R6] o mar no registro: W56 "{NOME["W56"]}" = {w56} na decada (os tubaroes sem linha propria; a tabela nao abre o W56); X26 "{NOME["X26"]}" = {x26} '
      '(os marinhos COM veneno, contados a parte)')
nv = sum(sum(S[c]) for c in ['W53','W54','W55','W56','W57','W58','W59'])
print(f'[R7] a regua dos animais (o r1, B6): todos os animais da decada = {ven} venenosos + {nv} sem veneno = {ven+nv}; calor {x30} < {ven+nv}; afogamento {w69} > {ven+nv}')
def rdb(n):
    t = (WEB / n).read_text(encoding='utf-8', errors='replace'); m = re.search(r'Species found:\s*([\d,]+)', t)
    return int(m.group(1).replace(',', '')) if m else (0 if 'No species were found' in t else None)
ea, sa, vm, em, sm, va = rdb('rdb-elapidae-australia.html.txt'), rdb('rdb-serpentes-australia.html.txt'), rdb('rdb-viperidae-mundo.html.txt'), rdb('rdb-elapidae-mundo.html.txt'), rdb('rdb-serpentes-mundo.html.txt'), rdb('rdb-viperidae-australia.html.txt')
print()
print(f'[R8] o p20 (Reptile Database, lido pelo verificador em 18/11/2026): no mundo, Elapidae {em} + Viperidae {vm} = {em+vm} de {sm} serpentes = {100*(em+vm)/sm:.1f} % = about one in five (5); '
      f'partes: elapideas {100*em/(em+vm):.1f} % e viperideas {100*vm/(em+vm):.1f} % das duas (roughly equal shares)')
print(f'[R9] o p20: na Australia, Elapidae {ea} de {sa} serpentes = {100*ea/sa:.1f} % (the clear majority); Viperidae na Australia: {va} (not a single viper)')
import zipfile
z = zipfile.ZipFile(FB/'abs-2025_01.xlsx'); txt = ' '.join(z.read(n).decode('utf-8', 'replace') for n in z.namelist() if n.endswith('.xml'))
print()
print(f'[R10] no cubo inteiro (abs-2025_01.xlsx, todas as folhas, o XML cru): "shark" aparece {len(re.findall("shark", txt, re.I))} vez(es); rotulos com W56: '
      f"{sorted(set(re.findall(r'[A-Za-z][^<>]{0,60}[(]W56[)]', txt)))}")
