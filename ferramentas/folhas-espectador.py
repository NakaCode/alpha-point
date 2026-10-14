# folhas-espectador.py — as folhas de contato da revisão de espectador, e os lotes de até 20 folhas (M10, opção 1).
# Uso (da raiz do canal): python -X utf8 -B ferramentas/folhas-espectador.py <proj> [--cenas=s01,s02,...] [--teto=20]
#                         [--saida=<pasta nova>] [--aceitar-quadros-velhos]
# Antes: o verbo `quadros` da linha do tempo, das cenas da rodada (node ferramentas/linha-do-tempo.mjs quadros <proj> …),
#   no passo de 0,5 s (o padrão, --fps=2).
# O que faz:
#   1. para cada cena, folhas 2×2 no formato da r4 do vídeo 2 (09/10/2026): quatro quadros 1080p reduzidos a 960×540, um a
#      cada 0,5 s, com a cena, o instante e a fala daquele instante embaixo (a palavra dita no quadro entre colchetes);
#   2. reparte as folhas em lotes de até --teto folhas (20 por padrão), na ordem do vídeo (por inSec, também com --cenas), sem
#      partir cena que caiba inteira num lote; a cena maior que o teto vai em partes seguidas de tamanho parecido. Cada lote é
#      um revisor: lê as folhas dele e termina;
#   3. grava, por lote, o material só das cenas dele (as folhas, em ordem, e a fala com o tempo de cada palavra) e, do 2º lote
#      em diante, a folha de passagem: a última folha do lote anterior, só para o revisor ver a troca de cena na fronteira
#      dos lotes (no teste no vídeo 2, a única falta importante foi um salto entre duas cenas de lotes diferentes).
# Recusa (saída 2), antes de gravar qualquer coisa:
#   - quadro mais velho que a cena (o .mp4 da cena de mapa, o .html da outra): o revisor veria a versão de antes. Rode o verbo
#     `quadros` dessas cenas, ou passe --aceitar-quadros-velhos de propósito (ex.: refazer uma rodada antiga), e a lista
#     vai ao lotes.json;
#   - quadros fora do passo de 0,5 s, quadro que não abre, cena fora do espelho, sem quadros, argumento errado;
#   - pasta de saída que já tem folhas ou lotes: cada rodada vai numa pasta nova, e nada se apaga. Sem --saida, a ferramenta
#     usa a próxima livre, out/<proj>/_tmp/espectador-r<N>.
# Lê: out/<proj>/espelho.json (a janela de cada cena: inSec e dur), out/<proj>/words.json, os quadros de
#     out/<proj>/_tmp/linha-do-tempo/quadros/<cena>/ (mapa: <cena>@<k>.png, k=001 em 0,0 s; sem mapa: <cena>@<t>.png) e a data
#     de out/<proj>/graphics/<cena>.mp4 ou .html. Só lê. Grava, na pasta da rodada: folhas/<cena>-NN.png, folhas-indice.json
#     ([cena, modo, quadros, folhas]), lotes.json e lotes/lote-NN.md. Nada sai da máquina; não lê chave.
# Saída: 0 = feito · 2 = não rodou (nada gravado).
import json, math, os, re, sys

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print('✗ falta o Pillow (python -m pip install pillow)')
    sys.exit(2)

FONTE = 'marca/fontes/inter/Inter-VF.ttf'
USO = ('uso: python -X utf8 -B ferramentas/folhas-espectador.py <proj> [--cenas=s01,s02] [--teto=20] [--saida=<pasta nova>] '
       '[--aceitar-quadros-velhos]')


def falha(*msg):
    print('✗', *msg)
    sys.exit(2)


def args():
    a = {'proj': None, 'cenas': None, 'saida': None, 'teto': 20, 'velhos': False}
    for x in sys.argv[1:]:
        if x.startswith('--cenas='):
            a['cenas'] = [c for c in x[8:].split(',') if c]
            if not a['cenas']:
                falha('--cenas vazio', '\n' + USO)
        elif x.startswith('--saida='):
            a['saida'] = x[8:]
        elif x.startswith('--teto='):
            if not x[7:].isdigit() or int(x[7:]) < 1:
                falha('--teto tem de ser um inteiro maior que 0', '\n' + USO)
            a['teto'] = int(x[7:])
        elif x == '--aceitar-quadros-velhos':
            a['velhos'] = True
        elif not x.startswith('--') and a['proj'] is None:
            a['proj'] = x
        else:
            falha('argumento desconhecido:', x, '\n' + USO)
    if not a['proj']:
        falha(USO)
    return a


