# RÉGUA — cenas de verdade para copiar a ESTRUTURA

Estas são seis cenas que foram ao ar no Canal Top10, em 4K nativo (`data-render="4k-native"`,
palco 3840×2160). O editor-de-arte lê uma ou duas **inteiras** antes de desenhar uma cena do
mesmo modo. Elas mostram como a cena se organiza: o carimbo `Word-lock (−inSec)` no cabeçalho,
os blocos que entram na palavra da narração, a câmera que nunca para, onde o crédito fica e como
a mídia real entra.

Origem: `top10-estudio/seed/examples/dourados/<Mxx>/`, commit `4afda124`. Cópia byte a byte, com
o sha256 de cada arquivo em `ORIGEM.json`. O estúdio tem 73 cenas e 74 MB de régua; aqui estão
só as 6 que já nasceram em 4K e cobrem modos que todo canal usa (5,9 MB).

## ⚠ Leia antes de copiar qualquer linha

**As cores e a fonte destas cenas são do Top10, não do seu canal.** Todas elas escrevem
`font-family:"Neue Haas Grotesk Display Pro"`, e nenhuma usa `var(--…)`. Cada uma tem de 7 a 51
cores em hex cravado. A mais repetida é o âmbar `#FFB13D`, que aparece nas seis, com os
navies `#050F1C` e `#0E2A44` e o branco-gelo `#F2F7FA`. Tudo isso é roupa do Top10. A Neue Haas é uma fonte proprietária
e não pode ir para outro canal.

Na sua cena:

| O exemplar escreve | A sua cena escreve |
|---|---|
| `font-family:"Neue Haas Grotesk Display Pro",…` | `font-family:var(--fonte)` |
| `#050F1C`, `#0E2A44`, `#16405E` (fundo, painel) | `var(--fundo)`, `var(--painel)` |
| `#F2F7FA`, `#AFC4D6` (texto) | `var(--texto)`, `var(--sec)` |
| âmbar `#FFB13D`, laranja, teal, vermelho | `var(--acento)`, `var(--dado)`, `var(--geo)`, `var(--alerta)` |
| amarelo de marca-texto (o Top10 usa `#F4D03F`) | `var(--grifo)` |
| `clamp`, `seg`, `eo`, `eb`, `win`, câmera, grão escritos à mão | `const {clamp,seg,eo,eb,win,camera,grao,seekTo}=RIG;` |
| `__fotosProntas` escrito à mão | `window.__fotosProntas = RIG.prontas();` (espera também a fonte) |

Os valores moram em `marca/tokens.css` (a fonte, em `marca/fontes/`), e a cena liga esse arquivo
com `<link rel="stylesheet" href="../../../marca/tokens.css">`. O `RIG` mora em
`templates-cena/_rig.js`, na raiz do canal: **copie o arquivo inteiro** num `<script>` logo antes
do script da cena. Ninguém o injeta por você, e uma cena que chama `RIG` sem tê-lo copiado morre
no carregamento com "RIG is not defined". Copiado, a cena não depende de caminho nenhum para
funcionar, e o carimbo do render muda quando o rig muda.

**Copie a estrutura, nunca o conteúdo nem os números.** Os textos (Descartes, Flevoland, terras
raras) são de outros vídeos.

**A régua é lida como código, não é aberta no navegador.** Os caminhos `../_media/…` destas cenas
apontam para a produção original, que não existe mais. Por isso três exemplares têm os quadros
marcados `.OCO` (em português, "oco"): a foto sumiu e o quadro mostra a moldura vazia.
O `.brief.json` de cada um registra isso em `"midiaIntegra": false`.

## O que cada exemplar ensina

Cada pasta tem o `.html`, o `.brief.json` (modo, duração, quadros) e três quadros PNG, em 30%,
60% e 90% da duração. Olhe os quadros para ver o resultado e leia o HTML para ver como se faz.

### M06 · Citação de pessoa real: `M06/citacao-descartes-holanda.html` (12 s · quadros OCO)
- A citação é o objeto principal e tem hierarquia. As aspas decoram, o corpo vem em peso leve e o
  remate vem em Black ("criaram a Holanda"). O olho lê a frase e para no golpe.
