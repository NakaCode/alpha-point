# folhas-cena.py — as folhas de quadros de uma cena, tiradas do clipe dela já renderizado. É o 2º script do caminho 1 da
# página "Dois caminhos para a cota" ("As folhas de quadros"; out/_modelos/esforco-2026-10-29/): no vídeo 4 foram 176
# comandos de ffmpeg no qc-visual e 138 voltas de quadros no mapista. O Lucas, 30/10/2026, no chat da Sala: "Vamos testar
# neste próximo vídeo os trabalhos mecânicos com script e o .md enxuto, a depender do resultado, voltamos ao modo como
# funciona hoje".
#
# Uso (da raiz do canal): python -X utf8 -B ferramentas/folhas-cena.py <proj> <cena> [<cena>…] [--saida=<pasta>]
#                         [--cadencia=4]
#   --saida=<pasta>  a pasta-base; as folhas vão a <pasta>/<cena>/. Sem ela: out/<proj>/_tmp/folhas-cena/<cena>/ (fora do git).
#   --cadencia=<s>   o maior vão entre dois quadros da cena (4 s, como pede a roupa do qc-visual, §2.1: "um a cada ~4 s
#                    para a cadência"); 0 desliga.
# Quem roda: o setor Qualidade, antes de cada lote do qc-visual; o editor-de-arte e o mapista, para ver o próprio trabalho.
#
# O que faz, para cada cena pedida, na ordem do vídeo:
#   1. confere o clipe dela, out/<proj>/graphics/<cena>.mp4 (o mesmo lugar onde o render e o clipe de prova do mapista
#      gravam), pelo carimbo out/<proj>/graphics/<cena>.mp4.de-html, que o renderizar.mjs da pré-v1 grava com duas linhas:
#      o sha1 dos bytes do HTML que ele leu e a resolução. O clipe vale só com o sha1 igual ao do HTML de hoje, "2160p",
#      3840×2160 e o número de quadros da janela do espelho (±1);
#   2. escolhe os quadros, em quadros inteiros do clipe (30 fps):
#      - o começo (o 1º quadro) e o fim (o último quadro);
#      - um por beat da regência (out/<proj>/regencia.json › cenas[].beats, t0/t1 contados do começo da cena), em
#        t0 + o menor entre 1,0 s e metade do beat: o beat já assentado, não o quadro da troca;
#      - a cadência: onde dois quadros escolhidos ficam a mais de --cadencia s, quadros igualmente espaçados no vão;
#      - as emendas: o último quadro da cena anterior antes do começo, e o 1º quadro da seguinte depois do fim, cada um
#        tirado do clipe da vizinha, com moldura laranja. O par da emenda fica sempre na mesma linha da folha: se o fim cair
#        na coluna da direita, entra antes dele o quadro de 250 ms antes do corte (o que a roupa do qc-visual, §4, confere),
#        ou, se ele já estiver perto de outro, o meio do maior vão;
#   3. monta as folhas na forma das da revisão de espectador (ferramentas/folhas-espectador.py): quatro quadros por folha,
#      2×2, cada um reduzido a 960×540, com a cena, o instante na cena, o instante no vídeo e o que é o quadro, e a fala
#      daquele instante embaixo (out/<proj>/words.json: a palavra dita no quadro entre colchetes, de 1,0 s antes a 0,7 s
#      depois, como na revisão de espectador);
#   4. grava em <pasta>/<cena>/: <cena>-<chave>-NN.png (as folhas) e <cena>-<chave>.json (o índice: cada quadro com a
#      folha, a célula, a cena de onde veio, o número do quadro, os instantes, o rótulo e a fala). A <chave> muda com o
#      clipe da cena, os das vizinhas, a --cadencia e a versão desta escolha: a folha de uma versão nunca se regrava com
#      outro conteúdo (a roupa do qc-visual, §2.1: o mesmo caminho aberto de novo conta como releitura). A mesma versão já
#      feita não se refaz: o script só lista as folhas ("já feitas"). Nada se apaga;
#   5. imprime as folhas de cada cena e o total. O qc-visual tem o teto de 25 imagens por execução (M11; marca/agentes/
#      qc-visual.md §2.1), e cada folha conta 1: acima de 25, o script avisa; acima de 20, avisa que a folga de 5 para o
#      recorte encolheu. E avisa quando as cenas pedidas não caberiam num lote do qc-visual (§2.1, item 2: um tipo só,
#      até 2 de mapa, só 1 se ela passa de 30 s, ou até 4 sem mapa). Os avisos não recusam: o lote é de quem despacha.
#
# Recusa (saída 2), antes de gravar qualquer coisa, se um dos clipes PEDIDOS:
#   - é mais velho que o HTML da cena (o sha1 do carimbo não é o do HTML de hoje): a peça veria a versão de antes;
#   - foi renderizado sem --4k (carimbo "1080p"), não tem carimbo, não existe, não é 3840×2160, ou não tem o número de
#     quadros da janela do espelho;
#   e também: cena fora do espelho, cena fundida em outra (peça a mãe), argumento errado, falta de ffmpeg ou do Pillow.
#   Uma cena recusada recusa a rodada inteira. Quem renderiza é o editor-de-arte ou o mapista (render 4K com a pré-carga).
# A vizinha com clipe que não vale NÃO recusa: a célula da emenda sai cinza, com o motivo, e o script avisa.
#
# Lê: out/<proj>/espelho.json (a janela de cada cena e a ordem), out/<proj>/regencia.json (os beats), out/<proj>/words.json
#     (a fala), out/<proj>/graphics/<cena>.html, .mp4 e .mp4.de-html (da cena e das vizinhas) e a fonte Inter da marca.
# O que não faz:
#   - não julga imagem: só tira quadros. Quem julga é a peça (o qc-visual, o editor-de-arte, o mapista), que abre as folhas;
#   - não abre Chrome, não renderiza, não pede tile à MapTiler: só ffmpeg sobre os clipes que já existem. Cena de mapa sem
#     clipe que valha fica sem folha, e o render é de quem o faz;
#   - não lê chave, não vai à rede, não grava fora da pasta de saída.
# Limites:
#   - o carimbo guarda só o sha1 do HTML: uma foto, um vídeo, o marca/tokens.css ou o _rig.js mudados depois do render não
#     aparecem nele (CLAUDE.md, "O Juneau, depois dos 56 px"). A peça que mudou um desses renderiza de novo;
#   - o quadro reduzido a 960×540 serve à composição, ao movimento e à leitura, não à medida em px (o crédito, a margem, o
#     rótulo): essas vêm do portão e do probe-elemento (roupa do qc-visual, §2), ou do recorte do quadro 4K;
#   - o quadro do beat é um só, no beat assentado: o instante exato de uma troca, o recorte de perto e o quadro 4K a peça
#     tira ela mesma, dentro do teto;
#   - a fala vem do words.json, na grafia da voz (números por extenso, aliases de pronúncia), não na grafia da tela;
#   - a escolha usa a regência como está no disco: se a janela dela diverge da do espelho, o script avisa e segue.
# Saída: 0 = feito · 2 = não rodou (nada gravado).
# A prova: python -X utf8 -B ferramentas/folhas-cena-provar.py (no vídeo 4, o atlantico-fundo).
import hashlib, json, math, os, re, shutil, subprocess, sys
from concurrent.futures import ThreadPoolExecutor

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print('✗ falta o Pillow (python -m pip install pillow)')
    sys.exit(2)

