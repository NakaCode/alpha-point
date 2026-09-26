#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-credito-fantasma.mjs (linhas 1-242, commit 4afda12).
// O que mudou: o Chrome vem de lib/chrome.mjs (inclusive quando é REABERTO depois de cair); cena
// sem __duracao deixou de ser "pulada" em silêncio (contava como nada e o gate saía 0) e passou a
// ser NÃO MEDIDA; `out\<proj>` e caminho absoluto do Windows são aceitos.
// Na integração da v1: a página abre no palco da cena (a régua do render do motor), não em 1920 fixo.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
// QC · CRÉDITO-FANTASMA — o crédito está no ar ANTES da mídia que ele credita.
//
// POR QUE EXISTE. Medido em 10/ago/2026, no QC do `quao-fundo-terra`: **quatro cenas** puseram a
// linha de atribuição na tela segundos antes de a foto aparecer — `s24` (3,55 s), `s77` (7,5 s),
// `s109` (~17 s). Dois lotes independentes do `qc-visual` acharam o mesmo defeito, e nenhum gate
// determinístico o via: `check-overlap` mede COLISÃO, `qc-carga` mede QUANTIDADE, `_audit-til` mede
// GLIFO. Faltava a pergunta óbvia — **"o que este crédito credita já apareceu?"**.
//
// A CAUSA É UMA LEI BEM-INTENCIONADA LIDA PELA METADE. A [ARTE-179] manda fonte e crédito
// **nascerem no ar** (base ≈0,32) em vez de subirem do zero, porque crédito é *cenário*, não
// informação chegando — e isso está certo QUANDO a mídia já está no quadro 0. Virou
// "o rodapé existe desde t=0 com 0,32" mesmo quando a foto entra 17 s depois. E 0,32 em 4K é
// perfeitamente legível: o espectador lê "Foto: Fulano — CC BY-SA" sobre uma tela sem foto nenhuma.
//
// O QUE ELE MEDE. Amostra a cena ao longo do tempo e, em cada instante, pergunta:
//   (a) existe algum CRÉDITO legível (opacidade efetiva ≥ --op, padrão 0,25)?
//   (b) existe alguma MÍDIA REAL visível (img/video de `_media/`, opacidade ≥ --op e área ≥ 1% do palco)?
// Se (a) e não (b) por mais de --tol segundos contínuos, acusa — com o intervalo exato e o texto do
// crédito. O veredito é o INTERVALO, não um instante: crédito que pisca um frame antes da foto no
// mesmo corte é arredondamento, não defeito.
//
// ⚠️ TRÊS COISAS QUE ELE DE PROPÓSITO **NÃO** FAZ, cada uma para não virar ruído:
//  1. **Não casa crédito↔mídia por parentesco.** Numa cena com 3 fotos e 1 rodapé, saber qual
//     crédito é de qual foto exigiria adivinhação. A pergunta que ele responde — "há crédito na tela
//     e NENHUMA mídia real" — é mais fraca e é sempre verdadeira quando acusa.
//  2. **Não acusa cena SEM mídia real.** Cena de desenho puro cujo rodapé credita uma FONTE DE DADO
//     ("Fontes: NASA · Bahcall et al.") não tem foto para esperar, e o crédito ali é legítimo desde
//     o quadro 0. Sem `img`/`video` de `_media/` na cena, o gate não tem pergunta a fazer.
//  3. ~~Não olha o fim da cena.~~ **REVISTO em 14/ago/2026** (QC do `quasares-primordiais`). A razão
//     original continua boa — o fade final que leva a foto e deixa o rodapé um instante é
//     composição, não defeito —, mas ela protegia MUITO mais que o instante que descrevia. Medido
//     pelo `qc-visual` na `s60`: o `#cred` não tinha envelope nenhum e as fotos saíam em 8,62 s numa
//     cena de 11,70 s, deixando **3,08 s (26% da cena)** com "Fotos: Los Angeles Daily News (UCLA
//     Library Special Collections) / Mike Peel" em opacidade CHEIA sobre um campo estelar sem foto
//     nenhuma. É o mesmo defeito da entrada, na outra borda, e custava olho de agente para achar.
//     Agora a cauda é medida com tolerância própria (`--tolSaida`, padrão 1,5 s), justamente para
//     que o fade legítimo continue passando.
//
// ISENÇÃO: `data-qc-credito-antecipado="<por quê>"` no elemento do crédito. Barata para quem tem
// razão e cara para quem não tem — obriga a escrever o motivo.
//
// Uso: node scripts/qc-credito-fantasma.mjs <a.html> [b.html …]   |   <out/proj>  (varre graphics/)
//      --tol=1.0   segundos de tolerância (padrão 1,0)
//      --op=0.25   limiar de opacidade efetiva (o mesmo do check-overlap)
//      --passo=0.2 passo da amostragem
// Exit: 0 = limpo · 1 = alguma cena com crédito-fantasma
import { pathToFileURL } from "node:url";
import { resolve, join, basename } from "node:path";
import { readdirSync, existsSync, readFileSync } from "node:fs";
import { morrerComoNaoMedido } from "./lib/nao-medido.mjs";
import { lancarChrome } from "./lib/chrome.mjs";
import { palcoDaCena } from "./lib/abrir-cena.mjs";