- A atribuição é um bloco com filete: retrato real, nome, credencial e anos de vida. O bloco
  declara "atribuição disputada", porque a honestidade do fato também entra na arte.
- A silhueta do país é o contexto que prova o assunto. Não é enfeite.
- O retrato vinha de `../_media/foto/descartes/descartes-retrato.jpg`, que não existe mais.

### M10 · Linha do tempo: duas variantes (quadros íntegros)
- `M10/linha-do-tempo-moinho-vapor-diesel.html` (20 s) **é a principal**. Tem quatro estações, e
  cada ícone desenhado muda de tecnologia. A linha conta a história pelo desenho, não por rótulos
  numa régua vazia. "HOJE" vem numa pílula quente, porque a linha tem destino. O cenário (água e
  terra) continua por baixo: o tempo passa dentro do lugar do vídeo.
- `M10/linha-do-tempo-flevoland-1986.html` (37 s) é a variante com **uma** data que importa: a
  geometria real da província, o ano num medalhão e a régua 1579 → 1840 → 1986 embaixo. A
  geometria está inline, dentro do HTML.

### M11 · Ranking de barras (top-N): `M11/ranking-terras-raras.html` (8 s · quadros OCO)
- É ranking de verdade: 1º e 2º ganham corpo, rótulo e bandeira, e a cauda vira barras pequenas
  e mudas. A hierarquia é a informação.
- As barras são cilindros empilhados com textura, com volume e sem ruído.
- A unidade está no título e a fonte do dado (USGS, com o ano) fica no topo. Número real chega
  com procedência.
- Uma caixa lateral separa o recorte secundário do principal, em vez de misturar duas métricas.
- As bandeiras apontam para `../../../assets/flags/{br,cn}.png`, e o caminho vale igual no canal:
  as bandeiras moram em `assets/flags/<iso2>.png` (veja "Caminhos" abaixo). O
  `setTimeout` da linha 467 é um teto de espera do gancho de prontidão, não movimento. Na sua cena
  isso é o `RIG.prontas()`, que espera o `<image>` do SVG sem relógio.
- Este é o exemplar com mais cor cravada: 51 hex. É o que mais ensina a marca errada a quem
  copia sem ler este aviso.

### M12 · Montagem histórica: `M12/montagem-historica-polder-beemster.html` (16 s · quadros OCO)
- Usa documento de época **real** (um mapa de 1612, uma gravura de 1610 e um corte de 1734), e não
  ilustração fabricada.
- A legenda queimada no canto ("1612 · PÔLDER BEEMSTER · DRENADO POR 40 MOINHOS") dá data, lugar e
  número sem tapar a imagem.
- O tratamento monocromático une peças de séculos diferentes numa superfície só. O crédito fica
  no rodapé, pequeno e sempre presente.
- As três imagens vinham de `../_media/foto/moinho-historico/…`, que não existe mais.

### M21 · Processo em etapas: `M21/processo-bombear-degrau-por-degrau.html` (15 s · quadros íntegros)
- As etapas são degraus de verdade dentro do cenário, e a água sobe de nível em nível. O processo
  é a geometria da cena, não uma fileira de círculos numerados.
- Cada degrau tem o seu agente desenhado (moinho ou bomba), e não só um rótulo.
- O destino ("CANAL MAIS ALTO") aparece antes do fim, e o espectador sabe para onde o processo vai.
- É a alternativa ao stepper genérico 1 → 2 → 3, que é cena tímida.

### M24 · Pergunta-retórica: `M24/pergunta-retorica-um-habito.html` (18 s · quadros íntegros)
- A revelação é curta e cravada: "UM HÁBITO.", com o ponto. Cena de virada não comporta
  parágrafo, só a palavra que a narração acabou de dizer.
- O texto entra sozinho no alto e o cenário continua vivo e fora de foco embaixo. A frase tem palco.
- O contexto (a prancheta, o dique em obra) fica em silhueta apagada e nunca compete com a frase.
- Word-lock: a palavra aparece no quadro em que é falada.

## Caminhos: do estúdio para o canal

As cenas do canal moram em `out/<proj>/graphics/<id>.html`, a mesma profundidade do estúdio.
Por isso só o prefixo muda:

