#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/medir-imagem.mjs (linhas 1-68, commit 4afda12).
// O que mudou: o teto de 40 MP deixou de ser uma constante daqui e vem do motor
// (src/midia/entrega.mjs, MAX_MEGAPIXELS — o mesmo número que a entrega de mídia usa para
// reduzir), para as duas pontas não divergirem; o conserto sugerido deixou o
// reencodar-imagem.mjs (não veio) e aponta a redução que a busca de mídia do motor já faz; arquivo
// que não é imagem legível passou a contar (saía "??" e exit 0 — verde sobre o que não mediu);
// sharp é carregado sob demanda (ausente = exit 2, não crash).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: sharp (^0.35.2),
// carregado sob demanda.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
//
// Mede dimensão e MEGAPIXELS de imagens — o gate do teto de 40 MP, acima do qual o render não
// carrega a cena direito.
//
// Existe porque o `identify` do ImageMagick, que quatro agentes de pesquisa mandavam usar, NÃO EXISTE
// NA VM (SIS-166, medido em 08/ago/2026: `which identify convert magick` sai 1, os três ausentes).
// [porte Régie] No Windows do dono também não existe. `sharp` está no package.json do canal,
// funciona nos dois sistemas, e devolve metadado estruturado em vez de texto para regex.
//
//   node scripts/medir-imagem.mjs <arquivo|pasta> [...]     # lista tudo
//   node scripts/medir-imagem.mjs <...> --so-estouro        # só o que passa do teto (sai 1 se houver)
// Exit: 0 = nenhuma acima do teto · 1 = alguma acima · 2 = alguma não deu para ler (ou sem sharp)
import { readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { importarDependencia, morrerComoNaoMedido, NAO_MEDIDO } from "./lib/nao-medido.mjs";
import { importarDoMotor } from "./lib/motor.mjs";

morrerComoNaoMedido("medir-imagem");
const EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".avif", ".gif"]);

const args = process.argv.slice(2);
const soEstouro = args.includes("--so-estouro");
const alvos = args.filter((a) => !a.startsWith("--"));

if (!alvos.length) {
  console.error("uso: node scripts/medir-imagem.mjs <arquivo|pasta> [...] [--so-estouro]");
  process.exit(2);
}

// [porte Régie] UM dono do número: a entrega de mídia do motor reduz acima de MAX_MEGAPIXELS, e este
// gate acusa acima do MESMO valor. Sem o motor, vale o 40 do estúdio — e o laudo diz de onde veio.
let TETO_MP = 40, tetoDe = "estúdio (motor não achado)";
try { TETO_MP = (await importarDoMotor("src/midia/entrega.mjs")).MAX_MEGAPIXELS; tetoDe = "motor"; } catch { /* segue com 40 */ }
const sharp = (await importarDependencia("sharp")).default;

const expandir = (p) => {
  try {
    if (!statSync(p).isDirectory()) return [p];
    return readdirSync(p)
      .filter((f) => EXT.has(extname(f).toLowerCase()))
      .map((f) => join(p, f));
  } catch {
    return [p]; // deixa o sharp reportar o erro real do arquivo
  }
};

const arquivos = alvos.flatMap(expandir);
let estouraram = 0, ilegiveis = 0;

for (const f of arquivos) {
  try {
    const m = await sharp(f).metadata();
    const mp = (m.width * m.height) / 1e6;
    const passou = mp > TETO_MP;
    if (passou) estouraram++;
    if (soEstouro && !passou) continue;
    const marca = passou ? "⚠️ ESTOURA" : "  ok";
    console.log(`${marca}  ${mp.toFixed(1).padStart(5)} MP  ${m.width}×${m.height}  ${m.format}  ${f}`);
  } catch (e) {
    ilegiveis++;   // [porte Régie] não medir não é passar: conta, e o exit diz
    console.log(`  ??           —  ${f}  (não é imagem legível: ${e.message.split("\n")[0]})`);
  }
}

if (estouraram) {
  console.log(
    `\n${estouraram} acima de ${TETO_MP} MP (teto do ${tetoDe}) — o render não carrega essa imagem direito.` +
      // [porte Régie] reencodar-imagem.mjs não veio; quem reduz na Régie é a entrega de mídia do motor.
      `\nConserto: entregue a imagem pela busca de mídia do motor — ela reduz o lado maior para 5120 px e` +
      `\nregistra a redução no _PROCEDENCIA.json (reduzir à mão apaga essa procedência):` +
      `\n  node <motor>/src/ferramentas/buscar-midia.mjs <proj> entregar --cena=<id> --arquivo=<rascunho> --nome=<nome>`
  );
  process.exit(1);
}
if (ilegiveis) {
  console.log(`\n⚠ ${ilegiveis} de ${arquivos.length} arquivo(s) NÃO MEDIDO(S) — não são imagem legível. Não medir não é passar.`);
  process.exit(NAO_MEDIDO);
}
console.log(`\n${arquivos.length} imagem(ns), nenhuma acima de ${TETO_MP} MP (teto do ${tetoDe}).`);
