# Pedido da Sala: o portão do roteiro do vídeo 8 (`australia-animais`) · 18/11/2026, ~15:5x

**Quem:** um agente Opus, esforço xhigh, despachado pela Sala de controle. **O que entrega:** o portão determinístico do roteiro deste vídeo,
derivado do portão do vídeo 7 (o rio Columbia), com a prova e as notas.

## O contexto

- O vídeo 8 é "por que a Austrália tem tantos animais perigosos", no ângulo do paradoxo: muito veneno, poucas mortes. A pauta v2 está aprovada
  pelo Lucas ("Pode seguir (Recomendado)", 18/11/2026, ~14:1x): `pautas/2026-11-18-video-8-australia-pauta.md`.
- As falas do Lucas que mudam o roteiro estão em `roteiros/australia-animais/decisoes-lucas.md`. As que pesam aqui:
  - **o Test & Compare da publicação terá três títulos**, e o gancho do roteiro tem de pagar os três:
    - T3 *Australia's Deadliest Snake Isn't Its Most Venomous One* (com a miniatura "NOT THE KILLER": o Channel Country em vermelho, a pílula
      "INLAND TAIPAN");
    - T2 *Why So Few People Die From Australia's Deadly Animals* (com a miniatura "10 YEARS OF VENOM < 1 MONTH": as rodovias, os 85 mortos em dez
      anos contra os 106 de um mês médio de estrada em 2025);
    - T1, o do Lucas, *Why Does Australia Have So Many Dangerous Animals?* (com a "NOT THE KILLER");
  - a concorrência não derruba nada neste vídeo ("Quero fazer isso desconsiderando a concorrência").
