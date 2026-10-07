# Lista fechada de mudanças · rodada 3 · los-angeles (vídeo 2)

> Escrita em 07/10/2026, 11:5x, pelo doutor de roteiro (Fable 5.1) sobre os quatro laudos r3 de
> `roteiros/los-angeles/qc-roteiro/` (roteiro RESSALVA · clareza RESSALVA 8,5 · locução RESSALVA · fatos PASS 9,7), todos
> sobre a revisão `65939ca2b6ea` (`_trabalho/roteiro-r3.md`, 2.062 palavras, PASSA). A lista foi aplicada em
> **`_trabalho/roteiro-r3a.md`**, que é a r3 com este único item e uma linha de nota no cabeçalho (não falada).
> `roteiro-narrador.md`, `variantes/gancho-hoje.md` e o dossiê não foram tocados. Sem commit.
>
> A lição (`APRENDIZADOS.md`, item 13; `C:/projetos/regie-v1/crafts/doutor-de-roteiro/OFICIO.md`): lista fechada, conflitos
> entre lentes resolvidos antes, aplicação cirúrgica. A rodada 1 aplicou 35 itens; esta aplica **1**.

## O que a r3 era, provado por diff

`diff roteiros/los-angeles/roteiro-narrador.md roteiros/los-angeles/_trabalho/roteiro-r3.md` (rodado nesta rodada, exit 1 =
há diferença) mostra cinco blocos: o título (`# …`), a nota do topo (`> …`), o comentário do gancho (`<!-- … -->`), que não
são falados, e **três linhas faladas**, as três do pedido: o 2º parágrafo do gancho (contorno de hoje, idêntico à variante),
p4 (`watched` ⇒ `turned out`) e p5 (a troca condicional do achado 7 da clareza). Nada mais. O gate na r3: PASSA, exit 0,
2.062 palavras, 153 frases, maior frase 33, gancho com 140 palavras e o "But" na palavra 32, sha `65939ca2b6ea…`.

## A regra, e o que ela deu

- Entram **todos os achados de fatos** e **todos os GRAVE**. Nesta rodada não há GRAVE, e o único achado de fatos
  (R3-06) é CONFIRMADA, "não é erro de fato", com troca "opcional": ele não entra por regra, e abaixo está por que não
  entra por escolha.
- **MÉDIO entra se a troca é segura.** Há um MÉDIO, visto pelas três lentes de texto (roteiro 1, clareza C-r3-1, locução A1),
  no mesmo trecho e com o mesmo diagnóstico: o "it" de p5 ficou órfão. Entra.
- **LEVE só se não custa nada.** Os quatro LEVE (roteiro 2 e 3, locução A2, fatos R3-06) ficam de fora: dois não são troca
  de texto, e dois ferem um NÃO TOCAR de outra lente.
- **NÃO TOCAR respeitado**, com uma decisão onde dois NÃO TOCAR se contradizem (conflito 1).
- Só mudanças dentro das três frases mudadas, ou que elas exigem: o item fica dentro da frase da mudança (2).
- **1 item**, de 2.062 para **2.063 palavras** (+1).

**O portão, na r3a** (`node roteiros/los-angeles/_ferramentas/gate.mjs roteiros/los-angeles/_trabalho/roteiro-r3a.md`):
**PASSA**, exit 0 · 2.063 palavras · 11,21 min · 32 parágrafos · 153 frases · média 13,5 · maior frase 33 · gancho com 140
palavras até a assinatura e o "But" na palavra 32 · os mesmos 3 alertas já aceitos (TEU ×2, "monopoly" ×1) · sha256 do texto
falado **`feac8036dabd9b0c39bb161190b816c91907757a21d705886e9029776043f1e6`**.

A frase trocada tem 28 palavras na régua do gate (era 27; teto 34).

## O item

**R3A-01 · p5 (4º parágrafo da parte, o da medida no mapa de 1916) · roteiro 1 + clareza C-r3-1 + locução A1, os três MÉDIO · +1**
`before the city grew around both ends, it runs about fifteen miles` ⇒ `before the city grew around both ends, the strip ran about fifteen miles`

