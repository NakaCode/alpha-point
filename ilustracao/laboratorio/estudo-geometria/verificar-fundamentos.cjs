/* Bancada numérica original. Não consome nem modifica qualquer asset aprovado.
 * Asserções com soluções analíticas e casos negativos; não mede qualidade visual,
 * anatomia, colisão volumétrica geral, BSP ou os seis exercícios do ESTUDO.md.
 * Uso: node verificar-fundamentos.cjs [--registrar]
 */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
if (process.argv.slice(2).some(x => x !== '--registrar')) throw new Error('Argumento desconhecido');
const EPS = 1e-8;
const add=(a,b)=>a.map((v,i)=>v+b[i]);
const sub=(a,b)=>a.map((v,i)=>v-b[i]);
const mul=(a,k)=>a.map(v=>v*k);
const dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0);
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const norm=a=>Math.hypot(...a);
const rotateY=(p,a)=>[Math.cos(a)*p[0]+Math.sin(a)*p[2],p[1],-Math.sin(a)*p[0]+Math.cos(a)*p[2]];
const rotateX=(p,a)=>[p[0],Math.cos(a)*p[1]-Math.sin(a)*p[2],Math.sin(a)*p[1]+Math.cos(a)*p[2]];
const around=(p,pivot,a)=>add(rotateY(sub(p,pivot),a),pivot);
const near=(a,b,eps=EPS)=>assert.ok(Math.abs(a-b)<=eps, `${a} difere de ${b}`);
const results=[];
function run(id,fn){results.push({id,estado:'passou',...fn()});}

run('rigidez-e-pivo',()=>{
  const pts=[];
  for(const x of [0,100])for(const y of [0,70])for(const z of [0,4])pts.push([x,y,z]);
  const pivot=[0,35,2]; let max=0;
  for(let k=0;k<=220;k++){
    const angle=k/2*Math.PI/180, moved=pts.map(p=>around(p,pivot,angle));
    near(norm(sub(around(pivot,pivot,angle),pivot)),0);
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++)
      max=Math.max(max,Math.abs(norm(sub(moved[i],moved[j]))-norm(sub(pts[i],pts[j]))));
  }
  assert.ok(max<EPS);
  const bad=pts.map(p=>[p[0]*1.03,p[1],p[2]]);
  assert.ok(Math.abs(norm(sub(bad[0],bad[4]))-norm(sub(pts[0],pts[4])))>1);
  return {poses:221,erro_maximo:max,controle_negativo:'Escala x de 1.03 rompe a invariancia.'};
});

run('elipse-ortografica',()=>{
  let max=0;
  for(const degrees of [0,30,60,80,90]){
    const a=degrees*Math.PI/180, projected=[];
    for(let i=0;i<720;i++){
      const t=2*Math.PI*i/720;
      projected.push(rotateX([100*Math.cos(t),100*Math.sin(t),0],a).slice(0,2));
    }
    const xx=projected.map(p=>p[0]),yy=projected.map(p=>p[1]);
    const major=(Math.max(...xx)-Math.min(...xx))/2;
    const minor=(Math.max(...yy)-Math.min(...yy))/2;
    max=Math.max(max,Math.abs(major-100),Math.abs(minor-100*Math.abs(Math.cos(a))));
  }
  assert.ok(max<EPS);
  return {inclinacoes:5,pontos_por_inclinacao:720,erro_maximo:max,limite:'Somente projecao ortografica isotropica.'};
});

function faceStatus(points){
  const n=cross(sub(points[1],points[0]),sub(points[2],points[0]));
  if(norm(n)<EPS)return 'degenerada';
  const u=mul(n,1/norm(n));
  if(points.some(p=>Math.abs(dot(sub(p,points[0]),u))>EPS))return 'nao_planar';
  const axis=u.map(Math.abs).indexOf(Math.max(...u.map(Math.abs)));
  const q=points.map(p=>p.filter((_,i)=>i!==axis));
  const orient=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
  for(let i=0;i<q.length;i++)for(let j=i+1;j<q.length;j++){
    if(j===i+1||(i===0&&j===q.length-1))continue;
    const a=q[i],b=q[(i+1)%q.length],c=q[j],d=q[(j+1)%q.length];
    if(orient(a,b,c)*orient(a,b,d)<0&&orient(c,d,a)*orient(c,d,b)<0)return 'autointersecao';
  }
  const turns=q.map((p,i)=>orient(p,q[(i+1)%q.length],q[(i+2)%q.length])).filter(v=>Math.abs(v)>EPS);
  if(!turns.length)return 'degenerada';
  if(turns.some(v=>Math.sign(v)!==Math.sign(turns[0])))return 'concava';
  return 'convexa_planar';
}
run('faces-e-controles-negativos',()=>{
  assert.equal(faceStatus([[0,0,0],[2,0,0],[2,2,0],[0,2,0]]),'convexa_planar');
  assert.equal(faceStatus([[0,0,0],[2,0,0],[2,2,0.2],[0,2,0]]),'nao_planar');
  assert.equal(faceStatus([[0,0,0],[2,0,0],[1,0.6,0],[2,2,0],[0,2,0]]),'concava');
  assert.equal(faceStatus([[0,0,0],[2,2,0],[0,2,0],[2,0,0]]),'autointersecao');
  return {casos:4,limite:'Fixtures simples; nao resolve bordas coincidentes, triangulacao ou BSP.'};
});

