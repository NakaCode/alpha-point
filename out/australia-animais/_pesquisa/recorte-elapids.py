"""O "elapids" do vídeo 8 (australia-animais), em recorte curto: o que o Whisper ouve em cada um.

O conferir-paragrafos.py (18/11/2026, 21:56) ouviu "the lapids" nos dois "elapids" do trecho 20 e "elapids" nos do 17 e do 19.
Este script transcreve os trechos 17, 19 e 20 com o tempo de cada palavra, acha cada palavra com "lapid", mostra os vizinhos com a
probabilidade do Whisper e transcreve de novo um recorte curto em volta dela (1,2 s antes, 1,5 s depois), sem a janela longa. Se o
recorte ouve "elapids", o "the lapids" era do transcritor; se ouve "the lapids" de novo, a voz pode ter apagado o "e" do começo (a
referência é "EL-uh-pidz", roteiros/australia-animais/pronuncia.md), e o ponto vai ao ouvido do Lucas. Não decide nada sozinho.
Só lê a narração. Uso (cwd na raiz): python -X utf8 -B out/australia-animais/_pesquisa/recorte-elapids.py
"""
import json
import os
import re
import subprocess
import sys
import tempfile

for fluxo in (sys.stdout, sys.stderr):
    fluxo.reconfigure(encoding="utf-8", errors="replace")
from faster_whisper import WhisperModel

WAV = "out/australia-animais/narracao.wav"
dados = json.load(open("out/australia-animais/narracao.json", encoding="utf-8"))
falas = {s["trecho"]: s for s in dados["segmentos"] if s.get("tipo") == "fala"}
modelo = WhisperModel("large-v3", device="cpu", compute_type="int8", cpu_threads=os.cpu_count() or 4)
tmp = tempfile.mkdtemp(prefix="elapids-")


def recorta(ini, dur, nome):
    w = os.path.join(tmp, nome)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{ini:.3f}", "-t", f"{dur:.3f}", "-i", WAV, "-ar", "16000", "-ac", "1", w],
                   check=True)
    return w


for t in (17, 19, 20):
    s = falas[t]
    w = recorta(s["start"], s["end"] - s["start"], f"t{t}.wav")
    segs, _ = modelo.transcribe(w, language="en", beam_size=5, word_timestamps=True, condition_on_previous_text=False,
                                vad_filter=False)
    palavras = [p for sg in segs for p in sg.words]
    achou = 0
    for i, p in enumerate(palavras):
        if not re.search(r"lapid", p.word, re.I):
            continue
        achou += 1
        viz = " ".join(f"{q.word.strip()}({q.probability:.2f})" for q in palavras[max(0, i - 2):i + 2])
        t0 = s["start"] + p.start
        w2 = recorta(max(0.0, t0 - 1.2), (p.end - p.start) + 2.7, f"r{t}-{i}.wav")
        segs2, _ = modelo.transcribe(w2, language="en", beam_size=5, condition_on_previous_text=False, vad_filter=False)
        curto = " ".join(x.text.strip() for x in segs2)
        m, r = divmod(t0, 60)
        print(f"trecho {t} · {int(m)}:{r:05.2f} · no trecho: {viz}\n    recorte curto: {curto}")
    if not achou:
        print(f"trecho {t}: nenhuma palavra com \"lapid\" na transcrição do trecho")
