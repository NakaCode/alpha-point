# Pauta de imagens: Zona do Canal (rodada 1, 15/10/2026)

O que está em `pauta-imagens.json`, em português. Tudo está no **rascunho**
(`out/zona-do-canal/_media/_caca/<cena>/acervo-livre/`), sem `entregar`: o `conferente-de-midia` julga primeiro, e só o
`aprovado` se entrega num despacho novo (roupa §10). Os 50 arquivos são fotos. Nenhum é vídeo, nenhum veio de banco
pago, e nenhum leva crédito na tela: são domínio público federal (NARA, DoD, Carter White House) ou domínio público
nos EUA (livro de 1916).

Cada arquivo foi olhado numa folha de conferência (`out/zona-do-canal/_tmp/pesquisa-imagens/grade-*.png`) e medido
com o ffprobe. O sha256 de cada um bate com o `manifest.jsonl` do `baixar`.

## Por cena

| Cena | Preferida(s) | Reservas | Data na origem | Observação |
|---|---|---|---|---|
| s03 | a delegacia central de Balboa (1943); o antigo tribunal de magistrado de Balboa (1951); a escola primária de Balboa (1954) | nenhuma | 1943, 1951, 1954 | três fotos da mesa, com aviso do ano; o tribunal não é o de Ancón da s14 |
| s14 | o District Court Building, Ancón (1960) | o mesmo prédio visto do alto (1958) | 1960, 1958 | aviso do ano |
| s15 | a polícia montada da Zona diante do hospital de Ancón (c. 1916); a escola pública de San Pablo (1904); o correio de La Boca (1904) | a delegacia de Empire (1904) | c. 1916, 1904 | fotos médias (1.488–2.052 px): impressas sobre a mesa |
| s18 | o Administration Building, Balboa Heights (1957) | vista aérea do mesmo prédio (1959) | 1957, 1959 | de 1914–1930, não achado: aviso do ano |
| s22 | o carro pagador em Culebra (1908); a escavadeira a vapor em Culebra (1911); 'Gold Quarters', Balboa (1944); a Silver Commissary de Curundu (1947); o clubhouse dos 'gold employees' em Balboa (1915) | as Silver Commissaries de La Boca e de Gamboa (1947); o interior do Cristobal Silver Clubhouse (1948) | 1908–1948 | o plano 3 (a placa 'gold'/'silver' legível) não foi achado |
| s23 | nenhuma (alternativa: a rua das casas 'silver' de La Boca, abril de 1920) | nenhuma | 1920 | os trabalhadores antilhanos não foram achados; o regente decide se a alternativa serve |
| s31 | casas de quatro famílias, rua Las Cruces, Balboa (1951) | casa de duas famílias, Balboa (1939) | 1951, 1939 | |
| s32 | uma cliente comprando camisas na comissaria de Balboa (1954) | o açougueiro e a cliente (1951); três interiores vazios (1956–1957) | 1951–1957 | |
| s33 | empregados do correio e famílias diante do correio novo de Balboa (1938, alternativa); soldados do 33º de Infantaria em Fort Clayton (1928) | nenhuma | 1938, 1928 | a família diante da casa da Company não foi achada |
| s39 | dia de matrícula na escola primária de Balboa: pais e crianças (1954) | nenhuma | 1954 | |
| s45 | a entrada nova da comissaria de Balboa (1955) | outro ângulo da mesma entrada (1955); o prédio inteiro (1956) | 1955–1956 | diferente dos arquivos de s22 e s32 |
| s47 | a escola pública de Ancón (1918) e a escola de La Boca (1921); a Balboa High School (1953) e a escola de Paraiso (1953) | a BHS vista do alto (1948) | 1918, 1921, 1953 | dos anos 1960, não achado: aviso do ano; as de 1918 e 1921 são pequenas (1.476 px) e preenchem a lacuna |
| s52 | os estudantes com a bandeira rasgada (Exhibit P-12, janeiro de 1964) | a confusão no mastro (P-11); a delegação a caminho do mastro (P-5); o policial e o estudante (granulada) | 1964 | série 535455 da NARA, Panama Canal Company |
| s54 | a multidão na President Kennedy Avenue, perto da Tivoli (1964) | manifestantes rasgando uma bandeira americana (granulada) | 1964 | mesma série |
| s57 | Carter e Torrijos assinando, Orfila entre eles (NARA 176082) | Carter, Orfila e Torrijos à mesa (176081); o aperto de mão (176083) | 07/09/1977 | Carter White House Photographs; TIFF de 3.000 px |
| s64 | nenhuma (fotos da Commission em 1985 e 1988, PENDENTES DO LUCAS) | nenhuma | 1985, 1988 | footage de época não achado |

## Sem mídia nesta rodada

- **s04**: a bandeira em 01/10/1979.
- **s61**: Mondale em Albrook.
- **s50**: os estudantes americanos com a bandeira. Há dois itens do Departamento de Estado, sem autoria declarada, que
  ficam como pergunta.
- **s42**: a placa 'gold'/'silver'. O fallback é a folha do FRUS, do `pesquisa-documentos`.
- **s16, s20 e s49**: miniaturas opcionais.

Os termos de cada leque estão em `lacunas`, no JSON.

## Banco pago

`lista-de-caca.json` tem um item, o `s01-a`: o aéreo de hoje de Balboa com o Administration Building, 2 clipes, para
s01, s19 e s67 (a s68 congela o último quadro da s67). A Storyblocks fica fora, porque o vídeo trata de soberania e
política (midia §3.3). O B-roll de hoje de Miraflores, reserva da s64, não está na lista: ele espera o ok do Lucas
(pendência 7).

