# Confere, parágrafo por parágrafo, uma narração feita pelo narrar.mjs da pré-v1 (um pedido por parágrafo).
#
# Para cada trecho do cache (out/<proj>/_narracao/<chave>.pcm + o recibo <chave>.json, que diz o nº do trecho):
#   - transcreve SÓ aquele trecho com o faster-whisper local (large-v3, processador) e compara palavra a palavra
#     com o parágrafo do roteiro.md (as regras de comparar-narracao.py: números, siglas, grafias do transcritor);
#   - mede o silêncio que o trecho já traz no começo e no fim (abaixo de -40 dBFS), para acertar a
#     pausa_paragrafo_s do canal.json: a pausa que se ouve é fim do trecho + pausa + começo do seguinte.
# Um parágrafo é um pedido: se ele parou antes do fim, é ESTE trecho que se pede de novo (--refazer=N no narrar).
#
#   python out/juneau/_pesquisa/conferir-paragrafos.py <proj>        (cwd = raiz do canal; ex.: juneau-voz)
# Grava out/<proj>/_narracao/conferencia-paragrafos.json.
import glob, importlib.util, json, os, re, subprocess, sys

import numpy as np

for fluxo in (sys.stdout, sys.stderr):
    fluxo.reconfigure(encoding="utf-8", errors="replace")
from faster_whisper import WhisperModel

AQUI = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("comparar", os.path.join(AQUI, "comparar-narracao.py"))
C = importlib.util.module_from_spec(spec); spec.loader.exec_module(C)

proj = sys.argv[1]
base = os.path.join("out", proj)
roteiro = open(os.path.join(base, "roteiro.md"), encoding="utf-8").read()
roteiro = re.sub(r"\A---\n.*?\n---\n", "", roteiro, flags=re.S)
paragrafos = [re.sub(r"\s+", " ", p).strip() for p in re.split(r"\n\s*\n", roteiro) if p.strip()]
recibos = {}
for arq in glob.glob(os.path.join(base, "_narracao", "*.json")):
    if arq.endswith((".pedido.json", "conferencia-paragrafos.json")): continue
    r = json.load(open(arq, encoding="utf-8"))
    if "trecho" in r: recibos[r["trecho"]] = (arq[:-5] + ".pcm", r)
TAXA = 44100
LIMIAR = 32768 * 10 ** (-40 / 20)

def silencios(pcm):
    a = np.abs(np.frombuffer(open(pcm, "rb").read(), dtype="<i2").astype(np.int32))
    acima = np.nonzero(a > LIMIAR)[0]
    if not len(acima): return len(a) / TAXA, 0.0
    return acima[0] / TAXA, (len(a) - 1 - acima[-1]) / TAXA

modelo = WhisperModel("large-v3", device="cpu", compute_type="int8", cpu_threads=os.cpu_count() or 4)
saida, problemas = [], 0
for n, texto in enumerate(paragrafos, 1):
    if n not in recibos:
        print(f"trecho {n:>2}: SEM ÁUDIO no cache"); problemas += 1; continue
    pcm, rec = recibos[n]
    audio = subprocess.run(["ffmpeg", "-v", "error", "-f", "s16le", "-ar", str(TAXA), "-ac", "1", "-i", pcm,
                            "-ar", "16000", "-f", "f32le", "-"], capture_output=True, check=True).stdout
    segs, info = modelo.transcribe(np.frombuffer(audio, dtype=np.float32), language="en", word_timestamps=True,
                                   beam_size=5, condition_on_previous_text=False, vad_filter=False)
    words = [{"w": w.word.strip(), "start": w.start, "end": w.end} for s in segs for w in (s.words or [])]
    tmp = os.path.join(base, "_narracao", f"_t{n}.words.json")
    json.dump({"duracao": info.duration, "words": words}, open(tmp, "w", encoding="utf-8"))
    r = C.comparar(texto, tmp); os.remove(tmp)
    ini, fim = silencios(pcm)
    reais = [o for o in r["ocorrencias"] if o["tipo"] != "REPETIU"]
    ok = r["cobertura"] >= 98 and r["puladas"] == 0
    problemas += 0 if ok else 1
    saida.append({"trecho": n, "duracao": round(rec["duracaoSec"], 2), "cobertura": r["cobertura"], "puladas": r["puladas"],
                  "silencio_inicio": round(ini, 3), "silencio_fim": round(fim, 3), "ocorrencias": r["ocorrencias"],
                  "grafias": r["equivalencias_de_grafia"], "transcricao": " ".join(w["w"] for w in words)})
    print(f"trecho {n:>2}: {rec['duracaoSec']:5.1f} s · {r['cobertura']:5.1f} % · silêncio {ini:.2f}/{fim:.2f} s"
          + ("" if ok else "  ← CONFERIR") + "".join(f"\n      {o['tipo']} \"{o['roteiro'][:90]}\" → \"{o['ouvido'][:60]}\"" for o in reais))
json.dump(saida, open(os.path.join(base, "_narracao", "conferencia-paragrafos.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
ini = [x["silencio_inicio"] for x in saida]; fim = [x["silencio_fim"] for x in saida]
if saida:
    print(f"\nsilêncio mediano: começo {np.median(ini):.2f} s, fim {np.median(fim):.2f} s · trechos a conferir: {problemas}")
