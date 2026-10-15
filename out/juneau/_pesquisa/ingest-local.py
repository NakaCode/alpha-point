# INGEST do canal: a narração vira o relógio de palavras do vídeo (out/<proj>/words.json), sem gasto de crédito.
#
#   python out/<proj>/_pesquisa/ingest-local.py <proj> [--aceitar=3,7] [--aceitar-vaos=24.84,138.72]
#          [--aceite-por=...] [--aceite-como=...] [--aceite-evidencia=...]
#          [--sem-cobertura] [--refazer] [--saida=<pasta>] [--pre-v1=<clone>]
#   (cwd = raiz do canal)
#
#   --aceitar=N,M   aceita, DEPOIS DE CONFERIR NO SOM, os itens dos trechos N e M que o laudo ANTERIOR deste áudio (mesmo
#                   sha256) mostrava PENDENTES (cobertura suspeita, palavra pulada, bloco trocado, palavra a mais) e que
#                   esta rodada reproduz idênticos: é o que a pessoa leu. Um item que NASCE nesta rodada fica pendente,
#                   mesmo com o trecho na lista (vai para o laudo com aceite_recusado; rode de novo depois de conferir).
#                   Por isso o fluxo é: rodar, ler os pendentes no laudo, ouvir, rodar com --aceitar. O aceite é gravado
#                   ITEM A ITEM no laudo (trecho, tipo, roteiro, ouvido, índices dentro do trecho; quem aceitou, como, e
#                   o laudo em que o item estava pendente) e é herdado, sem --aceitar, pelo item IDÊNTICO do mesmo
#                   áudio: um item novo no mesmo trecho (outra transcrição, outra máquina, --refazer que ouviu
#                   diferente) fica pendente. A pré-v1 aceita por trecho porque o número de cobertura dela não muda com
#                   o mesmo áudio; aqui o ouvido pode mudar, então o aceite é do item.
#   --aceitar-vaos=24.84,138.72
#                   aceita, DEPOIS DE CONFERIR NO SOM, os vãos com voz acima de VAO_TETO_S SEM vale no som (portão
#                   relogio), cada um pelo INÍCIO do vão em segundos, com 2 casas (o número que a linha do portão e o
#                   laudo mostram em vaos_com_voz_fechados[].vao_s). A mesma disciplina do --aceitar: só aceita o vão
#                   que o laudo ANTERIOR deste áudio (mesmo sha256) mostrava PENDENTE e que esta rodada reproduz
#                   IDÊNTICO (o mesmo trecho, o mesmo par de palavras, o mesmo vão e o mesmo fechamento); um vão que
#                   nasce ou muda nesta rodada fica pendente (aceite_recusado). O aceite vai para o laudo, vão a vão
#                   (aceites_vaos: o vão, o fechamento, quem, como, a evidência e o laudo em que estava pendente), e é
#                   herdado, sem a opção, pelo vão idêntico do mesmo áudio. Pede --aceite-por e --aceite-como. O vão
#                   aceito sai "aceito" no portão, com o motivo, nunca "medido": a prova dele é a conferência de quem
#                   aceitou, por fora deste script.
#   --aceite-por=   quem aceitou (vai para o laudo; padrão "não informado"; obrigatório com --aceitar-vaos).
#   --aceite-como=  como foi conferido: "ouvido pelo Lucas", "Whisper em recorte curto + energia; sem escuta humana"...
#                   (vai para o laudo; padrão "não informado"; obrigatório com --aceitar-vaos).
#   --aceite-evidencia=  onde está a conferência (um relato, um laudo de cético); só para --aceitar-vaos, opcional.
#   --sem-cobertura aceita, ciente, um áudio cuja cobertura não dá para medir (registrado no laudo). Aqui ela só não dá
#                   para medir quando falta o narracao.json deste áudio, e então também não há texto aprovado nem
#                   trechos para montar o relógio: o laudo sai "nao_medido" e o aviso diz isso.
#   --refazer       ignora o cache da transcrição (out/<proj>/_narracao/whisper.json) e transcreve tudo de novo.
#   --saida=<pasta> grava words.json, transcript.txt e transcricao.json em outra pasta (testes); o padrão é out/<proj>/.
#
# Por que este caminho (CLAUDE.md, "Peças da pré-v1 em uso", item 3): o Scribe da pré-v1 é pago, e o faster-whisper
# desta máquina faz o mesmo papel. A verificação do Juneau (26/09/2026) mostrou que nenhuma fonte de tempo serve
# sozinha, e que elas erram em lugares diferentes:
#   - o Whisper local (large-v3) acerta as bordas quando elas são presas ao som, mas escolhe a palavra errada da
#     fronteira em algumas pausas sem pontuação (12 de 230 no Juneau: 0:28 "comes", 5:24 "wrote", 5:25 "finally"…) e
#     comprime os números ("law" 0,42 s cedo, "dollars" 0,5 s cedo), deixando vãos com voz entre palavras;
#   - o alinhamento por caractere que a ElevenLabs guarda no histórico acerta o miolo, os números e os nomes (viés de
#     −0,03 a −0,07 s), mas põe a pausa DENTRO da palavra seguinte (começo de frase 0,49 s cedo, na mediana) e, por ser
#     o alinhamento do texto ENVIADO, não prova o que a voz disse.
# Por isso o relógio é HÍBRIDO:
#   1. palavras e ordem: o TEXTO APROVADO (os "texto" dos trechos do narracao.json), com a pontuação colada;
#   2. tempo de base: o alinhamento da ElevenLabs (alinhamento-elevenlabs.mjs, ao lado), medindo só as LETRAS de cada
#      palavra, mais δ. O δ NÃO é constante: é medido a cada rodada, como a mediana de (começo do som − começo da 1ª
#      letra) nas pontas dos trechos, e gravado no laudo;
#   3. cada pausa de PAUSA_ANCORA_S ou mais (quadros de 10 ms abaixo de LIMIAR_SOM_DBFS) e as pontas de cada trecho
#      são presas ao som: a palavra antes da pausa termina onde o som acaba, a seguinte começa onde ele volta;
#   4. QUAL fronteira de palavra é cada pausa: duas opiniões independentes. A regra (sobre os tempos do Whisper, sem
#      constante nenhuma: pontuação final da anterior OU aspas/parêntese/travessão abrindo a seguinte; depois, a
#      palavra do Whisper que contém a maior parte da pausa; depois, a mais próxima) e a ElevenLabs (onde a linha do
#      tempo dela põe o MEIO da pausa: no vão entre duas palavras, ou dentro das letras de uma, na ponta mais perto).
#      Se discordam, ou se a pausa não tem pontuação nenhuma (onde as duas já erraram juntas), o OUVIDO decide: o
#      Whisper em recorte curto, 2 s antes e 2 s depois da pausa, diz a última palavra antes e a primeira depois (a
#      grafia do ouvido local para uma palavra de bloco trocado também vale: "Rae" ouvido como "Ray"). Se só um lado
#      bate, o outro tem de ser outra grafia da MESMA palavra ("fairies" × "ferries"); um pedaço de outra palavra
#      (o recorte terminou no meio dela e o Whisper a completou por expectativa) não confirma nada. Se o ouvido não
#      confirma, nada decide: nem o consenso das duas fontes sem pontuação, nem uma fonte só. Tudo fica no laudo, em
#      alinhamento.fronteiras_desempatadas; fronteira que nem o ouvido decide reprova o portão relogio.
#      Duas pausas que caem na MESMA fronteira não se juntam: o som entre elas ficaria sem palavra, então a segunda
#      fica indecidida (reprova) — uma delas é de dentro de uma palavra, e isso se confere no som;
#   5. dentro de cada corrida de fala entre âncoras, três consertos medidos no som: a palavra que a base punha do
#      outro lado da âncora ("deslocada": a ElevenLabs costuma pôr a primeira palavra da frase inteira dentro da
#      pausa) divide, pelas letras, o intervalo com a vizinha; um vão de mais de VAO_FECHAR_S com voz entre duas
#      palavras fecha no quadro mais quieto (cada vão fechado vai para o laudo, medido ANTES do fechamento), MENOS o
#      vão acima de VAO_TETO_S sem vale no som: ali o mais quieto costuma ser uma consoante de dentro de uma das
#      palavras (o /k/ de "American"), e o OUVIDO ESCOLHE a borda (julgar_vao_pelo_ouvido: o Whisper diz de qual
#      palavra é a voz do vão, e o vão fecha na borda do outro lado; se ele não escolhe, fecha no mais quieto, como
#      antes). O ouvido escolhe, mas NÃO PROVA: nos 22 vãos com vale do vídeo 3 ele deu o mesmo lado ("segunda") em
#      todos, esteja o vale onde estiver (o Whisper ouve cedo, e a v4 põe a 2ª palavra tarde: os dois vieses somam).
#      Por isso esse vão reprova o portão relogio até o aceite de quem conferiu no som (--aceitar-vaos).
#      A ElevenLabs v4 dá o tempo por palavra em passos de 0,04 s e espalha as letras por igual;
#      onde uma palavra emenda na outra sem corte no som ("an American", "or removed"), ela dá à 1ª um ou dois
#      passos e põe o resto no ESPAÇO, e a 2ª começa 0,28–0,40 s tarde (vídeo 3, 15/10/2026: 9 vãos, todos assim); uma
#      palavra quase toda em silêncio começa onde a voz volta (a base a punha sobre o fechamento da consoante final
#      da anterior: "backed the", "organized the");
#   6. o Whisper local, trecho a trecho, continua sendo o OUVIDO do conteúdo: cobertura com as palavras ouvidas,
#      palavras puladas pela voz, blocos trocados e palavras a mais. Cada um vai para o portão "conteudo", com a
#      prova recolhida no som (Whisper em recorte curto e energia), e só passa com --aceitar=N.
#
# O que isso deu no Juneau (26/09/2026, 1.836 palavras, 230 pausas): a regra e a ElevenLabs concordaram, com
# pontuação, em 216 pausas; o ouvido confirmou as 12 sem pontuação e desempatou as 2 discordâncias (43,73 e 574,26 s).
# As 12 pausas em que o construtor só-Whisper errava a palavra (11,30; 28,42; 307,89; 324,09; 325,53; 335,61; 406,86;
# 422,43; 481,88; 496,04; 570,88; 574,26) saem certas. Nos 18 casos que a verificação julgou pelo som (números, nomes,
# começos de frase), o erro ficou em ±0,10 s; nenhuma sobreposição e nenhuma palavra com 80 % ou mais em silêncio.
# O δ da base saiu +0,06 s; com δ de 0,03 a 0,06 s, o erro mediano contra os marcos de chiado fica entre 0,06 e
# 0,075 s: a escolha pesa pouco. Outro vídeo, outra voz ou outro modelo pedem conferir de novo (o laudo traz a medida).
# A 2ª verificação (26/09) mostrou portões que aprovavam por construção; as medidas que entraram no lugar deram, no
# Juneau: 36 segmentos fora das falas em silêncio (a tela_final com pico 0), 230 âncoras em silêncio, a maior corrida
# de som sem palavra 0,10 s, 42 vãos com voz fechados (os 2 acima de 0,25 s caem num vale de −71 e −92 dBFS) e, contra
# o Whisper, o maior desvio de uma palavra casada 0,64 s ("vote", t9: o Whisper comprime o número antes dela).
#
# Portões (words.json só é gravado com TODOS aprovados; reprovado, um words.json velho da pasta de saída é apagado,
# a regra da pré-v1: um relógio errado quebra tudo depois em silêncio):
#   palavras  o Whisper ouviu alguma coisa;
#   duracao   a duração do áudio de fato decodificado × a do WAV (0,5 s, como a pré-v1): prova que o arquivo lê
#             inteiro, NÃO que o Whisper ouviu tudo. Por isso o portão também exige que os segmentos do narracao.json
#             cubram o arquivo sem buraco: o Whisper recebe as falas, e o resto (pausas, tela_final, cards) é
#             medido no portão fora_das_falas. Nenhuma palavra ouvida depois do fim do WAV;
#   fora_das_falas  o que o Whisper não recebe é medido: nenhum quadro de 10 ms acima de LIMIAR_SOM_DBFS nas pausas
#             entre trechos, e a tela_final e os cards em silêncio digital (nenhuma amostra acima de 1 LSB). Som ali
#             reprova com o intervalo; o que o Whisper ouve nele vai para o laudo, para o transcript.txt e para a
#             cobertura (como na pré-v1, em que o transcritor ouve o arquivo inteiro e a fala da cauda cai no último
#             trecho);
#   idioma    detect_language em cada recorte (aqui reprova; na pré-v1 é só aviso);
#   cobertura a regra do medirCobertura da pré-v1, pela própria função dela em Node, com as palavras OUVIDAS (os
#             algarismos do Whisper contados como o roteiro os escreve: "1974" = nineteen seventy-four = 2);
#   conteudo  palavra do roteiro sem par no ouvido (a voz pulou), inteira ou em parte (um token de "seventy-four"
#             sem par) → reprova até o aceite; bloco trocado com 2 ou mais palavras do roteiro, ou cuja diferença
#             não é só de espaço/hífen (MESMO_SOM do comparar-narracao.py já foi aplicado antes), ou com token a
#             mais dentro de uma palavra ouvida ("443" por "forty-three") → reprova até o aceite; palavra ouvida a
#             mais (fora da costura de recortes) → reprova até o aceite. O aceite é por item (ver --aceitar);
#   relogio   o que vai para o disco. Garantido pela montagem (e conferido): tantas palavras quanto contarPalavras, em
#             ordem, start < end, sem sobreposição, dentro do som de cada trecho, nenhuma invadindo uma pausa-âncora,
#             nenhuma fronteira de pausa indecidida ou incoerente depois do ouvido. MEDIDO no som e no ouvido, fora da
#             montagem: cada pausa-âncora em silêncio (nenhum quadro com som); nenhuma corrida de mais de VAO_MAX_S de
#             som que nenhuma palavra cobre; cada vão com voz que a montagem fechou e passava de VAO_TETO_S cai num
#             vale do som (um quadro em silêncio, ou VALE_MIN_DB abaixo do mais alto do vão); e nenhuma palavra casada
#             a mais de CONCORDANCIA_MAX_S de onde o Whisper a ouviu (o Whisper erra até ~0,65 s nos números; mais que
#             isso é palavra no lugar de outra).
#             NÃO MEDIDO, ACEITO: o vão acima de VAO_TETO_S SEM vale no som. Nenhuma regra automática o aprova: nem o
#             quadro mais quieto, nem o ouvido. O ouvido só escolhe a borda em que ele fecha (lado_do_vao, nas duas
#             audições: o Whisper do recorte longo, com as duas palavras casadas 1 para 1, e o de um recorte curto de
#             OUVIDO_JANELA_S de cada lado do vão; as duas são o MESMO modelo, com o mesmo viés para cedo, e não provam
#             nada uma da outra). Esse vão reprova até o aceite vão a vão (--aceitar-vaos), de quem conferiu a borda no
#             som por fora do script (energia, marco acústico, escuta); aceito, sai "aceito" na linha do portão, com
#             quem e como, separado do que foi medido.
#
# A transcrição é o passo caro (uns 11 min no processador para 11 min de áudio). O cache, out/<proj>/_narracao/
# whisper.json (fora do git), é chaveado pelo que realmente importa: o sha256 das AMOSTRAS de 16 kHz que o Whisper
# recebeu em cada recorte, mais o pedido ao Whisper. Trocar a cauda da narração, o tratamento de um trecho ou o sha do
# arquivo inteiro não invalida os recortes cujas amostras não mudaram; mudar uma amostra de um recorte, sim.
#
# Entrada: out/<proj>/narracao.wav e out/<proj>/narracao.json (o que o narrar.mjs da pré-v1 grava e o
# tratar-narracao.py do canal trata sem mudar tempo nenhum), out/<proj>/_narracao/elevenlabs/alinhamento-elevenlabs.json
# (se faltar ou não bater com os trechos, este script roda o alinhamento-elevenlabs.mjs --cache, sem rede).
# Saídas, no contrato do transcrever.mjs da pré-v1:
#   words.json       [{w,start,end}] em segundos, 3 casas, JSON compacto; w = a palavra do texto aprovado (a cópia
#                    para a voz: números por extenso e aliases de pronúncia; algarismo e grafia de tela não entram);
#   transcript.txt   o texto que o Whisper local OUVIU, recorte a recorte, na ordem do áudio e na grafia dele ("27,",
#                    "K2"), como o texto corrido do Scribe na pré-v1: é o que se lê para entender uma reprovação.
#                    Sempre sai quando houve transcrição;
#   transcricao.json o laudo (schemaVersion 1, portões, cobertura por trecho, aceitos...), mais fonte_das_palavras,
#                    alinhamento (fronteiras, conteúdo, qualidade) e ferramenta;
#   _narracao/whisper.json a transcrição crua (recortes e recortes curtos do ouvido) e, por palavra, de onde veio o
#                    tempo (auditoria).
#
# Precisa de: numpy, faster_whisper (large-v3 já no cache local do Hugging Face), ffmpeg no PATH, node (medirCobertura
# da pré-v1 e o alinhamento da ElevenLabs). Importa tokens()/verbalizar()/MESMO_SOM de comparar-narracao.py (ao lado
# deste script, ou em out/<proj>/_pesquisa/).
# Rede: nenhuma. O modelo carrega do cache local (HF_HUB_OFFLINE=1 e o caminho do snapshot; sem ele, PARADO). Se o
# alinhamento da ElevenLabs falta, este script chama o alinhamento-elevenlabs.mjs com --cache (sem rede); buscá-lo no
# histórico da ElevenLabs (só GET, sem gasto) é um passo à parte, que o laudo pede quando precisa.
import hashlib, importlib.util, json, os, re, subprocess, sys, time, wave
# Nada de rede. Carregar o modelo pelo NOME ("large-v3") chama o snapshot_download do huggingface_hub, que pergunta a
# huggingface.co qual é a revisão da branch main a cada carga (e, se ela mudou, baixa a nova em silêncio, enquanto o
# laudo registraria a antiga). Aqui o modelo sai só do cache local, pelo caminho do snapshot (modelo(), no main), e
# esta variável fecha a porta para qualquer outra chamada do huggingface_hub. Tem de vir antes de importá-lo.
os.environ["HF_HUB_OFFLINE"] = "1"
from datetime import datetime, timezone
from difflib import SequenceMatcher
from pathlib import Path

