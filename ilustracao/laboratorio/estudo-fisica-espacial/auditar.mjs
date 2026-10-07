import assert from 'node:assert/strict';
import fs from 'node:fs';
import {meta,sample,orbitAt,circularAt} from './espaco.mjs';

const results=[];
function test(name,fn){results.push({name,status:'PASS',...fn()});}
function relative(a,b){return Math.abs(a-b)/Math.max(Math.abs(b),1e-16);}

test('Kepler: momento angular, energia específica e foco gravitacional',()=>{
  const base=orbitAt(0);let momentumError=0,energyError=0,keplerResidual=0,centralCross=0;
  for(let i=0;i<=1440;i++) {
    const p=orbitAt(i/120);
    momentumError=Math.max(momentumError,relative(p.angularMomentum,base.angularMomentum));
    energyError=Math.max(energyError,relative(p.specificEnergy,base.specificEnergy));
    keplerResidual=Math.max(keplerResidual,Math.abs(p.eccentricAnomaly-p.eccentricity*Math.sin(p.eccentricAnomaly)-p.meanAnomaly));
    centralCross=Math.max(centralCross,Math.abs(p.x*p.ay-p.y*p.ax));
    assert.ok(p.x*p.ax+p.y*p.ay<0);
  }
  assert.ok(momentumError<1e-12&&energyError<1e-12&&keplerResidual<1e-12&&centralCross<1e-12);
  return {frames:1441,maxRelativeMomentumError:momentumError,maxRelativeEnergyError:energyError,maxKeplerResidual:keplerResidual,maxAccelerationCrossPosition:centralCross};
});

test('áreas iguais em intervalos iguais, por quadratura geométrica independente',()=>{
  const dt=0.6,n=4096,starts=[0,1,3,6,8,10.9];
  const areas=starts.map(start=>{
    let area=0,previous=orbitAt(start);
    for(let i=1;i<=n;i++){const next=orbitAt(start+dt*i/n);area+=(previous.x*next.y-previous.y*next.x)/2;previous=next;}
    return area;
  });
  const expected=orbitAt(0).angularMomentum*dt/2,maxError=Math.max(...areas.map(v=>relative(v,expected)));
  assert.ok(maxError<1e-7);
  return {intervalSeconds:dt,intervals:starts.length,segmentsPerInterval:n,expectedAreaNormalized:expected,maxRelativePolygonAreaError:maxError};
});

test('periastro mais rápido, período fechado e aceleração consistente',()=>{
  const p=orbitAt(0),a=orbitAt(6),last=orbitAt(12),ratio=Math.hypot(p.vx,p.vy)/Math.hypot(a.vx,a.vy);
  assert.ok(Math.abs(ratio-(1+p.eccentricity)/(1-p.eccentricity))<1e-12);
  assert.ok(Math.hypot(last.x-p.x,last.y-p.y)<1e-12);
  let maxVelocityError=0,maxAccelerationError=0;
  const epsilon=1e-5;
  for(let i=0;i<120;i++){
    const t=i/10,c=orbitAt(t),before=orbitAt(t-epsilon),after=orbitAt(t+epsilon);
    maxVelocityError=Math.max(maxVelocityError,Math.hypot((after.x-before.x)/(2*epsilon)-c.vx,(after.y-before.y)/(2*epsilon)-c.vy));
    maxAccelerationError=Math.max(maxAccelerationError,Math.hypot((after.vx-before.vx)/(2*epsilon)-c.ax,(after.vy-before.vy)/(2*epsilon)-c.ay));
  }
  assert.ok(maxVelocityError<1e-7&&maxAccelerationError<1e-7);
  return {periApoSpeedRatio:ratio,maxVelocityFiniteDifferenceError:maxVelocityError,maxAccelerationFiniteDifferenceError:maxAccelerationError};
});

