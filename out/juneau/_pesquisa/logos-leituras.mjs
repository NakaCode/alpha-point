#!/usr/bin/env node
// Leitor do pesquisa-logos (juneau, 27/09/2026, segunda entrega).
// Faz UM pedido GET por URL, com o User-Agent do canal (canal.json › contato, montado por
// lerConfigCanal da pré-v1), sem nova tentativa: se a página recusar (403, 405, 429, 503, captcha,
// "Just a moment…"), o registro diz isso e a leitura para ali (CLAUDE.md, "A marca").
// Grava, por leitura: URL pedida, URL final, cliente, status HTTP, data e hora, cabeçalhos de data,
// sha256 do corpo e os trechos procurados (achou ou não, com um recorte curto de contexto).
// O corpo fica em out/juneau/_tmp/logos/leituras/ (fora do git); o registro, em
// out/juneau/_pesquisa/logos-leituras.json (mesclado por slug).
// uso: node out/juneau/_pesquisa/logos-leituras.mjs --so=slug1,slug2   (de dentro do canal)
//      node out/juneau/_pesquisa/logos-leituras.mjs --listar
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const RAIZ = process.cwd();
const MOTOR = "C:/projetos/regie-v1";
const REGISTRO = join(RAIZ, "out/juneau/_pesquisa/logos-leituras.json");
const PASTA_CORPOS = join(RAIZ, "out/juneau/_tmp/logos/leituras");

const api = (params) => "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({ format: "json", formatversion: "2", ...params }).toString();