import numpy as np

# ── parâmetros fixos (a decisão do canal; mudar qualquer um muda o pedido registrado no laudo) ──────────────────────
MODELO = "large-v3"
TAXA_WHISPER = 16000
RECORTE_MAX_S = 28.0         # acima disso o trecho é cortado em dois (a janela do Whisper é de 30 s)
LIMIAR_SOM_DBFS = -45.0      # quadro de 10 ms acima disso tem som
PAUSA_MIN_CORTE_S = 0.15     # silêncio interno mínimo para servir de ponto de corte
PAUSA_ANCORA_S = 0.15        # silêncio interno que vira âncora do relógio
DUR_MIN_PALAVRA_S = 0.02     # piso de duração de uma palavra no relógio
DUR_CURTA_S = 0.05           # palavra que a âncora deixou mais curta que isso (e com menos da metade da duração da base) foi deslocada
VAO_MAX_S = 0.15             # portão: nenhuma corrida de som maior que isso sem palavra que a cubra
VAO_FECHAR_S = 0.10          # vão com voz maior que isso se fecha: no quadro mais quieto, ou na borda que o ouvido escolhe (abaixo)
VAO_TETO_S = 0.25            # portão: vão com voz fechado acima disso só passa se o fechamento cair num vale do som, ou com aceite (--aceitar-vaos)
VALE_MIN_DB = 20.0           # ... vale = um quadro em silêncio, ou o mais quieto VALE_MIN_DB abaixo do mais alto do vão
VAO_OUVIDO_FOLGA_S = 0.05    # vão acima do teto SEM vale: o ouvido ESCOLHE a borda (não prova: o portão pede o aceite) se,
                             # nas DUAS audições, a fronteira entre as duas palavras cai até isto para dentro do vão, a
                             # partir da borda dele. É só a granularidade (um passo do Whisper, 0,02 s, mais um da v4,
                             # 0,04 s); o viés do Whisper para cedo (0,20 s na mediana do vídeo 3) não entra aqui: ele
                             # empurra a fronteira ouvida para FORA do vão, e quem a limita desse lado é o ALCANCE
VAO_OUVIDO_ALCANCE_S = 0.35  # ... e a fronteira ouvida fica no máximo isto FORA do vão, do lado de dentro da palavra que
                             # fica com as letras da ElevenLabs (o p90 do adiantamento do Whisper no vídeo 3: 0,35 s nos
                             # inícios de palavra casada). Mais longe que isso, o ouvido pôs a palavra noutro lugar e
                             # não escolhe (o vão fecha no quadro mais quieto, e o portão pede o aceite do mesmo jeito)
CONCORDANCIA_MAX_S = 1.0     # portão: palavra casada a mais disso de onde o Whisper a ouviu é palavra no lugar de outra
SOBRE_ACEITOS = ("aceitos: os trechos cuja cobertura fora de 0,9..1,1 foi aceita (o sentido da pré-v1, que o transcrever.mjs "
                 "herda por trecho); aceites: cada item aceito um a um (cobertura ou conteúdo), com quem aceitou e como")
GRAFIA_PERTO = 0.6           # "ouvido (um lado)": o lado que não bateu tem de ser grafia parecida (SequenceMatcher)
SILENCIO_DIGITAL_LSB = 1     # tela_final e card: nenhuma amostra acima disso (em passos de 16 bits)
OUVIR_FORA_MIN_S = 0.2       # som fora das falas mais curto que isso não vai ao ouvido (o Whisper inventa em estalo)
VOZ_NO_VAO = 0.5             # fração de quadros com som para um vão "ter voz"
SILENCIO_PALAVRA = 0.8       # palavra com essa fração de quadros em silêncio vai para o aviso
OUVIDO_JANELA_S = 2.0        # recorte curto do ouvido: 2 s antes e 2 s depois da pausa
PROVA_MARGEM_S = 1.0         # recorte curto da prova de conteúdo: 1 s de cada lado do bloco
TOLERANCIA_DURACAO_S = 0.5   # a da pré-v1
COBERTURA_MIN, COBERTURA_MAX = 0.9, 1.1
DELTA_EL_FAIXA = (-0.2, 0.2) # δ medido fora disso = algo errado com o alinhamento ou com o áudio
PONTUACAO_FINAL = re.compile(r"""[,.;:?!\u2014\u2013"\u201d)]$""")
ABRE = re.compile(r"""^["\u201c(\u2014\u2013]""")

C = None                     # o módulo comparar-narracao.py, carregado por carregar_comparar()

def carregar_comparar(proj, aqui=None):
    """comparar-narracao.py: as regras de normalização do canal (números, siglas, grafias do transcritor)."""
    global C
    aqui = Path(aqui or Path(__file__).resolve().parent)
    for cand in (aqui / "comparar-narracao.py", Path("out") / proj / "_pesquisa" / "comparar-narracao.py"):
        if cand.exists():
            spec = importlib.util.spec_from_file_location("comparar", cand)
            C = importlib.util.module_from_spec(spec); spec.loader.exec_module(C)
            return cand
    raise SystemExit(f"não achei comparar-narracao.py (ao lado deste script, ou em out/{proj}/_pesquisa/)")

