// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-pais-bandeira.mjs (linhas 1-267, commit 4afda12).
// O que mudou: o Chrome vem de lib/chrome.mjs; o TETO de tamanho deixou de ser o 180px do Top10 e
// passa a sair da marca (1,3 × --fs-rotulo, que na marca neutra dá 182) e o PISO é o maior entre o
// ofício (104) e o --piso-rotulo da marca; ganhou o terceiro estado que não tinha — Chrome que não
// sobe, página que não abre ou __renderAt morto saíam 0 ("nada a cobrar") e agora saem 2.
// A lista de países é PT-BR (canal em outra língua: nome fora da lista não é cobrado — pendência).
// Na integração da v1: o palco 4K vem da régua do render do motor; o SEM BANDEIRA diz onde a bandeira mora (assets/flags/<iso2>.png).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// GATE DE NOME DE PAÍS — bandeira ao lado, e tamanho de RÓTULO (não de herói).
// Uso: node scripts/qc-pais-bandeira.mjs <html> [<html> …] [--teto=180] [--piso=104] [--json]
//
// POR QUE ELE EXISTE (feedback do Mateus, 24/jul, sobre o `compilado-previsoes-jiang`):
//   "o nome dos países também ficaram sem as bandeiras, e eu quero que os nomes dos países
//    SEMPRE tenham as bandeiras ao lado acompanhando"
//   "elas ficaram meio grandes também os nomes dos países, pode diminuir"
//
// A REGRA DA BANDEIRA JÁ EXISTIA — e foi cumprida em 0 de 74 cenas. Ela estava escrita em três
// lugares de `knowledge/MIDIA-REAL.md` (§0 pilar 3, "regra de mistura" e §5b) e mesmo assim
// nenhuma cena a cumpriu, porque: (a) o `ROUPA-CENA.md` só mandava ler o MIDIA-REAL quando a cena
// era `midia:"footage"/"foto"/"drone"` — cena de desenho, dados ou mapa nunca chegava lá;
// (b) o ofício do editor-de-arte dava como exemplo de bom gosto exatamente o contrário ("Não
// desenhe duas bandeiras"); (c) não era lei numerada; e (d) NINGUÉM MEDIA. Regra sem gate é regra
// morta — este é o gate. (ARTE-57.)
//
// O TAMANHO. Nome de país é RÓTULO, não herói: ele diz ONDE, não O QUÊ. Quem carrega a cena é o
// dado/a tese. Medido nas 74 cenas: 63 rótulos de país, mediana 112px, mas a cauda ia a 268
// (CHINA), 270 (TAIWAN), 286, 300 (IRÃ, declarado `data-qc-papel="heroi"` — e aí o gate de
// tamanho passou a EXIGIR ≥260px dele). Teto 180px = acima da mediana e do p75 (150), abaixo de
// toda a cauda que o Mateus reclamou. Piso 104px = o piso de rótulo do canal (REND-15).
//
// COMO ELE ACHA A BANDEIRA. Qualquer um destes, visível e adjacente ao texto: <img>/<image> com
// `flag`/`bandeir`/`flagcdn` no src; elemento com classe/id `flag`/`bandeira`; <svg> marcado
// `data-bandeira`. Adjacente = centro vertical alinhado (tolerância = a altura do maior dos dois)
// e horizontalmente encostado (até 1,2× a largura do texto de distância). É de propósito que
// aceite bandeira à esquerda OU à direita: o Mateus pediu "ao lado", não um lado específico.
//
// ⚠️ Ele NÃO cobra bandeira de continente, oceano, cidade, região ou bloco sem bandeira própria —
// a lista é de PAÍS (+ UE/OTAN, que têm bandeira oficial). Falso-positivo é bug de prioridade
// alta: na dúvida, o nome fica fora da lista.
import { pathToFileURL } from "node:url";
import { resolve, basename } from "node:path";
import { readFileSync } from "node:fs";
import { expandirAlvos } from "./lib/expandir-alvos.mjs";
import { SELETOR_TEXTO } from "./lib/tags-texto.mjs";
import { lancarChrome } from "./lib/chrome.mjs";
import { morrerComoNaoMedido, NAO_MEDIDO } from "./lib/nao-medido.mjs";
import { lerMarca } from "./lib/marca-tokens.mjs";
import { palcoDaCena } from "./lib/abrir-cena.mjs";

