# amostra-voz-palavras.py — a 2ª conferência da amostra de voz do vídeo 5 (amostra-voz.mjs): a voz disse todas as palavras do
# texto, sem pular nem repetir? O faster-whisper (large-v3, do cache local, sem rede) transcreve cada pedido do jeito normal,
# com algarismos, e a transcrição se compara palavra a palavra com o texto pedido (na grafia do roteiro). A 1ª conferência
# (amostra-voz-conferir.py) suprime os algarismos para ouvir COMO a voz disse cada número, e com isso o Whisper às vezes pula
# ou repete uma palavra em volta do número ("floor by by", "a a study"): esta separa o que é da voz do que é da supressão.
# Limite conhecido do canal: a repetição da voz o Whisper às vezes limpa ("I decided I decided"); só o ouvido humano a pega.
#   python -X utf8 -B out/atlantico-fundo/_pesquisa/amostra-voz-palavras.py [--so=B22,A08]      (cwd = raiz do canal)
# Saída: out/atlantico-fundo/_tmp/amostra-voz/conferencia-palavras.json e o resumo na tela (só os pedidos com diferença).
# exit: 0 = rodou (as diferenças se leem; o Whisper erra nome) · 2 = não rodou.
import difflib
import json
import os
import re
import sys

os.environ["HF_HUB_OFFLINE"] = "1"
PASTA = "out/atlantico-fundo/_tmp/amostra-voz"
SO = []
for a in sys.argv[1:]:
    if a.startswith("--so="):
        SO = [x for x in a[5:].split(",") if x]
    else:
        print(f"opção desconhecida: {a}", file=sys.stderr)
        sys.exit(2)


def palavras(t):
    t = t.lower().replace("’", "'").replace("—", " ")
    t = re.sub(r"(?<=\d),(?=\d{3})", "", t)
    t = re.sub(r"(?<=[a-z])-(?=[a-z])", " ", t)
    t = re.sub(r"[^a-z0-9.' à-ÿ]+", " ", t)
    return [w.strip("'.") for w in t.split() if w.strip("'.")]


def main():
    try:
        plano = json.load(open(f"{PASTA}/plano.json", encoding="utf-8"))
    except FileNotFoundError:
        print("PARADO: sem plano.json; rode antes o amostra-voz.mjs", file=sys.stderr)
        return 2
    itens = [p for p in plano["itens"] if not SO or p["id"] in SO]
    from faster_whisper import WhisperModel
    from faster_whisper.utils import download_model
    try:
        caminho = download_model("large-v3", local_files_only=True)
    except Exception as e:
        print(f"PARADO: o large-v3 não está no cache local ({type(e).__name__}); este script não baixa nada", file=sys.stderr)
        return 2
    modelo = WhisperModel(caminho, device="cpu", compute_type="int8", cpu_threads=max(1, (os.cpu_count() or 4) - 2), local_files_only=True)
    out, total_exp, total_iguais = [], 0, 0
    for p in itens:
        segs, _ = modelo.transcribe(f"{PASTA}/{p['id']}.wav", language="en", beam_size=5, condition_on_previous_text=False, vad_filter=False)
        t = " ".join(s.text.strip() for s in segs)
        exp, got = palavras(p["texto"]), palavras(t)
        sm = difflib.SequenceMatcher(None, exp, got, autojunk=False)
        ops = [(op, " ".join(exp[a:b]), " ".join(got[c:d])) for op, a, b, c, d in sm.get_opcodes() if op != "equal"]
        iguais = sum(b.size for b in sm.get_matching_blocks())
        total_exp += len(exp)
        total_iguais += iguais
        out.append({"id": p["id"], "texto": p["texto"], "transcricao": t, "palavras": len(exp), "iguais": iguais, "diferencas": ops})
        if ops:
            print(f"{p['id']}: {iguais}/{len(exp)} · " + "; ".join(f"[{a}]→[{b}]" for _, a, b in ops))
    json.dump({"modelo": "faster-whisper large-v3 (cache local), cpu int8, beam 5, com algarismos", "itens": out,
               "palavras": total_exp, "iguais": total_iguais}, open(f"{PASTA}/conferencia-palavras.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    print(f"\n{total_iguais} de {total_exp} palavras iguais ao texto ({100 * total_iguais / max(1, total_exp):.1f} %), em {len(out)} pedidos")
    return 0


if __name__ == "__main__":
    sys.exit(main())
