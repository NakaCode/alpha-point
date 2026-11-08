// minutos-nomes.mjs — onde cada nome de risco de roteiros/praia-do-cassino/pronuncia.md cai na narracao.wav (08/11/2026), para a escuta
// do Lucas. Estimativa: o começo do trecho (narracao.json › segmentos) mais a fração de caracteres do trecho até o nome, vezes a duração
// do trecho; erra uns poucos segundos (a fala não tem velocidade constante). Não lê áudio nem gasta nada.
// Uso (cwd na raiz): node out/praia-do-cassino/_pesquisa/minutos-nomes.mjs
import { readFileSync } from "node:fs";
const n = JSON.parse(readFileSync("out/praia-do-cassino/narracao.json", "utf8"));
const NOMES = [
  ["Praia do Cassino", /Praia do Cassino/g],
  ["Cassino (sozinho)", /(?<!Praia do )Cassino/g],
  ["Rio Grande (a cidade)", /Rio Grande(?! do Sul)/g],
  ["Rio Grande do Sul", /Rio Grande do Sul/g],
  ["Chuí", /(?<!Barra do )Chuí/g],
  ["Barra do Chuí", /Barra do Chuí/g],
  ["Albardão", /Albardão/g],
  ["Santa Vitória do Palmar", /Santa Vitória do Palmar/g],
  ["Lagoa dos Patos", /Lagoa dos Patos/g],
  ["Lagoa Mirim", /Lagoa Mirim/g],
  ["G one", /G one/g],
  ["Padre Island", /Padre Island/g],
  ["Cox's Bazar", /Cox's Bazar/g],
];
const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
const falas = n.segmentos.filter((s) => s.tipo === "fala");
for (const [rotulo, re] of NOMES) {
  const onde = [];
  for (const s of falas) {
    for (const m of s.texto.matchAll(re)) {
      const t = s.start + (m.index / s.texto.length) * (s.end - s.start);
      onde.push(`§${s.trecho} ${mmss(t)}`);
    }
  }
  console.log(`${rotulo}: ${onde.length}× — ${onde.join("; ")}`);
}
