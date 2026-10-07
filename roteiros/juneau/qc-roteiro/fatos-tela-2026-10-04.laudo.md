COBERTURA: 5 de 5, com o denominador tirado do confronto entre `out/juneau/textos-tela.json` (sha256 `3c082d6c…f7da2f`) e a cópia de antes, `out/juneau/_tmp/textos-tela-antes-5c.json` (sha256 `73d4f025…2c2155`): 1 entrada nova que vai à tela, mais 4 afirmações sem texto próprio que ela faz, lidas à mão na entrada e na nota

<!-- Laudo do verificador-de-fatos (subagente do Claude central, 04/10/2026, 18:1x de Brasília), sobre a 5ª leva C do
redator-de-tela. Gravado pelo próprio verificador, a pedido do despacho. Os laudos anteriores continuam em
fatos-tela.laudo.md (28/09), fatos-tela-2026-10-01.laudo.md (01/10) e fatos-tela-2026-10-03.laudo.md (03/10). -->

NOTA: 9.5/10. O ponto é Anchorage, no ponto do Natural Earth, e o folheto oficial de 1976 mede as 70 milhas a partir de Anchorage: a entrada confere. O meio ponto a menos é de desenho, não de verdade: a linha da estrada começa a 3,3 km do ponto, e isso aparece no quadro.

# Laudo de fatos da tela: Juneau, 5ª leva C (`screen_text`), 04/10/2026

- **A data-base:** 04/10/2026, 18:1x de Brasília.
- **O objeto:** a entrada nova `rotulos_dado[283]` de `out/juneau/textos-tela.json` (s15, `Anchorage`).
- **A régua:** `out/juneau/words.json`, `out/juneau/regencia.json` (s15: `inSec` 143,4, `dur` 16,667), `out/juneau/_pesquisa/pauta-geo.json`, `out/juneau/_media/geo/cidades-ne.json` e `estrada-anchorage-willow.json`, e o folheto de 1976 (`midia/juneau/fontes/documento/oep76.pdf`, sha256 `9b615634…a60bd`, o mesmo de `verif/oep76.pdf`, baixado do `url_acessada` do doc-16 em `pautas/juneau/fundamento.json`).
- **As ferramentas:** Bash (Python e PyMuPDF, só leitura), Read, WebFetch e WebSearch.
  - A Wikipedia e o road log da Bell's Alaska responderam.
  - O themilepost.com recusou com 403, e parei nele.
  - O web.archive.org não abre pela ferramenta desta sessão. A frase do folheto foi conferida na imagem da página, na cópia local que veio desse endereço.
  - Nenhum `mcp__claude-in-chrome__*` nem `mcp__Claude_Browser__*`.

## Como a lista foi derivada

O canal não tem extrator para texto de tela. O denominador saiu de um confronto em Python, só leitura, campo a campo, entre o arquivo novo e a cópia de antes.

| parte | o diff |
|---|---|
| `rotulos_dado` | 1 nova, no fim (índice 283); nenhuma outra mudou |
| `glossario[48]` (Anchorage) | só o `_tela`, que agora cita a s15 |
| `_revisao_2026_10_03` | 1 linha nova (a 11) |
| `cards_pessoa`, `_creditos`, `_avisos_de_ano`, `nao_vai_para_tela` | sem mudança |

- **O relato do redator bate com o arquivo.** Cada mudança que ele descreve está no diff, e o diff não tem nenhuma que ele não descreva.
- **Fora do denominador**, porque não vão à tela: o `glossario` e a `_revisao`. Li os dois, e nenhum contradiz a entrada.
- **A entrada vai à tela com um texto (N01) e faz 4 afirmações sem texto próprio (X01 a X04):**
  - onde fica o ponto;
  - que a medida da régua parte dali;
  - que a fonte dispensa crédito;
  - a conta do `_tempo`.
