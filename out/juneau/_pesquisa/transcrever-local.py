# Transcreve MP3/WAV da narração com o faster-whisper LOCAL (large-v3), palavra a palavra.
#
# Por que local: o transcrever.mjs da pré-v1 usa o Scribe da ElevenLabs, que é pago, e o local faz o mesmo
# (CLAUDE.md, "Peças da pré-v1 em uso", item 3). Idioma passado explicitamente (en), nunca autodetectado.
# condition_on_previous_text=False: sem ele, o Whisper às vezes repete uma frase ou "completa" o que não ouviu,
# e aqui a transcrição é a prova do que a voz disse de fato.
#
#   python out/juneau/_pesquisa/transcrever-local.py <arquivo.mp3> [...] [--gpu]    (cwd = raiz do canal)
# Padrão: processador (int8). Com --gpu, a placa de vídeo (float16); nesta máquina ela ainda não roda: falta a
# cuBLAS 12 da NVIDIA (medido em 25/09/2026: "cublas64_12.dll is not found").
# Grava, ao lado de cada áudio, <nome>.words.json: {arquivo, sha256, modelo, duracao, words:[{w,start,end,p}]}.
# Já existe e o sha256 do áudio bate? Não refaz.
import hashlib, json, os, sys, time

for fluxo in (sys.stdout, sys.stderr):
    fluxo.reconfigure(encoding="utf-8", errors="replace")
from faster_whisper import WhisperModel

MODELO = "large-v3"
GPU = "--gpu" in sys.argv
arquivos = [a for a in sys.argv[1:] if a != "--gpu"]
if not arquivos:
    sys.exit("uso: python transcrever-local.py <arquivo.mp3> [...]")
modelo = None
for arq in arquivos:
    sha = hashlib.sha256(open(arq, "rb").read()).hexdigest()
    saida = os.path.splitext(arq)[0] + ".words.json"
    if os.path.exists(saida) and json.load(open(saida, encoding="utf-8")).get("sha256") == sha:
        print(f"= {os.path.basename(saida)} já está (mesmo áudio)")
        continue
    if modelo is None:
        modelo = (WhisperModel(MODELO, device="cuda", compute_type="float16") if GPU
                  else WhisperModel(MODELO, device="cpu", compute_type="int8", cpu_threads=os.cpu_count() or 4))
    t0 = time.time()
    segs, info = modelo.transcribe(arq, language="en", word_timestamps=True, beam_size=5,
                                   condition_on_previous_text=False, vad_filter=False)
    words = []
    for s in segs:
        for w in s.words or []:
            words.append({"w": w.word.strip(), "start": round(w.start, 3), "end": round(w.end, 3), "p": round(w.probability, 3)})
    json.dump({"arquivo": arq.replace("\\", "/"), "sha256": sha, "modelo": f"faster-whisper {MODELO} " + ("(cuda, float16)" if GPU else "(cpu, int8)"),
               "idioma": "en", "duracao": round(info.duration, 2), "words": words},
              open(saida, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"✓ {os.path.basename(saida)}: {len(words)} palavras em {info.duration:.0f} s de áudio ({time.time() - t0:.0f} s)")
