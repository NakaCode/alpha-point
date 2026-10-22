# estudio/ — o pacote do Alpha Point para o motor comum

Esta pasta é o **pacote de canal** do Alpha Point no formato do motor comum do estúdio (frente K, `top10-estudio`,
commit `00ecbfd72`: `canais/canal-motor.schema.json` e `scripts/lib/canal.mjs`). O motor lê o canal daqui; a produção de
hoje (a Sala, os setores, a Régie pré-v1) **não lê nada desta pasta** e continua igual até a virada.

Por que numa pasta e não na raiz: a raiz já tem o `canal.json` da Régie, que a produção atual lê. Depois da virada (a Sala
e os 5 setores viram uma conversa só), o pacote pode subir para a raiz.

| Arquivo | O que é |
|---|---|
| `canal.json` | o contrato do app (`estudio-canal/1`): marca, motores, saída no YouTube, bucket R2 e membros |
| `canal-motor.json` | o que o motor precisa e o app não cobre (`estudio-canal-motor/1`): idioma, rosto, narração, master, portões, contas |
| `marcas/alpha-point/` | a roupa destilada de `marca/` (identidade, voz, superfícies, 16 roupas de agente, perfil de publicação); o `LEIA.md` dela traz a fonte e o sha256 de cada valor. O perfil técnico da voz não é arquivo à parte: mora no `canal-motor.json` (decisão da frente K, 21/out/2026) |
| `PASSOS-DO-LUCAO.md` | o que só o Lucão faz, uma vez |

## Como o motor lê e como conferir

```
TOP10_CANAL_DIR=<clone do alpha-point>/estudio
node scripts/lib/canal.mjs --canal=<clone do alpha-point>/estudio conferir     # (no top10-estudio)
```

Conferido em 21/out/2026 contra o `origin/main` `9828329a1`: contrato do app e do motor válidos, travas de sócio
satisfeitas (bucket próprio, pool `canal`, sem caça de stock assinado, faixa 0/0/0, cobertura 100 %, sem M28/M32/M33), e
o perfil de publicação válido. Sem achados desde 22/out/2026, quando a voz deixou de ser `$pendente` (abaixo).

## De onde vem cada valor do `canal-motor.json`

