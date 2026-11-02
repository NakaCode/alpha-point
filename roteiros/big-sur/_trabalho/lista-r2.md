# Lista fechada · rodada 2 · big-sur (vídeo 5)

Revisão julgada: `4f827c30b9f8`

> O doutor de roteiro da r2 (subagente da Sala de controle), 02/11/2026, sobre os dois laudos da bancada da r2, ambos com "Revisão
> julgada: `4f827c30b9f8`": `qc-roteiro/fatos.laudo.md` (RESSALVA, 9.0; VF-R2-01, VF-R2-02, VF12 e as observações sem troca) e
> `qc-roteiro/ouvinte-r2.laudo.md` (RESSALVA, comunica 7, clareza 7; A1 a A14). A lista que o aplicador lê é `lista-r2.json`. Sem rede,
> sem crédito. Os trechos do plano de 1986 citados foram relidos na cópia local (`midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm`).

## O resultado

- **21 trocas** (L01–L21), na ordem do texto. A regra da Sala para esta lista: entram os achados de fatos GRAVE e MÉDIO (nesta rodada,
  nenhum) e os do ouvinte que deixam o texto mais claro ou mais falado sem trazer de volta a fonte como cacoete nem as frases picadas (o
  "engessado" do Lucas); LEVE só se não custa nada; nenhum PEDIR. O porquê inteiro de cada item está no `porque` do JSON.
- **`node ferramentas/aplicar-lista.mjs big-sur --lista=roteiros/big-sur/_trabalho/lista-r2.json --seco`: exit 0** (SECO_OK). 21 itens,
  18 diferenças, nenhuma frase sem item, 0 recusas, 0 avisos. As provas (a) aspas (0 e 0), (b) numerais (82 antes, 82 depois: nenhum número
  sai nem entra), (c) parágrafos (17 mudados, todos com dono) e (d) REDIZER (14 itens, nenhum nome, data, número ou grupo novo) passam.
  Texto falado `4f827c30b9f8` → `50c2c56aaefc`; o portão, rodado pelo aplicador antes e depois, PASSA nas duas (2.321 → 2.260 palavras).
- **A aplicação de verdade (sem `--seco`): exit 2, NAO_RODOU**, nas duas vezes em que rodou (a primeira com uma 22ª troca, a A2, que depois
  saiu; ver "O que ficou de fora"). A recusa: "a cópia roteiros/big-sur/_trabalho/roteiro-r2.antes.md já existe com outro conteúdo: nada se
  grava". Essa cópia é o r1 (`daa92ea6d0c4`), que a reescrita r2 guardou com esse nome (o topo do `roteiro-narrador.md` aponta para ela); o
  aplicador tira o nome da cópia da `rodada` da lista ("r2") e confere a cópia antes de gravar qualquer coisa. **Nada foi gravado** (o
  sha256 do `roteiro-narrador.md` continua `af80c142…`). Pelo pedido ("se recusar, não improvise"), não troquei a rodada nem mexi na
  cópia: o texto continua `4f827c30b9f8`, o mesmo que a bancada julgou, e o `roteiro-editor.md` foi reescrito para ele, com cada troca
  pendente marcada na frase dela ("Lista r2, Lnn (pendente)").
  - **O conserto, para a Sala:** a mesma lista com `"rodada": "r2b"` (a cópia vai para `_trabalho/roteiro-r2b.antes.md`; é o nome que o
    Atlântico e o Peru usaram na segunda aplicação de uma rodada, e o `--derivados` já conhece o `-r2b`). Nenhum item muda, e o
    `revisao_julgada` continua `4f827c30b9f8`. Depois dela, o `roteiro-editor.md` precisa da troca nas frases marcadas "(pendente)" e do
    carimbo novo.
- **O portão na cópia** (as 21 trocas aplicadas por troca de texto simples, fora do canal, pelo script
  `C:\Users\zangp\AppData\Local\Temp\claude\C--projetos-alpha-point\b375663d-aa56-4ef7-91a0-2424b9ea0483\scratchpad\lista-r2-copia.mjs`, no
  arquivo `C:\Users\zangp\AppData\Local\Temp\claude\C--projetos-alpha-point\b375663d-aa56-4ef7-91a0-2424b9ea0483\scratchpad\roteiro-r2-lista.md`):
  `node roteiros/big-sur/_ferramentas/gate.mjs <a cópia>` sai **0, PASSA**, sha `50c2c56aaefc` (o mesmo do aplicador). **2.260 palavras**
  (−61; o piso é 2.250, a folga é de 10), ≈ 12:17 a 184 palavras/min e ≈ 14:35 a 155; 35 parágrafos; média 13,4 por frase (teto 18); a
  maior com 32 (teto 34); o gancho com 158 palavras até a assinatura (teto 170), o "But" na palavra 19, o "Why?" onde estava (palavra 36).
  0 problemas; 4 alertas, os de antes menos um: "nobody", "never", "first" e a 1ª frase sem número, todos já decididos
  (`escrita-notas-r2.md` §2). **O alerta da taxa de perguntas sai** (6 → 5; 2,23 por mil, teto 2,27), e as frases curtas caem de 9 para 6.
  Autoplágio vazio; sem alerta de fecho.

