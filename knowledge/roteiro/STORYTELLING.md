> **[porte Regie]** Origem: `top10-estudio/knowledge/roteiro/STORYTELLING.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Módulo de `knowledge/ROTEIRO-NARRACAO.md` (a «Ordem de leitura»). O agente `roteirista-narracao` do Top10 é o `roteirista` neste canal, e o `roteiro-boco.md` (o texto que o apresentador lia) é `out/<proj>/roteiro.md`; o `roteiro-editor.md` fica ao lado dele, em `out/<proj>/`. Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# STORYTELLING — como se conta (módulo do roteirista)

> O vídeo é uma **explicação conduzida**: o espectador sai entendendo uma coisa que não entendia, e
> a cada minuto sabe onde está e por que vale ficar. O motor é o do explicador da BBC News Brasil,
> adaptado ao nosso formato — **meia hora de narração contínua**, sem repórter em cena e sem
> depoimento gravado. As técnicas estão em `REPERTORIO.md`; este módulo é o método que as sustenta.
>
> **A regra de ouro rege este módulo inteiro: o roteiro fala DO ASSUNTO, nunca DE SI MESMO.**
> A tensão vem de perguntas sobre o mundo, respondidas na hora — nunca de segurar resposta, anunciar
> espera ou comentar a própria estrutura.

## 1 · A ABERTURA (≤65 palavras narradas; o trecho mais caro do vídeo)

A abertura chega ao assunto sem preâmbulo — nada de "imagine que…", "vamos falar de…", definição de
dicionário — e o objeto do título é nomeado cedo. **Como abrir é escolha sua:** os jeitos que
funcionam, cada um com quando serve e quando não serve, estão em `REPERTORIO.md` → ABRIR.

**Se a abertura NEGA o senso comum, ela entrega o mecanismo no mesmo fôlego.** *"O que decide não é
a distância que você vê no mapa — é a profundidade."* — e o vídeo passa a meia hora explicando por
quê, que é muito mais interessante que adivinhar. Negar sem entregar ("o que decide isso não é o que
você pensa…") é dar volta, e volta é o defeito que mais reprova roteiro nesta casa.

**O contrato de conteúdo** (um dos lápis de abertura) não se confunde com os dois vizinhos proibidos:

| | exemplo | veredito |
|---|---|---|
| **contrato de conteúdo** | "hoje você vai entender como X, por que Y e o que Z" | **livre** — diz o que entrega e entrega linearmente |
| **promessa de espera** | "essa resposta vem no fim do vídeo", "a gente chega lá" | **vetado** — adia; é enrolação dita na cara |
| **etiqueta de ênfase** | "e aqui está o pulo do gato", "a parte que importa" | **vetado** — aponta para a própria informação |

⚠️ **O contrato se diz LITERAL.** É a frase do roteiro em que figura de linguagem mais estraga: ela
troca o fato prometido por uma versão mais vaga, e o espectador contrata uma coisa difusa. Compare:
*"depois que ela se calar pra sempre"* × *"depois que ela parar de transmitir"* — a segunda diz qual
função acaba, e é mais triste que a primeira.

**Cada frase da abertura se paga nela mesma** — nada de elipse que só o tópico 3 explica. O
espectador sai dos primeiros trinta segundos com **uma pergunta que ele quer ver respondida**, não
com um resumo do que vem. Se ele sair com três perguntas soltas, nenhuma delas é o vídeo: escolha a
que o título prometeu e deixe as outras nascerem no corpo, onde já há material para respondê-las. E
o "você" entra nesses primeiros segundos — o espectador é posto dentro da história.

## 2 · O CONTEXTO DO ZERO

O espectador pode nunca ter ouvido falar do assunto. Antes de investigar, **monte o assunto**: quem
é quem, o que é o quê, a história desde o começo, cada termo traduzido na hora. O setup vem logo
depois do soco de abertura (nunca como abertura) e também é gancho: a história bem contada prende.
Teste: um leigo total acompanha sem pausar para buscar nada fora? O que o público já sabe, ao
contrário, cabe numa frase de passagem — explicar o manjado em profundidade é andar em círculos.

## 3 · O GRAFO — o assunto não é o objeto do título

**O objeto do título é a PORTA. O assunto é o campo semântico em volta dele:** tudo que o espectador
ainda reconheceria como "isso é sobre a hidrelétrica" se você parasse o vídeo e perguntasse. O
roteiro é um caminho por esse campo — um grafo que você conduz, saindo do objeto, abrindo o leque,
e voltando ao objeto no fim.

**É o grafo que sustenta os trinta minutos, e é a única coisa que sustenta.** A referência entrega
dez a doze minutos, e quase um terço do texto falado dela é depoimento de entrevistado: quando a
matéria dela precisa de variedade, ela troca de BOCA. Nós entregamos o triplo do tempo em narração
contínua, então a variedade só pode vir de trocar de NÓ. Ficar dentro do objeto do título rende uns
oito a dez minutos de coisa nova; o resto sai do grafo ou sai de repetição — e repetição é o defeito
mais caro que existe aqui.

Nenhum roteiro do acervo tem meia hora para você copiar: os exemplares mostram o ARCO, e a meia hora
se alcança andando o grafo, não imitando o tamanho de alguém.

### 3.1 · As seis direções

De qualquer nó saem seis direções — mecanismo, irmãos, origem, consequência, plano, o que resiste —,
cada uma com quando serve e quando não serve em `REPERTORIO.md` → ANDAR. A escolha é sua.

### 3.2 · Como se escolhe o próximo nó

**O próximo nó é o que responde a pergunta que o nó anterior acabou de criar na cabeça do
espectador** — não o verbete seguinte da enciclopédia, não o subtema mais próximo. Se o nó anterior
não criou pergunta nenhuma, ele fechou mal: conserte-o antes de escolher o próximo.

A caminhada do `megabarragem-himalaia` mostra a ordem dos nós e as frases de volta. Estude a
**condução**, não o tamanho (ele tem ~20 min) nem os fatos (há erratas registradas nele: o que ele
afirma passa pela apuração como qualquer frase nova).

1. **a usina** — "cerca de sessenta gigawatts", e a régua vem dos irmãos: "A chinesa Três Gargantas,
   a número um do planeta, tem vinte e dois gigawatts. A Itaipu […] tem catorze."
2. **para cima, a agenda** — "a meta declarada é zerar as emissões de carbono até dois mil e
   sessenta". A usina deixa de ser uma obra e vira peça de um plano.
3. **para baixo, a geografia** — *"Só que uma usina desse tamanho não nasce em qualquer lugar."* → o
   cânion, a Grande Curva, os dois mil metros de queda, os quatro túneis.
4. **o terreno** — "a costura onde a placa da Índia empurra a da Ásia", e o terremoto que ela já deu.
5. **rio abaixo** — *"Acompanha pra onde essa água vai."* → o rio vira Siang, vira Brahmaputra,
   atravessa a Índia e desemboca em Bangladesh.
6. **a consequência humana** — os dois medos da Índia (a seca e a água solta de uma vez) e o
   terceiro, mais silencioso: o sedimento que sustenta o delta.
7. **o vazio jurídico** — o acordo magro que existe, e o corte de dados.
8. **a resposta do outro lado** — a represa que a Índia corre para levantar como para-choque.
9. **o veredito** — quem opera as turbinas decide QUANDO a água passa.

Sete desses nós **não são a hidrelétrica** — a agenda climática chinesa, a tectônica do Himalaia, a
hidrografia de outro país, um delta, um tratado, a política interna indiana, o risco sísmico — e o
espectador atravessa todos sem uma vez perguntar "por que estou ouvindo isso".

**Nó e card não são a mesma coisa.** O nó é a unidade do grafo (uma pergunta nova do espectador); o
card é o título de tópico que ele vê. **O roteiro tem no máximo 5 tópicos** ([ROT-109]) — o normal é 4
ou 5 —, e cada tópico é um TRECHO do caminho: os nós vizinhos que respondem juntos a uma pergunta
maior. A caminhada acima cabe em quatro:

| tópico (a pergunta maior) | nós que ele atravessa |
|---|---|
| a usina e o plano chinês | 1 escala · 2 agenda |
| o lugar mais difícil da Terra para fazer isso | 3 cânion · 4 tectônica |
| para onde essa água vai | 5 Brahmaputra · 6 os medos da Índia e o delta |
| quem decide quando a água passa | 7 o acordo magro · 8 a represa-resposta · 9 o veredito |

**Entre nós do mesmo tópico, a passagem é falada, não um card** — a frase de volta, o "e por isso"
(§4), os lápis de `REPERTORIO.md → PASSAR`. Título de tópico que só cobre o primeiro nó mente sobre os
outros: o título nomeia a pergunta maior do trecho inteiro, e a primeira parcela dela chega logo.

### 3.3 · A fronteira — três testes, todos de ouvido

**1 · O teste do espectador.** Pare o vídeo no meio do nó e pergunte: *"sobre o que é isto?"* Se a
resposta ainda é o objeto do título — "é sobre a hidrelétrica do Himalaia" —, o nó está dentro. Se a
resposta virou "é sobre a política externa da China", você trocou de vídeo.

**2 · O teste do caminho de volta.** O caminho do objeto até o nó tem de caber numa frase, e essa
frase tem de estar NO TEXTO. *"Acompanha pra onde essa água vai."* — cinco palavras, e o espectador
sabe por que está ouvindo falar de Bangladesh. Nó que precisa de um parágrafo de justificativa está
longe demais; nó que se liga com uma frase é exatamente o que o grafo é.

**3 · O fecho volta ao objeto, nomeado.** Depois de andar, o ato final retorna ao objeto do título —
e ele agora significa outra coisa: *"o que está sendo construído no cânion mais fundo da Terra não é
só uma usina. É uma nova regra de convivência entre países que dividem um rio e nunca combinaram
como dividir."* Isso não é resumo: é o objeto relido pelo caminho que o vídeo fez. Grafo que não
volta deixa o espectador no meio do campo.

⚠️ **Na dúvida, pende para o solto.** A doença desta casa é o grafo curto, não o grafo largo.

### 3.4 · A régua do nó novo — nó novo é PERGUNTA nova

**Antes de escrever, escreva as perguntas.** Uma linha por nó, na ordem, em forma de pergunta do
espectador, agrupadas pelos tópicos. Depois leia a lista inteira de uma vez: **se duas perguntas são a
mesma com outras palavras, é um nó só** — e se dois TÓPICOS respondem à mesma pergunta maior, são um
tópico só. Não é questão de dose nem de transição melhor — é o mesmo
nó contado duas vezes, e nenhum passe de conserto resolve isso, porque o defeito não está nas
frases.

**O teste de ouvido, para o texto já escrito:** tape o título do tópico e leia a primeira frase
dele. Se essa frase poderia abrir também o tópico anterior, os dois estão no mesmo trecho. Dentro do
tópico, faça o mesmo em cada passagem: a frase que abre o nó seguinte não pode caber no nó anterior.

**A ordem de grandeza — derivada, e não cota.** A pergunta que trava todo mundo aos dezoito minutos
é *"faltam mais dois nós ou mais oito?"*, e a doutrina devia responder. A aritmética fica toda à
vista: o exemplar andou **9 nós em 2.644 palavras**, ou seja ~**294 palavras por nó**; a meta de
~3.900 palavras, nessa mesma densidade, dá da ordem de **treze nós — em 4 ou 5 tópicos**. Não é número a cumprir — nós
de tamanhos muito diferentes são o normal, e o nó que merece 600 palavras deve receber 600. É régua
de bolso para calibrar o diagnóstico: **roteiro de vinte minutos com nove nós não está a um nó da
meta, está a três ou quatro** — e é subestimar essa distância que empurra o escritor a esticar os
nós que já tem, que é o defeito nº 1 desta seção.

⛔ **O antimodelo — `terremotos-america-do-sul`.** Quatro cards SEGUIDOS:

> **Cem quilômetros para baixo** · **O terremoto raso e o terremoto fundo** · **O golpe espalhado em
> cone** · **O chão que treme por mais tempo**

Os quatro respondem *"o que a profundidade muda?"* por ângulos diferentes: a distância vertical, a
comparação com o raso, a geometria, a duração. É um nó só, esticado em quatro — o grafo não anda,
gira — e o mesmo giro, sem os quatro títulos, se esconderia dentro de um tópico só. E o campo estava ali, intocado: por que três placas se encontram naquele canto, como o Chile
constrói diferente por causa disso, o que um terremoto específico fez com a economia de uma região,
como funciona um alerta sísmico e por que ali não existe.

### 3.5 · A trava contra o defeito oposto

Ampliar não é enfileirar curiosidade. **O nó só entra se, depois dele, o espectador pensar algo
DIFERENTE sobre o objeto do título.** O delta de outro país entra porque muda o que a usina
significa; a data exata em que o contrato foi assinado não entra se não muda nada. Quando o nó é bom
e a conexão é fraca, o defeito é a conexão — reescreva a frase de volta, não corte o nó. Quando o nó
não muda nada, nenhuma frase de volta o salva.

**A trava é sobre o EFEITO, nunca sobre o assunto.** A engenhosidade de quem projeta a obra passa no
teste sempre que o espectador sai dela vendo o objeto de outro jeito: *"furar quatro túneis de vinte
quilômetros por baixo de uma montanha que se mexe"* muda o que a usina é; um currículo em forma de
parágrafo não muda.

### 3.6 · O que se declara no dossiê

No `roteiro-editor.md`, a seção `## Mapa de nós`, **agrupada por tópico**: um cabeçalho `### tópico`
com o título e a pergunta maior, e embaixo **uma linha por NÓ**, na ordem, com a pergunta que ele
responde e a frase literal que faz a volta ao objeto (ou a passagem do nó anterior). É escrevendo
isto que você descobre, antes de escrever quatro mil palavras, que dois nós seus são um, que dois
tópicos são um, ou que um tópico ficou com um nó só e é magro demais para existir sozinho.

