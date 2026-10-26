# Leitura 04 · De onde vêm os nomes: Brownson, Factorian e Milwaukee (e o Pressure Deep, que não é o Factorian)

Vídeo 5 (`atlantico-fundo`), pauta `pautas/2026-10-24-video-5.md`, §9, item 4. Lido em 26/10/2026 pelo leitor dos itens 1 e 4.

**As portas que valeram:**
- **O gazetteer IHO-IOC GEBCO oficial, na NCEI**, pela API do próprio site (`https://www.ngdc.noaa.gov/gazetteer/api/v1/feature?nameContains=…`,
  `/contact/<id>` e `/meeting`). Um pedido por vez, com 65 s entre eles, porque o robots.txt pede 60. Diz o estado atual de cada nome,
  quem propôs, quem descobriu e em que reunião se aprovou.
- **A Marine Regions** (VLIZ), pela REST e pelas fichas. A Marine Regions copia o gazetteer, mas não é ele: um dos nomes abaixo vem de
  outra fonte.
- **Os relatórios do SCUFN** (o subcomitê de nomes de feições submarinas da GEBCO), em PDF na pasta `/uploads/` da IHO, que o
  robots.txt permite. As páginas HTML do iho.int respondem com um desafio de JavaScript e cookie, e parei nelas.
- **O relatório anual do Coast and Geodetic Survey de 1883** (NOAA Central Library, domínio público), **a *International Hydrographic
  Review* de 1936** (arquivo aberto da UNB) e **o blog da expedição Five Deeps** (fivedeeps.com).

---

## 4.1 · Brownson Deep: de quem

**1. A resposta:**
- **A pessoa e a sondagem estão confirmadas.** O tenente-comandante **W. H. Brownson**, da Marinha dos EUA, comandava o vapor *Blake*,
  do U.S. Coast and Geodetic Survey. Ele assumiu o navio em 01/10/1882, no lugar do comandante J. R. Bartlett. Em **27/01/1883**, ao norte de Porto
  Rico, a **19°40'50"N, 66°23'40"W**, sondou **4.561 braças = 27.366 ft = 8.341 m**. Foi com arame, e o fundo era lodo marrom. O
  relatório diz que, pelo que se acreditava, era a maior profundidade de onde já se tinham tirado amostra do fundo e temperatura. Citação do relatório:
  "he sounded in four thousand five hundred and sixty-one fathoms, finding the bottom to be brown ooze".
- **A ligação do nome com ele não está escrita em nada que eu li.** É a explicação provável: o mesmo sobrenome, e a sondagem recorde na
  mesma fossa. O nome "Brownson Deep" aparece pela primeira vez, nas fontes que li, citado a Lyman (1954). Stewart & Jamieson 2019 dizem
  que a depressão do fundo da fossa foi dividida, historicamente, em Brownson Deep e Milwaukee Deep, com a referência a Lyman (1954).
- **Uma fonte de 1936 dá outro comandante.** A *International Hydrographic Review* de 1936 atribui a mesma sondagem de 1883 a Charles D.
  Sigsbee, citando Murray (1888). O relatório oficial do próprio ano, de 1883, diz que o *Blake* saiu de Nova York em 09/12/1882 sob o
  comando de Brownson. Vale o relatório de 1883.
- **Em 1936 o nome não existia na nomenclatura da IHO.** O artigo da IHR conta os nomes da região até a carta GEBCO de 1935: "Nares
  Deep", para a parte norte, e "Puerto Rico Deep", para a parte sul. Não há "Brownson".
- **Hoje o nome não é oficial.** A API da NCEI não devolve nenhum registro com "Brownson" no gazetteer (26/10/2026, 16:00). Na Marine
  Regions só há "Brownson Ridge", uma variante antiga, do comitê americano ACUF, para a Puerto Rico Ridge (MRGID 34111, a 21°N, 66°W). A
  origem dessa variante também não está escrita. A Five Deeps, o BGS e Bongiovanni et al. 2021 usam "Brownson Deep" sem aprovação do
  SCUFN. Stewart & Jamieson 2019 pedem que "Brownson" e "Milwaukee" saiam de uso.

