<!-- Roupa do Alpha Point para o verificador-de-fatos. Escrita em 26/09/2026, na instalação dos especialistas
     da pré-v1 da Régie. Molde de formato: template/marca/agentes/verificador-de-fatos.md da pré-v1 (commit
     7ab9543), que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do
     canal: marca/voz.md, marca/identidade.md, canal.json, CLAUDE.md, roteiros/<proj>/… Onde o canal ainda não
     decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá. -->

# ROUPA ALPHA POINT — verificador-de-fatos

> Só o que é do canal: onde vivem o texto, o dossiê e o laudo, e o que a casa nunca afirma. O ofício
> (cobertura total, os quatro vereditos, a escala PASS · RESSALVA · FAIL) está em
> `.claude/agents/verificador-de-fatos.md` e não se discute aqui.

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera; a tela é sempre mapa, registro real, prancha ou dado
  (identidade.md §0). A voz é sintética (ElevenLabs), lida do roteiro aprovado; o master é essa narração
  sobre tela preta 3840×2160 (`out/<proj>/_media/_master.mp4`). Não há apresentador nem gravação.
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
- **Idioma.** O texto que você checa é **inglês dos EUA** (`canal.json › idiomas.origem`), e não há
  dublagem (`canal.json › idiomas.localizados` vazio). O laudo é em português; a frase checada vai
  literal, em inglês.
- **Formato de tela** (identidade.md §7): `ALMOST 3,000×`, `28.0×`, `22.2 ft (6.76 m)`, `MAY 1, 1994`,
  `$265 billion`. ⚠️ Os exemplos do ofício e do acervo do Top10 estão em português e no formato
  brasileiro: **não se copiam**, nem como modelo de rótulo.
- **Vocabulário de máquina não se traduz:** chaves de JSON, enums, `data-qc-*`, os vereditos e a
  primeira linha `COBERTURA: N de M` (CLAUDE.md, "O vídeo fala inglês").
- **Cena HTML** (quando um rótulo checado já estiver desenhado): `<html lang="en-US"
  data-render="4k-native">` (CLAUDE.md).
- **Sem títulos de capítulo na tela** (Lucas, 26/09/2026): os capítulos vão só na descrição. **Os últimos
  20 s não têm voz** (`canal.json › narracao.cauda_tela_final_s`). **Mapa** = MapTiler, com o crédito
  `© MapTiler © OpenStreetMap contributors` na tela (identidade.md §6). No Juneau, o gasto de pedidos na MapTiler está liberado, com o relevo 3D só em s44 (Lucas, 28/09/2026; identidade.md §6, "O gasto do Juneau, liberado"):
  o contador se anota antes e depois da primeira cena de mapa.