```markdown
## Mapa de nós
### tópico 1 · A usina e o plano chinês — "o que é isso, e por que agora?"
- nó 1 · a usina: "quão grande é isso?" — porta
- nó 2 · a agenda chinesa: "por que a China quer isso agora?" — volta: "a peça mais ousada dessa corrida"
### tópico 2 · O lugar mais difícil da Terra para fazer isso — "por que ali, e o chão aguenta?"
- nó 3 · o cânion: "por que AQUI?" — volta: "uma usina desse tamanho não nasce em qualquer lugar"
- nó 4 · a tectônica: "o chão aguenta?" — volta: "É nesse chão que a China vai furar quatro túneis de vinte quilômetros"
### tópico 3 · Para onde essa água vai — "quem mais depende dela?"
- nó 5 · o Brahmaputra: "quem mais depende dessa água?" — volta: "Acompanha pra onde essa água vai"
- fecho · volta ao objeto: "não é só uma usina. É uma nova regra de convivência"
```

(O bloco mostra o formato em cinco nós; um roteiro de meia hora terá mais.)

**A frase de volta é COPIADA do narrado, literal.** Paráfrase perde exatamente o que a volta carrega
— quem faz e o tamanho do que faz. Se a frase não existe assim no narrado, a volta não existe: o
mapa está descrevendo um roteiro que você ainda não escreveu.

