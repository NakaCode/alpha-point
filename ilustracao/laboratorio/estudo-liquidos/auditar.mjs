import assert from 'node:assert/strict';
import fs from 'node:fs';
import {sample,drive,meta} from './liquidos.mjs';

const results=[];
function test(name,fn){const metrics=fn();results.push({name,status:'PASS',...metrics});}
let checkedFrames=0;

test('volume e superfície confinada em nove combinações',()=>{
  let maxVolumeError=0,minClearance=Infinity,maxAmplitude=0,maxDepthRatio=0;
  for(const fill of [0.35,0.55,0.70]) for(const damping of [0.12,0.23,0.55]) {
    for(let i=0;i<=meta.duration*60;i++) {
      const s=sample(i/60,{fill,damping});checkedFrames++;
      maxVolumeError=Math.max(maxVolumeError,Math.abs(s.volume-s.targetVolume));
      minClearance=Math.min(minClearance,s.minHeight,s.tank.height-s.maxHeight);
      maxAmplitude=Math.max(maxAmplitude,s.maxDisplacement);
      maxDepthRatio=Math.max(maxDepthRatio,s.maxDisplacement/s.meanHeight);
      assert.ok(s.minHeight>0 && s.maxHeight<s.tank.height,'Água atravessou fundo ou borda');
      assert.equal(s.surface[0].x,-s.tank.width/2);assert.equal(s.surface.at(-1).x,s.tank.width/2);
      for(let j=1;j<s.surface.length;j++)assert.ok(s.surface[j].x>s.surface[j-1].x);
      assert.ok(Math.abs(s.volume-s.targetVolume)<1e-12,'Volume não preservado');
      assert.ok(s.maxDisplacement/s.meanHeight<0.25,'Amplitude saiu do envelope da bancada linear');
    }
  }
  return {frames:checkedFrames,maxVolumeErrorM3:maxVolumeError,minClearanceM:minClearance,maxAmplitudeM:maxAmplitude,maxAmplitudeOverMeanDepth:maxDepthRatio};
});

test('repouso inicial e energia decrescente após último deslocamento',()=>{
  const initial=sample(0),quiet=sample(1.05);
  assert.equal(initial.maxDisplacement,0);assert.equal(quiet.maxDisplacement,0);
  let previous=sample(7.8).energy,maxIncrease=0;
  for(let i=469;i<=1080;i++) {
    const next=sample(i/60).energy;
    maxIncrease=Math.max(maxIncrease,next-previous);
    assert.ok(next<=previous+1e-11);previous=next;
  }
  const early=sample(7.8),last=sample(meta.duration);
  assert.ok(last.energy<early.energy*1e-5);
  assert.ok(last.maxDisplacement<0.001);
  return {maxEnergyIncrease:maxIncrease,finalAmplitudeM:last.maxDisplacement,finalEnergyRatio:last.energy/early.energy};
});

test('resposta inicial oposta à aceleração do tanque',()=>{
  const s=sample(1.8);
  assert.ok(s.kinematics.a>0);
  assert.ok(s.surface[0].height>s.surface.at(-1).height);
  return {time:s.time,accelerationMPerS2:s.kinematics.a,leftHeightM:s.surface[0].height,rightHeightM:s.surface.at(-1).height};
});

test('seek independente de ordem, cache e repetição',()=>{
  const times=[0,1.22,2.2,3.9,5.13,7.81,10.37,18];
  const baseline=times.map(t=>JSON.stringify(sample(t)));
  for(let i=times.length-1;i>=0;i--)assert.equal(JSON.stringify(sample(times[i])),baseline[i]);
  for(let j=0;j<12;j++)sample(9,{fill:0.35+j*0.025});
  times.forEach((t,i)=>assert.equal(JSON.stringify(sample(t)),baseline[i]));
  return {instants:times.length,cacheEvictionExercised:true};
});

test('continuidade de posição, aceleração e superfície nas transições',()=>{
  let maxSurfaceJump=0,maxDriveJump=0;
  for(const t of [1.1,3.8,5.1,7.8,8,8+1/240,12]) {
    const a=sample(t-1e-6),b=sample(t+1e-6);
    const jump=Math.max(...a.surface.map((p,i)=>Math.abs(p.height-b.surface[i].height)));
    maxSurfaceJump=Math.max(maxSurfaceJump,jump);
    maxDriveJump=Math.max(maxDriveJump,Math.abs(drive(t-1e-6).a-drive(t+1e-6).a));
    assert.ok(jump<1e-5);assert.ok(Math.abs(a.kinematics.x-b.kinematics.x)<1e-5);
  }
  return {windowSeconds:2e-6,maxSurfaceJumpM:maxSurfaceJump,maxAccelerationJumpMPerS2:maxDriveJump};
});

test('convergência por refinamento temporal RK4',()=>{
  let maxDifference=0;
  for(const fill of [0.35,0.55,0.70]) for(const damping of [0.12,0.55]) {
    for(let i=0;i<=360;i++) {
      const a=sample(i/20,{fill,damping,_step:1/240});
      const b=sample(i/20,{fill,damping,_step:1/480});
      maxDifference=Math.max(maxDifference,...a.surface.map((p,j)=>Math.abs(p.height-b.surface[j].height)));
    }
  }
  assert.ok(maxDifference<1e-6);
  return {coarseStepSeconds:1/240,fineStepSeconds:1/480,maxSurfaceDifferenceM:maxDifference,toleranceM:1e-6};
});

test('área segura da bancada e entradas inválidas',()=>{
  let left=Infinity,right=-Infinity;
  for(let i=0;i<=1080;i++) {
    const x=480+sample(i/60).kinematics.x*122;
    left=Math.min(left,x-3.4*122/2-14);right=Math.max(right,x+3.4*122/2+50);
  }
  assert.ok(left>=50 && right<=910);
  assert.throws(()=>sample(NaN));assert.throws(()=>sample(1,{fill:0.95}));assert.throws(()=>sample(1,{damping:-1}));
  assert.equal(sample(-3).time,0);assert.equal(sample(99).time,18);
  return {tankBounds:{left,right,top:130.4,bottom:446},safeBounds:[50,40,910,465],note:'Limites geométricos analíticos; não substituem inspeção visual ou QC oficial.'};
});

const report={study:'líquidos',version:1,date:'2026-10-05',status:'PASS',tests:results.length,results,
  notMeasured:['CFD, forças reais ou material calibrado','Oclusões e legibilidade artística independentes','QC oficial','Empuxo, capilaridade, turbulência, espuma e derramamento'],
  model:'Três modos lineares 2D, RK4 1/240 s, profundidade extrudida constante, volume analiticamente conservado.'};
fs.writeFileSync(new URL('./resultados.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
