# conferir-fins.py — a última palavra de cada trecho da narração, ouvida de perto (os últimos ~3,5 s), com a probabilidade.
# A API pode cortar o último som de um parágrafo (o "-y" de "ferry" no Juneau), e o Whisper escreve a palavra mesmo assim,
# por expectativa: desconfie da última palavra com probabilidade < 0,8 (CLAUDE.md, a narração).
#   python out/los-angeles/_pesquisa/conferir-fins.py <proj>      (cwd = raiz do canal)
import json, sys, os, tempfile, wave
from pathlib import Path
proj = sys.argv[1]
pasta = Path("out") / proj / "_narracao"
recibos = {}
for j in pasta.glob("*.json"):
    try: r = json.loads(j.read_text(encoding="utf-8"))
    except Exception: continue
    if isinstance(r, dict) and isinstance(r.get("trecho"), int) and (pasta / (j.stem + ".pcm")).exists():
        recibos[r["trecho"]] = pasta / (j.stem + ".pcm")
from faster_whisper import WhisperModel
m = WhisperModel("large-v3", device="cpu", compute_type="int8", cpu_threads=os.cpu_count() or 4, local_files_only=True)
SR = 44100; out = []
for n in sorted(recibos):
    d = recibos[n].read_bytes(); dur = len(d) / 2 / SR
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f: nome = f.name
    with wave.open(nome, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(d[int(max(0, dur - 3.5) * SR) * 2:])
    segs, _ = m.transcribe(nome, language="en", word_timestamps=True, beam_size=5, condition_on_previous_text=False)
    ws = [(w.word.strip(), round(w.probability, 2), round(w.end, 2)) for s in segs for w in s.words]
    os.unlink(nome)
    ult = ws[-1] if ws else ("", 0, 0)
    marca = "  ← CONFERIR" if ult[1] < 0.8 else ""
    print(f"trecho {n:2d}: …{' '.join(x[0] for x in ws[-5:])}  (última {ult[0]!r} p={ult[1]}){marca}")
    out.append({"trecho": n, "fim": [list(x) for x in ws[-6:]], "ultima_prob": ult[1]})
(pasta / "conferencia-fins.json").write_text(json.dumps(out, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
