# conferir-vaos-som.py — confere no som a borda de um "vão com voz sem vale" que o ingest-local.py deixou PENDENTE (portão relogio),
# antes do --aceitar-vaos. É o método do cético do som do vídeo 3 (out/zona-do-canal/_tmp/relogio-vaos-cetico-som.md), sem o harness:
#   1. a energia da narracao.wav em janelas de 10 ms, com a razão entre a banda de 3 a 10 kHz e a de menos de 1 kHz (o chiado do
#      /s/ e do /z/, as oclusões);
#   2. a varredura de corte com o Whisper: em cada ponto t, o recorte que COMEÇA em t (até t + 0,9 s) e o que TERMINA em t (desde
#      t − 1,2 s). O que começa em t é o que discrimina: se t ainda está na 1ª palavra, ele ouve a sobra dela; se t passou do começo
#      da 2ª, ele perde o começo da 2ª. O que termina em t completa palavras por expectativa e não prova sozinho;
#   3. cada palavra em recorte isolado, com a borda proposta: a 1ª (do começo dela à borda) e a 2ª (da borda ao fim dela).
# Não decide nada: imprime, e quem confere julga. Só lê a narracao.wav; o Whisper local (large-v3, só do cache, language="en").
#   python -X utf8 -B out/atlantico-fundo/_pesquisa/conferir-vaos-som.py <proj> <ini1>:<v0>:<v1>:<fim2>[:<rotulo>] [...]
#   (cwd = raiz do canal; ini1 = começo da 1ª palavra, v0 e v1 = o vão, fim2 = fim da 2ª palavra, em segundos da narracao.wav)
import subprocess, sys

import numpy as np

for fluxo in (sys.stdout, sys.stderr):
    fluxo.reconfigure(encoding="utf-8", errors="replace")

proj = sys.argv[1]
casos = []
for a in sys.argv[2:]:
    p = a.split(":")
    casos.append((float(p[0]), float(p[1]), float(p[2]), float(p[3]), p[4] if len(p) > 4 else a))
if not casos: sys.exit("uso: conferir-vaos-som.py <proj> <ini1>:<v0>:<v1>:<fim2>[:<rotulo>] [...]")
WAV = f"out/{proj}/narracao.wav"
SR = 16000

def ler(ini, dur, sr=SR):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-ss", f"{max(0.0, ini):.3f}", "-t", f"{dur:.3f}", "-i", WAV,
                          "-ac", "1", "-ar", str(sr), "-f", "f32le", "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32)

from faster_whisper import WhisperModel
modelo = WhisperModel("large-v3", device="cpu", compute_type="int8", local_files_only=True)

def ouvir(ini, fim):
    if fim - ini < 0.05: return "(curto demais)"
    segs, _ = modelo.transcribe(ler(ini, fim - ini), language="en", word_timestamps=True, beam_size=5,
                                condition_on_previous_text=False, vad_filter=False)
    pal = [w for s in segs for w in (s.words or [])]
    return " ".join(f"{w.word.strip()}[{ini + w.start:.2f}–{ini + w.end:.2f}]" for w in pal) or "(nada)"

for ini1, v0, v1, fim2, rot in casos:
    print(f"\n=== {rot}: 1ª palavra desde {ini1:.3f}; vão {v0:.3f}–{v1:.3f}; 2ª até {fim2:.3f}")
    # 1. energia em 10 ms, 48 kHz para ter a banda de 3 a 10 kHz
    a0, a1 = v0 - 0.35, v1 + 0.35
    x = ler(a0, a1 - a0, sr=48000)
    n = 480
    print("   t (s)    dBFS   HF/LF (dB)")
    for i in range(0, len(x) - n + 1, n):
        q = x[i:i + n]
        rms = float(np.sqrt(np.mean(q * q))) + 1e-12
        esp = np.abs(np.fft.rfft(q * np.hanning(n))) ** 2
        f = np.fft.rfftfreq(n, 1 / 48000)
        hf, lf = esp[(f >= 3000) & (f <= 10000)].sum() + 1e-12, esp[f < 1000].sum() + 1e-12
        t = a0 + i / 48000
        marca = " <vão" if v0 <= t < v1 else ""
        print(f"   {t:8.3f} {20 * np.log10(rms):6.1f} {10 * np.log10(hf / lf):7.1f}{marca}")
    # 2. a varredura
    pontos = sorted({round(v0 + d, 3) for d in (-0.10, -0.05, 0.0, 0.05, 0.10, 0.15, 0.20)} | {round(v1, 3)})
    for t in pontos:
        print(f"   corte {t:.3f}: começa em t → {ouvir(t, t + 0.9)}")
        print(f"   {'':12s} termina em t → {ouvir(t - 1.2, t)}")
    # 3. cada palavra isolada, com a borda proposta (v0) e com a antiga (v1)
    for borda, nome in ((v0, "proposta"), (v1, "antiga")):
        print(f"   isolada ({nome}, borda {borda:.3f}): 1ª → {ouvir(ini1, borda)} | 2ª → {ouvir(borda, fim2)}")
