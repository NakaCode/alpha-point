// Junta o molde da página com os dados conferidos: node montar-pagina.mjs dados.json saida.html
import fs from "node:fs";
const [, , DADOS, SAI] = process.argv;
const d = JSON.parse(fs.readFileSync(DADOS, "utf8"));
// nada a podar: os dados da r7 já vêm só com o que a página mostra
const json = JSON.stringify(d).replace(/</g, "\\u003c");
const molde = fs.readFileSync(new URL("./pagina.template.html", import.meta.url), "utf8");
if (!molde.includes("/*__DADOS__*/")) throw new Error("molde sem marcador");
fs.writeFileSync(SAI, molde.replace("/*__DADOS__*/", () => json));
console.log(`${SAI}: ${(fs.statSync(SAI).size / 1024).toFixed(0)} KB, ${d.itens.length} itens`);
