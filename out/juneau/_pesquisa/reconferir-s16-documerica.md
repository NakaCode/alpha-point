# s16: o que a NARA diz dos direitos do DOCUMERICA

Pedido do `conferente-de-midia` no lote 1 (`conferencia-midia.json`, s16 plano 1 e plano 2, `reconferir`): ler o que a
NARA ou a EPA dizem dos direitos da série DOCUMERICA e do fotógrafo, copiar o texto e a hora, para ele julgar de novo.

**Como se leu:** pelo Claude central, na API oficial v2 da NARA (`catalog.archives.gov/api/v2/records/search?naId=…`),
com a chave do canal e o User-Agent do canal. É a porta que a NARA abre para programas (CLAUDE.md, "Tropeços"). Não
se usou o navegador do app nem o `/proxy/` do site. Só o 550551 e a série foram lidos. O 550557 não foi lido: o
conferente já disse que ele falha o contexto mesmo com a licença resolvida.

## O item 550551 (s16 plano 1), lido às 21:55:44Z de 27/09/2026

- Página: https://catalog.archives.gov/id/550551
- `title`: "DOWNTOWN FAIRBANKS, VIEW SOUTHWEST. THE CHENA RIVER FLOWS THROUGH THE CENTER OF TOWN. THE PIPELINE WILL
  CROSS THE CHENA A FEW MILES UPSTREAM AT MILE 450. NEAR MILE 445"
- `useRestriction.status`: "Unrestricted"
- `accessRestriction.status`: "Unrestricted"
- `productionDates`: agosto de 1973
- `contributors`: "Cowals, Dennis, 1945-", `contributorType` "Photographer" (naId 10569342)
- `ancestors`: a série 542493 (DOCUMERICA), no Record Group 412, "Records of the Environmental Protection Agency"
- O registro não tem nenhum campo de copyright nem nota de direitos além do `useRestriction`.

## A série 542493 (DOCUMERICA), lida às 21:55:53Z de 27/09/2026

- Página: https://catalog.archives.gov/id/542493
- `useRestriction.status`: "Unrestricted"
- `accessRestriction.status`: "Unrestricted"
- `creators`: "Environmental Protection Agency. (12/02/1970 - )"
- `scopeAndContentNote`, o trecho dos fotógrafos: "The images were made by approximately 70 well-known photographers
  contracted by the EPA for this project."
- O registro não tem nenhum campo de copyright nem nota de direitos além do `useRestriction`.

## Segunda leitura: o que a NARA diz de "unrestricted", no site dela (27/09/2026, 23:48:57Z a 23:52:13Z)

O lote 2 manteve o s16 p1 `reprovado`: "O que reabriria: um texto da NARA ou da EPA sobre os direitos da série, ou uma
regra nova do Lucas". O Claude central procurou esse texto pelo navegador do app, sem o Lucas acompanhar (CLAUDE.md, "O
navegador do app, sem o Lucas acompanhando"). Nenhuma página pediu verificação.

1. **A página da série no site da NARA** (aberta às 23:48:57Z): https://www.archives.gov/research/environment/documerica-photographers. O
   único trecho sobre quem fez as fotos: "For the Documerica Project (1971-1977), the Environmental Protection Agency
   (EPA) hired freelance photographers to capture images relating to environmental problems, EPA activities, and
   everyday life in the 1970s." A página não fala de direitos.
2. **A NARA no Flickr (The Commons)**: a foto do DOCUMERICA "Hitchhiker with His Dog "Tripper" on U.S. 66, May 1972"
   (https://www.flickr.com/photos/usnationalarchives/3678468445/) tem a marca "Sem restrições de direitos autorais
   conhecidas" ("no known copyright restrictions"), e a descrição diz "Access Restrictions: Unrestricted Use
   Restrictions: Unrestricted". O link "Declaração de direitos" da NARA, na página do The Commons
   (https://www.flickr.com/commons/usage/), leva à página abaixo. A página do The Commons, lida às 23:50:40Z, diz
   da marca, em português, copiado: "AO DECLARAR "SEM RESTRIÇÕES DE DIREITOS AUTORAIS CONHECIDAS", AS
   INSTITUIÇÕES PARTICIPANTES COMPARTILHAM OS BENEFÍCIOS DE SUA PESQUISA SEM FORNECER UMA GARANTIA EXPRESSA OU
   IMPLÍCITA A TERCEIROS QUE DESEJEM USAR OU REPRODUZIR A FOTOGRAFIA. SE VOCÊ USAR UMA FOTO DO COMMONS, LEMBRE-SE DE
   CONDUZIR UMA ANÁLISE INDEPENDENTE DAS LEIS APLICÁVEIS ANTES DE PROSSEGUIR COM UM NOVO USO ESPECÍFICO."
3. **A declaração de direitos da NARA** (aberta às 23:51:04Z): https://www.archives.gov/social-media/flickr-faqs.html, pergunta "What does "no
   known copyright restrictions" mean?". O texto, copiado:
   > National Archives' images that are part of The Flickr Commons are marked "no known copyright restrictions." This
   > means the U.S. National Archives is unaware of any copyright restrictions on the publication, distribution, or
   > re-use of those particular photos. Their use restriction status in our online catalog is "unrestricted."
   > Therefore, no written permission is required to use them.

4. **A foto irmã no Flickr da NARA** (aberta às 23:52:13Z): "Downtown Fairbanks. View Southwest with the Tanana
   River in the Distance. Chena River Flows through the Center of Town. The Pipeline Will Cross the Chena at Mile 450
   and the Tanana at Mile 519 near Mile 445 08/1973" (https://www.flickr.com/photos/usnationalarchives/3971286999/). A
   descrição dá "U.S. National Archives' Local Identifier: 412-DA-8065", "Photographer: Cowals, Dennis, 1945-",
   "Persistent URL: catalog.archives.gov/id/550550" e "Access Restrictions: Unrestricted Use Restrictions:
   Unrestricted". A marca é "Sem restrições de direitos autorais conhecidas". **É o item 550550, não o nosso 550551**: o
   mesmo fotógrafo, a mesma série, o mesmo mês e a mesma vista do centro para o sudoeste. O 550551 não apareceu na
   busca do Flickr.

O que isso muda, para o conferente julgar: a NARA diz, com as palavras dela, que o status "unrestricted" do catálogo
quer dizer que não é preciso permissão escrita. O item 550551 tem `useRestriction.status: "Unrestricted"` no catálogo
(primeira leitura, acima). O texto fala das fotos que a NARA pôs no Flickr, e a irmã 550550, do mesmo fotógrafo, está
lá com a marca. A página do The Commons, em geral, diz que a marca não dá garantia e pede "uma análise independente".

## O que fica para o conferente julgar

A origem confirma que os fotógrafos eram **contratados** da EPA, não funcionários. E declara o uso **sem
restrição** ("Unrestricted"), no item e na série. Se isso basta como licença, pela regra dele, é o julgamento dele.
