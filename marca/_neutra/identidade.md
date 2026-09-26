<!--
PORTADO de top10-estudio/marcas/_neutra/identidade.md (commit 4afda12). O que mudou: o caminho `marcas/_neutra/voz.md` virou `marca/_neutra/voz.md` (o canal da Régie tem uma pasta de marca só, no singular).
Paleta e tipografia (23/09/2026): os nomes de token são os de `marca/tokens.css` (--fundo, --painel,
--acento…, e não --bg/--bg2), porque é esse o nome que toda cena escreve em var(--…); um nome que
só existe aqui deixa a cor indefinida na cena, sem erro. O acento #3A7BD5 virou #4C8DF0: o antigo
dava 4,37:1 sobre o próprio fundo, abaixo dos 4,5:1 que a seção "Layout mínimo" exige. A fonte
deixou de ser a pilha de sistema: ela muda de máquina para máquina (Segoe UI no Windows, outra no
Linux) e a mesma cena saía com duas tipografias. Os valores têm UMA fonte: o marca-modelo.json do
motor (src/marca/marca-modelo.json), de onde o gerador escreve marca/tokens.css; esta tabela os repete
para leitura, e o teste testes/cena-base.test.mjs reprova se divergirem do modelo. O --grifo é
#FDEF94 desde 23/09/2026: o #F2D45C anterior colapsava com --dado nas três simulações de daltonismo.
A Inter mora numa pasta por família, marca/fontes/inter/, com a licença e o ORIGEM.json dentro dela.
É o PISO que o arquiteto-de-marca exige ler antes de escrever a marca do canal (CONTRATO §1):
a marca do canal escreve ACIMA dele, nunca o rebaixa. Não edite para "personalizar" o canal —
personalização mora em marca/identidade.md e marca/voz.md.
-->

# MARCA NEUTRA — o default quando nenhum canal é injetado

> O agente tem que **funcionar** sem marca. Mais simples, sem identidade — mas entrega.
> Nada aqui é gosto: é o mínimo legível para uma tela de vídeo.

## Palco e formato

**O palco é 3840×2160. Sempre, em qualquer canal, de qualquer empresa.** Não é preferência de
marca — é o piso do ofício, e por isso mora aqui na marca *neutra* em vez de na do Top 10.

> Decisão do Mateus, 22/jul/2026: *"toda e qualquer empresa (que será geralmente de canais no
> YouTube = criação de vídeos) deve ser em 4K sempre, ou seja, 3840×2160 pra qualquer coisa —
> esqueça o HD, HD não faz parte da minha filosofia, e eu nunca economizaria pra colocar HD no
> lugar de 4K."*

Quem monta o pipeline **declara** `palco: {largura: 3840, altura: 2160}` para todo agente que
desenha. Agente sem palco declarado assume esse valor — nunca um menor. Não existe "modo
econômico": se a máquina não dá conta de 4K, o certo é renderizar mais devagar, não menor.

O único palco menor que se pode encontrar é **1920, em cena LEGADO já autorada** (`data-render`
ausente). Isso é histórico, não uma opção: a saída final continua 4K nos dois caminhos (o legado
captura viewport 1920 × DPR 2). Cena nova em 1920 é defeito, não escolha.

## Pisos de texto (4K nativo — estes são os números, não uma escala de outro)

| Papel na tela | Alvo | Piso que reprova |
|---|---|---|
| número-herói / título | 400px | **260px** |
| rótulo | 140px | **104px** |
| eixo / legenda | 88px | **72px** |
| crédito / fonte | 80px | **72px** |

Só ao auditar cena LEGADO (1920) use a metade destes valores — é a única direção em que a
conversão vale, e ela olha pra trás.

## Paleta neutra

Os nomes são o contrato com as cenas: a cena escreve `var(--fundo)`, nunca o hex. Fonte dos
valores: o `marca-modelo.json` do motor, que o gerador escreve em `marca/tokens.css` (é lá que a cena
os lê).

| Token | Valor | Uso |
|---|---|---|
| `--fundo` | `#111418` | fundo base |
| `--painel` | `#1B2026` | profundidade / painel / cartão |
| `--linha` | `#2C333B` | régua, borda, separador (nunca texto) |
| `--texto` | `#F2F4F7` | texto principal |
| `--sec` | `#A7B0BC` | texto secundário, legenda, crédito |
| `--acento` | `#4C8DF0` | destaque único da cena |
| `--dado` | `#E8B04A` | número, valor, a barra-herói |
| `--geo` | `#3FB4A6` | território, água, rota no mapa |
| `--alerta` | `#EA5E56` | perigo, queda, guerra |
| `--grifo` | `#FDEF94` | marca-texto; o texto por cima dele usa `--fundo` |

Um acento só. Sem gradiente de marca, sem glow, sem textura. Toda cor de texto ou de sinal passa
de 4,5:1 sobre `--fundo` E sobre `--painel`.

## Tipografia

A fonte vem por ARQUIVO, nunca da máquina: Inter 4.1 (licença SIL OFL 1.1, em
`marca/fontes/inter/`, com a `LICENCA.txt` e o `ORIGEM.json` na mesma pasta), declarada em `marca/tokens.css` com o nome de família `"Marca"`. A cena escreve
só `font-family: var(--fonte)`. A pilha de sistema que vem depois de "Marca" no `--fonte` é
reserva, e reserva usada é defeito: o rig registra a face que não carregou em
`window.__fontesFaltando` e o render reprova.

Peso 900 para número-herói, 700 para título, 600 para rótulo, 400 para corpo
(`--peso-heroi`, `--peso-titulo`, `--peso-rotulo`, `--peso-texto`). Sem itálico decorativo.

## Layout mínimo

- Margem de segurança: **4% de cada lado** do palco. Nada de texto fora dela.
- Um bloco de informação por vez; **máximo 3** simultâneos na tela.
- Contraste mínimo de 4.5:1 entre texto e o que estiver atrás dele; sobre foto/vídeo, scrim escuro.
- Crédito/fonte no rodapé, alinhado à margem de segurança.

## Idioma e escrita de tela

O idioma da tela é o **idioma da narração** — sem aportuguesamento nem estilo editorial próprio.
Nome próprio como a fonte grafa. Número com a separação decimal do idioma.

## Voz

Sem persona. Ver `marca/_neutra/voz.md`.