## 4 · O CORPO — blocos que respondem perguntas

O corpo é **modular**: cada bloco responde UMA pergunta nova e a responde de verdade, dentro do
próprio bloco. Bloco que termina resolvido é bloco bom; a vontade de continuar vem da pergunta
seguinte, não de uma pendência artificial.

⚠️ A cadeia *o que é → de que é feito → como funciona → por que é assim → o que isso muda* parece
organização e é a que mais gira: são cinco perguntas sobre A MESMA COISA. Use-a **dentro** de um
bloco, para montar o nó. **Entre** blocos, quem manda é o grafo (§3) e a consequência (§4.1).

### 4.1 · A CONDUÇÃO — como se passa de um nó ao próximo

A pergunta que decide toda passagem: *o próximo bloco existe POR CAUSA do anterior, ou apenas DEPOIS
dele?* O primeiro caso é condução; o segundo é lista — e lista é o que o espectador sente quando
desiste sem saber dizer por quê. **O teste leva uma frase:** leia a última frase do bloco que fecha
e a primeira do que abre, seguidas, e veja o que cabe entre as duas. Se couber um **"e por isso"**, o
roteiro andou. Se só couber um **"e também"**, ele enumerou.

O padrão que funciona: o último fato de um bloco vira a causa ou o obstáculo do seguinte. *"Os três
computadores dela somam só 68 kilobytes de memória. E foi justamente esse pouco de memória que quase
matou a sonda."* — e o bloco seguinte é a memória que falhou. Dentro dele, o obstáculo do conserto é
um fato de dois blocos atrás, reaproveitado: *"Como cada tentativa levava 48 horas entre o comando e
a resposta, a equipe passou quatro meses descartando hipóteses."* Nada é anunciado e nada é assunto
solto: é o mesmo material virando causa.

