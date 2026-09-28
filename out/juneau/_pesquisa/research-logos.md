# Research: pesquisa-logos (juneau), 27/09/2026, terceira entrega

**O pedido** (`espelho.json` › `_despacho_research` › `logos`): as bandeiras de s03, s10 e s44 (EUA e Canadá; British Columbia e Yukon só em s44) e o nome escrito das instituições (`nome_escrito`). Logo de instituição e selo do Estado não se buscam (midia.md §7.6). As bandeiras caíram na terceira entrega, pela decisão do Lucas de 27/09/2026 (a seção logo abaixo).

Onde está cada coisa:
- o registro: `out/juneau/_pesquisa/pauta-logos.json` (validada, exit 0);
- a procedência: `out/juneau/_media/logo/_PROCEDENCIA.json`, sem itens desde a terceira entrega. A das oito bandeiras retiradas está no `out/juneau/_media/_caca/_retirado/logo/_RETIRADO.json`. Os dois ficam só nesta máquina, porque `out/*/_media/` está fora do git, e por isso a pauta guarda o registro inteiro de cada bandeira (`retirados`);
- o que a API do Commons devolveu: `out/juneau/_pesquisa/logos-commons.json`, agora com o pedido de apagamento da B.C.;
- cada página lida nesta entrega, com cliente, status HTTP, data e sha256: `out/juneau/_pesquisa/logos-leituras.json`. O leitor é o `logos-leituras.mjs`, na mesma pasta: um GET por URL, com o User-Agent do canal, sem nova tentativa. O corpo das respostas fica em `out/juneau/_tmp/logos/leituras/`, fora do git.

## Terceira entrega, 27/09/2026: as bandeiras saíram de `_media/logo/`

**Por quê.** O Lucas decidiu em 27/09/2026 que o país no mapa vai só com o nome escrito (`marca/identidade.md` §6, "País no mapa: o nome escrito, sem bandeira"):
- a pergunta: "O governo do Canadá diz que a bandeira dele (e as das províncias) só se usa com autorização, mesmo em vídeo educativo. Como identificamos os países nos mapas?";
- a resposta: "Só o nome escrito (Recomendado)". A opção dizia: "CANADA e UNITED STATES escritos na letra do canal, sem bandeira nenhuma, em todos os mapas. Sem risco e sem pedir nada, como já fazemos com as logos.";
- a regra: "Vale para todo mapa e para toda bandeira, a dos EUA também."

O que isso faz no Juneau:
- os três pedidos de bandeira do espelho (`needs.logos` de s03, s10 e s44) são "ao lado do nome do país no mapa". A s03 e a s44 são cenas de mapa; na s10, os planos 1 a 3 são de mapa;
- nenhuma outra cena do espelho fala de bandeira. Na PRANCHA, a do Canadá, das províncias e dos territórios canadenses fica de fora até o Lucas decidir (identidade §6, DECISÃO DO LUCAS PENDENTE), e nenhuma PRANCHA do Juneau pede bandeira;
- as oito bandeiras ficaram sem cena. A roupa (§2) já diz: "Não entregue bandeira para mapa nem para nome de país."

**O que saiu, e para onde.** Os oito arquivos saíram de `out/juneau/_media/logo/` para `out/juneau/_media/_caca/_retirado/logo/` em 27/09/2026, às 22:16:52 UTC (19:16 em Brasília). Nada foi apagado. Medi o sha256 antes e depois (`out/juneau/_tmp/logos/retirada-3a/sha256-antes.json` e `sha256-depois.json`), e as duas medidas batem com o que a procedência registrava:

| Arquivo | Bytes | sha256 (o mesmo antes e depois) |
|---|---|---|
| `flag-united-states.svg` | 823 | `48f0d3e4a7bf2d5c0c8d09cd975696acb2f3af601aaca80c537933ad9ec166ec` |
| `flag-united-states.png` | 139.502 | `cfd986acab96d311250bd0ab86acf2b32562d4e0bd12f69509b0323aa44a7a90` |
| `flag-canada.svg` | 720 | `afe6921891d516f037e8fb9920128f8bfd86ef2ffe1a6d1d4aa7e22a032434bc` |
| `flag-canada.png` | 69.204 | `bbc571bcf5551c03a2c8677e37d06e25998b60dfd18f5e4092a0342e6717bcbe` |
| `flag-british-columbia.svg` | 16.947 | `ae1a4bd122dbc2585b717ae3ce7c3d810e63bbcba8944d512f26aec8b33e57ab` |
| `flag-british-columbia.png` | 567.284 | `9f441dcdc6a5922c32e6e760e72c74efc697791238d041ba4d7bcfea8b11c14e` |
| `flag-yukon.svg` | 63.896 | `9cc9925ddf15d5ce41900da195b74e3d6d90853ea0b8d028a6a704396856fd5e` |
| `flag-yukon.png` | 341.161 | `e1ee7ed66db7f1e82867c0b5e64b3a401a26bff33df1abe236ff7d352bab4658` |

