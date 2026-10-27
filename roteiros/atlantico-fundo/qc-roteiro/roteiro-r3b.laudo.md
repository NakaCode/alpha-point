# Laudo · crítico de roteiro · bancada curta da rodada 3

Revisão julgada: `286ff3abf7c7` · data-base 2026-10-26
(sha256 do texto falado pelo `gate.mjs`: `286ff3abf7c7b32cbd05c747be80c575ff971da60e6515c3390cd67f68a00ad9`; o portão PASSA, 1.956
palavras, ≈ 10:38 a 184 palavras/min (≈ 10:58 com a cauda), 28 pedidos à voz, 154 frases, média 12,8, maior 28, gancho com 166
palavras até a assinatura e o "But" na palavra 49; 0 problemas; os 8 alertas de sempre ("never" ×2, "first" ×2, "Milwaukee Deep" ×3,
o "still" do gancho), taxas todas abaixo do teto, autoplágio vazio, nenhum alerta de fecho. Com `--derivados`, o `roteiro-editor.md` e a
`pronuncia.md` citam `286ff3abf7c7`.)

Rubrica lida nesta sessão: o ofício da pré-v1 (`crafts/critico-de-roteiro/OFICIO.md`, `CONTRATO.md`, `SPEC.md`), `marca/voz.md`
inteira, `marca/cta.md` §1–§3, o topo do `gate.mjs` (as regras, o "não se diz" do vídeo 5 e o que fica com o verificador) e o topo do
`ferramentas/aplicar-lista.mjs` (as operações). Contra o quê: o roteiro inteiro, lido uma vez como audiência antes das lentes; o
`roteiro-editor.md` (o livro-razão, as partes, as chamadas, o destino das cifras e "De onde vem cada frase" de p6 a p8); a
`pronuncia.md` (as contagens e os nomes que saíram); `_trabalho/lista-r3.md` e `aplicado-r3.md`; o diff `git diff` do roteiro; o
dossiê (`fundamento.md`: F02, F73, F75, F83; os ids que a L80 cita); e o meu laudo da bancada anterior, `roteiro-r2b.laudo.md`. Sem
rede: o spot-check foi nas cópias locais de `midia/atlantico-fundo/fontes/`. Não li os laudos das outras lentes desta bancada.

VEREDITO: RESSALVA
(APROVADO COM RESSALVAS pela escala do CONTRATO §3: nenhum achado estrutural, nenhum erro de fato demonstrado, nenhum veto. A decisão
do Lucas está inteira no texto: saíram a Argentina, a reivindicação das ilhas, a história do nome Meteor e os nomes Factorian e
Limiting, e ficaram a outra candidata, a resposta e o bloco de 60°S, palavra por palavra. Sobra um leve, na única frase nova da rodada,
a emenda do piso (L80): ela põe o ponto mais fundo "at the other end of the ocean", e Porto Rico, a 19,7°N, não fica na outra ponta do
Atlântico; o mapa que o editor pede para a frase vai mostrar isso.)

NOTAS: Sotaque de máquina 8,5/10 · Storytelling e retenção 8,5/10 · Voz alta 8,5/10 · Factual e atribuição 8,5/10 · Embalagem e
promessa 9/10

**Vale 1 de 1.** A troca é de três palavras e foi provada numa cópia no scratchpad: o portão PASSA, 1.953 palavras (3 acima do piso),
média 12,7, maior 28, gancho intacto (166, "But" na 49), os mesmos 8 alertas, autoplágio vazio; o 3º pedido à voz de p7 vai de 85 a 82.
**O texto está em retorno decrescente** (OFÍCIO §3.1): o único achado é resíduo da própria rodada. Depois dele, parar. Qualquer corte
futuro tem de devolver palavras: com a troca, sobram 3 acima do piso.

ACHADOS:

