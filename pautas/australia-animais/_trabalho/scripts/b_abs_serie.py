"""b_abs_serie.py: tira da Table 1.2 do cubo 2025_01 do ABS (Causes of Death, Australia, 2025; registrados 2016-2025) as series por codigo CID-10
e imprime o numero de PESSOAS por ano, a soma e a media. Fonte: midia/australia-animais/fontes/b/abs-2025_01.xlsx
uso: python -X utf8 -B b_abs_serie.py"""
import re, sys
sys.path.insert(0, r'C:\projetos\alpha-point\pautas\australia-animais\_trabalho\scripts')
from b_xlsx import ler_folha

ARQ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\b\abs-2025_01.xlsx'
ANOS = list(range(2016, 2026))

def main():
    linhas = ler_folha(ARQ, 'Table 1.2')
    # cabecalho: linha 3 tem os anos; cada ano ocupa 3 colunas (M, F, P) a partir da coluna 2
    cab = linhas[3]
    col_pessoas = {}
    for i, v in enumerate(cab):
        if v and re.fullmatch(r'\d{4}', str(v).strip()):
            col_pessoas[int(v)] = i + 2  # persons = 3a coluna do bloco
    assert sorted(col_pessoas) == ANOS, col_pessoas
    codigos = ['X20-X29', 'X20', 'X21', 'X22', 'X23', 'X24', 'X25', 'X26', 'X27', 'X28', 'X29',
               'V80', 'W54', 'W55', 'W56', 'W57', 'W58', 'W59', 'W53', 'W50-W64', 'V01-V99', 'V89', 'V99', 'V87', 'V43', 'V29', 'V19', 'V09',
               'T63', 'T78.2', 'W19', 'W01', 'W06', 'W10', 'W18', 'W65-W74', 'W69', 'W70', 'W74', 'X30', 'X30-X39', 'W56', 'Y']
    achou = {}
    for l in linhas:
        if not l or not l[0]:
            continue
        m = re.search(r'\(([A-Z]\d\d(?:\.\d)?(?:-[A-Z]\d\d)?)\)\s*$', str(l[0]).strip())
        if not m:
            continue
        cod = m.group(1)
        if cod in codigos and cod not in achou:
            try:
                ser = [int(float(l[col_pessoas[a]])) if l[col_pessoas[a]] not in (None, '', 'np', '—') else None for a in ANOS]
            except Exception as e:
                ser = [l[col_pessoas[a]] for a in ANOS]
            achou[cod] = (str(l[0]).strip(), ser)
    for cod, (nome, ser) in achou.items():
        nums = [x for x in ser if isinstance(x, int)]
        print(f'{cod:9s} {nome[:70]:70s} {ser}  soma10={sum(nums)}  media={sum(nums)/len(nums):.1f}')

main()
