#!/usr/bin/env node
// AS PEÇAS DE CADA VÍDEO DO ALPHA POINT para o master do motor comum (frente A · Qint, 21/out/2026).
//
// O motor sem rosto (top10-estudio, canal-motor.json › master.pecas_da_obra) roda esta ferramenta antes do plano do
// master, com o cwd no pacote do canal e o ambiente do cofre, e de novo quando a narração muda:
//   node pecas/pecas-da-obra.mjs <slug> --obra=<pasta da obra> [--seco]
// Ela grava o que o canal-motor.json declara em `gera`:
//   _master/sobreposicoes.json  {sobreposicoes:[{arquivo (relativo à obra), ini_s, dur_s, x, y, papel}]}
//   _master/logo.json           {desde_s}: a marca d'água começa no último quadro da vinheta (identidade §8)
// e as peças em _master/pecas/<peça>-<lugar>.mov (ProRes 4444 com alfa, 3840×2160, pelo gravador do canal,
// marca/cta/_capturar.mjs), mais um recibo.
//
// De onde vem cada instante:
//   · a VINHETA (marca/vinheta/vinheta.html) corre sobre a assinatura do gancho, achada no words-final.json da obra:
//     de «You're» («You're at Alpha Point, and this is where the story of <tema> begins.») ao fim de «begins.» + 0,25 s,
//     de 4 a 8 s (o cabeçalho da peça); com menos de 4 s, grava 4 (a página avisa); com mais de 8, para;
//   · as CHAMADAS (inscrição e comentário) são do regente, como no jeito de hoje. No motor comum, o regente as declara em
//     _regencia-auditoria-agente.json e o montar-regencia as passa a regencia.json › auditoria._chamadas; o topo
//     (regencia.json › _chamadas, o jeito da Régie) fica como reserva. Cada linha: peca, lugar, inSec, dur, q. A pergunta do comentário é o `q` da linha ou o textos-tela.json › pergunta_cta.
//     Linha com `estado` (decisão pendente do Lucas) não entra, como no xml-chamadas.py. Sem _chamadas, sai sem chamada.
//
// Saídas: 0 gravou tudo; 2 PARA (o condutor espera gente: assinatura ausente, vinheta acima de 8 s, gravador ou
// dependência faltando); 1 erro inesperado. Nunca apaga nada; grava cada JSON por arquivo .parcial + rename.
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const PACOTE = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REPO = resolve(PACOTE, "..");
const GRAVADOR = join(REPO, "marca/cta/_capturar.mjs");
const PECAS = {
  vinheta: join(REPO, "marca/vinheta/vinheta.html"),
  inscricao: join(REPO, "marca/cta/pecas/inscricao.html"),
  comentario: join(REPO, "marca/cta/pecas/comentario.html"),
};
const LUGARES = { vinheta: ["centro"], inscricao: ["baixo", "cima"], comentario: ["baixo", "cima", "esquerda"] };
const VINHETA_FOLGA_S = 0.25, VINHETA_MIN_S = 4, VINHETA_MAX_S = 8;
// a régua do motor para cenas e master: o master compõe as peças pelo tempo e não converte a taxa delas, e uma peça a
// 30/1 sobre a base de 30000/1001 repete ou pula um quadro a cada ~33 s (frente K, 21/out/2026)
const FPS = "30000/1001";

class Parar extends Error {}
const r3 = (x) => Math.round(x * 1000) / 1000;
const r6 = (x) => Math.round(x * 1e6) / 1e6;
const sha256 = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");
const lerJson = (p) => JSON.parse(readFileSync(p, "utf8").replace(/^﻿/, ""));
function gravarJson(p, v) { mkdirSync(dirname(p), { recursive: true }); writeFileSync(p + ".parcial", JSON.stringify(v, null, 2) + "\n"); renameSync(p + ".parcial", p); }

