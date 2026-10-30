# folhas-cena-provar.py — a prova do ferramentas/folhas-cena.py, sobre os clipes de um vídeo já renderizado (o vídeo 4, o
# atlantico-fundo, por padrão).
# Uso (da raiz do canal): python -X utf8 -B ferramentas/folhas-cena-provar.py [<proj>] [--cenas=s01,s02,…]
#   Sem --cenas, prova sete cenas do vídeo 4: s01 (a abertura, foto, sem cena anterior), s02 (mapa), s03 (animação desenhada),
#   s17 (foto, 2 beats), s27 (footage), s30 (mapa fundido com a s31, 26 s: a cadência) e s75 (a tela final, sem voz e sem
#   cena seguinte).
# O que confere:
#   A. a rodada de verdade (--saida numa pasta da prova): saída 0; as folhas que ele imprime são as do disco e as do índice, e
#      o total bate; cada índice bate com o espelho (a janela), com o HTML (o sha1 e o carimbo), com o ffprobe (os quadros do
#      clipe) e com a ordem das cenas (as vizinhas); começo, fim, um quadro dentro de cada beat da regência, a cadência (vão
#      ≤ 4 s), o par da emenda na mesma linha, os instantes (na cena e no vídeo) recalculados do espelho, a fala recalculada do
#      words.json por outro código, quatro quadros por folha, 1920×1208. E os PIXELS: cada célula comparada com o quadro
#      tirado por outro caminho (o filtro select do ffmpeg pelo número do quadro, decodificando do começo, com outra
#      redução), que tem de ser o mais parecido com ela entre o quadro k e os vizinhos k-1 e k+1. E os avisos do lote do
#      qc-visual (M11: um tipo só, até 2 de mapa, até 4 sem mapa, a folga de 5 e o teto de 25), contados aqui pela régua
#      de mapa do `conferir`;
#   B. a mesma rodada de novo: "já feitas", sem regravar nada;
#   C. a pasta padrão (out/<proj>/_tmp/folhas-cena/<cena>/), numa cena;
#   D. a --cadencia (0 e 2), que muda a escolha e a chave dos nomes;
#   E. os argumentos errados (cena fundida, cena fora do espelho, cadência inválida, opção desconhecida): saída 2, nada gravado;
#   F. o recuso, num projeto falso montado na pasta da prova, com cópias do HTML, do carimbo e do espelho e com links para os
#      clipes de verdade (s01, s02 e s03): o clipe mais velho que o HTML recusa com saída 2 e nada gravado, também numa rodada
#      de duas cenas; a vizinha com clipe velho não recusa (a célula da emenda sai cinza, com o motivo); carimbo "1080p", sem
#      carimbo, sem clipe e janela do espelho que não bate com os quadros do clipe recusam. No fim, a pasta do projeto falso
#      se apaga (só links e cópias; os clipes de verdade ficam) e se confere que os clipes de verdade continuam lá.
# Grava só em out/<proj>/_tmp/folhas-cena/ (a prova em _prova/<data-hora>/, que fica, e a cena da pasta padrão). Não abre
# Chrome, não pede mapa, não lê chave.
# Saída: 0 = tudo conferido · 1 = alguma conferência falhou · 2 = não rodou.
import hashlib, json, math, os, re, shutil, subprocess, sys, time

try:
    from PIL import Image, ImageChops, ImageStat
except ImportError:
    print('✗ falta o Pillow')
    sys.exit(2)

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, '..'))
# FOLHAS_CENA_SCRIPT: só para provar a própria prova com uma cópia estragada do script (um mutante tem de reprovar).
SCRIPT = os.environ.get('FOLHAS_CENA_SCRIPT') or os.path.join(AQUI, 'folhas-cena.py')
PADRAO = ['s01', 's02', 's03', 's17', 's27', 's30', 's75']
W, H, CEL_H = 960, 540, 604
LIMIAR = 3.0          # a diferença média (0–255) entre a célula e o quadro tirado pelo outro caminho
FOLGA_VIZ = 0.75      # o quadro k tem de ser o mais parecido, com esta folga sobre k-1 e k+1