def mmss(x):
    m = int(x // 60)
    return f'{m}:{x - 60 * m:04.1f}'


def main():
    a = args()
    raiz = f"out/{a['proj']}"
    for p in (f'{raiz}/espelho.json', f'{raiz}/words.json', FONTE):
        if not os.path.isfile(p):
            falha('não encontrado:', p)
    esp = json.load(open(f'{raiz}/espelho.json', encoding='utf-8'))
    seg = {s['id']: s for s in esp['segmentos'] if not s.get('_mergedInto')}
    words = json.load(open(f'{raiz}/words.json', encoding='utf-8'))
    f1 = ImageFont.truetype(FONTE, 22)
    pedidas = list(dict.fromkeys(a['cenas'] or seg))
    faltam = [c for c in pedidas if c not in seg]
    if faltam:
        falha('cena fora do espelho (ou fundida em outra):', ', '.join(faltam))
    cenas = sorted(pedidas, key=lambda c: float(seg[c]['inSec']))

    # A pasta da rodada: nova, ou vazia de folhas e lotes. Nada se apaga.
    saida = a['saida']
    if not saida:
        base = f'{raiz}/_tmp'
        ns = [int(m.group(1)) for n in (os.listdir(base) if os.path.isdir(base) else [])
              for m in [re.fullmatch(r'espectador-r(\d+)', n)] if m]
        saida = f'{base}/espectador-r{max(ns, default=0) + 1}'
    if os.path.isdir(f'{saida}/folhas') or os.path.exists(f'{saida}/lotes.json') or os.path.isdir(f'{saida}/lotes'):
        falha('a pasta já tem uma rodada:', saida, '(cada rodada vai numa pasta nova; nada se apaga)')

    def quadros(c):
        d = f'{raiz}/_tmp/linha-do-tempo/quadros/{c}'
        out = []
        for n in (os.listdir(d) if os.path.isdir(d) else []):
            m = re.match(rf'{re.escape(c)}@(\d+(?:\.\d+)?)\.png$', n)
            if not m:
                continue
            v = m.group(1)
            mapa = '.' not in v and len(v) == 3
            out.append(((int(v) - 1) * 0.5 if mapa else float(v), f'{d}/{n}', mapa))
        return sorted(out)

    def fala(t_abs):
        ws = [w for w in words if w['end'] >= t_abs - 1.0 and w['start'] <= t_abs + 0.7]
        return ' '.join(f"[{w['w']}]" if w['start'] <= t_abs < w['end'] else w['w'] for w in ws)

    # Tudo se confere antes de gravar: quadros presentes, no passo de 0,5 s, em dia com a cena, e que abrem.
    qs_de, modo_de, sem, passo, velhos, quebrados = {}, {}, [], [], [], []
    for c in cenas:
        dur = float(seg[c]['dur'])
        qs = [q for q in quadros(c) if q[0] <= dur + 1e-6]
        if not qs:
            sem.append(c)
            continue
        mapa = qs[0][2]
        modo_de[c] = 'mapa' if mapa else 'dom'
        if mapa:
            esperado = math.floor(dur * 2 - 1e-9) + 1
            if abs(len(qs) - esperado) > 1:
                passo.append(f'{c} ({len(qs)} quadros, {esperado} esperados a 0,5 s)')
        elif any(abs(t * 2 - round(t * 2)) > 1e-6 for t, _, _ in qs):
            passo.append(f'{c} (instantes fora do passo de 0,5 s)')
        fonte = f"{raiz}/graphics/{c}.{'mp4' if mapa else 'html'}"
        if os.path.isfile(fonte) and max(os.path.getmtime(p) for _, p, _ in qs) < os.path.getmtime(fonte):
            velhos.append(c)
        for _, p, _ in qs:
            try:
                with Image.open(p) as im:
                    im.verify()
            except Exception as e:  # noqa: BLE001 — qualquer falha de leitura do PNG recusa a rodada
                quebrados.append(f'{p} ({type(e).__name__})')
        qs_de[c] = qs
    if sem:
        falha('sem quadros na linha do tempo (rode o verbo quadros):', ', '.join(sem))
    if passo:
        falha('quadros fora do passo de 0,5 s (rode o verbo quadros com --fps=2):', '; '.join(passo))
    if quebrados:
        falha('quadro que não abre:', '; '.join(quebrados[:5]), f'({len(quebrados)} no total)')
    if velhos and not a['velhos']:
        falha('quadros mais velhos que a cena (rode o verbo quadros delas, ou --aceitar-quadros-velhos de propósito):',
              ', '.join(velhos))

    os.makedirs(f'{saida}/folhas')
    os.makedirs(f'{saida}/lotes')
    indice, folhas_de, texto_de = [], {}, {}
    for c in cenas:
        s = seg[c]
        t0, dur = float(s['inSec']), float(s['dur'])
        qs = qs_de[c]
        nomes = []
        for i in range(0, len(qs), 4):
            folha = Image.new('RGB', (1920, 1208), 'white')
            dr = ImageDraw.Draw(folha)
            for j, (t, p, _) in enumerate(qs[i:i + 4]):
                x, y = (j % 2) * 960, (j // 2) * 604
                im = Image.open(p).convert('RGB').resize((960, 540), Image.LANCZOS)
                folha.paste(im, (x, y))
                dr.rectangle([x, y, x + 959, y + 603], outline=(150, 150, 150))
                dr.text((x + 8, y + 545), f'{c} · {t:.1f} s da cena · {mmss(t0 + t)} no vídeo', fill='black', font=f1)
                dr.text((x + 8, y + 573), f'fala: {fala(t0 + t)}'[:95], fill=(60, 60, 60), font=f1)
            nome = f'{c}-{len(nomes):02d}.png'
            folha.save(f'{saida}/folhas/{nome}')
            nomes.append(nome)
        indice.append([c, modo_de[c], len(qs), len(nomes)])
        folhas_de[c] = nomes
        ws = [w for w in words if t0 - 0.05 <= w['start'] < t0 + dur]
        texto_de[c] = [f'## {c} · {modo_de[c]} · {t0:.2f}–{t0 + dur:.2f} s no vídeo ({dur:.1f} s) · {len(qs)} quadros em '
                       f'`{raiz}/_tmp/linha-do-tempo/quadros/{c}/`', '',
                       ' '.join(f"[{w['start'] - t0:.1f}]{w['w']}" for w in ws), '']

    # Os lotes: na ordem do vídeo, até o teto; a cena que cabe inteira não se parte; a maior que o teto vai em partes
    # seguidas de tamanho parecido (21 folhas com teto 20 = 11 + 10, não 20 + 1).
    lotes, atual = [], []
    for c in cenas:
        fs = folhas_de[c]
        if len(fs) > a['teto']:
            if atual:
                lotes.append(atual)
                atual = []
            n = math.ceil(len(fs) / a['teto'])
            corte = [round(k * len(fs) / n) for k in range(n + 1)]
            for k in range(n):
                lotes.append([(c, fs[corte[k]:corte[k + 1]])])
            continue
        if sum(len(x[1]) for x in atual) + len(fs) > a['teto']:
            lotes.append(atual)
            atual = []
        atual.append((c, fs))
    if atual:
        lotes.append(atual)
    saida_lotes, anterior = [], None
    for k, lote in enumerate(lotes, 1):
        cs = list(dict.fromkeys(c for c, _ in lote))
        fs = [f'{saida}/folhas/{n}' for _, ns in lote for n in ns]
        passagem = anterior[-1] if anterior else None
        anterior = fs
        partes = [c + (f' (folhas {ns[0][-6:-4]} a {ns[-1][-6:-4]}, de {len(folhas_de[c])})' if len(ns) < len(folhas_de[c]) else '')
                  for c, ns in lote]
        md = [f"# Lote {k} de {len(lotes)} da revisão de espectador ({a['proj']})", '']
        if passagem:
            md += [f'Passagem (abra primeiro, só para ver a troca de cena): `{passagem}`, a última folha do lote anterior. '
                   'Dela, aponte só o que acontece na troca para a sua primeira cena.', '']
        md += [f'Cenas: {", ".join(partes)}. Folhas ({len(fs)}), nesta ordem:', ''] + [f'- `{p}`' for p in fs] + [
               '', 'A fala de cada cena, com o tempo de cada palavra contado do começo da cena:', '']
        for c in cs:
            md += texto_de[c]
        open(f'{saida}/lotes/lote-{k:02d}.md', 'w', encoding='utf-8').write('\n'.join(md))
        saida_lotes.append({'lote': k, 'cenas': cs, 'partes': partes, 'passagem': passagem, 'folhas': fs,
                            'material': f'{saida}/lotes/lote-{k:02d}.md'})
    json.dump(indice, open(f'{saida}/folhas-indice.json', 'w', encoding='utf-8'), ensure_ascii=False)
    json.dump({'proj': a['proj'], 'teto': a['teto'], 'quadros_velhos_aceitos': velhos, 'lotes': saida_lotes},
              open(f'{saida}/lotes.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    total = sum(x[3] for x in indice)
    if velhos:
        print(f'! quadros mais velhos que a cena, aceitos de propósito: {", ".join(velhos)}')
    print(f'✓ {total} folhas de {len(cenas)} cenas em {len(lotes)} lotes de até {a["teto"]} · {saida}/lotes.json')
    return 0


if __name__ == '__main__':
    sys.exit(main())
