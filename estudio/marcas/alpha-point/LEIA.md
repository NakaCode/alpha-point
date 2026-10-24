# estudio/marcas/alpha-point — LEIA

A **roupa** do Alpha Point no formato das marcas do monorepo (`marcas/<canal>/`), para o motor comum receber como
parâmetro. É destilação da marca aprovada em `marca/`, sem gosto novo: cada valor cita a fonte. Escrita em 20/10/2026
pela frente A; **posta em dia com a marca de 24/10/2026 pela Sala de controle do canal** (abaixo, «O que entrou em
24/10»). Quando a fonte mudar, esta pasta se refaz a partir dela; onde as duas divergirem, vale `marca/` e o `canal.json`,
com uma exceção: o crédito a 60 px no motor (conflito 1).

## Como o agente do motor lê esta roupa

- O motor dá ao agente a pasta desta roupa inteira (`scripts/lib/roupa-do-canal.mjs`, `acessoDaRoupa`: o `--add-dir` do
  caminho real dela), e nada do resto do repositório do canal. Por isso cada roupa cita as outras pelo nome
  (`identidade.md`, «na pasta desta roupa»), e todo `marca/…`, `roteiros/…`, `out/…`, `ferramentas/…` ou `CLAUDE.md` é
  **procedência**, não arquivo que o agente abre: a regra está escrita aqui (`identidade.md`, «Os caminhos desta roupa»).
- O que a cena liga mora na obra: `../_media/marca/tokens.css` (a cópia byte a byte de `marca/tokens.css` e das fontes,
  em `estudio/semente/marca/`) e, depois dele, `../_media/marca/motor.css` (o crédito a 60 px, do pacote), semeados pelo
  motor (`canal-motor.json` › `obra_semente`).
- A roupa vence a `knowledge/ROUPA-CENA.md` e o prompt da estação **no gosto** (`identidade.md`, «O que vence»); o
  contrato e os portões continuam do motor. Quem decide de verdade a precedência é o Top10 (conflito 9).

## Fonte → arquivo

| Arquivo | Fontes |
|---|---|
| `identidade.md` | `marca/identidade.md`, `marca/tokens.css`, `marca/fontes/*/ORIGEM.json`, `marca/logo/agulha/README.md`, `marca/_neutra/identidade.md`; o crédito a 60 px, da decisão do Lucas de 24/10/2026 (chat da Sala) |
| `voz.md` | `marca/voz.md`, `marca/embalagem.md` §1 e §2, `marca/pronuncias.md`, `marca/cta.md` §1 |
| `superficies.md` | `marca/identidade.md` §5 e §8, `marca/cta.md`, `marca/embalagem.md`, `marca/descricao-canal.md`, `canal.json`, `out/*/linha.md`, `out/zona-do-canal/_creditos-trilha.md`, `roteiros/*/decisoes-lucas.md`; a trilha automática, da decisão do Lucas de 24/10/2026 |
| `agentes/*.md` (15) | `marca/agentes/<mesmo nome>.md`, conferidas contra `marca/identidade.md` (a mais nova vence) |
| `agentes/pesquisa-geo.md` | também `marca/acervos/5-dados-e-fronteiras.md` (o host de download do HydroSHEDS, 22/10/2026) |
| `agentes/qc-visual.md` | também `ferramentas/espectador-pedido.md` (as 2 perguntas novas da revisão de espectador, 24/10/2026) e `CLAUDE.md` («A revisão de espectador, antes do Lucas») |
| `agentes/executor-de-molde.md` | `marca/identidade.md` §4.1, §4.4 e §5, `marca/prancha-documento-card.html`, `marca/tokens.css`; formato: o ofício `.claude/agents/executor-de-molde.md` e a roupa do Top10 no monorepo (não há roupa dele em `marca/agentes/`) |
| (o perfil técnico da voz) | não é arquivo à parte: mora em `estudio/canal-motor.json` › `narracao` e › `master` (decisão da frente K, 21/out/2026). As fontes (`canal.json`, `CLAUDE.md`, `out/zona-do-canal/narracao.json`, as três `narracao-conferencia.md`, `teste-voz-v4.md`, `_creditos-trilha.md`) estão na tabela de `estudio/LEIA.md` |
| `publicacao-youtube.json` | perfil de sócio `estudio-perfil-youtube-socio/1` (o formato do motor, `scripts/sem-rosto/publicar.mjs`; o de antes, no formato do Top10, está no histórico do git): os metadados públicos dos 2 vídeos publicados, lidos em 21/out/2026 (categoria 22, idioma en, idade 0), e as descrições publicadas (o rodapé é o crédito do MapTiler/OSM); o `_fonte` e as `_pendencias` estão no próprio arquivo |

