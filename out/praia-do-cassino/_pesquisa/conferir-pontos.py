"""Confere em recorte curto os pontos que o conferir-paragrafos.py marcou na narração do vídeo 6 (08/11/2026).

Uso (cwd na raiz): python -X utf8 -B out/praia-do-cassino/_pesquisa/conferir-pontos.py

- Pontos de conteúdo (trecho, segundo dentro do trecho): recorta 7 s em volta (3 antes, 4 depois) da narracao.wav tratada e transcreve SÓ o
  recorte, com a probabilidade de cada palavra. Recorte curto não tem a emenda de janela do Whisper; se o eco ou a palavra a mais some no
  recorte, era do transcritor; se fica, a voz disse.
- Fins de trecho (o silêncio do fim saiu 0,00 s): transcreve os últimos 3,5 s e mede a energia dos últimos 200 ms em quadros de 20 ms
  (dBFS). Corte de som aparece como energia alta até o fim e última palavra com probabilidade baixa (< 0,8; sala/narracao.md). Os trechos
  com silêncio normal no fim entram como comparação.
O faster-whisper (large-v3, language="en") roda só do cache local. Nada aqui gasta crédito.
"""
import json, math, os, subprocess, sys, tempfile, wave
import numpy as np

for fluxo in (sys.stdout, sys.stderr):
    fluxo.reconfigure(encoding="utf-8", errors="replace")
os.environ.setdefault("HF_HUB_OFFLINE", "1")
from faster_whisper import WhisperModel

WAV = "out/praia-do-cassino/narracao.wav"
NJ = "out/praia-do-cassino/narracao.json"
PONTOS = [(6, 28.5, "REPETIU could"), (10, 2.6, "we -> we've"), (15, 27.1, "ACRESCENTOU sunday")]
FINS = [6, 14, 10, 15]  # 6 e 14: silêncio do fim 0,00 s; 10 e 15: comparação (0,16 e 0,15 s)

segs = {s["trecho"]: s for s in json.load(open(NJ, encoding="utf-8"))["segmentos"] if s["tipo"] == "fala"}
w = wave.open(WAV, "rb")
taxa = w.getframerate()
amostras = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float32) / 32768.0
w.close()

modelo = WhisperModel("large-v3", device="cpu", compute_type="int8", cpu_threads=os.cpu_count() or 4)
tmp = tempfile.mkdtemp(prefix="pontos-")


def transcrever(ini, dur):
    arq = os.path.join(tmp, "r.wav")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{ini:.3f}", "-t", f"{dur:.3f}", "-i", WAV, "-ar", "16000", "-ac", "1", arq],
                   check=True)
    partes, _ = modelo.transcribe(arq, language="en", beam_size=5, condition_on_previous_text=False, vad_filter=False,
                                  word_timestamps=True)
    palavras = [p for s in partes for p in (s.words or [])]
    return " ".join(f"{p.word.strip()}({p.probability:.2f})" for p in palavras)


print("== pontos de conteúdo ==")
for trecho, t, motivo in PONTOS:
    s = segs[trecho]
    ini = max(s["start"], s["start"] + t - 3.0)
    print(f"trecho {trecho} @ {t:.1f} s ({motivo}): {transcrever(ini, 7.0)}")

print("== fins de trecho ==")
for trecho in FINS:
    s = segs[trecho]
    fim = int(s["end"] * taxa)
    quadro = int(0.02 * taxa)
    dbs = []
    for k in range(10, 0, -1):
        q = amostras[fim - k * quadro: fim - (k - 1) * quadro]
        rms = math.sqrt(float(np.mean(q * q))) if len(q) else 0.0
        dbs.append(round(20 * math.log10(rms), 1) if rms > 0 else -120.0)
    print(f"trecho {trecho} (fim {s['end']:.2f} s): últimos 200 ms em dBFS, de 20 em 20 ms: {dbs}")
    print(f"    últimos 3,5 s: {transcrever(s['end'] - 3.5, 3.5)}")