| Campo | Valor | Por quê |
|---|---|---|
| `idioma` | en-US | `canal.json` da raiz › `idiomas.origem` |
| `roteiro.fonte` | obra | narração sintética: o texto aprovado congelado na obra é o que vira voz (exigência do motor) |
| `rosto` | sem apresentador, 0/0/0, 100 %, sem M28/M32/M33 | faceless (`marca/identidade.md` §0 e §5) |
| `narracao.voice_id` | `829pig94w9GefZ9jJQYl` | a voz de hoje (`Alpha Point - Narrator`, `canal.json` da raiz). O canal fica na conta da ElevenLabs da Top10 com uma chave de conta de serviço só dele (`qint-alpha-point`), por decisão do Mateus (22/out/2026 ~01:15Z, repassada pela frente 15); a chave vai ao cofre do PC como `ELEVENLABS_API_KEY`. De 20 a 22/out o campo esteve `$pendente`, porque o plano era a conta própria do Lucas, para onde a voz de Voice Design não se leva |
| `model_id`, `voice_settings`, `output_format`, `language_code` | eleven_v4, 0,5/0,75, pcm_44100, en | `canal.json` da raiz › `narracao` (07/10/2026); `out/zona-do-canal/narracao.json` |
| `pausa_entre_trechos_s` | 0,25 | um pedido por parágrafo, pausa 0,25 s (`canal.json` › `narracao_v4_decidido`) |
| `cauda_s` | 20 | 20 s sem voz para a tela final (Lucas, 26/09/2026) |
| `cards` | nenhum | o canal não tem card de título nem capítulo na tela, só na descrição (Lucas, 26/09/2026). O `##` do roteiro aprovado vira marca invisível, sem vão e sem tela, com o instante no `narracao.json` (serve aos capítulos da descrição); a pausa de 0,25 s atravessa a marca (frente K, `a438ed41a`). O espelho aceitar zero cortes depende do PEDIDO-QINT-MOTOR-SEM-CARDS-01 ao WP15: até ele integrar, a obra para no espelho |
| `relogio` | tts+ouvido, faster-whisper large-v3 na CPU, Scribe de reserva | o caminho grátis do canal (`out/juneau/_pesquisa/ingest-local.py`, `APRENDIZADOS.md` item 37); CPU porque a placa não roda o faster-whisper («falta a cuBLAS 12») |
| `limites.caracteres_max_por_obra` | 30.000 | o teto do Lucas é 15.000 créditos de voz por vídeo (02/10/2026); o v4 mediu ~0,48 crédito por caractere (Zona e Peru), e 15.000 ÷ 0,48 ≈ 31.000 |
| `midia.caca_stock_assinado` | false | o motor não caça em banco por script (trava de sócio do `canal.mjs`). O Storyblocks e o Envato da Top10 continuam, só pelo navegador, nunca por script ou robô (decisão do Mateus, 22/out/2026: «Vou usar Storyblocks e Envato aceitando o risco»); o Motion Array e o Shutterstock saem |
| `master` | automático, −14 LUFS, −1 dBTP, 3840×2160 a 30 fps | o Premiere sai; hoje a voz sai a −19,7 LUFS e o Lucão sobe 5,5 dB na mão (≈ −14,2) |
| `master.trilha` | −40,5 dB sob o narrador, −40 dB sem voz | hoje a música vai a −35 dB constante no XML, do 0:00 ao fim (cauda incluída), e o Lucas sobe a voz 5,5 dB no Premiere (`out/zona-do-canal/_creditos-trilha.md`; «Subir a voz no Premiere», 15/10/2026). No master, o nível da trilha é ganho na faixa da música, e depois um loudnorm linear leva a MISTURA a −14 LUFS, subindo voz e música juntas (~5,7 dB com a voz a −19,7). Para a música ficar onde o Premiere a deixa, o ganho é −35 − 5,5 = −40,5 (frente K, 21/out/2026, que confirma com a medida quando o master fechar). Sem voz, −40 é o mínimo do schema (0,5 dB acima). Sem trecho sem trilha no começo. A frente A mede no PC do Lucas o loudness das 4 faixas do vídeo 3 quando o SSH abrir |
| `master.logo` | `../marca/logo/agulha/marca-dagua-4k.png` em quadro inteiro, opacidade 1, desde o fim da vinheta | a peça 3840×2160 já traz a marca no canto (x 3687–3773, y 67–153) com os 30 % embutidos (alfa máximo 76/255) e é o último quadro da vinheta (Lucas, 09 e 14/10/2026; `marca/identidade.md` §8). O começo vem de `_master/logo.json`, que a ferramenta das peças grava |
| `master.cta` e `master.pecas_da_obra` | `cta` vazio; `pecas_da_obra` = `pecas/pecas-da-obra.mjs` | as chamadas e a vinheta mudam por vídeo, então quem as grava é a ferramenta do canal (abaixo), que o motor roda antes do plano do master |
| `portoes` | pauta, roteiro, título e capa, publicar | o que fica com o Lucão (PLANO §3) |
| `contas_claude` | pool do canal, `claude.env`, 1 porta | a conta Max do próprio Lucão; quantas portas é decisão de dinheiro do dono com ele, depois de medir os 3 primeiros vídeos |

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
é o arredondamento do ProRes 12 bits. Testes: `node --test estudio/pecas/pecas-da-obra.test.mjs` (5 casos, com os
controles: sem assinatura e assinatura longa param).

**O que a máquina precisa:** o repositório do canal chega ao WSL pelo `montar-pacote.sh` (no Mac) e pelo
`instalar-pacote.sh` (no WSL, como root), da frente K (`cf626135d`), que confere arquivo a arquivo e roda o
`npm ci --omit=dev --ignore-scripts` (o `playwright-core` e o `sharp` do gravador). O `ffmpeg` e o `CHROME_PATH` vêm do
ambiente do motor. Sem `node_modules`, a ferramenta PARA dizendo o que falta. No PC do Lucas, sem `CHROME_PATH`, o
gravador usa o Chrome do Windows, como sempre.

## A trilha automática (ainda desligada)

O motor escolhe a trilha sozinho quando o `canal-motor.json` declara `musica` (frente K, `d4ec988d8`): um agente lê o
roteiro e escreve o clima de cada trecho em texto, e o ranking dos metadados da Epidemic do canal escolhe a faixa
(nenhum modelo escuta o áudio). O pacote **ainda não declara** `musica`: a regra do canal (a trilha nunca passa por
ferramenta de IA nem de reconhecimento de música) pede a palavra do Lucas antes (pergunta 7 de `PASSOS-DO-LUCAO.md`).
Enquanto isso, o motor espera `_trilha/escolha.json`. A paleta proposta, medida nas 12 faixas que ele aprovou nos vídeos 1
a 3, está em `musica/paleta.json`; com o sim dele, a linha é
`"musica": {"fonte": "epidemic", "credencial": "EPIDEMIC_SOUND_API_KEY", "paleta": "musica/paleta.json", "blocos_max": 4}`
(4 trechos, como hoje).

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
O que o Lucão roda está em `PASSOS-DO-LUCAO.md`.
