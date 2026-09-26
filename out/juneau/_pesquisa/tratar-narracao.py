# Trata a narracao.wav que o narrar.mjs da pré-v1 montou, sem mudar nenhum tempo (26/09/2026).
#
# Por quê (verificação final do Juneau, narracao-conferencia.md):
#   - o narrar cola os trechos da API no silêncio digital da pausa sem esmaecer: 14 dos 36 fins de parágrafo
#     saltavam mais de 0,02 da última amostra para o zero (estalo), e 22 terminavam com a voz ainda soando;
#   - no fim de um parágrafo pode sobrar um som solto depois de um silêncio (no Juneau, 40 ms depois de "camp.",
#     em 0:53): é cortado seco e soa como estalo isolado.
# O que faz: esmaece 5 ms no começo e 15 ms no fim de cada trecho falado; zera o som solto (menos de 80 ms de som
# depois de pelo menos 200 ms abaixo de -60 dBFS, no fim do trecho); limita o true peak a -1 dBTP. Nada disso muda
# tempo: os trechos continuam onde o narrar os pôs. O script troca o audio.sha256 e registra o tratamento em
# "tratamento_canal".
#
# A cauda da tela final (26/09/2026, decisão do Lucas; canal.json › narracao.cauda_tela_final_s): depois de tudo,
# acrescenta N segundos de silêncio digital no FIM, para a tela final do YouTube (5 a 20 s) cair sobre o fecho e não
# sobre a última frase. O master do motor dura o que a narração dura, e o XML apara toda cena que passa do fim dela:
# sem a cauda na narração, não há onde pôr a cena do fecho. Só o fim cresce, nenhum trecho muda de lugar, e o
# narracao.json ganha o segmento {tipo: "pausa", motivo: "tela_final"} e a duração nova.
#
# ATENÇÃO: o narrar remonta a narracao.wav do cache a cada rodada (--refazer, troca de pausa): rode este script DE
# NOVO depois de qualquer narrar. Ele só trata o arquivo que o narrar acabou de gravar (o sha tem de bater com o do
# narracao.json sem tratamento_canal), e se recusa a tratar duas vezes.
#
#   python out/juneau/_pesquisa/tratar-narracao.py <proj>        (cwd = raiz do canal; ex.: juneau)
import hashlib, json, os, re, subprocess, sys, wave
from datetime import datetime, timezone

import numpy as np

for fluxo in (sys.stdout, sys.stderr):
    fluxo.reconfigure(encoding="utf-8", errors="replace")
proj = sys.argv[1]
arq_wav, arq_json = f"out/{proj}/narracao.wav", f"out/{proj}/narracao.json"
sha = lambda arq: hashlib.sha256(open(arq, "rb").read()).hexdigest()
meta = json.load(open(arq_json, encoding="utf-8"))
atual = sha(arq_wav)
if meta.get("tratamento_canal"):
    sys.exit(f"já tratada ({meta['tratamento_canal']['em']}); se o narrar rodou de novo, o narracao.json é novo e não teria esta marca")
if atual != meta["audio"]["sha256"]:
    sys.exit("a narracao.wav não é a que o narrar gravou (sha diferente do narracao.json): não trato um arquivo desconhecido")
cfg_narracao = json.load(open("canal.json", encoding="utf-8")).get("narracao", {})
cauda_s = cfg_narracao.get("cauda_tela_final_s", 0)
if not isinstance(cauda_s, (int, float)) or not 0 <= cauda_s <= 30:
    sys.exit(f"canal.json › narracao.cauda_tela_final_s tem de ser um número de 0 a 30 segundos (veio {cauda_s!r})")
if meta["segmentos"][-1]["tipo"] != "fala":
    sys.exit(f"o último segmento do narracao.json é {meta['segmentos'][-1]['tipo']!r}, não fala: a cauda iria depois de outra pausa")

with wave.open(arq_wav, "rb") as w:
    sr, n, params = w.getframerate(), w.getnframes(), w.getparams()
    x = np.frombuffer(w.readframes(n), dtype="<i2").astype(np.float64)
if params.nchannels != 1 or n != meta["audio"]["amostras"] or abs(meta["segmentos"][-1]["end"] - n / sr) > 1e-5:
    sys.exit(f"a narracao.wav ({params.nchannels} canal(is), {n} amostras) não bate com o narracao.json "
             f"({meta['audio']['amostras']} amostras, último segmento até {meta['segmentos'][-1]['end']} s)")
ENTRA, SAI, QUADRO = int(0.005 * sr), int(0.015 * sr), int(0.01 * sr)
soltos = []
for s in (s for s in meta["segmentos"] if s["tipo"] == "fala"):
    a, b = round(s["start"] * sr), round(s["end"] * sr)
    # som solto no fim: procura, nos últimos 0,6 s, um silêncio >= 200 ms seguido de < 80 ms de som até o fim
    ini = max(a, b - int(0.6 * sr))
    q = (b - ini) // QUADRO
    e = 10 * np.log10(np.mean((x[b - q * QUADRO:b].reshape(q, QUADRO) / 32768) ** 2, axis=1) + 1e-12)
    com_som = np.nonzero(e >= -60)[0]
    if len(com_som):
        k = com_som[-1]
        while k > 0 and e[k - 1] >= -60:
            k -= 1                                     # k = primeiro quadro do último bloco de som
        silencio_antes = 0
        while k - 1 - silencio_antes >= 0 and e[k - 1 - silencio_antes] < -60:
            silencio_antes += 1
        if (q - k) * QUADRO < 0.08 * sr and silencio_antes * QUADRO >= 0.2 * sr:
            z = b - (q - k) * QUADRO
            x[z:b] = 0
            soltos.append({"trecho": s["trecho"], "de_s": round(float(z / sr), 3), "ate_s": round(float(b / sr), 3)})
            b_fala = z
        else:
            b_fala = b
    else:
        b_fala = b
    x[a:a + ENTRA] *= np.linspace(0, 1, ENTRA)
    x[b_fala - SAI:b_fala] *= np.linspace(1, 0, SAI)

