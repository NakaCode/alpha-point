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
o perfil de publicação válido no contrato estrito. **Único achado: a voz é `$pendente`** (abaixo).

## De onde vem cada valor do `canal-motor.json`

| Campo | Valor | Por quê |
|---|---|---|
| `idioma` | en-US | `canal.json` da raiz › `idiomas.origem` |
| `roteiro.fonte` | obra | narração sintética: o texto aprovado congelado na obra é o que vira voz (exigência do motor) |
| `rosto` | sem apresentador, 0/0/0, 100 %, sem M28/M32/M33 | faceless (`marca/identidade.md` §0 e §5) |
| `narracao.voice_id` | `$pendente` | a voz de hoje (`829pig94w9GefZ9jJQYl`) foi feita por Voice Design na conta da ElevenLabs compartilhada com outros canais. Voz desse tipo só se compartilha dentro do mesmo workspace, nunca com outra conta (ElevenLabs, «How do I share a voice?», lido em 20/out/2026). Na conta própria do Lucão nasce uma voz nova, que ele aprova ouvindo |
| `model_id`, `voice_settings`, `output_format`, `language_code` | eleven_v4, 0,5/0,75, pcm_44100, en | `canal.json` da raiz › `narracao` (07/10/2026); `out/zona-do-canal/narracao.json` |
| `pausa_entre_trechos_s` | 0,25 | um pedido por parágrafo, pausa 0,25 s (`canal.json` › `narracao_v4_decidido`) |
| `cauda_s` | 20 | 20 s sem voz para a tela final (Lucas, 26/09/2026) |
| `cards` | nenhum | o canal não tem card de título nem capítulo na tela, só na descrição (Lucas, 26/09/2026). O `##` do roteiro aprovado vira marca invisível, sem vão e sem tela, com o instante no `narracao.json` (serve aos capítulos da descrição); a pausa de 0,25 s atravessa a marca (frente K, `a438ed41a`). O espelho aceitar zero cortes depende do PEDIDO-QINT-MOTOR-SEM-CARDS-01 ao WP15: até ele integrar, a obra para no espelho |
| `relogio` | tts+ouvido, faster-whisper large-v3 na CPU, Scribe de reserva | o caminho grátis do canal (`out/juneau/_pesquisa/ingest-local.py`, `APRENDIZADOS.md` item 37); CPU porque a placa não roda o faster-whisper («falta a cuBLAS 12») |
| `limites.caracteres_max_por_obra` | 30.000 | o teto do Lucas é 15.000 créditos de voz por vídeo (02/10/2026); o v4 mediu ~0,48 crédito por caractere (Zona e Peru), e 15.000 ÷ 0,48 ≈ 31.000 |
| `midia.caca_stock_assinado` | false | trava do motor para sócio; o Storyblocks e o Envato da Top10 saem (PLANO §8 A) |
| `master` | automático, −14 LUFS, −1 dBTP, 3840×2160 a 30 fps | o Premiere sai; hoje a voz sai a −19,7 LUFS e o Lucão sobe 5,5 dB na mão (≈ −14,2) |
| `master.trilha` | −40,5 dB sob o narrador, −40 dB sem voz | hoje a música vai a −35 dB constante no XML, do 0:00 ao fim (cauda incluída), e o Lucas sobe a voz 5,5 dB no Premiere (`out/zona-do-canal/_creditos-trilha.md`; «Subir a voz no Premiere», 15/10/2026). No master, o nível da trilha é ganho na faixa da música, e depois um loudnorm linear leva a MISTURA a −14 LUFS, subindo voz e música juntas (~5,7 dB com a voz a −19,7). Para a música ficar onde o Premiere a deixa, o ganho é −35 − 5,5 = −40,5 (frente K, 21/out/2026, que confirma com a medida quando o master fechar). Sem voz, −40 é o mínimo do schema (0,5 dB acima). Sem trecho sem trilha no começo. A frente A mede no PC do Lucas o loudness das 4 faixas do vídeo 3 quando o SSH abrir |
| `master.logo` | `../marca/logo/agulha/marca-dagua-4k.png` em quadro inteiro, opacidade 1, desde o fim da vinheta | a peça 3840×2160 já traz a marca no canto (x 3687–3773, y 67–153) com os 30 % embutidos (alfa máximo 76/255) e é o último quadro da vinheta (Lucas, 09 e 14/10/2026; `marca/identidade.md` §8). O começo vem de `_master/logo.json`, que a ferramenta das peças grava |
| `master.cta` e `master.pecas_da_obra` | `cta` vazio; `pecas_da_obra` = `pecas/pecas-da-obra.mjs` | as chamadas e a vinheta mudam por vídeo, então quem as grava é a ferramenta do canal (abaixo), que o motor roda antes do plano do master |
| `portoes` | pauta, roteiro, título e capa, publicar | o que fica com o Lucão (PLANO §3) |
| `contas_claude` | pool do canal, `claude.env`, 1 porta | a conta Max do próprio Lucão; quantas portas é decisão de dinheiro do dono com ele, depois de medir os 3 primeiros vídeos |