- O registro da retirada é o `out/juneau/_media/_caca/_retirado/logo/_RETIRADO.json`, no formato dos outros `_RETIRADO.json` do Juneau: por arquivo, a origem, o sha256, a data, o motivo (com a citação da identidade §6) e quem retirou. Cada item leva também, sem mudança, a entrada inteira que estava no `_PROCEDENCIA.json`.
- **`_media/logo/` ficou sem nenhuma logo nem bandeira.** Só sobrou o `_PROCEDENCIA.json`, com `itens` vazio e um bloco `retirados` que diz onde cada arquivo está agora.
- Tudo sob `_caca` conta como rascunho no `qc-procedencia`, não como acervo (`scripts/stock/lib/rascunho-de-caca.mjs`).
- O `_RETIRADO.json` e o `_PROCEDENCIA.json` ficam só nesta máquina (`out/*/_media/` está fora do git). Por isso a pauta guarda o registro inteiro de cada bandeira.

**O que mudou na pauta** (`pauta-logos.json`):
- `itens` ficou vazio. O registro inteiro de cada bandeira foi para `retirados`: o caminho novo em `arquivo`, o antigo em `arquivo_antes`, as cenas pedidas em `cena_pedida` e o motivo em `retirada`;
- `nao_entregues` (s10) está FECHADO: nenhuma bandeira, nem de época nem de hoje;
- `pedido_hoje` e `terceira_entrega` dizem o que mudou;
- a cópia dos três registros de antes desta entrega está em `out/juneau/_tmp/logos/antes-terceira-entrega/`, fora do git.

**O que deixou de valer para o Juneau:**
- **as perguntas de licença das bandeiras canadenses (§2, itens 1 a 4)**: o pedido de uso ao Canadian Heritage (Trademarks Act, s. 9), os dois lados da licença da British Columbia e a data e a licença do Yukon. Nenhuma bandeira vai à tela, e não há o que pedir nem conferir;
- **as visitas ao navegador do app que só serviam às bandeiras**: as páginas da B.C. (*Symbols of B.C.* e *B.C. Facts*) e as do Yukon (a página da bandeira e o Flag Act). Nenhuma outra fila em `out/juneau/_pesquisa/` as esperava;
- **o item 6 da §2** (bandeira ao lado do nome de país fora da PRANCHA): o Lucas respondeu. No mapa, não; fora do mapa, a identidade manda ir sem bandeira também;
- **a s10 (§6)**: as duas perguntas ao montador e ao regente-de-imagem se fecham, e nenhuma bandeira de época será buscada;
- **a bandeira do Alasca (§6, outras notas)**: não se pede. Ela só faria simetria com as da B.C. e do Yukon;
- **a condição dos EUA (§2, item 5)**: a bandeira estava livre para uso editorial, e sai pela mesma decisão.

**O que continua:**
- os nomes escritos (§3), sem mudança. KTOO, Alaska Supreme Court e Alaska Department of Law continuam NÃO CONFERIDOS na origem e vão ao navegador do app (§5);
- fora do Juneau, a pergunta da PRANCHA é do Lucas: a bandeira do Canadá, das províncias e dos territórios canadenses fica fora do círculo do ator até ele decidir (identidade §6). Se ele liberar, a licença se lê de novo na origem, no dia, e os fatos da §2 servem só de ponto de partida;
- as PNG de `assets/flags/` (`us.png`, `ca.png`) são do molde, não entregas minhas. Pela mesma decisão, também não vão ao mapa.