def sha256_arquivo(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for bloco in iter(lambda: f.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()

def rel(p):
    """Caminho relativo à raiz do canal; o absoluto, com barras, quando o arquivo está fora dela."""
    try:
        r = os.path.relpath(p)
    except ValueError:                                  # outro disco, no Windows
        r = ".."
    return (str(Path(p).resolve()) if r.startswith("..") else r).replace("\\", "/")

def gravar(p, texto):
    p = Path(p); tmp = p.with_name(p.name + ".parcial"); tmp.write_text(texto, encoding="utf-8"); os.replace(tmp, p)

r3 = lambda v: round(float(v), 3)

# ── o som: energia em quadros de 10 ms ──────────────────────────────────────────────────────────────────────────────
class Som:
    """A narracao.wav em quadros de 10 ms (dBFS RMS). O quadro k cobre [k/100, (k+1)/100) s."""
    def __init__(self, x, sr):
        self.sr, self.quadro = sr, sr // 100
        q = len(x) // self.quadro
        self.db = 10 * np.log10(np.mean(x[:q * self.quadro].reshape(q, self.quadro) ** 2, axis=1) + 1e-12)
        self.x = x

    def quadros(self, t0, t1):
        a, b = max(0, int(round(t0 * 100))), min(len(self.db), int(round(t1 * 100)))
        return a, self.db[a:b] if b > a else np.zeros(0)

    def fracao_som(self, t0, t1):
        """Fração dos quadros entre t0 e t1 com som (acima do limiar). Quadro parcial conta pelo que cobre."""
        if t1 <= t0: return 0.0
        k0, k1 = int(np.floor(t0 * 100)), int(np.ceil(t1 * 100))
        tot = com = 0.0
        for k in range(max(0, k0), min(len(self.db), k1)):
            cobre = min(t1, (k + 1) / 100) - max(t0, k / 100)
            if cobre <= 0: continue
            tot += cobre; com += cobre if self.db[k] > LIMIAR_SOM_DBFS else 0
        return com / tot if tot else 0.0

    def volta_do_som(self, t0, t1):
        """Onde o som volta depois do ÚLTIMO silêncio que começa entre t0 e t1 (quadros inteiros); None se não há."""
        k0, k1 = int(np.ceil(t0 * 100 - 1e-9)), int(np.floor(t1 * 100 + 1e-9))
        sil = [k for k in range(k0, min(k1, len(self.db))) if self.db[k] <= LIMIAR_SOM_DBFS]
        if not sil: return None
        k = sil[-1] + 1
        return k / 100 if k < k1 and self.db[k] > LIMIAR_SOM_DBFS else None

    def mais_quieto(self, t0, t1):
        """Meio do quadro de 10 ms mais quieto inteiramente entre t0 e t1 (ou o meio do intervalo)."""
        k0, k1 = int(np.ceil(t0 * 100 - 1e-9)), int(np.floor(t1 * 100 + 1e-9))
        if k1 <= k0: return (t0 + t1) / 2
        k = k0 + int(np.argmin(self.db[k0:k1]))
        return (k + 0.5) / 100

    def faixa_db(self, t0, t1):
        """(mais quieto, mais alto) dos quadros inteiramente entre t0 e t1 (os mesmos que mais_quieto olha)."""
        k0, k1 = int(np.ceil(t0 * 100 - 1e-9)), int(np.floor(t1 * 100 + 1e-9))
        if k1 <= k0:
            k = min(len(self.db) - 1, max(0, int((t0 + t1) / 2 * 100)))
            return float(self.db[k]), float(self.db[k])
        e = self.db[k0:k1]
        return float(e.min()), float(e.max())

    def corridas_com_som(self, t0, t1, coberto=None):
        """Corridas de quadros com som entre t0 e t1 (tempos em quadros inteiros), como [(ini, fim)] em segundos.
        coberto: fração de cada quadro coberta por palavra (mesmo tamanho); quadro com metade ou mais coberta não conta."""
        k0, k1 = int(round(t0 * 100)), int(round(t1 * 100))
        m = self.db[k0:k1] > LIMIAR_SOM_DBFS
        if coberto is not None: m = m & (coberto < 0.5)
        out, k = [], 0
        while k < len(m):
            if m[k]:
                j = k
                while j < len(m) and m[j]: j += 1
                out.append(((k0 + k) / 100, (k0 + j) / 100)); k = j
            else:
                k += 1
        return out

def silencios(e, limiar=LIMIAR_SOM_DBFS):
    """Corridas de quadros abaixo do limiar, como (primeiro, depois_do_último), entre o primeiro e o último som."""
    com_som = np.nonzero(e > limiar)[0]
    if not len(com_som): return []
    out, k = [], com_som[0]
    while k <= com_som[-1]:
        if e[k] <= limiar:
            j = k
            while j < len(e) and e[j] <= limiar: j += 1
            out.append((k, j)); k = j
        else:
            k += 1
    return out

def recortar(som, a, b, avisos):
    """[a, b) em quadros de 10 ms desde o começo do áudio → lista de recortes de até RECORTE_MAX_S, cortados no silêncio
    mais longo perto do meio. Se nenhum silêncio serve, corta no quadro mais quieto e AVISA (pode partir uma palavra)."""
    if (b - a) / 100 <= RECORTE_MAX_S: return [(a, b)]
    e = som.db[a:b]
    corridas = [(r0, r1) for r0, r1 in silencios(e) if (r1 - r0) / 100 >= PAUSA_MIN_CORTE_S]
    meio, dur, corte = (b - a) / 2, b - a, None
    for faixa in (0.15, 0.25, 0.35):                   # perto do meio: ±15 % da duração, depois ±25 %, ±35 %
        cands = [(r1 - r0, -abs((r0 + r1) / 2 - meio), (r0 + r1) // 2) for r0, r1 in corridas
                 if abs((r0 + r1) / 2 - meio) <= faixa * dur]
        if cands:
            corte = a + int(max(cands)[2]); break
    if corte is None:                                   # nenhum silêncio: o quadro mais quieto do terço do meio
        i0, i1 = int(dur / 3), int(2 * dur / 3)
        corte = a + i0 + int(np.argmin(e[i0:i1]))
        avisos.append(f"recorte em {corte / 100:.2f} s fora de silêncio (nenhuma pausa de {PAUSA_MIN_CORTE_S} s perto do meio "
                      f"de {a / 100:.2f}–{b / 100:.2f} s): o corte pode partir uma palavra; confira esse ponto")
    return recortar(som, a, corte, avisos) + recortar(som, corte, b, avisos)

def pausas_internas(som, lo, hi):
    """Silêncios de PAUSA_ANCORA_S ou mais estritamente entre o primeiro (lo) e o último (hi) som do trecho."""
    a, e = som.quadros(lo, hi)
    out, k = [], 0
    while k < len(e):
        if e[k] <= LIMIAR_SOM_DBFS:
            j = k
            while j < len(e) and e[j] <= LIMIAR_SOM_DBFS: j += 1
            if (j - k) / 100 >= PAUSA_ANCORA_S and j < len(e) and k > 0: out.append(((a + k) / 100, (a + j) / 100))
            k = j
        else:
            k += 1
    return out

# ── os tokens: roteiro e Whisper na mesma forma normalizada ──────────────────────────────────────────────────────────
DEZENAS = set("twenty thirty forty fifty sixty seventy eighty ninety".split())
UNIDADES = set("one two three four five six seven eight nine first second third fourth fifth sixth seventh eighth ninth".split())
canon = lambda t: C.MESMO_SOM.get(t, t)               # grafias do transcritor que soam igual, nos DOIS lados

def tokens_palavra(p):
    return [canon(t) for t in C.tokens(p)]

def como_o_roteiro(falado):
    """Um número por extenso, em palavras como o roteiro as escreve (AP): 'seventy four' → 'seventy-four'."""
    p, out, k = falado.split(), [], 0
    while k < len(p):
        if k + 1 < len(p) and (p[k] in DEZENAS or p[k] == "oh") and p[k + 1] in UNIDADES:
            out.append(p[k] + "-" + p[k + 1]); k += 2
        else:
            out.append(p[k]); k += 1
    return out

def unidades_whisper(words):
    """Palavras do Whisper → unidades {w, start, end, idx, tokens, ouvidas}. Um número partido ("$2" + ".8") vira uma
    unidade; "$966" + "million" também (o verbalizar consome a escala). As regras são as de tokens_com_tempo()."""
    juntas = []
    for k, w in enumerate(words):
        if juntas and re.match(r"\s*[.\-]\d", w["w"]) and re.search(r"\d\s*$", juntas[-1]["w"]):
            j = juntas[-1]
            juntas[-1] = {**j, "w": j["w"].rstrip() + w["w"].strip(), "end": w["end"], "idx": j["idx"] + [k]}
        else:
            juntas.append({**w, "idx": [k]})
    out, i = [], 0
    while i < len(juntas):
        w = juntas[i]; seg = juntas[i + 1]["w"] if i + 1 < len(juntas) else ""
        texto, consumiu, falado = w["w"], False, None
        if i and texto.strip(" .,;:") in ("II", "III", "IV") and juntas[i - 1]["w"].strip(" .,").lower() == "war":
            texto = C.ROMANOS[texto.strip(" .,;:").lower()]
        if re.search(r"\d", texto):
            v, consumiu = C.verbalizar(texto.lower(), seg)
            if v: texto = falado = v
        fim = juntas[i + 1] if consumiu else w
        out.append({"w": w["w"] + (" " + fim["w"] if consumiu else ""), "start": w["start"], "end": fim["end"],
                    "idx": w["idx"] + (fim["idx"] if consumiu else []),
                    "tokens": [canon(t) for t in C.tokens(texto)],
                    "ouvidas": como_o_roteiro(falado) if falado else [w["w"]] * len(w["idx"]),
                    "falado": falado})
        i += 2 if consumiu else 1
    return out

# ── o ouvido: texto aprovado × palavras do Whisper ───────────────────────────────────────────────────────────────────
letras = lambda w: max(1, sum(ch.isalnum() for ch in w))

def repartir(palavras, ini, fim):
    """Reparte [ini, fim] entre as palavras, proporcional ao número de letras de cada uma."""
    pesos = np.cumsum([0] + [letras(p) for p in palavras]) / sum(letras(p) for p in palavras)
    return [(ini + (fim - ini) * pesos[k], ini + (fim - ini) * pesos[k + 1]) for k in range(len(palavras))]

def alinhar(palavras, unidades, lo, hi):
    """palavras: as do roteiro (split por espaço). unidades: as do Whisper, em tempo absoluto. [lo, hi]: o som do trecho.
    Devolve (res, ecos, blocos). res[j] = {w, start, end (tempo do Whisper), fonte, ouvido}; fonte: casada (1 para 1),
    repartida (um "1974" cobre duas palavras do roteiro), trocada (bloco com grafia diferente), interpolada (sem par
    no ouvido: a voz pode ter pulado). ecos: unidades do Whisper sem par. blocos: os trocados, com os índices."""
    ref = [(canon(t), j) for j, p in enumerate(palavras) for t in C.tokens(p)]
    hip = [(t, u) for u, un in enumerate(unidades) for t in un["tokens"]]
    pai = {}                                            # union-find sobre ("p", j) e ("u", u)
    def raiz(n):
        pai.setdefault(n, n)
        while pai[n] != n:
            pai[n] = pai[pai[n]]; n = pai[n]
        return n
    def unir(a, b): pai[raiz(a)] = raiz(b)
    trocada = set()
    sem_par_p, a_mais_u = {}, {}                        # tokens sem par: do roteiro (op delete) e do ouvido (op insert)
    sm = SequenceMatcher(None, [t for t, _ in ref], [t for t, _ in hip], autojunk=False)
    for op, a0, a1, b0, b1 in sm.get_opcodes():
        if op == "equal":
            for k in range(a1 - a0): unir(("p", ref[a0 + k][1]), ("u", hip[b0 + k][1]))
        elif op == "replace":
            nos = [("p", ref[k][1]) for k in range(a0, a1)] + [("u", hip[k][1]) for k in range(b0, b1)]
            for n in nos[1:]: unir(nos[0], n)
            trocada.update(ref[k][1] for k in range(a0, a1))
        elif op == "delete":
            for k in range(a0, a1): sem_par_p.setdefault(ref[k][1], []).append(ref[k][0])
        elif op == "insert":
            for k in range(b0, b1): a_mais_u.setdefault(hip[k][1], []).append(hip[k][0])
    # Uma palavra do roteiro com PARTE dos tokens sem par ("seventy-four" ouvido "1970": o "four" sumiu) casou pelo
    # resto: sem esta marca ela sairia "casada" e ninguém veria o pulo. Idem para uma unidade ouvida com token a mais
    # ("443" por "forty-three": "four hundred" sobra). As duas viram bloco trocado. (Palavra ou unidade SEM nenhum
    # token casado já é interpolada ou eco, abaixo.)
    for j in sem_par_p:
        if ("p", j) in pai: trocada.add(j)
    for u in a_mais_u:
        if ("u", u) in pai:
            for n in list(pai):
                if n[0] == "p" and raiz(n) == raiz(("u", u)): trocada.add(n[1])
    grupos = {}
    for n in list(pai):
        grupos.setdefault(raiz(n), {"p": set(), "u": set()})[n[0]].add(n[1])
    res = [{"w": p, "start": None, "end": None, "fonte": None, "ouvido": None} for p in palavras]
    usadas, blocos = set(), []
    for g in sorted(grupos.values(), key=lambda g: min(g["p"] | {10 ** 9})):
        if not g["p"] or not g["u"]: continue
        js, us = sorted(g["p"]), sorted(g["u"])
        usadas.update(us)
        ini, fim = min(unidades[u]["start"] for u in us), max(unidades[u]["end"] for u in us)
        ouvido = " ".join(unidades[u]["w"] for u in us)
        troca = any(j in trocada for j in js)
        if len(js) == len(us):
            tempos = [(unidades[u]["start"], unidades[u]["end"]) for u in us]
        else:
            tempos = repartir([palavras[j] for j in js], ini, fim)
        fonte = "trocada" if troca else ("casada" if len(js) == 1 else "repartida")
        for j, (s, e) in zip(js, tempos):
            res[j].update(start=s, end=e, fonte=fonte, ouvido=ouvido)
        if troca:
            b = {"js": js, "roteiro": " ".join(palavras[j] for j in js), "ouvido": ouvido}
            sp = [t for j in js for t in sem_par_p.get(j, [])]
            am = [t for u in us for t in a_mais_u.get(u, [])]
            if sp: b["tokens_do_roteiro_sem_par"] = sp
            if am: b["tokens_ouvidos_a_mais"] = am
            blocos.append(b)
    ecos = [{"u": u, "w": unidades[u]["w"], "start": unidades[u]["start"], "end": unidades[u]["end"]}
            for u in range(len(unidades)) if u not in usadas]
    # palavras sem par: interpoladas entre as vizinhas (e, sem folga, repartindo com elas) — só para a regra de fronteira
    j = 0
    while j < len(res):
        if res[j]["start"] is not None: j += 1; continue
        k = j
        while k < len(res) and res[k]["start"] is None: k += 1
        esq = res[j - 1]["end"] if j else lo
        dir_ = res[k]["start"] if k < len(res) else hi
        a, b = j, k
        if dir_ - esq < 0.05 * (k - j):
            if j: a = j - 1; esq = res[j - 1]["start"]
            if k < len(res): b = k + 1; dir_ = res[k]["end"]
        for m, (s, e) in zip(range(a, b), repartir([r["w"] for r in res[a:b]], esq, dir_)):
            res[m]["start"], res[m]["end"] = s, e
            if res[m]["fonte"] is None: res[m]["fonte"] = "interpolada"
        j = k
    return res, ecos, blocos

def mesmas_letras(a, b):
    """Diferença só de espaço, hífen, apóstrofo ou pontuação ("icefield" × "ice field")."""
    so = lambda s: re.sub(r"[^a-z0-9]", "", " ".join(C.tokens(s)))
    return so(a) == so(b) and so(a) != ""

# ── fronteiras de pausa: a regra (Whisper), a ElevenLabs e o ouvido ─────────────────────────────────────────────────
def tem_pista(palavras, i):
    """A pausa entre i e i+1 tem pontuação que a explica: final na anterior ou aspas/parêntese/travessão abrindo a seguinte."""
    return bool(PONTUACAO_FINAL.search(palavras[i]) or ABRE.search(palavras[i + 1]))

def fronteira_regra(res, palavras, p):
    """A fronteira (i: a pausa fica entre as palavras i e i+1) que os tempos do Whisper e o texto indicam. Candidatas:
    as fronteiras que o Whisper põe até 0,6 s antes e 0,15 s depois da pausa. Vale, nesta ordem: a que tem pista de
    pontuação; a em que a palavra de DEPOIS contém a maior parte da pausa (o Whisper põe a pausa dentro dela); a mais
    próxima. None: nenhuma fronteira de palavra perto (a pausa é de dentro de uma palavra)."""
    n = len(res)
    cands = [i for i in range(n - 1)
             if p[0] - 0.6 <= res[i + 1]["start"] <= p[1] + 0.15 or p[0] - 0.6 <= res[i]["end"] <= p[1] + 0.15]
    if not cands: return None
    def distancia(i):
        b0, b1 = sorted((res[i]["end"], res[i + 1]["start"]))
        return max(0.0, b0 - p[1], p[0] - b1)
    def cobre(i):
        s, e = res[i + 1]["start"], res[i + 1]["end"]
        return max(0.0, min(e, p[1]) - max(s, p[0])) / (p[1] - p[0])
    return min(cands, key=lambda i: (not tem_pista(palavras, i), -round(cobre(i), 1), distancia(i)))

def fronteira_el(el, p):
    """A fronteira que o alinhamento da ElevenLabs indica: onde a linha do tempo dela põe o MEIO da pausa. No vão entre
    as letras de duas palavras (a pontuação e o espaço), é essa fronteira; dentro das letras de uma palavra, a ponta
    mais perto (depois de ponto, ela estica a primeira letra da palavra seguinte). None: fora do trecho."""
    m = (p[0] + p[1]) / 2
    for k, (s, e) in enumerate(el):
        if s <= m < e:
            b = k - 1 if m - s < e - m else k
            return b if 0 <= b < len(el) - 1 else None
        if k + 1 < len(el) and e <= m < el[k + 1][0]:
            return k
    return None

def tokens_da_ponta(tp, alt, j, passo):
    """Os tokens aceitos na ponta da palavra j (passo −1: o último; +1: o primeiro), andando até achar palavra com
    token: o do roteiro e, se o ouvido local grafou a palavra de outro jeito (bloco trocado: "Rae" × "Ray"), o dele."""
    while 0 <= j < len(tp):
        if tp[j]: return {tp[j][-1] if passo < 0 else tp[j][0]} | ({alt[j]} if j in alt else set())
        j += passo
    return set()

def tokens_ouvidos(palavras_ouvidas):
    return [t for un in unidades_whisper(palavras_ouvidas) for t in un["tokens"]]

def grafia_perto(a, b):
    """Dois tokens que podem ser o mesmo som grafado de outro jeito pelo transcritor ("fairies" × "ferries")."""
    return bool(a) and bool(b) and SequenceMatcher(None, a, b, autojunk=False).ratio() >= GRAFIA_PERTO

def julgar_pelo_ouvido(tp, propostas, antes, depois, n, alt_ult=None, alt_pri=None):
    """tp: tokens de cada palavra do trecho. propostas: fronteiras sugeridas (regra, ElevenLabs). antes/depois: tokens
    ouvidos nos recortes curtos. alt_ult/alt_pri: a grafia do ouvido local para as pontas de blocos trocados. Nota de
    uma fronteira b: +1 se o último token ouvido antes da pausa é o último de b, +1 se o primeiro ouvido depois é o
    primeiro de b+1. Devolve (fronteira ou None, como, notas)."""
    ua, pd = (antes[-1] if antes else None), (depois[0] if depois else None)
    viz = sorted({b + d for b in propostas for d in (-2, -1, 0, 1, 2) if 0 <= b + d <= n - 2})
    nota = {b: int(ua in tokens_da_ponta(tp, alt_ult or {}, b, -1)) + int(pd in tokens_da_ponta(tp, alt_pri or {}, b + 1, 1))
            for b in viz}
    melhor = max(nota.values()) if nota else 0
    com_2 = [b for b in viz if nota[b] == 2]
    if len(com_2) == 1:
        b = com_2[0]
        return b, ("ouvido" if b in propostas else "ouvido corrigiu as duas fontes"), nota
    if not com_2 and melhor == 1:
        um = sorted({b for b in propostas if nota[b] == 1})
        if len(um) == 1 and not any(nota[b] == 1 for b in viz if b not in propostas):
            b = um[0]
            # o lado que não bateu só pode ser OUTRA GRAFIA da palavra esperada ("fairies" por "ferries"). Um pedaço
            # de outra palavra não serve: se o recorte de antes terminou no meio de uma palavra, o Whisper a completa
            # por expectativa ("time-consuming") e o de depois ouve o resto ("assuming") — um lado "bate" e o outro
            # denuncia que a pausa é de DENTRO da palavra.
            if ua in tokens_da_ponta(tp, alt_ult or {}, b, -1):
                lado, ouviu, esperado = "depois", pd, tokens_da_ponta(tp, alt_pri or {}, b + 1, 1)
            else:
                lado, ouviu, esperado = "antes", ua, tokens_da_ponta(tp, alt_ult or {}, b, -1)
            if any(grafia_perto(ouviu, e) for e in esperado):
                return b, f"ouvido (um lado; o de {lado} ouviu \"{ouviu}\" por \"{'/'.join(sorted(esperado))}\", grafia parecida)", nota
            return None, (f"indecidido: o ouvido bate de um lado só, e o de {lado} ouviu \"{ouviu}\", que não é grafia de "
                          f"\"{'/'.join(sorted(esperado))}\" (a pausa pode ser de dentro de uma palavra)"), nota
    # Sem confirmação do ouvido, nada decide. Nem o consenso das duas fontes: o ouvido só é chamado quando falta a
    # pontuação (onde a regra e a ElevenLabs já erraram JUNTAS) ou quando elas discordam. Nem uma fonte só. Uma prova
    # pior não pode dar veredito melhor que a do "um lado" acima: fica indecidido, e o portão relogio reprova.
    if len(set(propostas)) == 1:
        motivo = ("o ouvido não confirmou o consenso da regra e da ElevenLabs" if len(propostas) == 2
                  else "o ouvido não confirmou a única fonte que propôs fronteira")
    else:
        motivo = "o ouvido não desempatou a regra e a ElevenLabs"
    ponta = lambda b: f"{tp[b][-1] if tp[b] else '?'} | {tp[b + 1][0] if tp[b + 1] else '?'}"
    outra = [ponta(b) for b in sorted(viz) if b not in propostas and nota[b] >= 1]
    return None, (f"indecidido: {motivo} (ouviu \"{ua or ''}\" antes e \"{pd or ''}\" depois"
                  + (f"; ele aponta para outra fronteira: {' / '.join(outra)}" if outra else "") + ")"), nota

# ── o vão com voz sem vale: o ouvido diz de quem é a voz ────────────────────────────────────────────────────────────
def lado_do_vao(ouv, vao):
    """De qual palavra é a voz do vão [v0, v1], por UMA audição ouv = {inicio_1, fim_1, inicio_2, fim_2} (onde o Whisper
    ouviu as duas palavras). Escolhe a borda; NÃO prova (o portão relogio pede o aceite do vão de qualquer jeito).
    "segunda": a fronteira ouvida (o fim da 1ª e o começo da 2ª) fica entre VAO_OUVIDO_ALCANCE_S antes de v0 (o limite
    do lado de dentro da 1ª palavra) e VAO_OUVIDO_FOLGA_S depois de v0, e a 2ª ainda soa depois disso. "primeira": o
    espelho em v1 (a fronteira entre v1 − FOLGA e v1 + ALCANCE, e a 1ª já soava antes). None: o ouvido põe a fronteira
    no miolo do vão, longe dele (a 2ª ouvida dentro da 1ª, ou a 1ª dentro da 2ª), ou não ouviu as duas."""
    if not ouv: return None
    v0, v1, F, A = vao[0], vao[1], VAO_OUVIDO_FOLGA_S, VAO_OUVIDO_ALCANCE_S
    e = 1e-9
    perto = lambda x, borda, de, ate: borda - de - e <= x <= borda + ate + e
    seg = (perto(ouv["inicio_2"], v0, A, F) and perto(ouv["fim_1"], v0, A, F) and ouv["fim_2"] > v0 + F)
    pri = (perto(ouv["fim_1"], v1, F, A) and perto(ouv["inicio_2"], v1, F, A) and ouv["inicio_1"] < v1 - F)
    return "segunda" if seg and not pri else ("primeira" if pri and not seg else None)

def julgar_vao_pelo_ouvido(tp, res, j, vao, curto):
    """O vão com voz entre as palavras j e j+1, acima do teto e sem vale no som. Duas audições: o Whisper do recorte
    longo (res: só se as duas palavras casaram 1 para 1) e o do recorte curto em volta do vão (curto: as palavras dele em
    tempo absoluto; o par j | j+1 tem de aparecer UMA vez, colado). As duas têm de dar o mesmo lado (lado_do_vao), e o
    vão fecha na borda do outro lado: "segunda" → v0 (a 1ª fica com as letras que a ElevenLabs lhe deu), "primeira" → v1.
    É ESCOLHA da borda, não prova: as duas audições são o mesmo modelo, e o portão pede o aceite do vão.
    Devolve (onde fechar ou None, lado, prova)."""
    prova = {"folga_s": VAO_OUVIDO_FOLGA_S, "alcance_s": VAO_OUVIDO_ALCANCE_S, "longo": None, "curto": None,
             "papel": "escolhe a borda; não prova (o portão relogio pede o aceite do vão, --aceitar-vaos)"}
    a, b = tp[j], tp[j + 1]
    if res[j]["fonte"] == "casada" and res[j + 1]["fonte"] == "casada":
        prova["longo"] = {"inicio_1": r3(res[j]["start"]), "fim_1": r3(res[j]["end"]),
                          "inicio_2": r3(res[j + 1]["start"]), "fim_2": r3(res[j + 1]["end"])}
    us = unidades_whisper(curto)
    pares = [u for u in range(len(us) - 1) if a and b and us[u]["tokens"] and us[u + 1]["tokens"]
             and us[u]["tokens"][-1] == a[-1] and us[u + 1]["tokens"][0] == b[0]]
    if len(pares) == 1:
        u = pares[0]
        prova["curto"] = {"inicio_1": r3(us[u]["start"]), "fim_1": r3(us[u]["end"]),
                          "inicio_2": r3(us[u + 1]["start"]), "fim_2": r3(us[u + 1]["end"])}
    prova["ouviu_curto"] = " ".join(w["w"] for w in curto)
    lados = {k: lado_do_vao(prova[k], vao) for k in ("longo", "curto")}
    prova["lados"] = lados
    if lados["longo"] is not None and lados["longo"] == lados["curto"]:
        lado = lados["longo"]
        return (vao[0] if lado == "segunda" else vao[1]), lado, prova
    return None, None, prova

# ── o relógio híbrido de um trecho ───────────────────────────────────────────────────────────────────────────────────
def montar_relogio(palavras, el, ancoras, lo, hi, som, ouvir_vao=None):
    """palavras: as do trecho. el: [(s, e)] da ElevenLabs (letras, já com δ, tempo absoluto). ancoras: [(b, p0, p1)] em
    ordem: a palavra b termina em p0 e a b+1 começa em p1. [lo, hi]: o som do trecho. ouvir_vao(j, vao): o ouvido para
    um vão com voz acima de VAO_TETO_S sem vale (julgar_vao_pelo_ouvido); só é chamado nesse caso. Devolve [[start, end]],
    as marcas de cada palavra (ancora, deslocada, vao_fechado) e os vãos com voz fechados, medidos ANTES do fechamento."""
    n = len(palavras)
    out = [None] * n
    marcas = [dict() for _ in range(n)]
    vaos = []
    cortes = [-1] + [b for b, _, _ in ancoras] + [n - 1]
    limites = [lo] + [x for _, p0, p1 in ancoras for x in (p0, p1)] + [hi]
    for g in range(len(cortes) - 1):
        k, m = cortes[g] + 1, cortes[g + 1]
        A, B = limites[2 * g], limites[2 * g + 1]
        base = [el[j] for j in range(k, m + 1)]
        iv = [[min(max(s, A), B), min(max(e, A), B)] for s, e in base]
        iv[0][0], iv[-1][1] = A, B
        marcas[k]["ancora"] = "começo" if k != m else "começo e fim"
        if k != m: marcas[m]["ancora"] = "fim"
        # deslocadas: a base as punha do outro lado da âncora (a ElevenLabs discordou da fronteira): dividem, pelas
        # letras, o intervalo com a vizinha de dentro da corrida
        desl = [(iv[q][1] - iv[q][0] < DUR_CURTA_S and iv[q][1] - iv[q][0] < 0.5 * (base[q][1] - base[q][0])) for q in range(len(iv))]
        if all(desl) or len(iv) == 1:
            if len(iv) > 1 and all(desl):
                for q in range(len(iv)): marcas[k + q]["deslocada"] = True
            iv = [list(x) for x in repartir(palavras[k:m + 1], A, B)]
        else:
            q = 0
            while q < len(iv):
                if not desl[q]: q += 1; continue
                r = q
                while r < len(iv) and desl[r]: r += 1
                # grupo [q, r): junta com a vizinha não deslocada (a de depois no começo da corrida, a de antes no fim;
                # no meio, a mais longa)
                if q == 0: a, b = q, r
                elif r == len(iv): a, b = q - 1, r - 1
                else:
                    antes, depois = iv[q - 1][1] - iv[q - 1][0], iv[r][1] - iv[r][0]
                    a, b = (q - 1, r - 1) if antes >= depois else (q, r)
                ini, fim = iv[a][0], iv[b][1]
                for z, (s, e) in zip(range(a, b + 1), repartir(palavras[k + a:k + b + 1], ini, fim)):
                    iv[z] = [s, e]
                for z in range(q, r): marcas[k + z]["deslocada"] = True
                q = r
        # ordem e piso de duração dentro da corrida
        for _ in range(50):
            mudou, antes = False, A
            for x in iv:
                if x[0] < antes: x[0] = antes; mudou = True
                if x[1] < x[0] + DUR_MIN_PALAVRA_S: x[1] = x[0] + DUR_MIN_PALAVRA_S; mudou = True
                antes = x[1]
            depois = B
            for x in reversed(iv):
                if x[1] > depois: x[1] = depois; mudou = True
                if x[0] > x[1] - DUR_MIN_PALAVRA_S: x[0] = x[1] - DUR_MIN_PALAVRA_S; mudou = True
                depois = x[0]
            if not mudou: break
        # vão com voz entre duas palavras da corrida: som que não é de palavra nenhuma. Fecha no quadro mais quieto.
        for q in range(len(iv) - 1):
            v0, v1 = iv[q][1], iv[q + 1][0]
            fr = som.fracao_som(v0, v1) if v1 - v0 > VAO_FECHAR_S else 0.0
            if v1 - v0 > VAO_FECHAR_S and fr > VOZ_NO_VAO:
                t = som.mais_quieto(v0, v1)
                db_min, db_max = som.faixa_db(v0, v1)
                v = {"palavras": [k + q, k + q + 1], "entre": f"{palavras[k + q]} | {palavras[k + q + 1]}",
                     "vao_s": [r3(v0), r3(v1)], "dur_s": r3(v1 - v0), "fracao_som": r3(fr), "fechado_em": r3(t),
                     "db_min": round(db_min, 1), "db_max": round(db_max, 1),
                     "vale": bool(db_min <= LIMIAR_SOM_DBFS or db_max - db_min >= VALE_MIN_DB)}
                # sem vale, o quadro mais quieto costuma ser uma consoante de DENTRO de uma das palavras (o /k/ de
                # "American"): o ouvido escolhe a borda (sem escolha, fica o mais quieto); escolhida ou não, o portão
                # relogio pede o aceite de quem conferiu no som (--aceitar-vaos)
                if ouvir_vao is not None and v["dur_s"] > VAO_TETO_S and not v["vale"]:
                    borda, lado, prova = ouvir_vao(k + q, v["vao_s"])
                    v["ouvido"] = {"decidiu": borda is not None, "lado": lado, "mais_quieto_em": r3(t), **prova}
                    if borda is not None:
                        t = borda; v["fechado_em"] = r3(t)
                vaos.append(v)
                iv[q][1] = iv[q + 1][0] = t
                marcas[k + q]["vao_fechado"] = marcas[k + q + 1]["vao_fechado"] = True
        # palavra que começa no meio de um silêncio: a base a pôs sobre o fechamento da consoante final da anterior
        # ("backed the": o /t/ fecha e a voz só volta depois). Ela começa onde a voz volta e vai até a seguinte; o
        # silêncio fica com a anterior, que é de quem ele é.
        for q in range(1, len(iv)):
            s0, e0 = iv[q]
            if e0 - s0 <= 0 or 1 - som.fracao_som(s0, e0) < SILENCIO_PALAVRA: continue
            fim = iv[q + 1][0] if q + 1 < len(iv) else B
            volta = som.volta_do_som(s0, fim)
            if volta is None or fim - volta < DUR_MIN_PALAVRA_S: continue
            iv[q - 1][1], iv[q] = volta, [volta, max(e0, fim)]
            marcas[k + q]["comeca_onde_a_voz_volta"] = True
        for q in range(len(iv)):
            out[k + q] = iv[q]
    return out, marcas, vaos

# ── cobertura: a regra do medirCobertura da pré-v1 ────────────────────────────────────────────────────────────────────
def contar_palavras(texto):                             # port de contarPalavras (narrar.mjs)
    return sum(1 for t in re.sub(r"\[[^\]\n]*\]", " ", texto or "").split() if any(ch.isalnum() for ch in t))

def medir_cobertura_py(words, narr, aceitos=()):        # port de medirCobertura (transcrever.mjs)
    segs = narr["segmentos"]; fl = [s for s in segs if s["tipo"] == "fala"]
    obtidas, em_card = {s["i"]: [] for s in fl}, []
    for w in words:
        meio = (w["start"] + w["end"]) / 2
        seg = next((s for s in segs if s["start"] <= meio < s["end"]), None)
        if seg and seg["tipo"] == "card": em_card.append({"w": w["w"], "start": w["start"], "card": seg.get("titulo")}); continue
        if not seg or seg["tipo"] != "fala":
            seg = min(fl, key=lambda f: f["start"] - meio if meio < f["start"] else (meio - f["end"] if meio >= f["end"] else 0))
        obtidas[seg["i"]].append(w["w"])
    trechos = []
    for f in fl:
        esp, ouv = contar_palavras(f["texto"]), obtidas[f["i"]]
        obt = len(ouv); razao = round(obt / esp, 3) if esp else None
        fora = obt > 0 if esp == 0 else ((razao < COBERTURA_MIN or razao > COBERTURA_MAX) and abs(obt - esp) > 1)
        t = {"trecho": f["trecho"], "start": f["start"], "end": f["end"], "esperado": esp, "obtido": obt, "razao": razao,
             "status": "ok" if not fora else ("aceito" if f["trecho"] in aceitos else "suspeito")}
        if fora: t.update(texto_roteiro=f["texto"], texto_ouvido=" ".join(ouv))
        trechos.append(t)
    return {"trechos": trechos, "emCard": em_card}

def medir_cobertura_pre_v1(pre_v1, words, narr, aceitos):
    """A própria função da pré-v1, em Node. (None, motivo) se o clone ou o node não estiverem à mão."""
    alvo = Path(pre_v1) / "src" / "ferramentas" / "transcrever.mjs"
    if not alvo.exists(): return None, f"sem {alvo}"
    js = (f'import {{ medirCobertura }} from "{alvo.resolve().as_uri()}";\n'
          'let s = ""; for await (const c of process.stdin) s += c;\n'
          'const { words, narracao, aceitos } = JSON.parse(s);\n'
          'process.stdout.write(JSON.stringify(medirCobertura(words, narracao, new Set(aceitos))));\n')
    try:
        r = subprocess.run(["node", "--input-type=module", "-e", js], input=json.dumps({"words": words, "narracao": narr, "aceitos": sorted(aceitos)}),
                           capture_output=True, text=True, encoding="utf-8", timeout=120)
    except (OSError, subprocess.TimeoutExpired) as e:
        return None, f"node não rodou ({e})"
    if r.returncode: return None, f"node saiu com {r.returncode}: {r.stderr.strip()[:300]}"
    return json.loads(r.stdout), None

# ── portões que olham o relógio (funções puras: os testes de borda as chamam direto) ───────────────────────────────
def indices_item(x):
    """Os índices (no words.json) de um item: "palavras" nos blocos e na cobertura, "palavra" nos outros."""
    return x.get("palavras") if x.get("palavras") is not None else [x.get("palavra")]

def chave_item(x):
    """O que identifica um item de conteúdo ou de cobertura: o aceite vale só para o item IDÊNTICO. Os índices são os de
    DENTRO do trecho (no_trecho): mudar o texto de outro trecho não desfaz o aceite deste."""
    ind = x.get("no_trecho") if x.get("no_trecho") is not None else indices_item(x)
    return json.dumps([x["trecho"], x["tipo"], x.get("roteiro"), x.get("ouvido"), ind], ensure_ascii=False)

def resolver_aceites(itens, herdados, aceitar, por, como, agora, pendentes_antes=frozenset(), visto_em=None):
    """Marca a situação de cada item: "aceito" se é idêntico a um aceite herdado (o laudo anterior do MESMO áudio), ou se
    o trecho dele veio em --aceitar E o laudo anterior do mesmo áudio já mostrava esse item, idêntico, como PENDENTE (é
    o que a pessoa leu e conferiu no som); "pendente" se pede aceite e não tem, inclusive o item que NASCEU nesta rodada
    num trecho de --aceitar (ninguém o viu: fica pendente, com aceite_recusado dizendo por quê); "sem aceite (mesmas
    letras)" se não pede. herdados: os aceites do laudo anterior; pendentes_antes: as chave_item dos itens pendentes
    dele; visto_em: o gerado_em dele. Devolve (aceites gravados nesta rodada, herdados sem item)."""
    por_chave = {chave_item(h): h for h in herdados}
    usados, aceites = set(), []
    for x in itens:
        if not x["pede_aceite"]:
            x["situacao"] = "sem aceite (mesmas letras)"; continue
        # a chave pelos índices de dentro do trecho; a pelos índices do words.json vale para um aceite gravado antes
        # de existir o "no_trecho" (o mesmo item, só a forma de apontar para ele mudou)
        chaves = (chave_item(x), chave_item({**x, "no_trecho": None}))
        c = next((c for c in chaves if c in por_chave), None)
        if c is not None:
            h = por_chave[c]; usados.add(c)
            x["situacao"], x["aceite"] = "aceito", {k: h.get(k) for k in ("por", "como", "em", "pendente_no_laudo_de") if k in h} | {"herdado": True}
        elif x["trecho"] in aceitar and any(c in pendentes_antes for c in chaves):
            x["situacao"], x["aceite"] = "aceito", {"por": por, "como": como, "em": agora, "pendente_no_laudo_de": visto_em}
        else:
            x["situacao"] = "pendente"
            if x["trecho"] in aceitar:
                x["aceite_recusado"] = ("o item nasceu nesta rodada: não estava pendente no laudo anterior deste áudio, então "
                                        "ninguém o conferiu. Confira no som e rode de novo com --aceitar=" + str(x["trecho"]))
            continue
        aceites.append({"trecho": x["trecho"], "tipo": x["tipo"], "roteiro": x.get("roteiro"), "ouvido": x.get("ouvido"),
                        "palavras": indices_item(x), **({"no_trecho": x["no_trecho"]} if x.get("no_trecho") is not None else {}),
                        **{k: v for k, v in x["aceite"].items() if k != "herdado"}})
    return aceites, [h for c, h in por_chave.items() if c not in usados]

# ── o aceite vão a vão: o vão com voz acima do teto, sem vale no som (portão relogio) ─────────────────────────────────
def vao_pede_aceite(v):
    """O vão que nenhuma medida aprova: fechado acima de VAO_TETO_S e sem vale no som."""
    return v["dur_s"] > VAO_TETO_S and not v["vale"]

def inicio_vao(v):
    """O número pelo qual a pessoa aponta o vão em --aceitar-vaos: o início, com 2 casas."""
    return f"{v['vao_s'][0]:.2f}"

def chave_vao(v):
    """O que identifica um vão: o aceite vale só para o vão IDÊNTICO do mesmo áudio (o mesmo trecho, o mesmo par de
    palavras, nos índices de dentro do trecho, o mesmo vão e o mesmo fechamento)."""
    return json.dumps([v["trecho"], v["entre"], v["palavras"], [round(x, 3) for x in v["vao_s"]], round(v["fechado_em"], 3)],
                      ensure_ascii=False)

def resolver_aceites_vaos(vaos, herdados, aceitar, por, como, evidencia, agora, pendentes_antes=frozenset(), visto_em=None):
    """A disciplina do --aceitar (resolver_aceites), vão a vão. Para cada vão que pede aceite (vao_pede_aceite), marca
    v["situacao"]: "aceito" se é idêntico a um aceite herdado (o laudo anterior do MESMO áudio), ou se o início dele
    veio em --aceitar-vaos E o laudo anterior deste áudio já o mostrava, idêntico, PENDENTE (é o que a pessoa leu e
    conferiu no som); "pendente" nos outros, com aceite_recusado quando o início estava na lista. Os vãos que não pedem
    aceite ficam "vale do som" (acima do teto, com vale) ou "abaixo do teto". aceitar: os inícios com 2 casas.
    Devolve (aceites gravados nesta rodada, herdados sem vão, inícios de --aceitar-vaos sem vão nenhum)."""
    por_chave = {h["chave"]: h for h in herdados if h.get("chave")}
    usados, aceites = set(), []
    for v in vaos:
        if not vao_pede_aceite(v):
            v["situacao"] = "vale do som" if v["dur_s"] > VAO_TETO_S else "abaixo do teto"; continue
        c = chave_vao(v)
        if c in por_chave:
            h = por_chave[c]; usados.add(c)
            v["situacao"], v["aceite"] = "aceito", {k: h.get(k) for k in ("por", "como", "evidencia", "em", "pendente_no_laudo_de")} | {"herdado": True}
        elif inicio_vao(v) in aceitar and c in pendentes_antes:
            v["situacao"], v["aceite"] = "aceito", {"por": por, "como": como, "evidencia": evidencia, "em": agora,
                                                    "pendente_no_laudo_de": visto_em}
        else:
            v["situacao"] = "pendente"
            if inicio_vao(v) in aceitar:
                v["aceite_recusado"] = ("o vão nasceu ou mudou nesta rodada: o laudo anterior deste áudio não o mostrava pendente, "
                                        "idêntico (o mesmo par, o mesmo vão, o mesmo fechamento), então ninguém o conferiu. "
                                        f"Confira no som e rode de novo com --aceitar-vaos={inicio_vao(v)}")
            continue
        aceites.append({"chave": c, "trecho": v["trecho"], "entre": v["entre"], "palavras": v["palavras"], "vao_s": v["vao_s"],
                        "fechado_em": v["fechado_em"],
                        "como_fechou": ("borda escolhida pelo ouvido (" + str((v.get("ouvido") or {}).get("lado")) + ")")
                                       if (v.get("ouvido") or {}).get("decidiu") else "quadro mais quieto (o ouvido não escolheu)",
                        "medido_no_som": {"db_min": v["db_min"], "db_max": v["db_max"], "fracao_som": v["fracao_som"]},
                        **{k: x for k, x in v["aceite"].items() if k != "herdado"}})
    inicios = {inicio_vao(v) for v in vaos}
    return aceites, [h for c, h in por_chave.items() if c not in usados], sorted(set(aceitar) - inicios)

def portao_conteudo(itens):
    """itens: [{trecho, tipo, pede_aceite, situacao, ...}] (situacao posta por resolver_aceites). Reprova se algum item
    que pede aceite não foi aceito ITEM A ITEM."""
    pendentes = [x for x in itens if x["pede_aceite"] and x.get("situacao") != "aceito"]
    aceitos_aqui = [x for x in itens if x["pede_aceite"] and x.get("situacao") == "aceito"]
    if pendentes:
        det = "; ".join(f"t{x['trecho']} {x['tipo']}: roteiro \"{x['roteiro']}\" × ouvido \"{x['ouvido']}\"" for x in pendentes[:8])
        det += (" …" if len(pendentes) > 8 else "") + f" — confira no som; se estiver certo, --aceitar={','.join(str(t) for t in sorted({x['trecho'] for x in pendentes}))}"
    else:
        quem = sorted({f"por {x['aceite'].get('por')}; como {x['aceite'].get('como')}" for x in aceitos_aqui})
        det = (f"{sum(1 for x in itens if x['tipo'] == 'interpolada')} palavras puladas, "
               f"{sum(1 for x in itens if x['tipo'] == 'bloco_trocado')} blocos trocados, "
               f"{sum(1 for x in itens if x['tipo'] == 'a_mais')} palavras a mais"
               + (f"; {len(aceitos_aqui)} itens aceitos um a um (trechos {', '.join(map(str, sorted({x['trecho'] for x in aceitos_aqui})))}; "
                  f"{' / '.join(quem)})" if aceitos_aqui else ""))
    return {"nome": "conteudo", "ok": not pendentes, "detalhe": det}

def medir_fora_das_falas(som, x, sr, segmentos):
    """O que o Whisper não recebe: cada segmento que não é fala. Pausa: nenhum quadro de 10 ms acima do limiar. tela_final
    e card: silêncio digital (nenhuma amostra acima de SILENCIO_DIGITAL_LSB). Devolve (medidos, com_som)."""
    medidos, com_som = [], []
    for s in segmentos:
        if s["tipo"] == "fala": continue
        digital = s["tipo"] == "card" or s.get("motivo") == "tela_final"
        am = x[int(round(s["start"] * sr)):int(round(s["end"] * sr))]
        pico = int(round(float(np.abs(am).max()) * 32768)) if len(am) else 0
        corridas = som.corridas_com_som(s["start"], s["end"])
        m = {"tipo": s["tipo"], "motivo": s.get("motivo"), "start": s["start"], "end": s["end"], "pico_lsb": pico,
             "quadros_com_som": int(sum(round((b - a) * 100) for a, b in corridas))}
        medidos.append(m)
        if corridas or (digital and pico > SILENCIO_DIGITAL_LSB):
            com_som.append({**m, "exige": "silêncio digital" if digital else f"nenhum quadro acima de {LIMIAR_SOM_DBFS} dBFS",
                            "corridas_s": [[r3(a), r3(b)] for a, b in corridas],
                            "pico_dbfs": round(20 * np.log10(max(pico, 1) / 32768), 1)})
    return medidos, com_som

def portao_fora_das_falas(medidos, com_som, ouvido_fora):
    if com_som:
        det = "; ".join(f"{c['tipo']}{' ' + c['motivo'] if c.get('motivo') else ''} {c['start']:.2f}–{c['end']:.2f} s com som "
                        f"(pico {c['pico_dbfs']} dBFS; {c['quadros_com_som']} quadros acima de {LIMIAR_SOM_DBFS} dBFS"
                        + (f", em {', '.join(f'{a:.2f}–{b:.2f}' for a, b in c['corridas_s'][:4])}" if c["corridas_s"] else "")
                        + f"; exige {c['exige']})" for c in com_som[:6])
        if ouvido_fora: det += f"; o Whisper ouviu ali: \"{' '.join(w['w'] for w in ouvido_fora)[:200]}\""
        return {"nome": "fora_das_falas", "ok": False, "detalhe": det}
    n_p = sum(1 for m in medidos if m["tipo"] == "pausa" and m.get("motivo") != "tela_final")
    dig = [m for m in medidos if m["tipo"] == "card" or m.get("motivo") == "tela_final"]
    nomes_dig = ", ".join("%s %.2f–%.2f s" % (m.get("motivo") or m["tipo"], m["start"], m["end"]) for m in dig)
    return {"nome": "fora_das_falas", "ok": True,
            "detalhe": (f"{len(medidos)} segmentos fora das falas medidos ({sum(m['end'] - m['start'] for m in medidos):.2f} s): "
                        f"{n_p} pausas sem nenhum quadro acima de {LIMIAR_SOM_DBFS} dBFS"
                        + (f"; {nomes_dig} em silêncio digital (pico {max(m['pico_lsb'] for m in dig)} LSB)" if dig else ""))}

def portao_relogio(words, trechos_rel, segmentos, esperadas, fronteiras, som=None, vaos=None, concordancia=None):
    """words: as do disco (3 casas). trechos_rel: [{trecho, n (palavras), som: [lo, hi], ancoras: [[p0, p1]]}] na ordem.
    segmentos: os do narracao.json. fronteiras: [{situacao}] das pausas. som: o Som da narração (as medidas no áudio);
    vaos: os vãos com voz que a montagem fechou; concordancia: as distâncias ao Whisper. Devolve (portão, problemas)."""
    prob, medidas = [], []
    if len(words) != esperadas: prob.append(f"{len(words)} palavras no relógio, o roteiro tem {esperadas}")
    k, maior_sem_palavra, ancoras_com_som = 0, (0.0, None), 0
    for t in trechos_rel:
        lo, hi = t["som"]
        ws = words[k:k + t["n"]]
        for w in ws:
            if not (lo - 0.0005 <= w["start"] < w["end"] <= hi + 0.0005):
                prob.append(f"trecho {t['trecho']}: \"{w['w']}\" {w['start']}–{w['end']} fora do som do trecho ({lo}–{hi})")
            for p0, p1 in t["ancoras"]:
                if min(w["end"], p1) - max(w["start"], p0) > 0.001:
                    prob.append(f"trecho {t['trecho']}: \"{w['w']}\" {w['start']}–{w['end']} invade a pausa {p0:.2f}–{p1:.2f}")
        if som is not None:
            # MEDIDO: cada âncora é silêncio, e nenhum som fica sem palavra (quadro com metade ou mais fora de palavra)
            for p0, p1 in t["ancoras"]:
                fr = som.fracao_som(p0, p1)
                if fr > 0:
                    ancoras_com_som += 1
                    prob.append(f"trecho {t['trecho']}: a pausa-âncora {p0:.2f}–{p1:.2f} tem {100 * fr:.0f} % de som")
            k0, k1 = int(round(lo * 100)), int(round(hi * 100))
            cob = np.zeros(max(0, k1 - k0))
            for w in ws:
                a, b = max(w["start"], lo), min(w["end"], hi)
                for q in range(max(k0, int(np.floor(a * 100))), min(k1, int(np.ceil(b * 100)))):
                    cob[q - k0] += max(0.0, min(b, (q + 1) / 100) - max(a, q / 100)) * 100
            for a, b in som.corridas_com_som(lo, hi, cob):
                if b - a > maior_sem_palavra[0]: maior_sem_palavra = (b - a, (a, b, t["trecho"]))
                if b - a > VAO_MAX_S + 1e-9:
                    prob.append(f"trecho {t['trecho']}: {b - a:.2f} s de som sem palavra ({a:.2f}–{b:.2f} s)")
        k += t["n"]
    for a, b in zip(words, words[1:]):
        if b["start"] < a["end"]: prob.append(f"\"{a['w']}\" termina em {a['end']} e \"{b['w']}\" começa em {b['start']}")
        if b["start"] < a["start"]: prob.append(f"\"{b['w']}\" em {b['start']} fora de ordem")
    falas = [s for s in segmentos if s["tipo"] == "fala"]
    for w in words:
        meio = (w["start"] + w["end"]) / 2
        seg = next((s for s in segmentos if s["start"] <= meio < s["end"]), None)
        if seg is None or seg["tipo"] != "fala" or not any(f["start"] - 0.0005 <= w["start"] and w["end"] <= f["end"] + 0.0005 for f in falas):
            prob.append(f"\"{w['w']}\" {w['start']}–{w['end']} fora dos trechos de fala"
                        + (f" (em {seg['tipo']}{' ' + seg['motivo'] if seg and seg.get('motivo') else ''})" if seg else ""))
    # decidida = consenso com pontuação, ou o ouvido decidiu (conferida, desempatada, corrigida); ignorada = nenhuma
    # fronteira de palavra perto (pausa de dentro de uma palavra). Qualquer outra situação reprova, inclusive uma que
    # esta versão não produz mais ("nao_confirmada", de laudos antigos): o que não está na lista não passa.
    decididas = ("consenso", "conferida", "desempatada", "corrigida")
    discord = [f for f in fronteiras if f["situacao"] not in decididas + ("ignorada",)]
    for f in discord:
        prob.append(f"pausa {f['pausa'][0]:.2f}–{f['pausa'][1]:.2f} (trecho {f['trecho']}): fronteira {f['situacao']} "
                    f"(regra: {f.get('regra_palavras', f.get('regra'))}; ElevenLabs: {f.get('elevenlabs_palavras', f.get('elevenlabs'))}; {f.get('como', '')})")
    vaos_pendentes, vaos_aceitos = [], []
    if vaos is not None:
        # o vão acima do teto sem vale NUNCA passa por regra automática (nem o quadro mais quieto, nem o ouvido, que só
        # escolhe a borda): passa só com o aceite vão a vão (resolver_aceites_vaos), e sai como ACEITO, não como medido
        for v in vaos:
            if not vao_pede_aceite(v): continue
            ac = v.get("aceite") or {}
            if v.get("situacao") == "aceito" and ac.get("por") and ac.get("como"): vaos_aceitos.append(v)
            else: vaos_pendentes.append(v)
        for v in vaos_pendentes:
            o = v.get("ouvido") or {}
            como_fechou = (f"borda escolhida pelo ouvido (lado {o.get('lado')}), que não prova" if o.get("decidiu")
                           else "quadro mais quieto" + (f" (o ouvido não escolheu: recorte longo {o['lados']['longo']}, curto "
                                                        f"{o['lados']['curto']})" if o.get("lados") else ""))
            prob.append(f"vão com voz de {v['dur_s']:.2f} s entre \"{v['entre']}\" ({v['vao_s'][0]}–{v['vao_s'][1]}), sem vale no som "
                        f"(mais quieto {v['db_min']} dBFS, mais alto {v['db_max']} dBFS), fechado em {v['fechado_em']} "
                        f"({como_fechou}): PENDENTE de aceite ({inicio_vao(v)})")
        acima = [v for v in vaos if v["dur_s"] > VAO_TETO_S]
        n_vale = sum(1 for v in acima if v["vale"])
        medidas.append(f"{len(vaos)} vãos com voz fechados na montagem (maior {max((v['dur_s'] for v in vaos), default=0):.3f} s; "
                       f"{len(acima)} acima de {VAO_TETO_S} s, {n_vale} deles num vale do som"
                       + (f"; os outros {len(acima) - n_vale}, sem vale, não são medida: vão aceito ou pendente" if len(acima) > n_vale else "")
                       + ")")
    if concordancia is not None:
        for g in concordancia["grosseiras"]:
            prob.append(f"\"{g['w']}\" ({g['ponta']} em {g['relogio']}) a {g['dif_s']:+.2f} s de onde o Whisper a ouviu ({g['whisper']})")
        ci = concordancia["inicio"]
        medidas.append(f"contra o Whisper, {ci['n']} inícios de palavra casada fora das âncoras: mediana {ci['mediana_s']:+.3f} s, "
                       f"máx {ci['abs_max_s']:.3f} s (teto {CONCORDANCIA_MAX_S} s)")
    if som is not None:
        medidas.insert(0, f"{sum(len(t['ancoras']) for t in trechos_rel) - ancoras_com_som} pausas-âncora em silêncio; maior corrida de som "
                          f"sem palavra {maior_sem_palavra[0]:.2f} s (teto {VAO_MAX_S} s)")
    ok = not prob
    conta = lambda s: sum(1 for f in fronteiras if f["situacao"] == s)
    n_dec = sum(conta(s) for s in decididas)
    quem_vaos = sorted({f"por {v['aceite'].get('por')}; como {v['aceite'].get('como')}"
                        + (f"; evidência {v['aceite'].get('evidencia')}" if v['aceite'].get('evidencia') else "") for v in vaos_aceitos})
    txt_aceitos = (f" ACEITO, não medido: {len(vaos_aceitos)} vãos com voz acima de {VAO_TETO_S} s sem vale no som, um a um "
                   f"({', '.join(inicio_vao(v) + ' ' + v['entre'] + (' (herdado)' if v['aceite'].get('herdado') else '') for v in vaos_aceitos)}), "
                   f"porque {' / '.join(quem_vaos)}."
                   if vaos_aceitos else "")
    txt_como_aceitar = (f" — confira cada vão no som (a borda em que ele fechou); se estiver certa: --aceitar-vaos="
                        f"{','.join(inicio_vao(v) for v in vaos_pendentes)} --aceite-por=\"<quem>\" --aceite-como=\"<como conferiu>\" "
                        f"[--aceite-evidencia=\"<onde está a conferência>\"]"
                        if vaos_pendentes else "")
    det = (f"{len(words)} palavras do texto aprovado (contarPalavras: {esperadas}), em ordem, sem sobreposição, dentro do som "
           f"de cada trecho, nenhuma invadindo as {sum(len(t['ancoras']) for t in trechos_rel)} pausas-âncora. Fronteiras: "
           f"{len(fronteiras)} pausas, {n_dec} decididas ({conta('consenso')} por consenso com pontuação; pelo ouvido, "
           f"{conta('conferida')} conferidas, {conta('desempatada')} desempatadas e {conta('corrigida')} corrigidas), "
           f"{conta('ignorada')} ignoradas (de dentro de uma palavra), 0 sem decisão. Medido: "
           + ("; ".join(medidas) if medidas else "nada (sem o som)") + (("." + txt_aceitos) if txt_aceitos else "")
           if ok else "; ".join(prob[:10]) + (f" … (+{len(prob) - 10})" if len(prob) > 10 else "") + txt_como_aceitar + txt_aceitos)
    return {"nome": "relogio", "ok": ok, "detalhe": det}, prob

# ── marcos de chiado: uma medida independente do relógio, a cada rodada ────────────────────────────────────────────
H_CHIADO, NW_CHIADO = 110, 441

def espectro_chiado(x, sr):
    """Energia de 3–10 kHz (dB) em janelas de 10 ms a cada 2,5 ms: onde o "s" começa e acaba."""
    nh = (len(x) - NW_CHIADO) // H_CHIADO
    hf = np.empty(max(0, nh))
    fr = np.fft.rfftfreq(NW_CHIADO, 1 / sr); faixa = (fr >= 3000) & (fr <= 10000); jan = np.hanning(NW_CHIADO)
    for i0 in range(0, nh, 20000):
        i1 = min(nh, i0 + 20000)
        F = np.abs(np.fft.rfft(x[np.arange(i0, i1)[:, None] * H_CHIADO + np.arange(NW_CHIADO)[None, :]] * jan, axis=1)) ** 2
        hf[i0:i1] = 10 * np.log10(F[:, faixa].sum(1) + 1e-12)
    return hf

def marcos_de_chiado(hf, sr, words, trecho_de):
    """Começo de palavra com s depois de vogal/soante (subida da energia de 3–10 kHz) e fim de palavra em s/ss/x antes
    de vogal (queda), sem pontuação no meio. Devolve os erros do relógio contra esses marcos (a métrica da verificação
    de 26/09, marcos.py, centrada no próprio relógio)."""
    H, NW = H_CHIADO, NW_CHIADO
    def inicio_s(c):
        k0, k1 = int((c - 0.25) * sr / H), int((c + 0.3) * sr / H); seg = hf[max(0, k0):k1]
        if not len(seg): return None
        kp = int(np.argmax(seg)); k = kp
        while k > 0 and seg[k - 1] > seg[kp] - 12: k -= 1
        if seg[kp] - seg[:max(1, k)].min() < 15: return None
        return (max(0, k0) + k) * H / sr + NW / 2 / sr
    def fim_s(c):
        k0, k1 = int((c - 0.3) * sr / H), int((c + 0.25) * sr / H); seg = hf[max(0, k0):k1]
        if not len(seg): return None
        kp = int(np.argmax(seg)); k = kp
        while k < len(seg) - 1 and seg[k + 1] > seg[kp] - 12: k += 1
        if seg[kp] - seg[k:].min() < 15: return None
        return (max(0, k0) + k) * H / sr + NW / 2 / sr
    limpa = lambda w: re.sub(r"[^a-z]", "", w.lower())
    ini, fim = [], []
    for i in range(1, len(words)):
        w, p = limpa(words[i]["w"]), limpa(words[i - 1]["w"])
        if (w.startswith("s") and not w.startswith("sh") and p and p[-1] in "aeiouylrnmw"
                and not re.search(r"""[.,;:?!"\u201d]$""", words[i - 1]["w"]) and not re.match(r"""^["\u201c(]""", words[i]["w"])
                and trecho_de[i] == trecho_de[i - 1]):
            t = inicio_s(words[i]["start"])
            if t is not None: ini.append(words[i]["start"] - t)
    for i in range(len(words) - 1):
        w, n = limpa(words[i]["w"]), limpa(words[i + 1]["w"])
        if (re.search(r"(ss|[^'s]s|x)$", w) and n and n[0] in "aeiou" and not re.search(r"""[.,;:?!"\u201d]$""", words[i]["w"])
                and trecho_de[i] == trecho_de[i + 1]):
            t = fim_s(words[i]["end"])
            if t is not None: fim.append(words[i]["end"] - t)
    def resumo(d):
        if not d: return {"n": 0}
        d = np.array(d); a = np.abs(d)
        return {"n": len(d), "mediana_s": r3(np.median(d)), "abs_mediana_s": r3(np.median(a)), "abs_p90_s": r3(np.percentile(a, 90)),
                "ate_0_1_s": r3(np.mean(a <= 0.1))}
    return {"inicio_de_palavra_com_s": resumo(ini), "fim_de_palavra_em_s_ou_x": resumo(fim),
            "leitura": "relógio menos o marco acústico (positivo = o relógio vem depois do som); o marco é procurado a ±0,3 s "
                       "do próprio relógio, então mede o ajuste fino, não erros de uma palavra inteira"}

# ── principal ───────────────────────────────────────────────────────────────────────────────────────────────────────
def main(argv):
    for fluxo in (sys.stdout, sys.stderr):
        fluxo.reconfigure(encoding="utf-8", errors="replace")
    T0 = time.time()
    args = [a for a in argv if not a.startswith("--")]
    opcoes = dict(a[2:].split("=", 1) if "=" in a else (a[2:], "1") for a in argv if a.startswith("--"))
    uso = ("uso: python out/<proj>/_pesquisa/ingest-local.py <proj> [--aceitar=3,7] [--aceitar-vaos=24.84,138.72] "
           "[--aceite-por=...] [--aceite-como=...] [--aceite-evidencia=...] "
           "[--sem-cobertura] [--refazer] [--saida=<pasta>] [--pre-v1=<clone>]   (cwd = raiz do canal)")
    if len(args) != 1 or set(opcoes) - {"saida", "pre-v1", "refazer", "aceitar", "aceitar-vaos", "sem-cobertura", "aceite-por",
                                        "aceite-como", "aceite-evidencia"} \
            or not re.fullmatch(r"[\w.-]+", args[0]):
        print(uso, file=sys.stderr); return 2
    try:
        aceitar = sorted({int(x) for x in opcoes.get("aceitar", "").split(",") if x.strip()}) if "aceitar" in opcoes else []
    except ValueError:
        print("--aceitar=N[,M...]: números de trecho", file=sys.stderr); return 2
    brutos_vaos = [x.strip() for x in opcoes.get("aceitar-vaos", "").split(",") if x.strip()]
    if any(not re.fullmatch(r"\d+\.\d{1,2}", x) for x in brutos_vaos):
        print("--aceitar-vaos=S[,S...]: o início de cada vão em segundos, com 1 ou 2 casas (ex.: 24.84; 775.5 = 775.50), como a linha do portão "
              "relogio o mostra", file=sys.stderr); return 2
    aceitar_vaos = sorted({f"{float(x):.2f}" for x in brutos_vaos})
    ACEITE_POR = (opcoes.get("aceite-por") or "").strip() or "não informado"
    ACEITE_COMO = (opcoes.get("aceite-como") or "").strip() or "não informado"
    ACEITE_EVIDENCIA = (opcoes.get("aceite-evidencia") or "").strip() or None
    if aceitar_vaos and "não informado" in (ACEITE_POR, ACEITE_COMO):
        print("--aceitar-vaos pede --aceite-por=<quem conferiu> e --aceite-como=<como conferiu a borda no som>: o aceite é a "
              "única prova do vão sem vale", file=sys.stderr); return 2
    AGORA = datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")
    REFAZER, SEM_COBERTURA = "refazer" in opcoes, "sem-cobertura" in opcoes
    proj = args[0]
    BASE = Path("out") / proj
    SAIDA = Path(opcoes.get("saida") or BASE)
    PRE_V1 = Path(opcoes.get("pre-v1") or os.environ.get("REGIE_V1") or "C:/projetos/regie-v1")
    ARQ_WAV, ARQ_NARRACAO = BASE / "narracao.wav", BASE / "narracao.json"
    ARQ_CACHE = BASE / "_narracao" / "whisper.json"
    ARQ_EL = BASE / "_narracao" / "elevenlabs" / "alinhamento-elevenlabs.json"
    AQUI = Path(__file__).resolve().parent
    arq_comparar = carregar_comparar(proj, AQUI)
    if not ARQ_WAV.exists():
        print(f"PARADO: não achei {rel(ARQ_WAV)}. Rode o narrar (e o tratar-narracao.py) antes.", file=sys.stderr); return 1
    SAIDA.mkdir(parents=True, exist_ok=True)
    arq_words, arq_texto, arq_laudo = SAIDA / "words.json", SAIDA / "transcript.txt", SAIDA / "transcricao.json"
    try:
        idioma = str(json.loads(Path("canal.json").read_text(encoding="utf-8-sig"))["idiomas"]["origem"]).split("-")[0].lower()
    except (OSError, ValueError, KeyError, TypeError):
        print("PARADO: não li canal.json › idiomas.origem (o idioma da transcrição)", file=sys.stderr); return 1

    # ── 1. o áudio é o que o narracao.json descreve? ──────────────────────────────────────────────────────────────────
    sha_wav = sha256_arquivo(ARQ_WAV)
    with wave.open(str(ARQ_WAV), "rb") as w:
        SR, N, CANAIS, BYTES = w.getframerate(), w.getnframes(), w.getnchannels(), w.getsampwidth()
        if CANAIS != 1 or BYTES != 2:
            print(f"PARADO: a narração tem {CANAIS} canal(is) de {8 * BYTES} bits; o esperado é mono de 16 bits", file=sys.stderr); return 1
        x = np.frombuffer(w.readframes(N), dtype="<i2").astype(np.float64) / 32768
    DUR_WAV = N / SR
    laudo_anterior = None
    try:
        laudo_anterior = json.loads(arq_laudo.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        pass
    # Aceite é decisão de quem conferiu AQUELE item daquele áudio: herda-se do laudo anterior, item a item, só com o
    # mesmo sha256 (a regra da pré-v1, que aceita por trecho, apertada para o item: ver o cabeçalho).
    mesmo_audio = bool(laudo_anterior) and laudo_anterior.get("audio", {}).get("sha256") == sha_wav
    herdados = list(laudo_anterior.get("aceites") or []) if mesmo_audio else []
    # --aceitar=N só vale para o que a pessoa pôde ler: os itens que o laudo anterior DESTE áudio mostrava pendentes
    pendentes_antes, visto_em = set(), None
    if mesmo_audio:
        al = laudo_anterior.get("alinhamento") or {}
        for it in (al.get("conteudo") or []) + (al.get("cobertura_itens") or []):
            if it.get("pede_aceite") and it.get("situacao") == "pendente": pendentes_antes.add(chave_item(it))
        visto_em = laudo_anterior.get("gerado_em")
    # o mesmo para os vãos sem vale do portão relogio (--aceitar-vaos): herança e pendentes do laudo anterior deste áudio
    herdados_vaos = list(laudo_anterior.get("aceites_vaos") or []) if mesmo_audio else []
    pendentes_vaos_antes = set()
    if mesmo_audio:
        for v in (laudo_anterior.get("alinhamento") or {}).get("vaos_com_voz_fechados") or []:
            if v.get("situacao") == "pendente":
                try: pendentes_vaos_antes.add(chave_vao(v))
                except (KeyError, TypeError): pass
    avisos_heranca = []
    if mesmo_audio and laudo_anterior.get("aceitos") and "aceites" not in laudo_anterior:
        avisos_heranca.append(f"o laudo anterior aceitava por trecho ({laudo_anterior.get('aceitos')}), formato que não vale mais: "
                              f"aceite de novo, item a item, com --aceitar=N (e --aceite-por/--aceite-como)")
    audio_laudo = {"arquivo": rel(ARQ_WAV), "sha256": sha_wav, "duracaoSec": round(DUR_WAV, 6), "sampleRate": SR}

    def laudo_curto(status, portoes, avisos, extra=None):
        """Laudo sem relógio (não deu para medir, ou faltou a base): a mesma forma, words.json apagado (e o transcript.txt
        de uma rodada anterior também: nesta, nada foi transcrito)."""
        for arq in (arq_words, arq_texto):
            if arq.exists(): arq.unlink()
        laudo = {"schemaVersion": 1, "proj": proj, "status": status, "audio": audio_laudo, "pedido": None, "resposta": None,
                 "portoes": portoes, "trechos": None,
                 "aceitos": sorted({h["trecho"] for h in herdados if h.get("tipo") == "cobertura"}), "aceites": herdados,
                 "aceites_vaos": herdados_vaos,
                 "sobre_aceitos": SOBRE_ACEITOS,
                 "sem_cobertura": None, "avisos": avisos_heranca + avisos, "saidas": {"words": None, "transcript": None},
                 **(extra or {}),
                 "ferramenta": {"script": rel(Path(__file__)), "sha256": sha256_arquivo(__file__)},
                 "gerado_em": datetime.now(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z")}
        gravar(arq_laudo, json.dumps(laudo, ensure_ascii=False, indent=2) + "\n")
        print(f"\n== {status.upper()} · words.json NÃO gravado · laudo em {rel(arq_laudo)}")
        for p in portoes: print(f"  {'✓' if p['ok'] else ('?' if p['ok'] is None else '✗')} {p['nome']}: {p['detalhe']}")
        for a in avisos: print(f"  aviso: {a}")
        return 1

    narracao, sem_medir = None, None
    if not ARQ_NARRACAO.exists():
        sem_medir = f"{rel(ARQ_NARRACAO)} não existe (o áudio não veio do narrar, ou o arquivo sumiu)"
    else:
        try:
            narracao = json.loads(ARQ_NARRACAO.read_text(encoding="utf-8-sig"))
        except ValueError as e:
            sem_medir = f"{rel(ARQ_NARRACAO)} não é um JSON legível ({e})"
        if narracao is not None and narracao.get("audio", {}).get("sha256") != sha_wav:
            sem_medir = (f"{rel(ARQ_NARRACAO)} descreve OUTRO áudio (sha256 {str(narracao.get('audio', {}).get('sha256'))[:12]}…, "
                         f"a narracao.wav é {sha_wav[:12]}…): foi trocada ou editada fora do narrar/tratar")
            narracao = None
        elif narracao is not None and not isinstance(narracao.get("segmentos"), list):
            sem_medir = f"{rel(ARQ_NARRACAO)} não tem a lista de segmentos"; narracao = None
    if sem_medir:
        avisos = []
        if SEM_COBERTURA:
            avisos.append("--sem-cobertura não destrava este caso: sem o narracao.json DESTE áudio não há texto aprovado nem "
                          "trechos para montar o relógio (este ingest alinha o texto aprovado, não inventa palavras do ouvido)")
        if aceitar: avisos.append(f"--aceitar={','.join(map(str, aceitar))} não tem efeito: a cobertura não foi medida.")
        return laudo_curto("nao_medido", [{"nome": "cobertura", "ok": None, "detalhe": f"NÃO MEDIDO: {sem_medir}"}], avisos)
    segmentos = narracao["segmentos"]
    falas = [s for s in segmentos if s["tipo"] == "fala"]
    print(f"{rel(ARQ_WAV)}: {DUR_WAV:.3f} s, {SR} Hz, sha256 confere ({sha_wav[:12]}…) · {len(falas)} trechos de fala")
    avisos = []
    som = Som(x, SR)

    # ── 2. a base de tempo: o alinhamento da ElevenLabs, trecho a trecho ──────────────────────────────────────────────
    def ler_el():
        try:
            d = json.loads(ARQ_EL.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            return None, f"{rel(ARQ_EL)} não existe ou não é legível"
        por_req = {t["requestId"]: t for t in d.get("trechos", [])}
        for f in falas:
            t = por_req.get(f.get("requestId"))
            if t is None: return None, f"o trecho {f['trecho']} (requestId {f.get('requestId')}) não está em {rel(ARQ_EL)}"
            if t["texto"] != f["texto"] or [p["w"] for p in t["palavras"]] != f["texto"].split(" "):
                return None, f"o texto do trecho {f['trecho']} em {rel(ARQ_EL)} não é o aprovado"
            if t.get("pcm_sha256_bate_com_recibo") is False: return None, f"o PCM do trecho {f['trecho']} não bate com o recibo"
        return {f["trecho"]: por_req[f["requestId"]] for f in falas}, None
    el_por_trecho, erro_el = ler_el()
    if el_por_trecho is None:
        script_el = next((c for c in (AQUI / "alinhamento-elevenlabs.mjs", BASE / "_pesquisa" / "alinhamento-elevenlabs.mjs") if c.exists()), None)
        if script_el:
            print(f"{erro_el}; rodando {rel(script_el)} {proj} --cache (sem rede)")
            r = subprocess.run(["node", str(script_el), proj, "--cache", f"--pre-v1={PRE_V1}"], capture_output=True, text=True, encoding="utf-8")
            if r.returncode: print(r.stdout[-1500:] + r.stderr[-800:])
            el_por_trecho, erro_el = ler_el()
    if el_por_trecho is None:
        return laudo_curto("reprovado", [{"nome": "base_de_tempo", "ok": False, "detalhe":
            f"sem o alinhamento da ElevenLabs deste texto: {erro_el}. Rode node out/{proj}/_pesquisa/alinhamento-elevenlabs.mjs {proj} "
            f"(só GET no histórico, sem gasto) e o ingest de novo."}], avisos)
    sha_el = sha256_arquivo(ARQ_EL)

    # ── 3. o áudio a 16 kHz para o Whisper, de uma vez só (recortar depois é exato em múltiplos de 10 ms) ─────────────
    a16 = np.frombuffer(subprocess.run(["ffmpeg", "-v", "error", "-i", str(ARQ_WAV), "-ac", "1", "-ar", str(TAXA_WHISPER),
                                        "-f", "f32le", "-"], capture_output=True, check=True).stdout, dtype=np.float32)
    DUR_DECODIFICADA = len(a16) / TAXA_WHISPER
    try:
        ffmpeg_versao = subprocess.run(["ffmpeg", "-version"], capture_output=True, text=True).stdout.split("\n")[0].split(" Copyright")[0]
    except OSError:
        ffmpeg_versao = None

    # ── 4. o modelo, o pedido e o cache pelas amostras ───────────────────────────────────────────────────────────────
    from faster_whisper import WhisperModel
    import faster_whisper
    from faster_whisper.utils import download_model
    try:
        # o caminho do snapshot no cache local, resolvido UMA vez: a revisão registrada é a que carrega (modelo())
        CAMINHO_MODELO = download_model(MODELO, local_files_only=True)
    except Exception as e:
        print(f"PARADO: o modelo {MODELO} do faster-whisper não está no cache local do Hugging Face ({type(e).__name__}: "
              f"{str(e)[:200]}). Este script não baixa nada nem acessa a rede: o modelo se instala à parte, com o ok do "
              f"Lucas.", file=sys.stderr)
        return 1
    REVISAO = Path(CAMINHO_MODELO).name
    THREADS = os.cpu_count() or 4
    PEDIDO_WHISPER = {"motor": f"faster-whisper {MODELO} local (CPU int8)", "faster_whisper": faster_whisper.__version__,
                      "modelo": MODELO, "modelo_revisao": REVISAO, "device": "cpu", "compute_type": "int8", "cpu_threads": THREADS,
                      "idioma": idioma, "beam_size": 5, "word_timestamps": True, "condition_on_previous_text": False,
                      "vad_filter": False, "temperature": "padrão do faster-whisper (0,0 com recaída)", "taxa_hz": TAXA_WHISPER,
                      "reamostragem": ffmpeg_versao}
    cache_rec, cache_curto = {}, {}
    if not REFAZER and ARQ_CACHE.exists():
        try:
            anterior = json.loads(ARQ_CACHE.read_text(encoding="utf-8"))
            if anterior.get("pedido_whisper") == PEDIDO_WHISPER:
                cache_rec = {r["amostras_sha256"]: r for r in anterior.get("recortes", [])}
                cache_curto = {r["amostras_sha256"]: r for r in anterior.get("recortes_curtos", [])}
            else:
                print(f"o cache {rel(ARQ_CACHE)} é de outro pedido ao Whisper: transcrevendo de novo")
        except (OSError, ValueError, KeyError, TypeError):
            cache_rec, cache_curto = {}, {}
    _modelo = []
    def modelo():
        if not _modelo:
            t = time.time()
            # pelo caminho (um diretório: o faster-whisper não chama o download_model) e, por garantia, só local
            _modelo.append(WhisperModel(CAMINHO_MODELO, device="cpu", compute_type="int8", cpu_threads=THREADS, local_files_only=True))
            print(f"modelo {MODELO} ({REVISAO}) carregado do cache local em {time.time() - t:.0f} s", flush=True)
        return _modelo[0]
    sha_amostras = lambda am: hashlib.sha256(np.ascontiguousarray(am, dtype="<f4").tobytes()).hexdigest()
    def whisper(am, detectar):
        out = {}
        if detectar:
            lang, prob, _ = modelo().detect_language(audio=am)
            out.update(idioma_detectado=lang, idioma_prob=round(float(prob), 4))
        segs, info = modelo().transcribe(am, language=idioma, beam_size=5, word_timestamps=True,
                                         condition_on_previous_text=False, vad_filter=False)
        segs = list(segs)
        out.update(duracao_whisper=round(float(info.duration), 3),
                   segmentos=[{"start": round(float(s.start), 3), "end": round(float(s.end), 3), "texto": s.text.strip(),
                               "avg_logprob": round(float(s.avg_logprob), 3), "no_speech_prob": round(float(s.no_speech_prob), 3),
                               "compression_ratio": round(float(s.compression_ratio), 3), "temperature": float(s.temperature),
                               "palavras": [{"w": w.word.strip(), "start": round(float(w.start), 3), "end": round(float(w.end), 3),
                                             "p": round(float(w.probability), 3)} for w in (s.words or [])]} for s in segs])
        return out
    usados_rec, usados_curto = [], []
    novas = {"recortes": 0, "curtos": 0}
    def gravar_cache(trechos_audit=None):
        ARQ_CACHE.parent.mkdir(parents=True, exist_ok=True)
        gravar(ARQ_CACHE, json.dumps({
            "schemaVersion": 2,
            "sobre": "transcrição crua do faster-whisper local, por recorte, e os recortes curtos do ouvido (fronteiras de pausa e "
                     "provas de conteúdo). É o cache do ingest-local.py: vale por amostras_sha256 (as amostras de 16 kHz que o "
                     "Whisper recebeu) com o mesmo pedido_whisper. Tempos das palavras relativos ao começo de cada recorte.",
            "audio": {"arquivo": rel(ARQ_WAV), "sha256": sha_wav, "duracaoSec": round(DUR_WAV, 6), "decodificado_s": round(DUR_DECODIFICADA, 6)},
            "pedido_whisper": PEDIDO_WHISPER, "recortes": usados_rec, "recortes_curtos": usados_curto,
            **({"trechos": trechos_audit} if trechos_audit is not None else {})}, ensure_ascii=False, indent=1) + "\n")

    def ouvir(t0, t1, motivo):
        """O ouvido: o Whisper num recorte curto [t0, t1) da narração. Devolve as palavras em tempo absoluto."""
        a, b = max(0, int(round(t0 * TAXA_WHISPER))), min(len(a16), int(round(t1 * TAXA_WHISPER)))
        am = a16[a:b]; chave = sha_amostras(am)
        r = cache_curto.get(chave)
        if r is None:
            r = whisper(am, detectar=False); novas["curtos"] += 1
            r = {"motivo": motivo, "start": round(a / TAXA_WHISPER, 4), "end": round(b / TAXA_WHISPER, 4), "amostras": int(b - a),
                 "amostras_sha256": chave, **r}
            cache_curto[chave] = r
        if chave not in {u["amostras_sha256"] for u in usados_curto}: usados_curto.append(r)
        return [{"w": w["w"], "start": a / TAXA_WHISPER + w["start"], "end": a / TAXA_WHISPER + w["end"], "p": w["p"]}
                for s in r["segmentos"] for w in s["palavras"] if w["w"]]

    # ── 5. transcrição trecho a trecho; o ouvido alinha o texto aprovado ─────────────────────────────────────────────
    print()
    C.VOCAB.update(canon(t) for f in falas for t in C.tokens(f["texto"]))   # sigla que existe como palavra no roteiro fica palavra
    T = []
    soma_recortes = 0
    for f in falas:
        t0 = time.time()
        a_q, b_q = round(f["start"] * 100), round(f["end"] * 100)       # quadros de 10 ms (os tempos do narrar são múltiplos)
        if abs(a_q / 100 - f["start"]) > 1e-6 or abs(b_q / 100 - f["end"]) > 1e-6:
            return laudo_curto("reprovado", [{"nome": "trechos", "ok": False, "detalhe":
                f"o trecho {f['trecho']} não começa/termina num múltiplo de 10 ms ({f['start']}–{f['end']})"}], avisos)
        e = som.db[a_q:b_q]
        com_som = np.nonzero(e > LIMIAR_SOM_DBFS)[0]
        if not len(com_som):
            return laudo_curto("reprovado", [{"nome": "trechos", "ok": False, "detalhe":
                f"o trecho {f['trecho']} não tem som acima de {LIMIAR_SOM_DBFS} dBFS"}], avisos)
        lo, hi = (a_q + com_som[0]) / 100, (a_q + com_som[-1] + 1) / 100
        cortes = recortar(som, a_q, b_q, avisos)
        recs, words_trecho = [], []
        for ra, rb in cortes:
            am = a16[ra * TAXA_WHISPER // 100: rb * TAXA_WHISPER // 100]
            chave = sha_amostras(am)
            r = cache_rec.get(chave)
            if r is None:
                r = {"trecho": f["trecho"], "start": round(ra / 100, 2), "end": round(rb / 100, 2), "amostras": int(len(am)),
                     "amostras_sha256": chave, **whisper(am, detectar=True)}
                novas["recortes"] += 1
            else:
                r = {**r, "trecho": f["trecho"], "start": round(ra / 100, 2), "end": round(rb / 100, 2)}
            recs.append(r); usados_rec.append(r)
            soma_recortes += rb - ra
            for s in r["segmentos"]:
                for w in s["palavras"]:
                    if w["w"]:
                        words_trecho.append({"w": w["w"], "start": float(ra / 100 + w["start"]), "end": float(ra / 100 + w["end"]), "p": float(w["p"])})
        unidades = unidades_whisper(words_trecho)
        palavras = f["texto"].split(" ")
        res, ecos, blocos = alinhar(palavras, unidades, lo, hi)
        T.append({"f": f, "lo": lo, "hi": hi, "cortes": cortes, "recs": recs, "words_trecho": words_trecho, "unidades": unidades,
                  "palavras": palavras, "res": res, "ecos": ecos, "blocos": blocos, "pausas": pausas_internas(som, lo, hi),
                  "el": el_por_trecho[f["trecho"]]})
        fontes = {k: sum(1 for r in res if r["fonte"] == k) for k in ("casada", "repartida", "trocada", "interpolada")}
        print(f"trecho {f['trecho']:>2}: {f['end'] - f['start']:5.2f} s" + (f" em {len(recs)} recortes" if len(recs) > 1 else "")
              + f" · {len(palavras)} palavras · Whisper {len(words_trecho)} · casadas {fontes['casada']}, repartidas {fontes['repartida']}, "
              f"trocadas {fontes['trocada']}, sem par {fontes['interpolada']}" + (f", a mais {len(ecos)}" if ecos else "")
              + f" · {time.time() - t0:.0f} s", flush=True)
    gravar_cache()                                       # a parte cara fica salva antes de qualquer outra coisa
    print(f"transcrição: {novas['recortes']} recortes transcritos agora, {len(usados_rec) - novas['recortes']} do cache")

    # ── 6. δ da base: a ElevenLabs contra o som, nas pontas dos trechos ──────────────────────────────────────────────
    difs = [t["lo"] - (t["f"]["start"] + t["el"]["palavras"][0]["sl"]) for t in T]
    DELTA = round(float(np.median(difs)), 3)
    if not DELTA_EL_FAIXA[0] <= DELTA <= DELTA_EL_FAIXA[1]:
        return laudo_curto("reprovado", [{"nome": "base_de_tempo", "ok": False, "detalhe":
            f"a ElevenLabs e o som discordam demais nas pontas dos trechos (δ mediano {DELTA:+.3f} s, fora de {DELTA_EL_FAIXA}): "
            f"o alinhamento é de outro áudio?"}], avisos)
    for t in T:
        s0 = t["f"]["start"]
        t["base"] = [(s0 + p["sl"] + DELTA, s0 + p["el"] + DELTA) for p in t["el"]["palavras"]]
        d = t["el"]["duracao_alinhamento_s"] - (t["el"]["duracao_pcm_s"] or t["el"]["duracao_alinhamento_s"])
        if abs(d) > 0.005:
            avisos.append(f"trecho {t['f']['trecho']}: o alinhamento da ElevenLabs mede {d:+.2f} s em relação ao PCM; "
                          f"limitado ao som do trecho ({t['lo']:.2f}–{t['hi']:.2f} s)")

    # ── 7. fronteira de cada pausa: regra, ElevenLabs e, quando preciso, o ouvido ────────────────────────────────────
    fronteiras = []
    for t in T:
        palavras, n = t["palavras"], len(t["palavras"])
        tp = [tokens_palavra(p) for p in palavras]
        t["tp"] = tp
        alt_ult, alt_pri = {}, {}                      # a grafia do ouvido local nas pontas dos blocos trocados
        for bl in t["blocos"]:
            h = tokens_palavra(bl["ouvido"])
            if h: alt_ult[bl["js"][-1]], alt_pri[bl["js"][0]] = h[-1], h[0]
        for p in t["pausas"]:
            i_r, i_e = fronteira_regra(t["res"], palavras, p), fronteira_el(t["base"], p)
            reg = {"trecho": t["f"]["trecho"], "pausa": [round(p[0], 2), round(p[1], 2)], "regra": i_r, "elevenlabs": i_e}
            propostas = [b for b in (i_r, i_e) if b is not None]
            if not propostas:
                reg.update(fronteira=None, situacao="ignorada", como="nenhuma fronteira de palavra perto: pausa de dentro de uma palavra")
            elif len(set(propostas)) == 1 and len(propostas) == 2 and tem_pista(palavras, propostas[0]):
                reg.update(fronteira=propostas[0], situacao="consenso", como="regra e ElevenLabs concordam, com pontuação")
            else:
                antes = ouvir(max(0.0, p[0] - OUVIDO_JANELA_S), (p[0] + p[1]) / 2, "fronteira: antes da pausa")
                depois = ouvir((p[0] + p[1]) / 2, p[1] + OUVIDO_JANELA_S, "fronteira: depois da pausa")
                ta, td = tokens_ouvidos(antes), tokens_ouvidos(depois)
                b, como, nota = julgar_pelo_ouvido(tp, propostas, ta, td, n, alt_ult, alt_pri)
                # só o ouvido decide aqui: confirmou a proposta comum (ou a única), escolheu uma de duas, ou achou
                # outra; o que ele não decide fica indecidido (reprova o portão relogio)
                if b is None: situacao = "indecidido"
                elif b not in propostas: situacao = "corrigida"
                elif len(set(propostas)) == 1: situacao = "conferida"
                else: situacao = "desempatada"
                reg.update(fronteira=b, situacao=situacao, como=como,
                           ouvido={"antes": " ".join(w["w"] for w in antes[-4:]), "depois": " ".join(w["w"] for w in depois[:4]),
                                   "notas": {palavras[k] + " | " + palavras[k + 1]: v for k, v in sorted(nota.items())}})
            for k in ("regra", "elevenlabs", "fronteira"):
                if reg.get(k) is not None: reg[k + "_palavras"] = f"{palavras[reg[k]]} | {palavras[reg[k] + 1]}"
            fronteiras.append(reg)
            reg["_p"] = p
    # âncoras por trecho: fronteiras decididas, em ordem. Duas pausas na MESMA fronteira não se juntam: entre duas
    # pausas sempre há som (senão seriam uma só), e juntá-las o deixaria sem palavra. Uma delas é de dentro de uma
    # palavra; qual, o relógio não sabe: a segunda fica indecidida, e o portão relogio reprova até alguém ouvir.
    for t in T:
        regs = [r for r in fronteiras if r["trecho"] == t["f"]["trecho"] and r["fronteira"] is not None]
        anc = []
        for r in regs:
            b, (p0, p1) = r["fronteira"], r["_p"]
            if anc and b == anc[-1][0]:
                e0, e1 = anc[-1][2], p0
                r["situacao"] = "indecidido"
                r["como"] += (f"; a pausa anterior ({anc[-1][1]:.2f}–{anc[-1][2]:.2f} s) já é esta fronteira, e entre as duas há "
                              f"{100 * som.fracao_som(e0, e1):.0f} % de som ({e0:.2f}–{e1:.2f} s): juntá-las deixaria esse som sem "
                              f"palavra (uma das duas pausas é de dentro de uma palavra?)")
            elif anc and b < anc[-1][0]:
                r["situacao"] = "incoerente"; r["como"] += f"; a fronteira vem antes da da pausa anterior ({anc[-1][1]:.2f} s)"
            else:
                anc.append((b, p0, p1))
        t["ancoras"] = anc
    for r in fronteiras: r.pop("_p", None)

    # ── 8. o relógio híbrido ──────────────────────────────────────────────────────────────────────────────────────────
    words_out, trechos_rel, trecho_de, vaos_fechados = [], [], [], []
    def ouvido_de_vao(t):
        """O ouvido para os vãos com voz sem vale do trecho t: o recorte longo (t["res"]) e um recorte curto em volta."""
        def ouvir_vao(j, vao):
            curto = ouvir(max(0.0, vao[0] - OUVIDO_JANELA_S), vao[1] + OUVIDO_JANELA_S, "vão com voz sem vale")
            return julgar_vao_pelo_ouvido(t["tp"], t["res"], j, vao, curto)
        return ouvir_vao
    for t in T:
        iv, marcas, vaos = montar_relogio(t["palavras"], t["base"], t["ancoras"], t["lo"], t["hi"], som, ouvido_de_vao(t))
        t["iv"], t["marcas"] = iv, marcas
        for v in vaos: vaos_fechados.append({"trecho": t["f"]["trecho"], **v})
        for w, (s, e) in zip(t["palavras"], iv):
            words_out.append({"w": w, "start": r3(s), "end": r3(e)}); trecho_de.append(t["f"]["trecho"])
        trechos_rel.append({"trecho": t["f"]["trecho"], "n": len(t["palavras"]), "som": [t["lo"], t["hi"]],
                            "ancoras": [(p0, p1) for _, p0, p1 in t["ancoras"]], "fracao_som": som.fracao_som})
    # a medida independente da montagem: onde o Whisper ouviu cada palavra casada, fora das pontas presas a âncora
    conc = {"inicio": [], "fim": [], "grosseiras": []}
    k0 = 0
    for t in T:
        for j, r in enumerate(t["res"]):
            if r["fonte"] != "casada": continue
            w, a = words_out[k0 + j], t["marcas"][j].get("ancora")
            for ponta, livre, rel_t, wh in (("início", a not in ("começo", "começo e fim"), w["start"], r["start"]),
                                            ("fim", a not in ("fim", "começo e fim"), w["end"], r["end"])):
                if not livre: continue
                d = rel_t - wh
                conc["inicio" if ponta == "início" else "fim"].append(d)
                if abs(d) > CONCORDANCIA_MAX_S:
                    conc["grosseiras"].append({"trecho": t["f"]["trecho"], "w": w["w"], "ponta": ponta, "relogio": rel_t,
                                               "whisper": r3(wh), "dif_s": r3(d)})
        k0 += len(t["palavras"])
    def resumo_dif(d):
        if not d: return {"n": 0, "mediana_s": 0.0, "abs_mediana_s": 0.0, "abs_p90_s": 0.0, "abs_max_s": 0.0}
        d = np.array(d); a = np.abs(d)
        return {"n": len(d), "mediana_s": r3(np.median(d)), "abs_mediana_s": r3(np.median(a)), "abs_p90_s": r3(np.percentile(a, 90)),
                "abs_max_s": r3(a.max()), "acima_de_0_5_s": int((a > 0.5).sum())}
    concordancia = {"inicio": resumo_dif(conc["inicio"]), "fim": resumo_dif(conc["fim"]), "grosseiras": conc["grosseiras"],
                    "leitura": "relógio menos Whisper, nas palavras casadas 1 a 1, fora das pontas presas a uma âncora do som. O "
                               "Whisper começa as palavras cedo (viés positivo) e comprime os números (até ~0,65 s no Juneau); "
                               f"acima de {CONCORDANCIA_MAX_S} s é palavra no lugar de outra, e o portão relogio reprova."}

    # ── 9. o conteúdo: o que o ouvido não casou com o roteiro, com a prova no som ─────────────────────────────────────
    itens, k0 = [], 0
    ecos_costura = []
    for t in T:
        f, palavras, iv = t["f"], t["palavras"], t["iv"]
        def prova(j0, j1, t_ini=None, t_fim=None):
            s = iv[j0][0] if t_ini is None else t_ini
            e = iv[j1][1] if t_fim is None else t_fim
            ouv = ouvir(max(f["start"], s - PROVA_MARGEM_S), min(f["end"], e + PROVA_MARGEM_S), "prova de conteúdo")
            tk = tokens_ouvidos(ouv)
            ref = [x for j in range(j0, j1 + 1) for x in t["tp"][j]]
            achou = any(tk[q:q + len(ref)] == ref for q in range(len(tk) - len(ref) + 1)) if ref else False
            return {"intervalo_s": [r3(s), r3(e)], "ouvido_no_recorte_curto": " ".join(w["w"] for w in ouv),
                    "recorte_curto_ouviu_o_roteiro": achou, "fracao_com_som": r3(som.fracao_som(s, e))}
        for r_j, r in enumerate(t["res"]):
            if r["fonte"] == "interpolada":
                itens.append({"trecho": f["trecho"], "tipo": "interpolada", "pede_aceite": True, "roteiro": r["w"], "ouvido": "",
                              "palavra": k0 + r_j, "no_trecho": [r_j], "prova": prova(r_j, r_j)})
        for b in t["blocos"]:
            js = b["js"]
            pede = len(js) >= 2 or not mesmas_letras(b["roteiro"], b["ouvido"])
            itens.append({"trecho": f["trecho"], "tipo": "bloco_trocado", "pede_aceite": pede, "roteiro": b["roteiro"], "ouvido": b["ouvido"],
                          "palavras": [k0 + j for j in js], "no_trecho": js,
                          "por_que": ("grafia do transcritor: só espaço/hífen muda" if not pede else
                                      ("2 ou mais palavras do roteiro" if len(js) >= 2 else "o ouvido escreveu outra coisa")),
                          "prova": prova(js[0], js[-1])})
        costuras = [ra / 100 for ra, _ in t["cortes"][1:]]
        for ec in t["ecos"]:
            # eco de costura: a última palavra de um recorte repetida no começo do seguinte (o Whisper, não a voz)
            viz = [u for u in t["unidades"] if u is not t["unidades"][ec["u"]] and abs(u["start"] - ec["start"]) < 1.5]
            if any(abs(ec["start"] - c) < 0.6 for c in costuras) and any(u["tokens"] == t["unidades"][ec["u"]]["tokens"] for u in viz):
                ecos_costura.append({"trecho": f["trecho"], "w": ec["w"], "start": r3(ec["start"])}); continue
            j = min(range(len(palavras)), key=lambda j: abs(iv[j][0] - ec["start"]))
            itens.append({"trecho": f["trecho"], "tipo": "a_mais", "pede_aceite": True, "roteiro": palavras[j], "ouvido": ec["w"],
                          "palavra": k0 + j, "no_trecho": [j], "prova": prova(j, j, ec["start"], ec["end"])})
        k0 += len(palavras)
    gravar_cache()

    # ── 9b. o que o Whisper não recebe: as pausas entre trechos, a tela_final e os cards, medidos no som ─────────────
    medidos_fora, com_som_fora = medir_fora_das_falas(som, som.x, SR, segmentos)   # som.x: o áudio, imune a um "x" de laço
    ouvido_fora = []
    for c in com_som_fora:
        # o que houver de voz ali vai ao ouvido (e à cobertura, como na pré-v1, que transcreve o arquivo inteiro)
        juntas = []
        for a, b in c["corridas_s"]:
            if juntas and a - juntas[-1][1] < 0.5: juntas[-1][1] = b
            else: juntas.append([a, b])
        for a, b in juntas:
            if b - a < OUVIR_FORA_MIN_S: continue
            for w in ouvir(max(c["start"], a - 0.2), min(c["end"], b + 0.2), "som fora das falas"):
                ouvido_fora.append({**w, "segmento": c.get("motivo") or c["tipo"]})
    if com_som_fora: gravar_cache()


    # ── 10. portões ───────────────────────────────────────────────────────────────────────────────────────────────────
    portoes = []
    ouvidas_brutas = sum(len(t["words_trecho"]) for t in T) + len(ouvido_fora)
    ouvidas_cobertura = [{"w": p, "start": r3(un["start"]), "end": r3(un["end"])} for t in T for un in t["unidades"] for p in un["ouvidas"]]
    ouvidas_cobertura += [{"w": p, "start": r3(un["start"]), "end": r3(un["end"])} for un in unidades_whisper(ouvido_fora) for p in un["ouvidas"]]
    ouvidas_cobertura.sort(key=lambda w: w["start"])
    portoes.append({"nome": "palavras", "ok": bool(ouvidas_brutas > 0),
                    "detalhe": f"{ouvidas_brutas} palavras ouvidas pelo Whisper ({len(ouvidas_cobertura)} contando os algarismos como o roteiro)"})
    fim_ouvida = max([w["end"] for t in T for w in t["words_trecho"]] + [w["end"] for w in ouvido_fora], default=0.0)
    dif = abs(DUR_DECODIFICADA - DUR_WAV)
    # os segmentos do narracao.json cobrem o arquivo sem buraco? (o Whisper recebe as falas; o resto, o fora_das_falas mede)
    buracos = []
    fim_ant = 0.0
    for s in segmentos:
        if abs(s["start"] - fim_ant) > 0.0105: buracos.append(f"{fim_ant:.3f}–{s['start']:.3f} s")
        fim_ant = s["end"]
    if abs(fim_ant - DUR_WAV) > 0.0105: buracos.append(f"{fim_ant:.3f}–{DUR_WAV:.3f} s (o fim do arquivo)")
    dur_whisper = soma_recortes / 100
    dur_fora = sum(m["end"] - m["start"] for m in medidos_fora)
    portoes.append({"nome": "duracao", "ok": bool(dif <= TOLERANCIA_DURACAO_S and not buracos and fim_ouvida <= DUR_WAV + TOLERANCIA_DURACAO_S),
                    "detalhe": (f"áudio decodificado {DUR_DECODIFICADA:.3f} s × WAV {DUR_WAV:.3f} s (diferença {dif:.3f} s; tolerância "
                                f"{TOLERANCIA_DURACAO_S} s): o arquivo lê inteiro. Isso não prova que o Whisper ouviu tudo: ele recebeu "
                                f"as {len(falas)} falas ({dur_whisper:.3f} s); o resto ({len(medidos_fora)} segmentos, {dur_fora:.3f} s) é "
                                f"medido no portão fora_das_falas; "
                                + (f"os segmentos do narracao.json cobrem o arquivo sem buraco ({dur_whisper + dur_fora:.3f} s)" if not buracos
                                   else f"BURACOS no narracao.json, que ninguém ouve nem mede: {', '.join(buracos[:5])}")
                                + f"; última palavra ouvida termina em {fim_ouvida:.3f} s")})
    portoes.append(portao_fora_das_falas(medidos_fora, com_som_fora, ouvido_fora))
    idiomas = [(t["f"]["trecho"], r["idioma_detectado"], r["idioma_prob"]) for t in T for r in t["recs"]]
    fora = [(tr, l, p) for tr, l, p in idiomas if l != idioma]
    portoes.append({"nome": "idioma", "ok": not fora,
                    "detalhe": (f"detect_language deu '{idioma}' nos {len(idiomas)} recortes (menor probabilidade "
                                f"{min(p for _, _, p in idiomas):.4f}); a transcrição foi pedida com language='{idioma}'")
                               if not fora else f"recortes com outro idioma detectado: {fora}"})
    def cobrir(aceitos_cob):
        cob_py = medir_cobertura_py(ouvidas_cobertura, narracao, aceitos_cob)
        cob_node, erro_node = medir_cobertura_pre_v1(PRE_V1, ouvidas_cobertura, narracao, aceitos_cob)
        chave = lambda c: [(t["trecho"], t["esperado"], t["obtido"], t["razao"], t["status"]) for t in c["trechos"]]
        if cob_node is not None:
            return cob_node, "medirCobertura da pré-v1 (Node)" + ("" if chave(cob_node) == chave(cob_py) else " (o port em Python DIVERGIU)"), \
                   (None if chave(cob_node) == chave(cob_py) else "a cobertura calculada aqui difere da do medirCobertura da pré-v1; vale a da pré-v1")
        return cob_py, f"port em Python do medirCobertura ({erro_node})", f"cobertura sem a função da pré-v1: {erro_node}"
    # 1ª conta sem aceite nenhum: os trechos fora de 0,9..1,1 viram itens (aceitos item a item, como o conteúdo)
    cobertura, conta, aviso_cob = cobrir(set())
    itens_cob = [{"trecho": t["trecho"], "tipo": "cobertura", "pede_aceite": True, "roteiro": t.get("texto_roteiro"),
                  "ouvido": t.get("texto_ouvido"), "palavras": [t["esperado"], t["obtido"]]}
                 for t in cobertura["trechos"] if t["status"] != "ok"]
    aceites, herdados_sem_item = resolver_aceites(itens + itens_cob, herdados, set(aceitar), ACEITE_POR, ACEITE_COMO, AGORA,
                                                  pendentes_antes=pendentes_antes, visto_em=visto_em)
    for it in itens + itens_cob:                         # (nunca "x": é o áudio)
        if it.get("aceite_recusado"):
            avisos.append(f"--aceitar={it['trecho']} NÃO aceitou t{it['trecho']} {it['tipo']}: roteiro \"{str(it.get('roteiro'))[:60]}\" × "
                          f"ouvido \"{str(it.get('ouvido'))[:60]}\": {it['aceite_recusado']}")
    aceitos_cob = {x["trecho"] for x in itens_cob if x.get("situacao") == "aceito"}
    if avisos_heranca and any(x.get("situacao") == "pendente" for x in itens + itens_cob): avisos.extend(avisos_heranca)
    if aceitos_cob: cobertura, conta, aviso_cob = cobrir(aceitos_cob)   # a pré-v1 marca "aceito" nos trechos aceitos
    if aviso_cob: avisos.append(aviso_cob)
    for h in herdados_sem_item:
        avisos.append(f"aceite anterior sem item igual nesta rodada (a transcrição mudou?), descartado: t{h['trecho']} {h['tipo']}: "
                      f"roteiro \"{str(h.get('roteiro'))[:60]}\" × ouvido \"{str(h.get('ouvido'))[:60]}\"")
    for item in itens:                                   # (nunca "x": é o áudio)
        if item["pede_aceite"]:
            ac = item.get("aceite") or {}
            avisos.append(f"t{item['trecho']} {item['tipo']}: roteiro \"{item['roteiro']}\" × ouvido \"{item['ouvido']}\" "
                          f"(recorte curto: \"{item['prova']['ouvido_no_recorte_curto']}\"; "
                          f"{'ouviu' if item['prova']['recorte_curto_ouviu_o_roteiro'] else 'NÃO ouviu'} o roteiro) — "
                          + (f"aceito{' (herdado do laudo anterior, item idêntico)' if ac.get('herdado') else ''}: por {ac.get('por')}; "
                             f"como {ac.get('como')}" if item["situacao"] == "aceito" else f"PENDENTE: confira no som; se certo, --aceitar={item['trecho']}"))
    suspeitos = [t for t in cobertura["trechos"] if t["status"] == "suspeito"]
    aceitos_cob_l = [t["trecho"] for t in cobertura["trechos"] if t["status"] == "aceito"]
    for c in cobertura.get("emCard", []):
        avisos.append(f"palavra \"{c['w']}\" em {c['start']:.2f} s, dentro do silêncio do card \"{c['card']}\"")
    portoes.append({"nome": "cobertura", "ok": not suspeitos,
                    "detalhe": (f"trechos suspeitos: {', '.join(str(t['trecho']) for t in suspeitos)}" if suspeitos
                                else f"{len(cobertura['trechos'])} trechos dentro de {COBERTURA_MIN}..{COBERTURA_MAX}"
                                + (f" (aceitos após escuta: {', '.join(map(str, aceitos_cob_l))})" if aceitos_cob_l else "")) + f" — {conta}"})
    portoes.append(portao_conteudo(itens))
    esperadas = sum(contar_palavras(f["texto"]) for f in falas)
    aceites_vaos, herdados_vaos_sem_vao, vaos_sem_vao = resolver_aceites_vaos(
        vaos_fechados, herdados_vaos, set(aceitar_vaos), ACEITE_POR, ACEITE_COMO, ACEITE_EVIDENCIA, AGORA,
        pendentes_antes=pendentes_vaos_antes, visto_em=visto_em)
    for v in vaos_fechados:
        if v.get("aceite_recusado"):
            avisos.append(f"--aceitar-vaos={inicio_vao(v)} NÃO aceitou o vão \"{v['entre']}\" ({v['vao_s'][0]}–{v['vao_s'][1]}, "
                          f"fechado em {v['fechado_em']}): {v['aceite_recusado']}")
    for h in herdados_vaos_sem_vao:
        avisos.append(f"aceite de vão anterior sem vão igual nesta rodada (o relógio mudou?), descartado: \"{h.get('entre')}\" "
                      f"{h.get('vao_s')} fechado em {h.get('fechado_em')}")
    if vaos_sem_vao:
        avisos.append(f"--aceitar-vaos={','.join(vaos_sem_vao)}: nenhum vão começa aí (o início vem com 2 casas, da linha do portão).")
    for v in vaos_fechados:
        if not vao_pede_aceite(v): continue
        ac, o = v.get("aceite") or {}, v.get("ouvido") or {}
        avisos.append(f"vão sem vale t{v['trecho']} \"{v['entre']}\" {v['vao_s'][0]}–{v['vao_s'][1]} ({v['dur_s']:.2f} s), fechado em "
                      f"{v['fechado_em']} ({'borda escolhida pelo ouvido, lado ' + str(o.get('lado')) if o.get('decidiu') else 'quadro mais quieto'}"
                      f"; o mais quieto do vão em {o.get('mais_quieto_em', v['fechado_em'])}) — "
                      + (f"aceito{' (herdado do laudo anterior, vão idêntico)' if ac.get('herdado') else ''}: por {ac.get('por')}; "
                         f"como {ac.get('como')}" if v.get("situacao") == "aceito"
                         else f"PENDENTE: confira a borda no som; se certa, --aceitar-vaos={inicio_vao(v)}"))
    p_rel, _ = portao_relogio(words_out, trechos_rel, segmentos, esperadas, fronteiras, som=som, vaos=vaos_fechados,
                              concordancia=concordancia)
    portoes.append(p_rel)
    precisam = {x["trecho"] for x in itens + itens_cob if x["pede_aceite"]}
    sobra = sorted(set(aceitar) - precisam)
    if sobra: avisos.append(f"--aceitar={','.join(map(str, sobra))}: esses trechos não tinham nada a aceitar.")
    # "aceitos" tem o sentido da pré-v1: trechos cuja COBERTURA fora de 0,9..1,1 foi aceita. O transcrever.mjs herda essa
    # lista por trecho enquanto o sha256 for o mesmo; pôr aqui um aceite de conteúdo daria o trecho inteiro por ouvido.
    aceitos = sorted(aceitos_cob_l)
    reprovados = [p for p in portoes if p["ok"] is False]
    status = "reprovado" if reprovados else "aprovado"

    # ── 11. qualidade (medida, não portão) ────────────────────────────────────────────────────────────────────────────
    silenciosas = []
    for w, tr in zip(words_out, trecho_de):
        fr = 1 - som.fracao_som(w["start"], w["end"])
        if fr >= SILENCIO_PALAVRA: silenciosas.append({"trecho": tr, "w": w["w"], "start": w["start"], "end": w["end"], "fracao_em_silencio": r3(fr)})
    for s in silenciosas:
        avisos.append(f"t{s['trecho']} \"{s['w']}\" {s['start']}–{s['end']}: {100 * s['fracao_em_silencio']:.0f} % do intervalo em silêncio")
    hf = espectro_chiado(som.x, SR)
    chiado = marcos_de_chiado(hf, SR, words_out, trecho_de)
    el_puro = [{"w": w, "start": s, "end": e} for t in T for w, (s, e) in zip(t["palavras"], t["base"])]
    chiado_el = marcos_de_chiado(hf, SR, el_puro, trecho_de)

    # ── 12. saídas ───────────────────────────────────────────────────────────────────────────────────────────────────
    # transcript.txt: o que o Whisper OUVIU, na ordem do áudio (como o texto corrido do Scribe na pré-v1). Sempre sai: é
    # o que se lê para entender uma reprovação. O texto aprovado está no words.json e no narracao.json.
    ouvido_corrido = [(r["start"], s["texto"]) for t in T for r in t["recs"] for s in r["segmentos"]]
    ouvido_corrido += [(w["start"], w["w"]) for w in ouvido_fora]
    gravar(arq_texto, re.sub(r"\s+", " ", " ".join(tx for _, tx in sorted(ouvido_corrido, key=lambda z: z[0]))).strip() + "\n")
    if status == "aprovado":
        gravar(arq_words, json.dumps(words_out, ensure_ascii=False, separators=(",", ":")))
    elif arq_words.exists():
        arq_words.unlink()                               # um relógio velho não fica ao lado de um laudo reprovado
    extra = {}
    for t in T:
        fontes = {k: sum(1 for r in t["res"] if r["fonte"] == k) for k in ("casada", "repartida", "trocada", "interpolada")}
        ref_t = [x for tp in t["tp"] for x in tp]
        hip_t = [x for un in t["unidades"] for x in un["tokens"]]
        iguais = sum(b.size for b in SequenceMatcher(None, ref_t, hip_t, autojunk=False).get_matching_blocks())
        extra[t["f"]["trecho"]] = {"som": [round(t["lo"], 2), round(t["hi"], 2)], "recortes": [[r["start"], r["end"]] for r in t["recs"]],
                                   "obtido_bruto": len(t["words_trecho"]), "tokens_iguais": f"{iguais}/{len(ref_t)}", "fontes_do_ouvido": fontes,
                                   "pausas_ancora": len(t["ancoras"])}
    for tr in cobertura["trechos"]:
        tr.update(extra[tr["trecho"]])
        cont = [{"tipo": x["tipo"], "roteiro": x["roteiro"], "ouvido": x["ouvido"], "situacao": x["situacao"]}
                for x in itens if x["trecho"] == tr["trecho"]]
        if cont: tr["conteudo"] = cont                  # o status (a cobertura) é o da pré-v1; o conteúdo vai aqui
    trechos_audit = []
    k0 = 0
    for t in T:
        trechos_audit.append({"trecho": t["f"]["trecho"], "start": t["f"]["start"], "end": t["f"]["end"], "som": [t["lo"], t["hi"]],
                              "ancoras": [[b, t["palavras"][b], p0, p1] for b, p0, p1 in t["ancoras"]],
                              "palavras": [{"w": w, "start": words_out[k0 + j]["start"], "end": words_out[k0 + j]["end"],
                                            "elevenlabs": [r3(t["base"][j][0]), r3(t["base"][j][1])],
                                            "whisper": [r3(t["res"][j]["start"]), r3(t["res"][j]["end"])],
                                            "fonte_do_ouvido": t["res"][j]["fonte"], "ouvido": t["res"][j]["ouvido"], **t["marcas"][j]}
                                           for j, w in enumerate(t["palavras"])]})
        k0 += len(t["palavras"])
    gravar_cache(trechos_audit)
    conta_fr = lambda s: sum(1 for r in fronteiras if r["situacao"] == s)
    laudo = {
        "schemaVersion": 1,
        "proj": proj,
        "status": status,
        "audio": audio_laudo,
        "pedido": {**PEDIDO_WHISPER, "unidade": "um trecho do narracao.json por vez", "recorte_max_s": RECORTE_MAX_S,
                   "limiar_som_dbfs": LIMIAR_SOM_DBFS,
                   "normalizacao": "comparar-narracao.py (tokens/verbalizar, MESMO_SOM nos dois lados)",
                   "relogio": {"base": "alinhamento por caractere da ElevenLabs (só as letras) + δ medido", "pausa_ancora_s": PAUSA_ANCORA_S,
                               "vao_max_s": VAO_MAX_S, "vao_fechar_s": VAO_FECHAR_S, "vao_teto_s": VAO_TETO_S, "vale_min_db": VALE_MIN_DB,
                               "concordancia_max_s": CONCORDANCIA_MAX_S, "grafia_perto": GRAFIA_PERTO,
                               "dur_min_palavra_s": DUR_MIN_PALAVRA_S, "ouvido_janela_s": OUVIDO_JANELA_S, "prova_margem_s": PROVA_MARGEM_S,
                               "vao_ouvido_folga_s": VAO_OUVIDO_FOLGA_S, "vao_ouvido_alcance_s": VAO_OUVIDO_ALCANCE_S}},
        "resposta": {"arquivo": rel(ARQ_CACHE), "requestId": None, "language_code": idioma,
                     "language_probability": round(min(p for _, _, p in idiomas), 4), "audio_duration_secs": round(DUR_DECODIFICADA, 3),
                     "soma_dos_recortes_s": round(soma_recortes / 100, 3), "recortes": len(idiomas),
                     "fora_das_falas_medido_s": round(dur_fora, 3),
                     "sobre_a_duracao": "audio_duration_secs é o arquivo inteiro decodificado; o Whisper recebeu só as falas "
                                        "(soma_dos_recortes_s), e o resto foi medido por energia (portão fora_das_falas)"},
        "portoes": portoes,
        "trechos": cobertura["trechos"],
        "aceitos": aceitos,
        "aceites": aceites,
        "aceites_vaos": aceites_vaos,
        "sobre_aceitos": SOBRE_ACEITOS,
        "sobre_aceites_vaos": ("cada vão com voz acima de vao_teto_s SEM vale no som que alguém conferiu no som, por fora deste "
                               "script, e aceitou com --aceitar-vaos (a chave: trecho, par, vão e fechamento); herdado só pelo "
                               "vão idêntico do mesmo áudio. O ouvido (vaos_com_voz_fechados[].ouvido) só escolhe a borda: não é prova."),
        "sem_cobertura": None,
        "avisos": avisos,
        "saidas": {"words": rel(arq_words) if status == "aprovado" else None, "transcript": rel(arq_texto),
                   "transcript_conteudo": "o texto que o Whisper local ouviu, recorte a recorte, na ordem do áudio e na grafia dele "
                                          "(algarismos, as grafias do transcritor), como o texto corrido do Scribe na pré-v1; as "
                                          "palavras do words.json são as do texto aprovado (fonte_das_palavras)",
                   "whisper": rel(ARQ_CACHE)},
        "fonte_das_palavras": ("w: o texto aprovado (narracao.json › segmentos[].texto = a cópia para a voz, out/<proj>/roteiro.md), "
                               "na grafia dela: números por extenso e aliases de pronúncia; algarismo e grafia de tela não estão no "
                               "words.json. Tempo: o alinhamento por caractere da ElevenLabs "
                               "(só as letras, + δ), com as pontas dos trechos e as pausas-âncora presas ao som; a fronteira de cada "
                               "pausa pela regra e pela ElevenLabs, e pelo ouvido (Whisper em recorte curto) quando discordam ou não há "
                               "pontuação. O Whisper local é o ouvido do conteúdo: cobertura, palavras puladas, trocadas e a mais. "
                               "As divergências entre o que a voz disse e o texto aprovado estão em alinhamento.conteudo, não no words.json."),
        "alinhamento": {
            "palavras": len(words_out),
            "base": {"arquivo": rel(ARQ_EL), "sha256": sha_el, "delta_s": DELTA,
                     "delta_como": f"mediana, nos {len(T)} trechos, de (começo do som − começo da 1ª letra da ElevenLabs)",
                     "delta_por_trecho": {"min": r3(min(difs)), "mediana": DELTA, "max": r3(max(difs))}},
            "fontes_do_ouvido": {k: sum(x["fontes_do_ouvido"][k] for x in extra.values()) for k in ("casada", "repartida", "trocada", "interpolada")},
            "fronteiras": {"pausas": len(fronteiras), "consenso": conta_fr("consenso"), "conferidas": conta_fr("conferida"),
                           "desempatadas": conta_fr("desempatada"), "corrigidas": conta_fr("corrigida"),
                           "nao_confirmadas": conta_fr("nao_confirmada"), "ignoradas": conta_fr("ignorada"),
                           "indecididas": conta_fr("indecidido"), "incoerentes": conta_fr("incoerente")},
            "fronteiras_desempatadas": [r for r in fronteiras if r["situacao"] not in ("consenso",)],
            "conteudo": itens,
            "cobertura_itens": itens_cob,
            "ecos_de_costura": ecos_costura,
            "fora_das_falas": {"medidos": len(medidos_fora), "com_som": com_som_fora, "ouvido": ouvido_fora},
            "vaos_com_voz_fechados": vaos_fechados,
            "concordancia_com_o_whisper": concordancia,
            "qualidade": {"palavras_com_80pct_ou_mais_em_silencio": silenciosas,
                          "deslocadas_refeitas": sum(1 for t in T for m in t["marcas"] if m.get("deslocada")),
                          "vaos_com_voz_fechados": len(vaos_fechados),
                          "comecam_onde_a_voz_volta": [words_out[k]["w"] + f" {words_out[k]['start']}" for k, m in enumerate(m for t in T for m in t["marcas"]) if m.get("comeca_onde_a_voz_volta")],
                          "marcos_de_chiado": chiado, "marcos_de_chiado_so_elevenlabs": chiado_el},
        },
        "ferramenta": {"script": rel(Path(__file__)), "sha256": sha256_arquivo(__file__),
                       "comparar": {"arquivo": rel(arq_comparar), "sha256": sha256_arquivo(arq_comparar)}},
        "gerado_em": datetime.now(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z"),
    }
    gravar(arq_laudo, json.dumps(laudo, ensure_ascii=False, indent=2) + "\n")

    # ── 13. resumo ───────────────────────────────────────────────────────────────────────────────────────────────────
    razoes = [t["razao"] for t in cobertura["trechos"] if t["razao"] is not None] or [0.0]
    print(f"\n== {status.upper()} · {len(words_out)} palavras (roteiro: {esperadas}) em {len(falas)} trechos · δ da base {DELTA:+.3f} s · "
          f"cobertura de {min(razoes):.3f} a {max(razoes):.3f}")
    for p in portoes: print(f"  {'✓' if p['ok'] else '✗'} {p['nome']}: {p['detalhe']}")
    for a in avisos: print(f"  aviso: {a}")
    fr = laudo["alinhamento"]["fronteiras"]
    print(f"  fronteiras: {fr}")
    for r in laudo["alinhamento"]["fronteiras_desempatadas"]:
        print(f"    t{r['trecho']} {r['pausa'][0]:.2f}–{r['pausa'][1]:.2f} {r['situacao']:<11} → {r.get('fronteira_palavras')} "
              f"(regra: {r.get('regra_palavras')}; EL: {r.get('elevenlabs_palavras')}; {r['como']})")
    q = laudo["alinhamento"]["qualidade"]
    print(f"  qualidade: {len(q['palavras_com_80pct_ou_mais_em_silencio'])} palavras com 80 % ou mais em silêncio; "
          f"{q['deslocadas_refeitas']} deslocadas refeitas; {q['vaos_com_voz_fechados']} vãos com voz fechados; chiado {q['marcos_de_chiado']}")
    print(f"  transcrição nesta rodada: {novas['recortes']} recortes e {novas['curtos']} recortes curtos transcritos agora; o resto do cache")
    print(f"  saídas: {', '.join(rel(p) for p in (arq_words, arq_texto, arq_laudo) if p.exists())} e {rel(ARQ_CACHE)}")
    print(f"  tempo total: {time.time() - T0:.0f} s")
    return 0 if status == "aprovado" else 1

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