## O que entrou em 24/10/2026

A marca andou em 10 arquivos de `marca/` depois da roupa de 20/10 (o `conferir-copias.mjs` os acusou, os mesmos do estudo
`out/_maquina/motor-sem-rosto/requisitos.md` §0). O que cada um trouxe, e onde entrou:

| Mudança da marca | Onde entrou na roupa |
|---|---|
| A água é azul, e corre (`--agua`, `--agua-luz`; Lucas, 23/10) | `identidade.md` (paleta), `mapista.md` §2, `editor-de-arte.md` §2 e §4, `diretor-de-arte.md` §2, `qc-visual.md` («tema»), `pesquisa-geo.md` §1 |
| A pergunta do gancho na tela (Lucas, 23/10) | `identidade.md` (alvos), `editor-de-arte.md` §3, `redator-de-tela.md` §3, `qc-visual.md` («espaco») |
| A fala citada com `data-qc-papel="heroi"` (Sala, 22/10) | `identidade.md` (alvos), `editor-de-arte.md` §3 e §5, `mapista.md` §4, `executor-de-molde.md` §5, `qc-visual.md` («espaco») |
| O título não entrega a resposta (embalagem §2, Lucas, 22/10) | `superficies.md` §2 |
| O gancho que prende (identidade §5 e voz; Lucas, 24/10) | `identidade.md` («A abertura e o mapa»), `voz.md` («A abertura»), `superficies.md` §1, `montador.md` §2, `diretor-de-arte.md` §2, `regente-de-imagem.md` §2, `mapista.md` §5, `editor-de-arte.md` §5, `pesquisa-imagens.md` §1, `qc-visual.md` §2.1 |
| A região falada, sempre demarcada (identidade §5; Lucas, 24/10) | `identidade.md`, `mapista.md` §3, `regente-de-imagem.md` §2, `diretor-de-arte.md` §2, `pesquisa-geo.md` §1, `qc-visual.md` §2.1 |
| Sobre o mapa, mais vezes (identidade §5; Lucas, 24/10) | `identidade.md`, `editor-de-arte.md` §4, `mapista.md` §5, `montador.md` §2, `regente-de-imagem.md` §2, `diretor-de-arte.md` §5 (no lugar de «Só no vídeo 4») |
| O relevo do vídeo 4 «quando necessário» e o ok próprio do vídeo 5 (identidade §6) | `identidade.md` («Base de mapa»), `mapista.md` §1, `diretor-de-arte.md` §2 |
| O host de download do HydroSHEDS veta robô (acervos, 22/10) | `pesquisa-geo.md` §2 |
| As 2 perguntas novas da revisão de espectador (imagem parada tempo demais; câmera brusca; Lucas, 24/10, no balanço do vídeo 3) | `qc-visual.md` («motion» e «cadencia»), `editor-de-arte.md` §4, `mapista.md` §5 |
| O `_capturar.mjs` com `CHROME_PATH` e a taxa 30000/1001 | nada na roupa: é o gravador das peças (`pecas/pecas-da-obra.mjs`) |

E as decisões do Lucas para o motor, do mesmo dia: sem banco pago no piloto (`montador.md` §4, `pesquisa-imagens.md` §2,
`regente-de-imagem.md` §3, `diretor-de-arte.md` §4); a trilha automática (`superficies.md` §1); o crédito a 60 px (todas
as roupas que o citam); as conferências que a Sala faz (`verificador-de-fatos.md`).

