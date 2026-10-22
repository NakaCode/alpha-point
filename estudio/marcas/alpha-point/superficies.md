# MARCA ALPHA POINT — superfícies

> Como o canal se comporta em cada lugar onde aparece. Hoje são três: o vídeo longo, a miniatura e a página do canal
> no YouTube. As outras estão declaradas como inexistentes no fim, sem regra inventada.

## 1 · Vídeo longo (a única superfície de vídeo do canal)

| Item | Valor | Fonte |
|---|---|---|
| Palco e entrega | 3840×2160, 30 fps | `CLAUDE.md` (master do Juneau); `out/zona-do-canal/linha.md` (XML 3840×2160 a 30 fps) |
| Duração | 11 a 14 min: 12:32 (Los Angeles), 13:47 (Zona do Canal), com a cauda | `out/los-angeles/linha.md` (752,57 s); `out/zona-do-canal/linha.md` (827,47 s) |
| Tamanho do roteiro | alvo de ~2.000 palavras de fala | `out/los-angeles/_pesquisa/teste-voz-v4.md` |
| Cauda muda | **20 s** sem voz depois da última frase, para a tela final do YouTube | `canal.json` › `narracao.cauda_tela_final_s` (Lucas, 26/09/2026) |
| Capítulos | **nunca na tela**; só na descrição | Lucas, 26/09/2026 (`marca/agentes/designer-de-navegacao.md` §1) |
| Cobertura | 100 % do tempo coberto por cena, inclusive a cauda | `marca/identidade.md` §5 («Faceless») |

**O primeiro instante.** Nos primeiros 15 s, uma contradição concreta e a pergunta que ela abre (`voz.md`). A abertura
mostra o lugar de cima: aéreo ou mapa abrangente (Lucas, 02/10/2026). A vinheta da marca corre sobre a assinatura do
gancho, e a marca d'água fica dali ao fim (`identidade.md`).

**Densidade máxima.** 6 elementos simultâneos (alvo 4–5), até 3 blocos de texto de leitura, um herói ou nenhum.

**As chamadas (CTA)** (`marca/cta.md` §3–§6; Lucas, 01/10/2026):
- no máximo duas por vídeo: **inscrição** uma vez, entre 35 % e 60 % da duração, nunca no 1º minuto (4,5 s);
  **comentário** uma vez, depois do último fato, terminando ≥ 1 s antes da cauda; nunca as duas no mesmo minuto;
- vídeo com menos de 5 min: só o comentário;
- sem trecho calmo antes da cauda, o comentário vai na tela final, à esquerda (07/10/2026);
- padrão embaixo à direita; `?lugar=cima` quando o canto de baixo está ocupado; nunca empurrada para caber;
- entram no XML, numa faixa acima das cenas, com a marca d'água (09/10/2026; `ferramentas/xml-chamadas.py`).

**A tela final** (`marca/identidade.md` §5; proposta que vale até o Lucas decidir de novo por vídeo): o último quadro
parado, brilho de 100 % a 50 % em 20 s, linear, nunca preto; câmera se aproximando devagar; composição na metade
esquerda; metade direita e canto 400 × 400 livres para os elementos do YouTube; sem texto novo. Crédito legível até o fim.

**Nunca aparece no vídeo:** card de capítulo, título de tópico ou sumário; apresentador ou pessoa gerada por IA;
bandeira ao lado de nome de país; logo de instituição (só o nome escrito); contagem regressiva; emoji; nada no canto
inferior direito de 400 × 400 px.

**Trilha.** Epidemic Sound, plano Creator do Lucas, numa faixa própria; hoje a música vai a −35 dB no XML
(`out/zona-do-canal/_creditos-trilha.md`). A trilha nunca passa por ferramenta de IA nem de reconhecimento de música.
Sem efeitos sonoros (Lucas, 17/10/2026; `roteiros/peru-agua/decisoes-lucas.md`).

## 2 · Miniatura (`marca/embalagem.md` §1.1 e §3)

- **Palco** 2560×1440; envio 1280×720. Canto inferior direito (~320 × 320 no palco) livre: é onde o YouTube põe a duração.
- **O ângulo, desde 16/10/2026** (Lucas: «Por hora tema e miniatura»): o mapa é o protagonista. Fundo de satélite ou
  relevo; território pintado em cor forte, contorno claro; texto de 2 a 4 palavras numa caixa escura, com uma palavra
  colorida; setas curvas brancas; às vezes um círculo que amplia o ponto.
- **As receitas** (valores no palco): **pílula** — anel 224 px, traço 38 px, `--destaque`; pílula-herói Barlow
  Condensed 800, 300 px, CAIXA ALTA, fundo `--rotulo`, cantos 24 px; seta `--tinta` 34 px. **Lupa** — texto solto 300 px
  (virada em `--destaque`), lupa 640 px com borda 20 px `--destaque`, cone pelas tangentes calculadas.
- **Foge do vídeo, de propósito:** base mais clara (o feed do YouTube é escuro), anel e herói maiores.
- **Não foge:** papéis de cor (`--destaque` só no protagonista e no anel), nada de vermelho × azul, sem emoji,
  geografia conferida, regra de mídia de `marca/midia.md`. Bandeira na Zona foi exceção só da miniatura do vídeo 3
  (16/10/2026).
- **Conferência:** render em 1280×720, 320×180 e 168×94, e banca de quatro lentes antes de ir ao Lucas.
- **Título** (embalagem §1–§2): 35 a 65 caracteres, um lugar que se conhece e um paradoxo que se entende em 2 s; o
  núcleo se paga nas 3 primeiras frases da fala; data absoluta quando o fato é histórico; passa por cético, refutador e
  três leitores a frio; o Lucas escolhe.

## 3 · Página do canal no YouTube (`marca/logo/agulha/README.md`)

Avatar 800 × 800; banner 2560 × 1440 (área segura 1544 × 423); marca d'água do Studio 300 × 300, fundo transparente;
a aba «Sobre» em `marca/descricao-canal.md` (09/10/2026), sem e-mail e sem frequência de publicação, por decisão do Lucas.

## 4 · Superfícies que o canal NÃO tem

| Superfície | Estado | Fonte |
|---|---|---|
| Vertical (Shorts, Reels, TikTok) | não existe; nenhuma regra decidida | `canal.json` (`pipeline: long-form`); nenhuma decisão do Lucas no repositório |
| Post estático (Comunidade, redes) | não existe; o canal não tem redes ligadas | descrições publicadas sem bloco de redes |
| Site | não existe | — |
| Versões dubladas | não existem (`idiomas.localizados` vazio) | `canal.json` |

Abrir qualquer uma delas é decisão do Lucas, e a seção se escreve nesse dia, a partir da identidade.
