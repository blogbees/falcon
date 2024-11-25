import{j as Le,c as pi,r as br}from"./jsx-runtime-d4vcKfGz.js";function gc(){return Le.jsxs("div",{className:"bg-purple-800 text-white p-4 flex items-center",children:[Le.jsx("div",{className:"text-xl font-bold",children:"Falcon - Interactive Lab"}),Le.jsxs("div",{className:"ml-auto space-x-4",children:[Le.jsx("button",{className:"hover:bg-purple-600 px-4 py-2 rounded",children:"Home"}),Le.jsx("button",{className:"hover:bg-purple-600 px-4 py-2 rounded",children:"About"}),Le.jsx("button",{className:"hover:bg-purple-600 px-4 py-2 rounded",children:"Contact"})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="170",_c=0,_a=1,vc=2,vl=1,xc=2,ui=3,Ci=0,Rn=1,hi=2,wi=0,hr=1,va=2,xa=3,Ma=4,Mc=5,ki=100,yc=101,Sc=102,Ec=103,Tc=104,Ac=200,bc=201,wc=202,Rc=203,ao=204,lo=205,Cc=206,Pc=207,Lc=208,Uc=209,Dc=210,Ic=211,Nc=212,Fc=213,Oc=214,co=0,uo=1,ho=2,pr=3,fo=4,po=5,mo=6,go=7,xl=0,Bc=1,zc=2,Ri=0,Gc=1,Hc=2,kc=3,Vc=4,Wc=5,Xc=6,jc=7,Ml=300,mr=301,gr=302,_o=303,vo=304,Ss=306,xo=1e3,Wi=1001,Mo=1002,qn=1003,Yc=1004,jr=1005,Qn=1006,Rs=1007,Xi=1008,gi=1009,yl=1010,Sl=1011,Nr=1012,Zo=1013,ji=1014,fi=1015,Fr=1016,$o=1017,Jo=1018,_r=1020,El=35902,Tl=1021,Al=1022,Yn=1023,bl=1024,wl=1025,fr=1026,vr=1027,Rl=1028,Qo=1029,Cl=1030,ta=1031,ea=1033,ps=33776,ms=33777,gs=33778,_s=33779,yo=35840,So=35841,Eo=35842,To=35843,Ao=36196,bo=37492,wo=37496,Ro=37808,Co=37809,Po=37810,Lo=37811,Uo=37812,Do=37813,Io=37814,No=37815,Fo=37816,Oo=37817,Bo=37818,zo=37819,Go=37820,Ho=37821,vs=36492,ko=36494,Vo=36495,Pl=36283,Wo=36284,Xo=36285,jo=36286,qc=3200,Kc=3201,Ll=0,Zc=1,bi="",Gn="srgb",Mr="srgb-linear",Es="linear",Xe="srgb",Zi=7680,ya=519,$c=512,Jc=513,Qc=514,Ul=515,tu=516,eu=517,nu=518,iu=519,Sa=35044,Ea="300 es",di=2e3,Ms=2001;class yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let o=0,c=r.length;o<c;o++)r[o].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cs=Math.PI/180,Yo=180/Math.PI;function Or(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function wn(i,t,e){return Math.max(t,Math.min(e,i))}function ru(i,t){return(i%t+t)%t}function Ps(i,t,e){return(1-e)*i+e*t}function wr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(t=0,e=0){Ve.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(wn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*n-c*r+t.x,this.y=o*r+c*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(t,e,n,r,o,c,l,h,m){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,c,l,h,m)}set(t,e,n,r,o,c,l,h,m){const _=this.elements;return _[0]=t,_[1]=r,_[2]=l,_[3]=e,_[4]=o,_[5]=h,_[6]=n,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,c=n[0],l=n[3],h=n[6],m=n[1],_=n[4],M=n[7],x=n[2],S=n[5],b=n[8],R=r[0],y=r[3],p=r[6],O=r[1],D=r[4],C=r[7],rt=r[2],V=r[5],H=r[8];return o[0]=c*R+l*O+h*rt,o[3]=c*y+l*D+h*V,o[6]=c*p+l*C+h*H,o[1]=m*R+_*O+M*rt,o[4]=m*y+_*D+M*V,o[7]=m*p+_*C+M*H,o[2]=x*R+S*O+b*rt,o[5]=x*y+S*D+b*V,o[8]=x*p+S*C+b*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],c=t[4],l=t[5],h=t[6],m=t[7],_=t[8];return e*c*_-e*l*m-n*o*_+n*l*h+r*o*m-r*c*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],c=t[4],l=t[5],h=t[6],m=t[7],_=t[8],M=_*c-l*m,x=l*h-_*o,S=m*o-c*h,b=e*M+n*x+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=M*R,t[1]=(r*m-_*n)*R,t[2]=(l*n-r*c)*R,t[3]=x*R,t[4]=(_*e-r*h)*R,t[5]=(r*o-l*e)*R,t[6]=S*R,t[7]=(n*h-m*e)*R,t[8]=(c*e-n*o)*R,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,c,l){const h=Math.cos(o),m=Math.sin(o);return this.set(n*h,n*m,-n*(h*c+m*l)+c+t,-r*m,r*h,-r*(-m*c+h*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new ge;function Dl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function su(){const i=ys("canvas");return i.style.display="block",i}const Ta={};function Dr(i){i in Ta||(Ta[i]=!0,console.warn(i))}function ou(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function au(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Oe={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Xe&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Xe&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?Es:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Aa=[.64,.33,.3,.6,.15,.06],ba=[.2126,.7152,.0722],wa=[.3127,.329],Ra=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ca=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Oe.define({[Mr]:{primaries:Aa,whitePoint:wa,transfer:Es,toXYZ:Ra,fromXYZ:Ca,luminanceCoefficients:ba,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:Aa,whitePoint:wa,transfer:Xe,toXYZ:Ra,fromXYZ:Ca,luminanceCoefficients:ba,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}});let $i;class cu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=ys("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let c=0;c<o.length;c++)o[c]=mi(o[c]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uu=0;class Il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Or(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?o.push(Us(r[c].image)):o.push(Us(r[c]))}else o=Us(r);n.url=o}return e||(t.images[this.uuid]=n),n}}function Us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hu=0;class Cn extends yr{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,n=Wi,r=Wi,o=Qn,c=Xi,l=Yn,h=gi,m=Cn.DEFAULT_ANISOTROPY,_=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Or(),this.name="",this.source=new Il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=m,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xo:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xo:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Ml;Cn.DEFAULT_ANISOTROPY=1;class je{constructor(t=0,e=0,n=0,r=1){je.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*n+c[8]*r+c[12]*o,this.y=c[1]*e+c[5]*n+c[9]*r+c[13]*o,this.z=c[2]*e+c[6]*n+c[10]*r+c[14]*o,this.w=c[3]*e+c[7]*n+c[11]*r+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o;const h=t.elements,m=h[0],_=h[4],M=h[8],x=h[1],S=h[5],b=h[9],R=h[2],y=h[6],p=h[10];if(Math.abs(_-x)<.01&&Math.abs(M-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(M+R)<.1&&Math.abs(b+y)<.1&&Math.abs(m+S+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(m+1)/2,C=(S+1)/2,rt=(p+1)/2,V=(_+x)/4,H=(M+R)/4,Y=(b+y)/4;return D>C&&D>rt?D<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(D),r=V/n,o=H/n):C>rt?C<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(C),n=V/r,o=Y/r):rt<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(rt),n=H/o,r=Y/o),this.set(n,r,o,e),this}let O=Math.sqrt((y-b)*(y-b)+(M-R)*(M-R)+(x-_)*(x-_));return Math.abs(O)<.001&&(O=1),this.x=(y-b)/O,this.y=(M-R)/O,this.z=(x-_)/O,this.w=Math.acos((m+S+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends yr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new je(0,0,t,e),this.scissorTest=!1,this.viewport=new je(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Cn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Il(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends fu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nl extends Cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class du extends Cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,c,l){let h=n[r+0],m=n[r+1],_=n[r+2],M=n[r+3];const x=o[c+0],S=o[c+1],b=o[c+2],R=o[c+3];if(l===0){t[e+0]=h,t[e+1]=m,t[e+2]=_,t[e+3]=M;return}if(l===1){t[e+0]=x,t[e+1]=S,t[e+2]=b,t[e+3]=R;return}if(M!==R||h!==x||m!==S||_!==b){let y=1-l;const p=h*x+m*S+_*b+M*R,O=p>=0?1:-1,D=1-p*p;if(D>Number.EPSILON){const rt=Math.sqrt(D),V=Math.atan2(rt,p*O);y=Math.sin(y*V)/rt,l=Math.sin(l*V)/rt}const C=l*O;if(h=h*y+x*C,m=m*y+S*C,_=_*y+b*C,M=M*y+R*C,y===1-l){const rt=1/Math.sqrt(h*h+m*m+_*_+M*M);h*=rt,m*=rt,_*=rt,M*=rt}}t[e]=h,t[e+1]=m,t[e+2]=_,t[e+3]=M}static multiplyQuaternionsFlat(t,e,n,r,o,c){const l=n[r],h=n[r+1],m=n[r+2],_=n[r+3],M=o[c],x=o[c+1],S=o[c+2],b=o[c+3];return t[e]=l*b+_*M+h*S-m*x,t[e+1]=h*b+_*x+m*M-l*S,t[e+2]=m*b+_*S+l*x-h*M,t[e+3]=_*b-l*M-h*x-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,o=t._z,c=t._order,l=Math.cos,h=Math.sin,m=l(n/2),_=l(r/2),M=l(o/2),x=h(n/2),S=h(r/2),b=h(o/2);switch(c){case"XYZ":this._x=x*_*M+m*S*b,this._y=m*S*M-x*_*b,this._z=m*_*b+x*S*M,this._w=m*_*M-x*S*b;break;case"YXZ":this._x=x*_*M+m*S*b,this._y=m*S*M-x*_*b,this._z=m*_*b-x*S*M,this._w=m*_*M+x*S*b;break;case"ZXY":this._x=x*_*M-m*S*b,this._y=m*S*M+x*_*b,this._z=m*_*b+x*S*M,this._w=m*_*M-x*S*b;break;case"ZYX":this._x=x*_*M-m*S*b,this._y=m*S*M+x*_*b,this._z=m*_*b-x*S*M,this._w=m*_*M+x*S*b;break;case"YZX":this._x=x*_*M+m*S*b,this._y=m*S*M+x*_*b,this._z=m*_*b-x*S*M,this._w=m*_*M-x*S*b;break;case"XZY":this._x=x*_*M-m*S*b,this._y=m*S*M-x*_*b,this._z=m*_*b+x*S*M,this._w=m*_*M+x*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],o=e[8],c=e[1],l=e[5],h=e[9],m=e[2],_=e[6],M=e[10],x=n+l+M;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(o-m)*S,this._z=(c-r)*S}else if(n>l&&n>M){const S=2*Math.sqrt(1+n-l-M);this._w=(_-h)/S,this._x=.25*S,this._y=(r+c)/S,this._z=(o+m)/S}else if(l>M){const S=2*Math.sqrt(1+l-n-M);this._w=(o-m)/S,this._x=(r+c)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+M-n-l);this._w=(c-r)/S,this._x=(o+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(wn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,o=t._z,c=t._w,l=e._x,h=e._y,m=e._z,_=e._w;return this._x=n*_+c*l+r*m-o*h,this._y=r*_+c*h+o*l-n*m,this._z=o*_+c*m+n*h-r*l,this._w=c*_-n*l-r*h-o*m,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,o=this._z,c=this._w;let l=c*t._w+n*t._x+r*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=c,this._x=n,this._y=r,this._z=o,this;const h=1-l*l;if(h<=Number.EPSILON){const S=1-e;return this._w=S*c+e*this._w,this._x=S*n+e*this._x,this._y=S*r+e*this._y,this._z=S*o+e*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,l),M=Math.sin((1-e)*_)/m,x=Math.sin(e*_)/m;return this._w=c*M+this._w*x,this._x=n*M+this._x*x,this._y=r*M+this._y*x,this._z=o*M+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,e=0,n=0){tt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=t.elements,c=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*c,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*c,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*c,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,o=t.x,c=t.y,l=t.z,h=t.w,m=2*(c*r-l*n),_=2*(l*e-o*r),M=2*(o*n-c*e);return this.x=e+h*m+c*M-l*_,this.y=n+h*_+l*m-o*M,this.z=r+h*M+o*_-c*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,o=t.z,c=e.x,l=e.y,h=e.z;return this.x=r*h-o*l,this.y=o*c-n*h,this.z=n*l-r*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ds.copy(this).projectOnVector(t),this.sub(Ds)}reflect(t){return this.sub(Ds.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(wn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new tt,Pa=new Br;class zr{constructor(t=new tt(1/0,1/0,1/0),e=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,l=o.count;c<l;c++)t.isMesh===!0?t.getVertexPosition(c,Vn):Vn.fromBufferAttribute(o,c),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}const r=t.children;for(let o=0,c=r.length;o<c;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),qr.subVectors(this.max,Rr),Ji.subVectors(t.a,Rr),Qi.subVectors(t.b,Rr),tr.subVectors(t.c,Rr),Mi.subVectors(Qi,Ji),yi.subVectors(tr,Qi),Ii.subVectors(Ji,tr);let e=[0,-Mi.z,Mi.y,0,-yi.z,yi.y,0,-Ii.z,Ii.y,Mi.z,0,-Mi.x,yi.z,0,-yi.x,Ii.z,0,-Ii.x,-Mi.y,Mi.x,0,-yi.y,yi.x,0,-Ii.y,Ii.x,0];return!Is(e,Ji,Qi,tr,qr)||(e=[1,0,0,0,1,0,0,0,1],!Is(e,Ji,Qi,tr,qr))?!1:(Kr.crossVectors(Mi,yi),e=[Kr.x,Kr.y,Kr.z],Is(e,Ji,Qi,tr,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const si=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Vn=new tt,Yr=new zr,Ji=new tt,Qi=new tt,tr=new tt,Mi=new tt,yi=new tt,Ii=new tt,Rr=new tt,qr=new tt,Kr=new tt,Ni=new tt;function Is(i,t,e,n,r){for(let o=0,c=i.length-3;o<=c;o+=3){Ni.fromArray(i,o);const l=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),h=t.dot(Ni),m=e.dot(Ni),_=n.dot(Ni);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>l)return!1}return!0}const pu=new zr,Cr=new tt,Ns=new tt;class na{constructor(t=new tt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pu.setFromPoints(t).getCenter(n);let r=0;for(let o=0,c=t.length;o<c;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);const e=Cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Cr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ns.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(Ns)),this.expandByPoint(Cr.copy(t.center).sub(Ns))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new tt,Fs=new tt,Zr=new tt,Si=new tt,Os=new tt,$r=new tt,Bs=new tt;class mu{constructor(t=new tt,e=new tt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Fs.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(Fs);const o=t.distanceTo(e)*.5,c=-this.direction.dot(Zr),l=Si.dot(this.direction),h=-Si.dot(Zr),m=Si.lengthSq(),_=Math.abs(1-c*c);let M,x,S,b;if(_>0)if(M=c*h-l,x=c*l-h,b=o*_,M>=0)if(x>=-b)if(x<=b){const R=1/_;M*=R,x*=R,S=M*(M+c*x+2*l)+x*(c*M+x+2*h)+m}else x=o,M=Math.max(0,-(c*x+l)),S=-M*M+x*(x+2*h)+m;else x=-o,M=Math.max(0,-(c*x+l)),S=-M*M+x*(x+2*h)+m;else x<=-b?(M=Math.max(0,-(-c*o+l)),x=M>0?-o:Math.min(Math.max(-o,-h),o),S=-M*M+x*(x+2*h)+m):x<=b?(M=0,x=Math.min(Math.max(-o,-h),o),S=x*(x+2*h)+m):(M=Math.max(0,-(c*o+l)),x=M>0?o:Math.min(Math.max(-o,-h),o),S=-M*M+x*(x+2*h)+m);else x=c>0?-o:o,M=Math.max(0,-(c*x+l)),S=-M*M+x*(x+2*h)+m;return n&&n.copy(this.origin).addScaledVector(this.direction,M),r&&r.copy(Fs).addScaledVector(Zr,x),S}intersectSphere(t,e){oi.subVectors(t.center,this.origin);const n=oi.dot(this.direction),r=oi.dot(oi)-n*n,o=t.radius*t.radius;if(r>o)return null;const c=Math.sqrt(o-r),l=n-c,h=n+c;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,c,l,h;const m=1/this.direction.x,_=1/this.direction.y,M=1/this.direction.z,x=this.origin;return m>=0?(n=(t.min.x-x.x)*m,r=(t.max.x-x.x)*m):(n=(t.max.x-x.x)*m,r=(t.min.x-x.x)*m),_>=0?(o=(t.min.y-x.y)*_,c=(t.max.y-x.y)*_):(o=(t.max.y-x.y)*_,c=(t.min.y-x.y)*_),n>c||o>r||((o>n||isNaN(n))&&(n=o),(c<r||isNaN(r))&&(r=c),M>=0?(l=(t.min.z-x.z)*M,h=(t.max.z-x.z)*M):(l=(t.max.z-x.z)*M,h=(t.min.z-x.z)*M),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,n,r,o){Os.subVectors(e,t),$r.subVectors(n,t),Bs.crossVectors(Os,$r);let c=this.direction.dot(Bs),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;Si.subVectors(this.origin,t);const h=l*this.direction.dot($r.crossVectors(Si,$r));if(h<0)return null;const m=l*this.direction.dot(Os.cross(Si));if(m<0||h+m>c)return null;const _=-l*Si.dot(Bs);return _<0?null:this.at(_/c,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,e,n,r,o,c,l,h,m,_,M,x,S,b,R,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,c,l,h,m,_,M,x,S,b,R,y)}set(t,e,n,r,o,c,l,h,m,_,M,x,S,b,R,y){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=o,p[5]=c,p[9]=l,p[13]=h,p[2]=m,p[6]=_,p[10]=M,p[14]=x,p[3]=S,p[7]=b,p[11]=R,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/er.setFromMatrixColumn(t,0).length(),o=1/er.setFromMatrixColumn(t,1).length(),c=1/er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*c,e[9]=n[9]*c,e[10]=n[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,o=t.z,c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),m=Math.sin(r),_=Math.cos(o),M=Math.sin(o);if(t.order==="XYZ"){const x=c*_,S=c*M,b=l*_,R=l*M;e[0]=h*_,e[4]=-h*M,e[8]=m,e[1]=S+b*m,e[5]=x-R*m,e[9]=-l*h,e[2]=R-x*m,e[6]=b+S*m,e[10]=c*h}else if(t.order==="YXZ"){const x=h*_,S=h*M,b=m*_,R=m*M;e[0]=x+R*l,e[4]=b*l-S,e[8]=c*m,e[1]=c*M,e[5]=c*_,e[9]=-l,e[2]=S*l-b,e[6]=R+x*l,e[10]=c*h}else if(t.order==="ZXY"){const x=h*_,S=h*M,b=m*_,R=m*M;e[0]=x-R*l,e[4]=-c*M,e[8]=b+S*l,e[1]=S+b*l,e[5]=c*_,e[9]=R-x*l,e[2]=-c*m,e[6]=l,e[10]=c*h}else if(t.order==="ZYX"){const x=c*_,S=c*M,b=l*_,R=l*M;e[0]=h*_,e[4]=b*m-S,e[8]=x*m+R,e[1]=h*M,e[5]=R*m+x,e[9]=S*m-b,e[2]=-m,e[6]=l*h,e[10]=c*h}else if(t.order==="YZX"){const x=c*h,S=c*m,b=l*h,R=l*m;e[0]=h*_,e[4]=R-x*M,e[8]=b*M+S,e[1]=M,e[5]=c*_,e[9]=-l*_,e[2]=-m*_,e[6]=S*M+b,e[10]=x-R*M}else if(t.order==="XZY"){const x=c*h,S=c*m,b=l*h,R=l*m;e[0]=h*_,e[4]=-M,e[8]=m*_,e[1]=x*M+R,e[5]=c*_,e[9]=S*M-b,e[2]=b*M-S,e[6]=l*_,e[10]=R*M+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gu,t,_u)}lookAt(t,e,n){const r=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ei.crossVectors(n,Dn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ei.crossVectors(n,Dn)),Ei.normalize(),Jr.crossVectors(Dn,Ei),r[0]=Ei.x,r[4]=Jr.x,r[8]=Dn.x,r[1]=Ei.y,r[5]=Jr.y,r[9]=Dn.y,r[2]=Ei.z,r[6]=Jr.z,r[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,c=n[0],l=n[4],h=n[8],m=n[12],_=n[1],M=n[5],x=n[9],S=n[13],b=n[2],R=n[6],y=n[10],p=n[14],O=n[3],D=n[7],C=n[11],rt=n[15],V=r[0],H=r[4],Y=r[8],P=r[12],v=r[1],w=r[5],Z=r[9],z=r[13],it=r[2],ht=r[6],G=r[10],st=r[14],K=r[3],gt=r[7],At=r[11],Nt=r[15];return o[0]=c*V+l*v+h*it+m*K,o[4]=c*H+l*w+h*ht+m*gt,o[8]=c*Y+l*Z+h*G+m*At,o[12]=c*P+l*z+h*st+m*Nt,o[1]=_*V+M*v+x*it+S*K,o[5]=_*H+M*w+x*ht+S*gt,o[9]=_*Y+M*Z+x*G+S*At,o[13]=_*P+M*z+x*st+S*Nt,o[2]=b*V+R*v+y*it+p*K,o[6]=b*H+R*w+y*ht+p*gt,o[10]=b*Y+R*Z+y*G+p*At,o[14]=b*P+R*z+y*st+p*Nt,o[3]=O*V+D*v+C*it+rt*K,o[7]=O*H+D*w+C*ht+rt*gt,o[11]=O*Y+D*Z+C*G+rt*At,o[15]=O*P+D*z+C*st+rt*Nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],c=t[1],l=t[5],h=t[9],m=t[13],_=t[2],M=t[6],x=t[10],S=t[14],b=t[3],R=t[7],y=t[11],p=t[15];return b*(+o*h*M-r*m*M-o*l*x+n*m*x+r*l*S-n*h*S)+R*(+e*h*S-e*m*x+o*c*x-r*c*S+r*m*_-o*h*_)+y*(+e*m*M-e*l*S-o*c*M+n*c*S+o*l*_-n*m*_)+p*(-r*l*_-e*h*M+e*l*x+r*c*M-n*c*x+n*h*_)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],c=t[4],l=t[5],h=t[6],m=t[7],_=t[8],M=t[9],x=t[10],S=t[11],b=t[12],R=t[13],y=t[14],p=t[15],O=M*y*m-R*x*m+R*h*S-l*y*S-M*h*p+l*x*p,D=b*x*m-_*y*m-b*h*S+c*y*S+_*h*p-c*x*p,C=_*R*m-b*M*m+b*l*S-c*R*S-_*l*p+c*M*p,rt=b*M*h-_*R*h-b*l*x+c*R*x+_*l*y-c*M*y,V=e*O+n*D+r*C+o*rt;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/V;return t[0]=O*H,t[1]=(R*x*o-M*y*o-R*r*S+n*y*S+M*r*p-n*x*p)*H,t[2]=(l*y*o-R*h*o+R*r*m-n*y*m-l*r*p+n*h*p)*H,t[3]=(M*h*o-l*x*o-M*r*m+n*x*m+l*r*S-n*h*S)*H,t[4]=D*H,t[5]=(_*y*o-b*x*o+b*r*S-e*y*S-_*r*p+e*x*p)*H,t[6]=(b*h*o-c*y*o-b*r*m+e*y*m+c*r*p-e*h*p)*H,t[7]=(c*x*o-_*h*o+_*r*m-e*x*m-c*r*S+e*h*S)*H,t[8]=C*H,t[9]=(b*M*o-_*R*o-b*n*S+e*R*S+_*n*p-e*M*p)*H,t[10]=(c*R*o-b*l*o+b*n*m-e*R*m-c*n*p+e*l*p)*H,t[11]=(_*l*o-c*M*o-_*n*m+e*M*m+c*n*S-e*l*S)*H,t[12]=rt*H,t[13]=(_*R*r-b*M*r+b*n*x-e*R*x-_*n*y+e*M*y)*H,t[14]=(b*l*r-c*R*r-b*n*h+e*R*h+c*n*y-e*l*y)*H,t[15]=(c*M*r-_*l*r+_*n*h-e*M*h-c*n*x+e*l*x)*H,this}scale(t){const e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,c=t.x,l=t.y,h=t.z,m=o*c,_=o*l;return this.set(m*c+n,m*l-r*h,m*h+r*l,0,m*l+r*h,_*l+n,_*h-r*c,0,m*h-r*l,_*h+r*c,o*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,c){return this.set(1,n,o,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,o=e._x,c=e._y,l=e._z,h=e._w,m=o+o,_=c+c,M=l+l,x=o*m,S=o*_,b=o*M,R=c*_,y=c*M,p=l*M,O=h*m,D=h*_,C=h*M,rt=n.x,V=n.y,H=n.z;return r[0]=(1-(R+p))*rt,r[1]=(S+C)*rt,r[2]=(b-D)*rt,r[3]=0,r[4]=(S-C)*V,r[5]=(1-(x+p))*V,r[6]=(y+O)*V,r[7]=0,r[8]=(b+D)*H,r[9]=(y-O)*H,r[10]=(1-(x+R))*H,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let o=er.set(r[0],r[1],r[2]).length();const c=er.set(r[4],r[5],r[6]).length(),l=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],Wn.copy(this);const m=1/o,_=1/c,M=1/l;return Wn.elements[0]*=m,Wn.elements[1]*=m,Wn.elements[2]*=m,Wn.elements[4]*=_,Wn.elements[5]*=_,Wn.elements[6]*=_,Wn.elements[8]*=M,Wn.elements[9]*=M,Wn.elements[10]*=M,e.setFromRotationMatrix(Wn),n.x=o,n.y=c,n.z=l,this}makePerspective(t,e,n,r,o,c,l=di){const h=this.elements,m=2*o/(e-t),_=2*o/(n-r),M=(e+t)/(e-t),x=(n+r)/(n-r);let S,b;if(l===di)S=-(c+o)/(c-o),b=-2*c*o/(c-o);else if(l===Ms)S=-c/(c-o),b=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=m,h[4]=0,h[8]=M,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,o,c,l=di){const h=this.elements,m=1/(e-t),_=1/(n-r),M=1/(c-o),x=(e+t)*m,S=(n+r)*_;let b,R;if(l===di)b=(c+o)*M,R=-2*M;else if(l===Ms)b=o*M,R=-1*M;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=R,h[14]=-b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const er=new tt,Wn=new $e,gu=new tt(0,0,0),_u=new tt(1,1,1),Ei=new tt,Jr=new tt,Dn=new tt,La=new $e,Ua=new Br;class ni{constructor(t=0,e=0,n=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,o=r[0],c=r[4],l=r[8],h=r[1],m=r[5],_=r[9],M=r[2],x=r[6],S=r[10];switch(e){case"XYZ":this._y=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(l,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-M,o),this._z=0);break;case"ZXY":this._x=Math.asin(wn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-M,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-wn(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-M,o)):(this._x=0,this._y=Math.atan2(l,S));break;case"XZY":this._z=Math.asin(-wn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return La.makeRotationFromQuaternion(t),this.setFromRotationMatrix(La,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vu=0;const Da=new tt,nr=new Br,ai=new $e,Qr=new tt,Pr=new tt,xu=new tt,Mu=new Br,Ia=new tt(1,0,0),Na=new tt(0,1,0),Fa=new tt(0,0,1),Oa={type:"added"},yu={type:"removed"},ir={type:"childadded",child:null},zs={type:"childremoved",child:null};class Pn extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const t=new tt,e=new ni,n=new Br,r=new tt(1,1,1);function o(){n.setFromEuler(e,!1)}function c(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new ge}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(Ia,t)}rotateY(t){return this.rotateOnAxis(Na,t)}rotateZ(t){return this.rotateOnAxis(Fa,t)}translateOnAxis(t,e){return Da.copy(t).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ia,t)}translateY(t){return this.translateOnAxis(Na,t)}translateZ(t){return this.translateOnAxis(Fa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Pr,Qr,this.up):ai.lookAt(Qr,Pr,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(ai),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oa),ir.child=t,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu),zs.child=t,this.dispatchEvent(zs),zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oa),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const M=h[m];o(t.shapes,M)}else o(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,m=this.material.length;h<m;h++)l.push(o(t.materials,this.material[h]));r.material=l}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(o(t.animations,h))}}if(e){const l=c(t.geometries),h=c(t.materials),m=c(t.textures),_=c(t.images),M=c(t.shapes),x=c(t.skeletons),S=c(t.animations),b=c(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),m.length>0&&(n.textures=m),_.length>0&&(n.images=_),M.length>0&&(n.shapes=M),x.length>0&&(n.skeletons=x),S.length>0&&(n.animations=S),b.length>0&&(n.nodes=b)}return n.object=r,n;function c(l){const h=[];for(const m in l){const _=l[m];delete _.metadata,h.push(_)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new tt(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new tt,li=new tt,Gs=new tt,ci=new tt,rr=new tt,sr=new tt,Ba=new tt,Hs=new tt,ks=new tt,Vs=new tt,Ws=new je,Xs=new je,js=new je;class jn{constructor(t=new tt,e=new tt,n=new tt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Xn.subVectors(t,e),r.cross(Xn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Xn.subVectors(r,e),li.subVectors(n,e),Gs.subVectors(t,e);const c=Xn.dot(Xn),l=Xn.dot(li),h=Xn.dot(Gs),m=li.dot(li),_=li.dot(Gs),M=c*m-l*l;if(M===0)return o.set(0,0,0),null;const x=1/M,S=(m*h-l*_)*x,b=(c*_-l*h)*x;return o.set(1-S-b,b,S)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,r,o,c,l,h){return this.getBarycoord(t,e,n,r,ci)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,ci.x),h.addScaledVector(c,ci.y),h.addScaledVector(l,ci.z),h)}static getInterpolatedAttribute(t,e,n,r,o,c){return Ws.setScalar(0),Xs.setScalar(0),js.setScalar(0),Ws.fromBufferAttribute(t,e),Xs.fromBufferAttribute(t,n),js.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(Ws,o.x),c.addScaledVector(Xs,o.y),c.addScaledVector(js,o.z),c}static isFrontFacing(t,e,n,r){return Xn.subVectors(n,e),li.subVectors(t,e),Xn.cross(li).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Xn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return jn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return jn.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,o=this.c;let c,l;rr.subVectors(r,n),sr.subVectors(o,n),Hs.subVectors(t,n);const h=rr.dot(Hs),m=sr.dot(Hs);if(h<=0&&m<=0)return e.copy(n);ks.subVectors(t,r);const _=rr.dot(ks),M=sr.dot(ks);if(_>=0&&M<=_)return e.copy(r);const x=h*M-_*m;if(x<=0&&h>=0&&_<=0)return c=h/(h-_),e.copy(n).addScaledVector(rr,c);Vs.subVectors(t,o);const S=rr.dot(Vs),b=sr.dot(Vs);if(b>=0&&S<=b)return e.copy(o);const R=S*m-h*b;if(R<=0&&m>=0&&b<=0)return l=m/(m-b),e.copy(n).addScaledVector(sr,l);const y=_*b-S*M;if(y<=0&&M-_>=0&&S-b>=0)return Ba.subVectors(o,r),l=(M-_)/(M-_+(S-b)),e.copy(r).addScaledVector(Ba,l);const p=1/(y+R+x);return c=R*p,l=x*p,e.copy(n).addScaledVector(rr,c).addScaledVector(sr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ts={h:0,s:0,l:0};function Ys(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ke{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Oe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Oe.workingColorSpace){if(t=ru(t,1),e=wn(e,0,1),n=wn(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,c=2*n-o;this.r=Ys(c,o,t+1/3),this.g=Ys(c,o,t),this.b=Ys(c,o,t-1/3)}return Oe.toWorkingColorSpace(this,r),this}setStyle(t,e=Gn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Gn){const n=Ol[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return Oe.fromWorkingColorSpace(vn.copy(this),t),Math.round(wn(vn.r*255,0,255))*65536+Math.round(wn(vn.g*255,0,255))*256+Math.round(wn(vn.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oe.workingColorSpace){Oe.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,o=vn.b,c=Math.max(n,r,o),l=Math.min(n,r,o);let h,m;const _=(l+c)/2;if(l===c)h=0,m=0;else{const M=c-l;switch(m=_<=.5?M/(c+l):M/(2-c-l),c){case n:h=(r-o)/M+(r<o?6:0);break;case r:h=(o-n)/M+2;break;case o:h=(n-r)/M+4;break}h/=6}return t.h=h,t.s=m,t.l=_,t}getRGB(t,e=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=Gn){Oe.fromWorkingColorSpace(vn.copy(this),t);const e=vn.r,n=vn.g,r=vn.b;return t!==Gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(ts);const n=Ps(Ti.h,ts.h,e),r=Ps(Ti.s,ts.s,e),o=Ps(Ti.l,ts.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ke;ke.NAMES=Ol;let Su=0;class Gr extends yr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Or(),this.name="",this.blending=hr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=lo,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}if(e){const o=r(t.textures),c=r(t.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bl extends Gr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new tt,es=new Ve;class ti{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),r=bn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),r=bn(r,this.array),o=bn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sa&&(t.usage=this.usage),t}}class zl extends ti{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gl extends ti{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ei extends ti{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eu=0;const zn=new $e,qs=new Pn,or=new tt,In=new zr,Lr=new zr,fn=new tt;class Li extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dl(t)?Gl:zl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ge().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return qs.lookAt(t),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,o=t.length;r<o;r++){const c=t[r];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ei(n,3))}else{for(let n=0,r=e.count;n<r;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];In.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){const l=e[o];Lr.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(In.min,Lr.min),In.expandByPoint(fn),fn.addVectors(In.max,Lr.max),In.expandByPoint(fn)):(In.expandByPoint(Lr.min),In.expandByPoint(Lr.max))}In.getCenter(n);let r=0;for(let o=0,c=t.count;o<c;o++)fn.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(fn));if(e)for(let o=0,c=e.length;o<c;o++){const l=e[o],h=this.morphTargetsRelative;for(let m=0,_=l.count;m<_;m++)fn.fromBufferAttribute(l,m),h&&(or.fromBufferAttribute(t,m),fn.add(or)),r=Math.max(r,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],h=[];for(let Y=0;Y<n.count;Y++)l[Y]=new tt,h[Y]=new tt;const m=new tt,_=new tt,M=new tt,x=new Ve,S=new Ve,b=new Ve,R=new tt,y=new tt;function p(Y,P,v){m.fromBufferAttribute(n,Y),_.fromBufferAttribute(n,P),M.fromBufferAttribute(n,v),x.fromBufferAttribute(o,Y),S.fromBufferAttribute(o,P),b.fromBufferAttribute(o,v),_.sub(m),M.sub(m),S.sub(x),b.sub(x);const w=1/(S.x*b.y-b.x*S.y);isFinite(w)&&(R.copy(_).multiplyScalar(b.y).addScaledVector(M,-S.y).multiplyScalar(w),y.copy(M).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(w),l[Y].add(R),l[P].add(R),l[v].add(R),h[Y].add(y),h[P].add(y),h[v].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let Y=0,P=O.length;Y<P;++Y){const v=O[Y],w=v.start,Z=v.count;for(let z=w,it=w+Z;z<it;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const D=new tt,C=new tt,rt=new tt,V=new tt;function H(Y){rt.fromBufferAttribute(r,Y),V.copy(rt);const P=l[Y];D.copy(P),D.sub(rt.multiplyScalar(rt.dot(P))).normalize(),C.crossVectors(V,P);const w=C.dot(h[Y])<0?-1:1;c.setXYZW(Y,D.x,D.y,D.z,w)}for(let Y=0,P=O.length;Y<P;++Y){const v=O[Y],w=v.start,Z=v.count;for(let z=w,it=w+Z;z<it;z+=3)H(t.getX(z+0)),H(t.getX(z+1)),H(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ti(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let x=0,S=n.count;x<S;x++)n.setXYZ(x,0,0,0);const r=new tt,o=new tt,c=new tt,l=new tt,h=new tt,m=new tt,_=new tt,M=new tt;if(t)for(let x=0,S=t.count;x<S;x+=3){const b=t.getX(x+0),R=t.getX(x+1),y=t.getX(x+2);r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,R),c.fromBufferAttribute(e,y),_.subVectors(c,o),M.subVectors(r,o),_.cross(M),l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,R),m.fromBufferAttribute(n,y),l.add(_),h.add(_),m.add(_),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(R,h.x,h.y,h.z),n.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=e.count;x<S;x+=3)r.fromBufferAttribute(e,x+0),o.fromBufferAttribute(e,x+1),c.fromBufferAttribute(e,x+2),_.subVectors(c,o),M.subVectors(r,o),_.cross(M),n.setXYZ(x+0,_.x,_.y,_.z),n.setXYZ(x+1,_.x,_.y,_.z),n.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(l,h){const m=l.array,_=l.itemSize,M=l.normalized,x=new m.constructor(h.length*_);let S=0,b=0;for(let R=0,y=h.length;R<y;R++){l.isInterleavedBufferAttribute?S=h[R]*l.data.stride+l.offset:S=h[R]*_;for(let p=0;p<_;p++)x[b++]=m[S++]}return new ti(x,_,M)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Li,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],m=t(h,n);e.setAttribute(l,m)}const o=this.morphAttributes;for(const l in o){const h=[],m=o[l];for(let _=0,M=m.length;_<M;_++){const x=m[_],S=t(x,n);h.push(S)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,h=c.length;l<h;l++){const m=c[l];e.addGroup(m.start,m.count,m.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(t[m]=h[m]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const m=n[h];t.data.attributes[h]=m.toJSON(t.data)}const r={};let o=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let M=0,x=m.length;M<x;M++){const S=m[M];_.push(S.toJSON(t.data))}_.length>0&&(r[h]=_,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const m in r){const _=r[m];this.setAttribute(m,_.clone(e))}const o=t.morphAttributes;for(const m in o){const _=[],M=o[m];for(let x=0,S=M.length;x<S;x++)_.push(M[x].clone(e));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let m=0,_=c.length;m<_;m++){const M=c[m];this.addGroup(M.start,M.count,M.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new $e,Fi=new mu,ns=new na,Ga=new tt,is=new tt,rs=new tt,ss=new tt,Ks=new tt,os=new tt,Ha=new tt,as=new tt;class Hn extends Pn{constructor(t=new Li,e=new Bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(o&&l){os.set(0,0,0);for(let h=0,m=o.length;h<m;h++){const _=l[h],M=o[h];_!==0&&(Ks.fromBufferAttribute(M,t),c?os.addScaledVector(Ks,_):os.addScaledVector(Ks.sub(e),_))}e.add(os)}return e}raycast(t,e){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(o),Fi.copy(t.ray).recast(t.near),!(ns.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(ns,Ga)===null||Fi.origin.distanceToSquared(Ga)>(t.far-t.near)**2))&&(za.copy(o).invert(),Fi.copy(t.ray).applyMatrix4(za),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let r;const o=this.geometry,c=this.material,l=o.index,h=o.attributes.position,m=o.attributes.uv,_=o.attributes.uv1,M=o.attributes.normal,x=o.groups,S=o.drawRange;if(l!==null)if(Array.isArray(c))for(let b=0,R=x.length;b<R;b++){const y=x[b],p=c[y.materialIndex],O=Math.max(y.start,S.start),D=Math.min(l.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,rt=D;C<rt;C+=3){const V=l.getX(C),H=l.getX(C+1),Y=l.getX(C+2);r=ls(this,p,t,n,m,_,M,V,H,Y),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const b=Math.max(0,S.start),R=Math.min(l.count,S.start+S.count);for(let y=b,p=R;y<p;y+=3){const O=l.getX(y),D=l.getX(y+1),C=l.getX(y+2);r=ls(this,c,t,n,m,_,M,O,D,C),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let b=0,R=x.length;b<R;b++){const y=x[b],p=c[y.materialIndex],O=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,rt=D;C<rt;C+=3){const V=C,H=C+1,Y=C+2;r=ls(this,p,t,n,m,_,M,V,H,Y),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const b=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let y=b,p=R;y<p;y+=3){const O=y,D=y+1,C=y+2;r=ls(this,c,t,n,m,_,M,O,D,C),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}}}function Tu(i,t,e,n,r,o,c,l){let h;if(t.side===Rn?h=n.intersectTriangle(c,o,r,!0,l):h=n.intersectTriangle(r,o,c,t.side===Ci,l),h===null)return null;as.copy(l),as.applyMatrix4(i.matrixWorld);const m=e.ray.origin.distanceTo(as);return m<e.near||m>e.far?null:{distance:m,point:as.clone(),object:i}}function ls(i,t,e,n,r,o,c,l,h,m){i.getVertexPosition(l,is),i.getVertexPosition(h,rs),i.getVertexPosition(m,ss);const _=Tu(i,t,e,n,is,rs,ss,Ha);if(_){const M=new tt;jn.getBarycoord(Ha,is,rs,ss,M),r&&(_.uv=jn.getInterpolatedAttribute(r,l,h,m,M,new Ve)),o&&(_.uv1=jn.getInterpolatedAttribute(o,l,h,m,M,new Ve)),c&&(_.normal=jn.getInterpolatedAttribute(c,l,h,m,M,new tt),_.normal.dot(n.direction)>0&&_.normal.multiplyScalar(-1));const x={a:l,b:h,c:m,normal:new tt,materialIndex:0};jn.getNormal(is,rs,ss,x.normal),_.face=x,_.barycoord=M}return _}class qi extends Li{constructor(t=1,e=1,n=1,r=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:c};const l=this;r=Math.floor(r),o=Math.floor(o),c=Math.floor(c);const h=[],m=[],_=[],M=[];let x=0,S=0;b("z","y","x",-1,-1,n,e,t,c,o,0),b("z","y","x",1,-1,n,e,-t,c,o,1),b("x","z","y",1,1,t,n,e,r,c,2),b("x","z","y",1,-1,t,n,-e,r,c,3),b("x","y","z",1,-1,t,e,n,r,o,4),b("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new ei(m,3)),this.setAttribute("normal",new ei(_,3)),this.setAttribute("uv",new ei(M,2));function b(R,y,p,O,D,C,rt,V,H,Y,P){const v=C/H,w=rt/Y,Z=C/2,z=rt/2,it=V/2,ht=H+1,G=Y+1;let st=0,K=0;const gt=new tt;for(let At=0;At<G;At++){const Nt=At*w-z;for(let te=0;te<ht;te++){const de=te*v-Z;gt[R]=de*O,gt[y]=Nt*D,gt[p]=it,m.push(gt.x,gt.y,gt.z),gt[R]=0,gt[y]=0,gt[p]=V>0?1:-1,_.push(gt.x,gt.y,gt.z),M.push(te/H),M.push(1-At/Y),st+=1}}for(let At=0;At<Y;At++)for(let Nt=0;Nt<H;Nt++){const te=x+Nt+ht*At,de=x+Nt+ht*(At+1),ct=x+(Nt+1)+ht*(At+1),vt=x+(Nt+1)+ht*At;h.push(te,de,vt),h.push(de,ct,vt),K+=6}l.addGroup(S,K,P),S+=K,x+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Sn(i){const t={};for(let e=0;e<i.length;e++){const n=xr(i[e]);for(const r in n)t[r]=n[r]}return t}function Au(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const bu={clone:xr,merge:Sn};var wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Gr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=Au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kl extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new tt,ka=new Ve,Va=new Ve;class Nn extends kl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,ka,Va),e.subVectors(Va,ka)}setViewOffset(t,e,n,r,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;o+=c.offsetX*r/h,e-=c.offsetY*n/m,r*=c.width/h,n*=c.height/m}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ar=-90,lr=1;class Cu extends Pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(ar,lr,t,e);r.layers=this.layers,this.add(r);const o=new Nn(ar,lr,t,e);o.layers=this.layers,this.add(o);const c=new Nn(ar,lr,t,e);c.layers=this.layers,this.add(c);const l=new Nn(ar,lr,t,e);l.layers=this.layers,this.add(l);const h=new Nn(ar,lr,t,e);h.layers=this.layers,this.add(h);const m=new Nn(ar,lr,t,e);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,o,c,l,h]=e;for(const m of e)this.remove(m);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of e)this.add(m),m.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,c,l,h,m,_]=this.children,M=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,o),t.setRenderTarget(n,1,r),t.render(e,c),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,m),n.texture.generateMipmaps=R,t.setRenderTarget(n,5,r),t.render(e,_),t.setRenderTarget(M,x,S),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Vl extends Cn{constructor(t,e,n,r,o,c,l,h,m,_){t=t!==void 0?t:[],e=e!==void 0?e:mr,super(t,e,n,r,o,c,l,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pu extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Vl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qi(5,5,5),o=new Pi({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:wi});o.uniforms.tEquirect.value=e;const c=new Hn(r,o),l=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Qn),new Cu(1,10,this).update(t,c),e.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,n,r){const o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,n,r);t.setRenderTarget(o)}}const Zs=new tt,Lu=new tt,Uu=new ge;class Gi{constructor(t=new tt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Zs.subVectors(n,e).cross(Lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Uu.getNormalMatrix(t),r=this.coplanarPoint(Zs).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new na,cs=new tt;class ia{constructor(t=new Gi,e=new Gi,n=new Gi,r=new Gi,o=new Gi,c=new Gi){this.planes=[t,e,n,r,o,c]}set(t,e,n,r,o,c){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(c),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di){const n=this.planes,r=t.elements,o=r[0],c=r[1],l=r[2],h=r[3],m=r[4],_=r[5],M=r[6],x=r[7],S=r[8],b=r[9],R=r[10],y=r[11],p=r[12],O=r[13],D=r[14],C=r[15];if(n[0].setComponents(h-o,x-m,y-S,C-p).normalize(),n[1].setComponents(h+o,x+m,y+S,C+p).normalize(),n[2].setComponents(h+c,x+_,y+b,C+O).normalize(),n[3].setComponents(h-c,x-_,y-b,C-O).normalize(),n[4].setComponents(h-l,x-M,y-R,C-D).normalize(),e===di)n[5].setComponents(h+l,x+M,y+R,C+D).normalize();else if(e===Ms)n[5].setComponents(l,M,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(cs.x=r.normal.x>0?t.max.x:t.min.x,cs.y=r.normal.y>0?t.max.y:t.min.y,cs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wl(){let i=null,t=!1,e=null,n=null;function r(o,c){e(o,c),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Du(i){const t=new WeakMap;function e(l,h){const m=l.array,_=l.usage,M=m.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,m,_),l.onUploadCallback();let S;if(m instanceof Float32Array)S=i.FLOAT;else if(m instanceof Uint16Array)l.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=i.SHORT;else if(m instanceof Uint32Array)S=i.UNSIGNED_INT;else if(m instanceof Int32Array)S=i.INT;else if(m instanceof Int8Array)S=i.BYTE;else if(m instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:l.version,size:M}}function n(l,h,m){const _=h.array,M=h.updateRanges;if(i.bindBuffer(m,l),M.length===0)i.bufferSubData(m,0,_);else{M.sort((S,b)=>S.start-b.start);let x=0;for(let S=1;S<M.length;S++){const b=M[x],R=M[S];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,M[x]=R)}M.length=x+1;for(let S=0,b=M.length;S<b;S++){const R=M[S];i.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);h&&(i.deleteBuffer(h.buffer),t.delete(l))}function c(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const _=t.get(l);(!_||_.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const m=t.get(l);if(m===void 0)t.set(l,e(l,h));else if(m.version<l.version){if(m.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(m.buffer,l,h),m.version=l.version}}return{get:r,remove:o,update:c}}class Ts extends Li{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const o=t/2,c=e/2,l=Math.floor(n),h=Math.floor(r),m=l+1,_=h+1,M=t/l,x=e/h,S=[],b=[],R=[],y=[];for(let p=0;p<_;p++){const O=p*x-c;for(let D=0;D<m;D++){const C=D*M-o;b.push(C,-O,0),R.push(0,0,1),y.push(D/l),y.push(1-p/h)}}for(let p=0;p<h;p++)for(let O=0;O<l;O++){const D=O+m*p,C=O+m*(p+1),rt=O+1+m*(p+1),V=O+1+m*p;S.push(D,C,V),S.push(C,rt,V)}this.setIndex(S),this.setAttribute("position",new ei(b,3)),this.setAttribute("normal",new ei(R,3)),this.setAttribute("uv",new ei(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nu=`#ifdef USE_ALPHAHASH
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
#endif`,Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
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
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
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
#endif`,Vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yu=`#ifdef USE_IRIDESCENCE
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
#endif`,qu=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ih=`#define PI 3.141592653589793
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
} // validated`,rh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sh=`vec3 transformedNormal = objectNormal;
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
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uh="gl_FragColor = linearToOutputTexel( gl_FragColor );",hh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yh=`#ifdef USE_GRADIENTMAP
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
}`,Sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ah=`uniform bool receiveShadow;
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
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lh=`PhysicalMaterial material;
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
#endif`,Uh=`struct PhysicalMaterial {
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
}`,Dh=`
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vh=`#if defined( USE_POINTS_UV )
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
#endif`,Wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kh=`#ifdef USE_MORPHTARGETS
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
#endif`,Zh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$h=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nf=`#ifdef USE_NORMALMAP
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
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xf=`float getShadowMask() {
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
}`,Mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nf=`uniform sampler2D t2D;
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`#include <common>
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
}`,Hf=`#if DEPTH_PACKING == 3200
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
}`,kf=`#define DISTANCE
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
}`,Vf=`#define DISTANCE
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
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
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
}`,Jf=`#define MATCAP
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
}`,Qf=`#define MATCAP
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
}`,td=`#define NORMAL
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
}`,ed=`#define NORMAL
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
}`,nd=`#define PHONG
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
}`,id=`#define PHONG
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
}`,rd=`#define STANDARD
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
}`,sd=`#define STANDARD
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
}`,od=`#define TOON
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
}`,ad=`#define TOON
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
}`,ld=`uniform float size;
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
}`,cd=`uniform vec3 diffuse;
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
}`,ud=`#include <common>
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
}`,hd=`uniform vec3 color;
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
}`,fd=`uniform float rotation;
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
}`,dd=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:Iu,alphahash_pars_fragment:Nu,alphamap_fragment:Fu,alphamap_pars_fragment:Ou,alphatest_fragment:Bu,alphatest_pars_fragment:zu,aomap_fragment:Gu,aomap_pars_fragment:Hu,batching_pars_vertex:ku,batching_vertex:Vu,begin_vertex:Wu,beginnormal_vertex:Xu,bsdfs:ju,iridescence_fragment:Yu,bumpmap_pars_fragment:qu,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Ju,color_fragment:Qu,color_pars_fragment:th,color_pars_vertex:eh,color_vertex:nh,common:ih,cube_uv_reflection_fragment:rh,defaultnormal_vertex:sh,displacementmap_pars_vertex:oh,displacementmap_vertex:ah,emissivemap_fragment:lh,emissivemap_pars_fragment:ch,colorspace_fragment:uh,colorspace_pars_fragment:hh,envmap_fragment:fh,envmap_common_pars_fragment:dh,envmap_pars_fragment:ph,envmap_pars_vertex:mh,envmap_physical_pars_fragment:bh,envmap_vertex:gh,fog_vertex:_h,fog_pars_vertex:vh,fog_fragment:xh,fog_pars_fragment:Mh,gradientmap_pars_fragment:yh,lightmap_pars_fragment:Sh,lights_lambert_fragment:Eh,lights_lambert_pars_fragment:Th,lights_pars_begin:Ah,lights_toon_fragment:wh,lights_toon_pars_fragment:Rh,lights_phong_fragment:Ch,lights_phong_pars_fragment:Ph,lights_physical_fragment:Lh,lights_physical_pars_fragment:Uh,lights_fragment_begin:Dh,lights_fragment_maps:Ih,lights_fragment_end:Nh,logdepthbuf_fragment:Fh,logdepthbuf_pars_fragment:Oh,logdepthbuf_pars_vertex:Bh,logdepthbuf_vertex:zh,map_fragment:Gh,map_pars_fragment:Hh,map_particle_fragment:kh,map_particle_pars_fragment:Vh,metalnessmap_fragment:Wh,metalnessmap_pars_fragment:Xh,morphinstance_vertex:jh,morphcolor_vertex:Yh,morphnormal_vertex:qh,morphtarget_pars_vertex:Kh,morphtarget_vertex:Zh,normal_fragment_begin:$h,normal_fragment_maps:Jh,normal_pars_fragment:Qh,normal_pars_vertex:tf,normal_vertex:ef,normalmap_pars_fragment:nf,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:of,iridescence_pars_fragment:af,opaque_fragment:lf,packing:cf,premultiplied_alpha_fragment:uf,project_vertex:hf,dithering_fragment:ff,dithering_pars_fragment:df,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:gf,shadowmap_pars_vertex:_f,shadowmap_vertex:vf,shadowmask_pars_fragment:xf,skinbase_vertex:Mf,skinning_pars_vertex:yf,skinning_vertex:Sf,skinnormal_vertex:Ef,specularmap_fragment:Tf,specularmap_pars_fragment:Af,tonemapping_fragment:bf,tonemapping_pars_fragment:wf,transmission_fragment:Rf,transmission_pars_fragment:Cf,uv_pars_fragment:Pf,uv_pars_vertex:Lf,uv_vertex:Uf,worldpos_vertex:Df,background_vert:If,background_frag:Nf,backgroundCube_vert:Ff,backgroundCube_frag:Of,cube_vert:Bf,cube_frag:zf,depth_vert:Gf,depth_frag:Hf,distanceRGBA_vert:kf,distanceRGBA_frag:Vf,equirect_vert:Wf,equirect_frag:Xf,linedashed_vert:jf,linedashed_frag:Yf,meshbasic_vert:qf,meshbasic_frag:Kf,meshlambert_vert:Zf,meshlambert_frag:$f,meshmatcap_vert:Jf,meshmatcap_frag:Qf,meshnormal_vert:td,meshnormal_frag:ed,meshphong_vert:nd,meshphong_frag:id,meshphysical_vert:rd,meshphysical_frag:sd,meshtoon_vert:od,meshtoon_frag:ad,points_vert:ld,points_frag:cd,shadow_vert:ud,shadow_frag:hd,sprite_vert:fd,sprite_frag:dd},Ct={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Jn={basic:{uniforms:Sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ke(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Sn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Sn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new ke(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Sn([Ct.points,Ct.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Sn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Sn([Ct.common,Ct.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Sn([Ct.sprite,Ct.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Sn([Ct.common,Ct.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Sn([Ct.lights,Ct.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Jn.physical={uniforms:Sn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const us={r:0,b:0,g:0},Bi=new ni,pd=new $e;function md(i,t,e,n,r,o,c){const l=new ke(0);let h=o===!0?0:1,m,_,M=null,x=0,S=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?e:t).get(D)),D}function R(O){let D=!1;const C=b(O);C===null?p(l,h):C&&C.isColor&&(p(C,1),D=!0);const rt=i.xr.getEnvironmentBlendMode();rt==="additive"?n.buffers.color.setClear(0,0,0,1,c):rt==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(O,D){const C=b(D);C&&(C.isCubeTexture||C.mapping===Ss)?(_===void 0&&(_=new Hn(new qi(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:xr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(rt,V,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),Bi.copy(D.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(pd.makeRotationFromEuler(Bi)),_.material.toneMapped=Oe.getTransfer(C.colorSpace)!==Xe,(M!==C||x!==C.version||S!==i.toneMapping)&&(_.material.needsUpdate=!0,M=C,x=C.version,S=i.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Hn(new Ts(2,2),new Pi({name:"BackgroundMaterial",uniforms:xr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Oe.getTransfer(C.colorSpace)!==Xe,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(M!==C||x!==C.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,M=C,x=C.version,S=i.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function p(O,D){O.getRGB(us,Hl(i)),n.buffers.color.setClear(us.r,us.g,us.b,D,c)}return{getClearColor:function(){return l},setClearColor:function(O,D=1){l.set(O),h=D,p(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,p(l,h)},render:R,addToRenderList:y}}function gd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=x(null);let o=r,c=!1;function l(v,w,Z,z,it){let ht=!1;const G=M(z,Z,w);o!==G&&(o=G,m(o.object)),ht=S(v,z,Z,it),ht&&b(v,z,Z,it),it!==null&&t.update(it,i.ELEMENT_ARRAY_BUFFER),(ht||c)&&(c=!1,C(v,w,Z,z),it!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function h(){return i.createVertexArray()}function m(v){return i.bindVertexArray(v)}function _(v){return i.deleteVertexArray(v)}function M(v,w,Z){const z=Z.wireframe===!0;let it=n[v.id];it===void 0&&(it={},n[v.id]=it);let ht=it[w.id];ht===void 0&&(ht={},it[w.id]=ht);let G=ht[z];return G===void 0&&(G=x(h()),ht[z]=G),G}function x(v){const w=[],Z=[],z=[];for(let it=0;it<e;it++)w[it]=0,Z[it]=0,z[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:Z,attributeDivisors:z,object:v,attributes:{},index:null}}function S(v,w,Z,z){const it=o.attributes,ht=w.attributes;let G=0;const st=Z.getAttributes();for(const K in st)if(st[K].location>=0){const At=it[K];let Nt=ht[K];if(Nt===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(Nt=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(Nt=v.instanceColor)),At===void 0||At.attribute!==Nt||Nt&&At.data!==Nt.data)return!0;G++}return o.attributesNum!==G||o.index!==z}function b(v,w,Z,z){const it={},ht=w.attributes;let G=0;const st=Z.getAttributes();for(const K in st)if(st[K].location>=0){let At=ht[K];At===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(At=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(At=v.instanceColor));const Nt={};Nt.attribute=At,At&&At.data&&(Nt.data=At.data),it[K]=Nt,G++}o.attributes=it,o.attributesNum=G,o.index=z}function R(){const v=o.newAttributes;for(let w=0,Z=v.length;w<Z;w++)v[w]=0}function y(v){p(v,0)}function p(v,w){const Z=o.newAttributes,z=o.enabledAttributes,it=o.attributeDivisors;Z[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),it[v]!==w&&(i.vertexAttribDivisor(v,w),it[v]=w)}function O(){const v=o.newAttributes,w=o.enabledAttributes;for(let Z=0,z=w.length;Z<z;Z++)w[Z]!==v[Z]&&(i.disableVertexAttribArray(Z),w[Z]=0)}function D(v,w,Z,z,it,ht,G){G===!0?i.vertexAttribIPointer(v,w,Z,it,ht):i.vertexAttribPointer(v,w,Z,z,it,ht)}function C(v,w,Z,z){R();const it=z.attributes,ht=Z.getAttributes(),G=w.defaultAttributeValues;for(const st in ht){const K=ht[st];if(K.location>=0){let gt=it[st];if(gt===void 0&&(st==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),st==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor)),gt!==void 0){const At=gt.normalized,Nt=gt.itemSize,te=t.get(gt);if(te===void 0)continue;const de=te.buffer,ct=te.type,vt=te.bytesPerElement,Ht=ct===i.INT||ct===i.UNSIGNED_INT||gt.gpuType===Zo;if(gt.isInterleavedBufferAttribute){const Rt=gt.data,Jt=Rt.stride,qt=gt.offset;if(Rt.isInstancedInterleavedBuffer){for(let ne=0;ne<K.locationSize;ne++)p(K.location+ne,Rt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let ne=0;ne<K.locationSize;ne++)y(K.location+ne);i.bindBuffer(i.ARRAY_BUFFER,de);for(let ne=0;ne<K.locationSize;ne++)D(K.location+ne,Nt/K.locationSize,ct,At,Jt*vt,(qt+Nt/K.locationSize*ne)*vt,Ht)}else{if(gt.isInstancedBufferAttribute){for(let Rt=0;Rt<K.locationSize;Rt++)p(K.location+Rt,gt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Rt=0;Rt<K.locationSize;Rt++)y(K.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Rt=0;Rt<K.locationSize;Rt++)D(K.location+Rt,Nt/K.locationSize,ct,At,Nt*vt,Nt/K.locationSize*Rt*vt,Ht)}}else if(G!==void 0){const At=G[st];if(At!==void 0)switch(At.length){case 2:i.vertexAttrib2fv(K.location,At);break;case 3:i.vertexAttrib3fv(K.location,At);break;case 4:i.vertexAttrib4fv(K.location,At);break;default:i.vertexAttrib1fv(K.location,At)}}}}O()}function rt(){Y();for(const v in n){const w=n[v];for(const Z in w){const z=w[Z];for(const it in z)_(z[it].object),delete z[it];delete w[Z]}delete n[v]}}function V(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const Z in w){const z=w[Z];for(const it in z)_(z[it].object),delete z[it];delete w[Z]}delete n[v.id]}function H(v){for(const w in n){const Z=n[w];if(Z[v.id]===void 0)continue;const z=Z[v.id];for(const it in z)_(z[it].object),delete z[it];delete Z[v.id]}}function Y(){P(),c=!0,o!==r&&(o=r,m(o.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:Y,resetDefaultState:P,dispose:rt,releaseStatesOfGeometry:V,releaseStatesOfProgram:H,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function _d(i,t,e){let n;function r(m){n=m}function o(m,_){i.drawArrays(n,m,_),e.update(_,n,1)}function c(m,_,M){M!==0&&(i.drawArraysInstanced(n,m,_,M),e.update(_,n,M))}function l(m,_,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,m,0,_,0,M);let S=0;for(let b=0;b<M;b++)S+=_[b];e.update(S,n,1)}function h(m,_,M,x){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<m.length;b++)c(m[b],_[b],x[b]);else{S.multiDrawArraysInstancedWEBGL(n,m,0,_,0,x,0,M);let b=0;for(let R=0;R<M;R++)b+=_[R]*x[R];e.update(b,n,1)}}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function vd(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(H){return!(H!==Yn&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(H){const Y=H===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==gi&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==fi&&!Y)}function h(H){if(H==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=e.precision!==void 0?e.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const M=e.logarithmicDepthBuffer===!0,x=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),rt=b>0,V=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:l,precision:m,logarithmicDepthBuffer:M,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:rt,maxSamples:V}}function xd(i){const t=this;let e=null,n=0,r=!1,o=!1;const c=new Gi,l=new ge,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(M,x){const S=M.length!==0||x||n!==0||r;return r=x,n=M.length,S},this.beginShadows=function(){o=!0,_(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(M,x){e=_(M,x,0)},this.setState=function(M,x,S){const b=M.clippingPlanes,R=M.clipIntersection,y=M.clipShadows,p=i.get(M);if(!r||b===null||b.length===0||o&&!y)o?_(null):m();else{const O=o?0:n,D=O*4;let C=p.clippingState||null;h.value=C,C=_(b,x,D,S);for(let rt=0;rt!==D;++rt)C[rt]=e[rt];p.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function m(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function _(M,x,S,b){const R=M!==null?M.length:0;let y=null;if(R!==0){if(y=h.value,b!==!0||y===null){const p=S+R*4,O=x.matrixWorldInverse;l.getNormalMatrix(O),(y===null||y.length<p)&&(y=new Float32Array(p));for(let D=0,C=S;D!==R;++D,C+=4)c.copy(M[D]).applyMatrix4(O,l),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function Md(i){let t=new WeakMap;function e(c,l){return l===_o?c.mapping=mr:l===vo&&(c.mapping=gr),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===_o||l===vo)if(t.has(c)){const h=t.get(c).texture;return e(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new Pu(h.height);return m.fromEquirectangularTexture(i,c),t.set(c,m),c.addEventListener("dispose",r),e(m.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class yd extends kl{constructor(t=-1,e=1,n=1,r=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-t,c=n+t,l=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=m*this.view.offsetX,c=o+m*this.view.width,l-=_*this.view.offsetY,h=l-_*this.view.height}this.projectionMatrix.makeOrthographic(o,c,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ur=4,Wa=[.125,.215,.35,.446,.526,.582],Vi=20,$s=new yd,Xa=new ke;let Js=null,Qs=0,to=0,eo=!1;const Hi=(1+Math.sqrt(5))/2,cr=1/Hi,ja=[new tt(-Hi,cr,0),new tt(Hi,cr,0),new tt(-cr,0,Hi),new tt(cr,0,Hi),new tt(0,Hi,-cr),new tt(0,Hi,cr),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class Ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Js,Qs,to),this._renderer.xr.enabled=eo,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Fr,format:Yn,colorSpace:Mr,depthBuffer:!1},r=qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sd(o)),this._blurMaterial=Ed(o,t,e)}return r}_compileMaterial(t){const e=new Hn(this._lodPlanes[0],t);this._renderer.compile(e,$s)}_sceneToCubeUV(t,e,n,r){const l=new Nn(90,1,e,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,M=_.autoClear,x=_.toneMapping;_.getClearColor(Xa),_.toneMapping=Ri,_.autoClear=!1;const S=new Bl({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),b=new Hn(new qi,S);let R=!1;const y=t.background;y?y.isColor&&(S.color.copy(y),t.background=null,R=!0):(S.color.copy(Xa),R=!0);for(let p=0;p<6;p++){const O=p%3;O===0?(l.up.set(0,h[p],0),l.lookAt(m[p],0,0)):O===1?(l.up.set(0,0,h[p]),l.lookAt(0,m[p],0)):(l.up.set(0,h[p],0),l.lookAt(0,0,m[p]));const D=this._cubeSize;hs(r,O*D,p>2?D:0,D,D),_.setRenderTarget(r),R&&_.render(b,l),_.render(t,l)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=x,_.autoClear=M,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===mr||t.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());const o=r?this._cubemapMaterial:this._equirectMaterial,c=new Hn(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const h=this._cubeSize;hs(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(c,$s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=ja[(r-o-1)%ja.length];this._blur(t,o-1,o,c,l)}e.autoClear=n}_blur(t,e,n,r,o){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,n,r,"latitudinal",o),this._halfBlur(c,t,n,n,r,"longitudinal",o)}_halfBlur(t,e,n,r,o,c,l){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,M=new Hn(this._lodPlanes[r],m),x=m.uniforms,S=this._sizeLods[n]-1,b=isFinite(o)?Math.PI/(2*S):2*Math.PI/(2*Vi-1),R=o/b,y=isFinite(o)?1+Math.floor(_*R):Vi;y>Vi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vi}`);const p=[];let O=0;for(let H=0;H<Vi;++H){const Y=H/R,P=Math.exp(-Y*Y/2);p.push(P),H===0?O+=P:H<y&&(O+=2*P)}for(let H=0;H<p.length;H++)p[H]=p[H]/O;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=p,x.latitudinal.value=c==="latitudinal",l&&(x.poleAxis.value=l);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-n;const C=this._sizeLods[r],rt=3*C*(r>D-ur?r-D+ur:0),V=4*(this._cubeSize-C);hs(e,rt,V,3*C,2*C),h.setRenderTarget(e),h.render(M,$s)}}function Sd(i){const t=[],e=[],n=[];let r=i;const o=i-ur+1+Wa.length;for(let c=0;c<o;c++){const l=Math.pow(2,r);e.push(l);let h=1/l;c>i-ur?h=Wa[c-i+ur-1]:c===0&&(h=0),n.push(h);const m=1/(l-2),_=-m,M=1+m,x=[_,_,M,_,M,M,_,_,M,M,_,M],S=6,b=6,R=3,y=2,p=1,O=new Float32Array(R*b*S),D=new Float32Array(y*b*S),C=new Float32Array(p*b*S);for(let V=0;V<S;V++){const H=V%3*2/3-1,Y=V>2?0:-1,P=[H,Y,0,H+2/3,Y,0,H+2/3,Y+1,0,H,Y,0,H+2/3,Y+1,0,H,Y+1,0];O.set(P,R*b*V),D.set(x,y*b*V);const v=[V,V,V,V,V,V];C.set(v,p*b*V)}const rt=new Li;rt.setAttribute("position",new ti(O,R)),rt.setAttribute("uv",new ti(D,y)),rt.setAttribute("faceIndex",new ti(C,p)),t.push(rt),r>ur&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qa(i,t,e){const n=new Yi(i,t,e);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ed(i,t,e){const n=new Float32Array(Vi),r=new tt(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ra(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ka(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Za(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ra(){return`

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
	`}function Td(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const h=l.mapping,m=h===_o||h===vo,_=h===mr||h===gr;if(m||_){let M=t.get(l);const x=M!==void 0?M.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==x)return e===null&&(e=new Ya(i)),M=m?e.fromEquirectangular(l,M):e.fromCubemap(l,M),M.texture.pmremVersion=l.pmremVersion,t.set(l,M),M.texture;if(M!==void 0)return M.texture;{const S=l.image;return m&&S&&S.height>0||_&&S&&r(S)?(e===null&&(e=new Ya(i)),M=m?e.fromEquirectangular(l):e.fromCubemap(l),M.texture.pmremVersion=l.pmremVersion,t.set(l,M),l.addEventListener("dispose",o),M.texture):null}}}return l}function r(l){let h=0;const m=6;for(let _=0;_<m;_++)l[_]!==void 0&&h++;return h===m}function o(l){const h=l.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:c}}function Ad(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bd(i,t,e,n){const r={},o=new WeakMap;function c(M){const x=M.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);for(const b in x.morphAttributes){const R=x.morphAttributes[b];for(let y=0,p=R.length;y<p;y++)t.remove(R[y])}x.removeEventListener("dispose",c),delete r[x.id];const S=o.get(x);S&&(t.remove(S),o.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function l(M,x){return r[x.id]===!0||(x.addEventListener("dispose",c),r[x.id]=!0,e.memory.geometries++),x}function h(M){const x=M.attributes;for(const b in x)t.update(x[b],i.ARRAY_BUFFER);const S=M.morphAttributes;for(const b in S){const R=S[b];for(let y=0,p=R.length;y<p;y++)t.update(R[y],i.ARRAY_BUFFER)}}function m(M){const x=[],S=M.index,b=M.attributes.position;let R=0;if(S!==null){const O=S.array;R=S.version;for(let D=0,C=O.length;D<C;D+=3){const rt=O[D+0],V=O[D+1],H=O[D+2];x.push(rt,V,V,H,H,rt)}}else if(b!==void 0){const O=b.array;R=b.version;for(let D=0,C=O.length/3-1;D<C;D+=3){const rt=D+0,V=D+1,H=D+2;x.push(rt,V,V,H,H,rt)}}else return;const y=new(Dl(x)?Gl:zl)(x,1);y.version=R;const p=o.get(M);p&&t.remove(p),o.set(M,y)}function _(M){const x=o.get(M);if(x){const S=M.index;S!==null&&x.version<S.version&&m(M)}else m(M);return o.get(M)}return{get:l,update:h,getWireframeAttribute:_}}function wd(i,t,e){let n;function r(x){n=x}let o,c;function l(x){o=x.type,c=x.bytesPerElement}function h(x,S){i.drawElements(n,S,o,x*c),e.update(S,n,1)}function m(x,S,b){b!==0&&(i.drawElementsInstanced(n,S,o,x*c,b),e.update(S,n,b))}function _(x,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,S,0,o,x,0,b);let y=0;for(let p=0;p<b;p++)y+=S[p];e.update(y,n,1)}function M(x,S,b,R){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let p=0;p<x.length;p++)m(x[p]/c,S[p],R[p]);else{y.multiDrawElementsInstancedWEBGL(n,S,0,o,x,0,R,0,b);let p=0;for(let O=0;O<b;O++)p+=S[O]*R[O];e.update(p,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=M}function Rd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,l){switch(e.calls++,c){case i.TRIANGLES:e.triangles+=l*(o/3);break;case i.LINES:e.lines+=l*(o/2);break;case i.LINE_STRIP:e.lines+=l*(o-1);break;case i.LINE_LOOP:e.lines+=l*o;break;case i.POINTS:e.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Cd(i,t,e){const n=new WeakMap,r=new je;function o(c,l,h){const m=c.morphTargetInfluences,_=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,M=_!==void 0?_.length:0;let x=n.get(l);if(x===void 0||x.count!==M){let P=function(){H.dispose(),n.delete(l),l.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const S=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,R=l.morphAttributes.color!==void 0,y=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],O=l.morphAttributes.color||[];let D=0;S===!0&&(D=1),b===!0&&(D=2),R===!0&&(D=3);let C=l.attributes.position.count*D,rt=1;C>t.maxTextureSize&&(rt=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const V=new Float32Array(C*rt*4*M),H=new Nl(V,C,rt,M);H.type=fi,H.needsUpdate=!0;const Y=D*4;for(let v=0;v<M;v++){const w=y[v],Z=p[v],z=O[v],it=C*rt*4*v;for(let ht=0;ht<w.count;ht++){const G=ht*Y;S===!0&&(r.fromBufferAttribute(w,ht),V[it+G+0]=r.x,V[it+G+1]=r.y,V[it+G+2]=r.z,V[it+G+3]=0),b===!0&&(r.fromBufferAttribute(Z,ht),V[it+G+4]=r.x,V[it+G+5]=r.y,V[it+G+6]=r.z,V[it+G+7]=0),R===!0&&(r.fromBufferAttribute(z,ht),V[it+G+8]=r.x,V[it+G+9]=r.y,V[it+G+10]=r.z,V[it+G+11]=z.itemSize===4?r.w:1)}}x={count:M,texture:H,size:new Ve(C,rt)},n.set(l,x),l.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let S=0;for(let R=0;R<m.length;R++)S+=m[R];const b=l.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",m)}h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:o}}function Pd(i,t,e,n){let r=new WeakMap;function o(h){const m=n.render.frame,_=h.geometry,M=t.get(h,_);if(r.get(M)!==m&&(t.update(M),r.set(M,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==m&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;r.get(x)!==m&&(x.update(),r.set(x,m))}return M}function c(){r=new WeakMap}function l(h){const m=h.target;m.removeEventListener("dispose",l),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:o,dispose:c}}class Xl extends Cn{constructor(t,e,n,r,o,c,l,h,m,_=fr){if(_!==fr&&_!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&_===fr&&(n=ji),n===void 0&&_===vr&&(n=_r),super(null,r,o,c,l,h,_,n,m),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:qn,this.minFilter=h!==void 0?h:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const jl=new Cn,$a=new Xl(1,1),Yl=new Nl,ql=new du,Kl=new Vl,Ja=[],Qa=[],tl=new Float32Array(16),el=new Float32Array(9),nl=new Float32Array(4);function Sr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let o=Ja[r];if(o===void 0&&(o=new Float32Array(r),Ja[r]=o),t!==0){n.toArray(o,0);for(let c=1,l=0;c!==t;++c)l+=e,i[c].toArray(o,l)}return o}function ln(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function As(i,t){let e=Qa[t];e===void 0&&(e=new Int32Array(t),Qa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ld(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2fv(this.addr,t),cn(e,t)}}function Dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;i.uniform3fv(this.addr,t),cn(e,t)}}function Id(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4fv(this.addr,t),cn(e,t)}}function Nd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;nl.set(n),i.uniformMatrix2fv(this.addr,!1,nl),cn(e,n)}}function Fd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;el.set(n),i.uniformMatrix3fv(this.addr,!1,el),cn(e,n)}}function Od(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;tl.set(n),i.uniformMatrix4fv(this.addr,!1,tl),cn(e,n)}}function Bd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2iv(this.addr,t),cn(e,t)}}function Gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3iv(this.addr,t),cn(e,t)}}function Hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4iv(this.addr,t),cn(e,t)}}function kd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2uiv(this.addr,t),cn(e,t)}}function Wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3uiv(this.addr,t),cn(e,t)}}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4uiv(this.addr,t),cn(e,t)}}function jd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?($a.compareFunction=Ul,o=$a):o=jl,e.setTexture2D(t||o,r)}function Yd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ql,r)}function qd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Kl,r)}function Kd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Yl,r)}function Zd(i){switch(i){case 5126:return Ld;case 35664:return Ud;case 35665:return Dd;case 35666:return Id;case 35674:return Nd;case 35675:return Fd;case 35676:return Od;case 5124:case 35670:return Bd;case 35667:case 35671:return zd;case 35668:case 35672:return Gd;case 35669:case 35673:return Hd;case 5125:return kd;case 36294:return Vd;case 36295:return Wd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return Yd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Kd}}function $d(i,t){i.uniform1fv(this.addr,t)}function Jd(i,t){const e=Sr(t,this.size,2);i.uniform2fv(this.addr,e)}function Qd(i,t){const e=Sr(t,this.size,3);i.uniform3fv(this.addr,e)}function tp(i,t){const e=Sr(t,this.size,4);i.uniform4fv(this.addr,e)}function ep(i,t){const e=Sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function np(i,t){const e=Sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ip(i,t){const e=Sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rp(i,t){i.uniform1iv(this.addr,t)}function sp(i,t){i.uniform2iv(this.addr,t)}function op(i,t){i.uniform3iv(this.addr,t)}function ap(i,t){i.uniform4iv(this.addr,t)}function lp(i,t){i.uniform1uiv(this.addr,t)}function cp(i,t){i.uniform2uiv(this.addr,t)}function up(i,t){i.uniform3uiv(this.addr,t)}function hp(i,t){i.uniform4uiv(this.addr,t)}function fp(i,t,e){const n=this.cache,r=t.length,o=As(e,r);ln(n,o)||(i.uniform1iv(this.addr,o),cn(n,o));for(let c=0;c!==r;++c)e.setTexture2D(t[c]||jl,o[c])}function dp(i,t,e){const n=this.cache,r=t.length,o=As(e,r);ln(n,o)||(i.uniform1iv(this.addr,o),cn(n,o));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||ql,o[c])}function pp(i,t,e){const n=this.cache,r=t.length,o=As(e,r);ln(n,o)||(i.uniform1iv(this.addr,o),cn(n,o));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||Kl,o[c])}function mp(i,t,e){const n=this.cache,r=t.length,o=As(e,r);ln(n,o)||(i.uniform1iv(this.addr,o),cn(n,o));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||Yl,o[c])}function gp(i){switch(i){case 5126:return $d;case 35664:return Jd;case 35665:return Qd;case 35666:return tp;case 35674:return ep;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return sp;case 35668:case 35672:return op;case 35669:case 35673:return ap;case 5125:return lp;case 36294:return cp;case 36295:return up;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}class _p{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zd(e.type)}}class vp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gp(e.type)}}class xp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let o=0,c=r.length;o!==c;++o){const l=r[o];l.setValue(t,e[l.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function il(i,t){i.seq.push(t),i.map[t.id]=t}function Mp(i,t,e){const n=i.name,r=n.length;for(no.lastIndex=0;;){const o=no.exec(n),c=no.lastIndex;let l=o[1];const h=o[2]==="]",m=o[3];if(h&&(l=l|0),m===void 0||m==="["&&c+2===r){il(e,m===void 0?new _p(l,i,t):new vp(l,i,t));break}else{let M=e.map[l];M===void 0&&(M=new xp(l),il(e,M)),e=M}}}class xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),c=t.getUniformLocation(e,o.name);Mp(o,c,this)}}setValue(t,e,n,r){const o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,c=e.length;o!==c;++o){const l=e[o],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,o=t.length;r!==o;++r){const c=t[r];c.id in e&&n.push(c)}return n}}function rl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const yp=37297;let Sp=0;function Ep(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=r;c<o;c++){const l=c+1;n.push(`${l===t?">":" "} ${l}: ${e[c]}`)}return n.join(`
`)}const sl=new ge;function Tp(i){Oe._getMatrix(sl,Oe.workingColorSpace,i);const t=`mat3( ${sl.elements.map(e=>e.toFixed(4))} )`;switch(Oe.getTransfer(i)){case Es:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ol(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ep(i.getShaderSource(t),c)}else return r}function Ap(i,t){const e=Tp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bp(i,t){let e;switch(t){case Gc:e="Linear";break;case Hc:e="Reinhard";break;case kc:e="Cineon";break;case Vc:e="ACESFilmic";break;case Xc:e="AgX";break;case jc:e="Neutral";break;case Wc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fs=new tt;function wp(){Oe.getLuminanceCoefficients(fs);const i=fs.x.toFixed(4),t=fs.y.toFixed(4),e=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Cp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(t,r),c=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),e[c]={type:o.type,location:i.getAttribLocation(t,c),locationSize:l}}return e}function Ir(i){return i!==""}function al(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ll(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(i){return i.replace(Lp,Dp)}const Up=new Map;function Dp(i,t){let e=xe[t];if(e===void 0){const n=Up.get(t);if(n!==void 0)e=xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qo(e)}const Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(i){return i.replace(Ip,Np)}function Np(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ul(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Fp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function Op(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mr:case gr:t="ENVMAP_TYPE_CUBE";break;case Ss:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gr:t="ENVMAP_MODE_REFRACTION";break}return t}function zp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:t="ENVMAP_BLENDING_MULTIPLY";break;case Bc:t="ENVMAP_BLENDING_MIX";break;case zc:t="ENVMAP_BLENDING_ADD";break}return t}function Gp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Hp(i,t,e,n){const r=i.getContext(),o=e.defines;let c=e.vertexShader,l=e.fragmentShader;const h=Fp(e),m=Op(e),_=Bp(e),M=zp(e),x=Gp(e),S=Rp(e),b=Cp(o),R=r.createProgram();let y,p,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Ir).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(y=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.envMap?"#define "+_:"",e.envMap?"#define "+M:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?xe.tonemapping_pars_fragment:"",e.toneMapping!==Ri?bp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,Ap("linearToOutputTexel",e.outputColorSpace),wp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),c=qo(c),c=al(c,e),c=ll(c,e),l=qo(l),l=al(l,e),l=ll(l,e),c=cl(c),l=cl(l),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const D=O+y+c,C=O+p+l,rt=rl(r,r.VERTEX_SHADER,D),V=rl(r,r.FRAGMENT_SHADER,C);r.attachShader(R,rt),r.attachShader(R,V),e.index0AttributeName!==void 0?r.bindAttribLocation(R,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(R,0,"position"),r.linkProgram(R);function H(w){if(i.debug.checkShaderErrors){const Z=r.getProgramInfoLog(R).trim(),z=r.getShaderInfoLog(rt).trim(),it=r.getShaderInfoLog(V).trim();let ht=!0,G=!0;if(r.getProgramParameter(R,r.LINK_STATUS)===!1)if(ht=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,R,rt,V);else{const st=ol(r,rt,"vertex"),K=ol(r,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(R,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+Z+`
`+st+`
`+K)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(z===""||it==="")&&(G=!1);G&&(w.diagnostics={runnable:ht,programLog:Z,vertexShader:{log:z,prefix:y},fragmentShader:{log:it,prefix:p}})}r.deleteShader(rt),r.deleteShader(V),Y=new xs(r,R),P=Pp(r,R)}let Y;this.getUniforms=function(){return Y===void 0&&H(this),Y};let P;this.getAttributes=function(){return P===void 0&&H(this),P};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(R,yp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(R),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sp++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=rt,this.fragmentShader=V,this}let kp=0;class Vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wp(t),e.set(t,n)),n}}class Wp{constructor(t){this.id=kp++,this.code=t,this.usedTimes=0}}function Xp(i,t,e,n,r,o,c){const l=new Fl,h=new Vp,m=new Set,_=[],M=r.logarithmicDepthBuffer,x=r.vertexTextures;let S=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,v,w,Z,z){const it=Z.fog,ht=z.geometry,G=P.isMeshStandardMaterial?Z.environment:null,st=(P.isMeshStandardMaterial?e:t).get(P.envMap||G),K=st&&st.mapping===Ss?st.image.height:null,gt=b[P.type];P.precision!==null&&(S=r.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const At=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Nt=At!==void 0?At.length:0;let te=0;ht.morphAttributes.position!==void 0&&(te=1),ht.morphAttributes.normal!==void 0&&(te=2),ht.morphAttributes.color!==void 0&&(te=3);let de,ct,vt,Ht;if(gt){const Ae=Jn[gt];de=Ae.vertexShader,ct=Ae.fragmentShader}else de=P.vertexShader,ct=P.fragmentShader,h.update(P),vt=h.getVertexShaderID(P),Ht=h.getFragmentShaderID(P);const Rt=i.getRenderTarget(),Jt=i.state.buffers.depth.getReversed(),qt=z.isInstancedMesh===!0,ne=z.isBatchedMesh===!0,Pe=!!P.map,Ee=!!P.matcap,le=!!st,W=!!P.aoMap,en=!!P.lightMap,ue=!!P.bumpMap,he=!!P.normalMap,kt=!!P.displacementMap,Ue=!!P.emissiveMap,Wt=!!P.metalnessMap,L=!!P.roughnessMap,T=P.anisotropy>0,J=P.clearcoat>0,ft=P.dispersion>0,mt=P.iridescence>0,at=P.sheen>0,Ot=P.transmission>0,St=T&&!!P.anisotropyMap,Lt=J&&!!P.clearcoatMap,Te=J&&!!P.clearcoatNormalMap,Mt=J&&!!P.clearcoatRoughnessMap,It=mt&&!!P.iridescenceMap,Yt=mt&&!!P.iridescenceThicknessMap,Kt=at&&!!P.sheenColorMap,Ut=at&&!!P.sheenRoughnessMap,Zt=!!P.specularMap,ie=!!P.specularColorMap,Fe=!!P.specularIntensityMap,B=Ot&&!!P.transmissionMap,Tt=Ot&&!!P.thicknessMap,ot=!!P.gradientMap,dt=!!P.alphaMap,Et=P.alphaTest>0,pt=!!P.alphaHash,ee=!!P.extensions;let Ge=Ri;P.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const Je={shaderID:gt,shaderType:P.type,shaderName:P.name,vertexShader:de,fragmentShader:ct,defines:P.defines,customVertexShaderID:vt,customFragmentShaderID:Ht,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:ne,batchingColor:ne&&z._colorsTexture!==null,instancing:qt,instancingColor:qt&&z.instanceColor!==null,instancingMorph:qt&&z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Mr,alphaToCoverage:!!P.alphaToCoverage,map:Pe,matcap:Ee,envMap:le,envMapMode:le&&st.mapping,envMapCubeUVHeight:K,aoMap:W,lightMap:en,bumpMap:ue,normalMap:he,displacementMap:x&&kt,emissiveMap:Ue,normalMapObjectSpace:he&&P.normalMapType===Zc,normalMapTangentSpace:he&&P.normalMapType===Ll,metalnessMap:Wt,roughnessMap:L,anisotropy:T,anisotropyMap:St,clearcoat:J,clearcoatMap:Lt,clearcoatNormalMap:Te,clearcoatRoughnessMap:Mt,dispersion:ft,iridescence:mt,iridescenceMap:It,iridescenceThicknessMap:Yt,sheen:at,sheenColorMap:Kt,sheenRoughnessMap:Ut,specularMap:Zt,specularColorMap:ie,specularIntensityMap:Fe,transmission:Ot,transmissionMap:B,thicknessMap:Tt,gradientMap:ot,opaque:P.transparent===!1&&P.blending===hr&&P.alphaToCoverage===!1,alphaMap:dt,alphaTest:Et,alphaHash:pt,combine:P.combine,mapUv:Pe&&R(P.map.channel),aoMapUv:W&&R(P.aoMap.channel),lightMapUv:en&&R(P.lightMap.channel),bumpMapUv:ue&&R(P.bumpMap.channel),normalMapUv:he&&R(P.normalMap.channel),displacementMapUv:kt&&R(P.displacementMap.channel),emissiveMapUv:Ue&&R(P.emissiveMap.channel),metalnessMapUv:Wt&&R(P.metalnessMap.channel),roughnessMapUv:L&&R(P.roughnessMap.channel),anisotropyMapUv:St&&R(P.anisotropyMap.channel),clearcoatMapUv:Lt&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:Te&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&R(P.sheenRoughnessMap.channel),specularMapUv:Zt&&R(P.specularMap.channel),specularColorMapUv:ie&&R(P.specularColorMap.channel),specularIntensityMapUv:Fe&&R(P.specularIntensityMap.channel),transmissionMapUv:B&&R(P.transmissionMap.channel),thicknessMapUv:Tt&&R(P.thicknessMap.channel),alphaMapUv:dt&&R(P.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(he||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ht.attributes.uv&&(Pe||dt),fog:!!it,useFog:P.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:M,reverseDepthBuffer:Jt,skinning:z.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:te,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Pe&&P.map.isVideoTexture===!0&&Oe.getTransfer(P.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ue&&P.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(P.emissiveMap.colorSpace)===Xe,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===hi,flipSided:P.side===Rn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ee&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&P.extensions.multiDraw===!0||ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Je.vertexUv1s=m.has(1),Je.vertexUv2s=m.has(2),Je.vertexUv3s=m.has(3),m.clear(),Je}function p(P){const v=[];if(P.shaderID?v.push(P.shaderID):(v.push(P.customVertexShaderID),v.push(P.customFragmentShaderID)),P.defines!==void 0)for(const w in P.defines)v.push(w),v.push(P.defines[w]);return P.isRawShaderMaterial===!1&&(O(v,P),D(v,P),v.push(i.outputColorSpace)),v.push(P.customProgramCacheKey),v.join()}function O(P,v){P.push(v.precision),P.push(v.outputColorSpace),P.push(v.envMapMode),P.push(v.envMapCubeUVHeight),P.push(v.mapUv),P.push(v.alphaMapUv),P.push(v.lightMapUv),P.push(v.aoMapUv),P.push(v.bumpMapUv),P.push(v.normalMapUv),P.push(v.displacementMapUv),P.push(v.emissiveMapUv),P.push(v.metalnessMapUv),P.push(v.roughnessMapUv),P.push(v.anisotropyMapUv),P.push(v.clearcoatMapUv),P.push(v.clearcoatNormalMapUv),P.push(v.clearcoatRoughnessMapUv),P.push(v.iridescenceMapUv),P.push(v.iridescenceThicknessMapUv),P.push(v.sheenColorMapUv),P.push(v.sheenRoughnessMapUv),P.push(v.specularMapUv),P.push(v.specularColorMapUv),P.push(v.specularIntensityMapUv),P.push(v.transmissionMapUv),P.push(v.thicknessMapUv),P.push(v.combine),P.push(v.fogExp2),P.push(v.sizeAttenuation),P.push(v.morphTargetsCount),P.push(v.morphAttributeCount),P.push(v.numDirLights),P.push(v.numPointLights),P.push(v.numSpotLights),P.push(v.numSpotLightMaps),P.push(v.numHemiLights),P.push(v.numRectAreaLights),P.push(v.numDirLightShadows),P.push(v.numPointLightShadows),P.push(v.numSpotLightShadows),P.push(v.numSpotLightShadowsWithMaps),P.push(v.numLightProbes),P.push(v.shadowMapType),P.push(v.toneMapping),P.push(v.numClippingPlanes),P.push(v.numClipIntersection),P.push(v.depthPacking)}function D(P,v){l.disableAll(),v.supportsVertexTextures&&l.enable(0),v.instancing&&l.enable(1),v.instancingColor&&l.enable(2),v.instancingMorph&&l.enable(3),v.matcap&&l.enable(4),v.envMap&&l.enable(5),v.normalMapObjectSpace&&l.enable(6),v.normalMapTangentSpace&&l.enable(7),v.clearcoat&&l.enable(8),v.iridescence&&l.enable(9),v.alphaTest&&l.enable(10),v.vertexColors&&l.enable(11),v.vertexAlphas&&l.enable(12),v.vertexUv1s&&l.enable(13),v.vertexUv2s&&l.enable(14),v.vertexUv3s&&l.enable(15),v.vertexTangents&&l.enable(16),v.anisotropy&&l.enable(17),v.alphaHash&&l.enable(18),v.batching&&l.enable(19),v.dispersion&&l.enable(20),v.batchingColor&&l.enable(21),P.push(l.mask),l.disableAll(),v.fog&&l.enable(0),v.useFog&&l.enable(1),v.flatShading&&l.enable(2),v.logarithmicDepthBuffer&&l.enable(3),v.reverseDepthBuffer&&l.enable(4),v.skinning&&l.enable(5),v.morphTargets&&l.enable(6),v.morphNormals&&l.enable(7),v.morphColors&&l.enable(8),v.premultipliedAlpha&&l.enable(9),v.shadowMapEnabled&&l.enable(10),v.doubleSided&&l.enable(11),v.flipSided&&l.enable(12),v.useDepthPacking&&l.enable(13),v.dithering&&l.enable(14),v.transmission&&l.enable(15),v.sheen&&l.enable(16),v.opaque&&l.enable(17),v.pointsUvs&&l.enable(18),v.decodeVideoTexture&&l.enable(19),v.decodeVideoTextureEmissive&&l.enable(20),v.alphaToCoverage&&l.enable(21),P.push(l.mask)}function C(P){const v=b[P.type];let w;if(v){const Z=Jn[v];w=bu.clone(Z.uniforms)}else w=P.uniforms;return w}function rt(P,v){let w;for(let Z=0,z=_.length;Z<z;Z++){const it=_[Z];if(it.cacheKey===v){w=it,++w.usedTimes;break}}return w===void 0&&(w=new Hp(i,v,P,o),_.push(w)),w}function V(P){if(--P.usedTimes===0){const v=_.indexOf(P);_[v]=_[_.length-1],_.pop(),P.destroy()}}function H(P){h.remove(P)}function Y(){h.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:C,acquireProgram:rt,releaseProgram:V,releaseShaderCache:H,programs:_,dispose:Y}}function jp(){let i=new WeakMap;function t(c){return i.has(c)}function e(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function r(c,l,h){i.get(c)[l]=h}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function Yp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fl(){const i=[];let t=0;const e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function c(M,x,S,b,R,y){let p=i[t];return p===void 0?(p={id:M.id,object:M,geometry:x,material:S,groupOrder:b,renderOrder:M.renderOrder,z:R,group:y},i[t]=p):(p.id=M.id,p.object=M,p.geometry=x,p.material=S,p.groupOrder=b,p.renderOrder=M.renderOrder,p.z=R,p.group=y),t++,p}function l(M,x,S,b,R,y){const p=c(M,x,S,b,R,y);S.transmission>0?n.push(p):S.transparent===!0?r.push(p):e.push(p)}function h(M,x,S,b,R,y){const p=c(M,x,S,b,R,y);S.transmission>0?n.unshift(p):S.transparent===!0?r.unshift(p):e.unshift(p)}function m(M,x){e.length>1&&e.sort(M||Yp),n.length>1&&n.sort(x||hl),r.length>1&&r.sort(x||hl)}function _(){for(let M=t,x=i.length;M<x;M++){const S=i[M];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:h,finish:_,sort:m}}function qp(){let i=new WeakMap;function t(n,r){const o=i.get(n);let c;return o===void 0?(c=new fl,i.set(n,[c])):r>=o.length?(c=new fl,o.push(c)):c=o[r],c}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new tt,color:new ke};break;case"SpotLight":e={position:new tt,direction:new tt,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new ke,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":e={color:new ke,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return i[t.id]=e,e}}}function Zp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $p=0;function Jp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qp(i){const t=new Kp,e=Zp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)n.probe.push(new tt);const r=new tt,o=new $e,c=new $e;function l(m){let _=0,M=0,x=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let S=0,b=0,R=0,y=0,p=0,O=0,D=0,C=0,rt=0,V=0,H=0;m.sort(Jp);for(let P=0,v=m.length;P<v;P++){const w=m[P],Z=w.color,z=w.intensity,it=w.distance,ht=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)_+=Z.r*z,M+=Z.g*z,x+=Z.b*z;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],z);H++}else if(w.isDirectionalLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const st=w.shadow,K=e.get(w);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,n.directionalShadow[S]=K,n.directionalShadowMap[S]=ht,n.directionalShadowMatrix[S]=w.shadow.matrix,O++}n.directional[S]=G,S++}else if(w.isSpotLight){const G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(Z).multiplyScalar(z),G.distance=it,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[R]=G;const st=w.shadow;if(w.map&&(n.spotLightMap[rt]=w.map,rt++,st.updateMatrices(w),w.castShadow&&V++),n.spotLightMatrix[R]=st.matrix,w.castShadow){const K=e.get(w);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,n.spotShadow[R]=K,n.spotShadowMap[R]=ht,C++}R++}else if(w.isRectAreaLight){const G=t.get(w);G.color.copy(Z).multiplyScalar(z),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[y]=G,y++}else if(w.isPointLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const st=w.shadow,K=e.get(w);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,K.shadowCameraNear=st.camera.near,K.shadowCameraFar=st.camera.far,n.pointShadow[b]=K,n.pointShadowMap[b]=ht,n.pointShadowMatrix[b]=w.shadow.matrix,D++}n.point[b]=G,b++}else if(w.isHemisphereLight){const G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(z),G.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=_,n.ambient[1]=M,n.ambient[2]=x;const Y=n.hash;(Y.directionalLength!==S||Y.pointLength!==b||Y.spotLength!==R||Y.rectAreaLength!==y||Y.hemiLength!==p||Y.numDirectionalShadows!==O||Y.numPointShadows!==D||Y.numSpotShadows!==C||Y.numSpotMaps!==rt||Y.numLightProbes!==H)&&(n.directional.length=S,n.spot.length=R,n.rectArea.length=y,n.point.length=b,n.hemi.length=p,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=O,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=C+rt-V,n.spotLightMap.length=rt,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=H,Y.directionalLength=S,Y.pointLength=b,Y.spotLength=R,Y.rectAreaLength=y,Y.hemiLength=p,Y.numDirectionalShadows=O,Y.numPointShadows=D,Y.numSpotShadows=C,Y.numSpotMaps=rt,Y.numLightProbes=H,n.version=$p++)}function h(m,_){let M=0,x=0,S=0,b=0,R=0;const y=_.matrixWorldInverse;for(let p=0,O=m.length;p<O;p++){const D=m[p];if(D.isDirectionalLight){const C=n.directional[M];C.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(y),M++}else if(D.isSpotLight){const C=n.spot[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const C=n.rectArea[b];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),c.identity(),o.copy(D.matrixWorld),o.premultiply(y),c.extractRotation(o),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),b++}else if(D.isPointLight){const C=n.point[x];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const C=n.hemi[R];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:l,setupView:h,state:n}}function dl(i){const t=new Qp(i),e=[],n=[];function r(_){m.camera=_,e.length=0,n.length=0}function o(_){e.push(_)}function c(_){n.push(_)}function l(){t.setup(e)}function h(_){t.setupView(e,_)}const m={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:m,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:c}}function tm(i){let t=new WeakMap;function e(r,o=0){const c=t.get(r);let l;return c===void 0?(l=new dl(i),t.set(r,[l])):o>=c.length?(l=new dl(i),c.push(l)):l=c[o],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class em extends Gr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nm extends Gr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
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
}`;function sm(i,t,e){let n=new ia;const r=new Ve,o=new Ve,c=new je,l=new em({depthPacking:Kc}),h=new nm,m={},_=e.maxTextureSize,M={[Ci]:Rn,[Rn]:Ci,[hi]:hi},x=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:im,fragmentShader:rm}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const b=new Li;b.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Hn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let p=this.type;this.render=function(V,H,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const P=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(wi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const z=p!==ui&&this.type===ui,it=p===ui&&this.type!==ui;for(let ht=0,G=V.length;ht<G;ht++){const st=V[ht],K=st.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const gt=K.getFrameExtents();if(r.multiply(gt),o.copy(K.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(o.x=Math.floor(_/gt.x),r.x=o.x*gt.x,K.mapSize.x=o.x),r.y>_&&(o.y=Math.floor(_/gt.y),r.y=o.y*gt.y,K.mapSize.y=o.y)),K.map===null||z===!0||it===!0){const Nt=this.type!==ui?{minFilter:qn,magFilter:qn}:{};K.map!==null&&K.map.dispose(),K.map=new Yi(r.x,r.y,Nt),K.map.texture.name=st.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const At=K.getViewportCount();for(let Nt=0;Nt<At;Nt++){const te=K.getViewport(Nt);c.set(o.x*te.x,o.y*te.y,o.x*te.z,o.y*te.w),Z.viewport(c),K.updateMatrices(st,Nt),n=K.getFrustum(),C(H,Y,K.camera,st,this.type)}K.isPointLightShadow!==!0&&this.type===ui&&O(K,Y),K.needsUpdate=!1}p=this.type,y.needsUpdate=!1,i.setRenderTarget(P,v,w)};function O(V,H){const Y=t.update(R);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,S.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Yi(r.x,r.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,i.setRenderTarget(V.mapPass),i.clear(),i.renderBufferDirect(H,null,Y,x,R,null),S.uniforms.shadow_pass.value=V.mapPass.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,i.setRenderTarget(V.map),i.clear(),i.renderBufferDirect(H,null,Y,S,R,null)}function D(V,H,Y,P){let v=null;const w=Y.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(w!==void 0)v=w;else if(v=Y.isPointLight===!0?h:l,i.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0){const Z=v.uuid,z=H.uuid;let it=m[Z];it===void 0&&(it={},m[Z]=it);let ht=it[z];ht===void 0&&(ht=v.clone(),it[z]=ht,H.addEventListener("dispose",rt)),v=ht}if(v.visible=H.visible,v.wireframe=H.wireframe,P===ui?v.side=H.shadowSide!==null?H.shadowSide:H.side:v.side=H.shadowSide!==null?H.shadowSide:M[H.side],v.alphaMap=H.alphaMap,v.alphaTest=H.alphaTest,v.map=H.map,v.clipShadows=H.clipShadows,v.clippingPlanes=H.clippingPlanes,v.clipIntersection=H.clipIntersection,v.displacementMap=H.displacementMap,v.displacementScale=H.displacementScale,v.displacementBias=H.displacementBias,v.wireframeLinewidth=H.wireframeLinewidth,v.linewidth=H.linewidth,Y.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const Z=i.properties.get(v);Z.light=Y}return v}function C(V,H,Y,P,v){if(V.visible===!1)return;if(V.layers.test(H.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&v===ui)&&(!V.frustumCulled||n.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,V.matrixWorld);const z=t.update(V),it=V.material;if(Array.isArray(it)){const ht=z.groups;for(let G=0,st=ht.length;G<st;G++){const K=ht[G],gt=it[K.materialIndex];if(gt&&gt.visible){const At=D(V,gt,P,v);V.onBeforeShadow(i,V,H,Y,z,At,K),i.renderBufferDirect(Y,null,z,At,V,K),V.onAfterShadow(i,V,H,Y,z,At,K)}}}else if(it.visible){const ht=D(V,it,P,v);V.onBeforeShadow(i,V,H,Y,z,ht,null),i.renderBufferDirect(Y,null,z,ht,V,null),V.onAfterShadow(i,V,H,Y,z,ht,null)}}const Z=V.children;for(let z=0,it=Z.length;z<it;z++)C(Z[z],H,Y,P,v)}function rt(V){V.target.removeEventListener("dispose",rt);for(const Y in m){const P=m[Y],v=V.target.uuid;v in P&&(P[v].dispose(),delete P[v])}}}const om={[co]:uo,[ho]:mo,[fo]:go,[pr]:po,[uo]:co,[mo]:ho,[go]:fo,[po]:pr};function am(i,t){function e(){let B=!1;const Tt=new je;let ot=null;const dt=new je(0,0,0,0);return{setMask:function(Et){ot!==Et&&!B&&(i.colorMask(Et,Et,Et,Et),ot=Et)},setLocked:function(Et){B=Et},setClear:function(Et,pt,ee,Ge,Je){Je===!0&&(Et*=Ge,pt*=Ge,ee*=Ge),Tt.set(Et,pt,ee,Ge),dt.equals(Tt)===!1&&(i.clearColor(Et,pt,ee,Ge),dt.copy(Tt))},reset:function(){B=!1,ot=null,dt.set(-1,0,0,0)}}}function n(){let B=!1,Tt=!1,ot=null,dt=null,Et=null;return{setReversed:function(pt){if(Tt!==pt){const ee=t.get("EXT_clip_control");Tt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);const Ge=Et;Et=null,this.setClear(Ge)}Tt=pt},getReversed:function(){return Tt},setTest:function(pt){pt?Rt(i.DEPTH_TEST):Jt(i.DEPTH_TEST)},setMask:function(pt){ot!==pt&&!B&&(i.depthMask(pt),ot=pt)},setFunc:function(pt){if(Tt&&(pt=om[pt]),dt!==pt){switch(pt){case co:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=pt}},setLocked:function(pt){B=pt},setClear:function(pt){Et!==pt&&(Tt&&(pt=1-pt),i.clearDepth(pt),Et=pt)},reset:function(){B=!1,ot=null,dt=null,Et=null,Tt=!1}}}function r(){let B=!1,Tt=null,ot=null,dt=null,Et=null,pt=null,ee=null,Ge=null,Je=null;return{setTest:function(Ae){B||(Ae?Rt(i.STENCIL_TEST):Jt(i.STENCIL_TEST))},setMask:function(Ae){Tt!==Ae&&!B&&(i.stencilMask(Ae),Tt=Ae)},setFunc:function(Ae,Ze,xn){(ot!==Ae||dt!==Ze||Et!==xn)&&(i.stencilFunc(Ae,Ze,xn),ot=Ae,dt=Ze,Et=xn)},setOp:function(Ae,Ze,xn){(pt!==Ae||ee!==Ze||Ge!==xn)&&(i.stencilOp(Ae,Ze,xn),pt=Ae,ee=Ze,Ge=xn)},setLocked:function(Ae){B=Ae},setClear:function(Ae){Je!==Ae&&(i.clearStencil(Ae),Je=Ae)},reset:function(){B=!1,Tt=null,ot=null,dt=null,Et=null,pt=null,ee=null,Ge=null,Je=null}}}const o=new e,c=new n,l=new r,h=new WeakMap,m=new WeakMap;let _={},M={},x=new WeakMap,S=[],b=null,R=!1,y=null,p=null,O=null,D=null,C=null,rt=null,V=null,H=new ke(0,0,0),Y=0,P=!1,v=null,w=null,Z=null,z=null,it=null;const ht=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,st=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=st>=1):K.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=st>=2);let gt=null,At={};const Nt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),de=new je().fromArray(Nt),ct=new je().fromArray(te);function vt(B,Tt,ot,dt){const Et=new Uint8Array(4),pt=i.createTexture();i.bindTexture(B,pt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<ot;ee++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(Tt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return pt}const Ht={};Ht[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ht[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ht[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ht[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Rt(i.DEPTH_TEST),c.setFunc(pr),ue(!1),he(_a),Rt(i.CULL_FACE),W(wi);function Rt(B){_[B]!==!0&&(i.enable(B),_[B]=!0)}function Jt(B){_[B]!==!1&&(i.disable(B),_[B]=!1)}function qt(B,Tt){return M[B]!==Tt?(i.bindFramebuffer(B,Tt),M[B]=Tt,B===i.DRAW_FRAMEBUFFER&&(M[i.FRAMEBUFFER]=Tt),B===i.FRAMEBUFFER&&(M[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function ne(B,Tt){let ot=S,dt=!1;if(B){ot=x.get(Tt),ot===void 0&&(ot=[],x.set(Tt,ot));const Et=B.textures;if(ot.length!==Et.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,ee=Et.length;pt<ee;pt++)ot[pt]=i.COLOR_ATTACHMENT0+pt;ot.length=Et.length,dt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,dt=!0);dt&&i.drawBuffers(ot)}function Pe(B){return b!==B?(i.useProgram(B),b=B,!0):!1}const Ee={[ki]:i.FUNC_ADD,[yc]:i.FUNC_SUBTRACT,[Sc]:i.FUNC_REVERSE_SUBTRACT};Ee[Ec]=i.MIN,Ee[Tc]=i.MAX;const le={[Ac]:i.ZERO,[bc]:i.ONE,[wc]:i.SRC_COLOR,[ao]:i.SRC_ALPHA,[Dc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Cc]:i.DST_ALPHA,[Rc]:i.ONE_MINUS_SRC_COLOR,[lo]:i.ONE_MINUS_SRC_ALPHA,[Uc]:i.ONE_MINUS_DST_COLOR,[Pc]:i.ONE_MINUS_DST_ALPHA,[Ic]:i.CONSTANT_COLOR,[Nc]:i.ONE_MINUS_CONSTANT_COLOR,[Fc]:i.CONSTANT_ALPHA,[Oc]:i.ONE_MINUS_CONSTANT_ALPHA};function W(B,Tt,ot,dt,Et,pt,ee,Ge,Je,Ae){if(B===wi){R===!0&&(Jt(i.BLEND),R=!1);return}if(R===!1&&(Rt(i.BLEND),R=!0),B!==Mc){if(B!==y||Ae!==P){if((p!==ki||C!==ki)&&(i.blendEquation(i.FUNC_ADD),p=ki,C=ki),Ae)switch(B){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.ONE,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ma:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}O=null,D=null,rt=null,V=null,H.set(0,0,0),Y=0,y=B,P=Ae}return}Et=Et||Tt,pt=pt||ot,ee=ee||dt,(Tt!==p||Et!==C)&&(i.blendEquationSeparate(Ee[Tt],Ee[Et]),p=Tt,C=Et),(ot!==O||dt!==D||pt!==rt||ee!==V)&&(i.blendFuncSeparate(le[ot],le[dt],le[pt],le[ee]),O=ot,D=dt,rt=pt,V=ee),(Ge.equals(H)===!1||Je!==Y)&&(i.blendColor(Ge.r,Ge.g,Ge.b,Je),H.copy(Ge),Y=Je),y=B,P=!1}function en(B,Tt){B.side===hi?Jt(i.CULL_FACE):Rt(i.CULL_FACE);let ot=B.side===Rn;Tt&&(ot=!ot),ue(ot),B.blending===hr&&B.transparent===!1?W(wi):W(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);const dt=B.stencilWrite;l.setTest(dt),dt&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Rt(i.SAMPLE_ALPHA_TO_COVERAGE):Jt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(B){v!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),v=B)}function he(B){B!==_c?(Rt(i.CULL_FACE),B!==w&&(B===_a?i.cullFace(i.BACK):B===vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Jt(i.CULL_FACE),w=B}function kt(B){B!==Z&&(G&&i.lineWidth(B),Z=B)}function Ue(B,Tt,ot){B?(Rt(i.POLYGON_OFFSET_FILL),(z!==Tt||it!==ot)&&(i.polygonOffset(Tt,ot),z=Tt,it=ot)):Jt(i.POLYGON_OFFSET_FILL)}function Wt(B){B?Rt(i.SCISSOR_TEST):Jt(i.SCISSOR_TEST)}function L(B){B===void 0&&(B=i.TEXTURE0+ht-1),gt!==B&&(i.activeTexture(B),gt=B)}function T(B,Tt,ot){ot===void 0&&(gt===null?ot=i.TEXTURE0+ht-1:ot=gt);let dt=At[ot];dt===void 0&&(dt={type:void 0,texture:void 0},At[ot]=dt),(dt.type!==B||dt.texture!==Tt)&&(gt!==ot&&(i.activeTexture(ot),gt=ot),i.bindTexture(B,Tt||Ht[B]),dt.type=B,dt.texture=Tt)}function J(){const B=At[gt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ft(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function It(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Yt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Kt(B){de.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),de.copy(B))}function Ut(B){ct.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ct.copy(B))}function Zt(B,Tt){let ot=m.get(Tt);ot===void 0&&(ot=new WeakMap,m.set(Tt,ot));let dt=ot.get(B);dt===void 0&&(dt=i.getUniformBlockIndex(Tt,B.name),ot.set(B,dt))}function ie(B,Tt){const dt=m.get(Tt).get(B);h.get(Tt)!==dt&&(i.uniformBlockBinding(Tt,dt,B.__bindingPointIndex),h.set(Tt,dt))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},gt=null,At={},M={},x=new WeakMap,S=[],b=null,R=!1,y=null,p=null,O=null,D=null,C=null,rt=null,V=null,H=new ke(0,0,0),Y=0,P=!1,v=null,w=null,Z=null,z=null,it=null,de.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Rt,disable:Jt,bindFramebuffer:qt,drawBuffers:ne,useProgram:Pe,setBlending:W,setMaterial:en,setFlipSided:ue,setCullFace:he,setLineWidth:kt,setPolygonOffset:Ue,setScissorTest:Wt,activeTexture:L,bindTexture:T,unbindTexture:J,compressedTexImage2D:ft,compressedTexImage3D:mt,texImage2D:It,texImage3D:Yt,updateUBOMapping:Zt,uniformBlockBinding:ie,texStorage2D:Te,texStorage3D:Mt,texSubImage2D:at,texSubImage3D:Ot,compressedTexSubImage2D:St,compressedTexSubImage3D:Lt,scissor:Kt,viewport:Ut,reset:Fe}}function pl(i,t,e,n){const r=lm(n);switch(e){case Tl:return i*t;case bl:return i*t;case wl:return i*t*2;case Rl:return i*t/r.components*r.byteLength;case Qo:return i*t/r.components*r.byteLength;case Cl:return i*t*2/r.components*r.byteLength;case ta:return i*t*2/r.components*r.byteLength;case Al:return i*t*3/r.components*r.byteLength;case Yn:return i*t*4/r.components*r.byteLength;case ea:return i*t*4/r.components*r.byteLength;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case To:return Math.max(i,16)*Math.max(t,8)/4;case yo:case Eo:return Math.max(i,8)*Math.max(t,8)/2;case Ao:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vs:case ko:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pl:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xo:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lm(i){switch(i){case gi:case yl:return{byteLength:1,components:1};case Nr:case Sl:case Fr:return{byteLength:2,components:1};case $o:case Jo:return{byteLength:2,components:4};case ji:case Zo:case fi:return{byteLength:4,components:1};case El:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function cm(i,t,e,n,r,o,c){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ve,_=new WeakMap;let M;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,T){return S?new OffscreenCanvas(L,T):ys("canvas")}function R(L,T,J){let ft=1;const mt=Wt(L);if((mt.width>J||mt.height>J)&&(ft=J/Math.max(mt.width,mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const at=Math.floor(ft*mt.width),Ot=Math.floor(ft*mt.height);M===void 0&&(M=b(at,Ot));const St=T?b(at,Ot):M;return St.width=at,St.height=Ot,St.getContext("2d").drawImage(L,0,0,at,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+at+"x"+Ot+")."),St}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),L;return L}function y(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(L,T,J,ft,mt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let at=T;if(T===i.RED&&(J===i.FLOAT&&(at=i.R32F),J===i.HALF_FLOAT&&(at=i.R16F),J===i.UNSIGNED_BYTE&&(at=i.R8)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.R8UI),J===i.UNSIGNED_SHORT&&(at=i.R16UI),J===i.UNSIGNED_INT&&(at=i.R32UI),J===i.BYTE&&(at=i.R8I),J===i.SHORT&&(at=i.R16I),J===i.INT&&(at=i.R32I)),T===i.RG&&(J===i.FLOAT&&(at=i.RG32F),J===i.HALF_FLOAT&&(at=i.RG16F),J===i.UNSIGNED_BYTE&&(at=i.RG8)),T===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.RG8UI),J===i.UNSIGNED_SHORT&&(at=i.RG16UI),J===i.UNSIGNED_INT&&(at=i.RG32UI),J===i.BYTE&&(at=i.RG8I),J===i.SHORT&&(at=i.RG16I),J===i.INT&&(at=i.RG32I)),T===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.RGB8UI),J===i.UNSIGNED_SHORT&&(at=i.RGB16UI),J===i.UNSIGNED_INT&&(at=i.RGB32UI),J===i.BYTE&&(at=i.RGB8I),J===i.SHORT&&(at=i.RGB16I),J===i.INT&&(at=i.RGB32I)),T===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),J===i.UNSIGNED_INT&&(at=i.RGBA32UI),J===i.BYTE&&(at=i.RGBA8I),J===i.SHORT&&(at=i.RGBA16I),J===i.INT&&(at=i.RGBA32I)),T===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),T===i.RGBA){const Ot=mt?Es:Oe.getTransfer(ft);J===i.FLOAT&&(at=i.RGBA32F),J===i.HALF_FLOAT&&(at=i.RGBA16F),J===i.UNSIGNED_BYTE&&(at=Ot===Xe?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function C(L,T){let J;return L?T===null||T===ji||T===_r?J=i.DEPTH24_STENCIL8:T===fi?J=i.DEPTH32F_STENCIL8:T===Nr&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ji||T===_r?J=i.DEPTH_COMPONENT24:T===fi?J=i.DEPTH_COMPONENT32F:T===Nr&&(J=i.DEPTH_COMPONENT16),J}function rt(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==qn&&L.minFilter!==Qn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function V(L){const T=L.target;T.removeEventListener("dispose",V),Y(T),T.isVideoTexture&&_.delete(T)}function H(L){const T=L.target;T.removeEventListener("dispose",H),v(T)}function Y(L){const T=n.get(L);if(T.__webglInit===void 0)return;const J=L.source,ft=x.get(J);if(ft){const mt=ft[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&P(L),Object.keys(ft).length===0&&x.delete(J)}n.remove(L)}function P(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const J=L.source,ft=x.get(J);delete ft[T.__cacheKey],c.memory.textures--}function v(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let mt=0;mt<T.__webglFramebuffer[ft].length;mt++)i.deleteFramebuffer(T.__webglFramebuffer[ft][mt]);else i.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)i.deleteFramebuffer(T.__webglFramebuffer[ft]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=L.textures;for(let ft=0,mt=J.length;ft<mt;ft++){const at=n.get(J[ft]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),c.memory.textures--),n.remove(J[ft])}n.remove(L)}let w=0;function Z(){w=0}function z(){const L=w;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),w+=1,L}function it(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ht(L,T){const J=n.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(J,L,T);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function G(L,T){const J=n.get(L);if(L.version>0&&J.__version!==L.version){ct(J,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function st(L,T){const J=n.get(L);if(L.version>0&&J.__version!==L.version){ct(J,L,T);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function K(L,T){const J=n.get(L);if(L.version>0&&J.__version!==L.version){vt(J,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}const gt={[xo]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},At={[qn]:i.NEAREST,[Yc]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Rs]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},Nt={[$c]:i.NEVER,[iu]:i.ALWAYS,[Jc]:i.LESS,[Ul]:i.LEQUAL,[Qc]:i.EQUAL,[nu]:i.GEQUAL,[tu]:i.GREATER,[eu]:i.NOTEQUAL};function te(L,T){if(T.type===fi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Qn||T.magFilter===Rs||T.magFilter===jr||T.magFilter===Xi||T.minFilter===Qn||T.minFilter===Rs||T.minFilter===jr||T.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,gt[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,gt[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,gt[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,At[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,At[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qn||T.minFilter!==jr&&T.minFilter!==Xi||T.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function de(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",V));const ft=T.source;let mt=x.get(ft);mt===void 0&&(mt={},x.set(ft,mt));const at=it(T);if(at!==L.__cacheKey){mt[at]===void 0&&(mt[at]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,J=!0),mt[at].usedTimes++;const Ot=mt[L.__cacheKey];Ot!==void 0&&(mt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&P(T)),L.__cacheKey=at,L.__webglTexture=mt[at].texture}return J}function ct(L,T,J){let ft=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=i.TEXTURE_3D);const mt=de(L,T),at=T.source;e.bindTexture(ft,L.__webglTexture,i.TEXTURE0+J);const Ot=n.get(at);if(at.version!==Ot.__version||mt===!0){e.activeTexture(i.TEXTURE0+J);const St=Oe.getPrimaries(Oe.workingColorSpace),Lt=T.colorSpace===bi?null:Oe.getPrimaries(T.colorSpace),Te=T.colorSpace===bi||St===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Mt=R(T.image,!1,r.maxTextureSize);Mt=Ue(T,Mt);const It=o.convert(T.format,T.colorSpace),Yt=o.convert(T.type);let Kt=D(T.internalFormat,It,Yt,T.colorSpace,T.isVideoTexture);te(ft,T);let Ut;const Zt=T.mipmaps,ie=T.isVideoTexture!==!0,Fe=Ot.__version===void 0||mt===!0,B=at.dataReady,Tt=rt(T,Mt);if(T.isDepthTexture)Kt=C(T.format===vr,T.type),Fe&&(ie?e.texStorage2D(i.TEXTURE_2D,1,Kt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,It,Yt,null));else if(T.isDataTexture)if(Zt.length>0){ie&&Fe&&e.texStorage2D(i.TEXTURE_2D,Tt,Kt,Zt[0].width,Zt[0].height);for(let ot=0,dt=Zt.length;ot<dt;ot++)Ut=Zt[ot],ie?B&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Ut.width,Ut.height,It,Yt,Ut.data):e.texImage2D(i.TEXTURE_2D,ot,Kt,Ut.width,Ut.height,0,It,Yt,Ut.data);T.generateMipmaps=!1}else ie?(Fe&&e.texStorage2D(i.TEXTURE_2D,Tt,Kt,Mt.width,Mt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,It,Yt,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,It,Yt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ie&&Fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Kt,Zt[0].width,Zt[0].height,Mt.depth);for(let ot=0,dt=Zt.length;ot<dt;ot++)if(Ut=Zt[ot],T.format!==Yn)if(It!==null)if(ie){if(B)if(T.layerUpdates.size>0){const Et=pl(Ut.width,Ut.height,T.format,T.type);for(const pt of T.layerUpdates){const ee=Ut.data.subarray(pt*Et/Ut.data.BYTES_PER_ELEMENT,(pt+1)*Et/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,pt,Ut.width,Ut.height,1,It,ee)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Ut.width,Ut.height,Mt.depth,It,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Kt,Ut.width,Ut.height,Mt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Ut.width,Ut.height,Mt.depth,It,Yt,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Kt,Ut.width,Ut.height,Mt.depth,0,It,Yt,Ut.data)}else{ie&&Fe&&e.texStorage2D(i.TEXTURE_2D,Tt,Kt,Zt[0].width,Zt[0].height);for(let ot=0,dt=Zt.length;ot<dt;ot++)Ut=Zt[ot],T.format!==Yn?It!==null?ie?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Ut.width,Ut.height,It,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Kt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?B&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Ut.width,Ut.height,It,Yt,Ut.data):e.texImage2D(i.TEXTURE_2D,ot,Kt,Ut.width,Ut.height,0,It,Yt,Ut.data)}else if(T.isDataArrayTexture)if(ie){if(Fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Kt,Mt.width,Mt.height,Mt.depth),B)if(T.layerUpdates.size>0){const ot=pl(Mt.width,Mt.height,T.format,T.type);for(const dt of T.layerUpdates){const Et=Mt.data.subarray(dt*ot/Mt.data.BYTES_PER_ELEMENT,(dt+1)*ot/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,Mt.width,Mt.height,1,It,Yt,Et)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,It,Yt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Kt,Mt.width,Mt.height,Mt.depth,0,It,Yt,Mt.data);else if(T.isData3DTexture)ie?(Fe&&e.texStorage3D(i.TEXTURE_3D,Tt,Kt,Mt.width,Mt.height,Mt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,It,Yt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,Kt,Mt.width,Mt.height,Mt.depth,0,It,Yt,Mt.data);else if(T.isFramebufferTexture){if(Fe)if(ie)e.texStorage2D(i.TEXTURE_2D,Tt,Kt,Mt.width,Mt.height);else{let ot=Mt.width,dt=Mt.height;for(let Et=0;Et<Tt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Kt,ot,dt,0,It,Yt,null),ot>>=1,dt>>=1}}else if(Zt.length>0){if(ie&&Fe){const ot=Wt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Kt,ot.width,ot.height)}for(let ot=0,dt=Zt.length;ot<dt;ot++)Ut=Zt[ot],ie?B&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,It,Yt,Ut):e.texImage2D(i.TEXTURE_2D,ot,Kt,It,Yt,Ut);T.generateMipmaps=!1}else if(ie){if(Fe){const ot=Wt(Mt);e.texStorage2D(i.TEXTURE_2D,Tt,Kt,ot.width,ot.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Yt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,Kt,It,Yt,Mt);y(T)&&p(ft),Ot.__version=at.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function vt(L,T,J){if(T.image.length!==6)return;const ft=de(L,T),mt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const at=n.get(mt);if(mt.version!==at.__version||ft===!0){e.activeTexture(i.TEXTURE0+J);const Ot=Oe.getPrimaries(Oe.workingColorSpace),St=T.colorSpace===bi?null:Oe.getPrimaries(T.colorSpace),Lt=T.colorSpace===bi||Ot===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Te=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let dt=0;dt<6;dt++)!Te&&!Mt?It[dt]=R(T.image[dt],!0,r.maxCubemapSize):It[dt]=Mt?T.image[dt].image:T.image[dt],It[dt]=Ue(T,It[dt]);const Yt=It[0],Kt=o.convert(T.format,T.colorSpace),Ut=o.convert(T.type),Zt=D(T.internalFormat,Kt,Ut,T.colorSpace),ie=T.isVideoTexture!==!0,Fe=at.__version===void 0||ft===!0,B=mt.dataReady;let Tt=rt(T,Yt);te(i.TEXTURE_CUBE_MAP,T);let ot;if(Te){ie&&Fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Zt,Yt.width,Yt.height);for(let dt=0;dt<6;dt++){ot=It[dt].mipmaps;for(let Et=0;Et<ot.length;Et++){const pt=ot[Et];T.format!==Yn?Kt!==null?ie?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et,0,0,pt.width,pt.height,Kt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et,Zt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et,0,0,pt.width,pt.height,Kt,Ut,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et,Zt,pt.width,pt.height,0,Kt,Ut,pt.data)}}}else{if(ot=T.mipmaps,ie&&Fe){ot.length>0&&Tt++;const dt=Wt(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Zt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Mt){ie?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,It[dt].width,It[dt].height,Kt,Ut,It[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Zt,It[dt].width,It[dt].height,0,Kt,Ut,It[dt].data);for(let Et=0;Et<ot.length;Et++){const ee=ot[Et].image[dt].image;ie?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et+1,0,0,ee.width,ee.height,Kt,Ut,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et+1,Zt,ee.width,ee.height,0,Kt,Ut,ee.data)}}else{ie?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Kt,Ut,It[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Zt,Kt,Ut,It[dt]);for(let Et=0;Et<ot.length;Et++){const pt=ot[Et];ie?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et+1,0,0,Kt,Ut,pt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et+1,Zt,Kt,Ut,pt.image[dt])}}}y(T)&&p(i.TEXTURE_CUBE_MAP),at.__version=mt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ht(L,T,J,ft,mt,at){const Ot=o.convert(J.format,J.colorSpace),St=o.convert(J.type),Lt=D(J.internalFormat,Ot,St,J.colorSpace),Te=n.get(T),Mt=n.get(J);if(Mt.__renderTarget=T,!Te.__hasExternalTextures){const It=Math.max(1,T.width>>at),Yt=Math.max(1,T.height>>at);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,at,Lt,It,Yt,T.depth,0,Ot,St,null):e.texImage2D(mt,at,Lt,It,Yt,0,Ot,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),he(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,mt,Mt.__webglTexture,0,ue(T)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ft,mt,Mt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(L,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const ft=T.depthTexture,mt=ft&&ft.isDepthTexture?ft.type:null,at=C(T.stencilBuffer,mt),Ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=ue(T);he(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,at,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,at,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,at,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,L)}else{const ft=T.textures;for(let mt=0;mt<ft.length;mt++){const at=ft[mt],Ot=o.convert(at.format,at.colorSpace),St=o.convert(at.type),Lt=D(at.internalFormat,Ot,St,at.colorSpace),Te=ue(T);J&&he(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Lt,T.width,T.height):he(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,Lt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Jt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=n.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const mt=ft.__webglTexture,at=ue(T);if(T.depthTexture.format===fr)he(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(T.depthTexture.format===vr)he(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function qt(L){const T=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ft=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",mt)};ft.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=ft}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Jt(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=i.createRenderbuffer(),Rt(T.__webglDepthbuffer[ft],L,!1);else{const mt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=T.__webglDepthbuffer[ft];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Rt(T.__webglDepthbuffer,L,!1);else{const ft=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(L,T,J){const ft=n.get(L);T!==void 0&&Ht(ft.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&qt(L)}function Pe(L){const T=L.texture,J=n.get(L),ft=n.get(T);L.addEventListener("dispose",H);const mt=L.textures,at=L.isWebGLCubeRenderTarget===!0,Ot=mt.length>1;if(Ot||(ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture()),ft.__version=T.version,c.memory.textures++),at){J.__webglFramebuffer=[];for(let St=0;St<6;St++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[St]=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)J.__webglFramebuffer[St][Lt]=i.createFramebuffer()}else J.__webglFramebuffer[St]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let St=0;St<T.mipmaps.length;St++)J.__webglFramebuffer[St]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let St=0,Lt=mt.length;St<Lt;St++){const Te=n.get(mt[St]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),c.memory.textures++)}if(L.samples>0&&he(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let St=0;St<mt.length;St++){const Lt=mt[St];J.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[St]);const Te=o.convert(Lt.format,Lt.colorSpace),Mt=o.convert(Lt.type),It=D(Lt.internalFormat,Te,Mt,Lt.colorSpace,L.isXRRenderTarget===!0),Yt=ue(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,It,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,J.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(J.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),te(i.TEXTURE_CUBE_MAP,T);for(let St=0;St<6;St++)if(T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)Ht(J.__webglFramebuffer[St][Lt],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt);else Ht(J.__webglFramebuffer[St],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);y(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let St=0,Lt=mt.length;St<Lt;St++){const Te=mt[St],Mt=n.get(Te);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),te(i.TEXTURE_2D,Te),Ht(J.__webglFramebuffer,L,Te,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),y(Te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(St=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,ft.__webglTexture),te(St,T),T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)Ht(J.__webglFramebuffer[Lt],L,T,i.COLOR_ATTACHMENT0,St,Lt);else Ht(J.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,St,0);y(T)&&p(St),e.unbindTexture()}L.depthBuffer&&qt(L)}function Ee(L){const T=L.textures;for(let J=0,ft=T.length;J<ft;J++){const mt=T[J];if(y(mt)){const at=O(L),Ot=n.get(mt).__webglTexture;e.bindTexture(at,Ot),p(at),e.unbindTexture()}}}const le=[],W=[];function en(L){if(L.samples>0){if(he(L)===!1){const T=L.textures,J=L.width,ft=L.height;let mt=i.COLOR_BUFFER_BIT;const at=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(L),St=T.length>1;if(St)for(let Lt=0;Lt<T.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const Te=n.get(T[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,J,ft,0,0,J,ft,mt,i.NEAREST),h===!0&&(le.length=0,W.length=0,le.push(i.COLOR_ATTACHMENT0+Lt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(le.push(at),W.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Lt=0;Lt<T.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const Te=n.get(T[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,Te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ue(L){return Math.min(r.maxSamples,L.samples)}function he(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(L){const T=c.render.frame;_.get(L)!==T&&(_.set(L,T),L.update())}function Ue(L,T){const J=L.colorSpace,ft=L.format,mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Mr&&J!==bi&&(Oe.getTransfer(J)===Xe?(ft!==Yn||mt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=z,this.resetTextureUnits=Z,this.setTexture2D=ht,this.setTexture2DArray=G,this.setTexture3D=st,this.setTextureCube=K,this.rebindTextures=ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=he}function um(i,t){function e(n,r=bi){let o;const c=Oe.getTransfer(r);if(n===gi)return i.UNSIGNED_BYTE;if(n===$o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yl)return i.BYTE;if(n===Sl)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Zo)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===Al)return i.RGB;if(n===Yn)return i.RGBA;if(n===bl)return i.LUMINANCE;if(n===wl)return i.LUMINANCE_ALPHA;if(n===fr)return i.DEPTH_COMPONENT;if(n===vr)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===Cl)return i.RG;if(n===ta)return i.RG_INTEGER;if(n===ea)return i.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===_s)if(c===Xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ps)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ps)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_s)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===So||n===Eo||n===To)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===yo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===bo||n===wo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ao||n===bo)return c===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===wo)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ro||n===Co||n===Po||n===Lo||n===Uo||n===Do||n===Io||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===Go||n===Ho)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ro)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uo)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return c===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vs||n===ko||n===Vo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===vs)return c===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Wo||n===Xo||n===jo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===vs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class hm extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ds extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fm={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,c=null;const l=this._targetRay,h=this._grip,m=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(m&&t.hand){c=!0;for(const R of t.hand.values()){const y=e.getJointPose(R,n),p=this._getHandJoint(m,R);y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius),p.visible=y!==null}const _=m.joints["index-finger-tip"],M=m.joints["thumb-tip"],x=_.position.distanceTo(M.position),S=.02,b=.005;m.inputState.pinching&&x>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ds;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pm=`
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

}`;class mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Cn,o=t.properties.get(r);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pi({vertexShader:dm,fragmentShader:pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Hn(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gm extends yr{constructor(t,e){super();const n=this;let r=null,o=1,c=null,l="local-floor",h=1,m=null,_=null,M=null,x=null,S=null,b=null;const R=new mm,y=e.getContextAttributes();let p=null,O=null;const D=[],C=[],rt=new Ve;let V=null;const H=new Nn;H.viewport=new je;const Y=new Nn;Y.viewport=new je;const P=[H,Y],v=new hm;let w=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let vt=D[ct];return vt===void 0&&(vt=new io,D[ct]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(ct){let vt=D[ct];return vt===void 0&&(vt=new io,D[ct]=vt),vt.getGripSpace()},this.getHand=function(ct){let vt=D[ct];return vt===void 0&&(vt=new io,D[ct]=vt),vt.getHandSpace()};function z(ct){const vt=C.indexOf(ct.inputSource);if(vt===-1)return;const Ht=D[vt];Ht!==void 0&&(Ht.update(ct.inputSource,ct.frame,m||c),Ht.dispatchEvent({type:ct.type,data:ct.inputSource}))}function it(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",it),r.removeEventListener("inputsourceschange",ht);for(let ct=0;ct<D.length;ct++){const vt=C[ct];vt!==null&&(C[ct]=null,D[ct].disconnect(vt))}w=null,Z=null,R.reset(),t.setRenderTarget(p),S=null,x=null,M=null,r=null,O=null,de.stop(),n.isPresenting=!1,t.setPixelRatio(V),t.setSize(rt.width,rt.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){o=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){l=ct,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ct){m=ct},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return M},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(ct){if(r=ct,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",it),r.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await e.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(rt),r.renderState.layers===void 0){const vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};S=new XRWebGLLayer(r,e,vt),r.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Yi(S.framebufferWidth,S.framebufferHeight,{format:Yn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let vt=null,Ht=null,Rt=null;y.depth&&(Rt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=y.stencil?vr:fr,Ht=y.stencil?_r:ji);const Jt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:o};M=new XRWebGLBinding(r,e),x=M.createProjectionLayer(Jt),r.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new Yi(x.textureWidth,x.textureHeight,{format:Yn,type:gi,depthTexture:new Xl(x.textureWidth,x.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await r.requestReferenceSpace(l),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ht(ct){for(let vt=0;vt<ct.removed.length;vt++){const Ht=ct.removed[vt],Rt=C.indexOf(Ht);Rt>=0&&(C[Rt]=null,D[Rt].disconnect(Ht))}for(let vt=0;vt<ct.added.length;vt++){const Ht=ct.added[vt];let Rt=C.indexOf(Ht);if(Rt===-1){for(let qt=0;qt<D.length;qt++)if(qt>=C.length){C.push(Ht),Rt=qt;break}else if(C[qt]===null){C[qt]=Ht,Rt=qt;break}if(Rt===-1)break}const Jt=D[Rt];Jt&&Jt.connect(Ht)}}const G=new tt,st=new tt;function K(ct,vt,Ht){G.setFromMatrixPosition(vt.matrixWorld),st.setFromMatrixPosition(Ht.matrixWorld);const Rt=G.distanceTo(st),Jt=vt.projectionMatrix.elements,qt=Ht.projectionMatrix.elements,ne=Jt[14]/(Jt[10]-1),Pe=Jt[14]/(Jt[10]+1),Ee=(Jt[9]+1)/Jt[5],le=(Jt[9]-1)/Jt[5],W=(Jt[8]-1)/Jt[0],en=(qt[8]+1)/qt[0],ue=ne*W,he=ne*en,kt=Rt/(-W+en),Ue=kt*-W;if(vt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(Ue),ct.translateZ(kt),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Jt[10]===-1)ct.projectionMatrix.copy(vt.projectionMatrix),ct.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Wt=ne+kt,L=Pe+kt,T=ue-Ue,J=he+(Rt-Ue),ft=Ee*Pe/L*Wt,mt=le*Pe/L*Wt;ct.projectionMatrix.makePerspective(T,J,ft,mt,Wt,L),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function gt(ct,vt){vt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(vt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(r===null)return;let vt=ct.near,Ht=ct.far;R.texture!==null&&(R.depthNear>0&&(vt=R.depthNear),R.depthFar>0&&(Ht=R.depthFar)),v.near=Y.near=H.near=vt,v.far=Y.far=H.far=Ht,(w!==v.near||Z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,Z=v.far),H.layers.mask=ct.layers.mask|2,Y.layers.mask=ct.layers.mask|4,v.layers.mask=H.layers.mask|Y.layers.mask;const Rt=ct.parent,Jt=v.cameras;gt(v,Rt);for(let qt=0;qt<Jt.length;qt++)gt(Jt[qt],Rt);Jt.length===2?K(v,H,Y):v.projectionMatrix.copy(H.projectionMatrix),At(ct,v,Rt)};function At(ct,vt,Ht){Ht===null?ct.matrix.copy(vt.matrixWorld):(ct.matrix.copy(Ht.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(vt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(vt.projectionMatrix),ct.projectionMatrixInverse.copy(vt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Yo*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(ct){h=ct,x!==null&&(x.fixedFoveation=ct),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ct)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(v)};let Nt=null;function te(ct,vt){if(_=vt.getViewerPose(m||c),b=vt,_!==null){const Ht=_.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let Rt=!1;Ht.length!==v.cameras.length&&(v.cameras.length=0,Rt=!0);for(let qt=0;qt<Ht.length;qt++){const ne=Ht[qt];let Pe=null;if(S!==null)Pe=S.getViewport(ne);else{const le=M.getViewSubImage(x,ne);Pe=le.viewport,qt===0&&(t.setRenderTargetTextures(O,le.colorTexture,x.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(O))}let Ee=P[qt];Ee===void 0&&(Ee=new Nn,Ee.layers.enable(qt),Ee.viewport=new je,P[qt]=Ee),Ee.matrix.fromArray(ne.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ne.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),qt===0&&(v.matrix.copy(Ee.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Rt===!0&&v.cameras.push(Ee)}const Jt=r.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")){const qt=M.getDepthInformation(Ht[0]);qt&&qt.isValid&&qt.texture&&R.init(t,qt,r.renderState)}}for(let Ht=0;Ht<D.length;Ht++){const Rt=C[Ht],Jt=D[Ht];Rt!==null&&Jt!==void 0&&Jt.update(Rt,vt,m||c)}Nt&&Nt(ct,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),b=null}const de=new Wl;de.setAnimationLoop(te),this.setAnimationLoop=function(ct){Nt=ct},this.dispose=function(){}}}const zi=new ni,_m=new $e;function vm(i,t){function e(y,p){y.matrixAutoUpdate===!0&&y.updateMatrix(),p.value.copy(y.matrix)}function n(y,p){p.color.getRGB(y.fogColor.value,Hl(i)),p.isFog?(y.fogNear.value=p.near,y.fogFar.value=p.far):p.isFogExp2&&(y.fogDensity.value=p.density)}function r(y,p,O,D,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(y,p):p.isMeshToonMaterial?(o(y,p),M(y,p)):p.isMeshPhongMaterial?(o(y,p),_(y,p)):p.isMeshStandardMaterial?(o(y,p),x(y,p),p.isMeshPhysicalMaterial&&S(y,p,C)):p.isMeshMatcapMaterial?(o(y,p),b(y,p)):p.isMeshDepthMaterial?o(y,p):p.isMeshDistanceMaterial?(o(y,p),R(y,p)):p.isMeshNormalMaterial?o(y,p):p.isLineBasicMaterial?(c(y,p),p.isLineDashedMaterial&&l(y,p)):p.isPointsMaterial?h(y,p,O,D):p.isSpriteMaterial?m(y,p):p.isShadowMaterial?(y.color.value.copy(p.color),y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(y,p){y.opacity.value=p.opacity,p.color&&y.diffuse.value.copy(p.color),p.emissive&&y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(y.map.value=p.map,e(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.bumpMap&&(y.bumpMap.value=p.bumpMap,e(p.bumpMap,y.bumpMapTransform),y.bumpScale.value=p.bumpScale,p.side===Rn&&(y.bumpScale.value*=-1)),p.normalMap&&(y.normalMap.value=p.normalMap,e(p.normalMap,y.normalMapTransform),y.normalScale.value.copy(p.normalScale),p.side===Rn&&y.normalScale.value.negate()),p.displacementMap&&(y.displacementMap.value=p.displacementMap,e(p.displacementMap,y.displacementMapTransform),y.displacementScale.value=p.displacementScale,y.displacementBias.value=p.displacementBias),p.emissiveMap&&(y.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,y.emissiveMapTransform)),p.specularMap&&(y.specularMap.value=p.specularMap,e(p.specularMap,y.specularMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest);const O=t.get(p),D=O.envMap,C=O.envMapRotation;D&&(y.envMap.value=D,zi.copy(C),zi.x*=-1,zi.y*=-1,zi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),y.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(zi)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=p.reflectivity,y.ior.value=p.ior,y.refractionRatio.value=p.refractionRatio),p.lightMap&&(y.lightMap.value=p.lightMap,y.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,y.lightMapTransform)),p.aoMap&&(y.aoMap.value=p.aoMap,y.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,y.aoMapTransform))}function c(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,p.map&&(y.map.value=p.map,e(p.map,y.mapTransform))}function l(y,p){y.dashSize.value=p.dashSize,y.totalSize.value=p.dashSize+p.gapSize,y.scale.value=p.scale}function h(y,p,O,D){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.size.value=p.size*O,y.scale.value=D*.5,p.map&&(y.map.value=p.map,e(p.map,y.uvTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function m(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.rotation.value=p.rotation,p.map&&(y.map.value=p.map,e(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function _(y,p){y.specular.value.copy(p.specular),y.shininess.value=Math.max(p.shininess,1e-4)}function M(y,p){p.gradientMap&&(y.gradientMap.value=p.gradientMap)}function x(y,p){y.metalness.value=p.metalness,p.metalnessMap&&(y.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,y.metalnessMapTransform)),y.roughness.value=p.roughness,p.roughnessMap&&(y.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,y.roughnessMapTransform)),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)}function S(y,p,O){y.ior.value=p.ior,p.sheen>0&&(y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(y.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,y.sheenColorMapTransform)),p.sheenRoughnessMap&&(y.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,y.sheenRoughnessMapTransform))),p.clearcoat>0&&(y.clearcoat.value=p.clearcoat,y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(y.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(y.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&y.clearcoatNormalScale.value.negate())),p.dispersion>0&&(y.dispersion.value=p.dispersion),p.iridescence>0&&(y.iridescence.value=p.iridescence,y.iridescenceIOR.value=p.iridescenceIOR,y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(y.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),p.transmission>0&&(y.transmission.value=p.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),p.transmissionMap&&(y.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,y.transmissionMapTransform)),y.thickness.value=p.thickness,p.thicknessMap&&(y.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=p.attenuationDistance,y.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(y.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(y.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=p.specularIntensity,y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(y.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,y.specularColorMapTransform)),p.specularIntensityMap&&(y.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,p){p.matcap&&(y.matcap.value=p.matcap)}function R(y,p){const O=t.get(p).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function xm(i,t,e,n){let r={},o={},c=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,D){const C=D.program;n.uniformBlockBinding(O,C)}function m(O,D){let C=r[O.id];C===void 0&&(b(O),C=_(O),r[O.id]=C,O.addEventListener("dispose",y));const rt=D.program;n.updateUBOMapping(O,rt);const V=t.render.frame;o[O.id]!==V&&(x(O),o[O.id]=V)}function _(O){const D=M();O.__bindingPointIndex=D;const C=i.createBuffer(),rt=O.__size,V=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,rt,V),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,C),C}function M(){for(let O=0;O<l;O++)if(c.indexOf(O)===-1)return c.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const D=r[O.id],C=O.uniforms,rt=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let V=0,H=C.length;V<H;V++){const Y=Array.isArray(C[V])?C[V]:[C[V]];for(let P=0,v=Y.length;P<v;P++){const w=Y[P];if(S(w,V,P,rt)===!0){const Z=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let it=0;for(let ht=0;ht<z.length;ht++){const G=z[ht],st=R(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,Z+it,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,it),it+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(O,D,C,rt){const V=O.value,H=D+"_"+C;if(rt[H]===void 0)return typeof V=="number"||typeof V=="boolean"?rt[H]=V:rt[H]=V.clone(),!0;{const Y=rt[H];if(typeof V=="number"||typeof V=="boolean"){if(Y!==V)return rt[H]=V,!0}else if(Y.equals(V)===!1)return Y.copy(V),!0}return!1}function b(O){const D=O.uniforms;let C=0;const rt=16;for(let H=0,Y=D.length;H<Y;H++){const P=Array.isArray(D[H])?D[H]:[D[H]];for(let v=0,w=P.length;v<w;v++){const Z=P[v],z=Array.isArray(Z.value)?Z.value:[Z.value];for(let it=0,ht=z.length;it<ht;it++){const G=z[it],st=R(G),K=C%rt,gt=K%st.boundary,At=K+gt;C+=gt,At!==0&&rt-At<st.storage&&(C+=rt-At),Z.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=C,C+=st.storage}}}const V=C%rt;return V>0&&(C+=rt-V),O.__size=C,O.__cache={},this}function R(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function y(O){const D=O.target;D.removeEventListener("dispose",y);const C=c.indexOf(D.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete o[D.id]}function p(){for(const O in r)i.deleteBuffer(r[O]);c=[],r={},o={}}return{bind:h,update:m,dispose:p}}class Mm{constructor(t={}){const{canvas:e=su(),context:n=null,depth:r=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:M=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=c;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,p=null;const O=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Ri,this.toneMappingExposure=1;const C=this;let rt=!1,V=0,H=0,Y=null,P=-1,v=null;const w=new je,Z=new je;let z=null;const it=new ke(0);let ht=0,G=e.width,st=e.height,K=1,gt=null,At=null;const Nt=new je(0,0,G,st),te=new je(0,0,G,st);let de=!1;const ct=new ia;let vt=!1,Ht=!1;const Rt=new $e,Jt=new $e,qt=new tt,ne=new je,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function le(){return Y===null?K:1}let W=n;function en(A,j){return e.getContext(A,j)}try{const A={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:M};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ko}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",pt,!1),W===null){const j="webgl2";if(W=en(j,A),W===null)throw en(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,he,kt,Ue,Wt,L,T,J,ft,mt,at,Ot,St,Lt,Te,Mt,It,Yt,Kt,Ut,Zt,ie,Fe,B;function Tt(){ue=new Ad(W),ue.init(),ie=new um(W,ue),he=new vd(W,ue,t,ie),kt=new am(W,ue),he.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),Ue=new Rd(W),Wt=new jp,L=new cm(W,ue,kt,Wt,he,ie,Ue),T=new Md(C),J=new Td(C),ft=new Du(W),Fe=new gd(W,ft),mt=new bd(W,ft,Ue,Fe),at=new Pd(W,mt,ft,Ue),Kt=new Cd(W,he,L),Mt=new xd(Wt),Ot=new Xp(C,T,J,ue,he,Fe,Mt),St=new vm(C,Wt),Lt=new qp,Te=new tm(ue),Yt=new md(C,T,J,kt,at,S,h),It=new sm(C,at,he),B=new xm(W,Ue,he,kt),Ut=new _d(W,ue,Ue),Zt=new wd(W,ue,Ue),Ue.programs=Ot.programs,C.capabilities=he,C.extensions=ue,C.properties=Wt,C.renderLists=Lt,C.shadowMap=It,C.state=kt,C.info=Ue}Tt();const ot=new gm(C,W);this.xr=ot,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(G,st,!1))},this.getSize=function(A){return A.set(G,st)},this.setSize=function(A,j,et=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,st=j,e.width=Math.floor(A*K),e.height=Math.floor(j*K),et===!0&&(e.style.width=A+"px",e.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(G*K,st*K).floor()},this.setDrawingBufferSize=function(A,j,et){G=A,st=j,K=et,e.width=Math.floor(A*et),e.height=Math.floor(j*et),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(Nt)},this.setViewport=function(A,j,et,Q){A.isVector4?Nt.set(A.x,A.y,A.z,A.w):Nt.set(A,j,et,Q),kt.viewport(w.copy(Nt).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,j,et,Q){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,j,et,Q),kt.scissor(Z.copy(te).multiplyScalar(K).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(A){kt.setScissorTest(de=A)},this.setOpaqueSort=function(A){gt=A},this.setTransparentSort=function(A){At=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(A=!0,j=!0,et=!0){let Q=0;if(A){let X=!1;if(Y!==null){const xt=Y.texture.format;X=xt===ea||xt===ta||xt===Qo}if(X){const xt=Y.texture.type,wt=xt===gi||xt===ji||xt===Nr||xt===_r||xt===$o||xt===Jo,Bt=Yt.getClearColor(),zt=Yt.getClearAlpha(),Qt=Bt.r,$t=Bt.g,Gt=Bt.b;wt?(b[0]=Qt,b[1]=$t,b[2]=Gt,b[3]=zt,W.clearBufferuiv(W.COLOR,0,b)):(R[0]=Qt,R[1]=$t,R[2]=Gt,R[3]=zt,W.clearBufferiv(W.COLOR,0,R))}else Q|=W.COLOR_BUFFER_BIT}j&&(Q|=W.DEPTH_BUFFER_BIT),et&&(Q|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Lt.dispose(),Te.dispose(),Wt.dispose(),T.dispose(),J.dispose(),at.dispose(),Fe.dispose(),B.dispose(),Ot.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",un),ot.removeEventListener("sessionend",Fn),rn.stop()};function dt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),rt=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),rt=!1;const A=Ue.autoReset,j=It.enabled,et=It.autoUpdate,Q=It.needsUpdate,X=It.type;Tt(),Ue.autoReset=A,It.enabled=j,It.autoUpdate=et,It.needsUpdate=Q,It.type=X}function pt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ee(A){const j=A.target;j.removeEventListener("dispose",ee),Ge(j)}function Ge(A){Je(A),Wt.remove(A)}function Je(A){const j=Wt.get(A).programs;j!==void 0&&(j.forEach(function(et){Ot.releaseProgram(et)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,et,Q,X,xt){j===null&&(j=Pe);const wt=X.isMesh&&X.matrixWorld.determinant()<0,Bt=ii(A,j,et,Q,X);kt.setMaterial(Q,wt);let zt=et.index,Qt=1;if(Q.wireframe===!0){if(zt=mt.getWireframeAttribute(et),zt===void 0)return;Qt=2}const $t=et.drawRange,Gt=et.attributes.position;let Me=$t.start*Qt,ye=($t.start+$t.count)*Qt;xt!==null&&(Me=Math.max(Me,xt.start*Qt),ye=Math.min(ye,(xt.start+xt.count)*Qt)),zt!==null?(Me=Math.max(Me,0),ye=Math.min(ye,zt.count)):Gt!=null&&(Me=Math.max(Me,0),ye=Math.min(ye,Gt.count));const Be=ye-Me;if(Be<0||Be===1/0)return;Fe.setup(X,Q,Bt,et,zt);let sn,De=Ut;if(zt!==null&&(sn=ft.get(zt),De=Zt,De.setIndex(sn)),X.isMesh)Q.wireframe===!0?(kt.setLineWidth(Q.wireframeLinewidth*le()),De.setMode(W.LINES)):De.setMode(W.TRIANGLES);else if(X.isLine){let Vt=Q.linewidth;Vt===void 0&&(Vt=1),kt.setLineWidth(Vt*le()),X.isLineSegments?De.setMode(W.LINES):X.isLineLoop?De.setMode(W.LINE_LOOP):De.setMode(W.LINE_STRIP)}else X.isPoints?De.setMode(W.POINTS):X.isSprite&&De.setMode(W.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)De.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))De.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Vt=X._multiDrawStarts,Mn=X._multiDrawCounts,Ie=X._multiDrawCount,gn=zt?ft.get(zt).bytesPerElement:1,kn=Wt.get(Q).currentProgram.getUniforms();for(let hn=0;hn<Ie;hn++)kn.setValue(W,"_gl_DrawID",hn),De.render(Vt[hn]/gn,Mn[hn])}else if(X.isInstancedMesh)De.renderInstances(Me,Be,X.count);else if(et.isInstancedBufferGeometry){const Vt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Mn=Math.min(et.instanceCount,Vt);De.renderInstances(Me,Be,Mn)}else De.render(Me,Be)};function Ae(A,j,et){A.transparent===!0&&A.side===hi&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,_i(A,j,et),A.side=Ci,A.needsUpdate=!0,_i(A,j,et),A.side=hi):_i(A,j,et)}this.compile=function(A,j,et=null){et===null&&(et=A),p=Te.get(et),p.init(j),D.push(p),et.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),A!==et&&A.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Q=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xt=X.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){const Bt=xt[wt];Ae(Bt,et,X),Q.add(Bt)}else Ae(xt,et,X),Q.add(xt)}),D.pop(),p=null,Q},this.compileAsync=function(A,j,et=null){const Q=this.compile(A,j,et);return new Promise(X=>{function xt(){if(Q.forEach(function(wt){Wt.get(wt).currentProgram.isReady()&&Q.delete(wt)}),Q.size===0){X(A);return}setTimeout(xt,10)}ue.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Ze=null;function xn(A){Ze&&Ze(A)}function un(){rn.stop()}function Fn(){rn.start()}const rn=new Wl;rn.setAnimationLoop(xn),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(A){Ze=A,ot.setAnimationLoop(A),A===null?rn.stop():rn.start()},ot.addEventListener("sessionstart",un),ot.addEventListener("sessionend",Fn),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(rt===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(j),j=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,j,Y),p=Te.get(A,D.length),p.init(j),D.push(p),Jt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ct.setFromProjectionMatrix(Jt),Ht=this.localClippingEnabled,vt=Mt.init(this.clippingPlanes,Ht),y=Lt.get(A,O.length),y.init(),O.push(y),ot.enabled===!0&&ot.isPresenting===!0){const xt=C.xr.getDepthSensingMesh();xt!==null&&Ln(xt,j,-1/0,C.sortObjects)}Ln(A,j,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(gt,At),Ee=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ee&&Yt.addToRenderList(y,A),this.info.render.frame++,vt===!0&&Mt.beginShadows();const et=p.state.shadowsArray;It.render(et,A,j),vt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,X=y.transmissive;if(p.setupLights(),j.isArrayCamera){const xt=j.cameras;if(X.length>0)for(let wt=0,Bt=xt.length;wt<Bt;wt++){const zt=xt[wt];We(Q,X,A,zt)}Ee&&Yt.render(A);for(let wt=0,Bt=xt.length;wt<Bt;wt++){const zt=xt[wt];Qe(y,A,zt,zt.viewport)}}else X.length>0&&We(Q,X,A,j),Ee&&Yt.render(A),Qe(y,A,j);Y!==null&&(L.updateMultisampleRenderTarget(Y),L.updateRenderTargetMipmap(Y)),A.isScene===!0&&A.onAfterRender(C,A,j),Fe.resetDefaultState(),P=-1,v=null,D.pop(),D.length>0?(p=D[D.length-1],vt===!0&&Mt.setGlobalState(C.clippingPlanes,p.state.camera)):p=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ln(A,j,et,Q){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ct.intersectsSprite(A)){Q&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Jt);const wt=at.update(A),Bt=A.material;Bt.visible&&y.push(A,wt,Bt,et,ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ct.intersectsObject(A))){const wt=at.update(A),Bt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ne.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ne.copy(wt.boundingSphere.center)),ne.applyMatrix4(A.matrixWorld).applyMatrix4(Jt)),Array.isArray(Bt)){const zt=wt.groups;for(let Qt=0,$t=zt.length;Qt<$t;Qt++){const Gt=zt[Qt],Me=Bt[Gt.materialIndex];Me&&Me.visible&&y.push(A,wt,Me,et,ne.z,Gt)}}else Bt.visible&&y.push(A,wt,Bt,et,ne.z,null)}}const xt=A.children;for(let wt=0,Bt=xt.length;wt<Bt;wt++)Ln(xt[wt],j,et,Q)}function Qe(A,j,et,Q){const X=A.opaque,xt=A.transmissive,wt=A.transparent;p.setupLightsView(et),vt===!0&&Mt.setGlobalState(C.clippingPlanes,et),Q&&kt.viewport(w.copy(Q)),X.length>0&&dn(X,j,et),xt.length>0&&dn(xt,j,et),wt.length>0&&dn(wt,j,et),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function We(A,j,et,Q){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Yi(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Fr:gi,minFilter:Xi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const xt=p.state.transmissionRenderTarget[Q.id],wt=Q.viewport||w;xt.setSize(wt.z,wt.w);const Bt=C.getRenderTarget();C.setRenderTarget(xt),C.getClearColor(it),ht=C.getClearAlpha(),ht<1&&C.setClearColor(16777215,.5),C.clear(),Ee&&Yt.render(et);const zt=C.toneMapping;C.toneMapping=Ri;const Qt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),vt===!0&&Mt.setGlobalState(C.clippingPlanes,Q),dn(A,et,Q),L.updateMultisampleRenderTarget(xt),L.updateRenderTargetMipmap(xt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Gt=0,Me=j.length;Gt<Me;Gt++){const ye=j[Gt],Be=ye.object,sn=ye.geometry,De=ye.material,Vt=ye.group;if(De.side===hi&&Be.layers.test(Q.layers)){const Mn=De.side;De.side=Rn,De.needsUpdate=!0,Kn(Be,et,Q,sn,De,Vt),De.side=Mn,De.needsUpdate=!0,$t=!0}}$t===!0&&(L.updateMultisampleRenderTarget(xt),L.updateRenderTargetMipmap(xt))}C.setRenderTarget(Bt),C.setClearColor(it,ht),Qt!==void 0&&(Q.viewport=Qt),C.toneMapping=zt}function dn(A,j,et){const Q=j.isScene===!0?j.overrideMaterial:null;for(let X=0,xt=A.length;X<xt;X++){const wt=A[X],Bt=wt.object,zt=wt.geometry,Qt=Q===null?wt.material:Q,$t=wt.group;Bt.layers.test(et.layers)&&Kn(Bt,j,et,zt,Qt,$t)}}function Kn(A,j,et,Q,X,xt){A.onBeforeRender(C,j,et,Q,X,xt),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(C,j,et,Q,A,xt),X.transparent===!0&&X.side===hi&&X.forceSinglePass===!1?(X.side=Rn,X.needsUpdate=!0,C.renderBufferDirect(et,j,Q,X,A,xt),X.side=Ci,X.needsUpdate=!0,C.renderBufferDirect(et,j,Q,X,A,xt),X.side=hi):C.renderBufferDirect(et,j,Q,X,A,xt),A.onAfterRender(C,j,et,Q,X,xt)}function _i(A,j,et){j.isScene!==!0&&(j=Pe);const Q=Wt.get(A),X=p.state.lights,xt=p.state.shadowsArray,wt=X.state.version,Bt=Ot.getParameters(A,X.state,xt,j,et),zt=Ot.getProgramCacheKey(Bt);let Qt=Q.programs;Q.environment=A.isMeshStandardMaterial?j.environment:null,Q.fog=j.fog,Q.envMap=(A.isMeshStandardMaterial?J:T).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",ee),Qt=new Map,Q.programs=Qt);let $t=Qt.get(zt);if($t!==void 0){if(Q.currentProgram===$t&&Q.lightsStateVersion===wt)return vi(A,Bt),$t}else Bt.uniforms=Ot.getUniforms(A),A.onBeforeCompile(Bt,C),$t=Ot.acquireProgram(Bt,zt),Qt.set(zt,$t),Q.uniforms=Bt.uniforms;const Gt=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Gt.clippingPlanes=Mt.uniform),vi(A,Bt),Q.needsLights=Ki(A),Q.lightsStateVersion=wt,Q.needsLights&&(Gt.ambientLightColor.value=X.state.ambient,Gt.lightProbe.value=X.state.probe,Gt.directionalLights.value=X.state.directional,Gt.directionalLightShadows.value=X.state.directionalShadow,Gt.spotLights.value=X.state.spot,Gt.spotLightShadows.value=X.state.spotShadow,Gt.rectAreaLights.value=X.state.rectArea,Gt.ltc_1.value=X.state.rectAreaLTC1,Gt.ltc_2.value=X.state.rectAreaLTC2,Gt.pointLights.value=X.state.point,Gt.pointLightShadows.value=X.state.pointShadow,Gt.hemisphereLights.value=X.state.hemi,Gt.directionalShadowMap.value=X.state.directionalShadowMap,Gt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Gt.spotShadowMap.value=X.state.spotShadowMap,Gt.spotLightMatrix.value=X.state.spotLightMatrix,Gt.spotLightMap.value=X.state.spotLightMap,Gt.pointShadowMap.value=X.state.pointShadowMap,Gt.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=$t,Q.uniformsList=null,$t}function En(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=xs.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function vi(A,j){const et=Wt.get(A);et.outputColorSpace=j.outputColorSpace,et.batching=j.batching,et.batchingColor=j.batchingColor,et.instancing=j.instancing,et.instancingColor=j.instancingColor,et.instancingMorph=j.instancingMorph,et.skinning=j.skinning,et.morphTargets=j.morphTargets,et.morphNormals=j.morphNormals,et.morphColors=j.morphColors,et.morphTargetsCount=j.morphTargetsCount,et.numClippingPlanes=j.numClippingPlanes,et.numIntersection=j.numClipIntersection,et.vertexAlphas=j.vertexAlphas,et.vertexTangents=j.vertexTangents,et.toneMapping=j.toneMapping}function ii(A,j,et,Q,X){j.isScene!==!0&&(j=Pe),L.resetTextureUnits();const xt=j.fog,wt=Q.isMeshStandardMaterial?j.environment:null,Bt=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Mr,zt=(Q.isMeshStandardMaterial?J:T).get(Q.envMap||wt),Qt=Q.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,$t=!!et.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Gt=!!et.morphAttributes.position,Me=!!et.morphAttributes.normal,ye=!!et.morphAttributes.color;let Be=Ri;Q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Be=C.toneMapping);const sn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,De=sn!==void 0?sn.length:0,Vt=Wt.get(Q),Mn=p.state.lights;if(vt===!0&&(Ht===!0||A!==v)){const on=A===v&&Q.id===P;Mt.setState(Q,A,on)}let Ie=!1;Q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Mn.state.version||Vt.outputColorSpace!==Bt||X.isBatchedMesh&&Vt.batching===!1||!X.isBatchedMesh&&Vt.batching===!0||X.isBatchedMesh&&Vt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Vt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Vt.instancing===!1||!X.isInstancedMesh&&Vt.instancing===!0||X.isSkinnedMesh&&Vt.skinning===!1||!X.isSkinnedMesh&&Vt.skinning===!0||X.isInstancedMesh&&Vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Vt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Vt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Vt.instancingMorph===!1&&X.morphTexture!==null||Vt.envMap!==zt||Q.fog===!0&&Vt.fog!==xt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Mt.numPlanes||Vt.numIntersection!==Mt.numIntersection)||Vt.vertexAlphas!==Qt||Vt.vertexTangents!==$t||Vt.morphTargets!==Gt||Vt.morphNormals!==Me||Vt.morphColors!==ye||Vt.toneMapping!==Be||Vt.morphTargetsCount!==De)&&(Ie=!0):(Ie=!0,Vt.__version=Q.version);let gn=Vt.currentProgram;Ie===!0&&(gn=_i(Q,j,X));let kn=!1,hn=!1,On=!1;const fe=gn.getUniforms(),yn=Vt.uniforms;if(kt.useProgram(gn.program)&&(kn=!0,hn=!0,On=!0),Q.id!==P&&(P=Q.id,hn=!0),kn||v!==A){kt.buffers.depth.getReversed()?(Rt.copy(A.projectionMatrix),au(Rt),lu(Rt),fe.setValue(W,"projectionMatrix",Rt)):fe.setValue(W,"projectionMatrix",A.projectionMatrix),fe.setValue(W,"viewMatrix",A.matrixWorldInverse);const Un=fe.map.cameraPosition;Un!==void 0&&Un.setValue(W,qt.setFromMatrixPosition(A.matrixWorld)),he.logarithmicDepthBuffer&&fe.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&fe.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,hn=!0,On=!0)}if(X.isSkinnedMesh){fe.setOptional(W,X,"bindMatrix"),fe.setOptional(W,X,"bindMatrixInverse");const on=X.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),fe.setValue(W,"boneTexture",on.boneTexture,L))}X.isBatchedMesh&&(fe.setOptional(W,X,"batchingTexture"),fe.setValue(W,"batchingTexture",X._matricesTexture,L),fe.setOptional(W,X,"batchingIdTexture"),fe.setValue(W,"batchingIdTexture",X._indirectTexture,L),fe.setOptional(W,X,"batchingColorTexture"),X._colorsTexture!==null&&fe.setValue(W,"batchingColorTexture",X._colorsTexture,L));const $n=et.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Kt.update(X,et,gn),(hn||Vt.receiveShadow!==X.receiveShadow)&&(Vt.receiveShadow=X.receiveShadow,fe.setValue(W,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(yn.envMap.value=zt,yn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&j.environment!==null&&(yn.envMapIntensity.value=j.environmentIntensity),hn&&(fe.setValue(W,"toneMappingExposure",C.toneMappingExposure),Vt.needsLights&&Zn(yn,On),xt&&Q.fog===!0&&St.refreshFogUniforms(yn,xt),St.refreshMaterialUniforms(yn,Q,K,st,p.state.transmissionRenderTarget[A.id]),xs.upload(W,En(Vt),yn,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(xs.upload(W,En(Vt),yn,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&fe.setValue(W,"center",X.center),fe.setValue(W,"modelViewMatrix",X.modelViewMatrix),fe.setValue(W,"normalMatrix",X.normalMatrix),fe.setValue(W,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const on=Q.uniformsGroups;for(let Un=0,Tn=on.length;Un<Tn;Un++){const Ui=on[Un];B.update(Ui,gn),B.bind(Ui,gn)}}return gn}function Zn(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Ki(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,j,et){Wt.get(A.texture).__webglTexture=j,Wt.get(A.depthTexture).__webglTexture=et;const Q=Wt.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=et===void 0,Q.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const et=Wt.get(A);et.__webglFramebuffer=j,et.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,et=0){Y=A,V=j,H=et;let Q=!0,X=null,xt=!1,wt=!1;if(A){const zt=Wt.get(A);if(zt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(W.FRAMEBUFFER,null),Q=!1;else if(zt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(zt.__hasExternalTextures)L.rebindTextures(A,Wt.get(A.texture).__webglTexture,Wt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Gt=A.depthTexture;if(zt.__boundDepthTexture!==Gt){if(Gt!==null&&Wt.has(Gt)&&(A.width!==Gt.image.width||A.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const $t=Wt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[j])?X=$t[j][et]:X=$t[j],xt=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?X=Wt.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?X=$t[et]:X=$t,w.copy(A.viewport),Z.copy(A.scissor),z=A.scissorTest}else w.copy(Nt).multiplyScalar(K).floor(),Z.copy(te).multiplyScalar(K).floor(),z=de;if(kt.bindFramebuffer(W.FRAMEBUFFER,X)&&Q&&kt.drawBuffers(A,X),kt.viewport(w),kt.scissor(Z),kt.setScissorTest(z),xt){const zt=Wt.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+j,zt.__webglTexture,et)}else if(wt){const zt=Wt.get(A.texture),Qt=j||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,zt.__webglTexture,et||0,Qt)}P=-1},this.readRenderTargetPixels=function(A,j,et,Q,X,xt,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt){kt.bindFramebuffer(W.FRAMEBUFFER,Bt);try{const zt=A.texture,Qt=zt.format,$t=zt.type;if(!he.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-Q&&et>=0&&et<=A.height-X&&W.readPixels(j,et,Q,X,ie.convert(Qt),ie.convert($t),xt)}finally{const zt=Y!==null?Wt.get(Y).__webglFramebuffer:null;kt.bindFramebuffer(W.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,j,et,Q,X,xt,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt){const zt=A.texture,Qt=zt.format,$t=zt.type;if(!he.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-Q&&et>=0&&et<=A.height-X){kt.bindFramebuffer(W.FRAMEBUFFER,Bt);const Gt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Gt),W.bufferData(W.PIXEL_PACK_BUFFER,xt.byteLength,W.STREAM_READ),W.readPixels(j,et,Q,X,ie.convert(Qt),ie.convert($t),0);const Me=Y!==null?Wt.get(Y).__webglFramebuffer:null;kt.bindFramebuffer(W.FRAMEBUFFER,Me);const ye=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ou(W,ye,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Gt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,xt),W.deleteBuffer(Gt),W.deleteSync(ye),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,et=0){A.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-et),X=Math.floor(A.image.width*Q),xt=Math.floor(A.image.height*Q),wt=j!==null?j.x:0,Bt=j!==null?j.y:0;L.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,et,0,0,wt,Bt,X,xt),kt.unbindTexture()},this.copyTextureToTexture=function(A,j,et=null,Q=null,X=0){A.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],j=arguments[2],X=arguments[3]||0,et=null);let xt,wt,Bt,zt,Qt,$t,Gt,Me,ye;const Be=A.isCompressedTexture?A.mipmaps[X]:A.image;et!==null?(xt=et.max.x-et.min.x,wt=et.max.y-et.min.y,Bt=et.isBox3?et.max.z-et.min.z:1,zt=et.min.x,Qt=et.min.y,$t=et.isBox3?et.min.z:0):(xt=Be.width,wt=Be.height,Bt=Be.depth||1,zt=0,Qt=0,$t=0),Q!==null?(Gt=Q.x,Me=Q.y,ye=Q.z):(Gt=0,Me=0,ye=0);const sn=ie.convert(j.format),De=ie.convert(j.type);let Vt;j.isData3DTexture?(L.setTexture3D(j,0),Vt=W.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),Vt=W.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),Vt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment);const Mn=W.getParameter(W.UNPACK_ROW_LENGTH),Ie=W.getParameter(W.UNPACK_IMAGE_HEIGHT),gn=W.getParameter(W.UNPACK_SKIP_PIXELS),kn=W.getParameter(W.UNPACK_SKIP_ROWS),hn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Be.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Be.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,zt),W.pixelStorei(W.UNPACK_SKIP_ROWS,Qt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,$t);const On=A.isDataArrayTexture||A.isData3DTexture,fe=j.isDataArrayTexture||j.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const yn=Wt.get(A),$n=Wt.get(j),on=Wt.get(yn.__renderTarget),Un=Wt.get($n.__renderTarget);kt.bindFramebuffer(W.READ_FRAMEBUFFER,on.__webglFramebuffer),kt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Tn=0;Tn<Bt;Tn++)On&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Wt.get(A).__webglTexture,X,$t+Tn),A.isDepthTexture?(fe&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Wt.get(j).__webglTexture,X,ye+Tn),W.blitFramebuffer(zt,Qt,xt,wt,Gt,Me,xt,wt,W.DEPTH_BUFFER_BIT,W.NEAREST)):fe?W.copyTexSubImage3D(Vt,X,Gt,Me,ye+Tn,zt,Qt,xt,wt):W.copyTexSubImage2D(Vt,X,Gt,Me,ye+Tn,zt,Qt,xt,wt);kt.bindFramebuffer(W.READ_FRAMEBUFFER,null),kt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else fe?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Vt,X,Gt,Me,ye,xt,wt,Bt,sn,De,Be.data):j.isCompressedArrayTexture?W.compressedTexSubImage3D(Vt,X,Gt,Me,ye,xt,wt,Bt,sn,Be.data):W.texSubImage3D(Vt,X,Gt,Me,ye,xt,wt,Bt,sn,De,Be):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,X,Gt,Me,xt,wt,sn,De,Be.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,X,Gt,Me,Be.width,Be.height,sn,Be.data):W.texSubImage2D(W.TEXTURE_2D,X,Gt,Me,xt,wt,sn,De,Be);W.pixelStorei(W.UNPACK_ROW_LENGTH,Mn),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ie),W.pixelStorei(W.UNPACK_SKIP_PIXELS,gn),W.pixelStorei(W.UNPACK_SKIP_ROWS,kn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,hn),X===0&&j.generateMipmaps&&W.generateMipmap(Vt),kt.unbindTexture()},this.copyTextureToTexture3D=function(A,j,et=null,Q=null,X=0){return A.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],j=arguments[3],X=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,et,Q,X)},this.initRenderTarget=function(A){Wt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){V=0,H=0,Y=null,kt.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Oe._getUnpackColorSpace()}}class ym extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sa extends Li{constructor(t=1,e=32,n=16,r=0,o=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:o,thetaStart:c,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(c+l,Math.PI);let m=0;const _=[],M=new tt,x=new tt,S=[],b=[],R=[],y=[];for(let p=0;p<=n;p++){const O=[],D=p/n;let C=0;p===0&&c===0?C=.5/e:p===n&&h===Math.PI&&(C=-.5/e);for(let rt=0;rt<=e;rt++){const V=rt/e;M.x=-t*Math.cos(r+V*o)*Math.sin(c+D*l),M.y=t*Math.cos(c+D*l),M.z=t*Math.sin(r+V*o)*Math.sin(c+D*l),b.push(M.x,M.y,M.z),x.copy(M).normalize(),R.push(x.x,x.y,x.z),y.push(V+C,1-D),O.push(m++)}_.push(O)}for(let p=0;p<n;p++)for(let O=0;O<e;O++){const D=_[p][O+1],C=_[p][O],rt=_[p+1][O],V=_[p+1][O+1];(p!==0||c>0)&&S.push(D,C,V),(p!==n-1||h<Math.PI)&&S.push(C,rt,V)}this.setIndex(S),this.setAttribute("position",new ei(b,3)),this.setAttribute("normal",new ei(R,3)),this.setAttribute("uv",new ei(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ro extends Gr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zl extends Pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const so=new $e,ml=new tt,gl=new tt;class Sm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(ml),gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gl),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _l=new $e,Ur=new tt,oo=new tt;class Em extends Sm{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new tt(1,0,0),new tt(-1,0,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,1,0),new tt(0,-1,0)],this._cubeUps=[new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,0,1),new tt(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),oo.copy(n.position),oo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oo),n.updateMatrixWorld(),r.makeTranslation(-Ur.x,-Ur.y,-Ur.z),_l.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l)}}class Tm extends Zl{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Em}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Am extends Zl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);var bm={};(function(){var i;function t(s){var u=0;return function(){return u<s.length?{done:!1,value:s[u++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,d){return s==Array.prototype||s==Object.prototype||(s[u]=d.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof pi=="object"&&pi];for(var u=0;u<s.length;++u){var d=s[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function o(s,u){if(u)t:{var d=r;s=s.split(".");for(var E=0;E<s.length-1;E++){var U=s[E];if(!(U in d))break t;d=d[U]}s=s[s.length-1],E=d[s],u=u(E),u!=E&&u!=null&&e(d,s,{configurable:!0,writable:!0,value:u})}}o("Symbol",function(s){function u(F){if(this instanceof u)throw new TypeError("Symbol is not a constructor");return new d(E+(F||"")+"_"+U++,F)}function d(F,I){this.h=F,e(this,"description",{configurable:!0,writable:!0,value:I})}if(s)return s;d.prototype.toString=function(){return this.h};var E="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",U=0;return u}),o("Symbol.iterator",function(s){if(s)return s;s=Symbol("Symbol.iterator");for(var u="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<u.length;d++){var E=r[u[d]];typeof E=="function"&&typeof E.prototype[s]!="function"&&e(E.prototype,s,{configurable:!0,writable:!0,value:function(){return c(t(this))}})}return s});function c(s){return s={next:s},s[Symbol.iterator]=function(){return this},s}function l(s){var u=typeof Symbol<"u"&&Symbol.iterator&&s[Symbol.iterator];return u?u.call(s):{next:t(s)}}function h(s){if(!(s instanceof Array)){s=l(s);for(var u,d=[];!(u=s.next()).done;)d.push(u.value);s=d}return s}var m=typeof Object.assign=="function"?Object.assign:function(s,u){for(var d=1;d<arguments.length;d++){var E=arguments[d];if(E)for(var U in E)Object.prototype.hasOwnProperty.call(E,U)&&(s[U]=E[U])}return s};o("Object.assign",function(s){return s||m});var _=typeof Object.create=="function"?Object.create:function(s){function u(){}return u.prototype=s,new u},M;if(typeof Object.setPrototypeOf=="function")M=Object.setPrototypeOf;else{var x;t:{var S={a:!0},b={};try{b.__proto__=S,x=b.a;break t}catch{}x=!1}M=x?function(s,u){if(s.__proto__=u,s.__proto__!==u)throw new TypeError(s+" is not extensible");return s}:null}var R=M;function y(s,u){if(s.prototype=_(u.prototype),s.prototype.constructor=s,R)R(s,u);else for(var d in u)if(d!="prototype")if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(u,d);E&&Object.defineProperty(s,d,E)}else s[d]=u[d];s.ya=u.prototype}function p(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function O(s){if(s.m)throw new TypeError("Generator is already running");s.m=!0}p.prototype.u=function(s){this.i=s};function D(s,u){s.l={ma:u,na:!0},s.h=s.s||s.v}p.prototype.return=function(s){this.l={return:s},this.h=this.v};function C(s,u,d){return s.h=d,{value:u}}function rt(s){this.h=new p,this.i=s}function V(s,u){O(s.h);var d=s.h.j;return d?H(s,"return"in d?d.return:function(E){return{value:E,done:!0}},u,s.h.return):(s.h.return(u),Y(s))}function H(s,u,d,E){try{var U=u.call(s.h.j,d);if(!(U instanceof Object))throw new TypeError("Iterator result "+U+" is not an object");if(!U.done)return s.h.m=!1,U;var F=U.value}catch(I){return s.h.j=null,D(s.h,I),Y(s)}return s.h.j=null,E.call(s.h,F),Y(s)}function Y(s){for(;s.h.h;)try{var u=s.i(s.h);if(u)return s.h.m=!1,{value:u.value,done:!1}}catch(d){s.h.i=void 0,D(s.h,d)}if(s.h.m=!1,s.h.l){if(u=s.h.l,s.h.l=null,u.na)throw u.ma;return{value:u.return,done:!0}}return{value:void 0,done:!0}}function P(s){this.next=function(u){return O(s.h),s.h.j?u=H(s,s.h.j.next,u,s.h.u):(s.h.u(u),u=Y(s)),u},this.throw=function(u){return O(s.h),s.h.j?u=H(s,s.h.j.throw,u,s.h.u):(D(s.h,u),u=Y(s)),u},this.return=function(u){return V(s,u)},this[Symbol.iterator]=function(){return this}}function v(s){function u(E){return s.next(E)}function d(E){return s.throw(E)}return new Promise(function(E,U){function F(I){I.done?E(I.value):Promise.resolve(I.value).then(u,d).then(F,U)}F(s.next())})}function w(s){return v(new P(new rt(s)))}o("Promise",function(s){function u(I){this.i=0,this.j=void 0,this.h=[],this.u=!1;var k=this.l();try{I(k.resolve,k.reject)}catch(nt){k.reject(nt)}}function d(){this.h=null}function E(I){return I instanceof u?I:new u(function(k){k(I)})}if(s)return s;d.prototype.i=function(I){if(this.h==null){this.h=[];var k=this;this.j(function(){k.m()})}this.h.push(I)};var U=r.setTimeout;d.prototype.j=function(I){U(I,0)},d.prototype.m=function(){for(;this.h&&this.h.length;){var I=this.h;this.h=[];for(var k=0;k<I.length;++k){var nt=I[k];I[k]=null;try{nt()}catch(_t){this.l(_t)}}}this.h=null},d.prototype.l=function(I){this.j(function(){throw I})},u.prototype.l=function(){function I(_t){return function(bt){nt||(nt=!0,_t.call(k,bt))}}var k=this,nt=!1;return{resolve:I(this.I),reject:I(this.m)}},u.prototype.I=function(I){if(I===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(I instanceof u)this.L(I);else{t:switch(typeof I){case"object":var k=I!=null;break t;case"function":k=!0;break t;default:k=!1}k?this.F(I):this.s(I)}},u.prototype.F=function(I){var k=void 0;try{k=I.then}catch(nt){this.m(nt);return}typeof k=="function"?this.M(k,I):this.s(I)},u.prototype.m=function(I){this.v(2,I)},u.prototype.s=function(I){this.v(1,I)},u.prototype.v=function(I,k){if(this.i!=0)throw Error("Cannot settle("+I+", "+k+"): Promise already settled in state"+this.i);this.i=I,this.j=k,this.i===2&&this.K(),this.H()},u.prototype.K=function(){var I=this;U(function(){if(I.D()){var k=r.console;typeof k<"u"&&k.error(I.j)}},1)},u.prototype.D=function(){if(this.u)return!1;var I=r.CustomEvent,k=r.Event,nt=r.dispatchEvent;return typeof nt>"u"?!0:(typeof I=="function"?I=new I("unhandledrejection",{cancelable:!0}):typeof k=="function"?I=new k("unhandledrejection",{cancelable:!0}):(I=r.document.createEvent("CustomEvent"),I.initCustomEvent("unhandledrejection",!1,!0,I)),I.promise=this,I.reason=this.j,nt(I))},u.prototype.H=function(){if(this.h!=null){for(var I=0;I<this.h.length;++I)F.i(this.h[I]);this.h=null}};var F=new d;return u.prototype.L=function(I){var k=this.l();I.T(k.resolve,k.reject)},u.prototype.M=function(I,k){var nt=this.l();try{I.call(k,nt.resolve,nt.reject)}catch(_t){nt.reject(_t)}},u.prototype.then=function(I,k){function nt(jt,Pt){return typeof jt=="function"?function(oe){try{_t(jt(oe))}catch(Se){bt(Se)}}:Pt}var _t,bt,se=new u(function(jt,Pt){_t=jt,bt=Pt});return this.T(nt(I,_t),nt(k,bt)),se},u.prototype.catch=function(I){return this.then(void 0,I)},u.prototype.T=function(I,k){function nt(){switch(_t.i){case 1:I(_t.j);break;case 2:k(_t.j);break;default:throw Error("Unexpected state: "+_t.i)}}var _t=this;this.h==null?F.i(nt):this.h.push(nt),this.u=!0},u.resolve=E,u.reject=function(I){return new u(function(k,nt){nt(I)})},u.race=function(I){return new u(function(k,nt){for(var _t=l(I),bt=_t.next();!bt.done;bt=_t.next())E(bt.value).T(k,nt)})},u.all=function(I){var k=l(I),nt=k.next();return nt.done?E([]):new u(function(_t,bt){function se(oe){return function(Se){jt[oe]=Se,Pt--,Pt==0&&_t(jt)}}var jt=[],Pt=0;do jt.push(void 0),Pt++,E(nt.value).T(se(jt.length-1),bt),nt=k.next();while(!nt.done)})},u});function Z(s,u){s instanceof String&&(s+="");var d=0,E=!1,U={next:function(){if(!E&&d<s.length){var F=d++;return{value:u(F,s[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.keys",function(s){return s||function(){return Z(this,function(u){return u})}}),o("Array.prototype.fill",function(s){return s||function(u,d,E){var U=this.length||0;for(0>d&&(d=Math.max(0,U+d)),(E==null||E>U)&&(E=U),E=Number(E),0>E&&(E=Math.max(0,U+E)),d=Number(d||0);d<E;d++)this[d]=u;return this}});function z(s){return s||Array.prototype.fill}o("Int8Array.prototype.fill",z),o("Uint8Array.prototype.fill",z),o("Uint8ClampedArray.prototype.fill",z),o("Int16Array.prototype.fill",z),o("Uint16Array.prototype.fill",z),o("Int32Array.prototype.fill",z),o("Uint32Array.prototype.fill",z),o("Float32Array.prototype.fill",z),o("Float64Array.prototype.fill",z),o("Object.is",function(s){return s||function(u,d){return u===d?u!==0||1/u===1/d:u!==u&&d!==d}}),o("Array.prototype.includes",function(s){return s||function(u,d){var E=this;E instanceof String&&(E=String(E));var U=E.length;for(d=d||0,0>d&&(d=Math.max(d+U,0));d<U;d++){var F=E[d];if(F===u||Object.is(F,u))return!0}return!1}}),o("String.prototype.includes",function(s){return s||function(u,d){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(u instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(u,d||0)!==-1}});var it=this||self;function ht(s,u){s=s.split(".");var d=it;s[0]in d||typeof d.execScript>"u"||d.execScript("var "+s[0]);for(var E;s.length&&(E=s.shift());)s.length||u===void 0?d[E]&&d[E]!==Object.prototype[E]?d=d[E]:d=d[E]={}:d[E]=u}function G(s){var u;t:{if((u=it.navigator)&&(u=u.userAgent))break t;u=""}return u.indexOf(s)!=-1}var st=Array.prototype.map?function(s,u){return Array.prototype.map.call(s,u,void 0)}:function(s,u){for(var d=s.length,E=Array(d),U=typeof s=="string"?s.split(""):s,F=0;F<d;F++)F in U&&(E[F]=u.call(void 0,U[F],F,s));return E},K={},gt=null;function At(s){var u=s.length,d=3*u/4;d%3?d=Math.floor(d):"=.".indexOf(s[u-1])!=-1&&(d="=.".indexOf(s[u-2])!=-1?d-2:d-1);var E=new Uint8Array(d),U=0;return Nt(s,function(F){E[U++]=F}),U!==d?E.subarray(0,U):E}function Nt(s,u){function d(nt){for(;E<s.length;){var _t=s.charAt(E++),bt=gt[_t];if(bt!=null)return bt;if(!/^[\s\xa0]*$/.test(_t))throw Error("Unknown base64 encoding at char: "+_t)}return nt}te();for(var E=0;;){var U=d(-1),F=d(0),I=d(64),k=d(64);if(k===64&&U===-1)break;u(U<<2|F>>4),I!=64&&(u(F<<4&240|I>>2),k!=64&&u(I<<6&192|k))}}function te(){if(!gt){gt={};for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),u=["+/=","+/","-_=","-_.","-_"],d=0;5>d;d++){var E=s.concat(u[d].split(""));K[d]=E;for(var U=0;U<E.length;U++){var F=E[U];gt[F]===void 0&&(gt[F]=U)}}}}var de=typeof Uint8Array<"u",ct=!(G("Trident")||G("MSIE"))&&typeof it.btoa=="function";function vt(s){if(!ct){var u;u===void 0&&(u=0),te(),u=K[u];for(var d=Array(Math.floor(s.length/3)),E=u[64]||"",U=0,F=0;U<s.length-2;U+=3){var I=s[U],k=s[U+1],nt=s[U+2],_t=u[I>>2];I=u[(I&3)<<4|k>>4],k=u[(k&15)<<2|nt>>6],nt=u[nt&63],d[F++]=_t+I+k+nt}switch(_t=0,nt=E,s.length-U){case 2:_t=s[U+1],nt=u[(_t&15)<<2]||E;case 1:s=s[U],d[F]=u[s>>2]+u[(s&3)<<4|_t>>4]+nt+E}return d.join("")}for(u="";10240<s.length;)u+=String.fromCharCode.apply(null,s.subarray(0,10240)),s=s.subarray(10240);return u+=String.fromCharCode.apply(null,s),btoa(u)}var Ht=RegExp("[-_.]","g");function Rt(s){switch(s){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Jt(s){if(!ct)return At(s);Ht.test(s)&&(s=s.replace(Ht,Rt)),s=atob(s);for(var u=new Uint8Array(s.length),d=0;d<s.length;d++)u[d]=s.charCodeAt(d);return u}var qt;function ne(){return qt||(qt=new Uint8Array(0))}var Pe={},Ee=typeof Uint8Array.prototype.slice=="function",le=0,W=0;function en(s){var u=0>s;s=Math.abs(s);var d=s>>>0;s=Math.floor((s-d)/4294967296),u&&(d=l(he(d,s)),u=d.next().value,s=d.next().value,d=u),le=d>>>0,W=s>>>0}var ue=typeof BigInt=="function";function he(s,u){return u=~u,s?s=~s+1:u+=1,[s,u]}function kt(s,u){this.i=s>>>0,this.h=u>>>0}function Ue(s){if(!s)return Wt||(Wt=new kt(0,0));if(!/^-?\d+$/.test(s))return null;if(16>s.length)en(Number(s));else if(ue)s=BigInt(s),le=Number(s&BigInt(4294967295))>>>0,W=Number(s>>BigInt(32)&BigInt(4294967295));else{var u=+(s[0]==="-");W=le=0;for(var d=s.length,E=u,U=(d-u)%6+u;U<=d;E=U,U+=6)E=Number(s.slice(E,U)),W*=1e6,le=1e6*le+E,4294967296<=le&&(W+=le/4294967296|0,le%=4294967296);u&&(u=l(he(le,W)),s=u.next().value,u=u.next().value,le=s,W=u)}return new kt(le,W)}var Wt;function L(s,u){return Error("Invalid wire type: "+s+" (at position "+u+")")}function T(){return Error("Failed to read varint, encoding is invalid.")}function J(s,u){return Error("Tried to read past the end of the data "+u+" > "+s)}function ft(){throw Error("Invalid UTF8")}function mt(s,u){return u=String.fromCharCode.apply(null,u),s==null?u:s+u}var at=void 0,Ot,St=typeof TextDecoder<"u",Lt,Te=typeof TextEncoder<"u",Mt;function It(s){if(s!==Pe)throw Error("illegal external caller")}function Yt(s,u){if(It(u),this.V=s,s!=null&&s.length===0)throw Error("ByteString should be constructed with non-empty values")}function Kt(){return Mt||(Mt=new Yt(null,Pe))}function Ut(s){It(Pe);var u=s.V;return u=u==null||de&&u!=null&&u instanceof Uint8Array?u:typeof u=="string"?Jt(u):null,u==null?u:s.V=u}function Zt(s){if(typeof s=="string")return{buffer:Jt(s),C:!1};if(Array.isArray(s))return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Uint8Array)return{buffer:s,C:!1};if(s.constructor===ArrayBuffer)return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Yt)return{buffer:Ut(s)||ne(),C:!0};if(s instanceof Uint8Array)return{buffer:new Uint8Array(s.buffer,s.byteOffset,s.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function ie(s,u){this.i=null,this.m=!1,this.h=this.j=this.l=0,Fe(this,s,u)}function Fe(s,u,d){d=d===void 0?{}:d,s.S=d.S===void 0?!1:d.S,u&&(u=Zt(u),s.i=u.buffer,s.m=u.C,s.l=0,s.j=s.i.length,s.h=s.l)}ie.prototype.reset=function(){this.h=this.l};function B(s,u){if(s.h=u,u>s.j)throw J(s.j,u)}function Tt(s){var u=s.i,d=s.h,E=u[d++],U=E&127;if(E&128&&(E=u[d++],U|=(E&127)<<7,E&128&&(E=u[d++],U|=(E&127)<<14,E&128&&(E=u[d++],U|=(E&127)<<21,E&128&&(E=u[d++],U|=E<<28,E&128&&u[d++]&128&&u[d++]&128&&u[d++]&128&&u[d++]&128&&u[d++]&128)))))throw T();return B(s,d),U}function ot(s,u){if(0>u)throw Error("Tried to read a negative byte length: "+u);var d=s.h,E=d+u;if(E>s.j)throw J(u,s.j-d);return s.h=E,d}var dt=[];function Et(){this.h=[]}Et.prototype.length=function(){return this.h.length},Et.prototype.end=function(){var s=this.h;return this.h=[],s};function pt(s,u,d){for(;0<d||127<u;)s.h.push(u&127|128),u=(u>>>7|d<<25)>>>0,d>>>=7;s.h.push(u)}function ee(s,u){for(;127<u;)s.h.push(u&127|128),u>>>=7;s.h.push(u)}function Ge(s,u){if(dt.length){var d=dt.pop();Fe(d,s,u),s=d}else s=new ie(s,u);this.h=s,this.j=this.h.h,this.i=this.l=-1,this.setOptions(u)}Ge.prototype.setOptions=function(s){s=s===void 0?{}:s,this.ca=s.ca===void 0?!1:s.ca},Ge.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function Je(s){var u=s.h;if(u.h==u.j)return!1;s.j=s.h.h;var d=Tt(s.h)>>>0;if(u=d>>>3,d&=7,!(0<=d&&5>=d))throw L(d,s.j);if(1>u)throw Error("Invalid field number: "+u+" (at position "+s.j+")");return s.l=u,s.i=d,!0}function Ae(s){switch(s.i){case 0:if(s.i!=0)Ae(s);else t:{s=s.h;for(var u=s.h,d=u+10,E=s.i;u<d;)if(!(E[u++]&128)){B(s,u);break t}throw T()}break;case 1:s=s.h,B(s,s.h+8);break;case 2:s.i!=2?Ae(s):(u=Tt(s.h)>>>0,s=s.h,B(s,s.h+u));break;case 5:s=s.h,B(s,s.h+4);break;case 3:u=s.l;do{if(!Je(s))throw Error("Unmatched start-group tag: stream EOF");if(s.i==4){if(s.l!=u)throw Error("Unmatched end-group tag");break}Ae(s)}while(!0);break;default:throw L(s.i,s.j)}}var Ze=[];function xn(){this.j=[],this.i=0,this.h=new Et}function un(s,u){u.length!==0&&(s.j.push(u),s.i+=u.length)}function Fn(s,u){if(u=u.R){un(s,s.h.end());for(var d=0;d<u.length;d++)un(s,Ut(u[d])||ne())}}var rn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Ln(s,u){return rn?s[rn]|=u:s.A!==void 0?s.A|=u:(Object.defineProperties(s,{A:{value:u,configurable:!0,writable:!0,enumerable:!1}}),u)}function Qe(s,u){rn?s[rn]&&(s[rn]&=~u):s.A!==void 0&&(s.A&=~u)}function We(s){var u;return rn?u=s[rn]:u=s.A,u??0}function dn(s,u){rn?s[rn]=u:s.A!==void 0?s.A=u:Object.defineProperties(s,{A:{value:u,configurable:!0,writable:!0,enumerable:!1}})}function Kn(s){return Ln(s,1),s}function _i(s,u){dn(u,(s|0)&-51)}function En(s,u){dn(u,(s|18)&-41)}var vi={};function ii(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)&&s.constructor===Object}var Zn,Ki=[];dn(Ki,23),Zn=Object.freeze(Ki);function A(s){if(We(s.o)&2)throw Error("Cannot mutate an immutable Message")}function j(s){var u=s.length;(u=u?s[u-1]:void 0)&&ii(u)?u.g=1:(u={},s.push((u.g=1,u)))}function et(s){var u=s.i+s.G;return s.B||(s.B=s.o[u]={})}function Q(s,u){return u===-1?null:u>=s.i?s.B?s.B[u]:void 0:s.o[u+s.G]}function X(s,u,d,E){A(s),xt(s,u,d,E)}function xt(s,u,d,E){s.j&&(s.j=void 0),u>=s.i||E?et(s)[u]=d:(s.o[u+s.G]=d,(s=s.B)&&u in s&&delete s[u])}function wt(s,u,d,E){var U=Q(s,u);Array.isArray(U)||(U=Zn);var F=We(U);if(F&1||Kn(U),E)F&2||Ln(U,2),d&1||Object.freeze(U);else{E=!(d&2);var I=F&2;d&1||!I?E&&F&16&&!I&&Qe(U,16):(U=Kn(Array.prototype.slice.call(U)),xt(s,u,U))}return U}function Bt(s,u){var d=Q(s,u),E=d==null?d:typeof d=="number"||d==="NaN"||d==="Infinity"||d==="-Infinity"?Number(d):void 0;return E!=null&&E!==d&&xt(s,u,E),E}function zt(s,u,d,E,U){s.h||(s.h={});var F=s.h[d],I=wt(s,d,3,U);if(!F){var k=I;F=[];var nt=!!(We(s.o)&16);I=!!(We(k)&2);var _t=k;!U&&I&&(k=Array.prototype.slice.call(k));for(var bt=I,se=0;se<k.length;se++){var jt=k[se],Pt=u,oe=!1;if(oe=oe===void 0?!1:oe,jt=Array.isArray(jt)?new Pt(jt):oe?new Pt:void 0,jt!==void 0){Pt=jt.o;var Se=oe=We(Pt);I&&(Se|=2),nt&&(Se|=16),Se!=oe&&dn(Pt,Se),Pt=Se,bt=bt||!!(2&Pt),F.push(jt)}}return s.h[d]=F,nt=We(k),u=nt|33,u=bt?u&-9:u|8,nt!=u&&(bt=k,Object.isFrozen(bt)&&(bt=Array.prototype.slice.call(bt)),dn(bt,u),k=bt),_t!==k&&xt(s,d,k),(U||E&&I)&&Ln(F,2),E&&Object.freeze(F),F}return U||(U=Object.isFrozen(F),E&&!U?Object.freeze(F):!E&&U&&(F=Array.prototype.slice.call(F),s.h[d]=F)),F}function Qt(s,u,d){var E=!!(We(s.o)&2);if(u=zt(s,u,d,E,E),s=wt(s,d,3,E),!(E||We(s)&8)){for(E=0;E<u.length;E++){if(d=u[E],We(d.o)&2){var U=On(d,!1);U.j=d}else U=d;d!==U&&(u[E]=U,s[E]=U.o)}Ln(s,8)}return u}function $t(s,u,d){if(d!=null&&typeof d!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);X(s,u,d)}function Gt(s,u,d,E,U){A(s);var F=zt(s,d,u,!1,!1);return d=E??new d,s=wt(s,u,2,!1),U!=null?(F.splice(U,0,d),s.splice(U,0,d.o)):(F.push(d),s.push(d.o)),d.C()&&Qe(s,8),d}function Me(s,u){return s??u}function ye(s,u,d){return d=d===void 0?0:d,Me(Bt(s,u),d)}var Be;function sn(s){switch(typeof s){case"number":return isFinite(s)?s:String(s);case"object":if(s)if(Array.isArray(s)){if(We(s)&128)return s=Array.prototype.slice.call(s),j(s),s}else{if(de&&s!=null&&s instanceof Uint8Array)return vt(s);if(s instanceof Yt){var u=s.V;return u==null?"":typeof u=="string"?u:s.V=vt(u)}}}return s}function De(s,u,d,E){if(s!=null){if(Array.isArray(s))s=Vt(s,u,d,E!==void 0);else if(ii(s)){var U={},F;for(F in s)U[F]=De(s[F],u,d,E);s=U}else s=u(s,E);return s}}function Vt(s,u,d,E){var U=We(s);E=E?!!(U&16):void 0,s=Array.prototype.slice.call(s);for(var F=0;F<s.length;F++)s[F]=De(s[F],u,d,E);return d(U,s),s}function Mn(s){return s.ja===vi?s.toJSON():sn(s)}function Ie(s,u){s&128&&j(u)}function gn(s,u,d){if(d=d===void 0?En:d,s!=null){if(de&&s instanceof Uint8Array)return s.length?new Yt(new Uint8Array(s),Pe):Kt();if(Array.isArray(s)){var E=We(s);return E&2?s:u&&!(E&32)&&(E&16||E===0)?(dn(s,E|2),s):(s=Vt(s,gn,E&4?En:d,!0),u=We(s),u&4&&u&2&&Object.freeze(s),s)}return s.ja===vi?hn(s):s}}function kn(s,u,d,E,U,F,I){if(s=s.h&&s.h[d]){if(E=We(s),E&2?E=s:(F=st(s,hn),En(E,F),Object.freeze(F),E=F),A(u),I=E==null?Zn:Kn([]),E!=null){for(F=!!E.length,s=0;s<E.length;s++){var k=E[s];F=F&&!(We(k.o)&2),I[s]=k.o}F=(F?8:0)|1,s=We(I),(s&F)!==F&&(Object.isFrozen(I)&&(I=Array.prototype.slice.call(I)),dn(I,s|F)),u.h||(u.h={}),u.h[d]=E}else u.h&&(u.h[d]=void 0);xt(u,d,I,U)}else X(u,d,gn(E,F,I),U)}function hn(s){return We(s.o)&2||(s=On(s,!0),Ln(s.o,2)),s}function On(s,u){var d=s.o,E=[];Ln(E,16);var U=s.constructor.h;if(U&&E.push(U),U=s.B,U){E.length=d.length,E.fill(void 0,E.length,d.length);var F={};E[E.length-1]=F}We(d)&128&&j(E),u=u||s.C()?En:_i,F=s.constructor,Be=E,E=new F(E),Be=void 0,s.R&&(E.R=s.R.slice()),F=!!(We(d)&16);for(var I=U?d.length-1:d.length,k=0;k<I;k++)kn(s,E,k-s.G,d[k],!1,F,u);if(U)for(var nt in U)kn(s,E,+nt,U[nt],!0,F,u);return E}function fe(s,u,d){s==null&&(s=Be),Be=void 0;var E=this.constructor.i||0,U=0<E,F=this.constructor.h,I=!1;if(s==null){s=F?[F]:[];var k=48,nt=!0;U&&(E=0,k|=128),dn(s,k)}else{if(!Array.isArray(s)||F&&F!==s[0])throw Error();var _t=k=Ln(s,0);if((nt=(16&_t)!==0)&&((I=(32&_t)!==0)||(_t|=32)),U){if(128&_t)E=0;else if(0<s.length){var bt=s[s.length-1];if(ii(bt)&&"g"in bt){E=0,_t|=128,delete bt.g;var se=!0,jt;for(jt in bt){se=!1;break}se&&s.pop()}}}else if(128&_t)throw Error();k!==_t&&dn(s,_t)}this.G=(F?0:-1)-E,this.h=void 0,this.o=s;t:{if(F=this.o.length,E=F-1,F&&(F=this.o[E],ii(F))){this.B=F,this.i=E-this.G;break t}u!==void 0&&-1<u?(this.i=Math.max(u,E+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!U&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(d){u=nt&&!I&&!0,U=this.i;var Pt;for(nt=0;nt<d.length;nt++)I=d[nt],I<U?(I+=this.G,(E=s[I])?yn(E,u):s[I]=Zn):(Pt||(Pt=et(this)),(E=Pt[I])?yn(E,u):Pt[I]=Zn)}}fe.prototype.toJSON=function(){return Vt(this.o,Mn,Ie)},fe.prototype.C=function(){return!!(We(this.o)&2)};function yn(s,u){if(Array.isArray(s)){var d=We(s),E=1;!u||d&2||(E|=16),(d&E)!==E&&dn(s,d|E)}}fe.prototype.ja=vi,fe.prototype.toString=function(){return this.o.toString()};function $n(s,u,d){if(d){var E={},U;for(U in d){var F=d[U],I=F.qa;I||(E.J=F.wa||F.oa.W,F.ia?(E.aa=kr(F.ia),I=function(k){return function(nt,_t,bt){return k.J(nt,_t,bt,k.aa)}}(E)):F.ka?(E.Z=Ar(F.da.P,F.ka),I=function(k){return function(nt,_t,bt){return k.J(nt,_t,bt,k.Z)}}(E)):I=E.J,F.qa=I),I(u,s,F.da),E={J:E.J,aa:E.aa,Z:E.Z}}}Fn(u,s)}var on=Symbol();function Un(s,u,d){return s[on]||(s[on]=function(E,U){return u(E,U,d)})}function Tn(s){var u=s[on];if(!u){var d=Ne(s);u=function(E,U){return pe(E,U,d)},s[on]=u}return u}function Ui(s){var u=s.ia;if(u)return Tn(u);if(u=s.va)return Un(s.da.P,u,s.ka)}function Hr(s){var u=Ui(s),d=s.da,E=s.oa.U;return u?function(U,F){return E(U,F,d,u)}:function(U,F){return E(U,F,d)}}function Er(s,u){var d=s[u];return typeof d=="function"&&d.length===0&&(d=d(),s[u]=d),Array.isArray(d)&&($ in d||a in d||0<d.length&&typeof d[0]=="function")?d:void 0}function Tr(s,u,d,E,U,F){u.P=s[0];var I=1;if(s.length>I&&typeof s[I]!="number"){var k=s[I++];d(u,k)}for(;I<s.length;){d=s[I++];for(var nt=I+1;nt<s.length&&typeof s[nt]!="number";)nt++;switch(k=s[I++],nt-=I,nt){case 0:E(u,d,k);break;case 1:(nt=Er(s,I))?(I++,U(u,d,k,nt)):E(u,d,k,s[I++]);break;case 2:nt=I++,nt=Er(s,nt),U(u,d,k,nt,s[I++]);break;case 3:F(u,d,k,s[I++],s[I++],s[I++]);break;case 4:F(u,d,k,s[I++],s[I++],s[I++],s[I++]);break;default:throw Error("unexpected number of binary field arguments: "+nt)}}return u}var Di=Symbol();function kr(s){var u=s[Di];if(!u){var d=lt(s);u=function(E,U){return ce(E,U,d)},s[Di]=u}return u}function Ar(s,u){var d=s[Di];return d||(d=function(E,U){return $n(E,U,u)},s[Di]=d),d}var a=Symbol();function f(s,u){s.push(u)}function g(s,u,d){s.push(u,d.W)}function N(s,u,d,E){var U=kr(E),F=lt(E).P,I=d.W;s.push(u,function(k,nt,_t){return I(k,nt,_t,F,U)})}function q(s,u,d,E,U,F){var I=Ar(E,F),k=d.W;s.push(u,function(nt,_t,bt){return k(nt,_t,bt,E,I)})}function lt(s){var u=s[a];return u||(u=Tr(s,s[a]=[],f,g,N,q),$ in s&&a in s&&(s.length=0),u)}var $=Symbol();function ut(s,u){s[0]=u}function yt(s,u,d,E){var U=d.U;s[u]=E?function(F,I,k){return U(F,I,k,E)}:U}function Dt(s,u,d,E,U){var F=d.U,I=Tn(E),k=Ne(E).P;s[u]=function(nt,_t,bt){return F(nt,_t,bt,k,I,U)}}function ae(s,u,d,E,U,F,I){var k=d.U,nt=Un(E,U,F);s[u]=function(_t,bt,se){return k(_t,bt,se,E,nt,I)}}function Ne(s){var u=s[$];return u||(u=Tr(s,s[$]={},ut,yt,Dt,ae),$ in s&&a in s&&(s.length=0),u)}function pe(s,u,d){for(;Je(u)&&u.i!=4;){var E=u.l,U=d[E];if(!U){var F=d[0];F&&(F=F[E])&&(U=d[E]=Hr(F))}if(!U||!U(u,s,E)){U=u,E=s,F=U.j,Ae(U);var I=U;if(!I.ca){if(U=I.h.h-F,I.h.h=F,I=I.h,U==0)U=Kt();else{if(F=ot(I,U),I.S&&I.m)U=I.i.subarray(F,F+U);else{I=I.i;var k=F;U=F+U,U=k===U?ne():Ee?I.slice(k,U):new Uint8Array(I.subarray(k,U))}U=U.length==0?Kt():new Yt(U,Pe)}(F=E.R)?F.push(U):E.R=[U]}}}return s}function ce(s,u,d){for(var E=d.length,U=E%2==1,F=U?1:0;F<E;F+=2)(0,d[F+1])(u,s,d[F]);$n(s,u,U?d[0]:void 0)}function Ft(s,u){return{U:s,W:u}}var Xt=Ft(function(s,u,d){if(s.i!==5)return!1;s=s.h;var E=s.i,U=s.h,F=E[U],I=E[U+1],k=E[U+2];return E=E[U+3],B(s,s.h+4),I=(F<<0|I<<8|k<<16|E<<24)>>>0,s=2*(I>>31)+1,F=I>>>23&255,I&=8388607,X(u,d,F==255?I?NaN:1/0*s:F==0?s*Math.pow(2,-149)*I:s*Math.pow(2,F-150)*(I+Math.pow(2,23))),!0},function(s,u,d){if(u=Bt(u,d),u!=null){ee(s.h,8*d+5),s=s.h;var E=+u;E===0?0<1/E?le=W=0:(W=0,le=2147483648):isNaN(E)?(W=0,le=2147483647):(E=(d=0>E?-2147483648:0)?-E:E,34028234663852886e22<E?(W=0,le=(d|2139095040)>>>0):11754943508222875e-54>E?(E=Math.round(E/Math.pow(2,-149)),W=0,le=(d|E)>>>0):(u=Math.floor(Math.log(E)/Math.LN2),E*=Math.pow(2,-u),E=Math.round(8388608*E),16777216<=E&&++u,W=0,le=(d|u+127<<23|E&8388607)>>>0)),d=le,s.h.push(d>>>0&255),s.h.push(d>>>8&255),s.h.push(d>>>16&255),s.h.push(d>>>24&255)}}),me=Ft(function(s,u,d){if(s.i!==0)return!1;var E=s.h,U=0,F=s=0,I=E.i,k=E.h;do{var nt=I[k++];U|=(nt&127)<<F,F+=7}while(32>F&&nt&128);for(32<F&&(s|=(nt&127)>>4),F=3;32>F&&nt&128;F+=7)nt=I[k++],s|=(nt&127)<<F;if(B(E,k),128>nt)E=U>>>0,nt=s>>>0,(s=nt&2147483648)&&(E=~E+1>>>0,nt=~nt>>>0,E==0&&(nt=nt+1>>>0)),E=4294967296*nt+(E>>>0);else throw T();return X(u,d,s?-E:E),!0},function(s,u,d){u=Q(u,d),u!=null&&(typeof u=="string"&&Ue(u),u!=null&&(ee(s.h,8*d),typeof u=="number"?(s=s.h,en(u),pt(s,le,W)):(d=Ue(u),pt(s.h,d.i,d.h))))}),be=Ft(function(s,u,d){return s.i!==0?!1:(X(u,d,Tt(s.h)),!0)},function(s,u,d){if(u=Q(u,d),u!=null&&u!=null)if(ee(s.h,8*d),s=s.h,d=u,0<=d)ee(s,d);else{for(u=0;9>u;u++)s.h.push(d&127|128),d>>=7;s.h.push(1)}}),tn=Ft(function(s,u,d){if(s.i!==2)return!1;var E=Tt(s.h)>>>0;s=s.h;var U=ot(s,E);if(s=s.i,St){var F=s,I;(I=Ot)||(I=Ot=new TextDecoder("utf-8",{fatal:!0})),s=U+E,F=U===0&&s===F.length?F:F.subarray(U,s);try{var k=I.decode(F)}catch(se){if(at===void 0){try{I.decode(new Uint8Array([128]))}catch{}try{I.decode(new Uint8Array([97])),at=!0}catch{at=!1}}throw!at&&(Ot=void 0),se}}else{k=U,E=k+E,U=[];for(var nt=null,_t,bt;k<E;)_t=s[k++],128>_t?U.push(_t):224>_t?k>=E?ft():(bt=s[k++],194>_t||(bt&192)!==128?(k--,ft()):U.push((_t&31)<<6|bt&63)):240>_t?k>=E-1?ft():(bt=s[k++],(bt&192)!==128||_t===224&&160>bt||_t===237&&160<=bt||((F=s[k++])&192)!==128?(k--,ft()):U.push((_t&15)<<12|(bt&63)<<6|F&63)):244>=_t?k>=E-2?ft():(bt=s[k++],(bt&192)!==128||(_t<<28)+(bt-144)>>30||((F=s[k++])&192)!==128||((I=s[k++])&192)!==128?(k--,ft()):(_t=(_t&7)<<18|(bt&63)<<12|(F&63)<<6|I&63,_t-=65536,U.push((_t>>10&1023)+55296,(_t&1023)+56320))):ft(),8192<=U.length&&(nt=mt(nt,U),U.length=0);k=mt(nt,U)}return X(u,d,k),!0},function(s,u,d){if(u=Q(u,d),u!=null){var E=!1;if(E=E===void 0?!1:E,Te){if(E&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(u))throw Error("Found an unpaired surrogate");u=(Lt||(Lt=new TextEncoder)).encode(u)}else{for(var U=0,F=new Uint8Array(3*u.length),I=0;I<u.length;I++){var k=u.charCodeAt(I);if(128>k)F[U++]=k;else{if(2048>k)F[U++]=k>>6|192;else{if(55296<=k&&57343>=k){if(56319>=k&&I<u.length){var nt=u.charCodeAt(++I);if(56320<=nt&&57343>=nt){k=1024*(k-55296)+nt-56320+65536,F[U++]=k>>18|240,F[U++]=k>>12&63|128,F[U++]=k>>6&63|128,F[U++]=k&63|128;continue}else I--}if(E)throw Error("Found an unpaired surrogate");k=65533}F[U++]=k>>12|224,F[U++]=k>>6&63|128}F[U++]=k&63|128}}u=U===F.length?F:F.subarray(0,U)}ee(s.h,8*d+2),ee(s.h,u.length),un(s,s.h.end()),un(s,u)}}),He=Ft(function(s,u,d,E,U){if(s.i!==2)return!1;u=Gt(u,d,E),d=s.h.j,E=Tt(s.h)>>>0;var F=s.h.h+E,I=F-d;if(0>=I&&(s.h.j=F,U(u,s,void 0,void 0,void 0),I=F-s.h.h),I)throw Error("Message parsing ended unexpectedly. Expected to read "+(E+" bytes, instead read "+(E-I)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return s.h.h=F,s.h.j=d,!0},function(s,u,d,E,U){if(u=Qt(u,E,d),u!=null)for(E=0;E<u.length;E++){var F=s;ee(F.h,8*d+2);var I=F.h.end();un(F,I),I.push(F.i),F=I,U(u[E],s),I=s;var k=F.pop();for(k=I.i+I.h.length()-k;127<k;)F.push(k&127|128),k>>>=7,I.i++;F.push(k),I.i++}});function an(s){return function(u,d){t:{if(Ze.length){var E=Ze.pop();E.setOptions(d),Fe(E.h,u,d),u=E}else u=new Ge(u,d);try{var U=Ne(s),F=pe(new U.P,u,U);break t}finally{U=u.h,U.i=null,U.m=!1,U.l=0,U.j=0,U.h=0,U.S=!1,u.l=-1,u.i=-1,100>Ze.length&&Ze.push(u)}F=void 0}return F}}function qe(s){return function(){var u=new xn;ce(this,u,lt(s)),un(u,u.h.end());for(var d=new Uint8Array(u.i),E=u.j,U=E.length,F=0,I=0;I<U;I++){var k=E[I];d.set(k,F),F+=k.length}return u.j=[d],d}}function re(s){fe.call(this,s)}y(re,fe);var we=[re,1,be,2,Xt,3,tn,4,tn];re.prototype.l=qe(we);function Re(s){fe.call(this,s,-1,_e)}y(Re,fe),Re.prototype.addClassification=function(s,u){return Gt(this,1,re,s,u),this};var _e=[1],Ce=an([Re,1,He,we]);function ve(s){fe.call(this,s)}y(ve,fe);var ri=[ve,1,Xt,2,Xt,3,Xt,4,Xt,5,Xt];ve.prototype.l=qe(ri);function oa(s){fe.call(this,s,-1,$l)}y(oa,fe);var $l=[1],aa=an([oa,1,He,ri]);function Vr(s){fe.call(this,s)}y(Vr,fe);var la=[Vr,1,Xt,2,Xt,3,Xt,4,Xt,5,Xt,6,me],Jl=an(la);Vr.prototype.l=qe(la);function ca(s,u,d){if(d=s.createShader(d===0?s.VERTEX_SHADER:s.FRAGMENT_SHADER),s.shaderSource(d,u),s.compileShader(d),!s.getShaderParameter(d,s.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+s.getShaderInfoLog(d));return d}function ua(s){return Qt(s,re,1).map(function(u){var d=Q(u,1);return{index:d??0,score:ye(u,2),label:Q(u,3)!=null?Me(Q(u,3),""):void 0,displayName:Q(u,4)!=null?Me(Q(u,4),""):void 0}})}function ha(s){return{x:ye(s,1),y:ye(s,2),z:ye(s,3),visibility:Bt(s,4)!=null?ye(s,4):void 0}}function fa(s){return s.map(function(u){return Qt(aa(u),ve,1).map(ha)})}function bs(s,u){this.i=s,this.h=u,this.m=0}function da(s,u,d){return Ql(s,u),typeof s.h.canvas.transferToImageBitmap=="function"?Promise.resolve(s.h.canvas.transferToImageBitmap()):d?Promise.resolve(s.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(s.h.canvas):(s.j===void 0&&(s.j=document.createElement("canvas")),new Promise(function(E){s.j.height=s.h.canvas.height,s.j.width=s.h.canvas.width,s.j.getContext("2d",{}).drawImage(s.h.canvas,0,0,s.h.canvas.width,s.h.canvas.height),E(s.j)}))}function Ql(s,u){var d=s.h;if(s.s===void 0){var E=ca(d,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),U=ca(d,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),F=d.createProgram();if(d.attachShader(F,E),d.attachShader(F,U),d.linkProgram(F),!d.getProgramParameter(F,d.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+d.getProgramInfoLog(F));E=s.s=F,d.useProgram(E),U=d.getUniformLocation(E,"sampler0"),s.l={O:d.getAttribLocation(E,"aVertex"),N:d.getAttribLocation(E,"aTex"),xa:U},s.v=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,s.v),d.enableVertexAttribArray(s.l.O),d.vertexAttribPointer(s.l.O,2,d.FLOAT,!1,0,0),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,null),s.u=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,s.u),d.enableVertexAttribArray(s.l.N),d.vertexAttribPointer(s.l.N,2,d.FLOAT,!1,0,0),d.bufferData(d.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,null),d.uniform1i(U,0)}E=s.l,d.useProgram(s.s),d.canvas.width=u.width,d.canvas.height=u.height,d.viewport(0,0,u.width,u.height),d.activeTexture(d.TEXTURE0),s.i.bindTexture2d(u.glName),d.enableVertexAttribArray(E.O),d.bindBuffer(d.ARRAY_BUFFER,s.v),d.vertexAttribPointer(E.O,2,d.FLOAT,!1,0,0),d.enableVertexAttribArray(E.N),d.bindBuffer(d.ARRAY_BUFFER,s.u),d.vertexAttribPointer(E.N,2,d.FLOAT,!1,0,0),d.bindFramebuffer(d.DRAW_FRAMEBUFFER?d.DRAW_FRAMEBUFFER:d.FRAMEBUFFER,null),d.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT),d.colorMask(!0,!0,!0,!0),d.drawArrays(d.TRIANGLE_FAN,0,4),d.disableVertexAttribArray(E.O),d.disableVertexAttribArray(E.N),d.bindBuffer(d.ARRAY_BUFFER,null),s.i.bindTexture2d(0)}function tc(s){this.h=s}var ec=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function nc(s,u){return u+s}function pa(s,u){window[s]=u}function ic(s){var u=document.createElement("script");return u.setAttribute("src",s),u.setAttribute("crossorigin","anonymous"),new Promise(function(d){u.addEventListener("load",function(){d()},!1),u.addEventListener("error",function(){d()},!1),document.body.appendChild(u)})}function rc(){return w(function(s){switch(s.h){case 1:return s.s=2,C(s,WebAssembly.instantiate(ec),4);case 4:s.h=3,s.s=0;break;case 2:return s.s=0,s.l=null,s.return(!1);case 3:return s.return(!0)}})}function ws(s){if(this.h=s,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=s&&s.locateFile||nc,typeof window=="object")var u=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")u=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=u,s.options){u=l(Object.keys(s.options));for(var d=u.next();!d.done;d=u.next()){d=d.value;var E=s.options[d].default;E!==void 0&&(this.l[d]=typeof E=="function"?E():E)}}}i=ws.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function sc(s){var u,d,E,U,F,I,k,nt,_t,bt,se;return w(function(jt){switch(jt.h){case 1:return s.ga?(u=s.h.files===void 0?[]:typeof s.h.files=="function"?s.h.files(s.l):s.h.files,C(jt,rc(),2)):jt.return();case 2:if(d=jt.i,typeof window=="object")return pa("createMediapipeSolutionsWasm",{locateFile:s.locateFile}),pa("createMediapipeSolutionsPackedAssets",{locateFile:s.locateFile}),I=u.filter(function(Pt){return Pt.data!==void 0}),k=u.filter(function(Pt){return Pt.data===void 0}),nt=Promise.all(I.map(function(Pt){var oe=Wr(s,Pt.url);if(Pt.path!==void 0){var Se=Pt.path;oe=oe.then(function(Ke){return s.overrideFile(Se,Ke),Promise.resolve(Ke)})}return oe})),_t=Promise.all(k.map(function(Pt){return Pt.simd===void 0||Pt.simd&&d||!Pt.simd&&!d?ic(s.locateFile(Pt.url,s.ha)):Promise.resolve()})).then(function(){var Pt,oe,Se;return w(function(Ke){if(Ke.h==1)return Pt=window.createMediapipeSolutionsWasm,oe=window.createMediapipeSolutionsPackedAssets,Se=s,C(Ke,Pt(oe),2);Se.i=Ke.i,Ke.h=0})}),bt=function(){return w(function(Pt){return s.h.graph&&s.h.graph.url?Pt=C(Pt,Wr(s,s.h.graph.url),0):(Pt.h=0,Pt=void 0),Pt})}(),C(jt,Promise.all([_t,nt,bt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return E=u.filter(function(Pt){return Pt.simd===void 0||Pt.simd&&d||!Pt.simd&&!d}).map(function(Pt){return s.locateFile(Pt.url,s.ha)}),importScripts.apply(null,h(E)),U=s,C(jt,createMediapipeSolutionsWasm(Module),6);case 6:U.i=jt.i,s.m=new OffscreenCanvas(1,1),s.i.canvas=s.m,F=s.i.GL.createContext(s.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),s.i.GL.makeContextCurrent(F),jt.h=4;break;case 7:if(s.m=document.createElement("canvas"),se=s.m.getContext("webgl2",{}),!se&&(se=s.m.getContext("webgl",{}),!se))return alert("Failed to create WebGL canvas context when passing video frame."),jt.return();s.K=se,s.i.canvas=s.m,s.i.createContext(s.m,!0,!0,{});case 4:s.j=new s.i.SolutionWasm,s.ga=!1,jt.h=0}})}function oc(s){var u,d,E,U,F,I,k,nt;return w(function(_t){if(_t.h==1){if(s.h.graph&&s.h.graph.url&&s.fa===s.h.graph.url)return _t.return();if(s.u=!0,!s.h.graph||!s.h.graph.url){_t.h=2;return}return s.fa=s.h.graph.url,C(_t,Wr(s,s.h.graph.url),3)}for(_t.h!=2&&(u=_t.i,s.j.loadGraph(u)),d=l(Object.keys(s.D)),E=d.next();!E.done;E=d.next())U=E.value,s.j.overrideFile(U,s.D[U]);if(s.D={},s.h.listeners)for(F=l(s.h.listeners),I=F.next();!I.done;I=F.next())k=I.value,uc(s,k);nt=s.l,s.l={},s.setOptions(nt),_t.h=0})}i.reset=function(){var s=this;return w(function(u){s.j&&(s.j.reset(),s.s={},s.v={}),u.h=0})},i.setOptions=function(s,u){var d=this;if(u=u||this.h.options){for(var E=[],U=[],F={},I=l(Object.keys(s)),k=I.next();!k.done;F={X:F.X,Y:F.Y},k=I.next())if(k=k.value,!(k in this.l&&this.l[k]===s[k])){this.l[k]=s[k];var nt=u[k];nt!==void 0&&(nt.onChange&&(F.X=nt.onChange,F.Y=s[k],E.push(function(_t){return function(){var bt;return w(function(se){if(se.h==1)return C(se,_t.X(_t.Y),2);bt=se.i,bt===!0&&(d.u=!0),se.h=0})}}(F))),nt.graphOptionXref&&(k=Object.assign({},{calculatorName:"",calculatorIndex:0},nt.graphOptionXref,{valueNumber:nt.type===1?s[k]:0,valueBoolean:nt.type===0?s[k]:!1,valueString:nt.type===2?s[k]:""}),U.push(k)))}(E.length!==0||U.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(U),this.F=(this.F===void 0?[]:this.F).concat(E))}};function ac(s){var u,d,E,U,F,I,k;return w(function(nt){switch(nt.h){case 1:if(!s.u)return nt.return();if(!s.F){nt.h=2;break}u=l(s.F),d=u.next();case 3:if(d.done){nt.h=5;break}return E=d.value,C(nt,E(),4);case 4:d=u.next(),nt.h=3;break;case 5:s.F=void 0;case 2:if(s.H){for(U=new s.i.GraphOptionChangeRequestList,F=l(s.H),I=F.next();!I.done;I=F.next())k=I.value,U.push_back(k);s.j.changeOptions(U),U.delete(),s.H=void 0}s.u=!1,nt.h=0}})}i.initialize=function(){var s=this;return w(function(u){return u.h==1?C(u,sc(s),2):u.h!=3?C(u,oc(s),3):C(u,ac(s),0)})};function Wr(s,u){var d,E;return w(function(U){return u in s.L?U.return(s.L[u]):(d=s.locateFile(u,""),E=fetch(d).then(function(F){return F.arrayBuffer()}),s.L[u]=E,U.return(E))})}i.overrideFile=function(s,u){this.j?this.j.overrideFile(s,u):this.D[s]=u},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(s,u){var d=this,E,U,F,I,k,nt,_t,bt,se;return w(function(jt){switch(jt.h){case 1:return d.h.inputs?(E=1e3*(u??performance.now()),C(jt,d.I,2)):jt.return();case 2:return C(jt,d.initialize(),3);case 3:for(U=new d.i.PacketDataList,F=l(Object.keys(s)),I=F.next();!I.done;I=F.next())if(k=I.value,nt=d.h.inputs[k]){t:{var Pt=s[k];switch(nt.type){case"video":var oe=d.s[nt.stream];if(oe||(oe=new bs(d.i,d.K),d.s[nt.stream]=oe),oe.m===0&&(oe.m=oe.i.createTexture()),typeof HTMLVideoElement<"u"&&Pt instanceof HTMLVideoElement)var Se=Pt.videoWidth,Ke=Pt.videoHeight;else typeof HTMLImageElement<"u"&&Pt instanceof HTMLImageElement?(Se=Pt.naturalWidth,Ke=Pt.naturalHeight):(Se=Pt.width,Ke=Pt.height);Ke={glName:oe.m,width:Se,height:Ke},Se=oe.h,Se.canvas.width=Ke.width,Se.canvas.height=Ke.height,Se.activeTexture(Se.TEXTURE0),oe.i.bindTexture2d(oe.m),Se.texImage2D(Se.TEXTURE_2D,0,Se.RGBA,Se.RGBA,Se.UNSIGNED_BYTE,Pt),oe.i.bindTexture2d(0),oe=Ke;break t;case"detections":for(oe=d.s[nt.stream],oe||(oe=new tc(d.i),d.s[nt.stream]=oe),oe.data||(oe.data=new oe.h.DetectionListData),oe.data.reset(Pt.length),Ke=0;Ke<Pt.length;++Ke){Se=Pt[Ke];var Ye=oe.data,pn=Ye.setBoundingBox,Bn=Ke,An=Se.la,ze=new Vr;if($t(ze,1,An.ra),$t(ze,2,An.sa),$t(ze,3,An.height),$t(ze,4,An.width),$t(ze,5,An.rotation),X(ze,6,An.pa),An=ze.l(),pn.call(Ye,Bn,An),Se.ea)for(Ye=0;Ye<Se.ea.length;++Ye){ze=Se.ea[Ye],pn=oe.data,Bn=pn.addNormalizedLandmark,An=Ke,ze=Object.assign({},ze,{visibility:ze.visibility?ze.visibility:0});var mn=new ve;$t(mn,1,ze.x),$t(mn,2,ze.y),$t(mn,3,ze.z),ze.visibility&&$t(mn,4,ze.visibility),ze=mn.l(),Bn.call(pn,An,ze)}if(Se.ba)for(Ye=0;Ye<Se.ba.length;++Ye)pn=oe.data,Bn=pn.addClassification,An=Ke,ze=Se.ba[Ye],mn=new re,$t(mn,2,ze.score),ze.index&&X(mn,1,ze.index),ze.label&&X(mn,3,ze.label),ze.displayName&&X(mn,4,ze.displayName),ze=mn.l(),Bn.call(pn,An,ze)}oe=oe.data;break t;default:oe={}}}switch(_t=oe,bt=nt.stream,nt.type){case"video":U.pushTexture2d(Object.assign({},_t,{stream:bt,timestamp:E}));break;case"detections":se=_t,se.stream=bt,se.timestamp=E,U.pushDetectionList(se);break;default:throw Error("Unknown input config type: '"+nt.type+"'")}}return d.j.send(U),C(jt,d.I,4);case 4:U.delete(),jt.h=0}})};function lc(s,u,d){var E,U,F,I,k,nt,_t,bt,se,jt,Pt,oe,Se,Ke;return w(function(Ye){switch(Ye.h){case 1:if(!d)return Ye.return(u);for(E={},U=0,F=l(Object.keys(d)),I=F.next();!I.done;I=F.next())k=I.value,nt=d[k],typeof nt!="string"&&nt.type==="texture"&&u[nt.stream]!==void 0&&++U;1<U&&(s.M=!1),_t=l(Object.keys(d)),I=_t.next();case 2:if(I.done){Ye.h=4;break}if(bt=I.value,se=d[bt],typeof se=="string")return Se=E,Ke=bt,C(Ye,cc(s,bt,u[se]),14);if(jt=u[se.stream],se.type==="detection_list"){if(jt){for(var pn=jt.getRectList(),Bn=jt.getLandmarksList(),An=jt.getClassificationsList(),ze=[],mn=0;mn<pn.size();++mn){var xi=Jl(pn.get(mn)),hc=ye(xi,1),fc=ye(xi,2),dc=ye(xi,3),pc=ye(xi,4),mc=ye(xi,5,0),Xr=void 0;Xr=Xr===void 0?0:Xr,xi={la:{ra:hc,sa:fc,height:dc,width:pc,rotation:mc,pa:Me(Q(xi,6),Xr)},ea:Qt(aa(Bn.get(mn)),ve,1).map(ha),ba:ua(Ce(An.get(mn)))},ze.push(xi)}pn=ze}else pn=[];E[bt]=pn,Ye.h=7;break}if(se.type==="proto_list"){if(jt){for(pn=Array(jt.size()),Bn=0;Bn<jt.size();Bn++)pn[Bn]=jt.get(Bn);jt.delete()}else pn=[];E[bt]=pn,Ye.h=7;break}if(jt===void 0){Ye.h=3;break}if(se.type==="float_list"){E[bt]=jt,Ye.h=7;break}if(se.type==="proto"){E[bt]=jt,Ye.h=7;break}if(se.type!=="texture")throw Error("Unknown output config type: '"+se.type+"'");return Pt=s.v[bt],Pt||(Pt=new bs(s.i,s.K),s.v[bt]=Pt),C(Ye,da(Pt,jt,s.M),13);case 13:oe=Ye.i,E[bt]=oe;case 7:se.transform&&E[bt]&&(E[bt]=se.transform(E[bt])),Ye.h=3;break;case 14:Se[Ke]=Ye.i;case 3:I=_t.next(),Ye.h=2;break;case 4:return Ye.return(E)}})}function cc(s,u,d){var E;return w(function(U){return typeof d=="number"||d instanceof Uint8Array||d instanceof s.i.Uint8BlobList?U.return(d):d instanceof s.i.Texture2dDataOut?(E=s.v[u],E||(E=new bs(s.i,s.K),s.v[u]=E),U.return(da(E,d,s.M))):U.return(void 0)})}function uc(s,u){for(var d=u.name||"$",E=[].concat(h(u.wants)),U=new s.i.StringList,F=l(u.wants),I=F.next();!I.done;I=F.next())U.push_back(I.value);F=s.i.PacketListener.implement({onResults:function(k){for(var nt={},_t=0;_t<u.wants.length;++_t)nt[E[_t]]=k.get(_t);var bt=s.listeners[d];bt&&(s.I=lc(s,nt,u.outs).then(function(se){se=bt(se);for(var jt=0;jt<u.wants.length;++jt){var Pt=nt[E[jt]];typeof Pt=="object"&&Pt.hasOwnProperty&&Pt.hasOwnProperty("delete")&&Pt.delete()}se&&(s.I=se)}))}}),s.j.attachMultiListener(U,F),U.delete()}i.onResults=function(s,u){this.listeners[u||"$"]=s},ht("Solution",ws),ht("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function ma(s){return s===void 0&&(s=0),s===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function ga(s){var u=this;s=s||{},this.h=new ws({locateFile:s.locateFile,files:function(d){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:ma(d.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:fa},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:fa},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(d){return d.map(function(E){return ua(Ce(E))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(d){var E,U,F;return w(function(I){return I.h==1?(E=ma(d),U="third_party/mediapipe/modules/hand_landmark/"+E,C(I,Wr(u.h,E),2)):(F=I.i,u.h.overrideFile(U,F),I.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=ga.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(s){this.h.onResults(s)},i.initialize=function(){var s=this;return w(function(u){return C(u,s.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(s){var u=this;return w(function(d){return C(d,u.h.send(s),0)})},i.setOptions=function(s){this.h.setOptions(s)},ht("Hands",ga),ht("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),ht("VERSION","0.4.1675469240")}).call(pi);var wm={};(function(){function i(v){var w=0;return function(){return w<v.length?{done:!1,value:v[w++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(v,w,Z){return v==Array.prototype||v==Object.prototype||(v[w]=Z.value),v};function e(v){v=[typeof globalThis=="object"&&globalThis,v,typeof window=="object"&&window,typeof self=="object"&&self,typeof pi=="object"&&pi];for(var w=0;w<v.length;++w){var Z=v[w];if(Z&&Z.Math==Math)return Z}throw Error("Cannot find global object")}var n=e(this);function r(v,w){if(w)t:{var Z=n;v=v.split(".");for(var z=0;z<v.length-1;z++){var it=v[z];if(!(it in Z))break t;Z=Z[it]}v=v[v.length-1],z=Z[v],w=w(z),w!=z&&w!=null&&t(Z,v,{configurable:!0,writable:!0,value:w})}}r("Symbol",function(v){function w(ht){if(this instanceof w)throw new TypeError("Symbol is not a constructor");return new Z(z+(ht||"")+"_"+it++,ht)}function Z(ht,G){this.g=ht,t(this,"description",{configurable:!0,writable:!0,value:G})}if(v)return v;Z.prototype.toString=function(){return this.g};var z="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",it=0;return w}),r("Symbol.iterator",function(v){if(v)return v;v=Symbol("Symbol.iterator");for(var w="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),Z=0;Z<w.length;Z++){var z=n[w[Z]];typeof z=="function"&&typeof z.prototype[v]!="function"&&t(z.prototype,v,{configurable:!0,writable:!0,value:function(){return o(i(this))}})}return v});function o(v){return v={next:v},v[Symbol.iterator]=function(){return this},v}function c(v){var w=typeof Symbol<"u"&&Symbol.iterator&&v[Symbol.iterator];return w?w.call(v):{next:i(v)}}function l(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function h(v){if(v.i)throw new TypeError("Generator is already running");v.i=!0}l.prototype.l=function(v){this.o=v};function m(v,w){v.h={F:w,G:!0},v.j=v.m}l.prototype.return=function(v){this.h={return:v},this.j=this.m};function _(v){this.g=new l,this.h=v}function M(v,w){h(v.g);var Z=v.g.g;return Z?x(v,"return"in Z?Z.return:function(z){return{value:z,done:!0}},w,v.g.return):(v.g.return(w),S(v))}function x(v,w,Z,z){try{var it=w.call(v.g.g,Z);if(!(it instanceof Object))throw new TypeError("Iterator result "+it+" is not an object");if(!it.done)return v.g.i=!1,it;var ht=it.value}catch(G){return v.g.g=null,m(v.g,G),S(v)}return v.g.g=null,z.call(v.g,ht),S(v)}function S(v){for(;v.g.j;)try{var w=v.h(v.g);if(w)return v.g.i=!1,{value:w.value,done:!1}}catch(Z){v.g.o=void 0,m(v.g,Z)}if(v.g.i=!1,v.g.h){if(w=v.g.h,v.g.h=null,w.G)throw w.F;return{value:w.return,done:!0}}return{value:void 0,done:!0}}function b(v){this.next=function(w){return h(v.g),v.g.g?w=x(v,v.g.g.next,w,v.g.l):(v.g.l(w),w=S(v)),w},this.throw=function(w){return h(v.g),v.g.g?w=x(v,v.g.g.throw,w,v.g.l):(m(v.g,w),w=S(v)),w},this.return=function(w){return M(v,w)},this[Symbol.iterator]=function(){return this}}function R(v){function w(z){return v.next(z)}function Z(z){return v.throw(z)}return new Promise(function(z,it){function ht(G){G.done?z(G.value):Promise.resolve(G.value).then(w,Z).then(ht,it)}ht(v.next())})}r("Promise",function(v){function w(G){this.h=0,this.i=void 0,this.g=[],this.o=!1;var st=this.j();try{G(st.resolve,st.reject)}catch(K){st.reject(K)}}function Z(){this.g=null}function z(G){return G instanceof w?G:new w(function(st){st(G)})}if(v)return v;Z.prototype.h=function(G){if(this.g==null){this.g=[];var st=this;this.i(function(){st.l()})}this.g.push(G)};var it=n.setTimeout;Z.prototype.i=function(G){it(G,0)},Z.prototype.l=function(){for(;this.g&&this.g.length;){var G=this.g;this.g=[];for(var st=0;st<G.length;++st){var K=G[st];G[st]=null;try{K()}catch(gt){this.j(gt)}}}this.g=null},Z.prototype.j=function(G){this.i(function(){throw G})},w.prototype.j=function(){function G(gt){return function(At){K||(K=!0,gt.call(st,At))}}var st=this,K=!1;return{resolve:G(this.A),reject:G(this.l)}},w.prototype.A=function(G){if(G===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(G instanceof w)this.C(G);else{t:switch(typeof G){case"object":var st=G!=null;break t;case"function":st=!0;break t;default:st=!1}st?this.v(G):this.m(G)}},w.prototype.v=function(G){var st=void 0;try{st=G.then}catch(K){this.l(K);return}typeof st=="function"?this.D(st,G):this.m(G)},w.prototype.l=function(G){this.u(2,G)},w.prototype.m=function(G){this.u(1,G)},w.prototype.u=function(G,st){if(this.h!=0)throw Error("Cannot settle("+G+", "+st+"): Promise already settled in state"+this.h);this.h=G,this.i=st,this.h===2&&this.B(),this.H()},w.prototype.B=function(){var G=this;it(function(){if(G.I()){var st=n.console;typeof st<"u"&&st.error(G.i)}},1)},w.prototype.I=function(){if(this.o)return!1;var G=n.CustomEvent,st=n.Event,K=n.dispatchEvent;return typeof K>"u"?!0:(typeof G=="function"?G=new G("unhandledrejection",{cancelable:!0}):typeof st=="function"?G=new st("unhandledrejection",{cancelable:!0}):(G=n.document.createEvent("CustomEvent"),G.initCustomEvent("unhandledrejection",!1,!0,G)),G.promise=this,G.reason=this.i,K(G))},w.prototype.H=function(){if(this.g!=null){for(var G=0;G<this.g.length;++G)ht.h(this.g[G]);this.g=null}};var ht=new Z;return w.prototype.C=function(G){var st=this.j();G.s(st.resolve,st.reject)},w.prototype.D=function(G,st){var K=this.j();try{G.call(st,K.resolve,K.reject)}catch(gt){K.reject(gt)}},w.prototype.then=function(G,st){function K(te,de){return typeof te=="function"?function(ct){try{gt(te(ct))}catch(vt){At(vt)}}:de}var gt,At,Nt=new w(function(te,de){gt=te,At=de});return this.s(K(G,gt),K(st,At)),Nt},w.prototype.catch=function(G){return this.then(void 0,G)},w.prototype.s=function(G,st){function K(){switch(gt.h){case 1:G(gt.i);break;case 2:st(gt.i);break;default:throw Error("Unexpected state: "+gt.h)}}var gt=this;this.g==null?ht.h(K):this.g.push(K),this.o=!0},w.resolve=z,w.reject=function(G){return new w(function(st,K){K(G)})},w.race=function(G){return new w(function(st,K){for(var gt=c(G),At=gt.next();!At.done;At=gt.next())z(At.value).s(st,K)})},w.all=function(G){var st=c(G),K=st.next();return K.done?z([]):new w(function(gt,At){function Nt(ct){return function(vt){te[ct]=vt,de--,de==0&&gt(te)}}var te=[],de=0;do te.push(void 0),de++,z(K.value).s(Nt(te.length-1),At),K=st.next();while(!K.done)})},w});var y=typeof Object.assign=="function"?Object.assign:function(v,w){for(var Z=1;Z<arguments.length;Z++){var z=arguments[Z];if(z)for(var it in z)Object.prototype.hasOwnProperty.call(z,it)&&(v[it]=z[it])}return v};r("Object.assign",function(v){return v||y});var p=this||self,O={facingMode:"user",width:640,height:480};function D(v,w){this.video=v,this.i=0,this.h=Object.assign(Object.assign({},O),w)}D.prototype.stop=function(){var v=this,w,Z,z,it;return R(new b(new _(function(ht){if(v.g){for(w=v.g.getTracks(),Z=c(w),z=Z.next();!z.done;z=Z.next())it=z.value,it.stop();v.g=void 0}ht.j=0})))},D.prototype.start=function(){var v=this,w;return R(new b(new _(function(Z){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),w=v.h,Z.return(navigator.mediaDevices.getUserMedia({video:{facingMode:w.facingMode,width:w.width,height:w.height}}).then(function(z){rt(v,z)}).catch(function(z){var it="Failed to acquire camera feed: "+z;throw console.error(it),alert(it),z}))})))};function C(v){window.requestAnimationFrame(function(){V(v)})}function rt(v,w){v.g=w,v.video.srcObject=w,v.video.onloadedmetadata=function(){v.video.play(),C(v)}}function V(v){var w=null;v.video.paused||v.video.currentTime===v.i||(v.i=v.video.currentTime,w=v.h.onFrame()),w?w.then(function(){C(v)}):C(v)}var H=["Camera"],Y=p;H[0]in Y||typeof Y.execScript>"u"||Y.execScript("var "+H[0]);for(var P;H.length&&(P=H.shift());)H.length||D===void 0?Y[P]&&Y[P]!==Object.prototype[P]?Y=Y[P]:Y=Y[P]={}:Y[P]=D}).call(pi);var Rm={};(function(){var i;function t(a){var f=0;return function(){return f<a.length?{done:!1,value:a[f++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,g){return a==Array.prototype||a==Object.prototype||(a[f]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof pi=="object"&&pi];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function o(a,f){if(f)t:{var g=r;a=a.split(".");for(var N=0;N<a.length-1;N++){var q=a[N];if(!(q in g))break t;g=g[q]}a=a[a.length-1],N=g[a],f=f(N),f!=N&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}o("Symbol",function(a){function f(lt){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new g(N+(lt||"")+"_"+q++,lt)}function g(lt,$){this.g=lt,e(this,"description",{configurable:!0,writable:!0,value:$})}if(a)return a;g.prototype.toString=function(){return this.g};var N="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",q=0;return f}),o("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var f="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),g=0;g<f.length;g++){var N=r[f[g]];typeof N=="function"&&typeof N.prototype[a]!="function"&&e(N.prototype,a,{configurable:!0,writable:!0,value:function(){return c(t(this))}})}return a});function c(a){return a={next:a},a[Symbol.iterator]=function(){return this},a}function l(a){var f=typeof Symbol<"u"&&Symbol.iterator&&a[Symbol.iterator];return f?f.call(a):{next:t(a)}}function h(a){if(!(a instanceof Array)){a=l(a);for(var f,g=[];!(f=a.next()).done;)g.push(f.value);a=g}return a}var m=typeof Object.create=="function"?Object.create:function(a){function f(){}return f.prototype=a,new f},_;if(typeof Object.setPrototypeOf=="function")_=Object.setPrototypeOf;else{var M;t:{var x={a:!0},S={};try{S.__proto__=x,M=S.a;break t}catch{}M=!1}_=M?function(a,f){if(a.__proto__=f,a.__proto__!==f)throw new TypeError(a+" is not extensible");return a}:null}var b=_;function R(a,f){if(a.prototype=m(f.prototype),a.prototype.constructor=a,b)b(a,f);else for(var g in f)if(g!="prototype")if(Object.defineProperties){var N=Object.getOwnPropertyDescriptor(f,g);N&&Object.defineProperty(a,g,N)}else a[g]=f[g];a.ea=f.prototype}function y(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function p(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}y.prototype.o=function(a){this.h=a};function O(a,f){a.j={U:f,V:!0},a.g=a.m||a.s}y.prototype.return=function(a){this.j={return:a},this.g=this.s};function D(a,f,g){return a.g=g,{value:f}}function C(a){this.g=new y,this.h=a}function rt(a,f){p(a.g);var g=a.g.i;return g?V(a,"return"in g?g.return:function(N){return{value:N,done:!0}},f,a.g.return):(a.g.return(f),H(a))}function V(a,f,g,N){try{var q=f.call(a.g.i,g);if(!(q instanceof Object))throw new TypeError("Iterator result "+q+" is not an object");if(!q.done)return a.g.l=!1,q;var lt=q.value}catch($){return a.g.i=null,O(a.g,$),H(a)}return a.g.i=null,N.call(a.g,lt),H(a)}function H(a){for(;a.g.g;)try{var f=a.h(a.g);if(f)return a.g.l=!1,{value:f.value,done:!1}}catch(g){a.g.h=void 0,O(a.g,g)}if(a.g.l=!1,a.g.j){if(f=a.g.j,a.g.j=null,f.V)throw f.U;return{value:f.return,done:!0}}return{value:void 0,done:!0}}function Y(a){this.next=function(f){return p(a.g),a.g.i?f=V(a,a.g.i.next,f,a.g.o):(a.g.o(f),f=H(a)),f},this.throw=function(f){return p(a.g),a.g.i?f=V(a,a.g.i.throw,f,a.g.o):(O(a.g,f),f=H(a)),f},this.return=function(f){return rt(a,f)},this[Symbol.iterator]=function(){return this}}function P(a,f){return f=new Y(new C(f)),b&&a.prototype&&b(f,a.prototype),f}function v(a,f){a instanceof String&&(a+="");var g=0,N=!1,q={next:function(){if(!N&&g<a.length){var lt=g++;return{value:f(lt,a[lt]),done:!1}}return N=!0,{done:!0,value:void 0}}};return q[Symbol.iterator]=function(){return q},q}var w=typeof Object.assign=="function"?Object.assign:function(a,f){for(var g=1;g<arguments.length;g++){var N=arguments[g];if(N)for(var q in N)Object.prototype.hasOwnProperty.call(N,q)&&(a[q]=N[q])}return a};o("Object.assign",function(a){return a||w}),o("Promise",function(a){function f($){this.h=0,this.i=void 0,this.g=[],this.o=!1;var ut=this.j();try{$(ut.resolve,ut.reject)}catch(yt){ut.reject(yt)}}function g(){this.g=null}function N($){return $ instanceof f?$:new f(function(ut){ut($)})}if(a)return a;g.prototype.h=function($){if(this.g==null){this.g=[];var ut=this;this.i(function(){ut.l()})}this.g.push($)};var q=r.setTimeout;g.prototype.i=function($){q($,0)},g.prototype.l=function(){for(;this.g&&this.g.length;){var $=this.g;this.g=[];for(var ut=0;ut<$.length;++ut){var yt=$[ut];$[ut]=null;try{yt()}catch(Dt){this.j(Dt)}}}this.g=null},g.prototype.j=function($){this.i(function(){throw $})},f.prototype.j=function(){function $(Dt){return function(ae){yt||(yt=!0,Dt.call(ut,ae))}}var ut=this,yt=!1;return{resolve:$(this.C),reject:$(this.l)}},f.prototype.C=function($){if($===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if($ instanceof f)this.F($);else{t:switch(typeof $){case"object":var ut=$!=null;break t;case"function":ut=!0;break t;default:ut=!1}ut?this.u($):this.m($)}},f.prototype.u=function($){var ut=void 0;try{ut=$.then}catch(yt){this.l(yt);return}typeof ut=="function"?this.G(ut,$):this.m($)},f.prototype.l=function($){this.s(2,$)},f.prototype.m=function($){this.s(1,$)},f.prototype.s=function($,ut){if(this.h!=0)throw Error("Cannot settle("+$+", "+ut+"): Promise already settled in state"+this.h);this.h=$,this.i=ut,this.h===2&&this.D(),this.A()},f.prototype.D=function(){var $=this;q(function(){if($.B()){var ut=r.console;typeof ut<"u"&&ut.error($.i)}},1)},f.prototype.B=function(){if(this.o)return!1;var $=r.CustomEvent,ut=r.Event,yt=r.dispatchEvent;return typeof yt>"u"?!0:(typeof $=="function"?$=new $("unhandledrejection",{cancelable:!0}):typeof ut=="function"?$=new ut("unhandledrejection",{cancelable:!0}):($=r.document.createEvent("CustomEvent"),$.initCustomEvent("unhandledrejection",!1,!0,$)),$.promise=this,$.reason=this.i,yt($))},f.prototype.A=function(){if(this.g!=null){for(var $=0;$<this.g.length;++$)lt.h(this.g[$]);this.g=null}};var lt=new g;return f.prototype.F=function($){var ut=this.j();$.J(ut.resolve,ut.reject)},f.prototype.G=function($,ut){var yt=this.j();try{$.call(ut,yt.resolve,yt.reject)}catch(Dt){yt.reject(Dt)}},f.prototype.then=function($,ut){function yt(pe,ce){return typeof pe=="function"?function(Ft){try{Dt(pe(Ft))}catch(Xt){ae(Xt)}}:ce}var Dt,ae,Ne=new f(function(pe,ce){Dt=pe,ae=ce});return this.J(yt($,Dt),yt(ut,ae)),Ne},f.prototype.catch=function($){return this.then(void 0,$)},f.prototype.J=function($,ut){function yt(){switch(Dt.h){case 1:$(Dt.i);break;case 2:ut(Dt.i);break;default:throw Error("Unexpected state: "+Dt.h)}}var Dt=this;this.g==null?lt.h(yt):this.g.push(yt),this.o=!0},f.resolve=N,f.reject=function($){return new f(function(ut,yt){yt($)})},f.race=function($){return new f(function(ut,yt){for(var Dt=l($),ae=Dt.next();!ae.done;ae=Dt.next())N(ae.value).J(ut,yt)})},f.all=function($){var ut=l($),yt=ut.next();return yt.done?N([]):new f(function(Dt,ae){function Ne(Ft){return function(Xt){pe[Ft]=Xt,ce--,ce==0&&Dt(pe)}}var pe=[],ce=0;do pe.push(void 0),ce++,N(yt.value).J(Ne(pe.length-1),ae),yt=ut.next();while(!yt.done)})},f}),o("Object.is",function(a){return a||function(f,g){return f===g?f!==0||1/f===1/g:f!==f&&g!==g}}),o("Array.prototype.includes",function(a){return a||function(f,g){var N=this;N instanceof String&&(N=String(N));var q=N.length;for(g=g||0,0>g&&(g=Math.max(g+q,0));g<q;g++){var lt=N[g];if(lt===f||Object.is(lt,f))return!0}return!1}}),o("String.prototype.includes",function(a){return a||function(f,g){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(f instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(f,g||0)!==-1}}),o("Array.prototype.keys",function(a){return a||function(){return v(this,function(f){return f})}});var Z=this||self;function z(a,f){a=a.split(".");var g=Z;a[0]in g||typeof g.execScript>"u"||g.execScript("var "+a[0]);for(var N;a.length&&(N=a.shift());)a.length||f===void 0?g[N]&&g[N]!==Object.prototype[N]?g=g[N]:g=g[N]={}:g[N]=f}function it(a,f){return f=String.fromCharCode.apply(null,f),a==null?f:a+f}var ht,G=typeof TextDecoder<"u",st,K=typeof TextEncoder<"u";function gt(a){if(K)a=(st||(st=new TextEncoder)).encode(a);else{var f=void 0;f=f===void 0?!1:f;for(var g=0,N=new Uint8Array(3*a.length),q=0;q<a.length;q++){var lt=a.charCodeAt(q);if(128>lt)N[g++]=lt;else{if(2048>lt)N[g++]=lt>>6|192;else{if(55296<=lt&&57343>=lt){if(56319>=lt&&q<a.length){var $=a.charCodeAt(++q);if(56320<=$&&57343>=$){lt=1024*(lt-55296)+$-56320+65536,N[g++]=lt>>18|240,N[g++]=lt>>12&63|128,N[g++]=lt>>6&63|128,N[g++]=lt&63|128;continue}else q--}if(f)throw Error("Found an unpaired surrogate");lt=65533}N[g++]=lt>>12|224,N[g++]=lt>>6&63|128}N[g++]=lt&63|128}}a=N.subarray(0,g)}return a}var At={},Nt=null;function te(a,f){f===void 0&&(f=0),vt(),f=At[f];for(var g=Array(Math.floor(a.length/3)),N=f[64]||"",q=0,lt=0;q<a.length-2;q+=3){var $=a[q],ut=a[q+1],yt=a[q+2],Dt=f[$>>2];$=f[($&3)<<4|ut>>4],ut=f[(ut&15)<<2|yt>>6],yt=f[yt&63],g[lt++]=Dt+$+ut+yt}switch(Dt=0,yt=N,a.length-q){case 2:Dt=a[q+1],yt=f[(Dt&15)<<2]||N;case 1:a=a[q],g[lt]=f[a>>2]+f[(a&3)<<4|Dt>>4]+yt+N}return g.join("")}function de(a){var f=a.length,g=3*f/4;g%3?g=Math.floor(g):"=.".indexOf(a[f-1])!=-1&&(g="=.".indexOf(a[f-2])!=-1?g-2:g-1);var N=new Uint8Array(g),q=0;return ct(a,function(lt){N[q++]=lt}),N.subarray(0,q)}function ct(a,f){function g(yt){for(;N<a.length;){var Dt=a.charAt(N++),ae=Nt[Dt];if(ae!=null)return ae;if(!/^[\s\xa0]*$/.test(Dt))throw Error("Unknown base64 encoding at char: "+Dt)}return yt}vt();for(var N=0;;){var q=g(-1),lt=g(0),$=g(64),ut=g(64);if(ut===64&&q===-1)break;f(q<<2|lt>>4),$!=64&&(f(lt<<4&240|$>>2),ut!=64&&f($<<6&192|ut))}}function vt(){if(!Nt){Nt={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),f=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var N=a.concat(f[g].split(""));At[g]=N;for(var q=0;q<N.length;q++){var lt=N[q];Nt[lt]===void 0&&(Nt[lt]=q)}}}}var Ht=typeof Uint8Array.prototype.slice=="function",Rt;function Jt(a,f,g){return f===g?Rt||(Rt=new Uint8Array(0)):Ht?a.slice(f,g):new Uint8Array(a.subarray(f,g))}var qt=0,ne=0;function Pe(a,f){f=f===void 0?{}:f,f=f.v===void 0?!1:f.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=f,a&&Ee(this,a)}function Ee(a,f){f=f.constructor===Uint8Array?f:f.constructor===ArrayBuffer?new Uint8Array(f):f.constructor===Array?new Uint8Array(f):f.constructor===String?de(f):f instanceof Uint8Array?new Uint8Array(f.buffer,f.byteOffset,f.byteLength):new Uint8Array(0),a.h=f,a.l=0,a.j=a.h.length,a.g=a.l}Pe.prototype.reset=function(){this.g=this.l};function le(a){for(var f=128,g=0,N=0,q=0;4>q&&128<=f;q++)f=a.h[a.g++],g|=(f&127)<<7*q;if(128<=f&&(f=a.h[a.g++],g|=(f&127)<<28,N|=(f&127)>>4),128<=f)for(q=0;5>q&&128<=f;q++)f=a.h[a.g++],N|=(f&127)<<7*q+3;if(128>f)return a=g>>>0,f=N>>>0,(N=f&2147483648)&&(a=~a+1>>>0,f=~f>>>0,a==0&&(f=f+1>>>0)),a=4294967296*f+(a>>>0),N?-a:a;a.m=!0}Pe.prototype.i=function(){var a=this.h,f=a[this.g],g=f&127;return 128>f?(this.g+=1,g):(f=a[this.g+1],g|=(f&127)<<7,128>f?(this.g+=2,g):(f=a[this.g+2],g|=(f&127)<<14,128>f?(this.g+=3,g):(f=a[this.g+3],g|=(f&127)<<21,128>f?(this.g+=4,g):(f=a[this.g+4],g|=(f&15)<<28,128>f?(this.g+=5,g>>>0):(this.g+=5,128<=a[this.g++]&&128<=a[this.g++]&&128<=a[this.g++]&&128<=a[this.g++]&&this.g++,g)))))},Pe.prototype.o=function(){var a=this.h[this.g],f=this.h[this.g+1],g=this.h[this.g+2],N=this.h[this.g+3];return this.g+=4,g=(a<<0|f<<8|g<<16|N<<24)>>>0,a=2*(g>>31)+1,f=g>>>23&255,g&=8388607,f==255?g?NaN:1/0*a:f==0?a*Math.pow(2,-149)*g:a*Math.pow(2,f-150)*(g+Math.pow(2,23))};var W=[];function en(){this.g=new Uint8Array(64),this.h=0}en.prototype.push=function(a){if(!(this.h+1<this.g.length)){var f=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(f)}this.g[this.h++]=a},en.prototype.length=function(){return this.h},en.prototype.end=function(){var a=this.g,f=this.h;return this.h=0,Jt(a,0,f)};function ue(a,f){for(;127<f;)a.push(f&127|128),f>>>=7;a.push(f)}function he(a){var f={},g=f.N===void 0?!1:f.N;this.o={v:f.v===void 0?!1:f.v},this.N=g,f=this.o,W.length?(g=W.pop(),f&&(g.v=f.v),a&&Ee(g,a),a=g):a=new Pe(a,f),this.g=a,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}he.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function kt(a){var f=a.g;if((f=f.g==f.j)||(f=a.j)||(f=a.g,f=f.m||0>f.g||f.g>f.j),f)return!1;a.m=a.g.g,f=a.g.i();var g=f&7;return g!=0&&g!=5&&g!=1&&g!=2&&g!=3&&g!=4?(a.j=!0,!1):(a.i=f,a.l=f>>>3,a.h=g,!0)}function Ue(a){switch(a.h){case 0:if(a.h!=0)Ue(a);else{for(a=a.g;a.h[a.g]&128;)a.g++;a.g++}break;case 1:a.h!=1?Ue(a):(a=a.g,a.g+=8);break;case 2:if(a.h!=2)Ue(a);else{var f=a.g.i();a=a.g,a.g+=f}break;case 5:a.h!=5?Ue(a):(a=a.g,a.g+=4);break;case 3:f=a.l;do{if(!kt(a)){a.j=!0;break}if(a.h==4){a.l!=f&&(a.j=!0);break}Ue(a)}while(!0);break;default:a.j=!0}}function Wt(a,f,g){var N=a.g.j,q=a.g.i(),lt=a.g.g+q;if(a.g.j=lt,g(f,a),g=lt-a.g.g,g!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+q+" bytes, instead read "+(q-g)+" bytes, either the data ended unexpectedly or the message misreported its own length");return a.g.g=lt,a.g.j=N,f}function L(a){return a.g.o()}function T(a){var f=a.g.i();a=a.g;var g=a.g;a.g+=f,a=a.h;var N;if(G)(N=ht)||(N=ht=new TextDecoder("utf-8",{fatal:!1})),N=N.decode(a.subarray(g,g+f));else{f=g+f;for(var q=[],lt=null,$,ut,yt;g<f;)$=a[g++],128>$?q.push($):224>$?g>=f?q.push(65533):(ut=a[g++],194>$||(ut&192)!==128?(g--,q.push(65533)):q.push(($&31)<<6|ut&63)):240>$?g>=f-1?q.push(65533):(ut=a[g++],(ut&192)!==128||$===224&&160>ut||$===237&&160<=ut||((N=a[g++])&192)!==128?(g--,q.push(65533)):q.push(($&15)<<12|(ut&63)<<6|N&63)):244>=$?g>=f-2?q.push(65533):(ut=a[g++],(ut&192)!==128||($<<28)+(ut-144)>>30||((N=a[g++])&192)!==128||((yt=a[g++])&192)!==128?(g--,q.push(65533)):($=($&7)<<18|(ut&63)<<12|(N&63)<<6|yt&63,$-=65536,q.push(($>>10&1023)+55296,($&1023)+56320))):q.push(65533),8192<=q.length&&(lt=it(lt,q),q.length=0);N=it(lt,q)}return N}function J(a,f,g){var N=a.g.i();for(N=a.g.g+N;a.g.g<N;)g.push(f.call(a.g))}function ft(a,f){a.h==2?J(a,Pe.prototype.o,f):f.push(L(a))}function mt(){this.h=[],this.i=0,this.g=new en}function at(a,f){f.length!==0&&(a.h.push(f),a.i+=f.length)}function Ot(a){var f=a.i+a.g.length();if(f===0)return new Uint8Array(0);f=new Uint8Array(f);for(var g=a.h,N=g.length,q=0,lt=0;lt<N;lt++){var $=g[lt];$.length!==0&&(f.set($,q),q+=$.length)}return g=a.g,N=g.h,N!==0&&(f.set(g.g.subarray(0,N),q),g.h=0),a.h=[f],f}function St(a,f,g){if(g!=null){ue(a.g,8*f+5),a=a.g;var N=g;N=(g=0>N?1:0)?-N:N,N===0?0<1/N?qt=ne=0:(ne=0,qt=2147483648):isNaN(N)?(ne=0,qt=2147483647):34028234663852886e22<N?(ne=0,qt=(g<<31|2139095040)>>>0):11754943508222875e-54>N?(N=Math.round(N/Math.pow(2,-149)),ne=0,qt=(g<<31|N)>>>0):(f=Math.floor(Math.log(N)/Math.LN2),N*=Math.pow(2,-f),N=Math.round(8388608*N),16777216<=N&&++f,ne=0,qt=(g<<31|f+127<<23|N&8388607)>>>0),g=qt,a.push(g>>>0&255),a.push(g>>>8&255),a.push(g>>>16&255),a.push(g>>>24&255)}}var Lt=typeof Uint8Array=="function";function Te(a,f,g){if(a!=null)return typeof a=="object"?Lt&&a instanceof Uint8Array?g(a):Mt(a,f,g):f(a)}function Mt(a,f,g){if(Array.isArray(a)){for(var N=Array(a.length),q=0;q<a.length;q++)N[q]=Te(a[q],f,g);return Array.isArray(a)&&a.W&&Kt(N),N}N={};for(q in a)N[q]=Te(a[q],f,g);return N}function It(a){return typeof a=="number"?isFinite(a)?a:String(a):a}var Yt={W:{value:!0,configurable:!0}};function Kt(a){return Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,Yt),a}var Ut;function Zt(a,f,g){var N=Ut;Ut=null,a||(a=N),N=this.constructor.ca,a||(a=N?[N]:[]),this.j=N?0:-1,this.m=this.g=null,this.h=a;t:{if(N=this.h.length,a=N-1,N&&(N=this.h[a],!(N===null||typeof N!="object"||Array.isArray(N)||Lt&&N instanceof Uint8Array))){this.l=a-this.j,this.i=N;break t}f!==void 0&&-1<f?(this.l=Math.max(f,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(g)for(f=0;f<g.length;f++)a=g[f],a<this.l?(a+=this.j,(N=this.h[a])?Kt(N):this.h[a]=ie):(Fe(this),(N=this.i[a])?Kt(N):this.i[a]=ie)}var ie=Object.freeze(Kt([]));function Fe(a){var f=a.l+a.j;a.h[f]||(a.i=a.h[f]={})}function B(a,f,g){return f===-1?null:g!==void 0&&g||f>=a.l?a.i?a.i[f]:void 0:a.h[f+a.j]}function Tt(a,f){var g=g===void 0?!1:g,N=B(a,f,g);return N==null&&(N=ie),N===ie&&(N=Kt([]),pt(a,f,N,g)),N}function ot(a){var f=Tt(a,3);if(a.m||(a.m={}),!a.m[3]){for(var g=0;g<f.length;g++)f[g]=+f[g];a.m[3]=!0}return f}function dt(a,f,g){return a=B(a,f),a??g}function Et(a,f,g){return a=B(a,f),a=a==null?a:+a,a??(g===void 0?0:g)}function pt(a,f,g,N){N!==void 0&&N||f>=a.l?(Fe(a),a.i[f]=g):a.h[f+a.j]=g}function ee(a,f,g){if(g===-1)return null;if(a.g||(a.g={}),!a.g[g]){var N=B(a,g,!1);N&&(a.g[g]=new f(N))}return a.g[g]}function Ge(a,f){a.g||(a.g={});var g=a.g[1];if(!g){var N=Tt(a,1);g=[];for(var q=0;q<N.length;q++)g[q]=new f(N[q]);a.g[1]=g}return g}function Je(a,f,g){var N=N===void 0?!1:N;a.g||(a.g={});var q=g&&Ze(g);a.g[f]=g,pt(a,f,q,N)}function Ae(a,f,g,N){var q=Ge(a,g);f=f||new g,a=Tt(a,1),N!=null?(q.splice(N,0,f),a.splice(N,0,Ze(f))):(q.push(f),a.push(Ze(f)))}Zt.prototype.toJSON=function(){var a=Ze(this);return Mt(a,It,te)};function Ze(a,f){if(a.g)for(var g in a.g){var N=a.g[g];if(Array.isArray(N))for(var q=0;q<N.length;q++)N[q]&&Ze(N[q]);else N&&Ze(N)}return a.h}Zt.prototype.toString=function(){return Ze(this).toString()};function xn(a,f){if(a=a.o){at(f,f.g.end());for(var g=0;g<a.length;g++)at(f,a[g])}}function un(a,f){if(f.h==4)return!1;var g=f.m;return Ue(f),f.N||(f=Jt(f.g.h,g,f.g.g),(g=a.o)?g.push(f):a.o=[f]),!0}function Fn(a){Zt.call(this,a,-1,Ln)}R(Fn,Zt),Fn.prototype.getRows=function(){return B(this,1)},Fn.prototype.getCols=function(){return B(this,2)},Fn.prototype.getPackedDataList=function(){return ot(this)},Fn.prototype.getLayout=function(){return dt(this,4,0)};function rn(a,f){for(;kt(f);)switch(f.i){case 8:var g=f.g.i();pt(a,1,g);break;case 16:g=f.g.i(),pt(a,2,g);break;case 29:case 26:ft(f,a.getPackedDataList());break;case 32:g=le(f.g),pt(a,4,g);break;default:if(!un(a,f))return a}return a}var Ln=[3];function Qe(a,f){var g=void 0;return new(g||(g=Promise))(function(N,q){function lt(yt){try{ut(f.next(yt))}catch(Dt){q(Dt)}}function $(yt){try{ut(f.throw(yt))}catch(Dt){q(Dt)}}function ut(yt){yt.done?N(yt.value):new g(function(Dt){Dt(yt.value)}).then(lt,$)}ut((f=f.apply(a,void 0)).next())})}function We(a){Zt.call(this,a)}R(We,Zt);function dn(a,f){for(;kt(f);)switch(f.i){case 8:var g=f.g.i();pt(a,1,g);break;case 21:g=L(f),pt(a,2,g);break;case 26:g=T(f),pt(a,3,g);break;case 34:g=T(f),pt(a,4,g);break;default:if(!un(a,f))return a}return a}function Kn(a){Zt.call(this,a,-1,_i)}R(Kn,Zt),Kn.prototype.addClassification=function(a,f){return Ae(this,a,We,f),this};var _i=[1];function En(a){Zt.call(this,a)}R(En,Zt);function vi(a,f){for(;kt(f);)switch(f.i){case 13:var g=L(f);pt(a,1,g);break;case 21:g=L(f),pt(a,2,g);break;case 29:g=L(f),pt(a,3,g);break;case 37:g=L(f),pt(a,4,g);break;case 45:g=L(f),pt(a,5,g);break;default:if(!un(a,f))return a}return a}function ii(a){Zt.call(this,a,-1,Ki)}R(ii,Zt);function Zn(a){t:{var f=new ii;for(a=new he(a);kt(a);)switch(a.i){case 10:var g=Wt(a,new En,vi);Ae(f,g,En,void 0);break;default:if(!un(f,a))break t}}return f}var Ki=[1];function A(a){Zt.call(this,a)}R(A,Zt);function j(a){Zt.call(this,a,-1,Q)}R(j,Zt),j.prototype.getVertexType=function(){return dt(this,1,0)},j.prototype.getPrimitiveType=function(){return dt(this,2,0)},j.prototype.getVertexBufferList=function(){return ot(this)},j.prototype.getIndexBufferList=function(){return Tt(this,4)};function et(a,f){for(;kt(f);)switch(f.i){case 8:var g=le(f.g);pt(a,1,g);break;case 16:g=le(f.g),pt(a,2,g);break;case 29:case 26:ft(f,a.getVertexBufferList());break;case 32:case 34:g=f;var N=a.getIndexBufferList();g.h==2?J(g,Pe.prototype.i,N):N.push(g.g.i());break;default:if(!un(a,f))return a}return a}var Q=[3,4];function X(a){Zt.call(this,a)}R(X,Zt),X.prototype.getMesh=function(){return ee(this,j,1)},X.prototype.getPoseTransformMatrix=function(){return ee(this,Fn,2)};function xt(a){t:{var f=new X;for(a=new he(a);kt(a);)switch(a.i){case 10:var g=Wt(a,new j,et);Je(f,1,g);break;case 18:g=Wt(a,new Fn,rn),Je(f,2,g);break;default:if(!un(f,a))break t}}return f}function wt(a,f,g){if(g=a.createShader(g===0?a.VERTEX_SHADER:a.FRAGMENT_SHADER),a.shaderSource(g,f),a.compileShader(g),!a.getShaderParameter(g,a.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+a.getShaderInfoLog(g));return g}function Bt(a){return Ge(a,We).map(function(f){return{index:dt(f,1,0),Y:Et(f,2),label:B(f,3)!=null?dt(f,3,""):void 0,displayName:B(f,4)!=null?dt(f,4,""):void 0}})}function zt(a){return{x:Et(a,1),y:Et(a,2),z:Et(a,3),visibility:B(a,4)!=null?Et(a,4):void 0}}function Qt(a,f){this.h=a,this.g=f,this.l=0}function $t(a,f,g){return Gt(a,f),typeof a.g.canvas.transferToImageBitmap=="function"?Promise.resolve(a.g.canvas.transferToImageBitmap()):g?Promise.resolve(a.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(a.g.canvas):(a.i===void 0&&(a.i=document.createElement("canvas")),new Promise(function(N){a.i.height=a.g.canvas.height,a.i.width=a.g.canvas.width,a.i.getContext("2d",{}).drawImage(a.g.canvas,0,0,a.g.canvas.width,a.g.canvas.height),N(a.i)}))}function Gt(a,f){var g=a.g;if(a.m===void 0){var N=wt(g,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),q=wt(g,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),lt=g.createProgram();if(g.attachShader(lt,N),g.attachShader(lt,q),g.linkProgram(lt),!g.getProgramParameter(lt,g.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+g.getProgramInfoLog(lt));N=a.m=lt,g.useProgram(N),q=g.getUniformLocation(N,"sampler0"),a.j={I:g.getAttribLocation(N,"aVertex"),H:g.getAttribLocation(N,"aTex"),da:q},a.s=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,a.s),g.enableVertexAttribArray(a.j.I),g.vertexAttribPointer(a.j.I,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),a.o=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,a.o),g.enableVertexAttribArray(a.j.H),g.vertexAttribPointer(a.j.H,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),g.uniform1i(q,0)}N=a.j,g.useProgram(a.m),g.canvas.width=f.width,g.canvas.height=f.height,g.viewport(0,0,f.width,f.height),g.activeTexture(g.TEXTURE0),a.h.bindTexture2d(f.glName),g.enableVertexAttribArray(N.I),g.bindBuffer(g.ARRAY_BUFFER,a.s),g.vertexAttribPointer(N.I,2,g.FLOAT,!1,0,0),g.enableVertexAttribArray(N.H),g.bindBuffer(g.ARRAY_BUFFER,a.o),g.vertexAttribPointer(N.H,2,g.FLOAT,!1,0,0),g.bindFramebuffer(g.DRAW_FRAMEBUFFER?g.DRAW_FRAMEBUFFER:g.FRAMEBUFFER,null),g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),g.colorMask(!0,!0,!0,!0),g.drawArrays(g.TRIANGLE_FAN,0,4),g.disableVertexAttribArray(N.I),g.disableVertexAttribArray(N.H),g.bindBuffer(g.ARRAY_BUFFER,null),a.h.bindTexture2d(0)}function Me(a){this.g=a}var ye=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Be(a,f){return f+a}function sn(a,f){window[a]=f}function De(a){var f=document.createElement("script");return f.setAttribute("src",a),f.setAttribute("crossorigin","anonymous"),new Promise(function(g){f.addEventListener("load",function(){g()},!1),f.addEventListener("error",function(){g()},!1),document.body.appendChild(f)})}function Vt(){return Qe(this,function a(){return P(a,function(f){switch(f.g){case 1:return f.m=2,D(f,WebAssembly.instantiate(ye),4);case 4:f.g=3,f.m=0;break;case 2:return f.m=0,f.j=null,f.return(!1);case 3:return f.return(!0)}})})}function Mn(a){if(this.g=a,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=a&&a.locateFile||Be,typeof window=="object")var f=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")f=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=f,a.options){f=l(Object.keys(a.options));for(var g=f.next();!g.done;g=f.next()){g=g.value;var N=a.options[g].default;N!==void 0&&(this.j[g]=typeof N=="function"?N():N)}}}i=Mn.prototype,i.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function Ie(a,f){return a.g.files===void 0?[]:typeof a.g.files=="function"?a.g.files(f):a.g.files}function gn(a){return Qe(a,function f(){var g=this,N,q,lt,$,ut,yt,Dt,ae,Ne,pe,ce;return P(f,function(Ft){switch(Ft.g){case 1:return N=g,g.R?(q=Ie(g,g.j),D(Ft,Vt(),2)):Ft.return();case 2:if(lt=Ft.h,typeof window=="object")return sn("createMediapipeSolutionsWasm",{locateFile:g.locateFile}),sn("createMediapipeSolutionsPackedAssets",{locateFile:g.locateFile}),yt=q.filter(function(Xt){return Xt.data!==void 0}),Dt=q.filter(function(Xt){return Xt.data===void 0}),ae=Promise.all(yt.map(function(Xt){var me=On(N,Xt.url);if(Xt.path!==void 0){var be=Xt.path;me=me.then(function(tn){return N.overrideFile(be,tn),Promise.resolve(tn)})}return me})),Ne=Promise.all(Dt.map(function(Xt){return Xt.simd===void 0||Xt.simd&&lt||!Xt.simd&&!lt?De(N.locateFile(Xt.url,N.S)):Promise.resolve()})).then(function(){return Qe(N,function Xt(){var me,be,tn=this;return P(Xt,function(He){if(He.g==1)return me=window.createMediapipeSolutionsWasm,be=window.createMediapipeSolutionsPackedAssets,D(He,me(be),2);tn.h=He.h,He.g=0})})}),pe=function(){return Qe(N,function Xt(){var me=this;return P(Xt,function(be){return me.g.graph&&me.g.graph.url?be=D(be,On(me,me.g.graph.url),0):(be.g=0,be=void 0),be})})}(),D(Ft,Promise.all([Ne,ae,pe]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return $=q.filter(function(Xt){return Xt.simd===void 0||Xt.simd&&lt||!Xt.simd&&!lt}).map(function(Xt){return N.locateFile(Xt.url,N.S)}),importScripts.apply(null,h($)),D(Ft,createMediapipeSolutionsWasm(Module),6);case 6:g.h=Ft.h,g.l=new OffscreenCanvas(1,1),g.h.canvas=g.l,ut=g.h.GL.createContext(g.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),g.h.GL.makeContextCurrent(ut),Ft.g=4;break;case 7:if(g.l=document.createElement("canvas"),ce=g.l.getContext("webgl2",{}),!ce&&(ce=g.l.getContext("webgl",{}),!ce))return alert("Failed to create WebGL canvas context when passing video frame."),Ft.return();g.D=ce,g.h.canvas=g.l,g.h.createContext(g.l,!0,!0,{});case 4:g.i=new g.h.SolutionWasm,g.R=!1,Ft.g=0}})})}function kn(a){return Qe(a,function f(){var g=this,N,q,lt,$,ut,yt,Dt,ae;return P(f,function(Ne){if(Ne.g==1){if(g.g.graph&&g.g.graph.url&&g.P===g.g.graph.url)return Ne.return();if(g.o=!0,!g.g.graph||!g.g.graph.url){Ne.g=2;return}return g.P=g.g.graph.url,D(Ne,On(g,g.g.graph.url),3)}for(Ne.g!=2&&(N=Ne.h,g.i.loadGraph(N)),q=l(Object.keys(g.B)),lt=q.next();!lt.done;lt=q.next())$=lt.value,g.i.overrideFile($,g.B[$]);if(g.B={},g.g.listeners)for(ut=l(g.g.listeners),yt=ut.next();!yt.done;yt=ut.next())Dt=yt.value,$n(g,Dt);ae=g.j,g.j={},g.setOptions(ae),Ne.g=0})})}i.reset=function(){return Qe(this,function a(){var f=this;return P(a,function(g){f.i&&(f.i.reset(),f.m={},f.s={}),g.g=0})})},i.setOptions=function(a,f){var g=this;if(f=f||this.g.options){for(var N=[],q=[],lt={},$=l(Object.keys(a)),ut=$.next();!ut.done;lt={K:lt.K,L:lt.L},ut=$.next()){var yt=ut.value;yt in this.j&&this.j[yt]===a[yt]||(this.j[yt]=a[yt],ut=f[yt],ut!==void 0&&(ut.onChange&&(lt.K=ut.onChange,lt.L=a[yt],N.push(function(Dt){return function(){return Qe(g,function ae(){var Ne,pe=this;return P(ae,function(ce){if(ce.g==1)return D(ce,Dt.K(Dt.L),2);Ne=ce.h,Ne===!0&&(pe.o=!0),ce.g=0})})}}(lt))),ut.graphOptionXref&&(yt={valueNumber:ut.type===1?a[yt]:0,valueBoolean:ut.type===0?a[yt]:!1,valueString:ut.type===2?a[yt]:""},ut=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),ut.graphOptionXref),yt),q.push(ut))))}(N.length!==0||q.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(q),this.u=(this.u===void 0?[]:this.u).concat(N))}};function hn(a){return Qe(a,function f(){var g=this,N,q,lt,$,ut,yt,Dt;return P(f,function(ae){switch(ae.g){case 1:if(!g.o)return ae.return();if(!g.u){ae.g=2;break}N=l(g.u),q=N.next();case 3:if(q.done){ae.g=5;break}return lt=q.value,D(ae,lt(),4);case 4:q=N.next(),ae.g=3;break;case 5:g.u=void 0;case 2:if(g.A){for($=new g.h.GraphOptionChangeRequestList,ut=l(g.A),yt=ut.next();!yt.done;yt=ut.next())Dt=yt.value,$.push_back(Dt);g.i.changeOptions($),$.delete(),g.A=void 0}g.o=!1,ae.g=0}})})}i.initialize=function(){return Qe(this,function a(){var f=this;return P(a,function(g){return g.g==1?D(g,gn(f),2):g.g!=3?D(g,kn(f),3):D(g,hn(f),0)})})};function On(a,f){return Qe(a,function g(){var N=this,q,lt;return P(g,function($){return f in N.F?$.return(N.F[f]):(q=N.locateFile(f,""),lt=fetch(q).then(function(ut){return ut.arrayBuffer()}),N.F[f]=lt,$.return(lt))})})}i.overrideFile=function(a,f){this.i?this.i.overrideFile(a,f):this.B[a]=f},i.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},i.send=function(a,f){return Qe(this,function g(){var N=this,q,lt,$,ut,yt,Dt,ae,Ne,pe;return P(g,function(ce){switch(ce.g){case 1:return N.g.inputs?(q=1e3*(f??performance.now()),D(ce,N.C,2)):ce.return();case 2:return D(ce,N.initialize(),3);case 3:for(lt=new N.h.PacketDataList,$=l(Object.keys(a)),ut=$.next();!ut.done;ut=$.next())if(yt=ut.value,Dt=N.g.inputs[yt]){t:{var Ft=N,Xt=a[yt];switch(Dt.type){case"video":var me=Ft.m[Dt.stream];if(me||(me=new Qt(Ft.h,Ft.D),Ft.m[Dt.stream]=me),Ft=me,Ft.l===0&&(Ft.l=Ft.h.createTexture()),typeof HTMLVideoElement<"u"&&Xt instanceof HTMLVideoElement){var be=Xt.videoWidth;me=Xt.videoHeight}else typeof HTMLImageElement<"u"&&Xt instanceof HTMLImageElement?(be=Xt.naturalWidth,me=Xt.naturalHeight):(be=Xt.width,me=Xt.height);me={glName:Ft.l,width:be,height:me},be=Ft.g,be.canvas.width=me.width,be.canvas.height=me.height,be.activeTexture(be.TEXTURE0),Ft.h.bindTexture2d(Ft.l),be.texImage2D(be.TEXTURE_2D,0,be.RGBA,be.RGBA,be.UNSIGNED_BYTE,Xt),Ft.h.bindTexture2d(0),Ft=me;break t;case"detections":for(me=Ft.m[Dt.stream],me||(me=new Me(Ft.h),Ft.m[Dt.stream]=me),Ft=me,Ft.data||(Ft.data=new Ft.g.DetectionListData),Ft.data.reset(Xt.length),me=0;me<Xt.length;++me){be=Xt[me];var tn=Ft.data,He=tn.setBoundingBox,an=me,qe=be.T,re=new A;pt(re,1,qe.Z),pt(re,2,qe.$),pt(re,3,qe.height),pt(re,4,qe.width),pt(re,5,qe.rotation),pt(re,6,qe.X);var we=qe=new mt;St(we,1,B(re,1)),St(we,2,B(re,2)),St(we,3,B(re,3)),St(we,4,B(re,4)),St(we,5,B(re,5));var Re=B(re,6);if(Re!=null&&Re!=null){ue(we.g,48);var _e=we.g,Ce=Re;Re=0>Ce,Ce=Math.abs(Ce);var ve=Ce>>>0;for(Ce=Math.floor((Ce-ve)/4294967296),Ce>>>=0,Re&&(Ce=~Ce>>>0,ve=(~ve>>>0)+1,4294967295<ve&&(ve=0,Ce++,4294967295<Ce&&(Ce=0))),qt=ve,ne=Ce,Re=qt,ve=ne;0<ve||127<Re;)_e.push(Re&127|128),Re=(Re>>>7|ve<<25)>>>0,ve>>>=7;_e.push(Re)}if(xn(re,we),qe=Ot(qe),He.call(tn,an,qe),be.O)for(tn=0;tn<be.O.length;++tn)re=be.O[tn],we=!!re.visibility,He=Ft.data,an=He.addNormalizedLandmark,qe=me,re=Object.assign(Object.assign({},re),{visibility:we?re.visibility:0}),we=new En,pt(we,1,re.x),pt(we,2,re.y),pt(we,3,re.z),re.visibility&&pt(we,4,re.visibility),_e=re=new mt,St(_e,1,B(we,1)),St(_e,2,B(we,2)),St(_e,3,B(we,3)),St(_e,4,B(we,4)),St(_e,5,B(we,5)),xn(we,_e),re=Ot(re),an.call(He,qe,re);if(be.M)for(tn=0;tn<be.M.length;++tn){if(He=Ft.data,an=He.addClassification,qe=me,re=be.M[tn],we=new We,pt(we,2,re.Y),re.index&&pt(we,1,re.index),re.label&&pt(we,3,re.label),re.displayName&&pt(we,4,re.displayName),_e=re=new mt,ve=B(we,1),ve!=null&&ve!=null)if(ue(_e.g,8),Re=_e.g,0<=ve)ue(Re,ve);else{for(Ce=0;9>Ce;Ce++)Re.push(ve&127|128),ve>>=7;Re.push(1)}St(_e,2,B(we,2)),Re=B(we,3),Re!=null&&(Re=gt(Re),ue(_e.g,26),ue(_e.g,Re.length),at(_e,_e.g.end()),at(_e,Re)),Re=B(we,4),Re!=null&&(Re=gt(Re),ue(_e.g,34),ue(_e.g,Re.length),at(_e,_e.g.end()),at(_e,Re)),xn(we,_e),re=Ot(re),an.call(He,qe,re)}}Ft=Ft.data;break t;default:Ft={}}}switch(ae=Ft,Ne=Dt.stream,Dt.type){case"video":lt.pushTexture2d(Object.assign(Object.assign({},ae),{stream:Ne,timestamp:q}));break;case"detections":pe=ae,pe.stream=Ne,pe.timestamp=q,lt.pushDetectionList(pe);break;default:throw Error("Unknown input config type: '"+Dt.type+"'")}}return N.i.send(lt),D(ce,N.C,4);case 4:lt.delete(),ce.g=0}})})};function fe(a,f,g){return Qe(a,function N(){var q,lt,$,ut,yt,Dt,ae=this,Ne,pe,ce,Ft,Xt,me,be,tn;return P(N,function(He){switch(He.g){case 1:if(!g)return He.return(f);for(q={},lt=0,$=l(Object.keys(g)),ut=$.next();!ut.done;ut=$.next())yt=ut.value,Dt=g[yt],typeof Dt!="string"&&Dt.type==="texture"&&f[Dt.stream]!==void 0&&++lt;1<lt&&(ae.G=!1),Ne=l(Object.keys(g)),ut=Ne.next();case 2:if(ut.done){He.g=4;break}if(pe=ut.value,ce=g[pe],typeof ce=="string")return be=q,tn=pe,D(He,yn(ae,pe,f[ce]),14);if(Ft=f[ce.stream],ce.type==="detection_list"){if(Ft){for(var an=Ft.getRectList(),qe=Ft.getLandmarksList(),re=Ft.getClassificationsList(),we=[],Re=0;Re<an.size();++Re){var _e=an.get(Re);t:{var Ce=new A;for(_e=new he(_e);kt(_e);)switch(_e.i){case 13:var ve=L(_e);pt(Ce,1,ve);break;case 21:ve=L(_e),pt(Ce,2,ve);break;case 29:ve=L(_e),pt(Ce,3,ve);break;case 37:ve=L(_e),pt(Ce,4,ve);break;case 45:ve=L(_e),pt(Ce,5,ve);break;case 48:ve=le(_e.g),pt(Ce,6,ve);break;default:if(!un(Ce,_e))break t}}Ce={Z:Et(Ce,1),$:Et(Ce,2),height:Et(Ce,3),width:Et(Ce,4),rotation:Et(Ce,5,0),X:dt(Ce,6,0)},_e=Ge(Zn(qe.get(Re)),En).map(zt);var ri=re.get(Re);t:for(ve=new Kn,ri=new he(ri);kt(ri);)switch(ri.i){case 10:ve.addClassification(Wt(ri,new We,dn));break;default:if(!un(ve,ri))break t}Ce={T:Ce,O:_e,M:Bt(ve)},we.push(Ce)}an=we}else an=[];q[pe]=an,He.g=7;break}if(ce.type==="proto_list"){if(Ft){for(an=Array(Ft.size()),qe=0;qe<Ft.size();qe++)an[qe]=Ft.get(qe);Ft.delete()}else an=[];q[pe]=an,He.g=7;break}if(Ft===void 0){He.g=3;break}if(ce.type==="float_list"){q[pe]=Ft,He.g=7;break}if(ce.type==="proto"){q[pe]=Ft,He.g=7;break}if(ce.type!=="texture")throw Error("Unknown output config type: '"+ce.type+"'");return Xt=ae.s[pe],Xt||(Xt=new Qt(ae.h,ae.D),ae.s[pe]=Xt),D(He,$t(Xt,Ft,ae.G),13);case 13:me=He.h,q[pe]=me;case 7:ce.transform&&q[pe]&&(q[pe]=ce.transform(q[pe])),He.g=3;break;case 14:be[tn]=He.h;case 3:ut=Ne.next(),He.g=2;break;case 4:return He.return(q)}})})}function yn(a,f,g){return Qe(a,function N(){var q=this,lt;return P(N,function($){return typeof g=="number"||g instanceof Uint8Array||g instanceof q.h.Uint8BlobList?$.return(g):g instanceof q.h.Texture2dDataOut?(lt=q.s[f],lt||(lt=new Qt(q.h,q.D),q.s[f]=lt),$.return($t(lt,g,q.G))):$.return(void 0)})})}function $n(a,f){for(var g=f.name||"$",N=[].concat(h(f.wants)),q=new a.h.StringList,lt=l(f.wants),$=lt.next();!$.done;$=lt.next())q.push_back($.value);lt=a.h.PacketListener.implement({onResults:function(ut){for(var yt={},Dt=0;Dt<f.wants.length;++Dt)yt[N[Dt]]=ut.get(Dt);var ae=a.listeners[g];ae&&(a.C=fe(a,yt,f.outs).then(function(Ne){Ne=ae(Ne);for(var pe=0;pe<f.wants.length;++pe){var ce=yt[N[pe]];typeof ce=="object"&&ce.hasOwnProperty&&ce.hasOwnProperty("delete")&&ce.delete()}Ne&&(a.C=Ne)}))}}),a.i.attachMultiListener(q,lt),q.delete()}i.onResults=function(a,f){this.listeners[f||"$"]=a},z("Solution",Mn),z("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function on(a){a=xt(a);var f=a.getMesh();if(!f)return a;var g=new Float32Array(f.getVertexBufferList());f.getVertexBufferList=function(){return g};var N=new Uint32Array(f.getIndexBufferList());return f.getIndexBufferList=function(){return N},a}var Un={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(a){return a.map(on)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(a){return a.map(function(f){return Ge(Zn(f),En).map(zt)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},Tn=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Ui=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Hr=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Er=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Tr=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Di=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],kr=[].concat(h(Tn),h(Ui),h(Hr),h(Er),h(Tr),h(Di));function Ar(a){a=a||{},a=Object.assign(Object.assign({},Un),a),this.g=new Mn(a)}i=Ar.prototype,i.close=function(){return this.g.close(),Promise.resolve()},i.onResults=function(a){this.g.onResults(a)},i.initialize=function(){return Qe(this,function a(){var f=this;return P(a,function(g){return D(g,f.g.initialize(),0)})})},i.reset=function(){this.g.reset()},i.send=function(a){return Qe(this,function f(){var g=this;return P(f,function(N){return D(N,g.g.send(a),0)})})},i.setOptions=function(a){this.g.setOptions(a)},z("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),z("FaceMesh",Ar),z("FACEMESH_LIPS",Tn),z("FACEMESH_LEFT_EYE",Ui),z("FACEMESH_LEFT_EYEBROW",Hr),z("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),z("FACEMESH_RIGHT_EYE",Er),z("FACEMESH_RIGHT_EYEBROW",Tr),z("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),z("FACEMESH_FACE_OVAL",Di),z("FACEMESH_CONTOURS",kr),z("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),z("matrixDataToMatrix",function(a){for(var f=a.getCols(),g=a.getRows(),N=a.getPackedDataList(),q=[],lt=0;lt<g;lt++)q.push(Array(f));for(lt=0;lt<g;lt++)for(var $=0;$<f;$++){var ut=a.getLayout()===1?lt*f+$:$*g+lt;q[lt][$]=N[ut]}return q}),z("VERSION","0.4.1633559619")}).call(pi);function Cm(){const i=br.useRef(null),t=br.useRef(null),[e,n]=br.useState(!1);return br.useEffect(()=>{if(i.current){const r=new ym,o=new Nn(75,window.innerWidth/window.innerHeight,.1,1e3),c=new Mm;c.setSize(window.innerWidth/2,window.innerHeight/2),i.current.appendChild(c.domElement);const l=new qi(5,.1,5),h=new ro({color:9127187}),m=new Hn(l,h);r.add(m);const _=new qi(1,1,1),M=new ro({color:16711680}),x=new Hn(_,M);x.position.set(0,.6,0),r.add(x);const S=new sa(.5,32,32),b=new ro({color:255}),R=new Hn(S,b);R.position.set(2,.6,0),r.add(R);const y=new Am(16777215,.5);r.add(y);const p=new Tm(16777215,1);p.position.set(10,10,10),r.add(p),o.position.z=10;const O=()=>{requestAnimationFrame(O),m.rotation.y+=.01,x.rotation.x+=.01,x.rotation.y+=.01,R.rotation.y+=.01,c.render(r,o)};O()}},[]),br.useEffect(()=>{if(e&&t.current){const r=new bm.Hands({locateFile:l=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${l}`});r.setOptions({maxNumHands:2,minDetectionConfidence:.5,minTrackingConfidence:.5});const o=new Rm.FaceMesh({locateFile:l=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${l}`});o.setOptions({maxNumFaces:1,minDetectionConfidence:.5,minTrackingConfidence:.5});const c=new wm.Camera(t.current,{onFrame:async()=>{t.current&&(await r.send({image:t.current}),await o.send({image:t.current}))}});r.onResults(l=>{if(l.multiHandLandmarks&&l.multiHandLandmarks.length>0){const m=l.multiHandLandmarks[0][8];(m.x-.5)*10,-(m.y-.5)*10}console.log("Hands detected:",l)}),o.onResults(l=>{console.log("Face detected:",l)}),c.start()}},[e]),Le.jsxs("div",{className:"flex-grow flex flex-col items-center justify-center",children:[Le.jsx("div",{ref:i,className:"bg-gray-300"}),Le.jsxs("table",{className:"mt-4 border-collapse border border-gray-400",children:[Le.jsx("thead",{children:Le.jsxs("tr",{children:[Le.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Object"}),Le.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Type"})]})}),Le.jsxs("tbody",{children:[Le.jsxs("tr",{children:[Le.jsx("td",{className:"border border-gray-300 px-4 py-2",children:"Box"}),Le.jsx("td",{className:"border border-gray-300 px-4 py-2",children:"Cube"})]}),Le.jsxs("tr",{children:[Le.jsx("td",{className:"border border-gray-300 px-4 py-2",children:"Sphere"}),Le.jsx("td",{className:"border border-gray-300 px-4 py-2",children:"Sphere"})]}),Le.jsxs("tr",{children:[Le.jsx("td",{className:"border border-gray-300 px-4 py-2",children:"Table"}),Le.jsx("td",{className:"border border-gray-300 px-4 py-2",children:"Flat Surface"})]})]})]}),Le.jsx("button",{onClick:()=>n(!0),className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",children:"Open Camera for Face & Hand Tracking"}),e&&Le.jsx("div",{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center",children:Le.jsxs("div",{className:"bg-white rounded p-4 relative",children:[Le.jsx("button",{onClick:()=>n(!1),className:"absolute top-2 right-2 text-red-500 font-bold",children:"X"}),Le.jsx("video",{ref:t,className:"w-full h-full",autoPlay:!0,playsInline:!0})]})})]})}function Pm(){return Le.jsxs("div",{className:"w-64 bg-gray-800 text-white flex flex-col",children:[Le.jsx("div",{className:"p-4 font-bold",children:"Creative Labs"}),Le.jsx("button",{className:"p-4 hover:bg-gray-600",children:"Physics"})]})}function Um(){return Le.jsxs("div",{className:"flex flex-col h-screen",children:[Le.jsx(gc,{}),Le.jsxs("div",{className:"flex flex-grow",children:[Le.jsx(Pm,{}),Le.jsx(Cm,{})]})]})}export{Um as default};