// Cada leitura: slug, url, para (o defeito ou item que ela serve), procurar (trechos literais).
const LEITURAS = [
  // Defeito 1: British Columbia
  { slug: "commons-dr-bc", para: "defeito 1 (B.C.): o pedido de apagamento de 2023, texto atual", url: api({ action: "query", prop: "revisions", titles: "Commons:Deletion requests/File:Flag of British Columbia.svg", rvprop: "content|timestamp|user|ids", rvslots: "main" }),
    procurar: ["70.68.168.129", "Crown copyright", "URAA", "Red-tailed hawk", "Ikan Kekek", "That sounds conclusive", "Kept", "no valid reason for deletion", "not protected by the Provincial Symbols and Honours Act", "web.archive.org", "bcfacts"] },
  { slug: "commons-dr-bc-hist", para: "defeito 1 (B.C.): o histórico do pedido de apagamento (quem editou e quando)", url: api({ action: "query", prop: "revisions", titles: "Commons:Deletion requests/File:Flag of British Columbia.svg", rvprop: "timestamp|user|comment|ids", rvlimit: "50", rvdir: "newer" }),
    procurar: [] },
  { slug: "commons-file-bc", para: "defeito 1 (B.C.): o campo permission da página do arquivo, hoje", url: api({ action: "query", prop: "revisions", titles: "File:Flag of British Columbia.svg", rvprop: "content|timestamp|user|ids", rvslots: "main" }),
    procurar: ["|permission=", "The Provincial flag is public domain and not protected by the Provincial Symbols and Honours Act.", "http://www.gov.bc.ca/bcfacts/", "{{PD-Canada}}", "{{insignia}}"] },
  // Defeito 3: as URLs das condições de uso e da versão atual
  { slug: "canada-uso-comercial", para: "defeito 3: condições de uso da bandeira do Canadá", url: "https://www.canada.ca/en/canadian-heritage/services/commercial-use-symbols-canada.html",
    procurar: ["Trademarks Act", "section 9", "also applies to non-commercial, public-facing uses, including educational or recreational", "uds-uos@pch.gc.ca", "Date modified"] },
  { slug: "canada-descricao", para: "defeito 3 e defeito 2: versão atual da bandeira do Canadá (1965)", url: "https://www.canada.ca/en/canadian-heritage/services/flag-canada-description.html",
    procurar: ["February 15, 1965", "hoisted for the first time", "Date modified"] },
  { slug: "canada-historia", para: "defeito 2: que bandeira o Canadá usava de 1940 a 1960", url: "https://www.canada.ca/en/canadian-heritage/services/flag-canada-history.html",
    procurar: ["Red Ensign", "Royal Union Flag", "Union Jack", "1945", "1921", "1957", "1965", "Date modified"] },
  { slug: "bclaws-simbolos", para: "defeito 3: Provincial Symbols and Honours Act (B.C.)", url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96380_01",
    procurar: ["current to", "Coat of Arms", "so closely resembling", "likely to deceive", "flag", "Flag"] },
  { slug: "govinfo-4usc1-2023", para: "defeito 3 e defeito 2: nota a 4 U.S.C. §1 (as ordens executivas da bandeira)", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title4/html/USCODE-2023-title4-chap1-sec1.htm",
    procurar: ["Ex. Ord. No. 10834", "July 4, 1960", "Ex. Ord. No. 10798", "July 4, 1959", "fifty stars", "forty-nine stars", "forty-eight stars", "1912", "Ex. Ord. No. 1556", "Ex. Ord. No. 1637"] },
  { slug: "govinfo-4usc-cap1", para: "defeito 3: o Flag Code (4 U.S.C. §§ 5-10), a ressalva de conduta da bandeira dos EUA", url: "https://www.govinfo.gov/content/pkg/USCODE-2023-title4/html/USCODE-2023-title4-chap1.htm",
    procurar: ["Respect for flag", "advertising purposes", "Modification of rules and customs by President", "permission", "penalt", "fourth day of July then next succeeding such admission"] },
  // Defeito 4 e os outros nomes escritos lidos "na origem" na primeira entrega, que não registraram o cliente
  { slug: "adn", para: "nomes escritos: Anchorage Daily News", url: "https://www.adn.com/",
    procurar: ["Anchorage Daily News", "ADN Logo", "© 2026 Anchorage Daily News", "All rights reserved"] },
  { slug: "coastalaska", para: "nomes escritos: CoastAlaska (relacionada à KTOO)", url: "https://www.coastalaska.org/",
    procurar: ["CoastAlaska", "non-profit serving the public media stations", "KTOO"] },
  { slug: "amhs", para: "nomes escritos: Alaska Marine Highway System", url: "https://dot.alaska.gov/amhs/",
    procurar: ["Alaska Marine Highway System", "The Alaska State Ferry", "Transportation & Public Facilities", "Transportation and Public Facilities"] },
  { slug: "dotpf", para: "nomes escritos: Alaska DOT&PF", url: "https://dot.alaska.gov/",
    procurar: ["Alaska Department of Transportation & Public Facilities", "Alaska Department of Transportation and Public Facilities", "DOT&PF", "COPYRIGHT © STATE OF ALASKA", "COPYRIGHT &copy; STATE OF ALASKA"] },
  { slug: "labor", para: "nomes escritos: Alaska Department of Labor and Workforce Development", url: "https://labor.alaska.gov/",
    procurar: ["Department of Labor and Workforce Development", "Department of Labor & Workforce Development", "Department of Labor &amp; Workforce Development"] },
  { slug: "cbj-assembly", para: "nomes escritos: City and Borough of Juneau Assembly", url: "https://juneau.org/assembly",
    procurar: ["City and Borough of Juneau Assembly", "council-manager", "The Assembly establishes policy"] },
  { slug: "dittman", para: "nomes escritos: Dittman Research", url: "https://www.dittmanresearch.com/",
    procurar: ["Dittman Research", "Research + Consulting", "Research &amp; Consulting", "Founded 1969", "907.243.3345"] },
  { slug: "museus", para: "nomes escritos: Alaska State Museum", url: "https://museums.alaska.gov/",
    procurar: ["Alaska State Museum", "Alaska State Museums", "Alaska State Libraries, Archives & Museums", "Alaska State Libraries, Archives &amp; Museums", "Alaska State Libraries, Archives, and Museums"] },
  { slug: "govinfo-fr-2018-16263", para: "nomes escritos: FHWA (a linha AGENCY do aviso no Federal Register)", url: "https://www.govinfo.gov/content/pkg/FR-2018-07-30/html/2018-16263.htm",
    procurar: ["Federal Highway Administration (FHWA), Department of Transportation (DOT)", "AGENCY:"] },
];

// Não se pedem aqui (recusaram leitura automática ou a conexão; nenhuma nova tentativa, CLAUDE.md "A marca"):
export const NAO_SE_PEDEM = {
  "https://www.ktoo.org/": "403 ao User-Agent do canal (verificador, 27/09/2026)",
  "https://yukon.ca/ e https://laws.yukon.ca/": "403 (primeira entrega, 27/09/2026)",
  "https://www2.gov.bc.ca/": "socket hang up, duas vezes (primeira entrega, 27/09/2026)",
  "https://www.elections.alaska.gov/": "405 (primeira entrega, 27/09/2026)",
  "https://highways.dot.gov/": "403 (primeira entrega, 27/09/2026)",
  "https://law.alaska.gov/": "403 (primeira entrega, 27/09/2026)",
  "https://courts.alaska.gov/": "ECONNREFUSED (primeira entrega, 27/09/2026)",
  "http://akleg.gov/": "403 (26/09/2026, midia.md §7.1)",
};

function recusou(status, corpo, title) {
  if ([401, 403, 405, 429, 503].includes(status)) return `HTTP ${status}`;
  const t = (title || "").toLowerCase();
  if (/just a moment|attention required|request rejected|access denied|are you a robot/.test(t)) return `página de verificação ou recusa (title: ${title})`;
  if (corpo.length < 15000 && /just a moment|cf-challenge|verify you are human|request rejected|captcha/i.test(corpo)) return "página curta com sinal de verificação ou recusa";
  return null;
}

