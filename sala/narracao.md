# `sala/narracao.md`, da Sala de controle

Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: `out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, `sala/CLAUDE-completo.md`.

A cadeia que produz o master e a narração inteira: a voz, o v3 e o v4, como se gera, a conferência, o tratamento, o gasto da ElevenLabs; os itens 1, 2, 3 (o ouvido e os limites) e 9 da pré-v1.


## O que a Régie faz — e o que ainda não faz (do CLAUDE.md)

**Na v0.1.0, as estações determinísticas continuam vazias** (a pré-v1 tem código para elas: veja "Peças da pré-v1 em uso"). `ingest` (transcrever), `render`
(Chrome + ffmpeg) e `finalize` (o XML de 5 camadas) não têm ofício nem código. Transcrição, render e
XML são trabalho que o canal faz aqui, até o motor os ter (`APRENDIZADOS.md` item 9). E nada na Régie
produz o master. O deste canal nasce assim:

1. pauta;
2. pesquisa com fontes;
3. roteiro em inglês (`marca/voz.md`);
4. narração: ElevenLabs, modelo eleven_v3 (decidido pelo Lucas em 24/09/2026; `canal.json` › `narracao`).
   - **A voz** (escolhida pelo Lucas em 26/09/2026, "a B é a melhor"): "Alpha Point - Narrator (conversational,
     calm)", `829pig94w9GefZ9jJQYl`. É um Remix calmo, feito pela API (`out/juneau/_pesquisa/remix-ritmo.mjs`, força
     0,3), da voz de conversa de 24/09 ("Alpha Point - Narrator (conversational)", `iAc9oLyb1zcwD4O3ZTBv`), que por
     sua vez é um Remix da âncora desenhada ("Alpha Point - Narrator (anchor, mid-30s)", `OjaLccTyGvBFh7nx0y4s`). A de
     conversa falava a ~200 palavras/min, e nenhum ajuste a desacelerava: velocidade, "Natural" e `[slowly]` o v3
     ignora. O ritmo vem da voz. A calma fez 171 no Juneau, e o Lucas preferiu assim a esticar (26/09). Fichas de
     cada voz: `marca/vozes.html`.
   - **Do vídeo 2 em diante, a voz ou o ajuste muda** (Lucas, 02/10/2026). No vídeo montado do Juneau, ele ouviu "diversas
     mudanças de tom com o decorrer do vídeo" e "transição abrupta também na fala", e sugeriu "utilizar uma voz padrão". O
     Juneau fica com a narração de 26/09: trocar agora refaria o relógio das 55 cenas. A pergunta foi se a troca valeria
     já; a resposta: "Sim, a mudança seria realmente apenas para o vídeo 2". A causa provável é o v3 em "Criativo"
     (`stability: 0`), com um pedido por parágrafo e sem "request stitching". A voz e o ajuste do vídeo 2 saem de um
     teste às cegas, com gasto que pede o ok dele. A medida do Juneau por parágrafo está em
     `out/juneau/_pesquisa/revisao-premiere-lucas.md` e em `out/juneau/_tmp/revisao-premiere/voz/`.
   - **O vídeo 2 vai no ElevenLabs v4** (Lucas, 07/10/2026: "Quero fazer um novo vídeo do zero, com um novo tema, hook de início
     mais "forte" e intrigante, utilizando Elevenlabs v4"). A API lista `eleven_v4` ("Our fastest and most emotive model") e
     `eleven_v4_turbo`, com até 10.000 caracteres por pedido (o v3 aceita 5.000), conferido em 07/10 por `GET /v1/models`, sem gasto.
     A voz e os ajustes no v4 saem do teste às cegas acima, dentro dos 15.000 créditos do vídeo. **Feito em 07/10/2026**: o `canal.json`
     › `narracao` está no v4 (a mesma voz, stability 0,5, pausa 0,25 s; o porquê em `narracao_v4_decidido`), e o `narrar.mjs` da pré-v1
     narrou o vídeo 2 inteiro no v4 (`out/los-angeles/_pesquisa/narracao-conferencia.md`). A voz fala a ~184 palavras/min no v4, acima
     dos 150–160 da marca; o Lucas ouviu e aceitou (07/10/2026: "ritmo ok"). Mais devagar pediria uma voz nova (o v4 ignora velocidade).
   - **Como se gera** (decidido pelo Lucas em 25–26/09): **pela API**, com
     `node C:\projetos\regie-v1\src\ferramentas\narrar.mjs <proj>`, **um pedido por parágrafo**. O roteiro fica em
     `out/<proj>/roteiro.md`, com parágrafos separados por linha em branco. Voz, modelo e ajustes vêm de
     `canal.json` › `narracao`: eleven_v3, `stability: 0` (o "Criativo" do site), `pausa_paragrafo_s: 0.07`.
     - A pausa: os trechos da API já trazem uns 0,06 s de silêncio no começo, e o que se ouve entre parágrafos fica
       nos ~0,14 s de uma leitura contínua. Com 0,2 a pausa dobrava, e foi isso que o Lucas mais ouviu como "outra
       voz" (teste às cegas de 26/09).
     - Pelo site, não: acima de ~2.000 caracteres o v3 pode parar antes do fim do texto, sem erro nenhum e numa
       fronteira de frase, o que soa como final natural (5 das 6 gerações longas de 24/09 cortaram).
     - O v3 não tem "request stitching": cada pedido é uma leitura nova.
     - O Multilingual v2 soou mais "lido" (24/09).
     - Rode primeiro o `--simular`, que mostra o custo sem gastar.
     - Em "Criativo", o v3 pode pular ou trocar palavra. Nenhuma geração é aceita sem conferir:
       `out/juneau/_pesquisa/conferir-paragrafos.py <proj>` transcreve e compara parágrafo por parágrafo, e
       `conferir-trechos.py` confere os pontos suspeitos em recorte curto.
     - Parágrafo com erro se refaz sozinho: `narrar.mjs <proj> --refazer=N`.
     - **Depois de qualquer rodada do narrar**, rode `python out/juneau/_pesquisa/tratar-narracao.py <proj>`. O narrar
       não esmaece as pontas dos trechos (estalo no fim de 14 dos 36 parágrafos do Juneau), e remonta a
       `narracao.wav` do zero a cada rodada. O script esmaece as pontas sem mudar tempos, registra o que fez em
       `narracao.json` › `tratamento_canal` e se recusa a tratar duas vezes. Por último, acrescenta a **cauda da tela
       final**: `canal.json` › `narracao.cauda_tela_final_s` (20 s, decidido pelo Lucas em 26/09) de silêncio depois
       da última frase, para os elementos finais do YouTube não cobrirem a narração. O `gerar-master.mjs` recusa
       narração cuja cauda não bate com o `canal.json`.
     - A API pode cortar o último som de um parágrafo (o "-y" de "ferry" no Juneau), e o Whisper escreve a palavra
       mesmo assim, por expectativa. Desconfie de última palavra com probabilidade baixa (< 0,8).
     - O histórico inteiro está em `out/juneau/_pesquisa/narracao-conferencia.md`.
   - A conta compartilhada da ElevenLabs serve a vários canais. O Lucas entra nela pelo navegador do app, e o
     Claude opera o site com ele vendo; nunca digite a senha dele.
   - **Do vídeo 2 em diante, até 15.000 créditos por vídeo sem pedir ok** (Lucas, 02/10/2026; "A autonomia do vídeo 2
     em diante"), com o gasto registrado e avisado depois. Acima disso, e no Juneau, vale o que segue. **No vídeo 2 (Los
     Angeles), sem teto:** o Lucas, 07/10/2026, 04:2x: "Você pode usar mais que 15 mil." O gasto continua registrado antes e
     depois de cada rodada e avisado no `#status`.
   - Gastar crédito pede o ok do Lucas. Gasto em 24/09, conferido no saldo: 2.433 nas amostras e na escolha
     da voz; 15.564 na narração do texto aprovado (o bloco 1 com quebras de linha, o teste sem quebras e os 3
     blocos em "Criativo"); 709 no teste do v2; 1.498 na prova do tom de conversa (teste com a voz anterior e o
     Remix); 11.028 na narração do texto aprovado com a voz em conversa (3 blocos em "Criativo", 2 versões de
     cada; o saldo foi de 3.088.067 a 3.077.039). Total de 31.232. Em 25/09, com o ok do Lucas, 4.553 para
     refazer os blocos 2 e 3 pela API: 4.324 nos 23 parágrafos e 229 no parágrafo 8 refeito. Os recibos batem
     com o contador da conta. A narração inteira pede um ok próprio. **Em 26/09 o Lucas liberou o gasto para chegar
     ao cenário ideal do Juneau** ("Não tem problema gastar crédito a troco de chegarmos no cenário ideal"): testes
     e a narração inteira pela API. Ainda assim, diga o que vai gastar antes de cada rodada. Gasto em 26/09: 2.673 no
     teste de velocidade, 2.781 em 3 rodadas de Remix, 1.083 no teste da voz calma escolhida, 6.621 na narração
     inteira do Juneau e 173 no parágrafo 32 refeito: 13.331 no dia (`narracao-conferencia.md`);
   - O navegador do app corta downloads grandes em uns 1,8 MB: o MP3 de um bloco chegou com 112 s de 4 min
     29 s. Para baixar a narração, use outro caminho (o Lucas baixa no navegador dele, ou a API).