## Como saber se a roupa envelheceu

`node estudio/conferir-copias.mjs`, da raiz do canal: compara o sha256 de cada fonte de `marca/` listada abaixo com o de
hoje, e a semente com `marca/`. Sai 0 em dia; 1 com a lista do que andou. Rode antes de cada commit do pacote.

sha256 das fontes lidas de novo em 24/10/2026 (`main` em `73e87e5`; o `marca/identidade.md` é o do commit `7eb7a6f`, com
o crédito a 60 px «do vídeo 5 em diante» no §4.1):

```
ad9337a1a143a5b3ffcfabcc1b72db994f3e8812ee2d38fa3783df4ac8327fd1  canal.json
ac6cf65d8124a96f2ac0fb56d66846cae9afaea87b8ab0629f8517dce43872b1  CLAUDE.md
fe64d8444e43761050351e4be7b59d65dae09c8e45183fa3a48029d6d4766562  marca/identidade.md
939aa2d4bfc31f645e129892b33d7bfe0e20e001bc8e1b398e8598fda91b550b  marca/tokens.css
8c9b0ef8009def9347e89c6863a5731ca49a2260ee04ac6b0c9e181b74abe246  marca/voz.md
51fe9b4e78c08b08fc6d6fd2546fbf0ad52df96b8de17108c3014248d8614c26  marca/pronuncias.md
43f54602b18221a94e7ea45e60301cd763943f5fbd9be2e6e5354cf94ceac122  marca/embalagem.md
c7332c522f5a17063cec5ae1b1387d4f7b2eef241007437a0e8ffcb8ade47a62  marca/cta.md
da77b2fb32432d0aa0b103037d3bd9c2783860fa6648cad5ef00e43e0418545d  marca/midia.md
31087ef9fa0391b4f3c7992485a4e5ce4aa143a944dc7e73f55b3516c64ce507  marca/midia.json
92f17e43da7ac42d8e8f8dbae86ca650598e2f6b4bf56436d67a80984884a3f1  marca/descricao-canal.md
0a4a97dc905fb5d167dc4147b3df44c919f632efb462d7eb0865f2f91fd1cb97  marca/logo/agulha/README.md
a5cd49a68a05a2e1d99d2f6c78f3f2ffa53f7ed227bd1806df80c5f2e6218e1e  marca/_neutra/identidade.md
21d5c1186efc4894e798876c19dca46c7daf781b5a8a5802cc2976cca27ac433  marca/fontes/barlowcondensed/ORIGEM.json
6f5c55e65361ccfd500fa2ea9c8a5786a095c9de0874fa145ca8634f3265a2d9  marca/fontes/courierprime/ORIGEM.json
f48476937b351174e0e208786d933b611cb61bfa66143f5b71c0380453e3865b  marca/fontes/inter/ORIGEM.json
dfe1d9fa8a96f4fa70129b705486af2f104a49e4f1e00442c14dccf031dc3552  marca/fontes/notosans/ORIGEM.json
38a329d0a3cb586959c8aba379b447cd42cb7e78a6c4a8a467ed1b8a8ce20b69  marca/acervos/5-dados-e-fronteiras.md
6215619a66aaf5025526c37e30ee3e73bca7d60309ec32edd535c1d997dee07d  marca/agentes/LEIA-ME.md
0f25a4370f901971409c7be234a99facb068571d45c30266ec35a7070e1026df  marca/agentes/designer-de-navegacao.md
a04315d8c5bd7f33be811f9dbeb6c8e89d1c53992d73def7abc4503d0a2c41ce  marca/agentes/diretor-de-arte.md
274621e5c52cb2671bb7315a94fb4e8f8723b9db71bd53edaf185ef0f51e198b  marca/agentes/editor-de-arte.md
75d5ed0baed7f5708ac7652ba4f146beb0a27c687fca8afb530898b34397f8af  marca/agentes/mapista.md
6330b56d90b1965bebc053ce82fdabbcfcfdcc8719f0ef9da5256cedbdabb796  marca/agentes/montador.md
327e26d473550a22049fce68dcff389858068bed123a9e16c50b36a7abdc5b2c  marca/agentes/pesquisa-dados.md
b10657a6692aea84246882108a1f839c1b1c691d3f0f2cccedf6d646c2413a46  marca/agentes/pesquisa-documentos.md
485a39212262d63d7eaded331c2b6df4eec41cd01545270519197b4f757f0646  marca/agentes/pesquisa-geo.md
b386775141d0dcf0846b8dd8ced76ecb5ed5ff73cbdc8269094f78fc8185322d  marca/agentes/pesquisa-imagens.md
7937e0ddbf9b719cddafa1dc8d604fffe0c35073530a4ab8752ca4091b1980f0  marca/agentes/pesquisa-logos.md
2a646e288337a39f38a5d04b613f16320608b090f9ac49b5817bef287c002551  marca/agentes/pesquisa-pessoas.md
9bfb4d0fe1755ea73860e98a079c719fd1a4527a6b8bf5760d1fa24953970715  marca/agentes/qc-visual.md
ef0aeef07b0b49cf095e31be20900d114d2da11d4e34a7d714d3ed673b75dada  marca/agentes/redator-de-tela.md
62eefeb47ac9ddc56c41d83477b83ee7eaf01b555160ddcf48ef822f4b0d8c05  marca/agentes/regente-de-imagem.md
76cd7ef3c5d59cd51691abe99751ea7cbb096936ac4c513794531bb840bce2dd  marca/agentes/verificador-de-fatos.md
459190303462683b36c4a32569ee0baa42a0c043f1ce774709dd2a3586eb45e9  marca/prancha-documento-card.html
8be714b7b26dd84d64167bea82d40673ff9d4b506676bec215aa1b39219a02c7  ferramentas/espectador-pedido.md
```

