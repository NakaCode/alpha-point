# Pauta de logos — peru-agua (vídeo 4)

Tarefa `peru-agua-pesquisa-1`, passo `research`, 22/10/2026. O JSON: `out/peru-agua/_pesquisa/pauta-logos.json`
(contrato `pauta-pesquisa`, saída 0). Espelho lido: sha256 `a249aa6b…5f27`, 53 cenas.

## Resumo

Nenhuma cena pede logo, selo, brasão, emblema nem bandeira como elemento gráfico. Nenhuma cena tem `needs.logos`.
Também não há PRANCHA (relato da Direção 1: "Desenho, todo em ANIMAÇÃO, sem PRANCHA"). As instituições aparecem só
como crédito ou nome escrito, nas `_grafias`, e a regra do canal para elas é o nome escrito (`marca/midia.md` §7.6;
roupa §4). **Nada foi buscado nem entregue em `out/peru-agua/_media/logo/`.** Por isso `itens` está vazio.

## Nomes escritos: o nome oficial, cena a cena

Todos vão em Inter 700 na pílula `--rotulo`, sem logo nem selo. Nos órgãos peruanos, vale também a decisão do
Lucas de 21/10/2026 (`fontes-peruanas-licencas.md`): imagem deles fica fora, nem por cópia no Commons.

| Na tela | Nome oficial | Cenas |
|---|---|---|
| ANA | Autoridad Nacional del Agua (Peru) | s02, s08, s10, s12, s20 |
| SENAMHI | Servicio Nacional de Meteorología e Hidrología del Perú | s03, s13, s17, s18, s41 |
| INEI | Instituto Nacional de Estadística e Informática | s03, s31, s32, s33, s34, s36 |
| SEDAPAL | Servicio de Agua Potable y Alcantarillado de Lima | s04, s38, s39, s42, s47, s50 |
| MINAM | Ministerio del Ambiente | s21 |
| DEFENSORÍA DEL PUEBLO (PERU'S OMBUDSMAN) | Defensoría del Pueblo | s38, s41, s50 |
| SUNASS | Superintendencia Nacional de Servicios de Saneamiento | s44 |
| PERU'S TRUTH AND RECONCILIATION COMMISSION (CVR) | Comisión de la Verdad y Reconciliación | s33, s36 |
| UNESCO | UNESCO World Heritage Centre | s22, s24, s29 |
| HARVARD GROWTH LAB | Growth Lab, Harvard Kennedy School | s09 |
| JICA, 2002 | Japan International Cooperation Agency | s40 |
| WMO/SENAMHI | World Meteorological Organization | s18 |
| AFP | Agence France-Presse | s46, s47 |
| INFOBAE | Infobae | s42 |
| GESTIÓN | Gestión (diário de Lima) | s44 |
| KULTURAUSTAUSCH (ifa) | revista do Institut für Auslandsbeziehungen | s48, s49 |
| NASA / NOAA | crédito da imagem (pesquisa-imagens), não logo | s13, s16 |

A linha sugerida ao `redator-de-tela` (roupa §5), a única que falta: `SUNASS — Peru's water and sanitation regulator`.
A voz diz "Peru's water regulator". Defensoría e CVR já levam a explicação na própria grafia.

## Países e bandeiras

- O Peru aparece em s01 e s52, com o nome escrito sobre o aéreo. O Chile aparece em s21, como rótulo no mapa. A
  Espanha aparece em s26 ("Spanish conquistador", no card). Nenhuma dessas cenas leva bandeira, pela identidade §6
  ("País no mapa") e pela roupa §2. Os vizinhos (Bolívia, Equador, Colômbia e Brasil) não estão nas grafias.
- As bandeiras de `assets/flags/` foram medidas com o `ffprobe`. Nenhuma é pedida. Todas são pequenas para o círculo
  de 640 px:

| Arquivo | Medida |
|---|---|
| pe.png | 320×213 (a bandeira civil, sem escudo; olhada) |
| bo.png | 320×218 |
| ec.png | 320×213 |
| co.png | 320×213 |
| cl.png | 160×107 |
| br.png | 160×112 |

## Selos e insígnias

Nenhum foi buscado. Segundo uma busca na web, o escudo nacional do Peru é regulado pela Constituição de 1993
(art. 49), pelo Decreto Ley 11323, de 1950, e pela Ley 32251. **Não lido na origem**: nenhuma cena pede o escudo.
