# Juneau: a busca pelo navegador do app

Quem opera o navegador do app é o Claude central (CLAUDE.md, "A marca", "O navegador do app, sem o Lucas
acompanhando"). A lista do que se procura aqui vem de `navegador-pendente--pesquisa-imagens.json` e
`navegador-pendente--pesquisa-pessoas.json`. Nada se baixa pelo navegador sem o "sim" do Lucas a uma lista no chat.

## 27/09/2026, primeira tentativa (17:5x, horário de Brasília)

| Hora (UTC) | Site | O que aconteceu | O que se fez |
|---|---|---|---|
| ~20:50 | vilda.alaska.edu | o navegador do app não abriu a página: "navigation ... was denied or failed" | não tentei de novo. O site está no ar: o robots.txt respondeu (lido à parte, por leitura simples, às 20:54). O bloqueio é a permissão do site no app, que é do Lucas |
| ~20:51 | www.loc.gov (a página do item 2004672324, Sitka em 1906, do s07 plano 2) | desafio do Cloudflare ("Just a moment...", `__cf_chl_rt_tk`) | parei na LoC pelo resto da tarefa, sem esperar o desafio passar: a aba foi fechada. O TIFF maior do s07 fica NÃO ACHADO pelo navegador |

O robots.txt do vilda (lido em 27/09/2026) veta a busca a robôs (`/digital/search/` e a busca de cada coleção), o
`/utils/` e o `/oai/`, e deixa as páginas de item. A busca lá é só pelo navegador do app.

## 27/09/2026, segunda sessão (18:35 a 18:50, horário de Brasília)

O Lucas estava presente no começo e deu a permissão do app a cada site ("Vamos fazer isso agora", 21:35Z). Depois, as
buscas correram sem ele: devagar, uma página por vez, só as que cada item pedia. A lista de resultados de cada busca
foi lida na própria página, sem clique. Nenhuma verificação de robô apareceu nos sites abaixo. Nada foi baixado.

Sites que recusaram nesta sessão, e onde parei: a Clinton Digital Library (desafio do Cloudflare), o sulianich.org e
o nwabor.org (403). O courts.alaska.gov não abriu. A LoC continua fora, pela primeira tentativa.

### O que vale para todo o vilda

- **A Alaska State Library mostra no vilda só a cópia grátis, de 720 px de largura.** O `info.json` do IIIF deu
  720×485, 720×582 e 720×595 nas três conferidas (`cdmg21/id/24764`, `/10107` e `/514`). É menos que o piso da foto
  pequena, de 800 px no lado maior (`marca/identidade.md` §5). Nenhuma foto da ASL entra no vídeo pelo vilda. A
  versão grande é a compra de US$ 30 por foto (`marca/midia.md` §7.5), e comprar é decisão do Lucas.
- **O vilda junta várias instituições, e só a ASL foi aprovada** (`midia.md` §7.5). O Anchorage Museum, a UAA, a UAF,
  o ARLIS e o Museum of the Aleutians não foram perguntados e ficam fora. O que apareceu deles vai abaixo como pista,
  não como candidato.

### Por item

| Cena e plano | Onde busquei | O que achei | Resultado |
|---|---|---|---|
| s01 p1 (e s62 p1): a eleição de 27/08/1974 | vilda e ASL: "election 1974", "Juneau 1974", "election" | A ASL tem uma foto só com "election", de 1940. De Juneau em 1974, só o slide "South Franklin Street, 1974", do Juneau-Douglas City Museum, com direito autoral incerto | NÃO ACHADO. Fica a rua de Juneau de ca. 1987 do rascunho, que espera o conferente |
| s06 p1: Juneau de 1900 a 1906 | ASL: "Juneau 1905" | "Juneau, Alaska. Sept. 23, 1905", vista larga da cidade (ASL-P226-233, `cdmg21/id/514`), 720×595 | Pequena demais: só entra comprando a versão grande. Fica o panorama de ca. 1899 do rascunho |
| s06 p2: o acampamento de 1880 e 1881 | ASL: "Harrisburg", "Juneau 1881" | A igreja de 1881, em foto sem data, e as leis de mineração de 04/10/1880, que são documento | NÃO ACHADO. Fica a Juneau City de 1887 do rascunho |
| s07 p2: o TIFF da LoC | — | A LoC continua fora (Cloudflare) | NÃO ACHADO pelo navegador |
| s09 p1: Ship Creek em 1914 | vilda: "Ship Creek 1914", "Anchorage 1914", "Ship Creek" | Nada com data de 1914. Do Anchorage Museum (não aprovado): "Ship Creek 1915", "Mud flats at Ship Creek" (1915) e prédios de "1910-1919" | NÃO ACHADO. Fica a "White City" de 1º/7/1915 do rascunho |
| s09 p2: as bases de 1939 a 1941 | USACE (`p15141coll5`): "Fort Richardson", "Anchorage", "Ladd Field", "Elmendorf", "Alaska"; ASL: "Fort Richardson"; vilda: "Fort Richardson 1941" | USACE: nada das bases; o Alasca lá é a Rodovia, de 1942 em diante. ASL: "Early Fort Richardson", aérea de 1940 do U.S. Army Alaska (ASL-P008-27, `cdmg21/id/24764`), 720×485. UAA (não aprovada): fotos pessoais de soldados em 1941 | Pequena demais: só entra comprando a versão grande. Fica a Ladd Field de 9/7/1943 do rascunho |
| s13 p1: a Suprema Corte em 1974 | vilda: "Alaska Supreme Court" | Nada na ASL. Pista: o arquivo de filmes da UAF tem "Profiles of the Alaska Supreme Court Justices", de 1974 a 1978 (AAF-3525), fonte não aprovada | NÃO ACHADO |
| s16 p1 e p2: Fairbanks em 1977 | ASL: "Fairbanks 1977" | Só livros | NÃO ACHADO |
| s20 p1 e s29 p2: as eleições de 1978 e 1982 | ASL: "election" | Só a foto de 1940 | NÃO ACHADO |
| s22 p1: a Legislatura de 1981-82 | vilda: "Alaska State Legislature House of Representatives", 2 páginas | Grupos de 1943 a 1968, e "Portrait of Alaska Senate Presidents, June 8, 1978" (`cdmg21/id/1119`): seis ex-presidentes do Senado, pessoas nomeadas que não são o Legislativo de 1981 | NÃO ACHADO. Fica a 5ª Legislatura, de 1967-68, do rascunho |
| s23 p4: Juneau em 1982 | ASL: "Juneau 1982" | Só os programas das posses de 1982 e 1986, que são documento | NÃO ACHADO |
| s31 p5: a campanha de 1982 | ASL e vilda: "capital move" | Nada da campanha. Na UAA, um desfile de 1971 e uma foto sem data | NÃO ACHADO |
| s35 p1: Wasilla ou a eleição de 1994 | ASL: "Wasilla" | Fotos de 1918 a 1953 | NÃO ACHADO |
| s49 p1: a votação de outubro de 2000 | ASL: "Juneau 2000" | Nada | NÃO ACHADO |
| s28 p3: a camiseta "Anchorage Stealers" | a coluna do ADN de 08/02/2026 | A página abriu sem desafio. A foto das costas está lá, com a legenda "Provided by Alaksa State Museum" (sic). No endereço de 1440×2156 do `pauta-imagens.json` › bloqueios, o navegador mostrou um JPEG de 1440×2156 e 379.328 bytes: as costas da camiseta, com "FRANK O. HARRIS", "2.84" e "ONE MAN'S PORK IS ANOTHER MAN'S PIGSKIN" | ACHADA, NÃO BAIXADA. É foto do governo do Alasca (o museu é do Estado) e entra pelo `midia.md` §7.5, citando a fonte. Falta o "sim" do Lucas à lista de download |
| s48 p1: Tony Knowles | vilda | Nenhum retrato enche o card sem ampliar: o oficial não tem data, o de 1998 é programa impresso e as cenas de 1996 são pequenas | O card fica com nome e cargo, como o Lucas aceitou |
| s05 p1 (e s25 p1): Frank Harris | a página "Frank Harris" do "100 Years of Alaska's Legislature" (w3.akleg.gov, bio 1147) | A página diz só "Dry Cleaning Establishment Owner from Anchorage", a Câmara Municipal de Anchorage, a Câmara de Comércio, o Fish and Game Institute e o Elks. Não traz nome completo nem ligação com o Capital Access Committee (1982) ou com o comitê de 1978. O retrato tem 385×426 e não tem data | Identidade não provada, e o retrato é pequeno. O card fica com nome e cargo |
| s26 p2: Lee Stoops | sulianich.org e nwabor.org | 403 nos dois | O card fica com nome e cargo |

### O que isso muda

- Nenhum arquivo novo chegou, e nada se baixou.
- A lista de download para o Lucas tem uma linha só: a camiseta do s28 (379.328 bytes, abaixo do corte de uns 1,8 MB
  do navegador do app).
- Duas fotos só entram se o Lucas comprar a versão grande (US$ 30 cada): Juneau em 23/09/1905 (s06 p1) e Fort
  Richardson em 1940 (s09 p2). Sem a compra, ficam as do rascunho.

### s58 p4: a briga pública pela estrada (depois do `trocar` do conferente, 27/09/2026, 19:2x a 19:4x BRT)

O conferente mandou trocar os candidatos A e C, dois registros de um lado só do comício de 14/10/2014, e pediu "a
audiência, com gente dos dois lados, ou um registro de cada lado". Procurei nos três sites que o robots.txt tinha
vetado ao `pesquisa-imagens`. Nenhum pediu verificação.

| Site | Onde | O que achei | Resultado |
|---|---|---|---|
| alaskapublic.org | a busca do site (`/search?q=`) devolve só matérias recentes. Achei pela busca na web "Cost, Avalanche Danger High On Juneau Access Opponents' Concerns" (16/10/2014) e "Juneau access road proves to be point of contention among officials" (06/10/2016) | A de 2014 é a matéria da KTOO republicada, com a mesma foto do comício (o candidato A), em 600×400. A de 2016 tem uma imagem só, sem legenda, que não é de audiência | nada novo |
| khns.org | "Haines Assembly debates stance on Juneau Access Road" e "Concerns flare in Haines that a road to Juneau would be a 'road to resources'" (08/10/2025) | A primeira tem só uma placa de estrada, de 600×400 (Ed Schoenfeld/CoastAlaska). A segunda tem uma sala cheia na biblioteca de Haines, mas é de 2025 e de outro projeto: o estudo do Chilkat Connector, pela margem oeste do Lynn Canal. A frase fala da estrada do Juneau Access | não serve |
| flickr.com | a busca por "Juneau Access" | "Juneau Access Hearing - House Transportation Committee - 2 10 15", da KTOO Public Media (foto de Skip Gray/360 North): o comissário designado do DOT&PF apresenta o projeto à Comissão de Transportes da Câmara, em 10/02/2015. "Todos os direitos reservados". O original tem 2752×914, uma faixa de 3:1. A conta é gratuita, e o Flickr só libera o download até 1024 px (1024×340) | pequena demais pelo download que o site libera; não tentei pegar o tamanho maior, que o site não libera |

Resultado: NÃO ACHADO pelo navegador. O s58 p4 volta ao `montador`.

## As respostas do Lucas (27/09/2026, 21:0x de Brasília)

- **A camiseta do s28 p3.** A pergunta: "Posso baixar a foto da camiseta "Anchorage Stealers" (cena 28)?" A resposta:
  "Sim, pode baixar (Recomendado)". A opção dizia: "JPEG 1440×2156, 379 KB, do Anchorage Daily News (foto do Museu
  do Estado do Alasca, peça ASM 97-20-1). Entra citando a fonte, pela sua regra das fotos do governo do Alasca."
- **A compra da ASL.** A pergunta: "Comprar a versão grande de fotos do acervo do Estado do Alasca (US$ 30 cada; você
  preenche o formulário e paga)?" A resposta: "Não comprar (Recomendado)". A opção dizia: "As cenas 6 e 9 ficam com
  as fotos já aprovadas: Juneau por volta de 1899 e a base de Fairbanks de 1943, com o aviso do ano." Juneau em
  23/09/1905 (s06 p1) e Fort Richardson em 1940 (s09 p2) ficam fora do Juneau.

## O que falta

- Baixar a camiseta. O navegador do app não salva imagem sozinho: ele baixa só quando o site tem um botão de download,
  e a página do ADN não tem.
- A LoC fica fora: o desafio do Cloudflare é verificação de robô, e a regra manda parar ali.
