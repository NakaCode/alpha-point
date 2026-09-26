#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-hex.mjs (linhas 1-141, commit 4afda12).
// O que mudou: a dica de uso (barra invertida do Windows, caminho por path.join) e o alvo inexistente — o `*.html` literal que o
// terminal do Windows não expande — sai 2 (NÃO MEDIDO) com a dica "passe a pasta", em vez do ENOENT que saía 1. Os dois furos da ARTE-190
// (caractere de largura total fatiando o token; só a 1ª parada do gradiente examinada) já estavam fechados na origem
// e seguem aqui intactos — o teste testes/portoes-estaticos.test.mjs prova os dois.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// Uso: node scripts/qc-hex.mjs <arquivo.html | out/<proj>/graphics>
//
// Caça hex CORROMPIDO — o defeito real: uma cor que virou lixo num replace mal feito
// (`#08182cpx`, `#1a2b3` com 5 dígitos), fazendo a regra CSS inteira ser descartada em silêncio.
//
// POR QUE ESTE SCRIPT EXISTE (medido em 03/ago/2026, ~400 HTMLs do acervo):
// o teste que o CLAUDE.md documentava — `grep -oE '#[0-9A-Fa-f]{3,8}[a-z]'`, "tem que voltar vazio" —
// acusava 44 de 400 arquivos e **nenhum** era defeito. Dois falsos positivos estruturais:
//   1. Backtracking: em `#050d16` o `{3,8}` recua para `#050` e o `d` seguinte casa `[a-z]`.
//      Todo hex de 6 dígitos com letra minúscula no meio "reprova" — ou seja, a paleta navy da casa.
//   2. SELETOR não é COR: a casa nomeia IDs com ano e camelCase (`#b1822{`, `#beamA`, `#accHot`).
//      `acc`/`b18` são dígitos hex válidos, então o seletor casa com qualquer regex de hex.
// Um gate que sempre reprova é um gate que ninguém obedece — e pior, convida o executor a
// "consertar" uma cor que estava certa. Por isso a checagem olha só hex em POSIÇÃO DE VALOR.
import fs from 'node:fs';
import path from 'node:path';

const VALIDOS = new Set([3, 4, 6, 8]);          // comprimentos que o CSS aceita
// Só hex precedido de PROPRIEDADE DE COR. Sem isso o check recai no erro que ele existe para
// corrigir: `E('#beamB')` e `url(#cow)` são SELETORES em posição de valor, e `beamB`/`cow`
// começam com dígitos hex válidos. Cor tem nome; seletor não.
const PROPS = 'color|background|background-color|fill|stroke|border|border-color|border-top|'
  + 'border-right|border-bottom|border-left|box-shadow|text-shadow|stop-color|outline|'
  + 'outline-color|caret-color|column-rule|text-decoration-color|flood-color|lighting-color';
