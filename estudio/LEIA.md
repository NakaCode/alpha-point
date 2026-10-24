# estudio/ — o pacote do Alpha Point para o motor comum

Esta pasta é o **pacote de canal** do Alpha Point no formato do motor comum do estúdio (frente K, `top10-estudio`:
`canais/canal-motor.schema.json` e `scripts/lib/canal.mjs`). O motor lê o canal daqui; a produção de hoje (a Sala, os
setores, a Régie pré-v1) **não lê nada desta pasta** e continua igual até a virada. O Mateus o montou em 21–22/10/2026; a
Sala de controle do canal o pôs em dia em 24/10/2026 com as decisões do Lucas desse dia e a marca de 24/10 (relato em
`out/_maquina/motor-sem-rosto/pacote-24-10.md`, só nesta máquina).

Por que numa pasta e não na raiz: a raiz já tem o `canal.json` da Régie, que a produção atual lê. Depois da virada (a Sala
e os 5 setores viram uma conversa só), o pacote pode subir para a raiz.

| Arquivo | O que é |
|---|---|
| `canal.json` | o contrato do app (`estudio-canal/1`): marca, motores, saída no YouTube, bucket R2 (`qint-alpha-point`, na conta Cloudflare da Top10, um por canal: a Holding o criou em 22/out/2026 08:31Z, depois da resposta do Mateus de preferir um bucket ao Google Drive, às 08:29Z; a conta foi escolha da Holding) e membros |
| `canal-motor.json` | o que o motor precisa e o app não cobre (`estudio-canal-motor/1`): idioma, rosto, narração, master, portões, contas, a semente da obra e a trilha |
| `marcas/alpha-point/` | a roupa destilada de `marca/` (identidade, voz, superfícies, 16 roupas de agente, perfil de publicação); o `LEIA.md` dela traz a fonte e o sha256 de cada valor, e o que entrou em 24/10 |
| `semente/` | o que o motor copia para `<obra>/_media/marca/` antes da primeira etapa: `semente/marca/` é a cópia byte a byte de `marca/tokens.css` e `marca/fontes/`; `semente/motor.css` é do pacote (o crédito a 60 px); `semente/ORIGEM.json` tem o sha256 de cada arquivo |
| `conferir-copias.mjs` | confere que a semente e a roupa estão em dia com `marca/` (abaixo) |
| `pecas/` | a ferramenta das peças de cada vídeo para o master (vinheta, chamadas, começo da marca d'água), com teste |
| `musica/paleta.json` | a identidade sonora que a trilha automática usa |
| `PASSOS-DO-LUCAO.md` | o que só o Lucão faz, uma vez |

## Como o motor lê e como conferir

```
TOP10_CANAL_DIR=<clone do alpha-point>/estudio
node scripts/lib/canal.mjs --canal=<clone do alpha-point>/estudio conferir     # (no top10-estudio)
node estudio/conferir-copias.mjs                                               # (no alpha-point, da raiz)
```

- Conferido em 21/out/2026 contra o `origin/main` `9828329a1`: contrato do app e do motor válidos, travas de sócio
  satisfeitas (bucket próprio, pool `canal`, faixa 0/0/0, cobertura 100 %, sem M28/M32/M33), e o perfil de publicação
  válido. Sem achados desde 22/out/2026, quando a voz deixou de ser `$pendente`.
- **Conferido de novo em 24/out/2026**, com o pacote deste dia, contra o `top10-estudio` em `6253755` (o `canal.mjs`, o
  `entrada-cli.mjs`, o `validar-contrato.mjs` e os três schemas, exportados do clone por `git archive`, sem npm):
  `✓ pacote alpha-point (…/estudio) completo`, saída 0. A semente foi provada com o `semente.mjs` do próprio motor numa
  obra de teste: 15 arquivos copiados, nenhum sobrescrito na segunda vez, e uma cena que liga os dois CSS acha as quatro
  famílias e sai com `--fs-credito: 60px`.
- O `conferir-copias.mjs` sai 0 com a semente e a roupa em dia; 1 com a lista do que andou em `marca/`; `--copiar` refaz a
  semente. Rode-o antes de cada commit do pacote: a semente nunca sobrescreve na obra, então uma obra em curso fica com as
  letras com que nasceu, e uma cópia velha no pacote passaria para as obras seguintes.

## De onde vem cada valor do `canal-motor.json`

| Campo | Valor | Por quê |
|---|---|---|
| `idioma` | en-US | `canal.json` da raiz › `idiomas.origem` |
| `roteiro.fonte` | obra | narração sintética: o texto aprovado congelado na obra é o que vira voz (exigência do motor) |
| `rosto` | sem apresentador, 0/0/0, 100 %, sem M28/M32/M33 | faceless (`marca/identidade.md` §0 e §5) |
| `narracao.voice_id` | `829pig94w9GefZ9jJQYl` | a voz de hoje (`Alpha Point - Narrator`, `canal.json` da raiz). O canal fica na conta da ElevenLabs da Top10 com uma chave de conta de serviço só dele (`qint-alpha-point`), por decisão do Mateus (22/out/2026 01:03Z, repassada pela frente 15); a chave vai ao cofre do PC como `ELEVENLABS_API_KEY`. De 20 a 22/out o campo esteve `$pendente`, porque o plano era a conta própria do Lucas, para onde a voz de Voice Design não se leva |
| `model_id`, `voice_settings`, `output_format`, `language_code` | eleven_v4, 0,5/0,75, pcm_44100, en | `canal.json` da raiz › `narracao` (07/10/2026); `out/zona-do-canal/narracao.json` |
| `pausa_entre_trechos_s` | 0,25 | um pedido por parágrafo, pausa 0,25 s (`canal.json` › `narracao_v4_decidido`) |
| `cauda_s` | 20 | 20 s sem voz para a tela final (Lucas, 26/09/2026) |
| `cards` | nenhum | o canal não tem card de título nem capítulo na tela, só na descrição (Lucas, 26/09/2026). O `##` do roteiro aprovado vira marca invisível, sem vão e sem tela, com o instante no `narracao.json` (serve aos capítulos da descrição e às fronteiras da trilha); a pausa de 0,25 s atravessa a marca (frente K, `a438ed41a`). **O espelho sem card já está integrado**: o condutor passa `--sem-cards` ao espelho quando `cards` é `nenhum` (`scripts/sem-rosto/condutor.mjs:78`), e o espelho aceita zero cortes com ele (`scripts/decupagem/espelhar-agente.mjs:12,140-142`). O PEDIDO-QINT-MOTOR-SEM-CARDS-01 está atendido |
| `relogio` | tts+ouvido, faster-whisper large-v3 na CPU, Scribe de reserva | o caminho grátis do canal (`out/juneau/_pesquisa/ingest-local.py`, `APRENDIZADOS.md` item 37); CPU porque a placa não roda o faster-whisper («falta a cuBLAS 12»). **A reserva `scribe` fica** (Lucas, 24/10/2026, à pergunta «O relógio da narração no motor é o nosso, grátis. Se ele falhar, o motor usa o Scribe da ElevenLabs, que é pago (na conta do Top10). Fica assim?»: «Fica o Scribe (Recomendado)»): se o ouvido faltar, o relógio vai à Scribe paga sem perguntar (`narrador.mjs:222-224,314-318`), e a Sala confere a sincronia na revisão do vídeo pronto |
| `limites.caracteres_max_por_obra` | 30.000 | o teto do Lucas é 15.000 créditos de voz por vídeo (02/10/2026); o v4 mediu ~0,48 crédito por caractere (Zona e Peru), e 15.000 ÷ 0,48 ≈ 31.000 |
| `midia.caca_stock_assinado` | false | **sem banco pago no piloto** (Lucas, 24/10/2026, à pergunta «E o B-roll dos bancos pagos?»: «Sem banco no piloto (Recomendado)»). Não é mais trava de sócio: o motor deixa o sócio declarar o stock (`scripts/lib/canal.mjs:21-23`; o schema, linhas 317-320), e com `true` a caça roda na Green, com as contas do Top10 e sem a lista do Lucas. Com `false`, a cena que só esperaria footage sai em versão pronta (`scripts/sem-rosto/versao-pronta.mjs:20-37`), e o portão de publicar a nomeia e pede `--aceito-versao-pronta` (`portao.mjs:112-116`). Os quatro bancos da marca continuam no canal, fora do motor, só pelo navegador (o risco que o Mateus aceitou em 22/out/2026: «Vou usar Storyblocks e Envato aceitando o risco», às 06:00Z, e a Shutterstock e a Motion Array na resposta das 08:29Z; «só pelo navegador» é regra do estúdio Top10, não fala dele sobre este canal) |
| `master` | automático, −14 LUFS, −1 dBTP, 3840×2160 a 30 fps | o Premiere sai; hoje a voz sai a −19,7 LUFS e o Lucão sobe 5,5 dB na mão (≈ −14,2) |
| `master.trilha` | −40,5 dB sob o narrador, −40 dB sem voz | hoje a música vai a −35 dB constante no XML, do 0:00 ao fim (cauda incluída), e o Lucas sobe a voz 5,5 dB no Premiere (`out/zona-do-canal/_creditos-trilha.md`; «Subir a voz no Premiere», 15/10/2026). No master, o nível da trilha é ganho na faixa da música, e depois um loudnorm linear leva a MISTURA a −14 LUFS, subindo voz e música juntas (~5,7 dB com a voz a −19,7). Para a música ficar onde o Premiere a deixa, o ganho é −35 − 5,5 = −40,5 (frente K, 21/out/2026, que confirma com a medida quando o master fechar). Sem voz, −40 é o mínimo do schema (0,5 dB acima). Sem trecho sem trilha no começo. A frente A mede no PC do Lucas o loudness das 4 faixas do vídeo 3 quando o SSH abrir |
| `master.logo` | `../marca/logo/agulha/marca-dagua-4k.png` em quadro inteiro, opacidade 1, desde o fim da vinheta | a peça 3840×2160 já traz a marca no canto (x 3687–3773, y 67–153) com os 30 % embutidos (alfa máximo 76/255) e é o último quadro da vinheta (Lucas, 09 e 14/10/2026; `marca/identidade.md` §8). O começo vem de `_master/logo.json`, que a ferramenta das peças grava |
| `master.cta` e `master.pecas_da_obra` | `cta` vazio; `pecas_da_obra` = `pecas/pecas-da-obra.mjs` | as chamadas e a vinheta mudam por vídeo, então quem as grava é a ferramenta do canal (abaixo), que o motor roda antes do plano do master |
| `portoes` | pauta, roteiro, título e capa, publicar | o que fica com o Lucão (PLANO §3) |
| `contas_claude` | pool do canal, `claude.env`, **2 portas** | as contas Claude do próprio Lucão. À pergunta «Quais contas Claude o motor pode usar?», ele respondeu **«As duas»** (24/10/2026): a principal e a de reserva; quando uma bate no limite, o motor passa para a outra. Com 2 portas, o doctor da máquina exige `ANTHROPIC_AUTH_TOKEN` e `ANTHROPIC_AUTH_TOKEN_2` no `claude.env` do cofre (`scripts/sem-rosto/maquina/doctor.mjs:68`): os dois tokens entram pelo passo 4 do `PASSOS-DO-LUCAO.md`. O plano de cada conta ainda está por confirmar |
| `obra_semente` | `semente/marca` → `_media/marca`; `semente/motor.css` → `_media/marca/motor.css` | as cenas do canal ligam o `tokens.css` e as fontes, e no motor elas moram em `<obra>/graphics/`, longe de `marca/`. O motor recusa `..` no `de` (`scripts/sem-rosto/semente.mjs:30`; o schema, linha 673), então a cópia mora dentro do pacote, byte a byte, com o sha256 em `semente/ORIGEM.json`. A cena liga `../_media/marca/tokens.css` e, depois dele, `../_media/marca/motor.css` (a roupa diz isso a cada agente que desenha) |
| `musica` | `epidemic`, `EPIDEMIC_SOUND_API_KEY`, `musica/paleta.json`, 4 blocos | **a trilha automática, ligada em 24/10/2026** (abaixo) |

## O crédito a 60 px

O Lucas tinha decidido 56 px para todo crédito (07/10/2026). O motor cobra 60 de todo crédito, o de mapa inclusive
(`scripts/qc-tamanho.mjs`, linhas 21-23 e 66). À pergunta «O crédito de fonte na tela: o motor exige hoje no mínimo 60 px, e
você tinha decidido 56 px (07/10). Qual fica?», ele respondeu **«60 px (Recomendado)»** (24/10/2026, no chat da Sala).

- A cópia `semente/marca/tokens.css` não muda: ela tem de bater byte a byte com `marca/tokens.css`, que continua a 56 (os
  vídeos 2 a 4 saíram assim, e trocá-lo mexeria nos carimbos deles).
- O 60 vai em `semente/motor.css` (`--fs-credito: 60px; --piso-credito: 60px`; o teto continua `--teto-credito: 64px`),
  semeado em `<obra>/_media/marca/motor.css`. As roupas mandam ligá-lo **depois** do `tokens.css`, e o segundo vence.
- A roupa diz 60 em todo lugar em que fala de crédito. A identidade do canal registra o 60 do vídeo 5 em diante (a Sala,
  em `marca/identidade.md` §4.1).

## A ferramenta das peças (`pecas/pecas-da-obra.mjs`)

O motor roda `node pecas/pecas-da-obra.mjs <slug> --obra=<obra>` antes do plano do master e de novo quando a narração
muda. Ela grava, pelo gravador do próprio canal (`marca/cta/_capturar.mjs`, ProRes 4444 com alfa, 3840×2160, a
30000/1001, a régua do motor: o master compõe as peças pelo tempo e não converte a taxa delas):
- a **vinheta** (`marca/vinheta/vinheta.html`) sobre a assinatura do gancho, achada no `words-final.json`: de «You're»
  ao fim de «begins.» + 0,25 s, de 4 a 8 s. Com menos de 4 s grava 4 e avisa; com mais de 8 s, PARA (saída 2);
- as **chamadas** que o regente marcou: no motor ele as declara em `_regencia-auditoria-agente.json` e elas chegam a
  `regencia.json › auditoria._chamadas` (o topo, `regencia.json › _chamadas`, é o jeito da Régie e fica de reserva).
  Inscrição; comentário com a pergunta do vídeo, do `q` da linha ou de `textos-tela.json › pergunta_cta`. Linha com
  `estado` (pendente com o Lucas) não entra;
- `_master/sobreposicoes.json`, `_master/logo.json` (`desde_s` = fim da vinheta) e um recibo com os sha256.

Provado em 21/out/2026 no Mac (Chrome do Mac por `CHROME_PATH`) com a obra do vídeo 3 (as palavras, a regência e os
textos de tela da Zona do Canal): a vinheta saiu em 59,50 s com 5,12 s, o mesmo número que o regente calculou à mão
naquele vídeo (palavras 163 a 181); a inscrição entrou em 342,96 s; o comentário, pendente com o Lucas, ficou de fora.
154 + 135 quadros em 85 s. Refeito em 21/out a 30000/1001 e com as chamadas em `auditoria._chamadas`, como o motor as entrega:
153 + 135 quadros (`r_frame_rate=30000/1001`), e a duração declarada de cada peça é a do arquivo (quadros ÷ taxa), então
a marca d'água começa no instante exato em que a vinheta acaba (64,6051 s; vão zero). A emenda vinheta → marca d'água: na área do canto (140 × 140 px), a maior diferença entre o
último quadro e o PNG é de 10 a 11/255, em 275 a 343 pixels (acima de 8, de 1 a 9), sobre fundos escuro, médio e claro;
é o arredondamento do ProRes 12 bits. Testes: `node --test estudio/pecas/pecas-da-obra.test.mjs` (6 casos, sem Chrome
nem rede, com os controles: sem assinatura e assinatura longa param; 6 de 6 em 24/10/2026, no PC do Lucas).

**O que ela ainda não confere** (o `ferramentas/xml-chamadas.py` do jeito de hoje conferia): chamada sobre chamada,
chamada sobre a vinheta, e o fim da chamada antes do fim do master (quem barra esse é o plano do master, com saída 3).

**O que a máquina precisa:** o repositório do canal chega ao WSL pelo `montar-pacote.sh` (no Mac) e pelo
`instalar-pacote.sh` (no WSL, como root), da frente K (`cf626135d`), que confere arquivo a arquivo e roda o
`npm ci --omit=dev --ignore-scripts` (o `playwright-core` e o `sharp` do gravador). O `ffmpeg` e o `CHROME_PATH` vêm do
ambiente do motor. Sem `node_modules`, a ferramenta PARA dizendo o que falta. No PC do Lucas, sem `CHROME_PATH`, o
gravador usa o Chrome do Windows, como sempre.

## A trilha automática (ligada em 24/10/2026)

À pergunta «No piloto (vídeo 5), como sai a trilha?», o Lucas respondeu **«Automática, pelo roteiro»** (24/10/2026, no chat
da Sala). A opção dizia: «Um agente lê o roteiro e escreve o clima de cada trecho; o motor escolhe pela ficha da Epidemic e
baixa da sua conta, sem lista. Nenhuma IA escuta a música.» O `canal-motor.json` declara `musica`: a Epidemic da conta do
Lucas (plano Creator, o canal conectado), com a chave no cofre do canal como `EPIDEMIC_SOUND_API_KEY` em `epidemic.env`
(o nome que o `guardar-segredo-no-cofre.ps1 -Segredo epidemic` grava, linha 60, e que o `trilha.mjs` lê pelo
`lerCredencial`); a paleta `musica/paleta.json`; até 4 trechos, pelas marcas `##` do roteiro.

**O que o código faz com a música** (lido no `top10-estudio` em `6253755`; a regra do canal é que ela nunca passe por
ferramenta de IA nem de reconhecimento de música):
- o agente da trilha recebe **só texto**: o nome do canal, o título, os blocos com a fala de cada um e a paleta
  (`scripts/sem-rosto/trilha.mjs:77-98`), por `claude -p <prompt>` (`trilha.mjs:123-127`). Ele escreve o clima em JSON; o
  prompt diz «Nenhum modelo escuta música» (linha 81);
- a escolha é o ranking determinístico dos metadados da busca contra esse clima (`trilha.mjs:214-226`;
  `scripts/compilado/motor/lib/trilha-metadados.mjs`, que só importa o `ficha.mjs`: nenhum modelo, nenhuma rede);
- a prévia de cada candidata é baixada e medida pelo volume: o `medirPrevia` decodifica pelo ffmpeg e tira uma curva de
  RMS (`trilha.mjs:207-213`; `scripts/compilado/motor/musica.mjs:769-797`). O cabeçalho do `musica.mjs` registra que o
  Gemini saiu da trilha (linhas 17-20);
- o cliente da Epidemic só busca (`SearchRecordings`) e baixa o WAV (`DownloadRecording`), com a chave no cabeçalho
  (`scripts/sem-rosto/epidemic.mjs:113-124`);
- o master mistura pelo ffmpeg e mede pelo ffmpeg e pelo ffprobe (`scripts/sem-rosto/master.mjs:55,59`); depois do
  master, só o upload ao YouTube (`condutor.mjs:123-127`). O faster-whisper só ouve a narração, antes de haver trilha.

**O que não está provado:** que nenhum agente pago abre um WAV da obra por conta própria. As faixas ficam em
`<obra>/_trilha/faixas/`, e a etapa da trilha vem depois da arte e do QC (`condutor.mjs:94-103`), mas o agente da trilha
roda com `bypassPermissions` e enxerga a release. Nenhum prompt lido manda abrir esses arquivos. A trilha automática também
não foi exercitada com a conta do canal: os testes do motor usam servidor falso.

**O que muda em relação à regra do canal de hoje** (e o Lucas decidiu sabendo): o download sem a lista no chat, as prévias
baixadas por programa (no jeito de hoje, o Lucas as ouve na página da faixa), e o espaçamento de 15 s entre pedidos, que o
cliente do motor não tem (ele só repete no 429). As prévias foram confirmadas à parte (Lucas, 24/10/2026, à pergunta «Para
escolher a música, a trilha automática do motor baixa a prévia de cada candidata pela sua conta da Epidemic, só para medir
o volume (nenhuma IA ouve). Em 05/10 ficou que nenhum programa pede prévia. Pode, no motor?»: «Pode (Recomendado)»). O crédito «<Artista> / <Música> / courtesy of Epidemic Sound» vai na
descrição, que a Sala escreve a partir do `_trilha/escolha.json` (título, artistas e URL de cada faixa).

## As aprovações dos portões

À pergunta «Quem pode aprovar os portões do motor?», o Lucas respondeu **«Só com a sua palavra (Recomendado)»** (24/10/2026).
A opção dizia: «O Mateus entra como operador e só aprova citando uma mensagem sua, com a data.» No `canal.json`, o Mateus
passou de `dono-da-holding` a **`operador`**.

- Onde o código impõe: `scripts/sem-rosto/portao.mjs:40-46` (`quemAprova`). Membro `operador` sem `--fala` é recusado
  («a aprovação leva --fala com a palavra do dono do canal»), e isso vale para criar a obra (a pauta, linha 68), para todo
  `aprovar` (roteiro, título e capa, publicar, linha 79) e para `recusar` (linha 123). Como `dono-da-holding`, ele aprovava
  sem `--fala`.
- O que o código **não** impõe: que a fala seja do Lucas, nem que traga a data. Ele exige só que não esteja vazia, e a
  grava no `_portoes/<portão>.json`. Citar a mensagem literal e a data é procedimento de quem roda o portão.

## O que a Sala faz e o motor não tem

À pergunta sobre as conferências do canal que a linha do motor não tem, o Lucas respondeu **«Faço as que dá
(Recomendado)»** (24/10/2026). Fica com a Sala de controle do canal, fora do pacote:
- **a checagem de fatos do roteiro**, antes do portão do roteiro (o `verificador-de-fatos` não está na linha do motor:
  `canal.mjs:48`);
- **a revisão de espectador do vídeo pronto, com o cético**, antes de o Lucas publicar (a revisão em lotes, com as 7
  perguntas do canal, entre elas as duas de 24/10: imagem parada tempo demais e câmera brusca).

Continuam sem lugar no motor, e a Sala não as faz por ele: a aprovação na linha do tempo antes do render, a medida de
margens (M6), o `conferente-de-midia` e as exceções de portão cena a cena.

## A nuvem: só o que o motor usa

À pergunta sobre o armazenamento do canal na nuvem do Top10 e a regra «o bruto não viaja», o Lucas respondeu **«Só o do
motor (Recomendado)»** (24/10/2026). A opção dizia: «Os arquivos de cada vídeo do motor vão ao armazém do canal no Top10,
porque ele precisa disso para rodar. A pasta midia/ e o histórico dos vídeos 1 a 4 ficam só neste PC.»

- O que sobe: o que o condutor sobe de cada obra do motor ao bucket do canal (`qint-alpha-point`), etapa a etapa
  (`condutor.mjs:336-346`: a narração, `_media/`, `_dados/`, `_pesquisa/`, as faixas da trilha, os clipes, o master).
- **O que não sobe:** o `scripts/socio/maquina/backup-r2-canal.ps1` **não roda sobre `C:\projetos\alpha-point`**: nem a
  `midia/`, nem o `db/`, nem o histórico dos vídeos 1 a 4 (`out/juneau`, `out/los-angeles`, `out/zona-do-canal`,
  `out/peru-agua` e o resto do que está fora do git), sem uma decisão nova do Lucas. Ele não é passo do condutor: só roda
  se alguém o rodar.

## As medidas da voz de hoje (para a voz nova ter com que se comparar)

| Medida | Valor | Fonte |
|---|---|---|
| Palavras por minuto no v4 | 184 no teste de Los Angeles (171 a 203 por parágrafo); 158 na Zona do Canal; 175 no Peru | `out/los-angeles/_pesquisa/teste-voz-v4.md`; `out/zona-do-canal/_pesquisa/narracao-conferencia.md`; `out/peru-agua/_pesquisa/narracao-conferencia.md` |
| Loudness da voz crua | −19,6 LUFS (Los Angeles, pico −3,6 dBTP, LRA 2,2); −19,7 LUFS (Zona); o v3 do Juneau media −14,1 | as mesmas conferências; `out/zona-do-canal/_creditos-trilha.md`; `CLAUDE.md` |
| Arquivo | PCM 16 bits, 44,1 kHz, mono; fade de 5 ms na entrada e 15 ms na saída de cada parágrafo | `out/zona-do-canal/narracao.json` › `audio` e › `tratamento_canal` |
| Alvo escrito | 150 a 160 palavras/min, ~2.000 palavras por roteiro | `marca/voz.md` §1; `out/los-angeles/_pesquisa/teste-voz-v4.md` (o Lucas aceitou o ritmo do v4: «ritmo ok», 07/10/2026) |

## O PC de produção

Os scripts do PC (inventário do disco, preparo de `C:\estudio\` no usuário do próprio Lucas, cofre das credenciais do
Lucão, backup no R2 do canal) são comuns aos três canais da Qint e moram num lugar só: `scripts/socio/maquina/` no
`top10-estudio` (desde `d0179afcc`; a produção no usuário do sócio e a distro só do motor, `estudio-alpha-point`, desde `5864d9993`, pela decisão do Mateus de 22/out/2026; o README tem a convenção). No PC, a Top10 os copia para `C:\estudio\maquina\`.
O que o Lucão roda está em `PASSOS-DO-LUCAO.md`. O PC fica ligado 24 h (Lucas, 24/10/2026: «Sim, 24 h (Recomendado)»), e o
backup do canal ao R2 não roda sobre esta pasta (acima, «A nuvem»).

## Quem escreveu esta pasta

Esta pasta (`estudio/`) foi escrita pelas sessões Claude da Top10 (frentes A, 15 e K) e, desde 24/10/2026, também pela
Sala do Lucas, a partir das falas citadas com data em cada ponto. Os commits das sessões da Top10 de 21 e 22/10/2026
saíram com o nome «Mateus» porque era a identidade git do computador dele: **eram das sessões, não do Mateus em
pessoa.** Daqui em diante, os commits delas saem como «Sessão Claude da Top10», e regra ou texto em nome do Mateus só
entra por PR que o Lucas aprova (Mateus, sócio da Qint, 24/10/2026). Duas frases que circularam como dele não eram:
«nunca por script ou robô» (foi leitura de uma sessão) e a conta Cloudflare da Top10 como «decisão» dele (foi a
Holding, depois da preferência dele por bucket).