**As pontes são lápis** — o fato que vira causa, a objeção do espectador, a pergunta seca, o caso que
reacende, a marcação de passagem, o contraste com "Só que" — e estão em `REPERTORIO.md` → PASSAR, com
quando cada uma não serve. O que se cobra é que a junta faça alguma coisa.

**Três pontes reprovam.** **O placar** — o locutor para de falar do assunto e diz quanto falta da
explicação: *"Isso responde metade da pergunta."* · *"O mecanismo está estabelecido: profundidade,
solo e o que está construído em cima."* É o índice do roteiro lido em voz alta: andaime de quem
escreveu, não informação de quem assiste. **A enumeração** — "Primeiro… Segundo…", ou parágrafos-item
ligados só por "E", que trocam o número e não a causa. **O recomeço em branco** — o bloco abre como
se o anterior não tivesse existido; se a primeira frase funcionaria em qualquer posição do roteiro,
ela não é condução.

**O bloco fecha entregando o bastão.** A última frase resolve a pergunta DELE e nomeia, sem prometer
nada, o fato que o próximo vai pegar: *"O conserto funcionou, mas o recado ficou claro: o desgaste da
máquina não tem volta."* Os dois erros de fecho: o que resolve e **não** entrega o bastão obriga o
próximo a recomeçar do zero; o que deixa pendência é promessa de espera, e está vetada.

