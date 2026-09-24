# Embalagem do vídeo de Juneau: título e miniatura

- **Quem escolheu:** Lucas Rosa, dono do canal, em 24/09/2026.
- **Título:** `Alaska Voted for a New Capital in 1974. It Was Never Built.` (59 caracteres)
- **Miniatura:** `RIGHT HERE?`. Satélite do vale ao norte de Anchorage; o anel da marca no local escolhido em 1976
  para a capital nova; seta branca da pílula até o anel; `Anchorage` como único nome no mapa.
  - fonte: `miniatura/miniatura.html` (palco de 2560×1440);
  - arquivo de envio: `midia/juneau/embalagem/miniatura-final-1280.jpg` (1280×720, 354 KB, só nesta máquina; é a v5).
- **O título do roteiro** (`Alaska Voted to Move Its Capital. Why Is It Still in Juneau?`) segue como título de
  trabalho dentro de `roteiro-narrador.md`. O título publicado é o de cima.

## Por que este

O dono achou o título de trabalho fraco e pediu "algo mais como as referências". O caminho:

1. **Os moldes das referências**, medidos na página de cada canal em 24/09/2026: últimos 30 vídeos, com views.
   Estão em `marca/embalagem.md`. O título escolhido segue o molde "fato. virada." do Geography Effect
   (*"Saudi Arabia Planned to Spend $500 Billion on NEOM. It's Already Failing."*, 239 mil). A miniatura segue
   a receita deles: mapa, ponto, seta curva e 1 a 3 palavras que não repetem o título (*"WHY HERE?"*, *"NO ROADS?"*).
2. **Três redatores**, um por molde (dois tempos, "Why…" e pergunta curta), escreveram 18 pares. Um júri de
   quatro lentes deu nota a cada par: clique, promessa e marca, busca e clareza, e estilo das referências.
   O título de trabalho ficou em 13º de 19.
3. **Prova dos 5 finalistas**: um refutador de fatos por finalista e três leitores americanos a frio.
   - A versão testada dizia "Picked a New Capital in 1976" e foi a preferida dos três leitores (8, 7 e 8).
   - O refutador achou dois problemas nela: o vídeo abre em 1974, e em 1976 se escolheu um local, não uma
     capital.
   - A troca para "Voted for a New Capital in 1974" faz a primeira frase do roteiro pagar o título.
     "New capital" é o nome oficial da medida de 1974: *Relocating and Constructing A New Capital*
     (dossiê, `doc-10.1` e `mec-08.1`).
4. **Banca da miniatura**, com quatro lentes (tamanho pequeno, geografia, marca e leitura a frio) e depois uma
   reconferência. A geografia foi conferida contra a base e o `.geo.json`. A v2 saiu escura e com a seta curta;
   a v4 corrigiu os dois (luminância média de 60 para 86 de 255), e a reconferência aprovou com nota 8 nas duas lentes. A v5 só aumentou o rótulo "Anchorage" e encostou a seta na pílula.

Os laudos ficam só nesta máquina, em `midia/juneau/embalagem/`:
- `titulos-r2-referencias.json`: redatores, júri e síntese;
- `prova-finalistas.json`;
- `banca-miniatura-v2.json`;
- `referencias-titulos-2026-09-24.json`.

## O que ficou de fora, e por quê

| Candidato | Motivo |
|---|---|
| "Why Can't You Drive to Alaska's Capital?" e os outros de estrada | o molde "no road / no bridge" rende nas referências, mas o vídeo só explica a estrada perto do minuto 8 |
| "Alaska Said Yes to Moving Its Capital, but Never to the Price" (reserva) | bom e fiel ao fecho; na versão "a New Capital", um leitor leu "capital" como dinheiro |
| "How Did Alaska's Capital Survive a Vote to Move It?" | "survive a vote" em inglês sugere que a votação fracassou |
| "The $2.8 Billion Plan…" | trata uma estimativa contestada como custo e entrega o final |
| "The Real Reason…" | afirma uma causa única, e o vídeo diz que o porquê é disputado |

## Riscos que continuam

- O leitor pode imaginar uma "cidade fantasma". O vídeo mostra que o local foi escolhido e nunca recebeu
  dinheiro aprovado; não há ruína. A miniatura não mostra construção.
- O único nome no mapa é Anchorage, que não é a capital. Um leitor pode achar que a capital era Anchorage. O
  vídeo desfaz isso na primeira frase.
- Nenhuma nota foi medida em ferramenta (sem vidIQ). Se o YouTube deixar testar título ou miniatura, a reserva
  é a candidata natural ao teste.