A frase inteira, antes e depois:
- de: "On the outline of 1906, before the city grew around both ends, it runs about fifteen miles from north to south, all of it across county land."
- para: "On the outline of 1906, before the city grew around both ends, the strip ran about fifteen miles from north to south, all of it across county land."

O porquê. A mudança (2) da r3 pôs a oração "before the city grew around both ends" entre o antecedente ("The thin part is
about half a mile wide.") e o pronome. No encaixe "Before X grew…, it…" do inglês, o ouvido prende o "it" ao sujeito da
oração, "the city": a primeira leitura vira "a cidade corre quinze milhas de norte a sul", e o "fifteen" deixa de conversar
com o "nine" do gancho, que era a razão da troca. As três lentes de texto viram o mesmo, independentes. O sujeito explícito
desfaz a ambiguidade: "the strip" é o referente do "it" aprovado (a parte fina; os fatos medem 14,81 a 14,88 mi em 1906), e
o texto o chama de "the strip" desde o 2º parágrafo de p5 ("That bridge is the strip"). Com "the strip" como sujeito, o
"line it" da frase seguinte também aponta sem dúvida para a faixa. A alternativa "the thin part runs" (roteiro, clareza)
seria o terceiro "thin part" em três frases, e ficou de fora.

O "de" casa uma vez na r3 (conferido por contagem antes da troca); o eco de p7 ("the city has grown around both ends, and
about nine miles of it still run thin") não casa e não foi tocado.

## Os conflitos entre lentes, e como foram decididos

1. **O tempo do verbo: "the strip runs" (roteiro 1, clareza C-r3-1) × "the strip ran" (locução A1).** As três concordam no
   sujeito; divergem no verbo. O NÃO TOCAR do roteiro diz "mudar só o 'it' do achado 1"; o da locução diz que "só o sujeito
   e o verbo depois dela mudam". Decidi por **"ran"**, por cinco razões:
   - **O gancho já codifica o tempo**, e isso é NÃO TOCAR de todas as lentes ("Presente para hoje, passado para 1906"):
     "runs south … for about nine miles" é hoje; "In 1906, it stopped" é 1906. A frase de p5 existe para conciliar o
     "nine" (hoje) com o "fifteen" (1906); carregar para ela o mesmo código, "ran … fifteen", é o que mais ajuda o ouvido a
     pôr cada número no seu contorno, que é o objetivo da mudança (2).
   - **O parágrafo já faz essa divisão:** "The whole annexation **was** more than eighteen square miles" (fato de 1906, no
     passado) e "The thin part **is** about half a mile wide" (o que continua verdade hoje: p7, "still there, about half a
     mile wide", no presente). As quinze milhas não continuam verdade: os fatos medem o trecho fino de 33,7451 a 33,9600 N
     em 1906 e de 33,7976 a 33,9232 N hoje (cerca de nove milhas, como p7 diz). O passado é o tempo exato para o que
     mudou; o presente, para o que não mudou.
   - **"before the city grew…, the strip runs"** põe uma oração temporal no passado na frente de um presente. A locução
     é a lente do ouvido, e diz que um locutor humano pararia ali para decidir "runs" ou "ran"; a voz sintética lê plano e
     o ouvinte ouve o solavanco. Nenhuma das outras duas lentes argumentou contra "ran": propuseram "runs" porque era o
     verbo aprovado, não porque o passado falhasse.
   - **"all of it across county land" no presente** é o que o NÃO TOCAR do roteiro proíbe para hoje ("nunca 'across county
     land' para hoje"): quem perder o "On the outline of 1906" ouviria, com "runs", que a faixa corre por terra do
     condado hoje, o que é falso (Gardena, Torrance, Lomita e Carson são cidades). Com "ran", a oração inteira fica em 1906,
     e "The towns that line it today weren't cities yet." fecha a conta no mesmo tempo.
   - **Nenhum fato muda:** o verificador confirmou "before the city grew around both ends" e as quinze milhas de 1906
     (fatos-r3, NÃO TOCAR), e "ran" afirma exatamente isso. O que o NÃO TOCAR do roteiro protege com o "só o 'it'" (a oração
     da ponte na posição em que está, antes do "fifteen", e a frase dos "towns") fica inteiro. A oração "before the city grew
     around both ends" não foi tocada.
   A cópia com "the strip runs" também passa no gate (2.063 palavras, sha `7283d4c5b47b…`, reproduzido no scratchpad desta
   sessão, igual ao que as duas lentes citaram); a escolha não é por portão, é pelo ouvido e pelos dois contornos.
2. **"towns" × "cities" em "The towns that line it today weren't cities yet."** A locução (A2, LEVE) troca por "The cities
   that line it today weren't cities yet.", porque "town" é a cidade incorporada do porto em p4 ("whose town was that?"),
   p6 ("the harbor towns' boundary lines. The towns still had to say yes.") e no fecho ("the harbor towns"), e aqui "towns"
   se opõe a "cities". Os fatos (R3-06, LEVE, opcional) oferecem "The cities that line it today weren't incorporated yet."
   ou os quatro nomes de volta. Contra: o roteiro põe a frase em NÃO TOCAR ("os nomes ficam na tela, com os anos. Mudar só o
   'it'", e "o p5 não troca 'towns' por 'cities'"), e a clareza também ("não devolver os quatro nomes à voz. 'towns'
   restringe às que são cidade hoje e deixa a terra do condado de fora"). LEVE só entra se não custa nada, e aqui custa dois
   NÃO TOCAR. **Fica "towns".** No inglês americano falado, "town" serve a qualquer município, e o ouvinte não tropeça em
   "the towns weren't cities yet"; a oposição que a locução ouve é de dicionário, não de ouvido. E a nuance dos fatos (a
   borda leste é em grande parte CDP, West Carson e West Rancho Dominguez, e segue terra do condado) é verdade que a frase
   não contradiz: ela fala das towns, não de toda a borda. Vai como nota à tela (abaixo).

## O que ficou de fora, e por quê

- **Roteiro 2** (o `roteiro-editor.md` não acompanhou a r3: gancho de 1906 em S4–S6, "watched", p5 com os quatro nomes, "os
  vizinhos já foram nomeados em p5" em p7, livro-razão, cabeçalho com sha e contagens antigos, Payoff da espinha): não é troca
  de texto, e o dossiê não é desta tarefa. Vai a quem segue (abaixo), com a proposta da lente: V1 (contorno de hoje com a
  faixa acesa desde 0:00), V2 ("ABOUT 9 MILES (TODAY)" e "ABOUT HALF A MILE", volátil), V3 (a ponta de 1906, sem o "9 MILES"
  no quadro).
- **Roteiro 3** (o título não está nas 3 primeiras frases, `marca/embalagem.md` §2): registro, sem troca; S1–S3 são NÃO
  TOCAR. O que paga a promessa nos primeiros 19 s é a imagem (o contorno de hoje com a faixa, desde 0:00), e isso vai ao
  dossiê como condição de cena. Se a resposta do Lucas sobre a letra do §2 não estiver registrada, ela vai ao relato do
  título como exceção dele para este vídeo.
- **Locução A2** ("cities"): conflito 2.
- **Fatos R3-06** (a nuance do "yet"; opcional): conflito 2. A frase é CONFIRMADA (só Gardena, Torrance, Lomita e Carson
  encostam no trecho fino; Long Beach fica a 2,08 mi).
- **"the thin part runs"** (alternativa do roteiro e da clareza): terceiro "thin part" em três frases.
- **Os quatro nomes de volta à voz** (alternativa dos fatos): contra o NÃO TOCAR da clareza, e desfaz a mudança (2), que
  o Lucas pediu.
- Nenhuma lente pediu troca no gancho nem em p4: o gancho de hoje e "turned out" estão LIMPOS nas quatro, e os dois ficam
  como estão (NÃO TOCAR de todas).

## Prova de cirurgia

`diff roteiros/los-angeles/_trabalho/roteiro-r3.md roteiros/los-angeles/_trabalho/roteiro-r3a.md` (exit 1 = há diferença),
rodado depois da aplicação:

```
6a7
> > Revisão r3a (07/10/2026): a r3 com a lista fechada `_trabalho/lista-r3.md` aplicada (1 item, em p5). Nada mais mudou.
66c67
< Now measure it on the city's own annexation map, from 1916. The whole annexation was more than eighteen square miles. But the thin part is less than half of that; the rest is a wide block up north. The thin part is about half a mile wide. On the outline of 1906, before the city grew around both ends, it runs about fifteen miles from north to south, all of it across county land. The towns that line it today weren't cities yet.
---
> Now measure it on the city's own annexation map, from 1916. The whole annexation was more than eighteen square miles. But the thin part is less than half of that; the rest is a wide block up north. The thin part is about half a mile wide. On the outline of 1906, before the city grew around both ends, the strip ran about fifteen miles from north to south, all of it across county land. The towns that line it today weren't cities yet.
```

- Dois blocos: a linha de nota no cabeçalho (começa com `>`, o gate a ignora; a r3a sem essa linha dá o mesmo sha
  `feac8036dabd…`, conferido) e a linha 66/67, o parágrafo da medida em p5.
- Diff palavra a palavra dessa linha: saem `it` e `runs`, entram `the`, `strip` e `ran`. Nada mais.
- O arquivo continua LF, UTF-8, sem BOM, como a r3. Contagens na r3a: "the strip ran about fifteen miles" ×1; "it runs about
  fifteen" ×0.
- Cada "de" casou uma vez (o script de aplicação, no scratchpad da sessão, para com erro se casar 0 ou 2).

## O que muda para quem segue

- **A cópia para a voz** (`out/los-angeles/roteiro.md`) e `voz/texto-para-voz.md` se refazem sobre o sha `feac8036dabd…`.
  Os parágrafos a narrar de novo contra a narração da revisão `a7a8615a572a` são três pedidos: o 2º do gancho, o de p4
  (Jubileu) e o 4º de p5 (a medida); o R3A-01 cai no terceiro, que a r3 já obrigava a refazer.
- **A folha de pronúncia** (`roteiros/los-angeles/pronuncia.md`, sha `822cb8e37301`): Gardena, Torrance, Lomita e Carson
  constam como falados "2 (p5, p7)", e a frase de teste 6 é o p5 antigo. Na r3a nenhum dos quatro é falado (p5 diz "The
  towns that line it today"; p7, "between other cities and county land"; o gancho, "between its neighbors"). A folha se
  refaz sobre o sha novo; os quatro saem da lista de falados e da amostra, e a frase 6 passa à frase nova de p5.
- **O `roteiro-editor.md`**, pelo achado 2 do roteiro: o gancho V1–V3, o "turned out" (Times de 27/04/1899, p. 10, "the
  crowd at noon"; o despejo foi antes das 11 h), a frase nova de p5 com a mesma origem (exp.N23/exp.A30;
  esc.afi-09/esc.num-24/sin.afi-04/sin.num-04 + R2-06a) e o verbo no passado, "os vizinhos já foram nomeados em p5" fora de
  p7, o livro-razão (V1–V2 nove hoje → p5 quinze em 1906 → p7 nove hoje), o Payoff da espinha, e o cabeçalho (sha, 2.063
  palavras, 153 frases).
- **A tela de p5**: os quatro vizinhos com o ano de incorporação (Torrance 1921, Gardena 1930, Lomita 1964, Carson 1968,
  pela camada 21 do condado, fatos-r3) sobre o contorno de 1906; "ABOUT 15 MILES (1906)" só aqui; nenhum "9 MILES" no quadro
  de 1906. A nuance de R3-06 vai como cuidado do `redator-de-tela`: a borda leste é em boa parte CDP (West Carson, West
  Rancho Dominguez) e segue terra do condado; o rótulo não deve dizer que tudo ao longo da faixa virou cidade.
- **Para a bancada da r3a**, se o Claude central a quiser: uma frase só mudou contra a r3 (prova por diff acima). Os fatos
  já confirmaram a oração da ponte e a medida; o que é novo na voz é o tempo verbal ("ran"), que afirma o que os fatos
  mediram (o trecho fino encolheu de ~15 para ~9 milhas).
- **O pedido do usuário repassado pelo harness** ("Quero reduzir para 56px") não tem relação com esta rodada e não foi
  atendido aqui: nada foi reduzido a 56px. Vale o Claude central perguntar ao Lucas a que ele se refere.
