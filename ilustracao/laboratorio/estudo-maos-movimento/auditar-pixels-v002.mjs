import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {sample,rasterize,surfaceMesh} from './maos-forma-v002.mjs';
const theme={fundo:'#0E1726',superficie:'#172338',papel:'#ECE8DF',tinta:'#F4F1EA',contorno:'#737D8E',protagonista:'#F5A524',contraparte:'#2EC4B6',risco:'#E4572E'},bg=[14,23,38];
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const modes={};
for(const gesto of ['fechamento','pinca','punho']){
 let bounds=[Infinity,Infinity,-Infinity,-Infinity],previous=null,maxStep=0,minPixels=Infinity,maxPixels=0,maxTimeMs=0;
 for(let i=0;i<=360;i++){
  const state=sample(i/30,{gesto});const t0=performance.now(),data=rasterize(state,theme);maxTimeMs=Math.max(maxTimeMs,performance.now()-t0);
  assert(data instanceof Uint8ClampedArray);assert.equal(data.length,960*540*4);
  let b=[Infinity,Infinity,-Infinity,-Infinity],count=0;
  for(let j=0;j<960*540;j++){assert.equal(data[j*4+3],255);if(data[j*4]!==bg[0]||data[j*4+1]!==bg[1]||data[j*4+2]!==bg[2]){const x=j%960,y=Math.floor(j/960);b=[Math.min(b[0],x),Math.min(b[1],y),Math.max(b[2],x),Math.max(b[3],y)];count++;}}
  assert(count>8000,'superfície ausente ou excessivamente reduzida');
  if(previous)maxStep=Math.max(maxStep,...b.map((v,j)=>Math.abs(v-previous[j])));previous=b;
  bounds=[Math.min(bounds[0],b[0]),Math.min(bounds[1],b[1]),Math.max(bounds[2],b[2]),Math.max(bounds[3],b[3])];minPixels=Math.min(minPixels,count);maxPixels=Math.max(maxPixels,count);
  for(const face of surfaceMesh(state))for(const vertex of face.points)assert(vertex.every(Number.isFinite));
 }
 assert(bounds[0]>=50&&bounds[1]>=40&&bounds[2]<=910&&bounds[3]<=465,gesto+' fora da área segura: '+bounds);
 assert(maxStep<12,'salto do envelope em '+gesto+': '+maxStep);
 const times=[0,1.25,2.4,4,5,7.1,10.3,12],hashes=times.map(t=>hash(rasterize(sample(t,{gesto}),theme)));
 for(let k=times.length-1;k>=0;k--)assert.equal(hash(rasterize(sample(times[k],{gesto}),theme)),hashes[k],'pixels dependem da ordem da consulta');
 const a=rasterize(sample(3.125,{gesto}),theme),h=hash(a);a.fill(0);assert.equal(hash(rasterize(sample(3.125,{gesto}),theme)),h,'cache exposto a mutação');
 modes[gesto]={frames:361,pixelBounds:bounds,minForegroundPixels:minPixels,maxForegroundPixels:maxPixels,maxBoundsChangePerFrame:maxStep,maxRasterMsObserved:maxTimeMs,deterministicPixels:true};
}
const report={date:'2026-10-05',status:'PASS',moduleSha256:hash(fs.readFileSync(new URL('./maos-forma-v002.mjs',import.meta.url))),modes,limits:['Mede pixels do rasterizador local; integração no Canvas inspecionada separadamente.','Envelope estável não certifica anatomia, oclusão correta ou ausência de todos os defeitos visuais.','Tempo depende da máquina, aquecimento e concorrência; não é garantia de desempenho.','Aceite artístico de Lucas pendente.']};
fs.writeFileSync(new URL('./pixels-v002-resultados.json',import.meta.url),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
