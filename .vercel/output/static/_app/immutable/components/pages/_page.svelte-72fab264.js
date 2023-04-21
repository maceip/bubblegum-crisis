import{O as Io,L as Ft,G as si,B as Ro,P as Ai,S as rn,i as sn,s as an,H as kr,I as zr,J as Or,K as Nr,f as je,t as $e,N as Sn,x as tt,y as nt,z as it,A as rt,k as Lt,l as Dt,m as It,h as He,n as ot,b as _t,Q as Od,R as Fi,g as _o,d as vo,E as Nd,o as sa,T as fs,v as xu,U as da,a as Et,c as At,V as Fd,e as fl,W as hl,X as pl,Y as Ud,Z as ml,_ as Bd,q as aa,r as oa,M as Mt,C as nr,$ as Fr,a0 as Os,a1 as Ns,u as Vd,a2 as la,a3 as ca}from"../../chunks/index-da6c9f9f.js";import"../../chunks/utils-d2eec17c.js";import{l as Ti,m as Gd,w as vn,r as Hd}from"../../chunks/singletons-2597a6c7.js";import{p as Wd}from"../../chunks/stores-48ed9c4c.js";Ti.disable_scroll_handling;Ti.goto;Ti.invalidate;Ti.invalidateAll;Ti.preload_data;Ti.preload_code;Ti.before_navigate;Ti.after_navigate;Ti.apply_action;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="150",lr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jd=0,gl=1,qd=2,yu=1,bu=2,cs=3,Gi=0,Pn=1,Ui=2,Vi=0,Tr=1,_l=2,vl=3,xl=4,Xd=5,Mr=100,$d=101,Kd=102,yl=103,bl=104,Yd=200,Zd=201,Jd=202,Qd=203,wu=204,Su=205,ef=206,tf=207,nf=208,rf=209,sf=210,af=0,of=1,lf=2,xo=3,cf=4,uf=5,df=6,ff=7,fa=0,hf=1,pf=2,hi=0,mf=1,gf=2,_f=3,Mu=4,vf=5,Eu=300,Lr=301,Dr=302,yo=303,bo=304,ha=306,wo=1e3,ai=1001,So=1002,Tn=1003,wl=1004,Pa=1005,Kn=1006,xf=1007,gs=1008,ir=1009,yf=1010,bf=1011,Au=1012,wf=1013,Qi=1014,er=1015,_s=1016,Sf=1017,Mf=1018,Cr=1020,Ef=1021,oi=1023,Af=1024,Tf=1025,tr=1026,Ir=1027,Cf=1028,Pf=1029,Lf=1030,Df=1031,If=1033,La=33776,Da=33777,Ia=33778,Ra=33779,Sl=35840,Ml=35841,El=35842,Al=35843,Rf=36196,Tl=37492,Cl=37496,Pl=37808,Ll=37809,Dl=37810,Il=37811,Rl=37812,kl=37813,zl=37814,Ol=37815,Nl=37816,Fl=37817,Ul=37818,Bl=37819,Vl=37820,Gl=37821,ka=36492,kf=36283,Hl=36284,Wl=36285,jl=36286,Hi=3e3,kt=3001,zf=3200,Of=3201,ys=0,Nf=1,di="srgb",vs="srgb-linear",Tu="display-p3",za=7680,Ff=519,ql=35044,Xl="300 es",Mo=1035;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const hs=Math.PI/180,ua=180/Math.PI;function Ur(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function wn(s,e,t){return Math.max(e,Math.min(t,s))}function zo(s,e){return(s%e+e)%e}function Uf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Bf(s,e,t){return s!==e?(t-s)/(e-s):0}function ps(s,e,t){return(1-t)*s+t*e}function Vf(s,e,t,n){return ps(s,e,1-Math.exp(-t*n))}function Gf(s,e=1){return e-Math.abs(zo(s,e*2)-e)}function Hf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Wf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function jf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qf(s,e){return s+Math.random()*(e-s)}function Xf(s){return s*(.5-Math.random())}function $f(s){s!==void 0&&($l=s);let e=$l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kf(s){return s*hs}function Yf(s){return s*ua}function Eo(s){return(s&s-1)===0&&s!==0}function Zf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Jf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),g=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*d,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*d,a*l);break;case"ZXZ":s.set(c*d,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*p,c*g,a*l);break;case"YXY":s.set(c*g,a*u,c*p,a*l);break;case"ZYZ":s.set(c*p,c*g,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function us(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pu={DEG2RAD:hs,RAD2DEG:ua,generateUUID:Ur,clamp:wn,euclideanModulo:zo,mapLinear:Uf,inverseLerp:Bf,lerp:ps,damp:Vf,pingpong:Gf,smoothstep:Hf,smootherstep:Wf,randInt:jf,randFloat:qf,randFloatSpread:Xf,seededRandom:$f,degToRad:Kf,radToDeg:Yf,isPowerOfTwo:Eo,ceilPowerOfTwo:Zf,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Jf,normalize:Rn,denormalize:us};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mn{constructor(){Mn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],g=n[5],p=n[8],m=i[0],h=i[3],x=i[6],E=i[1],w=i[4],T=i[7],R=i[2],C=i[5],O=i[8];return r[0]=o*m+a*E+c*R,r[3]=o*h+a*w+c*C,r[6]=o*x+a*T+c*O,r[1]=l*m+u*E+d*R,r[4]=l*h+u*w+d*C,r[7]=l*x+u*T+d*O,r[2]=f*m+g*E+p*R,r[5]=f*h+g*w+p*C,r[8]=f*x+g*T+p*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,g=l*r-o*c,p=t*d+n*f+i*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=d*m,e[1]=(i*l-u*n)*m,e[2]=(a*n-i*o)*m,e[3]=f*m,e[4]=(u*t-i*c)*m,e[5]=(i*r-a*t)*m,e[6]=g*m,e[7]=(n*c-l*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new Mn;function Lu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}class rr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const f=r[o+0],g=r[o+1],p=r[o+2],m=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=p,e[t+3]=m;return}if(d!==m||c!==f||l!==g||u!==p){let h=1-a;const x=c*f+l*g+u*p+d*m,E=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const R=Math.sqrt(w),C=Math.atan2(R,x*E);h=Math.sin(h*C)/R,a=Math.sin(a*C)/R}const T=a*E;if(c=c*h+f*T,l=l*h+g*T,u=u*h+p*T,d=d*h+m*T,h===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[o],f=r[o+1],g=r[o+2],p=r[o+3];return e[t]=a*p+u*d+c*g-l*f,e[t+1]=c*p+u*f+l*d-a*g,e[t+2]=l*p+u*g+a*f-c*d,e[t+3]=u*p-a*d-c*f-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(r/2),f=c(n/2),g=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*g*p,this._y=l*g*d-f*u*p,this._z=l*u*p+f*g*d,this._w=l*u*d-f*g*p;break;case"YXZ":this._x=f*u*d+l*g*p,this._y=l*g*d-f*u*p,this._z=l*u*p-f*g*d,this._w=l*u*d+f*g*p;break;case"ZXY":this._x=f*u*d-l*g*p,this._y=l*g*d+f*u*p,this._z=l*u*p+f*g*d,this._w=l*u*d-f*g*p;break;case"ZYX":this._x=f*u*d-l*g*p,this._y=l*g*d+f*u*p,this._z=l*u*p-f*g*d,this._w=l*u*d+f*g*p;break;case"YZX":this._x=f*u*d+l*g*p,this._y=l*g*d+f*u*p,this._z=l*u*p-f*g*d,this._w=l*u*d-f*g*p;break;case"XZY":this._x=f*u*d-l*g*p,this._y=l*g*d-f*u*p,this._z=l*u*p+f*g*d,this._w=l*u*d+f*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-l)*g,this._z=(o-i)*g}else if(n>a&&n>d){const g=2*Math.sqrt(1+n-a-d);this._w=(u-c)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(r+l)/g}else if(a>d){const g=2*Math.sqrt(1+a-n-d);this._w=(r-l)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+d-n-a);this._w=(o-i)/g,this._x=(r+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,n=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,d=c*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=l*c+f*-r+u*-a-d*-o,this.y=u*c+f*-o+d*-r-l*-a,this.z=d*c+f*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new se,Kl=new rr;function Pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Qf=new Mn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),eh=new Mn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Bi=new se;function th(s){return s.convertSRGBToLinear(),Bi.set(s.r,s.g,s.b).applyMatrix3(eh),s.setRGB(Bi.x,Bi.y,Bi.z)}function nh(s){return Bi.set(s.r,s.g,s.b).applyMatrix3(Qf),s.setRGB(Bi.x,Bi.y,Bi.z).convertLinearToSRGB()}const ih={[vs]:s=>s,[di]:s=>s.convertSRGBToLinear(),[Tu]:th},rh={[vs]:s=>s,[di]:s=>s.convertLinearToSRGB(),[Tu]:nh},En={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return vs},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ih[e],i=rh[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let ur;class Du{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=xs("canvas")),ur.width=e.width,ur.height=e.height;const n=ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pr(t[n]/255)*255):t[n]=Pr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Iu{constructor(e=null){this.isSource=!0,this.uuid=Ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ua(i[o].image)):r.push(Ua(i[o]))}else r=Ua(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Du.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sh=0,li=class ia extends sr{constructor(e=ia.DEFAULT_IMAGE,t=ia.DEFAULT_MAPPING,n=ai,i=ai,r=Kn,o=gs,a=oi,c=ir,l=ia.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Ur(),this.name="",this.source=new Iu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wo:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wo:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=Eu;li.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,n=0,i=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],g=c[5],p=c[9],m=c[2],h=c[6],x=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-m)<.01&&Math.abs(p-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+m)<.1&&Math.abs(p+h)<.1&&Math.abs(l+g+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,T=(g+1)/2,R=(x+1)/2,C=(u+f)/4,O=(d+m)/4,v=(p+h)/4;return w>T&&w>R?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=C/n,r=O/n):T>R?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=C/i,r=v/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=O/r,i=v/r),this.set(n,i,r,t),this}let E=Math.sqrt((h-p)*(h-p)+(d-m)*(d-m)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(h-p)/E,this.y=(d-m)/E,this.z=(f-u)/E,this.w=Math.acos((l+g+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wi extends sr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new li(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ru extends li{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ah extends li{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],d=e[c+1],f=e[c+2];u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),d=e.getY(c),f=e.getZ(c);u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Xi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Xi)}else n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox),Ba.applyMatrix4(e.matrixWorld),this.union(Ba);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Fs.subVectors(this.max,es),dr.subVectors(e.a,es),fr.subVectors(e.b,es),hr.subVectors(e.c,es),Ri.subVectors(fr,dr),ki.subVectors(hr,fr),$i.subVectors(dr,hr);let t=[0,-Ri.z,Ri.y,0,-ki.z,ki.y,0,-$i.z,$i.y,Ri.z,0,-Ri.x,ki.z,0,-ki.x,$i.z,0,-$i.x,-Ri.y,Ri.x,0,-ki.y,ki.x,0,-$i.y,$i.x,0];return!Va(t,dr,fr,hr,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,dr,fr,hr,Fs))?!1:(Us.crossVectors(Ri,ki),t=[Us.x,Us.y,Us.z],Va(t,dr,fr,hr,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new se,new se,new se,new se,new se,new se,new se,new se],Xi=new se,Ba=new bs,dr=new se,fr=new se,hr=new se,Ri=new se,ki=new se,$i=new se,es=new se,Fs=new se,Us=new se,Ki=new se;function Va(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ki.fromArray(s,r);const a=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),c=e.dot(Ki),l=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const oh=new bs,ts=new se,Ga=new se;let Oo=class{constructor(e=new se,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ts,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(Ga)),this.expandByPoint(ts.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const bi=new se,Ha=new se,Bs=new se,zi=new se,Wa=new se,Vs=new se,ja=new se;class ku{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ha.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Ha);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Bs),a=zi.dot(this.direction),c=-zi.dot(Bs),l=zi.lengthSq(),u=Math.abs(1-o*o);let d,f,g,p;if(u>0)if(d=o*c-a,f=o*a-c,p=r*u,d>=0)if(f>=-p)if(f<=p){const m=1/u;d*=m,f*=m,g=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),g=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),g=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),g=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ha).addScaledVector(Bs,f),g}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,r){Wa.subVectors(t,e),Vs.subVectors(n,e),ja.crossVectors(Wa,Vs);let o=this.direction.dot(ja),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const c=a*this.direction.dot(Vs.crossVectors(zi,Vs));if(c<0)return null;const l=a*this.direction.dot(Wa.cross(zi));if(l<0||c+l>o)return null;const u=-a*zi.dot(ja);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,c,l,u,d,f,g,p,m,h){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=d,x[14]=f,x[3]=g,x[7]=p,x[11]=m,x[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,g=o*d,p=a*u,m=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=g+p*l,t[5]=f-m*l,t[9]=-a*c,t[2]=m-f*l,t[6]=p+g*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,g=c*d,p=l*u,m=l*d;t[0]=f+m*a,t[4]=p*a-g,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=g*a-p,t[6]=m+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,g=c*d,p=l*u,m=l*d;t[0]=f-m*a,t[4]=-o*d,t[8]=p+g*a,t[1]=g+p*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,g=o*d,p=a*u,m=a*d;t[0]=c*u,t[4]=p*l-g,t[8]=f*l+m,t[1]=c*d,t[5]=m*l+f,t[9]=g*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,g=o*l,p=a*c,m=a*l;t[0]=c*u,t[4]=m-f*d,t[8]=p*d+g,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=g*d+p,t[10]=f-m*d}else if(e.order==="XZY"){const f=o*c,g=o*l,p=a*c,m=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+m,t[5]=o*u,t[9]=g*d-p,t[2]=p*d-g,t[6]=a*u,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lh,e,ch)}lookAt(e,t,n){const i=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Oi.crossVectors(n,Un),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Oi.crossVectors(n,Un)),Oi.normalize(),Gs.crossVectors(Un,Oi),i[0]=Oi.x,i[4]=Gs.x,i[8]=Un.x,i[1]=Oi.y,i[5]=Gs.y,i[9]=Un.y,i[2]=Oi.z,i[6]=Gs.z,i[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],g=n[13],p=n[2],m=n[6],h=n[10],x=n[14],E=n[3],w=n[7],T=n[11],R=n[15],C=i[0],O=i[4],v=i[8],S=i[12],y=i[1],z=i[5],F=i[9],H=i[13],B=i[2],Z=i[6],K=i[10],ae=i[14],ee=i[3],de=i[7],X=i[11],j=i[15];return r[0]=o*C+a*y+c*B+l*ee,r[4]=o*O+a*z+c*Z+l*de,r[8]=o*v+a*F+c*K+l*X,r[12]=o*S+a*H+c*ae+l*j,r[1]=u*C+d*y+f*B+g*ee,r[5]=u*O+d*z+f*Z+g*de,r[9]=u*v+d*F+f*K+g*X,r[13]=u*S+d*H+f*ae+g*j,r[2]=p*C+m*y+h*B+x*ee,r[6]=p*O+m*z+h*Z+x*de,r[10]=p*v+m*F+h*K+x*X,r[14]=p*S+m*H+h*ae+x*j,r[3]=E*C+w*y+T*B+R*ee,r[7]=E*O+w*z+T*Z+R*de,r[11]=E*v+w*F+T*K+R*X,r[15]=E*S+w*H+T*ae+R*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],g=e[14],p=e[3],m=e[7],h=e[11],x=e[15];return p*(+r*c*d-i*l*d-r*a*f+n*l*f+i*a*g-n*c*g)+m*(+t*c*g-t*l*f+r*o*f-i*o*g+i*l*u-r*c*u)+h*(+t*l*d-t*a*g-r*o*d+n*o*g+r*a*u-n*l*u)+x*(-i*a*u-t*c*d+t*a*f+i*o*d-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],g=e[11],p=e[12],m=e[13],h=e[14],x=e[15],E=d*h*l-m*f*l+m*c*g-a*h*g-d*c*x+a*f*x,w=p*f*l-u*h*l-p*c*g+o*h*g+u*c*x-o*f*x,T=u*m*l-p*d*l+p*a*g-o*m*g-u*a*x+o*d*x,R=p*d*c-u*m*c-p*a*f+o*m*f+u*a*h-o*d*h,C=t*E+n*w+i*T+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/C;return e[0]=E*O,e[1]=(m*f*r-d*h*r-m*i*g+n*h*g+d*i*x-n*f*x)*O,e[2]=(a*h*r-m*c*r+m*i*l-n*h*l-a*i*x+n*c*x)*O,e[3]=(d*c*r-a*f*r-d*i*l+n*f*l+a*i*g-n*c*g)*O,e[4]=w*O,e[5]=(u*h*r-p*f*r+p*i*g-t*h*g-u*i*x+t*f*x)*O,e[6]=(p*c*r-o*h*r-p*i*l+t*h*l+o*i*x-t*c*x)*O,e[7]=(o*f*r-u*c*r+u*i*l-t*f*l-o*i*g+t*c*g)*O,e[8]=T*O,e[9]=(p*d*r-u*m*r-p*n*g+t*m*g+u*n*x-t*d*x)*O,e[10]=(o*m*r-p*a*r+p*n*l-t*m*l-o*n*x+t*a*x)*O,e[11]=(u*a*r-o*d*r-u*n*l+t*d*l+o*n*g-t*a*g)*O,e[12]=R*O,e[13]=(u*m*i-p*d*i+p*n*f-t*m*f-u*n*h+t*d*h)*O,e[14]=(p*a*i-o*m*i-p*n*c+t*m*c+o*n*h-t*a*h)*O,e[15]=(o*d*i-u*a*i+u*n*c-t*d*c-o*n*f+t*a*f)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,f=r*l,g=r*u,p=r*d,m=o*u,h=o*d,x=a*d,E=c*l,w=c*u,T=c*d,R=n.x,C=n.y,O=n.z;return i[0]=(1-(m+x))*R,i[1]=(g+T)*R,i[2]=(p-w)*R,i[3]=0,i[4]=(g-T)*C,i[5]=(1-(f+x))*C,i[6]=(h+E)*C,i[7]=0,i[8]=(p+w)*O,i[9]=(h-E)*O,i[10]=(1-(f+m))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=pr.set(i[0],i[1],i[2]).length();const o=pr.set(i[4],i[5],i[6]).length(),a=pr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ti.copy(this);const l=1/r,u=1/o,d=1/a;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,t.setFromRotationMatrix(ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+r)/(o-r),g=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*l,g=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pr=new se,ti=new $t,lh=new se(0,0,0),ch=new se(1,1,1),Oi=new se,Gs=new se,Un=new se,Yl=new $t,Zl=new rr;class pa{constructor(e=0,t=0,n=0,i=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(wn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uh=0;const Jl=new se,mr=new rr,wi=new $t,Hs=new se,ns=new se,dh=new se,fh=new rr,Ql=new se(1,0,0),ec=new se(0,1,0),tc=new se(0,0,1),hh={type:"added"},nc={type:"removed"};class Jt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new se,t=new pa,n=new rr,i=new se(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Mn}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(ns,Hs,this.up):wi.lookAt(Hs,ns,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),mr.setFromRotationMatrix(wi),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(nc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Jt.DEFAULT_UP=new se(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new se,Si=new se,qa=new se,Mi=new se,gr=new se,_r=new se,ic=new se,Xa=new se,$a=new se,Ka=new se;class Ei{constructor(e=new se,t=new se,n=new se){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ni.subVectors(e,t),i.cross(ni);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ni.subVectors(i,t),Si.subVectors(n,t),qa.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(Si),c=ni.dot(qa),l=Si.dot(Si),u=Si.dot(qa),d=o*l-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,g=(l*c-a*u)*f,p=(o*u-a*c)*f;return r.set(1-g-p,p,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi),Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Mi),c.set(0,0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c}static isFrontFacing(e,t,n,i){return ni.subVectors(n,t),Si.subVectors(e,t),ni.cross(Si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),ni.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ei.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;gr.subVectors(i,n),_r.subVectors(r,n),Xa.subVectors(e,n);const c=gr.dot(Xa),l=_r.dot(Xa);if(c<=0&&l<=0)return t.copy(n);$a.subVectors(e,i);const u=gr.dot($a),d=_r.dot($a);if(u>=0&&d<=u)return t.copy(i);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(gr,o);Ka.subVectors(e,r);const g=gr.dot(Ka),p=_r.dot(Ka);if(p>=0&&g<=p)return t.copy(r);const m=g*l-c*p;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(_r,a);const h=u*p-g*d;if(h<=0&&d-u>=0&&g-p>=0)return ic.subVectors(r,i),a=(d-u)/(d-u+(g-p)),t.copy(i).addScaledVector(ic,a);const x=1/(h+m+f);return o=m*x,a=f*x,t.copy(n).addScaledVector(gr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ph=0;class Ci extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Tr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wu,this.blendDst=Su,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Ya(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}let Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=En.workingColorSpace){return this.r=e,this.g=t,this.b=n,En.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=En.workingColorSpace){if(e=zo(e,1),t=wn(t,0,1),n=wn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ya(o,r,e+1/3),this.g=Ya(o,r,e),this.b=Ya(o,r,e-1/3)}return En.toWorkingColorSpace(this,i),this}setStyle(e,t=di){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,En.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,En.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,En.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,En.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const n=zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return En.fromWorkingColorSpace(bn.copy(this),e),wn(bn.r*255,0,255)<<16^wn(bn.g*255,0,255)<<8^wn(bn.b*255,0,255)<<0}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=En.workingColorSpace){En.fromWorkingColorSpace(bn.copy(this),t);const n=bn.r,i=bn.g,r=bn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=En.workingColorSpace){return En.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=di){En.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,i=bn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(ii),ii.h+=e,ii.s+=t,ii.l+=n,this.setHSL(ii.h,ii.s,ii.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Ws);const n=ps(ii.h,Ws.h,t),i=ps(ii.s,Ws.s,t),r=ps(ii.l,Ws.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const bn=new Ae;Ae.NAMES=zu;class Fo extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new se,js=new Qe;class pi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ql,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),i=Rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),i=Rn(i,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ou extends pi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nu extends pi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ln extends pi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mh=0;const $n=new $t,Za=new Jt,vr=new se,Bn=new bs,is=new bs,dn=new se;class _i extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Nu:Ou)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Mn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new se,1/0);return}if(e){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];is.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Bn.min,is.min),Bn.expandByPoint(dn),dn.addVectors(Bn.max,is.max),Bn.expandByPoint(dn)):(Bn.expandByPoint(is.min),Bn.expandByPoint(is.max))}Bn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)dn.fromBufferAttribute(a,l),c&&(vr.fromBufferAttribute(e,l),dn.add(vr)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let y=0;y<a;y++)l[y]=new se,u[y]=new se;const d=new se,f=new se,g=new se,p=new Qe,m=new Qe,h=new Qe,x=new se,E=new se;function w(y,z,F){d.fromArray(i,y*3),f.fromArray(i,z*3),g.fromArray(i,F*3),p.fromArray(o,y*2),m.fromArray(o,z*2),h.fromArray(o,F*2),f.sub(d),g.sub(d),m.sub(p),h.sub(p);const H=1/(m.x*h.y-h.x*m.y);isFinite(H)&&(x.copy(f).multiplyScalar(h.y).addScaledVector(g,-m.y).multiplyScalar(H),E.copy(g).multiplyScalar(m.x).addScaledVector(f,-h.x).multiplyScalar(H),l[y].add(x),l[z].add(x),l[F].add(x),u[y].add(E),u[z].add(E),u[F].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let y=0,z=T.length;y<z;++y){const F=T[y],H=F.start,B=F.count;for(let Z=H,K=H+B;Z<K;Z+=3)w(n[Z+0],n[Z+1],n[Z+2])}const R=new se,C=new se,O=new se,v=new se;function S(y){O.fromArray(r,y*3),v.copy(O);const z=l[y];R.copy(z),R.sub(O.multiplyScalar(O.dot(z))).normalize(),C.crossVectors(v,z);const H=C.dot(u[y])<0?-1:1;c[y*4]=R.x,c[y*4+1]=R.y,c[y*4+2]=R.z,c[y*4+3]=H}for(let y=0,z=T.length;y<z;++y){const F=T[y],H=F.start,B=F.count;for(let Z=H,K=H+B;Z<K;Z+=3)S(n[Z+0]),S(n[Z+1]),S(n[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const i=new se,r=new se,o=new se,a=new se,c=new se,l=new se,u=new se,d=new se;if(e)for(let f=0,g=e.count;f<g;f+=3){const p=e.getX(f+0),m=e.getX(f+1),h=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,h),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,h),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let f=0,g=t.count;f<g;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let g=0,p=0;for(let m=0,h=c.length;m<h;m++){a.isInterleavedBufferAttribute?g=c[m]*a.data.stride+a.offset:g=c[m]*u;for(let x=0;x<u;x++)f[p++]=l[g++]}return new pi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],g=e(f,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const g=l[d];u.push(g.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,g=d.length;f<g;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new $t,ui=new ku,qs=new Oo,sc=new se,rs=new se,ss=new se,as=new se,Ja=new se,Xs=new se,$s=new Qe,Ks=new Qe,Ys=new Qe,Qa=new se,Zs=new se;class Yn extends Jt{constructor(e=new _i,t=new Fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Xs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Ja.fromBufferAttribute(d,e),o?Xs.addScaledVector(Ja,u):Xs.addScaledVector(Ja.sub(t),u))}t.add(Xs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),ui.copy(e.ray).recast(e.near),qs.containsPoint(ui.origin)===!1&&(ui.intersectSphere(qs,sc)===null||ui.origin.distanceToSquared(sc)>(e.far-e.near)**2))||(rc.copy(r).invert(),ui.copy(e.ray).applyMatrix4(rc),n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,d=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,p=d.length;g<p;g++){const m=d[g],h=i[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,T=E;w<T;w+=3){const R=a.getX(w),C=a.getX(w+1),O=a.getX(w+2);o=Js(this,h,e,ui,l,u,R,C,O),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,f.start),p=Math.min(a.count,f.start+f.count);for(let m=g,h=p;m<h;m+=3){const x=a.getX(m),E=a.getX(m+1),w=a.getX(m+2);o=Js(this,i,e,ui,l,u,x,E,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let g=0,p=d.length;g<p;g++){const m=d[g],h=i[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,T=E;w<T;w+=3){const R=w,C=w+1,O=w+2;o=Js(this,h,e,ui,l,u,R,C,O),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,f.start),p=Math.min(c.count,f.start+f.count);for(let m=g,h=p;m<h;m+=3){const x=m,E=m+1,w=m+2;o=Js(this,i,e,ui,l,u,x,E,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function gh(s,e,t,n,i,r,o,a){let c;if(e.side===Pn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Gi,a),c===null)return null;Zs.copy(a),Zs.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Zs);return l<t.near||l>t.far?null:{distance:l,point:Zs.clone(),object:s}}function Js(s,e,t,n,i,r,o,a,c){s.getVertexPosition(o,rs),s.getVertexPosition(a,ss),s.getVertexPosition(c,as);const l=gh(s,e,t,n,rs,ss,as,Qa);if(l){i&&($s.fromBufferAttribute(i,o),Ks.fromBufferAttribute(i,a),Ys.fromBufferAttribute(i,c),l.uv=Ei.getUV(Qa,rs,ss,as,$s,Ks,Ys,new Qe)),r&&($s.fromBufferAttribute(r,o),Ks.fromBufferAttribute(r,a),Ys.fromBufferAttribute(r,c),l.uv2=Ei.getUV(Qa,rs,ss,as,$s,Ks,Ys,new Qe));const u={a:o,b:a,c,normal:new se,materialIndex:0};Ei.getNormal(rs,ss,as,u.normal),l.face=u}return l}class ws extends _i{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,g=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ln(l,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(d,2));function p(m,h,x,E,w,T,R,C,O,v,S){const y=T/O,z=R/v,F=T/2,H=R/2,B=C/2,Z=O+1,K=v+1;let ae=0,ee=0;const de=new se;for(let X=0;X<K;X++){const j=X*z-H;for(let W=0;W<Z;W++){const he=W*y-F;de[m]=he*E,de[h]=j*w,de[x]=B,l.push(de.x,de.y,de.z),de[m]=0,de[h]=0,de[x]=C>0?1:-1,u.push(de.x,de.y,de.z),d.push(W/O),d.push(1-X/v),ae+=1}}for(let X=0;X<v;X++)for(let j=0;j<O;j++){const W=f+j+Z*X,he=f+j+Z*(X+1),Me=f+(j+1)+Z*(X+1),J=f+(j+1)+Z*X;c.push(W,he,J),c.push(he,Me,J),ee+=6}a.addGroup(g,ee,S),g+=ee,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(s){const e={};for(let t=0;t<s.length;t++){const n=Rr(s[t]);for(const i in n)e[i]=n[i]}return e}function _h(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fu(s){return s.getRenderTarget()===null&&s.outputEncoding===kt?di:vs}const Uo={clone:Rr,merge:An};var vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vh,this.fragmentShader=xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=_h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Bo=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Cn extends Bo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,yr=1;class yh extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Cn(xr,yr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Cn(xr,yr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Cn(xr,yr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Cn(xr,yr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Cn(xr,yr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Cn(xr,yr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=hi,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Uu extends li{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bh extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Uu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ws(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Vi});r.uniforms.tEquirect.value=t;const o=new Yn(i,r),a=t.minFilter;return t.minFilter===gs&&(t.minFilter=Kn),new yh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const eo=new se,wh=new se,Sh=new Mn;class Yi{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=eo.subVectors(n,t).cross(wh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(eo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sh.getNormalMatrix(e),i=this.coplanarPoint(eo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Oo,Qs=new se;class Vo{constructor(e=new Yi,t=new Yi,n=new Yi,i=new Yi,r=new Yi,o=new Yi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7],f=n[8],g=n[9],p=n[10],m=n[11],h=n[12],x=n[13],E=n[14],w=n[15];return t[0].setComponents(a-i,d-c,m-f,w-h).normalize(),t[1].setComponents(a+i,d+c,m+f,w+h).normalize(),t[2].setComponents(a+r,d+l,m+g,w+x).normalize(),t[3].setComponents(a-r,d-l,m-g,w-x).normalize(),t[4].setComponents(a-o,d-u,m-p,w-E).normalize(),t[5].setComponents(a+o,d+u,m+p,w+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qs.x=i.normal.x>0?e.max.x:e.min.x,Qs.y=i.normal.y>0?e.max.y:e.min.y,Qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Mh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const d=l.array,f=l.usage,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,d,f),l.onUploadCallback();let p;if(d instanceof Float32Array)p=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(d instanceof Int16Array)p=5122;else if(d instanceof Uint32Array)p=5125;else if(d instanceof Int32Array)p=5124;else if(d instanceof Int8Array)p=5120;else if(d instanceof Uint8Array)p=5121;else if(d instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,d){const f=u.array,g=u.updateRange;s.bindBuffer(d,l),g.count===-1?s.bufferSubData(d,0,f):(t?s.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):s.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,u)):d.version<l.version&&(r(d.buffer,l,u),d.version=l.version)}return{get:o,remove:a,update:c}}class Go extends _i{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=e/a,f=t/c,g=[],p=[],m=[],h=[];for(let x=0;x<u;x++){const E=x*f-o;for(let w=0;w<l;w++){const T=w*d-r;p.push(T,-E,0),m.push(0,0,1),h.push(w/a),h.push(1-x/c)}}for(let x=0;x<c;x++)for(let E=0;E<a;E++){const w=E+l*x,T=E+l*(x+1),R=E+1+l*(x+1),C=E+1+l*x;g.push(w,T,C),g.push(T,R,C)}this.setIndex(g),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(m,3)),this.setAttribute("uv",new Ln(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.widthSegments,e.heightSegments)}}var Eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Th=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dh="vec3 transformed = vec3( position );",Ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,kh=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,zh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,jh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,qh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,pp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,yp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,bp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Op=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Up=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,mm=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,gm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_m=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ym=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Im=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Gm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,qm=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,$m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,eg=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pt={alphamap_fragment:Eh,alphamap_pars_fragment:Ah,alphatest_fragment:Th,alphatest_pars_fragment:Ch,aomap_fragment:Ph,aomap_pars_fragment:Lh,begin_vertex:Dh,beginnormal_vertex:Ih,bsdfs:Rh,iridescence_fragment:kh,bumpmap_pars_fragment:zh,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:Nh,clipping_planes_pars_vertex:Fh,clipping_planes_vertex:Uh,color_fragment:Bh,color_pars_fragment:Vh,color_pars_vertex:Gh,color_vertex:Hh,common:Wh,cube_uv_reflection_fragment:jh,defaultnormal_vertex:qh,displacementmap_pars_vertex:Xh,displacementmap_vertex:$h,emissivemap_fragment:Kh,emissivemap_pars_fragment:Yh,encodings_fragment:Zh,encodings_pars_fragment:Jh,envmap_fragment:Qh,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:pp,envmap_vertex:ip,fog_vertex:rp,fog_pars_vertex:sp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_fragment:cp,lightmap_pars_fragment:up,lights_lambert_fragment:dp,lights_lambert_pars_fragment:fp,lights_pars_begin:hp,lights_toon_fragment:mp,lights_toon_pars_fragment:gp,lights_phong_fragment:_p,lights_phong_pars_fragment:vp,lights_physical_fragment:xp,lights_physical_pars_fragment:yp,lights_fragment_begin:bp,lights_fragment_maps:wp,lights_fragment_end:Sp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:Ap,logdepthbuf_vertex:Tp,map_fragment:Cp,map_pars_fragment:Pp,map_particle_fragment:Lp,map_particle_pars_fragment:Dp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Rp,morphcolor_vertex:kp,morphnormal_vertex:zp,morphtarget_pars_vertex:Op,morphtarget_vertex:Np,normal_fragment_begin:Fp,normal_fragment_maps:Up,normal_pars_fragment:Bp,normal_pars_vertex:Vp,normal_vertex:Gp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Xp,output_fragment:$p,packing:Kp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:Qp,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:sm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:fm,tonemapping_pars_fragment:hm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:vm,uv2_pars_fragment:xm,uv2_pars_vertex:ym,uv2_vertex:bm,worldpos_vertex:wm,background_vert:Sm,background_frag:Mm,backgroundCube_vert:Em,backgroundCube_frag:Am,cube_vert:Tm,cube_frag:Cm,depth_vert:Pm,depth_frag:Lm,distanceRGBA_vert:Dm,distanceRGBA_frag:Im,equirect_vert:Rm,equirect_frag:km,linedashed_vert:zm,linedashed_frag:Om,meshbasic_vert:Nm,meshbasic_frag:Fm,meshlambert_vert:Um,meshlambert_frag:Bm,meshmatcap_vert:Vm,meshmatcap_frag:Gm,meshnormal_vert:Hm,meshnormal_frag:Wm,meshphong_vert:jm,meshphong_frag:qm,meshphysical_vert:Xm,meshphysical_frag:$m,meshtoon_vert:Km,meshtoon_frag:Ym,points_vert:Zm,points_frag:Jm,shadow_vert:Qm,shadow_frag:eg,sprite_vert:tg,sprite_frag:ng},Re={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Mn},uv2Transform:{value:new Mn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mn}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mn}}},fi={basic:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:An([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:An([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:An([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:An([Re.points,Re.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:An([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:An([Re.common,Re.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:An([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:An([Re.sprite,Re.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:An([Re.common,Re.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:An([Re.lights,Re.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};fi.physical={uniforms:An([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const ea={r:0,b:0,g:0};function ig(s,e,t,n,i,r,o){const a=new Ae(0);let c=r===!0?0:1,l,u,d=null,f=0,g=null;function p(h,x){let E=!1,w=x.isScene===!0?x.background:null;w&&w.isTexture&&(w=(x.backgroundBlurriness>0?t:e).get(w));const T=s.xr,R=T.getSession&&T.getSession();R&&R.environmentBlendMode==="additive"&&(w=null),w===null?m(a,c):w&&w.isColor&&(m(w,1),E=!0),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===ha)?(u===void 0&&(u=new Yn(new ws(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Rr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,O,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=w.encoding!==kt,(d!==w||f!==w.version||g!==s.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,g=s.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Yn(new Go(2,2),new mi({name:"BackgroundMaterial",uniforms:Rr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=w.encoding!==kt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||g!==s.toneMapping)&&(l.material.needsUpdate=!0,d=w,f=w.version,g=s.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function m(h,x){h.getRGB(ea,Fu(s)),n.buffers.color.setClear(ea.r,ea.g,ea.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(h,x=1){a.set(h),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(h){c=h,m(a,c)},render:p}}function rg(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=h(null);let l=c,u=!1;function d(B,Z,K,ae,ee){let de=!1;if(o){const X=m(ae,K,Z);l!==X&&(l=X,g(l.object)),de=x(B,ae,K,ee),de&&E(B,ae,K,ee)}else{const X=Z.wireframe===!0;(l.geometry!==ae.id||l.program!==K.id||l.wireframe!==X)&&(l.geometry=ae.id,l.program=K.id,l.wireframe=X,de=!0)}ee!==null&&t.update(ee,34963),(de||u)&&(u=!1,v(B,Z,K,ae),ee!==null&&s.bindBuffer(34963,t.get(ee).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function g(B){return n.isWebGL2?s.bindVertexArray(B):r.bindVertexArrayOES(B)}function p(B){return n.isWebGL2?s.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function m(B,Z,K){const ae=K.wireframe===!0;let ee=a[B.id];ee===void 0&&(ee={},a[B.id]=ee);let de=ee[Z.id];de===void 0&&(de={},ee[Z.id]=de);let X=de[ae];return X===void 0&&(X=h(f()),de[ae]=X),X}function h(B){const Z=[],K=[],ae=[];for(let ee=0;ee<i;ee++)Z[ee]=0,K[ee]=0,ae[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:K,attributeDivisors:ae,object:B,attributes:{},index:null}}function x(B,Z,K,ae){const ee=l.attributes,de=Z.attributes;let X=0;const j=K.getAttributes();for(const W in j)if(j[W].location>=0){const Me=ee[W];let J=de[W];if(J===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),Me===void 0||Me.attribute!==J||J&&Me.data!==J.data)return!0;X++}return l.attributesNum!==X||l.index!==ae}function E(B,Z,K,ae){const ee={},de=Z.attributes;let X=0;const j=K.getAttributes();for(const W in j)if(j[W].location>=0){let Me=de[W];Me===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(Me=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(Me=B.instanceColor));const J={};J.attribute=Me,Me&&Me.data&&(J.data=Me.data),ee[W]=J,X++}l.attributes=ee,l.attributesNum=X,l.index=ae}function w(){const B=l.newAttributes;for(let Z=0,K=B.length;Z<K;Z++)B[Z]=0}function T(B){R(B,0)}function R(B,Z){const K=l.newAttributes,ae=l.enabledAttributes,ee=l.attributeDivisors;K[B]=1,ae[B]===0&&(s.enableVertexAttribArray(B),ae[B]=1),ee[B]!==Z&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Z),ee[B]=Z)}function C(){const B=l.newAttributes,Z=l.enabledAttributes;for(let K=0,ae=Z.length;K<ae;K++)Z[K]!==B[K]&&(s.disableVertexAttribArray(K),Z[K]=0)}function O(B,Z,K,ae,ee,de){n.isWebGL2===!0&&(K===5124||K===5125)?s.vertexAttribIPointer(B,Z,K,ee,de):s.vertexAttribPointer(B,Z,K,ae,ee,de)}function v(B,Z,K,ae){if(n.isWebGL2===!1&&(B.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const ee=ae.attributes,de=K.getAttributes(),X=Z.defaultAttributeValues;for(const j in de){const W=de[j];if(W.location>=0){let he=ee[j];if(he===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(he=B.instanceColor)),he!==void 0){const Me=he.normalized,J=he.itemSize,le=t.get(he);if(le===void 0)continue;const fe=le.buffer,ue=le.type,_=le.bytesPerElement;if(he.isInterleavedBufferAttribute){const b=he.data,D=b.stride,V=he.offset;if(b.isInstancedInterleavedBuffer){for(let $=0;$<W.locationSize;$++)R(W.location+$,b.meshPerAttribute);B.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let $=0;$<W.locationSize;$++)T(W.location+$);s.bindBuffer(34962,fe);for(let $=0;$<W.locationSize;$++)O(W.location+$,J/W.locationSize,ue,Me,D*_,(V+J/W.locationSize*$)*_)}else{if(he.isInstancedBufferAttribute){for(let b=0;b<W.locationSize;b++)R(W.location+b,he.meshPerAttribute);B.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let b=0;b<W.locationSize;b++)T(W.location+b);s.bindBuffer(34962,fe);for(let b=0;b<W.locationSize;b++)O(W.location+b,J/W.locationSize,ue,Me,J*_,J/W.locationSize*b*_)}}else if(X!==void 0){const Me=X[j];if(Me!==void 0)switch(Me.length){case 2:s.vertexAttrib2fv(W.location,Me);break;case 3:s.vertexAttrib3fv(W.location,Me);break;case 4:s.vertexAttrib4fv(W.location,Me);break;default:s.vertexAttrib1fv(W.location,Me)}}}}C()}function S(){F();for(const B in a){const Z=a[B];for(const K in Z){const ae=Z[K];for(const ee in ae)p(ae[ee].object),delete ae[ee];delete Z[K]}delete a[B]}}function y(B){if(a[B.id]===void 0)return;const Z=a[B.id];for(const K in Z){const ae=Z[K];for(const ee in ae)p(ae[ee].object),delete ae[ee];delete Z[K]}delete a[B.id]}function z(B){for(const Z in a){const K=a[Z];if(K[B.id]===void 0)continue;const ae=K[B.id];for(const ee in ae)p(ae[ee].object),delete ae[ee];delete K[B.id]}}function F(){H(),u=!0,l!==c&&(l=c,g(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:F,resetDefaultState:H,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:T,disableUnusedAttributes:C}}function sg(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,l,u,d),t.update(u,r,d)}this.setMode=o,this.render=a,this.renderInstances=c}function ag(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(O){if(O==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(34930),f=s.getParameter(35660),g=s.getParameter(3379),p=s.getParameter(34076),m=s.getParameter(34921),h=s.getParameter(36347),x=s.getParameter(36348),E=s.getParameter(36349),w=f>0,T=o||e.has("OES_texture_float"),R=w&&T,C=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:w,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:C}}function og(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Yi,a=new Mn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||n!==0||i;return i=f,n=d.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,g){const p=d.clippingPlanes,m=d.clipIntersection,h=d.clipShadows,x=s.get(d);if(!i||p===null||p.length===0||r&&!h)r?u(null):l();else{const E=r?0:n,w=E*4;let T=x.clippingState||null;c.value=T,T=u(p,f,w,g);for(let R=0;R!==w;++R)T[R]=t[R];x.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,g,p){const m=d!==null?d.length:0;let h=null;if(m!==0){if(h=c.value,p!==!0||h===null){const x=g+m*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(h===null||h.length<x)&&(h=new Float32Array(x));for(let w=0,T=g;w!==m;++w,T+=4)o.copy(d[w]).applyMatrix4(E,a),o.normal.toArray(h,T),h[T+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,h}}function lg(s){let e=new WeakMap;function t(o,a){return a===yo?o.mapping=Lr:a===bo&&(o.mapping=Dr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===yo||a===bo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new bh(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ho extends Bo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,ac=[.125,.215,.35,.446,.526,.582],Ji=20,to=new Ho,oc=new Ae;let no=null;const Zi=(1+Math.sqrt(5))/2,wr=1/Zi,lc=[new se(1,1,1),new se(-1,1,1),new se(1,1,-1),new se(-1,1,-1),new se(0,Zi,wr),new se(0,Zi,-wr),new se(wr,0,Zi),new se(-wr,0,Zi),new se(Zi,wr,0),new se(-Zi,wr,0)];class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){no=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(no),e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:_s,format:oi,encoding:Hi,depthBuffer:!1},i=uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cg(r)),this._blurMaterial=ug(r,e,t)}return i}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,i){const a=new Cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(oc),u.toneMapping=hi,u.autoClear=!1;const g=new Fo({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),p=new Yn(new ws,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(oc),m=!0);for(let x=0;x<6;x++){const E=x%3;E===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):E===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const w=this._cubeSize;ta(i,E*w,x>2?w:0,w,w),u.setRenderTarget(i),m&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Lr||e.mapping===Dr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ta(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,to)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=lc[(i-1)%lc.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Yn(this._lodPlanes[i],l),f=l.uniforms,g=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Ji-1),m=r/p,h=isFinite(r)?1+Math.floor(u*m):Ji;h>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ji}`);const x=[];let E=0;for(let O=0;O<Ji;++O){const v=O/m,S=Math.exp(-v*v/2);x.push(S),O===0?E+=S:O<h&&(E+=2*S)}for(let O=0;O<x.length;O++)x[O]=x[O]/E;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=p,f.mipInt.value=w-n;const T=this._sizeLods[i],R=3*T*(i>w-Er?i-w+Er:0),C=4*(this._cubeSize-T);ta(t,R,C,3*T,2*T),c.setRenderTarget(t),c.render(d,to)}}function cg(s){const e=[],t=[],n=[];let i=s;const r=s-Er+1+ac.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Er?c=ac[o-s+Er-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,p=6,m=3,h=2,x=1,E=new Float32Array(m*p*g),w=new Float32Array(h*p*g),T=new Float32Array(x*p*g);for(let C=0;C<g;C++){const O=C%3*2/3-1,v=C>2?0:-1,S=[O,v,0,O+2/3,v,0,O+2/3,v+1,0,O,v,0,O+2/3,v+1,0,O,v+1,0];E.set(S,m*p*C),w.set(f,h*p*C);const y=[C,C,C,C,C,C];T.set(y,x*p*C)}const R=new _i;R.setAttribute("position",new pi(E,m)),R.setAttribute("uv",new pi(w,h)),R.setAttribute("faceIndex",new pi(T,x)),e.push(R),i>Er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uc(s,e,t){const n=new Wi(s,e,t);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ug(s,e,t){const n=new Float32Array(Ji),i=new se(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function dc(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function fc(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function dg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===yo||c===bo,u=c===Lr||c===Dr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new cc(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new cc(s));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hg(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete i[f.id];const g=r.get(f);g&&(e.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)e.update(f[p],34962);const g=d.morphAttributes;for(const p in g){const m=g[p];for(let h=0,x=m.length;h<x;h++)e.update(m[h],34962)}}function l(d){const f=[],g=d.index,p=d.attributes.position;let m=0;if(g!==null){const E=g.array;m=g.version;for(let w=0,T=E.length;w<T;w+=3){const R=E[w+0],C=E[w+1],O=E[w+2];f.push(R,C,C,O,O,R)}}else{const E=p.array;m=p.version;for(let w=0,T=E.length/3-1;w<T;w+=3){const R=w+0,C=w+1,O=w+2;f.push(R,C,C,O,O,R)}}const h=new(Lu(f)?Nu:Ou)(f,1);h.version=m;const x=r.get(d);x&&e.remove(x),r.set(d,h)}function u(d){const f=r.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function pg(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,g){s.drawElements(r,g,a,f*c),t.update(g,r,1)}function d(f,g,p){if(p===0)return;let m,h;if(i)m=s,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](r,g,a,f*c,p),t.update(g,r,p)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function mg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gg(s,e){return s[0]-e[0]}function _g(s,e){return Math.abs(e[1])-Math.abs(s[1])}function vg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new en,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==p){let B=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",B)};m!==void 0&&m.texture.dispose();const E=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let v=0;E===!0&&(v=1),w===!0&&(v=2),T===!0&&(v=3);let S=u.attributes.position.count*v,y=1;S>e.maxTextureSize&&(y=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const z=new Float32Array(S*y*4*p),F=new Ru(z,S,y,p);F.type=er,F.needsUpdate=!0;const H=v*4;for(let Z=0;Z<p;Z++){const K=R[Z],ae=C[Z],ee=O[Z],de=S*y*4*Z;for(let X=0;X<K.count;X++){const j=X*H;E===!0&&(o.fromBufferAttribute(K,X),z[de+j+0]=o.x,z[de+j+1]=o.y,z[de+j+2]=o.z,z[de+j+3]=0),w===!0&&(o.fromBufferAttribute(ae,X),z[de+j+4]=o.x,z[de+j+5]=o.y,z[de+j+6]=o.z,z[de+j+7]=0),T===!0&&(o.fromBufferAttribute(ee,X),z[de+j+8]=o.x,z[de+j+9]=o.y,z[de+j+10]=o.z,z[de+j+11]=ee.itemSize===4?o.w:1)}}m={count:p,texture:F,size:new Qe(S,y)},r.set(u,m),u.addEventListener("dispose",B)}let h=0;for(let E=0;E<f.length;E++)h+=f[E];const x=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let w=0;w<g;w++)p[w]=[w,0];n[u.id]=p}for(let w=0;w<g;w++){const T=p[w];T[0]=w,T[1]=f[w]}p.sort(_g);for(let w=0;w<8;w++)w<g&&p[w][1]?(a[w][0]=p[w][0],a[w][1]=p[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(gg);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const T=a[w],R=T[0],C=T[1];R!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+w)!==m[R]&&u.setAttribute("morphTarget"+w,m[R]),h&&u.getAttribute("morphNormal"+w)!==h[R]&&u.setAttribute("morphNormal"+w,h[R]),i[w]=C,x+=C):(m&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),h&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),i[w]=0)}const E=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function xg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);return i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Vu=new li,Gu=new Ru,Hu=new ah,Wu=new Uu,hc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),_c=new Float32Array(4);function Br(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=hc[i];if(r===void 0&&(r=new Float32Array(i),hc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ma(s,e){let t=pc[e];t===void 0&&(t=new Int32Array(e),pc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function yg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function wg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function Mg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;_c.set(n),s.uniformMatrix2fv(this.addr,!1,_c),nn(t,n)}}function Eg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;gc.set(n),s.uniformMatrix3fv(this.addr,!1,gc),nn(t,n)}}function Ag(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;mc.set(n),s.uniformMatrix4fv(this.addr,!1,mc),nn(t,n)}}function Tg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function Pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function Lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function Dg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function Rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function zg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Vu,i)}function Og(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hu,i)}function Ng(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wu,i)}function Fg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gu,i)}function Ug(s){switch(s){case 5126:return yg;case 35664:return bg;case 35665:return wg;case 35666:return Sg;case 35674:return Mg;case 35675:return Eg;case 35676:return Ag;case 5124:case 35670:return Tg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ig;case 36295:return Rg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}function Bg(s,e){s.uniform1fv(this.addr,e)}function Vg(s,e){const t=Br(e,this.size,2);s.uniform2fv(this.addr,t)}function Gg(s,e){const t=Br(e,this.size,3);s.uniform3fv(this.addr,t)}function Hg(s,e){const t=Br(e,this.size,4);s.uniform4fv(this.addr,t)}function Wg(s,e){const t=Br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jg(s,e){const t=Br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qg(s,e){const t=Br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xg(s,e){s.uniform1iv(this.addr,e)}function $g(s,e){s.uniform2iv(this.addr,e)}function Kg(s,e){s.uniform3iv(this.addr,e)}function Yg(s,e){s.uniform4iv(this.addr,e)}function Zg(s,e){s.uniform1uiv(this.addr,e)}function Jg(s,e){s.uniform2uiv(this.addr,e)}function Qg(s,e){s.uniform3uiv(this.addr,e)}function e_(s,e){s.uniform4uiv(this.addr,e)}function t_(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Vu,r[o])}function n_(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Hu,r[o])}function i_(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Wu,r[o])}function r_(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Gu,r[o])}function s_(s){switch(s){case 5126:return Bg;case 35664:return Vg;case 35665:return Gg;case 35666:return Hg;case 35674:return Wg;case 35675:return jg;case 35676:return qg;case 5124:case 35670:return Xg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Yg;case 5125:return Zg;case 36294:return Jg;case 36295:return Qg;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return r_}}class a_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Ug(t.type)}}class o_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=s_(t.type)}}class l_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function vc(s,e){s.seq.push(e),s.map[e.id]=e}function c_(s,e,t){const n=s.name,i=n.length;for(io.lastIndex=0;;){const r=io.exec(n),o=io.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){vc(t,l===void 0?new a_(a,s,e):new o_(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new l_(a),vc(t,d)),t=d}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);c_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function xc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let u_=0;function d_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function f_(s){switch(s){case Hi:return["Linear","( value )"];case kt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function yc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+d_(s.getShaderSource(e),o)}else return i}function h_(s,e){const t=f_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function p_(s,e){let t;switch(e){case mf:t="Linear";break;case gf:t="Reinhard";break;case _f:t="OptimizedCineon";break;case Mu:t="ACESFilmic";break;case vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function m_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function g_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function __(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ds(s){return s!==""}function bc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(s){return s.replace(v_,x_)}function x_(s,e){const t=pt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ao(t)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(s){return s.replace(y_,b_)}function b_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cs&&(e="SHADOWMAP_TYPE_VSM"),e}function S_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Lr:case Dr:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function E_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fa:e="ENVMAP_BLENDING_MULTIPLY";break;case hf:e="ENVMAP_BLENDING_MIX";break;case pf:e="ENVMAP_BLENDING_ADD";break}return e}function A_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function T_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=w_(t),l=S_(t),u=M_(t),d=E_(t),f=A_(t),g=t.isWebGL2?"":m_(t),p=g_(r),m=i.createProgram();let h,x,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[p].filter(ds).join(`
`),h.length>0&&(h+=`
`),x=[g,p].filter(ds).join(`
`),x.length>0&&(x+=`
`)):(h=[Mc(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),x=[g,Mc(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?pt.tonemapping_pars_fragment:"",t.toneMapping!==hi?p_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.encodings_pars_fragment,h_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),o=Ao(o),o=bc(o,t),o=wc(o,t),a=Ao(a),a=bc(a,t),a=wc(a,t),o=Sc(o),a=Sc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["#define varying in",t.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=E+h+o,T=E+x+a,R=xc(i,35633,w),C=xc(i,35632,T);if(i.attachShader(m,R),i.attachShader(m,C),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(m).trim(),y=i.getShaderInfoLog(R).trim(),z=i.getShaderInfoLog(C).trim();let F=!0,H=!0;if(i.getProgramParameter(m,35714)===!1){F=!1;const B=yc(i,R,"vertex"),Z=yc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+B+`
`+Z)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(y===""||z==="")&&(H=!1);H&&(this.diagnostics={runnable:F,programLog:S,vertexShader:{log:y,prefix:h},fragmentShader:{log:z,prefix:x}})}i.deleteShader(R),i.deleteShader(C);let O;this.getUniforms=function(){return O===void 0&&(O=new ra(i,m)),O};let v;return this.getAttributes=function(){return v===void 0&&(v=__(i,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=u_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=C,this}let C_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new L_(e),t.set(e,n)),n}}class L_{constructor(e){this.id=C_++,this.code=e,this.usedTimes=0}}function D_(s,e,t,n,i,r,o){const a=new No,c=new P_,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,S,y,z,F){const H=z.fog,B=F.geometry,Z=v.isMeshStandardMaterial?z.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),ae=K&&K.mapping===ha?K.image.height:null,ee=p[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const de=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,X=de!==void 0?de.length:0;let j=0;B.morphAttributes.position!==void 0&&(j=1),B.morphAttributes.normal!==void 0&&(j=2),B.morphAttributes.color!==void 0&&(j=3);let W,he,Me,J;if(ee){const D=fi[ee];W=D.vertexShader,he=D.fragmentShader}else W=v.vertexShader,he=v.fragmentShader,c.update(v),Me=c.getVertexShaderID(v),J=c.getFragmentShaderID(v);const le=s.getRenderTarget(),fe=v.alphaTest>0,ue=v.clearcoat>0,_=v.iridescence>0;return{isWebGL2:u,shaderID:ee,shaderName:v.type,vertexShader:W,fragmentShader:he,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:f,outputEncoding:le===null?s.outputEncoding:le.isXRRenderTarget===!0?le.texture.encoding:Hi,map:!!v.map,matcap:!!v.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:ae,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Nf,tangentSpaceNormalMap:v.normalMapType===ys,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===kt,clearcoat:ue,clearcoatMap:ue&&!!v.clearcoatMap,clearcoatRoughnessMap:ue&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!v.clearcoatNormalMap,iridescence:_,iridescenceMap:_&&!!v.iridescenceMap,iridescenceThicknessMap:_&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Tr,alphaMap:!!v.alphaMap,alphaTest:fe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!B.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!H,useFog:v.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&y.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:hi,useLegacyLights:s.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ui,flipSided:v.side===Pn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function h(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const y in v.defines)S.push(y),S.push(v.defines[y]);return v.isRawShaderMaterial===!1&&(x(S,v),E(S,v),S.push(s.outputEncoding)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputEncoding),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.combine),v.push(S.vertexUvs),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),v.push(a.mask)}function w(v){const S=p[v.type];let y;if(S){const z=fi[S];y=Uo.clone(z.uniforms)}else y=v.uniforms;return y}function T(v,S){let y;for(let z=0,F=l.length;z<F;z++){const H=l[z];if(H.cacheKey===S){y=H,++y.usedTimes;break}}return y===void 0&&(y=new T_(s,S,v,r),l.push(y)),y}function R(v){if(--v.usedTimes===0){const S=l.indexOf(v);l[S]=l[l.length-1],l.pop(),v.destroy()}}function C(v){c.remove(v)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:w,acquireProgram:T,releaseProgram:R,releaseShaderCache:C,programs:l,dispose:O}}function I_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function R_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ec(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ac(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,g,p,m,h){let x=s[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,groupOrder:p,renderOrder:d.renderOrder,z:m,group:h},s[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.groupOrder=p,x.renderOrder=d.renderOrder,x.z=m,x.group=h),e++,x}function a(d,f,g,p,m,h){const x=o(d,f,g,p,m,h);g.transmission>0?n.push(x):g.transparent===!0?i.push(x):t.push(x)}function c(d,f,g,p,m,h){const x=o(d,f,g,p,m,h);g.transmission>0?n.unshift(x):g.transparent===!0?i.unshift(x):t.unshift(x)}function l(d,f){t.length>1&&t.sort(d||R_),n.length>1&&n.sort(f||Ec),i.length>1&&i.sort(f||Ec)}function u(){for(let d=e,f=s.length;d<f;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function k_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ac,s.set(n,[o])):i>=r.length?(o=new Ac,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function z_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new Ae};break;case"SpotLight":t={position:new se,direction:new se,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=t,t}}}function O_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let N_=0;function F_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function U_(s,e){const t=new z_,n=O_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new se);const r=new se,o=new $t,a=new $t;function c(u,d){let f=0,g=0,p=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,h=0,x=0,E=0,w=0,T=0,R=0,C=0,O=0,v=0;u.sort(F_);const S=d===!0?Math.PI:1;for(let z=0,F=u.length;z<F;z++){const H=u[z],B=H.color,Z=H.intensity,K=H.distance,ae=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=B.r*Z*S,g+=B.g*Z*S,p+=B.b*Z*S;else if(H.isLightProbe)for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(H.sh.coefficients[ee],Z);else if(H.isDirectionalLight){const ee=t.get(H);if(ee.color.copy(H.color).multiplyScalar(H.intensity*S),H.castShadow){const de=H.shadow,X=n.get(H);X.shadowBias=de.bias,X.shadowNormalBias=de.normalBias,X.shadowRadius=de.radius,X.shadowMapSize=de.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=ae,i.directionalShadowMatrix[m]=H.shadow.matrix,T++}i.directional[m]=ee,m++}else if(H.isSpotLight){const ee=t.get(H);ee.position.setFromMatrixPosition(H.matrixWorld),ee.color.copy(B).multiplyScalar(Z*S),ee.distance=K,ee.coneCos=Math.cos(H.angle),ee.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ee.decay=H.decay,i.spot[x]=ee;const de=H.shadow;if(H.map&&(i.spotLightMap[O]=H.map,O++,de.updateMatrices(H),H.castShadow&&v++),i.spotLightMatrix[x]=de.matrix,H.castShadow){const X=n.get(H);X.shadowBias=de.bias,X.shadowNormalBias=de.normalBias,X.shadowRadius=de.radius,X.shadowMapSize=de.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=ae,C++}x++}else if(H.isRectAreaLight){const ee=t.get(H);ee.color.copy(B).multiplyScalar(Z),ee.halfWidth.set(H.width*.5,0,0),ee.halfHeight.set(0,H.height*.5,0),i.rectArea[E]=ee,E++}else if(H.isPointLight){const ee=t.get(H);if(ee.color.copy(H.color).multiplyScalar(H.intensity*S),ee.distance=H.distance,ee.decay=H.decay,H.castShadow){const de=H.shadow,X=n.get(H);X.shadowBias=de.bias,X.shadowNormalBias=de.normalBias,X.shadowRadius=de.radius,X.shadowMapSize=de.mapSize,X.shadowCameraNear=de.camera.near,X.shadowCameraFar=de.camera.far,i.pointShadow[h]=X,i.pointShadowMap[h]=ae,i.pointShadowMatrix[h]=H.shadow.matrix,R++}i.point[h]=ee,h++}else if(H.isHemisphereLight){const ee=t.get(H);ee.skyColor.copy(H.color).multiplyScalar(Z*S),ee.groundColor.copy(H.groundColor).multiplyScalar(Z*S),i.hemi[w]=ee,w++}}E>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=g,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==m||y.pointLength!==h||y.spotLength!==x||y.rectAreaLength!==E||y.hemiLength!==w||y.numDirectionalShadows!==T||y.numPointShadows!==R||y.numSpotShadows!==C||y.numSpotMaps!==O)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=E,i.point.length=h,i.hemi.length=w,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=C+O-v,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=v,y.directionalLength=m,y.pointLength=h,y.spotLength=x,y.rectAreaLength=E,y.hemiLength=w,y.numDirectionalShadows=T,y.numPointShadows=R,y.numSpotShadows=C,y.numSpotMaps=O,i.version=N_++)}function l(u,d){let f=0,g=0,p=0,m=0,h=0;const x=d.matrixWorldInverse;for(let E=0,w=u.length;E<w;E++){const T=u[E];if(T.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(x),f++}else if(T.isSpotLight){const R=i.spot[p];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(x),p++}else if(T.isRectAreaLight){const R=i.rectArea[m];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(x),a.identity(),o.copy(T.matrixWorld),o.premultiply(x),a.extractRotation(o),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),m++}else if(T.isPointLight){const R=i.point[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(x),g++}else if(T.isHemisphereLight){const R=i.hemi[h];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(x),h++}}}return{setup:c,setupView:l,state:i}}function Tc(s,e){const t=new U_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function B_(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Tc(s,e),t.set(r,[c])):o>=a.length?(c=new Tc(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class V_ extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G_ extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new se,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
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
}`;function j_(s,e,t){let n=new Vo;const i=new Qe,r=new Qe,o=new en,a=new V_({depthPacking:Of}),c=new G_,l={},u=t.maxTextureSize,d={[Gi]:Pn,[Pn]:Gi,[Ui]:Ui},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:H_,fragmentShader:W_}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const p=new _i;p.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Yn(p,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu,this.render=function(T,R,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||T.length===0)return;const O=s.getRenderTarget(),v=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),y=s.state;y.setBlending(Vi),y.buffers.color.setClear(1,1,1,1),y.buffers.depth.setTest(!0),y.setScissorTest(!1);for(let z=0,F=T.length;z<F;z++){const H=T[z],B=H.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Z=B.getFrameExtents();if(i.multiply(Z),r.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,B.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,B.mapSize.y=r.y)),B.map===null){const ae=this.type!==cs?{minFilter:Tn,magFilter:Tn}:{};B.map=new Wi(i.x,i.y,ae),B.map.texture.name=H.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const K=B.getViewportCount();for(let ae=0;ae<K;ae++){const ee=B.getViewport(ae);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),y.viewport(o),B.updateMatrices(H,ae),n=B.getFrustum(),w(R,C,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===cs&&x(B,C),B.needsUpdate=!1}h.needsUpdate=!1,s.setRenderTarget(O,v,S)};function x(T,R){const C=e.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wi(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,C,f,m,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,C,g,m,null)}function E(T,R,C,O,v,S){let y=null;const z=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)y=z;else if(y=C.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=y.uuid,H=R.uuid;let B=l[F];B===void 0&&(B={},l[F]=B);let Z=B[H];Z===void 0&&(Z=y.clone(),B[H]=Z),y=Z}return y.visible=R.visible,y.wireframe=R.wireframe,S===cs?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0&&(y.referencePosition.setFromMatrixPosition(C.matrixWorld),y.nearDistance=O,y.farDistance=v),y}function w(T,R,C,O,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===cs)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const z=e.update(T),F=T.material;if(Array.isArray(F)){const H=z.groups;for(let B=0,Z=H.length;B<Z;B++){const K=H[B],ae=F[K.materialIndex];if(ae&&ae.visible){const ee=E(T,ae,O,C.near,C.far,v);s.renderBufferDirect(C,null,z,ee,T,K)}}}else if(F.visible){const H=E(T,F,O,C.near,C.far,v);s.renderBufferDirect(C,null,z,H,T,null)}}const y=T.children;for(let z=0,F=y.length;z<F;z++)w(y[z],R,C,O,v)}}function q_(s,e,t){const n=t.isWebGL2;function i(){let q=!1;const me=new en;let Ee=null;const Ve=new en(0,0,0,0);return{setMask:function(Ce){Ee!==Ce&&!q&&(s.colorMask(Ce,Ce,Ce,Ce),Ee=Ce)},setLocked:function(Ce){q=Ce},setClear:function(Ce,Ze,qt,on,kn){kn===!0&&(Ce*=on,Ze*=on,qt*=on),me.set(Ce,Ze,qt,on),Ve.equals(me)===!1&&(s.clearColor(Ce,Ze,qt,on),Ve.copy(me))},reset:function(){q=!1,Ee=null,Ve.set(-1,0,0,0)}}}function r(){let q=!1,me=null,Ee=null,Ve=null;return{setTest:function(Ce){Ce?fe(2929):ue(2929)},setMask:function(Ce){me!==Ce&&!q&&(s.depthMask(Ce),me=Ce)},setFunc:function(Ce){if(Ee!==Ce){switch(Ce){case af:s.depthFunc(512);break;case of:s.depthFunc(519);break;case lf:s.depthFunc(513);break;case xo:s.depthFunc(515);break;case cf:s.depthFunc(514);break;case uf:s.depthFunc(518);break;case df:s.depthFunc(516);break;case ff:s.depthFunc(517);break;default:s.depthFunc(515)}Ee=Ce}},setLocked:function(Ce){q=Ce},setClear:function(Ce){Ve!==Ce&&(s.clearDepth(Ce),Ve=Ce)},reset:function(){q=!1,me=null,Ee=null,Ve=null}}}function o(){let q=!1,me=null,Ee=null,Ve=null,Ce=null,Ze=null,qt=null,on=null,kn=null;return{setTest:function(Ut){q||(Ut?fe(2960):ue(2960))},setMask:function(Ut){me!==Ut&&!q&&(s.stencilMask(Ut),me=Ut)},setFunc:function(Ut,In,Hn){(Ee!==Ut||Ve!==In||Ce!==Hn)&&(s.stencilFunc(Ut,In,Hn),Ee=Ut,Ve=In,Ce=Hn)},setOp:function(Ut,In,Hn){(Ze!==Ut||qt!==In||on!==Hn)&&(s.stencilOp(Ut,In,Hn),Ze=Ut,qt=In,on=Hn)},setLocked:function(Ut){q=Ut},setClear:function(Ut){kn!==Ut&&(s.clearStencil(Ut),kn=Ut)},reset:function(){q=!1,me=null,Ee=null,Ve=null,Ce=null,Ze=null,qt=null,on=null,kn=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,d=new WeakMap;let f={},g={},p=new WeakMap,m=[],h=null,x=!1,E=null,w=null,T=null,R=null,C=null,O=null,v=null,S=!1,y=null,z=null,F=null,H=null,B=null;const Z=s.getParameter(35661);let K=!1,ae=0;const ee=s.getParameter(7938);ee.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=ae>=1):ee.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=ae>=2);let de=null,X={};const j=s.getParameter(3088),W=s.getParameter(2978),he=new en().fromArray(j),Me=new en().fromArray(W);function J(q,me,Ee){const Ve=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(q,Ce),s.texParameteri(q,10241,9728),s.texParameteri(q,10240,9728);for(let Ze=0;Ze<Ee;Ze++)s.texImage2D(me+Ze,0,6408,1,1,0,6408,5121,Ve);return Ce}const le={};le[3553]=J(3553,3553,1),le[34067]=J(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),fe(2929),c.setFunc(xo),De(!1),ke(gl),fe(2884),Y(Vi);function fe(q){f[q]!==!0&&(s.enable(q),f[q]=!0)}function ue(q){f[q]!==!1&&(s.disable(q),f[q]=!1)}function _(q,me){return g[q]!==me?(s.bindFramebuffer(q,me),g[q]=me,n&&(q===36009&&(g[36160]=me),q===36160&&(g[36009]=me)),!0):!1}function b(q,me){let Ee=m,Ve=!1;if(q)if(Ee=p.get(me),Ee===void 0&&(Ee=[],p.set(me,Ee)),q.isWebGLMultipleRenderTargets){const Ce=q.texture;if(Ee.length!==Ce.length||Ee[0]!==36064){for(let Ze=0,qt=Ce.length;Ze<qt;Ze++)Ee[Ze]=36064+Ze;Ee.length=Ce.length,Ve=!0}}else Ee[0]!==36064&&(Ee[0]=36064,Ve=!0);else Ee[0]!==1029&&(Ee[0]=1029,Ve=!0);Ve&&(t.isWebGL2?s.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function D(q){return h!==q?(s.useProgram(q),h=q,!0):!1}const V={[Mr]:32774,[$d]:32778,[Kd]:32779};if(n)V[yl]=32775,V[bl]=32776;else{const q=e.get("EXT_blend_minmax");q!==null&&(V[yl]=q.MIN_EXT,V[bl]=q.MAX_EXT)}const $={[Yd]:0,[Zd]:1,[Jd]:768,[wu]:770,[sf]:776,[nf]:774,[ef]:772,[Qd]:769,[Su]:771,[rf]:775,[tf]:773};function Y(q,me,Ee,Ve,Ce,Ze,qt,on){if(q===Vi){x===!0&&(ue(3042),x=!1);return}if(x===!1&&(fe(3042),x=!0),q!==Xd){if(q!==E||on!==S){if((w!==Mr||C!==Mr)&&(s.blendEquation(32774),w=Mr,C=Mr),on)switch(q){case Tr:s.blendFuncSeparate(1,771,1,771);break;case _l:s.blendFunc(1,1);break;case vl:s.blendFuncSeparate(0,769,0,1);break;case xl:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Tr:s.blendFuncSeparate(770,771,1,771);break;case _l:s.blendFunc(770,1);break;case vl:s.blendFuncSeparate(0,769,0,1);break;case xl:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}T=null,R=null,O=null,v=null,E=q,S=on}return}Ce=Ce||me,Ze=Ze||Ee,qt=qt||Ve,(me!==w||Ce!==C)&&(s.blendEquationSeparate(V[me],V[Ce]),w=me,C=Ce),(Ee!==T||Ve!==R||Ze!==O||qt!==v)&&(s.blendFuncSeparate($[Ee],$[Ve],$[Ze],$[qt]),T=Ee,R=Ve,O=Ze,v=qt),E=q,S=!1}function Se(q,me){q.side===Ui?ue(2884):fe(2884);let Ee=q.side===Pn;me&&(Ee=!Ee),De(Ee),q.blending===Tr&&q.transparent===!1?Y(Vi):Y(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),a.setMask(q.colorWrite);const Ve=q.stencilWrite;l.setTest(Ve),Ve&&(l.setMask(q.stencilWriteMask),l.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),l.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),te(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?fe(32926):ue(32926)}function De(q){y!==q&&(q?s.frontFace(2304):s.frontFace(2305),y=q)}function ke(q){q!==jd?(fe(2884),q!==z&&(q===gl?s.cullFace(1029):q===qd?s.cullFace(1028):s.cullFace(1032))):ue(2884),z=q}function Ie(q){q!==F&&(K&&s.lineWidth(q),F=q)}function te(q,me,Ee){q?(fe(32823),(H!==me||B!==Ee)&&(s.polygonOffset(me,Ee),H=me,B=Ee)):ue(32823)}function Ke(q){q?fe(3089):ue(3089)}function Oe(q){q===void 0&&(q=33984+Z-1),de!==q&&(s.activeTexture(q),de=q)}function I(q,me,Ee){Ee===void 0&&(de===null?Ee=33984+Z-1:Ee=de);let Ve=X[Ee];Ve===void 0&&(Ve={type:void 0,texture:void 0},X[Ee]=Ve),(Ve.type!==q||Ve.texture!==me)&&(de!==Ee&&(s.activeTexture(Ee),de=Ee),s.bindTexture(q,me||le[q]),Ve.type=q,Ve.texture=me)}function L(){const q=X[de];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function U(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Q(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Fe(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(q){he.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),he.copy(q))}function qe(q){Me.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Me.copy(q))}function mt(q,me){let Ee=d.get(me);Ee===void 0&&(Ee=new WeakMap,d.set(me,Ee));let Ve=Ee.get(q);Ve===void 0&&(Ve=s.getUniformBlockIndex(me,q.name),Ee.set(q,Ve))}function vt(q,me){const Ve=d.get(me).get(q);u.get(me)!==Ve&&(s.uniformBlockBinding(me,Ve,q.__bindingPointIndex),u.set(me,Ve))}function Tt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},de=null,X={},g={},p=new WeakMap,m=[],h=null,x=!1,E=null,w=null,T=null,R=null,C=null,O=null,v=null,S=!1,y=null,z=null,F=null,H=null,B=null,he.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:fe,disable:ue,bindFramebuffer:_,drawBuffers:b,useProgram:D,setBlending:Y,setMaterial:Se,setFlipSided:De,setCullFace:ke,setLineWidth:Ie,setPolygonOffset:te,setScissorTest:Ke,activeTexture:Oe,bindTexture:I,unbindTexture:L,compressedTexImage2D:pe,compressedTexImage3D:xe,texImage2D:Pe,texImage3D:Fe,updateUBOMapping:mt,uniformBlockBinding:vt,texStorage2D:Q,texStorage3D:ze,texSubImage2D:be,texSubImage3D:Te,compressedTexSubImage2D:Be,compressedTexSubImage3D:U,scissor:We,viewport:qe,reset:Tt}}function X_(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let m;const h=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,L){return x?new OffscreenCanvas(I,L):xs("canvas")}function w(I,L,pe,xe){let be=1;if((I.width>xe||I.height>xe)&&(be=xe/Math.max(I.width,I.height)),be<1||L===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const Te=L?Cu:Math.floor,Be=Te(be*I.width),U=Te(be*I.height);m===void 0&&(m=E(Be,U));const Q=pe?E(Be,U):m;return Q.width=Be,Q.height=U,Q.getContext("2d").drawImage(I,0,0,Be,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Be+"x"+U+")."),Q}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function T(I){return Eo(I.width)&&Eo(I.height)}function R(I){return a?!1:I.wrapS!==ai||I.wrapT!==ai||I.minFilter!==Tn&&I.minFilter!==Kn}function C(I,L){return I.generateMipmaps&&L&&I.minFilter!==Tn&&I.minFilter!==Kn}function O(I){s.generateMipmap(I)}function v(I,L,pe,xe,be=!1){if(a===!1)return L;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Te=L;return L===6403&&(pe===5126&&(Te=33326),pe===5131&&(Te=33325),pe===5121&&(Te=33321)),L===33319&&(pe===5126&&(Te=33328),pe===5131&&(Te=33327),pe===5121&&(Te=33323)),L===6408&&(pe===5126&&(Te=34836),pe===5131&&(Te=34842),pe===5121&&(Te=xe===kt&&be===!1?35907:32856),pe===32819&&(Te=32854),pe===32820&&(Te=32855)),(Te===33325||Te===33326||Te===33327||Te===33328||Te===34842||Te===34836)&&e.get("EXT_color_buffer_float"),Te}function S(I,L,pe){return C(I,pe)===!0||I.isFramebufferTexture&&I.minFilter!==Tn&&I.minFilter!==Kn?Math.log2(Math.max(L.width,L.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?L.mipmaps.length:1}function y(I){return I===Tn||I===wl||I===Pa?9728:9729}function z(I){const L=I.target;L.removeEventListener("dispose",z),H(L),L.isVideoTexture&&p.delete(L)}function F(I){const L=I.target;L.removeEventListener("dispose",F),Z(L)}function H(I){const L=n.get(I);if(L.__webglInit===void 0)return;const pe=I.source,xe=h.get(pe);if(xe){const be=xe[L.__cacheKey];be.usedTimes--,be.usedTimes===0&&B(I),Object.keys(xe).length===0&&h.delete(pe)}n.remove(I)}function B(I){const L=n.get(I);s.deleteTexture(L.__webglTexture);const pe=I.source,xe=h.get(pe);delete xe[L.__cacheKey],o.memory.textures--}function Z(I){const L=I.texture,pe=n.get(I),xe=n.get(L);if(xe.__webglTexture!==void 0&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let be=0;be<6;be++)s.deleteFramebuffer(pe.__webglFramebuffer[be]),pe.__webglDepthbuffer&&s.deleteRenderbuffer(pe.__webglDepthbuffer[be]);else{if(s.deleteFramebuffer(pe.__webglFramebuffer),pe.__webglDepthbuffer&&s.deleteRenderbuffer(pe.__webglDepthbuffer),pe.__webglMultisampledFramebuffer&&s.deleteFramebuffer(pe.__webglMultisampledFramebuffer),pe.__webglColorRenderbuffer)for(let be=0;be<pe.__webglColorRenderbuffer.length;be++)pe.__webglColorRenderbuffer[be]&&s.deleteRenderbuffer(pe.__webglColorRenderbuffer[be]);pe.__webglDepthRenderbuffer&&s.deleteRenderbuffer(pe.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let be=0,Te=L.length;be<Te;be++){const Be=n.get(L[be]);Be.__webglTexture&&(s.deleteTexture(Be.__webglTexture),o.memory.textures--),n.remove(L[be])}n.remove(L),n.remove(I)}let K=0;function ae(){K=0}function ee(){const I=K;return I>=c&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+c),K+=1,I}function de(I){const L=[];return L.push(I.wrapS),L.push(I.wrapT),L.push(I.wrapR||0),L.push(I.magFilter),L.push(I.minFilter),L.push(I.anisotropy),L.push(I.internalFormat),L.push(I.format),L.push(I.type),L.push(I.generateMipmaps),L.push(I.premultiplyAlpha),L.push(I.flipY),L.push(I.unpackAlignment),L.push(I.encoding),L.join()}function X(I,L){const pe=n.get(I);if(I.isVideoTexture&&Ke(I),I.isRenderTargetTexture===!1&&I.version>0&&pe.__version!==I.version){const xe=I.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(pe,I,L);return}}t.bindTexture(3553,pe.__webglTexture,33984+L)}function j(I,L){const pe=n.get(I);if(I.version>0&&pe.__version!==I.version){ue(pe,I,L);return}t.bindTexture(35866,pe.__webglTexture,33984+L)}function W(I,L){const pe=n.get(I);if(I.version>0&&pe.__version!==I.version){ue(pe,I,L);return}t.bindTexture(32879,pe.__webglTexture,33984+L)}function he(I,L){const pe=n.get(I);if(I.version>0&&pe.__version!==I.version){_(pe,I,L);return}t.bindTexture(34067,pe.__webglTexture,33984+L)}const Me={[wo]:10497,[ai]:33071,[So]:33648},J={[Tn]:9728,[wl]:9984,[Pa]:9986,[Kn]:9729,[xf]:9985,[gs]:9987};function le(I,L,pe){if(pe?(s.texParameteri(I,10242,Me[L.wrapS]),s.texParameteri(I,10243,Me[L.wrapT]),(I===32879||I===35866)&&s.texParameteri(I,32882,Me[L.wrapR]),s.texParameteri(I,10240,J[L.magFilter]),s.texParameteri(I,10241,J[L.minFilter])):(s.texParameteri(I,10242,33071),s.texParameteri(I,10243,33071),(I===32879||I===35866)&&s.texParameteri(I,32882,33071),(L.wrapS!==ai||L.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,10240,y(L.magFilter)),s.texParameteri(I,10241,y(L.minFilter)),L.minFilter!==Tn&&L.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const xe=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===Tn||L.minFilter!==Pa&&L.minFilter!==gs||L.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&L.type===_s&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(s.texParameterf(I,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function fe(I,L){let pe=!1;I.__webglInit===void 0&&(I.__webglInit=!0,L.addEventListener("dispose",z));const xe=L.source;let be=h.get(xe);be===void 0&&(be={},h.set(xe,be));const Te=de(L);if(Te!==I.__cacheKey){be[Te]===void 0&&(be[Te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,pe=!0),be[Te].usedTimes++;const Be=be[I.__cacheKey];Be!==void 0&&(be[I.__cacheKey].usedTimes--,Be.usedTimes===0&&B(L)),I.__cacheKey=Te,I.__webglTexture=be[Te].texture}return pe}function ue(I,L,pe){let xe=3553;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(xe=35866),L.isData3DTexture&&(xe=32879);const be=fe(I,L),Te=L.source;t.bindTexture(xe,I.__webglTexture,33984+pe);const Be=n.get(Te);if(Te.version!==Be.__version||be===!0){t.activeTexture(33984+pe),s.pixelStorei(37440,L.flipY),s.pixelStorei(37441,L.premultiplyAlpha),s.pixelStorei(3317,L.unpackAlignment),s.pixelStorei(37443,0);const U=R(L)&&T(L.image)===!1;let Q=w(L.image,U,!1,u);Q=Oe(L,Q);const ze=T(Q)||a,Pe=r.convert(L.format,L.encoding);let Fe=r.convert(L.type),We=v(L.internalFormat,Pe,Fe,L.encoding,L.isVideoTexture);le(xe,L,ze);let qe;const mt=L.mipmaps,vt=a&&L.isVideoTexture!==!0,Tt=Be.__version===void 0||be===!0,q=S(L,Q,ze);if(L.isDepthTexture)We=6402,a?L.type===er?We=36012:L.type===Qi?We=33190:L.type===Cr?We=35056:We=33189:L.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===tr&&We===6402&&L.type!==Au&&L.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Qi,Fe=r.convert(L.type)),L.format===Ir&&We===6402&&(We=34041,L.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Cr,Fe=r.convert(L.type))),Tt&&(vt?t.texStorage2D(3553,1,We,Q.width,Q.height):t.texImage2D(3553,0,We,Q.width,Q.height,0,Pe,Fe,null));else if(L.isDataTexture)if(mt.length>0&&ze){vt&&Tt&&t.texStorage2D(3553,q,We,mt[0].width,mt[0].height);for(let me=0,Ee=mt.length;me<Ee;me++)qe=mt[me],vt?t.texSubImage2D(3553,me,0,0,qe.width,qe.height,Pe,Fe,qe.data):t.texImage2D(3553,me,We,qe.width,qe.height,0,Pe,Fe,qe.data);L.generateMipmaps=!1}else vt?(Tt&&t.texStorage2D(3553,q,We,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Q.width,Q.height,Pe,Fe,Q.data)):t.texImage2D(3553,0,We,Q.width,Q.height,0,Pe,Fe,Q.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){vt&&Tt&&t.texStorage3D(35866,q,We,mt[0].width,mt[0].height,Q.depth);for(let me=0,Ee=mt.length;me<Ee;me++)qe=mt[me],L.format!==oi?Pe!==null?vt?t.compressedTexSubImage3D(35866,me,0,0,0,qe.width,qe.height,Q.depth,Pe,qe.data,0,0):t.compressedTexImage3D(35866,me,We,qe.width,qe.height,Q.depth,0,qe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?t.texSubImage3D(35866,me,0,0,0,qe.width,qe.height,Q.depth,Pe,Fe,qe.data):t.texImage3D(35866,me,We,qe.width,qe.height,Q.depth,0,Pe,Fe,qe.data)}else{vt&&Tt&&t.texStorage2D(3553,q,We,mt[0].width,mt[0].height);for(let me=0,Ee=mt.length;me<Ee;me++)qe=mt[me],L.format!==oi?Pe!==null?vt?t.compressedTexSubImage2D(3553,me,0,0,qe.width,qe.height,Pe,qe.data):t.compressedTexImage2D(3553,me,We,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?t.texSubImage2D(3553,me,0,0,qe.width,qe.height,Pe,Fe,qe.data):t.texImage2D(3553,me,We,qe.width,qe.height,0,Pe,Fe,qe.data)}else if(L.isDataArrayTexture)vt?(Tt&&t.texStorage3D(35866,q,We,Q.width,Q.height,Q.depth),t.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,Pe,Fe,Q.data)):t.texImage3D(35866,0,We,Q.width,Q.height,Q.depth,0,Pe,Fe,Q.data);else if(L.isData3DTexture)vt?(Tt&&t.texStorage3D(32879,q,We,Q.width,Q.height,Q.depth),t.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,Pe,Fe,Q.data)):t.texImage3D(32879,0,We,Q.width,Q.height,Q.depth,0,Pe,Fe,Q.data);else if(L.isFramebufferTexture){if(Tt)if(vt)t.texStorage2D(3553,q,We,Q.width,Q.height);else{let me=Q.width,Ee=Q.height;for(let Ve=0;Ve<q;Ve++)t.texImage2D(3553,Ve,We,me,Ee,0,Pe,Fe,null),me>>=1,Ee>>=1}}else if(mt.length>0&&ze){vt&&Tt&&t.texStorage2D(3553,q,We,mt[0].width,mt[0].height);for(let me=0,Ee=mt.length;me<Ee;me++)qe=mt[me],vt?t.texSubImage2D(3553,me,0,0,Pe,Fe,qe):t.texImage2D(3553,me,We,Pe,Fe,qe);L.generateMipmaps=!1}else vt?(Tt&&t.texStorage2D(3553,q,We,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Pe,Fe,Q)):t.texImage2D(3553,0,We,Pe,Fe,Q);C(L,ze)&&O(xe),Be.__version=Te.version,L.onUpdate&&L.onUpdate(L)}I.__version=L.version}function _(I,L,pe){if(L.image.length!==6)return;const xe=fe(I,L),be=L.source;t.bindTexture(34067,I.__webglTexture,33984+pe);const Te=n.get(be);if(be.version!==Te.__version||xe===!0){t.activeTexture(33984+pe),s.pixelStorei(37440,L.flipY),s.pixelStorei(37441,L.premultiplyAlpha),s.pixelStorei(3317,L.unpackAlignment),s.pixelStorei(37443,0);const Be=L.isCompressedTexture||L.image[0].isCompressedTexture,U=L.image[0]&&L.image[0].isDataTexture,Q=[];for(let me=0;me<6;me++)!Be&&!U?Q[me]=w(L.image[me],!1,!0,l):Q[me]=U?L.image[me].image:L.image[me],Q[me]=Oe(L,Q[me]);const ze=Q[0],Pe=T(ze)||a,Fe=r.convert(L.format,L.encoding),We=r.convert(L.type),qe=v(L.internalFormat,Fe,We,L.encoding),mt=a&&L.isVideoTexture!==!0,vt=Te.__version===void 0||xe===!0;let Tt=S(L,ze,Pe);le(34067,L,Pe);let q;if(Be){mt&&vt&&t.texStorage2D(34067,Tt,qe,ze.width,ze.height);for(let me=0;me<6;me++){q=Q[me].mipmaps;for(let Ee=0;Ee<q.length;Ee++){const Ve=q[Ee];L.format!==oi?Fe!==null?mt?t.compressedTexSubImage2D(34069+me,Ee,0,0,Ve.width,Ve.height,Fe,Ve.data):t.compressedTexImage2D(34069+me,Ee,qe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?t.texSubImage2D(34069+me,Ee,0,0,Ve.width,Ve.height,Fe,We,Ve.data):t.texImage2D(34069+me,Ee,qe,Ve.width,Ve.height,0,Fe,We,Ve.data)}}}else{q=L.mipmaps,mt&&vt&&(q.length>0&&Tt++,t.texStorage2D(34067,Tt,qe,Q[0].width,Q[0].height));for(let me=0;me<6;me++)if(U){mt?t.texSubImage2D(34069+me,0,0,0,Q[me].width,Q[me].height,Fe,We,Q[me].data):t.texImage2D(34069+me,0,qe,Q[me].width,Q[me].height,0,Fe,We,Q[me].data);for(let Ee=0;Ee<q.length;Ee++){const Ce=q[Ee].image[me].image;mt?t.texSubImage2D(34069+me,Ee+1,0,0,Ce.width,Ce.height,Fe,We,Ce.data):t.texImage2D(34069+me,Ee+1,qe,Ce.width,Ce.height,0,Fe,We,Ce.data)}}else{mt?t.texSubImage2D(34069+me,0,0,0,Fe,We,Q[me]):t.texImage2D(34069+me,0,qe,Fe,We,Q[me]);for(let Ee=0;Ee<q.length;Ee++){const Ve=q[Ee];mt?t.texSubImage2D(34069+me,Ee+1,0,0,Fe,We,Ve.image[me]):t.texImage2D(34069+me,Ee+1,qe,Fe,We,Ve.image[me])}}}C(L,Pe)&&O(34067),Te.__version=be.version,L.onUpdate&&L.onUpdate(L)}I.__version=L.version}function b(I,L,pe,xe,be){const Te=r.convert(pe.format,pe.encoding),Be=r.convert(pe.type),U=v(pe.internalFormat,Te,Be,pe.encoding);n.get(L).__hasExternalTextures||(be===32879||be===35866?t.texImage3D(be,0,U,L.width,L.height,L.depth,0,Te,Be,null):t.texImage2D(be,0,U,L.width,L.height,0,Te,Be,null)),t.bindFramebuffer(36160,I),te(L)?f.framebufferTexture2DMultisampleEXT(36160,xe,be,n.get(pe).__webglTexture,0,Ie(L)):(be===3553||be>=34069&&be<=34074)&&s.framebufferTexture2D(36160,xe,be,n.get(pe).__webglTexture,0),t.bindFramebuffer(36160,null)}function D(I,L,pe){if(s.bindRenderbuffer(36161,I),L.depthBuffer&&!L.stencilBuffer){let xe=33189;if(pe||te(L)){const be=L.depthTexture;be&&be.isDepthTexture&&(be.type===er?xe=36012:be.type===Qi&&(xe=33190));const Te=Ie(L);te(L)?f.renderbufferStorageMultisampleEXT(36161,Te,xe,L.width,L.height):s.renderbufferStorageMultisample(36161,Te,xe,L.width,L.height)}else s.renderbufferStorage(36161,xe,L.width,L.height);s.framebufferRenderbuffer(36160,36096,36161,I)}else if(L.depthBuffer&&L.stencilBuffer){const xe=Ie(L);pe&&te(L)===!1?s.renderbufferStorageMultisample(36161,xe,35056,L.width,L.height):te(L)?f.renderbufferStorageMultisampleEXT(36161,xe,35056,L.width,L.height):s.renderbufferStorage(36161,34041,L.width,L.height),s.framebufferRenderbuffer(36160,33306,36161,I)}else{const xe=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let be=0;be<xe.length;be++){const Te=xe[be],Be=r.convert(Te.format,Te.encoding),U=r.convert(Te.type),Q=v(Te.internalFormat,Be,U,Te.encoding),ze=Ie(L);pe&&te(L)===!1?s.renderbufferStorageMultisample(36161,ze,Q,L.width,L.height):te(L)?f.renderbufferStorageMultisampleEXT(36161,ze,Q,L.width,L.height):s.renderbufferStorage(36161,Q,L.width,L.height)}}s.bindRenderbuffer(36161,null)}function V(I,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),X(L.depthTexture,0);const xe=n.get(L.depthTexture).__webglTexture,be=Ie(L);if(L.depthTexture.format===tr)te(L)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,xe,0,be):s.framebufferTexture2D(36160,36096,3553,xe,0);else if(L.depthTexture.format===Ir)te(L)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,xe,0,be):s.framebufferTexture2D(36160,33306,3553,xe,0);else throw new Error("Unknown depthTexture format")}function $(I){const L=n.get(I),pe=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!L.__autoAllocateDepthBuffer){if(pe)throw new Error("target.depthTexture not supported in Cube render targets");V(L.__webglFramebuffer,I)}else if(pe){L.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(36160,L.__webglFramebuffer[xe]),L.__webglDepthbuffer[xe]=s.createRenderbuffer(),D(L.__webglDepthbuffer[xe],I,!1)}else t.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=s.createRenderbuffer(),D(L.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function Y(I,L,pe){const xe=n.get(I);L!==void 0&&b(xe.__webglFramebuffer,I,I.texture,36064,3553),pe!==void 0&&$(I)}function Se(I){const L=I.texture,pe=n.get(I),xe=n.get(L);I.addEventListener("dispose",F),I.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=L.version,o.memory.textures++);const be=I.isWebGLCubeRenderTarget===!0,Te=I.isWebGLMultipleRenderTargets===!0,Be=T(I)||a;if(be){pe.__webglFramebuffer=[];for(let U=0;U<6;U++)pe.__webglFramebuffer[U]=s.createFramebuffer()}else{if(pe.__webglFramebuffer=s.createFramebuffer(),Te)if(i.drawBuffers){const U=I.texture;for(let Q=0,ze=U.length;Q<ze;Q++){const Pe=n.get(U[Q]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&te(I)===!1){const U=Te?L:[L];pe.__webglMultisampledFramebuffer=s.createFramebuffer(),pe.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer);for(let Q=0;Q<U.length;Q++){const ze=U[Q];pe.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(36161,pe.__webglColorRenderbuffer[Q]);const Pe=r.convert(ze.format,ze.encoding),Fe=r.convert(ze.type),We=v(ze.internalFormat,Pe,Fe,ze.encoding,I.isXRRenderTarget===!0),qe=Ie(I);s.renderbufferStorageMultisample(36161,qe,We,I.width,I.height),s.framebufferRenderbuffer(36160,36064+Q,36161,pe.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(36161,null),I.depthBuffer&&(pe.__webglDepthRenderbuffer=s.createRenderbuffer(),D(pe.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}}if(be){t.bindTexture(34067,xe.__webglTexture),le(34067,L,Be);for(let U=0;U<6;U++)b(pe.__webglFramebuffer[U],I,L,36064,34069+U);C(L,Be)&&O(34067),t.unbindTexture()}else if(Te){const U=I.texture;for(let Q=0,ze=U.length;Q<ze;Q++){const Pe=U[Q],Fe=n.get(Pe);t.bindTexture(3553,Fe.__webglTexture),le(3553,Pe,Be),b(pe.__webglFramebuffer,I,Pe,36064+Q,3553),C(Pe,Be)&&O(3553)}t.unbindTexture()}else{let U=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?U=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,xe.__webglTexture),le(U,L,Be),b(pe.__webglFramebuffer,I,L,36064,U),C(L,Be)&&O(U),t.unbindTexture()}I.depthBuffer&&$(I)}function De(I){const L=T(I)||a,pe=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let xe=0,be=pe.length;xe<be;xe++){const Te=pe[xe];if(C(Te,L)){const Be=I.isWebGLCubeRenderTarget?34067:3553,U=n.get(Te).__webglTexture;t.bindTexture(Be,U),O(Be),t.unbindTexture()}}}function ke(I){if(a&&I.samples>0&&te(I)===!1){const L=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],pe=I.width,xe=I.height;let be=16384;const Te=[],Be=I.stencilBuffer?33306:36096,U=n.get(I),Q=I.isWebGLMultipleRenderTargets===!0;if(Q)for(let ze=0;ze<L.length;ze++)t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ze,36161,null),t.bindFramebuffer(36160,U.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ze,3553,null,0);t.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,U.__webglFramebuffer);for(let ze=0;ze<L.length;ze++){Te.push(36064+ze),I.depthBuffer&&Te.push(Be);const Pe=U.__ignoreDepthValues!==void 0?U.__ignoreDepthValues:!1;if(Pe===!1&&(I.depthBuffer&&(be|=256),I.stencilBuffer&&(be|=1024)),Q&&s.framebufferRenderbuffer(36008,36064,36161,U.__webglColorRenderbuffer[ze]),Pe===!0&&(s.invalidateFramebuffer(36008,[Be]),s.invalidateFramebuffer(36009,[Be])),Q){const Fe=n.get(L[ze]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,Fe,0)}s.blitFramebuffer(0,0,pe,xe,0,0,pe,xe,be,9728),g&&s.invalidateFramebuffer(36008,Te)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Q)for(let ze=0;ze<L.length;ze++){t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ze,36161,U.__webglColorRenderbuffer[ze]);const Pe=n.get(L[ze]).__webglTexture;t.bindFramebuffer(36160,U.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ze,3553,Pe,0)}t.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}}function Ie(I){return Math.min(d,I.samples)}function te(I){const L=n.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Ke(I){const L=o.render.frame;p.get(I)!==L&&(p.set(I,L),I.update())}function Oe(I,L){const pe=I.encoding,xe=I.format,be=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Mo||pe!==Hi&&(pe===kt?a===!1?e.has("EXT_sRGB")===!0&&xe===oi?(I.format=Mo,I.minFilter=Kn,I.generateMipmaps=!1):L=Du.sRGBToLinear(L):(xe!==oi||be!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",pe)),L}this.allocateTextureUnit=ee,this.resetTextureUnits=ae,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=he,this.rebindTextures=Y,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=b,this.useMultisampledRTT=te}function $_(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===ir)return 5121;if(r===Sf)return 32819;if(r===Mf)return 32820;if(r===yf)return 5120;if(r===bf)return 5122;if(r===Au)return 5123;if(r===wf)return 5124;if(r===Qi)return 5125;if(r===er)return 5126;if(r===_s)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ef)return 6406;if(r===oi)return 6408;if(r===Af)return 6409;if(r===Tf)return 6410;if(r===tr)return 6402;if(r===Ir)return 34041;if(r===Mo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Cf)return 6403;if(r===Pf)return 36244;if(r===Lf)return 33319;if(r===Df)return 33320;if(r===If)return 36249;if(r===La||r===Da||r===Ia||r===Ra)if(o===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===La)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===La)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ia)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sl||r===Ml||r===El||r===Al)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Sl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ml)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===El)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tl||r===Cl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Tl)return o===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Cl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pl||r===Ll||r===Dl||r===Il||r===Rl||r===kl||r===zl||r===Ol||r===Nl||r===Fl||r===Ul||r===Bl||r===Vl||r===Gl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Pl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ll)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Il)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ol)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ul)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gl)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ka)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ka)return o===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===kf||r===Hl||r===Wl||r===jl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ka)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Hl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class K_ extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ar extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y_={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const m of e.hand.values()){const h=t.getJointPose(m,n),x=this._getHandJoint(l,m);h!==null&&(x.matrix.fromArray(h.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=h.radius),x.visible=h!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),g=.02,p=.005;l.inputState.pinching&&f>g+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=g-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ar;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Z_ extends li{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:tr,u!==tr&&u!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===tr&&(n=Qi),n===void 0&&u===Ir&&(n=Cr),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1}}class J_ extends sr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,g=null,p=null;const m=t.getContextAttributes();let h=null,x=null;const E=[],w=[],T=new Set,R=new Map,C=new Cn;C.layers.enable(1),C.viewport=new en;const O=new Cn;O.layers.enable(2),O.viewport=new en;const v=[C,O],S=new K_;S.layers.enable(1),S.layers.enable(2);let y=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let he=E[W];return he===void 0&&(he=new ro,E[W]=he),he.getTargetRaySpace()},this.getControllerGrip=function(W){let he=E[W];return he===void 0&&(he=new ro,E[W]=he),he.getGripSpace()},this.getHand=function(W){let he=E[W];return he===void 0&&(he=new ro,E[W]=he),he.getHandSpace()};function F(W){const he=w.indexOf(W.inputSource);if(he===-1)return;const Me=E[he];Me!==void 0&&Me.dispatchEvent({type:W.type,data:W.inputSource})}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",B);for(let W=0;W<E.length;W++){const he=w[W];he!==null&&(w[W]=null,E[W].disconnect(he))}y=null,z=null,e.setRenderTarget(h),g=null,f=null,d=null,i=null,x=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const he={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:g}),x=new Wi(g.framebufferWidth,g.framebufferHeight,{format:oi,type:ir,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let he=null,Me=null,J=null;m.depth&&(J=m.stencil?35056:33190,he=m.stencil?Ir:tr,Me=m.stencil?Cr:Qi);const le={colorFormat:32856,depthFormat:J,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(le),i.updateRenderState({layers:[f]}),x=new Wi(f.textureWidth,f.textureHeight,{format:oi,type:ir,depthTexture:new Z_(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const fe=e.properties.get(x);fe.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function B(W){for(let he=0;he<W.removed.length;he++){const Me=W.removed[he],J=w.indexOf(Me);J>=0&&(w[J]=null,E[J].disconnect(Me))}for(let he=0;he<W.added.length;he++){const Me=W.added[he];let J=w.indexOf(Me);if(J===-1){for(let fe=0;fe<E.length;fe++)if(fe>=w.length){w.push(Me),J=fe;break}else if(w[fe]===null){w[fe]=Me,J=fe;break}if(J===-1)break}const le=E[J];le&&le.connect(Me)}}const Z=new se,K=new se;function ae(W,he,Me){Z.setFromMatrixPosition(he.matrixWorld),K.setFromMatrixPosition(Me.matrixWorld);const J=Z.distanceTo(K),le=he.projectionMatrix.elements,fe=Me.projectionMatrix.elements,ue=le[14]/(le[10]-1),_=le[14]/(le[10]+1),b=(le[9]+1)/le[5],D=(le[9]-1)/le[5],V=(le[8]-1)/le[0],$=(fe[8]+1)/fe[0],Y=ue*V,Se=ue*$,De=J/(-V+$),ke=De*-V;he.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ke),W.translateZ(De),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Ie=ue+De,te=_+De,Ke=Y-ke,Oe=Se+(J-ke),I=b*_/te*Ie,L=D*_/te*Ie;W.projectionMatrix.makePerspective(Ke,Oe,I,L,Ie,te)}function ee(W,he){he===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(he.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;S.near=O.near=C.near=W.near,S.far=O.far=C.far=W.far,(y!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),y=S.near,z=S.far);const he=W.parent,Me=S.cameras;ee(S,he);for(let le=0;le<Me.length;le++)ee(Me[le],he);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),W.matrix.copy(S.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const J=W.children;for(let le=0,fe=J.length;le<fe;le++)J[le].updateMatrixWorld(!0);Me.length===2?ae(S,C,O):S.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)},this.getPlanes=function(){return T};let de=null;function X(W,he){if(u=he.getViewerPose(l||o),p=he,u!==null){const Me=u.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let J=!1;Me.length!==S.cameras.length&&(S.cameras.length=0,J=!0);for(let le=0;le<Me.length;le++){const fe=Me[le];let ue=null;if(g!==null)ue=g.getViewport(fe);else{const b=d.getViewSubImage(f,fe);ue=b.viewport,le===0&&(e.setRenderTargetTextures(x,b.colorTexture,f.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(x))}let _=v[le];_===void 0&&(_=new Cn,_.layers.enable(le),_.viewport=new en,v[le]=_),_.matrix.fromArray(fe.transform.matrix),_.projectionMatrix.fromArray(fe.projectionMatrix),_.viewport.set(ue.x,ue.y,ue.width,ue.height),le===0&&S.matrix.copy(_.matrix),J===!0&&S.cameras.push(_)}}for(let Me=0;Me<E.length;Me++){const J=w[Me],le=E[Me];J!==null&&le!==void 0&&le.update(J,he,l||o)}if(de&&de(W,he),he.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:he.detectedPlanes});let Me=null;for(const J of T)he.detectedPlanes.has(J)||(Me===null&&(Me=[]),Me.push(J));if(Me!==null)for(const J of Me)T.delete(J),R.delete(J),n.dispatchEvent({type:"planeremoved",data:J});for(const J of he.detectedPlanes)if(!T.has(J))T.add(J),R.set(J,he.lastChangedTime),n.dispatchEvent({type:"planeadded",data:J});else{const le=R.get(J);J.lastChangedTime>le&&(R.set(J,J.lastChangedTime),n.dispatchEvent({type:"planechanged",data:J}))}}p=null}const j=new Bu;j.setAnimationLoop(X),this.setAnimationLoop=function(W){de=W},this.dispose=function(){}}}function Q_(s,e){function t(m,h){h.color.getRGB(m.fogColor.value,Fu(s)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function n(m,h,x,E,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(m,h):h.isMeshToonMaterial?(i(m,h),u(m,h)):h.isMeshPhongMaterial?(i(m,h),l(m,h)):h.isMeshStandardMaterial?(i(m,h),d(m,h),h.isMeshPhysicalMaterial&&f(m,h,w)):h.isMeshMatcapMaterial?(i(m,h),g(m,h)):h.isMeshDepthMaterial?i(m,h):h.isMeshDistanceMaterial?(i(m,h),p(m,h)):h.isMeshNormalMaterial?i(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?a(m,h,x,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.bumpMap&&(m.bumpMap.value=h.bumpMap,m.bumpScale.value=h.bumpScale,h.side===Pn&&(m.bumpScale.value*=-1)),h.displacementMap&&(m.displacementMap.value=h.displacementMap,m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap),h.normalMap&&(m.normalMap.value=h.normalMap,m.normalScale.value.copy(h.normalScale),h.side===Pn&&m.normalScale.value.negate()),h.specularMap&&(m.specularMap.value=h.specularMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const T=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*T}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity);let E;h.map?E=h.map:h.specularMap?E=h.specularMap:h.displacementMap?E=h.displacementMap:h.normalMap?E=h.normalMap:h.bumpMap?E=h.bumpMap:h.roughnessMap?E=h.roughnessMap:h.metalnessMap?E=h.metalnessMap:h.alphaMap?E=h.alphaMap:h.emissiveMap?E=h.emissiveMap:h.clearcoatMap?E=h.clearcoatMap:h.clearcoatNormalMap?E=h.clearcoatNormalMap:h.clearcoatRoughnessMap?E=h.clearcoatRoughnessMap:h.iridescenceMap?E=h.iridescenceMap:h.iridescenceThicknessMap?E=h.iridescenceThicknessMap:h.specularIntensityMap?E=h.specularIntensityMap:h.specularColorMap?E=h.specularColorMap:h.transmissionMap?E=h.transmissionMap:h.thicknessMap?E=h.thicknessMap:h.sheenColorMap?E=h.sheenColorMap:h.sheenRoughnessMap&&(E=h.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix));let w;h.aoMap?w=h.aoMap:h.lightMap&&(w=h.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function a(m,h,x,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=E*.5,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let w;h.map?w=h.map:h.alphaMap&&(w=h.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.roughness.value=h.roughness,m.metalness.value=h.metalness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),m.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Pn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap)}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function p(m,h){m.referencePosition.value.copy(h.referencePosition),m.nearDistance.value=h.nearDistance,m.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function e0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function c(E,w){const T=w.program;n.uniformBlockBinding(E,T)}function l(E,w){let T=i[E.id];T===void 0&&(p(E),T=u(E),i[E.id]=T,E.addEventListener("dispose",h));const R=w.program;n.updateUBOMapping(E,R);const C=e.render.frame;r[E.id]!==C&&(f(E),r[E.id]=C)}function u(E){const w=d();E.__bindingPointIndex=w;const T=s.createBuffer(),R=E.__size,C=E.usage;return s.bindBuffer(35345,T),s.bufferData(35345,R,C),s.bindBuffer(35345,null),s.bindBufferBase(35345,w,T),T}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const w=i[E.id],T=E.uniforms,R=E.__cache;s.bindBuffer(35345,w);for(let C=0,O=T.length;C<O;C++){const v=T[C];if(g(v,C,R)===!0){const S=v.__offset,y=Array.isArray(v.value)?v.value:[v.value];let z=0;for(let F=0;F<y.length;F++){const H=y[F],B=m(H);typeof H=="number"?(v.__data[0]=H,s.bufferSubData(35345,S+z,v.__data)):H.isMatrix3?(v.__data[0]=H.elements[0],v.__data[1]=H.elements[1],v.__data[2]=H.elements[2],v.__data[3]=H.elements[0],v.__data[4]=H.elements[3],v.__data[5]=H.elements[4],v.__data[6]=H.elements[5],v.__data[7]=H.elements[0],v.__data[8]=H.elements[6],v.__data[9]=H.elements[7],v.__data[10]=H.elements[8],v.__data[11]=H.elements[0]):(H.toArray(v.__data,z),z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,S,v.__data)}}s.bindBuffer(35345,null)}function g(E,w,T){const R=E.value;if(T[w]===void 0){if(typeof R=="number")T[w]=R;else{const C=Array.isArray(R)?R:[R],O=[];for(let v=0;v<C.length;v++)O.push(C[v].clone());T[w]=O}return!0}else if(typeof R=="number"){if(T[w]!==R)return T[w]=R,!0}else{const C=Array.isArray(T[w])?T[w]:[T[w]],O=Array.isArray(R)?R:[R];for(let v=0;v<C.length;v++){const S=C[v];if(S.equals(O[v])===!1)return S.copy(O[v]),!0}}return!1}function p(E){const w=E.uniforms;let T=0;const R=16;let C=0;for(let O=0,v=w.length;O<v;O++){const S=w[O],y={boundary:0,storage:0},z=Array.isArray(S.value)?S.value:[S.value];for(let F=0,H=z.length;F<H;F++){const B=z[F],Z=m(B);y.boundary+=Z.boundary,y.storage+=Z.storage}if(S.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=T,O>0){C=T%R;const F=R-C;C!==0&&F-y.boundary<0&&(T+=R-C,S.__offset=T)}T+=y.storage}return C=T%R,C>0&&(T+=R-C),E.__size=T,E.__cache={},this}function m(E){const w={boundary:0,storage:0};return typeof E=="number"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function h(E){const w=E.target;w.removeEventListener("dispose",h);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function x(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:c,update:l,dispose:x}}function t0(){const s=xs("canvas");return s.style.display="block",s}function jo(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:t0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let d=null,f=null;const g=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hi,this.useLegacyLights=!0,this.toneMapping=hi,this.toneMappingExposure=1;const m=this;let h=!1,x=0,E=0,w=null,T=-1,R=null;const C=new en,O=new en;let v=null,S=e.width,y=e.height,z=1,F=null,H=null;const B=new en(0,0,S,y),Z=new en(0,0,S,y);let K=!1;const ae=new Vo;let ee=!1,de=!1,X=null;const j=new $t,W=new se,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return w===null?z:1}let J=t;function le(N,ce){for(let ge=0;ge<N.length;ge++){const re=N[ge],_e=e.getContext(re,ce);if(_e!==null)return _e}return null}try{const N={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",We,!1),e.addEventListener("webglcontextcreationerror",qe,!1),J===null){const ce=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&ce.shift(),J=le(ce,N),J===null)throw le(ce)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let fe,ue,_,b,D,V,$,Y,Se,De,ke,Ie,te,Ke,Oe,I,L,pe,xe,be,Te,Be,U,Q;function ze(){fe=new fg(J),ue=new ag(J,fe,s),fe.init(ue),Be=new $_(J,fe,ue),_=new q_(J,fe,ue),b=new mg,D=new I_,V=new X_(J,fe,_,D,ue,Be,b),$=new lg(m),Y=new dg(m),Se=new Mh(J,ue),U=new rg(J,fe,Se,ue),De=new hg(J,Se,b,U),ke=new xg(J,De,Se,b),xe=new vg(J,ue,V),I=new og(D),Ie=new D_(m,$,Y,fe,ue,U,I),te=new Q_(m,D),Ke=new k_,Oe=new B_(fe,ue),pe=new ig(m,$,Y,_,ke,u,o),L=new j_(m,ke,ue),Q=new e0(J,b,ue,_),be=new sg(J,fe,b,ue),Te=new pg(J,fe,b,ue),b.programs=Ie.programs,m.capabilities=ue,m.extensions=fe,m.properties=D,m.renderLists=Ke,m.shadowMap=L,m.state=_,m.info=b}ze();const Pe=new J_(m,J);this.xr=Pe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const N=fe.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=fe.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(N){N!==void 0&&(z=N,this.setSize(S,y,!1))},this.getSize=function(N){return N.set(S,y)},this.setSize=function(N,ce,ge=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=N,y=ce,e.width=Math.floor(N*z),e.height=Math.floor(ce*z),ge===!0&&(e.style.width=N+"px",e.style.height=ce+"px"),this.setViewport(0,0,N,ce)},this.getDrawingBufferSize=function(N){return N.set(S*z,y*z).floor()},this.setDrawingBufferSize=function(N,ce,ge){S=N,y=ce,z=ge,e.width=Math.floor(N*ge),e.height=Math.floor(ce*ge),this.setViewport(0,0,N,ce)},this.getCurrentViewport=function(N){return N.copy(C)},this.getViewport=function(N){return N.copy(B)},this.setViewport=function(N,ce,ge,re){N.isVector4?B.set(N.x,N.y,N.z,N.w):B.set(N,ce,ge,re),_.viewport(C.copy(B).multiplyScalar(z).floor())},this.getScissor=function(N){return N.copy(Z)},this.setScissor=function(N,ce,ge,re){N.isVector4?Z.set(N.x,N.y,N.z,N.w):Z.set(N,ce,ge,re),_.scissor(O.copy(Z).multiplyScalar(z).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(N){_.setScissorTest(K=N)},this.setOpaqueSort=function(N){F=N},this.setTransparentSort=function(N){H=N},this.getClearColor=function(N){return N.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(N=!0,ce=!0,ge=!0){let re=0;N&&(re|=16384),ce&&(re|=256),ge&&(re|=1024),J.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",qe,!1),Ke.dispose(),Oe.dispose(),D.dispose(),$.dispose(),Y.dispose(),ke.dispose(),U.dispose(),Q.dispose(),Ie.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Ee),Pe.removeEventListener("sessionend",Ve),X&&(X.dispose(),X=null),Ce.stop()};function Fe(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const N=b.autoReset,ce=L.enabled,ge=L.autoUpdate,re=L.needsUpdate,_e=L.type;ze(),b.autoReset=N,L.enabled=ce,L.autoUpdate=ge,L.needsUpdate=re,L.type=_e}function qe(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function mt(N){const ce=N.target;ce.removeEventListener("dispose",mt),vt(ce)}function vt(N){Tt(N),D.remove(N)}function Tt(N){const ce=D.get(N).programs;ce!==void 0&&(ce.forEach(function(ge){Ie.releaseProgram(ge)}),N.isShaderMaterial&&Ie.releaseShaderCache(N))}this.renderBufferDirect=function(N,ce,ge,re,_e,Ye){ce===null&&(ce=he);const st=_e.isMesh&&_e.matrixWorld.determinant()<0,ct=xa(N,ce,ge,re,_e);_.setMaterial(re,st);let ft=ge.index,lt=1;re.wireframe===!0&&(ft=De.getWireframeAttribute(ge),lt=2);const xt=ge.drawRange,at=ge.attributes.position;let Wt=xt.start*lt,Bt=(xt.start+xt.count)*lt;Ye!==null&&(Wt=Math.max(Wt,Ye.start*lt),Bt=Math.min(Bt,(Ye.start+Ye.count)*lt)),ft!==null?(Wt=Math.max(Wt,0),Bt=Math.min(Bt,ft.count)):at!=null&&(Wt=Math.max(Wt,0),Bt=Math.min(Bt,at.count));const Jn=Bt-Wt;if(Jn<0||Jn===1/0)return;U.setup(_e,re,ct,ge,ft);let pn,Ot=be;if(ft!==null&&(pn=Se.get(ft),Ot=Te,Ot.setIndex(pn)),_e.isMesh)re.wireframe===!0?(_.setLineWidth(re.wireframeLinewidth*Me()),Ot.setMode(1)):Ot.setMode(4);else if(_e.isLine){let ut=re.linewidth;ut===void 0&&(ut=1),_.setLineWidth(ut*Me()),_e.isLineSegments?Ot.setMode(1):_e.isLineLoop?Ot.setMode(2):Ot.setMode(3)}else _e.isPoints?Ot.setMode(0):_e.isSprite&&Ot.setMode(4);if(_e.isInstancedMesh)Ot.renderInstances(Wt,Jn,_e.count);else if(ge.isInstancedBufferGeometry){const ut=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,qi=Math.min(ge.instanceCount,ut);Ot.renderInstances(Wt,Jn,qi)}else Ot.render(Wt,Jn)},this.compile=function(N,ce){function ge(re,_e,Ye){re.transparent===!0&&re.side===Ui&&re.forceSinglePass===!1?(re.side=Pn,re.needsUpdate=!0,In(re,_e,Ye),re.side=Gi,re.needsUpdate=!0,In(re,_e,Ye),re.side=Ui):In(re,_e,Ye)}f=Oe.get(N),f.init(),p.push(f),N.traverseVisible(function(re){re.isLight&&re.layers.test(ce.layers)&&(f.pushLight(re),re.castShadow&&f.pushShadow(re))}),f.setupLights(m.useLegacyLights),N.traverse(function(re){const _e=re.material;if(_e)if(Array.isArray(_e))for(let Ye=0;Ye<_e.length;Ye++){const st=_e[Ye];ge(st,N,re)}else ge(_e,N,re)}),p.pop(),f=null};let q=null;function me(N){q&&q(N)}function Ee(){Ce.stop()}function Ve(){Ce.start()}const Ce=new Bu;Ce.setAnimationLoop(me),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(N){q=N,Pe.setAnimationLoop(N),N===null?Ce.stop():Ce.start()},Pe.addEventListener("sessionstart",Ee),Pe.addEventListener("sessionend",Ve),this.render=function(N,ce){if(ce!==void 0&&ce.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.parent===null&&ce.matrixWorldAutoUpdate===!0&&ce.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(ce),ce=Pe.getCamera()),N.isScene===!0&&N.onBeforeRender(m,N,ce,w),f=Oe.get(N,p.length),f.init(),p.push(f),j.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),ae.setFromProjectionMatrix(j),de=this.localClippingEnabled,ee=I.init(this.clippingPlanes,de),d=Ke.get(N,g.length),d.init(),g.push(d),Ze(N,ce,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(F,H),ee===!0&&I.beginShadows();const ge=f.state.shadowsArray;if(L.render(ge,N,ce),ee===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(d,N),f.setupLights(m.useLegacyLights),ce.isArrayCamera){const re=ce.cameras;for(let _e=0,Ye=re.length;_e<Ye;_e++){const st=re[_e];qt(d,N,st,st.viewport)}}else qt(d,N,ce);w!==null&&(V.updateMultisampleRenderTarget(w),V.updateRenderTargetMipmap(w)),N.isScene===!0&&N.onAfterRender(m,N,ce),U.resetDefaultState(),T=-1,R=null,p.pop(),p.length>0?f=p[p.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Ze(N,ce,ge,re){if(N.visible===!1)return;if(N.layers.test(ce.layers)){if(N.isGroup)ge=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ce);else if(N.isLight)f.pushLight(N),N.castShadow&&f.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ae.intersectsSprite(N)){re&&W.setFromMatrixPosition(N.matrixWorld).applyMatrix4(j);const st=ke.update(N),ct=N.material;ct.visible&&d.push(N,st,ct,ge,W.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(N.isSkinnedMesh&&N.skeleton.frame!==b.render.frame&&(N.skeleton.update(),N.skeleton.frame=b.render.frame),!N.frustumCulled||ae.intersectsObject(N))){re&&W.setFromMatrixPosition(N.matrixWorld).applyMatrix4(j);const st=ke.update(N),ct=N.material;if(Array.isArray(ct)){const ft=st.groups;for(let lt=0,xt=ft.length;lt<xt;lt++){const at=ft[lt],Wt=ct[at.materialIndex];Wt&&Wt.visible&&d.push(N,st,Wt,ge,W.z,at)}}else ct.visible&&d.push(N,st,ct,ge,W.z,null)}}const Ye=N.children;for(let st=0,ct=Ye.length;st<ct;st++)Ze(Ye[st],ce,ge,re)}function qt(N,ce,ge,re){const _e=N.opaque,Ye=N.transmissive,st=N.transparent;f.setupLightsView(ge),ee===!0&&I.setGlobalState(m.clippingPlanes,ge),Ye.length>0&&on(_e,ce,ge),re&&_.viewport(C.copy(re)),_e.length>0&&kn(_e,ce,ge),Ye.length>0&&kn(Ye,ce,ge),st.length>0&&kn(st,ce,ge),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function on(N,ce,ge){const re=ue.isWebGL2;X===null&&(X=new Wi(1024,1024,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?_s:ir,minFilter:gs,samples:re&&r===!0?4:0}));const _e=m.getRenderTarget();m.setRenderTarget(X),m.clear();const Ye=m.toneMapping;m.toneMapping=hi,kn(N,ce,ge),m.toneMapping=Ye,V.updateMultisampleRenderTarget(X),V.updateRenderTargetMipmap(X),m.setRenderTarget(_e)}function kn(N,ce,ge){const re=ce.isScene===!0?ce.overrideMaterial:null;for(let _e=0,Ye=N.length;_e<Ye;_e++){const st=N[_e],ct=st.object,ft=st.geometry,lt=re===null?st.material:re,xt=st.group;ct.layers.test(ge.layers)&&Ut(ct,ce,ge,ft,lt,xt)}}function Ut(N,ce,ge,re,_e,Ye){N.onBeforeRender(m,ce,ge,re,_e,Ye),N.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),_e.onBeforeRender(m,ce,ge,re,N,Ye),_e.transparent===!0&&_e.side===Ui&&_e.forceSinglePass===!1?(_e.side=Pn,_e.needsUpdate=!0,m.renderBufferDirect(ge,ce,re,_e,N,Ye),_e.side=Gi,_e.needsUpdate=!0,m.renderBufferDirect(ge,ce,re,_e,N,Ye),_e.side=Ui):m.renderBufferDirect(ge,ce,re,_e,N,Ye),N.onAfterRender(m,ce,ge,re,_e,Ye)}function In(N,ce,ge){ce.isScene!==!0&&(ce=he);const re=D.get(N),_e=f.state.lights,Ye=f.state.shadowsArray,st=_e.state.version,ct=Ie.getParameters(N,_e.state,Ye,ce,ge),ft=Ie.getProgramCacheKey(ct);let lt=re.programs;re.environment=N.isMeshStandardMaterial?ce.environment:null,re.fog=ce.fog,re.envMap=(N.isMeshStandardMaterial?Y:$).get(N.envMap||re.environment),lt===void 0&&(N.addEventListener("dispose",mt),lt=new Map,re.programs=lt);let xt=lt.get(ft);if(xt!==void 0){if(re.currentProgram===xt&&re.lightsStateVersion===st)return Hn(N,ct),xt}else ct.uniforms=Ie.getUniforms(N),N.onBuild(ge,ct,m),N.onBeforeCompile(ct,m),xt=Ie.acquireProgram(ct,ft),lt.set(ft,xt),re.uniforms=ct.uniforms;const at=re.uniforms;(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(at.clippingPlanes=I.uniform),Hn(N,ct),re.needsLights=ba(N),re.lightsStateVersion=st,re.needsLights&&(at.ambientLightColor.value=_e.state.ambient,at.lightProbe.value=_e.state.probe,at.directionalLights.value=_e.state.directional,at.directionalLightShadows.value=_e.state.directionalShadow,at.spotLights.value=_e.state.spot,at.spotLightShadows.value=_e.state.spotShadow,at.rectAreaLights.value=_e.state.rectArea,at.ltc_1.value=_e.state.rectAreaLTC1,at.ltc_2.value=_e.state.rectAreaLTC2,at.pointLights.value=_e.state.point,at.pointLightShadows.value=_e.state.pointShadow,at.hemisphereLights.value=_e.state.hemi,at.directionalShadowMap.value=_e.state.directionalShadowMap,at.directionalShadowMatrix.value=_e.state.directionalShadowMatrix,at.spotShadowMap.value=_e.state.spotShadowMap,at.spotLightMatrix.value=_e.state.spotLightMatrix,at.spotLightMap.value=_e.state.spotLightMap,at.pointShadowMap.value=_e.state.pointShadowMap,at.pointShadowMatrix.value=_e.state.pointShadowMatrix);const Wt=xt.getUniforms(),Bt=ra.seqWithValue(Wt.seq,at);return re.currentProgram=xt,re.uniformsList=Bt,xt}function Hn(N,ce){const ge=D.get(N);ge.outputEncoding=ce.outputEncoding,ge.instancing=ce.instancing,ge.skinning=ce.skinning,ge.morphTargets=ce.morphTargets,ge.morphNormals=ce.morphNormals,ge.morphColors=ce.morphColors,ge.morphTargetsCount=ce.morphTargetsCount,ge.numClippingPlanes=ce.numClippingPlanes,ge.numIntersection=ce.numClipIntersection,ge.vertexAlphas=ce.vertexAlphas,ge.vertexTangents=ce.vertexTangents,ge.toneMapping=ce.toneMapping}function xa(N,ce,ge,re,_e){ce.isScene!==!0&&(ce=he),V.resetTextureUnits();const Ye=ce.fog,st=re.isMeshStandardMaterial?ce.environment:null,ct=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Hi,ft=(re.isMeshStandardMaterial?Y:$).get(re.envMap||st),lt=re.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,xt=!!re.normalMap&&!!ge.attributes.tangent,at=!!ge.morphAttributes.position,Wt=!!ge.morphAttributes.normal,Bt=!!ge.morphAttributes.color,Jn=re.toneMapped?m.toneMapping:hi,pn=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,Ot=pn!==void 0?pn.length:0,ut=D.get(re),qi=f.state.lights;if(ee===!0&&(de===!0||N!==R)){const Qt=N===R&&re.id===T;I.setState(re,N,Qt)}let Kt=!1;re.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==qi.state.version||ut.outputEncoding!==ct||_e.isInstancedMesh&&ut.instancing===!1||!_e.isInstancedMesh&&ut.instancing===!0||_e.isSkinnedMesh&&ut.skinning===!1||!_e.isSkinnedMesh&&ut.skinning===!0||ut.envMap!==ft||re.fog===!0&&ut.fog!==Ye||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==I.numPlanes||ut.numIntersection!==I.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==xt||ut.morphTargets!==at||ut.morphNormals!==Wt||ut.morphColors!==Bt||ut.toneMapping!==Jn||ue.isWebGL2===!0&&ut.morphTargetsCount!==Ot)&&(Kt=!0):(Kt=!0,ut.__version=re.version);let Wn=ut.currentProgram;Kt===!0&&(Wn=In(re,ce,_e));let Li=!1,Vt=!1,Yt=!1;const mn=Wn.getUniforms(),Nt=ut.uniforms;if(_.useProgram(Wn.program)&&(Li=!0,Vt=!0,Yt=!0),re.id!==T&&(T=re.id,Vt=!0),Li||R!==N){if(mn.setValue(J,"projectionMatrix",N.projectionMatrix),ue.logarithmicDepthBuffer&&mn.setValue(J,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),R!==N&&(R=N,Vt=!0,Yt=!0),re.isShaderMaterial||re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshStandardMaterial||re.envMap){const Qt=mn.map.cameraPosition;Qt!==void 0&&Qt.setValue(J,W.setFromMatrixPosition(N.matrixWorld))}(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&mn.setValue(J,"isOrthographic",N.isOrthographicCamera===!0),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial||re.isShadowMaterial||_e.isSkinnedMesh)&&mn.setValue(J,"viewMatrix",N.matrixWorldInverse)}if(_e.isSkinnedMesh){mn.setOptional(J,_e,"bindMatrix"),mn.setOptional(J,_e,"bindMatrixInverse");const Qt=_e.skeleton;Qt&&(ue.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),mn.setValue(J,"boneTexture",Qt.boneTexture,V),mn.setValue(J,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Di=ge.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0&&ue.isWebGL2===!0)&&xe.update(_e,ge,Wn),(Vt||ut.receiveShadow!==_e.receiveShadow)&&(ut.receiveShadow=_e.receiveShadow,mn.setValue(J,"receiveShadow",_e.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Nt.envMap.value=ft,Nt.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),Vt&&(mn.setValue(J,"toneMappingExposure",m.toneMappingExposure),ut.needsLights&&ya(Nt,Yt),Ye&&re.fog===!0&&te.refreshFogUniforms(Nt,Ye),te.refreshMaterialUniforms(Nt,re,z,y,X),ra.upload(J,ut.uniformsList,Nt,V)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(ra.upload(J,ut.uniformsList,Nt,V),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&mn.setValue(J,"center",_e.center),mn.setValue(J,"modelViewMatrix",_e.modelViewMatrix),mn.setValue(J,"normalMatrix",_e.normalMatrix),mn.setValue(J,"modelMatrix",_e.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Qt=re.uniformsGroups;for(let yt=0,wa=Qt.length;yt<wa;yt++)if(ue.isWebGL2){const As=Qt[yt];Q.update(As,Wn),Q.bind(As,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function ya(N,ce){N.ambientLightColor.needsUpdate=ce,N.lightProbe.needsUpdate=ce,N.directionalLights.needsUpdate=ce,N.directionalLightShadows.needsUpdate=ce,N.pointLights.needsUpdate=ce,N.pointLightShadows.needsUpdate=ce,N.spotLights.needsUpdate=ce,N.spotLightShadows.needsUpdate=ce,N.rectAreaLights.needsUpdate=ce,N.hemisphereLights.needsUpdate=ce}function ba(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(N,ce,ge){D.get(N.texture).__webglTexture=ce,D.get(N.depthTexture).__webglTexture=ge;const re=D.get(N);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ge===void 0,re.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,ce){const ge=D.get(N);ge.__webglFramebuffer=ce,ge.__useDefaultFramebuffer=ce===void 0},this.setRenderTarget=function(N,ce=0,ge=0){w=N,x=ce,E=ge;let re=!0,_e=null,Ye=!1,st=!1;if(N){const ft=D.get(N);ft.__useDefaultFramebuffer!==void 0?(_.bindFramebuffer(36160,null),re=!1):ft.__webglFramebuffer===void 0?V.setupRenderTarget(N):ft.__hasExternalTextures&&V.rebindTextures(N,D.get(N.texture).__webglTexture,D.get(N.depthTexture).__webglTexture);const lt=N.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(st=!0);const xt=D.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(_e=xt[ce],Ye=!0):ue.isWebGL2&&N.samples>0&&V.useMultisampledRTT(N)===!1?_e=D.get(N).__webglMultisampledFramebuffer:_e=xt,C.copy(N.viewport),O.copy(N.scissor),v=N.scissorTest}else C.copy(B).multiplyScalar(z).floor(),O.copy(Z).multiplyScalar(z).floor(),v=K;if(_.bindFramebuffer(36160,_e)&&ue.drawBuffers&&re&&_.drawBuffers(N,_e),_.viewport(C),_.scissor(O),_.setScissorTest(v),Ye){const ft=D.get(N.texture);J.framebufferTexture2D(36160,36064,34069+ce,ft.__webglTexture,ge)}else if(st){const ft=D.get(N.texture),lt=ce||0;J.framebufferTextureLayer(36160,36064,ft.__webglTexture,ge||0,lt)}T=-1},this.readRenderTargetPixels=function(N,ce,ge,re,_e,Ye,st){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=D.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&st!==void 0&&(ct=ct[st]),ct){_.bindFramebuffer(36160,ct);try{const ft=N.texture,lt=ft.format,xt=ft.type;if(lt!==oi&&Be.convert(lt)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const at=xt===_s&&(fe.has("EXT_color_buffer_half_float")||ue.isWebGL2&&fe.has("EXT_color_buffer_float"));if(xt!==ir&&Be.convert(xt)!==J.getParameter(35738)&&!(xt===er&&(ue.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ce>=0&&ce<=N.width-re&&ge>=0&&ge<=N.height-_e&&J.readPixels(ce,ge,re,_e,Be.convert(lt),Be.convert(xt),Ye)}finally{const ft=w!==null?D.get(w).__webglFramebuffer:null;_.bindFramebuffer(36160,ft)}}},this.copyFramebufferToTexture=function(N,ce,ge=0){const re=Math.pow(2,-ge),_e=Math.floor(ce.image.width*re),Ye=Math.floor(ce.image.height*re);V.setTexture2D(ce,0),J.copyTexSubImage2D(3553,ge,0,0,N.x,N.y,_e,Ye),_.unbindTexture()},this.copyTextureToTexture=function(N,ce,ge,re=0){const _e=ce.image.width,Ye=ce.image.height,st=Be.convert(ge.format),ct=Be.convert(ge.type);V.setTexture2D(ge,0),J.pixelStorei(37440,ge.flipY),J.pixelStorei(37441,ge.premultiplyAlpha),J.pixelStorei(3317,ge.unpackAlignment),ce.isDataTexture?J.texSubImage2D(3553,re,N.x,N.y,_e,Ye,st,ct,ce.image.data):ce.isCompressedTexture?J.compressedTexSubImage2D(3553,re,N.x,N.y,ce.mipmaps[0].width,ce.mipmaps[0].height,st,ce.mipmaps[0].data):J.texSubImage2D(3553,re,N.x,N.y,st,ct,ce.image),re===0&&ge.generateMipmaps&&J.generateMipmap(3553),_.unbindTexture()},this.copyTextureToTexture3D=function(N,ce,ge,re,_e=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ye=N.max.x-N.min.x+1,st=N.max.y-N.min.y+1,ct=N.max.z-N.min.z+1,ft=Be.convert(re.format),lt=Be.convert(re.type);let xt;if(re.isData3DTexture)V.setTexture3D(re,0),xt=32879;else if(re.isDataArrayTexture)V.setTexture2DArray(re,0),xt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,re.flipY),J.pixelStorei(37441,re.premultiplyAlpha),J.pixelStorei(3317,re.unpackAlignment);const at=J.getParameter(3314),Wt=J.getParameter(32878),Bt=J.getParameter(3316),Jn=J.getParameter(3315),pn=J.getParameter(32877),Ot=ge.isCompressedTexture?ge.mipmaps[0]:ge.image;J.pixelStorei(3314,Ot.width),J.pixelStorei(32878,Ot.height),J.pixelStorei(3316,N.min.x),J.pixelStorei(3315,N.min.y),J.pixelStorei(32877,N.min.z),ge.isDataTexture||ge.isData3DTexture?J.texSubImage3D(xt,_e,ce.x,ce.y,ce.z,Ye,st,ct,ft,lt,Ot.data):ge.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(xt,_e,ce.x,ce.y,ce.z,Ye,st,ct,ft,Ot.data)):J.texSubImage3D(xt,_e,ce.x,ce.y,ce.z,Ye,st,ct,ft,lt,Ot),J.pixelStorei(3314,at),J.pixelStorei(32878,Wt),J.pixelStorei(3316,Bt),J.pixelStorei(3315,Jn),J.pixelStorei(32877,pn),_e===0&&re.generateMipmaps&&J.generateMipmap(xt),_.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?V.setTextureCube(N,0):N.isData3DTexture?V.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?V.setTexture2DArray(N,0):V.setTexture2D(N,0),_.unbindTexture()},this.resetState=function(){x=0,E=0,w=null,_.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(jo.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(s){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!s}}});class n0 extends jo{}n0.prototype.isWebGL1Renderer=!0;class i0 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class qo extends _i{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new se,u=new Qe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const g=n+d/t*i;l.x=e*Math.cos(g),l.y=e*Math.sin(g),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ln(o,3)),this.setAttribute("normal",new Ln(a,3)),this.setAttribute("uv",new Ln(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ga extends _i{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new se,f=new se,g=[],p=[],m=[],h=[];for(let x=0;x<=n;x++){const E=[],w=x/n;let T=0;x==0&&o==0?T=.5/t:x==n&&c==Math.PI&&(T=-.5/t);for(let R=0;R<=t;R++){const C=R/t;d.x=-e*Math.cos(i+C*r)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(i+C*r)*Math.sin(o+w*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),h.push(C+T,1-w),E.push(l++)}u.push(E)}for(let x=0;x<n;x++)for(let E=0;E<t;E++){const w=u[x][E+1],T=u[x][E],R=u[x+1][E],C=u[x+1][E+1];(x!==0||o>0)&&g.push(w,T,C),(x!==n-1||c<Math.PI)&&g.push(T,R,C)}this.setIndex(g),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(m,3)),this.setAttribute("uv",new Ln(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xo extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class r0 extends Xo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class s0 extends Ci{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class a0 extends Ci{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class o0 extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Cc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class l0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const g=l[d],p=l[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return p}return null}}}const ju=new l0;class qu{constructor(e){this.manager=e!==void 0?e:ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class c0 extends qu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Cc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=xs("img");function c(){u(),Cc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Pc extends qu{constructor(e){super(e)}load(e,t,n,i){const r=new li,o=new c0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Xu extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const so=new $t,Lc=new se,Dc=new se;class u0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dc),t.updateMatrixWorld(),so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class d0 extends u0{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $o extends Xu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new d0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ko extends Xu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $u{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ic(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ic();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ic(){return(typeof performance>"u"?Date:performance).now()}class f0{constructor(e,t,n=0,i=1/0){this.ray=new ku(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new No,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return To(e,this,n,t),n.sort(Rc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)To(e[i],this,n,t);return n.sort(Rc),n}}function Rc(s,e){return s.distance-e.distance}function To(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)To(i[r],e,t,!0)}}class kc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);const h0={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};let Ss=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}};const p0=new Ho(-1,1,1,-1,0,1),Yo=new _i;Yo.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3));Yo.setAttribute("uv",new Ln([0,2,0,0,2,0],2));class Ku{constructor(e){this._mesh=new Yn(Yo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,p0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class m0 extends Ss{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Uo.clone(e.uniforms),this.material=new mi({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ku(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zc extends Ss{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class g0 extends Ss{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _0{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Qe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Wi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new m0(h0),this.clock=new $u}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zc!==void 0&&(o instanceof zc?n=!0:o instanceof g0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yu extends Ss{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const v0=(s,e,t)=>{s.renderer=new jo({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),s.composer=new _0(s.renderer),s.composer.addPass(new Yu(s.scene,Io(s.camera)))},Oc=(s,e,t)=>{s.renderer&&(e?s.renderer.outputEncoding=Hi:s.renderer.outputEncoding=kt,t?s.renderer.toneMapping=hi:s.renderer.toneMapping=Mu)},Nc=(s,e,t)=>{var n,i,r,o,a,c,l,u;!s.renderer||!s.composer||((i=(n=s.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(r=s.renderer).setPixelRatio)==null||o.call(r,t),(c=(a=s.composer).setSize)==null||c.call(a,e.width,e.height),(u=(l=s.composer).setPixelRatio)==null||u.call(l,t))},Fc=(s,e,t)=>{s.renderer&&(s.renderer.shadowMap.enabled=e,s.renderer.shadowMap.type=t)},Zn=s=>s.userData,x0=(s,e)=>{s.pointer.update(t=>s.renderer?t.set(e.offsetX/s.renderer.domElement.clientWidth*2-1,-(e.offsetY/s.renderer.domElement.clientHeight)*2+1):t)},Zu=(s,e,t,n)=>(s.raycaster.setFromCamera(e,t),s.raycaster.intersectObjects(n,!1)),y0=(s,e)=>s.object.uuid!==e.object.uuid||s.instanceId!==e.instanceId,b0=(s,e,t)=>{let n;const i=s.camera.subscribe(l=>n=l);Ft(i);let r;const o=s.pointer.subscribe(l=>r=l);Ft(o);let a;const c=l=>{var f,g;l.preventDefault();const u=l.type;s.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,x0(s,l);const d=w0(e,r,n);if(u==="pointerdown"&&(a=d?{object:d.object,instanceId:d.instanceId}:null),u==="click"){if(!S0(d,a)){a=null;return}a=null}d&&((g=(f=Zn(d.object)).eventDispatcher)==null||g.call(f,u,{...d,event:l}))};return{onClick:c,onContextMenu:c,onPointerUp:c,onPointerDown:c,onPointerMove:c}};function w0(s,e,t){if(s.interactiveObjects.size===0||s.raycastableObjects.size===0)return null;const n=Zu(s,e,t,Array.from(s.raycastableObjects));return n.length===0||!s.interactiveObjects.has(n[0].object)?null:n[0]}function S0(s,e){return!s||!e?!1:s.object.uuid===e.object.uuid&&s.instanceId===e.instanceId}const M0=(s,e)=>{let t;const n=s.pointerOverCanvas.subscribe(l=>t=l);Ft(n);let i;const r=s.camera.subscribe(l=>i=l);Ft(r);let o;const a=s.pointer.subscribe(l=>o=l);return Ft(a),{raycast:()=>{var d,f,g,p,m,h,x,E;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const l=t?Zu(e,o,i,Array.from(e.raycastableObjects)):[],u=l.length&&e.interactiveObjects.has(l[0].object)?l[0]:null;u?e.lastIntersection?e.lastIntersection&&y0(e.lastIntersection,u)&&((h=(m=Zn(e.lastIntersection.object)).eventDispatcher)==null||h.call(m,"pointerleave",e.lastIntersection),(E=(x=Zn(u.object)).eventDispatcher)==null||E.call(x,"pointerenter",u)):(p=(g=Zn(u.object)).eventDispatcher)==null||p.call(g,"pointerenter",u):e.lastIntersection&&((f=(d=Zn(e.lastIntersection.object)).eventDispatcher)==null||f.call(d,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},_a=typeof window<"u",E0=s=>{if(!_a)return;let e;const t=()=>{s(),e=requestAnimationFrame(t)};t(),Ft(()=>{e&&cancelAnimationFrame(e)})},A0=(s,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,r)=>r.order?!0:i,!1),n=s.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,r)=>(i.order??0)>(r.order??0)?1:-1).forEach(i=>i.fn(s,n)):e.frameHandlers.forEach(i=>i.fn(s,n))},T0=s=>{s.debugFrameloop&&(s.frame+=1,console.log(`frame: ${s.frame}${Object.keys(s.invalidations).length>0?", requested by ↴":""}`),Object.keys(s.invalidations).length>0&&console.table(s.invalidations),s.invalidations={})},C0=(s,e,t,n)=>{let i=Io(s.camera);const r=s.camera.subscribe(a=>i=a);Ft(r);const{raycast:o}=M0(s,e);E0(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!s.composer||!s.renderer||(A0(s,t),s.composer.passes.length>1?s.composer.render():s.renderer.render(s.scene,i),T0(t),t.frameInvalidated=!1,t.advance=!1))})},P0=()=>{const s=new Cn(75,0,.1,1e3);return Zn(s).threlteDefaultCamera=!0,s.position.z=5,s.lookAt(0,0,0),s},L0=s=>{const e=s.size.subscribe(t=>{Zn(Io(s.camera)).threlteDefaultCamera&&s.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),s.invalidate("Default camera: aspect ratio changed"),i})});Ft(e)},D0=(s,e,t,n,i,r,o)=>{const a={audioListeners:new Map,addAudioListener:(x,E)=>{if(E=E??"default",a.audioListeners.has(E)){console.warn(`An AudioListener with the id "${E}" has already been added, aborting.`);return}a.audioListeners.set(E,x)},removeAudioListener:x=>{if(x=x??"default",!a.audioListeners.has(x)){console.warn(`No AudioListener with the id "${x}" found, aborting.`);return}a.audioListeners.delete(x)},getAudioListener:x=>{if(x=x??"default",!a.audioListeners.has(x)){console.warn(`No AudioListener with the id "${x}" found, aborting.`);return}return a.audioListeners.get(x)}},c={debugFrameloop:r,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},l={size:Gd([n,i],([x,E])=>x||E),pointer:vn(new Qe),pointerOverCanvas:vn(!1),clock:new $u,camera:vn(P0()),scene:new i0,renderer:void 0,composer:void 0,invalidate:x=>{c.frameInvalidated=!0,c.debugFrameloop&&x&&(c.invalidations[x]=c.invalidations[x]?c.invalidations[x]+1:1)},advance:()=>{c.advance=!0}},u={flat:vn(e),linear:vn(s),dpr:vn(t),setCamera:x=>{l.camera.set(x),l.composer&&(l.composer.passes.forEach(E=>{E instanceof Yu&&(E.camera=x)}),l.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new f0,lastIntersection:null,addRaycastableObject:x=>{u.raycastableObjects.add(x)},removeRaycastableObject:x=>{u.raycastableObjects.delete(x)},addInteractiveObject:x=>{u.interactiveObjects.add(x)},removeInteractiveObject:x=>{u.interactiveObjects.delete(x)},addPass:x=>{l.composer&&(l.composer.addPass(x),l.invalidate("Canvas: adding pass"))},removePass:x=>{l.composer&&(l.composer.removePass(x),l.invalidate("Canvas: removing pass"))}},d={dispose:async(x=!1)=>{await Ro(),!(!d.shouldDispose&&!x)&&(d.disposableObjects.forEach((E,w)=>{var T;(E===0||x)&&((T=w==null?void 0:w.dispose)==null||T.call(w),d.disposableObjects.delete(w))}),d.shouldDispose=!1)},collectDisposableObjects:(x,E)=>{const w=E??[];return x&&(x!=null&&x.dispose&&typeof x.dispose=="function"&&x.type!=="Scene"&&w.push(x),Object.entries(x).forEach(([T,R])=>{if(T==="parent"||T==="children"||typeof R!="object")return;const C=R;C!=null&&C.dispose&&d.collectDisposableObjects(C,w)})),w},addDisposableObjects:x=>{x.forEach(E=>{const w=d.disposableObjects.get(E);w?d.disposableObjects.set(E,w+1):d.disposableObjects.set(E,1)})},removeDisposableObjects:x=>{x.length!==0&&(x.forEach(E=>{const w=d.disposableObjects.get(E);w&&w>0&&d.disposableObjects.set(E,w-1)}),d.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return si("threlte",l),si("threlte-root",u),si("threlte-render-context",c),si("threlte-audio-context",a),si("threlte-disposal-context",d),{ctx:l,rootCtx:u,renderCtx:c,audioCtx:a,disposalCtx:d,getCtx:()=>l,getRootCtx:()=>u,getRenderCtx:()=>c,getAudioCtx:()=>a,getDisposalCtx:()=>d}};function Ju(s,e){const t=vn(s);let n=s;const i=t.subscribe(a=>n=a);return Ft(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(a),e==null||e(a,c)},update:a=>{const c=a(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const ji=()=>Ai("threlte");function I0(s){let e;const t=s[8].default,n=kr(t,s,s[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&128)&&zr(n,t,i,i[7],e?Nr(t,i[7],r,null):Or(i[7]),null)},i(i){e||(je(n,i),e=!0)},o(i){$e(n,i),e=!1},d(i){n&&n.d(i)}}}const R0=()=>({onChildMount:Ai("threlte-hierarchical-object-on-mount"),onChildDestroy:Ai("threlte-hierarchical-object-on-destroy")}),Qu=()=>Ai("threlte-hierarchical-parent-context");function k0(s,e,t){var x;let n,{$$slots:i={},$$scope:r}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:c=void 0}=e;const l=E=>{a.push(E),t(1,a),c==null||c(E)};let{onChildDestroy:u=void 0}=e;const d=E=>{const w=a.findIndex(T=>T.uuid===E.uuid);w!==-1&&a.splice(w,1),t(1,a),u==null||u(E)},{invalidate:f}=ji(),g=Qu();Sn(s,g,E=>t(6,n=E));let{parent:p=n}=e;const m=R0();o&&((x=m.onChildMount)==null||x.call(m,o),f("HierarchicalObject: object added"));const h=Ju(o,(E,w)=>{var T,R;w&&((T=m.onChildDestroy)==null||T.call(m,w),f("HierarchicalObject: object added")),E&&((R=m.onChildMount)==null||R.call(m,E),f("HierarchicalObject: object removed"))});return Ft(()=>{var E;o&&((E=m.onChildDestroy)==null||E.call(m,o),f("HierarchicalObject: object removed"))}),si("threlte-hierarchical-object-on-mount",l),si("threlte-hierarchical-object-on-destroy",d),si("threlte-hierarchical-parent-context",h),s.$$set=E=>{"object"in E&&t(3,o=E.object),"children"in E&&t(1,a=E.children),"onChildMount"in E&&t(4,c=E.onChildMount),"onChildDestroy"in E&&t(5,u=E.onChildDestroy),"parent"in E&&t(2,p=E.parent),"$$scope"in E&&t(7,r=E.$$scope)},s.$$.update=()=>{s.$$.dirty&64&&t(2,p=n),s.$$.dirty&8&&h.set(o)},[g,a,p,o,c,u,n,r,i]}class z0 extends rn{constructor(e){super(),sn(this,e,k0,I0,an,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function O0(s){let e;const t=s[1].default,n=kr(t,s,s[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&zr(n,t,i,i[4],e?Nr(t,i[4],r,null):Or(i[4]),null)},i(i){e||(je(n,i),e=!0)},o(i){$e(n,i),e=!1},d(i){n&&n.d(i)}}}function N0(s){let e,t;return e=new z0({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[O0]},$$scope:{ctx:s}}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function F0(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const o=c=>r.add(c),a=c=>r.remove(c);return s.$$set=c=>{"object"in c&&t(0,r=c.object),"$$scope"in c&&t(4,i=c.$$scope)},[r,n,o,a,i]}class ed extends rn{constructor(e){super(),sn(this,e,F0,N0,an,{object:0})}}const U0=()=>{const s=vn({width:0,height:0});let e={width:0,height:0};const t=s.subscribe(o=>e=o);Ft(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:c}=n.parentElement;(a!==o.width||c!==o.height)&&s.set({width:a,height:c})},r=o=>{n=o,i(),window.addEventListener("resize",i)};return _a?(Ft(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:r,parentSize:s}):{parentSize:s,parentSizeAction:r}};function Uc(s){let e,t;return e=new ed({props:{object:s[0].scene,$$slots:{default:[B0]},$$scope:{ctx:s}}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p(n,i){const r={};i[1]&4&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function B0(s){let e;const t=s[29].default,n=kr(t,s,s[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&4)&&zr(n,t,i,i[33],e?Nr(t,i[33],r,null):Or(i[33]),null)},i(i){e||(je(n,i),e=!0)},o(i){$e(n,i),e=!1},d(i){n&&n.d(i)}}}function V0(s){let e,t,n,i,r=s[2]&&Uc(s);return{c(){e=Lt("canvas"),r&&r.c(),this.h()},l(o){e=Dt(o,"CANVAS",{class:!0});var a=It(e);r&&r.l(a),a.forEach(He),this.h()},h(){ot(e,"class","svelte-o3oskp")},m(o,a){_t(o,e,a),r&&r.m(e,null),s[30](e),t=!0,n||(i=[Od(s[3].call(null,e)),Fi(e,"click",s[9]),Fi(e,"contextmenu",s[10]),Fi(e,"pointerup",s[13]),Fi(e,"pointerdown",s[11]),Fi(e,"pointermove",s[12]),Fi(e,"pointerenter",s[31]),Fi(e,"pointerleave",s[32])],n=!0)},p(o,a){o[2]?r?(r.p(o,a),a[0]&4&&je(r,1)):(r=Uc(o),r.c(),je(r,1),r.m(e,null)):r&&(_o(),$e(r,1,1,()=>{r=null}),vo())},i(o){t||(je(r),t=!0)},o(o){$e(r),t=!1},d(o){o&&He(e),r&&r.d(),s[30](null),n=!1,Nd(i)}}}const Bc=new Set;function G0(s,e,t){let n,i,r,o,{$$slots:a={},$$scope:c}=e,{dpr:l=_a?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:d=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:g=!1}=e,{shadows:p=!0}=e,{shadowMapType:m=bu}=e,{size:h=void 0}=e,{rendererParameters:x=void 0}=e,E,w=!1;const T=vn(h),{parentSize:R,parentSizeAction:C}=U0(),O=D0(d,u,l,T,R,g,f),{getCtx:v,renderCtx:S,disposalCtx:y}=O,{ctx:z,rootCtx:F,audioCtx:H}=O;L0(z),Bc.add(z.invalidate),Ft(()=>{Bc.delete(z.invalidate)});const{size:B,scene:Z}=z;Sn(s,B,fe=>t(26,i=fe));const{flat:K,linear:ae,dpr:ee}=F;Sn(s,K,fe=>t(27,r=fe)),Sn(s,ae,fe=>t(28,o=fe)),Sn(s,ee,fe=>t(25,n=fe)),si("threlte-parent",vn(Z)),sa(()=>{E&&(v0(z,E,x),Oc(z,o,r),Nc(z,i,n),Fc(z,p,m),t(2,w=!0))}),C0(z,F,S,y);const{onClick:de,onContextMenu:X,onPointerDown:j,onPointerMove:W,onPointerUp:he}=b0(z,F,S);Ft(()=>{y.dispose(!0)});function Me(fe){xu[fe?"unshift":"push"](()=>{E=fe,t(1,E)})}const J=()=>v().pointerOverCanvas.set(!0),le=()=>v().pointerOverCanvas.set(!1);return s.$$set=fe=>{"dpr"in fe&&t(14,l=fe.dpr),"flat"in fe&&t(15,u=fe.flat),"linear"in fe&&t(16,d=fe.linear),"frameloop"in fe&&t(17,f=fe.frameloop),"debugFrameloop"in fe&&t(18,g=fe.debugFrameloop),"shadows"in fe&&t(19,p=fe.shadows),"shadowMapType"in fe&&t(20,m=fe.shadowMapType),"size"in fe&&t(21,h=fe.size),"rendererParameters"in fe&&t(22,x=fe.rendererParameters),"$$scope"in fe&&t(33,c=fe.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&2097152&&T.set(h),s.$$.dirty[0]&65536&&fs(ae,o=d,o),s.$$.dirty[0]&32768&&fs(K,r=u,r),s.$$.dirty[0]&16384&&fs(ee,n=l,n),s.$$.dirty[0]&402653184&&Oc(v(),o,r),s.$$.dirty[0]&100663296&&Nc(v(),i,n),s.$$.dirty[0]&1572864&&Fc(v(),p,m)},[z,E,w,C,v,B,K,ae,ee,de,X,j,W,he,l,u,d,f,g,p,m,h,x,F,H,n,i,r,o,a,Me,J,le,c]}class Zo extends rn{constructor(e){super(),sn(this,e,G0,V0,an,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Jo=()=>Ai("threlte-root"),H0=()=>Ai("threlte-disposal-context");function W0(s){let e;const t=s[9].default,n=kr(t,s,s[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&zr(n,t,i,i[8],e?Nr(t,i[8],r,null):Or(i[8]),null)},i(i){e||(je(n,i),e=!0)},o(i){$e(n,i),e=!1},d(i){n&&n.d(i)}}}const Vc="threlte-disposable-object-context";function j0(s,e,t){let n,i,{$$slots:r={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:c,removeDisposableObjects:l}=H0();let{object:u=void 0}=e,d=u,{dispose:f=void 0}=e;const g=Ai(Vc);Sn(s,g,h=>t(7,i=h));const p=vn(f??i??!0);Sn(s,p,h=>t(6,n=h)),si(Vc,p);let m=n?a(u):[];return c(m),Ft(()=>{l(m)}),s.$$set=h=>{"object"in h&&t(2,u=h.object),"dispose"in h&&t(3,f=h.dispose),"$$scope"in h&&t(8,o=h.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&p.set(f??i??!0),s.$$.dirty&116&&u!==d&&(l(m),t(5,m=n?a(u):[]),c(m),t(4,d=u))},[g,p,u,f,d,m,n,i,o,r]}class td extends rn{constructor(e){super(),sn(this,e,j0,W0,an,{object:2,dispose:3})}}const Ms=(s,e)=>{if(!_a)return{start:()=>{},stop:()=>{},started:Hd(!1)};const t=Ai("threlte-render-context"),n={fn:s,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=vn(!1),r=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),Ft(()=>{r()}),{start:o,stop:r,started:{subscribe:i.subscribe}}},q0=()=>{const s=vn(!1);return(async()=>{await Ro(),s.set(!0)})(),s};function X0(s,e,t){let n,i,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:c=void 0}=e,{lookAt:l=void 0}=e;const u=new se,d=da(),{invalidate:f}=ji(),g=q0();Sn(s,g,w=>t(8,i=w));const p=async()=>{i||await Ro(),d("transform")},m=async()=>{f("TransformableObject: transformed"),await p()};Zn(r).onTransform=m;const{start:h,stop:x}=Ms(async()=>{l&&!c&&l instanceof Jt&&(l.getWorldPosition(u),r.lookAt(u),await p())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),E=Ju(r);return Sn(s,E,w=>t(7,n=w)),s.$$set=w=>{"object"in w&&t(2,r=w.object),"position"in w&&t(3,o=w.position),"scale"in w&&t(4,a=w.scale),"rotation"in w&&t(5,c=w.rotation),"lookAt"in w&&t(6,l=w.lookAt)},s.$$.update=()=>{s.$$.dirty&4&&E.set(r),s.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),m()),l&&!c&&(l instanceof Jt?h():(x(),n.lookAt(l.x??0,l.y??0,l.z??0),m())),l||x()),s.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),m()),s.$$.dirty&160&&c&&(n.rotation.set(c.x??0,c.y??0,c.z??0,c.order??"XYZ"),m())},[g,E,r,o,a,c,l,n]}class nd extends rn{constructor(e){super(),sn(this,e,X0,null,an,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const Gc=[],$0=(s,e)=>{const t=Gc.find(i=>i instanceof s);if(t)return t;const n=e();return Gc.push(n),n},Hc={type:"change"},ao={type:"start"},Wc={type:"end"};let K0=class extends sr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new se,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lr.ROTATE,MIDDLE:lr.DOLLY,RIGHT:lr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Oe),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Hc),n.update(),r=i.NONE},this.update=function(){const U=new se,Q=new rr().setFromUnitVectors(e.up,new se(0,1,0)),ze=Q.clone().invert(),Pe=new se,Fe=new rr,We=2*Math.PI;return function(){const mt=n.object.position;U.copy(mt).sub(n.target),U.applyQuaternion(Q),a.setFromVector3(U),n.autoRotate&&r===i.NONE&&S(O()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let vt=n.minAzimuthAngle,Tt=n.maxAzimuthAngle;return isFinite(vt)&&isFinite(Tt)&&(vt<-Math.PI?vt+=We:vt>Math.PI&&(vt-=We),Tt<-Math.PI?Tt+=We:Tt>Math.PI&&(Tt-=We),vt<=Tt?a.theta=Math.max(vt,Math.min(Tt,a.theta)):a.theta=a.theta>(vt+Tt)/2?Math.max(vt,a.theta):Math.min(Tt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),U.setFromSpherical(a),U.applyQuaternion(ze),mt.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,d||Pe.distanceToSquared(n.object.position)>o||8*(1-Fe.dot(n.object.quaternion))>o?(n.dispatchEvent(Hc),Pe.copy(n.object.position),Fe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pe),n.domElement.removeEventListener("pointerdown",Y),n.domElement.removeEventListener("pointercancel",ke),n.domElement.removeEventListener("wheel",Ke),n.domElement.removeEventListener("pointermove",Se),n.domElement.removeEventListener("pointerup",De),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Oe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new kc,c=new kc;let l=1;const u=new se;let d=!1;const f=new Qe,g=new Qe,p=new Qe,m=new Qe,h=new Qe,x=new Qe,E=new Qe,w=new Qe,T=new Qe,R=[],C={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function S(U){c.theta-=U}function y(U){c.phi-=U}const z=function(){const U=new se;return function(ze,Pe){U.setFromMatrixColumn(Pe,0),U.multiplyScalar(-ze),u.add(U)}}(),F=function(){const U=new se;return function(ze,Pe){n.screenSpacePanning===!0?U.setFromMatrixColumn(Pe,1):(U.setFromMatrixColumn(Pe,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(ze),u.add(U)}}(),H=function(){const U=new se;return function(ze,Pe){const Fe=n.domElement;if(n.object.isPerspectiveCamera){const We=n.object.position;U.copy(We).sub(n.target);let qe=U.length();qe*=Math.tan(n.object.fov/2*Math.PI/180),z(2*ze*qe/Fe.clientHeight,n.object.matrix),F(2*Pe*qe/Fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(ze*(n.object.right-n.object.left)/n.object.zoom/Fe.clientWidth,n.object.matrix),F(Pe*(n.object.top-n.object.bottom)/n.object.zoom/Fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function B(U){n.object.isPerspectiveCamera?l/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(U){n.object.isPerspectiveCamera?l*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(U){f.set(U.clientX,U.clientY)}function ae(U){E.set(U.clientX,U.clientY)}function ee(U){m.set(U.clientX,U.clientY)}function de(U){g.set(U.clientX,U.clientY),p.subVectors(g,f).multiplyScalar(n.rotateSpeed);const Q=n.domElement;S(2*Math.PI*p.x/Q.clientHeight),y(2*Math.PI*p.y/Q.clientHeight),f.copy(g),n.update()}function X(U){w.set(U.clientX,U.clientY),T.subVectors(w,E),T.y>0?B(v()):T.y<0&&Z(v()),E.copy(w),n.update()}function j(U){h.set(U.clientX,U.clientY),x.subVectors(h,m).multiplyScalar(n.panSpeed),H(x.x,x.y),m.copy(h),n.update()}function W(U){U.deltaY<0?Z(v()):U.deltaY>0&&B(v()),n.update()}function he(U){let Q=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),Q=!0;break}Q&&(U.preventDefault(),n.update())}function Me(){if(R.length===1)f.set(R[0].pageX,R[0].pageY);else{const U=.5*(R[0].pageX+R[1].pageX),Q=.5*(R[0].pageY+R[1].pageY);f.set(U,Q)}}function J(){if(R.length===1)m.set(R[0].pageX,R[0].pageY);else{const U=.5*(R[0].pageX+R[1].pageX),Q=.5*(R[0].pageY+R[1].pageY);m.set(U,Q)}}function le(){const U=R[0].pageX-R[1].pageX,Q=R[0].pageY-R[1].pageY,ze=Math.sqrt(U*U+Q*Q);E.set(0,ze)}function fe(){n.enableZoom&&le(),n.enablePan&&J()}function ue(){n.enableZoom&&le(),n.enableRotate&&Me()}function _(U){if(R.length==1)g.set(U.pageX,U.pageY);else{const ze=Be(U),Pe=.5*(U.pageX+ze.x),Fe=.5*(U.pageY+ze.y);g.set(Pe,Fe)}p.subVectors(g,f).multiplyScalar(n.rotateSpeed);const Q=n.domElement;S(2*Math.PI*p.x/Q.clientHeight),y(2*Math.PI*p.y/Q.clientHeight),f.copy(g)}function b(U){if(R.length===1)h.set(U.pageX,U.pageY);else{const Q=Be(U),ze=.5*(U.pageX+Q.x),Pe=.5*(U.pageY+Q.y);h.set(ze,Pe)}x.subVectors(h,m).multiplyScalar(n.panSpeed),H(x.x,x.y),m.copy(h)}function D(U){const Q=Be(U),ze=U.pageX-Q.x,Pe=U.pageY-Q.y,Fe=Math.sqrt(ze*ze+Pe*Pe);w.set(0,Fe),T.set(0,Math.pow(w.y/E.y,n.zoomSpeed)),B(T.y),E.copy(w)}function V(U){n.enableZoom&&D(U),n.enablePan&&b(U)}function $(U){n.enableZoom&&D(U),n.enableRotate&&_(U)}function Y(U){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",Se),n.domElement.addEventListener("pointerup",De)),xe(U),U.pointerType==="touch"?I(U):Ie(U))}function Se(U){n.enabled!==!1&&(U.pointerType==="touch"?L(U):te(U))}function De(U){be(U),R.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",Se),n.domElement.removeEventListener("pointerup",De)),n.dispatchEvent(Wc),r=i.NONE}function ke(U){be(U)}function Ie(U){let Q;switch(U.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case lr.DOLLY:if(n.enableZoom===!1)return;ae(U),r=i.DOLLY;break;case lr.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;ee(U),r=i.PAN}else{if(n.enableRotate===!1)return;K(U),r=i.ROTATE}break;case lr.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;K(U),r=i.ROTATE}else{if(n.enablePan===!1)return;ee(U),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ao)}function te(U){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;de(U);break;case i.DOLLY:if(n.enableZoom===!1)return;X(U);break;case i.PAN:if(n.enablePan===!1)return;j(U);break}}function Ke(U){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(U.preventDefault(),n.dispatchEvent(ao),W(U),n.dispatchEvent(Wc))}function Oe(U){n.enabled===!1||n.enablePan===!1||he(U)}function I(U){switch(Te(U),R.length){case 1:switch(n.touches.ONE){case cr.ROTATE:if(n.enableRotate===!1)return;Me(),r=i.TOUCH_ROTATE;break;case cr.PAN:if(n.enablePan===!1)return;J(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case cr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;fe(),r=i.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ao)}function L(U){switch(Te(U),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;b(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$(U),n.update();break;default:r=i.NONE}}function pe(U){n.enabled!==!1&&U.preventDefault()}function xe(U){R.push(U)}function be(U){delete C[U.pointerId];for(let Q=0;Q<R.length;Q++)if(R[Q].pointerId==U.pointerId){R.splice(Q,1);return}}function Te(U){let Q=C[U.pointerId];Q===void 0&&(Q=new Qe,C[U.pointerId]=Q),Q.set(U.pageX,U.pageY)}function Be(U){const Q=U.pointerId===R[0].pointerId?R[1]:R[0];return C[Q.pointerId]}n.domElement.addEventListener("contextmenu",pe),n.domElement.addEventListener("pointerdown",Y),n.domElement.addEventListener("pointercancel",ke),n.domElement.addEventListener("wheel",Ke,{passive:!1}),this.update()}};function Y0(s){let e,t,n,i;return e=new td({props:{dispose:s[2],object:s[0]}}),n=new nd({props:{object:s[4],position:s[1]}}),n.$on("transform",s[5]),{c(){tt(e.$$.fragment),t=Et(),tt(n.$$.fragment)},l(r){nt(e.$$.fragment,r),t=At(r),nt(n.$$.fragment,r)},m(r,o){it(e,r,o),_t(r,t,o),it(n,r,o),i=!0},p(r,o){const a={};o[0]&4&&(a.dispose=r[2]),o[0]&1&&(a.object=r[0]),e.$set(a);const c={};o[0]&2&&(c.position=r[1]),n.$set(c)},i(r){i||(je(e.$$.fragment,r),je(n.$$.fragment,r),i=!0)},o(r){$e(e.$$.fragment,r),$e(n.$$.fragment,r),i=!1},d(r){rt(e,r),r&&He(t),rt(n,r)}}}function Z0(s,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:r=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:c=void 0}=e,{enablePan:l=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:d=void 0}=e,{keyPanSpeed:f=void 0}=e,{keys:g=void 0}=e,{maxAzimuthAngle:p=void 0}=e,{maxDistance:m=void 0}=e,{maxPolarAngle:h=void 0}=e,{maxZoom:x=void 0}=e,{minAzimuthAngle:E=void 0}=e,{minDistance:w=void 0}=e,{minPolarAngle:T=void 0}=e,{minZoom:R=void 0}=e,{mouseButtons:C=void 0}=e,{panSpeed:O=void 0}=e,{rotateSpeed:v=void 0}=e,{screenSpacePanning:S=void 0}=e,{touches:y=void 0}=e,{zoomSpeed:z=void 0}=e,{target:F=void 0}=e,{dispose:H=void 0}=e;const B=Qu();Sn(s,B,le=>t(30,n=le));const{renderer:Z,invalidate:K}=ji();if(!Z)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Bo))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const ae=da(),ee=()=>{K("Orbitcontrols: change event"),ae("change")},de=()=>ae("start"),X=()=>ae("end"),j=new K0(n,Z.domElement);Zn(n).orbitControls=j,j.addEventListener("change",ee),j.addEventListener("start",de),j.addEventListener("end",X),Ft(()=>{n&&delete Zn(n).orbitControls,j.removeEventListener("change",ee),j.removeEventListener("start",de),j.removeEventListener("end",X)});const{start:W,stop:he}=Ms(()=>j.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),Me=new Jt,J=()=>{t(0,j.target=Me.position,j),j.update(),K("OrbitControls: target changed")};return s.$$set=le=>{"autoRotate"in le&&t(6,i=le.autoRotate),"autoRotateSpeed"in le&&t(7,r=le.autoRotateSpeed),"dampingFactor"in le&&t(8,o=le.dampingFactor),"enableDamping"in le&&t(9,a=le.enableDamping),"enabled"in le&&t(10,c=le.enabled),"enablePan"in le&&t(11,l=le.enablePan),"enableRotate"in le&&t(12,u=le.enableRotate),"enableZoom"in le&&t(13,d=le.enableZoom),"keyPanSpeed"in le&&t(14,f=le.keyPanSpeed),"keys"in le&&t(15,g=le.keys),"maxAzimuthAngle"in le&&t(16,p=le.maxAzimuthAngle),"maxDistance"in le&&t(17,m=le.maxDistance),"maxPolarAngle"in le&&t(18,h=le.maxPolarAngle),"maxZoom"in le&&t(19,x=le.maxZoom),"minAzimuthAngle"in le&&t(20,E=le.minAzimuthAngle),"minDistance"in le&&t(21,w=le.minDistance),"minPolarAngle"in le&&t(22,T=le.minPolarAngle),"minZoom"in le&&t(23,R=le.minZoom),"mouseButtons"in le&&t(24,C=le.mouseButtons),"panSpeed"in le&&t(25,O=le.panSpeed),"rotateSpeed"in le&&t(26,v=le.rotateSpeed),"screenSpacePanning"in le&&t(27,S=le.screenSpacePanning),"touches"in le&&t(28,y=le.touches),"zoomSpeed"in le&&t(29,z=le.zoomSpeed),"target"in le&&t(1,F=le.target),"dispose"in le&&t(2,H=le.dispose)},s.$$.update=()=>{s.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,j.autoRotate=i,j),r!==void 0&&t(0,j.autoRotateSpeed=r,j),o!==void 0&&t(0,j.dampingFactor=o,j),a!==void 0&&t(0,j.enableDamping=a,j),c!==void 0&&t(0,j.enabled=c,j),l!==void 0&&t(0,j.enablePan=l,j),u!==void 0&&t(0,j.enableRotate=u,j),d!==void 0&&t(0,j.enableZoom=d,j),f!==void 0&&t(0,j.keyPanSpeed=f,j),g!==void 0&&t(0,j.keys=g,j),p!==void 0&&t(0,j.maxAzimuthAngle=p,j),m!==void 0&&t(0,j.maxDistance=m,j),h!==void 0&&t(0,j.maxPolarAngle=h,j),x!==void 0&&t(0,j.maxZoom=x,j),E!==void 0&&t(0,j.minAzimuthAngle=E,j),w!==void 0&&t(0,j.minDistance=w,j),T!==void 0&&t(0,j.minPolarAngle=T,j),R!==void 0&&t(0,j.minZoom=R,j),C!==void 0&&t(0,j.mouseButtons=C,j),O!==void 0&&t(0,j.panSpeed=O,j),v!==void 0&&t(0,j.rotateSpeed=v,j),S!==void 0&&t(0,j.screenSpacePanning=S,j),y!==void 0&&t(0,j.touches=y,j),z!==void 0&&t(0,j.zoomSpeed=z,j),j.update(),K("OrbitControls: props changed")),s.$$.dirty[0]&576&&(i||a?W():he())},[j,F,H,B,Me,J,i,r,o,a,c,l,u,d,f,g,p,m,h,x,E,w,T,R,C,O,v,S,y,z]}class Qo extends rn{constructor(e){super(),sn(this,e,Z0,Y0,an,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}function J0(s,e,t){let{pass:n}=e;const{addPass:i,removePass:r}=Jo();return i(n),Ms(()=>{},{debugFrameloopMessage:"Pass component"}),Ft(()=>{r(n)}),s.$$set=o=>{"pass"in o&&t(0,n=o.pass)},[n]}class Q0 extends rn{constructor(e){super(),sn(this,e,J0,null,an,{pass:0})}}function ev(s,e,t){let{object:n}=e,i=n,{interactive:r=!1}=e,{ignorePointer:o=!1}=e;const a=da(),{addInteractiveObject:c,removeInteractiveObject:l,addRaycastableObject:u,removeRaycastableObject:d}=Jo(),{invalidate:f}=ji(),g=m=>{d(m),l(m),delete Zn(m).eventDispatcher},p=(m,h,x)=>{Zn(m).eventDispatcher=a,h?(d(m),l(m)):(u(m),x?c(m):l(m))};return Ft(()=>{g(n),f("InteractiveObject: object removed")}),s.$$set=m=>{"object"in m&&t(0,n=m.object),"interactive"in m&&t(1,r=m.interactive),"ignorePointer"in m&&t(2,o=m.ignorePointer)},s.$$.update=()=>{s.$$.dirty&15&&(n!==i?(g(i),p(n,o,r),f("InteractiveObject: object changed"),t(3,i=n)):n===i&&(p(n,o,r),f("InteractiveObject: props changed")))},[n,r,o,i]}class tv extends rn{constructor(e){super(),sn(this,e,ev,null,an,{object:0,interactive:1,ignorePointer:2})}}const id=new Jt;id.scale.set(0,0,0);id.matrix;new $t().fromArray(new Array(16).fill(0));new Ae(16777215);const rd=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},oo=Symbol("initialValueBeforeAttach"),nv=()=>{const{invalidate:s}=ji();let e=!1,t=oo,n,i,r;const o=(c,l,u)=>{if(a(),!u){const d=c;((d==null?void 0:d.isMaterial)||!1)&&(u="material"),((d==null?void 0:d.isBufferGeometry)||(d==null?void 0:d.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(l,c);else{const{target:d,key:f}=rd(l,u);t=d[f],d[f]=c,i=d,r=f}e=!0,s()}},a=()=>{e&&(n?(n(),n=void 0):i&&r&&t!==oo&&(i[r]=t,t=oo,i=void 0,r=void 0),e=!1,s())};return Ft(()=>{a()}),{update:o}},iv=s=>s&&s.isCamera,sd=s=>s&&s.isOrthographicCamera,ad=s=>s&&s.isPerspectiveCamera,rv=s=>ad(s)||sd(s),sv=()=>{const{invalidate:s,size:e}=ji(),{setCamera:t}=Jo();let n,i;Ft(()=>{i==null||i()});const r=c=>{n&&(sd(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()):ad(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()))};return{update:(c,l)=>{if(i==null||i(),l||!rv(c)){n=void 0;return}n=c,i=e.subscribe(r)},makeDefaultCamera:(c,l)=>{!iv(c)||!l||(t(c),s())}}},jc=s=>!!(s!=null&&s.addEventListener),av=()=>{const s=da(),e=Fd(),t=f=>{f!=null&&f.type&&s(f.type,f)},n=(f,g)=>{jc(f)&&g.forEach(p=>{f.removeEventListener(p,t)})},i=(f,g)=>{jc(f)&&g.forEach(p=>{f.addEventListener(p,t)})};let r=[],o;const a=vn([]),c=a.subscribe(f=>{n(o,r),i(o,f),r=f});Ft(c);const l=vn(),u=l.subscribe(f=>{n(o,r),i(f,r),o=f});return Ft(u),Ft(()=>{n(o,r)}),sa(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:f=>{l.set(f)}}},ov=["$$scope","$$slots","type","args","attach","instance"],lv=["fov","aspect","near","far","left","right","top","bottom","zoom"],cv=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,uv=()=>{const{invalidate:s}=ji(),e=new Map,t=(i,r,o,a)=>{var u,d;if(cv(o)){const f=e.get(r);if(f&&f.instance===i&&f.value===o)return;e.set(r,{instance:i,value:o})}const{key:c,target:l}=rd(i,r);if(!Array.isArray(o)&&typeof o=="number"&&typeof((u=l[c])==null?void 0:u.setScalar)=="function")l[c].setScalar(o);else if(typeof((d=l[c])==null?void 0:d.set)=="function")Array.isArray(o)?l[c].set(...o):l[c].set(o);else{if(l[c]=o,a.manualCamera)return;lv.includes(c)&&(l.isPerspectiveCamera||l.isOrthographicCamera)&&l.updateProjectionMatrix()}};return{updateProps:(i,r,o)=>{for(const a in r)ov.includes(a)||t(i,a,r[a],o),s()}}},dv=s=>({ref:s&1}),qc=s=>({ref:s[0]}),fv=s=>({ref:s&1}),Xc=s=>({ref:s[0]});function $c(s){let e,t;return e=new td({props:{object:s[0],dispose:s[1]}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.object=n[0]),i&2&&(r.dispose=n[1]),e.$set(r)},i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function hv(s){let e;const t=s[12].default,n=kr(t,s,s[13],qc);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&8193)&&zr(n,t,i,i[13],e?Nr(t,i[13],r,dv):Or(i[13]),qc)},i(i){e||(je(n,i),e=!0)},o(i){$e(n,i),e=!1},d(i){n&&n.d(i)}}}function pv(s){let e,t;return e=new ed({props:{object:s[0],$$slots:{default:[mv]},$$scope:{ctx:s}}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.object=n[0]),i&8193&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function mv(s){let e;const t=s[12].default,n=kr(t,s,s[13],Xc);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&8193)&&zr(n,t,i,i[13],e?Nr(t,i[13],r,fv):Or(i[13]),Xc)},i(i){e||(je(n,i),e=!0)},o(i){$e(n,i),e=!1},d(i){n&&n.d(i)}}}function gv(s){let e=s[4](s[0]),t,n,i,r,o,a,c=e&&$c(s);const l=[pv,hv],u=[];function d(f,g){return g&1&&(n=null),n==null&&(n=!!f[3](f[0])),n?0:1}return i=d(s,-1),r=u[i]=l[i](s),{c(){c&&c.c(),t=Et(),r.c(),o=fl()},l(f){c&&c.l(f),t=At(f),r.l(f),o=fl()},m(f,g){c&&c.m(f,g),_t(f,t,g),u[i].m(f,g),_t(f,o,g),a=!0},p(f,[g]){g&1&&(e=f[4](f[0])),e?c?(c.p(f,g),g&1&&je(c,1)):(c=$c(f),c.c(),je(c,1),c.m(t.parentNode,t)):c&&(_o(),$e(c,1,1,()=>{c=null}),vo());let p=i;i=d(f,g),i===p?u[i].p(f,g):(_o(),$e(u[p],1,1,()=>{u[p]=null}),vo(),r=u[i],r?r.p(f,g):(r=u[i]=l[i](f),r.c()),je(r,1),r.m(o.parentNode,o))},i(f){a||(je(c),je(r),a=!0)},o(f){$e(c),$e(r),a=!1},d(f){c&&c.d(f),f&&He(t),u[i].d(f),f&&He(o)}}}function _v(s,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=hl(e,n),r,{$$slots:o={},$$scope:a}=e,{type:c}=e,{args:l=void 0}=e,{attach:u=void 0}=e,{manual:d=void 0}=e,{makeDefault:f=void 0}=e,{dispose:g=void 0}=e;const p=Ai("threlte-hierarchical-parent-context");Sn(s,p,y=>t(11,r=y));const m=y=>typeof y=="function"&&/^\s*class\s+/.test(y.toString()),h=y=>Array.isArray(y);let{ref:x=m(c)&&h(l)?new c(...l):m(c)?new c:c}=e,E=!1;const w=vn(x);si("threlte-hierarchical-parent-context",w);const T=uv(),R=sv(),C=nv(),O=av(),v=y=>!!y.isObject3D,S=y=>y.dispose!==void 0;return s.$$set=y=>{e=pl(pl({},e),Ud(y)),t(21,i=hl(e,n)),"type"in y&&t(5,c=y.type),"args"in y&&t(6,l=y.args),"attach"in y&&t(7,u=y.attach),"manual"in y&&t(8,d=y.manual),"makeDefault"in y&&t(9,f=y.makeDefault),"dispose"in y&&t(1,g=y.dispose),"ref"in y&&t(0,x=y.ref),"$$scope"in y&&t(13,a=y.$$scope)},s.$$.update=()=>{s.$$.dirty&1120&&(E?t(0,x=m(c)&&h(l)?new c(...l):m(c)?new c:c):t(10,E=!0)),s.$$.dirty&1&&w.set(x),T.updateProps(x,i,{manualCamera:d}),s.$$.dirty&257&&R.update(x,d),s.$$.dirty&513&&R.makeDefaultCamera(x,f),s.$$.dirty&2177&&C.update(x,r,u),s.$$.dirty&1&&O.updateRef(x)},[x,g,p,v,S,c,l,u,d,f,E,r,o,a]}class fn extends rn{constructor(e){super(),sn(this,e,_v,gv,an,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function vv(s){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Kc extends rn{constructor(e){super(),sn(this,e,vv,null,an,{})}}new Proxy(Kc,{get(s,e){return s[e]||Kc}});$0(Pc,()=>new Pc(ju));var od=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],xv=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],ld=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],yv=od,bv=yv.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Co=ld;Co=Co.slice().filter(function(s){return!/^(gl\_|texture)/.test(s)});var wv=Co.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),Sv=Rv,Mv=od,Yc=xv,Ev=ld,Av=bv,Tv=wv,ri=999,Zc=9999,lo=0,co=1,Jc=2,Qc=3,eu=4,os=5,Cv=6,Pv=7,Lv=8,tu=9,Dv=10,nu=11,Iv=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function Rv(s){var e=0,t=0,n=ri,i,r,o=[],a=[],c=1,l=0,u=0,d=!1,f=!1,g="",p;s=s||{};var m=Ev,h=Mv;s.version==="300 es"&&(m=Tv,h=Av);for(var x={},E={},e=0;e<m.length;e++)x[m[e]]=!0;for(var e=0;e<h.length;e++)E[h[e]]=!0;return function(ae){return a=[],ae!==null?T(ae):R()};function w(ae){ae.length&&a.push({type:Iv[n],data:ae,position:u,line:c,column:l})}function T(ae){e=0,ae.toString&&(ae=ae.toString()),g+=ae.replace(/\r\n/g,`
`),p=g.length;for(var ee;i=g[e],e<p;){switch(ee=e,n){case lo:e=y();break;case co:e=S();break;case Jc:e=v();break;case Qc:e=z();break;case eu:e=B();break;case nu:e=H();break;case os:e=Z();break;case Zc:e=K();break;case tu:e=O();break;case ri:e=C();break}if(ee!==e)switch(g[ee]){case`
`:l=0,++c;break;default:++l;break}}return t+=e,g=g.slice(e),a}function R(ae){return o.length&&w(o.join("")),n=Dv,w("(eof)"),a}function C(){return o=o.length?[]:o,r==="/"&&i==="*"?(u=t+e-1,n=lo,r=i,e+1):r==="/"&&i==="/"?(u=t+e-1,n=co,r=i,e+1):i==="#"?(n=Jc,u=t+e,e):/\s/.test(i)?(n=tu,u=t+e,e):(d=/\d/.test(i),f=/[^\w_]/.test(i),u=t+e,n=d?eu:f?Qc:Zc,e)}function O(){return/[^\s]/g.test(i)?(w(o.join("")),n=ri,e):(o.push(i),r=i,e+1)}function v(){return(i==="\r"||i===`
`)&&r!=="\\"?(w(o.join("")),n=ri,e):(o.push(i),r=i,e+1)}function S(){return v()}function y(){return i==="/"&&r==="*"?(o.push(i),w(o.join("")),n=ri,e+1):(o.push(i),r=i,e+1)}function z(){if(r==="."&&/\d/.test(i))return n=os,e;if(r==="/"&&i==="*")return n=lo,e;if(r==="/"&&i==="/")return n=co,e;if(i==="."&&o.length){for(;F(o););return n=os,e}if(i===";"||i===")"||i==="("){if(o.length)for(;F(o););return w(i),n=ri,e+1}var ae=o.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||ae){for(;F(o););return n=ri,e}return o.push(i),r=i,e+1}function F(ae){var ee=0,de,X;do{if(de=Yc.indexOf(ae.slice(0,ae.length+ee).join("")),X=Yc[de],de===-1){if(ee--+ae.length>0)continue;X=ae.slice(0,1).join("")}return w(X),u+=X.length,o=o.slice(X.length),o.length}while(1)}function H(){return/[^a-fA-F0-9]/.test(i)?(w(o.join("")),n=ri,e):(o.push(i),r=i,e+1)}function B(){return i==="."||/[eE]/.test(i)?(o.push(i),n=os,r=i,e+1):i==="x"&&o.length===1&&o[0]==="0"?(n=nu,o.push(i),r=i,e+1):/[^\d]/.test(i)?(w(o.join("")),n=ri,e):(o.push(i),r=i,e+1)}function Z(){return i==="f"&&(o.push(i),r=i,e+=1),/[eE]/.test(i)||(i==="-"||i==="+")&&/[eE]/.test(r)?(o.push(i),r=i,e+1):/[^\d]/.test(i)?(w(o.join("")),n=ri,e):(o.push(i),r=i,e+1)}function K(){if(/[^\d\w_]/.test(i)){var ae=o.join("");return E[ae]?n=Lv:x[ae]?n=Pv:n=Cv,w(o.join("")),n=ri,e}return o.push(i),r=i,e+1}}var kv=Sv,Po=zv;function zv(s,e){var t=kv(e),n=[];return n=n.concat(t(s)),n=n.concat(t(null)),n}var uo,iu;function Ov(){if(iu)return uo;iu=1,uo=s;function s(e){for(var t=!1,n=0,i=0;i<e.length;i++)switch(t=t||e[i].type==="keyword"&&e[i].data==="for",e[i].data){case"(":e[i].depth=t?n++:n;break;case"{":e[i].depth=t?n:n++,t=!1;break;case"}":e[i].depth=--n;break;default:e[i].depth=n}for(var i=0;i<e.length;i++){var r=e[i],o=i+1;if(!(r.type!=="ident"&&r.type!=="keyword")&&(a(),e[o].type==="ident"&&(a(),o++,e[o].data==="("))){for(;e[o]&&e[o].data!==";"&&e[o].data!=="{";)e[o++].depth++;e[o]&&e[o].data==="{"&&e[o].depth++}}return e;function a(){for(;e[o]&&(e[o].type==="whitespace"||e[o].data==="["||e[o].data==="]"||e[o].data==="integer");)o++}}return uo}var fo,ru;function Nv(){if(ru)return fo;ru=1,fo=s;function s(e){var t=[0],n=t[0],i=0;if(!e||!e.length)return e;if(!("depth"in e[0]))throw new Error("glsl-token-scope: No scope depth defined on tokens! Use glsl-token-depth on these tokens first");for(var r=0;r<e.length;r++){var o=e[r],a=o.depth;a>i?t.push(++n):a<i&&t.splice(-1,1),o.scope=t[t.length-1],o.stack=t.slice(),i=o.depth}return e}return fo}var ho,su;function Fv(){if(su)return ho;su=1,ho=s;function s(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.property=!1,n.type==="ident"){for(var i=t;e[--i]&&e[i].type==="whitespace";);e[i]&&e[i].type==="operator"&&e[i].data==="."&&(n.property=!0)}}return e}return ho}var po,au;function Uv(){return au||(au=1,po={"<<=":!0,">>=":!0,"++":!0,"--":!0,"+=":!0,"-=":!0,"*=":!0,"/=":!0,"%=":!0,"&=":!0,"^=":!0,"|=":!0,"=":!0}),po}var mo,ou;function Bv(){return ou||(ou=1,mo={precision:!0,highp:!0,mediump:!0,lowp:!0,attribute:!0,const:!0,uniform:!0,varying:!0,break:!0,continue:!0,do:!0,for:!0,while:!0,if:!0,else:!0,in:!0,out:!0,inout:!0,true:!0,false:!0,return:!0}),mo}var go,lu;function Vv(){if(lu)return go;lu=1;var s=Uv(),e=Bv();go=t;function t(n){for(var i=0,r=0;r<n.length;r++){var o=n[r],a=o.type;o.assignment=!1,o.declaration=!1,!(a!=="ident"&&a!=="builtin")&&(i=r+1,u(),n[i].type==="operator"&&s[n[i].data]&&(o.assignment=!0))}for(var r=0;r<n.length;r++){var c=n[r],a=c.type,l=c.data;if(c.declaration=!1,a==="keyword"){if(e[l])continue}else if(a!=="ident")continue;if(i=r+1,d(),n[i].type==="ident"){if(n[i++].declaration=!0,d(),n[i].data==="("){for(i++,u();n[i]&&n[i].data!==")"&&!(n[i].type!=="keyword"&&n[i].type!=="ident");)i++,u(),n[i].type==="ident"&&(n[i++].declaration=!0,u(),d(),u(),n[i].data===","&&(i++,u()));r=i;continue}for(;n[i]&&n[i].data!==";";)n[i].data===","?(i++,u(),(n[i].declaration=n[i].type==="ident")&&i++):(u(),f(),u(),i++);r=i}}for(var r=0;r<n.length;r++){var o=n[r];if(o.type==="keyword"&&o.data==="struct"&&(i=r+1,u(),n[i].type==="ident"&&(i++,u(),n[i++].data==="{"))){for(u();n[i].type==="ident"||n[i].type==="keyword";){do i++,u(),n[i].structMember=!0,n[i].declaration=!1,i++,d();while(n[i].data===",");n[i].data===";"&&i++,u()}if(i++,u(),n[i].type==="ident")for(n[i].declaration=!0,u();n[++i].data===",";)u(),i++,u(),n[i].type==="ident"&&(n[i].declaration=!0),u()}}return n;function u(g){for(;n[i]&&n[i].type==="whitespace";)i++}function d(){for(;n[i]&&(n[i].type==="integer"||n[i].data==="["||n[i].data==="]"||n[i].type==="whitespace");)i++}function f(){if(n[i]&&n[i].data==="("){var g=0;do{if(n[i].data===";")break;n[i].data==="("&&g++,n[i].data===")"&&g--}while(g&&n[++i])}}}return go}var cu=Gv;function Gv(s,e){Ov()(s),Nv()(s),Fv()(s),Vv()(s);for(var t=Wv(s),n=e||Hv(),i={},r=0;r<s.length;r++){var o=s[r],a=o.stack,c=o.data;if(o.descoped=!1,o.type==="ident"&&!o.property&&!o.structMember){for(var l=!1,u=a.length-1;u>=0;u--){var d=t[a[u]];if(d&&d[c]){if(l=!0,u)break;o.descoped=o.data,o.data=i[c]=i[c]||n(c,o)||o.data}}l||(o.descoped=o.data,o.data=i[c]=i[c]||n(c,o)||o.data)}}return s}function Hv(){var s=0;return function(t){return t+"_"+(s++).toString(36)}}function Wv(s){for(var e={},t=0;t<s.length;t++){var n=s[t];n.declaration&&(e[n.scope]=e[n.scope]||{},e[n.scope][n.data]=n)}return e}var ms=jv;function jv(s){for(var e=[],t=0;t<s.length;t++)s[t].type!=="eof"&&e.push(s[t].data);return e.join("")}var Lo=qv;function qv(s){var e=null,t=null,n=0,i=0,r=0,o=0,a=0,c=[],l,u,d;for(l=0,u;l<s.length;l++)if(d=s[l],d.data==="{"){if(n&&n++||(u=g(l,Ni(")"),Ni()),u<0)||(o=u,u=g(u,Ni("("),Ni(")")),u<0)||(a=u,u=g(u,ls),u<0)||s[u].type!=="ident"||(t=s[u].data,u=g(u,ls),u<0))continue;n=1,i=l,e=s[u].data,r=u;var f=g(u,ls);switch(s[f]&&s[f].data){case"lowp":case"highp":case"mediump":r=f}}else if(n&&d.data==="}"){if(--n)continue;c.push({name:t,type:e,body:[i+1,l],args:[a,o+1],outer:[r,l+1]})}for(l=0;l<s.length;l++)if(d=s[l],d.data===";"){if(u=g(l,Ni(")"),Ni()),u<0||(o=u,u=g(u,Ni("("),Ni(")")),u<0)||(a=u,u=g(u,ls),u<0)||s[u].type!=="ident"||(t=s[u].data,u=g(u,ls),u<0)||s[u].type==="operator"||s[u].data==="return")continue;e=s[u].data,c.push({name:t,type:e,body:!1,args:[a,o+1],outer:[u,l+1]})}return c.sort(function(p,m){return p.outer[0]-m.outer[0]});function g(p,m,h){for(var x=p-1;x>=0;x--){if(m(s[x]))return x;if(h&&h(s[x]))return-1}return-1}}function Ni(s){return function(e){return e.type==="operator"&&(!s||e.data===s)}}function ls(s){return s.type!=="whitespace"}function na(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var cd={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function o(l,u){if(!i[l]){if(!n[l]){var d=typeof na=="function"&&na;if(!u&&d)return d(l,!0);if(a)return a(l,!0);throw new Error("Cannot find module '"+l+"'")}u=i[l]={exports:{}},n[l][0].call(u.exports,function(f){var g=n[l][1][f];return o(g||f)},u,u.exports,t,n,i,r)}return i[l].exports}for(var a=typeof na=="function"&&na,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(t,n,i){(function(r,o,a,c,l,u,d,f,g){var p=t("crypto");function m(C,O){O=E(C,O);var v;return(v=O.algorithm!=="passthrough"?p.createHash(O.algorithm):new R).write===void 0&&(v.write=v.update,v.end=v.update),T(O,v).dispatch(C),v.update||v.end(""),v.digest?v.digest(O.encoding==="buffer"?void 0:O.encoding):(C=v.read(),O.encoding!=="buffer"?C.toString(O.encoding):C)}(i=n.exports=m).sha1=function(C){return m(C)},i.keys=function(C){return m(C,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(C){return m(C,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(C){return m(C,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var h=p.getHashes?p.getHashes().slice():["sha1","md5"],x=(h.push("passthrough"),["buffer","hex","binary","base64"]);function E(C,O){var v={};if(v.algorithm=(O=O||{}).algorithm||"sha1",v.encoding=O.encoding||"hex",v.excludeValues=!!O.excludeValues,v.algorithm=v.algorithm.toLowerCase(),v.encoding=v.encoding.toLowerCase(),v.ignoreUnknown=O.ignoreUnknown===!0,v.respectType=O.respectType!==!1,v.respectFunctionNames=O.respectFunctionNames!==!1,v.respectFunctionProperties=O.respectFunctionProperties!==!1,v.unorderedArrays=O.unorderedArrays===!0,v.unorderedSets=O.unorderedSets!==!1,v.unorderedObjects=O.unorderedObjects!==!1,v.replacer=O.replacer||void 0,v.excludeKeys=O.excludeKeys||void 0,C===void 0)throw new Error("Object argument required.");for(var S=0;S<h.length;++S)h[S].toLowerCase()===v.algorithm.toLowerCase()&&(v.algorithm=h[S]);if(h.indexOf(v.algorithm)===-1)throw new Error('Algorithm "'+v.algorithm+'"  not supported. supported values: '+h.join(", "));if(x.indexOf(v.encoding)===-1&&v.algorithm!=="passthrough")throw new Error('Encoding "'+v.encoding+'"  not supported. supported values: '+x.join(", "));return v}function w(C){if(typeof C=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(C))!=null}function T(C,O,v){v=v||[];function S(y){return O.update?O.update(y,"utf8"):O.write(y,"utf8")}return{dispatch:function(y){return this["_"+((y=C.replacer?C.replacer(y):y)===null?"null":typeof y)](y)},_object:function(y){var z,F=Object.prototype.toString.call(y),H=/\[object (.*)\]/i.exec(F);if(H=(H=H?H[1]:"unknown:["+F+"]").toLowerCase(),0<=(F=v.indexOf(y)))return this.dispatch("[CIRCULAR:"+F+"]");if(v.push(y),a!==void 0&&a.isBuffer&&a.isBuffer(y))return S("buffer:"),S(y);if(H==="object"||H==="function"||H==="asyncfunction")return F=Object.keys(y),C.unorderedObjects&&(F=F.sort()),C.respectType===!1||w(y)||F.splice(0,0,"prototype","__proto__","constructor"),C.excludeKeys&&(F=F.filter(function(B){return!C.excludeKeys(B)})),S("object:"+F.length+":"),z=this,F.forEach(function(B){z.dispatch(B),S(":"),C.excludeValues||z.dispatch(y[B]),S(",")});if(!this["_"+H]){if(C.ignoreUnknown)return S("["+H+"]");throw new Error('Unknown object type "'+H+'"')}this["_"+H](y)},_array:function(y,B){B=B!==void 0?B:C.unorderedArrays!==!1;var F=this;if(S("array:"+y.length+":"),!B||y.length<=1)return y.forEach(function(Z){return F.dispatch(Z)});var H=[],B=y.map(function(Z){var K=new R,ae=v.slice();return T(C,K,ae).dispatch(Z),H=H.concat(ae.slice(v.length)),K.read().toString()});return v=v.concat(H),B.sort(),this._array(B,!1)},_date:function(y){return S("date:"+y.toJSON())},_symbol:function(y){return S("symbol:"+y.toString())},_error:function(y){return S("error:"+y.toString())},_boolean:function(y){return S("bool:"+y.toString())},_string:function(y){S("string:"+y.length+":"),S(y.toString())},_function:function(y){S("fn:"),w(y)?this.dispatch("[native]"):this.dispatch(y.toString()),C.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(y.name)),C.respectFunctionProperties&&this._object(y)},_number:function(y){return S("number:"+y.toString())},_xml:function(y){return S("xml:"+y.toString())},_null:function(){return S("Null")},_undefined:function(){return S("Undefined")},_regexp:function(y){return S("regex:"+y.toString())},_uint8array:function(y){return S("uint8array:"),this.dispatch(Array.prototype.slice.call(y))},_uint8clampedarray:function(y){return S("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(y))},_int8array:function(y){return S("int8array:"),this.dispatch(Array.prototype.slice.call(y))},_uint16array:function(y){return S("uint16array:"),this.dispatch(Array.prototype.slice.call(y))},_int16array:function(y){return S("int16array:"),this.dispatch(Array.prototype.slice.call(y))},_uint32array:function(y){return S("uint32array:"),this.dispatch(Array.prototype.slice.call(y))},_int32array:function(y){return S("int32array:"),this.dispatch(Array.prototype.slice.call(y))},_float32array:function(y){return S("float32array:"),this.dispatch(Array.prototype.slice.call(y))},_float64array:function(y){return S("float64array:"),this.dispatch(Array.prototype.slice.call(y))},_arraybuffer:function(y){return S("arraybuffer:"),this.dispatch(new Uint8Array(y))},_url:function(y){return S("url:"+y.toString())},_map:function(y){return S("map:"),y=Array.from(y),this._array(y,C.unorderedSets!==!1)},_set:function(y){return S("set:"),y=Array.from(y),this._array(y,C.unorderedSets!==!1)},_file:function(y){return S("file:"),this.dispatch([y.name,y.size,y.type,y.lastModfied])},_blob:function(){if(C.ignoreUnknown)return S("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return S("domwindow")},_bigint:function(y){return S("bigint:"+y.toString())},_process:function(){return S("process")},_timer:function(){return S("timer")},_pipe:function(){return S("pipe")},_tcp:function(){return S("tcp")},_udp:function(){return S("udp")},_tty:function(){return S("tty")},_statwatcher:function(){return S("statwatcher")},_securecontext:function(){return S("securecontext")},_connection:function(){return S("connection")},_zlib:function(){return S("zlib")},_context:function(){return S("context")},_nodescript:function(){return S("nodescript")},_httpparser:function(){return S("httpparser")},_dataview:function(){return S("dataview")},_signal:function(){return S("signal")},_fsevent:function(){return S("fsevent")},_tlswrap:function(){return S("tlswrap")}}}function R(){return{buf:"",write:function(C){this.buf+=C},end:function(C){this.buf+=C},read:function(){return this.buf}}}i.writeToStream=function(C,O,v){return v===void 0&&(v=O,O={}),T(O=E(C,O),v).dispatch(C)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,i){(function(r,o,a,c,l,u,d,f,g){(function(p){var m=typeof Uint8Array<"u"?Uint8Array:Array,h="+".charCodeAt(0),x="/".charCodeAt(0),E="0".charCodeAt(0),w="a".charCodeAt(0),T="A".charCodeAt(0),R="-".charCodeAt(0),C="_".charCodeAt(0);function O(v){return v=v.charCodeAt(0),v===h||v===R?62:v===x||v===C?63:v<E?-1:v<E+10?v-E+26+26:v<T+26?v-T:v<w+26?v-w+26:void 0}p.toByteArray=function(v){var S,y;if(0<v.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var z=v.length,z=v.charAt(z-2)==="="?2:v.charAt(z-1)==="="?1:0,F=new m(3*v.length/4-z),H=0<z?v.length-4:v.length,B=0;function Z(K){F[B++]=K}for(S=0;S<H;S+=4,0)Z((16711680&(y=O(v.charAt(S))<<18|O(v.charAt(S+1))<<12|O(v.charAt(S+2))<<6|O(v.charAt(S+3))))>>16),Z((65280&y)>>8),Z(255&y);return z==2?Z(255&(y=O(v.charAt(S))<<2|O(v.charAt(S+1))>>4)):z==1&&(Z((y=O(v.charAt(S))<<10|O(v.charAt(S+1))<<4|O(v.charAt(S+2))>>2)>>8&255),Z(255&y)),F},p.fromByteArray=function(v){var S,y,z,F,H=v.length%3,B="";function Z(K){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(K)}for(S=0,z=v.length-H;S<z;S+=3)y=(v[S]<<16)+(v[S+1]<<8)+v[S+2],B+=Z((F=y)>>18&63)+Z(F>>12&63)+Z(F>>6&63)+Z(63&F);switch(H){case 1:B=(B+=Z((y=v[v.length-1])>>2))+Z(y<<4&63)+"==";break;case 2:B=(B=(B+=Z((y=(v[v.length-2]<<8)+v[v.length-1])>>10))+Z(y>>4&63))+Z(y<<2&63)+"="}return B}})(i===void 0?this.base64js={}:i)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,i){(function(r,o,h,c,l,u,d,f,g){var p=t("base64-js"),m=t("ieee754");function h(_,b,D){if(!(this instanceof h))return new h(_,b,D);var V,$,Y,Se,De=typeof _;if(b==="base64"&&De=="string")for(_=(Se=_).trim?Se.trim():Se.replace(/^\s+|\s+$/g,"");_.length%4!=0;)_+="=";if(De=="number")V=ee(_);else if(De=="string")V=h.byteLength(_,b);else{if(De!="object")throw new Error("First argument needs to be a number, array or string.");V=ee(_.length)}if(h._useTypedArrays?$=h._augment(new Uint8Array(V)):(($=this).length=V,$._isBuffer=!0),h._useTypedArrays&&typeof _.byteLength=="number")$._set(_);else if(de(Se=_)||h.isBuffer(Se)||Se&&typeof Se=="object"&&typeof Se.length=="number")for(Y=0;Y<V;Y++)h.isBuffer(_)?$[Y]=_.readUInt8(Y):$[Y]=_[Y];else if(De=="string")$.write(_,0,b);else if(De=="number"&&!h._useTypedArrays&&!D)for(Y=0;Y<V;Y++)$[Y]=0;return $}function x(_,b,D,V){return h._charsWritten=he(function($){for(var Y=[],Se=0;Se<$.length;Se++)Y.push(255&$.charCodeAt(Se));return Y}(b),_,D,V)}function E(_,b,D,V){return h._charsWritten=he(function($){for(var Y,Se,De=[],ke=0;ke<$.length;ke++)Se=$.charCodeAt(ke),Y=Se>>8,Se=Se%256,De.push(Se),De.push(Y);return De}(b),_,D,V)}function w(_,b,D){var V="";D=Math.min(_.length,D);for(var $=b;$<D;$++)V+=String.fromCharCode(_[$]);return V}function T(_,b,D,Y){Y||(ue(typeof D=="boolean","missing or invalid endian"),ue(b!=null,"missing offset"),ue(b+1<_.length,"Trying to read beyond buffer length"));var $,Y=_.length;if(!(Y<=b))return D?($=_[b],b+1<Y&&($|=_[b+1]<<8)):($=_[b]<<8,b+1<Y&&($|=_[b+1])),$}function R(_,b,D,Y){Y||(ue(typeof D=="boolean","missing or invalid endian"),ue(b!=null,"missing offset"),ue(b+3<_.length,"Trying to read beyond buffer length"));var $,Y=_.length;if(!(Y<=b))return D?(b+2<Y&&($=_[b+2]<<16),b+1<Y&&($|=_[b+1]<<8),$|=_[b],b+3<Y&&($+=_[b+3]<<24>>>0)):(b+1<Y&&($=_[b+1]<<16),b+2<Y&&($|=_[b+2]<<8),b+3<Y&&($|=_[b+3]),$+=_[b]<<24>>>0),$}function C(_,b,D,V){if(V||(ue(typeof D=="boolean","missing or invalid endian"),ue(b!=null,"missing offset"),ue(b+1<_.length,"Trying to read beyond buffer length")),!(_.length<=b))return V=T(_,b,D,!0),32768&V?-1*(65535-V+1):V}function O(_,b,D,V){if(V||(ue(typeof D=="boolean","missing or invalid endian"),ue(b!=null,"missing offset"),ue(b+3<_.length,"Trying to read beyond buffer length")),!(_.length<=b))return V=R(_,b,D,!0),2147483648&V?-1*(4294967295-V+1):V}function v(_,b,D,V){return V||(ue(typeof D=="boolean","missing or invalid endian"),ue(b+3<_.length,"Trying to read beyond buffer length")),m.read(_,b,D,23,4)}function S(_,b,D,V){return V||(ue(typeof D=="boolean","missing or invalid endian"),ue(b+7<_.length,"Trying to read beyond buffer length")),m.read(_,b,D,52,8)}function y(_,b,D,V,$){if($||(ue(b!=null,"missing value"),ue(typeof V=="boolean","missing or invalid endian"),ue(D!=null,"missing offset"),ue(D+1<_.length,"trying to write beyond buffer length"),J(b,65535)),$=_.length,!($<=D))for(var Y=0,Se=Math.min($-D,2);Y<Se;Y++)_[D+Y]=(b&255<<8*(V?Y:1-Y))>>>8*(V?Y:1-Y)}function z(_,b,D,V,$){if($||(ue(b!=null,"missing value"),ue(typeof V=="boolean","missing or invalid endian"),ue(D!=null,"missing offset"),ue(D+3<_.length,"trying to write beyond buffer length"),J(b,4294967295)),$=_.length,!($<=D))for(var Y=0,Se=Math.min($-D,4);Y<Se;Y++)_[D+Y]=b>>>8*(V?Y:3-Y)&255}function F(_,b,D,V,$){$||(ue(b!=null,"missing value"),ue(typeof V=="boolean","missing or invalid endian"),ue(D!=null,"missing offset"),ue(D+1<_.length,"Trying to write beyond buffer length"),le(b,32767,-32768)),_.length<=D||y(_,0<=b?b:65535+b+1,D,V,$)}function H(_,b,D,V,$){$||(ue(b!=null,"missing value"),ue(typeof V=="boolean","missing or invalid endian"),ue(D!=null,"missing offset"),ue(D+3<_.length,"Trying to write beyond buffer length"),le(b,2147483647,-2147483648)),_.length<=D||z(_,0<=b?b:4294967295+b+1,D,V,$)}function B(_,b,D,V,$){$||(ue(b!=null,"missing value"),ue(typeof V=="boolean","missing or invalid endian"),ue(D!=null,"missing offset"),ue(D+3<_.length,"Trying to write beyond buffer length"),fe(b,34028234663852886e22,-34028234663852886e22)),_.length<=D||m.write(_,b,D,V,23,4)}function Z(_,b,D,V,$){$||(ue(b!=null,"missing value"),ue(typeof V=="boolean","missing or invalid endian"),ue(D!=null,"missing offset"),ue(D+7<_.length,"Trying to write beyond buffer length"),fe(b,17976931348623157e292,-17976931348623157e292)),_.length<=D||m.write(_,b,D,V,52,8)}i.Buffer=h,i.SlowBuffer=h,i.INSPECT_MAX_BYTES=50,h.poolSize=8192,h._useTypedArrays=function(){try{var _=new ArrayBuffer(0),b=new Uint8Array(_);return b.foo=function(){return 42},b.foo()===42&&typeof b.subarray=="function"}catch{return!1}}(),h.isEncoding=function(_){switch(String(_).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.isBuffer=function(_){return!(_==null||!_._isBuffer)},h.byteLength=function(_,b){var D;switch(_+="",b||"utf8"){case"hex":D=_.length/2;break;case"utf8":case"utf-8":D=j(_).length;break;case"ascii":case"binary":case"raw":D=_.length;break;case"base64":D=W(_).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":D=2*_.length;break;default:throw new Error("Unknown encoding")}return D},h.concat=function(_,b){if(ue(de(_),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),_.length===0)return new h(0);if(_.length===1)return _[0];if(typeof b!="number")for($=b=0;$<_.length;$++)b+=_[$].length;for(var D=new h(b),V=0,$=0;$<_.length;$++){var Y=_[$];Y.copy(D,V),V+=Y.length}return D},h.prototype.write=function(_,b,D,V){isFinite(b)?isFinite(D)||(V=D,D=void 0):(ke=V,V=b,b=D,D=ke),b=Number(b)||0;var $,Y,Se,De,ke=this.length-b;switch((!D||ke<(D=Number(D)))&&(D=ke),V=String(V||"utf8").toLowerCase()){case"hex":$=function(Ie,te,Ke,Oe){Ke=Number(Ke)||0;var I=Ie.length-Ke;(!Oe||I<(Oe=Number(Oe)))&&(Oe=I),ue((I=te.length)%2==0,"Invalid hex string"),I/2<Oe&&(Oe=I/2);for(var L=0;L<Oe;L++){var pe=parseInt(te.substr(2*L,2),16);ue(!isNaN(pe),"Invalid hex string"),Ie[Ke+L]=pe}return h._charsWritten=2*L,L}(this,_,b,D);break;case"utf8":case"utf-8":Y=this,Se=b,De=D,$=h._charsWritten=he(j(_),Y,Se,De);break;case"ascii":case"binary":$=x(this,_,b,D);break;case"base64":Y=this,Se=b,De=D,$=h._charsWritten=he(W(_),Y,Se,De);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":$=E(this,_,b,D);break;default:throw new Error("Unknown encoding")}return $},h.prototype.toString=function(_,b,D){var V,$,Y,Se,De=this;if(_=String(_||"utf8").toLowerCase(),b=Number(b)||0,(D=D!==void 0?Number(D):De.length)===b)return"";switch(_){case"hex":V=function(ke,Ie,te){var Ke=ke.length;(!Ie||Ie<0)&&(Ie=0),(!te||te<0||Ke<te)&&(te=Ke);for(var Oe="",I=Ie;I<te;I++)Oe+=X(ke[I]);return Oe}(De,b,D);break;case"utf8":case"utf-8":V=function(ke,Ie,te){var Ke="",Oe="";te=Math.min(ke.length,te);for(var I=Ie;I<te;I++)ke[I]<=127?(Ke+=Me(Oe)+String.fromCharCode(ke[I]),Oe=""):Oe+="%"+ke[I].toString(16);return Ke+Me(Oe)}(De,b,D);break;case"ascii":case"binary":V=w(De,b,D);break;case"base64":$=De,Se=D,V=(Y=b)===0&&Se===$.length?p.fromByteArray($):p.fromByteArray($.slice(Y,Se));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":V=function(ke,Ie,te){for(var Ke=ke.slice(Ie,te),Oe="",I=0;I<Ke.length;I+=2)Oe+=String.fromCharCode(Ke[I]+256*Ke[I+1]);return Oe}(De,b,D);break;default:throw new Error("Unknown encoding")}return V},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},h.prototype.copy=function(_,b,D,V){if(b=b||0,(V=V||V===0?V:this.length)!==(D=D||0)&&_.length!==0&&this.length!==0){ue(D<=V,"sourceEnd < sourceStart"),ue(0<=b&&b<_.length,"targetStart out of bounds"),ue(0<=D&&D<this.length,"sourceStart out of bounds"),ue(0<=V&&V<=this.length,"sourceEnd out of bounds"),V>this.length&&(V=this.length);var $=(V=_.length-b<V-D?_.length-b+D:V)-D;if($<100||!h._useTypedArrays)for(var Y=0;Y<$;Y++)_[Y+b]=this[Y+D];else _._set(this.subarray(D,D+$),b)}},h.prototype.slice=function(_,b){var D=this.length;if(_=ae(_,D,0),b=ae(b,D,D),h._useTypedArrays)return h._augment(this.subarray(_,b));for(var V=b-_,$=new h(V,void 0,!0),Y=0;Y<V;Y++)$[Y]=this[Y+_];return $},h.prototype.get=function(_){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(_)},h.prototype.set=function(_,b){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(_,b)},h.prototype.readUInt8=function(_,b){if(b||(ue(_!=null,"missing offset"),ue(_<this.length,"Trying to read beyond buffer length")),!(_>=this.length))return this[_]},h.prototype.readUInt16LE=function(_,b){return T(this,_,!0,b)},h.prototype.readUInt16BE=function(_,b){return T(this,_,!1,b)},h.prototype.readUInt32LE=function(_,b){return R(this,_,!0,b)},h.prototype.readUInt32BE=function(_,b){return R(this,_,!1,b)},h.prototype.readInt8=function(_,b){if(b||(ue(_!=null,"missing offset"),ue(_<this.length,"Trying to read beyond buffer length")),!(_>=this.length))return 128&this[_]?-1*(255-this[_]+1):this[_]},h.prototype.readInt16LE=function(_,b){return C(this,_,!0,b)},h.prototype.readInt16BE=function(_,b){return C(this,_,!1,b)},h.prototype.readInt32LE=function(_,b){return O(this,_,!0,b)},h.prototype.readInt32BE=function(_,b){return O(this,_,!1,b)},h.prototype.readFloatLE=function(_,b){return v(this,_,!0,b)},h.prototype.readFloatBE=function(_,b){return v(this,_,!1,b)},h.prototype.readDoubleLE=function(_,b){return S(this,_,!0,b)},h.prototype.readDoubleBE=function(_,b){return S(this,_,!1,b)},h.prototype.writeUInt8=function(_,b,D){D||(ue(_!=null,"missing value"),ue(b!=null,"missing offset"),ue(b<this.length,"trying to write beyond buffer length"),J(_,255)),b>=this.length||(this[b]=_)},h.prototype.writeUInt16LE=function(_,b,D){y(this,_,b,!0,D)},h.prototype.writeUInt16BE=function(_,b,D){y(this,_,b,!1,D)},h.prototype.writeUInt32LE=function(_,b,D){z(this,_,b,!0,D)},h.prototype.writeUInt32BE=function(_,b,D){z(this,_,b,!1,D)},h.prototype.writeInt8=function(_,b,D){D||(ue(_!=null,"missing value"),ue(b!=null,"missing offset"),ue(b<this.length,"Trying to write beyond buffer length"),le(_,127,-128)),b>=this.length||(0<=_?this.writeUInt8(_,b,D):this.writeUInt8(255+_+1,b,D))},h.prototype.writeInt16LE=function(_,b,D){F(this,_,b,!0,D)},h.prototype.writeInt16BE=function(_,b,D){F(this,_,b,!1,D)},h.prototype.writeInt32LE=function(_,b,D){H(this,_,b,!0,D)},h.prototype.writeInt32BE=function(_,b,D){H(this,_,b,!1,D)},h.prototype.writeFloatLE=function(_,b,D){B(this,_,b,!0,D)},h.prototype.writeFloatBE=function(_,b,D){B(this,_,b,!1,D)},h.prototype.writeDoubleLE=function(_,b,D){Z(this,_,b,!0,D)},h.prototype.writeDoubleBE=function(_,b,D){Z(this,_,b,!1,D)},h.prototype.fill=function(_,b,D){if(b=b||0,D=D||this.length,ue(typeof(_=typeof(_=_||0)=="string"?_.charCodeAt(0):_)=="number"&&!isNaN(_),"value is not a number"),ue(b<=D,"end < start"),D!==b&&this.length!==0){ue(0<=b&&b<this.length,"start out of bounds"),ue(0<=D&&D<=this.length,"end out of bounds");for(var V=b;V<D;V++)this[V]=_}},h.prototype.inspect=function(){for(var _=[],b=this.length,D=0;D<b;D++)if(_[D]=X(this[D]),D===i.INSPECT_MAX_BYTES){_[D+1]="...";break}return"<Buffer "+_.join(" ")+">"},h.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(h._useTypedArrays)return new h(this).buffer;for(var _=new Uint8Array(this.length),b=0,D=_.length;b<D;b+=1)_[b]=this[b];return _.buffer};var K=h.prototype;function ae(_,b,D){return typeof _!="number"?D:b<=(_=~~_)?b:0<=_||0<=(_+=b)?_:0}function ee(_){return(_=~~Math.ceil(+_))<0?0:_}function de(_){return(Array.isArray||function(b){return Object.prototype.toString.call(b)==="[object Array]"})(_)}function X(_){return _<16?"0"+_.toString(16):_.toString(16)}function j(_){for(var b=[],D=0;D<_.length;D++){var V=_.charCodeAt(D);if(V<=127)b.push(_.charCodeAt(D));else for(var $=D,Y=(55296<=V&&V<=57343&&D++,encodeURIComponent(_.slice($,D+1)).substr(1).split("%")),Se=0;Se<Y.length;Se++)b.push(parseInt(Y[Se],16))}return b}function W(_){return p.toByteArray(_)}function he(_,b,D,V){for(var $=0;$<V&&!($+D>=b.length||$>=_.length);$++)b[$+D]=_[$];return $}function Me(_){try{return decodeURIComponent(_)}catch{return String.fromCharCode(65533)}}function J(_,b){ue(typeof _=="number","cannot write a non-number as a number"),ue(0<=_,"specified a negative value for writing an unsigned value"),ue(_<=b,"value is larger than maximum value for type"),ue(Math.floor(_)===_,"value has a fractional component")}function le(_,b,D){ue(typeof _=="number","cannot write a non-number as a number"),ue(_<=b,"value larger than maximum allowed value"),ue(D<=_,"value smaller than minimum allowed value"),ue(Math.floor(_)===_,"value has a fractional component")}function fe(_,b,D){ue(typeof _=="number","cannot write a non-number as a number"),ue(_<=b,"value larger than maximum allowed value"),ue(D<=_,"value smaller than minimum allowed value")}function ue(_,b){if(!_)throw new Error(b||"Failed assertion")}h._augment=function(_){return _._isBuffer=!0,_._get=_.get,_._set=_.set,_.get=K.get,_.set=K.set,_.write=K.write,_.toString=K.toString,_.toLocaleString=K.toString,_.toJSON=K.toJSON,_.copy=K.copy,_.slice=K.slice,_.readUInt8=K.readUInt8,_.readUInt16LE=K.readUInt16LE,_.readUInt16BE=K.readUInt16BE,_.readUInt32LE=K.readUInt32LE,_.readUInt32BE=K.readUInt32BE,_.readInt8=K.readInt8,_.readInt16LE=K.readInt16LE,_.readInt16BE=K.readInt16BE,_.readInt32LE=K.readInt32LE,_.readInt32BE=K.readInt32BE,_.readFloatLE=K.readFloatLE,_.readFloatBE=K.readFloatBE,_.readDoubleLE=K.readDoubleLE,_.readDoubleBE=K.readDoubleBE,_.writeUInt8=K.writeUInt8,_.writeUInt16LE=K.writeUInt16LE,_.writeUInt16BE=K.writeUInt16BE,_.writeUInt32LE=K.writeUInt32LE,_.writeUInt32BE=K.writeUInt32BE,_.writeInt8=K.writeInt8,_.writeInt16LE=K.writeInt16LE,_.writeInt16BE=K.writeInt16BE,_.writeInt32LE=K.writeInt32LE,_.writeInt32BE=K.writeInt32BE,_.writeFloatLE=K.writeFloatLE,_.writeFloatBE=K.writeFloatBE,_.writeDoubleLE=K.writeDoubleLE,_.writeDoubleBE=K.writeDoubleBE,_.fill=K.fill,_.inspect=K.inspect,_.toArrayBuffer=K.toArrayBuffer,_}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,i){(function(r,o,p,c,l,u,d,f,g){var p=t("buffer").Buffer,m=4,h=new p(m);h.fill(0),n.exports={hash:function(x,E,w,T){for(var R=E(function(y,z){y.length%m!=0&&(F=y.length+(m-y.length%m),y=p.concat([y,h],F));for(var F,H=[],B=z?y.readInt32BE:y.readInt32LE,Z=0;Z<y.length;Z+=m)H.push(B.call(y,Z));return H}(x=p.isBuffer(x)?x:new p(x),T),8*x.length),E=T,C=new p(w),O=E?C.writeInt32BE:C.writeInt32LE,v=0;v<R.length;v++)O.call(C,R[v],4*v,!0);return C}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,i){(function(r,o,p,c,l,u,d,f,g){var p=t("buffer").Buffer,m=t("./sha"),h=t("./sha256"),x=t("./rng"),E={sha1:m,sha256:h,md5:t("./md5")},w=64,T=new p(w);function R(y,z){var F=E[y=y||"sha1"],H=[];return F||C("algorithm:",y,"is not yet supported"),{update:function(B){return p.isBuffer(B)||(B=new p(B)),H.push(B),B.length,this},digest:function(B){var Z=p.concat(H),Z=z?function(K,ae,ee){p.isBuffer(ae)||(ae=new p(ae)),p.isBuffer(ee)||(ee=new p(ee)),ae.length>w?ae=K(ae):ae.length<w&&(ae=p.concat([ae,T],w));for(var de=new p(w),X=new p(w),j=0;j<w;j++)de[j]=54^ae[j],X[j]=92^ae[j];return ee=K(p.concat([de,ee])),K(p.concat([X,ee]))}(F,z,Z):F(Z);return H=null,B?Z.toString(B):Z}}}function C(){var y=[].slice.call(arguments).join(" ");throw new Error([y,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}T.fill(0),i.createHash=function(y){return R(y)},i.createHmac=R,i.randomBytes=function(y,z){if(!z||!z.call)return new p(x(y));try{z.call(this,void 0,new p(x(y)))}catch(F){z(F)}};var O,v=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],S=function(y){i[y]=function(){C("sorry,",y,"is not implemented yet")}};for(O in v)S(v[O])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,i){(function(r,o,a,c,l,u,d,f,g){var p=t("./helpers");function m(C,O){C[O>>5]|=128<<O%32,C[14+(O+64>>>9<<4)]=O;for(var v=1732584193,S=-271733879,y=-1732584194,z=271733878,F=0;F<C.length;F+=16){var H=v,B=S,Z=y,K=z,v=x(v,S,y,z,C[F+0],7,-680876936),z=x(z,v,S,y,C[F+1],12,-389564586),y=x(y,z,v,S,C[F+2],17,606105819),S=x(S,y,z,v,C[F+3],22,-1044525330);v=x(v,S,y,z,C[F+4],7,-176418897),z=x(z,v,S,y,C[F+5],12,1200080426),y=x(y,z,v,S,C[F+6],17,-1473231341),S=x(S,y,z,v,C[F+7],22,-45705983),v=x(v,S,y,z,C[F+8],7,1770035416),z=x(z,v,S,y,C[F+9],12,-1958414417),y=x(y,z,v,S,C[F+10],17,-42063),S=x(S,y,z,v,C[F+11],22,-1990404162),v=x(v,S,y,z,C[F+12],7,1804603682),z=x(z,v,S,y,C[F+13],12,-40341101),y=x(y,z,v,S,C[F+14],17,-1502002290),v=E(v,S=x(S,y,z,v,C[F+15],22,1236535329),y,z,C[F+1],5,-165796510),z=E(z,v,S,y,C[F+6],9,-1069501632),y=E(y,z,v,S,C[F+11],14,643717713),S=E(S,y,z,v,C[F+0],20,-373897302),v=E(v,S,y,z,C[F+5],5,-701558691),z=E(z,v,S,y,C[F+10],9,38016083),y=E(y,z,v,S,C[F+15],14,-660478335),S=E(S,y,z,v,C[F+4],20,-405537848),v=E(v,S,y,z,C[F+9],5,568446438),z=E(z,v,S,y,C[F+14],9,-1019803690),y=E(y,z,v,S,C[F+3],14,-187363961),S=E(S,y,z,v,C[F+8],20,1163531501),v=E(v,S,y,z,C[F+13],5,-1444681467),z=E(z,v,S,y,C[F+2],9,-51403784),y=E(y,z,v,S,C[F+7],14,1735328473),v=w(v,S=E(S,y,z,v,C[F+12],20,-1926607734),y,z,C[F+5],4,-378558),z=w(z,v,S,y,C[F+8],11,-2022574463),y=w(y,z,v,S,C[F+11],16,1839030562),S=w(S,y,z,v,C[F+14],23,-35309556),v=w(v,S,y,z,C[F+1],4,-1530992060),z=w(z,v,S,y,C[F+4],11,1272893353),y=w(y,z,v,S,C[F+7],16,-155497632),S=w(S,y,z,v,C[F+10],23,-1094730640),v=w(v,S,y,z,C[F+13],4,681279174),z=w(z,v,S,y,C[F+0],11,-358537222),y=w(y,z,v,S,C[F+3],16,-722521979),S=w(S,y,z,v,C[F+6],23,76029189),v=w(v,S,y,z,C[F+9],4,-640364487),z=w(z,v,S,y,C[F+12],11,-421815835),y=w(y,z,v,S,C[F+15],16,530742520),v=T(v,S=w(S,y,z,v,C[F+2],23,-995338651),y,z,C[F+0],6,-198630844),z=T(z,v,S,y,C[F+7],10,1126891415),y=T(y,z,v,S,C[F+14],15,-1416354905),S=T(S,y,z,v,C[F+5],21,-57434055),v=T(v,S,y,z,C[F+12],6,1700485571),z=T(z,v,S,y,C[F+3],10,-1894986606),y=T(y,z,v,S,C[F+10],15,-1051523),S=T(S,y,z,v,C[F+1],21,-2054922799),v=T(v,S,y,z,C[F+8],6,1873313359),z=T(z,v,S,y,C[F+15],10,-30611744),y=T(y,z,v,S,C[F+6],15,-1560198380),S=T(S,y,z,v,C[F+13],21,1309151649),v=T(v,S,y,z,C[F+4],6,-145523070),z=T(z,v,S,y,C[F+11],10,-1120210379),y=T(y,z,v,S,C[F+2],15,718787259),S=T(S,y,z,v,C[F+9],21,-343485551),v=R(v,H),S=R(S,B),y=R(y,Z),z=R(z,K)}return Array(v,S,y,z)}function h(C,O,v,S,y,z){return R((O=R(R(O,C),R(S,z)))<<y|O>>>32-y,v)}function x(C,O,v,S,y,z,F){return h(O&v|~O&S,C,O,y,z,F)}function E(C,O,v,S,y,z,F){return h(O&S|v&~S,C,O,y,z,F)}function w(C,O,v,S,y,z,F){return h(O^v^S,C,O,y,z,F)}function T(C,O,v,S,y,z,F){return h(v^(O|~S),C,O,y,z,F)}function R(C,O){var v=(65535&C)+(65535&O);return(C>>16)+(O>>16)+(v>>16)<<16|65535&v}n.exports=function(C){return p.hash(C,m,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,i){(function(r,o,a,c,l,u,d,f,g){n.exports=function(p){for(var m,h=new Array(p),x=0;x<p;x++)!(3&x)&&(m=4294967296*Math.random()),h[x]=m>>>((3&x)<<3)&255;return h}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,i){(function(r,o,a,c,l,u,d,f,g){var p=t("./helpers");function m(E,w){E[w>>5]|=128<<24-w%32,E[15+(w+64>>9<<4)]=w;for(var T,R,C,O=Array(80),v=1732584193,S=-271733879,y=-1732584194,z=271733878,F=-1009589776,H=0;H<E.length;H+=16){for(var B=v,Z=S,K=y,ae=z,ee=F,de=0;de<80;de++){O[de]=de<16?E[H+de]:x(O[de-3]^O[de-8]^O[de-14]^O[de-16],1);var X=h(h(x(v,5),(X=S,R=y,C=z,(T=de)<20?X&R|~X&C:!(T<40)&&T<60?X&R|X&C|R&C:X^R^C)),h(h(F,O[de]),(T=de)<20?1518500249:T<40?1859775393:T<60?-1894007588:-899497514)),F=z,z=y,y=x(S,30),S=v,v=X}v=h(v,B),S=h(S,Z),y=h(y,K),z=h(z,ae),F=h(F,ee)}return Array(v,S,y,z,F)}function h(E,w){var T=(65535&E)+(65535&w);return(E>>16)+(w>>16)+(T>>16)<<16|65535&T}function x(E,w){return E<<w|E>>>32-w}n.exports=function(E){return p.hash(E,m,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,i){(function(r,o,a,c,l,u,d,f,g){function p(w,T){var R=(65535&w)+(65535&T);return(w>>16)+(T>>16)+(R>>16)<<16|65535&R}function m(w,T){var R,C=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),O=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),v=new Array(64);w[T>>5]|=128<<24-T%32,w[15+(T+64>>9<<4)]=T;for(var S,y,z=0;z<w.length;z+=16){for(var F=O[0],H=O[1],B=O[2],Z=O[3],K=O[4],ae=O[5],ee=O[6],de=O[7],X=0;X<64;X++)v[X]=X<16?w[X+z]:p(p(p((y=v[X-2],x(y,17)^x(y,19)^E(y,10)),v[X-7]),(y=v[X-15],x(y,7)^x(y,18)^E(y,3))),v[X-16]),R=p(p(p(p(de,x(y=K,6)^x(y,11)^x(y,25)),K&ae^~K&ee),C[X]),v[X]),S=p(x(S=F,2)^x(S,13)^x(S,22),F&H^F&B^H&B),de=ee,ee=ae,ae=K,K=p(Z,R),Z=B,B=H,H=F,F=p(R,S);O[0]=p(F,O[0]),O[1]=p(H,O[1]),O[2]=p(B,O[2]),O[3]=p(Z,O[3]),O[4]=p(K,O[4]),O[5]=p(ae,O[5]),O[6]=p(ee,O[6]),O[7]=p(de,O[7])}return O}var h=t("./helpers"),x=function(w,T){return w>>>T|w<<32-T},E=function(w,T){return w>>>T};n.exports=function(w){return h.hash(w,m,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,i){(function(r,o,a,c,l,u,d,f,g){i.read=function(p,m,h,x,z){var w,T,R=8*z-x-1,C=(1<<R)-1,O=C>>1,v=-7,S=h?z-1:0,y=h?-1:1,z=p[m+S];for(S+=y,w=z&(1<<-v)-1,z>>=-v,v+=R;0<v;w=256*w+p[m+S],S+=y,v-=8);for(T=w&(1<<-v)-1,w>>=-v,v+=x;0<v;T=256*T+p[m+S],S+=y,v-=8);if(w===0)w=1-O;else{if(w===C)return T?NaN:1/0*(z?-1:1);T+=Math.pow(2,x),w-=O}return(z?-1:1)*T*Math.pow(2,w-x)},i.write=function(p,m,h,x,E,F){var T,R,C=8*F-E-1,O=(1<<C)-1,v=O>>1,S=E===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=x?0:F-1,z=x?1:-1,F=m<0||m===0&&1/m<0?1:0;for(m=Math.abs(m),isNaN(m)||m===1/0?(R=isNaN(m)?1:0,T=O):(T=Math.floor(Math.log(m)/Math.LN2),m*(x=Math.pow(2,-T))<1&&(T--,x*=2),2<=(m+=1<=T+v?S/x:S*Math.pow(2,1-v))*x&&(T++,x/=2),O<=T+v?(R=0,T=O):1<=T+v?(R=(m*x-1)*Math.pow(2,E),T+=v):(R=m*Math.pow(2,v-1)*Math.pow(2,E),T=0));8<=E;p[h+y]=255&R,y+=z,R/=256,E-=8);for(T=T<<E|R,C+=E;0<C;p[h+y]=255&T,y+=z,T/=256,C-=8);p[h+y-z]|=128*F}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,i){(function(r,o,a,c,l,u,d,f,g){var p,m,h;function x(){}(r=n.exports={}).nextTick=(m=typeof window<"u"&&window.setImmediate,h=typeof window<"u"&&window.postMessage&&window.addEventListener,m?function(E){return window.setImmediate(E)}:h?(p=[],window.addEventListener("message",function(E){var w=E.source;w!==window&&w!==null||E.data!=="process-tick"||(E.stopPropagation(),0<p.length&&p.shift()())},!0),function(E){p.push(E),window.postMessage("process-tick","*")}):function(E){setTimeout(E,0)}),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=x,r.addListener=x,r.once=x,r.off=x,r.removeListener=x,r.removeAllListeners=x,r.emit=x,r.binding=function(E){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(E){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(cd);const Xv=cd.exports;var zt={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive"};const $v={[`${zt.normal}`]:{"#include <beginnormal_vertex>":`
    vec3 objectNormal = ${zt.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `},[`${zt.position}`]:{"#include <begin_vertex>":`
    vec3 transformed = ${zt.position};
  `},[`${zt.positionRaw}`]:{"#include <begin_vertex>":`
    vec4 csm_positionUnprojected = ${zt.positionRaw};
    mat4x4 csm_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_unprojectMatrix = csm_unprojectMatrix * instanceMatrix;
    #endif
    csm_positionUnprojected = inverse(csm_unprojectMatrix) * csm_positionUnprojected;
    vec3 transformed = csm_positionUnprojected.xyz;
  `},[`${zt.pointSize}`]:{"gl_PointSize = size;":`
    gl_PointSize = ${zt.pointSize};
    `},[`${zt.diffuseColor}`]:{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = ${zt.diffuseColor};
  `},[`${zt.fragColor}`]:{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = ${zt.fragColor};
  `},[`${zt.emissive}`]:{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = ${zt.emissive};
    `},[`${zt.roughness}`]:{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = ${zt.roughness};
    `},[`${zt.metalness}`]:{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = ${zt.metalness};
    `}},Kv={[`${zt.position}`]:{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( ${zt.position}, 1.0 );
  `},[`${zt.positionRaw}`]:{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = ${zt.position};
  `},[`${zt.diffuseColor}`]:{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = ${zt.diffuseColor};
  `},[`${zt.fragColor}`]:{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = ${zt.fragColor};
  `}},Yv=`

#ifdef IS_VERTEX
    vec3 csm_Position = position;
    vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    vec3 csm_Normal = normal;
#else
    #if defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL
        vec4 csm_DiffuseColor = vec4(1., 0., 1., 1.);
        vec4 csm_FragColor = vec4(1., 0., 1., 1.);
    #else
        #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
            vec3 csm_Emissive = emissive;
            float csm_Roughness = roughness;
            float csm_Metalness = metalness;
        #endif
        
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif
#endif
`,Zv=(s,e,t)=>s.split(e).join(t),Jv=function(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},Qv=(s,e)=>new RegExp(`\\b${Jv(e)}\\b`).test(s);function ex(s){try{new s}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}class tx extends Ci{constructor({baseMaterial:e,fragmentShader:t,vertexShader:n,uniforms:i,patchMap:r,cacheKey:o,...a}){let c;if(ex(e)?c=new e(a):(c=e,Object.assign(c,a)),c.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");super(),this.uniforms=i||{},this._customPatchMap=r||{},this._fs=t||"",this._vs=n||"",this._cacheKey=o,this._base=e,this._type=c.type,this._instanceID=Pu.generateUUID();for(const l in c){let u=l;l.startsWith("_")&&(u=l.split("_")[1]),this[u]===void 0&&(this[u]=0),this[u]=c[u]}this.update({fragmentShader:t,vertexShader:n,uniforms:i,cacheKey:o})}update(e){const t=(e==null?void 0:e.uniforms)||{},n=(e==null?void 0:e.fragmentShader)||this._fs,i=(e==null?void 0:e.vertexShader)||this._vs,r=Object.values(t).reduce((o,{value:a})=>o+JSON.stringify(a),"");this.uuid=(e==null||e.cacheKey==null?void 0:e.cacheKey())||Xv([n,i,r,this._instanceID]),this.generateMaterial({fragmentShader:n,vertexShader:i,uniforms:t})}clone(){const e=new this.constructor({baseMaterial:this._base,fragmentShader:this._fs,vertexShader:this._vs,patchMap:this._customPatchMap,uniforms:this.uniforms,cacheKey:this._cacheKey});for(const t in this)t!=="uuid"&&(e[t]=this[t]);return e}generateMaterial({fragmentShader:e,vertexShader:t,uniforms:n}){const i=this.parseShader(e),r=this.parseShader(t);this.uniforms=n||{},this.customProgramCacheKey=()=>this.uuid,this.onBeforeCompile=o=>{if(i){const a=this.patchShader(i,o.fragmentShader);o.fragmentShader=this.getMaterialDefine()+a}if(r){const a=this.patchShader(r,o.vertexShader);o.vertexShader=`#define IS_VERTEX;
`+a,o.vertexShader=this.getMaterialDefine()+o.vertexShader}o.uniforms={...o.uniforms,...this.uniforms},this.uniforms=o.uniforms},this.needsUpdate=!0}getMaterialDefine(){return`#define IS_${this._type.toUpperCase()};
`}getPatchMapForMaterial(){switch(this._type){case"ShaderMaterial":return Kv;default:return $v}}patchShader(e,t){let n=t;const i={...this.getPatchMapForMaterial(),...this._customPatchMap};return Object.keys(i).forEach(r=>{Object.keys(i[r]).forEach(o=>{Qv(e.main,r)&&(n=Zv(n,o,i[r][o]))})}),n=n.replace("void main() {",`
          ${e.header}
          void main() {
            ${Yv}
            ${e.main}
          `),n=e.defines+n,n}parseShader(e){if(!e)return;const t=e.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),n=Po(t),i=Lo(n),r=i.map(c=>c.name).indexOf("main"),o=ms(n.slice(0,r>=0?i[r].outer[0]:void 0)),a=r>=0?this.getShaderFromIndex(n,i[r].body):"";return{defines:"",header:o,main:a}}getShaderFromIndex(e,t){return ms(e.slice(t[0],t[1]))}}function uu(s){return typeof s=="string"?new Ae(s).convertLinearToSRGB():s}function nx(s){switch(s){case"alpha":return{min:0,max:1};case"scale":return{min:0};case"map":return{image:void 0};default:return{}}}function ud(s){return s instanceof se||s instanceof Qe||s instanceof en||s instanceof Mn||s instanceof $t}function du(s){return ud(s)?s.toArray():s instanceof Ae?"#"+s.clone().convertLinearToSRGB().getHexString():s instanceof li?s.image.src:s}const ix={normal:"normal",add:"add",subtract:"subtract",multiply:"multiply",lighten:"lighten",darken:"darken",divide:"divide",overlay:"overlay",screen:"screen",softlight:"softlight",negation:"negation",reflect:"reflect"},dd={perlin:"perlin",simplex:"simplex",cell:"cell",curl:"curl",white:"white"},el={local:"local",world:"world",uv:"uv"},rx={phong:s0,physical:r0,toon:a0,basic:Fo,lambert:o0,standard:Xo};class Pi{constructor(e,t,n){this.uuid=Pu.generateUUID().replace(/-/g,"_"),this.name="LayerMaterial",this.mode="normal",this.visible=!0;const r=Object.getOwnPropertyNames(e).filter(a=>a.startsWith("u_")).reduce((a,c)=>{var l;let u=(l=Object.getOwnPropertyDescriptor(e,c))==null?void 0:l.value;return(ud(u)||u instanceof Ae)&&(u=u.clone()),{...a,[c.slice(1)]:u}},{});for(const a in r){const c=a.split("_")[1];(t==null?void 0:t[c])!==void 0&&(r[a]=t[c])}t&&Object.keys(t).map(a=>{t[a]!==void 0&&(this[a]=t[a])}),this.uniforms={},this.schema=[];const o={};Object.keys(r).map(a=>{const c=a.split("_")[1];this.uniforms[`u_${this.uuid}_${c}`]={value:uu(r[a])},this.schema.push({value:r[a],label:c}),o[c]={set:l=>{this.uniforms[`u_${this.uuid}_${c}`].value=uu(l)},get:()=>this.uniforms[`u_${this.uuid}_${c}`].value}}),t!=null&&t.name&&(this.name=t.name),t!=null&&t.mode&&(this.mode=t.mode),t!=null&&t.visible&&(this.visible=t.visible),Object.defineProperties(this,o),this.vertexShader="",this.fragmentShader="",this.vertexVariables="",this.fragmentVariables="",this.onParse=n,this.buildShaders(e),this.schema.push({value:this.mode,label:"mode",options:Object.values(ix)}),this.schema.push({value:this.visible,label:"visible"})}buildShaders(e){var t;const n=Object.getOwnPropertyNames(e).filter(u=>u==="fragmentShader"||u==="vertexShader").reduce((u,d)=>{var f;return{...u,[d]:(f=Object.getOwnPropertyDescriptor(e,d))==null?void 0:f.value}},{}),i={vert:Po(n.vertexShader||""),frag:Po(n.fragmentShader||"")},r={vert:cu(i.vert,this.renameTokens.bind(this)),frag:cu(i.frag,this.renameTokens.bind(this))},o={vert:Lo(r.vert),frag:Lo(r.frag)},a={vert:o.vert.map(u=>u.name).indexOf("main"),frag:o.frag.map(u=>u.name).indexOf("main")},c={vert:a.vert>=0?ms(r.vert.slice(0,o.vert[a.vert].outer[0])):"",frag:a.frag>=0?ms(r.frag.slice(0,o.frag[a.frag].outer[0])):""},l={vert:a.vert>=0?this.getShaderFromIndex(r.vert,o.vert[a.vert].body):"",frag:a.frag>=0?this.getShaderFromIndex(r.frag,o.frag[a.frag].body):""};this.vertexShader=this.processFinal(l.vert,!0),this.fragmentShader=this.processFinal(l.frag),this.vertexVariables=c.vert,this.fragmentVariables=c.frag,(t=this.onParse)==null||t.call(this,this),this.schema=this.schema.filter((u,d)=>{const f=u.label;return d===this.schema.findIndex(g=>g.label===f)})}renameTokens(e){if(e.startsWith("u_")){const t=e.slice(2);return`u_${this.uuid}_${t}`}else if(e.startsWith("v_")){const t=e.slice(2);return`v_${this.uuid}_${t}`}else if(e.startsWith("f_")){const t=e.slice(2);return`f_${this.uuid}_${t}`}else return e}processFinal(e,t){const n=e.replace(/\sf_/gm,` f_${this.uuid}_`).replace(/\(f_/gm,`(f_${this.uuid}_`),i=n.match(/^.*return.*$/gm);let r=n.replace(/^.*return.*$/gm,"");if(i!=null&&i[0]){const o=i[0].replace("return","").trim().replace(";",""),a=this.getBlendMode(o,"lamina_finalColor");r+=t?`lamina_finalPosition = ${o};`:`lamina_finalColor = ${a};`}return r}getShaderFromIndex(e,t){return ms(e.slice(t[0],t[1]))}getBlendMode(e,t){switch(this.mode){default:case"normal":return`lamina_blend_alpha(${t}, ${e}, ${e}.a)`;case"add":return`lamina_blend_add(${t}, ${e}, ${e}.a)`;case"subtract":return`lamina_blend_subtract(${t}, ${e}, ${e}.a)`;case"multiply":return`lamina_blend_multiply(${t}, ${e}, ${e}.a)`;case"lighten":return`lamina_blend_lighten(${t}, ${e}, ${e}.a)`;case"darken":return`lamina_blend_darken(${t}, ${e}, ${e}.a)`;case"divide":return`lamina_blend_divide(${t}, ${e}, ${e}.a)`;case"overlay":return`lamina_blend_overlay(${t}, ${e}, ${e}.a)`;case"screen":return`lamina_blend_screen(${t}, ${e}, ${e}.a)`;case"softlight":return`lamina_blend_softlight(${t}, ${e}, ${e}.a)`;case"reflect":return`lamina_blend_reflect(${t}, ${e}, ${e}.a)`;case"negation":return`lamina_blend_negation(${t}, ${e}, ${e}.a)`}}getSchema(){return this.schema.map(({label:t,options:n,...i})=>({label:t,options:n,...nx(t),...i,value:du(this[t])}))}serialize(){const e=this.constructor.name.split("$")[0];let t=Object.keys(this);t=t.filter(r=>!["uuid","uniforms","schema","fragmentShader","vertexShader","fragmentVariables","vertexVariables","attribs","events","__r3f","onParse"].includes(r));const n={};t.forEach(r=>{n[r]=this[r]});const i={};for(const r in this.uniforms){const o=r.replace(`u_${this.uuid}_`,"");i[o]=du(this.uniforms[r].value)}return{constructor:e,properties:{...i,...n}}}}class Vn extends Pi{constructor(e){super(Vn,{name:"Depth",...e},t=>{t.schema.push({value:t.mapping,label:"mapping",options:["vector","world","camera"]});const n=Vn.getMapping(t.uuid,t.mapping);t.fragmentShader=t.fragmentShader.replace("lamina_mapping_template",n)}),this.mapping="vector"}static getMapping(e,t){switch(t){default:case"vector":return`length(v_${e}_worldPosition - u_${e}_origin)`;case"world":return`length(v_${e}_position - vec3(0.))`;case"camera":return`length(v_${e}_worldPosition - cameraPosition)`}}}Vn.u_near=2;Vn.u_far=10;Vn.u_origin=new se(0,0,0);Vn.u_colorA="white";Vn.u_colorB="black";Vn.u_alpha=1;Vn.vertexShader=`
  varying vec3 v_worldPosition;
  varying vec3 v_position;

  void main() {
    v_worldPosition = (vec4(position, 1.0) * modelMatrix).xyz;
    v_position = position;
  }
  `;Vn.fragmentShader=`   
    uniform float u_alpha;
    uniform float u_near;
    uniform float u_far;
    uniform float u_isVector;
    uniform vec3 u_origin;
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;

    varying vec3 v_worldPosition;
    varying vec3 v_position;

    void main() {
      float f_dist = lamina_mapping_template;
      float f_depth = (f_dist - u_near) / (u_far - u_near);
			vec3 f_depthColor =  mix(u_colorB, u_colorA, 1.0 - clamp(f_depth, 0., 1.));
  
  
      return vec4(f_depthColor, u_alpha);
    }
  `;class Es extends Pi{constructor(e){super(Es,{name:"Color",...e})}}Es.u_color="red";Es.u_alpha=1;Es.fragmentShader=`   
    uniform vec3 u_color;
    uniform float u_alpha;

    void main() {
      return vec4(u_color, u_alpha);
    }
  `;class Ht extends Pi{constructor(e){super(Ht,{name:"noise",...e},t=>{t.schema.push({value:t.type,label:"type",options:Object.values(dd)}),t.schema.push({value:t.mapping,label:"mapping",options:Object.values(el)});const n=Ht.getNoiseFunction(t.type),i=Ht.getMapping(t.mapping);t.vertexShader=t.vertexShader.replace("lamina_mapping_template",i),t.fragmentShader=t.fragmentShader.replace("lamina_noise_template",n)}),this.type="perlin",this.mapping="local"}static getNoiseFunction(e){switch(e){default:case"perlin":return"lamina_noise_perlin";case"simplex":return"lamina_noise_simplex";case"cell":return"lamina_noise_worley";case"white":return"lamina_noise_white";case"curl":return"lamina_noise_swirl"}}static getMapping(e){switch(e){default:case"local":return"position";case"world":return"(modelMatrix * vec4(position,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}}Ht.u_colorA="#666666";Ht.u_colorB="#666666";Ht.u_colorC="#FFFFFF";Ht.u_colorD="#FFFFFF";Ht.u_alpha=1;Ht.u_scale=1;Ht.u_offset=new se(0,0,0);Ht.vertexShader=`
    varying vec3 v_position;

    void main() {
        v_position = lamina_mapping_template;
    }
  `;Ht.fragmentShader=`   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_colorC;
    uniform vec3 u_colorD;
    uniform vec3 u_offset;

    uniform float u_alpha;
    uniform float u_scale;

    varying vec3 v_position;


    void main() {
        float f_n = lamina_noise_template((v_position + u_offset) * u_scale);

        float f_step1 = 0.;
        float f_step2 = 0.2;
        float f_step3 = 0.6;
        float f_step4 = 1.;

        vec3 f_color = mix(u_colorA, u_colorB, smoothstep(f_step1, f_step2, f_n));
        f_color = mix(f_color, u_colorC, smoothstep(f_step2, f_step3, f_n));
        f_color = mix(f_color, u_colorD, smoothstep(f_step3, f_step4, f_n));

        return vec4(f_color, u_alpha);
    }
  `;class hn extends Pi{constructor(e){super(hn,{name:"Fresnel",...e})}}hn.u_color="white";hn.u_alpha=1;hn.u_bias=0;hn.u_intensity=1;hn.u_power=2;hn.u_factor=1;hn.vertexShader=`
    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        v_worldPosition = vec3(-viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2]);
        v_worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
        
    }
  `;hn.fragmentShader=`   
    uniform vec3 u_color;
    uniform float u_alpha;
    uniform float u_bias;
    uniform float u_intensity;
    uniform float u_power;
    uniform float u_factor;

    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        float f_a = (u_factor  + dot(v_worldPosition, v_worldNormal));
        float f_fresnel = u_bias + u_intensity * pow(abs(f_a), u_power);

        f_fresnel = clamp(f_fresnel, 0.0, 1.0);
        return vec4(f_fresnel * u_color, u_alpha);
    }
  `;class Gn extends Pi{constructor(e){super(Gn,{name:"Gradient",...e},t=>{t.schema.push({value:t.axes,label:"axes",options:["x","y","z"]}),t.schema.push({value:t.mapping,label:"mapping",options:Object.values(el)});const n=Gn.getMapping(t.mapping);t.vertexShader=t.vertexShader.replace("lamina_mapping_template",n||"local"),t.fragmentShader=t.fragmentShader.replace("axes_template",t.axes||"x")}),this.axes="x",this.mapping="local"}static getMapping(e){switch(e){default:case"local":return"position";case"world":return"(modelMatrix * vec4(position,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}}Gn.u_colorA="white";Gn.u_colorB="black";Gn.u_alpha=1;Gn.u_start=1;Gn.u_end=-1;Gn.u_contrast=1;Gn.vertexShader=`
		varying vec3 v_position;

		vod main() {
      v_position = lamina_mapping_template;
		}
  `;Gn.fragmentShader=`   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_axis;
    uniform float u_alpha;
    uniform float u_start;
    uniform float u_end;
    uniform float u_contrast;

		varying vec3 v_position;

    void main() {

      float f_step = smoothstep(u_start, u_end, v_position.axes_template * u_contrast);
      vec3 f_color = mix(u_colorA, u_colorB, f_step);

      return vec4(f_color, u_alpha);
    }
  `;class Vr extends Pi{constructor(e){super(Vr,{name:"Matcap",...e})}}Vr.u_alpha=1;Vr.u_map=void 0;Vr.vertexShader=`
    varying vec3 v_position;
    varying vec3 v_normal;
    
    void main() {
      v_position = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );
      v_normal = normalize( normalMatrix * normal );
    }
    `;Vr.fragmentShader=` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec3 v_position;
		varying vec3 v_normal;

		
    void main() {
			vec3 f_r = reflect( v_position, v_normal );
			float f_m = 2. * sqrt( pow( f_r.x, 2. ) + pow( f_r.y, 2. ) + pow( f_r.z + 1., 2. ) );
			vec2 f_vN = f_r.xy / f_m + .5;

			vec3 f_base = texture2D(u_map, f_vN).rgb;

      return vec4(f_base, u_alpha);
    }
  `;class Gr extends Pi{constructor(e){super(Gr,{name:"Texture",...e})}}Gr.u_alpha=1;Gr.u_map=void 0;Gr.vertexShader=`
    varying vec2 v_uv;
    
    void main() {
        v_uv = uv;
    }
    `;Gr.fragmentShader=` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec2 v_uv;

    void main() {
			vec4 f_color = texture2D(u_map, v_uv);
      return vec4(f_color.rgb, f_color.a * u_alpha);
    }
  `;class Dn extends Pi{constructor(e){super(Dn,{name:"Displace",...e},t=>{t.schema.push({value:t.type,label:"type",options:Object.values(dd)}),t.schema.push({value:t.mapping,label:"mapping",options:Object.values(el)});const n=Dn.getNoiseFunction(t.type),i=Dn.getMapping(t.mapping);t.vertexVariables=t.vertexVariables.replace("lamina_mapping_template",i),t.vertexVariables=t.vertexVariables.replace("lamina_noise_template",n)}),this.type="perlin",this.mapping="local"}static getNoiseFunction(e){switch(e){default:case"perlin":return"lamina_noise_perlin";case"simplex":return"lamina_noise_simplex";case"cell":return"lamina_noise_worley";case"white":return"lamina_noise_white";case"curl":return"lamina_noise_swirl"}}static getMapping(e){switch(e){default:case"local":return"p";case"world":return"(modelMatrix * vec4(p,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}}Dn.u_strength=1;Dn.u_scale=1;Dn.u_offset=new se(0,0,0);Dn.vertexShader=`
       
      uniform float u_strength;
      uniform float u_scale;
      uniform vec3 u_offset;

      vec3 displace(vec3 p) {
				vec3 f_position = lamina_mapping_template;
        float f_n = lamina_noise_template((f_position + u_offset) * u_scale) * u_strength;
        vec3 f_newPosition = p + (f_n * normal);

				return f_newPosition;
      }

      
			vec3 orthogonal(vec3 v) {
  		  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
  		  : vec3(0.0, -v.z, v.y));
  		}
  		vec3 recalcNormals(vec3 newPos) {
  		  float offset = 0.001;
  		  vec3 tangent = orthogonal(normal);
  		  vec3 bitangent = normalize(cross(normal, tangent));
  		  vec3 neighbour1 = position + tangent * offset;
  		  vec3 neighbour2 = position + bitangent * offset;
  		  vec3 displacedNeighbour1 = displace(neighbour1);
  		  vec3 displacedNeighbour2 = displace(neighbour2);
  		  vec3 displacedTangent = displacedNeighbour1 - newPos;
  		  vec3 displacedBitangent = displacedNeighbour2 - newPos;
  		  return normalize(cross(displacedTangent, displacedBitangent));
  		}
  
  
      void main() {
       
				vec3 f_newPosition = displace(position);
        lamina_finalNormal = recalcNormals(f_newPosition);

        return f_newPosition;
      }
    `;class Hr extends Pi{constructor(e){super(Hr,{name:"Normal",...e})}}Hr.u_alpha=1;Hr.u_direction=new se(1,1,1);Hr.vertexShader=`   
  varying vec3 v_normals; 

  void main() {
    v_normals = normal;
  }
`;Hr.fragmentShader=`   
  	uniform float u_alpha;
  	uniform vec3 u_color;
  	uniform vec3 u_direction;

		varying vec3 v_normals;

    void main() {
			vec3 f_normalColor = vec3(1.);
      f_normalColor.x = v_normals.x * u_direction.x;
      f_normalColor.y = v_normals.y * u_direction.y;
      f_normalColor.z = v_normals.z * u_direction.z;

      return vec4(f_normalColor, u_alpha);
    }
  `;var sx=`
vec4 lamina_blend_add(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(min(x.xyz + y.xyz, 1.0) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec3 lamina_blend_alpha(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 lamina_blend_alpha(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(lamina_blend_alpha(x.rgb, y.rgb, a), x.a);

}
vec4 lamina_blend_average(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((x.xyz + y.xyz) * 0.5 * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_color_burn(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 lamina_blend_color_burn(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_burn(x.r, y.r),
		lamina_blend_color_burn(x.g, y.g),
		lamina_blend_color_burn(x.b, y.b),
		lamina_blend_color_burn(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_color_dodge(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 lamina_blend_color_dodge(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_dodge(x.r, y.r),
		lamina_blend_color_dodge(x.g, y.g),
		lamina_blend_color_dodge(x.b, y.b),
		lamina_blend_color_dodge(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_darken(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(min(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_difference(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(abs(x.xyz - y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_divide(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 lamina_blend_divide(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_divide(x.r, y.r),
		lamina_blend_divide(x.g, y.g),
		lamina_blend_divide(x.b, y.b),
		lamina_blend_divide(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_exclusion(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((x.xyz + y.xyz - 2.0 * x.xyz * y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_lighten(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(max(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_multiply(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4( x.xyz * y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_negation(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((1.0 - abs(1.0 - x.xyz - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_normal(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_overlay(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 lamina_blend_overlay(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_overlay(x.r, y.r),
		lamina_blend_overlay(x.g, y.g),
		lamina_blend_overlay(x.b, y.b),
		lamina_blend_overlay(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_reflect(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 lamina_blend_reflect(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_reflect(x.r, y.r),
		lamina_blend_reflect(x.g, y.g),
		lamina_blend_reflect(x.b, y.b),
		lamina_blend_reflect(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_screen(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((1.0 - (1.0 - x.xyz) * (1.0 - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_softlight(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 lamina_blend_softlight(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_softlight(x.r, y.r),
		lamina_blend_softlight(x.g, y.g),
		lamina_blend_softlight(x.b, y.b),
		lamina_blend_softlight(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_subtract(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(max(x.xyz + y.xyz - 1.0, 0.0) * opacity + x.xyz * (1.0 - opacity), x.a);

}

`,fu=`

// From: https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
// Huge thanks to the creators of these algorithms

float lamina_noise_mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_perm(vec4 x){return lamina_noise_mod289(((x * 34.0) + 1.0) * x);}
vec4 lamina_noise_permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 lamina_noise_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }


float lamina_noise_white(vec2 p) {
  return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) *
               (0.1 + abs(sin(p.y * 13.0 + p.x))));
}

float lamina_noise_white(vec3 p) {
  return lamina_noise_white(p.xy);
}


vec3 lamina_noise_fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float lamina_noise_perlin(vec3 P) {
  vec3 Pi0 = floor(P);        // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);        // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = lamina_noise_permute(lamina_noise_permute(ix) + iy);
  vec4 ixy0 = lamina_noise_permute(ixy + iz0);
  vec4 ixy1 = lamina_noise_permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = lamina_noise_taylorInvSqrt(
      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = lamina_noise_taylorInvSqrt(
      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = lamina_noise_fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),
                 fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return lamina_normalize(2.2 * n_xyz);
}

float lamina_noise_simplex(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //  x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = lamina_noise_permute(lamina_noise_permute(lamina_noise_permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y +
                             vec4(0.0, i1.y, i2.y, 1.0)) +
                    i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm =
      lamina_noise_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m =
      max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return lamina_normalize(42.0 *
         dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))));
}

vec3 lamina_noise_simplex3(vec3 x) {
  float s = lamina_noise_simplex(vec3(x));
  float s1 = lamina_noise_simplex(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
  float s2 = lamina_noise_simplex(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
  vec3 c = vec3(s, s1, s2);
  return c;
}

vec3 lamina_noise_curl(vec3 p) {
  const float e = .1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);

  vec3 p_x0 = lamina_noise_simplex3(p - dx);
  vec3 p_x1 = lamina_noise_simplex3(p + dx);
  vec3 p_y0 = lamina_noise_simplex3(p - dy);
  vec3 p_y1 = lamina_noise_simplex3(p + dy);
  vec3 p_z0 = lamina_noise_simplex3(p - dz);
  vec3 p_z1 = lamina_noise_simplex3(p + dz);

  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  const float divisor = 1.0 / (2.0 * e);
  return normalize(vec3(x, y, z) * divisor);
}

vec3 lamina_permute(vec3 x) {
  return mod((34.0 * x + 1.0) * x, 289.0);
}

vec3 lamina_dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance) {
  return manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z);
}

// From: https://github.com/Erkaman/glsl-worley
float lamina_noise_worley(vec3 P) {
  float jitter = 1.;
  bool manhattanDistance = false; 

  float K = 0.142857142857; // 1/7
  float Ko = 0.428571428571; // 1/2-K/2
  float  K2 = 0.020408163265306; // 1/(7*7)
  float Kz = 0.166666666667; // 1/6
  float Kzo = 0.416666666667; // 1/2-1/6*2

	vec3 Pi = mod(floor(P), 289.0);
 	vec3 Pf = fract(P) - 0.5;

	vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);
	vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);
	vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);

	vec3 p = lamina_permute(Pi.x + vec3(-1.0, 0.0, 1.0));
	vec3 p1 = lamina_permute(p + Pi.y - 1.0);
	vec3 p2 = lamina_permute(p + Pi.y);
	vec3 p3 = lamina_permute(p + Pi.y + 1.0);

	vec3 p11 = lamina_permute(p1 + Pi.z - 1.0);
	vec3 p12 = lamina_permute(p1 + Pi.z);
	vec3 p13 = lamina_permute(p1 + Pi.z + 1.0);

	vec3 p21 = lamina_permute(p2 + Pi.z - 1.0);
	vec3 p22 = lamina_permute(p2 + Pi.z);
	vec3 p23 = lamina_permute(p2 + Pi.z + 1.0);

	vec3 p31 = lamina_permute(p3 + Pi.z - 1.0);
	vec3 p32 = lamina_permute(p3 + Pi.z);
	vec3 p33 = lamina_permute(p3 + Pi.z + 1.0);

	vec3 ox11 = fract(p11*K) - Ko;
	vec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;
	vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed

	vec3 ox12 = fract(p12*K) - Ko;
	vec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;
	vec3 oz12 = floor(p12*K2)*Kz - Kzo;

	vec3 ox13 = fract(p13*K) - Ko;
	vec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;
	vec3 oz13 = floor(p13*K2)*Kz - Kzo;

	vec3 ox21 = fract(p21*K) - Ko;
	vec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;
	vec3 oz21 = floor(p21*K2)*Kz - Kzo;

	vec3 ox22 = fract(p22*K) - Ko;
	vec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;
	vec3 oz22 = floor(p22*K2)*Kz - Kzo;

	vec3 ox23 = fract(p23*K) - Ko;
	vec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;
	vec3 oz23 = floor(p23*K2)*Kz - Kzo;

	vec3 ox31 = fract(p31*K) - Ko;
	vec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;
	vec3 oz31 = floor(p31*K2)*Kz - Kzo;

	vec3 ox32 = fract(p32*K) - Ko;
	vec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;
	vec3 oz32 = floor(p32*K2)*Kz - Kzo;

	vec3 ox33 = fract(p33*K) - Ko;
	vec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;
	vec3 oz33 = floor(p33*K2)*Kz - Kzo;

	vec3 dx11 = Pfx + jitter*ox11;
	vec3 dy11 = Pfy.x + jitter*oy11;
	vec3 dz11 = Pfz.x + jitter*oz11;

	vec3 dx12 = Pfx + jitter*ox12;
	vec3 dy12 = Pfy.x + jitter*oy12;
	vec3 dz12 = Pfz.y + jitter*oz12;

	vec3 dx13 = Pfx + jitter*ox13;
	vec3 dy13 = Pfy.x + jitter*oy13;
	vec3 dz13 = Pfz.z + jitter*oz13;

	vec3 dx21 = Pfx + jitter*ox21;
	vec3 dy21 = Pfy.y + jitter*oy21;
	vec3 dz21 = Pfz.x + jitter*oz21;

	vec3 dx22 = Pfx + jitter*ox22;
	vec3 dy22 = Pfy.y + jitter*oy22;
	vec3 dz22 = Pfz.y + jitter*oz22;

	vec3 dx23 = Pfx + jitter*ox23;
	vec3 dy23 = Pfy.y + jitter*oy23;
	vec3 dz23 = Pfz.z + jitter*oz23;

	vec3 dx31 = Pfx + jitter*ox31;
	vec3 dy31 = Pfy.z + jitter*oy31;
	vec3 dz31 = Pfz.x + jitter*oz31;

	vec3 dx32 = Pfx + jitter*ox32;
	vec3 dy32 = Pfy.z + jitter*oy32;
	vec3 dz32 = Pfz.y + jitter*oz32;

	vec3 dx33 = Pfx + jitter*ox33;
	vec3 dy33 = Pfy.z + jitter*oy33;
	vec3 dz33 = Pfz.z + jitter*oz33;

	vec3 d11 = lamina_dist(dx11, dy11, dz11, manhattanDistance);
	vec3 d12 = lamina_dist(dx12, dy12, dz12, manhattanDistance);
	vec3 d13 = lamina_dist(dx13, dy13, dz13, manhattanDistance);
	vec3 d21 = lamina_dist(dx21, dy21, dz21, manhattanDistance);
	vec3 d22 = lamina_dist(dx22, dy22, dz22, manhattanDistance);
	vec3 d23 = lamina_dist(dx23, dy23, dz23, manhattanDistance);
	vec3 d31 = lamina_dist(dx31, dy31, dz31, manhattanDistance);
	vec3 d32 = lamina_dist(dx32, dy32, dz32, manhattanDistance);
	vec3 d33 = lamina_dist(dx33, dy33, dz33, manhattanDistance);

	vec3 d1a = min(d11, d12);
	d12 = max(d11, d12);
	d11 = min(d1a, d13); // Smallest now not in d12 or d13
	d13 = max(d1a, d13);
	d12 = min(d12, d13); // 2nd smallest now not in d13
	vec3 d2a = min(d21, d22);
	d22 = max(d21, d22);
	d21 = min(d2a, d23); // Smallest now not in d22 or d23
	d23 = max(d2a, d23);
	d22 = min(d22, d23); // 2nd smallest now not in d23
	vec3 d3a = min(d31, d32);
	d32 = max(d31, d32);
	d31 = min(d3a, d33); // Smallest now not in d32 or d33
	d33 = max(d3a, d33);
	d32 = min(d32, d33); // 2nd smallest now not in d33
	vec3 da = min(d11, d21);
	d21 = max(d11, d21);
	d11 = min(da, d31); // Smallest now in d11
	d31 = max(da, d31); // 2nd smallest now not in d31
	d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;
	d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest
	d12 = min(d12, d21); // 2nd smallest now not in d21
	d12 = min(d12, d22); // nor in d22
	d12 = min(d12, d31); // nor in d31
	d12 = min(d12, d32); // nor in d32
	d11.yz = min(d11.yz,d12.xy); // nor in d12.yz
	d11.y = min(d11.y,d12.z); // Only two more to go
	d11.y = min(d11.y,d11.z); // Done! (Phew!)

  vec2 F = sqrt(d11.xy);
	return F.x; // F1, F2

}

float lamina_noise_swirl(vec3 position) {
    float scale = 0.1;
    float freq = 4. * scale;
    float t = 1.;

    vec3 pos = (position * scale) + lamina_noise_curl(position * 7. * scale);

    float worley1 = 1. - lamina_noise_worley((pos * (freq * 2.)) +  (t * 2.));
    float worley2 = 1. - lamina_noise_worley((pos * (freq * 4.)) +  (t * 4.));
    float worley3 = 1. - lamina_noise_worley((pos * (freq * 8.)) +  (t * 8.));
    float worley4 = 1. - lamina_noise_worley((pos * (freq * 16.)) +  (t * 16.));
    
    float fbm1 = worley1 * .625 + worley2 * .25 + worley3 * .125;
    float fbm2 = worley2 * .625 + worley3 * .25 + worley4 * .125;
    float fbm3 = worley3 * .75 + worley4 * .25;

    vec3 curlWorleyFbm = vec3(fbm1, fbm2, fbm3);
    float curlWorley = curlWorleyFbm.r * .625 + curlWorleyFbm.g * .25 + 
        curlWorleyFbm.b * .125;

    return curlWorley;
}
  
  
`,hu=`

float lamina_map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float lamina_normalize(float v) { return lamina_map(v, -1.0, 1.0, 0.0, 1.0); }
`;class gi extends tx{constructor({color:e,alpha:t,lighting:n,layers:i,name:r,...o}={}){super({baseMaterial:rx[n||"basic"],...o}),this.name="LayerMaterial",this.layers=[],this.lighting="basic";const a=e||"white",c=t??1;this.uniforms={u_lamina_color:{value:typeof a=="string"?new Ae(a).convertSRGBToLinear():a},u_lamina_alpha:{value:c}},this.layers=i||this.layers,this.lighting=n||this.lighting,this.name=r||this.name,this.refresh()}genShaders(){let e="",t="",n="",i="",r={};return this.layers.filter(o=>o.visible).forEach(o=>{e+=o.vertexVariables+`
`,t+=o.fragmentVariables+`
`,n+=o.vertexShader+`
`,i+=o.fragmentShader+`
`,r={...r,...o.uniforms}}),r={...r,...this.uniforms},{uniforms:r,vertexShader:`
        ${hu}
        ${fu}
        ${e}

        void main() {
          vec3 lamina_finalPosition = position;
          vec3 lamina_finalNormal = normal;

          ${n}

          csm_Position = lamina_finalPosition;
          csm_Normal = lamina_finalNormal;
        }
        `,fragmentShader:`
        ${hu}
        ${fu}
        ${sx}
        ${t}

        uniform vec3 u_lamina_color;
        uniform float u_lamina_alpha;

        void main() {
          vec4 lamina_finalColor = vec4(u_lamina_color, u_lamina_alpha);

          ${i}

          csm_DiffuseColor = lamina_finalColor;
         
        }
        `}}refresh(){const{uniforms:e,fragmentShader:t,vertexShader:n}=this.genShaders();super.update({fragmentShader:t,vertexShader:n,uniforms:e})}serialize(){return{constructor:"LayerMaterial",properties:{color:this.color,alpha:this.alpha,name:this.name,lighting:this.lighting}}}set color(e){var t,n;(t=this.uniforms)!=null&&(n=t.u_lamina_color)!=null&&n.value&&(this.uniforms.u_lamina_color.value=typeof e=="string"?new Ae(e).convertSRGBToLinear():e)}get color(){var e,t;return(e=this.uniforms)==null||(t=e.u_lamina_color)==null?void 0:t.value}set alpha(e){this.uniforms.u_lamina_alpha.value=e}get alpha(){return this.uniforms.u_lamina_alpha.value}}const pu=(s,e,t)=>{try{s.layers.find(n=>n.name==="noise")[e]=t}catch{}try{s.layers.find(n=>n.name==="Displace")[e]=t}catch{}return s};new Ae("#ff9090"),new Ae("#ff9090"),new gi({side:Pn,fog:!1,layers:[new Gn({colorA:new Ae("#002b4d").convertSRGBToLinear(),colorB:new Ae("#ff4040").convertSRGBToLinear(),alpha:1,contrast:.5,start:1,end:-4,axes:"x",mapping:"local",visible:!0}),new Ht({mapping:"local",type:"white",scale:1,colorA:"white",colorB:"black",mode:"subtract",alpha:.2})]}),new Ae("#90ff90"),new Ae("#90ff90"),new gi({side:Pn,fog:!1,layers:[new Gn({colorA:new Ae("#005030").convertSRGBToLinear(),colorB:new Ae("#0000ff").convertSRGBToLinear(),alpha:1,contrast:.5,start:1,end:-4,axes:"x",mapping:"local",visible:!0}),new Ht({mapping:"local",type:"white",scale:1,colorA:"white",colorB:"black",mode:"subtract",alpha:.2})]});const ax={MARBLE:{material:()=>new gi({color:"#ffffff",lighting:"physical",layers:[new Ht({colorA:new Ae("#1720a8"),colorB:new Ae("#9428a9"),colorC:new Ae("#f2feeb"),colorD:new Ae("#f0fef4"),alpha:1,scale:3,type:"curl",offset:[4.95,.35,.4],mapping:"local",mode:"normal",visible:!0}),new Vn({colorA:new Ae("#4166fc"),colorB:new Ae("#0030f1"),alpha:.8,near:.4854,far:.7661999999999932,origin:[-.4920000000000004,.4250000000000003,0],mapping:"vector",mode:"multiply",visible:!0}),new hn({color:new Ae("#fc0000"),alpha:1,power:2,intensity:1,bias:0,mode:"screen",visible:!0})]})},CORE:{material:()=>new gi({color:"#ff0000",lighting:"standard",layers:[new Ht({colorA:new Ae("#ecd5d5"),colorB:new Ae("#0b090a"),colorC:new Ae("#cb4d80"),colorD:new Ae("#ffffff"),alpha:.35,scale:1,type:"perlin",offset:[0,0,0],mapping:"local",mode:"normal",visible:!0}),new Ht({mapping:"local",type:"white",scale:1,colorA:"white",colorB:"black",mode:"subtract",alpha:.2}),new hn({color:new Ae("#eeff00"),alpha:.3,power:2.75,intensity:3.8,bias:0,mode:"normal",visible:!0}),new Dn({strength:6.45,scale:1,type:"perlin",offset:[0,0,0],mode:"normal",visible:!0})]})}};function mu(s){return Object.prototype.toString.call(s)==="[object Date]"}function Do(s,e,t,n){if(typeof t=="number"||mu(t)){const i=n-t,r=(t-e)/(s.dt||1/60),o=s.opts.stiffness*i,a=s.opts.damping*r,c=(o-a)*s.inv_mass,l=(r+c)*s.dt;return Math.abs(l)<s.opts.precision&&Math.abs(i)<s.opts.precision?n:(s.settled=!1,mu(t)?new Date(t.getTime()+l):t+l)}else{if(Array.isArray(t))return t.map((i,r)=>Do(s,e[r],t[r],n[r]));if(typeof t=="object"){const i={};for(const r in t)i[r]=Do(s,e[r],t[r],n[r]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function tl(s,e={}){const t=vn(s),{stiffness:n=.15,damping:i=.8,precision:r=.01}=e;let o,a,c,l=s,u=s,d=1,f=0,g=!1;function p(h,x={}){u=h;const E=c={};return s==null||x.hard||m.stiffness>=1&&m.damping>=1?(g=!0,o=ml(),l=h,t.set(s=u),Promise.resolve()):(x.soft&&(f=1/((x.soft===!0?.5:+x.soft)*60),d=0),a||(o=ml(),g=!1,a=Bd(w=>{if(g)return g=!1,a=null,!1;d=Math.min(d+f,1);const T={inv_mass:d,opts:m,settled:!0,dt:(w-o)*60/1e3},R=Do(T,l,s,u);return o=w,l=s,t.set(s=R),T.settled&&(a=null),!T.settled})),new Promise(w=>{a.promise.then(()=>{E===c&&w()})}))}const m={set:p,update:(h,x)=>p(h(u,s),x),subscribe:t.subscribe,stiffness:n,damping:i,precision:r};return m}function ox(s){let e,t,n,i;return e=new tv({props:{object:s[6],interactive:!0}}),e.$on("pointerenter",s[3]),e.$on("pointerleave",s[4]),n=new fn({props:{type:ga}}),{c(){tt(e.$$.fragment),t=Et(),tt(n.$$.fragment)},l(r){nt(e.$$.fragment,r),t=At(r),nt(n.$$.fragment,r)},m(r,o){it(e,r,o),_t(r,t,o),it(n,r,o),i=!0},p(r,o){const a={};o&64&&(a.object=r[6]),e.$set(a)},i(r){i||(je(e.$$.fragment,r),je(n.$$.fragment,r),i=!0)},o(r){$e(e.$$.fragment,r),$e(n.$$.fragment,r),i=!1},d(r){rt(e,r),r&&He(t),rt(n,r)}}}function lx(s){let e,t;return e=new fn({props:{type:Yn,castShadow:!0,material:s[0],scale:s[1],$$slots:{default:[ox,({ref:n})=>({6:n}),({ref:n})=>n?64:0]},$$scope:{ctx:s}}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.material=n[0]),i&2&&(r.scale=n[1]),i&194&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function cx(s,e,t){let n,i=ax.MARBLE.material(),r=0;i=pu(i,"scale",1),Ms(()=>{r+=.001;let l=r*1.2;t(0,i=pu(i,"offset",[l,l,l]))});const o=tl(1);return Sn(s,o,l=>t(1,n=l)),[i,n,o,()=>fs(o,n=2,n),()=>fs(o,n=1,n)]}class ux extends rn{constructor(e){super(),sn(this,e,cx,lx,an,{})}}function dx(s){let e,t;return e=new Qo({props:{enableZoom:!1,enablePan:!1,enableRotate:!1,target:{x:0,y:0,z:0}}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p:nr,i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function fx(s){let e,t;return e=new ux({}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function hx(s){let e,t,n,i,r,o,a,c;return e=new fn({props:{type:Cn,makeDefault:!0,position:[10,0,0],fov:24,$$slots:{default:[dx]},$$scope:{ctx:s}}}),n=new fn({props:{type:$o,castShadow:!0,position:[10,2,-10]}}),r=new fn({props:{type:Ko,intensity:.2}}),a=new fn({props:{type:Ar,$$slots:{default:[fx]},$$scope:{ctx:s}}}),{c(){tt(e.$$.fragment),t=Et(),tt(n.$$.fragment),i=Et(),tt(r.$$.fragment),o=Et(),tt(a.$$.fragment)},l(l){nt(e.$$.fragment,l),t=At(l),nt(n.$$.fragment,l),i=At(l),nt(r.$$.fragment,l),o=At(l),nt(a.$$.fragment,l)},m(l,u){it(e,l,u),_t(l,t,u),it(n,l,u),_t(l,i,u),it(r,l,u),_t(l,o,u),it(a,l,u),c=!0},p(l,u){const d={};u&1&&(d.$$scope={dirty:u,ctx:l}),e.$set(d);const f={};u&1&&(f.$$scope={dirty:u,ctx:l}),a.$set(f)},i(l){c||(je(e.$$.fragment,l),je(n.$$.fragment,l),je(r.$$.fragment,l),je(a.$$.fragment,l),c=!0)},o(l){$e(e.$$.fragment,l),$e(n.$$.fragment,l),$e(r.$$.fragment,l),$e(a.$$.fragment,l),c=!1},d(l){rt(e,l),l&&He(t),rt(n,l),l&&He(i),rt(r,l),l&&He(o),rt(a,l)}}}function px(s){let e,t,n,i,r,o,a;return n=new Zo({props:{$$slots:{default:[hx]},$$scope:{ctx:s}}}),{c(){e=Lt("div"),t=Lt("div"),tt(n.$$.fragment),i=Et(),r=Lt("span"),o=aa("重甲機神"),this.h()},l(c){e=Dt(c,"DIV",{class:!0});var l=It(e);t=Dt(l,"DIV",{class:!0});var u=It(t);nt(n.$$.fragment,u),u.forEach(He),i=At(l),r=Dt(l,"SPAN",{class:!0});var d=It(r);o=oa(d,"重甲機神"),d.forEach(He),l.forEach(He),this.h()},h(){ot(t,"class","absolute top-0 h-full w-full"),ot(r,"class","pointer-events-none inline-block align-middle text-[60pt] font-bold mix-blend-difference invert dark:invert-0"),ot(e,"class","relative flex h-full w-full items-center justify-center")},m(c,l){_t(c,e,l),Mt(e,t),it(n,t,null),Mt(e,i),Mt(e,r),Mt(r,o),a=!0},p(c,[l]){const u={};l&1&&(u.$$scope={dirty:l,ctx:c}),n.$set(u)},i(c){a||(je(n.$$.fragment,c),a=!0)},o(c){$e(n.$$.fragment,c),a=!1},d(c){c&&He(e),rt(n)}}}class mx extends rn{constructor(e){super(),sn(this,e,null,px,an,{})}}class gx extends gi{constructor(e){super({lighting:"physical",roughness:0,transmission:.9,reflectivity:1,thickness:.4,layers:e})}}const _x=()=>{const s=new Dn({strength:0,scale:.5,type:"perlin",offset:[.09189000000357626,0,0],mode:"normal",visible:!0});return{material:new gx([s,new Vn({colorA:new Ae("#000000"),colorB:new Ae("#000000"),alpha:.1,near:.4854,far:.7661999999999932,origin:[-.4920000000000004,.4250000000000003,0],mapping:"vector",mode:"multiply",visible:!0}),new hn({color:new Ae("#000"),alpha:1,power:3.3699999999999903,intensity:3.8999999999999946,bias:-.3430000000000002,mode:"screen",visible:!0})]),displace:s}},vx=()=>{const s=new Dn({strength:1.1,scale:.5,type:"perlin",offset:[-100,200,-100],mode:"normal",visible:!0});return{material:new gi({color:"#5ea1fd",lighting:"physical",layers:[s,new Ht({colorA:new Ae("#378cff"),colorB:new Ae("#3a88fe"),colorC:new Ae("#198dff"),colorD:new Ae("#74a7fe"),alpha:1,scale:.5,type:"perlin",offset:[-100,200,-100],mapping:"local",mode:"normal",visible:!0}),new hn({color:new Ae("#fc0000"),alpha:1,power:1.55,intensity:1.1,bias:0,mode:"screen",visible:!0})]}),displace:s}},xx=()=>{const s=new Dn({strength:1.1,scale:.5,type:"perlin",offset:[20,20,20],mode:"normal",visible:!0});return{material:new gi({color:"#5ea1fd",lighting:"physical",layers:[s,new Ht({colorA:new Ae("#00ff00"),colorB:new Ae("#00ff00"),colorC:new Ae("#00ff00"),colorD:new Ae("#00ff00"),alpha:1,scale:.5,type:"perlin",offset:[20,20,20],mapping:"local",mode:"normal",visible:!0}),new hn({color:new Ae("#ffff00"),alpha:1,power:1.55,intensity:1.1,bias:0,mode:"screen",visible:!0})]}),displace:s}},yx=()=>{const s=new Dn({strength:1.1,scale:.5,type:"perlin",offset:[60,-40,80],mode:"normal",visible:!0});return{material:new gi({color:"#5ea1fd",lighting:"physical",layers:[s,new Ht({colorA:new Ae("#ff0000"),colorB:new Ae("#ff0000"),colorC:new Ae("#ff0000"),colorD:new Ae("#ff0000"),alpha:1,scale:.5,type:"perlin",offset:[60,-40,80],mapping:"local",mode:"normal",visible:!0}),new hn({color:new Ae("#ff00ff"),alpha:1,power:1.55,intensity:1.1,bias:0,mode:"screen",visible:!0})]}),displace:s}},bx=()=>{const s=new Dn({strength:1.1,scale:.5,type:"perlin",offset:[30,-123,-203],mode:"normal",visible:!0});return{material:new gi({color:"#5ea1fd",lighting:"physical",layers:[s,new Ht({colorA:new Ae("#ff00ff"),colorB:new Ae("#ff00ff"),colorC:new Ae("#ff00ff"),colorD:new Ae("#ff00ff"),alpha:1,scale:.5,type:"perlin",offset:[30,-123,-203],mapping:"local",mode:"normal",visible:!0}),new hn({color:new Ae("#ff00ff"),alpha:1,power:1.55,intensity:1.1,bias:0,mode:"screen",visible:!0})]}),displace:s}},wx=()=>{const s=new Dn({strength:1.1,scale:.5,type:"perlin",offset:[-120,300,120],mode:"normal",visible:!0});return{material:new gi({color:"#5ea1fd",lighting:"physical",layers:[s,new Ht({colorA:new Ae("#dcdd10"),colorB:new Ae("#dcdd10"),colorC:new Ae("#dcdd10"),colorD:new Ae("#dcdd10"),alpha:1,scale:.5,type:"perlin",offset:[-120,300,120],mapping:"local",mode:"normal",visible:!0}),new hn({color:new Ae("#ff0000"),alpha:1,power:2.55,intensity:10.1,bias:0,mode:"screen",visible:!0})]}),displace:s}},Sx=[_x,vx,xx,yx,bx,wx];function Mx(s){let e,t;return e=new fn({props:{type:ga,args:[1,64,64]}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p:nr,i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function Ex(s){let e,t;return e=new fn({props:{type:Yn,material:s[3],position:s[0],scale:s[1],frustumCulled:!1,$$slots:{default:[Mx,({ref:n})=>({7:n}),({ref:n})=>n?128:0]},$$scope:{ctx:s}}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.position=n[0]),i&2&&(r.scale=n[1]),i&256&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function Ax(s,e,t){let n,{position:i}=e,{materialIndex:r}=e,{scaleO:o=1}=e;const a=tl(1,{stiffness:.05});Sn(s,a,u=>t(6,n=u));const{material:c,displace:l}=Sx[r]();return Ms(()=>{l.offset[0]+=.005*(1+(n-1)*5)}),s.$$set=u=>{"position"in u&&t(0,i=u.position),"materialIndex"in u&&t(4,r=u.materialIndex),"scaleO"in u&&t(1,o=u.scaleO)},[i,o,a,c,r]}class Sr extends rn{constructor(e){super(),sn(this,e,Ax,Ex,an,{position:0,materialIndex:4,scaleO:1})}}const Tx={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

		// sample the source
			vec4 cTextureScreen = texture2D( tDiffuse, vUv );

		// make some noise
			float dx = rand( vUv + time );

		// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

		// get us a sine and cosine
			vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );

		// add scanlines
			cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;

		// interpolate between source and result by intensity
			cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );

		// convert to grayscale if desired
			if( grayscale ) {

				cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );

			}

			gl_FragColor =  vec4( cResult, cTextureScreen.a );

		}`};class Cx extends Ss{constructor(e,t,n,i){super();const r=Tx;this.uniforms=Uo.clone(r.uniforms),this.material=new mi({uniforms:this.uniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),i!==void 0&&(this.uniforms.grayscale.value=i),e!==void 0&&(this.uniforms.nIntensity.value=e),t!==void 0&&(this.uniforms.sIntensity.value=t),n!==void 0&&(this.uniforms.sCount.value=n),this.fsQuad=new Ku(this.material)}render(e,t,n,i){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=i,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Px(s){let e,t;return e=new Q0({props:{pass:s[0]}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.pass=n[0]),e.$set(r)},i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function Lx(s,e,t){let n=new Cx(100,0,256);return n.renderToScreen=!0,[n]}class Dx extends rn{constructor(e){super(),sn(this,e,Lx,Px,an,{})}}const Ix=Math.PI/180;function Rx(s){let e,t;return e=new Qo({props:{enableZoom:!1,enablePan:!1,enableRotate:!1,target:{x:0,y:0,z:0}}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p:nr,i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function kx(s){let e,t,n,i;return e=new fn({props:{type:qo,args:[20,72]}}),n=new fn({props:{type:Xo,color:"#888888",transparent:!0,opacity:.1}}),{c(){tt(e.$$.fragment),t=Et(),tt(n.$$.fragment)},l(r){nt(e.$$.fragment,r),t=At(r),nt(n.$$.fragment,r)},m(r,o){it(e,r,o),_t(r,t,o),it(n,r,o),i=!0},p:nr,i(r){i||(je(e.$$.fragment,r),je(n.$$.fragment,r),i=!0)},o(r){$e(e.$$.fragment,r),$e(n.$$.fragment,r),i=!1},d(r){rt(e,r),r&&He(t),rt(n,r)}}}function zx(s){let e,t,n,i,r,o,a,c,l,u;return e=new fn({props:{type:Cn,makeDefault:!0,position:[10,0,0],fov:24,$$slots:{default:[Rx]},$$scope:{ctx:s}}}),n=new fn({props:{type:$o,castShadow:!0,position:[10,2,-10]}}),r=new fn({props:{type:Ko,intensity:.2}}),a=new fn({props:{type:Yn,"rotation.y":Ix*90,"position.x":-10,$$slots:{default:[kx]},$$scope:{ctx:s}}}),l=new Dx({}),{c(){tt(e.$$.fragment),t=Et(),tt(n.$$.fragment),i=Et(),tt(r.$$.fragment),o=Et(),tt(a.$$.fragment),c=Et(),tt(l.$$.fragment)},l(d){nt(e.$$.fragment,d),t=At(d),nt(n.$$.fragment,d),i=At(d),nt(r.$$.fragment,d),o=At(d),nt(a.$$.fragment,d),c=At(d),nt(l.$$.fragment,d)},m(d,f){it(e,d,f),_t(d,t,f),it(n,d,f),_t(d,i,f),it(r,d,f),_t(d,o,f),it(a,d,f),_t(d,c,f),it(l,d,f),u=!0},p(d,f){const g={};f&1&&(g.$$scope={dirty:f,ctx:d}),e.$set(g);const p={};f&1&&(p.$$scope={dirty:f,ctx:d}),a.$set(p)},i(d){u||(je(e.$$.fragment,d),je(n.$$.fragment,d),je(r.$$.fragment,d),je(a.$$.fragment,d),je(l.$$.fragment,d),u=!0)},o(d){$e(e.$$.fragment,d),$e(n.$$.fragment,d),$e(r.$$.fragment,d),$e(a.$$.fragment,d),$e(l.$$.fragment,d),u=!1},d(d){rt(e,d),d&&He(t),rt(n,d),d&&He(i),rt(r,d),d&&He(o),rt(a,d),d&&He(c),rt(l,d)}}}function Ox(s){let e,t,n;return t=new Zo({props:{$$slots:{default:[zx]},$$scope:{ctx:s}}}),{c(){e=Lt("div"),tt(t.$$.fragment),this.h()},l(i){e=Dt(i,"DIV",{class:!0});var r=It(e);nt(t.$$.fragment,r),r.forEach(He),this.h()},h(){ot(e,"class","absolute top-0 h-full w-full pointer-events-none")},m(i,r){_t(i,e,r),it(t,e,null),n=!0},p(i,[r]){const o={};r&1&&(o.$$scope={dirty:r,ctx:i}),t.$set(o)},i(i){n||(je(t.$$.fragment,i),n=!0)},o(i){$e(t.$$.fragment,i),n=!1},d(i){i&&He(e),rt(t)}}}class Nx extends rn{constructor(e){super(),sn(this,e,null,Ox,an,{})}}function Fx(s){let e,t,n,i;return e=new nd({props:{object:s[8],position:s[0]}}),n=new Qo({props:{enableZoom:!1,enablePan:!1,enableRotate:!1}}),{c(){tt(e.$$.fragment),t=Et(),tt(n.$$.fragment)},l(r){nt(e.$$.fragment,r),t=At(r),nt(n.$$.fragment,r)},m(r,o){it(e,r,o),_t(r,t,o),it(n,r,o),i=!0},p(r,o){const a={};o&256&&(a.object=r[8]),o&1&&(a.position=r[0]),e.$set(a)},i(r){i||(je(e.$$.fragment,r),je(n.$$.fragment,r),i=!0)},o(r){$e(e.$$.fragment,r),$e(n.$$.fragment,r),i=!1},d(r){rt(e,r),r&&He(t),rt(n,r)}}}function Ux(s){let e,t;return e=new fn({props:{type:Cn,makeDefault:!0,fov:24,$$slots:{default:[Fx,({ref:n})=>({8:n}),({ref:n})=>n?256:0]},$$scope:{ctx:s}}}),{c(){tt(e.$$.fragment)},l(n){nt(e.$$.fragment,n)},m(n,i){it(e,n,i),t=!0},p(n,[i]){const r={};i&769&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(je(e.$$.fragment,n),t=!0)},o(n){$e(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function Bx(s,e,t){let n,i;const{pointer:r,renderer:o}=ji();Sn(s,r,u=>t(5,i=u));let a=new se(10,0,0),c=new se(10,0,0);const l=tl([10,0,0]);return Sn(s,l,u=>t(4,n=u)),s.$$.update=()=>{s.$$.dirty&8&&o&&(t(3,o.debug.checkShaderErrors=!0,o),console.log("shader check active")),s.$$.dirty&32&&l.set([a.x,a.y+1*i.y,a.z-1*i.x]),s.$$.dirty&17&&(c.set(n[0],n[1],n[2]),t(0,c),t(4,n))},[c,r,l,o,n,i]}class Vx extends rn{constructor(e){super(),sn(this,e,Bx,Ux,an,{})}}function Gx(s){let e,t;return{c(){e=Lt("img"),this.h()},l(n){e=Dt(n,"IMG",{class:!0,src:!0}),this.h()},h(){ot(e,"class","absolute left-[40px] top-1/4 pointer-events-none w-[250px] sm:w-[300px] md:w-[500px]"),Fr(e.src,t="/images/logo-black-fill.svg")||ot(e,"src",t)},m(n,i){_t(n,e,i)},d(n){n&&He(e)}}}function Hx(s){let e,t;return{c(){e=Lt("img"),this.h()},l(n){e=Dt(n,"IMG",{class:!0,src:!0}),this.h()},h(){ot(e,"class","absolute left-[40px] top-1/4 pointer-events-none w-[250px] sm:w-[300px] md:w-[500px]"),Fr(e.src,t="/images/logo-fill.svg")||ot(e,"src",t)},m(n,i){_t(n,e,i)},d(n){n&&He(e)}}}function Wx(s){let e,t,n,i,r,o,a,c,l,u,d,f;return e=new Sr({props:{position:[-4,-.9,-1.5],materialIndex:0,scaleO:.5}}),n=new Sr({props:{position:[-2,0,1],materialIndex:1}}),r=new Sr({props:{position:[-10,4,-4],materialIndex:2}}),a=new Sr({props:{position:[-40,-2,-12],materialIndex:1}}),l=new Sr({props:{position:[-10,-2,-1],materialIndex:3}}),d=new Sr({props:{position:[-20,-2,6],materialIndex:5}}),{c(){tt(e.$$.fragment),t=Et(),tt(n.$$.fragment),i=Et(),tt(r.$$.fragment),o=Et(),tt(a.$$.fragment),c=Et(),tt(l.$$.fragment),u=Et(),tt(d.$$.fragment)},l(g){nt(e.$$.fragment,g),t=At(g),nt(n.$$.fragment,g),i=At(g),nt(r.$$.fragment,g),o=At(g),nt(a.$$.fragment,g),c=At(g),nt(l.$$.fragment,g),u=At(g),nt(d.$$.fragment,g)},m(g,p){it(e,g,p),_t(g,t,p),it(n,g,p),_t(g,i,p),it(r,g,p),_t(g,o,p),it(a,g,p),_t(g,c,p),it(l,g,p),_t(g,u,p),it(d,g,p),f=!0},p:nr,i(g){f||(je(e.$$.fragment,g),je(n.$$.fragment,g),je(r.$$.fragment,g),je(a.$$.fragment,g),je(l.$$.fragment,g),je(d.$$.fragment,g),f=!0)},o(g){$e(e.$$.fragment,g),$e(n.$$.fragment,g),$e(r.$$.fragment,g),$e(a.$$.fragment,g),$e(l.$$.fragment,g),$e(d.$$.fragment,g),f=!1},d(g){rt(e,g),g&&He(t),rt(n,g),g&&He(i),rt(r,g),g&&He(o),rt(a,g),g&&He(c),rt(l,g),g&&He(u),rt(d,g)}}}function jx(s){let e,t,n,i,r,o,a,c;return e=new Vx({}),n=new fn({props:{type:$o,castShadow:!0,position:[10,2,-10]}}),r=new fn({props:{type:Ko,intensity:.2}}),a=new fn({props:{type:Ar,$$slots:{default:[Wx]},$$scope:{ctx:s}}}),{c(){tt(e.$$.fragment),t=Et(),tt(n.$$.fragment),i=Et(),tt(r.$$.fragment),o=Et(),tt(a.$$.fragment)},l(l){nt(e.$$.fragment,l),t=At(l),nt(n.$$.fragment,l),i=At(l),nt(r.$$.fragment,l),o=At(l),nt(a.$$.fragment,l)},m(l,u){it(e,l,u),_t(l,t,u),it(n,l,u),_t(l,i,u),it(r,l,u),_t(l,o,u),it(a,l,u),c=!0},p(l,u){const d={};u&2&&(d.$$scope={dirty:u,ctx:l}),a.$set(d)},i(l){c||(je(e.$$.fragment,l),je(n.$$.fragment,l),je(r.$$.fragment,l),je(a.$$.fragment,l),c=!0)},o(l){$e(e.$$.fragment,l),$e(n.$$.fragment,l),$e(r.$$.fragment,l),$e(a.$$.fragment,l),c=!1},d(l){rt(e,l),l&&He(t),rt(n,l),l&&He(i),rt(r,l),l&&He(o),rt(a,l)}}}function qx(s){let e,t;return{c(){e=Lt("img"),this.h()},l(n){e=Dt(n,"IMG",{class:!0,src:!0}),this.h()},h(){ot(e,"class","absolute left-[45px] top-[calc(100vh*0.25+5px)] w-[250px] sm:w-[300px] md:w-[500px] pointer-events-none"),Fr(e.src,t="/images/logo-black-stroke.svg")||ot(e,"src",t)},m(n,i){_t(n,e,i)},d(n){n&&He(e)}}}function Xx(s){let e,t;return{c(){e=Lt("img"),this.h()},l(n){e=Dt(n,"IMG",{class:!0,src:!0}),this.h()},h(){ot(e,"class","absolute left-[45px] top-[calc(100vh*0.25+5px)] w-[250px] sm:w-[300px] md:w-[500px] pointer-events-none"),Fr(e.src,t="/images/logo-stroke.svg")||ot(e,"src",t)},m(n,i){_t(n,e,i)},d(n){n&&He(e)}}}function $x(s){let e,t;return{c(){e=Lt("img"),this.h()},l(n){e=Dt(n,"IMG",{class:!0,src:!0}),this.h()},h(){ot(e,"class","absolute right-[40px] bottom-[100px] pointer-events-none w-[50px]"),Fr(e.src,t="/images/logo-multi-black.svg")||ot(e,"src",t)},m(n,i){_t(n,e,i)},d(n){n&&He(e)}}}function Kx(s){let e,t;return{c(){e=Lt("img"),this.h()},l(n){e=Dt(n,"IMG",{class:!0,src:!0}),this.h()},h(){ot(e,"class","absolute right-[40px] bottom-[100px] pointer-events-none w-[50px]"),Fr(e.src,t="/images/logo-multi.svg")||ot(e,"src",t)},m(n,i){_t(n,e,i)},d(n){n&&He(e)}}}function Yx(s){let e,t,n,i,r,o,a;function c(x,E){return x[0]?Hx:Gx}let l=c(s),u=l(s);i=new Zo({props:{$$slots:{default:[jx]},$$scope:{ctx:s}}});function d(x,E){return x[0]?Xx:qx}let f=d(s),g=f(s);function p(x,E){return x[0]?Kx:$x}let m=p(s),h=m(s);return{c(){e=Lt("div"),u.c(),t=Et(),n=Lt("div"),tt(i.$$.fragment),r=Et(),g.c(),o=Et(),h.c(),this.h()},l(x){e=Dt(x,"DIV",{class:!0});var E=It(e);u.l(E),t=At(E),n=Dt(E,"DIV",{class:!0});var w=It(n);nt(i.$$.fragment,w),w.forEach(He),r=At(E),g.l(E),o=At(E),h.l(E),E.forEach(He),this.h()},h(){ot(n,"class","absolute h-full w-full"),ot(e,"class","relative flex h-full w-full dark:text-white select-none")},m(x,E){_t(x,e,E),u.m(e,null),Mt(e,t),Mt(e,n),it(i,n,null),Mt(e,r),g.m(e,null),Mt(e,o),h.m(e,null),a=!0},p(x,[E]){l!==(l=c(x))&&(u.d(1),u=l(x),u&&(u.c(),u.m(e,t)));const w={};E&2&&(w.$$scope={dirty:E,ctx:x}),i.$set(w),f!==(f=d(x))&&(g.d(1),g=f(x),g&&(g.c(),g.m(e,o))),m!==(m=p(x))&&(h.d(1),h=m(x),h&&(h.c(),h.m(e,null)))},i(x){a||(je(i.$$.fragment,x),a=!0)},o(x){$e(i.$$.fragment,x),a=!1},d(x){x&&He(e),u.d(),rt(i),g.d(),h.d()}}}function Zx(s,e,t){let{isDarkMode:n}=e;return s.$$set=i=>{"isDarkMode"in i&&t(0,n=i.isDarkMode)},[n]}class Jx extends rn{constructor(e){super(),sn(this,e,Zx,Yx,an,{isDarkMode:0})}}function Qx(s){let e,t,n,i,r,o,a,c,l,u;return{c(){e=Lt("nav"),t=Lt("div"),n=Lt("ul"),i=Lt("li"),r=Lt("a"),o=aa("Login"),a=Et(),c=Lt("li"),l=Lt("a"),u=aa("Hack"),this.h()},l(d){e=Dt(d,"NAV",{class:!0});var f=It(e);t=Dt(f,"DIV",{class:!0});var g=It(t);n=Dt(g,"UL",{class:!0});var p=It(n);i=Dt(p,"LI",{});var m=It(i);r=Dt(m,"A",{href:!0});var h=It(r);o=oa(h,"Login"),h.forEach(He),m.forEach(He),a=At(p),c=Dt(p,"LI",{});var x=It(c);l=Dt(x,"A",{href:!0});var E=It(l);u=oa(E,"Hack"),E.forEach(He),x.forEach(He),p.forEach(He),g.forEach(He),f.forEach(He),this.h()},h(){ot(r,"href","/"),Os(r,"font-bold",s[0].url.pathname==="/"),ot(l,"href","/Hack"),Os(l,"font-bold",s[0].url.pathname.startsWith("/admin")),ot(n,"class","m-2 flex space-x-4"),ot(t,"class","my-1 w-full rounded-md bg-black bg-opacity-20 px-1 text-base-300 shadow-md backdrop-blur-lg dark:shadow-lg"),ot(e,"class","absolute z-10 flex w-full items-center justify-between p-2 px-5")},m(d,f){_t(d,e,f),Mt(e,t),Mt(t,n),Mt(n,i),Mt(i,r),Mt(r,o),Mt(n,a),Mt(n,c),Mt(c,l),Mt(l,u)},p(d,[f]){f&1&&Os(r,"font-bold",d[0].url.pathname==="/"),f&1&&Os(l,"font-bold",d[0].url.pathname.startsWith("/admin"))},i:nr,o:nr,d(d){d&&He(e)}}}function ey(s,e,t){let n;return Sn(s,Wd,i=>t(0,n=i)),[n]}class ty extends rn{constructor(e){super(),sn(this,e,ey,Qx,an,{})}}/*! For license information please see elements.js.LICENSE.txt */var ny={776:function(s,e,t){(function(n,i,r){var o=function(){return o=Object.assign||function(p){for(var m,h=1,x=arguments.length;h<x;h++)for(var E in m=arguments[h])Object.prototype.hasOwnProperty.call(m,E)&&(p[E]=m[E]);return p},o.apply(this,arguments)};function a(p,m){var h=typeof Symbol=="function"&&p[Symbol.iterator];if(!h)return p;var x,E,w=h.call(p),T=[];try{for(;(m===void 0||m-- >0)&&!(x=w.next()).done;)T.push(x.value)}catch(R){E={error:R}}finally{try{x&&!x.done&&(h=w.return)&&h.call(w)}finally{if(E)throw E.error}}return T}function c(p,m){return[p,!p||p.endsWith("/")?"":"/",m,".json"].join("")}function l(p,m){var h=p;return m&&Object.keys(m).forEach(function(x){var E=m[x],w=new RegExp("{"+x+"}","gm");h=h.replace(w,E.toString())}),h}function u(p,m,h){var x=p[m];if(!x)return h;var E=h.split("."),w="";do{var T=x[w+=E.shift()];T===void 0||typeof T!="object"&&E.length?E.length?w+=".":x=h:(x=T,w="")}while(E.length);return x}var d={},f={root:"",lang:"en",fallbackLang:"en"},g=i.createContext(null);n.TranslateContext=g,n.TranslateProvider=function(p){var m=function(T,R){T=Object.assign({},f,T),d=R||d;var C=a(r.useState(T.lang),2),O=C[0],v=C[1],S=a(r.useState(d),2),y=S[0],z=S[1],F=a(r.useState(!1),2),H=F[0],B=F[1],Z=function(K){if(!y.hasOwnProperty(K)){B(!1);var ae=c(T.root,K);fetch(ae).then(function(ee){return ee.json()}).then(function(ee){d[K]=ee,z(o({},d)),B(!0)}).catch(function(ee){console.log("Aww, snap.",ee),z(o({},d)),B(!0)})}};return r.useEffect(function(){Z(T.fallbackLang),Z(O)},[O]),{lang:O,setLang:v,t:function(K,ae){if(!y.hasOwnProperty(O))return K;var ee=u(y,O,K);return ee===K&&O!==T.fallbackLang&&(ee=u(y,T.fallbackLang,K)),l(ee,ae)},isReady:H}}({root:p.root||"assets",lang:p.lang||"en",fallbackLang:p.fallbackLang||"en"},p.translations),h=m.t,x=m.setLang,E=m.lang,w=m.isReady;return i.h(g.Provider,{value:{t:h,setLang:x,lang:E,isReady:w}},p.children)},n.format=l,n.getResourceUrl=c,n.getValue=u,Object.defineProperty(n,"__esModule",{value:!0})})(e,t(473),t(792))},42:(s,e)=>{var t;(function(){var n={}.hasOwnProperty;function i(){for(var r=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var c=typeof a;if(c==="string"||c==="number")r.push(a);else if(Array.isArray(a)){if(a.length){var l=i.apply(null,a);l&&r.push(l)}}else if(c==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){r.push(a.toString());continue}for(var u in a)n.call(a,u)&&a[u]&&r.push(u)}}}return r.join(" ")}s.exports?(i.default=i,s.exports=i):(t=function(){return i}.apply(e,[]))===void 0||(s.exports=t)})()},547:(s,e,t)=>{t.d(e,{Z:()=>a});var n=t(933),i=t.n(n),r=t(476),o=t.n(r)()(i());o.push([s.id,'.hanko_accordion{font-weight:var(--font-weight, 400);font-size:var(--font-size, 14px);font-family:var(--font-family, sans-serif);width:100%;overflow:hidden}.hanko_accordion .hanko_accordionItem{color:var(--color, #171717);margin:.25rem 0;overflow:hidden}.hanko_accordion .hanko_accordionItem .hanko_label{border-radius:var(--border-radius, 4px);border-style:none;height:var(--item-height, 34px);background:var(--background-color, white);box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0 1rem;margin:0;cursor:pointer;transition:all .35s}.hanko_accordion .hanko_accordionItem .hanko_label .hanko_labelText{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hanko_accordion .hanko_accordionItem .hanko_label .hanko_labelText .hanko_description{color:var(--color-shade-1, #8f9095)}.hanko_accordion .hanko_accordionItem .hanko_label.hanko_dropdown{color:var(--link-color, #506cf0);justify-content:flex-start;width:fit-content}.hanko_accordion .hanko_accordionItem .hanko_label:hover{color:var(--brand-contrast-color, white);background:var(--brand-color-shade-1, #6b84fb)}.hanko_accordion .hanko_accordionItem .hanko_label:hover .hanko_description{color:var(--brand-contrast-color, white)}.hanko_accordion .hanko_accordionItem .hanko_label:hover.hanko_dropdown{color:var(--link-color, #506cf0);background:none}.hanko_accordion .hanko_accordionItem .hanko_label:not(.hanko_dropdown)::after{content:"❯";width:1rem;text-align:center;transition:all .35s}.hanko_accordion .hanko_accordionItem .hanko_label.hanko_dropdown::before{content:"+";width:1em;text-align:center;transition:all .35s}.hanko_accordion .hanko_accordionItem .hanko_accordionInput{position:absolute;opacity:0;z-index:-1}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label{color:var(--brand-contrast-color, white);background:var(--brand-color, #506cf0)}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label .hanko_description{color:var(--brand-contrast-color, white)}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label.hanko_dropdown{color:var(--link-color, #506cf0);background:none}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label:not(.hanko_dropdown)::after{transform:rotate(90deg)}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label.hanko_dropdown::before{content:"-"}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label~.hanko_accordionContent{margin:.25rem 1rem;opacity:1;max-height:100vh}.hanko_accordion .hanko_accordionItem .hanko_accordionContent{max-height:0;margin:0 1rem;opacity:0;overflow:hidden;transition:all .35s}.hanko_accordion .hanko_accordionItem .hanko_accordionContent.hanko_dropdownContent{border-style:none}',""]),o.locals={accordion:"hanko_accordion",accordionItem:"hanko_accordionItem",label:"hanko_label",labelText:"hanko_labelText",description:"hanko_description",dropdown:"hanko_dropdown",accordionInput:"hanko_accordionInput",accordionContent:"hanko_accordionContent",dropdownContent:"hanko_dropdownContent"};const a=o},801:(s,e,t)=>{t.d(e,{Z:()=>a});var n=t(933),i=t.n(n),r=t(476),o=t.n(r)()(i());o.push([s.id,".hanko_errorMessage{font-weight:var(--font-weight, 400);font-size:var(--font-size, 14px);font-family:var(--font-family, sans-serif);border-radius:var(--border-radius, 4px);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);color:var(--error-color, #e82020);background:var(--background-color, white);padding:.25rem;margin:var(--item-margin, 0.5rem 0);min-height:var(--item-height, 34px);display:flex;align-items:center;box-sizing:border-box}.hanko_errorMessage>span:first-child{display:inline-flex}.hanko_errorMessage[hidden]{display:none}",""]),o.locals={errorMessage:"hanko_errorMessage"};const a=o},187:(s,e,t)=>{t.d(e,{Z:()=>a});var n=t(933),i=t.n(n),r=t(476),o=t.n(r)()(i());o.push([s.id,'.hanko_form{display:flex;flex-grow:1}.hanko_form .hanko_ul{flex-grow:1;margin:var(--item-margin, 0.5rem 0);padding-inline-start:0;list-style-type:none;display:flex;flex-wrap:wrap;gap:1em}.hanko_form .hanko_li{display:flex;max-width:100%;flex-grow:1;flex-basis:min-content}.hanko_button{font-weight:var(--font-weight, 400);font-size:var(--font-size, 14px);font-family:var(--font-family, sans-serif);border-radius:var(--border-radius, 4px);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);white-space:nowrap;width:100%;min-width:var(--button-min-width, 7em);height:var(--item-height, 34px);outline:none;cursor:pointer;transition:.1s ease-out;flex-grow:1;flex-shrink:1}.hanko_button:disabled{cursor:default}.hanko_button.hanko_primary{color:var(--brand-contrast-color, white);background:var(--brand-color, #506cf0);border-color:var(--brand-color, #506cf0)}.hanko_button.hanko_primary:hover{color:var(--brand-contrast-color, white);background:var(--brand-color-shade-1, #6b84fb);border-color:var(--brand-color, #506cf0)}.hanko_button.hanko_primary:focus{color:var(--brand-contrast-color, white);background:var(--brand-color, #506cf0);border-color:var(--color, #171717)}.hanko_button.hanko_primary:disabled{color:var(--color-shade-1, #8f9095);background:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-2, #e5e6ef)}.hanko_button.hanko_secondary{color:var(--color, #171717);background:var(--background-color, white);border-color:var(--color, #171717)}.hanko_button.hanko_secondary:hover{color:var(--color, #171717);background:var(--color-shade-2, #e5e6ef);border-color:var(--color, #171717)}.hanko_button.hanko_secondary:focus{color:var(--color, #171717);background:var(--background-color, white);border-color:var(--brand-color, #506cf0)}.hanko_button.hanko_secondary:disabled{color:var(--color-shade-1, #8f9095);background:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-1, #8f9095)}.hanko_button.hanko_dangerous{color:var(--error-color, #e82020);background:var(--background-color, white);border-color:var(--error-color, #e82020);flex-grow:0;width:auto}.hanko_inputWrapper{flex-grow:1;position:relative;display:flex;min-width:var(--input-min-width, 14em);max-width:100%}.hanko_input{font-weight:var(--font-weight, 400);font-size:var(--font-size, 14px);font-family:var(--font-family, sans-serif);border-radius:var(--border-radius, 4px);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);height:var(--item-height, 34px);color:var(--color, #171717);border-color:var(--color-shade-1, #8f9095);background:var(--background-color, white);padding:0 .5rem;outline:none;width:100%;box-sizing:border-box;transition:.1s ease-out}.hanko_input:-webkit-autofill,.hanko_input:-webkit-autofill:hover,.hanko_input:-webkit-autofill:focus{-webkit-text-fill-color:var(--color, #171717);-webkit-box-shadow:0 0 0 50px var(--background-color, white) inset}.hanko_input::-ms-reveal,.hanko_input::-ms-clear{display:none}.hanko_input::placeholder{color:var(--color-shade-1, #8f9095)}.hanko_input:focus{color:var(--color, #171717);border-color:var(--color, #171717)}.hanko_input:disabled{color:var(--color-shade-1, #8f9095);background:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-1, #8f9095)}.hanko_passcodeInputWrapper{flex-grow:1;min-width:var(--input-min-width, 14em);max-width:fit-content;position:relative;display:flex;justify-content:space-between}.hanko_passcodeInputWrapper .hanko_passcodeDigitWrapper{flex-grow:1;margin:0 .5rem 0 0}.hanko_passcodeInputWrapper .hanko_passcodeDigitWrapper:last-child{margin:0}.hanko_passcodeInputWrapper .hanko_passcodeDigitWrapper .hanko_input{text-align:center}.hanko_checkboxWrapper{font-weight:var(--font-weight, 400);font-size:var(--font-size, 14px);font-family:var(--font-family, sans-serif);color:var(--color, #171717);align-items:center;display:flex}.hanko_checkboxWrapper .hanko_label{color:inherit;padding-left:.5rem;cursor:pointer}.hanko_checkboxWrapper .hanko_label.hanko_disabled{cursor:default;color:var(--color-shade-1, #8f9095)}.hanko_checkboxWrapper .hanko_checkbox{border:currentColor solid 1px;border-radius:.15em;appearance:none;-webkit-appearance:none;width:1.1rem;height:1.1rem;margin:0;color:currentColor;background-color:var(--background-color, white);font:inherit;box-shadow:none;display:inline-flex;place-content:center;cursor:pointer}.hanko_checkboxWrapper .hanko_checkbox:checked{background-color:var(--color, #171717)}.hanko_checkboxWrapper .hanko_checkbox:disabled{cursor:default;background-color:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-1, #8f9095)}.hanko_checkboxWrapper .hanko_checkbox:checked:after{content:"✓";color:var(--background-color, white);position:absolute;line-height:1.1rem}.hanko_checkboxWrapper .hanko_checkbox:disabled:after{color:var(--color-shade-1, #8f9095)}',""]),o.locals={form:"hanko_form",ul:"hanko_ul",li:"hanko_li",button:"hanko_button",primary:"hanko_primary",secondary:"hanko_secondary",dangerous:"hanko_dangerous",inputWrapper:"hanko_inputWrapper",input:"hanko_input",passcodeInputWrapper:"hanko_passcodeInputWrapper",passcodeDigitWrapper:"hanko_passcodeDigitWrapper",checkboxWrapper:"hanko_checkboxWrapper",label:"hanko_label",disabled:"hanko_disabled",checkbox:"hanko_checkbox"};const a=o},693:(s,e,t)=>{t.d(e,{Z:()=>a});var n=t(933),i=t.n(n),r=t(476),o=t.n(r)()(i());o.push([s.id,".hanko_headline{color:var(--color, #171717);font-family:var(--font-family, sans-serif);text-align:left;letter-spacing:0;font-style:normal;line-height:1.1}.hanko_headline.hanko_grade1{font-size:var(--headline1-font-size, 24px);font-weight:var(--headline1-font-weight, 600);margin:var(--headline1-margin, 0 0 0.5rem)}.hanko_headline.hanko_grade2{font-size:var(--headline2-font-size, 14px);font-weight:var(--headline2-font-weight, 600);margin:var(--headline2-margin, 1rem 0 0.25rem)}",""]),o.locals={headline:"hanko_headline",grade1:"hanko_grade1",grade2:"hanko_grade2"};const a=o},653:(s,e,t)=>{t.d(e,{Z:()=>a});var n=t(933),i=t.n(n),r=t(476),o=t.n(r)()(i());o.push([s.id,".hanko_icon,.hanko_loadingSpinnerWrapper .hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_loadingSpinner,.hanko_exclamationMark,.hanko_checkmark{display:inline-block;fill:var(--brand-contrast-color, white);width:18px}.hanko_icon.hanko_secondary,.hanko_loadingSpinnerWrapper .hanko_secondary.hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_secondary.hanko_loadingSpinner,.hanko_secondary.hanko_exclamationMark,.hanko_secondary.hanko_checkmark{fill:var(--color, #171717)}.hanko_icon.hanko_disabled,.hanko_loadingSpinnerWrapper .hanko_disabled.hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_disabled.hanko_loadingSpinner,.hanko_disabled.hanko_exclamationMark,.hanko_disabled.hanko_checkmark{fill:var(--color-shade-1, #8f9095)}.hanko_checkmark{fill:var(--brand-color, #506cf0)}.hanko_checkmark.hanko_secondary{fill:var(--color-shade-1, #8f9095)}.hanko_checkmark.hanko_fadeOut{animation:hanko_fadeOut ease-out 1.5s forwards !important}@keyframes hanko_fadeOut{0%{opacity:1}100%{opacity:0}}.hanko_exclamationMark{fill:var(--error-color, #e82020);padding-right:5px}.hanko_loadingSpinnerWrapperIcon{justify-content:flex-start;width:100%;column-gap:10px;margin-left:10px}.hanko_loadingSpinnerWrapper,.hanko_loadingSpinnerWrapperIcon{display:inline-flex;align-items:center;height:100%;margin:0 5px}.hanko_loadingSpinnerWrapper .hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_loadingSpinner{fill:var(--brand-color, #506cf0);animation:hanko_spin 500ms ease-in-out infinite}.hanko_loadingSpinnerWrapper.hanko_secondary,.hanko_secondary.hanko_loadingSpinnerWrapperIcon{fill:var(--color-shade-1, #8f9095)}@keyframes hanko_spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.hanko_googleIcon.hanko_disabled{fill:var(--color-shade-1, #8f9095)}.hanko_googleIcon.hanko_blue{fill:#4285f4}.hanko_googleIcon.hanko_green{fill:#34a853}.hanko_googleIcon.hanko_yellow{fill:#fbbc05}.hanko_googleIcon.hanko_red{fill:#ea4335}",""]),o.locals={icon:"hanko_icon",loadingSpinnerWrapper:"hanko_loadingSpinnerWrapper",loadingSpinner:"hanko_loadingSpinner",loadingSpinnerWrapperIcon:"hanko_loadingSpinnerWrapperIcon",exclamationMark:"hanko_exclamationMark",checkmark:"hanko_checkmark",secondary:"hanko_secondary",disabled:"hanko_disabled",fadeOut:"hanko_fadeOut",spin:"hanko_spin",googleIcon:"hanko_googleIcon",blue:"hanko_blue",green:"hanko_green",yellow:"hanko_yellow",red:"hanko_red"};const a=o},618:(s,e,t)=>{t.d(e,{Z:()=>a});var n=t(933),i=t.n(n),r=t(476),o=t.n(r)()(i());o.push([s.id,".hanko_link{font-weight:var(--font-weight, 400);font-size:var(--font-size, 14px);font-family:var(--font-family, sans-serif);color:var(--link-color, #506cf0);text-decoration:var(--link-text-decoration, none);cursor:pointer;background:none !important;border:none;padding:0 !important}.hanko_link:hover{text-decoration:var(--link-text-decoration-hover, underline)}.hanko_link.hanko_disabled{color:var(--color, #171717);pointer-events:none;cursor:default}.hanko_link.hanko_danger{color:var(--error-color, #e82020) !important}.hanko_linkWrapper{display:inline-flex;flex-direction:row;justify-content:space-between;align-items:center;height:20px}.hanko_linkWrapper.hanko_reverse{flex-direction:row-reverse}",""]),o.locals={link:"hanko_link",disabled:"hanko_disabled",danger:"hanko_danger",linkWrapper:"hanko_linkWrapper",reverse:"hanko_reverse"};const a=o},517:(s,e,t)=>{t.d(e,{Z:()=>a});var n=t(933),i=t.n(n),r=t(476),o=t.n(r)()(i());o.push([s.id,".hanko_paragraph{font-weight:var(--font-weight, 400);font-size:var(--font-size, 14px);font-family:var(--font-family, sans-serif);color:var(--color, #171717);margin:var(--item-margin, 0.5rem 0);text-align:left;word-break:break-word}",""]),o.locals={paragraph:"hanko_paragraph"};const a=o},548:(s,e,t)=>{t.d(e,{Z:()=>a});var n=t(933),i=t.n(n),r=t(476),o=t.n(r)()(i());o.push([s.id,".hanko_spacer{height:1em}.hanko_divider{font-weight:var(--font-weight, 400);font-size:var(--font-size, 14px);font-family:var(--font-family, sans-serif);display:var(--divider-display, flex);visibility:var(--divider-visibility, visible);color:var(--color-shade-1, #8f9095);margin:var(--item-margin, 0.5rem 0)}.hanko_divider .hanko_line{border-bottom-style:var(--border-style, solid);border-bottom-width:var(--border-width, 1px);color:inherit;font:inherit;width:100%}.hanko_divider .hanko_text{font:inherit;color:inherit;background:var(--background-color, white);padding:var(--divider-padding, 0 42px);line-height:.1em}",""]),o.locals={spacer:"hanko_spacer",divider:"hanko_divider",line:"hanko_line",text:"hanko_text"};const a=o},323:(s,e,t)=>{t.d(e,{Z:()=>a});var n=t(933),i=t.n(n),r=t(476),o=t.n(r)()(i());o.push([s.id,".hanko_container{background-color:var(--background-color, white);padding:var(--container-padding, 0);max-width:var(--container-max-width, 600px);display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:flex-start;box-sizing:border-box}.hanko_content{box-sizing:border-box;flex:0 1 auto;width:100%;height:100%}.hanko_footer{padding:var(--item-margin, 0.5rem 0);box-sizing:border-box;width:100%}.hanko_footer :nth-child(1){float:left}.hanko_footer :nth-child(2){float:right}",""]),o.locals={container:"hanko_container",content:"hanko_content",footer:"hanko_footer"};const a=o},476:s=>{s.exports=function(e){var t=[];return t.toString=function(){return this.map(function(n){var i="",r=n[5]!==void 0;return n[4]&&(i+="@supports (".concat(n[4],") {")),n[2]&&(i+="@media ".concat(n[2]," {")),r&&(i+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),i+=e(n),r&&(i+="}"),n[2]&&(i+="}"),n[4]&&(i+="}"),i}).join("")},t.i=function(n,i,r,o,a){typeof n=="string"&&(n=[[null,n,void 0]]);var c={};if(r)for(var l=0;l<this.length;l++){var u=this[l][0];u!=null&&(c[u]=!0)}for(var d=0;d<n.length;d++){var f=[].concat(n[d]);r&&c[f[0]]||(a!==void 0&&(f[5]===void 0||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),i&&(f[2]&&(f[1]="@media ".concat(f[2]," {").concat(f[1],"}")),f[2]=i),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),t.push(f))}},t}},933:s=>{s.exports=function(e){return e[1]}},473:(s,e,t)=>{t.r(e),t.d(e,{Component:()=>R,Fragment:()=>T,cloneElement:()=>fe,createContext:()=>ue,createElement:()=>x,createRef:()=>w,h:()=>x,hydrate:()=>le,isValidElement:()=>o,options:()=>i,render:()=>J,toChildArray:()=>F});var n,i,r,o,a,c,l,u,d,f={},g=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function m(_,b){for(var D in b)_[D]=b[D];return _}function h(_){var b=_.parentNode;b&&b.removeChild(_)}function x(_,b,D){var V,$,Y,Se={};for(Y in b)Y=="key"?V=b[Y]:Y=="ref"?$=b[Y]:Se[Y]=b[Y];if(arguments.length>2&&(Se.children=arguments.length>3?n.call(arguments,2):D),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)Se[Y]===void 0&&(Se[Y]=_.defaultProps[Y]);return E(_,Se,V,$,null)}function E(_,b,D,V,$){var Y={type:_,props:b,key:D,ref:V,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:$??++r};return $==null&&i.vnode!=null&&i.vnode(Y),Y}function w(){return{current:null}}function T(_){return _.children}function R(_,b){this.props=_,this.context=b}function C(_,b){if(b==null)return _.__?C(_.__,_.__.__k.indexOf(_)+1):null;for(var D;b<_.__k.length;b++)if((D=_.__k[b])!=null&&D.__e!=null)return D.__e;return typeof _.type=="function"?C(_):null}function O(_){var b,D;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,b=0;b<_.__k.length;b++)if((D=_.__k[b])!=null&&D.__e!=null){_.__e=_.__c.base=D.__e;break}return O(_)}}function v(_){(!_.__d&&(_.__d=!0)&&a.push(_)&&!S.__r++||c!==i.debounceRendering)&&((c=i.debounceRendering)||l)(S)}function S(){var _,b,D,V,$,Y,Se,De;for(a.sort(u);_=a.shift();)_.__d&&(b=a.length,V=void 0,$=void 0,Se=(Y=(D=_).__v).__e,(De=D.__P)&&(V=[],($=m({},Y)).__v=Y.__v+1,de(De,Y,$,D.__n,De.ownerSVGElement!==void 0,Y.__h!=null?[Se]:null,V,Se??C(Y),Y.__h),X(V,Y),Y.__e!=Se&&O(Y)),a.length>b&&a.sort(u));S.__r=0}function y(_,b,D,V,$,Y,Se,De,ke,Ie){var te,Ke,Oe,I,L,pe,xe,be=V&&V.__k||g,Te=be.length;for(D.__k=[],te=0;te<b.length;te++)if((I=D.__k[te]=(I=b[te])==null||typeof I=="boolean"||typeof I=="function"?null:typeof I=="string"||typeof I=="number"||typeof I=="bigint"?E(null,I,null,null,I):Array.isArray(I)?E(T,{children:I},null,null,null):I.__b>0?E(I.type,I.props,I.key,I.ref?I.ref:null,I.__v):I)!=null){if(I.__=D,I.__b=D.__b+1,(Oe=be[te])===null||Oe&&I.key==Oe.key&&I.type===Oe.type)be[te]=void 0;else for(Ke=0;Ke<Te;Ke++){if((Oe=be[Ke])&&I.key==Oe.key&&I.type===Oe.type){be[Ke]=void 0;break}Oe=null}de(_,I,Oe=Oe||f,$,Y,Se,De,ke,Ie),L=I.__e,(Ke=I.ref)&&Oe.ref!=Ke&&(xe||(xe=[]),Oe.ref&&xe.push(Oe.ref,null,I),xe.push(Ke,I.__c||L,I)),L!=null?(pe==null&&(pe=L),typeof I.type=="function"&&I.__k===Oe.__k?I.__d=ke=z(I,ke,_):ke=H(_,I,Oe,be,L,ke),typeof D.type=="function"&&(D.__d=ke)):ke&&Oe.__e==ke&&ke.parentNode!=_&&(ke=C(Oe))}for(D.__e=pe,te=Te;te--;)be[te]!=null&&(typeof D.type=="function"&&be[te].__e!=null&&be[te].__e==D.__d&&(D.__d=B(V).nextSibling),he(be[te],be[te]));if(xe)for(te=0;te<xe.length;te++)W(xe[te],xe[++te],xe[++te])}function z(_,b,D){for(var V,$=_.__k,Y=0;$&&Y<$.length;Y++)(V=$[Y])&&(V.__=_,b=typeof V.type=="function"?z(V,b,D):H(D,V,V,$,V.__e,b));return b}function F(_,b){return b=b||[],_==null||typeof _=="boolean"||(Array.isArray(_)?_.some(function(D){F(D,b)}):b.push(_)),b}function H(_,b,D,V,$,Y){var Se,De,ke;if(b.__d!==void 0)Se=b.__d,b.__d=void 0;else if(D==null||$!=Y||$.parentNode==null)e:if(Y==null||Y.parentNode!==_)_.appendChild($),Se=null;else{for(De=Y,ke=0;(De=De.nextSibling)&&ke<V.length;ke+=1)if(De==$)break e;_.insertBefore($,Y),Se=Y}return Se!==void 0?Se:$.nextSibling}function B(_){var b,D,V;if(_.type==null||typeof _.type=="string")return _.__e;if(_.__k){for(b=_.__k.length-1;b>=0;b--)if((D=_.__k[b])&&(V=B(D)))return V}return null}function Z(_,b,D){b[0]==="-"?_.setProperty(b,D??""):_[b]=D==null?"":typeof D!="number"||p.test(b)?D:D+"px"}function K(_,b,D,V,$){var Y;e:if(b==="style")if(typeof D=="string")_.style.cssText=D;else{if(typeof V=="string"&&(_.style.cssText=V=""),V)for(b in V)D&&b in D||Z(_.style,b,"");if(D)for(b in D)V&&D[b]===V[b]||Z(_.style,b,D[b])}else if(b[0]==="o"&&b[1]==="n")Y=b!==(b=b.replace(/Capture$/,"")),b=b.toLowerCase()in _?b.toLowerCase().slice(2):b.slice(2),_.l||(_.l={}),_.l[b+Y]=D,D?V||_.addEventListener(b,Y?ee:ae,Y):_.removeEventListener(b,Y?ee:ae,Y);else if(b!=="dangerouslySetInnerHTML"){if($)b=b.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(b!=="width"&&b!=="height"&&b!=="href"&&b!=="list"&&b!=="form"&&b!=="tabIndex"&&b!=="download"&&b in _)try{_[b]=D??"";break e}catch{}typeof D=="function"||(D==null||D===!1&&b.indexOf("-")==-1?_.removeAttribute(b):_.setAttribute(b,D))}}function ae(_){return this.l[_.type+!1](i.event?i.event(_):_)}function ee(_){return this.l[_.type+!0](i.event?i.event(_):_)}function de(_,b,D,V,$,Y,Se,De,ke){var Ie,te,Ke,Oe,I,L,pe,xe,be,Te,Be,U,Q,ze,Pe,Fe=b.type;if(b.constructor!==void 0)return null;D.__h!=null&&(ke=D.__h,De=b.__e=D.__e,b.__h=null,Y=[De]),(Ie=i.__b)&&Ie(b);try{e:if(typeof Fe=="function"){if(xe=b.props,be=(Ie=Fe.contextType)&&V[Ie.__c],Te=Ie?be?be.props.value:Ie.__:V,D.__c?pe=(te=b.__c=D.__c).__=te.__E:("prototype"in Fe&&Fe.prototype.render?b.__c=te=new Fe(xe,Te):(b.__c=te=new R(xe,Te),te.constructor=Fe,te.render=Me),be&&be.sub(te),te.props=xe,te.state||(te.state={}),te.context=Te,te.__n=V,Ke=te.__d=!0,te.__h=[],te._sb=[]),te.__s==null&&(te.__s=te.state),Fe.getDerivedStateFromProps!=null&&(te.__s==te.state&&(te.__s=m({},te.__s)),m(te.__s,Fe.getDerivedStateFromProps(xe,te.__s))),Oe=te.props,I=te.state,te.__v=b,Ke)Fe.getDerivedStateFromProps==null&&te.componentWillMount!=null&&te.componentWillMount(),te.componentDidMount!=null&&te.__h.push(te.componentDidMount);else{if(Fe.getDerivedStateFromProps==null&&xe!==Oe&&te.componentWillReceiveProps!=null&&te.componentWillReceiveProps(xe,Te),!te.__e&&te.shouldComponentUpdate!=null&&te.shouldComponentUpdate(xe,te.__s,Te)===!1||b.__v===D.__v){for(b.__v!==D.__v&&(te.props=xe,te.state=te.__s,te.__d=!1),te.__e=!1,b.__e=D.__e,b.__k=D.__k,b.__k.forEach(function(We){We&&(We.__=b)}),Be=0;Be<te._sb.length;Be++)te.__h.push(te._sb[Be]);te._sb=[],te.__h.length&&Se.push(te);break e}te.componentWillUpdate!=null&&te.componentWillUpdate(xe,te.__s,Te),te.componentDidUpdate!=null&&te.__h.push(function(){te.componentDidUpdate(Oe,I,L)})}if(te.context=Te,te.props=xe,te.__P=_,U=i.__r,Q=0,"prototype"in Fe&&Fe.prototype.render){for(te.state=te.__s,te.__d=!1,U&&U(b),Ie=te.render(te.props,te.state,te.context),ze=0;ze<te._sb.length;ze++)te.__h.push(te._sb[ze]);te._sb=[]}else do te.__d=!1,U&&U(b),Ie=te.render(te.props,te.state,te.context),te.state=te.__s;while(te.__d&&++Q<25);te.state=te.__s,te.getChildContext!=null&&(V=m(m({},V),te.getChildContext())),Ke||te.getSnapshotBeforeUpdate==null||(L=te.getSnapshotBeforeUpdate(Oe,I)),Pe=Ie!=null&&Ie.type===T&&Ie.key==null?Ie.props.children:Ie,y(_,Array.isArray(Pe)?Pe:[Pe],b,D,V,$,Y,Se,De,ke),te.base=b.__e,b.__h=null,te.__h.length&&Se.push(te),pe&&(te.__E=te.__=null),te.__e=!1}else Y==null&&b.__v===D.__v?(b.__k=D.__k,b.__e=D.__e):b.__e=j(D.__e,b,D,V,$,Y,Se,ke);(Ie=i.diffed)&&Ie(b)}catch(We){b.__v=null,(ke||Y!=null)&&(b.__e=De,b.__h=!!ke,Y[Y.indexOf(De)]=null),i.__e(We,b,D)}}function X(_,b){i.__c&&i.__c(b,_),_.some(function(D){try{_=D.__h,D.__h=[],_.some(function(V){V.call(D)})}catch(V){i.__e(V,D.__v)}})}function j(_,b,D,V,$,Y,Se,De){var ke,Ie,te,Ke=D.props,Oe=b.props,I=b.type,L=0;if(I==="svg"&&($=!0),Y!=null){for(;L<Y.length;L++)if((ke=Y[L])&&"setAttribute"in ke==!!I&&(I?ke.localName===I:ke.nodeType===3)){_=ke,Y[L]=null;break}}if(_==null){if(I===null)return document.createTextNode(Oe);_=$?document.createElementNS("http://www.w3.org/2000/svg",I):document.createElement(I,Oe.is&&Oe),Y=null,De=!1}if(I===null)Ke===Oe||De&&_.data===Oe||(_.data=Oe);else{if(Y=Y&&n.call(_.childNodes),Ie=(Ke=D.props||f).dangerouslySetInnerHTML,te=Oe.dangerouslySetInnerHTML,!De){if(Y!=null)for(Ke={},L=0;L<_.attributes.length;L++)Ke[_.attributes[L].name]=_.attributes[L].value;(te||Ie)&&(te&&(Ie&&te.__html==Ie.__html||te.__html===_.innerHTML)||(_.innerHTML=te&&te.__html||""))}if(function(pe,xe,be,Te,Be){var U;for(U in be)U==="children"||U==="key"||U in xe||K(pe,U,null,be[U],Te);for(U in xe)Be&&typeof xe[U]!="function"||U==="children"||U==="key"||U==="value"||U==="checked"||be[U]===xe[U]||K(pe,U,xe[U],be[U],Te)}(_,Oe,Ke,$,De),te)b.__k=[];else if(L=b.props.children,y(_,Array.isArray(L)?L:[L],b,D,V,$&&I!=="foreignObject",Y,Se,Y?Y[0]:D.__k&&C(D,0),De),Y!=null)for(L=Y.length;L--;)Y[L]!=null&&h(Y[L]);De||("value"in Oe&&(L=Oe.value)!==void 0&&(L!==_.value||I==="progress"&&!L||I==="option"&&L!==Ke.value)&&K(_,"value",L,Ke.value,!1),"checked"in Oe&&(L=Oe.checked)!==void 0&&L!==_.checked&&K(_,"checked",L,Ke.checked,!1))}return _}function W(_,b,D){try{typeof _=="function"?_(b):_.current=b}catch(V){i.__e(V,D)}}function he(_,b,D){var V,$;if(i.unmount&&i.unmount(_),(V=_.ref)&&(V.current&&V.current!==_.__e||W(V,null,b)),(V=_.__c)!=null){if(V.componentWillUnmount)try{V.componentWillUnmount()}catch(Y){i.__e(Y,b)}V.base=V.__P=null,_.__c=void 0}if(V=_.__k)for($=0;$<V.length;$++)V[$]&&he(V[$],b,D||typeof _.type!="function");D||_.__e==null||h(_.__e),_.__=_.__e=_.__d=void 0}function Me(_,b,D){return this.constructor(_,D)}function J(_,b,D){var V,$,Y;i.__&&i.__(_,b),$=(V=typeof D=="function")?null:D&&D.__k||b.__k,Y=[],de(b,_=(!V&&D||b).__k=x(T,null,[_]),$||f,f,b.ownerSVGElement!==void 0,!V&&D?[D]:$?null:b.firstChild?n.call(b.childNodes):null,Y,!V&&D?D:$?$.__e:b.firstChild,V),X(Y,_)}function le(_,b){J(_,b,le)}function fe(_,b,D){var V,$,Y,Se=m({},_.props);for(Y in b)Y=="key"?V=b[Y]:Y=="ref"?$=b[Y]:Se[Y]=b[Y];return arguments.length>2&&(Se.children=arguments.length>3?n.call(arguments,2):D),E(_.type,Se,V||_.key,$||_.ref,null)}function ue(_,b){var D={__c:b="__cC"+d++,__:_,Consumer:function(V,$){return V.children($)},Provider:function(V){var $,Y;return this.getChildContext||($=[],(Y={})[b]=this,this.getChildContext=function(){return Y},this.shouldComponentUpdate=function(Se){this.props.value!==Se.value&&$.some(function(De){De.__e=!0,v(De)})},this.sub=function(Se){$.push(Se);var De=Se.componentWillUnmount;Se.componentWillUnmount=function(){$.splice($.indexOf(Se),1),De&&De.call(Se)}}),V.children}};return D.Provider.__=D.Consumer.contextType=D}n=g.slice,i={__e:function(_,b,D,V){for(var $,Y,Se;b=b.__;)if(($=b.__c)&&!$.__)try{if((Y=$.constructor)&&Y.getDerivedStateFromError!=null&&($.setState(Y.getDerivedStateFromError(_)),Se=$.__d),$.componentDidCatch!=null&&($.componentDidCatch(_,V||{}),Se=$.__d),Se)return $.__E=$}catch(De){_=De}throw _}},r=0,o=function(_){return _!=null&&_.constructor===void 0},R.prototype.setState=function(_,b){var D;D=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=m({},this.state),typeof _=="function"&&(_=_(m({},D),this.props)),_&&m(D,_),_!=null&&this.__v&&(b&&this._sb.push(b),v(this))},R.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),v(this))},R.prototype.render=T,a=[],l=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(_,b){return _.__v.__b-b.__v.__b},S.__r=0,d=0},792:(s,e,t)=>{t.r(e),t.d(e,{useCallback:()=>v,useContext:()=>S,useDebugValue:()=>y,useEffect:()=>w,useErrorBoundary:()=>z,useId:()=>F,useImperativeHandle:()=>C,useLayoutEffect:()=>T,useMemo:()=>O,useReducer:()=>E,useRef:()=>R,useState:()=>x});var n,i,r,o,a=t(473),c=0,l=[],u=[],d=a.options.__b,f=a.options.__r,g=a.options.diffed,p=a.options.__c,m=a.options.unmount;function h(X,j){a.options.__h&&a.options.__h(i,X,c||j),c=0;var W=i.__H||(i.__H={__:[],__h:[]});return X>=W.__.length&&W.__.push({__V:u}),W.__[X]}function x(X){return c=1,E(de,X)}function E(X,j,W){var he=h(n++,2);if(he.t=X,!he.__c&&(he.__=[W?W(j):de(void 0,j),function(fe){var ue=he.__N?he.__N[0]:he.__[0],_=he.t(ue,fe);ue!==_&&(he.__N=[_,he.__[1]],he.__c.setState({}))}],he.__c=i,!i.u)){var Me=function(fe,ue,_){if(!he.__c.__H)return!0;var b=he.__c.__H.__.filter(function(V){return V.__c});if(b.every(function(V){return!V.__N}))return!J||J.call(this,fe,ue,_);var D=!1;return b.forEach(function(V){if(V.__N){var $=V.__[0];V.__=V.__N,V.__N=void 0,$!==V.__[0]&&(D=!0)}}),!(!D&&he.__c.props===fe)&&(!J||J.call(this,fe,ue,_))};i.u=!0;var J=i.shouldComponentUpdate,le=i.componentWillUpdate;i.componentWillUpdate=function(fe,ue,_){if(this.__e){var b=J;J=void 0,Me(fe,ue,_),J=b}le&&le.call(this,fe,ue,_)},i.shouldComponentUpdate=Me}return he.__N||he.__}function w(X,j){var W=h(n++,3);!a.options.__s&&ee(W.__H,j)&&(W.__=X,W.i=j,i.__H.__h.push(W))}function T(X,j){var W=h(n++,4);!a.options.__s&&ee(W.__H,j)&&(W.__=X,W.i=j,i.__h.push(W))}function R(X){return c=5,O(function(){return{current:X}},[])}function C(X,j,W){c=6,T(function(){return typeof X=="function"?(X(j()),function(){return X(null)}):X?(X.current=j(),function(){return X.current=null}):void 0},W==null?W:W.concat(X))}function O(X,j){var W=h(n++,7);return ee(W.__H,j)?(W.__V=X(),W.i=j,W.__h=X,W.__V):W.__}function v(X,j){return c=8,O(function(){return X},j)}function S(X){var j=i.context[X.__c],W=h(n++,9);return W.c=X,j?(W.__==null&&(W.__=!0,j.sub(i)),j.props.value):X.__}function y(X,j){a.options.useDebugValue&&a.options.useDebugValue(j?j(X):X)}function z(X){var j=h(n++,10),W=x();return j.__=X,i.componentDidCatch||(i.componentDidCatch=function(he,Me){j.__&&j.__(he,Me),W[1](he)}),[W[0],function(){W[1](void 0)}]}function F(){var X=h(n++,11);if(!X.__){for(var j=i.__v;j!==null&&!j.__m&&j.__!==null;)j=j.__;var W=j.__m||(j.__m=[0,0]);X.__="P"+W[0]+"-"+W[1]++}return X.__}function H(){for(var X;X=l.shift();)if(X.__P&&X.__H)try{X.__H.__h.forEach(K),X.__H.__h.forEach(ae),X.__H.__h=[]}catch(j){X.__H.__h=[],a.options.__e(j,X.__v)}}a.options.__b=function(X){i=null,d&&d(X)},a.options.__r=function(X){f&&f(X),n=0;var j=(i=X.__c).__H;j&&(r===i?(j.__h=[],i.__h=[],j.__.forEach(function(W){W.__N&&(W.__=W.__N),W.__V=u,W.__N=W.i=void 0})):(j.__h.forEach(K),j.__h.forEach(ae),j.__h=[])),r=i},a.options.diffed=function(X){g&&g(X);var j=X.__c;j&&j.__H&&(j.__H.__h.length&&(l.push(j)!==1&&o===a.options.requestAnimationFrame||((o=a.options.requestAnimationFrame)||Z)(H)),j.__H.__.forEach(function(W){W.i&&(W.__H=W.i),W.__V!==u&&(W.__=W.__V),W.i=void 0,W.__V=u})),r=i=null},a.options.__c=function(X,j){j.some(function(W){try{W.__h.forEach(K),W.__h=W.__h.filter(function(he){return!he.__||ae(he)})}catch(he){j.some(function(Me){Me.__h&&(Me.__h=[])}),j=[],a.options.__e(he,W.__v)}}),p&&p(X,j)},a.options.unmount=function(X){m&&m(X);var j,W=X.__c;W&&W.__H&&(W.__H.__.forEach(function(he){try{K(he)}catch(Me){j=Me}}),W.__H=void 0,j&&a.options.__e(j,W.__v))};var B=typeof requestAnimationFrame=="function";function Z(X){var j,W=function(){clearTimeout(he),B&&cancelAnimationFrame(j),setTimeout(X)},he=setTimeout(W,100);B&&(j=requestAnimationFrame(W))}function K(X){var j=i,W=X.__c;typeof W=="function"&&(X.__c=void 0,W()),i=j}function ae(X){var j=i;X.__c=X.__(),i=j}function ee(X,j){return!X||X.length!==j.length||j.some(function(W,he){return W!==X[he]})}function de(X,j){return typeof j=="function"?j(X):j}},892:s=>{var e=[];function t(r){for(var o=-1,a=0;a<e.length;a++)if(e[a].identifier===r){o=a;break}return o}function n(r,o){for(var a={},c=[],l=0;l<r.length;l++){var u=r[l],d=o.base?u[0]+o.base:u[0],f=a[d]||0,g="".concat(d," ").concat(f);a[d]=f+1;var p=t(g),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(p!==-1)e[p].references++,e[p].updater(m);else{var h=i(m,o);o.byIndex=l,e.splice(l,0,{identifier:g,updater:h,references:1})}c.push(g)}return c}function i(r,o){var a=o.domAPI(o);return a.update(r),function(c){if(c){if(c.css===r.css&&c.media===r.media&&c.sourceMap===r.sourceMap&&c.supports===r.supports&&c.layer===r.layer)return;a.update(r=c)}else a.remove()}}s.exports=function(r,o){var a=n(r=r||[],o=o||{});return function(c){c=c||[];for(var l=0;l<a.length;l++){var u=t(a[l]);e[u].references--}for(var d=n(c,o),f=0;f<a.length;f++){var g=t(a[f]);e[g].references===0&&(e[g].updater(),e.splice(g,1))}a=d}}},60:s=>{s.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(s,e,t)=>{s.exports=function(n){var i=t.nc;i&&n.setAttribute("nonce",i)}},357:s=>{var e,t=(e=[],function(r,o){return e[r]=o,e.filter(Boolean).join(`
`)});function n(r,o,a,c){var l;if(a)l="";else{l="",c.supports&&(l+="@supports (".concat(c.supports,") {")),c.media&&(l+="@media ".concat(c.media," {"));var u=c.layer!==void 0;u&&(l+="@layer".concat(c.layer.length>0?" ".concat(c.layer):""," {")),l+=c.css,u&&(l+="}"),c.media&&(l+="}"),c.supports&&(l+="}")}if(r.styleSheet)r.styleSheet.cssText=t(o,l);else{var d=document.createTextNode(l),f=r.childNodes;f[o]&&r.removeChild(f[o]),f.length?r.insertBefore(d,f[o]):r.appendChild(d)}}var i={singleton:null,singletonCounter:0};s.exports=function(r){if(typeof document>"u")return{update:function(){},remove:function(){}};var o=i.singletonCounter++,a=i.singleton||(i.singleton=r.insertStyleElement(r));return{update:function(c){n(a,o,!1,c)},remove:function(c){n(a,o,!0,c)}}}}},gu={};function St(s){var e=gu[s];if(e!==void 0)return e.exports;var t=gu[s]={id:s,exports:{}};return ny[s].call(t.exports,t,t.exports,St),t.exports}St.n=s=>{var e=s&&s.__esModule?()=>s.default:()=>s;return St.d(e,{a:e}),e},St.d=(s,e)=>{for(var t in e)St.o(e,t)&&!St.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:e[t]})},St.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e),St.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},St.nc=void 0;var va={};(()=>{St.d(va,{Mx:()=>cl,mD:()=>ul,z2:()=>zd});var s={};St.r(s),St.d(s,{checkmark:()=>fd,exclamation:()=>hd,github:()=>md,google:()=>pd,passkey:()=>wa,spinner:()=>As});var e=St(473),t=0;function n(A,M,P,k,G,oe){var ne,ie,ve={};for(ie in M)ie=="ref"?ne=M[ie]:ve[ie]=M[ie];var ye={type:A,props:ve,key:P,ref:ne,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--t,__source:G,__self:oe};if(typeof A=="function"&&(ne=A.defaultProps))for(ie in ne)ve[ie]===void 0&&(ve[ie]=ne[ie]);return e.options.vnode&&e.options.vnode(ye),ye}function i(){return i=Object.assign?Object.assign.bind():function(A){for(var M=1;M<arguments.length;M++){var P=arguments[M];for(var k in P)Object.prototype.hasOwnProperty.call(P,k)&&(A[k]=P[k])}return A},i.apply(this,arguments)}var r=["context","children"];function o(A){this.getChildContext=function(){return A.context};var M=A.children,P=function(k,G){if(k==null)return{};var oe,ne,ie={},ve=Object.keys(k);for(ne=0;ne<ve.length;ne++)G.indexOf(oe=ve[ne])>=0||(ie[oe]=k[oe]);return ie}(A,r);return(0,e.cloneElement)(M,P)}function a(){var A=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(A),this._vdom=(0,e.h)(o,i({},this._props,{context:A.detail.context}),f(this,this._vdomComponent)),(this.hasAttribute("hydrate")?e.hydrate:e.render)(this._vdom,this._root)}function c(A){return A.replace(/-(\w)/g,function(M,P){return P?P.toUpperCase():""})}function l(A,M,P){if(this._vdom){var k={};k[A]=P=P??void 0,k[c(A)]=P,this._vdom=(0,e.cloneElement)(this._vdom,k),(0,e.render)(this._vdom,this._root)}}function u(){(0,e.render)(this._vdom=null,this._root)}function d(A,M){var P=this;return(0,e.h)("slot",i({},A,{ref:function(k){k?(P.ref=k,P._listener||(P._listener=function(G){G.stopPropagation(),G.detail.context=M},k.addEventListener("_preact",P._listener))):P.ref.removeEventListener("_preact",P._listener)}}))}function f(A,M){if(A.nodeType===3)return A.data;if(A.nodeType!==1)return null;var P=[],k={},G=0,oe=A.attributes,ne=A.childNodes;for(G=oe.length;G--;)oe[G].name!=="slot"&&(k[oe[G].name]=oe[G].value,k[c(oe[G].name)]=oe[G].value);for(G=ne.length;G--;){var ie=f(ne[G],null),ve=ne[G].slot;ve?k[ve]=(0,e.h)(d,{name:ve},ie):P[G]=ie}var ye=M?(0,e.h)(d,null,P):P;return(0,e.h)(M||A.nodeName.toLowerCase(),k,ye)}var g=St(776),p=St(792);function m(A,M){for(var P in M)A[P]=M[P];return A}function h(A,M){for(var P in A)if(P!=="__source"&&!(P in M))return!0;for(var k in M)if(k!=="__source"&&A[k]!==M[k])return!0;return!1}function x(A){this.props=A}(x.prototype=new e.Component).isPureReactComponent=!0,x.prototype.shouldComponentUpdate=function(A,M){return h(this.props,A)||h(this.state,M)};var E=e.options.__b;e.options.__b=function(A){A.type&&A.type.__f&&A.ref&&(A.props.ref=A.ref,A.ref=null),E&&E(A)};var w=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911,T=(e.toChildArray,e.options.__e);e.options.__e=function(A,M,P,k){if(A.then){for(var G,oe=M;oe=oe.__;)if((G=oe.__c)&&G.__c)return M.__e==null&&(M.__e=P.__e,M.__k=P.__k),G.__c(A,M)}T(A,M,P,k)};var R=e.options.unmount;function C(A,M,P){return A&&(A.__c&&A.__c.__H&&(A.__c.__H.__.forEach(function(k){typeof k.__c=="function"&&k.__c()}),A.__c.__H=null),(A=m({},A)).__c!=null&&(A.__c.__P===P&&(A.__c.__P=M),A.__c=null),A.__k=A.__k&&A.__k.map(function(k){return C(k,M,P)})),A}function O(A,M,P){return A&&(A.__v=null,A.__k=A.__k&&A.__k.map(function(k){return O(k,M,P)}),A.__c&&A.__c.__P===M&&(A.__e&&P.insertBefore(A.__e,A.__d),A.__c.__e=!0,A.__c.__P=P)),A}function v(){this.__u=0,this.t=null,this.__b=null}function S(A){var M=A.__.__c;return M&&M.__a&&M.__a(A)}function y(){this.u=null,this.o=null}e.options.unmount=function(A){var M=A.__c;M&&M.__R&&M.__R(),M&&A.__h===!0&&(A.type=null),R&&R(A)},(v.prototype=new e.Component).__c=function(A,M){var P=M.__c,k=this;k.t==null&&(k.t=[]),k.t.push(P);var G=S(k.__v),oe=!1,ne=function(){oe||(oe=!0,P.__R=null,G?G(ie):ie())};P.__R=ne;var ie=function(){if(!--k.__u){if(k.state.__a){var ye=k.state.__a;k.__v.__k[0]=O(ye,ye.__c.__P,ye.__c.__O)}var we;for(k.setState({__a:k.__b=null});we=k.t.pop();)we.forceUpdate()}},ve=M.__h===!0;k.__u++||ve||k.setState({__a:k.__b=k.__v.__k[0]}),A.then(ne,ne)},v.prototype.componentWillUnmount=function(){this.t=[]},v.prototype.render=function(A,M){if(this.__b){if(this.__v.__k){var P=document.createElement("div"),k=this.__v.__k[0].__c;this.__v.__k[0]=C(this.__b,P,k.__O=k.__P)}this.__b=null}var G=M.__a&&(0,e.createElement)(e.Fragment,null,A.fallback);return G&&(G.__h=null),[(0,e.createElement)(e.Fragment,null,M.__a?null:A.children),G]};var z=function(A,M,P){if(++P[1]===P[0]&&A.o.delete(M),A.props.revealOrder&&(A.props.revealOrder[0]!=="t"||!A.o.size))for(P=A.u;P;){for(;P.length>3;)P.pop()();if(P[1]<P[0])break;A.u=P=P[2]}};(y.prototype=new e.Component).__a=function(A){var M=this,P=S(M.__v),k=M.o.get(A);return k[0]++,function(G){var oe=function(){M.props.revealOrder?(k.push(G),z(M,A,k)):G()};P?P(oe):oe()}},y.prototype.render=function(A){this.u=null,this.o=new Map;var M=(0,e.toChildArray)(A.children);A.revealOrder&&A.revealOrder[0]==="b"&&M.reverse();for(var P=M.length;P--;)this.o.set(M[P],this.u=[1,0,this.u]);return A.children},y.prototype.componentDidUpdate=y.prototype.componentDidMount=function(){var A=this;this.o.forEach(function(M,P){z(A,P,M)})};var F=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Z=/[A-Z0-9]/g,K=typeof document<"u",ae=function(A){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(A)};e.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(A){Object.defineProperty(e.Component.prototype,A,{configurable:!0,get:function(){return this["UNSAFE_"+A]},set:function(M){Object.defineProperty(this,A,{configurable:!0,writable:!0,value:M})}})});var ee=e.options.event;function de(){}function X(){return this.cancelBubble}function j(){return this.defaultPrevented}e.options.event=function(A){return ee&&(A=ee(A)),A.persist=de,A.isPropagationStopped=X,A.isDefaultPrevented=j,A.nativeEvent=A};var W={configurable:!0,get:function(){return this.class}},he=e.options.vnode;e.options.vnode=function(A){var M=A.type,P=A.props,k=P;if(typeof M=="string"){for(var G in k={},P){var oe=P[G];if(!(G==="value"&&"defaultValue"in P&&oe==null||K&&G==="children"&&M==="noscript")){var ne=G.toLowerCase();G==="defaultValue"&&"value"in P&&P.value==null?G="value":G==="download"&&oe===!0?oe="":ne==="ondoubleclick"?G="ondblclick":ne!=="onchange"||M!=="input"&&M!=="textarea"||ae(P.type)?ne==="onfocus"?G="onfocusin":ne==="onblur"?G="onfocusout":B.test(G)?G=ne:M.indexOf("-")===-1&&H.test(G)?G=G.replace(Z,"-$&").toLowerCase():oe===null&&(oe=void 0):ne=G="oninput",ne==="oninput"&&k[G=ne]&&(G="oninputCapture"),k[G]=oe}}M=="select"&&k.multiple&&Array.isArray(k.value)&&(k.value=(0,e.toChildArray)(P.children).forEach(function(ie){ie.props.selected=k.value.indexOf(ie.props.value)!=-1})),M=="select"&&k.defaultValue!=null&&(k.value=(0,e.toChildArray)(P.children).forEach(function(ie){ie.props.selected=k.multiple?k.defaultValue.indexOf(ie.props.value)!=-1:k.defaultValue==ie.props.value})),A.props=k,P.class!=P.className&&(W.enumerable="className"in P,P.className!=null&&(k.class=P.className),Object.defineProperty(k,"className",W))}A.$$typeof=F,he&&he(A)};var Me=e.options.__r;e.options.__r=function(A){Me&&Me(A),A.__c};var J=e.options.diffed;e.options.diffed=function(A){J&&J(A);var M=A.props,P=A.__e;P!=null&&A.type==="textarea"&&"value"in M&&M.value!==P.value&&(P.value=M.value==null?"":M.value)},e.Fragment,p.useLayoutEffect,p.useState,p.useId,p.useReducer,p.useEffect,p.useLayoutEffect,p.useRef,p.useImperativeHandle,p.useMemo,p.useCallback,p.useContext,p.useDebugValue,e.createElement,e.createContext,e.createRef,e.Fragment,e.Component;class le extends Error{constructor(M,P,k){super(M),this.code=void 0,this.cause=void 0,this.code=P,this.cause=k,Object.setPrototypeOf(this,le.prototype)}}class fe extends le{constructor(M){super("Technical error","somethingWentWrong",M),Object.setPrototypeOf(this,fe.prototype)}}class ue extends le{constructor(M,P){super("Conflict error","conflict",P),Object.setPrototypeOf(this,ue.prototype)}}class _ extends le{constructor(M){super("Request timed out error","requestTimeout",M),Object.setPrototypeOf(this,_.prototype)}}class b extends le{constructor(M){super("Request cancelled error","requestCancelled",M),Object.setPrototypeOf(this,b.prototype)}}class D extends le{constructor(M){super("Invalid password error","invalidPassword",M),Object.setPrototypeOf(this,D.prototype)}}class V extends le{constructor(M){super("Invalid Passcode error","invalidPasscode",M),Object.setPrototypeOf(this,V.prototype)}}class $ extends le{constructor(M){super("Invalid WebAuthn credential error","invalidWebauthnCredential",M),Object.setPrototypeOf(this,$.prototype)}}class Y extends le{constructor(M){super("Passcode expired error","passcodeExpired",M),Object.setPrototypeOf(this,Y.prototype)}}class Se extends le{constructor(M){super("Maximum number of Passcode attempts reached error","passcodeAttemptsReached",M),Object.setPrototypeOf(this,Se.prototype)}}class De extends le{constructor(M){super("Not found error","notFound",M),Object.setPrototypeOf(this,De.prototype)}}class ke extends le{constructor(M,P){super("Too many requests error","tooManyRequests",P),this.retryAfter=void 0,this.retryAfter=M,Object.setPrototypeOf(this,ke.prototype)}}class Ie extends le{constructor(M){super("Unauthorized error","unauthorized",M),Object.setPrototypeOf(this,Ie.prototype)}}class te extends le{constructor(M){super("User verification error","userVerification",M),Object.setPrototypeOf(this,te.prototype)}}class Ke extends le{constructor(M){super("Maximum number of email addresses reached error","maxNumOfEmailAddressesReached",M),Object.setPrototypeOf(this,Ke.prototype)}}class Oe extends le{constructor(M){super("The email address already exists","emailAddressAlreadyExistsError",M),Object.setPrototypeOf(this,Oe.prototype)}}class I extends le{constructor(M,P){super("An error occurred during third party sign up/sign in",M,P),Object.setPrototypeOf(this,I.prototype)}}function L(A){for(var M=1;M<arguments.length;M++){var P=arguments[M];for(var k in P)A[k]=P[k]}return A}var pe=function A(M,P){function k(G,oe,ne){if(typeof document<"u"){typeof(ne=L({},P,ne)).expires=="number"&&(ne.expires=new Date(Date.now()+864e5*ne.expires)),ne.expires&&(ne.expires=ne.expires.toUTCString()),G=encodeURIComponent(G).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var ie="";for(var ve in ne)ne[ve]&&(ie+="; "+ve,ne[ve]!==!0&&(ie+="="+ne[ve].split(";")[0]));return document.cookie=G+"="+M.write(oe,G)+ie}}return Object.create({set:k,get:function(G){if(typeof document<"u"&&(!arguments.length||G)){for(var oe=document.cookie?document.cookie.split("; "):[],ne={},ie=0;ie<oe.length;ie++){var ve=oe[ie].split("="),ye=ve.slice(1).join("=");try{var we=decodeURIComponent(ve[0]);if(ne[we]=M.read(ye,we),G===we)break}catch{}}return G?ne[G]:ne}},remove:function(G,oe){k(G,"",L({},oe,{expires:-1}))},withAttributes:function(G){return A(this.converter,L({},this.attributes,G))},withConverter:function(G){return A(L({},this.converter,G),this.attributes)}},{attributes:{value:Object.freeze(P)},converter:{value:Object.freeze(M)}})}({read:function(A){return A[0]==='"'&&(A=A.slice(1,-1)),A.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(A){return encodeURIComponent(A).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});class xe{constructor(M){this._xhr=void 0,this._xhr=M}get(M){return this._xhr.getResponseHeader(M)}}class be{constructor(M){this.headers=void 0,this.ok=void 0,this.status=void 0,this.statusText=void 0,this.url=void 0,this._decodedJSON=void 0,this.xhr=void 0,this.headers=new xe(M),this.ok=M.status>=200&&M.status<=299,this.status=M.status,this.statusText=M.statusText,this.url=M.responseURL,this.xhr=M}json(){return this._decodedJSON||(this._decodedJSON=JSON.parse(this.xhr.response)),this._decodedJSON}parseRetryAfterHeader(){const M=parseInt(this.headers.get("Retry-After"),10);return isNaN(M)?0:M}}class Te{constructor(M,P=13e3){this.timeout=void 0,this.api=void 0,this.authCookieName="hanko",this.api=M,this.timeout=P}_fetch(M,P,k=new XMLHttpRequest){const G=this,oe=this.api+M,ne=this.timeout,ie=this._getAuthCookie();return new Promise(function(ve,ye){k.open(P.method,oe,!0),k.setRequestHeader("Accept","application/json"),k.setRequestHeader("Content-Type","application/json"),ie&&k.setRequestHeader("Authorization",`Bearer ${ie}`),k.timeout=ne,k.withCredentials=!0,k.onload=()=>{if(k.getAllResponseHeaders().split(`\r
`).filter(we=>we.toLowerCase().startsWith("x-auth-token")).length){const we=k.getResponseHeader("X-Auth-Token");we&&G._setAuthCookie(we)}ve(new be(k))},k.onerror=()=>{ye(new fe)},k.ontimeout=()=>{ye(new _)},k.send(P.body?P.body.toString():null)})}_getAuthCookie(){return pe.get(this.authCookieName)}_setAuthCookie(M){const P=!!this.api.match("^https://");pe.set(this.authCookieName,M,{secure:P})}removeAuthCookie(){pe.remove(this.authCookieName)}get(M){return this._fetch(M,{method:"GET"})}post(M,P){return this._fetch(M,{method:"POST",body:JSON.stringify(P)})}put(M,P){return this._fetch(M,{method:"PUT",body:JSON.stringify(P)})}patch(M,P){return this._fetch(M,{method:"PATCH",body:JSON.stringify(P)})}delete(M){return this._fetch(M,{method:"DELETE"})}}class Be{constructor(M,P=13e3){this.client=void 0,this.client=new Te(M,P)}}class U extends Be{async get(){const M=await this.client.get("/.well-known/config");if(!M.ok)throw new fe;return M.json()}}class Q{constructor(M="hanko"){this.key=void 0,this.ls=void 0,this.key=M,this.ls={}}read(){let M;try{const P=localStorage.getItem(this.key),k=decodeURIComponent(decodeURI(window.atob(P)));M=JSON.parse(k)}catch{return this.ls={},this}return this.ls=M,this}write(){const M=JSON.stringify(this.ls),P=window.btoa(encodeURI(encodeURIComponent(M)));return localStorage.setItem(this.key,P),this}static timeToRemainingSeconds(M=0){return M-Math.floor(Date.now()/1e3)}static remainingSecondsToTime(M=0){return Math.floor(Date.now()/1e3)+M}}class ze extends Q{getUserState(M){var P;return(P=this.ls).users||(P.users={}),Object.prototype.hasOwnProperty.call(this.ls.users,M)||(this.ls.users[M]={}),this.ls.users[M]}}class Pe extends ze{getState(M){var P;return(P=super.getUserState(M)).passcode||(P.passcode={})}read(){return super.read(),this}getActiveID(M){return this.getState(M).id}setActiveID(M,P){return this.getState(M).id=P,this}getEmailID(M){return this.getState(M).emailID}setEmailID(M,P){return this.getState(M).emailID=P,this}reset(M){const P=this.getState(M);return delete P.id,delete P.ttl,delete P.resendAfter,delete P.emailID,this}getTTL(M){return Q.timeToRemainingSeconds(this.getState(M).ttl)}setTTL(M,P){return this.getState(M).ttl=Q.remainingSecondsToTime(P),this}getResendAfter(M){return Q.timeToRemainingSeconds(this.getState(M).resendAfter)}setResendAfter(M,P){return this.getState(M).resendAfter=Q.remainingSecondsToTime(P),this}}class Fe extends Be{constructor(M,P=13e3){super(M,P),this.state=void 0,this.state=new Pe}async initialize(M,P,k){this.state.read();const G=this.state.getTTL(M),oe=this.state.getActiveID(M),ne=this.state.getEmailID(M);let ie=this.state.getResendAfter(M);if(ie>0)throw new ke(ie);if(!k&&G>0&&P===ne)return{id:oe,ttl:G};const ve={user_id:M};P&&(ve.email_id=P);const ye=await this.client.post("/passcode/login/initialize",ve);if(ye.status===429)throw ie=ye.parseRetryAfterHeader(),this.state.setResendAfter(M,ie).write(),new ke(ie);if(ye.status===401)throw new Ie;if(!ye.ok)throw new fe;const we=ye.json();return this.state.setActiveID(M,we.id).setTTL(M,we.ttl),P&&this.state.setEmailID(M,P),this.state.write(),we}async finalize(M,P){const k=this.state.read().getActiveID(M);if(this.state.getTTL(M)<=0)throw new Y;const G=await this.client.post("/passcode/login/finalize",{id:k,code:P});if(G.status===401)throw new V;if(G.status===410)throw this.state.reset(M).write(),new Se;if(!G.ok)throw new fe;this.state.reset(M).write()}getTTL(M){return this.state.read().getTTL(M)}getResendAfter(M){return this.state.read().getResendAfter(M)}}class We extends ze{getState(M){var P;return(P=super.getUserState(M)).password||(P.password={})}read(){return super.read(),this}getRetryAfter(M){return Q.timeToRemainingSeconds(this.getState(M).retryAfter)}setRetryAfter(M,P){return this.getState(M).retryAfter=Q.remainingSecondsToTime(P),this}}class qe extends Be{constructor(M,P=13e3){super(M,P),this.passwordState=void 0,this.passcodeState=void 0,this.passwordState=new We,this.passcodeState=new Pe}async login(M,P){const k=await this.client.post("/password/login",{user_id:M,password:P});if(k.status===401)throw new D;if(k.status===429){const G=k.parseRetryAfterHeader();throw this.passwordState.read().setRetryAfter(M,G).write(),new ke(G)}if(!k.ok)throw new fe;this.passcodeState.read().reset(M).write()}async update(M,P){const k=await this.client.put("/password",{user_id:M,password:P});if(k.status===401)throw new Ie;if(!k.ok)throw new fe}getRetryAfter(M){return this.passwordState.read().getRetryAfter(M)}}class mt extends Be{async getInfo(M){const P=await this.client.post("/user",{email:M});if(P.status===404)throw new De;if(!P.ok)throw new fe;return P.json()}async create(M){const P=await this.client.post("/users",{email:M});if(P.status===409)throw new ue;if(!P.ok)throw new fe;return P.json()}async getCurrent(){const M=await this.client.get("/me");if(M.status===400||M.status===401||M.status===404)throw new Ie;if(!M.ok)throw new fe;const P=M.json(),k=await this.client.get(`/users/${P.id}`);if(k.status===400||k.status===401||k.status===404)throw new Ie;if(!k.ok)throw new fe;return k.json()}async delete(){const M=await this.client.delete("/user");if(!M.ok)throw M.status===401?new Ie:new fe;this.client.removeAuthCookie()}async logout(){const M=await this.client.post("/logout");if(this.client.removeAuthCookie(),M.status!==401&&!M.ok)throw new fe}}function vt(A){const M="==".slice(0,(4-A.length%4)%4),P=A.replace(/-/g,"+").replace(/_/g,"/")+M,k=atob(P),G=new ArrayBuffer(k.length),oe=new Uint8Array(G);for(let ne=0;ne<k.length;ne++)oe[ne]=k.charCodeAt(ne);return G}function Tt(A){const M=new Uint8Array(A);let P="";for(const k of M)P+=String.fromCharCode(k);return btoa(P).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}var q="copy",me="convert";function Ee(A,M,P){if(M===q)return P;if(M===me)return A(P);if(M instanceof Array)return P.map(k=>Ee(A,M[0],k));if(M instanceof Object){const k={};for(const[G,oe]of Object.entries(M)){if(oe.derive){const ne=oe.derive(P);ne!==void 0&&(P[G]=ne)}if(G in P)k[G]=P[G]!=null?Ee(A,oe.schema,P[G]):null;else if(oe.required)throw new Error(`Missing key: ${G}`)}return k}}function Ve(A,M){return{required:!0,schema:A,derive:M}}function Ce(A){return{required:!0,schema:A}}function Ze(A){return{required:!1,schema:A}}var qt={type:Ce(q),id:Ce(me),transports:Ze(q)},on={appid:Ze(q),appidExclude:Ze(q),credProps:Ze(q)},kn={appid:Ze(q),appidExclude:Ze(q),credProps:Ze(q)},Ut={publicKey:Ce({rp:Ce(q),user:Ce({id:Ce(me),name:Ce(q),displayName:Ce(q)}),challenge:Ce(me),pubKeyCredParams:Ce(q),timeout:Ze(q),excludeCredentials:Ze([qt]),authenticatorSelection:Ze(q),attestation:Ze(q),extensions:Ze(on)}),signal:Ze(q)},In={type:Ce(q),id:Ce(q),rawId:Ce(me),authenticatorAttachment:Ze(q),response:Ce({clientDataJSON:Ce(me),attestationObject:Ce(me),transports:Ve(q,A=>{var M;return((M=A.getTransports)==null?void 0:M.call(A))||[]})}),clientExtensionResults:Ve(kn,A=>A.getClientExtensionResults())},Hn={mediation:Ze(q),publicKey:Ce({challenge:Ce(me),timeout:Ze(q),rpId:Ze(q),allowCredentials:Ze([qt]),userVerification:Ze(q),extensions:Ze(on)}),signal:Ze(q)},xa={type:Ce(q),id:Ce(q),rawId:Ce(me),authenticatorAttachment:Ze(q),response:Ce({clientDataJSON:Ce(me),authenticatorData:Ce(me),signature:Ce(me),userHandle:Ce(me)}),clientExtensionResults:Ve(kn,A=>A.getClientExtensionResults())};async function ya(A){const M=await navigator.credentials.create(function(P){return Ee(vt,Ut,P)}(A));return function(P){return Ee(Tt,In,P)}(M)}async function ba(A){const M=await navigator.credentials.get(function(P){return Ee(vt,Hn,P)}(A));return function(P){return Ee(Tt,xa,P)}(M)}class N{static supported(){return!!(navigator.credentials&&navigator.credentials.create&&navigator.credentials.get&&window.PublicKeyCredential)}static async isPlatformAuthenticatorAvailable(){return!(!this.supported()||!window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable)&&window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}static async isSecurityKeySupported(){return window.PublicKeyCredential!==void 0&&window.PublicKeyCredential.isExternalCTAP2SecurityKeySupported?window.PublicKeyCredential.isExternalCTAP2SecurityKeySupported():this.supported()}static async isConditionalMediationAvailable(){return!(!window.PublicKeyCredential||!window.PublicKeyCredential.isConditionalMediationAvailable)&&window.PublicKeyCredential.isConditionalMediationAvailable()}}class ce extends ze{getState(M){var P;return(P=super.getUserState(M)).webauthn||(P.webauthn={})}read(){return super.read(),this}getCredentials(M){var P;return(P=this.getState(M)).credentials||(P.credentials=[])}addCredential(M,P){return this.getCredentials(M).push(P),this}matchCredentials(M,P){return this.getCredentials(M).filter(k=>P.find(G=>G.id===k)).map(k=>({id:k}))}}class ge extends Be{constructor(M,P=13e3){super(M,P),this.webauthnState=void 0,this.passcodeState=void 0,this.controller=void 0,this._getCredential=ba,this._createCredential=ya,this.webauthnState=new ce,this.passcodeState=new Pe}async login(M,P){const k=await this.client.post("/webauthn/login/initialize",{user_id:M});if(!k.ok)throw new fe;const G=k.json();let oe;G.signal=this._createAbortSignal(),P&&(G.mediation="conditional");try{oe=await this._getCredential(G)}catch(ve){throw new b(ve)}const ne=await this.client.post("/webauthn/login/finalize",oe);if(ne.status===400||ne.status===401)throw new $;if(!ne.ok)throw new fe;const ie=ne.json();this.webauthnState.read().addCredential(ie.user_id,ie.credential_id).write(),this.passcodeState.read().reset(M).write()}async register(){const M=await this.client.post("/webauthn/registration/initialize");if(M.status>=400&&M.status<=499)throw new Ie;if(!M.ok)throw new fe;const P=M.json();let k;P.signal=this._createAbortSignal();try{k=await this._createCredential(P)}catch(ne){throw new b(ne)}k.transports=k.response.transports;const G=await this.client.post("/webauthn/registration/finalize",k);if(G.status>=400&&G.status<=499)throw G.status===422?new te:new Ie;if(!G.ok)throw new fe;const oe=G.json();this.webauthnState.read().addCredential(oe.user_id,oe.credential_id).write()}async listCredentials(){const M=await this.client.get("/webauthn/credentials");if(M.status===401)throw new Ie;if(!M.ok)throw new fe;return M.json()}async updateCredential(M,P){const k=await this.client.patch(`/webauthn/credentials/${M}`,{name:P});if(k.status===401)throw new Ie;if(!k.ok)throw new fe}async deleteCredential(M){const P=await this.client.delete(`/webauthn/credentials/${M}`);if(P.status===401)throw new Ie;if(!P.ok)throw new fe}async shouldRegister(M){const P=N.supported();if(!M.webauthn_credentials||!M.webauthn_credentials.length)return P;const k=this.webauthnState.read().matchCredentials(M.id,M.webauthn_credentials);return P&&!k.length}_createAbortSignal(){return this.controller&&this.controller.abort(),this.controller=new AbortController,this.controller.signal}}class re extends Be{async list(){const M=await this.client.get("/emails");if(M.status===401)throw new Ie;if(!M.ok)throw new fe;return M.json()}async create(M){const P=await this.client.post("/emails",{address:M});if(P.ok)return P.json();throw P.status===400?new Oe:P.status===401?new Ie:P.status===409?new Ke:new fe}async setPrimaryEmail(M){const P=await this.client.post(`/emails/${M}/set_primary`);if(P.status===401)throw new Ie;if(!P.ok)throw new fe}async delete(M){const P=await this.client.delete(`/emails/${M}`);if(P.status===401)throw new Ie;if(!P.ok)throw new fe}}class _e extends Be{constructor(M,P=13e3){super(M,P)}async auth(M,P){const k=new URL("/thirdparty/auth",this.client.api);if(!M)throw new I("somethingWentWrong",new Error("provider missing from request"));if(!P)throw new I("somethingWentWrong",new Error("redirectTo missing from request"));k.searchParams.append("provider",M),k.searchParams.append("redirect_to",P),window.location.assign(k.href)}getError(){const M=new URLSearchParams(window.location.search),P=M.get("error"),k=M.get("error_description");if(P){let G="";switch(P){case"access_denied":G="thirdPartyAccessDenied";break;case"user_conflict":G="emailAddressAlreadyExistsError";break;case"multiple_accounts":G="thirdPartyMultipleAccounts";break;case"unverified_email":G="thirdPartyUnverifiedEmail";break;case"email_maxnum":G="maxNumOfEmailAddressesReached";break;default:G="somethingWentWrong"}return new I(G,new Error(k))}}}class Ye extends Be{constructor(M,P=13e3){super(M,P)}async validate(){const M=new URLSearchParams(window.location.search).get("hanko_token");if(M&&(window.history.replaceState(null,null,window.location.pathname),!(await this.client.post("/token",{value:M})).ok))throw new fe}}class st{constructor(M,P=13e3){this.api=void 0,this.config=void 0,this.user=void 0,this.webauthn=void 0,this.password=void 0,this.passcode=void 0,this.email=void 0,this.thirdParty=void 0,this.token=void 0,this.api=M,this.config=new U(M,P),this.user=new mt(M,P),this.webauthn=new ge(M,P),this.password=new qe(M,P),this.passcode=new Fe(M,P),this.email=new re(M,P),this.thirdParty=new _e(M,P),this.token=new Ye(M,P)}}const ct={en:{headlines:{error:"An error has occurred",loginEmail:"Sign in or sign up",loginFinished:"Login successful",loginPasscode:"Enter passcode",loginPassword:"Enter password",registerAuthenticator:"Save a passkey",registerConfirm:"Create account?",registerPassword:"Set new password",profileEmails:"Emails",profilePassword:"Password",profilePasskeys:"Passkeys",isPrimaryEmail:"Primary email address",setPrimaryEmail:"Set primary email address",emailVerified:"Verified",emailUnverified:"Unverified",emailDelete:"Delete",renamePasskey:"Rename passkey",deletePasskey:"Delete passkey",lastUsedAt:"Last used at",createdAt:"Created at",connectedAccounts:"Connected accounts",deleteAccount:"Delete account"},texts:{enterPasscode:'Enter the passcode that was sent to "{emailAddress}".',setupPasskey:"Sign in to your account easily and securely with a passkey. Note: Your biometric data is only stored on your devices and will never be shared with anyone.",createAccount:'No account exists for "{emailAddress}". Do you want to create a new account?',passwordFormatHint:"Must be between {minLength} and {maxLength} characters long.",manageEmails:"Your email addresses are used for communication and authentication.",changePassword:"Set a new password.",managePasskeys:"Your passkeys allow you to sign in to this account.",isPrimaryEmail:"Used for communication, passcodes, and as username for passkeys. To change the primary email address, add another email address first and set it as primary.",setPrimaryEmail:"Set this email address primary so it will be used for communications, for passcodes, and as a username for passkeys.",emailVerified:"This email address has been verified.",emailUnverified:"This email address has not been verified.",emailDelete:"If you delete this email address, it can no longer be used for signing in to your account. Passkeys that may have been created with this email address will remain intact.",emailDeleteThirdPartyConnection:"If you delete this email address, it can no longer be used for signing in. You can also no longer sign in with or reconnect your {provider} account. Passkeys that may have been created with this email address will remain intact.",emailDeletePrimary:"The primary email address cannot be deleted. Add another email address first and make it your primary email address.",renamePasskey:"Set a name for the passkey that helps you identify where it is stored.",deletePasskey:"Delete this passkey from your account. Note that the passkey will still exist on your devices and needs to be deleted there as well.",deleteAccount:"Are you sure you want to delete this account? All data will be deleted immediately and cannot be recovered."},labels:{or:"or",email:"Email",continue:"Continue",skip:"Skip",save:"Save",password:"Password",signInPassword:"Sign in with a password",signInPasscode:"Sign in with a passcode",forgotYourPassword:"Forgot your password?",back:"Back",signInPasskey:"Sign in with a passkey",registerAuthenticator:"Save a passkey",signIn:"Sign in",signUp:"Sign up",sendNewPasscode:"Send new code",passwordRetryAfter:"Retry in {passwordRetryAfter}",passcodeResendAfter:"Request a new code in {passcodeResendAfter}",unverifiedEmail:"unverified",primaryEmail:"primary",setAsPrimaryEmail:"Set as primary",verify:"Verify",delete:"Delete",newEmailAddress:"New email address",newPassword:"New password",rename:"Rename",newPasskeyName:"New passkey name",addEmail:"Add email",changePassword:"Change password",addPasskey:"Add passkey",webauthnUnsupported:"Passkeys are not supported by your browser",signInWith:"Sign in with {provider}",deleteAccount:"Yes, delete this account."},errors:{somethingWentWrong:"A technical error has occurred. Please try again later.",requestTimeout:"The request timed out.",invalidPassword:"Wrong email or password.",invalidPasscode:"The passcode provided was not correct.",passcodeAttemptsReached:"The passcode was entered incorrectly too many times. Please request a new code.",tooManyRequests:"Too many requests have been made. Please wait to repeat the requested operation.",unauthorized:"Your session has expired. Please log in again.",invalidWebauthnCredential:"This passkey cannot be used anymore.",passcodeExpired:"The passcode has expired. Please request a new one.",userVerification:"User verification required. Please ensure your authenticator device is protected with a PIN or biometric.",emailAddressAlreadyExistsError:"The email address already exists.",maxNumOfEmailAddressesReached:"No further email addresses can be added.",thirdPartyAccessDenied:"Access denied. The request was cancelled by the user or the provider has denied access for other reasons.",thirdPartyMultipleAccounts:"Cannot identify account. The email address is used by multiple accounts.",thirdPartyUnverifiedEmail:"Email verification required. Please verify the used email address with your provider."}},de:{headlines:{error:"Ein Fehler ist aufgetreten",loginEmail:"Anmelden / Registrieren",loginFinished:"Login erfolgreich",loginPasscode:"Passcode eingeben",loginPassword:"Passwort eingeben",registerAuthenticator:"Passkey einrichten",registerConfirm:"Konto erstellen?",registerPassword:"Neues Passwort eingeben",profileEmails:"E-Mails",profilePassword:"Passwort",profilePasskeys:"Passkeys",isPrimaryEmail:"Primäre E-Mail-Adresse",setPrimaryEmail:"Als primäre E-Mail-Adresse festlegen",emailVerified:"Verifiziert",emailUnverified:"Unverifiziert",emailDelete:"Löschen",renamePasskey:"Passkey umbenennen",deletePasskey:"Passkey löschen",lastUsedAt:"Zuletzt benutzt am",createdAt:"Erstellt am",connectedAccounts:"Verbundene Konten",deleteAccount:"Konto löschen"},texts:{enterPasscode:'Geben Sie den Passcode ein, der an die E-Mail-Adresse "{emailAddress}" gesendet wurde.',setupPasskey:"Ihr Gerät unterstützt die sichere Anmeldung mit Passkeys. Hinweis: Ihre biometrischen Daten verbleiben sicher auf Ihrem Gerät und werden niemals an unseren Server gesendet.",createAccount:'Es existiert kein Konto für "{emailAddress}". Möchten Sie ein neues Konto erstellen?',passwordFormatHint:"Das Passwort muss zwischen {minLength} und {maxLength} Zeichen lang sein.",manageEmails:"Ihre E-Mail-Adressen werden zur Kommunikation und Authentifizierung verwendet.",changePassword:"Setze ein neues Passwort.",managePasskeys:"Passkeys können für die Anmeldung bei diesem Account verwendet werden.",isPrimaryEmail:"Wird für die Kommunikation, Passcodes und als Benutzername für Passkeys verwendet. Um die primäre E-Mail-Adresse zu ändern, fügen Sie zuerst eine andere E-Mail-Adresse hinzu und legen Sie sie als primär fest.",setPrimaryEmail:"Legen Sie diese E-Mail-Adresse als primär fest, damit sie für die Kommunikation, für Passcodes und als Benutzername für Passkeys genutzt wird.",emailVerified:"Diese E-Mail-Adresse wurde verifiziert.",emailUnverified:"Diese E-Mail-Adresse wurde noch nicht verifiziert.",emailDelete:"Wenn Sie diese E-Mail-Adresse löschen, kann sie nicht mehr für die Anmeldung bei Ihrem Konto verwendet werden. Passkeys, die möglicherweise mit dieser E-Mail-Adresse erstellt wurden, funktionieren weiterhin.",emailDeleteThirdPartyConnection:"Wenn Sie diese E-Mail-Adresse löschen, kann sie nicht mehr für die Anmeldung bei Ihrem Konto verwendet werden. Sie können das verbundene {provider}-Konto ebenfalls nicht mehr zur Anmeldung nutzen oder dieses neu verbinden. Passkeys, die möglicherweise mit dieser E-Mail-Adresse erstellt wurden, funktionieren weiterhin.",emailDeletePrimary:"Die primäre E-Mail-Adresse kann nicht gelöscht werden. Fügen Sie zuerst eine andere E-Mail-Adresse hinzu und legen Sie diese als primär fest.",renamePasskey:"Legen Sie einen Namen für den Passkey fest, anhand dessen Sie erkennen können, wo er gespeichert ist.",deletePasskey:"Löschen Sie diesen Passkey aus Ihrem Konto. Beachten Sie, dass der Passkey noch auf Ihren Geräten vorhanden ist und auch dort gelöscht werden muss.",deleteAccount:"Sind Sie sicher, dass Sie Ihr Konto löschen wollen? Alle Daten werden sofort gelöscht und können nicht wiederhergestellt werden."},labels:{or:"oder",email:"E-Mail",continue:"Weiter",skip:"Überspringen",save:"Speichern",password:"Passwort",signInPassword:"Mit einem Passwort anmelden",signInPasscode:"Mit einem Passcode anmelden",forgotYourPassword:"Passwort vergessen?",back:"Zurück",signInPasskey:"Anmelden mit Passkey",registerAuthenticator:"Passkey einrichten",signIn:"Anmelden",signUp:"Registrieren",sendNewPasscode:"Neuen Code senden",passwordRetryAfter:"Neuer Versuch in {passwordRetryAfter}",passcodeResendAfter:"Neuen Code in {passcodeResendAfter} anfordern",unverifiedEmail:"unverifiziert",primaryEmail:"primär",setAsPrimaryEmail:"Als primär festlegen",verify:"Verifizieren",delete:"Löschen",newEmailAddress:"Neue E-Mail-Adresse",newPassword:"Neues Passwort",rename:"Umbenennen",newPasskeyName:"Neuer Passkey Name",addEmail:"E-Mail-Adresse hinzufügen",changePassword:"Password ändern",addPasskey:"Passkey hinzufügen",webauthnUnsupported:"Passkeys werden von ihrem Browser nicht unterrstützt",signInWith:"Anmelden mit {provider}",deleteAccount:"Ja, dieses Konto löschen."},errors:{somethingWentWrong:"Ein technischer Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",requestTimeout:"Die Anfrage hat das Zeitlimit überschritten.",invalidPassword:"E-Mail-Adresse oder Passwort falsch.",invalidPasscode:"Der Passcode war nicht richtig.",passcodeAttemptsReached:"Der Passcode wurde zu oft falsch eingegeben. Bitte fragen Sie einen neuen Code an.",tooManyRequests:"Es wurden zu viele Anfragen gestellt. Bitte warten Sie, um den gewünschten Vorgang zu wiederholen.",unauthorized:"Ihre Sitzung ist abgelaufen. Bitte melden Sie sich erneut an.",invalidWebauthnCredential:"Dieser Passkey kann nicht mehr verwendet werden.",passcodeExpired:"Der Passcode ist abgelaufen. Bitte fordern Sie einen neuen Code an.",userVerification:"Nutzer-Verifikation erforderlich. Bitte stellen Sie sicher, dass Ihr Gerät durch eine PIN oder Biometrie abgesichert ist.",emailAddressAlreadyExistsError:"Die E-Mail-Adresse existiert bereits.",maxNumOfEmailAddressesReached:"Es können keine weiteren E-Mail-Adressen hinzugefügt werden.",thirdPartyAccessDenied:"Zugriff verweigert. Die Anfrage wurde durch den Nutzer abgebrochen oder der Provider hat den Zugriff aus anderen Gründen verweigert.",thirdPartyMultipleAccounts:"Konto kann nicht eindeutig identifiziert werden. Die genutzte E-Mail-Adresse wird von mehreren Konten verwendet.",thirdPartyUnverifiedEmail:"Verifizierung der E-Mail-Adresse erforderlich. Bitte verifizieren sie die genutzte E-Mail-Adresse bei ihrem Provider."}}};var ft=St(892),lt=St.n(ft),xt=St(357),at=St.n(xt),Wt=St(192),Bt=St.n(Wt),Jn=St(60),pn=St.n(Jn),Ot=St(323),ut={};ut.setAttributes=Bt(),ut.insert=A=>{window._hankoStyle=A},ut.domAPI=at(),ut.insertStyleElement=pn(),lt()(Ot.Z,ut);const qi=Ot.Z&&Ot.Z.locals?Ot.Z.locals:void 0,Kt=function(A){function M(P){var k=m({},P);return delete k.ref,A(k,P.ref||null)}return M.$$typeof=w,M.render=M,M.prototype.isReactComponent=M.__f=!0,M.displayName="ForwardRef("+(A.displayName||A.name)+")",M}((A,M)=>n("section",Object.assign({part:"container",className:qi.container,ref:M},{children:A.children})));var Wn=St(187),Li={};Li.setAttributes=Bt(),Li.insert=A=>{window._hankoStyle=A},Li.domAPI=at(),Li.insertStyleElement=pn(),lt()(Wn.Z,Li);const Vt=Wn.Z&&Wn.Z.locals?Wn.Z.locals:void 0,Yt=({onSubmit:A,children:M})=>n("form",Object.assign({onSubmit:A,className:Vt.form},{children:n("ul",Object.assign({className:Vt.ul},{children:(0,e.toChildArray)(M).map((P,k)=>n("li",Object.assign({part:"form-item",className:Vt.li},{children:P}),k))}))}));var mn=St(42),Nt=St.n(mn),Di=St(653),Qt={};Qt.setAttributes=Bt(),Qt.insert=A=>{window._hankoStyle=A},Qt.domAPI=at(),Qt.insertStyleElement=pn(),lt()(Di.Z,Qt);const yt=Di.Z&&Di.Z.locals?Di.Z.locals:void 0,wa=({size:A,secondary:M,disabled:P})=>n("svg",Object.assign({id:"icon-passkey",xmlns:"http://www.w3.org/2000/svg",viewBox:"3 1.5 19.5 19",width:A,height:A,className:Nt()(yt.icon,M&&yt.secondary,P&&yt.disabled)},{children:n("g",Object.assign({id:"icon-passkey-all"},{children:[n("circle",{id:"icon-passkey-head",cx:"10.5",cy:"6",r:"4.5"}),n("path",{id:"icon-passkey-key",d:"M22.5,10.5a3.5,3.5,0,1,0-5,3.15V19L19,20.5,21.5,18,20,16.5,21.5,15l-1.24-1.24A3.5,3.5,0,0,0,22.5,10.5Zm-3.5,0a1,1,0,1,1,1-1A1,1,0,0,1,19,10.5Z"}),n("path",{id:"icon-passkey-body",d:"M14.44,12.52A6,6,0,0,0,12,12H9a6,6,0,0,0-6,6v2H16V14.49A5.16,5.16,0,0,1,14.44,12.52Z"})]}))})),As=({size:A,disabled:M})=>n("svg",Object.assign({id:"icon-spinner",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:A,height:A,className:Nt()(yt.loadingSpinner,M&&yt.disabled)},{children:[n("path",{d:"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",opacity:".25"}),n("path",{d:"M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"})]})),fd=({secondary:A,size:M,fadeOut:P,disabled:k})=>n("svg",Object.assign({id:"icon-checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"4 4 40 40",width:M,height:M,className:Nt()(yt.checkmark,A&&yt.secondary,P&&yt.fadeOut,k&&yt.disabled)},{children:n("path",{d:"M21.05 33.1 35.2 18.95l-2.3-2.25-11.85 11.85-6-6-2.25 2.25ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"})})),hd=({size:A,secondary:M,disabled:P})=>n("svg",Object.assign({id:"icon-exclamation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:A,height:A,className:Nt()(yt.exclamationMark,M&&yt.secondary,P&&yt.disabled)},{children:n("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})})),pd=({size:A,disabled:M})=>n("svg",Object.assign({id:"icon-google",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:A,height:A,className:yt.googleIcon},{children:[n("path",{className:Nt()(yt.googleIcon,M?yt.disabled:yt.blue),d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),n("path",{className:Nt()(yt.googleIcon,M?yt.disabled:yt.green),d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),n("path",{className:Nt()(yt.googleIcon,M?yt.disabled:yt.yellow),d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),n("path",{className:Nt()(yt.googleIcon,M?yt.disabled:yt.red),d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"}),n("path",{d:"M1 1h22v22H1z",fill:"none"})]})),md=({size:A,secondary:M,disabled:P})=>n("svg",Object.assign({id:"icon-github",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",viewBox:"0 0 97.63 96",width:A,height:A,className:Nt()(yt.icon,M&&yt.secondary,P&&yt.disabled)},{children:[n("path",{d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"})," "]})),Ts=({name:A,secondary:M,size:P=18,fadeOut:k,disabled:G})=>n(s[A],{size:P,secondary:M,fadeOut:k,disabled:G}),Sa=({children:A,isLoading:M,isSuccess:P,fadeOut:k,secondary:G,hasIcon:oe})=>n(e.Fragment,{children:n("div",M?Object.assign({className:yt.loadingSpinnerWrapper},{children:n(Ts,{name:"spinner",secondary:G})}):P?Object.assign({className:yt.loadingSpinnerWrapper},{children:n(Ts,{name:"checkmark",secondary:G,fadeOut:k})}):Object.assign({className:oe?yt.loadingSpinnerWrapperIcon:yt.loadingSpinnerWrapper},{children:A}))}),xn=({title:A,children:M,secondary:P,dangerous:k,disabled:G,isLoading:oe,isSuccess:ne,autofocus:ie,onClick:ve,icon:ye})=>{const we=(0,p.useRef)(null);return(0,p.useEffect)(()=>{const{current:Ne}=we;Ne&&ie&&Ne.focus()},[ie]),n("button",Object.assign({part:k?"button dangerous-button":P?"button secondary-button":"button primary-button",title:A,ref:we,type:"submit",disabled:G||oe||ne,onClick:ve,className:Nt()(Vt.button,k?Vt.dangerous:P?Vt.secondary:Vt.primary)},{children:n(Sa,Object.assign({isLoading:oe,isSuccess:ne,secondary:!0,hasIcon:!!ye},{children:[ye?n(Ts,{name:ye,secondary:P,disabled:G||oe||ne}):null,M]}))}))},Qn=({children:A})=>n("section",Object.assign({className:qi.content},{children:A}));var Cs=St(693),Wr={};Wr.setAttributes=Bt(),Wr.insert=A=>{window._hankoStyle=A},Wr.domAPI=at(),Wr.insertStyleElement=pn(),lt()(Cs.Z,Wr);const Ps=Cs.Z&&Cs.Z.locals?Cs.Z.locals:void 0,zn=({children:A})=>n("h1",Object.assign({part:"headline1",className:Nt()(Ps.headline,Ps.grade1)},{children:A}));var Ls=St(801),jr={};jr.setAttributes=Bt(),jr.insert=A=>{window._hankoStyle=A},jr.domAPI=at(),jr.insertStyleElement=pn(),lt()(Ls.Z,jr);const gd=Ls.Z&&Ls.Z.locals?Ls.Z.locals:void 0,_d=new fe,jn=({error:A=_d})=>{const{t:M}=(0,p.useContext)(g.TranslateContext),P=A instanceof le?A.code:null;return n("section",Object.assign({part:"error",className:gd.errorMessage,hidden:!A},{children:[n("span",{children:n(Ts,{name:"exclamation"})}),n("span",Object.assign({id:"errorMessage",part:"error-text"},{children:P?M(`errors.${P}`):A?A.message:null}))]}))},Ii=({initialError:A})=>{const{t:M}=(0,p.useContext)(g.TranslateContext),{setPage:P}=(0,p.useContext)(ln),k=(0,p.useCallback)(()=>P(n(al,{})),[P]);return(0,p.useEffect)(()=>(addEventListener("hankoAuthSuccess",k),()=>{removeEventListener("hankoAuthSuccess",k)}),[k]),n(Qn,{children:[n(zn,{children:M("headlines.error")}),n(jn,{error:A}),n(Yt,Object.assign({onSubmit:G=>{G.preventDefault(),k()}},{children:n(xn,{children:"Continue"})}))]})};var Ds=St(517),qr={};qr.setAttributes=Bt(),qr.insert=A=>{window._hankoStyle=A},qr.domAPI=at(),qr.insertStyleElement=pn(),lt()(Ds.Z,qr);const vd=Ds.Z&&Ds.Z.locals?Ds.Z.locals:void 0,Rt=({children:A})=>n("p",Object.assign({part:"paragraph",className:vd.paragraph},{children:A}));var Is=St(547),Xr={};Xr.setAttributes=Bt(),Xr.insert=A=>{window._hankoStyle=A},Xr.domAPI=at(),Xr.insertStyleElement=pn(),lt()(Is.Z,Xr);const vi=Is.Z&&Is.Z.locals?Is.Z.locals:void 0,Ma=function({name:A,columnSelector:M,contentSelector:P,data:k,checkedItemIndex:G,setCheckedItemIndex:oe,dropdown:ne=!1}){const ie=ve=>{if(!(ve.target instanceof HTMLInputElement))return;const ye=parseInt(ve.target.value,10);oe(ye===G?null:ye)};return n("div",Object.assign({className:vi.accordion},{children:k.map((ve,ye)=>n("div",Object.assign({className:vi.accordionItem},{children:[n("input",{type:"radio",className:vi.accordionInput,id:`${A}-${ye}`,name:A,onClick:ie,value:ye,checked:G===ye}),n("label",Object.assign({className:Nt()(vi.label,ne&&vi.dropdown),for:`${A}-${ye}`},{children:n("span",Object.assign({className:vi.labelText},{children:M(ve,ye)}))})),n("div",Object.assign({className:Nt()(vi.accordionContent,ne&&vi.dropdownContent)},{children:P(ve,ye)}))]}),ye))}))},ei=({children:A})=>n("h2",Object.assign({part:"headline2",className:Nt()(Ps.headline,Ps.grade2)},{children:A}));var Rs=St(618),$r={};$r.setAttributes=Bt(),$r.insert=A=>{window._hankoStyle=A},$r.domAPI=at(),$r.insertStyleElement=pn(),lt()(Rs.Z,$r);const Kr=Rs.Z&&Rs.Z.locals?Rs.Z.locals:void 0,On=A=>{var{loadingSpinnerPosition:M,dangerous:P=!1}=A,k=function(oe,ne){var ie={};for(var ve in oe)Object.prototype.hasOwnProperty.call(oe,ve)&&ne.indexOf(ve)<0&&(ie[ve]=oe[ve]);if(oe!=null&&typeof Object.getOwnPropertySymbols=="function"){var ye=0;for(ve=Object.getOwnPropertySymbols(oe);ye<ve.length;ye++)ne.indexOf(ve[ye])<0&&Object.prototype.propertyIsEnumerable.call(oe,ve[ye])&&(ie[ve[ye]]=oe[ve[ye]])}return ie}(A,["loadingSpinnerPosition","dangerous"]);const G=()=>n("button",Object.assign({},k,{part:"link",className:Nt()(Kr.link,k.disabled?Kr.disabled:P?Kr.danger:null)},{children:k.children}));return n(e.Fragment,{children:M?n("span",Object.assign({className:Nt()(Kr.linkWrapper,M==="right"?Kr.reverse:null),hidden:k.hidden},{children:[n(Sa,{isLoading:k.isLoading,isSuccess:k.isSuccess,secondary:k.secondary,fadeOut:!0}),G()]})):n(e.Fragment,{children:G()})})},ar=({children:A})=>n("section",Object.assign({className:qi.footer},{children:A})),xd=A=>{var{index:M,focus:P,digit:k=""}=A,G=function(ie,ve){var ye={};for(var we in ie)Object.prototype.hasOwnProperty.call(ie,we)&&ve.indexOf(we)<0&&(ye[we]=ie[we]);if(ie!=null&&typeof Object.getOwnPropertySymbols=="function"){var Ne=0;for(we=Object.getOwnPropertySymbols(ie);Ne<we.length;Ne++)ve.indexOf(we[Ne])<0&&Object.prototype.propertyIsEnumerable.call(ie,we[Ne])&&(ye[we[Ne]]=ie[we[Ne]])}return ye}(A,["index","focus","digit"]);const oe=(0,p.useRef)(null),ne=()=>{const{current:ie}=oe;ie&&(ie.focus(),ie.select())};return(0,p.useEffect)(()=>{M===0&&ne()},[M,G.disabled]),(0,p.useMemo)(()=>{P&&ne()},[P]),n("div",Object.assign({className:Vt.passcodeDigitWrapper},{children:n("input",Object.assign({},G,{part:"input passcode-input","aria-label":`${G.name}-digit-${M+1}`,name:G.name+M.toString(10),type:"text",inputMode:"numeric",maxLength:1,ref:oe,value:k.charAt(0),required:!0,className:Vt.input}))}))},yd=({passcodeDigits:A=[],numberOfInputs:M=6,onInput:P,disabled:k=!1})=>{const[G,oe]=(0,p.useState)(0),ne=()=>A.slice(),ie=()=>{G<M-1&&oe(G+1)},ve=()=>{G>0&&oe(G-1)},ye=Le=>{const Ue=ne();Ue[G]=Le.charAt(0),P(Ue)},we=Le=>{if(Le.preventDefault(),k)return;const Ue=Le.clipboardData.getData("text/plain").slice(0,M-G).split(""),Je=ne();let dt=G;for(let wt=0;wt<M;++wt)wt>=G&&Ue.length>0&&(Je[wt]=Ue.shift(),dt++);oe(dt),P(Je)},Ne=Le=>{Le.key==="Backspace"?(Le.preventDefault(),ye(""),ve()):Le.key==="Delete"?(Le.preventDefault(),ye("")):Le.key==="ArrowLeft"?(Le.preventDefault(),ve()):Le.key==="ArrowRight"?(Le.preventDefault(),ie()):Le.key!==" "&&Le.key!=="Spacebar"&&Le.key!=="Space"||Le.preventDefault()},Ge=Le=>{Le.target instanceof HTMLInputElement&&ye(Le.target.value),ie()};return(0,p.useEffect)(()=>{A.length===0&&oe(0)},[A]),n("div",Object.assign({className:Vt.passcodeInputWrapper},{children:Array.from(Array(M)).map((Le,Ue)=>n(xd,{name:"passcode",index:Ue,focus:G===Ue,digit:A[Ue],onKeyDown:Ne,onInput:Ge,onPaste:we,onFocus:()=>(Je=>{oe(Je)})(Ue),disabled:k},Ue))}))},Ea=({userID:A,emailID:M,emailAddress:P,onSuccess:k,onBack:G,numberOfDigits:oe=6,initialError:ne=null})=>{const{t:ie}=(0,p.useContext)(g.TranslateContext),{hanko:ve,setUser:ye,passcode:we,setPasscode:Ne}=(0,p.useContext)(ln),[Ge,Le]=(0,p.useState)(),[Ue,Je]=(0,p.useState)(),[dt,wt]=(0,p.useState)(),[Xe,ht]=(0,p.useState)(),[et,gt]=(0,p.useState)(),[Xt,Pt]=(0,p.useState)(),[jt,cn]=(0,p.useState)(),[xi,qn]=(0,p.useState)([]),[ci,gn]=(0,p.useState)(ne),un=Gt=>{Le(!0),ve.passcode.finalize(A,Gt).then(()=>ve.user.getCurrent()).then(ye).then(k).catch(Xn=>{Xn instanceof fe||qn([]),Xn instanceof Se&&Pt(!0),Je(!1),Le(!1),gn(Xn)})},Nn=(0,p.useMemo)(()=>dt||Ge||Ue,[dt,Ge,Ue]);return(0,p.useEffect)(()=>{et<=0&&!Ue&&gn(new Y)},[Ue,et]),(0,p.useEffect)(()=>{we&&gt(we.ttl)},[we]),(0,p.useEffect)(()=>{ci instanceof ke&&cn(ci.retryAfter)},[ci]),(0,p.useEffect)(()=>{const Gt=et>0&&setInterval(()=>gt(et-1),1e3);return()=>clearInterval(Gt)},[et]),(0,p.useEffect)(()=>{const Gt=jt>0&&setInterval(()=>cn(jt-1),1e3);return()=>clearInterval(Gt)},[jt]),n(e.Fragment,{children:[n(Qn,{children:[n(zn,{children:ie("headlines.loginPasscode")}),n(jn,{error:ci}),n(Rt,{children:ie("texts.enterPasscode",{emailAddress:P})}),n(Yt,Object.assign({onSubmit:Gt=>{Gt.preventDefault(),un(xi.join(""))}},{children:[n(yd,{onInput:Gt=>{Gt.filter(Xn=>Xn!=="").length===oe&&un(Gt.join("")),qn(Gt)},passcodeDigits:xi,numberOfInputs:oe,disabled:et<=0||Xt||Nn}),n(xn,Object.assign({disabled:et<=0||Xt||Nn,isLoading:Ge,isSuccess:Ue},{children:ie("labels.continue")}))]}))]}),n(ar,{children:[n(On,Object.assign({onClick:Gt=>{Gt.preventDefault(),G()},disabled:Nn,loadingSpinnerPosition:"right"},{children:ie("labels.back")})),n(On,Object.assign({disabled:jt>0||Nn,onClick:Gt=>{Gt.preventDefault(),ht(!1),wt(!0),ve.passcode.initialize(A,M,!0).then(Xn=>{Ne(Xn),ht(!0),qn([]),wt(!1),Pt(!1),gn(null)}).catch(Xn=>{wt(!1),ht(!1),gn(Xn)})},isLoading:dt,isSuccess:Xe,loadingSpinnerPosition:"left"},{children:jt>0?ie("labels.passcodeResendAfter",{passcodeResendAfter:jt}):ie("labels.sendNewPasscode")}))]})]})},bd=({setError:A,checkedItemIndex:M,setCheckedItemIndex:P})=>{const{t:k}=(0,p.useContext)(g.TranslateContext),{hanko:G,user:oe,emails:ne,setEmails:ie,setPage:ve,setPasscode:ye}=(0,p.useContext)(ln),[we,Ne]=(0,p.useState)(!1),[Ge,Le]=(0,p.useState)(!1),[Ue,Je]=(0,p.useState)(!1),dt=(0,p.useMemo)(()=>we||Ge||Ue,[Ue,we,Ge]),wt=(0,p.useCallback)(Xe=>{const ht=()=>ve(n(Jr,{})),et=gt=>ve(n(Ea,{userID:oe.id,emailID:Xe.id,emailAddress:Xe.address,initialError:gt,onSuccess:()=>G.email.list().then(ie).then(ht),onBack:ht}));return G.passcode.initialize(oe.id,Xe.id,!0).then(ye).then(()=>et()).catch(gt=>{if(!(gt instanceof ke))throw gt;et(gt)})},[G.email,G.passcode,ie,ve,ye,oe.id]);return n(Ma,{name:"email-dropdown",columnSelector:Xe=>{const ht=n("span",Object.assign({className:vi.description},{children:Xe.is_verified?Xe.is_primary?n(e.Fragment,{children:[" -"," ",k("labels.primaryEmail")]}):null:n(e.Fragment,{children:[" -"," ",k("labels.unverifiedEmail")]})}));return Xe.is_primary?n(e.Fragment,{children:[n("b",{children:Xe.address}),ht]}):n(e.Fragment,{children:[Xe.address,ht]})},data:ne,contentSelector:Xe=>n(e.Fragment,{children:[Xe.is_primary?n(e.Fragment,{children:n(Rt,{children:[n(ei,{children:k("headlines.isPrimaryEmail")}),k("texts.isPrimaryEmail")]})}):n(e.Fragment,{children:n(Rt,{children:[n(ei,{children:k("headlines.setPrimaryEmail")}),k("texts.setPrimaryEmail"),n("br",{}),n(On,Object.assign({disabled:dt,isLoading:we,onClick:ht=>((et,gt)=>{et.preventDefault(),Ne(!0),G.email.setPrimaryEmail(gt.id).then(()=>A(null)).then(()=>G.email.list()).then(ie).finally(()=>Ne(!1)).catch(A)})(ht,Xe),loadingSpinnerPosition:"right"},{children:k("labels.setAsPrimaryEmail")}))]})}),Xe.is_verified?n(e.Fragment,{children:n(Rt,{children:[n(ei,{children:k("headlines.emailVerified")}),k("texts.emailVerified")]})}):n(e.Fragment,{children:n(Rt,{children:[n(ei,{children:k("headlines.emailUnverified")}),k("texts.emailUnverified"),n("br",{}),n(On,Object.assign({disabled:dt,isLoading:Ge,onClick:ht=>((et,gt)=>{Le(!0),wt(gt).finally(()=>Le(!1)).catch(A)})(0,Xe),loadingSpinnerPosition:"right"},{children:k("labels.verify")}))]})}),Xe.is_primary?n(e.Fragment,{children:n(Rt,{children:[n(ei,{children:k("headlines.emailDelete")}),k("texts.emailDeletePrimary")]})}):n(e.Fragment,{children:n(Rt,{children:[n(ei,{children:k("headlines.emailDelete")}),Xe.identity?`${k("texts.emailDeleteThirdPartyConnection",{provider:Xe.identity.provider})}`:k("texts.emailDelete"),n("br",{}),n(On,Object.assign({dangerous:!0,isLoading:Ue,disabled:dt,onClick:ht=>((et,gt)=>{et.preventDefault(),Je(!0),G.email.delete(gt.id).then(()=>{A(null),P(null),Je(!1)}).then(()=>G.email.list()).then(ie).finally(()=>Je(!1)).catch(A)})(ht,Xe),loadingSpinnerPosition:"right"},{children:k("labels.delete")}))]})}),Xe.identity?n(e.Fragment,{children:n(Rt,{children:[n(ei,{children:k("headlines.connectedAccounts")}),Xe.identity.provider]})}):null]}),checkedItemIndex:M,setCheckedItemIndex:P})},or=A=>{var M=function(k,G){var oe={};for(var ne in k)Object.prototype.hasOwnProperty.call(k,ne)&&G.indexOf(ne)<0&&(oe[ne]=k[ne]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function"){var ie=0;for(ne=Object.getOwnPropertySymbols(k);ie<ne.length;ie++)G.indexOf(ne[ie])<0&&Object.prototype.propertyIsEnumerable.call(k,ne[ie])&&(oe[ne[ie]]=k[ne[ie]])}return oe}(A,["label"]);const P=(0,p.useRef)(null);return(0,p.useEffect)(()=>{const{current:k}=P;k&&M.autofocus&&(k.focus(),k.select())},[M.autofocus]),n("div",Object.assign({className:Vt.inputWrapper},{children:n("input",Object.assign({part:"input text-input",ref:P,"aria-label":M.placeholder,className:Vt.input},M))}))},wd=({credential:A,oldName:M,onBack:P})=>{const{t:k}=(0,p.useContext)(g.TranslateContext),{hanko:G,setWebauthnCredentials:oe}=(0,p.useContext)(ln),[ne,ie]=(0,p.useState)(),[ve,ye]=(0,p.useState)(null),[we,Ne]=(0,p.useState)(M);return n(e.Fragment,{children:[n(Qn,{children:[n(zn,{children:k("headlines.renamePasskey")}),n(jn,{error:ve}),n(Rt,{children:k("texts.renamePasskey")}),n(Yt,Object.assign({onSubmit:Ge=>{Ge.preventDefault(),ie(!0),G.webauthn.updateCredential(A.id,we).then(()=>G.webauthn.listCredentials()).then(oe).then(()=>P()).finally(()=>ie(!1)).catch(ye)}},{children:[n(or,{type:"text",name:"passkey",value:we,minLength:3,maxLength:32,required:!0,placeholder:k("labels.newPasskeyName"),onInput:Ge=>{return Le=void 0,Ue=void 0,dt=function*(){Ge.target instanceof HTMLInputElement&&Ne(Ge.target.value)},new((Je=void 0)||(Je=Promise))(function(wt,Xe){function ht(Xt){try{gt(dt.next(Xt))}catch(Pt){Xe(Pt)}}function et(Xt){try{gt(dt.throw(Xt))}catch(Pt){Xe(Pt)}}function gt(Xt){var Pt;Xt.done?wt(Xt.value):(Pt=Xt.value,Pt instanceof Je?Pt:new Je(function(jt){jt(Pt)})).then(ht,et)}gt((dt=dt.apply(Le,Ue||[])).next())});var Le,Ue,Je,dt},disabled:ne,autofocus:!0}),n(xn,Object.assign({isLoading:ne,disabled:ne},{children:k("labels.save")}))]}))]}),n(ar,{children:n(On,Object.assign({disabled:ne,onClick:Ge=>{Ge.preventDefault(),P()},loadingSpinnerPosition:"right"},{children:k("labels.back")}))})]})},Sd=({credentials:A,setError:M,checkedItemIndex:P,setCheckedItemIndex:k})=>{const{t:G}=(0,p.useContext)(g.TranslateContext),{hanko:oe,setWebauthnCredentials:ne,setPage:ie}=(0,p.useContext)(ln),[ve,ye]=(0,p.useState)(!1),we=()=>{ie(n(Jr,{}))},Ne=Le=>{if(Le.name)return Le.name;const Ue=Le.public_key.replace(/[\W_]/g,"");return`Passkey-${Ue.substring(Ue.length-7,Ue.length)}`},Ge=Le=>new Date(Le).toLocaleString();return n(Ma,{name:"passkey-dropdown",columnSelector:Le=>Ne(Le),data:A,contentSelector:Le=>n(e.Fragment,{children:[n(Rt,{children:[n(ei,{children:G("headlines.renamePasskey")}),G("texts.renamePasskey"),n("br",{}),n(On,Object.assign({onClick:Ue=>((Je,dt)=>{Je.preventDefault(),ie(n(wd,{oldName:Ne(dt),credential:dt,onBack:we}))})(Ue,Le),loadingSpinnerPosition:"right"},{children:G("labels.rename")}))]}),n(Rt,{children:[n(ei,{children:G("headlines.deletePasskey")}),G("texts.deletePasskey"),n("br",{}),n(On,Object.assign({dangerous:!0,isLoading:ve,onClick:Ue=>((Je,dt)=>{Je.preventDefault(),ye(!0),oe.webauthn.deleteCredential(dt.id).then(()=>oe.webauthn.listCredentials()).then(ne).then(()=>{M(null),k(null)}).finally(()=>ye(!1)).catch(M)})(Ue,Le),loadingSpinnerPosition:"right"},{children:G("labels.delete")}))]}),n(Rt,{children:[n(ei,{children:G("headlines.lastUsedAt")}),Le.last_used_at?Ge(Le.last_used_at):"-"]}),n(Rt,{children:[n(ei,{children:G("headlines.createdAt")}),Ge(Le.created_at)]})]}),checkedItemIndex:P,setCheckedItemIndex:k})},Aa=({name:A,title:M,children:P,checkedItemIndex:k,setCheckedItemIndex:G})=>n(Ma,{dropdown:!0,name:A,columnSelector:()=>M,contentSelector:()=>n(e.Fragment,{children:P}),setCheckedItemIndex:G,checkedItemIndex:k,data:[{}]}),Md=({setError:A,checkedItemIndex:M,setCheckedItemIndex:P})=>{const{t:k}=(0,p.useContext)(g.TranslateContext),{hanko:G,config:oe,user:ne,setEmails:ie,setPage:ve,setPasscode:ye}=(0,p.useContext)(ln),[we,Ne]=(0,p.useState)(),[Ge,Le]=(0,p.useState)(),[Ue,Je]=(0,p.useState)(),dt=(0,p.useCallback)(Xe=>{const ht=()=>G.email.list().then(ie).then(()=>ve(n(Jr,{}))),et=gt=>ve(n(Ea,{userID:ne.id,emailID:Xe.id,emailAddress:Ue,initialError:gt,onSuccess:ht,onBack:()=>ve(n(Jr,{}))}));return G.passcode.initialize(ne.id,Xe.id,!0).then(ye).then(()=>et()).catch(gt=>{if(!(gt instanceof ke))throw gt;et(gt)})},[G,Ue,ie,ve,ye,ne.id]),wt=(0,p.useMemo)(()=>we||Ge,[Ge,we]);return n(Aa,Object.assign({name:"add-email-dropdown",title:k("labels.addEmail"),checkedItemIndex:M,setCheckedItemIndex:P},{children:n(Yt,Object.assign({onSubmit:Xe=>(Xe.preventDefault(),oe.emails.require_verification?(Le(!0),void G.email.create(Ue).then(dt).finally(()=>Le(!1)).catch(A)):void G.email.create(Ue).then(()=>G.email.list()).then(ie).then(()=>{A(null),Je(""),Ne(!0),setTimeout(()=>{P(null),setTimeout(()=>{Ne(!1)},500)},1e3)}).catch(A))},{children:[n(or,{type:"email",placeholder:k("labels.newEmailAddress"),onInput:Xe=>{Xe.preventDefault(),Xe.target instanceof HTMLInputElement&&Je(Xe.target.value)},value:Ue,disabled:wt,required:!0}),n(xn,Object.assign({disabled:wt,isLoading:Ge,isSuccess:we},{children:k(oe.emails.require_verification?"labels.continue":"labels.save")}))]}))}))},Ed=({setError:A,checkedItemIndex:M,setCheckedItemIndex:P})=>{const{t:k}=(0,p.useContext)(g.TranslateContext),{hanko:G,config:oe,user:ne}=(0,p.useContext)(ln),[ie,ve]=(0,p.useState)(!1),[ye,we]=(0,p.useState)(!1),[Ne,Ge]=(0,p.useState)("");return n(Aa,Object.assign({name:"change-password-dropdown",title:k("labels.changePassword"),checkedItemIndex:M,setCheckedItemIndex:P},{children:[n(Rt,{children:k("texts.passwordFormatHint",{minLength:oe.password.min_password_length,maxLength:72})}),n(Yt,Object.assign({onSubmit:Le=>{Le.preventDefault(),ve(!0),G.password.update(ne.id,Ne).then(()=>{Ge(""),A(null),we(!0),setTimeout(()=>{P(null),setTimeout(()=>{we(!1)},500)},1e3)}).finally(()=>ve(!1)).catch(A)}},{children:[n(or,{placeholder:k("labels.newPassword"),type:"password",onInput:Le=>{Le.preventDefault(),Le.target instanceof HTMLInputElement&&Ge(Le.target.value)},value:Ne,minLength:oe.password.min_password_length,maxLength:72,required:!0,disabled:ie||ye}),n(xn,Object.assign({isLoading:ie,isSuccess:ye,disabled:ie},{children:k("labels.save")}))]}))]}))},Ad=({setError:A,checkedItemIndex:M,setCheckedItemIndex:P})=>{const{t:k}=(0,p.useContext)(g.TranslateContext),{hanko:G,setWebauthnCredentials:oe}=(0,p.useContext)(ln),[ne,ie]=(0,p.useState)(!1),[ve,ye]=(0,p.useState)(!1),we=N.supported();return n(Aa,Object.assign({name:"add-passkey-dropdown",title:k("labels.addPasskey"),checkedItemIndex:M,setCheckedItemIndex:P},{children:[n(Rt,{children:k("texts.setupPasskey")}),n(Yt,Object.assign({onSubmit:Ne=>{Ne.preventDefault(),ie(!0),G.webauthn.register().then(()=>G.webauthn.listCredentials()).then(oe).then(()=>{A(null),ye(!0),setTimeout(()=>{P(null),setTimeout(()=>{ye(!1)},500)},1e3)}).finally(()=>ie(!1)).catch(Ge=>{Ge instanceof b||A(Ge)})}},{children:n(xn,Object.assign({title:we?null:k("labels.webauthnUnsupported"),isLoading:ne,isSuccess:ve,disabled:!we||ne},{children:k("labels.registerAuthenticator")}))}))]}))};var ks=St(548),Yr={};Yr.setAttributes=Bt(),Yr.insert=A=>{window._hankoStyle=A},Yr.domAPI=at(),Yr.insertStyleElement=pn(),lt()(ks.Z,Yr);const Zr=ks.Z&&ks.Z.locals?ks.Z.locals:void 0,nl=({children:A})=>n("section",Object.assign({part:"divider",className:Zr.divider},{children:[n("div",{part:"divider-line",className:Zr.line}),A?n("div",Object.assign({part:"divider-text",class:Zr.text},{children:A})):null,n("div",{part:"divider-line",className:Zr.line})]})),Td=A=>{var{label:M}=A,P=function(k,G){var oe={};for(var ne in k)Object.prototype.hasOwnProperty.call(k,ne)&&G.indexOf(ne)<0&&(oe[ne]=k[ne]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function"){var ie=0;for(ne=Object.getOwnPropertySymbols(k);ie<ne.length;ie++)G.indexOf(ne[ie])<0&&Object.prototype.propertyIsEnumerable.call(k,ne[ie])&&(oe[ne[ie]]=k[ne[ie]])}return oe}(A,["label"]);return n("div",Object.assign({className:Vt.inputWrapper},{children:n("label",Object.assign({className:Vt.checkboxWrapper},{children:[n("input",Object.assign({part:"input checkbox-input",type:"checkbox","aria-label":M,className:Vt.checkbox},P)),n("span",Object.assign({className:Nt()(Vt.label,P.disabled?Vt.disabled:null)},{children:M}))]}))}))},Cd=({onBack:A})=>{const{t:M}=(0,p.useContext)(g.TranslateContext),{hanko:P}=(0,p.useContext)(ln),[k,G]=(0,p.useState)(!1),[oe,ne]=(0,p.useState)(!1),[ie,ve]=(0,p.useState)(null),ye=(0,p.useMemo)(()=>k||oe,[k,oe]);return n(e.Fragment,{children:[n(Qn,{children:[n(zn,{children:M("headlines.deleteAccount")}),n(jn,{error:ie}),n(Rt,{children:M("texts.deleteAccount")}),n(Yt,Object.assign({onSubmit:we=>{we.preventDefault(),G(!0),P.user.delete().then(()=>{G(!1),ne(!0)}).catch(ve)}},{children:[n(Td,{disabled:ye,required:!0,type:"checkbox",label:M("labels.deleteAccount")}),n(xn,Object.assign({isLoading:k,isSuccess:oe,disabled:ye},{children:M("labels.delete")}))]}))]}),n(ar,{children:n(On,Object.assign({disabled:ye,onClick:we=>{we.preventDefault(),A()}},{children:M("labels.back")}))})]})},Pd=()=>n("section",{className:Zr.spacer}),il=()=>{const{t:A}=(0,p.useContext)(g.TranslateContext),{config:M,webauthnCredentials:P,emails:k,setPage:G}=(0,p.useContext)(ln),[oe,ne]=(0,p.useState)(null),[ie,ve]=(0,p.useState)(null),[ye,we]=(0,p.useState)(null),[Ne,Ge]=(0,p.useState)(null),[Le,Ue]=(0,p.useState)(null),[Je,dt]=(0,p.useState)(null),[wt,Xe]=(0,p.useState)(null),[ht,et]=(0,p.useState)(null);return(0,p.useEffect)(()=>{Ne!==null&&(Ue(null),dt(null),Xe(null),et(null))},[Ne]),(0,p.useEffect)(()=>{Le!==null&&(Ge(null),dt(null),Xe(null),et(null))},[Le]),(0,p.useEffect)(()=>{Je!==null&&(Ue(null),Ge(null),Xe(null),et(null))},[Je]),(0,p.useEffect)(()=>{wt!==null&&(Ue(null),Ge(null),dt(null),et(null))},[wt]),(0,p.useEffect)(()=>{ht!==null&&(Ue(null),Ge(null),dt(null),Xe(null))},[ht]),(0,p.useEffect)(()=>{oe!==null&&(ve(null),we(null))},[oe]),(0,p.useEffect)(()=>{ie!==null&&(ne(null),we(null))},[ie]),(0,p.useEffect)(()=>{ye!==null&&(ne(null),ve(null))},[ye]),n(Qn,{children:[n(zn,{children:A("headlines.profileEmails")}),n(jn,{error:oe}),n(Rt,{children:A("texts.manageEmails")}),n(Rt,{children:[n(bd,{setError:ne,checkedItemIndex:Ne,setCheckedItemIndex:Ge}),k.length<M.emails.max_num_of_addresses?n(Md,{setError:ne,checkedItemIndex:Le,setCheckedItemIndex:Ue}):null]}),M.password.enabled?n(e.Fragment,{children:[n(zn,{children:A("headlines.profilePassword")}),n(jn,{error:ie}),n(Rt,{children:A("texts.changePassword")}),n(Rt,{children:n(Ed,{setError:ve,checkedItemIndex:Je,setCheckedItemIndex:dt})})]}):null,n(zn,{children:A("headlines.profilePasskeys")}),n(jn,{error:ye}),n(Rt,{children:A("texts.managePasskeys")}),n(Rt,{children:[n(Sd,{credentials:P,setError:we,checkedItemIndex:wt,setCheckedItemIndex:Xe}),n(Ad,{setError:we,checkedItemIndex:ht,setCheckedItemIndex:et})]}),M.account.allow_deletion?n(e.Fragment,{children:[n(Pd,{}),n(Rt,{children:n(nl,{})}),n(Rt,{children:n(Yt,Object.assign({onSubmit:gt=>{gt.preventDefault(),G(n(Cd,{onBack:()=>G(n(il,{}))}))}},{children:n(xn,Object.assign({dangerous:!0},{children:A("headlines.deleteAccount")}))}))})]}):null]})},Jr=il,Ld=({emailAddress:A,onSuccess:M,onPasscode:P,onBack:k})=>{const{t:G}=(0,p.useContext)(g.TranslateContext),{hanko:oe,config:ne}=(0,p.useContext)(ln),[ie,ve]=(0,p.useState)(null),[ye,we]=(0,p.useState)(!1),[Ne,Ge]=(0,p.useState)(!1),[Le,Ue]=(0,p.useState)(null);return(0,p.useEffect)(()=>{ie&&ne&&(ne.emails.require_verification?P(ie.id,ie.email_id).catch(Je=>{we(!1),Ue(Je)}):(Ge(!0),we(!1),M()))},[ne,P,M,ie]),n(e.Fragment,{children:[n(Qn,{children:[n(zn,{children:G("headlines.registerConfirm")}),n(jn,{error:Le}),n(Rt,{children:G("texts.createAccount",{emailAddress:A})}),n(Yt,Object.assign({onSubmit:Je=>{Je.preventDefault(),we(!0),oe.user.create(A).then(ve).catch(Ue)}},{children:n(xn,Object.assign({autofocus:!0,isLoading:ye,isSuccess:Ne},{children:G("labels.signUp")}))}))]}),n(ar,{children:[n("span",{hidden:!0}),n(On,Object.assign({disabled:ye,onClick:Je=>{Je.preventDefault(),k()}},{children:G("labels.back")}))]})]})},Dd=({onSuccess:A,onRecovery:M,onBack:P})=>{const{t:k}=(0,p.useContext)(g.TranslateContext),{hanko:G,userInfo:oe}=(0,p.useContext)(ln),[ne,ie]=(0,p.useState)(),[ve,ye]=(0,p.useState)(G.password.getRetryAfter(oe.id)),[we,Ne]=(0,p.useState)(),[Ge,Le]=(0,p.useState)(),[Ue,Je]=(0,p.useState)(),[dt,wt]=(0,p.useState)(null),Xe=(0,p.useMemo)(()=>we||Ge||Ue,[Ge,we,Ue]);return(0,p.useEffect)(()=>{dt instanceof ke&&ve<=0&&wt(null)},[dt,ve]),(0,p.useEffect)(()=>{const ht=ve>0&&setInterval(()=>ye(ve-1),1e3);return()=>clearInterval(ht)},[ve]),n(e.Fragment,{children:[n(Qn,{children:[n(zn,{children:k("headlines.loginPassword")}),n(jn,{error:dt}),n(Yt,Object.assign({onSubmit:ht=>{ht.preventDefault(),Ne(!0),G.password.login(oe.id,ne).then(()=>Je(!0)).then(A).finally(()=>Ne(!1)).catch(et=>{et instanceof ke&&ye(et.retryAfter),wt(et)})}},{children:[n(or,{type:"password",name:"password",autocomplete:"current-password",placeholder:k("labels.password"),required:!0,onInput:ht=>{return et=void 0,gt=void 0,Pt=function*(){ht.target instanceof HTMLInputElement&&ie(ht.target.value)},new((Xt=void 0)||(Xt=Promise))(function(jt,cn){function xi(gn){try{ci(Pt.next(gn))}catch(un){cn(un)}}function qn(gn){try{ci(Pt.throw(gn))}catch(un){cn(un)}}function ci(gn){var un;gn.done?jt(gn.value):(un=gn.value,un instanceof Xt?un:new Xt(function(Nn){Nn(un)})).then(xi,qn)}ci((Pt=Pt.apply(et,gt||[])).next())});var et,gt,Xt,Pt},disabled:Xe,autofocus:!0}),n(xn,Object.assign({isSuccess:Ue,isLoading:we,disabled:ve>0||Xe},{children:ve>0?k("labels.passwordRetryAfter",{passwordRetryAfter:ve}):k("labels.signIn")}))]}))]}),n(ar,{children:[n(On,Object.assign({disabled:Xe,onClick:ht=>{ht.preventDefault(),P()},loadingSpinnerPosition:"right"},{children:k("labels.back")})),n(On,Object.assign({disabled:Xe,onClick:ht=>{ht.preventDefault(),Le(!0),M().finally(()=>Le(!1)).catch(wt)},isLoading:Ge,loadingSpinnerPosition:"left"},{children:k("labels.forgotYourPassword")}))]})]})},rl=()=>{const{t:A}=(0,p.useContext)(g.TranslateContext),{hanko:M,emitSuccessEvent:P,setPage:k}=(0,p.useContext)(ln),[G,oe]=(0,p.useState)(!1),[ne,ie]=(0,p.useState)(!1),[ve,ye]=(0,p.useState)(!1),[we,Ne]=(0,p.useState)(null),Ge=(0,p.useMemo)(()=>G||ve||ne,[G,ve,ne]);return n(e.Fragment,{children:[n(Qn,{children:[n(zn,{children:A("headlines.registerAuthenticator")}),n(jn,{error:we}),n(Rt,{children:A("texts.setupPasskey")}),n(Yt,Object.assign({onSubmit:Le=>{Le.preventDefault(),oe(!0),M.webauthn.register().then(()=>{ie(!0),oe(!1),P()}).catch(Ue=>{Ue instanceof Ie||Ue instanceof te?k(n(Ii,{initialError:Ue})):(Ne(Ue instanceof b?null:Ue),oe(!1))})}},{children:n(xn,Object.assign({autofocus:!0,isSuccess:ne,isLoading:G,disabled:Ge,icon:"passkey"},{children:A("labels.registerAuthenticator")}))}))]}),n(ar,{children:[n("span",{hidden:!0}),n(On,Object.assign({isLoading:ve,disabled:Ge,onClick:Le=>{Le.preventDefault(),ye(!0),P()},loadingSpinnerPosition:"left"},{children:A("labels.skip")}))]})]})},Id=({onSuccess:A})=>{const{t:M}=(0,p.useContext)(g.TranslateContext),{hanko:P,config:k,user:G,setPage:oe}=(0,p.useContext)(ln),[ne,ie]=(0,p.useState)(),[ve,ye]=(0,p.useState)(),[we,Ne]=(0,p.useState)(null),[Ge,Le]=(0,p.useState)();return n(Qn,{children:[n(zn,{children:M("headlines.registerPassword")}),n(jn,{error:we}),n(Rt,{children:M("texts.passwordFormatHint",{minLength:k.password.min_password_length,maxLength:72})}),n(Yt,Object.assign({onSubmit:Ue=>{Ue.preventDefault(),ie(!0),P.password.update(G.id,Ge).then(()=>ye(!0)).then(()=>A()).finally(()=>ie(!1)).catch(Je=>{Je instanceof Ie?oe(n(Ii,{initialError:Je})):Ne(Je)})}},{children:[n(or,{type:"password",name:"password",autocomplete:"new-password",minLength:k.password.min_password_length,maxLength:72,required:!0,placeholder:M("labels.newPassword"),onInput:Ue=>{return Je=void 0,dt=void 0,Xe=function*(){Ue.target instanceof HTMLInputElement&&Le(Ue.target.value)},new((wt=void 0)||(wt=Promise))(function(ht,et){function gt(jt){try{Pt(Xe.next(jt))}catch(cn){et(cn)}}function Xt(jt){try{Pt(Xe.throw(jt))}catch(cn){et(cn)}}function Pt(jt){var cn;jt.done?ht(jt.value):(cn=jt.value,cn instanceof wt?cn:new wt(function(xi){xi(cn)})).then(gt,Xt)}Pt((Xe=Xe.apply(Je,dt||[])).next())});var Je,dt,wt,Xe},disabled:ve||ne,autofocus:!0}),n(xn,Object.assign({isSuccess:ve,isLoading:ne},{children:M("labels.continue")}))]}))]})},sl=A=>{var M;const{t:P}=(0,p.useContext)(g.TranslateContext),{hanko:k,experimentalFeatures:G,emitSuccessEvent:oe,config:ne,setPage:ie,setPasscode:ve,setUserInfo:ye,setUser:we}=(0,p.useContext)(ln),[Ne,Ge]=(0,p.useState)(A.emailAddress),[Le,Ue]=(0,p.useState)(),[Je,dt]=(0,p.useState)(),[wt,Xe]=(0,p.useState)(),[ht,et]=(0,p.useState)(null),[gt,Xt]=(0,p.useState)(),[Pt,jt]=(0,p.useState)(),[cn,xi]=(0,p.useState)(),[qn,ci]=(0,p.useState)(""),gn=(0,p.useMemo)(()=>wt||cn||Le||Je||!!qn,[wt,cn,Le,Je,qn]),un=(0,p.useCallback)(()=>{ie(n(sl,{emailAddress:Ne}))},[Ne,ie]),Nn=(0,p.useCallback)(bt=>{let Ct;return k.user.getCurrent().then(_n=>we(Ct=_n)).then(()=>k.webauthn.shouldRegister(Ct)).then(_n=>{const Fn=()=>{_n?ie(n(rl,{})):oe()};bt?ie(n(Id,{onSuccess:Fn})):Fn()}).catch(_n=>ie(n(Ii,{initialError:_n})))},[oe,k.user,k.webauthn,ie,we]),Gt=(0,p.useCallback)((bt,Ct,_n)=>{const Fn=Qr=>ie(n(Ea,{userID:bt,emailID:Ct,emailAddress:Ne,initialError:Qr,onSuccess:()=>Nn(_n),onBack:un}));return k.passcode.initialize(bt,Ct,!1).then(ve).then(()=>Fn()).catch(Qr=>{if(!(Qr instanceof ke))throw Qr;Fn(Qr)})},[Nn,Ne,k.passcode,un,ie,ve]),Xn=(0,p.useCallback)(()=>ie(n(Ld,{onSuccess:()=>Nn(ne.password.enabled),onPasscode:(bt,Ct)=>Gt(bt,Ct,ne.password.enabled),emailAddress:Ne,onBack:un})),[Nn,ne.password.enabled,Ne,un,Gt,ie]),zs=(0,p.useMemo)(()=>G.includes("conditionalMediation")&&Pt,[G,Pt]),Ta=(0,p.useCallback)(bt=>{if(!ne.password.enabled)return Gt(bt.id,bt.email_id);ie(n(Dd,{userInfo:bt,onSuccess:()=>Nn(!1),onRecovery:()=>Gt(bt.id,bt.email_id,!0),onBack:un}))},[Nn,ne.password.enabled,un,Gt,ie]),Ca=(0,p.useCallback)(()=>{zs&&k.webauthn.login(null,!0).then(()=>{et(null),oe(),xi(!0)}).catch(bt=>{bt instanceof $&&Ca(),et(bt instanceof b?null:bt)})},[zs,oe,k.webauthn]);return(0,p.useEffect)(()=>{Ca()},[Ca]),(0,p.useEffect)(()=>{Xt(N.supported())},[]),(0,p.useEffect)(()=>{N.isConditionalMediationAvailable().then(bt=>jt(bt)).catch(bt=>et(new fe(bt)))},[]),(0,p.useEffect)(()=>{qn&&k.thirdParty.auth(qn,window.location.href).catch(bt=>{ie(n(Ii,{initialError:bt}))})},[k,ie,qn]),n(Qn,{children:[n(zn,{children:P("headlines.loginEmail")}),n(jn,{error:ht}),n(Yt,Object.assign({onSubmit:bt=>{bt.preventDefault(),Xe(!0),gt?(()=>{let Ct,_n;return k.user.getInfo(Ne).then(Fn=>ye(Ct=Fn)).then(()=>!Ct.verified&&ne.emails.require_verification?Gt(Ct.id,Ct.email_id):!Ct.has_webauthn_credential||zs?Ta(Ct):(_n=!0,k.webauthn.login(Ct.id))).then(()=>{_n&&(Xe(!1),xi(!0),oe())}).catch(Fn=>{if(!(Fn instanceof De)){if(Fn instanceof b)return Ta(Ct);throw Fn}Xn()})})().catch(Ct=>{Xe(!1),et(Ct)}):(()=>{let Ct;return k.user.getInfo(Ne).then(_n=>ye(Ct=_n)).then(()=>!Ct.verified&&ne.emails.require_verification?Gt(Ct.id,Ct.email_id):Ta(Ct)).catch(_n=>{if(!(_n instanceof De))throw _n;Xn()})})().catch(Ct=>{Xe(!1),et(Ct)})}},{children:[n(or,{name:"email",type:"email",autoComplete:"username webauthn",autoCorrect:"off",required:!0,onInput:bt=>{bt.target instanceof HTMLInputElement&&Ge(bt.target.value)},value:Ne,placeholder:P("labels.email"),pattern:"^.*[^0-9]+$",disabled:gn,autoFocus:!0}),n(xn,Object.assign({isLoading:wt,isSuccess:cn,disabled:gn},{children:P("labels.continue")}))]})),gt&&!zs?n(e.Fragment,{children:[n(nl,{children:P("labels.or")}),n(Yt,Object.assign({onSubmit:bt=>{bt.preventDefault(),Ue(!0),k.webauthn.login().then(()=>{et(null),Ue(!1),dt(!0),oe()}).catch(Ct=>{Ue(!1),et(Ct instanceof b?null:Ct)})}},{children:n(xn,Object.assign({secondary:!0,isLoading:Le,isSuccess:Je,disabled:gn,icon:"passkey"},{children:P("labels.signInPasskey")}))})),(M=ne.providers)===null||M===void 0?void 0:M.map(bt=>n(Yt,Object.assign({onSubmit:Ct=>{((_n,Fn)=>{_n.preventDefault(),ci(Fn)})(Ct,bt)}},{children:n(xn,Object.assign({secondary:!0,isLoading:qn===bt,disabled:gn,icon:bt.toLowerCase()},{children:P("labels.signInWith",{provider:bt})}))}),bt))]}):null]})},Rd=sl,kd=()=>{const{t:A}=(0,p.useContext)(g.TranslateContext),{emitSuccessEvent:M}=(0,p.useContext)(ln),[P,k]=(0,p.useState)(!1);return n(Qn,{children:[n(zn,{children:A("headlines.loginFinished")}),n(Yt,Object.assign({onSubmit:G=>{G.preventDefault(),k(!0),M()}},{children:n(xn,Object.assign({autofocus:!0,isSuccess:P},{children:A("labels.continue")}))}))]})},al=()=>{const{hanko:A,componentName:M,setConfig:P,setUser:k,setEmails:G,setWebauthnCredentials:oe,setPage:ne}=(0,p.useContext)(ln),ie=(0,p.useCallback)(Ne=>A.webauthn.shouldRegister(Ne).then(Ge=>n(Ge?rl:kd,{})),[A]),ve=(0,p.useCallback)(()=>{const Ne=A.thirdParty.getError();return Ne?(window.history.replaceState(null,null,window.location.pathname),new Promise(Ge=>Ge(n(Ii,{initialError:Ne})))):A.token.validate().then(()=>{let Ge;return Promise.allSettled([A.config.get().then(P),A.user.getCurrent().then(Le=>k(Ge=Le))]).then(([Le,Ue])=>Le.status==="rejected"?n(Ii,{initialError:Le.reason}):Ue.status==="fulfilled"?ie(Ge):n(Rd,{}))}).catch(Ge=>n(Ii,{initialError:Ge}))},[ie,A,P,k]),ye=(0,p.useCallback)(()=>Promise.all([A.config.get().then(P),A.user.getCurrent().then(k),A.email.list().then(G),A.webauthn.listCredentials().then(oe)]).then(()=>n(Jr,{})),[A,P,G,k,oe]),we=(0,p.useCallback)(()=>{switch(M){case"auth":return ve;case"profile":return ye;default:return}},[M,ve,ye]);return(0,p.useEffect)(()=>{if(!A)return;const Ne=we();Ne&&Ne().then(ne).catch(Ge=>ne(n(Ii,{initialError:Ge})))},[A,we,ne]),n(Sa,{isLoading:!0})},ln=(0,e.createContext)(null),ol=({api:A,lang:M,fallbackLang:P="en",componentName:k,experimental:G=""})=>{const oe=(0,p.useRef)(null),ne=(0,p.useMemo)(()=>A?new st(A,13e3):null,[A]),ie=(0,p.useMemo)(()=>G.split(" ").filter(Pt=>Pt.length).map(Pt=>Pt),[G]),ve=(0,p.useCallback)(()=>{const Pt=new Event("hankoAuthSuccess",{bubbles:!0,composed:!0}),jt=setTimeout(()=>{oe.current.dispatchEvent(Pt)},500);return()=>clearTimeout(jt)},[]),[ye,we]=(0,p.useState)(),[Ne,Ge]=(0,p.useState)(null),[Le,Ue]=(0,p.useState)(),[Je,dt]=(0,p.useState)(),[wt,Xe]=(0,p.useState)(),[ht,et]=(0,p.useState)(),[gt,Xt]=(0,p.useState)(n(al,{}));return n(ln.Provider,Object.assign({value:{hanko:ne,componentName:k,experimentalFeatures:ie,emitSuccessEvent:ve,config:ye,setConfig:we,userInfo:Ne,setUserInfo:Ge,passcode:Le,setPasscode:Ue,user:Je,setUser:dt,emails:wt,setEmails:Xe,webauthnCredentials:ht,setWebauthnCredentials:et,page:gt,setPage:Xt}},{children:n(g.TranslateProvider,Object.assign({translations:ct,lang:M==null?void 0:M.toString(),fallbackLang:P},{children:n(Kt,Object.assign({ref:oe},{children:gt}))}))}))};var ll=function(A,M,P,k){return new(P||(P=Promise))(function(G,oe){function ne(ye){try{ve(k.next(ye))}catch(we){oe(we)}}function ie(ye){try{ve(k.throw(ye))}catch(we){oe(we)}}function ve(ye){var we;ye.done?G(ye.value):(we=ye.value,we instanceof P?we:new P(function(Ne){Ne(we)})).then(ne,ie)}ve((k=k.apply(A,M||[])).next())})};const cl=A=>n(ol,Object.assign({componentName:"auth"},A)),ul=A=>n(ol,Object.assign({componentName:"profile"},A)),zd=A=>ll(void 0,void 0,void 0,function*(){return yield Promise.all([dl(Object.assign(Object.assign({},A),{tagName:"hanko-auth",entryComponent:cl,observedAttributes:["api","lang","experimental"]})),dl(Object.assign(Object.assign({},A),{tagName:"hanko-profile",entryComponent:ul,observedAttributes:["api","lang"]}))])}),dl=({tagName:A,entryComponent:M,shadow:P=!0,injectStyles:k=!0,observedAttributes:G})=>ll(void 0,void 0,void 0,function*(){if(customElements.get(A)||function(oe,ne,ie,ve){function ye(){var we=Reflect.construct(HTMLElement,[],ye);return we._vdomComponent=oe,we._root=ve&&ve.shadow?we.attachShadow({mode:"open"}):we,we}(ye.prototype=Object.create(HTMLElement.prototype)).constructor=ye,ye.prototype.connectedCallback=a,ye.prototype.attributeChangedCallback=l,ye.prototype.disconnectedCallback=u,ie=ie||oe.observedAttributes||Object.keys(oe.propTypes||{}),ye.observedAttributes=ie,ie.forEach(function(we){Object.defineProperty(ye.prototype,we,{get:function(){var Ne,Ge,Le,Ue;return(Ne=(Ge=this._vdom)==null||(Le=Ge.props)==null?void 0:Le[we])!=null?Ne:(Ue=this._props)==null?void 0:Ue[we]},set:function(Ne){this._vdom?this.attributeChangedCallback(we,null,Ne):(this._props||(this._props={}),this._props[we]=Ne,this.connectedCallback());var Ge=typeof Ne;Ne!=null&&Ge!=="string"&&Ge!=="boolean"&&Ge!=="number"||this.setAttribute(we,Ne)}})}),customElements.define(ne||oe.tagName||oe.displayName||oe.name,ye)}(M,A,G,{shadow:P}),k){yield customElements.whenDefined(A);const oe=document.getElementsByTagName(A),ne=window._hankoStyle;Array.from(oe).forEach(ie=>{if(P){const ve=ne.cloneNode(!0);ie.shadowRoot.appendChild(ve)}else ie.appendChild(ne)})}})})();va.Mx;va.mD;var _u=va.z2;function iy(s){let e,t;return{c(){e=la("svg"),t=la("path"),this.h()},l(n){e=ca(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var i=It(e);t=ca(i,"path",{d:!0}),It(t).forEach(He),i.forEach(He),this.h()},h(){ot(t,"d","M10 3.5a6.5 6.5 0 1 1 0 13v-13ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z"),ot(e,"xmlns","http://www.w3.org/2000/svg"),ot(e,"width","1em"),ot(e,"height","1em"),ot(e,"viewBox","0 0 20 20"),ot(e,"class","fill-current text-black")},m(n,i){_t(n,e,i),Mt(e,t)},d(n){n&&He(e)}}}function ry(s){let e,t;return{c(){e=la("svg"),t=la("path"),this.h()},l(n){e=ca(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var i=It(e);t=ca(i,"path",{d:!0}),It(t).forEach(He),i.forEach(He),this.h()},h(){ot(t,"d","M10 3.5a6.5 6.5 0 1 1 0 13v-13ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z"),ot(e,"xmlns","http://www.w3.org/2000/svg"),ot(e,"width","1em"),ot(e,"height","1em"),ot(e,"viewBox","0 0 20 20"),ot(e,"class","fill-current text-white")},m(n,i){_t(n,e,i),Mt(e,t)},d(n){n&&He(e)}}}function vu(s){var i;let e,t=((i=s[1])==null?void 0:i.message)+"",n;return{c(){e=Lt("div"),n=aa(t),this.h()},l(r){e=Dt(r,"DIV",{class:!0});var o=It(e);n=oa(o,t),o.forEach(He),this.h()},h(){ot(e,"class","error")},m(r,o){_t(r,e,o),Mt(e,n)},p(r,o){var a;o&2&&t!==(t=((a=r[1])==null?void 0:a.message)+"")&&Vd(n,t)},d(r){r&&He(e)}}}function sy(s){let e,t,n,i,r,o,a,c,l,u,d,f,g,p,m,h,x,E,w,T,R,C,O;e=new ty({});function v(F,H){return F[2]?ry:iy}let S=v(s),y=S(s);l=new mx({}),p=new Jx({props:{isDarkMode:s[2]}}),h=new Nx({});let z=s[1]&&vu(s);return{c(){tt(e.$$.fragment),t=Et(),n=Lt("div"),i=Lt("div"),r=Lt("button"),y.c(),o=Et(),a=Lt("div"),c=Lt("div"),tt(l.$$.fragment),u=Et(),d=Lt("hanko-auth"),f=Et(),g=Lt("div"),tt(p.$$.fragment),m=Et(),tt(h.$$.fragment),x=Et(),E=Lt("div"),z&&z.c(),w=Et(),T=Lt("hanko-auth"),this.h()},l(F){nt(e.$$.fragment,F),t=At(F),n=Dt(F,"DIV",{class:!0});var H=It(n);i=Dt(H,"DIV",{class:!0});var B=It(i);r=Dt(B,"BUTTON",{class:!0});var Z=It(r);y.l(Z),Z.forEach(He),B.forEach(He),o=At(H),a=Dt(H,"DIV",{class:!0});var K=It(a);c=Dt(K,"DIV",{class:!0});var ae=It(c);nt(l.$$.fragment,ae),ae.forEach(He),u=At(K),d=Dt(K,"HANKO-AUTH",{api:!0,lang:!0,experimental:!0}),It(d).forEach(He),K.forEach(He),f=At(H),g=Dt(H,"DIV",{class:!0});var ee=It(g);nt(p.$$.fragment,ee),ee.forEach(He),m=At(H),nt(h.$$.fragment,H),x=At(H),E=Dt(H,"DIV",{class:!0});var de=It(E);z&&z.l(de),w=At(de),T=Dt(de,"HANKO-AUTH",{api:!0}),It(T).forEach(He),de.forEach(He),H.forEach(He),this.h()},h(){ot(r,"class","p-3"),ot(i,"class","fixed top-5 right-5 z-50"),ot(c,"class","mb-10 h-64 w-96"),Ns(d,"api","https://backend-ap.tensical.com"),Ns(d,"lang","en"),Ns(d,"experimental","conditionalMediation"),ot(a,"class","flex flex-col items-center justify-center"),ot(g,"class","flex justify-center w-full h-full"),Ns(T,"api",s[3]),ot(E,"class","content"),ot(n,"class","w-full h-full")},m(F,H){it(e,F,H),_t(F,t,H),_t(F,n,H),Mt(n,i),Mt(i,r),y.m(r,null),Mt(n,o),Mt(n,a),Mt(a,c),it(l,c,null),Mt(a,u),Mt(a,d),Mt(n,f),Mt(n,g),it(p,g,null),Mt(n,m),it(h,n,null),Mt(n,x),Mt(n,E),z&&z.m(E,null),Mt(E,w),Mt(E,T),s[5](T),R=!0,C||(O=Fi(r,"click",s[4]),C=!0)},p(F,[H]){S!==(S=v(F))&&(y.d(1),y=S(F),y&&(y.c(),y.m(r,null)));const B={};H&4&&(B.isDarkMode=F[2]),p.$set(B),F[1]?z?z.p(F,H):(z=vu(F),z.c(),z.m(E,w)):z&&(z.d(1),z=null)},i(F){R||(je(e.$$.fragment,F),je(l.$$.fragment,F),je(p.$$.fragment,F),je(h.$$.fragment,F),R=!0)},o(F){$e(e.$$.fragment,F),$e(l.$$.fragment,F),$e(p.$$.fragment,F),$e(h.$$.fragment,F),R=!1},d(F){rt(e,F),F&&He(t),F&&He(n),y.d(),rt(l),rt(p),rt(h),z&&z.d(),s[5](null),C=!1,O()}}}function ay(s,e,t){const n="https://backend-ap.tensical.com";_u({shadow:!0,injectStyles:!0});let i,r=null;sa(async()=>{_u({shadow:!0,injectStyles:!1}).catch(u=>t(1,r=u)),i==null||i.addEventListener("hankoAuthSuccess",console.log("hi"))}),Ft(()=>{i==null||i.removeEventListener("hankoAuthSuccess",console.log("hi"))});let o,a=!0;sa(()=>{o=document.getElementsByTagName("html")[0]});const c=()=>{o&&(o!=null&&o.classList.contains("dark")?(t(2,a=!1),o.classList.remove("dark"),o.style.backgroundColor="white"):(t(2,a=!0),o==null||o.classList.add("dark"),o.style.backgroundColor="black"))};function l(u){xu[u?"unshift":"push"](()=>{i=u,t(0,i)})}return[i,r,a,n,c,l]}class gy extends rn{constructor(e){super(),sn(this,e,ay,sy,an,{})}}export{gy as default};
