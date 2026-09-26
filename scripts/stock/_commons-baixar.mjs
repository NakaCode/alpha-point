#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/_commons-baixar.mjs (linhas 1-75, commit 4afda12).
// O que mudou: (1) o download é por fetch em fluxo (o curl do estúdio não existe num Windows sem
// Git Bash, e o `curl` do PowerShell 5.1 é outro programa); (2) a resolução REAL é medida pelo
// medir() do motor (<motor>/src/midia/procedencia.mjs: cabeçalho da imagem, sem ffprobe; ffprobe só
// para vídeo), e o sha256 vai junto; (3) User-Agent do canal (canal.json, contato); (4) o nome de
// saída passa pelo nomeSeguro do motor (CON/PRN/AUX, ponto no fim, barra no nome); (5) a lista TSV
// aceita CRLF; (6) _creditos.json é gravado por tmp + rename com nova tentativa (Defender);
// (7) cada registro diz se a licença passa na trava do motor (licenca_aceita) — licença fora dela é
// baixada e AVISADA, não escondida; (8) linha que falhou faz o script sair 1 (o estúdio saía 0 com
// "x download falhou" no meio do log). Rede e espera injetáveis para o teste (principal()).
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// BAIXA arquivos do Wikimedia Commons por TÍTULO (File:...) na resolução ORIGINAL, com metadados.
// uso: node scripts/stock/_commons-baixar.mjs <destino-dir> <lista.tsv>
//   lista.tsv: File:Titulo.jpg <TAB> nome-de-saida.jpg <TAB> o_que_e [<TAB> thumb]
// Escreve <destino-dir>/_creditos.json com fonte/licenca/autor/data/resolucao.
//
// [porte Regie] O _creditos.json NÃO é o _PROCEDENCIA.json: quem transcreve um no outro é o
// `node scripts/procedencia-reconciliar.mjs <proj> --escrever`. Para mídia que vai à produção, o
// caminho com prova por construção é o buscar-midia do motor (baixar + entregar).
import { createWriteStream, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { importarDoMotor } from "../lib/motor.mjs";
import { ehPrincipal, posicionais } from "./lib/ferramentas.mjs";

/** [porte Regie] as linhas da lista: CRLF tolerado, comentário e linha vazia fora. */
export function lerLista(texto) {
  return String(texto).replace(/^﻿/, "").split(/\r?\n/).map((s) => s.trim()).filter((s) => s && !s.startsWith("#"))
    .map((l) => { const [titulo, nome, oque, forcarThumb] = l.split("\t"); return { titulo, nome, oque, forcarThumb }; });
}

/** As URLs a tentar, na ordem — puro. */
export function urlsParaTentar(ii, forcarThumb) {
  // upload.wikimedia.org limita IP de datacenter (429). Tenta o ORIGINAL; se travar, cai no thumb 5000px
  // (ainda ≥4K de largura, ~1/4 dos bytes) — melhor entregar 5000px do que não entregar.
  // 4º campo "thumb" no TSV = usar SÓ o thumb (obrigatório p/ .tif gigante: o Commons entrega JPG renderizado)
  return forcarThumb === "thumb" && ii.thumburl ? [ii.thumburl]
    : ii.thumburl && ii.thumbwidth >= 3840 ? [ii.url, ii.thumburl] : [ii.url];
}

export async function principal(argv = process.argv.slice(2), {
  raiz = process.cwd(), fetch = globalThis.fetch, dormir = (ms) => new Promise((r) => setTimeout(r, ms)), log = console.log,
  atraso = +(process.env.COMMONS_DELAY || 8000),
} = {}) {
  const [DEST_ARG, LISTA] = posicionais(argv);
  if (!DEST_ARG || !LISTA) { console.error("uso: _commons-baixar.mjs <destino-dir> <lista.tsv>"); return 2; }
  const DEST = resolve(raiz, DEST_ARG);
  const { lerConfigCanal } = await importarDoMotor("src/midia/canal.mjs");
  const { licencaAceita, limparTexto } = await importarDoMotor("src/midia/licenca.mjs");
  const { medir } = await importarDoMotor("src/midia/procedencia.mjs");
  const { nomeSeguro, renomearComRetentativa } = await importarDoMotor("src/midia/arquivos.mjs");
  const UA = lerConfigCanal(raiz).ua;                   // [porte Regie] contato do dono do canal
  mkdirSync(DEST, { recursive: true });

  const linhas = lerLista(readFileSync(resolve(raiz, LISTA), "utf8"));
  const arqCred = join(DEST, "_creditos.json");
  let reg = [];
  if (existsSync(arqCred)) {
    try { reg = JSON.parse(readFileSync(arqCred, "utf8")); }
    catch {
      // [porte Regie] o estúdio lia e, se quebrasse, o JSON.parse derrubava o script no meio; aqui
      // se recusa ANTES de baixar qualquer coisa: _creditos.json ilegível é registro de alguém.
      console.error(`_creditos.json ilegivel em ${DEST} — conserte-o antes; nada foi baixado.`);
      return 1;
    }
    if (!Array.isArray(reg)) reg = [];
  }
  const dedupe = (a) => [...new Map(a.map((x) => [x.arquivo, x])).values()];
  const gravar = () => {
    const tmp = `${arqCred}.tmp-${process.pid}`;
    writeFileSync(tmp, JSON.stringify(reg, null, 1));
    renomearComRetentativa(tmp, arqCred);                // [porte Regie] o Defender segura arquivo recém-escrito
  };
  let falhas = 0;

  for (const { titulo, nome: nomeBruto, oque, forcarThumb } of linhas) {
    if (!titulo || !nomeBruto) { log(`x linha sem titulo ou sem nome de saida: ${titulo || "(vazia)"}`); falhas++; continue; }
    // [porte Regie] nome seguro no Windows, preservando a extensão pedida
    const ext = extname(nomeBruto).toLowerCase();
    const nome = `${nomeSeguro(nomeBruto.slice(0, nomeBruto.length - ext.length), { max: 100, reserva: "commons" })}${ext}`;
    if (nome !== nomeBruto) log(`  aviso: "${nomeBruto}" vira "${nome}" no disco (nome seguro no Windows).`);
    let j = {};
    for (let tent = 0; tent < 6; tent++) {
      const r = await fetch("https://commons.wikimedia.org/w/api.php?format=json&" + new URLSearchParams({
        action: "query", titles: titulo, prop: "imageinfo", iiprop: "url|size|mime|extmetadata", iiurlwidth: "5000",
      }), { headers: { "User-Agent": UA } });
      const t = await r.text();
      if (t.startsWith("You are making too many")) { await dormir(4000); continue; }
      try { j = JSON.parse(t); break; } catch { await dormir(3000); }
    }
    const p = Object.values(j.query?.pages || {})[0];
    const ii = (p?.imageinfo || [])[0];
    if (!ii) { log(`x ${titulo}: nao achei`); falhas++; continue; }
    const em = ii.extmetadata || {};
    const lim = (v) => limparTexto(String(v || "").replace(/&#\d+;/g, " "));
    const alvo = join(DEST, nome);
    let usouThumb = false;
    if (!existsSync(alvo) || statSync(alvo).size < 5000) {
      let ok = false;
      const urls = urlsParaTentar(ii, forcarThumb);
      for (let tent = 0; tent < 6 && !ok; tent++) {
        const u = urls[Math.min(tent >= 2 ? 1 : 0, urls.length - 1)];
        const parte = `${alvo}.part`;
        try {
          // [porte Regie] fetch em fluxo no lugar do curl; o prazo de 600 s do estúdio continua
          const r = await fetch(u, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(600_000) });
          if (!r.ok || !r.body) throw new Error(`HTTP ${r.status}`);
          await pipeline(Readable.fromWeb(r.body), createWriteStream(parte));
          renomearComRetentativa(parte, alvo);
          ok = existsSync(alvo) && statSync(alvo).size > 5000;
          usouThumb = ok && u !== ii.url;
        } catch { rmSync(parte, { force: true }); await dormir(8000 * (tent + 1)); }
      }
      if (!ok) { log(`x ${nome}: download falhou (429/rede)`); falhas++; continue; }
    }
    const mb = +(statSync(alvo).size / 1e6).toFixed(2);
    // resolução REAL do arquivo em disco (o Commons trunca thumb em 3840px, não adianta acreditar no pedido)
    // [porte Regie] pelo medir() do motor: imagem pelo cabeçalho, sem ffprobe; null quando não mede.
    let medida = {};
    try { medida = await medir(alvo); } catch (e) { log(`  aviso: nao medi ${nome}: ${e.message.split("\n")[0]}`); }
    const licenca = lim(em.LicenseShortName?.value) || lim(em.License?.value) || "?";
    const item = {
      arquivo: nome, o_que_e: oque || lim(em.ImageDescription?.value).slice(0, 200),
      fonte: "Wikimedia Commons", pagina: ii.descriptionurl,
      licenca,
      licenca_aceita: licencaAceita(licenca),            // [porte Regie]
      autor: lim(em.Artist?.value).slice(0, 160) || "?",
      data_acervo: lim(em.DateTimeOriginal?.value).slice(0, 80) || "?",
      credito_acervo: lim(em.Credit?.value).slice(0, 200) || "",
      resolucao: medida.resolucao || `${ii.width}x${ii.height}`,
      resolucao_medida: Boolean(medida.resolucao),       // [porte Regie] declarada ≠ medida
      resolucao_original: `${ii.width}x${ii.height}`, mb,
      ...(usouThumb ? { baixou_thumb: true } : {}),
      ...(medida.sha256 ? { sha256: medida.sha256 } : {}),
    };
    reg.push(item); reg = dedupe(reg);
    log(`ok ${nome}  ${item.resolucao}  ${mb}MB  [${item.licenca}]${item.licenca_aceita ? "" : "  <- LICENCA FORA DA TRAVA DO MOTOR (NC/ND ou ilegivel): nao use na producao"}`);
    gravar();
    await dormir(atraso);
  }
  gravar();
  log(`-> ${arqCred} (${reg.length} registros)`);
  return falhas ? 1 : 0;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = e?.code === "SEM_CONTATO" || e?.code === "SEM_CANAL" ? 2 : 1; }
}