**Quem cita as bandeiras** (li, não mexi):
- o espelho: os `needs.logos` e as `_nota_logos` de s03, s10 e s44, que pedem a bandeira ao lado do nome do país sem citar o nome dos arquivos. Quem os tira é o `montador`;
- o `conferencia-midia.json`: nenhum veredito sobre bandeira. O conferente não as julgou;
- cena, `conceito-visual.json`, `regencia.json` e `textos-tela.json`: ainda não existem no Juneau;
- fora dos meus registros, só arquivos de `out/juneau/_tmp/`: a cópia da primeira entrega e as listas de sha256 do conferente (`_tmp/conferencia/_media-antes.txt` e `_media-depois.txt`). Ficam como estão.

**Portões:**
- `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/validar-contrato.mjs pauta-pesquisa out/juneau/_pesquisa/pauta-logos.json`: "✓ válido" (exit 0);
- `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/qc-procedencia.mjs juneau`: PASS (exit 0), com 89 itens, 14 provados, 33 isentos, nenhum sem prova e nenhum proibido; 42 arquivos em `_caca`, contados como rascunho, com as oito bandeiras entre eles. O `pesquisa-imagens` trabalha ao mesmo tempo em `_media/`, e os números mudam com ele;
- `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/qc-direcao-real.mjs juneau` (pedido pela §3.6 do `pesquisa-imagens` depois de tirar arquivo): PASS (exit 0). A âncora do `conceito-visual.json` só se mede depois da direção de arte.

**Devolução:**
- **Onde parei:** as bandeiras de s03, s10 e s44 saíram no degrau "retirado, sem substituto": o país vai com o nome escrito. No Juneau, não há bandeira nem logo a conferir.
- **Quem decide agora:** o `montador`, que tira os `needs.logos` de s03, s10 e s44 e as `_nota_logos` que ainda dão a decisão como pendente. A grafia do nome na tela é do `redator-de-tela`. Ao Lucas, só a pergunta da PRANCHA dos próximos vídeos, que já está na identidade §6.

## 0. Segunda entrega: os defeitos do verificador

| # | Defeito | Reproduzi no disco? | O que mudou |
|---|---|---|---|
| 1 | B.C.: o registro da licença só trazia o lado contrário | **Sim.** O `wikitext` salvo no `logos-commons.json` já tinha o campo `permission` com a frase do governo da B.C., e a pauta não a citava. Reli hoje pela API do Commons o pedido de apagamento e o histórico dele: batem com o relato do verificador | `licenca.base`, `condicao_de_uso` e `ressalvas` trazem os dois lados, ambos NÃO CONFERIDOS na origem, e dizem como o pedido terminou. Continua PENDENTE LUCAS; as duas páginas oficiais vão ao navegador do app (seção 2) |
| 2 | s10: as bandeiras de hoje registradas para uma cena de 1940 a 1960 | **Sim.** `s10._planos[2]._texto_no_ar` = "o 1940 (o ano do ~15%)"; `[3]` = "o mais da metade (1960)"; o `s10.motivo` tira a Parks Highway "de 1971, numa frase sobre a década de 1940" | A s10 saiu de `cena` nas bandeiras dos EUA e do Canadá, na pauta e na procedência, com `nao_vale_para` e a ressalva. A bandeira da época está em `pauta-logos.json` › `nao_entregues`: NÃO ENTREGUE, com as duas perguntas e os fatos com fonte (seção 6) |
| 3 | As fontes das condições de uso e da versão atual sem URL | **Sim** | Cada uma tem agora a URL e a data da leitura. Reli todas hoje com o User-Agent do canal, e todas deram 200: no canada.ca, as páginas de uso comercial, de descrição e de história da bandeira; a lei no bclaws; e, no govinfo, a nota a 4 U.S.C. §1 e o capítulo 1 |
| 4 | KTOO: "conferido na origem", sem dizer por qual cliente | **Sim.** Não há no disco cópia, log nem cliente dessa leitura. Pelo relato do verificador, o ktoo.org responde 403 ao User-Agent do canal | Agora está NÃO CONFERIDO na origem. O nome vem do dossiê (a cópia local `midia/juneau/fontes/experiencia/verif/exp03.html`, de 23/09) e do texto aprovado, e vai ao navegador do app. Não repeti o pedido ao ktoo.org |

