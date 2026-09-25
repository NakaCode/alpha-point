# Monta a narração inteira do Juneau: o bloco 1 (versão 1b, gerada no site em 24/09 e baixada do histórico) e os
# blocos 2 e 3 (gerados pela API com o narrar.mjs da pré-v1 em 25/09, projeto out/juneau-voz/).
#
# Por que não é tudo do narrar: o bloco 1 do site saiu completo (1b) e o Lucas escolheu refazer só o 2 e o 3
# (25/09/2026). O que a montagem faz, e por quê:
#   - confere o sha256 da 1b contra a procedência (narracao-historico.json) e grava o da narração do narrar;
#   - iguala o volume do bloco 1 ao dos blocos 2 e 3 (medido em LUFS integrado, ebur128 do ffmpeg);
#   - corta o silêncio do fim da 1b (vinha com 1,8 s) e deixa a mesma pausa que o narrar pôs entre parágrafos;
#   - esmaece 5 ms no começo e 15 ms no fim de cada trecho falado: os trechos da API terminam "secos" (som até a
#     última amostra), e o corte para o silêncio daria estalo. Nada muda de duração nem de lugar.
#
#   python out/juneau/_pesquisa/montar-narracao.py        (cwd = raiz do canal)
# Grava out/juneau/_narracao/narracao-completa.wav (+ uma prévia .mp3) e a procedência em
# out/juneau/_pesquisa/narracao-montagem.json.
import hashlib, json, os, re, subprocess, sys

import numpy as np

for fluxo in (sys.stdout, sys.stderr):
    fluxo.reconfigure(encoding="utf-8", errors="replace")
TAXA = 44100
sha = lambda arq: hashlib.sha256(open(arq, "rb").read()).hexdigest()

hist = json.load(open("out/juneau/_pesquisa/narracao-historico.json", encoding="utf-8"))
g1b = next(g for g in hist["geracoes"] if g["bloco"] == 1 and g["versao"] == "b")
if sha(g1b["arquivo"]) != g1b["sha256"]:
    sys.exit(f"a 1b no disco não é a da procedência: {g1b['arquivo']}")
VOZ, VOZ_JSON = "out/juneau-voz/narracao.wav", "out/juneau-voz/narracao.json"
voz = json.load(open(VOZ_JSON, encoding="utf-8"))
pausa = voz["pausas"]["paragrafo_s"]

def pcm(arq):
    bruto = subprocess.run(["ffmpeg", "-v", "error", "-i", arq, "-ac", "1", "-ar", str(TAXA), "-f", "f32le", "-"],
                           capture_output=True, check=True).stdout
    return np.frombuffer(bruto, dtype=np.float32).copy()

def lufs(arq):
    saida = subprocess.run(["ffmpeg", "-hide_banner", "-i", arq, "-af", "ebur128", "-f", "null", "-"],
                           capture_output=True, text=True).stderr
    return float(re.findall(r"I:\s+(-?[\d.]+) LUFS", saida)[-1])

def esmaecer(x, ini, fim, entra=0.005, sai=0.015):
    a, b = int(round(ini * TAXA)), min(len(x), int(round(fim * TAXA)))
    ne, ns = min(int(entra * TAXA), (b - a) // 2), min(int(sai * TAXA), (b - a) // 2)
    x[a:a + ne] *= np.linspace(0, 1, ne, dtype=np.float32)
    x[b - ns:b] *= np.linspace(1, 0, ns, dtype=np.float32)

b1, b23 = pcm(g1b["arquivo"]), pcm(VOZ)
ganho_db = lufs(VOZ) - lufs(g1b["arquivo"])
b1 *= np.float32(10 ** (ganho_db / 20))
limiar = 10 ** (-40 / 20)
som = np.nonzero(np.abs(b1) > limiar)[0]
folga = int(0.06 * TAXA)                                   # o começo mediano dos trechos da API (medido: 0,06 s)
corte_ini, corte_fim = max(0, som[0] - folga), min(len(b1), som[-1] + folga)
b1 = b1[corte_ini:corte_fim]
esmaecer(b1, 0, len(b1) / TAXA)
for s in voz["segmentos"]:
    if s["tipo"] == "fala":
        esmaecer(b23, s["start"], s["end"])
tudo = np.concatenate([b1, np.zeros(int(round(pausa * TAXA)), dtype=np.float32), b23])
pico = float(np.abs(tudo).max())
if pico >= 1.0:
    sys.exit(f"a montagem passaria do máximo (pico {pico:.3f}): baixe o ganho")
os.makedirs("out/juneau/_narracao", exist_ok=True)
wav, mp3 = "out/juneau/_narracao/narracao-completa.wav", "out/juneau/_narracao/narracao-completa-previa.mp3"
subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "f32le", "-ar", str(TAXA), "-ac", "1", "-i", "-", "-c:a", "pcm_s16le", wav],
               input=tudo.tobytes(), check=True)
subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", wav, "-c:a", "libmp3lame", "-b:a", "128k", mp3], check=True)
inicio_b2 = (len(b1) + int(round(pausa * TAXA))) / TAXA
manifesto = {
    "o_que": "narração inteira do Juneau, montada pelo canal",
    "gerado_por": "out/juneau/_pesquisa/montar-narracao.py",
    "saida": {"arquivo": wav, "sha256": sha(wav), "duracao_s": round(len(tudo) / TAXA, 3), "taxa": TAXA, "canais": 1,
              "lufs_integrado": lufs(wav), "pico": round(pico, 4)},
    "bloco_1": {"fonte": g1b["arquivo"], "history_item_id": g1b["history_item_id"], "sha256": g1b["sha256"],
                "ganho_db": round(ganho_db, 2), "corte_inicio_s": round(corte_ini / TAXA, 3), "corte_fim_s": round(corte_fim / TAXA, 3),
                "de_s": 0.0, "ate_s": round(len(b1) / TAXA, 3)},
    "pausa_entre_blocos_s": pausa,
    "blocos_2_e_3": {"fonte": VOZ, "sha256": sha(VOZ), "narracao_json_sha256": sha(VOZ_JSON), "de_s": round(inicio_b2, 3),
                     "trechos": sum(1 for s in voz["segmentos"] if s["tipo"] == "fala")},
    "esmaecimento": {"entrada_s": 0.005, "saida_s": 0.015, "onde": "começo e fim de cada trecho falado"},
}
json.dump(manifesto, open("out/juneau/_pesquisa/narracao-montagem.json", "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"✓ {wav}: {len(tudo) / TAXA / 60:.0f}:{len(tudo) / TAXA % 60:04.1f} · bloco 1 com {ganho_db:+.2f} dB · "
      f"blocos 2 e 3 a partir de {inicio_b2 / 60:.0f}:{inicio_b2 % 60:04.1f} · {manifesto['saida']['lufs_integrado']} LUFS · pico {pico:.3f}")
print(f"  prévia: {mp3}")