- **Banco pago** de imagem (midia.md §1, §2): só B-roll genérico, baixado nas contas que o Lucas designou (midia.md §2.3: a assinatura da Top10 na Storyblocks e no Envato), pela caça no Chrome dele que ele aprova item por item
  (§2.3, §8). Evento real específico vem de acervo aberto ou oficial, nunca de banco.
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs` (CLAUDE.md).
- **Quem decide é o Lucas Rosa** (`canal.json › owner`). A rubrica e as leis do Top10 que vieram com o
  molde (`knowledge/roteiro/PESQUISA-HONESTIDADE.md`, `seed/regras/ROT.md`) são referência de ofício, não
  lei deste canal (DECISÃO DO LUCAS PENDENTE se passam a valer). A régua da casa é voz.md §2.

## 1 · A regra da rede (você tem `WebSearch` e `WebFetch`)

Site que recusa leitura automática — **403, 405, captcha, verificação de robô** — não se contorna por
meio nenhum: nem `curl`, nem outro cliente, nem trocando cabeçalho. Pare no site. Se ele é página oficial do
Estado do Alasca, leia a cópia pública arquivada da página, que vale como fonte (abaixo). Sem ela, sem o trecho
nela, ou se o site é de outro dono, escreva no laudo, na linha
do item: **"NÃO FOI CHECADO — o site recusou robô (<URL>, <código>)"**. A sessão central confere no
navegador do app, com o Lucas vendo (CLAUDE.md, "A marca"; APRENDIZADOS.md item 14, em que um subagente
levou 403 do Legislativo e contornou por `curl`).

- Já se sabe que recusam robô: **akleg.gov** e **elections.alaska.gov** (HTTP 405 e verificação humana:
  `roteiros/juneau/roteiro-editor.md` › "Voláteis"; `roteiros/juneau/volateis-conferidos.md`). Comece pela
  cópia local: o trecho que o dossiê registrou em "De onde vem cada frase".
- No Juneau, em 23/09/2026, o site de eleições foi lido pelo web.archive.org (dossiê › "Voláteis"). A cópia
  pública arquivada de **página oficial do Estado do Alasca** que recusou robô **vale como fonte** (Lucas,
  27/09/2026; CLAUDE.md, "A marca"): o laudo registra a URL da cópia, a original e a data da captura (no
  Juneau, em `url_acessada`, no `pautas/juneau/fundamento.json`). A cópia prova o que a página dizia na data
  da captura: o volátil continua pedindo a leitura de hoje, e a licença de uso não se lê nela. A cópia
  arquivada de outro site (federal, jornal, empresa) não foi perguntada ao Lucas e não se usa: o item fica "NÃO
  FOI CHECADO". O que a cópia não resolve vai ao navegador do app, com o Lucas vendo.

## 2 · Onde as coisas moram neste canal

| o contrato pede | neste canal |
|---|---|
| `roteiro-<persona>.md` (o objeto) | `roteiros/<proj>/roteiro-narrador.md`: o texto **aprovado**, com algarismos e grafia certa |
| — | `out/<proj>/roteiro.md` é a **cópia para a voz**: números por extenso e aliases de pronúncia (`Gladyshevsky`, `Keel`, `Kay-too`, `Mat-Sue` no Juneau). `roteiros/<proj>/voz/trocas.md` prova que, desfeitas as trocas, ela volta byte a byte ao aprovado. Alias não é erro de grafia; número por extenso não é outro número |
| `roteiro-editor.md` | `roteiros/<proj>/roteiro-editor.md`: a fonte de cada frase (documento, data, URL), a "Lista de auditoria" da última rodada e os "Voláteis" |
| `pauta-fundamento.json` | `pautas/<proj>/fundamento.json` (mais `fundamento.md` e `verificacao.json`) |
| os rótulos de tela | `out/<proj>/textos-tela.json`, quando existir |
| o que o dono aprovou | `roteiros/<proj>/aprovacao.md` |
| o laudo | `roteiros/<proj>/qc-roteiro/fatos.laudo.md`, como no Juneau |

- **Você não tem `Write`.** Devolva o laudo inteiro, no formato do contrato, e a sessão central grava.
- Onde gravar os laudos dos próximos vídeos: DECISÃO DO LUCAS PENDENTE (`roteiros/<proj>/qc-roteiro/`,
  como no Juneau, ou `out/<proj>/qc-roteiro/`, que é o que a pré-v1 espera). Até lá, o do Juneau manda.
- **O denominador.** As ferramentas de lista do Top10 não existem aqui. No Juneau a lista saiu de um
  script do próprio vídeo (`roteiros/juneau/_ferramentas/`, "preparar-final"), e o laudo disse como
  (`COBERTURA: 132 de 132`). Em vídeo novo, sem script: a leitura integral do texto aprovado, feita por
  você, e o laudo **declara** que a lista foi derivada à mão. A "Lista de auditoria" do dossiê é ponto de
  partida, nunca o placar: quem conta é você.

## 3 · O público e o prazo de validade

- Para quem: quem fala inglês, de 25 a 60 anos, em qualquer país, e que **não** acompanha geopolítica (voz.md §1). O que ele
  não sabe, ele não corrige: o erro passa.
- **O vídeo precisa valer daqui a dois anos** (voz.md §2): data absoluta, nunca `this week`, `recently`,
  `just happened`. Frase no presente sobre coisa que muda é volátil e vai para a tabela com a data-base.
- **No Juneau**, a reconferência dos voláteis depois da gravação está em `roteiros/juneau/volateis-conferidos.md`,
  e ela manda repetir o HB 3 **na véspera de publicar**: a 34ª Legislatura termina em janeiro de 2027, e a
  frase do p25 muda se o vídeo sair depois.

## 4 · O que a casa nunca afirma (voz.md §2) — cada um é achado

- **Fonte sem dono:** `experts say`, `reports suggest`, `some people believe`, `sources claim`. Sem nome,
  não entra.
- **Número sem dono:** todo número tem instituição e ano, na voz ou no crédito da tela.
- **Juízo e lado:** opinião sobre partido, político ou eleição; `they're right`, `evil`; `regime` para um
  governo e `government` para outro. Palavra carregada só entre aspas e atribuída. Cada ator nos
  próprios termos, atribuído; a voz não arbitra (voz.md §1).