**2. As fontes:**
- U.S. Coast and Geodetic Survey, *Report of the Superintendent … showing the progress of the work during the fiscal year ending with
  June, 1883*, p. 46 (a sondagem) e Apêndice 5, p. 113 (a troca de comando). Cópia da NOAA Central Library:
  https://library.oarcloud.noaa.gov/docs.lib/htdocs/rescue/cgs/002_pdf/CSC-0082.PDF. Li as páginas citadas e o índice, pelo texto do
  PDF, em 26/10/2026.
- "The Naming of Nares and Puerto Rico Deeps", *The International Hydrographic Review* XIII(1), 1936, assinado "H. B.":
  https://journals.lib.unb.ca/index.php/ihr/article/view/27837. Li o **texto inteiro** em 26/10/2026.
- Stewart & Jamieson 2019, *Earth-Science Reviews* 197:102896, DOI 10.1016/j.earscirev.2019.102896, CC BY 4.0. Li o **texto inteiro**
  (§6 e Tabela 1), do PDF do NORA, em 26/10/2026.
- O gazetteer na NCEI (API) e a Marine Regions (MRGID 34111), lidos em 26/10/2026.

**3. O grau:**
- **Confirmado**, pelo relatório primário: Brownson no comando e a sondagem de 4.561 braças em 27/01/1883.
- **Não conferido**: que o "Brownson Deep" homenageia ele, quem deu o nome e quando. A Sala pode abrir no navegador do app:
  - Lyman 1954, *Proc. R. Soc. Lond. A* 222:334–336, DOI 10.1098/rspa.1954.0075, em https://royalsocietypublishing.org/doi/10.1098/rspa.1954.0075.
    Deu 403 com desafio do Cloudflare, e pode estar atrás de paywall. No JSTOR é o 99222.
  - O blog "Worlds Revealed" da Library of Congress, de 11/2024, em https://blogs.loc.gov/maps/2024/11/puerto-rico-trench/. Deu 403 à
    checagem em 24/10, e não tentei de novo. Um buscador resume o texto assim: o nome Brownson Deep é de um comandante que mediu a fossa
    antes. Não li o texto.

**4. O que muda na pauta:**
- A pauta não usa "Brownson" na fala, e a regra da checagem (§2.8, "O que não se afirma") continua: nunca chamar de nome oficial.
- **Uma linha nova no §5, se o roteiro quiser**: "27/01/1883 | o vapor *Blake*, do Coast and Geodetic Survey, sob o tenente-comandante W.
  H. Brownson | 4.561 braças = 8.341 m (27.366 ft), com arame, a 19°40'50"N, 66°23'40"W, ~60 mi a leste do ponto mais fundo de hoje |
  relatório do USC&GS de 1883, p. 46".
- **A frase tentadora, com cuidado:** o arame de 1883 deu 27.366 ft, a ~120 ft do sonar de 2018 (27.487 ft). Só que foi noutro lugar,
  ~60 mi a leste. Se entrar, a fala diz que o lugar é outro:
  > In 1883, a U.S. survey ship lowered a weighted wire north of Puerto Rico. Its commander was a Navy officer named Brownson. The wire
  > touched bottom at about 27,400 feet. At the time, it was believed to be the deepest spot anyone had ever sampled.

  Se o roteiro quiser dizer que o nome é dele: "The deepest part of the trench is still often called the Brownson Deep." O "named after
  him" só entra depois de a Sala ler Lyman ou o blog da LoC.

---

## 4.2 · Factorian Deep: de quê

**1. A resposta:**
- **O nome vem do submersível *Limiting Factor***, que chegou ao fundo do lugar. Citação da ficha do gazetteer oficial: "Named in
  relation to the full ocean depth submersible 'Limiting Factor' that successfully reached the bottom of this feature, deepest point in
  the Southern Ocean."
