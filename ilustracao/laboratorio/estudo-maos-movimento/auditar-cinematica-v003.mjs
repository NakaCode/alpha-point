/** Auditoria independente: os quatro dedos FK, sua pele e o punho.
 * Não transforma desenhos dirigidos de palma/polegar em evidência cinemática.
 * Não verifica a pinça, que tem componente e contrato próprios.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import * as hand from './maos-forma-v003.mjs';

const moduleURL=new URL('./maos-forma-v003.mjs',import.meta.url);
const sha=()=>createHash('sha256').update(fs.readFileSync(moduleURL)).digest('hex');
const initialHash=sha(),groups=[],tolerance=1e-8;
const modes=['fechamento','punho'];
const clone=x=>JSON.parse(JSON.stringify(x));
const dist=(a,b)=>Math.hypot(...a.map((v,i)=>v-b[i]));
const close=(a,b,message)=>assert(Math.abs(a-b)<=tolerance,message+`: ${a} != ${b}`);
const selected=(g,id)=>g.paths.filter(p=>p.id===id).map(p=>p.commands);
function finite(value,where='estado'){
  if(typeof value==='number')assert(Number.isFinite(value),where+' não finito');
  else if(value&&typeof value==='object')for(const [key,item]of Object.entries(value))finite(item,where+'.'+key);
}
function validateBones(state,reference){
  assert.equal(state.fingers.length,4,'esperados quatro dedos FK');
  for(const f of state.fingers){
    assert.equal(f.joints.length,4,f.id+' precisa de quatro juntas');
    assert.equal(f.lengths.length,3,f.id+' precisa de três comprimentos');
    for(let k=0;k<3;k++){
      assert(f.lengths[k]>0,f.id+' comprimento não positivo');
      close(dist(f.joints[k],f.joints[k+1]),f.lengths[k],f.id+' osso '+k+' mudou de comprimento');
      if(reference)close(f.lengths[k],reference.find(x=>x.id===f.id).lengths[k],f.id+' cota mudou durante gesto');
    }
  }
}
function group(name,fn){
  try{const evidence=fn();groups.push({name,status:'PASSOU',evidence});}
  catch(error){groups.push({name,status:'FALHOU',error:error.message});throw error;}
}
const measured={};
try{
  group('Contrato de entrada e tempo',()=>{
    for(const t of [NaN,Infinity,-Infinity])assert.throws(()=>hand.sample(t));
    assert.throws(()=>hand.sample(1,{gesto:'desconhecido'}));
    for(const gesto of modes){
      assert.deepEqual(hand.sample(-7,{gesto}),hand.sample(0,{gesto}));
      assert.deepEqual(hand.sample(28,{gesto}),hand.sample(12,{gesto}));
    }
    return {invalidTimesRejected:3,finiteTimeClamped:[0,12],unknownGestureRejected:true};
  });
  group('Comprimentos reais, coordenadas finitas e superfície em 722 estados',()=>{
    for(const gesto of modes){
      const baseline=clone(hand.sample(0,{gesto}).fingers);let maxBoneError=0,maxJointStep=0,previous=null,pathCount=[Infinity,0];
      for(let frame=0;frame<=360;frame++){
        const s=hand.sample(frame/30,{gesto}),before=JSON.stringify(s),g=hand.geometry(s);
        finite(s);finite(g);validateBones(s,baseline);
        assert.equal(JSON.stringify(s),before,'geometry alterou o estado de entrada');
        assert.deepEqual(g.space,[960,540]);
        for(const f of s.fingers){
          assert(selected(g,f.id).length>0,'pele FK ausente: '+f.id);
          for(let k=0;k<3;k++)maxBoneError=Math.max(maxBoneError,Math.abs(dist(f.joints[k],f.joints[k+1])-f.lengths[k]));
          if(previous)for(let j=0;j<4;j++)maxJointStep=Math.max(maxJointStep,dist(f.joints[j],previous.find(x=>x.id===f.id).joints[j]));
        }
        previous=clone(s.fingers);pathCount=[Math.min(pathCount[0],g.paths.length),Math.max(pathCount[1],g.paths.length)];
      }
      // Guarda contra teleporte entre dois quadros; não é limite anatômico/biomecânico.
      assert(maxJointStep<5,'salto superior a cinco unidades locais entre quadros');
      measured[gesto]={frames:361,maxBoneError,maxLocalJointStepAt30fps:maxJointStep,pathCount};
    }
    return measured;
  });
  group('Seeks fora de ordem retornam exatamente a mesma geometria',()=>{
    for(const gesto of modes){
      const expected=Array.from({length:361},(_,i)=>JSON.stringify(hand.geometry(hand.sample(i/30,{gesto}))));
      for(let i=0;i<361;i++){const frame=(i*137)%361;assert.equal(JSON.stringify(hand.geometry(hand.sample(frame/30,{gesto}))),expected[frame]);}
    }
    return {seeks:722,permutationMultiplier:137};
  });
  group('Contrafactual: juntas de cada dedo realmente dirigem a pele',()=>{
    let probes=0;
    for(const gesto of modes)for(const t of [0,2.5,5,9]){
      const original=hand.sample(t,{gesto}),base=hand.geometry(original);
      for(let index=0;index<4;index++){
        const changed=clone(original),finger=changed.fingers[index];
        finger.joints[3][1]+=6;
        const candidate=hand.geometry(changed);
        assert.notDeepEqual(selected(candidate,finger.id),selected(base,finger.id),'pele ignorou a junta modificada: '+finger.id);
        assert.notDeepEqual(candidate.projectedJoints.find(f=>f.id===finger.id),base.projectedJoints.find(f=>f.id===finger.id));
        for(const other of original.fingers.filter(f=>f.id!==finger.id))assert.deepEqual(selected(candidate,other.id),selected(base,other.id),'mudança vazou para outro dedo');
        assert.deepEqual(selected(candidate,'palma'),selected(base,'palma'),'mudança indevida na palma dirigida');
        probes++;
      }
    }
    return {probes,note:'Perturbação deliberada fora da pose válida somente para provar dependência do desenho; não é uma pose entregue.'};
  });
  group('Punho transforma a mão; manga permanece fixa',()=>{
    const base=hand.sample(2.2,{gesto:'punho'}),neutral=clone(base);neutral.flex=0;neutral.deviation=0;
    const a=hand.geometry(base),b=hand.geometry(neutral);
    for(const id of ['palma','polegar',...base.fingers.map(f=>f.id)])assert.notDeepEqual(selected(a,id),selected(b,id),id+' não acompanha punho');
    for(const id of ['manga','manga-frente','borda-manga']){assert(selected(a,id).length>0);assert.deepEqual(selected(a,id),selected(b,id),id+' moveu com a mão');}
    // Recupera a projeção linear por três perturbações independentes, sem congelar a câmera escolhida pelo desenho.
    const anchor=b.projectedJoints[0].points[0],localAnchor=neutral.fingers[0].joints[0];
    const columns=[0,1,2].map(axis=>{
      const changed=clone(neutral);for(const finger of changed.fingers)for(const p of finger.joints)p[axis]+=1;
      const p=hand.geometry(changed).projectedJoints[0].points[0];return p.map((v,j)=>v-anchor[j]);
    });
    const projectLinear=p=>[0,1].map(j=>anchor[j]+p.reduce((sum,v,k)=>sum+(v-localAnchor[k])*columns[k][j],0));
    // Os quatro dedos estão além da transição tecidual do punho. A rotação comum deve preservar os ossos.
    const f=base.flex*Math.PI/180,d=base.deviation*Math.PI/180;
    const world=p=>{const q=[p[0]*Math.cos(f)-p[2]*Math.sin(f),p[1],p[0]*Math.sin(f)+p[2]*Math.cos(f)];return[q[0]*Math.cos(d)-q[1]*Math.sin(d),q[0]*Math.sin(d)+q[1]*Math.cos(d),q[2]];};
    for(const finger of base.fingers){
      assert(finger.joints.every(p=>p[0]>=4),'junta entrou na transição de tecido; reavaliar rotação rígida');
      for(let j=0;j<3;j++)close(dist(world(finger.joints[j]),world(finger.joints[j+1])),finger.lengths[j],'rotação do punho alterou osso');
      const projected=a.projectedJoints.find(x=>x.id===finger.id).points;
      finger.joints.forEach((p,j)=>close(dist(projected[j],projectLinear(world(p))),0,'junta projetada diverge da transformação comum do punho'));
    }
    return {movingParts:6,fixedSleeveParts:3,projectionColumnsMeasured:columns,scope:'quatro dedos fora da transição proximal do punho'};
  });
  group('Controles negativos detectam osso deformado e coordenada inválida',()=>{
    const a=clone(hand.sample(3));a.fingers[0].joints[1][0]+=8;assert.throws(()=>validateBones(a));
    const b=clone(hand.sample(3));b.fingers[2].lengths[1]*=.9;assert.throws(()=>validateBones(b));
    const c=clone(hand.sample(3));c.fingers[1].joints[2][2]=NaN;assert.throws(()=>finite(c));
    return {detectedMutations:3};
  });
  group('Estados retornados não compartilham listas mutáveis internas',()=>{
    const expected=clone(hand.sample(2.5)),changed=hand.sample(2.5);
    for(const field of ['lengths','radii','root'])if(Array.isArray(changed.fingers[0][field])){
      if(!Object.isFrozen(changed.fingers[0][field]))changed.fingers[0][field][0]+=1;
    }
    changed.fingers[0].joints[0][0]+=1;
    assert.deepEqual(hand.sample(2.5),expected,'consumidor pode contaminar amostras futuras por alias de listas');
    return {mutableSharedLists:false};
  });
  assert.equal(sha(),initialHash,'módulo mudou durante a execução; repetir com candidato estável');
}catch(error){process.exitCode=1;if(groups.every(g=>g.status==='PASSOU'))groups.push({name:'Estabilidade do candidato',status:'FALHOU',error:error.message});}

const report={date:'2026-10-05',status:process.exitCode?'FALHOU':'PASSOU',moduleSha256:initialHash,groups,
  scope:{fingers:'quatro dedos FK que dirigem a superfície',wrist:'transformação e manga fixa',thumb:'NÃO MEDIDO como FK; contorno dirigido',palm:'contorno dirigido',pinch:'NÃO MEDIDO neste auditor; componente separado',visual:'PENDENTE de revisão artística de Lucas; testes não aprovam a forma'},
  limits:['Não mede colisões entre dedos, contato com palma/objetos nem conservação de volume.','Verifica comprimentos dos eixos ósseos, não comprimentos dos contornos 2D.','A oclusão e o desenho das polpas requerem inspeção de pixels; dependência das juntas não aprova sua anatomia.','Não é QC oficial nem autorização para integrar no Alpha.']};
fs.writeFileSync(new URL('./resultados-cinematica-v003.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
