# Monta a narração inteira do Juneau: o bloco 1 (versão 1b, gerada no site em 24/09 e baixada do histórico) e os
# blocos 2 e 3 (gerados pela API com o narrar.mjs da pré-v1 em 25/09, projeto out/juneau-voz/).
#
# Por que não é tudo do narrar: o bloco 1 do site saiu completo (1b) e o Lucas escolheu refazer só o 2 e o 3
# (25/09/2026). O que a montagem faz, e por quê:
#   - confere o sha256 da 1b contra a procedência (narracao-historico.json) e grava o da narração do narrar;
#   - iguala o volume do bloco 1 ao dos blocos 2 e 3 (medido em LUFS integrado, ebur128 do ffmpeg);
#   - corta o silêncio do fim da 1b (vinha com 1,8 s) e deixa na emenda o mesmo silêncio que se ouve entre os
#     parágrafos da API (medido, não a pausa_paragrafo_s crua);
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

QUADRO = int(0.01 * TAXA)                                  # silêncio medido em quadros de 10 ms abaixo de -45 dBFS,
def com_som(x):                                            # o critério do diagnóstico de 25/09 (narracao-conferencia.md)
    n = len(x) // QUADRO
    e = 10 * np.log10(np.mean(x[:n * QUADRO].reshape(n, QUADRO).astype(np.float64) ** 2, axis=1) + 1e-12)
    return np.nonzero(e >= -45)[0]

b1, b23 = pcm(g1b["arquivo"]), pcm(VOZ)
ganho_db = lufs(VOZ) - lufs(g1b["arquivo"])
b1 *= np.float32(10 ** (ganho_db / 20))
q1 = com_som(b1)
corte_ini, corte_fim = max(0, q1[0] * QUADRO - int(0.06 * TAXA)), (q1[-1] + 1) * QUADRO
b1 = b1[corte_ini:corte_fim]
esmaecer(b1, 0, len(b1) / TAXA)
# A emenda recebe a pausa que se OUVE entre os parágrafos da API (mediana das 22 fronteiras, medida igual), e não a
# pausa_paragrafo_s crua: cada trecho da API já traz uns 0,06 s de silêncio no começo. O Lucas ouviu em 25/09 que a
# pausa dobrada (0,28 s contra os 0,14 s da 1b) era o que mais trocava a voz.
falas = [s for s in voz["segmentos"] if s["tipo"] == "fala"]
q23 = com_som(b23) * QUADRO / TAXA
vaos = []
for a, b in zip(falas, falas[1:]):
    fim_a = q23[(q23 >= a["start"]) & (q23 < a["end"])].max() + 0.01
    ini_b = q23[(q23 >= b["start"]) & (q23 < b["end"])].min()
    vaos.append(ini_b - fim_a)
alvo = float(np.median(vaos))
cabeca_b23 = float(q23[0])
pausa = max(0.0, round(alvo - cabeca_b23, 3))
for s in falas:
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
    "silencio_entre_paragrafos_da_api_s": {"mediana": round(alvo, 3), "min": round(min(vaos), 3), "max": round(max(vaos), 3),
                                            "criterio": "quadros de 10 ms abaixo de -45 dBFS"},
    "blocos_2_e_3": {"fonte": VOZ, "sha256": sha(VOZ), "narracao_json_sha256": sha(VOZ_JSON), "de_s": round(inicio_b2, 3),
                     "trechos": sum(1 for s in voz["segmentos"] if s["tipo"] == "fala")},
    "esmaecimento": {"entrada_s": 0.005, "saida_s": 0.015, "onde": "começo e fim de cada trecho falado"},
}
json.dump(manifesto, open("out/juneau/_pesquisa/narracao-montagem.json", "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"✓ {wav}: {len(tudo) / TAXA / 60:.0f}:{len(tudo) / TAXA % 60:04.1f} · bloco 1 com {ganho_db:+.2f} dB · "
      f"emenda com {pausa + cabeca_b23:.2f} s de silêncio (API: {alvo:.2f} s) · blocos 2 e 3 a partir de {inicio_b2 / 60:.0f}:{inicio_b2 % 60:04.1f} · {manifesto['saida']['lufs_integrado']} LUFS · pico {pico:.3f}")
print(f"  prévia: {mp3}")