/**
 * ⚠️ O NAVEGADOR QUE **NÃO SOBE** É OUTRO DEFEITO QUE O NAVEGADOR QUE CAI NO MEIO — e este gate só
 * tratava o segundo (15/ago/2026). O `chromium.launch` de topo, mais abaixo, não tem rede: a
 * rejeição não capturada faz o Node sair **1**, que na convenção da casa é *"MEDI e reprovei"*.
 *
 * Provado ponta a ponta, com `CHROME_PATH=/nao/existe/chrome` sobre uma cena boa: o
 * `_portao.json` gravou `"falhas": ["crédito-fantasma"]` — cena correta carimbada REPROVADA por um
 * gate que não mediu um pixel. É a reincidência exata do `el-nino` (28/jul: 9 cenas boas barradas,
 * vídeo parado 2h20) e das 51 cenas da `estudio-mapas`, que é a razão de `lib/nao-medido.mjs`
 * existir. O desempate do `qc-cena.mjs` não salva: a re-medição isolada crasha igual.
 */
morrerComoNaoMedido("qc-credito-fantasma");


const argv = process.argv.slice(2);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? +a.split("=")[1] : d; };
const TOL = opt("tol", 1.0), OPMIN = opt("op", 0.25), PASSO = opt("passo", 0.2);
// A cauda tem tolerância PRÓPRIA e mais folgada, e a razão é composição real: o fade final que leva
// a foto e deixa o rodapé meio segundo é decisão de quem desenha, não defeito. 1,5 s está acima de
// qualquer saída de cena da casa e abaixo do caso medido na `s60` do `quasares-primordiais`
// (3,08 s — 26% da cena lendo "Fotos: …" sobre campo estelar vazio).
const TOL_SAIDA = opt("tolSaida", 1.5);
const posic = argv.filter((a) => !a.startsWith("--"));
if (!posic.length) { console.error("uso: node scripts/qc-credito-fantasma.mjs <html…> | <out/proj>"); process.exit(2); }

// aceita `out/<proj>`, `<proj>` e lista de HTMLs — a casa mistura as três convenções, e recusar a
// forma errada devolve "sem graphics", que se lê como "o projeto não tem arte".
const arquivos = [];
for (const p of posic) {
  if (p.endsWith(".html")) { arquivos.push(p); continue; }
  // [porte Régie] aceita a barra invertida do Windows no fim ("out\\proj\\").
  const q = p.replace(/[\\/]+$/, "");
  const g = existsSync(join(q, "graphics")) ? join(q, "graphics")
    : existsSync(join("out", q, "graphics")) ? join("out", q, "graphics") : q;
  if (!existsSync(g)) { console.error(`✗ sem ${g}`); process.exit(2); }
  for (const f of readdirSync(g).filter((x) => x.endsWith(".html")).sort()) arquivos.push(join(g, f));
}

