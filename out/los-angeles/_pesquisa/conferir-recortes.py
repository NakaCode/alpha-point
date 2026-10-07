# conferir-recortes.py — ouve de perto, com o faster-whisper local, cada ponto que o conferir-paragrafos.py marcou.
# Para cada ocorrência (trecho, segundo) do conferencia-paragrafos.json, recorta ~5 s do trecho do cache do narrar
# (out/<proj>/_narracao/<chave>.pcm, PCM 16 bits mono a 44,1 kHz) e transcreve só o recorte, com a probabilidade de cada
# palavra. Recorte curto não herda o contexto do parágrafo, e o Whisper escreve menos por expectativa. Não decide sozinho:
# imprime o que ouviu, para quem confere julgar (e o Lucas ouvir, se ficar dúvida).
#   python out/los-angeles/_pesquisa/conferir-recortes.py <proj> [--trechos=6,9,16]   (cwd = raiz do canal)
# Grava out/<proj>/_narracao/conferencia-recortes.json.
import json, sys, os, tempfile, wave
from pathlib import Path

proj = sys.argv[1]
so = next((set(int(x) for x in a.split("=", 1)[1].split(",")) for a in sys.argv[2:] if a.startswith("--trechos=")), None)
pasta = Path("out") / proj / "_narracao"
conf = json.loads((pasta / "conferencia-paragrafos.json").read_text(encoding="utf-8"))
recibos = {}
for j in pasta.glob("*.json"):
    try:
        r = json.loads(j.read_text(encoding="utf-8"))
    except Exception:
        continue
    if isinstance(r, dict) and isinstance(r.get("trecho"), int) and (pasta / (j.stem + ".pcm")).exists():
        recibos[r["trecho"]] = pasta / (j.stem + ".pcm")

from faster_whisper import WhisperModel
modelo = WhisperModel("large-v3", device="cpu", compute_type="int8", cpu_threads=os.cpu_count() or 4, local_files_only=True)
SR = 44100
saida = []
for t in conf:
    if not t.get("ocorrencias") or (so and t["trecho"] not in so):
        continue
    pcm = recibos.get(t["trecho"])
    if not pcm:
        print(f"trecho {t['trecho']}: sem pcm no cache"); continue
    dados = pcm.read_bytes()
    dur = len(dados) / 2 / SR
    for o in t["ocorrencias"]:
        a, b = max(0.0, o["segundos"] - 2.0), min(dur, o["segundos"] + 3.5)
        with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
            nome = f.name
        with wave.open(nome, "wb") as w:
            w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
            w.writeframes(dados[int(a * SR) * 2:int(b * SR) * 2])
        segs, _ = modelo.transcribe(nome, language="en", word_timestamps=True, beam_size=5, condition_on_previous_text=False)
        palavras = [(w.word.strip(), round(w.probability, 2)) for s in segs for w in s.words]
        os.unlink(nome)
        texto = " ".join(p for p, _ in palavras)
        baixas = [f"{p}({q})" for p, q in palavras if q < 0.8]
        print(f"trecho {t['trecho']:2d} @{o['segundos']:5.1f}s  roteiro: {o['roteiro']!r:16} ouvido no parágrafo: {o['ouvido']!r:14} recorte: {texto}")
        if baixas:
            print(f"            baixa confiança: {' '.join(baixas)}")
        saida.append({"trecho": t["trecho"], "segundos": o["segundos"], "recorte_s": [round(a, 2), round(b, 2)], "roteiro": o["roteiro"],
                      "ouvido_no_paragrafo": o["ouvido"], "recorte": texto, "palavras": palavras})
(pasta / "conferencia-recortes.json").write_text(json.dumps(saida, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"gravado: {(pasta / 'conferencia-recortes.json').as_posix()} · {len(saida)} recortes")
