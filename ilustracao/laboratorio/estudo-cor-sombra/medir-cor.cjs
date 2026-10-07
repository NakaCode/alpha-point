'use strict';
// Estudo numerico: le os tokens existentes; nao escreve cor, asset ou roupa.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const sourcePath=path.resolve(__dirname,'paleta-teste.css');
const bytes=fs.readFileSync(sourcePath),css=bytes.toString('utf8');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const decode=c=>c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4);
const encode=c=>c<=.0031308?12.92*c:1.055*Math.pow(c,1/2.4)-.055;
const luminance=rgb=>rgb.map(decode).reduce((sum,c,i)=>sum+c*[.2126,.7152,.0722][i],0);
const names=['fundo','painel','papel','tinta','tinta-escura','destaque','contraparte','neutro','tensao'];
const tokens=Object.fromEntries(names.map(name=>{const match=css.match(new RegExp('^\\s*--'+name+':\\s*#([a-fA-F0-9]{6})\\s*;','m'));assert(match,'Token base ausente: '+name);return[name,[0,2,4].map(i=>parseInt(match[1].slice(i,i+2),16)/255)];}));
const values=Object.fromEntries(names.map(name=>[name,luminance(tokens[name])]));
const contrast=(a,b)=>(Math.max(values[a],values[b])+.05)/(Math.min(values[a],values[b])+.05);
const comparisons=[['tinta','fundo'],['tinta-escura','papel'],['painel','fundo'],['papel','tinta'],['neutro','fundo'],['neutro','papel'],['destaque','contraparte']].map(([a,b])=>({tokens:['--'+a,'--'+b],razao:contrast(a,b)}));
const encodedMid=.5,linearMid=.5,convertedMid=encode(linearMid);
assert(Math.abs(decode(encodedMid)-.21404114048223255)<1e-12);
assert(Math.abs(convertedMid-.7353569830524495)<1e-12);
assert(Math.abs(decode(convertedMid)-linearMid)<1e-12);
let maxRoundtrip=0;
for(let i=0;i<=1000;i++){const c=i/1000;maxRoundtrip=Math.max(maxRoundtrip,Math.abs(encode(decode(c))-c));}
assert(maxRoundtrip<1e-12);
const dotResults=[0,60,90,120].map(degrees=>({angulo_graus:degrees,n_dot_l_limitado:Math.max(0,Math.cos(degrees*Math.PI/180))}));
assert(Math.abs(dotResults[1].n_dot_l_limitado-.5)<1e-12);
const evidence={versao:1,estado:'passou',tipo:'calculo_local_sem_render',fontes:[{arquivo:'paleta-teste.css',sha256:sha(bytes)},{arquivo:'medir-cor.cjs',sha256:sha(fs.readFileSync(__filename))}],reproducao:'node laboratorio/estudo-cor-sombra/medir-cor.cjs',luminancia_relativa:values,contrastes:comparisons,mistura_de_extremos_acromaticos:{mesma_proporcao:.5,media_componentes_codificados:encodedMid,luminancia_dessa_media:decode(encodedMid),media_linear_recodificada:convertedMid,luminancia_da_media_linear:decode(convertedMid)},verificacao_conversao:{amostras:1001,erro_maximo_roundtrip:maxRoundtrip},iluminacao_difusa_geometrica:dotResults,limites:['Valores de tokens opacos; nao resolve derivados CSS ou composicao com alpha.','Numeros nao medem pixels, implementacao do navegador, tela fisica, daltonismo ou legibilidade.','Nenhum limiar WCAG foi aplicado automaticamente a toda a ilustracao.','Misturas sao demonstracao matematica, nao novas cores autorizadas para cenas.','Nao representa implementacao dos tres tratamentos propostos.']};
fs.writeFileSync(path.join(__dirname,'medidas.json'),JSON.stringify(evidence,null,2)+'\n','utf8');
console.log(JSON.stringify({estado:evidence.estado,contrastes:comparisons,conversao:evidence.mistura_de_extremos_acromaticos}));