/** «You're», «at», «Alpha», «Point,» … «begins.» → you're, at, alpha, point … begins (apóstrofo reto ou curvo). */
export const normal = (w) => String(w).toLowerCase().replace(/[’‘`]/g, "'").replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, "");

/** A assinatura do gancho no words-final.json: {i, j, ini, fimFala} ou null. */
export function acharAssinatura(words) {
  const t = words.map((x) => normal(x.w));
  for (let i = 0; i + 3 < t.length; i++) {
    if (t[i] !== "you're" || t[i + 1] !== "at" || t[i + 2] !== "alpha" || t[i + 3] !== "point") continue;
    for (let j = i + 4; j < Math.min(t.length, i + 40); j++) if (t[j] === "begins") return { i, j, ini: words[i].start, fimFala: words[j].end };
  }
  return null;
}

/** A duração da vinheta pela regra do cabeçalho dela; lança Parar acima de 8 s. */
export function duracaoVinheta(ini, fimFala) {
  const bruta = r3(fimFala - ini + VINHETA_FOLGA_S);
  if (!(bruta > 0)) throw new Parar(`assinatura com tempo inválido (${ini} → ${fimFala})`);
  if (bruta > VINHETA_MAX_S) throw new Parar(`a assinatura dura ${bruta} s com a folga, acima dos ${VINHETA_MAX_S} s que a vinheta comporta: encurtar o tema da frase ou decidir com o Lucas`);
  return bruta < VINHETA_MIN_S ? { dur: VINHETA_MIN_S, aviso: `assinatura curta (${bruta} s): vinheta gravada com ${VINHETA_MIN_S} s, o piso da peça` } : { dur: bruta, aviso: null };
}

/** As chamadas do regente que entram: [{peca, lugar, ini, dur, q}] e as que ficaram de fora, com o motivo. */
export function chamadasDoRegente(regencia, perguntaTela) {
  const entram = [], fora = [];
  for (const c of regencia?.auditoria?._chamadas || regencia?._chamadas || []) {
    if (c.peca === "vinheta") continue; // a vinheta sai da fala, não da regência
    if (!LUGARES[c.peca]) { fora.push({ ...c, motivo: `peça desconhecida: ${c.peca}` }); continue; }
    if (c.estado) { fora.push({ peca: c.peca, inSec: c.inSec, motivo: `pendente: ${String(c.estado).slice(0, 120)}` }); continue; }
    const lugar = c.lugar || "baixo";
    if (!LUGARES[c.peca].includes(lugar)) { fora.push({ peca: c.peca, inSec: c.inSec, motivo: `lugar ${lugar} não existe na peça` }); continue; }
    if (!(Number(c.inSec) >= 0)) { fora.push({ peca: c.peca, motivo: "sem inSec" }); continue; }
    const q = c.peca === "comentario" ? (String(c.q || perguntaTela || "").trim() || null) : null;
    if (c.peca === "comentario" && !q) { fora.push({ peca: c.peca, inSec: c.inSec, motivo: "sem pergunta (nem q na linha, nem pergunta_cta no textos-tela.json)" }); continue; }
    entram.push({ peca: c.peca, lugar, ini: Number(c.inSec), dur: c.peca === "inscricao" ? 4.5 : (Number(c.dur) > 0 ? Number(c.dur) : null), q });
  }
  return { entram, fora };
}

function gravar(peca, lugar, dur, saida, extra, env) {
  const nome = `${peca}-${lugar}`;
  const args = [GRAVADOR, PECAS[peca], dur === null ? "auto" : String(dur), saida, `--nome=${nome}`, `--fps=${FPS}`, ...extra];
  if (lugar !== "baixo" && lugar !== "centro") args.push(`--lugar=${lugar}`);
  const antes = Date.now();
  const r = spawnSync(process.execPath, args, { cwd: REPO, env, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const mov = join(saida, `${nome}.mov`);
  if (r.status !== 0) throw new Parar(`o gravador do canal parou em ${nome} (saída ${r.status}): ${(r.stderr || r.stdout || "").trim().split("\n").slice(-3).join(" | ")}`);
  if (!existsSync(mov) || statSync(mov).mtimeMs < antes - 1000) throw new Parar(`o gravador saiu 0 sem deixar ${mov} desta execução`);
  const med = join(saida, `${nome}.medidas.json`);
  // a duração REAL do .mov é quadros ÷ taxa (<nome>.medidas.json). O duracao_s de lá é a pedida, e a 30000/1001 o arquivo
  // sai alguns ms mais curto (5,12 s pedidos = 153 quadros = 5,105 s): declarar a pedida abriria um vão entre o fim da
  // vinheta e o começo da marca d'água, onde um quadro do master sairia sem nenhuma das duas (medido em 21/out/2026)
  const medidas = existsSync(med) ? lerJson(med) : null;
  const durMov = Number(medidas?.quadros) / Number(medidas?.fps);
  if (!(durMov > 0)) throw new Parar(`o gravador não deixou quadros e fps em ${med}`);
  return { nome, mov, dur: durMov, aviso: medidas?.info?.aviso || null };
}

export function main(argv, env = process.env) {
  const slug = argv.find((a) => !a.startsWith("--"));
  const obraArg = argv.find((a) => a.startsWith("--obra="));
  const seco = argv.includes("--seco");
  if (!slug || !obraArg) { console.error("uso: node pecas/pecas-da-obra.mjs <slug> --obra=<pasta da obra> [--seco]"); return 2; }
  const D = resolve(obraArg.slice(7));
  try {
    const fWords = join(D, "words-final.json");
    if (!existsSync(fWords)) throw new Parar(`falta ${fWords}`);
    const words = lerJson(fWords);
    if (!Array.isArray(words) || !words.length) throw new Parar("words-final.json vazio ou fora do formato [{w, start, end}]");
    const ass = acharAssinatura(words);
    if (!ass) throw new Parar("a assinatura «You're at Alpha Point, … begins.» não está no words-final.json: sem ela não há onde pôr a vinheta (o roteiro do canal a tem desde o vídeo 2)");
    const { dur, aviso } = duracaoVinheta(ass.ini, ass.fimFala);
    const fReg = join(D, "regencia.json"), fTela = join(D, "textos-tela.json");
    const regencia = existsSync(fReg) ? lerJson(fReg) : null;
    const perguntaTela = existsSync(fTela) ? lerJson(fTela)?.pergunta_cta : null;
    const { entram, fora } = chamadasDoRegente(regencia, perguntaTela);
    const plano = { slug, vinheta: { ini: r3(ass.ini), dur, de_palavra: ass.i, ate_palavra: ass.j, aviso }, chamadas: entram, de_fora: fora,
      regencia: existsSync(fReg) ? "lida" : "ausente (sem chamadas)" };
    if (seco) { console.log(JSON.stringify(plano, null, 2)); return 0; }

    for (const p of [GRAVADOR, ...Object.values(PECAS)]) if (!existsSync(p)) throw new Parar(`falta ${p} no repositório do canal`);
    if (!existsSync(join(REPO, "node_modules/playwright-core")) || !existsSync(join(REPO, "node_modules/sharp")))
      throw new Parar(`o gravador do canal precisa de playwright-core e sharp: rode «npm ci» em ${REPO}`);
    const saida = join(D, "_master", "pecas");
    mkdirSync(saida, { recursive: true });
    const sobre = [], gravadas = [];
    const v = gravar("vinheta", "centro", dur, saida, ["--sem-trava"], env); // --sem-trava: o cabeçalho da vinheta explica
    sobre.push({ arquivo: relative(D, v.mov), ini_s: r6(ass.ini), dur_s: r6(v.dur), x: 0, y: 0, papel: "vinheta" });
    gravadas.push({ ...v, sha256: sha256(v.mov) });
    for (const c of entram) {
      const g = gravar(c.peca, c.lugar, c.dur, saida, c.q ? [`--q=${c.q}`] : [], env);
      sobre.push({ arquivo: relative(D, g.mov), ini_s: r6(c.ini), dur_s: r6(g.dur), x: 0, y: 0, papel: c.peca });
      gravadas.push({ ...g, sha256: sha256(g.mov) });
    }
    gravarJson(join(D, "_master", "sobreposicoes.json"), { sobreposicoes: sobre });
    // a marca d'água começa exatamente onde o .mov da vinheta acaba (o último quadro dela é a marca, identidade §8)
    gravarJson(join(D, "_master", "logo.json"), { desde_s: r6(ass.ini + v.dur) });
    gravarJson(join(D, "_master", "pecas-da-obra.recibo.json"), {
      schema: "alpha-point-pecas-da-obra/1", slug, em: new Date().toISOString(),
      entradas: { "words-final.json": sha256(fWords), "regencia.json": existsSync(fReg) ? sha256(fReg) : null },
      plano, gravadas: gravadas.map((g) => ({ arquivo: relative(D, g.mov), dur_s: g.dur, sha256: g.sha256, aviso: g.aviso })),
    });
    console.log(`✓ ${slug}: vinheta ${r3(ass.ini)} s + ${r3(v.dur)} s · marca d'água desde ${r3(ass.ini + v.dur)} s · ${entram.length} chamada(s)${fora.length ? ` · ${fora.length} de fora` : ""}`);
    return 0;
  } catch (e) {
    if (e instanceof Parar) { console.error(`✗ PARA: ${e.message}`); return 2; }
    console.error(`✗ ${e?.stack || e}`); return 1;
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) process.exit(main(process.argv.slice(2)));
