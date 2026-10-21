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
| `marcas/alpha-point/` | a roupa destilada de `marca/` (identidade, voz, superfícies, 16 roupas de agente, perfil de voz, perfil de publicação); o `LEIA.md` dela traz a fonte e o sha256 de cada valor |
| `PASSOS-DO-LUCAO.md` | o que só o Lucão faz, uma vez |

## Como o motor lê e como conferir

```
TOP10_CANAL_DIR=<clone do alpha-point>/estudio
node scripts/lib/canal.mjs --canal=<clone do alpha-point>/estudio conferir     # (no top10-estudio)
```

Conferido em 21/out/2026 contra o `origin/main` `694d8c91b`: contrato do app e do motor válidos, travas de sócio
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
| `vao_card_s` | 3 | não se aplica: o canal não tem card de título na tela (Lucas, 26/09/2026); o campo é obrigatório no schema |
| `relogio` | tts+ouvido, faster-whisper large-v3 na CPU, Scribe de reserva | o caminho grátis do canal (`out/juneau/_pesquisa/ingest-local.py`, `APRENDIZADOS.md` item 37); CPU porque a placa não roda o faster-whisper («falta a cuBLAS 12») |
| `limites.caracteres_max_por_obra` | 30.000 | o teto do Lucas é 15.000 créditos de voz por vídeo (02/10/2026); o v4 mediu ~0,48 crédito por caractere (Zona e Peru), e 15.000 ÷ 0,48 ≈ 31.000 |
| `midia.caca_stock_assinado` | false | trava do motor para sócio; o Storyblocks e o Envato da Top10 saem (PLANO §8 A) |
| `master` | automático, −14 LUFS, −1 dBTP, 3840×2160 a 30 fps | o Premiere sai; hoje a voz sai a −19,7 LUFS e o Lucão sobe 5,5 dB na mão (≈ −14,2) |
| `master.trilha` | −35 dB, sem ducking | a música vai a −35 dB constante no XML de hoje (`out/zona-do-canal/_creditos-trilha.md`) |
| `master.logo` | `../marca/logo/agulha/marca-dagua.png`, canto superior direito, 60 px, 100 px, 30 % | Lucas, 09/10/2026 (`marca/identidade.md` §8): 60 px do topo e da direita, disco de 100 px, opacidade 30 % |
| `master.cta` | vazio | as duas chamadas mudam por vídeo (a do comentário leva a pergunta do vídeo; a da inscrição cai entre 35 % e 60 % da duração): o formato fixo do motor ainda não as cobre. Pedido registrado à frente K |
| `portoes` | pauta, roteiro, título e capa, publicar | o que fica com o Lucão (PLANO §3) |
| `contas_claude` | pool do canal, `claude.env`, 1 porta | a conta Max do próprio Lucão; quantas portas é decisão de dinheiro do dono com ele, depois de medir os 3 primeiros vídeos |

## O PC de produção

Os scripts do PC (inventário do disco, preparo do usuário `alpha-prod` e de `C:\estudio\`, cofre das credenciais do
Lucão, backup no R2 do canal) são comuns aos três canais da Quint e moram num lugar só: `scripts/socio/maquina/` no
`top10-estudio` (commits `d0179afcc` e `a1ec2d20e`, com o README da convenção). No PC, a Top10 os copia para `C:\estudio\maquina\`.
O que o Lucão roda está em `PASSOS-DO-LUCAO.md`.