sha256 das fontes lidas pela frente A em 20/10/2026 (ramo `estudio/pacote-do-canal`, HEAD `1703b34`) e não relidas em
24/10 (mudam por vídeo, ou ficam fora deste repositório):

```
a2bb5424ce5755fac071514864b6671b512d36ab36eb83da36f0127a86b160eb  roteiros/zona-do-canal/decisoes-lucas.md
0cef03944a034ace4486829a034cb9b07b62d812b4969e771e715de94e4f67dc  roteiros/peru-agua/decisoes-lucas.md
0e092446d8bbe0eff485112c38db5f4f315272584f95311c3538be09aecf20e3  out/los-angeles/descricao-youtube.md
1a4ee89c98f69a72ac00e401f7d8994509dc587705044e0d340df37adb37af95  out/zona-do-canal/descricao-youtube.md
2ca819bb3cee6b25c7ed5d7c078a578290c269e4e8777a599e2407f4fba90ab9  out/zona-do-canal/_creditos-mapa.md
70d7c56c2ab7da5b0703b8068b21e62db98fd5d7985c512cdef7611aec033752  out/zona-do-canal/_creditos-trilha.md
469d64251bf07724fcb4e41fa8c64551fbac9c28c461029d2903956e603c1df8  out/zona-do-canal/narracao.json
2d78ed333b8bfa008dc1a02290e520986ae497b144975383bd8771d998015ce1  out/los-angeles/_pesquisa/teste-voz-v4.md
939f21e2a7dcd917dab381d09231b8b88405471c13a83c7d0ab339791a855097  out/los-angeles/_pesquisa/narracao-conferencia.md
5cdc22a3889aa75d930ecda19bad11063104b4bcff926565efbb4f46b075613c  out/zona-do-canal/_pesquisa/narracao-conferencia.md
5b96241fb392c3e937abddbbd912bf33188fe2d6d76572cba1f84c8feff5fd6a  out/peru-agua/_pesquisa/narracao-conferencia.md
3281e4a42b5443ed94300137d11ab81005c378db2e0356c62fcb549cad4d91db  out/los-angeles/linha.md
0d65b47cbd258ee5cff54640edff0a6f304d55dd82c9db521715c3da3bf496a6  out/zona-do-canal/linha.md
10b55f7876c1eff585c920e9412991588414ef68eeb8984c918d167f3f9821a0  (Mac do dono) out/_holding/…/canais-qint-20261020/PLANO.md
a7038a1e904c96ad8498c3f25177c809aee4bbefaa3148bd478ca2c9860ff7bd  (monorepo) .claude/agents/executor-de-molde.md
e2ccf4cfa8e06a41b87909560a4c6a83074b498480afff420740a6d8e630930f  (monorepo, origin/main) marcas/top10/agentes/executor-de-molde.md
```

