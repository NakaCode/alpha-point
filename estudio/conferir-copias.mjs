#!/usr/bin/env node
// AS CÓPIAS DO PACOTE ESTÃO EM DIA COM A MARCA? (Sala de controle do Alpha Point, 24/10/2026)
//
// O pacote do motor sem rosto (estudio/) guarda duas coisas que nascem de marca/ e envelhecem quando ela anda:
//   1. a SEMENTE da obra, estudio/semente/marca/: a cópia byte a byte de marca/tokens.css e de marca/fontes/, que o
//      motor copia para <obra>/_media/marca/ (canal-motor.json › obra_semente) e que as cenas ligam por
//      ../_media/marca/tokens.css. O motor não aceita `..` no `de` da semente (semente.mjs:30; o schema, linha 673): por
//      isso a cópia mora dentro do pacote. O sha256 de cada arquivo fica em estudio/semente/ORIGEM.json, com o do
//      estudio/semente/motor.css, que é do pacote (o crédito a 60 px por cima da marca) e vai a _media/marca/motor.css;
//   2. a ROUPA destilada, estudio/marcas/alpha-point/: o LEIA.md dela lista o sha256 de cada fonte lida. Aqui só as
//      fontes de marca/ são cobradas (as de out/, roteiros/, CLAUDE.md e canal.json mudam a cada vídeo).
//
// Uso (da raiz do repositório do canal):
//   node estudio/conferir-copias.mjs             confere tudo; não grava nada
//   node estudio/conferir-copias.mjs --copiar    refaz a semente a partir de marca/ e regrava o ORIGEM.json
// Saídas: 0 em dia · 1 alguma cópia envelheceu (ou sobra/falta arquivo) · 2 uso errado ou arquivo ilegível.
// Rode antes de cada commit do pacote. Nada aqui lê chave, rede ou cofre.
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const PACOTE = resolve(dirname(fileURLToPath(import.meta.url)));
const REPO = resolve(PACOTE, "..");
const SEMENTE = join(PACOTE, "semente", "marca");
const ORIGEM = join(PACOTE, "semente", "ORIGEM.json");
const LEIA_ROUPA = join(PACOTE, "marcas", "alpha-point", "LEIA.md");
// o que a semente leva: o tokens.css e a pasta das fontes inteira (os url() do tokens.css são relativos a ele)
const FONTE_DA_SEMENTE = ["marca/tokens.css", "marca/fontes"];
// o que a semente leva e é DO PACOTE, não cópia da marca: o que o motor põe por cima do tokens.css (o crédito a 60 px,
// Lucas, 24/10/2026), semeado ao lado dele; o nome não pode existir em marca/, ou as duas entradas cairiam no mesmo lugar
const PROPRIOS = { "motor.css": "_media/marca/motor.css" };

const sha256 = (f) => createHash("sha256").update(readFileSync(f)).digest("hex");
const barra = (p) => p.split(sep).join("/");
// os mesmos critérios do semente.mjs do motor: arquivo que começa por ponto fica de fora
function arquivosDe(raiz) {
  if (!existsSync(raiz)) return [];
  if (statSync(raiz).isFile()) return [raiz];
  return readdirSync(raiz, { withFileTypes: true }).filter((e) => !e.name.startsWith("."))
    .flatMap((e) => (e.isDirectory() ? arquivosDe(join(raiz, e.name)) : e.isFile() ? [join(raiz, e.name)] : []));
}
/** marca/<rel> → semente/marca/<rel> */
const fontes = () => FONTE_DA_SEMENTE.flatMap((p) => arquivosDe(join(REPO, p))).map((f) => barra(relative(join(REPO, "marca"), f))).sort();
const git = (...a) => { const r = spawnSync("git", ["-C", REPO, ...a], { encoding: "utf8" }); return r.status === 0 ? r.stdout.trim() : null; };