// ⚠️ O NAVEGADOR MORRE, E QUANDO MORRE O GATE NÃO PODE MORRER JUNTO. Medido em 10/ago/2026: com a
// máquina compartilhada e carregada, o Chrome caiu na cena 44 de 89 e o `newPage` seguinte lançou
// `Target page, context or browser has been closed` — exceção NÃO TRATADA, processo morto, e as 45
// cenas restantes ficaram sem medida. Pior: quem lê o log vê 43 linhas de ✓ e um traceback no fim,
// e o `tail` de quem chamou devolveu **exit 0**. *Gate que morre no meio e reporta sucesso é a pior
// combinação possível — ele afirma o que não mediu.*
// Agora: o navegador é reaberto quando cai, e o que não deu para medir é CONTADO e devolve exit 2.
// [porte Régie] o mesmo lançador dos outros portões (--allow-file-access-from-files já vem nele).
const ARGS = ["--autoplay-policy=no-user-gesture-required"];
let navegador = await lancarChrome({ args: ARGS, chromiumSandbox: false });
// [porte Régie] A página abre no PALCO DA CENA (a régua do render do motor, lib/abrir-cena.mjs), não
// em 1920 fixo: numa cena 4K o "1% do palco" da mídia era calculado sobre um quarto da tela, e o que
// morava além de x=1920 nem entrava no quadro medido.
const abrirPagina = async (palco) => {
  const viewport = { width: palco.w, height: palco.h };
  try { return await navegador.newPage({ viewport, deviceScaleFactor: 1 }); }
  catch {
    try { await navegador.close(); } catch {}
    navegador = await lancarChrome({ args: ARGS, chromiumSandbox: false });
    return await navegador.newPage({ viewport, deviceScaleFactor: 1 });
  }
};
let comDefeito = 0, medidas = 0, semMidia = 0, naoMedidas = 0;

