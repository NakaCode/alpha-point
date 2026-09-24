// Seleção determinística de evidências: imprime SÓ os claims pedidos, com a fonte de cada um.
// É a parte do "runtime" que entrega a cada parte do roteiro apenas as evidências atribuídas.
//   node selecionar.mjs <id> [<id> ...]      (ids do tipo mec-01.3)
//   node selecionar.mjs --plano               (gera ledger-plano.txt, a visão compacta para o plano)
import fs from "node:fs";
import path from "node:path";

const AQUI = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const L = JSON.parse(fs.readFileSync(path.join(AQUI, "ledger.json"), "utf8"));
const porId = new Map(L.claims.map((c) => [c.id, c]));
const args = process.argv.slice(2);

if (args[0] === "--plano") {
  const out = [];
  out.push(`# Ledger compacto · ${L.project_id} · corte ${L.data_de_corte}`, "", `TEMA: ${L.tema}`, "");
  out.push("## Regras", ...L.regras.map((r) => `- ${r}`), "");
  out.push("## Escaladas proibidas (riscos editoriais)", ...L.escaladas_proibidas.map((r) => `- ${r}`), "");
  out.push("## Números (o que vale; os descartados vêm depois)", ...L.numeros.map((n) => `- ${n.valor} | ${n.unidade} | ${n.escopo} | ${n.data_base} | ${n.fonte}${n.obs ? ` | obs: ${n.obs}` : ""}`), "");
  out.push("## Números descartados — NÃO usar", ...L.numeros_descartados.map((n) => `- ${n.valor} | ${n.escopo} | ${n.motivo}`), "");
  out.push("## Cronologia", ...L.cronologia.map((d) => `- ${d.data}: ${d.evento} (${d.fontes.join(", ")})`), "");
  out.push("## Divergências", ...L.divergencias.map((d) => `- ${d.tema}: ${d.versoes.join(" · ")}${d.obs ? ` — ${d.obs}` : ""}`), "");
  out.push("## Voláteis", ...L.volateis.map((v) => `- ${v.item}${v.valor_hoje ? ` (hoje: ${v.valor_hoje})` : ""}`), "");
  out.push("## Lacunas", ...L.lacunas.map((l) => `- [${l.gravidade}] ${l.falta}`), "");
  out.push("## Claims (id [status; tier; papel] afirmação)", ...L.claims.map((c) => `${c.id} [${c.status}; ${c.tier}; ${c.papel}] ${c.afirmacao}`));
  fs.writeFileSync(path.join(AQUI, "ledger-plano.txt"), out.join("\n") + "\n");
  console.log(`ledger-plano.txt: ${out.length} linhas, ${(fs.statSync(path.join(AQUI, "ledger-plano.txt")).size / 1024).toFixed(0)} KB`);
  process.exit(0);
}

const faltam = args.filter((id) => !porId.has(id));
for (const id of args) {
  const c = porId.get(id);
  if (!c) continue;
  const f = L.fontes[c.fonte];
  console.log(`### ${c.id} [${c.status}; ${c.tier}; ${c.papel}]`);
  console.log(`afirmação: ${c.afirmacao}`);
  console.log(`passagem: "${c.passagem}"`);
  if (c.escopo) console.log(`escopo: ${c.escopo}`);
  console.log(`fonte: ${f.titulo} — ${f.veiculo}, ${f.data} — ${f.url}`);
  console.log("");
}
if (faltam.length) { console.log(`⛔ ids que NÃO existem no ledger: ${faltam.join(", ")}`); process.exit(1); }