function sinais(corpo) {
  const s = [];
  for (const re of [/just a moment/i, /cf-challenge/i, /verify you are human/i, /request rejected/i, /captcha/i]) if (re.test(corpo)) s.push(re.source);
  return s;
}

function trecho(corpo, alvo) {
  const i = corpo.indexOf(alvo);
  if (i < 0) return { alvo, achou: false };
  const n = corpo.split(alvo).length - 1;
  const ctx = corpo.slice(Math.max(0, i - 160), i + alvo.length + 160).replace(/\s+/g, " ");
  return { alvo, achou: true, ocorrencias: n, contexto: ctx };
}

async function ler(l, ua) {
  const quando = new Date().toISOString();
  const reg = { slug: l.slug, para: l.para, url_pedida: l.url, cliente: "Node fetch (undici), um GET, redirect follow, sem nova tentativa; User-Agent do canal (canal.json › contato, por lerConfigCanal de C:/projetos/regie-v1/src/midia/canal.mjs)", lido_em: quando };
  try {
    const r = await fetch(l.url, { headers: { "User-Agent": ua }, redirect: "follow", signal: AbortSignal.timeout(45000) });
    const buf = Buffer.from(await r.arrayBuffer());
    const corpo = buf.toString("utf8");
    reg.status = r.status;
    reg.url_final = r.url;
    reg.content_type = r.headers.get("content-type");
    reg.cabecalho_date = r.headers.get("date");
    reg.cabecalho_last_modified = r.headers.get("last-modified");
    reg.bytes = buf.length;
    reg.sha256 = createHash("sha256").update(buf).digest("hex");
    const ext = (reg.content_type || "").includes("json") ? "json" : "html";
    mkdirSync(PASTA_CORPOS, { recursive: true });
    const arq = join(PASTA_CORPOS, `${l.slug}.${ext}`);
    writeFileSync(arq, buf);
    reg.corpo_salvo = arq.replace(RAIZ + "\\", "").replace(RAIZ + "/", "").replace(/\\/g, "/");
    const t = corpo.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (t) reg.title = t[1].replace(/\s+/g, " ").trim();
    const rec = recusou(r.status, corpo, reg.title);
    reg.recusou = rec;
    const sn = sinais(corpo);
    if (sn.length) reg.sinais_no_corpo = sn;
    if (!rec) reg.procurado = l.procurar.map((a) => trecho(corpo, a));
    else reg.procurado = "não se procurou: a página recusou a leitura, e ela parou ali";
  } catch (e) {
    reg.erro = `${e.name}: ${e.message}${e.cause ? " (" + (e.cause.code || e.cause.message) + ")" : ""}`;
    reg.recusou = "falha de conexão; não se tentou de novo";
  }
  return reg;
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.includes("--listar")) { for (const l of LEITURAS) console.log(l.slug, "\t", l.url); return; }
  const so = (argv.find((a) => a.startsWith("--so=")) || "").slice(5).split(",").filter(Boolean);
  if (!so.length) { console.error("uso: --so=slug1,slug2 (ou --listar). Nenhum pedido sem slug: um pedido por URL."); process.exitCode = 2; return; }
  const { lerConfigCanal } = await import(pathToFileURL(join(MOTOR, "src/midia/canal.mjs")).href);
  const ua = lerConfigCanal(RAIZ).ua;
  const registro = existsSync(REGISTRO) ? JSON.parse(readFileSync(REGISTRO, "utf8")) : {
    gerado_por: "pesquisa-logos (juneau, passo research, segunda entrega)",
    nota: "Uma linha por leitura: um GET por URL, com o User-Agent do canal, sem nova tentativa (out/juneau/_pesquisa/logos-leituras.mjs). O corpo de cada resposta fica em out/juneau/_tmp/logos/leituras/ (fora do git); o sha256 aqui é o dele.",
    nao_se_pediram: NAO_SE_PEDEM,
    leituras: {},
  };
  for (const slug of so) {
    const l = LEITURAS.find((x) => x.slug === slug);
    if (!l) { console.error("slug desconhecido:", slug); continue; }
    if (registro.leituras[slug]) { console.error(`já lido em ${registro.leituras[slug].lido_em}: não peço de novo (${slug})`); continue; }
    const reg = await ler(l, ua);
    registro.leituras[slug] = reg;
    const achados = Array.isArray(reg.procurado) ? reg.procurado.filter((p) => p.achou).length + "/" + reg.procurado.length : "-";
    console.log(`${slug}\t${reg.status ?? "-"}\t${reg.recusou || "ok"}\tachados ${achados}\t${reg.url_final || ""}`);
    await new Promise((r) => setTimeout(r, 1200));
  }
  registro.atualizado_em = new Date().toISOString();
  writeFileSync(REGISTRO, JSON.stringify(registro, null, 1) + "\n");
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
