# Gerador "Okinawa" · vídeo 3, rodada B · 09/10/2026

**Pedido do Lucas (09/10/2026):** "Algum lugar que tenha MUITOS americanos ou poucos americanos, mas que consigamos explicar o porquê... Talvez um lugar no exterior com bastante americanos como por exemplo okinawa".

**Método:** 10 buscas, 8 páginas HTML abertas (WebFetch), mais o PDF da prefeitura de Okinawa e a tabela do DMDC lidos em texto (PyMuPDF) a partir do arquivo que o WebFetch guardou. Sem vidIQ e sem navegador (regra deste gerador). O resumo do WebSearch não conta como leitura: só entra em "lido" o que abri. **Nota de honestidade:** o WebFetch passa a página por um modelo pequeno, então a "frase lida" das páginas HTML é a que esse modelo devolveu entre aspas; as dos dois PDFs eu conferi no texto extraído.

## Resumo para o Lucas

Okinawa dá vídeo. A contradição é limpa e já está em documento da própria prefeitura: **0,6 % da terra do Japão e 70,3 % das instalações de uso exclusivo das forças americanas no Japão**. Três ângulos, em ordem de preferência:

| # | Ângulo | Contradição | Mapa | Risco | Nota |
|---|---|---|---|---|---|
| A | **0,6 % / 70,3 %: por que as bases couberam numa ilha só** | Uma ilha de 2.281 km² (a prefeitura toda) segura 70 % das bases americanas no Japão | A explicação: a ilha, as bases, e as distâncias às costas vizinhas | médio | 8,0 |
| B | **27 anos que Okinawa não foi nem Japão nem EUA (1945-1972)** | Governada pelos EUA por 27 anos sem ser território americano: dólar, direita na estrada, e um dia (30/07/1978) todos os carros trocaram de lado | Média: a área administrada, a ilha, a estrada | baixo a médio | 7,5 |
| C | **A primeira cadeia de ilhas** | A ilha japonesa mais perto de Taiwan e da China do que de Tóquio | Forte: distâncias reais por geometria | médio (Taiwan/China) | 6,5 |

**Recomendação:** A como vídeo, com B como o miolo histórico (os 27 anos explicam por que as bases ficaram). B sozinho tem o melhor gancho de curiosidade ("o dia em que a ilha trocou de lado da estrada") e é o ângulo que não vi nos títulos do YouTube, mas é um pouco curto. C só se o Lucas quiser geopolítica.

## O que li (fonte primária primeiro)

1. **Prefeitura de Okinawa (Guntenkyo Council), pedido de novembro de 2020**, https://www.pref.okinawa.jp/_res/projects/default_project/_page_/001/017/401/r2_youseisyo.pdf (lido em 09/10/2026, 41 páginas, extraído do arquivo guardado):
   - p. 3: "Although Okinawa accounts for only 0.6 percent of the total land area of Japan, a vast area of approximately 70.3 percent of the facilities exclusively used by the U.S. Forces in Japan are located on and around our islands."
   - p. 13: "As of the end of June 2020, there have been a total of 6,048 criminal cases involving those who are subject to SOFA since Okinawa's reversion to Japan in 1972. The figure includes 582 cases of heinous offenses such as murder, robbery, and rape."
   - É documento da própria prefeitura, parte interessada. Na tela: "segundo a prefeitura de Okinawa".
