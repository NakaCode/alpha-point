> **[porte Regie]** Origem: `top10-estudio/knowledge/roteiro/EXEMPLARES.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Módulo de `knowledge/ROTEIRO-NARRACAO.md` (a «Ordem de leitura»). O agente `roteirista-narracao` do Top10 é o `roteirista` neste canal, e o `roteiro-boco.md` (o texto que o apresentador lia) é `out/<proj>/roteiro.md`; o `roteiro-editor.md` fica ao lado dele, em `out/<proj>/`. Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# EXEMPLARES — com o que um roteiro da casa se parece

> Modelo se estuda pela **postura**, nunca pelo texto: reusar frase ou molde de um exemplar em
> roteiro novo é autoplágio de template, e o gate acusa. A função se repete entre vídeos; o fraseado
> nasce novo.

## Os modelos positivos

**1 · A referência externa é a BBC News Brasil no YouTube** — formato explicador, sem as entrevistas
e sem a assinatura pessoal do repórter. Os movimentos dela que servem a nós estão executados, com
exemplo real, em `REPERTORIO.md`.

**2 · O exemplar de GRAFO é o `megabarragem-himalaia`.** É o modelo de como um roteiro ANDA: sai da
usina, sobe para a agenda energética do país, desce para a geografia do cânion, atravessa o risco
sísmico, segue o rio até outro país, chega no delta, passa pelo tratado que não existe e volta ao
objeto do título significando outra coisa. Sete dos nove nós não são a hidrelétrica, e o espectador
não estranha nenhum. A caminhada inteira, nó a nó, está em `STORYTELLING.md` §3.2.
**Dele se estuda só a progressão:** o fraseado não se reusa, o tamanho não serve de régua (ele tem
cerca de vinte minutos), mas a embalagem serve: **nove nós em quatro cards** — é o molde dos 4–5 tópicos da [ROT-109] e os fatos têm erratas registradas,
então passam pela apuração como os de qualquer roteiro novo.

**3 · O exemplar de ABERTURA é o `um-dia-luz-da-terra`** (aprovada pelo dono do canal):

> *"A mais de 25 bilhões de quilômetros daqui, no escuro do espaço, um computador dos anos 70 ainda
> está ligado. É a Voyager 1, o objeto mais distante que a humanidade já construiu."*

O que ela executa: cena sem preâmbulo, sujeito nomeado, **contrato de conteúdo** que entrega na
ordem, pergunta seca respondida na frase seguinte (*"Mas o que significa, na prática, estar a um
dia-luz da Terra?"* — e responde), número com régua colada (*"23 watts e 160 bits por segundo —
mais lento que a internet discada dos anos 90"*), escala traduzida no tempo do espectador, e a peça
plantada que volta no fim. O capítulo do chip corrompido e do conserto a 25 bilhões de quilômetros é
o melhor trecho de condução da casa: cada bloco entra pela causa que o anterior deixou na mesa.

⚠️ **Uma linha desse mesmo roteiro é o contra-calibre, e é a mais instrutiva que existe.** O contrato
de abertura terminava em *"o que vai acontecer com ela depois que **se calar pra sempre**"* — uma
máquina irracional não se cala, e a figura apagou o fato. O conserto é *"depois que ela **parar de
transmitir**"*: mais preciso, e mais triste que a figura que o substituía. **Se a palavra literal
informa igual ou mais, a figura é enfeite e sai** (`VOZ-ANTI-IA.md` §4).

**4 · Frases-calibre aprovadas** (postura, não texto): *"O mais famoso é brasileiro: Athos Salomé.
Lá fora chamam ele de 'Nostradamus Vivo'."* · *"E deu três nomes: Espanha, Portugal e Marrocos."* ·
*"Alaksandu. Alexandre."*

⚠️ **O acervo de `knowledge/roteiros/` não é referência de estilo** — são roteiros anteriores à
reforma da doutrina, e valem só como formato de arquivo e registro. Roteiro só vira exemplar por
decisão do dono, nunca por sair limpo da bancada (cada vício novo promovido a padrão se
auto-reforça a cada geração). Os dois exemplares acima foram promovidos pelo dono, e **cada um por
uma coisa só**: o `megabarragem-himalaia` pelo GRAFO, o `um-dia-luz-da-terra` pela ABERTURA e pela
CONDUÇÃO do capítulo do conserto. Nenhum dos dois é modelo de fraseado.

## Onde NÃO há exemplar

**Não há roteiro de trinta minutos aprovado para você imitar.** O tamanho se alcança pelo grafo
(`STORYTELLING.md` §3), nunca copiando a extensão de um caso.

## Antipadrões (reprovados em produção real — não repita)

- **O grafo que gira em vez de andar.** O antimodelo é o `terremotos-america-do-sul`: quatro
  capítulos seguidos — *"Cem quilômetros para baixo"*, *"O terremoto raso e o terremoto fundo"*, *"O
  golpe espalhado em cone"*, *"O chão que treme por mais tempo"* — respondendo todos a mesma
  pergunta, "o que a profundidade muda?". Nenhum conserto de frase salva isso.
- **A junta de "e também".** Bloco que vem DEPOIS do anterior em vez de vir POR CAUSA dele: a
  enumeração ("Primeiro… Segundo…", quatro prazos em fila ligados por "E"), o recomeço em branco (a
  primeira frase funcionaria em qualquer posição) e **o placar** ("isso responde metade da
  pergunta", "o mecanismo está estabelecido") — o índice do roteiro lido em voz alta.
- **A figura que apaga o fato.** "Se calar pra sempre" no lugar de "parar de transmitir"; quatro
  nomes para o mesmo sensor (zumbido → escuta → ouvindo → sussurro); superlativo escondido dentro de
  uma comparação ("o lugar mais vazio do universo").
- Comentar o próprio vídeo: promessa de espera ("essa resposta vem no fim"), etiqueta de ênfase
  ("o pulo do gato"), anúncio de manobra ("vamos voltar no tempo", "agora vamos falar sobre X"),
  "estamos fazendo as perguntas erradas".
  ⚠️ **Não confunda com a marcação de passagem**, que é um lápis (`REPERTORIO.md` → PASSAR): *"o que
  nos leva ao segundo ponto"*. **Quem marca passagem anda** — nomeia o nó novo e entra nele na mesma
  frase; quem anuncia manobra fica parado (*"vamos voltar no tempo"*). A marcação fala do ASSUNTO; o
  anúncio e o placar falam do VÍDEO.
- Abrir dando volta: negar o senso comum e segurar o mecanismo; descrever em volta para "revelar"
  o sujeito depois; tópico de aquecimento antes da entrega do título.
- Carimbo de data ("Março de 2014. Estreia…") e press-release de bloco.
- Dramatização por adjetivo; gíria de internet; idiomatismo batido ("torcer o nariz", "no talo").
- Anáfora retórica ("Não tinha X, não tinha Y, não tinha Z"); staccato de trailer; tríades em série.
- Template repetido entre vídeos — inclusive parafraseado (mesmo molde, sinônimo trocado).
- Numeral romano cru; aparte dentro de aparte; "sininho" e bordão de despedida no CTA.
- Âncora relativa de dia para evento volátil ("amanhã, França e Espanha decidem" numa locução
  gravada dias antes).
- Presumir conhecimento do tema (abrir em "Guerra de Troia, cavalo de madeira, Aquiles" sem contar
  a história).