VERSAO = 1                  # a versão da escolha dos quadros e da folha: entra na chave dos nomes
AQUI = os.path.dirname(os.path.abspath(__file__))
FONTE = os.path.join(AQUI, '..', 'marca', 'fontes', 'inter', 'Inter-VF.ttf')
W, H = 960, 540             # cada quadro na folha, como na revisão de espectador
CEL_H = 604                 # o quadro e as duas linhas de texto
LARG_TEXTO = W - 16
TETO_QC = 25                # imagens por execução do qc-visual (M11)
FOLGA_QC = 5                # das 25, as que ficam para o recorte (roupa do qc-visual, §2.1, item 1)
RE_BASE_MAPA = re.compile(r'_vendor/(?:perfil-mapa|maplibre-gl)\.js')   # a régua de cena de mapa do `conferir`
LARANJA = (230, 120, 0)
USO = ('uso: python -X utf8 -B ferramentas/folhas-cena.py <proj> <cena> [<cena>…] [--saida=<pasta>] [--cadencia=4]')


def falha(*msg):
    print('✗', *msg)
    sys.exit(2)


def args():
    a = {'proj': None, 'cenas': [], 'saida': None, 'cadencia': 4.0}
    for x in sys.argv[1:]:
        if x.startswith('--saida='):
            a['saida'] = x[8:]
            if not a['saida']:
                falha('--saida vazio', '\n' + USO)
        elif x.startswith('--cadencia='):
            try:
                a['cadencia'] = float(x[11:].replace(',', '.'))
            except ValueError:
                falha('--cadencia tem de ser um número de segundos (0 desliga)', '\n' + USO)
            if a['cadencia'] < 0 or (0 < a['cadencia'] < 0.5) or not math.isfinite(a['cadencia']):
                falha('--cadencia tem de ser 0 (desliga) ou pelo menos 0,5 s', '\n' + USO)
        elif x.startswith('-'):
            falha('argumento desconhecido:', x, '\n' + USO)
        elif a['proj'] is None:
            a['proj'] = x
        else:
            a['cenas'].append(x)
    if not a['proj'] or not a['cenas']:
        falha(USO)
    return a