2. **Tabela da prefeitura de Okinawa sobre o DMDC (Departamento de Defesa)**, https://www.pref.okinawa.jp/_res/projects/default_project/_page_/001/017/466/us-mil-number202003-1.pdf (lida em 09/10/2026, em japonês, 3 páginas): título "米軍の駐留人数（2020年３月31日現在）"; linha **日本 (Japão): Exército 2.525, Marinha 20.636, Fuzileiros 19.177, Força Aérea 12.810, total 55.148** (março de 2019: 56.118). A nota da tabela diz: sem Guarda Costeira, reservistas nem civis; a linha de Okinawa é só "referência" de junho de 2011, em data diferente. A tabela foi editada pela prefeitura a partir do site do DMDC. **Não é o DMDC em si, nem é número atual.**
3. **Governo do Japão (Secretaria do Gabinete), página "Okinawa Reversion"**, https://www.cas.go.jp/jp/ryodo_eg/taiou/senkaku/senkaku02-02.html (lida em 09/10/2026): assinatura do Acordo de Reversão em 17/06/1971; vigência em 15/05/1972; "Kuba and Taisho Islands were provided to the US Forces as bombing ranges". A página não fala de 1945.
4. **nippon.com (publicação japonesa de dados), 25/05/2022**, https://www.nippon.com/en/japan-data/h01329/ (lida em 09/10/2026): "Okinawa continues to host over 70% of US military installations in Japan"; em 1972 as instalações americanas ocupavam "some 28,000 hectares", hoje "around 18,000 hectares" (redução de uns 35 %); 8,1 % da terra da prefeitura. A página não nomeia a fonte primária.
5. **Wikipedia, Okinawa Prefecture** (secundária, lida em 09/10/2026): área de 2.281 km²; cerca de 70 % da terra de uso exclusivo dos EUA no Japão, o que seria "about 10%" da área da prefeitura (**diverge dos 8,1 % do nippon.com: medida ou ano diferentes; a confirmar na fonte**); Reino de Ryukyu incorporado como prefeitura em 1879.
6. **Wikipedia, Battle of Okinawa** (secundária, lida em 09/10/2026): "The 82-day battle on Okinawa lasted from 1 April 1945 until 22 June 1945."; "According to local authorities, at least 149,425 Okinawan people were killed, died by coerced suicide or went missing."; apelido "typhoon of steel".
7. **Wikipedia, 730 (transport)** (secundária, lida em 09/10/2026): "all the traffic in the prefecture was changed back to driving on the left on July 30, 1978"; a página diz que a direita foi imposta em 24/06/1945 (a confirmar em fonte primária).
8. **Não abriram:** pref.okinawa.jp "us-bases-in-okinawa.html" (404); pref.okinawa.lg.jp/...18_20260331_matome.pdf (404; apareceu na busca com o texto "80 years after the end of World War II, approximately 70.3%"); dc-office.org/basedata (só o título, página carregada por script); dwp.dmdc.osd.mil (só o título, idem); usfj.mil (403, não contornado).

## Candidato A · "0.6% of Japan, 70% of the Bases"

**Título de trabalho:** *Why 70% of America's Bases in Japan Sit on 0.6% of the Land*

**A contradição:** a prefeitura de Okinawa diz que a ilha tem 0,6 % da terra do Japão e 70,3 % das instalações de uso exclusivo dos EUA. Gancho, esboço: *"Put a dot on a map of Japan for every American base. Seven out of ten dots land on a few islands you can barely see at that scale. This is Okinawa, and the reason is a battle that ended in June 1945 and a handover in 1972 that did not hand over the bases."* (esboço, não texto final).

**Por quê (o fio do vídeo):** a resposta tem quatro camadas, cada uma um mapa:
1. *Geografia:* Okinawa fica no extremo sul do Japão, perto de Taiwan e da China (distâncias a medir por geometria, ver C).
2. *1945:* a batalha (1º de abril a 22 de junho de 1945, fonte 6) deixou a ilha ocupada e com campos de pouso; os EUA ficaram.
3. *1945-1972:* a administração americana ampliou as bases (ver B). *A confirmar:* a tomada de terras particulares nos anos 1950 e o papel das guerras da Coreia e do Vietnã.
4. *1972:* a devolução (fonte 3) manteve o uso das instalações. Em 1972 as instalações ocupavam uns 28.000 ha, hoje uns 18.000 ha (fonte 4): **a área encolheu uns 35 %, mas a fatia de Okinawa continuou perto de 70 %** (a conferir com a série do Ministério da Defesa, não lida).

**O mapa:** ilha de Okinawa com Kadena, Futenma, Camp Schwab/Henoko, Camp Hansen e Naha; a pegada das bases sobre a ilha; o Japão inteiro com os pontos. Dados: Natural Earth e OSM (crédito OSM). Cumpre a regra de "mais mapa".

