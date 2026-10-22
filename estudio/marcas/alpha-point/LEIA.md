# estudio/marcas/alpha-point — LEIA

A **roupa** do Alpha Point no formato das marcas do monorepo (`marcas/<canal>/`), para o motor comum receber como
parâmetro. É destilação da marca aprovada em `marca/`, sem gosto novo: cada valor cita a fonte, e a fonte executável
(tokens, fontes, logo, vinheta, CTAs, pranchas) não foi copiada, só apontada. Escrita em 20/10/2026 pela frente A, sem
commit. Quando a fonte mudar, esta pasta se refaz a partir dela; onde as duas divergirem, vale `marca/` e o `canal.json`.

## Fonte → arquivo

| Arquivo | Fontes |
|---|---|
| `identidade.md` | `marca/identidade.md`, `marca/tokens.css`, `marca/fontes/*/ORIGEM.json`, `marca/logo/agulha/README.md`, `marca/_neutra/identidade.md` |
| `voz.md` | `marca/voz.md`, `marca/embalagem.md` §1, `marca/pronuncias.md`, `marca/cta.md` §1 |
| `superficies.md` | `marca/identidade.md` §5 e §8, `marca/cta.md`, `marca/embalagem.md`, `marca/descricao-canal.md`, `canal.json`, `out/*/linha.md`, `out/zona-do-canal/_creditos-trilha.md`, `roteiros/*/decisoes-lucas.md` |
| `agentes/*.md` (15) | `marca/agentes/<mesmo nome>.md`, conferidas contra `marca/identidade.md` (a mais nova vence) |
| `agentes/executor-de-molde.md` | `marca/identidade.md` §4.1, §4.4 e §5, `marca/prancha-documento-card.html`, `marca/tokens.css`; formato: o ofício `.claude/agents/executor-de-molde.md` e a roupa do Top10 no monorepo (não há roupa dele em `marca/agentes/`) |
| (o perfil técnico da voz) | não é arquivo à parte: mora em `estudio/canal-motor.json` › `narracao` e › `master` (decisão da frente K, 21/out/2026). As fontes (`canal.json`, `CLAUDE.md`, `out/zona-do-canal/narracao.json`, as três `narracao-conferencia.md`, `teste-voz-v4.md`, `_creditos-trilha.md`) estão na tabela de `estudio/LEIA.md` |
| `publicacao-youtube.json` | perfil de sócio `estudio-perfil-youtube-socio/1` (o formato do motor, `scripts/sem-rosto/publicar.mjs`; o de antes, no formato do Top10, está no histórico do git): os metadados públicos dos 2 vídeos publicados, lidos em 21/out/2026 (categoria 22, idioma en, idade 0), e as descrições publicadas (o rodapé é o crédito do MapTiler/OSM); o `_fonte` e as `_pendencias` estão no próprio arquivo |

sha256 das fontes lidas (20/10/2026, ramo `estudio/pacote-do-canal`, HEAD `1703b34`):

```
fba96ed73e67ef64d0534ff6c5979a5a64be69dd07cd162b54ad9169c9c643ce  canal.json
6bb783ed13d8e12b572b291a40c5327e5ff679472d6a04bb3e463cb6c0badc88  CLAUDE.md
8214730cc7dd10e1be7e36c73b9569a97e56f9afb179be0f2636843663a02099  marca/identidade.md
d9dea8453e74cebd8e2f3066f1f9017951cd4d4a66b2d28fa96662e71d1a2f73  marca/tokens.css
fa713a48aa93057aa13fa0f7520a3ee919b9aa1a7ef6066c4983ca47dc5222e2  marca/voz.md
51fe9b4e78c08b08fc6d6fd2546fbf0ad52df96b8de17108c3014248d8614c26  marca/pronuncias.md
555dc9fa4caf892ab0a4ac4e6448154a7930a79d54cfd85b9c2c33c67e7692e1  marca/embalagem.md
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
6215619a66aaf5025526c37e30ee3e73bca7d60309ec32edd535c1d997dee07d  marca/agentes/LEIA-ME.md
0f25a4370f901971409c7be234a99facb068571d45c30266ec35a7070e1026df  marca/agentes/designer-de-navegacao.md
34782325ba89ce1eb66584edda88c1641e9540c01508909d7894c0b0f38bdbc3  marca/agentes/diretor-de-arte.md
cdd3890d38148dd7cf442d99037c11fb8a683e90790c6ab3f1ef918d65bc3b60  marca/agentes/editor-de-arte.md
27b34e99df3ea58160cdf1e181c7173e2bf5cac3aecadd1f8379a2347028478d  marca/agentes/mapista.md
df61093a25d31a2fee65846e7937f856e623110bc122f51a0176d1d9c4646145  marca/agentes/montador.md
327e26d473550a22049fce68dcff389858068bed123a9e16c50b36a7abdc5b2c  marca/agentes/pesquisa-dados.md
b10657a6692aea84246882108a1f839c1b1c691d3f0f2cccedf6d646c2413a46  marca/agentes/pesquisa-documentos.md
485a39212262d63d7eaded331c2b6df4eec41cd01545270519197b4f757f0646  marca/agentes/pesquisa-geo.md
b386775141d0dcf0846b8dd8ced76ecb5ed5ff73cbdc8269094f78fc8185322d  marca/agentes/pesquisa-imagens.md
7937e0ddbf9b719cddafa1dc8d604fffe0c35073530a4ab8752ca4091b1980f0  marca/agentes/pesquisa-logos.md
2a646e288337a39f38a5d04b613f16320608b090f9ac49b5817bef287c002551  marca/agentes/pesquisa-pessoas.md
a99c67d45689180f4293c517ea1e3f14cd729a349ad37f2c719316e67b62a9f1  marca/agentes/qc-visual.md
ef0aeef07b0b49cf095e31be20900d114d2da11d4e34a7d714d3ed673b75dada  marca/agentes/redator-de-tela.md
599920074d7074e64de4abc2927828407ea738379fbbc04755e9817fd2dd98f0  marca/agentes/regente-de-imagem.md
76cd7ef3c5d59cd51691abe99751ea7cbb096936ac4c513794531bb840bce2dd  marca/agentes/verificador-de-fatos.md
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
459190303462683b36c4a32569ee0baa42a0c043f1ce774709dd2a3586eb45e9  marca/prancha-documento-card.html
a7038a1e904c96ad8498c3f25177c809aee4bbefaa3148bd478ca2c9860ff7bd  (monorepo) .claude/agents/executor-de-molde.md
e2ccf4cfa8e06a41b87909560a4c6a83074b498480afff420740a6d8e630930f  (monorepo, origin/main) marcas/top10/agentes/executor-de-molde.md
```