def mmss(x):
    m = int(x // 60)
    return f'{m}:{x - 60 * m:05.2f}'


def rel(p):
    try:
        return os.path.relpath(p).replace('\\', '/')
    except ValueError:      # outra unidade de disco (Windows)
        return os.path.abspath(p).replace('\\', '/')


def sha1_de(p):
    with open(p, 'rb') as f:
        return hashlib.sha1(f.read()).hexdigest()


def sonda(mp4):
    r = subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries',
                        'stream=width,height,r_frame_rate,nb_frames,duration', '-of', 'json', mp4],
                       capture_output=True, stdin=subprocess.DEVNULL, timeout=60)
    if r.returncode:
        return None
    try:
        s = json.loads(r.stdout.decode('utf-8', 'replace'))['streams'][0]
        num, den = s['r_frame_rate'].split('/')
        fps = float(num) / float(den)
        n = s.get('nb_frames')
        n = int(n) if n and str(n).isdigit() else round(float(s['duration']) * fps)
        return {'w': int(s['width']), 'h': int(s['height']), 'fps': fps, 'n': n}
    except (KeyError, IndexError, ValueError, ZeroDivisionError):
        return None


def estado_clipe(raiz, c, dur):
    """O clipe da cena vale? Devolve {ok, motivo, sha1_html, fps, n, mp4}."""
    html, mp4 = f'{raiz}/graphics/{c}.html', f'{raiz}/graphics/{c}.mp4'
    carimbo = mp4 + '.de-html'
    e = {'ok': False, 'motivo': None, 'sha1_html': None, 'fps': None, 'n': None, 'mp4': rel(mp4)}
    if not os.path.isfile(html):
        e['motivo'] = f'sem HTML ({rel(html)})'
        return e
    e['sha1_html'] = sha1_de(html)
    if not os.path.isfile(mp4):
        e['motivo'] = f'sem clipe ({rel(mp4)}): a cena não foi renderizada'
        return e
    if not os.path.isfile(carimbo):
        e['motivo'] = f'sem carimbo ({rel(carimbo)}): render interrompido ou clipe de fora; não se sabe de que HTML ele é'
        return e
    linhas = open(carimbo, encoding='utf-8', errors='replace').read().replace('\r', '').split('\n')
    sha_c = linhas[0].strip() if linhas else ''
    res = linhas[1].strip() if len(linhas) > 1 else ''
    if sha_c != e['sha1_html']:
        e['motivo'] = (f'o clipe é mais velho que o HTML da cena: o carimbo guarda o sha1 {sha_c[:7] or "(vazio)"}, e o HTML '
                       f'de hoje é {e["sha1_html"][:7]}. A peça veria a versão de antes: renderize a cena de novo '
                       '(--4k, com a pré-carga)')
        return e
    if res != '2160p':
        e['motivo'] = f'o carimbo diz "{res or "(vazio)"}", não "2160p": render sem --4k, que não vale (renderize com --4k)'
        return e
    s = sonda(mp4)
    if not s:
        e['motivo'] = f'o ffprobe não leu o clipe ({rel(mp4)})'
        return e
    e['fps'], e['n'] = s['fps'], s['n']
    if (s['w'], s['h']) != (3840, 2160):
        e['motivo'] = f'o clipe tem {s["w"]}×{s["h"]}, não 3840×2160'
        return e
    m = round(dur * s['fps'])
    if abs(s['n'] - m) > 1:
        e['motivo'] = (f'o clipe tem {s["n"]} quadros, e a janela do espelho pede {m} ({dur:.3f} s): o espelho mudou '
                       'depois do render')
        return e
    e['ok'] = True
    return e