⚠️ **Ponte bem-feita não é nó novo.** *"Esse 7,4 fica mais claro ao lado de outros dois terremotos da
mesma região"* liga perfeitamente — e abre o segundo de quatro cards sobre a mesma coisa. A junta
e o destino se conferem separados.

### 4.2 · O que aterrissa dentro do bloco

O abstrato desce para o concreto: o caso datado com nome próprio, o objeto que prova, a gente que
fala quando o assunto tem gente, o contraponto depois do mecanismo. São lápis, em `REPERTORIO.md` →
ATERRISSAR. Quem tira a conclusão do caso, na maior parte dos nossos temas, é a própria narração.
Quando uma pessoa entra, ela volta — senão era textura; e quando o fato humano e o institucional se
encontram, o humano abre e o institucional explica.

**Toda pauta precisa de uma revelação causal nomeável** — o "porquê de verdade", que surpreende até
quem conhece o assunto (*"a estrada não existe por causa de febre aftosa"*), não a descrição do
fenômeno vestida de causa (*"a estrada não existe porque a região é difícil"*). É o que a audiência
volta para rever; se a apuração não a encontrou, a pauta ainda não está pronta.

**A objeção de senso comum se responde onde ela nasce.** Se o texto acabou de provocar "cidade
maior, mais gente, mais mortos", a resposta vem ali — em áudio não dá para voltar, e quem fecha a
conta errada carrega a conclusão errada até o fim.