conferidas, falhas = 0, []


def ok(cond, msg):
    global conferidas
    conferidas += 1
    if not cond:
        falhas.append(msg)
        print('  ✗', msg)
    return cond


def rodar(argv, cwd=RAIZ):
    env = dict(os.environ, PYTHONIOENCODING='utf-8')
    r = subprocess.run([sys.executable, '-X', 'utf8', '-B', SCRIPT] + argv, cwd=cwd, capture_output=True,
                       stdin=subprocess.DEVNULL, env=env, timeout=1800)
    return r.returncode, (r.stdout + r.stderr).decode('utf-8', 'replace').replace('\r\n', '\n')


def sha1_de(p):
    with open(p, 'rb') as f:
        return hashlib.sha1(f.read()).hexdigest()


def quadros_do_clipe(mp4):
    r = subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-count_packets', '-show_entries',
                        'stream=nb_read_packets,r_frame_rate', '-of', 'json', mp4], capture_output=True,
                       stdin=subprocess.DEVNULL, timeout=120)
    s = json.loads(r.stdout.decode('utf-8'))['streams'][0]
    num, den = s['r_frame_rate'].split('/')
    return int(s['nb_read_packets']), float(num) / float(den)


def tirar_por_select(mp4, ks):
    """Os quadros ks do clipe pelo número (filtro select, decodificando do começo), reduzidos a 960×540 com bicúbica."""
    ks = sorted(set(ks))
    expr = '+'.join(f'eq(n,{k})' for k in ks)
    r = subprocess.run(['ffmpeg', '-nostdin', '-hide_banner', '-v', 'error', '-i', mp4, '-vf',
                        f"select='{expr}',scale={W}:{H}:flags=bicubic", '-fps_mode', 'passthrough', '-f', 'rawvideo',
                        '-pix_fmt', 'rgb24', 'pipe:1'], capture_output=True, stdin=subprocess.DEVNULL, timeout=1800)
    n = W * H * 3
    if r.returncode or len(r.stdout) != n * len(ks):
        raise RuntimeError(f'select em {mp4}: {r.stderr.decode("utf-8", "replace")[:200]} ({len(r.stdout)} bytes)')
    return {k: Image.frombytes('RGB', (W, H), r.stdout[i * n:(i + 1) * n]) for i, k in enumerate(ks)}


def dif(a, b):
    box = (8, 8, W - 8, H - 8)   # sem a moldura laranja da emenda
    return sum(ImageStat.Stat(ImageChops.difference(a.crop(box), b.crop(box))).mean) / 3


def fala_ref(words, tv):
    """A fala do instante, escrita de novo aqui (não importa nada do script)."""
    dentro = []
    for w in words:
        if w['start'] > tv + 0.7:
            break
        if w['end'] < tv - 1.0:
            continue
        dentro.append(w)
    txt = ' '.join(('[' + w['w'] + ']') if (w['start'] <= tv and tv < w['end']) else w['w'] for w in dentro)
    pal = [w['w'] for w in dentro if w['start'] <= tv < w['end']]
    return txt, (pal[0] if pal else None)


def listadas(saida):
    fs = [m.group(1) for m in re.finditer(r'^  (\S.*\.png)$', saida, re.M)]
    m = re.search(r'^✓ (\d+) folhas? de (\d+) cenas?', saida, re.M)
    return fs, (int(m.group(1)) if m else None), (int(m.group(2)) if m else None)


def indice_de(pasta, c):
    js = sorted(x for x in os.listdir(pasta) if re.fullmatch(rf'{re.escape(c)}-[0-9a-f]{{7}}\.json', x)) \
        if os.path.isdir(pasta) else []
    return js