## Conflitos achados

1. **O crédito: resolvido para o motor em 24/10/2026.** O Lucas escolheu 56 px para todo crédito em 07/10/2026 («Quero
   reduzir para 56px»). O motor cobra hoje **60 px de todo crédito, o de mapa inclusive** (`scripts/qc-tamanho.mjs`,
   linhas 21-23 e 66: «crédito 60 = D1 do dono, 12/out/2026»; a exceção de 40 px no mapa da pré-v1 não existe lá). À
   pergunta «O crédito de fonte na tela: o motor exige hoje no mínimo 60 px, e você tinha decidido 56 px (07/10). Qual
   fica?», a resposta foi **«60 px (Recomendado)»**. A roupa diz 60, e o `estudio/semente/motor.css` o põe por cima do
   `tokens.css` copiado (que continua a 56, byte a byte com `marca/`). Os vídeos 1 a 4 ficam como saíram; a identidade
   do canal registra o 60 do vídeo 5 em diante (edição da Sala em 24/10).
2. **`marca/voz.md` §1 desatualizado:** diz eleven_v3 e a voz `iAc9oLyb1zcwD4O3ZTBv` (24/09); vale o `canal.json`
   (eleven_v4, `829pig94w9GefZ9jJQYl`, 07/10). O `CLAUDE.md` do canal também abre a seção da narração com «eleven_v3».
3. **Não existe `marca/finalizacao.json`.** As chamadas e a marca d'água entram pelo `ferramentas/xml-chamadas.py`, e a
   trilha e o volume, à mão no Premiere. O master automático do motor as tira de `estudio/canal-motor.json` › `master` e
   da ferramenta das peças (`estudio/pecas/`).
4. **MapTiler:** o plano Flex do Lucas cobre vídeo só para canal com até 100 mil inscritos, com o crédito na tela em todo
   quadro de mapa. Antes de chegar lá, licença custom.
5. **Roupas de `marca/agentes/` atrás da identidade:** o tratamento do satélite 65 % / 70 % (diretor-de-arte, mapista,
   qc-visual, pesquisa-geo; e `marca/embalagem.md` §3) foi superado pelo tratamento C de 09/10; a pausa de ~0,14 s do
   montador, pelos 0,25 s do v4; o «espectador norte-americano» do qc-visual, pelo público de 14/10; a água, a região
   falada e a pergunta do gancho estão na identidade e não nas roupas de lá. Aqui vale o mais novo.
6. **Banco pago: nenhum no piloto.** Os quatro bancos da marca (Envato, Motion Array, Storyblocks e Shutterstock,
   `marca/midia.md` §1 e §2.3) continuam no canal, só pelo navegador (decisões do Mateus de 22/out/2026). O motor não tem
   mais trava de sócio contra o stock (`scripts/lib/canal.mjs`, linhas 21-23): ele caça na Green, com as contas do Top10 e
   sem a lista do Lucas, se o canal declarar `midia.caca_stock_assinado: true`. À pergunta «E o B-roll dos bancos
   pagos?», o Lucas respondeu **«Sem banco no piloto (Recomendado)»** (24/10/2026): o campo fica `false`, a cena que só
   esperaria footage sai em versão pronta (`scripts/sem-rosto/versao-pronta.mjs`), e o portão de publicar pede
   `--aceito-versao-pronta` (`scripts/sem-rosto/portao.mjs`, linhas 112-116).