**O que atravessa o vídeo inteiro é o gancho da abertura, e onde ele se paga é decisão do tema.**
Tem assunto em que a resposta cabe no segundo tópico e o resto do vídeo é a consequência dela; tem
assunto em que ela só fecha no ato final, porque antes disso seria uma frase sem lastro. Não há
posição obrigatória nem prestação a pagar. O que não varia é isto: o gancho tem de estar VIVO — se o
espectador esqueceu qual era a pergunta, ele não está esperando resposta nenhuma, está só assistindo.
Retome a âncora pelo nome quando ela sumir por muito tempo do texto, e feche com ela nomeada. E
nunca troque o gancho por um aviso de que a resposta vem depois.

## 5 · NÚMEROS, DATAS E ESCALA

- **Cada número chega medido.** Os jeitos de medir — a régua colada, a conversão para a vida de quem
  ouve, a faixa honesta, o número que sai da boca — estão em `REPERTORIO.md` → DIMENSIONAR.
- **Quantos números cabem, quem decide é o tema — e o teste é de OUVIDO, não de contagem.** Há
  assunto que só se explica com números (a escala de uma obra, a conta de energia de uma barragem) e
  neles a cifra é o conteúdo, não o enfeite. A pergunta, em cada parágrafo: *o ouvinte consegue
  segurar isto sem reler?* Número que chega dimensionado — régua, comparação ou imagem — entra em
  série e não cansa; número solto, sem nada que o meça, cansa já no segundo. **O defeito nunca é a
  quantidade: é a cifra que carrega o vídeo se perder no meio das periféricas.**
- **Ficha técnica — seis dimensões seguidas — nunca na locução.**
- **Data entra com o que significava.** *"Em 1415 os portugueses tomaram Ceuta — a primeira
  conquista da Europa fora do continente, o pontapé das grandes navegações."* Corte a data da frase:
  se a frase continua dizendo o mesmo, a data era enfeite — explique-a ou tire-a. Data recente vem
  ancorada no ano ("em julho de 2026"), nunca relativa ao locutor ("recentemente", "esses dias");
  idade relativa ("há 150 anos") vira data absoluta, que não envelhece.
- **Data se tece na frase, nunca se carimba** ("Março de 2014. Estreia o episódio…" é lauda de
  cinejornal).

## 6 · O FECHO

O ato final responde o gancho do vídeo e volta ao objeto do título — e a melhor resposta entrega
**informação nova**, não resumo. Os jeitos de fechar estão em `REPERTORIO.md` → FECHAR. O veredito
honesto pode ser nuançado — nunca covarde nem sensacionalista — e termina no chão firme, não na
ressalva.

Se dá para prever o encerramento lendo o parágrafo anterior, não é fecho, é eco.

**ENCERRAMENTO (o bloco de CTA):** pergunta ao espectador que reabre a curiosidade + chamada padrão
(comentário, like, inscrição, Clube de Membros "no link aqui embaixo"). Sem sininho, sem bordão de
despedida. A estrutura é fixa; o fraseado nasce novo a cada vídeo. O CTA entra em dobradiça neutra —
fim de raciocínio concluído — e nunca soa como fim antes do fim.

## 7 · MOLDURA TEMPORAL — o vídeo é gravado num dia e publicado em outro

Âncora relativa ao locutor ("amanhã", "hoje à tarde") para evento datável é bomba-relógio: ancore no
evento mais distante que segue futuro em qualquer data de publicação. O volátil (placar, cotação)
não vai na narração — a locução pergunta, o overlay responde. Todo fato que expira leva
`[⚠️ ATUALIZAR ANTES DE GRAVAR]` no dossiê, com data-limite e variante à prova.

## 8 · O TÍTULO É UM CONTRATO

Proponha títulos notados por **apelo universal** (o canal é dublado) × **entregável na abertura**.
A promessa do título é reconhecida logo nos primeiros segundos — quem clicou por ela vê, na abertura,
que veio ao lugar certo — e o dossiê diz onde ela é respondida. Título sensacional sem entrega
imediata traz o clique e murcha o alcance. Título, thumb e fecho carregam o mesmo grau de certeza do
veredito.
