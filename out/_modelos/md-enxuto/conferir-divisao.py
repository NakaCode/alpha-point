# -*- coding: utf-8 -*-
"""Confere, pelo mapa, a divisão proposta do CLAUDE.md enxuto: que nenhuma linha se perde.

Uso, da raiz do canal:
    python -X utf8 -B out/_modelos/md-enxuto/conferir-divisao.py [--previa=<pasta>]

Só lê o CLAUDE.md, o mapa-de-linhas.json e o CLAUDE-nucleo-rascunho.md. Não usa o montar-rascunho.py: a conta é feita de
novo, do zero. Confere:
  1. a versão: o sha256 do CLAUDE.md é o do mapa, e o sha1 de cada bloco bate com as linhas dele;
  2. a partição: toda linha não vazia do CLAUDE.md está em um bloco, e em um só;
  3. os destinos: cada bloco vai ao núcleo ou a um arquivo `sala/<assunto>.md` declarado no mapa;
  4. o núcleo: o rascunho é exatamente os blocos do núcleo, palavra por palavra (só o recuo do começo da linha pode
     mudar), mais o texto novo declarado no mapa, na ordem do mapa, e nada mais;
  5. o índice: o núcleo cita cada arquivo da Sala e o `sala/CLAUDE-completo.md`, e traz o título de cada seção do
     CLAUDE.md de hoje;
  6. as citações: todo assunto do CLAUDE.md que as roupas, os ofícios, o regimento, as skills, a marca e as ferramentas
     citam ("CLAUDE.md, «…»"), e todo assunto que um bloco cita fora do arquivo para onde ele vai, aparece no núcleo
     (num título que ficou, ou no índice);
  7. com --previa: monta numa pasta à parte o núcleo, os arquivos da Sala e a cópia completa, relê os arquivos gravados
     e confere que cada linha não vazia do CLAUDE.md está, palavra por palavra, no arquivo do destino dela.

Saída 0 = tudo confere; 1 = achou problema (a lista vai na tela); 2 = não rodou (falta arquivo).
Os tamanhos (em tokens, a 2,2 caracteres por token, como na página "Dois caminhos para a cota") saem como informação.
"""
import collections
import glob
import hashlib
import json
import os
import re
import sys

RAIZ = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..'))
PASTA = os.path.join(RAIZ, 'out', '_modelos', 'md-enxuto')
ORIGEM = os.path.join(RAIZ, 'CLAUDE.md')
MAPA = os.path.join(PASTA, 'mapa-de-linhas.json')
NUCLEO = os.path.join(PASTA, 'CLAUDE-nucleo-rascunho.md')

# Aspas que casam com o nome de um assunto, mas não o citam (a resposta do Lucas sobre o Programa de Parcerias).
NAO_E_CITACAO = {'Ainda não'}

problemas = []


def falha(msg):
    problemas.append(msg)


def ler(caminho):
    if not os.path.exists(caminho):
        print(f'não rodou: falta {os.path.relpath(caminho, RAIZ)}')
        sys.exit(2)
    return open(caminho, encoding='utf-8').read()


def sem_quebra(txt):
    t = txt.split('\n')
    return t[:-1] if t and t[-1] == '' else t


def junta(txt):
    return re.sub(r'\s+', ' ', txt)


def titulo(h):
    return re.sub(r'^#+\s*', '', h).strip()


def sem_parenteses(t):
    return re.sub(r'\s*\([^()]*\)\s*$', '', t).strip()