5. master = a narração sobre tela preta 3840×2160 (`marca/identidade.md` §5).

Transcrição local disponível nesta máquina: `faster-whisper` (modelo large-v3, `word_timestamps=True`,
`language="en"`). Editor: Premiere Pro.


## Peças da pré-v1 em uso (desde 25/09/2026) (do CLAUDE.md)

1. **Baixar a narração pelo histórico da ElevenLabs** (`GET /v1/history?voice_id=…`, depois
   `GET /v1/history/{id}/audio`), com o leitor de chaves da pré-v1 (`src/lib/chaves.mjs`). A pré-v1 não baixa do
   histórico: o script é do canal. A chave está e funciona (25/09). O histórico da voz tem as 6 gerações de
   24/09, duas por bloco. Os blocos se reconhecem pela contagem de caracteres: 3.827 às 18:24, 3.735 às 18:26 e
   3.466 às 18:28, no horário de Brasília. O texto não vem na listagem. **Baixadas e conferidas em 25/09**
   (`out/juneau/_pesquisa/narracao-historico.mjs --baixar`, com o ok do Lucas). Só a **1b** está completa. As
   duas do bloco 2 e as duas do bloco 3 param antes do fim. **Os blocos 2 e 3 foram refeitos pela API em 25/09**
   (`out/juneau-voz/`, 23 parágrafos, todos completos). `out/juneau/_pesquisa/montar-narracao.py` junta a 1b com
   eles: `out/juneau/_narracao/narracao-completa.wav`, com 9:14. Na conferência do arquivo inteiro, 99,0 % das
   palavras batem com o texto aprovado, e nenhuma foi pulada. **O Lucas ouviu em 25/09: a voz muda em 3:09.** Pelo
   diagnóstico e pelo teste às cegas, o que pesava era a pausa entre parágrafos dobrada. Em 26/09, a narração foi
   remontada sem gasto com a pausa da 1b (9:11); o Lucas achou a troca "perceptível, mas nada muito incômodo".
   A voz corria a 200 palavras/min. **Tudo isso foi superado em 26/09:** a narração inteira foi refeita pela API com
   a voz calma, em `out/juneau/narracao.wav` (10:46, 171 palavras/min, os 36 parágrafos de um jeito só, tratada
   por `tratar-narracao.py`). Verificação final: 100 % das palavras; o parágrafo 32 foi refeito porque a API cortou
   o "-y" de "ferry". **O Lucas aprovou em 26/09** ("pode seguir com o master"). As gerações antigas (1b, `out/juneau-voz/`,
   `narracao-completa.wav`) ficam como histórico. Tudo em `narracao-conferencia.md`.