const cubic=(p,t)=>(1-t)**3*p[0]+3*(1-t)**2*t*p[1]+3*(1-t)*t*t*p[2]+t**3*p[3];
function extrema(p){
  const a=3*(-p[0]+3*p[1]-3*p[2]+p[3]), b=6*(p[0]-2*p[1]+p[2]),c=3*(p[1]-p[0]);
  const roots=[];
  if(Math.abs(a)<EPS){if(Math.abs(b)>EPS)roots.push(-c/b);}
  else{
    const d=b*b-4*a*c;
    if(d>=0)roots.push((-b+Math.sqrt(d))/(2*a),(-b-Math.sqrt(d))/(2*a));
  }
  const values=[0,1,...roots.filter(t=>t>0&&t<1)].map(t=>cubic(p,t));
  return [Math.min(...values),Math.max(...values)];
}
run('bounds-de-bezier',()=>{
  near(extrema([0,100,100,0])[1],75);
  assert.ok(extrema([0,100,100,0])[1]>Math.max(0,0));
  const p=[0,180,-150,0], bounds=extrema(p);
  assert.ok(bounds[0]<0&&bounds[1]>0);
  for(let k=0;k<=10000;k++){
    const value=cubic(p,k/10000);
    assert.ok(value>=bounds[0]-EPS&&value<=bounds[1]+EPS);
  }
  return {maximo_analitico_primeiro_caso:75,segundo_caso_bounds:bounds,amostras:10001,
          limite:'Uma coordenada cubica, sem stroke ou transformacao projetiva.'};
});

run('ancora-e-soltura',()=>{
  const localDoor=[3,0,0],grip=[1,2,0],pivot=[0,0,0]; let max=0;
  const free=t=>[9+t,3+2*t,1];
  for(let k=0;k<121;k++){
    const a=k*Math.PI/240,door=around(localDoor,pivot,a);
    const handRotation=a/2,root=sub(door,rotateY(grip,handRotation));
    const worldGrip=add(root,rotateY(grip,handRotation));
    max=Math.max(max,norm(sub(worldGrip,door)));
    const badGrip=add(root,grip);
    if(k===120)assert.ok(norm(sub(badGrip,door))>0.1);
  }
  assert.ok(max<EPS);
  // Uma retirada definida em mundo nao depende do angulo posterior da porta.
  const afterRelease=free(0.5);
  for(const doorAngle of [0,1,2]){
    around(localDoor,pivot,doorAngle);
    assert.deepEqual(free(0.5),afterRelease);
  }
  assert.ok(norm(sub(around(afterRelease,pivot,1),afterRelease))>1);
  return {poses:121,erro_maximo:max,limite:'Coincidencia de ancora; nenhuma colisao de volumes ou fisica.'};
});

run('normal-e-escala-nao-uniforme',()=>{
  const tangent=[1,1,0],normal=[1,-1,0],scale=[2,1,0.5];
  const tangentNew=tangent.map((v,i)=>v*scale[i]);
  const correct=normal.map((v,i)=>v/scale[i]);
  const wrong=normal.map((v,i)=>v*scale[i]);
  near(dot(tangentNew,correct),0);
  assert.ok(Math.abs(dot(tangentNew,wrong))>1);
  return {produto_correto:dot(tangentNew,correct),produto_incorreto:dot(tangentNew,wrong),
          limite:'Matriz diagonal invertivel; exemplo analitico, nao biblioteca matricial geral.'};
});

const output={estudo:'geometria-aplicada',estado:'passou',tolerancia_numerica:EPS,
  verificacoes:results,exercicios_E1_a_E6:'proposto; nao executado',
  limite:'Bancada numerica independente. Nao valida nenhum asset, video, anatomia geral ou aprovacao editorial.'};
if(process.argv.includes('--registrar'))fs.writeFileSync(path.join(__dirname,'fundamentos.resultados.json'),JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify(output));