def conferir_indice(proj, c, idx, esp_seg, ordem, reg, words, cadencia, pixels=True, stats=None):
    raiz = f'out/{proj}'
    s = esp_seg[c]
    ok(idx['cena'] == c and abs(idx['inSec'] - float(s['inSec'])) < 1e-9 and abs(idx['dur'] - float(s['dur'])) < 1e-9,
       f'{c}: a janela do índice não é a do espelho')
    html, mp4 = f'{raiz}/graphics/{c}.html', f'{raiz}/graphics/{c}.mp4'
    carimbo = open(mp4 + '.de-html', encoding='utf-8').read().replace('\r', '').split('\n')
    ok(idx['sha1_html'] == sha1_de(html) == carimbo[0] and carimbo[1] == '2160p',
       f'{c}: o sha1 do índice, o do HTML e o do carimbo não batem')
    n, fps = quadros_do_clipe(mp4)
    ok(idx['quadros_no_clipe'] == n and abs(idx['fps'] - fps) < 1e-9, f'{c}: quadros do clipe {idx["quadros_no_clipe"]} ≠ {n}')
    pos = ordem.index(c)
    ant = ordem[pos - 1] if pos > 0 else None
    prox = ordem[pos + 1] if pos + 1 < len(ordem) else None
    va, vs = idx['vizinhas']['anterior'], idx['vizinhas']['seguinte']
    ok((va['cena'] if va else None) == ant and (vs['cena'] if vs else None) == prox,
       f'{c}: vizinhas {va and va["cena"]}/{vs and vs["cena"]}, esperadas {ant}/{prox}')
    qs = idx['quadros']
    ok([q['i'] for q in qs] == list(range(len(qs))), f'{c}: a ordem dos quadros')
    emendas_ini = 1 if ant else 0
    ok((qs[0]['emenda'] == 'anterior') == bool(ant) and (qs[-1]['emenda'] == 'seguinte') == bool(prox),
       f'{c}: as emendas não estão nas pontas')
    princ = [q for q in qs if q['emenda'] is None]
    ok(all(q['fonte'] == c and not q['vazio'] for q in princ), f'{c}: quadro principal de outra cena ou vazio')
    ks = [q['k'] for q in princ]
    ok(ks == sorted(set(ks)), f'{c}: quadros principais fora de ordem ou repetidos')
    ok(ks[0] == 0 and 'começo' in princ[0]['rotulo'], f'{c}: o 1º quadro não é o começo')
    ok(ks[-1] == n - 1 and 'fim' in princ[-1]['rotulo'], f'{c}: o último quadro não é o fim (k={ks[-1]}, n={n})')
    rc = reg.get(c)
    beats = [(max(0.0, float(b['t0'])), min(float(s['dur']), float(b['t1']))) for b in (rc or {}).get('beats', [])]
    beats = [b for b in beats if b[1] > b[0]]
    ok(len(beats) > 0, f'{c}: sem beats na regência (a prova pede cenas com beats)')
    for j, (b0, b1) in enumerate(beats, 1):
        ultimo = j == len(beats)
        ok(any(b0 - 1e-6 <= k / fps and (k / fps <= b1 + 1e-6 if ultimo else k / fps < b1 - 1e-6) for k in ks),
           f'{c}: nenhum quadro dentro do beat {j} ({b0:.3f}–{b1:.3f} s)')
        ok(any(f'beat {j}/{len(beats)}' in q['rotulo'] for q in princ), f'{c}: nenhum quadro rotulado beat {j}')
    if cadencia > 0:
        vao = max((b - a) / fps for a, b in zip(ks, ks[1:]))
        ok(vao <= cadencia + 1 / fps + 1e-6, f'{c}: vão de {vao:.2f} s acima da cadência de {cadencia} s')
    if prox:
        i_fim = emendas_ini + len(princ) - 1
        ok(i_fim % 2 == 0, f'{c}: o fim (posição {i_fim}) não está na coluna da esquerda: o par da emenda partiu')
    for q in qs:
        if q['vazio']:
            ok(q['t_video'] is None and q['emenda'], f'{c}: quadro vazio fora da emenda')
            continue
        fs = esp_seg[q['fonte']]
        nq, fq = (n, fps) if q['fonte'] == c else quadros_do_clipe(f'{raiz}/graphics/{q["fonte"]}.mp4')
        if q['emenda'] == 'anterior':
            ok(q['fonte'] == ant and q['k'] == nq - 1, f'{c}: a emenda anterior não é o último quadro da {ant}')
        if q['emenda'] == 'seguinte':
            ok(q['fonte'] == prox and q['k'] == 0, f'{c}: a emenda seguinte não é o 1º quadro da {prox}')
        ok(abs(q['t_cena'] - q['k'] / fq) < 1e-3, f'{c}: t_cena do quadro {q["i"]}')
        tv = float(fs['inSec']) + q['k'] / fq
        ok(abs(q['t_video'] - tv) < 1e-3, f'{c}: t_video do quadro {q["i"]} ({q["t_video"]} ≠ {tv:.4f})')
        txt, pal = fala_ref(words, q['t_video'])
        ok(q['fala'] == txt and q['palavra'] == pal, f'{c}: a fala do quadro {q["i"]}: "{q["fala"]}" ≠ "{txt}"')
    nf = math.ceil(len(qs) / 4)
    ok(len(idx['folhas']) == nf, f'{c}: {len(idx["folhas"])} folhas para {len(qs)} quadros')
    for q in qs:
        ok(q.get('folha') == idx['folhas'][q['i'] // 4] and q.get('celula') == q['i'] % 4,
           f'{c}: o quadro {q["i"]} na folha ou célula errada')
    folhas = {}
    for p in idx['folhas']:
        ok(os.path.isfile(p), f'{c}: a folha {p} não existe')
        if os.path.isfile(p):
            folhas[p] = Image.open(p).convert('RGB')
            ok(folhas[p].size == (1920, 1208), f'{c}: {p} tem {folhas[p].size}')
    if not pixels:
        return
    por_clipe = {}
    for q in qs:
        if not q['vazio']:
            por_clipe.setdefault(q['fonte'], []).append(q)
    for fonte, lista in por_clipe.items():
        mp4f = f'{raiz}/graphics/{fonte}.mp4'
        nq = n if fonte == c else quadros_do_clipe(mp4f)[0]
        pedir = {kk for q in lista for kk in (q['k'] - 1, q['k'], q['k'] + 1) if 0 <= kk < nq}
        ref = tirar_por_select(mp4f, pedir)
        for q in lista:
            folha = folhas.get(q['folha'])
            if folha is None:
                continue
            x, y = (q['celula'] % 2) * W, (q['celula'] // 2) * CEL_H
            cel = folha.crop((x, y, x + W, y + H))
            d = dif(cel, ref[q['k']])
            dv = [dif(cel, ref[kk]) for kk in (q['k'] - 1, q['k'] + 1) if kk in ref]
            ok(d < LIMIAR, f'{c}: a célula do quadro {q["i"]} ({fonte} k={q["k"]}) difere {d:.2f} do quadro tirado por select')
            ok(not dv or d <= min(dv) + FOLGA_VIZ,
               f'{c}: a célula do quadro {q["i"]} parece mais com um quadro vizinho ({d:.2f} contra {min(dv):.2f})')
            if stats is not None:
                stats['celulas'] += 1
                if dv and min(dv) > d + 1.0:
                    stats['distinguiveis'] += 1


def main():
    os.chdir(RAIZ)
    proj, cenas = 'atlantico-fundo', PADRAO
    for x in sys.argv[1:]:
        if x.startswith('--cenas='):
            cenas = [c for c in x[8:].split(',') if c]
        elif not x.startswith('-'):
            proj = x
        else:
            print('✗ argumento desconhecido:', x)
            return 2
    raiz = f'out/{proj}'
    for p in (f'{raiz}/espelho.json', f'{raiz}/words.json', f'{raiz}/regencia.json', SCRIPT):
        if not os.path.isfile(p):
            print('✗ não encontrado:', p)
            return 2
    esp = json.load(open(f'{raiz}/espelho.json', encoding='utf-8'))
    todos = {s['id']: s for s in esp['segmentos']}
    esp_seg = {i: s for i, s in todos.items() if not s.get('_mergedInto')}
    ordem = sorted(esp_seg, key=lambda c: float(esp_seg[c]['inSec']))
    reg = {c['id']: c for c in json.load(open(f'{raiz}/regencia.json', encoding='utf-8'))['cenas']}
    words = json.load(open(f'{raiz}/words.json', encoding='utf-8'))
    prova = f'{raiz}/_tmp/folhas-cena/_prova/{time.strftime("%Y%m%d-%H%M%S")}'
    os.makedirs(prova)
    print(f'prova em {prova}')

    # A. A rodada de verdade.
    print(f'A. a rodada de verdade: {", ".join(cenas)}')
    real = f'{prova}/real'
    t0 = time.time()
    code, out = rodar([proj] + cenas + [f'--saida={real}'])
    print(f'   ({time.time() - t0:.1f} s)')
    ok(code == 0, f'A: a rodada saiu {code}:\n{out}')
    fs, total, ncen = listadas(out)
    ok(fs and total == len(fs) and ncen == len(cenas),
       f'A: o total impresso ({total}, {ncen} cenas) não bate com a lista ({len(fs)})')
    ok(all(os.path.isfile(p) for p in fs), 'A: folha listada que não existe')
    no_disco = set()
    stats = {'celulas': 0, 'distinguiveis': 0}
    indices = {}
    for c in cenas:
        js = indice_de(f'{real}/{c}', c)
        if not ok(len(js) == 1, f'A: {c} tem {len(js)} índices'):
            continue
        idx = json.load(open(f'{real}/{c}/{js[0]}', encoding='utf-8'))
        indices[c] = idx
        no_disco |= {f'{real}/{c}/{x}'.replace('\\', '/') for x in os.listdir(f'{real}/{c}') if x.endswith('.png')}
        n0 = len(falhas)
        conferir_indice(proj, c, idx, esp_seg, ordem, reg, words, 4.0, stats=stats)
        nq = len(idx['quadros'])
        print(f'   {c}: {nq} quadros ({sum(1 for q in idx["quadros"] if q["emenda"])} de emenda) em {len(idx["folhas"])} '
              f'folhas · {"ok" if len(falhas) == n0 else "FALHOU"}')
    ok(set(fs) == no_disco == {p for i in indices.values() for p in i['folhas']},
       'A: as folhas impressas, as do disco e as dos índices não são as mesmas')
    print(f'   pixels: {stats["celulas"]} células comparadas; em {stats["distinguiveis"]} o quadro vizinho difere > 1,0 a mais')
    ok(stats['distinguiveis'] >= 3, 'A: a comparação de pixels não distinguiu quadros vizinhos em nenhuma cena animada')
    if 's75' in indices:
        i75 = indices['s75']
        ultima = max(w['end'] for w in words)
        mudos = [q for q in i75['quadros'] if not q['vazio'] and q['t_video'] > ultima + 1.0]
        ok(mudos and all(q['fala'] == '' for q in mudos), 's75: quadro da tela final com fala')
        ok(i75['vizinhas']['seguinte'] is None and i75['quadros'][-1]['emenda'] is None, 's75: emenda depois do fim do vídeo')
    if 's01' in indices:
        ok(indices['s01']['vizinhas']['anterior'] is None and indices['s01']['quadros'][0]['emenda'] is None,
           's01: emenda antes do começo do vídeo')
    # O aviso do lote do qc-visual (M11, §2.1, item 2), pela régua do `conferir` (a base de mapa no HTML), contado aqui.
    rmapa = re.compile(r'_vendor/(?:perfil-mapa|maplibre-gl)\.js')
    mapas_a = [c for c in cenas if rmapa.search(open(f'{raiz}/graphics/{c}.html', encoding='utf-8', errors='replace').read())]
    sem_a = [c for c in cenas if c not in mapas_a]
    ok(('o lote é de um tipo só' in out) == bool(mapas_a and sem_a), f'A: o aviso do tipo do lote ({mapas_a} / {sem_a})')
    ok(('o lote leva até 4' in out) == (len(sem_a) > 4), f'A: o aviso de mais de 4 sem mapa ({len(sem_a)})')
    ok(('o lote leva até 2' in out) == (len(mapas_a) > 2 or (len(mapas_a) > 1 and any(float(esp_seg[c]['dur']) > 30 for c in mapas_a))),
       f'A: o aviso das cenas de mapa ({mapas_a})')
    ok(('folga' in out) == (20 < (total or 0) <= 25) and ('passam do teto' in out) == ((total or 0) > 25),
       f'A: o aviso da folga e do teto ({total} folhas)')

    # B. De novo: "já feitas", nada regravado.
    print('B. a mesma rodada de novo')
    antes = {p: os.path.getmtime(p) for p in fs}
    code, out2 = rodar([proj] + cenas + [f'--saida={real}'])
    fs2, total2, _ = listadas(out2)
    ok(code == 0 and fs2 and fs2 == fs and total2 == total, 'B: a 2ª rodada não listou as mesmas folhas')
    ok(out2.count('já feitas') == len(cenas), 'B: a 2ª rodada não disse "já feitas" em todas as cenas')
    ok(all(os.path.getmtime(p) == antes[p] for p in fs), 'B: a 2ª rodada regravou folha')

    # C. A pasta padrão.
    print('C. a pasta padrão, na s02')
    code, out3 = rodar([proj, 's02'])
    fs3, _, _ = listadas(out3)
    ok(code == 0 and fs3 and all(p.startswith(f'{raiz}/_tmp/folhas-cena/s02/s02-') and os.path.isfile(p) for p in fs3),
       f'C: a pasta padrão: {out3}')
    ok('para um lote do qc-visual' not in out3 and 'folga' not in out3, f'C: aviso de lote numa cena só: {out3}')

    # D. A cadência.
    print('D. a cadência (0 e 2), na s30')
    if 's30' in esp_seg:
        for cad in (0, 2):
            pasta = f'{prova}/cad{cad}'
            code, out4 = rodar([proj, 's30', f'--saida={pasta}', f'--cadencia={cad}'])
            js = indice_de(f'{pasta}/s30', 's30')
            if ok(code == 0 and len(js) == 1, f'D: --cadencia={cad} saiu {code}: {out4}'):
                idx = json.load(open(f'{pasta}/s30/{js[0]}', encoding='utf-8'))
                conferir_indice(proj, 's30', idx, esp_seg, ordem, reg, words, float(cad), pixels=False)
                if cad == 0:
                    # Sem cadência, sobra no máximo o quadro que acerta o par da emenda na linha.
                    ok(sum(q['rotulo'] == 'cadência' for q in idx['quadros']) <= 1,
                       'D: --cadencia=0 ainda pôs quadros de cadência (além do que acerta o par da emenda)')
                ok('s30' not in indices or idx['chave'] != indices['s30']['chave'], 'D: a cadência não mudou a chave dos nomes')

    # E. Argumentos errados: saída 2 e nada gravado.
    print('E. os argumentos errados')
    nada = f'{prova}/nada'
    for argv, espera in (([], 'uso'), ([proj], 'uso'), ([proj, 's31', f'--saida={nada}'], 'fundida em s30'),
                         ([proj, 's99', f'--saida={nada}'], 'fora do espelho'),
                         ([proj, 's02', '--cadencia=abc', f'--saida={nada}'], 'cadencia'),
                         ([proj, 's02', '--cadencia=0.2', f'--saida={nada}'], 'cadencia'),
                         ([proj, 's02', '--xyz', f'--saida={nada}'], 'desconhecido'),
                         (['projeto-que-nao-existe', 's02', f'--saida={nada}'], 'não encontrado')):
        if 's31' in argv and 's31' not in todos:
            continue
        code, o = rodar(argv)
        ok(code == 2 and espera in o, f'E: {argv} saiu {code}, sem "{espera}": {o.strip()[:200]}')
    ok(not os.path.exists(nada), 'E: argumento errado gravou alguma coisa')

    # F. O recuso, num projeto falso.
    print('F. o recuso do clipe velho, num projeto falso (s01, s02, s03)')
    trio = ordem[:3]
    falso = os.path.abspath(f'{prova}/falso')
    g = f'{falso}/out/prova/graphics'
    os.makedirs(g)
    real_g = os.path.abspath(f'{raiz}/graphics')
    assert os.path.normcase(os.path.realpath(g)) != os.path.normcase(os.path.realpath(real_g))
    sub = dict(esp, segmentos=[dict(esp_seg[c]) for c in trio])
    json.dump(sub, open(f'{falso}/out/prova/espelho.json', 'w', encoding='utf-8'), ensure_ascii=False)
    shutil.copyfile(f'{raiz}/words.json', f'{falso}/out/prova/words.json')
    shutil.copyfile(f'{raiz}/regencia.json', f'{falso}/out/prova/regencia.json')
    tam = {}
    ligado = []
    for c in trio:
        shutil.copyfile(f'{real_g}/{c}.html', f'{g}/{c}.html')
        shutil.copyfile(f'{real_g}/{c}.mp4.de-html', f'{g}/{c}.mp4.de-html')
        tam[c] = os.path.getsize(f'{real_g}/{c}.mp4')
        try:
            os.link(f'{real_g}/{c}.mp4', f'{g}/{c}.mp4')
            ligado.append(c)
        except OSError:
            shutil.copyfile(f'{real_g}/{c}.mp4', f'{g}/{c}.mp4')
    a1, a2, a3 = trio

    def rf(argv, nome):
        pasta = f'{falso}/saida-{nome}'
        code, o = rodar(['prova'] + argv + [f'--saida={pasta}'], cwd=falso)
        return code, o, pasta

    try:
        code, o, p = rf([a2], 'F0')
        js = indice_de(f'{p}/{a2}', a2)
        ok(code == 0 and len(js) == 1, f'F0: o projeto falso sem mudança saiu {code}: {o}')
        chave0 = json.load(open(f'{p}/{a2}/{js[0]}', encoding='utf-8'))['chave'] if js else None

        with open(f'{g}/{a2}.html', 'a', encoding='utf-8') as f:
            f.write('\n<!-- prova: o HTML mudou depois do render -->\n')
        code, o, p = rf([a2], 'F1')
        ok(code == 2 and 'mais velho que o HTML' in o and a2 in o, f'F1: o clipe velho não recusou: {code} {o}')
        ok(not os.path.exists(p), 'F1: o recuso gravou alguma coisa')
        code, o, p = rf([a1, a2], 'F2')
        ok(code == 2 and 'mais velho que o HTML' in o and f'✓ {a1}' not in o, f'F2: a rodada de duas não recusou: {code} {o}')
        ok(not os.path.exists(p), 'F2: o recuso de duas cenas gravou alguma coisa')
        shutil.copyfile(f'{real_g}/{a2}.html', f'{g}/{a2}.html')

        with open(f'{g}/{a1}.html', 'a', encoding='utf-8') as f:
            f.write('\n<!-- prova: a vizinha mudou depois do render -->\n')
        code, o, p = rf([a2], 'F3')
        js = indice_de(f'{p}/{a2}', a2)
        if ok(code == 0 and len(js) == 1, f'F3: a vizinha velha recusou a cena: {code} {o}'):
            idx = json.load(open(f'{p}/{a2}/{js[0]}', encoding='utf-8'))
            q0 = idx['quadros'][0]
            ok(q0['emenda'] == 'anterior' and q0['vazio'] and 'mais velho' in (q0.get('motivo') or ''),
               'F3: a emenda com a vizinha velha não saiu vazia com o motivo')
            ok(idx['vizinhas']['anterior']['ok'] is False and idx['vizinhas']['seguinte']['ok'] is True,
               'F3: o estado das vizinhas no índice')
            ok(f'! emenda com a {a1} sem quadro' in o, 'F3: o aviso da vizinha velha não saiu')
            ok(idx['chave'] != chave0, 'F3: a vizinha velha não mudou a chave dos nomes')
            folha = Image.open(os.path.join(falso, idx['folhas'][0])).convert('RGB')
            ok(folha.getpixel((40, 40)) == (225, 225, 225), 'F3: a célula da emenda vazia não saiu cinza')
        shutil.copyfile(f'{real_g}/{a1}.html', f'{g}/{a1}.html')

        open(f'{g}/{a3}.mp4.de-html', 'w', encoding='utf-8').write(sha1_de(f'{g}/{a3}.html') + '\n1080p\n')
        code, o, p = rf([a3], 'F4')
        ok(code == 2 and '1080p' in o and not os.path.exists(p), f'F4: o carimbo 1080p não recusou: {code} {o}')
        os.remove(f'{g}/{a3}.mp4.de-html')
        code, o, p = rf([a3], 'F5')
        ok(code == 2 and 'sem carimbo' in o and not os.path.exists(p), f'F5: sem carimbo não recusou: {code} {o}')
        shutil.copyfile(f'{real_g}/{a3}.mp4.de-html', f'{g}/{a3}.mp4.de-html')
        os.remove(f'{g}/{a3}.mp4')
        code, o, p = rf([a3], 'F6')
        ok(code == 2 and 'sem clipe' in o and not os.path.exists(p), f'F6: sem clipe não recusou: {code} {o}')
        try:
            os.link(f'{real_g}/{a3}.mp4', f'{g}/{a3}.mp4')
        except OSError:
            shutil.copyfile(f'{real_g}/{a3}.mp4', f'{g}/{a3}.mp4')

        sub2 = json.loads(json.dumps(sub))
        sub2['segmentos'][1]['dur'] = float(sub2['segmentos'][1]['dur']) + 0.5
        json.dump(sub2, open(f'{falso}/out/prova/espelho.json', 'w', encoding='utf-8'), ensure_ascii=False)
        code, o, p = rf([a2], 'F7')
        ok(code == 2 and 'quadros' in o and 'janela do espelho' in o and not os.path.exists(p),
           f'F7: a janela que não bate com o clipe não recusou: {code} {o}')
        json.dump(sub, open(f'{falso}/out/prova/espelho.json', 'w', encoding='utf-8'), ensure_ascii=False)
        code, o, p = rf([a2], 'F8')
        ok(code == 0, f'F8: o projeto falso restaurado não voltou a passar: {code} {o}')
    finally:
        shutil.rmtree(falso)
        for c in trio:
            ok(os.path.getsize(f'{real_g}/{c}.mp4') == tam[c], f'F: o clipe de verdade da {c} mudou de tamanho')
            ok(sha1_de(f'{real_g}/{c}.html') == open(f'{real_g}/{c}.mp4.de-html', encoding='utf-8').read().split()[0],
               f'F: o HTML ou o carimbo de verdade da {c} mudou')
    print(f'   (os clipes do projeto falso eram {"links" if len(ligado) == 3 else "cópias"}; a pasta foi apagada)')

    print(f'{"✓" if not falhas else "✗"} {conferidas} conferências, {len(falhas)} falha{"s" if len(falhas) != 1 else ""}'
          f' · {prova}')
    return 0 if not falhas else 1


if __name__ == '__main__':
    sys.exit(main())