## 3ª rodada (pesquisa-2), 15/10/2026: as 4 buscas novas

O JSON é a verdade. O que a 3ª rodada pôs no rascunho (os vereditos e a entrega estão na 4ª rodada, abaixo):

| Cena | Arquivo no rascunho | O que é | Medida |
|---|---|---|---|
| s03 | `s03-magistrate-court-old-police-station-balboa-1936-nara-100997672.jpg` | o tribunal de magistrado de Balboa em julho de 1936 (NARA 100997672) | 5520x3680 |
| s22 | `s22-cristobal-silver-clubhouse-exterior-1948-nara-202799387.jpg` | o exterior do Cristobal Silver Clubhouse, 15/09/1948 | 5120x3998 |
| s23 | `s23-barbados-laborers-arrive-ss-ancon-deck-cristobal-1909-84e-nara-100996838.jpg` | 1.500 trabalhadores de Barbados chegando a Cristóbal, 02/09/1909 (lacuna, pequena, mesa) | 1228x1488 |
| s23 | `s23-barbados-laborers-arrive-ss-ancon-deck-cristobal-1909-84d-nara-100996836.jpg` | o mesmo convés, outro ângulo (lacuna, mesma mesa) | 1200x1460 |

Sem mídia: **s22, plano 2** (os artífices recrutados nos EUA). NÃO ACHADO; leque na lacuna do JSON.

## 4ª rodada (pesquisa-2, entrega), 15/10/2026: os vereditos do lote 5

Lidos em `conferencia-midia.json` (lote 5) e casados pelo sha256 do rascunho.

| Cena | Veredito | Onde está | sha256 | Aviso do ano |
|---|---|---|---|---|
| s22 | aprovado | `_media/foto/s22/cristobal-silver-clubhouse-exterior-1948-nara-202799387.jpg` | `ba518869…` | `Photo from 1948` (corrigido: a 3ª rodada propunha nenhum) |
| s23 | aprovado (lacuna, mesa até 1,4×; se couber só uma, esta) | `_media/foto/s23/barbados-laborers-arrive-ss-ancon-deck-cristobal-1909-84d-nara-100996836.jpg` | `e06b0140…` | `Photo from 1909` |
| s23 | aprovado (lacuna, mesma mesa) | `_media/foto/s23/barbados-laborers-arrive-ss-ancon-deck-cristobal-1909-84e-nara-100996838.jpg` | `00b1531d…` | `Photo from 1909` |
| s03 | trocar | no rascunho: `_media/_caca/s03/acervo-livre/s03-magistrate-court-old-police-station-balboa-1936-nara-100997672.jpg` | `e8139be8…` | (não vai à tela) |

- O s03 de 1936: o tribunal sob uma cortina de trepadeiras, com meia tela de rua; não se lê como "courts". Sem busca nova
  nesta tarefa. Sem foto, a mesa da s03 fica com a delegacia de 1943 e a escola de 1954 (o `_se_a_busca_voltar_vazia` do espelho).
- Crédito na tela: nenhum nos três (domínio público federal, NARA RG 185).
- O plano 5 da s22 tem 1,633 s: o clube 'gold' de 1915 e o 'silver' de 1948 entram juntos (nota do conferente; é do regente e
  do montador).


## 5ª rodada (pesquisa-3): os acertos A8 e A9 do laudo de fatos

Só dois acertos na pauta, sem busca nova, sem entrega e sem reescrita (laudo `roteiros/zona-do-canal/qc-roteiro/fatos-pesquisa-2026-10-15.laudo.md`,
parte B, A8 e A9). Os vereditos foram lidos em `conferencia-midia.json` e casados pelo sha256 do rascunho.

| Cena | Arquivo | `lugar_na_origem` de antes | `lugar_na_origem` de agora (o do veredito) |
|---|---|---|---|
| s52 | NARA 218517742 (`d870626a…`) | área do mastro da Balboa High School, Canal Zone | nenhum lugar no item; a série: Canal Zone, Panama |
| s54 | NARA 218517734 (`6c14c300…`) | President Kennedy Avenue, perto da Tivoli Guest House (a linha), Canal Zone | President Kennedy Avenue Near Tivoli Guest House |
| s57 | NARA 176082 (`75fe226d…`) | sede da OEA, Washington, D.C. | null (a origem não nomeia lugar) |
| s57 | NARA 176083 (`6f606983…`) | sede da OEA, Washington, D.C. | null (a origem não nomeia lugar) |

- Nos quatro, o campo novo `rotulo_de_tela_lugar` diz que o rótulo de lugar na tela é do `redator-de-tela`, a partir do
  `lugar_na_origem` do veredito, nunca mais específico que ele. A pauta não propõe rótulo. Na s57, nenhum lugar sobre as fotos.
- **s64**, a foto do Comfort em Miraflores, de 1988 (NARA 6433742, `3d6ceac6…`): `aviso_de_ano_proposto` passou de `null` a
  `Photo from 1988`, como o veredito pede (`aviso_de_ano: true`). A grafia final é do `redator-de-tela`, e o aviso na tela, do
  `editor-de-arte`.
- A tabela do topo continua como estava: ela não grava lugar de origem nesses itens, e a linha da s54 ("perto da Tivoli") cabe
  na origem.