function conferirSemente(achados) {
  const daMarca = fontes();
  const naCopia = arquivosDe(SEMENTE).map((f) => barra(relative(SEMENTE, f))).sort();
  let origem = null;
  try { origem = JSON.parse(readFileSync(ORIGEM, "utf8")); } catch { achados.push(`semente: falta ou não lê ${barra(relative(REPO, ORIGEM))} (rode --copiar)`); }
  for (const rel of daMarca) {
    const de = join(REPO, "marca", rel), para = join(SEMENTE, rel);
    if (!existsSync(para)) { achados.push(`semente: falta estudio/semente/marca/${rel} (marca/${rel} existe)`); continue; }
    const a = sha256(de), b = sha256(para);
    if (a !== b) achados.push(`semente: estudio/semente/marca/${rel} difere de marca/${rel} (a marca andou: rode --copiar)`);
    const reg = origem?.arquivos?.[rel]?.sha256;
    if (origem && reg !== b) achados.push(`semente: o ORIGEM.json registra ${reg ? reg.slice(0, 12) : "nada"} para ${rel}, e a cópia é ${b.slice(0, 12)}`);
  }
  for (const rel of naCopia) if (!daMarca.includes(rel)) achados.push(`semente: estudio/semente/marca/${rel} sobra (não existe mais em marca/)`);
  if (origem) for (const rel of Object.keys(origem.arquivos || {})) if (!naCopia.includes(rel)) achados.push(`semente: o ORIGEM.json cita ${rel}, que não está na cópia`);
  for (const [nome, destino] of Object.entries(PROPRIOS)) {
    const f = join(PACOTE, "semente", nome);
    if (!existsSync(f)) { achados.push(`semente: falta estudio/semente/${nome} (o que o pacote põe por cima da marca)`); continue; }
    const rel = destino.replace(/^_media\/marca\//, "");
    if (daMarca.includes(rel)) achados.push(`semente: marca/${rel} passou a existir e cairia no mesmo lugar que estudio/semente/${nome} (${destino})`);
    const reg = origem?.proprios?.[nome]?.sha256;
    if (origem && reg !== sha256(f)) achados.push(`semente: o ORIGEM.json registra ${reg ? reg.slice(0, 12) : "nada"} para ${nome}, e o arquivo é ${sha256(f).slice(0, 12)} (rode --copiar)`);
  }
  return { daMarca: daMarca.length, naCopia: naCopia.length };
}

function conferirRoupa(achados) {
  if (!existsSync(LEIA_ROUPA)) { achados.push(`roupa: falta ${barra(relative(REPO, LEIA_ROUPA))}`); return { cobradas: 0, fora: 0 }; }
  let cobradas = 0, fora = 0;
  for (const l of readFileSync(LEIA_ROUPA, "utf8").split(/\r?\n/)) {
    const m = l.match(/^([0-9a-f]{64})\s{2}(\S.*)$/);
    if (!m) continue;
    const caminho = m[2].trim();
    if (!caminho.startsWith("marca/")) { fora++; continue; }
    cobradas++;
    const f = join(REPO, caminho);
    if (!existsSync(f)) { achados.push(`roupa: ${caminho} não existe mais (a roupa o cita como fonte)`); continue; }
    if (sha256(f) !== m[1]) achados.push(`roupa: ${caminho} mudou desde a destilação (registrado ${m[1].slice(0, 12)}, hoje ${sha256(f).slice(0, 12)})`);
  }
  return { cobradas, fora };
}

function copiar() {
  const lista = fontes(), arquivos = {};
  for (const rel of lista) {
    const de = join(REPO, "marca", rel), para = join(SEMENTE, rel);
    mkdirSync(dirname(para), { recursive: true });
    if (!existsSync(para) || sha256(para) !== sha256(de)) copyFileSync(de, para);
    arquivos[rel] = { origem: `marca/${rel}`, bytes: statSync(para).size, sha256: sha256(para) };
  }
  const doc = {
    schema: "alpha-point-semente/1",
    o_que_e: "a cópia byte a byte de marca/tokens.css e de marca/fontes/ que o motor sem rosto semeia em <obra>/_media/marca/ (canal-motor.json › obra_semente); as cenas ligam ../_media/marca/tokens.css",
    porque_copia: "o motor recusa `..` no `de` da semente (scripts/sem-rosto/semente.mjs:30 e canais/canal-motor.schema.json:673): o que a obra semeia tem de morar dentro do pacote",
    commit_do_canal: git("rev-parse", "--short", "HEAD"),
    ultimo_commit_da_fonte: git("log", "-1", "--format=%h", "--", ...FONTE_DA_SEMENTE),
    copiado_em: new Date().toISOString().slice(0, 10),
    como_conferir: "node estudio/conferir-copias.mjs (sai 0 com a cópia em dia); --copiar refaz",
    arquivos,
    proprios: Object.fromEntries(Object.entries(PROPRIOS).filter(([n]) => existsSync(join(PACOTE, "semente", n))).map(([n, destino]) => {
      const f = join(PACOTE, "semente", n);
      return [n, { destino, o_que_e: "do pacote, não da marca: vai por cima do tokens.css (as cenas o ligam depois dele)", bytes: statSync(f).size, sha256: sha256(f) }];
    })),
  };
  writeFileSync(ORIGEM, JSON.stringify(doc, null, 2) + "\n");
  console.log(`✓ semente refeita: ${lista.length} arquivo(s) de marca/ em estudio/semente/marca/, ORIGEM.json gravado`);
}

function main(argv) {
  const desconhecidos = argv.filter((a) => a !== "--copiar");
  if (desconhecidos.length) { console.error(`uso: node estudio/conferir-copias.mjs [--copiar]  (não sei: ${desconhecidos.join(" ")})`); return 2; }
  try {
    if (argv.includes("--copiar")) copiar();
    const achados = [];
    const s = conferirSemente(achados), r = conferirRoupa(achados);
    for (const a of achados) console.log(`✗ ${a}`);
    console.log(`semente: ${s.naCopia} arquivo(s) na cópia, ${s.daMarca} em marca/ · roupa: ${r.cobradas} fonte(s) de marca/ conferida(s), ${r.fora} de fora de marca/ não cobrada(s)`);
    if (achados.length) { console.log(`✗ ${achados.length} achado(s): a cópia envelheceu`); return 1; }
    console.log("✓ as cópias do pacote estão em dia com marca/");
    return 0;
  } catch (e) { console.error(`✗ ${e.message}`); return 2; }
}

process.exit(main(process.argv.slice(2)));
