# O que a Sala conferiu no vídeo 4 (atlantico-fundo)

São os itens que o setor Texto e fatos deixou para a Sala (`textos-tela.json` › `_espera_a_sala` e `_nao_conferido`;
`out/atlantico-fundo/_tmp/setores/atlantico-fundo-texto-1.md`, "Os NÃO CONFERIDOS"). A conferência foi pelo navegador do app, sem o
Lucas acompanhando (decisão dele de 27/09/2026), uma página por item, sem baixar arquivo.

## 29/10/2026, 07:0x (Brasília)

### s21: a vírgula de "Washington, D. C." (TA092) — CONFERIDO: é vírgula

- **A página:** The Sun (Newberry, S.C.), 28/07/1939, imagem 3, no Historical Newspapers of South Carolina:
  https://historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/
- **Como se achou a linha:**
  - as coordenadas de palavra do próprio site (`…/seq-3/coordinates/`, 4× a imagem de 5292 × 6274 px) dão "Prepared" em (1544, 3924)
    e "Washington" em (1764, 4012);
  - na imagem, isso é a linha que começa em (441, 1003) px.
- **O recorte, pelo endpoint de impressão do site:**
  https://historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/print/image_1080x148_from_430,995_to_700,1032/
  O site devolve o recorte em 270 × 37 px. A Sala o viu ampliado na página, e não baixou arquivo.
- **O que a imagem mostra:** "Washington, D. C.", com vírgula depois de "Washington". O sinal desce abaixo da linha de base, como vírgula.
  O OCR lê ponto ("Washington. D. C."), e errou.
- **O efeito:** vale a forma com vírgula, que é a do `textos-tela.json` e a da cena (`graphics/s21.html`, a assinatura da folha). A
  `_condicao` ("se a imagem da página tiver ponto…") não se aplica, e nada muda na cena.
- **O "· P. 3" não foi lido.** O cabeçalho continua sem ele (TA090), porque não vale a volta de uma troca na s21 e na s56.

### s41 (na s39): o registro da UPR da foto do El Mundo — NÃO CONFERIDO: o site não respondeu

- **A página:** http://bibliotecadigital.uprrp.edu/cdm/singleitem/collection/fotoselmund/id/2159/rec/31
- **O que aconteceu:** "ERR_CONNECTION_TIMED_OUT" no navegador do app, por http e por https, uma tentativa de cada. É o servidor que não
  respondeu: não houve recusa de robô nem verificação. Não houve outra tentativa.
- **O que segura o texto de tela de hoje:**
  - o lugar ("Mayagüez, Puerto Rico") e o ano (1918) vêm da descrição do arquivo no Wikimedia Commons ("Correo y Casino de Mayagüez
    luego del terremoto de 1918.jpg"), que cita a coleção de fotos do El Mundo da UPR;
  - o uso e o crédito "El Mundo / Universidad de Puerto Rico" são decisão do Lucas (29/10/2026, 01:1x: "Usar, com crédito
    (Recomendado)").
- **O que falta:** ler o registro na origem quando o site voltar, antes de publicar. Não segura a arte.