- **A outra metade do nome está no vizinho.** O **Limiting Deep**, com 7.286 m, a 60,61564°S, 26,0899°W, é o "second deepest point in
  the Southern Ocean". O nome foi aprovado na mesma reunião, com a mesma explicação: o mesmo submersível. Fica a 33 km (21 mi) do
  Factorian, pela minha conta. O nome do submarino foi repartido entre os dois pontos mais fundos do Oceano Austral.
- **A ficha do Factorian:** aprovado; profundidade máxima de **7.431 m**; ponto mais fundo a **60,47934°S, 25,54475°W**, que bate com os
  60,479°S, 25,542°W do BGS (a 0,2 km); forma elíptica e alongada, com 10,5 × 41 km.
- O nome *Limiting Factor*, como o do navio *Pressure Drop*, vem dos romances da série "Culture", de Iain M. Banks. Quem diz é a
  página "Naming" da Five Deeps (https://fivedeeps.com/home/technology/names/, lida em 26/10/2026).

**2. As fontes:**
- O gazetteer IHO-IOC GEBCO na NCEI, ficha "Factorian Deep" (featureId 889220, atualizada em 14/12/2020) e ficha "Limiting Deep"
  (featureId 889224), pela API (`/feature?nameContains=Factorian` e `…=Limiting`), lidas em 26/10/2026.
- Marine Regions, MRGID 63454 (https://www.marineregions.org/gazetteer.php?p=details&id=63454), com o mesmo texto, lida em 26/10/2026.

**3. O grau:** **confirmado**, no gazetteer oficial.

**4. O que muda na pauta:**
- §4, linha **A outra candidata**. O "Factorian Deep (7.432 m, a 60,479°S)" fica. Se o roteiro quiser o nome, acrescentar: "o nome
  vem do submersível *Limiting Factor*, que chegou ao fundo dele em 2019; o segundo mais fundo do Oceano Austral, ao lado, se chama
  Limiting Deep (gazetteer GEBCO, SCUFN-33, 2020)".
- Como a fala diria:
  > The deepest point of the Southern Ocean has an odd name: Factorian Deep. It comes from the submersible that reached its bottom, the
  > Limiting Factor. Its neighbor, about 20 miles away, got the other half of the name. It's called Limiting Deep.

---

## 4.3 · Quem propôs e quando o SCUFN aprovou

**1. A resposta:**
- **Factorian Deep:**
  - quem propôs: **A. Jamieson & C. Bongiovanni, Newcastle University, Reino Unido** (a ficha de contato 31601 no gazetteer);
  - quando: a proposta é de **2019**, no documento SCUFN33-04.2A, um lote de 12 propostas da Newcastle "for Five Deeps Expedition";
  - quem descobriu: o **DSSV *Pressure Drop***, em **2019** (a ficha de contato 31602);
  - a aprovação: na **SCUFN-33**, por videoconferência, em **9 e 10 de novembro de 2020**. Era para ser em São Petersburgo, e mudou pela
    pandemia;
  - a decisão é a SCUFN33/21. Citação do relatório: "Proposal for Factorian Deep is ACCEPTED with number of polygon coordinates to be
    reduced.";
  - a ficha do gazetteer foi atualizada em 14/12/2020.
- **Limiting Deep:** a mesma proposta, aprovada na mesma reunião (decisão SCUFN33/25).
- **Meteor Deep:**
  - a proposta é da mesma dupla da Newcastle, de **2020**;
  - quem descobriu o ponto: o *Pressure Drop*, em **2019**;
  - a aprovação: na **SCUFN-34, sessão VTC02, em 7 de junho de 2021** (decisão SCUFN34/VTC02/37, "Proposal for Meteor DEEP is ACCEPTED"),
    e o gazetteer foi atualizado em 16/06/2021;
  - o nome vem do navio de pesquisa alemão *Meteor*, que descobriu e levantou a Fossa das Sandwich do Sul;
  - na SCUFN-33, o secretário ficou de perguntar à Newcastle se ela proporia o Meteor Deep (decisão SCUFN33/19).
- **Brownson Deep e Milwaukee Deep:** não achei proposta nem aprovação nos relatórios da SCUFN-33 e da SCUFN-34, e nenhum dos dois está
  hoje no gazetteer oficial (4.1 e 4.4).

**2. As fontes:**
- IHO-IOC GEBCO SCUFN, "SCUFN-33 … Summary Report" (final, 03/01/2021):
  https://iho.int/uploads/user/Inter-Regional%20Coordination/GEBCO/SCUFN/SCUFN33/SCUFN33_2020_P_EN_Final_Report_3Jan2021.pdf. Li o
  **texto inteiro** em 26/10/2026.
- IHO-IOC GEBCO SCUFN, "SCUFN-34 Report" v1.1 (05/01/2022):
  https://iho.int/uploads/user/Inter-Regional%20Coordination/GEBCO/SCUFN/SCUFN34/SCUFN34_2021_P_EN_Report_v1.1_5Jan2022.pdf. Li as
  partes citadas em 26/10/2026.
- O gazetteer na NCEI, pela API (fichas e contatos), lido em 26/10/2026.
- A tabela de reuniões do gazetteer dá a SCUFN-33 como "9-13 November". O relatório da própria reunião diz 9–10 de novembro de 2020, e
  vale o relatório.

**3. O grau:** **confirmado**, nos documentos da IHO e no gazetteer.

**4. O que muda na pauta:** nada na fala obrigatoriamente. Para o §4, um registro: "Factorian Deep e Limiting Deep aprovados pelo SCUFN
em novembro de 2020 (SCUFN-33); Meteor Deep, no ponto novo, em junho de 2021 (SCUFN-34). Os dois propostos por Jamieson & Bongiovanni,
da Newcastle". Se a fala quiser:
> The name became official in 2020, when an international naming committee approved it.

---

## 4.4 · Milwaukee Deep, de passagem

**1. A resposta:**
- **O nome vem do cruzador USS *Milwaukee***, que fez a sondagem recorde em 1939. Citação do *The Sun* de 1939: "The new depression has
  been named the Milwaukee Deep, from the United States cruiser from which the record sounding was made."
- **Quem deu o nome** a matéria não diz. É um boletim da National Geographic Society, distribuído pela WNU.
- **Hoje:** o nome **não está no gazetteer oficial** (a API da NCEI não devolve nada para "Milwaukee", em 26/10/2026), embora estivesse
  lá até pelo menos 2019, com 8.740 m (Stewart & Jamieson 2019, Tabela 1; leitura 01, item c). A Marine Regions guarda um "Milwaukee
  Depth" (MRGID 30109) a 19,58333°N, 68,34167°W, mas com Jamieson et al. 2020 (*Endeavour*) como fonte, não a GEBCO.

**2. As fontes:**
- *The Sun* (Newberry, S.C.), 28/07/1939, p. 3, OCR do acervo da Univ. da Carolina do Sul:
  https://historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/ocr/. Lido em 26/10/2026.
- O gazetteer na NCEI (API) e a Marine Regions (MRGID 30109), lidos em 26/10/2026.

**3. O grau:**
- **Confirmado**: a origem do nome, pela imprensa de 1939, e a ausência de hoje no gazetteer.
- **Não conferido**: quando e por quê ele saiu do gazetteer. Não achei nada na SCUFN-33 nem na SCUFN-34.

**4. O que muda na pauta:** a regra da checagem (§2.8) fica: nunca "the Milwaukee Deep" como nome oficial. Agora dá para dizer por quê.
A fala:
> The spot was named the Milwaukee Deep, after the ship. Today, the international list of undersea names no longer includes it.

---

## 4.5 · Correção para a checagem: o "Pressure Deep" não era o Factorian

**1. A resposta:**
- A checagem (§2.3, a linha "O nome") põe o "Pressure Deep" junto do Factorian. **Não é ele.** No blog da expedição, em 09/02/2019,
  Vescovo propôs o nome **para o novo ponto mais fundo de toda a Fossa das Sandwich do Sul**, na parte do Atlântico, perto do antigo
  Meteor Deep. Não era o ponto mais fundo do Oceano Austral, ao sul de 60°S, que é o Factorian. Citação do blog: "We are going to
  propose naming this new point the "Pressure Deep" after the DSV Pressure Drop (our ship)".
- **Esse ponto do Atlântico é, pelo que tudo indica, o que hoje se chama Meteor Deep.**
  - A página de sonar da Five Deeps fala do ponto mais fundo da fossa, novo, ao lado do antigo Meteor Deep.
  - Bongiovanni et al. 2021 põem o ponto mais fundo da fossa "in Meteor Deep", a 55,230°S, 26,173°W, com 8.265 ± 13 m.
  - O gazetteer aprovou o "Meteor Deep" em 2021 com o ponto mais fundo a 55,23069°S, 26,17294°W.
  - A posição que os livros davam ao Meteor Deep antes (55,67°S, 25,92°W; Zhivago 2002 e Allaby 2009, pela Tabela 1 de Stewart &
    Jamieson 2019) fica a 51 km (32 mi) dali, pela minha conta. Stewart & Jamieson 2019 dizem também que, até então, o Meteor não estava
    no gazetteer.
  - O que não li em lugar nenhum: que o "Pressure Deep" foi proposto formalmente ao SCUFN. O nome aprovado foi Meteor.

**2. As fontes:**
- Five Deeps, "Southern Ocean Expedition Blog", post de 09/02/2019 (https://fivedeeps.com/?p=2915), e a página "Southern Ocean Sonar
  Images" (https://fivedeeps.com/home/expedition/southern/sonar/). Lidas em 26/10/2026.
- Bongiovanni, Stewart & Jamieson, *Geoscience Data Journal* 9(1):108–123, DOI 10.1002/gdj3.122, CC BY 4.0, §3.2 e Tabela 1. Li as
  partes sobre nomes no PDF que o leitor do item 2 baixou, em 26/10/2026.
- O gazetteer na NCEI, ficha "Meteor Deep" (featureId 889317); a SCUFN-34 (acima); Stewart & Jamieson 2019, Tabela 1 e p. 13.

**3. O grau:**
- **Confirmado**: para onde foi proposto o "Pressure Deep" e o Meteor Deep aprovado em 2021.
- **Dedução consistente, não escrita em fonte**: que o ponto do "Pressure Deep" e o do Meteor Deep de hoje são o mesmo.

**4. O que muda na pauta:**
- Na checagem, §2.3, linha "O nome": tirar "Em 2019, a Five Deeps propôs 'Pressure Deep', pelo navio *Pressure Drop*" do Factorian, e
  pôr no Meteor.
- §4, linha **A outra candidata**: o "Meteor Deep (8.265 ± 13 m)" fica. Se o roteiro quiser:
  > The deepest point of the whole trench is called Meteor Deep, after a German research ship. The name is old. But since 2021 it
  > officially belongs to a spot the sonar found in 2019, about 30 miles from where older books put it. The expedition had wanted to
  > call it Pressure Deep, after its own ship.

---

## 4.6 · Ao lado: a posição do Meteor Deep na checagem

Isto não é do item 4, mas apareceu aqui. A checagem (§2.3 e o cético) dá o Meteor Deep a **55,323°S, 26,294°W**, "relida na Marine
Regions". Esse é o ponto que a Marine Regions mostra para a feição, e não o ponto mais fundo. A ficha do gazetteer na NCEI e Bongiovanni
2021 dão o ponto mais fundo a **55,231°S, 26,173°W**, a ~13 km dali. Com o Factorian acontece a mesma coisa: a Marine Regions mostra
60,412°S, 25,438°W, e o ponto mais fundo é o de 60,479°S, que a pauta já usa.

As contas que mudam um pouco: do Meteor até 60°S, ~530 km (330 mi), e não ~520. Se o mapa marcar o Meteor, a marca vai no ponto mais fundo,
55,231°S, 26,173°W. Isso é do leitor do item 2 (Bongiovanni) e da Sala.