| No exemplar | No canal | Onde aparece |
|---|---|---|
| `../../../assets/brand/…` (logo, tokens) | `../../../marca/logo/…`, `../../../marca/tokens.css` | nenhum destes 6; o molde de título do estúdio usa |
| `../_media/…` | `../_media/…` (igual: a mídia da produção) | M06, M12 |
| `../../../assets/flags/<iso2>.png` | `../../../assets/flags/<iso2>.png` (igual: o canal tem as bandeiras em `assets/flags/`) | M11 (`br`, `cn`) |

**Bandeiras:** o canal traz o acervo em `assets/flags/<iso2>.png` (ISO 3166-1 alfa-2 minúsculo,
flagcdn, domínio público; a procedência está em `assets/flags/_PROCEDENCIA.json`, o nome na tela →
código em `assets/flags/_INDICE.json`, e os membros da OTAN em `assets/flags/nato/`). É o mesmo
caminho que as roupas dos agentes usam. Alguns códigos existem só em `.svg` (o `_INDICE.json` diz
quais): apontar para um `.png` que não existe faz o render abortar com "mídia que não carregou"
(código 4). Bandeira que falta se baixa na mesma convenção e entra em `assets/flags/` com a entrada
no `_PROCEDENCIA.json`.

## O cardápio de modos (M01–M33)

O `modo` do espelho é a **família** (`dados`, `mapa`, `footage`…). O código `Mxx` vai no campo
opcional `modelo`, e os dois juntos dizem exatamente qual cena é: `{"modo":"dados","modelo":"M11"}`.
Uma família cobre vários modelos. `dados` cobre M09, M10, M11, M13, M15, M18 e M23, e escrever só
a família obriga o editor a adivinhar qual dos sete desenhar.

Resumo de `top10-estudio/knowledge/CATALOGO-MODELOS.md` (commit `4afda124`), sem o que é do Top10.
Se o modo tem exemplar aqui, a coluna diz qual.

| Modelo | O que a cena é | `modo` | Régua aqui |
|---|---|---|---|
| M01 | Abertura: tipografia cinética + o motivo do tema (o kicker é do canal) | cinematico | — |
| M02 | Desenho explicativo: o mecanismo DENTRO do cenário da narração, takes do plano aberto ao detalhe | desenho | — |
| M03 | Mapa 2D: localização, rota, fronteira, área; geometria real, nunca país desenhado à mão | mapa | — |
| M04 | Mapa 3D "drone": câmera orbitando um lugar com relevo real | mapa3d | — |
| M05 | Documento grifado: matéria ou estudo recriado limpo, grifo progressivo na palavra | documento | — |
| M06 | Citação de pessoa real: foto real, nome, cargo e fala com o trecho-chave grifado | citacao | **M06** |
| M07 | Footage ou foto real em tela cheia: a mídia é a heroína, scrim mínimo, texto essencial | footage / foto / aereo-real | — |
| M08 | Split comparativo: esquerda × direita com divisor animado; o contraste é a mensagem | split | — |
| M09 | Número-herói: UM número carrega a cena, dentro de um cenário | dados | — |
| M10 | Linha do tempo: eixo de datas, marco "hoje", varredura | dados / desenho | **M10** (2) |
| M11 | Ranking de barras: top-N real, a barra-herói esmaga as outras na palavra | dados | **M11** |
| M12 | Montagem histórica: várias fotos e gravuras DA ÉPOCA, Ken Burns, data-âncora | foto / cinematico | **M12** |
| M13 | Medidor cênico: velocidade, pressão ou temperatura como instrumento desenhado | dados / desenho | — |
| M14 | Print social recriado: post ou mensagem limpos, com grifo na frase citada | documento | — |
| M15 | Pictograma: 1 ícone = N unidades, preenchido na palavra | dados | — |
| M16 | Mapa de época: cartografia histórica real, com rotas animadas por cima | mapa / foto | — |
| M17 | Escala: o número abstrato vira comparação física (N objetos-referência empilhados) | desenho / dados | — |
| M18 | Cronômetro: prazo ou atraso como relógio cênico varrendo | dados | — |
| M19 | Antes → depois: o MESMO enquadramento em dois tempos, com divisor deslizante | foto / split | — |
| M20 | Zoom de detalhe: foto ou documento real, lupa progressiva até o detalhe que prova a frase | foto | — |
| M21 | Processo em etapas: 3 a 5 passos DENTRO do cenário, word-locked | desenho | **M21** |
| M22 | Anatomia (raio-X): corte com camadas rotuladas acendendo uma a uma | desenho | — |
| M23 | Custo visual: dinheiro ou quantidade em pilhas proporcionais | dados | — |
| M24 | Pergunta-retórica: pergunta grande → pausa → revelação curta | cinematico | **M24** |
| M25 | Split de footage: 2 a 4 faixas de vídeo real, cada uma entrando na sua palavra, sem texto | split-footage | — |
| M26 | Card de navegação/progresso e card de título de tópico (overlay com alpha) | navegacao / titulo-topico | — |
| M27 | Colagem editorial em gravura: monocromia do tema, recorte de papel, serif com sombra dura | gravura-colagem | — |
| M28 | Apresentador + informação: ele cede o espaço e o texto ocupa, nunca atrás dele | apresentador-info | — |
| M29 | Mosaico de territórios: N painéis, cada um com registro real, nome e cor | mosaico | — |
| M30 | Placar de votação: dois totais, a diferença em destaque | dados | — |
| M31 | Galeria de pessoas: retratos reais com nome e vínculo, em sequência | foto | — |
| M32 | Apresentador puro: a tela é ele (reação, respiro, virada) | apresentador | — |
| M33 | Apresentador + registro real: ele ao lado da foto ou vídeo do que fala | apresentador-midia | — |

