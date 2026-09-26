> **[porte Regie]** Origem: `top10-estudio/knowledge/qc/lentes.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# QC VISUAL — as 14 lentes oficiais do Estúdio Top10

> Fonte única das rubricas de QC. O agente `qc-visual` julga TODA cena por estas lentes sobre FRAMES REAIS.
> Escala 0–10; **7 = bom o suficiente**; nitpick não derruba abaixo de 7. As REGRAS DA CASA
> (`seed/aprendizado.md` + `.auto.md`) têm a mesma força: violação de lei no foco da lente = reprova citando a lei.
>
> **Cada lente diz o que REPROVA e o que só SINALIZA — e essa fronteira é tão importante quanto a
> rubrica.** Reprovar (<7) segura o render; sinalizar é nota ≥7 com o problema anotado, para quem
> desenha decidir. Alarme falso aqui é bug de prioridade alta: verificação que grita à toa ensina a
> ignorar a verificação, e aí ela para de proteger justamente quando acerta.
>
> ## ⚖️ A DIVISÃO DE TRABALHO — leia antes de julgar
> **O que é MEDÍVEL já foi medido por script, e você não repete a medição.** Colisão de texto,
> piso de tamanho, contrato de cena, til do Bold, hex corrompido, crédito-fantasma, src quebrado
> e entidade malformada rodam ANTES de você (tabela no fim) e **vetam sozinhos** — nenhum é
> diluído pela média das lentes.
>
> Sua inferência é cara e é a única coisa que enxerga o que régua nenhuma pega: **se a cena é a
> ESCOLHA certa para aquela frase, se ela se explica em dois segundos, se o movimento tem
> propósito, se a paleta serve ao assunto.** Gastar seu julgamento contando pixels é pagar caro
> por um trabalho que o script faz melhor — e pior: se você medir a olho e discordar do gate, a
> sua leitura é a errada.
>
> Quando um gate reprovar, a cena volta com o número dele. Você julga o resto.
> (Origem: painel de críticos da era-2, hoje aposentado — estas lentes são a fonte única.)

### ⚠️ A ÚNICA medição que você REFAZ: a carga em lote SUBMEDE cena com mídia

`qc-carga`/`qc-poluicao` rodando o **lote inteiro num só Chrome não espera `__fotosProntas`** — cena
com foto ou vídeo é medida **antes de a mídia carregar**, e o número sai baixo. Medido em 26/jul: às
**16:52** o rodapé dizia *"0 cenas ≥2,0"*; às **17:20**, com os arquivos **intocados**, uma delas era
a nº 1 com **2,19**. A medição por **arquivo isolado é estável**; a do lote não é.

**Antes de reprovar por carga — e antes de ordenar fila de conserto por ela — re-meça o arquivo
sozinho.** Ranking construído sobre métrica instável ordena a fila errada, e a cena que mais polui
fica de fora enquanto uma limpa vai para a bancada. Esta é a exceção ao "não remeça o que o script
mediu": não é desconfiança do critério, é desconfiança do **momento** em que ele mediu.

## 1 · espaco (vê TODOS os frames)
Composição & presença. **O `qc-tamanho.mjs` já mediu todo texto contra o piso do palco e o
`check-overlap.mjs` já mediu colisão por bbox — não recontе.** O que sobra para você é o que a
régua não vê:

Zonas espaciais deliberadas ou elementos jogados? Canto superior DIREITO livre para a logo?
**Hierarquia:** existe UM elemento dominante, ou tudo disputa atenção no mesmo peso? A leitura
tem ordem (o olho sabe onde começar)? Label cortado pela borda ou encostado nela — o gate mede
sobreposição entre textos, não texto contra a moldura.

**PRESENÇA DE TV (a queixa nº1 do Mateus):** passar no piso não é o mesmo que ter presença. Um
número-herói no piso exato, competindo com três rótulos do mesmo tamanho, é reprovação de
hierarquia mesmo com o gate verde. Pergunte: a três metros da TV, o que esta cena grita?

## 2 · factual
Fidelidade & factual. O visual PROVA a frase (ou a contradiz)? Geografia/mapa/contorno/posição REAIS? Números coerentes com a realidade? Fonte citável no rodapé quando há dado? **ASSET CORRETO:** bandeira/retrato/logo/selo é EXATAMENTE a entidade citada — asset trocado = reprova IMEDIATA. **ASSOCIAÇÃO POSICIONAL:** rótulo/data/número grudado no ELEMENTO CERTO (a data no reator, não na bomba; o nome sobre a pessoa certa) — ancorado errado INVERTE o sentido = reprova imediata. **GEOGRAFIA REAL:** mapa à mão ou vetor cinza chapado = reprova; satélite real na base ÚNICA **MapTiler satellite-v2** (PESQ-21 — base misturada entre cenas irmãs do mesmo vídeo também reprova) ou globo com textura reprojetada; país/região destacado = polígono inteiro por GeoJSON, nunca pino (ARTE-46); não cortar landmass.

**GRAFIA DE TELA — aportuguesar NÃO é regra cega.** Vale a forma que a imprensa brasileira usa
**hoje**, não a que um dicionário antigo consagrou: **"Nova Iorque"** sim; **"Singapura"** sim —
"Cingapura" caiu com a mudança ortográfica e **não se usa**. Um QC reprovou "SINGAPURA" na tela e
mandou trocar por "Cingapura" (28/jul, `el-nino`): estava errado, e o vídeo travou por causa disso.
**Na dúvida sobre um topônimo, SINALIZE — não reprove.** Aportuguesamento de museu envelhece a tela,
e uma reprova errada custa mais que a grafia. Nome próprio de pessoa/instituição é outra coisa: aí
vale a fonte, conferida contra a transcrição (que garbla), e nome errado É reprova factual.
Detalhe e casos: `marcas/top10/agentes/qc-visual.md` §6.

## 3 · wordlock (vê TODOS os frames)
Word-lock & anti-eco. **O `qc-espelho-fala.mjs` já provou que a CENA cai no tempo da fala certa
(cruza a âncora com a transcrição); o que você julga é o timing DENTRO da cena.** Cada elemento entra no tempo EXATO da fala que o ancora (nem antes, nem depois)? A tela ECOA a narração em texto (PROIBIDO)? Texto é mínimo (rótulo/número/nome), não transcrição? SINCRONIA: o gráfico acaba no time-out da frase — não sobra conteúdo de outra cena nem fica parado depois da fala.

## 4 · abordagem
A decisão mais importante. O modo escolhido é o CERTO para esta frase? Algo real específico → foto REAL; cenário/evento com vídeo → FOOTAGE; tese numérica → GRÁFICO enxuto; conceito → DESENHO. Errou o modo → diga qual deveria ser. REPROVE SEM DÓ cena sobre lugar/época/evento/personagem REAL feita só de vetor + fundo escuro liso (vetor-só não evoca o real — erro nº1 do canal). MAS footage genérico/off-tema é tão ruim quanto — reprova igual.

## 5 · acessibilidade
Clareza em 2 segundos. Alguém de fora ENTENDE a cena em ~2s? A mensagem salta aos olhos? A leitura é óbvia? **EXPLICA?** — o gráfico deixa claro o que a NARRAÇÃO afirma? Leia o roteiro da janela (words.json) e infira a premissa; o visual torna o argumento compreensível para leigo. Unidade/sigla solta (Sv, isostático) sem explicação = reprova. Gráfico que não explica nada = reprova forte.

## 6 · poluicao
"Too much"? Elemento/texto/enfeite demais? O que pode ser REMOVIDO sem perder o sentido? Respirando (espaço negativo) ou abarrotado? REDUNDÂNCIA: header repetindo o que o eixo/rótulo já mostra = corte. (Entidade HTML literal na tela é gate — não gaste lente com isso.)

## 7 · motion (vê TODOS os frames)
Nível After Effects. Easing suave (não linear seco), ritmo intencional, profundidade/camadas, entradas coreografadas? Parece motion design pro ou "PowerPoint"? O movimento tem PROPÓSITO? **NUNCA parada:** sempre há algo em movimento (respiração, partículas, brilho, deriva, push-in) — cena estática = reprova.

## 8 · fonte
Precisa de fonte ou não? (a) Dado/estatística/fato atribuível → "Fonte: …" citável obrigatória. (b) Imagem/vídeo com licença que exige atribuição (CC BY) → crédito obrigatório. (c) Domínio público/asset próprio/título sem dado → NÃO ponha fonte (crédito desnecessário POLUI). Reprove nos DOIS sentidos: dado sem fonte OU crédito supérfluo. (Crédito de mídia sem a mídia é gate duro — não gaste lente com isso.) **(d) BASE CARTOGRÁFICA E DADO PAGO NÃO ENTRAM NESTA LENTE:** a ausência de crédito de base de mapa, geometria ou dataset pago **nunca** é reprova ([ARTE-104], ordem do dono em 04/ago) — se a correção que você ia escrever começa com "adicionar crédito de base/geometria/dados", a nota é **10**, não 5. A única reprova possível nessa família é o crédito **presente** na tela. ⚠️ Esta cláusula vivia só no ofício do `qc-visual` desde 11/set/2026 e **faltava aqui, na rubrica que a doutrina declara fonte única** — a lacuna produziu 6 laudos que cobraram o proibido, 3 deles depois do conserto ([ARTE-315]).

## 9 · tema
A paleta/clima servem ao ASSUNTO? Cores e elementos REFORÇAM o tema (oceano→azul+escala térmica; militar→frio/tático; economia→verde/vermelho)? A paleta do VÍDEO (definida no espelho) manda e a cena mantém a família de cor das irmãs? Fundo/ilustração evoca o tema ou é decoração aleatória? Uma cor = um significado dentro da cena.

## 10 · cobertura (a coisa nomeada APARECE) — ARTE-88

**O erro que criou a lente.** No `el-nino`, a seção inteira da **anchoveta** — o peixe que sustenta
"a maior pesca de um peixe só do planeta" — passou **sem uma única foto do peixe**. Mateus: *"a
pessoa que está ouvindo sobre o peixe quer VER o que é o peixe."* Nenhuma das lentes originais pegava
isso: a cena estava composta, legível, no tempo da fala, na paleta certa e com movimento — e o
espectador saiu sem saber como o bicho é. Cena impecável, informação faltando.

**Como julgar.** Leia a fala da janela (`words.json`) e extraia os substantivos **concretos** — coisa
que existe no mundo e se pode fotografar: animal, objeto, alimento, planta, máquina, veículo, pessoa,
lugar. Para cada um, ache o registro real na tela. Quando **`out/<proj>/regencia.json` existir, ele já
fez essa extração beat a beat** (`cenas[].beats[].exige` + `auditoria.nomeados_sem_imagem`, que tem de
sair **vazio** — é o teste da anchoveta): julgue a **execução contra a prescrição**, não refaça o
trabalho do regente. Sem regência, a extração é sua.

- **REPROVA (<7):** o concreto **central** da cena — o que a tese nomeia, aquilo de que a cena trata —
  não tem registro real em parte alguma do trecho. Ícone, silhueta, vetor ou desenho no lugar dele não
  conta: podem **compor**, nunca **substituir** (ARTE-88). O teste: *o espectador que nunca viu isso
  sai da cena sabendo como isso É?* Se depende da imaginação dele, reprova.
- **SINALIZA:** concreto secundário sem imagem; ou o central aparece numa cena **irmã** do mesmo bloco
  e não nesta — aí nomeie a irmã que carrega a imagem, porque a cobertura se cumpre na **sequência**,
  não obrigatoriamente em cada cena.
- **NÃO REPROVE** o que qualquer um desenharia de olhos fechados (água, barco, rede, prédio). O
  critério é **duplo — central na frase E desconhecido do público**. Inventariar substantivo é o
  alarme falso que mata a lente.
- **Correção acionável:** o pedido exato à `pesquisa-imagens` ("foto/footage real de anchoveta,
  cardume e o peixe na mão do pescador"), nunca "faltou imagem".

## 11 · cadencia (o footage TROCA antes de cansar) — ARTE-89

**O erro.** Mateus mediu no próprio olho em `planetas-algodao-doce` e `el-nino`: *"fica rodando o
mesmo vídeo por muito tempo"*. A régua externa (estudo BBC/DW, `knowledge/referencias/`): plano médio
de **4,3–4,7 s, 12–14 cortes por minuto**. As referências trocam de imagem **3× mais rápido** que uma
cena nossa de footage único.

- **REPROVA (<7):** o mesmo footage ocupa a tela **mais de ~8 s** sem troca de plano, de ângulo ou de
  camada; **ou** havia variações do mesmo assunto baixadas em `_media/` para aquele beat e a cena usou
  **uma só**. Material baixado e não usado é banda e inferência pagas jogadas fora — e é a prova de
  que a troca era possível.
- **SINALIZA:** cena de 8–10 s raspando o teto; footage único onde de fato só existe um registro (aí a
  correção não é cortar, é **pedir variação nova** ou intercalar a camada gráfica).
- **NÃO REPROVE — as três exceções legítimas:**
  1. **`regencia.json` declara o `regime` da cena como `respiro`** — segurar a imagem ali é decisão de
     ritmo, não preguiça. Vídeo inteiro em rajada não tem pico nenhum.
  2. a cena dura **menos que o teto** (não há o que trocar);
  3. o plano é **movimento contínuo com propósito** (push-in, travelling, timelapse) que se resolve
     dentro da cena — o olho segue recebendo informação nova. O teto mede **imagem parada na retina**,
     não segundo de arquivo.
- **Correção acionável:** os pontos de corte (`@2,8s` → variação B, `@5,6s` → plano fechado) ou o
  pedido de variação, com o assunto exato.

## 12 · autoria (a identidade visual que TEM DONO) — ARTE-91

**A lei mais nova, e a mais grave da família.** Capa de livro, logo, embalagem, selo, cartaz, rótulo
— **se buscam, nunca se desenham.** Uma capa composta por nós, com tipografia elegante e o título
certo, é **uma edição que não existe**: quem confia nela procura na estante um objeto que ninguém
vende. Diferente de uma foto genérica, a capa desenhada **afirma** ser aquela obra — é a mesma família
do rosto fabricado, proibido nesta casa desde sempre. É o mesmo princípio de nunca desenhar país à mão,
aplicado à propriedade visual de terceiro.

**Como julgar.** Ache na cena tudo que **parece** propriedade visual de outra pessoa. Depois pergunte
**de onde veio**: é `<img>`/`<video>` apontando para arquivo real em `_media/`, com fonte registrada?
Ou é HTML/SVG/CSS — `div` com texto, gradiente e a fonte da casa — montado para **parecer** o objeto?

- **REPROVA (<7):** montado em HTML/SVG/CSS. Sem exceção e sem desconto pela beleza do resultado —
  **quanto melhor desenhado, pior o defeito**, porque mais gente acredita.
- **REPROVA também:** cena de `graphics-<lang>/` carregando a capa **PT-BR**. No internacional a capa
  é a da edição publicada **naquele idioma**, com o título como a editora o publicou — nunca a tradução
  literal do título brasileiro. O espectador alemão que vê a capa brasileira procura na livraria dele
  um objeto que não está lá. **Tradução de tela não traduz capa: troca o arquivo.**
- **SINALIZA:** logo/capa **real** porém desatualizado, ou em resolução que embaça no 4K — é defeito de
  asset, resolvido pela `pesquisa-logos`/`pesquisa-imagens` sem refazer a cena.
- **Correção acionável — duas saídas, nunca uma terceira:** (a) acionar a pesquisa pela capa/logo/
  embalagem **real** em circulação, conferida **olhando** (título, autor e selo legíveis e batendo com
  a narração); ou (b) trocar por **tipografia declarada** — o título no nosso padrão gráfico, que
  ninguém confunde com o objeto — ou pelo objeto genérico honesto (a pilha de livros, a estante) sem
  afirmar que aquele é o título. A tipografia declarada **não finge ser** o objeto; a capa desenhada
  finge.

## 13 · camadas (o recurso "Califórnia") — ARTE-90 · LENTE DE OPORTUNIDADE, **PISO 7**

**Esta lente NÃO reprova.** Ela nunca desce de 7 e nunca segura render. Está aqui porque a alternativa
— deixar a oportunidade só na cabeça de quem revisa — é a oportunidade perdida em silêncio; o laudo é
o único lugar onde ela sobrevive até o próximo conserto.

**A referência é a cena da Califórnia do `el-nino`**, nomeada pelo Mateus: footage real de fundo +
relógio/dado no canto inferior direito + texto-explicação no canto inferior esquerdo — **as três
camadas contando a MESMA história ao mesmo tempo**. O vídeo não é papel de parede: é coprotagonista da
explicação.

| camada | função |
|---|---|
| **fundo** (footage real) | a prova — "isso aconteceu" |
| **dado ancorado** (canto) | o número/tempo que situa |
| **explicação** (canto) | o que o espectador está vendo, e por quê |

**A pergunta:** o material das três camadas **existia** e a cena entregou uma só? Cena de mapa que só
tem mapa deixou duas na mesa — o mapa localiza, a foto mostra, o gráfico explica.

- **SÓ FALE QUANDO PUDER APONTAR O MATERIAL:** o arquivo em `_media/` que não entrou, o número do
  `needs`/da pesquisa de dados que ficou de fora, o `beats[].exige` da regência sem correspondência na
  tela. Sem material nomeado, **a lente cala** (nota 10, `problemas` vazio). "Podia ter mais camadas"
  sem dizer quais é palpite, e palpite em laudo vira ruído.
- **NÃO CONFUNDA COM POLUIÇÃO.** As três camadas são **âncoras fixas nos cantos** com o fundo vivo —
  densidade de **informação**, não de blocos soltos. O teto de carga (3 blocos) continua valendo e
  continua sendo do gate; três **assuntos** diferentes em três cantos é poluição, e quem julga é a
  lente 6.

## 14 · circulo (a cena JÁ FOI MOSTRADA) — ROT-48 virada para a tela

**A ROT-48 é lei de roteiro; esta é a versão dela para o olho.** Mateus: *"é extremamente ruim quando
o roteiro fica rodando em círculos… a coisa mais oscilante do universo"*. Recapitulação **visual** é o
mesmo defeito que a recapitulação de texto — o espectador vê, sente que já esteve ali, e o vídeo para
de avançar. Aqui você julga a **cena**, não o roteiro.

**A pergunta:** esta cena mostra de novo o que uma cena **anterior** já mostrou, sem acrescentar nada?
Compare contra as irmãs do mesmo vídeo (`espelho.json` + os HTMLs já fechados): mesmo asset, mesma
composição, mesmo dado, mesma metáfora.

- **REPROVA (<7):** repetição **sem degrau novo** — o mesmo footage/gráfico/mapa na mesma leitura,
  dizendo o que já foi dito. O teste da ROT-48 virado para o olho: *se esta cena sumisse, o espectador
  perderia alguma informação VISUAL?* Se não, ela é círculo.
- **SINALIZA:** eco de **forma** (o mesmo modelo do catálogo duas vezes seguidas) com conteúdo novo —
  cansa, mas informa; a correção é variar o modelo, não refazer a cena.
- **NÃO REPROVE — e aqui mora o alarme falso mais fácil desta bancada:**
  - **família de cor e consistência de marca não são círculo.** A lente 9 (*tema*) **exige** que as
    irmãs mantenham a família de cor; punir isso aqui reprova a cena pelas duas pontas.
  - **o callback plantado** — a volta deliberada a um elemento anterior para **pagá-lo** com informação
    nova (ROT-38) — é recurso, não repetição. A marca dele é o degrau novo.
  - **continuidade declarada** — a regência marca beats `tipo: "continua"` de propósito: a imagem que
    segura enquanto a fala avança não é imagem repetida.
- **Correção acionável:** qual cena anterior já cobriu aquilo, e **o que esta deveria acrescentar** (o
  ângulo novo, o dado seguinte, o corte para o detalhe) — ou a recomendação de fundir as duas.

## Gates determinísticos (rodam ANTES das lentes; veto absoluto)

**Uma varredura fecha todos de uma vez:** `top10 qc out/<proj>` chama `scripts/qc-cena.mjs`, que passa
contrato, carga, colisão, tamanho, til e src-existe em **cada** `graphics/*.html` do projeto — é
o que o editor-de-arte roda e conserta ANTES de entregar ao qc-visual e ANTES do render em lote. Os
marcados com **hook** rodam ainda no INSTANTE da escrita (`.claude/settings.json` → `PostToolUse`).
Se algum reprovou, a cena não deveria estar na bancada do qc-visual.
| Gate | Ferramenta | Veto |
|---|---|---|
| Colisão de texto (bbox medido) | `scripts/check-overlap.mjs` | qualquer par sobreposto — o limiar é **em escala 1920 e o script converte pro palco** (140 → 560 em 4K, porque área cresce ao quadrado); a **aspa decorativa** sai da conta automaticamente (`scripts/qc-ornamento.mjs`) ou por `data-qc-ornamento`, e o gate **relata** quantos ignorou |
| Excesso simultâneo | `scripts/qc-carga.mjs` | pico > 3 blocos-de-info. ⚠️ **Em LOTE este número submede cena com mídia** (não espera `__fotosProntas`) — re-meça o arquivo isolado antes de reprovar ou de ordenar fila por ele (nota no topo deste arquivo) |
| Tamanho de texto | `node scripts/qc-tamanho.mjs <html>` — detecta o palco e aplica o piso da REND-15 sozinho (3840 → herói 260 · rótulo 104 · eixo/crédito 72; 1920 → metade). **Sem variável de ambiente.** | reprova quando o maior texto **REAL** (não-ornamento) fica abaixo do piso de herói, ou quando um `data-qc-papel` declarado fica abaixo do piso do seu papel. **Ornamento tipográfico** (aspa/divisor isolado) sai da conta AUTOMATICAMENTE — `scripts/qc-ornamento.mjs`, sem depender de o autor marcar `data-qc-ornamento` — e é reportado. Herói só é cobrado em `dados`/`infografico`/`citacao`, em quem declara `data-qc-papel="heroi"`, ou em HTML solto sem espelho — `cinematico` e `documento` não têm herói. |
| Til do Bold | `scripts/_audit-til.mjs` | Ã/Õ maiúsculo em weight 600–749 (SIS-05: cobra a contagem de auditados) |
| Crédito-fantasma | detecção de crédito de mídia sem mídia | crédito supérfluo |
| Contrato de cena | `scripts/qc-contrato.mjs` | sem __renderAt/__duracao; Date.now/Math.random/@keyframes |
| Hex corrompido | hook `cena-escrita.mjs` | letra colada no fim de um hex EM VALOR de propriedade (o `#badge` seletor não conta) |
| src apontando pro vazio | `scripts/qc-src-existe.mjs` (+ hook) | qualquer `src`/`href` de mídia inexistente — a cena iria pro 4K com fundo PRETO |
| Entidade HTML malformada | hook `cena-escrita.mjs` | `&amp;nbsp;`, `nbsp;` sem o `&`, tofu de encoding |
| Palco × modo de render | hook `cena-escrita.mjs` | declarar `4k-native` com palco 1920 e SEM `html{zoom:2}` |
| Cena no tempo da fala | `scripts/qc-espelho-fala.mjs` | `inSec` cuja âncora não acontece naquele trecho da transcrição  **[porte Regie: não veio — `qc-espelho-fala.mjs`]** |


### Como declarar o papel de um texto

`data-qc-papel="heroi|rotulo|eixo|credito"` no elemento — o piso daquele papel passa a **bloquear**, não
só avisar. Irmã de `data-qc-ornamento` (que tira o elemento da conta). Sem declaração, o piso de
legibilidade vale como **aviso**: o acervo tem 500 cenas antigas com crédito a 40–58px, e reprovar todas
de uma vez viraria ruído — e ruído em gate ensina a ignorar o gate. `--estrito` converte aviso em reprova.

**Ornamento não precisa mais ser marcado.** A aspa decorativa gigante e o divisor isolado saem da conta
do tamanho e da colisão AUTOMATICAMENTE (`scripts/qc-ornamento.mjs`, fonte única do critério). O
`data-qc-ornamento` continua valendo (declaração do autor vence), mas era regra morta sozinho — das 8
cenas do disco com aspa decorativa, 1 tinha o atributo e 7 não; a pior tinha a aspa a 150px mascarando a
fala real a 64px. O critério é ESTREITO de propósito: só aspa/divisor **isolados** (um glifo que não é
palavra); `$`, `%`, `×`, `?` são conteúdo e continuam contando (o `$` de 145px É o herói de uma cena).