def main():
    global ORIGEM, NUCLEO
    previa = None
    aplicado = False
    for a in sys.argv[1:]:
        if a.startswith('--previa='):
            previa = a.split('=', 1)[1]
        elif a == '--aplicado':
            # depois do ok do Lucas e da divisão feita: a origem é a cópia completa, o núcleo é o CLAUDE.md, e os
            # arquivos da Sala são os de sala/, lidos do disco
            aplicado = True
            ORIGEM = os.path.join(RAIZ, 'sala', 'CLAUDE-completo.md')
            NUCLEO = os.path.join(RAIZ, 'CLAUDE.md')
        else:
            print(__doc__)
            sys.exit(2)
    if previa and aplicado:
        print('--previa e --aplicado não andam juntos')
        sys.exit(2)

    texto = ler(ORIGEM)
    mapa = json.loads(ler(MAPA))
    rascunho = ler(NUCLEO)
    linhas = sem_quebra(texto)
    cpt = mapa.get('chars_por_token', 2.2)

    def tok(c):
        return round(c / cpt)

    # 1. a versão
    sha256 = hashlib.sha256(texto.encode('utf-8')).hexdigest()
    if sha256 != mapa['origem']['sha256']:
        falha(f'o CLAUDE.md mudou depois do mapa (sha256 {sha256[:12]}, o mapa diz {mapa["origem"]["sha256"][:12]}): '
              f'rode o montar-rascunho.py de novo, com as faixas ajustadas')
    if len(linhas) != mapa['origem']['linhas']:
        falha(f'o CLAUDE.md tem {len(linhas)} linhas; o mapa, {mapa["origem"]["linhas"]}')

    arquivos = mapa['arquivos']
    blocos = sorted(mapa['blocos'], key=lambda b: b['linhas'][0])
    por_id = {b['id']: b for b in blocos}
    if len(por_id) != len(blocos):
        falha('há id de bloco repetido no mapa')

    # 2 e 3. a partição e os destinos
    dono = [None] * (len(linhas) + 1)
    for b in blocos:
        a, z = b['linhas']
        if not (1 <= a <= z <= len(linhas)):
            falha(f'{b["id"]}: faixa {a}-{z} fora do arquivo')
            continue
        trecho = '\n'.join(linhas[a - 1:z])
        if hashlib.sha1(trecho.encode('utf-8')).hexdigest() != b['sha1']:
            falha(f'{b["id"]} ({a}-{z}): o texto mudou desde o mapa (sha1 não bate); a 1ª linha do mapa era: '
                  f'{b["primeira_linha"][:70]}')
        for i in range(a, z + 1):
            if dono[i] is not None:
                falha(f'linha {i} está em dois blocos ({dono[i]} e {b["id"]})')
            dono[i] = b['id']
        d = b['destino']
        if d not in arquivos:
            falha(f'{b["id"]}: destino {d} não está declarado em "arquivos"')
        elif d != 'nucleo' and not (d.startswith('sala/') and d.endswith('.md')):
            falha(f'{b["id"]}: destino {d} não é o núcleo nem um arquivo sala/<assunto>.md')
        if d == 'sala/CLAUDE-completo.md':
            falha(f'{b["id"]}: a cópia completa não é destino de bloco')
    sem_dono = [i for i in range(1, len(linhas) + 1) if linhas[i - 1].strip() and dono[i] is None]
    if sem_dono:
        falha(f'{len(sem_dono)} linhas não vazias sem destino, a 1ª é a {sem_dono[0]}: {linhas[sem_dono[0] - 1][:70]}')
    nao_vazias = sum(1 for l in linhas if l.strip())

    # 4. o núcleo
    nucleo_ids = [b['id'] for b in blocos if b['destino'] == 'nucleo']
    novos = {n['id']: n['texto'] for n in mapa.get('nucleo_novo', [])}
    ordem = mapa.get('nucleo_ordem', [])
    blocos_na_ordem = [x for x in ordem if x in por_id]
    if sorted(blocos_na_ordem) != sorted(nucleo_ids) or len(set(blocos_na_ordem)) != len(blocos_na_ordem):
        falha('a nucleo_ordem não traz cada bloco do núcleo exatamente uma vez')
    for x in ordem:
        if x not in por_id and x not in novos:
            falha(f'nucleo_ordem cita {x}, que não é bloco nem texto novo')
        if x in por_id and por_id[x]['destino'] != 'nucleo':
            falha(f'nucleo_ordem cita {x}, que vai para {por_id[x]["destino"]}')
    esperado = []
    for x in ordem:
        if x in por_id:
            a, z = por_id[x]['linhas']
            esperado += [(l.strip(), x) for l in linhas[a - 1:z] if l.strip()]
        elif x in novos:
            esperado += [(l.strip(), x) for l in novos[x].split('\n') if l.strip()]
    obtido = [l.strip() for l in sem_quebra(rascunho) if l.strip()]
    if [e[0] for e in esperado] != obtido:
        for k, (e, o) in enumerate(zip([e[0] for e in esperado], obtido)):
            if e != o:
                p = next((j for j, (x, y) in enumerate(zip(e, o)) if x != y), min(len(e), len(o)))
                ini = max(0, p - 30)
                falha(f'o rascunho do núcleo difere do mapa na linha não vazia {k + 1} (bloco {esperado[k][1]}), no '
                      f'caractere {p + 1}: esperado «…{e[ini:p + 30]}», está «…{o[ini:p + 30]}»')
                break
        else:
            falha(f'o rascunho do núcleo tem {len(obtido)} linhas não vazias; o mapa monta {len(esperado)}')
    # o recuo é a única diferença permitida: as linhas do núcleo vindas de bloco terminam iguais
    for x in blocos_na_ordem:
        a, z = por_id[x]['linhas']
        r = por_id[x].get('recuo_tirado', 0)
        for l in linhas[a - 1:z]:
            if l.strip() and r and not l.startswith(' ' * r) and l[:r].strip():
                falha(f'{x}: o recuo tirado ({r}) comeria texto da linha «{l[:50]}»')

    # 5. o índice
    nuc = junta(rascunho)
    for d in arquivos:
        if d != 'nucleo' and d not in rascunho:
            falha(f'o núcleo não cita {d}')
    if 'sala/CLAUDE-completo.md' not in rascunho:
        falha('o núcleo não diz onde fica o CLAUDE.md completo (sala/CLAUDE-completo.md)')
    for l in linhas:
        if l.startswith('## '):
            t = sem_parenteses(titulo(l))
            if t not in nuc:
                falha(f'o título de seção «{t}» não aparece no núcleo (nem como título, nem no índice)')

    # 6. as citações
    assuntos = {}  # nome -> linha
    for i, l in enumerate(linhas, 1):
        s = l.strip()
        m = re.match(r'^#{1,3} (.+)$', s)
        if m:
            assuntos.setdefault(sem_parenteses(m.group(1)), i)
        m = re.match(r'^(?:- |\d+\. )?\*\*([^*]{4,90})\*\*', s)
        if m:
            assuntos.setdefault(m.group(1).strip().rstrip(':.').strip(), i)

    def assunto_de(nome):
        if nome in NAO_E_CITACAO:
            return None
        if nome in assuntos:
            return assuntos[nome]
        cand = [ln for a, ln in assuntos.items() if a.startswith(nome) and len(nome) >= 9]
        return min(cand) if cand else None

    def destino_da_linha(i):
        return por_id[dono[i]]['destino'] if dono[i] else None

    externos = []
    fontes = (glob.glob(os.path.join(RAIZ, '.claude', 'agents', '*.md')) + glob.glob(os.path.join(RAIZ, 'marca', 'agentes', '*.md'))
              + [os.path.join(RAIZ, 'setores', 'REGIMENTO.md'), os.path.join(RAIZ, 'APRENDIZADOS.md')]
              + glob.glob(os.path.join(RAIZ, '.claude', 'skills', '*', 'SKILL.md'))
              + glob.glob(os.path.join(RAIZ, 'marca', '*.md')) + glob.glob(os.path.join(RAIZ, 'ferramentas', '**', '*.md'), recursive=True))
    for f in fontes:
        if not os.path.exists(f):
            continue
        t = junta(open(f, encoding='utf-8').read())
        for m in re.finditer(r'CLAUDE\.md', t):
            trecho = t[m.end():m.end() + 260]
            corte = re.search(r'[)\]]|\. [A-ZÀ-Ú]', trecho)
            trecho = trecho[:corte.start()] if corte else trecho
            for nome in re.findall(r'"([^"]{4,90})"', trecho):
                if assunto_de(nome):
                    externos.append((nome, os.path.relpath(f, RAIZ).replace('\\', '/')))
    sem_lugar = collections.defaultdict(set)
    for nome, f in externos:
        if junta(nome) not in nuc:
            sem_lugar[nome].add(f)
    for nome, fs in sorted(sem_lugar.items()):
        falha(f'«{nome}», citado como "CLAUDE.md, «…»" em {", ".join(sorted(fs))}, não aparece no núcleo')

    internos = 0
    for b in blocos:
        a, z = b['linhas']
        t = junta(' '.join(linhas[a - 1:z]))
        for nome in re.findall(r'"([^"]{4,90})"', t):
            alvo = assunto_de(nome)
            if not alvo:
                continue
            if destino_da_linha(alvo) == b['destino'] and b['destino'] != 'nucleo':
                continue  # cita um assunto do mesmo arquivo da Sala
            internos += 1
            if junta(nome) not in nuc:
                falha(f'{b["id"]} ({a}-{z}, vai para {b["destino"]}) cita «{nome}», que está em '
                      f'{destino_da_linha(alvo)}, e o núcleo não diz onde')

    # 7. a prévia
    if previa:
        previa = os.path.abspath(previa)
        if os.path.commonpath([previa, RAIZ]) == RAIZ and not previa.startswith(PASTA):
            print('a prévia não se grava no canal fora de out/_modelos/md-enxuto/: use uma pasta temporária')
            sys.exit(2)
        os.makedirs(os.path.join(previa, 'sala'), exist_ok=True)
        with open(os.path.join(previa, 'CLAUDE.md'), 'w', encoding='utf-8', newline='\n') as f:
            f.write(rascunho)
        with open(os.path.join(previa, 'sala', 'CLAUDE-completo.md'), 'w', encoding='utf-8', newline='\n') as f:
            f.write(texto)
        for d, info in arquivos.items():
            if d == 'nucleo':
                continue
            saida = [f'# `{d}`, da Sala de controle', '',
                     'Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: '
                     '`out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, '
                     '`sala/CLAUDE-completo.md`.', '', info['papel'], '']
            secao = None
            for b in blocos:
                if b['destino'] != d:
                    continue
                a, z = b['linhas']
                trecho = linhas[a - 1:z]
                primeira = next((l for l in trecho if l.strip()), '')
                if b['secao_origem'] != secao and not primeira.startswith('#'):
                    saida += ['', f'## {b["secao_origem"]} (do CLAUDE.md)', '']
                secao = b['secao_origem']
                saida += trecho
            caminho = os.path.join(previa, d.replace('/', os.sep))
            with open(caminho, 'w', encoding='utf-8', newline='\n') as f:
                f.write('\n'.join(saida).rstrip('\n') + '\n')
    lida = previa or (RAIZ if aplicado else None)
    if lida:
        # relê os arquivos (os da prévia, ou os de verdade com --aplicado) e confere linha a linha, por arquivo
        gravado = {}
        for d in arquivos:
            caminho = os.path.join(lida, 'CLAUDE.md' if d == 'nucleo' else d.replace('/', os.sep))
            if not os.path.exists(caminho):
                falha(f'falta o arquivo {os.path.relpath(caminho, lida)}')
                gravado[d] = collections.Counter()
                continue
            gravado[d] = collections.Counter(l.strip() for l in sem_quebra(open(caminho, encoding='utf-8').read()) if l.strip())
        precisa = collections.defaultdict(collections.Counter)
        for i, l in enumerate(linhas, 1):
            if l.strip():
                precisa[destino_da_linha(i)][l.strip()] += 1
        for d, cont in precisa.items():
            for l, k in cont.items():
                if gravado.get(d, collections.Counter())[l] < k:
                    falha(f'a linha «{l[:60]}» devia estar {k}× em {d}, e está {gravado.get(d, {}).get(l, 0)}×')
        completo = open(os.path.join(lida, 'sala', 'CLAUDE-completo.md'), encoding='utf-8').read()
        if hashlib.sha256(completo.encode('utf-8')).hexdigest() != mapa['origem']['sha256']:
            falha('a cópia completa (sala/CLAUDE-completo.md) não tem o sha256 do CLAUDE.md que o mapa dividiu')

    # os tamanhos (informação)
    por_dest = collections.Counter()
    por_cat = collections.Counter()
    for b in blocos:
        a, z = b['linhas']
        c = sum(len(linhas[i - 1]) + 1 for i in range(a, z + 1))
        por_dest[b['destino']] += c
        por_cat[(b['categoria'], 'núcleo' if b['destino'] == 'nucleo' else 'sala')] += c
    print(f'CLAUDE.md de hoje: {len(linhas)} linhas ({nao_vazias} não vazias), ~{tok(len(texto))} tokens')
    print(f'blocos: {len(blocos)}; no núcleo, {len(nucleo_ids)} blocos e {len(novos)} trechos de texto novo')
    print(f'núcleo (o rascunho inteiro): ~{tok(len(rascunho))} tokens; das linhas de hoje, ~{tok(por_dest["nucleo"])}; '
          f'texto novo, ~{tok(len(rascunho) - por_dest["nucleo"])} (alvo da página: uns {mapa.get("alvo_nucleo_tokens", 15000)})')
    for d in sorted(por_dest, key=lambda k: -por_dest[k]):
        if d != 'nucleo':
            print(f'  {d}: ~{tok(por_dest[d])} tokens')
    print('por categoria: ' + '; '.join(f'{c} → {onde}: ~{tok(v)}' for (c, onde), v in sorted(por_cat.items())))
    print(f'citações conferidas: {len(externos)} de fora do CLAUDE.md, {internos} de dentro (entre destinos)')
    if previa:
        print(f'prévia gravada e relida em {previa}')
    if aplicado:
        print('aplicado: o CLAUDE.md (núcleo), os arquivos de sala/ e a cópia completa relidos do disco')

    if problemas:
        print(f'\n{len(problemas)} problema(s):')
        for p in problemas:
            print(' - ' + p)
        sys.exit(1)
    print('\nOK: toda linha não vazia do CLAUDE.md de hoje tem um destino só, e o núcleo é palavra por palavra.')
    sys.exit(0)


if __name__ == '__main__':
    main()