- Depois da pauta, a Sala leu (o registro `pautas/2026-11-18-video-8-australia.md`, "As leituras da Sala"): a contagem das cobras no Reptile Database
  (150 das 229 espécies da Austrália são elapídeas, nenhuma víbora; no mundo, elapídeas e víboras são 826 de 4.252, 19,4 %, "cerca de 1 em 5"; o "about
  15 percent" da Live Science não se sustenta); a régua de fora da OMS (81.410 a 137.880 mortes por picada de cobra por ano no mundo; a Índia, ~58.000
  por ano em 2000–2019); os 8 mortos que faltavam na conta (X25 = 6, outros artrópodes; X26 = 2, marinhos; 35 + 42 + 6 + 2 = 85); onde vive a
  cobra-marrom (o Queensland Museum: "Found over most of Queensland, New South Wales and Victoria"; "all habitats except rainforest"; "adapted well to
  farmed, grazed and semi-urban lands"). O Australian Museum deu 403 também no navegador do app, e não se usa.
- O teste dos leitores a frio (`out/_pautas/video-8-australia/teste-leitores.md`) pediu, para o roteiro: tirar "a biologist told Live Science" do meio
  da fala e a pergunta dupla do fim do gancho; menos números em fila; "as measured on lab mice" faz a voz tropeçar; dizer quem são os outros 8 mortos;
  uma régua de fora; por que as 35 mortes por cobra não são 350 (o soro e os primeiros socorros); os bichos do meme nomeados no bloco dos sem veneno; a
  redback; a abelha europeia trazida; as amostras pequenas ditas em voz alta.
- **Em paralelo a você**, dois agentes fazem as últimas leituras (`pautas/australia-animais/_trabalho/fatos-c.md`: os primeiros socorros e o soro das
  cobras, a abelha europeia, o ano do soro do redback, os códigos X25 e X26, a Índia por habitante) e a medida do Censo
  (`pautas/australia-animais/_trabalho/medida-censo.md`: quanta gente vive no Channel Country contra os estados da cobra-marrom). Quando chegarem, a
  Sala pode lhe mandar um acréscimo ao "não se diz" e aos alertas. Deixe o `NAO_SE_DIZ` e o `ALERTA_AU` fáceis de estender, e diga nas notas como
  acrescentar um id com a prova dele.

## O que fazer

Derive `roteiros/australia-animais/_ferramentas/gate.mjs` e `roteiros/australia-animais/_ferramentas/gate-provar.mjs` do portão do vídeo 7
(`roteiros/rio-columbia/_ferramentas/gate.mjs` e `gate-provar.mjs`), como o do vídeo 7 foi derivado do do vídeo 6: saem as regras só do Columbia, entram
as da Austrália, e fica todo o resto do molde sem mudança (o que é texto falado, o sha, o `--onde`, o `--derivados`, as VETADAS e as palavras de ALERTA
da voz, as frases que abrem com data, a assinatura uma vez, o "But" até a palavra 50, a pergunta antes da assinatura, o fecho, as taxas e os TETOS, o
autoplágio e a sua exceção, o ritmo de conta de 179 palavras/min). Com as notas da derivação em `roteiros/australia-animais/_trabalho/gate-notas.md`, no
molde de `roteiros/rio-columbia/_trabalho/gate-notas.md` (o que saiu, o que entrou, o que ficou, "Para quem escreve o roteiro", a prova, os limites, a
saída da prova). Sem arquivo, o portão mede `roteiros/australia-animais/roteiro-narrador.md` (que ainda não existe: exit 2).

**Leia antes:** o portão, a prova e as notas do vídeo 7 (o molde); a pauta v2 (§2, §3, §4 com a coluna "Na fala" e as frases seguras, §5 inteiro, §7
com "O que fica fora da fala", §8, e a tabela "O que o cético pediu → o que mudou"); o registro `pautas/2026-11-18-video-8-australia.md`; o teste dos
leitores; `roteiros/australia-animais/decisoes-lucas.md`; `marca/voz.md` §1 a §3; `marca/cta.md` §1, §5 e §6; `marca/embalagem.md` §2.

## Os parâmetros da Sala (decididos)

1. **A faixa:** de **2.500 a 2.800** palavras faladas (reprova fora). A pauta §7 orça ~2.611 (14,6 min a 179); os consertos dos leitores acrescentam
   conteúdo de verdade; o cético da v1 disse "16 min, não" (2.864). Os tetos de frase ficam os do molde: média de no máximo 18 palavras por frase e
   nenhuma acima de 34.
2. **Os três títulos, pagos no gancho** (`embalagem.md` §2: o núcleo se paga nas 3 primeiras frases; aqui, três títulos):
   - **T3, nas 3 primeiras frases** (é o mais clicado no teste, 6,75, e o par mais forte com a "NOT THE KILLER", 8,25):
     - REPROVA `[titulo-3-veneno]`: nenhuma das 3 tem o superlativo do veneno ("most potent venom", "most venomous", "most toxic", "deadliest venom" ou o
       equivalente que você achar seguro);
     - REPROVA `[titulo-3-mata]`: nenhuma das 3 diz que ela não é a cobra que mata (uma forma de "kill"/"killer"/"deadliest" com negação, ou "another
       snake"/"a different snake" fazendo a matança). A pauta §8 propõe: "And it isn't even the snake that kills the most Australians." Pense no que a
       forma honesta aceita e no que ela não aceita ("it rarely kills" é vetado pela pauta: a base não tem morte nenhuma por taipan-do-interior lida);
     - REPROVA `[ressalva-camundongo]`: o superlativo do veneno, em qualquer frase do gancho, sem "mice", "mouse", "lab" ou "laboratory" na mesma frase ou
       na seguinte (a pauta §2 e §5; os leitores acharam que "as measured on lab mice" no meio da frase 1 faz a voz tropeçar: o escritor pode levar a
       ressalva para a frase 2, e o portão aceita).
   - **T2, no gancho** (antes da assinatura):
     - REPROVA `[titulo-2-registro]`: sem os 85 ("85" ou "eighty-five") com "people", "deaths", "died" ou "killed";
     - REPROVA `[titulo-2-estrada]`: sem a estrada num mês ("road"/"roads" e "month" na mesma frase). É o que paga a miniatura "10 YEARS OF VENOM < 1
       MONTH".
   - **T1, o do Lucas, no gancho:**
     - REPROVA `[titulo-1]`: sem a contagem das cobras venenosas (um número ou uma fração com "snake"/"snakes"/"species"/"kinds" e "venomous"/"elapid");
     - ALERTA `[titulo-1-palavra]`: sem "dangerous" nem "deadly" no gancho (a palavra do título dele; os leitores acharam "dangerous" vago, e a pergunta da
       pauta fala de cobras venenosas: o alerta só lembra o escritor).
3. **A primeira frase:** REPROVA sem "venom"/"venomous" (é o fio do vídeo: o veneno contra o registro); REPROVA sem "Australia", "Australian" ou
   "outback"; ALERTA sem número (o do molde; a imagem de abertura é o aéreo das planícies do Channel Country, pauta §6).
4. **A inscrição falada:** a do vídeo 7, sem mudança (os mesmos ids, a conta do tempo com a cauda de 20 s, a fronteira de parágrafo, o alerta abaixo de
   37 % e acima de 58 %). A pauta §7 propõe o lugar (~50 %, entre a ponte do ato 3 e a primeira frase do ato 4) e a ideia ("If you're enjoying the story
   so far, subscribe to Alpha Point. Now, the other snake.").
5. **O "não se diz" da Austrália** (`NAO_SE_DIZ`; cada id REPROVA com o porquê e a fonte na mensagem, e a forma segura que a pauta dá passa, conferida na
   prova): a pauta §5 inteira; o que a coluna "Na fala" do §4 põe "fora" ou só na "tela"; a lista "O que fica fora da fala" do §7, onde um padrão a pega
   sem barrar a forma segura; o registro; e estes, que a Sala decidiu depois da pauta:
   - **o "15 percent"** ("15 percent", "15%", "fifteen percent") ligado a cobras: REPROVA (a contagem da Sala; "about one in five", com "elapids and
     vipers" ou "front-fanged", passa);
   - **"a biologist told Live Science"** e "Live Science" na voz: ALERTA (não reprova: a contagem pode ir com o nosso dono, e o "overstated" de Arbuckle
     pode precisar da matéria);
   - **o Australian Museum** na voz: REPROVA (não foi lido; 403);
   - **a taipan "never killed"**, "no recorded death", "no known death", "has never killed anyone": REPROVA (o AVRU é NÃO CONFERIDO);
   - **a Índia** com "times" ("300 times", "hundreds of times") ou "per capita": REPROVA até a Sala mandar a medida do `fatos-c.md` (a OMS, com o
     intervalo mundial e os ~58.000 da Índia, passa);
   - **o cavalo e o canguru com número**, e "horses kill more than…": REPROVA (o NCIS é NÃO CONFERIDO).
6. **Os alertas da Austrália** (`ALERTA_AU`; nunca reprovam; a Sala pode tirá-los), além dos que você achar na pauta:
   - `[pergunta-dupla]`: a pergunta antes da assinatura com dois "why", ou duas perguntas juntas por "and why" (a Mia);
   - `[oito-que-faltam]`: o 35 das cobras e o 42 das abelhas e vespas ditos, e nenhuma conta dos outros 8 (os artrópodes e os marinhos, ou "eight")
     no mesmo parágrafo ou no seguinte (Mia, Arjun e Tunde: "fico preso nisso e perco a frase seguinte");
   - `[amostra-pequena]`: o 23 das mortes por cobra sem "study", "over a decade" ou o equivalente perto; o 13 da funnel-web sem "at least" ou "before
     1981" (o Arjun: as amostras pequenas ditas em voz alta);
   - `[numeros-falados]`: mais de 50 números na voz (a pauta orça ~43–45; o laudo mostra a conta);
   - `[uma-vez]`: o 85 e o "one in three million" ditos mais de uma vez no texto inteiro; a contagem das cobras dita de novo no ato 2 (a pauta: "volta
     como imagem, sem repetir os números na voz");
   - `[hipotese-como-causa]`: "because" ou "the reason" perto da hipótese de Arbuckle (a fama vinda da medicina), do porquê da taipan (pica e solta) e do
     veneno da funnel-web (a pauta §3: "a hipótese dita como hipótese").
7. **O autoplágio** compara também com o roteiro do vídeo 7 (`roteiros/rio-columbia/roteiro-narrador.md`), ao lado dos de antes.
8. **As frases seguras da pauta** (§4, §7, §8) juntas num texto: nenhuma reprova (o molde da prova do vídeo 7, "As frases seguras … juntas num texto"),
   **menos as que a Sala tirou depois da pauta** (o "about 15 percent" do gancho A e do B, que agora reprova; diga na prova quais frases saíram do texto
   de conferência e por quê).

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push (só a Sala commita). Não use rede, navegador (nenhuma ferramenta
  `mcp__claude-in-chrome__*` nem `mcp__Claude_Browser__*`), vidIQ nem crédito.
- A trava do Python vale: script sempre num arquivo, `python -X utf8 -B <arquivo>.py`; nunca `python -`, heredoc ou pipe para o Python.
- Escreva só em `roteiros/australia-animais/_ferramentas/`, em `roteiros/australia-animais/_trabalho/gate-notas.md` e em
  `out/_tmp/gate-australia-animais/` (os casos e a saída da prova, fora do git). Não mexa no portão nem nas notas do vídeo 7.
- Rode a prova até sair 0, e rode o portão sobre o roteiro do vídeo 7 para mostrar que as regras da Austrália não pegam o Columbia por engano (ele vai
  reprovar pelos títulos e pela faixa, como esperado; diga o quê).
- Grave o resultado no disco antes de responder. **O relato** (curto, em português): os arquivos e o sha256 de cada um; a prova (quantos casos de
  quantos); as decisões que você tomou além dos parâmetros; o que a Sala pode afrouxar; e o que nenhum padrão pega (vai ao verificador de fatos).