## Os itens

Palavras pelo portão. "Lente" é quem pediu.

| id | parte | op | lente | troca | palavras |
|---|---|---|---|---|---|
| L01 | gancho | REDIZER | ouvinte A4 | "It isn't a harsh climate." | +1 |
| L02 | gancho | REDIZER | ouvinte A11 (com outra forma) | "So why didn't it fill up?" | 0 |
| L03 | gancho | REDIZER | ouvinte A3; fatos VF-R2-01 | "Part of the answer is what you'd expect: mountains, and a road that keeps giving way. The rest is less obvious. There's a rule in that plan…" | +1 |
| L04 | p1 | REDIZER | ouvinte A5 (a) | "Let's start with the district's number, because it's easy to hear it wrong." | +1 |
| L05 | p1 | REDIZER | ouvinte A5 (b), com a serra | "It takes in roughly two-thirds of the Big Sur coast and the mountains behind it, from a few miles south of Carmel, past this bridge, and a long way down the shore." | −9 |
| L06 | p1 | CORTAR | ouvinte A5 (c) | sai "With that settled, let's try something." | −6 |
| L07 | p2 | REDIZER | ouvinte A6 (1) | "Mostly, that means Highway 1." | −4 |
| L08 | p2 | REDIZER | ouvinte A6 (2), com o "relatively" | "The supply is relatively small and seasonal, and the animals, the plants and the people all share it." | −1 |
| L09 | p2 | CORTAR | ouvinte A4 (p2) | sai "Not the weather. The winters are wet, the summers are dry, and the climate, in the county's own word, is mild." | −21 |
| L10 | p2 | REDIZER | ouvinte A7 | "How did anyone make a living on this coast?" | −2 |
| L11 | p3 | CORTAR | ouvinte A7 | sai "Because people did come." | −4 |
| L12 | p3 | DA-FONTE | fatos VF-R2-02 | "Even so, around the turn of the century…" | 0 |
| L13 | p4 | REDIZER | ouvinte A10 (b) | "…and in the 1980s, the county estimated, nearly all of its summer traffic was recreational." | −1 |
| L14 | p4 | REDIZER | ouvinte A7 | "That left the county with a harder question than how to get people in: how much of this coast should be built on." | −2 |
| L15 | p5 | REDIZER | ouvinte A6 (4), no passado | "Everything in sight of those places got a name: the critical viewshed." | −3 |
| L16 | p5 | REDIZER | ouvinte A10 (c) | "…and expected that to double over the next 20 to 25 years. Traffic jams on Highway 1 were already a problem." | −1 |
| L17 | p5 | ESTREITAR | fatos (observação sem troca) | "The rule didn't empty this coast." | −2 |
| L18 | p5 | CORTAR | ouvinte A7 | "…keeping that road open." | −2 |
| L19 | p6 | REDIZER | ouvinte A8 | "Regent's kept the road shut." | 0 |
| L20 | p6 | CORTAR | ouvinte A8 | sai "Firefighters were hurt fighting it." | −5 |
| L21 | p7 | REDIZER | ouvinte A9 (só a quebra no dois-pontos) | "Part of that is the mountains, and part of it was a choice. In its 1986 plan, the county wrote…" | 0 |

## Onde a lista se afasta da troca proposta, e por quê