Os modos M28, M32 e M33 só existem em canal com apresentador filmado. Canal faceless não os usa.

**Card de capítulo (M26, `titulo-topico`) é OPCIONAL por canal**, e o faceless pode ter. No
roteiro, uma linha só com o **Título** em negrito é a pausa do card: a narração mantém ali os 3 s de
silêncio, e o montador põe nesse vão uma cena de card de capítulo. Os moldes estão em
`templates-cena/navegacao/` (`titulo-topico.html`, `card-progresso.html`).

Os modos mais usados sem exemplar 4K aqui são M07 (footage), M08 (split) e M09 (número-herói). No
estúdio eles estão no palco antigo, 1920, e copiar os números de lá produz cena na metade do
tamanho. Portá-los para 4K é trabalho novo, e a pendência está registrada.

## As leis que valem para toda cena (o contrato)

- `<html lang="<idioma do canal>" data-render="4k-native">`, com todas as coordenadas em 4K.
- `window.__duracao` em segundos e `window.__renderAt(t)` puro, que nunca lança erro.
- Nada anda sozinho. A lista que o render aplica é UMA, `src/cena/proibidos.mjs` do motor, e
  reprova a cena (antes de abrir o Chrome) quando o código dela usa: `Date.now()`, `new Date`,
  `Date()`, `Math.random()`, `@keyframes`, transição CSS (`transition:` que não seja `none`/`0s`,
  inclusive pelo JS), `el.animate(…)`, animação SMIL do SVG (`<animate>`, `<animateTransform>`,
  `<animateMotion>`, `<set>`) e `<video autoplay>`/`<audio autoplay>`. O texto de tela não conta.
- Toleradas, como no estúdio: `setTimeout` só como teto do gancho de prontidão; `setInterval`,
  `requestAnimationFrame`, `performance.now` e `.play()` só no ramo `if (window.__PREVIEW)`, o da
  galeria. O render congela o rAF e anula o `play()`, mas não conserta um movimento que dependa
  deles: fora da galeria, vídeo anda por `RIG.seekTo(v, f(t))` e tudo o mais por `t`.
- `window.__fotosProntas = RIG.prontas()` em toda cena. Ele espera as imagens e as faces da fonte
  da marca, e o que não carregou (face, `tokens.css`) vai para `window.__fontesFaltando`, que o
  render reprova com código 4: a cena nunca sai calada na fonte do sistema.
- Paleta do vídeo: `RIG.paleta({acento:"#…", dado:"#…"})`, um objeto de papéis. O `paleta` do
  espelho é prosa e não se passa direto: o rig recusa e registra em `window.__avisos`.
- Mídia sempre relativa: `../_media/…` e `../../../marca/…`.