- **O resto do arquivo** é igual byte a byte e herda o veredito dos laudos de 28/09, 01/10 e 03/10. Entre o herdado está `ABOUT 70 MILES` (R058, R071).

## A tabela

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| N01 | s15, `rotulos_dado[283]`: `Anchorage` (ponto_mapa, na ponta sul da estrada) | CONFIRMADA | A camada `cidades-ne` traz `name: "Anchorage"`, `adm1name: "Alaska"` e `ne_id` 1159151249. A grafia é a mesma do glossário e do ponto de s08 (`rotulos_dado[36]`), e cabe no teto de 1 palavra. A voz diz `Anchorage,` (`words.json`, índice 453). | https://www.naturalearthdata.com/about/terms-of-use/ (`out/juneau/_media/geo/cidades-ne.json`) |
| X01 | o ponto fica em -149.887446, 61.214004 (o PT.A da s15, o mesmo de s08 e do raio de s12) | CONFIRMADA | É a geometria do NE em `cidades-ne.json`, a 953 m dos campos lat/long da própria tabela (o arquivo declara). A conferência de costa dá terra, a 1.620 m da borda no recorte `matsu-anchorage`. O ponto cai no centro de Anchorage. O `s15.html` já monta `A: { geo: "cidades-ne", name: "Anchorage" }`. | https://www.naturalearthdata.com/about/terms-of-use/ |
| X02 | a régua `ABOUT 70 MILES` mede a partir de Anchorage, e o ponto marca esse começo | CONFIRMADA, com o achado LEVE A1 | O folheto diz: "The Willow site is located approximately 70 road miles north of Anchorage at the southern end of the Talkeetna Mountain Range" (Official Election Pamphlet 1976, p. 48 impressa, PDF p. 2; conferido letra a letra na imagem da página). O folheto não diz de que ponto da cidade se mede. A contagem das rodovias parte do centro: "The 0 (zero) mile marker for the Glenn Highway is at its terminus in downtown Anchorage at the intersection of East 5th Avenue and Gambell Street", e os marcos da Parks "reflect distance from Anchorage" (Wikipedia). Willow fica no "mile 69" (Bell's Alaska). O ponto do NE, no centro, é uma origem fiel. A linha desenhada começa a 3,3 km dele, a leste, no terminal da Glenn Highway "near Merrill Field" (`pauta-geo.json` › `extremo_a`: `a_km 3.3`; Wikipedia, Glenn Highway). | http://www.elections.alaska.gov/doc/oep/1976/1976-Ballot-Prop-Bond-Prop.pdf (cópia web.archive.org/web/20161230104844); https://en.wikipedia.org/wiki/George_Parks_Highway; https://en.wikipedia.org/wiki/Glenn_Highway; https://www.bellsalaska.com/roadlogs/parks-highway-log.pdf |
| X03 | o ponto não pede crédito novo na tela (NE em domínio público; a linha da MapTiler/OSM já está lá) | CONFIRMADA | "All versions of Natural Earth raster + vector map data found on this website are in the public domain." e "Crediting the authors is unnecessary." | https://www.naturalearthdata.com/about/terms-of-use/ |
| X04 | `_tempo`: entra em 13,767 (master 157,167), sai no corte em 16,667, e fica 2,9 s no ar | CONFIRMADA | `words.json[453]` `Anchorage,` vai de 157,138 a 157,63. A s15 tem `inSec` 143,4 e `dur` 16,667 na `regencia.json`. A conta: 157,138 − 143,4 = 13,738, e o quadro de teto é 413/30 = 13,767. O master dá 143,4 + 13,767 = 157,167, e o tempo no ar, 16,667 − 13,767 = 2,900. A conta fecha. | `out/juneau/words.json`, `out/juneau/regencia.json` |

## Os achados

**A1 · [LEVE] O ponto `Anchorage` e o começo da estrada ficam a 3,3 km um do outro.**
- **O que é:** a geometria `estrada-anchorage-willow` começa em -149.826564, 61.217627, no terminal oeste da Glenn Highway do OSM, perto do Merrill Field. O ponto do NE fica a 3,28 km dali, a oeste.
- **O tamanho no quadro:** na câmera final da s15 ("Willow–Anchorage", zoom 9.3, com Anchorage em (1900, 1700) no quadro de 3840), medi cerca de 55 px na horizontal entre o ponto e a primeira ponta da linha. A conta é minha, na escala que a própria cena declara (≈ 896 px por grau de Mercator).
- **Por que pesa:** com o nome no ponto, o espectador lê a régua `ABOUT 70 MILES` como "deste ponto até Willow", e a linha não toca o ponto. O número continua certo, porque o folheto não fixa a origem e a contagem oficial parte do centro (X02). É uma falha de desenho que o nome novo deixa à vista, e não um erro de fato.
- **CONSERTO, a escolha do mapista** (o redator já deixou a decisão com ele, na `_nota`):
  - (a) Prolongar o caminho para oeste pela geometria real do OSM: os ways do AK-1, pela E 5th e E 6th Avenue, até a Gambell St, que é o marco 0 da Glenn. A ponta fica a cerca de 1 km do ponto. A procedência fica no `pauta-geo.json`, e a linha "© OpenStreetMap contributors" já está na tela.
  - (b) Manter a linha como está e declarar na cena que ela começa no terminal da Glenn Highway, a 3,3 km do ponto do NE.
  - Nunca mover o ponto para a ponta da linha, nem ligar os dois com um segmento reto inventado: esse trecho não seria uma estrada.
- **RAIZ:** PONTUAL. A geometria nasceu em 27/09 para a s15 sem o nome de Anchorage na tela, e o desvio estava declarado (`extremo_a`).

**Pendência, sem veredito meu:** o `s15.html` (03/10, 15:42) ainda não desenha o rótulo novo. Quando o mapista o fizer, o qc confere três coisas:
- o texto `Anchorage`;
- o ponto no PT.A do `cidades-ne`, e não na ponta da geometria;
- a entrada em 13,767.

**Contexto herdado, não reaberto:** pelo folheto, as 70 milhas vão até o **sítio** ("The town of Willow is five miles to the west of the site"). A estrada da s15 termina na **vila** (68,2 mi do terminal da Glenn; o marco 69 da Parks, a contar do centro). O `pauta-geo.json` já declara isso ("A medida aqui vai até a vila, não até o local"). O `about` da voz e da tela cobre a diferença, e o veredito CONFIRMADA de R058 e R071 continua de pé. Não muda com esta leva.

## A lista de nomes

Não há atribuição anônima na entrada nova. A fonte da medida é institucional e já tem nome: Alaska Division of Elections e Capital Site Selection Committee, Official Election Pamphlet 1976, p. 48 (doc-16 do `fundamento.json`).

## Os voláteis

Nenhum. O lugar e o número são históricos (1976). O ponto do NE vem de um commit fixo (`ca96624`, registrado em `pauta-geo.json`). A geometria do OSM pode mudar, mas a usada aqui está gravada com sha256 (`bb959595…`).

## Os 2 padrões mais vistos

1. **O ponto de cidade e a ponta de uma geometria derivada não coincidem.** Aqui ficam 3,3 km entre os dois; no Juneau já houve o ponto aproximado que caía na água. Quando o nome vai à tela, a distância entre os dois deixa de ser interna e passa a ser lida.
2. **A medida da fonte tem uma origem e um destino que o desenho aproxima.** O folheto diz "north of Anchorage" até o "site"; a cena desenha do terminal da Glenn até a vila. As duas diferenças estão declaradas e cabem no `about`.

## O que tocou esta checagem e é decisão do Lucas

- Onde gravar o laudo de fatos dos próximos vídeos (CLAUDE.md, os marcadores). Este segue o do Juneau, em `roteiros/juneau/qc-roteiro/`.

VEREDITO: PASS
