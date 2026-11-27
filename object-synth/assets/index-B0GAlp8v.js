(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const bh={shape:"sphere",size:2.5,aspect:1,wall:1,edgeRadius:1,roughness:.4,objMaterial:"steel",objRing:0,click:0,objFem:!0,objTexture:.5,bOn:!1,bShape:"cube",bSize:1.5,bAspect:1,bWall:1,bEdgeRadius:1.5,bRoughness:.4,bMaterial:"maple",bCount:3,cOn:!1,cShape:"rock",cSize:2,cAspect:1,cWall:1,cEdgeRadius:1,cRoughness:.6,cMaterial:"granite",cCount:3,collide:!0,obstacle:"none",obsX:0,obsZ:0,obsDir:0,obsHeight:.25,obsSize:.12,obsAngle:35,obsMaterial:"steel",obsRing:-6,walls:!1,wallHeight:.06,surfTexture:1,grain:.6,squeak:0,frictionDrive:.5,tiltAngle:0,tiltDir:0,drag:!1,dragSpeed:.25,dragPressure:2,dragLength:.25,dragDir:0,dragStart:.3,height:.4,dropX:.03,dropZ:.02,tilt:15,randomOrient:!0,spin:2,toss:0,tossDir:0,count:1,interval:.6,scatter:.05,seed:1,gravity:9.81,airDrag:1,surface:"membrane",memDiameter:35,memTension:2500,memMaterial:"mylar",memThickness:.19,memAir:1,memGlide:1,memHoop:!0,memShell:!0,memDepth:35,memBottom:!0,memBottomTension:2e3,snares:!1,snareTension:4,plateW:1.2,plateD:.9,plateThickness:18,plateMaterial:"pine",plateNonlin:1,plateCurve:0,barCount:12,barScale:"pentatonic",barRoot:60,barNotes:"60 62 64 67 69 72",barMaterial:"rosewood",barTuning:"marimba",barThickness:20,barWidth:45,barGap:8,resonators:!0,resTune:0,resQ:40,resMix:1,decay:1.5,hfDamp:.9,micDist:.3,micSpread:.6,sampleRate:192e3,duration:8,maxModes:480,fmax:24e3,quality:1},oa={chromatic:[0,1,2,3,4,5,6,7,8,9,10,11],major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],pentatonic:[0,2,4,7,9],"minor pentatonic":[0,3,5,7,10],"whole tone":[0,2,4,6,8,10],hirajoshi:[0,2,3,7,8],pelog:[0,1,3,7,8],"harmonic series":[],custom:[]};function gc(i){if(i.barScale==="custom"){const n=i.barNotes.split(/[\s,]+/).map(Number).filter(s=>isFinite(s)&&s>0);return n.length?n:[i.barRoot]}if(i.barScale==="harmonic series"){const n=[];for(let s=1;n.length<i.barCount;s++)n.push(i.barRoot+12*Math.log2(s));return n}const t=oa[i.barScale]??oa.chromatic,e=[];for(let n=0;e.length<i.barCount;n++)e.push(i.barRoot+12*Math.floor(n/t.length)+t[n%t.length]);return e}const Go={"Floor tom":{surface:"membrane",memDiameter:40,memTension:2200,memMaterial:"mylar",memThickness:.25,memAir:1,memGlide:1,decay:1.6,hfDamp:.9,memHoop:!0},"Snare-ish (tight)":{surface:"membrane",memDiameter:35,memTension:9e3,memMaterial:"mylar",memThickness:.19,memAir:1,memGlide:.6,decay:.7,hfDamp:.7,memHoop:!0},Timpani:{surface:"membrane",memDiameter:70,memTension:4500,memMaterial:"calfskin",memThickness:.35,memAir:1.6,memGlide:1,decay:3.5,hfDamp:1.1,memHoop:!0},"Frame drum (slack)":{surface:"membrane",memDiameter:50,memTension:500,memMaterial:"calfskin",memThickness:.3,memAir:1.2,memGlide:2,decay:.9,hfDamp:.8,memHoop:!0},Marimba:{surface:"bars",barMaterial:"rosewood",barTuning:"marimba",barRoot:57,barScale:"pentatonic",barCount:12,barThickness:22,barWidth:50,barGap:10,resonators:!0,resQ:40,resMix:1,decay:1.4,hfDamp:1.2},Xylophone:{surface:"bars",barMaterial:"rosewood",barTuning:"xylophone",barRoot:72,barScale:"major",barCount:14,barThickness:22,barWidth:38,barGap:8,resonators:!0,resQ:30,resMix:.7,decay:.8,hfDamp:1},Vibraphone:{surface:"bars",barMaterial:"aluminium",barTuning:"marimba",barRoot:53,barScale:"whole tone",barCount:12,barThickness:13,barWidth:50,barGap:10,resonators:!0,resQ:60,resMix:.8,decay:6,hfDamp:1.1},"Steel tongue drum":{surface:"bars",barMaterial:"steel",barTuning:"tongue",barRoot:62,barScale:"hirajoshi",barCount:9,barThickness:3,barWidth:30,barGap:6,resonators:!0,resQ:15,resMix:.5,decay:4,hfDamp:1},"Wood plank tongues":{surface:"bars",barMaterial:"maple",barTuning:"uniform",barRoot:48,barScale:"harmonic series",barCount:10,barThickness:25,barWidth:60,barGap:12,resonators:!1,decay:.7,hfDamp:1},"Wooden floor":{surface:"plate",plateMaterial:"pine",plateW:2.4,plateD:1.8,plateThickness:22,decay:.35,hfDamp:.6},"Concrete slab":{surface:"plate",plateMaterial:"concrete",plateW:3,plateD:3,plateThickness:120,decay:.15,hfDamp:.5},"Steel sheet (thunder)":{surface:"plate",plateMaterial:"steel",plateW:1.2,plateD:.8,plateThickness:.8,decay:6,hfDamp:.5},"Glass pane":{surface:"plate",plateMaterial:"glass",plateW:.6,plateD:.45,plateThickness:5,decay:2.5,hfDamp:.7},"Granite tabletop":{surface:"plate",plateMaterial:"granite",plateW:1,plateD:.6,plateThickness:30,decay:1.2,hfDamp:.6},"Snare drum":{surface:"membrane",memDiameter:35,memTension:7e3,memMaterial:"mylar",memThickness:.19,memAir:1,memGlide:.6,decay:.8,hfDamp:.7,memHoop:!0,memShell:!0,memDepth:14,memBottom:!0,memBottomTension:9e3,snares:!0,snareTension:3},"Gong (shallow shell)":{surface:"plate",plateMaterial:"brass",plateW:.7,plateD:.7,plateThickness:1.5,decay:9,hfDamp:.4,plateNonlin:1,plateCurve:3},"Thunder sheet (nonlinear)":{surface:"plate",plateMaterial:"steel",plateW:1.4,plateD:.9,plateThickness:.5,decay:7,hfDamp:.45,plateNonlin:2,plateCurve:.5}},Sh={bOn:!1,cOn:!1,collide:!0,count:1,interval:.6,scatter:.05,height:.4,dropX:0,dropZ:0,toss:0,tossDir:0,spin:2,randomOrient:!0,tilt:15,obstacle:"none",walls:!1,drag:!1,squeak:0,tiltAngle:0,tiltDir:0,surfTexture:1,objTexture:.5,plateCurve:0,plateNonlin:1},Ho={"Clear (empty scene)":{},"Marbles through a funnel onto a marimba":{surface:"bars",barMaterial:"rosewood",barTuning:"marimba",barRoot:57,barScale:"pentatonic",barCount:12,barThickness:22,barWidth:50,barGap:10,resonators:!0,decay:1.4,hfDamp:1.2,shape:"sphere",size:1.6,objMaterial:"glass",count:10,interval:.05,scatter:.03,height:.4,dropX:0,dropZ:.03,obstacle:"funnel",obsX:0,obsZ:.03,obsSize:.07,obsHeight:.22,obsAngle:35,obsMaterial:"steel",obsRing:-6,bOn:!1,cOn:!1,drag:!1,tiltAngle:0,walls:!1},"Dice and bearings through pegs onto glass":{surface:"plate",plateMaterial:"glass",plateW:.6,plateD:.45,plateThickness:5,decay:2.5,hfDamp:.7,plateNonlin:1,plateCurve:0,shape:"cube",size:1.5,edgeRadius:2,objMaterial:"maple",count:4,bOn:!0,bShape:"sphere",bSize:1.2,bMaterial:"steel",bCount:4,cOn:!1,interval:.12,scatter:.04,dropX:0,dropZ:0,obstacle:"pegs",obsX:0,obsZ:0,obsHeight:.25,obsSize:.1,obsMaterial:"brass",obsRing:-3,walls:!0,wallHeight:.05,drag:!1,tiltAngle:0},"Marbles rolling down a tilted marimba":{surface:"bars",barMaterial:"rosewood",barTuning:"marimba",barRoot:55,barScale:"major",barCount:14,barThickness:22,barWidth:48,barGap:6,resonators:!0,decay:1.4,hfDamp:1.2,shape:"sphere",size:1.6,objMaterial:"glass",count:5,interval:.5,scatter:.01,height:.08,dropX:-.3,dropZ:.04,obstacle:"ramp",obsX:-.3,obsZ:.04,obsDir:0,obsSize:.06,obsAngle:18,tiltAngle:5,tiltDir:0,bOn:!1,cOn:!1,drag:!1,walls:!1},"Stone scraped across a steel sheet":{surface:"plate",plateMaterial:"steel",plateW:1.2,plateD:.8,plateThickness:.8,decay:6,hfDamp:.5,plateNonlin:1,plateCurve:0,shape:"rock",size:4,roughness:.3,edgeRadius:3,objMaterial:"granite",count:1,bOn:!1,cOn:!1,drag:!0,dragSpeed:.25,dragPressure:4,dragLength:.35,dragDir:0,dragStart:.3,surfTexture:3,objTexture:2,grain:.8,squeak:0,frictionDrive:.6,obstacle:"none",tiltAngle:0,walls:!1,dropX:-.15,dropZ:0},"Glass rubbed on glass (squeak)":{surface:"plate",plateMaterial:"glass",plateW:.6,plateD:.45,plateThickness:5,decay:2.5,hfDamp:.6,plateNonlin:1,plateCurve:0,shape:"cylinder",size:4,aspect:.5,edgeRadius:1,objMaterial:"glass",count:1,bOn:!1,cOn:!1,drag:!0,dragSpeed:.04,dragPressure:5,dragLength:.08,dragDir:30,dragStart:.2,surfTexture:.2,objTexture:.2,squeak:1,frictionDrive:.8,randomOrient:!1,tilt:0,obstacle:"none",tiltAngle:0,walls:!1,dropX:-.04,dropZ:-.02},"Bead rain on a snare drum":{surface:"membrane",memDiameter:35,memTension:7e3,memMaterial:"mylar",memThickness:.19,memAir:1,memGlide:.6,decay:.8,hfDamp:.7,memHoop:!0,memShell:!0,memDepth:14,memBottom:!0,memBottomTension:9e3,snares:!0,snareTension:3,shape:"sphere",size:.45,objMaterial:"plastic",count:24,interval:.03,scatter:.08,height:.5,dropX:0,dropZ:0,bOn:!1,cOn:!1,obstacle:"none",drag:!1,tiltAngle:0,walls:!1},"Coin spun onto a glass pane":{surface:"plate",plateMaterial:"glass",plateW:.6,plateD:.45,plateThickness:5,decay:2.5,hfDamp:.7,shape:"disc",size:2.4,aspect:.08,edgeRadius:.3,objMaterial:"brass",height:.08,randomOrient:!1,tilt:70,spin:30,dropX:.02,dropZ:0},"Dice tossed into a wooden tray":{surface:"plate",plateMaterial:"pine",plateW:.5,plateD:.35,plateThickness:12,decay:.5,hfDamp:.6,shape:"cube",size:1.6,edgeRadius:2,objMaterial:"maple",count:3,interval:.05,scatter:.02,height:.25,toss:.8,tossDir:0,spin:15,dropX:-.15,dropZ:0,walls:!0,wallHeight:.05},"Pebbles on a steel tongue drum":{surface:"bars",barMaterial:"steel",barTuning:"tongue",barRoot:62,barScale:"hirajoshi",barCount:9,barThickness:3,barWidth:30,barGap:6,resonators:!0,resQ:15,resMix:.5,decay:4,hfDamp:1,shape:"rock",size:1.2,roughness:.5,edgeRadius:1.5,objMaterial:"granite",count:6,interval:.35,scatter:.05,height:.25},"Ping-pong balls on timpani":{surface:"membrane",memDiameter:70,memTension:4500,memMaterial:"calfskin",memThickness:.35,memAir:1.6,memGlide:1,decay:3.5,hfDamp:1.1,memHoop:!0,memShell:!0,memDepth:50,memBottom:!1,shape:"shell",size:4,wall:.4,objMaterial:"celluloid",count:3,interval:.7,scatter:.1,height:.6},"Bearings and glass beads in a funnel over a gong":{surface:"plate",plateMaterial:"brass",plateW:.7,plateD:.7,plateThickness:1.5,decay:9,hfDamp:.4,plateNonlin:1,plateCurve:3,shape:"sphere",size:1.2,objMaterial:"steel",count:6,bOn:!0,bShape:"sphere",bSize:.8,bMaterial:"glass",bCount:6,interval:.06,scatter:.03,height:.4,obstacle:"funnel",obsX:0,obsZ:0,obsSize:.08,obsHeight:.25,obsAngle:30,obsMaterial:"steel",obsRing:-10},"Steel rod dropped on concrete":{surface:"plate",plateMaterial:"concrete",plateW:3,plateD:3,plateThickness:120,decay:.15,hfDamp:.5,shape:"rod",size:25,aspect:25,edgeRadius:1,objMaterial:"steel",randomOrient:!1,tilt:12,spin:0,height:.3}},Vo={None:{obstacle:"none",walls:!1},"Small steel funnel":{obstacle:"funnel",obsSize:.07,obsHeight:.22,obsAngle:35,obsMaterial:"steel",obsRing:-6},"Wide glass funnel":{obstacle:"funnel",obsSize:.15,obsHeight:.3,obsAngle:25,obsMaterial:"glass",obsRing:-12},"Brass Galton pegs in a tray":{obstacle:"pegs",obsHeight:.25,obsSize:.1,obsMaterial:"brass",obsRing:-3,walls:!0,wallHeight:.05},"Gentle maple ramp":{obstacle:"ramp",obsSize:.08,obsAngle:15,obsMaterial:"maple",obsRing:-20},"Steep steel chute":{obstacle:"ramp",obsSize:.06,obsAngle:40,obsMaterial:"steel",obsRing:-6},"Tray walls only":{obstacle:"none",walls:!0,wallHeight:.05}},Wo={"Single drop":{count:1,height:.4,toss:0,spin:2,randomOrient:!0,scatter:.05},Handful:{count:8,interval:.04,scatter:.06,height:.3,toss:0,spin:4,randomOrient:!0},Rain:{count:24,interval:.03,scatter:.12,height:.6,toss:0,randomOrient:!0},"Slow trickle":{count:10,interval:.4,scatter:.02,height:.3,toss:0},"Gentle toss":{count:1,height:.15,toss:.6,tossDir:0,spin:6,randomOrient:!0},"Flat, no spin":{count:1,randomOrient:!1,tilt:0,spin:0,toss:0},"Spinning tumble":{count:1,randomOrient:!1,tilt:40,spin:25,toss:0}},no={"Steel ball bearing":{shape:"sphere",size:1.6,objMaterial:"steel"},"Glass marble":{shape:"sphere",size:1.6,objMaterial:"glass"},"Ping-pong ball":{shape:"shell",size:4,wall:.4,objMaterial:"celluloid"},"Rubber ball":{shape:"sphere",size:4,objMaterial:"rubber"},"Wooden die":{shape:"cube",size:2,edgeRadius:2,objMaterial:"maple"},"Ice cube":{shape:"cube",size:2.5,edgeRadius:3,objMaterial:"ice"},Coin:{shape:"disc",size:2.4,aspect:.08,edgeRadius:.3,objMaterial:"brass"},"Steel rod (chime)":{shape:"rod",size:25,aspect:25,edgeRadius:1,objMaterial:"steel"},"Aluminium tube":{shape:"tube",size:30,aspect:12,wall:1.5,edgeRadius:.5,objMaterial:"aluminium"},"Hockey puck":{shape:"cylinder",size:7.6,aspect:.33,edgeRadius:2,objMaterial:"rubber"},Pebble:{shape:"rock",size:3,roughness:.5,edgeRadius:2,objMaterial:"granite"},"Ceramic shard":{shape:"rock",size:5,roughness:.9,edgeRadius:.5,objMaterial:"ceramic"},"Glass bead":{shape:"sphere",size:.6,objMaterial:"glass"},"Wooden ball":{shape:"sphere",size:3,objMaterial:"maple"},"Plastic bead":{shape:"sphere",size:.45,objMaterial:"plastic"}},Xo={Earth:9.81,Moon:1.62,Mars:3.71,Jupiter:24.79,"Zero-ish":.2},fs={steel:{name:"Steel",E:2e11,nu:.29,rho:7850,hc:.04,mu:.35,eta:2e-4,e:.92},aluminium:{name:"Aluminium",E:69e9,nu:.33,rho:2700,hc:.05,mu:.45,eta:5e-4,e:.85},brass:{name:"Brass",E:1e11,nu:.34,rho:8500,hc:.05,mu:.4,eta:4e-4,e:.88},glass:{name:"Glass",E:7e10,nu:.22,rho:2500,hc:.06,mu:.5,eta:8e-4,e:.93},ceramic:{name:"Ceramic",E:3e11,nu:.22,rho:3900,hc:.06,mu:.5,eta:6e-4,e:.9},granite:{name:"Stone (granite)",E:5e10,nu:.25,rho:2700,hc:.1,mu:.6,eta:.002,e:.8},ice:{name:"Ice",E:9e9,nu:.33,rho:917,hc:.1,mu:.05,eta:.003,e:.75},rosewood:{name:"Rosewood",E:18e9,nu:.3,rho:1050,hc:.2,mu:.5,eta:.006,e:.8},maple:{name:"Maple",E:12e9,nu:.3,rho:700,hc:.25,mu:.5,eta:.009,e:.75},pine:{name:"Pine",E:9e9,nu:.3,rho:500,hc:.3,mu:.5,eta:.014,e:.7},plastic:{name:"Plastic (ABS)",E:23e8,nu:.35,rho:1050,hc:.3,mu:.4,eta:.02,e:.75},celluloid:{name:"Celluloid",E:2e9,nu:.35,rho:1100,hc:.25,mu:.4,eta:.015,e:.88},rubber:{name:"Rubber",E:5e7,nu:.48,rho:1100,hc:1.2,mu:.9,eta:.1,e:.82},felt:{name:"Felt",E:4e6,nu:.3,rho:300,hc:3,mu:.7,eta:.3,e:.3},concrete:{name:"Concrete",E:3e10,nu:.2,rho:2400,hc:.15,mu:.7,eta:.02,e:.75},mylar:{name:"Mylar (PET)",E:45e8,nu:.38,rho:1390,hc:.2,mu:.4,eta:.01,e:.9},calfskin:{name:"Calfskin",E:6e8,nu:.4,rho:1100,hc:.3,mu:.6,eta:.03,e:.75}},_c=["steel","aluminium","brass","glass","ceramic","granite","ice","rosewood","maple","pine","plastic","celluloid","rubber","felt"],Eh=["rosewood","maple","pine","aluminium","steel","brass","glass","granite"],Th=["pine","maple","concrete","steel","aluminium","brass","glass","granite","ice","plastic"],wh=["mylar","calfskin"];function ui(i){return fs[i]??fs.steel}const qo=1e-9;class Rn{M;omega0;sigma;invMass;q;v;f;freqScale=1;cache=new Map;kern;mp;slots=[];static COEFF_SLOTS=16;constructor(t,e,n,s=null){this.M=t.length,this.mp=this.M+(this.M&1),this.omega0=Float64Array.from(t),this.sigma=Float64Array.from(e),this.invMass=new Float64Array(this.M);for(let r=0;r<this.M;r++)this.invMass[r]=1/n[r];this.kern=s,s?(this.q=s.alloc(this.mp).subarray(0,this.M),this.v=s.alloc(this.mp).subarray(0,this.M),this.f=s.alloc(this.mp).subarray(0,this.M)):(this.q=new Float64Array(this.M),this.v=new Float64Array(this.M),this.f=new Float64Array(this.M))}static wasmDoubles(t){return(t+(t&1))*(3+6*Rn.COEFF_SLOTS)+64}setFreqScale(t){Math.abs(t-this.freqScale)>2e-4&&(this.freqScale=t,this.cache.clear())}coeffs(t){let e=this.cache.get(t);if(e)return e;const n=!!this.kern;if(n){this.cache.size>=Rn.COEFF_SLOTS&&this.cache.clear();const r=this.cache.size;this.slots[r]||(this.slots[r]=this.kern.alloc(this.mp*6)),e=this.slots[r],e.fill(0)}else this.cache.size>24&&this.cache.clear(),e=new Float64Array(this.M*6);const s=this.mp;for(let r=0;r<this.M;r++){const a=this.omega0[r]*this.freqScale,o=Math.min(this.sigma[r],a*.999),l=Math.sqrt(a*a-o*o),h=Math.exp(-o*t),c=Math.cos(l*t),u=Math.sin(l*t),d=h*(c+o/l*u),m=h*u/l,g=-h*(a*a/l)*u,_=h*(c-o/l*u),p=(1-d)/(a*a),f=m;if(n)e[r]=d,e[s+r]=m,e[2*s+r]=g,e[3*s+r]=_,e[4*s+r]=p,e[5*s+r]=f;else{const x=r*6;e[x]=d,e[x+1]=m,e[x+2]=g,e[x+3]=_,e[x+4]=p,e[x+5]=f}}return this.cache.set(t,e),e}sweepSilent(){const t=this.q,e=this.v,n=this.omega0,s=qo;for(let r=0;r<this.M;r++){const a=e[r];a!==0&&a<s&&a>-s&&Math.abs(t[r])*n[r]<s&&this.f[r]===0&&(t[r]=0,e[r]=0)}}step(t){const e=this.coeffs(t);if(this.kern){this.kern.step(e,this.mp,this.q,this.v,this.f,this.mp);return}const n=this.q,s=this.v,r=this.f,a=this.omega0,o=qo;for(let l=0,h=0;l<this.M;l++,h+=6){const c=n[l],u=s[l],d=r[l];if(d===0){if(c===0&&u===0)continue;if(u<o&&u>-o&&Math.abs(c)*a[l]<o){n[l]=0,s[l]=0;continue}}n[l]=e[h]*c+e[h+1]*u+e[h+4]*d,s[l]=e[h+2]*c+e[h+3]*u+e[h+5]*d,r[l]=0}}stepKeep(t){if(this.kern)throw new Error("stepKeep is JS-only");const e=this.coeffs(t),n=this.q,s=this.v,r=this.f;for(let a=0,o=0;a<this.M;a++,o+=6){const l=n[a],h=s[a],c=r[a];n[a]=e[o]*l+e[o+1]*h+e[o+4]*c,s[a]=e[o+2]*l+e[o+3]*h+e[o+5]*c}}energy(){let t=0;for(let e=0;e<this.M;e++){const n=this.omega0[e];t+=(this.v[e]*this.v[e]+n*n*this.q[e]*this.q[e])/this.invMass[e]}return .5*t}}function rr(i,t,e,n){const s=new Float64Array(i.length);let r=1/0;for(let o=0;o<i.length;o++)r=Math.min(r,i[o]);const a=6.9078/Math.max(t,.001);for(let o=0;o<i.length;o++)s[o]=a*Math.pow(i[o]/r,e);return s}function vc(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Yo(i,t){if(t===0)return i===0?1:0;const e=Math.abs(t);if(e>i){let c=Ah(e),u=Rh(e);if(i===0)return c;for(let d=1;d<i;d++){const m=2*d/e*u-c;c=u,u=m}return u}const s=2*Math.floor((i+Math.floor(Math.sqrt(160*i)))/2);let r=!1,a=0,o=0,l=1,h=0;for(let c=s;c>0;c--){const u=2*c/e*l-a;a=l,l=u,Math.abs(l)>1e10&&(l*=1e-10,a*=1e-10,h*=1e-10,o*=1e-10),r&&(o+=l),r=!r,c===i&&(h=a)}return o=2*o-l,h/o}function Ah(i){const t=Math.abs(i);if(t<8){const o=i*i,l=57568490574+o*(-13362590354+o*(6516196407e-1+o*(-1121442418e-2+o*(77392.33017+o*-184.9052456)))),h=57568490411+o*(1029532985+o*(9494680718e-3+o*(59272.64853+o*(267.8532712+o))));return l/h}const e=8/t,n=e*e,s=t-.785398164,r=1+n*(-.001098628627+n*(2734510407e-14+n*(-2073370639e-15+n*2093887211e-16))),a=-.01562499995+n*(.0001430488765+n*(-6911147651e-15+n*(7621095161e-16-n*934935152e-16)));return Math.sqrt(.636619772/t)*(Math.cos(s)*r-e*Math.sin(s)*a)}function Rh(i){const t=Math.abs(i);if(t<8){const l=i*i,h=i*(72362614232+l*(-7895059235+l*(2423968531e-1+l*(-2972611439e-3+l*(15704.4826+l*-30.16036606))))),c=144725228442+l*(2300535178+l*(1858330474e-2+l*(99447.43394+l*(376.9991397+l))));return h/c}const e=8/t,n=e*e,s=t-2.356194491,r=1+n*(.00183105+n*(-3516396496e-14+n*(2457520174e-15+n*-240337019e-15))),a=.04687499995+n*(-.0002002690873+n*(8449199096e-15+n*(-88228987e-14+n*105787412e-15))),o=Math.sqrt(.636619772/t)*(Math.cos(s)*r-e*Math.sin(s)*a);return i<0?-o:o}function jo(i){const t=[4.730040745,7.853204624,10.99560784,14.13716549,17.27875966];return i<=t.length?t[i-1]:(2*i+1)*Math.PI/2}function Zo(i){const t=[1.875104069,4.694091133,7.854757438,10.99554073,14.13716839];return i<=t.length?t[i-1]:(2*i-1)*Math.PI/2}function Ch(i,t){const e=(Math.cosh(i)-Math.cos(i))/(Math.sinh(i)-Math.sin(i)),n=i*t;return .5*((1-e)*Math.exp(n)+(1+e)*Math.exp(-n))+Math.cos(n)-e*Math.sin(n)}function Ph(i,t){const e=(Math.cosh(i)+Math.cos(i))/(Math.sinh(i)+Math.sin(i)),n=i*t;return .5*((1-e)*Math.exp(n)+(1+e)*Math.exp(-n))-Math.cos(n)+e*Math.sin(n)}function Es(i,t=513){const e=new Float32Array(t);let n=0;for(let r=0;r<t;r++)e[r]=i(r/(t-1)),n+=e[r]*e[r];n/=t;const s=1/Math.sqrt(n||1);for(let r=0;r<t;r++)e[r]*=s;return e}function Ko(i,t){const e=i.length-1,n=Math.min(Math.max(t,0),1)*e,s=Math.min(Math.floor(n),e-1),r=n-s;return i[s]+(i[s+1]-i[s])*r}function Dh(i){return 440*Math.pow(2,(i-69)/12)}const Lh=1.2,$o=343;function Ih(i,t){const e=[],n=ui(i.obsMaterial),s=Math.pow(10,(i.obsRing??-6)/20);return i.obstacle==="funnel"?e.push(Uh(i,t,n,s)):i.obstacle==="ramp"?e.push(Nh(i,t,n,s)):i.obstacle==="pegs"&&e.push(Fh(i,t,n,s)),i.walls&&e.push(Oh(i,t)),e}function io(i,t,e,n,s,r){const a=i.filter(u=>u>30&&u<r);if(!a.length||s<=0)return{bank:null,gain:new Float64Array(0)};const o=a.map(u=>2*Math.PI*u),l=a.map(u=>t.eta*2*Math.PI*u/2+1.5),h=new Rn(o,l,new Float64Array(a.length).fill(e)),c=Float64Array.from(a.map(u=>{const d=2*Math.PI*u/$o*n;return Lh*$o*s*(d*d)/(1+d*d)}));return{bank:h,gain:c}}function Uh(i,t,e,n){const s=i.obsX??i.dropX,r=i.obsZ??i.dropZ,a=Math.max(.03,i.obsSize),o=Math.max(.01,Math.min(a*.7,t.maxObjD*.75)),l=Math.min(80,Math.max(10,i.obsAngle))*Math.PI/180,h=(a-o)*Math.tan(l);let c=t.surfTop+Math.max(i.obsHeight,.05),u=c-h;u<t.surfTop+.02&&(u=t.surfTop+.02,c=u+h);const d=.0015,m=a-o,g=c-u,_=Math.hypot(m,g),p=(a+o)/2,f=d/(2*Math.PI*p*p)*Math.sqrt(e.E/(12*e.rho*(1-e.nu*e.nu))),x=[];for(let w=2;w<=9;w++)x.push(f*(w*(w*w-1))/Math.sqrt(w*w+1)*(1+.6*g/_));const y=Math.PI*(a+o)*_,{bank:v,gain:D}=io(x,e,e.rho*y*d,p,n,t.fmax);return{mat:e,min:[s-a-d,u-d,r-a-d],max:[s+a+d,c+d,r+a+d],bank:v,gain:D,sdf(w,P,S,M){const C=w-s,I=S-r,O=Math.hypot(C,I),k=O-o,W=P-u,B=Math.min(1,Math.max(0,(k*m+W*g)/(_*_))),$=k-B*m,G=W-B*g,Q=Math.hypot($,G)||1e-12,st=O>1e-9?C/O:1,dt=O>1e-9?I/O:0;return M[0]=$/Q*st,M[1]=G/Q,M[2]=$/Q*dt,Q-d/2},excite(w,P,S,M){if(!v)return;const C=Math.atan2(S-r,w-s);for(let I=0;I<v.M;I++)v.f[I]+=Math.cos((I+2)*C+I)*M*v.invMass[I]},decor:{type:"funnel",cx:s,cz:r,y0:u,y1:c,rb:o,rt:a,t:d,material:i.obsMaterial}}}function Nh(i,t,e,n){const s=Math.max(.08,i.obsSize*2.5),r=.1,a=.008,o=Math.min(60,Math.max(4,i.obsAngle))*Math.PI/180,l=i.obsX??i.dropX,h=i.obsZ??i.dropZ,c=(i.obsDir??0)*Math.PI/180,u=Math.cos(c),d=Math.sin(c),m=t.surfTop+.012,g=[u*Math.cos(o),-Math.sin(o),d*Math.cos(o)],_=[u*Math.sin(o),Math.cos(o),d*Math.sin(o)],p=[_[1]*g[2]-_[2]*g[1],_[2]*g[0]-_[0]*g[2],_[0]*g[1]-_[1]*g[0]],f=[l+u*(s/2)*Math.cos(o)-_[0]*a/2,m+s/2*Math.sin(o)-_[1]*a/2,h+d*(s/2)*Math.cos(o)-_[2]*a/2],x=e.E*a**3/(12*(1-e.nu*e.nu)),y=[];for(let w=1;w<=3;w++)for(let P=1;P<=3;P++)y.push(Math.PI/2*Math.sqrt(x/(e.rho*a))*((w/s)**2+(P/r)**2));y.sort((w,P)=>w-P);const{bank:v,gain:D}=io(y.slice(0,8),e,e.rho*s*r*a,Math.max(s,r)/2,n,t.fmax),T=s/2+r/2+a;return{mat:e,min:[f[0]-T,f[1]-T,f[2]-T],max:[f[0]+T,f[1]+T,f[2]+T],bank:v,gain:D,sdf(w,P,S,M){const C=w-f[0],I=P-f[1],O=S-f[2],k=C*g[0]+I*g[1]+O*g[2],W=C*_[0]+I*_[1]+O*_[2],B=C*p[0]+I*p[1]+O*p[2],$=Math.abs(k)-s/2,G=Math.abs(W)-a/2,Q=Math.abs(B)-r/2,st=Math.max($,0),dt=Math.max(G,0),St=Math.max(Q,0),Ft=Math.hypot(st,dt,St);let q,K,ot,et;return Ft>0?(q=st/Ft*Math.sign(k),K=dt/Ft*Math.sign(W),ot=St/Ft*Math.sign(B),et=Ft):G>=$&&G>=Q?(q=0,K=Math.sign(W)||1,ot=0,et=G):$>=Q?(q=Math.sign(k)||1,K=0,ot=0,et=$):(q=0,K=0,ot=Math.sign(B)||1,et=Q),M[0]=q*g[0]+K*_[0]+ot*p[0],M[1]=q*g[1]+K*_[1]+ot*p[1],M[2]=q*g[2]+K*_[2]+ot*p[2],et},excite(w,P,S,M){if(!v)return;const C=w-f[0],I=P-f[1],O=S-f[2],k=(C*g[0]+I*g[1]+O*g[2])/s+.5,W=(C*p[0]+I*p[1]+O*p[2])/r+.5;for(let B=0;B<v.M;B++)v.f[B]+=2*Math.sin(Math.PI*(1+B%3)*k)*Math.sin(Math.PI*(1+Math.floor(B/3))*W)*M*v.invMass[B]},decor:{type:"ramp",c:f,u:g,n:_,w:p,L:s,W:r,t:a,material:i.obsMaterial}}}function Fh(i,t,e,n){const a=Math.max(.025,t.maxObjD*2.2),o=t.surfTop+Math.max(i.obsHeight,.08),l=Math.max(a*2,i.obsSize*2),h=a*.866,c=[];for(let I=0;;I++){const O=o-I*h;if(O<t.surfTop+Math.max(.03,t.maxObjD*1.5))break;const k=I%2?a/2:0;for(let W=-l/2+k;W<=l/2+1e-9;W+=a)c.push([(i.obsX??i.dropX)+W,O]);if(c.length>60)break}const u=(i.obsZ??i.dropZ)-.12/2,d=.003*.003/4,m=Math.sqrt(e.E*d/e.rho),g=vc(i.seed*31+7),_=[],p=[],f=[4.73,7.853,10.996];c.forEach((I,O)=>{const k=.12*(1+.04*(g()-.5));for(const W of f)_.push(W*W/(2*Math.PI*k*k)*m),p.push(O)});const{bank:x,gain:y}=io(_,e,e.rho*Math.PI*.003*.003*.12,.003*4,n,t.fmax),v=c.map(()=>[]);if(x){let I=0;_.forEach((O,k)=>{O>30&&O<t.fmax&&(v[p[k]].push(I),I++)})}const D=c.map(I=>I[0]),T=c.map(I=>I[1]),w=Math.min(...D)-.003,P=Math.max(...D)+.003,S=Math.min(...T)-.003,M=Math.max(...T)+.003;let C=0;return{mat:e,min:[w,S,u],max:[P,M,u+.12],bank:x,gain:y,sdf(I,O,k,W){if(k<u-.02||k>u+.12+.02)return W[0]=0,W[1]=1,W[2]=0,1;let B=1e9,$=0,G=0,Q=1;for(let St=0;St<c.length;St++){const Ft=I-c[St][0],q=O-c[St][1];if(Math.abs(Ft)>.05||Math.abs(q)>.05)continue;const K=Math.hypot(Ft,q);K<B&&(B=K,$=St,G=Ft,Q=q)}C=$;const st=k<u?u-k:k>u+.12?k-(u+.12):0,dt=Math.hypot(B,st)||1e-12;return W[0]=G/(B||1)*(B/dt),W[1]=Q/(B||1)*(B/dt),W[2]=(k<u?-st:st)/dt,dt-.003},excite(I,O,k,W){if(!x)return;const B=Math.min(1,Math.max(0,(k-u)/.12)),$=v[C];for(let G=0;G<$.length;G++)x.f[$[G]]+=1.6*Math.sin(Math.PI*(G+1)*B)*W*x.invMass[$[G]]},decor:{type:"pegs",pegs:c,z0:u,len:.12,r:.003,material:i.obsMaterial}}}function Oh(i,t){const e=t.surfTop+Math.max(.01,i.wallHeight),n=.008,s=ui("maple");if(t.extent.kind==="round"){const u=t.extent.r;return{mat:s,min:[-u-n,-1,-u-n],max:[u+n,e,u+n],bank:null,gain:new Float64Array(0),sdf(d,m,g,_){const p=Math.hypot(d,g),f=Math.max(u-p,p-(u+n)),x=m-e,y=p>1e-9?d/p:1,v=p>1e-9?g/p:0,D=p<u+n/2?-1:1;if(x>0&&f>0){const T=Math.hypot(f,x);return _[0]=D*(f/T)*y,_[1]=x/T,_[2]=D*(f/T)*v,T}return x>f?(_[0]=0,_[1]=1,_[2]=0,x):(_[0]=D*y,_[1]=0,_[2]=D*v,f)},excite(){},decor:{type:"wallsRound",r:u,h:e,t:n}}}const{hx:r,hz:a}=t.extent,o=(e-.5)/2,l=(e+.5)/2,h=[[r+n/2,o,0,n/2,l,a+n],[-r-n/2,o,0,n/2,l,a+n],[0,o,a+n/2,r+n,l,n/2],[0,o,-a-n/2,r+n,l,n/2]],c=new Float64Array(3);return{mat:s,min:[-r-n,-1,-a-n],max:[r+n,e,a+n],bank:null,gain:new Float64Array(0),sdf(u,d,m,g){let _=1/0;for(const[p,f,x,y,v,D]of h){const T=kh(u-p,d-f,m-x,y,v,D,c);T<_&&(_=T,g[0]=c[0],g[1]=c[1],g[2]=c[2])}return _},excite(){},decor:{type:"wallsRect",hx:r,hz:a,h:e,t:n}}}function kh(i,t,e,n,s,r,a){const o=Math.abs(i)-n,l=Math.abs(t)-s,h=Math.abs(e)-r,c=Math.max(o,0),u=Math.max(l,0),d=Math.max(h,0),m=Math.hypot(c,u,d);return m>0?(a[0]=c/m*Math.sign(i),a[1]=u/m*Math.sign(t),a[2]=d/m*Math.sign(e),m):o>=l&&o>=h?(a[0]=Math.sign(i)||1,a[1]=0,a[2]=0,o):l>=h?(a[0]=0,a[1]=Math.sign(t)||1,a[2]=0,l):(a[0]=0,a[1]=0,a[2]=Math.sign(e)||1,h)}const on=1.2,Ce=343;class so{bank;mat;groundY=-.3;maxDepth=.01;gL;gR;maxPhi;extraOut(t,e){e[0]=0,e[1]=0}slowUpdate(){}preStep(t){}bendLever=0;phiGrad(t,e,n,s,r,a){const[l,h]=this.range(t);this.phi(t,e+2e-4,n,s),this.phi(t,e-2e-4,n,a);for(let c=l;c<l+h;c++)s[c]=(s[c]-a[c])/(2*2e-4);this.phi(t,e,n+2e-4,r),this.phi(t,e,n-2e-4,a);for(let c=l;c<l+h;c++)r[c]=(r[c]-a[c])/(2*2e-4)}wBound(){const t=this.bank.q,e=this.maxPhi;let n=0;for(let s=0;s<t.length;s++)n+=Math.abs(t[s])*e[s];return n}rigid(t,e,n,s,r){const a=this.groundY-(e-s);return a>0?(r.delta=a,r.nx=0,r.ny=1,r.nz=0,r.mat=zh,!0):!1}}const zh=ui("maple"),Bh=ui("steel");function xc(i,t,e){if(i.sort((u,d)=>u.f-d.f),i.length<=t)return{modes:i,comp:i.map(()=>1)};const n=Math.floor(t*.65),s=i.slice(n),r=vc(e);for(let u=s.length-1;u>0;u--){const d=Math.floor(r()*(u+1));[s[u],s[d]]=[s[d],s[u]]}const a=s.slice(0,t-n),o=Math.sqrt(s.length/a.length),l=i.slice(0,n).concat(a),h=l.map((u,d)=>d<n?1:o),c=l.map((u,d)=>[u,h[d]]).sort((u,d)=>u[0].f-d[0].f);return{modes:c.map(u=>u[0]),comp:c.map(u=>u[1])}}function Gh(i){const e=Math.ceil(i)+2;let n=new Float64Array(e+1),s=new Float64Array(e+1);const r=[],a=new Float64Array(e+64+Math.ceil(Math.sqrt(40*(i+2)))+40);Jo(.04,e,a),n.set(a.subarray(0,e+1));for(let o=2*.04;o<i;o+=.04){const l=Math.min(e,Math.ceil(o));Jo(o,l,a);for(let c=0;c<=l;c++)s[c]=a[c];for(let c=0;c<=l;c++){const u=n[c],d=s[c];u!==0&&u*d<0&&r.push({m:c,j:o-.04+.04*u/(u-d)})}const h=n;n=s,s=h}return r}function Jo(i,t,e){let n=Math.max(t,Math.ceil(i))+20+Math.ceil(Math.sqrt(40*Math.max(i,t)));if(n%2&&n++,e.length<n+2)throw new Error("besselAll buffer");let s=0,r=1e-30,a=0;for(let l=n;l>0;l--){const h=2*l/i*r-s;if(s=r,r=h,l-1<=t&&(e[l-1]=r),(l-1)%2===0&&l-1>0&&(a+=r),Math.abs(r)>1e250){r*=1e-250,s*=1e-250,a*=1e-250;for(let c=l-1;c<=Math.min(t,n);c++)e[c]*=1e-250}}const o=2*a+r;for(let l=0;l<=t;l++)e[l]/=o}class Qo{constructor(t,e,n,s,r,a,o){this.a=t;const l=Math.sqrt(n/e),h=Math.min(2*Math.PI*r*t/l*1.02,1400),c=Gh(h),u=s*(on*t/e),d=[];for(const p of c){const f=u*.75/p.j*(p.m===0?1.6:1),x=p.j*l/(2*Math.PI*t)/Math.sqrt(1+f);x>r||(d.push({m:p.m,j:p.j,f:x,sin:!1,table:-1}),p.m>0&&d.push({m:p.m,j:p.j,f:x,sin:!0,table:-1}))}const m=xc(d,a,o);this.modes=m.modes,this.comp=m.comp;const g=new Map;for(const p of this.modes){const f=p.m+":"+p.j.toFixed(6);let x=g.get(f);if(x===void 0){const y=(p.m===0?1:Math.SQRT2)/Math.abs(Yo(p.m+1,p.j)),v=new Float32Array(257);for(let D=0;D<257;D++)v[D]=y*Yo(p.m,p.j*D/256);x=this.tables.length,this.tables.push(v),g.set(f,x)}p.table=x}this.mMax=this.modes.reduce((p,f)=>Math.max(p,f.m),0),this.cosm=new Float64Array(this.mMax+1),this.sinm=new Float64Array(this.mMax+1);const _=this.modes.length;this.mean=new Float64Array(_),this.maxPhi=new Float64Array(_);for(let p=0;p<_;p++){const f=this.tables[this.modes[p].table];let x=0;for(let y=0;y<f.length;y++)x=Math.max(x,Math.abs(f[y]));if(this.maxPhi[p]=x,this.modes[p].m===0){let y=0;for(let v=0;v<256;v++){const D=v/256,T=(v+1)/256;y+=.5*(f[v]*D+f[v+1]*T)/256}this.mean[p]=2*y}}}modes;comp;tables=[];mMax;mean;maxPhi;cosm;sinm;phi(t,e,n){const s=Math.hypot(t,e),r=Math.min(s/this.a,1),a=s>1e-12?t/s:1,o=s>1e-12?e/s:0,l=this.cosm,h=this.sinm;l[0]=1,h[0]=0;for(let _=1;_<=this.mMax;_++)l[_]=l[_-1]*a-h[_-1]*o,h[_]=h[_-1]*a+l[_-1]*o;const c=r*256,u=Math.min(Math.floor(c),255),d=c-u,m=this.modes,g=this.tables;for(let _=0;_<m.length;_++){const p=m[_],f=g[p.table];n[_]=(f[u]+(f[u+1]-f[u])*d)*(p.sin?h[p.m]:l[p.m])}}}class Hh extends so{kind="membrane";a;set;kappa2;glideK;hoop;vis;shell;depth;bottom=null;cavK=0;m0Top=new Int32Array(0);m0Bot=new Int32Array(0);snare=null;constructor(t,e=null){super(),this.a=t.memDiameter/200;const n=ui(t.memMaterial);this.mat=n;const s=n.rho*t.memThickness/1e3,r=Math.min(t.fmax,.45*t.sampleRate);this.set=new Qo(this.a,s,t.memTension,t.memAir,r,t.maxModes,t.seed*7+3);const a=this.set.modes,o=this.set.comp,l=a.length,h=a.map(p=>2*Math.PI*p.f),c=Math.PI*this.a*this.a,u=new Float64Array(l).fill(s*c),d=rr(h,t.decay,t.hfDamp);for(let p=0;p<l;p++)a[p].m===0&&(d[p]*=1.6);this.bank=new Rn(h,d,u,e),this.kappa2=Float64Array.from(a.map(p=>(p.j/this.a)**2)),this.glideK=t.memGlide*(n.E*t.memThickness/1e3)/(2*(1-n.nu)*t.memTension),this.maxPhi=this.set.maxPhi,this.hoop=t.memHoop,this.groundY=-.45;const m=this.a*(.12+.55*t.micSpread),g=new Float64Array(l);this.gL=new Float64Array(l),this.gR=new Float64Array(l);const _=1/(1+t.micDist/this.a);this.set.phi(m*Math.cos(Math.PI-.35),m*Math.sin(Math.PI-.35),g);for(let p=0;p<l;p++)this.gL[p]=g[p];this.set.phi(m*Math.cos(.35),m*Math.sin(.35),g);for(let p=0;p<l;p++)this.gR[p]=g[p];for(let p=0;p<l;p++){const f=this.set.mean[p],x=on*Ce*o[p];this.gL[p]=x*(_*this.gL[p]+1.5*f),this.gR[p]=x*(_*this.gR[p]+1.5*f)}if(this.vis=Math.min(l,140),this.shell=t.memShell!==!1,this.depth=Math.max(.02,(t.memDepth??35)/100),this.shell&&t.memBottom){const p=new Qo(this.a,s,t.memBottomTension,t.memAir,Math.min(r,12e3),Math.min(160,t.maxModes),t.seed*7+9),f=p.modes.map(T=>2*Math.PI*T.f),x=rr(f,t.decay*.8,t.hfDamp),y=new Rn(f,x,new Float64Array(f.length).fill(s*c),e),v=new Float64Array(p.modes.length);p.phi(this.a*.35,this.a*.2,v);const D=Float64Array.from(p.modes.map((T,w)=>on*Ce*p.comp[w]*(.55*v[w]+.9*p.mean[w])));this.bottom={set:p,bank:y,gain:D},this.m0Bot=Int32Array.from(p.modes.map((T,w)=>T.m===0?w:-1).filter(T=>T>=0))}if(this.shell&&(this.m0Top=Int32Array.from(a.map((p,f)=>p.m===0?f:-1).filter(p=>p>=0)),this.cavK=this.bottom?on*Ce*Ce/(c*this.depth):0),this.bottom&&t.snares){const f=new Float64Array(18),x=[];for(let T=0;T<18;T++){f[T]=(-.75+1.5*T/17)*this.a;const w=new Float64Array(this.bottom.set.modes.length);this.bottom.set.phi(f[T],T%2?.006:-.006,w),x.push(w)}const y=Math.max(.1,t.snareTension),v=300*y,D=.02*y;this.snare={n:18,x:f,s:new Float64Array(18).fill(D/v),v:new Float64Array(18),phi:x,m:15e-5,k:v,s0:D/v,kc:15e4,c:.02},this.settleSnares()}}settleSnares(){const t=this.snare,e=this.bottom.bank,n=t.n,s=e.M,r=new Float64Array(n*n),a=new Float64Array(n).fill(t.kc*t.s0);for(let l=0;l<n;l++)for(let h=0;h<n;h++){let c=0;for(let u=0;u<s;u++)c+=t.phi[l][u]*t.phi[h][u]*e.invMass[u]/e.omega0[u]**2;r[l*n+h]=t.kc*c+(l===h?1+t.kc/t.k:0)}for(let l=0;l<n;l++){let h=l;for(let c=l+1;c<n;c++)Math.abs(r[c*n+l])>Math.abs(r[h*n+l])&&(h=c);if(h!==l){for(let u=0;u<n;u++){const d=r[l*n+u];r[l*n+u]=r[h*n+u],r[h*n+u]=d}const c=a[l];a[l]=a[h],a[h]=c}for(let c=l+1;c<n;c++){const u=r[c*n+l]/r[l*n+l];for(let d=l;d<n;d++)r[c*n+d]-=u*r[l*n+d];a[c]-=u*a[l]}}const o=new Float64Array(n);for(let l=n-1;l>=0;l--){let h=a[l];for(let c=l+1;c<n;c++)h-=r[l*n+c]*o[c];o[l]=h/r[l*n+l]}for(let l=0;l<s;l++){let h=0;for(let c=0;c<n;c++)h+=o[c]*t.phi[c][l];e.q[l]=h*e.invMass[l]/e.omega0[l]**2}for(let l=0;l<n;l++)t.s[l]=t.s0-o[l]/t.k}preStep(t){if(!this.shell||!this.bottom)return;const e=this.bank,n=this.bottom.bank,s=Math.PI*this.a*this.a,r=this.set.mean,a=this.bottom.set.mean;let o=0;for(let c=0;c<this.m0Top.length;c++){const u=this.m0Top[c];o+=s*r[u]*e.q[u]}for(let c=0;c<this.m0Bot.length;c++){const u=this.m0Bot[c];o-=s*a[u]*n.q[u]}const l=-this.cavK*o;for(let c=0;c<this.m0Top.length;c++){const u=this.m0Top[c];e.v[u]+=t*l*s*r[u]*e.invMass[u]}for(let c=0;c<this.m0Bot.length;c++){const u=this.m0Bot[c];n.v[u]-=t*l*s*a[u]*n.invMass[u]}const h=this.snare;if(h){const c=.24*Math.sqrt(h.kc*h.m),u=2*.05*Math.sqrt(h.k/h.m);for(let d=0;d<h.n;d++){const m=h.phi[d];let g=0,_=0;for(let y=0;y<m.length;y++)g+=n.q[y]*m[y],_+=n.v[y]*m[y];const p=h.s[d]-g,f=p>0?Math.max(0,h.kc*p+c*(h.v[d]-_)):0;if(f>0)for(let y=0;y<m.length;y++)n.f[y]+=f*m[y]*n.invMass[y];const x=(-f-h.k*(h.s[d]-h.s0))/h.m-u*h.v[d];h.v[d]+=t*x,h.s[d]+=t*h.v[d]}}n.step(t)}extraOut(t,e){if(e[0]=0,e[1]=0,!this.bottom)return;const n=this.bottom;let s=0;for(let r=0;r<n.bank.M;r++)s+=n.gain[r]*n.bank.v[r];if(this.snare){let r=0;for(let a=0;a<this.snare.n;a++)r+=this.snare.v[a];s+=r*on*Ce*.15}e[0]=s,e[1]=s}locate(t,e,n,s){const r=Math.hypot(t,e);if(r>this.a+n*.999)return-1;if(r>this.a){const a=this.a/r;s.xc=t*a,s.zc=e*a}else s.xc=t,s.zc=e;return s.baseY=0,0}range(){return[0,this.bank.M]}phi(t,e,n,s){this.set.phi(e,n,s)}slowUpdate(){if(this.glideK<=0)return;const t=this.bank;let e=0;for(let n=0;n<t.M;n++){const s=t.omega0[n];e+=this.kappa2[n]*.5*(t.q[n]*t.q[n]+t.v[n]*t.v[n]/(s*s))}t.setFreqScale(Math.sqrt(1+this.glideK*e))}rigid(t,e,n,s,r){if(super.rigid(t,e,n,s,r))return!0;if(!this.hoop)return!1;const a=this.a+.009,o=.0065,l=.004,h=Math.hypot(t,n),c=h-a,u=e-l,d=Math.hypot(c,u),m=d-o-s;if(m>=0||d<1e-9)return!1;const g=h>1e-9?t/h:1,_=h>1e-9?n/h:0;return r.delta=-m,r.nx=c/d*g,r.ny=u/d,r.nz=c/d*_,r.mat=Bh,!0}visual(){const s=new Float32Array(16131);for(let c=1;c<=48;c++){const u=this.a*Math.pow(c/48,.85);for(let d=0;d<112;d++){const m=d/112*Math.PI*2,g=(1+(c-1)*112+d)*3;s[g]=u*Math.cos(m),s[g+1]=0,s[g+2]=u*Math.sin(m)}}const r=[];for(let c=0;c<112;c++)r.push(0,1+(c+1)%112,1+c);for(let c=1;c<48;c++)for(let u=0;u<112;u++){const d=1+(c-1)*112+u,m=1+(c-1)*112+(u+1)%112;r.push(d,m,d+112,m,m+112,d+112)}const a=this.vis,o=new Float32Array(5377*a),l=new Float64Array(this.bank.M);for(let c=0;c<5377;c++){this.set.phi(s[c*3],s[c*3+2],l);for(let u=0;u<a;u++)o[c*a+u]=l[u]}const h=new Int32Array(a);for(let c=0;c<a;c++)h[c]=c;return{positions:s,indices:new Uint32Array(r),phi:o,visModes:h}}decor(){return{type:"membrane",radius:this.a,hoop:this.hoop,groundY:this.groundY,depth:this.shell?this.depth:Math.min(.45,this.a*1.3),snares:!!this.snare,bottom:!!this.bottom}}}class Vh extends so{kind="plate";Lx;Lz;thick;mx;nz;vis;matKey;constructor(t,e=null){super(),this.Lx=t.plateW,this.Lz=t.plateD,this.thick=t.plateThickness/1e3;const n=ui(t.plateMaterial);this.mat=n,this.matKey=t.plateMaterial;const s=this.thick,r=n.E*s**3/(12*(1-n.nu*n.nu)),a=n.rho*s,o=Math.PI*Math.PI*Math.sqrt(r/a),l=Math.min(t.fmax,.45*t.sampleRate),h=2*Math.PI*l,c=[],u=Math.floor(this.Lx*Math.sqrt(h/o));for(let v=1;v<=u;v++){const D=h/o-(v/this.Lx)**2;if(D<=0)break;const T=Math.floor(this.Lz*Math.sqrt(D));for(let w=1;w<=T;w++){const P=o*((v/this.Lx)**2+(w/this.Lz)**2);if(c.push({f:P/(2*Math.PI),m:v,n:w}),c.length>4e5)break}}const{modes:d,comp:m}=xc(c,t.maxModes,t.seed*13+5),g=d.length;this.mx=Int32Array.from(d.map(v=>v.m)),this.nz=Int32Array.from(d.map(v=>v.n));const _=d.map(v=>2*Math.PI*v.f);this.bank=new Rn(_,rr(_,t.decay,t.hfDamp),new Float64Array(g).fill(a*this.Lx*this.Lz),e),this.maxPhi=new Float64Array(g).fill(2),this.bendLever=s/2,this.kappa2=Float64Array.from(d.map(v=>(Math.PI*v.m/this.Lx)**2+(Math.PI*v.n/this.Lz)**2)),this.bergerK=(t.plateNonlin??0)*n.E/(n.rho*(1-n.nu*n.nu)),this.invR=(t.plateCurve??0)*.6/Math.max(this.Lx,this.Lz),this.invR>0&&this.bergerK===0&&(this.bergerK=n.E/(n.rho*(1-n.nu*n.nu))),this.mu=Float64Array.from(d.map(v=>v.m%2&&v.n%2?8/(v.m*v.n*Math.PI*Math.PI):0)),this.groundY=-.04,this.maxDepth=Math.max(this.thick,.004);const p=new Float64Array(g);this.gL=new Float64Array(g),this.gR=new Float64Array(g);const f=this.Lx*(.08+.3*t.micSpread),x=1/(1+t.micDist/Math.min(this.Lx,this.Lz)),y=Ce*Ce/(2*Math.PI)*Math.sqrt(a/r);this.phi(0,-f,this.Lz*.11,p);for(let v=0;v<g;v++)this.gL[v]=p[v];this.phi(0,f,-this.Lz*.07,p);for(let v=0;v<g;v++)this.gR[v]=p[v];for(let v=0;v<g;v++){const D=Math.min(1,Math.sqrt(d[v].f/y)),T=on*Ce*m[v]*x*(.15+.85*D);this.gL[v]*=T,this.gR[v]*=T}this.vis=Math.min(g,160)}kappa2;bergerK=0;invR=0;mu=new Float64Array(0);preStep(t){const e=this.bergerK;if(e<=0)return;const n=this.bank,s=n.q,r=n.v,a=n.f,o=n.M,l=this.kappa2,h=this.mu,c=this.invR,u=.5*t;let d=0,m=0;for(let p=0;p<o;p++){const f=s[p]+u*r[p];f!==0&&(d+=l[p]*f*f,m+=h[p]*f)}const g=.5*d+m*c;if(g===0)return;const _=e*g;for(let p=0;p<o;p++)a[p]-=_*(l[p]*(s[p]+u*r[p])+h[p]*c)}locate(t,e,n,s){const r=this.Lx/2,a=this.Lz/2;return Math.abs(t)>r+n||Math.abs(e)>a+n?-1:(s.xc=Math.min(Math.max(t,-r),r),s.zc=Math.min(Math.max(e,-a),a),s.baseY=0,0)}range(){return[0,this.bank.M]}phi(t,e,n,s){const r=(e/this.Lx+.5)*Math.PI,a=(n/this.Lz+.5)*Math.PI;for(let o=0;o<s.length&&o<this.mx.length;o++)s[o]=2*Math.sin(this.mx[o]*r)*Math.sin(this.nz[o]*a)}visual(){const e=Math.max(8,Math.round(72*this.Lz/this.Lx)),n=new Float32Array(73*(e+1)*3);let s=0;for(let u=0;u<=e;u++)for(let d=0;d<=72;d++)n[s++]=(d/72-.5)*this.Lx,n[s++]=0,n[s++]=(u/e-.5)*this.Lz;const r=[];for(let u=0;u<e;u++)for(let d=0;d<72;d++){const m=u*73+d,g=m+1,_=m+72+1,p=_+1;r.push(m,_,g,g,_,p)}const a=n.length/3,o=this.vis,l=new Float32Array(a*o),h=new Float64Array(this.bank.M);for(let u=0;u<a;u++){this.phi(0,n[u*3],n[u*3+2],h);for(let d=0;d<o;d++)l[u*o+d]=h[d]}const c=new Int32Array(o);for(let u=0;u<o;u++)c[u]=u;return{positions:n,indices:new Uint32Array(r),phi:l,visModes:c}}decor(){return{type:"plate",w:this.Lx,d:this.Lz,thick:this.thick,groundY:this.groundY,material:this.matKey}}}const tl={uniform:[1,2.756,5.404,8.933,13.34,19.9],xylophone:[1,3,6.1,10.3,14.8],marimba:[1,4,9.9,16.6,22.4],tongue:[1,6.267,17.55,34.39,56.84]};class Wh extends so{kind="bars";bars=[];width;thick;gap;tongue;res=null;resMix;resDrive;barCenterPhi=[];matKey;resOn;constructor(t,e=null){super();const n=ui(t.barMaterial);this.mat=n,this.matKey=t.barMaterial,this.width=t.barWidth/1e3,this.thick=t.barThickness/1e3,this.gap=t.barGap/1e3,this.tongue=t.barTuning==="tongue";const s=tl[t.barTuning]??tl.uniform,r=gc(t).slice(0,Math.max(1,t.barCount)),a=Math.min(t.fmax,.45*t.sampleRate),o=r.length,l=this.width+this.gap,h=n.E/(2*(1+n.nu)),c=this.width,u=this.thick,d=c*u**3/3*(1-.63*u/c),m=c*u*(c*c+u*u)/12,g=Math.sqrt(h*d/(n.rho*m)),_=[],p=[];for(let M=1;M<=6;M++)if(this.tongue){const C=Zo(M);_.push(Es(I=>Ph(C,I))),p.push(Es(I=>Math.sin((2*M-1)*Math.PI*I/2)))}else{const C=jo(M);_.push(Es(I=>Ch(C,I))),p.push(Es(I=>Math.cos(M*Math.PI*I)))}const f=[],x=[],y=[],v=[],D=[],T=[],w=(o-1)*l/2+.2;for(let M=0;M<o;M++){const C=Dh(r[M]),I=Math.sqrt(n.E*u*u/(12*n.rho)),O=this.tongue?Zo(1):jo(1);let k=Math.sqrt(O*O*I/(2*Math.PI*C));!this.tongue&&t.barTuning!=="uniform"&&(k*=.84),k=Math.min(Math.max(k,.04),1.6);const W=(M-(o-1)/2)*l,B=f.length,$=[],G=[],Q=n.rho*k*c*u,st=Math.max(-1,Math.min(1,W/w))*t.micSpread,dt=Math.cos(Math.PI/4*(1+st)),St=Math.sin(Math.PI/4*(1+st)),Ft=rr(s.map(K=>2*Math.PI*C*K),t.decay,t.hfDamp);s.forEach((K,ot)=>{const et=C*K;if(et>a)return;f.push(2*Math.PI*et),x.push(Ft[ot]),y.push(Q),$.push(0),G.push(_[ot]),T.push((this.tongue,2));const Mt=2*Math.PI*et/Ce*c,wt=Mt*Mt/(1+Mt*Mt);v.push(on*Ce*wt*dt),D.push(on*Ce*wt*St)});for(let K=1;K<=3;K++){const ot=this.tongue?(2*K-1)/(4*k)*g:K/(2*k)*g;if(ot>a)break;const et=2*Math.PI*ot;f.push(et),x.push(6.9078/t.decay*Math.pow(et/(2*Math.PI*C),t.hfDamp)*1.5),y.push(Q),$.push(1),G.push(p[K-1]),T.push(2*Math.sqrt(3));const Mt=et/Ce*c,wt=.3*(Mt*Mt)/(1+Mt*Mt);v.push(on*Ce*wt*dt),D.push(on*Ce*wt*St)}const q=Ce/(4*C*Math.pow(2,t.resTune/1200));this.bars.push({x:W,len:k,hz:C,start:B,count:f.length-B,kinds:Int8Array.from($),tables:G,tubeLen:q,panL:dt,panR:St})}this.bank=new Rn(f,x,y,e),this.gL=Float64Array.from(v),this.gR=Float64Array.from(D),this.maxPhi=Float64Array.from(T),this.groundY=-.16,this.bendLever=this.thick/2,this.maxDepth=Math.max(this.thick*.9,.002),this.resOn=t.resonators,this.resMix=t.resMix;const P=[],S=[];for(const M of this.bars){const C=M.hz*Math.pow(2,t.resTune/1200);for(const k of[1,3]){const W=2*Math.PI*Math.min(C*k,a);P.push(W),S.push(W/(2*t.resQ*(k===1?1:.7)))}const I=new Float64Array(M.count),O=this.tongue?.85:.5;for(let k=0;k<M.count;k++)I[k]=M.kinds[k]===0?Ko(M.tables[k],O):0;this.barCenterPhi.push(I)}this.resOn&&(this.res=new Rn(P,S,new Float64Array(P.length).fill(1))),this.resDrive=new Float64Array(P.length)}locate(t,e,n,s){const r=this.width+this.gap,a=this.bars.length,o=Math.round(t/r+(a-1)/2);let l=-1,h=1/0;for(let u=Math.max(0,o-1);u<=Math.min(a-1,o+1);u++){const d=this.bars[u],m=this.width/2,g=d.len/2,_=Math.max(Math.abs(t-d.x)-m,0),p=Math.max(Math.abs(e)-g,0),f=Math.hypot(_,p);if(f<=n&&f<h&&(h=f,l=u),f===0){l=u;break}}if(l<0)return-1;const c=this.bars[l];return s.xc=Math.min(Math.max(t,c.x-this.width/2),c.x+this.width/2),s.zc=Math.min(Math.max(e,-c.len/2),c.len/2),s.baseY=0,l}range(t){const e=this.bars[t];return[e.start,e.count]}phi(t,e,n,s){const r=this.bars[t],a=n/r.len+.5,o=Math.sqrt(3)*(2*(e-r.x)/this.width);for(let l=0;l<r.count;l++){const h=Ko(r.tables[l],a);s[r.start+l]=r.kinds[l]===0?h:h*o}}extraOut(t,e){e[0]=0,e[1]=0;const n=this.res;if(!n)return;const s=this.bank.v;for(let a=0;a<this.bars.length;a++){const o=this.bars[a],l=this.barCenterPhi[a];let h=0;for(let c=0;c<o.count;c++)h+=l[c]*s[o.start+c];n.f[2*a]=2*n.sigma[2*a]*h,n.f[2*a+1]=2*n.sigma[2*a+1]*h*.5}n.step(t);const r=on*Ce*this.resMix;for(let a=0;a<this.bars.length;a++){const o=n.v[2*a]+n.v[2*a+1];e[0]+=r*o*this.bars[a].panL,e[1]+=r*o*this.bars[a].panR}}visual(){const e=[],n=[],s=[];for(const u of this.bars)for(let d=0;d<u.count;d++)u.kinds[d]===0&&d<3&&s.push(u.start+d);for(const u of this.bars)for(let d=0;d<u.count;d++)if(u.kinds[d]===1&&d<u.count){s.push(u.start+d);break}const r=s.length,a=new Map;s.forEach((u,d)=>a.set(u,d));const o=[],l=new Float64Array(this.bank.M),h=this.width/2;for(let u=0;u<this.bars.length;u++){const d=this.bars[u],m=e.length/3;for(let p=0;p<=48;p++){const f=(p/48-.5)*d.len;for(const[x,y]of[[-h,0],[h,0],[h,-this.thick],[-h,-this.thick]]){e.push(d.x+x,y,f),l.fill(0),this.phi(u,d.x+x,f,l);const v=new Array(r).fill(0);for(let D=0;D<d.count;D++){const T=a.get(d.start+D);T!==void 0&&(v[T]=l[d.start+D])}o.push(v)}}for(let p=0;p<48;p++){const f=m+p*4,x=f+4;for(let y=0;y<4;y++){const v=f+y,D=f+(y+1)%4,T=x+y,w=x+(y+1)%4;n.push(v,T,D,D,T,w)}}const g=m,_=m+48*4;n.push(g,g+1,g+2,g,g+2,g+3),n.push(_,_+2,_+1,_,_+3,_+2)}const c=new Float32Array(o.length*r);return o.forEach((u,d)=>u.forEach((m,g)=>c[d*r+g]=m)),{positions:Float32Array.from(e),indices:Uint32Array.from(n),phi:c,visModes:Int32Array.from(s)}}decor(){return{type:"bars",groundY:this.groundY,material:this.matKey,resonators:this.resOn,bars:this.bars.map(t=>({x:t.x,len:t.len,width:this.width,thick:this.thick,tubeLen:t.tubeLen,hz:t.hz,tongue:this.tongue}))}}}function Xh(i,t=null){return i.surface==="plate"?new Vh(i,t):i.surface==="bars"?new Wh(i,t):new Hh(i,t)}class Mc{constructor(t,e,n){this.root=t,this.state=e,this.onChange=n}bound=[];addSection(t){const e=document.createElement("div");e.className="section"+(t.closed?" closed":"")+(t.cls?" "+t.cls:"");const n=document.createElement("div");if(n.className="sh",t.enableKey){const o=document.createElement("input");o.type="checkbox",o.checked=!!this.state[t.enableKey],o.addEventListener("click",l=>l.stopPropagation()),o.addEventListener("change",()=>this.set(t.enableKey,o.checked)),n.appendChild(o),this.bound.push({el:o,ctl:{key:t.enableKey,label:"",type:"toggle"},refresh:()=>o.checked=!!this.state[t.enableKey]})}const s=document.createElement("span");if(s.textContent=t.title,n.appendChild(s),t.badge){const o=document.createElement("span");o.className="badge",o.textContent=t.badge,n.appendChild(o)}const r=document.createElement("span");r.className="chev",r.textContent="▾",n.appendChild(r),n.addEventListener("click",()=>e.classList.toggle("closed"));const a=document.createElement("div");a.className="sb",e.append(n,a);for(const o of t.controls)a.appendChild(this.build(o));return this.root.appendChild(e),this.refreshVisibility(),e}set(t,e){this.state[t]=e,this.onChange(t,e),this.refreshVisibility()}build(t){const e=document.createElement("div");if(t.type==="note"){e.className="note";const s=()=>e.textContent=typeof t.text=="function"?t.text(this.state):t.text;return s(),this.bound.push({el:e,ctl:t,refresh:s}),e}if(t.type==="preset"){e.className="row full preset";const s=document.createElement("span");s.className="lab",s.textContent=t.label;const r=document.createElement("select"),a=document.createElement("option");a.value="",a.textContent="Load preset…",a.disabled=!0,r.appendChild(a);for(const o of t.options){const l=document.createElement("option");l.value=o,l.textContent=o,r.appendChild(l)}return r.value="",r.addEventListener("change",()=>{const o=r.value;r.value="",o&&t.onPick(o)}),e.append(s,r),this.bound.push({el:e,ctl:t,refresh:()=>{}}),e}if(t.type==="buttons"){e.className="btnrow";for(const s of t.buttons){const r=document.createElement("button");r.className="small "+(s.cls??""),r.textContent=s.label,s.id&&(r.id=s.id),r.addEventListener("click",()=>s.onClick(r)),e.appendChild(r)}return this.bound.push({el:e,ctl:t,refresh:()=>{}}),e}e.className="row";const n=document.createElement("span");if(n.className="lab",n.textContent=t.label,n.title=t.label,e.appendChild(n),t.type==="range"){const s=document.createElement("input");s.type="range";const r=document.createElement("input");r.className="val",r.type="text";const a=1e3,o=u=>t.log?Math.log(u/t.min)/Math.log(t.max/t.min)*a:(u-t.min)/(t.max-t.min)*a,l=u=>{let d=t.log?t.min*Math.pow(t.max/t.min,u/a):t.min+u/a*(t.max-t.min);return t.step&&(d=Math.round(d/t.step)*t.step),+d.toPrecision(10)};s.min="0",s.max=String(a),s.step="1";const h=u=>t.fmt?t.fmt(u):(Math.abs(u)>=1e3?u.toFixed(0):u.toFixed(t.digits??(t.step&&t.step>=1?0:2)))+(t.unit?" "+t.unit:""),c=()=>{const u=this.state[t.key];s.value=String(o(u)),r.value=h(u)};s.addEventListener("input",()=>{const u=l(+s.value);r.value=h(u),this.set(t.key,u)}),s.addEventListener("dblclick",()=>{}),r.addEventListener("change",()=>{const u=parseFloat(r.value);if(isFinite(u)){const d=Math.min(t.max,Math.max(t.min,u));this.set(t.key,d)}c()}),e.append(s,r),c(),this.bound.push({el:e,ctl:t,refresh:c})}else if(t.type==="select"){e.classList.add("full");const s=document.createElement("select");for(const a of t.options){const o=document.createElement("option");Array.isArray(a)?(o.value=a[0],o.textContent=a[1]):(o.value=a,o.textContent=a),s.appendChild(o)}const r=()=>s.value=String(this.state[t.key]);s.addEventListener("change",()=>{const a=this.state[t.key];this.set(t.key,typeof a=="number"?Number(s.value):s.value)}),e.appendChild(s),r(),this.bound.push({el:e,ctl:t,refresh:r})}else if(t.type==="toggle"){e.classList.add("full");const s=document.createElement("input");s.type="checkbox";const r=()=>s.checked=!!this.state[t.key];s.addEventListener("change",()=>this.set(t.key,s.checked));const a=document.createElement("div");a.appendChild(s),e.appendChild(a),r(),this.bound.push({el:e,ctl:t,refresh:r})}else if(t.type==="text"){e.classList.add("full");const s=document.createElement("input");s.type="text";const r=()=>s.value=String(this.state[t.key]);s.addEventListener("change",()=>this.set(t.key,s.value)),e.appendChild(s),r(),this.bound.push({el:e,ctl:t,refresh:r})}return e}refreshAll(){for(const t of this.bound)t.refresh();this.refreshVisibility()}refreshVisibility(){for(const t of this.bound){const e="show"in t.ctl&&t.ctl.show?t.ctl.show(this.state):!0;t.el.style.display=e?"":"none",t.ctl.type==="note"&&t.refresh()}}}class qh{n;cos;sin;rev;constructor(t){if(t&t-1)throw new Error("FFT size must be a power of two");this.n=t,this.cos=new Float64Array(t/2),this.sin=new Float64Array(t/2);for(let n=0;n<t/2;n++)this.cos[n]=Math.cos(2*Math.PI*n/t),this.sin[n]=Math.sin(2*Math.PI*n/t);this.rev=new Uint32Array(t);const e=Math.log2(t);for(let n=0;n<t;n++){let s=0;for(let r=0;r<e;r++)s|=(n>>r&1)<<e-1-r;this.rev[n]=s}}transform(t,e,n=!1){const s=this.n,r=this.rev;for(let o=0;o<s;o++){const l=r[o];if(l>o){let h=t[o];t[o]=t[l],t[l]=h,h=e[o],e[o]=e[l],e[l]=h}}const a=n?1:-1;for(let o=2;o<=s;o<<=1){const l=o>>1,h=s/o;for(let c=0;c<s;c+=o)for(let u=0,d=0;u<l;u++,d+=h){const m=this.cos[d],g=a*this.sin[d],_=c+u,p=_+l,f=t[p]*m-e[p]*g,x=t[p]*g+e[p]*m;t[p]=t[_]-f,e[p]=e[_]-x,t[_]+=f,e[_]+=x}}}}class Yh{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),new ResizeObserver(()=>{this.peaks=null,this.draw()}).observe(t),t.addEventListener("pointerdown",e=>{t.setPointerCapture(e.pointerId);const n=this.frac(e);this.drag={x0:n,moving:!1}}),t.addEventListener("pointermove",e=>{if(!this.drag)return;const n=this.frac(e);Math.abs(n-this.drag.x0)>.003&&(this.drag.moving=!0),this.drag.moving&&(this.region=[Math.min(n,this.drag.x0),Math.max(n,this.drag.x0)],this.draw())}),t.addEventListener("pointerup",()=>{this.drag&&!this.drag.moving&&(this.region=[0,1]),this.drag=null,this.draw(),this.onRegion?.(this.region)})}ctx;L=null;R=null;rate=48e3;peaks=null;spec=null;specCanvas=null;mode="wave";region=[0,1];heads=[];onRegion=null;drag=null;dropMarks=[];frac(t){const e=this.canvas.getBoundingClientRect();return Math.min(1,Math.max(0,(t.clientX-e.left)/e.width))}setAudio(t,e,n,s=[]){this.L=t,this.R=e,this.rate=n,this.peaks=null,this.spec=null,this.specCanvas=null,this.region=[0,1],this.dropMarks=s,this.draw()}setMode(t){this.mode=t,this.draw()}computePeaks(t){const e=this.L,n=this.R,s=e.length,r=new Float32Array(t*2);for(let a=0;a<t;a++){const o=Math.floor(a/t*s),l=Math.max(o+1,Math.floor((a+1)/t*s));let h=0,c=0;for(let u=o;u<l;u++){const d=.5*(e[u]+n[u]);d<h&&(h=d),d>c&&(c=d)}r[a*2]=h,r[a*2+1]=c}this.peaks=r}computeSpec(t,e){const n=this.L,s=this.R,r=n.length,a=4096,o=new qh(a),l=new Float64Array(a),h=new Float64Array(a),c=new Float64Array(a);for(let x=0;x<a;x++)c[x]=.5-.5*Math.cos(2*Math.PI*x/a);const u=Math.min(t,900),d=new ImageData(u,e),m=20,g=this.rate/2,_=new Float32Array(u*e);let p=-200;for(let x=0;x<u;x++){const y=Math.floor((x+.5)/u*r);for(let v=0;v<a;v++){const D=y-a/2+v,T=D>=0&&D<r?.5*(n[D]+s[D]):0;l[v]=T*c[v],h[v]=0}o.transform(l,h);for(let v=0;v<e;v++){const D=m*Math.pow(g/m,1-v/(e-1)),T=m*Math.pow(g/m,1-(v+1)/(e-1)),w=Math.max(1,Math.floor(T/this.rate*a)),P=Math.max(w,Math.ceil(D/this.rate*a));let S=0;for(let C=w;C<=Math.min(P,a/2);C++)S=Math.max(S,l[C]*l[C]+h[C]*h[C]);const M=10*Math.log10(S+1e-20);_[x*e+v]=M,M>p&&(p=M)}}for(let x=0;x<u;x++)for(let y=0;y<e;y++){const v=Math.min(1,Math.max(0,(_[x*e+y]-(p-100))/100)),[D,T,w]=jh(v),P=(y*u+x)*4;d.data[P]=D,d.data[P+1]=T,d.data[P+2]=w,d.data[P+3]=255}this.spec=d;const f=document.createElement("canvas");f.width=u,f.height=e,f.getContext("2d").putImageData(d,0,0),this.specCanvas=f}draw(){const t=this.canvas,e=Math.min(devicePixelRatio,2),n=Math.max(1,Math.floor(t.clientWidth*e)),s=Math.max(1,Math.floor(t.clientHeight*e));(t.width!==n||t.height!==s)&&(t.width=n,t.height=s,this.peaks=null);const r=this.ctx;if(r.fillStyle="#0f1216",r.fillRect(0,0,n,s),!this.L){r.fillStyle="#5c6470",r.font=`${12*e}px Inter, sans-serif`,r.textAlign="center",r.fillText("Press Drop (Space) to simulate. The recorded take appears here.",n/2,s/2);return}if(this.mode==="wave"){(!this.peaks||this.peaks.length!==n*2)&&this.computePeaks(n);const h=this.peaks,c=s/2;r.strokeStyle="#1e242c",r.beginPath(),r.moveTo(0,c),r.lineTo(n,c),r.stroke(),r.fillStyle="#ff9b42";for(let u=0;u<n;u++){const d=c-h[u*2+1]*c*.95,m=c-h[u*2]*c*.95;r.fillRect(u,d,1,Math.max(1,m-d))}}else{this.specCanvas||this.computeSpec(n,Math.min(s,300)),r.imageSmoothingEnabled=!0,r.drawImage(this.specCanvas,0,0,n,s),r.fillStyle="#ffffffaa",r.font=`${10*e}px JetBrains Mono, monospace`,r.textAlign="left";const h=this.rate/2;for(const u of[100,1e3,1e4,2e4,4e4,8e4]){if(u>=h)continue;const d=(1-Math.log(u/20)/Math.log(h/20))*(s-1);r.fillStyle=u===2e4?"#5cc8ff":"#ffffff55",r.fillRect(0,d,n,u===2e4?1.5:1),r.fillStyle="#ffffffbb",r.fillText(u>=1e3?`${u/1e3}k`:`${u}`,4,d-2)}r.fillStyle="#5cc8ff",r.textAlign="right";const c=(1-Math.log(2e4/20)/Math.log(h/20))*(s-1);h>2e4&&r.fillText("↑ ultrasonic: audible when slowed",n-6,c-4)}const a=this.L.length/this.rate;r.fillStyle="#5cc8ff66";for(const h of this.dropMarks)r.fillRect(h/a*n,0,1,s);const[o,l]=this.region;l-o<.999&&(r.fillStyle="#00000088",r.fillRect(0,0,o*n,s),r.fillRect(l*n,0,n-l*n,s),r.fillStyle="#5cc8ff",r.fillRect(o*n,0,1.5,s),r.fillRect(l*n-1,0,1.5,s));for(const h of this.heads)r.fillStyle=h.color,r.fillRect(h.pos*n,0,1.5*e,s)}}function jh(i){const t=[[0,0,4],[40,11,84],[101,21,110],[159,42,99],[212,72,66],[245,125,21],[250,193,39],[252,255,164]],e=i*(t.length-1),n=Math.min(Math.floor(e),t.length-2),s=e-n,r=t[n],a=t[n+1];return[r[0]+(a[0]-r[0])*s,r[1]+(a[1]-r[1])*s,r[2]+(a[2]-r[2])*s]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="170",Ui={ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zh=0,el=1,Kh=2,yc=1,bc=2,En=3,qn=0,Le=1,Ee=2,Wn=0,Ni=1,nl=2,il=3,sl=4,$h=5,ii=100,Jh=101,Qh=102,tu=103,eu=104,nu=200,iu=201,su=202,ru=203,la=204,ca=205,au=206,ou=207,lu=208,cu=209,hu=210,uu=211,du=212,fu=213,pu=214,ha=0,ua=1,da=2,zi=3,fa=4,pa=5,ma=6,ga=7,Sc=0,mu=1,gu=2,Xn=0,_u=1,vu=2,xu=3,Ec=4,Mu=5,yu=6,bu=7,Tc=300,Bi=301,Gi=302,_a=303,va=304,mr=306,xa=1e3,ri=1001,Ma=1002,hn=1003,Su=1004,Ts=1005,mn=1006,Sr=1007,ai=1008,Cn=1009,wc=1010,Ac=1011,ps=1012,ao=1013,li=1014,Tn=1015,ms=1016,oo=1017,lo=1018,Hi=1020,Rc=35902,Cc=1021,Pc=1022,cn=1023,Dc=1024,Lc=1025,Fi=1026,Vi=1027,Ic=1028,co=1029,Uc=1030,ho=1031,uo=1033,$s=33776,Js=33777,Qs=33778,tr=33779,ya=35840,ba=35841,Sa=35842,Ea=35843,Ta=36196,wa=37492,Aa=37496,Ra=37808,Ca=37809,Pa=37810,Da=37811,La=37812,Ia=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,ka=37818,za=37819,Ba=37820,Ga=37821,er=36492,Ha=36494,Va=36495,Nc=36283,Wa=36284,Xa=36285,qa=36286,Eu=3200,Tu=3201,Fc=0,wu=1,Gn="",Je="srgb",Xi="srgb-linear",gr="linear",Qt="srgb",mi=7680,rl=519,Au=512,Ru=513,Cu=514,Oc=515,Pu=516,Du=517,Lu=518,Iu=519,al=35044,ol="300 es",wn=2e3,ar=2001;class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nr=Math.PI/180,Ya=180/Math.PI;function gs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Uu(i,t){return(i%t+t)%t}function Er(i,t,e){return(1-e)*i+e*t}function Ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Nu={DEG2RAD:nr};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,a,o,l,h){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],x=s[1],y=s[4],v=s[7],D=s[2],T=s[5],w=s[8];return r[0]=a*_+o*x+l*D,r[3]=a*p+o*y+l*T,r[6]=a*f+o*v+l*w,r[1]=h*_+c*x+u*D,r[4]=h*p+c*y+u*T,r[7]=h*f+c*v+u*w,r[2]=d*_+m*x+g*D,r[5]=d*p+m*y+g*T,r[8]=d*f+m*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-n*r*c+n*o*l+s*r*h-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*a-o*h,d=o*l-c*r,m=h*r-a*l,g=e*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*h-c*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(c*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Tr=new It;function kc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fu(){const i=or("canvas");return i.style.display="block",i}const ll={};function ss(i){i in ll||(ll[i]=!0,console.warn(i))}function Ou(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ku(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?gr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const cl=[.64,.33,.3,.6,.15,.06],hl=[.2126,.7152,.0722],ul=[.3127,.329],dl=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Xi]:{primaries:cl,whitePoint:ul,transfer:gr,toXYZ:dl,fromXYZ:fl,luminanceCoefficients:hl,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:cl,whitePoint:ul,transfer:Qt,toXYZ:dl,fromXYZ:fl,luminanceCoefficients:hl,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});let gi;class Bu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=or("canvas")),gi.width=t.width,gi.height=t.height;const n=gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gu=0;class zc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hu=0;class ze extends di{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=ri,s=ri,r=mn,a=ai,o=cn,l=Cn,h=ze.DEFAULT_ANISOTROPY,c=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=gs(),this.name="",this.source=new zc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xa:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xa:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Tc;ze.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,s=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,v=(m+1)/2,D=(f+1)/2,T=(c+d)/4,w=(u+_)/4,P=(g+p)/4;return y>v&&y>D?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=w/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=P/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=w/r,s=P/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(d-c)/x,this.w=Math.acos((h+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Vu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bc extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||h!==m||c!==g){let p=1-o;const f=l*d+h*m+c*g+u*_,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const D=Math.sqrt(y),T=Math.atan2(D,f*x);p=Math.sin(p*T)/D,o=Math.sin(o*T)/D}const v=o*x;if(l=l*p+d*v,h=h*p+m*v,c=c*p+g*v,u=u*p+_*v,p===1-o){const D=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=D,h*=D,c*=D,u*=D}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+c*u+l*m-h*d,t[e+1]=l*g+c*d+h*u-o*m,t[e+2]=h*g+c*m+o*d-l*u,t[e+3]=c*g-o*u-l*d-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),c=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*m*g,this._y=h*m*u-d*c*g,this._z=h*c*g+d*m*u,this._w=h*c*u-d*m*g;break;case"YXZ":this._x=d*c*u+h*m*g,this._y=h*m*u-d*c*g,this._z=h*c*g-d*m*u,this._w=h*c*u+d*m*g;break;case"ZXY":this._x=d*c*u-h*m*g,this._y=h*m*u+d*c*g,this._z=h*c*g+d*m*u,this._w=h*c*u-d*m*g;break;case"ZYX":this._x=d*c*u-h*m*g,this._y=h*m*u+d*c*g,this._z=h*c*g-d*m*u,this._w=h*c*u+d*m*g;break;case"YZX":this._x=d*c*u+h*m*g,this._y=h*m*u+d*c*g,this._z=h*c*g-d*m*u,this._w=h*c*u-d*m*g;break;case"XZY":this._x=d*c*u-h*m*g,this._y=h*m*u-d*c*g,this._z=h*c*g+d*m*u,this._w=h*c*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(c-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-n*h,this._z=r*c+a*h+n*l-s*o,this._w=a*c-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),c=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*h+a*u-o*c,this.y=n+l*c+o*h-r*u,this.z=s+l*u+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ar.copy(this).projectOnVector(t),this.sub(Ar)}reflect(t){return this.sub(Ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new R,pl=new Pn;class _s{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),As.subVectors(this.max,$i),_i.subVectors(t.a,$i),vi.subVectors(t.b,$i),xi.subVectors(t.c,$i),Nn.subVectors(vi,_i),Fn.subVectors(xi,vi),Kn.subVectors(_i,xi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Kn.y,Kn.x,0];return!Rr(e,_i,vi,xi,As)||(e=[1,0,0,0,1,0,0,0,1],!Rr(e,_i,vi,xi,As))?!1:(Rs.crossVectors(Nn,Fn),e=[Rs.x,Rs.y,Rs.z],Rr(e,_i,vi,xi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new R,new R,new R,new R,new R,new R,new R,new R],en=new R,ws=new _s,_i=new R,vi=new R,xi=new R,Nn=new R,Fn=new R,Kn=new R,$i=new R,As=new R,Rs=new R,$n=new R;function Rr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);const o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=t.dot($n),h=e.dot($n),c=n.dot($n);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Xu=new _s,Ji=new R,Cr=new R;class _r{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Cr)),this.expandByPoint(Ji.copy(t.center).sub(Cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new R,Pr=new R,Cs=new R,On=new R,Dr=new R,Ps=new R,Lr=new R;class vr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pr.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Pr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Cs),o=On.dot(this.direction),l=-On.dot(Cs),h=On.lengthSq(),c=Math.abs(1-a*a);let u,d,m,g;if(c>0)if(u=a*l-o,d=a*o-l,g=r*c,u>=0)if(d>=-g)if(d<=g){const _=1/c;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pr).addScaledVector(Cs,d),m}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){Dr.subVectors(e,t),Ps.subVectors(n,t),Lr.crossVectors(Dr,Ps);let a=this.direction.dot(Lr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,t);const l=o*this.direction.dot(Ps.crossVectors(On,Ps));if(l<0)return null;const h=o*this.direction.dot(Dr.cross(On));if(h<0||l+h>a)return null;const c=-o*On.dot(Lr);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,a,o,l,h,c,u,d,m,g,_,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,c,u,d,m,g,_,p)}set(t,e,n,s,r,a,o,l,h,c,u,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*c,m=a*u,g=o*c,_=o*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=m+g*h,e[5]=d-_*h,e[9]=-o*l,e[2]=_-d*h,e[6]=g+m*h,e[10]=a*l}else if(t.order==="YXZ"){const d=l*c,m=l*u,g=h*c,_=h*u;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*h,e[1]=a*u,e[5]=a*c,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*c,m=l*u,g=h*c,_=h*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*c,e[9]=_-d*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*c,m=a*u,g=o*c,_=o*u;e[0]=l*c,e[4]=g*h-m,e[8]=d*h+_,e[1]=l*u,e[5]=_*h+d,e[9]=m*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,m=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+_,e[5]=a*c,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qu,t,Yu)}lookAt(t,e,n){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),kn.crossVectors(n,Ge),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),kn.crossVectors(n,Ge)),kn.normalize(),Ds.crossVectors(Ge,kn),s[0]=kn.x,s[4]=Ds.x,s[8]=Ge.x,s[1]=kn.y,s[5]=Ds.y,s[9]=Ge.y,s[2]=kn.z,s[6]=Ds.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],x=n[3],y=n[7],v=n[11],D=n[15],T=s[0],w=s[4],P=s[8],S=s[12],M=s[1],C=s[5],I=s[9],O=s[13],k=s[2],W=s[6],B=s[10],$=s[14],G=s[3],Q=s[7],st=s[11],dt=s[15];return r[0]=a*T+o*M+l*k+h*G,r[4]=a*w+o*C+l*W+h*Q,r[8]=a*P+o*I+l*B+h*st,r[12]=a*S+o*O+l*$+h*dt,r[1]=c*T+u*M+d*k+m*G,r[5]=c*w+u*C+d*W+m*Q,r[9]=c*P+u*I+d*B+m*st,r[13]=c*S+u*O+d*$+m*dt,r[2]=g*T+_*M+p*k+f*G,r[6]=g*w+_*C+p*W+f*Q,r[10]=g*P+_*I+p*B+f*st,r[14]=g*S+_*O+p*$+f*dt,r[3]=x*T+y*M+v*k+D*G,r[7]=x*w+y*C+v*W+D*Q,r[11]=x*P+y*I+v*B+D*st,r[15]=x*S+y*O+v*$+D*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*u-s*h*u-r*o*d+n*h*d+s*o*m-n*l*m)+_*(+e*l*m-e*h*d+r*a*d-s*a*m+s*h*c-r*l*c)+p*(+e*h*u-e*o*m-r*a*u+n*a*m+r*o*c-n*h*c)+f*(-s*o*c-e*l*u+e*o*d+s*a*u-n*a*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],x=u*p*h-_*d*h+_*l*m-o*p*m-u*l*f+o*d*f,y=g*d*h-c*p*h-g*l*m+a*p*m+c*l*f-a*d*f,v=c*_*h-g*u*h+g*o*m-a*_*m-c*o*f+a*u*f,D=g*u*l-c*_*l-g*o*d+a*_*d+c*o*p-a*u*p,T=e*x+n*y+s*v+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=x*w,t[1]=(_*d*r-u*p*r-_*s*m+n*p*m+u*s*f-n*d*f)*w,t[2]=(o*p*r-_*l*r+_*s*h-n*p*h-o*s*f+n*l*f)*w,t[3]=(u*l*r-o*d*r-u*s*h+n*d*h+o*s*m-n*l*m)*w,t[4]=y*w,t[5]=(c*p*r-g*d*r+g*s*m-e*p*m-c*s*f+e*d*f)*w,t[6]=(g*l*r-a*p*r-g*s*h+e*p*h+a*s*f-e*l*f)*w,t[7]=(a*d*r-c*l*r+c*s*h-e*d*h-a*s*m+e*l*m)*w,t[8]=v*w,t[9]=(g*u*r-c*_*r-g*n*m+e*_*m+c*n*f-e*u*f)*w,t[10]=(a*_*r-g*o*r+g*n*h-e*_*h-a*n*f+e*o*f)*w,t[11]=(c*o*r-a*u*r-c*n*h+e*u*h+a*n*m-e*o*m)*w,t[12]=D*w,t[13]=(c*_*s-g*u*s+g*n*d-e*_*d-c*n*p+e*u*p)*w,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*p-e*o*p)*w,t[15]=(a*u*s-c*o*s+c*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+n,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,u=o+o,d=r*h,m=r*c,g=r*u,_=a*c,p=a*u,f=o*u,x=l*h,y=l*c,v=l*u,D=n.x,T=n.y,w=n.z;return s[0]=(1-(_+f))*D,s[1]=(m+v)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(m-v)*T,s[5]=(1-(d+f))*T,s[6]=(p+x)*T,s[7]=0,s[8]=(g+y)*w,s[9]=(p-x)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const h=1/r,c=1/a,u=1/o;return nn.elements[0]*=h,nn.elements[1]*=h,nn.elements[2]*=h,nn.elements[4]*=c,nn.elements[5]*=c,nn.elements[6]*=c,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=wn){const l=this.elements,h=2*r/(e-t),c=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,g;if(o===wn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ar)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=wn){const l=this.elements,h=1/(e-t),c=1/(n-s),u=1/(a-r),d=(e+t)*h,m=(n+s)*c;let g,_;if(o===wn)g=(a+r)*u,_=-2*u;else if(o===ar)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new R,nn=new ne,qu=new R(0,0,0),Yu=new R(1,1,1),kn=new R,Ds=new R,Ge=new R,ml=new ne,gl=new Pn;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-me(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ju=0;const _l=new R,yi=new Pn,yn=new ne,Ls=new R,Qi=new R,Zu=new R,Ku=new Pn,vl=new R(1,0,0),xl=new R(0,1,0),Ml=new R(0,0,1),yl={type:"added"},$u={type:"removed"},bi={type:"childadded",child:null},Ir={type:"childremoved",child:null};class Me extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new R,e=new gn,n=new Pn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new It}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(vl,t)}rotateY(t){return this.rotateOnAxis(xl,t)}rotateZ(t){return this.rotateOnAxis(Ml,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vl,t)}translateY(t){return this.translateOnAxis(xl,t)}translateZ(t){return this.translateOnAxis(Ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ls.copy(t):Ls.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Qi,Ls,this.up):yn.lookAt(Ls,Qi,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(yn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yl),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($u),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yl),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new R(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new R,bn=new R,Ur=new R,Sn=new R,Si=new R,Ei=new R,bl=new R,Nr=new R,Fr=new R,Or=new R,kr=new ee,zr=new ee,Br=new ee;class ln{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),bn.subVectors(n,e),Ur.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(bn),l=sn.dot(Ur),h=bn.dot(bn),c=bn.dot(Ur),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(h*l-o*c)*d,g=(a*c-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return kr.setScalar(0),zr.setScalar(0),Br.setScalar(0),kr.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(kr,r.x),a.addScaledVector(zr,r.y),a.addScaledVector(Br,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),bn.subVectors(t,e),sn.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Si.subVectors(s,n),Ei.subVectors(r,n),Nr.subVectors(t,n);const l=Si.dot(Nr),h=Ei.dot(Nr);if(l<=0&&h<=0)return e.copy(n);Fr.subVectors(t,s);const c=Si.dot(Fr),u=Ei.dot(Fr);if(c>=0&&u<=c)return e.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(n).addScaledVector(Si,a);Or.subVectors(t,r);const m=Si.dot(Or),g=Ei.dot(Or);if(g>=0&&m<=g)return e.copy(r);const _=m*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Ei,o);const p=c*g-m*u;if(p<=0&&u-c>=0&&m-g>=0)return bl.subVectors(r,s),o=(u-c)/(u-c+(m-g)),e.copy(s).addScaledVector(bl,o);const f=1/(p+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(Si,a).addScaledVector(Ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Gr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=Uu(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Gr(a,r,t+1/3),this.g=Gr(a,r,t),this.b=Gr(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Gc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Xt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(me(Ae.r*255,0,255))*65536+Math.round(me(Ae.g*255,0,255))*256+Math.round(me(Ae.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Je){Xt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Is);const n=Er(zn.h,Is.h,e),s=Er(zn.s,Is.s,e),r=Er(zn.l,Is.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new zt;zt.NAMES=Gc;let Ju=0;class qi extends di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=gs(),this.name="",this.blending=Ni,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oi extends qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new R,Us=new it;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Us.fromBufferAttribute(this,e),Us.applyMatrix3(t),this.setXY(e,Us.x,Us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==al&&(t.usage=this.usage),t}}class Hc extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vc extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qu=0;const Ze=new ne,Hr=new Me,Ti=new R,He=new _s,ts=new _s,ve=new R;class ue extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kc(t)?Vc:Hc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(He.min,ts.min),He.expandByPoint(ve),ve.addVectors(He.max,ts.max),He.expandByPoint(ve)):(He.expandByPoint(ts.min),He.expandByPoint(ts.max))}He.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)ve.fromBufferAttribute(o,h),l&&(Ti.fromBufferAttribute(t,h),ve.add(Ti)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new R,l[P]=new R;const h=new R,c=new R,u=new R,d=new it,m=new it,g=new it,_=new R,p=new R;function f(P,S,M){h.fromBufferAttribute(n,P),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),c.sub(h),u.sub(h),m.sub(d),g.sub(d);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(C),o[P].add(_),o[S].add(_),o[M].add(_),l[P].add(p),l[S].add(p),l[M].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,S=x.length;P<S;++P){const M=x[P],C=M.start,I=M.count;for(let O=C,k=C+I;O<k;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new R,v=new R,D=new R,T=new R;function w(P){D.fromBufferAttribute(s,P),T.copy(D);const S=o[P];y.copy(S),y.sub(D.multiplyScalar(D.dot(S))).normalize(),v.crossVectors(T,S);const C=v.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,S=x.length;P<S;++P){const M=x[P],C=M.start,I=M.count;for(let O=C,k=C+I;O<k;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,h=new R,c=new R,u=new R;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,p),o.add(c),l.add(c),h.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*c;for(let f=0;f<c;f++)d[g++]=h[m++]}return new Pe(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){const d=h[c],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const m=h[u];c.push(m.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,m=u.length;d<m;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new ne,Jn=new vr,Ns=new _r,El=new R,Fs=new R,Os=new R,ks=new R,Vr=new R,zs=new R,Tl=new R,Bs=new R;class Rt extends Me{constructor(t=new ue,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){zs.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=o[l],u=r[l];c!==0&&(Vr.fromBufferAttribute(u,t),a?zs.addScaledVector(Vr,c):zs.addScaledVector(Vr.sub(e),c))}e.add(zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Ns.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Ns,El)===null||Jn.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(Sl.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],x=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=x,D=y;v<D;v+=3){const T=o.getX(v),w=o.getX(v+1),P=o.getX(v+2);s=Gs(this,f,t,n,h,c,u,T,w,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const x=o.getX(p),y=o.getX(p+1),v=o.getX(p+2);s=Gs(this,a,t,n,h,c,u,x,y,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],x=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=x,D=y;v<D;v+=3){const T=v,w=v+1,P=v+2;s=Gs(this,f,t,n,h,c,u,T,w,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const x=p,y=p+1,v=p+2;s=Gs(this,a,t,n,h,c,u,x,y,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function td(i,t,e,n,s,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===qn,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Bs);return h<e.near||h>e.far?null:{distance:h,point:Bs.clone(),object:i}}function Gs(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,Fs),i.getVertexPosition(l,Os),i.getVertexPosition(h,ks);const c=td(i,t,e,n,Fs,Os,ks,Tl);if(c){const u=new R;ln.getBarycoord(Tl,Fs,Os,ks,u),s&&(c.uv=ln.getInterpolatedAttribute(s,o,l,h,u,new it)),r&&(c.uv1=ln.getInterpolatedAttribute(r,o,l,h,u,new it)),a&&(c.normal=ln.getInterpolatedAttribute(a,o,l,h,u,new R),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:h,normal:new R,materialIndex:0};ln.getNormal(Fs,Os,ks,d.normal),c.face=d,c.barycoord=u}return c}class ke extends ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(u,2));function g(_,p,f,x,y,v,D,T,w,P,S){const M=v/w,C=D/P,I=v/2,O=D/2,k=T/2,W=w+1,B=P+1;let $=0,G=0;const Q=new R;for(let st=0;st<B;st++){const dt=st*C-O;for(let St=0;St<W;St++){const Ft=St*M-I;Q[_]=Ft*x,Q[p]=dt*y,Q[f]=k,h.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[f]=T>0?1:-1,c.push(Q.x,Q.y,Q.z),u.push(St/w),u.push(1-st/P),$+=1}}for(let st=0;st<P;st++)for(let dt=0;dt<w;dt++){const St=d+dt+W*st,Ft=d+dt+W*(st+1),q=d+(dt+1)+W*(st+1),K=d+(dt+1)+W*st;l.push(St,Ft,K),l.push(Ft,q,K),G+=6}o.addGroup(m,G,S),m+=G,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=Wi(i[e]);for(const s in n)t[s]=n[s]}return t}function ed(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const nd={clone:Wi,merge:De};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new R,wl=new it,Al=new it;class We extends Xc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,wl,Al),e.subVectors(Al,wl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,Ai=1;class rd extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(wi,Ai,t,e);s.layers=this.layers,this.add(s);const r=new We(wi,Ai,t,e);r.layers=this.layers,this.add(r);const a=new We(wi,Ai,t,e);a.layers=this.layers,this.add(a);const o=new We(wi,Ai,t,e);o.layers=this.layers,this.add(o);const l=new We(wi,Ai,t,e);l.layers=this.layers,this.add(l);const h=new We(wi,Ai,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qc extends ze{constructor(t,e,n,s,r,a,o,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Bi,super(t,e,n,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ad extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ke(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Wn});r.uniforms.tEquirect.value=e;const a=new Rt(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=mn),new rd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Wr=new R,od=new R,ld=new It;class an{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wr.subVectors(n,e).cross(od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ld.getNormalMatrix(t),s=this.coplanarPoint(Wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new _r,Hs=new R;class po{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],c=s[5],u=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],x=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,d-h,p-m,v-f).normalize(),n[1].setComponents(l+r,d+h,p+m,v+f).normalize(),n[2].setComponents(l+a,d+c,p+g,v+x).normalize(),n[3].setComponents(l-a,d-c,p-g,v-x).normalize(),n[4].setComponents(l-o,d-u,p-_,v-y).normalize(),e===wn)n[5].setComponents(l+o,d+u,p+_,v+y).normalize();else if(e===ar)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Hs.x=s.normal.x>0?t.max.x:t.min.x,Hs.y=s.normal.y>0?t.max.y:t.min.y,Hs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cd(i){const t=new WeakMap;function e(o,l){const h=o.array,c=o.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,c),o.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,h){const c=l.array,u=l.updateRanges;if(i.bindBuffer(h,o),u.length===0)i.bufferSubData(h,0,c);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];i.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}class xr extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,c=l+1,u=t/o,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<c;f++){const x=f*d-a;for(let y=0;y<h;y++){const v=y*u-r;g.push(v,-x,0),_.push(0,0,1),p.push(y/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const y=x+h*f,v=x+h*(f+1),D=x+1+h*(f+1),T=x+1+h*f;m.push(y,v,T),m.push(v,D,T)}this.setIndex(m),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.width,t.height,t.widthSegments,t.heightSegments)}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Id=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ff=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ef=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,If=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$f=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_p=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Np=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:dd,alphamap_pars_fragment:fd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:vd,batching_vertex:xd,begin_vertex:Md,beginnormal_vertex:yd,bsdfs:bd,iridescence_fragment:Sd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Dd,color_vertex:Ld,common:Id,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:kd,emissivemap_pars_fragment:zd,colorspace_fragment:Bd,colorspace_pars_fragment:Gd,envmap_fragment:Hd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:nf,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:jd,fog_fragment:Zd,fog_pars_fragment:Kd,gradientmap_pars_fragment:$d,lightmap_pars_fragment:Jd,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:tf,lights_pars_begin:ef,lights_toon_fragment:sf,lights_toon_pars_fragment:rf,lights_phong_fragment:af,lights_phong_pars_fragment:of,lights_physical_fragment:lf,lights_physical_pars_fragment:cf,lights_fragment_begin:hf,lights_fragment_maps:uf,lights_fragment_end:df,logdepthbuf_fragment:ff,logdepthbuf_pars_fragment:pf,logdepthbuf_pars_vertex:mf,logdepthbuf_vertex:gf,map_fragment:_f,map_pars_fragment:vf,map_particle_fragment:xf,map_particle_pars_fragment:Mf,metalnessmap_fragment:yf,metalnessmap_pars_fragment:bf,morphinstance_vertex:Sf,morphcolor_vertex:Ef,morphnormal_vertex:Tf,morphtarget_pars_vertex:wf,morphtarget_vertex:Af,normal_fragment_begin:Rf,normal_fragment_maps:Cf,normal_pars_fragment:Pf,normal_pars_vertex:Df,normal_vertex:Lf,normalmap_pars_fragment:If,clearcoat_normal_fragment_begin:Uf,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:Ff,iridescence_pars_fragment:Of,opaque_fragment:kf,packing:zf,premultiplied_alpha_fragment:Bf,project_vertex:Gf,dithering_fragment:Hf,dithering_pars_fragment:Vf,roughnessmap_fragment:Wf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:Yf,shadowmap_vertex:jf,shadowmask_pars_fragment:Zf,skinbase_vertex:Kf,skinning_pars_vertex:$f,skinning_vertex:Jf,skinnormal_vertex:Qf,specularmap_fragment:tp,specularmap_pars_fragment:ep,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:sp,transmission_pars_fragment:rp,uv_pars_fragment:ap,uv_pars_vertex:op,uv_vertex:lp,worldpos_vertex:cp,background_vert:hp,background_frag:up,backgroundCube_vert:dp,backgroundCube_frag:fp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:_p,distanceRGBA_vert:vp,distanceRGBA_frag:xp,equirect_vert:Mp,equirect_frag:yp,linedashed_vert:bp,linedashed_frag:Sp,meshbasic_vert:Ep,meshbasic_frag:Tp,meshlambert_vert:wp,meshlambert_frag:Ap,meshmatcap_vert:Rp,meshmatcap_frag:Cp,meshnormal_vert:Pp,meshnormal_frag:Dp,meshphong_vert:Lp,meshphong_frag:Ip,meshphysical_vert:Up,meshphysical_frag:Np,meshtoon_vert:Fp,meshtoon_frag:Op,points_vert:kp,points_frag:zp,shadow_vert:Bp,shadow_frag:Gp,sprite_vert:Hp,sprite_frag:Vp},rt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},pn={basic:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:De([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:De([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:De([rt.points,rt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:De([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:De([rt.common,rt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:De([rt.sprite,rt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:De([rt.common,rt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:De([rt.lights,rt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};pn.physical={uniforms:De([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Vs={r:0,b:0,g:0},ti=new gn,Wp=new ne;function Xp(i,t,e,n,s,r,a){const o=new zt(0);let l=r===!0?0:1,h,c,u=null,d=0,m=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=g(x);v===null?f(o,l):v&&v.isColor&&(f(v,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(x,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===mr)?(c===void 0&&(c=new Rt(new ke(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Wi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),ti.copy(y.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(ti)),c.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,(u!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Rt(new xr(2,2),new Yn({name:"BackgroundMaterial",uniforms:Wi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function f(x,y){x.getRGB(Vs,Wc(i)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:_,addToRenderList:p}}function qp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,C,I,O,k){let W=!1;const B=u(O,I,C);r!==B&&(r=B,h(r.object)),W=m(M,O,I,k),W&&g(M,O,I,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(M,C,I,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function h(M){return i.bindVertexArray(M)}function c(M){return i.deleteVertexArray(M)}function u(M,C,I){const O=I.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let W=k[C.id];W===void 0&&(W={},k[C.id]=W);let B=W[O];return B===void 0&&(B=d(l()),W[O]=B),B}function d(M){const C=[],I=[],O=[];for(let k=0;k<e;k++)C[k]=0,I[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,C,I,O){const k=r.attributes,W=C.attributes;let B=0;const $=I.getAttributes();for(const G in $)if($[G].location>=0){const st=k[G];let dt=W[G];if(dt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),st===void 0||st.attribute!==dt||dt&&st.data!==dt.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(M,C,I,O){const k={},W=C.attributes;let B=0;const $=I.getAttributes();for(const G in $)if($[G].location>=0){let st=W[G];st===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(st=M.instanceColor));const dt={};dt.attribute=st,st&&st.data&&(dt.data=st.data),k[G]=dt,B++}r.attributes=k,r.attributesNum=B,r.index=O}function _(){const M=r.newAttributes;for(let C=0,I=M.length;C<I;C++)M[C]=0}function p(M){f(M,0)}function f(M,C){const I=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;I[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),k[M]!==C&&(i.vertexAttribDivisor(M,C),k[M]=C)}function x(){const M=r.newAttributes,C=r.enabledAttributes;for(let I=0,O=C.length;I<O;I++)C[I]!==M[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function y(M,C,I,O,k,W,B){B===!0?i.vertexAttribIPointer(M,C,I,k,W):i.vertexAttribPointer(M,C,I,O,k,W)}function v(M,C,I,O){_();const k=O.attributes,W=I.getAttributes(),B=C.defaultAttributeValues;for(const $ in W){const G=W[$];if(G.location>=0){let Q=k[$];if(Q===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const st=Q.normalized,dt=Q.itemSize,St=t.get(Q);if(St===void 0)continue;const Ft=St.buffer,q=St.type,K=St.bytesPerElement,ot=q===i.INT||q===i.UNSIGNED_INT||Q.gpuType===ao;if(Q.isInterleavedBufferAttribute){const et=Q.data,Mt=et.stride,wt=Q.offset;if(et.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)f(G.location+kt,et.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let kt=0;kt<G.locationSize;kt++)p(G.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let kt=0;kt<G.locationSize;kt++)y(G.location+kt,dt/G.locationSize,q,st,Mt*K,(wt+dt/G.locationSize*kt)*K,ot)}else{if(Q.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)f(G.location+et,Q.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let et=0;et<G.locationSize;et++)p(G.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let et=0;et<G.locationSize;et++)y(G.location+et,dt/G.locationSize,q,st,dt*K,dt/G.locationSize*et*K,ot)}}else if(B!==void 0){const st=B[$];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(G.location,st);break;case 3:i.vertexAttrib3fv(G.location,st);break;case 4:i.vertexAttrib4fv(G.location,st);break;default:i.vertexAttrib1fv(G.location,st)}}}}x()}function D(){P();for(const M in n){const C=n[M];for(const I in C){const O=C[I];for(const k in O)c(O[k].object),delete O[k];delete C[I]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const I in C){const O=C[I];for(const k in O)c(O[k].object),delete O[k];delete C[I]}delete n[M.id]}function w(M){for(const C in n){const I=n[C];if(I[M.id]===void 0)continue;const O=I[M.id];for(const k in O)c(O[k].object),delete O[k];delete I[M.id]}}function P(){S(),a=!0,r!==s&&(r=s,h(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function Yp(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function a(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let m=0;for(let g=0;g<u;g++)m+=c[g];e.update(m,n,1)}function l(h,c,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)a(h[g],c[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=c[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Tn&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:D,maxSamples:T}}function Zp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new an,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?c(null):h();else{const x=r?0:n,y=x*4;let v=f.clippingState||null;l.value=v,v=c(g,d,y,m);for(let D=0;D!==y;++D)v[D]=e[D];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,v=m;y!==_;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Kp(i){let t=new WeakMap;function e(a,o){return o===_a?a.mapping=Bi:o===va&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_a||o===va)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new ad(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class jc extends Xc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,Rl=[.125,.215,.35,.446,.526,.582],si=20,Xr=new jc,Cl=new zt;let qr=null,Yr=0,jr=0,Zr=!1;const ni=(1+Math.sqrt(5))/2,Ri=1/ni,Pl=[new R(-ni,Ri,0),new R(ni,Ri,0),new R(-Ri,0,ni),new R(Ri,0,ni),new R(0,ni,-Ri),new R(0,ni,Ri),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qr,Yr,jr),this._renderer.xr.enabled=Zr,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:ms,format:cn,colorSpace:Xi,depthBuffer:!1},s=Dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(r)),this._blurMaterial=Jp(r,t,e)}return s}_compileMaterial(t){const e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,s){const o=new We(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(Cl),c.toneMapping=Xn,c.autoClear=!1;const m=new oi({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new Rt(new ke,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Cl),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(h[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,h[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,h[f]));const y=this._cubeSize;Ws(s,x*y,f>2?y:0,y,y),c.setRenderTarget(s),_&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Bi||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pl[(s-r-1)%Pl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Rt(this._lodPlanes[s],h),d=h.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*si-1),_=r/g,p=isFinite(r)?1+Math.floor(c*_):si;p>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${si}`);const f=[];let x=0;for(let w=0;w<si;++w){const P=w/_,S=Math.exp(-P*P/2);f.push(S),w===0?x+=S:w<p&&(x+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/x;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],D=3*v*(s>y-Li?s-y+Li:0),T=4*(this._cubeSize-v);Ws(e,D,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Xr)}}function $p(i){const t=[],e=[],n=[];let s=i;const r=i-Li+1+Rl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Li?l=Rl[a-i+Li-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,g=6,_=3,p=2,f=1,x=new Float32Array(_*g*m),y=new Float32Array(p*g*m),v=new Float32Array(f*g*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,P=T>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(S,_*g*T),y.set(d,p*g*T);const M=[T,T,T,T,T,T];v.set(M,f*g*T)}const D=new ue;D.setAttribute("position",new Pe(x,_)),D.setAttribute("uv",new Pe(y,p)),D.setAttribute("faceIndex",new Pe(v,f)),t.push(D),s>Li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dl(i,t,e){const n=new ci(i,t,e);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jp(i,t,e){const n=new Float32Array(si),s=new R(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ll(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Il(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===_a||l===va,c=l===Bi||l===Gi;if(h||c){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ja(i)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return h&&m&&m.height>0||c&&m&&s(m)?(e===null&&(e=new ja(i)),u=h?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function tm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function em(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],i.ARRAY_BUFFER)}}function h(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let y=0,v=x.length;y<v;y+=3){const D=x[y+0],T=x[y+1],w=x[y+2];d.push(D,T,T,w,w,D)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const D=y+0,T=y+1,w=y+2;d.push(D,T,T,w,w,D)}}else return;const p=new(kc(d)?Vc:Hc)(d,1);p.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function c(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function nm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function h(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*a,g),e.update(m,n,g))}function c(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function u(d,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)h(d[f]/a,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=m[x]*_[x];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function im(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sm(i,t,e){const n=new WeakMap,s=new ee;function r(a,o,l){const h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=o.attributes.position.count*y,D=1;v>t.maxTextureSize&&(D=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*D*4*u),w=new Bc(T,v,D,u);w.type=Tn,w.needsUpdate=!0;const P=y*4;for(let M=0;M<u;M++){const C=p[M],I=f[M],O=x[M],k=v*D*4*M;for(let W=0;W<C.count;W++){const B=W*P;m===!0&&(s.fromBufferAttribute(C,W),T[k+B+0]=s.x,T[k+B+1]=s.y,T[k+B+2]=s.z,T[k+B+3]=0),g===!0&&(s.fromBufferAttribute(I,W),T[k+B+4]=s.x,T[k+B+5]=s.y,T[k+B+6]=s.z,T[k+B+7]=0),_===!0&&(s.fromBufferAttribute(O,W),T[k+B+8]=s.x,T[k+B+9]=s.y,T[k+B+10]=s.z,T[k+B+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new it(v,D)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let _=0;_<h.length;_++)m+=h[_];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rm(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class Zc extends ze{constructor(t,e,n,s,r,a,o,l,h,c=Fi){if(c!==Fi&&c!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Fi&&(n=li),n===void 0&&c===Vi&&(n=Hi),super(null,s,r,a,o,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Kc=new ze,Ul=new Zc(1,1),$c=new Bc,Jc=new Wu,Qc=new qc,Nl=[],Fl=[],Ol=new Float32Array(16),kl=new Float32Array(9),zl=new Float32Array(4);function Yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Nl[s];if(r===void 0&&(r=new Float32Array(s),Nl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mr(i,t){let e=Fl[t];e===void 0&&(e=new Int32Array(t),Fl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;zl.set(n),i.uniformMatrix2fv(this.addr,!1,zl),_e(e,n)}}function um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;kl.set(n),i.uniformMatrix3fv(this.addr,!1,kl),_e(e,n)}}function dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),_e(e,n)}}function fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function _m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ul.compareFunction=Oc,r=Ul):r=Kc,e.setTexture2D(t||r,s)}function bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jc,s)}function Sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qc,s)}function Em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$c,s)}function Tm(i){switch(i){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return vm;case 36295:return xm;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Em}}function wm(i,t){i.uniform1fv(this.addr,t)}function Am(i,t){const e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function Rm(i,t){const e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function Cm(i,t){const e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function Pm(i,t){const e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dm(i,t){const e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lm(i,t){const e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Im(i,t){i.uniform1iv(this.addr,t)}function Um(i,t){i.uniform2iv(this.addr,t)}function Nm(i,t){i.uniform3iv(this.addr,t)}function Fm(i,t){i.uniform4iv(this.addr,t)}function Om(i,t){i.uniform1uiv(this.addr,t)}function km(i,t){i.uniform2uiv(this.addr,t)}function zm(i,t){i.uniform3uiv(this.addr,t)}function Bm(i,t){i.uniform4uiv(this.addr,t)}function Gm(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Kc,r[a])}function Hm(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jc,r[a])}function Vm(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qc,r[a])}function Wm(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$c,r[a])}function Xm(i){switch(i){case 5126:return wm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Pm;case 35675:return Dm;case 35676:return Lm;case 5124:case 35670:return Im;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return km;case 36295:return zm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Wm}}class qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tm(e.type)}}class Ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xm(e.type)}}class jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Kr=/(\w+)(\])?(\[|\.)?/g;function Bl(i,t){i.seq.push(t),i.map[t.id]=t}function Zm(i,t,e){const n=i.name,s=n.length;for(Kr.lastIndex=0;;){const r=Kr.exec(n),a=Kr.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Bl(e,h===void 0?new qm(o,i,t):new Ym(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new jm(o),Bl(e,u)),e=u}}}class ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Zm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Gl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Km=37297;let $m=0;function Jm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Hl=new It;function Qm(i){Xt._getMatrix(Hl,Xt.workingColorSpace,i);const t=`mat3( ${Hl.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case gr:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Jm(i.getShaderSource(t),a)}else return s}function tg(i,t){const e=Qm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function eg(i,t){let e;switch(t){case _u:e="Linear";break;case vu:e="Reinhard";break;case xu:e="Cineon";break;case Ec:e="ACESFilmic";break;case yu:e="AgX";break;case bu:e="Neutral";break;case Mu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xs=new R;function ng(){Xt.getLuminanceCoefficients(Xs);const i=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function sg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function rs(i){return i!==""}function Wl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(i){return i.replace(ag,lg)}const og=new Map;function lg(i,t){let e=Nt[t];if(e===void 0){const n=og.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Za(e)}const cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(i){return i.replace(cg,hg)}function hg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ug(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function dg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case Gi:t="ENVMAP_TYPE_CUBE";break;case mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sc:t="ENVMAP_BLENDING_MULTIPLY";break;case mu:t="ENVMAP_BLENDING_MIX";break;case gu:t="ENVMAP_BLENDING_ADD";break}return t}function mg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function gg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ug(e),h=dg(e),c=fg(e),u=pg(e),d=mg(e),m=ig(e),g=sg(r),_=s.createProgram();let p,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),f.length>0&&(f+=`
`)):(p=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),f=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,tg("linearToOutputTexel",e.outputColorSpace),ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),a=Za(a),a=Wl(a,e),a=Xl(a,e),o=Za(o),o=Wl(o,e),o=Xl(o,e),a=ql(a),o=ql(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+p+a,v=x+f+o,D=Gl(s,s.VERTEX_SHADER,y),T=Gl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(D).trim(),k=s.getShaderInfoLog(T).trim();let W=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{const $=Vl(s,D,"vertex"),G=Vl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+$+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||k==="")&&(B=!1);B&&(C.diagnostics={runnable:W,programLog:I,vertexShader:{log:O,prefix:p},fragmentShader:{log:k,prefix:f}})}s.deleteShader(D),s.deleteShader(T),P=new ir(s,_),S=rg(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Km)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$m++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let _g=0;class vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xg(t),e.set(t,n)),n}}class xg{constructor(t){this.id=_g++,this.code=t,this.usedTimes=0}}function Mg(i,t,e,n,s,r,a){const o=new fo,l=new vg,h=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return h.add(S),S===0?"uv":`uv${S}`}function p(S,M,C,I,O){const k=I.fog,W=O.geometry,B=S.isMeshStandardMaterial?I.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),G=$&&$.mapping===mr?$.image.height:null,Q=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dt=st!==void 0?st.length:0;let St=0;W.morphAttributes.position!==void 0&&(St=1),W.morphAttributes.normal!==void 0&&(St=2),W.morphAttributes.color!==void 0&&(St=3);let Ft,q,K,ot;if(Q){const $t=pn[Q];Ft=$t.vertexShader,q=$t.fragmentShader}else Ft=S.vertexShader,q=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),ot=l.getFragmentShaderID(S);const et=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),wt=O.isInstancedMesh===!0,kt=O.isBatchedMesh===!0,le=!!S.map,Vt=!!S.matcap,he=!!$,F=!!S.aoMap,Ye=!!S.lightMap,Bt=!!S.bumpMap,Gt=!!S.normalMap,Tt=!!S.displacementMap,re=!!S.emissiveMap,Et=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,z=S.clearcoat>0,j=S.dispersion>0,J=S.iridescence>0,Y=S.sheen>0,yt=S.transmission>0,lt=b&&!!S.anisotropyMap,ft=z&&!!S.clearcoatMap,Wt=z&&!!S.clearcoatNormalMap,tt=z&&!!S.clearcoatRoughnessMap,pt=J&&!!S.iridescenceMap,At=J&&!!S.iridescenceThicknessMap,Ct=Y&&!!S.sheenColorMap,mt=Y&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,Ut=!!S.specularColorMap,ie=!!S.specularIntensityMap,L=yt&&!!S.transmissionMap,at=yt&&!!S.thicknessMap,X=!!S.gradientMap,Z=!!S.alphaMap,ut=S.alphaTest>0,ct=!!S.alphaHash,Dt=!!S.extensions;let ce=Xn;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ce=i.toneMapping);const Te={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Ft,fragmentShader:q,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:ot,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:kt,batchingColor:kt&&O._colorsTexture!==null,instancing:wt,instancingColor:wt&&O.instanceColor!==null,instancingMorph:wt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Xi,alphaToCoverage:!!S.alphaToCoverage,map:le,matcap:Vt,envMap:he,envMapMode:he&&$.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:Ye,bumpMap:Bt,normalMap:Gt,displacementMap:d&&Tt,emissiveMap:re,normalMapObjectSpace:Gt&&S.normalMapType===wu,normalMapTangentSpace:Gt&&S.normalMapType===Fc,metalnessMap:Et,roughnessMap:A,anisotropy:b,anisotropyMap:lt,clearcoat:z,clearcoatMap:ft,clearcoatNormalMap:Wt,clearcoatRoughnessMap:tt,dispersion:j,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Ht,specularColorMap:Ut,specularIntensityMap:ie,transmission:yt,transmissionMap:L,thicknessMap:at,gradientMap:X,opaque:S.transparent===!1&&S.blending===Ni&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:ct,combine:S.combine,mapUv:le&&_(S.map.channel),aoMapUv:F&&_(S.aoMap.channel),lightMapUv:Ye&&_(S.lightMap.channel),bumpMapUv:Bt&&_(S.bumpMap.channel),normalMapUv:Gt&&_(S.normalMap.channel),displacementMapUv:Tt&&_(S.displacementMap.channel),emissiveMapUv:re&&_(S.emissiveMap.channel),metalnessMapUv:Et&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:lt&&_(S.anisotropyMap.channel),clearcoatMapUv:ft&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:At&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ht&&_(S.specularMap.channel),specularColorMapUv:Ut&&_(S.specularColorMap.channel),specularIntensityMapUv:ie&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:Z&&_(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Gt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(le||Z),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Mt,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:St,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&Xt.getTransfer(S.map.colorSpace)===Qt,decodeVideoTextureEmissive:re&&S.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(S.emissiveMap.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ee,flipSided:S.side===Le,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Te.vertexUv1s=h.has(1),Te.vertexUv2s=h.has(2),Te.vertexUv3s=h.has(3),h.clear(),Te}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let C;if(M){const I=pn[M];C=nd.clone(I.uniforms)}else C=S.uniforms;return C}function D(S,M){let C;for(let I=0,O=c.length;I<O;I++){const k=c[I];if(k.cacheKey===M){C=k,++C.usedTimes;break}}return C===void 0&&(C=new gg(i,M,S,r),c.push(C)),C}function T(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:D,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:P}}function yg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,m,g,_,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),t++,f}function o(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function h(u,d){e.length>1&&e.sort(u||bg),n.length>1&&n.sort(d||jl),s.length>1&&s.sort(d||jl)}function c(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:c,sort:h}}function Sg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Zl,i.set(n,[a])):s>=r.length?(a=new Zl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Eg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wg=0;function Ag(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rg(i){const t=new Eg,e=Tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);const s=new R,r=new ne,a=new ne;function o(h){let c=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,x=0,y=0,v=0,D=0,T=0,w=0;h.sort(Ag);for(let S=0,M=h.length;S<M;S++){const C=h[S],I=C.color,O=C.intensity,k=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=I.r*O,u+=I.g*O,d+=I.b*O;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],O);w++}else if(C.isDirectionalLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,G=e.get(C);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=C.shadow.matrix,x++}n.directional[m]=B,m++}else if(C.isSpotLight){const B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(I).multiplyScalar(O),B.distance=k,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[_]=B;const $=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,$.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=$.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=W,v++}_++}else if(C.isRectAreaLight){const B=t.get(C);B.color.copy(I).multiplyScalar(O),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=B,p++}else if(C.isPointLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const $=C.shadow,G=e.get(C);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=B,g++}else if(C.isHemisphereLight){const B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(O),B.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[f]=B,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==f||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=f,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=w,n.version=wg++)}function l(h,c){let u=0,d=0,m=0,g=0,_=0;const p=c.matrixWorldInverse;for(let f=0,x=h.length;f<x;f++){const y=h[f];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(y.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Kl(i){const t=new Rg(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function a(c){n.push(c)}function o(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Cg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Kl(i),t.set(s,[o])):r>=a.length?(o=new Kl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Pg extends qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dg extends qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ug(i,t,e){let n=new po;const s=new it,r=new it,a=new ee,o=new Pg({depthPacking:Tu}),l=new Dg,h={},c=e.maxTextureSize,u={[qn]:Le,[Le]:qn,[Ee]:Ee},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Lg,fragmentShader:Ig}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ue;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let f=this.type;this.render=function(T,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Wn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=f!==En&&this.type===En,k=f===En&&this.type!==En;for(let W=0,B=T.length;W<B;W++){const $=T[W],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();if(s.multiply(Q),r.copy(G.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y)),G.map===null||O===!0||k===!0){const dt=this.type!==En?{minFilter:hn,magFilter:hn}:{};G.map!==null&&G.map.dispose(),G.map=new ci(s.x,s.y,dt),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const st=G.getViewportCount();for(let dt=0;dt<st;dt++){const St=G.getViewport(dt);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),I.viewport(a),G.updateMatrices($,dt),n=G.getFrustum(),v(w,P,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===En&&x(G,P),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,M,C)};function x(T,w){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,P,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,P,m,_,null)}function y(T,w,P,S){let M=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=M.uuid,O=w.uuid;let k=h[I];k===void 0&&(k={},h[I]=k);let W=k[O];W===void 0&&(W=M.clone(),k[O]=W,w.addEventListener("dispose",D)),M=W}if(M.visible=w.visible,M.wireframe=w.wireframe,S===En?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=P}return M}function v(T,w,P,S,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===En)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=t.update(T),k=T.material;if(Array.isArray(k)){const W=O.groups;for(let B=0,$=W.length;B<$;B++){const G=W[B],Q=k[G.materialIndex];if(Q&&Q.visible){const st=y(T,Q,S,M);T.onBeforeShadow(i,T,w,P,O,st,G),i.renderBufferDirect(P,null,O,st,T,G),T.onAfterShadow(i,T,w,P,O,st,G)}}}else if(k.visible){const W=y(T,k,S,M);T.onBeforeShadow(i,T,w,P,O,W,null),i.renderBufferDirect(P,null,O,W,T,null),T.onAfterShadow(i,T,w,P,O,W,null)}}const I=T.children;for(let O=0,k=I.length;O<k;O++)v(I[O],w,P,S,M)}function D(T){T.target.removeEventListener("dispose",D);for(const P in h){const S=h[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Ng={[ha]:ua,[da]:ma,[fa]:ga,[zi]:pa,[ua]:ha,[ma]:da,[ga]:fa,[pa]:zi};function Fg(i,t){function e(){let L=!1;const at=new ee;let X=null;const Z=new ee(0,0,0,0);return{setMask:function(ut){X!==ut&&!L&&(i.colorMask(ut,ut,ut,ut),X=ut)},setLocked:function(ut){L=ut},setClear:function(ut,ct,Dt,ce,Te){Te===!0&&(ut*=ce,ct*=ce,Dt*=ce),at.set(ut,ct,Dt,ce),Z.equals(at)===!1&&(i.clearColor(ut,ct,Dt,ce),Z.copy(at))},reset:function(){L=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,at=!1,X=null,Z=null,ut=null;return{setReversed:function(ct){if(at!==ct){const Dt=t.get("EXT_clip_control");at?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const ce=ut;ut=null,this.setClear(ce)}at=ct},getReversed:function(){return at},setTest:function(ct){ct?et(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(ct){X!==ct&&!L&&(i.depthMask(ct),X=ct)},setFunc:function(ct){if(at&&(ct=Ng[ct]),Z!==ct){switch(ct){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ct}},setLocked:function(ct){L=ct},setClear:function(ct){ut!==ct&&(at&&(ct=1-ct),i.clearDepth(ct),ut=ct)},reset:function(){L=!1,X=null,Z=null,ut=null,at=!1}}}function s(){let L=!1,at=null,X=null,Z=null,ut=null,ct=null,Dt=null,ce=null,Te=null;return{setTest:function($t){L||($t?et(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function($t){at!==$t&&!L&&(i.stencilMask($t),at=$t)},setFunc:function($t,Qe,_n){(X!==$t||Z!==Qe||ut!==_n)&&(i.stencilFunc($t,Qe,_n),X=$t,Z=Qe,ut=_n)},setOp:function($t,Qe,_n){(ct!==$t||Dt!==Qe||ce!==_n)&&(i.stencilOp($t,Qe,_n),ct=$t,Dt=Qe,ce=_n)},setLocked:function($t){L=$t},setClear:function($t){Te!==$t&&(i.clearStencil($t),Te=$t)},reset:function(){L=!1,at=null,X=null,Z=null,ut=null,ct=null,Dt=null,ce=null,Te=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,h=new WeakMap;let c={},u={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,x=null,y=null,v=null,D=null,T=null,w=new zt(0,0,0),P=0,S=!1,M=null,C=null,I=null,O=null,k=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=$>=2);let Q=null,st={};const dt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Ft=new ee().fromArray(dt),q=new ee().fromArray(St);function K(L,at,X,Z){const ut=new Uint8Array(4),ct=i.createTexture();i.bindTexture(L,ct),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<X;Dt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(at+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ct}const ot={};ot[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(zi),Bt(!1),Gt(el),et(i.CULL_FACE),F(Wn);function et(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function Mt(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function wt(L,at){return u[L]!==at?(i.bindFramebuffer(L,at),u[L]=at,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function kt(L,at){let X=m,Z=!1;if(L){X=d.get(at),X===void 0&&(X=[],d.set(at,X));const ut=L.textures;if(X.length!==ut.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Dt=ut.length;ct<Dt;ct++)X[ct]=i.COLOR_ATTACHMENT0+ct;X.length=ut.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function le(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Vt={[ii]:i.FUNC_ADD,[Jh]:i.FUNC_SUBTRACT,[Qh]:i.FUNC_REVERSE_SUBTRACT};Vt[tu]=i.MIN,Vt[eu]=i.MAX;const he={[nu]:i.ZERO,[iu]:i.ONE,[su]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[hu]:i.SRC_ALPHA_SATURATE,[lu]:i.DST_COLOR,[au]:i.DST_ALPHA,[ru]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[cu]:i.ONE_MINUS_DST_COLOR,[ou]:i.ONE_MINUS_DST_ALPHA,[uu]:i.CONSTANT_COLOR,[du]:i.ONE_MINUS_CONSTANT_COLOR,[fu]:i.CONSTANT_ALPHA,[pu]:i.ONE_MINUS_CONSTANT_ALPHA};function F(L,at,X,Z,ut,ct,Dt,ce,Te,$t){if(L===Wn){_===!0&&(Mt(i.BLEND),_=!1);return}if(_===!1&&(et(i.BLEND),_=!0),L!==$h){if(L!==p||$t!==S){if((f!==ii||v!==ii)&&(i.blendEquation(i.FUNC_ADD),f=ii,v=ii),$t)switch(L){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,y=null,D=null,T=null,w.set(0,0,0),P=0,p=L,S=$t}return}ut=ut||at,ct=ct||X,Dt=Dt||Z,(at!==f||ut!==v)&&(i.blendEquationSeparate(Vt[at],Vt[ut]),f=at,v=ut),(X!==x||Z!==y||ct!==D||Dt!==T)&&(i.blendFuncSeparate(he[X],he[Z],he[ct],he[Dt]),x=X,y=Z,D=ct,T=Dt),(ce.equals(w)===!1||Te!==P)&&(i.blendColor(ce.r,ce.g,ce.b,Te),w.copy(ce),P=Te),p=L,S=!1}function Ye(L,at){L.side===Ee?Mt(i.CULL_FACE):et(i.CULL_FACE);let X=L.side===Le;at&&(X=!X),Bt(X),L.blending===Ni&&L.transparent===!1?F(Wn):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function Gt(L){L!==Zh?(et(i.CULL_FACE),L!==C&&(L===el?i.cullFace(i.BACK):L===Kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),C=L}function Tt(L){L!==I&&(B&&i.lineWidth(L),I=L)}function re(L,at,X){L?(et(i.POLYGON_OFFSET_FILL),(O!==at||k!==X)&&(i.polygonOffset(at,X),O=at,k=X)):Mt(i.POLYGON_OFFSET_FILL)}function Et(L){L?et(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+W-1),Q!==L&&(i.activeTexture(L),Q=L)}function b(L,at,X){X===void 0&&(Q===null?X=i.TEXTURE0+W-1:X=Q);let Z=st[X];Z===void 0&&(Z={type:void 0,texture:void 0},st[X]=Z),(Z.type!==L||Z.texture!==at)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(L,at||ot[L]),Z.type=L,Z.texture=at)}function z(){const L=st[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){Ft.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ft.copy(L))}function mt(L){q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Ht(L,at){let X=h.get(at);X===void 0&&(X=new WeakMap,h.set(at,X));let Z=X.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(at,L.name),X.set(L,Z))}function Ut(L,at){const Z=h.get(at).get(L);l.get(at)!==Z&&(i.uniformBlockBinding(at,Z,L.__bindingPointIndex),l.set(at,Z))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Q=null,st={},u={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,x=null,y=null,v=null,D=null,T=null,w=new zt(0,0,0),P=0,S=!1,M=null,C=null,I=null,O=null,k=null,Ft.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Mt,bindFramebuffer:wt,drawBuffers:kt,useProgram:le,setBlending:F,setMaterial:Ye,setFlipSided:Bt,setCullFace:Gt,setLineWidth:Tt,setPolygonOffset:re,setScissorTest:Et,activeTexture:A,bindTexture:b,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:pt,texImage3D:At,updateUBOMapping:Ht,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:yt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ft,scissor:Ct,viewport:mt,reset:ie}}function $l(i,t,e,n){const s=Og(n);switch(e){case Cc:return i*t;case Dc:return i*t;case Lc:return i*t*2;case Ic:return i*t/s.components*s.byteLength;case co:return i*t/s.components*s.byteLength;case Uc:return i*t*2/s.components*s.byteLength;case ho:return i*t*2/s.components*s.byteLength;case Pc:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case uo:return i*t*4/s.components*s.byteLength;case $s:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qs:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case ya:case Sa:return Math.max(i,8)*Math.max(t,8)/2;case Ta:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case er:case Ha:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nc:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Og(i){switch(i){case Cn:case wc:return{byteLength:1,components:1};case ps:case Ac:case ms:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case li:case ao:case Tn:return{byteLength:4,components:1};case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function kg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new it,c=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return m?new OffscreenCanvas(A,b):or("canvas")}function _(A,b,z){let j=1;const J=Et(A);if((J.width>z||J.height>z)&&(j=z/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(j*J.width),yt=Math.floor(j*J.height);u===void 0&&(u=g(Y,yt));const lt=b?g(Y,yt):u;return lt.width=Y,lt.height=yt,lt.getContext("2d").drawImage(A,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+yt+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function p(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,b,z,j,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=b;if(b===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),b===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),b===i.RGBA){const yt=J?gr:Xt.getTransfer(j);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=yt===Qt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(A,b){let z;return A?b===null||b===li||b===Hi?z=i.DEPTH24_STENCIL8:b===Tn?z=i.DEPTH32F_STENCIL8:b===ps&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===li||b===Hi?z=i.DEPTH_COMPONENT24:b===Tn?z=i.DEPTH_COMPONENT32F:b===ps&&(z=i.DEPTH_COMPONENT16),z}function D(A,b){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==hn&&A.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){const b=A.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&c.delete(b)}function w(A){const b=A.target;b.removeEventListener("dispose",w),M(b)}function P(A){const b=n.get(A);if(b.__webglInit===void 0)return;const z=A.source,j=d.get(z);if(j){const J=j[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(A),Object.keys(j).length===0&&d.delete(z)}n.remove(A)}function S(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const z=A.source,j=d.get(z);delete j[b.__cacheKey],a.memory.textures--}function M(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let J=0;J<b.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(b.__webglFramebuffer[j][J]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=A.textures;for(let j=0,J=z.length;j<J;j++){const Y=n.get(z[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(A)}let C=0;function I(){C=0}function O(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function k(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function W(A,b){const z=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,A,b);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function B(A,b){const z=n.get(A);if(A.version>0&&z.__version!==A.version){q(z,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function $(A,b){const z=n.get(A);if(A.version>0&&z.__version!==A.version){q(z,A,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function G(A,b){const z=n.get(A);if(A.version>0&&z.__version!==A.version){K(z,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const Q={[xa]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},st={[hn]:i.NEAREST,[Su]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},dt={[Au]:i.NEVER,[Iu]:i.ALWAYS,[Ru]:i.LESS,[Oc]:i.LEQUAL,[Cu]:i.EQUAL,[Lu]:i.GEQUAL,[Pu]:i.GREATER,[Du]:i.NOTEQUAL};function St(A,b){if(b.type===Tn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===Sr||b.magFilter===Ts||b.magFilter===ai||b.minFilter===mn||b.minFilter===Sr||b.minFilter===Ts||b.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Q[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Q[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Q[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,st[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,st[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,dt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===hn||b.minFilter!==Ts&&b.minFilter!==ai||b.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ft(A,b){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));const j=b.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const Y=k(b);if(Y!==A.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[Y].usedTimes++;const yt=J[A.__cacheKey];yt!==void 0&&(J[A.__cacheKey].usedTimes--,yt.usedTimes===0&&S(b)),A.__cacheKey=Y,A.__webglTexture=J[Y].texture}return z}function q(A,b,z){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);const J=Ft(A,b),Y=b.source;e.bindTexture(j,A.__webglTexture,i.TEXTURE0+z);const yt=n.get(Y);if(Y.version!==yt.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const lt=Xt.getPrimaries(Xt.workingColorSpace),ft=b.colorSpace===Gn?null:Xt.getPrimaries(b.colorSpace),Wt=b.colorSpace===Gn||lt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=_(b.image,!1,s.maxTextureSize);tt=re(b,tt);const pt=r.convert(b.format,b.colorSpace),At=r.convert(b.type);let Ct=y(b.internalFormat,pt,At,b.colorSpace,b.isVideoTexture);St(j,b);let mt;const Ht=b.mipmaps,Ut=b.isVideoTexture!==!0,ie=yt.__version===void 0||J===!0,L=Y.dataReady,at=D(b,tt);if(b.isDepthTexture)Ct=v(b.format===Vi,b.type),ie&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,pt,At,null));else if(b.isDataTexture)if(Ht.length>0){Ut&&ie&&e.texStorage2D(i.TEXTURE_2D,at,Ct,Ht[0].width,Ht[0].height);for(let X=0,Z=Ht.length;X<Z;X++)mt=Ht[X],Ut?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(i.TEXTURE_2D,X,Ct,mt.width,mt.height,0,pt,At,mt.data);b.generateMipmaps=!1}else Ut?(ie&&e.texStorage2D(i.TEXTURE_2D,at,Ct,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,At,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,pt,At,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ut&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Ct,Ht[0].width,Ht[0].height,tt.depth);for(let X=0,Z=Ht.length;X<Z;X++)if(mt=Ht[X],b.format!==cn)if(pt!==null)if(Ut){if(L)if(b.layerUpdates.size>0){const ut=$l(mt.width,mt.height,b.format,b.type);for(const ct of b.layerUpdates){const Dt=mt.data.subarray(ct*ut/mt.data.BYTES_PER_ELEMENT,(ct+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ct,mt.width,mt.height,1,pt,Dt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ct,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,tt.depth,pt,At,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ct,mt.width,mt.height,tt.depth,0,pt,At,mt.data)}else{Ut&&ie&&e.texStorage2D(i.TEXTURE_2D,at,Ct,Ht[0].width,Ht[0].height);for(let X=0,Z=Ht.length;X<Z;X++)mt=Ht[X],b.format!==cn?pt!==null?Ut?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(i.TEXTURE_2D,X,Ct,mt.width,mt.height,0,pt,At,mt.data)}else if(b.isDataArrayTexture)if(Ut){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Ct,tt.width,tt.height,tt.depth),L)if(b.layerUpdates.size>0){const X=$l(tt.width,tt.height,b.format,b.type);for(const Z of b.layerUpdates){const ut=tt.data.subarray(Z*X/tt.data.BYTES_PER_ELEMENT,(Z+1)*X/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,pt,At,ut)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,At,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,pt,At,tt.data);else if(b.isData3DTexture)Ut?(ie&&e.texStorage3D(i.TEXTURE_3D,at,Ct,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,At,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,pt,At,tt.data);else if(b.isFramebufferTexture){if(ie)if(Ut)e.texStorage2D(i.TEXTURE_2D,at,Ct,tt.width,tt.height);else{let X=tt.width,Z=tt.height;for(let ut=0;ut<at;ut++)e.texImage2D(i.TEXTURE_2D,ut,Ct,X,Z,0,pt,At,null),X>>=1,Z>>=1}}else if(Ht.length>0){if(Ut&&ie){const X=Et(Ht[0]);e.texStorage2D(i.TEXTURE_2D,at,Ct,X.width,X.height)}for(let X=0,Z=Ht.length;X<Z;X++)mt=Ht[X],Ut?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt,At,mt):e.texImage2D(i.TEXTURE_2D,X,Ct,pt,At,mt);b.generateMipmaps=!1}else if(Ut){if(ie){const X=Et(tt);e.texStorage2D(i.TEXTURE_2D,at,Ct,X.width,X.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,At,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,pt,At,tt);p(b)&&f(j),yt.__version=Y.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function K(A,b,z){if(b.image.length!==6)return;const j=Ft(A,b),J=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const Y=n.get(J);if(J.version!==Y.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const yt=Xt.getPrimaries(Xt.workingColorSpace),lt=b.colorSpace===Gn?null:Xt.getPrimaries(b.colorSpace),ft=b.colorSpace===Gn||yt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Wt=b.isCompressedTexture||b.image[0].isCompressedTexture,tt=b.image[0]&&b.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Wt&&!tt?pt[Z]=_(b.image[Z],!0,s.maxCubemapSize):pt[Z]=tt?b.image[Z].image:b.image[Z],pt[Z]=re(b,pt[Z]);const At=pt[0],Ct=r.convert(b.format,b.colorSpace),mt=r.convert(b.type),Ht=y(b.internalFormat,Ct,mt,b.colorSpace),Ut=b.isVideoTexture!==!0,ie=Y.__version===void 0||j===!0,L=J.dataReady;let at=D(b,At);St(i.TEXTURE_CUBE_MAP,b);let X;if(Wt){Ut&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Ht,At.width,At.height);for(let Z=0;Z<6;Z++){X=pt[Z].mipmaps;for(let ut=0;ut<X.length;ut++){const ct=X[ut];b.format!==cn?Ct!==null?Ut?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Ht,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Ct,mt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Ht,ct.width,ct.height,0,Ct,mt,ct.data)}}}else{if(X=b.mipmaps,Ut&&ie){X.length>0&&at++;const Z=Et(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Ht,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Ct,mt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,pt[Z].width,pt[Z].height,0,Ct,mt,pt[Z].data);for(let ut=0;ut<X.length;ut++){const Dt=X[ut].image[Z].image;Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Dt.width,Dt.height,Ct,mt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Ht,Dt.width,Dt.height,0,Ct,mt,Dt.data)}}else{Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ct,mt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,Ct,mt,pt[Z]);for(let ut=0;ut<X.length;ut++){const ct=X[ut];Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ct,mt,ct.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Ht,Ct,mt,ct.image[Z])}}}p(b)&&f(i.TEXTURE_CUBE_MAP),Y.__version=J.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ot(A,b,z,j,J,Y){const yt=r.convert(z.format,z.colorSpace),lt=r.convert(z.type),ft=y(z.internalFormat,yt,lt,z.colorSpace),Wt=n.get(b),tt=n.get(z);if(tt.__renderTarget=b,!Wt.__hasExternalTextures){const pt=Math.max(1,b.width>>Y),At=Math.max(1,b.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,ft,pt,At,b.depth,0,yt,lt,null):e.texImage2D(J,Y,ft,pt,At,0,yt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Gt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,tt.__webglTexture,0,Bt(b)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,tt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(A,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const j=b.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=v(b.stencilBuffer,J),yt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Bt(b);Gt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Y,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,A)}else{const j=b.textures;for(let J=0;J<j.length;J++){const Y=j[J],yt=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),ft=y(Y.internalFormat,yt,lt,Y.colorSpace),Wt=Bt(b);z&&Gt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ft,b.width,b.height):Gt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ft,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ft,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const J=j.__webglTexture,Y=Bt(b);if(b.depthTexture.format===Fi)Gt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(b.depthTexture.format===Vi)Gt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function wt(A){const b=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=j}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Mt(b.__webglFramebuffer,A)}else if(z){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),et(b.__webglDepthbuffer[j],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),et(b.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(A,b,z){const j=n.get(A);b!==void 0&&ot(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&wt(A)}function le(A){const b=A.texture,z=n.get(A),j=n.get(b);A.addEventListener("dispose",w);const J=A.textures,Y=A.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[lt]=[];for(let ft=0;ft<b.mipmaps.length;ft++)z.__webglFramebuffer[lt][ft]=i.createFramebuffer()}else z.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let lt=0;lt<b.mipmaps.length;lt++)z.__webglFramebuffer[lt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(yt)for(let lt=0,ft=J.length;lt<ft;lt++){const Wt=n.get(J[lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Gt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const ft=J[lt];z.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[lt]);const Wt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),pt=y(ft.internalFormat,Wt,tt,ft.colorSpace,A.isXRRenderTarget===!0),At=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,z.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),et(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),St(i.TEXTURE_CUBE_MAP,b);for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)ot(z.__webglFramebuffer[lt][ft],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else ot(z.__webglFramebuffer[lt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let lt=0,ft=J.length;lt<ft;lt++){const Wt=J[lt],tt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),St(i.TEXTURE_2D,Wt),ot(z.__webglFramebuffer,A,Wt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),p(Wt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),St(lt,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)ot(z.__webglFramebuffer[ft],A,b,i.COLOR_ATTACHMENT0,lt,ft);else ot(z.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,lt,0);p(b)&&f(lt),e.unbindTexture()}A.depthBuffer&&wt(A)}function Vt(A){const b=A.textures;for(let z=0,j=b.length;z<j;z++){const J=b[z];if(p(J)){const Y=x(A),yt=n.get(J).__webglTexture;e.bindTexture(Y,yt),f(Y),e.unbindTexture()}}}const he=[],F=[];function Ye(A){if(A.samples>0){if(Gt(A)===!1){const b=A.textures,z=A.width,j=A.height;let J=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(A),lt=b.length>1;if(lt)for(let ft=0;ft<b.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ft]);const Wt=n.get(b[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,J,i.NEAREST),l===!0&&(he.length=0,F.length=0,he.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let ft=0;ft<b.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ft]);const Wt=n.get(b[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function Gt(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(A){const b=a.render.frame;c.get(A)!==b&&(c.set(A,b),A.update())}function re(A,b){const z=A.colorSpace,j=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Xi&&z!==Gn&&(Xt.getTransfer(z)===Qt?(j!==cn||J!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Gt}function zg(i,t){function e(n,s=Gn){let r;const a=Xt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===ao)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===ms)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Pc)return i.RGB;if(n===cn)return i.RGBA;if(n===Dc)return i.LUMINANCE;if(n===Lc)return i.LUMINANCE_ALPHA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===co)return i.RED_INTEGER;if(n===Uc)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===uo)return i.RGBA_INTEGER;if(n===$s||n===Js||n===Qs||n===tr)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===ba||n===Sa||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===wa||n===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ta||n===wa)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===ka||n===za||n===Ba||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===er||n===Ha||n===Va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===er)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Bg extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $e extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(h,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),m=.02,g=.005;h.inputState.pinching&&d>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Yn({vertexShader:Hg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xg extends di{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,m=null,g=null;const _=new Wg,p=e.getContextAttributes();let f=null,x=null;const y=[],v=[],D=new it;let T=null;const w=new We;w.viewport=new ee;const P=new We;P.viewport=new ee;const S=[w,P],M=new Bg;let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=y[q];return K===void 0&&(K=new $r,y[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=y[q];return K===void 0&&(K=new $r,y[q]=K),K.getGripSpace()},this.getHand=function(q){let K=y[q];return K===void 0&&(K=new $r,y[q]=K),K.getHandSpace()};function O(q){const K=v.indexOf(q.inputSource);if(K===-1)return;const ot=y[K];ot!==void 0&&(ot.update(q.inputSource,q.frame,h||a),ot.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",W);for(let q=0;q<y.length;q++){const K=v[q];K!==null&&(v[q]=null,y[q].disconnect(K))}C=null,I=null,_.reset(),t.setRenderTarget(f),m=null,d=null,u=null,s=null,x=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",k),s.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const K={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new ci(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,ot=null,et=null;p.depth&&(et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=p.stencil?Vi:Fi,ot=p.stencil?Hi:li);const Mt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ci(d.textureWidth,d.textureHeight,{format:cn,type:Cn,depthTexture:new Zc(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(q){for(let K=0;K<q.removed.length;K++){const ot=q.removed[K],et=v.indexOf(ot);et>=0&&(v[et]=null,y[et].disconnect(ot))}for(let K=0;K<q.added.length;K++){const ot=q.added[K];let et=v.indexOf(ot);if(et===-1){for(let wt=0;wt<y.length;wt++)if(wt>=v.length){v.push(ot),et=wt;break}else if(v[wt]===null){v[wt]=ot,et=wt;break}if(et===-1)break}const Mt=y[et];Mt&&Mt.connect(ot)}}const B=new R,$=new R;function G(q,K,ot){B.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(ot.matrixWorld);const et=B.distanceTo($),Mt=K.projectionMatrix.elements,wt=ot.projectionMatrix.elements,kt=Mt[14]/(Mt[10]-1),le=Mt[14]/(Mt[10]+1),Vt=(Mt[9]+1)/Mt[5],he=(Mt[9]-1)/Mt[5],F=(Mt[8]-1)/Mt[0],Ye=(wt[8]+1)/wt[0],Bt=kt*F,Gt=kt*Ye,Tt=et/(-F+Ye),re=Tt*-F;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Mt[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Et=kt+Tt,A=le+Tt,b=Bt-re,z=Gt+(et-re),j=Vt*le/A*Et,J=he*le/A*Et;q.projectionMatrix.makePerspective(b,z,j,J,Et,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let K=q.near,ot=q.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),M.near=P.near=w.near=K,M.far=P.far=w.far=ot,(C!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,I=M.far),w.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,M.layers.mask=w.layers.mask|P.layers.mask;const et=q.parent,Mt=M.cameras;Q(M,et);for(let wt=0;wt<Mt.length;wt++)Q(Mt[wt],et);Mt.length===2?G(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),st(q,M,et)};function st(q,K,ot){ot===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ot.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ya*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let dt=null;function St(q,K){if(c=K.getViewerPose(h||a),g=K,c!==null){const ot=c.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let et=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,et=!0);for(let wt=0;wt<ot.length;wt++){const kt=ot[wt];let le=null;if(m!==null)le=m.getViewport(kt);else{const he=u.getViewSubImage(d,kt);le=he.viewport,wt===0&&(t.setRenderTargetTextures(x,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(x))}let Vt=S[wt];Vt===void 0&&(Vt=new We,Vt.layers.enable(wt),Vt.viewport=new ee,S[wt]=Vt),Vt.matrix.fromArray(kt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(kt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(le.x,le.y,le.width,le.height),wt===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),et===!0&&M.cameras.push(Vt)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const wt=u.getDepthInformation(ot[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,s.renderState)}}for(let ot=0;ot<y.length;ot++){const et=v[ot],Mt=y[ot];et!==null&&Mt!==void 0&&Mt.update(et,K,h||a)}dt&&dt(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ft=new Yc;Ft.setAnimationLoop(St),this.setAnimationLoop=function(q){dt=q},this.dispose=function(){}}}const ei=new gn,qg=new ne;function Yg(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Wc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,x,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,v)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,x,y):f.isSpriteMaterial?h(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Le&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Le&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=t.get(f),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,ei.copy(v),ei.x*=-1,ei.y*=-1,ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),p.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(ei)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,x,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=y*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const x=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function h(x,y){let v=s[x.id];v===void 0&&(g(x),v=c(x),s[x.id]=v,x.addEventListener("dispose",p));const D=y.program;n.updateUBOMapping(x,D);const T=t.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function c(x){const y=u();x.__bindingPointIndex=y;const v=i.createBuffer(),D=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],v=x.uniforms,D=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,w=v.length;T<w;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,M=P.length;S<M;S++){const C=P[S];if(m(C,T,S,D)===!0){const I=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let W=0;W<O.length;W++){const B=O[W],$=_(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,I+k,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,y,v,D){const T=x.value,w=y+"_"+v;if(D[w]===void 0)return typeof T=="number"||typeof T=="boolean"?D[w]=T:D[w]=T.clone(),!0;{const P=D[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return D[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(x){const y=x.uniforms;let v=0;const D=16;for(let w=0,P=y.length;w<P;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,C=S.length;M<C;M++){const I=S[M],O=Array.isArray(I.value)?I.value:[I.value];for(let k=0,W=O.length;k<W;k++){const B=O[k],$=_(B),G=v%D,Q=G%$.boundary,st=G+Q;v+=Q,st!==0&&D-st<$.storage&&(v+=D-st),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=$.storage}}}const T=v%D;return T>0&&(v+=D-T),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:h,dispose:f}}class Zg{constructor(t={}){const{canvas:e=Fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,f=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=Xn,this.toneMappingExposure=1;const v=this;let D=!1,T=0,w=0,P=null,S=-1,M=null;const C=new ee,I=new ee;let O=null;const k=new zt(0);let W=0,B=e.width,$=e.height,G=1,Q=null,st=null;const dt=new ee(0,0,B,$),St=new ee(0,0,B,$);let Ft=!1;const q=new po;let K=!1,ot=!1;const et=new ne,Mt=new ne,wt=new R,kt=new ee,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function he(){return P===null?G:1}let F=n;function Ye(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ro}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){const U="webgl2";if(F=Ye(U,E),F===null)throw Ye(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Bt,Gt,Tt,re,Et,A,b,z,j,J,Y,yt,lt,ft,Wt,tt,pt,At,Ct,mt,Ht,Ut,ie,L;function at(){Bt=new tm(F),Bt.init(),Ut=new zg(F,Bt),Gt=new jp(F,Bt,t,Ut),Tt=new Fg(F,Bt),Gt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),re=new im(F),Et=new yg,A=new kg(F,Bt,Tt,Et,Gt,Ut,re),b=new Kp(v),z=new Qp(v),j=new cd(F),ie=new qp(F,j),J=new em(F,j,re,ie),Y=new rm(F,J,j,re),Ct=new sm(F,Gt,A),tt=new Zp(Et),yt=new Mg(v,b,z,Bt,Gt,ie,tt),lt=new Yg(v,Et),ft=new Sg,Wt=new Cg(Bt),At=new Xp(v,b,z,Tt,Y,m,l),pt=new Ug(v,Y,Gt),L=new jg(F,re,Gt,Tt),mt=new Yp(F,Bt,re),Ht=new nm(F,Bt,re),re.programs=yt.programs,v.capabilities=Gt,v.extensions=Bt,v.properties=Et,v.renderLists=ft,v.shadowMap=pt,v.state=Tt,v.info=re}at();const X=new Xg(v,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(B,$,!1))},this.getSize=function(E){return E.set(B,$)},this.setSize=function(E,U,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,$=U,e.width=Math.floor(E*G),e.height=Math.floor(U*G),H===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(B*G,$*G).floor()},this.setDrawingBufferSize=function(E,U,H){B=E,$=U,G=H,e.width=Math.floor(E*H),e.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(dt)},this.setViewport=function(E,U,H,V){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,U,H,V),Tt.viewport(C.copy(dt).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(St)},this.setScissor=function(E,U,H,V){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,U,H,V),Tt.scissor(I.copy(St).multiplyScalar(G).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(E){Tt.setScissorTest(Ft=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){st=E},this.getClearColor=function(E){return E.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(E=!0,U=!0,H=!0){let V=0;if(E){let N=!1;if(P!==null){const nt=P.texture.format;N=nt===uo||nt===ho||nt===co}if(N){const nt=P.texture.type,ht=nt===Cn||nt===li||nt===ps||nt===Hi||nt===oo||nt===lo,_t=At.getClearColor(),vt=At.getClearAlpha(),Pt=_t.r,Lt=_t.g,xt=_t.b;ht?(g[0]=Pt,g[1]=Lt,g[2]=xt,g[3]=vt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Pt,_[1]=Lt,_[2]=xt,_[3]=vt,F.clearBufferiv(F.COLOR,0,_))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),H&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Wt.dispose(),Et.dispose(),b.dispose(),z.dispose(),Y.dispose(),ie.dispose(),L.dispose(),yt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Io),X.removeEventListener("sessionend",Uo),Zn.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=re.autoReset,U=pt.enabled,H=pt.autoUpdate,V=pt.needsUpdate,N=pt.type;at(),re.autoReset=E,pt.enabled=U,pt.autoUpdate=H,pt.needsUpdate=V,pt.type=N}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){const U=E.target;U.removeEventListener("dispose",Dt),ce(U)}function ce(E){Te(E),Et.remove(E)}function Te(E){const U=Et.get(E).programs;U!==void 0&&(U.forEach(function(H){yt.releaseProgram(H)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,V,N,nt){U===null&&(U=le);const ht=N.isMesh&&N.matrixWorld.determinant()<0,_t=xh(E,U,H,V,N);Tt.setMaterial(V,ht);let vt=H.index,Pt=1;if(V.wireframe===!0){if(vt=J.getWireframeAttribute(H),vt===void 0)return;Pt=2}const Lt=H.drawRange,xt=H.attributes.position;let Yt=Lt.start*Pt,se=(Lt.start+Lt.count)*Pt;nt!==null&&(Yt=Math.max(Yt,nt.start*Pt),se=Math.min(se,(nt.start+nt.count)*Pt)),vt!==null?(Yt=Math.max(Yt,0),se=Math.min(se,vt.count)):xt!=null&&(Yt=Math.max(Yt,0),se=Math.min(se,xt.count));const ae=se-Yt;if(ae<0||ae===1/0)return;ie.setup(N,V,_t,H,vt);let Ie,Zt=mt;if(vt!==null&&(Ie=j.get(vt),Zt=Ht,Zt.setIndex(Ie)),N.isMesh)V.wireframe===!0?(Tt.setLineWidth(V.wireframeLinewidth*he()),Zt.setMode(F.LINES)):Zt.setMode(F.TRIANGLES);else if(N.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Tt.setLineWidth(bt*he()),N.isLineSegments?Zt.setMode(F.LINES):N.isLineLoop?Zt.setMode(F.LINE_LOOP):Zt.setMode(F.LINE_STRIP)}else N.isPoints?Zt.setMode(F.POINTS):N.isSprite&&Zt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const bt=N._multiDrawStarts,vn=N._multiDrawCounts,Kt=N._multiDrawCount,tn=vt?j.get(vt).bytesPerElement:1,pi=Et.get(V).currentProgram.getUniforms();for(let Be=0;Be<Kt;Be++)pi.setValue(F,"_gl_DrawID",Be),Zt.render(bt[Be]/tn,vn[Be])}else if(N.isInstancedMesh)Zt.renderInstances(Yt,ae,N.count);else if(H.isInstancedBufferGeometry){const bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,vn=Math.min(H.instanceCount,bt);Zt.renderInstances(Yt,ae,vn)}else Zt.render(Yt,ae)};function $t(E,U,H){E.transparent===!0&&E.side===Ee&&E.forceSinglePass===!1?(E.side=Le,E.needsUpdate=!0,Ss(E,U,H),E.side=qn,E.needsUpdate=!0,Ss(E,U,H),E.side=Ee):Ss(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),f=Wt.get(H),f.init(U),y.push(f),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),E!==H&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const V=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let ht=0;ht<nt.length;ht++){const _t=nt[ht];$t(_t,H,N),V.add(_t)}else $t(nt,H,N),V.add(nt)}),y.pop(),f=null,V},this.compileAsync=function(E,U,H=null){const V=this.compile(E,U,H);return new Promise(N=>{function nt(){if(V.forEach(function(ht){Et.get(ht).currentProgram.isReady()&&V.delete(ht)}),V.size===0){N(E);return}setTimeout(nt,10)}Bt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Qe=null;function _n(E){Qe&&Qe(E)}function Io(){Zn.stop()}function Uo(){Zn.start()}const Zn=new Yc;Zn.setAnimationLoop(_n),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(E){Qe=E,X.setAnimationLoop(E),E===null?Zn.stop():Zn.start()},X.addEventListener("sessionstart",Io),X.addEventListener("sessionend",Uo),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,P),f=Wt.get(E,y.length),f.init(U),y.push(f),Mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Mt),ot=this.localClippingEnabled,K=tt.init(this.clippingPlanes,ot),p=ft.get(E,x.length),p.init(),x.push(p),X.enabled===!0&&X.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&br(nt,U,-1/0,v.sortObjects)}br(E,U,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(Q,st),Vt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Vt&&At.addToRenderList(p,E),this.info.render.frame++,K===!0&&tt.beginShadows();const H=f.state.shadowsArray;pt.render(H,E,U),K===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,N=p.transmissive;if(f.setupLights(),U.isArrayCamera){const nt=U.cameras;if(N.length>0)for(let ht=0,_t=nt.length;ht<_t;ht++){const vt=nt[ht];Fo(V,N,E,vt)}Vt&&At.render(E);for(let ht=0,_t=nt.length;ht<_t;ht++){const vt=nt[ht];No(p,E,vt,vt.viewport)}}else N.length>0&&Fo(V,N,E,U),Vt&&At.render(E),No(p,E,U);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,U),ie.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],K===!0&&tt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function br(E,U,H,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){V&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Mt);const ht=Y.update(E),_t=E.material;_t.visible&&p.push(E,ht,_t,H,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const ht=Y.update(E),_t=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),kt.copy(ht.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(Mt)),Array.isArray(_t)){const vt=ht.groups;for(let Pt=0,Lt=vt.length;Pt<Lt;Pt++){const xt=vt[Pt],Yt=_t[xt.materialIndex];Yt&&Yt.visible&&p.push(E,ht,Yt,H,kt.z,xt)}}else _t.visible&&p.push(E,ht,_t,H,kt.z,null)}}const nt=E.children;for(let ht=0,_t=nt.length;ht<_t;ht++)br(nt[ht],U,H,V)}function No(E,U,H,V){const N=E.opaque,nt=E.transmissive,ht=E.transparent;f.setupLightsView(H),K===!0&&tt.setGlobalState(v.clippingPlanes,H),V&&Tt.viewport(C.copy(V)),N.length>0&&bs(N,U,H),nt.length>0&&bs(nt,U,H),ht.length>0&&bs(ht,U,H),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Fo(E,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new ci(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?ms:Cn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const nt=f.state.transmissionRenderTarget[V.id],ht=V.viewport||C;nt.setSize(ht.z,ht.w);const _t=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(k),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&At.render(H);const vt=v.toneMapping;v.toneMapping=Xn;const Pt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),K===!0&&tt.setGlobalState(v.clippingPlanes,V),bs(E,H,V),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let xt=0,Yt=U.length;xt<Yt;xt++){const se=U[xt],ae=se.object,Ie=se.geometry,Zt=se.material,bt=se.group;if(Zt.side===Ee&&ae.layers.test(V.layers)){const vn=Zt.side;Zt.side=Le,Zt.needsUpdate=!0,Oo(ae,H,V,Ie,Zt,bt),Zt.side=vn,Zt.needsUpdate=!0,Lt=!0}}Lt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}v.setRenderTarget(_t),v.setClearColor(k,W),Pt!==void 0&&(V.viewport=Pt),v.toneMapping=vt}function bs(E,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=E.length;N<nt;N++){const ht=E[N],_t=ht.object,vt=ht.geometry,Pt=V===null?ht.material:V,Lt=ht.group;_t.layers.test(H.layers)&&Oo(_t,U,H,vt,Pt,Lt)}}function Oo(E,U,H,V,N,nt){E.onBeforeRender(v,U,H,V,N,nt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,U,H,V,E,nt),N.transparent===!0&&N.side===Ee&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,v.renderBufferDirect(H,U,V,N,E,nt),N.side=qn,N.needsUpdate=!0,v.renderBufferDirect(H,U,V,N,E,nt),N.side=Ee):v.renderBufferDirect(H,U,V,N,E,nt),E.onAfterRender(v,U,H,V,N,nt)}function Ss(E,U,H){U.isScene!==!0&&(U=le);const V=Et.get(E),N=f.state.lights,nt=f.state.shadowsArray,ht=N.state.version,_t=yt.getParameters(E,N.state,nt,U,H),vt=yt.getProgramCacheKey(_t);let Pt=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?z:b).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",Dt),Pt=new Map,V.programs=Pt);let Lt=Pt.get(vt);if(Lt!==void 0){if(V.currentProgram===Lt&&V.lightsStateVersion===ht)return zo(E,_t),Lt}else _t.uniforms=yt.getUniforms(E),E.onBeforeCompile(_t,v),Lt=yt.acquireProgram(_t,vt),Pt.set(vt,Lt),V.uniforms=_t.uniforms;const xt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(xt.clippingPlanes=tt.uniform),zo(E,_t),V.needsLights=yh(E),V.lightsStateVersion=ht,V.needsLights&&(xt.ambientLightColor.value=N.state.ambient,xt.lightProbe.value=N.state.probe,xt.directionalLights.value=N.state.directional,xt.directionalLightShadows.value=N.state.directionalShadow,xt.spotLights.value=N.state.spot,xt.spotLightShadows.value=N.state.spotShadow,xt.rectAreaLights.value=N.state.rectArea,xt.ltc_1.value=N.state.rectAreaLTC1,xt.ltc_2.value=N.state.rectAreaLTC2,xt.pointLights.value=N.state.point,xt.pointLightShadows.value=N.state.pointShadow,xt.hemisphereLights.value=N.state.hemi,xt.directionalShadowMap.value=N.state.directionalShadowMap,xt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xt.spotShadowMap.value=N.state.spotShadowMap,xt.spotLightMatrix.value=N.state.spotLightMatrix,xt.spotLightMap.value=N.state.spotLightMap,xt.pointShadowMap.value=N.state.pointShadowMap,xt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Lt,V.uniformsList=null,Lt}function ko(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=ir.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function zo(E,U){const H=Et.get(E);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function xh(E,U,H,V,N){U.isScene!==!0&&(U=le),A.resetTextureUnits();const nt=U.fog,ht=V.isMeshStandardMaterial?U.environment:null,_t=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Xi,vt=(V.isMeshStandardMaterial?z:b).get(V.envMap||ht),Pt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Lt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),xt=!!H.morphAttributes.position,Yt=!!H.morphAttributes.normal,se=!!H.morphAttributes.color;let ae=Xn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=v.toneMapping);const Ie=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Zt=Ie!==void 0?Ie.length:0,bt=Et.get(V),vn=f.state.lights;if(K===!0&&(ot===!0||E!==M)){const je=E===M&&V.id===S;tt.setState(V,E,je)}let Kt=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==vn.state.version||bt.outputColorSpace!==_t||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==vt||V.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==tt.numPlanes||bt.numIntersection!==tt.numIntersection)||bt.vertexAlphas!==Pt||bt.vertexTangents!==Lt||bt.morphTargets!==xt||bt.morphNormals!==Yt||bt.morphColors!==se||bt.toneMapping!==ae||bt.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,bt.__version=V.version);let tn=bt.currentProgram;Kt===!0&&(tn=Ss(V,U,N));let pi=!1,Be=!1,ji=!1;const oe=tn.getUniforms(),dn=bt.uniforms;if(Tt.useProgram(tn.program)&&(pi=!0,Be=!0,ji=!0),V.id!==S&&(S=V.id,Be=!0),pi||M!==E){Tt.buffers.depth.getReversed()?(et.copy(E.projectionMatrix),ku(et),zu(et),oe.setValue(F,"projectionMatrix",et)):oe.setValue(F,"projectionMatrix",E.projectionMatrix),oe.setValue(F,"viewMatrix",E.matrixWorldInverse);const In=oe.map.cameraPosition;In!==void 0&&In.setValue(F,wt.setFromMatrixPosition(E.matrixWorld)),Gt.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&oe.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Be=!0,ji=!0)}if(N.isSkinnedMesh){oe.setOptional(F,N,"bindMatrix"),oe.setOptional(F,N,"bindMatrixInverse");const je=N.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),oe.setValue(F,"boneTexture",je.boneTexture,A))}N.isBatchedMesh&&(oe.setOptional(F,N,"batchingTexture"),oe.setValue(F,"batchingTexture",N._matricesTexture,A),oe.setOptional(F,N,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",N._indirectTexture,A),oe.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",N._colorsTexture,A));const Zi=H.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&Ct.update(N,H,tn),(Be||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,oe.setValue(F,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(dn.envMap.value=vt,dn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),Be&&(oe.setValue(F,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&Mh(dn,ji),nt&&V.fog===!0&&lt.refreshFogUniforms(dn,nt),lt.refreshMaterialUniforms(dn,V,G,$,f.state.transmissionRenderTarget[E.id]),ir.upload(F,ko(bt),dn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ir.upload(F,ko(bt),dn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&oe.setValue(F,"center",N.center),oe.setValue(F,"modelViewMatrix",N.modelViewMatrix),oe.setValue(F,"normalMatrix",N.normalMatrix),oe.setValue(F,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const je=V.uniformsGroups;for(let In=0,Un=je.length;In<Un;In++){const Bo=je[In];L.update(Bo,tn),L.bind(Bo,tn)}}return tn}function Mh(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function yh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,U,H){Et.get(E.texture).__webglTexture=U,Et.get(E.depthTexture).__webglTexture=H;const V=Et.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const H=Et.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,H=0){P=E,T=U,w=H;let V=!0,N=null,nt=!1,ht=!1;if(E){const vt=Et.get(E);if(vt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(vt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(vt.__hasExternalTextures)A.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const xt=E.depthTexture;if(vt.__boundDepthTexture!==xt){if(xt!==null&&Et.has(xt)&&(E.width!==xt.image.width||E.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ht=!0);const Lt=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?N=Lt[U][H]:N=Lt[U],nt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?N=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?N=Lt[H]:N=Lt,C.copy(E.viewport),I.copy(E.scissor),O=E.scissorTest}else C.copy(dt).multiplyScalar(G).floor(),I.copy(St).multiplyScalar(G).floor(),O=Ft;if(Tt.bindFramebuffer(F.FRAMEBUFFER,N)&&V&&Tt.drawBuffers(E,N),Tt.viewport(C),Tt.scissor(I),Tt.setScissorTest(O),nt){const vt=Et.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,H)}else if(ht){const vt=Et.get(E.texture),Pt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.__webglTexture,H||0,Pt)}S=-1},this.readRenderTargetPixels=function(E,U,H,V,N,nt,ht){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){Tt.bindFramebuffer(F.FRAMEBUFFER,_t);try{const vt=E.texture,Pt=vt.format,Lt=vt.type;if(!Gt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&H>=0&&H<=E.height-N&&F.readPixels(U,H,V,N,Ut.convert(Pt),Ut.convert(Lt),nt)}finally{const vt=P!==null?Et.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(E,U,H,V,N,nt,ht){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){const vt=E.texture,Pt=vt.format,Lt=vt.type;if(!Gt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-V&&H>=0&&H<=E.height-N){Tt.bindFramebuffer(F.FRAMEBUFFER,_t);const xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.bufferData(F.PIXEL_PACK_BUFFER,nt.byteLength,F.STREAM_READ),F.readPixels(U,H,V,N,Ut.convert(Pt),Ut.convert(Lt),0);const Yt=P!==null?Et.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,Yt);const se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ou(F,se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,nt),F.deleteBuffer(xt),F.deleteSync(se),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,H=0){E.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-H),N=Math.floor(E.image.width*V),nt=Math.floor(E.image.height*V),ht=U!==null?U.x:0,_t=U!==null?U.y:0;A.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,ht,_t,N,nt),Tt.unbindTexture()},this.copyTextureToTexture=function(E,U,H=null,V=null,N=0){E.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let nt,ht,_t,vt,Pt,Lt,xt,Yt,se;const ae=E.isCompressedTexture?E.mipmaps[N]:E.image;H!==null?(nt=H.max.x-H.min.x,ht=H.max.y-H.min.y,_t=H.isBox3?H.max.z-H.min.z:1,vt=H.min.x,Pt=H.min.y,Lt=H.isBox3?H.min.z:0):(nt=ae.width,ht=ae.height,_t=ae.depth||1,vt=0,Pt=0,Lt=0),V!==null?(xt=V.x,Yt=V.y,se=V.z):(xt=0,Yt=0,se=0);const Ie=Ut.convert(U.format),Zt=Ut.convert(U.type);let bt;U.isData3DTexture?(A.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const vn=F.getParameter(F.UNPACK_ROW_LENGTH),Kt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),tn=F.getParameter(F.UNPACK_SKIP_PIXELS),pi=F.getParameter(F.UNPACK_SKIP_ROWS),Be=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Lt);const ji=E.isDataArrayTexture||E.isData3DTexture,oe=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const dn=Et.get(E),Zi=Et.get(U),je=Et.get(dn.__renderTarget),In=Et.get(Zi.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,je.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Un=0;Un<_t;Un++)ji&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,N,Lt+Un),E.isDepthTexture?(oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(U).__webglTexture,N,se+Un),F.blitFramebuffer(vt,Pt,nt,ht,xt,Yt,nt,ht,F.DEPTH_BUFFER_BIT,F.NEAREST)):oe?F.copyTexSubImage3D(bt,N,xt,Yt,se+Un,vt,Pt,nt,ht):F.copyTexSubImage2D(bt,N,xt,Yt,se+Un,vt,Pt,nt,ht);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else oe?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(bt,N,xt,Yt,se,nt,ht,_t,Ie,Zt,ae.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,N,xt,Yt,se,nt,ht,_t,Ie,ae.data):F.texSubImage3D(bt,N,xt,Yt,se,nt,ht,_t,Ie,Zt,ae):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,xt,Yt,nt,ht,Ie,Zt,ae.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,xt,Yt,ae.width,ae.height,Ie,ae.data):F.texSubImage2D(F.TEXTURE_2D,N,xt,Yt,nt,ht,Ie,Zt,ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,vn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Kt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,tn),F.pixelStorei(F.UNPACK_SKIP_ROWS,pi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Be),N===0&&U.generateMipmaps&&F.generateMipmap(bt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,H=null,V=null,N=0){return E.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,H,V,N)},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){T=0,w=0,P=null,Tt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class th extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class go extends qi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lr=new R,cr=new R,Jl=new ne,es=new vr,qs=new _r,Jr=new R,Ql=new R;class tc extends Me{constructor(t=new ue,e=new go){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)lr.fromBufferAttribute(e,s-1),cr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=lr.distanceTo(cr);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,t.ray.intersectsSphere(qs)===!1)return;Jl.copy(s).invert(),es.copy(t.ray).applyMatrix4(Jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){const m=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=h){const f=c.getX(_),x=c.getX(_+1),y=Ys(this,t,es,l,f,x);y&&e.push(y)}if(this.isLineLoop){const _=c.getX(g-1),p=c.getX(m),f=Ys(this,t,es,l,_,p);f&&e.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=h){const f=Ys(this,t,es,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Ys(this,t,es,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ys(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(lr.fromBufferAttribute(a,s),cr.fromBufferAttribute(a,r),e.distanceSqToSegment(lr,cr,Jr,Ql)>n)return;Jr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Jr);if(!(l<t.near||l>t.far))return{distance:l,point:Ql.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const c=n[s],d=n[s+1]-c,m=(a-c)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],a=[],o=new R,l=new ne;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(me(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(me(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class eh extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=h-this.aY;l=d*c-m*u+this.aX,h=d*u+m*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Kg extends eh{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _o(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,u){let d=(a-r)/h-(o-r)/(h+c)+(o-a)/c,m=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,m*=c,s(a,o,d,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const js=new R,Qr=new _o,ta=new _o,ea=new _o;class nh extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,c;this.closed||o>0?h=s[(o-1)%r]:(js.subVectors(s[0],s[1]).add(s[0]),h=js);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(js.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=js),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(c),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Qr.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,_,p),ta.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,_,p),ea.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,_,p)}else this.curveType==="catmullrom"&&(Qr.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),ta.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),ea.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(Qr.calc(l),ta.calc(l),ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ec(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function $g(i,t){const e=1-i;return e*e*t}function Jg(i,t){return 2*(1-i)*i*t}function Qg(i,t){return i*i*t}function cs(i,t,e,n){return $g(i,t)+Jg(i,e)+Qg(i,n)}function t0(i,t){const e=1-i;return e*e*e*t}function e0(i,t){const e=1-i;return 3*e*e*i*t}function n0(i,t){return 3*(1-i)*i*i*t}function i0(i,t){return i*i*i*t}function hs(i,t,e,n,s){return t0(i,t)+e0(i,e)+n0(i,n)+i0(i,s)}class s0 extends Dn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hs(t,s.x,r.x,a.x,o.x),hs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class r0 extends Dn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hs(t,s.x,r.x,a.x,o.x),hs(t,s.y,r.y,a.y,o.y),hs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class a0 extends Dn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o0 extends Dn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l0 extends Dn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cs(t,s.x,r.x,a.x),cs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ih extends Dn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cs(t,s.x,r.x,a.x),cs(t,s.y,r.y,a.y),cs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class c0 extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],c=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ec(o,l.x,h.x,c.x,u.x),ec(o,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var h0=Object.freeze({__proto__:null,ArcCurve:Kg,CatmullRomCurve3:nh,CubicBezierCurve:s0,CubicBezierCurve3:r0,EllipseCurve:eh,LineCurve:a0,LineCurve3:o0,QuadraticBezierCurve:l0,QuadraticBezierCurve3:ih,SplineCurve:c0});class vo extends ue{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],h=[],c=1/e,u=new R,d=new it,m=new R,g=new R,_=new R;let p=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,m.x=f*1,m.y=-p,m.z=f*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,m.x=f*1,m.y=-p,m.z=f*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(g)}for(let x=0;x<=e;x++){const y=n+x*c*s,v=Math.sin(y),D=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*D,a.push(u.x,u.y,u.z),d.x=x/e,d.y=T/(t.length-1),o.push(d.x,d.y);const w=l[3*T+0]*v,P=l[3*T+1],S=l[3*T+0]*D;h.push(w,P,S)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const v=y+x*t.length,D=v,T=v+t.length,w=v+t.length+1,P=v+1;r.push(D,T,P),r.push(w,P,T)}this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(o,2)),this.setAttribute("normal",new jt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.points,t.segments,t.phiStart,t.phiLength)}}class xo extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],h=new R,c=new it;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*s;h.x=t*Math.cos(m),h.y=t*Math.sin(m),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[d]/t+1)/2,c.y=(a[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class rn extends ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(m,2));function x(){const v=new R,D=new R;let T=0;const w=(e-t)/n;for(let P=0;P<=r;P++){const S=[],M=P/r,C=M*(e-t)+t;for(let I=0;I<=s;I++){const O=I/s,k=O*l+o,W=Math.sin(k),B=Math.cos(k);D.x=C*W,D.y=-M*n+p,D.z=C*B,u.push(D.x,D.y,D.z),v.set(W,w,B).normalize(),d.push(v.x,v.y,v.z),m.push(O,1-M),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const M=_[S][P],C=_[S+1][P],I=_[S+1][P+1],O=_[S][P+1];(t>0||S!==0)&&(c.push(M,C,O),T+=3),(e>0||S!==r-1)&&(c.push(C,I,O),T+=3)}h.addGroup(f,T,0),f+=T}function y(v){const D=g,T=new it,w=new R;let P=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),g++;const C=g;for(let I=0;I<=s;I++){const k=I/s*l+o,W=Math.cos(k),B=Math.sin(k);w.x=S*B,w.y=p*M,w.z=S*W,u.push(w.x,w.y,w.z),d.push(0,M,0),T.x=W*.5+.5,T.y=B*.5*M+.5,m.push(T.x,T.y),g++}for(let I=0;I<s;I++){const O=D+I,k=C+I;v===!0?c.push(k,k+1,O):c.push(k+1,k,O),P+=3}h.addGroup(f,P,v===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mo extends ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),h(n),c(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new R,v=new R,D=new R;for(let T=0;T<e.length;T+=3)m(e[T+0],y),m(e[T+1],v),m(e[T+2],D),l(y,v,D,x)}function l(x,y,v,D){const T=D+1,w=[];for(let P=0;P<=T;P++){w[P]=[];const S=x.clone().lerp(v,P/T),M=y.clone().lerp(v,P/T),C=T-P;for(let I=0;I<=C;I++)I===0&&P===T?w[P][I]=S:w[P][I]=S.clone().lerp(M,I/C)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const M=Math.floor(S/2);S%2===0?(d(w[P][M+1]),d(w[P+1][M]),d(w[P][M])):(d(w[P][M+1]),d(w[P+1][M+1]),d(w[P+1][M]))}}function h(x){const y=new R;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function c(){const x=new R;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=p(x)/2/Math.PI+.5,D=f(x)/Math.PI+.5;a.push(v,1-D)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const y=a[x+0],v=a[x+2],D=a[x+4],T=Math.max(y,v,D),w=Math.min(y,v,D);T>.9&&w<.1&&(y<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),D<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function m(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new R,y=new R,v=new R,D=new R,T=new it,w=new it,P=new it;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),D.copy(x).add(y).add(v).divideScalar(3);const C=p(D);_(T,M+0,x,C),_(w,M+2,y,C),_(P,M+4,v,C)}}function _(x,y,v,D){D<0&&x.x===1&&(a[y]=x.x-1),v.x===0&&v.z===0&&(a[y]=D/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.vertices,t.indices,t.radius,t.details)}}class yo extends Mo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yo(t.radius,t.detail)}}class hr extends ue{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],h=[],c=[];let u=t;const d=(e-t)/s,m=new R,g=new it;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const f=r+p/n*a;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),h.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,c.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const p=_*(n+1);for(let f=0;f<n;f++){const x=f+p,y=x,v=x+n+1,D=x+n+2,T=x+1;o.push(y,v,T),o.push(v,D,T)}}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class us extends ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const c=[],u=new R,d=new R,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const x=[],y=f/n;let v=0;f===0&&a===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const T=D/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+v,1-y),x.push(h++)}c.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const y=c[f][x+1],v=c[f][x],D=c[f+1][x],T=c[f+1][x+1];(f!==0||a>0)&&m.push(y,v,T),(f!==n-1||l<Math.PI)&&m.push(v,D,T)}this.setIndex(m),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ur extends ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],h=[],c=new R,u=new R,d=new R;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/s),h.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,x=(s+1)*m+g;a.push(_,p,x),a.push(p,f,x)}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class bo extends ue{constructor(t=new ih(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,h=new it;let c=new R;const u=[],d=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(m,2));function _(){for(let y=0;y<e;y++)p(y);p(r===!1?e:0),x(),f()}function p(y){c=t.getPointAt(y/e,c);const v=a.normals[y],D=a.binormals[y];for(let T=0;T<=s;T++){const w=T/s*Math.PI*2,P=Math.sin(w),S=-Math.cos(w);l.x=S*v.x+P*D.x,l.y=S*v.y+P*D.y,l.z=S*v.z+P*D.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+n*l.x,o.y=c.y+n*l.y,o.z=c.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){const D=(s+1)*(y-1)+(v-1),T=(s+1)*y+(v-1),w=(s+1)*y+v,P=(s+1)*(y-1)+v;g.push(D,T,P),g.push(T,w,P)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)h.x=y/e,h.y=v/s,m.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new bo(new h0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class dr extends qi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class as extends dr{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class u0 extends go{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class So extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class d0 extends So{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const na=new ne,nc=new R,ic=new R;class sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(nc),ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ic),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sc=new ne,ns=new R,ia=new R;class f0 extends sh{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(ns),ia.copy(n.position),ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ia),n.updateMatrixWorld(),s.makeTranslation(-ns.x,-ns.y,-ns.z),sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc)}}class p0 extends So{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new f0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class m0 extends sh{constructor(){super(new jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rc extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new m0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ac=new ne;class g0{constructor(t,e,n=0,s=1/0){this.ray=new vr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ac.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ac),this}intersectObject(t,e=!0,n=[]){return Ka(t,this,n,e),n.sort(oc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ka(t[s],this,n,e);return n.sort(oc),n}}function oc(i,t){return i.distance-t.distance}function Ka(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ka(r[a],t,e,!0)}}class lc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _0 extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);const cc={type:"change"},Eo={type:"start"},rh={type:"end"},Zs=new vr,hc=new an,v0=Math.cos(70*Nu.DEG2RAD),pe=new R,Ne=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sa=1e-6;class x0 extends _0{constructor(t,e=null){super(t,e),this.state=te.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Pn,this._lastTargetPosition=new R,this._quat=new Pn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lc,this._sphericalDelta=new lc,this._scale=1,this._panOffset=new R,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new R,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=y0.bind(this),this._onPointerDown=M0.bind(this),this._onPointerUp=b0.bind(this),this._onContextMenu=C0.bind(this),this._onMouseWheel=T0.bind(this),this._onKeyDown=w0.bind(this),this._onTouchStart=A0.bind(this),this._onTouchMove=R0.bind(this),this._onMouseDown=S0.bind(this),this._onMouseMove=E0.bind(this),this._interceptControlDown=P0.bind(this),this._interceptControlUp=D0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cc),this.update(),this.state=te.NONE}update(t=null){const e=this.object.position;pe.copy(e).sub(this.target),pe.applyQuaternion(this._quat),this._spherical.setFromVector3(pe),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ne:n>Math.PI&&(n-=Ne),s<-Math.PI?s+=Ne:s>Math.PI&&(s-=Ne),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(pe.setFromSpherical(this._spherical),pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=pe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new R(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Zs.origin.copy(this.object.position),Zs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zs.direction))<v0?this.object.lookAt(this.target):(hc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zs.intersectPlane(hc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sa||this._lastTargetPosition.distanceToSquared(this.target)>sa?(this.dispatchEvent(cc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ne/60*this.autoRotateSpeed*t:Ne/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){pe.setFromMatrixColumn(e,0),pe.multiplyScalar(-t),this._panOffset.add(pe)}_panUp(t,e){this.screenSpacePanning===!0?pe.setFromMatrixColumn(e,1):(pe.setFromMatrixColumn(e,0),pe.crossVectors(this.object.up,pe)),pe.multiplyScalar(t),this._panOffset.add(pe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;pe.copy(s).sub(this.target);let r=pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new it,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function M0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function y0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function b0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rh),this.state=te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function S0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=te.DOLLY;break;case Ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}break;case Ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(Eo)}function E0(i){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function T0(i){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(i.preventDefault(),this.dispatchEvent(Eo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(rh))}function w0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function A0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=te.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=te.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(Eo)}function R0(i){switch(this._trackPointer(i),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=te.NONE}}function C0(i){this.enabled!==!1&&i.preventDefault()}function P0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function D0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class L0 extends th{constructor(){super();const t=new ke;t.deleteAttribute("uv");const e=new dr({side:Le}),n=new dr,s=new p0(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Rt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Rt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Rt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Rt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new Rt(t,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const c=new Rt(t,n);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const u=new Rt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Rt(t,Ci(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const m=new Rt(t,Ci(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new Rt(t,Ci(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Rt(t,Ci(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const p=new Rt(t,Ci(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const f=new Rt(t,Ci(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ci(i){const t=new oi;return t.color.setScalar(i),t}const is=new R;function Ke(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;is.copy(t),is[n]=0,is.normalize();const h=.5*a/(a+o),c=1-is.angleTo(i)/l;return Math.sign(is[e])===1?c*h:o/(a+o)+h+h*(1-c)}class I0 extends ke{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new R,l=new R,h=new R(t,e,n).divideScalar(2).subScalar(r),c=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=c.length/6,g=new R,_=.5/s;for(let p=0,f=0;p<c.length;p+=3,f+=2)switch(o.fromArray(c,p),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),c[p+0]=h.x*Math.sign(o.x)+l.x*r,c[p+1]=h.y*Math.sign(o.y)+l.y*r,c[p+2]=h.z*Math.sign(o.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[f+0]=Ke(g,l,"z","y",r,n),d[f+1]=1-Ke(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-Ke(g,l,"z","y",r,n),d[f+1]=1-Ke(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-Ke(g,l,"x","z",r,t),d[f+1]=Ke(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Ke(g,l,"x","z",r,t),d[f+1]=1-Ke(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Ke(g,l,"x","y",r,t),d[f+1]=1-Ke(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=Ke(g,l,"x","y",r,t),d[f+1]=1-Ke(g,l,"y","x",r,e);break}}}const Ve={move:16053492,drop:16751426,height:16762977,obsHeight:8248458,obsSize:6080767,obsAngle:15043839,drag:6080767},be=(i,t,e)=>Math.min(e,Math.max(t,i)),Oe=i=>Math.round(i*1e3)/1e3,Ks=i=>i*180/Math.PI;function ra(i,t,e,n){const s=t[0]-e,r=t[2]-n;return{id:"obsMove",pos:t,kind:"plane",color:Ve.move,tip:`${i} — drag to move it (independent of the drop point)`,apply:(a,o,l)=>({obsX:Oe(be(a-s,-.8,.8)),obsZ:Oe(be(l-r,-.8,.8))})}}function U0(i,t){const e=[],n=i.size/100;e.push({id:"drop",pos:[i.dropX,.002,i.dropZ],kind:"plane",color:Ve.drop,tip:"Drop point — drag to move where objects are released",apply:(r,a,o)=>({dropX:Oe(be(r,-.6,.6)),dropZ:Oe(be(o,-.6,.6))})}),e.push({id:"object",pos:[i.dropX,i.height+n/2,i.dropZ],kind:"plane",color:Ve.drop,tip:"Object — drag to move it over the surface · Shift-drag for height",apply:(r,a,o)=>({dropX:Oe(be(r,-.6,.6)),dropZ:Oe(be(o,-.6,.6))})});const s=n/2+.035;e.push({id:"height",pos:[i.dropX,i.height+n/2+s,i.dropZ],kind:"vertical",color:Ve.height,tip:"Drop height — drag up / down",apply:(r,a)=>({height:Oe(be(a-n/2-s,.005,3))})});for(const r of t)if(r.type==="funnel"){const a=Math.PI*.75,o=Math.PI*.25;e.push(ra("Funnel",[r.cx+r.rt*Math.cos(-Math.PI/2),r.y1,r.cz+r.rt*Math.sin(-Math.PI/2)],r.cx,r.cz)),e.push({id:"obsHeight",pos:[r.cx+r.rt*Math.cos(a),r.y1,r.cz+r.rt*Math.sin(a)],kind:"vertical",color:Ve.obsHeight,tip:"Funnel height — drag up / down",apply:(u,d)=>({obsHeight:Oe(be(d,.05,.8))})}),e.push({id:"obsSize",pos:[r.cx+r.rt*Math.cos(o),r.y1,r.cz+r.rt*Math.sin(o)],kind:"plane",color:Ve.obsSize,tip:"Funnel width — drag in / out",apply:(u,d,m)=>({obsSize:Oe(be(Math.hypot(u-r.cx,m-r.cz),.03,.3))})});const l=r.rb,h=r.rt,c=r.y1;e.push({id:"obsAngle",pos:[r.cx+l*Math.cos(o),r.y0,r.cz+l*Math.sin(o)],kind:"vertical",color:Ve.obsAngle,tip:"Funnel steepness — drag the spout up / down",apply:(u,d)=>({obsAngle:Math.round(be(Ks(Math.atan2(Math.max(.001,c-d),Math.max(.001,h-l))),10,70))})})}else if(r.type==="ramp"){const a=g=>[0,1,2].map(_=>r.c[_]+g*r.u[_]*r.L/2+r.n[_]*r.t/2),o=a(-1),l=a(1),h=r.L,c=Math.asin(be(-r.u[1],0,1)),u=i.obsX,d=i.obsZ,m=[r.c[0]+r.n[0]*r.t/2,r.c[1]+r.n[1]*r.t/2,r.c[2]+r.n[2]*r.t/2];e.push(ra("Ramp",m,u,d)),e.push({id:"obsAngle",pos:o,kind:"vertical",color:Ve.obsAngle,tip:"Ramp slope — drag the top end up / down",apply:(g,_)=>({obsAngle:Math.round(Ks(Math.asin(be((_-.012)/h,Math.sin(4*Math.PI/180),Math.sin(60*Math.PI/180)))))})}),e.push({id:"obsSize",pos:l,kind:"plane",color:Ve.obsSize,tip:"Ramp length and direction — drag the low end around",apply:(g,_,p)=>({obsSize:Oe(be(Math.hypot(g-u,p-d)/Math.max(.1,Math.cos(c))/2.5,.03,.3)),obsDir:Math.round(Ks(Math.atan2(p-d,g-u)))})})}else if(r.type==="pegs"&&r.pegs.length){const a=Math.max(...r.pegs.map(h=>h[1])),o=Math.max(...r.pegs.map(h=>h[0])),l=r.z0+r.len;e.push(ra("Peg field",[i.obsX,a/2,l],i.obsX,i.obsZ)),e.push({id:"obsHeight",pos:[i.obsX,a,l],kind:"vertical",color:Ve.obsHeight,tip:"Peg field height — drag up / down",apply:(h,c)=>({obsHeight:Oe(be(c,.05,.8))})}),e.push({id:"obsSize",pos:[o,a,l],kind:"plane",color:Ve.obsSize,tip:"Peg field width — drag sideways",apply:h=>({obsSize:Oe(be(Math.abs(h-i.obsX),.03,.3))})})}else if(r.type==="wallsRound"||r.type==="wallsRect"){const a=r.type==="wallsRound"?r.r:r.hz;e.push({id:"wallHeight",pos:[0,r.h,a],kind:"vertical",color:Ve.obsHeight,tip:"Tray wall height — drag up / down",apply:(o,l)=>({wallHeight:Oe(be(l,.01,.2))})})}if(i.drag){const r=i.dragDir*Math.PI/180;e.push({id:"drag",pos:[i.dropX+Math.cos(r)*i.dragLength,.003,i.dropZ+Math.sin(r)*i.dragLength],kind:"plane",color:Ve.drag,tip:"Scrape path end — drag to set direction and distance",apply:(a,o,l)=>{const h=a-i.dropX,c=l-i.dropZ;return{dragLength:Oe(be(Math.hypot(h,c),.01,1)),dragDir:Math.round(Ks(Math.atan2(c,h)))}}})}return e}const uc={steel:{color:13225684,metalness:1,roughness:.18},aluminium:{color:14672872,metalness:1,roughness:.32},brass:{color:14198862,metalness:1,roughness:.25},glass:{color:15267583,metalness:0,roughness:.02,transmission:.95,thickness:.02,ior:1.5},ceramic:{color:15986662,metalness:0,roughness:.15,clearcoat:1},granite:{color:9078144,metalness:0,roughness:.75},ice:{color:13955327,metalness:0,roughness:.08,transmission:.85,thickness:.03,ior:1.31},rosewood:{color:4856334,metalness:0,roughness:.42,clearcoat:.35,clearcoatRoughness:.3},maple:{color:14267004,metalness:0,roughness:.5,clearcoat:.4},pine:{color:13146719,metalness:0,roughness:.6},plastic:{color:14831662,metalness:0,roughness:.35},celluloid:{color:16250351,metalness:0,roughness:.3},rubber:{color:2827297,metalness:0,roughness:.92},felt:{color:2054714,metalness:0,roughness:1},concrete:{color:9408914,metalness:0,roughness:.95},mylar:{color:13617594,metalness:0,roughness:.6},calfskin:{color:14271642,metalness:0,roughness:.7}};function ye(i){return new as({...uc[i]??uc.steel})}class N0{constructor(t){this.host=t,this.renderer=new Zg({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bc,this.renderer.toneMapping=Ec,this.renderer.toneMappingExposure=1,t.appendChild(this.renderer.domElement),this.camera=new We(38,1,.005,50),this.camera.position.set(.55,.5,.75),this.controls=new x0(this.camera,this.renderer.domElement),this.controls.target.set(0,.03,0),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI*.495;const e=new ja(this.renderer);this.scene.environment=e.fromScene(new L0,.04).texture,this.scene.background=null;const n=new rc(16773600,2.2);n.position.set(1.2,2.4,.8),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);const s=n.shadow.camera;s.left=-1.2,s.right=1.2,s.top=1.2,s.bottom=-1.2,s.near=.5,s.far=6,n.shadow.bias=-4e-4,this.scene.add(n);const r=new rc(8961023,.6);r.position.set(-1.5,1,-1.2),this.scene.add(r),this.scene.add(new d0(8952234,2234898,.35)),this.world.add(this.surfGroup,this.bodyGroup,this.ghost,this.obsGroup,this.handGroup),this.scene.add(this.world),this.marker=new $e;const a=new Rt(new hr(.008,.011,40),new oi({color:16751426,side:Ee,transparent:!0,opacity:.9,depthTest:!1}));a.rotation.x=-Math.PI/2,a.renderOrder=10,this.marker.add(a),this.world.add(this.marker),this.world.add(this.handleGroup),new ResizeObserver(()=>this.resize()).observe(t),this.resize();let l=null;const h=this.renderer.domElement;t.addEventListener("pointerdown",c=>{if(!(c.target!==h||c.button!==0)){if(this.startDrag(c)){c.stopPropagation(),c.preventDefault(),h.setPointerCapture(c.pointerId);return}l={x:c.clientX,y:c.clientY}}},!0),h.addEventListener("pointermove",c=>{if(this.dragging){this.moveDrag(c);return}c.buttons===0&&this.hover(c)}),h.addEventListener("pointerup",c=>{if(this.dragging){this.endDrag(),h.releasePointerCapture(c.pointerId);return}l&&Math.hypot(c.clientX-l.x,c.clientY-l.y)<4&&this.pick(c),l=null}),h.addEventListener("pointercancel",()=>{this.dragging&&this.endDrag()}),h.addEventListener("pointerleave",()=>{this.dragging||this.setHover(null)})}renderer;scene=new th;camera;controls;surfGroup=new $e;bodyGroup=new $e;ghost=new $e;obsGroup=new $e;handGroup=new $e;world=new $e;hand=null;surfMesh=null;surfRest=null;bodies=[];result=null;visScale=1;autoScale=1;visGain=1;raycaster=new g0;pickPlane=new an(new R(0,1,0),0);onPick=null;marker;q0=new Pn;q1=new Pn;lastDecorKey="";handleGroup=new $e;handleMeshes=[];handleGeo=new us(1,20,14);handleRingGeo=new hr(1.25,1.6,24);handleRingMat=new oi({color:724240,transparent:!0,opacity:.7,depthTest:!1,side:Ee});obsDecor=[];params=null;dragging=null;hoverId=null;handlesVisible=!0;onEdit=null;onHover=null;ndc(t){const e=this.renderer.domElement.getBoundingClientRect();return new it((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}localRay(t){return this.raycaster.setFromCamera(this.ndc(t),this.camera),this.raycaster.ray.clone().applyMatrix4(this.world.matrixWorld.clone().invert())}hitHandle(t){if(!this.handleGroup.visible||!this.handleMeshes.length)return null;this.raycaster.setFromCamera(this.ndc(t),this.camera);const e=this.raycaster.intersectObjects(this.handleMeshes.map(s=>s.mesh),!1);if(e.length)return this.handleMeshes.find(s=>s.mesh===e[0].object)??null;const n=this.ghost.children[0];return this.ghost.visible&&n&&this.raycaster.intersectObject(n,!1).length?this.handleMeshes.find(s=>s.spec.id==="object")??null:null}hover(t){this.setHover(this.hitHandle(t)?.spec.id??null)}setHover(t){if(t===this.hoverId)return;this.hoverId=t,this.renderer.domElement.style.cursor=t?"grab":"",this.paintHandles();const e=this.handleMeshes.find(n=>n.spec.id===t);this.onHover?.(e?e.spec.tip:null)}startDrag(t){let e=this.hitHandle(t);if(!e)return!1;t.shiftKey&&e.spec.id==="object"&&(e=this.handleMeshes.find(a=>a.spec.id==="height")??e);const n=new R(...e.spec.pos);let s;if(e.spec.kind==="plane")s=new an(new R(0,1,0),-n.y);else{const a=this.world.worldToLocal(this.camera.position.clone()),o=new R(a.x-n.x,0,a.z-n.z);o.lengthSq()<1e-10&&o.set(0,0,1),s=new an().setFromNormalAndCoplanarPoint(o.normalize(),n)}const r=new R;return this.localRay(t).intersectPlane(s,r)?(this.dragging={id:e.spec.id,plane:s,offset:n.clone().sub(r)},this.controls.enabled=!1,this.renderer.domElement.style.cursor="grabbing",this.hoverId=e.spec.id,this.paintHandles(),this.onHover?.(e.spec.tip),!0):!1}moveDrag(t){const e=this.dragging,n=new R;if(!this.localRay(t).intersectPlane(e.plane,n))return;n.add(e.offset);const s=this.handleMeshes.find(r=>r.spec.id===e.id)?.spec;s&&this.onEdit?.(s.apply(n.x,n.y,n.z),!1)}endDrag(){this.dragging=null,this.controls.enabled=!0,this.renderer.domElement.style.cursor=this.hoverId?"grab":"",this.onEdit?.({},!0)}get isDragging(){return!!this.dragging}setHandlesVisible(t){this.handlesVisible=t,this.handleGroup.visible=t,t||this.setHover(null)}rebuildHandles(){this.handleGroup.clear();for(const t of this.handleMeshes)t.mesh.material.dispose();if(this.handleMeshes=[],!!this.params){for(const t of U0(this.params,this.obsDecor)){const e=new oi({color:t.color,transparent:!0,opacity:.9,depthTest:!1}),n=new Rt(this.handleGeo,e);n.position.set(...t.pos),n.renderOrder=20;const s=new Rt(this.handleRingGeo,this.handleRingMat);s.renderOrder=19,s.raycast=()=>{},n.add(s),this.handleGroup.add(n),this.handleMeshes.push({mesh:n,spec:t})}this.paintHandles()}}paintHandles(){for(const{mesh:t,spec:e}of this.handleMeshes){const n=e.id===this.hoverId||e.id===this.dragging?.id;t.material.color.set(n?16777215:e.color),t.userData.boost=n?1.35:1}}sizeHandles(){const t=new R;for(const{mesh:e}of this.handleMeshes){e.getWorldPosition(t);const n=this.camera.position.distanceTo(t)*.009*(e.userData.boost??1);e.scale.setScalar(n),e.children[0]?.quaternion.copy(this.camera.quaternion).premultiply(this.world.quaternion.clone().invert())}}resize(){const t=this.host.clientWidth,e=this.host.clientHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}pick(t){const e=this.renderer.domElement.getBoundingClientRect(),n=new it((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1);this.raycaster.setFromCamera(n,this.camera);const s=this.world.matrixWorld.clone().invert(),r=this.raycaster.ray.clone().applyMatrix4(s),a=new R;r.intersectPlane(this.pickPlane,a)&&this.onPick?.(a.x,a.z)}buildScenery(t,e){const n=JSON.stringify(e??{s:t.surface});if(n===this.lastDecorKey&&this.surfMesh)return;this.lastDecorKey=n,this.surfGroup.clear(),this.surfMesh=null;const s=e?.groundY??-.3,r=new Rt(new xo(4,64),new dr({color:1382170,roughness:.95}));if(r.rotation.x=-Math.PI/2,r.position.y=s,r.receiveShadow=!0,this.surfGroup.add(r),!!e){if(e.type==="membrane"){const a=e.radius,o=e.depth??Math.min(.45,a*1.3),l=new Rt(new rn(a+.004,a+.004,o,96,1,!0),new as({color:8003354,roughness:.25,clearcoat:1,side:Ee}));if(l.position.y=-o/2-.001,l.castShadow=!0,l.receiveShadow=!0,this.surfGroup.add(l),e.hoop){const h=new Rt(new ur(a+.009,.0065,16,128),ye("steel"));h.rotation.x=Math.PI/2,h.position.y=.004,h.castShadow=!0,this.surfGroup.add(h);const c=10;for(let u=0;u<c;u++){const d=u/c*Math.PI*2,m=new Rt(new ke(.012,.05,.016),ye("steel"));m.position.set((a+.012)*Math.cos(d),-.04,(a+.012)*Math.sin(d)),m.rotation.y=-d,this.surfGroup.add(m)}}for(let h=0;h<3;h++){const c=h/3*Math.PI*2+.5,u=-s-o;if(u>.01){const d=new Rt(new rn(.006,.006,u,12),ye("steel"));d.position.set((a+.015)*Math.cos(c),-o-u/2,(a+.015)*Math.sin(c)),this.surfGroup.add(d)}}}else if(e.type==="plate"){const a=new Rt(new ke(e.w,Math.max(e.thick,.002),e.d),ye(e.material));a.position.y=-Math.max(e.thick,.002)/2-5e-4,a.receiveShadow=!0,this.surfGroup.add(a)}else if(e.type==="bars"){const a=e.bars;if(a.length){const o=a[0].x-a[0].width,l=a[a.length-1].x+a[0].width;if(a[0].tongue){const c=Math.max(...a.map(m=>m.len)),u=new Rt(new ke(l-o+.04,a[0].thick,.05),ye(e.material));u.position.set((o+l)/2,-a[0].thick/2,-c/2-.025+.001),u.castShadow=!0,u.receiveShadow=!0,this.surfGroup.add(u);const d=new Rt(new ke(l-o+.04,-s-.01,c+.06),new as({color:2303531,metalness:.6,roughness:.4}));d.position.set((o+l)/2,(s-.01)/2-.006,-.02),this.surfGroup.add(d)}else{for(const c of[-1,1]){const u=a.map(g=>new R(g.x,-g.thick-.012,c*g.len*.276)),d=new nh(u.length>1?u:[u[0].clone().add(new R(-.05,0,0)),u[0].clone().add(new R(.05,0,0))]),m=new Rt(new bo(d,Math.max(8,a.length*6),.008,8,!1),ye("maple"));m.castShadow=!0,this.surfGroup.add(m)}if(e.resonators)for(const c of a){const u=Math.min(c.tubeLen,-s-.04),d=new Rt(new rn(c.width*.4,c.width*.4,u,32,1,!0),new as({color:13146949,metalness:1,roughness:.3,side:Ee}));d.position.set(c.x,-c.thick-.03-u/2,0),d.castShadow=!0,this.surfGroup.add(d)}}}}}}setPreview(t,e,n,s=[],r=[0,0]){this.result=null,this.setTilt(r),this.buildObstacles(s),this.handGroup.clear(),this.hand=null,this.lastDecorKey="",this.buildScenery(t,n);const a=new ue;a.setAttribute("position",new Pe(new Float32Array(e.positions),3)),a.setIndex(new Pe(e.indices,1)),a.computeVertexNormals();const o=t.surface==="membrane"?t.memMaterial:t.surface==="plate"?t.plateMaterial:t.barMaterial,l=ye(o);t.surface==="membrane"&&(l.side=Ee),t.surface==="bars"&&(l.flatShading=!0),this.surfMesh=new Rt(a,l),this.surfMesh.receiveShadow=!0,this.surfMesh.castShadow=t.surface==="bars",t.surface==="plate"&&(this.surfMesh.position.y=2e-4),this.surfRest=null,this.surfGroup.add(this.surfMesh),this.bodyGroup.clear(),this.bodies=[]}get hasResult(){return!!this.result}setResult(t,e){this.result=t,this.buildScenery(e,t.decor);const n=t.surfMesh;this.surfMesh&&(this.surfGroup.remove(this.surfMesh),this.surfMesh.geometry.dispose());const s=new ue;s.setAttribute("position",new Pe(new Float32Array(n.positions),3)),s.setIndex(new Pe(n.indices,1)),s.computeVertexNormals(),this.surfRest=n.positions;const r=e.surface==="membrane"?e.memMaterial:e.surface==="plate"?e.plateMaterial:e.barMaterial,a=ye(r);e.surface==="membrane"&&(a.side=Ee),e.surface==="bars"&&(a.flatShading=!0),this.surfMesh=new Rt(s,a),this.surfMesh.receiveShadow=!0,this.surfMesh.castShadow=e.surface==="bars",e.surface==="plate"&&(this.surfMesh.position.y=2e-4),this.surfGroup.add(this.surfMesh);const o=n.visModes.length;let l=0;if(o>0){const d=n.positions.length/3,m=Math.max(1,Math.floor(t.frameCount/300)),g=Math.max(1,Math.floor(d/400));for(let _=0;_<t.frameCount;_+=m)for(let p=0;p<d;p+=g){let f=0;for(let x=0;x<o;x++)f+=n.phi[p*o+x]*t.surfFrames[_*o+x];l=Math.max(l,Math.abs(f))}}const h=e.surface==="membrane"?.012:.006;this.autoScale=l>0?Math.max(1,h/l):1,this.bodyGroup.clear(),this.bodies=[];const c=t.objects.map(d=>this.bodyGeometry(d,d.mesh)),u=t.objects.map(d=>ye(d.material));for(let d=0;d<t.nBodies;d++){const m=t.bodySlot[d]??0,g=new Rt(c[m],u[m]);g.castShadow=!0,g.receiveShadow=!0,this.bodies.push(g),this.bodyGroup.add(g)}if(this.setTilt(t.tilt),this.buildObstacles(t.obstacles),this.handGroup.clear(),this.hand=null,t.handFrames){this.hand=new Rt(new us(.006,16,12),new oi({color:6080767,transparent:!0,opacity:.85})),this.handGroup.add(this.hand);const d=[];for(let m=0;m<t.frameCount;m+=10)t.handFrames[m*4+3]>0&&d.push(new R(t.handFrames[m*4],.003,t.handFrames[m*4+2]));d.length>1&&this.handGroup.add(new tc(new ue().setFromPoints(d),new go({color:6080767,transparent:!0,opacity:.6})))}this.showTime(0)}bodyGeometry(t,e){const n=t.size/100;switch(t.shape){case"sphere":case"shell":return new us(n/2,48,32);case"cube":return new I0(n,n,n,4,Math.min(t.edgeRadius/1e3,n*.45));case"cylinder":case"disc":return new rn(n/2,n/2,Math.max(n*t.aspect,5e-4),64);case"rod":{const s=n/Math.max(t.aspect,1)/2;return new rn(s,s,n,32)}case"tube":{const s=n/Math.max(t.aspect,1)/2,r=Math.max(s-t.wall/1e3,s*.1),a=n/2,o=[new it(r,-a),new it(s,-a),new it(s,a),new it(r,a),new it(r,-a)];return new vo(o,48)}default:{const s=new ue;if(e)s.setAttribute("position",new Pe(new Float32Array(e.positions),3)),s.setIndex(new Pe(new Uint32Array(e.indices),1)),s.computeVertexNormals();else return new yo(n/2,1);return s}}}setTilt(t){const e=t[0]*Math.PI/180,n=t[1]*Math.PI/180,s=new R(Math.sin(e)*Math.cos(n),-Math.cos(e),Math.sin(e)*Math.sin(n)).normalize();this.world.quaternion.setFromUnitVectors(s,new R(0,-1,0))}setObstacles(t){this.buildObstacles(t)}buildObstacles(t){this.obsGroup.clear(),this.obsDecor=t,this.params&&this.rebuildHandles();for(const e of t)if(e.type==="funnel"){const n=e.y1-e.y0,s=ye(e.material);s.side=Ee;const r=new Rt(new rn(e.rt,e.rb,n,72,1,!0),s);r.position.set(e.cx,(e.y0+e.y1)/2,e.cz),r.castShadow=!0,r.receiveShadow=!0,this.obsGroup.add(r);const a=new Rt(new ur(e.rt,.002,8,72),ye(e.material));a.rotation.x=Math.PI/2,a.position.set(e.cx,e.y1,e.cz),this.obsGroup.add(a);for(let o=0;o<3;o++){const l=o/3*Math.PI*2+.3,h=e.y1,c=new Rt(new rn(.0015,.0015,h,6),ye("steel"));c.position.set(e.cx+(e.rt+.004)*Math.cos(l),h/2-0,e.cz+(e.rt+.004)*Math.sin(l)),this.obsGroup.add(c)}}else if(e.type==="ramp"){const n=new Rt(new ke(e.L,e.t,e.W),ye(e.material)),s=new R(...e.u),r=new R(...e.n),a=new ne().makeBasis(s,r,new R().crossVectors(s,r));n.quaternion.setFromRotationMatrix(a),n.position.set(...e.c),n.castShadow=!0,n.receiveShadow=!0,this.obsGroup.add(n)}else if(e.type==="pegs"){const n=ye(e.material),s=new rn(e.r,e.r,e.len,16);for(const[l,h]of e.pegs){const c=new Rt(s,n);c.rotation.x=Math.PI/2,c.position.set(l,h,e.z0+e.len/2),c.castShadow=!0,this.obsGroup.add(c)}const r=e.pegs.map(l=>l[0]),a=Math.max(...e.pegs.map(l=>l[1])),o=new Rt(new ke(Math.max(...r)-Math.min(...r)+.04,a+.02,.004),new as({color:11065599,transparent:!0,opacity:.12,roughness:.1,transmission:.6}));o.position.set((Math.max(...r)+Math.min(...r))/2,(a+.02)/2,e.z0-.003),this.obsGroup.add(o)}else if(e.type==="wallsRound"){const n=ye("maple");n.side=Ee;const s=new Rt(new rn(e.r+e.t/2,e.r+e.t/2,e.h+.02,96,1,!0),n);s.position.y=e.h/2-.01,s.receiveShadow=!0,this.obsGroup.add(s)}else if(e.type==="wallsRect"){const n=ye("maple"),s=e.h+.02;for(const[r,a,o,l]of[[e.t,2*e.hz+2*e.t,e.hx+e.t/2,0],[e.t,2*e.hz+2*e.t,-e.hx-e.t/2,0],[2*e.hx,e.t,0,e.hz+e.t/2],[2*e.hx,e.t,0,-e.hz-e.t/2]]){const h=new Rt(new ke(r,s,a),n);h.position.set(o,e.h/2-.01,l),h.castShadow=!0,h.receiveShadow=!0,this.obsGroup.add(h)}}}showGhost(t){this.ghost.clear();const e=this.bodyGeometry(t,this.result?.objects?.[0]?.mesh??null),n=ye(t.objMaterial);n.transparent=!0,n.opacity=.35,n.depthWrite=!1;const s=new Rt(e,n),r=t.size/100;s.position.set(t.dropX,t.height+r/2,t.dropZ),s.rotation.z=t.tilt*Math.PI/180,this.ghost.add(s);const a=new ue().setFromPoints([new R(t.dropX,0,t.dropZ),new R(t.dropX,t.height,t.dropZ)]),o=new tc(a,new u0({color:16751426,dashSize:.01,gapSize:.008,transparent:!0,opacity:.6}));o.computeLineDistances(),this.ghost.add(o),this.marker.position.set(t.dropX,.002,t.dropZ),this.params={...t},this.rebuildHandles()}setGhostVisible(t){this.ghost.visible=t}showTime(t){const e=this.result;if(!e||!e.frameCount)return;const n=Math.min(Math.max(t*e.frameRate,0),e.frameCount-1),s=Math.floor(n),r=Math.min(s+1,e.frameCount-1),a=n-s,o=e.nBodies;for(let l=0;l<o;l++){const h=(s*o+l)*7,c=(r*o+l)*7,u=e.bodyFrames,d=this.bodies[l];d.visible=t>=e.dropTimes[l]-1e-4||!0,d.position.set(u[h]+(u[c]-u[h])*a,u[h+1]+(u[c+1]-u[h+1])*a,u[h+2]+(u[c+2]-u[h+2])*a),this.q0.set(u[h+3],u[h+4],u[h+5],u[h+6]),this.q1.set(u[c+3],u[c+4],u[c+5],u[c+6]),d.quaternion.slerpQuaternions(this.q0,this.q1,a)}if(this.hand&&e.handFrames){const l=e.handFrames,h=s*4;this.hand.position.set(l[h],l[h+1],l[h+2]),this.hand.visible=l[h+3]>0}if(this.surfMesh&&this.surfRest){const l=e.surfMesh,h=l.visModes.length,c=this.surfMesh.geometry.getAttribute("position"),u=c.array,d=u.length/3,m=e.surfFrames,g=s*h,_=r*h,p=this.autoScale*this.visGain,f=new Float32Array(h);for(let v=0;v<h;v++)f[v]=(m[g+v]+(m[_+v]-m[g+v])*a)*p;const x=l.phi,y=this.surfRest;for(let v=0;v<d;v++){let D=0;const T=v*h;for(let w=0;w<h;w++)D+=x[T+w]*f[w];u[v*3+1]=y[v*3+1]+D}c.needsUpdate=!0,this.surfMesh.geometry.computeVertexNormals()}this.visScale=this.autoScale*this.visGain}frameCamera(t){let e=.4;t.surface==="membrane"?e=t.memDiameter/100:t.surface==="plate"?e=Math.min(Math.max(t.plateW,t.plateD),1.6):e=Math.max(.3,Math.min(1.4,t.barCount*(t.barWidth+t.barGap)/1e3));const n=Math.min(1.5,Math.max(t.height+t.size/100,t.obstacle==="none"?0:t.obsHeight)),s=.02+n*.45,r=Math.max(e*1.15+.25,n*1.6+.2);this.camera.position.set(r*.55,s+r*.55,r*.85),this.controls.target.set(0,s,0)}render(){this.controls.update(),this.handleGroup.visible&&this.sizeHandles(),this.renderer.render(this.scene,this.camera)}get scaleInfo(){return this.visScale}}const Ii=95;let aa=null;function F0(){if(aa)return aa;const i=new Float32Array(Ii),t=Ii-1,e=.23;let n=0;for(let s=0;s<Ii;s++){const r=s-t/2,a=r===0?2*e:Math.sin(2*Math.PI*e*r)/(Math.PI*r),o=.35875-.48829*Math.cos(2*Math.PI*s/t)+.14128*Math.cos(4*Math.PI*s/t)-.01168*Math.cos(6*Math.PI*s/t);i[s]=a*o,n+=i[s]}for(let s=0;s<Ii;s++)i[s]/=n;return aa=i,i}function dc(i){const t=F0(),e=(Ii-1)/2,n=Math.floor(i.length/2),s=new Float32Array(n);for(let r=0;r<n;r++){const a=2*r;let o=0;const l=Math.max(0,e-a),h=Math.min(Ii,i.length+e-a);for(let c=l;c<h;c++)o+=t[c]*i[a+c-e];s[r]=o}return s}function O0(i,t,e,n){const s=[{L:i,R:t,rate:e}];let r=s[0];for(;r.rate/2>=n/4-1&&r.L.length>256;)r={L:dc(r.L),R:dc(r.R),rate:r.rate/2},s.push(r);return s}function To(i,t){const e=i.length,n=i[0].length,s=4,r=new ArrayBuffer(44+n*e*s),a=new DataView(r),o=(h,c)=>{for(let u=0;u<c.length;u++)a.setUint8(h+u,c.charCodeAt(u))};o(0,"RIFF"),a.setUint32(4,36+n*e*s,!0),o(8,"WAVE"),o(12,"fmt "),a.setUint32(16,16,!0),a.setUint16(20,3,!0),a.setUint16(22,e,!0),a.setUint32(24,t,!0),a.setUint32(28,t*e*s,!0),a.setUint16(32,e*s,!0),a.setUint16(34,32,!0),o(36,"data"),a.setUint32(40,n*e*s,!0);const l=new Float32Array(r,44);for(let h=0;h<n;h++)for(let c=0;c<e;c++)l[h*e+c]=i[c][h];return new Blob([r],{type:"audio/wav"})}function wo(i,t){const e=document.createElement("a");e.href=URL.createObjectURL(i),e.download=t,document.body.appendChild(e),e.click(),setTimeout(()=>{URL.revokeObjectURL(e.href),e.remove()},2e3)}const k0={plSource:"take",plSpeed:1,plReverse:!1,plLoop:!1,plGain:1,grOn:!1,grSource:"take",grGain:.8,grScan:.05,grPosition:.1,grSize:220,grDensity:28,grPitch:-12,grPitchRand:0,grQuant:"off",grPosRand:.03,grSpread:.7,grReverse:.15,grShape:.8,stFactor:16,stWindow:.4,stTape:1,stRegion:!0,filterType:"off",filterFreq:2400,filterQ:.8,lfoRate:.1,lfoDepth:0,resOn:!1,resRoot:45,resChord:"minor 9",resQ:60,resMix:.5,delayOn:!1,delayTime:420,delayFb:.45,delayTone:3500,delayMix:.3,revOn:!0,revDecay:4.5,revDamp:.5,revPre:20,revMix:.25,master:.8},$a={"unison/octaves":[0,12,24,36],fifths:[0,7,14,19,26],major:[0,4,7,12,16,19],minor:[0,3,7,12,15,19],"minor 9":[0,3,7,10,14,19],"major 7":[0,4,7,11,14,19],sus4:[0,5,7,12,17,19],cluster:[0,1,2,3,5,6],"harmonic series":[0,12,19,24,28,31]},fc=i=>i.map(t=>({L:t.L.slice(),R:t.R.slice(),rate:t.rate}));class z0{ctx;srcBus;playerGain;filter;lfo;lfoGain;resDry;resWet;resBands=[];resBandGains=[];delayDry;delayWet;dL;dR;dFb;dTone;revDry;revWet;conv;masterGain;limiter;recorder;granular;granGain;analyser;sources={};tape;tapeLoaded="";playId=0;playing=null;tapePos=null;grHead=0;peak=0;recChunks=[];recResolve=null;recording=!1;irTimer=0;lastIR="";onPlayerEnded=null;async init(){if(this.ctx)return;this.ctx=new AudioContext({latencyHint:"interactive",sampleRate:48e3});const t=this.ctx;await t.audioWorklet.addModule(new URL("/object-synth/assets/granular-Sb4c45Dq.js",import.meta.url)),await t.audioWorklet.addModule(new URL("/object-synth/assets/recorder-DmER26zP.js",import.meta.url)),await t.audioWorklet.addModule(new URL("/object-synth/assets/tape-IO5f-yvG.js",import.meta.url)),this.srcBus=t.createGain(),this.playerGain=t.createGain(),this.playerGain.connect(this.srcBus),this.tape=new AudioWorkletNode(t,"tape",{numberOfInputs:0,outputChannelCount:[2]}),this.tape.connect(this.playerGain),this.tape.port.onmessage=l=>{const h=l.data;!this.playing||h.id!==this.playing.id||(h.type==="pos"?this.tapePos={pos:h.pos,t:h.t,speed:h.speed}:h.type==="ended"&&(this.playing=null,this.tapePos=null,this.onPlayerEnded?.()))},this.granular=new AudioWorkletNode(t,"granular",{numberOfInputs:0,outputChannelCount:[2]}),this.granGain=t.createGain(),this.granular.connect(this.granGain),this.granGain.connect(this.srcBus),this.granular.port.onmessage=l=>{l.data.type==="head"&&(this.grHead=l.data.abs)},this.filter=t.createBiquadFilter(),this.lfo=t.createOscillator(),this.lfo.type="sine",this.lfoGain=t.createGain(),this.lfo.connect(this.lfoGain),this.lfoGain.connect(this.filter.detune),this.lfo.start(),this.srcBus.connect(this.filter);const e=this.filter;this.resDry=t.createGain(),this.resWet=t.createGain();const n=t.createGain();e.connect(this.resDry),this.resDry.connect(n);for(let l=0;l<6;l++){const h=t.createBiquadFilter();h.type="bandpass";const c=t.createGain();e.connect(h),h.connect(c),c.connect(this.resWet),this.resBands.push(h),this.resBandGains.push(c)}this.resWet.connect(n),this.delayDry=t.createGain(),this.delayWet=t.createGain();const s=t.createGain();n.connect(this.delayDry),this.delayDry.connect(s);const r=t.createGain();r.channelCount=1,r.channelCountMode="explicit",n.connect(r),this.dL=t.createDelay(3),this.dR=t.createDelay(3),this.dFb=t.createGain(),this.dTone=t.createBiquadFilter(),this.dTone.type="lowpass";const a=t.createChannelMerger(2);r.connect(this.dL),this.dL.connect(this.dR),this.dR.connect(this.dTone),this.dTone.connect(this.dFb),this.dFb.connect(this.dL),this.dL.connect(a,0,0),this.dR.connect(a,0,1),a.connect(this.delayWet),this.delayWet.connect(s),this.revDry=t.createGain(),this.revWet=t.createGain(),this.conv=t.createConvolver();const o=t.createGain();s.connect(this.revDry),this.revDry.connect(o),s.connect(this.conv),this.conv.connect(this.revWet),this.revWet.connect(o),this.masterGain=t.createGain(),this.limiter=t.createDynamicsCompressor(),this.limiter.threshold.value=-3,this.limiter.knee.value=2,this.limiter.ratio.value=20,this.limiter.attack.value=.002,this.limiter.release.value=.15,o.connect(this.masterGain),this.masterGain.connect(this.limiter),this.recorder=new AudioWorkletNode(t,"recorder",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2],channelCount:2,channelCountMode:"explicit"}),this.limiter.connect(this.recorder),this.analyser=t.createAnalyser(),this.analyser.fftSize=2048,this.recorder.connect(this.analyser),this.analyser.connect(t.destination),this.recorder.port.onmessage=l=>{const h=l.data;if(h.type==="peak")this.peak=h.v;else if(h.type==="chunk")this.recChunks.push({L:h.L,R:h.R});else if(h.type==="done"&&this.recResolve){const c=this.recChunks.reduce((g,_)=>g+_.L.length,0),u=new Float32Array(c),d=new Float32Array(c);let m=0;for(const g of this.recChunks)u.set(g.L,m),d.set(g.R,m),m+=g.L.length;this.recResolve(To([u,d],this.ctx.sampleRate)),this.recResolve=null,this.recChunks=[]}}}async resume(){this.ctx.state!=="running"&&await this.ctx.resume()}setSource(t,e,n,s){this.sources[t]={L:e,R:n,rate:s,mips:O0(e,n,s,this.ctx.sampleRate),ver:++this.srcVer}}srcVer=0;feedGranular(t){const e=this.sources[t];e&&this.granular.port.postMessage({type:"buffer",levels:fc(e.mips)})}setGranular(t){this.granular?.port.postMessage({type:"params",params:t})}play(t,e){this.stop();const n=this.sources[t];if(!n)return 0;const s=t+":"+n.ver;this.tapeLoaded!==s&&(this.tape.port.postMessage({type:"levels",levels:fc(n.mips)}),this.tapeLoaded=s);let[r,a]=e.region;a-r<.001&&(r=0,a=1),this.playerGain.gain.value=e.gain??1;const o=++this.playId;return this.playing={id:o,which:t,dur:n.L.length/n.rate},this.tapePos={pos:(e.reverse?a:r)*this.playing.dur,t:this.ctx.currentTime,speed:e.reverse?-e.speed:e.speed},this.tape.port.postMessage({type:"play",id:o,speed:e.speed,loop:e.loop,reverse:e.reverse,region:[r,a]}),this.ctx.currentTime}stop(){this.playing&&this.tape.port.postMessage({type:"stop"}),this.playing=null,this.tapePos=null}isPlaying(){return!!this.playing}playerTime(){const t=this.playing,e=this.tapePos;if(!t||!e)return null;const n=Math.min(.05,Math.max(0,this.ctx.currentTime-e.t));return{t:Math.min(t.dur,Math.max(0,e.pos+n*e.speed)),which:t.which}}setPlayerSpeed(t){this.playing&&this.tape.port.postMessage({type:"speed",speed:t})}applyFx(t,e){if(!this.ctx)return;const n=this.ctx.currentTime,s=.03,r=!e;if((r||e.startsWith("filter")||e.startsWith("lfo"))&&(this.filter.type=t.filterType==="off"?"allpass":t.filterType,t.filterType==="off"?(this.filter.frequency.setTargetAtTime(2e4,n,s),this.filter.Q.value=1e-4,this.lfoGain.gain.value=0):(this.filter.frequency.setTargetAtTime(t.filterFreq,n,s),this.filter.Q.setTargetAtTime(t.filterQ,n,s),this.lfo.frequency.setTargetAtTime(t.lfoRate,n,s),this.lfoGain.gain.setTargetAtTime(t.lfoDepth,n,s))),r||e.startsWith("res")){const a=$a[t.resChord]??$a.minor,o=Math.sqrt(t.resQ)*.5;for(let l=0;l<6;l++){const h=440*Math.pow(2,(t.resRoot+a[l%a.length]+(l>=a.length?12:0)-69)/12);this.resBands[l].frequency.setTargetAtTime(Math.min(h,2e4),n,s),this.resBands[l].Q.setTargetAtTime(t.resQ,n,s),this.resBandGains[l].gain.setTargetAtTime(o/Math.sqrt(1+l*.4),n,s)}this.resDry.gain.setTargetAtTime(t.resOn?1-t.resMix:1,n,s),this.resWet.gain.setTargetAtTime(t.resOn?t.resMix:0,n,s)}if((r||e.startsWith("delay"))&&(this.dL.delayTime.setTargetAtTime(t.delayTime/1e3,n,.05),this.dR.delayTime.setTargetAtTime(t.delayTime/1e3,n,.05),this.dFb.gain.setTargetAtTime(t.delayOn?t.delayFb:0,n,s),this.dTone.frequency.setTargetAtTime(t.delayTone,n,s),this.delayWet.gain.setTargetAtTime(t.delayOn?t.delayMix:0,n,s),this.delayDry.gain.setTargetAtTime(1,n,s)),r||e.startsWith("rev")){this.revWet.gain.setTargetAtTime(t.revOn?t.revMix:0,n,s),this.revDry.gain.setTargetAtTime(t.revOn?1-t.revMix*.5:1,n,s);const a=`${t.revDecay}|${t.revDamp}|${t.revPre}`;a!==this.lastIR&&(this.lastIR=a,clearTimeout(this.irTimer),this.irTimer=window.setTimeout(()=>this.conv.buffer=this.makeIR(t.revDecay,t.revDamp,t.revPre),120))}(r||e==="master")&&this.masterGain.gain.setTargetAtTime(t.master,n,s),(r||e.startsWith("gr"))&&(this.granGain.gain.setTargetAtTime(t.grOn?1:0,n,s),this.setGranular({on:t.grOn,gain:t.grGain,scan:t.grScan,sizeMs:t.grSize,density:t.grDensity,pitch:t.grPitch,pitchRand:t.grPitchRand,quant:t.grQuant,posRand:t.grPosRand,spread:t.grSpread,reverse:t.grReverse,shape:t.grShape,...e==="grPosition"?{position:t.grPosition}:{}})),(r||e==="plGain")&&this.playerGain.gain.setTargetAtTime(t.plGain,n,s)}makeIR(t,e,n){const s=this.ctx.sampleRate,r=Math.round(n/1e3*s),a=r+Math.round(Math.min(t*1.3,30)*s),o=this.ctx.createBuffer(2,a,s);for(let l=0;l<2;l++){const h=o.getChannelData(l);let c=0,u=1234+l*777;for(let d=r;d<a;d++){const m=(d-r)/s;u=u*1664525+1013904223>>>0;const g=u/2147483648-1,_=Math.exp(-6.9078*m/t),p=16e3*Math.exp(-m*e*6/t)+300,f=Math.exp(-2*Math.PI*p/s);c=(1-f)*g+f*c;const x=m<.08?1+2*Math.exp(-m*60)*(g>.7?1:0):1;h[d]=c*_*x}}return o}startRecording(){this.recChunks=[],this.recording=!0,this.recorder.port.postMessage("start")}stopRecording(){return this.recording=!1,new Promise(t=>{this.recResolve=t,this.recorder.port.postMessage("stop")})}}function pc(i,t){let e=i;if(t<1){const r=.45*t,a=Math.exp(-2*Math.PI*r);e=new Float32Array(i);for(let o=0;o<2;o++){let l=0;for(let h=0;h<e.length;h++)l=(1-a)*e[h]+a*l,e[h]=l;l=0;for(let h=e.length-1;h>=0;h--)l=(1-a)*e[h]+a*l,e[h]=l}}const n=Math.max(1,Math.floor(e.length*t)),s=new Float32Array(n);for(let r=0;r<n;r++){const a=r/t,o=Math.floor(a),l=a-o,h=e[o]??0,c=e[o+1]??0;s[r]=h+(c-h)*l}return s}function ah(i,t){try{const e=localStorage.getItem(i);if(e)return{...t,...JSON.parse(e)}}catch{}return{...t}}function Ao(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}const gt=ah("os.params.v1",bh);try{const i=JSON.parse(localStorage.getItem("os.params.v1")??"{}");i.obstacle&&i.obsX===void 0&&(gt.obsX=gt.dropX,gt.obsZ=gt.dropZ,gt.obsDir=oh(gt.dropX,gt.dropZ))}catch{}function oh(i,t){return Math.hypot(i,t)<.02?0:Math.round(Math.atan2(-t,-i)*180/Math.PI)}function lh(i){return i.obstacle&&i.obstacle!=="none"&&gt.obstacle==="none"?{obsX:gt.dropX,obsZ:gt.dropZ,obsDir:oh(gt.dropX,gt.dropZ),...i}:i}const de=ah("os.fx.v1",k0),qt=new z0,Ot=i=>document.getElementById(i),Jt=new N0(Ot("viewport")),un=new Yh(Ot("wave"));let Vn=null,ch=null,xe=null,Hn=null,Se=48e3,os=[],ls=null,hi=!1,fr=pr(),Ja=pr();function pr(){const i=new Worker(new URL("/object-synth/assets/sim.worker-n24IwWhd.js",import.meta.url),{type:"module"});return i.onmessage=G0,i}function Xe(i,t){Ot("progBar").style.width=`${Math.round(i*100)}%`,Ot("progText").textContent=t}let Re=null,B0=0,ds=null;function G0(i){const t=i.data;if(t.type==="progress"){if(t.info==="stretching"){Xe(t.f,`stretching ${Math.round(t.f*100)}%`);return}if(!Re||t.id!==Re.id)return;t.tag==="full"&&(Re.previewDone||!Re.preview)?Xe(t.f,`${Re.preview?"full quality":"simulating"} ${Math.round(t.f*100)}%`):t.tag==="preview"&&!Re.previewDone&&Xe(t.f,`preview ${Math.round(t.f*100)}%`)}else if(t.type==="result"){if(!Re||t.id!==Re.id)return;H0(t.result,t.tag==="preview")}else if(t.type==="stretched")X0(t);else if(t.type==="error"){if(t.tag==="preview"){console.warn("preview failed:",t.message);return}Ro(),Re=null,Xe(0,"error: "+t.message),console.error(t.message)}}function Ro(){hi=!1,Ot("btnDrop").disabled=!1,Ot("btnCancel").hidden=!0}async function hh(){if(Re&&dh(!0),hi)return;await vs(),hi=!0,Ot("btnDrop").disabled=!0,Ot("btnCancel").hidden=!1,Xe(0,"building model…");const i={...gt},t=Ot("quickPreview").checked,e={...i,sampleRate:48e3,maxModes:Math.min(i.maxModes,160),fmax:Math.min(i.fmax,16e3),quality:Math.min(i.quality,.5)},n=t&&(i.sampleRate>48e3||i.maxModes>160||i.fmax>16e3),s=Ot("takeMode").value;Re={id:++B0,mode:s,params:i,preview:n,previewDone:!1,start:performance.now(),base:xe&&s!=="replace"?{L:xe,R:Hn,rate:Se,marks:os.slice()}:null},ds=null,fr.postMessage({type:"simulate",params:i,id:Re.id,tag:"full"}),n&&Ja.postMessage({type:"simulate",params:e,id:Re.id,tag:"preview"})}function H0(i,t){const e=Re;if(t)e.previewDone=!0,Ot("btnDrop").disabled=!1,hi=!1;else if(Ro(),Re=null,e.preview&&jn&&qt.isPlaying()){ds=i,sr=e,Xe(1,"full quality ready (applies after replay)");return}uh(i,e,t)}let sr=null;function V0(){if(ds&&sr){const i=ds,t=sr;ds=null,sr=null,uh(i,t,!1)}}function uh(i,t,e){Vn=i,ch=t.params,Jt.setResult(i,t.params),Jt.setGhostVisible(!1),qt.setSource("sim",i.left,i.right,i.sampleRate);const n=t.base;if(!n)xe=i.left,Hn=i.right,Se=i.sampleRate,os=i.dropTimes.slice();else{Se=n.rate;let l=i.left,h=i.right;if(i.sampleRate!==Se){const c=Se/i.sampleRate;l=pc(l,c),h=pc(h,c)}if(t.mode==="append"){const c=n.L.length,u=new Float32Array(c+l.length),d=new Float32Array(c+l.length);u.set(n.L),u.set(l,c),d.set(n.R),d.set(h,c),os=n.marks.concat(i.dropTimes.map(m=>m+c/Se)),xe=u,Hn=d}else{const c=Math.max(n.L.length,l.length),u=new Float32Array(c),d=new Float32Array(c);u.set(n.L),d.set(n.R);for(let g=0;g<l.length;g++)u[g]+=l[g],d[g]+=h[g];let m=0;for(let g=0;g<c;g++)m=Math.max(m,Math.abs(u[g]),Math.abs(d[g]));if(m>.95){const g=.89/m;for(let _=0;_<c;_++)u[_]*=g,d[_]*=g}os=n.marks.concat(i.dropTimes),xe=u,Hn=d}}qt.setSource("take",xe,Hn,Se),un.setAudio(xe,Hn,Se,os),de.grSource==="take"&&qt.feedGranular("take"),xs();const s=i.stats,r=s.wallSeconds,a=i.left.length/i.sampleRate;Ot("takeInfo").textContent=`${(xe.length/Se).toFixed(2)} s · ${Se/1e3} kHz · 32-bit float${e?" · PREVIEW":""}`;const o=(s.bodyHits?` · ${s.bodyHits} object hits`:"")+(s.obsHits?` · ${s.obsHits} obstacle hits`:"");Ot("stats").innerHTML=`${s.modes} surface modes (lowest ${s.lowestHz.toFixed(1)} Hz) · ${s.contacts} impacts${o}<br>object modes: ${s.objectModes.slice(0,5).map(l=>l>=1e3?(l/1e3).toFixed(1)+"k":l).join(", ")}${s.objectModes.length>5?"…":""} · max ${s.maxSubsteps} substeps<br>${a.toFixed(2)} s ${e?"previewed":"simulated"} in ${r.toFixed(1)} s (${(a/r).toFixed(2)}× realtime)`,e?Xe(0,"preview ready · rendering full quality…"):Xe(1,`done · ${a.toFixed(2)} s`),Ot("autoPlay").checked&&(e||!t.preview)&&Co()}function dh(i=!1){fr.terminate(),fr=pr(),Ja.terminate(),Ja=pr(),Re=null,Ro(),i||Xe(0,"cancelled")}async function vs(){qt.ctx||(await qt.init(),qt.applyFx(de),qt.onPlayerEnded=()=>{jn=!1,yr(),V0()}),await qt.resume()}let jn=!1;async function Co(){if(!Vn)return;await vs(),Jt.hasResult||Jt.setResult(Vn,ch),Jt.setGhostVisible(!1);const i=parseFloat(Ot("replaySpeed").value);qt.play("sim",{speed:i,loop:!1,reverse:!1,region:[0,1],gain:1}),jn=!0,yr()}function xs(){const[i,t]=un.region;de.grSource==="take"?qt.setGranular({regionStart:i,regionEnd:t<i+.001?1:t}):qt.setGranular({regionStart:0,regionEnd:1})}async function fh(){await vs();const i=de.plSource;if(!qt.sources[i]){Xe(0,i==="stretched"?"render a stretch first":"no take yet");return}const t=i==="take"?un.region:[0,1];qt.play(i,{speed:de.plSpeed,loop:de.plLoop,reverse:de.plReverse,region:t,gain:de.plGain}),jn=!1,yr()}function Po(){qt.stop(),jn=!1,yr()}function yr(){const i=document.getElementById("btnPlay");i&&i.classList.toggle("on",qt.isPlaying()&&!jn),Ot("btnReplay").classList.toggle("on",jn)}async function W0(i){if(!xe||hi){Xe(0,"no take to stretch");return}await vs(),hi=!0,i.disabled=!0;let t=xe,e=Hn;if(de.stRegion){const[n,s]=un.region;if(s-n>.001&&s-n<.999){const r=Math.floor(n*t.length),a=Math.floor(s*t.length);t=t.slice(r,a),e=e.slice(r,a)}}Xe(0,"stretching…"),fr.postMessage({type:"stretch",L:t.slice(),R:e.slice(),rate:Se,outRate:qt.ctx.sampleRate,tape:de.stTape,stretch:de.stFactor,windowSec:de.stWindow,maxSeconds:600,seed:Math.floor(Math.random()*1e9)}),Qa=i}let Qa=null;function X0(i){hi=!1,Qa&&(Qa.disabled=!1),ls={L:i.L,R:i.R,rate:i.rate},qt.setSource("stretched",i.L,i.R,i.rate),de.grSource==="stretched"&&(qt.feedGranular("stretched"),xs());const t=i.L.length/i.rate;Xe(1,`stretched ×${i.stretch.toFixed(1)} → ${t.toFixed(1)} s`);const e=document.getElementById("stretchInfo");e&&(e.textContent=`Stretched buffer: ${t.toFixed(1)} s (×${i.stretch.toFixed(1)}). Play it in Player or feed it to Granular.`),de.plSource="stretched",Ln.refreshAll(),fh()}const Fe=i=>i.surface==="membrane",Pi=i=>i.surface==="plate",fn=i=>i.surface==="bars",q0=i=>["cylinder","disc","rod","tube"].includes(i.shape),ki=i=>i.map(t=>[t,fs[t].name]);let mc=0;const Y0=new Set(["surface","memDiameter","memTension","memMaterial","memThickness","memAir","memHoop","memShell","memDepth","memBottom","snares","plateW","plateD","plateThickness","plateMaterial","barCount","barScale","barRoot","barNotes","barMaterial","barTuning","barThickness","barWidth","barGap","resonators","resTune","maxModes","fmax","sampleRate","micSpread","micDist","decay","hfDamp","memGlide","resQ","resMix","obstacle","obsX","obsZ","obsDir","obsHeight","obsSize","obsAngle","obsMaterial","walls","wallHeight","tiltAngle","tiltDir","dropX","dropZ","size","bSize","cSize","bOn","cOn","drag","dragDir","dragLength"]);function Ms(i){Ao("os.params.v1",gt),ys(),Y0.has(i)&&Do(["surface","memDiameter","plateW","plateD","barCount","barWidth","barGap"].includes(i)),Jt.showGhost(gt),Jt.setGhostVisible(!0)}function ph(i){const t=Math.max(gt.size,gt.bOn?gt.bSize:0,gt.cOn?gt.cSize:0)/100;let e;if(i.kind==="membrane")e={kind:"round",r:gt.memDiameter/200+(gt.memHoop?.02:.004)};else if(i.kind==="plate")e={kind:"rect",hx:gt.plateW/2,hz:gt.plateD/2};else{const n=i;e={kind:"rect",hx:Math.max(...n.bars.map(s=>Math.abs(s.x)))+n.width/2+.01,hz:Math.max(...n.bars.map(s=>s.len))/2+.01}}return Ih(gt,{surfTop:0,extent:e,maxObjD:t,fmax:2e4}).map(n=>n.decor)}let to=null;function Do(i=!1){clearTimeout(mc),mc=window.setTimeout(()=>{try{const t={...gt,maxModes:Math.min(gt.maxModes,160),fmax:Math.min(gt.fmax,8e3),snares:!1},e=Xh(t);to=e,Jt.setPreview(gt,e.visual(),e.decor(),ph(e),[gt.tiltAngle,gt.tiltDir]),i&&Jt.frameCamera(gt),Jt.showGhost(gt)}catch(t){console.warn(t)}},180)}function fi(i){Object.assign(gt,i),qe.refreshAll(),ys(),Ao("os.params.v1",gt),Do(!0),Jt.showGhost(gt),Jt.setGhostVisible(!0)}function j0(i,t){const e={shape:"Shape",size:"Size",aspect:"Aspect",wall:"Wall",edgeRadius:"EdgeRadius",roughness:"Roughness",objMaterial:"Material"},n={[i+"On"]:!0};for(const[s,r]of Object.entries(t))e[s]&&(n[i+e[s]]=r);fi(n)}const mh=[["sphere","Sphere (solid)"],["shell","Hollow sphere"],["cube","Cube"],["cylinder","Cylinder / puck"],["disc","Disc / coin"],["rod","Rod"],["tube","Tube"],["rock","Rock (irregular)"]],qe=new Mc(Ot("left"),gt,Ms),gh=Object.keys(no);qe.addSection({title:"Scene",controls:[{type:"preset",label:"Scene",options:Object.keys(Ho),onPick:i=>fi({...Sh,...Ho[i]})},{type:"note",text:"A scene sets the surface, objects, drop and obstacles together. Clear keeps the surface and object A and removes everything else."}]});qe.addSection({title:"Object A",controls:[{type:"preset",label:"Object",options:gh,onPick:i=>fi(no[i])},{key:"shape",label:"Shape",type:"select",options:mh},{key:"objMaterial",label:"Material",type:"select",options:ki(_c)},{key:"size",label:"Size",type:"range",min:.3,max:40,log:!0,unit:"cm",digits:2},{key:"aspect",label:"Aspect (L/⌀)",type:"range",min:.03,max:40,log:!0,digits:2,show:q0},{key:"wall",label:"Wall",type:"range",min:.1,max:10,log:!0,unit:"mm",show:i=>i.shape==="shell"||i.shape==="tube"},{key:"edgeRadius",label:"Edge radius",type:"range",min:.1,max:10,log:!0,unit:"mm",show:i=>i.shape!=="sphere"&&i.shape!=="shell"},{key:"roughness",label:"Irregularity",type:"range",min:0,max:1,show:i=>i.shape==="rock"},{key:"objRing",label:"Object ring",type:"range",min:-40,max:20,step:.5,unit:"dB",digits:1},{key:"click",label:"Impact click",type:"range",min:-40,max:20,step:.5,unit:"dB",digits:1},{key:"objFem",label:"Vibration analysis",type:"toggle"},{type:"note",text:i=>{const t=fs[i.objMaterial];return(t?`${t.name}: E ${(t.E/1e9).toFixed(t.E<1e9?3:0)} GPa, ρ ${t.rho} kg/m³, restitution ${t.e}. `:"")+(["cube","rock","cylinder"].includes(i.shape)&&i.objFem?"Tones from a voxel FEM analysis of the actual shape.":"")}}]});for(const i of["b","c"]){const t=i.toUpperCase(),e=s=>!!s[i+"On"],n=s=>s[i+"Shape"];qe.addSection({title:`Object ${t}`,enableKey:`${i}On`,closed:!e(gt),controls:[{type:"preset",label:"Object",options:gh,onPick:s=>j0(i,no[s])},{key:`${i}Shape`,label:"Shape",type:"select",options:mh},{key:`${i}Material`,label:"Material",type:"select",options:ki(_c)},{key:`${i}Size`,label:"Size",type:"range",min:.3,max:40,log:!0,unit:"cm",digits:2},{key:`${i}Aspect`,label:"Aspect (L/⌀)",type:"range",min:.03,max:40,log:!0,digits:2,show:s=>["cylinder","disc","rod","tube"].includes(n(s))},{key:`${i}Wall`,label:"Wall",type:"range",min:.1,max:10,log:!0,unit:"mm",show:s=>n(s)==="shell"||n(s)==="tube"},{key:`${i}EdgeRadius`,label:"Edge radius",type:"range",min:.1,max:10,log:!0,unit:"mm",show:s=>n(s)!=="sphere"&&n(s)!=="shell"},{key:`${i}Roughness`,label:"Irregularity",type:"range",min:0,max:1,show:s=>n(s)==="rock"}]})}qe.addSection({title:"Drop",controls:[{type:"preset",label:"Release",options:Object.keys(Wo),onPick:i=>fi(Wo[i])},{key:"count",label:"Count (A)",type:"range",min:1,max:24,step:1},{key:"bCount",label:"Count (B)",type:"range",min:1,max:24,step:1,show:i=>i.bOn},{key:"cCount",label:"Count (C)",type:"range",min:1,max:24,step:1,show:i=>i.cOn},{key:"height",label:"Height",type:"range",min:.005,max:3,log:!0,unit:"m",digits:3},{key:"dropX",label:"Position X",type:"range",min:-.6,max:.6,step:.001,unit:"m",digits:3},{key:"dropZ",label:"Position Z",type:"range",min:-.6,max:.6,step:.001,unit:"m",digits:3},{key:"randomOrient",label:"Random orient.",type:"toggle"},{key:"tilt",label:"Tilt",type:"range",min:0,max:90,step:.5,unit:"°",digits:1,show:i=>!i.randomOrient},{key:"spin",label:"Spin",type:"range",min:0,max:60,unit:"rad/s",digits:1},{key:"toss",label:"Toss speed",type:"range",min:0,max:3,unit:"m/s",digits:2},{key:"tossDir",label:"Toss direction",type:"range",min:-180,max:180,step:1,unit:"°",show:i=>i.toss>0},{key:"interval",label:"Interval",type:"range",min:.02,max:3,log:!0,unit:"s"},{key:"scatter",label:"Scatter",type:"range",min:0,max:.4,unit:"m",digits:3},{key:"seed",label:"Seed",type:"range",min:1,max:999,step:1},{type:"buttons",buttons:[{label:"🎲 New seed",onClick:()=>{gt.seed=1+Math.floor(Math.random()*998),qe.refreshAll(),Ms("seed")}}]}]});qe.addSection({title:"Collisions & obstacles",closed:gt.obstacle==="none"&&!gt.walls,controls:[{type:"preset",label:"Obstacles",options:Object.keys(Vo),onPick:i=>fi(lh(Vo[i]))},{key:"collide",label:"Objects collide",type:"toggle"},{key:"obstacle",label:"Obstacle",type:"select",options:[["none","None"],["funnel","Funnel"],["ramp","Ramp"],["pegs","Peg field"]]},{key:"obsX",label:"Position X",type:"range",min:-.8,max:.8,step:.001,unit:"m",digits:3,show:i=>i.obstacle!=="none"},{key:"obsZ",label:"Position Z",type:"range",min:-.8,max:.8,step:.001,unit:"m",digits:3,show:i=>i.obstacle!=="none"},{key:"obsDir",label:"Downhill dir.",type:"range",min:-180,max:180,step:1,unit:"°",show:i=>i.obstacle==="ramp"},{key:"obsMaterial",label:"Material",type:"select",options:ki(["steel","brass","aluminium","glass","maple","plastic"]),show:i=>i.obstacle!=="none"},{key:"obsHeight",label:"Height",type:"range",min:.05,max:.8,unit:"m",digits:3,show:i=>i.obstacle==="funnel"||i.obstacle==="pegs"},{key:"obsSize",label:"Size",type:"range",min:.03,max:.3,unit:"m",digits:3,show:i=>i.obstacle!=="none"},{key:"obsAngle",label:"Angle",type:"range",min:4,max:70,unit:"°",show:i=>i.obstacle==="funnel"||i.obstacle==="ramp"},{key:"obsRing",label:"Obstacle ring",type:"range",min:-40,max:12,unit:"dB",digits:1,show:i=>i.obstacle!=="none"},{key:"walls",label:"Tray walls",type:"toggle"},{key:"wallHeight",label:"Wall height",type:"range",min:.01,max:.2,unit:"m",digits:3,show:i=>i.walls},{type:"note",text:i=>(i.obstacle==="funnel"?"Objects dropped into the funnel rattle down it and meet at the opening.":i.obstacle==="ramp"?"Position is the ramp's top end; it runs downhill along its direction.":i.obstacle==="pegs"?"Objects bounce down through the pegs (a Galton board) and scatter.":"")+(i.obstacle!=="none"?" Drag the white handle in the 3D view to move it; the drop point moves separately.":"")}]});qe.addSection({title:"Surface",controls:[{type:"preset",label:"Surface",options:Object.keys(Go),onPick:i=>fi(Go[i])},{key:"surface",label:"Type",type:"select",options:[["membrane","Membrane (drum skin)"],["plate","Plate / floor"],["bars","Bars / tongues"]]},{key:"memMaterial",label:"Skin",type:"select",options:ki(wh),show:Fe},{key:"memDiameter",label:"Diameter",type:"range",min:10,max:100,unit:"cm",digits:1,show:Fe},{key:"memTension",label:"Tension",type:"range",min:100,max:2e4,log:!0,unit:"N/m",show:Fe},{key:"memThickness",label:"Thickness",type:"range",min:.05,max:1,log:!0,unit:"mm",show:Fe},{key:"memAir",label:"Air loading",type:"range",min:0,max:3,show:Fe},{key:"memGlide",label:"Pitch glide",type:"range",min:0,max:5,show:Fe},{key:"memHoop",label:"Rim / hoop",type:"toggle",show:Fe},{key:"memShell",label:"Closed shell",type:"toggle",show:Fe},{key:"memDepth",label:"Shell depth",type:"range",min:5,max:80,unit:"cm",show:i=>Fe(i)&&i.memShell},{key:"memBottom",label:"Bottom head",type:"toggle",show:i=>Fe(i)&&i.memShell},{key:"memBottomTension",label:"Bottom tension",type:"range",min:200,max:2e4,log:!0,unit:"N/m",show:i=>Fe(i)&&i.memShell&&i.memBottom},{key:"snares",label:"Snares",type:"toggle",show:i=>Fe(i)&&i.memShell&&i.memBottom},{key:"snareTension",label:"Snare tension",type:"range",min:.3,max:15,log:!0,unit:"N",show:i=>Fe(i)&&i.memShell&&i.memBottom&&i.snares},{type:"note",text:i=>{const t=fs[i.memMaterial].rho*i.memThickness/1e3,e=Math.sqrt(i.memTension/t);return`wave speed ${e.toFixed(0)} m/s · ideal (0,1) mode ${(2.405*e/(2*Math.PI*i.memDiameter/200)).toFixed(1)} Hz before air loading`+(i.memShell&&i.memBottom?" · the enclosed air couples both heads":"")},show:Fe},{key:"plateMaterial",label:"Material",type:"select",options:ki(Th),show:Pi},{key:"plateW",label:"Width",type:"range",min:.1,max:4,log:!0,unit:"m",show:Pi},{key:"plateD",label:"Depth",type:"range",min:.1,max:4,log:!0,unit:"m",show:Pi},{key:"plateThickness",label:"Thickness",type:"range",min:.3,max:200,log:!0,unit:"mm",show:Pi},{key:"plateNonlin",label:"Stretching (bloom)",type:"range",min:0,max:5,show:Pi},{key:"plateCurve",label:"Curvature (gong)",type:"range",min:0,max:10,show:Pi},{key:"barTuning",label:"Bar type",type:"select",options:[["marimba","Marimba (1:4:10)"],["xylophone","Xylophone (1:3)"],["uniform","Untuned bar (1:2.76:5.4)"],["tongue","Tongue / kalimba (clamped)"]],show:fn},{key:"barMaterial",label:"Material",type:"select",options:ki(Eh),show:fn},{key:"barCount",label:"Bars",type:"range",min:1,max:36,step:1,show:fn},{key:"barScale",label:"Scale",type:"select",options:Object.keys(oa),show:fn},{key:"barRoot",label:"Root note",type:"range",min:24,max:96,step:1,fmt:eo,show:fn},{key:"barNotes",label:"Notes (MIDI)",type:"text",show:i=>i.surface==="bars"&&i.barScale==="custom"},{key:"barThickness",label:"Thickness",type:"range",min:1,max:40,unit:"mm",show:fn},{key:"barWidth",label:"Width",type:"range",min:10,max:90,unit:"mm",step:1,show:fn},{key:"barGap",label:"Gap",type:"range",min:1,max:40,unit:"mm",step:1,show:fn},{key:"resonators",label:"Resonators",type:"toggle",show:fn},{key:"resTune",label:"Res. tuning",type:"range",min:-200,max:200,step:1,unit:"¢",show:i=>i.surface==="bars"&&i.resonators},{key:"resQ",label:"Res. Q",type:"range",min:3,max:300,log:!0,show:i=>i.surface==="bars"&&i.resonators},{key:"resMix",label:"Res. level",type:"range",min:0,max:3,show:i=>i.surface==="bars"&&i.resonators},{type:"note",text:i=>"Notes: "+gc(i).slice(0,i.barCount).map(eo).join(" "),show:fn},{key:"decay",label:"Decay (T60)",type:"range",min:.05,max:20,log:!0,unit:"s"},{key:"hfDamp",label:"HF damping",type:"range",min:0,max:2},{key:"micDist",label:"Mic distance",type:"range",min:.05,max:3,log:!0,unit:"m"},{key:"micSpread",label:"Stereo spread",type:"range",min:0,max:1}]});qe.addSection({title:"Friction & scraping",closed:!gt.drag&&!gt.tiltAngle,controls:[{key:"surfTexture",label:"Surface rough.",type:"range",min:0,max:20,unit:"µm",digits:2},{key:"objTexture",label:"Object rough.",type:"range",min:0,max:20,unit:"µm",digits:2},{key:"grain",label:"Grain size",type:"range",min:.05,max:5,log:!0,unit:"mm",digits:2},{key:"squeak",label:"Squeak (stick-slip)",type:"range",min:0,max:2},{key:"frictionDrive",label:"Friction drive",type:"range",min:0,max:1,show:i=>i.surface!=="membrane"},{key:"tiltAngle",label:"Surface tilt",type:"range",min:0,max:30,unit:"°",digits:1},{key:"tiltDir",label:"Downhill dir.",type:"range",min:-180,max:180,step:1,unit:"°",show:i=>i.tiltAngle>0},{key:"drag",label:"Drag object A",type:"toggle"},{key:"dragSpeed",label:"Drag speed",type:"range",min:.005,max:1.5,log:!0,unit:"m/s",digits:3,show:i=>i.drag},{key:"dragPressure",label:"Pressure",type:"range",min:0,max:30,unit:"N",show:i=>i.drag},{key:"dragLength",label:"Distance",type:"range",min:.01,max:1,unit:"m",digits:3,show:i=>i.drag},{key:"dragDir",label:"Direction",type:"range",min:-180,max:180,step:1,unit:"°",show:i=>i.drag},{key:"dragStart",label:"Start",type:"range",min:0,max:3,unit:"s",show:i=>i.drag},{type:"note",text:"Sliding or rolling over microscopic bumps makes scraping and rolling noise: the pitch follows speed ÷ grain size, and bumps smaller than the contact patch are smoothed out. Squeak adds static friction for stick-slip."}]});qe.addSection({title:"World & simulation",controls:[{type:"preset",label:"Gravity",options:Object.keys(Xo),onPick:i=>fi({gravity:Xo[i]})},{key:"gravity",label:"Gravity",type:"range",min:.1,max:40,log:!0,unit:"m/s²"},{key:"airDrag",label:"Air drag",type:"range",min:0,max:20},{key:"sampleRate",label:"Sample rate",type:"select",options:[["48000","48 kHz"],["96000","96 kHz"],["192000","192 kHz"],["384000","384 kHz"]]},{key:"fmax",label:"Highest mode",type:"range",min:2e3,max:16e4,log:!0,unit:"Hz"},{key:"maxModes",label:"Mode budget",type:"range",min:32,max:2e3,step:1,log:!0},{key:"quality",label:"Contact res.",type:"range",min:.5,max:8,log:!0,digits:2},{key:"duration",label:"Max duration",type:"range",min:.5,max:30,unit:"s",digits:1},{type:"note",text:i=>`Rendered at ${i.sampleRate/1e3} kHz / 32-bit float. Modes up to ${Math.round(Math.min(i.fmax,.45*i.sampleRate)/1e3)} kHz are simulated; content above 20 kHz becomes audible when slowed ×${Math.max(1,Math.round(Math.min(i.fmax,.45*i.sampleRate)/2e4))}+.`}]});const Ln=new Mc(Ot("right"),de,i=>{Ao("os.fx.v1",de),qt.ctx&&(i==="grSource"&&(qt.feedGranular(de.grSource),xs()),i==="plSpeed"&&qt.setPlayerSpeed(de.plSpeed),qt.applyFx(de,i))});Ln.addSection({title:"Player",badge:"tape-style varispeed",cls:"sect-audio",controls:[{key:"plSource",label:"Source",type:"select",options:[["take","Take (selection)"],["stretched","Stretched buffer"]]},{key:"plSpeed",label:"Speed",type:"range",min:1/64,max:4,log:!0,fmt:i=>i<1?`1/${(1/i).toFixed(i<.1?0:1)}×`:`${i.toFixed(2)}×`},{key:"plReverse",label:"Reverse",type:"toggle"},{key:"plLoop",label:"Loop",type:"toggle"},{key:"plGain",label:"Level",type:"range",min:0,max:2},{type:"buttons",buttons:[{label:"▶ Play",id:"btnPlay",onClick:fh},{label:"■ Stop",onClick:Po}]},{type:"note",text:"Slowing a 192 kHz take by ¼ pitches 20–80 kHz content into the audible range."}]});Ln.addSection({title:"Granular",enableKey:"grOn",badge:"stretch / freeze",cls:"sect-audio",controls:[{key:"grSource",label:"Source",type:"select",options:[["take","Take (selection)"],["stretched","Stretched buffer"]]},{key:"grScan",label:"Scan speed",type:"range",min:-1,max:1,step:.001,digits:3,fmt:i=>Math.abs(i)<.001?"freeze":`${i.toFixed(3)} (×${(1/Math.abs(i)).toFixed(0)})`},{key:"grPosition",label:"Position",type:"range",min:0,max:1,step:.001,digits:3},{key:"grSize",label:"Grain size",type:"range",min:5,max:2e3,log:!0,unit:"ms",step:1},{key:"grDensity",label:"Density",type:"range",min:1,max:300,log:!0,unit:"/s"},{key:"grPitch",label:"Pitch",type:"range",min:-48,max:24,step:.1,unit:"st",digits:1},{key:"grPitchRand",label:"Pitch random",type:"range",min:0,max:24,unit:"st",digits:1},{key:"grQuant",label:"Pitch quantize",type:"select",options:["off","semitones","octaves","fifths"]},{key:"grPosRand",label:"Position jitter",type:"range",min:0,max:2,log:!1,unit:"s",digits:3},{key:"grSpread",label:"Stereo spread",type:"range",min:0,max:1},{key:"grReverse",label:"Reverse prob.",type:"range",min:0,max:1},{key:"grShape",label:"Envelope",type:"range",min:.02,max:1},{key:"grGain",label:"Level",type:"range",min:0,max:2}]});Ln.addSection({title:"Spectral stretch",badge:"PaulStretch",cls:"sect-audio",controls:[{key:"stFactor",label:"Stretch",type:"range",min:1.5,max:400,log:!0,fmt:i=>`×${i.toFixed(i<10?1:0)}`},{key:"stWindow",label:"Window",type:"range",min:.02,max:3,log:!0,unit:"s",digits:3},{key:"stTape",label:"Tape speed",type:"range",min:1/32,max:2,log:!0,fmt:i=>i<1?`1/${(1/i).toFixed(1)}×`:`${i.toFixed(2)}×`},{key:"stRegion",label:"Selection only",type:"toggle"},{type:"buttons",buttons:[{label:"⟿ Render stretch",onClick:i=>W0(i)},{label:"Export stretched",onClick:()=>{ls&&wo(To([ls.L,ls.R],ls.rate),`stretched-${Date.now()}.wav`)}}]},{type:"note",text:"Tape speed pitches the take down before stretching (reveals ultrasonic partials). Long windows give smooth drones; short windows keep texture."}]});document.querySelector("#right .section:last-child .sb").insertAdjacentHTML("beforeend",'<div class="note" id="stretchInfo"></div>');Ln.addSection({title:"Filter",cls:"sect-audio",closed:!0,controls:[{key:"filterType",label:"Type",type:"select",options:["off","lowpass","highpass","bandpass","notch","peaking"]},{key:"filterFreq",label:"Cutoff",type:"range",min:20,max:2e4,log:!0,unit:"Hz"},{key:"filterQ",label:"Resonance",type:"range",min:.1,max:30,log:!0},{key:"lfoRate",label:"Sweep rate",type:"range",min:.01,max:10,log:!0,unit:"Hz"},{key:"lfoDepth",label:"Sweep depth",type:"range",min:0,max:4800,step:10,unit:"¢"}]});Ln.addSection({title:"Resonator chord",enableKey:"resOn",cls:"sect-audio",closed:!0,controls:[{key:"resRoot",label:"Root",type:"range",min:24,max:84,step:1,fmt:eo},{key:"resChord",label:"Chord",type:"select",options:Object.keys($a)},{key:"resQ",label:"Q",type:"range",min:2,max:400,log:!0},{key:"resMix",label:"Mix",type:"range",min:0,max:1}]});Ln.addSection({title:"Delay",enableKey:"delayOn",cls:"sect-audio",closed:!0,controls:[{key:"delayTime",label:"Time",type:"range",min:10,max:2500,log:!0,unit:"ms",step:1},{key:"delayFb",label:"Feedback",type:"range",min:0,max:.97},{key:"delayTone",label:"Tone",type:"range",min:300,max:18e3,log:!0,unit:"Hz"},{key:"delayMix",label:"Mix",type:"range",min:0,max:1}]});Ln.addSection({title:"Reverb",enableKey:"revOn",cls:"sect-audio",controls:[{key:"revDecay",label:"Decay",type:"range",min:.3,max:30,log:!0,unit:"s"},{key:"revDamp",label:"Damping",type:"range",min:0,max:2},{key:"revPre",label:"Pre-delay",type:"range",min:0,max:250,unit:"ms",step:1},{key:"revMix",label:"Mix",type:"range",min:0,max:1}]});Ln.addSection({title:"Master & record",cls:"sect-audio",controls:[{key:"master",label:"Volume",type:"range",min:0,max:1.5},{type:"buttons",buttons:[{label:"● Record output",id:"btnRec",cls:"rec",onClick:i=>Z0(i)}]},{type:"note",text:"Records everything you hear (post-FX) as a 32-bit float WAV."}]});document.querySelector("#right .section:last-child .sb").insertAdjacentHTML("beforeend",'<div class="meter"><div id="meterBar"></div></div><div class="recinfo" id="recInfo"></div>');let _h=0;async function Z0(i){if(await vs(),!qt.recording)qt.startRecording(),_h=performance.now(),i.classList.add("active"),i.textContent="■ Stop recording";else{i.classList.remove("active"),i.textContent="● Record output";const t=await qt.stopRecording();wo(t,`object-synth-${new Date().toISOString().replace(/[:.]/g,"-")}.wav`),Ot("recInfo").textContent=""}}function eo(i){const t=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],e=Math.round(i),n=Math.round((i-e)*100);return`${t[(e%12+12)%12]}${Math.floor(e/12)-1}${n?(n>0?"+":"")+n+"¢":""}`}Ot("btnDrop").addEventListener("click",hh);Ot("btnCancel").addEventListener("click",()=>dh());Ot("btnReplay").addEventListener("click",()=>jn?Po():Co());Ot("visGain").addEventListener("input",i=>{Jt.visGain=Math.pow(10,+i.target.value-1)});Ot("btnSelAll").addEventListener("click",()=>{un.region=[0,1],un.draw(),xs()});Ot("btnExportTake").addEventListener("click",()=>{xe&&wo(To([xe,Hn],Se),`take-${Se/1e3}k-${Date.now()}.wav`)});document.querySelectorAll("#viewMode button").forEach(i=>i.addEventListener("click",()=>{document.querySelectorAll("#viewMode button").forEach(t=>t.classList.remove("on")),i.classList.add("on"),un.setMode(i.dataset.v)}));un.onRegion=()=>xs();Jt.onPick=(i,t)=>{gt.dropX=Math.round(i*1e3)/1e3,gt.dropZ=Math.round(t*1e3)/1e3,qe.refreshAll(),Ms("dropX")};const K0=Ot("viewHint").textContent??"";Jt.onHover=i=>{Ot("viewHint").textContent=i??K0};Jt.onEdit=(i,t)=>{if(Object.assign(gt,i),qe.refreshAll(),t){Ms("dropX");return}if(to)try{Jt.setObstacles(ph(to))}catch(e){console.warn(e)}Jt.showGhost(gt),Jt.setGhostVisible(!0)};function Lo(i){Object.assign(gt,i),qe.refreshAll(),Ms(Object.keys(i)[0])}function ys(){document.querySelectorAll("#toolObstacle button").forEach(i=>i.classList.toggle("on",i.dataset.v===gt.obstacle)),Ot("toolWalls").classList.toggle("on",gt.walls),Ot("toolScrape").classList.toggle("on",gt.drag),Ot("toolHandles").classList.toggle("on",Jt.handlesVisible)}document.querySelectorAll("#toolObstacle button").forEach(i=>i.addEventListener("click",()=>{const t=i.dataset.v,e=lh({obstacle:t});(t==="funnel"||t==="pegs")&&gt.height<gt.obsHeight+.05&&(e.height=Math.round((gt.obsHeight+.1)*1e3)/1e3),Lo(e)}));Ot("toolWalls").addEventListener("click",()=>Lo({walls:!gt.walls}));Ot("toolScrape").addEventListener("click",()=>Lo({drag:!gt.drag}));Ot("toolHandles").addEventListener("click",()=>{Jt.setHandlesVisible(!Jt.handlesVisible),ys()});Ot("toolFrame").addEventListener("click",()=>Jt.frameCamera(gt));ys();window.addEventListener("keydown",i=>{const t=i.target.tagName;t==="INPUT"&&i.target.type==="text"||t!=="SELECT"&&(i.code==="Space"?(i.preventDefault(),hh()):i.key==="r"||i.key==="R"?Co():i.key==="Escape"?Po():(i.key==="h"||i.key==="H")&&(Jt.setHandlesVisible(!Jt.handlesVisible),ys()))});function vh(){requestAnimationFrame(vh);const i=qt.ctx?qt.playerTime():null;i&&i.which==="sim"&&Vn&&(Jt.showTime(i.t),Ot("timeReadout").textContent=`${i.t.toFixed(3)} s`);const t=[];if(i&&i.which==="take"&&xe&&t.push({pos:i.t/(xe.length/Se),color:"#ffffff"}),i&&i.which==="sim"&&xe&&Vn){const n=(xe.length-Vn.left.length*(Se/Vn.sampleRate))/Se,s=Ot("takeMode").value==="append";t.push({pos:((s?n:0)+i.t)/(xe.length/Se),color:"#ffffff"})}if(de.grOn&&de.grSource==="take"&&xe&&t.push({pos:qt.grHead,color:"#5cc8ff"}),JSON.stringify(t)!==JSON.stringify(un.heads)&&(un.heads=t,un.draw()),qt.ctx){const n=qt.peak;Ot("meterBar").style.width=`${Math.min(100,Math.max(0,(20*Math.log10(n+1e-6)+60)/60*100))}%`,qt.recording&&(Ot("recInfo").textContent=`recording ${((performance.now()-_h)/1e3).toFixed(1)} s`)}Jt.render()}Do(!0);Jt.showGhost(gt);requestAnimationFrame(vh);window.__os={scene:Jt,engine:qt,get result(){return Vn},params:gt};
