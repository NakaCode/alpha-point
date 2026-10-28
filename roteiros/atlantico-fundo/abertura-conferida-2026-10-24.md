# Vídeo 5 · A abertura, conferida (24/10/2026, 20h)

O Lucas escolheu "Conferir a abertura (Recomendado)" entre o que adiantar com a cota da semana. Fecha os itens 5 e 8 da
pauta (`pautas/2026-10-24-video-5.md` §9).

## A foto da Estação Espacial

- **A página:** "Puerto Rico From Above", da NASA (`https://science.nasa.gov/earth/earth-observatory/puerto-rico-from-above/`),
  lida por script, com o User-Agent do canal. O `robots.txt` do `assets.science.nasa.gov` responde 404: não há veto.
- **O arquivo grande:** `iss071e001036_lrg.jpg`, com **6902 × 4601 px** e 19,3 MB, medido pelo cabeçalho do JPEG com um
  pedido parcial. Passa do 4K com folga (1,8 vez a largura do quadro), e o empurrão lento cabe. O arquivo inteiro não foi
  baixado.
- **O enquadramento** (visto numa prévia de 1280 × 853, só para conferir):
  - é a costa norte de Porto Rico em San Juan: a baía, o aeroporto e a lagoa, com o norte para cima;
    - **Corrigido em 28/10/2026:** essa é a descrição da 1042. A 1036 mostra Porto Rico inteiro, com Vieques e Culebra a leste e a Mona a
      sudoeste (a Sala, pela folha do conferente, `out/atlantico-fundo/_tmp/conferencia/lote2/s01-folha.jpg`, feita dos arquivos inteiros);
  - o Atlântico ocupa o terço de cima, com nuvens;
  - **a fossa não está no quadro.** O ponto mais fundo fica a uns 116 mi de San Juan, ao norte, e a 83 mi da costa mais perto
    (Aguadilla);
  - para a abertura, o empurrão pode subir em direção ao mar, e o mapa continua dali para o norte, até a fossa.
- **A outra foto da página:** a `iss071e001042`, do mesmo trecho da costa, tem 8256 × 5504 px. A versão pequena dela traz os
  nomes dos lugares impressos na imagem. Como não serve limpa, fica de reserva, a conferir.
- **A licença** continua a do cético (`pautas/2026-10-24-video-5-checagem.md`, cético §4): NASA, com o crédito "Image courtesy
  of the Earth Science and Remote Sensing Unit, NASA Johnson Space Center".

## O fundo do mar no MapTiler

- **Um pedido de tile**, no zoom 6, no quadrado de Porto Rico e da fossa, ao `terrain-rgb-v2`. A chave saiu do arquivo da
  máquina pelo leitor da pré-v1 e não foi impressa. O teste está dentro da liberação do MapTiler para o vídeo 5 (Lucas,
  24/10/2026: "Sim, como no Peru (Recomendado)").
- **O resultado:**
  - **o relevo da MapTiler não tem o fundo do mar.** O ponto mais fundo e o mar aberto ao norte dão 0 m, e o tile inteiro vai de
    −2 a 1.292 m;
  - em terra, ele tem o relevo: o Cerro de Punta dá 1.019 m nessa resolução, e El Yunque, 862 m.
- **O que isso quer dizer:** o mapa que mergulha até a fossa usa a batimetria da GEBCO, como a pauta previa. A GEBCO é domínio
  público, e a fonte vai na tela. O MapTiler fica para a costa, a superfície e o relevo de terra.
