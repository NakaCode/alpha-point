# formantes.py — mostra, quadro a quadro, as vogais que a voz disse num trecho da narração, para conferir a pronúncia de um
# nome sem depender do transcritor (APRENDIZADOS.md, item 91).
# Uso (da raiz do canal): python -X utf8 -B ferramentas/formantes.py <arquivo.wav> <início_s> <fim_s>
#                         [--rotulo=<texto>] [--espectro=<arquivo.png>]
#   O WAV é PCM de 16 bits, mono (o trecho que a API da ElevenLabs devolve em pcm_44100). O início e o fim saem do
#   alinhamento que a API grava (character_start_times_seconds), com uma folga de uns 0,1 s de cada lado.
#   --espectro desenha também o espectro do trecho (0 a 5.000 Hz, 1.000 px por segundo) pelo ffmpeg.
# Por quê: o transcritor escreve o nome como está no texto, por expectativa. No vídeo 5, ele escreveu "Nares" sem dizer se
#   a voz falou NAIRZ (uma sílaba) ou NAIR-eez (duas).
# Como ler (voz masculina; os números mudam com a voz):
#   - o /i/ ("ee") tem F1 baixo (~300 Hz) e F2 alto (acima de ~2.000 Hz), e costuma trazer um pico de volume próprio;
#   - o "r" americano derruba o F3 até perto do F2 (~1.700 Hz);
#   - a fricativa ("s", "z") sobe a taxa de cruzamentos por zero (zcr acima de ~0,1), e o LPC dela não é formante.
#   Compare sempre com uma palavra da MESMA voz que tem o som em dúvida (no vídeo 5, o "ri" de "Mariana").
# Limites: mostra as vogais e as sílabas, não a tônica; vale para a geração medida (outra geração pode dizer diferente);
#   quadro fraco (abaixo de -45 dB) sai sem formante.
# Só lê o WAV (e, com --espectro, grava o PNG): não lê chave, nada sai da máquina.
import subprocess
import sys
import wave

import numpy as np


def ler_wav(caminho):
    with wave.open(caminho, "rb") as w:
        if w.getnchannels() != 1 or w.getsampwidth() != 2:
            sys.exit("o WAV tem de ser PCM de 16 bits, mono")
        sr = w.getframerate()
        x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float64) / 32768.0
    return x, sr


def decimar(x, fator):
    # passa-baixa por sinc com janela, com o corte em 0,45 da nova Nyquist, e depois um a cada `fator`
    n = 101
    corte = 0.45 / fator
    t = np.arange(n) - (n - 1) / 2
    h = 2 * corte * np.sinc(2 * corte * t) * np.hamming(n)
    h /= h.sum()
    return np.convolve(x, h, mode="same")[::fator]


def lpc(quadro, ordem):
    # Levinson-Durbin sobre a autocorrelação
    r = np.correlate(quadro, quadro, mode="full")[len(quadro) - 1 : len(quadro) + ordem]
    if r[0] <= 0:
        return None
    a = np.zeros(ordem + 1)
    a[0] = 1.0
    erro = r[0]
    for i in range(1, ordem + 1):
        k = -(r[i] + np.dot(a[1:i], r[i - 1 : 0 : -1])) / erro
        novo = a.copy()
        novo[1:i] = a[1:i] + k * a[i - 1 : 0 : -1]
        novo[i] = k
        a = novo
        erro *= 1 - k * k
        if erro <= 0:
            return None
    return a


def formantes(a, sr):
    raizes = np.roots(a)
    raizes = raizes[np.imag(raizes) > 0]
    freqs = np.angle(raizes) * sr / (2 * np.pi)
    bandas = -sr / np.pi * np.log(np.abs(raizes))
    pares = sorted((f, b) for f, b in zip(freqs, bandas) if 150 < f < sr / 2 - 100 and b < 500)
    return [round(f) for f, _ in pares[:3]]


def espectro(caminho, ini, fim, png):
    dur = fim - ini
    filtro = f"showspectrumpic=s={round(1000 * dur)}x700:legend=1:scale=log:fscale=lin:stop=5000:color=intensity:gain=2"
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{ini}", "-t", f"{dur}", "-i", caminho, "-lavfi", filtro, png],
                   check=True)


def main():
    pos = [a for a in sys.argv[1:] if not a.startswith("--")]
    opc = dict(a[2:].split("=", 1) for a in sys.argv[1:] if a.startswith("--") and "=" in a)
    if len(pos) != 3:
        sys.exit("uso: python -X utf8 -B ferramentas/formantes.py <arquivo.wav> <início_s> <fim_s> "
                 "[--rotulo=<texto>] [--espectro=<arquivo.png>]")
    caminho, ini, fim = pos[0], float(pos[1]), float(pos[2])
    x, sr = ler_wav(caminho)
    fator = max(1, sr // 11025)
    sr2 = sr // fator
    y = decimar(x, fator)
    y = np.append(y[0], y[1:] - 0.97 * y[:-1])
    jan, passo = int(0.025 * sr2), 0.010
    ordem = 2 + sr2 // 1000
    print(f"# {opc.get('rotulo', '')} {caminho} {ini:.2f}-{fim:.2f} s, fs={sr2}, ordem LPC={ordem}".replace("#  ", "# "))
    print("t_s     dB     zcr   F1    F2    F3")
    t = ini
    while t + 0.025 <= fim + 1e-9:
        bruto = x[int(t * sr) : int(t * sr) + int(0.025 * sr)]
        db = 10 * np.log10(np.mean(bruto**2) + 1e-12)
        zcr = np.mean(np.abs(np.diff(np.sign(bruto))) > 0)
        linha = f"{t:6.3f} {db:6.1f} {zcr:5.2f}"
        q = y[int(t * sr2) : int(t * sr2) + jan]
        a = lpc(q * np.hamming(len(q)), ordem) if db > -45 else None
        if a is not None:
            linha += "  " + "  ".join(f"{v:4d}" for v in formantes(a, sr2))
        print(linha)
        t += passo
    if "espectro" in opc:
        espectro(caminho, ini, fim, opc["espectro"])
        print(f"# espectro: {opc['espectro']}")


if __name__ == "__main__":
    main()