// [porte Régie] O estúdio não tinha esta rede: Chrome que não subia saía 1 — "medi e reprovei".
morrerComoNaoMedido("qc-pais-bandeira");

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(`--${n}`);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
// expandirAlvos: pasta vira a lista de .html. Sem isto, `qc-pais-bandeira out/<proj>/graphics`
// media o índice de arquivos do Chrome — onde não há nome de país nenhum — e saía **0**
// ("nada a cobrar") tendo aprovado o projeto inteiro sem abrir uma cena.
const arquivos = expandirAlvos(argv.filter((a) => !a.startsWith("--")), "qc-pais-bandeira");
if (!arquivos.length) { console.error("uso: qc-pais-bandeira.mjs <html> [<html> …] [--teto=180] [--piso=104] [--json]"); process.exit(2); }

const PASSO = parseFloat(opt("passo", "0.2"));
const OP = parseFloat(opt("op", "0.35"));
const JSON_OUT = flag("json");
const SO_BANDEIRA = flag("so-bandeira");
const SO_TAMANHO = flag("so-tamanho");

// Nomes como aparecem NA TELA (PT-BR, caixa alta ou não — a comparação normaliza).
// Só entidade com bandeira oficial. Sem continente, sem região, sem cidade.
const PAISES = ["AFEGANISTÃO","ÁFRICA DO SUL","ALEMANHA","ANGOLA","ARÁBIA SAUDITA","ARGENTINA","ARGÉLIA","AUSTRÁLIA","ÁUSTRIA","AZERBAIJÃO","BAHREIN","BANGLADESH","BÉLGICA","BOLÍVIA","BRASIL","BULGÁRIA","CANADÁ","CATAR","CAZAQUISTÃO","CHILE","CHINA","CINGAPURA","COLÔMBIA","COREIA DO NORTE","COREIA DO SUL","COREIA","CROÁCIA","CUBA","DINAMARCA","EGITO","EMIRADOS ÁRABES","EMIRADOS ÁRABES UNIDOS","EMIRADOS","EQUADOR","ESLOVÁQUIA","ESLOVÊNIA","ESPANHA","ESTADOS UNIDOS","ESTÔNIA","ETIÓPIA","FILIPINAS","FINLÂNDIA","FRANÇA","GEÓRGIA","GRÉCIA","HOLANDA","PAÍSES BAIXOS","HUNGRIA","IÊMEN","ÍNDIA","INDONÉSIA","IRÃ","IRAQUE","IRLANDA","ISLÂNDIA","ISRAEL","ITÁLIA","JAPÃO","JORDÂNIA","KUWAIT","LÍBANO","LÍBIA","LITUÂNIA","LUXEMBURGO","MALÁSIA","MARROCOS","MÉXICO","MYANMAR","NIGÉRIA","NORUEGA","NOVA ZELÂNDIA","OMÃ","PAQUISTÃO","PANAMÁ","PERU","POLÔNIA","PORTUGAL","QUÊNIA","REINO UNIDO","REPÚBLICA TCHECA","TCHÉQUIA","ROMÊNIA","RÚSSIA","SÉRVIA","SÍRIA","SUDÃO","SUÉCIA","SUÍÇA","TAILÂNDIA","TAIWAN","TUNÍSIA","TURQUIA","UCRÂNIA","URUGUAI","VENEZUELA","VIETNÃ","EUA","URSS","UNIÃO EUROPEIA","OTAN","NATO"];

