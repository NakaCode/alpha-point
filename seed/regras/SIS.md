> **[porte Regie]** Origem: `top10-estudio/seed/regras/SIS.md`, commit `4afda12` (17/09/2026), FILTRADO em 23/09/2026.
> **Medido:** o estúdio tem 506 leis SIS. **323 valem num PC local** e vieram com o texto intacto;
> **178 são infra do Top10** (VM, bucket, Mac, launchd/systemd, cascata de contas, frota, fila, cota, despacho 24/7)
> e **5 só existem com apresentador filmado**. As cortadas estão no APÊNDICE, por ID, com o motivo: se um agente citar
> uma lei que não está aqui, ela está lá — não a invente, e não aplique a infra que ela descreve.
> Critério: contagem de termos de infra no título e no corpo da lei, e revisão lei a lei nos casos de fronteira
> (67 decididas na revisão). Lei que usa infra só como EXEMPLO de uma lição de ofício ficou.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> Comandos de shell citados (`pgrep`, `setsid`, `| tail`, `grep -c`) são Linux/macOS; no Windows vale o princípio.
> Onde o texto diz «o Mateus decide», leia «o dono do canal decide». Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> E-mails de conta e caminhos pessoais do Top10 viraram `<e-mail>` e `<usuário>`.

# SIS — sistema e processo

> Leis vigentes deste domínio. **A de número MAIOR vence** quando duas se cruzarem.
> Citação legada (número solto, sem prefixo) → `seed/DE-PARA-LEIS.md`.
> ⚠️ Leia TAMBÉM `SIS.md` — são as regras transversais que valem em todo ofício.

---

**SIS-03.** LEI NOVA RE-JULGA O BACKLOG "JÁ VALIDADO" — PASS ANTIGO NÃO É PASSE VITALÍCIO (processo, 15/jul). Quando uma
   lei nasce (ex.: 86–89 de retenção, 14/jul), TODO roteiro/artefato que passou no gate ANTES dela está com selo
   vencido — o "roteirizado ✓" só vale contra a régua da data em que rodou. Antes de mandar pro Bôco gravar um
   roteiro validado numa data anterior a uma lei relevante, RE-PASSAR pelo gate + crítico-de-roteiro atualizados.
   Caso canônico: acre/itaipu/galáxia/quasares (validados 12–13/jul) reprovaram/ressalvaram na re-conferência de
   retenção — cold open fraco em 3 de 4 e packaging (ROT-18) ausente nos 4, tudo invisível ao validar-roteiro da
   época. Corolário: ao destilar uma lei que altera uma rubrica de agente, ATUALIZAR o agente-raiz na mesma tacada
   (o critico-de-roteiro só ganhou a 6ª lente "Retenção/packaging" nesta re-conferência, não em 14/jul) — senão a
   lei existe no papel mas não é aplicada por quem julga.

**SIS-05.** VARREDURA MECÂNICA NÃO SUBSTITUI A BANCADA VISUAL — E FERRAMENTA COM CONTRATO DE ENTRADA ERRADO DÁ
   FALSO-VERDE CALADO (19/jul). O `_audit-til.mjs` lê a lista de arquivos do STDIN (`ls ... | node`); passei
   DIRETÓRIO como argumento → auditou ZERO arquivos e imprimiu "0 afetados de 0 candidatos" = verde falso. Só a
   bancada `qc-visual` (olhando frames) pegou "OBSERVAÇÓES"/"BILHÁO" (til→agudo, weight:700 na zona 600–749 do
   bug da Neue Haas Bold) em 2 cenas do buracos que a regra escrita não impediu. FIXES DE RAIZ: (a) gate do til
   virou passo 2b OBRIGATÓRIO do protocolo do editor-de-arte (pipe por stdin, 0 afetados pra fechar cena);
   (b) ao usar QUALQUER gate, confira o contrato de entrada ("0 de 0 candidatos" = não auditou NADA, suspeite);
   (c) aprovação de vídeo = bancada visual nas cenas (shots início/meio/fim + folhas de contato + gates), não
   só gates — os 3 QCs de 19/jul (terras 61, frio 69, buracos 53 cenas) acharam 11 problemas reais que os
   gates mecânicos não viram: sinal de menos ausente no número-herói (s09 frio), data errada (1921→1915
   Relatividade), clipping de borda no pico do push-in (s13/s16/s34 terras), crédito obscurecido (s62), til
   quebrado (s17/s59 buracos). Bancada nos 3 vídeos custou ~740k tokens e salvou 11 defeitos de ir pro ar.
   **CASO NOVO (07/ago/2026, QC do `especies-humanas`) — e a resposta que faltava.** O `qc-src-existe`
   lia só `argv[2]`: chamado como todo gate irmão aceita (`.../graphics/*.html`, que o shell expande
   em 25 caminhos), media o PRIMEIRO e imprimia `✓ src-existe OK — 1 cena(s)`. Vinte e quatro cenas
   passaram sem ninguém olhar. A alínea (b) desta lei — *"confira o contrato de entrada, suspeite do
   número"* — estava escrita desde 19/jul e não impediu nada, porque **depende de alguém desconfiar
   de um "✓"**. Regra que só funciona se a pessoa lembrar é regra morta ([SIS-124]: a ferramenta
   segura tem de ser a mais barata de usar). O conserto foi na FERRAMENTA, não no leitor: o gate
   passou a aceitar a lista (`135aa8b`), e o `check-overlap` já mostrava o outro caminho válido —
   **morrer alto** no argumento que não entende. Terceiro gate da mesma família: o
   `qc-fora-do-quadro` dava verde falso ao receber uma PASTA (01/ago). *Quando três ferramentas
   erram pelo contrato de entrada, o defeito não é de quem chama.*

**SIS-06.** LEI NOVA SÓ NASCE DEPOIS DE PROCURAR A QUE JÁ EXISTE — E LEI VIOLADA SE CONSERTA NA FONTE, NÃO SE
   REESCREVE (Mateus, 24/jul: *"Pode ser que eu repita alguma lei, e ela já exista — neste caso o nosso agente
   observador tem que ir e corrigir na fonte e ver o que aconteceu e por que a lei não foi respeitada. Pensar de
   forma inteligente e não só como um agregado de contexto que só incha e não se ajusta."*). A rotina, na ordem:
   **(1) PROCURE.** Antes de escrever qualquer lei, busque a equivalente no domínio. O feedback quase sempre repete
   um erro já legislado — o que muda é o vídeo, não a regra.
   **(2) SE JÁ EXISTE, A PERGUNTA É OUTRA:** *por que a lei não foi respeitada?* São só três causas, e cada uma tem
   conserto próprio: **(a)** ela **não chegou** ao agente (não está na fatia que ele carrega → corrija a tabela de
   fatias em `seed/aprendizado.md`); **(b)** ela chegou mas **não é verificável** (não há gate → construa o gate,
   que é o conserto que dura); **(c)** ela está **escrita de forma ambígua** (→ reescreva a existente, sem criar
   número novo). Escrever a mesma lei duas vezes não conserta nenhuma das três, e ainda faz o agente carregar duas
   versões do mesmo texto.
   **(3) SÓ ENTÃO, se o caso é genuinamente novo, crie** — no domínio certo, com o próximo número livre.
   **O SISTEMA TAMBÉM RETRAI.** Lei absorvida por outra sai; lista paralela é fundida e encerrada com de-para.
   Medido em 24/jul: existiam **duas** listas de lei (a canônica e o `aprendizado.auto.md` destilado por LLM), que
   por desenho nunca se reconciliavam — e ao cruzá-las, **a maior parte do auto já era lei canônica**. O estúdio
   pagava inferência para redescobrir o que já sabia, e dois agentes carregavam as duas versões da mesma regra.
   O `auto` foi absorvido (4 regras genuinamente novas viraram ARTE-49…52) e encerrado.

**SIS-09.** JUNTA COM LEITOR E SEM ESCRITOR É FEATURE QUE NÃO EXISTE — E DETECTAR NÃO É APLICAR (medido em
   24/jul/2026, ao construir `top10 pautar`; agente-raiz: quem desenha estação nova). O degrau `sugerida →
   aprovada` do ciclo da pauta parecia coberto por dois lados: `scripts/pautas/respostas.mjs` **detectava** a
   resposta do Mateus no WhatsApp (`A 1 3 5` = aprova) desde 12/jul e imprimia "comando de pauta detectado", e
   `scripts/roteirizacao/novo.mjs` **lia** `out/_fila-pautas.jsonl` como briefing do roteirista. Só que ninguém
   APLICAVA a resposta e ninguém ESCREVIA a fila: o executor era um "`top10 pautar` quando existir" citado em dois
   documentos, e o verbo nunca existiu. Resultado de 12 dias assim: toda pauta entrava no banco já como
   `roteirizada` (a curadoria da entrada não deixava rastro), 3 candidatas reais da caçada de 12/jul nunca chegaram
   a existir em lugar nenhum, e a única linha de fila escrita à mão divergiu do banco em silêncio (`ormuz` dizia
   "shortlist" na fila e estava `roteirizada` no banco). **As três regras que a correção deixou:** (1) toda junta
   se prova com o dado ATRAVESSANDO os dois lados — criar, aplicar, ver no painel e limpar; log de detecção é a
   pior forma de falso positivo, porque dá sensação de cobertura; (2) **decisão humana por ÍNDICE exige retrato
   congelado** — "A 1 3 5" só faz sentido contra a lista que a pessoa recebeu, então o envio grava
   `out/_pautas-shortlist.json` e a aplicação resolve os números CONTRA ELE (sem retrato, ou com resposta anterior
   ao retrato, não se aplica nada: aprovar a pauta errada é o sistema decidindo no lugar do dono); (3) **o canal de
   entrada tem porta única** — só a conversa DIRETA do Mateus decide pauta, porque a mesma caixa recebe o grupo do
   apresentador e lá um "A 1" de terceiro aprovaria em nome dele. O sistema NUNCA aprova sozinho; ele aplica.

**SIS-11.** DOIS AGENTES QUE PRODUZEM ARTEFATOS QUE PRECISAM CONCORDAR DIVERGEM EM SILÊNCIO ATÉ EXISTIR UM
   TERCEIRO ARTEFATO QUE OS LIGUE — E UM GATE QUE O COBRE. O `tradutor-de-narracao` escreve a voz e o
   `tradutor-de-tela` escreve a tela; nada obrigava as duas a usarem a MESMA palavra. Medido em 24/jul no piloto
   `asteroide-data-marcada`: a tela dizia `IMPACT VELOCITY` e a voz dizia *speed*; `PROBABILIDADE DE COLISÃO`
   virou `IMPACT PROBABILITY` com a voz dizendo *collision*. Nada estava "errado" isolado — só junto.
   • A ponte é um artefato DECLARADO com contrato (aqui `dub/glossario-<lang>.json` + `glossario-idioma`), não
     um acordo no prompt de cada um. Divergência legítima existe (a forma cheia colidia 689px² com o chip `×`),
     e por isso o glossário aceita `telaDiverge` **com motivo** — o que ele não aceita é divergência calada.
   • Corolário que vale para todo agente: **decisão que só aparece no relatório morre com a sessão.** Ou ela vira
     artefato no disco, ou o próximo agente não a conhece — e a inconsistência renasce na produção seguinte.

**SIS-13.** `git add` SELETIVO NÃO BASTA: `git commit` SEM CAMINHOS LEVA O ÍNDICE INTEIRO. A doutrina já mandava
   registrar seletivamente, e eu obedeci — `git add` com 3 arquivos nomeados. Mas outra sessão tinha `git mv`
   staged no mesmo índice, e o commit os levou junto: 6 arquivos de outra frente entraram num commit cuja
   mensagem falava de outra coisa. Aconteceu **duas vezes em 24/jul**, nos dois sentidos (varri o trabalho de um
   agente; outra sessão varreu o de outro).
   • A forma correta em árvore compartilhada é **`git commit -- <caminhos>`** (ou `git commit <caminhos>`), que
     ignora o resto do índice. `git add X && git commit` é seletivo só na primeira metade.
   • **Confira o que entrou, não o que você pediu**: `git show --stat` depois do commit. Foi só assim que o desvio
     apareceu — o comando não reclama, e o histórico fica plausível.
   • O estrago não é perder código (ele está versionado): é a **atribuição errada**, que faz o `git log` mentir
     sobre por que a mudança existe. E histórico compartilhado não se reescreve para consertar isso: registra-se.

**SIS-14.** PROCESSO QUE EXISTE NÃO É PROCESSO QUE TRABALHA — `kill(pid,0)` DÁ SUCESSO PARA CADÁVER. O
   despachante contava sessão viva com `process.kill(pid, 0)`, que só pergunta se o PID está na tabela. Um
   processo **zumbi** está. Medido em 24/jul na VM de produção: dois `[claude] <defunct>` — nascidos 26s depois
   de um boot, mortos na hora, nunca colhidos pelo pai — seguravam `opus 2/2` havia **11h40**. A produção inteira
   ficou parada por dois cadáveres, com o painel dizendo, confiante, que estava ocupada trabalhando. E um dos
   vídeos tinha a decupagem **concluída** desde então, sem ninguém registrar.
   • O teste tem duas armadilhas, não uma: o **zumbi** (estado `Z`/`X` no `ps` — existe, não roda) e o **PID
     reciclado** (depois de um reboot aquele número virou outro processo). Por isso a checagem lê estado *e*
     linha de comando: existe, não é zumbi, e **parece** o que despachamos.
   • Isto é o quarto caso do mesmo dia da MESMA doença — medir o que é fácil em vez do que importa: "carregado"
     por "funcionando" (SIS-10), `mtime` por "andou" (SIS-12), "a palavra apareceu" por "a conta bloqueou",
     "o PID existe" por "a sessão trabalha". A pergunta que pega todos: **este número muda quando o que me
     interessa muda?** Se muda por outro motivo, ou não muda quando deveria, é o número errado.

**SIS-15.** MODO SECO QUE ESCREVE É PIOR QUE NÃO TER MODO SECO — E SÓ SE PROVA COM CARIMBO ANTES E DEPOIS. O
   `--dry` do despachante protegia só o `spawn`: o enterro da sessão (apagar pidfile, avançar a fila, gravar
   cooldown) rodava igual. Quem pedia um *preview* mexia na produção. Em 24/jul um `--dry` meu avançou um vídeo
   de estação — o acerto foi por sorte (o trabalho estava mesmo concluído); o defeito é **poder acontecer**.
   • Quem oferece "só simular" está fazendo uma promessa de segurança, e é por causa dela que a pessoa roda o
     comando sem pensar. Promessa quebrada em silêncio é pior que promessa nunca feita.
   • Nem reescrever o MESMO conteúdo vale: regravar renova o `mtime`, e há vigia lá fora que lê carimbo como
     sinal de vida (SIS-12). Escrita idempotente ainda é escrita.
   • A prova do seco não é ler o código, é **medir**: `md5` e `mtime` antes e depois; iguais os dois, ou não é seco.

**SIS-16.** ÍNDICE SEM ALIMENTADOR APODRECE EM SILÊNCIO — E RESPONDE PLAUSÍVEL ENQUANTO APODRECE. O
   `acervo-top10/_index.jsonl` é a lista que o catalogador percorre para virar tópico consultável. Tinha 440
   vídeos, parava em **11/jul**, e ninguém o alimentava: o repo `conteudo/` inteiro tem UM script, e ele só LÊ.
   O índice fora construído uma vez e congelado. Nada gritou, porque a falha não produz erro — produz **resposta
   errada com cara de completa**: o gate anti-duplicata cego para o que o canal publicou nas últimas semanas,
   compilado sem poder reaproveitar material recente, e `acervo livres --horas=3` respondendo sobre um acervo
   velho sem dizer que é velho. Buraco que devolve resposta plausível é pior que buraco que dá erro.
   • **Todo derivado precisa de um dono declarado** que o mantém — e a pergunta que revela o órfão é
     "quem ESCREVE isto?", não "quem lê?". Um `grep` pelo nome do arquivo achando só leitores é o sintoma.
   • O conserto certo era **fechar o laço com o que já existe**, sem inferência nenhuma: toda entrega guarda
     `meta/words.json`, e dali sai id, data, duração e contagem de palavras — derivados, nunca digitados.
   • **Ordem sagrada ao escrever:** sobe o insumo → confere no destino → só então declara que existe. Índice
     apontando para transcrição que não subiu faz o consumidor achar o item, não achar o conteúdo, e contar
     falha — e um item quebrado no índice se repete a cada passada.
   ⚠️ E a armadilha que me pegou construindo isto: **`gsutil -q` não imprime nada quando dá certo**, e `""` é
   falso em JS — `if (!gs("cp", …))` lia cópia bem-sucedida como falha e pulava todos os 11. Sucesso mora no
   EXIT STATUS; a saída é outra pergunta. (Mesma armadilha derrubou uma verificação de entrega no mesmo dia.)

**SIS-19.** O GATE QUE PEGA "SAI 0 SEM TRABALHAR" TAMBÉM PODE VIRAR ALARME INSILENCIÁVEL — O VEREDITO IMPORTA
   TANTO QUANTO A DETECÇÃO. Depois de três agendamentos mortos-silenciosos num dia (coletor-youtube, vigia-de-ia,
   roteirizacao-watcher), o check 21 do doctor passou a ler o `LastExitStatus` REAL de cada label do manifesto —
   medição, não "está carregado?". Mas a primeira versão reprovava TUDO que saía ≠ 0, e dois problemas apareceram
   na hora de calibrar:
   • **Erro já ENDEREÇADO não reprova o gate, vira alerta.** O coletor-youtube espera reautenticação (ato humano,
     pendência 🔴 aberta). Reprovar o doctor por isso o deixa em FAIL até o humano agir — o alarme insilenciável
     que ensina a ignorar o alarme (a própria SIS-10). Rebaixa para alerta quando há pendência aberta que o cita.
   • **"Endereçado" tem de ser preciso, ou vira o falso oposto.** Casar por palavra solta rebaixou o vigia por
     engano: ele aparece na pendência porque o DIGEST dele é citado, não porque há conserto pendente. O teste
     estreitou para "LINHA DE TABELA de pendência com verbo de conserto" (reautenticar/pagar/aprovar), não
     menção de passagem. Medi as duas direções antes de fechar — rebaixar de menos deixa o gate insilenciável,
     rebaixar de mais esconde furo real.
   • **launchd guarda o exit do TIMER, não do seu run manual.** Consertei a cascata do vigia e ele seguia
     marcando 256 — porque o último disparo do timer foi com o código velho. Um `kickstart` do label materializa
     o exit novo; até lá, o gate mostra o estado real (velho), que é o certo a fazer.

**SIS-20.** BACKUP DE CÓPIA ÚNICA SE **FAZ**, NÃO SE PERGUNTA — E A DOUTRINA AFIRMAVA UM BACKUP QUE NÃO EXISTIA
   (Mateus, 25/jul: *"nem precisa me perguntar isso... isso é ÓBVIO igual 1+1 é 2"*, ao me ver perguntar se
   devia subir os 54 GB do compilado recém-renderizado que não tinham cópia). **A regra de conduta:** ao
   descobrir artefato caro em cópia única — render, master, mídia caçada, banco — **suba primeiro e relate
   depois**. Perguntar aqui não é cautela, é latência somada a um risco que já está correndo: não existe
   resposta *"não faça backup do trabalho insubstituível"*. A fronteira que continua valendo é o **verbo**:
   confirmação é para o DESTRUTIVO (apagar, sobrescrever, publicar); o PROTETIVO se executa.
   ⚠️ **E o achado que motivou isto é pior que o comportamento:** o `CLAUDE.md` afirma que `out/` + `assets/` +
   `.env` têm backup em `gs://…/macbook-backup/`. Verifiquei: **não têm**. O que há lá é um tar do git de
   22/jul e três scripts de teste. **65 GB de produção existiam num disco só**, num Mac a 89% de uso — e a
   doutrina dizia que estavam protegidos. É a família dos mortos-silenciosos na forma mais cara: não é gate que
   falha, é uma afirmação de segurança que ninguém nunca conferiu, e cuja falsidade só apareceria no dia em que
   o disco morresse. **Corolário:** toda afirmação de "isto está salvo em X" é uma hipótese até alguém LISTAR X
   e ver o conteúdo — e ela merece um gate, porque é a única classe de erro cujo custo é o trabalho inteiro.
   **Como verificar:** `gsutil ls gs://…/macbook-backup/out/` tem de listar os projetos vivos; vazio ou só
   arquivo solto = a doutrina está mentindo.

**SIS-21.** LISTA COPIADA EM DOIS GATES **DIVERGE** — E O SEGUNDO FICA CEGO NO DIA EM QUE VOCÊ CONSERTA O
   PRIMEIRO (25/jul, medido). A lista de tags que podem carregar texto na tela morava duplicada dentro do
   `qc-carga` e do `qc-pais-bandeira`. Consertei a do `qc-carga` (faltavam `b,strong,i,em`) e **no mesmo dia** o
   `qc-pais-bandeira` declarou "nenhum nome de país na tela" numa cena com **BAHREIN** escrito dentro de um
   `<b>`. Mesmo ponto cego, um consertado e o outro não — porque nada ligava os dois.
   **O MECANISMO DA CEGUEIRA, que é o que torna isto grave:** os gates descartam um elemento cujo filho tem
   texto (a regra anti-dupla-contagem). Se a tag do filho não está na lista, ela nunca é visitada — e o texto
   **some das duas pontas**. `<p>Gastou <b>46,5 bi</b> em <small>2025</small></p>` contava como UM bloco numa
   tela que mostra três. Cada tag ausente **submede a cena inteira**, e um ranking construído sobre métrica
   cega ordena o nada.
   **A regra:** critério compartilhado por dois verificadores vira **módulo com dono único** (aqui,
   `scripts/lib/tags-texto.mjs`), importado pelos dois. Não é elegância — é a única forma de o conserto de
   hoje valer para o gate que alguém escrever amanhã.
   **Como verificar:** `grep -rn "querySelectorAll(\"div,span" scripts/` tem de voltar **vazio** — nenhum gate
   com lista própria.

**SIS-22.** GATE MAIS FROUXO QUE A DOUTRINA É DOUTRINA MORTA — MAS APERTAR SEM MEDIR É ALARME FALSO (25/jul).
   O ofício (`ROUPA-CENA.md`, ARTE-55) exige **≥1,5 s** de vida por bloco de texto — *"tem várias animações que
   ficaram MUITO rápidas, que é algo que eu NÃO gosto"*. O `qc-carga` só reprovava abaixo de **0,5 s**: três
   vezes mais frouxo que a regra que ele deveria proteger. Quem pegou foi um agente, na prática, não uma revisão.
   **A CORREÇÃO ÓBVIA ERA ERRADA.** Antes de subir o piso, medi as 25 cenas **douradas** (as que o Mateus
   aprovou): **8 delas — 32% — têm algum bloco abaixo de 1,5 s**, três abaixo de 1 s; a mediana é 2,1 s. Apertar
   o gate para 1,5 s reprovaria **um terço da própria régua de qualidade**. O piso do ofício descreve o RITMO
   GERAL da cena; não proíbe que um elemento isolado (dígito que troca, flash de confirmação) apareça rápido.
   **A SOLUÇÃO SÃO DOIS NÍVEIS**, e ela já tinha nome no estúdio: `0,5 s` **reprova** (piscou, ninguém leu) e
   `1,5 s` **avisa** (a doutrina pede mais fôlego — olhe se é deliberado). É a mesma estrutura do `qc-poluicao`:
   o teto pega o desastre, a mediana dourada aponta o alvo. Confundir os dois é o que fez cenas passarem no gate
   e serem reprovadas pelo Mateus olhando.
   **A REGRA GERAL:** ao descobrir que um gate está mais frouxo que a doutrina, **meça a régua antes de apertar**.
   Se apertar reprova o que já foi aprovado, o número não estava errado — faltava o segundo nível.
   **Como verificar:** `node scripts/qc-carga.mjs seed/examples/dourados/*/*.html --json` — reprovações têm de
   ser **zero**. Uma dourada reprovando significa que o gate saiu do lugar, não que a dourada piorou.

**SIS-23.** O FEEDBACK DO DONO TINHA **DUAS CAIXAS** E NINGUÉM CRUZAVA AS DUAS — 184 PEDIDOS PARADOS
   (25/jul, medido). A fila central `out/_feedback-queue.jsonl` tinha **297 entradas** com o cursor
   (`out/_feedback-cursor`) parado em **113**: 184 comentários do Mateus **nunca lidos por ninguém**, o mais
   antigo de 16/jul. E existia uma SEGUNDA caixa — `feedback-mateus.jsonl` **dentro de cada projeto** — que
   ninguém cruzava com a primeira. Foi lá que ficaram parados quatro dias pedidos como *"@10.6s o nome
   'sáfico' ficou MUITO pouco tempo. REFAÇA … pelo amor de deus"*.
   **DUAS ENTRADAS PARA A MESMA COISA É UMA ENTRADA ESQUECIDA** — a regra do "um assunto, um dono, um lugar"
   vale para filas de trabalho tanto quanto para doutrina.
   **A SEGUNDA METADE DO CONSERTO É SEPARAR O ACIONÁVEL DO OBSOLETO.** Dos 241 pedidos reais somando as duas
   caixas, **131 eram sobre vídeo JÁ NO AR** — e para esses a doutrina é clara: *erro no que já foi entregue
   obriga a CRAVAR, não a refazer*. Reprocessar o que já saiu gasta inferência e não muda nada para quem já
   viu; o que vale é destilar a lei e corrigir o agente que errou. Sem essa separação a fila parece três vezes
   maior do que é, e o efeito prático é a paralisia: ninguém sabe por onde começar, então ninguém começa.
   **NÃO AVANCE O CURSOR SEM TER FEITO O TRABALHO** — mover o marcador é apagar o pedido.
   **Como verificar:** `node scripts/db/feedback.mjs --triar` (por projeto: `--proj=<slug>`) — lê as duas
   caixas, cruza com o registro de entregas para saber o que já foi ao ar, e devolve só o que ainda vale
   consertar. ⚰️ *Era `scripts/feedback-pendente.mjs` até 13/ago/2026, quando ele foi aposentado para
   `arquivo-morto/2026-08-13-capacidade-orfa/` com a lógica portada antes de mover. A linha continuou
   mandando rodá-lo, e quem obedecesse recebia erro de módulo — régua morta é o defeito que o `doctor`
   existe para reprovar, e ela sobreviveu aqui porque a aposentadoria fez o `grep` no código e não na
   doutrina.*

**SIS-24.** QUANDO O MEDIDOR MUDA, A RÉGUA MUDA JUNTO — SENÃO VOCÊ PERSEGUE UM NÚMERO QUE NEM A
   REFERÊNCIA ALCANÇA (25/jul, medido). Os alvos do `qc-poluicao` (mediana **4** blocos de texto, **0,32**
   estreias/s) foram medidos com um `qc-carga` que era **cego** para `<b>`, `<small>` e texto de
   pseudo-elemento. Depois de consertar os três pontos cegos, remedi as **mesmas 28 cenas douradas**: a
   mediana real é **5** e **0,36**. Se eu tivesse mantido a régua velha sobre o medidor novo, estaria pedindo
   aos agentes um alvo **mais apertado que os próprios dourados** — queimando inferência para "consertar" o
   que já é a referência de qualidade.
   **A REGRA:** toda régua derivada de medição carrega, implícita, a versão do medidor. Ao consertar o
   medidor, **remeça a régua na mesma tacada** — e diga de onde ela veio, para o próximo saber refazer.
   **E O ERRO ESPELHO EXISTE:** no mesmo dia descobri que o gate também media a **MAIS** — palavra animada
   letra a letra vira um `<span>` por caractere, e ele contava 9 blocos onde a tela mostra duas palavras.
   Medir a menos deixa passar caos; medir a mais **manda refazer cena que estava certa**, e esse custa
   inferência, que é o recurso caro. Um gate errado nas duas direções é igualmente perigoso.
   **Como verificar:** `node scripts/qc-carga.mjs seed/examples/dourados/*/*.html --json` — reprovações têm
   de ser **zero**, e a mediana dali é a régua que o `qc-poluicao` deve usar.

**SIS-25.** `process.exit()` COM STDOUT EM PIPE TRUNCA A SAÍDA **SEM ERRO NENHUM** (25/jul, medido).
   Quando o stdout é um terminal, a escrita é síncrona e `process.exit(0)` logo depois do `console.log`
   parece inofensivo. Quando é um **pipe** (`| node -e …`, `$(…)`, `> arquivo` lido por outro processo), a
   escrita vira assíncrona e o `exit` mata o processo **com o buffer pela metade**.
   **O QUE ACONTECE:** o JSON sai cortado no meio, sem aviso e com **código de saída 0**. Quem lê recebe
   "Unexpected end of JSON input" — ou, pior, um objeto que ainda é JSON válido e está **incompleto**, e aí
   ninguém percebe nada. Medido: a migração da fila de conserto leu **80 pedidos** do `feedback-pendente`,
   gravou **zero**, e imprimiu mensagem de sucesso.
   **A REGRA:** em script que emite dados (`--json`, listagem, qualquer coisa consumida por outro programa),
   **não chame `process.exit()` depois de escrever**. Deixe o processo terminar sozinho — o Node dá flush no
   encerramento natural. Se precisar de código de saída ≠ 0, use `process.exitCode = N` (que só age no fim)
   em vez de `process.exit(N)`.
   **Família:** é irmão de [REND-34] — as duas são "o programa disse que deu certo e não fez o trabalho". A
   pergunta que pega as duas é a mesma: *o artefato existe e está completo?*, nunca *o programa disse ok?*

### SIS-29 · Gerador que lê a própria saída tem de EXCLUIR o que ele escreve — e o gate mede o gerado, não a intenção
**O caso (26/jul):** `seed/regras/_TODAS.md` é a concatenação das leis por domínio, e existe "para
busca". Uma auditoria mediu: **20 leis atrás** dos domínios (ARTE 60/67, SIS 20/27, REND 29/33) e
**24 carimbos "ESTE ARQUIVO É GERADO" empilhados**, um por regeneração.
**Os dois defeitos, e são diferentes:**
1. **O atraso é de PRODUTO, não de token.** Quem busca ali acha a lei VELHA e conclui que a nova não
   existe — o agente segue a regra revogada achando que está em dia. E já tinha acontecido: em
   24/jul o arquivo estava 30 leis atrás e `scripts/regras-todas.mjs` foi escrito para matar isso.
   **Voltou em dois dias**, porque ninguém chamava o gerador. *Regra sem gate é regra morta*, e a
   cura é o gate — não a disciplina de quem escreve lei.
2. **O empilhamento é bug clássico de gerador que lê a própria saída.** O cabeçalho era definido
   como "tudo até o primeiro `## `", e o carimbo é escrito justamente nessa faixa: cada execução
   reabsorvia o carimbo anterior. **O que o gerador ESCREVE tem de ser excluído do que ele LÊ.**
**⚠️ E O GATE PRECISA SER TESTADO QUEBRANDO DE PROPÓSITO.** A primeira versão do check 22 usava
`readFileSync` num arquivo que importa `fs` como namespace: ela morria com `ReferenceError` dentro de
um `catch` mudo, e o doctor reportava **PASS**. Só apareceu porque estraguei o `_TODAS.md` de
propósito e o gate não reclamou. Um `catch` que engole erro de PROGRAMAÇÃO transforma verificação em
teatro — ausência de arquivo é condição prevista, erro de código vira achado.
**Como verificar:** `top10 doctor` (check 22) reprova quando qualquer domínio tem menos leis no
`_TODAS.md` que no `<DOM>.md`, ou quando há mais de um carimbo. Conserto: `node scripts/regras-todas.mjs`.

### SIS-30 · O briefing do subagente se MEDE no despacho, nunca se copia de um relatório
**Aconteceu em 26/jul, e o custo foi cota de Fable — o recurso escasso.** Despachei quatro
`editor-de-arte` para as "4 piores cenas" de um projeto usando os números de uma varredura de
poluição salva em log. O log era de ANTES do lote de conserto da madrugada. Dois agentes voltaram
com a mesma correção, cada um por conta própria:
- `japao-85-vs-china-hoje` — briefing dizia excesso **5,38 / 13 textos (REPROVA)**; ao chegar, o
  arquivo media **0,33 / 4 textos**, a 59ª mais limpa de 76. Já fora despoluída às 02:47.
- `israel-ira-assimetria` — briefing dizia **3,57 / 11 textos**; media **0,58 / 6 textos**. O
  cabeçalho do próprio HTML registrava uma "reforma anti-poluição" de 25/jul.
**O dano em cadeia:** isso também explica um veredito `sem-mudanca` do lote anterior que ficou
registrado como falha a investigar. O agente daquela vez provavelmente mediu o arquivo já reformado,
não encontrou o defeito descrito no briefing e não teve como provar a ausência. **O briefing errado
não só gasta cota: ele fabrica um falso negativo que vira dívida de investigação.**
**A regra:** todo despacho que cita um NÚMERO tem de gerar esse número na hora — o comando de medição
roda imediatamente antes de montar o prompt, e a saída vai para o prompt. Relatório salvo serve para
PRIORIZAR (que fila atacar), nunca para AFIRMAR (qual é o estado). Entre a varredura e o despacho
sempre cabe um conserto, e num estúdio que trabalha 24 h por dia esse intervalo é a norma.
**A contramedida do lado do agente**, que funcionou: o prompt manda re-medir ao chegar e reportar
ANTES → DEPOIS. Foi assim que os dois flagraram a divergência em vez de "consertar" o que já estava
bom. Quando o número medido desmentir o briefing, **o agente reporta a divergência e trabalha contra
o estado REAL** — nunca contra o número que recebeu.
**Como verificar:** no relatório do subagente, a coluna ANTES tem de bater com o briefing. Não
bateu = o despacho usou dado velho; refaça a medição antes de disparar a próxima leva.

### SIS-31 · Comando de verificação se CALIBRA contra um positivo conhecido antes de virar decisão
**Três vezes no mesmo turno, em 26/jul, um comando meu devolveu número errado e eu quase agi sobre
ele.** Não foram erros de raciocínio — foram erros de *instrumento*, e o instrumento não avisa.

| o que eu rodei | o que devolveu | a verdade |
|---|---|---|
| `pgrep -f "capturar-paralelo"` (nome do PAI) | "zero órfãos" | **9 processos** `capturar.mjs` vivos, o mais velho com 46 min |
| `awk '{print $5}'` sobre `ls -la` | "151 bytes" nos 4 subagentes do lote | **1,7 MB / 516 KB / 830 KB / 1,58 MB** — todos vivos |
| `find -newermt "-30 minutes"` (sintaxe GNU no BSD) | "0 arquivos escritos" | **19 cenas** escritas na última meia hora |

**O que os três têm em comum:** o comando rodou sem erro, devolveu um resultado plausível, e o
resultado dizia *"nada aqui"*. Vazio é a resposta mais perigosa que existe, porque é indistinguível
de *"não procurei certo"*. No caso do `awk` foi pior que vazio: um número **específico e idêntico**
para quatro arquivos diferentes — o tipo de coincidência que devia gritar, e passou.

**O custo real:** reportei ao dono "zero órfãos" (falso), quase matei os 4 subagentes do lote, com ~3 h de inferência
paga por achá-los mortos, e reportei "0 HTMLs escritos" três ciclos seguidos enquanto os agentes
entregavam — o que me levou a intervir num gargalo que talvez não existisse.

**A regra:** antes que a saída de um comando de verificação justifique uma AÇÃO (matar processo,
apagar arquivo, declarar pronto, declarar travado), rode o mesmo comando contra um caso que você
**sabe** que deve dar positivo. Se o positivo conhecido não aparece, o instrumento está errado — não
o mundo. Custa segundos e é a diferença entre medir e adivinhar com sotaque de medição.
**Dois hábitos que implementam isso:**
- **Confira com o mesmo padrão que agiu.** Matou por `X`? Confira por `X`, nunca por um prefixo mais
  estreito (foi o erro do `pgrep`).
- **Desconfie de zero e de números idênticos.** Zero pede um teste do instrumento; valores iguais
  para entradas diferentes quase sempre significam que você lê o campo errado.

**Corolário de plataforma** (irmão da nota em [REND-33]): `find`, `stat`, `date`, `sed -i`, `readlink`
e `pgrep` divergem entre macOS e Linux. Num estúdio que roda nos dois, verificação escrita para um SO
falha **em silêncio** no outro — e falha dizendo "nada encontrado", que é justamente a resposta que
não levanta suspeita. No macOS, `find -newer <arquivo-referência>` funciona; `-newermt "-30 minutes"`
não.

### SIS-32 · Arquivo com o NOME certo no destino pode ser de outra VERSÃO
**Quase perdi 12 GB de trabalho em 26/jul confiando numa contagem.** Ia liberar os 13 blocos do
composto do Jiang depois de subi-los ao bucket. Conferi: `13/13 blocos no bucket`. A contagem estava
**certa** e a conclusão estaria **errada** — havia 13 blocos lá, com os nomes exatos (`b000.mp4` …
`b012.mp4`), de uma **versão anterior** do compilado, de antes dos consertos de cena daquela noite.
**O que denunciou:** conferi tamanho arquivo a arquivo, e o `b011` remoto tinha **1.110.627.949 bytes
contra 900.565.941 locais** — *maior* no destino. Upload incompleto só produz arquivo MENOR; maior só
pode ser outro conteúdo. Um único arquivo remoto maior que o local é prova de versão divergente, não
de progresso.
**O desastre que não aconteceu:** apagar os 13 locais deixaria o disco limpo, o bucket "completo" com
os nomes certos, e o composto irremontável — descoberto semanas depois, por quem tentasse refazer.
**A regra, que é a doutrina de backup levada a sério:** *nome e contagem não provam identidade.* Antes
de apagar o original, a prova é **tamanho (ou hash) arquivo a arquivo**; num sincronizador, é a
**simulação (`rsync -n`) devolver VAZIO**. "Existe um arquivo com esse nome lá" é o começo da
verificação, nunca o fim.
**Por que morde justamente aqui:** o destino é um espelho de longa data. Todo projeto que já rodou
antes deixou artefato com o MESMO nome — e é exatamente nos projetos com histórico que a verificação
frouxa parece confirmar. Pasta de destino vazia falha de forma óbvia; pasta com a versão velha falha
de forma silenciosa e convincente.
**Como verificar:** `gsutil -m rsync -r -n <local> <remoto>` — qualquer linha `Would copy` significa
que aquele arquivo AINDA não está protegido, mesmo que exista um homônimo no destino.

### SIS-33 · `rm` não devolve espaço enquanto alguém tem o arquivo aberto — e esse alguém pode ser o dono
**Medido em 26/jul, com um encode de 2 h em risco.** O composto do segundo vídeo estava em 1,50 GB com
4009 de ~29.700 frames — projeção de **11,1 GB** contra **8,4 GB livres**. Faltavam 1,2 GB. Apaguei o
alvo óbvio (o composto do vídeo #1, 11,93 GB, já verificado byte a byte no bucket) e **o disco não
mudou: 8,3 GiB antes e depois.**
**A causa é clássica de Unix e passa despercebida:** `rm` remove a entrada de diretório, mas o espaço
só volta quando o **último descritor** é fechado. `lsof` mostrou **1 descritor aberto** — e era o
**QuickTime Player do Mateus**, de pé há **12h28**: ele tinha deixado o vídeo aberto para revisar
antes de dormir.
**A decisão que isso força:** matar o processo devolveria o espaço na hora, e **não era minha decisão
a tomar.** Janela aberta do dono é trabalho dele em curso, não recurso ocioso — a mesma regra que
vale para não trocar de ramo em árvore compartilhada. Liberei o que era MEU e re-obtenível (um master
decupado de 6,28 GB, com cópia verificada no bucket) e deixei a janela dele intacta.
**Duas consequências práticas que ninguém avisa:**
1. **Confira o espaço DEPOIS de apagar, não antes.** `rm` que não move o `df` significa descritor
   aberto — e a operação de limpeza silenciosamente não fez nada. Um script que apaga e segue em
   frente assumindo o espaço vai estourar mais adiante, longe da causa.
2. **Arquivo aberto e deletado ainda toca.** O vídeo continua rodando na janela do dono; quando ele
   fechar, o arquivo desaparece. Se isso acontecer, ele tem de ser avisado ANTES — por isso o ponteiro
   de re-obtenção precisa existir no diretório do projeto, não só na minha cabeça.
**Como verificar:** `lsof | grep <nome-do-arquivo>` depois de um `rm` que não liberou espaço. No
macOS, confira também `tmutil listlocalsnapshots /` — snapshots do APFS retêm espaço por conta
própria, e essa é a segunda causa mais comum de "apaguei e não liberou".

### SIS-34 · Arquivo DEGENERADO é pior que arquivo AUSENTE — o `else` do "sem dados" nunca roda
**O mesmo defeito derrubou TRÊS coisas em 26/jul, e em todas o arquivo existia.** O
`_blocos.json` do `homossexualidade-antiguidade` tinha **um único bloco** (`{n:0, nome:"00-intro",
titulos:[]}`) — o `master-blocos.mjs` deriva capítulo de silêncio no áudio bruto, não achou fronteira
de título, e devolveu o vídeo inteiro como um bloco. Consequências, cada uma num consumidor diferente:

| consumidor | o que fez com 1 bloco | resultado no laudo |
|---|---|---|
| `branding/overlays.mjs` | laço `i < length-1` → **0 iterações** | **0 de 6** transições (item 5) |
| `trilha/escolher.mjs` | leu "1 capítulo, 0–662s" → cold-open | **0 faixas**, `musica: []` (item 2) |
| o meu próprio fallback | guarda `!length` deu **falso** | não corrigiu nenhum dos dois |

**A regra:** todo consumidor de arquivo estruturado tem um **mínimo viável** — aqui, 2 blocos para
haver 1 fronteira. A guarda é `length < MÍNIMO`, nunca `!length`. E o ramo `else` escrito para "o
arquivo não existe" **nunca executa** quando o arquivo existe vazio de conteúdo útil: ele parece dado,
passa o `existsSync`, e entrega zero.
**O sintoma, que é fácil de reconhecer depois de ver uma vez:** o script **roda sem erro**, imprime um
resumo plausível (*"1 capítulo · 0 faixas"*, *"2 overlays"*) e produz nada. Ninguém investiga saída
bem-formatada.
**Corolário de arquitetura:** quando N consumidores leem o mesmo artefato derivado, o fallback tem de
estar em TODOS ou em NENHUM. Consertei o `overlays.mjs` e declarei resolvido; o `escolher.mjs`
continuou cego por mais três ciclos, e só apareceu porque o laudo mediu a trilha em silêncio.
**Como verificar:** para cada arquivo derivado que o pipeline consome, pergunte *"qual é o menor
conteúdo que ainda serve?"* e teste a guarda contra ele — não contra o arquivo vazio.

---

**SIS-35.** O BRIEFING QUE DIGITA UM COMANDO DE MEMÓRIA **ATROPELA A DOUTRINA CORRETA** — e o agente bom
me corrigiu, o ruim teria obedecido (26/jul/2026).

Despachei um `mapista` para consertar `taiwan-bloqueio-naval` e escrevi no briefing, entre as instruções de
validação: *"`node scripts/shot.mjs <html> <t>` em ≥4 instantes"*. **Errado.** Em cena de mapa o `shot.mjs`
stuba o loop de animação e fotografa **tile cru** — ele mente. O validador certo é `maprender.mjs`.

**E a doutrina já dizia, em TRÊS lugares:**

| arquivo | o que diz |
|---|---|
| `knowledge/ROUPA-CENA.md:56` | `# ⚠️ cena de MAPA: maprender.mjs, nunca shot.mjs` |
| `knowledge/CATALOGO-MODELOS.md:50` | "Validação: `scripts/maprender.mjs` (o `shot.mjs` fotografa tile cru)" |
| `.claude/agents/mapista.md:370` | a tabela de validação prescreve `maprender.mjs` |

O agente leu a doutrina, usou `maprender.mjs`, entregou certo **e me avisou do erro no relatório**. Ou
seja: a proteção funcionou por competência do agente, não por desenho do sistema. Um agente menos
criterioso teria obedecido a instrução mais específica e recente — a minha — e devolvido cena validada com
frames que mostram tile cru, passando em todos os gates.

**A regra:** quando eu escrevo um briefing, o comando que eu digito de memória vira a instrução MAIS
ESPECÍFICA que o agente vê, e por precedência ela vence a doutrina. Então:

- **O briefing nomeia o OBJETIVO e os GATES, não o comando.** "Valide os frames dos beats-chave e olhe cada
  PNG" é seguro; "rode `shot.mjs`" é uma aposta na minha memória.
- **Se o comando entra no briefing, ele sai da doutrina** — `grep` no documento, não da cabeça.
- **Quando eu não tenho certeza, digo isso**: *"use a ferramenta que a doutrina prescreve para o seu modo;
  confira em X"*. Transferir a resolução para quem tem o documento aberto é mais confiável que adivinhar.

**⚠️ Corolário que vale para todo orquestrador:** a autoridade do briefing é acidental, não merecida. Ele
é específico porque foi escrito agora, não porque está certo. Instrução recente derrota documento
versionado por precedência — e é exatamente aí que o erro de memória de quem despacha entra na produção
sem passar por nenhum gate.

---

**SIS-36.** ARQUIVAR UM SCRIPT ÓRFÃO PODE **ORFANAR A CAPACIDADE** QUE ELE ERA O ÚNICO A CHAMAR
(26/jul/2026, apurado a partir de uma lembrança do Mateus).

O Mateus pediu para eu apurar o `senna` novo contra o antigo, dizendo lembrar que **as cenas da versão
ANTIGA ficaram melhores**. Fui buscar a antiga e ela não está em `entregas/`, nem em `arquivo-morto/`, nem
no `out/_ENTREGAS.md` — o senna nunca foi publicado. O que existe é o `DONE.md` no espelho bruto de backup,
datado de **24/jun/2026**, e ele nomeia exatamente a diferença:

> *"Coletânea de fundo cinematográfico — Fundo = ~8 fotos reais do sujeito que TROCAM com a narração
> (crossfade+KenBurns), não 1 footage travado. Dedup por dHash perceptual (md5 do upscale muda toda vez)."*

Números medidos: antiga = **18 HTMLs / 16 cenas em 4K**. Nova = **56 HTMLs, 2 clipes renderizados, 6 mídias
repetidas e TODAS as 6 sem gancho declarado** ([ARTE-60]). A lembrança dele estava certa, e a causa é
estrutural.

**Os três arquivos da técnica CONTINUAM no repo** — `src/agent/cacador-coletanea.mjs`,
`scripts/templates/bg-coletanea.mjs`, `scripts/templates/cinema-sequencia.mjs`. O que morreu foi o acesso:

| arquivo | únicos chamadores vivos |
|---|---|
| `bg-coletanea.mjs` | **nenhum** — o único estava em `arquivo-morto/2026-07-scripts-orfaos/` |
| `cinema-sequencia.mjs` | `archive/era2-api/` (era morta) + um doc |
| `cacador-coletanea.mjs` | um doc + seu próprio helper `dhash.mjs` |

E arquivar aquele script **foi higiene correta**: `aplicar-bg-abertura.mjs` era uso único, com o caminho de
UMA cena hardcoded (`out/senna/graphics/abertura-imola.html`). Ele merecia sair. O que ninguém viu é que a
capacidade não tinha OUTRA porta — a técnica só era alcançável por aquele atalho.

**A regra:** antes de arquivar, o inventário não é do script, é do que ele **alcança sozinho**. A pergunta
é *"eu sou o único caminho para alguma coisa?"* — e, se sim, a coisa precisa de porta nova ANTES de o
atalho sair. Um `grep` reverso pelos imports do candidato responde isso em segundos.

**⚠️ Isto é a irmã da [FIN-41]**, e as duas juntas fecham a família: lá foi uma **proteção** que ficou no
caminho desativado (o `normalizar-timeline` só aceitava XML, e o XML morreu na FIN-33); aqui foi uma
**capacidade**. A diferença é o modo de falhar — proteção morta deixa defeito passar, capacidade morta faz
o trabalho sair pior sem ninguém saber por quê. Nenhuma das duas dá erro.

**O conserto que fiz:** a técnica ganhou porta na doutrina que todo `editor-de-arte` lê
(`knowledge/ROUPA-CENA.md` §2, com o import exato e quando aplicar), em vez de depender de alguém lembrar
que ela existe. **Fica pendente e é decisão do dono:** aplicar a coletânea às cenas do senna significa
mexer em 56 HTMLs de um vídeo com 2 clipes renderizados — é refazer arte, não polir.

---

**SIS-37.** ⚠️ **O VEREDITO DO AGENTE NÃO SUBSTITUI A PROVA DO ARTEFATO — e a MENÇÃO ao marcador não
é o marcador.** (27/jul/2026, achado ao ligar o motor 24/7.)

O despachante decidia se uma estação terminou com `/ESTACAO_CONCLUIDA/.test(log)` — um regex no corpo
do log. Só que o agente **bloqueado** escreve, com toda a honestidade, a frase *"não imprimo
`ESTACAO_CONCLUIDA`"* — e **a negação contém a string**. Em 23/jul o `a-galaxia-gigante-em-forma-de`
foi de `decupagem` para `pesquisa` exatamente assim: o log inteiro é o agente explicando que não
conseguiu sequer criar uma pasta, `out/<slug>/` nunca existiu, e a fila registrou o vídeo uma estação
à frente. A estação seguinte iria caçar mídia para um espelho inexistente.

**A regra, em três camadas:**
1. **Marcador é POSIÇÃO, não presença** — vale só como última linha não-vazia, sozinha. Prosa que fala
   do marcador é prosa.
2. **O artefato tem a palavra final, nas duas direções.** Sem marcador mas com artefato → concluída.
   **Com marcador e sem artefato → NÃO concluída.** A segunda é a que protege: sucesso declarado com
   trabalho ausente manda a próxima estação trabalhar sobre o vazio.
3. **Todo prompt de estação proíbe citar o marcador no corpo do texto.** Bloqueio se descreve em prosa.

*Um veredito que se escreve com a mesma palavra que o nega não é veredito, é coincidência de texto.*
Parente de [SIS-30] (medir no despacho, não confiar em log velho).

---

**SIS-39.** ⚠️ **"ISTO JÁ FOI FEITO?" PERGUNTA-SE AO REGISTRO, NUNCA AO BASELINE — baseline é memória
de processo e envelhece.** (27/jul/2026, defeito que eu mesmo introduzi e peguei em seguida.)

O scanner de gravações protegia-se de reprocessar vídeo pronto com um baseline `vistos` — carimbo por
SLUG, gravado em 18/jul. Dois modos de falhar, e os dois aconteceram:

- **Carimbou demais:** o `--seed` marcou 122 pautas de uma vez para pular o acervo legado, e junto
  engoliu a fila real. Nove dias varrendo, 122 pares achados, **zero enfileirados** — com o log
  dizendo "0 novo(s) enfileirado(s)", que se lê como "nada novo hoje".
- **Parou de casar:** quando a ponte pauta→slug entrou e os slugs viraram canônicos, os carimbos
  velhos deixaram de bater, e o scanner voltou a ver como *novos* vídeos que estão **no ar**.

**A regra:** o estado "já produzido" mora no REGISTRO do que existe (`out/_ENTREGAS.md`), não numa
lista de o-que-eu-já-vi. Consultar por slug **e** por código de pauta, porque o slug é derivado e o
código é a identidade estável. **E deduplicar sempre pelo código**, nunca pelo slug: em 27/jul quatro
gravações entraram em dobro na fila porque dois derivadores cortavam o título em 5 e 6 tokens.

*Memória de processo responde "eu já passei por aqui?". Só o registro responde "isto existe?".*

---

**SIS-41.** ⚠️ **BUSCA COM JANELA LIMITADA NUNCA DIZ "NÃO ACHEI" — ELA DEVOLVE O MELHOR DE DENTRO DA
JANELA, E ISSO TEM CARA DE RESULTADO** (27/jul, medido no `energia-escura`).
*(SIS-40 está reservada para a régua de completude id-a-id — ver HANDOFF de 27/jul.)*

O `corrigir-source-bruta.mjs` procurava o offset câmera×mic varrendo **±15 s cravados**. O offset real
daquela gravação era **16,38 s**. Estava **fora da janela por 1,4 s** — então o valor certo jamais
entrou na conta, e a busca fez o que toda busca faz: devolveu o melhor pico que existia lá dentro.
Saiu **−10,75 s, com pico absoluto 0,048** — ruído puro, um número inventado pela borda do intervalo.

O script até percebeu (`baixaConfianca: true`) e mesmo assim **muxou 45 GB** com o áudio deslocado
5,6 s, imprimindo *"Seguindo mesmo assim"*. O detector correto rodava no mesmo projeto, dois passos
adiante: o `_sync-corr.py` da decupagem achou **16,37 s com confiança 0,888** — porque correlaciona
por **FFT sobre o arquivo inteiro** (não tem janela para estourar) e compara **envelope de energia**
(imune à diferença de timbre entre lapela e câmera a 3 m, que é o que afundava o pico do outro).

**Três regras, em ordem de força:**

1. **Toda busca limitada precisa responder "a resposta cabia aqui?" antes de "qual é a resposta?".**
   Pico colado na borda do intervalo é sinal de janela curta, não de resultado — trate como falha de
   alcance e amplie, não como valor a usar. Isto vale muito além de áudio: intervalo de datas,
   paginação, top-N, faixa de busca binária. *Limiar de confiança não salva ninguém quando o valor
   certo nunca foi avaliado.*
2. **Dois scripts respondendo à mesma pergunta com métodos diferentes vão discordar — e o dia em que
   discordarem, quem estiver errado ganha por estar mais cedo no caminho.** Aqui os dois mediam
   "offset câmera×mic", com convenções de sinal OPOSTAS, e o pior rodava primeiro. A detecção agora
   tem um dono: o canônico; a correlação local ficou como rede para máquina sem numpy/scipy.
3. **Arquivo desalinhado é pior que arquivo ausente** (aplicação direta da [SIS-34]): a falta se
   investiga, o desalinhamento se propaga por toda a linha e só se denuncia na boca do apresentador,
   no produto final. O script agora **recusa muxar** quando nenhum método tem casamento firme —
   custa uma flag `--offset` manual, contra a produção inteira de um vídeo.

**Como verificar:** `sync-info.json` passou a gravar `metodo` (`envelope-xcorr` | `correlacao-amostra`
| `manual`). Se vier `correlacao-amostra` com `baixaConfianca: true`, o mux nem aconteceu.

---

**SIS-42.** ⚠️ **CONSERTAR RITMO É ATRASAR ELEMENTOS — E O WORD-LOCK PAGA A CONTA, PORQUE SÓ UM DOS
DOIS TEM GATE** (27/jul, medido no `planetas-algodao-doce`).

Dois critérios da casa puxam em direções opostas no mesmo parâmetro — o instante em que cada
elemento entra na tela:

- **`qc-carga` (RITMO)** reprova elementos demais entrando juntos. O conserto natural é **defasar**
  as entradas, empurrando-as para mais tarde. É determinístico, roda sempre, e barra o render.
- **word-lock** exige o elemento no **tempo exato da fala que o ancora**. Está escrito como
  INEGOCIÁVEL no código, é a lente 3 do `qc-visual` — e **não tem verificação nenhuma**.

O resultado está por escrito no diário da estação de QC deste vídeo, sem ninguém perceber a troca:
*"s11 — RITMO 5→4 (legenda ≈ seis centésimos **atrasada p/ 7,8 s**)"*, *"s17 — RITMO 5→3 (ondas
**defasadas p/ sub-beat 2,7/3,1 s**)"*. Quatro cenas consertadas, 56/56 aprovadas, e o vídeo entregue
com pelo menos uma cena (`s46-um-bilhao-anos`) em que o letreiro *"~1 BILHÃO DE ANOS"* aparece
**depois** de o apresentador ter dito a frase inteira.

**A regra:** quando um conserto move um parâmetro que outro critério também governa, o segundo
critério tem de ser **re-verificado e o relatório tem de dizer que foi**. Aqui: todo elemento
atrasado por RITMO se re-checa contra a fala que o ancora.

**⚠️ E a parte que me custou duas tentativas: isto NÃO vira gate determinístico.** Tentei medir
"tela morta" por tamanho de JPEG (18/56 acusadas) e por ocupação de luminância (23/56). As duas
reprovaram quando fui **olhar os frames acusados** — `s34-orbita-6-dias` e `s17-dois-truques` estão
cheias e bonitas no instante em que o medidor as chamou de paradas. A distinção entre *tela vazia
esperando* e *composição escura em construção* depende de o elemento que falta ser **aquele que a
fala ancora naquele segundo** — é semântica, não geometria.

*Nem toda regra que importa vira gate determinístico. Quando o critério é estético, o verificador é
o olho do agente, e a doutrina dele é o conserto.* Um gate que reprova 41% das cenas não protege:
ensina a ignorar o gate, e aí ele para de proteger justamente quando acerta ([SIS-41] mostra o
oposto — lá o critério ERA absoluto e o gate cabia).

**Como verificar:** a lente 3 do `qc-visual` agora manda começar pelo primeiro segundo ("o que o
espectador vê enquanto ouve a primeira frase?") e re-checar todo elemento que ela mesma atrasou por
ritmo. A tentativa de gate e o porquê da desistência ficaram em
`arquivo-morto/2026-07-qc-entrada-tardia/`.

---

### SIS-44 · Teste de "de qual fonte veio?" precisa de MAGNITUDE, não de ranking

**O caso (28/jul/2026).** Precisava provar que o master decupado do `planetas-algodao-doce` tinha o
áudio do LAPELA e não o da câmera. Correlacionei o áudio novo contra os dois e peguei o maior:

```
contra o MIC ...... r = 0,686   ← "ganhou"
contra a CÂMERA ... r = 0,501
```

Conclusão que tirei: veio do mic. Conclusão que o teste **autoriza**: nenhuma. Câmera e lapela
gravaram *a mesma pessoa falando a mesma frase* — os dois correlacionam alto com qualquer gravação
daquele momento. O ranking entre eles não distingue **fonte** de **conteúdo**.

**O teste refeito, comparando o MESMO trecho e olhando a magnitude:**

```
master vs LAPELA alinhado ... lag 0,00s   r = 0,983   ← mesma FONTE
master vs CÂMERA ............ lag −0,01s  r = 0,762   ← mesmo EVENTO, fonte diferente
```

**A régua:** mesma fonte de áudio dá **r ≈ 0,98**; fontes diferentes do mesmo evento ficam em
**r ≈ 0,7**. Sem um número absoluto que separe as duas faixas, "o maior venceu" é uma escolha entre
duas hipóteses que o teste não sabe distinguir.

**E o segundo erro do primeiro teste:** comparei trechos que não eram o mesmo instante, e o lag saiu
14,2 s nos dois — o que eu quase li como *dessincronia labial*. Um teste que compara conteúdo tem de
alinhar o conteúdo primeiro; senão a resposta fala do desalinhamento, não da pergunta.

*Antes de rodar um teste comparativo, escreva o número que vai separar as hipóteses. Se ele não
existe, o teste não responde a pergunta — ordena candidatos.* Relacionado: [SIS-43],
[REND-48], e o dia inteiro de [REND-47], onde seis medições erradas mediam a coisa errada com
precisão crescente.

---

### SIS-46 · A fronteira entre FAZER e REPORTAR é onde o pipeline perde trabalho pronto

**Em 28/jul, quatro vídeos travaram sem um defeito de conteúdo sequer.** Nenhum tinha arte ruim,
dado errado ou cena quebrada. Todos morreram na passagem entre o agente e o sistema:

| vídeo | o trabalho | o que o sistema entendeu |
|---|---|---|
| `el-nino` | 41 cenas prontas para render | `qc-carga` crashou (WebGL sem GPU) → portão leu como REPROVAÇÃO |
| `energia-escura` | 41 laudos de QC, zero falhas | agente desacoplou e ficou esperando notificação → morreu |
| `senna` | diagnóstico completo da finalização | *"Waiting on the wake trigger."* → morreu |
| `nilo-nao-secou` | 30/30 cenas aprovadas, gates PASS | `## ESTACAO_CONCLUIDA` como cabeçalho, no meio do texto |

**A regra:** num pipeline de agentes, o conteúdo quase nunca é o gargalo — **o protocolo é**. Quando
um vídeo trava, a primeira pergunta não é *"o que está errado com a cena?"*, e sim:

> **"o trabalho foi feito e o sistema não soube?"**

Custa um `tail` no log e uma contagem de artefato, e nos quatro casos a resposta era sim.

**As três formas que isto assume, e o conserto de cada uma:**

1. **A ferramenta de medir morre e o veredito lê como reprovação.** Falha de execução ≠ resultado
   negativo. Todo runner de gate precisa de veredito de TRÊS estados — passou / mediu e reprovou /
   não conseguiu medir — e o terceiro **não** reprova ([REND-48] é o primo disto no transporte).
2. **O agente termina e não encerra.** Sessão headless que para de emitir MORRE; não há notificação
   que a acorde ([SIS-45]). Vale em qualquer idioma — o `senna` escapou escrevendo em inglês.
3. **O veredito sai com a forma errada.** O marcador é a ÚLTIMA linha, sozinho, sem markdown. Regra
   dura porque a NEGAÇÃO contém a string, e um regex frouxo já avançou vídeo sem trabalho feito.

*Um pipeline de agentes falha na costura, não no pano.* Onde há uma fronteira — agente→despachante,
gate→portão, comando→verificação — é ali que o trabalho pronto se perde em silêncio. Todas as leis
de mortos-silenciosos ([SIS-43], [SIS-44], [SIS-45], [REND-48]) são casos particulares desta.

---

### SIS-47 · Lei escrita e ferramenta pronta não impedem nada quando o caminho torto é mais curto

**Em 28/jul baixei dois vídeos do canal em 1080p, tendo 4K disponível.** O que torna o caso útil não
é o erro — é tudo o que já existia e não serviu de nada:

| o que existia | onde | por que não impediu |
|---|---|---|
| a lei "nunca rebaixar resolução calado" | [REND-08] | eu não a li — não sabia que devia procurá-la |
| o script que baixa sem teto | `scripts/compilado/baixar-fontes.mjs` | não o procurei; escrevi `yt-dlp` na mão |
| a trava que mede a altura do arquivo | dentro daquele mesmo script | mora dentro do caminho por onde não passei |
| a doutrina do domínio | `knowledge/COMPILADOS.md` | o projeto *era* um compilado e eu não o classifiquei como tal |

Quatro camadas de proteção, todas corretas, todas inúteis: **nenhuma estava no caminho que eu tomei.**
Escrevi `yt-dlp -f "bestvideo[height<=1080]"` porque digitar um comando é mais curto do que perguntar
"existe ferramenta para isto?" — e o comando ad hoc não passa por lei nenhuma.

**A regra:** proteção que depende de alguém *lembrar de procurá-la* já falhou. Ao consertar a raiz de
um erro assim, a pergunta não é *"onde escrevo a regra?"* mas:

> **"por que o caminho errado foi o mais curto, e como faço o certo ser mais curto que ele?"**

**Os três consertos, em ordem de eficácia:**

1. **Um caminho único, e que ele seja o mais curto.** Um módulo com CLI (`node scripts/lib/<modulo>.mjs …`)
   ganha do comando cru porque poupa digitação *e* pensamento. Enquanto o atalho for mais rápido, a
   disciplina perde — sempre.
2. **A trava mede o resultado, não confia no pedido.** Pedir a melhor resolução e conferir a altura
   do arquivo são coisas diferentes: a primeira é intenção, a segunda é fato ([SIS-44]).
3. **A régua é RELATIVA à fonte, nunca um número fixo.** "Reprovar abaixo de 2160" grita à toa em
   vídeo que só existe em 1080 — e alarme falso ensina a ignorar o alarme. Pergunte à fonte o que ela
   oferece e exija o topo *dessa* lista.

**O sintoma que denuncia esta classe:** quando o conserto que ocorre é *"vou escrever a lei"* e a lei
**já estava escrita**, o problema nunca foi de documentação. Era de topologia — e escrever de novo só
adiciona um documento a mais para ninguém ler ([SIS-46] é a mesma doença na fronteira entre agentes).

---

### SIS-48 · Modelo julga bem e conta mal — peça a DECISÃO, derive o NÚMERO

**No `el-nino` (28/jul/2026) o decupador entregou dois artefatos que se contradiziam.** Aplicar o
`_cortes.json` ao `words.json` produzia 1.950 palavras; o `words-limpo.json` do MESMO agente, na mesma
execução, tinha 2.192. Divergiam já na primeira palavra.

O que torna o caso instrutivo: **o julgamento estava certo.** O texto limpo era coerente, bem editado,
e o agente ainda corrigiu a transcrição por conta própria ("plantão"→"plâncton", "elninho"→"El Niño").
Ele sabia exatamente o que devia sair. Só não sabia **em que segundo**:

| o span declarado | onde a fala realmente estava | o resultado no vídeo |
|---|---|---|
| corte até 98,49 s | o take ruim ia até 110,38 s | sobrou "o mar esvazia, os peixes somem, o— não, vambora. Do início." |
| "título" em 122,62–125,52 | o título estava em 131,24–133,76 | comeu "e some junto uma das maiores pescas do planeta" |
| retake em 148,15–150,01 | — | comeu "praia E no lugar dela sobe" |

Cinco trechos de narração boa foram amputados e o bastidor entrou. Nada disso apareceu num gate: o
`words-limpo.json` era bonito, o `_cortes.json` era plausível, e ninguém cruzou os dois.

**A regra:** quando um agente precisa produzir julgamento **e** medida, separe as duas coisas. O
julgamento é dele; a medida sai de um script que lê o dado de origem.

> **Peça o QUE. Derive o ONDE.**

**Como fica na prática:** o decupador entrega a lista de palavras que ficam (a decisão). O
`cortes-por-alinhamento.py` casa essa lista com o `words.json` por `difflib` e os buracos viram os
spans, com os timestamps reais de cada palavra. Custo zero, exato, e impossível de estimar errado.

**Três detalhes que só aparecem implementando:**

1. **Nem todo buraco é corte.** O texto limpo traz a transcrição corrigida, então "para"→"pra"
   aparece como diferença. Cortar isso picota a fala no meio. A distinção é estrutural: corte real
   não tem contrapartida do lado limpo; correção troca palavra por palavra (≤3 palavras, gaps de
   tamanho parecido). Medido: 27 cortes reais contra 25 correções que teriam mutilado a narração.
2. **Retake é texto repetido, e o alinhador casa a PRIMEIRA ocorrência** — a ruim. Exigir blocos de
   5+ palavras casadas empurra a âncora para o take bom, que é o longo.
3. **Classificação por conteúdo vence herança.** Ao reaproveitar as classes dos spans antigos, o corte
   que de fato removia o título herdava "retake" do span deslocado. Comparar o texto removido com os
   títulos declarados (por PALAVRA, com 70% de cobertura — o apresentador lê "O apelido que virou O
   fenômeno" onde o card diz "O apelido que virou fenômeno") acerta os quatro sem falso positivo.

*O agente já tinha a validação certa escrita no ofício* — "palavras(bruto) == palavras(limpo) +
palavras(nos cortes)" — *e entregou com a conta não fechando.* Regra que depende de alguém executar
não protege ([SIS-47]); esta virou script, e o script recusa alinhamento abaixo de 75%.

---

### SIS-49 · Backup verificado não autoriza apagar o que está ABERTO agora

A ordem sagrada é *sobe, verifica, apaga*. Ela protege contra perder o dado — e **não** protege
contra puxar o tapete de quem está lendo naquele instante. São dois riscos diferentes, e cumprir o
primeiro dá a sensação de ter coberto o segundo.

**Medido em 29/jul/2026.** O despachante foi religado, viu o disco abaixo do piso e liberou os 43 GB
de `out/el-nino/_bruto` — corretamente: subiu ao bucket, conferiu o tamanho, e só então apagou. No
mesmo instante, o `master-decupado.mjs` cortava o **segmento 52 de 57** a partir daquele arquivo.
O backup estava perfeito. Quarenta minutos de processamento morreram assim mesmo.

**A regra:** antes de remover, pergunte se alguém tem o caminho ABERTO. No Linux a resposta é uma
linha — `lsof +D <caminho>` —, e a resposta certa para "está em uso" é **adiar**, nunca prosseguir:
o espaço continua lá na próxima passada, e a passada é barata. Trabalho em curso, não.

**Três coisas que este caso ensina além do óbvio:**

1. **Apagar não destrói na hora.** O `unlink` remove o NOME; os bytes vivem enquanto algum processo
   mantiver o descritor. Dá para resgatar por `cp /proc/<pid>/fd/<n> <destino>` — cópia local, muito
   mais rápida que rebaixar do bucket. Mas a janela fecha quando o processo sai: aqui ela fechou
   antes, e o resgate falhou.
2. **Quem morre é quem lê, e o erro não parece o que é.** A mensagem foi `No such file or directory`
   no meio de um lote — parece falha de caminho, não decisão de outro serviço tomada segundos antes.
   Sem os dois logs lado a lado, o diagnóstico ia para o lugar errado.
3. **Retomada só existe se o rastro sobreviver.** Os 52 segmentos prontos estavam íntegros em
   `/tmp/masterdec-el-nino/`, e o script os apagava na ENTRADA — anulando sozinho a própria
   checagem de "já pronto". Limpeza de temporário pertence ao FIM do trabalho, nunca ao começo.

*Espaço se recupera; trabalho em curso, não.* Onde o serviço que limpa não conhece o serviço que
trabalha, a única defesa é perguntar ao sistema operacional quem está com o arquivo na mão.

---

### SIS-50 · Esperar o ARQUIVO APARECER não é esperar o TRABALHO TERMINAR

Encadear etapas por existência de arquivo é a forma mais natural de escrever um pipeline — e erra
por uma razão simples: o arquivo aparece no primeiro byte, não no último.

**Medido em 29/jul/2026.** Um script emendava o QC ao fim do master decupado com
`[ -s master.mp4 ] && break`. O `ffmpeg` criou o arquivo, o laço deu a etapa por concluída, e o QC
leu um MP4 de 176 MB em plena escrita: `moov atom not found`, duração 0,00 min, reprovação por um
defeito que não existia. O master ficou perfeito trinta segundos depois.

**A condição certa tem DUAS provas, não uma:**

```bash
# ✗ o arquivo aparece no primeiro byte
until [ -s saida.mp4 ]; do sleep 5; done

# ✓ o produtor saiu E o artefato é legível
until ! pgrep -f "produtor" >/dev/null; do sleep 5; done
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 saida.mp4) || exit 1
```

O `moov atom` do MP4 é escrito no FIM (a menos de `+faststart`), então tamanho e existência mentem
o tempo inteiro da escrita, e só o `ffprobe` distingue arquivo pronto de arquivo pela metade — é o
mesmo teste que a retomada usa para separar segmento cortado de segmento truncado ([SIS-49]).

*Isto é um morto-silencioso ao contrário:* em vez de falhar calado, ele REPROVA em voz alta uma
coisa boa. O prejuízo é o mesmo — a decisão seguinte é tomada sobre uma medição falsa ([SIS-46]).

---

### SIS-51 · `pgrep -f` dentro de um script casa com o PRÓPRIO script — e o laço nunca sai

> ⚠️ **REINCIDÊNCIA MEDIDA, 09/ago/2026 — e ela diz onde a lei NÃO alcança.** Esta lei e a
> [[SIS-91]] existem, estão escritas, e mesmo assim o padrão mordeu **duas vezes no mesmo dia**:
> um `until pgrep -f "_render-4k-loop.sh galaxia"` que esperou o próprio observador por **47
> minutos**, e um `pgrep -c -f "…|qc-cena.mjs|ffmpeg -y"` que devolveu **3** numa máquina com load
> 0,00 — os três eram o próprio comando.
>
> **Varri o repositório procurando o culpado e não achei: `grep -rE "(until|while).*pgrep -f"` em
> `scripts/` e `render/` devolve ZERO.** O código versionado está limpo. Os dois erros nasceram em
> **comando ad-hoc**, digitado na hora, fora de qualquer arquivo.
>
> *Por isso não criei gate para isto, e a decisão importa tanto quanto a lei:* um gate varre o
> repositório, e o defeito não mora lá. Seria mais uma peça sem alvo — a casa já tem 22 sem
> chamador. **Onde a lei não alcança é no comando que não é código**, e a única defesa ali é lê-la
> antes de escrever a linha. Se um dia esse padrão aparecer versionado, aí sim o gate tem alvo.

> ⚠️ **A AGRAVANTE QUE FALTAVA (12/ago/2026, `especies-humanas@arte`): numa sessão headless do
> despachante, o envenenado não é só o script — é o BRIEFING.** Escrevi o `while pgrep -f
> "qc-fora-do-quadro"` num `.sh` separado, justamente para o laço não se ver; ele girou assim mesmo.
> A cmdline que casava era **`claude -p <o prompt inteiro da estação>`**, e o prompt cita o gate pelo
> nome, como cita `desenhar-cenas`, `qc-espelho-cortes`, `sondar-fable`, `shot.mjs`, `qc-carga`,
> `qc-contrato`, `aplicar-ancoras-pesquisa`, `normalizar-footage` e `_render-4k-loop.sh`.
>
> Ou seja: **o briefing do despachante é uma linha de comando de vários KB que menciona quase toda
> ferramenta da casa**. Enquanto a estação roda, `pgrep -f <nome de qualquer uma delas>` devolve ≥1
> *por construção* — e o "tire o pgrep de dentro do próprio script", que era o conserto óbvio da lei
> acima, **não protege nada**. Não é preciso que o alvo exista para o laço travar; basta que alguém
> tenha escrito o nome dele no prompt.
>
> **Consertos que continuam valendo aqui:** guardar o PID e usar `kill -0 "$PID"`; ou, se só o nome
> estiver disponível, filtrar a própria sessão e os irmãos (`pgrep -f X | grep -v $$`, conferir o
> `cwd` de cada PID, contar por sid). E o de sempre: **trabalho longo se espera por
> `run_in_background`, que o harness rastreia**, não por laço de shell inventado na hora.

O padrão de espera mais natural que existe é também uma armadilha:

```bash
while pgrep -f "meu-processo" >/dev/null; do sleep 15; done   # ✗ nunca sai
```

`pgrep -f` compara a linha de comando INTEIRA de cada processo. Um script cujo próprio comando
contém a string `meu-processo` — porque o `while` está escrito ali dentro — encontra a si mesmo,
para sempre. O laço não espera o processo alvo: espera a própria morte.

**Medido em 29/jul/2026:** um script encadeava o QC ao fim do master decupado com
`while pgrep -f "decupagem/master-dec"`. O master terminou às 04:38. Às 05:28 o script ainda
girava — **2 h 42 min de espera por um processo que não existia há uma hora** — e o QC nunca rodou.
Pior: `pgrep -cf qc-decupagem`, usado para conferir se o QC estava vivo, encontrava esse mesmo
script e respondia "2 processos". A verificação confirmava a ilusão que devia desmentir.

**A mesma armadilha em outra roupa**, no mesmo dia: `gcloud compute ssh --command 'pkill -f X'`
mata a própria sessão SSH, porque o comando remoto contém `X`. Aconteceu duas vezes, e as duas
pareceram queda de rede.

**Os consertos, em ordem de robustez:**

1. **Guarde o PID e espere por ele.** `kill -0 "$PID"` não tem ambiguidade nenhuma.
2. **Rode o padrão de dentro de um arquivo**, não da linha de comando: um script chamado por nome
   não carrega o padrão na própria `cmdline`.
3. **O colchete (`[m]eu-processo`) NÃO basta aqui.** Ele impede o `pgrep` de casar com o `pgrep`,
   que é outro problema — não impede o script de casar consigo mesmo.
4. **Exclua o próprio PID:** `pgrep -f X | grep -v "^$$\$"`.

*O sintoma que denuncia:* uma espera que dura muito mais que o trabalho que ela vigia. Antes de
concluir que o processo está lento, pergunte se quem espera não está se vendo no espelho ([SIS-46]:
o trabalho foi feito e o sistema não soube).

---

### SIS-52 · Consertar o arquivo não conserta o processo que já o carregou

Editar um módulo não muda nada em quem já está rodando. Serviço de longa duração lê o código uma
vez, no `import`, e segue com aquela cópia até morrer — por mais correto que fique o arquivo no
disco, por mais commits que se faça.

**Medido em 29/jul/2026.** O `liberar-espaco.mjs` apagou 47 GB de bruto no meio de uma decupagem.
Consertei a trava, testei, commitei. Uma hora depois **apagou de novo**, o mesmo arquivo, no mesmo
ponto. E a terceira vez foi com um LOCK explícito ativo no disco — a proteção estava lá, visível,
e o serviço passou por cima.

O despachante rodava desde as 02:09. Todos os consertos eram das 06:00 em diante. O processo nunca
os viu. Cada rodada de diagnóstico media o arquivo (certo) e concluía que a lógica estava errada
(falso), porque a lógica em execução era outra — a de quatro horas antes.

**O sintoma, e ele engana:** o conserto "não funciona" sem deixar rastro de por quê. Não há erro,
não há log divergente; o comportamento antigo simplesmente continua, como se o arquivo não tivesse
sido salvo. Isso empurra para reescrever a correção — que é a saída errada, e custa horas.

**A pergunta que fecha o diagnóstico em dez segundos:**

> *desde quando este serviço está de pé, e quando eu salvei o conserto?*

```bash
systemctl --user show <serviço> -p ActiveEnterTimestamp --value
```

Se o serviço subiu antes da correção, ele não a tem. Reinicie ANTES de investigar mais.

**E reiniciar precisa ser seguro,** senão vira o próximo estrago: `KillMode=process` no unit é o que
permite reiniciar o despachante sem matar o render de duas horas que ele deixou rodando — a peça já
estava lá e salvou 45 Chromes vivos neste caso.

*Vale para qualquer coisa que carregue e siga:* serviço systemd, daemon, watcher, agente com módulo
importado. Código novo em processo velho é código que não existe.

---

### SIS-53 · Transcrição que subestima o falado torna a decupagem IMPOSSÍVEL — e o plano continua parecendo perfeito

O decupador não corta o que não vê. Se a transcrição base perde parte do que foi dito, o trecho
perdido é invisível para toda a cadeia: o agente não o marca, o alinhamento não o encontra, o gate
não o cobra. E o plano fica **coerente consigo mesmo** — o que faz a inspeção do plano aprovar.

**Medido em dois vídeos, 29/jul/2026:**

| | palavras que o áudio tem | `words.json` | perda |
|---|---|---|---|
| `el-nino` | ~3.736 | 3.050 | 18% |
| `paises-baixos-mar` | ~3.970 | 2.742 | **31%** |

A conta é simples e não precisa de nada além do que já existe: o vídeo JÁ CORTADO tem N palavras
em M minutos; o bruto tem M′ minutos; então o bruto deveria ter ≈ N·M′/M. Se o `words.json` tem
muito menos, ele é cego — e o que ele não vê são exatamente os falso-inícios e hesitações, que são
o que a decupagem precisa cortar.

**O sintoma que engana:** no `paises-baixos-mar` o alinhamento entre plano e texto limpo deu
**100,0%**. Perfeito. E o vídeo montado vazou 44 trechos de bastidor. Os dois fatos convivem porque
o plano é coerente com a transcrição, e a transcrição é que está errada. *Consistência interna não é
correção.*

**O sinal barato que denuncia antes de gastar render:** contar palavras com `--` no `words.json`.
O Scribe marca a palavra cortada no meio; um vídeo de bruto real tem dezenas. **Zero marcas em bruto
de apresentador é bandeira vermelha** — nos dois casos era zero, e nos dois a transcrição era cega.

**Conserto de raiz:** a ingestão transcreve o arquivo SINCRONIZADO com `tag_audio_events` e sem
`no_verbatim`, e o resultado é conferido pela aritmética acima antes de a decupagem começar.
Retranscrever custa centavos; refazer master, render e QC custa horas — e foi o que aconteceu duas
vezes no mesmo dia. Relacionado: [SIS-48] (o agente julga bem e conta mal) e [SIS-50] (medir o
artefato, não o plano).

---

### SIS-54 · O corte de pausa não pode começar dentro de uma palavra — e a versão boa é SEMPRE a ÚLTIMA

Duas regras que vieram do mesmo defeito, achado pelo Mateus no `el-nino` (29/jul/2026): a frase
*"El Niño de Navidad, o Menino de Natal, uma referência ao Menino Jesus"* perdeu justamente o
"Menino Jesus", e o vídeo dizia *"uma referência ao"* e emendava noutro lugar.

**O que o áudio tinha:**

```
214,74  "ao"
214,86  "Menino"                          ← o corte de pausa COMEÇOU aqui
215,30  "Jesus."
        [silêncio]
220,84  "Nos anos normais, é só--"        ← falso-início
        [silêncio]
230,24  "ok,"                             ← comentário do apresentador
230,70  "o Menino Jesus. Nos anos normais, é só um respiro…"   ← a versão BOA
```

O corte foi de 214,86 a 230,66 — e sua borda inicial caiu **dentro da fala**, decepando o fecho de
uma frase que estava perfeita. O silêncio real só começava em 215,30.

**Regra 1 — a borda do corte de pausa se ajusta ao limite de PALAVRA.** O `silencedetect` mede
energia e não conhece fronteira léxica; um silêncio que começa 0,4 s antes do fim da última palavra
apaga essa palavra. Antes de gravar o span, empurre o início para depois do `end` da palavra
anterior e o fim para antes do `start` da seguinte.

**Regra 2 — entre versões repetidas, a ÚLTIMA é a boa** (lei do Mateus). Quando o apresentador
tropeça, ele volta e refaz; a boa é sempre a última tentativa, seja a segunda, a terceira ou a
quarta. **Mas o escopo da repetição é a frase que ele refez, não tudo em volta.** Aqui ele não
refez "uma referência ao Menino Jesus" — refez só "Nos anos normais…". Cortar de 215,30 a 231,90
preserva a frase completa E pega a última versão da que ele repetiu:

> "…uma referência ao Menino Jesus. Nos anos normais, é só um respiro."

*Aplicar "fica a última" ao trecho inteiro teria jogado fora uma frase que nunca foi refeita.* A
pergunta certa não é "qual é a última ocorrência?", é "o que exatamente ele repetiu?".

---

### SIS-55 · Gate que reprova SEMPRE não é gate — é ruído que ensina a ignorar o veredito

O `guard-rail.mjs` foi **arquivado** em jul/2026 (`arquivo-morto/2026-07-guard-rail/`) e substituído
pelo `qc-carga` no modo projeto. Mas o `bin/top10`, no verbo `qc <html>` avulso, continuou chamando o
morto. Resultado, achado em **30/jul/2026**:

```
✓ PASS  qc-contrato
✗ FAIL  guard-rail        ← MODULE_NOT_FOUND, em TODA cena
✓ PASS  overlap
✓ PASS  tamanho
✓ PASS  src-existe
RESULTADO: ✗ FAIL — corrija antes do 4K
```

**Toda cena avulsa reprovava.** E o efeito é pior que a falha: como o `FAIL` era universal e falso,
quem rodava o gate aprendeu a ler só as linhas de cima e ignorar o `RESULTADO`. Eu mesmo fiz isso
neste dia, cena por cena, escrevendo "só o guard-rail falha por módulo arquivado" — e segui para o
render. O gate deixou de proteger exatamente porque nunca acertava.

**E ele escondia um gate de verdade.** No lugar do morto devia rodar o `qc-carga`, que mede poluição
de tela. Enquanto o guard-rail ocupava a vaga gritando à toa, **a carga não era medida em nenhuma
cena avulsa**. Descobri isso só quando o conserto entrou: cenas que eu tinha dado como "passa em
tudo menos no alarme falso" passaram a ser medidas de verdade.

**Três regras:**

1. **Ao arquivar um módulo, procure quem o chama** — `grep -rn "<nome>.mjs"` antes de mover. Arquivar
   sem varrer os chamadores é criar um alarme falso permanente.
2. **Alarme falso é bug de prioridade alta, não incômodo.** Um gate que reprova sempre custa mais que
   gate nenhum: gate nenhum é ausência conhecida; alarme falso é presença que mente e treina quem lê.
3. **Medida colhida em lote longo é inválida se o medidor mudou no meio.** O conserto entrou enquanto
   um lote de 54 cenas do `senna` rodava: as primeiras foram medidas sem `qc-carga` e as últimas com.
   O número agregado não significa nada. Quando o instrumento muda, **re-mede o lote inteiro** — é
   determinístico e barato; o caro é decidir sobre um número misturado.

---

### SIS-56 · Artefato que serve a VÁRIOS projetos não pode morar dentro de um deles

O card de créditos dos membros — 2,9 GB, ProRes 4444 com alpha — vivia em
`out/planetas-algodao-doce/`, o projeto que por acaso o renderizou. Ele não é daquele vídeo: depende
só da **lista de membros do dia**, e dois vídeos do mesmo dia produzem bytes idênticos.

Morar dentro de `out/<proj>/` quebrava três coisas de uma vez (achado 30/jul/2026):

- **`out/<proj>/` é limpo depois da entrega.** O card de 2,9 GB ia junto com a produção, e ninguém
  reparava até precisar dele de novo.
- **O vídeo seguinte não achava o do anterior.** Cada finalização gerava o seu, dentro do próprio
  `_finalizacao-tmp/`: ~10 min de render e vários GB por vídeo para reproduzir o MESMO arquivo.
- **A lista apodrecia em silêncio.** A versão de 15/jul foi ao ar com **26 pessoas que já tinham
  saído do clube e nenhuma das 45 que entraram**. Nada gritava, porque não havia nada comparando.

**O padrão que substitui:** pasta própria por assunto (`assets/clube-membros/`), **a data no nome do
arquivo** (`agradecimento-membros-2026-07-27.mov`) e um **resolvedor** que responde "qual vale hoje?"
— `scripts/membros/resolver.mjs`. Data no nome, não `mtime`: copiar, sincronizar e restaurar mexem no
carimbo do arquivo e não no nome.

E o resolvedor **compara**: se a lista mais nova é de depois do card, ele acusa defasagem e sai com
código 1. O alarme que faltava não era um relatório mais bonito — era alguém perguntando.

---

### SIS-57 · O mesmo asset resolvido em dois lugares diverge — e o errado vai para o ar

Duas funções diferentes escolhiam o CTA de membro:

| quem | o que escolhia |
|---|---|
| `xml-composto-membros.mjs` (XML de **revisão**) | `cta-membro-qr-alpha.mov` — o card compacto de QR, canto inferior esquerdo |
| `finalizar-youtube.mjs` → `assetCta("membro")` (o **MP4 entregue**) | `cta-membro-alpha.mov` — o painel que cobre ~90% da tela por 8 s |

O compacto virou padrão em 27/jul e o XML foi atualizado. A função que alimenta a **finalização** não
foi. Então, por três dias, o Mateus revisava a timeline com o card certo e o vídeo que ia ao ar
levava o errado — o defeito estava exatamente onde ninguém olha, porque a revisão dizia que estava
certo.

**A regra:** asset de marca tem **um resolvedor único**, e todo consumidor chama esse resolvedor. Se
dois caminhos escolhem o mesmo arquivo por conta própria, eles vão divergir — é questão de tempo, não
de disciplina. E quando divergem, quem sofre é o caminho que **não** é revisado.

**O sintoma que denuncia:** revisão e entrega discordando. Se a peça de conferência mostra uma coisa
e o entregável tem outra, não procure o bug no render — procure **dois lugares escolhendo o arquivo**.

---

### SIS-58 · Instrumento que abre a cena numa viewport diferente da de produção mede outra coisa

A `s34` do `senna` reprovou no gate de tamanho com o herói "20" medindo **198px** contra o piso de 260.
O texto já era **340px**. O gate não estava errado sobre o número — estava medindo a cena encolhida.

A causa é um helper de preview que várias cenas carregam:

```js
(function fit(){var s=Math.min(window.innerWidth/3840,window.innerHeight/2160);
  if(s<0.98){var st=E('palco');st.style.transform='scale('+s+')';st.style.transformOrigin='0 0';}})();
```

Ele roda **uma vez, no load**. O `qc-tamanho` abre a página em 1920 e só depois cresce a viewport para
3840 — então o `fit` já aplicou `scale(0.5)` e nunca reavaliou. **O gate mediu a cena inteira pela
metade**, e todo texto apareceu com metade do tamanho real.

**Corta para os dois lados, e o lado perigoso é o silencioso:**

- **falsa reprovação** — texto correto medido pela metade. Custa trabalho à toa (mandei consertar uma
  cena que não tinha defeito).
- **falsa aprovação** — texto do **dobro** do tamanho passa no piso porque foi medido a 0,5×, e vai
  para o ar gigante. Ninguém investiga um gate que passou.

**O conserto é reavaliar e limpar:**

```js
function fit(){var s=Math.min(window.innerWidth/3840,window.innerHeight/2160);
  var st=E('palco');if(!st)return;
  if(s<0.98){st.style.transform='scale('+s+')';st.style.transformOrigin='0 0';}
  else{st.style.transform='';}}
fit();window.addEventListener('resize',fit);
```

**A regra geral:** todo instrumento que mede geometria tem de medir **na mesma condição em que o
artefato é produzido**. Se o render abre em 3840 e o gate abre em 1920, eles não estão olhando para a
mesma cena — e o número do gate não descreve o que vai ao ar.

Medido em 30/jul/2026: 12 cenas do `senna` carregavam o helper. Todas são `data-render="4k-native"` e
**o render abre essas em viewport 3840** (`render/capturar.mjs`: `VW = NATIVE4K ? 3840 : 1920`), onde a
escala dá 1 e o `fit` não age — então **nenhum vídeo saiu errado**; só o veredito era falso. A
verificação que provou isso vale mais que o conserto: antes de estimar o estrago de um medidor
quebrado, **descubra se o defeito alcança o artefato ou só o laudo**.

---

### SIS-59 · Retomada por existência de arquivo é cega ao conteúdo — e o conserto chega depois do render

O loop de render pula cena que já tem `<id>-4k.mp4`. É a regra certa (artefato pronto é ativo pago) e
tem um ponto cego que só aparece quando **conserto e render correm ao mesmo tempo**.

Medido em 30/jul/2026, no `senna`: o loop renderizou `s34-logica-ao-extremo-monaco-4k.mp4` às **13:41**;
o agente terminou de consertar o HTML às **13:44**. Três minutos. A partir dali, o disco tinha o HTML
certo e o clipe errado — e **toda execução seguinte pularia a cena**, porque o clipe existe. O
anacronismo de Mônaco (footage atual ilustrando 1988) iria para o composto com a correção feita e
guardada, sem ninguém notar.

Não foi um gate que pegou: foi o agente que consertou a cena reparar no carimbo do arquivo vizinho.

**Três regras:**

1. **Quem conserta um HTML tem de derrubar o clipe dele.** O conserto não termina no arquivo-fonte —
   termina quando o artefato derivado deixa de existir. Arquivar (`arquivo-morto/`), nunca `rm` direto:
   o clipe velho é a prova do que foi corrigido.
2. **Antes de fechar um lote, compare os carimbos**: HTML mais novo que o clipe é cena que a retomada
   vai pular calada.
   ```bash
   for h in out/<proj>/graphics/*.html; do b=$(basename "$h" .html)
     m="out/<proj>/graphics/${b}-4k.mp4"
     [ -f "$m" ] && [ "$h" -nt "$m" ] && echo "⟳ $b — clipe VELHO"
   done
   ```
3. **A retomada robusta compara conteúdo, não existência.** O `finalizar-youtube.mjs` já faz isso com o
   card de membros: guarda o SHA-256 do HTML ao lado do `.mov` e só pula se o hash bate **e** o
   `ffprobe` lê o arquivo. O loop de render ainda pula por existência — enquanto for assim, a
   conferência de carimbo do item 2 é obrigatória em todo lote onde alguém editou cena.

---

### SIS-60 · `| tail` engole o código de saída — e com ele a verificação que ia te salvar

Rodei, em 30/jul/2026:

```bash
node scripts/drive-para-bucket.mjs <fileId> gs://…/C0002.MP4 2>&1 | tail -8
```

O stream do Drive **truncou**: chegaram **18.999.271.393 B** contra **21.127.285.546 B** da origem —
**2,1 GB a menos**. O script tem, de propósito, uma verificação que compara o tamanho no destino com o
que a origem anunciou e recusa se divergir.

**Ela nunca rodou.** Num pipeline o shell devolve o código de saída do **último** comando: o `node`
morreu, o `tail` saiu com 0, e o harness reportou **"completed (exit code 0)"**. Só descobri porque fui
conferir os bytes por curiosidade — se não tivesse, teríamos sincronizado áudio e vídeo com um arquivo
cortado, e o defeito apareceria como "o vídeo acaba antes do áudio" depois de horas de processamento.

**Este é o pior tipo de falha do dia**, e foi a quarta da mesma família: a verificação **existia**,
estava **correta**, e **não foi executada**. As outras três:

| onde | a verificação que não rodou |
|---|---|
| `bin/top10 qc` | chamava um módulo arquivado; todo `RESULTADO` era FAIL e ninguém mais lia o veredito (SIS-55) |
| `capturar.mjs` | editei o arquivo errado por horas; quem roda é o `capturar-paralelo.mjs` (REND-51) |
| `roteiro-do-drive.mjs` | aponta para um mount que não existe mais; toda busca devolve vazio |

**Três regras:**

1. **Nunca canalize a saída de um script cujo código de saída importa.** Se precisar reduzir o que
   aparece, redirecione para arquivo e leia depois: `> /tmp/log 2>&1`. Vale para `| tail`, `| head`,
   `| grep` — todos.
2. **Toda verificação tem de IMPRIMIR a prova**, não só sair em silêncio quando passa. `✓ 21127285546 B,
   idêntico à origem` no log é o que permite saber, olhando depois, que ela de fato rodou. Verificação
   silenciosa é indistinguível de verificação que não aconteceu.
3. **Verifique antes de perguntar ao destino.** Um `fetch` que corta no meio **não levanta exceção** —
   o laço de leitura simplesmente termina. A trava mais barata é comparar os bytes que passaram pela
   sua mão com o que a origem anunciou, antes de qualquer round-trip.

---

### SIS-61 · O conserto que trava o próprio script — variável referenciada antes de existir (TDZ)

> 🔀 **Esta lei nasceu numerada `SIS-54` numa sessão paralela, na VM** (29/jul), enquanto a sessão do
> Mac dava o mesmo número ao *corte de pausa dentro da palavra*. A do Mac ficou com o número (já
> estava no remoto e é citada por `scripts/decupagem/cortes-por-alinhamento.py`); esta virou **SIS-61**
> na integração de 31/jul. Se algum texto antigo da VM citar "SIS-54 · TDZ", é **esta**. Ver [SIS-62].

A correção de uma falha derrubou a estação inteira, e o modo de falhar foi silencioso onde mais
importa: o script morria **antes de cortar um único segmento**, sem deixar artefato.

**Medido em 29/jul/2026 (e de novo em 31/jul, porque o conserto ficou preso na VM).** O commit
`595711d` ("lock DECLARADO sobre o bruto", conserto do [SIS-49]/[SIS-52]) pôs no `master-decupado.mjs`:

```js
const lockBruto = `${fonte}.EM-USO.lock`;   // linha 64
...
let fonte = video, keepsF = keeps;          // linha 76 — fonte só nasce AQUI
```

`fonte` é `let` — hoisted mas na **zona morta temporal**. Referenciá-lo 12 linhas antes da declaração
lança `ReferenceError: Cannot access 'fonte' before initialization` na primeira instrução do trecho
novo. O `master-decupado` era o passo 7 da decupagem — a estação "concluía" a decupagem e travava na
**finalização**, com o `compor-base-youtube` sem base. O gerador do entregável desta estação (o V1 de
toda entrega em XML, [FIN-45]) ficou inrodável em `main` por horas, e nenhum gate a montante percebe:
o espelho é válido, os cortes existem, e só o master não nasce.

**Por que enganou:** `node --check` passa (TDZ é erro de **runtime**, não de sintaxe), então a
checagem barata dá verde. E o bug estava dentro de um bloco que o diário de outra sessão descreveu
como "cria `origem/video.mp4.EM-USO.lock`" — descrevendo a INTENÇÃO do código, não o que ele fazia
(nada: crashava antes).

**Conserto de raiz:** o lock é sobre o BRUTO, que é `video` (definido no topo, `argv`), não `fonte`.
No dual-system `fonte` vira o `merged.mp4` do `/tmp` — e quem o `liberar-espaco` apaga é o `video` de
63 GB, não o tmp. Então `const lockBruto = \`${video}.EM-USO.lock\`` corrige o TDZ **e** a semântica
de uma vez.

**A regra que fica:** ao mover uma variável para perto de onde é usada, ou introduzir uso novo, o
teste não é `node --check` — é **rodar de verdade** o caminho tocado (aqui, `node script.mjs` num
projeto real ou até um `node -e` que exercite as primeiras linhas). Instrução/lock que não roda é
pior que ausente (mesma moral da linha de segurança do `--include-regex` no CLAUDE.md).

**O agravante, e é o que mais custou:** o conserto certo existiu na VM em 29/jul e ficou **não
commitado** por dois dias. Em 31/jul o Mac reencontrou o MESMO bug do zero e o consertou de novo —
duas inferências pagas pelo mesmo defeito. *Conserto que não é empurrado não existe para as outras
máquinas.* Relacionado: [SIS-49]/[SIS-52] (o próprio conserto de lock que gerou esta regressão).

---

### SIS-62 · Duas sessões paralelas alocam o MESMO número de lei — o ID é pedido, não reservado

**Medido em 31/jul/2026, ao integrar o trabalho da VM no Mac.** Duas sessões destilaram lei no mesmo
dia, cada uma leu "o próximo número livre do domínio" no seu clone, e as duas leram o mesmo. Saíram
**duas `FIN-45`** ("a entrega é o XML de 5 camadas" no Mac × "o card de membros não é fronteira de
capítulo" na VM) e **duas `SIS-54`** (corte de pausa dentro da palavra × TDZ). Não é caso isolado: a
[FIN-44] registra a mesma família pelo outro lado — uma sessão citou uma `FIN-44` que ainda não
existia, porque contava com um número que a outra ainda não tinha gasto.

**Por que dói mais do que parece.** A regra de resolução de conflito da doutrina é *"dentro do mesmo
domínio, o NN maior vence"*. Com ID repetido, "o maior" deixa de identificar uma lei — e duas regras
diferentes passam a ter a mesma autoridade e o mesmo endereço. Toda citação cruzada (`[FIN-45]`) fica
ambígua para sempre, inclusive nas que já foram empurradas.

**O que o gerador escondia.** `scripts/regras-todas.mjs` juntava os IDs num `Set` para contar. Set
deduplica: com duas `FIN-45` no arquivo, o rodapé continuava dizendo `FIN=45` e os DOIS corpos saíam
no `_TODAS.md`, um embaixo do outro, sem nenhum aviso. *Contador que conta identidades não vê
ocorrências repetidas — e era exatamente a repetição que importava.*

**O gate (existe desde 31/jul):** `node scripts/regras-todas.mjs` agora **falha com `exitCode=1`** e
lista o domínio e o número quando o mesmo ID aparece duas vezes. Buraco na numeração continua
liberado — lei arquivada deixa buraco legítimo (REND 10/12/14, SIS 40) e reprovar por isso seria
alarme falso.

**A regra de convivência:** ao destilar lei numa máquina que não é a única viva, **`git pull` antes
de escolher o número** e **empurre a lei assim que ela existir** — o número só é seu depois que está
no remoto. E, quando a colisão já aconteceu, **quem já está no remoto fica com o número**: renumerar
o que outros já citam é pior que renumerar o que ninguém viu. A lei renumerada não some — ganha uma
nota `🔀` no topo dizendo de onde veio, para que a citação antiga ainda encontre o caminho.

### SIS-64 · Bounding box mente para grifo inline multi-linha — o retângulo engole a linha do vizinho

> ⚠️ Nasceu como "SIS-63" num commit local da VM — TERCEIRA colisão de numeração de 01/ago
> (ver [SIS-62]). A SIS-63 do dono-único-de-modelo já estava no REMOTO, então quem estava
> publicado ficou com o número e esta virou **SIS-64**.

**Medido no `nilo-nao-secou/42-documento` (28→31/jul/2026).** Dois pares de grifos word-lock
adjacentes num parágrafo acusavam colisão de **184.727px²** e **145.979px²** no `check-overlap` —
com a tela visualmente perfeita (o lote D do qc-visual conferiu à vista). Em 28/jul o achado foi
documentado como "falso positivo" no diário… e só. Em 31/jul o **portão** (`qc-cena.mjs`, que roda
os mesmos gates com carimbo por hash) reprovou a cena de novo pelo mesmo par, e o render pulou-a
**para sempre**: portão não lê diário, e não existe waiver por cena.

**A física do engano.** `getBoundingClientRect` de um span inline quebrado em 2+ linhas devolve UM
retângulo que cobre as duas linhas INTEIRAS — inclusive o fim da linha de cima e o começo da de
baixo, exatamente onde o motor de layout pôs o span vizinho. Dois grifos adjacentes que nunca
dividem um pixel de tinta ficam com bboxes quase coincidentes. Não é tolerância mal calibrada: é a
medição errada para elemento inline.

**O conserto (no gate, 01/ago).** Elemento `display:inline` com 2+ fragmentos passa a ser medido
pelos **fragmentos por linha** (`getClientRects`), interseção somada fragmento×fragmento.
Sobreposição REAL (position/transform tirando o span do fluxo) segue intersectando fragmentos — o
gate só deixa de acusar o espaço entre linhas que nenhum glifo ocupa. Testado nos dois sentidos:
a 42 ficou verde e o caso sintético de colisão real continuou vermelho.

**As duas regras.** (1) Medir texto inline por bounding box retangular é medir o que o layout NÃO
desenhou — use os fragmentos de linha. (2) **"Falso positivo documentado" não é estado terminal**:
enquanto o gate continuar acusando, todo verificador AUTOMÁTICO a jusante (portão, render, QC de
retomada) reprova de novo — quem encontra um falso positivo num gate determinístico conserta o
GATE (ou o gate ganha waiver explícito), nunca só anota no diário. Anotação não desarma robô.

### SIS-65 · DOUTRINA QUE SÓ EXISTE NO ARQUIVO GERADO MORRE NA PRÓXIMA REINSTALAÇÃO (01/ago/2026)

`.claude/agents/*.md` é **gerado** por `cerebro/ferramentas/instalar-agentes.mjs` a partir de
`cerebro/agentes/<nome>/{OFICIO,CONTRATO}.md` + `marcas/<marca>/agentes/<nome>.md`. Editar o gerado
funciona — até alguém instalar um agente novo, e aí some sem aviso.

Em 01/ago uma auditoria achou **três blocos de doutrina viva que só existiam no gerado**: a exceção
da [ARTE-93] (card de título dura o GAP, não o `dur` do espelho) em `editor-de-arte` e o gate duro
correspondente em `qc-visual`; e o comando do gate de sync (`qc-sync.mjs`, com o piso de confiança e
a checagem da faixa de MIC) em `decupador`. A própria reinstalação da auditoria os apagou; foram
recuperados do histórico. **Não era a primeira vez** — o commit `0763082` já se chamava "a
recuperação de um conserto que eu apaguei". O mesmo defeito, duas vezes, porque só o artefato foi
recuperado e a CAUSA ficou de pé.

**A regra tem duas metades, e a segunda é a que se esquece:** (a) conserto de agente entra na FONTE
— ofício/contrato no cérebro se for transferível, roupa da marca se for específico da instalação
(o COMANDO com caminho de script é sempre da marca); (b) **provar que sobreviveu**: rodar
`instalar-agentes.mjs` e reencontrar o texto no gerado. Sem a prova, o conserto é uma aposta —
e a diferença entre "editei a fonte" e "editei a fonte certa" só aparece na reinstalação seguinte.

**Sintoma de que já aconteceu:** `git status` mostrando `.claude/agents/*.md` modificado sem ninguém
ter mexido em agente. É doutrina sendo restaurada — ou apagada.

**Gate:** o instalador já AVISA que o gerado é descartável, e o aviso não bastou (foi lido, citado e
ignorado duas vezes). O que pega de verdade é o diff: regerar numa pasta temporária e comparar com o
instalado — divergência significa doutrina órfã no gerado. Vale como passo do `top10 doctor`.

### SIS-70 · Agente instalado ≠ agente REGISTRADO — o frontmatter é contrato com o harness, e ele falha calado

> 🔀 Nasceu como **SIS-66** num commit local da VM e colidiu com a lei de mesmo número já publicada no remoto (02/ago). Pela [SIS-62], quem está no remoto fica com o número; esta virou **SIS-70**. Citação antiga a `SIS-66` que descreva ESTE assunto aponta para cá.

**Medido no `especies-humanas@arte` (01/ago/2026).** O `top10 arte` roteou 6 das 25 cenas para o
`executor-de-molde` (ARTE-54/ARTE-71: card de título e citação são MOLDE, não invenção). A chamada
morreu na hora: `Agent type 'executor-de-molde' not found`. O arquivo existe e está correto em
`.claude/agents/executor-de-molde.md` — o que faltava era o frontmatter: `meta.yml` trazia
`descricao:` (português) e nenhum `name:`, e o `instalar-agentes.mjs` copiava o `meta.yml`
**verbatim** quando ele existia. O harness exige `name` + `description`; sem eles não registra o
agente **e não reclama**. Dois de 28 agentes estavam assim (`executor-de-molde`,
`assistente-estudio`) — e o caminho de *fallback* do instalador (sem `meta.yml`) emitia o
frontmatter CERTO, então quem escreveu um `meta.yml` para ganhar controle perdeu a validação.

**O custo é invisível e recorrente, que é o que torna isto uma lei.** Um agente ausente da lista não
produz erro na produção: o trabalho dele simplesmente **cai no vizinho**. Aqui o vizinho é o
`editor-de-arte`, ou seja, o **Fable — o recurso mais escasso do estúdio**, e a ARTE-54 existe
exatamente para poupá-lo. São ~23% das cenas de todo vídeo indo para a cota errada, sem um único
sintoma, desde que o `meta.yml` foi escrito.

**A regra.** (1) Quem **gera** artefato de configuração **normaliza e valida** o que o consumidor
exige, mesmo quando o insumo é "do próprio dono": `instalar-agentes.mjs` agora mapeia
`descricao:`→`description:`, injeta `name:` pelo diretório e **aborta alto** se a descrição faltar —
o dry-run passa 28/28. (2) **Roteador que aponta para um agente é teste de existência**: se o
`top10 arte` lista um agente sob MOLDE, esse agente tem de estar registrado; vale conferir a lista
de tipos disponíveis contra `.claude/agents/*.md` antes de confiar no roteamento. (3) Generalização:
**caminho feliz que valida menos que o fallback é armadilha** — o fallback aqui produzia frontmatter
válido e o caminho principal não, então o defeito só aparecia em quem fez a coisa "mais completa".

### SIS-71 · O gate lia a pauta na casa antiga e dava PASS por não achar nada

> 🔀 Nasceu como **SIS-67** num commit local da VM e colidiu com a lei de mesmo número já publicada no remoto (02/ago). Pela [SIS-62], quem está no remoto fica com o número; esta virou **SIS-71**. Citação antiga a `SIS-67` que descreva ESTE assunto aponta para cá.
**Medido no `especies-humanas@qc` (01/ago/2026).** O `qc-atribuicao` abriu com um aviso manso — *"16
cenas usam mídia SEM licença declarada na pauta — não sei julgar"* — e fechou com **`✓ PASS`**. As 16
cenas tinham licença declarada, autor, URL e `validado_por_visao:true`. O gate lia
`_media/pauta-de-pesquisa*.json`, o formato de duas produções antigas; os `pesquisa-*` gravam hoje em
`_pesquisa/pauta-<dominio>.json`, formato de **nove** produções. Ou seja: o gate estava cego em toda
produção nova — e cego para o lado seguro, porque *sem licença conhecida ele não acusa* ([ARTE-82]
fez isso de propósito, para não morrer de alarme falso).

**O que apareceu quando ele voltou a enxergar:** uma violação real de CC BY-SA no `s08` (ver
[ARTE-95]). Um único defeito — mas ele estava invisível havia nove produções, e o PASS dizia o
contrário.

**Por que é lei e não conserto.** A doutrina do estúdio manda *não acusar o que não se sabe*, e essa
é a regra certa. O que faltava é a outra metade: **"não sei" tem de ser raro por construção**. Um
gate cuja base de conhecimento vem vazia degrada silenciosamente para "aprovado", e o aviso que
deveria denunciar isso lê como pendência de cadastro — a forma mais educada de esconder um gate
morto.

**A regra.** (1) Gate que depende de uma base de dados **conta o que carregou e diz em voz alta**: 0
registros carregados não é PASS, é gate sem insumo. (2) Quando o formato de um artefato muda de
casa, **quem consome tem de aceitar os dois** enquanto o antigo existir no disco (`qc-atribuicao`
agora lê as duas pastas; `senna`/`uruguai-despovoado`, do formato velho, seguem passando).
(3) Generalização: **a proporção de "não sei julgar" é um sinal de saúde do gate**, não ruído de
fundo. Quando ela é maioria, o veredito não é sobre as cenas — é sobre o gate.

### SIS-69 · O QC julgou a cena no relógio BRUTO e reprovou duas cenas certas
**Medido no `especies-humanas@qc` (01/ago/2026).** Um dos cinco lotes de `qc-visual` devolveu `s29` e
`s31` REPROVADAS com um diagnóstico convincente: *"um bloco inteiro de gráficos aparece de uma vez,
sem entrada animada, vários segundos antes de qualquer palavra que o ancore"*. Ele amostrou frames em
`t(bruto)` e comparou o último antes de um corte interno de `_cortes.json` com o primeiro depois —
em `s31`, `t=4,1` (só a silhueta e "2026") contra `t=16,0` (mapa, bandeira, retrato, numeral, dentes,
tudo junto).

**As duas cenas estavam certas, e o próprio laudo trazia a prova.** Desde a [ARTE-94] a cena é
autorada em tempo **LIMPO** e o clipe é tocado **linearmente** — não há splice por dentro. Entre
4,1 s e 16,0 s o espectador vê as entradas escalonadas que o laudo dizia não existir; o agente
simplesmente não amostrou entre os dois pontos. Medido por frame: em `t=6,5` só o mapa da China; em
`t=9,0` entra apenas o retrato de Qiaomei Fu. E o "conserto" que ele pediu — *"retimar contra as
âncoras clean reais: China≈5,68s, Qiaomei Fu≈8,2–9,0s, seis≈10,3s"* — é **exatamente a tabela de
word-lock já implementada** no cabeçalho do arquivo. Quando o conserto proposto é o estado atual, o
diagnóstico se refutou sozinho.

**Por que enganou:** o `dur` do espelho e o `__duracao` são BRUTOS, `_cortes.json` é BRUTO, e o
relógio do clipe é LIMPO. Três números do mesmo assunto em duas escalas — a mesma família da
[FIN-42]/[ARTE-94]. E o erro é simétrico: horas antes, no `s40`, dois agentes tinham feito o inverso
(compensar cortes que o compositor não aplica).

**A regra.** (1) **O relógio de toda cena é o LIMPO**; `_cortes.json` não se aplica por dentro do
clipe, e amostrar em `t(bruto)` é medir no eixo errado. (2) **Um "pop" só se afirma com a
amostragem FINA entre os dois pontos** — dois frames distantes provam apenas que algo mudou entre
eles, nunca que mudou de uma vez. (3) **Se o conserto que você propõe já é o que está no arquivo, o
defeito é do seu método**: releia antes de escrever o laudo. (4) Vale para quem recebe o laudo
também — foi por conferir que duas cenas boas não foram "consertadas" até quebrar.
### SIS-66 · Decisão revogatória que não muda o ESTADO não revoga nada — o gate volta pela porta dos fundos (02/ago/2026)

O Mateus removeu o próprio gate de aprovação **três vezes**, por escrito e sem ambiguidade: 26/jul
(*"pode pular a parte da minha revisão humana, e colocar um agente revisor pra fazer o que eu
fazia"*), 29/jul (*"quando elas estiverem cem por cento, não tem por que ficar me esperando pra minha
avaliação no localhost"*) e 02/ago (*"eu ainda quero poder revisar cenas caso queira, manualmente,
mas isso não deve ser um gate que trave o fluxo inteiro da produção"*). **Repetir uma decisão é o
sintoma de que ela não desceu até o código.**

**O que existia, e não bastou.** O agente revisor está escrito e funciona
(`revisar-no-lugar-do-mateus.mjs`, 26/jul — julga o FRAME por visão, com severidade calibrada). O
prompt da estação está completo (`estacoes/aprovacao.md`, 25/jul). A auditoria de 31/jul localizou o
bloqueio (`RECURSO.aprovacao: "humano"` contra `MAX.humano = 0`), prescreveu o conserto — *"trocar por
`opus`. **Isso basta**"* — e ele foi aplicado. Não bastou: o conserto foi **verificado por leitura,
nunca por execução**.

**Onde o gate sobreviveu.** O despachante fala de aprovação em DOIS lugares e só um foi consertado.
Ao fechar a finalização ele carimba `status:"aguardando_aprovacao"` (`despachante.mjs:489` e `:541`);
o filtro de despacho pega `status === "pendente"` (`:692`) e **a linha nunca chega** à checagem de
recurso que a auditoria arrumou — é descartada um passo antes. Medido em 02/ago, num sandbox com três
linhas: `qc/pendente` despachada, `aprovacao/pendente` despachada, `aprovacao/aguardando_aprovacao`
**sem uma linha de log**. Não falha, não avisa: some. Prova de que nunca funcionou: **zero** arquivos
`*@aprovacao*` em `out/_despacho/`, no Mac e na VM, com o revisor pronto desde 26/jul — ele rodou UMA
vez na vida, à mão (`compilado-previsoes-jiang`, 76 cenas).

**A regra.** *Tirar um gate não é tirar a permissão de quem o operava — é tirar o ESTADO em que a
coisa fica presa.* Enquanto um passo gravar um status que nenhum consumidor consome, a espera continua
lá, com outro nome e sem ninguém para vê-la. Ao revogar um gate, a pergunta não é "quem tinha a
chave?", e sim:

> **"que estado a linha assume quando esse passo termina, e QUEM tira a linha de lá?"**

Se a resposta for "o humano", o gate está de pé — por mais que a doutrina jure o contrário.

**O corolário da saída de emergência.** Havia uma: `scripts/estudio/auto-aprovar.mjs`, no timer
`top10-manutencao` da VM a cada 20 min (conferido ATIVO em 02/ago; a auditoria de 31/jul o dava por
morto e ele foi religado e versionado desde então). Só que ele promove direto a `concluido` e **exige
prova** — laudo de QC sem nenhuma reprovação, cobrindo ≥80% das cenas, mais entregável no disco. A
exigência está certa ([SIS-46]: ausência de medição não é aprovação). O efeito colateral não: o vídeo
de laudo imperfeito — justamente o caso em que julgar serve para alguma coisa — cai no estado de onde
ninguém o tira. **A saída automática cobre o caso fácil e devolve o difícil ao humano**, que é o
inverso do que a revogação queria.

**O conserto de raiz:** a finalização tem de deixar a linha em `aprovacao/pendente`, e
`aguardando_aprovacao` passa a significar *"o agente revisor JÁ rodou e devolveu algo que precisa de
gente"* — estado de exceção, não de rotina. Enquanto isso não for aplicado, quem despachar produção
confere à mão se há linha parada em `aguardando_aprovacao` e a devolve a `pendente`.

**Gate:** vale como check do `top10 doctor`, e o teste é mecânico — **todo `status` que a esteira
ESCREVE tem de estar em algum seletor que ela LÊ**. A diferença entre os dois conjuntos é a lista de
armadilhas de estado; cada sobra precisa de um consumidor nomeado, ou é um vídeo esperando para
sempre. Vale além da fila: qualquer máquina de estados cujo produtor e consumidor foram escritos em
commits diferentes tem esse buraco até alguém medi-lo.

---

### SIS-67 · Tirar o número do modelo e deixar o JULGAMENTO sem medidor só muda o erro de lugar (02/ago/2026)

A [SIS-48] resolveu metade de um problema e escondeu a outra metade por quatro dias.

**O que ela consertou:** o decupador estimava os timestamps dos cortes e errava. A regra ficou
*"não peça número a um modelo, peça a DECISÃO — que texto fica — e derive o ONDE por alinhamento"*.
Está certa: o `cortes-por-alinhamento.py` casa `words-limpo.json` (a decisão) com `words.json` (o
bruto) e os buracos viram os spans, exatos e de graça.

**O que ela criou:** a derivação passou a executar **fielmente qualquer decisão que receba** — e
nada julgava a decisão. Antes havia um modelo estimando número e um humano estranhando o número;
depois, um script impecável servindo um julgamento que ninguém olhava.

> **Ao tirar uma responsabilidade do modelo, pergunte o que FICOU com ele — e ponha um medidor ali.**
> Metade dos consertos de raiz não elimina o erro: transfere-o para a metade que continuou humana
> (ou continuou de LLM) e que passou a ser a única sem verificação.

**Como isso apareceu** (`paises-baixos-mar`, achado pelo Mateus no vídeo montado — *"tiveram erros de
cortar números no meio de frases, como se não fizesse parte do roteiro informações que FAZEM SIM"*):

| artefato | data no disco | palavras |
|---|---|---|
| `words.json` (Scribe v2, retranscrito por [SIS-53]) | **29/jul 06:54** | 3.349 |
| `words-limpo.json` (a decisão) | **27/jul 20:08** | 2.171 |

A decisão era **dois dias mais velha que a transcrição que ela deveria explicar**. Medido: o limpo
casa **100,0%** com a transcrição CEGA de 27/jul — o agente decupou bem, descartou 21% e todos os 26
buracos eram retake de verdade. Contra o bruto novo, a mesma decisão "descarta" 35,3%, porque tudo o
que a retranscrição recuperou passou a não ter dono. E o alinhamento converteu cada palavra órfã em
corte, com classe e motivo herdados do span vizinho: dois spans `retake` de **54,5 s** e **42,2 s**
que eram parágrafos informativos inteiros ("quase quatrocentas mil pessoas…", "fosse ele rico ou
fosse ele pobre"), e a despedida do vídeo (1600,81→1613,45) carimbada `pausa`. Seis dos doze dados
sumiram da narração **enquanto as cenas que os ilustravam continuavam na tela** — `s39-kinderdijk-19-moinhos-de-pe`,
`s60-1-836-mortos`, `s41-flevoland` —, e o vídeo terminava em *"…encontra aí o clube de membros no link"*.

**Três coisas que só se enxergam depois:**

1. **A decisão está PRESA à transcrição que a produziu.** O texto limpo é uma lista de palavras sem
   endereço; quem lhe dá endereço é o bruto contra o qual ele é alinhado. Trocar o bruto por baixo
   dele não é atualizar a base — é reinterpretar a decisão. **Transcrição refeita = decisão refeita.**
2. **Cobertura de mão única não é verificação.** O script recusava alinhamento fraco — mas media
   *quanto do LIMPO o bruto explica* (93,6%: passa), e nunca *quanto do BRUTO o limpo explica*. A
   pergunta que carrega a informação é sempre a incômoda: **o que sobrou sem dono?** Vale para
   qualquer conferência por cobertura, muito além desta.
3. **O defeito não era de um projeto.** Medido nos 9 projetos com o par no disco: `paises-baixos-mar`
   (35,3%), `el-nino` (31,1%) e `oceano-700km` (36,3%) terminavam **sem a despedida que o áudio
   tinha**. No `oceano-700km` o `words-limpo` é mais NOVO que o bruto — ali o fecho estava à vista e
   foi cortado assim mesmo, porque ele vem colado no lixo de fim de gravação e sai junto.

**Gate** (`scripts/decupagem/qc-decisao-limpo.py`, chamado DENTRO do `cortes-por-alinhamento.py`,
antes de o primeiro span existir — reprovado, não há `_cortes.json` novo): **par velho** (limpo
anterior ao bruto) · **dado perdido** (valor que o roteiro planejou e o Bôco disse, comparado por
VALOR — "dezenove" e "19" são o mesmo dado; sem roteiro no disco a lente cai para aviso, senão vira
alarme falso em CTA improvisada) · **perda excessiva** (>30%) · **fim truncado** (a fórmula de
despedida está na cauda descartada). O teto de 30% é **medido, não redondo**: os projetos limpos no
disco perdem 11,7 · 14,2 · 15,7 · 26,5 · 27,8%, os defeituosos 31,1 · 35,3 · 36,3% — 30% cai na faixa
vazia, do lado de reprovar de menos ([SIS-55]). Conferido em 02/ago: reprova os 3 doentes, passa os
6 sadios.

**Agente-raiz:** `cerebro/agentes/decupador/OFICIO.md` §2 (o documento escolhe entre versões e grafa;
não autoriza fala — **dado/cifra/data/nome próprio nunca sai por não casar com o roteiro**), §5
(*a última COMPLETA*, não "a última"; retake tem outra ocorrência por definição, então span longo
classificado `retake` é bandeira; **o fecho é intocável**) e §8b (a decisão se verifica). Supera
nada — **completa a [SIS-48]**, que continua valendo inteira.

### SIS-72 · Processo de pé não é trabalho — a prova é o ARTEFATO mudando (03/ago/2026)

**O estrago.** Duas sessões do `senna` morreram com o render **já concluído** — o log fechou às
03:45:31 com 71 clipes para 71 HTMLs. Mesmo assim o despachante repetiu por quase **duas horas**
`⏳ a sessão encerrou mas o trabalho continua — mantenho a vaga`, segurando as **2 vagas de opus e a
de fleet**. A fila tinha 44 itens e **39 não podiam começar**. Só a arte andava, porque o Fable
consome outro pote de cota. Ninguém viu: o log do despachante dizia, a cada 10 minutos, uma frase que
se lê como zelo.

**As duas falhas somadas.** (1) O alvo `out/<slug>/` do `trabalhoDeFundoVivo` é **guarda-chuva**: o
`pgrep -f` casa a linha de COMANDO, então qualquer processo que apenas MENCIONE a pasta — um `tail`,
um `ls`, um comando de inspeção de outra sessão — vira "trabalho pesado em curso". É a mesma família
do `pgrep` que casa a si mesmo, que já mordeu em 26/jul e voltou hoje três vezes. (2) Mesmo com
processo real, **ninguém perguntava se ele produz**. Um ffmpeg travado, um loop esperando lock que
não vem, um Chrome pendurado: todos parecem trabalho.

**A regra.** Antes de manter uma vaga ocupada por "trabalho de fundo", exija **prova de produção**:
algum arquivo do projeto tocado nos últimos 30 minutos (`find -L`, porque `out` é symlink para
`/dados/out` e sem o `-L` o find devolve vazio e mente). O teto é folgado de propósito — uma cena 4K
leva ~200 s e um encode de master passa de uma hora —, mas nenhum trabalho real fica meia hora sem
tocar um byte.

**A família.** É a mesma lição do `sessaoViva`, que já não confia em `kill(pid, 0)` porque zumbi
também "existe" — e, de fato, os dois PIDs viraram zumbi ao serem mortos, continuando na tabela de
processos. *Existência não é atividade.* Vale para PID, para arquivo (o `.gstmp` que não cresce), para
sessão headless e para vaga de recurso: se a coisa não muda, ela não está acontecendo.

**Onde mais isto mora:** todo lugar que decide "está ocupado/rodando/em curso" a partir de uma
consulta de EXISTÊNCIA. Trocar por consulta de MUDANÇA custa uma linha e evita a parada que ninguém
enxerga.

### SIS-77 · O LAUDO FOI ESCRITO SOBRE A CÓPIA VELHA — revisão que não republica não chegou (03/ago/2026)

> 🔀 **Nasceu como SIS-74, virou SIS-75 e agora é SIS-77** (SIS-62) — TERCEIRA colisão do dia: várias sessões destilando ao mesmo tempo pegam o mesmo "próximo livre". A lição operacional: renumere sempre a SUA, cujas citações você conhece, e confira o ID no momento de escrever, não no de planejar: outra sessão criou uma SIS-74 no mesmo
> dia e commitou o arquivo com as duas dentro. Renumerei a MINHA porque conheço todas as citações dela
> (crítico-de-roteiro, validar-roteiro, enviar-drive, regerar-doc) — renumerar a alheia arriscaria quebrar
> referência que eu não enxergo.

O Mateus leu o roteiro da Ucrânia no **Google Doc** e concluiu, com razão pelo que tinha na frente, que
*"nenhum dos problemas estruturais foi mexido"*. Medido no mesmo dia: o Doc estava na **rev.5** e o repo
na **rev.6** — 33 blocos divergentes, 61,9% de similaridade. **Sete dos oito achados "intocados" já
estavam consertados** (personagem retomado, laço de criança cortado, achado forte subido de seção,
promessa da intro trocada, três placas de reviravolta e dois autoelogios de rigor cortados) e nenhum
havia chegado ao destinatário.

**A doença:** a estação 0 gera o Doc no `enviar` e **nunca mais**. O roteirista revisa o `roteiro-boco.md`,
o gate dá PASS, o registro da fila diz `aguardando_gravacao` — e o apresentador continua com o texto
velho aberto. Não há erro em lugar nenhum: cada peça fez a sua parte, e o trabalho não atravessou.

**O custo é duplo, e o segundo é pior:** (1) o apresentador grava a versão errada; (2) quem revisa
julga a versão errada, e o veredito volta contaminado — trabalho bom é reprovado, e a correção do
"defeito" fabrica defeito novo (foi assim que a rev.6 perdeu duas frases que a leitura anterior tinha
elogiado, ver ROT-70).

**A regra:** *toda revisão termina no DESTINO, não no repositório.* Quem mexe no roteiro roda
`node scripts/roteirizacao/regerar-doc.mjs <proj>` no mesmo passe — e quem escreve um laudo declara a
**versão e a fonte que leu** ("Doc do Drive, exportado em <data>"), para que a divergência apareça na
primeira linha em vez de virar diagnóstico errado. Antes de aceitar qualquer laudo sobre um artefato
que tem cópia publicada, **compare as duas** (`diff` de frases) — custa segundos e evita reescrever o
que já estava certo.

**Vale além do roteiro:** todo artefato que existe em dois lugares (repo × Drive, Mac × VM, `out/` ×
bucket) tem esta armadilha. Ver também o CLAUDE.md do projeto: *"duas máquinas com cópias divergentes
do MESMO insumo produzem entregas diferentes sem ninguém perceber"*.

### SIS-76 · 200 DA API NÃO É ENTREGA — quem tem sessão precisa ser perguntado sobre a sessão (03/ago/2026)

Mandei dois roteiros para o grupo do apresentador. A Z-API respondeu **200** com
`{"zaapId","messageId","id"}`, o conector devolveu sucesso, eu carimbei `aviso.apresentador_em` nos dois
projetos e **reportei "✓ ENVIADO ao grupo"**. O Mateus: *"Aqui não chegou nada no grupo não…"*

Causa: a instância estava **desconectada do WhatsApp** (`{"connected":false,"error":"You are not
connected."}`). A API aceita a mensagem, gera identificador e não entrega nada. Não há erro em lugar
nenhum — nem no HTTP, nem no corpo da resposta, nem no log.

**A classe:** todo serviço que mantém uma **sessão** (WhatsApp Web, navegador logado, túnel, mount,
socket) tem dois estados que o HTTP não distingue — *aceitou* e *entregou*. Perguntar ao endpoint de
envio devolve aceitação; só o **endpoint de estado** devolve entrega possível. Vale para Z-API
(`/status`), para stock logado (a sessão expira e o download vem HTML de login), para o mount do Drive
(existe e devolve zero pastas — ver o defeito que o `scan-entregas` já trata).

**A regra:** antes de enviar por canal com sessão, **pergunte pelo estado e falhe alto se ele não
estiver pronto**. Nunca derive "entregue" de `res.ok`. E o carimbo de "avisado" só se escreve depois da
confirmação de estado — carimbo falso é pior que carimbo nenhum, porque desliga a vigilância: a fila
passa a dizer que o apresentador sabe, e ninguém volta a olhar.

**Corolário — desfaça o carimbo quando descobrir que ele é falso.** Ao achar o furo, os dois
`aviso.apresentador_em` foram zerados e trocados por `falhou_em` + motivo. Registro que mente é dívida
que vence sozinha.

**Gate:** `scripts/roteirizacao/whatsapp.mjs` consulta `/status` antes de todo envio e lança erro com o
caminho da reconexão (QR Code, passo humano). Medido no mesmo dia: com a instância caída, o envio agora
**para** em vez de reportar sucesso.

---

### SIS-86 · Contar tentativas não é diagnosticar — o congelado por ser trabalhador (03/ago/2026)

> 🔀 **Nasceu como SIS-77 e foi renumerada para SIS-86 em 03/ago** (SIS-62): duas sessões paralelas destilaram no mesmo número no mesmo dia. A SIS-77 que **já estava no remoto** ficou com ele; esta, que só existia local, andou para o próximo livre. Citação antiga a "SIS-77" que descreva o conteúdo abaixo aponta para cá.

**O que aconteceu.** O despachante congelou duas linhas com *"retomado 5× sem concluir — isto pede
olho humano"*: `nilo-nao-secou@render` (7 tentativas) e `mamute-de-volta@arte` (5). Medido, nenhuma
das duas estava parada:

- o **nilo** foi de **24 para 29 clipes 4K** ao longo daquelas tentativas — cada passada renderizava
  cenas de verdade, e a estação encerrava porque o trabalho não cabia numa sessão;
- o **mamute** tinha escrito **31 arquivos nos 30 minutos anteriores** ao congelamento.

Foram bloqueadas por serem **trabalhosas demais para caber numa passada**, não por estarem travadas.
E "pede olho humano" é exatamente o gate que o Mateus mandou tirar da linha em 29/jul.

**A doença.** O contador tratava como idênticas duas coisas opostas: *tentar e avançar* e *tentar e
não sair do lugar*. Ele media a quantidade de idas, nunca o resultado delas. É a mesma cegueira da
[SIS-72] (pasta existir ≠ trabalho acontecendo), da [SIS-74] (CPU alta ≠ utilidade) e da [SIS-75]
(log crescendo ≠ produção): **o sinal fácil de contar substituindo o fato difícil de medir**.

**A régua.** Cada retomada grava um **marco** — quantos artefatos (`.html`, `.mp4`, `.json`, imagens)
o projeto tem naquele instante. Na passada seguinte:

| marco atual | veredito | contador |
|---|---|---|
| **> marco anterior** | a passada PRODUZIU: é trabalho longo | **zera** |
| = ou < anterior | insistência estéril | +1 |
| **não medido** (-1) | não sei ≠ não andou | **mantém**, não acusa |

O terceiro ramo é o que impede o defeito de voltar pela outra porta: falha em medir nunca vira
acusação — mesma regra do vigia em [SIS-75].

⚠️ O marco conta o que a produção **fabrica**, não log nem arquivo de controle: senão qualquer sessão
"anda" só por escrever no próprio log, e o teto nunca mais congelaria ninguém — trocaríamos o falso
positivo pelo falso negativo, que é pior porque é silencioso.

**A forma geral:** *um limite de tentativas só é honesto se souber distinguir progresso de repetição.*
Sem isso ele pune o trabalho grande e absolve o loop infinito que falha rápido.

### SIS-78 · Delegar e agir no mesmo projeto é escopo sobreposto — 10 min de GPU no lixo (03/ago/2026)

**O que aconteceu.** Deleguei a um agente o conserto do deserto de mídia do `nilo-nao-secou` — tarefa
que **reescreve cenas**. Vinte minutos depois, vendo a fila travada em 29 de 30 clipes, liguei a
`estudio-mapas` e renderizei na GPU a cena `22-mapa3d` **do mesmo projeto**.

O clipe saiu perfeito: 1,22 GB, 4K, 30 fps, zero frames pretos, conferido byte a byte contra o
bucket. E virou lixo em 50 minutos: às 11:00 o agente reescreveu o `22-mapa3d.html`, e clipe de HTML
velho não vale nada. Dez minutos de L4 e um ciclo de ligar/preparar/desligar, jogados fora.

**A regra existia e eu a quebrei.** O núcleo §4 é explícito: *"quando delegar em paralelo, garanta
que os escopos não se sobrepõem em arquivo — dois agentes no mesmo arquivo é trabalho perdido"*. O
que eu não tinha internalizado é que **o loop principal conta como um dos agentes**. Delegar não me
tira do jogo; me põe nele com outro nome. "Eu só vou renderizar" é uma edição como qualquer outra
quando o outro lado está mudando a fonte daquele render.

**O sinal que eu tinha e ignorei:** a fila dizia `renders: 29` enquanto meu `ls` contava 30. Tratei
como bug do derivador e fui investigar o código dele. A divergência era real e tinha causa simples —
o arquivo havia sumido entre uma medição e outra, porque outra sessão o estava refazendo. *Quando o
seu número e o do sistema divergem, considere que os dois estão certos em instantes diferentes antes
de acusar o código.*

**A régua, antes de agir num projeto:**
1. **Há agente meu vivo neste slug?** Se sim, o projeto é dele — inclusive para "só renderizar".
2. Se a ação é urgente mesmo assim, **fale com o agente** (`SendMessage`), não por cima dele.
3. Ao delegar, escreva no prompt quais projetos são de OUTROS — e cumpra a mesma lista.

⚠️ Render é especialmente traiçoeiro porque parece inofensivo: não edita fonte, só consome. Mas
consome uma fonte que o outro está mudando, e o produto nasce velho.

### SIS-83 · Proteger tudo é o mesmo que não proteger (03/ago/2026)

**O que aconteceu.** Carga em **12,88× os núcleos** com **14 ffmpeg** somando 1.155% de CPU. O
regulador de encodes ([SIS-76]) rodou e reportou: `14 vivo(s) (14 protegido(s))`. **Nenhum cedeu.**

A regra de proteção era `/_master-decupado|\/dados\/brutos\/|-4k\.mp4/` — e **todo clipe de cena
termina em `-4k.mp4`**. O padrão que devia blindar "o produto" blindava o acervo inteiro. O regulador
existia, rodava, logava, e não regulava nada: exatamente o defeito que a [ARTE-100] descreve, só que
pela dentro — não é que ninguém o chamava, é que ele sempre respondia "nada a fazer".

**A régua.** Intocável é só o **master**: insumo único, ~40 min de encode, 8–9 GB, e perdê-lo custa a
estação inteira (foi o do `senna`, morto aos 90%). Clipe de cena é curto e independente — rebaixado,
ele apenas termina depois, e o loop só o mata em 1800 s. Efeito imediato da correção: 10 dos 13
encodes cederam a vez e a carga começou a cair.

**A forma geral:** *quando a exceção cobre o caso comum, ela deixou de ser exceção e virou a regra —
com o sinal trocado.* Ao escrever um filtro de proteção, conte quantos itens ele pega HOJE: se pegar
quase todos, ele não protege o crítico, apenas desliga o mecanismo. Um regulador que nunca regulou é
indistinguível de um que não existe, e é pior, porque dá a impressão de cobertura.

### SIS-88 · Lista de nomes conhecidos envelhece sozinha — pergunte pelo CAMINHO (03/ago/2026)

O vigia decidia se uma vaga estava presa perguntando *"a linha de comando casa com um destes cinco
scripts?"* — `_render-4k-loop`, `capturar.mjs`, `render-one`, `master-decupado`, `finalizar`.

Medido hoje: o `energia-escura` disparou `fantasma_na_fila` com severidade **ALTA** enquanto tinha
**sete processos vivos** (`_render-estacao.sh`, `qc-footage-seekavel.mjs --corrigir`,
`_conferir-lote.sh`, um ffmpeg convertendo footage, três sessões) e **5 artefatos escritos nos
últimos 30 minutos** — o último no mesmo minuto do alerta. Nenhum dos sete estava na lista. O vigia
declarou a vaga presa olhando para um projeto que trabalhava na frente dele.

O defeito não é a lista estar incompleta: é ela existir. **Lista de conhecidos envelhece sozinha** —
todo script novo nasce invisível, e o buraco só aparece quando alguém investiga um alarme falso.

O que identifica trabalho num projeto é o **CAMINHO** (`out/<slug>/`), que não depende de ninguém
cadastrar nada. O slug **solto** não serve: ele aparece em prompt, em log e na linha de comando de
quem está perguntando, e já produziu falso positivo antes ([REND-55]) — o teste tem de exigir a barra
do diretório.

E existe uma segunda testemunha que não custa nada: **artefato escrito nos últimos 30 minutos**. É o
critério que o dono usa quando julga à mão — *"log parado só é trava se o projeto não produziu
artefato em 30 min"*. Basta uma das duas provas.

> **A lei:** *reconheça o trabalho pelo OBJETO em que ele mexe, não pelo nome da ferramenta que o
> faz.* Objeto é estável; catálogo de ferramentas é uma dívida que vence a cada script novo.

**E o agravante que torna isto prioritário:** o alerta era de severidade **ALTA**. Alarme falso alto é
pior que alerta nenhum — ele ensina a ignorar o vigia, e aí ele para de proteger exatamente quando
acerta. Depois do conserto, na mesma passada: `alertas=1` em vez de 2, e o único que restou é
verdadeiro.

### SIS-89 · Feedback do dono que vira "encaminhado" e não vira commit é feedback perdido — a fila que ninguém drena mente (03/ago/2026)

**O que aconteceu.** Horas antes de entregar o `paises-baixos-mar`, uma conferência de rotina abriu o
`feedback-mateus.jsonl` do projeto. Havia **uma linha, de 28/jul**, sobre a `s07`: *"esse zoom em
camadas ficou muito ruim, pode dar UM único zoom contínuo apenas… pode remover os créditos das
fronteiras do natural earth"*. O `mtime` do HTML da cena era **28/jul 00:50** — vinte e duas horas
**antes** do feedback. O arquivo nunca foi tocado. Os dois pedidos estavam intactos: o crédito
*"Fronteiras: Natural Earth (domínio público)"* ainda era desenhado no rodapé, e a câmera ainda
aplicava `ease()` (ease-in-**out**) a cada segmento de keyframe, zerando a velocidade três vezes no
meio do voo — que é exatamente o "zoom em camadas" que ele descreveu.

**Por quê ninguém viu.** O diário registra a decisão, e ela parecia correta: *"s07 passou nas 9 lentes
— é revisão criativa/mapa. Encaminhar à estação APROVAR/mapista; já está na fila de feedback do
estudio.db"*. O item foi classificado, roteado e **enfileirado**. Só não foi feito. E como o QC
determinístico e as 9 lentes do `qc-visual` julgam a cena **contra a doutrina**, nunca contra o que o
dono pediu naquela cena, o vídeo fechou `43 aprovados · 0 reprovados` com o pedido dele dentro,
intocado. Um laudo verde sobre uma cena que o dono já reprovou é o pior tipo de verde.

**A régua.** Nenhum vídeo é entregue com item aberto em `feedback-mateus.jsonl` / `_feedback-queue.jsonl`.
"Encaminhado à estação X" **não é estado terminal** — os estados terminais são *feito* (com o commit ou
o arquivo que mudou) e *recusado com motivo escrito*. Item enfileirado sem dono e sem prazo é item
perdido, e o custo aparece na véspera da entrega, quando refazer é caro e a cena já está renderizada.

**A régua secundária, que é a que morde:** *gate verde não cobre pedido do dono.* Os gates medem
doutrina; o feedback é uma exceção deliberada à doutrina, feita pela única pessoa que pode fazê-la.
Um não substitui o outro em nenhuma direção.

**Verificação (custo zero, roda antes de finalizar):**

    test -s out/<proj>/feedback-mateus.jsonl && \
      for c in $(jq -r .cena out/<proj>/feedback-mateus.jsonl); do \
        echo "$c: feedback $(jq -r --arg c "$c" 'select(.cena==$c)|.ts' out/<proj>/feedback-mateus.jsonl) · html $(date -r out/<proj>/graphics/$c.html '+%FT%TZ')"; done

HTML mais VELHO que o feedback = pedido não atendido. Foi assim que este apareceu.

### SIS-91 · `until ! pgrep -f '<padrão>'` é laço ETERNO — a espera vira o próprio motivo de esperar (03/ago/2026)

> 🔀 **Nasceu como SIS-90 e foi renumerada para SIS-91 em 04/ago** (SIS-62): duas sessões paralelas — Mac e VM — destilaram no mesmo número no mesmo dia, e nenhuma estava no remoto. O desempate foi a ordem de chegada; esta veio depois. Citação antiga a "SIS-90" que descreva o conteúdo abaixo aponta para cá.

Três processos foram encontrados esperando trabalho que nunca existiu, o mais velho havia **2h17**:

```bash
until ! pgrep -f 'finalizar.mjs senna --ate=xml'; do sleep 20; done ; <faz algo>
until ! pgrep -f 'mv _media/_master-decupado';   do sleep 15; done ; <faz algo>
```

O padrão está **na linha de comando do próprio laço**, e `pgrep -f` casa a linha inteira. Então
`pgrep` sempre encontra alguém — a si mesmo — e a condição `!` **nunca** se torna verdadeira. O
`<faz algo>` do fim jamais roda.

**E o agravante, que é o que torna isto difícil de ver:** dois laços com o mesmo padrão se mantêm
vivos **mutuamente**, cada um enxergando o outro. Pior — **o diagnóstico cai na mesma armadilha**:
ao investigar, rodei `pgrep -f 'finalizar[.]mjs senna'` para saber se o alvo existia, o comando
encontrou os laços e me respondeu "SIM, existe". Reportei que um deles esperava trabalho real. Estava
errado, e o erro veio do mesmo defeito que eu investigava.

O custo aqui não foi só o processo parado: o **descarregador** procura processo vivo tocando o
projeto antes de liberar disco, encontrava esses laços, e recusava com *"há processo vivo trabalhando
neste projeto"* — mantendo **66 GB** presos de um vídeo já entregue e verificado.

> **A lei:** *esperar por um padrão que a própria espera contém é esperar para sempre.* Para aguardar
> um processo, guarde o **PID** e use `while kill -0 $pid`; se só houver o padrão, exclua o próprio
> (`pgrep -f "$p" | grep -v ^$$`) ou case por `comm`, nunca pela linha inteira. **E ao diagnosticar,
> lembre que o diagnóstico também é um processo com aquela string na linha de comando.**

Sexta vez que esta família de erro morde em um único dia: o `pkill -f` que matou a própria sessão
SSH, o `pgrep` que contou a si mesmo em três reguladores, e agora a espera que se auto-alimenta. O
denominador é sempre o mesmo — **`-f` lê a linha de comando, e a sua linha de comando também está
lá.**

### SIS-93 · O gate de cenas órfãs gritou 9 vezes num projeto que estava produzindo (04/ago/2026)

O gate nasceu certo — cena aprovada no portão, sem clipe fresco, sem render vivo — e mesmo assim
acusou **9 cenas** em `o-acre-o-estado-que-o` e `uruguai-despovoado`. Diagnóstico antes de agir: o
`o-acre` estava na estação **qc** com 1 artefato novo nos últimos 30 min; o `uruguai` na **trilha**,
`status:"rodando"`, com 5. Nenhum dos dois travou.

O erro de raciocínio foi tratar **cena sem clipe** como sintoma absoluto. Ela é o estado *normal* de
quem ainda não chegou na estação de render — só vira defeito quando o projeto **parou de andar**.
O gate media a cena e concluía sobre o projeto.

A condição que faltava é a régua que o Mateus já usava à mão para separar "log parado" de "travado":

```js
const andou = sh(`find -L /dados/out/${slug} -type f -newermt '-30 minutes' | head -1`);
if (andou && andou.trim()) continue;   // o projeto anda: não há o que destravar aqui
```

Alertas caíram de 9 para **0**, e o gate segue pegando abandono de verdade.

> **A lei:** *um gate que julga a PARTE precisa da régua do TODO.* Antes de alertar sobre um item
> parado, pergunte se o **conjunto** a que ele pertence está parado — senão o alarme dispara em cima
> de trabalho em curso. E *alarme falso é bug de prioridade alta*: verificação que grita à toa ensina
> a ignorar a verificação, e aí ela para de proteger justamente quando acerta.

Irmã da [SIS-88] (procurar processo por CAMINHO, não por nome solto): as duas nasceram do mesmo gate
e da mesma pergunta — *o que eu estou olhando prova mesmo o que eu vou afirmar?*

### SIS-94 · O shell que procura o processo casa a si mesmo — e o filtro é o EXECUTÁVEL (04/ago/2026)

Nona ocorrência da mesma classe em um dia. Desta vez a busca já era a "correta" segundo a [SIS-88] —
percorria `/proc` em laço, comparava por **caminho** e não por nome solto:

```bash
for d in /proc/[0-9]*; do
  case "$(tr '\0' ' ' < $d/cmdline)" in *uruguai-despovoado/graphics*) n=$((n+1));; esac
done
```

Devolveu `1`. O processo era o **próprio shell do laço**: a string `uruguai-despovoado/graphics` está
na linha de comando dele porque ele a está procurando. A prova de que era fantasma veio de dois
detalhes: `etime` de `00:00` e a cmdline exibindo `]+\.html` — pedaço da minha própria regex. Com base
nesse `1`, decidi *não* disparar o render, e **9 cenas continuaram paradas** enquanto eu reportava
"já há render vivo, não disparo".

Pular o próprio PID (`$$`) não basta: em pipeline e substituição de comando nascem subshells com PIDs
que o script não conhece, e cada um herda a linha inteira.

O filtro que mata a classe é outro — o **executável**, não a linha:

```bash
for d in /proc/[0-9]*; do
  case "$(cat $d/comm 2>/dev/null)" in chrome|ffmpeg|node|headless_shell) ;; *) continue;; esac
  case "$(tr '\0' ' ' < $d/cmdline)" in *<caminho>*) ... ;; esac
done
```

Shell nenhum se chama `ffmpeg`. A pergunta muda de *"quem menciona isto?"* para *"quem é capaz de
fazer isto e está mencionando?"* — e a primeira sempre inclui quem pergunta.

**EMENDA de 04/ago, décima ocorrência — a lista importa tanto quanto a regra.** Apliquei este filtro
com `chrome|ffmpeg|node|bash` e ele voltou a mentir: o shell da consulta **é bash**, e carrega o slug
na própria linha porque está procurando por ele. Resultado: "1 processo do o-acre vivo" com o projeto
parado, eu recusei disparar o render, e a VM ficou **ociosa a 0,33× com 42 vídeos na fila** por um
ciclo inteiro.

A lista tem de conter só quem **de fato faz o trabalho**: `chrome|ffmpeg|headless_shell`. `bash` e
`node` são interpretadores genéricos — qualquer script que mencione o projeto entra, inclusive o que
pergunta. *Filtrar por identidade só funciona se a identidade for específica o bastante para excluir
quem observa.*

E note o custo assimétrico: aqui o erro produziu um falso **"está rodando"**, não um falso alarme. O
alarme falso irrita; o silêncio falso deixa a máquina parada. Na dúvida, o filtro deve errar para o
lado de acusar.

> **A lei:** *ao procurar processo por conteúdo, filtre antes pela IDENTIDADE dele.* Toda busca por
> linha de comando é auto-referente por construção; nenhum cuidado com PID resolve, porque o problema
> não é qual processo é você, é que a linha procurada existe em quem procura.

Instalado em `scripts/estudio/vigia.mjs` (gate de cenas órfãs). Supera o método da [SIS-88], que
continua valendo no que ela dizia — comparar por caminho, nunca por nome solto — mas era insuficiente
sozinha. *Um falso "está tudo rodando" é pior que um falso alarme: o alarme falso irrita, o silêncio
falso deixa o vídeo parado.*

## SIS-96 — contar processos pelo padrão conta a árvore, não os trabalhadores

**04/ago/2026.** O vigia acusou "7 loops de render para 3 projetos" e eu quase matei quatro deles
como duplicatas — o mesmo diagnóstico que ontem me fez derrubar render sadio. A árvore desmentiu:
`especies-humanas` era **um** loop (`ppid 1`) com dois subshells aninhados, e `o-acre` idem. Zero
duplicatas.

Um script que usa `( … ) &` aparece em `/proc` tantas vezes quantos forem os aninhamentos, todos
carregando a mesma linha de comando. Quem conta ocorrências do padrão conta a **estrutura interna**
do script e chama isso de concorrência.

**A regra:** trabalhador é o processo cujo **pai é o init** (`ppid 1`) — os demais são partes dele.
Antes de qualquer verbo destrutivo sobre "duplicatas", desenhe a árvore (`PPid` de `/proc/<pid>/status`)
e mate só raiz órfã de geração anterior. Vale para todo contador de concorrência, não só render.

**Corolário medido no mesmo ciclo:** `pgrp` (campo 5 de `/proc/<pid>/stat`) **não** liga o Chrome ao
loop que o abriu — ele forma grupo próprio. Deu "0 descendentes" com 72 processos de Chrome vivos.
Métrica que responde zero enquanto a máquina trabalha não é evidência de ociosidade: é métrica errada.

### Emenda à SIS-93 (04/ago/2026) — a régua dos 30 min ficou cega quando o teto de render cresceu
<!-- título ajustado em 04/ago: `### SIS-93 ·` numa emenda é lido pelo `regras-todas.mjs` como uma
     SEGUNDA lei com o mesmo ID e trava a geração do `_TODAS.md` ([SIS-62]). Texto intacto. -->

A SIS-93 diz: *projeto com sessão viva e log parado só é trava se não produziu artefato em 30 min*.
Ela nasceu quando o teto de render era 1800 s, ou seja, **nenhuma cena podia passar 30 min sem
terminar**. Com o teto proporcional (REND-62), uma cena de 32,6 s tem 5.190 s de prazo — e passa
mais de uma hora **capturando frames em `/dev/shm` sem gravar um único byte em `/dados`**.

Medido neste ciclo: `especies-humanas` apareceu como *parado* com a `s15` viva e **720 de 978
frames** já capturados. Pela régua isolada, era trava; matar teria jogado fora 720 frames pagos —
justamente a cena que mais morreu na semana.

**A emenda:** antes de declarar trava, olhe também a captura em curso — `/dev/shm/frames-*` com
dono vivo e contagem que **cresce entre duas leituras** é produção, ainda que o disco não mostre
nada. Artefato em disco é o sinal tardio; o frame na RAM é o sinal presente.

**O que generaliza:** toda régua de "está parado?" embute uma premissa sobre a duração máxima de uma
unidade de trabalho. Quando essa duração muda — e aqui fui eu que a mudei, no mesmo turno —, a régua
vira falso positivo sem avisar. **Quem afrouxa um limite tem de revisitar os detectores calibrados
por ele.**

## SIS-97 — "vivo" não é "trabalhando": a prova é o tempo de CPU, não a existência do processo

**04/ago/2026.** Dois `qc-cena.mjs` (uruguai e o-acre) apareciam vivos e eu os declarei "trabalhando,
só lentos" — duas vezes, em dois ciclos. A medição desmentiu: **vivos há 12 e 9 minutos com CPU 0 s**,
zero arquivos de QC gravados em 40 min, `_portao.json` parado às 07:52. Nove cenas represadas atrás
disso, com a máquina a 3,9×.

Um processo bloqueado (esperando lock, I/O ou recurso) é **indistinguível de um processo ocupado**
por qualquer verificação que só pergunte "existe?". E `%CPU` do `ps` também engana: é média desde o
início, então cai para perto de zero num processo que trabalhou e parou.

**A régua:** para saber se um processo trabalha, leia o **tempo de CPU acumulado** (campos 14+15 de
`/proc/<pid>/stat`, em jiffies) em **duas leituras** — se não sobe, ele não executa, por mais vivo que
esteja. E confirme com o lado do resultado: artefato novo no destino desde que ele começou.

**Onde isso morde além de aqui:** todo detector de trava que usa "sessão viva" como sinal de saúde.
A SIS-93 e sua emenda tratam do caso oposto (trabalha sem gravar em disco); esta trata do caso
gêmeo — **não trabalha e parece que sim**. Juntas: o sinal confiável nunca é o processo, é o
*avanço* — frames que crescem, CPU que sobe, arquivo que aparece.

## SIS-98 — o portão do render pendura de forma reincidente, e os timeouts que ele tem não cobrem o caminho

**04/ago/2026, medido duas vezes no `uruguai-despovoado`.** O `qc-cena.mjs` disparado pelo
`_render-4k-loop.sh` fica vivo com **tempo de CPU imóvel** (24→24 e depois 11→11, em leituras de 6–8 s),
sem gravar nada em `qc/` e sem soltar o render. Derrubado e redisparado, **travou de novo** — logo
não é acaso de execução, é determinístico para esse projeto.

Duas hipóteses minhas caíram na medição, e vale registrar as duas para ninguém repetir:
1. **"É o lock global de render"** — falso: o portão do `o-acre` destravou sozinho e o projeto rendeu
   +2 clipes enquanto a mesma cena concorrente seguia capturando.
2. **"Falta timeout no gate"** — falso: `qc-cena.mjs` tem 8 ocorrências de timeout. Elas existem e
   ainda assim ele pendura, ou seja, **não cobrem o caminho que trava**.

**O que está estabelecido:** o portão represa cenas prontas por tempo indefinido, e a única coisa que
o solta hoje é um humano (ou este vigia) matando por PID. Enquanto a raiz não for achada, o efeito
prático é que **o gate barato criado para evitar render desperdiçado passou a custar mais que o
desperdício que evita**.

**O que investigar quando houver janela:** qual cena do `uruguai` ele está avaliando quando pendura,
e se o timeout existente cobre o `await` daquele ponto — timeout que envolve a chamada errada é
decoração. Um gate que trava a linha precisa de prazo **no laço externo**, não só nas chamadas
internas: se a cena N não terminou em X segundos, ela é reprovada por prazo e a fila anda.

## SIS-99 — o backup existia, tinha o tamanho certo, e estava podre

**04/ago/2026.** O `especies-humanas` fechou 25/25 cenas e travou na finalização por master fora de
fase. O bruto não estava na VM (o descarregador o apagara) nem em `producao/` no bucket — só em
`macbook-backup/`. Baixei os 3,18 GB e a regeração do master morreu com

```
[h264] Error splitting the input into NAL units.
Error while decoding stream #0:0: Invalid data found when processing input
```

**Local e origem têm exatamente o mesmo tamanho** (3.409.628.510 bytes nos dois). O download foi
íntegro; **o arquivo no backup é que está corrompido**. Não há segunda cópia: o projeto perdeu o
insumo que permite refazer o master, com todas as 25 cenas já renderizadas e pagas.

**O que isso ensina, e é o núcleo:** "o backup existe" e "o backup tem o tamanho certo" são duas
afirmações que já falhamos em distinguir de "o backup **presta**". Tamanho igual é o teste mais fácil
de passar e o mais fácil de enganar — ele não abre o arquivo. A verificação que valeria é barata e
não era feita: **um demux de custo quase zero** (`ffmpeg -v error -i <arq> -c copy -f null -`) na hora
de subir, com o resultado guardado junto do objeto.

**Onde mais isso mora:** a mesma assinatura de erro apareceu hoje no composto do `oceano-700km` já
entregue (1.051 erros de NAL, 179 de 1.218 frames decodificando). Ou seja, **não é caso isolado deste
arquivo** — é uma classe de defeito que atravessa a linha sem ninguém olhar, porque nenhum gate abre
o vídeo para conferir se ele decodifica.

**Regra:** ordem sagrada é *sobe → verifica → apaga*, e **"verifica" significa decodificar, não
comparar bytes**. Enquanto o gate de demux (tarefa aberta há dias) não existir, todo `--limpar` que
apaga um bruto está apostando o insumo original contra uma verificação que não foi feita.

---

## SIS-100 — a transcrição era de um vídeo que não existia mais, e todo agente da linha leu ela como verdade

**Medido em 04/ago/2026, `paises-baixos-mar`, no meio de uma revisão do dono.** Ao converter um
timecode dele para o relógio do master, a conta não fechava. A causa, quando aberta, era estrutural:

- `words.json` — datado de **29/jul**, transcrito do master **BRUTO**;
- `_media/_master-decupado.mp4` — o arquivo que virou vídeo, de **04/ago**;
- e **duas** listas de corte vivas ao mesmo tempo: a do disco com **57 spans** e uma
  `_cortes-ANTES-ALINHAMENTO.json` guardada no bucket com **81** — **nenhum span em comum**.

O efeito medido: na janela 314–332 s do master, o áudio tem **39 palavras** e a projeção do arquivo
previa **19**. Vinte palavras de diferença em dezoito segundos. **Todo agente que lia a transcrição —
montador, regente-de-imagem, editor-de-arte, QC — enxergava um vídeo que não existe**, e cada um
produziu trabalho correto em relação ao que recebeu: word-lock apontando para a palavra errada, cena
ancorada num trecho que mudou de lugar, gate de fala repetida rodando sobre um texto que não era o do
áudio. Foi por isso que a repetição de take da [FIN-76] era **invisível**: ela não estava no arquivo
que os agentes liam.

**Nenhum gate pegou, e não é azar — é ausência de pergunta.** Os gates da casa conferem coerência
*interna* (o corte cabe no master? o espelho soma? o clipe existe?) e todos passavam, porque cada
artefato era coerente **consigo mesmo**. Ninguém perguntava se os artefatos eram do **mesmo momento
do mundo**. Data de arquivo é a informação mais barata do sistema e não era usada por nada.

> **A lei, e ela tem três partes:**
> 1. **Um artefato por etapa.** Não existem duas listas de corte, duas transcrições, dois espelhos
>    "quase iguais". A versão superada vai para `arquivo-morto/` no ato — não fica no bucket com nome
>    explicativo, porque nome explicativo é convite a alguém achar que aquele é o bom.
> 2. **O relógio se declara DENTRO do arquivo.** Todo derivado de tempo carrega de qual relógio ele
>    fala (`BRUTO` · `MASTER` · `TIMELINE`) e de qual arquivo-fonte foi derivado. Relógio implícito é
>    o que permite dois artefatos divergentes parecerem intercambiáveis.
> 3. **A transcrição é do master VIGENTE, sempre.** Refez o master? A transcrição venceu no mesmo
>    instante. Transcrever de novo é barato ([memória: Scribe liberado para refazer]); reconstruir uma
>    produção inteira sobre texto errado não é.

**Os três relógios, nomeados de uma vez** (a confusão entre eles é a raiz de toda esta família):
`BRUTO` — a gravação como saiu da câmera; **morre na decupagem e não deve sobreviver a ela**.
`MASTER` — `_media/_master-decupado`, o material já cortado; é o relógio do `words.json` e do espelho.
`TIMELINE` — o que o dono assiste (composto/XML) = master + os gaps de 3 s dos cards de título.

**A ferramenta que prova, e ela já existe:** `node scripts/mapa-limpo.mjs <proj> --conferir` — confere
o `words.json` contra o **áudio** do master e o deslocamento MASTER→TIMELINE contra a soma dos gaps.
Ela teria pego este defeito no primeiro segundo. O conserto do projeto foi re-transcrever o master
decupado: **2563 palavras, exatamente as 2563 que o dono exportou do XML**, com correlação de envelope
composto × master de **1,0000**. Os arquivos antigos foram para
`arquivo-morto/paises-baixos-relogios-divergentes-20260804/`.

**⚠️ E o gate só vale se for CHAMADO** — é a [ARTE-100] aplicada aqui: `--conferir` tem de rodar na
saída da decupagem (onde o conserto é uma re-transcrição) e na abertura de todo passe de revisão
(onde o dono aponta timecode). Escrito e não invocado, ele repete a história de sempre.

**A forma geral, que vale muito além de vídeo:** *dois derivados do mesmo original, com datas
diferentes e sem carimbo de origem, não divergem com barulho — divergem em silêncio, e cada consumidor
acha que está certo.* Onde houver cadeia de derivação, o elo carrega de onde veio e de quando; a
alternativa é descobrir pelo produto final, que é o lugar mais caro do mundo para descobrir.

---

## SIS-102 — o comando de cópia relatou a velocidade de um arquivo que não gravou

**Medido em 04/ago/2026**, ao proteger `~/Movies` antes de liberar o disco do Mac.

Quatro `.mov` de cópia única subiram para o bucket num laço de `gcloud storage cp`. O log saiu limpo,
com uma linha de throughput por arquivo — inclusive `ILHAS DE ABAS ATUALIZADO.mov`, com
`Average throughput: 8.0MiB/s`. **Esse arquivo não existia no destino.** O `ls` da pasta devolvia os
outros três; o `du` do objeto respondia `One or more URLs matched no objects`. Um GB anunciado como
transferido, e nada gravado.

Só apareceu porque a conferência foi feita **arquivo a arquivo, comparando tamanho local × tamanho no
destino** — o passo que parecia burocrático depois de um log sem erro. Se a checagem tivesse sido a
usual ("subiu os 4? o log não acusou falha"), o arquivo teria sido apagado do Mac em seguida, e a
perda só apareceria no dia em que alguém precisasse dele.

**A família é conhecida e esta é uma porta nova.** Já sabíamos que exit code relata o processo e não o
resultado (FIN-73), que `✓` impresso pelo próprio script não é prova, e que verificação por agregado
esconde o arquivo que falta. Aqui o mentiroso é mais convincente que todos: **uma métrica de
desempenho**. Throughput é o tipo de número que ninguém desconfia, porque parece medição — e medição
de quê, exatamente? Da leitura da origem, não da gravação no destino.

**Regra:** a prova de um upload é o **objeto no destino com o tamanho da origem**, relido depois que o
comando terminou. Log sem erro, exit 0 e velocidade média não provam gravação — nenhum dos três olha
para o destino. Em backup que precede remoção, isso não é rigor opcional: é a única coisa entre a
ordem `sobe → verifica → apaga` e a versão dela que perde arquivo. Quem faz o backup relê o destino,
ou não fez backup — fez uma tentativa de backup com relatório bonito.

O `scripts/estudio/descarregar-mac.mjs` nasceu com isso embutido: ele relê o bucket **depois** da
subida e, se um único arquivo não confere, o projeto inteiro sai da lista de remoção.

---

### Emenda à SIS-102 · o ponto cego estava no VERIFICADOR, e o nome do arquivo era a chave

**Medido horas depois da lei acima**, ao usar o `descarregar-mac.mjs` para valer.

A prova arquivo a arquivo recusou três projetos: `nilo-nao-secou` (9 de 81 divergentes),
`uruguai-despovoado` (7 de 82) e `publi-manual` (5 de 48). Subi os 21 à mão, o `cp` devolveu sucesso —
e a prova **recusou de novo, com os mesmos números**. Só então olhei os nomes:

    _media/trilha/ES_3293_Tired Eyes - Phoenix Tail.mp3
    _media/trilha/ES_147217_Serpent's Mystery - HATAMITSUNAMI.mp3
    Captura de Tela 2026-07-03 às 12.47.34.png

Todos com **espaço no nome**. O parser do inventário do bucket usava `/^\s*(\d+)\s+(\S+)\s+(gs:\/\/\S+)$/`
— e `\S` não casa espaço. Toda linha de objeto com espaço no caminho era descartada em silêncio, como
se o arquivo não existisse. A consulta direta ao objeto respondia na hora, com o tamanho exato.

**Duas coisas para levar:**

1 · **O ponto cego não avisa que é cego.** Ele responde *"não achei"* com exatamente a mesma cara de
*"não existe"*. Foram duas rodadas inteiras culpando o upload — que estava certo — porque o
verificador tinha a mesma resposta para as duas perguntas. Ao investigar divergência entre origem e
destino, a terceira hipótese, depois de "não subiu" e "subiu errado", é **"subiu e eu não sei ler"**.

2 · **O erro conservador mascarou-se por ser conservador.** Ele recusava apagar, então não destruiu
nada — e por isso poderia ter durado meses, tratado como "aquele projeto que nunca fecha a prova".
Verificação que falha para o lado seguro ainda é verificação quebrada: ela para de distinguir o
projeto com problema real do projeto que ela não consegue medir, e a diferença é tudo.

**Regra:** em parser de saída de ferramenta, o campo de **caminho** casa com `.+` até o fim da linha,
nunca com `\S+` — nome de arquivo do mundo real tem espaço, acento e apóstrofo. E todo verificador
que devolve "ausente" deve ser testado com **um caso que existe e é esquisito**, não só com um que
falta: a diferença entre os dois é justamente o que ele precisa saber enxergar.

---

## SIS-103 — toda linha alterada tem de rastrear ao pedido; código alheio se MENCIONA, não se mexe

**Destilado em 05/ago/2026** do repositório `multica-ai/andrej-karpathy-skills` (princípio 3), e
comprovado por um erro cometido na mesma sessão em que a regra foi lida.

O núcleo já dizia *"em árvore compartilhada, registre seletivamente"* e *"traga o problema junto com a
saída"*. Faltava a régua que se aplica **linha a linha**, e por isso o erro passou:

Ao commitar o gate de procedência, o `git add scripts/entregar.mjs` levou junto **178 linhas de outra
sessão** (FIN-72 e FIN-63, consertos legítimos e já documentados no handoff). Só apareceu porque o
`--stat` acusou 233 linhas onde eu tinha escrito ~55, e eu fui conferir. Não deu para separar depois:
os hunks estavam no mesmo arquivo, e a alternativa seria partir hunk à mão. **O commit saiu declarando
a mistura — que é o consolo possível, não o conserto.**

**O teste, e ele é binário:** *toda linha do diff rastreia direto ao que foi pedido?* Se uma linha não
rastreia, ela é de outra pessoa, de outra tarefa, ou de um impulso de arrumação — e as três saem.

**As três formas do erro, em ordem de frequência:**

1. **Arrumar o vizinho.** Reindentar, renomear variável, "melhorar" um comentário adjacente, alinhar
   estilo. Cada uma é inofensiva sozinha e todas juntas tornam o diff ilegível para quem revisa — e é
   por essa porta que o defeito real entra sem ser visto.
2. **Varrer trabalho alheio para dentro do registro.** O caso acima. Em pasta com sessões paralelas,
   `git add <arquivo>` não é seletivo: seletivo é `git add` do arquivo **que só você tocou**, depois
   de olhar o `--stat`.
3. **Apagar o que parece morto.** Código órfão que não é seu se **menciona no relatório** e fica.
   Só se remove o órfão que a SUA mudança criou. O que parece morto costuma ser o que ninguém entendeu
   ainda — e nesta casa a remoção passa antes pelo arquivo morto, nunca direto.

**Regra:** antes de registrar, leia o `--stat` e compare com o que você escreveu. Divergência grande
não é detalhe de contagem: é trabalho de outra pessoa no seu commit, ou seu impulso de arrumação no
diff de alguém. Se não der para separar, **declare a mistura na mensagem** — o histórico é o que
impede que amanhã se atribua o conserto ao autor errado.

> ⚠️ **Do mesmo repositório, o princípio 1 ("na dúvida, pare e pergunte") foi REJEITADO** — ele
> contradiz o núcleo §1 por decisão explícita do dono, e nas estações headless não há ninguém para
> responder: a sessão que para para perguntar morre sem produzir. O porquê completo está em
> `claude-cerebro/ferramentas/acervo-externo.json`, para não reabrir a discussão.

<!-- ═══ LEIS VINDAS DA VM `estudio-top10`, fundidas em 2026-08-05 ═══
     Elas foram destiladas lá, em paralelo, e nunca chegaram ao git. As que colidiam em número
     com uma lei diferente daqui foram RENUMERADAS (cada uma diz de onde veio, logo abaixo do
     título). As que caíam em número livre entraram com o ID original. Nada foi descartado. -->

### SIS-104 · O gate chamava um binário que não existe na VM, e o catch transformava isso em "não declarada"

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `SIS-104` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**Medido no `senna@decupagem` (03/ago/2026).** O `qc-espelho-verbos` abriu com *"⚠ senna: origem_master
não declarada — não dá para julgar os veredictos"* e mandou declarar com um comando. Só que a
`pauta.origem_master` do `senna` **já era** `bruto-estudio`, gravada pela forense do bucket e visível
em `out/_ORIGEM-MASTER.md` desde então. O gate lia o banco por `execFileSync("sqlite3", …)` dentro de
um `try/catch` que devolve `null` — e **não existe binário `sqlite3` nesta VM**: o estúdio inteiro
fala com o `estudio.db` por `node:sqlite`. A chamada lançava `ENOENT`, o catch engolia, e o gate
respondia "não declarada" **para todo projeto, em toda execução, desde sempre nesta máquina**.

**O que apareceu quando ele voltou a enxergar:** o `senna` passa — 90 cenas, 90 com veredicto
declarado, nenhum impossível para um vídeo do zero. Nenhum defeito escondido desta vez; o prejuízo foi
o gate inteiro, que nunca julgou nada aqui.

**Por que é lei e não conserto.** A [SIS-71] já dizia que "não sei julgar" é sinal de saúde do gate.
Falta a metade que este caso expõe: **um gate pode não saber por falta de DADO ou por falta de
FERRAMENTA, e as duas coisas não podem sair pela mesma boca.** Falta de dado é indeterminação
legítima, e a mensagem certa é pedir o cadastro. Falta de ferramenta é o gate quebrado — e ali pedir
cadastro é pior que calar: manda corrigir quem está certo, e o operador que obedece encontra o dado
já lá, dá de ombros e segue. Foi exatamente o que quase aconteceu aqui.

**A regra.** (1) **Falar com o `estudio.db` é por `node:sqlite`, nunca pelo CLI `sqlite3`** — ele não
está instalado na VM de produção. Ainda chamam o binário, todos com o mesmo risco:
`acervo/topicos.mjs`, `db/nicho.mjs`, `auditoria/reconciliar-catalogo.mjs`,
`frontend/acoes-assistente.mjs`. (2) `catch { return null }` em torno de uma dependência EXTERNA
apaga a diferença entre "o dado não existe" e "eu não consigo ler" — quando o `null` alimenta um
caminho de indeterminação, **o erro de infraestrutura tem de abortar alto** (`exit 2`), e só a
ausência de dado devolve `null`. (3) Generalização: **gate que nunca reprovou ninguém merece
desconfiança antes de elogio.** O teste barato é rodá-lo contra um caso que você SABE que deveria
julgar — se ele não julga, o defeito é dele, não do projeto.

**Agente-raiz:** `scripts/qc-espelho-verbos.mjs` (consertado: lê por `DatabaseSync` em readOnly,
aborta com mensagem própria se o `.db` sumir ou não abrir; provado nos quatro casos —
`bruto-estudio`, `pre-editado`, `desconhecido` e slug ausente). Mesma família da [SIS-71]; não a
supera, completa.
### SIS-105 · Gate AUTO-DECLARADO não é gate — e lei nova não conserta o acervo já concebido (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `SIS-105` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

> 🔀 Nasceu como **SIS-70** e depois **SIS-73** nesta sessão da VM: o clone local estava 12 commits atrás e os dois
> números já existiam no remoto. Pela [SIS-62], quem está no remoto fica com o número — conferido com
> `git show origin/main:seed/regras/SIS.md` em vez do arquivo local, que é justamente o que mentia.

**Medido no `mamute-de-volta@arte`.** A fila me despachou para desenhar *"24 cenas do espelho sem
HTML"*. As 24 já estavam desenhadas: a direção fundiu 21 runs (`fundir:true` no `conceito-visual`),
os editores executaram — 81 arquivos, cada um cobrindo a janela inteira do seu run, auditor 81/81
limpo, `qc-contrato` 81/81 — e **ninguém gravou a fusão no `espelho.json`**. Sem `_mergedInto`,
`situacao.mjs`/`despachante.mjs` contam cada filho como cena sem arte e devolvem o vídeo pra ARTE
para sempre. Cada volta queima uma sessão inteira auditando trabalho pronto. Foi a **5ª+ retomada**
deste vídeo.

A regra já existia: a [ARTE-127] nasceu no `galaxia-arco-flecha` no MESMO dia e manda o diretor-de-arte
gravar a fusão ele mesmo, com um gate 4b na checklist do agente. **Não bastou, por duas razões — e é
isso que esta lei registra:**

1. **O gate 4b é AUTO-DECLARADO.** Ele mora no `.claude/agents/diretor-de-arte.md` e depende de o
   agente ler a lei, executar e confessar. Nada no estúdio cruzava `conceito-visual.fluxo[].fundir`
   com o `espelho.json` — dois arquivos no mesmo diretório, contradizendo-se sem que uma linha de
   código olhasse os dois juntos. *Instrução para agente não é gate; gate é código que reprova.*
2. **Lei nova não visita o passado.** O `conceito-visual` deste vídeo é de 01/ago; a lei é de 03/ago.
   Todo vídeo **concebido antes da lei** carrega o furo, e a lei — que só fala com quem vai conceber
   dali pra frente — não olha para eles. Medido com o gate novo: de **9 vídeos com run fundido, 7
   estavam com a fusão fora do espelho** (25 runs), incluindo `energia-escura` e `orcas-nao-matam`,
   que estavam em QC naquele momento a caminho do mesmo loop. Nenhum chegou a ser entregue — o
   defeito não vazou para vídeo publicado, mas só porque travaram antes.

**O segundo sintoma é mais silencioso que o loop da fila** e é o que morde quem escapa dele: a `dur`
da mãe fica valendo só o primeiro beat, então o clipe longo entra num slot curto e a cena sai
truncada na montagem, sem erro em lugar nenhum. No `uruguai-despovoado` são 8 runs assim (mãe de
11,8 s para janela de 33,3 s); no `orcas-nao-matam` o filho estava marcado e **só a `dur` ficou
errada** — meio conserto passa nos olhos de quem só procura `_mergedInto`.

**Gate:** `scripts/qc-fusao-espelho.mjs <proj>` — cruza os dois arquivos e reprova por run: filho sem
`_mergedInto`, filho apontando para mãe errada, id do fluxo que não existe no espelho, e `dur` da mãe
diferente da janela (`fim do último − inSec do primeiro`, em BRUTO). `--todos` varre `out/*`;
`--aplicar` grava a fusão que a direção já decidiu (idempotente, com backup). Exit 1 reprova.

**Corolário de sistema, que vale além da fusão:** ao escrever uma lei que exige um campo novo num
artefato, **varra o acervo no mesmo movimento**. A lei protege o futuro; quem protege o passado é uma
varredura — e ela custa uma leitura de JSON por projeto. Esta levou dois minutos e achou 7 vídeos.

**Agente-raiz:** `.claude/agents/diretor-de-arte.md` §3.2 e gate 4b — o texto da [ARTE-127] estava
certo, faltava o comando. O gate 4b agora cita `qc-fusao-espelho.mjs` em vez de mandar o agente
montar um `node -e` na hora. Completa a [ARTE-127]; não supera nada.
### SIS-106 · "NÃO MEDIU" E "PASSOU" SÃO A MESMA COR NO RODAPÉ — e o rodapé é a única linha que alguém lê

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `SIS-106` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação QC do `energia-escura`. O `qc-cena.mjs` imprimiu:

```
✓ 41/41 cena(s) passam os gates duros. O qc-visual pode julgar só o subjetivo.
```

O gate de **tamanho de texto não rodou em uma única cena** — 41 de 41 —, e na `c39` outros três
(`carga`, `colisão`, `fora-do-quadro`) também não. O runner sabia disso: cada linha trazia o
parêntese `(tamanho não medido)`. Mas o parêntese é uma linha por cena, no meio de 41, e o rodapé —
a linha que a sessão lê e cola no diário — dizia verde sem ressalva.

**A decisão de base está certa e não é ela que muda.** "Crash ou timeout → indefinido, e indefinido
NÃO reprova" existe porque Chrome que não sobe na VM sem GPU não pode barrar o render de um vídeo
pronto. O erro é de RELATO: o mesmo símbolo (`✓`) e o mesmo total (`41/41`) para "medi e passou" e
para "não consegui medir".

**O conserto** (`scripts/qc-cena.mjs`): o rodapé passa a contar só as cenas com **todos** os gates
medidos, e lista abaixo quantas cenas ficaram sem cada gate, com o contorno conhecido (mapa com
terreno DEM e footage 4K pesado não fecham no passo padrão — `--passo=0.5` e timeout largo).

**A regra:** *num relatório automático, ausência de medição tem de ter símbolo próprio.* Sempre que
um verificador puder terminar em três estados — passou, falhou, não mediu — e o resumo só tiver dois
símbolos, o terceiro se disfarça no mais otimista. Vale para gate, teste, lint, healthcheck: o
resumo tem de responder **"quantos eu de fato olhei?"** antes de responder "quantos passaram".
Relacionado: [ARTE-129] (o gate que ninguém tinha, na mesma estação e no mesmo dia).
### SIS-107 · SESSÃO FILHA NÃO ESCREVE EM SYMLINK QUE SAI DO REPO — e o "sem-mudança" parece decisão do agente

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `SIS-107` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação APROVAÇÃO do `senna`. O `consertar-cenas.mjs` despachou 23
sessões seguidas de conserto de cena. As 23 voltaram assim:

```
· s04-homem-que-ninguem-viu — o agente respondeu mas não tocou no arquivo
· s01-abertura-nascimento-morte — o agente respondeu mas não tocou no arquivo
… 23×
```

48 achados marcados `sem-mudanca`, **zero arquivos tocados**, ~13 minutos de inferência queimados. O
diagnóstico parecia de julgamento (agentes discordando dos achados); era de **infra**: `out/` neste
disco é symlink para `/dados/out`, e o harness da sessão filha resolve o *realpath* antes de decidir
permissão. O caminho pedido ficava dentro de `/home/…/top10-estudio`, o real caía fora, e todo
`Write`/`Edit` era negado:

```
Claude requested permissions to write to /home/…/out/senna/…/PROVA.txt,
but you haven't granted it yet.
```

**O detalhe que atrasou o diagnóstico:** o `Read` pelo caminho absoluto **passava**. Um teste de
leitura verde faz concluir que o diretório está liberado — e não está. *Leitura e escrita são
permissões diferentes; só a escrita prova acesso de escrita.*

**O conserto** (`scripts/consertar-cenas.mjs`): antes de despachar, o script resolve
`realpathSync(out/)` e, se diferir do caminho no repo, acrescenta `--add-dir <real>` aos argumentos
do `claude`. Onde `out/` é diretório de verdade, nada muda. Vale para todo script que despacha sessão
headless com escrita: `conserto-automatico.mjs`, `revisar-no-lugar-do-mateus.mjs` (este só lê, por
isso escapou) e qualquer futuro.

**A regra:** *sessão filha herda o cwd, não os diretórios liberados — e symlink some na herança.*
Quando um lote inteiro volta "respondeu mas não fez", suspeite de permissão antes de julgamento, e
prove com uma **escrita** de teste, nunca com uma leitura. Um lote 100% uniforme não é opinião
convergente: é bloqueio. Relacionado: [SIS-17] (cascata de cota — o outro modo de "morre com vaga ao
lado") e [SIS-106] (não-medido disfarçado de aprovado, mesmo dia).

---
### SIS-112 · Veredito verde precisa de POPULAÇÃO atrás dele — "OK em 0 arquivos" é não-medido usando a roupa de aprovação (04/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `SIS-112` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** Estação de QC do `o-acre-o-estado-que-o`. O handoff da arte dizia "hex 71/71 limpo". Rodei de
novo, do jeito mais natural — `node scripts/qc-hex.mjs out/o-acre-o-estado-que-o` — e li:
`✓ hex OK em 0 arquivo(s)`, **exit 0**. A pasta de um projeto não tem `.html` solto: as cenas moram em
`graphics/`. O gate varreu o vazio e aprovou o vazio. Com a pasta certa, as 71 medem e passam de verdade
— mas o verde de antes era do mesmo tom, na mesma coluna do relatório, e nada no exit code o distinguia.

**Não era um caso isolado, e é aí que vira lei.** No mesmo dia, o `qc-entrada-tardia` imprimiu duas linhas
seguidas que se contradizem: `0 cenas medidas` e `✓ nenhuma cena chega atrasada à própria deixa`, exit 0.
Ele mede o CLIPE `-4k.mp4`; a estação ainda não tinha renderizado nada. Dois gates diferentes, escritos por
mãos diferentes, com o mesmo defeito estrutural: **o veredito nasce de `achados.length === 0`, e ninguém
perguntou quantos alvos foram examinados.** "Não achei defeito em nada" e "não achei defeito" são a mesma
expressão em código e coisas opostas na vida.

**Por que é pior que um gate que falha.** Gate que quebra faz barulho e alguém trata. Este entra no
relatório como aprovação, some no meio de dez linhas verdes, e a arte que ninguém checou segue para o
render 4K com o carimbo de checada. É a [SIS-106] ("não medido não é passou") vista do outro lado: lá o
perigo era o operador ler indefinido como PASS; aqui é o próprio gate se declarar PASS.

**Conserto aplicado (os dois).** População zero agora sai **2** — não medido, que nenhum portão da casa lê
como aprovação — com a mensagem dizendo o que faltou: `qc-hex` aponta o `…/graphics` que o chamador quis
dizer; `qc-entrada-tardia` diz que mede vídeo renderizado e que a hora dele é depois do render.

**A regra, para todo gate novo.** (1) Antes de imprimir ✓, pergunte **quantos alvos mediu**; zero é exit 2,
nunca 0. (2) Ponha a contagem NA linha do veredito (`✓ … (71 medidas)`) — verde sem número é verde sem
prova, e quem lê o log merece ver a população sem ir procurar. (3) Ao herdar um "todos os gates verdes" de
outra estação, reproduza pelo menos um deles: o número de arquivos medidos é o que separa o handoff que
mediu do que só rodou o comando.

---
### SIS-113 · Campo criado para desambiguar que ninguém LÊ reprova o acervo inteiro (05/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `SIS-113` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** `qc-modo-regua` reprovou o `mamute-de-volta` com "101 cenas em 12 modos escritos como
CÓDIGO — o contrato pede o nome de família". Nenhuma das 128 cenas tinha `modo` escrito como código:
o espelho estava na forma exatamente CERTA, `modo:"footage"` + `modelo:"M07"`, que é a saída que o
próprio schema prevê como opcional e precisa.

**A mecânica.** `reguaDaCena()` (`src/modos.mjs`) prefere o campo `modelo` ao `modo` — e, quando o usa,
devolve `forma:"codigo"`, porque a forma descreve o QUE FOI RESOLVIDO, não de onde veio. Para o "de
onde veio" existe um segundo campo, `veioDe:"modelo"|"modo"`, carimbado na mesma linha, desde sempre.
O gate lia só a `forma`. Medido: `grep -rn veioDe scripts/ src/` devolvia **duas ocorrências, as duas
sendo a ESCRITA** — o campo era produzido e nunca consumido por ninguém, em todo o repo.

**Por que passou tanto tempo.** O gate não estava quebrado nem silencioso: falava alto, em vermelho, com
número grande e conserto plausível ("o contrato pede o nome de família"). Uma sessão obediente corrige o
espelho — apaga o `modelo` de 101 cenas — e aí sim quebra a régua de arte de verdade, que é justamente o
que o campo `modelo` existe para salvar ([ARTE] `modelo` vence `modo` ao apontar o exemplar). **Gate
errado que acusa com autoridade é mais caro que gate mudo: ele recruta quem o lê para destruir o dado
certo.**

**A regra.** (1) Campo cuja única razão de existir é desambiguar dois casos **tem de ter consumidor**;
antes de fechar a peça que o cria, `grep` pelo nome e confirme que alguém LÊ — produtor sem leitor é
um `if` que ainda não foi escrito, e o caso ambíguo já está passando errado em algum lugar. (2) Quando
um gate acusar uma população grande de uma vez (dezenas de cenas, "todas as X"), **desconfie do gate
antes do acervo**: o acervo erra em bolsões, o gate erra em bloco. Meça o campo cru (`node -e` no JSON)
antes de aceitar o veredito. (3) Enum de contrato e código de catálogo são vocabulários DIFERENTES sobre
a mesma coisa; sempre que os dois convivem, quem os cruza precisa dizer qual está lendo.

**Conserto aplicado.** `scripts/qc-modo-regua.mjs` só acusa violação de contrato quando
`r.forma === "codigo" && r.veioDe === "modo"` — o código escrito no próprio `modo`, que é o que o enum
de famílias reprova. Com o `modelo` presente, a cena segue para a cobrança de régua, que é o que o gate
deveria estar medindo. Depois do conserto: `✓ PASS — todo modo respeita o contrato`, com os alertas de
régua nua (M06/M10/M12/M15/M26) intactos, que são a dívida REAL que o gate existe para mostrar.

**Adendo à [SIS-112] (05/ago/2026, QC do `mamute-de-volta`).** A lei consertou os dois gates que a
motivaram (`qc-hex`, `qc-entrada-tardia`) e escreveu a regra "para todo gate NOVO" — mas ninguém varreu
os ANTIGOS da mesma classe. Uma estação de QC depois, **mais dois** apareceram sozinhos, sem procurar:

· `qc-tiles-faltando` numa pasta sem render imprimia `0 com defeito · 0 limpos` e saía **0**.
· `qc-laudo` — o gate cujo lema impresso é *"cena não julgada não é cena aprovada"* — chamado com o
  SLUG em vez do caminho (`mamute-de-volta` em vez de `out/mamute-de-volta`) não achava o espelho,
  desarmava a conferência de cobertura e imprimia **"gate não se aplica", exit 0**, enquanto 40 laudos
  reais existiam na pasta certa. O gate que existe para barrar cena não-julgada **se absolvia
  exatamente quando não conseguia achar o alvo**.

Os dois consertados (exit 2 + a frase que diz o que faltou e como chamar). **Duas lições.** (1) Lei que
descreve uma CLASSE de defeito não termina no caso que a motivou: ou a varredura retroativa acontece
junto, ou a lei protege só o futuro e o acervo segue mentindo em verde. (2) A frase **"não se aplica"**
é tão perigosa quanto o ✓ — é uma absolvição explícita, e no `qc-laudo` ela era emitida no caminho de
erro. Gate nenhum decide sozinho que não se aplica a si mesmo: quem não achou o alvo diz que não achou.

---
### SIS-114 · O carimbo do portão grava "passou" sobre uma medição que não aconteceu — e depois impede que ela aconteça (05/ago/2026, QC do `especies-humanas`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `SIS-114` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O que foi medido.** `node scripts/qc-cena.mjs out/especies-humanas --forcar` nas 25 cenas fechou com o
rodapé honesto que a [SIS-106] mandou existir:

```
▲ 25 cena(s) com medição FALTANDO (indefinido não reprova, mas também não aprova):
    tamanho: 25 cena(s) sem medir · carga: 8 · fora-do-quadro: 6 · colisão: 4
```

E **gravou `ok:true` no `_portao.json` para as 25**. O rodapé diz "não aprova"; o carimbo diz aprovado.

**O segundo tempo é o que fecha a armadilha.** Fui re-medir o que faltava em lotes pequenos, que é
exatamente o que o rodapé pede. O runner respondeu:

```
↩ 4 de 4 cena(s) com carimbo válido — puladas (use --forcar para re-medir)
✓ todas as cenas já estavam verdes e inalteradas.
```

O carimbo nascido da medição que faltou passou a **bloquear** a medição que faltava, e a frase de saída
("já estavam verdes") reafirma a aprovação que nunca existiu. Sem `--forcar`, a cena atravessa a estação
inteira com `tamanho` jamais medido e um `✓` em cada tela que alguém olhe.

**Que a medição é possível, não é dúvida:** em lotes de 2 e de 4 as mesmas cenas fecharam
`✓ 4/4 … com TODOS os gates medidos`. O buraco é de **lote grande**, não das cenas — o Chrome único não
dá conta e o gate desiste em silêncio por cena, mas o veredito agregado sai verde do mesmo jeito.

**A regra.** (1) **Medição ausente não pode virar carimbo.** Só carimba a cena cujo conjunto de gates
foi medido por inteiro; faltou um, o portão grava `parcial` com a lista do que falta — nunca `ok`.
(2) **Quem pula por carimbo tem de comparar o ESCOPO**, não só o hash: carimbo de uma execução que mediu
menos gates que a atual não autoriza pular. (3) Rodapé de aviso não é conserto — enquanto o mesmo runner
escrever o carimbo, a única leitura correta de "não medido" é *não carimbe*. **Aviso educa quem lê;
carimbo decide por quem não leu.**

**Contramedida enquanto o runner não muda:** rode `qc-cena` em lotes de ~4 (mapas e footage 4K sozinhos,
`--passo=0.5`) e só aceite a linha `com TODOS os gates medidos`. O `--forcar` é obrigatório sempre que o
carimbo anterior tenha vindo de lote grande.

---
### SIS-115 · Gate que lê o ARQUIVO em vez do CÓDIGO pune quem documentou o conserto (05/ago/2026, QC do `mamute-de-volta`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `SIS-115` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** `qc-janela-exibida` acusou duas cenas de cauda morta grave — `s59-mae-de-aluguel` com
**73%** e `s43-99-por-cento` com 38% — "arte renderizada que ninguém vê". As duas tinham sido
**APROVADAS** pelo qc-visual momentos antes, o que já era motivo para desconfiar de alguém.

**A mecânica.** O gate extraía a duração com `src.match(/__duracao\s*=\s*([0-9.]+)/)` sobre o arquivo
INTEIRO — comentário incluído. E a cena bem escrita explica no cabeçalho por que recusou o número que
o briefing mandou:

> `O briefing pediu __duracao = 36.24 (o span BRUTO). Mas 26,28 s desse span são CORTE … Por isso:`
> `**__duracao = 9.96**.`

O regex casava com a PRIMEIRA menção — a do briefing recusado, dentro da prosa — e nunca chegava ao
`window.__duracao=9.96` da linha 87, que é o valor que o render usa. Os 26,28 s que o gate reportou
como "mortos" são exatamente os que o comentário identifica como corte: **o gate leu a explicação do
conserto e a serviu de volta como se fosse o defeito.**

**Por que é uma classe, não um bug.** O sinal se inverte: quanto MELHOR documentada a cena, mais
garantida a acusação falsa. A cena que só tem `window.__duracao=9.96` e nenhuma explicação passa
limpa; a que explica o raciocínio — que é o que a casa pede de todo agente — reprova. Um gate assim
ensina a apagar comentário, e o próximo autor aprende a esconder o que pensou.

**A regra.** Gate que lê valor de contrato tem de mirar a forma **canônica e executável**
(`window.__duracao=`, `export const`, a atribuição), nunca a primeira ocorrência textual do nome.
Regex sobre arquivo-fonte não distingue código de prosa, e todo arquivo bom deste estúdio é metade
prosa. Na dúvida entre duas ocorrências, a que vale é a que o INTERPRETADOR executaria — e se o gate
não consegue decidir isso lendo texto, ele precisa carregar a página e perguntar ao objeto vivo.

**Conserto aplicado.** `durDoClipe()` procura `window.__duracao = <num>` primeiro (e a variável
atribuída a ele), e só cai nas formas soltas se a canônica não existir. Depois do conserto as duas
falsas caudas mortas sumiram do laudo e o gate seguiu acusando o que era real (8 cenas com `inSec`
dentro de corte). Mesma família da [SIS-113] deste dia: o gate estava lendo o campo errado com toda a
convicção.

### SIS-117 · O ESPECTADOR NÃO LÊ A TRANSCRIÇÃO — ELE VÊ O CORPO (05/ago/2026)

**O Mateus assistiu a uma decupagem e disse: *"tava horrível, os cortes todos errados"*. Todos os
gates da casa passaram.** 0 cortes partindo palavra · 0 silêncio engolindo fala · 0 fala repetida ·
1 vão de 5,16 s. Quatro gates, quatro vereditos limpos, e o dono vendo defeito na tela.

Extraí um quadro 0,2 s antes e 0,2 s depois de cada emenda e olhei. Estava óbvio: numa delas o
apresentador tem **a mão levantada em gesto** e no quadro seguinte **a mão sumiu**; noutra, mãos
juntas viram **dedo apontando**; noutra, gesto amplo vira mãos em ponta. **4 de 15 emendas saltam.**

**Por que TODOS os gates erraram junto:** eles liam a **transcrição**. Cada um perguntava algo
diferente sobre o texto — a palavra ficou inteira? a fala sobreviveu? o take repetido saiu? —, e
nenhum perguntava sobre a **imagem**. Uma família inteira de verificação compartilhando o mesmo
ponto cego não é redundância: é uma auditoria com quatro assinaturas e um olho só.

**A raiz está na escolha do ponto de corte.** O decupador procura onde o TEXTO permite cortar e
corta lá — sem nunca perguntar onde as MÃOS estão. Entre dois pontos válidos, ele escolhia o
primeiro, não o melhor.

**A régua:** entre dois pontos onde o texto permite, escolha aquele em que a **pose é parecida dos
dois lados**, de preferência com as mãos em repouso. Meio segundo a mais de fala é preço barato por
uma emenda que não pula. Impossível casar? **Diga no relatório** — a arte pode cobrir aquela emenda
com uma cena, e só saberá se for avisada.

**O gate é `scripts/qc-emenda-visual.mjs`, e a calibração dele é a parte que ensina.** A primeira
versão cravou um piso fixo de SSIM e **aprovou o salto que eu tinha acabado de ver com os olhos**: o
cenário é preto, o fundo é idêntico dos dois lados e infla a similaridade — piso fixo mede o
CENÁRIO, não o corte. A régua honesta é a **linha de base do próprio vídeo**: o quanto a imagem muda
quando ninguém cortou (mediana 0,959 no caso medido). E o piso é o **percentil 10**, não o mínimo —
usar o mínimo parece conservador e é o contrário, porque um único par natural com gesto largo
afrouxa a régua inteira: de 0,908 para 0,838, e com 0,838 os dois saltos passavam limpos.

**A lei-mãe disto já existia e eu a apliquei ao contrário por um tempo:** *quando o dono vê o
defeito e o número não vê, o errado é o que se mede.* A descrição do sintoma É a especificação da
métrica. Ele disse "os cortes" — então mede-se o CORTE, não o texto em volta dele.

## SIS-119 — o sufixo de renomeação derruba o `.gitignore` (05/ago/2026)

**O que aconteceu:** dois deploys seguidos morreram com `No space left on device` na VM, deixando
64 GB de `tmp_pack` órfão no `.git`. Diagnostiquei como "lixo de um `git pull` que morreu por falta
de espaço" e limpei. **Estava errado — o pull nunca chegou a rodar.**

O comando anterior a ele, no meu próprio `deploy-vm.sh`, era `git stash push -u`. O `-u` manda
guardar também os **não rastreados** — e havia 70 GB deles:

```
MEDIDO · 05/ago · git status --untracked-files=all na VM
  61703.6 MB  arquivo-morto/2026-08-senna-masters-superados/_master-decupado.mov.ANTIGO-FORA-DE-FASE
   7249.9 MB  arquivo-morto/2026-08-senna-masters-superados/_master-decupado.mp4.ANTIGO-FORA-DE-FASE
    991.7 MB  arquivo-morto/2026-08-retempo-oceano-700km/c10-4k.mp4.STALE-html-29jul-congelado
    541.5 MB  arquivo-morto/2026-08-retempo-oceano-700km/c17-4k.mp4.pre-retempo
```

**O mecanismo, e é o que importa:** o `.gitignore` ignorava `*.mp4` e `*.mov` desde sempre. Os
padrões casam o **fim** do nome — e nenhum daqueles arquivos termina em `.mov`. Quem renomeia
`x.mov` para `x.mov.ANTIGO-FORA-DE-FASE` para **guardar com segurança** tira o arquivo do alcance do
ignore no mesmo gesto em que o preserva. O hábito é bom e a casa o pratica há meses (`.pre-retempo`,
`.STALE-*`, `.pre-fin73`, `.ANTIGO`); o que faltava era o ignore acompanhá-lo.

**A lei:** *proteção que casa o FIM do nome é derrotada por qualquer coisa acrescentada ao fim — e
renomear-para-preservar é exatamente isso.* Vale para `.gitignore`, para filtro de rsync, para
`find -name`, para regra de retenção e para qualquer varredura por extensão. Se a casa tem o hábito
de sufixar, o padrão precisa ser `*.ext.*` **além** de `*.ext`.

**O conserto (duas camadas independentes de propósito):**
1. `.gitignore` ganhou `*.mp4.*`, `*.mov.*`, `*.wav.*`, `*.webm.*`, `*.mxf.*`, `*.avi.*`.
2. `deploy-vm.sh` perdeu o `-u`. Arquivo não rastreado não é trabalho a preservar num deploy: se é
   código, a porta 2 já o trouxe para o Mac; se não é, não embarca de qualquer jeito.

A camada 2 não depende da 1 **de propósito** — a próxima extensão renomeada não vai estar na lista,
e a defesa que sobrevive é a que não precisa adivinhar o nome do arquivo.

**O corolário de diagnóstico, que é metade do custo desta lei:** eu li `tmp_pack` gigante e concluí
"o pull morreu". O artefato estava certo e a atribuição errada — porque olhei o processo que eu
*esperava* estar rodando, não o que estava. `pgrep -af` mostrava `git stash push -u` em letras
garrafais. *Lixo de processo morto identifica a FAMÍLIA (git empacotando), nunca o COMANDO; para
saber quem sujou, olhe quem estava vivo.*

---

## SIS-120 — matar o pai não mata o filho, e o filho vira órfão a 94% de CPU (05/ago/2026)

**O que aconteceu:** ao descobrir que um `git stash push -u` estava engolindo 70 GB ([SIS-119]),
matei o processo. Fiz o certo — mirei o PID exato e mandei TERM nele **e nos filhos**:

```bash
for p in $(pgrep -f 'git stash push -u -m .deploy-2026-08-05'); do
  pkill -TERM -P $p; kill -TERM $p
done
```

Trinta e oito minutos depois, a VM estava com **load 86** e um `git update-index -z --add --remove
--stdin` a **94% de CPU**, PID 64341, **PPID 1**. O pai era o 64327 — o que eu matei. O `pkill -P`
sinalizou os filhos que existiam **naquele instante**; o `git` já tinha trocado de fase, e o
`update-index` ou nasceu depois do sinal ou ignorou o TERM enquanto escrevia. Adotado pelo init,
continuou indexando 70 GB **para um stash que já não existia** — trabalho puro para o lixo,
comendo a máquina que estava renderizando.

**A lei:** *matar uma árvore de processos por PID é uma foto, e processo que gera filhos é um filme.*
Sinalizar o pai e os filhos-de-agora não alcança o neto que nasce um segundo depois. Depois de matar
qualquer coisa que dure minutos, **volte e confira** — a pergunta é `ps -o pid=,ppid=,etimes=` e o
que denuncia é **PPID 1 com etimes alto**: ninguém *inicia* um processo órfão de propósito.

**Como fazer certo quando importa:** dispare o trabalho longo em seu próprio grupo de processos
(`setsid`, que esta casa já usa no render) e mate o GRUPO (`kill -TERM -<pgid>`), não o PID. Aí o
neto morre junto, tenha nascido quando tiver nascido.

**Onde isto morde de novo:** todo `matar-pendurados`, todo vigia de shard, todo teto de tempo. Eles
matam o que veem. O `matar-pendurados.mjs` acerta por outro caminho — varre por marca de automação e
idade, não por parentesco —, e é por isso que ele funcionou aqui: rodado no mesmo minuto, disse
`✓ nada pendurado`, porque o órfão era **git**, não Chrome. *A ferramenta certa não cobre a família
que ela não vigia.*

**O agravante que quase escondeu tudo:** o load 86 tinha uma explicação plausível e errada à mão —
19 renders em curso. Carga alta com causa óbvia é onde o processo órfão se esconde melhor, porque
ninguém investiga um número que já "faz sentido". O que separou os dois foi olhar o `%CPU` por
processo em vez do agregado.

---

## SIS-121 — o processo que CARREGA um prompt não é o que o prompt descreve (06/ago/2026)

**O que aconteceu:** dois minutos depois de despachar o `ceuta` — a prioridade declarada do dia —
rodei `pkill -f 'materializar-bruto'` para parar duas cópias de bruto de outros projetos. **Matei o
agente do Ceuta junto.**

A causa é estrutural, não descuido: um agente headless é `claude -p "<prompt inteiro>"`, e **o
prompt vai na linha de comando**. O prompt de `estacoes/decupagem.md` manda, no passo 1, rodar
`node scripts/estudio/materializar-bruto.mjs {{slug}} --estado`. Logo, a linha de comando do AGENTE
contém a string que eu caçava. `pgrep -f` casa **conteúdo**, e não sabe distinguir quem EXECUTA de
quem MENCIONA.

**Esta casa já pagou por isso três vezes** e sempre remendou local: o `descarregar.mjs` travou
130 GB porque o nome de um projeto aparecia no prompt de OUTRA estação; o `deploy-vm.sh` parava por
uma sessão que era ele mesmo; e agora esta. *Defeito que reaparece com remendo local é defeito sem
dono — ele precisa de uma peça.*

**O conserto:** `scripts/lib/processos.mjs`. `acharProcessos(padrao)` exclui os **portadores de
prompt** (`claude -p`, `node -e`, `python -c`, `bash -c`, `sh -c`) antes de casar, e a CLI lista
separadamente quem apenas MENCIONA, para quem opera ver o que **não** deve matar. Não existe verbo
de matar ali de propósito: quem mata decide o escopo e assume.

**A lei:** *antes de matar por padrão de linha de comando, exclua os processos cujo argv carrega
texto de terceiros.* E, no caminho destrutivo, **liste antes de matar** — a lista é barata e o
engano não tem volta.

## SIS-124 — a ferramenta segura tem de ser a MAIS BARATA de usar (06/ago/2026)

**O que aconteceu:** escrevi `scripts/lib/processos.mjs` para impedir exatamente um erro — matar
processo por padrão de linha de comando e levar junto quem só MENCIONA o padrão ([SIS-121]). Uma
hora depois, derrubei uma sessão SSH com `pkill -f 'brutos-para-bucket.sh --subir'`, porque o meu
próprio comando continha a string.

**Não foi esquecimento.** Eu tinha usado a ferramenta minutos antes, no mesmo comando, para
LISTAR. Na hora de matar, voltei ao `pkill`. O motivo, medido em caracteres:

```
pkill -f 'padrao'                                        ← 1 linha
node -e 'import("./scripts/lib/processos.mjs").then(...)' ← 4 linhas de cerimônia
```

E a cerimônia existia **por decisão minha**: o arquivo dizia, em comentário, *"não existe verbo de
matar aqui de propósito — um `--matar` convidaria ao `--matar` com padrão amplo"*. A intenção era
boa e o efeito foi o contrário: sem verbo seguro, a ação perigosa continuou sendo a única
disponível, e ela venceu.

**A lei:** *quando o caminho seguro custa mais que o inseguro, o inseguro é o que se usa — inclusive
por quem escreveu a regra.* Uma ferramenta de segurança que só sabe DIAGNOSTICAR, e deixa o ato
para o comando cru, não protege nada. Ela precisa **fazer** a coisa, melhor e mais curto.

Onde pôr a fricção: **no gatilho, não no caminho**. `--matar` lista e ensaia por padrão; `--sim`
executa. Quem quer agir escreve seis caracteres a mais — quem age sem pensar vê o ensaio primeiro.

**Isto reformula duas leis que a casa já tinha.** "Conserto que depende de alguém lembrar é conserto
morto" trata do lembrar; esta trata do **atrito** — lembrar não basta se obedecer custa caro. E
"alarme falso é bug de prioridade alta" trata do falso positivo; esta trata do **falso conforto** de
uma proteção que existe e não é usada.

**O medido, no mesmo dia:** 173 ferramentas em `scripts/`, **25 sem nenhum chamador** — entre elas
NOVE gates de QC (`qc-congelamento`, `qc-poluicao`, `qc-mapa-borda`, `qc-mapa-movimento`,
`qc-laudo-coerente`, `qc-referencias-mortas`, `qc-titulo-narrado`, `qc-modo-needs`,
`qc-chave-mapa`). Capacidade construída e nunca ligada é a doença crônica desta casa, e o
`cronometro.mjs` — escrito uma hora antes desta lei — já estava na lista.

---

## SIS-183 — A PASTA SOBREVIVE À RÉGUA, E É POR ISSO QUE O PONTEIRO MORTO NÃO PARECE MORTO (07/ago/2026, decupagem do `a-guerra-da-ucrania-deixou`)

*(era `SIS-125` na VM, número que já era da lei "o relógio de um arquivo é o próprio arquivo"
(06/ago) — renumerada para `SIS-183`. Ponte: `seed/DE-PARA-LEIS.md`.)*

**O que aconteceu:** a roupa da marca do decupador (`marcas/top10/agentes/decupador.md` §8) mandava
ler dois exemplares — `out/planetas-algodao-doce/` e `out/el-nino/`. Os dois estavam no disco. Dentro
de cada um havia **um arquivo**: `ENTREGUE.md`. A régua tinha morrido em algum momento entre 31/jul e
hoje, e ninguém percebeu porque a pergunta que se faz é *"a pasta existe?"* — e ela existia.

**Por que este defeito é diferente do ponteiro quebrado.** Um caminho que não existe falha alto: o
`Read` devolve erro e o agente sabe que perdeu a régua. Aqui não há erro em lugar nenhum. O
`ls -d out/planetas-algodao-doce` responde **sim**. É a limpeza pós-entrega funcionando exatamente
como projetada (`entregar.mjs --limpar` deixa o stub de propósito), e é justamente ela que converte
toda régua citada por pasta em armadilha silenciosa, sozinha, com o tempo. **Régua não morre por
alguém apagá-la; morre por entrega bem-sucedida.**

A ironia mede o tamanho do buraco: a MESMA seção §8 já carregava o aviso *"o exemplar antigo
`out/homossexualidade-antiguidade/` não existe mais — nunca cite caminho de exemplar sem conferir que
ele está lá"*. O aviso estava certo, era sobre este exato defeito, e não impediu que os dois
exemplares seguintes morressem do mesmo jeito. **Aviso em prosa não sobrevive à passagem do tempo;
só o gate sobrevive.**

**Havia gate, e ele estava meio cego.** O `doctor.mjs` §10 já se chamava "RÉGUA DE ARTE VIVA" desde
26/jul — e o regex dele terminava em `\.html`. Cobria a régua de arte e nada mais. Toda régua que é
uma PRODUÇÃO (decupagem exemplar, espelho exemplar, master de referência) passava livre, que é
precisamente a classe de régua que a limpeza pós-entrega destrói. *Um gate com nome genérico e escopo
estreito é pior que gate nenhum, porque o nome promete a cobertura que o corpo não tem.*

**A lei:**
> Toda referência a uma PRODUÇÃO como régua se verifica no ARTEFATO dentro dela, nunca na pasta. E
> quem escreve a doutrina cita a régua **junto com o comando que a encontra**, porque a lista
> envelhece sozinha e o comando não.

Aplicado em `scripts/doctor.mjs` §10 (segundo bloco): a varredura passou a cobrir `out/<proj>` citado
sob palavra de régua e cobra a presença de `_cortes.json`/`espelho.json`/`words.json`/`words-limpo.json`.
Aplicado em `marcas/top10/agentes/decupador.md` §8: exemplares trocados por
`ceuta-travessia-em-massa` e `especies-humanas` (vivos, conferidos), **mais o `for` que acha o vigente
sem depender da lista**.

### O corolário que custou três iterações: um check novo nasce com falso positivo, e você não o vê sem provocar

As três calibrações abaixo saíram todas de rodar o próprio check e **olhar cada achado**, não de
raciocinar sobre ele. Nenhuma teria aparecido em revisão de código:

1. **`[^\n]` não atravessa a lista.** A primeira versão casava a palavra-chave e o caminho na mesma
   linha; numa seção de exemplares eles estão em linhas diferentes ("Os exemplares vigentes:" ⏎ ⏎ "-
   `out/…`"). O check rodou **inerte** — zero achados no texto que o motivou. Passaria como "verde".
2. **Janela fixa parte o nome no meio.** Fatiar 600 caracteres fez `out/ceuta-travessia-em-massa`
   virar `out/ceuta-trave`, "que NÃO EXISTE" — uma verdade sobre uma string que o documento não
   contém. Fatie com folga e aceite só o match que COMEÇA dentro da janela.
3. **A LÁPIDE NÃO É A DÍVIDA.** Três documentos de arte citam `out/avioes-linha-reta/` na mesma frase
   em que dizem *"não existe mais — o caminho novo é `seed/examples/dourados/`"*. Isso é o conserto
   **documentado**. Acusá-lo é [SIS-115] de novo (punir quem documentou), e é como o gate nasce
   vermelho por dívida já paga — estado em que a próxima sessão o desliga em vez de obedecê-lo.
   Mesma família: proveniência (`out/x/espelho.json:486`, a coluna "onde este termo aparece") não é
   régua, e o DICIONARIO inteiro é feito disso.

Placar da calibração: **5 achados → 1 → 0**, com controle negativo a cada passo (a §8 *como estava*
volta a acusar os dois stubs; a §8 de hoje passa). *Gate que só sabe dizer verde não é gate — e gate
que grita sobre lápide não sobrevive à segunda sessão.*

### SIS-185 · SELETOR MORTO FALHA ALTO; SELETOR VIVO NO ALVO ERRADO FALHA CALADO — e engole os fallbacks (07/ago/2026)

*(era `SIS-127` na VM, número que já era da lei "node --check prova que parseia, não que roda" —
renumerada para `SIS-185`. Ponte: `seed/DE-PARA-LEIS.md`.)*

**A lista de fallbacks só protege se a primeira entrada souber falhar.** Medido no `baixar.mjs`
durante a caça do `ceuta`: 6 de 6 downloads do Storyblocks morriam em `download não iniciou
(timeout 45s)`, com a sessão logada e a grade respondendo. O diagnóstico óbvio — "o seletor
morreu" — estava errado, e é por isso que o defeito durou.

O primeiro seletor da lista era `button[aria-label="Download Button"]`. Ele **casava**. Só que hoje
esse `aria-label` pertence aos **8 botões de download das faixas de MÚSICA** da coluna "Recommended
Music for this Clip" — nenhum botão de vídeo o carrega. O helper `clicar()` retorna no primeiro
seletor que funciona, então:

- o clique abria o menu **MP3 / WAV** da segunda música;
- o download de vídeo nunca começava;
- e **os dois fallbacks corretos, que vinham logo abaixo, nunca chegavam a rodar**.

A prova estava fotografada no disco desde a caça anterior — `stock-hub/_debug/storyblocks-item2.png`
mostra o menu MP3/WAV aberto — e ninguém abriu o print, porque a mensagem de erro dizia "timeout",
que é vocabulário de porta fechada, não de alvo errado.

**O mesmo padrão, uma camada adiante, no Motion Array.** O botão do herói estava vivo; morreu o
passo seguinte. Clicar em "Download" não baixa: abre a escolha de formato, e o painel mudou de casa.
Medido depois do clique: `.formats` = **60 no DOM, 0 visíveis** (são overlays de hover dos cards da
grade). `.formats:visible` nunca casava, nenhum formato era escolhido, nada partia.

**O conserto foi trocar a âncora por NOME ACESSÍVEL**, que mede o que importa e é agnóstico de
classe, build e idioma. Os números que decidiram:

| | velho | novo | medida |
|---|---|---|---|
| SB · botão | `button[aria-label="Download Button"]` | `getByRole("button",{name:/^download$/i})` | `/download/i` dá **10**; `/^download$/i` dá **1** |
| MA · formato | `.formats:visible` | `getByRole("button",{name:/^4k$/i})` | **0** antes do clique, **1** depois |

A ancoragem em acessibilidade descarta os 60 sósias de graça, porque **pílula em `display:none` não
entra na árvore de acessibilidade**. E a regex é obrigatória: o DOM escreve `4k` minúsculo e só o CSS
`uppercase` mostra "4K" — `exact:true` é case-sensitive e dava 0.

**O segundo defeito nasceu do próprio conserto, e o teste o pegou.** Ancorar o formato no rótulo
"4K" trouxe **ProRes**: o item publica **duas linhas chamadas "4K"** (`4KMOV (prores) 1480,8 MB` e
`4KMP4 (hevc) 36 MB`), com `id="filter-option-4K"` **duplicado** e o mesmo nome acessível. O
`.first()` pegou o ProRes — e pior, o site já vinha com o MP4 marcado, então o clique cego **desfez
o padrão certo**. Custou 1,55 GB + 775 MB de download jogado fora. A regra passou a ler o texto da
linha (nunca `prores`; entre os 4K restantes vence o maior arquivo) e **ecoa o formato escolhido no
log de cada item** — porque escolha silenciosa de qualidade foi exatamente o que deixou o ProRes
passar.

**A regra:** *quando uma automação falha por timeout, pergunte se ela clicou em ALGUMA coisa antes
de concluir que não achou nada.* Um seletor genérico demais é pior que um seletor quebrado: o
quebrado cai para o próximo da lista, o genérico consome a tentativa e leva os fallbacks junto.
Ancore no que o usuário vê (nome acessível, `role`, `data-*`), não na classe do build — e prefira a
âncora ESTREITA (`/^download$/`) à abrangente, porque num DOM grande o abrangente sempre acha algo.

**Corolário, e ele vale além do stock:** toda escolha que afeta qualidade ou custo tem de aparecer no
log. `↳ formato: 4KMOV (h264) - 118.5 MB` custa uma linha e é o que separa "baixou" de "baixou a
coisa certa".

### SIS-188 · INSTRUÇÃO QUE APONTA PARA ARQUIVO INEXISTENTE NÃO FALHA — ELA É IMPROVISADA (07/ago/2026)

*(era `SIS-130` na VM, número que já era da lei "mudar vocabulário de contrato tem dois lados" —
renumerada para `SIS-188`. Ponte: `seed/DE-PARA-LEIS.md`.)*

Estação TEXTOS do `cerebro-quando-sonha`. O passo 4 do briefing manda, em letra de forma:

```
node scripts/decupagem/corrigir-nomes.mjs <slug> --aplicar
```

**Esse script nunca existiu.** `find / -name "corrigir-nomes*"` volta vazio no repo inteiro. E ele é
o passo que a própria estação chama de *"o único que muda um arquivo de outra"* — o que conserta a
ortografia dos nomes próprios no arquivo que o `_brief-arte.mjs` lê como **WORD-LOCK**, ou seja, o
texto que a arte copia literalmente para a tela.

Não era o único: o mesmo briefing manda ler `words-final.json` (aqui a fala é `words-limpo.json`),
`_pesquisa/pessoas.json` (aqui é `pauta-pessoas.json`) e `knowledge/roteiros/<slug>.md` (aqui é
`.txt`, e só no worktree). **Quatro dos insumos nomeados, quatro nomes errados** — e nenhum deles
produz erro: produz uma sessão que procura, não acha, e decide sozinha o que fazer.

**Por que isto é pior que um comando que quebra.** Comando que falha para a sessão e vira relatório.
Instrução que aponta para o vazio é *contornada em silêncio*, e cada sessão contorna diferente: uma
pula o passo e não conta, outra escreve um script na hora, outra declara bloqueio. O trabalho fica
não-determinístico exatamente onde a doutrina achava que tinha determinado.

E o custo é assimétrico: quem pula o passo 4 não vê nada quebrar **hoje** — vê o canal escrito
**"Top Dez"** na tela, semanas depois, num vídeo já publicado. O transcritor deste vídeo escreveu
"Top Dez" em 2 das 3 ocorrências e "Top 10" na terceira: duas grafias do mesmo referente, no mesmo
arquivo, e a que a arte copiasse dependeria de qual cena ela desenhasse primeiro.

**O conserto tem duas metades, e a segunda é a que costuma faltar:**

1. **O script passou a existir** (`scripts/decupagem/corrigir-nomes.mjs`): lê o
   `_nomes-proprios.json`, casa n-grama sensível à caixa (chave de um token só pegaria o "dez" de
   "dez milhões"), preserva a pontuação grudada e os timestamps, simula por padrão, faz backup
   `.pre-nomes`, e leva junto a `ancora` do espelho — que é cópia literal da fala, e cuja divergência
   é o defeito que o `sanear-espelho.mjs` existe para pegar uma estação adiante.
2. **O briefing e o agente passaram a dizer "liste a pasta antes de abrir"**, com os dois nomes
   possíveis de cada insumo. Consertar só o script deixaria os outros três nomes errados de pé.

**A forma geral:** *a doutrina envelhece contra o disco sem emitir um som.* Todo briefing que nomeia
um caminho está fazendo uma afirmação sobre o mundo, e afirmação sobre o mundo tem de ser
verificável — por isso a instrução certa não é "leia `X.json`", é "a fala é `X` se existir, senão
`Y`; liste a pasta". Escreveu um caminho literal numa estação? **Rode um `ls` nele antes de
commitar**, e prefira nomear a REGRA de escolha em vez do arquivo.

⚠️ Corolário para quem executa: **achou o insumo com outro nome? Isso é achado, não contratempo.**
Conserte a estação no mesmo turno em que contornou — o contorno que fica só na sua sessão é o que
faz a próxima improvisar de novo, diferente. Relacionadas: [SIS-184] (escrito e não commitado →
varrido) e [SIS-187] (corrigido e não recarregado → ignorado). Esta é *nunca escrito e mesmo assim
citado*.

**⚠️ COROLÁRIO, e ele custou duas reversões no mesmo dia: o arquivo de fala não é só texto — é uma
GRADE DE TEMPO.** Escrevi o `corrigir-nomes.mjs`, rodei, e ele fez duas coisas que pareciam
inofensivas:

1. **fundiu dois tokens em um.** "ativação síntese" → "ativação-síntese" é ortografia impecável e
   levou o arquivo de **2.641 para 2.640 palavras**. Essa lista é a grade de fronteiras que o
   `sanear-espelho.mjs` usa para provar que nenhuma troca de cena cai no meio de uma palavra.
2. **repartiu o span numa troca 1:1.** "Top Dez" (50,72–50,86 · 50,96–51,24) virou "Top 10" com os
   tempos recalculados proporcionalmente — **comendo os 0,10 s de silêncio entre as duas palavras** e
   movendo duas fronteiras legítimas de corte.

Nenhum dos dois quebra nada visível no dia. Os dois movem a régua que outros gates usam para medir.
O conserto: fusão só com `--permitir-fusao` explícito, e troca 1:1 **herda o tempo original de cada
palavra, intacto** — a aritmética só entra quando não há tempo original para herdar.

*A forma geral: antes de editar um arquivo, pergunte quantas coisas ele é.* Um `words-*.json` é
texto para quem lê e cronômetro para quem corta; um `espelho.json` é decisão editorial e relógio.
Consertar a letra e mover o tempo junto é trocar um erro visível por um invisível — e o invisível
só aparece montado.

## SIS-189 · A trava existia, e morava no loop do RELATÓRIO — quinta remoção do mesmo arquivo (07/ago/2026)

*(era `SIS-131` na VM, número que já era da lei "daemon-reload derruba timer static" — renumerada
para `SIS-189`. Ponte: `seed/DE-PARA-LEIS.md`.)*

**O caso.** Durante o encode do master do `dentro-do-sol`, o `liberar-espaco.mjs` apagou o
`source-sincronizada.mp4` **duas vezes** debaixo do `master-decupado.mjs`. O resultado dessas quedas
foi um master com 48,6 s de fala muda ([FIN-124]).

**O que torna este caso diferente dos quatro anteriores:** a trava **estava escrita e estava certa**.
O `liberar-espaco.mjs` confere o `.EM-USO.lock` e o `lsof` antes de tocar no arquivo — só que essa
checagem vivia no laço que **imprime o relatório**, onde o `continue` pula uma linha de console e
mais nada. O laço que de fato sobe para o bucket e chama `rmSync` (`for (const s of sincs)`, umas 80
linhas abaixo) nunca a chamou.

O comentário imediatamente acima da checagem já contava três rodadas do mesmo erro e terminava em
*"Proteger uma porta não protege a casa"*. A quarta porta foi encontrada contando `rmSync`. **A
quinta era a mesma trava, no loop errado** — e nenhum `grep -n rmSync` a encontraria, porque o
problema não era uma porta a mais: era uma porta sem fechadura ligada.

**A lei:** *trava que mora no loop do relatório protege o relatório.* Verificação de segurança não
se escreve onde é conveniente de imprimir — se escreve como **função**, chamada no ponto que decide,
e **re-avaliada nesse instante** (o relatório rodou minutos antes; um encode pode ter começado no
meio). Uma trava com dois donos é uma trava sem dono.

**O teste que a encontra em qualquer script:** para cada efeito destrutivo, pergunte *"qual linha
executa a guarda, e ela está no mesmo bloco que o `rm`?"* — não *"existe uma guarda neste arquivo?"*.
A segunda pergunta responde "sim" nos cinco casos.
## SIS-125 — o relógio de um arquivo é o próprio arquivo (06/ago/2026)

**O que aconteceu:** o Mateus leu a ordem da estação de decupagem e perguntou o que ninguém tinha
perguntado em meses: *"antes de ir pro Scribe não teria que fazer um encode que nos títulos dos
tópicos já ficasse com 3 segundos de tela preta e sem som entre os tópicos, justamente pro espelho
saber que naquele silêncio é onde entram os títulos?"*

Ele tinha achado **três relógios** onde deveria haver um:

| relógio | o que era | existia como arquivo? |
|---|---|---|
| BRUTO | a gravação inteira (`words.json`) | sim |
| LIMPO | o que sobra depois dos cortes | **não** — era somado de cabeça, em cada peça |
| TIMELINE | o limpo mais os gaps de 3 s dos cards | **não** — era um `gapSec` declarado num JSON |

O espelho falava em BRUTO. O vídeo montado vivia em TIMELINE. Entre os dois, o
`finalizacao-config.mjs` remapeava a cada montagem. **Funciona — e é justamente por funcionar que
durou tanto.** A conta fechava, os gates passavam, e o defeito só aparecia quando alguém mexia num
corte depois do espelho: aí uma cena caía dentro do buraco e sumia sem que nada gritasse. Medido no
`ceuta`: estendi o corte de cabeça de 113,70 para 123,65 e a `s01-boco-abre` ficou órfã. Nenhum
gate viu, porque nenhum gate tinha contra o que comparar.

**A causa raiz não era o remapeamento — era a etapa 4 fingir que cortava.** Ela se chamava
"aplicar os cortes" e só removia palavras de uma lista; o corte de verdade acontecia duas estações
depois. Entre a decisão e o arquivo havia um vão que cada peça adiante preenchia por conta própria.

**A lei:** *quando uma etapa DECIDE uma transformação, ela tem de PRODUZIR o artefato transformado —
e a etapa seguinte mede o artefato, não a decisão.* Todo relógio que existe só como declaração é uma
promessa que alguém vai quebrar, e quem quebra nunca é quem prometeu.

**O que mudou na prática** (`estacoes/decupagem.md`, passos 7 → 7b → 8):
1. o master decupado **materializa** os 3 s de preto e silêncio em cada fronteira de título;
2. uma **segunda passada de Scribe** transcreve esse arquivo → `words-final.json`;
3. o espelho nasce **depois**, ancorado nele, no tempo real da timeline.

Custo: uma transcrição a mais por vídeo. Barato perto de descobrir um deslocamento com a arte pronta.

**E o efeito colateral é o melhor da mudança:** o silêncio de 3 s aparece na transcrição como um
buraco entre palavras. O montador **lê no áudio** onde termina um tópico e começa o outro, em vez de
inferir do sentido do texto. A informação que era metadado virou sinal.

## SIS-126 — cache sem chave de RECEITA mente na primeira mudança de receita (06/ago/2026)

**O que aconteceu:** o `master-decupado.mjs` reaproveita segmentos já encodados — retomada legítima,
porque 4K all-intra é caro. A chave era *"o `.ts` existe e tem a duração certa?"*.

Isso está correto enquanto o **como** eles foram feitos não muda. No dia em que o filtro mudou (o
`lutyuv` que leva o preto do estúdio a zero, [REND-80]), os segmentos antigos continuavam existindo
com a duração certa — e a retomada os reusaria em silêncio. O master sairia **metade novo, metade
velho**, com duração perfeita, aritmética fechando e nenhum gate acusando.

**A lei:** *a chave de um cache tem de descrever como o conteúdo foi produzido, não só que ele
existe.* Chave por existência responde "tenho algo?"; a pergunta certa é "tenho o que eu produziria
agora?".

O conserto são três linhas: um hash das constantes de encode (`ENC_V`, `COR`, `PRETO` e a versão do
formato) gravado no próprio tmp; se o hash mudou, o cache inteiro cai.

```js
const ASSINATURA = createHash("sha1").update([ENC_V, COR, PRETO, "v2-gaps"].join("|"))…
if (anterior && anterior !== ASSINATURA) rmSync(tmp, …)   // o encode mudou: o cache não serve
```

⚠️ **A ordem de declaração importa e o `node --check` não a vê.** Na primeira tentativa a assinatura
ficou 120 linhas ACIMA das constantes que ela usa: sintaticamente válido, `ReferenceError` na
execução. *Verificação que só lê sintaxe aprova código que não roda* — a prova tem de ser posicional
(as constantes vêm antes) ou de execução real.

**A família a que isto pertence:** um artefato em cache que parece bom porque ninguém perguntou de
QUE versão ele é. Mesma raiz do `words-final.json` mais antigo que o master que descreve, resolvida
no mesmo dia pelo mesmo princípio — lá com carimbo de tempo, aqui com hash de receita.

### SIS-127 · node --check prova que parseia, não que roda — e grep em programa morto devolve silêncio (07/ago/2026)

**O que aconteceu:** adicionei uma checagem ao `doctor.mjs` usando `existsSync`/`readFileSync`
soltos. O doctor não os importa no escopo de topo — ele tem os próprios helpers (`ler`, `existe`,
relativos à raiz). Resultado: `ReferenceError` na **primeira iteração** do laço, abortando a execução
inteira. As ~40 checagens seguintes nunca rodaram.

**E eu não percebi por duas verificações que pareciam suficientes:**

1. `node --check scripts/doctor.mjs` → **passou**. É sintaxe válida; `--check` não executa nada.
2. `node scripts/doctor.mjs | grep -i catalogo` → **vazio**. Eu li como *"nenhum alerta de catálogo"*
   quando significava *"o programa morreu antes de chegar lá"*.

O erro estava no **stderr**, e o meu `grep` filtrava o stdout. A saída inteira tinha 10 linhas — um
doctor que normalmente produz 126.

**A lei:** *`--check` prova que o arquivo PARSEIA, não que ele RODA. Toda checagem nova roda o
programa inteiro e confere que ele chegou ao FIM.*

O sinal barato e decisivo é o **tamanho da saída**: um programa que produz 10 linhas onde sempre
produziu 126 morreu no meio, mesmo com código de saída plausível. Compare, não olhe.

**E a armadilha específica de filtrar:** `grep` num programa que abortou devolve vazio, que é
indistinguível de "rodou e não achou nada". Sempre que a resposta esperada é uma AUSÊNCIA, confirme
antes que o programa **completou** — `| wc -l`, `| tail -3`, ou `2>&1` para trazer o stderr junto.
*Filtro aplicado a um cadáver devolve silêncio, e silêncio parece aprovação.*

⚠️ Isto é irmão da [SIS-126] do mesmo dia: lá o `--check` aprovou uma constante usada 120 linhas
antes de ser declarada (TDZ, `ReferenceError` em execução). Duas vezes no mesmo dia, a mesma raiz —
**verificação que não executa aprova código que não roda.**

### SIS-128 · duas listas do mesmo objeto: a que os scripts leem não é a que você editou (07/ago/2026)

**De onde veio:** revisão do espelho do `ceuta` (07/ago/2026). O `espelho.json` carregava **duas
listas de 164 cenas**: `segmentos`, escrita quando o espelho nasceu, e `cenas`, onde a sessão
anterior gravou as correções que o Mateus pediu à vista. As duas divergiam em **63 de 164** cenas.

Nada acusava, porque **cada lista era internamente consistente**. O validador de contrato conferia
`segmentos` (o nome do schema) e devolvia "✓ válido". O `sanear-espelho` conferia `cenas` e também
devolvia limpo. Dois gates verdes sobre duas verdades diferentes.

O estrago estava contratado: **17 consumidores leem `espelho.segmentos` PRIMEIRO**, com `|| cenas`
apenas como reserva — entre eles `desenhar-cenas.mjs`, `_brief-arte.mjs` (que nem tem reserva),
`finalizar.mjs`, `finalizacao-config.mjs` e o **painel :8888 em que ele revisa**. A arte teria sido
desenhada com a abertura que ele mandou trocar, e o painel mostrava a cena 01 velha — de 0,95 s de
apresentador — para quem acabara de pedir que ela virasse foto real. *Ele pode ter parado a revisão
na terceira cena porque a primeira, corrigida, continuava aparecendo intacta.*

**A lei:** *um objeto, uma lista, um nome — e o nome é o do contrato.* Quando uma edição precisa
criar uma segunda forma do mesmo conteúdo, ela substitui a primeira no mesmo campo; nunca convive
ao lado dela. Campo novo com o conteúdo novo e campo velho intacto não é versionamento: é uma
bifurcação silenciosa, e quem decide qual ramo vale passa a ser a ordem dos `||` de cada script.

**Como se detecta:** dois campos do mesmo arquivo que aceitam a mesma forma (`segmentos`/`cenas`,
`items`/`entries`, `v2`/`novo`) e um `a || b` espalhado pelo código. O `||` é a assinatura: ele
existe porque alguém já sabia que havia dois nomes e preferiu tolerar os dois a escolher um.

**O que fazer ao encontrar:** medir a divergência antes de escolher (aqui: 63 cenas, e a lista nova
não perdia nenhum campo da velha), renomear a viva para o nome do contrato, apagar a morta, e rodar
o validador — que só então enxerga o que de fato vai ser consumido.

⚠️ **O agravante:** o gate que valida pelo nome do contrato dá o veredito mais tranquilizador
possível — "válido" — enquanto o conteúdo servido é outro. *Gate que confere o campo errado não
falha: ele aprova o arquivo errado com a voz de quem conferiu.*

### SIS-130 · mudar vocabulário de contrato tem dois lados, e eles moram em máquinas diferentes (07/ago/2026)

**De onde veio:** 07/ago/2026, madrugada. Renomeei o modo `drone` para `aereo-real` e removi `nenhum`
do enum do espelho. Fiz as três coisas certas — atualizei o schema, migrei as cenas, subi o schema
para a VM — e ainda assim quebrei a produção: **migrei os dados só no Mac.**

O `o-acre-o-estado-que-o`, que é o projeto mais perto de fechar o XML (66 de 71 clipes prontos),
passou a reprovar no contrato com duas violações — `modo:"drone"`, o valor que eu mesmo tinha
acabado de tirar do enum. O schema novo chegou lá; as cenas velhas continuaram.

**A lei:** *mudar vocabulário de contrato tem SEMPRE dois lados — a definição e os dados —, e eles
vivem em máquinas diferentes. Migrar um só transforma o gate no delator do próprio conserto.*

⚠️ **O sintoma engana**, e é o que faz perder tempo: o laudo acusa exatamente o valor que você
acabou de corrigir, e a primeira leitura é *"o conserto não pegou"*. Não é isso — o conserto pegou
de um lado só. **A pergunta que resolve em dez segundos: onde mais existe uma cópia deste dado?**

**A ordem que não erra**, quando definição e dados moram em lugares diferentes:
1. escreva a migração como SCRIPT, nunca à mão — ela vai rodar mais de uma vez, por construção;
2. rode-a em toda máquina que tem cópia, **antes** de subir o schema novo;
3. só então suba a definição;
4. revalide **em cada máquina**, não na que você tem à mão.

O passo 4 é o que pega: eu validei no Mac, vi seis projetos verdes, e a VM — que é quem de fato
produz — tinha um vermelho. *Validar onde você está não é validar onde roda.*

⚠️ E o gate teria mentido no pior momento possível: nada acusaria até a finalização tentar gerar o
XML, com o vídeo já renderizado e a noite inteira gasta.

### SIS-132 · processo trabalhando parece parado se você mede só um nível da árvore (07/ago/2026)

**De onde veio:** 07/ago/2026. Eu declarei duas vezes que um processo estava "pendurado", com
medição, e das duas a medição era rasa.

Medi o tempo de CPU somando os **filhos diretos** do portão de QC:

```bash
ps -eo ppid=,times= | awk -v p=$PID '$1==p{s+=$2} END{print s}'
```

Deu `3 → 3 s` em 20 segundos de observação, e eu concluí *"CPU imóvel, está pendurado"*. **Matei o
processo.** Depois medi a árvore **recursiva** — descendo por `pgrep -P` até as folhas — e o mesmo
tipo de processo mostrava `20 → 28 s` nos mesmos 20 segundos. Estava trabalhando o tempo todo.

**A causa da cegueira:** o portão faz `execFile("node", …)`, que abre Chrome. O Chrome é **neto**, e
o trabalho inteiro acontece nele. O nível dos filhos diretos é só orquestração, e orquestração não
gasta CPU.

**A lei:** *para julgar se um processo trabalha, some a ÁRVORE INTEIRA, recursivamente.* Um nível
não basta — e o erro é sempre na direção perigosa: parece parado quando está trabalhando, e a ação
que ele sugere é matar.

```bash
# a régua certa: desce até as folhas
arvore() { local t=$(ps -o times= -p $1 2>/dev/null|tr -d ' '); local s=${t:-0}
  for c in $(pgrep -P $1 2>/dev/null); do s=$(( s + $(arvore $c) )); done; echo $s; }
```

⚠️ **E a régua da CPU só decide junto com o RELÓGIO.** CPU imóvel em 20 s pode ser espera legítima de
I/O; CPU imóvel em 20 min não é. Duas medidas espaçadas, na árvore inteira, e só então o veredito.

*Antes de matar um processo por estar "parado", pergunte de quem é o trabalho que ele orquestra — e
se você o está contando.*

### SIS-135 · heurística de texto erra sempre — escreva-a larga, porque bloquear custa o trabalho inteiro (07/ago/2026)

**De onde veio:** 07/ago/2026. Um dry-run do despachante avisou que ia BLOQUEAR o `fatos-a380` por
"sem veredito". Fui ver o que ele tinha feito: **30 GB de mux pronto no disco**
(`source-sincronizada.mp4`), e o log terminando em

> *"**Em curso, rastreado:** watcher `bq6a0ljbl` espera o processo do mux fechar. Quando ele voltar,
> a sequência é: gate…"*

A sessão fez o trabalho caro, encerrou anunciando espera, e o watcher morreu com ela. O despachante
tem uma heurística exatamente para isto — devolver a `pendente` em vez de bloquear —, e ela **não
disparou**: o regex conhecia cinco formas de dizer "deixei algo rodando", e nenhuma era "Em curso,
rastreado".

**A lei:** *heurística que julga TEXTO livre é sempre incompleta — o que a torna segura é o lado
para o qual ela erra.* Aqui a assimetria é brutal e mensurável:

| erro | custo |
|---|---|
| devolver a `pendente` um trabalho que de fato falhou | **uma passada** — a próxima sessão tenta de novo |
| bloquear um trabalho que só precisava de continuação | **o trabalho inteiro**, e um humano para destravar |

Então a régua se escreve larga de propósito. Cada vez que um agente inventa uma forma nova de dizer
"deixei algo rodando", o regex envelhece **em silêncio**, e o castigo recai justamente sobre quem
concluiu a parte cara.

⚠️ **E há um teste que fecha a questão sem depender de frase nenhuma:** *o artefato caro existe no
disco?* Um mux de 30 GB é prova de trabalho melhor que qualquer texto — quando ele está lá, "sem
veredito" nunca deveria significar "bloqueado". A heurística de texto é o remendo; a pergunta ao
disco é o conserto.

### SIS-136 · cada processo tem sua régua de 'travado' — a errada inventa defeito e mata trabalho bom (07/ago/2026)

**De onde veio:** 07/ago/2026. Numa única noite errei o julgamento "está travado?" **três vezes**,
sempre por usar a régua de um tipo de processo em outro:

1. **Portão de QC** — somei o CPU dos filhos DIRETOS (3→3 s) e concluí "pendurado". **Matei um
   processo sadio**: o trabalho estava nos netos, e a árvore recursiva mostrava 20→28 s ([SIS-132]).
2. **Render do mamute** — vi "0 de 81 clipes" por uma hora e chamei de lento. Estava **barrado no
   portão**, com o motivo escrito no log que eu não tinha lido.
3. **Sessão de pesquisa do `ceuta`** — medi 1 s de CPU em 15 s e quase declarei parada. Ela estava
   caçando, baixando e promovendo footage: os arquivos chegaram 10 min antes, com nome por cena.

**A lei:** *cada tipo de processo tem a sua régua, e usar a errada inventa um defeito que não
existe — sempre na direção de matar trabalho bom.*

| o que é | régua certa | por que a outra falha |
|---|---|---|
| trabalho local (ffmpeg, Chrome, encode) | **CPU da árvore RECURSIVA**, duas medidas espaçadas | o pai só orquestra; o gasto está nas folhas |
| **sessão de agente (LLM)** | **artefato novo com carimbo de tempo** | esperando a API ela consome ~0 CPU — "pensando" e "morta" são idênticas na CPU |
| estação da fila | **o LOG dela**, lido até o fim | a contagem agregada esconde o veredito ("81 BARRADAS no portão") |
| download | **o arquivo parcial crescendo** (`.crdownload`) | o processo existe muito antes de o byte chegar |

⚠️ **A pergunta que resolve antes de qualquer medição:** *o que este processo produziria se estivesse
saudável, e quando foi a última vez que produziu?* Para agente isso é um arquivo; para render, um
clipe; para caça, bytes no disco. **Contagem agregada nunca responde** — "17 arquivos" parece parado
entre dois pulsos quando cada arquivo tem 600 MB.

⚠️ E o custo do erro é assimétrico: julgar "parado" leva a MATAR. Nenhuma dessas três reguas custa
mais que 20 segundos — e a que eu pulei teria evitado matar um portão que estava a meio caminho.

### SIS-137 · não se edita script de shell em execução — o bash lê por offset (07/ago/2026)

**De onde veio:** 07/ago/2026. Subi por `scp` uma versão nova do `_render-4k-loop.sh` enquanto dois
loops o executavam. O log do `orcas-nao-matam` registrou a transição, e ela é didática:

```
▸ portão: conferindo os gates das cenas…
  ⏱ portão estourou 900s (…)                      ← a versão ANTIGA, ainda em execução
scripts/_render-4k-loop.sh: line 77: o: command not found   ← o scp entrou AQUI
  ⏱ prazo do portão: 1236s para 28 cena(s)         ← a versão NOVA, já valendo
```

**A causa:** o bash **não carrega o script inteiro na memória** — ele lê por demanda, guardando o
deslocamento em bytes de onde parou. Trocar o arquivo por baixo move todo o conteúdo: o
interpretador volta a ler no mesmo offset, que agora cai no MEIO de outra palavra. Daí o
`o: command not found` — é o resto de "automático" virando comando.

**A lei:** *não se edita um script de shell em execução.* Nem por `scp`, nem por editor, nem por
`sed -i`. O jeito seguro é escrever num arquivo novo e trocar por **rename atômico** (`mv`), que
substitui a entrada do diretório sem tocar nos bytes que o processo já mapeou:

```bash
scp novo.sh maquina:~/proj/script.sh.novo
ssh maquina 'mv ~/proj/script.sh.novo ~/proj/script.sh'   # atômico: o processo antigo termina com o inode velho
```

⚠️ **O estrago varia com a sorte, e é aí que ele engana.** Desta vez o comando lixo era inofensivo e
o loop se recuperou na iteração seguinte, com a versão nova valendo — parece que "deu certo". Mas o
mesmo deslocamento poderia cair sobre um `rm` ou sobre a linha que monta o caminho de saída. *Um
defeito que só é inofensivo por acaso ainda é um defeito.*

⚠️ Vale para `.sh`; **não** vale para `.mjs`/`.py`, que o interpretador lê inteiro na partida — ali
trocar o arquivo só afeta a PRÓXIMA execução, que é justamente o que se quer.

### SIS-138 · Log de sessão `-p` não é régua de progresso — a régua é o artefato (07/ago/2026)

O modo `-p` do `claude` **bufferiza a saída e só a escreve no fim**. O arquivo de log para de
crescer nos primeiros segundos de vida da sessão e fica assim por horas — trabalhando o tempo todo.

Medido em 07/ago/2026 na caça do `ceuta`: o log estava intocado havia **2h58**, e a última linha
era `Execution error` (um aviso de conector emitido na abertura). Pelo log, a sessão morrera havia
três horas. Pelo disco, ela tinha acabado de gravar três footages nos últimos 6 minutos, e o
`.crdownload` em curso crescia **223 MB em 20 segundos**. *Matar aquela sessão por "travada" teria
destruído três horas de caça e queimado de novo a cota diária do Shutterstock, que é finita.*

**A régua de uma sessão headless é o ARTEFATO que ela produz, nunca o log dela:**

| o que medir | como |
|---|---|
| a sessão avança? | `find <dir do PROJETO> -newermt '-10 minutes'` — arquivo novo é prova |
| download em curso? | o `.crdownload` **cresce** entre duas medidas ([SIS-136]) |
| o processo vive? | `ps -o etimes,pcpu -p <pid>` + **a ÁRVORE de filhos**, não o processo raiz |
| o log | **só serve depois que ela encerra** |

⚠️ **REFINAMENTO, medido 40 minutos depois desta lei ser escrita — por ela mesma me enganar de novo,
para o mesmo lado.** Duas armadilhas na linha "arquivo novo":

**1 · O diretório é o do PROJETO, não o da mídia.** Medi `_media/` e vi zero arquivos novos em 30
minutos, com nenhum `.crdownload`: dois de três sinais negativos, e concluí trava. A sessão tinha
escrito `pauta-imagens-footage.json` havia 9 minutos e o `diario.jsonl` havia 5. *Uma caça alterna
entre baixar (gera mídia) e buscar/curar/planejar (gera texto), e a fase de curadoria é longa por
construção* — é nela que o julgamento acontece. Olhar só a pasta de mídia mede um lado do trabalho.

**2 · O processo raiz mente sobre a atividade.** A sessão marcava **2,1% de CPU** e "1 filho". A
árvore dizia outra coisa: `bash → timeout → node → xvfb-run → Xvfb + node → python3 a 62%`. É a mesma
raiz da [SIS-132] — o trabalho mora nos NETOS.

⚠️ **REFINAMENTO 2 — o sinal DEFINITIVO, achado na terceira vez que quase matei a mesma caça.**
Nem "tem filhos" nem "CPU instantânea" distinguem **travada** de **pensando**: uma sessão headless em
inferência não tem filho nenhum e marca ~2% de CPU, exatamente como uma morta. Medido em 07/ago às
15:0x no `ceuta`, com zero filhos, todas as travas de caça livres e nenhum download — o quadro
completo de uma sessão morta. Ela estava trabalhando.

Os dois sinais que **não** se confundem:

| pergunta | comando | leitura |
|---|---|---|
| está falando com o modelo? | `ss -tnp \| grep "pid=<PID>"` | socket `ESTAB` na porta 443 = **em inferência** |
| está consumindo CPU? | `cut -d' ' -f14,15 /proc/<PID>/stat`, duas vezes | os contadores **crescem** = trabalhando |

*CPU acumulada é o relógio do trabalho; CPU instantânea é só uma foto — e a foto de quem pensa é
igual à de quem morreu.*

E há um terceiro sinal que só existe em quem caça: **a trava de plataforma**
(`node scripts/stock/trava-caca.mjs ver`). Uma trava tomada há segundos, por esta máquina, é prova
viva de trabalho — e ainda diz *em qual plataforma* ele está, que é como se descobre que a caça
apenas mudou de acervo em vez de parar.

Isto é o espelho do morto-silencioso, e por isso engana tanto: a família conhecida reporta sucesso
sem ter trabalhado, e esta reporta MORTE tendo trabalhado. A defesa é a mesma nos dois casos —
perguntar ao disco, não ao relato. *E "perguntar ao disco" só vale se a pergunta cobrir todos os
lugares onde aquele trabalho deixa marca.*

⚠️ E a última linha de um log truncado é a mais traiçoeira de todas: ela parece o desfecho e é o
começo. `Execution error` na linha final de um arquivo que parou aos 73 s de uma sessão de 3 h não
é a causa da morte; é o que ela imprimiu antes de começar a trabalhar.

### SIS-140 · Estado que nunca se reconcilia com a realidade não é estado: é lembrança (07/ago/2026)

Um registro de "quem está trabalhando" que só se **escreve na entrada** e nunca se **confere contra
o mundo** para de valer no primeiro imprevisto — e não avisa, porque do lado de dentro ele continua
perfeitamente coerente.

Medido em 07/ago/2026 no despachante: o laço que avalia sessões percorre os arquivos `.pid` do
diretório de despacho. Um projeto cuja linha diz `rodando` mas cujo `.pid` sumiu — porque o serviço
reiniciou no meio, porque a máquina caiu, porque o enterro rodou pela metade — **nunca é visitado**:
não é enterrado, não avança de estação, não é bloqueado, não volta para a fila. Fica `rodando` para
sempre.

**Três projetos ficaram 4 horas assim**, todos com `atualizadoEm 09:56`: `galaxia-arco-flecha@qc`
(51 cenas de arte pronta, zero laudos), `especies-humanas@qc` e `orcas-nao-matam@render` (27 de 28
clipes). Nenhum tinha `.pid`; nenhum tinha processo. A fila dizia que os três estavam ocupados, e
o despachante acreditava nela — porque a fila é o que ele lê.

**A reconciliação é o conserto, e ela tem duas metades opostas:**

| defeito | o que existe | o que falta | efeito |
|---|---|---|---|
| trabalho sem crachá (`FLEET ÓRFÃO`) | processo vivo | `.pid` | contabilidade desregula, máquina satura |
| **crachá sem trabalho** (`LINHA FANTASMA`) | linha `rodando` | processo | **o projeto para para sempre** |

O segundo é pior, e foi o que ficou dez meses sem quem o pescasse: o primeiro incomoda quem está
olhando, o segundo é silêncio.

⚠️ **A varredura tem de ser conservadora**, e a assimetria é deliberada: devolver à fila um projeto
que ESTÁ sendo trabalhado dispara uma segunda sessão sobre os mesmos arquivos, que é pior que a
doença. Então só volta quem falha nas **três** provas — sem `.pid`, fora da lista de órfãos de
render, e sem trabalho de fundo vivo. Na dúvida, mantém ocupado. Provado em `--dry` antes de valer:
pegou os três fantasmas e **manteve o `mamute-de-volta` ocupado**, que era o lado que importava.

### SIS-143 · O terceiro estado de uma sessão: VIVA e improdutiva — e a régua é produção, não tempo (07/ago/2026)

O orquestrador sabia lidar com dois estados de sessão: **morta** (enterra, lê o log, avança ou
bloqueia) e — desde a [SIS-140] — **linha fantasma** (marcada `rodando` sem processo nenhum). Faltava
o do meio, e é o mais caro: **a sessão que continua viva, com o processo de pé, e não entrega nada.**

Ela ocupa a vaga do recurso mais escasso da casa e ninguém percebe, porque **do lado de fora é
indistinguível de uma sessão produtiva**: tem PID, tem CPU, tem log aberto.

A pergunta que gerou isto (Mateus, 07/ago/2026): *"por que não tem um agente pra dar um toque nela?
… teoricamente eu não deveria ser o gate nem gargalo nenhum na produção"*. Ele está certo, e a
formulação é a lição: **o dono descobrir uma estação parada é o próprio defeito.**

⚠️ **A RÉGUA É PRODUÇÃO, NÃO TEMPO.** Cronômetro sobre a estação erra nos dois sentidos: a arte de
148 cenas leva horas legitimamente e seria morta; a estação de textos trava em 3 minutos e seria
absolvida. O que separa é *"ela escreveu ALGUMA COISA no projeto ultimamente?"* —
`find out/<slug> -newermt '-45 minutes'`.

⚠️ **E o vigia ACENDE A LUZ, não decide.** Não mata, não devolve à fila, não bloqueia: registra o
aviso nomeando o arquivo de log a abrir. Matar por suspeita é como quase perder 5 h de caça três
vezes numa noite ([SIS-138]) — uma sessão em inferência longa é, no `ps`, idêntica a uma travada. A
prova de vida é outra: **socket na 443 e CPU acumulada crescendo**.

*Um sistema que só reconhece "funcionando" e "morto" fica cego para o estado em que a maioria das
travas de verdade acontece.*

### SIS-144 · Adotar máquina nova: a prova é RODAR um gate, não conferir se o arquivo existe (07/ago/2026)

Máquina nova que recebe trabalho de fundo precisa de uma prova de adoção, e ela é **executar**, não
inventariar. Arquivo presente, versão certa e credencial no lugar não garantem que o programa roda —
e o modo como ele falha é pior que a falha.

Medido em 07/ago/2026, adotando a `estudio-mapas` como máquina de render: copiei os gates de cena com
`scp`, um a um, e **não levei `scripts/lib/`**. Não deu erro visível. Os gates crasham na importação,
saem com código **1** — que a convenção da casa lê como *"MEDI e reprovei"* —, e o `qc-cena.mjs`
carimbou **51 de 51 cenas como reprovadas**. O render recusou o lote inteiro, corretamente, por um
defeito que não existia. A ironia: o arquivo que faltava era `lib/nao-medido.mjs`, **a própria
proteção contra crash-lido-como-reprovação**.

⚠️ **O sintoma "tudo reprovando igual" convida ao diagnóstico errado.** Ele parece defeito de
conteúdo, e eu cheguei a acusar as FONTES — comparei `fc-list` entre as duas máquinas, vi 16 contra
10 e tinha uma hipótese plausível. Era duplicata de arquivo: as 8 variantes eram idênticas.
*Diferença de ambiente convida a comparar, e comparar a coisa errada custa mais que não comparar.*

**A pergunta certa é sempre a mesma, e é barata: rode UM gate sozinho e LEIA o erro.** Em dez
segundos o `ERR_MODULE_NOT_FOUND` diz tudo que a comparação de fontes não disse.

O gate `qc-maquina-pronta.mjs` faz isso por quem adota: deriva do CÓDIGO as libs que os gates
importam (lista escrita à mão envelhece calada), **executa** cada gate numa cena cobaia, e confere o
que a experiência já cobrou — Chrome, fontes da marca, `lingering` ([SIS-142]) e chave de mapa.

### SIS-146 · VEREDITO DE QC NÃO TEM VALIDADE ETERNA — e "AUSENTE" não é "PASS" (medido 07/ago/2026)

⚠️ **A CLÁUSULA «aviso, não erro» DESTA LEI FOI SUPERADA PELA [SIS-475] em 14/set/2026.** Ela dizia:
*«durante a revisão iterativa o dono É a bancada, e travar aqui recriaria o gate que ele mandou tirar
(02/ago)»* — e a ordem citada era sobre **aprovação de CENA**, não sobre checagem factual de roteiro.
Hoje a lente `fatos` TRAVA o `regerar-doc` a partir de `aguardando_gravacao`. O resto da lei vale: o
carimbo continua sendo foto, e `AUSENTE` continua não sendo `PASS`.

`enviar-drive.mjs` exige `out/<proj>/qc-roteiro/bancada.veredito` e barra sem ele — o gate está lá e
funciona. Só que ele pergunta se o arquivo EXISTE e se diz PASS; nunca se o veredito ainda descreve o
texto atual, nem se todas as lentes de fato rodaram.

**Medido em 07/ago:** `ucrania-duas-guerras-uma`, aprovado pelo Mateus e pronto pra gravar, carregava
`BANCADA: FAIL (locucao=FAIL clareza=AUSENTE fatos=AUSENTE geral=PASS)` carimbado em **01/ago** — quatro
dias e ~13 revisões antes. Duas das quatro lentes nunca rodaram, e uma delas era a dos FATOS. O mesmo em
`ceuta`: veredito PASS de 01/ago sobre um roteiro que mudou até 05/ago.

Gate: `validar-roteiro.mjs` §6f + `regerar-doc.mjs` — acusam veredito mais VELHO que o roteiro e lente
`=AUSENTE`, nomeando o que ninguém conferiu. **Aviso, não erro:** durante a revisão iterativa o dono É a
bancada, e travar aqui recriaria o gate que ele mandou tirar (02/ago). O defeito era o silêncio, não a
ausência de trava. *Carimbo de aprovação é foto, não contrato: ele descreve o texto que existia quando
foi tirado.*

### SIS-147 · GATE COM DESVIO NÃO É GATE — é sugestão, e o desvio é o caminho CURTO (medido 07/ago/2026)

O estúdio tinha uma bancada de quatro críticos adversariais (locução, clareza, **fatos**, geral) montada,
testada e cobrada por `enviar-drive.mjs`, que reprova sem o veredito das quatro lentes. E tinha
`regerar-doc.mjs`, o irmão curto — troca só o Doc, sem avançar estado nem avisar o apresentador —
conferindo **uma única coisa antes de publicar no Drive: se existia `drive.pasta_id`**.

Nenhum gate. Nem o determinístico, que custa zero.

**Medido:** entre 03 e 07/ago, ~30 revisões de três roteiros saíram por essa porta. O
`verificador-de-fatos` não rodou **uma vez sequer**, e os três erros factuais que chegaram ao texto — a
data de 1538 escrita de memória, os "7 metros em pouco mais de um dia" herdados do original e nunca
conferidos, os "19 metros" simplesmente inventados — foram pegos pelo Mateus, lendo. Ele fez à mão o
trabalho de um agente que existia, estava pronto e ninguém chamou.

A porta curta não foi escolhida por preguiça: ela era **a certa para o que se estava fazendo** (trocar o
Doc numa iteração), e por isso foi usada trinta vezes sem que a falta aparecesse.

Conserto: `regerar-doc.mjs` agora roda o gate determinístico e **TRAVA** (custo zero, sem desculpa), e
**AVISA alto** sobre bancada ausente, incompleta ou vencida — sem travar, porque na iteração o dono é a
bancada. Escape explícito `--sem-gate`, que se declara no report.

*Ao construir um gate, procure os OUTROS caminhos até o mesmo destino — o desvio raramente é o atalho
preguiçoso; costuma ser a rota legítima que ninguém lembrou de blindar.*

### SIS-149 · A proteção escrita para um laço não protege o irmão ao lado (medido 07/ago/2026)

`liberar-espaco.mjs` apaga insumo pesado em duas seções: o laço dos `_bruto/origem/` e, logo abaixo,
a seção que sobe-e-apaga a `source-sincronizada.mp4`. Depois de **dois acidentes** com a primeira,
ela ganhou três camadas: lock declarado (`<caminho>.EM-USO.lock`), `lsof` como segunda linha, e
"falha do lsof = não apago". Os comentários dessas camadas são longos e bem escritos.

Nada disso chegou à segunda seção — que trata justamente o arquivo de 11 a 47 GB.

**Medido:** baixei os 11,27 GB do `o-acre` às 19:43 para refazer o master; o download derrubou
`/dados` abaixo do piso de 150 GB; às 19:48 a segunda seção apagou o arquivo. Entre baixar e usar,
o `mv` do master antigo levou 5 minutos, e nessa janela ninguém tinha o arquivo aberto — o `lsof`
respondeu "livre" com razão.

A premissa que autorizava apagar estava escrita e era falsa: *"ela é consumida só pela TRANSCRIÇÃO;
com `words.json` e `_cortes.json` no disco, o papel dela acabou"*. O `master-decupado.mjs` é um
segundo consumidor, e o laudo do `qc-master-em-fase` manda baixá-la exatamente para isso. O campo
`consumido` responde *"a transcrição já rodou?"*, não *"alguém ainda precisa disto?"*.

Conserto: as três camadas replicadas na segunda seção, e o laudo do gate agora manda **criar o lock
ANTES de baixar** — receita que baixa GB sem declarar o lock ensina o acidente que ela deveria evitar.

*Ao endurecer uma trava depois de um acidente, procure os OUTROS pontos do mesmo arquivo que fazem a
mesma coisa perigosa. Proteção é por VERBO destrutivo, não por laço.*

### SIS-150 · Vigiar `df -h /` numa máquina cuja produção mora em outro disco é vigilância que não protege (07/ago/2026)

A `estudio-top10` tem **dois** filesystems: `/` (`/dev/root`, 485 GB) e **`/dados`** (`/dev/sdb`,
1 TB), e `out/` — a produção inteira — mora em `/dados`. Toda a doutrina de vigilância de disco
mandava rodar `df -h /`.

**Medido em 07/ago:** `/` em 82% e `/dados` em 87%. Quem seguia a régua lia o número folgado do disco
onde nada acontece. O piso de 150 GB do despachante é medido em `/dados`; o alarme, em `/`.

Corolário que morde junto: `mv out/<proj>/... arquivo-morto/` **cruza filesystem** — não é rename
instantâneo, é cópia. Um master de 10,4 GB levou 5 minutos, e foi durante essa janela que a
[SIS-149] aconteceu.

*Antes de vigiar um recurso, pergunte onde o trabalho de fato mora. `df` sem caminho responde sobre a
raiz, e a raiz raramente é onde a produção vive.*

### SIS-151 · O artefato mais caro da casa não tinha dono de backup (medido 07/ago/2026)

Fui conferir o bucket antes de desligar a `estudio-mapas` e ele tinha **zero** dos 40 clipes 4K do
`galaxia`. Conferi os outros: `o-acre` 71 locais e 0 no bucket, `orcas` 27 e 0. **138 clipes 4K —
dezenas de horas de render sobre arte paga — num disco só**, num dia em que eu ia desligar uma
máquina e arquivar decupagens.

A causa não é descuido. É uma lacuna de DONO, e as duas peças que pareciam cobrir isso não cobrem:

· `descarregar.mjs` recusa projeto não finalizado **por desenho** (`"sem XML de 5 camadas"`), e está
  certo: ele é DESCARGA, existe para liberar disco de vídeo pronto. Entre o render fechar e a
  finalização acontecer passam-se dias, e nessa janela ninguém responde pelo clipe.
· `sync-bucket.sh` existia e **ninguém o chamava** — nem um `grep` em `scripts/` e `infra/` o
  encontra sendo invocado.

*Cada peça estava correta no seu escopo, e entre os dois escopos havia uma janela de dias.*

Conserto: `scripts/estudio/subir-clipes.mjs` no timer `top10-backup-clipes` (20 min). Sobe só os
`-4k.mp4`, por `rsync --exclude` (idempotente — rodar de novo é grátis; `cp` reenviaria 29 GB por
passada), nunca apaga no destino, e **confere a contagem depois de subir** em vez de confiar no
código de saída.

*Ao herdar um sistema, não pergunte "existe backup?" — pergunte, para cada artefato caro, **QUEM** o
copia e **QUANDO**. Artefato que só é protegido por uma etapa futura fica descoberto até ela chegar.*

### SIS-153 · Lock e `lsof` respondem "aberto AGORA" — e a decupagem passa horas sem abrir o bruto (07/ago/2026)

O `liberar-espaco.mjs` protege o bruto com lock declarado e `lsof`. As duas travas respondem à mesma
pergunta: *alguém tem este arquivo ABERTO neste instante?* E a decupagem, que é dona do bruto por
horas, passa a maior parte delas sem tocá-lo — baixa, sincroniza, transcreve, e só no
`master-decupado.mjs` volta a lê-lo (que é, aliás, onde o lock de fato nasce: `master-decupado.mjs:113`,
com liberação por sinal, bem escrito).

Na janela entre uma etapa e outra, as duas travas dizem "livre" **com toda razão** — e o arquivo some
debaixo de um trabalho de horas.

**Medido:** o despachante chamou o liberador com `/dados` em 88%, e ele começou a subir os 46 GB do
`a-guerra-da-ucrania-deixou` para apagá-los em seguida, com a decupagem daquele projeto viva havia 68
minutos. Só não se perdeu porque criei o lock à mão enquanto o upload corria.

Conserto: o liberador agora consulta **a FILA**, que sabe o que as travas de processo não sabem —
quem está em decupagem. Custa a leitura de um jsonl e cobre todos os caminhos de uma vez, sem exigir
que cada consumidor lembre de declarar lock.

⚠️ **E a primeira versão do conserto estava errada de um jeito instrutivo:** eu protegi `rodando` E
`pendente`, e a trava cobriu **29 projetos** — a fila tem dezenas de pautas que nunca começaram. O
liberador ficaria incapaz de liberar qualquer coisa e o disco encheria. *Trava que protege tudo não é
proteção, é paralisia — e parece proteção, que é o que a torna perigosa.* Só `rodando`: quem está
`pendente` e perde o bruto re-baixa; quem está `rodando` perde horas.

*Antes de confiar numa trava, pergunte QUAL pergunta ela responde. "Está aberto agora?" e "alguém
ainda precisa disto?" são perguntas diferentes, e a segunda é a que importa para não destruir
trabalho.*

### SIS-154 · Gate de cobertura precisa conhecer as formas LEGÍTIMAS de um item do plano não virar artefato (07/ago/2026)

Escrevi o `qc-cobertura-espelho.mjs` para tapar um buraco real — nenhum gate contava cena PREVISTA
contra cena FEITA ([FIN-129]). A primeira versão comparava os ids do espelho com os arquivos em
`graphics/`, excluindo só `modo: "apresentador"`.

**Acusou o `o-acre` de ter 4 cenas sem arte, 3,1% do vídeo.** As quatro tinham `mergedInto`: foram
FUNDIDAS em vizinhas (`s20`→`s19`, `s62`→`s61`, `s73`→`s72`, `s84`→`s83`), e as quatro de destino
tinham clipe. Fusão é decisão do montador, não pendência.

O despachante já sabia disso — `estacaoEntregouArtefato` filtra `anima !== false && !mergedInto`
([SIS-40]) e por isso cobra 71 de 86 segmentos, batendo exatamente com os 71 clipes. **O gate novo é
que divergia da régua de quem decide o avanço da fila.**

E o estrago não foi o alarme: foi o que fiz com ele. Reverti um laudo PASS para FAIL, **segurei uma
entrega pronta**, e levei ao Mateus uma decisão sobre um problema inexistente — ele respondeu "segura
até desenhar" com base na minha informação errada. Duas horas de atraso saíram de um filtro faltando.

*Antes de escrever um gate que compara PLANO com PRODUZIDO, encontre quem já faz essa conta no
sistema e copie a régua dele. Se ninguém faz, enumere as formas legítimas de um item do plano não
gerar artefato — elas existem, são poucas, e cada uma que falta vira alarme falso.*

⚠️ E há um segundo aprendizado, mais caro: **um gate recém-escrito não tem histórico de acerto.** Ao
receber o primeiro alarme dele contra um artefato que já passou por outros gates, a hipótese mais
provável é que o GATE esteja errado, não o artefato. Verifique o gate antes de agir sobre o veredito
— e nunca reverta um PASS de outra ferramenta sem antes conferir por que as duas discordam.

### SIS-159 · [renumerado de SIS-152 no merge de 08/ago — colisão entre Mac e VM]

O `redator-de-tela` nasceu com `tools: Bash, Read, Write, Glob, Grep` — e com um contrato que manda,
por escrito, **"cada `fonte` é uma URL que você ABRIU, não uma que parece certa"**, mais um ofício que
diz **"aspas na tela são literais ou não são aspas"**. As duas frases pedem uma coisa que as
ferramentas dele não faziam.

No `galaxia-arco-flecha` isso encostou numa citação que ia à tela entre aspas. A captura da página em
disco (`_media/documento/s56-ras-press-release-prova.png`) mostrava o topo do release e **cortava
antes do parágrafo da fala**. O agente fez o certo: entregou o card com a tradução, marcou
`_ressalva_dura` e escreveu que **alguém** precisava abrir a URL antes do render.

**O defeito não é a ressalva — é o "alguém".** O verbatim vinha de duas pautas de pesquisa que
concordavam palavra por palavra, e concordância é o argumento que faz a checagem parecer feita:
*duas cópias que concordam não são duas fontes*. Um redator menos escrupuloso teria escrito
`conferido: true` e ninguém notaria; a aspa iria ao ar sustentada por transcrição interna.

Uma chamada de `WebFetch` do editor-chefe fechou a linha — e o original era **`in the last 25 years`**,
não `since the last 25 years` (a variante que o outro release publica, e que **não** sustentava a
tradução escolhida). De quebra confirmou o cargo do citado, o crédito da figura e a grafia do segundo
nome próprio do vídeo, numa requisição.

**A regra:** quando o contrato de um agente exige um ato (abrir URL, olhar frame, medir arquivo), o
`tools:` dele tem de conter a ferramenta desse ato — ou o contrato tem de dizer a quem escalar, **por
nome**. "Alguém confere depois" não é destinatário: é uma pendência sem dono, e pendência sem dono
morre com a sessão que a escreveu.

**O conserto (aplicado):** `WebFetch` entrou no `redator-de-tela`; `WebSearch` **não** — a assimetria é
deliberada e vale como padrão para agente de conferência. *Abrir a fonte que a pauta registrou é
conferir; procurar fonte nova é refazer a pesquisa de outro agente, e é inferência paga duas vezes.*

### SIS-163 · [renumerado de SIS-155 no merge de 08/ago]

Ao despachar sete correções de cena no `o-acre`, o Mateus perguntou se os subagentes tinham as
mídias — as fotos e footages moram no bucket, e o disco é cópia de trabalho. A pergunta era
certeira. Medido no projeto: **111 de 129 referências ausentes, em 53 das 71 cenas.**

O `entregar.mjs --limpar` apaga `_media/` como etapa fixa pós-entrega, e **isso está certo** — é a
doutrina de disco enxuto. O defeito não é apagar; é **voltar a trabalhar na cena depois** sem
ninguém reconstituir o insumo.

**Por que é dos piores mortos-silenciosos.** Uma cena cuja foto não carrega **não quebra**: o Chrome
desenha o resto, o PNG sai com tamanho normal, o `__renderAt` responde, o `qc-contrato` passa, e o
render 4K produz um arquivo com a duração exata que se esperava — com um buraco no meio. Três
camadas conspiravam para o silêncio:

1. o molde do `__fotosProntas` fazia `im.addEventListener('error', r)` — **resolvia igual no sucesso
   e no erro**. A intenção era certa (imagem quebrada não pode travar o render para sempre), mas o
   efeito é a cena **declarar-se pronta com a foto faltando**;
2. o `shot.mjs` terminava com `console.log("ok")` sem conferir nada;
3. `im.complete` é `true` também quando a imagem falhou — a prova é `naturalWidth > 0`.

Dois agentes que consertavam marcação sobre fotografia mediram coordenadas contra fundo liso por
causa disso. Um relatou ao vivo: *"o primeiro frame saiu com o traçado sobre fundo PRETO e 'ok' no
log (falha calada; `__fotosProntas` resolve também no `error`)"*. **Correção medida sobre o vazio
sai pior que o defeito original, e com aparência de trabalho feito.**

**Os três consertos, todos na fonte:**

- o molde do `editor-de-arte` ganhou `window.__midiaFalhou` — resolve **e registra**. *Resolver e
  registrar é o que separa "não travei" de "não vi".*
- o `shot.mjs` lê esse array (e confere `naturalWidth`/`readyState` por conta própria, para as cenas
  antigas), grita no stderr, imprime `ok-COM-MIDIA-FALTANDO` no stdout e **sai com código 3**. Quem
  só lê "ok" tem de tropeçar.
- o `qc-src-existe.mjs` ganhou `--restaurar`: traz do bucket **arquivo a arquivo** (nunca a pasta —
  `_media/` guarda HTML de clipping junto com a foto, e rsync de entrada já destruiu 5 cenas em
  26/jul), com verificação individual e a lista do que **não estava no backup**.

⚠️ **E uma lição sobre escrever antes de procurar.** Escrevi um gate novo para isto e só depois
descobri que a capacidade existia desde 24/jul ([ARTE-44], `qc-src-existe.mjs`). Pior: o antigo
tinha uma proteção que o meu não tinha — **ignora comentário HTML**, sem a qual os templates que
documentam `<!-- troque por <img src="URL"> -->` seriam reprovados por um src que não é um src. Eu
tinha acabado de escrever um alarme falso. Fundi as capacidades novas no dono legítimo e aposentei o
meu em `arquivo-morto/2026-08-gate-duplicado/`. *Um assunto, um dono, um lugar — e a busca vem antes
da escrita.*

**A rotina que fica:** antes de despachar agente para mexer em cena de projeto já entregue, ou antes
de render 4K, rode `node scripts/qc-src-existe.mjs out/<proj>` — e `--restaurar` se acusar.

---

### SIS-164 · [renumerado de SIS-156 no merge de 08/ago]

Ao preparar a re-decupagem do `o-acre`, rodei o `qc-margem-corte.mjs` nele e li:

    ✓ nenhum corte invade a cauda da fala.

Era mentira, e da pior espécie: o projeto **não tem** `_cortes.json` nem `words.json` (foram limpos
na entrega). O laço fazia `if (!existsSync(fc) || !existsSync(fw)) continue;` — pulava em silêncio,
o contador de apertados ficava em zero, e o rodapé anunciava o zero como se fosse resultado.

**A escala do engano só apareceu ao consertar.** A varredura que produziu o número famoso — *"164
cortes apertados em 12 vídeos"* — tinha medido 12 projetos porque só 12 tinham insumo. **Os outros
50 nunca foram medidos**, e o gate os reportava como parte do "tudo certo".

*Um "✓" que significa "medi e está bom" e um "✓" que significa "não tinha o que medir" são a mesma
tecla — e quem lê escolhe a interpretação otimista.* Vale para qualquer verificação: se o insumo
pode faltar, o laudo tem três estados (PASSOU · REPROVOU · **NÃO MEDIDO**), nunca dois.

**O conserto**, e ele é de uma linha de desenho, não de esperteza: coletar o pulo em vez de o
descartar (`semInsumo.push({proj, motivo})`), imprimir a lista antes do veredito, e mudar o texto do
sucesso para `✓ nos N projeto(s) MEDIDOS` quando houver qualquer ausência. O número de projetos
medidos passa a aparecer sempre — se ele encolher, alguém vê.

⚠️ Isto é irmão da [SIS-155] pelo lado oposto: lá a cena declarava sucesso com a foto faltando; aqui
o gate declara sucesso com o insumo faltando. **A família toda se pega com a mesma pergunta: o que
este "ok" afirma que foi de fato executado?**

---

### SIS-165 · [renumerado de SIS-157 no merge de 08/ago]

A fila de decupagem tinha **33 vídeos parados** e ninguém sabia por quê. O log do
`a-guerra-da-ucrania` conta a história inteira:

    [02:45] → video.mp4: copiando 45.80 GB do Drive
    [03:11] ✓ 45.80 GB em 26.2 min — tamanho confere com a origem
    [03:12] → video.mp4: copiando 45.80 GB do Drive        ← de novo, 2 min depois
    [03:27] ✗ cópia falhou — ENOENT: stat 'out/…/_bruto/origem/video.mp4'

**Quatro voltas do mesmo download de 45,80 GB — ~183 GB de banda — e o bruto nunca ficava pronto.**

**As duas pontas estavam corretas, cada uma sozinha.** O `materializar-bruto.mjs` copia do Drive e
prova o resultado pelo tamanho na origem (*"não confio no meu próprio ✓"*), o que é exemplar. O
`liberar-espaco.mjs` apaga `_bruto/origem/` para devolver disco, e já tinha sido ensinado a poupar
quem está em decupagem ([SIS-153]) e a conferir que o Drive ainda tem a fonte.

O buraco é a **janela entre as duas**: os ~26 minutos em que o arquivo está sendo copiado e o
projeto ainda não entrou em decupagem nenhuma. Nessa fresta o bruto parece exatamente aquilo que o
liberador existe para apagar — arquivo enorme, sem `words.json`, sem `_cortes.json`. Ele apagava; o
`copyFileSync` terminava, o `statSync` do destino batia em nada, e o despachante — vendo bruto
incompleto — mandava copiar de novo meia hora depois.

⚠️ **E o laço era silencioso porque cada ponta relatava com honestidade.** O copiador dizia "cópia
falhou — ENOENT", que soa como problema de rede. O liberador dizia "liberei N GB", que é o trabalho
dele. Ninguém mentia; **faltava alguém lendo os dois logs juntos.**

**A regra geral, e ela vale para todo par limpa/produz:**

> Quando uma rotina cria um arquivo demorado e outra apaga arquivos por critério de espaço, **as
> duas precisam conhecer a mesma trava**. A que produz declara "estou mexendo aqui"; a que limpa lê
> a declaração antes de decidir. Sem isso, duas automações individualmente corretas produzem um
> laço — e o laço não aparece em nenhum dos dois logs, só na conta de banda.

O conserto é a PROVA 0 do `liberar-espaco.mjs`: se existe `_bruto/.materializando.lock` **e o pid
dono está vivo**, o bruto fica e o projeto é pulado. Trava órfã (dono morto) não protege, mas é
anunciada — parcial gigante abandonado é justamente o que se quer apagar.

Verificado na VM no momento do conserto: `⛨ a-guerra-da-ucrania — CÓPIA DO BRUTO EM CURSO (pid
549294, 1 min), o bruto fica` — dois projetos que teriam sido apagados de novo em minutos.

**⚠️ O LAÇO TINHA DUAS JANELAS, e a primeira correção só fechou uma.** Depois de proteger a cópia em
curso, o log do `supervulcao-napoles` mostrou a segunda em 20 segundos:

    [00:21:48] ✓ video.mp4: 44.92 GB — tamanho confere com a origem
    [00:22:08] ✗ cópia falhou — ENOENT: stat 'out/…/_bruto/origem/mic.wav'

O vídeo completou, o lock caiu no `finally`, o liberador entrou e apagou a pasta — e o `mic.wav`,
que vinha logo em seguida, achou terra arrasada. **Oito voltas nesse projeto, ~360 GB.** Faltava
proteger o bruto **já baixado que a fila ainda quer**, entre o fim da cópia e o início da decupagem.

⚠️ **E a calibração dessa segunda trava me pegou no mesmo arquivo em que o erro está documentado.**
O comentário do `EM_DECUPAGEM` avisa, desde 07/ago, que incluir `pendente` protegeu 29 projetos e
"desliga o liberador". Escrevi a trava nova com carência de **24 h** — e ela blindou **22 projetos**,
com o disco em 90%. *Ler o aviso não basta; a régua tem de ser medida contra o estado real.* Com
carência de **2 h**, protege 2 — os que estão de fato copiando.

⚠️ **E o teto denuncia um problema maior, que não é do liberador.** Medido na VM: **~500 GB de bruto
baixado, quase todo com 12 a 18 h e nunca decupado.** O despachante materializa em lote e a
decupagem consome de 4 em 4; o liberador recolhe o excedente, o despachante re-baixa, e a banda gira
em círculo. As travas impedem o dano imediato — **a cura é o despachante só baixar o que vai decupar
em seguida.**

⚠️ **Cuidado ao caçar o culpado:** minha primeira suspeita foi o `descarregar.mjs`, que também
apaga pasta de projeto e roda de 30 em 30 min. Era plausível e **estava errada** — ele exige XML de
5 camadas, e o projeto não tem. *Verbo destrutivo perto do horário não é prova; a prova é a guarda
que o script aplica.*

---

### SIS-166 · [renumerado de SIS-158 no merge de 08/ago]

Com `/dados` em 44 GB (96%), procurei o que liberar e achei o `uruguai-despovoado`: **31,8 GB**, com
`DESCARREGADO.md` **e** `ENTREGUE.md` na pasta. O stub diz, com todas as letras, que a VM *"produziu
e devolveu ao armazenamento final"* e que os GB *"foram liberados"*. Projeto entregue, marcado como
descarregado, ocupando 32 GB: parecia sobra óbvia.

**A simulação do rsync provou o contrário:**

    _media   ... local 78 arquivos · bucket 34  →  44 ausentes
    graphics ... local 90 arquivos · bucket 63  →  27 ausentes

**71 arquivos existiam SÓ no disco** — entre eles HTML de arte (ativo de LLM pago) e as conversões
30 fps de `_fps-original/`, que foram feitas **depois** da descarga. Apagar teria sido perda
definitiva, e o stub teria servido de justificativa.

**O stub não mentiu quando foi escrito; ele envelheceu.** A descarga rodou, subiu e limpou — e
depois a produção voltou a trabalhar na pasta: novo footage convertido, HTML regerado. Nada disso
reabriu a descarga, então o stub seguiu afirmando um estado que deixou de existir.

*Marca de estado escrita uma vez descreve um INSTANTE, não uma garantia contínua. Quando o processo
que a escreveu não é o único que mexe na pasta, ela vira uma afirmação sobre o passado com cara de
fato presente.*

⚠️ E o buraco tem um segundo andar: o `descarregar.mjs` **pula esse projeto** ("sem XML de 5
camadas", porque o XML foi promovido para `entregas/` e removido do local). Ou seja, ele não seria
descarregado de novo nunca — os 32 GB ficariam presos, com um stub dizendo que já tinham saído.

**A regra, e ela não tem exceção:** a prova de que se pode apagar é a **simulação devolver vazio
AGORA**, não um arquivo dizendo que um dia devolveu. Confira contra o bucket, no momento de apagar,
arquivo a arquivo. *A ordem é sagrada: sobe, verifica, apaga.*

O que foi feito: subi os 71 arquivos (`rsync` de saída, nada apagado), reconferi — as duas
simulações voltaram **zero** — e deixei a remoção dos 31,8 GB para decisão do Mateus, porque apagar
o que não fui eu que criei pede confirmação, mesmo com backup provado.

### SIS-167 · [renumerado de SIS-148 no merge de 08/ago]

`scripts/estudio/bancada-roteiro.sh` mapeava lente→agente com `declare -A LENTE_AGENTE=( [locucao]=... )`.
Na VM (bash 5.1) sempre funcionou. No **Mac o bash é o 3.2, de 2007**, onde `declare -A` não declara mapa
nenhum e `[locucao]=valor` é lido como índice **aritmético** de array comum: sob `set -u` a linha aborta
com `locucao: unbound variable`.

O resultado é a assinatura da família dos mortos-silenciosos: **as quatro lentes morreram antes de o
`claude` ser chamado uma única vez.** Zero laudos, log de uma linha, e nada no lugar onde alguém olha.
Foi encontrado ao rodar a bancada no Mac pela PRIMEIRA vez — o defeito existia desde que o script
nasceu, invisível porque a estação só rodava do lado do bash 5.

Conserto portável (POSIX, roda nos dois): função com `case`.
```sh
agente_da_lente() { case "$1" in locucao) echo "critico-de-locucao";; fatos) echo "verificador-de-fatos";; esac; }
```
Gate: `scripts/qc-portabilidade.mjs` passa a conhecer `declare -A` / `local -A` / `typeset -A`, com o
conserto ao lado. ⚠️ Um segundo padrão, para o USO (`${arr[chave]}`), foi escrito e **removido no mesmo
dia**: ele acusava `${TOKENS_CS[$CS_I]}` do `claude-stream.sh`, que é índice numérico por variável e é
correto — e nenhum regex sabe se a variável guarda número ou palavra. A declaração basta: sem
`declare -A` no repo não existe mapa para ler. *Alarme falso é bug de prioridade alta, e o dia de matá-lo
é o dia em que ele nasce.*

E a lição de método, que é maior que o bug: **o script tinha dois meses e nunca havia rodado no Mac.**
Ferramenta que só é exercitada de um lado da fronteira não está testada — está com o defeito adiado.

---

### SIS-171 · [renumerado de SIS-162 no merge de 08/ago]

O Mateus perguntou o que ninguém tinha perguntado: *"quando um arquivo novo é re-encodado, o
anterior é apagado? ou tá salvando tudo 100% e a remoção é feita só no final? pois deve ser feita
simultâneo, pra justamente ir liberando espaço, se não acumula muito mesmo"*.

**Estava salvando tudo.** O `tmp/` dos segmentos era limpo, mas o `source-sincronizada.mp4` — o
bruto re-encodado com câmera e microfone casados — **não tinha nenhum dono que o apagasse**.
Procurei remoção dele em todo o código: não existia. Ele nascia, gerava o master decupado, e ficava.

Medido na VM no mesmo dia: **106,8 GB parados em 7 arquivos**, num disco com 74 GB livres.

E isso explica um número que já estava documentado sem explicação: o despachante registra que a
decupagem tem **pico de ~1,8× o tamanho do bruto** (41 GB de origem + 34 GB do re-encodado). O que
faltava dizer é que **o pico nunca DESCE** — cada vídeo decupado deixava ~34 GB de resíduo
permanente. A conta de "quanto a fila ocupa" estava certa e ainda assim subestimava, porque só
contava o que entra.

**A régua:** todo artefato **derivável** (que se regenera do que já se tem) precisa ter escrito, no
próprio passo que o consome, **quem o apaga e quando**. Sem isso ele vira permanente por omissão —
ninguém decidiu guardá-lo, e ninguém decide apagá-lo.

A ordem é a de sempre, e não muda por ser resíduo: o intermediário só morre **depois** de o artefato
seguinte existir, ter duração medida e passar no gate de aritmética. E `.EM-USO.lock` é respeitado —
puxar o tapete de quem está lendo foi como o laço do bruto começou ([SIS-157]).

⚠️ **E a pergunta seguinte dele evitou um erro de 49 GB.** Eu havia classificado o
`source-sincronizada` do `orcas-nao-matam` como resíduo, porque o projeto estava em `finalizacao` e
não tinha `_master-decupado`. Ele perguntou: *"tem certeza que orcas-nao-matam foi re-decupado após
o Ceuta?"* — e os carimbos responderam: `_cortes.json` de **07/ago**, contra 06/ago do Ceuta, e o
`source-sincronizada` gerado **naquela madrugada, às 04:59**. Não era resíduo: era trabalho em
curso. *A ausência do artefato seguinte tanto pode significar "já terminou e foi limpo" quanto
"ainda não chegou lá" — e as duas leituras pedem ações opostas. Quando o estado é ambíguo, o carimbo
de tempo desempata; a estação na fila, não.*

---

### SIS-173 · O ponteiro que sobrevive ao alvo — instrução morta não é inerte, ela desvia (08/ago/2026)

Rodando o piloto `rosto-da-formiga` na VM de decupagem, o mux terminou bem e imprimiu, como sempre:

    PRÓXIMO PASSO — decupar (…, via ecossistema):
      scripts/decupar.sh rosto-da-formiga out/…/source-sincronizada.mp4

`scripts/decupar.sh` é uma **ponte para `~/www/_arquivo/repos-2026-07/top10-ecossistema/agentes/decupador`**. Conferido no
mesmo minuto, por `ls`, nos três lugares: **não existe na `estudio-top10`, não existe na
`estudio-decupagem`, e no Mac só sobrevive em `_arquivo/repos-2026-07/`** — foi arquivado. Quem
decupa hoje é o agente `.claude/agents/decupador.md`, e ele entrega mais do que a ponte entregava.

O alvo morreu; o ponteiro ficou, e ficou **no lugar de maior autoridade que existe** — a última linha
de um script que acabou de trabalhar direito. Quem obedecesse levaria `✗ ecossistema não encontrado`
depois de 40 min de I/O, e concluiria que a decupagem está quebrada. Não está: o mapa é que aponta
para uma cidade demolida.

**O erro de leitura que isso induz é o caro.** Um ponteiro morto não se anuncia como erro — ele se
anuncia como *instrução*. E instrução que falha no fim de um pipeline longo faz a pessoa suspeitar de
tudo que veio antes, que estava certo.

**A regra:** ao aposentar uma capacidade, o trabalho não acaba em arquivar o código — acaba em
**apagar todo ponteiro vivo para ela**. A busca é `grep -rn "<nome-do-arquivo>"`, e ela é obrigatória
no mesmo commit. O arquivo aposentado ganha um cabeçalho que diz o que o substituiu, e sai gritando
(`exit 64`) em vez de tentar rodar — se alguém chegar nele por um caminho que ninguém previu, a
mensagem tem de ser "fui substituído por X", não um erro de dependência.

*Irmã da [SIS-172]: lá o fato copiado à mão apodrece; aqui é o ponteiro. A mesma doença — referência
que não se atualiza sozinha — em duas formas.*

---

### SIS-174 · `command -v` prova o interpretador, nunca a biblioteca (08/ago/2026)

A `estudio-decupagem` foi provisionada com as cinco camadas conferidas uma a uma, e passou. Ao rodar
o primeiro `sync-dual-system.mjs` nela:

    ModuleNotFoundError: No module named 'numpy'

O `scripts/infra/provisionar-vm.sh` instalava `ffmpeg git jq bc` e conferia `node`, `ffmpeg`,
`gcloud` por `command -v`. **Nenhuma linha mencionava Python** — e o `_sync-corr.py`, que faz a
cross-correlação de envelope, precisa de numpy e scipy. Sem eles não há offset câmera×mic; sem
offset, o master sai com a fala dessincronizada, que é um defeito que **nenhum gate adiante pega**
(o arquivo tem duração certa e tamanho certo).

O Python estava lá — o Ubuntu traz. O `command -v python3` teria respondido "existe" e teria
mentido, porque a pergunta estava errada.

**A regra:** *a prova de uma biblioteca é IMPORTÁ-LA.* Achar o interpretador não é prova de nada.

    python3 -c "import numpy, scipy" || falha "…"     # a prova
    command -v python3                                 # não é prova

Vale além do Python: `node -e "require('x')"`, `ffmpeg -filters | grep vidstab`, `gcloud <verbo>
--help`. **Uma capacidade se prova exercendo-a**, e a checagem tem de morar no provisionador — não
na disciplina de quem for usar a máquina daqui a três semanas.

---

### SIS-177 · Não reimplemente o leitor de um formato que tem dono — o falso negativo cai sobre trabalho pago (08/ago/2026)

Escrevi `scripts/decupagem/decupar-agente.mjs` e, para saber se o agente tinha entregue, li o
artefato à mão:

    JSON.parse(readFileSync(CORTES))?.cortes?.length ?? 0

O `_cortes.json` real é um **ARRAY**, sem chave `cortes`. Medido no piloto `rosto-da-formiga`: o
agente rodou **983 s**, decidiu **50 entradas** com o motivo escrito uma a uma (*"Cabeça: 15,0 s de
silêncio inicial + falso início, que ele refaz a partir de 17,96; corte entra 0,16 s antes do 'Tem'
do take bom"*), gravou `_cortes.json` e `words-limpo.json` — e meu script anunciou
**"saiu VAZIO — o passo NÃO está feito"** e saiu 1.

**Onde isso dói é na retomada.** Um verificador que diz "não está feito" sobre trabalho que ESTÁ
feito manda refazer inferência paga. É o inverso exato do princípio da casa (*artefato pronto é ativo
pago*), e chega disfarçado de zelo — um gate a mais, que erra para o lado "seguro" e queima dinheiro.

`src/cortes.mjs` já exporta `lerCortes(proj)`, e ele é o dono do formato: sabe que o array pode vir
puro, separa os trechos `pb`, e continua certo quando o formato mudar. Trocado por ele, o mesmo
arquivo passou a reportar **48 cortes + 2 pb** — que é a leitura correta, e ainda explica a
diferença.

**A regra:** antes de escrever `JSON.parse` sobre um artefato do estúdio, **procure quem já o lê**
(`grep -rn "nome-do-arquivo" src/ scripts/lib/`). Se existe um leitor, use-o. Um parser duplicado não
é código a mais — é uma segunda definição do formato, e as duas divergem no dia em que a primeira
mudar. *Irmã da [SIS-172]: lá o fato copiado apodrece; aqui é a interpretação do fato.*

---

### SIS-180 · `head` sobre lista ORDENADA responde outra pergunta — e a resposta parece completa (08/ago/2026)

Errei a mesma coisa **três vezes numa madrugada**, e o erro nunca se anunciou:

| o que rodei | o que concluí | o que era verdade |
|---|---|---|
| `pgrep -af "claude -p" \| head -2` | *"não há agente de QC do Ceuta — status preso"* | havia: ARTE, **QC do Ceuta** e FINALIZAÇÃO |
| `systemctl --user list-timers \| head -8` | *"7 dos 9 timers instalados não estão ativos"* | os **nove** estavam ativos e recentes |
| `tail -22` da faxina | *"só 4 projetos passaram, mas a soma diz 225 GB — tem bug"* | havia mais ✓ acima do corte; a soma estava certa |

**O padrão é sempre o mesmo, e é traiçoeiro por um motivo específico:** `head`/`tail` sobre uma
saída **ordenada** (por próximo disparo, por PID, por nome) não devolve uma amostra — devolve uma
FATIA ENVIESADA, e ela chega com toda a aparência de lista completa. Um `head -8` de nove itens
esconde exatamente um, e nada na tela diz que falta um.

Nos três casos a conclusão errada era **acionável**: quase fui destravar um item que não estava
travado, quase reinstalei timers que já rodavam, e quase cacei um bug que não existia no meu próprio
script. Trabalho inventado é o produto típico deste erro.

**A regra:** quando a pergunta é sobre o CONJUNTO ("está tudo ativo?", "quantos há?", "existe algum
X?"), **nunca a responda com uma saída truncada**. Use `wc -l`, `grep -c`, `grep` do termo exato, ou
imprima tudo. `head`/`tail` servem para **espiar formato**, não para concluir sobre população.

E ao truncar por economia de contexto — que é legítimo —, o corte tem de ser por FILTRO, não por
posição: `| grep ceuta` responde a pergunta; `| head -2` responde a sorte da ordenação.

*Irmã da [SIS-156]* (*ausência de insumo não é aprovação*): aqui, **ausência na fatia não é ausência
no conjunto**.

### ⚠️ ESTA LEI FALHOU CINCO VEZES NO DIA EM QUE FOI ESCRITA — e isso diz o que falta nela

Casos, todos meus, todos em 08/ago: `pgrep | head -2` (concluí que o Ceuta não tinha agente) ·
`list-timers | head -8` (concluí que 7 de 9 timers estavam inativos) · `tail -22` da faxina (achei que
minha soma tinha bug) · `tail -8` num `wc` (perdi a saída que eu mesmo pedira) · e o pior,
**`tail -c 600` no log de cota**: o arquivo é ordenado por uso **crescente**, o fim tem as três contas
em 95–100%, e eu quase relatei "a esteira parou por falta de cota" — com **quatro contas livres** no
topo do mesmo arquivo.

**Por que a lei não pega:** ela descreve o perigo, e `head`/`tail` não são descuido — são **reflexo de
economia de contexto**, o hábito mais automático que existe ao ler saída longa. Uma regra que exige
lembrar no momento do reflexo perde para o reflexo. *(É a [SIS-192] aplicada a ela mesma: aviso sem
substituto pronto não pega.)*

**O antídoto é ter o comando CERTO à mão, não a proibição na cabeça.** Para cada pergunta, o que
responde sem truncar:

| a pergunta | o comando |
|---|---|
| "quantos há?" | `wc -l` · `grep -c` |
| "existe algum X?" | `grep -c "X"` · `grep -q` |
| "qual o pior/melhor?" | `sort -k<n> \| tail -1` — ordene VOCÊ, não confie na ordem do arquivo |
| "está tudo OK?" | `grep -v OK \| head` — filtre o esperado e veja o que sobra |
| "qual o estado de N itens?" | imprima os N; se não couber, **agregue** (`awk` contando por faixa) |

**A regra de bolso:** truncar por POSIÇÃO responde "o que está no começo/fim"; truncar por FILTRO
responde a sua pergunta. Se você não sabe a ordem do arquivo, `head`/`tail` devolvem uma amostra
escolhida por outra pessoa.

---

### SIS-182 · O gate que combate um defeito costuma conter esse mesmo defeito (08/ago/2026)

Renomeada a `estudio-mapas` para `estudio-render`, rodei os gates. Todos passaram — e o laudo do
`qc-doutrina-vm.mjs` trazia, no rodapé:

    232 docs varridos · máquinas vivas: estudio-top10, estudio-render

**Faltava a `estudio-decupagem`.** O motivo estava no próprio arquivo (`:64-70`):

    // ⚠️ RE-MEDIDO EM 05/ago/2026 — `gcloud compute instances list` devolve DUAS linhas…
    vivas: ["estudio-top10", "estudio-render"],

Uma lista **cravada à mão**, correta no dia em que foi escrita. A `estudio-decupagem` nasceu depois,
e por seis dias o gate **que existe justamente para pegar doutrina citando máquina errada** não sabia
que ela existia. Um documento que a prescrevesse não seria validado por ninguém.

**A ironia é o achado, e ela se repete:** o gate anti-nome-cravado tinha o nome cravado; a lei que
mandava *"contar contas configuradas, não contas assinadas"* ([SIS-104]) foi consertada por alguém
que **contou certo e cravou o número novo** ([SIS-172]); o `top10 doctor` hospeda 11 verificações e
era ele mesmo a órfã de maior alcance da casa.

Não é azar. É consequência de como um gate nasce: alguém mede a realidade **naquele dia**, escreve o
que viu, e o que viu vira constante. A ferramenta congela o instante em que foi criada — e quanto
melhor ela é no seu domínio, menos alguém desconfia dela.

**A regra, em duas partes:**
1. **Todo gate deve DERIVAR o inventário do mundo real, não declará-lo.** O `--medir` deste gate já
   chama o `gcloud`; o que apodreceu foi a lista offline do modo barato. Quando as duas existem, a
   declarada precisa de data e de um confronto — rodar `--medir` de vez em quando é o confronto.
2. **Ao auditar qualquer coisa, audite o auditor no mesmo gesto.** A pergunta é literal: *"este gate
   contém, ele mesmo, o defeito que ele procura?"* Ela custa um minuto e já pagou três vezes.

---

### SIS-190 · Quem delega um arquivo para de escrever nele — inclusive o orquestrador (08/ago/2026)

Despachei um agente para resolver IDs de lei duplicados, com o escopo escrito no briefing: *"só toque
em `seed/regras/*.md`"*. Quarenta minutos depois, atendendo ao alarme de destilação, **eu mesmo
editei `seed/regras/SIS.md`** para acrescentar uma lei nova.

Dei sorte: o agente usa `Edit` (cirúrgico, casa uma string e troca), então as dez leis que eu tinha
escrito no fim do arquivo sobreviveram — conferido, uma ocorrência cada. **Um `Write` teria apagado o
registro do dia inteiro**, e nenhum dos dois lados perceberia: ele reescreveria a partir do que leu, e
eu só descobriria relendo.

A regra de sobreposição de escopo já existe nesta casa (*"quando delegar em paralelo, garanta que os
escopos não se sobrepõem em ARQUIVO"*). O que ela não dizia — e é onde escorreguei — é que **o
orquestrador conta como um dos escritores.** É fácil lembrar de não pôr dois subagentes no mesmo
arquivo, e fácil esquecer que quem despacha também tem mãos. O alarme periódico de destilação até
ajuda a errar: ele chega pedindo para escrever lei, sem saber o que foi delegado desde o último
disparo.

**A regra:** ao delegar um arquivo, ele sai do SEU alcance até o agente voltar. Se aparecer algo
urgente para escrever nele, escreva **fora** (um rascunho no scratchpad) e mescle depois. Percebeu a
colisão em curso? **Avise o agente na hora** — mande usar `Edit`, reler antes de tocar, e dê um teste
concreto de que nada se perdeu.

*Corolário para quem escreve briefing:* dizer "só toque em X" é meia instrução. A outra metade é
"**e eu não vou tocar em X**" — dita para você mesmo.

⚠️ Esta lei ia ser a `SIS-183`. Enquanto ela esperava no rascunho, o agente renumerou sete leis para
`SIS-183…189` — e escrevê-la com o número planejado teria criado a **décima quinta duplicata**, no
mesmo arquivo que ele acabara de limpar. *Número de lei se confere na hora de escrever, nunca na hora
de planejar.*

---

### SIS-191 · A prova que falha PARA CIMA — quando "deu erro" e "está tudo certo" produzem o mesmo valor (08/ago/2026)

Escrevi uma faxina que apaga brutos de ~40 GB depois de provar que já estão no bucket. A prova era
uma linha, e ela parecia rigorosa:

    F=$(gcloud storage rsync -r --dry-run "$D" "$BKT/…" 2>&1 | grep -c 'Would copy')
    if [ "$F" != "0" ]; then … FICA; fi     # e senão, rm

**Reproduzido contra um bucket inexistente:** o `gcloud` imprime `ERROR: … 404`, o `2>&1` manda isso
para o mesmo cano, e `grep -c 'Would copy'` devolve **`0`** — o mesmo `0` de "está tudo sincronizado".
Token expirado, 5xx transitório, permissão negada ou uma mudança de wording do `gcloud` produziam
todos o mesmo veredito: **apague**.

Não era hipótese: o script já rodava sozinho a cada 30 min com `--aplicar`, e o `journalctl` do dia
mostra **130,9 GB apagados** sob essa prova. Nada se perdeu (o bucket estava íntegro), mas isso foi
sorte, não desenho. E o mesmo log expõe a segunda face: cinco projetos saíram como
`✓ … 0 GB · conferido no bucket` — **pasta local vazia também produz zero `Would copy`**.

**A doutrina desta casa diz "a prova é a simulação devolver VAZIO". O código implementava "não vi a
string"** — e isso é satisfeito por três coisas diferentes: ausência de trabalho a fazer (o caso
bom), ausência de arquivos, e **ausência de sucesso**.

**A regra, e ela vale para todo gate:** pergunte *"que valor esta verificação devolve quando o
comando FALHA?"* Se for igual ao valor de sucesso, a verificação está invertida — ela **autoriza** o
destrutivo justamente quando menos sabe. Três formas de errar assim:
- contar ocorrências de uma string de sucesso (ausência = erro **e** = tudo certo);
- ler o status de um **pipeline** (`cmd | grep` devolve o status do `grep`);
- `2>&1` misturando erro com saída antes de qualquer decisão.

**A forma correta separa o sucesso do conteúdo, e exige os dois:**

    if ! SAIDA=$(gcloud … --dry-run … 2>&1); then echo "▲ dry-run FALHOU — FICA"; continue; fi
    F=$(printf '%s' "$SAIDA" | grep -c 'Would copy'); [ "$F" = 0 ] || { echo "▲ pendente"; continue; }
    # e ainda uma terceira prova POSITIVA: o destino tem tantos objetos quanto o local?

*Uma prova negativa ("não vi problema") nunca deveria autorizar um `rm`. Só prova positiva ("vi o
arquivo lá, do tamanho certo") deveria.* Irmã da [SIS-156] (*ausência de insumo não é aprovação*),
levada ao caso em que a ausência é do próprio resultado da verificação.

⚠️ **Quem achou não fui eu — foi o subagente de autocrítica de contexto limpo**, no mesmo dia em que
escrevi o defeito. Eu tinha lido esse `grep -c` várias vezes achando-o rigoroso. É a justificativa
inteira daquele alarme de 3 em 3 horas: *quem escreveu o código é a pior pessoa para ver o que ele
deixou de perguntar.*

---

### SIS-192 · Aviso sem conserto ao lado não pega — provado contra mim mesmo em dois comandos (08/ago/2026)

Descobri que `pgrep -f <padrão>` **casa com o próprio comando que o executa** — um gate que pergunte
"ainda há processo rodando?" desse jeito nunca chega a zero e nunca destrava. Registrei a armadilha
no handoff, com o porquê bem escrito.

**No comando seguinte, caí nela.** Rodei `pgrep -f "master-decupado.mjs"` de dentro de um shell cuja
linha continha exatamente essa string, e a contagem veio inflada. Eu ia relatar seis decupagens onde
havia outra quantidade.

O que eu escrevi foi **o perigo, sem a saída**. Faltavam sete caracteres:

    pgrep -f "[m]aster-decupado.mjs"      # o processo tem `master`; a linha que busca tem `[m]aster`

*Um aviso obriga quem lê a inventar a solução no momento em que está ocupado com outra coisa — e
inventar é justamente o que ele não vai fazer.* Não é falta de atenção: é que a doutrina puramente
proibitiva transfere trabalho para o pior momento possível.

**A regra: toda regra que proíbe uma forma tem de PRESCREVER a que funciona, no mesmo parágrafo.**
Esta casa já provou isso duas vezes e não tinha escrito:
- o `scripts/qc-portabilidade.mjs` só virou confiável quando passou a entregar **a forma portável**
  junto de cada achado (`stat -f` ↔ `stat -c`) — laudo sem conserto ao lado era ruído;
- o `corrigir-source-bruta.mjs` imprimia "PRÓXIMO PASSO: `decupar.sh`" para um comando que não existe
  ([SIS-173]): ali o problema era o inverso — prescrição sem verificação —, e o resultado foi o mesmo
  tipo de dano.

**O teste antes de publicar qualquer aviso:** *"quem ler isto às três da manhã, com pressa, sabe o
que digitar?"* Se a resposta for "vai ter que pensar", o aviso está pela metade.

⚠️ **O que NÃO virou lei, e por quê:** também errei ao dizer *"registrei no handoff"* sobre algo que
não havia registrado. É grave — passaria como fato, e ninguém confere uma frase dessas. Mas a regra
que o cobre **já existe e é clara** (*"nunca afirme 'pronto' sem ter verificado"*, mais a skill
`verification-before-completion`). Lei nova ali seria a quarta redação do mesmo princípio, e
[SIS-172] ensina que repetir a regra não é o conserto — o conserto é o gate. Fica no `HANDOFF.md` §8
como erro medido, com a régua prática: **antes de dizer "registrei", `grep` o que você diz ter
escrito.**

---

### SIS-196 · Recusar o destrutivo não é decisão permanente — é decisão sobre o risco DAQUELE momento (08/ago/2026)

Recusei **duas vezes** limpar o `/tmp` da `estudio-top10` (5.481 arquivos, 93 GB): *"apagar em massa
saturado é como se perde algo em uso"*. Na terceira vez, **fiz** — e as duas decisões estavam certas,
porque o que mudou não foi minha disposição, foi o **risco do outro lado**:

| momento | o quadro | decisão |
|---|---|---|
| 12:0x e 15:2x | disco a 85%, nada rodando, sem urgência | **recusar** — risco só de um lado |
| 16:47 | **4 decupagens simultâneas** · 74 GB livres · cada projeto pode gerar 40 GB de segmentos | **fazer** |

Encode sem espaço morre deixando `.mp4` **sem `moov` atom** — perda de trabalho já medida nesta casa.
Às 16:47, *não* agir também era uma aposta destrutiva; só que silenciosa.

**A regra: ao recusar uma ação destrutiva, registre o RISCO que a justifica, não a ação.** Um "não
apague isso" sem o porquê vira dogma e é obedecido depois de o motivo ter evaporado. *"Não apague
enquanto o disco não for o gargalo"* é revisável; *"não apague"* não é.

**E o que tornou o "sim" seguro foi o RECORTE, não a coragem.** Não fiz "limpar o `/tmp`":
- **só arquivos**, nunca diretórios (mais arriscados, e não eram o volume);
- **só com `-mtime +7`** — nenhuma decupagem de hoje toca arquivo de uma semana atrás: a segurança é
  **por construção**, não por verificação;
- **prova antes e depois** (74 → 91 GB livres) e conferência de que as **4 pastas em uso ficaram
  intactas**;
- e depois: `grep` por `ENOENT` nos logs, achando 3 — **todos com carimbo anterior à limpeza**
  (03:47, 06:51, 08:31 contra 16:48). *Erro que já existia não vira dano meu por coincidência de
  horário; a defesa contra essa confusão é o carimbo.*

**A pergunta que substitui a coragem:** *"qual é o menor recorte desta ação que resolve o risco
imediato?"* Sobraram 16 GB de arquivos velhos e 1.047 diretórios sem tocar — de propósito. A faxina
completa continua na fila para quem tiver contexto limpo, e o conserto de raiz
(`systemd-tmpfiles-clean.timer`) segue sendo o certo, porque não depende de ninguém lembrar.

---

### SIS-198 · Conserto perdido não se procura pelo NOME, e commit perdido perde tudo o que continha (08/ago/2026)

Um `scp` do Mac para a VM sobrescreveu o commit `69a679c`. O handoff registrou a perda como *"o
`empurraGap`: uma função, duas chamadas"* e mandou a sessão seguinte mesclá-la de volta. As duas
metades dessa frase estavam erradas, e cada uma erra de um jeito diferente.

**A função já estava de volta — com outro nome.** Outra sessão reencontrou o mesmo defeito e
reimplementou o conserto do zero, batizando-o `materializarGap`. Corpo idêntico, mesmas duas
chamadas, até o mesmo comentário sobre o `return` da retomada. Meu `grep empurraGap` devolveu **0** e
eu relatei que faltava. *Buscar conserto pelo nome do símbolo é buscar pela etiqueta, não pela coisa:
o falso negativo devolve exatamente a resposta que faz alguém reimplementar o que já existe* — e
reimplementar é o caro, porque é inferência.

⚠️ Isto é o espelho de um erro que esta casa já conhecia pela outra face: a [SIS-175] e vizinhas
avisam que *"ninguém chama"* não prova que um script é órfão. Aqui, *"o nome não aparece"* não prova
que o conserto sumiu. **Os dois são a mesma falha de método — perguntar ao índice em vez de perguntar
ao mecanismo.** A busca certa é pelo comportamento: o `grep` da linha de código que faz o trabalho, do
sintoma no comentário, ou do teste que falharia.

**E o commit continha TRÊS consertos, não um.** Quem escreveu o handoff anotou o que lembrava. Os
outros dois seguiram perdidos por um dia inteiro, e o pior deles era mais grave que o gap:

| conserto | o que custa quando falta |
|---|---|
| `materializarGap` | gap fora do concat na retomada — **retrabalho** (o gate de aritmética pega) |
| `alinhaMic` | `-itsoffset` negativo aborta o mux — **a estação inteira para**, não há master |
| `MASTERDEC_TMP` | rascunho vai para `/` — trava por disco com 72 GB livres ao lado |

*Um commit é uma unidade de trabalho, não uma unidade de memória.* Quem o perde não perde o que
consegue descrever; perde o que ele **contém**. Recupere o objeto inteiro (`git show <sha>`) e
confira **hunk a hunk** contra o destino — a prosa do handoff é o índice, nunca o inventário.

**A raiz de as quatro cópias divergirem, e por que ninguém era "o atrasado".** Medido:

    Mac disco (= git HEAD)      831 linhas  dff73e13  materializarGap ✅  outros dois ❌
    estudio-top10 disco         841 linhas  3f18685b  MASTERDEC_TMP ✅ (redação PRÓPRIA, melhor)
    estudio-top10 git HEAD      593 linhas  270434a9  os três ✅, sem o quarto relógio
    estudio-decupagem disco     831 linhas  dff73e13  = Mac, byte a byte

`69a679c` nasceu de uma base **anterior** ao trabalho do quarto relógio. Então não havia um lado
adiantado e um atrasado: **cada lado tinha trabalho real que o outro não tinha**, e qualquer cópia
cega numa direção destruiria algo. O sha idêntico entre Mac e decupagem é a impressão digital do
`scp` — dois arquivos byte a byte iguais em máquinas que evoluíram separado não é coincidência, é
sobrescrita.

⚠️ **A `estudio-top10` reimplementou o `MASTERDEC_TMP` sozinha, melhor que o original** (apara barra
final). Ao reconciliar, o que volta nem sempre é a versão mais antiga: **compare as duas redações e
traga a melhor**, em vez de deixar a direção do transporte decidir o mérito.

**O gate:** `scripts/qc-codigo-vm.mjs`, que compara hash **nos dois sentidos** — *"o meu chegou?"* e
*"a VM tem algo que eu não tenho?"*. Foi o segundo que faltou. E a régua manual, enquanto se envia
qualquer arquivo para uma VM: **antes do `scp`, `diff` na direção contrária.** Se ele devolver alguma
linha exclusiva do destino que não seja exatamente a que você está substituindo, **pare** — você está
prestes a apagar trabalho que não é seu.
## SIS-199 · O gate mede a CAIXA; o espectador vê a TINTA (08/ago/2026)

`check-overlap` acusou **3 pares de colisão** no `galaxia-arco-flecha` e os **3 eram falsos**. Não eram
três defeitos: era **um só**, em três disfarces, e o arquivo já trazia duas correções da mesma família
(o acolchoamento de `line-height` no eixo vertical; o grifo inline multi-linha por `getClientRects`).
Faltavam as duas que aparecem no layout desta casa:

| disfarce | acusava | folga REAL entre as tintas |
|---|---|---|
| `s16` — bloco `width:3840px; text-align:center` × chip no canto | 69.555px² | **145px** |
| `s19` — rótulo largo × crédito de rodapé | 4.830px² | **774px** |
| `s60` — placa pendurada, `rotate(-13.2°)` | 521.430px² | **16px** |

**Bloco centralizado.** `<div style="width:3840px;text-align:center">` é o padrão de número-herói do
canal: a caixa ocupa a tela inteira e os glifos ficam nos 1.694px do meio. Qualquer rótulo no canto
cai *dentro* da caixa sem chegar perto da tinta. Mede-se `Range.getClientRects()` sobre o conteúdo —
que já vem quebrado por linha. **Exceção que não é detalhe:** quando o elemento *pinta a própria
caixa* (fundo, imagem, borda, sombra), a caixa **é** visível e continua valendo. A distinção é entre
"a caixa é só onde a tinta pode cair" e "a caixa É tinta".

**Superfície girada** — a mais convincente das três, porque a área acusada é enorme. A caixa alinhada
aos eixos de uma linha inclinada **circunscreve a diagonal**: no `s60`, "MONTA NA CABEÇA" tem 72px de
altura real e a caixa reportava **231px** (3,2×). Reconstruir o quadrilátero é aritmética fechada, não
heurística: `W = w·|cos| + h·|sin|` e `H = w·|sin| + h·|cos|` são duas equações com duas incógnitas, e
a rotação preserva o centro — os 4 cantos saem exatos. A interseção sai por Sutherland–Hodgman +
shoelace. Perto de 45° o sistema degenera (`det`→0) e o gate volta à caixa cheia: **prefere-se o
alarme falso à cegueira.**

⚠️ **O teste que vale não é "as 3 sumiram" — é "a régua ficou fiel".** Duas cenas sintéticas com a
mesma placa a −13,2°: margem `+12px` (a folga do `s60`) → **passa**; margem `−150px` (colisão de
verdade) → **acusa 33.438px²**. E o conserto do bloco centralizado *aumentou* a área do `s60` de
255.824 para 521.430px² antes do conserto da rotação — medir linha a linha em vez de bloco contra
bloco é mais fiel, não mais frouxo. Nenhuma das duas correções pode esconder colisão real por
construção: tinta é subconjunto da caixa, quad é subconjunto do AABB.

*Um gate que erra em massa não é um gate rigoroso — é um gate que ensina a estação a ignorá-lo* (a
FIN-132 pelo lado da arte; a FIN-127 mandava destruir 71 clipes pagos, esta mandava repintar 3 cenas
impecáveis).

## SIS-200 · Bloqueio declarado por engano custa mais caro que bloqueio real (08/ago/2026)

O `_brief-arte.mjs` entregou ao mapista um brief que dizia **"NENHUM arquivo com este prefixo existe
em `_media/`"** para uma cena com **193 MB de footage no disco desde 01/ago**. O texto dessa mensagem
não é informativo, é uma ORDEM: *"Pule a cena, faça as outras do lote e relate o bloqueio."*

A causa é uma grafia. O gerador só reconhecia mídia herdada citada como `out/<proj>/_media/x.mp4`, e
tanto o `conceito-visual` quanto o `espelho` escrevem a forma curta `_media/x.mp4`. Duas fontes
independentes citavam os arquivos — a âncora do diretor **e** o `needs.midia` do espelho, que o
gerador nem consultava — e nenhuma das duas casava com o regex.

O mapista só não pulou a `s62` porque foi conferir o disco por conta própria. **Um agente obediente
teria devolvido "BLOQUEADA"**, e a cena voltaria para a fila esperando uma pesquisa que já tinha sido
feita. Alcance medido depois do conserto: dos 52 briefs, **26 ganharam mídia** que não aparecia.

Regra geral: *bloqueio real espera a pesquisa; bloqueio falso manda embora uma cena que estava pronta
para desenhar.* Quando uma ferramenta afirma ausência, a existência no disco é o juiz — e ela precisa
aceitar todas as grafias com que a casa escreve o mesmo caminho.

### SIS-202 · Gate que acusa a maioria não é rigoroso — é cego, e ensina a ignorar a lista

Medido no `dentro-do-sol` (08/ago/2026), estação de regência: 154 cenas, 315 beats. O
`montar-regencia.mjs` acusou **172 beats** de "dispensa sem motivo" — mais da metade da partitura.
Lidos um a um, quase todos diziam exatamente o que a [PESQ-31] pede, em formulação que o regex não
conhecia: *"ninguém jamais fatiou uma estrela"*, *"jamais foi filmada"*, *"o plasma do núcleo não
tem foto"*, *"prótons não são filmáveis"*, *"literalmente não há o que filmar atrás dela"*.

A que mais custou é de uma letra: o padrão trazia `registrad` (o particípio) e **não casava com o
substantivo "registro"** — então *"o passeio aleatório do fóton não tem registro"*, que é o motivo
perfeito, entrava na lista dos reprovados. Idem `film[áa]vel` contra "filmáveis" no plural.

**O dano não é o falso positivo em si — é o que ele ensina.** Laudo que grita em tudo não separa
nada: o próximo leitor aprende a ignorar a lista inteira, e junto com o ruído ele descarta as
dispensas verdadeiras, que são o único motivo de o gate existir. É a mesma mecânica da [PESQ-52]
(pendência não conferida derruba a confiança nas pendências reais), agora do lado da ferramenta.

**As três correções, e por que cada uma é de doutrina e não de sintaxe:**

1. **Quem deve o motivo "isto não foi filmado" é o `desenho`** — ele ocupa o lugar de um registro.
   `grafico` e `tipografia` **não substituem prova**: o número e a palavra entram POR CIMA dela (o
   recurso "Califórnia", [ARTE-90]). Acusar todo gráfico afogava no ruído justamente o caso que a
   trava 3 da [PESQ-31] quer pescar.
2. **O defeito da lei não é o beat, é a CENA.** Nasce `cenas_sem_camada_real`: cada beat pode ter
   justificativa impecável e a soma ainda ser um vídeo sem mundo real — foi assim que o
   `paises-baixos-mar` saiu com 4,1%. Métrica de beat não enxerga defeito de soma.
3. **O reuso de palco desenhado é uma dispensa legítima que a lei não previu.** Quando a cena retoma
   um palco já justificado ("a cebola-mestra de s16", "o novelo de s82"), o motivo foi dado quando o
   palco nasceu. A forma honesta é citar a origem — *"o interior nunca foi filmado (palco de s16) —
   o retorno reusa a mesma cebola"* —, não repetir a justificativa nem omiti-la.

⚠️ **E a trava contra o conserto que vira afrouxamento:** depois de mexer num gate, teste-o **nos
dois sentidos**. Não basta ver o número cair; injete os rótulos que ele TEM de pegar (*"é
mecanismo"*, *"é comparação"*, *"a metáfora do capítulo pede desenho aqui"*, *"fica mais bonito
assim"*) e confirme que continuam acusados. Sem esse segundo teste, "consertar o gate" e "desligar o
gate" produzem exatamente o mesmo laudo verde — e só um deles é trabalho.

**Corrigido em** `scripts/montar-regencia.mjs` (commit 655ae68).

---

### SIS-203 · Classificador de gate tem de exigir a PROVA do PASS — silêncio não é aprovação (08/ago/2026)

Estação de arte do `galaxia-arco-flecha`. Rodei o `check-overlap` nas 51 cenas num laço e classifiquei
cada uma **pela saída**: se o texto não casasse `colis|✗|FAIL|REPROV`, gravava `ok`. Duas cenas
(`s71` e `s81`, as duas com foto pesada) estouraram o `timeout 120`, não imprimiram nada — e viraram
**`ok` sem nunca terem sido medidas**. Retestadas isoladas, passam de verdade; mas isso eu só soube
porque estranhei a linha fora do padrão. Se as duas tivessem uma colisão real, meu laudo teria dito
"51/51 limpas" com a mesma cara.

A máquina estava a **0% idle** (load 97 em 16 vCPUs, com os `ffmpeg` de `dias-mais-curtos` e
`orcas-nao-matam` rodando em paralelo na mesma VM). O timeout não foi azar: sob contenção ele é o
resultado *esperado* das cenas mais pesadas — ou seja, o classificador falha exatamente nas cenas que
mais precisam de medição.

**A regra:** classificador de gate case a **frase de aprovação** (`✓ SEM colisões`), nunca a ausência
de reprovação. E `timeout`/saída vazia é uma **terceira categoria — NÃO MEDIDO** —, que não empata com
PASS nem com FAIL: ela pede re-medição isolada, e tem de aparecer no rodapé do laudo.

O estúdio já tinha registrado essa mecânica no runner do `qc-carga` ("conta 'não medido' como aprovado
E carimba, o que bloqueia a re-medição"). Eu a reescrevi do zero num laço de 8 linhas, o que mostra que
ela não é um bug de um script: é o caminho por onde qualquer um passa quando escreve o classificador
pensando no caso feliz. Parente de [SIS-202]: lá o gate acusava demais, aqui absolve demais — os dois
destroem a confiança no laudo, e o que absolve é pior, porque não deixa rastro para ninguém estranhar.

**Contra-teste barato:** rode o classificador contra uma saída vazia. Se ele disser PASS, está errado.

---

### SIS-204 · "Todos os gates verdes" só vale para os gates que você RODOU — a lista está em `scripts/`, não na sua cabeça (08/ago/2026)

Fechei a estação de arte do `galaxia-arco-flecha` com nove gates medidos, 52/52 cenas, e escrevi
"todos os gates verdes". O laudo de um agente auxiliar chegou **depois** do meu fechamento e trouxe
quatro defeitos reais que nenhum dos nove enxergava:

- **`qc-footage-seekavel`** — 6 de 18 footages com B-frames, que **fazem o render travar** ([REND-47]).
  Cinco em uso, um deles na cena que eu tinha acabado de declarar aprovada com nove gates verdes.
- **`qc-atribuicao`** — 4 cenas usando mídia CC BY/CC BY-SA **sem crédito na tela**. Não é estética:
  a licença autoriza o uso *sob a condição* de creditar, então sem o crédito o uso não está licenciado.
- **`qc-repeticao`** — 11 mídias recorrentes sem gancho declarado, 4 em nível GRAVE.
- **`qc-procedencia`** — 37 arquivos sem prova de origem.

`ls scripts/qc-*.mjs` devolve **63 gates**. Eu tinha rodado nove — os que lembrava. A diferença entre
"a cena está certa" e "a cena vai renderizar" estava inteira nos outros 54: gate de cena mede o HTML,
e metade dos defeitos vivia no **codec do arquivo que o HTML aponta** ou na **licença da imagem**.

**A regra:** antes de declarar uma estação concluída, rode `ls scripts/qc-*.mjs`, leia a lista inteira e
decida explicitamente quais se aplicam — inclusive os que você nunca ouviu falar. O custo é um `ls` e
dois minutos de leitura. O custo de não fazer é a estação seguinte travar com a anterior carimbada
como pronta, que é o modo mais caro de errar porque ninguém volta a procurar ali.

Corolário: **um marcador de conclusão emitido cedo demais não se desfaz.** Se o laudo chegar depois,
reabra e diga em voz alta que reabriu — o registro do erro é o que impede a próxima sessão de confiar
no carimbo em vez do artefato. Parente de [SIS-203]: lá o classificador absolvia por silêncio, aqui
sou eu absolvendo por ignorância da lista.

---

### SIS-206 · O DOSSIÊ DETERMINÍSTICO É ONDE UM BUG DE CÓDIGO VIRA DECISÃO EDITORIAL — E ELE ERRA COMPLETO, NUNCA VAZIO (08/ago/2026, estação ARTE do `dentro-do-sol`)

O `_brief-arte.mjs` existe para que o editor-de-arte não reabra espelho, conceito e words: ele
recebe UM arquivo por cena e o dossiê diz, no topo, *"tudo já extraído: NÃO reabra"*. Essa
obediência é o ponto — e é por isso que **todo defeito do gerador chega ao agente com cara de
verdade conferida**. Antes de despachar as 121 cenas deste vídeo, cinco defeitos foram medidos no
mesmo arquivo. Nenhum quebrava; os cinco produziam dossiê completo e plausível.

**1 · O prefixo de DOIS dígitos, em vídeo de 154 cenas.** `s.id.slice(0, 3)` e o regex
`\bs(\d{2})\b` cravavam a numeração em duas casas. `slice(0,3)` de `"s141-terremoto"` é `"s14"`:
a cena do sismógrafo pedia a pasta da cena 14 e recebia — sob o título **"MÍDIA REAL NO DISCO"** —
gelo, geiser e globo de plasma, enquanto o `s141-sismografo-agulha.mp4`, 94 MB no disco desde a
pesquisa, não aparecia em lugar nenhum. Doze cenas do ato 4 assim. *A fronteira à direita tem de
ser `(?![0-9])`, não `\b`: entre `s14` e o `1` de `s141` não existe fronteira de palavra, e era
exatamente por isso que o prefixo curto casava dentro do id longo.* O sintoma não é a cena vazia —
é a cena **cheia da coisa errada**, que o agente obediente desenha.

**2 · A pasta no plural que a pesquisa grava no singular.** O acervo comum lia uma lista fixa
(`bandeiras`/`logos`/`geo`) e a pesquisa deste estúdio grava em **`logo/`**. Resultado: 32 logos
oficiais baixadas — NASA, ESA, DKIST, BNL, Super-Kamiokande, Nobel, NSF — saíam como *"acervo
comum: 0 arquivos"* em **todos** os 121 briefs. Logo oficial invisível é logo desenhada à mão
(o que a ARTE-45 proíbe) ou crédito omitido. **Quem decide se um arquivo é comum não é o nome da
pasta: é não ter dono.** Trocado por "todo arquivo de `_media/` sem cena dona" → 58 peças
apareceram, incluindo os retratos e os documentos.

**3 · Bloqueio declarado por AUSÊNCIA, não por NECESSIDADE.** O aviso *"pule a cena, faça as outras
do lote e relate o bloqueio"* disparava sempre que a busca por prefixo voltava vazia. Só que metade
de um vídeo de motion design é desenho, com a âncora do diretor dizendo literalmente **"construída"**
— não falta nada nelas. **58 de 121 briefs (48%) mandavam pular, e nenhuma das 58 estava bloqueada.**
O próprio arquivo já trazia a frase certa num comentário anterior, escrita para outro defeito:
*bloqueio declarado por engano é mais caro que bloqueio real — o real espera a pesquisa, o falso
manda embora uma cena que estava pronta para desenhar.* Quem decide é o MODO da cena mais a âncora,
nunca o resultado da busca.

**4 · Doutrina revogada ressuscitada pelo template.** O campo `corte:` imprimia, para toda cena fora
de hard cut: *"contínuo — pose-de-saída(anterior) = pose-de-entrada(sua)"*. Isso é a continuidade de
fronteira da ARTE-40(a), **aposentada em 22/jul** com medição (os dois morphs mais ambiciosos do
acervo deram os PIORES cortes: DIF 174,7 e 155,1 contra baseline aleatório de 30,7), porque o
editor-de-arte é invocado em sessão isolada e não tem como saber onde a vizinha terminou. O
`dourados/README.md` fecha com *"não os reintroduza sob outro nome"* — e o gerador os reintroduzia
sob o nome `corte`. **Revogar uma lei no documento não a revoga nos geradores que a citam de cor.**

**5 · O contrato de texto não chegava a quem escreve o texto.** O `textos-tela.json` do
`redator-de-tela` nasceu para matar o erro de CONJUNTO que nenhum QC de cena enxerga (no `ceuta`
o mesmo nome saiu em três grafias e a tela contradisse a voz num multiplicador). O dossiê da arte
não o lia: o editor-de-arte recebia metáfora e word-lock e escrevia o rótulo de cabeça — o processo
que o redator existe para substituir. Cada item traz o campo `cena`, então a injeção é
determinística; passou a entrar por cena, e **73 dos 121 briefs** carregam agora grafia fixada,
rótulo de dado com fonte, card de pessoa e a lista do que **não** vai para a tela. Sem isso, a s28
deste vídeo teria escrito na tela o `⅓ DA MASSA` que o redator proibiu por não sair de nenhum
modelo solar.

**A regra que vale além deste arquivo.** Quando uma ferramenta produz o ÚNICO insumo que um agente
vai ler, ela deixa de ser script e vira **fonte**: seu defeito não aparece como erro, aparece como
escolha. Antes de despachar um lote grande sobre um dossiê gerado, **leia dois ou três dossiês
inteiros como se você fosse o agente** e pergunte de cada seção *"isto está certo, ou só está
preenchido?"*. Os cinco defeitos acima custaram vinte minutos de leitura e teriam custado 121 cenas
de arte paga. É o mesmo princípio do [SIS-149] visto do outro lado: laudo sem conserto ao lado é
ruído; **dossiê sem conferência é ruído com autoridade.**

### SIS-207 · A heurística que filtra o ruído CEGA para a troca — pergunte se o DECLARADO é o lixo (08/ago/2026, estação DECUPAGEM do `polonia-imparavel`)

O `materializar-bruto.mjs` tem um gate que olha a mídia da pasta do Drive que a fila não declara, e
ele descarta vídeo órfão de propósito, com uma estatística boa atrás: *"vídeo solto ao lado do bruto
quase sempre é o master editado pela equipe"*. A primeira versão que não filtrava reprovou **15 de
26** projetos, e gate que reprova 15 de 26 é gate que alguém desliga. O filtro estava certo.

**O que ninguém perguntou foi a inversa.** E se o master editado for o **DECLARADO**, e o bruto for o
órfão? Aí a heurística olha o bruto de verdade e o joga fora como "provavelmente master editado",
enquanto carimba `completo: true` sobre um vídeo já montado. O gate não falhou por ser frouxo — ele
falhou **no sentido em que ninguém o apontou**.

Medido no `polonia-imparavel`: `drive.video` era `Top10 - Polonia v2.mp4` (11,30 GB · 1283,05 s ·
24/abr), com logo, lower-third "Antônio Bôco" e footage de cobertura na tela aos 5 s. O bruto estava
na MESMA pasta — `Cópia de POLÔNIA.mp4` (5,31 GB · 1607,13 s · 21/abr), apresentador sozinho em fundo
preto — e caiu em `midiaNaoDeclarada`. A estação foi despachada como "edição do ZERO" e o mux da
ETAPA 0 já rodava sobre o vídeo montado quando um frame o denunciou.

**O sinal não é o tamanho nem o nome.** O declarado era o dobro em bytes (re-exportado a 70 Mbps
contra 26). E o nome mente nos dois sentidos: `EL NINO FULL EDITED.mp4` é take de apresentador em
fundo preto, enquanto o `v2` do polonia é montagem completa. Quem denuncia é o **relógio do
gravador** — o `.wav` só existe em par com a gravação, então ele é a régua: o bruto dura quase o que
o mic dura (o gravador liga antes e desliga depois: segundos, não minutos), e o master editado dura
**~20% menos**, porque perdeu erros, retakes e silêncios. É a própria taxa de decupagem que trai o
arquivo.

**A reprovação exige DUAS coisas, e é a segunda que a torna precisa:** (1) o vídeo declarado está
muito atrás do `.wav`; **e** (2) existe um vídeo órfão na pasta que casa com o `.wav` melhor que o
declarado. Calibrado contra os 39 pares da fila: **6** têm o mic mais longo que o vídeo, mas só **4**
têm órfão que casa — `polonia-imparavel` (332,6 s de descompasso, órfão a 8,6 s do mic),
`el-nino-2026-abril` (365,5 s, órfão a **1 s**), `a-china-e-a-prova` (278,7 s) e
`compilado-se-o-homem-ja` (256,9 s). Os outros dois são bruto legítimo com o gravador ligado antes —
`especies-humanas` (150,9 s) e `ate-que-altura-construir` (88,2 s) —, e um piso por descompasso
sozinho os reprovaria à toa, repetindo o erro dos 15 de 26.

O veredito entra em `okTotal` (o que decide DECUPAR) e **não** em `ok` (o que decide COPIAR): mexer
no segundo faria a fila re-tentar para sempre a cópia de um bruto que já está no disco. Os dois
vereditos separados já existiam no arquivo por esse motivo — uma reprovação nova escolhe de qual
lado mora.

**A regra que vale além deste arquivo.** Todo gate que descarta uma classe de candidatos por uma
heurística ("X quase sempre é lixo") está tomando uma decisão sobre o que MERECE ser olhado, e essa
decisão tem um ponto cego exato: **o caso em que o lixo é o que você não filtrou.** Ao escrever
"quase sempre é", escreva junto o teste que distingue o "quase". Aqui ele custava um `ffprobe`.

---

### SIS-209 · Escrever o veredito no campo certo não é o mesmo que o campo ser LIDO — a [SIS-207] acertou a metade que ela mesma podia ver (08/ago/2026, estação DECUPAGEM do `polonia-imparavel`)

*(⚠️ Esta lei citava `[SIS-168]` até 08/ago/2026 à noite. Ela nasceu na `estudio-top10` como `SIS-170`
e apontava para o que **aquela máquina** chamava de `SIS-168` — hoje `SIS-207`, a heurística do
`materializar-bruto.mjs`, da mesma estação e do mesmo projeto. O `SIS-168` do main é sobre
`MAX_COPIAS` e estoque de disco: **assunto vizinho, o que tornava a citação plausível e errada** —
o pior tipo, porque link morto se percebe e link trocado não. Achado pela autocrítica de contexto
limpo; o merge que renumerou 18 leis declarou "referências cruzadas incluídas" e esta escapou.)*

A lei anterior fecha com uma frase que estava certa e era só metade do trabalho: *"o veredito entra em
`okTotal` (o que decide DECUPAR) e **não** em `ok` (o que decide COPIAR)"*. A separação dos dois
vereditos é boa e o autor escolheu o lado correto. **O que ninguém abriu foi quem decide decupar.**

O despachante decide, e ele perguntava `.ok`:

```js
if (drive?.video) { try { return brutoEstado(slug, drive).ok; } catch { … } }   // jaTemBruto
```

`.ok` é *"o que pedi chegou inteiro"*. **Um master editado chega inteiro.** Então o gate novo produzia
um laudo impecável que nada consultava: `jaTemBruto` devolvia true, `vaiBaixarBruto` virava false, o
`continue` não disparava, e a decupagem era despachada sobre o vídeo montado — o mesmo defeito que a
[SIS-207] tinha acabado de aprender a reconhecer, seguindo em produção intacto.

Medido na fila do mesmo dia, com o gate já commitado e ativo:

| projeto | tamanhos batem? | `parTrocado` | o que ia acontecer |
|---|---|---|---|
| `polonia-imparavel` | sim | sim | 2ª sessão de Opus despachada sobre o master editado |
| `el-nino-2026-abril` | sim | sim | `pendente`, esperando a vez de repetir |
| `a-china-e-a-prova` | não | sim | 10 GB do arquivo ERRADO puxados do Drive |
| `compilado-se-o-homem-ja` | não | sim | idem |

Os dois últimos mostram que não bastava trocar `.ok` por `.okTotal`: quando os tamanhos **não** batem,
`vaiBaixarBruto` já era true e a linha ia **copiar** o master editado. O laudo tem de ser consultado
nos dois pontos de gasto — o que copia e o que despacha —, e a resposta certa em ambos é **parar a
linha com o motivo escrito**, nunca escolher sozinho: o conserto é apontar `drive.video` para o bruto,
e o outro desfecho legítimo (*a equipe já editou este vídeo, não é caso de decupagem do zero*) é uma
decisão de produção.

**O efeito colateral que só aparece contando:** `estoqueBruto` também mede por `jaTemBruto`. Com o teto
em 2, o `el-nino` ocupava uma das vagas **como se fosse bruto pronto** — e o `polonia`, já corrigido,
não conseguia disparar a própria cópia. *Um registro errado não trava só o dono dele; trava quem está
atrás na fila, e esse segundo dano não tem sintoma nenhum apontando para a causa.*

**A regra que vale além deste arquivo.** Ao acrescentar um veredito a uma função que já devolve vários,
o trabalho não termina no `return`: **abra todos os chamadores e veja qual campo cada um lê.** Quem
consome um laudo escolheu o campo dele quando os outros ainda não existiam — e a escolha antiga
continua compilando, passando nos testes e mentindo em silêncio. Isto é irmão da regra de nunca
aposentar peça por "ninguém chama" sem abrir quem deveria chamar (CLAUDE.md): as duas dizem que
`grep` pelo NOME é barato e a suposição sobre a ligação é cara. Aqui foram 2 sessões de Opus e ~26 GB
de cópia evitados por um `grep brutoEstado` que custou um segundo.

---

### SIS-210 · Gate cego não acusa — ele ABSOLVE, e o verde dele é pior que gate nenhum (08/ago/2026)

O merge Mac×VM de hoje trouxe 23 leis com ID colidente. Um agente as renumerou e declarou **"zero
IDs duplicados"**, com o `regras-todas.mjs` confirmando: `✓ regenerado — ARTE=167 …`, sem uma queixa.

Duas colisões estavam vivas ali dentro: `ARTE-159` e `ARTE-160`, cada uma guardando uma lei
diferente de cada lado.

**O gate que devia pegá-las existe, está ligado, e é antigo.** A [SIS-62] o criou em 31/jul
justamente para isto, e ele roda em toda regeneração. Ele não falhou por estar desligado nem por
ter sido esquecido: falhou porque **contava com um regex que não enxergava metade dos cabeçalhos**.

    main            ### ARTE-159 · A declaração de composição nasce COM a cena
    estudio-top10   ## [ARTE-159] `line-height` menor que a métrica da fonte colide

O `rxLei` aceitava colchete só no ramo do **negrito**; no ramo do **cabeçalho**, depois de
`#{2,}\s+`, ele exigia a letra do domínio e encontrava `[`. As duas leis do estilo da VM eram
invisíveis — e o que é invisível para o contador é inexistente para o gate.

⚠️ **Aqui está o que faz disto uma lei, e não um bug:** um gate ausente deixa o buraco à vista, e
alguém eventualmente olha. Um gate cego **produz um verde** — e verde é resposta, não silêncio.
Ele encerra a investigação de quem ia conferir à mão. *A ausência de resultado a gente desconfia; o
resultado positivo a gente arquiva.*

**A régua, e ela é sobre gate que casa PADRÃO DE TEXTO:** todo gate desse tipo tem duas
perguntas, e quase sempre só a primeira é feita.

| pergunta | o que ela responde |
|---|---|
| "achei defeito?" | o que o gate reporta |
| **"quantos itens eu VI?"** | se o gate mediu alguma coisa |

Um gate que não declara o tamanho da amostra que examinou não pode ser distinguido de um gate que
não rodou. **Faça-o imprimir a contagem** — e desconfie quando ela não bater com o que você conta
por outro caminho. Foi assim que estas duas apareceram: `167` pelo gate, `169` por uma varredura
independente.

⚠️ **E ao mexer no padrão, meça os DOIS lados antes** — esta casa tem o registro de um "conserto"
de 05/ago no mesmo regex que inventou duas duplicatas, porque negrito recuado dentro de corpo de
lei é citação, não cabeçalho. Aqui: velho × novo nos 6 domínios, conjunto idêntico em SIS/FIN/PESQ/
REND/ROT, e em ARTE 167 → 169, com as duas novas conferidas uma a uma como cabeçalhos reais.
Zero falso positivo. *Alarme falso em gate é bug de prioridade alta: ensina a ignorar o gate, e aí
ele para de proteger justamente quando acerta.*

**Raiz consertada onde a definição mora** (`scripts/lib/leis.mjs`), não nos cinco lugares que
perguntam — o cabeçalho daquele arquivo já avisava que esta era a **quinta** sintaxe a derrubar o
contador, e que enquanto "o que é uma lei" morasse em vários arquivos, cada estilo novo derrubaria
todos, um de cada vez.

*Parente da [SIS-198]: lá, procurar conserto pelo NOME do símbolo escondeu que ele já existia; aqui,
procurar lei por UM estilo de cabeçalho escondeu que havia duas. Nos dois casos a busca respondeu
com confiança sobre um universo que ela não cobria.*

### SIS-211 · `git add` de arquivo nomeado não limita o commit — o commit leva o ÍNDICE INTEIRO (08/ago/2026)

A doutrina do núcleo manda **registrar seletivamente** em árvore compartilhada, e a forma óbvia de
obedecer é nomear os arquivos: `git add a b c && git commit`. **Isso não basta, e é uma armadilha de
ferramenta, não de disciplina.**

`git commit` sem caminhos publica **tudo que está no índice** — inclusive o que outra sessão, outro
agente ou um `git add` anterior deixou lá. Nomear arquivos no `add` diz o que ENTRA; não diz o que
**já estava dentro**.

Medido hoje, duas vezes na mesma sessão, e a segunda **uma hora depois de um agente me avisar da
primeira**:

| # | eu adicionei | o commit levou | o que foi varrido junto |
|---|---|---|---|
| 1 | `seed/regras/SIS.md` (meu texto) | o arquivo inteiro | a correção da [SIS-179] que outro agente escrevia no mesmo arquivo |
| 2 | 3 arquivos do doctor | **5 arquivos** | 2 scripts que outro agente deixara `staged` |

No caso 1 o arquivo era o mesmo, então nem `-o` teria salvado — ali a régua é outra (ver abaixo). O
caso 2 é o puro: `git status --short` mostrava `A  scripts/acervo/rastrear-exports.mjs` **antes** de
eu tocar em qualquer coisa, e eu não olhei.

**As duas réguas, e a segunda é a que funciona:**

1. `git commit -o <arquivos>` (`--only`) commita **apenas** os caminhos nomeados, ignorando o resto
   do índice. É a versão da intenção que a ferramenta de fato executa.
2. ⚠️ **Antes de todo commit, `git diff --cached --name-only` e LEIA a lista.** É a única que também
   pega o caso 1 — arquivo compartilhado onde o trabalho alheio está misturado ao seu, dentro do
   mesmo diff. Ali a saída não é o `-o`: é combinar (commitar os dois com crédito nos dois) ou
   esperar.

*Nesta casa há várias sessões e vários agentes na MESMA árvore o tempo todo. O índice não é seu — é
do diretório.* Tratá-lo como propriedade da sessão é o que produz commit com trabalho de terceiro
dentro, e a mensagem, que devia explicar o porquê, passa a mentir sobre metade do conteúdo.

E o sintoma nunca é um erro: o commit **funciona**. Só o `--stat` denuncia, e só se alguém contar os
arquivos — no caso 2, "5 files changed" onde eu esperava 3.

### SIS-213 · CONFLITO DE MERGE COMMITADO NÃO DÁ ERRO EM MARKDOWN — e é onde ele fica caro (08/ago/2026)

**De onde veio:** o commit `b4bd76a` registrou um `git stash pop` conflitado sem resolver — 35 blocos
`<<<<<<< Updated upstream` em 17 arquivos, empurrados ao remoto e puxados pela `estudio-top10`.

**Os dois destinos do mesmo defeito, no mesmo commit:**

| onde caiu | como se manifestou |
|---|---|
| 5 `.mjs` | `SyntaxError: Unexpected token '<<'` — **o motor 24/7 parou de existir**, gritando |
| 4 `seed/regras/*.md` + 6 agentes | **silêncio** — o agente lê `<<<<<<< Updated upstream` como se fosse doutrina |

O `despachante.mjs` só estava de pé porque subira minutos ANTES do commit chegar; um restart e a
esteira não voltava. *O lado que grita você conserta no mesmo dia. O lado mudo fica.*

**A regra.** Depois de qualquer merge, rebase ou `stash pop`, rode o caçador antes de commitar — ele
é de custo zero e não depende de a linguagem reclamar:

```bash
git grep -n -E '^(<<<<<<< |=======$|>>>>>>> )' -- .
```

**E resolver não é escolher um lado por hábito — depende da NATUREZA do conflito:**

- **CONCORRENTE** (duas versões do mesmo trecho, como nos `.mjs`): escolha um, e o critério é
  verificável — qual lado é mais novo, qual traz correção datada. Aqui descartar é o certo.
- **ADITIVO** (os dois lados trazem coisas DIFERENTES, como leis destiladas em paralelo): **os dois
  ficam.** Foram 437 linhas de doutrina em ARTE, FIN e PESQ que um "escolhe upstream" teria apagado
  sem deixar rastro. O preço de manter os dois é a colisão de ID, que se resolve renumerando ([SIS-62]).
- **EDITORIAL** (a diferença é de estilo, não de fato — "quinze quilômetros" × "15 quilômetros" num
  roteiro que vai ser lido em voz alta): **não é do agente.** Deixe marcado e pergunte.

**Antes de descartar qualquer lado, grave o lado descartado.** O histórico preserva (o commit do
conflito guarda os dois para sempre), mas quem for remesclar semanas depois não vai garimpar blob —
`arquivo-morto/<data>-conflito-<causa>/` com um `LEIA.md` custa segundos.

⚠️ **Conserto no disco de uma máquina tem prazo de validade.** Cinco arquivos foram consertados no
working tree e três seguiam quebrados NO COMMIT: o `git pull` seguinte desfaria tudo. A prova separa
as duas perguntas — `node --check <(git show HEAD:<arq>)` mede o commit, `node --check <arq>` mede o
disco. `grep` no working tree responde só metade.

---

### SIS-214 · DEDUP QUE CONTA PARES DEIXA A TERCEIRA DE PÉ (08/ago/2026)

**De onde veio:** ao renumerar os IDs colididos, `FIN-123` tinha **TRÊS** leis, não duas. Quem lê
"IDs repetidos" e pensa em pares renumera uma, vê o par desfeito e declara resolvido — com a colisão
ainda em pé, agora invisível porque o contador de duplicatas caiu.

**A regra:** toda deduplicação agrupa por chave e trata o GRUPO INTEIRO, nunca "o outro". Vale para
lei, arquivo por hash, cena por âncora, footage por conteúdo. A pergunta certa não é *"qual é o
duplicado?"* — é *"quantos existem com esta chave?"*.

**E o irmão disto, medido no mesmo dia:** a definição canônica de "o que é uma lei" (`rxLei`, em
`scripts/lib/leis.mjs`) só funciona sobre o TEXTO INTEIRO, em modo `m`, onde o `\s` da classe de
separadores casa a quebra de linha — é isso que faz `### PESQ-47`, cabeçalho que termina no ID, ser
encontrado. Quem quebra o texto em linhas antes de buscar perde a quebra e a lei some **em silêncio**.
Aconteceu comigo: dois alvos "não achados" e um casou a lei ERRADA, porque reimplementei o regex em
vez de chamar a biblioteca. Medido: acrescentar `|$` ao `rxLei` não muda nada no uso projetado —
**zero diferença em 770 leis nos seis domínios**. O defeito não estava na definição, estava na cópia.

**O conserto foi de raiz, não de sintoma:** `leis.mjs` passou a exportar `ehCabecalho(linha, dom, n)`
e `trocarId(linha, dom, de, para)`, para que o caso linha-a-linha tenha dono e ninguém precise
recriar o regex. *Definição canônica que só funciona do jeito certo de chamar precisa expor o jeito
certo de chamar.*

### SIS-215 · Temporário sem PREFIXO ESTÁVEL é lixo que nenhuma política consegue limpar (08/ago/2026)

O `/tmp` da `estudio-top10` chegou a **112 GB** e o disco `/` a **90%**. Medido no momento:
**290 MB/min** de crescimento, 39 processos de caça de stock ativos, e **~3 horas** até encher —
com a esteira 24/7 em cima.

O que enche não é lixo velho. Os 726 itens com mais de 10 dias somavam **1,9 GB**; o peso são
footages baixados **no mesmo dia**, sob nomes que cada sessão inventa: `loteB`, `cacaA`, `cacaB`,
`cacaC`, `cacaE`, `qcH2`, `qcLoteC`, `b4-stock`, `perfil-B-ss`…

**É por isso que a faxina automática recolheu 7 GB de 112.** Uma política de limpeza só sabe agir
sobre o que consegue NOMEAR — por idade, por padrão, por dono. Diante de `loteB`, ela não tem como
distinguir *footage pago que a arte ainda vai usar* de *sobra de diagnóstico*. Então ou apaga tudo
(e destrói download pago, num acervo com teto de 100/dia) ou não apaga nada. Escolheu não apagar,
que é o lado certo — e o disco encheu.

**A regra: todo artefato temporário nasce com prefixo que diz QUEM o criou e PARA QUE.**
`/tmp/stock-<slug>-<estação>/` é gerenciável: a política limpa por slug entregue, por estação
concluída, por idade dentro da estação. `/tmp/loteB/` não é gerenciável por ninguém, nem por quem
o criou uma hora depois.

*Nome inventado na hora é decisão adiada: transfere para o futuro o trabalho de descobrir se aquilo
pode sair.* E o futuro sempre decide errado, porque decide sem contexto.

### O paliativo que compra tempo sem destruir nada, e ele é reversível

Quando o disco aperta e apagar é arriscado, **mover não é apagar**:

    mv /tmp/<pasta> /dados/tmp/<pasta> && ln -s /dados/tmp/<pasta> /tmp/<pasta>

O symlink preserva qualquer referência por caminho absoluto — o consumidor não percebe. Aplicado
hoje ao `loteB` (15,3 GB) e ao `cacaC` (9,2 GB): `/` caiu de **90% para 85%**, 51 GB → 74 GB livres,
e `ls /tmp/loteB` continua respondendo.

⚠️ **Mova só o que NÃO está sendo escrito, e reconfira imediatamente antes** — o estado muda entre a
medição e a ação. O script que fez isso repete o `find -mmin -3` dentro do laço e pula a pasta se
ela voltou a receber escrita; as três ativas (`cacaB`, `cacaE`, `cacaA`) ficaram onde estavam.

⚠️ E `mv` entre sistemas de arquivos diferentes é **cópia seguida de remoção**: o espaço no destino
é consumido durante a cópia, e a origem só libera no fim. Para liberar `/`, o destino tem de ser
outro disco — foi o caso (`/` é `sda`, `/dados` é `sdb`). Mover dentro do mesmo disco não libera
nada.

---

## [SIS-217] · A lista de "o que ainda falta" de um laudo VENCE em minutos — re-meça o arquivo, não obedeça à lista

> 🔀 **Era `SIS-208` e virou `SIS-217` em 08/ago/2026.** Colidia com a SIS-208 do `find` da VM,
> que é a estabelecida (citada no CLAUDE.md). Doutrina: [SIS-62].

**Medido no `ceuta-travessia-em-massa`, QC de 08/ago/2026.** O laudo `RE2_L1_documento.json`, escrito às
**17:48**, listou como resíduo aberto: *"s144 — #ressalvaK (linha 96) continua 56px: é a SEGUNDA metade do
achado original e não foi feita"*. O arquivo foi corrigido às **17:50** — **dois minutos depois** — e hoje a
linha 96 diz `font-size:72px`.

Nada estava errado com o laudo: ele descrevia com precisão o estado das 17:48. O defeito é de **leitura
posterior**. Uma sessão que abre o laudo horas depois e trata a lista como fila de trabalho despacha um
`editor-de-arte` (inferência paga, na assinatura) para consertar o que já está consertado — e ainda escreve
no diário que "fechou o resíduo", contaminando o registro com um conserto que nunca aconteceu.

O mesmo laudo trazia a armadilha simétrica: `s76` e `s80` estavam marcadas **"seguram_render"** e não
apareciam em nenhum lote de conserto do diário. Parecia resíduo aberto; eram cenas consertadas às 18:05 e
18:08, minutos depois do laudo das 18:04, **sem deixar entrada de diário**. Nos dois sentidos a lista mente,
e mente pelo mesmo motivo: **ela é uma fotografia, e o arquivo continuou andando depois do clique.**

**A REGRA:** antes de despachar conserto vindo de um laudo, **abra o arquivo e meça o número que o laudo
citou.** É `grep` de uma linha; custa nada e é a única prova do estado de AGORA. A lista diz o que era
verdade quando foi escrita; só o arquivo diz o que é verdade quando você lê.

**O sinal barato que ordena a suspeita** — compare `mtime` do HTML com o `em` do laudo:
```bash
stat -c '%y' graphics/s144-euronews.html      # GNU (VM)   ·  BSD/Mac: stat -f '%Sm'
python3 -c "import json;print(json.load(open('_qc/visual/RE2_L1_documento.json'))['em'])"
```
`mtime > em` → **o laudo venceu naquele arquivo**: cada item dele é hipótese, não pendência. Vale
igualmente para o veredito ALEGRE ("pronta para render") e para o TRISTE ("segura render") — o arquivo pode
ter sido consertado *ou* quebrado depois da foto.

**É a mesma família do carimbo vencido do `_portao.json`** (medição válida, arquivo mais novo), com a
consequência invertida: o portão vencido **barra o que está bom** e a sessão vê trabalho onde não há; o
laudo vencido **manda consertar o que já está pronto** e a sessão gasta cota onde não precisa. Nos dois, o
árbitro é o mesmo — o estado do arquivo no disco, não o registro sobre ele.

⚠️ E o corolário para quem CONSERTA: **conserto sem entrada de diário reaparece como pendência.** As duas
cenas acima foram arrumadas certo e mesmo assim custaram uma investigação inteira à sessão seguinte, porque
o único lugar que sabia do conserto era o CSS. Fechou achado? Registre — o diário é mais barato que a
arqueologia.

### SIS-220 · GATE QUE REPROVA A RESPOSTA CERTA COBRA O RECURSO ESCASSO DUAS VEZES

> 🔀 **Era `SIS-216` e virou `SIS-220` em 09/ago/2026.** Colidia com a [SIS-216] da sonda de 1 token,
> que chegou primeiro (08/ago 23:30, `b705e84`, contra 09/ago 00:05, `0fc7ffc`) e é a citada em
> `desenhar-cenas.mjs`. Doutrina: [SIS-62].

*(medido 09/ago/2026, regência do `quao-fundo-terra`)*

O `montar-regencia.mjs` acusou **11 dispensas sem motivo**. Lidas uma a uma, **5 diziam literalmente
o motivo canônico** que o ofício exige — *"o interior do cano de retorno a quilômetros de
profundidade não tem câmera"*, *"processo sem câmera possível"*, *"não há nada a filmar num
esvaziamento"*. O `MOTIVO_OK` conhecia `nenhuma câmera`, `câmera nenhuma` e `não há câmera`, e **não**
`não tem câmera`, `sem câmera` nem `nada a filmar` — as três formulações mais naturais da mesma frase.

**Por que é pior do que um falso positivo comum.** A lista de reprovação de um gate é uma **ordem de
retrabalho**, e aqui o retrabalho é escrito por Fable, que é o recurso escasso desta casa. O gate
mandava a próxima sessão gastar o insumo mais caro reescrevendo texto que já estava certo — e, ao
chegar reescrito, o novo texto passaria, confirmando a falsa acusação. *Gate errado com conserto
obediente ao lado vira fato.*

O próprio arquivo já avisava, no comentário da ampliação anterior (08/ago, `dentro-do-sol`, quando
172 de 315 beats foram acusados): *"laudo que grita em tudo não separa nada, e o próximo leitor
aprende a ignorar a lista inteira — inclusive as dispensas verdadeiras que ela deveria pescar"*.
Duas ampliações pelo mesmo defeito, no mesmo regex, em dois dias.

**A regra, e ela vale para qualquer gate que julgue TEXTO por padrão:**

1. **Antes de despachar conserto por causa de um gate, leia os acusados.** Custa minutos e a
   alternativa custa cota. Se a maioria tem razão contra o gate, o defeito é do gate.
2. **Gate que exige uma FORMULAÇÃO precisa listar as formulações equivalentes, não uma amostra
   delas.** "Isto não foi filmado" tem dezenas de formas em português; enumerar meia dúzia e reprovar
   o resto não mede sinceridade, mede vocabulário.
3. **A pergunta que separa o caso legítimo do falso positivo é a do ofício, não a do regex:** o texto
   responde *"por que isto não existe em imagem"*, ou só rotula (*"é mecanismo"*)? `não tem câmera`
   responde. `número com endereço vertical` não responde — e essa continua reprovada, com razão.

Depois do conserto: 11 → **6**, e os 6 são reescrita de verdade. Relacionado: [ARTE-94], [PESQ-31].
## [SIS-219] · Gate que prova uma variante contra UM arquivo de fala reprova a variante verdadeira quando o projeto foi re-transcrito

**Medido em 09/ago/2026, `quao-fundo-terra@textos`.** O `redator-de-tela` entregou 54 verbetes, 59
rótulos e 24 recusas, e o gate reprovou uma linha só:

```
✗ 3 · "Evereste" está em variantes_ouvidas de "Monte Everest", mas NÃO existe em words.json
```

A variante existia. Está **2× no `words-final.json`** — que é o texto que a arte copia para a tela,
e é exatamente a ocorrência que o `_nomes-proprios.json` daquela mesma estação existe para
consertar. O gate provava contra **um** arquivo (`["words.json", …].find(existsSync)`, o primeiro
que existisse), e a doutrina escrita no cabeçalho dele defendia isso com um argumento correto: o
`corrigir-nomes.mjs` APAGA a variante do canônico, então cobrar no canônico passaria antes do
conserto e reprovaria depois.

**O argumento estava certo e a implementação errada, porque o pressuposto era mudo:** que o bruto e
o canônico venham da MESMA passada do transcritor. Em projeto re-transcrito não vêm. Aqui o
`words.json` (3.342 palavras, do bruto) grafou "Everest" e o `words-final.json` (2.644, retranscrição
do master decupado) grafou "Evereste" — **duas transcrições do mesmo vídeo, discordando em dois
nomes, e em direções opostas** (o `words-limpo` estava certo em Everest e errado em "Chikyū").

**A régua: o registro do ouvido é PLURAL, e a prova se faz contra o conjunto.** Bruto +
`words-parte1` (gravação em partes) + os `*.pre-nomes` — que são âncora estável, porque o
`corrigir-nomes` só grava o primeiro backup e nunca o sobrescreve. A variante vale se aparecer em
qualquer um; variante inventada não aparece em nenhum, que é o defeito que o item existe para pegar
(testado com uma variante fabricada: o gate ainda a pega). E quando ela só existe fora do bruto,
isso é **aviso, não falha** — não é defeito do texto de tela, é o sinal de que as transcrições do
projeto discordam entre si, que é uma informação que a próxima estação quer.

**A prova de que o conserto era necessário, e não preferência:** depois de rodar o
`corrigir-nomes --aplicar`, "Evereste" some do `words-final` e sobrevive só no `.pre-nomes`. Com a
régua antiga o gate falharia **mais ainda** ao fim da estação do que no meio dela — reprovando o
estado final correto que a própria estação produz.

⚠️ **O agente tinha diagnosticado tudo isso e escrito no arquivo** (`_divergencia_entre_os_arquivos_de_fala`),
com as contagens medidas. Sem esse campo, o caminho natural seria apagar a variante para calar o
gate — perdendo a única evidência de qual arquivo precisava de conserto. *Achado que o especialista
documenta contra o próprio gate vale mais que o veredito do gate; ler a defesa custa minutos, e
ignorá-la custa a inferência de refazer o que já estava certo.*

Mesma família da [SIS-220], dois dias antes, no `montar-regencia.mjs`: **gate que reprova a resposta
certa manda gastar inferência refazendo o que já estava certo.** Lá era um regex que não conhecia as
formulações equivalentes; aqui é um `find` que não conhecia os registros equivalentes.
Relacionado: [FIN-45], [SIS-220].

## [SIS-223] · Convenção de tempo que muda tem TRÊS consumidores — e o terceiro ficou mentindo em silêncio

Em 06/ago/2026 o espelho passou a nascer em tempo **FINAL** (escrito sobre `words-final.json`, onde os
cortes JÁ estão aplicados). Dois gates aprenderam a detectar o relógio antes de medir:
`qc-espelho-cortes.mjs`, que escreveu a detecção canônica (§RELOGIO), e `qc-tempo-apresentador.mjs`,
que a copiou — com o motivo escrito no próprio arquivo: *"dois gates que decidem o relógio por
critérios diferentes acabam discordando sobre o mesmo espelho, e aí não há como saber qual acreditar."*

O terceiro consumidor ficou para trás: o **`checar-plano.mjs`** — que é justamente o auto-QA que o
briefing do montador e a roupa da marca mandam rodar — seguiu descontando os cortes
incondicionalmente, aplicando o ripple duas vezes.

Medido em 09/ago/2026 no `itaipu-afogou`: eixo de **671 s que já era o montado**, menos 117 s de corte
descontados de novo → *"554 s montados"*, e o Bôco em **13,7%** contra os **12,36%** reais.

**O perigo não é o erro — é que os dois números passam na faixa 10–15%.** Um gate que erra dentro da
faixa não acusa nada; ele espera o dia em que empurra um espelho CORRETO para fora dela, e aí o
montador conserta o que não estava quebrado, tirando da tela um rosto que deveria estar lá. Encolher o
denominador **e** o numerador não se cancela: as janelas do apresentador não se distribuem como os
cortes se distribuem.

**A régua:** quando uma convenção de tempo muda, o conserto não é *consertar o gate que reclamou* — é
**varrer todos os consumidores da convenção**. E eles se acham pelo que IMPORTAM (`lerCortes` /
`src/cortes.mjs`), não pelo que falhou: o consumidor defeituoso é, por definição, o que está calado.

**E a detecção não se reescreve — copia-se.** Três gates com três critérios de relógio discordam sobre
o mesmo espelho.

*Consertado em 09/ago/2026*: `checar-plano.mjs` porta a detecção canônica. Conferido em 5 projetos —
os dois gates concordam em 5/5, e o `dentro-do-sol` (fluxo antigo) segue corretamente em BRUTO.

Relacionado: [SIS-100], [FIN-91].

## [SIS-224] · Medidor com duas fontes tem um BURACO onde as duas erram juntas — e o buraco é o único momento em que ele é lido

O `_cobertura-midia.json` (escrito pelo `despachante.mjs`) mede quantas cenas que PEDEM mídia já a
têm no disco. Ele nasceu casando o id da cena contra o caminho do arquivo, ganhou depois uma
**segunda fonte** — ler o HTML da cena, que aponta o `src` — e a segunda existe justamente porque
`_media/pessoa/`, `_media/logo/` e `_media/foto/<tema>/` são nomeadas **por entidade**, não por cena:
`pessoa-einstein-retrato-1947.jpg` serve toda cena que citar Einstein, e o id nunca vai estar ali.

**As duas erram no mesmo ponto, e é o ponto que importa.** A segunda fonte só responde **pós-arte**;
o medidor só é LIDO **pré-arte**, quando alguém decide se a caça de mídia precisa reabrir. Nessa
janela, mídia por entidade é invisível às duas.

Medido em 09/ago/2026 no `dentro-do-sol`: o laudo listava **12 cenas descobertas** (8 foto, 4
footage). Conferi arquivo a arquivo no disco — as **12 tinham a mídia lá**, com procedência escrita:
`pessoa-einstein-retrato-1947.jpg`, `pessoa-galileu-retrato-sustermans.jpg`,
`terra-nasa-blue-marble-2012-alpha.png`, `chumbo-metalico-nodulos-e-cubo-1cm3.jpg`,
`s60-adubo-fumegando-ALT-longo.mp4`. Zero pendentes de verdade. Um falso negativo de **100%**.

**Por que isto é caro:** pendência é ordem de compra ([PESQ-56]). Quem lê "12 descobertas" despacha
`pesquisa-*`, que hoje serializa numa **cota diária finita** de stock — recaçar 12 peças já pagas
gasta a cota que outro vídeo ia precisar, e o "ilimitado" do Shutterstock é falso desde 03/ago.

**A TERCEIRA fonte já existia e ninguém a consultava:** o **dossiê** `_brief-arte/<cena>.md`, que
varre o disco e associa por assunto/âncora — o casamento certo — e existe **antes** da arte. Era a
única das três que responde na janela em que a pergunta é feita.

**Duas armadilhas na leitura do dossiê, as duas medidas:**
1. **Ancore no CABEÇALHO (`^#+ MÍDIA REAL NO DISCO`), nunca na string solta.** O dossiê da `s141`
   *cita* "a seção MÍDIA REAL NO DISCO abaixo" dentro de um parágrafo de conserto, 5,2 kB antes da
   seção real — e entre os dois há um `<details>`. Casar a primeira ocorrência recortava um trecho
   vazio e devolvia "descoberta" com o `.mp4` no disco. Meu primeiro conserto tinha esse defeito e
   só apareceu porque re-medi cena a cena em vez de olhar o total.
2. **Pare no `<details>`.** O bloco recolhido é o *acervo comum do vídeo*, idêntico em toda cena;
   incluí-lo daria o falso positivo simétrico — **toda** cena "coberta", que é pior, porque cala.

Conferido nos 121 dossiês: 56 cobertos, e dos **65** que se declaram "Cena CONSTRUÍDA — não há mídia
dedicada", **zero** virou falso positivo.

**A régua:** medidor com N fontes se audita pela **interseção dos vazios**, não pela soma das
coberturas — pergunte *em que momento ele é lido* e *qual fonte responde nesse momento*. E laudo de
pendência nunca é motivo suficiente para despachar caça: confirme no disco primeiro ([PESQ-56], e a
mesma mecânica de [SIS-217] — a lista vence em minutos).

*Consertado em 09/ago/2026*: `despachante.mjs` ganha `refsDoDossie()` como terceira fonte em
`cobre()`. As 12 descobertas do `dentro-do-sol` passam a 0.

Relacionado: [PESQ-56], [SIS-217].

## [SIS-226] · Gate que grampeia o NOME do arquivo de tempo sobrevive à mudança de convenção reprovando o mundo — e o perigo não é o FAIL, é o `--corrigir` que ele oferece

*(medido 09/ago/2026, espelho do `rosto-da-formiga`; conserto aplicado, 18 projetos medidos antes × depois)*

O `qc-espelho-fala.mjs` lia `out/<proj>/words.json` numa linha grampeada (`:39`). Desde 06/ago o
espelho nasce em tempo **FINAL** — o relógio do `_master-decupado.mp4` —, e `words.json` é **BRUTO**.
Cruzar âncora de um relógio com fala do outro não levanta exceção: produz um laudo inteiro de
mentiras plausíveis. No `rosto-da-formiga` foram **104 de 140 cenas "fora de lugar"** num espelho que
`qc-espelho-cortes`, `checar-plano`, `qc-espelho-midia`, `qc-deserto-real` e `qc-tempo-apresentador`
aprovam — e o próprio laudo se denunciava, dizendo que a fala da última cena *"acontece em @1122,8s"*
**num vídeo que termina em 903 s**. Ninguém lê um número desses quando ele vem embaixo de 104 linhas
de `✗`.

**O estrago não é o FAIL — é o conserto que o gate sugere na última linha.** Ele oferecia
`--corrigir` (reescreve os `inSec` pela busca textual no relógio errado) e, nos onze projetos em que
detectava a diferença de eixo, **`--para-bruto`: converter o espelho de volta ao relógio que morreu
em 06/ago.** O gate não estava só cego; estava recrutando quem o lesse para desfazer o padrão
vigente. Um `--corrigir` obediente destrói o artefato mais caro da estação — e a sessão que o
rodasse teria toda a razão de confiar, porque foi o gate que mandou.

**Alcance medido (18 espelhos no disco):** 13 em relógio FINAL — todos julgados errado (2 com FAIL
em massa: `rosto-da-formiga` 104, `putin-fronteiras-otan` 126, `quasares-primordiais` 99; 11 com o
laudo de "duplo desconto" mandando `--para-bruto`, entre eles `ceuta-travessia-em-massa`,
`itaipu-afogou` e `aceleradores-particulas`, já adiantados na linha). Depois do conserto: **nenhum
projeto piorou**, os dois em relógio antigo (`dentro-do-sol`, `orcas-nao-matam` → `words-limpo`)
saem idênticos, e `planeta-em-meteorito` passou a acusar **4 cenas com desvio real de 3–4 s** — que
o gate cego não via, porque estava ocupado reclamando do eixo.

**Conserto:** o gate não escolhe mais o arquivo — pergunta ao DONO da regra,
`scripts/lib/words-do-espelho.mjs`, que decide **pela medida** (qual transcrição cabe na janela do
espelho), nunca pelo nome. Quando o relógio é FINAL, a lista de cortes fica **vazia** e `mapSec` vira
**identidade**: toda a maquinaria de "esta posição sobrevive ao ripple?" perde o sujeito, porque o
arquivo já está cortado e todo instante que existe no `words-final.json` é um instante que o
espectador vai ver. E os dois cabeçalhos passam a **dizer** de qual relógio o laudo fala.

**A régua:** ferramenta que lê tempo nomeia o arquivo **uma vez**, num módulo dono, e todo mundo
pergunta a ele. Quem grampeia o nome acerta enquanto a convenção não muda e mente **depois** que ela
muda — sem erro, sem exceção, sem sintoma. E gate que sugere conserto automático precisa provar o
próprio eixo **antes** de oferecer o botão: sugestão errada não é ruído, é uma ordem que alguém vai
cumprir.

Relacionado: [SIS-223] (a mesma convenção de tempo, o terceiro consumidor mentindo em silêncio),
[SIS-100] (`words.json` de um master que não existia mais), [SIS-227] (o gate irmão, que perdeu um
campo em vez do arquivo inteiro).

## [SIS-227] · Span com `manter:true` NÃO é corte — e o gate que relê o `_cortes.json` por conta própria perde o campo e desloca o mapa inteiro

*(medido 09/ago/2026, mesmo espelho; conserto aplicado e medido em 14 projetos)*

O `_cortes.json` tem spans que **ficam** no vídeo: o beat de bastidor que o decupador preservou (no
`rosto-da-formiga`, 4,12 s de riso-leve, em P&B por decisão da FIN-28). O `src/cortes.mjs` sempre
soube disso — `todos.filter((c) => !c.manter)`. Mas o `qc-espelho-cortes.mjs` **relia o arquivo por
conta própria** e, na releitura, não copiava o campo `manter`. Resultado: contava 4,12 s como
removidos, e todo o mapa BRUTO→FINAL saía adiantado **dali para a frente** — os vãos dos cards 3, 2
e 1 caíam ~3,8 s antes do lugar, e o gate dava 3 REPROVA de `gap-ocupado` num espelho cujos cards
estão em cima do silêncio real, dentro de 0,22–0,59 s.

**E o conserto que ele sugeria era pior que o defeito:** *"termine a cena antes do vão"* jogaria o
card **por cima de fala viva**.

A prova mais limpa é aritmética, e serve de conferência para qualquer projeto: o teto do master
decupado é `dur(bruto) − removido + Σ gapSec`. Honrando `manter`, dá **903,595 s** e o espelho de
902,667 s cabe com 0,93 s de folga; ignorando, dá 899,475 s e um espelho correto parece
**transbordar 3,2 s**.

**Conserto:** `src/cortes.mjs` passou a **exportar** o predicado que já era a fonte única
(`ePreservado`), e o gate importa em vez de reimplementar; span preservado conta como *keep* no
cálculo dos vãos, e as lentes `engolida`/`mutilada`/`atravessa` passaram a usar `cortesReais`.
Medido em 14 projetos, nenhum piorou (`rosto-da-formiga` 3→0, `putin-fronteiras-otan` 5→0,
`planeta-em-meteorito` 3→2, `orcas-nao-matam` 51→49).

**A régua:** quando um consumidor **relê** um artefato que já tem parser oficial, ele herda a
obrigação de honrar **todos** os campos — e a maneira barata de não esquecer nenhum é não reler:
importar o predicado do dono. Campo perdido numa releitura não vira erro; vira um deslocamento
constante que só aparece no fim do vídeo, onde ninguém confere.

Relacionado: [SIS-226] (o gate irmão, que perdeu o arquivo inteiro em vez de um campo), [FIN-28].
### SIS-228 · ⚠️ CORRIGIDA — o defeito não era o ENDEREÇO, era a AUSÊNCIA DE LEITOR (08→09/ago/2026)

> **Esta lei nasceu errada no objeto e o conserto que ela mandou fazer foi REVERTIDO.** Fica aqui
> porque o erro de método que ela cometeu é o mais caro do dia, e ele não é sobre buckets.

**O que eu observei, e era verdade:** a re-decupagem do Acre fechou às 21:33, o `ciclo-vm.sh` provou
`✓ conferido byte a byte` seis vezes, e a esteira seguiu duas horas trabalhando com o relógio velho
das 03:37. A pasta do projeto na `estudio-top10` estava vazia.

**O diagnóstico que eu dei, e estava ERRADO:** que `ENTREGA="$BKT/macbook-backup/out"` era o endereço
errado, e que a esteira lia de `out/`. Troquei para `$BKT/out` e destilei uma lei sobre "provar
integridade não é provar endereço".

**O que a auditoria mediu depois, lendo o código em vez do rótulo:**

- **Nenhum script lia nenhum dos dois prefixos** como fila de entrada. Não havia "o prefixo que a
  esteira lê" — eu inventei essa entidade a partir do nome da pasta.
- O **único consumidor executável** de `macbook-backup/out/` é `estudio/servidor.mjs:1661`, que baixa
  de lá quando o arquivo já saiu do disco — é o que faz a galeria servir projeto já limpo. Minha
  troca o **cegaria justamente para os slugs recém-decupados**.
- O material concorda: os 4 slugs que o lote fechou estão **100% em `macbook-backup/out/` e 0% em
  `out/`**.

**O defeito real:** ninguém **avisava a fila** de que o slug ficou pronto. Quem resolve é o marcador
`decupagem-concluida/<slug>.json` e o leitor `scripts/lib/decupagem-concluida.mjs` — que existe desde
09/ago. *Um endereço sem leitor não vira um endereço melhor mudando de nome; ele vira um endereço com
leitor quando alguém escreve o leitor.*

## A lei, e ela é sobre diagnóstico, não sobre storage

**Ao ver dado no lugar A e consumidor esperando em B, a pergunta NÃO é "qual endereço é o certo" —
é "quem lê cada um?".** Procure o MECANISMO (um `grep` pelo caminho literal, e abra cada acerto),
nunca a etiqueta. Nome de pasta descreve intenção de quem criou; só o código descreve o que acontece.

⚠️ **E o agravante que torna isto caro:** eu não só errei o diagnóstico — eu **destilei o erro em
lei** e mudei o código com base nele. Uma lei errada é pior que nenhuma: ela sobrevive à sessão,
convence quem não estava lá, e transforma um palpite numa regra que outra pessoa vai seguir. *Antes
de legislar sobre uma causa, prove a causa; observação correta com causa errada produz doutrina que
estraga o que estava certo.*

✅ **O que da lei original CONTINUA VÁLIDO:** a distinção entre integridade e endereço é real, e o
sintoma pelo qual isto se pega vale para sempre — **o consumidor não reclamou.** Não houve erro, fila
travada nem alarme: a esteira seguiu com o insumo velho, que existia e era válido. *Dado velho não
levanta exceção; ele produz uma entrega errada com ar de certa.*

✅ **O que sobreviveu do conserto:** a etapa **`3a`**, que preserva o relógio velho como
`*-pre-redecupagem.json` antes de sobrescrever. Sem ela, re-decupar um vídeo que já tem arte apaga o
**DE** de que o `remapeador-de-cenas` precisa, e 71 clipes 4K pagos deixam de ser reaproveitáveis.
Essa parte não dependia do diagnóstico errado — e foi ela que permitiu o remapeamento do Acre.

### SIS-229 · `entregas/` é uma FOTO do momento da entrega — não é a versão mais nova (08/ago/2026)

Ao remontar o `o-acre-o-estado-que-o` para o remapeamento, puxei a arte de
`entregas/2026/<slug>/graphics-fonte|graphics-4k` — o lugar curado, o que a doutrina chama de fonte
da verdade do que foi entregue. Estava tudo lá, 71 HTMLs e 71 clipes, íntegros. **E era a versão
errada**, por três horas:

| origem | HTMLs | clipes 4K |
|---|---|---|
| `entregas/…` | 71 · 01:43 | 71 · 01:27 |
| `out/…/graphics` | 2 · 03:37 | 1 · **03:43** ← a `s02` refeita, 10 s |
| `macbook-backup/…/graphics` | **71 · 03:46** ← tipografia [ARTE-153] | 71 · 01:07 |

As correções que o Fable fez de madrugada — os 71 HTMLs com a família Neue Haas restaurada e a `s02`
reconstruída em 10 s — vieram **depois** da entrega, e por isso não estão nela. A pasta curada
responde *"o que foi ao ar"*; ela não responde *"qual é a versão mais nova"*, e as duas perguntas
divergem no instante em que alguém corrige algo pós-entrega — que é justamente o que uma fila de
feedback faz o tempo todo.

**A régua: antes de remontar um projeto ENTREGUE, liste as três origens com data e escolha peça a
peça.** Não existe uma pasta que seja a mais nova para tudo: aqui o HTML mais recente e o clipe mais
recente estavam em lugares **diferentes**, e nenhum dos dois era `entregas/`.

⚠️ **E o corolário que sobrou medido:** com os HTMLs de 03:46 e os clipes de 01:07, **70 dos 71
clipes ficaram mais velhos que a própria fonte**. Clipe mais velho que o HTML não é ativo pago — é
engano pronto para entrar no vídeo, porque a retomada por existência o trataria como feito. A
comparação é `[ "$html" -nt "$clipe" ]`, custa um laço, e re-render é luz.

*Parente de `[[SIS-228]]` pelo outro lado — e as duas se pegam pelo mesmo sintoma: **nada deu erro**.
Lá a esteira seguiu com o relógio velho sem reclamar; aqui a remontagem pegou a arte da entrega sem
reclamar. Dado velho não levanta exceção. (⚠️ O diagnóstico original da SIS-228 — "endereço errado" —
foi refutado; o sintoma compartilhado é que continua valendo.)*

### SIS-230 · `grep -c` imprime o número E sai 1 — e um `|| echo 0` faz o `tail -1` ler a linha errada (09/ago/2026)

Armei um monitor para acompanhar o render do Acre. Três minutos depois ele anunciou:
**"render Acre TERMINOU — 0/71 clipes · 0 linha(s) de erro"**. O loop estava vivo (PID 3053), no
bloco 2 de 71, carimbando o portão normalmente.

A linha do defeito:

```bash
err=$(grep -ciE "erro|falhou" arquivo 2>/dev/null || echo 0)
echo "$n|$viv|$err"        # …e o chamador fazia `| tail -1`
```

**`grep -c` com zero ocorrências imprime `0` e sai com código 1.** O `|| echo 0` — que existia para
"garantir um valor" — não substitui nada: ele ACRESCENTA uma segunda linha. A saída vira duas linhas,
o `tail -1` pega a segunda (`0`), e `cut -d"|" -f2` de `0` devolve `0`. **O campo "processo vivo"
virou zero por posição, não por medição.**

**A régua: nunca pesque um campo por POSIÇÃO numa saída que você não controla inteira.** Marque a
linha e pesque pela marca:

```bash
printf "ACREST %s %s %s\n" "$n" "$viv" "$blo"     # produtor: linha identificada
... | grep "^ACREST" | head -1                     # consumidor: pesca pela marca
```

E, para o caso específico: `grep -c` **não** precisa de `|| echo 0` — ele já imprime `0`. O que se
quer é neutralizar o código de saída sob `set -e`, e isso é `|| true`, que não escreve nada.

⚠️ **Por que isto é da família mais cara:** a medição não silenciou — ela **respondeu com confiança
uma coisa que não mediu**. Um monitor mudo faz alguém ir olhar; um monitor que diz "terminou, 0
clipes" faz alguém desligar a máquina no meio do trabalho e refazer o lote inteiro. *Instrumento que
mente é pior que instrumento nenhum, e o custo dele é proporcional ao quanto se confia nele.*

Parente de [[SIS-228]] e [[mortos-silenciosos]] pelo sintoma, não pela causa: ali a esteira seguiu com
dado velho sem reclamar; aqui o monitor respondeu com confiança um campo que não mediu. Nos dois, nada
deu erro.

---

### SIS-232 · Override que ninguém definiu é dependência não declarada — e ela falha de verde (09/ago/2026)

Fui montar a fila na VM e ela recusou: *"✗ ZERO pautas… o rclone mount caiu?"*. O rclone **não**
tinha caído — estava vivo desde 26/jul, montado em `~/drive-top10`, com as quatro pastas do canal
listando normalmente. O que faltava era outra coisa.

`drive-paths.mjs` dizia, no cabeçalho: *"Override `TOP10_DRIVE_BASE` tem precedência absoluta (é o
que a VM usa: rclone em `~/drive-top10`)"*. **A variável não estava definida em lugar nenhum** —
nem no `.env` (`grep -c` → 0), nem na unit systemd, nem no `.profile`. A doutrina descrevia uma
configuração que ninguém tinha feito, e o código caía no último recurso: o caminho do **macOS**,
`~/Library/CloudStorage/…`, procurado num Ubuntu.

**O custo, e ele é o ponto:** o `scan-entregas.mjs` — o intake, quem transforma gravação entregue
pelo apresentador em item de fila — trata base ausente como *"rclone caiu, tento no próximo poll"*
e sai **0**. Então, de 5 em 5 minutos, o journal registrava

    ✗ mount do Drive indisponível (/home/<usuário>/Library/CloudStorage/…)
    systemd[923]: Finished Top10 scanner de entregas (Drive -> fila decupagem).

**A linha de falha e a linha de sucesso, uma embaixo da outra.** `systemctl list-timers` mostrava
verde, o serviço "concluía" pontualmente, e **nenhuma gravação nova entrava na fila**. Ninguém tinha
como saber sem abrir o journal e ler o corpo da mensagem.

**As duas réguas, e a segunda é a que quase escapou:**

1. **Descoberta ganha de configuração.** Um caminho que a máquina consegue *achar* funciona nas duas
   máquinas; um que depende de alguém exportar uma variável funciona até a próxima instalação. O
   conserto foi `descobrirMountRclone()` ao lado do `descobrirDriveBase()` que já existia para o
   Mac — e ele testa os dois arranjos (rclone monta a Unidade na raiz; o Drive Desktop monta um
   nível acima), decidindo por `existsSync` em vez de por suposição.
2. **`Type=oneshot` que sai 0 num caminho de falha é um serviço que MENTE por desenho.** "Tento no
   próximo poll" é razoável para uma indisponibilidade de segundos e desastroso para uma de horas,
   porque o retry sem contador nunca escala para alarme. Quem sai 0 depois de não fazer o trabalho
   precisa, no mínimo, contar as falhas consecutivas e mudar de tom — *tolerância a falha
   transitória, sem teto, é indistinguível de não verificar nada.*

⚠️ **Isto é a TERCEIRA aparição do mesmo padrão em 24 h**, e as três em código que nasceu numa
máquina e roda na outra: a [SIS-231] (o painel que chamava a VM de "Mac"), o `ENTREGA=` do
`ciclo-vm.sh`, e esta. O `qc-portabilidade.mjs` pega a armadilha de **shell**; nenhum gate pega a
armadilha de **caminho e de rótulo**. A pergunta que os três teriam falhado é sempre a mesma, e ela
é barata: ***"e se este arquivo rodar na outra máquina?"***

Parente de [[SIS-230]] e [[mortos-silenciosos]]: o instrumento respondeu com confiança sem ter
medido. Aqui, porém, quem respondeu foi o **systemd**, e é por isso que durou horas — a gente
confia mais no verde do orquestrador do que no texto do log.

---

### SIS-235 · Dedução que EXPLICA o sintoma não é diagnóstico — abra a tela

**09/ago/2026.** O `docs/OAUTH-YOUTUBE-PUBLICAR-APP.md` era um documento exemplar: tabela de prova
com dois tokens do mesmo `client_id`, citação da documentação do Google com data de consulta,
roteiro de execução com os valores preenchidos, e um levantamento honesto do que ele não sabia. A
conclusão dele — *"o app está em External + Testing, e por isso o refresh token morre em 7 dias"* —
estava **errada**, e o console levou 30 segundos para desmenti-la: o app já estava **"In production"**.

**Como o erro se formou, porque é sedutor e vai se repetir:** viu-se o sintoma (token de 7 dias),
procurou-se na documentação uma condição que produz *exatamente* esse sintoma (External + Testing),
e concluiu-se que a condição estava presente. Cada frase do documento era verdadeira isolada. O
conjunto afirmava um fato que **ninguém tinha olhado** — e o marcava como DEDUZIDO, o que dá a
sensação de rigor sem entregar a medição.

**A causa real era outra, e só apareceu ao abrir a tela ao lado:** em *Data Access*, as três tabelas
de escopo estavam **vazias**, enquanto o estúdio pedia quatro escopos **restritos** do YouTube em
runtime. App não verificado pedindo escopo restrito → prazo curto, tela de "app não verificado" e
teto de 100 usuários (que estava lá, em `4/100`, na mesma página que o documento citou sem abrir).

**A régua:** *quando a causa suposta é OBSERVÁVEL, a dedução não vale — abra a tela.* O custo de
olhar é um clique; o custo de não olhar foi um plano inteiro apontando para o botão errado, e o
botão nem existia. Vale para painel de nuvem, console de terceiro, status de serviço: qualquer fato
que uma tela mostre não se infere do sintoma.

**O corolário que salvou a produção:** o mesmo documento previu, com precisão, o risco da cura
alternativa (*"se a conta que administra o canal estiver fora da organização, o consentimento é
bloqueado, e você descobre isso só na hora de clicar"*). Medindo **antes** de clicar — o Studio
respondeu *"Ops, você não tem permissão"* para a conta owner do projeto —, descobriu-se que era
exatamente esse o caso. *Aviso escrito sobre um risco só protege se alguém medir o risco antes de
agir; senão ele vira epitáfio bem redigido.*

Parente de [[SIS-230]] e [[mortos-silenciosos]] — mas o mecanismo é o inverso: lá o instrumento
respondeu sem medir; aqui **ninguém perguntou ao instrumento**.

### SIS-234 · Quem reescreve o rótulo quebra todo detector que compara rótulo — procure a ENTIDADE (09/ago/2026)

O Mateus olhou a fila e perguntou: *"mas o mongolia é qual vídeo? Não é um vídeo JÁ publicado?!"*.
Era. E não estava sozinho: **4 das 38 linhas da fila eram vídeos no ar há meses** —
`mongolia-lugar-frio` (29/mai), `putin-fronteiras-otan` (16/mai), `polonia-imparavel` (24/abr) e
`pais-menor-duracao` (14/mar). O `mongolia` já queimara Scribe pago, um espelho de 120 segmentos e
uma direção de arte; o handoff ainda mandava **decupar** os dois de maio num segundo lote.

**Por que passaram.** O filtro `feito` (`montar-fila-real.mjs:300`) tem três pernas — código
`JUL_*`, slug registrado, similaridade de TÍTULO — e **as três comparam NOME**. A terceira falha por
desenho, não por calibração: **o packaging REESCREVE o título no upload.** O rótulo interno diz *"O
Lugar mais Frio do Mundo"*; o que foi ao ar diz *"Como as Pessoas Tomam Banho a −50 °C na Mongólia"*.
Similaridade medida entre os dois: **0,170** — para o mesmo vídeo.

**A régua que vale além deste caso:** *quando uma função a jusante reescreve o identificador, todo
detector a montante que compara identificador erra sistematicamente — e erra em silêncio, porque
"não achei" é indistinguível de "não existe".* Procure o que a reescrita **não** toca. Aqui é o
ASSUNTO, que sobrevive na descrição e nas tags; noutro sistema será o hash, o id imutável, a
duração. O que separou os quatro verdadeiros dos falsos foi ler o **tema do espelho contra a
descrição do vídeo** — mesma tese e mesmos elementos ⇒ duplicata; mesma geografia com pergunta
diferente ⇒ legítimo (foi assim que o `quao-fundo-terra`, sobre o poço de **Kola**, se separou do
publicado sobre o **Shendi TaKe 1** da China).

⚠️ **E o que quase virou o conserto errado: RARIDADE NÃO É PROXY DE ENTIDADE.** A tentação óbvia é
"palavra rara no acervo = nome que identifica". Medido nos 677 vídeos:

    mongolia 1 · kola 1 · itaipu 1 · marrocos 1 · arco 1 · duracao 1
    polonia  3 · trem  3 · baixo  3        ← mesma frequência, naturezas opostas

São descrições curtas: **em corpus pequeno, palavra comum aparece tão pouco quanto nome próprio.**
Nenhum ajuste de limiar conserta isso — mexer no número dá a impressão de progresso e não muda a
natureza do sinal. O que separa é a **maiúscula**, e ela estava sendo jogada fora na normalização.

⚠️ **O detector NÃO virou gate que reprova, e isso foi medido antes de escrever.** Plugado como
quarta perna do `feito`, ele removeria da fila o `ceuta-travessia-em-massa` — em `render/pendente`,
quase pronto — por dividir "europa" e "africa" com um vídeo sobre pontes. *Trocar 4 duplicatas por N
produções legítimas mortas em silêncio é piorar.* **Detector de precisão imperfeita informa; só
barra o que é determinístico.** O script (`qc-duplicata-canal.mjs`) levanta a shortlist de graça, o
`--ver <slug>` põe os dois textos lado a lado, e o julgamento fica com quem julga.

⚠️ **Detector de suspeita precisa de MEMÓRIA DO JULGADO.** O `tunel-trem-bala-japao` é falso
positivo estrutural (o Title Case da pasta faz "Túnel" e "Trem" parecerem nome próprio) e
reapareceria em ALTA para sempre. `--julgar <slug> legitimo "por quê"` grava em
`var/estado/duplicata-julgados.json` e ele sai da lista. *Alerta que a pessoa já sabe ser falso
ensina a ignorar o alerta — e aí ele para de proteger justamente quando acerta.*

Parente de [[SIS-156]] (ausência de insumo não é aprovação) e de [[mortos-silenciosos]]: aqui a
busca voltou vazia porque perguntava a coisa errada, e o vazio foi lido como "não existe".

---

### SIS-236 · Gate que reprova ≠ gate que falhou; e truncar em silêncio lê-se como cobertura

**09/ago/2026.** Uma varredura por "soluções escritas e nunca ligadas" achou, no próprio aparato de
verificação, **quatro alarmes falsos** — e alarme falso é bug de prioridade alta, porque ensina a
ignorar o laudo justamente quando ele acerta. Os quatro, com o conserto:

1. **O gate cobrando o que a lei revogou.** `qc-entrega-completa.mjs` reprovava por "composto
   ausente" desde 07/ago — o mesmo dia em que a [FIN-45] tornou o XML o entregável PT-BR. Medido
   antes de mexer: **44 entregas com achado, 28 com o composto como ÚNICA falta**, todas com XML,
   meta e clipes no lugar. O `CLAUDE.md` já registrava o defeito por escrito; o gate seguia igual.
   *Diagnóstico anotado não é conserto aplicado.* Composto virou ALERTA: 44 reprovas → **7**, e as
   7 são reais.
2. **O verificador acusando a si mesmo.** O `doctor` sai **1** quando a doutrina diverge do disco —
   é o veredito dele. O check de agendamentos lia esse 1 como "o serviço falhou" e reportava
   `com.top10.doctor` quebrado todo dia. Para um verificador, falha real é **2** (não consegui
   medir), nunca 1 (reprovei).
3. **A lápide estreita demais.** O check de `régua-morta` desarmava com `morreu` e o relato da
   [SIS-183] dizia *"tinha MORRIDO"*; desarmava com `entregue e limp` e o texto citava o stub
   `ENTREGUE.md`. Resultado: 2 dos 4 achados eram **a própria lei que ensina sobre régua morta**,
   punida por citar o caso que a fundou. *Gate que acusa quem documentou o defeito ensina a não
   documentar.*
4. **O truncamento mudo.** O `doctor` mostrava `.slice(0, 12)` dos achados de entrega **sem dizer
   que havia mais** — e havia 44. Quem lia via 12 e concluía 12. *Corte silencioso lê-se como
   cobertura completa*, o mesmo defeito do sharding que perdia cena sem avisar. O corte pode ficar;
   o silêncio, não.

**E o quinto, que é o inverso e mora na mesma família:** `qc-mapa-movimento.mjs` media tudo, imprimia
a curva e **saía 0 sempre** — um medidor se passando por gate. Ligá-lo daria um porteiro que aprova
todo mundo, *pior que porteiro nenhum, porque dá a sensação de proteção*. Ganhou os três estados, e
a guarda de entrada: sem argumento ele saía 1 por exceção ("reprovou"), quando o certo é 2
("não medi").

**A régua única:** todo verificador responde **três** coisas — `0` passou · `1` reprovou · `2` não
consegui medir —, e **anuncia o que deixou de fora**. Confundir 1 com 2 produz reprovação fantasma
numa direção e aprovação fantasma na outra; omitir o que foi truncado produz confiança sem lastro.

---

### SIS-233 · A nota do bloqueio é a única coisa que a pessoa lê — e ela vinha do wrapper (09/ago/2026)

O `ponte-mais-alta@decupagem` está parado desde **29/jul**. O vigia o anuncia de 5 em 5 minutos, e
o que ele anuncia é:

    MEDIO  bloqueado  ponte-mais-alta@decupagem bloqueado (1×) — PEDE PESSOA: Execution error

**O agente tinha feito tudo certo.** Declarou o bloqueio, escreveu o dossiê
(`_DECISAO-AUDIO-PARTE-II.md`), nomeou a escolha em prosa — *"Falta apenas a decisão A/B do
Mateus"*, com **(A)** re-gravar a Parte II ou **(B)** aceitar o scratch da câmera como áudio de
~45% do vídeo — e ainda matou a causa-raiz do loop de relançamento que o trazia de volta.

O que chegou ao dono foi `Execution error`.

**A causa é uma linha de filtro.** `ultimaLinhaDoAgente` remove o ruído conhecido do CLI e pega a
última linha restante. `Execution error` — a despedida do **wrapper**, não fala do agente — não
estava no `RUIDO_DO_CLI`, então era ela a última. O comentário logo acima da chamada já mandava o
contrário: *"quem lê o painel precisa dos que dizem O QUE FAZER"*. **A intenção estava escrita ali,
em cima da linha, e a implementação não a cumpria** — comentário correto não conserta chamada
errada, e revisão que lê o comentário e aprova a linha é revisão que leu a intenção, não o código.

⚠️ **Por que onze dias:** *um item que pede DECISÃO, rotulado como ERRO TÉCNICO, espera para
sempre.* Quem lê "Execution error" arquiva como bug de engenharia e segue — é trabalho de quem
conserta sistema. A decisão que só o dono pode tomar nunca é apresentada **como decisão**, então
ninguém a toma. Os dois lados acham que a bola é do outro, e o vídeo para. *Não foi a informação
que faltou: ela estava no log, no dossiê e na fila. Faltou o RÓTULO certo no único campo que alguém
ia ler.*

E o alarme repetindo idêntico 12×/hora por 19 h não corrige isso — **piora**: repetição sem
mudança de conteúdo é a forma mais rápida de ensinar alguém a filtrar o alarme. Um bloqueio humano
que envelhece devia ESCALAR de tom (dias parados, custo acumulado), não repetir a mesma linha.
*Isto fica NOMEADO, não consertado: medir o envelhecimento é conserto de outro tamanho.*

**Consertos aplicados** (`estudio/despachante.mjs`): `Execution error` entrou no `RUIDO_DO_CLI`; e
a nota passou a sair de `motivoParaPessoa`, que procura de trás para frente a linha em que o agente
NOMEIA o que falta, caindo na última só quando não há declaração legível. O catálogo `travaHumana`
da [SIS-165] já sabia reconhecer essa declaração — ele só nunca tinha sido usado para **escolher o
que dizer**, apenas para classificar.

Parente de [[SIS-230]] e [[SIS-232]]: nos três, o instrumento falou com confiança e disse a coisa
errada. A diferença é que aqui o destinatário era uma **pessoa**, e o custo virou tempo de calendário
em vez de tempo de máquina.

---

### SIS-237 · Registro seletivo protege o commit dos OUTROS de você — não o seu trabalho deles

**09/ago/2026.** A doutrina manda *"em árvore compartilhada, registre seletivamente"*, e eu registrei:
`git add` de doze arquivos nomeados um a um, nada de `-A`. Entre o `add` e o `commit`, **outra sessão
commitou** — e levou os meus doze junto. O meu `git commit` seguinte respondeu *"no changes added to
commit"*, e os consertos foram parar em dois commits alheios (`b60cd0b`, `6cb51ec`) cujas mensagens
não explicam nada do que eles fazem.

**O mecanismo, que ninguém tinha escrito:** o **índice do git é único por repositório, não por
sessão**. Duas sessões na mesma pasta compartilham o mesmo stage — então `git add` de uma é visível
para o `git commit` da outra, mesmo que ambas estejam sendo cuidadosas. *Registro seletivo é uma
regra sobre o que VOCÊ varre para dentro do seu commit; ela não tem nada a dizer sobre o que varrem
de você.* As duas metades do problema parecem uma só e têm remédios diferentes.

**O remédio já existe e a justificativa dele estava pela metade.** O núcleo diz *"sessões paralelas
na mesma pasta exigem árvore de trabalho própria"* — e justifica pelo **ramo** (*"trocar de ramo muda
o estado para todas as sessões"*). Esse é o primeiro motivo. O segundo, medido aqui, é o **índice**:
mesmo sem ninguém trocar de ramo, o stage é comum. Uma `git worktree` tem índice próprio; é isso que
torna o trabalho paralelo seguro, não a disciplina de quem digita o `add`.

**O dano não é perda — é rastreabilidade.** O código sobreviveu inteiro (conferido com
`git show HEAD:<arquivo> | grep`). O que se perdeu foi o *porquê*: dez consertos de gate, cada um com
sua medição, entraram no histórico sob mensagens sobre outros assuntos. *O diff guarda o quê; só a
mensagem guarda a razão, e ela é a única coisa que não se recupera lendo o repositório.*

⚠️ **E cuidado com o falso alívio:** ao conferir se o trabalho sobreviveu, meu primeiro `grep` no
`HEAD` acusou um arquivo como não-commitado — era a **caixa alta** do padrão (`MEDIDOR` × `medidor`).
Verificação de sobrevivência que erra para o lado do pânico faz reescrever o que já estava salvo;
para o lado do alívio, faz perder. Case sem depender de caixa (`grep -i`) quando o alvo é prosa.

---

### SIS-238 · Consertar não é entregar: pergunte ao PROCESSO onde o código roda

**09/ago/2026.** Consertei cinco gates no Mac, verifiquei cada um rodando, e reportei a sessão como
entregue. Na máquina que executa a produção 24/7, **nada tinha mudado** — e o gate que eu acabara de
calibrar seguia reprovando 44 entregas corretas lá.

**O erro não foi técnico, foi de fronteira.** `node --check` passou, o gate rodou, o número caiu de
44 para 7 — tudo verdade, tudo no Mac. *Verificar onde o conserto foi ESCRITO não é verificar onde
ele precisa RODAR.* A pergunta que faltou é de uma linha: **"a máquina que executa isso tem esta
versão?"**

E há uma armadilha dentro da armadilha, que só apareceu ao ir medir:

**A VM tem DOIS checkouts, e o de nome óbvio é o errado.**

| caminho | scripts | gates `qc-*` | é o que roda? |
|---|---|---|---|
| `~/estudio` | 71 | **1** | ❌ checkout velho |
| `~/top10-estudio` | 195 | **69** | ✅ **sim** |

Medi no primeiro e quase reportei *"a produção tem 1 gate de 65"* — um alarme que teria mandado a
próxima sessão copiar 64 arquivos para o lugar errado. O número real é 69 de 69.

> **A prova de qual diretório vale é o PROCESSO, nunca o nome:**
> `readlink /proc/$(pgrep -f despachante.mjs | head -1)/cwd`
> O painel diz o que alguém pretendeu; o processo diz o que acontece.

**O agravante, e é o que torna esta lei necessária:** a conclusão que tirei da medição errada
(*"os consertos não estão na produção"*) **estava certa**. Acertei pelo motivo errado. Isso é pior
que errar, porque não deixa rastro: um acerto acidental confirma o método defeituoso e o método
volta a ser usado, na próxima vez sem sorte.

**O que fica, em três linhas:**
1. Conserto só está entregue quando a **máquina que executa** o tem — e nesta casa o caminho é
   `commit → push → o sincronizador da VM puxa (≤20 min)`, nunca `commit` sozinho.
2. Antes de medir qualquer coisa numa máquina remota, **descubra o cwd do processo** que você quer
   julgar. Nome de pasta é palpite.
3. Quando um número sair absurdo (1 de 65), **desconfie do instrumento antes da realidade** — foi só
   o absurdo que me fez olhar de novo, e um erro menos gritante teria passado inteiro.

Parente de [[SIS-235]] (dedução que explica o sintoma não é diagnóstico) e de [[estado-duplicado-mac-vm]]:
as três são a mesma família — **o lado que decide é sempre o que executa**, e ele quase nunca é o
que está aberto na sua frente.

### SIS-242 · Laudo de aprovação tem data de validade — o veredito é sobre um CONTEÚDO, não sobre um nome de arquivo

**09/ago/2026.** A fila do `ceuta` estava armada para renderizar **124 cenas aprovadas**, e tudo
indicava que era o lote mais seguro da casa: os nomes batiam, a contagem batia (124 HTMLs no disco,
124 no laudo), e o `_portao.json` dizia *"124 de 124, zero barradas"*. Antes de gastar máquina, a
conferência hash a hash: **90 das 124 divergiam.**

| | arte no disco da render | arte que o portão aprovou |
|---|---|---|
| origem | espelho `macbook-backup` | `estudio-top10`, onde a esteira roda |
| carimbo | 08/ago **04:47** | 08/ago **22:59** (laudo às 23:20) |
| `s01-foto-invasao` | `680ae0276271` | `459b8aaa9e28` |

**Dezoito horas de correções seriam descartadas em silêncio**, e o vídeo sairia inteiro na versão
anterior — sem erro, sem aviso, com todos os gates verdes. Não é hipótese: o mesmo defeito já tinha
mordido o `o-acre`, ali descoberto *depois* — 71 clipes, laudo afirmando "71 de 71, zero barradas",
e **22 HTMLs reescritos** entre a medição e a leitura, sem que ninguém revogasse o carimbo.

**O princípio:** um laudo é veredito sobre um **conteúdo específico**. No instante em que o conteúdo
muda, o veredito caduca — mas o arquivo do laudo continua ali, com o mesmo nome, a mesma contagem e
a mesma aparência de validade. *Laudo sem hash conferido no ato da leitura é carimbo de aprovação com
data de validade que ninguém olha* — e ele é pior que laudo nenhum, porque a ausência ao menos não
mente.

**Por hash, nunca por carimbo de tempo.** No bucket a data do objeto é a hora do **upload**, não a da
criação. Medido no `o-acre`: a data acusou **11** cenas mudadas e o hash acusou **22**. A medição por
carimbo **subestima**, e nesta direção subestimar é deixar defeito passar.

**O gate:** `scripts/qc-laudo-vs-arte.mjs` classifica cada cena em **coberto** (hash bate),
**vencido** (mudou depois de medida — o estado perigoso, porque parece aprovado), **sem-laudo** e
**órfão**. Pendurado no `entregar.mjs` (§2d), no último ponto em que o erro ainda é reversível de
graça. A válvula `--sem-laudo-arte` não perdoa o defeito: grava as cenas vencidas no `ENTREGA.json`,
para que a correção tenha lista em vez de virar arqueologia.

⚠️ **A causa de fundo é estado duplicado, e ela sobrevive ao gate:** a esteira produz arte na
`estudio-top10` e **não a sincroniza com o bucket**, que a doutrina declara fonte primária. Enquanto
a arte viva morar só numa máquina, toda outra máquina que baixar insumo baixa uma versão antiga. O
gate transforma o erro silencioso em recusa barulhenta — **não elimina a divergência**. Ver
[[SIS-228]] e a memória `estado-duplicado-mac-vm`.

⚠️ **Contagem igual é o disfarce.** Foi o que fez o caso parecer seguro nas duas vezes: "124 de 124",
"71 de 71". *Quando o defeito é de VERSÃO e não de quantidade, todo agregado aprova* — e a prova só
existe arquivo a arquivo. É a mesma família de [[SIS-101]] (verificação por agregado não é
verificação).
---

### SIS-244 · Gate que não conseguiu medir tem de sair 2 — porque "0 defeitos de 1 candidato" se lê igualzinho a lote aprovado

**09/ago/2026, `quao-fundo-terra@arte`.** Rodei `node scripts/_audit-til.mjs out/<proj>/graphics/`
para auditar as 13 cenas prontas e li:

```
== 0 arquivo(s) com caixa alta acentuada defeituosa, de 1 candidatos ==
```

O `0 arquivo(s) defeituoso(s)` é a frase de um lote limpo. Só o `de 1 candidatos` denunciava que o
gate tinha olhado **o diretório**, e nenhuma das 13 cenas. Com o glob explícito (`graphics/*.html`)
apareceram os 13 candidatos de verdade.

Este arquivo já carregava DUAS correções do mesmo defeito, ambas narradas no próprio cabeçalho:
em 22/jul, `_audit-til.mjs cena.html` caía no `readFileSync(0)` sem stdin, auditava zero e imprimia
sucesso; no mesmo dia, descobriu-se que o script **não tinha `process.exit` nenhum** e nunca havia
reprovado nada, sendo citado como gate em seis documentos. O diretório era a terceira encarnação —
e no teste do conserto caiu a quarta: **caminho inexistente** também saía `0 defeituosos, de 1
candidatos` com exit 0, porque o `catch` do laço imprimia uma linha `ERRO` e seguia sem contar o
arquivo nem tocar no código de saída.

Quatro portas de entrada, um mesmo estrago: **o gate aprova o que não olhou.** O que muda de vez em
quando é a forma de chamar; o que não muda é o desenho — sucesso é o valor DEFAULT, e medir é que
precisa dar certo.

**A regra:** *não medir e aprovar são estados diferentes, e o código de saída é onde essa diferença
vive.* `0` = medi e está limpo · `1` = medi e achei defeito · `2` = **não medi**. Todo gate que
possa terminar sem ter aberto o alvo — arquivo ausente, Chrome que não sobe, timeout, diretório no
lugar de arquivo — deve reservar o 2 para isso e **dizer quantos de quantos ficaram sem medição**.
A casa já tem o mecanismo pronto (`scripts/lib/nao-medido.mjs`), e ele não bastava aqui porque só
pega exceção NÃO capturada: um `try/catch` bem-intencionado no meio do laço desliga a proteção sem
que ninguém veja.

**Corolário para quem lê laudo:** o denominador é parte do resultado. "0 defeitos" sem "de quantos"
não é aprovação, é uma frase. Antes de aceitar um verde de lote, confira se o número de candidatos
bate com o número de arquivos que você esperava — foi só isso que separou este caso de mais um
lote "auditado" que ninguém auditou.

Ver [[SIS-242]] e [[SIS-243]] (conserto que não alcança a produção) — família vizinha: lá o gate
certo não chega à máquina; aqui ele chega, roda, e mente.
---

### SIS-245 · Renumerar lei não cria referência órfã — cria referência SILENCIOSAMENTE ERRADA, e nenhum gate a vê

**09/ago/2026, erro meu, pego duas horas depois.** Ao resolver a colisão de IDs entre duas sessões
([[SIS-243]] é o merge, esta é a sequela), renumerei quinze leis de `SIS-219…233` para
`SIS-228…242`. Rodei em seguida a varredura de integridade e ela devolveu **zero referências
órfãs**. Estava certa, e era inútil.

**Porque renumeração não deixa buraco: deixa troca.** Um texto que citava `[SIS-232]` para dizer
*"alarme introspectivo fabrica o sintoma"* continuou apontando para um `SIS-232` que existe — e que
hoje diz *"override que ninguém definiu é dependência não declarada"*. A referência resolve, o link
funciona, o número é válido. **Só o significado mudou.** Um caçador de órfãs procura o que não
existe; este defeito é feito inteiramente de coisas que existem.

Duas referências assim sobreviveram à minha varredura, nos dois documentos que toda sessão lê
antes de trabalhar.

**A régua: depois de renumerar, confira SIGNIFICADO, não existência.** Para cada citação da faixa
mexida, imprima lado a lado o número citado, o texto ao redor da citação e o TÍTULO ATUAL daquela
lei. Onde o contexto não casar com o título, a referência escorregou. Foi assim que os oito casos se
resolveram em minutos — e foi assim que se descobriu que cinco deles estavam CERTOS (citavam de
verdade as leis do outro lado, que não se moveram).

⚠️ **E a heurística que eu usei para decidir quem renumerar tem um furo nomeável.** Presumi que
*"linha que já existe no arquivo do remoto é do remoto, não renumera"*. Isso falha quando **outra
sessão do meu próprio lado empurrou antes de mim**: ela escreveu no remoto citando as leis que eram
minhas, e a heurística as protegeu justamente por estarem lá. *Estar no remoto prova quando o texto
chegou, não sobre qual lei ele fala.* O que decide é o CONTEÚDO da citação, e só ele.

⚠️ **Corolário para quem for renumerar:** o custo real não é mexer no arquivo de leis — é a auditoria
de referências que vem depois. Antes de renumerar, conte quantas citações da faixa existem no repo.
Se forem muitas, considere o outro lado ceder, ou aceite que a auditoria é parte do trabalho e não
um extra.

---

### SIS-247 · Quem ESCREVE e quem LÊ têm de combinar o endereço — dois prefixos plausíveis é uma bomba-relógio

**09/ago/2026.** Dois lotes de render quase saíram com a arte errada, e a causa é a mesma linha de
configuração:

| | |
|---|---|
| `descarregar.mjs:159` **escreve** a produção da VM em | `gs://…/**out**/<proj>` |
| `baixar-insumo-render.mjs:40` **lia** o insumo de | `gs://…/**macbook-backup**/out` |

Os dois endereços existem, os dois têm `graphics/*.html`, e nada dizia que eram versões diferentes
do mesmo vídeo. Medido, com a arte da `estudio-top10` como referência:

- **`ceuta-travessia-em-massa`** — 90 de 124 HTMLs divergiam. O render ia começar; parei com 1
  clipe feito.
- **`galaxia-arco-flecha`** — **51 de 51** divergiam, e o espelho nem tinha a cena de publi que a
  arte nova ganhou. Aqui o render **já havia rodado: 40 clipes 4K da versão errada.**

**Em nenhum dos dois houve erro.** As contagens batiam, os nomes batiam, as pastas batiam. *Quando o
defeito é de VERSÃO, todo agregado aprova* — a prova só existe arquivo a arquivo, por hash
([[SIS-243]]).

**O princípio:** *um endereço de leitura só é seguro se for o mesmo que alguém escreve.* Quando
existem dois lugares plausíveis para a mesma coisa, a escolha do leitor deixa de ser configuração e
vira aposta — e ela é feita uma vez, no código, e repetida em silêncio para sempre. **Não basta a
doutrina dizer qual é a fonte: o código que lê precisa perguntar.**

**Conserto:** o padrão passa a ser a produção (`out/<proj>`), com queda para o espelho só quando ela
não existe, e a escolha é **ANUNCIADA em toda execução** — inclusive o aviso de que o espelho pode
estar velho. `--de=` continua para quem precisa mesmo do backup. *Ler de um lugar plausível e errado
em silêncio é o que custou os dois lotes; um leitor que declara de onde leu transforma o mesmo
engano em uma linha de log que alguém enxerga.*

⚠️ **A doutrina já dizia tudo isto** — o `CLAUDE.md` afirma que o bucket é a fonte primária e que
`macbook-backup` é backup bruto. A frase existia e o código não a seguia. *Regra que não está
codificada é regra que vale até alguém escrever a linha contrária, sem má-fé e sem aviso.*

---

### SIS-249 · Laudo com o conserto escrito e não aplicado não é meio-caminho — é o custo inteiro, cobrado de novo e maior

Em 09/ago/2026 o caçador de capacidade órfã rodou duas vezes. Às **06:56** o laudo diagnosticou por
que ele desperdiça vagas — o universo dos candidatos vem do **disco** (`readdirSync`) e os citadores
vêm de **`git ls-files`**, então um arquivo gitignorado pode ser *acusado* de órfão mas nunca pode
ser *encontrado* citando alguém — e **escreveu o conserto pronto, cinco linhas de código, no próprio
laudo**. Ninguém aplicou. Às **12:56** o caçador rodou de novo:

| volta | candidatos que o `.gitignore` já condenava |
|---|---|
| 06:56 (a que diagnosticou) | 10 de 25 — **40%** |
| 12:56 (seis horas depois) | 13 de 25 — **52%** |

O desperdício **subiu**. E não é desperdício abstrato: o caçador tem teto de 25 candidatos por volta
e ~170 na fila, então **cada vaga gasta com decisão já tomada atrasa em uma volta a chegada num
órfão de verdade**. Duas voltas queimaram 23 das 50 vagas com lixo que a casa já havia declarado
lixo — no `.gitignore:80`, há semanas.

Quando o conserto foi finalmente aplicado (as mesmas cinco linhas, sem uma vírgula nova), a medição
imediata: **59 arquivos saíram do universo, e a lista de "sem nenhum citador" caiu de 106 para 48**.
*Mais da metade da fila de órfãos nunca foi órfã.*

**O princípio:** um laudo que termina em recomendação transfere para um futuro leitor um trabalho
que ele não sabe que herdou. O leitor seguinte é quase sempre **outra sessão**, que começa do zero,
não lê o laudo anterior por padrão — e refaz o diagnóstico inteiro, pagando de novo pelo mesmo
achado. *Diagnóstico se guarda; conserto não.* Se o conserto cabe na volta que o descobriu e é
reversível, ele sai na volta que o descobriu.

**O corolário operacional, e é o que muda o comportamento:** ao abrir qualquer auditoria recorrente,
**leia o laudo anterior antes de julgar** e comece pelas ações que ele deixou pendentes. Se elas
ainda estão lá, essa é a primeira descoberta da volta — e vale mais que os achados novos, porque
explica por que eles continuam chegando. Foi assim que esta lei apareceu: a volta das 12:56 abriu o
`_ULTIMO.md` e encontrou o próprio remédio intacto.

⚠️ **Não vale como licença para "aplicar tudo que o laudo anterior sugeriu".** As aposentadorias que
aquele laudo decidiu ficaram pendentes de propósito: aposentar por "ninguém chama" sem reler cada
arquivo é o erro de 07/ago, em que três scripts foram declarados órfãos e a auditoria seguinte
provou o contrário lendo o código ([[SIS-243]] é o parente disso: agregado que aprova esconde
defeito de versão). *O que se aplica sem reabrir é o conserto de MÉTODO — o que muda como a próxima
volta mede. O que exige reabrir é o veredito sobre um artefato.*

---

### SIS-251 · O teste de transcrição cega lê o campo `w` — no campo errado ele devolve ZERO, que é exatamente a bandeira vermelha

**09/ago/2026, `especies-humanas` na VM.** A `_FINALIZACAO-ABORTADA.md` prescreve o teste do
[[SIS-53]] em voz alta: *"o `words.json` do ciclo velho tinha 19 palavras com `--`… se a nova vier
com zero, é bandeira vermelha"*. Rodei o teste com o filtro no palpite natural — `x.word || x.text`
— e ele devolveu **0 de 4082**. Zero é o valor que manda re-transcrever.

Mas o campo do `words.json` deste estúdio é **`w`**: `{"w":"Ruído,","start":0.1,"end":0.58,"conf":-0.005}`.
`x.word` e `x.text` são `undefined` em toda palavra, `String(undefined)` nunca contém `--`, e o
filtro devolve 0 **sem erro nenhum**. Relido no campo certo, o mesmo arquivo tinha os **19**
esperados (`pregaram--`, `fu--`, `endire--`, `Australo--`): a transcrição estava íntegra.

**O que faz isto morder:** o modo de falha do campo errado e o sinal de defeito real são o MESMO
número. A prescrição do teste não diz qual campo ler, então quem o executa de improviso tem uma
chance real de gritar bandeira vermelha sobre um arquivo perfeito — e a consequência não é um susto
barato: é mandar rodar o **Scribe, que é PAGO**, sobre uma transcrição que já estava boa.

**A régua:** ao medir presença de um marcador em `words.json`, imprima `JSON.stringify(arr[0])`
antes de escrever o filtro. Um `console.log` de uma linha separa "o arquivo está cego" de "eu estou
lendo o campo errado". *Quando o resultado de um teste e a falha do próprio teste são o mesmo valor,
o teste não tem valor até você provar que sabe ler o insumo.*

---

### SIS-252 · Arquivo com o nome certo não é o arquivo certo — o que prova é a ARITMÉTICA dele contra o resto

**09/ago/2026, `especies-humanas`.** Achei o `_cortes.json` numa gaveta de arqueologia depois de
declará-lo perdido ([[FIN-161]]), restaurei, e fui finalizar. O gate `qc-master-em-fase` barrou:

```
master DEVERIA ter ... 1251,1 s   (bruto − cortes + gaps, pelo _cortes.json restaurado)
master TEM ........... 1265,0 s
divergência .......... +13,9 s    (tolerância ±1 s)
```

O arquivo tinha o nome certo, o projeto certo, os 71 spans, o `gapSec` certo — e **não era o plano
que gerou aquele master**. Alguma re-decupagem intermediária existiu, e o que sobreviveu na gaveta
foi uma versão anterior dela.

**O que me salvou não fui eu: foi um gate que refaz a conta.** Eu tinha *medido* essa mesma
divergência antes, com as próprias mãos, e a li como "resto que não está escrito em lugar nenhum" —
uma curiosidade a explicar depois. O gate leu a mesma diferença como **impedimento**, e estava
certo: montar sobre um master fora de fase põe imagem e fala fora de sincronia do primeiro ponto
divergente em diante, e ainda deixa 14 s que a decupagem mandou cortar.

**A régua:** *quando um insumo reaparece — de backup, de arquivo morto, de outra máquina —, a
identidade dele não é o nome nem o formato: é ele FECHAR a conta com os vizinhos.* Relógio se prova
contra o master; master se prova contra o relógio. Um dos dois sozinho não diz nada, e o par diz
tudo em uma linha de aritmética.

⚠️ **E o número que não fecha nunca é "detalhe a explicar depois".** Eu vi +13,9 s e segui;
o gate viu +13,9 s e parou. *A diferença entre uma curiosidade e um impedimento é quem está disposto
a agir sobre ela* — por isso a conta precisa morar num gate, não na atenção de quem lê o laudo.

✅ **A ordem do conserto importa, e o gate a dita no próprio texto do FAIL** (que é onde uma
instrução de conserto tem de estar): lock no `_bruto` ANTES de baixar, master fora de fase
**movido** para `arquivo-morto/` — nunca sobrescrito, ele é a única prova do plano antigo — e só
então regerar.

⚠️ **E O MESMO DEFEITO APARECEU DUAS VEZES NA MESMA INVESTIGAÇÃO, em camadas diferentes.** Segui o
conserto, baixei a `source-sincronizada.mp4` do backup (3,18 GB, bytes conferindo com o objeto no
bucket) e o `master-decupado.mjs` reprovou:

```
✗ 1239,07 s de vídeo MANTIDO caem fora da faixa de mic (que vive em 0,000 s → 117,440 s)
```

O arquivo tem **117 segundos**, não os 36 minutos do vídeo. É um FRAGMENTO com o nome certo, o
tamanho plausível (3,18 GB são 117 s de 4K a 218 Mbps) e o checksum íntegro — íntegro *daquele
fragmento*. *Verificar que a cópia chegou inteira não é verificar que o arquivo está inteiro:
`bytes locais == bytes remotos` prova transferência, nunca conteúdo.*

Os dois casos são a mesma lição em alturas diferentes: **um relógio que não fecha com o master, e um
insumo que não fecha com a própria duração declarada do projeto.** Em ambos, o nome estava certo e a
aritmética estava errada — e foi a aritmética que falou.

---

### SIS-253 · O número já estava no comentário; faltava o `if`

**09/ago/2026.** Encontrei a `estudio-decupagem` com **0 bytes livres de 194 GB**, o ciclo de
decupagem morto e o slug em curso (`piramide-porta-secreta`, 37 GB no disco) **sem master no
bucket** — trabalho no meio, perdido.

O `ciclo-vm.sh` sabia o número desde que foi escrito. Está no cabeçalho dele, linha 21:

> *"~40 GB por vídeo entre bruto e mux; a terceira decupagem sem faxina lota"*

E ao fim de cada slug ele imprimia `df -h`. **Imprimia — não testava.** O HANDOFF §0t já tinha
descrito o cenário em detalhe, com a projeção de quando a máquina encheria, e mesmo assim ela
encheu: um documento que prevê o acidente não o impede.

**A régua:** *doutrina escrita em comentário é doutrina que não existe.* Um número que só um humano
lê protege até o dia em que ninguém está lendo — e é sempre esse o dia. Se o valor é conhecido o
bastante para virar comentário, é conhecido o bastante para virar condição.

**Conserto:** guarda de 45 GB **antes de baixar** o bruto de cada slug (os ~40 do pico mais folga).
Abortar ali é barato — o slug pulado continua na fila com o bruto intacto no bucket, e a próxima
passada o pega. *Encher o disco no meio do mux não tem essa volta:* perde o que estava sendo gerado
e deixa lixo pela metade.

⚠️ **A liberação de espaço tem ordem, e ela é a mesma de sempre:** conferir o master local contra o
do bucket **byte a byte**, e só então `rm -rf out/<slug>/_media`. Liberei 50 GB assim em quatro
slugs fechados (`rosto-da-formiga`, `megabarragem-himalaia`, `planeta-nove`, `viagem-no-tempo`), com
os quatro tamanhos batendo exatamente. O `piramide-porta-secreta` **não** foi tocado justamente
porque a prova não fecha nele — é o que estava sendo processado quando o disco acabou.

⛔ **E o alvo é o slug FECHADO, nunca um padrão amplo:** `rm -rf out/*/_media` teria levado junto o
projeto em curso. É a mesma família do `pkill -f` que matou o download legítimo (HANDOFF §0ah) — o
verbo destrutivo mira o próprio escopo, sempre.

---

## SIS-255 — o álibi tem de responder à ACUSAÇÃO, não ao defeito mais famoso

**09/ago/2026, `especies-humanas@finalizacao`.** Um artefato de decupagem foi descartado por ordem do
dono. Para decidir se dava para reaproveitá-lo, duas estações mediram — e a primeira mediu o crime
errado.

A `_DECUPAGEM-LIMPA.md` nomeia o defeito com precisão: `transcribe.mjs` descartava a **cabeça** da
trilha de mic, e `words.json` nascia no relógio da TRILHA em vez do CONTAINER. É **deslocamento**. A
própria nota explica por que ninguém viu: *"deslocar uma lista não muda o comprimento de nada."*

O teste aplicado foi o da **SIS-53** — contar palavras com `--`, que detecta transcrição **cega** (a
que para no meio). Ele passou: 19 marcas, span 0,10 → 2193,72 s, cobertura de 99,997% do arquivo. E
foi escrito no disco como *"a transcrição antiga não estava cega"* — verdade, e **irrelevante**: uma
lista deslocada cobre exatamente o mesmo comprimento que uma lista correta. O álibi era perfeito para
um crime que ninguém tinha alegado.

**O teste certo se lê na acusação.** Deslocamento se mede contra o relógio real, em três provas
baratas: (1) a duração do `audio.wav` contra a do container — que é o gate que o próprio conserto
instalou, e que passava o tempo todo; (2) o span das palavras contra o span do container; (3) o
casamento dos buracos do `words.json` com os silêncios REAIS do áudio (`silencedetect`), varrendo o
offset. A (3) decide sozinha: o pico caiu em **+134,50 s**, a 0,22 s do offset declarado no
`sync.json` (134,7164), com **71,6%** de casamento contra **18,1%** na hipótese do bug. Se o
deslocamento existisse, o pico estaria em zero.

**A régua.** *Antes de medir para absolver, releia a acusação e escreva o teste a partir DELA.* O
defeito que a casa conhece de cor é o que vem à mão primeiro — e passar no teste do defeito famoso
não diz nada sobre o defeito que foi realmente alegado. Quando o veredito vai autorizar ou barrar
trabalho caro, o teste tem de poder **falhar** pelo motivo alegado; se ele não consegue nem em tese
detectar aquilo, ele não é evidência, é ruído com aparência de rigor.

Prima da [[SIS-251]] (mesmo dia, mesmo projeto: o filtro media o campo errado e o modo de falha valia
o mesmo número que o defeito) e da [[SIS-254]] (a medição certa feita no lugar errado). Nas três a
aritmética estava correta e a **pergunta** é que não era a do caso.

**Custo evitado:** a decisão de reaproveitar ou re-decupar valia até 25 clipes 4K em fase, Scribe pago
e uma rodada de inferência — e ia ser tomada sobre um álibi que não cobria a acusação.

### SIS-257 · Quem decide fluxo lendo prosa tem de ler a NEGAÇÃO — e errar para o lado que se cura

**09/ago/2026.** O despachante decide "isto depende de uma pessoa" testando se o log do agente
*contém* certas expressões. Dois vídeos ficaram parados — `dentro-do-sol` por 10 h e
`quao-fundo-terra` por 6 h — porque o gatilho casou **dentro da frase que o negava**:

| o agente escreveu | o que casou | o que o despachante concluiu |
|---|---|---|
| *"**Não há nada** esperando **decisão humana** e nenhuma cena bloqueada por mídia"* | `decisão humana` | pede pessoa |
| *"A estação está **bloqueada por cota do Fable**, **não** por defeito"* | `está bloqueada` | pede pessoa |

Os dois disseram, em português claro, o contrário do que foi carimbado.

**Isto é a mesma família da [SIS-256]** — que já nomeou *"a negação que contém a string que ela
nega"* — e do `ESTACAO_CONCLUIDA`, cujo teste é a linha inteira justamente porque *"o agente
bloqueado escreve com honestidade «não imprimo ESTACAO_CONCLUIDA», e a negação contém a string"*.
A lição estava escrita em dois lugares e **não tinha sido aplicada ao terceiro detector**. Consertar
um membro da família não conserta a família: quando descobrir um destes, **vá procurar os irmãos** —
`grep` por quem mais decide fluxo com `.test()` ou `includes()` sobre texto de agente.

**O que torna este caso caro não é o erro, é a assimetria de quem o cura.** Um falso positivo aqui
põe trabalho pronto em `bloqueado`, e **nada no sistema revisa esse estado**: o despachante só
repesca `pendente` (`despachante.mjs:1814`) e o `destravar-cota.mjs` só olha bloqueio de COTA. O
vídeo espera para sempre, em silêncio, uma pessoa que não tem o que fazer. Um falso negativo custa
uma sessão que redescobre a dependência e re-bloqueia, com o teto de 5 tentativas segurando o laço.

> **Onde os dois erros não custam o mesmo, a heurística tem de errar para o lado que se cura
> sozinho** — e isso se escreve no código, não na esperança de quem lê o painel.

**O conserto (feito, com prova):**
1. `NEG_GATILHO` apaga o gatilho quando ele vem dentro de uma negação (≤70 caracteres, sem
   atravessar `.` ou `;`, para não engolir a frase seguinte).
2. Declaração **deliberada** de cota (`bloqueada POR cota`, `cota do Fable esgotada`) vence — e isso
   **não** contradiz a [SIS-165], que dava precedência ao humano sobre a *menção acidental* da
   palavra. Menção acidental é *"a busca está esgotada"*; `bloqueada por cota do Fable` em negrito é
   ato deliberado, do mesmo tipo que a declaração humana. A precedência só vale quando, retirada a
   declaração de cota, não sobra gatilho humano.
3. **`scripts/estudio/reavaliar-travas.mjs`** — a peça que faltava. Relê o log de cada linha
   bloqueada com o detector VIGENTE (importado do despachante, nunca uma cópia — duas cópias
   divergem, e foi assim que o hook do `qc-hex` deixou passar o defeito que a [ARTE-190] mediu) e
   devolve a `pendente` só quem já não é trava humana. Idempotente.

Medição nos 6 logs reais: **6/6** — `dentro-do-sol` e `quao-fundo-terra` viram não-humano;
`cerebro-quando-sonha` (*"depende do Mateus mandar o link do produto"*), `especies-humanas`,
`orcas-nao-matam` e `ponte-mais-alta` seguem bloqueados, que é o certo. Os dois falsos positivos
voltaram à fila com o Fable sondado vivo (29 s, resposta `ok`).

**A pergunta que fica para todo estado de fila novo:** *quem revisa isto se o carimbo estiver
errado?* Se a resposta for "ninguém", o estado é uma armadilha — não importa quão bom seja o
detector que o escreve.

### SIS-258 · Gate que lê o RÓTULO em vez do REGISTRO reprova quem não disfarçou e aprova quem organizou

**10/ago/2026, estação RENDER do `galaxia-arco-flecha`.** O despachante barra pesquisa contaminada
testando o **nome do arquivo** contra `/(pexels|pixabay|coverr|unsplash|videvo|mixkit|freepik)/`. O
comentário que defendia a escolha dizia: *"o nome do arquivo já carrega a origem — aqui isso basta e
custa zero"*. Custa zero e **não basta**: a premissa morre no instante em que a pesquisa renomeia o
arquivo pelo id da cena, que é a convenção da casa e o que o resto do mesmo bloco espera (`o id da
cena mora nele`).

Medido contra o disco, nos três projetos contaminados da fila:

| projeto | por NOME | pelo REGISTRO | onde a prova estava |
|---|---|---|---|
| `galaxia-arco-flecha` | **0** | 14 | `_media/_PROCEDENCIA.json` → `"licenca": "Pexels License"` |
| `mamute-de-volta` | **0** | 30 | `_pesquisa/footage.json` → `fontes_usadas: [{nome:"Pexels", clipes:26}, …]` |
| `especies-humanas` | **0** | 3 | `_media/_PROCEDENCIA.json` |

**0 de 47.** Os três passariam pelo gate, e o despachante responderia `⏩ o ARTEFATO já está no disco.
Avanço sem gastar` — mandando para `direcao-arte` um vídeo cuja mídia tem de ser trocada, que é
exatamente o bug que o comentário de 07/ago **diz ter consertado**. Ele foi consertado só para o caso
em que o nome denuncia; o caso limpo passava batido. *A pesquisa que organiza os arquivos é premiada
com a aprovação, e a desleixada é a única barrada.*

**O conserto** lê o registro, nos dois formatos em que ele existe — e nenhum dos dois é o
`spawnSync` de 30 s que estourou o teto do laço em 07/ago; são dois `JSON.parse` de arquivo pequeno,
milissegundos, sem processo filho e sem falha engolida:

1. `_media/**/_PROCEDENCIA.json` — declaração **por arquivo**. Lê-se só `fonte`/`licenca`/`url`/
   `acervo`, **nunca o objeto inteiro**: a `nota` costuma dizer *"substituí o clipe do Pexels por
   este"*, e casar com ela reprovaria justamente o arquivo já consertado (real: o
   `s73-pessoa-olhando-ceu.mp4` deste vídeo é Shutterstock e cita a troca por escrito).
2. `_pesquisa/*.json` → `fontes_usadas[]` — declaração **agregada por fonte**, sem nome de arquivo.
   Não faz falta: a pergunta da função é *"a pesquisa entregou?"*, e fonte proibida com contagem > 0
   já responde que não.

O log passa a dizer **qual evidência pegou**, porque o conserto de cada uma é diferente: nome e
declaração apontam o ARQUIVO a recaçar; o agregado aponta a FONTE, e quais arquivos são fica para a
pesquisa descobrir.

**A pergunta que fica:** quando um gate barato substitui um caro, ele herda a pergunta ou só a
aparência da resposta? Aqui a pergunta certa era *"de onde isto veio?"* e o atalho respondia *"como
isto se chama?"* — que coincidem só enquanto ninguém arruma a pasta. Antes de trocar a medição pelo
sintoma, teste o atalho contra o caso **bem-comportado**: o mal-comportado ele sempre pega.

---

### SIS-259 · Etapa que falta na SPEC vira defeito que ninguém sabe nomear — e o diagnóstico aponta para arquitetura

**10/ago/2026.** O Mateus leu a `SPEC-CICLO-DECUPAGEM` e perguntou por que não havia E5 — a segunda
passada de Scribe sobre o master já cortado, que dá ao espelho as minutagens do arquivo que vai à V1
do Premiere. A etapa **existia no código** (`transcrever-decupado.mjs`) e **na lei** ([SIS-125], de
06/ago), e **não existia na spec**, escrita dois dias depois. Pior: a spec fazia a **E3 produzir o
`espelho.json`** — antes do corte (E4) e antes de qualquer transcrição do master.

**O que isso custou, medido em uma varredura de 3 minutos com o gate novo:**

| vídeo | espelho estava | do master | estado |
|---|---|---|---|
| `orcas-nao-matam` | 1789,2 s | 1141,5 s | **647,6 s fora** · travado na finalização |
| `dentro-do-sol` | 1462,8 s | 1186,5 s | **276,3 s fora** · desenhando arte AO VIVO |
| `o-acre` | 1001,6 s | 800,8 s | **199,9 s fora** · já publicado |

**O QUE ESTA LEI EXISTE PARA ENSINAR** não é "faltava uma etapa". É o que a falta produz no
diagnóstico de quem vem depois:

> **Quando uma etapa não está especificada, o defeito que ela causa não tem nome — e o diagnóstico
> honesto de um bom agente vai parar na explicação mais próxima que ele tenha vocabulário para
> descrever.** Quase sempre "isto é uma decisão arquitetural".

O laudo do `orcas` é o exemplar. Ele estava **tecnicamente impecável**: mediu que o gap de card
entrava duas vezes, achou os frames exatos (909/9146/15394/23202 contra 909/9056/15215/22932) e
nomeou o desvio de **90 frames por gap anterior**. E concluiu que era preciso decidir *"quem abre o
gap — o master ou o XML"*, com as duas rotas na mão, porque mudar um lado quebraria os dublados. A
estação parou por dias esperando essa decisão.

Não havia decisão a tomar. Noventa frames a 30 fps são os 3,0 s que a E1 materializa; o gap entrava
duas vezes porque o espelho estava 647 s fora e a montagem reabria o que o arquivo já continha. **A
medição estava certa e a conclusão não tinha como estar** — faltava a peça de vocabulário.

**Os sinais de que um diagnóstico caiu nisto**, e valem para qualquer estação:
- ele conclui em **decisão arquitetural**, **trade-off** ou **as duas rotas precisam mudar juntas**;
- a medição dentro dele é **precisa e reprodutível** (não é palpite — é isso que engana);
- o número medido é **redondo numa unidade do sistema** (90f = 3 s de gap; 647 s = a soma dos cortes).
  *Constante redonda demais é assinatura de causa única, não de tensão entre dois desenhos.*

**A pergunta que desarma:** *que artefato eu compararia para provar isto?* Se não existe artefato —
se a prova só pode ser um argumento — o diagnóstico ainda não chegou na causa. Aqui o artefato era o
`words-final.json`, e ele não existia nos três vídeos.

**O conserto, e por que são quatro camadas:** a E5 entrou na spec com o **invariante 8** (*toda etapa
que ancora em tempo consome o relógio do arquivo que VAI AO AR*); a E3 deixou de produzir o espelho;
o agente `montador` passou a exigir a transcrição certa **por fluxo** (do-zero → `words-final.json`;
pré-editado → `words.json`, que ali já é o master) e a tratar ausência da E5 como bloqueio, não como
licença; e nasceu o gate `qc-espelho-relogio.mjs`, passo duro 8b da decupagem, que **decide** em vez
de informar — compara o `fim` do espelho com o span das duas transcrições e reprova. A separação
entre os relógios é a soma dos cortes (678 s no `ceuta`, 200,8 s no `o-acre`), ordens de grandeza
acima de qualquer arredondamento, então a decisão não tem zona cinzenta.

⚠️ **O `checar-plano.mjs` chegou a um passo disto e parou.** Ele já INFERIA o relógio
(`fim <= durMaster + 30`) e IMPRIMIA `relógio do espelho: FINAL|BRUTO`. Três estações mandavam o
agente rodá-lo e **ler** a saída. *Informar não é barrar* — e uma tolerância de 30 s aceita espelho
bruto sempre que o vídeo for curto o bastante. A distância entre "o dado está na tela" e "o fluxo
para" é onde três vídeos se perderam.

**Fecho do ciclo:** varredura final em 15 projetos com espelho — **15 com relógio certo, 0
reprovados**. E o `words-final.json` passou a viajar em `entregas/<ano>/<slug>/meta/`, com o manifest
declarando `cicloDecupagem: e5 | pre-e5 | sem-decupagem`, porque sem isso um vídeo entregue e limpo
do disco não deixa rastro de por qual ciclo passou — foi assim que o `MAPA-REDECUPAGEM` perdeu
quatro vídeos ([SIS-183]).

### SIS-260 · O dado que ninguém consegue LER não existe — coletar é metade do trabalho

**10/ago/2026.** O Mateus perguntou quais vídeos foram publicados no canal em agosto, em ordem. A
doutrina mandava ao `out/_ENTREGAS.md`, declarado "fonte única de o que já foi ao ar". A resposta
certa levou **seis comandos e SQL escrito à mão** — e ela já estava no disco desde as 00:30, coletada
todo dia pelo `top10 coletar` na tabela `video_publicado`, com título, data e views.

Existia o verbo que ESCREVE (`coletar`) e não existia o verbo que LÊ. *Uma coleta diária que só se
consulta por SQL improvisado é um dado que, na prática, ninguém tem* — o custo de responder empurra
todo mundo para a fonte errada, que é mais fácil de abrir.

**Os dois relógios, e por que confundi-los devolve a ordem errada com cara de certa:**

| | quem produz | falha como |
|---|---|---|
| **publicação** | OBSERVADA na API do YouTube | não falha — ninguém declara, ninguém esquece |
| **entrega** | DECLARADA pelo `entregar.mjs` | fica vazia, atrasa, ou aponta para o vídeo errado |

Medido no mesmo dia: `odisseia-real` e `lago-peigneur` constavam entregues em **01/ago** e foram ao ar
em **31/jul, 22h08 e 22h51**; `compilado-previsoes-jiang` constava **27/jul** e foi ao ar em
**01/ago**; `eua-china-tucidides` carregava o título de um vídeo com o **link de outro**
(`A_EWQoRgANk` é "China vs EUA: A Armadilha de Tucídides", de 13/jul). Ordenar aquela tabela e chamar
o resultado de ordem de publicação erra em três das nove linhas — e a tabela não parece errada.

**⚠️ E o fuso muda o MÊS.** A API devolve UTC; um vídeo das 22h de 31/jul chega como
`2026-08-01T01:08Z`. Lido cru, ele migra de dia, de mês e de posição no ranking. Toda leitura de
publicação é em `America/Sao_Paulo` — é a data que o dono tem na cabeça quando pergunta.

**O conserto:** `top10 publicados [--mes=AAAA-MM|--dias=N]` (`scripts/db/publicados.mjs`) — lê o
observado, imprime em Brasília com views e slug, marca quem está no ar sem registro, e avisa quando a
própria coleta tem mais de 36 h (coleta velha imprime tabela bonita e esconde o que saiu ontem).

**A pergunta que fica para toda coleta nova:** *qual é o comando que LÊ isto?* Se a resposta for
"abre o banco e consulta", a capacidade está pela metade — e a metade que falta é a que alguém usa.

### SIS-261 · Guardião com exceção hard-coded promete cobertura que não tem

**10/ago/2026.** O `reconciliar-publicados.mjs` existe para achar vídeo no ar sem registro. Ele
carregava a linha `.filter(v => !/1 HORA DE CURIOSIDADES/i.test(v.titulo))`, com o comentário
"compilados têm trilha própria". Três defeitos, todos medidos:

1. **A trilha própria não existia.** A tabela `publicacao` do `estudio.db`, que classificaria o
   compilado, não recebe um registro desde 27/jul. O filtro mandava o furo para um lugar vazio.
2. **O recorte era o título literal.** Escondia "1 HORA DE CURIOSIDADES" e deixava passar
   "3 HORAS DE CURIOSIDADES" e "2 HORAS…" — mesma natureza, tratamento oposto, por acidente de regex.
3. **A exceção cobria a MAIORIA.** A meta declarada do canal é 16 compilados/mês (14×1h) contra ~10
   originais. O guardião de "o que foi ao ar sem registro" era cego justamente para o maior volume.

Removida a linha, a janela de agosto saltou de **3 para 5** furos reportados. Hoje o compilado é
reportado e **marcado** `[compilado]`.

**A regra:** silenciar uma categoria inteira não é reduzir ruído — é a [SIS-xx do alarme falso] ao
contrário. Alarme falso ensina a ignorar o gate; **exceção silenciosa faz confiar num gate que não
olha**, que é pior, porque o silêncio é lido como aprovação. Se uma classe de item não pertence
àquele guardião, ela precisa de guardião PRÓPRIO — nunca de invisibilidade.

### SIS-264 · `w:` não é peso de fonte — o extrator que confunde LARGURA com `font-weight` reprova cena sã (10/ago/2026, QC do `ceuta-travessia-em-massa`)

O `qc-tipografia.mjs` reprovou **9 das 124 cenas** de um vídeo cuja tipografia estava correta. As
nove eram falso positivo, por **três** defeitos distintos no mesmo gate — e o mais caro é o
primeiro, porque produz a acusação mais grave ("⛔ ABAIXO DO PISO") a partir de um número que não
existe:

**1 · `\bw\s*:\s*(\d{3})\b` lia LARGURA como PESO.** O extrator existia para pegar "o helper `{w:N}`
das cenas". Ele casou com `w:120+h1(i*3)*180` (a largura de uma partícula, `s115`) e com
`{id:'b1', x:905, w:340, v:72}` (a largura das barras do ranking, `s28`). O laudo saiu "pesos na
cena: 120 · 600 · 900 ⛔ ABAIXO DO PISO: 120 — fino demais para a marca". `grep font-weight` nos
dois arquivos devolve **600, 700, 800, 900** e nada mais. `w:` é a abreviação mais comum de WIDTH em
qualquer rig de desenho: casá-la com peso de fonte garante falso positivo em toda cena que anima
caixa. Peso em objeto JS se escreve `"font-weight"`, e havia um extrator para isso.

**2 · A régua acusava acentos que NÃO têm defeito.** Era `/[ÃÕÁÀÂÉÊÍÓÔÚÇ]/`. Os defeitos de glifo
medidos na Neue Haas são **dois**: o TIL maiúsculo (só na Bold, 600–749) e a CEDILHA maiúscula (em
todos os pesos). `ARGÉLIA`, `POLÍTICA`, `POLICÍA NACIONAL` e `EX-COLÔNIA ESPANHOLA` desenham certo
em qualquer peso — quatro reprovações por um defeito que aquelas letras não têm.

**3 · Lia COMENTÁRIO como texto de tela.** A reprovação da `s85` citava
`"TURQUIA, 2016: € 6 BILHÕES · TUNÍSIA, 2023: // € 105 MILHÕES · UNIÃO EUROPEIA"` — a string
carrega um `//` no meio: é a prosa do cabeçalho, que nunca chegou ao quadro.

**E a régua de fundo, que é a lei:** um gate ESTÁTICO não pode dar veredito sobre um fato de
RENDERIZAÇÃO. Ele lista os pesos que aparecem no arquivo e não sabe **qual elemento herda qual
peso**, nem enxerga a cura por família (`"Helvetica Neue"`, [ARTE-120]) que a `s127` já aplicava e
declarava em comentário. Quem responde é o `_audit-til.mjs`, que abre a cena e mede o **glifo
desenhado** — e ele mediu **0 defeito em 124 cenas**, contra as 9 do estático.

O conserto separa os dois papéis: o gate estático **reprova** só o que é fato do arquivo (o piso de
peso) e rebaixa o risco de glifo a **SUSPEITA**, imprimindo o comando que decide. Dois gates que
discordam não são redundância: um mede a intenção escrita, o outro o resultado. Quando discordam,
**vence quem mediu o pixel** — e o outro deve dizer isso em voz alta em vez de reprovar.

*Por que isto custa caro e não é cosmético:* a próxima sessão que lesse "9 cenas fora da tipografia
da marca" abriria nove cenas corretas para "consertá-las", trocando pesos que estavam certos e
gastando inferência para piorar arte pronta. Alarme largo demais ensina a ignorar o gate
([SIS-154]); alarme largo demais **com conserto sugerido ao lado** ensina a estragar o que ele
aponta.

### SIS-265 · Aviso FALSO em ferramenta advisory é lido como veredito — e quase mandou refazer 122 cenas ancoradas a 59 HTMLs pagos (10/ago/2026, espelho do `quao-fundo-terra`)

O `checar-plano.mjs` é declaradamente **advisory**. Mesmo assim, o rodapé dele —
`9 aviso(s) — ajustar o espelho antes de produzir` — condenou um espelho impecável, e a nota que
sobrou na fila para a sessão seguinte foi: *"espelho tinha 7 trechos e 0 cenas de arte para 21 min"*.

**Os dois números da nota estavam errados, e nenhum dos dois veio de uma medição:**

- **"7 trechos"** é `espelho._fronteiras.length` — a lista de fronteiras de capítulo. O campo do
  contrato é `segmentos`, e ele tinha **122**.
- **"0 cenas de arte"** é o `renders:0` da própria fila. Havia **59 HTMLs no disco**, e a estação de
  arte simplesmente ainda não tinha renderizado nada.

**E as 9 "sobreposições" eram a estrutura funcionando.** Todas as 9 eram pares mãe→filha de **run
fundido**: 10 cenas com `_mergedInto`, que vivem DENTRO da janela da mãe por design — a mãe cobre o
run inteiro e a filha é um beat dela, sem HTML nem clipe próprio. O `despachante.mjs` (`idsEspelho`)
e o `cenas-reais.mjs` já filtravam `_mergedInto`; o `checar-plano.mjs` era o único que não sabia, e
por isso media a mãe contra a própria filha e chamava de invasão (até −22,4 s).

**O que a medição real disse, com o espelho restaurado e os gates rodados:** contrato ✓ ·
`qc-espelho-midia` PASS (50% de pedido de registro real, contra mediana 44,6% do acervo) ·
`qc-deserto-real` PASS (maior janela 62 s, piso 180 s) · `qc-espelho-modelo` PASS (122/122 declaram
`modelo` válido) · `qc-espelho-fala` PASS · `qc-fusao-espelho` PASS (9 runs, 10/10 filhos) ·
0 gap · 0 sobreposição real · cobre 0 → 1263,000 s exatos do master · `inSec` da primeira cena = 0 ·
0 janela `0 < dur < 2 s` · 0 segmento fora da grade de 30 fps · apresentador 12,3% (alvo 12%) ·
**interseção de `id` com os HTMLs do disco: 59 de 59, zero órfão.**

**O custo evitado, que é a razão da lei:** re-espelhar teria queimado Opus nas 122 cenas e, pela
[SIS-8]/OFÍCIO §8, emitido identidade nova — órfãos os 59 HTMLs, as ~50 pastas de `_media/<id>` da
pesquisa, a regência e os textos de tela, todos ancorados nesses mesmos `id`. É o desastre dos ~175
arquivos, de novo, e desta vez por um alarme que a própria casa emitiu.

**A régua:** *ferramenta que imprime "ajustar antes de produzir" não é advisory na prática — é
veredito.* Quem chega depois não abre o código para descobrir que aquele aviso ignora um campo. Todo
gate que compara janelas de cena tem de filtrar `_mergedInto`/`mergedInto`, como os outros dois já
faziam. E **antes de condenar um artefato caro, cruze o `id` dele com o que existe no disco**: 59 de
59 casando é a prova, em um comando, de que o espelho e a arte são a mesma versão.

⚠️ E o corolário sobre a NOTA DA FILA: ela é herdada como fato pela sessão seguinte, sem fonte e sem
como conferir. Nota que condena artefato tem de trazer o comando que mediu — sem isso ela é um
boato com autoridade de registro.

### SIS-266 · Bug consertado numa das duas cópias DO MESMO ARQUIVO volta pela que ficou (10/ago/2026) 🟢 FECHADA

**O caso, medido no `orcas-nao-matam`.** O `qc-espelho-cortes.mjs` pergunta duas vezes "esta cena é
um card de título?", a ~60 linhas de distância. Em 09/ago a pergunta de baixo (lente `engolida`) foi
reescrita para reconhecer o card pela ESTRUTURA (`gapSec > 0`) e ganhou `titulo-topico` na lista de
modos, com um comentário de 20 linhas medindo o caso do `especies-humanas`. A de cima (lente
`gap-ocupado`, linha 138) ficou como estava: `id` com "card"/"titulo" **ou** `modo === "card-titulo"`,
exatamente. O comentário novo até se refere a ela — *"a guarda acima nasceu certa e reconhecia o card
por dois sinais frágeis"* — sem consertá-la.

Aqui os cards se chamam `t01`–`t04` e o modo é `titulo-topico`: **nenhum dos dois sinais casa**. O
gate deu **4 REPROVAS acusando os próprios cards de invadir o vão do card**, com o conserto sugerido
("termine a cena antes do vão. O vão é do card") apontando para as únicas 4 cenas que já estavam
certas.

**O custo não é o falso positivo — é que ele AFOGA o achado verdadeiro.** No mesmo laudo havia 1
reprova legítima (`c21` atravessando o vão inteiro do `t03`). Ler "5 REPROVAS" num espelho recém-
remapeado empurra para a conclusão errada: *o remap quebrou tudo, refaça*. Refazer teria emitido
identidade nova e orfanado 28 HTMLs e 28 clipes 4K pagos ([OFÍCIO §8]). Mesma família da [SIS-265],
de ontem, e do alarme em lote que pôs três espelhos sãos em quarentena `_refazer-10ago/`.

**Duas regras.** (1) Ao consertar um predicado, **grepe o arquivo inteiro pela pergunta**, não pela
linha do laudo: `ehCard`, `ehCardDe`, `ehCardEmCorteDeTitulo` eram três nomes para a mesma pergunta,
e duas viviam no mesmo arquivo. (2) Quando existe dono importável — e existia, `ehCardDeTitulo` em
`src/modos.mjs`, com [FIN-80]/[FIN-85]/[FIN-46] já embutidas —, **importe**; predicado reescrito à
mão nasce velho.

Agentes-raiz: `scripts/qc-espelho-cortes.mjs:138` (agora importa `ehCardDeTitulo`) e
`scripts/decupagem/remapear-espelho.mjs:121`, que tinha a versão certa por coincidência.

---

### SIS-267 · Filha de RUN FUNDIDO contada como cena que falta — 4 vídeos PRONTOS acusados de arte incompleta (10/ago/2026, `qc-cobertura-arte.mjs`)

**O caso.** O `galaxia-arco-flecha` tem **52 cenas reais** e as 52 estavam desenhadas. O
`qc-cobertura-arte.mjs` dizia **"pedem 70 · arte 43 · FALTAM 27"** — e o vídeo girou render →
pesquisa → **arte**, estação que não tinha uma linha de HTML para escrever.

**O mecanismo.** O gate descontava um único modo (`apresentador`, que usa o master) e **não
descontava `_mergedInto`**. Filha de run fundido não leva HTML **por design**: a mãe cobre a janela
inteira do run, e gerar o HTML da filha produz DUPLICATA — é o bloco *"NÃO GERAR (já fundidas na
mãe)"* que o `cenas-reais.mjs` imprime. Eram 18 cenas fantasma só neste vídeo.

**O que o número errado escondia.** Os outros 9 do denominador eram reais, mas de outra natureza:
HTML **pronto**, em quarentena fora de `graphics/` porque a mídia é de acervo proibido. Somados aos
18 fantasmas viraram "27 faltando", que lê como *a arte não foi feita* — quando o certo era *a arte
está feita e o insumo está bloqueado*, diagnóstico que aponta para PESQUISA.

**O alcance, medido depois do conserto** (`!SEM_HTML.has(modo) && !fundida(c)`): `ceuta` 15→**0**,
`mamute-de-volta` 24→**0**, `o-acre` 4→**0**, `orcas-nao-matam` 1→**0**, `cerebro-quando-sonha`
3→1, `galaxia` 27→9. O rodapé *"onde clipes==arte esconde cena que falta"* caiu de 4 para 1. Quatro
vídeos COMPLETOS eram acusados de arte faltando.

**A regra.** Quem conta cena contra o espelho desconta as duas classes: `modo === "apresentador"`
**e** `_mergedInto`/`mergedInto`. O despachante (`despachante.mjs:350`) já fazia isso desde o
`orcas-nao-matam`, e 9 outros scripts também — o `qc-cobertura-arte` era o único de fora. *Quando
dez leitores do mesmo arquivo aplicam um filtro e um não aplica, o ímpar não é uma variante: é o
bug.*

**E a lição de processo.** Tirar artefato PRONTO da pasta canônica para protegê-lo (foi o certo:
render das 9 seria desperdício garantido) o torna **invisível para quem conta** — e o vídeo volta
para a estação que já terminou. Quarentena precisa deixar rastro que o contador leia; enquanto não
deixa, quem despacha lê "arte incompleta" e gasta uma sessão inteira para descobrir que não há o
que fazer.

Agente-raiz: `scripts/qc-cobertura-arte.mjs` (consertado aqui).

### SIS-268 · Nome próprio na tela é CAIXA ALTA, e era exatamente a caixa que o propagador não olhava (10/ago/2026, `propagar-grafia.mjs`, textos do `quao-fundo-terra`)

O `propagar-grafia.mjs` rodou com o par `"Evereste" → "Everest"`, anunciou **`7 campo(s) com grafia
corrigida`** e **`conceito-visual.json — 0 campo(s)`**, e deixou de pé, nos dois arquivos, as únicas
duas ocorrências que eram **instrução direta de texto de tela**:

- `espelho.segmentos[76].motivo` = *"Grafia de tela: **EVERESTE** (…)"*
- `conceito-visual["s77-everest-e-fossa"].tecnica` = *"Grafia: **EVERESTE**."*

**O mecanismo.** O script já tratava caixa — mas só para chave que começa em MINÚSCULA (termo comum
tipo `angrito`, que casava `gui` e devolvia a caixa achada). Chave em MAIÚSCULA era tratada como
nome próprio e casava **sensível à caixa**, com a justificativa de que *"'bel' solto não é o
sobrenome de ninguém"*. O medo estava certo quanto à minúscula e cego quanto à outra ponta:
**CAIXA ALTA de nome próprio não tem ambiguidade nenhuma** — `EVERESTE` só pode ser o nome —, e o
comentário do próprio script, três linhas acima do bug, já dizia que *"rótulo de tela quase sempre é
escrito em CAIXA ALTA"*. Ele cobriu a caixa no caso que quase nunca vai para a tela (termo comum) e
não cobriu no que quase sempre vai (nome próprio).

**Por que foi pior que não ter corrigido.** O `motivo` foi corrigido **pela metade**: a menção em
minúscula virou "Everest" e a instrução em caixa alta continuou "EVERESTE". O campo passou a dizer
*"Grafia de tela: EVERESTE (o roteiro escreve 'Everest'; a narração diz 'Everest' — usar a forma
aportuguesada corrente)"* — uma ordem que **contradiz a própria justificativa**, num campo que o
`editor-de-arte` lê como instrução. Quem obedecesse escreveria o nome errado na tela com a
consciência tranquila, e nenhum QC de cena pegaria: olhada sozinha, a cena está fiel ao insumo que
recebeu. É a [SIS-263] sobrevivendo à ferramenta feita para matá-la.

**E o relatório mentiu nas duas direções.** "7 campos corrigidos" leu como *fechado* num campo
corrigido pela metade, e "0 campos" leu como *limpo* num arquivo que tinha a instrução errada. Vale
o que a estação TEXTOS já manda: **não confie na contagem — varra com `grep -i` o arquivo inteiro.**

**O conserto.** Para chave que começa em maiúscula, casar duas formas: a exata **e** a
`toUpperCase()`. A minúscula fica FORA, e não por conservadorismo — é o que segura duas referências
reais que sobreviveram corretamente no mesmo vídeo: `needs.geo[0].id = "monte-evereste"` e
`midia_ancora = "…/s77-monte-evereste-aereo.jpg"`. **Id e nome de arquivo são minúscula-com-hífen
nesta casa, e o arquivo no disco continua se chamando assim.** Tornar a busca insensível à caixa
"para pegar tudo" trocaria um rótulo errado por uma cena sem imagem. Provado com 5 casos em teste:
pega `Grafia: EVERESTE.` e `Monte Evereste`; não toca id, nome de arquivo nem `everestes`.

**O limite que fica, e ele pede gente.** Substituidor troca a PALAVRA, não o RACIOCÍNIO em volta
dela. Mesmo consertado, o script produz *"Grafia de tela: EVEREST — usar a forma aportuguesada
corrente"*, que continua incoerente, porque "Everest" **não** é a forma aportuguesada. A frase
inteira foi reescrita à mão, com a medida que a sustenta (G1 + Folha: 54 ocorrências de "Everest"
contra ZERO de "Evereste"). *Onde o insumo explica POR QUE a grafia é aquela, a propagação
automática conserta a ordem e estraga a explicação — releia o campo depois de rodar.*

Agente-raiz: `scripts/decupagem/propagar-grafia.mjs` (consertado aqui). Ver [SIS-263] (o erro que
sobrevive na cópia) e a régua de aportuguesamento do `CLAUDE.md` (o caso Singapura/Cingapura).

### SIS-269 · Interface POSICIONAL que aceita flag no lugar do posicional devolve `ok` sem ter feito nada (10/ago/2026, `shot.mjs`, estação QC do `ceuta-travessia-em-massa`)

`node scripts/shot.mjs <html> <t> <out.png>` é posicional. Eu chamei com `--t=7.5 --out=x.png` — a
forma do `qc-carga` e do `check-overlap`, que é o que a mão escreve sozinha depois de rodar os dois.
O script imprimiu **`ok /tmp/…`** três vezes e o `ls` do destino veio **vazio**.

Dois estragos, e o pior é o silencioso:

- `+T` com `"--t=7.5"` é **NaN**, e `window.__renderAt(NaN)` não recusa: devolve um frame qualquer.
  Fosse só isto, eu teria julgado a arte **por um instante que não pedi** e não saberia.
- `path: "--out=x.png"` faz o Playwright **criar um diretório** `--out=` na raiz do repo. Não é lixo
  inerte: é caminho versionável nascendo de um erro de digitação, dentro de uma árvore que outras
  sessões commitam — e pela [SIS-211] o `git add` de um arquivo leva o índice inteiro, então o
  diretório-lixo viaja no commit de outra pessoa.

A régua: **quando a interface é posicional, argumento que começa com `--` é erro de chamada, não
valor.** Um script que o aceita não está sendo tolerante — está trocando uma falha barata (exit 2 na
primeira linha) por uma cara (frame errado julgado como certo). E `ok` no stdout é a parte que fere:
o autor da checagem seguinte lê `ok`, não abre a pasta, e a mentira entra no laudo.

O padrão certo já existia na casa, a dois arquivos de distância — o `check-overlap` responde
`✗ argumento 'passo' não é número` e sai. Copiar o guard custou 4 linhas.

*Corolário para quem escreve ferramenta:* imprimir o caminho de saída ao lado do `ok` não prova
nada; quem imprime o caminho é a mesma linha que não conferiu se ele existe. Se o `ok` é caro,
confira o artefato antes de dizê-lo.

Agente-raiz: `scripts/shot.mjs` (consertado aqui — guard nos três posicionais + `Number.isFinite`).

### SIS-270 · A justificativa da regra de conjunto saiu no item ERRADO — decisão de série escrita e não aplicada ao primeiro da fila (10/ago/2026, textos de tela do `orcas-nao-matam`)

O `redator-de-tela` existe para pegar o **erro de conjunto** — o defeito invisível item a item, que só
aparece para quem olha o vídeo inteiro de uma vez. Ele fez exatamente isso: viu que os quatro cards de
título divergiam (`t02` e `t03` traziam "PARTE n", `t01` e `t04` não), julgou certo — *"um vídeo não
pode numerar dois blocos e esquecer os outros dois"* — e escreveu a decisão por extenso no arquivo:

> `_consistencia`: "ou os quatro numeram, ou nenhum. Fixado: os quatro numeram (**t01 = PARTE 1**)."

E entregou o `t01` como `A "BALEIA ASSASSINA" QUE NÃO É BALEIA`, sem o "PARTE 1". A regra estava
certa, escrita, assinada — e aplicada a três dos quatro. O contrato passou `--estrito` (nenhum schema
enxerga isto), e o `t04`, que carregava a justificativa, era um dos que já estavam certos.

**Por que este erro é pior que a omissão:** a justificativa presente declara que a checagem foi feita.
Quem lê depois — o `editor-de-arte`, o QC, a sessão seguinte — encontra a regra escrita ao lado do
item e conclui que o conjunto foi varrido. Omissão convida a conferir; justificativa errada desliga a
conferência. É a mesma família do `ok` que não confere o artefato ([SIS-264]) e do rodapé advisory
lido como veredito ([SIS-265]): **o texto de garantia vale mais que o estado real na cabeça de quem
lê, e por isso ele tem de ser o último a ser escrito, nunca o primeiro.**

A régua, para qualquer agente que escreva laudo, plano ou lista fechada: **depois de redigir uma
justificativa que contenha "os quatro", "todos", "sempre", "nenhum" ou "cada um dos N", pare, liste
os membros do conjunto e confira um a um.** A frase de escopo total é o gatilho — não a conclusão.

Corolário para quem revisa: quando um artefato traz a decisão de série escrita, **não a leia como
prova de que ela foi cumprida — use-a como a lista de verificação que ela é.** Foi assim que este caso
apareceu: o cruzamento dos quatro `na_tela` levou 1 comando, e o campo `_consistencia` disse
exatamente o que procurar.

Agente-raiz: `.claude/agents/redator-de-tela.md` (consertado aqui — item 6 do §4 "Antes de entregar,
valide").

### SIS-271 · Isenção construída com `every` cai inteira por uma menção NEUTRA — e o que reprovou a cena foi o nome da PASTA (10/ago/2026, `qc-midia-real`, estação ARTE do `quasares-primordiais`)

O §3 do `qc-midia-real` caça **mídia fantasma**: caminho de `_media/` que o HTML promete no
comentário e nenhuma linha viva usa. Em 09/ago ele ganhou uma isenção correta — o modo `documento`
(M05) recria o clipping por especificação, então `-clipping.html` e `-prova.png` são procedência
documentada, não promessa quebrada. A isenção foi escrita como `every`: **todos** os caminhos
citados têm de casar o sufixo.

No dia seguinte ela reprovou a `s121-a-fisica-que-a-gente-conhece-nao-da-conta`, que estava certa.
Os caminhos citados no HTML eram dois:

    _media/documento/2021-wang-arxiv-prova.png   → casa a isenção
    _media/documento/                            → a PASTA, escrita em prosa no cabeçalho

O segundo derrubou o `every`, e com ele a isenção inteira. **Um diretório não pode ser mídia
prometida e não usada — nenhuma pasta vira `<img>`.** Ele não é evidência a favor nem contra: é
neutro, e neutro tem de ficar FORA da conta antes de exigir unanimidade.

O custo do alarme falso não é o alarme: é que o veredito manda **refazer arte paga**. A cena tinha a
recusa do Fable fundamentada no próprio cabeçalho (o clipping pré-gerado parafraseava e fundia a
descoberta de 2021 com a de 2026; ele citou Wang et al., ApJL 907, L1 verbatim e guardou a prova em
disco). Quem lesse só o veredito refaria uma cena melhor que a substituta.

**A régua: antes de exigir que TODOS os itens satisfaçam um predicado, remova do conjunto os que não
podem satisfazê-lo nem violá-lo.** `every` sobre um conjunto sujo é uma isenção que se auto-anula, e
o modo de falhar é silencioso — ela simplesmente para de valer, e o gate volta a reprovar o que a
isenção existia para proteger.

Corolário na hora de escrever o filtro: `[].every()` é `true`. Depois de limpar o conjunto, exija
que ele **não esteja vazio** — senão a cena que citasse só a pasta ganharia a isenção de graça, que
é o buraco oposto. Aqui: `citados.length > 0 && citados.every(...)`, com 5 casos de regressão
medidos (prova+pasta isenta · clipping+prova+pasta isenta · foto comum prometida REPROVA · mistura
de prova com foto comum REPROVA · só a pasta REPROVA).

Agente-raiz: `scripts/qc-midia-real.mjs` (consertado aqui — o filtro de pasta e a trava do vazio,
com o caso medido no comentário de bloco). O achado estava no `diario.jsonl` do vídeo desde as
15:05 com o dono em aberto ("quem for consertar, conserte o gate, não a cena"); consertar o gate
custou 1 edição e devolveu `✓ mídia-real OK` sem tocar em nenhuma cena.

### SIS-272 · Métrica de qualidade com o NÃO-FEITO no denominador condena o trabalho em andamento — e o gate imprimia "fora da conta" para o que estava dentro dela (10/ago/2026, `qc-midia-real` §4, estação ARTE do `quasares-primordiais`)

O §4 mede se o vídeo tem registro real de mundo ou é só desenho: `atendidas / cenas de arte`, piso
de 25%, e **reprova sob `--estrito`**. Com a arte a meio caminho ele anunciou:

    razão de mídia real ......... 7.6% das cenas de arte
    ℹ 23 cena(s) que pedem mídia ainda sem HTML — arte não desenhada, fora da conta.
    ⚠ §4 · RAZÃO ABAIXO DO PISO — 7.6% < 25%. O vídeo é quase todo desenho: confira se a
      caça de mídia rodou de verdade.

As duas linhas se contradizem. As 105 cenas ainda sem HTML **não estavam fora da conta**: estavam no
denominador, contadas como se tivessem falhado. A conta honesta — só o que já foi desenhado — dava
**37,0%**, acima do piso, e entre as que pediam registro real e já tinham HTML, **61,5%**. A caça de
mídia tinha rodado; o que faltava era o Fable desenhar o resto, num dia de 1 porta viva em 10.

**Cena não desenhada não é cena que virou desenho sem mídia — ela não é nada ainda.** Métrica de
qualidade só pode dividir pelo que teve chance de satisfazê-la.

O dano tem duas caras. A barata: o conselho fica errado ("confira se a caça rodou" quando o que
falta é desenhar), e alarme que grita à toa ensina a ignorar o alarme — o mesmo defeito que já
custou o "HOLD MUDO … 41% de fala". A cara: como o §4 REPROVA sob `--estrito`, **todo vídeo
auditado no meio da produção era condenado por aritmética**, e o único conserto que a mensagem
sugere é refazer uma caça que estava certa.

**A régua, para qualquer gate que meça proporção de trabalho: o denominador é o universo do que já
foi PRODUZIDO, nunca o do que foi PLANEJADO.** Se o relatório precisa citar o planejado, cite-o como
linha à parte ("105 de 132 ainda sem HTML — fora do denominador"), nunca diluído na razão. E
**escreva o denominador junto do percentual** — razão sem base é número que cada leitor completa do
próprio jeito.

Sintoma para reconhecer o mesmo bug em outro gate: o relatório contém uma frase declarando que algo
está "fora da conta", "não entra", "ignorado" — e a conta logo acima não o exclui. Quando um
programa escreve a intenção e o código diverge, **é o código que está errado**, porque a frase foi
escrita por alguém que sabia qual era a regra certa.

Regressão medida antes de fechar (4 vídeos com arte grande, todos ✓ antes e ✓ depois): `ceuta`
68,9% · `dentro-do-sol` 52,4% · `mamute-de-volta` 45,3% · `o-acre` 74,6%. Nenhum veredito mudou —
com a arte fechada os dois denominadores coincidem, e é por isso que o defeito sobreviveu tanto
tempo: **ele só aparece em quem é auditado no meio do caminho.**

Agente-raiz: `scripts/qc-midia-real.mjs` (consertado aqui — `arteDesenhada`/`pedemAlgoDesenhadas`
no denominador, base escrita no relatório e linha do que ficou de fora). Irmã de [SIS-271], do mesmo
gate e do mesmo dia, mas de raiz diferente: aquela é isenção que se auto-anula, esta é denominador
inflado.

### SIS-274 · Registro que não desce até onde se pergunta é registro ausente

**10/ago/2026.** O mesmo fato — *este vídeo foi entregue* — vivia em três lugares:
`entregas/<ano>/<slug>/ENTREGA.json` no bucket (a fonte), `out/_ENTREGAS.md` (derivado) e o
`estudio.db` (tabelas `entrega` e `pauta`). **Ninguém escrevia o terceiro.**

Medido: `entrega` tinha **13 linhas para 53 entregas**, e **nenhum** dos 9 vídeos de agosto tinha
`youtube_id` em `pauta`. Como o `coletar-youtube.mjs` casa vídeo↔produção por `pauta.youtube_id`, o
relatório diário acusava **15 de 15 vídeos recentes** como *"no ar que NENHUMA pauta reivindica"* —
inclusive os corretamente registrados no bucket. *Um alarme que dispara para tudo não distingue
nada, e ensina a ignorar o relatório inteiro.*

**O dado não faltava: faltava a descida.** E o lugar onde ele faltava era justamente o que os
agentes consultam — os dois lugares certos eram os dois que ninguém lê em tempo de decisão.

**Duas armadilhas que o conserto revelou, e que valem além deste caso:**

1. **A chave estrangeira transformava ausência em silêncio.** `entrega.slug REFERENCES pauta(slug)`,
   com as FKs LIGADAS por padrão no `node:sqlite` (medido) — sem pauta, o INSERT falha e a entrega
   simplesmente não existe. A saída não foi afrouxar a FK (o desenho está certo: todo vídeo entregue
   teve uma pauta) e sim **materializar a pauta faltante**, marcada, com `pauta_evento` contando de
   onde veio. Derivar do fato consumado não é inventar dado.
2. **`CREATE TABLE IF NOT EXISTS` não migra nada.** O `CHECK` de `entrega.status` não conhecia
   `despublicado`, que o `_ENTREGAS.md` já usava havia dias. Schema versionado que diverge do disco
   é invisível até um INSERT legítimo falhar. Nasceu daí o `scripts/db/migrar.mjs`, versionado por
   `PRAGMA user_version`.

**A pergunta para todo registro novo:** *em qual dos lugares onde este fato mora alguém vai
PERGUNTAR por ele?* Se a resposta não for o lugar onde você o escreveu, o registro está incompleto —
e a falha vai se parecer com um alarme barulhento, nunca com um erro.

### SIS-275 · `cp` de um arquivo do repo para outro lugar do repo é uma ruptura de linha

**10/ago/2026**, ao escrever a `docs/SPEC-COMPILADOS.md`. O `acervo/topicos.mjs` grava a proposta de
compilado em `var/estado/proposta-compilado.json`; o `compilado/compilar.mjs` **recusa começar** sem
`out/<proj>/_reaproveitamento.json` e imprime *"Depois copie/mova pra out/<proj>/"*. Duas ferramentas
do mesmo repositório, ligadas por um humano com um `cp`.

O efeito não é o incômodo do comando extra: é que **nenhuma automação atravessa esse ponto**. Toda a
linha a jusante (que existe inteira e funciona) fica inalcançável para qualquer despachante, timer ou
agente — e o diagnóstico erra o alvo, porque as etapas seguintes *parecem* ser o problema quando são
o sintoma.

O mesmo padrão apareceu no compilado em dois lugares mais: `scripts/navegacao/gerar.mjs` existe,
tem template, tem agente e tem lei — **e nenhum script o chama**; os três QC do compilado idem.
*Capacidade construída e não ligada é a família de defeito mais recorrente desta casa* — e ela se
detecta por uma pergunta só: **quem chama isto?** Se a resposta for "uma pessoa, quando lembra", a
capacidade não está pronta; está escrita.

### SIS-276 · O denominador é a primeira coisa a conferir, e o dono é quem o desmente

**10/ago/2026.** Reportei a cobertura de dados do canal sobre **679 vídeos**. O Mateus respondeu com
duas frases que derrubaram a medição inteira:

> *"Que porra é essa de «24 HORAS DE MACONHA LEGALIZADA»? Não é vídeo meu. Você também disse 679
> vídeos, mas o canal tem publicado 487."*

Ele estava certo nas duas. O vídeo **é** do canal dele (`channelId` conferido) — mas é **unlisted**.
A playlist de uploads devolve tudo que o dono subiu: público, não listado e privado. Medido item a
item: **458 públicos · 217 não listados · 3 privados = 678**.

**Nada disso dava erro.** As porcentagens saíam plausíveis, as barras desenhavam bonito, e a
conclusão — "46% dos vídeos têm capítulos catalogados" — estava errada por diluição: o número real
sobre o que está no ar é **69%**. *Universo errado não falha: devolve resposta com a forma certa.*

**Três regras que saem daqui:**

1. **Ao medir cobertura, declare o universo ANTES do numerador** — e prefira o universo que a
   pessoa tem na cabeça. Para um dono de canal, "o canal" é o que está no ar; o arquivo é outra
   pergunta. O relatório passou a imprimir `459 vídeos NO AR` e `(220 fora do ar … excluídos)`.
2. **Contador agregado não substitui contagem item a item.** O `statistics.videoCount` diz 487 e a
   contagem direta dá 458 — a diferença de 29 **segue sem explicação**, e é por isso que a contagem
   direta é a que vale. Dizer "não sei explicar a diferença" é resultado; escolher em silêncio o
   número que agrada não é.
3. **O conserto é no COLETOR, não no relatório.** O `listar-canal.mjs` passou a gravar
   `privacidade` e `duracaoSeg` em cada registro. Enquanto o dado não existisse no cache, todo
   consumidor futuro repetiria o mesmo erro — e a régua de elegibilidade do acervo (">3 min,
   público") era consultada por um `videos.list` inteiro à parte, toda vez.

**E a lição sobre quem revisa:** *o dono reconhece o próprio catálogo melhor que qualquer
verificação automática.* Um título estranho na lista foi o que expôs um defeito que passou por
gate, por medição e por três relatórios meus. Quando ele disser "isso não é meu", a hipótese padrão
não é que ele esqueceu — é que o recorte está errado.

### SIS-278 · Rodapé de laço interrompido descreve o RECORTE e se apresenta como o TODO

**10/ago/2026.** Reportei ao Mateus que o material livre para compilado estava apertado: *"33
capítulos · 1,12 h disponíveis"* pela régua de 1 h, e 93 · 3,00 h pela de 3 h. Ele perguntou: *"o
disponível TOTAL é só aquilo ali? É real o total?"*

Não era. O `livres()` tem `if (horas && acum >= horas * 3600) break;` — ele **para de contar quando
atinge o alvo pedido**. Com `--horas=1`, o rodapé somava só os capítulos listados até fechar 1 hora.
O estoque real é **5.192 capítulos · 132 h** (régua de 1 h) e **5.614 · 144 h** (régua de 3 h).

**Errei por dois graus:** li um número truncado como total, e o interpretei como escassez —
concluindo, em texto, que "o material livre está apertado hoje". *A conclusão errada não veio de um
dado errado: veio de um dado certo com o rótulo errado.* Os números 1,12 e 3,00 são exatos; o que
mentia era a palavra "disponíveis" ao lado deles, e o fato de baterem quase exatamente no alvo
pedido — que deveria ter sido o sinal, porque um estoque que coincide com a meta é suspeito.

**A regra:** quando um laço pode ser interrompido (`break`, `limit`, `slice`, `head`), o resumo
final **calcula o universo ANTES do laço** e imprime os dois com nomes distintos:

```
ESTOQUE: 5192 capítulo(s) · 132.2 h   —   listando os melhores até 1 h
RECORTE listado: 33 capítulo(s) · 1.12 h (alvo 1 h)
```

**O sinal para revisar:** um total que casa suspeitosamente com o parâmetro que você passou. Se
pediu 1 h e o "total disponível" deu 1,12 h, você está lendo o recorte.

E o meta-ponto: *quem tem o modelo do negócio na cabeça detecta o número implausível antes de
qualquer verificação automática*. O Mateus não abriu o código — só achou o número pequeno demais
para um canal com 5 mil capítulos catalogados.

### SIS-279 · Colisão de ID se resolve pelo maior LIVRE do domínio, e o desempate é a citação viva

**10/ago/2026.** O gate `regras-todas.mjs` bloqueou a regeneração do corpo de busca por dois IDs
duplicados — `ARTE-191` e `REND-102` —, e ambos os pares já estavam no remoto, o que anula a régua
da [SIS-62] ("quem já está no remoto fica").

**Como as duas colisões nasceram:** as duas leis "perdedoras" haviam sido renumeradas em 09/ago
*para resolver uma colisão anterior* — `ARTE-174 → 191` e `REND-48 → 102` — e pousaram em números
que outra sessão usaria em seguida. **Corrigir colisão sem consultar o maior ID livre do domínio
produz a colisão seguinte.** Aqui produziu duas, no intervalo de um dia.

**O desempate, em ordem:**
1. **Citação viva vence.** `ARTE-191` "piso de herói" é citada por `.claude/agents/editor-de-arte.md`;
   a "line-height" não é citada por ninguém de fora. Renumerar a citada quebraria quem a segue.
2. **Sem citação de nenhum lado, vence a ORIGEM:** fica com o número quem NASCEU nele; quem foi
   movida para lá se move de novo (foi o caso de `REND-102`).
3. O destino é sempre `maior ID do domínio + 1` — conferido no arquivo do domínio **e** no remoto.

E a nota 🔀 registra os DOIS saltos, não só o último: quem lê a lei antiga precisa poder seguir a
trilha inteira, senão a renumeração vira apagamento com outro nome.

### SIS-280 · Falha que resiste à retentativa e some quando ISOLADA é limite de taxa, não defeito do item

**10/ago/2026.** Dois lotes de transcrição devolveram `HTTP 403: unable to download video data` em
**13 de 28 itens**. O script já tratava 403 como transitório — 3 tentativas com backoff de 15 s/30 s
—, e a leitura fácil era que a rede estava ruim. Os MESMOS 5 vídeos falharam nos dois lotes, seis
tentativas cada, o que parecia confirmar "defeito próprio desses vídeos".

**O teste que derrubou a hipótese:** rodar o comando **idêntico, isolado, no shell** — mesmas flags,
mesmos cookies, mesmo vídeo (`zk0AyJ45KJo`). Baixou **46 MB em 8 segundos**, de primeira.

Não era o vídeo, nem o comando, nem o cookie: era o **RITMO**. O laço disparava um download atrás do
outro, e o YouTube limita downloads seguidos do mesmo IP.

**Por que a retentativa piorava:** cada tentativa rápida reforça o motivo do bloqueio, e as três
somadas gastam ~45 s para reconfirmar o que a primeira já disse. *Retentar é a pior resposta
possível a um limite de taxa* — e é a resposta padrão de quase todo código de rede.

**Como distinguir as duas, já que no log são idênticas:**

| sintoma | defeito do item | limite de taxa |
|---|---|---|
| isolado, fora do lote | falha igual | **passa** |
| itens vizinhos no mesmo lote | passam | falham também, em proporção |
| aumentar o backoff dentro do item | não muda | não muda (a janela é do LOTE, não do item) |
| espaçar ENTRE itens | não muda | resolve |

**A pergunta que separa:** *o que muda quando eu tiro este item do lote?* Se ele passa sozinho, o
problema nunca foi dele. E o conserto não é no tratamento do erro — é no **ritmo do laço**
(`--pausa`, 20 s por padrão aqui).

---

⚠️ **CORREÇÃO, no mesmo dia, e ela é a parte mais importante desta lei.** Escrevi o texto acima
depois de UM teste isolado bem-sucedido, e o dei como causa fechada. Os testes seguintes mostraram
que a explicação cobria só PARTE dos casos:

| lote | resultado |
|---|---|
| 5 itens, sem pausa | 0 de 5 |
| 5 itens, `--pausa=25` | **2 de 5** — a pausa ajudou de verdade |
| 1 item isolado (`zk0AyJ45KJo`) | **passou**, 3.366 palavras |
| 2 itens, `--pausa=90` | **0 de 2** |
| **1 item isolado, à mão, todos os formatos** (`sFOTQDjqJPA`) | **falhou** — 403 em `140`, `249`, `251` |

Ou seja: para 3 dos 5, era ritmo — e a pausa é o conserto certo. Para os outros 2, **não é**: eles
não baixam por nenhum meio, nem isolados, nem no shell, em nenhum formato. É recusa do próprio
YouTube àquele conteúdo (os dois são compilados longos), e nenhuma dose de espera resolve.

*Uma causa que explica parte dos casos e é anunciada como a causa faz parar de procurar a outra.*
A primeira versão desta lei tinha uma tabela de diagnóstico bonita e teria mandado a próxima sessão
aumentar a pausa indefinidamente contra um vídeo que nunca ia baixar. **Confirme a hipótese no caso
que MAIS resiste, não no primeiro que cede** — o teste que fecha um diagnóstico é o do pior caso,
porque é ele que revela a segunda causa.

---

### SIS-282 · Quando duas sessões dividem o disco, o recurso disputado é o ARQUIVO — a trava mora no código, não no `ps` de quem roda

**10/ago/2026, e o erro foi meu.** Duas sessões de Claude Code na mesma pasta. Uma conduzia o
download do `ceuta`; a outra — eu — mediu a rota, viu que a ponte pelo bucket era 10× mais rápida,
**matou o processo alheio** para trocar de rota, e o Mateus cortou: *"não mexa no download do Ceuta,
deixa rodar, a outra sessão que tá rodando e vigiando."*

**O estrago não parou no que eu matei, e é aí que está a lei.** Ao religar, encontrei o processo já
de pé (a outra sessão o havia retomado sozinha 2 min antes) e criei um **segundo**. Por onze
segundos, **dois `scp` escreveram no MESMO arquivo de destino**. A interrupção anterior ainda deixara
dois clipes truncados — um com 96 MB a menos, outro com **0 byte** —, e ambos *existiam* no disco:
qualquer verificação por presença os daria como prontos. Só a comparação de TAMANHO contra a origem
os revelou.

**Por que a regra que já existe não cobre isto:** *"sessões paralelas na mesma pasta usam árvore de
trabalho própria"* protege o **git**. Aqui a árvore é compartilhada de propósito — o destino é o
disco do Mac onde o Premiere vai abrir, e ele é um só. O recurso disputado não é o ramo: é o
**arquivo**.

**A régua:** *toda operação longa que escreve num destino compartilhado precisa de trava por
destino, no código.* Trava que depende de quem roda lembrar de conferir `ps` antes não é trava — é
etiqueta. E a trava certa **recusa e aponta quem já trabalha**, em vez de somar: diante de um
download em curso, a resposta quase sempre é acompanhá-lo, não lançar outro. A casa já sabia disso
em dois lugares (`trava-caca.mjs` no bucket, LOCK GLOBAL no `render-one.sh`) e o download não tinha.

Feito: `out/<proj>/.baixando.lock` com PID e hora, exit 3 com o PID do dono, liberação automática na
saída (inclusive por sinal), e trava de processo morto é assumida em vez de travar para sempre —
trava sem vencimento é a doença gêmea. **E a lição de verificação, que vale além disto:** arquivo
interrompido no meio *existe*; a prova de que ele chegou é o tamanho, nunca a presença. Ver
[[SIS-281]].

### SIS-283 · Notícia pobre não sobrescreve medida cara — quem não sabe a hora não apaga a hora de quem sabia

**Onde:** `scripts/quota/registrar-limite.mjs` (`registrar()`), o gravador que a cascata chama toda
vez que uma conta bate no teto. 10/ago/2026, `quasares-primordiais@arte`.

A mensagem de teto do **Fable não traz horário** — é `"This request would exceed your account's rate
limit. Please try again later."` e nada mais. `sondar-fable.mjs` sabia disso e tinha a segunda fonte:
o reset **semanal** que `ler.mjs` já mede (`var/estado/quotas/geral.json`), porque os dois tetos viram na mesma
virada. A `registrar()` da cascata **não tinha** — e gravava `reseta: resetParaISO(bruto)`, isto é,
`null`, por cima do horário que a sonda tinha levantado porta a porta. O objeto era reescrito
inteiro, então o `serve: false` medido também sumia.

**O estrago:** com `reseta: null`, o `estadoFable()` devolve `serve: null` = *desconhecido-mas-fresco*,
e a sonda sem `--todas` responde "nada a sondar" em vez de medir — o vício que a memória já registrava
sobre ela. O que se perde é caro: a sondagem porta a porta custa ~10 chamadas de relógio, e UM 429 de
lote apagava as dez de uma vez. *O caminho quente apagava, a cada lote que morria, exatamente a
informação que a sonda existe para produzir.*

⚠️ **O QUE ESTA LEI NÃO AFIRMA — e a distinção custou uma verificação que quase não fiz.** Escrevi
primeiro que este defeito havia causado o destravamento falso da noite (a fila anotada às 22:04 como
*"destravado: cota livre nas duas medições — claude-fable-5 respondeu (sonda OK na conta 1 em 7s)"*,
acordando uma sessão de Opus contra dez portas fechadas). **É falso, e por leitura de código:**
`destravar-cota.mjs` não lê `quotas-fable.json` — a prova dele é `quotas.json` mais uma sonda AO VIVO.
O destravamento veio da sonda ao vivo, não do registro rebaixado. Reproduzida às 23:25 com os mesmos
argumentos e o mesmo papel, a mesma sonda devolveu `limiteEmTodas` nas 10 contas em 60 s — ou seja,
hoje ela **não** destravaria. Por que respondeu OK em 7 s às 22:04 segue **não explicado**; o
`planeta-em-meteorito@arte` batia 429 às 21:38, o que torna "havia vaga e ela foi consumida" possível,
e nada no que medi decide. *Defeito real mais consequência plausível não é cadeia causal medida — e
lei com causalidade emprestada envenena o repositório com uma certeza que ninguém verificou.*

**A régua:** *escrita que registra um fato pobre não pode sobrescrever um fato rico sobre a mesma
coisa.* Antes de gravar, pergunte o que o registro **já sabia** e se o que você traz é melhor. Aqui:
hora da mensagem → hora já sabida (se ainda futura) → reset semanal. E o par disto, que é o que fez o
defeito passar despercebido: **campo apagado não vira "sem informação", vira "desconhecido" — e
desconhecido, num sistema que decide por ausência, é lido como PERMISSÃO.** `null` não era neutro;
era um "pode ir".

Feito: fallback para o reset semanal movido para `registrar-limite.mjs` e exportado (`resetSemanal`),
com `sondar-fable.mjs` passando a importá-lo — fonte única, um comportamento só; hora conhecida e
ainda futura é preservada quando a nova mensagem não traz nenhuma; `serve: false` sobrevive quando o
modelo é o mesmo (429 de Opus não herda veredito de arte). Regressão: 6 casos (hora preservada, serve
preservado, fallback semanal em conta nova, hora nova vencendo a velha, hora vencida caindo, Opus não
herdando) + a prova no caminho real — um ciclo completo de 429 nas 10 portas com as **10 horas de pé
depois**, quando antes o mesmo ciclo zerava todas. Ver [[SIS-272]], o mesmo vício de outro ângulo: lá
a conta mentia, aqui o registro esquece.
### SIS-284 · Item ISENTO não é item auditado — o gate que conta os dois juntos aprova o vazio

O `qc-procedencia.mjs` já tinha uma guarda contra denominador zero: pedir um projeto e não achar
nada devolvia `✗ RECUSADO — não achei mídia NEM cena. Isso não é "limpo": é nada para olhar.`
Boa regra, e ela **não pegou o caso real**, porque exigia laudo NENHUM.

Medido em 10/ago/2026, no `ceuta-travessia-em-massa`, rodando no Mac depois do `baixar-entrega`:

```
ceuta-travessia-em-massa     1 item   0 provada   1 isenta   0 s/prova   0 proibida
✓ PASS — toda a mídia de acervo tem procedência PROVADA
```

Um item. O projeto tem **70 footages no bucket**, dos quais **43 vieram do YouTube**. O único
arquivo local era o `_master-decupado.mp4`, isento por nome — e ele sozinho bastou para desarmar a
guarda e liberar o `PASS`. A pergunta que originou a auditoria ("a mídia deste vídeo é limpa?")
foi respondida com um selo verde por um gate que não olhou mídia nenhuma.

**Por que isto é sistemático, e não um azar deste projeto:** toda máquina que baixa só a entrega
para editar fica exatamente nesse estado — master presente, mídia ausente. É precisamente quando
alguém vai publicar que a pergunta se faz, e é precisamente aí que o gate mente.

**A régua:** *o denominador de um gate é o que ele PODIA reprovar, nunca o que ele leu.* Isento,
por definição, nunca reprova — somá-lo ao total infla a cobertura com itens que não carregam
informação. Onde houver categoria "não se aplica", ela sai da conta antes do veredito, e um
projeto cujo auditável dá zero recebe *não sei*, jamais *passou*. **E "não sei" tem de dizer o que
fazer**: aqui, que a mídia mora na VM, e o comando de auditar o bucket.

Feito: `semNadaAuditavel` (auditável = `total − isentos`, mais as referências em cena) reprovando
com instrução de máquina. Prova dos dois lados — pega o `ceuta` real, e um projeto sintético com
mídia auditável segue reprovando pelo motivo certo, sem alarme novo. Alarme falso
é bug de prioridade alta — ver o caso gêmeo do denominador tautológico no painel de cobertura.

---

### SIS-285 · Agente sem a roupa da marca não dá erro — ele escreve em voz de ninguém, e o estado "vestido" precisa de verificação própria

**10/ago/2026.** O carregador em `.claude/agents/` traz o **ofício puro** (portátil, serve a qualquer
canal) e recebe um **ponteiro** para a roupa: o rodapé com o caminho de `marcas/<canal>/agentes/` e a
ordem *"Leia-a também"*. Sem `--canal=<id>` na geração, o agente sai **neutro** — e neutro é um
estado **válido por desenho**, porque o mesmo cérebro serve `top10`, `mr-banzo`, `clipster` e
`radar-geopolitico`.

**É por ser válido que o defeito é invisível.** Um agente nu não falha, não avisa e não fica lento:
ele escreve, julga e entrega normalmente — só que sem persona, sem público declarado e sem as regras
que só existem na marca. Medido: `roteirista-narracao` e `critico-de-roteiro` estavam nus, ou seja,
**quem escreve o roteiro e quem julga o que ele escreveu**, os dois cegos para o fato de o canal ser
DUBLADO em quatro idiomas — que é a regra que decide *cada comparação do texto* (comparação universal
com o indivíduo; âncora BR só se o tema for brasileiro; o bloco-clímax não concentra exemplo BR
porque o payoff precisa viajar). **E os dois defeitos se escondiam mutuamente:** o crítico que
deveria pegar "isso não soa Top 10" julgava contra a mesma régua incompleta.

**Duas ocorrências, causas diferentes, o mesmo sintoma mudo:**

| quando | causa | alcance |
|---|---|---|
| 07/ago/2026 | a sede mudou de nome (`holding` → `criador-de-canais`) e o caminho fixo do registro morreu; `marcaDoCanal()` devolvia `null` | 42 agentes |
| 10/ago/2026 | dois agentes reinstalados individualmente **sem a flag**, enquanto o lote a usava | 2 agentes — os dois do roteiro |

*Quando um defeito volta por outra porta, a lição não é a porta — é que o estado nunca teve
verificação própria.* Um `null` que significa ao mesmo tempo "não achei o registro" e "o canal não
tem marca" é a forma que esse buraco toma no código; a forma que ele toma na operação é ninguém
perceber que dois agentes ficaram para trás.

**Feito:** `node scripts/qc-agentes-vestidos.mjs`, pendurado no `top10 doctor` §24b. Ele compara as
roupas que existem em `marcas/<canal>/agentes/` com os carregadores instalados e reprova **quem tem
roupa disponível e não a recebeu** — e também quem tem ponteiro para um arquivo que **não existe**
(o defeito de 05/ago, com o placeholder `<marca>` literal). Calibrado nos dois sentidos: passa com os
33 vestidos e os 9 neutros legítimos da sede, e pega os 2 nus reais quando apontado para eles.

⚠️ **E o conserto não é reinstalar por cima.** O arquivo gerado pode ter doutrina que a FONTE não
tem — aqui eram 26 linhas escritas à mão dentro de um arquivo que diz *"GERADO — NÃO editar à mão"*.
A ordem é: **descer para a fonte → reinstalar → conferir o ponteiro**. O instalador protege sozinho
(recusa e lista o que se perderia), mas `--emitir` contorna essa proteção — quem usa o atalho faz o
diff na mão. Ver [[SIS-286]] e a família dos mortos-silenciosos.

---

### SIS-286 · Instrução que não leva ao passo seguinte empurra para o override perigoso

**10/ago/2026.** O `top10 roteirizar novo` terminava imprimindo *"Depois valide e envie"* — e o
`enviar` **recusa** sem o veredito da bancada de críticos. Quem seguisse a instrução ao pé da letra
batia numa porta fechada dois passos adiante, sem ter sido avisado de que existia um degrau no meio.

**O problema não é o erro; é para onde o erro empurra.** Diante de um comando que recusa, o caminho
de menor resistência é a flag que o destrava — aqui, `--sem-bancada`, que existe como *override
declarado para urgência real* e não pode virar hábito. A instrução incompleta **fabrica** o hábito
que o override foi desenhado para evitar. É o mesmo mecanismo do `--include-regex` que não existe
(`CLAUDE.md`, §gotchas): quem vê o comando falhar tira o filtro e roda a versão pelada — que era
exatamente a que apagava cenas.

**E o defeito estava em dois lugares, não um.** O `validar-roteiro.mjs`, ao dar PASS, também imprimia
*"pronto pra 'top10 roteirizar enviar'"* — a mesma porta fechada, dita pelo gate que acabara de
aprovar. Corrigir só a instrução do `novo` teria deixado o segundo caminho intacto.

**A régua:** *toda mensagem de sucesso que sugere um próximo comando é responsável por ele existir e
aceitar.* Antes de imprimir "agora rode X", confira o que X exige — e se X cobra um artefato, a
mensagem cita o comando que o produz, não o que o consome.

**Feito:** a instrução do `novo` virou a **ordem completa da estação com o porquê de cada degrau**
(fundamento → escrita → gate → **bancada** → enviar), sensível ao estado (o degrau já cumprido
aparece marcado, em vez de repetir a lição); o `validar` confere o veredito da bancada antes de
apontar o `enviar`; a bancada ganhou verbo próprio (`top10 roteirizar bancada`, [[SIS-147]]); e as
6 menções ao caminho longo em três scripts passaram a imprimir o verbo — *o comando impresso tem de
ser o que a pessoa digita.*

---

### SIS-287 · A regra certa num módulo não protege ninguém se quem responde ao humano tem a própria cópia

**11/ago/2026.** O Mateus pediu o mapa dos vídeos pendentes. O painel `top10 situacao` deu
`fatos-a380` como **"ENTREGUE — nada a fazer no estúdio"**. O vídeo nunca foi ao ar, e tinha **55
cenas de arte por desenhar**.

**O dado estava certo, e marcado como duvidoso desde o começo.** O registro nasceu
`statusFonte: "presumido"` e o índice o exibia com `⁽ᵖ⁾` — o marcador que a [[SIS-156]] define como o
terceiro estado: PASSOU · REPROVOU · **NÃO MEDIDO**. A biblioteca `scripts/lib/entregue.mjs`
conhecia o marcador, documentava o caso em nota longa e **recusava** tratá-lo como terminal. O
`montar-fila-real.mjs`, que a usa, listava o vídeo corretamente na estação `arte`.

**Só que o `situacao.mjs` tinha um SEGUNDO parser do mesmo `_ENTREGAS.md`** — escrito para capturar
duas colunas que a biblioteca ainda não devolvia (a URL e a data). Essa cópia testava
`/postado|entregue|arquivado/` **por substring**, e `"entregue ⁽ᵖ⁾"` casa. Uma linha adiante,
`entregue: !!reg` selava: *qualquer* registro contava como entrega.

**O resultado é a pior combinação possível: a fila sabia a verdade e o painel mentia — e é o painel
que o humano lê.** Não houve erro nenhum, nenhum log, nenhum alarme. Um vídeo simplesmente sai da
esteira, e *ninguém procura o que o sistema declarou pronto*. Era a **trigésima vez** que esse mesmo
vídeo se perdia assim, pelo relato do próprio Mateus.

**A régua, e ela é mais dura que "não duplique código":** quando um fato tem dono declarado, o
módulo que responde ao humano **consome o dono** — não reimplementa "só a parte que precisa". E a
razão de a cópia nascer é sempre a mesma e sempre inocente: *faltava um campo*. **Faltar campo é
pedido de extensão da biblioteca, nunca licença para um segundo parser.** Mesmo defeito do regex de
cor que o hook mantinha em paralelo ao `qc-hex` (`CLAUDE.md`, §gotchas): as duas cópias divergiram
até o mesmo defeito passar pelas duas, cada uma pelo furo que a outra não tinha.

**Feito:** `lerRegistroEntregas()` passou a devolver `url` e `em` (aditivo — ninguém a consumia
fora da própria lib); o `situacao.mjs` perdeu o parser próprio e passou a importá-la, junto com
`STATUS_TERMINAIS`; e `entregue`/`publicado` agora exigem `provado = !presumido || url` — a URL do
YouTube é **prova observada** e desempata contra o status escrito. Medido contra o índice real de
59 linhas: o único presumido volta a ser pendente, e os não-presumidos ficam intactos.

**Onde mais procurar:** todo lugar que responde "isto já está pronto?" lendo um arquivo que outro
módulo também lê. O sintoma nunca é uma exceção — é uma linha a menos numa lista.

---

### SIS-288 · Piso de data se aperta contra a lista de quem está VIVO, nunca contra o calendário

**11/ago/2026.** Em 08/ago o estúdio produziu do zero — bruto sincronizado, pesquisa inteira,
direção de arte disparada — o `putin-fronteiras-otan` (`MAI_030`) e o `mongolia-lugar-frio`
(`MAI_054`), **dois vídeos no ar desde maio**. O varredor de pautas percorria todos os meses do
Drive sem piso. O Mateus: *"o critério é o mês atual que estamos"*.

**O que fez a pauta velha passar por nova não foi só a falta do piso.** O `pauta-para-slug.json`
dizia `"sem projeto ainda"` para as duas — e essa frase significa **"não há pasta em `out/`"**, que é
o *oposto* de "não foi produzido": a pasta some justamente quando a entrega é promovida e limpa.
*Ausência de rastro local é o que sobra depois do sucesso, não a marca do que falta fazer.*

**A armadilha ao apertar o piso é a simétrica, e é pior.** Aplicar "só o mês atual" ao pé da letra
apagaria da fila toda pauta viva do mês que acabou de virar — em silêncio, que é o modo que ninguém
percebe. Aqui não aconteceu por um motivo que **tem de ser verificado, nunca presumido**: o
`scripts/drive/organizar-mes.mjs` move para o mês seguinte o que não foi publicado, preservando o
código `<MES>_<NNN>` original (chave primária de fato — o prefixo nunca cai). Por isso as 31 pautas
pendentes carregam código `JUL_*` e **moram em `2026-08`**.

**A régua:** antes de mexer em qualquer corte por data, **cruze o filtro novo com a lista do que
está vivo e exija resultado vazio.** Foi o que se fez: `comm -23 fila agosto` devolveu nada, e o
varredor rodado com o piso simulado (`TOP10_MES_PISO=2026-08`) manteve os mesmos 31 pendentes e a
mesma distribuição por estação. *O código da pasta diz quando a pauta nasceu; a pasta-mãe diz se ela
ainda anda — e é a segunda que decide.*

**Feito:** `pisoDeMes()` passou a devolver `mesCorrente().anoMes` (o dono único da regra de mês, o
mesmo que o `subir-bruto-do-mes.mjs` usa) em vez de recalcular mês-1 por conta própria; as duas
entradas do `pauta-para-slug.json` passaram a declarar a data de publicação e o link, com o
incidente descrito. **O piso continua falando alto quando descarta** — corte silencioso lê-se como
"varri tudo". Ver [[SIS-287]], que é o mesmo dia e a mesma família.

---

### SIS-289 · Veredito sem carimbo do que julgou aprova para sempre — o selo tem de citar o objeto, não a ocasião

> 🔀 **Nasceu como SIS-287 e foi renumerada em 11/ago/2026.** Outra sessão, trabalhando em paralelo
> na mesma árvore, gravou um SIS-287 (*"a regra certa num módulo não protege ninguém…"*) e o levou ao
> remoto primeiro — quem já está no remoto fica com o número (SIS-62). Quem pegou a colisão foi o
> `regras-todas.mjs`, ao regenerar: *ID de lei repetido*. **É o argumento das sessões paralelas em
> uma linha:** eu li o arquivo, escrevi no fim dele, e entre uma coisa e outra o arquivo mudou.

**11/ago/2026.** O `enviar-drive.mjs` cobrava a bancada de críticos assim: lia
`out/<proj>/qc-roteiro/bancada.veredito` e conferia se o texto começava com `BANCADA: PASS`. Nada
mais. O veredito era, portanto, **uma frase solta** — sem vínculo nenhum com o texto que as quatro
lentes tinham lido.

Consequência: **aprovado uma vez, aprovado para sempre.** O roteiro podia ser reescrito inteiro no
minuto seguinte ao PASS, e o portão continuava aceitando o mesmo veredito.

**Medido no disco da VM, e não é hipótese:**

| projeto | veredito | a bancada julgou às | o roteiro mudou às |
|---|---|---|---|
| `ira-cessar-fogo-colapsou` | PASS nas 4 lentes | 01/ago **07:01** | 01/ago **08:23** — 82 min depois |

E o vídeo **já foi gravado**. As quatro lentes aprovaram um texto; o que chegou ao apresentador é
outro. É a [[SIS-03]] (*"PASS antigo não é passe vitalício"*) na versão que ninguém tinha aplicado à
bancada.

⚠️ **E havia um aviso que não protegia.** O `validar-roteiro.mjs` compara as datas e avisa
([[SIS-146]]). Mas é **aviso**, não bloqueio, e mora em **outro comando** — ninguém é obrigado a
rodar o `validar` antes do `enviar`. *Verificação no lugar errado protege tanto quanto verificação
nenhuma:* quem decide é o portão, e o portão não sabia.

**A régua, e vale para todo selo de aprovação desta casa:** *o veredito carimba o OBJETO que julgou,
nunca só o instante em que foi emitido.* Um laudo, um PASS, uma aprovação — todos precisam responder
"aprovei **o quê**", em forma que a máquina confira sozinha.

**E o carimbo é HASH DO CONTEÚDO, nunca data.** Data muda com um `touch` e com uma reescrita
idêntica; hash muda quando o texto muda. Gate que grita à toa ensina a ignorar o gate,
e um gate de aprovação que dispara em falso é o primeiro que alguém contorna. O padrão já existia na
casa e é o mesmo: o `_portao.json` que o `_render-4k-loop.sh` confere por hash antes de gastar
máquina.

**Feito:** `bancada-roteiro.sh` grava `roteiro=<sha256[0..16]>` no veredito (hash calculado por
`node`, porque `md5` do macOS e `md5sum` do Linux não são o mesmo comando — [[SIS-148]]); o
`enviar-drive.mjs` compara com o arquivo atual e **recusa** quando difere, imprimindo os dois hashes
e o comando do `--refazer`. **Retrocompatibilidade deliberada:** veredito anterior a esta data não
tem carimbo, e aí o portão **avisa alto e deixa passar** — não dá para provar o que aquele veredito
julgou, e afirmar "está válido" seria inventar a prova; reprovar o backlog inteiro pararia a linha
por um defeito que não é dele. Provado nos três casos: confere → passa · diverge → recusa · sem
carimbo → avisa e segue.

### SIS-290 · Medição cara que só persiste no FIM é medição que a interrupção apaga inteira (11/ago/2026, `dentro-do-sol`)

O `qc-cena.mjs` escrevia o `_portao.json` **uma vez, depois de tudo**. Quem matasse o processo no
meio — `timeout`, fim de sessão headless, rate limit derrubando o pai — perdia o veredito de TODAS
as cenas, inclusive das que já tinham fechado os nove gates. E o Chrome já gasto não volta.

Medido duas vezes no mesmo projeto, com uma hora de intervalo, nas mesmas 4 cenas (`s33`, `s51`,
`s53`, `s68` — duas com footage de 200 e 317 MB): a passada de 03:42Z registrou no diário *"rodei
qc-cena para carimbar"* e o `_portao.json` continuou com **85 carimbos para 89 HTMLs**; a de 04:41Z
rodou 15 min sob `timeout 900`, morreu com **EXIT=143** e não escreveu uma linha. Meia hora de
máquina, zero carimbo — e **cena sem carimbo é barrada no render**. O defeito não atrasava o QC: ele
travava o vídeo, calado, num ponto onde ninguém procura.

**O conserto óbvio não funcionou, e o motivo é a lição.** Instalar um handler de SIGTERM que
persiste o que já se sabe não salvou NADA — três testes seguidos, todos com `laudo` vazio na hora do
sinal. A causa estava uma camada abaixo: o `pool()` acumulava os resultados internamente e só os
devolvia no fim, e o `laudo` era preenchido por um `for` sobre o array **já completo**. Durante toda
a fase cara, o programa tinha medido dezenas de gates e não sabia de nenhum.

*Persistir progresso exige que o progresso EXISTA em algum lugar antes do fim.* Handler de sinal em
cima de um acumulador que só publica no fim é decoração — ele roda, encontra o vazio e sai limpo,
o que é indistinguível de não estar instalado. Foi preciso o `pool` passar a reportar cada tarefa ao
terminar (`aoTerminar(key, r)`) para o handler ter o que salvar.

**Duas armadilhas de posição, as duas medidas:** o handler tem de ser instalado **antes** da primeira
fase cara (estava depois dos gates em lote, e o sinal chegava antes de ele existir); e a `const` que
ele lê tem de ser declarada acima dele, senão a zona morta temporal lança dentro do próprio handler,
no pior momento possível.

**Persistir só o COMPLETO é deliberado.** Cena com gate por medir fica de fora — não porque um
`ok:false` fosse perigoso (não é: "sem carimbo" e "carimbo com indefinidos" já barram igual), mas
porque a próxima passada re-mede as duas do mesmo jeito, e meia-medição só enche o portão de linha
que não informa nada.

Provado nas duas direções: 6 cenas, `--conc=1 --forcar`, SIGTERM aos 115 s → `⛑ 4 cena(s) com todos
os gates medidos foram carimbadas antes de sair`, as 4 terminadas com hora nova e as 2 em curso
intactas; e o caminho normal até o fim continua com laudo completo, exit 0 e carimbo igual ao de
antes. *Antes: 0 de 6 salvas. Depois: exatamente as que estavam prontas.*

---

### SIS-296 · Achado que não viaja no DOSSIÊ não existe — o brief da arte tinha 7 h a menos que o disco

**11/ago/2026, estação ARTE de `quasares-primordiais`, com a cota do Fable no teto e uma única porta
para abrir.** A retomada anterior fez uma recaça de procedência e deixou tudo escrito: 8 avisos duros
em `out/<proj>/_pendencia-procedencia.md`, do tipo que só se descobre ABRINDO o arquivo — um JPEG do
ESA/Webb cuja **legenda no metadado descreve outra galáxia** (z=14,32 no texto, z=13,0 nos rótulos
dentro do quadro), uma figura com **16 quasares** prestes a ilustrar a frase "os 31", um mapa de
**fundo branco** que sobre navy aparece inteiro, o mesmo frame do Sol repetido em três cenas. A pauta
da fila até mandava lê-lo, e eu li.

**Só que quem desenha não lê aquilo.** O `editor-de-arte` é invocado em sessão isolada com um dossiê:
`_brief-arte/<id>.md`. O próprio cabeçalho do dossiê manda **não reabrir** espelho, conceito e words —
e com razão, é o que mantém a cena barata. O `.md` da estação anterior não está na lista. *O aviso
existia, estava certo, e não tinha como chegar.*

**E havia um segundo relógio, pior porque silencioso.** Os briefs eram de **10:30Z**; os
`_PROCEDENCIA.json` que a recaça produziu, de **17:04–17:08Z**. Nove pastas ganharam prova DEPOIS do
dossiê que as descrevia. Despachar assim entregaria a nove cenas a linha *"procedência NÃO declarada —
não invente crédito"* sobre imagens **CC BY 4.0 da ESA/Webb, que exigem atribuição** — exatamente o
defeito que aquela mesma recaça acabara de consertar em três cenas já no ar (`s55`, `s36`, `s21`).
O gate não pegaria: crédito que falta não colide com nada, não estoura quadro, não reprova contrato.

**O conserto tem duas metades, e a segunda é a que dura.**
1. `node scripts/_brief-arte.mjs <proj>` **antes de todo despacho de arte** quando a pesquisa tocou o
   disco depois do último brief. É determinístico, não chama LLM, custa segundos.
2. `out/<proj>/_avisos-arte.json` (`{ "<id-da-cena>": ["aviso", …] }`), injetado pelo `_brief-arte.mjs`
   como bloco **"⚠️ AVISOS DE MÍDIA"** no dossiê da cena a que pertence. Arquivo OPCIONAL: projeto sem
   ele gera brief igual. 11 cenas cobertas neste vídeo. **Quem achar aviso novo escreve no JSON** — o
   `.md` da estação continua sendo o relatório, não o canal.

**Regerar também revelou um bug que ninguém veria de outro jeito:** o dossiê passou a listar 30 dos
110 arquivos **em duplicata**, com a procedência repetida junto. `donosDoPath` indexa
`_media/foto/s148-…/s148-mapa.png` sob DUAS chaves (`s148`, pelo número, e `s148-…`, pelo diretório
que casa um id de cena) e o `new Set` a jusante dedupava as CHAVES, não os ARQUIVOS. Corrigido com um
`Map` por `rel`. Ninguém erra por ler duas vezes — mas o dossiê é o que se lê com a cota contada, e
lista repetida gasta janela e sugere duas tomadas onde há uma.

**A régua, e ela não é sobre procedência:** *o conhecimento de uma estação só conta se estiver no
artefato que a estação seguinte lê.* Relatório em `.md` serve para a pessoa que audita; o agente
executor lê UM arquivo. Ao terminar uma estação com achado que muda a mão de quem vem depois,
pergunte qual arquivo o próximo abre — e escreva lá.

---

### SIS-297 · O formato de saída de um agente é contrato implícito — e o parser rígido o quebra em silêncio, sempre para o lado do FAIL

**11/ago/2026.** O `bancada-roteiro.sh` consolida as 4 lentes lendo a última linha de cada laudo com
`grep -q "^VEREDITO: PASS"`. Três agentes escrevem `VEREDITO: FAIL`. O `verificador-de-fatos` escreveu
**`**VEREDITO: FAIL**`** — em negrito, porque o laudo dele é markdown e a linha é uma conclusão.

`^VEREDITO:` **não casa** com `**VEREDITO:`. Duas consequências, e a segunda é a cara:

1. **A retomada quebra.** `bancada-roteiro.sh:54` usa o mesmo padrão para decidir se um laudo já
   existe. Laudo em negrito é lido como "sem veredito" e **re-julgado mesmo sem `--refazer`** —
   inferência paga duas vezes por trabalho já feito.
2. **Um PASS vira FAIL.** O consolidado é `if PASS → conta; elif existe → FAIL`. Como o padrão de
   PASS não casa, a lente que **aprovou** é contada como reprovação. No caso medido o veredito era
   FAIL mesmo, então o resultado final calhou de estar certo — *e é justamente por isso que passaria
   despercebido até o dia em que a lente de FATOS aprovasse um roteiro e ninguém soubesse.*

**A régua:** *quando o produtor de um formato é um modelo, o leitor tem de ser liberal.* Um agente
escreve prosa; ele obedece à instrução "termine com a linha VEREDITO: PASS" **em substância** e
enfeita a forma — negrito, espaço a mais, um emoji. Exigir a forma exata é construir um gate que o
próprio autor não sabe que está violando, porque nada acusa.

**E o DEFAULT do parser decide para que lado o erro cai.** Aqui caía para FAIL, que é o lado
conservador — ninguém publica um roteiro ruim por causa disto. Se caísse para PASS, seria o
contrário, e o defeito só apareceria no ar. **Ao escrever o leitor, escolha o default olhando para o
que acontece quando ele erra**, não para o que é mais simples de codar.

**Feito:** `grep -qE "^\**VEREDITO:[[:space:]]*PASS"` nos três pontos (retomada, eco e consolidado).
Provado nos cinco casos — cru/PASS, negrito/PASS, cru/FAIL, negrito/FAIL e laudo sem conclusão —, e o
último continua contando como reprovação, porque **ausência de laudo é FAIL, nunca silêncio**.

⚠️ Não confundir com [[SIS-177]] (*"não reimplemente o leitor de um formato que tem dono"*): lá o
formato tinha uma biblioteca oficial e alguém escreveu outra. Aqui não há dono — o formato nasce da
prosa de um agente, e o conserto não é achar o leitor certo, é **afrouxar o que existe**.

---

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `SIS-292` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `292` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `SIS-297`. Ver `seed/DE-PARA-LEIS.md`.

---

### SIS-298 · Laço de conserto sem escopo declarado NÃO CONVERGE — ele move o defeito, e a prova é a aprovação que se perde na rodada seguinte

**11/ago/2026.** O `terremotos-america-do-sul` passou por **quatro** ciclos completos de
conserto→bancada. **21 inferências.** O consolidado terminou onde começou: `FAIL` nas quatro lentes.

| lente | rodada 1 | rodada 2 | rodada 3 | rodada 4 |
|---|---|---|---|---|
| locução | FAIL 7,5 | FAIL **8,0** | FAIL 7,5 | FAIL 7,5 |
| clareza | FAIL 8,5 | **PASS** | FAIL 7,5 | FAIL 7,5 |
| fatos | FAIL **5,5** | FAIL | FAIL **8,5** | FAIL |
| geral | FAIL | FAIL | **PASS 8,0** | FAIL 8,0 |

**Nenhuma rodada teve mais de UMA lente aprovada, e as duas aprovações foram perdidas na rodada
seguinte.** Não é a bancada sendo exigente demais: a lente que reprova na rodada N+1 aponta trechos
que ela não apontava em N — porque **o passe de conserto reescreveu o que ninguém pediu**.

**As duas causas, e as duas são de quem instrui:**

**(a) O conserto sem fronteira vira revisão.** Instrução do tipo "conserte pelos laudos" autoriza,
na prática, reescrever o texto inteiro. O agente conserta o apontado **e melhora o resto** — e o
resto era o que a outra lente tinha aprovado. Medido: o laudo de locução da 3ª rodada diz, sobre um
defeito novo, *"este defeito nasceu do conserto do GRAVE anterior"*. A cura é declarar o que **NÃO**
tocar: no 4º passe a instrução proibiu explicitamente mexer em abertura, encerramento, números,
citações e qualquer parágrafo não apontado — e ele fez as duas correções pedidas **sem** derrubar
nada, em 9 minutos contra 33 dos anteriores.

**(b) Aplicar um achado sem dizer que FUNÇÃO ele cumpre cria defeito novo.** O laudo de fatos
corrigiu um dado sobre Cali; a instrução traduziu isso como *"inclusive Cali"*, e o agente pôs a
cidade no roteiro. Resultado: a clareza, que estava **PASS**, voltou a FAIL — *"Cali foi acrescentada
nesta revisão para aumentar o enigma, e nada a fecha"*. **Corrigir um dado ≠ acrescentar o assunto ao
texto.** Se o fato entra na narração, a instrução tem de dizer que papel ele tem no fio; se não tem
papel, ele fica no dossiê.

**A régua, e vale para qualquer laço agente→crítico→agente:**

1. **Todo passe de conserto declara o escopo NEGATIVO** — o que não se toca. Sem isso não é conserto,
   é revisão, e revisão quebra o aprovado.
2. **O laço precisa de teto de rodadas E de detecção de regressão.** Nota que CAI ou lente que sai de
   PASS para FAIL é sinal de parada, não de "mais um passe". Ninguém estava medindo isso: a queda
   7,5 → 8,0 → 7,5 só apareceu porque alguém comparou as rodadas à mão.
3. **Laudo é proposta com evidência, não ordem.** No 4º passe o agente RECUSOU uma cláusula que o
   crítico sugeria (*"e é isso que Pereira não teve"*), porque a apuração não a sustentava — e o
   próprio laudo marcava a passagem como "indicação de direção, não texto para colar". Colar sugestão
   de crítico é como colar exemplo de doutrina ([[ROT-07]]).

**O que o laço SIM entregou, e é o argumento para não abandoná-lo:** a lente de fatos foi de **5,5 a
8,5**; quatro erros que travavam a gravação morreram (uma distância errada repetida em quatro
lugares, o uso conceitualmente errado de "epicentro" na 1ª frase, uma comparação de energia
invertida, uma ressalva que não propagava); e 13 citações aspadas foram conferidas letra a letra.
*O laço não é inútil — ele é ilimitado, que é outra coisa.*

⚠️ **E o gate mentia no meio disso.** O `validar-roteiro.mjs` media `dur_total / nº de capítulos` — a
MÉDIA — e imprimia *"desde que nenhum passe de ~4,5 min"*, afirmando a condição que não verificava.
Dois capítulos de 6,2 e 5,4 min passaram por três bancadas com ✓. Quem pegou foi o `critico-de-roteiro`
na 4ª rodada, medindo bloco a bloco: *"o gate é cego para ele, e pior, ele tranquiliza"*. **Gate que
dá aval sobre o que não mediu é pior que gate nenhum — a ausência ao menos deixa a dúvida viva.**
Consertado: mede cada capítulo pelas palavras do bloco. *A mensagem só pode afirmar o que a linha de
cima calculou.*

**⚠️ E O TETO QUE EXISTE NÃO PEGA ESTE CASO — conferido no código em 11/ago.** O `despachante.mjs`
tem `MAX_TENTATIVAS = 5`, e a mensagem dele é boa (*"retomado 5× SEM PRODUZIR NADA — isto pede olho
humano"*). Mas ele conta **passada que não produziu artefato**: o contador ZERA sempre que
`marcoAgora > marcoAntes` (`porque = "andou"`). Um laço de conserto **produz texto novo a cada
rodada** — logo nunca bate nesse teto, por mais que a qualidade caia. As quatro rodadas do
`terremotos-america-do-sul` passariam por ele sem serem tocadas.

*Guarda contra travamento não é guarda contra regressão:* o primeiro pergunta "andou?", o segundo
teria de perguntar "andou para onde?". **Nenhum laço da casa faz a segunda pergunta** — a única
ocorrência de "regressão" no despachante está num comentário sobre teste.

⚠️ **O laço de ARTE tem o mesmo desenho — e NÃO DÁ PARA SABER se tem o mesmo buraco.** O que está
MEDIDO: `arte-driver.sh` não declara escopo negativo em lugar nenhum (zero menções a "não
toque"/"apenas"/"somente"), então o ciclo `editor-de-arte → qc-visual → conserto` está exposto à
causa (1) acima. O que era DEDUÇÃO minha e não se sustenta: dizer que ele "não converge".

**E a razão de não se sustentar é o achado que importa: não há histórico por cena.** Os laudos de QC
em `out/<proj>/qc/` são **sobrescritos** a cada rodada — nenhum arquivo guarda o veredito anterior
(conferido em 6 projetos, de 2 a 162 laudos cada, nenhum com histórico). A não-convergência do
roteiro só foi visível porque alguém anotou as quatro rodadas à mão durante a sessão; na arte,
**ninguém anota, e por isso ninguém pode saber**.

*Regressão que não se registra não existe para quem opera* — e um laço que refaz o trabalho pago do
Fable, que é a cota mais escassa da casa, é exatamente onde essa cegueira custa mais caro. **[PROPOSTA]**
antes de sobrescrever um laudo, mover o anterior para `qc/_historico/<cena>.<n>.json`. É barato, é
retomada-compatível, e é o que torna a pergunta "andou para onde?" respondível. **[PROPOSTA]** para os dois laços: o consolidado grava a nota de cada lente,
e a rodada seguinte compara — lente que sai de PASS para FAIL, ou nota que cai, PARA o laço e chama
gente.

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `SIS-293` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `293` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `SIS-298`. Ver `seed/DE-PARA-LEIS.md`.

---

### SIS-299 · Contar o que existe não prova a propriedade que importa — cinco gates caíram nisso no mesmo dia

Em 11/ago/2026, cinco defeitos independentes foram achados por sessões diferentes, em partes que
não se conhecem. Todos têm a MESMA forma: **um artefato foi contado como prova de algo que ele não
prova.**

| onde | contou | queria saber |
|---|---|---|
| `qc-procedencia` ([[SIS-284]]) | 1 item ISENTO | a mídia é limpa? → `PASS` com 0 auditados de 221 |
| promoção de estação ([[SIS-293]]) | HTML de etapa ANTERIOR | esta etapa andou? → 3 vídeos promovidos sem ter andado |
| índice de mídia ([[ARTE-197]]) | uma convenção de nome | que mídia existe? → o resto virou invisível |
| `situacao` (portão) | `falhas` de 1 cena | por que 13 barradas? → 12 eram "não medi", não "está errado" |
| painel de estação | `arte=7` estável | a arte andou? → andou 5 cenas; 3 vídeos novos entraram |

**Por que a forma se repete:** contar artefato é fácil, barato e sempre devolve um número. Verificar
a PROPRIEDADE (foi auditado? foi produzido AGORA? é legítimo?) exige abrir o item. O número sai
plausível, ninguém desconfia, e o veredito nasce errado com cara de medido. Nenhum dos cinco deu
erro — todos devolveram exit 0 e uma tabela bem formatada.

**A régua, e ela é uma pergunta:** *o que estou contando prova a propriedade que quero afirmar, ou
só a presença do artefato?* Se um item da contagem NUNCA poderia falhar (isento), ele não pertence
ao denominador. Se o artefato pode ter nascido em outra etapa, ele não é prova desta. Se a busca
conhece um formato só, "não achei" significa "não procurei direito", não "não existe" — e é por isso
que [[SIS-292]] ("parser rígido quebra em silêncio, sempre para o lado do FAIL") é irmã desta.

⚠️ **O corolário caro:** ausência de resultado tem de ser um TERCEIRO estado, visível, nunca dobrado
em aprovação ou em falha. Dobrado em aprovação, mente ([[SIS-284]]). Dobrado em falha, manda gente
consertar o que não está quebrado — no `mamute-de-volta` isso ia fazer alguém abrir 12 cenas
impecáveis caçando um crédito que ninguém provou existir, e no `orcas-nao-matam` recaçar mídia
correta queimando cota diária de acervo assinado.

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `SIS-294` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `294` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `SIS-299`. Ver `seed/DE-PARA-LEIS.md`.

### SIS-301 · Corrigir a fala não corrige o que foi COPIADO dela — o erro do transcritor sobrevive no material de apoio

> ⚠️ **RESTAURADA em 11/ago/2026, e ela é do lote que NENHUM GATE PODIA ACHAR.** Foi apagada pelo
> commit `d5a9837` junto com outras 24, mas — ao contrário daquelas — o número `SIS-263` foi
> **reocupado no mesmo dia** por uma lei nova. Sem vaga no arquivo, não havia buraco para procurar,
> e a varredura que recuperou as outras passou direto por esta. *Apagamento que não deixa vaga é
> invisível para quem procura vaga.* Ela só apareceu quando a busca deixou de perguntar "que número
> sumiu?" e passou a perguntar **"que TEXTO sumiu?"**. Nasceu como `SIS-263`; volta como
> `SIS-301`, porque o número antigo tem dono legítimo. Recuperada de `cdd1a1b` (10/Ago 21:12).

**10/ago/2026, `planeta-em-meteorito`, estação TEXTOS.** O transcritor ouviu "ângritos" onde se
escreve **angritos**, "Bel" onde se escreve **Bell**, "clinopiroxénio" com a vogal lusitana, e
"mil quilômetros de **rádio**" onde a fala diz *raio*. O `corrigir-nomes.mjs` fez o trabalho dele e
fez certo: 7 trocas no `words-final`, 3 no `words-limpo`, 6 âncoras do espelho — e o relatório
fechou limpo. **Só que a grafia errada continuava em 40 campos, espalhada por três artefatos.**

Onde ela estava, medido depois do gate passar:

| artefato | campos | o que são |
|---|---|---|
| `espelho.json` | 14 | `tese`, `motivo`, `midia_necessidade`, `needs.dados[]` |
| `regencia.json` | 20 | o `palavras` de cada beat, o `exige`, o `regime_porque` |
| `conceito-visual.json` | 4 | a `tecnica` de cada cena |

O `corrigir-nomes` não os toca **por uma decisão de escopo correta e escrita no próprio código**:
*"a `tese` e o `motivo` NÃO são tocados: são texto do montador, não transcrição"*. A decisão está
certa e a conclusão que se tira dela está errada — porque **o montador escreveu a tese LENDO a
transcrição**, e herdou o erro junto. O mesmo vale para o regente e para o diretor de arte: todo
artefato de planejamento é, em parte, cópia da fala.

E não é dano teórico. O campo mais perigoso da lista era `espelho.segmentos[9].midia_necessidade`:

> Foto real de angrito (espécime de museu/coleção); **rótulo 'ÂNGRITOS'**.

Uma instrução DIRETA de texto de tela, em caixa alta, escrita errada, num vídeo cujo assunto é a
palavra. O `conceito-visual` repetia o mesmo rótulo. Nenhum QC de cena pegaria: a cena, olhada
sozinha, estaria fiel ao insumo que recebeu — que é exatamente o defeito que o `ceuta` já tinha
ensinado, um degrau acima na cadeia.

**A regra.** Quando uma grafia é fixada, ela vale em **todo artefato derivado da fala**, não só nos
arquivos de fala. O `_nomes-proprios.json` passou a ter dois consumidores: o `corrigir-nomes.mjs`
(fala, casamento por token, sensível à caixa) e o `propagar-grafia.mjs` (texto livre, casamento por
regex com fronteira de letra, e **insensível à caixa quando a chave começa em minúscula** —
rótulo de tela quase sempre é CAIXA ALTA, e a busca sensível deixou passar 6 das 40).

Duas armadilhas achadas escrevendo o irmão, porque as duas mentem do mesmo jeito — dizendo que
terminaram:

- **Caixa.** `ângritos` e `ÂNGRITOS` são o mesmo erro; um casador sensível pega o primeiro, anuncia
  sucesso e deixa o segundo, que é justamente o que vira rótulo.
- **Array.** A primeira versão só reescrevia string filha de OBJETO, então `needs.dados: [...]`
  passou intacto: o script anunciou **36 campos corrigidos** e deixou **5** para trás. *Relatório que
  contabiliza o que fez sem varrer o que sobrou é pior que relatório nenhum, porque quem lê para de
  procurar.* A varredura independente por `grep` no arquivo inteiro, DEPOIS de aplicar, é o que
  transformou "36 corrigidos" em "4 ainda vivos".

**O que NÃO se propaga, e por quê.** Fusão de tokens continua recusada dos dois lados: a lista de
palavras é a grade de fronteiras que os gates usam, e ortografia não move régua ("North West África"
→ "Northwest Africa" vive na TELA, no glossário). E ficou um resíduo conhecido: no `words-limpo` a
transcrição colou duas palavras num token só — `chamadosângritos.` — que nenhum casamento por token
alcança. Separá-lo exigiria repartir timestamps. Não foi corrigido, foi **declarado**; o relógio
FINAL, que é o que este vídeo usa, tem a frase inteira e certa.

---

### SIS-302 · Gate que CONVERTE o relógio sem perguntar em qual relógio o espelho está reprova arte sã — e manda re-timar 21 cenas já retimadas (10/ago/2026, `qc-janela-exibida`, estação QC do `mamute-de-volta`)

> ⚠️ **RESTAURADA em 11/ago/2026, e ela é do lote que NENHUM GATE PODIA ACHAR.** Foi apagada pelo
> commit `d5a9837` junto com outras 24, mas — ao contrário daquelas — o número `SIS-274` foi
> **reocupado no mesmo dia** por uma lei nova. Sem vaga no arquivo, não havia buraco para procurar,
> e a varredura que recuperou as outras passou direto por esta. *Apagamento que não deixa vaga é
> invisível para quem procura vaga.* Ela só apareceu quando a busca deixou de perguntar "que número
> sumiu?" e passou a perguntar **"que TEXTO sumiu?"**. Nasceu como `SIS-274`; volta como
> `SIS-302`, porque o número antigo tem dono legítimo. Recuperada de `cdd1a1b` (10/Ago 21:12).

O `qc-janela-exibida` mede quanto de cada clipe o espectador realmente vê. Para isso traduz o
`inSec` do espelho para o relógio limpo com `mapSec` — a conta certa **enquanto o espelho nasce no
relógio da gravação**. Desde 06-07/ago o espelho nasce (ou é remapeado) no relógio FINAL, o do
`_master-decupado.mp4`, e o próprio arquivo DECLARA isso em `relogio:"final"`. O gate nunca lia esse
campo. Converter o que já está convertido subtrai os cortes duas vezes: o valor cai dentro de um
trecho cortado e `mapSec` devolve `null`.

O que ele imprimia no `mamute-de-volta`: **16 cenas "que a conta nem alcança"**, `✗ FAIL — 21
cena(s)` e a prescrição *"o conserto é da ARTE: re-timar os beats"*. A arte estava certa — e mais que
certa, estava **acabada de consertar**: 77 dos 81 HTMLs já tinham sido retimados para a janela nova
naquela tarde, e ZERO seguia na duração velha. Refeita a conta no relógio declarado, a cauda morta
do projeto inteiro é **zero**, e o FAIL cai de 21 para 4 (os cards de título, que são a
[FIN-17] e não se consertam).

A prova é de uma linha e serve para qualquer projeto: `s01-hook-promessa` tem `inSec` 0,067 — o
primeiro instante do vídeo limpo — e o 1º corte do master vai de 0 a 35,61 s. Lido como bruto, **o
começo do vídeo cai dentro da cabeça descartada.** Quando o mesmo `inSec` é lido no relógio certo, a
cena abre onde deve.

**A régua: antes de converter um tempo, pergunte de qual relógio ele fala — e imprima a resposta.**
A pergunta tem dono importável desde 09/ago (`relogioDoEspelho`, em `src/relogio-espelho.mjs`) e onze
arquivos já a consultam; este era retardatário, como o `compor-base-youtube`. Um detector que decide
em silêncio não é um detector: é uma suposição com casas decimais.

E o dano tem forma específica, que vale reconhecer de longe: **gate que reprova arte boa em lote
ensina a ignorar gates.** O veredito daqui mandava o vídeo de volta para a estação ARTE — a mais
cara da casa — para refazer 21 cenas que já estavam no tempo certo. Uma passada obediente teria
gasto inferência de Fable para desfazer um conserto correto.

Agente-raiz: `scripts/qc-janela-exibida.mjs` (consertado aqui). Três lugares assumiam BRUTO e não
um: o `inClean` (o `mapSec` incondicional), o `cleanDur` (que descontava os cortes de novo e
truncava toda cena do fim) e o desconto de cortes DENTRO da `dur` ao calcular a fala. Regressão
conferida no `orcas-nao-matam`, o projeto que originou o gate: ele continua reprovando as mesmas
c13/c14/c21 por cauda morta de 42%/31%/30%. Conserto que cega o gate é pior que o defeito; este
manteve a mordida.

### SIS-303 · Lei nova sobre mídia PROIBIDA exige varredura do passivo, não só conserto do manual — o vídeo contaminado seis dias antes segue andando até a entrega (10/ago/2026, estação QC do `mamute-de-volta`)

> ⚠️ **RESTAURADA em 11/ago/2026, e ela é do lote que NENHUM GATE PODIA ACHAR.** Foi apagada pelo
> commit `d5a9837` junto com outras 24, mas — ao contrário daquelas — o número `SIS-275` foi
> **reocupado no mesmo dia** por uma lei nova. Sem vaga no arquivo, não havia buraco para procurar,
> e a varredura que recuperou as outras passou direto por esta. *Apagamento que não deixa vaga é
> invisível para quem procura vaga.* Ela só apareceu quando a busca deixou de perguntar "que número
> sumiu?" e passou a perguntar **"que TEXTO sumiu?"**. Nasceu como `SIS-275`; volta como
> `SIS-303`, porque o número antigo tem dono legítimo. Recuperada de `cdd1a1b` (10/Ago 21:12).

Em 09/ago o `galaxia-arco-flecha` foi pego com 14 arquivos do Pexels em 9 das 52 cenas. O conserto
foi exemplar e completo: a [PESQ-69] nasceu, a cláusula de escape ("se for a única saída, declare em
voz alta") foi **removida** do `pesquisa-imagens`, e a doutrina passou a dizer o certo — *acervo
assinado que não abre = PARE E AVISE*.

Ninguém varreu os projetos que já existiam. O `mamute-de-volta` teve a mídia pesquisada em 03/ago,
seis dias ANTES da lei, com o mesmo diagnóstico honesto escrito pelo próprio agente no
`_pesquisa/footage.json`: *"TODAS as 4 assinaturas do estúdio estavam DESLOGADAS nesta VM. Isto é
BLOQUEIO DE PORTA, não ausência de mídia"* — e, em seguida, *"caí para fontes livres"*. Resultado
medido no QC de hoje: **35 arquivos de fonte proibida, 28 vivos no HTML, 17 das 81 cenas
contaminadas**, com a arte inteira pronta e o dono esperando o XML.

O vídeo atravessou ESPELHO, ARTE, remapeamento e re-decupagem sem que nada perguntasse. O gate que
pega isso (`qc-procedencia`) existe e funciona — ele só nunca tinha sido rodado neste projeto depois
que a lei mudou. **Custo da varredura que faltou: um comando.** `node scripts/qc-procedencia.mjs`
sem argumento mede os 21 projetos de uma vez; rodado hoje, mostra que o `mamute-de-volta` é o
ÚNICO com mídia proibida — o passivo era exatamente um vídeo, e ficou seis dias invisível.

**A régua: lei que nasce de um defeito de INSUMO tem duas metades — consertar quem produz e varrer
o que já foi produzido.** A primeira protege os vídeos futuros; sem a segunda, os vídeos que já
estavam na esteira chegam à entrega com o defeito que a lei descreve, e a descoberta acontece no
lugar mais caro. Quando destilar lei de mídia/procedência/fonte, o último passo é rodar o gate
correspondente em TODOS os projetos e escrever na fila os que acenderem.

Corolário sobre o que a honestidade do agente garante: ele **declarou** a fonte proibida, com URL e
licença. A declaração não impediu nada — só deixou por escrito, em disco, que o vídeo não podia ir
ao ar. Registro honesto de decisão errada não é mitigação; é a prova documental do defeito
esperando alguém abrir o arquivo.

### SIS-304 · Em run fundido, "a próxima cena" NÃO é "o próximo arquivo" — e o aparo cortou o clímax do vídeo em 8,4 s de 29,07 s (10/ago/2026, `remapear-espelho-final`, estação QC do `mamute-de-volta`)

> ⚠️ **RESTAURADA em 11/ago/2026, e ela é do lote que NENHUM GATE PODIA ACHAR.** Foi apagada pelo
> commit `d5a9837` junto com outras 24, mas — ao contrário daquelas — o número `SIS-276` foi
> **reocupado no mesmo dia** por uma lei nova. Sem vaga no arquivo, não havia buraco para procurar,
> e a varredura que recuperou as outras passou direto por esta. *Apagamento que não deixa vaga é
> invisível para quem procura vaga.* Ela só apareceu quando a busca deixou de perguntar "que número
> sumiu?" e passou a perguntar **"que TEXTO sumiu?"**. Nasceu como `SIS-276`; volta como
> `SIS-304`, porque o número antigo tem dono legítimo. Recuperada de `cdd1a1b` (10/Ago 21:12).

O `remapear-espelho-final.mjs` fecha com uma trava sensata: nenhuma cena invade a seguinte, então o
fim de cada uma é aparado no `inSec` da próxima. Ela nasceu de dois defeitos reais (1-3 quadros de
arredondamento e a cena que engolia o vão de card inteiro) e resolve os dois.

Num RUN FUNDIDO ([ARTE-40b]) a próxima cena **está dentro do mesmo HTML**: a filha não tem arquivo
próprio, é desenhada como plano-sequência pelo pai. Aparar o pai no início da própria filha não
corrige invasão nenhuma — amputa o run pelo primeiro terço. O script tem **zero** ocorrências de
`fundir`/`fundido`: a fusão não existe para ele.

O que a proposta fazia no `mamute-de-volta`: `s63-resposta-honesta`, pai de um run que cobre
`s64-lembra-do-99` e `s65-elefante-vestido`, cortada de **29,067 s para 8,4 s** — e a `s65` é
SHOWPIECE declarada no `conceito-visual.json`. Mais quatro runs iam junto (`s35` 25,97→8,8 · `s53`
23,1→7,8 · `s68` 19,27→5,63 · `s111` 21,4→6,5, esta levando a outra showpiece, a `s112`). Medido: o
laço antigo encurtava **29 cenas** a mais que o novo. Alguém reverteu à mão às 20:20 e deixou o
arquivo como `_refazer-10ago-ERRADO.json` — mas o script re-proporia igual na execução seguinte, e
uma sessão obediente aplicaria.

**A CURA: só APARA contra cena que tem CLIPE PRÓPRIO.** Quem não tem HTML não é destino de corte — ou
é filha fundida (já está dentro deste arquivo) ou é apresentador, e cauda de arte por cima do rosto é
como o compositor trabalha, não defeito. O aparo que motivou o laço segue de pé, porque card de
título TEM html: a `s81` continua sendo aparada no `card-04`, com o mesmo valor (8,67 s nas duas
versões). Regressão conferida cena por cena: 114 das 128 idênticas ao espelho revertido à mão.

**A régua: quando um arquivo cobre mais de uma unidade do plano, "a próxima unidade" e "o próximo
arquivo" deixam de ser a mesma coisa — e o limite pertence ao ARQUIVO.** Todo laço que olha
`lista[i+1]` num plano com fusão precisa perguntar se o vizinho é um artefato distinto ou uma parte
do mesmo.

⚠️ E o corolário que quase custou mais que o defeito: **eu li o `durNova` como ESTADO e ele é
PROPOSTA.** O `_remapeamento-final.json` é o relatório de uma sugestão, não o retrato do disco;
mesmo assim briefei quatro agentes de `qc-visual` dizendo "estas cenas encolheram 30–82%, cacem
word-lock quebrado e rajada ilegível". Não encolheram: o `__duracao` do HTML casa com o `espelho.dur`
em 77 de 81. O primeiro lote testou a premissa em vez de obedecê-la, mediu quatro vias independentes
(21 pais de fusão × 21 `fluxo[].fundir`; 24 filhas com 0 HTML órfão; 105 − 24 = 81 = os HTMLs no
disco) e devolveu a correção — os outros três receberam a régua certa por mensagem antes de fechar.
**Nome de campo em arquivo de relatório não diz se ele descreve o que É ou o que ALGUÉM PROPÔS; a
régua do que é está sempre no artefato.** Briefing errado em lote paralelo multiplica o erro pelo
número de agentes, e o único freio é o especialista que confere a premissa.

### SIS-305 · Ferramenta ausente numa máquina não dá erro de instalação — dá o erro da tarefa, e manda investigar o lugar errado

**Três vezes em 11/ago/2026, nas três máquinas, com três disfarces diferentes:**

| o que faltava | como apareceu | o que parecia |
|---|---|---|
| o binário `sqlite3` na VM | `catch` devolvia vazio | "não há registro no banco" |
| o diretório `render/` e 2 `.sh` da raiz | `✗ FALHOU` ×10 | "as cenas estão quebradas" |
| `yt-dlp` na VM | `spawnSync yt-dlp ENOENT` ×3 tentativas | "o YouTube recusa o download" |

O terceiro é o mais honesto dos três — ele ao menos nomeia o binário. Os outros dois **não citam a
ferramenta em lugar nenhum da mensagem**, e por isso mandam quem lê investigar o dado, a cena ou a
rede. O `sqlite3` custou dias; o `render/` custou dez execuções mudas nesta noite.

**A raiz é sempre a mesma:** cada máquina desta casa recebe um conjunto DIFERENTE de peças. A VM de
produção vem por git; as de decupagem, por pacote; o nó Windows, por `scp`. Nenhum desses caminhos
declara o que o ofício da máquina exige, então a falta só aparece quando alguém pede o trabalho.

**A régua:** *antes de despachar lote para uma máquina, prove que ela tem o ofício.* Um comando que
roda o menor caso real — uma cena, uma consulta, um download — e falha ANTES de gastar o lote. É a
mesma lógica do `tunel-conferir.mjs`, que já faz isso para a caça: sem túnel provado, a caça recusa
rodar em vez de sair pelo IP errado.

⚠️ E há um corolário sobre a MENSAGEM, que vale para todo `catch` de `ENOENT`: quando a causa é
ferramenta ausente, **a mensagem tem de dizer o nome dela e como instalar**. Erro de ambiente
disfarçado de erro de dado é o que faz alguém passar meia hora no lugar errado — e foi exatamente o
que aconteceu comigo nos três casos.

---

## [SIS-306] · Ouvinte de evento não dispara em laço que nunca gira — e o conserto pela metade engana melhor que defeito nenhum

*11/ago/2026 · despachante · medido nas duas pontas*

O despachante acumulava processos `claude` mortos (`<defunct>`). O diagnóstico óbvio — *"ninguém
colhe o filho"* — levou ao conserto óbvio: registrar `child.on("exit", () => {})` antes do
`unref()`. O número caiu de **193 para 20**, e o conserto foi dado por feito.

Não estava. O rodapé do arquivo era:

```js
if (argvFlags.loop) { for (; ;) { passada(); execSync("sleep 600"); } }
```

Com `passada()` também síncrona, isto é um `for(;;)` de chamadas síncronas: **o laço de eventos do
Node nunca gira, nem uma vez, desde o `import` até o fim dos dias.** E quem dispara evento é o laço.
O ouvinte estava registrado e mudo havia cinco horas.

**A assinatura que denunciou foi de RELÓGIO, não de erro:** dois cadáveres a cada **10 min 12 s**,
sem falhar um — os 600 s de sono mais os ~12 s de trabalho da passada. Nenhuma mensagem de erro
existia para ser lida. *Quando o defeito tem período constante, a causa é um temporizador, não uma
condição de corrida.*

**Por que o conserto pela metade é pior que nenhum:** ele derruba o número o bastante para parecer
que funcionou. Os 20 que sobraram morriam nas frestas em que a pilha por acaso esvaziava. Um
conserto que não muda nada é investigado de novo; um que melhora 10× é arquivado.

⚠️ **E o teste que eu escrevi para me provar certo media outro mundo.** Reproduzi o padrão do
despachante com `setTimeout` — e passou, o filho era colhido. Passou *porque* `setTimeout` deixa o
laço girar, que é exatamente a condição que faltava no original. **Reprodução que não reproduz a
restrição não é prova: é a mesma crença escrita duas vezes.** Antes de aceitar que um teste
inocentou o código, pergunte qual característica do ambiente real ele deixou de fora.

**A régua:** em qualquer processo de vida longa, *sono é `await`, nunca `execSync("sleep")`*. E
quando um conserto de sintoma periódico não zera o sintoma, o que sobrou não é resíduo — é a causa.

---

## [SIS-307] · Referência que aponta para insumo apagável apodrece sozinha — congele o RESULTADO, não o caminho

*12/ago/2026 · régua de arte (`seed/examples/dourados/`) · varredura de todos os 48 exemplares*

A régua de arte é a biblioteca de exemplares que todo `editor-de-arte` abre antes de desenhar
(*"leia 1–2 cenas INTEIRAS do modelo"*). Medida hoje, inteira:

```
48 exemplares · 40 referências de mídia · 40 MORTAS · 0 vivas
19 exemplares renderizam como CASCA (M07 foto ×4, M09 ×3, M06, M11, M12, M25, M28…)
```

`M09/tres-estados-agua.html` devolve **13 KB** e `ok-COM-MIDIA-FALTANDO`. São justamente os modelos
que existem para ensinar **mídia real** — o "erro nº 1 do canal" que a lente 4 reprova sem dó. A
régua que ensina a não usar vetor chapado virou vetor chapado.

**NINGUÉM ERROU. Três peças certas em fila produziram a podridão:**

| peça | o que faz | por que está certa |
|---|---|---|
| `registrar-dourado.mjs` | copia `<id>.html` + `.brief.json` | promove a cena aprovada, é idempotente |
| `entregar.mjs --limpar` | apaga a `_media/` pós-entrega | disco enxuto, [REND-18], bucket é a fonte |
| `qc-modo-regua.mjs` | conta pasta com arquivo | nasceu contra pasta VAZIA, e resolve isso |

Cada uma isolada passa em qualquer revisão. Juntas, o exemplar **nasce com data de validade** e
ninguém é avisado.

**O TERCEIRO ESTADO, que é o achado.** O gate da régua conhecia dois: *ponteiro morto* (o `Read`
falha, e GRITA) e *referência ausente* (pasta vazia, e é MUDA). Existe um terceiro que nenhum dos
dois pega e que é o pior deles: **referência presente e OCA** — o arquivo está lá, abre, renderiza,
e está vazio por dentro. Não falha, não some: **entrega outra coisa com cara de certa.**

**O conserto de raiz é mudar o que se guarda.** Frame é RESULTADO; não tem referência para morrer.
Congelar no ato do registro funciona porque é o único instante em que a mídia ainda está no disco —
a cena acabou de ser aprovada. Congelar depois é tarde, e é onde os 19 caíram.

E resolve de lambuja um problema que parecia outro: **quem julga por visão nunca pôde usar a régua.**
O `revisar-no-lugar-do-mateus.mjs` recebe só PNG (`--allowedTools Read`) e a rubrica dele PROÍBE ler
HTML. A régua estava no formato de quem **executa** (código, que se lê), não no de quem **julga**
(imagem, que se olha) — por isso ela é citada em 5 arquivos de execução e em **zero** de verificação.
Não era esquecimento: era incompatibilidade de formato, e ela é invisível enquanto ninguém tenta.

**A régua, e ela vale muito além de dourado:** todo artefato de REFERÊNCIA — exemplar, baseline,
caso de teste, captura de comparação — que aponta para insumo governado por outra política de
retenção **apodrece no ritmo dessa política, não na sua**. Ou você congela o resultado junto, ou
declara a dependência e a verifica; guardar só o ponteiro é escolher a data em que a referência
morre sem saber qual é.

⚠️ **E o alarme falso aqui é fácil demais:** exemplar de desenho puro não tem mídia local nenhuma e
está íntegro. Só é oco quem **referencia mídia E tem todas as referências mortas**; e o modelo só é
`oca` quando não sobra nenhum exemplar utilizável — um íntegro ao lado de três ocos ainda é régua.
Medido: pega os 18 do catálogo e acusa zero dos 29 de desenho puro.

**Consertado em 12/ago:** `registrar-dourado.mjs` congela 3 frames (30/60/90%, ~960 px derivados do
palco) e **grita** quando a mídia falta no ato do registro; `--congelar-todos` reprocessa a régua
existente; `estadoDaRegua()` ganhou o estado `oca` e o censo o exibe. Superada em parte a leitura de
que "pasta com arquivo = régua viva" — a `estadoDaRegua` continua sendo a fonte única do critério.

---

## [SIS-308] · A pasta diz o que existe; só o REGISTRO diz o que ainda é trabalho

*12/ago/2026 · painel de produção e medidor de cobertura de arte · flagrado pelo Mateus*

Ele olhou a tela de "Produção" e escreveu: *"mongolia-lugar-frio e putin-fronteiras-otan são vídeos
JÁ PUBLICADOS no canal, CORRIJA ISSO de uma vez POR TODAS!"* — e antes: *"produção = algo que está
acontecendo produção agora… o que já foi publicado não é para aparecer"*.

**O dado nunca faltou.** O `situacao.mjs` já entregava `publicado`, lido do `_ENTREGAS.md`, que é a
fonte única; os dois constavam `publicado=true · registro=postado` **com data — 16/mai e 29/mai**.
Eram **14 dos 43** vídeos da tela. A regra já estava escrita no `CLAUDE.md` ("NUNCA inferir status
do estado das pastas `out/<slug>/`"), e faltava exatamente onde ela mais custava.

**Por que a pasta engana:** `out/<slug>/` **congela no estado pré-publicação para sempre**. Ninguém
a atualiza quando o vídeo sobe, porque não há motivo — o trabalho acabou. Toda ferramenta que lê o
disco e não pergunta ao registro produz **fila fantasma**.

⚠️ **E fila fantasma não dá erro.** Dá uma lista plausível, ordenada por urgência, que manda gente
trabalhar no que já foi ao ar. O mesmo furo estava no `qc-cobertura-arte.mjs`, e ali quase custou
inferência: ele me devolveu **"FALTAM 136"** para o `putin` e **"FALTAM 95"** para o `mongolia` nas
**duas primeiras linhas** do relatório. Eu ia despachar agente de arte para vídeo de maio.

**A régua, e ela vale para toda ferramenta que lista projeto:** antes de chamar qualquer coisa de
pendente, cruze com `scripts/lib/entregue.mjs` — a lib que já era dona da pergunta e tinha 6
clientes, nenhum deles a tela que o dono olha. *Quando a lib certa existe e a ferramenta nova não a
usa, o defeito não é de conhecimento: é de ninguém ter perguntado quem já respondia isso.*

⚠️ **"Entregue" NÃO conta como fora de produção.** O estúdio fechou, o Mateus ainda não postou, e
isso é justamente trabalho aberto que ele precisa ver. A fronteira é ter URL ou status
`postado`/`arquivado`.

⚠️ **E o que sai da lista se diz em voz alta** ("14 já no ar, fora desta conta"). Silêncio sobre o
descartado é indistinguível de "não havia" — e é assim que um filtro certo hoje vira suspeita
amanhã.

---

### SIS-322 · O degrau que nasceu sem dono: a decupagem fechava no 6 porque o 7 tinha sido revogado com o mesmo número (12/ago/2026, estação ESPELHO do `a-guerra-da-ucrania-deixou`)

> 🔀 **Renumerada de `SIS-313` em 12/ago/2026.** Três sessões paralelas escreveram leis
> na mesma madrugada e colidiram no mesmo número — o conflito de merge foi resolvido
> preservando TODAS, e as que chegaram depois foram renumeradas. Citação ao número antigo
> aponta para outra lei: confira em `seed/DE-PARA-LEIS.md`.

A estação ESPELHO recebeu um projeto com master decupado, `_cortes.json` de 41 spans, `words-limpo.json`
e o diário escrito **"DECUPAGEM FECHADA"** — e sem `words-final.json`, que desde 06/ago é o relógio em
que o espelho se ancora. Sem ele não há estação: `words.json` e `words-limpo.json` são BRUTOS (1694 s)
e o arquivo que vai ao ar tem 1301 s. Um espelho ancorado neles sai plausível, em segundos, e **390 s
errado no fim do vídeo**.

**Onde a instrução estava, e onde não estava:**

| documento | manda rodar o Scribe #2? |
|---|---|
| `scripts/estudio/estacoes/decupagem.md` (o prompt do despachante) | **sim** — linha 140, e cobra o artefato no critério de conclusão (linha 243) |
| `marcas/top10/agentes/decupador.md` (a roupa que o agente veste) | **não** — zero ocorrências |
| `.claude/agents/decupador.md` (o ofício) | **não** — zero ocorrências |

A sessão de decupagem brigou três retomadas com o master (mux morto no meio com 78,7 % do arquivo,
insumo apagado pela faxina com o lock `.EM-USO` no disco, 49 GB rebaixados do bucket), montou o
arquivo, e encerrou **correta segundo o que estava escrito no agente**.

**A armadilha é a numeração.** A lista de degraus da roupa terminava em `6 · MONTA O MASTER — o
entregável desta estação`, e logo abaixo dela, em negrito: *"**NÃO** existe mais passo de ProRes.
Até 02/ago havia um passo 7"*. Quem lê conclui que a estação acaba no 6 — e conclui **certo**,
porque o passo 7 **novo** (Scribe #2, nascido em 06/ago, sem relação nenhuma com o ProRes) nunca foi
acrescentado. *Revogar um degrau e batizar o degrau seguinte com o número que acabou de morrer é
como se apaga uma etapa sem apagar nada: o texto que anuncia a revogação passa a ler como a
revogação do sucessor.*

**Por que nenhum gate viu.** O `mapa-limpo.mjs --conferir`, que o CONTRATO do montador manda rodar
como *"a PRIMEIRA coisa"*, imprimiu `words.json: 3274 palavras, última em 00:28:13 (relógio do
MASTER)` e `master: existe` — **sem comparar os dois**. O master tem 21:40. A régua que existia para
pegar exatamente isto ([SIS-100]) mediu densidade de fala e passou.

**E o conserto, quando enfim se roda, tem uma mina no caminho:** `src/transcribe.mjs` reaproveita o
`audio.wav` por `existsSync && tamanho > 0 && mtime ≥ master`. Havia dois restos de tentativas
mortas — 844 s e 1123 s de um vídeo de 1300,8 s —, o mais novo posterior ao master. Os três testes
passam num arquivo **truncado**: a passada de Scribe teria transcrito 65 % do vídeo. O gate de
truncamento do `transcrever-decupado.mjs` (`falta > 30 s`) pega — *depois* de gastar a chamada paga.
**Frescor não é integridade**: quando o artefato tem duração declarada, a retomada compara a
DURAÇÃO, não o carimbo.

> *Instrução que mora só no prompt da estação não veste o agente. Quando um degrau existe no
> orquestrador e não no ofício, ele não tem dono — e quem paga é a estação seguinte, que descobre a
> falta quando já não é dela.*

Agente-raiz: `decupador` — degrau 7 acrescentado à lista da roupa (`marcas/top10/agentes/decupador.md`),
com a explicação da colisão de numeração ao lado, para que a revogação do ProRes não volte a ler como
revogação do Scribe.

⚠️ Corolário medido no mesmo dia: o conserto da [SIS-311] (rodapé macOS) foi aplicado "nos dois
lados", mas **este worktree tinha 40 dos 48 agentes ainda quebrados**. Conserto aplicado a UM
worktree não alcança os outros; worktree novo nasce do commit, não do disco consertado.

### SIS-323 · O agente do worktree não estava só NU — estava vestindo doutrina REVOGADA, e era exatamente a regra que decidia a estação (12/ago/2026, estação ESPELHO do `ate-que-altura-construir`)

> 🔀 **Renumerada de `SIS-314` em 12/ago/2026.** Três sessões paralelas escreveram leis
> na mesma madrugada e colidiram no mesmo número — o conflito de merge foi resolvido
> preservando TODAS, e as que chegaram depois foram renumeradas. Citação ao número antigo
> aponta para outra lei: confira em `seed/DE-PARA-LEIS.md`.

A [SIS-311] mediu o agente **nu**: o rodapé da roupa apontava um caminho macOS e na VM o especialista
se vestia de nada. A [SIS-313] acrescentou que conserto aplicado a um worktree não alcança os outros.
Falta a metade pior, e ela apareceu no mesmo dia: **o agente do worktree pode carregar uma frase que o
principal já REVOGOU** — e aplicá-la com confiança, porque nada no arquivo diz que ela morreu.

Medido antes de despachar o `montador` deste vídeo, num worktree **613 commits atrás** de `origin/main`:

| eixo | worktree | principal |
|---|---|---|
| agentes divergentes | **43 de 44** | — |
| agentes ausentes | 4 (`remapeador-de-cenas`, `cacador-de-problemas`, `analista-de-audiencia`, `assistente-producao-vm`) | 48 |
| `montador.md` · `inSec` | *"no fluxo com corte de material bruto, `inSec` é **tempo-BRUTO**; quem monta a timeline aplica os cortes"* | *"em QUALQUER fluxo, `inSec` é o tempo do arquivo que vai ao ar"* — **revogada em 06/ago** |
| `pesquisa-imagens.md` | 31.461 bytes, 14 seções a menos, citando **[PESQ-38]** e **[PESQ-32]** | 81.849 bytes, e ali as mesmas linhas são **[PESQ-44]** e **[PESQ-42]** |
| `scripts/qc-espelho-modelo.mjs` | **não existe** | existe, e a doutrina do montador manda rodá-lo |

**O tamanho do estrago que não aconteceu:** neste projeto há **274,428 s de cortes** entre o
`words.json` (BRUTO, última palavra em 22:46) e o master que vai ao ar (18:24,8). Um espelho ancorado
no relógio bruto sai plausível em segundos, errado por minutos crescentes, e **não dispara gate
nenhum** ([SIS-125]). O `montador` do worktree teria obedecido a doutrina que tinha na mão — e estaria
certo em relação a ela.

**Por que isto é uma lei separada e não um adendo da [SIS-311]:** nu e desatualizado falham em
direções opostas. O agente nu **não sabe** algo, e a falta costuma aparecer (ele pergunta, ou entrega
genérico). O agente desatualizado **sabe errado**, com a mesma segurança de quem sabe certo, e o texto
que o corrigiria existe — a 613 commits de distância. Pior: o truncamento faz o especialista **citar
um ID que hoje diz outra coisa**, e citação de lei é o que esta casa aceita como prova.

> *Doutrina velha não é doutrina faltando. Faltando, o agente hesita; velha, ele executa.*

**O conserto, e ele é uma linha** — antes de despachar qualquer especialista de dentro de um worktree,
compare com o principal e sincronize:

```bash
cd <principal> && cp -f .claude/agents/*.md marcas/<marca>/agentes/*.md <worktree>/...
for p in .claude/agents/*.md; do cmp -s "$p" "<worktree>/.claude/agents/$(basename $p)" || echo "DIVERGE: $p"; done
```

Aplicado aqui: 48 de 48 agentes e 33 de 33 roupas sincronizados, 0 ponteiros macOS vivos (os dois
`/Users/` restantes são **prosa descrevendo o defeito**, em `executor-de-molde` e `editor-de-arte` —
punir quem documenta a armadilha ensina que documentar não adianta).

E rode os scripts **do principal**, com `cd` explícito em cada chamada: o `out/` dos dois lados é o
mesmo symlink para `/dados/out`, então o artefato é compartilhado e só o CÓDIGO divide as máquinas.

Agente-raiz: nenhum — o defeito é de PROVISIONAMENTO. Quem cria worktree entrega os agentes do commit
daquele momento e eles congelam ali. Enquanto a criação não sincronizar sozinha, a conferência é da
sessão que despacha, e o lugar dela é o prompt da estação, não a memória de quem lembrar.

### SIS-316 · `catch → false` transforma "a ferramenta não existe" em "a resposta é não" (12/ago/2026, estação PESQUISA do `a-guerra-da-ucrania-deixou`)

O `pesquisa-pessoas` reportou, de passagem, que `src/agent/upscale-tools.mjs` não roda na VM: usava
`sips` (macOS puro) e o binário `infra/upscale/realesrgan-ncnn-vulkan`, ausente aqui. Ele contornou
com LANCZOS e seguiu. O relato subestimava o estrago em uma ordem de grandeza.

**O `sips` estava dentro de `localPng()` — e por `localPng()` passa também `confereImagem()`**, a
validação de identidade por VISÃO que **todo** agente `pesquisa-*` usa para responder "esta foto
mostra mesmo a pessoa?". A função fecha em `catch { return false }`. Na VM, portanto, o
`ENOENT: sips` não virava erro: virava **"não é a pessoa"**. Toda foto reprovava, em silêncio, na
máquina onde a caça de mídia roda desde 05/ago — e o modo de falha aponta para o lado que parece
zeloso, que é o pior: um agente que rejeita candidato bom parece rigoroso, não quebrado.

**Por que o gate não pegou.** O `qc-portabilidade.mjs` conhecia 14 armadilhas medidas e `sips` não
era uma delas, embora seja da mesma família exata do ImageMagick que ele já cobria (ferramenta de
imagem que só existe de um lado). **Uma tabela de armadilhas conhecidas não é uma tabela de
armadilhas** — ela cobre o que já mordeu, e o buraco entre as duas é onde o próximo defeito mora.

**A regra.** *Num `try/catch` que devolve veredito, "não consegui medir" e "medi e deu não" TÊM DE
SER VALORES DIFERENTES.* É a [SIS-46] ("ausência de medição não é aprovação") pelo avesso: ausência
de medição também não é REPROVAÇÃO. Todo predicado que responde bool sobre o mundo precisa de um
terceiro estado, ou de um `throw` que suba — e quem escreve `catch { return false }` está declarando
que o mundo respondeu, quando na verdade ninguém perguntou.

**Consertado (aplicado e provado nesta sessão):**
1. `localPng()` agora normaliza com `ffmpeg`, que já era dependência do próprio arquivo (o cover 4K
   usa ffmpeg três linhas abaixo) — zero dependência nova, e roda nos dois sistemas. O
   `scale='if(gt(iw,ih),min(1200,iw),-2)':'if(gt(iw,ih),-2,min(1200,ih))'` reproduz o `-Z 1200` e é
   **melhor que o original**: nunca amplia, enquanto o `sips -Z` esticava — ampliar 500px antes de um
   SR x4 só multiplica borrão. Medido nos três casos: 1500×1500→1200×1200, 4640×5460→1020×1200,
   4096×2250→1200×660.
2. `upscale4k()` testa `existsSync(RE_BIN)` e devolve `{ok:false, indisponivel:"real-esrgan"}` com o
   caminho do conserto. O Real-ESRGAN é binário INSTALADO, não código do repo: nenhuma edição o faz
   existir na VM, e falha declarada vale mais que ENOENT cru — sem ela, quem chama conclui que a
   FONTE é ruim e recaça a foto, queimando cota por um defeito de máquina.
3. `qc-portabilidade.mjs` ganhou o padrão `sips` (so: "mac"), com a forma portável ao lado. Provado
   com arquivo-isca: acusa `:4 sips (macOS puro)` e imprime o conserto. Varrido o repo — não havia
   outra ocorrência.

**O que fica em aberto, e é de instalação, não de código:** a super-resolução do estúdio segue
indisponível na VM. Como a caça é aqui, todo `pesquisa-*` depende de LANCZOS (não-generativo, logo
legítimo para rosto) até `infra/upscale/` existir deste lado. ⛔ O que NÃO se faz é trocar por
upscaler generativo em retrato — isso altera identidade, e a regra de nunca fabricar rosto não abre
exceção para "só melhorar a resolução".

Agente-raiz: nenhum agente errou — o `pesquisa-pessoas` acertou ao reportar e ao contornar sem
inventar. O defeito é do gate, e o gate foi consertado.

### SIS-318 · O gate desligado por alarme falso ficou 3 dias desligado, e a calibração que faltava era de LEITURA DO CONTRATO, não de regex (12/ago/2026, estação TEXTOS DE TELA do `mamute-de-volta`)

**O que aconteceu.** O `qc-textos-tela.mjs` foi ligado em 09/ago e desligado na mesma hora: no
`especies-humanas` produziu **24 falhas, todas falsas**. A doutrina da estação passou a dizer
⛔ *"NÃO ligue antes de calibrar a regra 1"*, com a calibração descrita em uma linha — e ficou
assim, escrita e não feita, de 09 a 12/ago. Nesse intervalo o gate rodou zero vezes.

**O medido, nos 9 projetos que têm `textos-tela.json`:**

| | antes | depois |
|---|---|---|
| `especies-humanas` | 24 falhas | 0 (10 avisos) |
| `orcas-nao-matam` | 28 falhas | 0 (24 avisos) |
| `planeta-em-meteorito` | 11 falhas | 0 (1 aviso) |
| os outros 6 | PASS | PASS |

**63 falhas, todas falsas.** E a causa não era o regex: era o gate ler `variantes_ouvidas` como
*"lista de grafias erradas"* quando o contrato diz *"como o transcritor OUVIU"* — e **o transcritor
muitas vezes ouve certo**. O redator que escreve `["Homo sapiens", "sapiens"]` está declarando as
duas formas do mesmo referente; o gate acusava a grafia canônica de conter a si mesma, e a única
maneira de silenciá-lo seria OMITIR a forma correta da lista, mentindo sobre o que foi ouvido.
*Gate que só se cala com uma declaração falsa está pedindo a mentira, não achando o defeito.*

**As duas leituras que entraram no código:**

1. **A grafia adotada aparecer em `variantes_ouvidas` é AVISO, não falha** — é o caso normal de o
   transcritor ter ouvido certo. O caso que a versão anterior mirava (a grafia adotada ser, ela
   mesma, o erro) existe, mas nenhum gate o separa sem saber do mundo.
2. **Variante CONTIDA na grafia é forma curta; erro de audição não é contido.** `"sapiens"` ⊂
   `"Homo sapiens"`, `"neandertais"` ⊂ `"neandertal · plural: neandertais"` — mas `"Celta"` ⊄
   `"Ceuta"`. Trocar uma palavra por outra não gera substring; encurtar um nome gera. Este sinal é
   geométrico e não depende de o redator preencher `_forma_curta` do jeito certo — no
   `especies-humanas` esse campo existia e era PROSA (*"a fala usa 'o sapiens' solto seis vezes"*),
   então a comparação por igualdade nunca casava. A intenção estava escrita e o gate não a lia.
3. Mais a metade que faltava do teste de vazamento: **acusar só quando a tela usa a variante NO
   LUGAR da grafia** — texto que traz a grafia canônica não substituiu nada.

**A prova de que não foi só desligar o alarme** (a pergunta que todo relaxamento de gate tem de
responder): teste sintético com grafia `"Ceuta"`, variante `"Celta"` e um rótulo escrito `"CELTA EM
2024"` sai `exit 1`, nomeando o rótulo. O mesmo arquivo com `"CEUTA"` passa na regra 1. O defeito
que deu nome ao gate continua pego.

**A lei.** Alarme falso em massa é bug de prioridade alta, e a resposta certa é calibrar na hora —
não desligar e anotar a calibração para depois. Doutrina que diz *"não rode X até consertar Y"* é
uma dívida com prazo indeterminado: enquanto ela existe, ninguém está protegido E ninguém está
olhando. E quando a suspeita for de regex, leia primeiro o CONTRATO do campo: 63 dos 63 alarmes
vinham de o gate atribuir ao dado um significado que o dono do dado nunca lhe deu.

Agente-raiz: nenhum agente errou — o `redator-de-tela` declarava certo nos três projetos acusados.
O defeito era do gate, e o gate foi consertado e ligado em `scripts/estudio/estacoes/textos.md`.

### SIS-319 · O conversor rasterizava a PÁGINA DE ERRO e imprimia ✓ — todo leitor de arquivo baixado precisa perguntar "isto é mesmo o que eu pedi?" (12/ago/2026, estação PESQUISA do `ate-que-altura-construir`)

**O que aconteceu.** Na caça de logos, o `upload.wikimedia.org` devolveu **HTTP 429** ao IP da VM
no meio do lote. O download gravou os 2.256 bytes da página de erro — `<!DOCTYPE html>` — com nome
`.svg`. O `scripts/stock/_svg-para-png.mjs` leu o arquivo, **rasterizou o HTML de erro** e imprimiu:

```
✓ .../logo.png  900x673  (de .../logo.svg, viewBox 3x2)
```

Exit 0, PNG no disco, dimensões plausíveis. **Uma logo corrompida a caminho do vídeo.**

**Por que ninguém pegou.** O script lia o arquivo como texto e ia direto ao regex de
`width`/`height`; sem casar, o `viewBox`; sem casar, o **fallback `w=3; h=2`** — uma proporção
inventada para sobreviver a SVG mal formado. Esse fallback é a peça que transforma "não entendi o
arquivo" em "assumi 3×2 e segui". O Chrome então fotografa qualquer coisa que o navegador saiba
desenhar, e HTML ele sabe. Quem pegou foi um agente conferindo o **cabeçalho dos arquivos à mão**
depois da caça; nenhum gate olhava.

**A regra.** *Toda ferramenta que consome arquivo vindo da rede tem de conferir que o conteúdo é do
TIPO que ela pediu, antes de interpretá-lo — e falhar duro quando não for.* Erro de rede raramente
chega como exceção: chega como **200 com corpo errado**, ou como corpo de erro gravado sob o nome
certo. Um fallback tolerante somado a um renderizador genérico produz sucesso falso, que é pior que
falha: a falha para a linha, o sucesso falso segue até a tela.

⚠️ **O sinal:** dimensões que não têm relação com o desenho (`viewBox 3x2` num logo), ou um `✓` num
arquivo cujo tamanho não bate com a complexidade esperada. Se a proporção vem do fallback, a
ferramenta está dizendo que não entendeu o arquivo — e seguindo assim mesmo.

**Consertado (aplicado e provado nesta sessão):** guard no topo do `_svg-para-png.mjs` — o conteúdo
(sem BOM, sem espaço à frente) tem de trazer `<svg` nos primeiros 4 KB; se não, sai **1** com o
motivo e os primeiros bytes, e diz explicitamente quando é HTML. Provado contra uma página de erro
429 fabricada: `EXIT=1` e **nenhum PNG gerado**. Contraprovado nos dois casos que um guard ingênuo
quebraria: os SVG reais da caça (KONE, bandeira dos Emirados, NYT) seguem convertendo, e um SVG com
**BOM + comentário do Illustrator antes da tag** também — por isso a régua é "contém `<svg` no
começo do arquivo", não "começa com `<svg`".

Agente-raiz: nenhum agente errou. O `pesquisa-logos` fez o certo — conferiu o cabeçalho, viu o HTML,
não deixou o arquivo passar e **relatou a ferramenta**. O defeito era do conversor, e o conversor
foi consertado. Fica a pergunta de quem varre: quantas outras ferramentas desta casa leem arquivo
de rede sem conferir o tipo?

## [SIS-320] Conserto portado pela METADE deixa o sintoma intacto — e a capacidade é dada como morta

**Medido (`mamute-de-volta`, 12/ago/2026):** o Motion Array estava com **zero downloads desde
07/ago** e o dossiê da produção o classificava como *"capacidade órfã: uma das quatro plataformas
está de pé e inutilizável"*, com o conserto supostamente parado num arquivo auxiliar
(`_tmp-mmt-ma-baixar.mjs`, 10/ago) que *"nunca foi portado"*. Ao abrir os dois arquivos, o conserto
**tinha sido portado — só que pela metade**: as *pills* de formato (uma das duas correções medidas
em 10/ago) estavam no `baixar.mjs` canônico desde então; a escolha do **botão herói** não. E é a
metade que faltava que produzia o sintoma inteiro: a página serve o painel duas vezes (desktop e
mobile), o gêmeo mobile vem antes no DOM com caixa **0×0**, e clicar nele não levanta erro nenhum —
clica o canto da viewport. O log dizia `✗ download não iniciou (timeout 150s)` item após item, que
se lê como sessão caída ou bloqueio da plataforma. **Cinco dias de plataforma assinada parada por
meia dúzia de linhas que ficaram para trás.**

**A segunda metade da lição, no mesmo dia:** portada a escolha do herói, o log passou a imprimir
`botão do herói: 190×48` (a caixa exata medida em 10/ago) e o painel de formato abriu — mas dois
itens seguidos morreram em `painel de formato sem 4k/HD (só preview/original)`. Era um defeito de
ORDEM que estava **dormindo atrás da falha anterior**: com o herói clicando, o layout novo aparece
e o seletor `.formats:visible` passa a casar um card da grade "Related Stock Video". Enquanto o
clique falhava, esse ramo nunca era alcançado e parecia correto.

**A regra:** (a) quando um conserto vive num arquivo auxiliar, portar é a operação inteira — se ele
tem duas correções, meia porta não vale nada, porque **o sintoma de meio conserto é idêntico ao de
conserto nenhum**; (b) antes de repetir "X nunca foi portado" vindo de um dossiê, **diff nos dois
arquivos** — o achado envelhece e mandar consertar o que já está consertado é tão caro quanto não
consertar; (c) ao destravar o primeiro passo de uma cadeia, **espere o defeito seguinte acordar** e
rode de novo em vez de declarar vitória no primeiro sinal de progresso.
*Falha que mascara falha se conta uma vez e se conserta duas.*

### SIS-314 · `video_publicado` é SÉRIE TEMPORAL, e um GROUP BY sem `max(coletado_em)` devolve a linha que o banco quiser (12/ago/2026)

A tabela é `(youtube_id, coletado_em)` — **uma linha por coleta**, todo dia às 00:30. Perguntar
`select youtube_id, titulo_vigente ... group by youtube_id` devolve um título QUALQUER do grupo, e
títulos mudam: o vídeo do Acre já teve dois. A caça de duplicata por nome comparava contra o título
**antigo** ("Por que o Brasil pagou 2 milhões pelo Acre?") em vez do vigente ("Acre: O único estado
que o Brasil comprou de outro país") e achava **zero** — um gate que roda, sai com exit 0 e não
protege nada. Com `max(coletado_em)` no SELECT (que no SQLite fixa de qual linha as demais colunas
saem), achou os dois casos reais na primeira execução.

> *Perguntar a uma série temporal sem dizer "quando" é deixar o banco escolher por você — e ele
> escolhe em silêncio.* Vale para toda tabela desta casa cuja chave tem uma data dentro:
> `video_publicado`, `retencao_curva`, `metrica_video`, `pauta_evento`.

Agente-raiz: nenhum · a query vive em `scripts/estudio/situacao.mjs`.

---

### SIS-327 · Trava de segurança que dispara em rotina é a mesma falha que trava nenhuma — calibre pela RECUPERABILIDADE, não pelo risco

> 🔀 **Renumerada de `SIS-325` em 12/ago/2026.** Duas sessões paralelas destilaram ao
> mesmo tempo e pegaram o mesmo número; o merge preservou as DUAS leis, e a que aparece
> depois no arquivo foi renumerada. O `SIS-325` continua existindo e é de outra lei —
> confira `seed/DE-PARA-LEIS.md` antes de citar.

**12/ago/2026, primeiro dia do atendente de WhatsApp, e o defeito estava previsto por escrito no
próprio arquivo que o cometeu.** O agente que atende o Mateus e o Lucas roda headless, com as
permissões abertas — não há caixa de permissão para clicar. A decisão dele foi *"tudo, mas o
irreversível pede um SIM"*, e isso virou um hook `PreToolUse` com onze padrões bloqueados.

**Em uma hora de conversa, o guarda o fez autorizar: apagar um registro FALSO de 400 bytes e subir
arquivos para o bucket.** Rotina pura. Às 16:34 ele cortou: *"Para de ficar me pedindo autorização,
tô cansando já. Essas coisas você PODE e DEVE fazer. Tira esses filtros aí de segurança, mantém só
pra coisas realmente que exijam minha aprovação."*

**A régua errada era "isto pode dar errado?"** — quase tudo pode, e por isso ela barra quase tudo.
**A régua certa é "se der errado, o que se perde volta?"**: mídia bruta se re-baixa, processo morto
reinicia, commit volta pelo reflog. Não voltam quatro coisas — o que sai do bucket (versionamento
suspenso), a arte que um modelo pago desenhou, um vídeo publicado, e uma mensagem que chegou no
celular de outra pessoa. A lista caiu de onze padrões para nove, e os nove são esses quatro mundos.

**Por que isto é grave e não chatice:** quem responde "sim" cinco vezes por dia sem motivo responde
a sexta sem ler — e a sexta é a que importa. *O gate não morre quando é removido; morre quando é
obedecido no automático.* É a [[SIS-56]] («alarme falso é bug de prioridade alta») aplicada a uma
trava que pede consentimento humano, onde o custo do falso positivo não é ruído: é a erosão do
próprio consentimento.

**Dois corolários que a mesma tarde entregou:**

**1 · Autorização queimada por tentativa frustrada faz o dono repetir o sim.** O hook libera ANTES de
o comando rodar e nunca sabe o que aconteceu depois. Uma execução que travou no meio consumiu o
"SIM", e o Mateus autorizou a MESMA coisa três vezes (pedido `97b0`) — do lado de quem lê no
celular, indistinguível de um sistema que não escuta. Autorização agora vale 15 min e até 4
tentativas, contadas do PRIMEIRO uso e **nunca renovadas a cada tentativa** — senão um laço a
manteria viva para sempre, que é a trava sem vencimento da [[SIS-282]] em outra roupa.

**2 · A metade da bancada que PASSA é a que prova a calibração.** São 36 casos: 16 que barram e 20
que passam. Testar só o que deve barrar mede se o gate morde; só a outra metade mede se ele morde
quem não devia — e é essa que envelhece mal em silêncio, porque falso positivo não gera log de
incidente, gera cansaço.

**E uma nota sobre de onde veio o conserto:** três das regras novas — apagar a PASTA DE UM PROJETO
(que leva a arte junto sem a palavra `graphics` aparecer no comando), apagar `entregas/`, e a
distinção entre `killall node` e `pkill -f "<padrão exato>"` — saíram da bancada que o **próprio
agente barrado** escreveu enquanto operava. Quem apanha do gate o dia inteiro sabe onde ele erra.

## [SIS-328] · O sistema registra DEFEITO e não registra QUALIDADE — e é o positivo que não se recupera

> 🔀 **Renumerada de `SIS-308` em 12/ago/2026.** Duas sessões paralelas destilaram ao
> mesmo tempo e pegaram o mesmo número; o merge preservou as DUAS leis, e a que aparece
> depois no arquivo foi renumerada. O `SIS-308` continua existindo e é de outra lei —
> confira `seed/DE-PARA-LEIS.md` antes de citar.

*12/ago/2026 · laudo de QC · medido na VM*

O estúdio julga cena a cena por visão, e o veredito era descartado. Medido: **1 laudo vivo em todo
o disco** (`uruguai-despovoado`, 58 cenas, 03/ago) contra **751 cenas com arte em 15 projetos**, e
**zero no bucket**.

Mas o achado não é "faltava persistir". É a **assimetria**: o que o sistema gravava era só o que
está errado — `_fila-correcao.jsonl` (o que bloqueia) e `_melhorias.jsonl` (o que incomoda). Cena
que o juiz assinaria sem ressalva **não deixava rastro nenhum**.

**Por que a assimetria custa mais do que parece:** defeito é auto-recuperável — se você perder o
registro, a próxima passada o encontra de novo, porque ele continua lá na cena. Qualidade não. A
cena boa passa em silêncio, e a informação "esta ficou ótima" só existia na inferência que já foi
paga e descartada. **Perder o veredito de uma cena boa é perder trabalho; perder o de uma ruim é
adiar trabalho.**

**O que a ausência do sinal positivo obrigou a fazer, e o erro que produziu.** Sem "quais cenas
ficaram ótimas?", povoar a régua de arte teve de recorrer à **retenção do vídeo publicado** — que
mede o CAPÍTULO (roteiro, fala do apresentador, montagem da equipe), não a cena. O resultado:
**4 de 6 candidatos eleitos eram cenas desenhadas DEPOIS da publicação** (`simpsons-copa` publicado
19/jun, clipes de 22/jul; `putin-fronteiras-otan` publicado 16/mai, HTMLs de 08/ago). Foram
escolhidas por um número que não as inclui. E mesmo com as datas alinhadas o proxy é frouxo: o
entregável PT-BR é o XML que o Mateus monta no Premiere — a retenção mede o corte DELE.

*Proxy nunca é neutro: ele decide o que você vai achar. Quando o sinal direto é descartado, o
sistema não fica sem resposta — fica com a resposta de outra pergunta, e ela chega com cara de
certa.*

**Consertado:** migração v4 cria `cena_veredito` (veredito · rodada · juiz · **modelo** ·
n_corrigir · n_nota · achados, ligada por `cena_uid`); `scripts/db/projetar-qc.mjs` leva o laudo do
arquivo ao banco, idempotente por observação; o `revisar-no-lugar-do-mateus.mjs` chama sozinho ao
fechar, com falha ABERTA (se a projeção quebrar, a revisão já está em disco — projetar é degrau, não
gate). Medido no teste: 58 vereditos, **58 de 58 com `cena_uid` resolvido**, reprojeção devolve 0
novos.

⚠️ **Duas coisas que isto NÃO resolve, nomeadas para não passarem por resolvidas:**
1. **O revisor quase não roda** — 1 laudo para 15 projetos com arte. Persistir o que não é produzido
   não produz nada.
2. **Quem DESENHOU a cena continua sem registro.** A coluna `modelo` guarda quem JULGOU. Nem o HTML
   nem o `diario.jsonl` anotam o autor (medido: zero assinaturas nos HTMLs) — e o próprio
   `infra/modelos.json` declara o candidato "testar Opus 5 em arte, hoje Fable". Comparar dois
   modelos desenhando exige saber qual fez o quê, e hoje não dá.

## [SIS-329] · O ✓ de um handler de FECHAMENTO não mede nada — ele mede que a janela fechou

**Medido em 12/ago/2026** (`especies-humanas@arte`, caçando a última âncora FALTA do vídeo).
`out/_despacho/login-stock-mateus.log` (20:19Z) terminava assim:

```
✓ sessões persistidas. Agora: node scripts/stock/baixar.mjs <plataforma> "<busca>"
✓ sessões gravadas em out/_stock-perfil/ — teste com:
caught signal: 15
```

Dois ✓ e, 40 min depois, o `baixar.mjs` acusou **SESSÃO CAÍDA** no Storyblocks (sinal medido:
`a[href="/login"]` + `Sign Up to Download`). O login tinha sido MORTO por `signal: 15` antes de a
pessoa terminar de logar — e os dois ✓ saíram assim mesmo.

**A raiz, lida no código, não deduzida:**
- `scripts/stock/setup-login.mjs:59` — `ctx.on("close", () => console.log("✓ sessões persistidas"))`.
  O handler dispara **quando a janela fecha**, e a janela fecha igual se ninguém logou em nada.
- `scripts/stock/login-na-nuvem.sh:74` — `echo "✓ sessões gravadas"` **incondicional**, logo depois.
  O `set -e` não protege: o `setup-login.mjs` sai **0** ao fechar a janela, com ou sem login.

**Por que é caro:** ninguém relê o log de login na hora — relê-se DEPOIS, para decidir se a porta
está aberta. Um ✓ ali vira herança escrita, e esta casa já tem o precedente do outro lado
(`sessao-conferir.mjs` nasceu porque o `especies-humanas` atravessou TRÊS estações de QC repetindo
"a VM está deslogada" sem ninguém ter testado). É o mesmo defeito com o sinal trocado: **o impedimento
não medido vira herança; a abertura não medida também.**

**Consertado (12/ago):** o `on("close")` passou a escrever só o que sabe — *"o perfil foi gravado;
isto NÃO é prova de sessão viva"* — e o `login-na-nuvem.sh` agora **MEDE**, rodando
`sessao-conferir.mjs` e imprimindo o veredito por código de saída, com o **2 tratado como
"não mediu"**, nunca como "deslogado" (é por essa confusão que o Pexels entrou, [PESQ-12]).
Conferir ali é de graça e sem disputa de `SingletonLock`: o Chrome do perfil já morreu, porque o
`node` só retorna quando a janela fecha.

**A forma geral, que vale além do stock:** *toda mensagem de sucesso amarrada a um evento de
ENCERRAMENTO — `on("close")`, `atexit`, `trap EXIT`, `finally` — está afirmando sobre o
encerramento, não sobre o trabalho.* Se o texto fala de um ESTADO (sessão viva, arquivo válido,
backup íntegro), ou ele é medido ali, ou a frase tem de dizer que não foi. Vale também para o
`entregar.mjs --limpar` e para qualquer `trap` que declare limpeza concluída.

### SIS-335 · Proteção que não pergunta se o processo EXISTE não tem saída — e conserva justamente o bug que o conserto fechou (12/ago/2026)

O deploy preservava o `.sh` que cada máquina roda por ofício, para não trocá-lo debaixo de um ciclo em
curso. A intenção é certa. A implementação preservava **incondicionalmente, por prefixo de nome**, sem
nunca perguntar se havia processo — e isso fecha um laço sem saída: na máquina **ocupada** não se
deploya; na **ociosa** preserva-se do mesmo jeito. Não existe momento em que o arquivo seja atualizado.

E o arquivo protegido é o mais caro de todos. Medido na `estudio-render-2`:

    _render-4k-loop.sh   09/ago · 30.063 B · `--subir` 0 vezes
    na fonte             12/ago · 40.066 B · `--subir` 6 vezes

`--subir` é a flag que leva o clipe ao bucket assim que fica pronto. Sem ela a máquina renderiza, o
dead-man a recolhe e o resultado some — **o defeito das 6 cenas do `cerebro-quando-sonha` refeitas três
vezes.** A proteção estava conservando o bug que o conserto tinha acabado de fechar.

⚠️ **`pgrep -f` NÃO responde a pergunta** quando o nome do script está dentro da linha de comando de
quem pergunta. Medido na máquina PARADA: detector por `/proc` → **0** (correto); `pgrep -f` → **2**
processos que não existem. Quem "consertasse" com pgrep deixaria a proteção ligada para sempre **sem
perceber** — o sintoma é o arquivo continuar velho, que era o estado anterior.

⚠️ **E preservar só o `.sh` trocando os `.mjs` que ele chama é PIOR que não deployar.** O ciclo passa a
rodar meio código de ontem e meio de hoje, e o defeito que nasce daí não se reproduz depois, porque a
combinação não existe mais em lugar nenhum. *Versão misturada dentro de um ciclo não deixa rastro
legível.* Ciclo em curso → a máquina não recebe NADA, e é nomeada para a próxima passada.

**A régua:** proteção se decide pelo ESTADO medido, nunca pelo papel presumido. E toda proteção precisa
de um momento em que ela solta — se não existe, não é proteção, é congelamento.

---

### SIS-336 · Automatizar uma tarefa manual não a torna concorrente: revela que ela sempre foi (12/ago/2026)

`deploy-codigo.sh` rodava havia semanas sem trava e sem incidente. No **primeiro minuto** de vida do
timer que passou a chamá-lo, `systemctl --user enable --now` disparou a primeira execução no mesmo
instante em que uma execução manual rodava. Os dois deploys usam o mesmo `/tmp/novo-codigo` e o mesmo
`/tmp/c.tgz` em cada destino: um apagou a pasta entre o `tar` e o `rsync` do outro.

A ausência de trava nunca foi segura — só nunca tinha sido testada, porque **ninguém executa duas
cópias de um comando manual ao mesmo tempo**. O timer não introduziu o defeito; introduziu o segundo
executor que o revela.

**A régua:** ao pôr um script manual num relógio, a primeira pergunta não é "com que frequência" — é
**"o que acontece se duas execuções se cruzarem?"**. E `--now` cruza com você mesmo, no ato de ligar.

⚠️ A trava sai com **0**, não com erro: o outro deploy está fazendo exatamente este trabalho. Colisão
de timer com execução manual é rotina, não incidente, e alarme falso ensina a ignorar o alarme
([SIS-327]). Guardada por `command -v flock` — o util-linux não existe no macOS.

---

### SIS-337 · Verificação que roda DEPOIS do passo perigoso sem checar se ele deu certo não é verificação: é narração (12/ago/2026)

O deploy imprimia, com o `rsync` abortado dois centímetros acima na tela:

    rsync: [sender] change_dir "/tmp/novo-codigo" failed: No such file or directory (2)
    .mjs 293 → 293 · gates 91 → 91 · SIS 333
    ✓ scripts/_render-4k-loop.sh atualizado junto (nenhum processo o executava)

A contagem mede o **disco**, não a transferência — e um disco que já estava em dia devolve exatamente
os mesmos números de um que acabou de ser atualizado. O relatório era plausível, redondo e falso,
**dentro do arquivo escrito para acabar com código velho em produção**.

**A régua:** toda linha de "✓ pronto" tem de ser filha do código de saída do passo que ela descreve. Uma
medida do estado FINAL não distingue "mudou agora" de "já estava assim" — e é precisamente essa
confusão que faz o relatório mais convincente ser o de uma máquina que não recebeu nada.

⚠️ O caso é irmão do que a família dos mortos-silenciosos já cataloga, com um agravante: aqui a
verificação **existia e rodava**. O que faltava era ela ter o direito de dizer não.

---

### SIS-338 · `trim()` na saída de um comando come o espaço SIGNIFICATIVO da primeira linha — e o erro persegue quem está em primeiro lugar (12/ago/2026)

`git status --porcelain` emite `XY␣caminho`, e para arquivo alterado só na árvore o **X é um espaço**
(` M acervo/x`). Um `.trim()` na saída inteira remove esse espaço **só da primeira linha** — as outras
mantêm o deles, porque `trim` só toca as pontas da string toda. O `slice(3)` seguinte passa a cortar
um caractere do caminho.

**O sintoma é quase invisível de propósito:** o gate imprime `cervo/…` no lugar de `acervo/…`,
`claude/…` no lugar de `.claude/…`. Um caminho *quase* certo. E ele **muda de arquivo a cada
execução**, porque persegue quem estiver em primeiro lugar na lista — o que faz o defeito parecer
intermitente, e defeito intermitente ninguém investiga.

*Caminho quase certo é pior que caminho ausente.* Ausente faz perguntar; quase certo manda procurar um
arquivo que não existe, e a conclusão natural de quem procura é *"o gate está desatualizado"* — que é
exatamente a leitura que desliga o gate.

**A régua:** ao fatiar saída de comando por POSIÇÃO, nunca normalize a string inteira antes. Corte o
terminador (`replace(/\n+$/, "")`) e nada mais — cada linha é um registro de largura fixa, e o
primeiro caractere dela pode ser dado.

⚠️ **A família é maior que o `trim`:** todo pré-processamento que "limpa" antes de parsear pode comer
campo vazio significativo — `split` que descarta vazios em CSV, `filter(Boolean)` em coluna de largura
fixa, `awk` colapsando espaços num campo que os usa como valor. **O que separa é que aqui o dado ERA
um espaço.** Irmãs: [SIS-337] (a verificação que narra em vez de checar) e a família dos
mortos-silenciosos — as três reportam com aparência de normalidade.

⚠️ Encontrado com `od -c` na saída crua, depois que o defeito saltou de um arquivo para outro entre
duas rodadas do mesmo comando. *Quando o erro troca de alvo sem o código mudar, a suspeita é a ORDEM,
não o conteúdo.*

---

## [SIS-339] · O que economiza o recurso escasso não pode depender dele — a dependência circular que não dá erro

O **run fundido** ([ARTE-102]) é o que mais reduz carga de arte: cenas vizinhas viram beats de UM
arquivo, com câmera contínua. Cada cena a menos é **uma invocação de agente a menos** — e a conta
dessa invocação é brutal:

| | tokens |
|---|---|
| custo FIXO por invocação (doutrina + catálogo + ofício + exemplares) | **~66 mil** |
| a especificação da cena em si | **~130** |

**500 para 1**, e pago por cena, porque o `desenhar-cenas.mjs` despacha *um agente por cena* — apesar
de a estação dizer "lotes de 6–10". *Doutrina e código discordavam, e quem executa é o código.*

Só que a fusão era decidida em `conceito-visual.fluxo`, e **só o `diretor-de-arte` escreve ali — em
Fable**. O mecanismo que alivia o Fable exigia o Fable. Quando ele trava, que é quando a fusão mais
vale, ela fica inalcançável. Medido: `quasares-primordiais` com 24 runs fundidos, `orcas-nao-matam`
com **zero** — e 8 runs mecanicamente elegíveis esperando alguém com cota para apontá-los.

**A régua:** *toda capacidade que existe para poupar um recurso tem de ser alcançável sem ele.* Se a
decisão exige julgamento, o julgamento vai para o modelo que NÃO é o gargalo; se é mensurável, vira
script. A detecção aqui é mensurável — adjacência, faixa, duração e presença de arte —, e virou
`scripts/fusao-candidatos.mjs`, determinístico. O que continua sendo julgamento (*este corte seco é
proposital?*) fica com quem lê a fala.

⛔ **Nunca funda através de faixa.** Juntar composição com invenção faz a cena fundida virar invenção
e ir para o gargalo — a fusão passaria a **alimentar** o Fable em vez de aliviá-lo.

⚠️ **E a continuidade não é preferência estética: é limite de arquitetura.** Dois HTMLs não
compartilham estado, então toda fronteira de cena é corte seco *por construção*. Os dois morphs mais
ambiciosos do acervo tentaram costurar arquivos independentes e deram os **piores cortes do conjunto**
(DIF 174,7 e 155,1 contra 30,7 de baseline aleatório). A 7,95 cenas/min — um corte a cada 7,5 s — é
essa a diferença entre filme e apresentação de slides.

**Varredura de 12/ago/2026:** 84 runs, **108 cenas absorvíveis em 8 vídeos** — ordem de 10 milhões
de tokens, e 84 cortes secos que deixam de existir.

---

### SIS-345 · O conselho que a própria ferramenta dá pode ser o errado para o seu contexto — meça o que a operação renderia antes de rodá-la (13/ago/2026)

> 🔀 **Nasceu SIS-343 e foi renumerada para SIS-345.** DUAS vezes: a 343 saiu 44 minutos
> antes. ⚠️ **A hora EXIBIDA pelo `git blame` mentiu sobre a ordem:** a dela aparecia como `13/08
> 01:01` e a minha como `12/08 22:45` — porque a dela foi commitada na VM (UTC) e a minha no Mac
> (−03). Lidas como estão, a minha parecia anterior. Quem responde é o **epoch absoluto**
> (`git show -s --format='%at'`), nunca o horário formatado. *Comparar carimbo de duas máquinas em
> fusos diferentes é comparar duas réguas com o zero em lugares distintos.*

Toda operação git na `estudio-top10` imprimia, havia 16 horas:

    warning: There are too many unreachable loose objects; run 'git prune' to remove them.

Seguir o conselho seria **inútil e perigoso ao mesmo tempo**. Medido antes de rodar:

- `git prune -n --expire=2.weeks.ago` (a régua conservadora, a mesma do gc automático) → **0 objetos**.
  Os 27.274 objetos soltos, 3 GB, são **todos das últimas duas semanas**: não são lixo antigo, são o
  rastro de um repositório muito movimentado;
- portanto, para render alguma coisa a poda teria de usar `--expire=now` — e aí ela apaga objetos
  recém-criados e ainda não referenciados. **Havia 3 processos git rodando e 5 worktrees ativos**, de
  cinco sessões paralelas. Um `commit` a meio caminho perde os objetos que acabou de escrever.

*A ferramenta conhece o próprio estado interno; ela não sabe que a máquina é compartilhada.* O aviso
descreve um sintoma real e prescreve o remédio de um repositório de um usuário só.

**O que se faz:** remover o `.git/gc.log` — que é o que DESLIGA a manutenção automática (o git só a
religa quando alguém tira o arquivo) — e deixar o `gc` do próprio git repacotar com a régua dele, que
já preserva as duas semanas. Custo de disco enquanto isso: 9,6 GB num disco com 82 GB livres, ou seja,
nenhuma urgência que justifique o risco.

**A régua:** antes de rodar operação destrutiva sugerida por ferramenta, **rode a simulação e conte o
que ela renderia**. Se a resposta for "nada", a operação não era necessária; se for "muito", pergunte
de quem é aquilo. Irmã: [SIS-282] (o recurso disputado numa máquina compartilhada) e a régua do núcleo
— *operação destrutiva mira o próprio escopo, nunca o guarda-chuva*.

### SIS-346 · display virtual é recurso disputado — xdpyinfo diz 'existe', nunca 'é seu' (12/ago/2026)

**Medido em 13/ago/2026, e derrubou o portão humano de stock inteiro.** O `login-na-nuvem.sh`
reaproveitava a tela virtual `:99` "se ela já existisse", testando com `xdpyinfo`. O raciocínio
parecia bom — não subir Xvfb duplicado por cima de um display ocupado. O furo é que **`xdpyinfo`
responde "existe", nunca "é sua"**.

E existe muita gente pegando display nesta casa: **`xvfb-run -a` começa a procurar display livre no
:99**, que era exatamente o número escolhido aqui. Com cinco caças de stock no ar, o disco mostrava
`/tmp/.X99-lock` até `/tmp/.X119-lock` ocupados, o `:99` pertencendo ao PID 1862453 — uma caça
qualquer. O portão então "reaproveitava" a tela de um estranho.

**O sintoma mente sobre a causa.** Telas do `xvfb-run` nascem com **cookie de autorização próprio**
(um `Xauthority` temporário que só o processo dele conhece). O Chrome do portão, sem esse cookie,
morre com `Authorization required, but no authorization protocol specified` seguido de
`Missing X server or $DISPLAY` — e essa segunda linha é a que se lê. Ela diz *"não há tela"* quando
o que há é **tela de outro dono**, e manda investigar Xvfb, `$DISPLAY` e instalação de pacote, que
estão todos certos.

**A regra:** display virtual é recurso disputado como porta de rede, e a prova de ocupação é o
**lock no disco** (`/tmp/.X<n>-lock`), não a resposta do servidor. Quem precisa de tela própria
escolhe uma faixa onde o alocador automático não chega — `xvfb-run -a` sobe a partir do 99, então o
portão desce para :77–:84 e testa o lock antes de tomar. E o Xvfb novo é conferido depois de subir
(`xdpyinfo` no display recém-criado), porque `Xvfb … &` falha em silêncio: o `&` engole o erro.

Vale para todo recurso que um alocador automático distribui por baixo do pano: porta, display, lock
de perfil, arquivo temporário. *"Está livre?" e "é meu?" são perguntas diferentes, e só a segunda
protege* — a primeira responde sim justamente quando outro processo acabou de tomar.

Irmã da [SIS-282] (dois downloads no mesmo arquivo de destino) e do bloco de trava de perfil do
`baixar.mjs`: em todos, o recurso é compartilhado, o conflito não dá erro na hora, e o dano aparece
disfarçado de outra coisa.

### SIS-347 · regra de detecção duplicada não corre risco de divergir — ela JÁ divergiu (12/ago/2026)

**A regra "isto é um desafio anti-bot?" existia TRÊS vezes nesta casa**, copiada em três arquivos que
nunca se olharam: `baixar.mjs` (que PARA a caça e dispara o WhatsApp), `vigia-portas.mjs` (o vigia
periódico) e `sessao-conferir.mjs` (o gate de sessão). Descobri porque consertei uma delas de manhã
e, à tarde, o mesmo defeito derrubou a produção pela cópia do lado.

**O defeito comum às três: `captcha` cru no regex.** Medido em 13/ago/2026, com a conta LOGADA e a
busca funcionando:

```
CASOU "captcha" — 1 elemento, visível=true, <P.text-center text-gray-700 text-sm>
texto: "This site is protected by reCAPTCHA."
resultados na grade: 48
```

48 vídeos na tela, 5.917 no contador, avatar no header — e o caçador **parou a caça, registrou
bloqueio e mandou WhatsApp para o Mateus**, que largou o que estava fazendo por um desafio que não
existia. O rodapé jurídico do reCAPTCHA é boilerplate: quase toda plataforma séria o carrega, em
página de busca e de login.

**E cada cópia era cega para o que as outras sabiam.** O `vigia-portas` tinha `access is temporarily
restricted`, `unusual activity`, `are you a robot`, `cf-challenge` e `prove you're human` — termos
que o autor anotou ter escrito *olhando a tela real do Shutterstock bloqueado*, porque o regex dele
não a pegava. Nenhuma das outras duas tinha esses termos. Ou seja: as três erravam em direções
diferentes, e a união do que sabiam nunca existiu em lugar nenhum. **A divergência não é o risco
futuro da duplicação — é o estado normal dela.**

**A regra, e ela tem três partes:**
1. Regra de detecção mora em **um módulo, uma vez**, importada por todos os consumidores. Se duas
   peças fazem a mesma pergunta, a pergunta tem um dono.
2. O módulo carrega **os casos de teste junto** (`antibot.mjs --testar`, 18 casos de texto real
   medido, com data e origem) — porque regra sem verificação automática é regra morta, e esta tem os
   dois lados caros: falso positivo para a produção e acorda o dono; falso negativo deixa a caça
   apanhar do anti-bot em silêncio.
3. **Palavra-chave se procura no estado SAUDÁVEL antes de virar detector.** "captcha" no rodapé,
   "blocked" em *"blocked in your region"*, "access denied" numa legenda de catálogo. Foi assim que
   `blocked` e `access denied` passaram a exigir vizinhança (`you are blocked`, `your access`) em vez
   de casar soltos.

*O CLAUDE.md já registrava exatamente este defeito sobre outro regex — o de cor, duplicado entre o
gate e o hook, "e as duas divergiram até o mesmo defeito passar por ambas, cada uma pelo furo que a
outra não tinha".* A lição não pegou porque estava escrita como história de um caso, e não como
regra sobre duplicação de regra. Fica aqui como regra.

### SIS-348 · quem cria recolhe — e o recolhimento mora na LARGADA, porque trap não roda em SIGKILL (12/ago/2026)

**A pergunta do Mateus foi a correção:** *"os Chromes não deveriam se encerrar sozinho? os agentes
de caça não deveriam baixar pra pasta local e depois encerrar o seu Chrome automaticamente? quero
uma solução definitiva pra essa problemática."* Eu tinha proposto um faxineiro que passa depois —
sintoma. Ele recusou e mandou consertar a raiz.

**Mas a raiz não é "fechar direito no fim", e é aí que a solução definitiva difere da óbvia.**
Um `finally` só roda em quem chega vivo ao `finally`. Medido na `estudio-top10` em 13/ago/2026:

```
19 servidores Xvfb órfãos, de :99 a :119, até 15 HORAS de idade,
todos reparentados ao init — e ZERO processos `xvfb-run` vivos.
```

O `xvfb-run` é um shell script que mata o servidor X por `trap`. **Trap não roda em SIGKILL** — e
esta casa tem SIGKILL legítimo de sobra: o `timeout` que embrulha as caças, o
`matar-pendurados.mjs`, o despachante recolhendo agente travado, a VM reiniciando. O dono some às
vezes; o lixo fica sempre. O mesmo vale para os 128 perfis de Chrome clonados (55 GB): cada caça
paralela cria a sua cópia — que é o jeito CERTO de não disputar o `SingletonLock` do perfil
compartilhado — e nenhuma a recolhe.

**A regra: o recolhimento mora na LARGADA, não no fim.** A próxima execução limpa o que a anterior
deixou. Assim não existe estado em que ninguém limpe, e a limpeza não depende de morrer bem. Fechar
direito continua valendo (handlers de SIGTERM/SIGINT entraram junto) — mas isso é a otimização; a
**garantia** é a limpeza na entrada, que é idempotente e roda sempre.

*O que depende de morrer bem não é garantia. Garantia é o que funciona depois da morte feia.*

**E o estrago não se parecia com "lixo acumulado".** O `xvfb-run -a` procura display livre **a partir
do :99** — exatamente a faixa que os 19 órfãos ocupavam. Quando o portão humano de stock foi abrir
a tela dele naquele dia, herdou o `:99` de uma caça morta, sem o cookie de autorização dela, e o
Chrome caiu com `Missing X server or $DISPLAY` — mensagem que manda investigar Xvfb, DISPLAY e
pacote, todos corretos ([SIS-346]). Lixo de recurso disputado não aparece como disco cheio: aparece
como o próximo processo falhando por um motivo que não existe.

**A ordem importa e não é estética:** recolher ANTES de alocar. Recolher depois deixaria esta
execução no fim da fila de displays, atrás do lixo que ela mesma acabou de varrer.

**Três travas, porque o verbo é destrutivo e a máquina é compartilhada:** só mata Xvfb (a) sem
`xvfb-run` dono vivo, (b) sem NENHUM processo com aquele `DISPLAY` no ambiente e (c) mais velho que
20 minutos. E só remove perfil clonado se o principal estiver íntegro — sem fonte viva, o clone
deixa de ser derivado e vira a única cópia. Confere, depois apaga; nunca o contrário.

### SIS-349 · registro de impedimento sem leitor é diário, não trava — e o commit que escreve inclui quem lê (13/ago/2026)

**Medido em 13/ago/2026, com o Shutterstock em CAPTCHA:** o `baixar.mjs` REGISTRA bloqueio anti-bot
desde 07/ago — detecta, tira o print, sobe para o bucket, manda WhatsApp — e **nunca lia o próprio
registro antes de sair caçando**. Com a plataforma bloqueada e o bloqueio gravado no disco, cada
caça despachada pegava a trava, abria o Chrome, navegava até a busca, batia na mesma parede e
registrava a batida nº 2, 3, 4… enquanto o comentário do próprio arquivo diz, com todas as letras,
que *"insistir piora o flag do IP"*.

**Isto é a capacidade órfã na versão mais cara.** A órfã comum é trabalho desperdiçado: um gate que
existe e ninguém chama, um script que roda e ninguém lê. Esta é pior — o sistema **sabia** do
problema, tinha o problema escrito no disco, com print e horário, e continuava andando contra ele,
agravando exatamente aquilo que havia registrado.

**Por que passou despercebido:** a metade cara de escrever o alarme (detectar o desafio, fotografar,
subir, avisar o dono) foi construída com cuidado e testada. Ninguém perguntou *quem lê*. O
escritor e o leitor de um registro são duas peças, e a segunda não nasce de graça só porque a
primeira ficou boa.

**A regra:** ao criar um registro de estado que descreve um impedimento — bloqueio, quota estourada,
serviço fora, credencial vencida —, o commit que o escreve **precisa incluir quem o lê**. Sem
leitor, o registro é diário; com leitor, é trava. E a pergunta a fazer antes de fechar é literal:
*"o que acontece na próxima execução, agora que isto está gravado?"* Se a resposta for "a mesma
coisa de antes", o registro não serve para nada.

**⚠️ E a trava precisa vencer sozinha.** É a armadilha que esta casa já pagou no vigia da GPU —
válvula sem TTL que travou a produção esperando um humano que ninguém avisou. Aqui o vencimento não
é um relógio arbitrário: quem destrava é o `vigia-portas.mjs`, que roda de 30 em 30 minutos, mede a
porta de cada plataforma e limpa o alarme quando ela volta a abrir. O impedimento se resolve sem
pessoa nenhuma quando o bloqueio expira; a pessoa só entra quando o desafio exige clique humano — e
aí a mensagem de recusa traz o comando exato do portão, não um "peça ajuda".

*Uma batida a cada 30 minutos, feita por quem está medindo, é o preço de saber quando a porta
reabre. N caças martelando em paralelo é o que fecha a porta de vez.*

### SIS-350 · toda espera por pessoa tem prazo — e o destravador é parte da trava (13/ago/2026)

**Construí um portão humano para destravar CAPTCHA e ele virou, na primeira noite, o pior bloqueio
do dia.** Medido em 13/ago/2026: um `portao.sh shutterstock` ficou **33 minutos de pé com NINGUÉM
conectado** (zero conexões estabelecidas nas portas 5901/6080), segurando a trava do perfil do
Chrome. A conta do estrago:

- as caças esperavam a vez do perfil e desistiam;
- o `vigia-portas` — **que é quem destrava o alarme de bloqueio sozinho** — não conseguia abrir o
  perfil e voltava CEGO a cada 30 min (`Failed to create a ProcessSingleton`, 3 de 4 portas não
  medidas);
- e a trava que eu havia criado horas antes (o `baixar.mjs` recusa caçar em plataforma bloqueada)
  passou a depender de um destravador cego. Eu tinha escrito, na justificativa dela, que *"não é
  trava sem vencimento porque o vigia destrava em até 30 min"*. Era falso, e eu não sabia.

**A regra: toda espera por pessoa precisa de prazo.** Um portão que só fecha quando um humano fecha
a janela assume que o humano volta — e o humano legítimo vai dormir, fecha o notebook, ou abre e
esquece. Sem prazo, "aguardando o dono" é indistinguível de "travado para sempre", e a diferença só
aparece quando a produção já parou. Dois relógios, porque os dois casos existem: **abandono**
(ninguém conectou em 15 min → o portão foi aberto e esquecido) e **teto** (90 min mesmo com alguém
conectado → a janela ficou aberta, ninguém está resolvendo CAPTCHA por hora e meia).

**E a lição que generaliza para além do portão: toda trava automática tem um destravador, e o
destravador é PARTE da trava.** Ao escrever "isto se resolve sozinho porque X destrava", a pergunta
seguinte é obrigatória: *o que faz X falhar, e o que acontece então?* Aqui X disputava um recurso
(o perfil do Chrome) com quem ele deveria vigiar — e ninguém tinha olhado o log dele, que dizia
`VOLTA CEGA` havia horas. **Destravador que pode ficar cego transforma qualquer trava em
permanente, e o sintoma aparece longe da causa.**

Irmã da válvula-sem-TTL do vigia da GPU, que esta casa já pagou, e da [SIS-349] (registro de
impedimento sem leitor) — as três são a mesma família: o mecanismo de SAÍDA de um estado excepcional
recebe menos cuidado que o de entrada, porque a entrada é a parte que se está construindo quando o
problema está na cabeça.

### SIS-353 · casar as BORDAS de dois relógios não prova que o miolo casa (13/ago/2026)

> 🔀 **Nasceu como SIS-348 e foi renumerada.** Duas sessões destilaram um 348 diferente no
> mesmo dia: esta (13/ago 03:06, pelo sincronizador da VM) e a `quem cria recolhe` (12/ago 23:54).
> Pela [SIS-62], quem commitou primeiro fica com o número — a outra renumera. O conteúdo é o mesmo,
> só o ID mudou.

**Um espelho remapeado para o vídeo COMPOSTO não está no relógio da transcrição do master**, e a
diferença é invisível para quem só compara início e fim. O composto carrega dois termos que o
`_master-decupado.mp4` não tem:

- o **`gapSec` de cada card de título** — o card mudo ocupa aquele buraco no vídeo, e o espelho soma
  o gap a tudo que vem depois;
- os **spans preservados em P&B** (`classe:"riso-leve"`) — o ripple **não** os remove, mas um remap
  feito sobre o `_cortes.json` CRU os desconta como se removesse. `lerCortes()` devolve `.cortes`
  (só o que sai) e `.pb` (o que fica) exatamente para isso; somar o JSON cru na mão conta o riso
  como corte.

Medido em `dentro-do-sol` (154 cenas): espelho `0→1194,57s`, `words-final` `0,42→1186,46s`. **As
bordas batem em 4s** — e `wordsDoEspelho()`, que decide pelas bordas, declarou "cabe". Ponto a ponto
o desvio era de **−4,43s, −5,33s ou −8,33s** conforme o trecho: quatro cards de 3s (−12s) mais o
riso preservado (+3,90s) mais o offset da re-transcrição (+3,668s, medido por alinhamento de
n-gramas únicos, p05 3,636 / p95 3,698).

**O estrago:** o `_brief-arte.mjs` fatiava `words` direto no `inSec` e entregou ao editor-de-arte o
**WORD-LOCK DA FALA SEGUINTE**. A `s105` ("uma prova que você mesmo repetiria") foi coreografada
sobre a fala do Galileu, que é a cena de depois. Cobertura média da âncora na janela: **50,2%**.
Nenhum dos **121 gates de cena** acusou — todos verdes.

**E o gate que acusava mandava o conserto errado.** `qc-espelho-fala` reprovava 46 cenas + 22
âncoras fracas de um espelho **internamente correto**, e oferecia `--corrigir`: reescrever 46 `inSec`
sãos, com a arte já desenhada, para consertar um erro que estava na LEITURA. Um "melhor palpite
@5,9s" para uma cena em @275s é sintoma de relógio trocado, não de cena fora de lugar.

**A regra:** ao cruzar dois relógios, o teste é o MIOLO — a mediana do desvio ponto a ponto, não a
coincidência das pontas. E a conversão se DERIVA de `lerCortes()` a cada projeto (`gapSec` e `pb`
mudam), nunca se copia de uma medição antiga.

**Como ficou:** `scripts/lib/relogio-composto.mjs` deriva os degraus dos cortes, mede o offset
residual por alinhamento, e **se auto-afere** — só aplica se melhorar a localização das âncoras do
próprio espelho. `_brief-arte.mjs` e `qc-espelho-fala.mjs` consomem os dois a mesma lib. Rodada nos
17 projetos com espelho no disco: **aplica em 1, inócua em 16** (nos outros o espelho já está no
relógio das palavras — `ate-que-altura-construir` acerta 126/126 sem conversão). Depois:
`50,2% → 84,3%` de cobertura média, 69 cenas re-ancoradas, e o gate `FAIL(46) → PASS`.

*Auto-aferição é o que torna seguro mexer em código que toda produção usa: a conversão que não prova
que melhora não entra.*

### SIS-354 · Prova de backup errou TRÊS vezes seguidas antes de acertar — e cada erro devolveu um laudo plausível (13/ago/2026)

O Mateus pediu para mandar `mamute`, `ceuta` e `quao-fundo-terra` ao bucket e liberar 84 GB do Mac.
A pergunta era simples — *está tudo salvo?* — e eu a respondi errado três vezes, cada uma com número
convincente:

| tentativa | o que usei | o que devolveu | por quê estava errado |
|---|---|---|---|
| 1ª | `rsync --dry-run` | "faltam 124" | compara **mtime**, e o carimbo do objeto é a hora do UPLOAD |
| 2ª | `md5_hash` do GCS | "4 AUSENTES" | objeto enviado em PARTES não tem MD5, só CRC32C — campo vazio |
| 3ª | CRC32C local × remoto | "124 DIFEREM" | `--hex` dá `6d0987bb`, o GCS dá `bQmHuw==` — **mesmo valor, formatos diferentes** |
| 4ª | CRC32C em base64 dos dois lados | **124 idênticos** | ✓ |

E houve um quarto tropeço no caminho: a URL do `gcloud storage ls --json` traz `#<generation>` colado
no nome (`s01-foto-4k.mp4#1786521472259536`); sem remover, nome nenhum casa e o laudo acusa ausência
total.

**A régua: prova de backup exige o MESMO hash, no MESMO formato, do MESMO tipo de objeto.** Nenhuma
das três primeiras medições deu erro — todas deram um laudo detalhado e falso, do tipo que se copia
para um relatório sem desconfiar. *Verificação que pode errar em silêncio precisa ser verificada
contra um caso conhecido antes de virar autoridade* — foi por lembrar de um arquivo que eu tinha
visto na listagem que desconfiei da segunda.

⚠️ **E o erro que quase custou caro veio DEPOIS de acertar a medição.** Com 6 arquivos legitimamente
divergentes, o passo óbvio era subir o local por cima para "zerar a divergência". Medido antes: em
5 dos 6 o arquivo do BUCKET era maior e mais novo (`s115-cta-comentarios`: 28,0 MB de 12/ago 19:05
contra 8,7 MB de 12/ago 02:11 no Mac), e o do Mac era `qtrle/argb` em vez do ProRes 4444 da rota
nova. Eram os cards re-renderizados no conserto da declaração de alpha — subir o Mac teria
substituído o certo pelo velho. *Divergência não diz quem está certo; diz que alguém precisa olhar.*

Ferramenta: `node scripts/provar-no-bucket.mjs <proj> [subpasta]`. Irmãs: [SIS-344] (cada máquina com
a sua verdade) e a doutrina §8 (sobe → verifica → apaga, e a verificação é arquivo a arquivo).

### SIS-355 · O registro de uma cena REPROVADA descrevia a absolvição de outro gate (13/ago/2026)

O `desenhar-cenas.mjs` guardava, para toda cena que nasce reprovando, a **primeira linha da saída do
`qc-cena` que tivesse um colchete** (`find(l => /\[/.test(l))`). Parecia seguro: as falhas saem como
`[gate] detalhe`. Só que o **desempate imprime antes** — e a linha dele também tem colchete:

```
↻ <cena>.html [crédito-fantasma] PASSA sozinha — a reprovação era da máquina, não da cena
```

Numa cena onde **um** gate foi absolvido e **outro** seguiu reprovando, a nota do diário saía com a
frase tranquilizadora sobre uma cena que continuava barrada no portão.

Medido na `s140-ate-os-comuns-eram-gigantes` do `quasares-primordiais`: o `_portao.json` registrou
`ok:false · falhas:["tamanho"]` — herói a 104px contra piso 260, defeito real de [ARTE-176] — e o
`_arte-diario.jsonl` guardou *"[crédito-fantasma] PASSA sozinha — a reprovação era da máquina, não da
cena"*. A cena ficou **13h parada** com a nota ensinando a próxima sessão a não olhar; só uma
auditoria do `_portao.json` por hash a encontrou.

**A régua: quando um relatório mistura veredito e contra-veredito, quem extrai a nota tem de dizer
qual dos dois quer.** As falhas reais saem indentadas (`      [gate] …`, `qc-cena.mjs:716`); as linhas
do desempate carregam `↻`/`⚖`. O conserto é um filtro de duas condições — pescar `/^\s+\[/` **e**
descartar `/[↻⚖]/`.

*Registro que descreve o gate errado é pior que registro nenhum: o nenhum faz conferir.* É a mesma
família da [SIS-331] (laudo pago que não vira encomenda) e da [SIS-333] (falha registrada como estado
final), com uma volta a mais — aqui o registro não omite, ele **contradiz** o portão, e o leitor
seguinte acredita no registro porque ele é mais fácil de ler que o JSON.

### SIS-356 · O carimbo lido por DOIS scripts com regexes diferentes fica preso: o gate acusa e o recarimbador diz "já está certo" (13/ago/2026, estação QC do `dentro-do-sol`, agentes-raiz `scripts/qc-janela.mjs` + `scripts/recarimbar-ancora.mjs`)

O cabeçalho de cena carimba o `inSec` em **dois lugares** — `inSec FINAL 850.73` no sumário e
`Word-lock (−1074,7)` no bloco de coreografia — e dois scripts os leem: o `qc-janela`, que julga, e o
`recarimbar-ancora`, que conserta. Os dois tinham o MESMO regex, e o regex exigia `)` colado ao
número.

Aí a casa passou a escrever o relógio junto do carimbo, porque um projeto pode ter dois:
`Word-lock (−333.197 · relógio FINAL, words-final.json)`. Nenhum dos dois scripts casa mais com isso,
e cada um degrada de um jeito diferente:

| | o que acontece | efeito |
|---|---|---|
| `qc-janela` | cai no fallback `inSec N`, que casa com **qualquer** menção do cabeçalho | lê o número de OUTRA cena |
| `recarimbar-ancora` | lê o `inSec` do sumário, que já estava atualizado | diz `já em 850.73` e **pula** |

**O resultado é um estado que não se resolve sozinho: o gate acusa a cena todo dia e a ferramenta de
conserto declara que não há nada a fazer.** Medido: `s110`, `s146` e `s96` atravessaram **duas
passadas** de recarimbo intactas.

**E o modo de falha do lado do gate é pior, porque produz uma INSTRUÇÃO.** Na `s46` o cabeçalho
explica por que o painel direito é DENSIDADE e não pressão, citando *«a s31 (inSec 221.6)»* como a
cena que já tem a pressão. O gate leu 221,6 como âncora da s46 (a real é 333,197) e emitiu *"arte
ATRASADA 284.31s — SUBTRAIA 284.31s dos tempos do renderAt"*. A cena estava certa (a fala de
`words-final.json` na janela bate 100% com a âncora do espelho) e obedecer teria destruído arte sã —
com o agravante de que 284,31 s é a **soma dos cortes** do projeto, o que faz o falso positivo parecer
um problema de relógio e convida a "consertar" o vídeo inteiro. É a mesma armadilha que já contou
`FALTA` no `conceito-visual`: **menção não é estado**.

**Os consertos, e por que são três e não um:** (1) os dois scripts leem o número sem exigir o
fecha-parêntese — o qualificador é livre; (2) o fallback `inSec N` ignora o que vem precedido de id
de cena; (3) no recarimbador, `já em` só vale quando os **dois** carimbos batem — antes ele comparava
um carimbo certo consigo mesmo e dava o arquivo por resolvido. Resultado no `dentro-do-sol`: 1 FAIL
falso e 82 avisos → PASS com 4 avisos legítimos.

*Quando dois programas leem o mesmo campo com réguas próprias, afrouxar o formato não quebra os dois
igual: um passa a ler outra coisa e o outro passa a não ver nada — e o par forma um laço que se
declara resolvido.* Ver [[SIS-348]], [[ARTE-253]].

---

### SIS-357 · Vencer o achado numa ponta e deduplicá-lo na outra apaga defeito VIVO, e a fila fica limpa (13/ago/2026, estação QC do `dentro-do-sol`, agente-raiz `scripts/revisar-no-lugar-do-mateus.mjs`)

Dois programas guardavam metade de uma garantia cada, e cada metade estava certa. `consertar-cenas`
descarta o achado cujo `hash_html` envelheceu, e escreve a justificativa em voz alta: *"descartar é
seguro **porque o revisor re-julga toda cena cujo hash mudou** — se o defeito sobreviveu, o julgamento
novo o reencontra e reenfileira"*. O revisor faz exatamente isso: a encomenda sai de **todo** laudo
válido, inclusive o reaproveitado. Só que ela passava por um `Set` de deduplicação montado da fila
inteira **sem olhar o estado** — e lá estava o achado velho, agora `vencido`, para engolir o novo.

**A encomenda morria nas duas pontas, e o rastro que sobrava dizia o contrário do que aconteceu:** a
fila com 1 pendente, que a passada seguinte lê como vídeo são. Medido aqui: `recarimbar-ancora` tocou
73 cabeçalhos e venceu **174 achados sem mudar um pixel** — os 107 laudos re-ancorados batem byte a
byte com o frame de hoje, o que prova que o defeito continua no ar. Simulada antes do conserto, a
passada seguinte descartaria **130 achados CORRIGIR vivos em 71 cenas** como duplicata.

O conserto é uma linha (`if (x.estado === "vencido") continue`), e a escolha de não estendê-la a
`pronto` é deliberada: ali o conserto aconteceu, e o caso duvidoso — consertado sem mudar o frame —
erra para o lado que não gasta agente.

*Uma garantia dividida entre dois programas não é uma garantia: é uma aposta de que ninguém vai mexer
no lado que ela não vê. Quando um deles cita o outro na própria justificativa, a citação tem de ser
testada como código — não lida como promessa.* Ver [[SIS-356]], [[SIS-334]], [[SIS-331]].

---

### SIS-358 · Atalho de retomada que pula por PRESENÇA, não por conteúdo, apaga justamente o re-render que alguém pediu

O `_render-4k-loop.sh --subir` montava uma lista do que já está no bucket e, para cada cena da lista,
fazia `continue` **antes** de perguntar ao `render-pronto.mjs` se o clipe corresponde ao HTML atual.
A justificativa escrita ao lado era boa e verdadeira: *"o que o bucket já tem não se re-renderiza: é
VM sob demanda paga de novo pelo mesmo frame."*

Ela é verdadeira **enquanto a arte não muda depois do render** — e o caso em que alguém dispara um
re-render é exatamente o outro. Medido no `dentro-do-sol` em 13/ago/2026: 36 cenas com
`hash-diverge` (os agentes de arte melhoraram as cenas entre 05:51 e 11:40), o loop imprimiu

```
✓ nenhuma cena barrada · 121 clipe(s) para 121 cena(s).
```

e renderizou **uma**. Nenhuma linha do log dizia que havia divergência, porque o teste do bucket
roda antes e faz `continue` sem consultar ninguém. O laudo mais tranquilizador da noite descrevia a
falha completa da operação.

**A regra:** quando existe um módulo que é o DONO da pergunta "isto está pronto?", nenhum atalho
pode responder a essa pergunta por conta própria — ele só pode agir **depois** dela e **dentro** do
caso que o dono não cobre. Aqui o dono é o hash; o atalho do bucket vale só quando o módulo responde
`sem-clipe`, que é a máquina efêmera sem o arquivo no disco mas com o frame já pago.

Vale para todo lugar onde "existe no destino" faz as vezes de "está correto": o `subir-dds.sh` tinha
o mesmo desenho e subia por ausência, deixando o clipe velho de pé no bucket depois do re-render.
Sincronizador que pula por nome é barato e certo para arquivo imutável; para artefato que pode ser
REFEITO, a chave é o conteúdo.

*Atalho que atravessa a verificação não é atalho: é desvio — e ele devolve o resultado da
verificação que não fez.* Ver [[SIS-354]], [[REND-59]], [[SIS-344]].

---

### SIS-359 · A prova que AUTORIZA apagar tem de ter o mesmo escopo do que vai ser apagado

O `provar-no-bucket.mjs` existe para responder uma pergunta com consequência irreversível: *já posso
apagar isto do disco?* Ele lê os arquivos locais, compara o CRC32C com o do bucket e, quando tudo
bate, imprime `✅ TUDO SALVO — pode apagar o local com segurança`.

Em 13/ago/2026 ele imprimiu essa frase sobre o `ceuta-travessia-em-massa/_media` tendo comparado
**1 arquivo de 13**: a listagem usava `readdirSync` raso, então viu o `_master-decupado.mp4` do
primeiro nível e não viu os 12 mp3 dentro de `trilha/`. O laudo não mentia sobre o que mediu — ele
simplesmente concedia mais do que tinha medido.

O que expôs foi a aritmética, não o script: `find` contava 13 arquivos e o laudo dizia 1. **Sempre
que o número de itens que a prova examinou for menor que o número de itens que ela libera, a
diferença é dado sem backup.** Aqui o que escapou eram ~50 MB e por acaso também estavam no bucket;
com o master no lugar da trilha, teriam sido 9,8 GB de perda com laudo verde.

**A regra, e ela vale para qualquer verificação que preceda destruição** (limpeza de disco, remoção
por etiqueta, `--limpar` pós-entrega): o conjunto examinado e o conjunto autorizado são **um só
conjunto**, derivado no mesmo lugar do código. Quando um é definido pela listagem e o outro pela
frase final, os dois divergem em silêncio — e a divergência só aparece depois que o arquivo já foi
apagado.

O segundo furo do mesmo arquivo era da mesma família: a comparação casava por **basename**, então
`trilha/x.mp3` e `x.mp3` respondiam um pelo outro. Chave frouxa é escopo frouxo com outro nome.

*Uma prova vale pelo que ela cobre, não pelo que ela conclui.* Ver [[SIS-354]], [[SIS-344]].

---

### SIS-360 · Paráfrase de regra não é a regra: quem reimplementa herda os bugs que o original já corrigiu

Para medir a cobertura de arte da fila inteira, escrevi um script que decidia quem "precisa de arte"
com `s.modo !== "apresentador"`. Parece a definição óbvia, e por 14 dos 16 casos ela até coincide.

A regra de verdade mora em `scripts/estudio/situacao.mjs:264` e é outra:

```js
const anima = segs.filter(s => s.anima && !s._mergedInto && !s.mergedInto);
```

A diferença é a **fusão**: quando a direção marca `fundir:true`, vários segmentos viram UM arquivo
(o da cena-mãe) e os filhos nunca terão HTML próprio — por desenho, não por pendência. No
`cerebro-quando-sonha` (13/ago/2026) são 14 de apresentador **e 2 fundidas**: a minha paráfrase
contou 63 onde são 61 e acusou **3 cenas faltando onde havia 1**. Pior que o número: eu entreguei a
tabela dizendo que o painel estava errado, e o painel estava certo.

O comentário do próprio `situacao.mjs`, quinze linhas abaixo da definição, já nomeava exatamente
este defeito — *"FUSÃO DECIDIDA E NÃO REGISTRADA — o falso 'falta arte' que rodou 4 sessões"*
([ARTE-102], 03/ago). **A correção existia, estava documentada, e eu não a herdei porque não chamei
o dono da regra: reescrevi a pergunta.**

**A regra:** antes de escrever qualquer filtro que responda uma pergunta que o estúdio já responde
em algum lugar (*quem precisa de arte · o que está pronto · o que pode ser apagado*), **ache o dono
e chame-o**. Bash não faz `import`? A ponte é a CLI do módulo — é o que o `_render-4k-loop.sh` faz
com o `render-pronto.mjs`, e o comentário dele diz por quê: *"nunca reimplementar a regra aqui, que
seria a nona cópia"*.

O sinal de alarme é discordar de um número existente. **Quando a sua medição contraria um gate que
já roda, a hipótese de partida é que a sua está errada** — o gate acumulou correções de casos que
você ainda não viu. Só depois de reproduzir o resultado dele com o código dele é que a divergência
vira achado.

*Uma regra copiada nasce na versão de hoje e envelhece sozinha; a original continua aprendendo.*
Ver [[SIS-356]], [[SIS-358]], [[ARTE-102]].

---

### SIS-363 · Script criado por heredoc dentro de `bash -c` envenena todo `pgrep -f` que ele mesmo usa

Uma corrente de lotes de render travou em 13/ago/2026 com a VM **ociosa e cobrada por hora**. Cada
elo esperava o anterior assim:

```bash
while pgrep -f '_render-4k-loop.sh dentro-do-sol' >/dev/null 2>&1; do sleep 60; done
```

O render havia terminado — e o `pgrep` continuava encontrando alguém:

```
51790 bash -c cat > ~/emenda-cerebro.sh <<'EOS' #!/bin/bash ... _render-4k-loop.sh dentro-do-sol ...
```

Era o processo que **criou o script**. Escrever um arquivo por heredoc dentro de `bash -c` põe o
texto inteiro do script na linha de comando daquele processo, e ele fica vivo como pai do
`setsid nohup ... &` lançado em seguida. Resultado: o script pergunta *"o render ainda roda?"*,
encontra a própria cópia de si mesmo dentro do criador, e responde **sim** — indefinidamente.

**O sinal que revelou não foi o `pgrep`: foi o `load 0.00`.** Todas as peças apareciam vivas na
listagem de processos, nenhum log tinha erro, e o script estava "esperando corretamente". A única
evidência era a máquina não estar fazendo nada. *Falha que se apresenta como espera legítima não
tem mensagem de erro — tem ociosidade.*

**Como não cair:**

1. **Nunca crie script por heredoc dentro de `bash -c`** quando ele contiver o padrão que ele mesmo
   vai procurar. Escreva o arquivo local e copie (`scp`) — foi assim que os outros elos da mesma
   corrente escaparam.
2. Prefira um sinal que não seja texto: arquivo-marca (`.lote-ativo`), lock de diretório, ou
   `pgrep -x` no nome exato do executável em vez de `-f` na linha inteira.
3. Ao vigiar uma corrente, **meça trabalho, não presença**: `load`, frames novos, mtime do log. Um
   processo vivo prova que alguém está esperando, nunca que algo está acontecendo.

*A pergunta "isto ainda está rodando?" respondida por busca de texto encontra o texto da pergunta.*
Ver [[SIS-358]], [[SIS-361]].

### SIS-367 · BANDEIRA DE EMERGÊNCIA NÃO ENTRA EM CAMINHO AUTOMÁTICO — CONDUTOR DE LOTE É O HÁBITO, POR DEFINIÇÃO (13/ago/2026)

Um condutor de LOTE é o hábito por definição: é ele que roda projeto atrás de projeto sem ninguém
olhando. Então toda bandeira de emergência que ele carregue deixa de ser emergência no primeiro uso
— e nada no texto acusa, porque a bandeira foi declarada uma vez, no código, e o log só a repete.

**MEDIDO em 13/ago/2026.** O `scripts/lote-render.sh` nasceu às 20:08 chamando
`_render-4k-loop.sh "$PROJ" 1 --subir --sem-portao`. O arquivo chamado documenta a própria bandeira
uma linha acima da implementação (`_render-4k-loop.sh:80`): *"existe para emergência (e diz isso em
voz alta), NUNCA COMO HÁBITO"*. Nem a mensagem do commit, nem o cabeçalho de 18 linhas do script,
nem lei nenhuma mencionavam a palavra "portão".

O que o portão barraria naquele momento, aplicando a régua do `portao_ok()` (carimbo `ok`,
`indefinidos` presente e vazio, hash sha1:12 do HTML batendo):

| projeto | cenas | barraria | por quê |
|---|---|---|---|
| `fatos-a380` | 79 | **19** | 2 reprovadas · 16 carimbo de outra versão · 1 sem carimbo |
| `planeta-em-meteorito` | 34 | **25** | 21 sem carimbo · 4 hash velho |
| `cerebro-quando-sonha` | 61 | **61** | não existe `_portao.json` em lugar nenhum |
| `dentro-do-sol` | 121 | 0 | — |
| `quasares-primordiais` | 95 | 0 | — |

**105 cenas** iriam ao encode 4K, em VM cobrada por hora, sem gate nenhum ter olhado. E os dois
últimos projetos são a prova de que ligar o portão não custa nada onde o trabalho está certo: ele
libera tudo.

Com `--sem-portao` o `qc-cena` **também não roda** — é o ramo do `else` que o dispara para cena sem
carimbo. Não é só deixar de conferir: é não medir, e portanto **não deixar rastro de que não mediu**.

**A lei:** *bandeira de emergência não entra em caminho automático.* Emergência é gesto de humano
com o dedo no teclado, uma vez, com a razão dita em voz alta. Se um laço a carrega cravada, ela
virou o padrão — e o padrão perdeu o gate. Quando o automático precisa mesmo pular a régua, o certo
é ele **parar e dizer o que pularia**, não pular calado.

**Corolário, e é o que fecha a porta de volta:** não se conserta isto com uma bandeira de escape
("`--aqui-mesmo`", "`--forcar`") no condutor. Bandeira de escape é o que sempre vence quando a fila
aperta — e a fila sempre aperta. Ou o gesto é seguro por construção, ou ele recusa.

### SIS-368 · COBERTURA SE MEDE POR INTERSEÇÃO NOMINAL — DUAS CONTAGENS INDEPENDENTES DÃO 199% E PASSAM (13/ago/2026)

Um gate de cobertura é uma divisão, e a divisão só significa alguma coisa se o de cima e o de baixo
vierem do MESMO universo. Quando não vêm, o gate não fica em silêncio — ele **inventa um número
plausível**, que é pior, porque ninguém audita um número que parece bom.

**MEDIDO em 13/ago/2026**, no `lote-render.sh`, que promovia a cobertura a veredito do lote
(*"terminar não é ter feito"*, e estava certo no espírito):

```
CLIPES=$(gcloud storage ls "$BUCKET/out/$PROJ/graphics/*-4k.*" | wc -l)
PCT=$(( CLIPES * 100 / VAI ))
if [ "$PCT" -lt 80 ]; then …
```

Os dois números eram incomparáveis por **dois** motivos independentes:

- **o glob `*-4k.*` conta cada clipe DUAS vezes** — `dentro-do-sol` tinha 241 objetos para 120
  clipes, porque cada `-4k.mp4` vem com o sidecar `-4k.mp4.de-html`, o carimbo de procedência;
- **o numerador era o ACUMULADO de todas as passadas já feitas no projeto**, e o denominador só as
  cenas desta corrida.

| projeto | `CLIPES` | cenas | PCT que o gate calcularia |
|---|---|---|---|
| `dentro-do-sol` | 241 | 121 | **199%** |
| `cerebro-quando-sonha` | 85 | 61 | **139%** |
| `fatos-a380` | 25 | 79 | 31% |

Consequência exata: **uma corrida que produzisse ZERO clipe nesses dois projetos imprimiria 199% e
139% e não acusaria nada.** O limiar de 80% valia, na prática, ~40% de cobertura real.

O detalhe que faz esta lei valer a pena: é o **mesmo defeito** que aquele arquivo tinha nascido para
consertar oito horas antes — *"zero de zero é 100%; eu quase reportei três vídeos renderizados"* —,
só que com o sinal trocado. Antes o denominador vazio inventava sucesso; depois foi o numerador
inflado. **Consertar uma ponta da fração e não olhar a outra é meio conserto**, e o meio conserto
devolve o mesmo alarme falso pela porta ao lado.

**A lei:** *cobertura se mede por INTERSEÇÃO NOMINAL, nunca por duas contagens independentes.* Não
conte objetos de um lado e itens do outro: liste os nomes desta corrida, liste os nomes que chegaram
ao destino, e cruze (`comm -12`). O que sobra do cruzamento é a resposta — e o que falta tem nome,
que é o que permite consertar em vez de adivinhar. Uma divisão entre duas contagens só é honesta
quando alguém provou que os dois lados contam a mesma coisa; enquanto isso não for provado, ela é um
número bonito à espera de enganar quem o lê.

Aparentada de [FIN-13] e da família do denominador zerado — a diferença é que aqui o denominador
está certo e quem mente é o de cima.

### SIS-369 · A JUSTIFICATIVA DE UM  TEM DE SER FATO MEDIDO NESTA EXECUÇÃO — E ELE MIRA O QUE ESTA CORRIDA TROUXE (13/ago/2026)

`rm -rf` com um comentário tranquilizador ao lado é a forma mais cara de apagar trabalho, porque o
comentário desliga a desconfiança de quem lê. **Premissa falsa escrita como justificativa não parece
uma omissão: parece uma decisão fundamentada.**

**MEDIDO em 13/ago/2026.** O `lote-render.sh` terminava cada projeto assim:

```
rm -rf "out/$PROJ/graphics" "out/$PROJ/_media"   # insumo e clipe estão no bucket; o local é cópia
```

A frase é falsa, e não por pouco. No disco da `estudio-top10` — onde `out/` é symlink para
`/dados/out`, a produção viva — o `fatos-a380` tinha, **e nenhum destes estava no bucket de
produção**: `_media/logos/` (27 arquivos, 596 KB) · `_media/documentos/` (10 arquivos, 2,7 MB) ·
`_media/_PROCEDENCIA.json` (64 KB) · `_media/_INVENTARIO-POR-CENA.json` (32 KB) ·
`_media/_fps-original/` (3,3 GB). O `_PROCEDENCIA.json` é justamente o arquivo que o
`_brief-arte.mjs` aprendeu a ler naquele mesmo dia, depois de 8 cenas saírem sem o crédito que a
licença CC BY exige.

Pior que a perda: a **rede parcial**. O espelho `macbook-backup` tinha `logos/` com **25 dos 27**
arquivos e um `_PROCEDENCIA.json` de cinco dias antes, 24 KB menor que o vivo. Ou seja, a perda
voltaria *quase* inteira — e ninguém perceberia o que não voltou. *Recuperação parcial silenciosa é
o pior formato de perda que existe, porque ela fecha o incidente antes de alguém contar o que falta.*

E o script não tinha guarda de hostname: declarava `@roda: vm` e fazia `cd ~/top10-estudio`, duas
coisas que valem igual na máquina 24/7. Uma hora antes, o mesmo autor aposentara outro script
citando como agravante exatamente isto — *"sem guarda de hostname, rodado por engano na
`estudio-top10` ele desliga a máquina 24/7"*.

**A lei, em três exigências, e as três são de CÓDIGO:**

1. **A justificativa de um destrutivo tem de ser um fato medido NESTA execução, não uma frase.** "O
   local é cópia" só vale se esta corrida provou, pelo destino, que o trabalho está salvo. Sem
   prova, não apaga — preserva e avisa por quê.
2. **Destrutivo mira o que ESTA execução trouxe, nunca a pasta guarda-chuva.** Apagar `_media`
   inteiro para limpar o que se baixou varre junto o que já morava lá — e o que já morava lá é,
   quase sempre, o que não está no bucket, justamente por isso.
3. **Onde a máquina errada é fatal, a guarda é de hostname e NÃO tem bandeira de escape.** Aqui é a
   regra de ouro do Mateus (12/ago): render mora em `estudio-render-*`, e ponto. Escape opcional é o
   que sempre vence quando a fila aperta.

A raiz, que nenhum dos três degraus acima resolve sozinha: **o insumo nunca tinha subido.** Baixar
mais é tratar sintoma; a cura é `_media` no bucket antes de dividir lote entre máquinas — e a prova
de que subiu é o `--dry-run` do sincronizador **voltar vazio**, arquivo a arquivo, nunca o total
bater.

### SIS-371 · VARREDURA DE out/ FILTRA PELO REGISTRO DE ENTREGA ANTES DE APRESENTAR — PASTA CONGELA, VÍDEO VAI AO AR (13/ago/2026)

A pasta `out/<slug>/` **congela no estado pré-publicação e fica assim para sempre**. Ela não sabe
que o vídeo foi ao ar, e nada nela muda quando ele vai. Então toda medição que varre `out/` e
conclui "isto está pendente" produz fila fantasma — e a fila fantasma não parece erro: parece
trabalho, com número, cena e nome de arquivo.

Isto já custou caro uma vez (20/jul/2026: **8 vídeos postados lidos como pendentes**) e a doutrina
saiu com o remédio certo — *nunca inferir status de `_fila-*.jsonl`, de `_publicacoes-*.md` nem do
estado das pastas `out/<slug>/`; o registro é `out/_ENTREGAS.md`, gerado dos
`entregas/<ano>/<slug>/ENTREGA.json`*. **Voltou mesmo assim em 13/ago/2026**, e o formato da volta é
o que importa: não foi ninguém consultando a fonte errada de propósito, foi uma auditoria de
prontidão de mídia que varreu as pastas com HTML e apresentou a tabela por projeto. O
`putin-fronteiras-otan` apareceu nela com 9 cenas e 8 logos sem mídia — cara de projeto quebrado
esperando conserto. **Está postado desde 16/mai**, quase três meses antes. Quem corrigiu foi o
Mateus, de memória, olhando o slug.

**A lei:** *toda varredura de `out/` filtra pelo registro de entrega ANTES de apresentar o
resultado.* Não é conselho de leitura para quem interpreta a tabela depois — é filtro no código que
a produz, porque a tabela viaja e o contexto não viaja com ela. E o filtro é barato: um
`gcloud storage ls "entregas/*/<slug>/ENTREGA.json"`, e o `status` de dentro (`postado`/`arquivado`)
decide.

**A consequência prática, e ela é dinheiro:** um condutor de render que aceite slug postado liga VM
cobrada por hora para refazer o que o canal já publicou. O `lote-render.sh` recusa desde hoje, com a
razão dita em voz alta. E a razão é a mesma que a casa já tem escrita: *erro achado no que já foi
entregue obriga a CRAVAR, não a refazer* — escopo de correção é do presente para frente, o que se
faz é destilar a lei e corrigir o agente-raiz.

*Um instantâneo do disco responde "o que existe", nunca "o que falta fazer". A diferença entre as
duas perguntas é um registro, e ele não mora na pasta.*

---

### SIS-372 · Instrução em prosa para um agente seguir NÃO é um gate — e a diferença só aparece quando alguém não segue

A doutrina do `decupador` lista, desde 31/jul/2026, quatro verificações obrigatórias antes de
fechar a decupagem — numeradas, com a ferramenta ao lado de cada uma:

| # | o que verificar | ferramenta |
|---|---|---|
| 1º | o `words.json` é do master que está no disco AGORA [SIS-100] | `mapa-limpo.mjs` |
| 2º | zero silêncio ≥2,0 s sem veredito [FIN-75] | `mapa-limpo.mjs` |
| 3º | **zero take repetido no texto do master de saída** [FIN-76] | `qc-fala-repetida.mjs` |
| 4º | **zero falso início** (n-grama 2–4 palavras) [FIN-77] | *"varredura do texto"* |

Está tudo certo ali: a régua existe, a ferramenta existe, o número da lei está citado. **E nada
disso rodou.** Em 13/ago o Mateus abriu o XML entregue do `dentro-do-sol` e a PRIMEIRA FRASE do
vídeo estava repetida — *"No centro do sol faz quase, no centro do sol faz quase quinze milhões de
graus"* —, mais 26 pontos de gagueira e retomada. **27 defeitos**, depois de 121 cenas
renderizadas, QC por cena e um XML de 145 referências gerado por cima.

Treze dias entre a regra e o defeito que ela descrevia com precisão.

**A distinção que isto ensina:** um texto que manda um agente conferir algo é uma *esperança*
formatada como procedimento. Ele depende de o agente ler, entender, lembrar no momento certo e
escolher obedecer — quatro chances de falhar, todas silenciosas. Um gate é outra coisa: **código
que roda sem ser lembrado e sai com status ≠ 0**. Só a segunda forma sobrevive a um agente
distraído, a um prompt truncado, a um modelo diferente.

O sintoma que identifica o caso: **a ferramenta existe e nenhum `grep` acha quem a executa.** O
`qc-fala-repetida.mjs` era citado em QUATRO documentos de doutrina (`decupador.md` em duas cópias,
`FIN.md`, `_TODAS.md`) e por ZERO linhas de código. Documento citando ferramenta parece integração
e não é.

O conserto foi pendurar o `qc-decupagem-final.mjs` na etapa 0a do `finalizar.mjs` — o portão que
nenhum vídeo contorna. Não-fatal de propósito: suspeita virando bloqueio fabrica alarme falso.

*Quando encontrar uma regra bem escrita, a próxima pergunta não é "está certa?" — é "quem a
executa?". Se a resposta é um agente, ela ainda não existe.* Ver [[SIS-362]], [[SIS-358]].

### SIS-373 · O AVISO TEM DE MORAR ONDE A MÃO POUSA — 15 CHECKS NASCERAM DEPOIS DO RELATÓRIO QUE OS CONTA (13/ago/2026)

Num arquivo de verificações que cresce por acréscimo, **o relatório é o único ponto onde a posição
importa** — e é justamente o ponto onde ninguém olha, porque quem chega para escrever a verificação
nova chega pelo fim do arquivo.

**MEDIDO em 13/ago/2026** no `scripts/doctor.mjs` (2.455 linhas, o gate-de-gates desta casa). O
bloco `if (JSON_OUT) { … process.exit() }` estava na linha 1914, com **15 verificações abaixo dele**
— entre elas portabilidade, ssh-automação, duplicata-canal, arte-divergente, entrega-completa,
leis-duplicadas e banco-divergente. Consequências, as duas medidas:

- `node scripts/doctor.mjs --json` saía em **41 s com 232 achados e ZERO** de qualquer uma das 15
  seções. Quem consome o laudo por programa recebia um retrato que silenciava um terço das
  verificações, sem uma linha dizendo que elas não rodaram.
- No modo texto (que roda tudo), `erros` e `alertas` eram um **snapshot** tirado na linha 1911. A
  listagem final se monta de `achados` e MOSTRAVA os achados das 15 seções; a contagem e o **código
  de saída** vinham do snapshot. Dá para o laudo imprimir `✗ portabilidade (19)` na tela e terminar
  com `0 ERRO(s)` e `✓ PASS`.

O que faz esta lei valer a pena é que **o mesmo defeito já tinha sido consertado em 05/ago**, no
mesmo arquivo, quando o bloco estava mais acima e deixava 5 checks de fora. O conserto foi mover o
relatório para o fim — certo — e escrever a regra ao lado dele: *"check novo entra acima dele,
sempre"*. A regra ficou a **400 linhas** do lugar onde se acrescenta check. Em nove dias, 15 novos
checks nasceram abaixo dela.

**A lei:** *aviso longe do gesto não protege ninguém — a régua tem de morar onde a mão vai pousar.*
Quem escreve a verificação nº 16 abre o fim do arquivo; é lá que precisa estar escrito "não escreva
abaixo desta linha", e é lá que precisa estar a trava.

**E a trava, porque conserto que depende de lembrar é conserto morto:** o arquivo lê o próprio fonte
e reprova se algum `erro(`/`alerta(` nascer depois do marco do relatório. Custa uma leitura de disco
(~1 ms) e não depende de ninguém. *Calibrada nos dois lados, que é o que separa gate de decoração:
0 achado no arquivo de hoje, 1 quando se simula o check acrescentado no fim — e a própria trava
excluída da varredura, senão ela reprova por existir.*

### SIS-374 · NUM LAÇO, CONTE CHAMADAS ANTES DE OTIMIZAR TRABALHO — MAS MEÇA, PORQUE JUNTAR NEM SEMPRE PAGA (13/ago/2026)

Abrir um processo externo tem **custo fixo**, e esse custo não aparece em nenhuma medição de rede,
de banco ou de disco — que é onde a intuição procura quando algo está lento. Num laço, é ele que
domina, e não o trabalho.

**MEDIDO em 13/ago/2026**, escavando por que o `top10 doctor` levava **17,8 min** quando o próprio
código declara, em cinco lugares, que ele *"roda OFFLINE e em milissegundos por desenho"*:

- **uma chamada `gcloud storage ls` custa 2,1 s só de subir o Python.** Listar um prefixo com 3
  objetos e um com 3.416 custa **o mesmo**: 2,1 s contra 4,3 s. O trabalho é ruído; o pedágio é tudo.
- o `qc-entrega-completa.mjs` fazia **sete** chamadas por vídeo publicado (`graphics-4k/`, `xml/`,
  `meta/`, `master/`, o `cat` do `ENTREGA.json` e as duas pastas do backup). Com 55 publicados são
  **385 chamadas ≈ 13,5 min** — e eu o peguei ao vivo com `ps`, rodando havia **11 min 49 s** dentro
  do doctor. Sozinho, ele respondia por três quartos do tempo total.
- reescrito para **três** chamadas de lote (a árvore de `entregas/`, a do backup, um `cat` único de
  todos os `ENTREGA.json` separados por chaves balanceadas), o mesmo gate leva **119 s**. Nada de
  cache: ele continua medindo tudo o que media.

**A lei:** *num laço, conte CHAMADAS antes de otimizar trabalho.* Se a mesma pergunta pode ser feita
uma vez para o lote inteiro em vez de uma vez por item, ela deve ser — e a régua para desconfiar é
simples: qualquer `execSync`/`spawnSync` dentro de um `for` é suspeito até prova em contrário.

**⚠️ E A CONTRAPARTIDA, MEDIDA NO MESMO DIA, PORQUE ELA IMPEDE DE APLICAR ISTO COMO DOGMA:** no
`qc-arte-divergente.mjs` — 86 chamadas, 134 s — a versão de chamada única ficou **PIOR: 148 s**. O
prefixo dele tem wildcard no meio (`out/*/graphics/*.html`), e isso obriga o servidor a varrer tudo;
ali o custo está na varredura, não no pedágio. *Juntar chamadas paga quando o prefixo é compacto e
custa quando ele é largo.* Eu ia "consertar" esse gate por analogia e teria piorado 14 s — a medição
antes da mão é o que separou um conserto de uma regressão.

*Onde um gate encosta na nuvem, meça o pedágio e a varredura separadamente antes de decidir qual
dos dois você está pagando.*

---

### SIS-375 · O ATALHO DE UM `venv` GUARDA O CAMINHO ABSOLUTO, E MUDAR A PASTA DE LUGAR O MATA — CULPANDO O ARQUIVO ERRADO (13/ago/2026)

Todo *console-script* instalado num ambiente virtual Python (`.venv/bin/<ferramenta>`) nasce com o
caminho **absoluto** do interpretador na primeira linha. Mover ou renomear o repositório quebra
todos eles de uma vez, e **a mensagem de erro aponta para o lugar errado**:

```
FileNotFoundError: [Errno 2] No such file or directory: '.../.venv/bin/demucs'
```

O `demucs` **estava lá** — `ls` o mostrava, com permissão de execução. Quem sumiu foi o
`/Users/.../analista-de-videos/.venv/bin/python3.12` do shebang, porque o serviço tinha se mudado
para `~/www/servicos/analise-de-video`. O `execve` falha com `ENOENT` e o Python, que só conhece o
caminho que pediu, culpa o script. Passei por diagnóstico errado duas vezes antes de ler o shebang.

**A lei:** dentro de um venv, chame o **módulo**, nunca o atalho — `python -m demucs`, não
`.venv/bin/demucs`. O módulo usa o `sys.executable` vivo e é imune a mover a pasta. E, ao ver
`FileNotFoundError` sobre um arquivo que existe, **leia a primeira linha dele**: em script com
shebang, o ausente costuma ser o interpretador.

*Corrigido na fonte em `~/www/servicos/analise-de-video/analyze.py`.*

---

### SIS-376 · `| tail` NO FIM DE UM PIPELINE DEVOLVE O EXIT CODE DO `tail`, E O TRABALHO "TERMINA COM SUCESSO" TENDO ABORTADO NO MEIO (13/ago/2026)

Rodei `analyze.py … 2>&1 | tail -40` para não encher o log. O pipeline morreu na etapa de separação
de faixas, **duas etapas não rodaram**, e o harness reportou **exit code 0**. O `$?` de um pipeline é
o do **último** comando — e o `tail` sempre dá certo.

O dano não é o exit errado: é o que ele esconde. As etapas anteriores já tinham gravado seus
arquivos, então o diretório ficou com **4 dos 6 JSON** e a cara de um run bem-sucedido. Um laudo
escrito por cima daquilo teria dito *"não há efeitos sonoros relevantes"* onde a verdade era *"a
medição de som não rodou"* — omissão silenciosa, que é pior que erro barulhento porque não se
distingue de um resultado.

**A lei:** processo longo escreve em **arquivo** (`> log 2>&1`) e o exit se lê direto; se houver
pipe, o que vale é `${PIPESTATUS[0]}`. E **a prova de que um pipeline de etapas terminou não é o
exit code: é a lista de artefatos esperados.** Ausência de resultado é falha a investigar, nunca
sucesso silencioso.

---

### SIS-377 · MÉTRICA GLOBAL É CEGA PARA MUDANÇA LOCAL — E O CASO QUE ELA PERDE COSTUMA SER O MAIS IMPORTANTE (13/ago/2026)

Medindo a densidade de informação de um vídeo de referência, contei "eventos" (mudanças dentro do
plano) por **distância de histograma de cor** do quadro inteiro. O resultado: um plano de **41,2 s**
com **zero** eventos — supostamente parado.

Abri seis quadros dele e olhei: o plano recebe **dezesseis camadas** — o mapa, um retrato, um cerco,
uma data, dois efetivos. Um mapa ocupa a tela toda e um rótulo ocupa 2 % dela: o histograma global
não se move. **O detector chamou de "parado" justamente o plano mais informativo do vídeo**, e a
conclusão que sairia dali seria o oposto da verdade.

Trocada a medida por diferença absoluta em **blocos** (grade 16×9 — um bloco que acende basta), o
mesmo vídeo saiu de 30 para **766** eventos, e o plano de 41 s deu 16.

**A lei:** quando o que você procura é **local** (um rótulo, um destaque, um elemento que entra),
meça local — agregado do quadro inteiro é a métrica errada, e ela erra **para baixo, em silêncio**.
E a trava de método, que vale para toda medição: **zero redondo é quase sempre métrica errada, não
ausência**; todo número que surpreende passa por uma leitura à vista antes de virar linha de laudo.

---

### SIS-378 · ÓRFÃO DECLARADO É DECISÃO; ÓRFÃO SILENCIOSO É DEFEITO — E UM GATE QUE NÃO SEPARA OS DOIS TRANSFORMA BOA GOVERNANÇA EM ALARME (13/ago/2026)

Escrevendo o gate que caça capacidade órfã, marquei quatro agentes como "ninguém os usa" —
`recortador-de-shorts`, `social-media`, `designer-de-post`, `construtor-de-site` — e ia escrever
quatro SPECs dizendo isso. Fui conferir antes: **noutro canal do parque eles estão na tabela de "o
que não ligar ainda", com a razão e a oportunidade por escrito** (*"frente `recortes` desligada.
⚠️ Grande alavanca pós-piloto: um plano de 8 s de predação é vertical nativo"*).

Isso não é a mesma coisa que silêncio, e tratar os dois igual destrói justamente a informação que
importa. São três estados, não dois:

- **disparado** — algum código o executa. Vivo.
- **declarado** — uma receita diz, por escrito, que está ligado ou desligado, **e por quê**. É
  decisão: não pede conserto, pede data de revisão.
- **silêncio** — ninguém dispara e ninguém declarou. **É só este que é defeito.**

O mesmo gate errou nas duas pontas antes de ficar útil, e as duas falhas valem: primeiro devolveu
**"0 órfãos" em 44 agentes**, porque varria tudo e o `CLAUDE.md` do projeto lista todos eles —
**menção não é chamada**. Depois, restrito a código, produziu o falso positivo acima. E a lente que
caçava promessa no futuro acusou *"o que **vai ao feed**"* e *"o insumo **vai para** o bucket"*:
em português "ir" é verbo de movimento muito antes de ser auxiliar de futuro, e um `\bvai\b` cru
transforma prosa correta em alarme.

**A lei:** ao construir verificação de "isto está ligado?", enumere os estados **antes** de escrever
o regex, e trate ausência-com-motivo-escrito como estado válido. E calibre todo gate **nas duas
direções** — que ele pegue o caso real *e* fique quieto no acervo bom. Alarme falso não é ruído
inofensivo: ele ensina a ignorar o gate, e aí o gate para de proteger exatamente quando acerta.

---

### SIS-380 · Artefato derivado do espelho não sobrevive a um remapeamento — e não avisa que morreu

> 🔀 **Nasceu como SIS-373 e foi renumerada em 14/ago/2026.** Duas sessões paralelas alocaram o
> mesmo número no mesmo dia: esta (`86099fd`, 02:49) e a de mesmo ID sobre o relatório do doctor
> (`b2f5452`, 22:10 do dia anterior). Pela [SIS-62], quem chegou primeiro ao remoto fica com o
> número; esta veio depois e recebeu o próximo livre. O conteúdo é o mesmo — só o ID mudou. Citação
> antiga a "SIS-373" que fale de `regencia.json`/remapeamento é esta lei.

O `regencia.json` guarda o regime de imagem de cada cena (respiro/normal/rajada) com o instante em
que ela entra. Ele é DERIVADO do espelho: quando o espelho muda de relógio — que é o que um
remapeamento faz —, os instantes dele viram ficção.

Medido no `cerebro-quando-sonha` em 14/ago/2026, comparando as duas fontes cena a cena:

```
cenas comparadas: 77
batem: 0 · divergem: 77 · maior diferença: 301,3 s
regencia gerado em: 2026-08-07
```

**Nenhuma das 77 bate**, e a pior erra por cinco minutos. O arquivo continua no disco, legível, com
os campos certos e um `gerado_em` que ninguém confere — indistinguível de um arquivo válido para
quem o abre.

**O sintoma é caro porque o consumidor não erra: ele acerta a coisa errada.** Um agente que leia o
regime da cena `s51` recebe um veredito correto sobre um instante que não existe mais.

**A regra:** todo artefato derivado do espelho (`regencia.json`, `conceito-visual.json`,
`_overlays-branding.json`, `_trilha-plano.json`, `textos-tela.json`) precisa ser **regerado ou
invalidado** junto com o remapeamento. Quem remapeia é dono dessa lista.

A verificação é barata e devia ser gate: comparar o `inSec` de cada cena nos dois arquivos. Zero
divergências, ou o derivado está morto.

⚠️ E há um segundo furo no mesmo lugar: a estação de arte manda *"DIVIDA POR FAIXA ANTES DE
DESPACHAR — o `regencia.json` traz…"*, mas o `regencia.json` **não tem campo `faixa`** — tem
`regime`, que é outra coisa (ritmo de troca de imagem, não quem desenha a cena). A instrução aponta
para um campo inexistente, e o efeito é a estação cair no padrão de mandar tudo ao Fable.

*Derivado que não se invalida é pior que derivado ausente: a ausência interrompe, a mentira
prossegue.* Ver [[SIS-372]], [[FIN-193]].

### SIS-379 · COMENTÁRIO DE BLOCO NÃO É ÁREA SEGURA — E `node --check` NÃO PROVA QUE O SCRIPT RODA (14/ago/2026)

Um comentário de bloco não é área segura: a sequência que o **encerra** não pode aparecer dentro
dele. Se aparecer — dentro de aspas, no meio de uma frase, num exemplo de linha de comando —, o
comentário fecha ali, e todo o texto seguinte vira CÓDIGO.

**MEDIDO em 14/ago/2026.** Documentando por que a receita de otimização de um gate não servia para
outro, escrevi o padrão de busca literal no cabeçalho: `ls -L "out/` + curinga + `/graphics/…"`. O
par asterisco-barra no meio do caminho fechou o bloco. O resultado:

```
ReferenceError: graphics is not defined
```

exit 1, **laudo VAZIO**, e o cronômetro marcando **0 s** para um gate que leva um minuto.

**E o `node --check` PASSOU.** Ele valida sintaxe, e o que sobrou depois do fechamento acidental era
sintaticamente válido — prosa em português vira sequência de identificadores e operadores que o
parser aceita. O erro só existe em tempo de execução.

**A lei tem duas metades, e a segunda é a que importa:**

1. Dentro de um comentário de bloco, escreva o caminho com curinga em prosa (*"um `ls -L` com
   curinga no lugar do projeto"*) ou quebre a sequência. Nunca a literal.
2. **`node --check` (e qualquer validador de sintaxe) NÃO é prova de que o script roda.** Ele
   responde "isto se parse?", não "isto funciona?". A prova é EXECUTAR e olhar a saída — e olhar o
   TAMANHO dela, porque o formato desta falha é o arquivo de zero byte com código de erro, que se
   parece com "não havia nada a relatar".

*Eu passei o dia caçando mortos-silenciosos e escrevi um, num comentário, ao explicar como não
escrever outro. O que me pegou não foi a esperteza do defeito: foi eu ter confiado num verificador
que responde outra pergunta.*

---

### SIS-382 · GUARDA QUE PERGUNTA "EXISTE?" ONDE A REGRA É "SERVE?" PROTEGE O CASO FÁCIL E DEIXA PASSAR O CARO (14/ago/2026)

> 🔀 **Nasceu como SIS-379 e foi renumerada no mesmo dia.** Colidiu com a lei de mesmo número sobre
> comentário de bloco (`326044e`), que já estava no remoto — pela [SIS-62], quem chegou primeiro
> fica. Esta ainda não tinha sido commitada. **O conteúdo não foi tocado: só o número mudou.**
> Enquanto as duas dividiam o ID, o `regras-todas.mjs` recusava regenerar o `_TODAS.md`, que é o
> índice que todo agente lê — a colisão não fica parada, ela congela a doutrina da casa inteira.

A bancada de roteiro carimba cada laudo com o hash do texto que ele julgou, para que a retomada só
pule o que já foi julgado **naquela versão**. O carimbo é escrito **pelo script**, e o comentário no
código explica por quê: *"pedir ao crítico que escreva o hash seria confiar a prova a quem está
sendo verificado — e um agente que esquece a linha **ou a escreve errada** produz um laudo que a
retomada trata como desconhecido, refazendo trabalho pago."*

O risco estava previsto. **A guarda não o cobria**, porque testava presença em vez de validade:

```bash
if ! grep -qE '^<!-- roteiro=' "$LAUDO"; then   # "já tem alguma coisa aqui?"
```

Medido no `terremotos-america-do-sul`: o `verificador-de-fatos` escreveu, por conta própria,
`<!-- roteiro=rev6-13ago-0128 sha1=52c94bfa6e8357c3 -->`. Existe um `<!-- roteiro=` na linha, então
o script **não carimbou**. Mas o extrator exige `^<!-- roteiro=[a-f0-9]{16} -->` e lia **vazio** —
logo o laudo era "sem declaração de versão", e **re-julgado a cada execução, para sempre**. São
42 KB de laudo adversarial, a lente mais cara da bancada (`effort: max`), pagos de novo toda vez.

O defeito não aparece como erro: aparece como uma linha `↻ fatos: laudo SEM declaração — re-julgo`
que parece o sistema funcionando.

**Conserto:** a guarda passou a usar **o mesmo regex do extrator** — se o que está lá não é legível
por quem vai ler, carimba por cima. Testado nos três casos (sem carimbo → carimba; carimbo ilegível
do agente → carimba; carimbo válido → não mexe) e comparado com o comportamento antigo.

**A lei:** *quando um produtor e um consumidor combinam um formato, a guarda tem de validar contra o
regex do CONSUMIDOR — nunca contra "tem alguma coisa parecida ali".* E o corolário, que vale para
todo campo escrito por um modelo: **o formato que um agente inventa é sempre plausível e quase nunca
igual** — ele escreveu um carimbo melhor que o pedido (com revisão E sha1), e por isso ilegível.

### SIS-381 · TRAVA DENTRO DA FERRAMENTA PROTEGE CONTRA CONCORRÊNCIA, NÃO CONTRA DESVIO — E DENY POR PREFIXO NÃO VÊ COMANDO EMBRULHADO (14/ago/2026)

Uma trava embutida numa ferramenta protege contra **concorrência**, nunca contra **desvio**. Ela vale
para quem entra pela porta; quem faz o mesmo trabalho à mão passa ao lado dela, e a ferramenta nem
fica sabendo.

**MEDIDO em 14/ago/2026: duas colisões de ID de lei no mesmo dia, com seis horas de intervalo** —
`SIS-373` e `SIS-379`. O diagnóstico óbvio (corrida entre sessões paralelas) estava **errado**, e
insistir nele teria produzido um conserto inútil: o `nova-lei.mjs` já numera dentro de uma trava de
exclusão criada com `openSync(…, "wx")`, atômica, válida entre processos que não se conhecem, e com
saída para trava órfã. Ela funciona. Duas sessões que passem por ela não colidem.

O que aconteceu nas duas vezes foi outra coisa: **a lei foi escrita à mão**, com `Write`/`Edit`
direto no arquivo de regras — que é o gesto mais natural do mundo para quem está editando doutrina.
Nenhum aviso, nenhum atrito, e a trava intocada no lugar dela.

**A lei:** *quando o mesmo defeito volta pela segunda vez, a pergunta deixa de ser "quem errou?" e
passa a ser "por onde ele entrou?"* — e a resposta costuma ser uma porta lateral que ninguém mapeou,
não uma falha da tranca da porta da frente. Antes de reforçar a trava que já existe, **prove que o
defeito passou por ela**: aqui a prova foi ler a implementação e concluir que a corrida era
impossível, o que redirecionou o conserto inteiro.

**E a porta lateral se fecha onde a mão pousa**, não na ferramenta que foi contornada: um hook de
escrita no arquivo, que acusa a colisão no instante da gravação. Ele só ACUSA — renumerar sozinho
mexeria no texto de outra sessão que talvez esteja escrevendo naquele momento, e a régua da casa
([SIS-62]) manda que quem chegou primeiro ao remoto fique com o número, coisa que um hook local não
tem como saber.

**⚠️ E A MESMA FORMA DE DEFEITO EXISTE NA LISTA DE PERMISSÕES, medida no mesmo dia.** O `deny` do
projeto traz `Bash(gcloud storage rm:*)` — e a nota ao lado explica por quê: *"o versionamento do
bucket está Suspended — remoção lá não tem volta"*. O matcher casa o **prefixo do comando**, então
ele barra `gcloud storage rm …` e **não barra** o mesmo `rm` embutido num `nohup bash -c '…'` ou
dentro de um `.sh`. Nesta sessão eu apaguei 670 objetos por dentro de um wrapper, com a regra ativa,
sem receber uma única recusa — e só percebi ao ler a lista para outro fim. *Trava por prefixo de
comando é trava contra o gesto direto, não contra o mesmo gesto embrulhado.*

---

### SIS-388 · UM GATE SÓ PROTEGE O QUE AINDA NÃO SAIU — E NÃO EXISTE CAMINHO DE VOLTA PARA O QUE JÁ ESTÁ NA MÃO DE QUEM EXECUTA (14/ago/2026)

> 🔀 **Nasceu como SIS-380 e foi renumerada no mesmo dia**, pelo mesmo motivo que a [SIS-382]: colidiu
> com a lei de igual número sobre artefato derivado do espelho, que já estava no remoto — pela
> [SIS-62], quem chegou primeiro fica. **O conteúdo não foi tocado: só o número mudou.** Enquanto as
> duas dividiam o ID, o `regras-todas.mjs` recusava regenerar o `_TODAS.md`, e o índice que todo
> agente lê ficava congelado — a colisão não fica parada, ela para a doutrina da casa inteira.
>
> *Duas colisões no mesmo dia, com sessões diferentes escrevendo leis em paralelo, dizem que o
> problema não é distração: é o número ser escolhido por quem escreve, sem reserva. Enquanto a
> alocação não for atômica, quem destila lei nova deve reler o maior ID **imediatamente antes** de
> gravar, e commitar logo em seguida.*

O `enviar-drive.mjs` cobra o veredito da bancada antes de criar o Doc do apresentador. É um bom gate:
FAIL não passa, e PASS de outro texto é pego por hash ([SIS-289]). Mas ele guarda **uma porta**, e a
porta só serve enquanto alguém está do lado de fora.

**Medido nos três roteiros que estavam `aguardando_gravacao`:**

| pauta | Doc entregue ao apresentador | bancada | o que o Bôco tem em mãos |
|---|---|---|---|
| JUL_074 Irã | 03/ago | PASS de **01/ago 07:01**; roteiro editado **08:23** | a versão que **nunca foi julgada** |
| JUL_075 Ucrânia | **03/ago 08:01** | **FAIL em 07/ago** — 3 lentes, 2 achados factuais GRAVES | um roteiro **reprovado 4 dias depois de entregue** |
| JUL_076 Golfo | 31/jul | **nunca rodou** | um roteiro **nunca julgado** |

O caso do JUL_075 é o que nomeia a lei: **a bancada rodou DEPOIS da entrega, reprovou, e nada
aconteceu.** Não há aviso, não há retirada do Doc, não há mudança de estado — a pauta seguiu
`aguardando_gravacao`, e o apresentador continua com um texto que a casa já sabe que está errado.
O gate cumpriu o papel dele (impedir a saída) num momento em que a saída já tinha acontecido.

⚠️ **E o registro não ajuda a perceber:** a fila tem o campo `doc_boco` e a tabela `pauta` tem
`drive_url` — **os dois vazios em 100% das linhas**, inclusive nas pautas já GRAVADAS. Um campo que
ninguém preenche responde "não" a uma pergunta que nunca foi feita, e faz o auditor concluir que
nada saiu. A prova real estava no mount do Drive, arquivo a arquivo.

**A lei:** todo gate de saída precisa de um **irmão retroativo** — quando o julgamento muda depois
da entrega, alguém tem de ser avisado, e o estado tem de voltar. Sem isso, o gate protege o futuro e
abandona o presente. E, ao auditar se algo saiu, **pergunte ao destino** (o Drive, o feed, o
bucket), nunca ao campo que deveria ter sido escrito na saída.

*Escopo de correção: do presente para frente — os três acima são dívida do período anterior ao gate
(o `enviar-drive` que cobra a bancada é de 10/ago; os três saíram entre 31/jul e 03/ago).*

> ✅ **Para a bancada de roteiro, o irmão retroativo existe desde 11/set/2026: [SIS-452]** — a
> entrada da produção re-julga o texto GRAVADO (`scripts/roteirizacao/roteiro-entrada.mjs`, disparado
> pelo despachante na seção 2.8b), sem travar a linha. Esta lei continua valendo para os outros
> gates de saída da casa.

### SIS-383 · ESCRITOR E LEITOR PRONTOS, E O FIO ENTRE OS DOIS NUNCA LIGADO (14/ago/2026)

A decupagem entrega no bucket e a fila é montada em outra máquina, então o resultado precisa de uma
DECLARAÇÃO: o marcador `decupagem-concluida/<slug>.json`. O leitor existia (`lib/decupagem-concluida.mjs`),
a fila o consultava, o escritor existia (`decupagem/marcar-concluida.mjs`) — e **ninguém nunca chamava
o escritor**. Medido: **7 marcadores no bucket para 37 slugs com decupagem provada**, e NOVE vídeos
parados em `decupagem/pendente` com o trabalho pronto e pago ao lado.

O pior: o cabeçalho do `ciclo-vm.sh` afirmava que o marcador era *"escrito no passo 5, abaixo"*. O
passo 5 só desliga a máquina.

**A lei:** capacidade órfã que ninguém chama **não aparece como erro — aparece como fila que não
anda**, e por isso escapa de toda varredura que procura exceção. Ao construir um par escritor/leitor,
o teste de pronto não é "os dois existem": é **rodar a ponta e ver o outro lado reagir**. E doutrina
que descreve um passo inexistente é pior que doutrina ausente: ela faz quem audita riscar o item da
lista. *Antes de acreditar que um passo acontece, procure quem o executa.*

### SIS-384 · PARÂMETRO QUE ACEITA O TIPO ERRADO SEM RECLAMAR É CAMPO QUE SE PERDE SEM RASTRO (14/ago/2026)

O livro-caixa da inferência recebe uma `marca` para dizer de quem é o gasto. Os chamadores passavam
STRING (`marca: "eval-agentes"`); o registro fazia `...(marca || {})`. Espalhar string num objeto não
produz campo — produz um caractere por índice:

    { tipo: "claude", ...("regencia-x") }  →  { "0":"r", "1":"e", "2":"g", … }

Medido: **12.334 dos 28.070 minutos de agosto (44%) sem dono**. A causa não era desleixo de quem
chamava — era o RECEPTOR desfazendo o que recebia. O único chamador que passava objeto
(`whatsapp/atendente.mjs`) é o único que aparece etiquetado no dado: a exceção era a prova.

**A lei:** quando um parâmetro aceita mais de uma forma, **normalize na entrada** em vez de confiar
que todo chamador acertou o formato. E desconfie de campo opcional que "ninguém preenche": antes de
culpar quem chama, **verifique se o que chega está sendo guardado**. Ausência de dado num registro é
tão frequentemente falha do receptor quanto do emissor.

### SIS-385 · GATE QUE COMPARA FORMA NÃO COMPARA COBERTURA — AUSÊNCIA NÃO É "NADA A COMPARAR" (14/ago/2026)

O `qc-env-frota.mjs` compara o `.env` entre as máquinas. Ele rodava, dava verde, e três VMs
trabalhavam com menos contas do que existem: a `estudio-decupagem-2` com **9 de 11**, a
`estudio-render` e a `estudio-decupagem` com 10 de 11 — e a que faltava nas três era a **única da
frota com folga naquele momento**. O laudo do mesmo dia reportava apenas um telefone mal formatado.

Dois furos somados: as regras de forma cobriam `FONE_*` e `ANTHROPIC_API_KEY` e **nunca olharam as
credenciais de assinatura**; e a comparação pulava em silêncio quando a chave não existia do outro
lado (`if (!formas[n][k]) continue`).

**A lei:** um gate que compara N lugares precisa julgar **duas coisas diferentes** — o que está lá
tem a forma certa (*forma*), e o que devia estar lá está (*cobertura*). Comparar só a forma dá verde
sobre o vazio. Quando um recurso TEM de existir em todos os lugares, a ausência é o achado mais
grave, não o mais silencioso. *É o mesmo prejuízo da [SIS-17] com causa nova: capacidade paga e
ociosa enquanto o trabalho morre ao lado.*

### SIS-387 · MEMÓRIA QUE SÓ REORDENA ADIA O CUSTO; A QUE EXCLUI O JÁ RESPONDIDO O ELIMINA (14/ago/2026)

A caça a capacidade órfã aprendeu em 11/ago a dar prioridade ao candidato inédito sobre o
reincidente. Isso resolveu a ORDEM e não o VOLUME: o reincidente deixou de vir primeiro e continuou
entrando para preencher o teto de 25 por volta. Medido em 13/ago 18:56: **19 dos 25 julgados já
tinham veredito**, e a volta seguinte julgaria os mesmos 19. Com 63 candidatos e teto de 25, o
conjunto nunca esvazia por construção — um moinho girando sobre o mesmo grão, quatro vezes ao dia,
com o modelo caro.

Faltava a pergunta que torna o rejulgamento legítimo: **o arquivo mudou desde o laudo que o julgou?**
Depois do conserto, a mesma volta: 45 pulados, 16 julgados.

**A lei:** quando um trabalho caro se repete sobre o mesmo material, priorizar não basta — é preciso
**excluir**. E o critério de reabrir não é o tempo passado: é **o material ter mudado**. Um moinho não
fica barato girando mais devagar; fica barato parando de moer o mesmo grão. *Espaçar o relógio é
remendo honesto enquanto o conserto não vem — e deve ser declarado como tal, no próprio arquivo.*

---

### SIS-389 · PASSO QUE EXIGE GENTE TEM DE RECUSAR O AMBIENTE SEM GENTE — NÃO TENTAR ASSIM MESMO (14/ago/2026)

O `conta-nova.sh` tinha um `read` que travava quando rodado sem terminal. Em 13/ago isso foi
consertado: sem TTY, a confirmação é pulada. Bom conserto — **da coisa errada**. Duas linhas abaixo
está o `claude setup-token`, que abre o navegador e espera a pessoa **colar o código de autorização
de volta no terminal**. Sem TTY o stdin é `/dev/null`, o código não tem por onde entrar, e o
processo fica vivo sem nunca completar.

Medido: o dono rodou pelo `!` do Claude Code (que manda para segundo plano após 120 s) em dois dias
diferentes. Da primeira vez o `setup-token` ficou **17h45 pendurado** e o slot seguiu vazio; da
segunda, o mesmo. Havia **três `claude setup-token` vivos ao mesmo tempo** na máquina, cada um
segurando um fluxo de login aberto, e o `.env` intocado.

**A lei:** ao descobrir que um passo interativo trava sem gente, **não pare no passo que travou** —
pergunte se o resto do caminho também precisa de gente. Aqui a pausa era o sintoma e o login era a
doença, e consertar só a pausa deixou o script "rodando", que é a **pior das três respostas
possíveis**: pior que falhar, porque quem disparou fica esperando por algo que não vem.

O certo é o módulo **recusar o ambiente errado na porta** — detectar a ausência de TTY, sair com
código próprio (aqui, 3, distinto do 1 de "o login falhou") e imprimir o comando exato, já com as
variáveis preenchidas, para a pessoa rodar onde funciona. É a mesma régua do núcleo §10: *prepare
tudo até a porta, escreva o comando exato, e pare ali — nomeando o limite em vez de fingir que ele
não existe.*

### SIS-395 · ESTADO MEDIDO COM UM PROCESSO ATIVO EM CIMA VENCE EM MINUTOS — O LAUDO OU PARA O PROCESSO OU DECLARA A CORRIDA (14/ago/2026)

O laudo da 3ª passada de QC do `fatos-a380` (13/ago, 22:49) abriu com *"79 cenas, arte completa,
**zero clipe 4K renderizado**"* e apoiou nisso a decisão que definia o vídeo: mandar para a pesquisa
porque *"trocar a mídia agora não descarta um único artefato pago — é o instante mais barato do ciclo
inteiro para esta caça"*.

Medido no disco 12 horas depois: às 22:49 havia **24 clipes** prontos (o loop de render vinha
escrevendo desde 20:11) e ele **seguia rodando enquanto o laudo era escrito**. As cinco cenas que o
laudo mandava recaçar ganharam clipe entre 23:08 e 00:20 — a primeira **19 minutos** depois da frase
que dizia que elas não tinham. De manhã eram 78.

O detalhe que torna isto instrutivo: a afirmação *restrita* estava certa. O §4 dizia "nenhuma DESSAS
cenas tem clipe 4K" e era verdade no minuto em que foi digitada. O erro foi de **prazo de validade**,
não de leitura: um laudo generalizou no cabeçalho e, sobretudo, publicou uma conclusão econômica
("o momento mais barato possível") que um processo vivo desmentiria antes do café.

**A lei:** antes de escrever no laudo um estado que decide alguma coisa, pergunte **quem mais está
escrevendo nele agora**. Se há processo ativo sobre o mesmo artefato, só há duas saídas honestas —
**parar o processo** (e dizer que parou) ou **declarar a corrida** no próprio laudo, com a hora da
medição e o que ela deixa de valer se o processo avançar. Estado é fotografia; decisão econômica
tomada sobre fotografia precisa da hora impressa no canto.

Corolário para quem lê laudo herdado: **medição citada por outra passada não é medição** — é
testemunho datado. Re-meça o que decide, principalmente quando o número é o argumento (aqui, "zero
artefato descartado" virou "cinco clipes a refazer"). Irmã da [SIS-388] pelo lado do agente e da
[ARTE-264] pelo lado do cabeçalho de cena: em ambas, uma frase confiante sobreviveu à sessão que a
escreveu e a passada seguinte leu "isto já foi medido" em vez de repetir a medição.

### SIS-397 · O `cwd` DA FERRAMENTA BASH OSCILA ENTRE WORKTREE E PRINCIPAL — ENTÃO `node scripts/x.mjs` É UMA ROLETA, E O GATE VELHO REPROVA COM CONFIANÇA (14/ago/2026)

> 🔀 Nasceu como `SIS-396`, na estação QC do `fatos-a380`. A estação QC do `quasares-primordiais`
> escreveu outra `SIS-396` no mesmo dia e commitou primeiro — renumerada para 397 pela [SIS-62].

Já se sabia que **o worktree tem código velho** e que se deve rodar do principal. O que faltava é que
a sessão **não escolhe** de onde roda: o `cwd` da ferramenta Bash volta ao worktree entre chamadas,
sem aviso. Medido no mesmo turno: um `pwd` respondeu `/home/<usuário>/top10-estudio` e, comandos
antes, `node scripts/qc-atribuicao.mjs` executou o binário do **worktree**.

O estrago não é o script quebrar — é ele **funcionar e mentir**. O `qc-atribuicao` do worktree
implementa a [ARTE-82] ("creditar NA TELA") e não conhece a [ARTE-104], que move o crédito para a
descrição. Ele imprimiu, com rodapé e tudo:

```
✗ REPROVADO — 9 cena(s) sem a atribuição que a licença exige.
```

As nove creditavam corretamente em `_atribuicoes-descricao.md`. O gate do principal, rodado por
**caminho absoluto**, deu `✓ PASS` sobre exatamente o mesmo disco. A diferença entre "reprovado" e
"aprovado" não estava no projeto: estava em qual cópia do arquivo o `node` abriu.

Medido no `fatos-a380`: **11 dos 12 gates de QC divergem** entre as duas árvores. A chance de uma
passada inteira ser julgada pelo código errado é a regra, não a exceção.

**A lei:** em sessão que tem worktree, **todo** comando que invoca script do repo usa **caminho
absoluto do principal** — `node /home/<usuário>/top10-estudio/scripts/<gate>.mjs`. `cd … &&` no
início do comando resolve para aquele comando e **não** para o próximo. Script auxiliar que a sessão
escreve deve trazer o `cd` do principal na primeira linha, como fizeram os laços de `carga` e
`overlap` desta passada — que por isso são os únicos cujo resultado não precisou ser refeito.

**O tell, quando já é tarde:** compare o CABEÇALHO impresso com o que o código do principal imprime.
Aqui o velho escreveu `══ ATRIBUIÇÃO NA TELA ══` e `não creditam na tela`; o novo escreve
`══ ATRIBUIÇÃO ══` e anuncia `DUAS rotas válidas desde a [ARTE-104]`. Foi a única pista, e ela só
aparece para quem conhece a saída esperada — por isso a régua tem de ser a chamada, não a leitura.

### SIS-396 · Rótulo binário sobre grupo MISTO nega o subconjunto idêntico: três arquivos com o mesmo md5 saíram no laudo como "arquivos diferentes" (14/ago/2026, estação QC do `quasares-primordiais`, agente-raiz `scripts/qc-clipe-repetido.mjs`)

O `qc-clipe-repetido` agrupa mídia por UNIÃO de dois critérios — mesmo md5 **ou** mesma URL de pauta —
e o desenho é bom: o hash pega o arquivo renomeado, a URL pega o reencode. O defeito estava no
**rótulo**, que só conhecia dois estados:

```js
const mesmosBytes    = nomes.length > 1 && hs.every(h => h && h === hs[0]);   // todos iguais
const bytesDistintos = nomes.length > 1 && hs.every(Boolean) && new Set(hs).size === nomes.length;
```

Quando a união reúne parte byte-idêntica e parte não — o **grupo misto** — as duas expressões dão
`false`, e o grupo cai no ramo final: *"mesma FONTE, arquivos diferentes"*. É a frase que mais engana
que o gate poderia escrever, porque nega exatamente o subconjunto que É o mesmo download.

Medido no `quasares-primordiais`:

| grupo | nomes | o que o laudo dizia | o que o md5 diz |
|---|---|---|---|
| disco solar SDO/AIA 171 | 4, em s30 · s74 · s82 | "arquivos diferentes" | **3 deles = `4d51338c`** |
| mapa dos 31 alvos do Euclid | 2, em s91 · s148 | "arquivos diferentes" | **os 2 = `13e0edf0`** |

Quem lesse o laudo concluiria que não havia plano repetido no vídeo. Havia — o mesmo disco solar em
três cenas, sob três nomes, um deles (`sdo-aia171-2026-08-08_031510utc.jpg`) afirmando um instante de
captura que os outros dois não declaravam.

O conserto é dizer o que já se sabe: agrupar os nomes por hash **dentro** do grupo e nomear os gêmeos
no rótulo — `⚠ mesma FONTE — e ATENÇÃO: a.jpg = b.jpg = c.jpg é o MESMO ARQUIVO sob nomes distintos`.
Nenhuma medição nova: o `hashDe` já rodava e o resultado era descartado pela pergunta binária.

*Uma medição que só sabe responder "todos" ou "nenhum" é cega para o caso mais comum, que é "alguns" —
e a cegueira não aparece como silêncio, aparece como uma afirmação confiante e errada.* Vale para
qualquer gate que resuma um conjunto num rótulo: se o conjunto pode ser heterogêneo, o rótulo tem de
poder dizê-lo. Irmã da [[ARTE-270]] pelo lado da declaração, e da [[SIS-388]] pelo hábito de reler o
que a ferramenta afirma antes de repetir a afirmação num relatório.

---

### SIS-399 · LAUDO VELHO NO DISCO VIRA VEREDITO NOVO: 19 chamadas mortas em 5 s saíram impressas como "✗ reprovada", com as notas de um HTML que já não existia (14/ago/2026, estação QC do `quasares-primordiais`, agente-raiz `scripts/julgar-cenas.mjs`)

O `julgar-cenas.mjs` sempre teve a disciplina certa escrita em cima da função: *"a PROVA É O
ARTEFATO. Exit 0 sem laudo é o morto-silencioso."* Só que ela era verificada com `existsSync` —
e existir é uma pergunta diferente de **ter sido escrito agora**.

O que a diferença custou, medido no log das 16:33Z:

| passada | o que aconteceu de verdade | o que o driver imprimiu |
|---|---|---|
| 19 cenas do lote das 98 | a cascata devolveu em **5-6 s**, em bloco (porta fechada) | `∅ nao-escreveu` — correto, porque não havia laudo nenhum |
| `s05`, `s08`, `s09`, `s10`, `s11` | idem, 5 s cada, nenhum agente julgou nada | **`✗ reprovada  espaco:6 factual:3 …`** |

As cinco tinham laudo do estado PRÉ-conserto (11:54–12:07) e HTML consertado depois (12:44–12:58).
O `--forcar` reenfileirou, a chamada morreu, o script releu o arquivo velho e imprimiu o veredito
dele. O rodapé fechou "5 reprovadas" e o log do driver de conserto registrou, em letras grandes,
que o conserto não tinha resolvido. **Tinha:** re-julgadas hoje pelo mesmo comando, `s09` e `s11`
voltaram `✓ aprovada` em ~880 s cada — o tempo de quem realmente olhou frames.

Duas raízes, e as duas viraram código:

1. **Laudo é fotografia de um arquivo num instante.** Arquivo editado depois invalida a fotografia,
   e quem tem de saber disso é o gate, não a memória da sessão. `temLaudo` passou a exigir
   `mtime(laudo) ≥ mtime(html)` — cena consertada volta sozinha para a fila, sem depender de alguém
   lembrar de `--forcar`. Antes: 85 laudos "prontos", 5 deles descrevendo arquivos que não existiam
   mais. O mesmo carimbo entrou no `laudo-para-fila.mjs`, que se recusa a enfileirar conserto a
   partir de laudo obsoleto.
2. **Com artefato pré-existente, a prova de trabalho é a REESCRITA, não a existência.** O `julgarUma`
   guarda o `mtime` de antes e compara depois; se o arquivo não mudou, o estado é `nao-reescreveu`
   e o rodapé diz por extenso *"laudo velho NÃO substituído — o veredito dele é do HTML anterior"*.

*Falha de execução vestida de veredito é pior que erro, porque erro convida a conferir e veredito
encerra a pergunta.* O `∅` das outras 19 fez o trabalho certo: a passada seguinte foi lá e julgou.
O `✗` das cinco quase mandou uma sessão consertar cena que estava boa — e, pior, com os achados
antigos, que descreviam defeitos já removidos.

Irmã da [[ARTE-265]] (o hash prova que alguém tocou o arquivo, nunca que o defeito saiu) pela outra
ponta: lá o carimbo aposenta encomenda cujo alvo mudou; aqui ele aposenta VEREDITO cujo alvo mudou.
Toda vez que um artefato caro sobrevive à execução que deveria substituí-lo, alguém vai lê-lo como
resultado da execução seguinte.

**A pergunta que esta lei deixa para a próxima estação:** todo script que decide "já está pronto"
por `existsSync` está afirmando que o artefato corresponde à entrada de agora. Se a entrada tem
`mtime`, compare — é uma linha, e é a diferença entre retomada de graça e veredito fabricado.

### SIS-400 · O VÍDEO PODE JÁ ESTAR NO AR E NENHUM GATE DA ESTAÇÃO PERGUNTA ISSO — cinco passadas de QC num projeto publicado há 8 horas, descoberto pelo RODAPÉ de um gate que mede outra coisa (14/ago/2026, estação QC do `fatos-a380`)

O `fatos-a380` está **público no canal desde 14/ago 15:00:13Z** (`NpzO02j7aR8`, 30min35s). A quinta
passada de QC rodou naquela mesma noite, com a fila em `qc/rodando`, e **nenhum dos 13 gates
perguntou se o vídeo já tinha saído**.

A descoberta foi por acaso: o `qc-cobertura-arte` imprime, no rodapé, a lista dos projetos *"já NO
AR, fora desta conta"* — e `fatos-a380` estava nela. O gate que revelou o fato **mede outra coisa**;
se ele não fosse rodado, ou se o rodapé fosse mais curto, a passada teria terminado inteira sem
ninguém saber.

**O que se sabe medindo, e é barato:** a fonte única é `out/_ENTREGAS.md`, uma linha por vídeo com o
status e o link. Um `grep <slug>` responde em milissegundos. Nenhuma estação faz esse grep.

O engano tem cúmplice: as pastas `out/<slug>/` **congelam no estado pré-publicação** e continuam
descrevendo um vídeo em produção depois de ele ir ao ar (é a mesma armadilha da [[SIS-27]], que
custou 8 postados lidos como pendentes em 20/jul). Aqui a fila dizia `qc`, o disco dizia "faltam 10
clipes", e as duas coisas eram verdade — **sobre um vídeo que já estava no YouTube**.

E o registro pode nascer DEPOIS de você começar: o `ENTREGA.json` deste projeto foi criado às
**22:51:52Z**, no meio da passada, por outro processo (`origem: "registro-retroativo"`), com
`cenas: null`, `xmlOficial: null` e `entregueEm` num **12:00:00.000Z redondo** — carimbo declarado,
não medido. Ler o estado uma vez no começo não basta; é a [[SIS-395]] outra vez, agora do lado do
registro em vez do render.

**O que fazer, e é uma linha:**

1. **Ao ABRIR qualquer estação, grepe o slug em `out/_ENTREGAS.md`.** Se aparecer com status
   `postado`, o trabalho adiante mudou de natureza e quem decide é o dono — não a linha.
2. **Distinga o que é reversível.** Render é luz: pode rodar, e deixa a versão pronta se o dono
   quiser. **Finalização não é** — o `entregar.mjs` promove a entrega e pode sobrescrever o
   `ENTREGA.json`, que em caso de publicação por fora é **o único lugar do estúdio que sabe o link
   do vídeo no ar**. Perder esse registro é perder a única prova de que o vídeo existe.
3. **Não confunda "não medi" com "não aconteceu".** Nesta passada ficou provado que as 5 cenas de
   mídia trocada **não** podiam estar no que foi ao ar (os clipes 4K delas estavam apagados desde as
   11:00Z e o vídeo subiu às 15:00Z). O que **não** se conseguiu medir é se a equipe montou o
   publicado com clipes individuais do estúdio: `yt-dlp` levou **403 Forbidden** porque a VM sai por
   IP de datacenter. Isso foi escrito no laudo como pergunta aberta, não como conclusão.

*Uma estação que não sabe se o produto dela já foi entregue pode fazer tudo certo e ainda assim estar
trabalhando para ninguém.* O custo desta lacuna não é um defeito no vídeo — é uma passada inteira de
inferência, e a chance de a linha seguir sozinha até sobrescrever o registro do que já está no ar.

**A pergunta que esta lei deixa para a próxima estação:** antes de gastar a primeira medição, gaste o
grep. `out/_ENTREGAS.md` é a fonte única, e ela é de leitura instantânea.

### SIS-402 · PROMPT LONGO EM ASPAS DUPLAS É BOMBA-RELÓGIO: UMA CITAÇÃO O QUEBRA, E O `bash -n` PASSA (14/ago/2026)

Os drivers headless montam o prompt do agente como um argumento entre **aspas duplas** de dezenas de
linhas. Em 31/jul alguém acrescentou ao `roteiro-driver.sh` a frase *Só busque o que a seção "O que
eu NÃO achei" declarar em falta*. Aquelas duas aspas retas **fecharam a string do prompt e abriram
outra**: o bash passou a quebrar o resto do texto em palavras soltas.

Medido em 14/ago, com o `claude-stream.sh` substituído por um stub que imprime o que recebe: o
wrapper foi chamado com **20 argumentos** em vez de 3 — `[4] que`, `[5] eu`, `[6] NÃO` —, o prompt
que chegou ao modelo terminava em *"...o que a seção O"*, e a linha seguinte do texto foi executada
como comando (`ROT-53: command not found`).

**O que ficou de fora do prompt, a partir do corte:** o fact-check obrigatório, a âncora temporal, a
proibição de inventar causa, o cruzamento com o acervo, **o alvo de palavras**, **as 4 saídas
obrigatórias**, o gate e a própria sentinela `ROTEIRO_CONCLUIDO`. O agente sabia quem era e não sabia
onde gravar.

**Por que ninguém viu por duas semanas:** o defeito **não dá erro em lugar nenhum**. `bash -n`
aprova (as aspas ficam balanceadas — só que agrupadas errado), o processo sobe, o modelo responde, o
stream enche de raciocínio de verdade. O único rastro eram três linhas `FALHOU` de 01/ago (`ceuta` ·
`ucrania-duas-guerras-uma` · `ira-cessar-fogo-colapsou`) e um `$LOG` que nunca nascia — porque o
próprio `> "$LOG" 2>&1` virou texto dentro de uma string.

**A lei: prompt de driver vai por HEREDOC CITADO (`<<'FIM'`), nunca por argumento entre aspas.** O
heredoc citado desliga toda interpretação do shell — aspas, backticks, `$`, `>`, tudo é texto — e as
variáveis entram depois, por substituição de placeholder (`${PROMPT//__PROJ__/$PROJ}`). E o driver
**confere as sentinelas finais do próprio prompt antes de chamar o modelo**: se a última instrução
não sobreviveu à montagem, o prompt não sobreviveu, e é melhor recusar do que gastar inferência num
briefing pela metade.

✅ **Os outros três drivers foram auditados no mesmo dia, pelo mesmo teste, e estão ÍNTEGROS** — não
saia caçando fantasma: `pesquisa-driver.sh` (4 argumentos, prompt de 2.237 caracteres até
`FUNDAMENTO_CONCLUIDO`), `arte-driver.sh` (3 argumentos, 1.589) e `bancada-roteiro.sh` (3 argumentos,
556). O que os salvou foi acidente de escrita, não desenho: eles citam com **aspas simples** ou não
citam. *Quem depende de acidente para funcionar já está quebrado — só ainda não sabe.* O teste, para
repetir em qualquer driver: recorte o bloco da chamada, troque `claude-stream.sh` por um stub que
imprime `$#` e `${#3}`, e rode. Contagem de aspas **não serve de prova** — o driver quebrado também
tinha número par.

⚠️ **A armadilha da medição, que também custou tempo aqui:** `/proc/<pid>/cmdline` separa argumentos
por NUL, e um prompt tem dezenas de quebras de linha dentro. Converter NUL em newline e contar
linhas dá um número inventado (li "37 argumentos" onde eram 9). Conte os **NUL**
(`tr -cd '\0' < /proc/$C/cmdline | wc -c`) e extraia o argumento com `awk 'BEGIN{RS="\0"} NR==3'`.
*Medição errada de um defeito real leva ao conserto certo pelo motivo errado — e na próxima vez
leva ao errado.*

### SIS-405 · O MODELO SE ESCOLHE PELO OFÍCIO DO AGENTE, NÃO PELO NOME DA ESTAÇÃO — o driver da regência disparava em Fable o agente que a casa tinha movido para Opus três dias antes (15/ago/2026, estação REGÊNCIA do `energia-escura`, agente-raiz `scripts/_driver-regencia.mjs` + `infra/modelos.json`)

Em **12/ago** o `regente-de-imagem` foi movido de Fable para Opus, com a conta escrita no próprio
frontmatter: ele **não desenha** — lê a fala, quebra em sintagmas e prescreve, e a saída é um JSON.
Medido no dia da troca: 847 cenas sem arte na fila e as **10 contas de Fable no teto até 14–19/ago**,
com o Opus livre na primeira conta. *"Gastar o recurso travado no agente que não desenha era a
alocação mais cara possível."*

**Três dias depois, o caminho oficial de disparo ainda mandava Fable.** O `_driver-regencia.mjs` — que
existe justamente para cascatear quando a sessão está em 429, ou seja, o caminho que se usa quando as
coisas apertam — pedia `argsModelo("arte")`. Ele não perguntava pelo AGENTE: perguntava pelo **nome da
estação**. E o `infra/modelos.json` ainda listava `regente-de-imagem` em `papeis.arte` =
`claude-fable-5`, porque quem mudou o frontmatter não voltou ao mapa.

**O gate JÁ ACUSAVA, e ninguém o rodava.** `node scripts/qc-modelos.mjs` imprimia, exatamente:
`✗ .claude/agents/regente-de-imagem.md — frontmatter diz opus e o papel arte manda fable`. O gate
existe desde 05/ago para conferir as duas fontes, estava certo, e o driver **não olha para gate
nenhum** antes de gastar uma janela. *Gate que ninguém roda é documentação com exit code.*

**A regra:** o código pergunta o PAPEL — isso já era doutrina —, mas o papel se descobre pelo
**AGENTE** (`papelDoAgente()`, que existe em `lib/modelos.mjs` desde sempre), nunca pela estação em
que ele roda. **Estação é lugar; papel é ofício.** Quando o ofício muda de mãos, o nome da estação
continua igualzinho — e é exatamente por isso que ele é a chave errada.

**Alcance, medido no dia:** dos cinco disparadores da casa, `desenhar-cenas.mjs` já faz certo (deriva
o papel da FAIXA de trabalho, e é por isso que ele consegue mandar molde para Opus e invenção para
Fable). Os outros três — `julgar-cenas.mjs`, `consertar-cenas.mjs`, `revisar-no-lugar-do-mateus.mjs` —
usam papel literal e **casam hoje por coincidência**: o literal deles bate com o papel atual dos seus
agentes. São a mesma bomba, com o pino ainda no lugar. E `papelDoAgente` tinha **um único** chamador
em toda a casa (`estudio/destravar-cota.mjs`) — a função certa existia e quase ninguém a usava.

**Conserto:** `regente-de-imagem` saiu de `papeis.arte` e entrou em `papeis.decisao`; o driver passou a
pedir `argsModelo("decisao")`. `qc-modelos` de 7 erros para 6. Conferido:
`papelDoAgente("regente-de-imagem") → decisao → claude-opus-5`.

### SIS-407 · Gate que aceita argumento numérico opcional precisa MORRER em argumento não-numérico — `NaN` não reprova nada, reprova TUDO

**Medido no `galaxia-arco-flecha` (03/ago/2026).** Rodei `node scripts/check-overlap.mjs
out/<proj>/graphics/*.html` — o reflexo natural de quem quer varrer o lote. O gate lê
`[html, passo, minArea, opMin]` posicionalmente: o 2º arquivo do glob caiu em `passo` e o 3º em
`minArea`, então `MIN_AREA` virou **`NaN`**. A guarda que descarta sobreposição irrelevante é
`if (a <= MIN_AREA) continue;` — e **toda comparação com `NaN` é `false`**, então ela nunca cortou
e *qualquer* toque de 0px² virou colisão. Saída: `✗ 3 par(es) com colisão … (área máx 0px²) ·
limiar NaNpx²`, três acusações falsas numa cena boa.

O modo de falha é o pior possível: **o gate não quebra, ele reprova.** Não houve stack trace, nem
"argumento inválido" — houve um `✗` com aparência de laudo legítimo. E pela [[SIS-64]] isso não é
cosmético: o portão (`qc-cena.mjs`) roda o mesmo gate **por hash** e o render **PULA PARA SEMPRE** a
cena reprovada. Um glob distraído condena o lote inteiro em silêncio, e a evidência do erro (`NaN`
no rodapé) fica num campo que ninguém lê quando o veredito já é vermelho.

**A lei:** todo script de gate que aceita número opcional por posição valida os argumentos ANTES de
abrir o Chrome e sai com código ≠ 0 em qualquer não-número — nunca deixa `parseFloat` virar `NaN`
silencioso. Se o argumento tem cara de caminho (`.html`), a mensagem já entrega o uso certo
(*"este gate mede UM html por vez — rode em loop"*), porque o erro nasce da suposição razoável de
que um gate aceita glob. Consertado em `scripts/check-overlap.mjs`, testado nos dois sentidos: glob
sai `exit=2` com a dica antes de abrir o navegador; uso normal (com e sem passo explícito) segue
verde. *Regra geral: prefira falhar ruidosamente a produzir um veredito que parece válido —
`NaN` num limiar não afrouxa o gate, ele o inverte.*

### SIS-408 · Campo opcional que VENCE o obrigatório exige coerência cruzada — na dúvida, omita

**Medido no `mamute-de-volta` (01/ago/2026).** O `espelho.json` trazia pares em que `modo` e
`modelo` descreviam cenas diferentes: `footage/M06` (M06 é citação), `citacao/M08` (split),
`documento/M22` (anatomia), `split/M24` (pergunta-retórica) e `navegacao/M21` (stepper).
`reguaDaCena()` dá precedência ao código exato em `modelo`, então o editor abriria o exemplar
errado mesmo com o `modo` correto. O schema passou porque validava cada enum isoladamente.

A medição original contou 31 pares; quatro eram `titulo-topico/M26`, que o catálogo vivo passou a
classificar como coerentes em 05/ago. Isso não enfraquece o achado: prova que copiar uma tabela para
uma regra também apodrece. A relação canônica é derivada de `knowledge/CATALOGO-MODELOS.md` por
`src/modos.mjs`, e o gate `scripts/qc-modo-regua.mjs` cruza os dois campos contra essa fonte.

**As regras.** (1) `modelo` só é escrito quando foi conferido no catálogo; na dúvida, omita — o
`modo` obrigatório mantém a família correta, apenas com menos precisão. (2) Quem produz espelho
roda `node scripts/qc-modo-regua.mjs <proj>`; validade isolada de schema não prova coerência entre
campos. (3) Consumidores usam `reguaDaCena()`, nunca reimplementam a precedência. Campo de
roteamento errado não quebra onde nasce: gasta a estação seguinte obedecendo à instrução errada.

### SIS-409 · Cache de medição não vale sem o MODELO que a produziu — `quotas-fable.json` guardava leituras de Opus e calava a sonda do Fable por 6 h

**Medido na estação ARTE do `orcas-nao-matam` (15/ago/2026).** A sessão abriu com o vídeo a **sete
cenas do fim**, todas invenção, e duas evidências convergindo para "pare": o `_arte-diario.jsonl`
trazia `limiteEmTodas:true` às 19:29Z, e `node scripts/quota/sondar-fable.mjs` respondia *"nada a
sondar — as 12 contas têm estado de arte válido (<6h)"*, com reset entre 16 e 21/ago. Duas fontes
independentes dizendo a mesma coisa é exatamente o que autoriza parar.

Só que o mapa não media o Fable. Cada entrada gravava `modelo: "claude-opus-5"` — o arquivo guarda
o modelo do papel `arte` (`modeloDe("arte")`), e **o ambiente vence por desenho**: o próprio
`infra/modelos.json` ensina `MODELO_ARTE=claude-opus-5 node scripts/...`. Uma passada com essa
sobreposição contamina as doze contas de uma vez.

O defeito tinha DUAS camadas, e a segunda anulava o conserto da primeira. (1) O filtro de validade
conferia `!e`, `vencido`, `reseta` e `serve===null` — nunca `e.modelo`. (2) Pior: `estadoFable()`,
a única leitura do arquivo, montava um objeto novo com quatro campos e **descartava `modelo` na
projeção**. O campo era gravado na sondagem e jogado fora antes de chegar a qualquer consumidor —
inclusive ao painel. *O dado do diagnóstico estava no disco desde as 21:27Z e não alcançava ninguém
que decidisse.*

**O custo é a assinatura do defeito.** `serve:false` de Opus tem a MESMA FORMA de `serve:false` de
Fable: booleano idêntico e hora de reset plausível. Não é ruído que se note — é uma resposta bem
formada sobre a pergunta errada. Lido como Fable, mandava parar o vídeo por "cota esgotada até
depois de amanhã". Com `modelo` atravessando a projeção, a re-sondagem no mesmo minuto devolveu
**duas contas servindo arte** (`<e-mail>`, `<e-mail>`) — e o
despacho real, feito antes disso, já tinha subido três editores em Fable em 90 s. Havia vaga o
tempo todo.

**As regras.** (1) Toda entrada de cache carrega os PARÂMETROS da medição, e quem a consome os
confere antes de aceitá-la como conhecimento — medida de outro modelo é `não sei`, nunca `sei que
não`. (2) Projeção que normaliza um registro não pode descartar o campo que qualifica a medida:
se `estadoFable()` não repassa `modelo`, nenhum teste adiante consegue existir — o conserto no
filtro fica inerte e passa por feito. Prove o gate DEPOIS da projeção, nunca só no ponto de decisão.
(3) Nome de arquivo não é contrato de conteúdo: `quotas-fable.json` guarda o modelo do papel `arte`,
que é configurável. (4) Irmã da [SIS-283] e da [ARTE-267]: aquelas envelhecem no eixo do TEMPO e do
CLASSIFICADOR; esta envelhece no eixo do MODELO, e é a única das três em que o dado que desmente já
estava gravado dentro do próprio arquivo consultado.

**SIS-412.** ARGUMENTO DO TIPO ERRADO TEM DE MORRER NA ENTRADA — MORRER LÁ DENTRO SAI COM A ASSINATURA
   DE OUTRO DEFEITO (medido em 18/ago/2026, estação ARTE do `aceleradores-particulas`; agente-raiz
   `scripts/check-overlap.mjs`, corrigido no mesmo ato).
   O gate mede UM html por vez e já tinha a lição escrita no topo para o caso do GLOB: o 2º caminho
   cai no parâmetro `passo`, vira `NaN`, e toda sobreposição de 0px² vira colisão. A guarda que
   nasceu daquele dia examina o 2º, 3º e 4º argumentos — e por isso **a PASTA passa por ela inteira**:
   é UM caminho, e "não-numérico" não se aplica ao primeiro parâmetro.
   • **Onde o erro aparece, e por que engana:** vinte segundos depois, dentro do Chrome.
     `file:///…/graphics/` renderiza a **listagem de diretório que o próprio navegador gera** — um
     HTML de verdade, que carrega sem um único erro e não tem `window.__renderAt`. O processo morre
     com `page.evaluate: TypeError: window.__renderAt is not a function`, que é **exatamente** a
     assinatura de um HTML de cena quebrado ou truncado.
   • **O que custou:** a sessão leu aquilo como cena defeituosa e varreu os 28 arquivos um a um, com
     um Chrome por arquivo, atrás do culpado. **Os 28 passavam.** O defeito era o argumento — e o
     próximo passo natural de quem acredita na mensagem é pior que a varredura: abrir uma cena
     CERTA para "consertar" o contrato que nunca esteve quebrado, gastando cota de arte em cima de
     arte que já estava boa.
   ✅ **A cura é uma linha e roda antes do navegador subir:** `statSync(file).isDirectory()` → erro
   alto, com o laço pronto para copiar. Caminho inexistente segue caindo no `ERR_FILE_NOT_FOUND`, que
   já é mensagem clara.
   ⚠️ **A régua geral, que vale para qualquer ferramenta desta casa:** *errar alto custa uma linha de
   validação; errar fundo manda alguém consertar o que está certo.* E o agravante que torna esta
   família cara: quando a falha profunda tem a MESMA assinatura de um defeito real do domínio, ela
   não parece um bug da ferramenta — parece um achado. Vale para todo gate que abre navegador, faz
   ffprobe ou lê JSON: valide o TIPO do que recebeu na primeira linha, não na centésima.
   Ver [ARTE-283] (o gate que reprovava decisão deliberada) — as duas nasceram na mesma auditoria, e
   as duas são sobre régua que produz o estrago que existia para evitar.

### SIS-416 · MEDIR NÃO É INFERIR — a camada que responde "quanto resta" foi removida como se fosse sonda de controle, e a frota parou com três assinaturas livres ao lado (18/ago/2026, painel `#/contas`, agente-raiz `scripts/quota/admissao.mjs` + `scripts/quota/painel.mjs`)

**O sintoma.** O dono abriu o painel de contas e pediu de volta *"a quota de 5h e a quota semanal"*.
A tela mostrava outra coisa: uma matriz de 12 contas × 2 modelos com `available`/`blocked`/`unknown`.
Verdadeira, e incapaz de responder à única pergunta que se faz nessa tela.

**O que estava acontecendo por trás.** A matriz dizia **24 de 24 bloqueadas**, todas até as 07:08 da
manhã seguinte, todas com `retry_after_source: "exponential_backoff"`. Medindo os cabeçalhos no
mesmo minuto:

| | 5h | semana | provedor | `claude -p` com Opus |
|---|---|---|---|---|
| `assinaturastop20@` | 0% | 65% | `allowed` | **ok** |
| `canal@top10company` | 0% | 16% | `allowed` | **ok** |
| `qintspace@` | 0% | 0% | `allowed` | **ok** |
| outras nove | 0% | 100–104% | `rejected` | 429 |

Nove estavam mesmo na parede — **na SEMANAL**. Três estavam livres e marcadas como bloqueadas por um
prazo que **nós** inventamos. A janela de 5h estava a 0% nas doze: *ela se refaz sozinha; a semanal
é o recurso escasso*, e sem medir não há como saber qual das duas prendeu.

**A causa.** Em 17/ago a medição por cabeçalho foi apagada do sistema sob o rótulo de "control
probe", e a admissão reativa ficou respondendo sozinha às DUAS perguntas — que não são a mesma:

- *"esta credencial ATENDE?"* — só uma chamada real responde. É a única via que pega a assinatura
  viva na fatura e desabilitada para o Claude Code.
- *"QUANTO resta, e quando vira?"* — nenhuma tentativa responde. Uma tentativa bem-sucedida prova
  que havia vaga naquele instante; não diz se restava 1% ou 70%, nem a que horas a janela reseta.

Quem decide sozinho erra sempre para o mesmo lado: **só cota**, e uma conta morta lidera a fila
([a memória de 14/ago]); **só tentativa**, e um backoff exponencial fecha uma porta aberta. As duas
se corrigem, e por isso as duas ficam.

**As regras.**

1. **A observação mais recente decide.** Cooldown por `provider_reset` é dado; por
   `exponential_backoff` é hipótese. Se a medição de cota é posterior à última recusa e o provedor
   diz `allowed`, a conta volta à fila. Se a recusa é posterior à medição, a recusa manda. O laço
   fecha sozinho: uma conta que recusar de novo sai outra vez, e o custo máximo do desempate é
   **uma tentativa por conta por ciclo de medição**.
2. **Ausência de medição nunca é prova de folga.** Sem leitura, a conta é *tentável por último* —
   nunca "100% livre", que foi o defeito de 14/ago.
3. **Entre tentáveis, ordene pela folga SEMANAL.** É ela que acaba.
4. **A sonda é Haiku por restrição técnica, não por economia.** O cabeçalho
   `anthropic-ratelimit-unified-*` é por CONTA; chamada direta a Opus/Fable com token de assinatura
   devolve 429 **sem cabeçalho nenhum**, inclusive numa conta a 0% que responde a esses modelos pelo
   CLI no minuto seguinte. Trocar por Opus não deixa a medição mais fiel — deixa a sonda **muda**.
5. **Não esconda a chamada para satisfazer o gate.** O inventário de automações continua declarando
   `direct_provider_api: "anthropic"`; o que mudou é a NATUREZA declarada
   (`provider_call_kind: "quota_measurement"`), com o arquivo nomeado em
   `infra/automacoes-politica.json`. Um override booleano dizendo `inference: false` teria calado o
   inventário — que é a peça que existe para saber quem chama o quê. *Órfão declarado é decisão;
   órfão silencioso é defeito* — a mesma régua, aplicada à chamada.
6. **Teste que proíbe a medição é teste que garante o apagão.** O gate do painel afirmava
   `Object.hasOwn(conta, "sessao5h") === false` sob o rótulo "sem percentuais inventados". Eles nunca
   foram inventados: saem do cabeçalho do provedor. *Um teste verde pode estar guardando exatamente o
   buraco que se quer tapar — leia o que ele afirma, não só se ele passa.*

**Irmã da [SIS-393]/[SIS-394]** (cota medida não diz que a conta serve) — esta é o inverso exato:
tentativa observada não diz quanto resta. As duas juntas são a regra inteira.

**E prima das [SIS-413]/[SIS-414]**, escritas no mesmo dia por outra sessão sobre o vigia de arte:
lá a rede de segurança gastou as duas passadas numa porta fechada e a concorrência ficou cravada no
lançamento; aqui a porta estava ABERTA e o sistema não olhou. *As três descrevem a mesma raiz — decidir
capacidade sem perguntar ao provedor quanto resta.*
---

### SIS-417 · O PALCO SE LÊ NA DECLARAÇÃO, NÃO NO DOM — fallback para `body` mediu 4K pela metade e imprimiu verde

**O gate que mede o palco pela METADE e imprime ✓.** `qc-tamanho.mjs:131` e
`check-overlap.mjs:97` detectavam o palco com `getElementById("stage") || document.body`. O `|| body`
acerta **por acidente**: só quando o CSS da cena declara largura no próprio body. Medido nas 122
cenas do `especies-humanas`: **121 declaram `body{width:3840px}`** e mediam certo; a
`n003-gente-de-outra-especie` não declara, o body assumiu a largura do viewport (**1920×2160**) e os
pisos saíram pela metade — **130/52/36 em vez de 260/104/72**. O gate imprimiu `✓ TAMANHOS ok` sobre
um crédito de **38px** contra piso real de **72px**. Verde vazio (OFÍCIO §4).

A cura é **ler a DECLARAÇÃO, não o DOM**: `data-render="4k-native"` no `<html>` — que as 122 cenas
declaram — é a mesma leitura de `qc-carga.mjs:95`, e é exatamente por isso que ele acertava a cena
onde os outros dois erravam. ⚠️ Não vale `querySelector('[data-render="4k-native"]')`: o atributo
mora no `<html>`, cuja caixa é a do viewport, e mediria 1920 outra vez **com cara de conserto**.

⚠️ **E a escala do defeito se MEDE, não se deduz por grep.** O laudo que levantou o caso descreveu o
mecanismo corretamente e errou o tamanho: afirmava *"86 dos 122 usam `id="palco"` — todos medidos
contra pisos pela metade"*. O critério nunca foi o `id`: das 86 com `id="palco"`, **85 mediam
certo**. Executar a prescrição sem medir mandaria mexer em 86 cenas para consertar **1**. Dois
métodos independentes convergiram na mesma cena única — varredura por Chrome nas 122 e grep estático
por `body{…width…}`. *Achado que descreve certo e prescreve errado é o mais caro: a parte verdadeira
compra confiança para a parte falsa.*

---

### SIS-418 · PARÂMETRO OPCIONAL NÃO É CONFIGURAÇÃO QUANDO NINGUÉM O PASSA

`wordsDoEspelho(dir, fimJanela, iniJanela)` mede cobertura da fala. Sete de oito chamadores omitiam
o início e o default zero transformava todo silêncio anterior à primeira cena em “fala descoberta”.
No `energia-escura`, o espelho começa em 30,40 s e a primeira palavra em 16,36 s: o relógio correto
recebia `cabe:false` porque se cobrava fala desde 0 s, onde nenhuma cena existia.

O conserto separa duas decisões que o retorno já declarava separadas: a **escolha** do arquivo
mantém a heurística histórica, para não trocar silenciosamente o relógio dos consumidores; somente o
**alerta** deriva o início real do espelho quando o chamador o omite. Início explícito continua
soberano, inclusive zero. A prova exige as duas metades: omitido passa; zero explícito reprova.

---

### SIS-423 · NA WORKTREE, O `.mov` DE BRANDING NÃO EXISTE — E O GERADOR NÃO FALHA: ELE INVENTA 6 s (21/ago/2026, `aceleradores-particulas`)

**O caso.** Estação TRILHA rodando em `worktrees/aceleradores-particulas`. O
`scripts/branding/overlays.mjs` imprimiu quatro linhas de aviso —
`⚠ ffprobe não leu ../../assets/branding/transicao-t1-laminas-alpha.mov — usando 6s de reserva` — e
**gravou o `_overlays-branding.json` assim mesmo**, com 6 s em tudo.

**As durações reais, medidas no repo principal:** T1 **1,5 s** · T2 **1,5 s** ·
`cta-inscreva-so` **3,0 s** · `cta-membro` **8,0 s** · `cta-like-inscreva` 6,0 s. Ou seja: a T1 saiu
**4× mais longa** do que é, o CTA de membros **2 s curto**, e só um dos cinco acertou — por
coincidência, que é o pior jeito de acertar, porque é o que faz o erro parecer pequeno.

**Não parou na duração: mudou uma DECISÃO.** O de-duplicador descarta CTA que cruza com outro já
colocado. Com 6 s de chute, ele descartou `cta-inscreva-fim @908,1 s` por cruzar com
`cta-membro-1 (912,7–918,7 s)`. Com os números reais o CTA de membros ocupa 912,7–**920,7** s e o
`cta-inscreva-so` dura 3 s, e o script o reposiciona para 911,1 s — o descarte continua certo, mas
**por outro motivo e em outro lugar**. Um veredito que sobrevive por sorte não é um veredito
verificado.

**A raiz é de máquina, não de código.** `.gitignore:46` ignora `*.mov`, então os arquivos de branding
**nunca** estão numa worktree — só na árvore principal, onde foram baixados. O caminho do script é
relativo (`const B = "../../assets/branding"`), e `assets/` na worktree é diretório REAL, não symlink
(ver [[worktree-assets-nao-e-symlink]] — a mesma armadilha já tinha mordido nos 27 GeoJSON). O mesmo
vale para `estudio.db`, que o picker de trilha abre por `RAIZ/estudio.db` e que também não existe
lá.

**Contorno (por worktree, e o git nem vê, porque `*.mov` e `estudio.db` estão ignorados):**
```
ln -sfn /home/<usuário>/top10-estudio/estudio.db estudio.db
for f in /home/<usuário>/top10-estudio/assets/branding/*.mov; do ln -sfn "$f" "assets/branding/$(basename "$f")"; done
```

**Conserto de raiz proposto (não feito):** ativo de marca que não abre é **falha dura**, não reserva.
O gerador deve recusar gravar o plano, ou no mínimo marcar cada overlay com `_durEstimada: true`
para que o gate adiante saiba que aquele número é chute. Reserva silenciosa transforma "não medi" em
"medi 6" — e o consumidor não tem como distinguir os dois.

*A regra transportável: **fallback numérico plausível é pior que erro**. Um `ENOENT` para a linha; um
"6 s de reserva" atravessa a linha inteira, é gravado em artefato, e vira decisão.*

## [SIS-435] · O caminho que morre no último degrau: quatro peças certas e um pulo no fim

> ⚠️ **Nasceu como SIS-423 e virou SIS-435 em 10/set/2026.** Sessões paralelas de ago/2026 escolheram o mesmo número: a SIS-423 original (o `.mov` de branding que a worktree não tem) ficou com ele, e esta foi renumerada para o gate de ID repetido do `regras-todas.mjs` voltar a passar. Citação antiga "[SIS-423]" que fale de *O caminho que morre no último degrau: quatro peças certas e um pulo no…* aponta para cá.

**O sintoma.** O `uruguai-despovoado` passou semanas a **duas cenas** do XML, com a fila dizendo
`render/pendente` — isto é, apontando para a máquina que já trabalhava sozinha e calando sobre a
única coisa que ninguém estava fazendo. A `s48-gado-selvagem` foi julgada **três vezes** contra a
mesma gravura de 1824, que segura 12,73 s enquanto a fala atravessa boi, cavalo e pampa vazio.
Nenhum dos três julgamentos podia terminar diferente: o defeito não estava no HTML nem no
julgamento, estava no acervo.

**A raiz — e ela é de FORMA, não de peça.** O caminho "reprovação de mídia vira caça nova" tinha
cinco degraus, e **quatro estavam construídos**. A detecção existia (`pedeMidiaNova`), o executor
existia (`pesquisar-fotos-cenas`), a fila existia, o despachante existia. Faltava a ligação — e
cada elo faltante falhava do mesmo jeito: **em silêncio, parecendo sucesso**.

1. `--somente` era lido DEPOIS do teste de "já desenhada". Toda cena reprovada tem HTML — foi
   preciso desenhá-la para julgá-la —, então o pedido explícito nunca a alcançava. Saída medida:
   `0 cena(s) de FOTO sem mídia`, com duas cenas paradas havia semanas.
2. O prompt do caçador era montado com `midia_ancora`, que descreve o que a cena pedia ANTES de ser
   desenhada — depois vira o caminho do arquivo baixado. Numa re-caça isso manda buscar exatamente
   o arquivo que o QC acabou de reprovar.
3. O roteador mandava para `qc` (e, com handoff parcial, para `render`), nunca para `pesquisa`.
4. O `refazer: "render"` de um ciclo anterior fixava a estação por cima da dedução do disco. A nota
   dele — *"conserto e julgamento fechados"* — era verdade quando foi escrita.
5. O despachante lia o `pauta-pesquisa.json` **antigo** como trabalho feito: `⏩ o ARTEFATO já está
   no disco. Avanço sem gastar agente`. O caminho inteiro terminava num pulo.

**A lei.** *Um filtro que pergunta pela AUSÊNCIA não enxerga o ERRADO — e reprovação de qualidade
produz errado, nunca ausente.* Vale para "sem mídia", "sem laudo", "sem clipe": a régua da
descoberta é cega justamente para o caso que a correção cria. Por isso **pedido explícito vence
descoberta**, em qualquer executor: quem nomeia o alvo já sabe algo que o filtro genérico não sabe.

**A segunda lei, sobre ordens antigas.** *Uma ordem sobrevive à morte da sua premissa e continua
mandando.* `refazer: "render"` pressupõe que exista o que renderizar; laudo aprovado pressupõe que
a mídia não mudou. Toda instrução gravada precisa de uma condição que a mate — e o descarte tem de
ser **anunciado**, porque ordem humana descartada em silêncio é pior que ordem obsoleta.

**A prova.** Antes: `0 cena(s) de FOTO sem mídia` · fila `render/pendente`. Depois: 2 cenas
listadas, briefing derivado do laudo com os instantes da fala (`boi ~8,7s · cavalo ~9,6s · pampa
vazio ~11,1s`), fila `p1 uruguai-despovoado pesquisa/pendente · 2 pedem arquivo`. O mesmo conserto
revelou **4 cenas** no `orcas-nao-matam` e **1** no `especies-humanas` na mesma situação.

**Onde mora:** `scripts/lib/recaca-midia.mjs` (deriva o pedido do laudo, sem persistir — não
envelhece e não pode divergir da fonte), mais os quatro consertos em `pesquisar-fotos-cenas.mjs`,
`montar-fila-real.mjs` e `despachante.mjs`.

## [SIS-436] · A régua de um ofício aplicada ao produto de outro devolve fracasso plausível

> ⚠️ **Nasceu como SIS-424 e virou SIS-436 em 10/set/2026.** Sessões paralelas de ago/2026 escolheram o mesmo número: a SIS-424 original (lotes paralelos competindo pelo lease) ficou com ele, e esta foi renumerada para o gate de ID repetido do `regras-todas.mjs` voltar a passar. Citação antiga "[SIS-424]" que fale de *A régua de um ofício aplicada ao produto de outro devolve fracasso pla…* aponta para cá.

**Irmã da [SIS-435]**, e o outro lado dela. A 423 diz que *filtro que pergunta pela ausência não
enxerga o errado*. Esta diz o que acontece depois que o trabalho é feito: **quem julga o resultado
precisa saber qual ofício o produziu.**

**O caso.** Em 22/ago/2026, na primeira execução do caminho de re-caça, o `pesquisa-dados` atendeu a
`n027-africa-do-sul-homo-naledi` do `especies-humanas`: gravou a fonte primária dos volumes
cranianos (Hawks et al., eLife 2017, DOI 10.7554/eLife.24232, mais Lesciotto & Richtsmeier 2019),
com o crédito pronto para a tela, dentro do `_pesquisa/pauta-dados.json`. O relatório imprimiu:

```
✗ n027-africa-do-sul-homo-naledi   0 arquivo(s) · 732s
0/1 cena(s) com mídia real no disco
```

e gravou `status: "sem-arquivo"` no diário. A prova era `midiaDe()` — **contar arquivo em
`_media/`** —, a régua correta para caça de imagem e a única que existia. Trabalho de dado não
produz arquivo: produz uma linha com procedência.

**Por que isso é caro, e não é só um log feio.** *A retomada lê o status.* A passada seguinte
re-dispararia a mesma pesquisa e pagaria de novo por um trabalho pronto no disco — e a cena seguiria
contando como descoberta para quem lê a fila. Um erro que se paga sozinho, em ciclo, sem ninguém
perceber que está pagando.

**O segundo caso, no mesmo dia, com o vetor invertido.** A `s22-card-chao-pasto` do
`uruguai-despovoado` voltou **`0 arquivo(s)` depois de 1108 s** — dezoito minutos de agente para
nada. Ela pedia FOOTAGE (*"o footage escolhido é off-tema: uma lavoura cerealífera ilustra uma
abertura dedicada ao pasto"*), e o executor era o de FOTO, cujo próprio cabeçalho diz "não footage
de stock": o prompt mandava entregar numa pasta que nem existia. Aqui não foi o julgamento que
errou o ofício — foi o DESPACHO.

**A lei, nas duas pontas.** Antes de despachar, pergunte **qual ofício atende este pedido**; depois
de despachar, prove pela régua **daquele** ofício. Nenhuma das duas perguntas é respondida pelo
`modo` do espelho, que descreve como a cena se monta e não o que falta nela — quem sabe é o LAUDO
(que viu os frames) e o DISCO (que mostra a mídia atual).

**Um detalhe de nomenclatura que já custou uma falsa negativa.** O footage é nomeado pela **raiz** da
cena, não pelo id inteiro: `s22-card-chao-pasto` tem `_media/footage/s22-aereo-planicie-horizonte.mp4`
— o nome carrega `s22`, e o resto do id descreve a CENA enquanto o resto do arquivo descreve o
CLIPE. Casar por id inteiro devolve "não tem footage" com 35 clipes no disco. (`startsWith("s2-")`
não casa `s22-`, porque o hífen entra na comparação — a raiz é segura contra o vizinho.)

**Onde mora:** `alvoDe()` / `provaDe()` / `unidadeDe()` em `scripts/pesquisar-fotos-cenas.mjs`.

## [SIS-437] · A retomada por existência mente no REFAZER — e o relatório sai bonito

> ⚠️ **Nasceu como SIS-425 e virou SIS-437 em 10/set/2026.** Sessões paralelas de ago/2026 escolheram o mesmo número: a SIS-425 original (conserto de cascata aplicado a um driver só) ficou com ele, e esta foi renumerada para o gate de ID repetido do `regras-todas.mjs` voltar a passar. Citação antiga "[SIS-425]" que fale de *A retomada por existência mente no REFAZER — e o relatório sai bonito…* aponta para cá.

**Terceira da família da [SIS-435]/[SIS-436].** As duas primeiras tratam de DESCOBRIR e de PROVAR o
trabalho de outro ofício. Esta trata do que acontece quando o trabalho pedido é **refazer**: toda a
maquinaria de retomada desta casa pergunta *"o artefato existe?"*, e no refazer a resposta é **sim
desde o primeiro instante** — pelo artefato que se quer justamente substituir.

**O caso.** Em 22/ago/2026, com o dado da `n027-africa-do-sul-homo-naledi` já caçado e no dossiê
(Hawks et al., eLife 2017), disparei o redesenho para levá-lo à tela. Saída:

```
✓ n027-africa-do-sul-homo-naledi     🗺 0s
1 pronto
```

com o HTML **intacto desde 19/ago** e o diário gravando `estado:"pronto", segundos:0`. O agente
nunca foi chamado. O despacho passa `artefatoExiste: () => jaTem(s)` — otimização correta no caso
normal, onde ela evita pagar inferência por uma cena que outro worker acabou de materializar
enquanto esta esperava lease — e o fluxo caiu em `validarUma`, que carimbou a arte velha.

**Por que é a forma mais cara do morto-silencioso.** Um erro que reporta erro custa o retrabalho. Um
que reporta SUCESSO custa o retrabalho *mais* a confiança: o relatório diz que a cena foi refeita, o
QC seguinte a reprova pelo mesmo motivo de sempre, e **ninguém liga uma coisa à outra** — o ciclo
parece "cena difícil" em vez de "cena nunca tocada". Foi assim que a `s48-gado-selvagem` do
`uruguai` chegou a três julgamentos idênticos ([SIS-435]).

**A lei.** *Em qualquer operação de REFAZER, a prova de trabalho é o CARIMBO, não a existência.*
Guarde o estado de antes — mtime ou hash — no mesmo ato em que autoriza a sobrescrita, e exija que o
artefato final seja mais novo que ele. Serve para redesenho de cena, re-render de clipe, re-caça de
mídia e re-julgamento: em todos, o arquivo velho está lá para responder "sim" à pergunta errada.

**E a sobrescrita autorizada guarda o anterior.** O redesenho copia o HTML para `graphics/_bkp/` com
carimbo antes de liberar a escrita. Não é zelo: em 26/jul um `rsync` apagou 5 cenas de arte fresca e
o registro daquele dia diz que **não havia `_bkp/` de HTML e o versionamento do bucket está
`Suspended`**. Refazer é a mesma sobrescrita, só que pedida — a arte anterior é ativo pago e sai de
cena guardada, ou não sai.

**Onde mora:** `MTIME_ANTES` / `precisaReescrever()` em `scripts/desenhar-cenas.mjs`, usados nas
DUAS pontas: na decisão de desenhar (`artefatoExiste`) e no detector de morto-silencioso de
`desenharUma`. Ter uma sem a outra deixa metade do buraco aberto.

### SIS-429 · XML gerado de worktree perde branding .mov em silêncio — cubra a FAMÍLIA, não o item que o aviso denuncia (02/set/2026)

Gerar o XML de 5 camadas **de dentro de um worktree** produz um entregável **incompleto, válido e
silencioso**. Medido em 02/set/2026 (`megabarragem-himalaia@finalizacao`).

O `.gitignore` tem `*.mov`, e todo branding com canal alpha é `.mov`. O worktree fica no commit do
seu branch. Resultado: **12 `.mov` na árvore principal × 7 no worktree**.

O que sumiu do XML, medido camada a camada contra a versão anterior:

| camada | antes | depois | o que perdeu |
|---|---|---|---|
| V3 | 4 | 3 | `cta-like-inscreva-alpha` |
| V5 | 1 | 0 | `transicao-t1-laminas-alpha` |

**E o XML continua VÁLIDO:** parseia, as 5 camadas existem, 130 `pathurl` resolvem, o `finalizar.mjs`
sai com status 0. Um CTA e uma transição simplesmente não estão lá. Só a cartela de membros tem
aviso dedicado (`xml-premiere-5camadas.mjs:1293`); **CTA e transição somem calados**.

⚠️ **Consertar a pasta que o aviso aponta NÃO resolve** — e essa é a armadilha cara. Ligar só
`assets/clube-membros/cards/*.mov` (que é o que o único aviso menciona) e regerar devolve um XML que
*ainda* vem errado, agora sem aviso nenhum, porque as perdas de `assets/branding/` nunca falaram.
**O aviso descreve o membro da família que alguém instrumentou, não a família.** Diante de um
artefato que depende de binário gitignored, cubra a classe inteira, não o item denunciado.

⚠️ **De quebra, o mesmo worktree quebra quem escolhe arquivo por mtime:** o checkout carimba a
mesma hora em tudo, então `finalizacao-config.mjs:455` ("a lista de membros mais nova") escolhe
arbitrariamente — saiu `membros-2026-08-11.csv (1.4d)`, uma lista de 11/ago com idade de 1,4 dia,
que é a idade do *checkout*. Quem vai pela data no NOME (`membros/resolver.mjs`) acerta. E o
worktree nem tinha a lista mais recente: parava em `2026-08-21`, contra `2026-08-28` na principal.

**A régua: o isolamento entre árvores é de CÓDIGO, nunca de DADOS.** `out/` é symlink para
`/dados/out` nas duas (mesmo inode, ver [SIS-282] e o gerador sem lock), mas `assets/` **não é** — e
o binário grande fica só de um lado. Antes de gerar entregável de um worktree, ligue a família
inteira e **prove contando as camadas contra a versão anterior**, não pelo item que você foi
consertar:

```
P=/home/<usuário>/top10-estudio
(cd "$P" && find assets -name '*.mov' | sort) > /tmp/a; find assets -name '*.mov' | sort > /tmp/b
for f in $(comm -23 /tmp/a /tmp/b); do ln -sfn "$P/$f" "$f"; done   # gitignored: o git não vê
```

⚠️ E ao validar `pathurl`, faça `urllib.parse.unquote` antes de `os.path.exists`: os MP3 de trilha
têm `%20` no nome, e sem decodificar 8 arquivos existentes aparecem como "não resolvem" — falso
positivo que manda procurar defeito onde não há.

⚠️ **Erro de medição que precede tudo isto:** o cwd do shell **persiste entre comandos**. Um `cd`
para medir a árvore principal continua valendo depois, e aí `ls assets/…` rotulado "worktree" lista
a principal — as duas colunas saem idênticas e a conclusão vira *"só faltam os .mov"*. Sai plausível
porque duas árvores do mesmo repo *deveriam* ter os rastreados iguais. Ponha `echo "cwd=$(pwd)"` em
toda medição comparativa.

Agente-raiz: nenhum — é infra. Candidato a conserto durável: `xml-premiere-5camadas.mjs` deveria
RECUSAR gerar (ou avisar por item) quando um `.mov` declarado no plano de branding não existe no
disco, em vez de emitir a camada sem ele.

### SIS-430 · Par de grafia que difere SÓ NA CAIXA sai como "0 campo(s)" — e o silêncio é o defeito, não a não-aplicação (24/ago/2026)

> ⚠️ **Nasceu como SIS-428 e virou SIS-430 em 02/set/2026.** Três sessões paralelas escolheram números no mesmo dia: a 428 ficou com o `setsid`, a 429 com o branding perdido em worktree, e esta veio por último. É a [SIS-426] se manifestando dentro da própria doutrina — **número de lei também é recurso, e recurso sem dono colide.** Nenhuma lei se perdeu; o que faltava era alguém conferir o número contra o estado real antes de gravá-lo.

**`propagar-grafia.mjs` normaliza a troca pela caixa do ACHADO**, que é o comportamento certo para
`"Evereste"→"Everest"` (pega `EVERESTE` e `Evereste`, devolve cada um na sua caixa). Só que, quando o
par é `"Equador"→"equador"`, preservar a caixa do achado **devolve o próprio achado**: `caixaDe`
recapitaliza o valor, a troca vira no-op, e o script anuncia `0 campo(s) com grafia corrigida` nos
três alvos — com o defeito inteiro de pé.

**Medido em `dias-mais-curtos@textos-tela`:** relatório `0 campo(s)`, e **31 ocorrências vivas** de
"Equador" no disco (espelho 3 · regência 11 · conceito 9 · `_regencia-plano` 1 · `_direcao-pendente`
7). O `corrigir-nomes.mjs` tinha acabado de corrigir a fala — 2 trocas em `words-final.json` e 2 em
`words-limpo.json` —, então a fala dizia `equador` e os artefatos de planejamento continuavam
dizendo `Equador`. **Três dessas ocorrências eram defeito real, e as três são word-lock:** o campo
`palavras` de dois beats da regência (que é CÓPIA literal da fala) e duas instruções que mandam a
arte agir *"na palavra 'Equador'"* e *"em 'sobre o Equador'"*. A arte que fosse casar essas palavras
contra o `words-final.json` não acharia nenhuma — busca de grafia é sensível à caixa.

⛔ **E o conserto NÃO é aplicar automaticamente — aplicar seria pior.** No mesmo arquivo convivem
`"a linha do Equador"` (a grafia CORRETA, que o glossário de `textos-tela.json` fixou justamente
para o rótulo não afirmar o país sul-americano) e `"em 'sobre o Equador'"` (word-lock errado). Um
replace cego rebaixaria a grafia certa junto com a errada. Distinguir as duas é julgamento sobre o
PAPEL de cada ocorrência — cópia da fala, citação da fala, ou prosa de direção —, não casamento de
string. *O script estava certo em não trocar; estava errado em não dizer nada.*

**A régua, e ela é maior que este script:** *`0` de uma ferramenta que não sabe olhar não é `0` do
mundo.* "Nenhum campo corrigido" e "nenhum campo a corrigir" imprimem igual e significam o oposto, e
é o segundo que o operador lê. A mesma assinatura já apareceu duas vezes neste arquivo — a caixa
alta que faltava em `quao-fundo-terra` ([SIS-268], `0 campo(s)` com duas instruções de tela de pé) e
o `ÂNGRITOS` de `planeta-em-meteorito`. Toda ferramenta que possa relatar zero por INCAPACIDADE tem
de dizer de qual dos dois zeros se trata.

**Consertado na fonte:** `scripts/decupagem/propagar-grafia.mjs` detecta pares com
`k.toLowerCase() === v.toLowerCase()`, avisa em voz alta ANTES do relatório ("este script NÃO os
aplica", com o motivo), e imprime o `grep` que lista os candidatos — mandando varrer à mão os campos
que copiam ou citam a fala. Regressão conferida em `piramide-porta-secreta` (32 campos) e
`ucrania-duas-guerras-uma` (22 campos): o caso normal segue intacto e nenhum deles dispara o aviso.

**Parente da [SIS-263]** (o `midia_necessidade` que sobrevive ao gate limpo) e da doutrina do
`CLAUDE.md` que manda **varrer o resíduo com `grep` em vez de confiar na contagem do relatório** —
aqui a contagem não estava incompleta, estava em ZERO, que é a forma mais convincente de dizer
"nada a fazer".

> **Redação paralela integrada em 03/set/2026.** Duas sessões documentaram este mesmo
> defeito no mesmo dia, na worktree de um vídeo e na `main`. Fiquei com a redação mais
> completa e trouxe abaixo os parágrafos que só a outra tinha — nenhum argumento se perdeu,
> e a lei continua uma só, com um número só.

---

O cabeçalho do `montar-regencia.mjs` promete a divisão de trabalho que dá sentido ao gate: *"o agente
declara o julgamento (regime, beats, nomeados_sem_imagem); **a aritmética é daqui** — censo estimado de
cabeça foi como o defeito passou despercebido antes."* Vinte linhas abaixo, ele fazia o contrário:

```js
censo_registro: censo,                                    // ← o MEDIDO
...Object.fromEntries(Object.entries(declarado)           // ← o DECLARADO, e em JS o último vence
  .filter(([k]) => k !== 'nomeados_sem_imagem')),
```

Uma única chave estava protegida do spread — justamente a que é do agente **por construção**. Todas as
calculadas ficavam expostas: bastava o arquivo do agente trazer `censo_registro` para o número medido
sumir do artefato.

**E o modo de falhar é o pior que existe:** o `console.log` imprime a variável `censo`, não o objeto
gravado. **O log mostrava o medido enquanto o arquivo guardava o declarado.** Quem rodasse o gate e
lesse a tela — que é o que todo mundo faz — via a aritmética da máquina e ia embora convencido. O
defeito só aparece para quem abre o JSON e compara, e ninguém abre um JSON que o console acabou de
declarar verde.

**A regra, e ela vale para qualquer gate da casa:** *chave que a máquina CALCULA é da máquina.* Ao
fundir declaração de agente com medição, o merge nunca é cego — as calculadas se filtram do spread, e
o que o agente escreveu por cima delas **se preserva sob outro nome** (`<chave>_declarado`) em vez de
ser descartado. As duas metades importam por motivos diferentes: o **número** dele não vale (é o
auditado se medindo), mas a **prosa** costuma valer muito — neste caso ele havia lido os 31 beats de
desenho um a um, auditoria mais funda que o regex do próprio script. Jogar as duas fora trocaria um
defeito por outro. E o descarte se ANUNCIA no console: conserto silencioso deixa o agente honesto sem
saber que o número dele foi para o escanteio.

⚠️ **O que torna esta lei incômoda: nesta rodada não houve UM dado errado.** O `regente-de-imagem`
copiou os valores exatos do cálculo determinístico e ainda deixou um `_fonte` denunciando o buraco em
voz alta — *"o montador faz spread deste objeto POR CIMA do censo que ele mesmo calcula; se as partes
mudarem, APAGUE esta chave"*. O artefato entregue estava correto do primeiro ao último decimal.
**E é exatamente por isso que o mecanismo não serve:** ele funcionou porque o auditado foi honesto e
atento, e um gate cuja correção depende da honestidade do auditado não é um gate — é uma declaração
de confiança com aparência de medição. O aviso dele também era frágil por natureza: bastava alguém
re-rodar o montador depois de mexer nas partes, sem ler o `_fonte`, para um censo velho passar por
novo com o carimbo da máquina.

*Parentesco: a [ARTE-88] nasceu de `auditoria.nomeados_sem_imagem` sair limpo porque quem o preenchia
era quem estava sendo auditado — mesma família, um andar acima. Lá o problema era o agente se
absolver; aqui é o CÓDIGO deixar. E a [SIS-419]/[SIS-425] são o eixo vizinho: um conserto que alcança
um chamador e esquece os irmãos. Vale a varredura: `grep -n '\.\.\.Object.fromEntries(Object.entries('
scripts/` — todo lugar onde declaração de agente entra num objeto que também carrega medição merece a
mesma pergunta, **"quem vence se as duas trouxerem a mesma chave?"**.*

### SIS-442 · Uma execução por projeto: duas gravam o mesmo estado e a última apaga a outra (10/set/2026)

> ⚠️ **Nasceu como SIS-436 e virou SIS-442 em 11/set/2026.** Duas linhagens paralelas destilaram lei no mesmo dia e as duas leram "o próximo número livre" no seu próprio clone: a SIS-436 original (a régua de um ofício aplicada ao produto de outro) já estava no `main` e ficou com o número, e esta foi renumerada para o gate de ID repetido do `regras-todas.mjs` voltar a passar. Citação antiga "[SIS-436]" que fale de *Uma execução por projeto: duas gravam o mesmo estado e a última ap…* aponta para cá.

Dentro de um processo, a gravação de um arquivo de estado costuma ser serializada — no motor de
insumos, por promessa em cadeia, justamente para que duas faixas terminando juntas não gravem cada
uma a SUA cópia do ledger. **Entre dois processos essa proteção não existe**, e o que se perde não é
tempo: é o registro de trabalho JÁ PAGO.

Medido em 10/set/2026: duas execuções vivas do mesmo comando (`insumos.mjs <slug> --de-bucket
--rodar --tipo=geo`) mais um agente órfão refazendo geometria entregue 15 min antes, numa máquina de
2 vCPUs com load 11.

⚠️ **Admissão de carga não pega isto.** Ela limita quantas frentes correm DENTRO de uma execução e
não sabe que existe outra ao lado. *Dois processos de "1 frente" são duas frentes na máquina.*

**A trava é por PROJETO, não por faixa de trabalho:** `--tipo=geo` e `--tipo=footage` do mesmo vídeo
não disputam necessidade nenhuma, mas disputam o mesmo arquivo de estado — e é ele que guarda o que
já foi feito. Recusar com o PID de quem já trabalha (exit 3), porque a resposta certa quase sempre é
acompanhar o que já roda, não lançar um segundo.

Três calibrações sem as quais a trava vira o próprio problema: trava de processo MORTO não trava
ninguém (rodada interrompida é o caso normal); trava ilegível é órfã; e o modo de LEITURA (`--dry-run`)
nem trava nem é travado — é o comando que se usa para olhar o que já roda.

### SIS-443 · Conserto aplicado num gêmeo e não no outro é pior que conserto ausente (10/set/2026)

> ⚠️ **Nasceu como SIS-437 e virou SIS-443 em 11/set/2026.** Duas linhagens paralelas destilaram lei no mesmo dia e as duas leram "o próximo número livre" no seu próprio clone: a SIS-437 original (a retomada por existência que mente no refazer) já estava no `main` e ficou com o número, e esta foi renumerada para o gate de ID repetido do `regras-todas.mjs` voltar a passar. Citação antiga "[SIS-437]" que fale de *Conserto aplicado num gêmeo e não no outro é pior que conserto aus…* aponta para cá.

O commit `84679747f` (10/set/2026, 10:22) fez a cascata devolver `timeout: true` quando o teto de
tempo mata a sessão, para que "morta pelo relógio" deixasse de ser registrada como
`INSUMOS_EXECUCAO_FALHOU`. Ele mexeu em `rodarComCascata`. A estação de insumos chama
`rodarComCascataAsync`.

**33 minutos depois**, às 10:55, a segunda rodada de caça de footage do `estreito-de-ormuz` morreu no
teto de 30 min e o ledger gravou, de novo, a MESMA frase que o commit existia para matar:
`INSUMOS_EXECUCAO_FALHOU: Warning: no stdin data received in 3s…`.

A causa é que as duas gêmeas matam o filho por caminhos diferentes:

  · `spawnSync` com `timeout` → `error.code === "ETIMEDOUT"`
  · `execFile` com `timeout`  → mata o filho e marca `err.killed` + `err.signal`, deixando
                                `err.code` INDEFINIDO. A detecção da síncrona não casa nunca.

⚠️ **Por que isto é PIOR que não ter consertado:** a doutrina passou a afirmar que o defeito morreu.
A etapa seguinte leu "consertado" no registro, não voltou a olhar, e teria concluído que o segundo
`EXECUCAO_FALHOU` era um defeito NOVO de execução — caçando um bug que não existe enquanto o de
verdade seguia comendo sessões de 30 minutos.

⚠️ **E o teste que existia passava com a produção quebrada.** Ele provava o CONSUMIDOR do campo
(`julgarTentativa`, com `timeout: true` escrito à mão na fixture). *Testar quem LÊ um campo não prova
que alguém o ESCREVE.* Fixture é declaração de intenção; só um teste que exercita o produtor de verdade
— aqui, um `claude` de palco que não termina — prova que o campo nasce.

**A régua:** ao consertar comportamento que existe em mais de uma implementação da mesma coisa
(`rodarComCascata`/`rodarComCascataAsync`, `qc-hex`/o hook que o duplicava), o conserto só está feito
quando o TESTE atravessa todas elas. Procure as gêmeas antes de escrever a mensagem de commit —
`grep` pelo nome da função irmã custa dez segundos e é a diferença entre conserto e doutrina falsa.

### SIS-444 · Falha de medição não é zero — e o contrato da máquina vence a dedução de autoria (11/set/2026)

Medido na `estudio-top10` em 11/set/2026, 06:02Z, com load 104 em 8 vCPUs e 11–14 Chromes raiz
vivos: o regulador listava o `/proc` com um `ls` com glob dentro de um `execSync` que devolvia `""` em
qualquer falha. Processo que morre entre a expansão do glob e o `lstat` faz o `ls` sair 2 com quase
toda a saída impressa — e o wrapper jogava tudo fora. `pesadosPorClasse()` devolveu
`12 0 0 12 0 12 12 11 11 0` em dez leituras seguidas. Cada zero caía no ramo do [SIS-87] *"sem pesado
vivo e agentes abaixo de 200% → resíduo do render que saiu; porta aberta"*: **21 vezes em 6 h**, numa
máquina que não renderiza desde 08/ago, com o teto do despachante oscilando entre 0 e 77. Às 13:25Z,
na mesma VM, 40 leituras lado a lado: a release em produção leu **zero em 22** (as 18 últimas
seguidas), o `ls` falhou em 51 de 80, e a enumeração nova leu zero em nenhuma.

Três regras, cada uma com a trava no código (`scripts/estudio/regulador.mjs`; teste em
`scripts/testes/regulador-enumeracao-proc.test.mjs`):

1. **Wrapper que engole erro transforma sucesso parcial em nada.** Na máquina ocupada, algo sempre
   morre no meio de uma varredura do `/proc` — e é justamente quando o sensor mais importa. Enumere
   com `readdirSync('/proc')` filtrado por `^\d+$` e tolere o ENOENT pid a pid.
2. **Falha de medição é INDETERMINADA, nunca zero.** "Zero" afirma algo sobre a máquina; "não
   consegui ler" afirma algo sobre o sensor. Numa guarda de admissão, indeterminado mantém o último
   teto medido ou fecha — nunca abre.
3. **Onde o contrato proíbe um ofício, ele não serve de explicação.** O resíduo de render do [SIS-87]
   é dedução por ausência; o `infra/arquitetura-producao.json` é declaração. Na `estudio-top10`, que
   proíbe `render-producao`, carga alta sem pesado vivo fica sem dono medido, e na dúvida admite-se
   menos.

> **A lei:** *um sensor que falha tem de dizer que falhou.* Toda leitura que pode dar errado precisa de
> um terceiro estado além de "tem" e "não tem"; sem ele, a falha escolhe o lado por você — e aqui ela
> escolhia abrir a porta.

### SIS-450 · Laço de espera cujo `pgrep -f` casa com a própria linha de comando espera para sempre (11/set/2026)

> 🔀 **Renumerada na integração de 11/set/2026.** Nasceu como `SIS-437` na árvore de trabalho do checkout compartilhado, destilada em paralelo com outra linhagem. O número antigo já pertencia a outra lei no `main` — pela [SIS-62], quem já está no remoto fica com ele. **Renumerada uma segunda vez, de 4xx para cá:** o `main` reservou 444–446, por escrito na [SIS-447], para três ramos pendentes que já disputavam a 444. Citação a `SIS-437` que descreva ESTE assunto aponta para cá. Nenhuma linha foi perdida.

```bash
until ! pgrep -f 'consertar-cenas.mjs terremotos' > /dev/null; do sleep 20; done
```

Nunca sai. A linha de comando do próprio `bash -c` **contém** a string procurada, então o `pgrep`
encontra a si mesmo e o laço gira até o teto. Perdi 6 min e 40 s esperando um driver que já tinha
terminado havia minutos — e o sintoma é o pior possível: *parece que o trabalho ainda está rodando*,
então quem espera não investiga.

> **Padrão de `pgrep -f` para esperar processo tem de conter algo que a linha do ESPERADOR não tenha**
> — na prática, o prefixo do executável: `pgrep -f "node scripts/consertar-cenas.mjs <proj>"`. Na
> dúvida, guarde o PID quando lançar e espere por `kill -0 "$pid"`, que não tem ambiguidade nenhuma.

### SIS-452 · PORTÃO DE SAÍDA SEM IRMÃO NA ENTRADA DEIXA PASSAR O BACKLOG INTEIRO — e o objeto a julgar é o texto GRAVADO, não o arquivo que a bancada leu (11/set/2026)

> 🔀 **Nasceu como SIS-449, passou pela 451 e virou SIS-452 em 11/set/2026**, ao integrar o ramo no
> `main`: a SIS-449 do `main` (*mensagem de erro cortada pela esquerda*) e depois a SIS-451 do PR #72
> (*o custo de uma sessão é o que a própria reserva lançou*) chegaram ao remoto primeiro, e pela
> [SIS-62] quem chegou primeiro fica com o número. **O conteúdo não foi tocado: só o número mudou**,
> aqui e nas 12 citações do código (`roteiro-entrada.mjs`, despachante §2.8b, `erratas-gravadas.mjs`,
> `decupar-agente.mjs`, `ciclo-vm.sh`, estações `textos`/`decupagem` e roupas).

A bancada de quatro lentes só é cobrada numa porta: a **saída** para o Drive (`enviar-drive.mjs`,
`regerar-doc.mjs`). Porta atravessada uma vez não se atravessa de novo. Medido em 11/set/2026:

- de 38 roteiros com data no bucket, **36 existiam antes** de a bancada nascer (31/jul);
- dos 44 roteiros **no ar**, **nenhum** tinha PASS; os 12 vereditos da VM eram de pendentes, 11 FAIL;
- o `mamute-de-volta` foi ao ar em 12/ago com FAIL nas quatro lentes guardado desde 08/ago;
- o `megabarragem-himalaia` (roteiro de 17/jul, no ar em 03/set) disse "um acordo magro, de 2006" —
  o memorando China–Índia é de **14/jan/2002** — e o `verificador-de-fatos` nunca o leu ([ROT-97]).

A [SIS-03] e a [SIS-388] já descreviam o buraco. Nenhum gate as cumpria.

**O irmão retroativo, agora em código:** na **entrada** da produção, o despachante (seção 2.8b)
dispara `scripts/roteirizacao/roteiro-entrada.mjs` para cada vídeo em curso que ainda vai passar pela
estação `textos`. Ele pega o texto que o
apresentador **gravou**, procura o veredito nas quatro pastas onde eles moram, e roda a lente
`fatos` quando ninguém conferiu a verdade **daquele** texto. O laudo vai para
`out/<slug>/qc-roteiro/entrada/`, a linha da fila ganha `roteiroEntrada`, e a estação `textos` o lê:
afirmação DIVERGE/REFUTADA não vai para a tela e fica anotada, com a frase exata, para o corte.

⚠️ **O objeto é o GRAVADO, e o hash cru dos dois lados mente.** O apresentador lê o Google Doc; a
bancada carimba o `roteiro-boco.md` ([SIS-289]). O export do Doc perde o front-matter e os `**` dos
títulos — no megabarragem, 16 linhas diferentes e **nenhuma de narração**. Comparar SHA do Doc com
SHA do veredito daria "divergiu" em **todo** vídeo, e alarme que grita sempre é o que ensina a
ignorar o gate. A régua tem dois passos: o carimbo cru acha **qual** arquivo foi julgado (exato, a
régua da própria bancada); o texto **normalizado** desse arquivo se compara com o gravado.

⚠️ **E "sem veredito" só depois de procurar onde eles moram.** O índice de roteiros já deu "não
rodou" para projetos com FAIL guardado no backup. A porta lê disco da VM, `out/` e
`macbook-backup/out/` do bucket e `roteiros/`; leitura que **falha** não é ausência — sai com
código 3 e a próxima passada tenta, nunca vira "sem bancada" por um `gcloud` que piscou.

⚠️ **Não é trava.** O dono tirou os gates humanos do caminho (29/jul, 02/ago). Nada na porta muda
estação ou status; o julgamento roda em segundo plano, um por vez na máquina, e a estação que o
consome segue normalmente quando ele ainda não chegou.

⚠️ **Lente paga só onde há quem a leia.** Os consumidores do laudo são o decupador e a estação
`textos`. A primeira versão da 2.8b julgava toda linha não concluída, e a onda medida na fila antes do
primeiro corte (11/set/2026) mostrou o preço: das 6 linhas elegíveis, **5 já tinham passado da
`textos`** (três em render, uma em trilha, uma em finalização) — até ~13,6 mi tokens em laudos que
nenhuma estação leria. A porta agora pergunta ao mapa da esteira (`aindaPassaPor` em
`scripts/estudio/fila.mjs`, derivado do `PROXIMA`) se a linha ainda chega à `textos`; só então paga. A
projeção de um julgamento que já existe continua valendo para qualquer linha, porque é de graça.
*Laudo sem leitor é inferência que não muda nada: cobre o produtor só onde o consumidor ainda está à
frente.* **Alavanca declarada, e a decisão é do dono (não implementada em 11/set/2026):** os vídeos que
já passaram da `textos` voltam a ter leitor se a finalização — ou o `entregar.mjs` — imprimir
`node scripts/lib/erratas-gravadas.mjs <slug>` na nota do pacote que vai ao Premiere, onde o dono corta
([FIN-45]). Existindo esse consumidor, a lente desses vídeos passa a se pagar, e a guarda desce até a
finalização. Na onda de 11/set eram cinco vídeos prestes a ir ao ar sem conferência de fatos — o
preço que o megabarragem mostrou.

**Custo, medido na prova (megabarragem, 11/set/2026, `estudio-top10`):** uma lente
`verificador-de-fatos`, Opus, esforço máximo, com rede autorizada — **996 s de parede e 2.722.234
tokens** (669.779 de entrada · 1.843.363 lidos de cache · 128.853 gravados em cache · 80.239 de
saída), prompt de 56.974 B com o dossiê do roteirista. Resultado: 30 afirmações com veredito externo,
**5 erratas** — o "acordo de 2006" (DIVERGE: o memorando é de 2002; 2006 é o mecanismo de peritos), e
duas REFUTADAS graves que a errata do vídeo nem registrava (o acordo **expirou em 2023** e a China não
manda dados desde 2022; "cortado uma vez" foi cortado duas). Custa uma lente por vídeo em curso antes da `textos`, uma
vez por texto gravado; laudo da bancada já carimbado para o mesmo texto é reaproveitado a custo zero.

⚠️ **A 1ª rodada custou 483 s e 204.966 tokens e não verificou nada** — a porta `executarInferencia`
passava `--tools` sem `--allowedTools`, e em `-p` ninguém aprova: as cinco buscas voltaram "permission
not granted", e o laudo saiu com 12 de 12 "SEM VEREDITO" e `VEREDITO: FAIL`. Por isso a porta agora
recusa laudo da lente com **zero veredito externo** (vira `fatos.bruto.md`, `final:false`): um FAIL
por não ter verificado tem a mesma cara de um FAIL por erro achado, e só a tabela os separa.

**Escopo:** do presente para frente. A porta julga os vídeos **em curso**; o que já foi ao ar não se
refaz — erro achado nele vira errata ([SPEC-ERRATAS], ramo `claude/stoic-carson-5480dc`).

**A régua, para qualquer gate desta casa:** *quem guarda uma porta de saída pergunta também quem já
passou por ela antes de ela existir.* Se a resposta é "o backlog inteiro", o gate precisa de um
irmão onde o trabalho **entra**, e esse irmão julga o objeto que de fato vai seguir adiante — não o
arquivo mais fácil de achar.

---

### SIS-454 · Uma reprovação de gate medida sob concorrência pode escapar do desempate e virar veredito (11/set/2026)

> 🔀 **Renumerada na integração de 11/set/2026.** Nasceu como `SIS-439` no checkout canônico da `estudio-top10`, resgatada no ramo `recovery/vm-canonico-20260911` (commit `d5fbe4969`). O número antigo já pertencia a outra lei no `main` — pela [SIS-62], quem já está no remoto fica com ele —, e a 452 está reservada pelo PR #77. Citação a `SIS-439` que descreva ESTE assunto aponta para cá. Nenhuma linha foi perdida.

O bloco §2.5 do `qc-cena.mjs` existe exatamente para isto: gate que **mediu** e reprovou porque a
MÁQUINA estava saturada, não porque a cena tem defeito. Ele re-mede sozinho o que classifica como
*suspeito*. **Reprovação que não é classificada assim passa direto e é cravada no `_portao.json`.**

Medido na `t-s003`: o lote (`conc=2`, load ~40) devolveu `colisão`. O log do próprio desempate dizia
*"1/2 reprovação(ões) era(m) da concorrência, não da cena"* — só que a que ele re-mediu foi o
`crédito-fantasma`. Rodando o gate isolado, na MESMA sintaxe que o runner usa:

```
node scripts/check-overlap.mjs …/t-s003.html       → ✓ SEM colisões
node scripts/check-overlap.mjs …/t-s003.html 0.5   → ✓ SEM colisões   (0.5 é POSICIONAL aqui)
```

**A cena não tem defeito nenhum e ficou fora do render desde as 06:06Z**, com laudo APROVADO — o par
de sintomas mais enganoso que esta linha produz, porque quem olha o QC vê verde e quem olha o render
vê a cena não sair.

> **Antes de mandar consertar cena por falha de gate medida em lote, re-rode o gate SOZINHO.** Custa
> segundos e é de graça. Vale em dobro quando o portão acusa UM gate só e o laudo visual está
> aprovado: a combinação "aprovada + `ok:false` com uma falha" é mais provavelmente a máquina do que
> a arte.

*Parentesco: [SIS-449] e a família dos três relógios ([REND-125]/[REND-126]) — a medição que descreve
o ambiente e é lida como se descrevesse o objeto.*

---

### SIS-456 · O gate de procedência lê a NEGAÇÃO como confissão: a declaração de conformidade barrava a própria cena (11/set/2026)

> 🔀 **Renumerada na integração de 11/set/2026.** Nasceu como `SIS-441` no checkout canônico da `estudio-top10` DEPOIS do resgate (escrita às 19:03Z de 11/set, fora do `d5fbe4969`; trazida pelo diff do arquivo vivo). O número antigo já pertencia a outra lei no `main` — pela [SIS-62], quem já está no remoto fica com ele —, e a 452 está reservada pelo PR #77. Citação a `SIS-441` que descreva ESTE assunto aponta para cá. Nenhuma linha foi perdida.

`scripts/qc-procedencia.mjs:549` testa o regex das fontes proibidas contra o texto concatenado de
`fonte` + `url` + `licenca`:

```js
const PROIBIDAS = /pexels|pixabay|coverr|unsplash|videvo|mixkit|freepik/i;
const fonteTxt = [dec.entrada.fonte, dec.entrada.url, dec.entrada.licenca].filter(Boolean).join(" ");
if (PROIBIDAS.test(a.rel) || PROIBIDAS.test(fonteTxt)) { …proibido… }
```

O campo `fonte` das quatro fotos da `t-s103` terminava assim, de boa-fé:

> *"⛔ **Nenhuma peça veio de Pexels, Pixabay ou Coverr**"*

O regex casa a palavra dentro de uma **negação**. Quem escreveu a frase estava PROVANDO conformidade;
o gate a leu como admissão e marcou as quatro como `motivo: "fonte declarada"`. As fotos são
FEMA/NARA (domínio público federal dos EUA) e Wikimedia Commons (CC BY-SA 2.0).

**O efeito é invisível porque não sai em lugar nenhum que alguém olhe.** A cena seguia com gates
duros verdes, portão `ok:true` e laudo APROVADO — o placar a listava como *"aprovada · portão ok ·
esperando render"* — e era **silenciosamente retirada de TODO handoff**, cheio e parcial, a cada
ciclo. Nenhum log do projeto a nomeava: o handoff só imprime o TOTAL (`142 cena(s) aprovada(s)`), e
142 contra 144 não denuncia quem faltou.

> **Campo de dado não é lugar de ensaio de conformidade.** Declaração do tipo "esta pasta NÃO usou
> fonte X" mora em campo `_`-prefixado, fora dos três que o gate varre. A fonte POSITIVA fica em
> `fonte`, e só ela.
>
> **E a régua para quem mexe no gate: `PROIBIDAS.test(fonteTxt)` não distingue USO de MENÇÃO.** É a
> mesma família de [[propagar-grafia-nao-distingue-uso-de-mencao]]. Enquanto o teste for
> "a palavra aparece?", toda prosa honesta sobre o que NÃO se usou vira reprovação.
>
> **E o defeito de relatório que o escondeu:** handoff parcial que imprime só a contagem
> (`N cena(s) aprovada(s)`) esconde QUEM ficou de fora. Quem some do total não aparece como ausente
> — a mesma assinatura de `consertar-cenas --listar` na onda 3.

✅ **AS DUAS PONTAS ESTÃO FECHADAS NO CÓDIGO — 12/set/2026.** Não procure mais por elas; a caça ao
buraco já tapado custa tanto quanto a doutrina que esconde um aberto.

- **O gate separa USO de MENÇÃO** (`scripts/qc-procedencia.mjs`, `evidenciaDeUsoProibido`). A
  proibição NÃO afrouxou: mudou de onde é lida. Identificador — nome do arquivo, URL escrita em
  qualquer campo, campo `url` sem esquema — reprova sempre e VENCE a prosa em volta. Só o que sobra
  (`fonte`/`licenca` já sem as URLs) passa pela régua de negação, e ela é estreita de propósito:
  dispensa **só a oração INTEIRA de não uso** seguida da sua lista de marcas (`nenhuma peça veio de
  Pexels, Pixabay ou Coverr`). Dúvida, licença negada, uso parcial e prosa fora desse molde
  continuam acusáveis — e *"não usei Pexels e baixei do Pixabay"* continua reprovando pelo Pixabay,
  porque a oração não acaba na lista. A dispensa também não é prova de origem: depois da remoção, a
  declaração ainda tem de deixar fonte ou URL positiva.
  ⚠️ *Duas implementações disputaram esta cláusula — a do `main` (molde fixo de oração) e a da PR
  #125 (janela de 200 caracteres + trava de RETOMADA). Ficou a do `main`, e por falta de prova que
  as separe: os 10 casos de `qc-procedencia-nega-uso.test.mjs` são os MESMOS nos dois lados e passam
  nos dois. Quando duas réguas empatam no teste, vence a que já está integrada — e o registo de que
  houve empate fica aqui, para quem tiver o caso que as distingue saber onde mexer.* `classificarFonte` CHAMA a mesma função em vez de reescrever o teste —
  duas cópias da mesma régua divergem, e aí o defeito passa por uma pelo furo que a outra não tem.
- **Quem sai do lote sai com nome.** `planejarInsumoRenderParcial` devolve `excluidas` (cena, classe
  do achado e arquivo que a causou) e `frota-render.mjs` imprime `↳ fora por procedência: <cena>
  (<arquivo>)` embaixo da contagem.
- **Prova nos dois sentidos:** `scripts/testes/qc-procedencia-nega-uso.test.mjs` (10 casos — a
  negação não reprova; URL, identificador e nome de arquivo reais continuam reprovando) e o
  adiantamento em `insumo-render-parcial.test.mjs`, que exige a irmã removida NOMEADA.

---

### SIS-457 · Metadado de vídeo que mente derruba o lote inteiro — confira `nb_read_frames`, não `nb_frames` (11/set/2026)

> 🔀 **Renumerada na integração de 11/set/2026.** Nasceu como `SIS-442` no checkout canônico da `estudio-top10` DEPOIS do resgate (escrita às 19:03Z de 11/set, fora do `d5fbe4969`; trazida pelo diff do arquivo vivo). O número antigo já pertencia a outra lei no `main` — pela [SIS-62], quem já está no remoto fica com ele —, e a 452 está reservada pelo PR #77. Citação a `SIS-442` que descreva ESTE assunto aponta para cá. Nenhuma linha foi perdida.

Dois `.mov` de acervo reprovaram a normalização all-intra e **abortaram o render de SETE cenas**
(`rc=1`, zero clipes). Os dois falhavam por motivos diferentes e nenhum era da cena que levou a
culpa:

**1 · PCM não entra em MP4.** `scripts/normalizar-footage.mjs:335` fecha com `-c:a copy`, e `.mov`
de acervo costuma trazer `pcm_s16le`. Reproduzido em 1 segundo de vídeo:

```
[mp4] Could not find tag for codec pcm_s16le in stream #1, codec not currently supported in container
Error initializing output stream 0:0 --
```

Conserto: `-an` (footage é mudo por construção) ou `-c:a aac`. **Isto morde qualquer projeto.**

**2 · O contêiner AFIRMA 297 frames e DECODIFICA 257.**

```
ffprobe -show_entries stream=nb_frames        → 297     ← o que o contêiner afirma
ffprobe -count_frames -show_entries nb_read_frames → 257  ← o que decodifica
                                               [h264] Invalid NAL unit size (…)
```

O arquivo está truncado na origem. A conferência de frames do normalizador acusa "perdeu frame" e
culpa a CONVERSÃO, quando o que falta nunca existiu no arquivo.

⚠️ **E o detalhe que decide o conserto: a CENA já sabia.** O cabeçalho da `t-s063` documentava o
truncamento e contornava pelo ALCANCE (seek clampado em 8,20 s; a zona podre começa em 8,5419 s).
Contorno correto — e invisível para o normalizador, que converte o arquivo inteiro e não lê
cabeçalho de cena.

> **Truncar o arquivo onde ele de fato acaba** (`-frames:v <decodificáveis> -c:v copy`) faz o
> metadado dizer a verdade sem perder um frame que alguém alcance. Nada de re-encodar: os dois
> consertos são stream copy, segundos.
>
> **E a régua geral: `nb_frames` é declaração, `nb_read_frames` é medição.** Diagnóstico de mídia
> feito sobre o primeiro produz veredito plausível e errado — foi assim que um arquivo podre passou
> por três ondas parecendo problema de conversão.

*Parentesco: mesma família de [SIS-448] (medir no lugar declarado em vez do medido) e da assinatura
que atravessa este projeto inteiro — a ferramenta respondendo com confiança à pergunta errada. E o
alcance da recusa repete o defeito da [SIS-454] e do portão: **UM arquivo reprovado levou junto o
trabalho pronto de seis cenas vizinhas.***

**Implementado e testado no candidato local de 13/set/2026; promoção e ativação pendentes.**
Os consumidores selecionados da PR #126 acrescentam três proteções:

1. `scripts/normalizar-footage.mjs` produz footage sem áudio (`-an`). A varredura preserva
   arquivos cujo nome começa por `_`, incluindo o master; pastas como `_cacaB/` continuam sendo
   percorridas. O teste confere a ausência da faixa de áudio e a preservação dos bytes do master.
2. `scripts/lib/frames-conform.mjs` compara primeiro os números disponíveis e, se divergirem,
   mede os frames decodificáveis dos dois lados antes do veredito. O chamador também usa
   `-count_frames` quando `nb_frames` está ausente: a medição não se limita à divergência entre
   declarações. Se a declaração acusa perda e a origem não pode ser medida, o gate reprova.
3. A prova causal relida usou **PCM24 sintético e FFmpeg 4.4.2 compilado no Mac**: o código anterior
   retornou 1 e o head da PR retornou 0. Os seis testes do normalizador passaram também com o
   FFmpeg 8 local, verificando áudio, master, origem truncada e perda real. Essas fixtures não
   substituem validação de mídia real nem comprovam a versão ou ativação de cada VM.

Gate local: `node --test scripts/testes/normalizar-footage.test.mjs`. A distribuição exige
`scripts/lib/frames-conform.mjs` no pacote `PECAS_RENDER`; o provador de fechamento de imports deve
conferir o conjunto composto antes da publicação para os workers.

### SIS-458 · Nome usado e nunca declarado, dentro de try/catch, vira o "não" legítimo — só o parser pega (11/set/2026)

Em JavaScript, um nome que não existe só dá erro **quando a linha roda**. Dentro de
`try { …; return true } catch { return false }`, nem isso: o `ReferenceError` vira o valor de "não
deu", indistinguível do "não" de verdade. Três arquivos de produção carregavam um órfão assim em
11/set/2026, e nenhum teste passava por aquelas linhas:

- `scripts/pesquisar-fotos-cenas.mjs` — o merge `d79cbeba4` derrubou `const MAX_TURNS` e o import de
  `interpretarEnvelope`, mantendo os usos.
- `scripts/baixar-entrega.mjs` — `dentroDoGcp()` chamava `execFileSync` sem importá-lo. A trava de
  egress respondeu "fora do GCP" **sempre**, de 04/set a 11/set: no Mac acertava por acidente; numa VM
  recusava a rota direta, que ali é grátis. A cópia gêmea, no `guarda-egress`, estava certa — a
  função tinha sido copiada sem o import.
- `scripts/publicar/packaging-provedor.mjs` — o recibo da thumbnail citava `references`, renomeado
  para `referencias` no `c63ef51e2` (05/set). A ordem é a pior possível: a imagem é PAGA, master e
  derivada são gravados com `flag:'wx'`, e só então o recibo explode — thumbnail paga sem recibo, job
  `incerto`, e cada retomada pagaria de novo. Não chegou a morder: medido em 11/set, o worker legado
  roda de minuto em minuto na `estudio-top10` e nunca passou da prova de entrega (zero `packaging/` em
  `/dados/out`, no bucket e no Mac).

**A regra:** a pergunta "este nome foi declarado em algum lugar do arquivo?" não depende de executar
nada — é de parser, e roda em segundos. O gate é **`node scripts/qc-orfaos.mjs`** (acorn, devDependency),
pendurado no `top10 doctor` §2be como **ERRO** e na suíte (`scripts/testes/qc-orfaos.test.mjs`, que
exige o repositório inteiro limpo). Tabela de declarações sem escopo: só deixa passar a mais, nunca
acusa a mais. Calibrado em 11/set: 1202 arquivos, zero falsos positivos; no arquivo quebrado do
merge acha exatamente os dois órfãos, e zero no primeiro pai.

⚠️ **Código de página não é Node.** O corpo entregue a `page.evaluate` e parentes não se julga (roda no
navegador, com os globais da cena); arquivo de dois reinos declara `@ambiente: navegador` no cabeçalho
e ganha só os globais de página; biblioteca carregada por `<script>` se declara com `/* global x */`.

⚠️ **Função copiada leva o import junto — ou melhor, não se copia.** A detecção de GCP passou a ter um
dono só (`scripts/lib/dentro-do-gcp.mjs`), que também exige o id NUMÉRICO da instância: `curl` saindo
0 não prova nada num DNS que responde nome inexistente com HTML. Consertar só a gêmea quebrada
deixaria as duas divergindo de novo ([SIS-443]).

## SIS-468 · O que trava o `merge --ff-only` é o CONTEÚDO divergir do alvo, não o transporte

**Medido em 14/set/2026**, num repositório de laboratório, nos quatro casos — porque a dúvida estava
travando um conserto havia quatro dias e teorizar sobre ela custava o deploy da casa inteira:

| como o arquivo chega ao checkout | `git status` | `git merge --ff-only` |
|---|---|---|
| `git checkout <ref> -- arq` (novo, == ao alvo) | `A` | **exit 0 · fast-forward** |
| `git checkout <ref> -- arq` (rastreado, == ao alvo) | `M` | **exit 0 · fast-forward** |
| `scp` / criado à mão (não rastreado) | `??` | ⛔ `untracked working tree files would be overwritten` |
| rastreado, editado à mão (≠ do alvo) | ` M` | ⛔ `Your local changes would be overwritten` |

O veto ao `scp` que circulava nesta casa desde 10/set — e que está escrito no `CLAUDE.md` como
**"⛔ Jamais `scp` do arquivo: trava o `git merge --ff-only` do `deploy-vm.sh:73`"** — é verdadeiro,
mas descreve o sintoma. A regra real é sobre o **índice e o
conteúdo**: o git aborta o fast-forward quando encontraria no disco algo que ele não pode reconciliar
com o alvo. Se o que está no disco **é byte a byte o que o merge traria**, não há nada a reconciliar,
e o merge segue.

**Por que a distinção vale uma lei, e não uma nota de rodapé:** lida como "não transporte arquivos",
ela paralisa. Um conserto urgente que precisa chegar a uma máquina cujo checkout está centenas de
commits atrás fica esperando um `deploy` completo — que para o despachante, mexe em timers e é
mudança de produção grande. Foi exatamente o que aconteceu: o alarme de vigília cega ficou **três
dias** fora do ar porque o marco anterior concluiu, do veto ao `scp`, que não havia caminho.

**A forma segura, e ela se PROVA, não se presume:**

```bash
git -C <checkout> fetch -q origin main
git -C <checkout> checkout origin/main -- <caminho>
# e a prova, item a item — nunca "parece igual":
a=$(git hash-object <caminho>); b=$(git rev-parse origin/main:<caminho>)
[ "$a" = "$b" ] || { echo "DIVERGE — não prossiga"; exit 1; }
```

⚠️ **Isto não autoriza remendar máquina em vez de implantá-la.** O arquivo trazido assim é uma
antecipação do que o deploy traria — idêntico, e por isso inofensivo. Trazer conteúdo que **não está
no alvo** é a linha que não se cruza: aí o disco diverge do git, e o próximo `ff-only` morre.

⚠️ **E vale nos dois lados.** O mesmo checkout desatualizado existe no Mac: o `launchd` executa do
`WorkingDirectory` do `.plist`, que em 14/set estava **678 commits atrás** do `origin/main`. Commit
em `main` não é código rodando — *push não é entrega*, e a pergunta é sempre "qual arquivo o processo
lê?".

⛔ **UM PASSO QUE NÃO É DE GIT, e que corrompe em silêncio:** **script de shell em execução não se
troca por baixo.** O bash lê o arquivo por **offset de byte** enquanto executa; inserir linhas no meio
desloca tudo o que vem depois, e o laço passa a executar lixo — sem erro, sem log, sem parar. A ordem
é **parar o processo → confirmar que o PID morreu → trocar o arquivo → religar**, e a confirmação é o
`ps`, não o exit code do `stop` (um `bootout`/`stop` retorna antes de o processo morrer).

**Como se prova que chegou:** rodando o serviço e lendo o que ele PRODUZ — o gate oficial, o arquivo
de estado que só a versão nova escreve —, nunca `ls -l` no arquivo. [[ponte-de-codigo-falha-como-sucesso]]

### SIS-471 · "Zero elegíveis" parecia falta de volume e era CAMPO AUSENTE na fonte — o ETA de vídeo estava a uma linha de distância (14/set/2026)

`estimarGrafo` devolvia `unknown` para **qualquer** ETA de vídeo, e o diagnóstico corrente era
cobertura: *"`estacao.despacho.*` tem 10 tarefas e ZERO elegíveis"*. A leitura natural desse número é
"ainda não houve trabalho suficiente" — e ela manda esperar. Estava errada, e esperar não resolveria
nunca.

Medido na `estudio-top10`: as 10 estações somam **40 conclusões** (direcao-arte 12, pesquisa 7,
arte 6, espelho 5, trilha 5, qc 1, regencia 2, textos 2) e **zero** `util_validado`. O estimador lê
`util_validado`, não `conclusao` — e **nenhuma** das 2.393 linhas `tipo:"despacho"` do livro-caixa
traz `util_validado` ou `validacao_ref`. As chaves gravadas são `bytes_log, conta, cota, credIdx, em,
estacao, fase, maquina, ms, recurso, slug, tipo, veredito`. *Com mil despachos o número continuaria
zero: não faltava volume, faltava campo.*

**E o dado existe, calculado no mesmo escopo, 23 linhas adiante.** O `registrarConsumo` do
fechamento está em `despachante.mjs:1436`; em `:1462`, para fechar a previsão, o mesmo bloco computa
`ok && artefato===true && classificacao.exit_known===true && classificacao.session_success===true`.
O booleano que o catálogo precisa é produzido e descartado.

⚠️ **E o atalho tentador é o que estraga tudo: `veredito:"concluida"` NÃO é validação.** Ele é `ok`
sozinho; a validação é `ok && artefato && exit_known && session_success`. `ok` já vira `true` quando
há marcador e o artefato é INDETERMINADO (`despachante.mjs:1350-1351`). Derivar `util_validado` do
veredito encheria a cobertura de despachos cujo artefato nunca foi provado — inflar amostra para
fazer o ETA aparecer é o oposto exato do que o catálogo serve. *Quando a cobertura está travada, a
tentação é afrouxar o critério; o critério é a única coisa que dá valor ao número.*

**O conserto do lado do leitor é declarar, não adivinhar.** Tarefa com conclusões e nenhuma
`validacao_ref` passou a carregar `validacao: {conclusoes, com_referencia, nota}`, e a frase do
`top10 tempos` diz `⚠ NÃO ESTIMA: N conclusões e nenhuma validada`. A entrada também entrou em
`NAO_COBRE` com a causa medida. **Zero que não explica a própria causa é um zero que ninguém
investiga** — este ficou meses assim, lido como pouca amostra.

### SIS-474 · «NÃO ACHEI NADA» TEM TRÊS SENTIDOS, E COLAPSÁ-LOS CERTIFICA O NÃO-CHECADO (14/set/2026)

*(🔀 Esta lei renumerou TRÊS VEZES no mesmo dia — nasceu SIS-465, virou 469, virou 473, e é
SIS-474 desde a integração. Nas três, outra frente já tinha o número no `main` quando o merge
chegou: a 465 foi para «levar o script não é instalar o timer», a 469 para «marcador de espera não
se fecha como pergunta» e a 473 para «`--conc=todas` na arte queima inferência em série». Na
colisão vale o INTEGRADO — quem está visível para todos fica com o número. **Citação a «SIS-465»,
«SIS-469» ou «SIS-473» que fale de ESTADOS DE VERIFICAÇÃO quer dizer esta lei.** E a lição do
número já é lei: o ID não se escolhe ao escrever, decide-se na INTEGRAÇÃO, que é o único instante
em que se sabe o que o `main` tem — três conferências feitas ANTES miraram um alvo em movimento, e
é isso que `scripts/leis-merge-driver.mjs` existe para mecanizar.)*

**Todo verificador desta casa tem de distinguir, com código de saída diferente:**

| | o que aconteceu | e o que se pode afirmar |
|---|---|---|
| **CHECADO E LIMPO** | olhei o objeto inteiro e não há defeito | «está bom» — e só aqui isso pode ser dito |
| **NADA A CHECAR** | olhei e não havia o que checar (declarado, nunca silencioso) | «não se aplica» |
| **NÃO FOI CHECADO** | não houve laudo, insumo, canal ou cobertura | **nada.** Ausência de conferência não é ausência de defeito |

Um quarto caso, que é o mais traiçoeiro: **CHECADO PARCIALMENTE** — o objeto foi olhado, mas só um
pedaço. Se sair como «limpo», mente com a autoridade de quem mediu.

**Cinco ocorrências medidas em DOZE HORAS, todas independentes:**

1. **`erratas-gravadas.mjs`** responde *"sem erratas"* com **exit 0** quando `qc-roteiro/entrada.json`
   não existe. Compilado de acervo nunca tem esse insumo — então todo compilado é declarado limpo
   sem que uma linha tenha sido lida.
2. **O coletor de retenção** saía com *"coleta parcial"* e o systemd registrava `Result=success`.
3. **A fila desse mesmo coletor** estava invertida (acervo velho na frente dos vídeos novos), e
   **setembro tinha 7,5% de cobertura**. ⚠️ Este caso **nunca chegou a falhar** — nenhum exit code
   pegaria, porque a unidade estava certa. *Cobertura e execução são perguntas diferentes.*
4. **`lote-render.sh`** imprimia *"0 arquivos · ✓ nenhuma cena barrada"*: zero de zero é 100%, e três
   lotes «renderizaram» assim.
5. **O `verificador-de-fatos`** julgava *"as 10–12 afirmações mais arriscadas"* de textos com 49 a 63
   afirmações checáveis — e dava PASS. **Amostra escolhida pelo próprio verificador não tem
   denominador, e sem denominador não há cobertura: há impressão de cobertura.**

**A LEI, em três regras:**

1. **Código de saída distinto para cada estado.** Um verificador com uma só saída de sucesso é um
   verificador que não sabe dizer se trabalhou. Quem consome precisa poder tratar «não checado»
   diferente de «limpo» — e quase sempre tratar como reprovação.
2. **Quem afirma cobertura declara o DENOMINADOR.** «Checado» sem dizer *quantos de quantos* é
   opinião. O denominador se deriva por script, nunca se escolhe: o alvo que escolhe o que vai ser
   medido mede o que lhe convém, sem má-fé nenhuma.
3. **Gate de execução não substitui gate de cobertura.** O caso 3 prova: a unidade rodou, saiu zero,
   e o trabalho não foi feito. Pergunte as duas coisas — *rodou?* e *cobriu?*

⚠️ **E a armadilha do conserto**, medida ao escrever o próprio detector desta lei: um extrator por
regex pega o que tem FORMA (número, data, aspas) e é cego ao que tem SENTIDO. Na classe
«atribuição», o meu cobria **22%** — o mesmo número que ele veio matar. *Automatizar a cobertura sem
medir a cobertura do automatizador é trocar uma cota por outra, com cara de rigor.* O denominador
honesto é a união do mecânico com uma passada de listagem que não escolhe e não julga.

*Nasceu da diretiva do Mateus em 14/set — «tem que haver confirmação/checagem factual de forma bem
rígida ANTES de ser gravado» — depois de 21 erratas conferidas em fonte primária num vídeo já
gravado. Voz gravada não se conserta: só se crava na tela.*

---

### SIS-475 · O gate estava certo; havia OUTRA PORTA — e a razão de deixá-la aberta citava uma ordem sobre outro assunto (14/set/2026)

`enviar-drive.mjs` barra desde 31/jul: sem `bancada.veredito` PASS, e com o SHA do texto julgado
conferido, **o Doc não nasce**. O gate está construído e é bom. E ainda assim **~30 Docs foram ao Drive
entre 03 e 07/ago sem que o `verificador-de-fatos` rodasse uma única vez** (Ucrânia, Ceuta,
supervulcão) — quem pegou os três erros factuais foi o Mateus, lendo.

**A causa não era ausência de gate: era uma SEGUNDA PORTA.** O `regerar-doc.mjs` também publica o Doc
no Drive, e nele a bancada era `console.warn` — inclusive no caso `fatos=AUSENTE`, que ele nomeava em
voz alta como *"ninguém conferiu a VERDADE do texto"*, e publicava assim mesmo.

⭐ ***Gate que existe e tem desvio não é gate — é sugestão.*** A frase estava escrita no próprio
arquivo desde 07/ago, junto com a medição das 30 vezes. **Descrever o furo não o fecha.**

**A régua que se generaliza:** ao auditar uma obrigação, não pergunte *"existe gate?"* — pergunte
**"quantos caminhos chegam ao efeito, e quantos deles passam pelo gate?"**. Aqui: dois caminhos, um
gate. É a mesma família da cópia paralela da regra ([ARTE-190], [SIS-443]), só que na camada do FLUXO
em vez da do código.

## O segundo achado, e ele é o mais caro: a justificativa envelhecida

A razão registrada para não travar era *«travar aqui recriaria o gate que ele mandou tirar»*, citando
as ordens de 29/jul e 02/ago. **Mas aquelas ordens eram sobre revisão humana de APROVAÇÃO DE CENA** —
*"eu tirei essa revisão humana e passei pra um robô… isso não deve ser um gate que trave o fluxo
inteiro da produção"*. **Objeto diferente.**

⭐ ***O que ele tirou foi GENTE APROVANDO GOSTO; o que mandou pôr é MÁQUINA CONFERINDO FATO.*** Um
trava por julgamento estético e para a linha; o outro trava por verdade verificável e impede um erro
que **não tem conserto depois de gravado**. Confundir os dois manteve a porta aberta por seis semanas.

**A régua:** uma ordem do dono revoga o que ela REVOGA, não o que se parece com ela. Ao citar uma
decisão antiga para não fazer algo, confira **o objeto** dela — não o formato. *«Ele mandou tirar um
gate» não é «ele proibiu gates».*

## A trava, e por que ela é cirúrgica

Ordem do Mateus (14/set): *«Tem que haver confirmação/checagem factual das informações, de forma bem
rígida ANTES de ser gravado, pra evitar repetir esse problema no futuro.»*

> `regerar-doc` TRAVA quando `posEstado(estado) >= posEstado("aguardando_gravacao")`, **e só na lente
> `fatos`**. Antes disso, continua avisando.

**A distinção que importa não é «revisou?» — é PARA QUEM O TEXTO VAI.** Antes de `aguardando_gravacao`
o Doc é rascunho e ninguém o lê para gravar; depois, `regerar-doc` está **trocando por baixo o texto
que o apresentador tem na mão**, e é aí que o erro entra na voz. Travar as quatro lentes faria cada
volta de conserto pagar uma bancada inteira e mataria o laço — o que 07/ago acertou ao não travar.
**Uma lente, um estado: a iteração segue livre onde é barata.**

Gramática do veredito em `veredito-bancada.mjs` (era SEIS regex em seis arquivos). Provado por
mutação, **7 mutantes e 7 quebras** — e os dois lados da fronteira, porque um gate que só reprova não
prova que DISTINGUE. ⚠️ O mutante que moveu a fronteira **sobreviveu na primeira rodada**: o teste
derivava o estado esperado da própria constante — *denominador tautológico*. A lista está cravada.

## ⛔ O que esta lei NÃO cobre, e precisa ficar dito

**O compilado não passa por nenhuma das duas portas.** A narração dele é reaproveitada de vídeos **já
publicados** — não há gravação nova. As 21 erratas que motivaram a ordem do Mateus **não teriam sido
evitadas por este gate**: já estavam no ar. A checagem do acervo é etapa da SPEC do motor de compilado,
e para o que já está montado vale a outra ordem dele: *crava na tela, não corta a narração*.

*Conserto correto aplicado à porta errada produz a sensação de resolvido — e é invisível, porque o
gate novo funciona e passa nos testes.*

## SIS-476 · Laudo verdadeiro sobre o escopo errado é o falso negativo mais caro: ninguém desconfia dele

**Medido na `estudio-render-2` em 14/set/2026.** A faxina de disco rodou, terminou com `success` e
escreveu, três passadas seguidas:

```
══ FAXINA DE DISCO · estudio-render-2 ══  APLICANDO
  disco: 19 GB livres
  projetos em out/: 8
  liberado: 0.0 GB · disco agora 19 GB livres
```

**Cada palavra verdadeira.** `out/` inteiro somava 3,6 GB e de fato não havia um byte a devolver. E o
disco estava a **94%**, com um render 4K vivo na máquina: dos 272 GB ocupados, **239 GB moravam FORA
de `out/`** — `~/compilados` 177 GB (parado desde 09/set), `~/attempts` 40 GB (desde 29/ago),
`~/av` 22 GB. A faxina mediu **1,3% do disco** e o laudo dela foi lido como «está tudo bem».

**Esta é a reclamação do dono, explicada.** Ele descreveu VMs de dias com disco cheio e nenhuma
automação devolvendo espaço. A automação existia, estava instalada, ativa e correta — e era muda
sobre 88% do problema. *Um verificador quebrado alguém conserta; um verificador honesto de escopo
estreito ninguém audita, porque ele nunca erra uma afirmação.*

**A LEI:**

1. **Quem mede um recurso COMPARTILHADO tem de medir o recurso, não a sua fatia dele.** A pergunta
   que o disco faz é «quanto falta», e ela não tem dono: responder só pela própria pasta é responder
   outra pergunta com a mesma cara.
2. **Todo laudo declara o DENOMINADOR.** «Liberei 0 GB» sem «de 3,6 GB que eu enxergo, num disco de
   272 GB» é um número sem escala. É a mesma doença da [SIS-474] — cobertura sem denominador é
   impressão de cobertura —, aqui na medição de recurso em vez de na verificação.
3. **Ver não é poder apagar, e é por isso que ver é seguro.** O conserto NÃO deu à faxina permissão
   sobre o que está fora de `out/`: aquilo é de outras frentes, e a casa não remove o que não criou.
   Ele deu a obrigação de NOMEAR — tamanho, idade, caminho — para que a decisão tenha a quem ser
   endereçada. *Silêncio não protege o trabalho alheio; ele só adia a descoberta de que o disco
   acabou.*

⚠️ **E a armadilha do próprio conserto, paga na hora de prová-lo.** O gatilho do censo nasceu em
**OU** — «pouco espaço livre OU muita porcentagem de uso». Rodado no Mac (90% de uso, 46 GB livres),
ele entrou no censo e começou um `du` a partir do ponto de montagem: varredura do disco inteiro, mais
de dois minutos, pendurando a própria suíte de testes. 90% não é aperto num disco grande. *Gatilho em
OU dispara pela condição mais frouxa* — e o que caracteriza a máquina em risco é a **conjunção**:
cheia em porcentagem **E** sem espaço absoluto.

*Gate: `scripts/testes/faxina-ve-o-disco-inteiro.test.mjs`. Ele prova a regra de PARADA da descida
por mutação — sem a condição «o segundo colocado também é grande», o censo desce para dentro do maior
diretório e esconde os vizinhos, que na render-2 eram 87 dos 239 GB.*

---

### SIS-477 · O aviso estava escrito em quatro palcos e não impediu a quinta vez — regra sem gate é regra que se obedece quando alguém lembra (14/set/2026)

Um palco de teste — o mini-repo que um teste monta em `/tmp` para rodar o código **real** contra
dublês nas bordas — é um **pacote fechado**: a lista de peças tem de conter o fechamento transitivo
dos imports da porta de entrada. Peça a menos não dá erro de lógica: dá `ERR_MODULE_NOT_FOUND`
**longe de quem mexeu no import**, e num teste que não fala do assunto.

Isto já estava escrito, em português claro, dentro de dois desses arquivos, cada aviso redigido logo
depois de o defeito ter acontecido — um deles diz literalmente *«peça a menos vira
ERR_MODULE_NOT_FOUND, e o erro aparece longe de quem mexeu no import»*. Em 14/set/2026 aconteceu de
novo, em **cinco palcos ao mesmo tempo**:

| import novo | palco que não acompanhou |
|---|---|
| `qc-worker-loop.mjs` → `urgencia.mjs` → `fila-patch.mjs` | `consertar-cenas-focal`, `julgar-cenas-paralelo`, `qc-visual-contextos-driver` |
| `consertar-cenas.mjs` → `qc-frames-remotos.mjs` → `qc-fila-store.mjs` … | `cenas-paralelas-drivers` |
| `qc-visual-pronto.mjs` → `render/palco.mjs` | `ciclo-render-recibo`, `cenas-paralelas-drivers` |

**86 casos vermelhos no `main`** — 63% de todo o vermelho da suíte —, e o preço não foi o vermelho:
foi que **todo PR herdava a dívida alheia** e nenhum podia ser julgado por CI verde. A fila inteira
ficou sem critério de merge.

⚠️ **E isto só apareceu agora porque a CI voltou a EXECUTAR.** Durante o corte por faturamento os
checks terminavam em 3 segundos e nada rodava; a suíte foi acumulando estes 86 sem ninguém ver.
*Verde por ausência e vermelho por ausência são o mesmo defeito: o sinal não foi medido.*

**O conserto não é escrever o aviso pela quinta vez.** É
`scripts/testes/lib/palco-fechado.mjs` — `provarPalcoFechado(palco, entrada, { substituidos })`,
chamado no fim da montagem de cada palco. Ele percorre o grafo de imports **estáticos** a partir da
porta e exige que todo destino relativo exista, com mensagem que nomeia **quem importa o quê** — a
informação que o `ERR_MODULE_NOT_FOUND` dá tarde e longe. Não é código novo: é o gate que já existia
dentro de **um** dos cinco arquivos, extraído para onde os outros quatro pudessem usá-lo. *Capacidade
que resolve o problema de todos e mora dentro de um só é indistinguível de capacidade ausente.*

Três calibrações, e cada uma nasceu de ele próprio dar falso positivo — alarme falso em gate ensina
a ignorar o gate, e aí ele para de proteger justamente quando acerta:

1. **Parte da ENTRADA, não do diretório.** Módulo copiado por conveniência e nunca importado não
   quebra nada; varrer a pasta acusa-o.
2. **Só import ESTÁTICO.** `await import()` dentro de um `try` é caminho de execução que o palco tem
   o direito de não exercer.
3. **Respeita a substituição por LOADER.** Um palco pode trocar o módulo em tempo de carga (hook
   `resolve`/`load`) em vez de gravar um dublê no disco: o arquivo real está lá e o que se carrega é
   outro. Seguir dentro dele reprova um palco que funciona — foi o primeiro veredito deste gate
   sobre `consertar-cenas-focal`, e estava errado. Quem troca **declara** os sufixos.

A prova é `node --test scripts/testes/palco-fechado.test.mjs` (5 casos), e ela existe porque **o
detector foi validado no caso positivo**: um teste monta um palco a que falta uma peça e exige que o
gate ACUSE, nomeando o importador. Gate que nunca viu o defeito é indistinguível de gate que não
funciona.

*Parentesco: [SIS-439] (o contador que não conta) e a família inteira dos mortos-silenciosos. A
diferença é a direção — aqui o silêncio não escondeu falha, escondeu **dívida**, e ela só ficou
visível quando a máquina que mede voltou a ser paga.*

⚠️ **E existe uma QUINTA encarnação, que este gate não alcança — o palco de CONTEXTO.**
`despachante-compilado-terminal.test.mjs` não monta um diretório: extrai TRECHOS do
`despachante.mjs` por índice de string e roda-os num `vm.createContext(env)`, onde cada nome livre
do trecho tem de ser fornecido à mão. Quando `passada()` passou a chamar `fecharPrevisaoDespacho`
(integração de `urgencia-previsao.mjs`, o mesmo commit que quebrou os outros cinco), os quatro casos
morreram com **`fecharPrevisaoDespacho is not defined`** — e `provarPalcoFechado` não os salvaria,
porque ele prova **arquivos no disco** e ali não há arquivo nenhum.

A régua que generaliza as duas formas, e é ela que vale guardar: **um palco é um pacote fechado, seja
o fechamento de ARQUIVOS (imports resolvidos no disco) ou de NOMES (identificadores livres resolvidos
no contexto).** A porta por onde a dívida entra é a mesma — uma dependência nova rio acima — e a
única diferença é o erro que ela produz: `ERR_MODULE_NOT_FOUND` num caso, `ReferenceError` no outro.
O de nomes é o mais traiçoeiro: o [SIS-458] já tinha registado que, dentro de `try/catch`, um
`ReferenceError` vira o "não" legítimo e ninguém vê.

### SIS-478 · O verde da CI certifica o ambiente da CI — e a produção corre noutro (14/set/2026)

`scripts/lib/qc-master-midia.mjs` escreve os frames do master com `ffprobe … -o <arquivo>`. O
**ffprobe 4.4.2** do Ubuntu 22.04 — o que corre na `estudio-top10` e nas VMs de render — recusa:

```
Failed to set value '/tmp/…/frames.txt' for option 'o': Option not found     exit=1
```

O runner da CI é `ubuntu-latest`, com ffmpeg 6+, onde a opção existe. **O teste passa lá e a
produção devolve `NOT_VERIFIED`** — 19 casos em cascata, porque `qc-master-percepcao-runtime.mjs`
importa `derivarAudioMasterQc` desse módulo.

⛔ **O vermelho era o sintoma barato.** O caro é o que ele revelou: *o código de produção usa um
recurso que a máquina de produção não suporta, e o teste que devia apanhar isso passa na CI.* O verde
estava a **certificar uma capacidade que a máquina real não possui**.

**É a [SIS-457] ao contrário.** Lá, o defeito não reproduzia no Mac porque o ffmpeg de lá era mais
NOVO; aqui ele só existe onde o ffmpeg é mais VELHO — que é exactamente onde a produção corre. A
mesma assimetria, e as duas vezes **a máquina de desenvolvimento mentiu a favor**.

E não era caso isolado. O passo «Instalar ferramentas de mídia dos testes reais» do `gates.yml` é a
declaração do que a CI monta, e a comparação contra a `estudio-top10` no mesmo dia deu:

| | CI (`ubuntu-latest`) | `estudio-top10` |
|---|---|---|
| `ffprobe` | 6+, aceita `-o` | **4.4.2, recusa** |
| `xmllint` | instalado | ausente às 16:30, **instalado às 16:35:23** depois do laudo |
| `apparmor` | exigido em `enforce`, `userns_restrict=1` | ausente, knob a `0` |

**O gate é `node scripts/qc-ambiente-producao.mjs`**, pendurado no `top10 doctor` §2za — que roda na
VM, porque rodá-lo no Mac responde sobre o Mac. Três decisões de desenho, cada uma contra um modo de
ele apodrecer:

1. **A lista de binários é DERIVADA do `gates.yml`, nunca cravada.** Lista copiada envelhece em
   silêncio no dia em que alguém acrescenta um pacote lá.
2. **CAPACIDADE se sonda; presença não basta.** O `ffmpeg` está instalado dos dois lados — comparar
   «tem/não tem» teria dado verde no caso que originou o gate. *«Tem» e «tem o mesmo» são perguntas
   diferentes.* Cada capacidade em `infra/ambiente-producao.json` traz uma sonda executável, o porquê
   e quem a usa.
3. **Knob de política é ALERTA, não ERRO** (o apparmor). Ligar sandbox em máquina viva é decisão da
   Infra com o dono; o gate existe para a divergência ser VISTA, não para barrar a casa por ela.

⛔ **AUSÊNCIA QUASE NUNCA É OBSERVADA — É PRODUZIDA PELO INSTRUMENTO, e ela tem DOIS graus.** Cinco
formas foram medidas nesta casa no mesmo dia, e a diferença entre os graus é quem repara:

| grau | forma | caso medido |
|---|---|---|
| ausência que **parece ausência** | permissão negada | `cat` num `600 root` + `\|\| echo AUSENTE` → «apparmor ausente» |
| | canal errado | versão lida no stdout; `xmllint`/`socat` respondem em **stderr** |
| | janela de uma linha | `grep 'ffprobe.*-o'` sobre array multilinha → «zero ocorrências» |
| ⛔ ausência que **parece DADO** | erro do comando no campo do valor | `socat --version` → `E unknown option` impresso como versão |
| | **resposta fabricada** | `rg -version` varre o CWD e devolve `PIPELINE.md:# …` no campo «versão» |

***O primeiro grau produz silêncio, e silêncio alguém investiga. O segundo produz um dado plausível,
num campo certo, num laudo em que se acredita — e ninguém repara.*** A `rg` é a pior das cinco porque o
valor **depende do CWD**: o mesmo comando devolve coisas diferentes conforme a pasta, que é a assinatura
mais difícil de reproduzir que existe.

A defesa é dupla e as duas metades moram no código: **`nao_medido` como terceiro veredito** cobre o
primeiro grau por construção; para o segundo, **recusar valor que não case o formato esperado** — uma
versão tem de parecer uma versão (`N.N`, ou o nome do binário com dígitos), senão é `nao_medido`.

⚠️ **E ele foi calibrado contra si mesmo no primeiro dia:** a versão inicial media presença chamando
`-version` e lendo o stdout. `xmllint` e `socat` escrevem a versão em **stderr**, saíam vazios e
foram dados como AUSENTES enquanto a sonda de capacidade deles passava **na mesma execução** — dois
falsos positivos, dentro do gate que existe justamente para separar presença de capacidade. Hoje
presença é `which` e versão é best-effort, com `null` a significar «não consegui ler», nunca «não
existe».

⛔ **O que este gate NÃO alcança, e é dito para ele ser obedecido:** divergência de regime **dentro
do código**. Um `async` cujo corpo é inteiramente síncrono corre em fila indiana e nenhuma sonda de
máquina o revela, porque não é propriedade da máquina — foi o caso do pool de oito do publicador de
ofício, que corria em série. *Gate que promete o que não faz é a versão silenciosa do alarme falso.*

A régua que sai dos dois juntos: **não basta o teste correr no mesmo binário; tem de correr no mesmo
REGIME.** Versão é regime. Presença é regime. Síncrono × assíncrono é regime.

⛔ **E o gate errou DUAS VEZES na primeira execução, nas duas pontas da mesma doença.** Ficam
escritas porque são a calibração dele:

1. **Mediu presença pela VERSÃO.** Chamava `-version` e lia o stdout; `xmllint` e `socat` escrevem em
   **stderr**, saíam vazios e foram dados como AUSENTES — enquanto a sonda de capacidade deles
   passava na mesma execução. Hoje presença é `which`, versão é `spawnSync` lendo os **dois canais**,
   e `--version` vem antes de `-version` porque o `rg` trata `-version` como padrão de busca e, sem
   caminho, varre o diretório: o laudo saía com uma linha de resultado no lugar da versão.
2. ⛔ **Traduziu «não posso ler» para «não existe».** Leu `/sys/module/apparmor/parameters/mode`, que
   é `600 root`, apanhou `Permission denied` num `catch` e reportou **apparmor AUSENTE** — sobre uma
   máquina onde ele está carregado e em `enforce` (`sudo cat` devolve `enforce`; `dpkg` diz
   `ii apparmor 3.0.4`). *Ausência de resposta não é resposta negativa*, e é exactamente a doutrina
   que este gate encarna. Hoje há **três vereditos** — `ok`, `diverge`, `nao_medido` — e o terceiro
   é alerta próprio, porque «não consegui medir» e «medi e diverge» pedem consertos opostos: um
   privilégio, o outro mudança de máquina.

⭐ **A divergência real do apparmor era outra, e ensinou ao gate um requisito que ele não teria
sozinho: KNOB É PAR ORDENADO.** A máquina tem `enforce`, mas
`kernel.apparmor_restrict_unprivileged_userns = 0` (a CI exige `1`) e o perfil
`bwrap-userns-restrict` **ausente** (vem no `apparmor-profiles`, que a CI instala). O `bwrap`
funciona HOJE **porque a restrição está desligada** — é o perfil que lhe devolve a permissão que o
sysctl lhe tira, e o `gates.yml` faz as duas coisas na mesma respiração.

***Um laudo que dissesse «este sysctl diverge: ligue-o» estaria certo no diagnóstico e o conserto
óbvio derrubaria o sandbox numa máquina com produção viva.*** Por isso um knob pode declarar
`so_depois_de`, e o laudo recusa-se a recomendá-lo sozinho:

```
⚠ userns-restrito: esperado `1`, lido `0`
    ⛔ NÃO ligue isto sozinho: depende de perfil-bwrap-userns, que ainda não está de pé.
    A ordem é: instalar apparmor-profiles → apparmor_parser -r → smoke → sysctl → smoke outra vez.
```

*Uma configuração pode estar «errada» de um jeito que é a única coisa que a mantém de pé.* Presença é
regime, versão é regime — **e a ordem de aplicação também é**.

Prova: `node --test scripts/testes/qc-ambiente-producao.test.mjs` (10 casos — capacidade ausente
ACUSA com o porquê e quem quebra; capacidade presente CALA; knob ilegível é `nao_medido` e **não**
reprova; knob com dependência por satisfazer carrega o aviso de ordem e, satisfeita, não carrega;
a lista de binários sai mesmo do workflow).

### SIS-479 · Teste que mede o LUGAR — do arquivo ou da chamada — reprova o conserto e absolve o defeito (14/set/2026)

Dois testes vermelhos no `main`, causas diferentes, a mesma doença: **mediam onde a coisa está, em vez
do que ela faz.**

**1 · `compilado-composicao` escrevia FORA do repositório.** `mkdtempSync(resolve('../evidence/…'))`
resolve contra o **pai do diretório de trabalho**. Em `~/www/top10-estudio` o pai é `~/www`, onde um
`evidence/` existia **por acaso**, sobra de uma rodada antiga. Em worktree, em clone limpo e na VM não
existe: `ENOENT`, e dois casos ficavam vermelhos por um diretório que ninguém cria. Provado nos dois
sentidos na `estudio-top10`: criando `../evidence` à mão, **8 pass / 0 fail**; removendo, **6 / 2**.
*Teste que depende de um caminho fora da árvore é teste mais a sorte de quem o roda* — e este ainda
deixava lixo lá fora, sem limpeza. Conserto: `join(tmpdir(), …)`.

**2 · `compilado-runner` prendia a chamada ao LUGAR.** Exigia
`lerEVerificarReciboCompilado({ projeto: resolve(D), raiz: RAIZ_REPO, slug }).ok` **dentro do bloco
`case "compilado"`**, casando o texto-fonte. Um refactor legítimo moveu-a para
`saidaCompiladoComprovada()` e renomeou a variável para `projeto`. A verificação continuava a correr —
e **melhor**, porque passou a reler job/estado/plano DEPOIS da prova cara, para não promover uma
fotografia que já mudou. **O teste reprovava um conserto.**

⭐ **E esta é a TERCEIRA ocorrência do mesmo padrão no mesmo dia.** As outras duas são o mesmo teste,
`qc-frames-remotos`, com `garantirOficioDaRelease`: a asserção já fora `/publicado !== RELEASE/`,
envelheceu quando a conferência mudou de casa, foi reescrita para casar o nome novo — e envelheceu
outra vez quando a garantia migrou para a prova por `kind === "qc_worker_release_receipt_v1"`. **Está
escrito no comentário dele que isto lhe aconteceu antes, e aconteceu na mesma.**

**A régua: o teste afirma o que precisa ser VERDADE, nunca onde está escrito.** Para o recibo do
compilado, o que precisa ser verdade são três coisas, e nenhuma delas é um endereço:

```js
assert.match(fonte, /import \{ lerEVerificarReciboCompilado \} from …/);          // existe
assert.match(fonte, /lerEVerificarReciboCompilado\(\{[^}]*raiz: RAIZ_REPO[^}]*\}\)/); // recebe a raiz
assert.doesNotMatch(fonte, /entrega\?\.status === "pass"/);                       // o legado não voltou
```

Onde a chamada mora é decisão de quem refatora. **Um teste que a prenda transforma refactor em
vermelho** — e o custo real não é o vermelho: é que, depois de duas ou três dessas, quem refatora
aprende a editar o teste junto, sem ler o que ele queria provar. *Aí o teste vira cerimônia: continua
verde e já não protege nada.*

⚠️ **Quem escreve asserção sobre texto-fonte deve o controle de mutação**, porque só ele separa «o
teste acompanha a regra» de «o teste acompanha a redação». Feito aqui: trocar `raiz: RAIZ_REPO` por
outro valor no `despachante.mjs` reprova (**16 → 15 pass, 1 fail**) e restaurar volta a **16/0**.

*Parentesco: [SIS-477] (palco é pacote fechado) — ali o teste dependia de arquivos que não estavam no
seu pacote; aqui depende de um diretório fora da árvore e de um endereço dentro do código. As três
formas são a mesma pergunta: **o que este teste precisa que seja verdade, e o que ele está a medir
por acidente?***

⛔ **E há uma terceira forma, encontrada no mesmo dia ao integrar: NENHUM GATE OLHA PARA POSIÇÃO.**
Dois lados apendavam no fim do `SIS.md` — um a **478**, o outro a **479** — e a concatenação do merge
teria posto a 478 **depois** da 479. Todos os gates passariam: `repetidos` vazio, `regras-todas`
exit 0, zero marcadores de conflito. *Passar nos gates não prova que o bloco caiu no lugar certo* — e
no mesmo dia um bloco de referência cruzada foi parar na **linha 3** de um arquivo de 17 mil, pela
mesma cegueira.

⚠️ **A régua NÃO é «ordem crescente do arquivo inteiro».** Medido em 14/set: os seis domínios têm
**58 pares fora de ordem** por história — renumerações, leis arquivadas, blocos movidos. Um gate de
ordem estrita acusaria a casa inteira no primeiro dia, e alarme falso em massa ensina a ignorar o gate
([SIS-55]). O invariante que vale é mais estreito, e é verdade nos **seis** arquivos:

> **quem chega por último é o maior número — a última lei do arquivo é a de maior NN.**

É exactamente esse que o append quebra quando cai no lugar errado, e é o único que mira o defeito sem
punir o passado. O gate vive dentro de `scripts/regras-todas.mjs`, ao lado do de ID repetido, **porque
esse já é chamado antes de todo commit de lei** — gate que ninguém chama é capacidade órfã. Controle
positivo: mover a última lei do `ROT.md` para antes da penúltima reprova (`exit 1`); restaurar volta a
`exit 0`.

### SIS-482 · A SUÍTE QUE EXPLODE NO CARREGAMENTO APARECE COMO UM DEFEITO E ESCONDE TRINTA E SETE (15/set/2026)

`despachante-posse.test.mjs` recorta o despachante por marcadores de texto, e os recortes eram
avaliados **no topo do módulo**. Em 14/set o `5da4ee07` removeu o bloco «⚖️ RESERVA DE VAGA»
([SIS-160]) e a fronteira venceu. O `assert` explodiu antes do primeiro teste, e o runner reportou:

    # tests 1
    # fail 1      ← parece UM defeito. Eram 37 ausências.

Por **um dia inteiro** os 37 testes que protegem posse, claims e leases não mediram nada, com o
`main` carregando esse vermelho no CI. Ninguém leu errado de propósito: o relatório dizia a verdade
sobre o arquivo e mentia sobre a cobertura.

**O mecanismo:** quando o número de falhas deixa de ser o número de problemas, a contagem some junto
com o veredito. É a família dos mortos-silenciosos aplicada ao próprio instrumento — e é pior que um
gate que reprova, porque um gate que reprova ainda diz quantos.

**A regra:** nada que possa falhar roda no topo de um arquivo de teste. Recorte, fixture e caminho
vão para dentro do teste ou atrás de um getter preguiçoso, para que **fronteira morta reprove só
quem depende dela**. Medido depois do conserto: matando a fronteira de propósito, 35 dos 36 seguem
medindo e cai só o teste daquele recorte.

**Como verificar, e vale para qualquer suíte:** `# tests 1 · # fail 1` num arquivo que você sabe ter
muitos testes **não é um defeito** — é o carregamento, e a cobertura real está escondida. E a prova
de que uma suíte está viva é ela **reprovar quando você mata a fronteira**, não ela ficar verde.

*Parentesco: [SIS-21] (dono único), [SIS-443] (conserto portado pela metade). Memória:
`suite-que-explode-no-carregamento-esconde-a-contagem`.*

### SIS-483 · RÉGUA QUE COINCIDE NO CORPUS ANTIGO NÃO ESTÁ PROVADA — ESTÁ SEM CORPUS (15/set/2026)

O `cobrar-xml.mjs` contava o denominador de arte por `modo !== "apresentador"`; o gerador do XML
cobra clipe por `anima`. Duas réguas escritas à mão, e **no Petróleo elas dão o MESMO número** — 147
pelas duas. Foi por isso que a divergência atravessou meses sem ninguém notar.

No primeiro **compilado** que passou pelo painel, elas se separaram: 220 contra 93, e o painel
anunciou «arte 80/220 · ⛔ 140 cenas sem arte» num vídeo a que faltavam **13**. As 122 de diferença
são `anima:false` — trechos em que o vídeo pré-editado já traz a imagem e o estúdio não desenha nada.

**O mecanismo:** a doença estava dormindo no repositório esperando o primeiro material de formato
novo. Concordância entre duas réguas num corpus não prova que elas são a mesma régua; prova que
aquele corpus não as distingue. O formato novo (pré-editado, sem decupagem) foi o primeiro caso em
que `modo` e `anima` deixaram de andar juntos.

⚠️ E o estrago não é o número: é que **alarme falso num painel que o dono lê de manhã ensina a
ignorar o painel**, e aí ele deixa de proteger no dia em que acertar.

**A regra:** ao trocar ou duplicar uma régua, procure o caso em que as duas discordam **antes** de
confiar na que coincide. Se nenhum caso do acervo as separa, diga isso em voz alta — «não há corpus
que distinga» é um resultado, e é diferente de «são equivalentes». E quando a escolha vier da
leitura do código e não do dado (aqui: `anima` ausente contando como «não anima», sem um só caso nos
dois projetos medidos), **declare de onde ela veio**, no código e no PR.

*Parentesco: [SIS-21] (o conserto foi dono único em `src/modos.mjs`, não cópia do filtro),
[SIS-482], `corpus-real-nao-cobre-o-risco-adjacente`.*

### Emenda à SIS-21 · TRÊS REINCIDÊNCIAS NO MESMO DIA, E UMA DELAS JÁ TINHA SIDO CONSERTADA NO GÊMEO (15/set/2026)

A [SIS-21] manda critério compartilhado virar módulo com dono único. Em 15/set/2026 ela foi violada
em três lugares ao mesmo tempo, e o padrão do estrago é sempre o mesmo — **uma das cópias é
consertada e a outra continua decidindo**:

- **A segunda parada da geometria.** `_brief-arte.mjs` procurava o GeoJSON em `_media/geo/<cena>/`
  **e** no acervo comum desde o Ormuz, onde o defeito custou 14 cenas. O gate que COBRA o insumo
  (`lib/insumos-arte.mjs`) só olhava o acervo — e barrou **7 cenas de mapa do China com a geometria
  no disco**. O conserto existia no gêmeo e não ali [SIS-443].
- **O denominador de arte** ([SIS-483]): cobrador × gerador, 220 contra 93.
- **A régua de cena que vira clipe**, hoje escrita à mão pela **terceira e quarta vez**
  (`direcao-fundir.mjs`, `direcao-pendente.mjs`). Não estão erradas — são as próximas a divergir.

**A emenda:** quando achar a segunda cópia, **não copie a versão certa para a errada**. Isso mata o
sintoma e deixa duas listas à mão para divergirem de novo, que é exatamente como se chega aqui. Mova
a régua para quem já é dono daquela fronteira (`lib/brief-arte-geo.mjs` para geometria, `src/modos.mjs`
para modos) e faça os dois consumidores **importarem a mesma função** — inclusive o que estava certo.
E procure a terceira cópia antes de fechar: nos três casos acima ela existia.

## SIS-485 · Capacidade órfã COM testes verdes é mais perigosa que capacidade órfã sem teste nenhum

Medido em 15/set/2026, na revisão do PR #294 (a trava de caça por conta, para a segunda conta de
Shutterstock que o dono ia declarar no dia seguinte).

O PR estava **bem escrito**: o desenho era o certo, o perigo do estado meio-migrado estava nomeado no
comentário, os três ramos existiam, e havia **8 testes novos, todos verdes**. Só que a função nova
aparecia **uma única vez no arquivo inteiro — a própria definição**. `ler`, `tomar`, `liberar` e
`segurarDurante` continuavam usando a chave antiga. A trava fazia exatamente o que fazia antes.

### A prova, e por que ela precisa ser por mutação

Ler o diff não basta: o texto do PR descreve o comportamento pretendido, e o comentário do código
descreve o mesmo. **Sabotar a função é o que separa «está lá» de «está no caminho»** — troquei o
corpo de `recursoDe` por `return "SABOTADO"`:

| suíte | com a função devolvendo lixo |
|---|---|
| os 8 testes novos | 6 falham |
| `trava-caca-ancestral` | **6/6 passam** |
| `trava-caca-heranca` | **7/7 passam** |

A trava inteira funciona igual com a peça nova devolvendo lixo. E os 8 testes novos faziam **9
chamadas à função nova, 4 à auxiliar, e ZERO a `tomar`/`ler`/`liberar`/`segurarDurante`**.

> **Teste que só toca a peça nova prova a peça nova, não o sistema.**

### Por que o verde piora o caso, em vez de melhorar

Capacidade órfã sem teste é suspeita: quem lê pergunta se funciona. **Capacidade órfã com suíte verde
é convincente** — o verde é exatamente a evidência que faz ninguém ir conferir se alguém a chama. O
rigor do autor vira o argumento que impede a revisão.

⛔ **E o custo aqui não era o PR não funcionar: era a casa ACHAR que estava protegida.** O
fail-closed que deveria impedir duas máquinas de caçarem na mesma conta vivia na função órfã.
Declarar a segunda conta com esse código integrado **não lançaria nada** — continuaria serializando
pela chave antiga, e as duas máquinas gastariam a mesma cota derrubando a sessão uma da outra, sem
erro nenhum. *A ordem de implantação definida para proteger a migração não salvava, porque o passo 1
não mudava comportamento algum.*

### Como se pega, e é uma pergunta só

Ao revisar qualquer capacidade nova, antes de olhar a qualidade dela:

1. **quem a chama?** — `grep` do nome no arquivo e no repo; se o único resultado é a definição, pare;
2. **sabote-a** e rode a suíte do subsistema, não a do PR. Se nada além dos testes novos falha, ela
   está fora do caminho;
3. **exija um teste do caminho REAL** — aqui, «com duas contas declaradas, pedir a trava sem dizer
   qual tem de LANÇAR». É esse teste que a versão do PR não tinha e que teria pegado tudo.

Irmã de [[leitor-sem-produtor-fora-do-teste]] e de [[nao-chama-ou-nao-tem-a-funcao]]; o que esta
acrescenta é o agravante do **verde**.

## SIS-486 · Prova de restauração se faz pelo COMPORTAMENTO, não pela forma

Medido em 15/set/2026, ao conferir a minha própria árvore depois de um alerta da casa: um verificador
por mutação escreve no arquivo de produção, e uma rodada morta em segundo plano já tinha deixado
mutante gravado no alvo de outra frente — que o comitou com um «7/7» falso.

Eu tinha mutado **nove arquivos** naquele dia. Para provar que nenhum mutante sobrevivera, escrevi o
detector óbvio: **procurar a forma antiga**. Ele acusou **três mutantes vivos. Os três eram falsos**,
e cada um por um motivo diferente — é por isso que a lei existe.

### Os três jeitos de a forma antiga sobreviver sendo inocente

1. **Ela vive no COMENTÁRIO que explica por que foi removida.** O `|| echo 000` que o detector achou
   no `portao.sh` estava dentro da nota que eu mesma escrevera documentando o conserto.
   *Procurar a forma antiga acha também o texto que a documenta — e punir isso é punir quem documentou.*
2. **Ela vive como CONSEQUÊNCIA de uma guarda correta.** O padrão ``? `sips …`` casou a linha de baixo
   de `tipo === "foto" && process.platform === "darwin"`. O fragmento, sem o contexto, **acusa o próprio
   conserto** — e este é o caso mais perigoso, porque o «mutante» aponta para código que está certo.
3. **O detector pode simplesmente estar quebrado.** O meu estava: `m="${par%%:*}"` num padrão que
   continha `:` (`vivo: !!(…`) cortou no primeiro e me fez procurar a palavra `vivo` solta.

### A régua

> **O detector bom é a SUÍTE que morde o mutante.** Se ela passa, o mutante não está lá.
> **E se não existe suíte que morde aquele mutante, ele nunca provou nada desde o início.**

⚠️ **REFINADA pela [SIS-572]:** a régua acima vale para quem ESCREVE a prova por mutação. Quem
ENCONTRA um sobrevivente por acaso não deve concluir «falta cobertura» — um mutante sobrevivente
prova o escopo de quem o rodou. Antes de declarar débito, rode-o contra a suíte dona daquele
comportamento (o teste do módulo e o do consumidor), não contra o arquivo que estava aberto.

A segunda metade é a mais dura, e vale para quem *escreve* a prova por mutação: matar um mutante só
significa alguma coisa quando existe um teste que o mata. Mutante sem teste que o morda é teatro —
mede-se a ausência de cobertura e chama-se de prova.

**No caso:** a suíte da frente rodada contra o `main` deu **46/46**. Cada um desses testes foi escrito
para morder exatamente um dos mutantes injetados; um sobrevivente derrubaria o seu.

### E as duas provas são complementares — nenhuma basta sozinha

- **sha256 do original, conferido no fim** → prova que o **arquivo** voltou;
- **suíte que morde o mutante** → prova que o **comportamento** voltou.

Um arquivo pode voltar byte a byte e o subsistema seguir quebrado por outra razão; e o comportamento
pode passar com o arquivo sujo de uma edição inócua. Quem prova restauração roda as duas, e separa os
códigos de saída: **«árvore suja» e «mutante sobreviveu» pedem ações opostas** — a primeira é
`git checkout`, a segunda é escrever teste.

⚠️ **E a nota que dói:** eu tinha escrito, poucas horas antes, a lei de validar o detector num caso
positivo — e **não validei este**. *A lei não falha por estar mal escrita; falha por não ser aplicada
pelo próprio autor no minuto seguinte.* Três alarmes falsos entregues teriam custado alguém
«consertando» código correto. [[valide-o-detector-num-caso-positivo]] · [[teste-estrutural-passa-com-o-mutante]]

### SIS-487 · Com o `main` vermelho, a régua é o CONJUNTO DE NOMES contra a base — contagem não separa herança de regressão (15/set/2026)

> 🔀 Nasceu como SIS-485, tentou o 486 e entrou como SIS-487: o `main` já tinha uma SIS-485 («Capacidade órfã COM
> testes verdes…»), escrita com `##` em vez de `###` — o meu `grep '^### SIS-'` não a via, e o extrator do
> `regras-todas` via — e o 486 também já estava ocupado, pelo mesmo motivo. Foi o gate que pegou as duas vezes.
> *Contar cabeçalho por UM nível só é medir com a régua errada: nesta casa há leis em `##` e em `###`.*
>
> ⛔ **E a lição maior, que custou três colisões no mesmo dia: LER o próximo livre não RESERVA nada.** Três
> frentes leram certo e colidiram na mesma faixa, porque entre ler e integrar passam horas. Desde 15/set há
> alocador: `node scripts/reservar-id-lei.mjs --dominio=<DOM> --intencao="…" [--faixa=NNN-NNN]`, e cada frente
> tem faixa própria (a de Git das produções é **SIS-580 a 589**). **Reserve antes de escrever**; o `grep` serve
> para conferir, nunca para escolher.

Em 15/set o `main` corria com dezenas de vermelhos herdados. Nesse estado, **a contagem não responde nada**: um PR
que some com uma falha instável e acrescenta uma regressão fecha com o mesmo número, e um PR inocente parece
culpado porque a máquina estava mais carregada. Quem integra no escuro acaba fazendo uma de duas coisas ruins —
para a fila, ou passa a ignorar o vermelho inteiro. *Um portão que sempre reprova ensina a ignorar o portão.*

**A régua, e ela é de conjunto:**
1. rode a suíte na **base** (o `main` exato de onde o ramo saiu) e no **ramo**, na MESMA máquina e **em série** —
   nunca duas ao mesmo tempo;
2. extraia os NOMES dos `not ok` dos dois lados e compare com `comm`: o que interessa é **«só no ramo»**;
3. cada nome que aparecer só no ramo se confirma **isolado**, 3× de cada lado, **INTERCALANDO** base e ramo
   (A,B,A,B,A,B) em vez de rodar os três de um lado e depois os três do outro — medido em 15/set: em blocos,
   `shot-batch` deu 3 falhas de 3 na BASE e 0 de 3 no ramo, e a diferença era a carga da máquina entre os
   blocos, não o diff. Bloco de execuções carrega a deriva do relógio junto;
4. o que falha **nos dois** lados é herança: **não é do PR**, e integrar por cima disso é o certo — declarando.

⚠️ **E o lugar de medir faz parte da medição.** Medido hoje: uma árvore de trabalho dentro de `/tmp` produz
**duas falhas fantasma** em `executar-pesquisa-workflow.test.mjs` (`Cannot find module …/scripts/pesquisar-*.mjs`),
porque o teste roda sob **bwrap**, que dá ao filho um `/tmp` PRIVADO — a árvore some de dentro do sandbox. A mesma
suíte, num worktree fora do `/tmp`, dá **9/0**. Antes de acusar o `main`, confira onde você mediu.

**O censo do dia, como exemplo do que a régua separa:** 27 nomes vermelhos numa passada da suíte → **6 arquivos
passam isolados** (carga da máquina, não defeito) · **2 falhas eram do `/tmp`** · restaram **12 falhas estáveis em
11 arquivos**, e só essas merecem dono. Delas, três famílias: **ambiente** (`zip` ausente, ffmpeg sem `-fps_mode`),
**teste que nasceu vermelho** (nunca passou nesta máquina) e **regressão de verdade** (verde há três dias, vermelho
hoje) — e só a terceira é urgente.

*Débito declarado não reprova; débito silencioso apodrece. Por isso o vermelho herdado se escreve, com dono e data,
em vez de se carregar de PR em PR sem nome.*

---
### SIS-488 · Flag que amplia o ESCOPO transforma «não terminou» em «a máquina está cheia» — e a segunda explicação é a que todos aceitam sem conferir (15/set/2026)

Duas cenas do `compilado-poder-militar-china-eua` ficaram sem carimbo de portão. A frente tentou medi-las **quatro
vezes**, subindo o relógio a cada tentativa:

| tentativa | relógio | desfecho |
|---|---|---|
| 1 | `QC_TIMEOUT_MS` 180 s | estourou |
| 2 | 900 s | estourou — log com **0 bytes em 32 min** |
| 3 | 900 s | estourou |
| 4 | 1.800 s + `timeout 2400` | **SIGTERM aos 40 min**, «26 cenas carimbadas antes de sair» |

O diagnóstico foi *«a cena não mede nesta máquina enquanto houver outras frentes»*, e ele **batia com tudo o que se
via**: o load ERA 48, os Chromes das outras frentes existiam. Chegou a virar pedido para que as outras frentes
segurassem processo pesado.

⛔ **Era falso.** O gate rodava com **`--forcar`**, que invalida os 90 carimbos e remede o vídeo INTEIRO. As quatro
tentativas morreram remedindo 88 cenas já verdes antes de chegar nas duas que importavam. Sem a flag, **na mesma
máquina e no mesmo load**:

    ↩ 88 de 90 cena(s) com carimbo válido — puladas (use --forcar para re-medir)

**Por que é lei:** «a máquina está cheia» é **plausível, verificável à vista e falso**. Todos os fatos que a
sustentavam eram verdadeiros; o que faltava era a pergunta **«quanto trabalho eu mandei fazer?»**. Flag de escopo
não aparece no sintoma — aparece no **denominador**.

**A regra, acionável:** diante de «não terminou a tempo», antes de culpar o ambiente, **meça quantos itens a sua
chamada mandou processar** e compare com quantos você queria. Se a ferramenta tem flag de escopo (`--forcar`,
`--todos`, `--all`, `--no-cache`), confira o que ela faz com o CONJUNTO, não com o item. E **toda ferramenta que
pula trabalho por cache deve dizer quantos pulou**: foi a linha `↩ 88 de 90` que tornou este defeito visível — sem
ela, o diagnóstico errado seguiria de pé.

⚠️ **E a medição em LOTE erra para os DOIS lados, medido no mesmo turno:** o censo de exposição a um defeito de
captura deu **3** cenas pelo lote e **9 de 90** pelo critério certo (subestimou por três); e a `s018` saiu do lote
com `falhas:['tamanho']`, mas medida **isolada**, no mesmo arquivo intocado, deu `✓ TAMANHOS ok` e carimbo verde
(falso negativo). *Medição isolada é estável; a do lote não é — e ela não tem direção preferida.*

*Da mesma frente, no mesmo dia, uma ressalva que a autora fez sobre si mesma e que pertence à lei: meia hora depois
de descobrir isto, ela matou um processo de QC por parecer travado (21 min vivo, CPU 0,0%, log parado). **CPU 0% no
node não prova travamento** — o trabalho estava no Chrome filho. É o mesmo vício: aceitar a explicação plausível
sem medir o que a contradiria.*
## SIS-510 · PROVA VAZIA — «N testes verdes» sobre código que os testes não exercem

> 🔒 **Primeira lei desta casa a nascer com ID RESERVADO em vez de lido.** O número saiu de
> `node scripts/reservar-id-lei.mjs --dominio=SIS --intencao="…" --faixa=510-519`, que o gravou em
> `gs://…/leis/reservas/SIS/0510.json` com exclusão atômica **antes** de uma linha ser escrita aqui.
> A colisão de 15/set aconteceu porque *ler não reserva*; esta lei é o primeiro caso em que reservar
> veio antes de escrever.

**Medido em 15/set/2026, no PR #299, e o erro é meu.** Escrevi no corpo do PR: **«15 testes, 15
passam»** — verdade. As duas suítes existiam, rodavam e estavam verdes. **E nenhuma delas tocava a
mudança que o PR fazia.**

O que aconteceu: refatorei no meio do caminho e passei a usar `causaDaSaida`, uma função canônica
que **já estava no `main` e já tinha suíte própria**. Ao contar os verdes, contei os dela. A função
nova — `notaDoSemMudanca`, a mudança central do PR — **não tinha um único teste**.

⚠️ **Nada disso é falso separadamente**, e é por isso que passa: a suíte existe · o número está
certo · os testes passam · o PR muda código. A afirmação que ninguém checa é a **ligação** entre as
duas coisas — *estes testes exercem esta mudança?* Foi a coordenação que parou, por uma discrepância
de **texto**, e só então a prova vazia apareceu por baixo.

**Irmã do mesmo dia, noutra frente:** «7/7 mortos» reportado sobre um arquivo mutado — a suíte
media outra coisa.

**A LEI:**

1. **Contagem de verdes só vale ao lado do que ela COBRE.** «15 de 15» não é prova de nada sem
   dizer *de quais casos*, e **sobre qual código**. Ao reportar teste, nomeie a função ou o
   comportamento que os casos exercem.
2. **Toda mudança precisa de teste PRÓPRIO, ou de um limite declarado.** Neste mesmo PR a
   ampliação da guarda do log continuou sem cobertura — e isso está **escrito no corpo**, em vez de
   dissolvido numa contagem que a incluiria por engano. *Limite declarado é procedência; limite
   omitido é a prova vazia de novo.*
3. **Reusar função canônica testada é bom — e não transfere a prova.** A suíte dela prova **ela**.
   O seu uso, a sua composição e o seu ramo novo continuam sem prova até você escrever uma.
4. **O teste de que um teste morde é o mutante.** Instale o defeito que o conserto elimina e exija
   a falha: aqui, a nota fixa de antes derruba os quatro casos novos. *Teste que passa com o defeito
   instalado é contagem, não prova.*

*Parentesco: [SIS-560] (o instrumento que responde é mais perigoso que o que quebra) e [SIS-563]
caso 3 — a discrepância de texto que serviu de porta para encontrar esta.*

---

## SIS-511 · O instrumento nomeia o que VIU, não o que CAUSOU — ler o rótulo e parar é o erro

> 🔒 ID **reservado** antes de escrito (`reservar-id-lei.mjs --dominio=SIS --faixa=510-519`).

**Medido em 15/set/2026, no `estreito-de-ormuz`, e o erro é meu.** Duas cenas ficaram com um achado
pendente cada, e eu as agrupei como «conserto de timeline, para revisão humana»:

| cena | lente do laudo | o que EU li | o que o laudo dizia |
|---|---|---|---|
| `ormuz-s035` | `motion` | movimento → timeline | ✅ timeline mesmo: congelamento de 2,29 s, animação sub-executada |
| `ormuz-s107` | **`cadencia`** | ritmo → timeline | ⛔ **falta de MÍDIA**: a regência pede 3 planos reais, o HTML usa 2, e `midia.nao_usados` está **vazio** |

A `s107` estava **destravada** — precisava de um clipe, que não depende de QC nem de release — e
ficou parada porque **li o nome da lente e não abri o laudo**. «Cadência» é o que o QC **mediu**:
*a tela não troca quando devia*. A causa podia ser a animação, o corte, ou mídia que nunca existiu.

**Why:** o nome de uma lente, de um gate ou de um código de erro descreve o **sintoma que o
instrumento consegue enxergar** — é a pergunta que ele sabe fazer, não a resposta. Agrupar achados
pelo rótulo parece triagem e é **adivinhação com cara de método**: dois achados da mesma lente podem
ter causas em estações diferentes, e dois de lentes diferentes podem ter a mesma causa.

⚠️ E o custo é assimétrico, o que torna o erro difícil de notar: **classificar errado para MAIS
trabalho** aparece logo (o agente devolve nada, como no `sem-mudanca`); **classificar errado para
MENOS** — que foi o meu caso — some, porque a cena simplesmente fica parada e ninguém a procura.

**A LEI:**

1. **Abra o laudo antes de agrupar.** O rótulo escolhe a lente; **o corpo escolhe a estação**. Dois
   parágrafos de leitura decidiram, aqui, entre «revisão humana» e «uma caça de 20 minutos».
2. **Ao triar, escreva a CAUSA ao lado do rótulo.** «`s107` · cadencia · *falta o 3º plano real,
   aquisição nova*» é triagem; «`s107` · cadencia · timeline» é repetição do nome do instrumento.
3. **Vale para todo instrumento desta casa**, não só para as lentes: `provider_error` é o balde do
   `else` ([SIS-514]), `procedência reprovada` era um timeout ([SIS-562]), `fleet_release_inconsistent`
   nomeia a divergência e não a rampa de saída ([SIS-561]). *Em todos, o nome é honesto sobre o que o
   instrumento viu e mudo sobre o que aconteceu.*

*Parentesco direto com [SIS-560]: lá o instrumento **respondia** de um lugar errado; aqui ele
**nomeia** corretamente o sintoma e eu tomei o nome por diagnóstico.*

---

## SIS-512 · Quem despacha conserto GUARDA O ESTADO ANTERIOR — sem ele, reverter é refazer e verificar é impossível

> 🔒 ID **reservado** antes de escrito. ⛔ **Isto é PEDIDO DE CONSERTO, não descrição do que existe:**
> a cópia descrita abaixo **ainda não é feita** pelo `consertar-cenas.mjs`. Lei que descreve o
> presente e pedido que descreve o futuro não podem morar na mesma frase sem dizer qual é qual.

**Medido em 15/set/2026, na `ormuz-s035`, e o buraco apareceu na hora de VERIFICAR o próprio
conserto.** Despachei o conserto com duas travas acordadas: *(1)* provar o resultado por frames, e
*(2)* **aumentar a amplitude da animação, nunca reescrever o movimento**.

A trava 1 eu provei — diferença pixel a pixel, `YMAX 173`, ponta a ponta `6,74` contra o limiar de 6.

**A trava 2 é inverificável, e vai continuar sendo.** Para saber se o agente aumentou amplitude ou
reescreveu, é preciso o HTML **de antes**, e ele não existe em lugar nenhum:

| onde se procuraria | o que tem |
|---|---|
| disco da VM | só a versão **nova** — o agente escreve por cima |
| bucket (`out/<proj>/graphics/`) | uma geração **ainda mais velha** (`82b7d497`, não o `a0298407779f` de antes do conserto) |
| versionamento do bucket | **`Suspended`** |
| `_bkp/` de HTML | **não existe** |
| git | `out/` não é versionado |

**Why:** o `consertar-cenas.mjs` faz a coisa certa em tudo o mais — julga pelo artefato e não pelo
exit code, guarda o `hashAntes`, classifica `sem-mudanca` como falha a investigar. Mas **o hash prova
que MUDOU e não diz o QUE mudou.** Sem o conteúdo anterior, três perguntas ficam sem resposta para
sempre: *o agente respeitou o escopo?* · *o que exatamente ele tocou?* · *como se desfaz isto sem
pedir outra sessão do gargalo criativo?*

⚠️ E o custo de não ter isso já foi pago nesta casa na forma mais cara: em 26/jul um `rsync` de
entrada apagou **5 cenas de arte fresca**, e o registro diz, sobre a recuperação: *«sem recuperação:
não há `_bkp/` de HTML e o versionamento do bucket está `Suspended`»*. **O mesmo buraco, dois
sintomas — lá impediu reverter, aqui impede verificar.**

**O CONSERTO PEDIDO — e a frente vertical já provou a forma hoje**, guardando o estado em
`_antes-arte-20260915/` antes de despachar, *«para a reversão ser cópia e não refazimento»*:

1. **A estação de conserto copia o HTML para `_antes-<data>/<cena>.html` ANTES de entregar a cena ao
   agente.** Antes, não depois: depois do agente escrever, o anterior já morreu.
2. **É barato e não pede infraestrutura:** HTML de cena são dezenas de KB. Não depende de ligar
   versionamento num bucket de 7 TB, nem de retenção, nem de política nova.
3. **O resultado do conserto passa a trazer o diff**, não só o hash — e a revisão deixa de ser
   «mudou alguma coisa» para ser «mudou isto».
4. **Reverter vira cópia**, e não um despacho novo do gargalo criativo.
5. ⚠️ **Vale para toda estação que entrega arquivo a um agente que escreve por cima** — conserto,
   arte, remapeamento, tradução de tela. *Onde o agente sobrescreve, o estado anterior é insumo de
   verificação, não lixo.*

*Parentesco: [SIS-510] (prova vazia) — lá faltava o teste que exerce a mudança, aqui falta o
artefato que permite examiná-la. Nos dois, o que falta não é o conserto: é a capacidade de saber se
ele é o que diz ser.*

---

## SIS-513 · Diário de TENTATIVAS não é registro de ESTADO — lê-lo como laudo inventa dívida que não existe

> 🔀 **Nasceu como SIS-487 e foi renumerada para SIS-513 na fusão de 15/set/2026.** Enquanto este ramo
> esperava integração, outra frente entrou no `main` com uma SIS-487 («Com o `main` vermelho, a régua é o
> conjunto de nomes contra a base»). Pela [SIS-62], **quem já está integrado fica com o número.**
> ⚠️ E a colisão nasceu ENTRE DUAS MEDIÇÕES MINHAS, com minutos de diferença: ao abrir o merge, o `main`
> ainda não tinha a SIS-487; ao conferir o resultado, tinha. *«Ler não reserva» também na versão temporal —
> o número que estava livre quando você leu pode não estar quando você grava.* O SIS-513 foi **reservado**
> pelo alocador antes desta linha ser escrita.
**Medido no `estreito-de-ormuz` em 15/set/2026, e a medição foi contra mim.** Apurando por que o
vídeo estava parado, li `_qc-diario.jsonl` — uma linha por passada do `qc-visual` — peguei o último
registro de cada cena e concluí que **19 dos 119 clipes 4K tinham saído de cenas reprovadas**, mais
4 sem veredito. Relatei isso como dívida, propus uma partição para tratá-la, e a decisão de quem
comanda foi tomada em cima do número.

**A dívida não existia.** O laudo de verdade é outro arquivo:

| arquivo | o que é | quem lê |
|---|---|---|
| `_qc-diario.jsonl` | **diário de tentativas** — inclui `inferencia-falhou`, `cancelada-provider`, `laudo-invalido` | ninguém, para decidir estado |
| `out/<proj>/qc/<cena>.laudo.json` | **o laudo** — `cena`, `aprovado`, `gatesDuros`, `lentes`, `julgamento` | `selecionarCenasQc`, e é ele que decide o que falta julgar |

Contado no laudo canônico, o mesmo projeto: **119 `aprovado:true` (exatamente as 119 com clipe) ·
9 `aprovado:false` (nenhuma com clipe) · 0 obsoletas · 10 sem laudo (nenhuma com clipe)**.
**Zero clipes renderizados a partir de cena reprovada.** As 18 que eu dera como «laudo obsoleto»
estavam todas `aprovado=true` com laudo posterior ao HTML — tinham sido consertadas *e re-julgadas*.

**Os dois lados, em número:** `_qc-diario.jsonl` guardava **232 tentativas**; `qc/` guardava
**128 laudos**. *O arquivo de tentativas ACUMULA as falhas; o de estado guarda o VEREDITO — quem
pergunta «qual é a situação?» ao primeiro recebe a soma de tudo que já deu errado.*

**Why:** um diário de tentativas registra o que foi *tentado*, e a última tentativa de uma cena pode
ser uma falha ocorrida **depois** de um julgamento bem-sucedido. Tomar «o último registro» por
«o estado» inverte o significado do arquivo. O erro é silencioso e tem a pior forma possível: produz
um número plausível, no formato certo, que **confirma a tese de quem está investigando** — eu estava
caçando buracos, e o arquivo errado me deu dezenove.

⚠️ **E o laudo canônico ENVELHECE — por `mtime`, não por hash.** `selecionarCenasQc` usa
`mtime(laudo) >= mtime(html)`, e nada no laudo carimba o conteúdo julgado. É mais fraco que hash nas
duas direções: `touch`, `rsync`, `cp -p`, checkout e restauração mexem no relógio sem mexer no
conteúdo — ora mandando re-julgar de graça (cota do gargalo), ora deixando passar por atual um laudo
de outro arquivo. O pacote de frames **já carrega `html_sha256`** (`julgar-cenas.mjs` levanta
`scene_changed` com ele) e o laudo não o copia. *Enquanto for mtime, a régua funciona — mas ela
depende de um metadado que qualquer cópia destrói.*

**A LEI:**

1. **Antes de derivar estado de um arquivo, pergunte se ele é um DIÁRIO ou um REGISTRO DE ESTADO.**
   Nome no plural, extensão `.jsonl`, uma linha por evento e campos como `erro`/`tentativas` são
   diário: ele conta a história, não o presente. O estado mora no artefato que o código consulta —
   ache **quem lê** antes de escolher a fonte.
2. **Para FALHA, o diário é a fonte certa**; para VEREDITO, nunca. As duas perguntas vivem em
   arquivos diferentes de propósito, e a [SIS-514] usa o mesmo `_qc-diario.jsonl` legitimamente,
   porque pergunta quantas passadas morreram — não quem foi aprovado.
3. **Número que confirma a sua tese exige a fonte conferida DUAS vezes.** O viés não aparece como
   erro de conta: aparece como a escolha do arquivo.
4. **Ao entregar um número que vai virar decisão de outra pessoa, diga de onde ele saiu.** Se eu
   tivesse escrito «derivado do último registro por cena em `_qc-diario.jsonl`» em vez de
   «19 clipes reprovados», o próprio enunciado teria exposto o defeito.

⚠️ **O mesmo laudo que não envelhece tem um primo no LOG: «✓ cena» não quer dizer «cena sem
achados pendentes».** Medido no lote de conserto de 15/set: o `consertar-cenas` imprimiu
`✓ ormuz-j09-aviacao-gnl`, e a cena continuava com dois achados `pendente` na fila. Não é
contradição — o `✓` diz que **a passada tratou o que pegou**, e os dois restantes carregavam
`hash_html=563e751d62e4`, o HTML **anterior** ao conserto. São encomendas **vencidas**: descrevem um
arquivo que não existe mais, e o `consertar-cenas` as ignora **corretamente**. Elas pedem
**re-julgamento**, não conserto às cegas. *Ler o `✓` do log como estado da cena reabre a mesma porta
que ler o diário como laudo.*

*Parentesco: [SIS-476] (laudo verdadeiro sobre o escopo errado) e
[[portao-confere-hash-nao-confere-insumo]] — a mesma família, a de registros que respondem com
confiança a uma pergunta que não é a que foi feita.*

---

## SIS-560 · Diagnóstico feito do CHECKOUT DE DESENVOLVIMENTO não vale para a produção — e sai como defeito do sistema

> 🔀 **Nasceu como SIS-489 e foi renumerada para SIS-560 em 15/set/2026, PREVENTIVAMENTE.** Ela não
> colidia — mas foi numerada por LEITURA, antes de o alocador existir, e duas irmãs do mesmo lote
> (SIS-487→513 e SIS-488→514) colidiram com o `main` **na mesma tarde**, uma delas entre duas medições
> minhas. O número novo foi **reservado** pelo alocador antes desta linha. *Quem lê aposta; quem reserva
> não precisa voltar.*
**Medido em 15/set/2026, apurando o `estreito-de-ormuz`, e os três erros são meus.** Rodei as
ferramentas de produção a partir de `~/top10-estudio` na `estudio-top10` — o checkout de
desenvolvimento, parado em `98abde881`, anterior a 12/set. A produção roda de
`/dados/top10-runtime/releases/<commit>`. Três «achados» nasceram só dessa diferença:

| o que eu reportei | o que era |
|---|---|
| «o render está bloqueado: `handoff recusado — procedência reprovada: ETIMEDOUT`» | só na **minha** execução: o checkout não tem `scripts/lib/referencias-midia.mjs`, e o `qc-procedencia` volta ao regex quadrático. **Cronometrado: 1 788,96 s sem terminar** (encerrei no sinal 15) contra **1,3 s** no código consertado — fator > 1 375×. O serviço, que roda da release, segue normal: `handoff cheio recusado — seguindo PARCIAL com 119 cena(s) aprovada(s)` |
| «a flag `--cenas=` é silenciosamente ignorada» | ignorada no checkout velho; **funciona na release** (`--listar --cenas=<uma>` devolve «1 a julgar») |
| «o julgador abre Chrome na 24/7, violando a regra de ouro» | o comportamento de alimentar a frota é de 12/set: `origemDosFramesDoJulgadorQc` tem **0 ocorrências** no checkout e **3** na release. Fui eu que pus 46 Chromes na máquina |

**Why:** um checkout velho não falha — ele **responde**. Responde com a semântica de semanas atrás,
no formato certo, e a resposta vira laudo sobre a produção de hoje. O erro não se parece com
«ambiente errado»: parece **defeito do sistema**, e manda consertar o que já está consertado. Dois
dos três achados acima eu ia levar para a fila de consertos de raiz.

**A LEI:**

1. **Antes de tirar conclusão sobre produção, execute de onde a produção executa.** `systemctl --user
   cat <serviço>` diz o `WorkingDirectory`; é ele a porta, não o `~/`. Na dúvida, compare um símbolo
   que você sabe que é novo (`grep -c` do nome da função) nos dois caminhos.
2. **Todo relato de defeito declara DE ONDE foi rodado.** Sem essa linha o leitor não consegue
   separar defeito de ambiente, e quem recebe o relato gasta o conserto no lugar errado.
3. **Vale para leitura também, e o turno deu QUATRO casos da mesma doença** — em todos eu li ou
   executei a fonte errada e tratei o resultado como medição:
   - **fonte errada:** o diário de tentativas no lugar do laudo ([SIS-513]) → dívida de 19 clipes
     que era **zero**;
   - **versão errada:** o checkout no lugar da release → os três falsos achados da tabela acima;
   - **forma errada:** censo de IDs com `grep "^## SIS-"`, cego a `### SIS-` e a `**SIS-` → escolhi
     dois números de lei já ocupados;
   - **recorte errado:** regex de referências capturando caminho de dentro de um comentário `/* … */`
     → dois arquivos dados como ausentes que existiam.
4. **«Não achei» exige provar que se estava procurando no lugar certo — antes de virar afirmação.**
   Eu disse que não havia no código nada que recusasse promover clipe sem binding; a recusa estava
   viva e escrita no log do serviço (`⏸ 118 saída(s) legada(s) sem binding; preservadas, sem promoção
   ou redispatch automático`). *Procurar no lugar errado e não achar não é medir: é **produzir a
   ausência com o próprio instrumento**.* Ver [[ausencia-e-produzida-pelo-instrumento]].
5. *Ferramenta que responde é mais perigosa que ferramenta que quebra.* A que quebra manda
   investigar; a que responde manda concluir.

*Parentesco: [SIS-513] (ler o diário no lugar do laudo) e [[producao-roda-de-release-fixada]] — a
mesma doença em três formas: fonte errada, versão errada, forma errada.*

---

## SIS-561 · Recusa CORRETA que cai para o caminho PROIBIDO é pior que a falha

> 🔀 **Nasceu como SIS-490 e foi renumerada para SIS-561 em 15/set/2026, PREVENTIVAMENTE.** Ela não
> colidia — mas foi numerada por LEITURA, antes de o alocador existir, e duas irmãs do mesmo lote
> (SIS-487→513 e SIS-488→514) colidiram com o `main` **na mesma tarde**, uma delas entre duas medições
> minhas. O número novo foi **reservado** pelo alocador antes desta linha. *Quem lê aposta; quem reserva
> não precisa voltar.*
**Medido em 15/set/2026.** A frota de QC está pinada em **duas releases**:

```
estudio-qc-2  us-central1-b  6714402f44e1c950f7db1dffa20c362d89396cb8
estudio-qc-3  us-central1-c  540a0d6eb798c94b3c8763dc5afa3804d93ba30a
estudio-qc-4  us-central1-f  540a0d6eb798c94b3c8763dc5afa3804d93ba30a
```

`commitDaFrotaPeloMetadata` (`qc-alimentar.mjs:131`) exige `commits.size === 1` e lança
`fleet_release_inconsistent`. **A recusa está certa** — o comentário do próprio código explica por
quê: *«release divergente entre VMs é recusa, nunca a maioria vence»*, senão enfileira-se trabalho
que metade da frota não sabe executar.

**O defeito é o que vem depois.** O `julgar-cenas` imprime, em sequência:

```
☁ estudio-top10 é máquina de produção fora do pool de QC: a captura vai para a frota
⚠️ alimentador falhou: fleet_release_inconsistent
☁ frota de QC: 0/1 cena(s) com frames no bucket · 1 caem para a CAPTURA LOCAL
```

Ele **reconhece em voz alta** que aquela máquina não pode capturar e, três linhas depois, captura
ali. Não é degradação graciosa: é **um segundo defeito escondido dentro do primeiro** — o operador
vê um aviso, o trabalho «continua», e a máquina que sustenta a casa leva carga que a doutrina
proíbe desde agosto.

**Os dois números, com onze dias entre eles:** em 08/ago/2026 o Chrome levou esta mesma VM a
**load 211 em 16 vCPUs**, com o SSH deixando de responder e um `scp` falhando em silêncio. Em
15/set eu encontrei **46 Chromes** ali por causa deste fallback e, ao encerrar só os processos que
eu mesma havia iniciado, a máquina voltou a **13** — sem matar nada por padrão de nome e sem tocar
em processo de outra sessão.

⚠️ **E é um IMPASSE, não uma fila.** As três VMs estão `TERMINATED`, e o alimentador lê o metadado
**antes** de ligar qualquer uma: a frota não liga porque diverge, e não converge porque não liga.
Nenhuma das rotinas de reconciliação sai desse estado sozinha.

**A LEI:**

1. **Fallback nunca pode ser o caminho que a própria ferramenta declarou proibido.** Se o host é
   `estudio-*` fora do pool de QC, «captura local» não é uma saída — é uma violação com aviso. A
   saída é **parar e nomear o bloqueio**.
2. **Degradar é decisão de quem opera, não do código** — e só quando o caminho degradado é
   *permitido*. Um degrau para um lugar proibido devia exigir flag explícita, como `--captura-local`
   já exige quando é pedido de propósito.
3. **Toda recusa fail-closed declara a RAMPA DE SAÍDA.** `fleet_release_inconsistent` diz o que está
   errado e não diz como sair — igual ao lease sem `attempt_id` e aos compilados em
   `subphase_failed`. Estado terminal sem rampa é a assinatura desta casa, e já custou três dias
   aqui.
4. **Metadado de release divergente é alarme de primeira ordem**, não detalhe de infraestrutura:
   enquanto durar, **o julgamento visual da casa inteira está parado** — e com backlog zero ninguém
   sente, até o próximo projeto bater no muro.

---

## SIS-562 · O alarme que MENTE sobre a própria causa — e que sobrevive ao conserto que o explicou

> 🔀 **Nasceu como SIS-491 e foi renumerada para SIS-562 em 15/set/2026, PREVENTIVAMENTE.** Ela não
> colidia — mas foi numerada por LEITURA, antes de o alocador existir, e duas irmãs do mesmo lote
> (SIS-487→513 e SIS-488→514) colidiram com o `main` **na mesma tarde**, uma delas entre duas medições
> minhas. O número novo foi **reservado** pelo alocador antes desta linha. *Quem lê aposta; quem reserva
> não precisa voltar.*
**Medido em 15/set/2026, no `estreito-de-ormuz`.** O handoff de render recusou assim:

```
⏸ estreito-de-ormuz: handoff parcial recusado — procedência da mídia
  reprovada: spawnSync /usr/bin/node ETIMEDOUT
```

**Não houve reprovação nenhuma.** Houve **timeout**. `medirProcedencia` (`scripts/lib/insumo-render.mjs`)
monta `erros.push(\`procedência da mídia reprovada: ${detalhe}\`)` e enfia o `ETIMEDOUT` no lugar do
detalhe — um código de falha de execução no campo reservado ao veredito de conteúdo. Quem lê vai
conferir licença e crédito de mídia que está certa, enquanto o defeito real é *não deu tempo de
terminar de provar que está certa*.

⛔ **E o pior está no mesmo arquivo: o comentário JÁ RECONHECIA o engano desde 04/set/2026**, com
todas as letras — *«uma mensagem que se lê como "a procedência está errada" quando o que houve foi
"não deu tempo de terminar de provar que está certa"»*. O conserto daquele dia subiu o timeout de
180 s para 15 min e **deixou a mensagem como estava**.

***O alarme enganoso sobreviveu ao conserto que o explicou.*** Quem consertou entendeu o problema
bem o bastante para descrevê-lo em prosa, tratou a causa da vez, e deixou de pé a frase que faria a
próxima pessoa caçar o defeito errado. Onze dias depois, fui eu.

**A LEI:**

1. **Falha de EXECUÇÃO e veredito de CONTEÚDO não compartilham campo.** `ETIMEDOUT`, `ENOENT`,
   `provider_error` e afins nunca entram numa frase que começa com «reprovado», «inválido» ou
   «proibido». O laudo diz *não consegui medir*; só quem mediu reprova.
2. **Quando o diagnóstico entra no comentário, a MENSAGEM entra no mesmo commit.** Descrever o
   engano em prosa e deixá-lo no código é documentar a armadilha para o próximo cair nela com mais
   contexto. Se você escreveu «isto se lê como X quando é Y», o conserto inclui trocar a frase.
3. **Diagnóstico escrito não é conserto aplicado.** Vale para comentário, laudo e relatório — é a
   mesma doença que esta casa já nomeou como *laudo bom não vira conserto*, aqui na sua forma mais
   barata de resolver e mais cara de deixar passar: **uma string**.

*Irmã da [SIS-514] (o `else` que devolve `provider_error` e mata a cena) e da [SIS-561] (a recusa
correta que cai no caminho proibido): três formas de a mensagem de erro custar mais que o erro.*

---

## SIS-563 · `draft` é uma AFIRMAÇÃO do autor, não um obstáculo a contornar — leia o CORPO antes de integrar

> 🔀 **Nasceu como SIS-492 e foi renumerada para SIS-563 em 15/set/2026, PREVENTIVAMENTE.** Ela não
> colidia — mas foi numerada por LEITURA, antes de o alocador existir, e duas irmãs do mesmo lote
> (SIS-487→513 e SIS-488→514) colidiram com o `main` **na mesma tarde**, uma delas entre duas medições
> minhas. O número novo foi **reservado** pelo alocador antes desta linha. *Quem lê aposta; quem reserva
> não precisa voltar.*
**Medido em 15/set/2026, e o erro é meu.** Recebi ordem expressa da coordenação para integrar o
**#121** (a trava que impede o julgador de abrir Chrome numa `estudio-*` fora do pool de QC — a
[SIS-561] em código, parada desde 12/set). Antes de integrar, medi:

- `isDraft`, `mergeable`, `mergeStateStatus`;
- e comparei **falha a falha** o CI do PR com o do `main`: **16 × 16, listas idênticas, zero
  regressão**. O `gates` reprovava por dívida pré-existente do `main`, que falha há três rodadas.

**Tudo isso estava certo. E eu integrei o que não devia**, porque **não abri o corpo do PR**, que
começa assim:

> ⛔ **Rascunho de propósito — NÃO integrar ainda.**
> Condição: o claim ativo do `petroleo-foz-do-amazonas` declarar `qc` no `scope`, **ou** o QC do
> petróleo terminar. Sem isso, a frota não tem autoridade (`claim_sem_escopo_qc`) e esta trava
> **pararia o único QC em curso na casa**.

Medidas depois, as duas condições: `claim.scope: null` e `147 julgáveis · 143 com laudo · 4 a
julgar`. **Nenhuma satisfeita** — e a segunda **não podia** ser, porque a frota de QC estava em duas
releases e recusava tudo. Eu teria trocado 46 Chromes na 24/7 por um QC parado.

**Why:** eu tratei `isDraft: true` como um **estado a contornar** (`gh pr ready`) quando ele era a
**declaração do autor de que aquilo não estava pronto**. Um campo booleano parece infraestrutura; o
motivo dele mora em texto, e texto só existe se alguém abrir. *A condição não era de código — era de
produção —, e nenhum gate do repositório podia vê-la.*

**A LEI:**

1. **Antes de integrar, leia o CORPO do PR inteiro.** Estado (`draft`, `mergeable`, CI) responde
   «dá para integrar?»; só o corpo responde **«deve?»**. As duas perguntas são diferentes e a
   segunda não tem API.
2. **`draft` é afirmação, e desfazê-la exige saber por que foi feita.** `gh pr ready` num PR alheio
   é sobrepor o julgamento de quem o escreveu — se você não sabe o motivo do rascunho, não sabe o
   que está sobrepondo.
3. **Ordem de terceiro não substitui leitura de quem executa.** A ordem foi dada sobre o eixo do CI;
   o segundo eixo não estava à vista de quem mandou. **Quem integra é quem lê** — e quando o
   executor tem uma informação que o mandante não tem, a obrigação é trazê-la, não cumprir depressa.
4. **E a metade de quem manda: quem ORDENA integrar responde pelo que não leu.** A coordenação
   escreveu «⛔ INTEGRE O PR #121 AGORA. É ordem» sem ter aberto o corpo do PR que começa com
   «⛔ Rascunho de propósito — NÃO integrar ainda». Ela mesma registrou isso depois, e a lei ficaria
   pela metade sem essa parte: ***ordem com urgência é a forma mais eficiente de fazer alguém pular
   a leitura***. Quem manda com pressa compra o risco de quem executa com pressa — então quem manda
   integrar declara **o que leu** ao mandar, ou manda sem o «agora».
5. **Ao desfazer, prove pelo destino e preserve o trabalho alheio.** `git diff <merge>^ origin/main
   --stat` **vazio**; ramo apagado pelo `--delete-branch` **restaurado** pelo `headRefOid` do PR
   (`git push origin <sha>:refs/heads/<ramo>`); aviso no próprio PR, porque o canal entre sessões
   estava pausado. Revert **acrescenta** commit — não reescreve histórico compartilhado.
6. **Reverter vence «avisar para não cortar a release».** O dano era futuro e evitável, e *a trava
   mora no código, não na disciplina de quem roda*.

⚠️ **CASO 3, e é o mais difícil de ver: CORPO E DIFF QUE DISCORDAM** (mesmo dia, PR #299). O corpo
descrevia três arquivos e uma função (`razaoDoAgente`) que **não estavam no PR** — eu refatorei no
meio do caminho, deixei de criar aquela cópia e passei a usar a `causaDaSaida` que já existia, e
**não reescrevi o corpo**. O diff tinha **um** arquivo.

*Nada no estado do PR denuncia isso.* `isDraft: false`, `mergeable`, CI verde — todos corretos. O
CI compila o **diff**, não confere o **texto**. E quem lê só o corpo fica convencido, porque ele é
coerente consigo mesmo: descreve uma mudança que existiu, só que ontem.

**Os dois casos anteriores são de LEITURA; este é de ENVELHECIMENTO.** O corpo estava certo quando
foi escrito e ficou errado sozinho, sem ninguém tocá-lo — a mesma doença da doutrina que descreve
um buraco já tapado, aqui na escala de um PR.

**A regra que fecha:** *ao mudar de abordagem no meio de um PR, o corpo muda no mesmo commit.* E
quem integra confere **uma linha**: `gh pr diff <n> --name-only` contra a lista que o corpo
promete. Foi assim que a coordenação pegou este.

*Quinta autocorreção do mesmo turno, e a única que chegou a mexer em ramo compartilhado. As quatro
anteriores ([SIS-513], [SIS-560]) foram ler a fonte errada; esta foi **não ler** a fonte certa.*

---

## SIS-564 · Duas observações que CONCORDAM com a sua explicação não são um experimento — são a mesma impressão contada duas vezes

> 🔀 **Nasceu como SIS-493 e foi renumerada para SIS-564 em 15/set/2026, PREVENTIVAMENTE.** Ela não
> colidia — mas foi numerada por LEITURA, antes de o alocador existir, e duas irmãs do mesmo lote
> (SIS-487→513 e SIS-488→514) colidiram com o `main` **na mesma tarde**, uma delas entre duas medições
> minhas. O número novo foi **reservado** pelo alocador antes desta linha. *Quem lê aposta; quem reserva
> não precisa voltar.*
**Medido em 15/set/2026, no `estreito-de-ormuz`, e o erro é meu.** O conserto de arte por agente
deu resultados diferentes em duas cenas e eu montei uma explicação em cima disso:

| cena | lente | natureza | resultado |
|---|---|---|---|
| `ormuz-s024` | wordlock | **timeline** (opacidade ao longo do tempo) | `sem-mudanca` |
| `ormuz-s078` | fonte | **textual** (atribuição) | **pronto** |

Escrevi que «o problema é a CLASSE do achado: conserto textual anda, conserto de timeline o agente
recusa», chamei aquilo de **experimento** — «uma variável por vez, com critério de parada declarado
antes» —, entreguei como achado, e a coordenação repassou ao dono como hipótese confirmada.

**O terceiro ponto matou a explicação no primeiro teste real:**

```
· ormuz-j14-saida-golfo — o agente respondeu mas não tocou no arquivo
```

**`j14` é lente `fonte` — exatamente a mesma do `s078`.** Mesma lente, mesma natureza textual,
resultados opostos. Com n=1 de cada lado eu tinha uma reta; com n=3 não havia reta nenhuma.

**Why:** duas observações que apontam para lados diferentes **sempre** admitem uma explicação que as
separe — basta escolher a dimensão em que elas diferem, e duas coisas quaisquer diferem em muitas.
Eu escolhi «timeline × textual» entre dezenas de diferenças possíveis (tamanho do HTML, número de
achados, nota da lente, idade da cena, modo, complexidade do conserto pedido) **porque essa era a que
eu já suspeitava**. O que parecia isolar uma variável era, na verdade, **confirmar a que eu tinha
levado para dentro do experimento**.

⚠️ E o agravante que transforma um erro de método em custo real: **a explicação já estava sendo
usada para decidir** — qual cena vai para agente e qual vai para revisão humana. *Uma hipótese vira
critério muito antes de virar conhecimento.*

**A LEI:**

1. **Um ponto de cada lado não é experimento.** É a diferença entre dois casos, e dois casos sempre
   diferem em mais de uma coisa. Antes de chamar de experimento, pergunte **em quantas dimensões os
   dois casos diferem** — se forem muitas, você escolheu uma, não isolou nenhuma.
2. **Declare o n junto com a conclusão.** «Conserto textual anda» esconde o n; «em 1 caso de cada
   lado, o textual andou e o de timeline não» já se defende sozinho e não vira critério.
3. **O teste de uma hipótese é o caso que ela PROÍBE.** A minha proibia «`fonte` dar
   `sem-mudanca`» — e foi exatamente isso que apareceu. Procure o caso proibido antes de entregar,
   não depois.
4. **Hipótese construída sobre SILÊNCIO é pior ainda.** As três cenas aqui caíram no mesmo buraco: o
   `consertar-cenas` registra `nota: "o agente respondeu mas não tocou no arquivo"` e **descarta a
   resposta**. Eu inventei a explicação porque o registro não tinha uma. *Onde falta registro, o
   raciocínio preenche — e preenche com o que você já achava.*

*Irmã da lei que a frente vertical escreveu no mesmo dia por caminho independente — «correlação
tirada de dois pontos é a reta que passa por quaisquer dois pontos». Duas frentes, dois casos, a
mesma doença. E parenta de [SIS-513]: lá o número errado confirmava a minha tese, aqui era a
explicação.*

---

## SIS-565 · Conserto aplicado num CONSUMIDOR não protege os irmãos — quando a doença é de família, o conserto é na família

> 🔀 **Nasceu como SIS-494 e foi renumerada para SIS-565 em 15/set/2026, PREVENTIVAMENTE.** Ela não
> colidia — mas foi numerada por LEITURA, antes de o alocador existir, e duas irmãs do mesmo lote
> (SIS-487→513 e SIS-488→514) colidiram com o `main` **na mesma tarde**, uma delas entre duas medições
> minhas. O número novo foi **reservado** pelo alocador antes desta linha. *Quem lê aposta; quem reserva
> não precisa voltar.*
**Dois casos, o mesmo defeito, 38 dias entre eles — e o segundo está escrito no comentário do
primeiro.**

**08/ago/2026 — `desenhar-cenas.mjs`.** O agente de arte respondia e não escrevia; a fila guardava
só a última linha da saída, que no `claude` headless é **sempre** o mesmo rodapé (`Warning: no stdin
data received in 3s…`). Resultado: **126 linhas `nao-escreveu` com notas idênticas** no
`dentro-do-sol`. O conserto foi **gravar a saída inteira** em `out/_despacho/` — e ficou **só ali**.

**11/set/2026 — `consertar-cenas.mjs`.** O mesmo defeito reapareceu na estação vizinha
(`s027-as-cinco-bacias` do `petroleo-foz-do-amazonas`: *«✗ s027 — Warning: no stdin data received in
3s»*, uma reprovação cuja causa não existia em lugar nenhum do disco). Quem consertou **escreveu no
próprio comentário**: *«o `desenhar-cenas.mjs` já tinha topado exatamente este defeito em 08/ago e o
consertou gravando a saída inteira. **O conserto ficou na casa do vizinho.**»*

**15/set/2026 — o mesmo arquivo, um degrau adiante.** A guarda escrita em 11/set era
`if (!r?.ok && !mexeu)`: gravava quando o agente **falhava** e calava justamente no caso em que ele
**responde bem e não mexe** — que é o `sem-mudanca` três linhas abaixo, no mesmo bloco. Três cenas do
`estreito-de-ormuz` caíram nesse silêncio no mesmo turno, e sobre ele construí uma hipótese errada
que foi entregue como achado e repassada ao dono ([SIS-564]).

**Why:** quem conserta vê **a instância que o mordeu**. O defeito, porém, é de uma *classe* —
«registrar falha sem a mensagem» — e a classe tem membros: outros consumidores do mesmo padrão,
outros ramos do mesmo `if`, outros estados do mesmo `switch`. **Consertar o membro deixa os irmãos
de pé**, e eles reaparecem como defeito novo, com sintoma diferente, semanas depois. Reconhecer o
parentesco em prosa — como fez o comentário de 11/set — **não conserta**: só documenta a próxima
vítima.

**A LEI:**

1. **Ao consertar, enumere os IRMÃOS antes de fechar.** Quem mais consome este padrão? Quais são os
   outros ramos desta guarda? Que outros estados caem no mesmo `else`? O conserto cobre a
   **classe**, não o caso.
2. **Se citar um conserto anterior no comentário, verifique se ele se aplica aqui — e aplique.**
   «Ficou na casa do vizinho» é um diagnóstico, e diagnóstico escrito sem conserto ao lado é
   [SIS-562] outra vez.
3. **Guarda com duas condições esconde metade do caso.** `!r?.ok && !mexeu` parece cobrir «deu
   errado»; cobre um quadrante de dois. Ao escrever uma guarda composta, **liste os quadrantes** e
   diga em voz alta o que acontece em cada um — o que não for tratado é escolha, não esquecimento.
4. **A prova do conserto é o irmão, não o caso.** Depois de consertar, teste o membro da família que
   *não* te mordeu: se ele ainda falha, você consertou uma instância.

*Parentesco: [SIS-514] (a lista do fallback ampliada rosto a rosto, sempre um atrás do `else`) —
mesma doença, na forma de código de erro em vez de ramo de guarda.*

---

## SIS-566 · Silenciar a saída é FABRICAR o morto-silencioso com as próprias mãos — `>/dev/null` num comando cuja falha só existe na saída (15/set/2026)

**Dois casos no mesmo turno, os dois meus, os dois porque eu fechei o canal que eu mesmo ia ler.**

**Caso 1 — o commit chamado «merge» que não é merge.** Rodei `git merge origin/main >/dev/null 2>&1`
no meio de uma cadeia. O merge não completou, e o commit seguinte entrou com o nome que eu já tinha
escrito. Medido no histórico:

```
d38348d50  pais=dd384a7ca              merge: origin/main — união das leis, com DUAS renumerações
cd2c51ae8  pais=d38348d50 2abe6efb0    merge: origin/main (19 commits) — o merge DE VERDADE
```

**Um pai contra dois.** O `git` nunca mentiu; a mensagem mentiu, e a mensagem é o que a próxima
pessoa lê para saber quando o `main` entrou. Foi preciso um segundo commit — o de baixo — para fazer
o que o de cima dizia ter feito.

**Caso 2 — `gh pr edit … >/dev/null`.** A edição do corpo do PR não aplicou. A ferramenta disse por
quê, na saída que eu havia jogado fora. Descobri **relendo o PR**, não pelo comando.

**Why:** um comando tem dois canais para reclamar — a saída e o código de saída. `>/dev/null 2>&1`
fecha o primeiro, e numa cadeia interativa ninguém interroga o segundo: ele existe, mas não é lido
por humano nenhum. **Com os dois calados, o comando que falhou é indistinguível do que funcionou** —
que é a definição exata do morto-silencioso. A diferença para o resto da família é constrangedora:
ali a ferramenta engole o erro; aqui a ferramenta grita e **quem tapa o ouvido sou eu**.

**A LEI:**

1. **Não silencie comando que MUDA estado.** `>/dev/null` é para leitura ruidosa (`ls`, `find`,
   `grep` de sondagem). Para `merge`, `push`, `edit`, `cp`, `rm` e afins, a saída é o recibo.
2. **Se precisar silenciar, interrogue o código na MESMA linha:** `cmd >/dev/null || { echo "FALHOU:
   cmd"; exit 1; }`. Silenciar sem o `||` é escolher não saber.
3. **Nome de commit é AFIRMAÇÃO, e se prova antes de escrever.** Vai chamar de merge? Então
   `git log --format=%p -1` tem de mostrar **dois pais**. Vale para «revert», «bump», «regenerado»:
   o verbo na mensagem é uma promessa sobre o que está no objeto.
4. **A prova de uma edição remota é reler o objeto remoto.** `gh pr edit` que sai 0 não prova corpo
   trocado; `gh pr view --json body` prova. O exit da ferramenta que escreve nunca é a prova do que
   foi escrito.

*Parentesco: [SIS-563] (`draft` é afirmação do autor — leia o corpo antes de integrar) e a família
inteira dos mortos-silenciosos. Aqui o autor do silêncio não é a ferramenta.*

---

## SIS-567 · Prova por IDENTIFICADOR não prova CONTEÚDO — 491 leis de um lado, 491 do outro, e 6 linhas apagadas dentro de uma delas (15/set/2026)

**A verificação passou, e estava errada.** Ao unir as leis deste ramo com o `main`, provei a união
comparando **quais leis existiam dos dois lados**:

```
leis no arquivo defeituoso : 491
leis no arquivo consertado : 491
SIS-487 presente nos dois  : True
veredito da prova por ID   : ✓ PASSOU
```

A mesma comparação **por linha, com contagem de ocorrências**, mostrou o que a primeira não podia
ver: **6 linhas, 477 bytes, desaparecidas de dentro da SIS-487** — a nota que o PR #303 tinha
acrescentado àquela lei. Nenhuma lei sumiu. Um parágrafo dentro de uma lei, sim.

⭐ **E o que sumia era a nota que diz «LER o próximo livre não RESERVA nada»** — exatamente a linha
que manda usar o alocador de IDs. A prova grossa apagou a doutrina sobre medir direito.

**Why:** toda prova tem uma **granularidade**, e ela é o tamanho do menor dano que a prova consegue
enxergar. Contar leis enxerga «lei sumiu» e é cega para «parágrafo dentro de lei sumiu», «número
trocado», «`não` virou `nem`». O caso normal de doutrina madura **não é lei nova: é emenda a lei
existente** — e emenda é invisível para qualquer régua que conte entidades. Pior: a prova por
entidade **parece mais rigorosa**, porque fala a língua do domínio.

**A LEI:**

1. **A régua de fusão é a LINHA, com contagem de ocorrências** (`Counter`, não `set`): linha
   repetida que perde uma cópia passa batido por conjunto.
2. **Antes de aceitar uma prova, pergunte qual é o menor dano que ela NÃO vê.** Se a resposta for
   «mudança dentro de uma entidade», ela não serve para unir documento.
3. **Fusão de arquivo compartilhado prova-se contra o `main`, não contra a intenção:** nenhuma linha
   não-vazia do `main` pode terminar com menos ocorrências no resultado.
4. **Substituição legítima se DECLARA na régua** — aqui, o rodapé de data e contagem que a
   regeneração do `_TODAS.md` troca por construção. O que não estiver declarado é suspeita, e
   suspeita se lista uma a uma, não se resume num total.
5. **Quando a prova passa e alguém ainda desconfia, a desconfiança vence a prova.** Foi uma leitura
   humana do diff que achou isto; a minha verificação automática dizia verde.

*Parentesco: [SIS-510] (prova vazia — a suíte que não exercia a mudança). Lá a prova não tocava o
alvo; aqui tocava o alvo com a régua grossa demais para enxergar o dano. Os dois saem verdes.*

---

## SIS-568 · Conferir no destino exige perguntar QUAL destino — a régua certa, apontada para um commit velho, devolve o veredito errado com cara de rigor (15/set/2026)

**Duas frentes, o mesmo dia, o mesmo erro em espelho.**

**A coordenação, medindo o destino certo no commit errado.** A régua estava impecável — *«o diff
mostra os dois lados e parece movimentação; só o arquivo final responde»* — e ela mediu o arquivo
final em `04826f9c`, **um commit antes** do conserto `7159f42d`, que havia sido empurrado minutos
antes e cruzado com a mensagem dela. O laudo dizia «a nota sumiu». A nota estava lá.

**Eu, com o `main` andando entre duas medições minhas.** Os IDs das leis deste lote foram **lidos**
do `main` e usados horas depois. O `main` andou **três vezes** nesse intervalo, e uma das colisões
nasceu entre duas leituras minhas com **minutos** de diferença: ao abrir o merge ele ia até 486; ao
conferir o resultado, já havia uma 487.

**Why:** «meça no destino» resolve **onde** olhar e não resolve **quando**. Num repositório com
várias frentes o destino é alvo móvel, e entre formular a pergunta e rodar o comando ele anda. O
erro é traiçoeiro porque **a medição é perfeita**: comando certo, arquivo certo, régua certa — só o
ponteiro é velho. Um resultado assim não tem cara de engano; tem cara de prova. E leva a frente a
desfazer um conserto correto, que é o pior desfecho possível de uma verificação bem-feita.

**A LEI:**

1. **Toda medição publica o commit em que foi feita.** Número sem SHA ao lado não é medição, é
   lembrança — e lembrança envelhece em minutos quando há frentes paralelas.
2. **Antes de concluir contra o que outra frente acabou de afirmar, `git fetch` e refaça no `HEAD`
   de agora.** Custa segundos; a conclusão errada custa um turno de ida e volta.
3. **Resultado que contraria alguém tem, como primeira hipótese, DEFASAGEM — não erro do outro.**
   Pergunte «em que commit você mediu?» antes de «você errou?».
4. **Valor lido para ser usado depois não se lê: se reserva.** ID livre, próximo número, contagem de
   fila — leitura é retrato, reserva é posse. [SIS-487]
5. **Mensagens cruzadas são o sintoma.** Quando a resposta chega falando de um estado que você já
   mudou, o problema não está no conteúdo dela: está no relógio. Releia antes de responder.

*Parentesco: [SIS-487] (ler não reserva) e [SIS-567] (a régua certa na granularidade errada). Três
maneiras de errar verificando: o instrumento errado, a régua grossa, e o relógio parado — e as três
saem com cara de laudo.*

## SIS-571 · Teste que só passa onde o binário existe prova a MÁQUINA, não o código — e o verde some quando a CI o roda (15/set/2026)

**Medido na CI, em `insumo-render-parcial`.** Dois casos caíam com `render_store_failed`
(`render-output-binding.mjs:16`) no runner do GitHub e passavam em qualquer máquina daqui. A causa
não era o teste: `publicarInsumoRender` era o **único ponto do módulo sem a costura de `store`** —
`estadoRemotoRender` e `materializarClipesRender` já a expunham — e o padrão do parâmetro abre o
`gcloud` REAL. O runner instala `apparmor-profiles bubblewrap ffmpeg libxml2-utils ripgrep zip
socat`, e **não instala `gcloud`**.

A prova de que a fronteira era o binário, e não a lógica: dos quatro casos do arquivo, os **dois que
esperam RECUSA passavam na CI** — o plano é rejeitado antes de chegar ao store. A linha que separava
verde de vermelho era exatamente *«chega ou não ao bucket»*.

**Why:** o dano não é o vermelho — é o VERDE que existia antes dele. Enquanto só rodou onde o
binário está instalado, aquele verde afirmava «o handoff está correto» e entregava «esta máquina tem
gcloud». São frases diferentes, e a segunda não protege ninguém. Pior: um teste assim **chama a
ferramenta de verdade**, então ou fala com a produção, ou depende de credencial, ou some quando a
rede cai — e passa a reprovar por motivos que nada têm a ver com o código julgado. É o mesmo defeito
do [SIS-485] visto do outro lado: lá a capacidade era órfã com teste verde; aqui o teste é órfão do
ambiente em que o código roda.

**A LEI:**

1. **Todo IO externo entra por costura injetável, e o ponto de ENTRADA também.** Não basta o módulo
   expor `store`/`executar`/`fetch` nas funções internas: a função que o teste chama precisa
   repassar. Um único ponto de entrada sem a costura anula a de todos os outros.
2. **O padrão do parâmetro continua sendo o real.** A produção não muda de comportamento; quem dubla
   é quem testa. Costura não é modo de teste ligado por variável de ambiente.
3. **Antes de aceitar um verde, pergunte qual FERRAMENTA ele encontrou.** Rode uma vez com a
   ferramenta escondida (`TOP10_GCLOUD_BIN=/nao/existe/…`, `PATH` recortado). Se o veredito muda, o
   teste estava medindo a máquina — e a CI vai dizer isso mais tarde, mais caro.
4. **A lista do `gates.yml` é o contrato do que EXISTE no runner.** O que não está lá não pode ser
   alcançado por teste: `gcloud`, `gsutil`, `docker`, credencial de nuvem, rede. Precisar deles é
   sinal de costura faltando, nunca pedido de instalação nova.
5. **Um teste que fala com o bucket de produção é defeito mesmo quando passa.** Leitura hoje,
   escrita amanhã — e o dia em que o dublê faltar é o dia em que a suíte mexe no que é do dono.

*Parentesco: [SIS-485] (capacidade órfã COM teste verde) e a doutrina das duas máquinas no
`CLAUDE.md` — o defeito que não aparece onde foi escrito. Aqui ele aparece ao contrário: nasce
verde no Mac e só a CI o desmente.*

## SIS-572 · Mutante que sobrevive prova o ESCOPO de quem o rodou — não ausência de cobertura (15/set/2026)

**Refina a [SIS-486]**, que manda o contrário quando lida ao pé da letra: *«"árvore suja" e "mutante
sobreviveu" pedem ações opostas — a primeira é `git checkout`, a segunda é escrever teste»*. Está
certa para quem ESCREVE uma prova por mutação, e vira conselho errado para quem INTERPRETA um
sobrevivente encontrado por acaso.

**O caso.** Ao consertar o palco do `consertar-cenas-focal` [SIS-571], rodei um segundo mutante para
saber se o módulo recém-declarado era de fato exercido: quebrei `causaDaSaida` para devolver lixo
constante. **Os 32 casos seguiram verdes.** Escrevi no PR que a cobertura não existia e deixei o
«débito» registrado para alguém pagar. A Holding ofereceu o trabalho. Fui medir antes de aceitar:

  · `causa-da-saida.test.mjs` (6 casos) ....... mata: **6 de 6 reprovam**
  · `fila-correcao.test.mjs` (13 casos) ....... mata: **4 reprovam** (o consumidor, `notaDoSemMudanca`)
  · os 4 arquivos de FLUXO (50 casos) ......... não matam — e está certo assim

A cobertura estava no lugar certo o tempo todo: no teste do próprio módulo e no do consumidor. Os
arquivos de fluxo julgam claim, fence, pagamento e retomada; afirmar ali o texto da causa duplicaria
a régua em quatro lugares — exatamente a doença que o `causa-da-saida.mjs` foi criado para matar.

**Why:** «este arquivo não cobre X» e «X não está coberto» são frases diferentes, e a primeira se
escreve com facilidade no formato da segunda. O erro é caro dos dois lados: ou alguém paga um teste
redundante (aqui, um Chrome de fixture para reafirmar o que dois testes baratos já garantem), ou
pior, alguém enfraquece a divisão de responsabilidades para «cobrir» num lugar o que já está coberto
noutro. Um sobrevivente é informação sobre **o denominador que você escolheu**, não sobre o universo.

**A LEI:**

1. **Sobreviveu? Pergunte primeiro QUEM teria motivo para matá-lo.** O teste do módulo, o do
   consumidor direto — e só então os de fluxo. Débito só se declara depois de rodar contra essa
   suíte, não contra o arquivo que estava aberto na sua frente.
2. **Mutante sobrevivente num arquivo de FLUXO é o esperado, não o alarme.** Fluxo julga orquestração;
   comportamento de regra se julga onde a regra mora. Cobrar as duas coisas no mesmo lugar é criar a
   segunda cópia da régua.
3. **Ao relatar, escreva o escopo junto do resultado:** «o mutante sobreviveu EM `<arquivo>`», nunca
   «o mutante sobreviveu». A frase sem escopo vira dívida no caderno de outra pessoa.
4. **Retirar débito que você mesmo anunciou é entrega, não recuo** — e se corrige em voz alta, no
   mesmo lugar onde a afirmação foi publicada.

*Parentesco: [SIS-486] (a prova por mutação e as duas provas complementares), [SIS-571] (o verde que
media a máquina) e a régua de validar o detector num caso positivo — a mesma família: o instrumento
responde sobre si, e quem lê acha que responde sobre o mundo.*

## SIS-574 · Comparação entre worktrees medida em HORAS DIFERENTES não separa código de carga — ela mede o dia (15/set/2026)

**Irmã da [SIS-572]**, do outro lado do mesmo defeito: lá o denominador escolhido respondia pelo
universo; aqui é o INSTANTE escolhido que responde pelo código.

**O caso.** Ao ligar o perfil por turno no diagnóstico de teto, rodei a vizinhança de 29 arquivos no
meu ramo e vi **5 rodadas com vermelho em 7**. Tinha, do começo da noite, uma medição do `main`
limpo: **1 vermelho em 8 rodadas**. Comecei a escrever que a minha mudança causava intermitência —
a mudança mexe no caminho quente do stdout de toda inferência, e a explicação era plausível demais
para eu duvidar dela.

**Os dois controles que a derrubaram, e são o método:**

1. **Troque o CÓDIGO, não a worktree.** Pus o `cascata.mjs` do `main` dentro da MINHA worktree e
   rodei: **1 vermelho por rodada, em 6 de 6**. Se o vermelho continua com o código do outro lado,
   não é o código — é o lugar ou a hora.
2. **A/B INTERCALADO, na mesma janela.** Quatro pares alternando `main` e ramo, um atrás do outro:
   **0 e 0**, dos dois lados. A intermitência tinha ido embora — junto com a carga da máquina, que
   àquela altura já tinha terminado as minhas próprias rodadas paralelas.

Os dois testes sensíveis a carga têm nome, e quem os vir vermelhos amanhã não precisa refazer esta
investigação: **`cascata-teto-exit0`** e **`cascata-teto-nao-e-cota`**. Ambos julgam corte de relógio
contra exit code; sob máquina disputada, a fronteira que eles medem se move.

**Why:** taxa de falha é uma TAXA — e taxa medida em duas janelas diferentes compara dois dias, não
dois códigos. Numa casa com dezenas de sessões paralelas, a carga muda em minutos: a mesma suíte que
dá 1 em 8 às 22h dá 1 por rodada às 23h30, com byte idêntico. O erro é caro porque a conclusão
errada é a CONSERVADORA — «a minha mudança quebrou algo» soa responsável, e leva a desfazer um
conserto correto ou a gastar um turno perseguindo um defeito que não existe.

**A LEI:**

1. **A/B de intermitência se faz INTERCALADO e na mesma janela.** Rodada de A, rodada de B, de novo
   A, de novo B. Sequências separadas por uma hora não são comparáveis, por mais rodadas que tenham.
2. **O controle que exonera vem antes do relatório que acusa.** Antes de escrever «a minha mudança
   causou», rode o código do outro lado NO SEU lugar. É barato e decide.
3. **Troque uma variável por vez, e confirme QUAL você trocou.** O meu primeiro controle foi
   inconclusivo e eu quase o contei como prova: desliguei o registro por turno e deixei a divisão de
   linhas no caminho quente — testei outra coisa, não a que estava na hipótese.
4. **Teste sensível a carga se declara pelo nome**, na lei ou no próprio arquivo. Sem isso, cada
   sessão que o encontra vermelho refaz a investigação inteira do zero.
5. **Intermitência não se reporta sem n e sem janela.** «Falhou 5 vezes» não é medição; «5 de 7
   rodadas, entre 23h10 e 23h40, com a máquina rodando outras duas suítes» é.

*Parentesco: [SIS-572] (o escopo de quem rodou o mutante), [SIS-568] (medir no destino certo, no
commit errado) e [SIS-486]. A família toda tem a mesma assinatura: o instrumento respondendo sobre
si mesmo, e quem lê achando que ele respondeu sobre o mundo.*

## SIS-575 · Idempotência de upload se prova por CONTEÚDO, não por nome de destino (15/set/2026)

**O caso.** O coletor de pós calcula o destino com o carimbo do **mtime** do arquivo, e sobe com
`gcloud storage cp --no-clobber`. O `petroleo-foz-do-amazonas-pos.mp4` — **39,7 GB** — já tinha sido
subido à mão, horas antes, para `entregas/2026/petroleo-foz-do-amazonas/pos-premiere-20260916/`:
outro carimbo, outro caminho. `--no-clobber` olhou o caminho novo, não viu colisão nenhuma, e a
coleta teria subido os 39,7 GB **de novo** — sem erro, sem aviso, com cara de trabalho feito.

**Why:** `--no-clobber` responde *"já existe um objeto NESTE endereço?"*. A pergunta que evita
duplicata é outra: *"estes bytes já estão no bucket?"*. Um destino derivado de carimbo, hash ou
versão muda a cada execução — então a proteção por caminho protege exatamente nada. E o custo não é
só armazenamento: é banda de upload de casa, que na pós de vídeo se mede em dezenas de GB.

**A LEI:**

1. **Antes de subir, procure o CONTEÚDO** no prefixo onde ele moraria — tamanho igual **e** hash
   igual (CRC32C sempre; MD5 quando o objeto o tem, porque upload composto não guarda MD5).
   Achou: não suba, e registre no recibo a URL da cópia que já existia.
2. **Filtre por TAMANHO antes de hashear.** A listagem já traz o tamanho; hashear 39,7 GB para
   descobrir que não havia candidato é gasto puro. Hash só entra quando há do que desconfiar.
3. **`--no-clobber` continua valendo** — como rede de segurança do mesmo caminho, nunca como prova
   de que não há duplicata.
4. **Cópia em OUTRO prefixo não dispensa a subida** (o lugar certo vale a redundância), mas
   **entra no recibo**: sem isso um arquivo com backup noutro canto parece órfão, e quem ler daqui a
   um mês decide errado.

*Parentesco: [SIS-158] (a verificação é a leitura do destino AGORA, não o registro de que um dia
subiu) e a régua de que ausência no bucket costuma ser prefixo errado — as três são a mesma família:
o endereço não é o objeto.*

## SIS-578 · O verificador tem de fazer a pergunta que o CONSUMIDOR faz (16/set/2026)

Um verificador responde a uma pergunta. Se não for a **mesma** que o consumidor do artefato faz, ele
devolve verde sobre uma realidade que não existe — e verde falso é pior que verificação nenhuma,
porque autoriza a seguir.

**Medido numa noite, no mesmo instrumento, TRÊS vezes.** O `preflight-entrega.mjs` nasceu para
responder *«a entrega pode sair completa?»*, e errou a pergunta três vezes seguidas, sempre medindo o
que era fácil medir:

| o que eu media | o que o consumidor pergunta | o que saiu |
|---|---|---|
| o nome do arquivo sob `out/<slug>/` | as peças de canal moram em `assets/` | 5 arquivos «faltando» que estavam na mesma máquina |
| o nome, tendo o caminho na mão | o `<pathurl>` DECLARA onde o arquivo está | **18 faixas dadas como inexistentes em máquina nenhuma da casa** — estavam na pasta de trabalho do Premiere, exatamente onde o XML dizia |
| o arquivo está no disco? | `entregar.mjs` resolve pela FORMA do caminho (`/out/<slug>/`) | ia declarar «pode entregar completo» um pacote que a entrega **recusa inteiro** |

O terceiro é o mais caro, e é o que nomeia a lei: o consumidor nem olha se o arquivo existe. Ele
extrai o trecho portátil do caminho, e o que não tem essa forma vira `externo` — categoria que sai do
pacote **em silêncio**, porque `externo` não é `faltando`.

**Why:** cada uma das três medições estava correta sobre a pergunta que ela fazia. Nenhuma estava
correta sobre a pergunta que importava. É a mesma família de [SIS-576] (medir o caminho que EXECUTA,
não o artefato) vista do outro lado: lá o instrumento olhava o lugar errado; aqui ele olha o lugar
certo e pergunta a coisa errada.

**A LEI:**

1. **Antes de escrever um verificador, leia o CONSUMIDOR** — a função que de fato decide, não a
   documentação dela. A pergunta do verificador é a pergunta daquele código, escrita nos termos dele.
2. **Pergunte ao artefato onde as coisas estão, em vez de supor.** O `<pathurl>`, o manifesto, o
   recibo: eles DECLARAM o endereço. Descartar a declaração e procurar no lugar imaginado é fabricar
   ausência com o instrumento ([SIS-166]).
3. **Categoria que sai do resultado em silêncio é defeito, não desenho.** `externo`, `ignorado`,
   `não se aplica`: ou resolve, ou vira ausência declarada COM o caminho.
4. **Instrumento consertado que continua reprovando é instrumento em que se pode confiar.** Se o
   conserto acende o verde, desconfie dele antes de comemorar: aqui, os três consertos mantiveram o
   veredito «não pode entregar completo agora», e foi isso que provou que eram honestos.

*Parentesco: [SIS-576] e [SIS-166]. A frase curta, para o caderno: **o verificador herda a pergunta
do consumidor; inventar a própria pergunta é inventar o resultado.***

### SIS-580 · Medida única sobre TEXTO DE CÓDIGO erra sempre para um lado — conte pelas duas e leia o que sobra (16/set/2026)

**A lei:** para responder *"este arquivo é USADO por esta cena?"* não existe uma regex certa. As duas
formas óbvias erram em **direções opostas**, e as duas parecem funcionar:

- **casar o nome no texto inteiro** conta **comentário** — e comentário é onde a casa documenta
  justamente o que NÃO foi usado;
- **casar só `src=` / `href=` / `url()`** perde **uso por JavaScript** — caminho montado em variável,
  template ou constante.

Então: **meça pelas duas**, trate a diferença como a lista de casos a abrir, e **leia o contexto** de
cada um antes de afirmar. O número verdadeiro é o que sobra depois da leitura, não o que a regex
devolveu.

**Os dois casos que a fixaram, no mesmo levantamento de direitos (16/set/2026):**
- `megabarragem-himalaia`: a única ocorrência da mídia **CC BY-ND** estava num **comentário** que
  dizia `é PROVA INTERNA`. A medida frouxa acusou uso em cena e **eu levei o susto ao dono** antes de
  ler o arquivo. Não havia uso nenhum.
- `o-acre-o-estado-que-o`: o mapa **CC BY-NC-SA 3.0** entra por `const SCAN="../_media/s07-mapa-1890.jpg"`,
  em `graphics/s07-mapa-epoca-sec19.html:74`. A medida estrita **não viu** e teria inocentado o único
  caso que era real — o que virou decisão do dono.

**Como se aplica:** o laudo declara QUAL medida produziu cada número; divergência entre as duas é
*trabalho a fazer*, não ruído; e nenhum caso vira afirmação sem alguém abrir o arquivo. *Medição que
não diz como mediu é opinião com número.*

⚠️ **E a mesma lei pegou quem a escreveu, no mesmo dia — por uma porta vizinha: FERRAMENTA QUE ERRA DE
ALVO SAI ZERO SEM RECLAMAR.** O gerador de créditos recebeu um argumento a mais
(`node espalhar.js x arquivo destino`), leu o arquivo ERRADO e devolveu **7 slugs «sem bloco», com
exit 0** — nenhuma linha de erro, nenhum arquivo escrito, e o laço seguinte tratando isso como
"aqueles não tinham crédito a gerar". *Zero produzido por alvo errado é indistinguível de zero
verdadeiro* — e é a mesma família da ausência produzida pelo instrumento. A trava é barata: quem
gera em lote **conta o que entrou e o que saiu** e compara (`21 pedidos · 21 blocos · 0 vazios`); se
a conta não fecha, o lote FALHA em vez de entregar silêncio.

⚠️ **Parentesco, e é a parte que generaliza:** neste mesmo dia, quatro números meus saíram errados
pelo mesmo motivo de fundo — **classificador léxico rodando sobre dado estruturado**. Além dos dois
acima: um parser que engoliu **57% dos manifestos** sem reclamar (131 lidos, 56 interpretados), e um
contador que tratou **chave de estrutura** (`_meta`, `subnacionais`, `adicoes`) como se fosse arquivo
de mídia. Os quatro se consertaram do mesmo jeito: **ler a entrada inteira**, e **declarar quantos
itens caíram fora** — sem esse campo, 56 de 131 passa outra vez. Ver [SIS-448] (medir no lugar
declarado em vez do medido) e a família de [`ausência é PRODUZIDA pelo instrumento`].

### SIS-582 · Classificador LÉXICO sobre dado ESTRUTURADO: grep propõe, leitura pelo esquema decide (16/set/2026)

**A lei:** quando o dado tem ESQUEMA — JSON de procedência, manifesto, HTML —, a pergunta *"este item
é X?"* se responde lendo o CAMPO que significa X, nunca procurando a palavra no texto. **Grep é
ótimo para achar CANDIDATOS e péssimo para DECIDIR.** A busca por palavra não sabe em que campo caiu,
nem se a frase em volta afirma ou NEGA o que a palavra sugere.

**Cinco artefatos numa noite, do levantamento de direitos — e cada um errou numa direção diferente:**
1. **ausência produzida pelo instrumento** — o parser concatenava manifestos e o separador quebrou:
   **131 lidos, 56 interpretados**, 57% fora *sem erro e sem aviso*. Saiu um número menor e plausível;
2. **a palavra contra a frase** — `NC` casado dentro de licenças que **autorizam** uso comercial
   (SDO: «sem copyright, non-commercial purposes are strongly encouraged»; DeepStateMap: «for both
   commercial and non-commercial purposes»). Alarme levado ao dono, e falso;
3. **o contexto sintático ignorado** — o nome do arquivo achado no HTML estava num **comentário** que
   dizia `é PROVA INTERNA`: documentação do que NÃO foi usado, lida como uso;
4. **o esquema ignorado** — `_meta`, `subnacionais` e `adicoes` são **chaves de estrutura** do
   manifesto e foram contadas como arquivos de mídia («17 mídias com licença vazia» que não existem);
5. **a negação lida como afirmação** — `a_confirmar` casado num campo cujo texto dizia literalmente
   *"RESTRITIVA E DECLARADA (não é 'a_confirmar')"*.

⚠️ **E o sexto caso veio de FORA do código, o que mostra o alcance da regra: `HTTP 429` não é
ausência, é RITMO.** Na recuperação de autores de 16/set, 37 de 152 mídias voltaram sem autor porque
a API limitou a taxa — e gravar isso como «autor desconhecido» teria publicado 37 créditos
incompletos por causa de um limite de requisição. Retomadas com espera crescente, as 37 voltaram com
autor. *A régua «vazio não é ausência» vale para código de status também: `429`, `503` e `timeout`
são «pergunte de novo», nunca «não existe».* Só `404` e um campo declarado vazio são ausência.

**A cura foi a mesma nas cinco: abrir e ler a entrada inteira.** E há um corolário que vale sozinho:
**toda contagem declara quantos itens caíram fora.** `131 lidos · 131 interpretados · 0 ilegíveis` é o
que prova que a leitura foi completa; sem esse campo, 56 de 131 passa de novo e parece resposta.

**Como se aplica:** grep para levantar candidatos → leitura por esquema para decidir → o laudo diz
QUAL medida deu cada número e quantos itens foram descartados. Ver [SIS-580] para o caso particular
(uso de arquivo em cena, onde as duas regexes erram em direções opostas) e a família de
*ausência é PRODUZIDA pelo instrumento*.

⚠️ **E o de-para do dia:** cinco achados, nenhum chegou ao dono como fato — o único que sobreviveu à
releitura (o mapa CC BY-NC-SA do Acre, em cena) virou decisão dele. *Número que não sobrevive à
leitura do contexto não era achado; era ruído com casas decimais.*

### SIS-592 · Lista que um contador lê tem SIGNIFICADO, não só forma — registro de script no formato da tentativa de agente vai para lista própria (16/set/2026)

**O caso.** Ao ligar a busca no acervo livre à estação de insumos (desenho do #341), o desenho pedia
*«uma linha por FONTE consultada em `tentativas[]`»*, e o autor da etapa tinha escrito, com razão:
*«um segundo formato para a mesma pergunta seria a doença»*. A forma da linha já existia
(`{quando, fonte, agente, conta, turnos, resultado, erro, evidencia}`). Pôr as dez linhas da busca
ali parecia a coisa certa.

**Medido antes de escrever:** `tentativas.length` é lido por quatro consumidores, e para todos ele
significa **«sessões de agente»**:
- `insumos.mjs:782` — necessidade `bloqueado` com `>= TETO_TENTATIVAS` (**3**) deixa de ser re-selecionada;
- `insumos-executor.mjs` — gira a fonte da lista alternativa e numera a tentativa pela contagem;
- `insumos.mjs` — o prompt mostra as últimas `TETO_TENTATIVAS` linhas como «já tentado antes»;
- `scripts/lib/insumos-alarme.mjs` — «nunca tentada» é `tentativas.length === 0`.

Com as dez linhas ali, **UMA** falha de agente somaria 11, e a necessidade nunca mais voltaria à
fila — encerrada por retentativas que nenhum agente fez. O prompt mostraria ao agente três linhas de
script no lugar do histórico dele. E o alarme diria «tentada» sobre necessidade que nenhuma sessão
tocou. Nenhum teste existente pegaria: nenhum tinha `spec.termos`, que é o gatilho da busca.

**O conserto:** mesma FORMA, lista PRÓPRIA — `buscas_livres[]`. O formato continua um só (a
preocupação do autor estava certa); o que não se compartilha é a lista que um contador interpreta.
Teste e mutante: `insumos-acervo-livre.test.mjs` — com as linhas em `tentativas[]`, cai.

**A régua, e ela vale para qualquer registro:** antes de acrescentar a uma lista existente, pergunte
**quem conta essa lista e o que a contagem decide**. Formato igual é condição necessária para
compartilhar a lista, não suficiente. *Um contador não lê o formato; lê o significado que alguém lhe
deu num `if` a trezentas linhas dali.*

## SIS-581 · Empacotador que deriva de IMPORT leva o código e deixa o DADO para trás (16/set/2026)

`scripts/localizacao/release.mjs` decide o que viaja pelo **fecho transitivo dos imports** entre os
entrypoints. Isso é correto para código e **cego para dado**: não existe `import` de um `.json` que
se abre com `readFileSync`.

Medido em 16/set/2026. `scripts/lib/urgencia.mjs` entrou na release por import; o
`infra/prioridades-fixas.json` que ele lê **não entrou**, e os dois works en-US carregavam
`diagnostics: [{code: 'ENOENT', …}]` em todo tick. **Nada quebrava** —
`carregarPoliticaUrgencia` degrada para política VAZIA e segue, por desenho («erro de política fica
visível; não paralisa trabalho normal») — e o aviso morava num campo de diagnóstico que ninguém lê.

⚠️ O que isso custava não é cosmético: aquele arquivo é a **única** forma de dizer «este vídeo na
frente», porque `fila.mjs set` de `prioridade` é recusado de propósito (a fila é derivada e a
regeneração sobrescrevia o campo). Sem ele na release, uma ordem do dono sobre a fila EN não teria
efeito nenhum, em silêncio. *Não achamos um caso em que isso aconteceu; achamos a porta aberta e a
fechamos.*

**Why:** o empacotador responde «de que código este código depende?». A pergunta que importava era
«de que ARQUIVOS este processo precisa para rodar?». As duas coincidem enquanto tudo é import, e
divergem em silêncio no primeiro `readFileSync`.

**A CURA JÁ EXISTE NESTA CASA, NUM MÓDULO AO LADO — a lei pede imitação, não invenção:**

| | `agent-methods.mjs` | `scripts/lib/urgencia.mjs` |
|---|---|---|
| origem | módulo com **dono de pacote** | **emprestado** de `scripts/lib/` |
| dados | declarados em `INNER_PATHS` | nenhum lugar os declara |
| prova | hash por arquivo + manifesto | nenhuma |
| no destino | os 4 arquivos dele estão em `localization-agents/` na release de produção | ausente |

**A LEI:**

1. **Módulo que lê dado DECLARA o dado que lê**, na mesma lista em que o pacote é montado — como
   `INNER_PATHS` faz. Dado sem declaração é dado que não viaja.
2. **Módulo emprestado de outra árvore traz o código e deixa o dado para trás.** Ao puxar um módulo
   de `scripts/lib/` (ou de qualquer árvore que não é a do pacote) para dentro de uma release,
   pergunte o que ele ABRE, não só o que ele importa.
3. **Degradação silenciosa exige leitor.** «Não paralisa trabalho normal» é desenho legítimo; o que
   não é legítimo é o aviso morar num campo que nenhum gate lê. Ou alguém consulta o diagnóstico, ou
   a degradação é invisível por construção.
4. **O censo se faz pelo DESTINO.** Contei 7 (olhando só `RELEASE_FILES`, ignorando que
   `release.mjs:130` soma quatro fontes), depois 5 (ignorando o pacote de métodos), e a resposta é
   **1** — provada procurando arquivo por arquivo na release de produção. Os dois controles (um caso
   que TEM de aparecer, um que NÃO pode) rodaram antes de qualquer número ser dito.
5. **Declare o limite do instrumento.** Este censo só vê caminho **literal**; dado montado
   dinamicamente escapa dele. Número sem o limite ao lado parece mais forte do que é.

*Parentesco: [SIS-578] (o verificador herda a pergunta do consumidor) — aqui o empacotador herdou a
pergunta errada. A frase curta, para o caderno: **o que o processo ABRE não está no que ele
IMPORTA.***

## SIS-594 · O que você LEU descreve uma peça; só a EXECUÇÃO descreve o conjunto

Em 15/set/2026 três frentes cometeram o mesmo erro, em três roupas diferentes, no mesmo dia — e as
três o pegaram só porque outra frente foi medir em vez de aceitar a afirmação. A lei é a que sobra
depois de tirar as roupas.

**Nos três casos alguém leu uma DESCRIÇÃO verdadeira e concluiu algo falso sobre o CONJUNTO.** As
três descrições estavam certas sobre o que descreviam. O erro não foi de leitura: foi de escopo.

### As três roupas

| o que foi lido | o que se concluiu | por que era falso |
|---|---|---|
| **a ficha da máquina** no `CLAUDE.md` (e2-standard-16) | «todo limiar de load da casa usou o denominador errado» | o `regulador.mjs:186` **deriva** `os.cpus().length` em tempo de execução, e os limiares são razões por núcleo. **O 16 vivia só na prosa; o mecanismo nunca leu o documento.** |
| **a autodescrição de um módulo** — `quota/ler.mjs:5`, *"Este processo não mede cota"* | «saldo de janela não é mensurável, não dá para racionar» | `ler.mjs` é o **projetor**. Quem mede é `quota/cota.mjs`, por timer de 20 min, nas duas janelas, com `pct`+`reseta`+`status` por conta, gravado em `var/estado/quotas/cota.json`. **A capacidade estava viva no disco.** |
| **oito testes verdes** sobre `recursoDe()` (PR #294) | «a trava por conta está provada» | a função aparecia **uma vez no arquivo: a própria definição**. Testar a função não é testar o caminho — [SIS-485]. |

O custo não foi simétrico. O primeiro quase cravou na doutrina mais lida da casa um número
retroativo errado **com cara de correção auditada**. O segundo **derrubou um pedido que estava
certo**: quem o fez recolheu a encomenda, e o desenho passou duas horas apontando para uma solução
pior. O terceiro reprovou um PR — o mais barato dos três, porque a revisão existia.

### ⚠️ O agravante comum: a citação dá à conclusão errada a aparência de medição

Os três erros vieram **com fonte**: arquivo e linha, ou contagem de testes. É isso que os torna
convincentes — quem recebe vê a citação, confere que ela existe, e não volta a perguntar. **Uma
conclusão errada com referência é mais cara que uma sem**, porque dispensa a próxima pessoa de olhar.

### Como aplicar

**Antes de afirmar algo sobre o CONJUNTO a partir de algo que você LEU, procure o verbo — não o
arquivo que você abriu.** Três buscas, em ordem de custo crescente, e quase sempre a primeira basta:

1. **o diretório inteiro** (`ls scripts/quota/` mostrava `cota.mjs`, `admissao.mjs`, `painel.mjs`);
2. **o registro ou contrato** (`infra/contas-oauth.json` declarava `quota_measurement` em letras claras);
3. **o estado no disco ou a execução** (`var/estado/quotas/cota.json` existia, com dado do dia anterior).

E, para capacidade nova, a forma executável da lei: **sabote a peça e exija que o conjunto fique
vermelho.** Se ficar verde, o que você provou foi a peça.

⛔ **Negativa sobre capacidade merece o mesmo rigor de uma afirmação, e mais cuidado quando alguém a
PEDIU:** quem pede abandona o pedido, e ninguém volta a levantá-lo. Dizer «não dá» sem procurar o
verbo custa mais caro que dizer «não sei».

*Destilada com a Holding e a frente de túnel/stock, que cometeram e pegaram as outras duas. A
terceira roupa tem lei própria em [SIS-485].*

## SIS-597 · Carimbo que sobrevive à causa vira ORDEM: o motivo de um bloqueio é reescrito a cada avaliação, nunca herdado (16/set/2026)

**O caso, em dois lugares no mesmo dia (15/set/2026, série vertical):**

1. **`vertical-brasil-portugues`.** A linha carregava `bloqueio: {tipo: "interrompido", tentativas: 3,
   marco: 341}` e um `notas_motor` escrito às **23:12** descrevendo uma causa que **já estava resolvida**
   quando eu li (o `var/verticais/` que travava a guarda de worktree tinha sido esvaziado). Eu li o
   carimbo, montei uma hipótese em cima dele (procurei a worktree pelo nome sem prefixo — errado) e
   só derrubei a hipótese **medindo a seco**: a worktree existia, com ramo próprio; o que travava de
   verdade era **1 commit próprio não integrado** (`frente: 1, atras: 41`). A guarda estava certa.
   O texto do carimbo é que mentia — não por má-fé, por idade.
2. **`vertical-rosto-da-formiga`.** Às 23:13Z eu relatei a série como *«bloqueada por alteração de
   código real nunca integrada»* — lendo o bloqueio gravado na linha. Às **23:27:36Z** ela voltou
   sozinha, *«retomado: worktree voltou a estar em dia com a release»*, um minuto ANTES de o corte
   com o #308 entrar em produção. O que a destravou foi a **causa** ter sumido (`var/verticais/`
   vazio), não conserto nenhum — e eu quase creditei o #308 pela terceira vez. O carimbo que eu tinha
   lido descrevia um estado que a guarda, ao reavaliar, já não via.

**A doença é uma só:** o motivo gravado numa linha é uma **fotografia** de quem avaliou naquele
instante. Quem lê depois — o próprio motor na passada seguinte, a faxina, uma sessão diagnosticando,
a Holding decidindo — trata a fotografia como se fosse o presente. E o motor, obedecendo ao rótulo em
vez de à causa, mantém parado o que já poderia andar (ou solta o que já deveria parar). *Carimbo que
sobrevive à causa vira ordem.*

**A LEI:**

1. **O motivo é reescrito a cada avaliação, nunca herdado.** Toda passada que decide sobre uma linha
   bloqueada **recalcula** a condição e grava o motivo **desta** avaliação, com carimbo de tempo. Se
   a condição sumiu, o bloqueio sai na mesma passada — sem depender de alguém ler o texto velho.
2. **Motivo herdado é hipótese, e hipótese não bloqueia produção.** Um texto de bloqueio com
   carimbo mais velho que a última avaliação é **pista para medir**, nunca fato para citar. Quem o
   repete num relatório sem re-medir está relatando o passado com verbo no presente.
3. **Todo bloqueio carrega `tipo` + `marco` + `em`** (tipo da causa, o ponto da fila em que foi
   avaliado, quando). Bloqueio sem os três não diz se ainda vale — e é exatamente o caso que o
   desenho da fila viva (`docs/plans/2026-09-15-fila-viva-no-banco.md`, §3, `motivo_codigo` /
   `motivo_texto` / `rampa_em`) existe para tornar impossível: o **código** do motivo é o que o motor
   testa; o **texto** é para gente; e a **rampa** é quando se reavalia, não «quando alguém lembrar».
4. **Não credite destravamento a conserto sem prova de sequência.** Se a linha voltou ANTES de o
   conserto entrar em produção, o conserto não a destravou — a causa é que sumiu. Compare o
   carimbo do `retomado` com o carimbo do corte; sem os dois, é palpite.
5. **Diagnóstico de linha parada começa medindo a condição, não lendo o motivo.** A pergunta é
   *«a condição que este bloqueio nomeia ainda é verdadeira AGORA?»* — e a resposta vem da worktree,
   do disco, do lease, do saldo, nunca do campo `notas_motor`.

*Parentesco: [SIS-593] (premissa que envelheceu na doutrina do faxineiro — mesma doença, no tempo),
[SIS-443] (conserto num gêmeo só — mesma doença, no espaço) e a régua da casa «não deduza: meça ou
pergunte» (dono, 16/set/2026). O carimbo velho é doutrina de uma linha só, e apodrece igual.*

---

## APÊNDICE [porte Regie] — as 183 leis SIS que NÃO vieram

Motivo `infra`: a lei é sobre a operação do Top10 (máquinas, bucket, cascata de contas, fila e despacho 24/7), que não existe
num canal local. Motivo `apresentador`: só existe com apresentador filmado; este canal é faceless.
`termos` são os termos de infra que o contador achou no corpo; `como` diz se a decisão foi do contador ou da revisão.

| ID | motivo | como | termos | título no estúdio |
|---|---|---|---|---|
| SIS-01 | apresentador | automático | — | LINK PRO BÔCO = PASTA DO VÍDEO NO DRIVE, NUNCA SÓ O DOC DO ROTEIRO (erro real 13/jul — o Bôco reclamou no |
| SIS-02 | infra | revisão | despach | EFFORT DO FABLE NA ARTE = MEDIUM NA MAIORIA, HIGH (NÃO XHIGH) SÓ NAS DIFÍCEIS (feedback Mateus 14/jul, |
| SIS-04 | apresentador | automático | — | SINCRONIZAR O DRIVE ANTES DE MANDAR O LINK PRO BÔCO — v2 local ≠ v2 no Drive (erro quase-cometido, 15/jul). |
| SIS-07 | infra | automático | despach, cota, vm, estudio-top10, estudio.db, fila | O ORQUESTRADOR MASTER DA PRODUÇÃO É O CÉREBRO GERAL DO PIPE — E A DECISÃO AUTÔNOMA É UMA WHITELIST |
| SIS-08 | infra | automático | cota, despach | A PRODUÇÃO NUNCA PARA POR COTA EM SILÊNCIO — PROJETAR E AVISAR ANTES DE FALTAR (Mateus, 24/jul: |
| SIS-10 | infra | revisão | launchd | AGENDAMENTO SE VERIFICA PELA ÚLTIMA EXECUÇÃO, NÃO POR ESTAR CARREGADO — E FALHA QUE SÓ O HUMANO |
| SIS-12 | infra | automático | fila, timer | CEDER PARA TRABALHO PARADO É INANIÇÃO — A CORTESIA TEM DE MEDIR MOVIMENTO, NÃO INTENÇÃO. O |
| SIS-17 | infra | automático | vigia, fila, cascata, despach, launchd, systemd | CAPACIDADE PAGA E OCIOSA ENQUANTO O TRABALHO MORRE É O DESPERDÍCIO MAIS CARO — PORQUE NÃO APARECE. |
| SIS-18 | infra | automático | mac, vm, estudio-top10, fila, launchd, launchctl | DUPLICADO QUE COMPETE PELA MESMA FUNÇÃO E NUNCA TEVE O INSUMO GRITA PARA SEMPRE, SAINDO 0. Havia |
| SIS-26 | infra | automático | cascata, despach, headless, fila, cota | SUBAGENTE DA SESSÃO NÃO PASSA PELA CASCATA — UM LOTE INTEIRO MORREU COM 4 CONTAS LIVRES AO LADO |
| SIS-27 | infra | automático | vm, chrome remote, ssh, gcloud, headless | TELA DA VM: Chrome Remote Desktop, não VNC por túnel — o túnel falha CALADO (26/jul, medido). |
| SIS-28 | infra | automático | cota, despach, cascata, headless, oauth, vigia | Cota é dado que se MEDE, não descoberta que se leva na cara — e cada cota tem sua porta |
| SIS-38 | infra | automático | headless, estação, despach | ⚠️ SESSÃO HEADLESS NÃO AGUARDA — trabalho que dura horas tem de viver FORA dela, com |
| SIS-43 | infra | automático | gcloud, ssh, estudio-top10, bucket, despach, vm | Comando que FALHA devolve não-zero, e `until !` lê isso como "terminou" |
| SIS-45 | infra | automático | headless, despach, estação, estações, cota | Sessão headless não pode "aguardar" — e bloqueio parcial não é bloqueio total |
| SIS-63 | infra | automático | vm, headless, mac, driver | O dono único existia e NÃO ESTAVA LIGADO — a VM inteira uma geração atrás do modelo (Mateus, 01/ago/2026) |
| SIS-68 | infra | automático | fila, vm, despach, estação | Regenerar a fila destravava o bloqueado — status que só humano desfaz não pode virar "pendente" por script |
| SIS-73 | infra | automático | vm, fila, despach, regulador, vigia, macos | A máquina decide quantos trabalhadores aguenta — teto fixo erra nas DUAS pontas (03/ago/2026) |
| SIS-74 | infra | automático | regulador, vm, fila, faxineir | Processo zumbi faz a máquina RECUSAR trabalho — o Chrome pendurado e o regulador (03/ago/2026) |
| SIS-75 | infra | automático | vigia, estação | Log parado não é prova de parada — o vigia acusou quem estava produzindo (03/ago/2026) |
| SIS-85 | infra | automático | vm, estação, regulador, timer, fila, cota | O teto de agentes não é teto de MÁQUINA — um agente afoga a VM sozinho (03/ago/2026) |
| SIS-79 | infra | automático | cota, cascata, mac, estações, vm, headless | Subagente gasta a cota da SESSÃO-MÃE, não a cascata — 10 agentes mortos de uma vez (03/ago/2026) |
| SIS-80 | infra | revisão | faxineir, estação, headless, cota, vigia, regulador | Regra que protege por OMISSÃO erra para o lado caro (03/ago/2026) |
| SIS-81 | infra | automático | cota, estação, fila, vigia, despach | "Serei re-invocado" é uma promessa que a cota quebra (03/ago/2026) |
| SIS-82 | infra | automático | estações, despach, cota, cascata, regulador, vigia | O teto cravado sobreviveu à razão que o justificava (03/ago/2026) |
| SIS-84 | infra | automático | mac, vm, bucket | Gate que só olha a máquina onde roda diz "em dia" sobre material velho (03/ago/2026) |
| SIS-87 | infra | revisão | regulador, vm, estações, despach, estudio-top10 | Um número não governa três tetos — regule cada classe pelo recurso QUE ELA gasta (03/ago/2026) |
| SIS-90 | infra | automático | vm, mac, bucket, scp, gcloud, ssh | Entre a VM e o Mac, o caminho é o BUCKET — `scp` pelo túnel é ~100× mais lento (03/ago/2026) |
| SIS-92 | infra | automático | fila, mac, vm, bucket, despach, gs:// | Entrega é o fim da linha — vídeo entregue não volta para a fila (03/ago/2026) |
| SIS-95 | infra | automático | regulador, estudio-top10, fila | Dois reguladores certos, cada um no seu limite, afogam a máquina juntos (04/ago/2026) |
| SIS-101 | infra | automático | mac, rsync, vm, ssh | a ferramenta de trazer de volta só falava com a máquina que esvazia |
| SIS-108 | infra | automático | estação, despach, fila, vm, estudio-top10 | DIAGNÓSTICO NO DIÁRIO NÃO MOVE A ESTAÇÃO — o despachante lê a FILA, e a estação se repete em loop (03/ago/2026) |
| SIS-109 | infra | automático | estação, despach, vm, estudio-top10, fila | DUAS FILAS COM NOMES PARECIDOS: a estação despacha o conserto num projeto que não é o dela (03/ago/2026) |
| SIS-110 | infra | automático | vm, estudio-top10, despach, fila, 24/7, estação | Avançar a partir de ONDE O REGISTRO ESTÁ cria ciclo — e apaga bloqueio alheio (04/ago/2026) |
| SIS-111 | infra | automático | 24/7, vm, estudio-top10, despach, estação, fila | Conserto no disco não vale para processo VIVO — o motor 24/7 roda o código que carregou (04/ago/2026) |
| SIS-116 | infra | automático | macos, vm, mac, headless | DUAS MÁQUINAS, DOIS SISTEMAS — o defeito nasce num e só aparece no outro (05/ago/2026) |
| SIS-118 | infra | automático | fila, despach, mac, bucket, vm | A FILA É LOCAL, E UMA FILA VELHA NÃO PARECE VELHA (05/ago/2026) |
| SIS-122 | infra | automático | macos, launchd | `ps -o etimes` no macOS falha DEPOIS de imprimir, e envenena o `//` (06/ago/2026) |
| SIS-123 | apresentador | revisão | — | as duas pontas certas, e o meio errado: o mic 16 dB abaixo do ambiente (06/ago/2026) |
| SIS-184 | infra | automático | vm, estação, mac, despach | O CONSERTO DE CÓDIGO NA VM MORRE NO PRÓXIMO `reset --hard`, E O DIÁRIO CONTINUA DIZENDO QUE FOI FEITO (07/ago/2026, QC do `especies-humanas`) |
| SIS-186 | infra | automático | fila, vm, estação, despach, estações | O BLOQUEIO ESTAVA NO LAUDO, NÃO NA FILA — e o QC girou três dias em círculo (07/ago/2026) |
| SIS-187 | infra | automático | estação, despach, vm, fila, estações | DEVOLVER UMA ESTAÇÃO NÃO BASTA: o despachante a promove de volta pela prova do disco (07/ago/2026) |
| SIS-129 | infra | automático | estação, fila, rsync, cota, estações, despach | a prova de uma estação não mora em pasta que outra estação povoa (07/ago/2026) |
| SIS-131 | infra | automático | timer, despach, vm | daemon-reload derruba timer static, e o sintoma aparece três elos adiante (07/ago/2026) |
| SIS-133 | infra | automático | ssh, systemd, vm, gcloud, journalctl, headless | processo longo disparado por SSH não se solta com & — use systemd-run (07/ago/2026) |
| SIS-134 | infra | automático | fila, despach, estação | dois slugs para o mesmo vídeo: a fila conhecia a pasta vazia (07/ago/2026) |
| SIS-139 | infra | automático | ssh, gcloud | `pkill -f` por SSH mata a PRÓPRIA sessão — use o colchete (07/ago/2026) |
| SIS-141 | infra | automático | estação, despach | Gate de estação que pergunta "existe?" não sabe se SERVE — e o atalho do artefato-no-disco anula ordem (07/ago/2026) |
| SIS-142 | infra | automático | ssh, systemd, estudio-top10, despach, 24/7 | Máquina nova sem `lingering` mata todo serviço quando a sessão SSH fecha (07/ago/2026) |
| SIS-145 | apresentador | automático | — | O CACHE E O BOCO DIVERGIRAM — e é do BOCO que o Doc nasce (medido 07/ago/2026) |
| SIS-148 | infra | automático | launchd, macos, vm, ssh, launchctl, plist | Serviço meio-vivo passa em todo teste de saúde — o teto de descritores do launchd é 256 (07/ago/2026) |
| SIS-152 | infra | automático | estação, regulador, vm, despach, cota | A contenção de carga não conhece prioridade — e trava a estação mais importante (07/ago/2026) |
| SIS-156 | infra | revisão | mac, vm, despach | [renumerado de SIS-149 no merge de 08/ago — colisão entre Mac e VM] |
| SIS-157 | apresentador | revisão | mac, vm | [renumerado de SIS-150 no merge de 08/ago — colisão entre Mac e VM] |
| SIS-158 | infra | automático | mac, vm, estação | [renumerado de SIS-151 no merge de 08/ago — colisão entre Mac e VM] |
| SIS-160 | infra | automático | mac, vm, estação, fila, despach | [renumerado de SIS-153 no merge de 08/ago — colisão entre Mac e VM] |
| SIS-161 | infra | automático | mac, vm, fila, despach, estação | [renumerado de SIS-154 no merge de 08/ago — colisão entre Mac e VM] |
| SIS-162 | infra | automático | mac, vm, despach, fila, estação, gcloud | [renumerado de SIS-155 no merge de 08/ago — colisão entre Mac e VM] |
| SIS-168 | infra | automático | despach, vm, fila, esteira, estação | [renumerado de SIS-159 no merge de 08/ago] |
| SIS-169 | infra | automático | fila, despach, estação, esteira | [renumerado de SIS-160 no merge de 08/ago] |
| SIS-170 | infra | automático | despach, cota, timer, estação, 24/7 | [renumerado de SIS-161 no merge de 08/ago] |
| SIS-172 | infra | revisão | oauth, cascata, despach, vigia | Contar recurso à mão garante que a conta envelheça — a terceira vez do mesmo defeito (08/ago/2026) |
| SIS-175 | infra | automático | mac, vm, gcloud, scp | Bundle não é clone: o conserto feito no Mac não chega na VM (08/ago/2026) |
| SIS-176 | infra | automático | estudio-top10, esteira, despach, fila, estações, cota | A máquina certa para o trabalho certo: 8,5× medido, e o paralelismo que vale 1,6× (08/ago/2026) |
| SIS-178 | infra | automático | mac, vigia, dead-man, vm, launchd, plist | O symlink para o disco da OUTRA máquina matou sete relógios, e o sintoma era a ausência de log (08/ago/2026) |
| SIS-179 | infra | revisão | — | Relógio órfão: o agendamento escrito antes do script (08/ago/2026) |
| SIS-181 | infra | automático | launchd, launchctl, mac, macos, vigia, dead-man | Instalar não é ligar: as três formas de um relógio parecer vivo sem estar (08/ago/2026) |
| SIS-193 | infra | automático | esteira, fila, cota, despach, vigia, estação | Vivo não é produzindo — e a esteira inteira mede a coisa errada (08/ago/2026) |
| SIS-194 | infra | automático | esteira, fila, despach, cascata, cota, vigia | A recuperação da esteira é mais lenta que a impaciência de quem olha — meça DUAS vezes antes de intervir (08/ago/2026) |
| SIS-195 | infra | automático | mac, estudio-top10, despach, vm, scp, gcloud | Conserto de código só está FEITO quando o `grep` roda na máquina que EXECUTA (08/ago/2026) |
| SIS-197 | infra | revisão | fila, despach, cota | Saturação não se mede em tokens — se mede em TIPO DE ERRO (08/ago/2026) |
| SIS-201 | infra | automático | cota, despach, estação, fila, vigia, painel | Palavra solta na prosa não vence sinal deliberado — a cota carimbava por cima da trava humana (08/ago/2026) |
| SIS-205 | infra | automático | vm, estudio-top10, mac, estação, 24/7 | O ImageMagick não existe na VM — e a armadilha de portabilidade tem MÃO DUPLA (08/ago/2026) |
| SIS-208 | infra | automático | vm, estação, vms, estudio-top10, despach, vigia | O `find` da VM não é o GNU find — e o binário trocado quebrou três guarda-corpos de uma vez, todos para o lado permissivo (08/ago/2026, estação QC do  |
| SIS-212 | infra | automático | cota, cascata, vm, esteira, 24/7 | Cota esgotada não é falha do item — pular por cota transforma um lote em N falhas (08/ago/2026) |
| SIS-221 | infra | automático | despach, cota, estação, fila, timer, vm | O cooldown do despachante é indexado por CONTA; o que trava a arte é o MODELO — e a porta aberta apaga o carimbo |
| SIS-216 | infra | automático | cota, fila, despach | Sonda de 1 token no Fable não prevê capacidade de sessão de arte |
| SIS-218 | infra | automático | vm, estudio-top10, mac | O mesmo Drive, montado de três jeitos, tem TRÊS capacidades diferentes — e nenhuma é completa (08/ago/2026) |
| SIS-222 | infra | automático | despach, cota, fila, estação | O log do despacho é APPEND e o veredito lê os últimos 4000 bytes — o `ESTACAO_CONCLUIDA` do agente é enterrado pelo 429 que o wrapper escreve DEPOIS d |
| SIS-225 | infra | automático | cota, despach | Cooldown de cota do Fable nunca se sustenta: o despachante pergunta pelo pote errado |
| SIS-231 | infra | automático | painel, vm, mac, estudio-top10, gcloud, ssh | Painel que mede "a máquina local" e rotula com um NOME mente quando sobe na outra (09/ago/2026) |
| SIS-239 | infra | automático | vigia, dead-man, vm, systemd, mac | Editar o `.env` não arma nada se o serviço não o carrega — e o próprio programa pode ensinar o caminho errado |
| SIS-243 | infra | automático | estudio-top10, vm, bucket, rsync, mac | Máquina que não é repositório git nunca recebe `git pull` — e ninguém percebe, porque o sincronizador reporta sucesso |
| SIS-246 | infra | automático | painel, esteira, vm | Painel que afirma "aprovada" sem consultar o portão não erra o resultado — erra o PLANO |
| SIS-248 | infra | automático | dead-man, vigia, gcp, estudio-top10, timer, ssh | "Ninguém reservou" não é "ninguém está usando" — o dead-man's switch matou um render em curso |
| SIS-250 | infra | automático | mac, vm, headless | A concorrência que o gate suporta é do OFÍCIO da máquina, não um número da doutrina |
| SIS-254 | infra | automático | bucket, estação, gcloud | O tamanho conferia — no BUCKET. A tabela dizia "está no disco" (09/ago/2026) |
| SIS-256 | infra | automático | cascata, cota, estação, driver | o relatório do agente passa pelo MESMO cano que o sinal de controle, e um timestamp derrubou a porta que tinha entregado |
| SIS-262 | infra | automático | vigia, dead-man, ssh, estudio-top10, bucket | Prudência sem prazo é a trava aberta — o veto que nunca vence não protege, paralisa |
| SIS-273 | infra | automático | vms, ssh, estudio-top10, timer, systemd, vm | Chave com passphrase quebra toda automação — e o erro aponta para o lugar certo pelo motivo errado |
| SIS-263 | infra | revisão | despach, frota, esteira, fila, vm | O segundo portão para a mesma máquina precisa conhecer a trava do primeiro — e "entregue" não é "foi ao ar" |
| SIS-277 | infra | automático | vm, 24/7, timer, fila | Prioridade sem piso é inanição — e o relógio anda pelo trabalho, não pela execução |
| SIS-281 | infra | automático | vm, mac, gcloud, scp, bucket, ssh | A rota entre duas máquinas tem pernas com preços diferentes — meça as três antes de escolher, e não confunda tempo com dinheiro |
| SIS-291 | infra | automático | cota, estação, driver, fila, despach | Esperador que dorme até a hora do reset trata estimativa como contrato — quem espera cota tem de re-sondar no CAMINHO, não só no destino |
| SIS-292 | infra | automático | cota, vigia, despach, cascata, driver, fila | A sonda cara virou redundante e a doutrina não soube — quem tenta trabalhar já mede, e mede melhor |
| SIS-293 | infra | automático | estação, estações, despach, cota, fila | Artefato de estação ANTERIOR nunca é prova de progresso desta — e um HTML promoveu três vídeos por cima de duas estações |
| SIS-294 | infra | automático | cota, driver, estação, fila, despach, frota | A vaga que a sonda vê pode já ter DONO — cota livre medida no vão entre duas cenas de outro driver |
| SIS-295 | infra | automático | estação, vm, despach, vigia, driver, mac | O guardião de disco vigiava UM dos dois discos — e o motor anunciou folga com o outro em 97% |
| SIS-300 | infra | automático | estudio-top10, mac, launchd, ssh, vm, headless | Sintoma único, culpados OPOSTOS — a porta ocupada mandava o conserto para a máquina errada, e parou a caça da casa inteira |
| SIS-309 | infra | automático | painel, mac, vm, systemd, gcloud, ssh | Ferramenta que declara onde roda precisa CONFERIR onde está rodando |
| SIS-310 | infra | revisão | vm, vms, gcloud, rsync, bucket, gs:// | A prova de uma remoção não pode vir de um cano que ninguém leu |
| SIS-311 | infra | automático | macos, vm, estação, estudio-top10 | 42 agentes apontavam a própria roupa num caminho macOS — e na VM, onde a produção roda, vestiam-se de nada (12/ago/2026, estação ARTE do `fatos-a380`) |
| SIS-324 | infra | automático | driver, frota, estação, despach, cota, fila | O driver de arte não tem lock entre sessões — e isso não incomodava ninguém até a frota do Fable virar UMA porta (12/ago/2026, estação ARTE do `aceler |
| SIS-317 | infra | automático | fila, estação, despach | O veredito lê a última linha do LOG, e o CLI escreve depois do agente — um aviso novo de permissão devolveu à fila uma estação concluída, três vezes ( |
| SIS-321 | infra | automático | cascata, cota, estação, driver | 529 Overloaded não é 429 — a cascata para nele e a sessão lê como cota esgotada (12/ago/2026) |
| SIS-313 | infra | automático | painel, fila, rsync, estudio-top10, bucket, despach | o painel de produção só enxergava o MEIO da vida de um projeto: 41 vídeos no ar e 12 pautas eram invisíveis (12/ago/2026, a pedido do Mateus) |
| SIS-325 | infra | automático | bucket, vm, dead-man | Render que não subiu não aconteceu — o disco da máquina efêmera não é lugar de resultado |
| SIS-326 | infra | automático | cota, painel, fila, frota, vm, vms | O gargalo mudou de máquina para COTA, e o painel não sabia dizer isso |
| SIS-315 | infra | automático | ssh, vm, estudio-top10, timer, systemd, dead-man | a chave de SSH da automação foi consertada em 10/ago e o defeito voltou DUAS vezes por cópia — 20 ciclos de VM paga sem produzir nada (12/ago/2026) |
| SIS-330 | infra | automático | despach | O `reseta` do mapa de Fable nunca quis dizer "a porta abre nesta hora" — ele é o teto SEMANAL, copiado de outro arquivo |
| SIS-331 | infra | revisão | fila, estação | Laudo pago que não vira encomenda é pior que laudo perdido: ele existe no disco e diz que o vídeo está são |
| SIS-332 | infra | automático | driver, fila, cota, despach | O DRIVER DE ARTE SÓ CONHECE DUAS FAIXAS, E POR ISSO MANDA COMPOSIÇÃO PARA O FABLE (12/ago/2026, `planeta-em-meteorito@arte`, agente-raiz `scripts/dese |
| SIS-333 | infra | automático | fila, driver, estação | O item que "não fechou" saía da fila pela porta dos fundos: `sem-mudanca` é falha, e falha registrada como estado final vira defeito entregue |
| SIS-334 | infra | automático | vm, timer, frota, estudio-top10, rsync, vigia | Máquina nasce de imagem congelada e nada a atualiza — a propagação existia e NÃO ERA CHAMADA POR NADA (12/ago/2026) |
| SIS-340 | infra | automático | estação, fila, cascata, despach, cota | O gargalo tem nome de RECURSO, não de estação — e a fila só é fila do recurso escasso |
| SIS-341 | infra | revisão | frota, estudio-top10, bucket, despach, vm | Quem produz não é quem é perguntado — a prova de "já está feito" tem de olhar onde o artefato NASCE (12/ago/2026) |
| SIS-342 | infra | automático | dead-man, vigia, frota, fila | O dead-man se seleciona pelo MODELO DE CUSTO, não pelo ofício — uma palavra trocada no rótulo deixa a máquina sem vigia (12/ago/2026) |
| SIS-343 | infra | revisão | fila, despach | Ancorar o laudo e a evidência não fecha o laço: quem gasta o agente é a ENCOMENDA, e ela não sai da fila sozinha (13/ago/2026) |
| SIS-344 | infra | automático | bucket, estudio-top10, mac, vm, cota, estação | Proteção que é FLAG não protege: enquanto `--subir` for opt-in, cada máquina tem a sua própria verdade sobre o que existe (13/ago/2026) |
| SIS-351 | infra | automático | frota, dead-man, vigia, gcloud, vm, estudio-top10 | gate que identifica alvo por propriedade cega quando a frota muda — use união de critérios, e revise o gatilho junto com a visão (13/ago/2026) |
| SIS-352 | infra | automático | frota, vms, bucket, vm, estudio-top10, mac | o .env não é propagado — config corrigida na principal NÃO está corrigida na frota (13/ago/2026) |
| SIS-361 | infra | automático | vm, gcloud, rsync, bucket, ssh | Baixar a PASTA que contém o insumo, em vez do insumo, enche o disco e a máquina não volta |
| SIS-362 | infra | automático | esteira, painel, fila, despach, estações, estação | A esteira automática começa na decupagem — e o que vem ANTES não tem dono nenhum |
| SIS-364 | infra | automático | fila, estação, driver | Cena que REGRIDE no conserto some da fila em silêncio — os achados vencem, `regrediu` não é retentável, e o defeito novo não fica registrado em lugar  |
| SIS-365 | infra | automático | despach, headless, estação, cota, fila, driver | Na ARTE, despacho RASTREADO pela sessão headless não sobrevive ao tempo de UMA cena — nove lotes em 13/ago fecharam ZERO, e nenhum levou 429 (13/ago/2 |
| SIS-366 | infra | revisão | fila, estação | Re-julgar ACRESCENTA o certo mas não RETIRA o errado — e a fila oferece 266 encomendas onde a régua nova confirma 105 (13/ago/2026, estação QC do `den |
| SIS-370 | infra | automático | despach, fila | TETO DE TENTATIVAS CONTA NA ENTIDADE, NÃO NO REGISTRO — E PARAR DE DESPACHAR NÃO PODE VIRAR SUMIR (13/ago/2026) |
| SIS-386 | infra | automático | frota, despach, cota | "PREFERÊNCIA, NÃO MURO" É A REGRA CERTA — E ELA NÃO PREVIU A FROTA INTEIRA NO TETO (14/ago/2026) |
| SIS-390 | infra | revisão | gcloud, bucket | `gcloud --format=value(<campo-que-não-existe>)` DEVOLVE VAZIO, NÃO ERRO — e `--custom-metadata` grava em `custom_fields`, não em `metadata` (14/ago/20 |
| SIS-391 | infra | automático | fila, oauth | A PLAYLIST DE UPLOADS NÃO DEVOLVE TODOS OS VÍDEOS DO CANAL — e a lista incompleta torna o vídeo INALCANÇÁVEL, não apenas invisível (14/ago/2026) |
| SIS-392 | infra | automático | frota, vm, vms, mac, estudio-top10 | CONSERTO QUE CORRIGE A ASSIMETRIA NUMA DIREÇÃO E A MANTÉM NA OUTRA DÁ VERDE NA HORA ERRADA (14/ago/2026) |
| SIS-393 | infra | automático | fila, frota | MEDIDA AUSENTE VIRAVA FOLGA MÁXIMA — E PROMOVIA A PIOR CONTA A PRIMEIRA DA FILA (14/ago/2026) |
| SIS-394 | infra | automático | painel, cota, frota, fila | A ÚNICA PROVA DE QUE UMA CONTA SERVE É UMA CHAMADA — O PAINEL DE COTA NÃO RESPONDE ISSO (14/ago/2026) |
| SIS-398 | infra | automático | driver, estação, despach | Briefing de driver com NÚMERO CHUMBADO de outro projeto: o `julgar-cenas.mjs` jurava aos 61 agentes que "os gates JÁ ESTÃO VERDES (contrato 110/110…)" |
| SIS-401 | infra | automático | driver, estação, despach, headless | `setsid` FAZ FORK E O PAI SAI NA HORA — o bash imprime `Done`, `$!` aponta para um morto, e o driver VIVO é lido como "morreu sozinho em 3 segundos" ( |
| SIS-403 | infra | automático | cascata, estação, cota, fila | O ERRO É DO PEDIDO OU DA PORTA? A cascata só conhecia essas duas classes, e a conta paga-que-não-atende caía na errada — 25 cenas de Fable morreram em |
| SIS-404 | infra | automático | estação, fila, cota | A RÉGUA DE ESTAÇÃO COBRAVA HTML DE CENA QUE NÃO PODE TER HTML — vídeo 100% renderizado preso em `arte` para sempre, com a fila mandando o Fable desenh |
| SIS-406 | infra | automático | despach, headless, estação, cota, cascata | O despacho de arte disparado como FILHO RASTREADO morre junto com a sessão headless — e some sem gravar sequer a tentativa |
| SIS-410 | infra | automático | estação, despach, fila | O RUÍDO QUE A FERRAMENTA ESCREVE DEPOIS DO AGENTE PRECISA DE CATÁLOGO FECHADO — o `API Error` do CLI engolia o marcador e reciclava estação PRONTA, qu |
| SIS-411 | infra | automático | despach, estação, bucket, fila, rsync | O `.pid` DE UMA SESSÃO QUE CONCLUIU É A PISTA DO VEREDITO, NÃO RECURSO PRESO — a faxina soltou o crachá 37 s depois da entrega e o despachante re-desp |
| SIS-413 | infra | automático | cota, vigia, estação, driver, fila, despach | REDE DE SEGURANÇA QUE RELANÇA SEM PERGUNTAR PELA COTA GASTA A PRÓPRIA PASSADA — o vigia de duas tentativas fixas achou a porta fechada nas duas e ence |
| SIS-414 | infra | automático | cota, driver, fila, estação, vigia | A CONCORRÊNCIA É CRAVADA NO LANÇAMENTO E A COTA VOLTA EM DEGRAU — driver vivo não é estado final, e "tem dono" foi a resposta que deixou 10 contas oci |
| SIS-415 | infra | automático | vigia, driver, estação, cota | O VIGIA MATAVA QUEM SÓ PERGUNTAVA O ESTADO — `--listar` casava como "driver de conc=1", e o default do diagnóstico virou o diagnóstico (18/ago/2026, e |
| SIS-419 | infra | automático | lease, cota, cascata, fila | CONTENÇÃO POR LEASE E COTA TÊM O MESMO SINTOMA E DESTINOS OPOSTOS |
| SIS-420 | infra | automático | despach, estação, cota, fila, oauth, lease | CLASSIFICAR A ESPERA NÃO É ESPERAR — o despacho marcava `adiadoPorLease` e ia embora, e a estação inteira caía sem gastar um token (19/ago/2026, estaç |
| SIS-421 | infra | automático | lease, estação, fila, cascata, despach, cota | Recusa de lease gravada como RESULTADO: o condutor novo que declarou 19 pesquisas vazias sem ter feito nenhuma |
| SIS-422 | infra | automático | driver, estação, lease, vm, cascata, mac | O driver que esquece o `--add-dir` do `out/` real: o agente descreve o bloqueio, o driver sai 0, e o laço queima janela a cada 3 minutos |
| SIS-424 | infra | automático | lease, despach, esteira, oauth, cota, estação | LOTES PARALELOS DEMAIS COMPETEM ENTRE SI PELO LEASE — E UM DELES MORRE SEM PRODUZIR NADA |
| SIS-425 | infra | automático | cascata, driver, estação, oauth, despach, fila | CONSERTO DE CASCATA APLICADO A UM DRIVER SÓ DEIXA OS IRMÃOS COM O DEFEITO ABERTO — a [SIS-420] curou `desenhar-cenas` e o `_driver-regencia` seguiu de |
| SIS-438 | infra | automático | despach, estação, fila, 24/7 | Bloqueio se DECLARA na forma que o detector lê — prosa correta que ele não casa vira re-despacho eterno |
| SIS-426 | infra | automático | vm, 24/7, frota, vms, gcloud | Dois orquestradores na mesma casa: recurso sem dono, prazo e destino é órfão no dia em que nasce (02/set/2026) |
| SIS-427 | infra | automático | cota, lease, despach, estação, fila | Porta fechada de permissão não se cura esperando — e morria como "nao-escreveu" mudo (23/ago/2026) |
| SIS-428 | infra | automático | driver, despach, fila | `setsid` protege o driver de MORRER, não de ser SUSPENSO — e um zumbi conta como filho vivo (26/ago/2026, `sol-artificial-fusao@arte`) |
| SIS-434 | infra | automático | mac, vm, pool, despach, oauth, vms | sessão do Mac ORQUESTRA; quem executa é a VM com conta do pool (10/set/2026) |
| SIS-431 | infra | automático | lease, oauth, despach, fila, driver, cascata | CONTA NÃO TEM "VAGA", TEM SALDO DE JANELA — O LEASE EXCLUSIVO POR CONTA SERIALIZOU A LINHA POR DOIS MESES SEM NINGUÉM DECIDIR (10/set/2026, ordem do M |
| SIS-440 | infra | automático | painel, vm, bucket, fila, 24/7, mac | A TRANSCRIÇÃO DO ACERVO É A DO VÍDEO PUBLICADO, E ELA SE PRODUZ TODO DIA SEM CONDIÇÃO — o painel media o degrau seguinte, e a corrente tinha um elo qu |
| SIS-441 | infra | automático | bucket, gcloud, gs://, rsync, estação | O comando de puxar do bucket é dirigido por RECIBO, nunca por curinga de pasta (10/set/2026) |
| SIS-447 | infra | automático | vm, regulador, estudio-top10, oauth, cascata, lease | Teste não escreve no livro-caixa de produção — e censo de consumo separa o `claude` de mentira antes de concluir (11/set/2026) |
| SIS-446 | infra | automático | regulador, 24/7, despach, vm, ssh, estudio-top10 | A delegação PEDE VAGA ao regulador antes de entrar na 24/7 — e leitura indeterminada é porta fechada (11/set/2026) |
| SIS-448 | infra | automático | bucket, frota, fila, gcloud | O bucket é a fonte; medir `out/` local e chamar aquilo de placar SUBCONTA o que já está pronto (11/set/2026) |
| SIS-449 | infra | automático | frota, gcloud, ssh, vm, esteira, 24/7 | Mensagem de erro cortada pela ESQUERDA mostra o comando, não a causa — e escondeu uma frota morta por 12 dias (11/set/2026) |
| SIS-451 | infra | revisão | regulador, vm, estudio-top10, mac, estação, despach | O custo de uma sessão é o que a PRÓPRIA reserva lançou — e medição sem prazo vira catraca (11/set/2026) |
| SIS-453 | infra | automático | lease, vm, estudio-top10, timer, frota | Lease de VM não expira por tempo: bootstrap que morre depois de escrever o lease trava a partição PARA SEMPRE (11/set/2026) |
| SIS-455 | infra | automático | estudio-top10, vm, launchd, mac, driver | `ERR_TIMED_OUT` na caça tem duas causas com consertos OPOSTOS, e a conferência tem prazo (11/set/2026) |
| SIS-459 | infra | automático | cota, estudio-top10, estação, cascata | Desfecho de sessão se classifica pelo RELÓGIO antes do texto — teto lido como cota resfria conta boa (11/set/2026) |
| SIS-460 | infra | revisão | estudio-top10, cota, cascata, lease, pool | O teto era um dos QUATRO cortes nossos: quem encerrou o processo é o transporte, não o relógio (12/set/2026) |
| SIS-461 | infra | automático | frota, despach, vm, lease, dead-man, ssh | DESLIGAR MÁQUINA COMPARTILHADA É CONTAGEM, NÃO EVENTO — e a lição de 14/ago ficou dentro de um arquivo (12/set/2026) |
| SIS-462 | infra | automático | cota, estudio-top10, estações, oauth | O CLI declarou o turno concluído e a casa leu a RESPOSTA como recusa de cota (12/set/2026) |
| SIS-463 | infra | automático | frota, 24/7, estação, vms, vm, estudio-top10 | A frota de QC morreu por UM ticket, e a captura voltou à 24/7 pelo caminho que ninguém chamava de estação (12/set/2026) |
| SIS-464 | infra | automático | cloud run, estudio-top10, vm, frota, ssh, despach | Dois publicadores, um `_CARIMBO.json`: o recibo de um respondeu pelo pacote do outro (12/set/2026) |
| SIS-465 | infra | automático | timer, vm, bucket, gcloud, rsync, systemd | Levar o script não é instalar o timer: a descarga viajou no pacote e nunca teve quem a chamasse (14/set/2026) |
| SIS-439 | infra | revisão | vms, gcloud, bucket, despach, frota, pool | Estado benigno classificado como falha: três travamentos numa noite, e nenhum deles deu erro |
| SIS-466 | infra | revisão | vm, frota, timer, fila | O gate de MP4 final tem leitor e não tem produtor — e o teste é que o mantém verde (14/set/2026) |
| SIS-467 | infra | automático | frota, vm, fila, pool, vms, estudio-top10 | A publicação em série sob teto virou laço que nunca converge, e travou o render da casa (14/set/2026) |
| SIS-469 | infra | revisão | gs://, despach, estação, fila | Marcador de espera não se fecha como pergunta: ou se auto-encerra, ou vira ORDEM ERRADA |
| SIS-470 | infra | revisão | estudio-top10, despach, estação | A impossibilidade estava escrita em QUATRO lugares: o catálogo de tempos nunca poderia sair de "não calibrada" (14/set/2026) |
| SIS-472 | infra | automático | timer, frota, vm, fila, cota, lease | O timer matava a própria rodada, e a mensagem de erro mandou todo mundo para o lugar errado (14/set/2026) |
| SIS-473 | infra | revisão | driver, vm, despach, cascata | `--conc=todas` na arte queima inferência em série: a associação do CLAIM falha sob concorrência e o prompt nunca chega ao stdin (14/set/2026, `compila |
| SIS-480 | infra | revisão | estudio-top10, cascata, vm, cota, oauth, despach | O `result` do stream-json é a ÚLTIMA mensagem, não a resposta — texto que começa no meio é entrega partida, não JSON errado (12/set/2026) |
| SIS-481 | infra | automático | driver, vm, esteira, mac, timer, estudio-top10 | Antes de perguntar ao dono "vale esperar por X?", consulte quanto X leva — `top10 tempos` (12/set/2026) |
| SIS-484 | infra | automático | driver, despach, fila | Derrubar o orquestrador derruba o trabalho EM VOO — janela limpa se declara, não se arranca (15/set/2026) |
| SIS-514 | infra | automático | fila, vm | Julgamento que morre por queda de PROVEDOR tem de VOLTAR À FILA — não sumir |
| SIS-593 | infra | automático | faxineir, estação, cascata | O faxineiro matou trabalho legítimo porque a premissa do teto envelheceu: CPU baixa era ESPERA POR INFERÊNCIA (15/set/2026) |