// ⚠️ DOIS FUROS FECHADOS EM 09/ago/2026, os dois no MESMO defeito real (`#050F２8`, largura total,
// numa cena de split que o autor releu duas vezes sem ver). Antes: `…[^;"'{}]*?(#[A-Za-z0-9_-]+)`.
//  1. **O valor inteiro passa a ser lido, não o primeiro hex dele.** Com o `*?` preguiçoso, o
//     regex casava UMA vez por propriedade e parava no primeiro `#`. Num
//     `background:linear-gradient(178deg,#061634 0%,#071B3E 40%,#050F２8 72%,#03091A 100%)` só a
//     PRIMEIRA parada era examinada — as outras três nunca foram checadas por este gate, em
//     nenhuma cena, desde que ele existe. Gradiente é a construção mais comum da casa.
//  2. **O token não pode terminar no caractere estranho — é ele o defeito.** `[A-Za-z0-9_-]` não
//     cobre não-ASCII, então o `２` fatiava o token em `#050F`: quatro dígitos, comprimento legal,
//     PASS. O lixo que o gate procura era exatamente o que fechava o token e o inocentava.
//     Homóglifo (`С` cirílico), largura total e traço tipográfico entram todos por essa porta — e
//     são os piores, porque revisão humana não os enxerga.
const DECL_COR = new RegExp(`(?:${PROPS})\\s*[:=]\\s*("[^"]*"|'[^']*'|[^;{}]*)`, 'gi');
const HEX_TOKEN = /#[^\s;,"'(){}<>[\]/!=]+/g;
// `fill:url(#ceuG)` é referência a <linearGradient>, não cor — e `ceu`/`bojoG` começam com dígitos
// hex, então fatiar o token acusaria meio acervo. Referência sai antes de qualquer classificação.
const REF_URL = /url\(\s*["']?#[A-Za-z0-9_-]+/gi;
// Unidade CSS grudada é a assinatura MAIS COMUM do replace mal feito (`#08182c` + `px`) e ganha
// mensagem própria, porque o conserto dela é óbvio (apagar o sufixo).
const UNIDADE = /^(px|em|rem|ex|ch|vh|vw|vmin|vmax|pt|pc|cm|mm|in|deg|rad|turn|s|ms|fr)$/i;
//
// ⚠️ MAS UNIDADE NÃO É A ÚNICA CORRUPÇÃO — este gate deu PASS num defeito real (08/ago/2026).
// Na `s46` do `cerebro-quando-sonha`: `<circle … fill="#071late827" opacity="0"/>`. O token fatia
// em hex `071` (comprimento 3, legal) + sufixo `late827`, que não é unidade — e a regra antiga
// deixava passar, por assumir que "qualquer outra letra depois do hex é nome de identificador".
// Essa premissa vale para SELETOR, e seletor não chega aqui: `EM_VALOR` exige propriedade de cor
// antes, e `REF_URL` já removeu `url(#id)`. Sobrou só posição em que `#token` SÓ pode ser cor —
// logo, token que não é hex válido é corrupção, seja qual for o sufixo.
// MEDIDO antes de mudar, contra 462 HTMLs (todo `out/*/graphics` + os exemplares dourados):
// a regra ampla acusa **0 arquivo a mais** que a antiga. Não troquei ruído por cobertura.
// O caso da s46 é o pior tipo: `opacity="0"` num elemento coberto, então a tela não denuncia nada
// — o defeito fica dormindo até alguém animar a opacidade e ganhar um círculo preto de 482 px.

// ⚠️ FURO FECHADO EM 19/ago/2026: COMENTÁRIO NÃO É CÓDIGO, e a prosa desta casa fala CSS.
// A `s025` do `orcas-nao-matam` foi acusada de três hex corrompidos (`#vig`, `#grain`,
// `#3EC8FF→#FFB13D`) que só existiam no cabeçalho de documentação — o CSS real da cena está
// correto. O mecanismo: o comentário escreve `box-shadow: 0 …` ao EXPLICAR a decisão, o
// `DECL_COR` casa a propriedade e o `[^;{}]*` atravessa quebra de linha, então ele engole o
// parágrafo inteiro até o próximo `;` ou `{` — parágrafo que cita `#vig` e `#grain` em prosa.
// Quanto mais bem documentada a cena, mais alarme falso ela produz; e as nossas são documentadas
// por obrigação da ROUPA-CENA. Hex dentro de comentário NUNCA é pintado pelo navegador, então o
// defeito que este gate existe para achar (cor que o browser descarta) não pode morar aqui.
// O `qc-contrato.mjs` já limpava comentários pelo mesmo motivo; este não limpava.
const COMENTARIOS = [/<!--[\s\S]*?-->/g, /\/\*[\s\S]*?\*\//g];

function checa(file) {
  let src = fs.readFileSync(file, 'utf8').replace(REF_URL, 'url(');   // gradiente SVG sai da conta
  for (const re of COMENTARIOS) src = src.replace(re, ' ');           // comentário não é pintado
  const achados = [];
  const tokens = [];
  for (const d of src.matchAll(DECL_COR)) for (const h of (d[1] || '').matchAll(HEX_TOKEN)) tokens.push(h[0]);
  for (const bruto of tokens) {
    const token = bruto.slice(1);                      // sem o '#'
    const corte = token.search(/[^0-9A-Fa-f]/);        // onde deixa de ser hex
    if (corte === -1) {                                // token 100% hex → só o comprimento decide
      if (!VALIDOS.has(token.length)) {
        achados.push({ txt: '#' + token, por: `${token.length} dígitos (CSS aceita 3, 4, 6 ou 8)` });
      }
      continue;
    }
    const hex = token.slice(0, corte), sufixo = token.slice(corte);
    // hex de comprimento legal + unidade CSS colada = a assinatura do replace que corrompeu a cor
    if (VALIDOS.has(hex.length) && UNIDADE.test(sufixo)) {
      achados.push({ txt: '#' + token, por: `unidade "${sufixo}" grudada na cor #${hex}` });
    } else {
      // qualquer outro lixo depois do hex, em posição que só aceita cor (ver nota da UNIDADE)
      achados.push({ txt: '#' + token, por: `"${sufixo}" não é hex — a cor pretendida era #${hex}` });
    }
  }
  return achados;
}

// ⚠️ ACEITA VÁRIOS ALVOS — porque o glob é o instinto de quem chama, e ler só o argv[2] devolve
// falso verde ([SIS-165], 08/ago). Medido no `cerebro-quando-sonha@arte`: `qc-hex.mjs
// graphics/*.html` com 60 cenas imprimiu "✓ hex OK em 1 arquivo(s)" e saiu 0 — o shell expande o
// glob em 60 argumentos e o gate media o primeiro. É o MESMO defeito que o `qc-contrato` tinha na
// véspera, onde custou a afirmação "60/60 passaram" feita em cima de uma cena medida.
// A contagem no rodapé é a prova: veredito verde só vale com a população atrás dele.
const alvos = process.argv.slice(2).filter(a => !a.startsWith('-'));
if (!alvos.length) { console.error('uso: node scripts/qc-hex.mjs <arquivo.html | pasta> [mais arquivos…]'); process.exit(2); }

const alvo = alvos[0];   // usado só nas mensagens de ajuda abaixo
// [porte Régie] ALVO INEXISTENTE É NÃO MEDI (2), com a dica — nunca o ENOENT solto que sai 1 ("reprovei"). No PowerShell e
// no cmd o `*.html` NÃO se expande: o gate recebe o texto literal "out\v\graphics\*.html". A pasta serve igual.
for (const a of alvos) if (!fs.existsSync(a)) {
  console.error(`✗ não encontrado: ${a} — NÃO MEDIDO (não é reprovação).`);
  if (/[*?]/.test(a)) console.error(`  O terminal do Windows não expande *.html: passe a PASTA das cenas: node scripts/qc-hex.mjs ${path.dirname(a)}`);
  process.exit(2);
}
const files = alvos.flatMap(a => fs.statSync(a).isDirectory()
  ? fs.readdirSync(a).filter(f => f.endsWith('.html')).map(f => path.join(a, f))
  : [a]);

// ⚠️ ZERO ARQUIVO NÃO É "TUDO LIMPO" — é NÃO MEDIDO, e sair 0 aqui é falso verde ([SIS-76]).
//
// Medido em 04/ago/2026 na estação de QC do `o-acre-o-estado-que-o`. A pasta de um projeto tem
// `graphics/` dentro, não `.html` soltos — então `qc-hex.mjs out/<proj>` varria zero arquivo e
// imprimia, com o mesmo ✓ verde de sempre, "hex OK em 0 arquivo(s)", saindo 0. Quem lê o log vê
// um gate satisfeito; quem confia nele entrega arte que ninguém checou. (Chamar com o SLUG do
// projeto, `qc-hex.mjs o-acre-…`, é melhor por acidente: o `statSync` estoura e o crash pelo menos
// aparece.) O caminho certo é `out/<proj>/graphics`, e aí as 71 cenas medem.
//
// Vale a regra geral dos gates da casa: o veredito verde precisa ter uma POPULAÇÃO atrás dele.
// Sem alvo medido não há aprovação a dar — exit 2 (não medido), que nenhum portão lê como PASS.
if (!files.length) {
  console.error(`✗ nenhum .html em ${alvo} — NÃO MEDIDO (não é aprovação).`);
  // [porte Régie] a barra do fim pode ser a invertida do Windows; e o caminho sugerido é montado com path.join.
  console.error(`  A pasta de projeto guarda as cenas em graphics/: node scripts/qc-hex.mjs ${path.join(alvo.replace(/[\\/]+$/, ''), 'graphics')}`);
  process.exit(2);
}

let mau = 0;
for (const f of files) {
  const achados = checa(f);
  if (!achados.length) continue;
  mau++;
  console.log(`✗ ${f}`);
  for (const a of achados) console.log(`    ${a.txt}  →  ${a.por}`);
}

console.log(mau
  ? `\n✗ ${mau} de ${files.length} arquivo(s) com hex corrompido`
  : `✓ hex OK em ${files.length} arquivo(s) (seletor de ID não é cor — não é acusado)`);
process.exit(mau ? 1 : 0);
