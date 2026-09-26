> **[porte Regie]** Origem: `top10-estudio/knowledge/FONTES-MIDIA.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> As chaves deste canal moram em `%USERPROFILE%\.regie\chaves.env` (nunca no canal, nunca impressas) e a busca é `node <motor>/src/ferramentas/buscar-midia.mjs`. O veto de marca deste canal (se houver) mora em `marca/midia.json`.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# 🗃 FONTES DE MÍDIA — o mapa-mestre (CC/PD, nicho, stock assinado) · 05/jul/2026

Catálogo oficial de onde CAÇAR mídia, por categoria. Status: ✅ testado · 🔑 tem chave no .env · 🌐 via navegador headless (API bloqueia curl) · 📝 sem conta/chave. Regra **deste canal** **[porte Regie]**: só entra mídia com licença conferida e procedência registrada (o Top10 caçava «ignorando direitos, claims depois»; aqui não), priorizando PD/CC; crédito quando a licença exigir; nunca fabricar rosto.

## 1. CC / livres — uso geral
| Fonte | O quê | Acesso |
|---|---|---|
| Openverse (openverse.org) | agregador CC (Flickr etc.) — foto/cena que o Commons não tem | ✅📝 REST |
| Wikimedia Commons | foto/vídeo/mapa PD+CC; retratos, bandeiras, história | ✅📝 REST |
| Pexels | ✅ **LIBERADO [PESQ-126]** como fonte ADICIONAL de candidatos — a régua é a ESPECIFICIDADE, não a fonte | **[porte Regie]** `PEXELS_API_KEY` em `chaves.env`; busca pelo `buscar-midia.mjs` do motor |
| Pixabay | ✅ **LIBERADO [PESQ-126]** — idem; a licença dispensa crédito, e proíbe uso «misleading or deceptive» | **[porte Regie]** `PIXABAY_API_KEY` em `chaves.env` |
| ~~Coverr~~ | ⛔ **PROIBIDO PELA MARCA** — ver o bloco abaixo | ⛔ chave comentada no `.env` |
| Flickr (license=4,5,7,9,10) | fotos CC/PD por busca | 📝 REST (key grátis se precisar) |
| Internet Archive | PD/CC: FOOTAGE HISTÓRICO (Prelinger!), fotos, áudio, jornais | ✅📝 REST |
| NASA Images (images-api.nasa.gov) | espaço/aviação/ciência — DOMÍNIO PÚBLICO | ✅📝 REST |
| DVIDS | militar EUA em HD — domínio público | ✅🔑 |
| ~~Unsplash~~ | ⛔ **PROIBIDO PELA MARCA** — mesma razão (banco gratuito de uso massivo) | ⛔ |

> ### ⛔ Coverr · Unsplash · Videvo · Mixkit · Freepik — VETADOS
>
> ⚠️ **Pexels e Pixabay SAÍRAM deste veto em 14/set/2026 [PESQ-126]**, por decisão do Mateus: *«podem
> SIM, e devem ser consultados, como uma fonte adicional de candidatos de footages. O que eu não quero
> que usem de lá são footages genéricos»*. **A régua deixou de ser a FONTE e passou a ser a
> ESPECIFICIDADE:** um anfíbio chinês real no Pexels serve; um anfíbio russo no Shutterstock não serve.
> Genérico sob afirmação específica continua proibido **em qualquer plataforma, inclusive nas pagas** —
> e específico × genérico é julgamento do `qc-visual`, não do gate. O parágrafo abaixo descreve o caso
> de 29/jul que criou o veto e fica como registro do que foi superado.
>
> **Não é questão jurídica; é de identidade.** A licença é livre e resolve o direito de uso. O que
> ela não resolve é a marca: o mesmo clipe gratuito roda em milhares de canais, e o espectador já
> viu aquele plano. O que a casa compra nos acervos assinados é **exclusividade relativa**, não
> permissão.
>
> Isto está fechado em três degraus, e nenhum depende de alguém lembrar: as chaves estão
> **comentadas no `.env`**; as funções foram **retiradas** de `src/agent/footage-tools.mjs` (não
> desligadas — retiradas, [PESQ-35]); e `scripts/qc-procedencia.mjs` reprova por nome de arquivo,
> por fonte declarada no `_PROCEDENCIA.json` **e por referência viva no HTML da cena**.
>
> **Quando todo acervo assinado bloquear, a saída é AVISAR e parar — nunca trocar a fonte.** Em
> 29/jul/2026 uma sessão levou CAPTCHA na VM, "resolveu" migrando para Pexels/Pixabay e contaminou
> três projetos (`especies-humanas` 17 de 20 vídeos, `uruguai-despovoado` 16 de 21,
> `orcas-nao-matam` 7 de 16) — os três com a melhor razão de mídia real do acervo, todos aprovados
> por todos os gates da época. **Porta fechada não autoriza trocar a fonte; autoriza avisar.**
>
> *[porte Regie] (No Top10 a caça de stock pago rodava no Mac ou na VM por túnel residencial. Aqui não há VM nem
> túnel: tudo roda no PC do dono. Bloqueio real continua sendo motivo de AVISAR, nunca de trocar a fonte.)*
>
> *(Vecteezy é caso à parte: NÃO está no veto da marca. Entra por atribuição, fora do pool
> automático — `VECTEEZY_*` segue ativa no `.env` de propósito.)*

> ### ✅ CC BY-SA está LIBERADO — e o crédito COMPLETO é a condição (Mateus, 15/set/2026 · [PESQ-128])
>
> **CC BY** pede uma coisa: creditar o autor. **CC BY-SA** pede a mesma coisa **mais uma**: se você
> criar uma **obra derivada daquela imagem**, a derivada sai sob a mesma licença.
>
> **Exibir a foto dentro do vídeo é COLEÇÃO, não derivação** — como um livro que traz uma foto não
> vira obra derivada dela. Derivar seria alterar a imagem e distribuí-la **como imagem**. Por isso o
> «SA» **não contamina o vídeo**, e por isso o dono liberou.
>
> ⛔ **A contrapartida: autor + licença + link, na descrição, sempre.** Sem crédito, o BY-SA deixa de
> ser uso permitido e vira uso indevido — é a CONDIÇÃO da licença, não estilo. O texto sai de
> `scripts/gerar-atribuicoes.mjs` (derivado dos `_PROCEDENCIA.json`) e é cobrado por **[porte Regie: não veio — `gerar-atribuicoes.mjs`]**
> `scripts/qc-atribuicao.mjs`. Vale igual para CC BY. **[porte Regie: não veio — `qc-atribuicao.mjs`]**
>
> ⚠️ **Isto NÃO estica para `BY-ND` nem para `NC`:** ND proíbe derivada (é o caso do rodapé do
> gov.br, `CC BY-ND 3.0`) e NC é incompatível com canal monetizado. O dono falou de BY-SA; licença
> nova pede decisão nova.

## 2. Acervos institucionais / ÉPOCA (história antiga)
| Fonte | O quê | Acesso |
|---|---|---|
| Europeana | acervos europeus: fotos/gravuras/mapas de época | ✅🔑 |
| NYPL Digital Collections | fotos históricas (NY, mundo) | ✅🔑 |
| Smithsonian Open Access | 4M+ itens CC0 | ✅🔑 |
| Library of Congress | fotos+MAPAS históricos EUA/mundo | ✅🌐 (curl bloqueado) |
| Gallica (BnF) | mapas/gravuras/jornais França+colônias | 🌐 |
| David Rumsey | a maior coleção de mapas históricos hi-res | 🌐 |
| Met Museum Open Access | arte/mapas/objetos PD (API aberta) | ✅📝 REST |
| Rijksmuseum | arte PD hi-res (key grátis) | 📝 |
| Getty Open Content | arte/fotos PD | 📝 |
| Wellcome Collection | medicina/ciência histórica CC | 📝 REST |
| US National Archives (catalog API) | docs/fotos federais PD | 📝 REST |
| **BNDigital + Hemeroteca Digital (Bibl. Nacional BR)** | JORNAIS DE ÉPOCA BRASILEIROS, fotos, mapas — ouro pro canal | 🌐 (403 no curl) |
| Arquivo Nacional (BR) / IBGE acervo | Brasil histórico | 🌐 |
| IWM (Imperial War Museums) | guerras (licença não-comercial — avaliar caso a caso) | 🌐 |

## 3. Ciência / técnico (o pesquisa-documentos usa)
| Fonte | O quê | Acesso |
|---|---|---|
| ResearchGate / Google Scholar | LOCALIZAR paper + PDF | 🌐 |
| PubMed/NCBI · arXiv · SciELO · IEEE · PLOS · bioRxiv | abstracts/PDF por área | 📝 REST |
| DOI direto (doi.org) | resolver qualquer paper | 📝 |
| OpenAlex · Semantic Scholar · CORE | metadados/abstracts abertos (grafo científico) | 📝 REST (retestar OpenAlex) |
| NASA SVS / ESO / ESA-Hubble/JWST | VÍDEO/imagem científica espacial hi-res, uso livre com crédito | 📝 |
| NOAA / USGS / NWS | clima/geologia PD | 📝 |
| GBIF / iNaturalist (CC) | natureza/biodiversidade | 📝 REST |

## 4. Nicho por assunto (exemplos pro canal)
- **Aviação**: NTSB (PD: relatórios/fotos), FAA (PD), CENIPA/FAB (BR), ASN aviation-safety.net (dados), Airliners/JetPhotos (⚠ direitos — só referência visual).
- **Espaço**: NASA+SVS, ESA (CC BY-SA), ESO, SpaceX Flickr (CC).
- **História BR**: Hemeroteca (jornais!), BNDigital, Museu Paulista/Wikimedia, Brasiliana Fotográfica 📝🌐.
- **Guerra/geopolítica**: NARA, DVIDS, IWM, UN Photo (editorial).
- **Mar/profundezas**: NOAA Ocean Explorer (PD), Schmidt Ocean (CC BY).
- **Mapas atuais**: **MapTiler satellite-v2 ✅🔑 = BASE ÚNICA** (+ `terrain-rgb-v2` p/ relevo 3D) · ESRI World Imagery ⚠️ só fallback de emergência com cota MapTiler morta (PESQ-21) · Natural Earth (PD geojson).

## 5. Google Imagens (rede ampla — quando o resto falha)
CSE JSON API `searchType=image` — **[porte Regie]** não funciona neste canal: a chave do Top10 não veio, e o motor v1 não tem adaptador do Google (`<motor>/src/midia/fontes.mjs` o tirou), então guardar uma chave não liga nada. A busca é a do `buscar-midia.mjs` (Commons, Openverse, NASA, the Met, DVIDS, NARA, Smithsonian, Europeana, Pexels, Pixabay); não chame a API do Google por fora dela — imagem sem licença e procedência gravadas não entra.
Uso: achar a foto ESPECÍFICA (pessoa/evento/objeto raro) → validar identidade por visão → upscale. É REDE DE ARRASTO: sempre conferir fonte/direitos do resultado (prioridade continua PD/CC acima).

## 6. Stock ASSINADO (Shutterstock · Storyblocks · Envato · Motion Array (Artlist FORA — sem assinatura))
**[porte Regie]** A caça do Top10 (VM, túnel residencial, trava de caça no bucket) não veio. Neste canal os acervos
pagos se caçam **pelo CHROME do dono**, já logado, com a skill `cacar-no-chrome` (a lista de caça vem do
`pesquisa-imagens`; cada arquivo baixado entra com procedência por `scripts/stock/registrar-download.mjs`):
- **Shutterstock**: pela **conta PRÓPRIA do dono** (decisão do Mateus, 23/09/2026; ADR 0009 §D), nunca pela do
  Top10. O limite é o do plano dele: **100 downloads por dia** (padrão), no fuso de Brasília — veja o que resta
  com `node scripts/stock/registrar-download.mjs teto`. Um teto só por conta, contado por
  `scripts/stock/lib/teto-shutterstock.mjs`, para o Chrome e para a API.
- **API oficial do Shutterstock** (`scripts/stock/api-oficial.mjs`): o acesso fica **DESLIGADO por padrão**, e é só
  para quem tem token PRÓPRIO. A forma de ligar é a que o `marca/midia.json` do canal já traz (o mesmo arquivo do
  `template/marca/midia.json` do motor): o bloco `shutterstock` → `api_oficial` (`ligada`, `usuario`), mais o token
  da conta em `SHUTTERSTOCK_TOKEN_PROPRIO`; o script confere que o token é da conta declarada antes de licenciar.
  **Nunca** o pote `integrated_media` do Top10. Vale o que o arquivo traz: não copie configuração de texto antigo.
- **Storyblocks · Envato Elements · Motion Array**: pelo mesmo Chrome, com as contas do Top10 (`caca.contas` em
  `marca/midia.json`), sem teto diário. Sem API, sem navegador headless com sessão copiada.
- **[porte Regie]** A Reuters Connect saiu deste arquivo: é licença e contrato do Top10, e este canal não pode usá-la.
  A biblioteca premium do bucket (`gs://…/lib/footage-premium/`) também é do Top10.

## Prioridade de caça (ordem padrão do caçador)
1. **[porte Regie]** o acervo do próprio canal (o que ele já baixou, com procedência) → 2. PD/institucional do nicho (NASA/DVIDS/NTSB/acervos) →
3. CC geral (Commons/Openverse, e Pexels/Pixabay como fonte adicional desde a [PESQ-126] — **[porte Regie]**: esta linha ainda dizia «vetados», e a lei mais nova vence; Coverr/Unsplash ficaram fora pela marca do Top10, e este canal decide o próprio veto) → 4. Stock assinado (Shutterstock/Storyblocks/Envato/MA) →
5. Google Imagens (rede ampla, validar a licença) → 6. **[porte Regie]** imprensa só com licença ou uso permitido conferido (sem «claims depois» neste canal).