**O que mais achei nos mesmos registros:**
- **Outros nomes escritos sem cliente.** Os outros nomes dados como "conferido na origem" também não registravam o cliente. Reli os oito sites, mais o aviso do Federal Register no govinfo, um GET cada, com o User-Agent do canal. Todos deram 200 e trouxeram os nomes da primeira entrega. Cada nome ganhou o campo `leitura`.
- **Vermelho do Canadá.** O "FIP red, RGB 235,45,55" não tinha fonte no registro: saiu.
- **Pantone.** "O Commons avisa que o governo recomenda a versão Pantone" não está na página do Commons, que diz só "using Pantone colours" (Pantone 032): corrigido.
- **AMHS.** A página da AMHS mostra só "DOT&PF"; o nome por extenso do órgão está no dot.alaska.gov: corrigido.
- **Yukon.** A página do Commons não dá a data de adoção, e o 1968 veio de um trecho de busca na web sobre um site que recusou o canal. A data agora está NÃO CONFERIDA, na licença e na versão.
- **EUA.** A ressalva do Flag Code ganhou a §3 (nada escrito sobre a bandeira) e a §8(i) (publicidade).

Nenhuma bandeira mudou: os oito arquivos têm o mesmo sha256 do registro. Nenhuma foi retirada, porque os defeitos eram de registro. A primeira entrega está copiada em `out/juneau/_tmp/logos/antes-segunda-entrega/`.

## 1. Bandeiras entregues em `out/juneau/_media/logo/`

> Histórico da segunda entrega. Na terceira (27/09/2026), as oito bandeiras saíram para `out/juneau/_media/_caca/_retirado/logo/`, e `_media/logo/` ficou sem nenhuma (seção do topo).

Cada uma vai em SVG (o original do Commons) e em PNG de 3840 px de largura. A PNG foi feita com `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/stock/_svg-para-png.mjs <svg> <png> --w=3840`. O sha1 de cada SVG baixado confere com o que a API do Commons declara. Olhei as quatro PNG de novo nesta entrega.

| Bandeira (cenas) | Arquivos | Fonte no Commons (versão) | Licença | Desenho em vigor desde | Resolução | Uso |
|---|---|---|---|---|---|---|
| Estados Unidos (s03, s44; **não** s10) | `flag-united-states.svg`, `.png` | File:Flag of the United States.svg (24/05/2024) | Public domain (PD US Government; obra federal, 17 U.S.C. §105); marcada como insígnia | 04/07/1960: 50 estrelas (EO 10834, sec. 31, na nota a 4 U.S.C. §1, lida no govinfo). A proporção de 1,9 confere | SVG 1235×650 nominal; PNG 3840×2021, 7,76 MP | livre, em uso editorial, sem nada escrito por cima |
| Canadá (s03, s44; **não** s10) | `flag-canada.svg`, `.png` | File:Flag of Canada (Pantone).svg (08/02/2026) | Public domain ({{PD-flag}}), mais {{Prohibited Mark}} e {{Insignia}} | 15/02/1965: folha de 11 pontas, proporção 2:1 (canada.ca, *Description of the National Flag of Canada*) | SVG 1200×600; PNG 3840×1920, 7,37 MP | **PENDENTE LUCAS** (seção 2) |
| British Columbia (s44) | `flag-british-columbia.svg`, `.png` | File:Flag of British Columbia.svg (23/01/2019; o desenho saiu em 24/12/2018 do vetor do governo da B.C., segundo o comentário do upload) | Public domain ({{PD-Canada}}), mais {{Insignia}}; os dois lados da dúvida estão na seção 2 | 1960, pelo Commons; NÃO CONFERIDO na origem. Proporção 5:3 | SVG 1000×600; PNG 3840×2304, 8,85 MP | **PENDENTE LUCAS** (seção 2) |
| Yukon (s44) | `flag-yukon.svg`, `.png` | File:Flag of Yukon.svg (19/07/2022) | Public domain ({{PD-Canada}}); data de adoção NÃO CONFERIDA | 1968, pelo trecho de busca (NÃO CONFERIDO). Faixas 1 : 1,5 : 1 no SVG, proporção 2:1 | SVG 2800×1400; PNG 3840×1920, 7,37 MP | **PENDENTE LUCAS** (seção 2) |

