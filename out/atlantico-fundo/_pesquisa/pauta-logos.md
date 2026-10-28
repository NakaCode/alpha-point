# Pauta de logos — atlantico-fundo (vídeo 4)

Passo `research`, 28/10/2026, despacho da Sala. O JSON: `out/atlantico-fundo/_pesquisa/pauta-logos.json`, que passa no
contrato `pauta-pesquisa` (saída 0). Espelho lido: sha256 `8899a33b…7eff`, 75 cenas.

## Resumo

Nenhuma cena pede logo, selo, brasão, emblema, insígnia nem bandeira como elemento gráfico:

- nenhum segmento tem `needs.logos`;
- nenhum é PRANCHA, então não há círculo de ator com bandeira;
- o próprio espelho já diz "logo não se pede" (s12, s28 e s63) e "sem bandeira" (s40, s42, s60, s61, s64, s65 e s69).

As instituições aparecem só como nome escrito ou crédito, e a regra do canal para elas é o nome escrito (`marca/midia.md`
§7.6; roupa §4). **Nada foi buscado nem entregue em `out/atlantico-fundo/_media/logo/`**, e nenhum pedido foi à rede.
Por isso `itens` está vazio.

## Nomes escritos: o nome oficial, cena a cena

Todos vão em Inter 700 na pílula `--rotulo`, sem logo nem selo. O nome oficial saiu das cópias locais do dossiê
(`midia/atlantico-fundo/fontes/`).

| Na tela | Nome oficial | Cenas |
|---|---|---|
| U.S. Coast and Geodetic Survey | United States Coast and Geodetic Survey (relatório de 1883, S11) | s12, s16 |
| U.S. Navy (no cargo de Brownson) | United States Navy | s14 |
| National Geographic Society | National Geographic Society (S09) | s21 |
| The Sun (Newberry, S.C.) | The Sun (Newberry, S.C.) (S09) | s21 |
| Australian Museum | The Australian Museum (S30) | s29 |
| NOAA | National Oceanic and Atmospheric Administration (em s47, a NOAA Ocean Exploration) | s30, s47, s61, s74 |
| NOAA NCEI | NOAA National Centers for Environmental Information (S29) | s40, s41 |
| U.S. Geological Survey / USGS | U.S. Geological Survey (S27) | s31, s33, s35, s36, s38, s39 |
| GEBCO Gazetteer | IHO-IOC GEBCO Gazetteer of Undersea Feature Names (S15) | s08, s56, s62 |
| GEBCO 2026 (a base dos mapas) | GEBCO, The GEBCO Grid (S52) | as 36 cenas com `needs.geo` GEBCO |
| Seabed 2030 | The Nippon Foundation-GEBCO Seabed 2030 Project | s63 |
| International Hydrographic Organization (IHO) | International Hydrographic Organization (S20) | s68, s69 |
| Five Deeps Expedition | Five Deeps Expedition (de Caladan Oceanic LLC) | s48, s52 |
| Earth-Science Reviews | Earth-Science Reviews (S02) | s08, s56, s58, s59 |
| DEEP-SEA RESEARCH I | Deep Sea Research Part I: Oceanographic Research Papers (S06) | s73 |
| Popular Science | Popular Science (S05) | s54 |
| Landsat | Landsat, com dados do USGS (S40) | s66 |

`NOAA Ship Ronald H. Brown` (s32) é nome de navio. O emblema pintado no casco, se a foto o mostrar, faz parte do
registro real.

## As linhas que explicam a entidade, sugeridas ao `redator-de-tela` (roupa §5)

- `U.S. Coast and Geodetic Survey — the federal agency that charted America's coasts` (s12, s16). A voz só diz "from
  the U.S. Coast and Geodetic Survey". A definição não está como frase em fonte lida: o `verificador-de-fatos` a confere.
- `GEBCO Gazetteer — the official list of undersea feature names` (s08, s56, s62). Casa com a voz ("the official list of
  undersea features") e com o nome oficial.
- Opcional: `International Hydrographic Organization — the global body for nautical charts` (s68, s69). Também precisa
  do verificador.

A NOAA ("the U.S. ocean and weather agency"), o USGS (nome inteiro na primeira vez) e o Seabed 2030 ("the project to
map the whole ocean floor by 2030") já vêm explicados pela voz.

## Países e bandeiras

Nenhuma bandeira é entregue, pela identidade §6 ("País no mapa: o nome escrito, sem bandeira"), que vale também para a
dos EUA, e pela roupa §2.

| Lugar | Cenas | Como aparece |
|---|---|---|
| Puerto Rico | s01, s02, s10, s13, s18, s20, s23, s35, s37, s39, s40, s42, s50, s51, s60, s61, s74 | nome no mapa e sobre o aéreo |
| EUA (a zona econômica) | s50, s60, s61 | `U.S. EXCLUSIVE ECONOMIC ZONE` |
| República Dominicana | s40, s60, s61 | `DOMINICAN REPUBLIC`, `DOMINICAN REPUBLIC EEZ` |
| Ilhas Virgens Britânicas | s42, s43 | `BRITISH VIRGIN ISLANDS`, `Anegada, British Virgin Islands` |
| Ilhas Sandwich do Sul | s64, s65 | `SOUTH SANDWICH ISLANDS`, **sem bandeira e sem dono** (R09, N15) |

Nas Sandwich do Sul, uma bandeira (a do território britânico ou a da província argentina) tomaria um lado da disputa.

As bandeiras de `assets/flags/` foram medidas com o `ffprobe`, e nenhuma é pedida: `us.png` (320×168), `gb.png`
(160×80) e `ar.png` (160×100).

## Para outros passos

- **s47 e todo vídeo da NOAA ou da NASA** (`pesquisa-imagens`, `conferente-de-midia`): o clipe de divulgação pode trazer o
  emblema da NOAA gravado no quadro. O emblema não vira elemento da cena (midia §7.3 e §7.6), e nada cai no canto
  inferior direito de 400 × 400 px.
- **DOCUMENTO** (s08, s16, s21, s56, s59, s62, s69 e s73; `pesquisa-documentos`, `editor-de-arte`): o emblema, o timbre
  ou o cabeçalho da página real (a M-3 da IHO em s69, o relatório do USC&GS em s16, o jornal em s21) só entra com
  permissão clara. Na recriação, vai sem brasão, selo, timbre nem logo (identidade §5).

## Selos e insígnias

Nenhum foi buscado nem entregue.