## A ferramenta das peças (`pecas/pecas-da-obra.mjs`)

O motor roda `node pecas/pecas-da-obra.mjs <slug> --obra=<obra>` antes do plano do master e de novo quando a narração
muda. Ela grava, pelo gravador do próprio canal (`marca/cta/_capturar.mjs`, ProRes 4444 com alfa, 3840×2160):
- a **vinheta** (`marca/vinheta/vinheta.html`) sobre a assinatura do gancho, achada no `words-final.json`: de «You're»
  ao fim de «begins.» + 0,25 s, de 4 a 8 s. Com menos de 4 s grava 4 e avisa; com mais de 8 s, PARA (saída 2);
- as **chamadas** que o regente marcou em `regencia.json › _chamadas` (inscrição; comentário com a pergunta do vídeo, do
  `q` da linha ou de `textos-tela.json › pergunta_cta`). Linha com `estado` (pendente com o Lucas) não entra;
- `_master/sobreposicoes.json`, `_master/logo.json` (`desde_s` = fim da vinheta) e um recibo com os sha256.

Provado em 21/out/2026 no Mac (Chrome do Mac por `CHROME_PATH`) com a obra do vídeo 3 (as palavras, a regência e os
textos de tela da Zona do Canal): a vinheta saiu em 59,50 s com 5,12 s, o mesmo número que o regente calculou à mão
naquele vídeo (palavras 163 a 181); a inscrição entrou em 342,96 s; o comentário, pendente com o Lucas, ficou de fora.
154 + 135 quadros em 85 s. A emenda vinheta → marca d'água: na área do canto (140 × 140 px), a maior diferença entre o
último quadro e o PNG é de 10 a 11/255, em 275 a 343 pixels (acima de 8, de 1 a 9), sobre fundos escuro, médio e claro;
é o arredondamento do ProRes 12 bits. Testes: `node --test estudio/pecas/pecas-da-obra.test.mjs` (5 casos, com os
controles: sem assinatura e assinatura longa param).

**O que a máquina precisa:** `npm ci` na raiz do repositório do canal (o gravador usa `playwright-core` e `sharp`), o
`ffmpeg` no PATH e o `CHROME_PATH` (o gravador cai no Chrome do Windows quando a variável falta, como sempre foi no PC
do Lucas). Sem `node_modules`, a ferramenta PARA dizendo o que rodar.

## As medidas da voz de hoje (para a voz nova ter com que se comparar)

| Medida | Valor | Fonte |
|---|---|---|
| Palavras por minuto no v4 | 184 no teste de Los Angeles (171 a 203 por parágrafo); 158 na Zona do Canal; 175 no Peru | `out/los-angeles/_pesquisa/teste-voz-v4.md`; `out/zona-do-canal/_pesquisa/narracao-conferencia.md`; `out/peru-agua/_pesquisa/narracao-conferencia.md` |
| Loudness da voz crua | −19,6 LUFS (Los Angeles, pico −3,6 dBTP, LRA 2,2); −19,7 LUFS (Zona); o v3 do Juneau media −14,1 | as mesmas conferências; `out/zona-do-canal/_creditos-trilha.md`; `CLAUDE.md` |
| Arquivo | PCM 16 bits, 44,1 kHz, mono; fade de 5 ms na entrada e 15 ms na saída de cada parágrafo | `out/zona-do-canal/narracao.json` › `audio` e › `tratamento_canal` |
| Alvo escrito | 150 a 160 palavras/min, ~2.000 palavras por roteiro | `marca/voz.md` §1; `out/los-angeles/_pesquisa/teste-voz-v4.md` (o Lucas aceitou o ritmo do v4: «ritmo ok», 07/10/2026) |

## O PC de produção

Os scripts do PC (inventário do disco, preparo do usuário `alpha-prod` e de `C:\estudio\`, cofre das credenciais do
Lucão, backup no R2 do canal) são comuns aos três canais da Qint e moram num lugar só: `scripts/socio/maquina/` no
`top10-estudio` (commits `d0179afcc` e `a1ec2d20e`, com o README da convenção). No PC, a Top10 os copia para `C:\estudio\maquina\`.
O que o Lucão roda está em `PASSOS-DO-LUCAO.md`.
