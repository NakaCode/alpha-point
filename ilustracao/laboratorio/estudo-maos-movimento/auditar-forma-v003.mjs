// Rasterização de código Canvas em Node; não substitui inspeção no navegador.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import * as hand from './maos-forma-v003.mjs';
const require=createRequire(import.meta.url);
let Canvas;
try{Canvas=require('@napi-rs/canvas')}catch{
 const installed=process.env.ALPHA_CANVAS_MODULE||path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@napi-rs/canvas');
 if(!fs.existsSync(installed))throw new Error('Canvas local indisponível. NÃO MEDIDO. Informe ALPHA_CANVAS_MODULE; não instalar automaticamente.');
 Canvas=require(installed);
}
const theme={fundo:'#0E1726',superficie:'#172338',papel:'#ECE8DF',tinta:'#F4F1EA',contorno:'#737D8E',protagonista:'#F5A524',contraparte:'#2EC4B6',risco:'#E4572E'};
const hash=x=>createHash('sha256').update(x).digest('hex');
function paint(t,gesto,themeArg=theme,debug=false){
 const canvas=Canvas.createCanvas(960,540),ctx=canvas.getContext('2d');
 const state=hand.sample(t,{gesto}),before=JSON.stringify(state);
 const transform=[...Object.values(ctx.getTransform().toJSON())];
 hand.draw(ctx,state,themeArg,debug);
 assert.equal(JSON.stringify(state),before,'draw alterou estado');
 assert.deepEqual([...Object.values(ctx.getTransform().toJSON())],transform,'transformação vazou');
 return canvas;
}
const outDir=new URL('./evidencias-v003/',import.meta.url);fs.mkdirSync(outDir,{recursive:true});
// O consumidor pode guardar/editar uma cópia sem contaminar amostras futuras.
function disturbArrays(value){if(Array.isArray(value)){for(let i=0;i<value.length;i++){if(typeof value[i]==='number')value[i]+=13;else disturbArrays(value[i]);}}else if(value&&typeof value==='object'){for(const nested of Object.values(value))disturbArrays(nested);}}
for(const gesto of ['fechamento','pinca','punho']){const expected=JSON.stringify(hand.sample(5,{gesto})),changed=hand.sample(5,{gesto});disturbArrays(changed);assert.equal(JSON.stringify(hand.sample(5,{gesto})),expected,'arrays compartilhados entre amostras: '+gesto);}
const poses=[['ABERTA',0,'fechamento'],['FLEXÃO',2.4,'fechamento'],['FECHADA',5,'fechamento'],['PINÇA',5,'pinca'],['PUNHO',2.2,'punho'],['RETORNO',9,'fechamento']];
function contactSheet(){
 const canvas=Canvas.createCanvas(1440,1040),ctx=canvas.getContext('2d');ctx.fillStyle=theme.fundo;ctx.fillRect(0,0,1440,1040);
 for(let i=0;i<poses.length;i++){
  const [label,t,gesto]=poses[i],x=(i%3)*480,y=Math.floor(i/3)*520;
  ctx.drawImage(paint(t,gesto),260,40,440,430,x+20,y+48,440,430);
  ctx.font='19px sans-serif';ctx.fillStyle=theme.papel;ctx.fillText(label,x+24,y+30);
  ctx.font='14px sans-serif';ctx.fillStyle=theme.contorno;ctx.fillText(t.toFixed(1)+' s · vista frontal dirigida',x+24,y+497);
 }
 fs.writeFileSync(new URL('prancha.png',outDir),canvas.toBuffer('image/png'));
}
contactSheet();
if(process.argv.includes('--prancha'))process.exit(0);
const modes={};
for(const gesto of ['fechamento','pinca','punho']){
 let bounds=[Infinity,Infinity,-Infinity,-Infinity],previous=null,maxStep=0,minPixels=Infinity;const hashes=new Set();
 for(let frame=0;frame<=360;frame++){
  const canvas=paint(frame/30,gesto),data=canvas.getContext('2d').getImageData(0,0,960,540).data;
  const b=[Infinity,Infinity,-Infinity,-Infinity];let count=0;
  for(let i=0;i<960*540;i++){
   assert.equal(data[i*4+3],255,'pixel transparente no canvas de demonstração');
   if(data[i*4]===14&&data[i*4+1]===23&&data[i*4+2]===38)continue;
   count++;const x=i%960,y=Math.floor(i/960);b[0]=Math.min(b[0],x);b[1]=Math.min(b[1],y);b[2]=Math.max(b[2],x);b[3]=Math.max(b[3],y);
  }
  assert(count>6000,'desenho ausente ou excessivamente pequeno');minPixels=Math.min(minPixels,count);
  if(previous)maxStep=Math.max(maxStep,...b.map((v,j)=>Math.abs(v-previous[j])));previous=b;
  bounds=[Math.min(bounds[0],b[0]),Math.min(bounds[1],b[1]),Math.max(bounds[2],b[2]),Math.max(bounds[3],b[3])];hashes.add(hash(data));
 }
 assert(bounds[0]>=50&&bounds[1]>=40&&bounds[2]<=910&&bounds[3]<=465,gesto+' fora de área segura: '+bounds);
 assert(maxStep<12,gesto+' salto do envelope: '+maxStep);
 assert(hashes.size>60,gesto+' não demonstra animação contínua suficiente');
 const times=[0,1.3,2.4,4,5,7.1,9,12],expected=times.map(t=>hash(paint(t,gesto).toBuffer('image/png')));
 for(let i=times.length-1;i>=0;i--)assert.equal(hash(paint(times[i],gesto).toBuffer('image/png')),expected[i],'depende da ordem da consulta');
 modes[gesto]={frames:361,bounds,minForegroundPixels:minPixels,maxBoundsChangePerFrame:maxStep,distinctFrames:hashes.size,seekDeterministic:true};
}
const alternate={...theme,fundo:'#F4F1EA',papel:'#B88269',contorno:'#533A36',superficie:'#355D7A'};
assert.notEqual(hash(paint(5,'fechamento',alternate).toBuffer('image/png')),hash(paint(5,'fechamento').toBuffer('image/png')));
const report={date:'2026-10-05',status:'PASS',moduleSha256:hash(fs.readFileSync(new URL('./maos-forma-v003.mjs',import.meta.url))),pinchModuleSha256:hash(fs.readFileSync(new URL('./pinca-forma-v003.mjs',import.meta.url))),modes,checks:['rasterização Canvas real em Node','draw sem mutação de estado e transformação','enquadramento em 1083 quadros','seek fora de ordem','roupa alternativa'],limits:['Limites de pixels e determinismo não aprovam anatomia, oclusão, intenção ou naturalidade.','Contornos de poses dirigidas não demonstram ossos de comprimento constante, contato físico 3D ou câmeras arbitrárias.','Aceite visual de Lucas pendente; QC oficial não medido.']};
fs.writeFileSync(new URL('./resultados-forma-v003.json',import.meta.url),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
