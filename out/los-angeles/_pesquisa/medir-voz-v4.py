# medir-voz-v4.py — mede as três variantes do teste da voz v4 (teste-voz-v4.mjs): o que a voz disse (faster-whisper local,
# large-v3, en, só do cache), o ritmo por parágrafo e três medidas de tom por parágrafo (F0 mediana, centróide espectral e
# nível), e a variação entre parágrafos em cada variante. Só lê out/los-angeles/_tmp/voz-v4/ e grava medida-voz-v4.json.
import json, re, wave, numpy as np
R = 'C:/projetos/alpha-point'
V = f'{R}/out/los-angeles/_tmp/voz-v4'
rec = json.load(open(f'{R}/out/los-angeles/_pesquisa/teste-voz-v4.json', encoding='utf-8'))
P = rec['textos']
norm = lambda s: re.findall(r"[a-z0-9']+", s.lower().replace('\u2019', "'"))
NP = [len(norm(p)) for p in P]

def ler(arq):
    with wave.open(arq, 'rb') as w:
        return np.frombuffer(w.readframes(w.getnframes()), '<i2').astype(np.float32) / 32768

def feats(x, sr=44100):
    H, N = 441, 1764                       # 10 ms de passo, 40 ms de janela
    f0s, cents, rms = [], [], []
    win = np.hanning(N)
    freqs = np.fft.rfftfreq(N, 1 / sr)
    for i in range(0, len(x) - N, H):
        q = x[i:i + N]
        e = np.sqrt((q ** 2).mean())
        if e < 10 ** (-35 / 20):
            continue
        rms.append(20 * np.log10(e + 1e-12))
        sp = np.abs(np.fft.rfft(q * win))
        cents.append(float((freqs * sp).sum() / (sp.sum() + 1e-12)))
        qa = q - q.mean()
        ac = np.correlate(qa, qa, 'full')[N - 1:]
        lo, hi = int(sr / 300), int(sr / 70)
        k = lo + int(np.argmax(ac[lo:hi]))
        if ac[k] > 0.45 * ac[0]:
            f0s.append(sr / k)
    return {'f0_mediana_hz': round(float(np.median(f0s)), 1) if f0s else None,
            'centroide_hz': round(float(np.median(cents)), 0) if cents else None,
            'nivel_db': round(float(np.median(rms)), 2) if rms else None}

from faster_whisper import WhisperModel
m = WhisperModel('large-v3', device='cpu', compute_type='int8', local_files_only=True)
def transcrever(arq):
    segs, _ = m.transcribe(arq, language='en', word_timestamps=True, beam_size=5)
    return [{'w': w.word, 'start': w.start, 'end': w.end, 'prob': w.probability} for s in segs for w in s.words]

out = {}
# A: um arquivo por parágrafo
A = []
for i in range(3):
    arq = f'{V}/A-p{i + 1}.wav'; x = ler(arq); ws = transcrever(arq)
    dur = ws[-1]['end'] - ws[0]['start']
    A.append({'paragrafo': i + 1, 'palavras_texto': NP[i], 'palavras_ouvidas': len(ws), 'wpm': round(len(norm(' '.join(w['w'] for w in ws))) / dur * 60, 1),
              'ouvido': ' '.join(w['w'].strip() for w in ws), **feats(x)})
out['A'] = A
for v in ('B', 'C'):
    arq = f'{V}/{v}.wav'; x = ler(arq); ws = transcrever(arq)
    # fronteiras: pelos índices de palavra do texto
    cum = np.cumsum(NP); idx = [0, cum[0], cum[1], cum[2]]
    toks = []
    for w in ws:
        for t in norm(w['w']):
            toks.append({'t': t, 'start': w['start'], 'end': w['end'], 'prob': w['prob']})
    ps = []
    for i in range(3):
        a, b = idx[i], min(idx[i + 1], len(toks)) - 1
        if a >= len(toks): break
        s0, s1 = toks[a]['start'], toks[b]['end']
        seg = x[int(s0 * 44100):int(s1 * 44100)]
        ps.append({'paragrafo': i + 1, 'wpm': round((b - a + 1) / (s1 - s0) * 60, 1), 'inicio_s': round(s0, 2), 'fim_s': round(s1, 2), **feats(seg)})
    pausas = [round(ps[i + 1]['inicio_s'] - ps[i]['fim_s'], 2) for i in range(len(ps) - 1)]
    out[v] = {'paragrafos': ps, 'pausa_entre_paragrafos_s': pausas, 'palavras_texto': int(sum(NP)), 'palavras_ouvidas': len(toks),
              'ouvido': ' '.join(w['w'].strip() for w in ws), 'prob_min': round(min(t['prob'] for t in toks), 2)}
def varia(ps):
    r = {}
    for k in ('wpm', 'f0_mediana_hz', 'centroide_hz', 'nivel_db'):
        vs = [p[k] for p in ps if p.get(k) is not None]
        r[k] = {'valores': vs, 'amplitude': round(max(vs) - min(vs), 2)}
    return r
out['variacao'] = {'A': varia(A), 'B': varia(out['B']['paragrafos']), 'C': varia(out['C']['paragrafos'])}
out['texto'] = P
json.dump(out, open(f'{R}/out/los-angeles/_pesquisa/medida-voz-v4.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for v in ('A', 'B', 'C'):
    print(v, json.dumps(out['variacao'][v], ensure_ascii=False))
print('pausas B', out['B']['pausa_entre_paragrafos_s'], 'C', out['C']['pausa_entre_paragrafos_s'])
print('palavras B', out['B']['palavras_ouvidas'], '/', out['B']['palavras_texto'], ' C', out['C']['palavras_ouvidas'], '/', out['C']['palavras_texto'])
for a in A: print('A', a['paragrafo'], a['palavras_ouvidas'], '/', a['palavras_texto'])
