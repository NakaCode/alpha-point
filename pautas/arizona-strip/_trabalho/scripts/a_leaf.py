# Leitor A (vídeo 8): acha o número da folha (leaf) de uma linha do texto djvu do Internet Archive (páginas separadas por \f).
# Uso: python -X utf8 -B a_leaf.py <arquivo.txt> <linha>
import sys
t = open(sys.argv[1], encoding='utf-8', errors='replace').read()
linhas = t.split('\n')
alvo = int(sys.argv[2])
ff = 0
for i, l in enumerate(linhas, 1):
    ff += l.count('\x0c')
    if i >= alvo:
        break
print('form feeds antes da linha', alvo, '=', ff, '-> folha (0-based) =', ff)
