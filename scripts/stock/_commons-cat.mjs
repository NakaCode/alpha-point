#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/_commons-cat.mjs (linhas 1-72, commit 4afda12).
// O que mudou: User-Agent do CANAL (canal.json, campo contato — o do estúdio era o e-mail do
// Mateus); limpeza de texto pelo limparTexto do motor (<motor>/src/midia/licenca.mjs), que tira o
// autor escondido antes de arrancar as tags; cada item diz se a licença passaria na trava do motor
// (licenca_aceita), sem filtrar; --json= grava com caminho resolvido a partir da pasta atual;
// rede e espera injetáveis para o teste (principal()).
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// LISTA arquivos de uma CATEGORIA do Wikimedia Commons (com imageinfo + licença + autor + data).
// uso: node scripts/stock/_commons-cat.mjs "Category:Xxx" [--n=200] [--minw=800] [--sub=1] [--json=arq.json]
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { importarDoMotor } from "../lib/motor.mjs";
import { ehPrincipal, opcao, posicionais } from "./lib/ferramentas.mjs";

/** Um item a partir da página da API — puro. */
export function itemDaPagina(p, { limparTexto, licencaAceita }) {
  const ii = (p?.imageinfo || [])[0]; if (!ii) return null;
  const em = ii.extmetadata || {};
  // [porte Regie] o `lim` do estúdio trocava tag por espaço e juntava o autor escondido ao visível;
  // o limparTexto do motor remove o <span display:none> primeiro.
  const lim = (v) => limparTexto(v);
  const licenca = lim(em.LicenseShortName?.value) || lim(em.License?.value) || "?";
  return {
    titulo: p.title, pagina: ii.descriptionurl, url: ii.url, thumb: ii.thumburl,
    w: ii.width, h: ii.height, mime: ii.mime, mb: +((ii.size || 0) / 1e6).toFixed(2),
    licenca,
    licenca_aceita: licencaAceita(licenca),          // [porte Regie] informação, não filtro
    autor: lim(em.Artist?.value).slice(0, 120),
    data: lim(em.DateTimeOriginal?.value).slice(0, 60),
    credito: lim(em.Credit?.value).slice(0, 160),
    desc: lim(em.ImageDescription?.value).slice(0, 300),
  };
}

export async function principal(argv = process.argv.slice(2), { raiz = process.cwd(), fetch = globalThis.fetch, dormir = (ms) => new Promise((r) => setTimeout(r, ms)), log = console.log } = {}) {
  const CAT = posicionais(argv)[0];
  if (!CAT) { console.error('uso: _commons-cat.mjs "Category:Xxx" [--n=200] [--minw=800] [--sub=1] [--json=arq.json]'); return 2; }
  const N = +opcao(argv, "n", "200"), MINW = +opcao(argv, "minw", "0"), SUB = opcao(argv, "sub", "0") === "1";
  const OUT = opcao(argv, "json", "");
  const { limparTexto, licencaAceita } = await importarDoMotor("src/midia/licenca.mjs");
  const { lerConfigCanal } = await importarDoMotor("src/midia/canal.mjs");
  const UA = { "User-Agent": lerConfigCanal(raiz).ua };   // [porte Regie] contato do dono do canal

  async function api(params) {
    const url = "https://commons.wikimedia.org/w/api.php?format=json&" + new URLSearchParams(params).toString();
    for (let tent = 0; tent < 5; tent++) {
      const r = await fetch(url, { headers: UA });
      const txt = await r.text();
      if (txt.startsWith("You are making too many")) { await dormir(3000); continue; }
      try { return JSON.parse(txt); } catch { await dormir(2000); }
    }
    return {};
  }

  async function membros(cat, tipo) {
    const out = []; let cont = null;
    do {
      const p = { action: "query", list: "categorymembers", cmtitle: cat, cmtype: tipo, cmlimit: "500" };
      if (cont) p.cmcontinue = cont;
      const j = await api(p);
      out.push(...(j.query?.categorymembers || []).map((m) => m.title));
      cont = j.continue?.cmcontinue;
      await dormir(400);
    } while (cont && out.length < 2000);
    return out;
  }

  async function info(titulos) {
    const out = [];
    for (let i = 0; i < titulos.length; i += 30) {
      const j = await api({
        action: "query", titles: titulos.slice(i, i + 30).join("|"),
        prop: "imageinfo", iiprop: "url|size|mime|extmetadata", iiurlwidth: "500",
      });
      for (const p of Object.values(j.query?.pages || {})) {
        const it = itemDaPagina(p, { limparTexto, licencaAceita });
        if (it) out.push(it);
      }
      await dormir(400);
    }
    return out;
  }

  let files = await membros(CAT, "file");
  if (SUB) {
    const subs = await membros(CAT, "subcat");
    for (const s of subs) files.push(...await membros(s, "file"));
  }
  files = [...new Set(files)];
  let itens = await info(files);
  itens = itens.filter((x) => x.w >= MINW && /image\/(jpeg|png|tiff|svg)/.test(x.mime));
  itens.sort((a, b) => (b.w * b.h) - (a.w * a.h));
  const res = { categoria: CAT, total: itens.length, itens: itens.slice(0, N) };
  if (OUT) {
    const alvo = resolve(raiz, OUT);                 // [porte Regie] relativo à pasta atual, com acento e espaço
    mkdirSync(dirname(alvo), { recursive: true });
    writeFileSync(alvo, JSON.stringify(res, null, 1));
    log(`-> ${OUT} (${res.itens.length} itens de ${files.length} arquivos)`);
  } else log(JSON.stringify(res, null, 1));
  return 0;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = e?.code === "SEM_CONTATO" || e?.code === "SEM_CANAL" ? 2 : 1; }
}