**Números que o vídeo precisa e faltam (a confirmar):**
- Efetivo atual. O que li: 55.148 militares da ativa no Japão em 31/03/2020 (fonte 2, tabela da prefeitura sobre o DMDC). A busca devolveu 52.793 (março de 2025) em site secundário, não aberto. Estimativas de 24.600 a 30.000 em Okinawa, em resumos de busca, nada lido. Dependentes: nada encontrado. O DMDC é carregado por script e não abriu: a planilha "Active Duty Military Personnel by Country" tem de ser baixada pelo navegador do app com o Lucas dando o sim, ou o vídeo usa o número da prefeitura com data e atribuição.
- Os "14 % da ilha principal": o resumo da busca atribui à brochura da prefeitura "about fourteen percent (14%) of its main island". Lidos: 8,1 % (nippon.com) e ~10 % (Wikipedia) da prefeitura inteira, que é outra medida. A confirmar na brochura.

**Risco: médio.** Protestos (Futenma e Henoko), crimes de militares, acidentes de aeronave, ruído e a batalha de 1945 são sensíveis, e o tema é usado politicamente nos dois lados. **Como o vídeo trata sem tomar lado:**
- número sempre com atribuição ("segundo a prefeitura de Okinawa", "segundo o Ministério da Defesa do Japão") e data;
- as posições em frases curtas e de peso igual: o governo do Japão (a aliança exige as bases), os EUA (defesa do Japão e dissuasão) e a prefeitura e muitos moradores (o peso desigual), sem adjetivo do narrador;
- a pesquisa de opinião (o referendo de 2019 sobre Henoko, a confirmar) entra como número com fonte, não como veredito;
- crimes: só o total oficial da prefeitura (6.048 casos desde 1972, fonte 1, dizendo que quem soma é a prefeitura), sem detalhar casos individuais; a batalha de 1945 sóbria, sem imagem gráfica;
- o roteiro não diz "deveriam sair" nem "têm de ficar", e termina no que cada governo diz que vai fazer (a confirmar a posição atual sobre Futenma e Henoko).

**Fontes primárias à mão:** prefeitura de Okinawa (inglês), Ministério da Defesa do Japão (a confirmar o endereço), DMDC, acordo de reversão (fonte 3), Estado americano (Office of the Historian) para 1945-1972.

**Minutos de assunto: 11.**

## Candidato B · "27 Years That Okinawa Was Neither Japan Nor America"

**Título de trabalho:** *The Island America Ran for 27 Years Without Owning It*

**A contradição:** de 1945 a 1972 os EUA governaram Okinawa sem ela nunca ser território americano. A página japonesa da fonte 3 cita o artigo 3 do tratado de São Francisco como base da administração americana (a "soberania residual" do Japão, a confirmar no texto do tratado). A ilha usou dólar (de 1958 a 1972, segundo resumo de busca, a confirmar; antes, uma moeda militar, o "B-yen") e dirigia pela direita. Em 15/05/1972 voltou ao Japão (fonte 3), mas a estrada ficou na direita até **30/07/1978** (fonte 7). Os detalhes (o trânsito parado entre 22h do dia 29 e 6h do dia 30; carros "729") são de resumo de busca, a confirmar. Gancho, esboço: *"At 6 a.m. on July 30, 1978, every driver on an island of a million people had to switch sides of the road. Six years after America gave it back."* (população da época a confirmar).

**Por quê:** explica A pela porta humana: o dinheiro, a placa, o passaporte. Mais leve e mais "história esquisita" que A, bom para o clique do americano curioso.

**O mapa:** a área administrada pelos EUA (Ryukyu; Amami voltou ao Japão em 1953, a confirmar), a estrada de Okinawa e o monumento "730" em Naha (a confirmar), as ilhas Kuba e Taisho como campos de bombardeio (fonte 3). Mapa médio, menos forte que A e C.

**Risco: baixo a médio.** O período é menos disputado hoje, mas a tomada de terras particulares e a era do Vietnã (Okinawa como base de bombardeiros, a confirmar) são sensíveis. Tratamento: fatos com data, atribuição ao documento oficial, nenhuma opinião sobre a justiça da ocupação.

**Fontes primárias:** tratado de São Francisco e acordo de 1971 (Office of the Historian), Secretaria do Gabinete do Japão (fonte 3), arquivos nacionais dos EUA (USCAR), arquivo da prefeitura. A confirmar: dólar de 1958, B-yen, 24/06/1945 da direita.

