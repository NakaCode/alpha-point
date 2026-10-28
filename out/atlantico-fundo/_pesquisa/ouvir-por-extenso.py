# ouvir-por-extenso.py — ouve de perto, com o faster-whisper local, pontos da narração em que o transcritor escreveria um número em
# algarismos: "January 27" serve tanto para "twenty-seven" quanto para "twenty-seventh", e "1 ,500" faz a comparação perder o
# "thousand". Recorta ~6 s do trecho do cache do narrar (a geração que a narracao.json usa, pelo requestId) e transcreve com os
# tokens que têm algarismo suprimidos: o Whisper tem de escrever o número por extenso, e o ordinal aparece. Não decide sozinho:
# imprime o que ouviu, com a probabilidade de cada palavra, para quem confere julgar (e o Lucas ouvir, se ficar dúvida).
#   python -X utf8 -B out/atlantico-fundo/_pesquisa/ouvir-por-extenso.py <proj> <trecho>:<segundo> [...] [--tempos]   (cwd = raiz do canal)
# --tempos imprime também o começo e o fim de cada palavra, em segundos do trecho (para recortar o espectro de uma palavra).
import json, subprocess, sys
from pathlib import Path

import numpy as np

for fluxo in (sys.stdout, sys.stderr):
    fluxo.reconfigure(encoding="utf-8", errors="replace")

tempos = "--tempos" in sys.argv
args = [a for a in sys.argv[1:] if a != "--tempos"]
proj, pontos = args[0], [tuple(float(x) for x in a.split(":")) for a in args[1:]]
if not pontos: sys.exit("uso: ouvir-por-extenso.py <proj> <trecho>:<segundo> [...]")
pasta = Path("out") / proj / "_narracao"
atual = {s["trecho"]: s["requestId"] for s in json.loads((Path("out") / proj / "narracao.json").read_text(encoding="utf-8"))["segmentos"]
         if s.get("tipo") == "fala" and s.get("requestId")}
pcm = {}
for j in pasta.glob("*.json"):
    try: r = json.loads(j.read_text(encoding="utf-8"))
    except Exception: continue
    if isinstance(r, dict) and r.get("trecho") in atual and r.get("requestId") == atual[r["trecho"]]:
        pcm[r["trecho"]] = pasta / (j.stem + ".pcm")

from faster_whisper import WhisperModel
modelo = WhisperModel("large-v3", device="cpu", compute_type="int8", local_files_only=True)
com_algarismo = [i for t, i in modelo.hf_tokenizer.get_vocab().items() if any(c.isdigit() for c in t)]
print(f"{len(com_algarismo)} tokens com algarismo suprimidos")

ANTES, DURA = 2.5, 6.0
for trecho, seg in pontos:
    trecho = int(trecho)
    if trecho not in pcm: print(f"trecho {trecho}: sem o áudio da geração atual no cache"); continue
    ini = max(0.0, seg - ANTES)
    audio = subprocess.run(["ffmpeg", "-v", "error", "-f", "s16le", "-ar", "44100", "-ac", "1", "-i", str(pcm[trecho]),
                            "-ss", f"{ini:.2f}", "-t", f"{DURA:.2f}", "-ar", "16000", "-f", "f32le", "-"],
                           capture_output=True, check=True).stdout
    segs, _ = modelo.transcribe(np.frombuffer(audio, dtype=np.float32), language="en", word_timestamps=True, beam_size=5,
                                condition_on_previous_text=False, vad_filter=False, suppress_tokens=[-1] + com_algarismo)
    palavras = [w for s in segs for w in (s.words or [])]
    print(f"trecho {trecho:2d} @ {seg:5.1f} s (recorte {ini:.1f}–{ini + DURA:.1f} s): "
          + " ".join(f"{w.word.strip()}({w.probability:.2f})" for w in palavras))
    if tempos:
        print("    " + " ".join(f"{w.word.strip()}[{ini + w.start:.2f}–{ini + w.end:.2f}]" for w in palavras))
