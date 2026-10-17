# escuta-nomes.py — os arquivos da escuta do Lucas (vídeo 4): a narração inteira sem a cauda, em mp3, e a primeira ocorrência
# de cada nome em espanhol (com ~1 s de contexto antes e depois), um atrás do outro, com 0,8 s de pausa entre eles.
#   python -X utf8 out/peru-agua/_pesquisa/escuta-nomes.py      (cwd = raiz do canal; usa o faster-whisper local, sem rede)
# Saídas em out/peru-agua/_tmp/escuta/: narracao-peru-agua.mp3, escuta-nomes.mp3 e escuta-nomes.json (o índice: o nome, o
# trecho, o instante no vídeo, o que o Whisper ouviu e a probabilidade). Só lê a narracao.wav e a narracao.json.
import json, os, re, subprocess, sys, unicodedata
PROJ = 'peru-agua'
OUT = f'out/{PROJ}/_tmp/escuta'
os.makedirs(OUT, exist_ok=True)
n = json.load(open(f'out/{PROJ}/narracao.json', encoding='utf-8'))
WAV = n['audio']['arquivo']
fala = [s for s in n['segmentos'] if s['tipo'] == 'fala']
fim_fala = max(s['end'] for s in fala)

NOMES = ['Rímac', 'Loreto', 'Iquitos', 'Titicaca', 'Humboldt', 'Satipo', 'Piura', 'Tacna', 'Caral', 'Supe', 'Moche', 'Chan Chan',
         'Chimú', 'Nazca', 'puquios', 'Jauja', 'Callao', 'Villa El Salvador', 'barriadas', 'Mantaro', 'Santa Eulalia', 'Huinco',
         'Chillón', 'Lurín', 'Rómulo Cárhuaz', 'San Juan de Miraflores', 'Catalina Naupa', 'Puente Piedra',
         'Virginia Martínez Morales', 'Tula Tinoco Espinoza']

def sem_acento(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn').lower()

def sh(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode: sys.exit('falhou: ' + ' '.join(cmd) + '\n' + r.stderr[-800:])

# a narração inteira, sem a cauda
sh(['ffmpeg', '-y', '-v', 'error', '-i', WAV, '-t', f'{fim_fala:.3f}', '-c:a', 'libmp3lame', '-b:a', '128k', f'{OUT}/narracao-{PROJ}.mp3'])

from faster_whisper import WhisperModel
modelo = WhisperModel('large-v3', device='cpu', compute_type='int8', local_files_only=True)

indice, partes, cache = [], [], {}
for k, nome in enumerate(NOMES, 1):
    seg = next((s for s in fala if sem_acento(nome) in sem_acento(s['texto'])), None)
    if not seg:
        print('não está na narração:', nome); continue
    if seg['trecho'] not in cache:
        tmp = f'{OUT}/_trecho-{seg["trecho"]:02d}.wav'
        sh(['ffmpeg', '-y', '-v', 'error', '-ss', f'{seg["start"]:.3f}', '-to', f'{seg["end"]:.3f}', '-i', WAV, '-ac', '1', '-ar', '16000', tmp])
        palavras = []
        for sg in modelo.transcribe(tmp, language='en', word_timestamps=True, beam_size=5)[0]:
            palavras += list(sg.words)
        cache[seg['trecho']] = palavras
    palavras = cache[seg['trecho']]
    # a posição do nome no texto do trecho dá a palavra esperada; procura-se a palavra ouvida mais parecida perto dela
    texto = seg['texto']
    i_txt = sem_acento(texto).find(sem_acento(nome))
    frac = i_txt / max(1, len(texto))
    alvo = sem_acento(nome.split()[0])[:3]
    cands = sorted(range(len(palavras)), key=lambda j: (0 if sem_acento(palavras[j].word.strip())[:3] == alvo else 1,
                                                       abs(j / max(1, len(palavras)) - frac)))
    j = cands[0]
    q = len(nome.split())
    w0, w1 = palavras[j], palavras[min(len(palavras) - 1, j + q - 1)]
    t0 = max(0.0, seg['start'] + w0.start - 1.0)
    t1 = min(seg['end'], seg['start'] + w1.end + 1.0)
    arq = f'{OUT}/nome-{k:02d}.wav'
    sh(['ffmpeg', '-y', '-v', 'error', '-ss', f'{t0:.3f}', '-to', f'{t1:.3f}', '-i', WAV, '-ac', '1', '-ar', '44100', arq])
    no_video = seg['start'] + w0.start
    ouvido = ' '.join(p.word.strip() for p in palavras[j:j + q])
    indice.append({'nome': nome, 'trecho': seg['trecho'], 'no_video': f'{int(no_video // 60)}:{no_video % 60:04.1f}',
                   'ouvido': ouvido, 'p': round(min(p.probability for p in palavras[j:j + q]), 2), 'arquivo': arq})
    partes.append(arq)
    print(f'{k:02d} {nome:28s} trecho {seg["trecho"]:2d} {indice[-1]["no_video"]:>7s}  ouvido: {ouvido} (p {indice[-1]["p"]})')

sh(['ffmpeg', '-y', '-v', 'error', '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=mono', '-t', '0.8', f'{OUT}/pausa.wav'])
with open(f'{OUT}/lista.txt', 'w', encoding='utf-8', newline='\n') as f:
    for p in partes:
        f.write(f"file '{os.path.basename(p)}'\nfile 'pausa.wav'\n")
sh(['ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', f'{OUT}/lista.txt', '-c:a', 'libmp3lame', '-b:a', '128k', f'{OUT}/escuta-nomes.mp3'])
json.dump(indice, open(f'{OUT}/escuta-nomes.json', 'w', encoding='utf-8', newline='\n'), ensure_ascii=False, indent=1)
for x in os.listdir(OUT):
    if x.startswith('_trecho-'): os.remove(os.path.join(OUT, x))
print('ok:', len(indice), 'nomes;', f'{OUT}/escuta-nomes.mp3 e narracao-{PROJ}.mp3 ({fim_fala:.1f} s)')