**Minutos de assunto: 10** (apertado; funciona melhor junto com A).

## Candidato C · "The First Island Chain"

**Título de trabalho:** *The Island Chain That Shapes the Pacific*

**A contradição:** Okinawa fica mais perto de Taipei e de Xangai do que de Tóquio (distâncias a **calcular por geometria**, nada lido: ordem de grandeza de Naha-Tóquio ~1.550 km, Naha-Taipei ~630 km, Naha-Xangai ~850 km, de memória), e é uma peça do que estrategistas americanos chamam de "primeira cadeia de ilhas".

**Por quê:** o mapa mais forte dos três, porque é geometria: círculos de raio fixo em torno de Okinawa, a cadeia do Japão às Filipinas, Yonaguni a uns 110 km de Taiwan (de memória, **a confirmar**) e o estreito entre Okinawa e Miyako-jima como passagem. Dados: Natural Earth e OSM; batimetria (licença a confirmar).

**Risco: médio, o mais exposto dos três.** Envolve China e Taiwan, e a atualidade muda toda semana. Tratamento: só geografia (distância, estreitos, ilhas) mais o que cada governo diz em documento oficial; sem previsão de guerra e sem "provável" sem fonte. Vídeo que mistura cenário de conflito envelhece mal e vira posição.

**Fontes primárias:** Livro Branco do Ministério da Defesa do Japão e relatório do Departamento de Defesa dos EUA sobre a China (a confirmar). **Nenhuma lida nesta rodada.**

**Minutos de assunto: 10.**

## Demanda e concorrência (sem vidIQ)

- **busca_vidiq:** não medida: a regra deste gerador proíbe vidIQ. Termos a medir pelo curador: "okinawa us military bases", "why so many us bases in okinawa", "okinawa 1945 1972", "first island chain".
- **Concorrência vista** (um WebSearch restrito a youtube.com em 09/10/2026; só títulos e URLs, sem visualizações nem canais):
  - "Why So Many US Military Bases On This Small Island In Japan?" https://www.youtube.com/watch?v=ABgRQWXuzl0 (o tema exato de A);
  - "Okinawa - A History of US Military Presence" https://www.youtube.com/watch?v=WdV0O_vYQx8;
  - "Insane Military Bases: Inside the 32 Mysterious United States Military Bases in Okinawa, Japan" https://www.youtube.com/watch?v=51PWrYGQVqo;
  - "Okinawa's Military Bases and the US–Japan Alliance" https://www.youtube.com/watch?v=duavcqv93nY;
  - "How Japan's Okinawa Could Become US-China Battlefield, As Locals Protest Militarisation" https://www.youtube.com/watch?v=euby8JEll8Q (o tema de C, em formato de telejornal);
  - "Okinawa: The future of US military bases | 101 East" https://www.youtube.com/watch?v=bB2STxdGmXI.
  O "porquê tantas bases" (A) já existe em explicadores e telejornal. Nos títulos não vi o ângulo B (os 27 anos, o dólar, a troca de lado da estrada) nem um vídeo que use o mapa como a explicação. Pesa a favor de B no gancho, com A como espinha.

## O que falta antes de decidir (a confirmar)

- DMDC atual (Japão e Okinawa) e dependentes: baixar a planilha pelo navegador do app, com o sim do Lucas.
- A fatia de 70,3 % é de "instalações de uso exclusivo"; há variação entre fontes (um estudo de 2009 citado em busca dá 73,9 % por área, não lido). Usar sempre com atribuição e ano.
- Os 14 % da ilha principal e a série de km² do Ministério da Defesa (1972 até hoje).
- Futenma e Henoko: o acordo de 1996, a posição atual do governo do Japão e da prefeitura, e o referendo de 2019 (só em resumo de busca).
- O incidente de 1995 (só em resumo de busca): se entrar, com fonte primária e tratamento sóbrio; senão, fora.
- Distâncias de C e Yonaguni-Taiwan: calcular com a geometria do canal.
- Licença das imagens: arquivos nacionais dos EUA (domínio público); a Library of Congress está desligada no canal.