- **As de `assets/flags/`**: `us.png` mede 320×168 e `ca.png` 320×160 (ffprobe, pal8, flagcdn). São pequenas para o círculo de 640 px e servem só como marcador pequeno. Para uso grande, valem as de `_media/logo/`.
- **Por que não pelo `buscar-midia`**: a busca dele no Commons só pede `filetype:bitmap`, e o `baixar` não reconhece SVG. O `_commons-baixar` recusa arquivo com menos de 5000 bytes, e os SVG dos EUA e do Canadá têm 823 e 720 bytes. Baixei direto do Commons, com o User-Agent do canal e o sha1 conferido. O `_PROCEDENCIA.json` foi escrito campo a campo a partir desse registro.
- **Reservas** (em `out/juneau/_tmp/logos/`, não entregues):
  - *Flag of Canada (official government version).svg*: convertido do EPS do canada.ca, com o vermelho #ED1C24 (o da Pantone é #D52B1E). Ficou de fora por um defeito: uma fresta branca na borda direita, que vira uma linha clara de uns 1 px em 3840.
  - O pacote oficial do canada.ca (ZIP com JPG, EPS e PNG, 2,71 MB) **não foi baixado**. Baixá-lo fica com o Claude central.
  - *Flag of British Columbia 02.svg*: desenho de 2006, sem a faixa azul fina sob a Union Jack que o vetor do governo tem.

## 2. Condições de uso: o que o Lucas precisa pesar (não é parecer de advogado)

> Histórico da segunda entrega. Para o Juneau, estas perguntas deixaram de valer na terceira (27/09/2026): o país no mapa vai só com o nome escrito (identidade §6). A seção do topo diz o que continua.