## Conflitos achados

1. **Crédito a 56 px × piso de 72 px.** O Lucas escolheu 56 px para todo crédito (07/10/2026, «Quero reduzir para 56px»),
   sabendo do piso. O piso de 72 px no 4K é **ofício** (portões do motor; `marca/_neutra/identidade.md`), e a roupa não o
   rebaixa. Hoje o canal convive por exceção registrada cena a cena; o motor novo vai reprovar todo crédito de foto,
   documento, dado e vídeo por 16 px. O crédito de mapa (piso de 40) passa. **Decisão a levar ao Lucão.**
2. **`marca/voz.md` §1 desatualizado:** diz eleven_v3 e a voz `iAc9oLyb1zcwD4O3ZTBv` (24/09); vale o `canal.json`
   (eleven_v4, `829pig94w9GefZ9jJQYl`, 07/10). O `CLAUDE.md` do canal também abre a seção da narração com «eleven_v3».
3. **Não existe `marca/finalizacao.json`.** As chamadas e a marca d'água entram pelo `ferramentas/xml-chamadas.py`, e a
   trilha e o volume, à mão no Premiere. O master automático do motor precisa dessas regras de algum lugar: hoje elas
   estão em `superficies.md` e em `estudio/canal-motor.json` › `master`.
4. **MapTiler:** o plano Flex do Lucas cobre vídeo só para canal com até 100 mil inscritos, com o crédito na tela em todo
   quadro de mapa. Antes de chegar lá, licença custom.
5. **Roupas de `marca/agentes/` atrás da identidade:** o tratamento do satélite 65 % / 70 % (diretor-de-arte, mapista,
   qc-visual, pesquisa-geo; e `marca/embalagem.md` §3) foi superado pelo tratamento C de 09/10; a pausa de ~0,14 s do
   montador, pelos 0,25 s do v4; o «espectador norte-americano» do qc-visual, pelo público de 14/10. Aqui vale o mais novo.
6. **Banco pago:** os quatro bancos da marca (Envato, Motion Array, Storyblocks e Shutterstock, `marca/midia.md` §1 e
   §2.3) são assinaturas da Top10 e continuam no canal, só pelo navegador, nunca por script ou robô (decisões do Mateus
   de 22/out/2026: «Vou usar Storyblocks e Envato aceitando o risco» e, às ~08:30Z, Shutterstock e Motion Array também).
   O motor não baixa de banco (`midia.caca_stock_assinado: false`): o agente escreve a busca e o item fica pendente para
   quem baixa pelo navegador.
7. **Ritmo:** a marca escreve 150–160 palavras/min; o v4 mediu 158 a 184. O Lucas aceitou («ritmo ok», 07/10).
8. **Volume:** a voz sai a −19,7 LUFS e o Lucas sobe 5,5 dB no Premiere (≈ −14,2); o alvo do master automático
   (−14 LUFS) bate com o que ele faz à mão.

## Fora desta roupa (ofício, máquina ou histórico, e onde continua)

Comandos, portões e variáveis da pré-v1 (`node scripts/…`, `REGIE_MOTOR`, `portao-margens`, `qc-cena`); a regra de não
contornar site que recusa robô; o relógio `words.json` e os aliases na âncora; onde gravar laudos e quem tem `Write`; o
procedimento de gasto e contador da MapTiler; a caça pelo navegador e o registrador; a conferência por sha256 do
conferente de mídia; o modelo de IA de cada agente (`CLAUDE.md`, «Os modelos»); avisos sobre moldes do Top10; os
detalhes do Juneau e do vídeo 2 (estudo de 2018, Cascade Point, incertezas de Hamlin, override de 76 px); o orçamento
de imagens do qc-visual (M11). Tudo continua em `marca/agentes/`, `CLAUDE.md` e `APRENDIZADOS.md`.

## Perguntas ao Lucão

1. Crédito: mantém 56 px com exceção permanente no motor, ou sobe para 72 px?
2. YouTube: os vídeos saem em People & Blogs (22, medido em 21/out); fica, ou vai para Education (27)? Qual o e-mail de contato profissional? Há playlist geral,
   e qual o id? O que marca em «conteúdo alterado ou sintético» (o perfil está em «sim»)? O canal está monetizado?
3. B-roll genérico sem a assinatura da Top10: de onde vem?
4. Pendências antigas da marca, se quiser fechar: norte para cima ou órbita no mapa; bandeira do Canadá na prancha; vídeo
   de época abaixo de 4K; a palavra de foto de arquivo (`FILE`); grifo fixo; papel da manchete; nota de tradução; a
   ilustração sobre o mapa depois do Peru; a voz da chamada; o arranjo da tela final no Studio.