def escolher(n, fps, beats, cadencia, tem_ant, tem_seg):
    """Os quadros da cena: {k: rótulo}, k = o número do quadro no clipe (0 … n-1)."""
    ult = n - 1
    pts = {}

    def por(k, rot):
        k = max(0, min(ult, k))
        pts[k] = pts[k] + ' + ' + rot if k in pts else rot

    por(0, 'começo (1º quadro)')
    por(ult, 'fim (último quadro)')
    nb = len(beats)
    for i, (b0, b1) in enumerate(beats, 1):
        t = b0 + min(1.0, (b1 - b0) / 2)
        por(math.floor(t * fps + 1e-6), f'beat {i}/{nb} ({b0:.2f}–{b1:.2f} s)')
    if cadencia > 0:
        ks = sorted(pts)
        for a, b in zip(ks, ks[1:]):
            if (b - a) / fps > cadencia + 1e-6:
                m = math.ceil((b - a) / fps / cadencia) - 1
                for j in range(1, m + 1):
                    k = a + round(j * (b - a) / (m + 1))
                    if k not in pts:
                        pts[k] = 'cadência'
    # O par da emenda seguinte (o fim desta e o começo da próxima) fica na mesma linha da folha.
    if tem_seg and ((1 if tem_ant else 0) + len(pts) - 1) % 2 == 1:
        k250 = math.floor(n - 0.25 * fps)
        if 0 < k250 < ult and all(abs(k250 - k) >= 2 for k in pts):
            pts[k250] = '250 ms antes do corte'
        else:
            ks = sorted(pts)
            vaos = [(b - a, a, b) for a, b in zip(ks, ks[1:]) if b - a >= 2]
            if vaos:
                _, a, b = max(vaos)
                pts[(a + b) // 2] = 'cadência'
    return pts


def fala_de(words, tv):
    ws = [w for w in words if w['end'] >= tv - 1.0 and w['start'] <= tv + 0.7]
    partes = [f"[{w['w']}]" if w['start'] <= tv < w['end'] else w['w'] for w in ws]
    palavra = next((w['w'] for w in ws if w['start'] <= tv < w['end']), None)
    return partes, palavra


def caber(fonte, partes):
    """A fala na largura da célula: corta pelas pontas, longe da palavra entre colchetes, e marca o corte com …"""
    if not partes:
        return 'fala: (sem fala)'
    i = next((j for j, p in enumerate(partes) if p.startswith('[')), len(partes) // 2)
    a, b = 0, len(partes)
    while True:
        txt = 'fala: ' + ('… ' if a > 0 else '') + ' '.join(partes[a:b]) + (' …' if b < len(partes) else '')
        if fonte.getlength(txt) <= LARG_TEXTO or b - a <= 1:
            return txt
        if i - a >= b - 1 - i:
            a += 1
        else:
            b -= 1


def quebrar(fonte, txt, largura, max_linhas):
    """O motivo da célula vazia em linhas que cabem; a última leva … se sobrar texto."""
    linhas, atual = [], ''
    for p in txt.split():
        prova = (atual + ' ' + p).strip()
        if fonte.getlength(prova) <= largura:
            atual = prova
        else:
            linhas.append(atual)
            atual = p
    if atual:
        linhas.append(atual)
    if len(linhas) > max_linhas:
        linhas = linhas[:max_linhas]
        linhas[-1] = linhas[-1].rstrip() + ' …'
    return linhas


def caber_rotulo(fonte, txt):
    while fonte.getlength(txt) > LARG_TEXTO and len(txt) > 10:
        txt = txt[:-2] + '…'
    return txt


def tirar(mp4, k, fps):
    """O quadro k do clipe, reduzido a 960×540, em RGB. O -ss cai no meio entre o quadro k-1 e o k: sai o k."""
    x = 0.0 if k == 0 else (k - 0.5) / fps
    r = subprocess.run(['ffmpeg', '-nostdin', '-hide_banner', '-v', 'error', '-ss', f'{x:.6f}', '-i', mp4,
                        '-frames:v', '1', '-vf', f'scale={W}:{H}:flags=lanczos', '-fps_mode', 'passthrough',
                        '-f', 'rawvideo', '-pix_fmt', 'rgb24', 'pipe:1'],
                       capture_output=True, stdin=subprocess.DEVNULL, timeout=180)
    if r.returncode or len(r.stdout) != W * H * 3:
        raise RuntimeError(f'o ffmpeg não tirou o quadro {k} de {mp4}: '
                           f'{r.stderr.decode("utf-8", "replace").strip()[:200] or len(r.stdout)}')
    return Image.frombytes('RGB', (W, H), r.stdout)


def main():
    a = args()
    proj = a['proj']
    raiz = f'out/{proj}'
    for p in (f'{raiz}/espelho.json', f'{raiz}/words.json', FONTE):
        if not os.path.isfile(p):
            falha('não encontrado:', rel(p))
    for b in ('ffmpeg', 'ffprobe'):
        if not shutil.which(b):
            falha(f'falta o {b} no PATH')
    esp = json.load(open(f'{raiz}/espelho.json', encoding='utf-8'))
    todos = {s['id']: s for s in esp['segmentos']}
    seg = {i: s for i, s in todos.items() if not s.get('_mergedInto')}
    ordem = sorted(seg, key=lambda c: float(seg[c]['inSec']))
    words = json.load(open(f'{raiz}/words.json', encoding='utf-8'))
    reg = {}
    if os.path.isfile(f'{raiz}/regencia.json'):
        reg = {c['id']: c for c in json.load(open(f'{raiz}/regencia.json', encoding='utf-8')).get('cenas', [])}

    pedidas = list(dict.fromkeys(a['cenas']))
    erros = []
    for c in pedidas:
        if c not in todos:
            erros.append(f'{c}: fora do espelho')
        elif c not in seg:
            erros.append(f'{c}: fundida em {todos[c]["_mergedInto"]} (peça a {todos[c]["_mergedInto"]}, que tem o clipe)')
    if erros:
        falha('cena que não dá:\n  ' + '\n  '.join(erros))
    cenas = sorted(pedidas, key=lambda c: float(seg[c]['inSec']))

    # Tudo se confere antes de gravar: o clipe de cada cena pedida tem de valer.
    est = {}

    def estado(c):
        if c not in est:
            est[c] = estado_clipe(raiz, c, float(seg[c]['dur']))
        return est[c]

    recusas = [f'{c}: {estado(c)["motivo"]}' for c in cenas if not estado(c)['ok']]
    if recusas:
        falha('clipe que não vale (nada foi gravado):\n  ' + '\n  '.join(recusas))

    base = a['saida'] or f'{raiz}/_tmp/folhas-cena'
    f1 = ImageFont.truetype(FONTE, 22)
    total, linhas = 0, []
    for c in cenas:
        s, e = seg[c], estado(c)
        t0, dur, fps, n = float(s['inSec']), float(s['dur']), e['fps'], e['n']
        pos = ordem.index(c)
        ant = ordem[pos - 1] if pos > 0 else None
        prox = ordem[pos + 1] if pos + 1 < len(ordem) else None
        avisos = []
        beats = []
        rc = reg.get(c)
        if not rc:
            avisos.append('a cena não está na regência: sem quadros de beat (só começo, cadência, fim e emendas)')
        else:
            if abs(float(rc.get('dur', dur)) - dur) > 0.05:
                avisos.append(f'a regência tem outra janela ({float(rc["dur"]):.3f} s; o espelho, {dur:.3f} s): os beats '
                              'podem estar fora de lugar')
            for bi, b in enumerate(rc.get('beats', [])):
                try:
                    b0, b1 = max(0.0, float(b['t0'])), min(dur, float(b['t1']))
                except (KeyError, TypeError, ValueError):
                    avisos.append(f'o beat {bi} da regência não tem t0 e t1 numéricos: ficou sem quadro de beat')
                    continue
                if b1 > b0:
                    beats.append((b0, b1))
        viz = {}
        for papel, v in (('anterior', ant), ('seguinte', prox)):
            if v is None:
                viz[papel] = None
                continue
            ev = estado(v)
            viz[papel] = {'cena': v, 'ok': ev['ok'], 'motivo': ev['motivo'], 'sha1_html': ev['sha1_html']}
            if not ev['ok']:
                avisos.append(f'emenda com a {v} sem quadro: {ev["motivo"]}')
        pts = escolher(n, fps, beats, a['cadencia'], ant is not None, prox is not None)

        quadros = []
        if ant:
            ea = estado(ant)
            quadros.append({'fonte': ant, 'k': ea['n'] - 1 if ea['ok'] else None, 'emenda': 'anterior',
                            'rotulo': f'emenda: fim da {ant}'})
        for k in sorted(pts):
            quadros.append({'fonte': c, 'k': k, 'emenda': None, 'rotulo': pts[k]})
        if prox:
            ep = estado(prox)
            quadros.append({'fonte': prox, 'k': 0 if ep['ok'] else None, 'emenda': 'seguinte',
                            'rotulo': f'emenda: começo da {prox}'})
        for i, q in enumerate(quadros):
            q['i'] = i
            q['vazio'] = q['k'] is None
            fs = seg[q['fonte']]
            if q['vazio']:
                q['t_cena'] = q['t_video'] = None
                q['fala'], q['palavra'] = None, None
                q['motivo'] = estado(q['fonte'])['motivo']
                continue
            fpsq = estado(q['fonte'])['fps']
            q['t_cena'] = round(q['k'] / fpsq, 4)
            q['t_video'] = round(float(fs['inSec']) + q['k'] / fpsq, 4)
            partes, q['palavra'] = fala_de(words, q['t_video'])
            q['fala'] = ' '.join(partes)
            q['_partes'] = partes

        chave_src = json.dumps([VERSAO, e['sha1_html'],
                                [viz[p] and [viz[p]['cena'], viz[p]['sha1_html'], viz[p]['ok'], viz[p]['motivo']]
                                 for p in ('anterior', 'seguinte')], a['cadencia'], beats], sort_keys=True)
        chave = hashlib.sha1(chave_src.encode('utf-8')).hexdigest()[:7]
        pasta = os.path.join(base, c)
        nfolhas = math.ceil(len(quadros) / 4)
        nomes = [f'{c}-{chave}-{j:02d}.png' for j in range(nfolhas)]
        caminhos = [rel(os.path.join(pasta, x)) for x in nomes]
        indice_p = os.path.join(pasta, f'{c}-{chave}.json')
        feitas = os.path.isfile(indice_p) and all(os.path.isfile(p) for p in caminhos)
        if not feitas:
            os.makedirs(pasta, exist_ok=True)
            pedidos = [(q['i'], f'{raiz}/graphics/{q["fonte"]}.mp4', q['k'], estado(q['fonte'])['fps'])
                       for q in quadros if not q['vazio']]
            with ThreadPoolExecutor(max_workers=4) as ex:
                imgs = dict(zip([p[0] for p in pedidos], ex.map(lambda p: tirar(p[1], p[2], p[3]), pedidos)))
            for j in range(nfolhas):
                folha = Image.new('RGB', (2 * W, 2 * CEL_H), 'white')
                dr = ImageDraw.Draw(folha)
                for cel, q in enumerate(quadros[4 * j:4 * j + 4]):
                    x, y = (cel % 2) * W, (cel // 2) * CEL_H
                    q['folha'], q['celula'] = caminhos[j], cel
                    if q['vazio']:
                        dr.rectangle([x, y, x + W - 1, y + H - 1], fill=(225, 225, 225))
                        dr.text((x + 24, y + 180), caber_rotulo(f1, f'{q["rotulo"]}: sem quadro'), fill='black', font=f1)
                        for li, txt in enumerate(quebrar(f1, q['motivo'] or '', W - 48, 6)):
                            dr.text((x + 24, y + 220 + 30 * li), txt, fill=(90, 90, 90), font=f1)
                        dr.text((x + 8, y + 545), caber_rotulo(f1, f'{q["fonte"]} · {q["rotulo"]} · sem quadro'),
                                fill='black', font=f1)
                    else:
                        folha.paste(imgs[q['i']], (x, y))
                        if q['emenda']:
                            dr.rectangle([x, y, x + W - 1, y + H - 1], outline=LARANJA, width=6)
                        rot = (f'{q["fonte"]} · {q["t_cena"]:.2f} s da cena · {mmss(q["t_video"])} no vídeo · '
                               f'{q["rotulo"]}')
                        dr.text((x + 8, y + 545), caber_rotulo(f1, rot), fill='black', font=f1)
                        dr.text((x + 8, y + 573), caber(f1, q['_partes']), fill=(60, 60, 60), font=f1)
                    dr.rectangle([x, y, x + W - 1, y + CEL_H - 1], outline=(150, 150, 150))
                folha.save(caminhos[j])
            for q in quadros:
                q.pop('_partes', None)
            indice = {'ferramenta': 'ferramentas/folhas-cena.py', 'versao': VERSAO, 'proj': proj, 'cena': c,
                      'modo': s.get('modo'), 'inSec': t0, 'dur': dur, 'fps': fps, 'quadros_no_clipe': n,
                      'clipe': e['mp4'], 'sha1_html': e['sha1_html'], 'carimbo': '2160p', 'cadencia_s': a['cadencia'],
                      'beats': beats, 'vizinhas': viz, 'chave': chave, 'quadros': quadros, 'folhas': caminhos,
                      'avisos': avisos}
            # O índice por último: ele existir quer dizer que as folhas estão inteiras.
            with open(indice_p, 'w', encoding='utf-8') as f:
                json.dump(indice, f, ensure_ascii=False, indent=1)
        total += nfolhas
        nq = sum(1 for q in quadros if not q['vazio'])
        linhas.append(f'✓ {c} ({s.get("modo")}, {dur:.2f} s, {len(beats)} beats): {nq} quadros em {nfolhas} '
                      f'folha{"s" if nfolhas > 1 else ""} · clipe do HTML {e["sha1_html"][:7]}, 2160p'
                      + (' · já feitas, a mesma versão' if feitas else ''))
        linhas += [f'  {p}' for p in caminhos]
        linhas += [f'  ! {x}' for x in avisos]
        linhas.append(f'  índice: {rel(indice_p)}')
    print('\n'.join(linhas))
    print(f'✓ {total} folha{"s" if total > 1 else ""} de {len(cenas)} cena{"s" if len(cenas) > 1 else ""}. '
          f'Cada folha conta 1 imagem; o teto do qc-visual é {TETO_QC} por execução (M11; marca/agentes/qc-visual.md §2.1).')
    for x in lote_qc(raiz, cenas, seg, total):
        print(f'! {x}')
    return 0


def lote_qc(raiz, cenas, seg, total):
    """Se estas cenas fossem um lote do qc-visual (M11; marca/agentes/qc-visual.md §2.1, itens 1 e 2): um tipo só, até 2
    de mapa (só 1 se ela passa de 30 s) ou até 4 sem mapa, umas 20 imagens para as cenas e 5 de folga para o recorte.
    Só avisa: quem monta o lote é quem despacha, e o editor e o mapista rodam o script no próprio trabalho."""
    def eh_mapa(c):
        try:
            h = open(f'{raiz}/graphics/{c}.html', encoding='utf-8', errors='replace').read()
        except OSError:
            h = ''
        return bool(RE_BASE_MAPA.search(h)) or seg[c].get('modo') == 'mapa'
    mapas = [c for c in cenas if eh_mapa(c)]
    sem = [c for c in cenas if c not in mapas]
    av = []
    if total > TETO_QC:
        av.append(f'{total} folhas passam do teto de {TETO_QC}: divida as cenas em mais de um lote.')
    elif total > TETO_QC - FOLGA_QC:
        av.append(f'{total} folhas passam das ~{TETO_QC - FOLGA_QC} que o lote do qc-visual dá às cenas: sobram menos de '
                  f'{FOLGA_QC} imagens de folga para o recorte (o crédito, a borda, os 250 ms antes do corte).')
    if mapas and sem:
        av.append(f'para um lote do qc-visual: {len(mapas)} de mapa ({", ".join(mapas)}) e {len(sem)} sem mapa juntas; '
                  'o lote é de um tipo só.')
    longas = [c for c in mapas if float(seg[c]['dur']) > 30]
    if len(mapas) > 2 or (longas and len(mapas) > 1):
        av.append(f'para um lote do qc-visual: {len(mapas)} cenas de mapa; o lote leva até 2'
                  + (f', e só 1 quando ela passa de 30 s ({", ".join(longas)})' if longas else '') + '.')
    if len(sem) > 4:
        av.append(f'para um lote do qc-visual: {len(sem)} cenas sem mapa; o lote leva até 4.')
    return av


if __name__ == '__main__':
    sys.exit(main())
