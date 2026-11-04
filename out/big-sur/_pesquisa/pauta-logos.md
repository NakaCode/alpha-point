# Pauta de logos: big-sur (vídeo 5)

Passo `research`, 04/11/2026, despacho da Sala. O JSON é `out/big-sur/_pesquisa/pauta-logos.json`, e passa no contrato
`pauta-pesquisa` (saída 0, com `REGIE_MOTOR`). O espelho lido foi a r2 (sha256 `6e787c20…adefcb`), com 61 cenas.

## Resumo

**Pedidos de logo: 0. Entregues: 0.** Nenhuma cena pede logo, selo, brasão, emblema, insígnia nem bandeira:

- nenhum segmento tem `needs.logos` (só `geo` e `dados`);
- nenhum é PRANCHA ("este espelho não usa PRANCHA"), e por isso não há círculo de ator com bandeira;
- as folhas de documento (s06, s39, s43, s45 e s51) já dizem "sem brasão, selo, timbre nem logo".

As 12 instituições do vídeo aparecem como nome escrito ou crédito, e a regra do canal para elas é o nome escrito
(`marca/midia.md` §7.6; roupa §4). **Nada foi buscado nem gravado em `out/big-sur/_media/logo/`**, e a pasta não foi criada.
Também não houve nenhum pedido à rede: os nomes oficiais saíram das cópias locais do dossiê (`midia/big-sur/fontes/`).

## Nomes escritos: o nome oficial de cada instituição

Todos vão em Inter 700 na pílula `--rotulo`, sem logo nem selo. As URLs e os sha256 das cópias estão no JSON.

| Na tela | Nome oficial | Fonte do nome | Cenas na tela |
|---|---|---|---|
| Monterey County / MONTEREY COUNTY PLAN (1986) | Monterey County ("Monterey County, California Big Sur Coast land use plan local coastal program") | o plano, govinfo | s06, s07, s13, s17, s19, s23, s24, s31, s37, s39, s40, s41, s44, s47, s59 |
| Census Bureau / 2020 CENSUS | United States Census Bureau | census.gov, glossário | s03, s11, s13, s14, s15, s26, s55, s56, s60 |
| American Community Survey / ACS | American Community Survey (ACS), do Census Bureau | census.gov/acs/about | s56 |
| U.S. FOREST SERVICE | U.S. Forest Service (plano); "the Forest Service" (16 U.S.C. cap. 23) | o plano e o U.S. Code, govinfo | s24 |
| (só na voz) | U.S. Geological Survey (USGS) | usgs.gov, a notícia de Mud Creek | voz em s27 |
| Caltrans | California Department of Transportation (Caltrans) | o plano; as notas do Distrito 5 | s28, s50, s51, s52, s54, s57 |
| FHWA / Federal Highway Administration | Federal Highway Administration, do U.S. Department of Transportation | fhwa.dot.gov, back0403 | s34, s36 |
| CAL FIRE | CAL FIRE, como o próprio órgão se escreve (o nome por extenso não foi buscado: o site recusa robô) | a página do Timber Fire, lida pela Sala | s53 |
| San Quentin | San Quentin Prison (a grafia da fonte da época) | FHWA | s36 |
| STATE PARKS | California Department of Parks and Recreation | o plano | s25, s38 |
| HUNTER LIGGETT | Hunter-Liggett Military Reservation (plano, 1986); Fort Hunter Liggett (FHWA) | o plano e a FHWA | s21 |
| Nepenthe | Nepenthe restaurant (empresa privada) | Caltrans, 15/05/2026 | s52 |

## As linhas que explicam a entidade, para o `redator-de-tela` (roupa §5)

- **Opcional:** `Federal Highway Administration — part of the U.S. Department of Transportation` (s34, s36). A voz só diz
  "according to the Federal Highway Administration". O lastro é o cabeçalho da página da FHWA.
- **Opcional:** `HUNTER-LIGGETT MILITARY RESERVATION · 1986 PLAN` (s21). Liga o rótulo à "military reservation" da voz,
  com o nome que o plano escreve. Hoje o nome é outro, "Fort Hunter Liggett".
- **Dispensável:** `American Community Survey — the Census Bureau's ongoing survey` (s56). A voz já explica.

A voz já explica a Caltrans, o CAL FIRE, o Census Bureau, o Forest Service, San Quentin, o Nepenthe e o plano do condado.
O USGS vai com o nome inteiro.

## Estados e bandeiras

Nenhuma bandeira foi entregue. Wyoming (s04, s16, s58), Alasca (s16) e Califórnia (s16, s56) vão só com o nome escrito. A
regra é a identidade §6: "Vale para todo mapa e para toda bandeira, a dos EUA também".

## Fora desta pauta

- **Los Padres National Forest e Ventana Wilderness** são rótulos de mapa (da `pesquisa-geo`).
- **Timber Fire e Plaskett Fire** são eventos.
- **A vinheta do canal** (s12) é peça do próprio canal (identidade §8).
- **MapTiler e OSM** vão como crédito em texto: o plano pago dispensa o logo, não o crédito (identidade §6).

## Para outros passos

- **s09 e s27, o vídeo de drone do USGS** (`pesquisa-imagens`, `conferente-de-midia`). O identificador do USGS, se estiver
  gravado no quadro, não vira elemento da cena. Nada cai no canto inferior direito de 400 × 400 px.
- **As fotos da Caltrans** (s28, s49, s50…). A logo pintada em caminhão, placa ou capacete é registro real. Logo ou marca
  d'água sobreposta à foto não vira elemento da cena.
- **s52, o Nepenthe.** A placa do restaurante na foto é registro, e nenhuma logo se acrescenta.
- **s06, s39, s43, s45 e s51** (`pesquisa-documentos`, `editor-de-arte`). A folha vai recriada, sem o selo do condado e sem
  a logo da Caltrans, como o espelho já diz.
- **s53, o Timber Fire** (`redator-de-tela`, `verificador-de-fatos`). A página do CAL FIRE diz "Not a CAL FIRE Incident" e
  dá a jurisdição à Los Padres National Forest. O crédito "· CAL FIRE" nomeia quem publicou os números: confiram que a tela
  não leia como se o fogo fosse do CAL FIRE.

## NÃO MEDIDO / não se aplica

O `_svg-para-png`, o `qc-procedencia`, o gate de 40 MP e o `conferente-de-midia` não se aplicam: esta peça não entregou
nenhum arquivo.