7. **Ritmo:** a marca escreve 150–160 palavras/min; o v4 mediu 158 a 184. O Lucas aceitou («ritmo ok», 07/10).
8. **Volume:** a voz sai a −19,7 LUFS e o Lucas sobe 5,5 dB no Premiere (≈ −14,2); o alvo do master automático
   (−14 LUFS) bate com o que ele faz à mão.
9. **A roupa entra por cima de um ofício do Top10.** O prompt da arte manda ler a `knowledge/ROUPA-CENA.md`, que traz
   `lang="pt-BR"`, a Neue Haas, a paleta navy, a margem de 192 e o «Fonte:» de 36 px (`scripts/desenhar-cenas.mjs`,
   linhas 711-789). A roupa diz que ela vence no gosto (`identidade.md`, «O que vence»), mas nenhum texto do motor o
   diz. **Para o Top10.**
10. **O still da mesa** (`../_media/base/mesa-<lugar>.png`) sai da ferramenta do canal `ferramentas/mesa-satelite.py`,
    que o motor não roda. Sem ele, a mesa fica sem o satélite, declarada. **Para o Top10 e a Sala.**
11. ~~**O relevo do vídeo 5:** a roupa diz «plano até o ok do Lucas», e o prompt do mapista do motor diz «terreno DEM
    real» (`desenhar-cenas.mjs`, linhas 641-642). Quem vence não está provado.~~ **Resolvido em 24/10/2026:** «Sim, como
    no Peru (Recomendado)». O relevo vale onde a cena precisar, e a roupa e o prompt deixam de brigar.
12. **A margem do topo:** a marca usa 160 px no topo; o prompt da arte fala em 5 % (192 px). Se algum portão do motor
    cobra 192 no topo, as cenas do canal reprovam ali. **Não provado.**

## Fora desta roupa (ofício, máquina ou histórico, e onde continua)

Comandos, portões e variáveis da pré-v1 (`node scripts/…`, `REGIE_MOTOR`, `portao-margens`, `qc-cena`); a regra de não
contornar site que recusa robô; o relógio `words.json` e os aliases na âncora; onde gravar laudos e quem tem `Write`; o
procedimento de gasto e contador da MapTiler; a caça pelo navegador e o registrador; a conferência por sha256 do
conferente de mídia; o modelo de IA de cada agente (`CLAUDE.md`, «Os modelos»); avisos sobre moldes do Top10; os
detalhes do Juneau e do vídeo 2 (estudo de 2018, Cascade Point, incertezas de Hamlin, override de 76 px); o orçamento
de imagens do qc-visual (M11). Tudo continua em `marca/agentes/`, `CLAUDE.md` e `APRENDIZADOS.md`.

## Perguntas ao Lucão

1. ~~Crédito: mantém 56 px com exceção permanente no motor, ou sobe para 72 px?~~ **Respondida em 24/10/2026**: «60 px
   (Recomendado)» (o piso do motor é 60, não 72; conflito 1).
2. YouTube: os vídeos saem em People & Blogs (22, medido em 21/out); fica, ou vai para Education (27)? Qual o e-mail de
   contato profissional? Há playlist geral, e qual o id? O que marca em «conteúdo alterado ou sintético» (o perfil está
   em «sim»)? O canal está monetizado?
3. ~~B-roll genérico sem a assinatura da Top10: de onde vem?~~ **Respondida para o piloto em 24/10/2026**: «Sem banco no
   piloto (Recomendado)» (conflito 6). Depois do piloto, volta a ser pergunta.
4. Pendências antigas da marca, se quiser fechar: norte para cima ou órbita no mapa; bandeira do Canadá na prancha; vídeo
   de época abaixo de 4K; a palavra de foto de arquivo (`FILE`); grifo fixo; papel da manchete; nota de tradução; a voz
   da chamada; o arranjo da tela final no Studio. (A ilustração sobre o mapa depois do Peru foi decidida em 24/10: «Sobre
   o mapa, mais vezes».)
5. ~~O relevo 3D no vídeo 5 (conflito 11).~~ Respondida em 24/10/2026: «Sim, como no Peru (Recomendado)».
6. A trilha: há algum clima que o canal nunca deve usar? (Os vetos da `musica/paleta.json` estão vazios.)
