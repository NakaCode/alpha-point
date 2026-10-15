# Pauta de logos — zona-do-canal (pesquisa-logos, 15/10/2026)

Entrada: `out/zona-do-canal/espelho.json` (sha256 d760e53f…). Uma cena tem `needs.logos`: **s49** (as bandeiras do
Panamá e dos EUA, "bandeiras como alfinetes" no mapa de 1960–1963).

## Entregue em `_media/logo/`

Nada. A pasta não foi criada.

## Rascunho pronto (`out/zona-do-canal/_tmp/pesquisa-logos/rascunho/`), à espera da Sala

| Arquivo | O que é | Medida | sha256 | Fonte | Licença |
|---|---|---|---|---|---|
| `flag-panama.svg` | bandeira do Panamá | vetor 3:2 | 464fc8f9… | commons.wikimedia.org/wiki/File:Flag_of_Panama.svg (sha1 igual ao da API) | Public domain (PD-Panama, PD-ineligible) + aviso *Insignia* |
| `flag-panama-3840.png` | a mesma, render do Commons | 3840×2560, 9,8 MP | 9a7c6b62… | idem (thumb) | idem |
| `flag-united-states.svg` | bandeira dos EUA, 50 estrelas | vetor 19:10 | 48f0d3e4… | commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg (sha1 igual ao da API) | Public domain (PD-USGov, PD-flag) + aviso *Insignia* |
| `flag-united-states-3840.png` | a mesma, render do Commons | 3840×2022, 7,8 MP | 1dc2c84d… | idem (thumb) | idem |

Olhadas (Read): o Panamá com as estrelas azul e vermelha nos quartos certos; os EUA com 50 estrelas (9 fileiras 6/5) e
13 listras. É a versão da época da cena (a de 50 estrelas vale desde 04/07/1960; a do Panamá não mudou).

**Por que não foram entregues:** a roupa §2 diz "Não entregue bandeira para mapa nem para nome de país", e a
identidade §6 ("País no mapa", Lucas, 27/09/2026) diz "Vale para todo mapa e para toda bandeira, a dos EUA também".
Em s49 a bandeira não identifica país: ela é o objeto da frase (onde a bandeira foi hasteada). A pergunta foi
feita ao Lucas sobre identificar país; este uso não foi perguntado. Vai à Sala.

## `assets/flags/` (do molde, só lidos)

- `pa.png`: 320×213, pal8 (ffprobe), sha256 a0f3bb1e…
- `us.png`: 320×168, pal8, sha256 dcd9384f…
Não servem para alfinete grande nem para o círculo de 640 px da PRANCHA: 320 px de largura. Num alfinete pequeno
(≤ 320 px no palco 4K) serviriam; o SVG do Commons é melhor em qualquer tamanho.

## Só o nome escrito (midia.md §7.6; roupa §4)

Panama Canal Commission (s64) · Panama Canal Authority (s67) · Canal Zone Government · Panama Canal Company ·
International Commission of Jurists (s49, s51) · U.S. Department of State · U.S. National Archives (s54) ·
Department of Defense (s63) · National Institute (s51, s53) · Balboa High School (s50, s52). Grafias de tela: as do
espelho (`_grafias`). Nenhum selo, brasão nem logo foi buscado.

Linhas sugeridas ao `redator-de-tela` (roupa §5), se ele quiser:
- `Panama Canal Commission — the U.S. agency that ran the canal, 1979–1999`
- `Panama Canal Authority — Panama's agency that runs the canal since 1999`
- `National Institute — a public high school in Panama City`
