# MARCA ALPHA POINT — superfícies

> Como o canal se comporta em cada lugar onde aparece. Hoje são três: o vídeo longo, a miniatura e a página do canal
> no YouTube. As outras estão declaradas como inexistentes no fim, sem regra inventada. Em dia com a marca de 24/10/2026.
> As fontes citadas (`marca/…`, `out/…`, `canal.json`) são procedência no repositório do canal, não arquivos seus.

## 1 · Vídeo longo (a única superfície de vídeo do canal)

| Item | Valor | Fonte |
|---|---|---|
| Palco e entrega | 3840×2160, 30 fps | `CLAUDE.md` (master do Juneau); `out/zona-do-canal/linha.md` (XML 3840×2160 a 30 fps) |
| Duração | 11 a 14 min: 12:32 (Los Angeles), 13:47 (Zona do Canal), com a cauda | `out/los-angeles/linha.md` (752,57 s); `out/zona-do-canal/linha.md` (827,47 s) |
| Tamanho do roteiro | alvo de ~2.000 palavras de fala | `out/los-angeles/_pesquisa/teste-voz-v4.md` |
| Cauda muda | **20 s** sem voz depois da última frase, para a tela final do YouTube | `canal.json` › `narracao.cauda_tela_final_s` (Lucas, 26/09/2026) |
| Capítulos | **nunca na tela**; só na descrição | Lucas, 26/09/2026 (`marca/agentes/designer-de-navegacao.md` §1) |
| Cobertura | 100 % do tempo coberto por cena, inclusive a cauda | `marca/identidade.md` §5 («Faceless») |

**O primeiro instante.** Nos primeiros 15 s, uma contradição concreta e a pergunta que ela abre (`voz.md`). Do vídeo 5
em diante, **o gancho que prende** (Lucas, 24/10/2026; `identidade.md`, «A abertura e o mapa»): abre nos 2–3 s da imagem
real mais forte do lugar, em movimento, e o mapa vem depois, entrando em voo até o lugar, com a região falada demarcada e
os números animados; até a vinheta, uma troca visual a cada 3–6 s, nenhuma cena acima de ~8 s, sem fusão, três
linguagens e duas imagens reais do lugar; a primeira frase é o fato mais surpreendente sobre esse lugar. A pergunta do
gancho entra na tela (23/10/2026). A vinheta da marca corre sobre a assinatura do gancho, e a marca d'água fica dali ao
fim (`identidade.md`).

**Densidade máxima.** 6 elementos simultâneos (alvo 4–5), até 3 blocos de texto de leitura, um herói ou nenhum.

**As chamadas (CTA)** (`marca/cta.md` §3–§6; Lucas, 01/10/2026):
- no máximo duas por vídeo: **inscrição** uma vez, entre 35 % e 60 % da duração, nunca no 1º minuto (4,5 s);
  **comentário** uma vez, depois do último fato, terminando ≥ 1 s antes da cauda; nunca as duas no mesmo minuto;
- vídeo com menos de 5 min: só o comentário;
- sem trecho calmo antes da cauda, o comentário vai na tela final, à esquerda (07/10/2026);
- padrão embaixo à direita; `?lugar=cima` quando o canto de baixo está ocupado; nunca empurrada para caber;
- entram por cima das cenas, com a marca d'água: no jeito de hoje, pelo XML (09/10/2026; `ferramentas/xml-chamadas.py`);
  no motor, pelo master, com as peças que a ferramenta do pacote grava (`pecas/pecas-da-obra.mjs`) a partir das linhas
  `_chamadas` do regente.

**A tela final** (`marca/identidade.md` §5; proposta que vale até o Lucas decidir de novo por vídeo): o último quadro
parado, brilho de 100 % a 50 % em 20 s, linear, nunca preto; câmera se aproximando devagar; composição na metade
esquerda; metade direita e canto 400 × 400 livres para os elementos do YouTube; sem texto novo. Crédito legível até o fim.

**Nunca aparece no vídeo:** card de capítulo, título de tópico ou sumário; apresentador ou pessoa gerada por IA;
bandeira ao lado de nome de país; logo de instituição (só o nome escrito); contagem regressiva; emoji; nada no canto
inferior direito de 400 × 400 px.

**Trilha.** Epidemic Sound, plano Creator do Lucas, numa faixa própria, baixa sob a narração; no jeito de hoje, a −35 dB
no XML (`out/zona-do-canal/_creditos-trilha.md`). No motor, **automática, pelo roteiro** (Lucas, 24/10/2026, à pergunta
«No piloto (vídeo 5), como sai a trilha?»): o agente da trilha lê o texto e declara o clima de cada trecho, a escolha é
o ranking dos metadados da Epidemic contra esse clima e a paleta do canal (`musica/paleta.json` do pacote), e o motor
baixa da conta do Lucas, sem lista; o nível vem do `canal-motor.json` › `master.trilha`. A trilha nunca passa por
ferramenta de IA nem de reconhecimento de música: nenhum modelo a escuta. O crédito vai na descrição, `<Artista> /
<Música> / courtesy of Epidemic Sound`, com o link de www.epidemicsound.com. Sem efeitos sonoros (Lucas, 17/10/2026;
`roteiros/peru-agua/decisoes-lucas.md`).

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
- **O título não entrega a resposta: a curiosidade vale mais que a busca** (Lucas, 22/10/2026: «Essa regra deveria ser
  geral para o canal, com exceções, claro»). O título nomeia o que o espectador já conhece (o mar, o país, a região) e
  guarda o que o vídeo revela (o lugar exato, a causa, o nome): «The Deepest Point in the Atlantic Ocean» não diz
  «Puerto Rico Trench». A miniatura aponta a virada sem dar a resposta e não repete o título. O mistério é do título, não
  do vídeo: a resposta pode vir no gancho. As exceções (da Sala; o Lucas pode mudá-las): o nome escondido é o que faz
  clicar; esconder deixaria o título vago ou enganoso; o nome ou a data são exigidos pelas regras acima. Na dúvida,
  decide o teste de leitores.

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