- **L01 (A4, no gancho):** só a primeira frase muda. A forma do ouvinte para a seguinte ("In 1986, Monterey County wrote a plan for this
  coast…") data o ato pelo carimbo, o defeito que a L01 da r1 recusou (o plano foi aprovado em 1981–1985 e certificado em 1986; VF06 da r1).
- **L02 (A11):** "So why is it still so empty?" traria o "still", que o portão alerta e que pode ser ouvido como "não cresceu" (a Sala veta
  "it hasn't grown"). "So why didn't it fill up?" cura o que o ouvinte apontou (a conta de 1880 contra hoje) sem dizer que a costa parou;
  e a assinatura ("the coast that never filled up") passa a nomear a pergunta.
- **L03 (A3 e VF-R2-01):** a troca do ouvinte também cura o achado do verificador: "took decades to build" sai, e não é preciso o trecho da
  M21 na linha nova.
- **L04 (A5 a):** "the district's number", não "count": somaria três "count" em duas frases.
- **L05 (A5 b):** a serra fica ("and the mountains behind it"): a terra do distrito é quase toda serra, e a densidade da frase seguinte
  depende disso.
- **L08 (A6, 2):** o "relatively" fica (a L07 da r1 o devolveu, pelo VF05; P [188]), e a frase não ganha o "says" da forma do ouvinte: o dono
  vai à tela.
- **L10 e L11 (A7):** a pergunta nova é "How did anyone make a living on this coast?", e a resposta é a frase que já abria o p3 ("They
  ranched, mostly to feed their own families."). O "People did." do ouvinte não responde a uma pergunta com "how".
- **L15 (A6, 4):** "got a name", no passado; o "has a name" do ouvinte é presente, e a Sala não deixa dizer que a regra vale hoje.
- **L21 (A9):** só a quebra no dois-pontos. As três respirações do ouvinte isolariam "And part of it was a choice." (frase picada, mais um
  "And" de abertura); a frase-chave fica com 13 palavras e a regra de 1986 com 17.

## O que ficou de fora

- **A2 (MÉDIO), que entrou no primeiro seco e saiu:** "…fewer than 1,500 people, which, for its size, is as empty as Wyoming." põe cinco
  palavras antes do "Why?". O contrato da pauta (§3: "nos primeiros 15 s: … a pergunta, aos ~14,4 s a 150 palavras/min") e "O cético", "O
  que passou" ("o trecho até o 'Why?' não pode ganhar palavra, nem pausa longa antes") seguram esse trecho. Na cópia para a voz, com
  "fifteen hundred", o "Why?" já está na palavra 37 (≈ 14,8 s a 150); com a A2, iria à 42 (≈ 16,8 s). O enigma que o ouvinte apontou (o
  Wyoming sem densidade por ~70 s) se paga no p1; se a Sala quiser a A2 assim mesmo, é decisão dela sobre o contrato.
- **VF12 (PEDIR):** "Hardly a house is in sight." continua dependendo da imagem do mirante de Bixby Creek. É da regência e do
  conferente-de-midia; a troca pronta, se a imagem mostrar casa, é "From this turnout, the slopes look almost untouched."
- **A1 (PEDIR):** a fala do Kirk Gafill, palavra por palavra, da nota da Caltrans de 15/05/2026. A cópia local lida pela Sala
  (`midia/big-sur/fontes/web/caltrans-d5-news-5-15-2026-2-lida-2026-11-02.htm`) tem a frase dele ("The robust and sustained increase in
  visitation is allowing our business, employees, and larger community to recover rapidly from the three-year closure."), mas trocar a
  paráfrase pela citação é decisão da Sala e passa pelo verificador: a frase traz o "rapidly" e o "three-year", que a paráfrase de hoje não
  diz. Pela regra da Sala para esta lista, PEDIR não entra.
- **A6 (3):** "the plan limits land use to backcountry recreation" fica com o dono. Sem ele, a frase vira um presente sobre a área selvagem
  de hoje dito com as palavras do plano de 1986 (P [1641]); o dono guarda o tempo.
- **A6 (5):** a FHWA fica na voz com o 1919. A data é contestável (o K6 da pauta: a busca dá 1921 ou 1922 para o trecho de Big Sur, e o plano
  não traz o ano), e a decisão da Sala é "1919, atribuído à FHWA, ou nearly two decades".
- **A10 (a):** "the road had to get across every one of them" não é exagero: uma estrada que corre entre a serra e o mar cruza todo riacho
  que desce ao mar. Custaria 4 palavras, e a folga do piso é de 10.
- **A10 (d):** a moldura nova da citação ("was what you could see with…") pede o verificador, e a frase de hoje ("the test … was this:")
  já soa como a regra lida.
- **A12:** é para a folha de pronúncia (`voz/trocas.md`), não para o texto: "U.S.", "2020 to 2024", Santa Lucia, Pfeiffer, Nepenthe,
  Gafill, CAL FIRE e Ventana, e o "1,500" dito igual no gancho e no fecho.
- **A13 (a):** "the bark used to tan leather" pede o verificador (o plano diz "used in the manufacture of tannic acid", P [1205]).
- **A13 (b):** "the other side of the count" é vago, mas prepara a virada "depends on what you count"; cortar custaria 6 palavras.
- **A14:** nota sem troca. Nenhuma negação que corrige foi somada (a L09 tira uma: "Not the weather.").
- **A observação "They stop, they look, and then they drive on."** (apoiada no plano de 1986, não numa fonte de hoje): fica; o verificador
  não pediu troca.