for (const arq of arquivos) {
  let pag;
  let texto = ""; try { texto = readFileSync(resolve(arq), "utf8"); } catch { /* inexistente: o goto abaixo falha com o nome */ }
  try { pag = await abrirPagina(await palcoDaCena(texto)); }
  catch (e) { naoMedidas++; console.log(`  ⚠ ${basename(arq)} — navegador indisponível (${String(e.message).slice(0, 60)})`); continue; }
  try {
    await pag.addInitScript(() => { try { HTMLMediaElement.prototype.play = () => Promise.resolve(); } catch (e) {} });
    await pag.goto(pathToFileURL(resolve(arq)).href, { waitUntil: "load" });
    await pag.evaluate(() => document.fonts.ready);
    // ⚠️ `(fn, arg, options)`: na forma de dois argumentos o teto é ignorado e vira 30 s (medido
    // em 16/set/2026). [SIS-575]
    await pag.waitForFunction(() => window.__fotosProntas !== false && window.__videoPronto !== false, null, { timeout: 12000 }).catch(() => {});
    const dur = await pag.evaluate(() => +window.__duracao || 0);
    // [porte Régie] "pulada" não entrava em conta nenhuma, e o gate saía 0 sobre uma cena que não
    // mediu: sem __duracao não há tempo para varrer — é NÃO MEDIDA, e o rodapé a conta.
    if (!dur) { naoMedidas++; console.log(`  ⚠ ${basename(arq)} — sem window.__duracao: não há tempo para varrer (NÃO MEDIDA)`); continue; }

    const amostras = [];
    for (let t = 0; t <= dur + 1e-6; t += PASSO) {
      const r = await pag.evaluate(async ([tt, op]) => {
        if (window.__renderAt) await window.__renderAt(tt);
        const eff = (el) => { let o = 1, e = el; while (e && e !== document.body) { const s = getComputedStyle(e); if (s.display === "none" || s.visibility === "hidden") return 0; o *= parseFloat(s.opacity || "1"); e = e.parentElement; } return o; };
        const isento = (el) => { for (let n = el; n && n !== document.body; n = n.parentElement) if (n.hasAttribute && n.hasAttribute("data-qc-credito-antecipado")) return true; return false; };
        // CRÉDITO = papel declarado, ou o texto que se parece com atribuição. O papel declarado é a
        // via principal; o regex existe porque nem toda cena marca o rodapé, e um gate que só vê o
        // que foi declarado mede a disciplina de quem declara, não o defeito.
        const reCred = /(^|\s)(foto|imagem|fonte|fontes|crédito|credito|cortesia)\s*:|CC[ -]?(BY|0)|domínio público|dominio publico/i;
        // ⚠️ E ELE PRECISA SER DE IMAGEM. Rodapé que credita DADO ("Pressão estimada pelo gradiente
        // litostático · ETH Zürich") é legítimo desde o quadro 0: o dado já está na tela, não há foto
        // a esperar. Sem esta segunda peneira o gate acusava a `s60` — e alarme falso ensina a
        // ignorar o gate, que é o único jeito de perder o caso real junto.
        // Linha MISTA (dado + foto na mesma frase, como a `s13`) acusa de propósito: a parte de foto
        // está no ar sem a foto, e o conserto é partir a linha, não apagá-la [ARTE-104].
        // ⚠️ `imagens?` NÃO CASA "imagem" — e era o singular que mais aparece na tela. Em PT-BR o
        // plural de imagem troca o M por N, então `imagen` + `s?` cobre "imagens" e a forma
        // inexistente "imagen", e deixa passar "Imagem: NASA/SDO". Medido pelo laudo da `s30`
        // (14/ago, quasares-primordiais): o rodapé "Fonte: USGS · Imagem: NASA/SDO" ficava 2,50 s
        // no ar antes da foto — 38% da cena — e o gate devolvia ✓, porque a linha era descartada
        // aqui como "credita dado". "Ilustração:" tinha o mesmo furo, e é como se credita render de
        // agência (a `s55` credita "Ilustração: ESO/M. Kornmesser").
        const reImagem = /\b(fotos?|imagem|imagens|ilustra(?:ção|cao|ções|coes)|cortesia|acervo)\b|CC[ -]?(BY|0)|domínio público|dominio publico/i;
        const creds = [];
        for (const el of document.querySelectorAll("*")) {
          if (el.children.length) continue;                       // só folhas: evita contar o contêiner e o filho
          const txt = (el.textContent || "").replace(/\s+/g, " ").trim();
          if (!txt) continue;
          const papel = el.closest("[data-qc-papel]")?.getAttribute("data-qc-papel");
          if (papel !== "credito" && !reCred.test(txt)) continue;
          if (!reImagem.test(txt)) continue;                      // credita dado, não imagem
          if (isento(el)) continue;
          if (eff(el) >= op) creds.push(txt.slice(0, 52));
        }
        // MÍDIA REAL visível = img/video de _media/ com opacidade e área que contam como "na tela"
        const palco = window.innerWidth * window.innerHeight;
        let midia = 0, temMidia = 0;
        for (const el of document.querySelectorAll("img[src],video[src],video>source[src]")) {
          const src = el.getAttribute("src") || "";
          if (!/_media\//.test(src)) continue;
          temMidia++;
          const alvo = el.tagName === "SOURCE" ? el.parentElement : el;
          const r = alvo.getBoundingClientRect();
          if (eff(alvo) >= op && (r.width * r.height) / palco >= 0.01) midia++;
        }
        /**
         * ⚠️ MÍDIA TAMBÉM SE PINTA POR `background-image` — e o `<img>` do arquivo pode ser só a
         * PRÉ-CARGA (17/ago/2026). O padrão é corrente nos cards com foto de fundo: a foto entra
         * como `background-image` num `<div>`, e um `<img>` de 8×8 px estacionado em `left:-9000px`
         * força o cache. Medindo só `img[src]`, o gate via `temMidia=1` (o fantasma da pré-carga,
         * que passa a peneira do t=0) e `midia=0` em TODAS as amostras — concluía "NENHUMA mídia
         * aparece na cena inteira" e reprovava o crédito legítimo.
         *
         * Medido na `n026-luzon-filipinas` do `especies-humanas`: mapa satélite real + a foto dos
         * molares do Homo luzonensis na tela em t=8,0s, crédito "Wikimedia Commons · CC BY-SA 4.0"
         * corretamente exigido pela licença — e reprovada por 2,2s (23% da cena).
         *
         * A régua não afrouxa: continua exigindo opacidade ≥ op e área ≥ 1% do palco. O que muda é
         * só ONDE se procura o pixel. Um `<img>` de pré-carga fora do palco segue sem contar.
         */
        for (const el of document.querySelectorAll("[style*='_media/'],[class],div,section,figure")) {
          const bg = getComputedStyle(el).backgroundImage || "";
          if (!/_media\//.test(bg)) continue;
          temMidia++;
          const r = el.getBoundingClientRect();
          if (eff(el) >= op && (r.width * r.height) / palco >= 0.01) midia++;
        }
        return { creds, midia, temMidia };
      }, [Math.min(t, dur), OPMIN]);
      amostras.push({ t: Math.min(t, dur), ...r });
    }

    if (!amostras.some((a) => a.temMidia)) { semMidia++; console.log(`  ·  ${basename(arq)} — sem mídia real de _media/ (crédito de dado é legítimo desde t=0)`); continue; }
    medidas++;

    const iPrimeira = amostras.findIndex((a) => a.midia > 0);
    const iUltima = amostras.reduce((acc, a, i) => (a.midia > 0 ? i : acc), -1);

    // ENTRADA — o trecho ANTES da primeira mídia visível.
    const ruins = (iPrimeira < 0 ? amostras : amostras.slice(0, iPrimeira)).filter((a) => a.creds.length && !a.midia);
    // SAÍDA — o trecho DEPOIS da última. Ver o comentário do cabeçalho sobre por que a tolerância
    // daqui é maior: o fade final que leva a foto e deixa o rodapé meio segundo é composição.
    const ruinsFim = iPrimeira < 0 ? [] : amostras.slice(iUltima + 1).filter((a) => a.creds.length && !a.midia);

    const janelaDe = (arr) => arr.length ? { t0: arr[0].t, t1: arr[arr.length - 1].t + PASSO, txt: arr[0].creds.join(" | ") } : null;
    const jE = janelaDe(ruins), jS = janelaDe(ruinsFim);
    const dtE = jE ? jE.t1 - jE.t0 : 0, dtS = jS ? jS.t1 - jS.t0 : 0;
    const acusaE = jE && dtE >= TOL, acusaS = jS && dtS >= TOL_SAIDA;

    if (!acusaE && !acusaS) {
      const perto = Math.max(dtE, dtS);
      console.log(`  ✓ ${basename(arq)}${perto ? `  (crédito sozinho por ${perto.toFixed(1)}s — abaixo da tolerância)` : ""}`);
      continue;
    }
    if (acusaE) {
      const quando = iPrimeira < 0 ? "e NENHUMA mídia aparece na cena inteira" : `e a mídia só entra em ${amostras[iPrimeira].t.toFixed(2)}s`;
      console.log(`  ✗ ${basename(arq)} — [ENTRADA] crédito legível de ${jE.t0.toFixed(2)}s a ${jE.t1.toFixed(2)}s (${dtE.toFixed(1)}s, ${(100 * dtE / dur).toFixed(0)}% da cena) ${quando}`);
      console.log(`      texto: "${jE.txt}"`);
      console.log(`      conserto: ancore a opacidade do crédito no instante em que a mídia entra — ou declare data-qc-credito-antecipado="<por quê>"`);
    }
    if (acusaS) {
      console.log(`  ✗ ${basename(arq)} — [SAÍDA] a mídia sai em ${amostras[iUltima].t.toFixed(2)}s e o crédito segue legível até ${jS.t1.toFixed(2)}s (${dtS.toFixed(1)}s, ${(100 * dtS / dur).toFixed(0)}% da cena)`);
      console.log(`      texto: "${jS.txt}"`);
      console.log(`      conserto: dê ao crédito o MESMO envelope de saída da mídia que ele credita — ou declare data-qc-credito-antecipado="<por quê>"`);
    }
    comDefeito++;
  } catch (e) {
    naoMedidas++;
    console.log(`  ⚠ ${basename(arq)} — não deu para medir (${String(e.message).slice(0, 70)})`);
  } finally { try { await pag.close(); } catch {} }
}
try { await navegador.close(); } catch {}

console.log(`\n${comDefeito ? `✗ ${comDefeito} cena(s) com CRÉDITO-FANTASMA` : "✓ nenhum crédito no ar antes da mídia que ele credita"}  ·  ${medidas} medida(s), ${semMidia} sem mídia real, ${naoMedidas} NÃO MEDIDA(S)`);
// não-medida NÃO é aprovação: exit 2 separa "medi e está limpo" de "não consegui medir tudo".
process.exit(comDefeito ? 1 : (naoMedidas ? 2 : 0));