- **Previsão como certeza:** `will collapse`, `is about to`. Futuro só em condicional, com a condição.
- **Sensacionalismo:** `shocking`, `World War 3`, `collapse`/`destroyed` sem ser literal e com fonte;
  vítima como espetáculo.
- **Causa que o dossiê não sustenta**: no Juneau, o vídeo não diz por que o eleitor votou não; a causa é
  contestada e fica com dono (`roteiro-editor.md` › "Decisões editoriais"). Causa dita pelo narrador sem
  estudo é achado.

## 5 · Texto de tela é afirmação

- Confira o `out/<proj>/textos-tela.json` **antes** de a arte desenhar: depois, cada conserto é cena
  refeita.
- No formato de tela en-US (identidade.md §7), e com o recorte do que o número mede: no Juneau, os 57 %
  de 1974 saíram da voz e vão para a tela, e **nunca** como `57% of Alaska voters`, que o boletim oficial
  não sustenta (`roteiros/juneau/aprovacao.md`; APRENDIZADOS.md item 14).
- Crédito também é afirmação: sem crédito na tela vai só o domínio público que a identidade.md §7 nomeia, e
  o retrato oficial de pessoa citada em uso editorial (midia.md §7.2). Documento do governo do Estado do
  Alasca e imprensa (ADN, KTOO) não estão lá, e nos EUA a obra do governo federal é domínio público por lei
  (17 U.S.C. §105), e a estadual não tem essa regra geral: confira peça a peça. Eles só vão à tela com
  permissão de uso clara, conferida e gravada na procedência; sem ela, a cena recria o trecho com o texto
  citado fiel e a fonte citada (Lucas, 26/09/2026; midia.md §7.1). Se a tela tratar um deles como livre sem a
  permissão gravada, ou se a recriação mudar o texto citado, é achado. A foto do governo do Alasca e a de
  jornal são outra regra: entram com a fonte creditada na tela (Lucas, 26/09/2026; midia.md §7.5), e o
  achado é o crédito que falta ou não bate com a origem. Sala de imprensa federal e DVIDS são domínio
  público federal, sem crédito na tela (midia.md §7.3).
- O **aviso do ano da foto** (`Photo from 1998`; Lucas, 27/09/2026; identidade.md §6) também é afirmação:
  - o ano tem de ser o que a origem da foto diz (o `data_na_origem` do veredito do `conferente-de-midia`);
  - a foto de outro ano sem o aviso é achado, como o aviso sobre foto do ano do fato.

## 6 · Depois da narração, consertar custa

A narração do texto aprovado já existe. Um erro que chegou à voz se conserta refazendo o parágrafo na
ElevenLabs, o que **gasta crédito, refaz o master e desloca todas as cenas seguintes**
(`roteiros/juneau/volateis-conferidos.md`; CLAUDE.md). Isso é **decisão e gasto do Lucas**: o laudo dá o
parágrafo, a frase e o conserto de uma frase pronto, e para aí. Você nunca roda `narrar.mjs`.

## 7 · O que o laudo traz, além do que o contrato pede

- a data-base e como a lista foi derivada (script do vídeo ou leitura à mão);
- cada item "NÃO FOI CHECADO" por recusa de robô, com URL e código, para a sessão central conferir;
- os voláteis que ficaram na fala, com o que os faz crescer **e** o que os zera;
- a lista de **DECISÃO DO LUCAS PENDENTE** que tocou esta checagem, uma linha cada.
