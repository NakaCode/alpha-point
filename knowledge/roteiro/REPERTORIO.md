> **[porte Regie]** Origem: `top10-estudio/knowledge/roteiro/REPERTORIO.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Módulo de `knowledge/ROTEIRO-NARRACAO.md` (a «Ordem de leitura»). O agente `roteirista-narracao` do Top10 é o `roteirista` neste canal, e o `roteiro-boco.md` (o texto que o apresentador lia) é `out/<proj>/roteiro.md`; o `roteiro-editor.md` fica ao lado dele, em `out/<proj>/`. Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# REPERTÓRIO — os lápis do roteirista

> Estas são as técnicas que você tem na mão. **Nenhuma é obrigatória, nenhuma tem cota, nenhuma tem
> vez.** Você é quem desenha: olhe o material que a apuração trouxe e o que o bloco anterior acabou de
> plantar na cabeça de quem ouve, e escolha a cor que cabe ali.
>
> Cada lápis vem com o que ele faz, quando serve e **quando não serve**. A última coluna é a mais
> importante: é o sinal de que a técnica está sendo usada para cumprir uma forma, e não para servir o
> assunto. Um lápis que aparece onde o "não serve" está presente é pior que nenhum lápis.

## Como escolher

- **Pelo material, nunca pelo rodízio.** A pergunta é sempre: *o que este trecho precisa para o
  espectador entender e querer continuar?* — e não *qual técnica eu ainda não usei?*
- **Dois jeitos de errar com lápis, e só dois.** **Forçar**: usar onde o "não serve" está à vista (a
  pergunta que ninguém faria, o número humano inventado para ter drama, a cena que precisa de três
  frases para fazer sentido). **Repetir o compasso**: o mesmo lápis em toda junta, ou todos em fila
  para "variar" — o ouvinte pega o padrão e passa a ouvir a forma em vez do conteúdo.
- **Ficar sem um lápis nunca é defeito.** Um roteiro inteiro sem pergunta, sem cena de abertura ou sem
  gente pode ser o roteiro certo para aquele tema.

---

## ABRIR — os primeiros trinta segundos

| lápis | o que faz | serve quando | não serve quando |
|---|---|---|---|
| **o paradoxo factual** | monta o que todo mundo assume e derruba com um fato curto — *"Aqui não tem guerra de facção. Ou não tinha."* | existe uma crença real e difundida que o fato contradiz | a "crença" teria de ser inventada para ser derrubada; ninguém pensa aquilo |
| **o contador humano** | a consequência sobre pessoas, medida no tempo de quem assiste — *"No tempo que você vai levar pra ver esse vídeo, vinte e oito pessoas vão morrer…"* | há um número humano sólido, recente e atribuível | o número é estimativa frágil, ou o tema não tem vítima — vira drama emprestado |
| **a crença posta à prova** | declara o que se acredita e pergunta se é verdade — *"A música clássica pode te deixar mais inteligente. Pelo menos foi o que concluiu um estudo… Mas será que é verdade?"* | o vídeo inteiro É o teste daquela crença | a resposta é óbvia, ou se resolve em duas frases |
| **a cena sem preâmbulo** | um lugar, uma hora, uma coisa acontecendo — *"A mais de 25 bilhões de quilômetros daqui, um computador dos anos 70 ainda está ligado."* | o objeto tem uma imagem concreta forte | a cena só faz sentido depois de explicada |
| **o contrato de conteúdo** | diz o que o vídeo entrega, na ordem em que entrega — *"Hoje você vai entender como X, por que Y e o que acontece com Z."* | o tema abre várias frentes e o espectador ganha com um mapa | a cena já deixou claro; ou promete algo que o corpo não entrega naquela ordem; ou vira índice |
| **a pergunta ao espectador** | uma pergunta sobre a experiência real dele — *"Você já ouviu que as pesquisas são uma foto do momento?"* | toca algo que ele de fato viveu ou ouviu | é retórica de abertura ("você já parou pra pensar…") — é clichê, não pergunta |

## ANDAR — para onde vai o próximo nó

De qualquer nó saem seis direções. O próximo nó é o que responde a pergunta que o anterior acabou de
criar — o método de escolher e os testes de fronteira estão no `STORYTELLING.md` §3.

| lápis | a pergunta que abre | serve quando | não serve quando |
|---|---|---|---|
| **para baixo — o mecanismo** | como isso funciona de verdade? | o espectador aceitou um fato sem entender a causa | o mecanismo já foi montado e você só o recontaria com outras palavras |
| **para o lado — os irmãos** | quem mais fez isso, e como se compara? | a escala precisa de régua, ou o objeto parece único e não é | a comparação é uma lista de recordes que não muda o que o objeto é |
| **para trás — a origem** | por que alguém quis isso, e quem? | o objeto foi apresentado como inevitável | a origem é cronologia de enciclopédia sem uma decisão dentro |
| **rio abaixo — a consequência** | quem sente isso, longe daqui? | o objeto está montado e ainda não custou nada a ninguém | a consequência é especulação sem fonte |
| **para cima — o plano** | isso faz parte de que projeto maior? | o objeto sozinho é grande demais para ser só ele | o "plano maior" é leitura sua, sem ninguém que o declare |
| **o terreno — o que resiste** | o que pode dar errado, e por causa de quê? | o objeto foi contado só pelo lado de quem o defende | o risco é genérico ("tudo pode falhar") e não nomeia o que falharia |

## PASSAR — a junta entre dois blocos

A régua de toda passagem: entre a última frase de um bloco e a primeira do próximo cabe um *"e por
isso"*? Então andou. Só cabe um *"e também"*? Então enumerou. Qualquer lápis abaixo tem de passar nisso.

| lápis | o que faz | serve quando | não serve quando |
|---|---|---|---|
| **o fato que vira causa** | o último fato de um bloco é a causa ou o obstáculo do seguinte — *"E foi justamente esse pouco de memória que quase matou a sonda."* | há um fato no bloco que de fato provoca o próximo | você teria de forçar uma relação causal que não existe |
| **a objeção do espectador** | responde o "mas por que não…?" que ele acabou de pensar | o texto acabou de provocar essa objeção | a objeção é sua, não dele — ninguém a faria ali |
| **a pergunta seca** | duas a cinco palavras, respondidas no parágrafo seguinte — *"E o Brasil?"* | o próximo nó É a pergunta óbvia ainda não feita | a resposta já está implícita; ou é a terceira junta seguida em pergunta |
| **o caso que reacende** | volta um personagem ou objeto já plantado, agora significando outra coisa | há algo plantado antes que ganha sentido novo aqui | a volta só repete o que ele já significava |
| **a marcação de passagem** | o narrador diz para onde vamos — *"o que nos leva ao segundo ponto"* | o vídeo declarou o que entrega e o espectador ganha em se localizar | serve só para anunciar; ou vira placar do quanto falta |
| **o contraste com "Só que"** | abre o contraponto depois de o mecanismo estar de pé — *"Só que as canetas também têm um lado ruim. O primeiro é o preço."* | o mecanismo está montado e o outro lado muda a conclusão | o mecanismo ainda não foi entendido; ou o "Só que" vira tique de toda virada |

## ATERRISSAR — o que dá chão dentro do bloco

| lápis | o que faz | serve quando | não serve quando |
|---|---|---|---|
| **o caso datado** | a afirmação desce para um caso com nome próprio, lugar e data | a afirmação é abstrata e existe um caso apurado que a encarna | o caso é genérico ("um homem na Índia") ou não foi apurado |
| **o objeto que prova** | uma coisa concreta que carrega o argumento — *"A pintura nunca foi concluída porque os delegados britânicos estavam envergonhados demais pra posar."* | existe um documento, objeto ou vestígio que mostra em vez de dizer | o objeto é curiosidade que não prova nada sobre o ponto |
| **gente que fala** | a pessoa específica entra e diz uma frase literal, com fonte | o assunto tem gente — alguém decidiu, sofreu, construiu ou descobriu aquilo | o tema é mecanismo puro (física, geologia, astronomia): personagem enxertado soa mais falso que a ausência |
| **a trivia plantada** | um detalhe curioso que volta depois como argumento — as vassouras pintadas de preto que viram régua do orçamento militar | você sabe onde ele vai voltar e o que vai provar | ele não volta; aí é enfeite, e se corta |
| **o contraponto** | o outro lado, com dono, depois de o mecanismo estar montado | o outro lado muda o que o espectador conclui | é ressalva de protocolo, dita só para parecer equilibrado |

## DIMENSIONAR — como um número chega ao ouvido

Quantos números cabem, quem decide é o tema. O que se pede é que cada número chegue medido.

| lápis | o que faz | serve quando | não serve quando |
|---|---|---|---|
| **a régua colada** | valor → o que é normal → a razão — *"O coração dele pesava mais de oitocentos gramas. Um coração normal pesa trezentos e quarenta e cinco. Mais que o dobro."* | existe um valor normal conhecido para comparar | não há "normal" que o espectador reconheça |
| **a conversão para a vida dele** | leva o número para o corpo, o tempo ou o dinheiro de quem ouve — *"871 mil mortes por ano, ou 2.300 por dia"* | o número bruto é grande demais para ser sentido | a conversão exige conta que o ouvido não acompanha |
| **a faixa honesta** | quando as fontes divergem, dá a faixa inteira — *"entre quinze e vinte e dois milhões"* | fontes confiáveis discordam | a divergência é de uma fonte fraca contra várias fortes |
| **o número que sai da boca** | a cifra periférica vira adjetivo, vai para a tela ou sai — *"conversaram e saíram sem nada"* | o número não muda a conclusão do trecho | ele é justamente o que sustenta o argumento |

## TRADUZIR — quando entra um termo que o espectador não conhece

| lápis | o que faz | serve quando | não serve quando |
|---|---|---|---|
| **"ou seja" colado no termo** | traduz na mesma respiração — *"a chamada neurogênese, ou seja, a criação de novos neurônios"* | o termo é necessário e a tradução é curta | "ou seja" ligando duas ideias em vez de traduzir um termo — aí é conectivo de redação |
| **descrever e depois nomear** | a coisa primeiro, o nome depois — *"uma estrutura em formato de caracol, chamada cóclea"* | o nome importa menos que entender a coisa | o nome é o que o espectador vai reencontrar e precisa vir primeiro |
| **"o chamado X"** | sinaliza que o termo é de outra tribo | é jargão de área que o vídeo vai usar de novo | o termo é comum; aí soa pedante |
| **a imagem que explica** | uma comparação que carrega o mecanismo, plantada, retomada e fechada — *"a pesquisa é uma foto; cada foto se junta à seguinte e vira um filme"* | o literal informa MENOS que a imagem | o literal diz o mesmo ou mais — aí a imagem é enfeite, ou pior, apaga um fato |

## FECHAR — o ato final

O fecho responde o gancho do vídeo e volta ao objeto do título, agora relido pelo caminho que o vídeo
fez. Estes são os jeitos de fazer isso:

| lápis | o que faz | serve quando | não serve quando |
|---|---|---|---|
| **a gaveta aberta no início** | retoma algo do primeiro minuto e entrega o que faltava — *"Lá no início, o Clayton disse que olha o bíceps e já sabe o tamanho do coração. O que ele não tinha contado é o que isso significa."* | algo plantado na abertura ganha sentido novo agora | a volta só repete o que já foi dito — é eco, não fecho |
| **o desmonte com reposição** | desfaz a promessa e devolve algo maior no mesmo fôlego — *"Te deixar mais inteligente, não. Só que tem uma notícia boa."* | o veredito desinfla a expectativa do título | não há nada maior para devolver; aí é só anticlímax |
| **a projeção declarada** | aponta o que vem, dito como projeção | o assunto está em curso e o futuro é a pergunta real | a projeção é chute sem ninguém que a sustente |
| **o objeto relido** | o objeto do título nomeado de novo, significando outra coisa — *"não é só uma usina. É uma nova regra de convivência entre países que dividem um rio."* | o grafo andou e mudou o que o objeto é | o grafo não saiu do objeto — aí a releitura não tem de onde vir |

---

## O que NÃO é lápis — vale sempre

Estes não se escolhem: são o que faz um roteiro ser deste canal, e estão nos módulos donos deles.

- **O roteiro fala do assunto, nunca de si mesmo** — sem prometer espera, sem apontar para a própria
  informação, sem narrar a estrutura. (`STORYTELLING.md`)
- **O grafo sustenta a meia hora** — nó novo é pergunta nova, em no máximo 5 tópicos. (`STORYTELLING.md` §3, [ROT-109])
- **Toda afirmação tem lastro e atribuição honesta.** (`PESQUISA-HONESTIDADE.md`)
- **A voz: léxico de jornal, sintaxe de conversa, sem sotaque de máquina.** (`VOZ-ANTI-IA.md`)