/**
 * [porte Régie] TETO E PISO VÊM DA MARCA, com o ofício por baixo.
 *
 * O 180px era do Top10: "acima da mediana (112) e do p75 (150) dos rótulos de país dele". A razão é
 * relativa ao RÓTULO da marca, não um número universal — então aqui é 1,3 × o alvo de rótulo da marca
 * do canal (--fs-rotulo). Na marca neutra (140px) isso dá 182, praticamente o 180 do estúdio; num canal
 * que desenha rótulo a 120, o teto desce junto. O piso é o do rótulo: o maior entre o ofício (104) e o
 * --piso-rotulo da marca — a marca sobe o piso, nunca o desce. `--teto=`/`--piso=` continuam vencendo.
 */
const MARCA = lerMarca();
const TETO = parseInt(opt("teto", String(Math.round(1.3 * (MARCA.alvos.rotulo ?? 138)))), 10);
const PISO = parseInt(opt("piso", String(Math.max(104, MARCA.pisos.rotulo ?? 0))), 10);

const browser = await lancarChrome();
const laudos = [];

for (const arq of arquivos) {
  let VW = 1920, VH = 1080, src = "";
  try { src = readFileSync(resolve(arq), "utf8"); } catch (e) {}
  // [porte Régie] 4K pela régua do render do motor (aspas simples e __native4k contam) — lib/abrir-cena.mjs
  ({ w: VW, h: VH } = await palcoDaCena(src));
  // Palco legado 1920 recebe METADE dos limites (o px é o mesmo, a tela tem metade dos pixels).
  const esc = VW / 3840;
  const teto = Math.round(TETO * esc), piso = Math.round(PISO * esc);

  const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const erros = [];
  page.on("pageerror", (e) => erros.push(String(e).slice(0, 90)));
  await page.addInitScript(() => { window.__PREVIEW = false; try { HTMLMediaElement.prototype.play = () => Promise.resolve(); } catch (e) {} });
  try {
    await page.goto(pathToFileURL(resolve(arq)).href, { waitUntil: "load", timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);
  } catch (e) { erros.push("LOAD:" + String(e).slice(0, 70)); }
  const DUR = await page.evaluate(() => (window.__duracao && isFinite(window.__duracao)) ? window.__duracao : 10).catch(() => 10);

  const achados = {};
  // [porte Régie] O TERCEIRO ESTADO, que este gate não tinha. Página que não abriu e amostra que não
  // voltou saíam "nenhum nome de país na tela — nada a cobrar", exit 0: um HTML inexistente passava.
  // Agora contam-se as amostras e os __renderAt que lançam, como no qc-carga (piso de metade).
  let esperadas = 0, validas = 0, motorFalhou = 0;
  for (let t = 0; t <= DUR + 1e-6; t += PASSO) {
    esperadas++;
    const s = await page.evaluate(async ({ tt, op, vw, vh, paises, seletor }) => {
      // [porte Régie] com AWAIT: cena com <video> tem __renderAt assíncrono (espera o seek), e sem
      // await o DOM lido é o do instante anterior — o mesmo defeito que o qc-carga já documenta.
      let motorOk = true;
      try { window.__renderAt && await window.__renderAt(tt); } catch (e) { motorOk = false; }
      const eff = (el) => { let o = 1, n = el; while (n && n.nodeType === 1) { const s = getComputedStyle(n); if (s.display === "none" || s.visibility === "hidden") return 0; o *= parseFloat(s.opacity || "1"); n = n.parentElement; } return o; };
      const visivel = (el) => { if (eff(el) <= op) return null; let r; try { r = el.getBoundingClientRect(); } catch (e) { return null; } if (r.width < 3 || r.height < 3 || r.right < 0 || r.left > vw || r.bottom < 0 || r.top > vh) return null; return r; };
      // toda bandeira visível no frame
      const bandeiras = [];
      for (const el of document.querySelectorAll('img,image,svg,div,span,use')) {
        const attr = ((el.getAttribute && (el.getAttribute("src") || el.getAttribute("href") || el.getAttribute("xlink:href") || "")) || "") + " " + (el.className && el.className.baseVal !== undefined ? el.className.baseVal : (el.className || "")) + " " + (el.id || "");
        const marcado = el.hasAttribute && el.hasAttribute("data-bandeira");
        if (!marcado && !/flag|bandeir/i.test(attr)) continue;
        const r = visivel(el); if (!r) continue;
        bandeiras.push({ x: r.x, y: r.y, w: r.width, h: r.height, op: eff(el) });
      }
      const out = [];
      for (const el of document.querySelectorAll(seletor)) {
        // TEXTO PRÓPRIO (nós de texto DIRETOS), não `textContent` inteiro. A regra antiga pulava o
        // elemento sempre que um filho tivesse texto — para não contar pai e filho duas vezes —, e
        // com isso um rótulo como `<div>JAPÃO · <i>1985</i></div>` ficava INVISÍVEL para o gate: o
        // país mora no nó de texto do pai. Medido em `japao-85-vs-china-hoje`, onde o gate dizia
        // "nenhum nome de país na tela" com JAPÃO e CHINA escritos em 150px. Ler só o texto próprio
        // resolve os dois lados: o pai é avaliado pelo que ELE escreve, e o filho por si.
        const proprio = Array.from(el.childNodes)
          .filter((n) => n.nodeType === 3).map((n) => n.textContent).join(" ").trim().replace(/\s+/g, " ");
        const txt = proprio || ((el.tagName.toLowerCase() === "text" || el.tagName.toLowerCase() === "tspan")
          ? (el.textContent || "").trim().replace(/\s+/g, " ") : "");
        if (!txt || txt.length > 40) continue;
        /**
         * O rótulo quase nunca é só o país: é "JAPÃO · 1985", "CHINA · HOJE", "IRÃ — 2026".
         * A normalização antiga apagava os NÃO-LETRAS, então o qualificador NUMÉRICO sumia junto
         * ("JAPÃO · 1985" → "JAPÃO", reconhecido) e o TEXTUAL sobrevivia ("CHINA · HOJE" → "CHINA
         * HOJE", fora da lista). Resultado medido: numa cena de comparação lado a lado, o gate
         * cobrava um lado e ignorava o outro — pelo acaso de um qualificador ser ano e o outro ser
         * palavra. Cortar no separador trata os dois iguais, que é o que eles são.
         */
        /**
         * TODOS os segmentos, não só o primeiro — e este ponto cego nasceu de um conserto meu de hoje.
         * A primeira versão testava `split(...)[0]`, então pegava "JAPÃO · 1985" e perdia
         * "HORTIFRÚTI FRESCO · EUA" (achado de um editor-de-arte em `prateleira-atravessou-mundo`).
         * O país pode estar em qualquer parte do rótulo; o que muda é o qualificador, não a ordem.
         */
        const limpa = (s) => s.toUpperCase().normalize("NFC").replace(/[^A-ZÀ-Ÿ ]/g, "").replace(/\s+/g, " ").trim();
        const segmentos = txt.split(/\s*[·•|/–—-]\s*|\s{2,}/);
        const U = [txt, ...segmentos].map(limpa).find((c) => paises.includes(c));
        if (!U) continue;

        /**
         * RÓTULO ≠ PAÍS CITADO NUMA FRASE — e cobrar bandeira do segundo é alarme falso.
         *
         * A regra do ofício ("país escrito na tela vem com a bandeira ao lado, ≥104px") fala do
         * RÓTULO: o cartão que o canal desenha para identificar um país. Ela não fala do país que
         * aparece DENTRO de um texto reproduzido — o dateline de um clipping ("**BAHREIN** · 8 de
         * março de 2026"), a manchete de um jornal, a linha de uma citação. Ali o nome é conteúdo
         * do documento, e pendurar uma bandeira de 104px ao lado seria falsificar a fonte.
         *
         * Medido em `ataque-agua-bahrein`, no minuto em que este gate deixou de ser cego: as duas
         * primeiras coisas que ele viu foram um SEM-BANDEIRA e um PEQUENO-DEMAIS, ambos sobre o
         * dateline da matéria da Al Jazeera. Zero defeito real. Um gate que estreia gritando errado
         * é pior que o gate cego que ele substituiu: ensina a ignorar o alarme.
         *
         * O TESTE, que é estrutural e não depende de o artista lembrar de marcar nada: um rótulo
         * está SOZINHO no seu elemento. Se a tag é de ênfase inline (`b`, `strong`, `small`…) e o
         * pai escreve mais alguma coisa além dela, então o país é uma palavra dentro de uma frase.
         */
        const INLINE = ["b","strong","i","em","small","mark","u","s","sub","sup","abbr","cite","q","time","a","code","kbd"];
        let ignorado = null;
        if (INLINE.includes(el.tagName.toLowerCase())) {
          const pai = el.parentElement;
          const restoDoPai = pai ? Array.from(pai.childNodes)
            .filter((n) => n !== el).map((n) => (n.textContent || "")).join("").trim() : "";
          if (restoDoPai.length > 0) ignorado = "dentro de frase (dateline/manchete/citação) — não é rótulo do canal";
        }
        // marcação explícita para o clipping/documento inteiro, quando a estrutura não basta
        if (!ignorado && el.closest && el.closest("[data-documento],[data-clipping],.clipping,.documento,figure blockquote"))
          ignorado = "dentro de documento/clipping reproduzido — bandeira do canal ali falsifica a fonte";

        /**
         * PAÍS HISTÓRICO NÃO LEVA BANDEIRA MODERNA — e cobrá-la seria pedir um ERRO FACTUAL.
         *
         * "EGITO · c. 1450 a.C." é o Egito faraônico; a bandeira egípcia atual é de 1984. Pendurá-la
         * ali data o lugar errado por três milênios e meio. O mesmo vale para "RÚSSIA · 1917" (a
         * tricolor atual voltou em 1991) e "ALEMANHA · 1938". A regra da bandeira serve para
         * IDENTIFICAR um Estado contemporâneo — quando o rótulo carrega uma data antiga, o nome é
         * um LUGAR, não um Estado, e o gate precisa calar a boca.
         *
         * Medido: esta foi uma das duas únicas acusações do gate em 77 cenas — e as duas eram falsas.
         * Um gate que estreia com 100% de alarme falso não protege nada; ensina a ser ignorado.
         */
        /**
         * ⚠️ O contexto é montado com ESPAÇO entre os filhos do pai (25/jul). `textContent` puro
         * concatena os blocos sem separador: no rótulo `<div>CHINA</div><div>dinastia Han</div>`
         * ele vira "CHINAdinastia…", e o `\bdinastia\b` da isenção histórica NÃO casa — o gate
         * cobrou bandeira moderna da China Han (s44 do `homossexualidade-antiguidade`), exatamente
         * o erro factual que a isenção existe para impedir.
         */
        const paiTexto = el.parentElement
          ? Array.from(el.parentElement.childNodes).map((n) => n.textContent || "").join(" ")
          : "";
        const contexto = (paiTexto || txt).replace(/\s+/g, " ").slice(0, 120);
        const anos = contexto.match(/\b(1[0-9]{3}|20[0-9]{2})\b/g) || [];
        const ehHistorico = /\b(a\.?\s?C\.?|d\.?\s?C\.?|séc(ulo)?\.?\s|antiguidade|império|imperial|dinastia)\b/i.test(contexto)
          || anos.some((a) => +a < 1950);
        if (!ignorado && ehHistorico) ignorado = "contexto histórico — a bandeira moderna dataria o lugar errado";

        /**
         * IGNORAR EM SILÊNCIO ENSINA O AGENTE A DESCONFIAR DO GATE (25/jul).
         * Três `editor-de-arte` seguidos reportaram como DEFEITO que este gate "não vê ALEMANHA/EUA
         * dentro do dateline". Não é defeito: é [ARTE-61], e é deliberado. Mas o gate dizia apenas
         * "nenhum nome de país na tela" — indistinguível de cegueira. Um deles chegou a acrescentar
         * uma bandeira no dateline de um clipping e teve de espremer a data para caber.
         * Agora o gate DIZ o que viu e por que não cobrou. Silêncio não é explicação.
         */
        if (ignorado) { out.push({ pais: U, txt, fs: 0, bandeira: null, ignorado, t: +tt.toFixed(1) }); continue; }
        const r = visivel(el); if (!r) continue;
        const fs = Math.round(parseFloat(getComputedStyle(el).fontSize) || 0);
        const cy = r.y + r.height / 2;
        /**
         * BANDEIRA-CENÁRIO: quando a bandeira É o fundo, a regra de proximidade não se aplica.
         *
         * O teste de "encostada no rótulo" existe para o ÍCONE — o quadradinho de 60px que precisa
         * estar ao lado do nome para que o espectador ligue os dois. Mas o `japao-dobra-orcamento`
         * desenha o hinomaru em 1280px atrás do gráfico inteiro: ele identifica o Japão na cena toda,
         * de forma muito mais clara que qualquer ícone, e obviamente não fica colado no rótulo.
         *
         * ⚠️ MAS SÓ VALE SE FOR LEGÍVEL COMO BANDEIRA — e é aqui que eu quase afrouxei o gate para
         * acomodar um defeito real. O `japao-dobra-orcamento` marcou como bandeira um disco a **14%
         * de opacidade**: no frame, aquilo é uma mancha vermelha difusa de atmosfera, e ninguém lê
         * "Japão" nela. O gate acusava certo; eu é que ia calá-lo. Só o OLHO decidiu — nenhuma
         * medida de tamanho pegaria isso, porque o tamanho estava enorme.
         * Cenário identifica por PRESENÇA, e presença exige ser visível: ≥50% de opacidade.
         */
        const bandeiraCenario = bandeiras.some((b) => b.w >= vw * 0.15 && b.op >= 0.5);
        const temBandeira = bandeiraCenario || bandeiras.some((b) => {
          const alinhado = Math.abs((b.y + b.h / 2) - cy) <= Math.max(r.height, b.h);
          const folga = Math.max(r.width * 1.2, b.w * 3, 240);
          const gapEsq = r.x - (b.x + b.w);        // bandeira à esquerda do texto
          const gapDir = b.x - (r.x + r.width);    // bandeira à direita do texto
          const encostado = (gapEsq >= -b.w && gapEsq <= folga) || (gapDir >= -r.width && gapDir <= folga);
          return alinhado && encostado;
        });
        out.push({ pais: U, txt, fs, bandeira: temBandeira, t: +tt.toFixed(1) });
      }
      return { out, motorOk };
    }, { tt: t, op: OP, vw: VW, vh: VH, paises: PAISES, seletor: SELETOR_TEXTO }).then((r) => {
      if (!r.motorOk) motorFalhou++; else validas++;
      return r.out;
    }).catch(() => []);
    for (const a of s) {
      if (!achados[a.pais]) achados[a.pais] = { pais: a.pais, fsMax: 0, comBandeira: 0, n: 0, t0: a.t, ignorado: null };
      const g = achados[a.pais];
      if (a.ignorado) { g.ignorado = a.ignorado; continue; }   // visto, mas fora da regra: não conta nem cobra
      g.n++; g.fsMax = Math.max(g.fsMax, a.fs); if (a.bandeira) g.comBandeira++;
    }
  }
  await ctx.close();

  const todos = Object.values(achados);
  // um país que SÓ apareceu em contexto ignorado não entra na cobrança — mas é REPORTADO,
  // para o leitor não confundir exceção deliberada com cegueira do gate.
  const isentos = todos.filter((p) => p.n === 0 && p.ignorado);
  const lista = todos.filter((p) => p.n > 0);
  const semBandeira = lista.filter((p) => p.comBandeira === 0);
  const grandes = lista.filter((p) => p.fsMax > teto);
  const pequenos = lista.filter((p) => p.fsMax < piso);
  const falhas = [];
  // [porte Régie] o conserto diz ONDE a bandeira mora no canal (decisão I7 da integração): é o caminho que
  // as roupas usam, e o `flag` no nome do arquivo é o que este gate reconhece como bandeira.
  if (!SO_TAMANHO && semBandeira.length) falhas.push(`SEM BANDEIRA: ${semBandeira.map((p) => p.pais).join(", ")} — ` +
    `a bandeira mora em assets/flags/<iso2>.png no canal (ex.: <img src="../../../assets/flags/br.png"> ao lado do rótulo)`);
  if (!SO_BANDEIRA && grandes.length) falhas.push(`GRANDE DEMAIS (teto ${teto}px p/ rótulo de país): ${grandes.map((p) => p.pais + " " + p.fsMax + "px").join(", ")}`);
  if (!SO_BANDEIRA && pequenos.length) falhas.push(`PEQUENO DEMAIS (piso ${piso}px): ${pequenos.map((p) => p.pais + " " + p.fsMax + "px").join(", ")}`);

  const PISO_AMOSTRAS = Math.max(1, Math.ceil(esperadas * 0.5));
  const erroLoad = erros.find((e) => e.startsWith("LOAD:"));
  const naoMedido = erroLoad ? `a página não carregou — ${erroLoad.slice(5)}`
    : validas < PISO_AMOSTRAS ? `só ${validas} de ${esperadas} amostras válidas (piso ${PISO_AMOSTRAS})${motorFalhou ? ` — o __renderAt lançou em ${motorFalhou}` : ""}` : null;
  const laudo = { arq: basename(arq), palco: VW, teto, piso, paises: lista, falhas, erros, esperadas, validas, naoMedido };
  laudos.push(laudo);
  if (!JSON_OUT && naoMedido) console.log(`PAÍS · ${laudo.arq} · ⚠ NÃO MEDIDO — ${naoMedido}`);
  else if (!JSON_OUT) {
    if (!lista.length && !isentos.length) console.log(`PAÍS · ${laudo.arq} · nenhum nome de país na tela — nada a cobrar (${validas}/${esperadas} amostras)`);
    else {
      console.log(`\nPAÍS · ${laudo.arq} · palco ${VW} · teto ${teto}px · piso ${piso}px`);
      for (const p of lista) console.log(`  ${p.comBandeira ? "🏳 " : "✗ "}${p.pais.padEnd(18)} ${String(p.fsMax).padStart(4)}px ${p.fsMax > teto ? "← GRANDE" : ""}${p.comBandeira ? "" : "  ← SEM BANDEIRA"}`);
      // ARTE-61: dizer o que foi visto e POR QUE não foi cobrado — silêncio parece cegueira
      for (const p of isentos) console.log(`  ◦ ${p.pais.padEnd(18)} visto, NÃO cobrado: ${p.ignorado}`);
      console.log(falhas.length ? falhas.map((f) => "  ✗ " + f).join("\n")
        : (lista.length ? "  ✓ todos com bandeira e no tamanho de rótulo" : "  ✓ nada a cobrar (só ocorrências isentas por ARTE-61)"));
    }
  }
}
await browser.close();
if (JSON_OUT) console.log(JSON.stringify(laudos, null, 1));
// [porte Régie] 1 = medi e reprovei (precedência) · 2 = NÃO MEDI · 0 = medi e passou.
process.exit(laudos.some((l) => l.falhas.length && !l.naoMedido) ? 1 : laudos.some((l) => l.naoMedido) ? NAO_MEDIDO : 0);