test('galáxia: raios constantes e conservação no potencial fixo',()=>{
  let radiusError=0,energyError=0,momentumError=0;
  const baseline=sample(0,{modelo:'galaxia'});
  for(let i=0;i<=360;i++){
    const s=sample(i/30,{modelo:'galaxia'});
    for(let j=0;j<s.stars.length;j++){
      const p=s.stars[j],q=baseline.stars[j];
      radiusError=Math.max(radiusError,Math.abs(Math.hypot(p.x,p.y)-q.r));
      energyError=Math.max(energyError,Math.abs(p.specificEnergy-q.specificEnergy));
      momentumError=Math.max(momentumError,Math.abs((p.x*p.vy-p.y*p.vx)-q.angularMomentum));
    }
  }
  assert.ok(radiusError<1e-12&&energyError<1e-12&&momentumError<1e-12);
  return {frames:361,particlesPerFrame:baseline.stars.length,maxRadiusError:radiusError,maxEnergyError:energyError,maxMomentumError:momentumError};
});

test('rotação diferencial, sem placa rígida ou atração de massa pontual',()=>{
  const inner=circularAt(0.28,0,0),outer=circularAt(0.83,0,0);
  assert.ok(inner.omega>outer.omega);assert.ok(inner.omega/outer.omega>2);
  const vInner=Math.hypot(inner.vx,inner.vy),vOuter=Math.hypot(outer.vx,outer.vy);
  assert.ok(vOuter>vInner);
  const endInner=circularAt(0.28,0,12),endOuter=circularAt(0.83,0,12);
  assert.ok(endInner.theta-endOuter.theta>Math.PI);
  return {innerAngularRate:inner.omega,outerAngularRate:outer.omega,innerSpeed:vInner,outerSpeed:vOuter,relativeWindingRadians:endInner.theta-endOuter.theta};
});

test('busca direta determinística, entradas e enquadramento normal',()=>{
  let maxY=0,minY=540;
  for(const modelo of ['orbitas','galaxia']){
    const times=[0,0.1,1.37,5.9,6,9.2,12],baseline=times.map(t=>JSON.stringify(sample(t,{modelo})));
    times.slice().reverse().forEach((t,i)=>assert.equal(JSON.stringify(sample(t,{modelo})),baseline[times.length-1-i]));
    for(let i=0;i<=360;i++) {
      const s=sample(i/30,{modelo});
      if(modelo==='orbitas'){
        const x=s.focus.x+s.body.x*260,y=s.focus.y-s.body.y*260;
        assert.ok(x-12>=50&&x+12<=910&&y-12>=40&&y+12<=465);
        minY=Math.min(minY,y-12);maxY=Math.max(maxY,y+12);
      } else for(const p of s.stars){
        const a=-0.11,u=p.x*340,v=p.y*340*0.54,x=480+u*Math.cos(a)-v*Math.sin(a),y=252+u*Math.sin(a)+v*Math.cos(a),r=p.size*2.6;
        assert.ok(x-r>=50&&x+r<=910&&y-r>=40&&y+r<=465);
      }
    }
  }
  assert.throws(()=>sample(NaN));assert.throws(()=>sample(2,{modelo:'buraco-negro'}));
  assert.equal(sample(-1).time,0);assert.equal(sample(20).time,meta.duration);
  return {independentSeeks:14,orbitVisibleMinY:minY,orbitVisibleMaxY:maxY,safeArea:[50,40,910,465],note:'Enquadramento analítico, não QC visual independente.'};
});

const report={study:'física espacial',date:'2026-10-05',status:'PASS',tests:results.length,results,
  limitations:['Unidades normalizadas; sem escala física de corpo ou compressão temporal calibrada','Órbita de partícula teste, sem perturbações','Disco sem auto-gravidade e braços iniciais impostos','Buracos negros, lentes e relatividade não implementados','Sem dados astronômicos ajustados','QC oficial não medido']};
fs.writeFileSync(new URL('./resultados.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