# Pico: a API entrega a voz com true peak perto de 0 dBTP (Juneau: −0,2). O teto de entrega é −1 dBTP; o master do
# motor copia o áudio da narração como está. Limitador leve (alimiter, sem ganho automático, com a latência
# compensada, então nada sai do lugar), apertado de 0,25 em 0,25 dB até o true peak medido ficar em −1 dBTP ou menos.
def grava(y, destino):
    with wave.open(destino, "wb") as w:
        w.setparams(params)
        w.writeframes(np.clip(np.round(y), -32768, 32767).astype("<i2").tobytes())

def medir(arq):
    saida = subprocess.run(["ffmpeg", "-hide_banner", "-i", arq, "-af", "ebur128=peak=true", "-f", "null", "-"],
                           capture_output=True, text=True).stderr
    return float(re.findall(r"I:\s+(-?[\d.]+) LUFS", saida)[-1]), float(re.findall(r"Peak:\s+(-?[\d.]+) dBFS", saida)[-1])

def limitar(y, teto_db):
    bruto = subprocess.run(["ffmpeg", "-v", "error", "-f", "f32le", "-ar", str(sr), "-ac", "1", "-i", "-",
                            "-af", f"alimiter=limit={10 ** (teto_db / 20):.6f}:attack=5:release=50:level=false:latency=true",
                            "-f", "f32le", "-"], input=(y / 32768).astype(np.float32).tobytes(), capture_output=True, check=True).stdout
    z = np.frombuffer(bruto, dtype=np.float32).astype(np.float64) * 32768
    if len(z) != len(y):
        sys.exit(f"o limitador mudou o comprimento ({len(y)} → {len(z)} amostras): não gravo")
    return z

tmp = arq_wav + ".tmp.wav"
grava(x, tmp)
lufs_antes, tp_antes = medir(tmp)
limitador = None
final = x
if tp_antes > -1.0:
    for teto in np.arange(-1.5, -4.01, -0.25):
        y = limitar(x, teto)
        grava(y, tmp)
        lufs_depois, tp_depois = medir(tmp)
        if tp_depois <= -1.0:
            limitador = {"filtro": "alimiter attack=5 release=50 level=false latency=true", "teto_amostra_dbfs": round(float(teto), 2),
                         "true_peak_antes": tp_antes, "true_peak_depois": tp_depois, "lufs_antes": lufs_antes, "lufs_depois": lufs_depois}
            final = y
            break
    else:
        os.remove(tmp); sys.exit("o limitador não trouxe o true peak a −1 dBTP nem com teto de −4 dBFS: confira o áudio")

# A cauda da tela final vem por último: silêncio digital depois da voz já medida e limitada.
cauda = None
if cauda_s > 0:
    final = np.concatenate([final, np.zeros(round(cauda_s * sr))])
    de_s, ate_s = round(n / sr, 6), round(len(final) / sr, 6)
    meta["segmentos"].append({"i": len(meta["segmentos"]), "tipo": "pausa", "start": de_s, "end": ate_s, "motivo": "tela_final"})
    meta["audio"]["amostras"] = len(final)
    meta["audio"]["duracaoSec"] = ate_s
    cauda = {"segundos": cauda_s, "de_s": de_s, "ate_s": ate_s, "config": "canal.json › narracao.cauda_tela_final_s",
             "por_que": "a tela final do YouTube (5 a 20 s) cai sobre o fecho, não sobre a última frase"}
    grava(final, tmp)
os.replace(tmp, arq_wav)
novo = sha(arq_wav)
meta["tratamento_canal"] = {
    "script": "out/juneau/_pesquisa/tratar-narracao.py", "em": datetime.now(timezone.utc).isoformat(timespec="seconds"),
    "sha256_do_narrar": atual, "esmaecimento": {"entrada_s": 0.005, "saida_s": 0.015},
    "sons_soltos_zerados": soltos,
    "limitador": limitador,
    "cauda_tela_final": cauda,
    "aviso": "o narrar remonta a narracao.wav a cada rodada: rode este script de novo depois de qualquer narrar",
}
meta["audio"]["sha256"] = novo
json.dump(meta, open(arq_json, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
txt_cauda = "%s s (%s → %s s)" % (cauda_s, cauda["de_s"], cauda["ate_s"]) if cauda else "nenhuma"
print(f"✓ {arq_wav}: {len(meta['segmentos'])} segmentos, {sum(1 for s in meta['segmentos'] if s['tipo'] == 'fala')} trechos esmaecidos; "
      f"sons soltos zerados: {soltos or 'nenhum'}; limitador: {limitador}; cauda: {txt_cauda}; sha {atual[:12]} → {novo[:12]}")