2. **`narracao.wav` e master preto sintético** pelo gerador da pré-v1 (`garantirMasterSintetico`, com carimbo).
   **Feito em 26/09:** `out/juneau/_pesquisa/gerar-master.mjs juneau` chama o gerador direto (o finalizar só o chama
   no fim), em 3840×2160 e 30 fps: `out/juneau/_media/_master.mp4`, com −14,1 LUFS e o carimbo da narração tratada. O script
   recusa narração sem `tratamento_canal`. Refeito no mesmo dia com a cauda da tela final: 11:06 (10:46 de fala e
   20 s de silêncio); a fala ficou idêntica, amostra por amostra. **O Juneau foi aberto na linha da Régie em 26/09**
   (`regie open juneau "Alaska Voted for a New Capital in 1974. It Was Never Built."`, no passo `ingest`).
   Cuidado: a v0.1.0 não tem `--help` nos verbos; `regie open --help` abre um vídeo chamado "--help". Aconteceu,
   e o registro foi removido do banco com cópia de segurança em `db/antes-de-tirar-help-*.canal.db`.
   - o faster-whisper local (large-v3, `language="en"`, só do cache local, sem rede) é o ouvido: confere o que a voz
     disse, decide a fronteira das pausas sem pontuação e mede a cobertura. Normaliza os números antes de comparar.

   O que a voz disse diferente do texto fica em `transcricao.json` › `alinhamento.conteudo`. `--aceitar=N` só aceita
   o que o laudo anterior do mesmo áudio mostrava pendente, depois de ouvir. Os 8 aceites do Juneau foram julgados
   pelo Whisper em recorte curto, sem escuta humana. No laudo, `aceitos` tem o sentido da pré-v1 (trechos com a
   cobertura aceita; no Juneau, nenhum) e `aceites` guarda cada item aceito.

   **Juneau, verificado em 26/09** (três verificadores: som, contrato e código): 52 fronteiras de pausa julgadas pelo
   som, todas certas; erro mediano de 0,03 s no miolo das frases (p90 0,075 s); nenhuma palavra em pausa nem na cauda;
   `mapa-limpo --conferir` passa. **Limites do script, para os próximos vídeos** (o relógio do Juneau não os tem, mas
   os portões não os pegariam):
   - uma pausa de 0,15 s ou mais DENTRO de uma palavra ainda pode passar como fronteira (o recorte curto larga o
     pedaço da palavra). Em teste com silêncio posto dentro de 4 palavras, 2 passaram;
   - repetição da voz ("I decided I decided") passa por tudo: o Whisper limpa a repetição. Só o ouvido humano pega;
     por isso a escuta do Lucas antes do master continua obrigatória;
   - a concordância com o Whisper tolera 1,0 s entre âncoras, e o consumidor tolera 0,25 s.
9. Do vídeo 2 em diante, **narração pela API** com `narrar.mjs` (mesma voz, modelo, estabilidade e blocos).
