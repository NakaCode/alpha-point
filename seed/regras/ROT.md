> **[porte Regie]** Origem: `top10-estudio/seed/regras/ROT.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Este domínio veio INTEIRO (ROT): lei é citada por ID e o agente precisa achá-la. Onde a lei manda usar VM, bucket, Mac, cascata ou Reuters, vale o princípio, não o comando. `seed/regras/SIS.md` e `seed/regras/REND.md` vieram FILTRADAS (o que é só infra do Top10 está listado por ID no apêndice de cada uma). Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# ROT — roteiro e narração

> Leis vigentes deste domínio. **A de número MAIOR vence** quando duas se cruzarem.
> Citação legada (número solto, sem prefixo) → `seed/DE-PARA-LEIS.md`.
> ⚠️ Leia TAMBÉM `SIS.md` — são as regras transversais que valem em todo ofício.

---

**ROT-01.** **O TÓPICO 1 ENTREGA O QUE O TÍTULO PROMETEU (roteiro de narração — feedback Mateus 11/jul, simpsons-copa).**
   O primeiro tópico do vídeo entrega IMEDIATAMENTE o assunto que fez o espectador clicar (a previsão, o segredo,
   o número) — nunca um tópico inteiro de contexto/mecanismo/história ANTES da primeira entrega ("como X virou Y"
   abrindo o vídeo = enrolação; o espectador sente e sai → watch time despenca).
   • Contexto e mecanismo entram DEPOIS da entrega, dissolvidos em 2–4 frases dentro dos tópicos, quando o
     espectador já recebeu o que veio buscar e agora QUER entender o porquê.
   • Teste: leia só o título + o cabeçalho do tópico 1. Se o tópico 1 não contém o payoff do título, a escada
     está errada — reordene. (Origem: tópico "Como os Simpsons viraram os profetas da internet" abrindo o vídeo
     cuja promessa era A PREVISÃO; correção: a cena viral virou o tópico 1, o mecanismo virou 1 parágrafo depois dela.)

**ROT-02.** **PROIBIDA A DRAMATIZAÇÃO POR ADJETIVO (roteiro de narração — feedback Mateus 11/jul, simpsons-copa).**
   Nunca caracterizar o fato com adjetivação dramática vazia: "perturbador", "assombroso", "chocante",
   "aterrorizante", "de arrepiar", "impressionante", "surreal" e parentes. É o narrador MANDANDO o espectador
   sentir em vez de MOSTRAR o fato que provoca a sensação — soa artificial/IA e quebra a voz sóbria da casa
   (BBC/DW/Veritasium mostram; não rotulam).
   • O conserto é sempre trocar o rótulo pela INFORMAÇÃO: "um caso genuinamente perturbador" → "um caso que é
     real, e qualquer um pode conferir"; "parece assombroso" → "parece profecia coletiva, mas a explicação é
     mais simples". O fato carrega o peso sozinho (irmã da lei de frases de efeito do DNA, seção 1).
   • Vale pra narração E pra texto de tela. Amplia a lista negra do validador da estação 0.

**ROT-03.** **INTRODUÇÃO DE 20–30 SEGUNDOS, NUNCA MAIS (roteiro de narração — feedback Mateus 11/jul, simpsons-copa).**
   O gancho de abertura tem no MÁXIMO 20–30 segundos narrados (~45–65 palavras a ~130 ppm). Intro de 1 minuto
   apresentando cada personagem/elemento com calma = o espectador vai embora antes do tópico 1.
   • A intro faz UMA coisa: fisga com o fato mais forte + arma a pergunta que segura o play. Apresentações
     detalhadas dos elementos ("um é X... o outro é Y... e o terceiro é Z...") pertencem aos tópicos.
   • Gate automático no validador da estação 0: intro >65 palavras = FAIL (validar-roteiro.mjs).
   • (Origem: intro do simpsons-copa com ~120 palavras ≈ 55s; corte pra 60 palavras ≈ 28s sem perder o gancho.)

**ROT-04.** **VOZ FALADA, NÃO TEXTO LIDO (roteiro de narração — feedback Mateus 11/jul, simpsons-copa rev.4).**
   O roteiro tem que passar no TESTE DA LEITURA EM VOZ ALTA: se o apresentador não fala a frase de primeira,
   como quem explica pra uma pessoa, a frase está errada. O "sotaque de LLM" que o Mateus identificou (texto
   técnico/formal, não-humano) tem sintomas nomeáveis e conserto:
   • **Sintaxe de fala**: sujeito-verbo-objeto; apostos e orações relativas empilhadas viram FRASES NOVAS
     ("Athos Salomé, um paulista nascido em 1986 que a imprensa apelidou de..." → "O mais famoso é brasileiro:
     Athos Salomé. Lá fora chamam ele de 'Nostradamus Vivo'.").
   • **Frases curtas de entrega/reação** entre blocos densos ("A cena existe." · "Só que não." · "E deu três
     nomes: Espanha, Portugal e Marrocos." — aprovada como PERFEITA pelo Mateus). Fala alterna longa→curta.
   • **Máx ~1 tríade balanceada por tópico** ("X, Y e Z" empilhado é assinatura de máquina).
   • **Conectivos falados**: "só que", "mas", "e olha" — NUNCA "porém" deslocado, "no entanto", "ou seja",
     "cabe uma ressalva".
   • **Falar COM o espectador**: "você"/"a gente" presentes; 1–2 marcas de voz por tópico ("repara", "pensa
     assim"), sem exagerar.
   • ⚠️ **HUMANIZAR ≠ COLOQUIALIZAR**: idiomatismo batido ("torcer o nariz", "dar com os burros n'água") é
     REPROVADO pelo Mateus — tão artificial quanto o formalismo (máquina fingindo intimidade). A naturalidade
     vem da CONSTRUÇÃO (ordem direta, ritmo, concretude), com vocabulário elegante e sóbrio (BBC/DW).
   • Léxico concreto no lugar de documental: "dá pra conferir" (não "verificável"), "dizem que ele acertou"
     (não "é creditado por").

**ROT-05.** **ROTEIRO É HISTÓRIA, NÃO RELATÓRIO (storytelling — feedback Mateus 11/jul, simpsons-copa rev.5).**
   Estruturar como INVESTIGAÇÃO com tensão crescente, nunca como artigo de checagem organizado por categoria
   (alegação→desminto→casos→dados→veredito = Wikipédia com voz). As regras:
   • **Payoff NUNCA na intro**: a intro arma a pergunta e as APOSTAS; a revelação-síntese (o twist que
     reordena tudo) pertence ao ato final. Intro que entrega a conclusão transforma o vídeo em confirmação
     de 10 minutos. (Origem: "apontam para os mesmos campeões" na abertura matava a convergência do tópico 4.)
   • **Data tecida, nunca carimbada**: "Março de 2014, meses antes da Copa. Estreia o episódio..." /
     "Um ano depois, maio de 2015:" = lauda de cinejornal (RUIM×6 do Mateus). A data entra como consequência
     dentro da frase: "isso foi ao ar meses antes da Copa do Brasil. Um ano depois, agentes à paisana
     entraram num hotel em Zurique...".
   • **Relógio/stakes na moldura quando o tema tiver**: evento que testa a premissa em dias = countdown
     abre e fecha o vídeo; o espectador sai com algo TESTÁVEL e volta pra conferir (comentário/retorno).
   • ⚰️ **[cláusula SUPERADA pela ROT-98/ROT-100, 14/set/2026]** ~~**Porta aberta entre tópicos**: cada
     bloco termina puxando o próximo ("antes de você arquivar X, existe um caso que não cabe nessa
     explicação"), nunca resolvido e redondo.~~ — Esta cláusula, somada à cota de re-ganchos da
     ROT-19(a), obrigava ~12–14 "portas" num vídeo de 21 min; quase nenhum assunto tem 14 viradas
     verdadeiras, e o escritor fabricava volta retórica para cumprir. Hoje: **bloco termina
     respondido**; a virada é a pergunta seca do bloco seguinte, respondida na hora (ROT-100).
   • **Escada de escalada**: falso → real → testável → revelação; NUNCA terminar no beat mais frio
     (dados como último tópico sem revelação = anticlímax).
   • **Staccato dosado**: fragmento curto em rajada = voz de trailer, tão sintética quanto o formalismo.
     O soco fecha o parágrafo; não é a textura do parágrafo inteiro.

**ROT-06.** ⚰️ **SUPERADA pela ROT-98 (14/set/2026 — o motor BBC).** O "segure o veredito" era a raiz
   medida do vício que o dono mais reprova ("o roteiro dá voltas, o espectador nunca está sabendo de
   tudo"): sob esta lei, o escritor fabricava volta retórica para não resolver. A regra nova inverte:
   **o roteiro entrega o mecanismo no mesmo fôlego e a riqueza está no COMO/POR QUÊ** — a única espera
   legítima é a dívida do vídeo (ROT-93/ROT-94), paga com parcela. A autorização para mexer nesta lei
   (que nasceu de feedback do dono) é dele, por escrito, em 14/set/2026: *"Pode mexer em lei que veio
   de mim, sem nenhum problema."* O que dela continua de pé vive em outras leis: o tópico 1 entrega o
   objeto do título (ROT-01), o batido cabe em 1 frase (ROT-48), duração por vídeo (`novo.mjs`).
   Fica como histórico:
   **JOGUE A ISCA, SEGURE O VEREDITO (storytelling — feedback Mateus 11/jul, simpsons-copa rev.6).**
   Refina a ROT-01: o tópico 1 entrega o OBJETO da promessa do título (a previsão, a cena, o número — o que
   fez a pessoa clicar), mas NUNCA o VEREDITO sobre ele. Desmentir/resolver a premissa no primeiro tópico
   mata a razão de continuar assistindo — o espectador casual leva a resposta e o watch time junto.
   ⚠️ **SUPERADA em PARTE pela ROT-11 (12/jul): a cláusula "a isca é DECLARADA" está REVOGADA — o loop aberto
   é IMPLÍCITO, nunca anunciado.** A frase-exemplo do bullet abaixo é hoje **FAIL DUPLO** no gate: promessa de
   espera (ROT-11, reprovação sem grandfather) e scaffold nomeado (ROT-10 — só o dourado simpsons-copa, onde o
   molde nasceu, pode contê-la). Ela fica aqui como EVIDÊNCIA DATADA do que a casa escrevia — **nunca como
   texto a copiar**. O que CONTINUA valendo desta lei: o tópico 1 mostra o OBJETO do título e NÃO entrega o
   veredito cedo; o batido cabe em 1 frase; expansão é substância, nunca enchimento.
   • ⛔ **REVOGADO (ver a marca acima) —** A isca é DECLARADA: "essa resposta vem no fim do vídeo — e é melhor
     do que um simples sim ou não" (open loop explícito); o veredito entra no ato final como revelação,
     casado com o twist (ROT-05).
   • **O batido cabe em 1 frase**: o que o público já sabe (ex.: "os Simpsons são famosos por prever")
     não ganha parágrafos de mecanismo/história — vira pressuposto dito de passagem. Explicar o manjado
     em profundidade = andar em círculos = queda de retenção. (Origem: parágrafos sobre "750 episódios +
     estatística + Trump 2000" viraram 1 frase dentro do veredito.)
   • **Duração é diretriz POR VÍDEO**: o alvo do Mateus manda (8 min ≈ 1.040 palavras a ~130 ppm);
     a flag --palavras da pauta define a faixa do gate (validador aceita "A-B" ou número único).

**ROT-07.** **EXEMPLO É POSTURA, NÃO TEXTO — o sotaque 8 (bancada critico-de-roteiro, 12/jul).**
   A 1ª rodada da bancada achou o vício sistêmico da geração pós-leis: o roteirista tratava frase-exemplo
   de módulo como snippet colável — a isca do STORYTELLING verbatim em 2 roteiros, "Daqui a poucos dias"
   abrindo 2 intros, "E você, antes deste vídeo, imaginava..." em 2 encerramentos. Regra: a FUNÇÃO se
   repete entre vídeos (isca, porta, pergunta final); o FRASEADO nasce novo em cada um. Enforcement:
   gate de n-grama ≥6 palavras contra knowledge/roteiros/ (validar-roteiro.mjs, aviso). Encerramento é o
   bloco mais vulnerável — estrutura fixa, fraseado girando. Corolário de governança (anti-circularidade):
   roteiro SÓ vira dourado no EXEMPLARES depois da revisão do Mateus/publicação, e como TRECHO-lição —
   produção recém-saída promovida a padrão-ouro auto-reforça os próprios vícios.

**ROT-08.** **NORMA DE LOCUÇÃO — o texto é pra UMA leitura (bancada, 12/jul).**
   ⚠️ **SUPERADA em PARTE pela ROT-25(b) (15/jul): a cláusula "dígito só quando a leitura é única" está
   REVOGADA — o ALGARISMO virou o DEFAULT** (data/ano, valor e quantidade específica em algarismo; por extenso
   só o numeral pequeno que funciona como palavra/artigo: "um", "dois", "três"). O exemplo "27%" abaixo também
   caducou pela mesma ROT-25(b): a UNIDADE/escala vai por EXTENSO porque o Bôco lê em voz alta — "27 por
   cento", nunca "27%". TODO O RESTO desta lei continua íntegro e é o que ela existe pra dizer.
   O roteiro-boco não pode deixar decisão pro Bôco na cabine: numeral romano PROIBIDO ("Troia VIIa" →
   "Troia Sete-A"); dígito só quando a leitura é única ("27%", "1998"); nome estrangeiro difícil com
   apoio de sonoridade na 1ª ocorrência ou nota no editor; credencial em inglês traduzida na narração
   (o nome exato vai no dossiê); um travessão por frase (aparte aninhado embola); número-âncora dito
   UMA vez (eco de "treze bilhões" ×4 = vício). Gate: aviso de romanos no validador.

**ROT-09.** **AUDITORIA COM LASTRO + VOLÁTIL CLASSE 1 (bancada, 12/jul).**
   O placar auto-relatado (ok/ressalvas/imprecisos) deixou passar "Subaru no Japão" (fica no HAVAÍ) e
   "750 episódios" (~800): auto-avaliação sem lista não vale. O roteiro-editor ganha seção ## Auditoria
   com CADA afirmação + veredito + fonte (o crítico amostra contra ela). E moldura temporal ("daqui a
   poucos dias", "semana que vem") = fato volátil CLASSE 1 — depende da data de PUBLICAÇÃO: exige
   [⚠️ ATUALIZAR ANTES DE GRAVAR] com data-limite + variante à prova. Odds/números que expiram com
   evento marcado idem. Gate: aviso de moldura sem marcação.

**ROT-10.** **PARÁFRASE NÃO ESCAPA — o gate mede MOLDE, não só cópia (bancada rodada 2, 12/jul, estreito-de-ormuz).**
   A rodada 2 provou que o sistema DRIBLA gate literal: reprovado por copiar a isca verbatim, o roteirista
   devolveu o MESMO molde com sinônimos trocados ("melhor do que um simples sim ou não" → "mais estranho
   que um sim ou um não"; "antes deste vídeo, você imaginava" → "antes deste vídeo, você fazia ideia").
   Sotaque 8 semântico: o scaffold retórico é a assinatura, não as palavras.
   • Enforcement: SCAFFOLDS nomeados no validar-roteiro.mjs = REPROVAÇÃO (regex de molde, não de n-grama):
     isca "…que um sim ou não", encerramento "antes deste vídeo…" (qualquer ordem), abertura "daqui a
     poucos dias". GRANDFATHER: só o dourado onde o molde nasceu (simpsons-copa) pode contê-lo.
   • Todo molde novo que virar template entre vídeos entra na lista de scaffolds na hora (lista viva).
   • Coloquialismo vetado pelo Mateus (treta/no talo/torcer o nariz) = reprovação; casual-de-dinheiro
     ("grana") = aviso de registro sóbrio.
   • Meta-lição de sistema: quando um gate vira alvo, o vício muda de roupa — a bancada humana/LLM
     (critico-de-roteiro) continua obrigatória por cima de qualquer gate determinístico.

**ROT-11.** **GANCHO ≠ PROMESSA DE ESPERA (feedback direto do Mateus, 12/jul — CORRIGE a ROT-06).**
   A ROT-06 mandava "isca DECLARADA" e o estúdio implementou como anúncio literal ("essa resposta vem
   no fim do vídeo") — o Mateus reprovou com força: "você literalmente promete uma coisa no início que
   será entregue só no final". Anunciar a espera é anti-gancho: é promessa de enrolação dita na cara,
   quebra a confiança e vira template de retenção barata.
   • O que FICA da ROT-06: o tópico 1 mostra o OBJETO do título e NÃO entrega o veredito cedo.
   • O que MUDA: o loop aberto é IMPLÍCITO — a dúvida plantada puxa sozinha ("Específico demais para
     ser coincidência" / "uma cena de desenho não vale nada sozinha") e a transição avança por
     INTERESSE (conhecer o histórico, o personagem, o mecanismo), nunca por meta-promessa.
   • PROIBIDO (gate, reprovação, sem grandfather): "a resposta vem/fica no fim", "a gente chega lá",
     "isso é o final da história", "volta lá no fim", "explico depois". O veredito chega no ato final
     naturalmente, sem nunca ter sido "agendado".
   • Cada tópico PAGA valor por si — retenção vem de pagamento contínuo, não de retenção do payoff.

**ROT-12.** **A TRANSIÇÃO SE FAZ, NÃO SE ANUNCIA (feedback Mateus, 12/jul — herança Gemini banida).**
   "Precisamos voltar no tempo…", "vamos voltar pra…", "vamos começar pelo começo", "vamos ao começo"
   = técnica batida dos roteiros ANTIGOS do canal (vício de linguagem do Gemini, que os escrevia).
   O corte pro passado/pro conceito acontece DIRETO ("Meses antes da Copa do Brasil, os Simpsons
   fizeram…" / "Então: o que é, afinal, um quasar?") — anunciar a manobra é pigarro de máquina,
   prima da promessa de espera (ROT-11) e do "Direto ao ponto:" (anunciar em vez de fazer).
   Gate: reprovação (validar-roteiro.mjs, lista CLICHES).

**ROT-13.** ⚰️ **SUPERADA pela ROT-24** (faixa 2.100–2.500 escolhida por tema). Fica como histórico.
   **BASE DE ~2.000 PALAVRAS (diretriz Mateus, 12/jul).** O default da casa sobe de 1.700–2.000
   pra ~2.000 palavras narradas (~15 min) — roteiro abaixo disso só por diretriz explícita por
   vídeo (ex.: simpsons-copa, o formato enxuto da Copa). Expansão SEMPRE com fato verificado
   novo, nunca com enchimento — cortar gordura ≠ cortar conteúdo continua valendo (ROT-06).

**ROT-14.** **CONTEXTUALIZE O TEMA DO ZERO — não presuma conhecimento prévio (feedback Mateus 13/jul, odisseia-real).**
   É a lei NADA IMPLÍCITO aplicada à PREMISSA, não só aos "porquês" dos fatos. O espectador pode nunca
   ter ouvido falar do assunto — ESPECIALMENTE temas que o canal nunca abordou. Presumir que ele já
   conhece o básico (nomes, história, termos) faz o vídeo soar "pra quem já entende" e o leigo abandona.
   • ANTES de investigar/analisar/desmentir, MONTE o assunto minuciosamente: quem é quem, o que é o quê,
     a história completa do começo — com nomes traduzidos e cada termo explicado na hora.
   • Origem: odisseia-real v1 pulou direto pra "Guerra de Troia", "cavalo de madeira", "Aquiles",
     "Ilíada", "Ulisses" sem explicar a HISTÓRIA (Páris rapta Helena → gregos cercam Troia 10 anos →
     cavalo de madeira → Troia queima → Ulisses passa 10 anos voltando pra casa por um mar de monstros =
     a Odisseia, contada por Homero). Conserto: ~1 min de setup do mito ANTES de "Troia existiu?".
   • Teste (o crítico-de-roteiro aplica): um leigo TOTAL no tema entende o vídeo sem pausar pra buscar
     nada fora? Se precisa de conhecimento pré-existente pra acompanhar, falta contextualização.
   • Não é gate automático (qualitativo) — é lente obrigatória da bancada + do próprio roteirista.

**ROT-15.** **PALAVRA SIMPLES SEMPRE — a rebuscada NUNCA quando existe a simples (feedback Mateus 13/jul, odisseia-real).**
   Reforça a persona do DNA ("palavra simples ganha da rebuscada"), que o roteirista vinha furando.
   Palavra difícil faz o espectador tropeçar e reler — "começa com um quê?" — e quebra o fluxo do áudio.
   O canal é dublado e de massa: vocabulário de conversa, não de redação/jornal.
   • Casos reais reprovados: "rapto" → roubo/quando fulano rouba; "apontada como" → considerada;
     "presente de rendição" → presente, fingindo que desistiram; "espólio de guerra" → saque de guerra.
   • Teste: se um adolescente pausaria pra pensar no que a palavra significa, troque pela do dia a dia.
     Termo técnico que o TEMA exige (quasar, redshift) = permitido, mas SEMPRE traduzido na hora (ROT-14).
   • Gate: lista de avisos de rebuscadas comuns no validar-roteiro.mjs (rapto, espólio, outrora…);
     é AVISO (contexto manda), mas a bancada (voz-alta) reprova palavra difícil onde cabe a simples.

**ROT-16.** **TEMPO À PROVA DE PUBLICAÇÃO — âncora relativa proibida pra evento volátil (feedback Mateus 13/jul, simpsons-copa).**
   O roteiro é GRAVADO num dia e PUBLICADO em outro (podendo escorregar +1/+2 dias), e a produção não controla
   a data exata. Então âncora de tempo RELATIVA ao locutor — "amanhã", "hoje à tarde", "no dia seguinte",
   "depois de amanhã" — pra um evento datável é uma bomba-relógio: se a publicação atravessar o evento, a
   locução gravada mente e o vídeo caduca (não dá pra regravar o Bôco no dia).
   • REGRA: ancore o gancho/veredito no evento mais DISTANTE que continua futuro em QUALQUER data de
     publicação prevista (aqui: a final do dia 19, não a semi de amanhã). Confrontos/datas fixas entram
     como FATO neutro, sem tempo relativo ("as semifinais colocam França contra Espanha", nunca "amanhã
     a França joga").
   • O VOLÁTIL (placar, quem passou, odds do dia) NÃO vai na narração gravada — entra por OVERLAY visual
     na pós, atualizado no dia de publicar. A locução pode PERGUNTAR ("se a Espanha não passar dessa semi…")
     e o overlay RESPONDE com o que aconteceu. É o padrão "corpo neutro agora + resultado na pós".
   • Snapshot datado que a narração enquadra como PASSADO ("antes de a bola rolar, a Espanha tinha 16%")
     é seguro — não caduca, porque é retrato de um momento, não previsão do agora.
   • Marcar no roteiro-editor o bloco [⚠️ ATUALIZAR ANTES DE GRAVAR / NA PÓS] dizendo exatamente qual
     overlay entra em cada janela de publicação.
   • Gate: validar-roteiro.mjs — âncora relativa de dia ("amanhã", "hoje à tarde"…) no narrado vira AVISO
     e exige o [⚠️ ATUALIZAR…] no editor (a moldura temporal já cobria "daqui a poucos dias" etc.).

**ROT-17.** COLD OPEN — A PRIMEIRA FRASE ENTREGA, ZERO PREÂMBULO (dados de retenção YouTube, 14/jul — 41% da audiência
   BR sai antes dos 10% do vídeo). A intro não é só ≤65 palavras (ROT-03): a PRIMEIRA frase aterrissa no fato/cena
   mais forte do vídeo — o objeto concreto do título, MOSTRADO, não resumido — e dá um down-payment na promessa em
   ≤15s. PROIBIDO pigarro de abertura ("imagine que", "você já parou pra pensar", "vamos falar de", "existe um lugar
   que", "neste vídeo", definição de dicionário): abrir NO conflito/na cena, a pergunta/stakes vem DEPOIS do soco. O
   setup do tema (ROT-14) vem logo após, nunca antes. Gate: `validar-roteiro.mjs` reprova padrões de pigarro na 1ª
   frase narrada. É o ponto de MAIOR alavancagem do canal — o intro-drop é o maior vazamento medido.

**ROT-18.** O TÍTULO É UM CONTRATO — PROMESSA AMPLA + ENTREGA IMEDIATA, NUNCA PEDÁGIO (dados de CTR×retenção, 14/jul;
   hipótese do Mateus sobre o Canal do Panamá: a retenção líder veio do título TRANSPARENTE com o que o roteiro
   entrega). O roteirista propõe 3 títulos + conceito de thumb em `roteiro.json.packaging`, cada um notado por
   **apelo amplo/universal** (viaja na dublagem automática — reach internacional) × **entregável no cold open**
   (≤15s). Todo título gera um LIVRO-RAZÃO DA PROMESSA no `roteiro-editor.md` (`promessa do título → paga em
   [tópico/timestamp]`); promessa paga só no ato final = título errado ou falta down-payment na abertura. Título
   sensacional sem entrega imediata traz o clique e MURCHA o alcance (o "pedágio do clickbait": expectativa ≠
   consumo → o espectador sai nos primeiros segundos). Transparência título↔conteúdo é o que concilia CTR alto com
   retenção alta. Marcar `alcance: universal | pt-br-only`.

**ROT-19.** FIO ÚNICO VENCE O LISTÃO + RETENÇÃO SE MEDE NO BRASIL (dados de **440 vídeos** do canal — o universo é
   `acervo/_index.jsonl`, de onde o `scripts/analytics/retention-puller.py --from-index` puxa; a CURVA de retenção
   voltou para 439 deles, 14/jul). (a) Narrativa de
   tema único retém 3–6× um listão frouxo (Panamá 62,6% e Coliseu 65% vs. "100 Lugares" 10,7%): o default é UMA
   investigação de fio contínuo; se o tema é lista, cada item ESCALA o anterior e conecta ao fio-mestre, com
   re-gancho a cada ~90s–2min (o sag do meio é onde a audiência escorrega). ⚠️ *[recalibrada pela
   ROT-100, 14/set/2026: a cadência de ~90s fica; o que muda é a NATUREZA do re-gancho — é pergunta
   sobre o ASSUNTO respondida no parágrafo seguinte, caso que volta ou objeto que prova, nunca "porta
   aberta" que fica pendurada.]* (b) O roteiro se julga pela **retenção
   BR**, NUNCA a agregada — a dublagem automática do YouTube dá reach estrangeiro gigante que retém 16–23% e afunda
   o número agregado sem dizer NADA sobre o roteiro (ex.: "Guarda Real" 25% agregado / 40,4% BR, com 70% das views
   no exterior). Dourado (EXEMPLARES) só promove com retenção BR saudável (>40%). O critico-de-roteiro ganha a lente
   "Retenção/packaging" contra estes benchmarks.

**ROT-20.** INSCRITO ≠ RETENÇÃO — CONVERSÃO VEM DE PULL TEMÁTICO, NÃO DE WATCH-TIME (dados dos mesmos **440 vídeos** de
   `acervo/_index.jsonl` da ROT-19, 14/jul). Retenção
   e conversão de inscritos são **inversamente correlacionadas**: os vídeos de MAIOR retenção BR (compilados, história
   longa) convertem MENOS inscritos/1k views (2,3 vs 6,4 dos de retenção média/baixa) — porque quem assiste até o fim
   já é a audiência FIEL, que não precisa se inscrever. Inscrito NOVO vem de **pull temático de descoberta**: os
   top-conversores (14–17 subs/1k, 3–4× o baseline de 4,4) são tópicos que fazem o novato pensar "preciso de mais
   disso" — descoberta científica, notícia urgente, mistério ("James Webb descobriu o que NÃO DEVERIA existir",
   "Cientistas descobrem…", "FBI emite alerta"). E inscrito é **BR**: vídeo viral no exterior via dublagem converte
   só 1,7/1k (o estrangeiro assiste, não se inscreve num canal PT-BR). Logo a fórmula vencedora concilia QUATRO
   alavancas SEPARADAS, não uma: (1) gancho temático de descoberta + apelo amplo = inscrito; (2) história + ritmo =
   retenção/watch-time; (3) título honesto (ROT-18) = CTR sem pedágio; (4) foco na audiência BR = onde mora o inscrito
   (o viral estrangeiro é vaidade de views). Nunca confundir watch-time com crescimento de canal. Peso na escolha de
   PAUTA: temas de descoberta/notícia/mistério com apelo amplo puxam inscrito; a execução (roteiro) segura e converte.

**ROT-21.** ANÁFORA DE NEGAÇÃO EMPILHADA = TENEBROSO (veto duro do Mateus, 15/jul — acre, tópico 1). "Não tinha estrada,
   não tinha posto, não tinha bandeira tremulando" — a repetição do mesmo esqueleto ("Não tinha X, não tinha Y, não
   tinha Z" / "Sem X, sem Y, sem Z" / "Nenhum X, nenhum Y, nenhum Z") pra dramatizar um vazio é carimbo de máquina
   que o Mateus DETESTA ("tenebroso, não gosto de jeito nenhum"). É a tríade (sotaque 2) na forma mais óbvia — o
   paralelismo anafórico chama atenção pra si e soa poema de IA. Conserto: dizer a ausência UMA vez, natural, sem
   o esqueleto repetido — "Não chegava lá nem estrada, nem autoridade — era boliviano só no nome." Vale pra QUALQUER
   anáfora de 3 membros iguais (não só negação). Entrou na lista negra do VOZ-ANTI-IA.md; o critico-de-roteiro caça.

**ROT-22.** ⚖️ **HOJE O TETO É 5 TÓPICOS EM NARRATIVA — [ROT-109]** (o grafo anda DENTRO do tópico; a [ROT-104] tinha derrubado este teto em 14/set e a [ROT-109] o restaurou no mesmo dia, com 5). O texto original, como histórico: MÁXIMO 4 TÓPICOS POR ROTEIRO (regra dura do Mateus, 15/jul). Todo roteiro tem NO MÁXIMO 4 tópicos (fora
   [INTRODUÇÃO] e **ENCERRAMENTO**) — menos tópico = mais fio único e menos "listão" (casa com a ROT-19). Vídeo que
   pedia 5–6 tópicos: FUNDIR os que são o mesmo eixo (ex.: no acre, "febre da borracha" + "guerra dos seringueiros"
   viram um só) ou CORTAR o que desvia do fio-mestre — nunca picar. Gate `validar-roteiro.mjs` REPROVA >4 tópicos
   (faixa 3–4). Vale pro roteirista-narracao (escreve já em ≤4), o montador (decupa em ≤4) e o backlog (acre 6,
   itaipu 5, galáxia 5 reestruturados; quasares 4 já ok).

**ROT-23.** PÚBLICO MADURO + CLAREZA TOTAL + NOMEAR O SUJEITO (calibração forte do Mateus, 15/jul — acre). Três faces de
   UMA voz: (a) **público ADULTO/mais velho, não adolescente** — zero linguagem de internet/meme/gíria jovem
   ("virou piada na internet", "a galera", "bombou", "viralizou"); registro é jornalismo sério e acessível (BBC/DW).
   (b) **CLAREZA 100%, NADA implícito** — cada frase entrega a informação completa e BEM CONSTRUÍDA; o espectador
   nunca deduz o que ficou "nas entrelinhas". Frase explícita e bem formada > frase "esperta"/insinuada; se só se
   entende por subtexto ou piada, reescreve explícita. (c) **o cold open NOMEIA o sujeito concreto do título JÁ na
   1ª frase** (ROT-17 reforçada) — se o vídeo é do Acre, a 1ª frase diz "Acre", não "existe um estado que…". Caso
   canônico reprovado: cold open do acre v2 dizia "O Brasil pagou dois milhões de libras… esse estado é o Acre"
   (nome só na 3ª frase) + "virou piada na internet" (meme). Entrou no VOZ-ANTI-IA.md (lista negra + seção própria)
   e no STORYTELLING.md; critico-de-roteiro caça na lente gosto-mateus.

**ROT-24.** ⚰️ **SUPERADA pela [ROT-103]** (a meta é 30 minutos, ~3.900 palavras) — passando pela faixa 2.600–3.000 de 31/jul/2026. Fica como histórico: COMPRIMENTO-ALVO: FAIXA 2.100–2.500 PALAVRAS, ESCOLHIDA POR TEMA (regra do Mateus — REVISTA 18/jul; a v1 de
   15/jul era ~2.500/2.400–2.700). Padrão da casa = **2.100–2.500 palavras (~16–19 min)**. **FILTRAR POR TEMA:**
   tema denso/complexo (muita camada a explicar) mira o topo ~2.500; tema direto/enxuto mira o piso ~2.100 — NÃO
   inflar tema simples só pra bater cota (isso vira gordura, vetada ROT-06/ROT-19). Default do `novo.mjs` = `2100-2500`;
   STORYTELLING atualizado. O que preenche o alvo é SUBSTÂNCIA (camada de investigação, contexto, exemplo, mecanismo),
   nunca enrolação. Segue MÁX 4 tópicos (ROT-22): tópicos mais densos, não mais tópicos.

**ROT-25.** DATA RECENTE ANCORADA NO ANO + NÚMEROS EM ALGARISMO (duas regras do Mateus, 15/jul — quasares). (a) **Data
   recente SEMPRE com o ANO explícito** — "em julho de 2026", nunca relativo ao locutor ("agora", "recentemente",
   "no comecinho de julho", "esses dias"). Relativo trai a data de gravação e faz o vídeo caducar: quem assistir
   daqui a 1 ano acha estranho. Com o ano, o fato vira histórico e segue válido. Erro canônico: quasares dizia
   "O anúncio saiu agora, no comecinho de julho" → "O anúncio saiu em julho de 2026". (b) **Números em ALGARISMO**:
   datas/anos (2026, 1903), valores e quantidades específicas escrevem-se com algarismo — MAS a UNIDADE/escala
   fica por EXTENSO, nunca em sigla/símbolo (o Bôco lê em voz alta): "60 gigawatts" (não "60 GW"), "2.000 metros"
   (não "2.000 m"), "20 quilômetros" (não km), "8 por cento" (não "8%"), "300 bilhões". Por extenso SÓ numeral
   pequeno como palavra/artigo ("um", "uma", "dois", "três"). Inverte a norma
   antiga ("por extenso por default"). No VOZ-ANTI-IA.md (norma de locução) e STORYTELLING.md (moldura temporal);
   gate `validar-roteiro.mjs` avisa data recente sem ano; o critico-de-roteiro caça as duas.

**ROT-26.** LISTÃO "10 X" É EXCEÇÃO DELIBERADA À ROT-22 (decisão do Mateus, 17/jul). O default do canal é investigação de
   fio único ≤4 tópicos (ROT-22), MAS o Mateus mantém o formato LISTÃO clássico pra pautas do tipo "10 X" ("10
   produtos úteis", "10 fatos do A380", "10 fatos da Itália"): nesses, o roteiro tem os **10 itens** (não 4
   tópicos), cada um curto e independente — é o formato-lista antigo, escolhido de propósito, não descuido.
   Implicação técnica: quando o tema é listão (marcar `flags.formato:"listao"` no projeto), a checagem de MÁX 4
   tópicos do `validar-roteiro.mjs` NÃO se aplica (a faixa vira ~10 itens); e o roteirista-narracao escreve em
   modo lista (item numerado + explicação curta), sem forçar fio-mestre nem escada. Só temas explicitamente "10
   X" viram listão — o resto segue fio único. (A implementar no gate quando o 1º listão for roteirizado.)
   ⚠️ A cláusula "sem forçar fio-mestre" foi REVISTA pela ROT-40 — o fio LEVE é obrigatório; o que caiu
   foi a porta-aberta explícita entre itens.

**ROT-27.** OS 5 REFORÇOS COMPETITIVOS DO ROTEIRO (análise VidIQ dos 17 roteiros, 18/jul)
   Rodei a análise competitiva dos 17 roteiros da semana contra os concorrentes mais vistos do YouTube (VidIQ:
   busca + transcrição, 3 por tema, PT/EN/ES). Veredito: o roteiro da casa GANHA em **rigor/honestidade** (onde o
   concorrente cai no mito — "oceanos não se misturam", "oceano subterrâneo", "poço do inferno" — a gente desmente) e
   em **estrutura** (fio único, veredito guardado). Mas PERDE de forma RECORRENTE em 5 frentes. Todo roteiro novo já
   deve nascer cobrindo, e vale rodar a análise VidIQ por vídeo ANTES de dar o roteiro por fechado:
   - **(A) Momento-uau concreto/visual** — ≥1 detalhe surpreendente destacável por vídeo (pontes de fibra inca, tulipas
     80% da Holanda, cabo de elevador de 27 mil kg). Somos "explicação"; o concorrente tem "curiosidade viral". É o buraco nº 1.
   - **(B) O "como a gente SABE"** — não basta afirmar o fato, MOSTRAR a prova responde a pergunta que o espectador faz
     (ondas sísmicas p/ o núcleo, laser+espelhos da Apollo p/ a Lua se afastar, manchas solares p/ o Sol girar). Escada de provas: do simples ao sofisticado.
   - **(C) Gancho de atualidade** — fechar no "e agora?" (poço chinês tentando bater Kola, missões Vera Rubin/Euclid), não só no histórico. Tema vivo retém mais que o consolidado.
   - **(D) Âncora BR quando cabe** — o exemplo brasileiro que o espectador JÁ viu (Encontro das Águas p/ oceanos; Cristo
     Redentor no lugar da Eiffel). ⚠️ Canal é dublado: registrar no `roteiro.json` p/ o `tradutor-de-narracao` avaliar equivalente universal na localização.
   - **(E) Número onde há só qualitativo** — "por volta de 27 mil quilos de massas móveis" bate mais que "o cabo é pesado"; "3 a 4 sigma" > "ainda não alcançou". ⚠ Auditar o SUJEITO do número (ROT-28): a 1ª versão deste exemplo dizia "cabo de 27 mil kg" — a fonte (KONE) mede o CONJUNTO cabine+contrapeso+cabos.
   NUNCA às custas do rigor. E cuidado com o comprimento: aplicar os 5 reforços engordou 6 dos 17 pra ~2.700 palavras
   — acima do teto de 2.500 (ROT-24); compensar com corte: as adições são CIRÚRGICAS (1-3 frases), compensando
   com corte de gordura, não empilhando.

> **A GRANDE BANCADA DOS 18 (ROT-28 … ROT-44, ex-leis 111–127 — 19/jul).** 18 críticos-de-roteiro independentes
> revisaram a semana inteira; ~40 propostas convergiram nestas 17 leis. Os padrões abaixo apareceram em ROTEIROS
> REAIS que o gate e a lei escrita deixaram passar. Referência de estilo agora inclui a ESCOLA KURZGESAGT
> (`knowledge/roteiro/STORYTELLING.md`).

**ROT-28.** AUDITAR O SUJEITO DO NÚMERO, NÃO SÓ O VALOR — E O ELO, NÃO SÓ AS PONTAS. Três furos da mesma família na
   bancada: (a) "os cabos pesam, sozinhos, 27 mil quilos" — a fonte (KONE) mede as MASSAS MÓVEIS (cabine+
   contrapeso+cabos); número certo no sujeito errado é erro factual (⚠ o exemplo do reforço (E) da ROT-27 nasceu com esse
   erro — corrigido 19/jul); (b) elo causal SINTETIZADO (a cama-plana "matou" o Concorde) herda a autoridade
   dos fatos vizinhos sem fonte que faça O ELO — ou acha a fonte do elo, ou entra como leitura atribuída;
   (c) ressalva marcada ⚠ na auditoria propaga pra TODA instância da alegação no texto ("2025 não superou
   2024" hedgeado numa frase e cravado na outra = contradição interna). A auditoria registra O QUE a fonte
   diz que o número MEDE (total vs parte, conjunto vs componente).

**ROT-29.** FATO QUE CADUCA SOZINHO ENTRA COMO PISO OU INSTÂNCIA DATADA, NUNCA TETO/PERPÉTUO. Grandeza monotônica
   (elevação acumulada, contagem de eventos, mortes) = "mais de X"/"passou de X", nunca "quase X" (o "quase
   1,5 m" do supervulcão JÁ estava 1,63 m no INGV). Superlativo de contagem ("só uma vez na história",
   "ninguém nunca") caduca por REPETIÇÃO — escrever "pela primeira vez em [data]" (a ignição do NIF já tinha
   se repetido 11×). Recorde aberto ancora na instância datada ("o recorde de 2024"), não no perpétuo ("o mais
   curto já registrado"). Todo primeiro/único/nunca = fato volátil classe 1 na auditoria.

**ROT-30.** HONESTIDADE DOSADA: A RESSALVA ENTRA UMA VEZ, COM PESO — E O ATO FINAL TERMINA NO CHÃO FIRME. Máx 2
   "poréns" seguidos sem reancorar no que É sólido; a moldura "vale ser honesto/a parte honesta" não se
   repete (vira tique de hedge); sequência do veredito = dúvida → resgate → conclusão (nunca fechar a fase de
   dúvida na mais pesada). Dúvida LEVANTADA é dúvida ARQUIVADA: ou resolve, ou isola explícito ("esse debate
   é sobre X, não ameaça Y") — dúvida órfã vaza confiança. Kurzgesagt: incerteza é ASSOMBRO ("ninguém sabe —
   e isso é incrível"), não balde de água fria.

**ROT-31.** DESMONTE DEVOLVE MARAVILHA — E TÍTULO-MITO SOBREVIVE SEM A THUMB. Quando o veredito desinfla a promessa
   ("não é bem assim"), o MESMO fôlego entrega algo real MAIOR (o ferro/fitoplâncton depois do "se misturam";
   Encélado depois do "não é oceano líquido") — desmentir sem repor = retenção despenca na revelação. Título
   que embute premissa falsa ("por que X nunca se misturam?") sobrevive à leitura SEM thumbnail (busca,
   dublagem, link no WhatsApp): ou o texto sinaliza a dúvida, ou marca pro tradutor reintroduzir o sinal.

**ROT-32.** ⚰️ **A CLÁUSULA DO TETO FOI SUPERADA pela [ROT-107]** (Mateus, 14/set/2026: *"sobre números, também é bem relativo… não pode ser uma coisa encaixotada"*). **O resto da lei continua valendo inteiro** — é ele que importa: cada número chega dimensionado, e a decisão é de DESTINO (tela × boca), nunca de cota por parágrafo. A [ROT-65], mais nova, já dizia *"sem check duro (densidade aceitável varia com o tema)"*. O texto original: CARGA NUMÉRICA NO OUVIDO: MÁX ~2 NÚMEROS PESADOS POR PARÁGRAFO FALADO. O meio é áudio — não dá pra reler.
   Cadeia de conversão fixa UM número-âncora (o resto vai pra tela); NUNCA dois números quase-iguais pra
   mesma grandeza no mesmo fôlego ("3,4 milhões — o censo contou quase 3,5" = ruído, não rigor); magnitude
   quase-homófona (milésimo/milionésimo/bilionésimo) exige âncora de RAZÃO na 1ª ocorrência ("mil vezes
   menos"); o número-âncora do título é UM SÓ do cold open ao veredito (900 na intro e 950 no fecho = contrato
   quebrado). Ficha técnica (6 dimensões seguidas) NUNCA na locução — 2-3 heróis na voz, o resto na tela.

**ROT-33.** ⚰️ **OS TETOS NUMÉRICOS FORAM SUPERADOS pela [ROT-106]** (a figura se julga pelo que INFORMA, não por cota; e nunca se prescreve CRIAR metáfora — foi essa prescrição que produziu o enfeite que a [ROT-55] teve de caçar). **Fica:** uma âncora por GRANDEZA, levada até o fim, e nunca duas réguas para a mesma grandeza. O texto original: UMA ÂNCORA-ANALOGIA POR GRANDEZA; METÁFORA-MASCOTE VOLTA ~3×; SUPERLATIVO-DE-MOLDE É RECURSO RARO. Cada
   número ganha UMA analogia forte (máx 2 com funções distintas: tamanho + sensação) — 5 âncoras pro mesmo
   "625 metros" é redundância. A metáfora-mestra do vídeo (o "respira", o balde) planta 1×, vira 1×, fecha 1×
   — na 7ª aparição virou refrão (Kurzgesagt: UMA mascote levada até o fim). "O mais X do universo/que
   existe" máx 1-2 por roteiro — repetido anestesia; entregue o FATO que prova o superlativo, não o rótulo.
   A fórmula "número = N objetos do cotidiano" máx ~4 por roteiro; varie o registro de escala (objeto,
   consequência humana, contraste, número cru quando já é absurdo sozinho).

**ROT-34.** O SOTAQUE 8 (TEMPLATE/ECO) VALE DENTRO DO PRÓPRIO ROTEIRO. O mesmo andaime didático ("pensa assim",
   "repara", "pra você ter noção", "e aqui vai/está") máx ~2× por roteiro e NUNCA abrindo mais de um tópico;
   o mesmo esqueleto retórico (tríade de dor "arde, incha e...", beat-label "a parte estranha/honesta/
   prática") não repete; tique lexical ("tiquinho" 6×) varia; imperativo de interpelação é TEMPERO (1-2 por
   tópico), nunca o MOTOR de transição — o fato ou a pergunta puxam a virada. Reconheceu de que parágrafo
   veio o esqueleto da frase? Reescreva.
   ⚠️ O subcaso "anúncio de importância" ("e aqui vai/está a peça que importa") deixou de ser tique
   tolerável e virou VETO DURO — ver ROT-45.

**ROT-35.** A ANÁFORA PROIBIDA (ROT-21) DISPARA JÁ A 2 MEMBROS QUANDO O ESQUELETO REPETE INTEIRO — E VALE PRA
   QUALQUER ANÁFORA, NÃO SÓ NEGAÇÃO. "Não tem serra de ouro. Não tem jazida de carvão." = mesmo veto (dobre
   no "nem"); "cada estrela, cada planeta, cada nuvem, cada buraco negro" = mesmo carimbo (varie: "as
   estrelas, os planetas, o gás"). A contagem não salva; o esqueleto repetido é que soa máquina.

**ROT-36.** CTA DO MEIO ENTRA NA DOBRADIÇA NEUTRA — FIM DE RACIOCÍNIO CONCLUÍDO, NUNCA NO MEIO DE PORTA/TRANSIÇÃO/
   ENCADEAMENTO. O like que racha a porta do tópico 3→4 corta o gancho mais caro do vídeo; o CTA entre
   "cobra caro" e "essa palavra, caro" órfã o trocadilho. Teste: leia com e sem o CTA — se tirar o CTA muda
   o sentido da frase seguinte, ele está no lugar errado.

**ROT-37.** PACKAGING NO MESMO GRAU DE CERTEZA DO VEREDITO. Título afirmativo ("X está acontecendo") + roteiro que
   conclui "talvez/indício" = promessa que o próprio vídeo desmente — título, thumb e fecho carregam o MESMO
   grau (resolver com "pode", interrogação, ou enquadramento de descoberta). O número da thumb obedece ao
   hedge do roteiro ("ATÉ 3×", nunca o topo do range como fato). Thumb com lastro provado (o "853" do A380
   vem do teste de evacuação) é o padrão-ouro.

**ROT-38.** ARQUITETURA ANTI-VAZAMENTO: (a) recap numerado ("primeiro X, segundo Y...") é gesto de FIM — nunca antes
   de conteúdo novo; a camada extra vem ANTES do recap (falso-fim reaberto vaza no ponto de maior closure);
   (b) a pergunta-fio resolve UMA vez, no ato final — tópico do meio entrega pista/mecanismo, nunca a síntese
   causal (senão o clímax vira resumo); (c) re-gancho de meio promete o ASSUNTO, nunca a EMOÇÃO do clímax
   ("vai te derrubar" rouba a reação); (d) fecho inédito vale PARA DENTRO: o encerramento não reprisa a
   imagem-síntese nem o tricolon do ato final (Kurzgesagt: o fecho ELEVA/reordena, não recapitula); (e) o
   número-manchete toca máx 2× (isca na intro + expansão no tópico) — o 3º toque ("junta os três") é estol;
   (f) não abrir um loop MAIOR que o do vídeo pra descartá-lo ("um dos maiores mistérios... mas essa é outra
   história" — ou amarra no fio, ou corta).

**ROT-39.** ⚰️ **A OBRIGAÇÃO FOI SUPERADA pela [ROT-107]** (Mateus, 14/set/2026: *"sobre ter gente, TAMBÉM é relativo, não necessariamente"*). **Fica como FERRAMENTA:** quando o assunto TEM gente, ela entra e FALA — fonte nomeada que nunca abre a boca é fonte pela metade. Tema de mecanismo puro se sustenta sem ninguém, e personagem enxertado para preencher cota é pior que a ausência. O texto original: TODO VÍDEO DE OBRA/MÁQUINA/NÚMERO CARREGA ≥1 ROSTO OU VIDA CONCRETA. Engenharia sem gente retém menos:
   o engenheiro que assinou (Liu Hao estava nas fontes e fora da narração), a família que atravessava em 2h,
   o operário a 600 m do chão. A fonte quase sempre JÁ traz o nome — usar. E pôr o espectador DENTRO do
   experimento 1-2× nos picos ("se VOCÊ caísse..." — Kurzgesagt).

**ROT-40.** LISTÃO v2 (revisa a ROT-26 — o piloto A380 desempatou a contradição ROT-26×ROT-19 A FAVOR do fio): (a) listão
   usa fio LEVE — régua temática declarada na intro que todos os itens tocam + loop de moldura pago no item
   final; o que se dispensa é a porta-aberta explícita entre itens, não o fio; (b) ordem é CURADORIA de
   retenção: os 3 itens mais fortes ABREM, o payoff do arco FECHA, os respiros (âncora-BR, curiosidade
   autônoma) vão no vale (~5-6), nunca colados ao clímax; (c) cada item é UM soco de peso parecido — máx 2-3
   números por item (item-ficha-técnica de 6 dimensões = 2 itens ou tela); (d) variar o molde de comparação.

**ROT-41.** DRAMATIZAÇÃO POR ESCOPO E REGISTRO: (a) totalizante ("a Europa inteira", "o mundo todo", "ninguém") só
   com fonte que sustenta o TODO — fonte parcial, escopo parcial ("boa parte da Europa"); é o adjetivo-drama
   da ROT-02 deslocado pra geografia; (b) o narrador NUNCA comenta o algoritmo/clique/thumb ("o número que
   fez o vídeo chegar até você") — quarta parede só pro lado da história; (c) tema "fofo" vigia a DENSIDADE
   de diminutivos (1-2 vívidos por tópico temperam; o enxame "bichinho/patinhas/parzinho" infantiliza);
   (d) o substituto de jargão se sustenta SÓ NO ÁUDIO — nunca um "valor"/"letra" anônimo que só a animação
   nomeia (traduza a COISA: "o número que mede a força da energia escura").

**ROT-42.** PESQUISA BLINDADA: (a) simetria narrativa perfeita é RED FLAG de apuração (a URSS mirou 15 km, a China
   mira "exatamente 15 km" — o número que fecha o poema é o que mais merece dúvida: fonte primária ou
   atribuir); (b) conselho de saúde ACIONÁVEL (primeiros socorros, ingestão, risco físico) sobe um degrau:
   fonte médica primária + "procure um médico" como saída, nunca receita que atrase atendimento; (c) viral
   sensorial desmentido NUNCA é reconstruído/encenado (rótulo de BOATO em grafismo — reencenar o hoax é
   propagá-lo); (d) agente NUNCA parafraseia lei numerada em artefato — cita número + texto literal ou não
   menciona (a paráfrase INVERTIDA da ROT-25 num roteiro-editor causou o cluster de violações que o
   roteirista obedeceu cegamente); (e) a narração é IDÊNTICA entre roteiro-boco.md e roteiro-editor.md —
   diff obrigatório ao fechar (3 parágrafos divergentes achados na bancada).

**ROT-43.** COMPILADO & DUBLAGEM: (a) briefing de compilado mapeia os MECANISMOS-BASE compartilhados (não só os
   tópicos) — cada bloco ensina o mecanismo comum por ângulo PRÓPRIO e no menor espaço; cold opens dos
   blocos distintos entre si; (b) exemplo mais recente entra DATADO e enquadrado como UM caso do ciclo ("no
   El Niño de 2023-24"), nunca "o último/o de agora"; (c) em vídeo dublado, o tópico-CLÍMAX não concentra a
   maioria dos exemplos BR-específicos (o payoff precisa viajar — âncoras BR nos tópicos do meio); (d) âncora
   BR LOAD-BEARING (é prova do argumento) ≠ ilustrativa (só cor): a load-bearing não é trocável livre — o
   editor especifica QUE propriedade o substituto precisa ter (ex.: "dois rios que se separam por
   temperatura, SEM sal"), senão a lógica quebra na localização.

**ROT-44.** ⚠️ **A cláusula (a) foi CALIBRADA pela [ROT-104]: a frase de reconexão NÃO é sinal de enxerto — é o INSTRUMENTO do grafo.** O nó legítimo se liga ao objeto em UMA frase, e ela fica no texto (*"Acompanha pra onde essa água vai."*). O que reprova é o nó que precisa de um PARÁGRAFO de justificativa, ou que deixa o objeto do título significando o mesmo de antes. O resto da lei segue inteiro: CONTEXTO QUE AVANÇA vs TRIVIA QUE DECORA: (a) reforço competitivo (ROT-27) só entra se ADIANTA o fio —
   se precisa de frase de reconexão pra não soltar o fio, é enxerto (a curiosidade VIRA o ponto ou corta);
   (b) física correta ≠ substância: mecanismo que o próprio roteiro admite não resolver a pergunta é trivia
   verdadeira-porém-marginal — corta ou ganha função narrativa (falso-fio, prova); (c) tópico de contexto
   pré-objeto (tensão ROT-01×ROT-14): cabe em UM tópico, abre pelo beat mais forte (não o mais seco), e cada
   beat amarra ao mistério da intro; (d) explicador multi-força (3+ causas em direções/escalas diferentes)
   mantém PLACAR: cada força entra rotulada (acelera/freia · dia/anos/eras) e a síntese reconcilia TODAS,
   inclusive as que chegam depois do clímax.

**ROT-45.** ANÚNCIO ENFÁTICO DE IMPORTÂNCIA = VETO DURO (o Mateus, 19/jul: "eu acho MUITO ruim esse tipo de
   cognitivo/conexão no roteiro, pois estraga MUITO"). O padrão: uma frase-etiqueta apontando pra própria
   informação ANTES de entregá-la — "E aqui está a peça que importa:", "aqui está a ideia central", "aqui
   entra a parte que ninguém pode omitir", "e aqui está a mágica", "o pulo do gato", "a parte esperta",
   "o truque é bem esperto", "a peça central da história". NÃO é questão de dose (a ROT-34 tratava como
   tique de 2×) — é VETO: a informação entra DIRETO, sem o narrador apontar pra ela ("Criar gado solto no
   campo é o contrário de encher um lugar de gente." — seco, sem prefácio). Se a transição pedir ponte,
   a ponte é uma PERGUNTA ou o próprio fato, nunca o rótulo de importância. Caso real: 11 ocorrências em
   10 dos 18 roteiros da semana, varridas e cortadas; o gate agora REPROVA o padrão.

**ROT-46.** CLAREZA DA INTRO = NEXO EXPLÍCITO, E CONSERTO LOCAL EXIGE RELEITURA DO BLOCO (o Mateus, 19/jul: intro da
   ponte "totalmente confusa e sem nexo — força o espectador a pensar no que o roteiro tá falando, ao invés
   de deixar tudo 100% claro"). Dois mecanismos do defeito: (a) REFERÊNCIA SEM ANTECEDENTE na intro — "o
   recorde que ela quebrou TAMBÉM era chinês" sem a China ter sido dita ("também" órfão); "se AS BOMBAS
   parassem" sem bomba nenhuma mencionada (artigo definido pressupõe o que o leigo não sabe). TESTE da
   intro: todo "também/esse/ali/ele/o X definido" tem antecedente EXPLÍCITO nas frases anteriores; jargão
   ("tabuleiro") NÃO entra na intro nem traduzido — não há espaço; imperativo sem sujeito ("Pendura uma
   estrada e manda o carro...") confunde. Cada frase da intro se apoia SÓ no que já foi estabelecido.
   (b) A CAUSA-RAIZ da ponte: um conserto anterior cortou "na China" da 1ª frase (fix legítimo de outro
   erro) e NINGUÉM RELEU a intro inteira — o "também" ficou órfão. REGRA: todo conserto local (cortar/editar
   uma frase) obriga a RELER O BLOCO INTEIRO em voz alta antes de fechar — frases vizinhas herdam
   referências da frase cortada. O crítico caça referência órfã como lente fixa da intro.

---

---

**ROT-47.** IDADE CALCULADA NA CABEÇA **APODRECE NO ARQUIVO** — "menos de 150 anos" para 1869 era verdade até
2019, e o vídeo saiu em 2026 dizendo 157 (26/jul/2026).

O `homossexualidade-antiguidade` narra *"a palavra homossexual tem menos de 150 anos"*. A palavra foi cunhada
em **1869**; `2026 − 1869 = **157**`. A afirmação era correta quando alguém a formulou — deixou de ser em
**2019** — e o vídeo, finalizado e entregue hoje, a repete.

**Eu repeti o mesmo erro na descrição do YouTube**, em dois lugares (o parágrafo de abertura e o rótulo do
capítulo), copiando a frase da narração sem fazer a conta. Quem pegou foi o `curador-titulos-thumbs`, que se
recusou a usar "150 anos" em qualquer título ou capa e escolheu **"A palavra é de 1869"** — a forma que não
envelhece.

**A regra:** *não escreva a IDADE, escreva a DATA.* "Cunhada em 1869" é verdade para sempre; "tem menos de 150
anos" tem prazo de validade e ninguém marca o vencimento. Vale para toda quantidade derivada do presente:
"há X anos", "faz X décadas", "no século passado", "hoje já são X". Se o número relativo é a força do gancho —
e às vezes é, porque "157 anos" impressiona mais que "1869" — então ele tem de ser **computado do ano de
produção**, não herdado do rascunho.

**⚠️ E O AGRAVANTE DESTE CANAL:** o acervo é reaproveitado. O `curador-de-acervo` monta compilados com material
publicado meses ou anos antes, e a **narração original viaja intacta** para o vídeo novo. Uma idade relativa
correta em 2024 vira erro em 2026 sem ninguém tocar no arquivo — e num compilado de 62 min ninguém vai
reconferir 36 tópicos. Data absoluta é a única forma que sobrevive ao reaproveitamento.

**Como verificar:** varredura por padrão de idade relativa no roteiro antes do gate —
`grep -nEi "(menos|mais) de [0-9]+ anos|há [0-9]+ anos|faz [0-9]+ (anos|décadas)|[0-9]+ anos atrás"` — e, para
cada achado, conferir contra a data absoluta que o mesmo trecho cita. Se não cita nenhuma, a afirmação é
inauditável e tem de ganhar uma.

**Escopo de correção:** do presente para frente. O vídeo já entregue **não se refaz** por isso (o núcleo é
explícito: erro achado no que já saiu se crava, não se reprocessa) — mas a descrição, que é editável depois da
publicação, **foi corrigida** para "cunhada em 1869 — tem 157 anos", e o capítulo virou "Uma palavra de 1869".

---

### ROT-48 · O roteiro AVANÇA ou morre — informação nova em cada bloco, concretude antes de teoria

Do Mateus, em voz própria (31/jul/2026), reagindo ao estudo BBC/DW:

> *"É extremamente ruim quando o roteiro fica rodando em círculos. A gente não pode rodar em
> círculos. A gente tem que avançar e trazer sempre informações novas, não ficar sambando na mesma
> informação por diversas vezes. O espectador precisa SENTIR um avanço na explicação, no porquê e
> nos detalhes. Senão a gente fica muito na teoria e pouco no que de fato importa: **o quê, do que é
> feito, como funciona, por que é assim** — e não deixar isso implícito antes de explicar."*

**As três regras que saem disso:**

1. **Cada bloco responde uma pergunta NOVA da cadeia concreta.** A cadeia é: *o que é → de que é
   feito → como funciona → por que é assim → o que isso muda*. Um bloco que não move a cadeia é
   círculo — corta ou funde. (Endurece a ROT-44: não basta o contexto "avançar", cada BLOCO tem de
   entregar degrau novo.)

2. **Re-afirmar com outras palavras é círculo, não reforço.** A ROT-34 já pega o eco de FORMA
   (molde repetido); esta pega o eco de SUBSTÂNCIA — o parágrafo que "samba" no que o espectador já
   sabe. O teste: se o parágrafo sumisse, o espectador perderia algum fato? Se não, ele é círculo.
   Exceção única: o callback PLANTADO (ROT-38) — que volta a um fato antigo para pagá-lo com
   informação nova, nunca para repeti-lo.

3. **Concretude antes de abstração, sempre.** "Teoria" só entra quando o concreto já está na mesa:
   primeiro a coisa (o quê/de quê/como), depois o princípio que a explica. Nada implícito — se o
   roteiro depende de o espectador deduzir um elo, o elo está faltando (casa com a ROT-46 e com o
   "NADA IMPLÍCITO" do SYSTEM).

**Validação externa:** o estudo BBC/DW (knowledge/referencias/) mediu exatamente isso nos dois
canais de referência — fecho sem recapitulação em 11 de 15 vídeos da DW, e a estrutura por blocos
que respondem "a pergunta que o espectador faria agora". O instinto do dono e o padrão das
referências apontam para o mesmo lugar.

**Gate futuro (proposto na seção 7.6 do PIPELINE-REVISAO):** detector de re-afirmação semântica
intra-roteiro (hoje o autoplágio só compara ENTRE roteiros e só por n-grama), e a lente 2 do crítico
ganha "círculo" como categoria nomeada de achado — distinta de "enrolação" (enrolação demora a
chegar; círculo chega e fica dando volta).

---

### ROT-49 · O humano não força — o ESFORÇO de parecer humano é o pior sotaque de IA

Do Mateus (31/jul/2026), sobre o `el-nino`:

> *"Usamos vários substantivos e adjetivos que não tinham necessidade — uma coisa até infantilizada,
> de tirar com a cara do espectador. Parece uma IA que não sabe como os humanos funcionam, tentando
> ser humano DEMAIS. Os humanos não forçam as coisas. O que a gente quer é a linha jornalística da
> BBC: transmitir a informação de forma inteligente e bem arquitetada."*

**A tese:** naturalidade não se performa. A BBC soa humana **por ser clara e bem construída** — não
por simpatia decorativa. O roteiro que se esforça para ser querido produz o efeito inverso: o
espectador sente a máquina fantasiada.

**Os sinais (o sotaque 9 do catálogo):**
- **Diminutivo e adjetivo afetivo** sem função: "peixinho prateado", "nome carinhoso", "visitinha".
  Se o adjetivo não muda o fato, ele é fantasia — corta.
- **Exemplo infantilizado**: a analogia que explica de menos e sorri de mais.
- **Piscadela ao espectador**: a graçinha, o "olha só que curioso", o tom de quem cutuca.
- **Entusiasmo performado**: exclamação e advérbio de empolgação fazendo o trabalho que o FATO
  deveria fazer.

**A régua positiva** (o que substitui): a emoção vem do fato bem escolhido (ROT-02), da voz de
pessoa real quando houver (estudo BBC/DW: emoção terceirizada), e da arquitetura — o assombro do
espectador nasce da informação, nunca do roteiro pedindo assombro. Persona ≠ fofura: o "você"/"a
gente" continuam (sotaque 5); o que sai é o AFETO decorativo.

---

### ROT-50 · Superlativo só com dono ou com prova

Regra BBC (News Styleguide, seção Superlatives) adotada pela casa em 31/jul/2026 — e feita sob
medida para um canal chamado Top 10: **"único", "maior", "primeiro", "inédito", "recorde" exigem
fato verificado OU atribuição explícita.** A saída elegante quando a prova não é nossa: dar o dono
ao recorde — *"o que ele diz ser o maior…"*, *"considerado pela NASA o mais…"*. Superlativo órfão
de prova é a manchete que o público desmonta nos comentários — e tem razão.

**Reparo da medição (31/jul/2026, `knowledge/referencias/atribuicao-medida.md` §7).** Ao ler os 13
superlativos do corpus BBC/DW um a um, apareceram **duas formas legítimas de pagar** que esta lei
não previa e que estavam sendo tratadas como violação:

- **O hedge que rebaixa a alegação.** *"É **um dos maiores** projetos desse tipo na Europa"* não é
  superlativo órfão — é uma afirmação mais fraca e mais honesta: faixa, não topo absoluto. E faixa
  não precisa de recordista. Rebaixar em vez de atribuir é uma saída, não um truque.
- **A tarja na tela conta como atribuição.** A BBC abre um vídeo com *"pela primeira vez em décadas,
  a obesidade caiu"* sem fonte na fala — e com "Fonte: Gallup, 2025" na tela. O superlativo está
  pago; só não foi pago com segundos de narração (ver ROT-51 item 4).

**O que a medição confirma, e é o ponto duro:** 13 superlativos em 170 minutos. Quem faz jornalismo
bom usa superlativo com **muita** parcimônia — e nós temos um canal cujo nome é um. Não é motivo
para abandonar o formato; é motivo para que cada superlativo nosso esteja pago.

---

### ROT-51 · A fonte entra quando a afirmação é DE ALGUÉM — e aí entra antes

Medido em 30 vídeos BBC/DW, 170,5 min de narração (`knowledge/referencias/atribuicao-medida.md`,
31/jul/2026). A versão anterior desta lei — "quem diz vem ANTES, sempre" — foi tirada do styleguide
declarado da BBC, não do que a BBC faz: só **8,8% das afirmações da narração têm fonte na fala**, e
**1 em cada 4 atribuições chega depois do fato**. Atribuir tudo não é rigor, é ruído.

**O TESTE, EM UMA LINHA:** *se "quem disse isso?" mudar o quanto o espectador acredita, a fonte
entra — e entra antes do conteúdo. Se não mudar, a fonte não vai para a boca.*

**1 · FONTE ANTES (obrigatório).** Quando a afirmação é LEITURA de alguém — causa, juízo,
estimativa, previsão, acusação, ou qualquer coisa que contrarie o senso comum. O espectador precisa
saber de quem é a lente antes de olhar por ela.
> *"Segundo o professor Tuck, guerras baseadas em valores são mais difíceis de terminar."*
Medido: interpretação é atribuída 1,8× mais que fato duro, e 62,5% dessas abrem com a fonte.

**2 · FONTE DEPOIS ou NO BLOCO (legítimo, 25% dos casos).** Três situações:
   · o crédito é longo e na frente atrasaria o fato → vai para o fim, após vírgula
     (*"…tem tirado o foco do tráfico interno, segundo o promotor do MP-SP, Lincoln Gakia"*);
   · a afirmação abre o vídeo e precisa fisgar → o fato entra nu e a fonte vem na frase seguinte
     (*"A música clássica pode te deixar mais inteligente." / "Pelo menos foi essa a conclusão de
     um estudo publicado na Nature."*);
   · a fonte já foi dita no bloco → não se repete a cada frase (17,5% das afirmações herdam).

**3 · SEM FONTE NA FALA (o caso NORMAL — 65% das afirmações).** Não se atribui: fato histórico
consolidado; fato institucional/legal não disputado; o que a própria produção apurou, viu ou mediu;
o segundo número de uma série já creditada; descrição física do que está na tela; demonstração que
roda na tela.

**4 · A TELA É O LUGAR DA ATRIBUIÇÃO PESADA.** Crédito curto e verificável ("Fonte: Gallup, 2025")
custa 0s de narração e prova mais que dizê-lo. Melhor ainda: mostrar o documento primário. A BBC
abre o vídeo de canetas emagrecedoras com "sete milhões de americanos deixaram de ser obesos" SEM
fonte na fala — e com a matéria do Gallup aberta na tela. **Fonte de dado → tela. Nome na boca só
quando o item 1 mandar.**

**TETO DE VOLUME:** ~1 atribuição falada por minuto (medido: 0,87/min). Passou muito disso, o
roteiro virou bibliografia lida em voz alta.

<sub>⚰️ Versão de 31/jul/2026 manhã, superada pela medição no mesmo dia: *"na FALA, a fonte vem
antes da afirmação, sempre — regra BBC 'Attribution first'"*. O Mateus recusou o absoluto (*"nem
sempre isso é necessário"*) e a medição deu razão a ele. Fica como lembrete: **styleguide é o que
uma casa diz que faz; corpus é o que ela faz.** Destilar do primeiro é copiar a intenção alheia, não
o ofício.</sub>

---

### ROT-52 · A emoção é terceirizada — adjetivo dramático só em boca de gente real

O achado central do estudo BBC/DW (`knowledge/referencias/`, 31/jul/2026): dos 16 adjetivos
dramáticos do corpus DW, **15 estão na boca de entrevistado e nenhum na locução**; na BBC, até 30%
do falado é depoimento. A sobriedade deles não é ascese — é divisão de trabalho: **o narrador traz
o fato, a pessoa real traz a emoção.**

Para nós: a ROT-02 (sem dramatização por adjetivo) continua dura na NARRAÇÃO — e o caminho legítimo
para a emoção existir no vídeo é a **voz de terceiro**: sonora de arquivo, depoimento Reuters,
citação lida com atribuição na tela. Quando a produção tiver a sonora (rota Reuters em desenho), o
roteiro deve PREVER o espaço dela; até lá, a citação textual com fonte é o substituto.

### ROT-53 · FONTE RASA NÃO PRODUZ ROTEIRO FUNDO — o teto do roteiro é o insumo
**Feedback do Mateus (31/jul/2026) sobre o `ceuta-travessia-em-massa`:** *"Nossos roteiros estão MUITO
superficiais, mapeie se não é nas fontes que estamos pecando, por falta de fontes realmente profundas
e que possa dar ao nosso roteirista insumos pra construir um roteiro bem fundamentado e jornalístico —
que é a nossa pegada, pegada jornalística inteligente."*

**Ele estava certo, e a lista de fontes prova.** Das 12 do roteiro: **7 eram cobertura de agência do
mesmo dia**, **3 eram Wikipédia**, 1 enciclopédia geral, 1 notícia sobre um documento primário. E
**zero** de: think tank / análise acadêmica · estatística primária · documento primário lido ·
reportagem de longo formato com relato de campo. **BBC News Brasil e DW Brasil — a régua editorial
declarada da casa — não foram consultadas.**

**CADA CRÍTICA DELE MAPEIA NUMA CLASSE DE FONTE QUE FALTAVA.** É isto que torna o achado útil:

| o que ele reprovou | a fonte que faltava |
|---|---|
| *"as datas ficaram vagas… jogando um dado ao vento"* | fonte histórica — 1415/1580/1668 saíram como cronologia, sem o que significavam |
| *"não citamos o motivo das pessoas, a motivação de fato"* | estatística primária — a motivação virou "gente jovem sem emprego", genérica, porque **não havia número para dar** |
| *"o que pode significar para a geopolítica mundial"* | análise — o fecho parou no bilateral e não chegou à externalização de fronteira da UE, o modelo que o episódio testa |

**O DIAGNÓSTICO GERAL:** matéria de agência responde *o quê · quantos · quando*. Não responde *por quê
· o que significa · o que muda* — que é exatamente o que o canal vende. O roteirista escreveu tão
fundo quanto as fontes permitiam. **Buscar só notícia do dia é escolher não entender.**

**O CONSERTO É UM PISO DE CLASSE, não de contagem** (`knowledge/roteiro/PESQUISA-HONESTIDADE.md`): todo
roteiro de acontecimento precisa de pelo menos uma fonte de cada linha — evento (2 veículos que
apuraram SEPARADO) · mecanismo (think tank/acadêmico) · número humano (estatística primária do órgão
do país) · documento (lido, não a notícia sobre ele) · voz de quem viveu (longo formato) · BBC News
Brasil e DW Brasil **por nome**. O dossiê lista as fontes agrupadas por essas linhas, com as vazias
declaradas vazias — linha 2 ou 3 em branco é aviso de que o roteiro vai sair raso.
⚠️ **Wikipédia não é fonte, é MAPA de fontes:** serve para achar a nota de rodapé, não para ser citada.
⚠️ **A armadilha da agência:** NPR, US News e Spectrum publicando AP são **uma** fonte, não três. A
regra "mesma agência em dois jornais é uma fonte" já existia e foi violada — confira o crédito no pé.

**⚠️ E O ACHADO QUE VALE MAIS QUE O CONSERTO: TRÊS DAS QUATRO REGRAS VIOLADAS JÁ ESTAVAM ESCRITAS.**
"Data tecida, nunca carimbada" (STORYTELLING), "mesma agência é uma fonte" (PESQUISA-HONESTIDADE) e a
[ROT-44] "contexto que avança" existiam na doutrina. O `validar-roteiro.mjs` **não checa nenhuma das
três** — ele mede tamanho de intro, cold open, contagem de tópicos, paralelismo de lista, frase-molde e
medida por extenso. Ou seja: o gate protege a FORMA e é cego para a SUBSTÂNCIA. *Regra sem verificação
é regra seguida quando o agente lembra* — e num roteiro de 2.200 palavras ele não lembra.

**Os três testes operacionais que entraram, porque regra sem teste não pega:**
1. **Registro (VOZ-ANTI-IA):** o terceiro eixo, que faltava — não formal, não gíria, **e não LITERÁRIO**.
   ⚠️ A doutrina dizia "vocabulário **elegante** e sóbrio", e "elegante" era lido como licença para a
   palavra bonita: saiu *"cidade encravada na costa"* e *"atravessaram a nado"* na primeira frase.
   Trocado por "sóbrio e CORRENTE", com tabela de-para e o teste *"um repórter da BBC Brasil escreveria
   esta palavra ao vivo?"*. **A instrução convidava o erro que ela devia impedir.**
2. **Avanço (STORYTELLING):** o teste da primeira frase — leia a última frase de cada tópico ao lado da
   primeira do seguinte; se a segunda reafirma, corte. No Ceuta o tópico 1 fechava em *"uma cerca só
   funciona enquanto os dois lados quiserem"* e o 2 abria em *"a cerca tem dois donos"*. Dois tópicos
   que respondem à mesma pergunta são **um** tópico.
3. **Data que informa (STORYTELLING):** toda data carrega o que significava na época. Teste: corte a
   data; se a frase continua dizendo o mesmo, era enfeite. Vale igual para número — número sem
   consequência é ruído com aparência de rigor, e é o que faz um roteiro parecer pesquisado sendo raso.

**Como verificar:** o dossiê do roteiro tem as 6 linhas de fonte preenchidas ou declaradas vazias; e o
`critico-de-roteiro` (a bancada adversarial) passa a ter estes três testes como lentes.

### ROT-54 · A INTRO SE RESOLVE — cada frase se paga nela mesma, UMA dívida aberta, e a promessa dita
**Feedback do Mateus (31/jul/2026), sobre as intros de `ceuta`, `ira-cessar-fogo` e `ucrania`:** *"As
nossas introduções parecem muito vagas... vazias... parece que não vai levar o espectador a lugar
nenhum e só planta dúvidas. Usa palavras robustas ou linguagem quebrada, que faz o espectador ficar
com vários nós na cabeça, sem conseguir distinguir o propósito real do vídeo."*

**O DEFEITO TEM ANATOMIA, e as três intros a exibiam — TODAS aprovadas no gate:**
- **O nó** — frase que só faz sentido com informação que vem minutos depois. *"Cruzando o mar desde o
  Marrocos"* para uma "fronteira de terra" (o quebra-mar só aparece no tópico 3: dívida de 8 min);
  *"sem cobrança, por 60 dias apenas"* antes de existir a ideia de pedágio (elipse = a "linguagem
  quebrada" do feedback); *"o Irã disse que o navio era comercial"* sem dizer que o navio era iraniano.
- **A dívida múltipla** — a intro do Ceuta abria TRÊS nós geográficos antes de o espectador poder se
  importar com a pergunta-fio. A régua BBC (corpus de 15, medido): cada frase da abertura se resolve
  nela mesma; o ÚNICO aberto ao fim dos 30s é a pergunta-fio.
- **A promessa ausente** — nenhuma das três dizia o que o espectador ganha ficando ("sem conseguir
  distinguir o propósito real do vídeo"). E a da Ucrânia prometia errado: *"Por quem?"* — pergunta de
  agente que o vídeo não responde (ele responde "o quê").
- **Zero "você"** nas três intros — o espectador não era posto dentro da história (BBC: "você" nos
  primeiros 30s em praticamente todo explicador).

**AS CINCO CLÁUSULAS** (operacionais em `knowledge/roteiro/STORYTELLING.md` §"A INTRO SE RESOLVE"):
(1) cada frase se paga nela mesma — teste do nó frase a frase; (2) exatamente UM aberto no fim da
intro; (3) a promessa em uma linha, cumprível, com formulação que nasce nova a cada vídeo (fórmula
repetida = sotaque 8 — ~~e o "Neste vídeo você vai..." de 8-em-8 da BBC é a marca DELES, não
nossa~~ ⚠️ *[trecho riscado SUPERADO pela ROT-99, 14/set/2026: o CONTRATO DE CONTEÚDO ("hoje você
vai entender como X, por que Y e o que Z") é forma legítima e boa de dizer a promessa, desde que o
vídeo entregue na ordem — refutado pelo `um-dia-luz-da-terra`, o roteiro que o dono aprovou; o que
segue vetado é a promessa de ESPERA (ROT-11) e a etiqueta de ÊNFASE (ROT-45)]*);
(4) "você" entra na intro; (5) concreto antes de abstrato, palavra simples, e metáfora só se for a
MESMA que o corpo cobra.

**POR QUE O GATE NÃO PEGAVA:** as regras de intro eram todas de FORMA (≤65 palavras, sujeito na 1ª
frase, sem pigarro, nexo com o que veio antes) e nenhuma de FUNÇÃO (o espectador sabe onde está e o
que vai ganhar). Intro vaga passava limpa. O ROT-46 cobria a referência ao PASSADO (antecedente
explícito); esta cobre a dependência do FUTURO (elipse que só o corpo resolve). O validador ganhou o
check barato ("você" na intro = aviso); o teste do nó é lente do `critico-de-roteiro`.

**Como verificar:** as três intros reescritas em 31/jul são o calibre (62-65 palavras, um aberto,
promessa cumprível, "você" presente) — arquivadas com as versões vagas em
`arquivo-morto/2026-07-31-roteiros-v1/*-pre-intro-v3.md` para comparação.

### ROT-55 · FIGURA NÃO HUMANIZA — clareza humaniza; metáfora decorativa é sotaque de IA

⚠️ **O TESTE DE REMOÇÃO DESTA LEI É DE UMA PONTA SÓ e foi SUPERADO pela [ROT-106]**, que acrescenta o terceiro resultado: quando a palavra literal informa **MAIS** que a figura, a figura APAGOU UM FATO e sai sempre. O teste como está escrito abaixo (*"se não perdeu informação, era decoração"*) absolvia *"se calar pra sempre"*, que o dono reprovou em 14/set/2026.
**Feedback do Mateus (31/jul/2026), sobre uma frase de intro escrita pelo EDITOR-CHEFE** — o vício
atravessa todos os agentes, inclusive quem os corrige: ❌ *"Você vai entender por que essa porta abre
e fecha — e quem está com a mão na maçaneta."* → *"É o exemplo de IA tentando humanizar algo que os
humanos não humanizariam. Comparação desconexa, poderia citar de uma forma mais sóbria e simples. Não
tem mistério... parece que vocês estão inventando linguagem rebuscada SEM NECESSIDADE, não é difícil
produzir um roteiro bem escrito."*

**O PADRÃO DE FUNDO:** a IA "humaniza" acrescentando figuras de linguagem; o jornalista humaniza com
CLAREZA e proximidade (sintaxe falada, "você", caso concreto). A figura decorativa é um sotaque que
sobrevive ao filtro de vocabulário porque usa palavras simples ("porta", "maçaneta", "caixa") em
arranjo artificial — a seção "sóbrio não é literário" pega a palavra rebuscada; esta pega a **figura
rebuscada com palavras simples**.

**A RÉGUA — explicativa × decorativa:** figura EXPLICATIVA traduz mecanismo ou grandeza que sem ela
exigiria jargão ("o acordo era um cronômetro"; a "foto do momento" da BBC) → fica, UMA por conceito,
plantada e cobrada. Figura DECORATIVA recobre o que já é claro ("a mão na maçaneta" = quem decide;
"a caixa se rompeu" = a separação acabou) → corta. **Teste de remoção:** tire a figura e diga com a
palavra comum; se não perdeu informação, era decoração.

**DOIS VETOS ABSOLUTOS:** (1) figura na PROMESSA, na pergunta-fio ou em título — promessa se diz
literal; figurá-la é o "nó" da ROT-54 fantasiado; (2) figura EMPILHADA — a 2ª metáfora para o mesmo
conceito (porta→maçaneta→chave→torneira) é sempre decorativa, porque a 1ª já ocupou o lugar.

**A RAIZ ESTAVA NA DOUTRINA, em dois lugares que MANDAVAM criar metáfora:** a ROT-33 ("metáfora-mascote
volta ~3×") sem o qualificador explicativa, e o STORYTELLING importando a mascote do Kurzgesagt — **que
lá é um personagem NA TELA (o corgi), não uma figura na boca do narrador**. Importamos técnica visual
como técnica verbal. No nosso formato a divisão é limpa: a metáfora pertence à CENA (o `diretor-de-arte`
a inventa — é o ofício dele e está certo lá); a narração entrega o fato. Os dois lugares foram
emendados; o few-shot (EXEMPLARES.md) foi auditado e está limpo — as frases-calibre são sóbrias, o
vício vinha da instrução, não dos exemplos.

**Como verificar:** lente do `critico-de-roteiro` (figura decorativa/empilhada/na promessa) + o
antes/depois dos 3 roteiros de 31/jul em `arquivo-morto/2026-07-31-roteiros-v1/`.

### ROT-56 · NA FAIXA, A ESCALA SE DIZ UMA VEZ — "entre 20 e 50 mil", nunca "entre 20 mil e 50 mil"
**Feedback do Mateus (31/jul/2026), sobre o roteiro da Ucrânia:** *"'20 mil e 50 mil' isso é outro
exemplo que NÃO deve ser feito, pois é um apresentador que estará FALANDO, e vai soar obviamente
MUITO estranho ele não falar simplesmente '20 e 50 mil'."*

É escrita de página vazando para a boca: no papel, repetir a escala parece precisão; na fala, ninguém
repete. A regra: **numa faixa (entre/de/a/até) em que os dois números compartilham a MESMA escala
(mil, milhões, bilhões) ou a MESMA unidade (por cento, dólares, quilômetros…), ela é dita UMA vez, no
fim.** ✅ "entre 20 e 50 mil dólares" · "de 15 a 22 milhões" · "de 8 a 12 por cento".
⚠️ **Exceção que a regra respeita sozinha:** escalas DIFERENTES mantêm as duas — "de 800 mil a 2
milhões" não se encurta, porque "800 a 2 milhões" mentiria.

**Medido antes do conserto:** 1 ocorrência nos 4 roteiros ativos (a que o Mateus viu) e ZERO no
acervo `knowledge/roteiros/` — calibração limpa, então o gate **REPROVA** em vez de avisar (alarme
falso zero na amostra). Família da ROT-25 (norma de locução: o texto é para UMA leitura, sem decisão
na cabine).

**Como verificar:** `validar-roteiro.mjs` acusa o padrão `N <escala> e/a/até N <mesma escala>`; o
conserto é mecânico (apagar a primeira escala).

### ROT-57 · CONSEQUÊNCIA SE MOSTRA, NÃO SE ANUNCIA — "e é o que muda tudo" é etiqueta no lugar do fato
**Feedback do Mateus (31/jul/2026), sobre o Irã:** ❌ *"O que veio depois, ninguém ainda tinha contado
— e é o que muda tudo."* → *"isso é um vício de humanização também: em vez de afirmar que isso muda
tudo, EXPLICA já logo COMO que muda tudo, ao invés de ser uma afirmação VAGA."*

É a irmã da [ROT-45] (anúncio enfático de importância), no eixo da consequência: o narrador cola uma
etiqueta de impacto ("muda tudo", "faz toda a diferença", "é a chave de tudo", "muda o jogo") em vez
de entregar o impacto. **O conserto é sempre o mesmo: a etiqueta sai e a consequência concreta entra
no lugar** — ✅ *"O que veio depois, ninguém ainda tinha contado: a trégua nasceu com prazo, e a
passagem de navios mais importante do mundo ganhou uma cobrança com data marcada."* O espectador não
precisa ser avisado de que algo importa; precisa VER o que acontece.

**Gate:** os padrões entraram na lista da ROT-45 no `validar-roteiro.mjs` (reprovação).

### ROT-58 · PROMESSA DE LITERAL EXIGE A CITAÇÃO DEMARCADA — "nas palavras dele" sem aspas não parece confiável
**Feedback do Mateus (31/jul/2026):** *"o roteiro diz 'Vou citar...' mas as tais 'citações' parecem
parte do nosso roteiro, não tá em itálico, destacado por aspas... Fica vago e subjetivo, não parece
confiável."*

**A REGRA:** todo anúncio de transcrição literal — *"nas palavras dele"*, *"palavras exatas"*, *"vou
ler o que diz"*, *"com todas as letras"*, *"numa frase:"* — obriga o que segue a estar **entre
aspas**, com a atribuição colada. Sem as palavras exatas na mão, não se anuncia literal: reescreve-se
como paráfrase honesta (*"Ela diz que a passagem é de graça"*, sem o anúncio).

**Por que aspas importam num texto FALADO:** (1) o Bôco muda a entonação — a citação soa como
citação; (2) o espectador distingue documento de narração — é a diferença entre "parece opinião
nossa" e "está no papel"; (3) **a edição sabe o que grifar** — o trecho aspado é exatamente o que o
`pesquisa-documentos` destaca no clipping (modo documento), e agora ele chega pronto pelo
`pauta-fundamento.json` (campo `citacoes`, PESQ-28). A mesma informação serve três estações.

**⚠️ O idiomático NÃO é promessa:** *"Não acusa o Marrocos com todas as letras"* significa
"abertamente" — negação desarma o gatilho (pego como falso positivo na 1ª execução do gate; a
janela-pré de negação resolve). **Gate:** `validar-roteiro.mjs` reprova promessa de literal sem aspas
num raio de ~220 caracteres — calibrado nos 4 roteiros ativos: pegou 3 casos reais que a varredura
manual tinha perdido, e o refinamento matou o falso positivo idiomático.

### ROT-59 · FRAGMENTO SEM ESPINHA — a frase que "parece ir a um lugar e do nada acaba sem sentido"
**Feedback do Mateus (31/jul/2026), sobre a intro do Ceuta:** ❌ *"— mais de dois terços da população
da cidade, numa tarde."* → *"usou um tipo de frase 'quebrada' que parece ir a um lugar e do nada
acaba sem sentido. Isso vai ser LIDO por um apresentador... A gente tem que calibrar MUITO bem quem
escreve nossos roteiros."*

**O DEFEITO:** sintagma nominal longo pendurado em travessão/vírgula fechando a frase SEM verbo. No
papel, o aposto elíptico passa; LIDO EM VOZ ALTA, o arco melódico fica aberto e o apresentador morre
no ar. A varredura nos 4 roteiros ativos achou 3 (o apontado + *"No dia 11 de julho, cerca de 140
alvos — o terceiro bombardeio na mesma semana."*, frase INTEIRA sem verbo, + o aposto de referência
solta da Ucrânia). Os demais 25 travessões estavam legítimos.

**A RÉGUA que separa o aposto bom do quebrado:** pós-travessão SEM verbo só quando é **curto e
especifica/mede** o que veio antes — a régua colada da BBC (*"— o preço mais alto em 4 anos"*) e o
especificador (*"— quem manda na água"*) fecham o arco porque são a resposta que o ouvido espera.
Sintagma longo com adjuntos empilhados ganha ESPINHA (verbo) ou vira frase própria: ✅ *"É mais de
dois terços da população da cidade chegando numa tarde."*

**⚠️ A CAUSA-RAIZ, medida e assumida: COMPRESSÃO — e as duas frases reprovadas hoje (esta e a
"maçaneta" da ROT-55) são do EDITOR-CHEFE, não do roteirista.** Nasceram de encolher a intro para
caber no teto de 65 palavras cortando verbo e gerúndio (a formulação original tinha espinha: *"Isso
é mais de dois terços da população, chegando numa tarde."*). A cláusula que disso sai: **para caber
no teto, corta-se CONTEÚDO, nunca a gramática.** "Calibrar quem escreve" inclui calibrar quem
comprime.

**Gate:** sem check automático — detectar oração sem verbo por regex daria alarme falso em elipse
legítima, e alarme falso mata gate. É lente do `critico-de-roteiro` (leitura em voz alta) com a
régua acima; o catálogo de sotaques ganhou o **4b**.

**ROT-60.** O DOSSIÊ É ESPELHO, NÃO INTENÇÃO (31/jul/2026, bancada — 3 roteiros, mesma doença). O
`roteiro-editor` descrevia locuções que não existiam (ressalva "de um lado ou de outro" citada e
nunca escrita; intro auditada em outra versão) e o placar auto-relatado dizia `0 ❌` sobre 5 ❌
reais medidos pelo verificador. Regras: (a) a narração é IDÊNTICA boco×editor e o gate ROT-42e
agora RODA (diff por parágrafo no `validar-roteiro.mjs` — a regra manual de "diff obrigatório"
nunca rodou nenhuma vez); (b) ressalva de auditoria cobre a ORAÇÃO certa da frase — hedgear a
metade errada ("a escolha não foi anunciada" quando o ato era público e a orquestração é que era
"segundo fontes") é pior que não hedgear; (c) toda citação entre aspas entra na auditoria com URL
+ trecho original COLADO — aspas sem lastro é ❌, não ⚠️ (uma citação foi FABRICADA para pagar o
rótulo "resumiu numa frase"); (d) placar de auditoria não é autodeclaração: quem conta é o
verificador.

**Gate:** ROT-42e no `validar-roteiro.mjs` (diff boco×editor, FALHA) · lente fixa do
`verificador-de-fatos` (aspas → letra a letra na fonte; placar recontado).

**ROT-61.** FATO VOLÁTIL TEM DUAS DIREÇÕES — CRESCE OU PARA (31/jul/2026, bancada). O roteiro do
Irã narrava bombardeio "noite após noite" seis dias depois de a campanha ser SUSPENSA (13 noites,
pausa em 25/jul): o `[⚠️ ATUALIZAR]` do dossiê mandava "subir o piso porque o número cresce" — o
aviso de volatilidade que só prevê a continuação autoriza gravar um fato morto de consciência
tranquila. No da Ucrânia, 6 das 7 âncoras econômicas eram do 1º quadrimestre narradas no presente
sob carimbo de 31/jul, e em duas o presente dizia o CONTRÁRIO (barril a 60 "a caminho de 90"; juro
"mantido alto" cortado 3×). Regras: (a) todo `[⚠️ ATUALIZAR]` de contagem/estado em curso NOMEIA
as duas direções — o que faz crescer E o evento que zera/reverte; (b) véspera de gravação tem
CHECAGEM DE ESTADO feita na GRANDEZA (série, boletim do órgão), não na última notícia; (c) fonte
de MECANISMO sobre grandeza volátil é a mais recente disponível — a data da fonte é parte da tese;
(d) aproximação do dossiê ("~6%") nunca vira piso na boca ("passa dos 6%"); (e) tese formulada
como AUSÊNCIA ("não existe mais X") se verifica PRIMEIRO — é a afirmação mais fácil de refutar
com uma manchete, e a mais cara quando é a espinha do vídeo.

**Gate:** sem check determinístico completo (estado do mundo exige rede) — é lente fixa do
`verificador-de-fatos` (padrão "relógio parado": data de cada âncora × data de fechamento) + o
`pesquisador-de-pauta` entrega a linha "estado em <data>" por grandeza volátil (OFICIO §7).

**ROT-62.** ATRIBUIÇÃO LAVADA — O NÚMERO CERTO COM O DONO ERRADO (31/jul/2026, bancada; o padrão
nº 1 dos três factuais, 11 casos). O dado sobrevive, a fonte é promovida a uma classe mais
respeitável ("um pesquisador do CFR" para projeção de autoridades iranianas via WSJ; "segundo a
OMI" para número da Kpler; "alguns analistas europeus" para o condicional editorial de UM veículo;
"os militares apelidaram" para rótulo de imprensa) — e passa por toda auditoria porque o número
está certo, a fonte existe e o link abre; só a LIGAÇÃO é falsa. É o que um espectador que clica
descobre em 30 segundos. Regras: (a) quem CITA não é quem AFIRMA — número dentro de artigo se
segue até o produtor; (b) número humano com órgão + data + RECORTE do que mede (e recorte parcial
se declara: "14 mortos" eram só os não-iranianos); (c) alegação de parte entra com dono, nunca
como fato nu; (d) coletivo anônimo não lava superlativo — nomeia-se o veículo e narra-se a
condição; (e) voz de campo se cita com o DESFECHO dela; (f) "mas a conta real é maior" só depois
da pergunta "as duas medem a MESMA grandeza?"; (g) superlativo de série se confere NA SÉRIE;
título ancora na JANELA da contagem, não no maior número disponível.

**Gate:** lente fixa do `verificador-de-fatos` (a LISTA DE NOMES é o entregável que a mata: todo
anônimo vira pessoa/instituição nomeável com credencial e URL) + `PESQUISA-HONESTIDADE.md` §"A
LIÇÃO DOS 3 FACTUAIS" (13 cláusulas) na rubrica do roteirista e do pesquisador.

### ROT-63 · A IMPRESSÃO DIGITAL DA MÁQUINA É A TAXA, NÃO A OCORRÊNCIA (Mateus, 01/ago/2026)

O Mateus leu um roteiro que a bancada de QUATRO críticos tinha aprovado por unanimidade e achou nove
defeitos na primeira leitura. O diagnóstico dele é a lei: *"tem marca de IA — não no vocabulário, que
está bom e coloquial, mas na **arquitetura das frases**, que é onde os modelos deixam a impressão
digital mais funda"*.

**Por que nenhum crítico pegou:** cada ocorrência isolada é DEFENSÁVEL. A antítese "não é X, é Y" é
boa figura. O parágrafo que fecha em frase curta é boa cadência. O travessão é bom aparte. O
julgador que lê trecho a trecho aprova cada uma com razão — e o leitor humano, que atravessa o texto
inteiro, sente o metrônomo. **O defeito não mora na ocorrência: mora na taxa.** Taxa é o que um
julgador de trechos não conta e um gate determinístico conta de graça.

**Medido no roteiro reprovado (2.776 palavras):** antítese 10 · travessão 24 · frase começando com
"E" 17 · número miúdo em algarismo 8 · aposto no molde ", um/uma X que…" 9. Nas palavras dele: *"É
uma figura excelente — quando aparece três, quatro vezes num roteiro de vinte minutos. Vinte vezes
vira maneirismo, e a partir da quinta o ouvinte começa a ANTECIPAR a virada antes de você entregar.
O efeito de revelação, que é justamente o que você quer, some."*

**A cura não é banir, é racionar** — e o conserto costuma melhorar o texto: *"Não era gente com
barco"* vira *"Era gente a pé, com câmara de pneu debaixo do braço"* — ganha imagem, perde fórmula.
Guarde as 4–5 mais fortes (abertura, tese, fecho) e passe o resto para a afirmativa direta.

**E a cadência de 100% é o mesmo defeito no compasso do parágrafo:** *"o problema é a taxa de acerto
de 100%. Nenhuma seção termina em prosa comum, nenhuma termina sem prometer a próxima. Deixe pelo
menos duas seções acabarem em silêncio, sem punchline e sem promessa — o contraste faz as outras
baterem mais forte."*

**Gate:** `validar-roteiro.mjs` §6c-octies, sete checks por TAXA (por mil palavras, não absolutos):
antítese ≤5 no roteiro · travessão ≤5/mil · "E" inicial ≤3/mil · zero número miúdo em algarismo ·
aspas de gente ≥3 · fecho curto ≤60% dos parágrafos · aposto padronizado ≤3.

### ROT-64 · NÃO TEM NINGUÉM NO ROTEIRO — a ausência de mundo concreto é o que mais soa a máquina (Mateus, 01/ago/2026)

⚠️ **A COTA ("todo roteiro… e ela FALA", gate com aspas ≥3) foi SUPERADA pela [ROT-107]** (Mateus, 14/set/2026: *"sobre ter gente, TAMBÉM é relativo, não necessariamente"*). O diagnóstico abaixo continua CERTO e vale inteiro para roteiro de acontecimento; o que mudou é o status: **régua, não cota**. O gate hoje AVISA quando há zero falas, e a pergunta é se a APURAÇÃO tinha gente que ficou de fora da narração.

*"Vinte minutos, dezenas de mortos, e o ouvinte não chega perto de uma única pessoa. Omar Naji é
descrito mas nunca fala. Torreblanca rende cinco palavras entre aspas. Nenhum migrante, nenhum
morador de Ceuta, nenhuma cena. O texto todo é narrado de cima, na voz do analista. **Isso é o que
mais faz um roteiro soar IA — não a sintaxe, a ausência de mundo concreto.**"*

Medido: DUAS falas entre aspas em 2.776 palavras. As fontes existiam, eram nomeadas e não abriam a
boca — o roteiro fala SOBRE gente, nunca COM gente.

**A regra:** todo roteiro de acontecimento tem pelo menos **uma pessoa específica, num lugar e numa
hora**, e ela FALA. A prescrição do Mateus é a mais barata da lista: *"Se der pra abrir com uma
pessoa específica na areia de Fnideq às seis da manhã e voltar a ela no fim, você resolve metade dos
problemas dessa lista de uma vez."* Fonte que só é descrita é fonte pela metade: quem tem nome,
credencial e URL tem também uma frase.

**Corolário — o coração emocional não se subordina ao processo.** No mesmo roteiro, o Tarajal (400
pessoas na água, bala de borracha, 14 afogados, 23 devolvidos na hora) recebeu DUAS FRASES dentro de
um bloco sobre jurisprudência: *"está subordinado à decisão judicial quando deveria ser o contrário:
a tragédia primeiro, o tribunal como consequência."* Quando o fato humano e o fato institucional se
encontram, o humano abre e o institucional explica.

**Gate:** `validar-roteiro.mjs` (aspas de gente ≥3) + lente fixa do `critico-de-clareza` (existe uma
pessoa concreta? ela fala? o beat emocional está antes ou depois do processual?).

### ROT-65 · CIFRA É PARA A TELA, IMAGEM É PARA O OUVIDO (Mateus, 01/ago/2026)

⚠️ **Esta lei SEMPRE recusou o número** (*"Gate: sem check duro — densidade aceitável varia com o tema"*), e a doutrina executava o teto da [ROT-32] mesmo assim. A [ROT-107] fecha a divergência: **não há cota de cifras por parágrafo nem por vídeo**; o que se julga é se cada número chega dimensionado e se a cifra central não se perde entre as periféricas.

*"Levantei mais de vinte cifras. O ouvinte retém quatro ou cinco."* O roteiro medido tinha **77
ocorrências numéricas**. A conversão em relação, que o roteiro já fazia bem em dois pontos ("mais de
4 vezes", "quase 30 vezes"), é a saída — e o resto vira imagem ou sai. Cifra que não vira imagem nem
comparação pertence à TELA (overlay/tarja), não à boca do apresentador.

**E o número tem de sustentar o argumento que ele acompanha.** No mesmo roteiro, o crescimento *"de
mais de 160% nas entradas POR TERRA"* foi usado para mostrar que a pressão precedia a decisão do
Supremo — só que a decisão trata de quem chega **pela água**: *"o dado sustenta o argumento geral,
só que a especificação empurra na direção contrária no exato momento em que você quer firmeza."* Ou
o recorte casa com a tese, ou o desencaixe se explica em meia frase.

**Corolário anti-vaidade:** a honestidade epistêmica ("não há prova") é virtude — DITA UMA VEZ. Duas
vezes com as mesmas palavras *"já soa como o texto se elogiando pelo rigor"*.

**Gate:** sem check duro (densidade aceitável varia com o tema) — é lente do `critico-de-clareza`
(quantas cifras o ouvinte retém? quais viram imagem? o recorte do dado casa com a tese que ele
serve?) e do `critico-de-roteiro` (auto-elogio de rigor repetido).

### ROT-66 · DOIS ROTEIROS ISOLAM A ASSINATURA — o que se repete nos dois é do GERADOR, não do texto (Mateus, 01/ago/2026)

A frase que abriu a segunda revisão dele é método, não elogio: *"Agora dá pra separar o que é tique
do roteiro do que é assinatura do autor — porque **o que se repete nos dois é o segundo**."*

Ler um roteiro isolado não distingue as duas coisas. Uma antítese repetida pode ser este texto pedindo
essa figura; um fecho curto seguido pode ser este assunto pedindo esse ritmo. **Só a comparação entre
dois roteiros do mesmo gerador separa** — e o que sobrevive à troca de tema é a impressão digital.

**A consequência operacional:** calibrar cacoete com UM exemplar é chute; o corpus mínimo é DOIS de
temas distintos. E é por isso que os tetos da ROT-63 se firmam medindo os dois, nunca ajustando ao
que o roteiro da vez tem. Corolário caro: **quando um conserto derruba um cacoete e não derruba o
outro, o que ficou é o mais fundo** — na 2ª revisão o travessão caiu de 25 para 9 e a antítese ficou
em 12, o que a classifica como assinatura estrutural, não como tique de superfície.

**E a assinatura muda de lugar quando é perseguida.** A antítese não só resistiu: migrou para os
FECHAMENTOS de parágrafo, a posição de maior peso. *"Quando a figura ocupa o último lugar de quase
todo parágrafo, ela deixa de ser ênfase e vira MÉTRICA. O ouvinte pega o compasso e passa a ouvir a
forma, não o conteúdo."* Por isso o gate mede a POSIÇÃO além da contagem: cacoete encurralado não
morre, se muda de casa.

**Gate:** `validar-roteiro.mjs` §6c-octies — a régua da antítese passou a ser a NEGAÇÃO COPULATIVA
(o esqueleto real da figura), depois de a régua anterior contar 2 onde havia 12 por exigir a
afirmação contrastiva colada. *Gate que mede a forma bonita da regra, e não a forma real dela, dá
PASS e deixa o defeito passar inteiro.*

### ROT-67 · PERSONAGEM NÃO É TEXTURA — quem entra tem de voltar (Mateus, 01/ago/2026)

Depois de o roteiro ganhar gente (ROT-64), o defeito seguinte apareceu: *"cada personagem tem
exatamente uma aparição de uma frase"*. Volodymyr caça drone de ouvido com metralhadora — *"imagem
ótima, a melhor do roteiro"* — e nunca mais aparece. Irina diz uma frase e evapora.

E o caso grave: **uma menina de quinze anos debaixo dos escombros na abertura, nunca retomada.**
*"Isso é um laço narrativo aberto e abandonado. Ou você fecha — o que aconteceu com ela? — ou não
abre. Do jeito que está, usa uma criança soterrada como TEXTURA."*

**A regra:** personagem introduzido volta pelo menos uma vez, e volta ONDE ELE É O ARGUMENTO. O
conserto mais barato daquele roteiro era retomar Volodymyr na seção do escudo: *"ele é o homem que
caça drone de ouvido com metralhadora porque o interceptador que faltou está defendendo uma base no
Golfo. Ele é o argumento, e está sendo usado como ilustração."* Sofrimento humano sem desfecho não é
cor local — é uso indevido de gente real.

### ROT-68 · A PLACA ANTES DO FATO REDUZ O FATO (Mateus, 01/ago/2026)

*"O narrador avisa o tempo todo o que você deve sentir antes de te mostrar a coisa"* — "e aí vem a
inversão que ninguém teria previsto", "o detalhe que mais diz sobre ela é…", "a escala conta o
resto", "a aritmética por trás disso decide guerras longas". **Corte a placa e deixe o fato bater
sozinho.** O caso medido: 228 especialistas ucranianos ensinando os vizinhos do Irã é surpreendente
por conta própria, e anunciar a surpresa antes a reduz. Parente próxima da ROT-57 (consequência se
mostra, não se anuncia), no plano da EMOÇÃO em vez do argumento.

**E três defeitos de arquitetura que apareceram junto, todos de posição, não de conteúdo:**
1. **A intro promete o que o corpo desmente.** A abertura vendia "isso encheu o caixa da Rússia" e a
   seção do dinheiro conclui, com honestidade, que o socorro "não foi a salvação e durou pouco".
   *"A seção está certa — a intro é que está vendendo mais do que entrega. Ajuste a promessa, não a
   análise."*
2. **O gancho não pode ser o elemento que o próprio roteiro descarta.** O cold open abria no ataque
   ao Cáspio e três parágrafos depois vinha "o ataque não muda o rumo das guerras" — honesto e
   anticlímax. A saída não é trocar o gancho: é reposicionar o que ele significa (*"o Cáspio não
   importa como fato militar, importa como sintoma — o mapa vazando"*) e prometer isso desde a
   primeira frase.
3. **O melhor achado não pode morar na seção mais inerte.** A análise que destruía a ideia de "eixo
   Moscou-Teerã" (a Rússia tinha veto na mão para blindar o Irã e se absteve; tem 25 bi em contratos
   nucleares que uma guerra longa ameaça) estava enterrada num apêndice sobre a ONU. Achado forte
   sobe para onde o ouvinte está montando a ideia errada — e o apêndice some.

**Corolário (03/ago) — "é o padrão do formato" é o que mantém a promessa exagerada de pé.** A mesma
intro voltou a ser pega, agora na outra metade: *"as guerras deles viraram uma coisa só"* — e o corpo
prova o contrário, porque o parágrafo do veto mostra que Moscou e Teerã não são aliados de ferro e a
seção do petróleo conclui que o socorro foi pequeno e passageiro. O Mateus nomeou a defesa que costuma
salvar esse tipo de frase: *"É retórica de gancho, o padrão do formato, e todo canal do gênero faz."*
**Num roteiro construído sobre rigor, a frase que afirma além do lastro não fica protegida por ser
convenção do gênero** — ela fica MAIS visível, porque é a única.

E quando o corpo tem uma estrutura contável, a promessa precisa é também o gancho melhor: *"as duas
guerras se cruzaram em três pontos"* planta a enumeração que o vídeo entrega (arma, dinheiro, escudo),
cumpre a ROT-77 desde a primeira frase e ainda cria a curiosidade de saber QUAIS três. Promessa
numerada é gancho honesto; síntese inflada é dívida que o corpo paga.

**Corolário do número perigoso:** duas grandezas parecidas e incomparáveis, próximas no texto,
confundem quem ouve — "650 interceptadores por ano" e "2.000 drones por dia" na mesma seção fazem o
ouvinte desatento concluir que o problema foi resolvido. Uma oração de contraste resolve; sem ela, o
roteiro está certo e o espectador sai errado.

### ROT-69 · O CACOETE ENCURRALADO TROCA DE ROUPA — a antítese elíptica (Mateus, 03/ago/2026)

A ROT-66 já dizia que o cacoete perseguido **muda de casa** (migra para o fechamento de parágrafo). O
passe seguinte mostrou o degrau seguinte: ele **muda de forma**. Cercada por um gate que conta negação
copulativa, a antítese largou o "não" e virou elipse:

> "A guerra que anda **é outra**" · "O Irã conta **outra** versão" · "A conta **é outra**" · "Balístico
> **é outra** conversa" · "**é outro** risco" · "Hoje o quadro **é outro**"

Nas palavras dele: *"O 'não é X, é Y' virou 'é outro'. É a mesma operação mental — negar o esperado,
apontar o inesperado — com a negação implícita. Trocar a superfície não resolve, porque o vício não
está na palavra 'não': está no **reflexo de construir todo insight como reviravolta**. Enquanto o
reflexo estiver lá, ele reaparece em qualquer forma."*

**O TESTE DA AFIRMAÇÃO SECA** (é dele, e é a régua que sobrevive a qualquer disfarce): pegue cinco
frases de contraste e reescreva cada uma como afirmação seca, sem contraste nenhum. *"As que ficarem
fracas mereciam o contraste. As que ficarem iguais ou melhores estavam usando a figura como muleta."*
Medido na Ucrânia: "A guerra que anda é outra, e é aérea" → **"A guerra que anda está no ar"** (mais
curta, com imagem, sem fórmula). "O Irã conta outra versão: um navio comercial…" → **"O Irã diz que era
um navio comercial…"**.

**Gate:** `validar-roteiro.mjs` §6c-octies (a) conta a OPERAÇÃO, não a palavra — negação copulativa
**mais** a família elíptica (`é/era/virou outro(a)`, `a conta/o quadro/a lógica é outra`). Medido: a
régua velha via 2 antíteses onde havia 5, e dava PASS com o cacoete inteiro de pé.

### ROT-70 · PASSADA DE LIMA NÃO É REVISÃO — frase é barato, ordem é caro (Mateus, 03/ago/2026)

*"Você fez uma passada de lima onde o roteiro precisava de reordenação. Tirar seis frases não move um
vídeo de vinte minutos; mudar a ordem de duas seções e cortar vinte números, sim."*

Quando um laudo traz achados de FRASE e achados de ARQUITETURA (ordem das seções, promessa da intro
contra o que o corpo entrega, achado forte enterrado na seção fraca, laço de personagem aberto), o
reflexo é fazer os de frase — são rápidos, cabem numa substituição e produzem um diff que parece
trabalho. **Os de arquitetura são os que movem o vídeo, e são os que ficam para trás.** A revisão que
só mexe em frases devolve um roteiro com a mesma forma e o relatório cheio.

**Corolário — a caça ao cacoete mata frase boa.** No mesmo passe, perseguindo antítese, o roteirista
cortou **", não no orçamento"** e **"É o teto que desaba ou não desaba em cima de alguém"** — as duas
elogiadas por nome na leitura anterior. *"Perdeu conteúdo pra ganhar variação."* Antes de reescrever
uma construção só porque ela repete um molde, pergunte o que a frase **diz** que a substituta não diz:
"não foi incompetência" defendia a defesa ucraniana de uma acusação que o espectador faria sozinho; "a
conta é outra" não defende nada.

**Corolário — o conserto se lê no PARÁGRAFO, não na frase.** Trocar uma frase isolada criou "chão,
casa, teto e *alguém* duas vezes em duas frases" e duas construções idênticas a dois pontos de
distância. A unidade de revisão é o parágrafo inteiro, relido em voz alta depois da troca.

**Como se pratica:** ao receber laudo, separe os achados em POSIÇÃO e FRASE, e execute os de posição
primeiro; no report, diga o que mudou de **ordem** — se nada mudou, a revisão não aconteceu.

### ROT-71 · CONSERTO DE ESTILO NÃO PODE MUDAR A POLARIDADE (Mateus, 03/ago/2026)

O erro mais grave do passe, e o único que ele mandou reverter no mesmo dia:

> **Antes:** "…a não ser que a liderança russa enxergue uma ameaça existencial ao próprio regime.
> **Não é o quadro de hoje.**"
> **Depois:** "**Hoje o quadro é outro.**"

*"Isso inverteu o sentido. 'Não é o quadro de hoje' dizia: a condição existencial não está presente,
logo o risco segue muito improvável. 'Hoje o quadro é outro' é ambíguo, e a leitura idiomática mais
natural em português falado é justamente **'as coisas mudaram'** — ou seja, o oposto. Numa frase sobre
uso de arma nuclear, atribuída à inteligência americana, isso não é questão de estilo."*

**A regra:** reescrita de forma preserva a PROPOSIÇÃO. Onde a proposição é uma **negação** (o risco não
está presente, a fonte não confirma, o dado não sustenta), a elipse é proibida — escreve-se por
extenso, mesmo que fique menos elegante: `Nada indica que a Rússia esteja nesse ponto.` Vale em dobro
para frase com atribuição a fonte: o que se atribui a alguém não muda de sinal para caber num ritmo.

**Corolário — a cicatriz do corte.** Cortar palavras deixa pontuação órfã: *"custando pelas estimativas
mais citadas, entre 20 e 50 mil dólares"* perdeu a vírgula de abertura e ficou com a de fechamento
sozinha. Não é erro de escrita — é **resíduo de revisão**, e por isso aparece justamente na versão
"melhorada". Depois de qualquer corte, releia o parágrafo inteiro procurando aposto quebrado.

**Gate:** `validar-roteiro.mjs` §6c-octies (k) acusa vírgula órfã. A polaridade não tem gate
determinístico possível — é releitura par a par (antes → depois) de toda frase factual tocada, e é
item obrigatório do report do roteirista.

### ROT-72 · CORTAR A PLACA SEM LEVAR A PREMISSA JUNTO (Mateus, 03/ago/2026)

A ROT-68 mandou cortar a sinalização ("e aí vem a inversão que ninguém teria previsto"). O passe que
obedeceu produziu um defeito novo, **duas vezes no mesmo roteiro**:

| a placa cortada | o que foi junto | o estrago |
|---|---|---|
| "Pela lógica, você esperaria Moscou sufocando." | a **expectativa** que o parágrafo ia contrariar | "É aqui que a guerra do Irã pesa" — pesa a favor ou contra a Rússia? O ouvinte só descobre um parágrafo depois |
| "Não foi incompetência." | a **acusação** que o texto estava respondendo | sobrou "a conta é outra", que não defende ninguém de nada |

*"O padrão a evitar: quando cortar sinalização, tire o anúncio e preserve a premissa."*

**A distinção operacional.** Antes de deletar uma frase de transição, pergunte o que ela FAZ:

- **ANUNCIA** o que o espectador deve sentir sobre o que vem ("e aí vem a inversão", "o detalhe que
  mais diz sobre ela é") → **corte**, o fato bate sozinho (ROT-68).
- **ESTABELECE** a expectativa, a acusação ou o contraste contra o qual o fato seguinte trabalha
  ("pela lógica, você esperaria Moscou sufocando") → **reescreva sem o anúncio, não delete**. Sem ela
  o fato seguinte não tem contra o quê bater, e a revelação vira informação solta.

O conserto do caso medido foi uma frase que faz as duas coisas certas: `Só que Moscou não sufocou — e
a razão estava no Golfo.` Estabelece a expectativa (sufocar) e a contraria, sem anunciar surpresa.

**Corolário — número cortado por densidade é o mesmo erro.** No mesmo passe, "62 por cento" e "59
bilhões" saíram por densidade (ROT-65) e levaram junto o que sustentavam: *"'maior' pode ser 3 por
cento — o espanto é volume caiu um terço e receita subiu 62 por cento"*; *"os 59 bilhões existiam pra
colidir com 'menos de 2 por dia'; 'bilionário' não colide com nada"*. Antes de cortar uma cifra,
pergunte com o que ela COLIDE. Se colide com outra cifra da mesma seção, ela é do par — e par não se
corta pela metade.

### ROT-73 · A REVISÃO TEM FIM — retorno decrescente é razão pra PARAR (Mateus, 03/ago/2026)

*"Duas das minhas observações anteriores levaram você a cortar coisas que carregavam sentido. Isso é
sinal de que o roteiro entrou na faixa de retorno decrescente: daqui pra frente, cada passada de lima
tem chance real de tirar mais do que acrescenta."*

Um roteiro não melhora indefinidamente com passes. Depois de duas ou três rodadas, o texto atinge um
platô em que o repertório de "consertos" disponíveis passa a ser majoritariamente **troca de forma sem
ganho** — e cada troca carrega o risco da ROT-72. Continuar limando não é zelo: é destruição lenta com
aparência de trabalho.

**Como o laudo se escreve a partir daí** (o modelo é o dele): separe os achados em **os que valem** e
**os que são acabamento**, diga o número (*"das seis coisas acima, três valem a pena de verdade"*), e
feche com a lista do que **NÃO deve ser tocado** — *"o par Arkansas, o 'as duas coisas podem ser
verdade', o retorno do Volodymyr, o parágrafo do veto inteiro, o 'andar de cima: a bomba', o barulho
da noite, e o fecho"*. A lista de intocáveis é parte do laudo, não cortesia: sem ela, o executor
otimiza tudo que enxerga e o bom vai junto.

**O CRITÉRIO DE PARADA (03/ago, depois de dois roteiros e nove laudos):** *"O ponto de parada não é
'acabaram os problemas', porque nunca acabam. É quando os problemas que restam são menores que o risco
de mexer."* Medido nos dois: as três primeiras passadas melhoraram muito (estrutura, ordem, personagens,
propagação de fatos); **da quarta em diante, cada correção passou a gerar um resíduo novo** — uma frase
que perdeu a premissa (ROT-79), um número que ficou desalinhado (ROT-78), uma citação que virou coro.
O sinal de que a curva virou não é o laudo ficar curto: é o laudo passar a listar coisas que a passada
anterior criou.

**E a ORDEM que fez a diferença, nos dois casos:** o que moveu os vídeos foi sempre **estrutural** —
ordem das seções, promessa da intro contra o que o corpo entrega, personagem que volta, fato novo
propagado pelo texto inteiro. *"Os tiques de superfície — antítese, travessão, data repetida — caíram
quase sozinhos depois que a estrutura assentou."* Atacar a superfície primeiro não só rende menos:
**gasta as rodadas boas** e obriga a mexer de novo em tudo quando a estrutura finalmente muda.

**Como o executor obedece:** faz a lista priorizada, **para**, e devolve dizendo o que deixou de fora
**por ordem** — não por esquecimento. Fazer o acabamento "de brinde" depois de ouvir "eu pararia
depois dessas" é desobedecer com boa intenção, e é exatamente onde a frase boa morre.

### ROT-74 · A COSTURA ENTRE CAPÍTULOS ESCAPA DA AUDITORIA — e é onde a causalidade entra (Mateus, 03/ago/2026)

O roteiro da Ucrânia tinha **53 afirmações auditadas**, cada uma com fonte, tier e placar batendo. O
gate deu PASS quatro vezes. E o elo mais fraco do texto era justamente **a frase que sustentava a
estrutura inteira**:

> "Esse caixa compra uma coisa específica: mísseis balísticos."

*"Essa frase é a dobradiça entre o capítulo do petróleo e o capítulo do escudo. Ela é a única coisa
que impede a seção do petróleo de virar um desvio. E ela não se sustenta com o que o próprio roteiro
acabou de estabelecer."* — o texto tinha acabado de dizer, com honestidade, que o ganho foi de 13,5
bilhões de euros em quatro meses, que o Brent devolveu a alta e que o Bruegel chama aquilo de pausa
passageira. **Dinheiro de orçamento não tem etiqueta**, e um extra de quatro meses não compra linha de
produção de balístico, que leva anos. *"O vídeo passou dois capítulos construindo rigor e aqui faz
exatamente o movimento que evitou em todo o resto: transforma correlação em causalidade sem marcar."*

**Por que nenhum gate pega:** a auditoria confere AFIRMAÇÕES — a frase de transição é uma **síntese**,
não uma afirmação com fonte, e por isso nunca entra na lista. Pior: ela tem o incentivo invertido, já
que é a única coisa que impede um capítulo inteiro de virar desvio. Quanto mais frágil a ligação real,
mais forte o roteirista escreve a ponte.

**A regra:** a costura se faz pelo **elo forte**, não pelo elo narrativamente conveniente. A tese não
era "petróleo compra míssil" — era "as duas guerras se alimentam pelo mesmo sistema", e o elo que
aguenta o peso é o **interceptador** (o Golfo consome a arma que faltaria em Kiev), não o rublo.
Conserto medido: *"E não é só o caixa. O que a Rússia joga contra Kiev nas piores noites é o míssil
balístico… e essa arma está acabando nos dois lados do mundo ao mesmo tempo."* Mantém a conexão sem
comprar a causalidade.

**Como se pratica:** ao fechar o roteiro, **liste as frases-dobradiça** (a última de cada seção e a
primeira da seguinte) e passe cada uma pelo teste da auditoria como se fosse afirmação: *o que eu
acabei de estabelecer sustenta isto?* É a lista mais curta do roteiro e a de maior alavancagem.

**Corolário — o superlativo tem de casar com o número que o acompanha.** No mesmo texto: *"o mês com
mais civis mortos e feridos… pelo menos 293 mortos"* — o recorde era de uma grandeza e o número
entregue era de outra. *"Quem presta atenção sente a costura."* A fonte (OHCHR) falava de mortos; o
roteiro dizia mais do que ela. Mesmo defeito da dobradiça em escala de frase: a forma afirmando além
do lastro.

### ROT-75 · O RÓTULO CARREGA UM AGENTE — e o genitivo troca a vítima pelo autor (Mateus, 03/ago/2026)

*"'A guerra do Irã' aparece umas dez vezes como rótulo. Mas o Irã é o alvo, não quem começou — o
próprio roteiro diz que Israel matou Khamenei e que EUA e Israel abriram a guerra aérea. Em áudio, 'a
guerra do Irã' lê como 'a guerra que o Irã faz'. Isso empurra o espectador desatento exatamente para a
leitura oposta à que o vídeo defende."*

Um rótulo repetido dez vezes ensina, e o que ele ensina é a preposição. Em português falado, "de" é
lido como posse ou autoria antes de qualquer outra coisa — e nenhuma explicação anterior desfaz isso,
porque o ouvinte desatento retém o rótulo, não o parágrafo que o cercou.

**A régua:** todo rótulo que se repete 4+ vezes passa pelo teste do agente — *quem esse nome diz que
está fazendo a coisa?* Se a resposta contradiz o que o roteiro defende, troque a preposição: **"a
guerra NO Irã"** ou **"a guerra CONTRA o Irã"**. Custa uma sílaba. Vale para "a crise do X", "o
escândalo do Y", "o ataque do Z" — sempre que o nomeado for alvo, e não autor.

### ROT-76 · UM CRITÉRIO DE NUMERAL, NÃO DOIS (Mateus, 03/ago/2026 — supera a ROT-25 nos contáveis)

Duas leis da casa se contradiziam e ninguém tinha percebido, porque cada uma parecia certa sozinha: a
**ROT-25** mandava contável em algarismo ("5 países") e a **ROT-63** mandava miúdo de tempo por extenso
("quatro anos"). O roteiro que obedecia às duas saía com "**9 andares**" ao lado de "**quatro anos**" —
e o Mateus apontou a mistura em **cinco revisões seguidas**, a última assim: *"Numerais ainda
misturados, quinta versão seguida. Escolha um critério e passe uma vez só."*

**O critério único, e a razão dele:** o roteiro é lido em voz alta por uma pessoa. O ouvinte **não
percebe grafia** — "9 andares" e "nove andares" soam idênticos. Quem sofre com a mistura é o
apresentador na cabine, que tropeça na inconsistência visual. Logo, a régua serve à LEITURA:

> **Até dezenove, por extenso.** Algarismo só para: medida física com unidade ("2 quilômetros"), data
> ("6 de julho"), cifra grande (≥20, ou com casas: "13 bilhões e meio", "8.150") e **membro de par
> comparativo** — em "225 por dia contra menos de 2 por dia", o "2" fica em algarismo porque o par é a
> figura, e quebrar a simetria visual desmancha a comparação.

**A lápide:** a parte da ROT-25 que mandava contável genérico para algarismo está **superada**. O que
sobrevive dela é a medida física por extenso como FALHA ("quatro metros e meio" → "4,5 metros"), que
continua valendo e é de outra natureza.

**Gate:** `validar-roteiro.mjs` §6c-bis, invertido — agora acusa contável de 4 a 19 **em algarismo**.
⚠️ Na primeira execução a régua nova pediu "treze bilhões": `milhões/bilhões` estavam na lista de
contáveis e são marcadores de cifra grande. Corrigido no mesmo passe — *régua nova se roda contra o
texto ANTES e o texto DEPOIS, senão ela nasce gritando à toa* (a rev.10 avisa "9 andares, 5 países", a
rev.11 passa limpa).

### ROT-77 · O QUE O TEXTO ENSINA, O TEXTO PASSA A DEVER (Mateus, 03/ago/2026)

Ao adotar uma enumeração explícita — *"o drone é a **primeira** coisa que as duas guerras dividem. A
**segunda** é o dinheiro"* … *"a **terceira** é o escudo"* — o roteiro faz um contrato: **o ouvinte
começa a contar**. E um fecho escrito antes da reestruturação continuou dizendo *"as duas guerras não
dividem só arma e dinheiro. Dividem até o barulho da noite"* — pulando o escudo, que é o item central
do vídeo, e soando como um QUARTO item para quem estava contando.

*"'Até o barulho' agora soa como um quarto item de uma lista que o espectador está contando
ativamente, porque você o ensinou a contar."*

**A regra:** toda estrutura que o texto declara (uma contagem, um par, uma promessa de N itens, um
termo com definição) vira dívida — e **todo ponto do texto que a referencia tem de ser reescrito no
mesmo passe**, inclusive os anteriores à decisão. Depois de adotar uma enumeração, procure cada frase
que resume a estrutura e recontabilize. Conserto medido: *"As duas guerras dividem a arma, o dinheiro
e o escudo. Dividem também o barulho da noite."*

**Corolário — o termo que volta com outro sentido.** Na mesma rodada, "nuclear" apareceu em dois
lugares sem conexão: o motivo declarado da guerra ("impedir que o Irã tivesse uma **arma nuclear**") e
os 25 bilhões russos em "**reatores nucleares**". *"O espectador atento vai perguntar se a Rússia
estava construindo justamente o que os EUA foram destruir."* Não é preciso responder — é preciso
**desambiguar na palavra**: "arma nuclear" numa, "usinas nucleares civis" na outra (o que a fonte de
fato diz).

**Corolário — precisão paga em sílabas.** O conserto factual dos abrigos trocou quatro palavras por
treze, num parágrafo que fecha em soco. Precisão é obrigatória; comprimento não. Procure a forma **mais
curta que ainda é verdadeira** — "em abrigos ou trancados em casa" no lugar de "em abrigos antibombas
ou se protegendo dentro de casa". *Um conserto de fato que estraga o ritmo é meio conserto.*

### ROT-78 · DADO NOVO NÃO SE INSERE, SE PROPAGA (Mateus, 03/ago/2026)

O número de mortos do Ceuta saiu de *"18 a 57, e ainda subiam"* para *"72 · 88 · cerca de 100"*. Eu
troquei a frase e segui. O laudo dele:

> *"Isso não é um dado atualizado. É **outro evento**. Cem mortos numa travessia de algumas centenas de
> metros é uma das piores tragédias migratórias da história europeia — e o roteiro segue tratando o
> número exatamente como tratava quando eram 18. A intro ainda diz 'Dezenas morreram'. O fecho ainda
> diz 'deixou ainda mais mortos'. A seção do Tarajal ainda apresenta 14 afogados como a tragédia
> fundadora, sem notar que 2026 matou sete vezes mais no mesmo lugar. O vídeo agora tem um recorde de
> mortes e enterra ele na terceira posição de um parágrafo."*

**O diagnóstico é de método, não de escrita:** *"um agente que insere localmente e não revisa
globalmente produz exatamente esse tipo de dissonância, e ela é mais grave que qualquer tique de
estilo, porque o espectador percebe que o narrador não reagiu ao próprio material."*

**A regra:** quando um dado **muda de ESCALA** (uma ordem de grandeza, um recorde, uma inversão de
sinal), ele deixa de ser um valor e passa a ser um fato novo — e fato novo **reordena a hierarquia**.
Antes de fechar, percorra e reescreva:

1. **a intro** — a promessa foi calibrada para a escala antiga;
2. **toda comparação interna** que usava a grandeza (aqui, o Tarajal com catorze mortos, que só faz
   sentido como tragédia fundadora se o roteiro admitir que 2026 matou cinco vezes mais no mesmo mar);
3. **o fecho** — se ele resume, resume a escala nova;
4. **os adjetivos de tamanho** espalhados ("dezenas", "muitos", "ainda mais") — são calibragem, e
   calibragem envelhece com o dado.

**Corolário — a incerteza também é dado.** Ao atualizar, cortei o *"e ainda subiam"* e mantive três
contagens divergentes. *"As contagens divergem porque ainda estão subindo."* Tirar a marca de
movimento de um número em movimento transforma provisório em definitivo — e o vídeo vai ao ar depois.

**Corolário — o que a apuração não diz, o fecho não conclui.** O mesmo fecho afirmava *"O Ahmed Karim
chegou do outro lado"* sugerindo desfecho: a reportagem só o entrevistou dentro de Ceuta e nunca disse
se ele ficou ou voltou com os 48 mil. Personagem retomado (ROT-67) se retoma até onde a fonte alcança —
e o limite se diz em voz alta: *"o que aconteceu com ele depois, a reportagem não conta."*

### ROT-80 · O NÚMERO DE CARDS SEGUE A ATENÇÃO, NÃO UM TETO FIXO (Mateus, 07/ago/2026 — calibra a ROT-22)

> ⚖️ **Calibrada pela [ROT-109] (14/set/2026):** em narrativa o número de cards tem teto de 5. O que
> segue valendo daqui é o **contrato do card** (a promessa do título se cumpre logo depois dele); o
> reset de atenção entre nós passa a ser feito pela passagem falada dentro do tópico.

A **ROT-22** (15/jul) fixou o teto em **4 tópicos**, e nasceu do formato de LISTA, onde tópico demais
picava o vídeo. Em 07/ago, lendo um roteiro NARRATIVO de dezesseis minutos com 4 cards, ele inverteu o
diagnóstico: *"Só 4 cards para ~16 minutos é pouco: cada card novo é um pequeno reset de atenção e
também vira capítulo na página do vídeo."*

E deu o sintoma que denuncia o card sobrecarregado: **card é contrato**. O card "Por que ele assusta
mais que o Vesúvio" só chegava ao Vesúvio depois de super-erupção, Tambora, formação de caldeira,
segunda caldeira, Solfatara, mortes de 2017, metrô e o CTA — quatro minutos até cumprir a própria
promessa, carregando oito beats distintos. *"Quando o título anuncia uma comparação e o vídeo entrega
uma aula de geologia, o espectador não sabe mais onde está no arco, e perder a noção de progresso é
uma das causas mais comuns de abandono no meio."*

**A régua que vale hoje:**
- **Lista:** o teto de 4 da ROT-22 continua valendo.
- **Narrativo longo:** o número de cards segue a necessidade. Um card por **promessa** — e ele tem de
  ser cumprido logo depois do título, não quatro minutos adiante. Se um card carrega mais de três ou
  quatro beats, ele é dois cards.
- O card também é **capítulo do YouTube**: menos cards = menos pontos de entrada na página.

Medido no mesmo roteiro: de 4 para 7 cards, com o bloco "Ele não precisa explodir pra matar" (Solfatara
+ a família morta + o metrô) promovido a tópico próprio — que era o clímax substituto que faltava.

### ROT-79 · A NEGAÇÃO QUE O ESPECTADOR ESTÁ ACREDITANDO É ESTRUTURAL (Mateus, 03/ago/2026)

Sete casos documentados do mesmo erro, em dois roteiros, todos meus: caçando a antítese da ROT-63/69,
cortei construções em que a negação **não era ornamento — era o meio do raciocínio**.

| o que cortei | o que foi junto |
|---|---|
| "Não foi incompetência" | a acusação que o texto respondia |
| "Pela lógica, você esperaria Moscou sufocando" | a expectativa que o parágrafo ia contrariar |
| "Não é uma contagem contra a outra: são janelas diferentes" | a razão de 49 mil e 60 mil não se contradizerem |
| "não se comporta como um exército invasor" | a refutação do enquadramento que o próprio parágrafo montou |
| "Mas o recorde não é o que fica" | o aviso de que o recorde é o item MENOS importante |

**O TESTE (é dele, e é o que a ROT-69 não tinha):** antes de remover um "não é X, é Y", pergunte **se X
é algo que o espectador está acreditando naquele exato momento** — seja porque o roteiro acabou de
montar (o enquadramento de invasão), seja porque os dados sugerem (dois números diferentes para a mesma
coisa). *Se sim, a negação é estrutural, não ornamental.* Corta-se o contraste; preserva-se a premissa.

**Como as duas leis convivem:** a ROT-69 mata o **reflexo** de construir todo insight como reviravolta —
a figura usada como muleta, onde a afirmação seca diria o mesmo ou mais. A ROT-79 protege a figura que
**carrega argumento**: ela existe porque há uma crença viva do outro lado da tela. Aplicar a ROT-69 sem
a ROT-79 é o que produziu sete regressões seguidas.

### ROT-81 · A CARGA POR FRASE — o ouvinte empilha, e a pilha tem fundo (Mateus, 07/ago/2026)

> *"É uma região inteira a oeste de Nápoles, colada na cidade, com uma cidade portuária no meio dela,
> chamada Pozzuoli."* — **"MUITA informação por segundo."**

O meio é áudio: não dá pra reler. Essa frase obriga o ouvinte a segurar, ao mesmo tempo, uma região, um
ponto cardeal, uma cidade grande, uma cidade pequena e um nome próprio — com a segunda entidade DENTRO
da primeira. Em vinte palavras. Quem só ouve não percebe que perdeu: sente que está boiando, e sair é
mais fácil que voltar.

**⚠️ O defeito NÃO é frase longa, é ENCAIXE.** A comparação que fecha a questão, medida no mesmo
roteiro: *"Em 2010, um vulcão bem menor, o Eyjafjallajökull, na Islândia, soltou uma nuvem de cinza fina
no ar…"* tem **seis referentes, cinco vírgulas e 32 palavras** — e lê fácil, porque três deles são o
**mesmo objeto** (aposição: vulcão = Eyjafjallajökull = o da Islândia) e a estrutura é LINEAR. A frase
ruim tem 4 referentes em 20 palavras, e eles são coisas DISTINTAS, aninhadas.

**O teste:** leia a frase uma vez, em voz alta, e conte quantas coisas **novas e diferentes** o ouvinte
precisa segurar pra ela fechar. Aposição não conta. Mais de duas coisas distintas, ou qualquer
aninhamento espacial (A dentro de B ao lado de C), pede quebra em duas frases. Conserto medido: *"É uma
região inteira, a oeste de Nápoles e colada nela. No meio dessa região fica uma cidade portuária:
Pozzuoli."* — 4 referentes numa frase viraram 2 + 2.

**⚠️ ESTA LEI NÃO TEM GATE, E ISSO É UMA DECISÃO, NÃO UM ESQUECIMENTO.** Foram testadas quatro réguas
determinísticas contra o roteiro (vírgulas por frase, palavras por frase, referentes por frase,
referentes por palavra) e **todas reprovam junto as frases que o Mateus elogiou** — a do Tambora, a das
colunas com marisco, a do Eyjafjallajökull. O critério "3+ vírgulas e 18+ palavras" acusava 23 de 164
frases, a maioria boa. *Régua que reprova o bom junto com o ruim ensina a ignorar a régua* (a mesma
razão da ROT-63 sobre alarme falso). Por isso a ROT-81 vive como **lente do `critico-de-roteiro` e teste
obrigatório do `roteirista-narracao`**, não como check do `validar-roteiro.mjs`. Se um dia aparecer um
proxy que separe encaixe de aposição, aí vira gate.

### ROT-82 · O DETALHE ESCRITO DE CABEÇA, E O DADO HERDADO QUE NINGUÉM RECONFERE (Mateus, 03–07/ago/2026)

Três erros factuais chegaram ao roteiro do supervulcão, e os três são a MESMA falha em fases diferentes:

1. **Escrito de memória.** "27 de setembro" e a cena dos peixes nas poças saíram da cabeça, sem uma
   busca. O real: 27/set foram ~20 tremores; **28/set ao meio-dia** o mar recuou ~400 m deixando peixe
   no seco; a erupção foi **29/set às 19h30**. Detalhe histórico é exatamente o que soa memorizável e
   não é.
2. **Herdado sem conferência.** "7 metros em pouco mais de um dia" veio do roteiro ORIGINAL e atravessou
   **cinco revisões** — porque em cada passe eu conferia o que ACRESCENTAVA, nunca o que já estava lá. É
   falso: o soerguimento foi acumulado ao longo de um século.
3. **Inventado no conserto.** "19 metros nos dois anos anteriores" nasceu na rev.5, ao tentar dar escala
   a um trecho fraco. Nenhuma fonte sustenta: o intervalo real vai de ~1,4 m (medição moderna) a ~8–10 m
   acumulados desde 1400.

**A raiz não é conhecimento — é PROCESSO, e está na SIS-147.** O estúdio tem um `verificador-de-fatos`
adversarial, pronto, que seleciona as afirmações de risco e abre as fontes. Ele **não rodou uma única
vez** em ~30 revisões, porque a porta usada (`regerar-doc`) não o chamava. Quem fez fact-check foi o
dono, três vezes, lendo.

**As duas regras que ficam:**
- **Número, data e nome próprio só entram com fonte aberta AGORA.** Se a busca não foi feita neste passe,
  o dado não entra — escreve-se a frase sem ele. "Eu sei isso" não é apuração, e é indistinguível de
  invenção no texto final.
- **Revisão confere o que FICA, não só o que MUDA.** Todo dado específico que sobrevive a um passe é um
  dado que aquele passe está assinando. O erro herdado é mais perigoso que o novo, porque cada revisão
  que ele atravessa parece uma confirmação.

Antes de mandar gravar: `top10 roteirizar bancada <proj>` — e a lente `fatos` tem de
constar do veredito, não `=AUSENTE` (SIS-146).

### ROT-83 · O corte entra colado no ponto final — 164 cortes apertados em 12 vídeos (08/ago/2026)

O Mateus, ouvindo o `a-guerra-da-ucrania`: *"em 1:03 notei um erro de corte, ele quase ia falar outra
palavra e cortou pro trecho seguinte"*. Medido: "combate." termina em 101,10 s, o corte entra em
**101,142** — 42 ms, ou **um frame** a 30 fps.

Varrido o parque: **164 cortes com menos de 120 ms de cauda**, em 12 vídeos. E os piores têm uma
assinatura só:

    9 ms após "você."   ·   8 ms após "falta."   ·   5 ms após "sólido."
    2 ms após "voa."    ·   5 ms após "Roma."    ·   1 ms após "vazio."

**Todos depois de ponto final.** Não é azar — é o mecanismo: o decupador corta em fronteira de frase,
a transcrição marca o fim da palavra no fim do som, e ele entra ali, colado. Justamente onde mais
dói, porque a queda de entonação de um ponto tem cauda longa e cortá-la soa amputado.

A ausência de régua se prova pela variação: mediana de **477 ms** no `uruguai` contra **30 ms** no
`especies` e no `orcas` — 500× de diferença, mesmo estúdio, mesmo agente, e 61% a 65% dos cortes
apertados nesses dois. *Quando a mesma métrica varia 500× entre projetos, o que falta não é
calibração, é a regra.*

⚠️ **NÃO é a transcrição, e cheguei a suspeitar dela.** Refiz o trecho pedindo
`timestamps_granularity=character`: em 42 palavras, `palavra.start` e `palavra.end` são IDÊNTICOS ao
primeiro e ao último caractere (desvio 0,0 ms). Isso **refuta** a hipótese que estava escrita no
`scribe-caractere.sh` desde 28/jul — a de que a divergência palavra↔caractere desalinhava o corte.
Ela não existe; os oito pontos que pedem `word` estão corretos.

Gate: `scripts/qc-margem-corte.mjs` (piso configurável, 120 ms por padrão). Agente-raiz: `decupador`.

*Ao investigar um defeito de tempo, meça a ferramenta ANTES de trocá-la: a suspeita mais elegante —
"a transcrição é grossa demais" — custou uma hipótese que estava documentada havia dez dias e era
falsa.*

---

### ROT-84 · Quando NÃO HÁ ar, a régua da cauda é inaplicável — e o conserto muda de estação (08/ago/2026)

A [ROT-83] deu ao decupador a cauda mínima (250 ms após fim de frase, 120 ms no meio). Ao aplicá-la
em massa por script no `a-guerra-da-ucrania`, o quadro real apareceu — e **inverte o diagnóstico**.

Dos 18 cortes apertados, **6 tinham conserto e 12 não**. Medindo o *vão* — a distância entre o fim
da última palavra que FICA e o começo da primeira que SAI:

    mediana 540 ms  ·  p90 2640 ms  ·  mas 12 de 39 abaixo de 120 ms

Os 12 cortes que permaneceram apertados são exatamente os 12 sem vão, e **quase todos são
`[retake]`**. Ou seja: o apresentador errou, parou e recomeçou em 20–60 ms, sem respirar. **Não há
silêncio ali para dar cauda nenhuma.** O decupador não escolheu mal o ponto — a gravação não oferece
ponto melhor.

⚠️ **E foi assim que o conserto ingênuo criou um defeito novo.** A primeira versão do script recuava
o corte para `fim_da_palavra + piso` e pronto. No `a-guerra` isso levou o corte de 101,142 para
101,350 — e o gate independente voltou acusando *"70 ms após «Na»"*. O "Na" é a **primeira palavra
do retake que o corte existe para descartar**: abrir espaço na cabeça do span fez a fala descartada
VAZAR para o vídeo. É o DANGLER que o próprio ofício do decupador descreve ("A A maior parte", "Um
um grão"), produzido por uma correção de qualidade.

*O corte tem DOIS limites, não um: a cauda da palavra que fica e o começo da palavra que sai. Quem
só olha um deles conserta uma ponta estragando a outra.*

**A régua completa:**

| situação | o que fazer |
|---|---|
| vão ≥ piso | recuar até `fim + piso` — conserto aritmético, sem julgamento |
| vão < piso | **não existe recuo correto.** Não force |

E no segundo caso o conserto **muda de estação**: deixa de ser decupagem e vira montagem. As saídas,
na ordem de preferência:

1. **A arte cobre a emenda** — é a mesma saída que o ofício já manda para o jump cut de gesto, e
   funciona pelo mesmo motivo: se a imagem troca, o ouvido perdoa a emenda seca;
2. **fade curto de áudio** na junção, quando a cena não puder cobrir;
3. aceitar a emenda seca — que é o que gerou a queixa original, e por isso é a última.

**A obrigação nova do decupador:** toda fronteira com vão abaixo do piso vai **DECLARADA no
relatório de cortes**, com o vão medido. Sem essa declaração a estação de arte não sabe onde precisa
cobrir, e o defeito chega ao vídeo — que foi exatamente o caminho do corte de 1:03. *Corte que o
decupador sabe ser imperfeito e não anuncia é um defeito que ele escolheu deixar para o espectador
descobrir.*

Ferramenta: `scripts/consertar-margem-corte.mjs <proj> [--aplicar]` — recua o que dá (aritmética,
zero inferência) e **recusa com motivo** o que não dá, que é a lista para a arte cobrir.

---

## [ROT-85] · O carimbo protegia o veredito e não os laudos — e passou a mentir com mais confiança

*12/ago/2026 · `terremotos-america-do-sul` · achado ao auditar por que o roteiro não foi entregue*

O `bancada-roteiro.sh` já fazia a coisa certa no fim: carimba `roteiro=<hash>` no `bancada.veredito`,
porque *"data quebra com um `touch`"* — o comentário do arquivo diz isso e cita um caso em que a
comparação por string deixou um vídeo ser gravado.

**Mas a retomada não olhava versão nenhuma.** Ela testava só `laudo existe && tem VEREDITO` e pulava
a lente. Junte as duas coisas e sai a mentira: **laudos da REV.3 consolidados sob o hash da REV.4.**

Medido: o veredito trazia `roteiro=cd5a5a45…`, o `roteiro-boco.md` no disco tinha `3a85382e…`, e o
próprio laudo geral avisava por escrito — *"É a REV.4, e não é o texto que a bancada anterior
julgou."* O agente sabia; o sistema não.

E o pior aconteceu quando tentei consertar rodando de novo: ela **pulou as quatro lentes** e
reestampou `FAIL` com o hash NOVO sobre os laudos VELHOS. *Rodar o gate de novo tornou a mentira mais
convincente*, porque agora o carimbo apontava para a versão certa.

**O conserto tem duas metades, e nenhuma basta sozinha:**
1. cada laudo declara, na primeira linha, o roteiro que julgou (`<!-- roteiro=<hash> -->`);
2. a retomada só pula quando o hash bate — e laudo **sem** declaração é tratado como desconhecido,
   isto é, refeito.

⚠️ **Quem carimba é o SCRIPT, nunca o agente.** Pedir ao crítico que escreva o próprio hash é confiar
a prova a quem está sendo verificado; e um agente que esquece a linha faz a retomada refazer trabalho
já pago.

**A régua que generaliza:** *carimbo de versão protege exatamente o arquivo em que está escrito.* Um
veredito consolidado é tão novo quanto o mais VELHO dos laudos que o compõem — e se as partes não
declaram versão, o todo não tem como saber a sua.

---

### ROT-86 · Elo causal precisa de LINHA na auditoria — dobradiça não parece afirmação, e por isso escapa (12/ago/2026)

A auditoria de um roteiro guarda **afirmações**: "a magnitude foi 7,4", "Pereira está a 60,8 km". Cada
uma com fonte, tier e veredito. O que ela não guarda é a **dobradiça** — a frase que liga duas
afirmações verdadeiras e conclui uma terceira coisa que ninguém verificou.

No roteiro dos terremotos da América do Sul, *"raspar de lado quebra raso"* — o elo que explicava por
que a Venezuela e a Colômbia não têm relação — atravessou **quatro bancadas e 53 afirmações
auditadas**. Era falsa, e desmentida pelo **próprio terremoto do título**, que é transcorrente e
quebrou a 110 km. Medido: `raspar|raspa` devolvia **ZERO** entradas na auditoria.

**A razão de escapar é estrutural, não distração:** quem revisa fatos procura afirmações, e uma
dobradiça não parece uma. Não tem número, não tem nome próprio, não tem data — tem a **forma de uma
explicação**, e explicação soa como raciocínio do autor, não como fato a conferir.

A [ROT-74] já mandava auditar a costura entre capítulos, e o `CONTRATO.md` do roteirista já mandava
listar as dobradiças no relatório. As duas existiam, e a frase passou assim mesmo, **quatro vezes**.
*Não faltava régua: faltava gate.*

**O gate é `node scripts/qc-elo-causal.mjs <proj>`.** Ele varre a narração por marcadores que
ASSERTAM MECANISMO e cobra que cada um tenha entrada própria em `auditoria.afirmacoes[]`.

⚠️ **A calibração é a lei, tanto quanto o gate** — e cada peça dela nasceu de um falso positivo dele
mesmo, medido no texto real:
- o `porque` comum ficou de fora: aparece dezenas de vezes num roteiro sadio;
- **negação não conta.** *"Não foi isso que aconteceu"* e *"Não explica por que…"* são o movimento
  honesto de derrubar a explicação fácil. Cobrar fonte de uma refutação é pedir prova de ausência — e
  o autor a daria inventando linha na auditoria só para calar o gate. Eram 2 dos 5 achados brutos;
- frase com menos de 8 palavras significativas não recebe veredito: com 4 ou 5, duas coincidências
  banais já dão 50%. O piso não julga a frase — impede a MEDIDA de opinar sem amostra;
- a régua de sobreposição é a **mesma 40%** do `validar-roteiro`. Duas réguas para a mesma pergunta
  divergem, e foi assim que o `qc-hex` e o hook deixaram o mesmo defeito passar pelos dois.

Medido depois de calibrar: **0 achados em 5 roteiros sadios** (dois com 53 e 59 afirmações auditadas)
e **2 dobradiças reais** no que tinha o defeito. Irmã: [ROT-74].

---

### ROT-87 · O conserto que uma lente escreve volta para o OUVIDO antes de o passe fechar (12/ago/2026)

Três dos dez achados do laudo de locução dos terremotos **nasceram de passes de revisão anteriores** —
dois deles do mesmo passe de fatos, feito horas antes. O conserto factual estava certo e tinha de ser
feito; o que veio junto foi credencial redundante, dez palavras entre sujeito e verbo, e um verbo que
não aceita o interlocutor no dativo (*"avaliou ao Poder360"*). E o dossiê narrava o conserto que criou
o defeito **com orgulho**.

*A lente que aponta o defeito não é a que julga o conserto.* Uma lente de fatos escreve a frase certa
sobre o mundo; ela não tem ouvido, e não deveria ter. A [ROT-46b] já manda reler o bloco depois de um
conserto local e a [ROT-71] obriga a leitura par a par — mas só para **polaridade**.

**A regra:** toda frase reescrita para atender laudo de outra lente volta para a **leitura em voz
alta** antes de o passe fechar. Custa segundos, e é o único ponto do processo em que o defeito ainda
não virou o texto que a próxima bancada vai tratar como base.

---

### ROT-88 · A fonte decide QUAL credencial vale; a locução decide QUANTO dela entra na boca (12/ago/2026)

Duas notas do mesmo dossiê se contradiziam com duas linhas de distância: uma mandava usar a credencial
acadêmica completa, a outra registrava que as credenciais tinham ido para o dossiê e que o especialista
seria *"o geofísico"*, como o veículo o apresenta. O passe seguinte leu a segunda como revogada pela
primeira e **reverteu em silêncio uma decisão registrada**.

*Reverter é legítimo; reverter sem registrar é como a doutrina desanda* — o próximo passe não encontra
a razão, só o resultado, e reverte de volta.

**A regra:** a fonte decide QUAL credencial é válida (é questão de verdade); a locução decide QUANTO
dela entra na frase (é questão de ouvido). O excedente vai para o dossiê e para a tela — nunca para a
boca. **Credencial que empurra o verbo para além da sexta palavra depois do sujeito vira frase própria
ou não entra.**

⚠️ E há um custo que não é de ritmo: este era o único especialista nomeado do vídeo, e é ele que desarma
a armadilha central da pauta. Dizer que é *"doutorando"* é honesto — mas foi acrescentado como se fosse
ganho, e no ouvido é perda. **Precisão que enfraquece o beat vai para o dossiê, não some.**

---

### ROT-89 · Responda a objeção que o espectador faz com aritmética de senso comum — no ponto em que o texto a provoca (12/ago/2026)

O roteiro dos terremotos derrubava as objeções **técnicas** (o solo, o tipo de construção) com fonte e
método, e deixava de pé a mais barata de todas — a que qualquer pessoa levanta no primeiro minuto:
*cidade maior, mais gente, mais mortos.* A lente de clareza mediu o mesmo padrão em **quatro** lugares
do mesmo roteiro: a prova sempre chegava depois da dúvida.

**Em áudio não dá para voltar.** Quem ouve fecha a conta com o que tem na mão naquele segundo, e segue
o resto do vídeo com a conclusão errada já formada — não porque o roteiro esteja errado, mas porque a
resposta ainda não chegou. No fecho ela não conserta nada: conserta para quem ficou.

**A regra:** antes de fechar o roteiro, escreva a objeção que o espectador faz sozinho com aritmética
de senso comum, e responda-a **no ponto em que o texto a provoca**. Se a apuração não tem o número que
a resposta pediria, responda sem número — a formulação existe; o que não pode é o silêncio.

---

### ROT-90 · A [ROT-29] falhou sendo citada cinco vezes — o que faltava era o gate, e ele só olha o que o DOSSIÊ já declarou volátil (13/ago/2026)

A [ROT-29] diz que fato que caduca sozinho entra como **piso** ("mais de X"), nunca como teto. O
roteiro dos terremotos da América do Sul **citava a ROT-29 nominalmente cinco vezes no próprio
dossiê** e carregava três tetos vencidos ao mesmo tempo: *"matou 132"* quando o balanço oficial já
dizia **239**, e *"umas 20 casas"* quando o mesmo prefeito já contava **40**.

**A regra existia, era conhecida, era citada, e falhou.** *Ela é lida como regra de redação de frase,
e o defeito é de classificação de pauta* — ninguém pergunta, ao abrir a pauta, *"este evento ainda
está acontecendo?"*.

⚠️ **E o gate de forma não pegava porque cobrava a coisa VIZINHA.** O `validar-roteiro.mjs` exige
moldura temporal e ano por extenso em data recente — isso protege o número de ficar **falso**. Nada
cobrava a forma teto × piso, que é o que o protege de ficar **desatualizado**. São dois defeitos
diferentes e só um tinha guarda.

**O gate é `node scripts/qc-volatil-piso.mjs <proj>`**, pendurado no `validar-roteiro`.

**Como ele evita ser ruído:** cobrar piso de todo número seria inútil — magnitude 7,4, os 60 km até
Pereira e o ano de 1999 não caducam. Ele **só olha o que o próprio dossiê declarou volátil**, nas
caixas `[⚠️ ATUALIZAR ANTES DE GRAVAR]`. Quem escreveu a caixa já respondeu a pergunta difícil
("este número anda?"); o gate só cobra a consequência.

**Aceita piso OU data**, porque as duas saídas são legítimas: o piso não vence ("mais de 200" segue
verdadeiro em 239 e em 400), e a data transforma o número em fato histórico. ⚠️ **Grandeza não
monotônica não pode virar piso**: de "desaparecidos" sai quem é encontrado, vivo ou morto, e um piso
sem data quebraria sozinho em semanas. Para ela, a data é a única saída certa.

**Dois avisos que ele emite e que valem tanto quanto a violação:**
- **caixa órfã** — a anotação cita uma frase que não está mais na narração. Ela segue vigiando um
  texto que mudou, e quem lê acredita que aquele número está protegido. No 5º passe deste roteiro,
  **uma delas PROIBIA exatamente o que o texto tinha passado a fazer**;
- **caixa sem citação** — sem a frase entre «guillemets» não existe elo entre a declaração e o que o
  Bôco lê, e o gate não tem o que examinar. Medido: 5 dos 6 roteiros do disco têm caixas e **zero**
  cifras examináveis. *"0 problemas" ali significa "não sei", não "está limpo"* — e dizer isso em voz
  alta é metade do valor do gate.

Calibrado: **0 falsos positivos em 5 roteiros**, 1 teto real no que tinha o defeito, e 2 tetos na
versão anterior do mesmo arquivo — a diferença prova que ele mede o conserto. Irmã: [ROT-29].

---

### ROT-91 · Fato escrito que se ANUNCIA como gerado é pior que os dois — o dossiê declarava "gerado do manifest" e o gerador nunca existiu (13/ago/2026)

A seção de auditoria do dossiê declara, em caixa alta: *"ESTA SEÇÃO É GERADA DO `roteiro.json`, NÃO
REDIGITADA. Dossiê é espelho, não intenção (ROT-60)"*.

**Conferido no repositório inteiro: nenhum script escreve essa seção.** Ela é digitada à mão por quem
passa por ali, e desanda no primeiro conserto — medido: o cabeçalho dizia `34 ✅ · 19 ⚠️ sobre 53`
enquanto o manifest já trazia `38 · 23 sobre 61`.

*Um número escrito à mão desperta desconfiança e é conferido; o mesmo número com um selo de "derivado"
desliga a desconfiança de quem lê.* **A declaração falsa custa mais que a ausência dela** — é o núcleo
da [SIS-334] aplicado a documento em vez de a máquina.

**O gate é `node scripts/qc-placar-dossie.mjs <proj>`** (com `--aplicar` para consertar), pendurado no
`validar-roteiro`.

⚠️ **Ele NÃO regenera a seção inteira, e a razão é de custo assimétrico.** A seção mistura duas
naturezas: o placar (derivável, uma linha) e as caixas históricas (escritas à mão, com o porquê de
cada revisão — a única memória disso no sistema). Um gerador que regravasse tudo destruiria as
segundas para consertar a primeira, e o dossiê tem 152 KB de anotação que ninguém refaz.
*Automatizar a parte determinística de um documento misto é melhor que automatizar o documento.*

⚠️ **E a âncora se calibra contra o disco, não contra a convenção mais nova.** A primeira versão do
regex exigia `sobre **61**` (o formato que o 5º passe acabou de inventar) e, rodada contra o dossiê
ANTIGO — o que tem a divergência real, escrita `sobre 53` sem asteriscos —, devolveu *"sem linha de
placar, nada a comparar"*. Um gate afinado no formato recém-nascido **não pega a falha histórica que o
originou**, e sai dizendo "nada a comparar" com cara de aprovação. O teste de controle (rodar contra a
entrada sabidamente ruim) é o que separa um gate de um enfeite.

Ausência de linha de placar é reportada como `•`, nunca `✓`: zero divergências sobre zero linhas é
cegueira, não limpeza. Medido: 5 dos 6 dossiês do disco não declaram placar nenhum.

### ROT-92 · Lista de classes é a régua de quem procura — só de repetição, o corte sai fraco por construção (13/ago/2026)

O `doutor-de-roteiro` nasceu com sete classes de achado, e todas respondiam à mesma pergunta:
*"isso já foi dito antes?"* — samba, terceira volta, recapitulação, preâmbulo, digressão, explicação
excedente, enfeite.

**Medido no primeiro laudo real** (`dentro-do-sol`, 19'47"): 5 cortes, dos quais **4 eram frases
isoladas de 2 a 8 s**, somando 3,7% do vídeo. O Mateus reprovou: *"achei bem fracos, e nada
inteligentes… parece que leu correndo e falou 'hm, aqui e aqui corta' sem nem racionalizar direito"*.

**A causa não era desatenção do executor — era a lista.** Quem só carrega perguntas sobre repetição
só encontra eco, e eco é quase sempre uma frase. Vídeo arrasta muito mais por passagens que **demoram**
do que por frases que se **repetem**, e não havia uma única classe capaz de nomear isso. O agente
cumpriu o ofício à risca e entregou pouco: *o teto do achado é a régua que se leva para a leitura.*

**O conserto tem três partes, e nenhuma delas é "preste mais atenção":**

1. **Segunda família de classes — RITMO**: `bloco-arrastado` · `setup-longo` ·
   `enumeracao-exaustiva` · `caminho-longo` · `descida-de-detalhe`. A pergunta que faltava é
   **"este bloco justifica o tempo que ocupa?"**, e ela se fecha com *"e se este bloco inteiro
   saísse — o que o espectador perderia?"*, respondida bloco a bloco.
2. **Medição antes do julgamento**: mapa de blocos com *tempo · informações novas · densidade*,
   ordenado pela densidade. Sem a tabela, "achei que arrastava" não vira "leva 1'40" para entregar
   uma ideia onde a mediana do vídeo é quatro".
3. **Ordem e piso**: propor os ESTRUTURAIS primeiro (nunca "por ganho e risco" — corte de 2 s é
   sempre o mais seguro, então essa ordem premia o irrelevante), e **corte < 10 s só entra
   acompanhado de um estrutural**. Vídeo sem bloco lento se declara assim, medido.

**O gate é `node scripts/roteiro/conferir-cortes.mjs`**, que passou a exigir o `mapaDeBlocos`, a
resposta do "e se saísse" e a presença de família B (ou o campo `semBlocoLento`). *Rodado contra o
laudo que motivou a lei, ele reprova com os três achados* — é assim que se sabe que o conserto pega
o defeito, e não apenas descreve o remorso.

A generalização, que vale para qualquer agente de julgamento: **antes de culpar a execução de um
laudo raso, leia a lista de coisas que o agente foi mandado procurar.** Ela é o limite superior do
que ele pode achar, e ampliá-la rende mais que qualquer instrução de "seja minucioso".

---

### ROT-93 · O roteiro RETOMA o que já nomeou — e "anáfora" nesta casa tinha dois sentidos, um deles vetado (14/ago/2026)

**Pedido do Mateus:** *"quero que os nossos roteiros tenham referências anafóricas."*

**A armadilha, e é a razão desta lei existir por escrito:** a palavra "anáfora" já morava na
doutrina — e no sentido oposto ao do pedido. A [ROT-21] e a [ROT-35] **vetam** a *anáfora retórica*
(o mesmo esqueleto repetido: *"Não tinha estrada, não tinha posto, não tinha bandeira"*), que o
Mateus chamou de tenebroso. O que ele pediu agora é a *referência anafórica*: o termo que **volta**
em vez de ser rebatizado. **Uma empilha forma, a outra economiza forma.** Sem esta distinção
escrita, o agente que lê o pedido novo entrega exatamente o que a ROT-21 proíbe — e o que ele lê
como obediência, o dono lê como reincidência.

**A régua, nas três distâncias** (módulo dono: `knowledge/roteiro/COESAO-REFERENCIAL.md`):
1. **curta** (frase a frase) — nomeou uma vez, retoma. Sujeito rebatizado a cada frase é o vício
   mais reconhecível de prosa de máquina.
2. **média** (bloco a bloco) — a primeira frase de um bloco se liga ao anterior. ⚠️ **Ligar não é
   reafirmar:** a retomada é UM sintagma apontando para trás, com o resto da frase novo; a
   reafirmação gasta uma frase inteira no que o espectador já tem, e essa a [ROT-44] manda cortar.
   As duas regras convivem, e confundi-las manda consertar ao contrário.
3. **longa** (o arco) — a âncora da abertura volta **nomeada** no ato final, como a peça que agora
   significa outra coisa, nunca como resumo. É a dívida narrativa: na dissecação do Vox, **nenhuma**
   variável de forma explicou a retenção, e os dois maiores picos do vídeo eram as duas parcelas de
   uma promessa aberta no primeiro minuto.

**A trava que impede o defeito oposto:** todo antecedente tem de ser recuperável **de ouvido** —
quem lê volta a página, quem ouve não. Pronome puro só a ≤2 frases; com dois candidatos do mesmo
gênero na janela, pronome está proibido; e **abertura de bloco nunca começa com pronome puro**,
porque quem entrou pelo capítulo do YouTube não tem antecedente nenhum. Essa mesma trava é o que faz
a cadeia sobreviver à **dublagem** (gênero gramatical não atravessa: um "ela" vira `it`/`er`/`elle`)
e ao **corte de shorts** (que exige trecho autônomo).

**Como se verifica, e por que assim.** O gate (`validar-roteiro.mjs`) **não procura a cadeia
sozinho** — o roteirista a DECLARA no dossiê (`## Cadeia referencial`: âncora → retomada → paga em,
cada uma com citação literal) e o gate confere que o declarado **existe no narrado**. A tentação era
medir por vocabulário; medido em 14/ago sobre o acervo, um roteiro que paga a promessa com OUTRAS
palavras daria zero e seria reprovado. *Gate que reprova o certo ensina a ignorar o gate.* Declaração
é barata de escrever, impossível de falsear sem que o diff acuse, e obriga a **pensar** a cadeia —
que é o objetivo real. O julgamento fino é do `critico-de-clareza` (lente 3b, o par da 3).

**Diagnóstico:** `node scripts/roteirizacao/medir-coesao.mjs <roteiro.md>`.

⚠️ **A medição do acervo NÃO é alvo.** No mesmo dia, o Mateus: *"os roteiros que já existem não são
exemplos, pelo contrário, foram roteiros bem ruins feitos há dias atrás antes de várias modificações
na forma de produzir roteiro."* Os números do passivo (26% das aberturas sem elo, 39% sem arco
intro→ato final) mostram que o defeito é comum e calibram o medidor — **não definem a meta**. Um
roteiro novo cumpre a régua do módulo, não "a média do que já existe".

### ROT-94 · A ABERTURA É O ÚNICO TRECHO EM QUE O CANAL PERDE — e é a janela menos verificada do gate (14/ago/2026)

**A medição, e ela é a mais sólida que a casa tem sobre roteiro.** O `analista-de-audiencia` cruzou
**389 vídeos originais** (< 40 min) e confirmou a forma numa coleta independente de 45 vídeos, na
janela de 28 dias. A métrica é `relativeRetentionPerformance` — o percentil contra vídeos
**semelhantes** do YouTube **na mesma altura da curva**, onde 0,50 é a mediana dos pares. Ela é a
métrica certa porque a ingênua (`audienceWatchRatio`, a fração de quem ainda assiste) **cai sempre,
por construção**: ela não sabe dizer se caiu mais do que devia.

| ponto do vídeo | contra os pares | leitura |
|---|---|---|
| **1 %** | **0,40** | o **mínimo global** do vídeo |
| 9–13 % | **0,585** | o pico |
| 66 % | 0,435 | o vale (é outra lei — [ROT-95]) |
| fim | 0,489 | o repique |

**Em 386 dos 389 vídeos a abertura é pior que o pico.** Em 332 (85 %) ela está **abaixo da mediana
dos pares**, e em 342 (88 %) o resto do vídeo está **acima**. *O vídeo não é fraco — o começo dele
é, e o resto não é.* É o único trecho em que este canal perde para os pares.

**A explicação confortável foi testada e caiu.** Se fosse tráfego frio — gente que chega por
sugestão e sai logo —, o buraco encolheria nos vídeos de público mais fiel. **Ele aumenta:** déficit
de **0,1460** no quartil de menos views (28 mil) contra **0,1148** no de mais views (614 mil). O
alcance desloca a curva inteira para baixo e **não muda a forma**. O defeito é do texto.

**Quanto vale, controlado por duração (13–25 min):** o quartil superior de abertura entrega
**49,66 % do vídeo assistido** contra **34,47 %** do inferior — **mais de 15 pontos percentuais**,
sem trocar uma cena, um render ou um segundo de arte.

**A JANELA É 1–3 % DO VÍDEO — algo entre 12 e 36 segundos.** E este número tem história: um insight
de 10/ago localizava a ruptura **entre 29 s e 56 s** e foi **obsoletado no dia seguinte** por outro
com amostra 78× maior. Medindo contra os pares, aos 29–56 s o vídeo mediano já está **subindo**
(0,50 → 0,55): aquela queda é real em absoluto e **normal para o formato**. *Quem agisse sobre o
insight velho estaria consertando o trecho errado* — e é por isso que a métrica vem escrita nesta
lei junto com o número.

**O QUE ACONTECE NA JANELA, lido na narração dos dois vídeos que deu para nomear:** o gancho vira
**descrição do objeto**. Nas Américas, até 36 s o gancho é concreto (o asfalto acaba, o Tampão do
Darién, meio milhão atravessando a pé); aos 44–60 s vira atributo — *"é um sistema de vias ligadas
umas às outras, reconhecido até pelo Livro dos Recordes, o Guinness. Ela cruza o solo congelado do
extremo norte, desertos, os mais de quatro mil metros da Cordilheira dos Andes"*. Na Geração Z, até
37 s o paradoxo concreto (9 trilhões/ano, mas não compra carro nem casa); aos 37–55 s vira anúncio
de pauta mais dado institucional. **Temas sem nada em comum, a mesma manobra: a narração para de
avançar o mistério e passa a se descrever.**

**A RÉGUA, então, é uma só:** nos primeiros 36 segundos o texto **abre uma dívida e não descreve o
objeto**. Extensão, recordes, certificações, enumeração geográfica e série institucional **não
entram** antes do primeiro minuto — eles são o que se paga **depois** de o espectador querer saber.
A dívida é UMA ([ROT-54]), é dita, e tem endereço.

**Como se verifica — e NÃO nasce seção nova no dossiê.** O gate **não julga** se o gancho virou
descrição: isso é semântica, e regex que tentasse pegá-la reprovaria a promessa legítima. *Medido ao
calibrar: `"você vai entender"` — que a [ROT-54] EXIGE como forma de dizer a promessa — seria
acusado como anúncio de pauta por qualquer padrão ingênuo.* Então vale o mesmo contrato invertido da
[ROT-93]: o roteirista **declara**, o gate confere o declarado contra o literal.

⚠️ **E a declaração é a que já existe.** A tentação era criar `## Dívida narrativa` ao lado de
`## Cadeia referencial` — e seria o mesmo assunto em dois lugares, que é como a doutrina apodrece.
**A cadeia da [ROT-93] JÁ É a dívida**: a própria lei a chama assim na distância longa (*"a âncora da
abertura volta nomeada no ato final… É a dívida narrativa"*). O que faltava nela não era a
declaração — era a **POSIÇÃO**. Então a seção continua uma só e ganha duas medições:

1. **a `- âncora:` tem de cair dentro das primeiras 78 palavras narradas** (~36 s a 130 ppm) — é a
   dívida abrindo no primeiro minuto, que é o achado desta lei;
2. **quando o `- paga em:` cai depois de 35 % do texto, exige-se `- parcela:`** — um pagamento
   intermediário, com citação literal, entre a abertura e o fecho. É o *down-payment* que a
   [ROT-18]/[ROT-54] já pediam em prosa e que nada conferia.

O julgamento fino é do `critico-de-clareza`, que passa a abrir todo laudo pela janela dos 36 s.

**E há uma segunda régua que sai da mesma medição, barata e contável:** *onde entra a primeira
pessoa*. A [ROT-64] cobra que exista gente no roteiro e o gate conta o total de falas — mas nunca
contou **quando** a primeira aparece. Medido nos 10 roteiros do acervo: `golfo-bebe-do-mar` a
**77,1 %** do texto, `oceano-700km` a 43,5 %, `itaipu-afogou` a 35,4 %. Vinte minutos de vídeo antes
de o ouvinte chegar perto de alguém. O gate avisa acima de 25 %.

⚠️ **O que esta lei NÃO autoriza:** encher a abertura de gancho barato. A [ROT-17] continua valendo
(cold open sem pigarro) e a [ROT-54] continua mandando que **cada frase da intro se pague nela
mesma**. Abrir dívida não é prometer para depois — é dar ao espectador uma pergunta que ele quer ver
respondida, com o fato concreto já na mão.

### ROT-95 · O VALE DO MEIO É FADIGA DE POSIÇÃO, NÃO MATERIAL FRACO — trocar o item não conserta (14/ago/2026)

**O fato:** ignorando os 5 % iniciais, o mínimo da curva relativa cai na **mediana aos 66 % do
vídeo** — 13,3 min num vídeo mediano de 19,8 min —, e em 41 % dos vídeos o vale está entre 50 % e
70 % (p25 = 56 %, p75 = 82 %). Por capítulo, sobre **5.077 capítulos em 387 vídeos originais**:
ordem 1–2 = **0,5747** (pico) · ordem 8–11 = **0,4497** (vale) · ordem 13–15 = 0,4879 (repica no
fim). **Doze pontos e meio** entre o capítulo 2 e o capítulo 9.

**A pergunta que decide a ação — e ela tem duas respostas opostas:** o material do meio é pior, ou a
**posição** é que é pior? Uma manda trocar o item; a outra manda mudar a estrutura. Escolher errado
custa o vídeo inteiro.

**O EXPERIMENTO NATURAL QUE RESPONDE, e ele já estava no banco.** `topico_uso` registra **403
capítulos reaproveitados em 79 compilados**, com retenção medida **nos dois lados** — o mesmo
material, em posições diferentes, cada capítulo sendo seu próprio controle:

| posição na lista | no vídeo original | reposicionado no compilado |
|---|---|---|
| início (0–25 %) | 0,5525 | 0,5702 |
| **vale (50–80 %)** | **0,4728** | **0,5595** |
| fim (80–100 %) | 0,4853 | 0,5553 |

**O déficit de 8,0 pontos entre o vale e o início cai para 1,1 quando o material troca de lugar —
86 % do buraco desaparece.** O ganho ao reposicionar é **monotônico na ordem de origem**: +0,017
(ordem 0–2), +0,050 (3–6), **+0,083 (7+)**. Welch por capítulo t = −4,13.

**A LEI, então:** *o vale do meio é **fadiga de posição**, não material fraco.* Trocar o item do
meio por um "melhor" conserta pouco — o item novo herda a posição e a fadiga junto. **O que se muda
é a estrutura.**

**O que isso pede do roteiro, na prática:**
1. **A ordem dos tópicos vale mais que a escolha deles.** A curadoria de retenção da
   [ROT-19] deixa de ser "os mais fortes abrem" e passa a ser um problema de **distribuição**: o
   trecho entre 50 % e 80 % é o que mais precisa de um motivo novo para ficar, e é justamente onde a
   escada costuma estar mais rasa.
2. **O meio precisa de re-gancho estrutural, não de mais um fato.** É onde a **parcela** da dívida
   ([ROT-94]) deve cair — na dissecação do Vox, a segunda parcela caía aos 10:30 de 21 min (50 %) e
   era o **quinto maior pico do vídeo**, num plano sem corte nenhum.
3. **Menos capítulos, quando dá.** O vale mora na ordem 8–11. Um roteiro de 4 cards ([ROT-22]/
   [ROT-80]) não tem ordem 9 — e essa é uma razão de retenção para o teto, que até aqui era só
   argumento de fio narrativo.

⚠️ **O que a medição NÃO diz.** Ela não prova que o compilado é melhor que o original: o público de
compilado chega com outra intenção, e parte do ganho pode ser dela. O que ela isola com força é o
**delta por capítulo** — o mesmo material medido duas vezes —, e é só sobre esse delta que esta lei
se apoia. Confiança declarada pelo analista: **0,7**.

### ROT-96 · A REVELAÇÃO CAUSAL É O ATIVO DE RETENÇÃO — o que a audiência volta para rever é o porquê (14/ago/2026)

**Picos de *rewatch* — trechos que a audiência VOLTA para rever (`ratio` ≥ 1,15× a vizinhança) — são
raros: 7 em 800 pontos, e 3 dos 8 vídeos medidos não têm nenhum.** Nos dois vídeos cuja narração deu
para ler, **os três picos são a mesma coisa: mecanismo causal não óbvio + cifra concreta.**

- **1,90×** (~7,1 min) — o maior de toda a amostra: a causa real de a estrada não existir **não é
  engenharia, é febre aftosa** e a proteção da pecuária dos EUA (*"aqueles 106 km de pântano viravam
  um cordão de proteção"*), mais a reviravolta (*"hoje a febre aftosa está controlada… aquele
  argumento perdeu a força"*).
- **1,21×** (~6,8 min) — *"as consequências estruturais do mundo pós-1971, onde o dinheiro perde o
  valor de forma silenciosa… existe uma explicação econômica documentada de por que a vida
  encarece"*.
- **1,18×** (~14,1 min) — cifras densas da Previdência (1 trilhão/ano, rombo de 317 bi, "dobraram em
  uma década").

**Nenhum pico é o gancho, a abertura ou uma imagem bonita. O maior deles é a promessa do TÍTULO
sendo paga.**

**A LEI:** toda pauta precisa de **uma revelação causal explícita e nomeável** — o *"por que de
verdade"*, não a descrição do fenômeno. É o ativo de retenção do vídeo, e é o que o espectador volta
para rever. Um roteiro que descreve **o que** aconteceu com riqueza de detalhe e nunca entrega **por
que** aconteceu entrega tudo menos a única coisa que a audiência quis.

**Como se reconhece que a revelação existe** (teste de uma frase): *dá para dizer o porquê numa
oração, e ele SURPREENDE quem já conhece o assunto?* "A estrada não existe por causa de febre
aftosa" passa. "A estrada não existe porque a região é difícil" é descrição vestida de causa —
responde com o próprio fenômeno.

**Onde ela mora no roteiro:** é a **parcela** da dívida ([ROT-94]), e o lugar dela é o meio, que é
onde a fadiga de posição morde ([ROT-95]). As três leis são a mesma máquina vista de três ângulos:
a [ROT-94] diz **quando abrir**, a [ROT-95] diz **onde a estrutura afunda**, e esta diz **o que
pagar ali**.

**Consequência para a etapa anterior:** isto é pedido ao `pesquisador-de-pauta` antes de ser pedido
ao roteirista. A classe **mecanismo** das seis classes de fonte é justamente esta — e quando ela
volta vazia, o dossiê tem de **declarar a linha vazia** em vez de deixar o roteirista descobrir na
hora de escrever, que é quando já não dá para buscar. Fonte rasa não produz roteiro fundo
([ROT-53]); aqui a fonte rasa produz um vídeo **sem o ativo que retém**.

⚠️ **A base é pequena e está declarada:** 8 vídeos com curva, 7 picos, **3 examinados com a fala na
mão**. Confiança do analista: **0,5** — a mais baixa das três leis desta leva. O padrão é
consistente e o mecanismo é plausível, mas *isto é hipótese forte, não fato medido em escala*. A
[ROT-94] e a [ROT-95] se apoiam em 389 e 5.077 observações; esta, em três. **Ela vale como régua de
pauta e não como veto** — nenhum gate reprova por ela até que a coleta recorrente de retenção dê
base para confirmá-la ou derrubá-la.

### ROT-97 · DATA DE DOCUMENTO SE LÊ NO DOCUMENTO — duas fontes secundárias concordando são, quase sempre, a mesma cópia (11/set/2026)

**Data de assinatura, partes, vigência, janela, número e cláusula de um acordo, tratado, memorando,
convenção, lei, decreto, resolução ou decisão só se sustentam no TEXTO do próprio documento**,
publicado por quem o assinou ou o guarda: a chancelaria ou o ministério signatário, o diário
oficial, o tribunal, o repositório de tratados. Imprensa e centro de estudos servem para ACHAR o
documento; não corroboram o atributo dele.

**O caso — `megabarragem-himalaia`, no ar desde 03/set/2026.** A narração diz que o que existe entre
China e Índia sobre o rio é *"um acordo magro, de dois mil e seis"*. O memorando de dados
hidrológicos foi assinado em Nova Déli em **14 de janeiro de 2002** — está escrito no fim do texto,
no site do Ministério das Relações Exteriores da Índia
(`https://www.mea.gov.in/Portal/LegalTreatiesDoc/CH02B2033.pdf`, lido em 11/set/2026). Segundo a
verificação da reportagem do site, 2006 é o ano do *mecanismo de especialistas* — outro instrumento
—, e a troca circula na imprensa indiana desde pelo menos 2017. Quem achou foi a redação do site,
abrindo a fonte primária que o roteiro não abriu.

**Por que o método deixou passar — e é por isso que isto é lei, e não só uma errata:**
- O `[FONTE:]` do roteiro dava duas secundárias ("YaleGlobal/South Asia Journal; ORF") e a auditoria
  marcou ✅. Pela régua de corroboração, **T2 com uma segunda independente basta** — e para atributo de
  documento não basta: quem escreve sobre um acordo sem tê-lo aberto repete quem citou antes, e
  concordância entre cópias é uma fonte só (a mesma lógica da agência republicada).
- As duas nem eram duas. A primeira entrou **sem URL**. A segunda — o artigo do ORF *"Don't rely on
  China for data on the Brahmaputra"* (18/mai/2018) — **não traz ano nenhum** para o memorando
  (conferido em 11/set/2026). O ano ganhou um dono que não o afirma: é a [ROT-62] na forma mais barata.
- Nenhum verificador abriu o texto. O roteiro existia desde 17/jul, antes de a bancada nascer
  (31/jul), e nunca foi julgado por ela ([SIS-03], [SIS-388]).

**A LEI, em três regras:**
1. **Para atributo de documento, só T1 corrobora — e T1 é o texto.** Duas T2 concordando não sobem
   o atributo a ✅. No máximo ⚠️, e o ⚠️ exige a formulação que sobrevive: sem o ano ("um acordo do
   começo dos anos 2000"), ou atribuída a quem o afirma.
2. **Sem texto publicado, o atributo não se crava.** Documento que não foi publicado (trégua verbal,
   memorando sigiloso) entra como EVENTO atribuído a quem o anunciou, e a `nota` da auditoria diz que
   o texto não existe publicamente — nunca como documento lido.
3. **Na auditoria, a linha do documento é `tier: T1` com a `url` do texto.** O `validar-roteiro.mjs`
   avisa (▲ ROT-97) quando uma afirmação sobre documento datado está fora de T1
   (`scripts/lib/atributo-documento.mjs`). Medido antes de ligar: nas 657 afirmações das 11 auditorias
   em formato de lista, o detector casa 4 documentos datados, e os 4 já estão em T1 com o texto lido —
   zero alarme. O `verificador-de-fatos` põe sempre essas afirmações na seleção e só dá CONFIRMADA com o
   texto na mão.

⚠️ É aviso, não reprovação: a detecção é por texto, e o gate não prova que a URL declarada é o
documento — isso é trabalho da lente de fatos. E não confunda com a [ROT-62]: lá o número está certo e
o dono está errado; aqui o dono é plausível e o número está errado, e só abrir o original pega.

*Escopo de correção: do presente para frente. O vídeo no ar não se refaz; a divergência foi registrada,
com as outras que a reportagem encontrou, em `docs/SPEC-ERRATAS.md`.*

---

### ROT-98 · O MOTOR BBC: o roteiro fala DO ASSUNTO, nunca DE SI MESMO (14/set/2026 — a lei-mãe da reforma)

**A decisão do dono, com as palavras dele:** *"Quero motor BBC."* · *"Quero que toda essa parte
arqueológica seja refeita sem dó."* · O vício nomeado: *"não gosto quando o roteiro vai tipo 'Mas
estamos fazendo as perguntas erradas…', ao invés de já ir explicando as coisas, é como se o
espectador nunca tivesse sabendo de tudo e o roteiro tivesse sempre dando umas voltas."* O que ele
quer: *"explicar bem, ter um bom storytelling, interligar pontos que fazem sentido, tudo com
palavras claras, de uma maneira 'normal', sem forçar intelectualidade… dar certas pinceladas que são
necessárias para o grande público."* Público 40+.

**O diagnóstico que motivou (medido em 13–14/set):** o vício não era criatividade do agente — era
OBEDIÊNCIA. A doutrina mandava "porta aberta a cada 90s–2min, nenhum bloco redondo, segure o
veredito" ([ROT-06], [ROT-05], [ROT-19a]); um roteiro de 21 min sob essa regra precisava de 12–14
portas, quase nenhum assunto tem 14 viradas verdadeiras, e o escritor fabricava volta retórica para
cumprir a cota. E a referência certa já estava medida havia 45 dias sem ser aplicada: a BBC News
Brasil **também** re-engancha a cada ~90s (74 perguntas em 15 vídeos, `knowledge/referencias/
roteiro-bbc.md` §1.4) — a diferença nunca foi ter ou não ter re-gancho:

| | a BBC faz | nós fazíamos |
|---|---|---|
| sobre o quê | pergunta sobre **o assunto** ("E o Brasil?") | "porta" sobre **a estrutura do vídeo** |
| o que acontece depois | **respondida no parágrafo seguinte** | fica aberta — "nunca redondo" |
| o que o locutor comenta | **o mundo** | o próprio roteiro |

**A LEI:** o roteiro fala do assunto, nunca de si mesmo. Toda pergunta aberta no corpo é respondida
no parágrafo seguinte; **bloco termina respondido**; o locutor nunca comenta o vídeo, a estrutura ou
a própria informação. A única espera legítima é o **gancho da abertura** ([ROT-93]/[ROT-94]): um, e
pago com informação nova. Supera a [ROT-06] por inteiro e a cláusula "porta aberta entre tópicos,
nunca redondo" da [ROT-05].
⚠️ **A cláusula "com parcela no meio" foi SUPERADA pela [ROT-107]** no mesmo dia (Mateus: *"acho isso
tosco, não tem que pagar dívida nenhuma… isso varia muito de tema pra tema"*): **onde o gancho se
paga é decisão do TEMA**, sem posição obrigatória. O resto desta lei segue inteiro. E a [ROT-105]
acrescenta o irmão do defeito que ela nomeia: o roteiro que não dá volta nenhuma e mesmo assim é
LISTA, porque cada bloco vem DEPOIS do anterior em vez de POR CAUSA dele.

**A prova comparada que fechou a decisão (14/set):** o `um-dia-luz-da-terra` — o roteiro que o dono
aprovou como o melhor recente do canal — executa este motor de ponta a ponta (pergunta respondida na
frase seguinte, número com régua colada, contrato de conteúdo cumprido na ordem); o
`terremotos-america-do-sul`, que ele reprovou (*"sambou muito, num mesmo ponto, não avançou, muito
desconexo"*), abre negando o senso comum e **segurando o mecanismo** — obedecendo à ROT-06.

**Consequência de arquitetura, e ela é parte da lei:** a doutrina que o ESCRITOR lê
(`knowledge/ROTEIRO-NARRACAO.md` + `knowledge/roteiro/`) é afirmativa, com modelo positivo, **sem ID
de lei e sem arqueologia** — se uma regra precisa de história para ser obedecida, a regra está mal
escrita. A história vive AQUI (as leis são o registro, e não se apagam) e nos módulos arquivados em
`docs/registro/2026-09-14-doutrina-roteiro-pre-bbc/`. Quem cita ID é o QC e a bancada, para rastrear
e auditar. E a referência de estilo do escritor é **uma só: a BBC News Brasil** (*"Vox não usaremos
mais como referência, apenas BBC News Brasil mesmo"*) — os dossiês de Vox/DW/Johnny Harris ficam no
repositório como histórico; as técnicas boas que vieram deles (escada de escala, desmonte que devolve
maravilha, espectador dentro do experimento) sobrevivem na doutrina SEM a marca, como instrução da
casa.

### ROT-99 · CONTRATO DE CONTEÚDO ≠ PROMESSA DE ESPERA ≠ ETIQUETA DE ÊNFASE (14/set/2026)

Três coisas diferentes que a doutrina havia achatado num veto só — e a trava cega proibia uma coisa
boa. A distinção, com o veredito de cada uma:

| o que é | exemplo | veredito |
|---|---|---|
| **contrato de conteúdo** | *"Hoje você vai entender como X, por que Y e o que Z"* | **PERMITIDO — e é bom.** Diz o que o vídeo entrega e entrega linearmente; orienta o espectador 40+ |
| **promessa de ESPERA** ([ROT-11], veto do dono) | *"essa resposta vem no fim do vídeo"* | **continua VETADO** — adia; é enrolação dita na cara |
| **etiqueta de ÊNFASE** ([ROT-45], veto do dono) | *"aqui está a mágica", "o pulo do gato"* | **continua VETADO** — aponta para a própria informação |

A diferença: o contrato **entrega**; a promessa de espera **adia**; a etiqueta **se autoelogia**. A
evidência que derrubou o veto ao contrato é a abertura do `um-dia-luz-da-terra` (aprovada pelo dono):
*"Hoje você vai entender como a NASA ainda consegue controlar essa máquina, por que ela está morrendo
aos poucos, e o que vai acontecer com ela depois que se calar pra sempre"* — não adia nada, não se
elogia, e cumpre na ordem. Supera em parte a cláusula 3 da [ROT-54] ("sem índice") e **corrige o
julgamento do §5.2(1) e da regra 8 do dossiê `roteiro-bbc.md`** ("nunca anuncie o índice — não
importar"), que está refutado pelo roteiro que o dono mais gostou. [ROT-11] e [ROT-45] seguem
intactas nos seus braços. O gate não muda: os padrões que ele reprova são os de espera, e "você vai
entender" já era protegido.

### ROT-100 · RE-GANCHO É PERGUNTA SOBRE O ASSUNTO, RESPONDIDA NA HORA — e abertura que nega entrega o mecanismo no mesmo fôlego (14/set/2026)

> ⚖️ **(a) calibrada pela [ROT-108]:** a pergunta seca é UM dos re-ganchos, não a natureza deles — e a
> bancada não reprova ausência de pergunta. Continua valendo: pergunta aberta é respondida na hora, e
> a (b) inteira.

**(a) O re-gancho da casa é o da referência medida:** a pergunta seca de 2 a 5 palavras sobre o
assunto (*"E o Brasil?" · "Esse dano tem volta?" · "Mas quem saiu vitorioso?"*), **respondida no
parágrafo seguinte** — mais dois legítimos: o caso curioso que volta como argumento (as vassouras
pintadas de preto que 120 palavras depois viram régua do orçamento; trivia que não volta se corta) e
o objeto que prova. A cadência de ~90s–2min da [ROT-19a] continua; o que esta lei recalibra é a
NATUREZA do re-gancho — pergunta pendurada, "porta" estrutural e promessa local **não contam e não
entram**. Pergunta aberta e não respondida é o defeito, não o recurso.

**(b) Abertura que NEGA o senso comum entrega o mecanismo no mesmo fôlego.** O caso reprovado pelo
dono (terremotos): *"O que decide isso não é a distância que você vê no mapa."* — diz o que NÃO é e
segura o que É; é o "dar voltas" na primeira dobra do vídeo. No motor BBC a mesma frase entrega:
*"…não é a distância que você vê no mapa — é a profundidade."* E o vídeo passa vinte minutos
explicando POR QUÊ, que é mais interessante que adivinhar. **Negar sem entregar é dar volta.**

### ROT-101 · PASSE QUE NÃO MELHORA, PARA — a bancada julga o DELTA, não só o texto (14/set/2026)

**O caso que a exige, medido no bucket:** o `terremotos-america-do-sul` passou por **3 bancadas e 5
passes de conserto** (Rev.6), terminou **FAIL nas 4 lentes** — e é o roteiro que o dono descreve
como *"sambou muito, não avançou, muito desconexo"*. O `um-dia-luz-da-terra`, que ele aprova, tem
**1 peça no bucket e nenhuma revisão**. Isto NÃO prova que revisão é ruim; prova que **o laço de
conserto, sem critério de parada, degrada em vez de melhorar** — cada passe que "some com os
defeitos leva a vida junto", e cinco passes que terminam em FAIL não são cinco melhorias: são cinco
chances de lixar a voz.

**A LEI, em três regras:**
1. **Regressão PARA o laço** (já implementado: `bancada-placar.mjs` sai 4 quando uma lente que era
   PASS vira FAIL ou a nota cai). Não se roda outro passe por cima de regressão — entrega-se o texto
   com os laudos residuais e **chama-se gente**.
2. **Estagnação também PARA:** rodada cujo consolidado segue FAIL **sem nenhuma lente melhorar**
   (nem veredito, nem nota) é o laço movendo o defeito de lugar. Mesmo destino: parar e escalar ao
   dono, nunca "mais um passe".
3. **Todo passe tem escopo travado** ([SIS-298]): a lista do que muda e a lista do que NÃO se toca
   (o `conserto-escopo.md` que o placar gera). Passe sem escopo não é conserto, é reescrita — e
   reescrita é onde a voz morre ([ROT-70]/[ROT-73]).

**O que esta lei NÃO crava:** o teto numérico de passes. A evidência atual (terremotos: melhora até
a 3ª rodada, resíduo novo da 4ª em diante; escopo travado fechou em 9 min sem derrubar nada) aponta
**1–2 passes** como faixa saudável — mas número é decisão do dono, registrada aqui quando ele a
tomar.

### ROT-102 · A FAIXA É 2.600–3.000 PALAVRAS, E O DONO DELA É O `novo.mjs` (decisão do Mateus, 31/jul/2026 — SUPERA a [ROT-24])

⚰️ **SUPERADA NO NÚMERO PELA [ROT-103] (14/set/2026, MADRUGADA SEGUINTE): a meta é 30 MINUTOS —
~3.900 palavras, default `3700-4100` no `novo.mjs`.** *"30 minutos é a meta for ever."*
**Não cite a ROT-102 para justificar tamanho: cite a [ROT-103].**

O que desta lei **sobrevive inteiro** é o mecanismo, e é por isso que ela não se apaga: **o dono do
número é `scripts/roteirizacao/novo.mjs`**, a flag `--palavras` da pauta sobrepõe, e volume extra só
se paga em SUBSTÂNCIA. O que morreu foi o valor e a régua do "tema enxuto mira o piso" — a [ROT-103]
a substitui por *não existe tema que justifique vídeo curto, existe tema cujo grafo o roteirista não
ampliou*.

⚠️ **E esta lápide é o registro de uma ironia útil:** a ROT-102 nasceu às 23h de 13/set para
consertar exatamente esta doença — uma decisão do dono que chegou ao código e nunca virou lei, e que
por 44 dias fez o crítico reprovar roteiro certo. **Seis horas depois ela própria envelheceu**, porque
o dono decidiu de novo na mesma madrugada. A diferença é que desta vez a lei acompanhou a decisão no
mesmo dia. *Doutrina não envelhece por descuido: envelhece porque o mundo anda. O defeito nunca foi
a regra ficar velha — foi ninguém marcar quando ficou.*

**Decisão do Mateus (31/jul/2026):** *"os roteiros tem que ter na base de 2.600-3.000 palavras"*
(literal preservado em `knowledge/ROTEIRO-NARRACAO.md:62`). **Padrão da casa = 2.600–3.000 palavras
(~20–23 min a ~130 ppm)**, escolhidas POR TEMA: tema denso/complexo mira o topo ~3.000, tema
direto/enxuto mira o piso ~2.600. Passar de 3.000 exige diretriz explícita dele.

**SUPERA a [ROT-24] no número** (2.100–2.500, de 18/jul), e com ela o ramo [ROT-13] (~2.000). O
resto da ROT-24 segue de pé e é o que importa: **NÃO inflar tema simples só pra bater cota** — isso
vira gordura, vetada pela [ROT-06]/[ROT-19]. O que preenche o alvo é SUBSTÂNCIA (mais uma camada da
investigação, o mecanismo aprofundado, o dado com consequência), nunca repetição — a [ROT-53] existe
porque volume extra é exatamente onde a gordura entra, e o piso de classe de fonte
(`knowledge/roteiro/PESQUISA-HONESTIDADE.md`) é o que torna as 3.000 palavras possíveis.

**O DONO DO NÚMERO É `scripts/roteirizacao/novo.mjs`** (`palavras: "2600-3000"`). Esta lei aponta
para lá em vez de manter uma segunda cópia: mudou lá, mudou para todo mundo. A flag `--palavras` da
pauta sobrepõe o default.

**⚠️ O ACHADO NÃO FOI O NÚMERO — FOI A LEI NUNCA TER SIDO ESCRITA.** A decisão de 31/jul chegou ao
código, aos drivers, aos módulos de conhecimento e até aos scripts operacionais da VM, e **nunca
virou lei**. Medido em 13/set/2026 contra `origin/main` `5549a4e44` — **44 dias depois da decisão**:

| onde | o que dizia | veredito |
|---|---|---|
| `scripts/roteirizacao/novo.mjs:25` (o DONO) | `2600-3000` | ✅ |
| `scripts/roteirizacao/validar-roteiro.mjs:255` (o gate) | fallback `2600-3000` | ✅ |
| `scripts/estudio/roteiro-driver.sh:131` | 2.600–3.000 | ✅ |
| `knowledge/ROTEIRO-NARRACAO.md:59` | 2.600–3.000 **citando (ROT-24)** | ⚠️ aponta para lei que o contradiz |
| `docs/SPEC-CICLO-DO-ROTEIRO.md:434` | 2.600–3.000 **citando (ROT-24)** | ⚠️ idem |
| `contratos/fila-roteirizacao.schema.json:21` | `2600-3000` **citando (ROT-24)** | ⚠️ idem |
| os 4 prompts de conserto em `out/_despacho/*.sh` (só na `estudio-top10`) | 2.600 | ✅ |
| **`seed/regras/ROT.md:281` — a LEI** | **2.100–2.500** | ⛔ |
| **`marcas/top10/agentes/critico-de-roteiro.md:112` — o CRÍTICO** | **2.100–2.500** | ⛔ |

`grep -c '2.600' seed/regras/ROT.md` devolvia **zero** no arquivo inteiro.

**O preço disso é atrito de produção real, e ele tem forma:** o escritor recebe 2.600–3.000, entrega
2.800, e o crítico que julga a entrega lê 2.100–2.500 na própria roupa e marca achado. **Um roteiro
CERTO reprovado por uma lei revogada** — e ninguém erra nada no caminho: cada agente obedece à
doutrina que leu. É a mesma doença da [FIN-47], do mesmo 31/jul/2026, onde a faixa de apresentador
tinha **cinco lugares com quatro valores vivos**; e é a [SIS-13] ("um assunto, um dono, um lugar")
cobrando a fatura pela segunda vez no mesmo dia de decisões.

**A REGRA QUE FICA, e ela é maior que a faixa:** *decisão do dono que muda um número só está
implantada quando a LEI foi reescrita.* Código atualizado, driver atualizado e módulo de
conhecimento atualizado **não substituem a lei** — porque é a lei que os agentes de julgamento
carregam na roupa, e porque quem for medir a divergência amanhã vai abrir `seed/regras/` primeiro.
Enquanto a lei disser o número velho, existe um juiz da casa reprovando quem obedeceu.

⚠️ **E integrar não é implantar.** Corrigir a roupa do crítico no `main` não muda o comportamento
dele: a release da VM precisa ser atualizada, senão o crítico segue cobrando 2.100–2.500 de um
roteiro escrito para 2.600–3.000. A conta só fecha na VM.

*Escopo de correção: do presente para frente. Roteiro já julgado não se rejulga.*

---

### ROT-103 · 30 MINUTOS É A META, SEMPRE — e quem os sustenta é o GRAFO, nunca o enchimento (14/set/2026)

**A decisão do dono, literal:** *"A meta é 30 sempre, e o roteirista tem que ampliar o grafo."* ·
*"30 minutos é a meta for ever."*

**A LEI:** a meta de duração é **30 minutos com apresentador**, que a ~130 ppm dá **~3.900 palavras
narradas**. O dono do número continua sendo `scripts/roteirizacao/novo.mjs` (default `3700-4100`), a
flag `--palavras` da pauta manda sobre ele, e a faixa é **ALVO COM FOLGA, não cota** — o gate abre
±10% em cima dela e a mensagem de reprovação diz o que fazer, não só que errou.

⚠️ **SUPERA a faixa 2.600–3.000 (~20–23 min, decisão de 31/jul/2026)**, que por sua vez já havia
superado a [ROT-24] (2.100–2.500) e a [ROT-13] (~2.000). Supera junto a régua "denso mira o topo,
enxuto mira o piso": **não existe mais tema que justifique vídeo curto — existe tema cujo grafo o
roteirista ainda não ampliou** ([ROT-104]).

**Os dois defeitos de tamanho NÃO são simétricos, e confundi-los manda consertar ao contrário:**

| achado | o que ele é de verdade | o conserto |
|---|---|---|
| roteiro **CURTO** | o grafo parou de andar | nomear o **nó adjacente** que ficou de fora |
| roteiro **INFLADO** | gordura: o mesmo nó contado de novo | nomear os **dois capítulos que são um** e fundi-los |

**Por que isto tinha de virar lei no mesmo dia em que o crítico já havia errado duas vezes:** a
rubrica do `critico-de-roteiro` cobrou 2.100–2.500 por **44 dias** depois de a faixa subir, e cobraria
2.600–3.000 contra a meta de 30 minutos se ninguém a reescrevesse. *Crítico que julga por número
decorado reprova o roteiro certo* — por isso a rubrica manda **ler a faixa da pauta**, nunca a
memória, e **nunca reprovar só por comprimento**.

**Onde foi aplicada:** `scripts/roteirizacao/novo.mjs` (default) · `validar-roteiro.mjs` (fallback +
as duas mensagens) · `knowledge/ROTEIRO-NARRACAO.md` · `roteirista-narracao.md` §4 ·
`critico-de-roteiro.md` §6 · `critico-de-clareza.md`.

### ROT-104 · O GRAFO SEMÂNTICO — o assunto não é o objeto do título, e capítulo novo é NÓ novo (14/set/2026)

> ⚖️ **Calibrada pela [ROT-109] no mesmo dia:** o grafo vale inteiro, mas **nó não é card** — o
> roteiro narrativo tem no máximo 5 tópicos, e cada tópico atravessa vários nós. Onde abaixo se lê
> "capítulo = nó" ou "sem teto", vale a [ROT-109].

**A decisão do dono, literal:** *"'Ampliar o leque' é o que eu quero. AMPLIAR o leque, como se o
roteiro fosse um grande 'grafo' imaginário que o roteirista vai conduzindo… tá falando da hidrelétrica
da China no início, pode depois citar um outro projeto chinês que tenha uma relação indireta com a
hidrelétrica, ou melhor puxar pra geopolítica e explicar geopoliticamente o que isso significa,
começar a entrar dentro do plano chinês, tipo, dá pra falar sobre a China em si, a agenda deles,
etc… Esse grafo não tem que ser restrito à HIDRELÉTRICA. Tem que ter esse entendimento 'semântico' do
assunto."* Outras direções que ele nomeou: *"poderia falar de outras hidrelétricas ao redor do mundo,
ou falar do porquê os chineses quiseram desenterrar esses projetos, falar da inteligência dos
engenheiros envolvidos"*.

**A LEI:** o objeto do título é a PORTA; o assunto é o **campo semântico** em volta dele. O roteiro é
um caminho por esse campo, e **cada capítulo é um NÓ NOVO — nunca outro ângulo do nó anterior**. Dois
capítulos seguidos que respondem à mesma pergunta são um capítulo só.

**A FRONTEIRA, confirmada por ele:** o grafo vai até onde o espectador ainda responderia *"isso é
sobre a hidrelétrica"*, e o fecho volta ao objeto do título, nomeado. Ele disse que pode ser mais
solto, mas *"ainda pendo"* a essa régua. **Na dúvida, pende para o solto:** a doença medida desta casa
é o grafo curto.

**POR QUE ISTO EXISTE, e é a razão de ser dos 30 minutos:** a referência entrega 10–12 min com **~30%
do texto falado em depoimento de entrevistado** (712 de 2.389 palavras no explicador mais puro,
`knowledge/referencias/roteiro-bbc.md`). Nós entregamos o triplo do tempo com **100% narração**. Onde
ela troca de BOCA, nós trocamos de NÓ. Ficar dentro do objeto do título rende oito a dez minutos de
coisa nova; o resto sai do grafo ou sai de repetição. **O grafo é o que substitui o depoimento.**

**O ANTIMODELO, medido:** `terremotos-america-do-sul`, reprovado pelo dono (*"sambou muito, num mesmo
ponto e não avançou, foi uma coisa muito desconexa"*). Dos 10 capítulos, **QUATRO SEGUIDOS** são o
mesmo nó — *"Cem quilômetros para baixo"*, *"O terremoto raso e o terremoto fundo"*, *"O golpe
espalhado em cone"*, *"O chão que treme por mais tempo"* — todos respondendo *"o que a profundidade
muda?"*. O grafo não anda, gira. Passou por **3 bancadas e 5 passes de conserto** e terminou FAIL nas
quatro lentes ([ROT-101]), porque **nenhum passe de conserto conserta um grafo que não andou**.

**O EXEMPLAR, publicado:** `megabarragem-himalaia` (03/set/2026, 259 mil views) — capítulos que ANDAM:
usina (escala, energia) → agenda energética do país → geografia do cânion e a queda → obra e risco
sísmico → o rio vira Brahmaputra e desce para a Índia → os medos da Índia e o delta de Bangladesh → o
acordo e o corte de dados → quem opera decide a hora → veredito. Sete dos nós **não são a
hidrelétrica**, e o espectador atravessa todos sem estranhar. É literalmente o exemplo que o dono deu,
e o canal já o publicou.

**A DOUTRINA DO ESCRITOR** (`STORYTELLING.md` §3) entrega as **seis direções** — o mecanismo · os
irmãos · a origem · a consequência rio abaixo · o plano maior · o terreno que resiste —, os três
testes de fronteira e a régua do nó novo. **São lápis, não cotas:** nenhuma direção é obrigatória e
nenhuma tem vez.

**⚰️ O QUE ESTA LEI SUPERA:** o teto de 4 tópicos da [ROT-22] em roteiro NARRATIVO (já calibrado pela
[ROT-80], e agora morto de vez — ele reprovaria o próprio exemplar que o dono nomeou); e a cláusula da
[ROT-44] que dava a **frase de reconexão** como sinal de enxerto — ela é o INSTRUMENTO do grafo
(*"Acompanha pra onde essa água vai."*). O que reprova é o nó que precisa de um PARÁGRAFO de
justificativa, ou que deixa o objeto do título significando exatamente o que significava antes. O teto
de 4 segue valendo **só no listão declarado** ([ROT-26]/[ROT-40]).

**Artefato novo:** `## Mapa de nós` no `roteiro-editor.md` — uma linha por capítulo, com a pergunta
que ele responde e a frase literal que faz a volta ao objeto. É escrevendo isso que o autor descobre,
antes de escrever quatro mil palavras, que dois capítulos dele são um. É contra esse literal que a
bancada julga o avanço.

### ROT-105 · A CONDUÇÃO — entre um bloco e o seguinte tem de caber um "e por isso", nunca só um "e também" (14/set/2026)

**O defeito, e por que ele passa pela bancada:** a [ROT-98] pega o roteiro que **dá volta** (não
responde, se pendura, fala de si). Ela é cega para o irmão, que é mais comum: o roteiro que responde
tudo na hora, não dá volta nenhuma, não fala de si — **e mesmo assim é LISTA**, porque cada bloco vem
DEPOIS do anterior e nunca POR CAUSA dele. O espectador desiste sem saber dizer por quê.

**A LEI:** leia as JUNTAS — a última frase de cada bloco com a primeira do seguinte, em pares — e veja
o que cabe entre as duas. **"E por isso" = condução. Só "e também" = enumeração.** Achado é GRAVE a
partir de três juntas seguidas sem causa.

**A RÉGUA POSITIVA, medida:** o capítulo do chip do `um-dia-luz-da-terra`, o trecho que o dono elogiou
(*"ficou bem boa"*), conduz por CAUSA — *"os três computadores dela somam só 68 kilobytes de memória.
E foi justamente esse pouco de memória que quase matou a sonda"* —, e reaproveita um fato de dois
blocos atrás como obstáculo: *"Como cada tentativa levava 48 horas entre o comando e a resposta, a
equipe passou quatro meses descartando hipóteses."*

**TRÊS PONTES REPROVAM, as três medidas em roteiro nosso:**
1. **O PLACAR — o locutor diz quanto falta da explicação.** O pior, porque se disfarça de organização:
   *"Isso responde metade da pergunta."* · *"O solo é metade dessa segunda resposta. A outra metade
   está em cima dele."* · *"O mecanismo está estabelecido: profundidade, solo e o que está construído
   em cima."* (`terremotos-america-do-sul`, três vezes no mesmo roteiro). É o índice do roteiro lido
   em voz alta — andaime de quem escreveu, não informação de quem assiste. **É veto duro, novo.**
2. **A ENUMERAÇÃO** — "Primeiro… Segundo…", ou parágrafos-item ligados só por "E": no
   `um-dia-luz-da-terra`, o bloco final enfileira quatro prazos (73 mil anos, 300 anos, 30 mil anos,
   40 mil anos) em que nenhum causa o seguinte. É o mesmo roteiro do capítulo do chip, e é onde ele
   desanda.
3. **O RECOMEÇO EM BRANCO** — o bloco abre como se o anterior não tivesse existido (*"Embaixo do
   nordeste da Colômbia existe um ponto que se repete em pouquíssimos lugares do planeta."*). Se a
   primeira frase funcionaria em qualquer posição do roteiro, ela não é condução.

**✅ MARCAR A PASSAGEM EM VOZ ALTA É PERMITIDO — decisão do dono, hoje:** *"marcar passagem em voz
alta: pode"*. O locutor pode dizer *"o que nos leva ao segundo ponto"*, e a referência medida faz isso
(`roteiro-bbc.md` §1.3). **A régua que separa da coisa vetada:** quem marca a passagem fala **do
assunto** e entra no nó novo no mesmo fôlego; o placar fala **do roteiro** e diz quanto falta. Isto
CALIBRA a [ROT-12] ("a transição se faz, não se anuncia"), que continua valendo para *anunciar a
manobra* ("precisamos voltar no tempo…").

**⚰️ E A CADÊNCIA DE ~90 s CAI COMO COTA.** A medição de `roteiro-bbc.md` §1.4 é DESCRITIVA e descreve
vídeos de 10–12 min com ~30% de depoimento; transportada para 30 min de narração ela pediria vinte
portas, e é a mesma doença que a [ROT-98] já matou uma vez (*"quase nenhum assunto tem 14 viradas
verdadeiras, e o escritor fabricava volta retórica para cumprir a cota"*). **O deserto se mede por
PERGUNTA VIVA na cabeça de quem ouve, não por cronômetro** — e pergunta seca em série, por relógio,
é tique de máquina. A [ROT-100] (a NATUREZA do re-gancho: pergunta sobre o assunto, respondida na
hora) continua inteira; o que cai é o intervalo. ⚖️ *Calibrado pela [ROT-108]: a natureza também deixou
de ser pergunta obrigatória — re-gancho é o que renova a pergunta viva, e a pergunta seca é um lápis.*

**⚠️ Ponte bem-feita não é nó novo.** *"Esse 7,4 fica mais claro ao lado de outros dois terremotos da
mesma região"* liga perfeitamente — e abre o segundo de quatro capítulos sobre profundidade. A junta
([ROT-105]) e o destino ([ROT-104]) se conferem separados. A [ROT-93] (coesão) garante que o texto
soe como UM texto; ela não garante que ele ANDE.

### ROT-106 · A FIGURA TEM DE INFORMAR — se o literal diz o mesmo ou mais, a figura é enfeite (14/set/2026)

**O feedback do Mateus, sobre o `um-dia-luz-da-terra` — roteiro PUBLICADO:** ❌ *"e o que vai acontecer
com ela depois que se calar pra sempre"* → *"esse trecho em si é BEM RUIM, horrível horrível… tipo
como caralhos uma máquina irracional SE CALA? É um vício de IA querer humanizar coisas muito toscas.
Tem sim situações que a gente humaniza coisas que não são humanas, mas tipo… Parece uma tentativa
desesperada de humanizar, e não algo natural que encaixa no contexto das falas/storytelling."*

**A LEI — e ela SUPERA o teste de remoção da [ROT-55]**, que era de UMA PONTA SÓ ("se não perdeu
informação, era decoração") e por isso ABSOLVIA a figura que informa MENOS que a palavra literal. São
**três resultados**, não dois:

| o literal informa… | veredito | exemplo |
|---|---|---|
| **MENOS** | a figura FICA — ela traduz mecanismo ou grandeza | *"a pesquisa é uma foto"* · *"Bogotá é a água do tanque"* |
| **IGUAL** | enfeite, sai | *"quem está com a mão na maçaneta"* = quem decide |
| **MAIS** | **a figura APAGOU UM FATO — sai sempre, achado GRAVE** | *"se calar pra sempre"* → *"parar de transmitir"* |

✅ *"Depois que ela parar de transmitir"* diz QUAL função acaba, e é **mais preciso E mais triste** que
a figura que o substituía.

**PERSONIFICAÇÃO SÓ COM FUNÇÃO.** Verbo de gente em sujeito que não é gente passa em dois casos: é o
nome corrente da coisa dentro do assunto (a placa *mergulha*, a parede *trabalha*, o chip *morreu*) ou
informa o que a literal não informa. Fora disso é o sotaque de máquina mais reconhecível. E não se
empilha: no mesmo parágrafo do Voyager o mesmo sensor virou *zumbido*, *escuta*, *ouvindo* e
*sussurro* — quatro nomes para uma coisa não são riqueza, são um personagem que a narração inventou.

**⚰️ CALIBRA a [ROT-33]** (âncoras e metáforas COM TETO): a cota some, a régua fica. Não se conta
quantas figuras cabem por conceito — se cada uma passa no teste, não incomodam; se nenhuma passa, uma
já é uma a mais. E **nunca se prescreve criar metáfora**: a própria [ROT-55] registra que *"a raiz
estava na doutrina, em dois lugares que MANDAVAM criar metáfora: a ROT-33…"*.

**POR QUE NÃO FOI PEGO — duas razões, e a segunda é a cara.**
1. `VOZ-ANTI-IA.md` não tinha a palavra "humanizar" em lugar nenhum (medido: 0 ocorrências); a §4
   cobria a figura que *recobre o que já era claro*, que é outro defeito.
2. **A bancada nunca leu este roteiro.** O `roteiros/_INDICE.md` registra o `um-dia-luz-da-terra` como
   `publicada` com **bancada "não rodou"**. A regra que teria pego a frase **já existia e é mais dura
   que esta** — *"figura nunca entra na promessa, na pergunta-fio nem em título"* —, e a frase está
   DENTRO do contrato de abertura. *Regra sem quem a aplique não é regra frouxa: é regra ausente.*
   ⚠️ O mesmo índice lista outros roteiros publicados sem bancada; fechar esse caminho é conserto de
   PROCESSO e está EM ABERTO para o dono.

**COMO SE VERIFICA:** `validar-roteiro.mjs` §5b **LISTA as candidatas** a personificação e devolve o
julgamento — contador não separa "a sonda se cala" de "a placa mergulha". Calibração RODADA em
14/set/2026 sobre os 59 roteiros de `knowledge/roteiros/`: a lista estreita acende em **2 arquivos, 4
ocorrências** (as quatro são o defeito, zero falso positivo); a versão larga
(ouvir/enxergar/dormir/morrer/respirar/escutar) acenderia em **51 de 59**, 193 ocorrências, quase
todas com sujeito humano. *Alarme falso é pior que gate nenhum.* O `critico-de-locucao` responde cada
candidata no laudo; candidata sem resposta é achado dele, não do gate.

**Escopo:** o vídeo está no ar. Isto é doutrina e calibre, não ordem de refação ([ROT-41]).

### ROT-107 · O QUE ERA COTA VIRA RÉGUA — o dono derruba cinco caixas da doutrina de roteiro (14/set/2026)

**A analogia que ele deu, e que rege a doutrina inteira:** *"Não quero limitar as pernas dele, mas
quero dar todos os lápis e ele pinta conforme o que ele acha que cabe pro desenho."*

**A LEI GERAL:** onde a doutrina cravava um NÚMERO, uma COTA ou uma OBRIGAÇÃO universal, passa a haver
um JULGAMENTO com a régua de como julgar. **Isto não é vaguidão — é critério explícito no lugar de
cota**, e trocar uma caixa por outra caixa é desobedecer a mesma ordem.

**⚰️ AS CINCO REJEIÇÕES LITERAIS, com o que MORRE e o que FICA:**

**1 · A dívida do vídeo com parcela paga no meio.** *"Acho isso tosco, não tem que pagar dívida
nenhuma — claro que tem que ter um gancho, mas isso varia muito de tema pra tema, tem que ter a
sensibilidade do tema, sabe? Não dá pra definir uma coisa quadrada aqui."*
**Morre:** a parcela obrigatória, a janela de 50–80% do texto, a declaração das três posições, e o
FAIL do gate quando o pagamento passava de 35% sem `- parcela:`. **Fica:** o **gancho**, que existe
sempre, abre na abertura (a janela de 78 palavras da [ROT-94] segue medida e vale) e tem de estar VIVO
o tempo todo. **Onde ele se paga é decisão do tema.** No dossiê, `- âncora:` e `- paga em:` continuam
obrigatórios; `- retomada:` (ex-`- parcela:`) é opcional e a ausência nunca reprova.
⚠️ A cláusula da [ROT-98] que dizia "uma, aberta na abertura, **com parcela no meio** e paga no fim"
fica superada nessa metade; o resto da [ROT-98] segue inteiro.

**2 · Números encaixotados.** *"Sobre números, também é bem relativo… Podem ter temas que a gente
queira explicar mais com números por fazer mais sentido, não pode ser uma coisa encaixotada."*
**Morre:** o "máximo ~2 números pesados por parágrafo" da [ROT-32] e o "quatro ou cinco cifras por
vídeo" (que era a frase do dono sobre UM roteiro medido, promovida a teto universal).
**Fica:** cada número chega **dimensionado** — régua colada (valor → o normal → a razão), comparação
ou imagem; cadeia de conversão com UM número-âncora por grandeza; nunca dois números quase-iguais para
a mesma grandeza no mesmo fôlego; magnitude quase-homófona com âncora de razão; ficha técnica fora da
locução. A decisão é de **DESTINO** (tela × boca), nunca de cota por parágrafo.
⚠️ A [ROT-65], mais nova que a [ROT-32], **já dizia** *"Gate: sem check duro (densidade aceitável
varia com o tema)"* — a casa tinha a regra certa e executava a mais velha.

**3 · "Tem de ter gente" como obrigação.** *"Sobre ter gente, TAMBÉM é relativo, não
necessariamente."*
**Morre:** a obrigação universal de rosto da [ROT-39]; o alcance de "todo roteiro" da [ROT-64]; o FAIL
do gate com menos de 3 falas entre aspas (que empurrava o autor a FABRICAR citação num roteiro de
mecanismo puro — o vício oposto ao que a regra queria matar); e o CENSO DE PRESENÇA como seção
obrigatória de laudo, que virou CENSO DE ATRIBUIÇÃO.
**Fica:** quando o assunto TEM gente, o roteiro chega perto dela e **ela fala** — fonte nomeada que
nunca abre a boca é fonte pela metade; o humano abre e o institucional explica; personagem que entra
volta. Quando não tem, o concreto vem do objeto que prova, da cena datada ou da consequência. O gate
avisa (não reprova) quando há ZERO falas, e a pergunta é se a APURAÇÃO tinha gente que ficou de fora.

**4 · Espelhar o especialista/depoimento da referência.** *"Não temos, de fato, então isso não devemos
nos espelhar."*
**Morre:** a tripla do explicador terminando OBRIGATORIAMENTE "na leitura de alguém que generaliza"; o
fecho importado na boca de uma fonte; "zero especialista nomeado" tratado como vício em si; a lista de
nomes do `verificador-de-fatos` gerando **passe de reforço** para enfiar gente no texto.
**Fica:** a **atribuição honesta**, que é outro defeito e continua GRAVE — quando o texto DIZ
"analistas apontam", a pessoa existe com nome, credencial e URL, ou a afirmação é rebaixada. Citar
pessoas é **permitido quando o roteiro pedir, nunca obrigatório**. A lista de nomes vira INSUMO de
atribuição, jamais cota de personagem. E o beat final que **reordena** (em vez de resumir) continua
sendo o nosso ([ROT-31]) — dito pela narração, sem depender de ninguém falar.

**5 · A assinatura da BBC.** *"É algo muito específico deles, isso nós não queremos herdar."*
**Morre:** a prescrição de importar a assinatura e a declaração de método coladas nela — nos três
lugares onde ela vivia em `knowledge/referencias/roteiro-bbc.md` (§5.2 item 1, §5.3 item A, regra 8 do
§6, esta última reforçada por um bloco datado do mesmo dia dizendo que "a declaração de método
continua valendo"). Nosso locutor não se apresenta, não diz de quantas fontes falou e não fala de si.
**Fica:** o que o espectador precisa saber sobre a origem de uma afirmação entra **colado à
afirmação**, na hora — e isso a `PESQUISA-HONESTIDADE` já cobra.

**E O CONTRATO DE ABERTURA CONTINUA LIVRE** (*"hoje você vai entender como X, por que Y"*): o
roteirista põe quando o tema pede. Não é obrigatório nem proibido — a [ROT-99] segue inteira, e o que
esta lei acrescenta é que ele também **não é cota**.

**As cotas menores que caem junto, todas de origem de agente** (nenhuma foi decisão do dono): a
cadência de re-gancho (→ [ROT-105]); "até ~4 interpelações por roteiro"; "tríade — uma por tópico";
"deixe DUAS seções acabarem em prosa comum"; "máximo dois poréns seguidos" ([ROT-30]); "um travessão
por frase"; "o número-âncora do vídeo é um só" (passa a ser **um por grandeza**); "os respiros no vale
~5-6" e "máx 2-3 números por item" no listão; "10 a 20 segundos, duas ou três frases" no SHOPPING
(onde "uma indicação só" É decisão do dono e FICA). Em todas, a régua que estava colada à cota já era
a resposta certa: *o defeito é a REGULARIDADE, não a ocorrência.*

**A régua de escrita que sai daqui, e vale para toda doutrina desta casa:** quando você for escrever
um número numa regra, pergunte se ele veio de uma DECISÃO do dono ou de uma MEDIÇÃO DESCRITIVA de
outra casa. Medição descritiva da referência **nunca vira cota prescritiva nossa** — foi assim que
"a BBC re-engancha a cada ~90s" (fato dela) virou "use um a cada minuto e meio" (ordem nossa), num
formato que tem o triplo da duração e nenhum depoimento.

⚠️ **O ID 102 está reservado.** Uma branch irmã (`worktree-doutrina-faixa-roteiro-20260914`) gravou um
`ROT-102` que enshrina a faixa 2.600–3.000 — **exatamente o que a [ROT-103] revoga**. As leis novas
começam em 103 para não colidir na integração; quando aquela branch entrar, a [ROT-102] nasce já
superada pela [ROT-103], e é assim que deve ficar marcada.

### ROT-108 · A BANCADA JULGA A ESCOLHA, NUNCA A PRESENÇA — técnica é lápis, e re-gancho não é pergunta por natureza (14/set/2026)

**A decisão, em palavras do dono:** *"Não quero limitar as pernas dele, mas quero dar todos os lápis e
ele pinta conforme o que ele acha que cabe pro desenho"* ([ROT-107], ditada nesta frente) — e o
recorte que ele repetiu no mesmo dia, sobre o estilo BBC: *"sem engessar nosso motor ao ponto dele ser
obrigado a fazer perguntas onde não cabe, forçando algo só pra cumprir meta. O que eu quero são opções
de VÁRIOS LÁPIS DE COR pro nosso roteirista, e na hora da criação ele decide quais cores usar."*

**O que estava errado, medido no que os agentes recebem:** a [ROT-107] trocou cotas por régua, mas a
NATUREZA do re-gancho ficou cravada — a [ROT-100] se intitula *"re-gancho é pergunta sobre o
assunto"*, a [ROT-105] declarou que essa natureza *"continua inteira"*, e a roupa do
`critico-de-clareza` endureceu para *"o re-gancho é **sempre** uma pergunta"*. Um crítico com essa
régua reprova capítulo que se sustenta por causa, por caso ou por objeto — e o escritor aprende a
enfiar pergunta. E o dossiê da BBC, lido por quatro agentes, terminava em *"AS 10 REGRAS
BBC-YOUTUBE"*, com imperativos como *"vire de bloco com uma pergunta de duas a cinco palavras"*.

**A LEI:**

1. **Técnica é lápis, e o lugar dos lápis é um só: `knowledge/roteiro/REPERTORIO.md`.** Cada técnica
   diz o que faz, quando serve e **quando não serve**. Nenhuma é obrigatória, nenhuma tem cota,
   nenhuma tem vez. Módulo, roupa ou prompt que prescreva uma técnica como obrigação ("abra com…",
   "vire de bloco com…", "todo X tem Y") está errado e se reescreve como lápis.
2. **Re-gancho não é pergunta por natureza.** O que mantém o espectador é uma pergunta VIVA na
   cabeça dele — e ela se renova de vários jeitos: a pergunta seca, o fato que vira causa, o caso que
   reacende, o objeto que prova. **Calibra a [ROT-100](a)** e a frase da [ROT-105] que a declarava
   inteira. O que da [ROT-100] fica intacto: **pergunta que o texto abre é respondida na hora;
   pergunta pendurada é defeito** — e a [ROT-100](b), a abertura que nega entrega o mecanismo.
3. **A bancada julga a ESCOLHA, nunca a PRESENÇA.** Não é achado a ausência de um lápis ("faltou
   pergunta", "faltou cena na abertura", "faltou gente"). É achado, e só estes três:
   - **o lápis FORÇADO** — usado onde o "não serve" dele está presente; o laudo **cita o sinal**;
   - **o COMPASSO** — o mesmo lápis em toda junta, ou todos em fila para variar;
   - **a invariante violada** — o roteiro falando de si, o grafo parado, a atribuição desonesta, a
     voz de máquina (os módulos donos continuam valendo).
4. **Referência descritiva não entra no input do agente como instrução.** A dissecação da BBC é
   registro de quem mantém a doutrina; o que dela serve está no repertório, reescrito como lápis.

**Como se verifica:** `node scripts/roteirizacao/censo-input-roteiro.mjs` mede o que cada agente do
roteiro recebe e acusa cota revogada viva; o laudo da bancada que reprovar por ausência de técnica
contradiz esta lei.

### ROT-109 · NO MÁXIMO 5 TÓPICOS POR ROTEIRO — o grafo anda DENTRO do tópico, e nó não é card (Mateus, 14/set/2026 — calibra a [ROT-104] e a [ROT-80])

**A decisão do dono, literal** (lendo o roteiro-teste do `supervulcao-napoles`, que saiu com 14
capítulos): *"por que 14 funcking capítulos? Eu tinha definido anteriormente que o limite máximo
seriam de 4-5 tópicos, no máximo, por roteiro."*

**A LEI:** roteiro NARRATIVO tem **no máximo 5 tópicos** (cards em negrito), fora `[INTRODUÇÃO]` e
`**ENCERRAMENTO**`. O normal é **4 ou 5**; 3 é o piso. O gate `validar-roteiro.mjs` **reprova acima
de 5**. O listão declarado ([ROT-26]) segue com a faixa própria dele.

**O GRAFO NÃO ENCOLHE — ele anda DENTRO do tópico.** A [ROT-104] continua inteira no que diz sobre o
assunto: o objeto do título é a porta, o campo semântico em volta é o vídeo, e os trinta minutos
([ROT-103]) se pagam andando por nós novos. O que esta lei muda é a EMBALAGEM: **nó não é card.**

- **Nó** é a unidade do grafo: uma pergunta nova na cabeça do espectador.
- **Tópico** é um TRECHO do caminho: os nós vizinhos que respondem a uma pergunta maior, juntos. Num
  roteiro de 30 minutos, cada tópico costuma atravessar **dois a quatro nós**.
- **Entre nós do mesmo tópico, a passagem é FALADA**, não um card: a frase de volta ("Acompanha pra
  onde essa água vai."), o "e por isso" da [ROT-105], os lápis de `REPERTORIO.md → PASSAR`. É ela que
  faz o pequeno reset de atenção que a [ROT-80] pedia ao card.

**Card continua sendo contrato** ([ROT-80]): o título promete o trecho, e a primeira parcela dessa
promessa chega logo depois dele, não quatro minutos adiante. Título de tópico que só cobre o primeiro
nó mente sobre os outros; o título certo nomeia a pergunta maior que o trecho inteiro responde.

**A régua contra o giro fica, e fica mais dura:** dois tópicos que respondem à mesma pergunta são um
só ([ROT-104], antimodelo `terremotos-america-do-sul`). E, dentro do tópico, dois nós que respondem à
mesma pergunta são um nó contado duas vezes — o giro que o card deixava à vista agora se esconde no
meio do bloco, e é ali que a bancada o procura.

**O EXEMPLAR, reembalado:** os nove nós do `megabarragem-himalaia` cabem em quatro tópicos sem perder
um passo — *a usina e o plano chinês* (escala · agenda) → *o lugar mais difícil da Terra para fazer
isso* (cânion · tectônica) → *para onde essa água vai* (Brahmaputra · os medos da Índia · o delta) →
*quem decide quando a água passa* (o acordo magro · a represa-resposta · o veredito). O caminho é o
mesmo; o espectador vê quatro portas em vez de nove.

**O artefato muda junto:** o `## Mapa de nós` do `roteiro-editor.md` passa a ser **agrupado por
tópico** — o cabeçalho de cada tópico com a pergunta maior, e embaixo os nós dele, cada um com a
pergunta e a frase literal de volta. É escrevendo isso que o autor descobre que dois tópicos são um,
ou que um tópico ficou com um nó só e é magro demais para existir sozinho.

**⚖️ O QUE ESTA LEI CALIBRA:** a [ROT-104] na frase "capítulo novo é NÓ novo" e no "sem teto em
narrativa" (o grafo fica, o card por nó sai); a [ROT-80] no "o número de cards segue a necessidade" em
narrativa (o contrato do card fica, o número livre sai); e restaura, com teto 5, a [ROT-22] que a
[ROT-104] tinha dado como morta fora do listão. **O erro de origem foi desta mesma frente**, em
14/set/2026: ao escrever o grafo, tratei o teto de tópicos como obstáculo ao grafo, quando o grafo
cabia dentro dele — e o roteirista obedeceu, com catorze cards.