1. **Canadá.** O Canadian Heritage (https://www.canada.ca/en/canadian-heritage/services/commercial-use-symbols-canada.html; "Page details" 2026-08-10; lida hoje, 200) diz que a bandeira "is protected by the Trademarks Act (Section 9) against unauthorized use for commercial purposes". O pedido de uso vale para bens e serviços que geram receita e "also applies to non-commercial, public-facing uses, including educational or recreational". A página da descrição (https://www.canada.ca/en/canadian-heritage/services/flag-canada-description.html; "Page details" 2023-03-31; lida hoje, 200) pede que toda representação respeite a proporção 2:1, as cores e a folha de 11 pontas no centro. O recorte em círculo da PRANCHA mexe nisso.
   - O vídeo é monetizado, e o Lucas decide entre três caminhos: pedir a aprovação (uds-uos@pch.gc.ca, com a versão final da cena); não pôr a bandeira; ou entender que identificar um país num mapa fica fora desse processo.
   - A `ca.png` de `assets/flags/` tem a mesma condição.
2. **British Columbia: os dois lados, ambos NÃO CONFERIDOS na origem.** Pelo Commons, o Crown copyright canadense de 50 anos, contado de 1960, venceu em 2010 ({{PD-Canada}}); a página não traz etiqueta de domínio público nos EUA.
   - **A favor do domínio público.** O campo `permission` da página do Commons (revisão de 08/08/2026, lida hoje pela API) cita o governo da B.C.: "The Provincial flag is public domain and not protected by the Provincial Symbols and Honours Act." A fonte citada é http://www.gov.bc.ca/bcfacts/. Hoje, essa página não foi conferida: o www2.gov.bc.ca derrubou a conexão duas vezes na primeira entrega, e não tentei de novo. O pedido de apagamento cita a mesma frase numa cópia arquivada de 25/07/2014 (web.archive.org). Essa cópia não vale como fonte aqui, porque a regra do canal só aceita cópia arquivada de página oficial do Estado do Alasca.
   - **Contra.** Em 2023, o IP 70.68.168.129 marcou o arquivo como violação: "Per https://www2.gov.bc.ca/gov/content/governments/celebrating-british-columbia/symbols-of-bc#flag, this flag is protected via Crown copyright." NÃO CONFERIDO: a página não abriu, e ninguém no pedido transcreveu o trecho dela.
   - **Como terminou** (Commons:Deletion requests/File:Flag of British Columbia.svg, lido hoje pela API):
     - em 16/07/2023, Red-tailed hawk converteu a marcação em pedido de apagamento. Respondeu que a fonte data a bandeira de 1960, que o Crown copyright dura 50 anos e que "This may cause potential URAA issues, but that's a DR issue rather than a speedy deletion issue";
     - doze minutos depois, citou a cópia arquivada do *bcfacts* com a frase do governo;
     - Ikan Kekek votou "Keep": "That sounds conclusive.";
     - Holly Cheng fechou em 11/11/2023: "Kept: no valid reason for deletion." O URAA não voltou a ser discutido.
   - **A lei.** O Provincial Symbols and Honours Act (https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96380_01; "current to September 22, 2026"; lido hoje, 200) exige permissão só para o Coat of Arms "or a design so closely resembling it as to be likely to deceive". A palavra "flag" não aparece na lei; a bandeira reproduz o escudo.
   - **Ao navegador do app, com o Lucas vendo**: a página https://www2.gov.bc.ca/gov/content/governments/celebrating-british-columbia/symbols-of-bc#flag e a *B.C. Facts* (http://www.gov.bc.ca/bcfacts/, o endereço que o Commons cita). A busca na web devolveu resumos dessas páginas, que não usei como fonte: seriam a leitura, por terceiro, de um site que não abriu para o canal.
3. **Yukon.** O Commons dá {{PD-Canada}}, mas não dá a data de adoção nem etiqueta de domínio público nos EUA. O 1968 vem de um trecho de busca na web e está NÃO CONFERIDO. O yukon.ca e o laws.yukon.ca responderam 403 na primeira entrega, e as URLs exatas pedidas não ficaram registradas. **Ao navegador do app**: https://yukon.ca/en/your-government/about-yukon/yukon-flag e o Flag Act, https://laws.yukon.ca/cms/images/LEGISLATION/acts/flag.pdf. Achei essas URLs por busca na web e não as abri.
4. **Canadá, B.C. e Yukon.** O texto do Canadian Heritage que o Commons transcreve estende a proteção do Trade Marks Act às bandeiras de províncias e territórios. O pedido de uso ligado a atividade comercial vai ao Protocol Office de cada uma.
5. **EUA: livre para uso editorial.** No govinfo (https://www.govinfo.gov/content/pkg/USCODE-2023-title4/html/USCODE-2023-title4-chap1.htm, lido hoje, 200):
   - os §§ 5–10 (Flag Code) codificam costumes para civis, sem pedido de permissão;
   - a §8(i) diz que a bandeira não se usa em publicidade;
   - a §3 faz contravenção, no Distrito de Colúmbia, pôr palavra, marca ou anúncio sobre a bandeira. Na cena, o nome do país vai ao lado dela, nunca por cima.
6. **Já pendente no espelho**: se vai bandeira ao lado do nome de país fora da PRANCHA.

## 3. Nomes escritos (sem logo; o detalhe está em `pauta-logos.json` › `nomes_escritos`)

| Instituição | Como ela se escreve | De onde, e como foi lido | Situação | Linha sugerida ao redator-de-tela |
|---|---|---|---|---|
| Anchorage Daily News | Anchorage Daily News ("© 2026 Anchorage Daily News. All rights reserved."); ADN (alt e title do logo) | adn.com, User-Agent do canal, 200 | conferido | sem linha: o nome já explica |
| KTOO | KTOO (alt do logo, og:site_name); KTOO Public Media (rodapé); "Public media from Alaska's capital" (descrição do site) | cópia local do dossiê, de 23/09 (`exp03.html`), e o texto aprovado. O ktoo.org responde 403 ao canal, pelo relato do verificador, e não repeti o pedido | **NÃO CONFERIDO** na origem; vai ao navegador do app | `KTOO — public media in Juneau` (base: a descrição do site na cópia local) |
| CoastAlaska (assina a matéria de 2017) | CoastAlaska; "CoastAlaska is a non-profit serving the public media stations in Alaska." (o logo da KTOO está entre as estações) | coastalaska.org, User-Agent do canal, 200 | conferido | não vai à voz |
| Alaska Marine Highway System | Alaska Marine Highway System; "The Alaska State Ferry" (título); DOT&PF na navegação | dot.alaska.gov/amhs, User-Agent do canal, 200 | conferido | `Alaska Marine Highway — the state ferry system` |
| Alaska Division of Elections | Alaska Division of Elections | cópia arquivada de 02/11/2024 de elections.alaska.gov/doc/info/ElectionResults.php, lida na cópia local `midia/juneau/fontes/evento/elres_wb.html`. O site respondeu 405 | conferido pela cópia (regra de 27/09) | crédito: `Source: Alaska Division of Elections, <ano>` |
| Alaska DOT&PF | Transportation & Public Facilities (título); Alaska Department of Transportation and Public Facilities (metatags); ALASKA DEPARTMENT of TRANSPORTATION & PUBLIC FACILITIES (rodapé); DOT&PF | dot.alaska.gov, User-Agent do canal, 200 | conferido (o site usa "&" e "and") | `Alaska DOT&PF — Alaska's transportation department` |
| FHWA | "AGENCY: Federal Highway Administration (FHWA), Department of Transportation (DOT)." | aviso 83 FR 36661 no govinfo, User-Agent do canal, 200. O highways.dot.gov respondeu 403 | conferido | `Federal Highway Administration — part of the U.S. Department of Transportation` |
| Alaska Department of Labor and Workforce Development | Department of Labor and Workforce Development (cabeçalho e metatag); "&" no rodapé; DOLWD | labor.alaska.gov, User-Agent do canal, 200 | conferido; o nome de 1990 não foi conferido | a voz já define |
| Juneau Assembly | The City and Borough of Juneau Assembly; "council-manager" | juneau.org/assembly, User-Agent do canal, 200 | conferido | `Juneau Assembly — the city council` |
| Alaska State Legislature | Alaska State Legislature | cópia local de akleg.gov, feita pelo dossiê em 23/09. O akleg.gov respondeu 403 em 26/09 | conferido pela cópia local | sem linha |
| Alaska Supreme Court | Alaska Supreme Court (como está nas fontes do dossiê) | o courts.alaska.gov recusou a conexão | **NÃO CONFERIDO** na origem | sem linha |
| Alaska Department of Law | Alaska Department of Law (dossiê, doc-23) | o law.alaska.gov respondeu 403 | **NÃO CONFERIDO** hoje | sem linha |
| Dittman Research | Dittman Research; "Research + Consulting"; "Founded 1969"; metatag "Alaska's Most Trusted Research and Consulting Firm" | dittmanresearch.com, User-Agent do canal, 200 | conferido | `Dittman Research — polling firm`. "Alaska polling firm" agora tem base na própria empresa (o "most trusted" é propaganda e não vai à tela); quem decide é o verificador-de-fatos |
| Alaska State Museum | Alaska State Museum (Juneau); Alaska State Museums; Alaska State Libraries, Archives & Museums | museums.alaska.gov, User-Agent do canal, 200 | conferido | o crédito é o que a origem da foto der |

As linhas sugeridas passam pelo verificador-de-fatos.

## 4. Checagens do contrato (§3)

1. **O arquivo abre e é a entidade certa**: OK. Olhei as quatro PNG de novo:
   - EUA: 50 estrelas em 9 fileiras e 13 listras;
   - Canadá: folha de 11 pontas;
   - B.C.: Union Jack com coroa e o sol sobre as ondas;
   - Yukon: faixas verde, branca e azul, com o brasão, o malamute e o epilóbio.
2. **É a versão atual**:
   - EUA: OK (govinfo, lido hoje);
   - Canadá: OK (canada.ca, lido hoje);
   - British Columbia: **NÃO CONFERIDO** na página oficial;
   - Yukon: **NÃO CONFERIDO** (403).
3. **Fundo transparente**: não se aplica, porque a bandeira ocupa o retângulo todo. A PNG dos EUA sai em RGBA; as outras, em RGB.
4. **Até 40 MP**: o `identify` não existe nesta máquina, e o portão dele fica **NÃO MEDIDO**. Medi com o ffprobe (roupa §3): de 7,37 a 8,85 MP.
5. **Proporção intacta**: 1,9000, 2,0000, 1,6667 e 2,0000, as mesmas dos vetores.
6. **Legível sobre o fundo da cena**: **NÃO MEDIDO**, porque a cena ainda não existe. O azul-escuro do cantão dos EUA quase some sobre o `--fundo` #0E1726 e sobre satélite escuro. Um contorno em volta da bandeira é decisão da arte.
7. **A pauta passa no contrato**: `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/validar-contrato.mjs pauta-pesquisa out/juneau/_pesquisa/pauta-logos.json` deu "✓ válido" (exit 0).
8. **Outros portões**: `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/qc-procedencia.mjs juneau` deu PASS (exit 0). As bandeiras contam como isentas, por estarem na pasta `logo/`.

## 5. Sites que recusaram leitura automática

> Terceira entrega (27/09/2026): as páginas da B.C. e do Yukon não vão mais ao navegador do app, porque só serviam às bandeiras. As outras continuam.

Parei em cada um e não repeti nenhum pedido. O Claude central confere no navegador do app:
- ktoo.org: 403 ao User-Agent do canal, pelo relato do verificador de 27/09. Não repeti o pedido.
- yukon.ca e laws.yukon.ca: 403.
- www2.gov.bc.ca (*B.C. Symbols* e *B.C. Facts*): socket hang up, duas vezes.
- www.elections.alaska.gov: 405.
- highways.dot.gov: 403.
- law.alaska.gov: 403.
- courts.alaska.gov: conexão recusada.
- web.archive.org: não li cópia nenhuma. A da B.C. não valeria, porque não é página do Alasca.

Nesta entrega, a busca na web serviu só para achar URLs (Yukon, B.C.). Os resumos do buscador não entram como fonte.

**Para o Claude central**: duas outras pautas registram leitura do ktoo.org, e pode valer o mesmo defeito 4. A `pauta-documentos.json` diz "ktoo.org/copyright-policy/, lida hoje", e a `pauta-dados.json`, na s56, tem `url_lida` no ktoo.org. Não mexi nelas.

## 6. A s10, e outras notas para quem decide

> Histórico da segunda entrega. Na terceira (27/09/2026), a s10 se fechou sem bandeira nenhuma, e a bandeira do Alasca não se pede (seção do topo).

**s10: a bandeira da época NÃO FOI ENTREGUE** (`pauta-logos.json` › `nao_entregues`). A cena fala de 1940 a 1960 e põe os dois anos na tela. As bandeiras de hoje são anacrônicas ali:
- a dos EUA, de 50 estrelas, vale desde 04/07/1960;
- a do Canadá, com a folha de bordo, desde 15/02/1965.

Duas perguntas ao montador e ao regente-de-imagem:
1. **O nome de país vai à tela na s10?** O pedido do espelho é condicional ("se o nome for à tela"). Se não for, a s10 não leva bandeira, e o item se fecha.
2. **Se for, qual bandeira da época, e de qual ano?** As duas bandeiras mudaram no intervalo.
   - **EUA** (govinfo, lido hoje):
     - em 1940, 48 estrelas: o texto de 4 U.S.C. §1, de 1947, ainda diz "forty-eight stars";
     - 49 estrelas de 04/07/1959 a 03/07/1960 (EO 10798; §2; EO 10834, sec. 31). Se o dado de 1960 for o do censo de 1º/04/1960 (não conferi a data na fonte), a bandeira em vigor tinha 49 estrelas;
     - 50 estrelas desde 04/07/1960.
   - **Canadá** (canada.ca, *The history of the National Flag of Canada*, lida hoje):
     - o Union Jack ficou como bandeira nacional até 1965, e o governo hasteava o Canadian Red Ensign nos prédios públicos;
     - o Red Ensign de 1921–1957 (folhas verdes) "represented Canada during the Second World War";
     - o de 1957–1965 tem as folhas vermelhas.
     - Para 1940, então, a escolha é entre o Union Jack e o Red Ensign de 1921–1957; para 1960, entre o Union Jack e o Red Ensign de 1957–1965.

Não busquei nem baixei bandeira de época. A galeria do Commons da bandeira atual do Canadá lista "Flag of Canada (1921–1957).svg" e "Flag of Canada (1957–1965).svg", e fica só como ponteiro, sem conferência.

Outras notas:
- **Bandeira do Alasca**: não foi pedida. Só que a s44 põe bandeira na British Columbia e no Yukon, e "Alaska" e "Southeast Alaska" vão à tela sem ela (s03, s08, s10, s12, s15, s33, s39, s44, s48, s50, s59). Se o montador quiser a simetria, a bandeira do Alasca vem num despacho novo.
- **s07** ("the old Russian capital"): não há nome de país em `needs.geo`, então não há bandeira.
- **Recorte em círculo (PRANCHA)**: o canada.ca pede a proporção 2:1 com a folha no centro, e o texto do Canadian Heritage no Commons pede a bandeira sem desfigurar nem encobrir.
- **Conferente**: os oito arquivos passam pelo `conferente-de-midia` antes de uma cena citá-los (roupa §8). Ainda não há `conferencia-midia.json`.

**Devolução** (da segunda entrega; a atual está na seção do topo):
- **Onde parei:** s03 e s44 têm as bandeiras entregues. A dos EUA está livre; as do Canadá, da British Columbia e do Yukon esperam o Lucas decidir as condições de uso. A s10 parou no degrau "bandeira da época NÃO ENTREGUE".
- **Próximo passo:** o `conferente-de-midia`, no fluxo `midia`.
- **Quem decide depois:**
  - o montador e o regente-de-imagem: as duas perguntas da s10, e se a bandeira do Alasca entra;
  - o Lucas: o uso das bandeiras canadenses, e as páginas oficiais da B.C., do Yukon e da KTOO no navegador do app.