1. [LEVE · Factual (geografia: a frase diz mais que o dossiê) · DO-DOSSIE] `the deepest point in the Atlantic lies at the other end of the ocean.`
   → É a emenda L80, a única frase que nenhuma lente nem o verificador viram ainda. A primeira metade está certa: "With the line or
   without it" se sustenta pelas fontes (a M-3 de 2026, `09-iho-M3-E-2026.txt`, l. 8169–8170: "Hydrographic Offices may continue to
   adopt their own limits"; e l. 8219–8221, para a Argentina a área do Oceano Austral "corresponds to the southern zones of the Indian,
   South Atlantic and South Pacific Oceans"; o mais fundo ao sul de 60°S tem 7.432 m e o Meteor 8.265 m, os dois mais rasos que os 8.378 m
   do Brownson, Bongiovanni et al. 2021, l. 129 e 790–795). O defeito é a segunda metade. "The other end of the ocean", dito da Fossa das
   Sandwich do Sul, põe o ponto de Porto Rico na ponta norte do Atlântico. O dossiê diz o contrário: a Sandwich do Sul fica "no
   extremo sul do Atlântico" (F73; Bongiovanni, l. 127–128: "the southernmost Atlantic Ocean"), e o ponto mais fundo fica a 19,712°N
   (F10), nos trópicos, a cerca de dois terços do caminho entre 60°S e o norte do oceano. Nenhum F ou S citado pela L80 diz "a outra
   ponta". A ponte de p6 ("to the other end of the Atlantic") está certa porque desce até uma ponta de verdade, e a L80 a devolve
   para um lugar que não é ponta. O editor pede para esta frase "o Atlântico de ponta a ponta, com os dois anéis" (l. 827–829), e esse
   quadro mostra o anel do norte longe da ponta norte, num canal de geografia. No sentido idiomático ("lá longe, do outro lado") a
   frase passa. Por isso o achado é leve e não médio. A troca diz o que o dossiê fixa (19,712°N; a coordenada já está na tela em p5, "Só
   na tela": "19.712°N 67.311°W"), mantém o veredito que a emenda dá ao título e deixa a passagem para "Off Puerto Rico" como
   estava: do equador para o norte, e logo o lugar. "On the other side of the equator" foi testada antes e deu alerta de
   autoplágio contra o gancho do Peru ("on the other side of the line"). Esta não dá.
   → TROCA: `the deepest point in the Atlantic lies north of the equator.`
   → A ESCALA, se entrar: no `roteiro-editor.md`, a linha da L80 em "De onde vem cada frase" (a frase; a nota "'The other end of the
   ocean' é o 'the other end of the Atlantic' da ponte de p6" sai, e o F10 entra ao lado de F02, F74, F79 e F83; no mapa, o globo de
   ponta a ponta ganha a linha do equador, e o anel do norte acende acima dela); a linha de p6 no livro-razão (sai "A emenda L80 ('the
   other end of the ocean') devolve o eco da ponte."); "As partes", p7 ("fica na outra ponta do oceano" → "fica ao norte do equador";
   237 → 234 palavras, 8:26–9:42; p8 9:42–10:37); "A medida do portão" e o parágrafo "Depois da lista r3" (1.953). A `pronuncia.md` não
   muda: "equator" é palavra comum, e a frase não tem número.
   → RAIZ: A EMENDA DO PISO (L80), escrita para devolver o eco da ponte de p6. A frase foi escolhida pelo ouvido, e o dossiê não a
   sustenta.

RISCO DE ABANDONO (tempos pela contagem do portão, a 184 palavras/min, sem a vinheta):
- **≈ 9:16–9:39** (p7, 3º pedido: a IHO, a linha, a ressalva e a emenda): é o que sobrou do trecho mais arriscado da bancada anterior
  (≈ 9:27–10:06, 39 s), agora com 23 s e sem nomes novos. É um bloco que a própria emenda declara sem efeito sobre a resposta ("with
  the line or without it"). Ainda assim, ele defende o título, e o Lucas o manteve. A ponte chega em ≈ 9:39 (era ≈ 10:03), sete minutos
  depois de "Keep those fish in mind." (≈ 2:36). O risco é dito, não consertado.
- **≈ 1:31–1:47** (p1, o Challenger) e **≈ 4:03–4:29** (p3, a laje): os mesmos da bancada anterior, nos mesmos lugares. A r3 não
  tocou neles.

VARREDURA "ESTADO DO MUNDO" (o texto mudou só em p7; o resto foi varrido na bancada anterior e conferido pelo fatos-r3, e a busca por
"still/today/now/remains/continues/currently/as of" no texto inteiro dá só os dois casos já decididos, o "still" do gancho, no passado de
2019, e o "As of October 2026", datado):
- "where one plate dives under another about three inches a year"; "That is three to four times the pace": geologia, confirmadas
  (F73, F42).
- "The islands there are a chain of small volcanoes, with no permanent residents.": confirmada (NASA, F86).
- "The trench's deepest point, the Meteor Deep, is about 370 feet shallower": confirmada (Bongiovanni 2021, Tabela 1; nenhum
  levantamento mais novo no dossiê).
- "It begins at 60 degrees south."; "The trench's southern tip crosses the line."; "By that line, the Meteor Deep … is in the
  Atlantic.": confirmadas (M-3 de setembro de 2026, l. 8153–8157; Bongiovanni, l. 122–128: "from a latitude of around 54°40′S to
  60°40′S, technically spanning the 60°S boundary").
- "The organization says the line carries no political meaning, and not every country uses it.": atribuída, confirmada (M-3,
  l. 8169–8171, e o apêndice 1).
- "With the line or without it, the deepest point in the Atlantic lies …": a primeira metade está confirmada. "At the other end of the
  ocean" é o achado 1.

SPOT-CHECK (cópias locais, sem rede):
- Bongiovanni et al. 2021 (`02-bongiovanni-2021-gdj3.122.txt`): l. 122–130, a fossa de 54°40′S a 60°40′S, "technically spanning the 60°S
  boundary", e o Meteor "within the waters of the southernmost Atlantic Ocean"; l. 129 e 331–332, 8.265 ± 13 m em 55,230°S, 26,173°W;
  l. 790–795, o Brownson 8.378 ± 5 m em 19,712°N, 67,311°W, e o mais fundo do Oceano Austral com 7.432 ± 13 m. CONFIRMAM a ponta, a
  linha, o Meteor e o "with the line or without it". O artigo escreve "60.479°N" para o ponto do Oceano Austral, um erro de hemisfério
  da fonte. Ele não chega à voz, porque o ponto saiu na r3.
- A M-3 da IHO, setembro de 2026 (`09-iho-M3-E-2026.txt`): l. 8153–8157 (60°S), 8169–8171 ("neither political nor oceanographic …
  significance", "may continue to adopt their own limits") e 8218–8221 (a Argentina). CONFIRMAM a frase da organização. Sem a frase da
  Argentina, a ressalva fica inteira em "not every country uses it", sem perda.
- A ESCALA, pelo disco: "Factorian", "Argentina", "Britain", "German", "Limiting Deep" e "odd name" aparecem 0 vezes na voz. "Limiting
  Factor" aparece 1 vez (p5), "Meteor Deep" 2 (p7, 2º e 3º pedidos), "Southern Ocean" 1 e "line" 4. A `pronuncia.md` bate com essas
  contagens (Meteor 2, com os parágrafos 24º e 25º; Limiting Factor 1, no 18º; a linha do Factorian descida para a reserva; 30 miles e
  20 miles fora da cópia para a voz). O `roteiro-editor.md` bate com o texto em p7 (as frases riscadas com a marca da r3; a ponta
  sul na posição nova; a L80 com as fontes; "Narradas uma vez", "Cortadas" e "As partes" em dia), e as chamadas continuam no lugar.
  A inscrição está na palavra 1.085 de 1.956, ≈ 5:53, 55 % da fala e 54 % com a cauda, dentro de 35–60 %. O comentário vai de
  ≈ 10:23 a 10:32.
- O acervo: nem "or without it", nem "the other end of", nem "north of the equator" aparecem nos roteiros do Juneau, de Los Angeles, da
  Zona do Canal e do Peru.

DECISÕES SOBRE OS ALERTAS DO PORTÃO: os 8 são os mesmos da bancada anterior, decididos e certos ("never" ×2, "first" ×2, "Milwaukee
Deep" ×3, o "still" do gancho no passado de 2019). A r3 não criou nenhum, e a troca do achado 1 também não.

AS PERGUNTAS DA SALA PARA ESTA REVISÃO:
- **A frase "The trench's southern tip crosses the line." fica**, e no lugar novo (L79). Logo depois de "It begins at 60 degrees
  south.", ela é o degrau que faz a linha importar para esta fossa e dá a "By that line" o antecedente literal ("the line"). No lugar
  antigo, sem o Factorian, ficaria órfã. Lida a frio, a sequência linha → ponta → Meteor ao norte se entende de primeira.
- **A ponte de saída de p7 lê bem depois do corte.** A emenda põe o ouvido no norte, e "Off Puerto Rico" o pousa. Com a troca do
  achado 1, a passagem fica igual (do equador para o norte, e logo o lugar).
- **A ponte de p6 ("The expedition also took its sonar, and its sub, to the other end of the Atlantic.") fica como está.** Sem o
  mergulho no Factorian, o submersível dela se paga de duas formas. A primeira é "The expedition mapped it but didn't dive there.":
  logo depois de "about 370 feet shallower", o ouvido entende por que não houve mergulho (não era o mais fundo). A segunda é a mais
  importante agora: o "and its sub" segura o antecedente de "the same sub", que abre p8. O Limiting Factor do antigo 4º pedido de p7, o
  antecedente imediato, saiu. Tirar o "and its sub" deixaria "the same sub" a quase três minutos do último nome do submersível (p5),
  dependendo só da frase seguinte. A dívida que a lista r3 mandou à Sala está paga.
- **O piso:** 1.956 hoje e 1.953 com a troca. Nenhum fato, número ou nome novo entra na voz: a coordenada já está na tela.

NOTAS (não são achados):
- "line" aparece 4 vezes em quatro frases seguidas do 3º pedido de p7 ("crosses the line", "By that line", "the line carries", "With
  the line or without it"). É retomada anafórica, não esqueleto repetido (OFÍCIO §4.1, o aviso da referência anafórica): cada vez é o
  mesmo objeto, e o mapa o desenha. Dose, não defeito.
- "the same sub" (p8) agora se resolve uma frase depois ("It was the craft that had carried Vescovo…"), e não mais pela frase anterior.
  O gancho ("In 2019, a submersible went back to the exact same spot") e a ponte de p6 o seguram. Fica.
- O 3º pedido de p7 conclui que a linha não muda a resposta, e por isso a pergunta "por que me contou da linha?" pode surgir. A
  resposta é o título: a outra candidata só é candidata se estiver no Atlântico. O Lucas manteve o bloco por isso. Não se reabre.

O QUE ESTÁ FORTE:
- **O corte saiu limpo.** As quatro saídas são frases inteiras, nenhum pronome ficou sem dono ("one of those volcanoes" volta a "a
  chain of small volcanoes"; "the Meteor Deep" continua apresentado antes de "By that line"), e p7 caiu de 311 para 237 palavras sem
  perder a imagem real da parte (o lago de lava) nem a resposta ("The sonar settled that.", os 370 pés). O pagamento dos peixes chega
  ≈ 24 s mais cedo.
- **A emenda faz o trabalho certo no lugar certo.** "With the line or without it" responde a "not every country uses it" na frase
  anterior e fecha a camada da outra candidata com o veredito do título, sem número, nome nem repetir a pergunta do gancho. Só a
  segunda metade pede a troca do achado 1.
- **A escala foi levada até o fim.** O editor, a folha de pronúncia, as contagens dos nomes, as chamadas e os tempos das partes batem
  com o texto de agora, e as frases que saíram estão riscadas com a origem. Nenhuma tela ficou órfã (a da reivindicação, as do
  Factorian e do Limiting Deep, a do ponto antigo do Meteor).

NÃO TOCAR:
- O gancho inteiro, da 1ª frase à assinatura ("You're at Alpha Point, and this is where the story of the bottom of the Atlantic
  begins.").
- Em p7, tudo o que o Lucas manteve, palavra por palavra: a outra candidata com a placa e o ritmo ("three to four times the pace of the
  plates off Puerto Rico"); "The islands there are a chain of small volcanoes, with no permanent residents."; o lago de lava do Mount
  Michael; "The expedition mapped this trench with its sonar in 2019." a "The expedition mapped it but didn't dive there."; "In 2023,
  the International Hydrographic Organization recognized the Southern Ocean. It begins at 60 degrees south."; "The trench's southern
  tip crosses the line." no lugar novo; "By that line, the Meteor Deep, well to the north, is in the Atlantic."; "The organization says
  the line carries no political meaning, and not every country uses it."; e "With the line or without it," na emenda (só a segunda
  metade troca).
- A ponte de saída de p7: "Off Puerto Rico, the 1964 crew's fish were waiting for a second look."
- A ponte de p6: "The expedition also took its sonar, and its sub, to the other end of the Atlantic." (o "and its sub" paga "the same
  sub" de p8).
- As outras pontes e pousos que funcionam: "A sound could give a number. It couldn't show anyone what was down there."; "Neither could
  map the floor. That took a different kind of sonar."; "That, the agency suggests, is why the trench is so deep."; "That number was
  not the one in the official list."
- "The sources disagree on exactly how deep it got. It never reached the deepest point, though."; "No one knows how deep the fish was
  when it swam in."; o bloco de 1918 com "It wasn't in the trench."; o fim de p4 sem ponte.
- "Soon after, a problem with the robot cut this one short." (a frase da inscrição); "He was the first person to reach the deepest
  point of the Atlantic."; "One down!"
- "That's almost exactly what the newspapers reported in 1939." e "As of October 2026, the official list of undersea features doesn't
  include the Milwaukee Deep." (datada; a Sala relê na semana da gravação).
- O fecho inteiro: "By NOAA's estimate, no fish lives much deeper than about 27,500 feet. The net that brought up the cusk-eel in 1970
  had gone down nearly that far. The deepest point in the Atlantic, about 83 miles off Puerto Rico, sits right at that edge." Ele não
  repete a pergunta, não é lista e termina num lugar do mapa.
