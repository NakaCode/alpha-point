# Confere, trecho a trecho, cada ponto suspeito que o comparar-narracao.py achou: recorta ~7 s do áudio em volta
# e transcreve SÓ o recorte. Recorte curto não tem emenda de janela de 30 s do Whisper — onde ele às vezes
# duplica a última palavra ("the point. point."). Se o eco some no recorte, era do transcritor; se fica, a voz
# repetiu de verdade.
#
#   python out/juneau/_pesquisa/conferir-trechos.py <relatorio.json> [...]     (saídas do comparar-narracao --json)
# Grava <relatorio>.trechos.json com o texto de cada recorte.
import json, os, subprocess, sys, tempfile

for fluxo in (sys.stdout, sys.stderr):
    fluxo.reconfigure(encoding="utf-8", errors="replace")
from faster_whisper import WhisperModel

ANTES, DEPOIS = 3.0, 4.0
modelo = WhisperModel("large-v3", device="cpu", compute_type="int8", cpu_threads=os.cpu_count() or 4)
tmp = tempfile.mkdtemp(prefix="trechos-")
for rel in sys.argv[1:]:
    dados = json.load(open(rel, encoding="utf-8"))
    saida = []
    for v in dados["versoes"]:
        audio = v["arquivo"].replace(".words.json", ".mp3")
        for o in v["ocorrencias"]:
            if o["tipo"] == "PULOU" and o["palavras_do_roteiro"] > 8:
                continue   # trecho longo pulado: a transcrição inteira já prova; não cabe num recorte
            ini = max(0.0, o["segundos"] - ANTES)
            wav = os.path.join(tmp, "r.wav")
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{ini:.2f}", "-t", f"{ANTES + DEPOIS:.2f}", "-i", audio,
                            "-ar", "16000", "-ac", "1", wav], check=True)
            segs, _ = modelo.transcribe(wav, language="en", beam_size=5, condition_on_previous_text=False, vad_filter=False)
            texto = " ".join(s.text.strip() for s in segs)
            saida.append({"versao": os.path.basename(audio)[:8], "minuto": o["minuto"], "tipo": o["tipo"],
                          "roteiro": o["roteiro"], "ouvido_no_todo": o["ouvido"], "contexto": o["contexto"], "recorte": texto})
            print(f"{os.path.basename(audio)[:8]} {o['minuto']} {o['tipo']:<11} roteiro \"{o['roteiro']}\" / todo \"{o['ouvido']}\"\n"
                  f"    recorte: {texto}")
    json.dump(saida, open(rel.replace(".json", ".trechos.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
