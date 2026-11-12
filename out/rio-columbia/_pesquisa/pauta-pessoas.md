# Pauta de pessoas: vídeo 7 (`rio-columbia`), passo `research`

Feita pelo `pesquisa-pessoas` em 12/11/2026, em duas rodadas, às 11:2x e às 12:4x de Brasília. Os dados estão em
`pauta-pessoas.json`, aqui ao lado. Na 2ª rodada, o contrato `pauta-pesquisa` saiu 0 e o `qc-procedencia rio-columbia` deu PASS.

## O pedido

Só uma cena do espelho r2 (`out/rio-columbia/espelho.json`, sha256 `28f6121b…`) pede retrato:

| Cena | Pessoa | O que a cena pede | Sem retrato |
|---|---|---|---|
| s45 P2 (567,500–577,667 s) | Adrian Dix | o card (nome, cargo e data) e a fala num cartão de papel ao lado | nome e cargo |

Trump fica fora (K8). Em s26 P2, o encontro de 1964 é foto de evento, sem card de pessoa: é do `pesquisa-imagens`.

## O resultado (2ª rodada)

| Pessoa | Ano do fato | Retrato | Licença e crédito | Aviso |
|---|---|---|---|---|
| Adrian Dix | 2025 (a sessão de 25/03/2025) | `_media/pessoa/s45/adrian-dix-2020-aeger-eger-commons-recorte.png`, 950 × 950 (medido por ffprobe), recortado de uma foto de 2020 no Wikimedia Commons | CC BY-SA 4.0, lida na página do arquivo; `Aeger eger / Wikimedia Commons · CC BY-SA 4.0` | `Photo from 2020` |

- **A origem:** `File:2019-nCoV Press Conf - 3.1.jpg`, obra própria de Aeger eger, 4856 × 3238.
  - A legenda: "British Columbia's Public Health Officer, Dr. Bonnie Henry, with B.C.'s Minister of Health, Adrian Dix, announcing
    B.C.'s first positive COVID-19 case at the B.C. Centre for Disease Control on Tuesday, 28th January 2020."
  - O campo de data e o EXIF dizem 28/02/2020. O dia diverge, mas o ano é 2020 nos três.
- **Identidade:** a legenda diz quem é quem, e o recorte é o homem à direita. Ele bate com o retrato de 2024, de outro autor. Olhei
  o recorte, e o rosto está inteiro.
- **O recorte:** x 3110–4060 e y 895–1845 do original, sem outro tratamento.
  - O recorte testado na 1ª rodada (1000 × 1000 em x 3060, y 930) levava uma câmera desfocada da imprensa no canto. Esta janela
    para antes dela.
  - Vai ao quadro de 932 × 932 a 0,981 vez: enche sem ampliar.
  - O rosto está um pouco mole, porque o foco da foto é a Dra. Henry.
- **sha256:** o entregue é `b8c8de74fbea18522450db26fffcd991b36eefdd626a0a428ebbd3d805eb73d0`, e o original baixado,
  `914af8e7d5b336cc055feb5c38767e422dd73d0c0c5ebec7c293832dc872ddb5`.
- **A licença na descrição do vídeo:** a CC BY-SA 4.0 pede o link e que se diga que houve mudança. A proposta é "Adrian Dix photo:
  Aeger eger / Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), cropped".
- **O conferente** julga a reserva no lote seguinte. A cena só cita o arquivo com o `aprovado` que case pelo sha256.

### Para o card (a forma final é do `redator-de-tela`)

- **Nome:** `ADRIAN DIX`.
- **Cargo:** `Minister of Energy and Climate Solutions`, da Colúmbia Britânica.
  - O boletim do BC News de 11/03/2025 dá o cargo completo: "Minister of Energy and Climate Solutions, and Minister responsible
    for the Columbia River Treaty".
  - Ele está no cargo desde novembro de 2024, pela biografia do ministério.
  - A foto é de quando ele era ministro da Saúde. O aviso `Photo from 2020` diz isso, e o cargo do card é o de 2025.
- **Data:** 25 de março de 2025, a sessão virtual do governo da BC, das 18h às 19h do Pacífico. O espelho propõe `MAR. 25, 2025`.
- **A fala:** "Canadian action to terminate the treaty would have little effect on the current dispute".
  - São 14 palavras, iguais ao trecho que a Canadian Press põe entre aspas.
  - A OPB dá a frase inteira.
  - O corte para 12 palavras é do redator e passa pelo verificador.

## O que saiu (1ª rodada)

- **O arquivo:** o retrato de 2024 do BC NDP (Commons, CC BY 2.0, sha256 `b048666c…`) foi para
  `_media/_caca/_retirado/pessoa/adrian-dix-bcndp-2024-commons.jpg`. Foi movido, não apagado, e o sha256 foi medido antes e depois.
- **O veredito:** `trocar` (`conferencia-midia.json`, `candidatos[13]`). O crédito que a licença exige é "BC NDP", o partido, junto
  do ministro citado pelo cargo, e a origem é peça de campanha.
- **O registro:** a retirada está em `retirados` desta pauta e do `_PROCEDENCIA.json` de s45.

## O retrato oficial do governo da BC: fora, por decisão da Sala

- A imagem está em `https://www2.gov.bc.ca/assets/download/50E3C4D080C246E099FB94A02FC38D99`, na biografia do ministério.
- A página não dá data, e a licença (`https://www2.gov.bc.ca/gov/admin/copyright.page`) não se leu: o servidor fechou a conexão do
  script.
- A Sala mandou não tentar, na 2ª rodada.
