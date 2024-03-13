var db=Object.defineProperty;var hb=(i,t,s)=>t in i?db(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var cu=(i,t,s)=>(hb(i,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function s(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(u){if(u.ep)return;u.ep=!0;const d=s(u);fetch(u.href,d)}})();function Hi(){}function km(i){return i()}function Lp(){return Object.create(null)}function ua(i){i.forEach(km)}function Tm(i){return typeof i=="function"}function Cm(i,t){return i!=i?t==t:i!==t||i&&typeof i=="object"||typeof i=="function"}function fb(i){return Object.keys(i).length===0}function ke(i,t){i.appendChild(t)}function Uu(i,t,s){i.insertBefore(t,s||null)}function la(i){i.parentNode&&i.parentNode.removeChild(i)}function pt(i){return document.createElement(i)}function fs(i){return document.createTextNode(i)}function an(){return fs(" ")}function Am(i,t,s,a){return i.addEventListener(t,s,a),()=>i.removeEventListener(t,s,a)}function qo(i,t,s){s==null?i.removeAttribute(t):i.getAttribute(t)!==s&&i.setAttribute(t,s)}function pb(i){return Array.from(i.childNodes)}function Rm(i,t){t=""+t,i.data!==t&&(i.data=t)}let ps;function cs(i){ps=i}function mb(){if(!ps)throw new Error("Function called outside component initialization");return ps}function gb(i){mb().$$.on_mount.push(i)}const xi=[],Mp=[];let Fi=[];const xp=[],vb=Promise.resolve();let Su=!1;function yb(){Su||(Su=!0,vb.then(Pm))}function ku(i){Fi.push(i)}const uu=new Set;let Li=0;function Pm(){if(Li!==0)return;const i=ps;do{try{for(;Li<xi.length;){const t=xi[Li];Li++,cs(t),bb(t.$$)}}catch(t){throw xi.length=0,Li=0,t}for(cs(null),xi.length=0,Li=0;Mp.length;)Mp.pop()();for(let t=0;t<Fi.length;t+=1){const s=Fi[t];uu.has(s)||(uu.add(s),s())}Fi.length=0}while(xi.length);for(;xp.length;)xp.pop()();Su=!1,uu.clear(),cs(i)}function bb(i){if(i.fragment!==null){i.update(),ua(i.before_update);const t=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,t),i.after_update.forEach(ku)}}function wb(i){const t=[],s=[];Fi.forEach(a=>i.indexOf(a)===-1?t.push(a):s.push(a)),s.forEach(a=>a()),Fi=t}const Yo=new Set;let Ib;function Om(i,t){i&&i.i&&(Yo.delete(i),i.i(t))}function _b(i,t,s,a){if(i&&i.o){if(Yo.has(i))return;Yo.add(i),Ib.c.push(()=>{Yo.delete(i),a&&(s&&i.d(1),a())}),i.o(t)}else a&&a()}function Eb(i){i&&i.c()}function Nm(i,t,s){const{fragment:a,after_update:u}=i.$$;a&&a.m(t,s),ku(()=>{const d=i.$$.on_mount.map(km).filter(Tm);i.$$.on_destroy?i.$$.on_destroy.push(...d):ua(d),i.$$.on_mount=[]}),u.forEach(ku)}function Dm(i,t){const s=i.$$;s.fragment!==null&&(wb(s.after_update),ua(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Sb(i,t){i.$$.dirty[0]===-1&&(xi.push(i),yb(),i.$$.dirty.fill(0)),i.$$.dirty[t/31|0]|=1<<t%31}function Lm(i,t,s,a,u,d,f=null,p=[-1]){const m=ps;cs(i);const y=i.$$={fragment:null,ctx:[],props:d,update:Hi,not_equal:u,bound:Lp(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:Lp(),dirty:p,skip_bound:!1,root:t.target||m.$$.root};f&&f(y.root);let k=!1;if(y.ctx=s?s(i,t.props||{},(w,L,...D)=>{const ae=D.length?D[0]:L;return y.ctx&&u(y.ctx[w],y.ctx[w]=ae)&&(!y.skip_bound&&y.bound[w]&&y.bound[w](ae),k&&Sb(i,w)),L}):[],y.update(),k=!0,ua(y.before_update),y.fragment=a?a(y.ctx):!1,t.target){if(t.hydrate){const w=pb(t.target);y.fragment&&y.fragment.l(w),w.forEach(la)}else y.fragment&&y.fragment.c();t.intro&&Om(i.$$.fragment),Nm(i,t.target,t.anchor),Pm()}cs(m)}class Mm{constructor(){cu(this,"$$");cu(this,"$$set")}$destroy(){Dm(this,1),this.$destroy=Hi}$on(t,s){if(!Tm(s))return Hi;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(s),()=>{const u=a.indexOf(s);u!==-1&&a.splice(u,1)}}$set(t){this.$$set&&!fb(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const kb="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(kb);const Tb="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='26.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20308'%3e%3cpath%20fill='%23FF3E00'%20d='M239.682%2040.707C211.113-.182%20154.69-12.301%20113.895%2013.69L42.247%2059.356a82.198%2082.198%200%200%200-37.135%2055.056a86.566%2086.566%200%200%200%208.536%2055.576a82.425%2082.425%200%200%200-12.296%2030.719a87.596%2087.596%200%200%200%2014.964%2066.244c28.574%2040.893%2084.997%2053.007%20125.787%2027.016l71.648-45.664a82.182%2082.182%200%200%200%2037.135-55.057a86.601%2086.601%200%200%200-8.53-55.577a82.409%2082.409%200%200%200%2012.29-30.718a87.573%2087.573%200%200%200-14.963-66.244'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M106.889%20270.841c-23.102%206.007-47.497-3.036-61.103-22.648a52.685%2052.685%200%200%201-9.003-39.85a49.978%2049.978%200%200%201%201.713-6.693l1.35-4.115l3.671%202.697a92.447%2092.447%200%200%200%2028.036%2014.007l2.663.808l-.245%202.659a16.067%2016.067%200%200%200%202.89%2010.656a17.143%2017.143%200%200%200%2018.397%206.828a15.786%2015.786%200%200%200%204.403-1.935l71.67-45.672a14.922%2014.922%200%200%200%206.734-9.977a15.923%2015.923%200%200%200-2.713-12.011a17.156%2017.156%200%200%200-18.404-6.832a15.78%2015.78%200%200%200-4.396%201.933l-27.35%2017.434a52.298%2052.298%200%200%201-14.553%206.391c-23.101%206.007-47.497-3.036-61.101-22.649a52.681%2052.681%200%200%201-9.004-39.849a49.428%2049.428%200%200%201%2022.34-33.114l71.664-45.677a52.218%2052.218%200%200%201%2014.563-6.398c23.101-6.007%2047.497%203.036%2061.101%2022.648a52.685%2052.685%200%200%201%209.004%2039.85a50.559%2050.559%200%200%201-1.713%206.692l-1.35%204.116l-3.67-2.693a92.373%2092.373%200%200%200-28.037-14.013l-2.664-.809l.246-2.658a16.099%2016.099%200%200%200-2.89-10.656a17.143%2017.143%200%200%200-18.398-6.828a15.786%2015.786%200%200%200-4.402%201.935l-71.67%2045.674a14.898%2014.898%200%200%200-6.73%209.975a15.9%2015.9%200%200%200%202.709%2012.012a17.156%2017.156%200%200%200%2018.404%206.832a15.841%2015.841%200%200%200%204.402-1.935l27.345-17.427a52.147%2052.147%200%200%201%2014.552-6.397c23.101-6.006%2047.497%203.037%2061.102%2022.65a52.681%2052.681%200%200%201%209.003%2039.848a49.453%2049.453%200%200%201-22.34%2033.12l-71.664%2045.673a52.218%2052.218%200%200%201-14.563%206.398'%3e%3c/path%3e%3c/svg%3e";function Cb(i){let t,s,a,u,d;return{c(){t=pt("button"),s=fs("count is "),a=fs(i[0])},m(f,p){Uu(f,t,p),ke(t,s),ke(t,a),u||(d=Am(t,"click",i[1]),u=!0)},p(f,[p]){p&1&&Rm(a,f[0])},i:Hi,o:Hi,d(f){f&&la(t),u=!1,d()}}}function Ab(i,t,s){let a=0;return[a,()=>{s(0,a+=1)}]}class Rb extends Mm{constructor(t){super(),Lm(this,t,Ab,Cb,Cm,{})}}var Up={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=function(i){const t=[];let s=0;for(let a=0;a<i.length;a++){let u=i.charCodeAt(a);u<128?t[s++]=u:u<2048?(t[s++]=u>>6|192,t[s++]=u&63|128):(u&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(u=65536+((u&1023)<<10)+(i.charCodeAt(++a)&1023),t[s++]=u>>18|240,t[s++]=u>>12&63|128,t[s++]=u>>6&63|128,t[s++]=u&63|128):(t[s++]=u>>12|224,t[s++]=u>>6&63|128,t[s++]=u&63|128)}return t},Pb=function(i){const t=[];let s=0,a=0;for(;s<i.length;){const u=i[s++];if(u<128)t[a++]=String.fromCharCode(u);else if(u>191&&u<224){const d=i[s++];t[a++]=String.fromCharCode((u&31)<<6|d&63)}else if(u>239&&u<365){const d=i[s++],f=i[s++],p=i[s++],m=((u&7)<<18|(d&63)<<12|(f&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(m>>10)),t[a++]=String.fromCharCode(56320+(m&1023))}else{const d=i[s++],f=i[s++];t[a++]=String.fromCharCode((u&15)<<12|(d&63)<<6|f&63)}}return t.join("")},Um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let u=0;u<i.length;u+=3){const d=i[u],f=u+1<i.length,p=f?i[u+1]:0,m=u+2<i.length,y=m?i[u+2]:0,k=d>>2,w=(d&3)<<4|p>>4;let L=(p&15)<<2|y>>6,D=y&63;m||(D=64,f||(L=64)),a.push(s[k],s[w],s[L],s[D])}return a.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(xm(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):Pb(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const s=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let u=0;u<i.length;){const d=s[i.charAt(u++)],p=u<i.length?s[i.charAt(u)]:0;++u;const y=u<i.length?s[i.charAt(u)]:64;++u;const w=u<i.length?s[i.charAt(u)]:64;if(++u,d==null||p==null||y==null||w==null)throw new Ob;const L=d<<2|p>>4;if(a.push(L),y!==64){const D=p<<4&240|y>>2;if(a.push(D),w!==64){const ae=y<<6&192|w;a.push(ae)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Ob extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nb=function(i){const t=xm(i);return Um.encodeByteArray(t,!0)},Fm=function(i){return Nb(i).replace(/\./g,"")},jm=function(i){try{return Um.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function ea(i,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const s=t;return new Date(s.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return t}for(const s in t)!t.hasOwnProperty(s)||!Db(s)||(i[s]=ea(i[s],t[s]));return i}function Db(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=()=>Lb().__FIREBASE_DEFAULTS__,xb=()=>{if(typeof process>"u"||typeof Up>"u")return;const i=Up.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Ub=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&jm(i[1]);return t&&JSON.parse(t)},da=()=>{try{return Mb()||xb()||Ub()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Fb=i=>{var t,s;return(s=(t=da())===null||t===void 0?void 0:t.emulatorHosts)===null||s===void 0?void 0:s[i]},Bm=()=>{var i;return(i=da())===null||i===void 0?void 0:i.config},Vm=i=>{var t;return(t=da())===null||t===void 0?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,s)=>{this.resolve=t,this.reject=s})}wrapCallback(t){return(s,a)=>{s?this.reject(s):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(s):t(s,a))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Hm(){var i;const t=(i=da())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vb(){return typeof self=="object"&&self.self===self}function Fu(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ju(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $m(){const i=Ce();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ms(){try{return typeof indexedDB=="object"}catch{return!1}}function Wm(){return new Promise((i,t)=>{try{let s=!0;const a="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(a);u.onsuccess=()=>{u.result.close(),s||self.indexedDB.deleteDatabase(a),i(!0)},u.onupgradeneeded=()=>{s=!1},u.onerror=()=>{var d;t(((d=u.error)===null||d===void 0?void 0:d.message)||"")}}catch(s){t(s)}})}function Hb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="FirebaseError";class Me extends Error{constructor(t,s,a){super(s),this.code=t,this.customData=a,this.name=$b,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bt.prototype.create)}}class Bt{constructor(t,s,a){this.service=t,this.serviceName=s,this.errors=a}create(t,...s){const a=s[0]||{},u=`${this.service}/${t}`,d=this.errors[t],f=d?Wb(d,a):"Error",p=`${this.serviceName}: ${f} (${u}).`;return new Me(u,p,a)}}function Wb(i,t){return i.replace(Gb,(s,a)=>{const u=t[a];return u!=null?String(u):`<${a}?>`})}const Gb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(i,t){return Object.prototype.hasOwnProperty.call(i,t)}function Kb(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function gs(i,t){if(i===t)return!0;const s=Object.keys(i),a=Object.keys(t);for(const u of s){if(!a.includes(u))return!1;const d=i[u],f=t[u];if(jp(d)&&jp(f)){if(!gs(d,f))return!1}else if(d!==f)return!1}for(const u of a)if(!s.includes(u))return!1;return!0}function jp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(i){const t=[];for(const[s,a]of Object.entries(i))Array.isArray(a)?a.forEach(u=>{t.push(encodeURIComponent(s)+"="+encodeURIComponent(u))}):t.push(encodeURIComponent(s)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function Ui(i){const t={};return i.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[u,d]=a.split("=");t[decodeURIComponent(u)]=decodeURIComponent(d)}}),t}function os(i){const t=i.indexOf("?");if(!t)return"";const s=i.indexOf("#",t);return i.substring(t,s>0?s:void 0)}function Gm(i,t){const s=new qb(i,t);return s.subscribe.bind(s)}class qb{constructor(t,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(s=>{s.next(t)})}error(t){this.forEachObserver(s=>{s.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,s,a){let u;if(t===void 0&&s===void 0&&a===void 0)throw new Error("Missing Observer.");zb(t,["next","error","complete"])?u=t:u={next:t,error:s,complete:a},u.next===void 0&&(u.next=lu),u.error===void 0&&(u.error=lu),u.complete===void 0&&(u.complete=lu);const d=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?u.error(this.finalError):u.complete()}catch{}}),this.observers.push(u),d}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,t)}sendOne(t,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{s(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zb(i,t){if(typeof i!="object"||i===null)return!1;for(const s of t)if(s in i&&typeof i[s]=="function")return!0;return!1}function lu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=1e3,Jb=2,Xb=4*60*60*1e3,Zb=.5;function Bp(i,t=Yb,s=Jb){const a=t*Math.pow(s,i),u=Math.round(Zb*a*(Math.random()-.5)*2);return Math.min(Xb,a+u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(i){return i&&i._delegate?i._delegate:i}class ot{constructor(t,s,a){this.name=t,this.instanceFactory=s,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(t,s){this.name=t,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const s=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(s)){const a=new jb;if(this.instancesDeferred.set(s,a),this.isInitialized(s)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:s});u&&a.resolve(u)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(t){var s;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),u=(s=t==null?void 0:t.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(d){if(u)return null;throw d}else{if(u)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(t1(t))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);try{const d=this.getOrInitializeService({instanceIdentifier:u});a.resolve(d)}catch{}}}}clearInstance(t=Mn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...t.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mn){return this.instances.has(t)}getOptions(t=Mn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:s={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:a,options:s});for(const[d,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(d);a===p&&f.resolve(u)}return u}onInit(t,s){var a;const u=this.normalizeInstanceIdentifier(s),d=(a=this.onInitCallbacks.get(u))!==null&&a!==void 0?a:new Set;d.add(t),this.onInitCallbacks.set(u,d);const f=this.instances.get(u);return f&&t(f,u),()=>{d.delete(t)}}invokeOnInitCallbacks(t,s){const a=this.onInitCallbacks.get(s);if(a)for(const u of a)try{u(t,s)}catch{}}getOrInitializeService({instanceIdentifier:t,options:s={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:e1(t),options:s}),this.instances.set(t,a),this.instancesOptions.set(t,s),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Mn){return this.component?this.component.multipleInstances?t:Mn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e1(i){return i===Mn?void 0:i}function t1(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const s=this.getProvider(t.name);if(s.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);s.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const s=new Qb(t,this);return this.providers.set(t,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=[];var ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ne||(ne={}));const Km={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},i1=ne.INFO,r1={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},s1=(i,t,...s)=>{if(t<i.logLevel)return;const a=new Date().toISOString(),u=r1[t];if(u)console[u](`[${a}]  ${i.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ha{constructor(t){this.name=t,this._logLevel=i1,this._logHandler=s1,this._userLogHandler=null,Bu.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Km[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}function o1(i){Bu.forEach(t=>{t.setLogLevel(i)})}function a1(i,t){for(const s of Bu){let a=null;t&&t.level&&(a=Km[t.level]),i===null?s.userLogHandler=null:s.userLogHandler=(u,d,...f)=>{const p=f.map(m=>{if(m==null)return null;if(typeof m=="string")return m;if(typeof m=="number"||typeof m=="boolean")return m.toString();if(m instanceof Error)return m.message;try{return JSON.stringify(m)}catch{return null}}).filter(m=>m).join(" ");d>=(a??u.logLevel)&&i({level:ne[d].toLowerCase(),message:p,args:f,type:u.name})}}}const c1=(i,t)=>t.some(s=>i instanceof s);let Vp,Hp;function u1(){return Vp||(Vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l1(){return Hp||(Hp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qm=new WeakMap,Tu=new WeakMap,zm=new WeakMap,du=new WeakMap,Vu=new WeakMap;function d1(i){const t=new Promise((s,a)=>{const u=()=>{i.removeEventListener("success",d),i.removeEventListener("error",f)},d=()=>{s(ln(i.result)),u()},f=()=>{a(i.error),u()};i.addEventListener("success",d),i.addEventListener("error",f)});return t.then(s=>{s instanceof IDBCursor&&qm.set(s,i)}).catch(()=>{}),Vu.set(t,i),t}function h1(i){if(Tu.has(i))return;const t=new Promise((s,a)=>{const u=()=>{i.removeEventListener("complete",d),i.removeEventListener("error",f),i.removeEventListener("abort",f)},d=()=>{s(),u()},f=()=>{a(i.error||new DOMException("AbortError","AbortError")),u()};i.addEventListener("complete",d),i.addEventListener("error",f),i.addEventListener("abort",f)});Tu.set(i,t)}let Cu={get(i,t,s){if(i instanceof IDBTransaction){if(t==="done")return Tu.get(i);if(t==="objectStoreNames")return i.objectStoreNames||zm.get(i);if(t==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return ln(i[t])},set(i,t,s){return i[t]=s,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function f1(i){Cu=i(Cu)}function p1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...s){const a=i.call(hu(this),t,...s);return zm.set(a,t.sort?t.sort():[t]),ln(a)}:l1().includes(i)?function(...t){return i.apply(hu(this),t),ln(qm.get(this))}:function(...t){return ln(i.apply(hu(this),t))}}function m1(i){return typeof i=="function"?p1(i):(i instanceof IDBTransaction&&h1(i),c1(i,u1())?new Proxy(i,Cu):i)}function ln(i){if(i instanceof IDBRequest)return d1(i);if(du.has(i))return du.get(i);const t=m1(i);return t!==i&&(du.set(i,t),Vu.set(t,i)),t}const hu=i=>Vu.get(i);function Ym(i,t,{blocked:s,upgrade:a,blocking:u,terminated:d}={}){const f=indexedDB.open(i,t),p=ln(f);return a&&f.addEventListener("upgradeneeded",m=>{a(ln(f.result),m.oldVersion,m.newVersion,ln(f.transaction),m)}),s&&f.addEventListener("blocked",m=>s(m.oldVersion,m.newVersion,m)),p.then(m=>{d&&m.addEventListener("close",()=>d()),u&&m.addEventListener("versionchange",y=>u(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const g1=["get","getKey","getAll","getAllKeys","count"],v1=["put","add","delete","clear"],fu=new Map;function $p(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(fu.get(t))return fu.get(t);const s=t.replace(/FromIndex$/,""),a=t!==s,u=v1.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!(u||g1.includes(s)))return;const d=async function(f,...p){const m=this.transaction(f,u?"readwrite":"readonly");let y=m.store;return a&&(y=y.index(p.shift())),(await Promise.all([y[s](...p),u&&m.done]))[0]};return fu.set(t,d),d}f1(i=>({...i,get:(t,s,a)=>$p(t,s)||i.get(t,s,a),has:(t,s)=>!!$p(t,s)||i.has(t,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(b1(s)){const a=s.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(s=>s).join(" ")}}function b1(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Au="@firebase/app",Wp="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new ha("@firebase/app"),w1="@firebase/app-compat",I1="@firebase/analytics-compat",_1="@firebase/analytics",E1="@firebase/app-check-compat",S1="@firebase/app-check",k1="@firebase/auth",T1="@firebase/auth-compat",C1="@firebase/database",A1="@firebase/database-compat",R1="@firebase/functions",P1="@firebase/functions-compat",O1="@firebase/installations",N1="@firebase/installations-compat",D1="@firebase/messaging",L1="@firebase/messaging-compat",M1="@firebase/performance",x1="@firebase/performance-compat",U1="@firebase/remote-config",F1="@firebase/remote-config-compat",j1="@firebase/storage",B1="@firebase/storage-compat",V1="@firebase/firestore",H1="@firebase/firestore-compat",$1="firebase",W1="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="[DEFAULT]",G1={[Au]:"fire-core",[w1]:"fire-core-compat",[_1]:"fire-analytics",[I1]:"fire-analytics-compat",[S1]:"fire-app-check",[E1]:"fire-app-check-compat",[k1]:"fire-auth",[T1]:"fire-auth-compat",[C1]:"fire-rtdb",[A1]:"fire-rtdb-compat",[R1]:"fire-fn",[P1]:"fire-fn-compat",[O1]:"fire-iid",[N1]:"fire-iid-compat",[D1]:"fire-fcm",[L1]:"fire-fcm-compat",[M1]:"fire-perf",[x1]:"fire-perf-compat",[U1]:"fire-rc",[F1]:"fire-rc-compat",[j1]:"fire-gcs",[B1]:"fire-gcs-compat",[V1]:"fire-fst",[H1]:"fire-fst-compat","fire-js":"fire-js",[$1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Map,vs=new Map;function ta(i,t){try{i.container.addComponent(t)}catch(s){Vn.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,s)}}function Jm(i,t){i.container.addOrOverwriteComponent(t)}function mt(i){const t=i.name;if(vs.has(t))return Vn.debug(`There were multiple attempts to register component ${t}.`),!1;vs.set(t,i);for(const s of hn.values())ta(s,i);return!0}function pn(i,t){const s=i.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),i.container.getProvider(t)}function K1(i,t,s=dn){pn(i,t).clearInstance(s)}function q1(){vs.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new Bt("app","Firebase",z1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y1=class{constructor(t,s,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=W1;function fa(i,t={}){let s=i;typeof t!="object"&&(t={name:t});const a=Object.assign({name:dn,automaticDataCollectionEnabled:!1},t),u=a.name;if(typeof u!="string"||!u)throw Ut.create("bad-app-name",{appName:String(u)});if(s||(s=Bm()),!s)throw Ut.create("no-options");const d=hn.get(u);if(d){if(gs(s,d.options)&&gs(a,d.config))return d;throw Ut.create("duplicate-app",{appName:u})}const f=new n1(u);for(const m of vs.values())f.addComponent(m);const p=new Y1(s,a,f);return hn.set(u,p),p}function Hu(i=dn){const t=hn.get(i);if(!t&&i===dn&&Bm())return fa();if(!t)throw Ut.create("no-app",{appName:i});return t}function J1(){return Array.from(hn.values())}async function Xm(i){const t=i.name;hn.has(t)&&(hn.delete(t),await Promise.all(i.container.getProviders().map(s=>s.delete())),i.isDeleted=!0)}function tt(i,t,s){var a;let u=(a=G1[i])!==null&&a!==void 0?a:i;s&&(u+=`-${s}`);const d=u.match(/\s|\//),f=t.match(/\s|\//);if(d||f){const p=[`Unable to register library "${u}" with version "${t}":`];d&&p.push(`library name "${u}" contains illegal characters (whitespace or "/")`),d&&f&&p.push("and"),f&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vn.warn(p.join(" "));return}mt(new ot(`${u}-version`,()=>({library:u,version:t}),"VERSION"))}function Zm(i,t){if(i!==null&&typeof i!="function")throw Ut.create("invalid-log-argument");a1(i,t)}function Qm(i){o1(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="firebase-heartbeat-database",Z1=1,ys="firebase-heartbeat-store";let pu=null;function eg(){return pu||(pu=Ym(X1,Z1,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(ys)}catch(s){console.warn(s)}}}}).catch(i=>{throw Ut.create("idb-open",{originalErrorMessage:i.message})})),pu}async function Q1(i){try{const s=(await eg()).transaction(ys),a=await s.objectStore(ys).get(tg(i));return await s.done,a}catch(t){if(t instanceof Me)Vn.warn(t.message);else{const s=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vn.warn(s.message)}}}async function Gp(i,t){try{const a=(await eg()).transaction(ys,"readwrite");await a.objectStore(ys).put(t,tg(i)),await a.done}catch(s){if(s instanceof Me)Vn.warn(s.message);else{const a=Ut.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});Vn.warn(a.message)}}}function tg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=1024,tw=30*24*60*60*1e3;class nw{constructor(t){this.container=t,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new rw(s),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,s;const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),d=Kp();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===d||this._heartbeatsCache.heartbeats.some(f=>f.date===d)))return this._heartbeatsCache.heartbeats.push({date:d,agent:u}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(f=>{const p=new Date(f.date).valueOf();return Date.now()-p<=tw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=Kp(),{heartbeatsToSend:a,unsentEntries:u}=iw(this._heartbeatsCache.heartbeats),d=Fm(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=s,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}}function Kp(){return new Date().toISOString().substring(0,10)}function iw(i,t=ew){const s=[];let a=i.slice();for(const u of i){const d=s.find(f=>f.agent===u.agent);if(d){if(d.dates.push(u.date),qp(s)>t){d.dates.pop();break}}else if(s.push({agent:u.agent,dates:[u.date]}),qp(s)>t){s.pop();break}a=a.slice(1)}return{heartbeatsToSend:s,unsentEntries:a}}class rw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ms()?Wm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await Q1(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var s;if(await this._canUseIndexedDBPromise){const u=await this.read();return Gp(this.app,{lastSentHeartbeatDate:(s=t.lastSentHeartbeatDate)!==null&&s!==void 0?s:u.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var s;if(await this._canUseIndexedDBPromise){const u=await this.read();return Gp(this.app,{lastSentHeartbeatDate:(s=t.lastSentHeartbeatDate)!==null&&s!==void 0?s:u.lastSentHeartbeatDate,heartbeats:[...u.heartbeats,...t.heartbeats]})}else return}}function qp(i){return Fm(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(i){mt(new ot("platform-logger",t=>new y1(t),"PRIVATE")),mt(new ot("heartbeat",t=>new nw(t),"PRIVATE")),tt(Au,Wp,i),tt(Au,Wp,"esm2017"),tt("fire-js","")}sw("");const ow=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Me,SDK_VERSION:Kn,_DEFAULT_ENTRY_NAME:dn,_addComponent:ta,_addOrOverwriteComponent:Jm,_apps:hn,_clearComponents:q1,_components:vs,_getProvider:pn,_registerComponent:mt,_removeServiceInstance:K1,deleteApp:Xm,getApp:Hu,getApps:J1,initializeApp:fa,onLog:Zm,registerVersion:tt,setLogLevel:Qm},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(t,s){this._delegate=t,this.firebase=s,ta(t,new ot("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Xm(this._delegate)))}_getService(t,s=dn){var a;this._delegate.checkDestroyed();const u=this._delegate.container.getProvider(t);return!u.isInitialized()&&((a=u.getComponent())===null||a===void 0?void 0:a.instantiationMode)==="EXPLICIT"&&u.initialize(),u.getImmediate({identifier:s})}_removeServiceInstance(t,s=dn){this._delegate.container.getProvider(t).clearInstance(s)}_addComponent(t){ta(this._delegate,t)}_addOrOverwriteComponent(t){Jm(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},zp=new Bt("app-compat","Firebase",cw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(i){const t={},s={__esModule:!0,initializeApp:d,app:u,registerVersion:tt,setLogLevel:Qm,onLog:Zm,apps:null,SDK_VERSION:Kn,INTERNAL:{registerComponent:p,removeApp:a,useAsService:m,modularAPIs:ow}};s.default=s,Object.defineProperty(s,"apps",{get:f});function a(y){delete t[y]}function u(y){if(y=y||dn,!Fp(t,y))throw zp.create("no-app",{appName:y});return t[y]}u.App=i;function d(y,k={}){const w=fa(y,k);if(Fp(t,w.name))return t[w.name];const L=new i(w,s);return t[w.name]=L,L}function f(){return Object.keys(t).map(y=>t[y])}function p(y){const k=y.name,w=k.replace("-compat","");if(mt(y)&&y.type==="PUBLIC"){const L=(D=u())=>{if(typeof D[w]!="function")throw zp.create("invalid-app-argument",{appName:k});return D[w]()};y.serviceProps!==void 0&&ea(L,y.serviceProps),s[w]=L,i.prototype[w]=function(...D){return this._getService.bind(this,k).apply(this,y.multipleInstances?D:[])}}return y.type==="PUBLIC"?s[w]:null}function m(y,k){return k==="serverAuth"?null:k}return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(){const i=uw(aw);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:ng,extendNamespace:t,createSubscribe:Gm,ErrorFactory:Bt,deepExtend:ea});function t(s){ea(i,s)}return i}const lw=ng();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=new ha("@firebase/app-compat"),dw="@firebase/app-compat",hw="0.2.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(i){tt(dw,hw,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Vb()&&self.firebase!==void 0){Yp.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const i=self.firebase.SDK_VERSION;i&&i.indexOf("LITE")>=0&&Yp.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const O=lw;fw();var pw="firebase",mw="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */O.registerVersion(pw,mw,"app-compat");var gw="firebase",vw="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(gw,vw,"app");const ig="@firebase/installations",$u="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=1e4,sg=`w:${$u}`,og="FIS_v2",yw="https://firebaseinstallations.googleapis.com/v1",bw=60*60*1e3,ww="installations",Iw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hn=new Bt(ww,Iw,_w);function ag(i){return i instanceof Me&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg({projectId:i}){return`${yw}/projects/${i}/installations`}function ug(i){return{token:i.token,requestStatus:2,expiresIn:Sw(i.expiresIn),creationTime:Date.now()}}async function lg(i,t){const a=(await t.json()).error;return Hn.create("request-failed",{requestName:i,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function dg({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function Ew(i,{refreshToken:t}){const s=dg(i);return s.append("Authorization",kw(t)),s}async function hg(i){const t=await i();return t.status>=500&&t.status<600?i():t}function Sw(i){return Number(i.replace("s","000"))}function kw(i){return`${og} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw({appConfig:i,heartbeatServiceProvider:t},{fid:s}){const a=cg(i),u=dg(i),d=t.getImmediate({optional:!0});if(d){const y=await d.getHeartbeatsHeader();y&&u.append("x-firebase-client",y)}const f={fid:s,authVersion:og,appId:i.appId,sdkVersion:sg},p={method:"POST",headers:u,body:JSON.stringify(f)},m=await hg(()=>fetch(a,p));if(m.ok){const y=await m.json();return{fid:y.fid||s,registrationStatus:2,refreshToken:y.refreshToken,authToken:ug(y.authToken)}}else throw await lg("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(i){return new Promise(t=>{setTimeout(t,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=/^[cdef][\w-]{21}$/,Ru="";function Rw(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const s=Pw(i);return Aw.test(s)?s:Ru}catch{return Ru}}function Pw(i){return Cw(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new Map;function mg(i,t){const s=pa(i);gg(s,t),Ow(s,t)}function gg(i,t){const s=pg.get(i);if(s)for(const a of s)a(t)}function Ow(i,t){const s=Nw();s&&s.postMessage({key:i,fid:t}),Dw()}let xn=null;function Nw(){return!xn&&"BroadcastChannel"in self&&(xn=new BroadcastChannel("[Firebase] FID Change"),xn.onmessage=i=>{gg(i.data.key,i.data.fid)}),xn}function Dw(){pg.size===0&&xn&&(xn.close(),xn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="firebase-installations-database",Mw=1,$n="firebase-installations-store";let mu=null;function Wu(){return mu||(mu=Ym(Lw,Mw,{upgrade:(i,t)=>{switch(t){case 0:i.createObjectStore($n)}}})),mu}async function na(i,t){const s=pa(i),u=(await Wu()).transaction($n,"readwrite"),d=u.objectStore($n),f=await d.get(s);return await d.put(t,s),await u.done,(!f||f.fid!==t.fid)&&mg(i,t.fid),t}async function vg(i){const t=pa(i),a=(await Wu()).transaction($n,"readwrite");await a.objectStore($n).delete(t),await a.done}async function ma(i,t){const s=pa(i),u=(await Wu()).transaction($n,"readwrite"),d=u.objectStore($n),f=await d.get(s),p=t(f);return p===void 0?await d.delete(s):await d.put(p,s),await u.done,p&&(!f||f.fid!==p.fid)&&mg(i,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gu(i){let t;const s=await ma(i.appConfig,a=>{const u=xw(a),d=Uw(i,u);return t=d.registrationPromise,d.installationEntry});return s.fid===Ru?{installationEntry:await t}:{installationEntry:s,registrationPromise:t}}function xw(i){const t=i||{fid:Rw(),registrationStatus:0};return yg(t)}function Uw(i,t){if(t.registrationStatus===0){if(!navigator.onLine){const u=Promise.reject(Hn.create("app-offline"));return{installationEntry:t,registrationPromise:u}}const s={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Fw(i,s);return{installationEntry:s,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:jw(i)}:{installationEntry:t}}async function Fw(i,t){try{const s=await Tw(i,t);return na(i.appConfig,s)}catch(s){throw ag(s)&&s.customData.serverCode===409?await vg(i.appConfig):await na(i.appConfig,{fid:t.fid,registrationStatus:0}),s}}async function jw(i){let t=await Jp(i.appConfig);for(;t.registrationStatus===1;)await fg(100),t=await Jp(i.appConfig);if(t.registrationStatus===0){const{installationEntry:s,registrationPromise:a}=await Gu(i);return a||s}return t}function Jp(i){return ma(i,t=>{if(!t)throw Hn.create("installation-not-found");return yg(t)})}function yg(i){return Bw(i)?{fid:i.fid,registrationStatus:0}:i}function Bw(i){return i.registrationStatus===1&&i.registrationTime+rg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw({appConfig:i,heartbeatServiceProvider:t},s){const a=Hw(i,s),u=Ew(i,s),d=t.getImmediate({optional:!0});if(d){const y=await d.getHeartbeatsHeader();y&&u.append("x-firebase-client",y)}const f={installation:{sdkVersion:sg,appId:i.appId}},p={method:"POST",headers:u,body:JSON.stringify(f)},m=await hg(()=>fetch(a,p));if(m.ok){const y=await m.json();return ug(y)}else throw await lg("Generate Auth Token",m)}function Hw(i,{fid:t}){return`${cg(i)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ku(i,t=!1){let s;const a=await ma(i.appConfig,d=>{if(!bg(d))throw Hn.create("not-registered");const f=d.authToken;if(!t&&Gw(f))return d;if(f.requestStatus===1)return s=$w(i,t),d;{if(!navigator.onLine)throw Hn.create("app-offline");const p=qw(d);return s=Ww(i,p),p}});return s?await s:a.authToken}async function $w(i,t){let s=await Xp(i.appConfig);for(;s.authToken.requestStatus===1;)await fg(100),s=await Xp(i.appConfig);const a=s.authToken;return a.requestStatus===0?Ku(i,t):a}function Xp(i){return ma(i,t=>{if(!bg(t))throw Hn.create("not-registered");const s=t.authToken;return zw(s)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ww(i,t){try{const s=await Vw(i,t),a=Object.assign(Object.assign({},t),{authToken:s});return await na(i.appConfig,a),s}catch(s){if(ag(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await vg(i.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await na(i.appConfig,a)}throw s}}function bg(i){return i!==void 0&&i.registrationStatus===2}function Gw(i){return i.requestStatus===2&&!Kw(i)}function Kw(i){const t=Date.now();return t<i.creationTime||i.creationTime+i.expiresIn<t+bw}function qw(i){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:t})}function zw(i){return i.requestStatus===1&&i.requestTime+rg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(i){const t=i,{installationEntry:s,registrationPromise:a}=await Gu(t);return a?a.catch(console.error):Ku(t).catch(console.error),s.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(i,t=!1){const s=i;return await Xw(s),(await Ku(s,t)).token}async function Xw(i){const{registrationPromise:t}=await Gu(i);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(i){if(!i||!i.options)throw gu("App Configuration");if(!i.name)throw gu("App Name");const t=["projectId","apiKey","appId"];for(const s of t)if(!i.options[s])throw gu(s);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function gu(i){return Hn.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="installations",Qw="installations-internal",eI=i=>{const t=i.getProvider("app").getImmediate(),s=Zw(t),a=pn(t,"heartbeat");return{app:t,appConfig:s,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},tI=i=>{const t=i.getProvider("app").getImmediate(),s=pn(t,wg).getImmediate();return{getId:()=>Yw(s),getToken:u=>Jw(s,u)}};function nI(){mt(new ot(wg,eI,"PUBLIC")),mt(new ot(Qw,tI,"PRIVATE"))}nI();tt(ig,$u);tt(ig,$u,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="analytics",iI="firebase_id",rI="origin",sI=60*1e3,oI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new ha("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new Bt("analytics","Analytics",aI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(i){if(!i.startsWith(qu)){const t=nt.create("invalid-gtag-resource",{gtagURL:i});return We.warn(t.message),""}return i}function Ig(i){return Promise.all(i.map(t=>t.catch(s=>s)))}function uI(i,t){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(i,t)),s}function lI(i,t){const s=uI("firebase-js-sdk-policy",{createScriptURL:cI}),a=document.createElement("script"),u=`${qu}?l=${i}&id=${t}`;a.src=s?s==null?void 0:s.createScriptURL(u):u,a.async=!0,document.head.appendChild(a)}function dI(i){let t=[];return Array.isArray(window[i])?t=window[i]:window[i]=t,t}async function hI(i,t,s,a,u,d){const f=a[u];try{if(f)await t[f];else{const m=(await Ig(s)).find(y=>y.measurementId===u);m&&await t[m.appId]}}catch(p){We.error(p)}i("config",u,d)}async function fI(i,t,s,a,u){try{let d=[];if(u&&u.send_to){let f=u.send_to;Array.isArray(f)||(f=[f]);const p=await Ig(s);for(const m of f){const y=p.find(w=>w.measurementId===m),k=y&&t[y.appId];if(k)d.push(k);else{d=[];break}}}d.length===0&&(d=Object.values(t)),await Promise.all(d),i("event",a,u||{})}catch(d){We.error(d)}}function pI(i,t,s,a){async function u(d,...f){try{if(d==="event"){const[p,m]=f;await fI(i,t,s,p,m)}else if(d==="config"){const[p,m]=f;await hI(i,t,s,a,p,m)}else if(d==="consent"){const[p]=f;i("consent","update",p)}else if(d==="get"){const[p,m,y]=f;i("get",p,m,y)}else if(d==="set"){const[p]=f;i("set",p)}else i(d,...f)}catch(p){We.error(p)}}return u}function mI(i,t,s,a,u){let d=function(...f){window[a].push(arguments)};return window[u]&&typeof window[u]=="function"&&(d=window[u]),window[u]=pI(d,i,t,s),{gtagCore:d,wrappedGtag:window[u]}}function gI(i){const t=window.document.getElementsByTagName("script");for(const s of Object.values(t))if(s.src&&s.src.includes(qu)&&s.src.includes(i))return s;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=30,yI=1e3;class bI{constructor(t={},s=yI){this.throttleMetadata=t,this.intervalMillis=s}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,s){this.throttleMetadata[t]=s}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const _g=new bI;function wI(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function II(i){var t;const{appId:s,apiKey:a}=i,u={method:"GET",headers:wI(a)},d=oI.replace("{app-id}",s),f=await fetch(d,u);if(f.status!==200&&f.status!==304){let p="";try{const m=await f.json();!((t=m.error)===null||t===void 0)&&t.message&&(p=m.error.message)}catch{}throw nt.create("config-fetch-failed",{httpStatus:f.status,responseMessage:p})}return f.json()}async function _I(i,t=_g,s){const{appId:a,apiKey:u,measurementId:d}=i.options;if(!a)throw nt.create("no-app-id");if(!u){if(d)return{measurementId:d,appId:a};throw nt.create("no-api-key")}const f=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new kI;return setTimeout(async()=>{p.abort()},s!==void 0?s:sI),Eg({appId:a,apiKey:u,measurementId:d},f,p,t)}async function Eg(i,{throttleEndTimeMillis:t,backoffCount:s},a,u=_g){var d;const{appId:f,measurementId:p}=i;try{await EI(a,t)}catch(m){if(p)return We.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:f,measurementId:p};throw m}try{const m=await II(i);return u.deleteThrottleMetadata(f),m}catch(m){const y=m;if(!SI(y)){if(u.deleteThrottleMetadata(f),p)return We.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:p};throw m}const k=Number((d=y==null?void 0:y.customData)===null||d===void 0?void 0:d.httpStatus)===503?Bp(s,u.intervalMillis,vI):Bp(s,u.intervalMillis),w={throttleEndTimeMillis:Date.now()+k,backoffCount:s+1};return u.setThrottleMetadata(f,w),We.debug(`Calling attemptFetch again in ${k} millis`),Eg(i,w,a,u)}}function EI(i,t){return new Promise((s,a)=>{const u=Math.max(t-Date.now(),0),d=setTimeout(s,u);i.addEventListener(()=>{clearTimeout(d),a(nt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function SI(i){if(!(i instanceof Me)||!i.customData)return!1;const t=Number(i.customData.httpStatus);return t===429||t===500||t===503||t===504}class kI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function TI(i,t,s,a,u){if(u&&u.global){i("event",s,a);return}else{const d=await t,f=Object.assign(Object.assign({},a),{send_to:d});i("event",s,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(){if(ms())try{await Wm()}catch(i){return We.warn(nt.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return We.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AI(i,t,s,a,u,d,f){var p;const m=_I(i);m.then(D=>{s[D.measurementId]=D.appId,i.options.measurementId&&D.measurementId!==i.options.measurementId&&We.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${D.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(D=>We.error(D)),t.push(m);const y=CI().then(D=>{if(D)return a.getId()}),[k,w]=await Promise.all([m,y]);gI(d)||lI(d,k.measurementId),u("js",new Date);const L=(p=f==null?void 0:f.config)!==null&&p!==void 0?p:{};return L[rI]="firebase",L.update=!0,w!=null&&(L[iI]=w),u("config",k.measurementId,L),k.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(t){this.app=t}_delete(){return delete us[this.app.options.appId],Promise.resolve()}}let us={},Zp=[];const Qp={};let vu="dataLayer",PI="gtag",em,Sg,tm=!1;function OI(){const i=[];if(Fu()&&i.push("This is a browser extension environment."),Hb()||i.push("Cookies are not available."),i.length>0){const t=i.map((a,u)=>`(${u+1}) ${a}`).join(" "),s=nt.create("invalid-analytics-context",{errorInfo:t});We.warn(s.message)}}function NI(i,t,s){OI();const a=i.options.appId;if(!a)throw nt.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)We.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nt.create("no-api-key");if(us[a]!=null)throw nt.create("already-exists",{id:a});if(!tm){dI(vu);const{wrappedGtag:d,gtagCore:f}=mI(us,Zp,Qp,vu,PI);Sg=d,em=f,tm=!0}return us[a]=AI(i,Zp,Qp,t,em,vu,s),new RI(i)}function DI(i=Hu()){i=$(i);const t=pn(i,ia);return t.isInitialized()?t.getImmediate():LI(i)}function LI(i,t={}){const s=pn(i,ia);if(s.isInitialized()){const u=s.getImmediate();if(gs(t,s.getOptions()))return u;throw nt.create("already-initialized")}return s.initialize({options:t})}function MI(i,t,s,a){i=$(i),TI(Sg,us[i.app.options.appId],t,s,a).catch(u=>We.error(u))}const nm="@firebase/analytics",im="0.10.1";function xI(){mt(new ot(ia,(t,{options:s})=>{const a=t.getProvider("app").getImmediate(),u=t.getProvider("installations-internal").getImmediate();return NI(a,u,s)},"PUBLIC")),mt(new ot("analytics-internal",i,"PRIVATE")),tt(nm,im),tt(nm,im,"esm2017");function i(t){try{const s=t.getProvider(ia).getImmediate();return{logEvent:(a,u,d)=>MI(s,a,u,d)}}catch(s){throw nt.create("interop-component-reg-failed",{reason:s})}}}xI();function zu(i,t){var s={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&t.indexOf(a)<0&&(s[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(i);u<a.length;u++)t.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(i,a[u])&&(s[a[u]]=i[a[u]]);return s}const is={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Mi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function kg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FI=UI,jI=kg,Tg=new Bt("auth","Firebase",kg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new ha("@firebase/auth");function BI(i,...t){ra.logLevel<=ne.WARN&&ra.warn(`Auth (${Kn}): ${i}`,...t)}function Jo(i,...t){ra.logLevel<=ne.ERROR&&ra.error(`Auth (${Kn}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(i,...t){throw Yu(i,...t)}function Le(i,...t){return Yu(i,...t)}function Cg(i,t,s){const a=Object.assign(Object.assign({},jI()),{[t]:s});return new Bt("auth","Firebase",a).create(t,{appName:i.name})}function qi(i,t,s){const a=s;if(!(t instanceof a))throw a.name!==t.constructor.name&&Ne(i,"argument-error"),Cg(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yu(i,...t){if(typeof i!="string"){const s=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=i.name),i._errorFactory.create(s,...a)}return Tg.create(i,...t)}function C(i,t,...s){if(!i)throw Yu(t,...s)}function Tt(i){const t="INTERNAL ASSERTION FAILED: "+i;throw Jo(t),new Error(t)}function gt(i,t){i||Tt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Ju(){return rm()==="http:"||rm()==="https:"}function rm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ju()||Fu()||"connection"in navigator)?navigator.onLine:!0}function HI(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,s){this.shortDelay=t,this.longDelay=s,gt(s>t,"Short delay should be less than long delay!"),this.isMobile=Bb()||ju()}get(){return VI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(i,t){gt(i.emulator,"Emulator should always be set here");const{url:s}=i.emulator;return t?`${s}${t.startsWith("/")?t.slice(1):t}`:s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{static initialize(t,s,a){this.fetchImpl=t,s&&(this.headersImpl=s),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new Ss(3e4,6e4);function ge(i,t){return i.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:i.tenantId}):t}async function ve(i,t,s,a,u={}){return Rg(i,u,async()=>{let d={},f={};a&&(t==="GET"?f=a:d={body:JSON.stringify(a)});const p=Ki(Object.assign({key:i.config.apiKey},f)).slice(1),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode),Ag.fetch()(Pg(i,i.config.apiHost,s,p),Object.assign({method:t,headers:m,referrerPolicy:"no-referrer"},d))})}async function Rg(i,t,s){i._canInitEmulator=!1;const a=Object.assign(Object.assign({},$I),t);try{const u=new KI(i),d=await Promise.race([s(),u.promise]);u.clearNetworkTimeout();const f=await d.json();if("needConfirmation"in f)throw as(i,"account-exists-with-different-credential",f);if(d.ok&&!("errorMessage"in f))return f;{const p=d.ok?f.errorMessage:f.error.message,[m,y]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw as(i,"credential-already-in-use",f);if(m==="EMAIL_EXISTS")throw as(i,"email-already-in-use",f);if(m==="USER_DISABLED")throw as(i,"user-disabled",f);const k=a[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Cg(i,k,y);Ne(i,k)}}catch(u){if(u instanceof Me)throw u;Ne(i,"network-request-failed",{message:String(u)})}}async function Vt(i,t,s,a,u={}){const d=await ve(i,t,s,a,u);return"mfaPendingCredential"in d&&Ne(i,"multi-factor-auth-required",{_serverResponse:d}),d}function Pg(i,t,s,a){const u=`${t}${s}?${a}`;return i.config.emulator?Xu(i.config,u):`${i.config.apiScheme}://${u}`}function GI(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((s,a)=>{this.timer=setTimeout(()=>a(Le(this.auth,"network-request-failed")),WI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function as(i,t,s){const a={appName:i.name};s.email&&(a.email=s.email),s.phoneNumber&&(a.phoneNumber=s.phoneNumber);const u=Le(i,t,a);return u.customData._tokenResponse=s,u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(i){return i!==void 0&&i.getResponse!==void 0}function om(i){return i!==void 0&&i.enterprise!==void 0}class qI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const s of this.recaptchaEnforcementState)if(s.provider&&s.provider===t)return GI(s.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zI(i){return(await ve(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function YI(i,t){return ve(i,"GET","/v2/recaptchaConfig",ge(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(i,t){return ve(i,"POST","/v1/accounts:delete",t)}async function XI(i,t){return ve(i,"POST","/v1/accounts:update",t)}async function ZI(i,t){return ve(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function QI(i,t=!1){const s=$(i),a=await s.getIdToken(t),u=ga(a);C(u&&u.exp&&u.auth_time&&u.iat,s.auth,"internal-error");const d=typeof u.firebase=="object"?u.firebase:void 0,f=d==null?void 0:d.sign_in_provider;return{claims:u,token:a,authTime:ls(yu(u.auth_time)),issuedAtTime:ls(yu(u.iat)),expirationTime:ls(yu(u.exp)),signInProvider:f||null,signInSecondFactor:(d==null?void 0:d.sign_in_second_factor)||null}}function yu(i){return Number(i)*1e3}function ga(i){const[t,s,a]=i.split(".");if(t===void 0||s===void 0||a===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const u=jm(s);return u?JSON.parse(u):(Jo("Failed to decode base64 JWT payload"),null)}catch(u){return Jo("Caught error parsing JWT payload as JSON",u==null?void 0:u.toString()),null}}function e_(i){const t=ga(i);return C(t,"internal-error"),C(typeof t.exp<"u","internal-error"),C(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(i,t,s=!1){if(s)return t;try{return await t}catch(a){throw a instanceof Me&&t_(a)&&i.auth.currentUser===i&&await i.auth.signOut(),a}}function t_({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var s;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const u=((s=this.user.stsTokenManager.expirationTime)!==null&&s!==void 0?s:0)-Date.now()-3e5;return Math.max(0,u)}}schedule(t=!1){if(!this.isRunning)return;const s=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t,s){this.createdAt=t,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(i){var t;const s=i.auth,a=await i.getIdToken(),u=await jt(i,ZI(s,{idToken:a}));C(u==null?void 0:u.users.length,s,"internal-error");const d=u.users[0];i._notifyReloadListener(d);const f=!((t=d.providerUserInfo)===null||t===void 0)&&t.length?s_(d.providerUserInfo):[],p=r_(i.providerData,f),m=i.isAnonymous,y=!(i.email&&d.passwordHash)&&!(p!=null&&p.length),k=m?y:!1,w={uid:d.localId,displayName:d.displayName||null,photoURL:d.photoUrl||null,email:d.email||null,emailVerified:d.emailVerified||!1,phoneNumber:d.phoneNumber||null,tenantId:d.tenantId||null,providerData:p,metadata:new Og(d.createdAt,d.lastLoginAt),isAnonymous:k};Object.assign(i,w)}async function i_(i){const t=$(i);await ws(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function r_(i,t){return[...i.filter(a=>!t.some(u=>u.providerId===a.providerId)),...t]}function s_(i){return i.map(t=>{var{providerId:s}=t,a=zu(t,["providerId"]);return{providerId:s,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(i,t){const s=await Rg(i,{},async()=>{const a=Ki({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:u,apiKey:d}=i.config,f=Pg(i,u,"/v1/token",`key=${d}`),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Ag.fetch()(f,{method:"POST",headers:p,body:a})});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function a_(i,t){return ve(i,"POST","/v2/accounts:revokeToken",ge(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){C(t.idToken,"internal-error"),C(typeof t.idToken<"u","internal-error"),C(typeof t.refreshToken<"u","internal-error");const s="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):e_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,s)}async getToken(t,s=!1){return C(!this.accessToken||this.refreshToken,t,"user-token-expired"),!s&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,s){const{accessToken:a,refreshToken:u,expiresIn:d}=await o_(t,s);this.updateTokensAndExpiration(a,u,Number(d))}updateTokensAndExpiration(t,s,a){this.refreshToken=s||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,s){const{refreshToken:a,accessToken:u,expirationTime:d}=s,f=new Is;return a&&(C(typeof a=="string","internal-error",{appName:t}),f.refreshToken=a),u&&(C(typeof u=="string","internal-error",{appName:t}),f.accessToken=u),d&&(C(typeof d=="number","internal-error",{appName:t}),f.expirationTime=d),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(i,t){C(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class Fn{constructor(t){var{uid:s,auth:a,stsTokenManager:u}=t,d=zu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=s,this.auth=a,this.stsTokenManager=u,this.accessToken=u.accessToken,this.displayName=d.displayName||null,this.email=d.email||null,this.emailVerified=d.emailVerified||!1,this.phoneNumber=d.phoneNumber||null,this.photoURL=d.photoURL||null,this.isAnonymous=d.isAnonymous||!1,this.tenantId=d.tenantId||null,this.providerData=d.providerData?[...d.providerData]:[],this.metadata=new Og(d.createdAt||void 0,d.lastLoginAt||void 0)}async getIdToken(t){const s=await jt(this,this.stsTokenManager.getToken(this.auth,t));return C(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(t){return QI(this,t)}reload(){return i_(this)}_assign(t){this!==t&&(C(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(s=>Object.assign({},s)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const s=new Fn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return s.metadata._copy(this.metadata),s}_onReload(t){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,s=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),s&&await ws(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await jt(this,JI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,s){var a,u,d,f,p,m,y,k;const w=(a=s.displayName)!==null&&a!==void 0?a:void 0,L=(u=s.email)!==null&&u!==void 0?u:void 0,D=(d=s.phoneNumber)!==null&&d!==void 0?d:void 0,ae=(f=s.photoURL)!==null&&f!==void 0?f:void 0,v=(p=s.tenantId)!==null&&p!==void 0?p:void 0,I=(m=s._redirectEventId)!==null&&m!==void 0?m:void 0,S=(y=s.createdAt)!==null&&y!==void 0?y:void 0,R=(k=s.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:j,emailVerified:Y,isAnonymous:K,providerData:te,stsTokenManager:q}=s;C(j&&q,t,"internal-error");const le=Is.fromJSON(this.name,q);C(typeof j=="string",t,"internal-error"),cn(w,t.name),cn(L,t.name),C(typeof Y=="boolean",t,"internal-error"),C(typeof K=="boolean",t,"internal-error"),cn(D,t.name),cn(ae,t.name),cn(v,t.name),cn(I,t.name),cn(S,t.name),cn(R,t.name);const Be=new Fn({uid:j,auth:t,email:L,emailVerified:Y,displayName:w,isAnonymous:K,photoURL:ae,phoneNumber:D,tenantId:v,stsTokenManager:le,createdAt:S,lastLoginAt:R});return te&&Array.isArray(te)&&(Be.providerData=te.map(Xi=>Object.assign({},Xi))),I&&(Be._redirectEventId=I),Be}static async _fromIdTokenResponse(t,s,a=!1){const u=new Is;u.updateFromServerResponse(s);const d=new Fn({uid:s.localId,auth:t,stsTokenManager:u,isAnonymous:a});return await ws(d),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=new Map;function et(i){gt(i instanceof Function,"Expected a class definition");let t=am.get(i);return t?(gt(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,am.set(i,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,s){this.storage[t]=s}async _get(t){const s=this.storage[t];return s===void 0?null:s}async _remove(t){delete this.storage[t]}_addListener(t,s){}_removeListener(t,s){}}Ng.type="NONE";const $i=Ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(i,t,s){return`firebase:${i}:${t}:${s}`}class ji{constructor(t,s,a){this.persistence=t,this.auth=s,this.userKey=a;const{config:u,name:d}=this.auth;this.fullUserKey=jn(this.userKey,u.apiKey,d),this.fullPersistenceKey=jn("persistence",u.apiKey,d),this.boundEventHandler=s._onStorageEvent.bind(s),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Fn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,s)return this.setCurrentUser(s)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,s,a="authUser"){if(!s.length)return new ji(et($i),t,a);const u=(await Promise.all(s.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let d=u[0]||et($i);const f=jn(a,t.config.apiKey,t.name);let p=null;for(const y of s)try{const k=await y._get(f);if(k){const w=Fn._fromJSON(t,k);y!==d&&(p=w),d=y;break}}catch{}const m=u.filter(y=>y._shouldAllowMigration);return!d._shouldAllowMigration||!m.length?new ji(d,t,a):(d=m[0],p&&await d._set(f,p.toJSON()),await Promise.all(s.map(async y=>{if(y!==d)try{await y._remove(f)}catch{}})),new ji(d,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Mg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Dg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xg(t))return"Blackberry";if(Ug(t))return"Webos";if(Zu(t))return"Safari";if((t.includes("chrome/")||Lg(t))&&!t.includes("edge/"))return"Chrome";if(ks(t))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=i.match(s);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Dg(i=Ce()){return/firefox\//i.test(i)}function Zu(i=Ce()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Lg(i=Ce()){return/crios\//i.test(i)}function Mg(i=Ce()){return/iemobile/i.test(i)}function ks(i=Ce()){return/android/i.test(i)}function xg(i=Ce()){return/blackberry/i.test(i)}function Ug(i=Ce()){return/webos/i.test(i)}function zi(i=Ce()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function c_(i=Ce()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function u_(i=Ce()){var t;return zi(i)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function l_(){return $m()&&document.documentMode===10}function Fg(i=Ce()){return zi(i)||ks(i)||Ug(i)||xg(i)||/windows phone/i.test(i)||Mg(i)}function d_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(i,t=[]){let s;switch(i){case"Browser":s=cm(Ce());break;case"Worker":s=`${cm(Ce())}-${i}`;break;default:s=i}const a=t.length?t.join(","):"FirebaseCore-web";return`${s}/JsCore/${Kn}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,s){const a=d=>new Promise((f,p)=>{try{const m=t(d);f(m)}catch(m){p(m)}});a.onAbort=s,this.queue.push(a);const u=this.queue.length-1;return()=>{this.queue[u]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const s=[];try{for(const a of this.queue)await a(t),a.onAbort&&s.push(a.onAbort)}catch(a){s.reverse();for(const u of s)try{u()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(i,t={}){return ve(i,"GET","/v2/passwordPolicy",ge(i,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=6;class m_{constructor(t){var s,a,u,d;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(s=f.minPasswordLength)!==null&&s!==void 0?s:p_,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(u=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&u!==void 0?u:"",this.forceUpgradeOnSignin=(d=t.forceUpgradeOnSignin)!==null&&d!==void 0?d:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var s,a,u,d,f,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,m),this.validatePasswordCharacterOptions(t,m),m.isValid&&(m.isValid=(s=m.meetsMinPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(u=m.containsLowercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(d=m.containsUppercaseLetter)!==null&&d!==void 0?d:!0),m.isValid&&(m.isValid=(f=m.containsNumericCharacter)!==null&&f!==void 0?f:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(t,s){const a=this.customStrengthOptions.minPasswordLength,u=this.customStrengthOptions.maxPasswordLength;a&&(s.meetsMinPasswordLength=t.length>=a),u&&(s.meetsMaxPasswordLength=t.length<=u)}validatePasswordCharacterOptions(t,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let a;for(let u=0;u<t.length;u++)a=t.charAt(u),this.updatePasswordCharacterOptionsStatuses(s,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,s,a,u,d){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=u)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t,s,a,u){this.app=t,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=a,this.config=u,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new um(this),this.idTokenSubscription=new um(this),this.beforeStateQueue=new h_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=u.sdkClientVersion}_initializeWithPersistence(t,s){return s&&(this._popupRedirectResolver=et(s)),this._initializationPromise=this.queue(async()=>{var a,u;if(!this._deleted&&(this.persistenceManager=await ji.create(this,t),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(s),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var s;const a=await this.assertedPersistence.getCurrentUser();let u=a,d=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId,p=u==null?void 0:u._redirectEventId,m=await this.tryRedirectSignIn(t);(!f||f===p)&&(m!=null&&m.user)&&(u=m.user,d=!0)}if(!u)return this.directlySetCurrentUser(null);if(!u._redirectEventId){if(d)try{await this.beforeStateQueue.runMiddleware(u)}catch(f){u=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return u?this.reloadAndSetCurrentUserOrClear(u):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===u._redirectEventId?this.directlySetCurrentUser(u):this.reloadAndSetCurrentUserOrClear(u)}async tryRedirectSignIn(t){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(t){try{await ws(t)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=HI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const s=t?$(t):null;return s&&C(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(t,s=!1){if(!this._deleted)return t&&C(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await f_(this),s=new m_(t);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Bt("auth","Firebase",t())}onAuthStateChanged(t,s,a){return this.registerStateListener(this.authStateSubscription,t,s,a)}beforeAuthStateChanged(t,s){return this.beforeStateQueue.pushCallback(t,s)}onIdTokenChanged(t,s,a){return this.registerStateListener(this.idTokenSubscription,t,s,a)}authStateReady(){return new Promise((t,s)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},s)}})}async revokeAccessToken(t){if(this.currentUser){const s=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:s};this.tenantId!=null&&(a.tenantId=this.tenantId),await a_(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,s){const a=await this.getOrInitRedirectPersistenceManager(s);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const s=t&&et(t)||this._popupRedirectResolver;C(s,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[et(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var s,a;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)===null||s===void 0?void 0:s._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(s=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&s!==void 0?s:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,s,a,u){if(this._deleted)return()=>{};const d=typeof s=="function"?s:s.next.bind(s);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(p,this,"internal-error"),p.then(()=>{f||d(this.currentUser)}),typeof s=="function"){const m=t.addObserver(s,a,u);return()=>{f=!0,m()}}else{const m=t.addObserver(s);return()=>{f=!0,m()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const s={"X-Client-Version":this.clientVersion};this.app.options.appId&&(s["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(s["X-Firebase-Client"]=a);const u=await this._getAppCheckToken();return u&&(s["X-Firebase-AppCheck"]=u),s}async _getAppCheckToken(){var t;const s=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return s!=null&&s.error&&BI(`Error while retrieving App Check token: ${s.error}`),s==null?void 0:s.token}}function me(i){return $(i)}class um{constructor(t){this.auth=t,this.observer=null,this.addObserver=Gm(s=>this.observer=s)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function v_(i){Ts=i}function Qu(i){return Ts.loadJS(i)}function y_(){return Ts.recaptchaV2Script}function b_(){return Ts.recaptchaEnterpriseScript}function w_(){return Ts.gapiScript}function Bg(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const I_="recaptcha-enterprise",__="NO_RECAPTCHA";class E_{constructor(t){this.type=I_,this.auth=me(t)}async verify(t="verify",s=!1){async function a(d){if(!s){if(d.tenantId==null&&d._agentRecaptchaConfig!=null)return d._agentRecaptchaConfig.siteKey;if(d.tenantId!=null&&d._tenantRecaptchaConfigs[d.tenantId]!==void 0)return d._tenantRecaptchaConfigs[d.tenantId].siteKey}return new Promise(async(f,p)=>{YI(d,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new qI(m);return d.tenantId==null?d._agentRecaptchaConfig=y:d._tenantRecaptchaConfigs[d.tenantId]=y,f(y.siteKey)}}).catch(m=>{p(m)})})}function u(d,f,p){const m=window.grecaptcha;om(m)?m.enterprise.ready(()=>{m.enterprise.execute(d,{action:t}).then(y=>{f(y)}).catch(()=>{f(__)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((d,f)=>{a(this.auth).then(p=>{if(!s&&om(window.grecaptcha))u(p,d,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let m=b_();m.length!==0&&(m+=p),Qu(m).then(()=>{u(p,d,f)}).catch(y=>{f(y)})}}).catch(p=>{f(p)})})}}async function lm(i,t,s,a=!1){const u=new E_(i);let d;try{d=await u.verify(s)}catch{d=await u.verify(s,!0)}const f=Object.assign({},t);return a?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function _s(i,t,s,a){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await lm(i,t,s,s==="getOobCode");return a(i,d)}else return a(i,t).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${s} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await lm(i,t,s,s==="getOobCode");return a(i,f)}else return Promise.reject(d)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(i,t){const s=pn(i,"auth");if(s.isInitialized()){const u=s.getImmediate(),d=s.getOptions();if(gs(d,t??{}))return u;Ne(u,"already-initialized")}return s.initialize({options:t})}function k_(i,t){const s=(t==null?void 0:t.persistence)||[],a=(Array.isArray(s)?s:[s]).map(et);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function Vg(i,t,s){const a=me(i);C(a._canInitEmulator,a,"emulator-config-failed"),C(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const u=!!(s!=null&&s.disableWarnings),d=Hg(t),{host:f,port:p}=T_(t),m=p===null?"":`:${p}`;a.config.emulator={url:`${d}//${f}${m}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:f,port:p,protocol:d.replace(":",""),options:Object.freeze({disableWarnings:u})}),u||C_()}function Hg(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function T_(i){const t=Hg(i),s=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!s)return{host:"",port:null};const a=s[2].split("@").pop()||"",u=/^(\[[^\]]+\])(:|$)/.exec(a);if(u){const d=u[1];return{host:d,port:dm(a.substr(d.length+1))}}else{const[d,f]=a.split(":");return{host:d,port:dm(f)}}}function dm(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function C_(){function i(){const t=document.createElement("p"),s=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,s){this.providerId=t,this.signInMethod=s}toJSON(){return Tt("not implemented")}_getIdTokenResponse(t){return Tt("not implemented")}_linkToIdToken(t,s){return Tt("not implemented")}_getReauthenticationResolver(t){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(i,t){return ve(i,"POST","/v1/accounts:resetPassword",ge(i,t))}async function A_(i,t){return ve(i,"POST","/v1/accounts:update",t)}async function R_(i,t){return ve(i,"POST","/v1/accounts:signUp",t)}async function P_(i,t){return ve(i,"POST","/v1/accounts:update",ge(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(i,t){return Vt(i,"POST","/v1/accounts:signInWithPassword",ge(i,t))}async function va(i,t){return ve(i,"POST","/v1/accounts:sendOobCode",ge(i,t))}async function N_(i,t){return va(i,t)}async function D_(i,t){return va(i,t)}async function L_(i,t){return va(i,t)}async function M_(i,t){return va(i,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(i,t){return Vt(i,"POST","/v1/accounts:signInWithEmailLink",ge(i,t))}async function U_(i,t){return Vt(i,"POST","/v1/accounts:signInWithEmailLink",ge(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends Yi{constructor(t,s,a,u=null){super("password",a),this._email=t,this._password=s,this._tenantId=u}static _fromEmailAndPassword(t,s){return new Es(t,s,"password")}static _fromEmailAndCode(t,s,a=null){return new Es(t,s,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const s=typeof t=="string"?JSON.parse(t):t;if(s!=null&&s.email&&(s!=null&&s.password)){if(s.signInMethod==="password")return this._fromEmailAndPassword(s.email,s.password);if(s.signInMethod==="emailLink")return this._fromEmailAndCode(s.email,s.password,s.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _s(t,s,"signInWithPassword",O_);case"emailLink":return x_(t,{email:this._email,oobCode:this._password});default:Ne(t,"internal-error")}}async _linkToIdToken(t,s){switch(this.signInMethod){case"password":const a={idToken:s,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _s(t,a,"signUpPassword",R_);case"emailLink":return U_(t,{idToken:s,email:this._email,oobCode:this._password});default:Ne(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(i,t){return Vt(i,"POST","/v1/accounts:signInWithIdp",ge(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="http://localhost";class Ct extends Yi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const s=new Ct(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(s.idToken=t.idToken),t.accessToken&&(s.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(s.nonce=t.nonce),t.pendingToken&&(s.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(s.accessToken=t.oauthToken,s.secret=t.oauthTokenSecret):Ne("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const s=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:u}=s,d=zu(s,["providerId","signInMethod"]);if(!a||!u)return null;const f=new Ct(a,u);return f.idToken=d.idToken||void 0,f.accessToken=d.accessToken||void 0,f.secret=d.secret,f.nonce=d.nonce,f.pendingToken=d.pendingToken||null,f}_getIdTokenResponse(t){const s=this.buildRequest();return Ft(t,s)}_linkToIdToken(t,s){const a=this.buildRequest();return a.idToken=s,Ft(t,a)}_getReauthenticationResolver(t){const s=this.buildRequest();return s.autoCreate=!1,Ft(t,s)}buildRequest(){const t={requestUri:F_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),t.postBody=Ki(s)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(i,t){return ve(i,"POST","/v1/accounts:sendVerificationCode",ge(i,t))}async function B_(i,t){return Vt(i,"POST","/v1/accounts:signInWithPhoneNumber",ge(i,t))}async function V_(i,t){const s=await Vt(i,"POST","/v1/accounts:signInWithPhoneNumber",ge(i,t));if(s.temporaryProof)throw as(i,"account-exists-with-different-credential",s);return s}const H_={USER_NOT_FOUND:"user-not-found"};async function $_(i,t){const s=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Vt(i,"POST","/v1/accounts:signInWithPhoneNumber",ge(i,s),H_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Yi{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,s){return new Bn({verificationId:t,verificationCode:s})}static _fromTokenResponse(t,s){return new Bn({phoneNumber:t,temporaryProof:s})}_getIdTokenResponse(t){return B_(t,this._makeVerificationRequest())}_linkToIdToken(t,s){return V_(t,Object.assign({idToken:s},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return $_(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:s,verificationId:a,verificationCode:u}=this.params;return t&&s?{temporaryProof:t,phoneNumber:s}:{sessionInfo:a,code:u}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:s,verificationCode:a,phoneNumber:u,temporaryProof:d}=t;return!a&&!s&&!u&&!d?null:new Bn({verificationId:s,verificationCode:a,phoneNumber:u,temporaryProof:d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function G_(i){const t=Ui(os(i)).link,s=t?Ui(os(t)).deep_link_id:null,a=Ui(os(i)).deep_link_id;return(a?Ui(os(a)).link:null)||a||s||t||i}class ya{constructor(t){var s,a,u,d,f,p;const m=Ui(os(t)),y=(s=m.apiKey)!==null&&s!==void 0?s:null,k=(a=m.oobCode)!==null&&a!==void 0?a:null,w=W_((u=m.mode)!==null&&u!==void 0?u:null);C(y&&k&&w,"argument-error"),this.apiKey=y,this.operation=w,this.code=k,this.continueUrl=(d=m.continueUrl)!==null&&d!==void 0?d:null,this.languageCode=(f=m.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(t){const s=G_(t);try{return new ya(s)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.providerId=mn.PROVIDER_ID}static credential(t,s){return Es._fromEmailAndPassword(t,s)}static credentialWithLink(t,s){const a=ya.parseLink(s);return C(a,"argument-error"),Es._fromEmailAndCode(t,a.code,a.tenantId)}}mn.PROVIDER_ID="password";mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Ht{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class Bi extends Ji{static credentialFromJSON(t){const s=typeof t=="string"?JSON.parse(t):t;return C("providerId"in s&&"signInMethod"in s,"argument-error"),Ct._fromParams(s)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return C(t.idToken||t.accessToken,"argument-error"),Ct._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return Bi.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return Bi.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:s,oauthAccessToken:a,oauthTokenSecret:u,pendingToken:d,nonce:f,providerId:p}=t;if(!a&&!u&&!s&&!d||!p)return null;try{return new Bi(p)._credential({idToken:s,accessToken:a,nonce:f,pendingToken:d})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Ji{constructor(){super("facebook.com")}static credential(t){return Ct._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(t,s){return Ct._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:s})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:s,oauthAccessToken:a}=t;if(!s&&!a)return null;try{return Et.credential(s,a)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Ji{constructor(){super("github.com")}static credential(t){return Ct._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="http://localhost";class Wi extends Yi{constructor(t,s){super(t,t),this.pendingToken=s}_getIdTokenResponse(t){const s=this.buildRequest();return Ft(t,s)}_linkToIdToken(t,s){const a=this.buildRequest();return a.idToken=s,Ft(t,a)}_getReauthenticationResolver(t){const s=this.buildRequest();return s.autoCreate=!1,Ft(t,s)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const s=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:u,pendingToken:d}=s;return!a||!u||!d||a!==u?null:new Wi(a,d)}static _create(t,s){return new Wi(t,s)}buildRequest(){return{requestUri:K_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="saml.";class sa extends Ht{constructor(t){C(t.startsWith(q_),"argument-error"),super(t)}static credentialFromResult(t){return sa.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return sa.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const s=Wi.fromJSON(t);return C(s,"argument-error"),s}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:s,providerId:a}=t;if(!s||!a)return null;try{return Wi._create(a,s)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Ji{constructor(){super("twitter.com")}static credential(t,s){return Ct._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:s})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:s,oauthTokenSecret:a}=t;if(!s||!a)return null;try{return kt.credential(s,a)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wg(i,t){return Vt(i,"POST","/v1/accounts:signUp",ge(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,s,a,u=!1){const d=await Fn._fromIdTokenResponse(t,a,u),f=hm(a);return new at({user:d,providerId:f,_tokenResponse:a,operationType:s})}static async _forOperation(t,s,a){await t._updateTokensIfNecessary(a,!0);const u=hm(a);return new at({user:t,providerId:u,_tokenResponse:a,operationType:s})}}function hm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(i){var t;const s=me(i);if(await s._initializationPromise,!((t=s.currentUser)===null||t===void 0)&&t.isAnonymous)return new at({user:s.currentUser,providerId:null,operationType:"signIn"});const a=await Wg(s,{returnSecureToken:!0}),u=await at._fromIdTokenResponse(s,"signIn",a,!0);return await s._updateCurrentUser(u.user),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Me{constructor(t,s,a,u){var d;super(s.code,s.message),this.operationType=a,this.user=u,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:t.name,tenantId:(d=t.tenantId)!==null&&d!==void 0?d:void 0,_serverResponse:s.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,s,a,u){return new oa(t,s,a,u)}}function Gg(i,t,s,a){return(t==="reauthenticate"?s._getReauthenticationResolver(i):s._getIdTokenResponse(i)).catch(d=>{throw d.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(i,d,t,a):d})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(i){return new Set(i.map(({providerId:t})=>t).filter(t=>!!t))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(i,t){const s=$(i);await ba(!0,s,t);const{providerUserInfo:a}=await XI(s.auth,{idToken:await s.getIdToken(),deleteProvider:[t]}),u=Kg(a||[]);return s.providerData=s.providerData.filter(d=>u.has(d.providerId)),u.has("phone")||(s.phoneNumber=null),await s.auth._persistUserIfCurrent(s),s}async function el(i,t,s=!1){const a=await jt(i,t._linkToIdToken(i.auth,await i.getIdToken()),s);return at._forOperation(i,"link",a)}async function ba(i,t,s){await ws(t);const a=Kg(t.providerData),u=i===!1?"provider-already-linked":"no-such-provider";C(a.has(s)===i,t.auth,u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(i,t,s=!1){const{auth:a}=i,u="reauthenticate";try{const d=await jt(i,Gg(a,u,t,i),s);C(d.idToken,a,"internal-error");const f=ga(d.idToken);C(f,a,"internal-error");const{sub:p}=f;return C(i.uid===p,a,"user-mismatch"),at._forOperation(i,u,d)}catch(d){throw(d==null?void 0:d.code)==="auth/user-not-found"&&Ne(a,"user-mismatch"),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(i,t,s=!1){const a="signIn",u=await Gg(i,a,t),d=await at._fromIdTokenResponse(i,a,u);return s||await i._updateCurrentUser(d.user),d}async function wa(i,t){return zg(me(i),t)}async function Yg(i,t){const s=$(i);return await ba(!1,s,t.providerId),el(s,t)}async function Jg(i,t){return qg($(i),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(i,t){return Vt(i,"POST","/v1/accounts:signInWithCustomToken",ge(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(i,t){const s=me(i),a=await J_(s,{token:t,returnSecureToken:!0}),u=await at._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(u.user),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,s){this.factorId=t,this.uid=s.mfaEnrollmentId,this.enrollmentTime=new Date(s.enrolledAt).toUTCString(),this.displayName=s.displayName}static _fromServerResponse(t,s){return"phoneInfo"in s?tl._fromServerResponse(t,s):"totpInfo"in s?nl._fromServerResponse(t,s):Ne(t,"internal-error")}}class tl extends Cs{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,s){return new tl(s)}}class nl extends Cs{constructor(t){super("totp",t)}static _fromServerResponse(t,s){return new nl(s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(i,t,s){var a;C(((a=s.url)===null||a===void 0?void 0:a.length)>0,i,"invalid-continue-uri"),C(typeof s.dynamicLinkDomain>"u"||s.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),t.continueUrl=s.url,t.dynamicLinkDomain=s.dynamicLinkDomain,t.canHandleCodeInApp=s.handleCodeInApp,s.iOS&&(C(s.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),t.iOSBundleId=s.iOS.bundleId),s.android&&(C(s.android.packageName.length>0,i,"missing-android-pkg-name"),t.androidInstallApp=s.android.installApp,t.androidMinimumVersionCode=s.android.minimumVersion,t.androidPackageName=s.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(i){const t=me(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Z_(i,t,s){const a=me(i),u={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};s&&Ia(a,u,s),await _s(a,u,"getOobCode",D_)}async function Q_(i,t,s){await $g($(i),{oobCode:t,newPassword:s}).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&il(i),a})}async function e2(i,t){await P_($(i),{oobCode:t})}async function Xg(i,t){const s=$(i),a=await $g(s,{oobCode:t}),u=a.requestType;switch(C(u,s,"internal-error"),u){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(a.newEmail,s,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(a.mfaInfo,s,"internal-error");default:C(a.email,s,"internal-error")}let d=null;return a.mfaInfo&&(d=Cs._fromServerResponse(me(s),a.mfaInfo)),{data:{email:(a.requestType==="VERIFY_AND_CHANGE_EMAIL"?a.newEmail:a.email)||null,previousEmail:(a.requestType==="VERIFY_AND_CHANGE_EMAIL"?a.email:a.newEmail)||null,multiFactorInfo:d},operation:u}}async function t2(i,t){const{data:s}=await Xg($(i),t);return s.email}async function n2(i,t,s){const a=me(i),f=await _s(a,{returnSecureToken:!0,email:t,password:s,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wg).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&il(i),m}),p=await at._fromIdTokenResponse(a,"signIn",f);return await a._updateCurrentUser(p.user),p}function i2(i,t,s){return wa($(i),mn.credential(t,s)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&il(i),a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(i,t,s){const a=me(i),u={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function d(f,p){C(p.handleCodeInApp,a,"argument-error"),p&&Ia(a,f,p)}d(u,s),await _s(a,u,"getOobCode",L_)}function s2(i,t){const s=ya.parseLink(t);return(s==null?void 0:s.operation)==="EMAIL_SIGNIN"}async function o2(i,t,s){const a=$(i),u=mn.credentialWithLink(t,s||bs());return C(u._tenantId===(a.tenantId||null),a,"tenant-id-mismatch"),wa(a,u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(i,t){return ve(i,"POST","/v1/accounts:createAuthUri",ge(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c2(i,t){const s=Ju()?bs():"http://localhost",a={identifier:t,continueUri:s},{signinMethods:u}=await a2($(i),a);return u||[]}async function u2(i,t){const s=$(i),u={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};t&&Ia(s.auth,u,t);const{email:d}=await N_(s.auth,u);d!==i.email&&await i.reload()}async function l2(i,t,s){const a=$(i),d={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:t};s&&Ia(a.auth,d,s);const{email:f}=await M_(a.auth,d);f!==i.email&&await i.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(i,t){return ve(i,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h2(i,{displayName:t,photoURL:s}){if(t===void 0&&s===void 0)return;const a=$(i),d={idToken:await a.getIdToken(),displayName:t,photoUrl:s,returnSecureToken:!0},f=await jt(a,d2(a.auth,d));a.displayName=f.displayName||null,a.photoURL=f.photoUrl||null;const p=a.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=a.displayName,p.photoURL=a.photoURL),await a._updateTokensIfNecessary(f)}function f2(i,t){return Zg($(i),t,null)}function p2(i,t){return Zg($(i),null,t)}async function Zg(i,t,s){const{auth:a}=i,d={idToken:await i.getIdToken(),returnSecureToken:!0};t&&(d.email=t),s&&(d.password=s);const f=await jt(i,A_(a,d));await i._updateTokensIfNecessary(f,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(i){var t,s;if(!i)return null;const{providerId:a}=i,u=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},d=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!a&&(i!=null&&i.idToken)){const f=(s=(t=ga(i.idToken))===null||t===void 0?void 0:t.firebase)===null||s===void 0?void 0:s.sign_in_provider;if(f){const p=f!=="anonymous"&&f!=="custom"?f:null;return new Vi(d,p)}}if(!a)return null;switch(a){case"facebook.com":return new g2(d,u);case"github.com":return new v2(d,u);case"google.com":return new y2(d,u);case"twitter.com":return new b2(d,u,i.screenName||null);case"custom":case"anonymous":return new Vi(d,null);default:return new Vi(d,a,u)}}class Vi{constructor(t,s,a={}){this.isNewUser=t,this.providerId=s,this.profile=a}}class Qg extends Vi{constructor(t,s,a,u){super(t,s,a),this.username=u}}class g2 extends Vi{constructor(t,s){super(t,"facebook.com",s)}}class v2 extends Qg{constructor(t,s){super(t,"github.com",s,typeof(s==null?void 0:s.login)=="string"?s==null?void 0:s.login:null)}}class y2 extends Vi{constructor(t,s){super(t,"google.com",s)}}class b2 extends Qg{constructor(t,s,a){super(t,"twitter.com",s,a)}}function w2(i){const{user:t,_tokenResponse:s}=i;return t.isAnonymous&&!s?{providerId:null,isNewUser:!1,profile:null}:m2(s)}function I2(i,t,s,a){return $(i).onIdTokenChanged(t,s,a)}function _2(i,t,s){return $(i).beforeAuthStateChanged(t,s)}function E2(i){return $(i).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,s,a){this.type=t,this.credential=s,this.user=a}static _fromIdtoken(t,s){return new Un("enroll",t,s)}static _fromMfaPendingCredential(t){return new Un("signin",t)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(t){var s,a;if(t!=null&&t.multiFactorSession){if(!((s=t.multiFactorSession)===null||s===void 0)&&s.pendingCredential)return Un._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(!((a=t.multiFactorSession)===null||a===void 0)&&a.idToken)return Un._fromIdtoken(t.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,s,a){this.session=t,this.hints=s,this.signInResolver=a}static _fromError(t,s){const a=me(t),u=s.customData._serverResponse,d=(u.mfaInfo||[]).map(p=>Cs._fromServerResponse(a,p));C(u.mfaPendingCredential,a,"internal-error");const f=Un._fromMfaPendingCredential(u.mfaPendingCredential);return new rl(f,d,async p=>{const m=await p._process(a,f);delete u.mfaInfo,delete u.mfaPendingCredential;const y=Object.assign(Object.assign({},u),{idToken:m.idToken,refreshToken:m.refreshToken});switch(s.operationType){case"signIn":const k=await at._fromIdTokenResponse(a,s.operationType,y);return await a._updateCurrentUser(k.user),k;case"reauthenticate":return C(s.user,a,"internal-error"),at._forOperation(s.user,s.operationType,y);default:Ne(a,"internal-error")}})}async resolveSignIn(t){const s=t;return this.signInResolver(s)}}function S2(i,t){var s;const a=$(i),u=t;return C(t.customData.operationType,a,"argument-error"),C((s=u.customData._serverResponse)===null||s===void 0?void 0:s.mfaPendingCredential,a,"argument-error"),rl._fromError(a,u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(i,t){return ve(i,"POST","/v2/accounts/mfaEnrollment:start",ge(i,t))}function T2(i,t){return ve(i,"POST","/v2/accounts/mfaEnrollment:finalize",ge(i,t))}function C2(i,t){return ve(i,"POST","/v2/accounts/mfaEnrollment:withdraw",ge(i,t))}class sl{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(s=>{s.mfaInfo&&(this.enrolledFactors=s.mfaInfo.map(a=>Cs._fromServerResponse(t.auth,a)))})}static _fromUser(t){return new sl(t)}async getSession(){return Un._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(t,s){const a=t,u=await this.getSession(),d=await jt(this.user,a._process(this.user.auth,u,s));return await this.user._updateTokensIfNecessary(d),this.user.reload()}async unenroll(t){const s=typeof t=="string"?t:t.uid,a=await this.user.getIdToken();try{const u=await jt(this.user,C2(this.user.auth,{idToken:a,mfaEnrollmentId:s}));this.enrolledFactors=this.enrolledFactors.filter(({uid:d})=>d!==s),await this.user._updateTokensIfNecessary(u),await this.user.reload()}catch(u){throw u}}}const bu=new WeakMap;function A2(i){const t=$(i);return bu.has(t)||bu.set(t,sl._fromUser(t)),bu.get(t)}const aa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t,s){this.storageRetriever=t,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,s){return this.storage.setItem(t,JSON.stringify(s)),Promise.resolve()}_get(t){const s=this.storage.getItem(t);return Promise.resolve(s?JSON.parse(s):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(){const i=Ce();return Zu(i)||zi(i)}const P2=1e3,O2=10;class tv extends ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,s)=>this.onStorageEvent(t,s),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=R2()&&d_(),this.fallbackToPolling=Fg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const s of Object.keys(this.listeners)){const a=this.storage.getItem(s),u=this.localCache[s];a!==u&&t(s,u,a)}}onStorageEvent(t,s=!1){if(!t.key){this.forAllChangedKeys((f,p,m)=>{this.notifyListeners(f,m)});return}const a=t.key;if(s?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const f=this.storage.getItem(a);if(t.newValue!==f)t.newValue!==null?this.storage.setItem(a,t.newValue):this.storage.removeItem(a);else if(this.localCache[a]===t.newValue&&!s)return}const u=()=>{const f=this.storage.getItem(a);!s&&this.localCache[a]===f||this.notifyListeners(a,f)},d=this.storage.getItem(a);l_()&&d!==t.newValue&&t.newValue!==t.oldValue?setTimeout(u,O2):u()}notifyListeners(t,s){this.localCache[t]=s;const a=this.listeners[t];if(a)for(const u of Array.from(a))u(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,s,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:s,newValue:a}),!0)})},P2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(s)}_removeListener(t,s){this.listeners[t]&&(this.listeners[t].delete(s),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,s){await super._set(t,s),this.localCache[t]=JSON.stringify(s)}async _get(t){const s=await super._get(t);return this.localCache[t]=JSON.stringify(s),s}async _remove(t){await super._remove(t),delete this.localCache[t]}}tv.type="LOCAL";const _a=tv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv extends ev{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,s){}_removeListener(t,s){}}nv.type="SESSION";const fn=nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const s=this.receivers.find(u=>u.isListeningto(t));if(s)return s;const a=new Ea(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const s=t,{eventId:a,eventType:u,data:d}=s.data,f=this.handlersMap[u];if(!(f!=null&&f.size))return;s.ports[0].postMessage({status:"ack",eventId:a,eventType:u});const p=Array.from(f).map(async y=>y(s.origin,d)),m=await N2(p);s.ports[0].postMessage({status:"done",eventId:a,eventType:u,response:m})}_subscribe(t,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(s)}_unsubscribe(t,s){this.handlersMap[t]&&s&&this.handlersMap[t].delete(s),(!s||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(i="",t=10){let s="";for(let a=0;a<t;a++)s+=Math.floor(Math.random()*10);return i+s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,s,a=50){const u=typeof MessageChannel<"u"?new MessageChannel:null;if(!u)throw new Error("connection_unavailable");let d,f;return new Promise((p,m)=>{const y=As("",20);u.port1.start();const k=setTimeout(()=>{m(new Error("unsupported_event"))},a);f={messageChannel:u,onMessage(w){const L=w;if(L.data.eventId===y)switch(L.data.status){case"ack":clearTimeout(k),d=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(d),p(L.data.response);break;default:clearTimeout(k),clearTimeout(d),m(new Error("invalid_response"));break}}},this.handlers.add(f),u.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:s},[u.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return window}function L2(i){Te().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(){return typeof Te().WorkerGlobalScope<"u"&&typeof Te().importScripts=="function"}async function M2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function x2(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function U2(){return ol()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="firebaseLocalStorageDb",F2=1,ca="firebaseLocalStorage",rv="fbase_key";class Rs{constructor(t){this.request=t}toPromise(){return new Promise((t,s)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function Sa(i,t){return i.transaction([ca],t?"readwrite":"readonly").objectStore(ca)}function j2(){const i=indexedDB.deleteDatabase(iv);return new Rs(i).toPromise()}function Pu(){const i=indexedDB.open(iv,F2);return new Promise((t,s)=>{i.addEventListener("error",()=>{s(i.error)}),i.addEventListener("upgradeneeded",()=>{const a=i.result;try{a.createObjectStore(ca,{keyPath:rv})}catch(u){s(u)}}),i.addEventListener("success",async()=>{const a=i.result;a.objectStoreNames.contains(ca)?t(a):(a.close(),await j2(),t(await Pu()))})})}async function fm(i,t,s){const a=Sa(i,!0).put({[rv]:t,value:s});return new Rs(a).toPromise()}async function B2(i,t){const s=Sa(i,!1).get(t),a=await new Rs(s).toPromise();return a===void 0?null:a.value}function pm(i,t){const s=Sa(i,!0).delete(t);return new Rs(s).toPromise()}const V2=800,H2=3;class sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pu(),this.db)}async _withRetries(t){let s=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(s++>H2)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(U2()),this.receiver._subscribe("keyChanged",async(t,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(t,s)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await M2(),!this.activeServiceWorker)return;this.sender=new D2(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((s=a[0])===null||s===void 0)&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||x2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Pu();return await fm(t,aa,"1"),await pm(t,aa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,s){return this._withPendingWrite(async()=>(await this._withRetries(a=>fm(a,t,s)),this.localCache[t]=s,this.notifyServiceWorker(t)))}async _get(t){const s=await this._withRetries(a=>B2(a,t));return this.localCache[t]=s,s}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(s=>pm(s,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(u=>{const d=Sa(u,!1).getAll();return new Rs(d).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const s=[],a=new Set;if(t.length!==0)for(const{fbase_key:u,value:d}of t)a.add(u),JSON.stringify(this.localCache[u])!==JSON.stringify(d)&&(this.notifyListeners(u,d),s.push(u));for(const u of Object.keys(this.localCache))this.localCache[u]&&!a.has(u)&&(this.notifyListeners(u,null),s.push(u));return s}notifyListeners(t,s){this.localCache[t]=s;const a=this.listeners[t];if(a)for(const u of Array.from(a))u(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,s){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(s)}_removeListener(t,s){this.listeners[t]&&(this.listeners[t].delete(s),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sv.type="LOCAL";const Gi=sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(i,t){return ve(i,"POST","/v2/accounts/mfaSignIn:start",ge(i,t))}function W2(i,t){return ve(i,"POST","/v2/accounts/mfaSignIn:finalize",ge(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=500,K2=6e4,zo=1e12;class q2{constructor(t){this.auth=t,this.counter=zo,this._widgets=new Map}render(t,s){const a=this.counter;return this._widgets.set(a,new z2(t,this.auth.name,s||{})),this.counter++,a}reset(t){var s;const a=t||zo;(s=this._widgets.get(a))===null||s===void 0||s.delete(),this._widgets.delete(a)}getResponse(t){var s;const a=t||zo;return((s=this._widgets.get(a))===null||s===void 0?void 0:s.getResponse())||""}async execute(t){var s;const a=t||zo;return(s=this._widgets.get(a))===null||s===void 0||s.execute(),""}}class z2{constructor(t,s,a){this.params=a,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const u=typeof t=="string"?document.getElementById(t):t;C(u,"argument-error",{appName:s}),this.container=u,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Y2(50);const{callback:t,"expired-callback":s}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,s)try{s()}catch{}this.isVisible&&this.execute()},K2)},G2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Y2(i){const t=[],s="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let a=0;a<i;a++)t.push(s.charAt(Math.floor(Math.random()*s.length)));return t.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=Bg("rcb"),J2=new Ss(3e4,6e4);class X2{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=Te().grecaptcha)===null||t===void 0)&&t.render)}load(t,s=""){return C(Z2(s),t,"argument-error"),this.shouldResolveImmediately(s)&&sm(Te().grecaptcha)?Promise.resolve(Te().grecaptcha):new Promise((a,u)=>{const d=Te().setTimeout(()=>{u(Le(t,"network-request-failed"))},J2.get());Te()[wu]=()=>{Te().clearTimeout(d),delete Te()[wu];const p=Te().grecaptcha;if(!p||!sm(p)){u(Le(t,"internal-error"));return}const m=p.render;p.render=(y,k)=>{const w=m(y,k);return this.counter++,w},this.hostLanguage=s,a(p)};const f=`${y_()}?${Ki({onload:wu,render:"explicit",hl:s})}`;Qu(f).catch(()=>{clearTimeout(d),u(Le(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var s;return!!(!((s=Te().grecaptcha)===null||s===void 0)&&s.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Z2(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class Q2{async load(t){return new q2(t)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="recaptcha",eE={theme:"light",type:"image"};let tE=class{constructor(t,s,a=Object.assign({},eE)){this.parameters=a,this.type=ov,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=me(t),this.isInvisible=this.parameters.size==="invisible",C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const u=typeof s=="string"?document.getElementById(s):s;C(u,this.auth,"argument-error"),this.container=u,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Q2:new X2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),s=this.getAssertedRecaptcha(),a=s.getResponse(t);return a||new Promise(u=>{const d=f=>{f&&(this.tokenChangeListeners.delete(d),u(f))};this.tokenChangeListeners.add(d),this.isInvisible&&s.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return s=>{if(this.tokenChangeListeners.forEach(a=>a(s)),typeof t=="function")t(s);else if(typeof t=="string"){const a=Te()[t];typeof a=="function"&&a(s)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const s=document.createElement("div");t.appendChild(s),t=s}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){C(Ju()&&!ol(),this.auth,"internal-error"),await nE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await zI(this.auth);C(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function nE(){let i=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}i=()=>t(),window.addEventListener("load",i)}).catch(t=>{throw i&&window.removeEventListener("load",i),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,s){this.verificationId=t,this.onConfirmation=s}confirm(t){const s=Bn._fromVerification(this.verificationId,t);return this.onConfirmation(s)}}async function iE(i,t,s){const a=me(i),u=await ka(a,t,$(s));return new al(u,d=>wa(a,d))}async function rE(i,t,s){const a=$(i);await ba(!1,a,"phone");const u=await ka(a.auth,t,$(s));return new al(u,d=>Yg(a,d))}async function sE(i,t,s){const a=$(i),u=await ka(a.auth,t,$(s));return new al(u,d=>Jg(a,d))}async function ka(i,t,s){var a;const u=await s.verify();try{C(typeof u=="string",i,"argument-error"),C(s.type===ov,i,"argument-error");let d;if(typeof t=="string"?d={phoneNumber:t}:d=t,"session"in d){const f=d.session;if("phoneNumber"in d)return C(f.type==="enroll",i,"internal-error"),(await k2(i,{idToken:f.credential,phoneEnrollmentInfo:{phoneNumber:d.phoneNumber,recaptchaToken:u}})).phoneSessionInfo.sessionInfo;{C(f.type==="signin",i,"internal-error");const p=((a=d.multiFactorHint)===null||a===void 0?void 0:a.uid)||d.multiFactorUid;return C(p,i,"missing-multi-factor-info"),(await $2(i,{mfaPendingCredential:f.credential,mfaEnrollmentId:p,phoneSignInInfo:{recaptchaToken:u}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:f}=await j_(i,{phoneNumber:d.phoneNumber,recaptchaToken:u});return f}}finally{s._reset()}}async function oE(i,t){await el($(i),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn=class Xo{constructor(t){this.providerId=Xo.PROVIDER_ID,this.auth=me(t)}verifyPhoneNumber(t,s){return ka(this.auth,t,$(s))}static credential(t,s){return Bn._fromVerification(t,s)}static credentialFromResult(t){const s=t;return Xo.credentialFromTaggedObject(s)}static credentialFromError(t){return Xo.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:s,temporaryProof:a}=t;return s&&a?Bn._fromTokenResponse(s,a):null}};Wn.PROVIDER_ID="phone";Wn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(i,t){return t?et(t):(C(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends Yi{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ft(t,this._buildIdpRequest())}_linkToIdToken(t,s){return Ft(t,this._buildIdpRequest(s))}_getReauthenticationResolver(t){return Ft(t,this._buildIdpRequest())}_buildIdpRequest(t){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(s.idToken=t),s}}function aE(i){return zg(i.auth,new cl(i),i.bypassAuthState)}function cE(i){const{auth:t,user:s}=i;return C(s,t,"internal-error"),qg(s,new cl(i),i.bypassAuthState)}async function uE(i){const{auth:t,user:s}=i;return C(s,t,"internal-error"),el(s,new cl(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(t,s,a,u,d=!1){this.auth=t,this.resolver=a,this.user=u,this.bypassAuthState=d,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(t,s)=>{this.pendingPromise={resolve:t,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:s,sessionId:a,postBody:u,tenantId:d,error:f,type:p}=t;if(f){this.reject(f);return}const m={auth:this.auth,requestUri:s,sessionId:a,tenantId:d||void 0,postBody:u||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return aE;case"linkViaPopup":case"linkViaRedirect":return uE;case"reauthViaPopup":case"reauthViaRedirect":return cE;default:Ne(this.auth,"internal-error")}}resolve(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=new Ss(2e3,1e4);async function dE(i,t,s){const a=me(i);qi(i,t,Ht);const u=qn(a,s);return new Mt(a,"signInViaPopup",t,u).executeNotNull()}async function hE(i,t,s){const a=$(i);qi(a.auth,t,Ht);const u=qn(a.auth,s);return new Mt(a.auth,"reauthViaPopup",t,u,a).executeNotNull()}async function fE(i,t,s){const a=$(i);qi(a.auth,t,Ht);const u=qn(a.auth,s);return new Mt(a.auth,"linkViaPopup",t,u,a).executeNotNull()}class Mt extends av{constructor(t,s,a,u,d){super(t,s,u,d),this.provider=a,this.authWindow=null,this.pollId=null,Mt.currentPopupAction&&Mt.currentPopupAction.cancel(),Mt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return C(t,this.auth,"internal-error"),t}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const t=As();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var s,a;if(!((a=(s=this.authWindow)===null||s===void 0?void 0:s.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,lE.get())};t()}}Mt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="pendingRedirect",ds=new Map;class mE extends av{constructor(t,s,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,a),this.eventId=null}async execute(){let t=ds.get(this.auth._key());if(!t){try{const a=await gE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(s){t=()=>Promise.reject(s)}ds.set(this.auth._key(),t)}return this.bypassAuthState||ds.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const s=await this.auth._redirectUserForId(t.eventId);if(s)return this.user=s,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gE(i,t){const s=uv(t),a=cv(i);if(!await a._isAvailable())return!1;const u=await a._get(s)==="true";return await a._remove(s),u}async function ul(i,t){return cv(i)._set(uv(t),"true")}function vE(){ds.clear()}function ll(i,t){ds.set(i._key(),t)}function cv(i){return et(i._redirectPersistence)}function uv(i){return jn(pE,i.config.apiKey,i.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(i,t,s){return bE(i,t,s)}async function bE(i,t,s){const a=me(i);qi(i,t,Ht),await a._initializationPromise;const u=qn(a,s);return await ul(u,a),u._openRedirect(a,t,"signInViaRedirect")}function wE(i,t,s){return IE(i,t,s)}async function IE(i,t,s){const a=$(i);qi(a.auth,t,Ht),await a.auth._initializationPromise;const u=qn(a.auth,s);await ul(u,a.auth);const d=await lv(a);return u._openRedirect(a.auth,t,"reauthViaRedirect",d)}function _E(i,t,s){return EE(i,t,s)}async function EE(i,t,s){const a=$(i);qi(a.auth,t,Ht),await a.auth._initializationPromise;const u=qn(a.auth,s);await ba(!1,a,t.providerId),await ul(u,a.auth);const d=await lv(a);return u._openRedirect(a.auth,t,"linkViaRedirect",d)}async function SE(i,t){return await me(i)._initializationPromise,Ta(i,t,!1)}async function Ta(i,t,s=!1){const a=me(i),u=qn(a,t),f=await new mE(a,u,s).execute();return f&&!s&&(delete f.user._redirectEventId,await a._persistUserIfCurrent(f.user),await a._setRedirectUser(null,t)),f}async function lv(i){const t=As(`${i.uid}:::`);return i._redirectEventId=t,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=10*60*1e3;class dv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let s=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(s=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!TE(t)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=t,s=!0)),s}sendToConsumer(t,s){var a;if(t.error&&!hv(t)){const u=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";s.onError(Le(this.auth,u))}else s.onAuthEvent(t)}isEventForConsumer(t,s){const a=s.eventId===null||!!t.eventId&&t.eventId===s.eventId;return s.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=kE&&this.cachedEventUids.clear(),this.cachedEventUids.has(mm(t))}saveEventToCache(t){this.cachedEventUids.add(mm(t)),this.lastProcessedEventTime=Date.now()}}function mm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function hv({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function TE(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(i,t={}){return ve(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AE=/^https?/;async function RE(i){if(i.config.emulator)return;const{authorizedDomains:t}=await fv(i);for(const s of t)try{if(PE(s))return}catch{}Ne(i,"unauthorized-domain")}function PE(i){const t=bs(),{protocol:s,hostname:a}=new URL(t);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&a===""?s==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):s==="chrome-extension:"&&f.hostname===a}if(!AE.test(s))return!1;if(CE.test(i))return a===i;const u=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+u+"|"+u+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=new Ss(3e4,6e4);function gm(){const i=Te().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let s=0;s<i.CP.length;s++)i.CP[s]=null}}function NE(i){return new Promise((t,s)=>{var a,u,d;function f(){gm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gm(),s(Le(i,"network-request-failed"))},timeout:OE.get()})}if(!((u=(a=Te().gapi)===null||a===void 0?void 0:a.iframes)===null||u===void 0)&&u.Iframe)t(gapi.iframes.getContext());else if(!((d=Te().gapi)===null||d===void 0)&&d.load)f();else{const p=Bg("iframefcb");return Te()[p]=()=>{gapi.load?f():s(Le(i,"network-request-failed"))},Qu(`${w_()}?onload=${p}`).catch(m=>s(m))}}).catch(t=>{throw Zo=null,t})}let Zo=null;function DE(i){return Zo=Zo||NE(i),Zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=new Ss(5e3,15e3),ME="__/auth/iframe",xE="emulator/auth/iframe",UE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jE(i){const t=i.config;C(t.authDomain,i,"auth-domain-config-required");const s=t.emulator?Xu(t,xE):`https://${i.config.authDomain}/${ME}`,a={apiKey:t.apiKey,appName:i.name,v:Kn},u=FE.get(i.config.apiHost);u&&(a.eid=u);const d=i._getFrameworks();return d.length&&(a.fw=d.join(",")),`${s}?${Ki(a).slice(1)}`}async function BE(i){const t=await DE(i),s=Te().gapi;return C(s,i,"internal-error"),t.open({where:document.body,url:jE(i),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UE,dontclear:!0},a=>new Promise(async(u,d)=>{await a.restyle({setHideOnLeave:!1});const f=Le(i,"network-request-failed"),p=Te().setTimeout(()=>{d(f)},LE.get());function m(){Te().clearTimeout(p),u(a)}a.ping(m).then(m,()=>{d(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HE=500,$E=600,WE="_blank",GE="http://localhost";class vm{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KE(i,t,s,a=HE,u=$E){const d=Math.max((window.screen.availHeight-u)/2,0).toString(),f=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const m=Object.assign(Object.assign({},VE),{width:a.toString(),height:u.toString(),top:d,left:f}),y=Ce().toLowerCase();s&&(p=Lg(y)?WE:s),Dg(y)&&(t=t||GE,m.scrollbars="yes");const k=Object.entries(m).reduce((L,[D,ae])=>`${L}${D}=${ae},`,"");if(u_(y)&&p!=="_self")return qE(t||"",p),new vm(null);const w=window.open(t||"",p,k);C(w,i,"popup-blocked");try{w.focus()}catch{}return new vm(w)}function qE(i,t){const s=document.createElement("a");s.href=i,s.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="__/auth/handler",YE="emulator/auth/handler",JE=encodeURIComponent("fac");async function Ou(i,t,s,a,u,d){C(i.config.authDomain,i,"auth-domain-config-required"),C(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:s,redirectUrl:a,v:Kn,eventId:u};if(t instanceof Ht){t.setDefaultLanguage(i.languageCode),f.providerId=t.providerId||"",Kb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[k,w]of Object.entries(d||{}))f[k]=w}if(t instanceof Ji){const k=t.getScopes().filter(w=>w!=="");k.length>0&&(f.scopes=k.join(","))}i.tenantId&&(f.tid=i.tenantId);const p=f;for(const k of Object.keys(p))p[k]===void 0&&delete p[k];const m=await i._getAppCheckToken(),y=m?`#${JE}=${encodeURIComponent(m)}`:"";return`${XE(i)}?${Ki(p).slice(1)}${y}`}function XE({config:i}){return i.emulator?Xu(i,YE):`https://${i.authDomain}/${zE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="webStorageSupport";class ZE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fn,this._completeRedirectFn=Ta,this._overrideRedirectResult=ll}async _openPopup(t,s,a,u){var d;gt((d=this.eventManagers[t._key()])===null||d===void 0?void 0:d.manager,"_initialize() not called before _openPopup()");const f=await Ou(t,s,a,bs(),u);return KE(t,f,As())}async _openRedirect(t,s,a,u){await this._originValidation(t);const d=await Ou(t,s,a,bs(),u);return L2(d),new Promise(()=>{})}_initialize(t){const s=t._key();if(this.eventManagers[s]){const{manager:u,promise:d}=this.eventManagers[s];return u?Promise.resolve(u):(gt(d,"If manager is not set, promise should be"),d)}const a=this.initAndGetManager(t);return this.eventManagers[s]={promise:a},a.catch(()=>{delete this.eventManagers[s]}),a}async initAndGetManager(t){const s=await BE(t),a=new dv(t);return s.register("authEvent",u=>(C(u==null?void 0:u.authEvent,t,"invalid-auth-event"),{status:a.onEvent(u.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=s,a}_isIframeWebStorageSupported(t,s){this.iframes[t._key()].send(Iu,{type:Iu},u=>{var d;const f=(d=u==null?void 0:u[0])===null||d===void 0?void 0:d[Iu];f!==void 0&&s(!!f),Ne(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const s=t._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=RE(t)),this.originValidationPromises[s]}get _shouldInitProactively(){return Fg()||Zu()||zi()}}const pv=ZE;class QE{constructor(t){this.factorId=t}_process(t,s,a){switch(s.type){case"enroll":return this._finalizeEnroll(t,s.credential,a);case"signin":return this._finalizeSignIn(t,s.credential);default:return Tt("unexpected MultiFactorSessionType")}}}class dl extends QE{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new dl(t)}_finalizeEnroll(t,s,a){return T2(t,{idToken:s,displayName:a,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,s){return W2(t,{mfaPendingCredential:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class mv{constructor(){}static assertion(t){return dl._fromCredential(t)}}mv.FACTOR_ID="phone";var ym="@firebase/auth",bm="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const s=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,s),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const s=this.internalListeners.get(t);s&&(this.internalListeners.delete(t),s(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nS(i){mt(new ot("auth",(t,{options:s})=>{const a=t.getProvider("app").getImmediate(),u=t.getProvider("heartbeat"),d=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=a.options;C(f&&!f.includes(":"),"invalid-api-key",{appName:a.name});const m={apiKey:f,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(i)},y=new g_(a,u,d,m);return k_(y,s),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,s,a)=>{t.getProvider("auth-internal").initialize()})),mt(new ot("auth-internal",t=>{const s=me(t.getProvider("auth").getImmediate());return(a=>new eS(a))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(ym,bm,tS(i)),tt(ym,bm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=5*60,rS=Vm("authIdTokenMaxAge")||iS;let wm=null;const sS=i=>async t=>{const s=t&&await t.getIdTokenResult(),a=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(a&&a>rS)return;const u=s==null?void 0:s.token;wm!==u&&(wm=u,await fetch(i,{method:u?"POST":"DELETE",headers:u?{Authorization:`Bearer ${u}`}:{}}))};function oS(i=Hu()){const t=pn(i,"auth");if(t.isInitialized())return t.getImmediate();const s=S_(i,{popupRedirectResolver:pv,persistence:[Gi,_a,fn]}),a=Vm("authTokenSyncURL");if(a){const d=sS(a);_2(s,d,()=>d(s.currentUser)),I2(s,f=>d(f))}const u=Fb("auth");return u&&Vg(s,`http://${u}`),s}function aS(){var i,t;return(t=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&t!==void 0?t:document}v_({loadJS(i){return new Promise((t,s)=>{const a=document.createElement("script");a.setAttribute("src",i),a.onload=t,a.onerror=u=>{const d=Le("internal-error");d.customData=u,s(d)},a.type="text/javascript",a.charset="UTF-8",aS().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nS("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=2e3;async function uS(i,t,s){var a;const{BuildInfo:u}=Gn();gt(t.sessionId,"AuthEvent did not contain a session ID");const d=await pS(t.sessionId),f={};return zi()?f.ibi=u.packageName:ks()?f.apn=u.packageName:Ne(i,"operation-not-supported-in-this-environment"),u.displayName&&(f.appDisplayName=u.displayName),f.sessionId=d,Ou(i,s,t.type,void 0,(a=t.eventId)!==null&&a!==void 0?a:void 0,f)}async function lS(i){const{BuildInfo:t}=Gn(),s={};zi()?s.iosBundleId=t.packageName:ks()?s.androidPackageName=t.packageName:Ne(i,"operation-not-supported-in-this-environment"),await fv(i,s)}function dS(i){const{cordova:t}=Gn();return new Promise(s=>{t.plugins.browsertab.isAvailable(a=>{let u=null;a?t.plugins.browsertab.openUrl(i):u=t.InAppBrowser.open(i,c_()?"_blank":"_system","location=yes"),s(u)})})}async function hS(i,t,s){const{cordova:a}=Gn();let u=()=>{};try{await new Promise((d,f)=>{let p=null;function m(){var w;d();const L=(w=a.plugins.browsertab)===null||w===void 0?void 0:w.close;typeof L=="function"&&L(),typeof(s==null?void 0:s.close)=="function"&&s.close()}function y(){p||(p=window.setTimeout(()=>{f(Le(i,"redirect-cancelled-by-user"))},cS))}function k(){(document==null?void 0:document.visibilityState)==="visible"&&y()}t.addPassiveListener(m),document.addEventListener("resume",y,!1),ks()&&document.addEventListener("visibilitychange",k,!1),u=()=>{t.removePassiveListener(m),document.removeEventListener("resume",y,!1),document.removeEventListener("visibilitychange",k,!1),p&&window.clearTimeout(p)}})}finally{u()}}function fS(i){var t,s,a,u,d,f,p,m,y,k;const w=Gn();C(typeof((t=w==null?void 0:w.universalLinks)===null||t===void 0?void 0:t.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),C(typeof((s=w==null?void 0:w.BuildInfo)===null||s===void 0?void 0:s.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),C(typeof((d=(u=(a=w==null?void 0:w.cordova)===null||a===void 0?void 0:a.plugins)===null||u===void 0?void 0:u.browsertab)===null||d===void 0?void 0:d.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C(typeof((m=(p=(f=w==null?void 0:w.cordova)===null||f===void 0?void 0:f.plugins)===null||p===void 0?void 0:p.browsertab)===null||m===void 0?void 0:m.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C(typeof((k=(y=w==null?void 0:w.cordova)===null||y===void 0?void 0:y.InAppBrowser)===null||k===void 0?void 0:k.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function pS(i){const t=mS(i),s=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(s)).map(u=>u.toString(16).padStart(2,"0")).join("")}function mS(i){if(gt(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const t=new ArrayBuffer(i.length),s=new Uint8Array(t);for(let a=0;a<i.length;a++)s[a]=i.charCodeAt(a);return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=20;class vS extends dv{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(s=>s(t)),super.onEvent(t)}async initialized(){await this.initPromise}}function yS(i,t,s=null){return{type:t,eventId:s,urlResponse:null,sessionId:IS(),postBody:null,tenantId:i.tenantId,error:Le(i,"no-auth-event")}}function bS(i,t){return Nu()._set(Du(i),t)}async function Im(i){const t=await Nu()._get(Du(i));return t&&await Nu()._remove(Du(i)),t}function wS(i,t){var s,a;const u=ES(t);if(u.includes("/__/auth/callback")){const d=Qo(u),f=d.firebaseError?_S(decodeURIComponent(d.firebaseError)):null,p=(a=(s=f==null?void 0:f.code)===null||s===void 0?void 0:s.split("auth/"))===null||a===void 0?void 0:a[1],m=p?Le(p):null;return m?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:m,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:u,postBody:null}}return null}function IS(){const i=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<gS;s++){const a=Math.floor(Math.random()*t.length);i.push(t.charAt(a))}return i.join("")}function Nu(){return et(_a)}function Du(i){return jn("authEvent",i.config.apiKey,i.name)}function _S(i){try{return JSON.parse(i)}catch{return null}}function ES(i){const t=Qo(i),s=t.link?decodeURIComponent(t.link):void 0,a=Qo(s).link,u=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return Qo(u).link||u||a||s||i}function Qo(i){if(!(i!=null&&i.includes("?")))return{};const[t,...s]=i.split("?");return Ui(s.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=500;class kS{constructor(){this._redirectPersistence=fn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ta,this._overrideRedirectResult=ll}async _initialize(t){const s=t._key();let a=this.eventManagers.get(s);return a||(a=new vS(t),this.eventManagers.set(s,a),this.attachCallbackListeners(t,a)),a}_openPopup(t){Ne(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,s,a,u){fS(t);const d=await this._initialize(t);await d.initialized(),d.resetRedirect(),vE(),await this._originValidation(t);const f=yS(t,a,u);await bS(t,f);const p=await uS(t,f,s),m=await dS(p);return hS(t,d,m)}_isIframeWebStorageSupported(t,s){throw new Error("Method not implemented.")}_originValidation(t){const s=t._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=lS(t)),this.originValidationPromises[s]}attachCallbackListeners(t,s){const{universalLinks:a,handleOpenURL:u,BuildInfo:d}=Gn(),f=setTimeout(async()=>{await Im(t),s.onEvent(_m())},SS),p=async k=>{clearTimeout(f);const w=await Im(t);let L=null;w&&(k!=null&&k.url)&&(L=wS(w,k.url)),s.onEvent(L||_m())};typeof a<"u"&&typeof a.subscribe=="function"&&a.subscribe(null,p);const m=u,y=`${d.packageName.toLowerCase()}://`;Gn().handleOpenURL=async k=>{if(k.toLowerCase().startsWith(y)&&p({url:k}),typeof m=="function")try{m(k)}catch(w){console.error(w)}}}}const TS=kS;function _m(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Le("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(i,t){me(i)._logFramework(t)}var AS="@firebase/auth-compat",RS="0.5.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=1e3;function hs(){var i;return((i=self==null?void 0:self.location)===null||i===void 0?void 0:i.protocol)||null}function OS(){return hs()==="http:"||hs()==="https:"}function gv(i=Ce()){return!!((hs()==="file:"||hs()==="ionic:"||hs()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function NS(){return ju()||Hm()}function DS(){return $m()&&(document==null?void 0:document.documentMode)===11}function LS(i=Ce()){return/Edge\/\d+/.test(i)}function MS(i=Ce()){return DS()||LS(i)}function vv(){try{const i=self.localStorage,t=As();if(i)return i.setItem(t,"1"),i.removeItem(t),MS()?ms():!0}catch{return hl()&&ms()}return!1}function hl(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function _u(){return(OS()||Fu()||gv())&&!NS()&&vv()&&!hl()}function yv(){return gv()&&typeof document<"u"}async function xS(){return yv()?new Promise(i=>{const t=setTimeout(()=>{i(!1)},PS);document.addEventListener("deviceready",()=>{clearTimeout(t),i(!0)})}):!1}function US(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe={LOCAL:"local",NONE:"none",SESSION:"session"},rs=C,bv="persistence";function FS(i,t){if(rs(Object.values(Qe).includes(t),i,"invalid-persistence-type"),ju()){rs(t!==Qe.SESSION,i,"unsupported-persistence-type");return}if(Hm()){rs(t===Qe.NONE,i,"unsupported-persistence-type");return}if(hl()){rs(t===Qe.NONE||t===Qe.LOCAL&&ms(),i,"unsupported-persistence-type");return}rs(t===Qe.NONE||vv(),i,"unsupported-persistence-type")}async function Lu(i){await i._initializationPromise;const t=wv(),s=jn(bv,i.config.apiKey,i.name);t&&t.setItem(s,i._getPersistence())}function jS(i,t){const s=wv();if(!s)return[];const a=jn(bv,i,t);switch(s.getItem(a)){case Qe.NONE:return[$i];case Qe.LOCAL:return[Gi,fn];case Qe.SESSION:return[fn];default:return[]}}function wv(){var i;try{return((i=US())===null||i===void 0?void 0:i.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=C;class un{constructor(){this.browserResolver=et(pv),this.cordovaResolver=et(TS),this.underlyingResolver=null,this._redirectPersistence=fn,this._completeRedirectFn=Ta,this._overrideRedirectResult=ll}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,s,a,u){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,s,a,u)}async _openRedirect(t,s,a,u){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,s,a,u)}_isIframeWebStorageSupported(t,s){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,s)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return yv()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return BS(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await xS();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(i){return i.unwrap()}function VS(i){return i.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(i){return _v(i)}function $S(i,t){var s;const a=(s=t.customData)===null||s===void 0?void 0:s._tokenResponse;if((t==null?void 0:t.code)==="auth/multi-factor-auth-required"){const u=t;u.resolver=new WS(i,S2(i,t))}else if(a){const u=_v(t),d=t;u&&(d.credential=u,d.tenantId=a.tenantId||void 0,d.email=a.email||void 0,d.phoneNumber=a.phoneNumber||void 0)}}function _v(i){const{_tokenResponse:t}=i instanceof Me?i.customData:i;if(!t)return null;if(!(i instanceof Me)&&"temporaryProof"in t&&"phoneNumber"in t)return Wn.credentialFromResult(i);const s=t.providerId;if(!s||s===is.PASSWORD)return null;let a;switch(s){case is.GOOGLE:a=Et;break;case is.FACEBOOK:a=_t;break;case is.GITHUB:a=St;break;case is.TWITTER:a=kt;break;default:const{oauthIdToken:u,oauthAccessToken:d,oauthTokenSecret:f,pendingToken:p,nonce:m}=t;return!d&&!f&&!u&&!p?null:p?s.startsWith("saml.")?Wi._create(s,p):Ct._fromParams({providerId:s,signInMethod:s,pendingToken:p,idToken:u,accessToken:d}):new Bi(s).credential({idToken:u,accessToken:d,rawNonce:m})}return i instanceof Me?a.credentialFromError(i):a.credentialFromResult(i)}function $e(i,t){return t.catch(s=>{throw s instanceof Me&&$S(i,s),s}).then(s=>{const a=s.operationType,u=s.user;return{operationType:a,credential:HS(s),additionalUserInfo:w2(s),user:xt.getOrCreate(u)}})}async function Mu(i,t){const s=await t;return{verificationId:s.verificationId,confirm:a=>$e(i,s.confirm(a))}}class WS{constructor(t,s){this.resolver=s,this.auth=VS(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return $e(Iv(this.auth),this.resolver.resolveSignIn(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this._delegate=t,this.multiFactor=A2(t)}static getOrCreate(t){return xt.USER_MAP.has(t)||xt.USER_MAP.set(t,new xt(t)),xt.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return $e(this.auth,Yg(this._delegate,t))}async linkWithPhoneNumber(t,s){return Mu(this.auth,rE(this._delegate,t,s))}async linkWithPopup(t){return $e(this.auth,fE(this._delegate,t,un))}async linkWithRedirect(t){return await Lu(me(this.auth)),_E(this._delegate,t,un)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return $e(this.auth,Jg(this._delegate,t))}reauthenticateWithPhoneNumber(t,s){return Mu(this.auth,sE(this._delegate,t,s))}reauthenticateWithPopup(t){return $e(this.auth,hE(this._delegate,t,un))}async reauthenticateWithRedirect(t){return await Lu(me(this.auth)),wE(this._delegate,t,un)}sendEmailVerification(t){return u2(this._delegate,t)}async unlink(t){return await Y_(this._delegate,t),this}updateEmail(t){return f2(this._delegate,t)}updatePassword(t){return p2(this._delegate,t)}updatePhoneNumber(t){return oE(this._delegate,t)}updateProfile(t){return h2(this._delegate,t)}verifyBeforeUpdateEmail(t,s){return l2(this._delegate,t,s)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}xt.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=C;class xu{constructor(t,s){if(this.app=t,s.isInitialized()){this._delegate=s.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:a}=t.options;ss(a,"invalid-api-key",{appName:t.name}),ss(a,"invalid-api-key",{appName:t.name});const u=typeof window<"u"?un:void 0;this._delegate=s.initialize({options:{persistence:GS(a,t.name),popupRedirectResolver:u}}),this._delegate._updateErrorMap(FI),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?xt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,s){Vg(this._delegate,t,s)}applyActionCode(t){return e2(this._delegate,t)}checkActionCode(t){return Xg(this._delegate,t)}confirmPasswordReset(t,s){return Q_(this._delegate,t,s)}async createUserWithEmailAndPassword(t,s){return $e(this._delegate,n2(this._delegate,t,s))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return c2(this._delegate,t)}isSignInWithEmailLink(t){return s2(this._delegate,t)}async getRedirectResult(){ss(_u(),this._delegate,"operation-not-supported-in-this-environment");const t=await SE(this._delegate,un);return t?$e(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){CS(this._delegate,t)}onAuthStateChanged(t,s,a){const{next:u,error:d,complete:f}=Em(t,s,a);return this._delegate.onAuthStateChanged(u,d,f)}onIdTokenChanged(t,s,a){const{next:u,error:d,complete:f}=Em(t,s,a);return this._delegate.onIdTokenChanged(u,d,f)}sendSignInLinkToEmail(t,s){return r2(this._delegate,t,s)}sendPasswordResetEmail(t,s){return Z_(this._delegate,t,s||void 0)}async setPersistence(t){FS(this._delegate,t);let s;switch(t){case Qe.SESSION:s=fn;break;case Qe.LOCAL:s=await et(Gi)._isAvailable()?Gi:_a;break;case Qe.NONE:s=$i;break;default:return Ne("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(s)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return $e(this._delegate,z_(this._delegate))}signInWithCredential(t){return $e(this._delegate,wa(this._delegate,t))}signInWithCustomToken(t){return $e(this._delegate,X_(this._delegate,t))}signInWithEmailAndPassword(t,s){return $e(this._delegate,i2(this._delegate,t,s))}signInWithEmailLink(t,s){return $e(this._delegate,o2(this._delegate,t,s))}signInWithPhoneNumber(t,s){return Mu(this._delegate,iE(this._delegate,t,s))}async signInWithPopup(t){return ss(_u(),this._delegate,"operation-not-supported-in-this-environment"),$e(this._delegate,dE(this._delegate,t,un))}async signInWithRedirect(t){return ss(_u(),this._delegate,"operation-not-supported-in-this-environment"),await Lu(this._delegate),yE(this._delegate,t,un)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return t2(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}xu.Persistence=Qe;function Em(i,t,s){let a=i;typeof i!="function"&&({next:a,error:t,complete:s}=i);const u=a;return{next:f=>u(f&&xt.getOrCreate(f)),error:t,complete:s}}function GS(i,t){const s=jS(i,t);if(typeof self<"u"&&!s.includes(Gi)&&s.push(Gi),typeof window<"u")for(const a of[_a,fn])s.includes(a)||s.push(a);return s.includes($i)||s.push($i),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.providerId="phone",this._delegate=new Wn(Iv(O.auth()))}static credential(t,s){return Wn.credential(t,s)}verifyPhoneNumber(t,s){return this._delegate.verifyPhoneNumber(t,s)}unwrap(){return this._delegate}}fl.PHONE_SIGN_IN_METHOD=Wn.PHONE_SIGN_IN_METHOD;fl.PROVIDER_ID=Wn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=C;class qS{constructor(t,s,a=O.app()){var u;KS((u=a.options)===null||u===void 0?void 0:u.apiKey,"invalid-api-key",{appName:a.name}),this._delegate=new tE(a.auth(),t,s),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="auth-compat";function YS(i){i.INTERNAL.registerComponent(new ot(zS,t=>{const s=t.getProvider("app-compat").getImmediate(),a=t.getProvider("auth");return new xu(s,a)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Mi.EMAIL_SIGNIN,PASSWORD_RESET:Mi.PASSWORD_RESET,RECOVER_EMAIL:Mi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Mi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Mi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Mi.VERIFY_EMAIL}},EmailAuthProvider:mn,FacebookAuthProvider:_t,GithubAuthProvider:St,GoogleAuthProvider:Et,OAuthProvider:Bi,SAMLAuthProvider:sa,PhoneAuthProvider:fl,PhoneMultiFactorGenerator:mv,RecaptchaVerifier:qS,TwitterAuthProvider:kt,Auth:xu,AuthCredential:Yi,Error:Me}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(AS,RS)}YS(O);function JS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ev={exports:{}};(function(i){(function(){var t=window.CustomEvent;(!t||typeof t=="object")&&(t=function(I,S){S=S||{};var R=document.createEvent("CustomEvent");return R.initCustomEvent(I,!!S.bubbles,!!S.cancelable,S.detail||null),R},t.prototype=window.Event.prototype);function s(v){for(;v&&v!==document.body;){var I=window.getComputedStyle(v),S=function(R,j){return!(I[R]===void 0||I[R]===j)};if(I.opacity<1||S("zIndex","auto")||S("transform","none")||S("mixBlendMode","normal")||S("filter","none")||S("perspective","none")||I.isolation==="isolate"||I.position==="fixed"||I.webkitOverflowScrolling==="touch")return!0;v=v.parentElement}return!1}function a(v){for(;v;){if(v.localName==="dialog")return v;v=v.parentElement}return null}function u(v){v&&v.blur&&v!==document.body&&v.blur()}function d(v,I){for(var S=0;S<v.length;++S)if(v[S]===I)return!0;return!1}function f(v){return!v||!v.hasAttribute("method")?!1:v.getAttribute("method").toLowerCase()==="dialog"}function p(v){if(this.dialog_=v,this.replacedStyleTop_=!1,this.openAsModal_=!1,v.hasAttribute("role")||v.setAttribute("role","dialog"),v.show=this.show.bind(this),v.showModal=this.showModal.bind(this),v.close=this.close.bind(this),"returnValue"in v||(v.returnValue=""),"MutationObserver"in window){var I=new MutationObserver(this.maybeHideModal.bind(this));I.observe(v,{attributes:!0,attributeFilter:["open"]})}else{var S=!1,R=(function(){S?this.downgradeModal():this.maybeHideModal(),S=!1}).bind(this),j,Y=function(K){if(K.target===v){var te="DOMNodeRemoved";S|=K.type.substr(0,te.length)===te,window.clearTimeout(j),j=window.setTimeout(R,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(K){v.addEventListener(K,Y)})}Object.defineProperty(v,"open",{set:this.setOpen.bind(this),get:v.hasAttribute.bind(v,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}p.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),m.dm.removeDialog(this))},setOpen:function(v){v?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(v){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var I=document.createElement("div");this.dialog_.insertBefore(I,this.dialog_.firstChild),I.tabIndex=-1,I.focus(),this.dialog_.removeChild(I)}var S=document.createEvent("MouseEvents");S.initMouseEvent(v.type,v.bubbles,v.cancelable,window,v.detail,v.screenX,v.screenY,v.clientX,v.clientY,v.ctrlKey,v.altKey,v.shiftKey,v.metaKey,v.button,v.relatedTarget),this.dialog_.dispatchEvent(S),v.stopPropagation()},focus_:function(){var v=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!v&&this.dialog_.tabIndex>=0&&(v=this.dialog_),!v){var I=["button","input","keygen","select","textarea"],S=I.map(function(R){return R+":not([disabled])"});S.push('[tabindex]:not([disabled]):not([tabindex=""])'),v=this.dialog_.querySelector(S.join(", "))}u(document.activeElement),v&&v.focus()},updateZIndex:function(v,I){if(v<I)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=v,this.backdrop_.style.zIndex=I},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!m.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");s(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,m.needsCentering(this.dialog_)?(m.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(v){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),v!==void 0&&(this.dialog_.returnValue=v);var I=new t("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(I)}};var m={};if(m.reposition=function(v){var I=document.body.scrollTop||document.documentElement.scrollTop,S=I+(window.innerHeight-v.offsetHeight)/2;v.style.top=Math.max(I,S)+"px"},m.isInlinePositionSetByStylesheet=function(v){for(var I=0;I<document.styleSheets.length;++I){var S=document.styleSheets[I],R=null;try{R=S.cssRules}catch{}if(R)for(var j=0;j<R.length;++j){var Y=R[j],K=null;try{K=document.querySelectorAll(Y.selectorText)}catch{}if(!(!K||!d(K,v))){var te=Y.style.getPropertyValue("top"),q=Y.style.getPropertyValue("bottom");if(te&&te!=="auto"||q&&q!=="auto")return!0}}}return!1},m.needsCentering=function(v){var I=window.getComputedStyle(v);return I.position!=="absolute"||v.style.top!=="auto"&&v.style.top!==""||v.style.bottom!=="auto"&&v.style.bottom!==""?!1:!m.isInlinePositionSetByStylesheet(v)},m.forceRegisterDialog=function(v){if((window.HTMLDialogElement||v.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",v),v.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new p(v)},m.registerDialog=function(v){v.showModal||m.forceRegisterDialog(v)},m.DialogManager=function(){this.pendingDialogStack=[];var v=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(I){this.forwardTab_=void 0,I.stopPropagation(),v([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(I){var S=[];I.forEach(function(R){for(var j=0,Y;Y=R.removedNodes[j];++j){if(Y instanceof Element)Y.localName==="dialog"&&S.push(Y);else continue;S=S.concat(Y.querySelectorAll("dialog"))}}),S.length&&v(S)}))},m.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},m.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},m.DialogManager.prototype.updateStacking=function(){for(var v=this.zIndexHigh_,I=0,S;S=this.pendingDialogStack[I];++I)S.updateZIndex(--v,--v),I===0&&(this.overlay.style.zIndex=--v);var R=this.pendingDialogStack[0];if(R){var j=R.dialog.parentNode||document.body;j.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},m.DialogManager.prototype.containedByTopDialog_=function(v){for(;v=a(v);){for(var I=0,S;S=this.pendingDialogStack[I];++I)if(S.dialog===v)return I===0;v=v.parentElement}return!1},m.DialogManager.prototype.handleFocus_=function(v){if(!this.containedByTopDialog_(v.target)&&(v.preventDefault(),v.stopPropagation(),u(v.target),this.forwardTab_!==void 0)){var I=this.pendingDialogStack[0],S=I.dialog,R=S.compareDocumentPosition(v.target);return R&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?I.focus_():document.documentElement.focus()),!1}},m.DialogManager.prototype.handleKey_=function(v){if(this.forwardTab_=void 0,v.keyCode===27){v.preventDefault(),v.stopPropagation();var I=new t("cancel",{bubbles:!1,cancelable:!0}),S=this.pendingDialogStack[0];S&&S.dialog.dispatchEvent(I)&&S.dialog.close()}else v.keyCode===9&&(this.forwardTab_=!v.shiftKey)},m.DialogManager.prototype.checkDOM_=function(v){var I=this.pendingDialogStack.slice();I.forEach(function(S){v.indexOf(S.dialog)!==-1?S.downgradeModal():S.maybeHideModal()})},m.DialogManager.prototype.pushDialog=function(v){var I=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=I?!1:(this.pendingDialogStack.unshift(v)===1&&this.blockDocument(),this.updateStacking(),!0)},m.DialogManager.prototype.removeDialog=function(v){var I=this.pendingDialogStack.indexOf(v);I!==-1&&(this.pendingDialogStack.splice(I,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())},m.dm=new m.DialogManager,m.formSubmitter=null,m.useValue=null,window.HTMLDialogElement===void 0){var y=document.createElement("form");if(y.setAttribute("method","dialog"),y.method!=="dialog"){var k=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(k){var w=k.get;k.get=function(){return f(this)?"dialog":w.call(this)};var L=k.set;k.set=function(v){return typeof v=="string"&&v.toLowerCase()==="dialog"?this.setAttribute("method",v):L.call(this,v)},Object.defineProperty(HTMLFormElement.prototype,"method",k)}}document.addEventListener("click",function(v){if(m.formSubmitter=null,m.useValue=null,!v.defaultPrevented){var I=v.target;if(!(!I||!f(I.form))){var S=I.type==="submit"&&["button","input"].indexOf(I.localName)>-1;if(!S){if(!(I.localName==="input"&&I.type==="image"))return;m.useValue=v.offsetX+","+v.offsetY}var R=a(I);R&&(m.formSubmitter=I)}}},!1);var D=HTMLFormElement.prototype.submit,ae=function(){if(!f(this))return D.call(this);var v=a(this);v&&v.close()};HTMLFormElement.prototype.submit=ae,document.addEventListener("submit",function(v){var I=v.target;if(f(I)){v.preventDefault();var S=a(I);if(S){var R=m.formSubmitter;R&&R.form===I?S.close(m.useValue||R.value):S.close(),m.formSubmitter=null}}},!0)}m.forceRegisterDialog=m.forceRegisterDialog,m.registerDialog=m.registerDialog,typeof i.exports=="object"?i.exports=m:window.dialogPolyfill=m})()})(Ev);var XS=Ev.exports;const ZS=JS(XS);/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue={upgradeDom:function(i,t){},upgradeElement:function(i,t){},upgradeElements:function(i){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(i,t){},register:function(i){},downgradeElements:function(i){}};ue=function(){var i=[],t=[],s="mdlComponentConfigInternal_";function a(v,I){for(var S=0;S<i.length;S++)if(i[S].className===v)return typeof I<"u"&&(i[S]=I),i[S];return!1}function u(v){var I=v.getAttribute("data-upgraded");return I===null?[""]:I.split(",")}function d(v,I){var S=u(v);return S.indexOf(I)!==-1}function f(v,I,S){if("CustomEvent"in window&&typeof window.CustomEvent=="function")return new CustomEvent(v,{bubbles:I,cancelable:S});var R=document.createEvent("Events");return R.initEvent(v,I,S),R}function p(v,I){if(typeof v>"u"&&typeof I>"u")for(var S=0;S<i.length;S++)p(i[S].className,i[S].cssClass);else{var R=v;if(typeof I>"u"){var j=a(R);j&&(I=j.cssClass)}for(var Y=document.querySelectorAll("."+I),K=0;K<Y.length;K++)m(Y[K],R)}}function m(v,I){if(!(typeof v=="object"&&v instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var S=f("mdl-componentupgrading",!0,!0);if(v.dispatchEvent(S),!S.defaultPrevented){var R=u(v),j=[];if(I)d(v,I)||j.push(a(I));else{var Y=v.classList;i.forEach(function(it){Y.contains(it.cssClass)&&j.indexOf(it)===-1&&!d(v,it.className)&&j.push(it)})}for(var K=0,te=j.length,q;K<te;K++){if(q=j[K],q){R.push(q.className),v.setAttribute("data-upgraded",R.join(","));var le=new q.classConstructor(v);le[s]=q,t.push(le);for(var Be=0,Xi=q.callbacks.length;Be<Xi;Be++)q.callbacks[Be](v);q.widget&&(v[q.className]=le)}else throw new Error("Unable to find a registered component for the given class.");var J=f("mdl-componentupgraded",!0,!1);v.dispatchEvent(J)}}}function y(v){Array.isArray(v)||(v instanceof Element?v=[v]:v=Array.prototype.slice.call(v));for(var I=0,S=v.length,R;I<S;I++)R=v[I],R instanceof HTMLElement&&(m(R),R.children.length>0&&y(R.children))}function k(v){var I=typeof v.widget>"u"&&typeof v.widget>"u",S=!0;I||(S=v.widget||v.widget);var R={classConstructor:v.constructor||v.constructor,className:v.classAsString||v.classAsString,cssClass:v.cssClass||v.cssClass,widget:S,callbacks:[]};if(i.forEach(function(Y){if(Y.cssClass===R.cssClass)throw new Error("The provided cssClass has already been registered: "+Y.cssClass);if(Y.className===R.className)throw new Error("The provided className has already been registered")}),v.constructor.prototype.hasOwnProperty(s))throw new Error("MDL component classes must not have "+s+" defined as a property.");var j=a(v.classAsString,R);j||i.push(R)}function w(v,I){var S=a(v);S&&S.callbacks.push(I)}function L(){for(var v=0;v<i.length;v++)p(i[v].className)}function D(v){if(v){var I=t.indexOf(v);t.splice(I,1);var S=v.element_.getAttribute("data-upgraded").split(","),R=S.indexOf(v[s].classAsString);S.splice(R,1),v.element_.setAttribute("data-upgraded",S.join(","));var j=f("mdl-componentdowngraded",!0,!1);v.element_.dispatchEvent(j)}}function ae(v){var I=function(R){t.filter(function(j){return j.element_===R}).forEach(D)};if(v instanceof Array||v instanceof NodeList)for(var S=0;S<v.length;S++)I(v[S]);else if(v instanceof Node)I(v);else throw new Error("Invalid argument provided to downgrade MDL nodes.")}return{upgradeDom:p,upgradeElement:m,upgradeElements:y,upgradeAllRegistered:L,registerUpgradedCallback:w,register:k,downgradeElements:ae}}();ue.ComponentConfigPublic;ue.ComponentConfig;ue.Component;ue.upgradeDom=ue.upgradeDom;ue.upgradeElement=ue.upgradeElement;ue.upgradeElements=ue.upgradeElements;ue.upgradeAllRegistered=ue.upgradeAllRegistered;ue.registerUpgradedCallback=ue.registerUpgradedCallback;ue.register=ue.register;ue.downgradeElements=ue.downgradeElements;window.componentHandler=ue;window.componentHandler=ue;window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),ue.upgradeAllRegistered()):(ue.upgradeElement=function(){},ue.register=function(){})});/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(s){this.element_=s,this.init()};window.MaterialButton=i,i.prototype.Constant_={},i.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},i.prototype.blurHandler_=function(t){t&&this.element_.blur()},i.prototype.disable=function(){this.element_.disabled=!0},i.prototype.disable=i.prototype.disable,i.prototype.enable=function(){this.element_.disabled=!1},i.prototype.enable=i.prototype.enable,i.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var t=document.createElement("span");t.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),t.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(t)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:i,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(s){this.element_=s,this.init()};window.MaterialProgress=i,i.prototype.Constant_={},i.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},i.prototype.setProgress=function(t){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=t+"%")},i.prototype.setProgress=i.prototype.setProgress,i.prototype.setBuffer=function(t){this.bufferbar_.style.width=t+"%",this.auxbar_.style.width=100-t+"%"},i.prototype.setBuffer=i.prototype.setBuffer,i.prototype.init=function(){if(this.element_){var t=document.createElement("div");t.className="progressbar bar bar1",this.element_.appendChild(t),this.progressbar_=t,t=document.createElement("div"),t.className="bufferbar bar bar2",this.element_.appendChild(t),this.bufferbar_=t,t=document.createElement("div"),t.className="auxbar bar bar3",this.element_.appendChild(t),this.auxbar_=t,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:i,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(s){this.element_=s,this.init()};window.MaterialSpinner=i,i.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},i.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},i.prototype.createLayer=function(t){var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),s.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+t);var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),a.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var u=document.createElement("div");u.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var d=document.createElement("div");d.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),d.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var f=[a,u,d],p=0;p<f.length;p++){var m=document.createElement("div");m.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),f[p].appendChild(m)}s.appendChild(a),s.appendChild(u),s.appendChild(d),this.element_.appendChild(s)},i.prototype.createLayer=i.prototype.createLayer,i.prototype.stop=function(){this.element_.classList.remove("is-active")},i.prototype.stop=i.prototype.stop,i.prototype.start=function(){this.element_.classList.add("is-active")},i.prototype.start=i.prototype.start,i.prototype.init=function(){if(this.element_){for(var t=1;t<=this.Constant_.MDL_SPINNER_LAYER_COUNT;t++)this.createLayer(t);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:i,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(s){this.element_=s,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=i,i.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},i.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},i.prototype.onKeyDown_=function(t){var s=t.target.value.split(`
`).length;t.keyCode===13&&s>=this.maxRows&&t.preventDefault()},i.prototype.onFocus_=function(t){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},i.prototype.onBlur_=function(t){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},i.prototype.onReset_=function(t){this.updateClasses_()},i.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},i.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},i.prototype.checkDisabled=i.prototype.checkDisabled,i.prototype.checkFocus=function(){this.element_.querySelector(":focus")?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},i.prototype.checkFocus=i.prototype.checkFocus,i.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},i.prototype.checkValidity=i.prototype.checkValidity,i.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},i.prototype.checkDirty=i.prototype.checkDirty,i.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},i.prototype.disable=i.prototype.disable,i.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},i.prototype.enable=i.prototype.enable,i.prototype.change=function(t){this.input_.value=t||"",this.updateClasses_()},i.prototype.change=i.prototype.change,i.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var t=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),t&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:i,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0})})();(function(){(function(){var i,t=typeof Object.create=="function"?Object.create:function(e){function n(){}return n.prototype=e,new n},s;if(typeof Object.setPrototypeOf=="function")s=Object.setPrototypeOf;else{var a;e:{var u={xb:!0},d={};try{d.__proto__=u,a=d.xb;break e}catch{}a=!1}s=a?function(e,n){if(e.__proto__=n,e.__proto__!==n)throw new TypeError(e+" is not extensible");return e}:null}var f=s;function p(e,n){if(e.prototype=t(n.prototype),e.prototype.constructor=e,f)f(e,n);else for(var r in n)if(r!="prototype")if(Object.defineProperties){var o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(e,r,o)}else e[r]=n[r];e.K=n.prototype}var m=typeof Object.defineProperties=="function"?Object.defineProperty:function(e,n,r){e!=Array.prototype&&e!=Object.prototype&&(e[n]=r.value)},y=typeof window<"u"&&window===this?this:typeof global<"u"&&global!=null?global:this;function k(e,n){if(n){var r=y;e=e.split(".");for(var o=0;o<e.length-1;o++){var c=e[o];c in r||(r[c]={}),r=r[c]}e=e[e.length-1],o=r[e],n=n(o),n!=o&&n!=null&&m(r,e,{configurable:!0,writable:!0,value:n})}}k("Object.is",function(e){return e||function(n,r){return n===r?n!==0||1/n===1/r:n!==n&&r!==r}}),k("Array.prototype.includes",function(e){return e||function(n,r){var o=this;o instanceof String&&(o=String(o));var c=o.length;for(r=r||0,0>r&&(r=Math.max(r+c,0));r<c;r++){var l=o[r];if(l===n||Object.is(l,n))return!0}return!1}});var w=this;function L(e){return e!==void 0}function D(e){return typeof e=="string"}var ae=/^[\w+/_-]+[=]{0,2}$/,v=null;function I(){}function S(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function R(e){var n=typeof e;if(n=="object")if(e){if(e instanceof Array)return"array";if(e instanceof Object)return n;var r=Object.prototype.toString.call(e);if(r=="[object Window]")return"object";if(r=="[object Array]"||typeof e.length=="number"&&typeof e.splice<"u"&&typeof e.propertyIsEnumerable<"u"&&!e.propertyIsEnumerable("splice"))return"array";if(r=="[object Function]"||typeof e.call<"u"&&typeof e.propertyIsEnumerable<"u"&&!e.propertyIsEnumerable("call"))return"function"}else return"null";else if(n=="function"&&typeof e.call>"u")return"object";return n}function j(e){return R(e)=="array"}function Y(e){var n=R(e);return n=="array"||n=="object"&&typeof e.length=="number"}function K(e){return R(e)=="function"}function te(e){var n=typeof e;return n=="object"&&e!=null||n=="function"}var q="closure_uid_"+(1e9*Math.random()>>>0),le=0;function Be(e,n,r){return e.call.apply(e.bind,arguments)}function Xi(e,n,r){if(!e)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,o),e.apply(n,c)}}return function(){return e.apply(n,arguments)}}function J(e,n,r){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=Be:J=Xi,J.apply(null,arguments)}function it(e,n){var r=Array.prototype.slice.call(arguments,1);return function(){var o=r.slice();return o.push.apply(o,arguments),e.apply(this,o)}}function re(e,n){for(var r in n)e[r]=n[r]}var gn=Date.now||function(){return+new Date};function se(e,n){e=e.split(".");var r=w;e[0]in r||typeof r.execScript>"u"||r.execScript("var "+e[0]);for(var o;e.length&&(o=e.shift());)!e.length&&L(n)?r[o]=n:r[o]&&r[o]!==Object.prototype[o]?r=r[o]:r=r[o]={}}function U(e,n){function r(){}r.prototype=n.prototype,e.K=n.prototype,e.prototype=new r,e.prototype.constructor=e,e.vc=function(o,c,l){for(var h=Array(arguments.length-2),g=2;g<arguments.length;g++)h[g-2]=arguments[g];return n.prototype[c].apply(o,h)}}function Ge(e){if(Error.captureStackTrace)Error.captureStackTrace(this,Ge);else{var n=Error().stack;n&&(this.stack=n)}e&&(this.message=String(e))}U(Ge,Error),Ge.prototype.name="CustomError";var pl;function Ca(e,n){e=e.split("%s");for(var r="",o=e.length-1,c=0;c<o;c++)r+=e[c]+(c<n.length?n[c]:"%s");Ge.call(this,r+e[o])}U(Ca,Ge),Ca.prototype.name="AssertionError";function At(e,n){throw new Ca("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}var ml=Array.prototype.indexOf?function(e,n){return Array.prototype.indexOf.call(e,n,void 0)}:function(e,n){if(D(e))return D(n)&&n.length==1?e.indexOf(n,0):-1;for(var r=0;r<e.length;r++)if(r in e&&e[r]===n)return r;return-1},Zi=Array.prototype.forEach?function(e,n,r){Array.prototype.forEach.call(e,n,r)}:function(e,n,r){for(var o=e.length,c=D(e)?e.split(""):e,l=0;l<o;l++)l in c&&n.call(r,c[l],l,e)};function Sv(e,n){for(var r=D(e)?e.split(""):e,o=e.length-1;0<=o;--o)o in r&&n.call(void 0,r[o],o,e)}var kv=Array.prototype.filter?function(e,n){return Array.prototype.filter.call(e,n,void 0)}:function(e,n){for(var r=e.length,o=[],c=0,l=D(e)?e.split(""):e,h=0;h<r;h++)if(h in l){var g=l[h];n.call(void 0,g,h,e)&&(o[c++]=g)}return o},Tv=Array.prototype.map?function(e,n){return Array.prototype.map.call(e,n,void 0)}:function(e,n){for(var r=e.length,o=Array(r),c=D(e)?e.split(""):e,l=0;l<r;l++)l in c&&(o[l]=n.call(void 0,c[l],l,e));return o},Cv=Array.prototype.some?function(e,n){return Array.prototype.some.call(e,n,void 0)}:function(e,n){for(var r=e.length,o=D(e)?e.split(""):e,c=0;c<r;c++)if(c in o&&n.call(void 0,o[c],c,e))return!0;return!1};function rt(e,n){return 0<=ml(e,n)}function gl(e,n){n=ml(e,n);var r;return(r=0<=n)&&Ps(e,n),r}function Ps(e,n){return Array.prototype.splice.call(e,n,1).length==1}function Av(e,n){e:{for(var r=e.length,o=D(e)?e.split(""):e,c=0;c<r;c++)if(c in o&&n.call(void 0,o[c],c,e)){n=c;break e}n=-1}0<=n&&Ps(e,n)}function Rv(e,n){var r=0;Sv(e,function(o,c){n.call(void 0,o,c,e)&&Ps(e,c)&&r++})}function vl(e){return Array.prototype.concat.apply([],arguments)}function yl(e){var n=e.length;if(0<n){for(var r=Array(n),o=0;o<n;o++)r[o]=e[o];return r}return[]}function Pv(e,n,r){return 2>=arguments.length?Array.prototype.slice.call(e,n):Array.prototype.slice.call(e,n,r)}var Ke=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},Ov=/&/g,Nv=/</g,Dv=/>/g,Lv=/"/g,Mv=/'/g,xv=/\x00/g,Uv=/[\x00&<>"']/;function Aa(e,n){return e<n?-1:e>n?1:0}function zn(e){return Uv.test(e)&&(e.indexOf("&")!=-1&&(e=e.replace(Ov,"&amp;")),e.indexOf("<")!=-1&&(e=e.replace(Nv,"&lt;")),e.indexOf(">")!=-1&&(e=e.replace(Dv,"&gt;")),e.indexOf('"')!=-1&&(e=e.replace(Lv,"&quot;")),e.indexOf("'")!=-1&&(e=e.replace(Mv,"&#39;")),e.indexOf("\0")!=-1&&(e=e.replace(xv,"&#0;"))),e}function bl(e,n,r){for(var o in e)n.call(r,e[o],o,e)}function Ra(e){var n={},r;for(r in e)n[r]=e[r];return n}var wl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Os(e,n){for(var r,o,c=1;c<arguments.length;c++){o=arguments[c];for(r in o)e[r]=o[r];for(var l=0;l<wl.length;l++)r=wl[l],Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}}var Yn="StopIteration"in w?w.StopIteration:{message:"StopIteration",stack:""};function vn(){}vn.prototype.next=function(){throw Yn},vn.prototype.ha=function(){return this};function Il(e){if(e instanceof vn)return e;if(typeof e.ha=="function")return e.ha(!1);if(Y(e)){var n=0,r=new vn;return r.next=function(){for(;;){if(n>=e.length)throw Yn;if(n in e)return e[n++];n++}},r}throw Error("Not implemented")}function Fv(e,n){if(Y(e))try{Zi(e,n,void 0)}catch(r){if(r!==Yn)throw r}else{e=Il(e);try{for(;;)n.call(void 0,e.next(),void 0,e)}catch(r){if(r!==Yn)throw r}}}function jv(e){if(Y(e))return yl(e);e=Il(e);var n=[];return Fv(e,function(r){n.push(r)}),n}function Ns(e,n){this.g={},this.a=[],this.j=this.h=0;var r=arguments.length;if(1<r){if(r%2)throw Error("Uneven number of arguments");for(var o=0;o<r;o+=2)this.set(arguments[o],arguments[o+1])}else if(e)if(e instanceof Ns)for(r=e.ja(),o=0;o<r.length;o++)this.set(r[o],e.get(r[o]));else for(o in e)this.set(o,e[o])}i=Ns.prototype,i.la=function(){Ds(this);for(var e=[],n=0;n<this.a.length;n++)e.push(this.g[this.a[n]]);return e},i.ja=function(){return Ds(this),this.a.concat()},i.clear=function(){this.g={},this.j=this.h=this.a.length=0};function Ds(e){if(e.h!=e.a.length){for(var n=0,r=0;n<e.a.length;){var o=e.a[n];yn(e.g,o)&&(e.a[r++]=o),n++}e.a.length=r}if(e.h!=e.a.length){var c={};for(r=n=0;n<e.a.length;)o=e.a[n],yn(c,o)||(e.a[r++]=o,c[o]=1),n++;e.a.length=r}}i.get=function(e,n){return yn(this.g,e)?this.g[e]:n},i.set=function(e,n){yn(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=n},i.forEach=function(e,n){for(var r=this.ja(),o=0;o<r.length;o++){var c=r[o],l=this.get(c);e.call(n,l,c,this)}},i.ha=function(e){Ds(this);var n=0,r=this.j,o=this,c=new vn;return c.next=function(){if(r!=o.j)throw Error("The map has changed since the iterator was created");if(n>=o.a.length)throw Yn;var l=o.a[n++];return e?l:o.g[l]},c};function yn(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var Bv=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Vv(e,n){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var o=e[r].indexOf("="),c=null;if(0<=o){var l=e[r].substring(0,o);c=e[r].substring(o+1)}else l=e[r];n(l,c?decodeURIComponent(c.replace(/\+/g," ")):"")}}}function _l(e,n,r,o){for(var c=r.length;0<=(n=e.indexOf(r,n))&&n<o;){var l=e.charCodeAt(n-1);if((l==38||l==63)&&(l=e.charCodeAt(n+c),!l||l==61||l==38||l==35))return n;n+=c+1}return-1}var El=/#|$/;function Ls(e,n){var r=e.search(El),o=_l(e,0,n,r);if(0>o)return null;var c=e.indexOf("&",o);return(0>c||c>r)&&(c=r),o+=n.length+1,decodeURIComponent(e.substr(o,c-o).replace(/\+/g," "))}var Hv=/[?&]($|#)/;function $t(e,n){this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1;var r;e instanceof $t?(this.i=L(n)?n:e.i,Pa(this,e.j),this.A=e.A,this.h=e.h,Oa(this,e.C),this.g=e.g,Na(this,Tl(e.a)),this.s=e.s):e&&(r=String(e).match(Bv))?(this.i=!!n,Pa(this,r[1]||"",!0),this.A=Qi(r[2]||""),this.h=Qi(r[3]||"",!0),Oa(this,r[4]),this.g=Qi(r[5]||"",!0),Na(this,r[6]||"",!0),this.s=Qi(r[7]||"")):(this.i=!!n,this.a=new tr(null,this.i))}$t.prototype.toString=function(){var e=[],n=this.j;n&&e.push(er(n,Sl,!0),":");var r=this.h;return(r||n=="file")&&(e.push("//"),(n=this.A)&&e.push(er(n,Sl,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.C,r!=null&&e.push(":",String(r))),(r=this.g)&&(this.h&&r.charAt(0)!="/"&&e.push("/"),e.push(er(r,r.charAt(0)=="/"?Gv:Wv,!0))),(r=this.a.toString())&&e.push("?",r),(r=this.s)&&e.push("#",er(r,qv)),e.join("")};function Pa(e,n,r){e.j=r?Qi(n,!0):n,e.j&&(e.j=e.j.replace(/:$/,""))}function Oa(e,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);e.C=n}else e.C=null}function Na(e,n,r){n instanceof tr?(e.a=n,zv(e.a,e.i)):(r||(n=er(n,Kv)),e.a=new tr(n,e.i))}function Da(e){return e instanceof $t?new $t(e):new $t(e,void 0)}function Qi(e,n){return e?n?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function er(e,n,r){return D(e)?(e=encodeURI(e).replace(n,$v),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function $v(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Sl=/[#\/\?@]/g,Wv=/[#\?:]/g,Gv=/[#\?]/g,Kv=/[#\?@]/g,qv=/#/g;function tr(e,n){this.g=this.a=null,this.h=e||null,this.j=!!n}function Wt(e){e.a||(e.a=new Ns,e.g=0,e.h&&Vv(e.h,function(n,r){e.add(decodeURIComponent(n.replace(/\+/g," ")),r)}))}i=tr.prototype,i.add=function(e,n){Wt(this),this.h=null,e=Jn(this,e);var r=this.a.get(e);return r||this.a.set(e,r=[]),r.push(n),this.g+=1,this};function bn(e,n){Wt(e),n=Jn(e,n),yn(e.a.g,n)&&(e.h=null,e.g-=e.a.get(n).length,e=e.a,yn(e.g,n)&&(delete e.g[n],e.h--,e.j++,e.a.length>2*e.h&&Ds(e)))}i.clear=function(){this.a=this.h=null,this.g=0};function kl(e,n){return Wt(e),n=Jn(e,n),yn(e.a.g,n)}i.forEach=function(e,n){Wt(this),this.a.forEach(function(r,o){Zi(r,function(c){e.call(n,c,o,this)},this)},this)},i.ja=function(){Wt(this);for(var e=this.a.la(),n=this.a.ja(),r=[],o=0;o<n.length;o++)for(var c=e[o],l=0;l<c.length;l++)r.push(n[o]);return r},i.la=function(e){Wt(this);var n=[];if(D(e))kl(this,e)&&(n=vl(n,this.a.get(Jn(this,e))));else{e=this.a.la();for(var r=0;r<e.length;r++)n=vl(n,e[r])}return n},i.set=function(e,n){return Wt(this),this.h=null,e=Jn(this,e),kl(this,e)&&(this.g-=this.a.get(e).length),this.a.set(e,[n]),this.g+=1,this},i.get=function(e,n){return e?(e=this.la(e),0<e.length?String(e[0]):n):n},i.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],n=this.a.ja(),r=0;r<n.length;r++){var o=n[r],c=encodeURIComponent(String(o));o=this.la(o);for(var l=0;l<o.length;l++){var h=c;o[l]!==""&&(h+="="+encodeURIComponent(String(o[l]))),e.push(h)}}return this.h=e.join("&")};function Tl(e){var n=new tr;return n.h=e.h,e.a&&(n.a=new Ns(e.a),n.g=e.g),n}function Jn(e,n){return n=String(n),e.j&&(n=n.toLowerCase()),n}function zv(e,n){n&&!e.j&&(Wt(e),e.h=null,e.a.forEach(function(r,o){var c=o.toLowerCase();o!=c&&(bn(this,o),bn(this,c),0<r.length&&(this.h=null,this.a.set(Jn(this,c),yl(r)),this.g+=r.length))},e)),e.j=n}function wn(e){this.a=Da(e)}function Yv(e,n){n?e.a.a.set(Ie.Sa,n):bn(e.a.a,Ie.Sa)}function Jv(e,n){n!==null?e.a.a.set(Ie.Qa,n?"1":"0"):bn(e.a.a,Ie.Qa)}function Cl(e){return e.a.a.get(Ie.Pa)||null}function Al(e,n){n?e.a.a.set(Ie.PROVIDER_ID,n):bn(e.a.a,Ie.PROVIDER_ID)}wn.prototype.toString=function(){return this.a.toString()};var Ie={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"},Xn;e:{var Rl=w.navigator;if(Rl){var Pl=Rl.userAgent;if(Pl){Xn=Pl;break e}}Xn=""}function V(e){return Xn.indexOf(e)!=-1}function Ol(){return(V("Chrome")||V("CriOS"))&&!V("Edge")}function La(e){return La[" "](e),e}La[" "]=I;function Xv(e,n){var r=ey;return Object.prototype.hasOwnProperty.call(r,e)?r[e]:r[e]=n(e)}var Nl=V("Opera"),de=V("Trident")||V("MSIE"),Gt=V("Edge"),Zv=Gt||de,ct=V("Gecko")&&!(Xn.toLowerCase().indexOf("webkit")!=-1&&!V("Edge"))&&!(V("Trident")||V("MSIE"))&&!V("Edge"),xe=Xn.toLowerCase().indexOf("webkit")!=-1&&!V("Edge"),Qv=xe&&V("Mobile"),Kt=V("Macintosh");function Dl(){var e=w.document;return e?e.documentMode:void 0}var Ms;e:{var Ma="",xa=function(){var e=Xn;if(ct)return/rv:([^\);]+)(\)|;)/.exec(e);if(Gt)return/Edge\/([\d\.]+)/.exec(e);if(de)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(xe)return/WebKit\/(\S+)/.exec(e);if(Nl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(xa&&(Ma=xa?xa[1]:""),de){var Ua=Dl();if(Ua!=null&&Ua>parseFloat(Ma)){Ms=String(Ua);break e}}Ms=Ma}var ey={};function In(e){return Xv(e,function(){for(var n=0,r=Ke(String(Ms)).split("."),o=Ke(String(e)).split("."),c=Math.max(r.length,o.length),l=0;n==0&&l<c;l++){var h=r[l]||"",g=o[l]||"";do{if(h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""],g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""],h[0].length==0&&g[0].length==0)break;n=Aa(h[1].length==0?0:parseInt(h[1],10),g[1].length==0?0:parseInt(g[1],10))||Aa(h[2].length==0,g[2].length==0)||Aa(h[2],g[2]),h=h[3],g=g[3]}while(n==0)}return 0<=n})}var nr,Ll=w.document;nr=Ll&&de?Dl()||(Ll.compatMode=="CSS1Compat"?parseInt(Ms,10):5):void 0;function Zn(e,n){this.a=e===xl&&n||"",this.g=Ml}Zn.prototype.ma=!0,Zn.prototype.ka=function(){return this.a},Zn.prototype.toString=function(){return"Const{"+this.a+"}"};var Ml={},xl={};function _n(){this.a="",this.h=Fl}_n.prototype.ma=!0,_n.prototype.ka=function(){return this.a.toString()},_n.prototype.g=function(){return 1},_n.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function Ul(e){return e instanceof _n&&e.constructor===_n&&e.h===Fl?e.a:(At("expected object of type TrustedResourceUrl, got '"+e+"' of type "+R(e)),"type_error:TrustedResourceUrl")}function ty(){var e=Ky;e instanceof Zn&&e.constructor===Zn&&e.g===Ml?e=e.a:(At("expected object of type Const, got '"+e+"'"),e="type_error:Const");var n=new _n;return n.a=e,n}var Fl={};function qe(){this.a="",this.h=Vl}qe.prototype.ma=!0,qe.prototype.ka=function(){return this.a.toString()},qe.prototype.g=function(){return 1},qe.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function qt(e){return e instanceof qe&&e.constructor===qe&&e.h===Vl?e.a:(At("expected object of type SafeUrl, got '"+e+"' of type "+R(e)),"type_error:SafeUrl")}var jl=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function xs(e){return e instanceof qe?e:(e=typeof e=="object"&&e.ma?e.ka():String(e),jl.test(e)||(e="about:invalid#zClosurez"),Fa(e))}function Bl(e){return e instanceof qe?e:(e=typeof e=="object"&&e.ma?e.ka():String(e),jl.test(e)||(e="about:invalid#zClosurez"),Fa(e))}var Vl={};function Fa(e){var n=new qe;return n.a=e,n}Fa("about:blank");function Qn(){this.a="",this.g=Hl}Qn.prototype.ma=!0;var Hl={};Qn.prototype.ka=function(){return this.a},Qn.prototype.toString=function(){return"SafeStyle{"+this.a+"}"};function zt(){this.a="",this.j=$l,this.h=null}zt.prototype.g=function(){return this.h},zt.prototype.ma=!0,zt.prototype.ka=function(){return this.a.toString()},zt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Us(e){return e instanceof zt&&e.constructor===zt&&e.j===$l?e.a:(At("expected object of type SafeHtml, got '"+e+"' of type "+R(e)),"type_error:SafeHtml")}var $l={};function ir(e,n){var r=new zt;return r.a=e,r.h=n,r}ir("<!DOCTYPE html>",0);var ny=ir("",0);ir("<br>",0);var iy=function(e){var n=!1,r;return function(){return n||(r=e(),n=!0),r}}(function(){if(typeof document>"u")return!1;var e=document.createElement("div"),n=document.createElement("div");return n.appendChild(document.createElement("div")),e.appendChild(n),e.firstChild?(n=e.firstChild.firstChild,e.innerHTML=Us(ny),!n.parentElement):!1});function ry(e,n){if(e.src=Ul(n),v===null)e:{if(n=w.document,(n=n.querySelector&&n.querySelector("script[nonce]"))&&(n=n.nonce||n.getAttribute("nonce"))&&ae.test(n)){v=n;break e}v=""}n=v,n&&e.setAttribute("nonce",n)}function ei(e,n){n=n instanceof qe?n:Bl(n),e.assign(qt(n))}function Yt(e,n){this.a=L(e)?e:0,this.g=L(n)?n:0}Yt.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Yt.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Yt.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Yt.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this};function ja(e,n){this.width=e,this.height=n}i=ja.prototype,i.toString=function(){return"("+this.width+" x "+this.height+")"},i.aspectRatio=function(){return this.width/this.height},i.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},i.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},i.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};function Fs(e){return e?new $a(rr(e)):pl||(pl=new $a)}function Ba(e,n){var r=n||document;return r.querySelectorAll&&r.querySelector?r.querySelectorAll("."+e):Wl(document,e,n)}function Va(e,n){var r=n||document;if(r.getElementsByClassName)e=r.getElementsByClassName(e)[0];else{r=document;var o=n||r;e=o.querySelectorAll&&o.querySelector&&e?o.querySelector(e?"."+e:""):Wl(r,e,n)[0]||null}return e||null}function Wl(e,n,r){var o;if(e=r||e,e.querySelectorAll&&e.querySelector&&n)return e.querySelectorAll(n?"."+n:"");if(n&&e.getElementsByClassName){var c=e.getElementsByClassName(n);return c}if(c=e.getElementsByTagName("*"),n){var l={};for(r=o=0;e=c[r];r++){var h=e.className;typeof h.split=="function"&&rt(h.split(/\s+/),n)&&(l[o++]=e)}return l.length=o,l}return c}function sy(e,n){bl(n,function(r,o){r&&typeof r=="object"&&r.ma&&(r=r.ka()),o=="style"?e.style.cssText=r:o=="class"?e.className=r:o=="for"?e.htmlFor=r:Gl.hasOwnProperty(o)?e.setAttribute(Gl[o],r):o.lastIndexOf("aria-",0)==0||o.lastIndexOf("data-",0)==0?e.setAttribute(o,r):e[o]=r})}var Gl={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function js(e){return e.scrollingElement?e.scrollingElement:(xe||e.compatMode!="CSS1Compat")&&e.body||e.documentElement}function En(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function rr(e){return e.nodeType==9?e:e.ownerDocument||e.document}function Ha(e,n){if("textContent"in e)e.textContent=n;else if(e.nodeType==3)e.data=String(n);else if(e.firstChild&&e.firstChild.nodeType==3){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(n)}else{for(var r;r=e.firstChild;)e.removeChild(r);e.appendChild(rr(e).createTextNode(String(n)))}}function Kl(e,n){return n?oy(e,function(r){return!n||D(r.className)&&rt(r.className.split(/\s+/),n)}):null}function oy(e,n){for(var r=0;e;){if(n(e))return e;e=e.parentNode,r++}return null}function $a(e){this.a=e||w.document||document}$a.prototype.N=function(){return D(void 0)?this.a.getElementById(void 0):void 0};var Bs={Fc:!0},ql={Hc:!0},ay={Ec:!0},zl={Gc:!0};function Jt(){throw Error("Do not instantiate directly")}Jt.prototype.va=null,Jt.prototype.toString=function(){return this.content};function sr(e,n,r,o){if(e=e(n||ly,void 0,r),o=(o||Fs()).a.createElement("DIV"),e=cy(e),e.match(uy),e=ir(e,null),iy())for(;o.lastChild;)o.removeChild(o.lastChild);return o.innerHTML=Us(e),o.childNodes.length==1&&(e=o.firstChild,e.nodeType==1&&(o=e)),o}function cy(e){if(!te(e))return zn(String(e));if(e instanceof Jt){if(e.fa===Bs)return e.content;if(e.fa===zl)return zn(e.content)}return At("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}var uy=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,ly={};function dy(e){if(e!=null)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}function Vs(){Jt.call(this)}U(Vs,Jt),Vs.prototype.fa=Bs;function x(e){return e!=null&&e.fa===Bs?e:e instanceof zt?A(Us(e).toString(),e.g()):A(zn(String(String(e))),dy(e))}function Hs(){Jt.call(this)}U(Hs,Jt),Hs.prototype.fa=ql,Hs.prototype.va=1;function $s(e,n){this.content=String(e),this.va=n??null}U($s,Jt),$s.prototype.fa=zl;function z(e){return new $s(e,void 0)}var A=function(e){function n(r){this.content=r}return n.prototype=e.prototype,function(r,o){return r=new n(String(r)),o!==void 0&&(r.va=o),r}}(Vs),hy=function(e){function n(r){this.content=r}return n.prototype=e.prototype,function(r){return new n(String(r))}}(Hs);function fy(e){function n(){}var r={label:he("New password")};n.prototype=e,e=new n;for(var o in r)e[o]=r[o];return e}function he(e){return(e=String(e))?new $s(e,void 0):""}var Yl=function(e){function n(r){this.content=r}return n.prototype=e.prototype,function(r,o){return r=String(r),r?(r=new n(r),o!==void 0&&(r.va=o),r):""}}(Vs);function Ue(e){return e!=null&&e.fa===Bs?String(String(e.content).replace(wy,"").replace(Iy,"&lt;")).replace(vy,my):zn(String(e))}function Sn(e){return e!=null&&e.fa===ql?e=String(e).replace(Ga,Wa):e instanceof qe?e=String(qt(e).toString()).replace(Ga,Wa):(e=String(e),by.test(e)?e=e.replace(Ga,Wa):(At("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function Jl(e){return e!=null&&e.fa===ay?e=e.content:e==null?e="":e instanceof Qn?e instanceof Qn&&e.constructor===Qn&&e.g===Hl?e=e.a:(At("expected object of type SafeStyle, got '"+e+"' of type "+R(e)),e="type_error:SafeStyle"):(e=String(e),yy.test(e)||(At("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var py={"\0":"&#0;","	":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function my(e){return py[e]}var gy={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","\x07":"%07","\b":"%08","	":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","\x1B":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function Wa(e){return gy[e]}var vy=/[\x00\x22\x27\x3c\x3e]/g,Ga=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,yy=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,by=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,wy=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Iy=/</g;function Ka(){return z("Enter a valid phone number")}function Xl(){return z("Unable to send password reset code to specified email")}function Zl(){return z("Something went wrong. Please try again.")}function Ql(){return z("This email already exists without any means of sign-in. Please reset the password to recover.")}function ed(e){e=e||{};var n="";switch(e.code){case"invalid-argument":n+="Client specified an invalid argument.";break;case"invalid-configuration":n+="Client specified an invalid project configuration.";break;case"failed-precondition":n+="Request can not be executed in the current system state.";break;case"out-of-range":n+="Client specified an invalid range.";break;case"unauthenticated":n+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":n+="Client does not have sufficient permission.";break;case"not-found":n+="Specified resource is not found.";break;case"aborted":n+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":n+="The resource that a client tried to create already exists.";break;case"resource-exhausted":n+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":n+="Request cancelled by the client.";break;case"data-loss":n+="Unrecoverable data loss or data corruption.";break;case"unknown":n+="Unknown server error.";break;case"internal":n+="Internal server error.";break;case"not-implemented":n+="API method not implemented by the server.";break;case"unavailable":n+="Service unavailable.";break;case"deadline-exceeded":n+="Request deadline exceeded.";break;case"auth/user-disabled":n+="The user account has been disabled by an administrator.";break;case"auth/timeout":n+="The operation has timed out.";break;case"auth/too-many-requests":n+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":n+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":n+="A network error has occurred. Try again later.";break;case"restart-process":n+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":n+="No sign-in provider is available for the given email, please try with a different email."}return z(n)}function td(){return z("Please login again to perform this operation")}function or(e,n,r){var o=Error.call(this);if(this.message=o.message,"stack"in o&&(this.stack=o.stack),this.code=_y+e,!(e=n)){switch(e="",this.code){case"firebaseui/merge-conflict":e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";break;default:e+=Zl()}e=z(e).toString()}this.message=e||"",this.credential=r||null}p(or,Error),or.prototype.toJSON=function(){return{code:this.code,message:this.message}};var _y="firebaseui/";function kn(){this.T=this.T,this.C=this.C}var Ey=0;kn.prototype.T=!1,kn.prototype.m=function(){!this.T&&(this.T=!0,this.o(),Ey!=0)&&(this[q]||(this[q]=++le))};function ar(e,n){e.T?L(void 0)?n.call(void 0):n():(e.C||(e.C=[]),e.C.push(L(void 0)?J(n,void 0):n))}kn.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function cr(e){e&&typeof e.m=="function"&&e.m()}var Sy=Object.freeze||function(e){return e},nd=!de||9<=Number(nr),ky=de&&!In("9"),Ty=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var e=!1,n=Object.defineProperty({},"passive",{get:function(){e=!0}});try{w.addEventListener("test",I,n),w.removeEventListener("test",I,n)}catch{}return e}();function Rt(e,n){this.type=e,this.g=this.target=n,this.h=!1,this.qb=!0}Rt.prototype.stopPropagation=function(){this.h=!0},Rt.prototype.preventDefault=function(){this.qb=!1};function Fe(e,n){if(Rt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var r=this.type=e.type,o=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=n,n=e.relatedTarget){if(ct){e:{try{La(n.nodeName);var c=!0;break e}catch{}c=!1}c||(n=null)}}else r=="mouseover"?n=e.fromElement:r=="mouseout"&&(n=e.toElement);this.relatedTarget=n,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||(r=="keypress"?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=D(e.pointerType)?e.pointerType:Cy[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}U(Fe,Rt);var Cy=Sy({2:"touch",3:"pen",4:"mouse"});Fe.prototype.stopPropagation=function(){Fe.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},Fe.prototype.preventDefault=function(){Fe.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,ky)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch{}};var ur="closure_listenable_"+(1e6*Math.random()|0),Ay=0;function Ry(e,n,r,o,c){this.listener=e,this.proxy=null,this.src=n,this.type=r,this.capture=!!o,this.La=c,this.key=++Ay,this.sa=this.Ia=!1}function Ws(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function Gs(e){this.src=e,this.a={},this.g=0}Gs.prototype.add=function(e,n,r,o,c){var l=e.toString();e=this.a[l],e||(e=this.a[l]=[],this.g++);var h=za(e,n,o,c);return-1<h?(n=e[h],r||(n.Ia=!1)):(n=new Ry(n,this.src,l,!!o,c),n.Ia=r,e.push(n)),n};function qa(e,n){var r=n.type;r in e.a&&gl(e.a[r],n)&&(Ws(n),e.a[r].length==0&&(delete e.a[r],e.g--))}function za(e,n,r,o){for(var c=0;c<e.length;++c){var l=e[c];if(!l.sa&&l.listener==n&&l.capture==!!r&&l.La==o)return c}return-1}var Ya="closure_lm_"+(1e6*Math.random()|0),Ja={};function ut(e,n,r,o,c){if(o&&o.once)return lr(e,n,r,o,c);if(j(n)){for(var l=0;l<n.length;l++)ut(e,n[l],r,o,c);return null}return r=Za(r),e&&e[ur]?e.J.add(String(n),r,!1,te(o)?!!o.capture:!!o,c):id(e,n,r,!1,o,c)}function id(e,n,r,o,c,l){if(!n)throw Error("Invalid event type");var h=te(c)?!!c.capture:!!c,g=Ks(e);if(g||(e[Ya]=g=new Gs(e)),r=g.add(n,r,o,h,l),r.proxy)return r;if(o=Py(),r.proxy=o,o.src=e,o.listener=r,e.addEventListener)Ty||(c=h),c===void 0&&(c=!1),e.addEventListener(n.toString(),o,c);else if(e.attachEvent)e.attachEvent(rd(n.toString()),o);else if(e.addListener&&e.removeListener)e.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return r}function Py(){var e=Oy,n=nd?function(r){return e.call(n.src,n.listener,r)}:function(r){if(r=e.call(n.src,n.listener,r),!r)return r};return n}function lr(e,n,r,o,c){if(j(n)){for(var l=0;l<n.length;l++)lr(e,n[l],r,o,c);return null}return r=Za(r),e&&e[ur]?e.J.add(String(n),r,!0,te(o)?!!o.capture:!!o,c):id(e,n,r,!0,o,c)}function Tn(e,n,r,o,c){if(j(n))for(var l=0;l<n.length;l++)Tn(e,n[l],r,o,c);else o=te(o)?!!o.capture:!!o,r=Za(r),e&&e[ur]?(e=e.J,n=String(n).toString(),n in e.a&&(l=e.a[n],r=za(l,r,o,c),-1<r&&(Ws(l[r]),Ps(l,r),l.length==0&&(delete e.a[n],e.g--)))):e&&(e=Ks(e))&&(n=e.a[n.toString()],e=-1,n&&(e=za(n,r,o,c)),(r=-1<e?n[e]:null)&&Xt(r))}function Xt(e){if(typeof e!="number"&&e&&!e.sa){var n=e.src;if(n&&n[ur])qa(n.J,e);else{var r=e.type,o=e.proxy;n.removeEventListener?n.removeEventListener(r,o,e.capture):n.detachEvent?n.detachEvent(rd(r),o):n.addListener&&n.removeListener&&n.removeListener(o),(r=Ks(n))?(qa(r,e),r.g==0&&(r.src=null,n[Ya]=null)):Ws(e)}}}function rd(e){return e in Ja?Ja[e]:Ja[e]="on"+e}function sd(e,n,r,o){var c=!0;if((e=Ks(e))&&(n=e.a[n.toString()]))for(n=n.concat(),e=0;e<n.length;e++){var l=n[e];l&&l.capture==r&&!l.sa&&(l=od(l,o),c=c&&l!==!1)}return c}function od(e,n){var r=e.listener,o=e.La||e.src;return e.Ia&&Xt(e),r.call(o,n)}function Oy(e,n){if(e.sa)return!0;if(!nd){if(!n)e:{n=["window","event"];for(var r=w,o=0;o<n.length;o++)if(r=r[n[o]],r==null){n=null;break e}n=r}if(o=n,n=new Fe(o,this),r=!0,!(0>o.keyCode||o.returnValue!=null)){e:{var c=!1;if(o.keyCode==0)try{o.keyCode=-1;break e}catch{c=!0}(c||o.returnValue==null)&&(o.returnValue=!0)}for(o=[],c=n.g;c;c=c.parentNode)o.push(c);for(e=e.type,c=o.length-1;!n.h&&0<=c;c--){n.g=o[c];var l=sd(o[c],e,!0,n);r=r&&l}for(c=0;!n.h&&c<o.length;c++)n.g=o[c],l=sd(o[c],e,!1,n),r=r&&l}return r}return od(e,new Fe(n,this))}function Ks(e){return e=e[Ya],e instanceof Gs?e:null}var Xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Za(e){return K(e)?e:(e[Xa]||(e[Xa]=function(n){return e.handleEvent(n)}),e[Xa])}function _e(){kn.call(this),this.J=new Gs(this),this.wb=this,this.Ha=null}U(_e,kn),_e.prototype[ur]=!0,_e.prototype.Za=function(e){this.Ha=e},_e.prototype.removeEventListener=function(e,n,r,o){Tn(this,e,n,r,o)};function Zt(e,n){var r,o=e.Ha;if(o)for(r=[];o;o=o.Ha)r.push(o);if(e=e.wb,o=n.type||n,D(n))n=new Rt(n,e);else if(n instanceof Rt)n.target=n.target||e;else{var c=n;n=new Rt(o,e),Os(n,c)}if(c=!0,r)for(var l=r.length-1;!n.h&&0<=l;l--){var h=n.g=r[l];c=qs(h,o,!0,n)&&c}if(n.h||(h=n.g=e,c=qs(h,o,!0,n)&&c,n.h||(c=qs(h,o,!1,n)&&c)),r)for(l=0;!n.h&&l<r.length;l++)h=n.g=r[l],c=qs(h,o,!1,n)&&c;return c}_e.prototype.o=function(){if(_e.K.o.call(this),this.J){var e=this.J,n;for(n in e.a){for(var r=e.a[n],o=0;o<r.length;o++)Ws(r[o]);delete e.a[n],e.g--}}this.Ha=null};function qs(e,n,r,o){if(n=e.J.a[String(n)],!n)return!0;n=n.concat();for(var c=!0,l=0;l<n.length;++l){var h=n[l];if(h&&!h.sa&&h.capture==r){var g=h.listener,b=h.La||h.src;h.Ia&&qa(e.J,h),c=g.call(b,o)!==!1&&c}}return c&&o.qb!=0}var ze={},ad=0;function cd(e,n){if(!e)throw Error("Event target element must be provided!");if(e=Qa(e),ze[e]&&ze[e].length)for(var r=0;r<ze[e].length;r++)Zt(ze[e][r],n)}function Ny(e){var n=Qa(e.N());ze[n]&&ze[n].length&&(Av(ze[n],function(r){return r==e}),ze[n].length||delete ze[n])}function Qa(e){return typeof e.a>"u"&&(e.a=ad,ad++),e.a}function zs(e){if(!e)throw Error("Event target element must be provided!");_e.call(this),this.a=e}p(zs,_e),zs.prototype.N=function(){return this.a},zs.prototype.register=function(){var e=Qa(this.N());ze[e]?rt(ze[e],this)||ze[e].push(this):ze[e]=[this]};function ud(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch{return!1}}function ec(e,n){this.h=e,this.j=n,this.g=0,this.a=null}ec.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};function ld(e,n){e.j(n),100>e.g&&(e.g++,n.next=e.a,e.a=n)}function dd(){this.g=this.a=null}var hd=new ec(function(){return new tc},function(e){e.reset()});dd.prototype.add=function(e,n){var r=hd.get();r.set(e,n),this.g?this.g.next=r:this.a=r,this.g=r};function Dy(){var e=pd,n=null;return e.a&&(n=e.a,e.a=e.a.next,e.a||(e.g=null),n.next=null),n}function tc(){this.next=this.g=this.a=null}tc.prototype.set=function(e,n){this.a=e,this.g=n,this.next=null},tc.prototype.reset=function(){this.next=this.g=this.a=null};function fd(e){w.setTimeout(function(){throw e},0)}var nc;function Ly(){var e=w.MessageChannel;if(typeof e>"u"&&typeof window<"u"&&window.postMessage&&window.addEventListener&&!V("Presto")&&(e=function(){var c=document.createElement("IFRAME");c.style.display="none",c.src="",document.documentElement.appendChild(c);var l=c.contentWindow;c=l.document,c.open(),c.write(""),c.close();var h="callImmediate"+Math.random(),g=l.location.protocol=="file:"?"*":l.location.protocol+"//"+l.location.host;c=J(function(b){(g=="*"||b.origin==g)&&b.data==h&&this.port1.onmessage()},this),l.addEventListener("message",c,!1),this.port1={},this.port2={postMessage:function(){l.postMessage(h,g)}}}),typeof e<"u"&&!V("Trident")&&!V("MSIE")){var n=new e,r={},o=r;return n.port1.onmessage=function(){if(L(r.next)){r=r.next;var c=r.gb;r.gb=null,c()}},function(c){o.next={gb:c},o=o.next,n.port2.postMessage(0)}}return typeof document<"u"&&"onreadystatechange"in document.createElement("SCRIPT")?function(c){var l=document.createElement("SCRIPT");l.onreadystatechange=function(){l.onreadystatechange=null,l.parentNode.removeChild(l),l=null,c(),c=null},document.documentElement.appendChild(l)}:function(c){w.setTimeout(c,0)}}function ic(e,n){Ys||My(),rc||(Ys(),rc=!0),pd.add(e,n)}var Ys;function My(){if(w.Promise&&w.Promise.resolve){var e=w.Promise.resolve(void 0);Ys=function(){e.then(md)}}else Ys=function(){var n=md;!K(w.setImmediate)||w.Window&&w.Window.prototype&&!V("Edge")&&w.Window.prototype.setImmediate==w.setImmediate?(nc||(nc=Ly()),nc(n)):w.setImmediate(n)}}var rc=!1,pd=new dd;function md(){for(var e;e=Dy();){try{e.a.call(e.g)}catch(n){fd(n)}ld(hd,e)}rc=!1}function Ee(e){if(this.a=Cn,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=I)try{var n=this;e.call(void 0,function(r){An(n,dr,r)},function(r){if(!(r instanceof ni))try{throw r instanceof Error?r:Error("Promise rejected.")}catch{}An(n,Pt,r)})}catch(r){An(this,Pt,r)}}var Cn=0,dr=2,Pt=3;function gd(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}gd.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var vd=new ec(function(){return new gd},function(e){e.reset()});function sc(e,n,r){var o=vd.get();return o.s=e,o.g=n,o.j=r,o}function fe(e){if(e instanceof Ee)return e;var n=new Ee(I);return An(n,dr,e),n}function ti(e){return new Ee(function(n,r){r(e)})}Ee.prototype.then=function(e,n,r){return bd(this,K(e)?e:null,K(n)?n:null,r)},Ee.prototype.$goog_Thenable=!0,i=Ee.prototype,i.fc=function(e,n){return e=sc(e,e,n),e.h=!0,oc(this,e),this},i.Ca=function(e,n){return bd(this,null,e,n)},i.cancel=function(e){this.a==Cn&&ic(function(){var n=new ni(e);yd(this,n)},this)};function yd(e,n){if(e.a==Cn)if(e.h){var r=e.h;if(r.g){for(var o=0,c=null,l=null,h=r.g;h&&(h.h||(o++,h.a==e&&(c=h),!(c&&1<o)));h=h.next)c||(l=h);c&&(r.a==Cn&&o==1?yd(r,n):(l?(o=l,o.next==r.j&&(r.j=o),o.next=o.next.next):Id(r),_d(r,c,Pt,n)))}e.h=null}else An(e,Pt,n)}function oc(e,n){e.g||e.a!=dr&&e.a!=Pt||wd(e),e.j?e.j.next=n:e.g=n,e.j=n}function bd(e,n,r,o){var c=sc(null,null,null);return c.a=new Ee(function(l,h){c.s=n?function(g){try{var b=n.call(o,g);l(b)}catch(T){h(T)}}:l,c.g=r?function(g){try{var b=r.call(o,g);!L(b)&&g instanceof ni?h(g):l(b)}catch(T){h(T)}}:h}),c.a.h=e,oc(e,c),c.a}i.hc=function(e){this.a=Cn,An(this,dr,e)},i.ic=function(e){this.a=Cn,An(this,Pt,e)};function An(e,n,r){if(e.a==Cn){e===r&&(n=Pt,r=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var o=r,c=e.hc,l=e.ic;if(o instanceof Ee){oc(o,sc(c||I,l||null,e));var h=!0}else if(ud(o))o.then(c,l,e),h=!0;else{if(te(o))try{var g=o.then;if(K(g)){xy(o,g,c,l,e),h=!0;break e}}catch(b){l.call(e,b),h=!0;break e}h=!1}}h||(e.A=r,e.a=n,e.h=null,wd(e),n!=Pt||r instanceof ni||Uy(e,r))}}function xy(e,n,r,o,c){function l(b){g||(g=!0,o.call(c,b))}function h(b){g||(g=!0,r.call(c,b))}var g=!1;try{n.call(e,h,l)}catch(b){l(b)}}function wd(e){e.i||(e.i=!0,ic(e.Hb,e))}function Id(e){var n=null;return e.g&&(n=e.g,e.g=n.next,n.next=null),e.g||(e.j=null),n}i.Hb=function(){for(var e;e=Id(this);)_d(this,e,this.a,this.A);this.i=!1};function _d(e,n,r,o){if(r==Pt&&n.g&&!n.h)for(;e&&e.s;e=e.h)e.s=!1;if(n.a)n.a.h=null,Ed(n,r,o);else try{n.h?n.s.call(n.j):Ed(n,r,o)}catch(c){Sd.call(null,c)}ld(vd,n)}function Ed(e,n,r){n==dr?e.s.call(e.j,r):e.g&&e.g.call(e.j,r)}function Uy(e,n){e.s=!0,ic(function(){e.s&&Sd.call(null,n)})}var Sd=fd;function ni(e){Ge.call(this,e)}U(ni,Ge),ni.prototype.name="cancel";function kd(e,n,r){n||(n={}),r=r||window;var o=e instanceof qe?e:xs(typeof e.href<"u"?e.href:String(e));e=n.target||e.target;var c=[];for(l in n)switch(l){case"width":case"height":case"top":case"left":c.push(l+"="+n[l]);break;case"target":case"noopener":case"noreferrer":break;default:c.push(l+"="+(n[l]?1:0))}var l=c.join(",");return(V("iPhone")&&!V("iPod")&&!V("iPad")||V("iPad")||V("iPod"))&&r.navigator&&r.navigator.standalone&&e&&e!="_self"?(l=r.document.createElement("A"),o=o instanceof qe?o:Bl(o),l.href=qt(o),l.setAttribute("target",e),n.noreferrer&&l.setAttribute("rel","noreferrer"),n=document.createEvent("MouseEvent"),n.initMouseEvent("click",!0,!0,r,1),l.dispatchEvent(n),r={}):n.noreferrer?(r=r.open("",e,l),n=qt(o).toString(),r&&(Zv&&n.indexOf(";")!=-1&&(n="'"+n.replace(/'/g,"%27")+"'"),r.opener=null,n=ir('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+zn(n)+'">',null),r.document.write(Us(n)),r.document.close())):(r=r.open(qt(o).toString(),e,l))&&n.noopener&&(r.opener=null),r}function Td(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch{}return!1}function ii(e){kd(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function Js(e,n){if(e=te(e)&&e.nodeType==1?e:document.querySelector(String(e)),e==null)throw Error(n||"Cannot find element.");return e}function Ot(){return window.location.href}function Fy(){var e=null;return new Ee(function(n){w.document.readyState=="complete"?n():(e=function(){n()},lr(window,"load",e))}).Ca(function(n){throw Tn(window,"load",e),n})}function jy(){for(var e=32,n=[];0<e;)n.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return n.join("")}function By(e,n,r){return r=r===void 0?{}:r,Object.keys(e).filter(function(o){return n.includes(o)}).reduce(function(o,c){return o[c]=e[c],o},r)}function Qt(e){var n=$y;this.s=[],this.T=n,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}Qt.prototype.cancel=function(e){if(this.a)this.h instanceof Qt&&this.h.cancel();else{if(this.g){var n=this.g;delete this.g,e?n.cancel(e):(n.C--,0>=n.C&&n.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new fr,Xs(this),hr(this,!1,e))}},Qt.prototype.L=function(e,n){this.A=!1,hr(this,e,n)};function hr(e,n,r){e.a=!0,e.h=r,e.j=!n,Rd(e)}function Xs(e){if(e.a){if(!e.J)throw new Zs;e.J=!1}}Qt.prototype.callback=function(e){Xs(this),hr(this,!0,e)};function Cd(e,n,r){e.s.push([n,r,void 0]),e.a&&Rd(e)}Qt.prototype.then=function(e,n,r){var o,c,l=new Ee(function(h,g){o=h,c=g});return Cd(this,o,function(h){h instanceof fr?l.cancel():c(h)}),l.then(e,n,r)},Qt.prototype.$goog_Thenable=!0;function Ad(e){return Cv(e.s,function(n){return K(n[1])})}function Rd(e){if(e.i&&e.a&&Ad(e)){var n=e.i,r=Qs[n];r&&(w.clearTimeout(r.a),delete Qs[n]),e.i=0}e.g&&(e.g.C--,delete e.g),n=e.h;for(var o=r=!1;e.s.length&&!e.A;){var c=e.s.shift(),l=c[0],h=c[1];if(c=c[2],l=e.j?h:l)try{var g=l.call(c||e.O,n);L(g)&&(e.j=e.j&&(g==n||g instanceof Error),e.h=n=g),(ud(n)||typeof w.Promise=="function"&&n instanceof w.Promise)&&(o=!0,e.A=!0)}catch(b){n=b,e.j=!0,Ad(e)||(r=!0)}}e.h=n,o&&(g=J(e.L,e,!0),o=J(e.L,e,!1),n instanceof Qt?(Cd(n,g,o),n.l=!0):n.then(g,o)),r&&(n=new Pd(n),Qs[n.a]=n,e.i=n.a)}function Zs(){Ge.call(this)}U(Zs,Ge),Zs.prototype.message="Deferred has already fired",Zs.prototype.name="AlreadyCalledError";function fr(){Ge.call(this)}U(fr,Ge),fr.prototype.message="Deferred was canceled",fr.prototype.name="CanceledError";function Pd(e){this.a=w.setTimeout(J(this.h,this),0),this.g=e}Pd.prototype.h=function(){throw delete Qs[this.a],this.g};var Qs={};function Vy(e){var n={},r=n.document||document,o=Ul(e).toString(),c=document.createElement("SCRIPT"),l={rb:c,sb:void 0},h=new Qt(l),g=null,b=n.timeout!=null?n.timeout:5e3;return 0<b&&(g=window.setTimeout(function(){eo(c,!0);var T=new ac(Gy,"Timeout reached for loading script "+o);Xs(h),hr(h,!1,T)},b),l.sb=g),c.onload=c.onreadystatechange=function(){c.readyState&&c.readyState!="loaded"&&c.readyState!="complete"||(eo(c,n.xc||!1,g),h.callback(null))},c.onerror=function(){eo(c,!0,g);var T=new ac(Wy,"Error while loading script "+o);Xs(h),hr(h,!1,T)},l=n.attributes||{},Os(l,{type:"text/javascript",charset:"UTF-8"}),sy(c,l),ry(c,e),Hy(r).appendChild(c),h}function Hy(e){var n=(e||document).getElementsByTagName("HEAD");return n&&n.length!=0?n[0]:e.documentElement}function $y(){if(this&&this.rb){var e=this.rb;e&&e.tagName=="SCRIPT"&&eo(e,!0,this.sb)}}function eo(e,n,r){r!=null&&w.clearTimeout(r),e.onload=I,e.onerror=I,e.onreadystatechange=I,n&&window.setTimeout(function(){En(e)},0)}var Wy=0,Gy=1;function ac(e,n){var r="Jsloader error (code #"+e+")";n&&(r+=": "+n),Ge.call(this,r),this.code=e}U(ac,Ge);function pr(){return w.google&&w.google.accounts&&w.google.accounts.id||null}function cc(e){this.a=e||pr(),this.h=!1,this.g=null}cc.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())};function Od(e,n,r){if(e.a&&n)return function(){return e.h=!0,new Ee(function(c){e.g=c,e.a.initialize({client_id:n,callback:c,auto_select:!r}),e.a.prompt()})}();if(n){var o=uc.Xa().load().then(function(){return e.a=pr(),Od(e,n,r)}).Ca(function(){return null});return fe(o)}return fe(null)}S(cc);var Ky=new Zn(xl,"https://accounts.google.com/gsi/client");function uc(){this.a=null}uc.prototype.load=function(){var e=this;if(this.a)return this.a;var n=ty();return pr()?fe():this.a=Fy().then(function(){if(!pr())return new Ee(function(r,o){var c=setTimeout(function(){e.a=null,o(Error("Network error!"))},1e4);w.onGoogleLibraryLoad=function(){clearTimeout(c),r()},fe(Vy(n)).then(function(){pr()&&r()}).Ca(function(l){clearTimeout(c),e.a=null,o(l)})})})},S(uc);function lc(e,n){this.a=e,this.g=n||function(r){throw r}}lc.prototype.confirm=function(e){return fe(this.a.confirm(e)).Ca(this.g)};function dc(e,n,r){this.reset(e,n,r,void 0,void 0)}dc.prototype.a=null,dc.prototype.reset=function(e,n,r,o,c){this.h=o||gn(),this.j=e,this.s=n,this.g=r,delete this.a};function hc(e){this.s=e,this.a=this.h=this.j=this.g=null}function to(e,n){this.name=e,this.value=n}to.prototype.toString=function(){return this.name};var Nd=new to("SEVERE",1e3),Dd=new to("WARNING",900),Ld=new to("CONFIG",700);function Md(e){return e.j?e.j:e.g?Md(e.g):(At("Root logger has no level set."),null)}hc.prototype.log=function(e,n,r){if(e.value>=Md(this).value)for(K(n)&&(n=n()),e=new dc(e,String(n),this.s),r&&(e.a=r),r=this;r;){var o=r,c=e;if(o.a)for(var l=0;n=o.a[l];l++)n(c);r=r.g}};var fc={},mr=null;function xd(){mr||(mr=new hc(""),fc[""]=mr,mr.j=Ld)}function Ud(e){xd();var n;if(!(n=fc[e])){n=new hc(e);var r=e.lastIndexOf("."),o=e.substr(r+1);r=Ud(e.substr(0,r)),r.h||(r.h={}),r.h[o]=n,n.g=r,fc[e]=n}return n}function no(){this.a=gn()}var pc=null;no.prototype.set=function(e){this.a=e},no.prototype.reset=function(){this.set(gn())},no.prototype.get=function(){return this.a};function gr(e){this.j=e||"",pc||(pc=new no),this.s=pc}gr.prototype.a=!0,gr.prototype.g=!0,gr.prototype.h=!1;function Rn(e){return 10>e?"0"+e:String(e)}function qy(e,n){e=(e.h-n)/1e3,n=e.toFixed(3);var r=0;if(1>e)r=2;else for(;100>e;)r++,e*=10;for(;0<r--;)n=" "+n;return n}function Fd(e){gr.call(this,e)}U(Fd,gr);function zy(e,n){var r=[];if(r.push(e.j," "),e.g){var o=new Date(n.h);r.push("[",Rn(o.getFullYear()-2e3)+Rn(o.getMonth()+1)+Rn(o.getDate())+" "+Rn(o.getHours())+":"+Rn(o.getMinutes())+":"+Rn(o.getSeconds())+"."+Rn(Math.floor(o.getMilliseconds()/10)),"] ")}return r.push("[",qy(n,e.s.get()),"s] "),r.push("[",n.g,"] "),r.push(n.s),e.h&&(n=n.a)&&r.push(`
`,n instanceof Error?n.message:n.toString()),e.a&&r.push(`
`),r.join("")}function jd(){this.s=J(this.h,this),this.a=new Fd,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}jd.prototype.h=function(e){function n(l){if(l){if(l.value>=Nd.value)return"error";if(l.value>=Dd.value)return"warn";if(l.value>=Ld.value)return"log"}return"debug"}if(!this.j[e.g]){var r=zy(this.a,e),o=Yy;if(o){var c=n(e.j);Jy(o,c,r,e.a)}}};var Yy=w.console;function Jy(e,n,r,o){e[n]?e[n](r,o||""):e.log(r,o||"")}function Ye(e,n){var r=mc;r&&r.log(Nd,e,n)}var mc;mc=Ud("firebaseui");var gc=new jd;if(gc.g!=1){var io;xd(),io=mr;var Xy=gc.s;io.a||(io.a=[]),io.a.push(Xy),gc.g=!0}function en(e){var n=mc;n&&n.log(Dd,e,void 0)}function Bd(){this.a=(typeof document>"u"?null:document)||{cookie:""}}i=Bd.prototype,i.set=function(e,n,r,o,c,l){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(n))throw Error('Invalid cookie value "'+n+'"');L(r)||(r=-1),c=c?";domain="+c:"",o=o?";path="+o:"",l=l?";secure":"",r=0>r?"":r==0?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(gn()+1e3*r).toUTCString(),this.a.cookie=e+"="+n+c+o+r+l},i.get=function(e,n){for(var r=e+"=",o=(this.a.cookie||"").split(";"),c=0,l;c<o.length;c++){if(l=Ke(o[c]),l.lastIndexOf(r,0)==0)return l.substr(r.length);if(l==e)return""}return n},i.ja=function(){return vc(this).keys},i.la=function(){return vc(this).values},i.clear=function(){for(var e=vc(this).keys,n=e.length-1;0<=n;n--){var r=e[n];this.get(r),this.set(r,"",0,void 0,void 0)}};function vc(e){e=(e.a.cookie||"").split(";");for(var n=[],r=[],o,c,l=0;l<e.length;l++)c=Ke(e[l]),o=c.indexOf("="),o==-1?(n.push(""),r.push(c)):(n.push(c.substring(0,o)),r.push(c.substring(o+1)));return{keys:n,values:r}}var ro=new Bd;function Vd(){}function ri(e,n,r,o){this.h=typeof e<"u"&&e!==null?e:-1,this.g=n||null,this.a=r||null,this.j=!!o}p(ri,Vd),ri.prototype.set=function(e,n){ro.set(e,n,this.h,this.g,this.a,this.j)},ri.prototype.get=function(e){return ro.get(e)||null},ri.prototype.ra=function(e){var n=this.g,r=this.a;ro.get(e),ro.set(e,"",0,n,r)};function yc(e,n){this.g=e,this.a=n||null}function Hd(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function $d(e){if(e&&e.email){var n=e.credential&&O.auth.AuthCredential.fromJSON(e.credential);return new yc(e.email,n)}return null}function Wd(e){this.a=e||null}function Gd(e){for(var n=[],r=0,o=0;o<e.length;o++){var c=e.charCodeAt(o);255<c&&(n[r++]=c&255,c>>=8),n[r++]=c}return n}function Zy(e){return Tv(e,function(n){return n=n.toString(16),1<n.length?n:"0"+n}).join("")}function so(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(si*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var n=Array(4);for(e=this.g;e<si*(this.j+1);e++){if(n[0]=this.a[e-1][0],n[1]=this.a[e-1][1],n[2]=this.a[e-1][2],n[3]=this.a[e-1][3],e%this.g==0){var r=n,o=r[0];r[0]=r[1],r[1]=r[2],r[2]=r[3],r[3]=o,Jd(n),n[0]^=ao[e/this.g][0],n[1]^=ao[e/this.g][1],n[2]^=ao[e/this.g][2],n[3]^=ao[e/this.g][3]}else 6<this.g&&e%this.g==4&&Jd(n);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^n[0],this.a[e][1]=this.a[e-this.g][1]^n[1],this.a[e][2]=this.a[e-this.g][2]^n[2],this.a[e][3]=this.a[e-this.g][3]^n[3]}}so.prototype.A=16;var si=so.prototype.A/4;function Kd(e,n){for(var r,o=0;o<si;o++)for(var c=0;4>c;c++)r=4*c+o,r=n[r],e.h[o][c]=r}function qd(e){for(var n=[],r=0;r<si;r++)for(var o=0;4>o;o++)n[4*o+r]=e.h[r][o];return n}function oi(e,n){for(var r=0;4>r;r++)for(var o=0;4>o;o++)e.h[r][o]^=e.a[4*n+o][r]}function oo(e,n){for(var r=0;4>r;r++)for(var o=0;4>o;o++)e.h[r][o]=n[e.h[r][o]]}function zd(e){for(var n=1;4>n;n++)for(var r=0;4>r;r++)e.s[n][r]=e.h[n][r];for(n=1;4>n;n++)for(r=0;4>r;r++)e.h[n][r]=e.s[n][(r+n)%si]}function Yd(e){for(var n=1;4>n;n++)for(var r=0;4>r;r++)e.s[n][(r+n)%si]=e.h[n][r];for(n=1;4>n;n++)for(r=0;4>r;r++)e.h[n][r]=e.s[n][r]}function Jd(e){e[0]=ai[e[0]],e[1]=ai[e[1]],e[2]=ai[e[2]],e[3]=ai[e[3]]}var ai=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],Xd=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],ao=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],co=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],uo=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],lo=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],ho=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],fo=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],po=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Zd(e,n){e=new so(eh(e)),n=Gd(n);for(var r=n.splice(0,16),o="",c;r.length;){c=16-r.length;for(var l=0;l<c;l++)r.push(0);for(c=e,Kd(c,r),oi(c,0),r=1;r<c.j;++r){oo(c,ai),zd(c),l=c.h;for(var h=c.s[0],g=0;4>g;g++)h[0]=l[0][g],h[1]=l[1][g],h[2]=l[2][g],h[3]=l[3][g],l[0][g]=co[h[0]]^uo[h[1]]^h[2]^h[3],l[1][g]=h[0]^co[h[1]]^uo[h[2]]^h[3],l[2][g]=h[0]^h[1]^co[h[2]]^uo[h[3]],l[3][g]=uo[h[0]]^h[1]^h[2]^co[h[3]];oi(c,r)}oo(c,ai),zd(c),oi(c,c.j),o+=Zy(qd(c)),r=n.splice(0,16)}return o}function Qd(e,n){e=new so(eh(e));for(var r=[],o=0;o<n.length;o+=2)r.push(parseInt(n.substring(o,o+2),16));var c=r.splice(0,16);for(n="";c.length;){for(o=e,Kd(o,c),oi(o,o.j),c=1;c<o.j;++c){Yd(o),oo(o,Xd),oi(o,o.j-c);for(var l=o.h,h=o.s[0],g=0;4>g;g++)h[0]=l[0][g],h[1]=l[1][g],h[2]=l[2][g],h[3]=l[3][g],l[0][g]=po[h[0]]^ho[h[1]]^fo[h[2]]^lo[h[3]],l[1][g]=lo[h[0]]^po[h[1]]^ho[h[2]]^fo[h[3]],l[2][g]=fo[h[0]]^lo[h[1]]^po[h[2]]^ho[h[3]],l[3][g]=ho[h[0]]^fo[h[1]]^lo[h[2]]^po[h[3]]}if(Yd(o),oo(o,Xd),oi(o,0),o=qd(o),8192>=o.length)o=String.fromCharCode.apply(null,o);else{for(c="",l=0;l<o.length;l+=8192)c+=String.fromCharCode.apply(null,Pv(o,l,l+8192));o=c}n+=o,c=r.splice(0,16)}return n.replace(/(\x00)+$/,"")}function eh(e){e=Gd(e.substring(0,32));for(var n=32-e.length,r=0;r<n;r++)e.push(0);return e}function th(e){var n=[];return bc(new Qy,e,n),n.join("")}function Qy(){}function bc(e,n,r){if(n==null)r.push("null");else{if(typeof n=="object"){if(j(n)){var o=n;n=o.length,r.push("[");for(var c="",l=0;l<n;l++)r.push(c),bc(e,o[l],r),c=",";r.push("]");return}if(n instanceof String||n instanceof Number||n instanceof Boolean)n=n.valueOf();else{r.push("{"),c="";for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(l=n[o],typeof l!="function"&&(r.push(c),ih(o,r),r.push(":"),bc(e,l,r),c=","));r.push("}");return}}switch(typeof n){case"string":ih(n,r);break;case"number":r.push(isFinite(n)&&!isNaN(n)?String(n):"null");break;case"boolean":r.push(String(n));break;case"function":r.push("null");break;default:throw Error("Unknown type: "+typeof n)}}}var nh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\u000b"},e0=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ih(e,n){n.push('"',e.replace(e0,function(r){var o=nh[r];return o||(o="\\u"+(r.charCodeAt(0)|65536).toString(16).substr(1),nh[r]=o),o}),'"')}function vr(e){this.a=e}vr.prototype.set=function(e,n){L(n)?this.a.set(e,th(n)):this.a.ra(e)},vr.prototype.get=function(e){try{var n=this.a.get(e)}catch{return}if(n!==null)try{return JSON.parse(n)}catch{throw"Storage: Invalid value was encountered"}};function mo(){}U(mo,Vd),mo.prototype.clear=function(){var e=jv(this.ha(!0)),n=this;Zi(e,function(r){n.ra(r)})};function go(e){this.a=e}U(go,mo);function vo(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch{return!1}}i=go.prototype,i.set=function(e,n){try{this.a.setItem(e,n)}catch{throw this.a.length==0?"Storage mechanism: Storage disabled":"Storage mechanism: Quota exceeded"}},i.get=function(e){if(e=this.a.getItem(e),!D(e)&&e!==null)throw"Storage mechanism: Invalid value was encountered";return e},i.ra=function(e){this.a.removeItem(e)},i.ha=function(e){var n=0,r=this.a,o=new vn;return o.next=function(){if(n>=r.length)throw Yn;var c=r.key(n++);if(e)return c;if(c=r.getItem(c),!D(c))throw"Storage mechanism: Invalid value was encountered";return c},o},i.clear=function(){this.a.clear()},i.key=function(e){return this.a.key(e)};function wc(){var e=null;try{e=window.localStorage||null}catch{}this.a=e}U(wc,go);function Ic(){var e=null;try{e=window.sessionStorage||null}catch{}this.a=e}U(Ic,go);function ci(e,n){this.g=e,this.a=n+"::"}U(ci,mo),ci.prototype.set=function(e,n){this.g.set(this.a+e,n)},ci.prototype.get=function(e){return this.g.get(this.a+e)},ci.prototype.ra=function(e){this.g.ra(this.a+e)},ci.prototype.ha=function(e){var n=this.g.ha(!0),r=this,o=new vn;return o.next=function(){for(var c=n.next();c.substr(0,r.a.length)!=r.a;)c=n.next();return e?c.substr(r.a.length):r.g.get(c)},o},vo(new wc);var rh,sh=new Ic;rh=vo(sh)?new ci(sh,"firebaseui"):null;var _c=new vr(rh),Ec={name:"pendingEmailCredential",storage:_c},Pn={name:"redirectStatus",storage:_c},yr={name:"redirectUrl",storage:_c},ui={name:"emailForSignIn",storage:new vr(new ri(3600,"/"))},br={name:"pendingEncryptedCredential",storage:new vr(new ri(3600,"/"))};function li(e,n){return e.storage.get(n?e.name+":"+n:e.name)}function Ve(e,n){e.storage.a.ra(n?e.name+":"+n:e.name)}function di(e,n,r){e.storage.set(r?e.name+":"+r:e.name,n)}function oh(e){return li(yr,e)||null}function vt(e){return e=li(Ec,e)||null,$d(e)}function yt(e){Ve(Ec,e)}function ah(e,n){di(Ec,Hd(e),n)}function Sc(e){return(e=li(Pn,e)||null)&&typeof e.tenantId<"u"?new Wd(e.tenantId):null}function t0(e,n){di(Pn,{tenantId:e.a},n)}function n0(e,n){n=li(ui,n);var r=null;if(n)try{var o=Qd(e,n),c=JSON.parse(o);r=c&&c.email||null}catch{}return r}function i0(e,n){n=li(br,n);var r=null;if(n)try{var o=Qd(e,n);r=JSON.parse(o)}catch{}return $d(r||null)}function r0(e,n,r){di(br,Zd(e,JSON.stringify(Hd(n))),r)}function kc(){this.W={}}function ye(e,n,r){if(n.toLowerCase()in e.W)throw Error("Configuration "+n+" has already been defined.");e.W[n.toLowerCase()]=r}function Tc(e,n,r){if(!(n.toLowerCase()in e.W))throw Error("Configuration "+n+" is not defined.");e.W[n.toLowerCase()]=r}kc.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]};function Cc(e,n){if(e=e.get(n),!e)throw Error("Configuration "+n+" is required.");return e}function Ac(){this.g=void 0,this.a={}}i=Ac.prototype,i.set=function(e,n){ch(this,e,n,!1)},i.add=function(e,n){ch(this,e,n,!0)};function ch(e,n,r,o){for(var c=0;c<n.length;c++){var l=n.charAt(c);e.a[l]||(e.a[l]=new Ac),e=e.a[l]}if(o&&e.g!==void 0)throw Error('The collection already contains the key "'+n+'"');e.g=r}i.get=function(e){e:{for(var n=this,r=0;r<e.length;r++)if(n=n.a[e.charAt(r)],!n){e=void 0;break e}e=n}return e?e.g:void 0},i.la=function(){var e=[];return uh(this,e),e};function uh(e,n){e.g!==void 0&&n.push(e.g);for(var r in e.a)uh(e.a[r],n)}i.ja=function(){var e=[];return lh(this,"",e),e};function lh(e,n,r){e.g!==void 0&&r.push(n);for(var o in e.a)lh(e.a[o],n+o,r)}i.clear=function(){this.a={},this.g=void 0};function dh(e){for(this.a=e,this.g=new Ac,e=0;e<this.a.length;e++){var n=this.g.get("+"+this.a[e].b);n?n.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function yo(e,n){e=e.g;var r={},o=0;for(e.g!==void 0&&(r[o]=e.g);o<n.length;o++){var c=n.charAt(o);if(!(c in e.a))break;e=e.a[c],e.g!==void 0&&(r[o]=e.g)}for(var l in r)if(r.hasOwnProperty(l))return r[l];return[]}function On(e){for(var n=0;n<je.length;n++)if(je[n].c===e)return je[n];return null}function hh(e){e=e.toUpperCase();for(var n=[],r=0;r<je.length;r++)je[r].f===e&&n.push(je[r]);return n}function fh(e){if(0<e.length&&e.charAt(0)=="+"){e=e.substring(1);for(var n=[],r=0;r<je.length;r++)je[r].b==e&&n.push(je[r]);e=n}else e=hh(e);return e}function ph(e){e.sort(function(n,r){return n.name.localeCompare(r.name,"en")})}var je=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];ph(je);var wr=new dh(je);function mh(e,n){this.a=e,this.Aa=n}function gh(e){e=Ke(e);var n=yo(wr,e);return 0<n.length?new mh(n[0].b=="1"?"1-US-0":n[0].c,Ke(e.substr(n[0].b.length+1))):null}function Rc(e){var n=On(e.a);if(!n)throw Error("Country ID "+e.a+" not found.");return"+"+n.b+e.Aa}function vh(e,n){for(var r=0;r<e.length;r++)if(!rt(yh,e[r])&&(hi!==null&&e[r]in hi||rt(n,e[r])))return e[r];return null}var yh=["emailLink","password","phone"],hi={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function s0(){this.a=new kc,ye(this.a,"autoUpgradeAnonymousUsers"),ye(this.a,"callbacks"),ye(this.a,"credentialHelper",Io),ye(this.a,"immediateFederatedRedirect",!1),ye(this.a,"popupMode",!1),ye(this.a,"privacyPolicyUrl"),ye(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),ye(this.a,"queryParameterForWidgetMode","mode"),ye(this.a,"signInFlow"),ye(this.a,"signInOptions"),ye(this.a,"signInSuccessUrl"),ye(this.a,"siteName"),ye(this.a,"tosUrl"),ye(this.a,"widgetUrl"),ye(this.a,"adminRestrictedOperation")}function bo(e){var n=!!e.a.get("autoUpgradeAnonymousUsers");return n&&!Ah(e)&&Ye('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),n}function wo(e){e=e.a.get("signInOptions")||[];for(var n=[],r=0;r<e.length;r++){var o=e[r];o=te(o)?o:{provider:o},o.provider&&n.push(o)}return n}function Je(e,n){e=wo(e);for(var r=0;r<e.length;r++)if(e[r].provider===n)return e[r];return null}function fi(e){return wo(e).map(function(n){return n.provider})}function Ir(e,n){e=bh(e);for(var r=0;r<e.length;r++)if(e[r].providerId===n)return e[r];return null}function bh(e){return wo(e).map(function(n){if(hi[n.provider]||rt(m0,n.provider)){n={providerId:n.provider,S:n.providerName||null,V:n.fullLabel||null,ta:n.buttonColor||null,za:n.iconUrl?qt(xs(n.iconUrl)).toString():null};for(var r in n)n[r]===null&&delete n[r];return n}return{providerId:n.provider,S:n.providerName||null,V:n.fullLabel||null,ta:n.buttonColor||null,za:n.iconUrl?qt(xs(n.iconUrl)).toString():null,Ob:n.loginHintKey||null}})}function wh(e){var n=Je(e,O.auth.GoogleAuthProvider.PROVIDER_ID),r;if(r=n&&n.clientId){e:{if((window.location&&window.location.protocol)==="http:"||(window.location&&window.location.protocol)==="https:"){for(o in e=e.a.get("credentialHelper"),Lc)if(Lc[o]===e){var o=Lc[o];break e}}o=Io}r=o===Dc}return r&&n.clientId||null}function Ih(e){return e=Je(e,O.auth.EmailAuthProvider.PROVIDER_ID),!!(e&&e.disableSignUp&&e.disableSignUp.status)}function Nn(e){return e=e.a.get("adminRestrictedOperation")||null,!(!e||!e.status)}function o0(e){var n=null;if(wo(e).forEach(function(o){o.provider==O.auth.PhoneAuthProvider.PROVIDER_ID&&te(o.recaptchaParameters)&&!Array.isArray(o.recaptchaParameters)&&(n=Ra(o.recaptchaParameters))}),n){var r=[];g0.forEach(function(o){typeof n[o]<"u"&&(r.push(o),delete n[o])}),r.length&&en('The following provided "recaptchaParameters" keys are not allowed: '+r.join(", "))}return n}function a0(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}function c0(e){if(e=e.a.get("adminRestrictedOperation")||null){var n=e.helpLink||null;if(n&&typeof n=="string")return function(){ii(n)}}return null}function u0(e){return(e=Je(e,O.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}function l0(e){if((e=Je(e,O.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var n=e.disableSignUp.helpLink||null;if(n&&typeof n=="string")return function(){ii(n)}}return null}function _h(e,n){return e=(e=Je(e,n))&&e.scopes,Array.isArray(e)?e:[]}function Eh(e,n){return e=(e=Je(e,n))&&e.customParameters,te(e)?(e=Ra(e),n===O.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,n===O.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function d0(e){e=Je(e,O.auth.PhoneAuthProvider.PROVIDER_ID);var n=null;return e&&typeof e.loginHint=="string"&&(n=gh(e.loginHint)),e&&e.defaultNationalNumber||n&&n.Aa||null}function h0(e){var n=(e=Je(e,O.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;n=n&&hh(n);var r=null;return e&&typeof e.loginHint=="string"&&(r=gh(e.loginHint)),n&&n[0]||r&&On(r.a)||null}function Pc(e){if(e=Je(e,O.auth.PhoneAuthProvider.PROVIDER_ID),!e)return null;var n=e.whitelistedCountries,r=e.blacklistedCountries;if(typeof n<"u"&&(!Array.isArray(n)||n.length==0))throw Error("WhitelistedCountries must be a non-empty array.");if(typeof r<"u"&&!Array.isArray(r))throw Error("BlacklistedCountries must be an array.");if(n&&r)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!n&&!r)return je;if(e=[],n){r={};for(var o=0;o<n.length;o++)for(var c=fh(n[o]),l=0;l<c.length;l++)r[c[l].c]=c[l];for(var h in r)r.hasOwnProperty(h)&&e.push(r[h])}else{for(h={},n=0;n<r.length;n++)for(c=fh(r[n]),o=0;o<c.length;o++)h[c[o].c]=c[o];for(c=0;c<je.length;c++)h!==null&&je[c].c in h||e.push(je[c])}return e}function Sh(e){return Cc(e.a,"queryParameterForWidgetMode")}function be(e){var n=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,n&&!e&&en("Privacy Policy URL is missing, the link will not be displayed."),n&&e){if(typeof n=="function")return n;if(typeof n=="string")return function(){ii(n)}}return null}function we(e){var n=e.a.get("tosUrl")||null,r=e.a.get("privacyPolicyUrl")||null;if(r&&!n&&en("Term of Service URL is missing, the link will not be displayed."),n&&r){if(typeof r=="function")return r;if(typeof r=="string")return function(){ii(r)}}return null}function kh(e){return(e=Je(e,O.auth.EmailAuthProvider.PROVIDER_ID))&&typeof e.requireDisplayName<"u"?!!e.requireDisplayName:!0}function pi(e){return e=Je(e,O.auth.EmailAuthProvider.PROVIDER_ID),!(!e||e.signInMethod!==O.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function f0(e){return e=Je(e,O.auth.EmailAuthProvider.PROVIDER_ID),!(!e||!e.forceSameDevice)}function p0(e){if(pi(e)){var n={url:Ot(),handleCodeInApp:!0};(e=Je(e,O.auth.EmailAuthProvider.PROVIDER_ID))&&typeof e.emailLinkSignIn=="function"&&Os(n,e.emailLinkSignIn()),e=n.url;var r=Ot();r instanceof $t||(r=Da(r)),e instanceof $t||(e=Da(e));var o=r;r=new $t(o);var c=!!e.j;c?Pa(r,e.j):c=!!e.A,c?r.A=e.A:c=!!e.h,c?r.h=e.h:c=e.C!=null;var l=e.g;if(c)Oa(r,e.C);else if(c=!!e.g){if(l.charAt(0)!="/"&&(o.h&&!o.g?l="/"+l:(o=r.g.lastIndexOf("/"),o!=-1&&(l=r.g.substr(0,o+1)+l))),l==".."||l==".")l="";else if(l.indexOf("./")!=-1||l.indexOf("/.")!=-1){o=l.lastIndexOf("/",0)==0,l=l.split("/");for(var h=[],g=0;g<l.length;){var b=l[g++];b=="."?o&&g==l.length&&h.push(""):b==".."?((1<h.length||h.length==1&&h[0]!="")&&h.pop(),o&&g==l.length&&h.push("")):(h.push(b),o=!0)}l=h.join("/")}}return c?r.g=l:c=e.a.toString()!=="",c?Na(r,Tl(e.a)):c=!!e.s,c&&(r.s=e.s),n.url=r.toString(),n}return null}function Oc(e){var n=!!e.a.get("immediateFederatedRedirect"),r=fi(e);return e=Th(e),n&&r.length==1&&!rt(yh,r[0])&&e==_o}function Th(e){e=e.a.get("signInFlow");for(var n in Mc)if(Mc[n]==e)return Mc[n];return _o}function Nc(e){return _r(e).signInSuccess||null}function Ch(e){return _r(e).signInSuccessWithAuthResult||null}function Ah(e){return _r(e).signInFailure||null}function _r(e){return e.a.get("callbacks")||{}}var Dc="googleyolo",Io="none",Lc={nc:Dc,NONE:Io},_o="redirect",Mc={qc:"popup",rc:_o},xc={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},m0=["anonymous"],g0=["sitekey","tabindex","callback","expired-callback"],Er,mi,Uc,Rh,X={};function P(e,n,r,o){X[e].apply(null,Array.prototype.slice.call(arguments,1))}function Ph(e){return e.classList?e.classList:(e=e.className,D(e)&&e.match(/\S+/g)||[])}function Sr(e,n){return e.classList?e.classList.contains(n):rt(Ph(e),n)}function bt(e,n){e.classList?e.classList.add(n):Sr(e,n)||(e.className+=0<e.className.length?" "+n:n)}function wt(e,n){e.classList?e.classList.remove(n):Sr(e,n)&&(e.className=kv(Ph(e),function(r){return r!=n}).join(" "))}function Re(e){var n=e.type;switch(D(n)&&n.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return n=e.selectedIndex,0<=n?e.options[n].value:null;case"select-multiple":n=[];for(var r,o=0;r=e.options[o];o++)r.selected&&n.push(r.value);return n.length?n:null;default:return e.value!=null?e.value:null}}function Oh(e,n){var r=e.type;switch(D(r)&&r.toLowerCase()){case"checkbox":case"radio":e.checked=n;break;case"select-one":if(e.selectedIndex=-1,D(n)){for(var o=0;r=e.options[o];o++)if(r.value==n){r.selected=!0;break}}break;case"select-multiple":for(D(n)&&(n=[n]),o=0;r=e.options[o];o++)if(r.selected=!1,n)for(var c,l=0;c=n[l];l++)r.value==c&&(r.selected=!0);break;default:e.value=n??""}}function v0(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(kr(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!ct;default:return 166>e.keyCode||183<e.keyCode}}function Nh(e,n,r,o,c,l){if(xe&&!In("525"))return!0;if(Kt&&c)return kr(e);if(c&&!o)return!1;if(!ct){typeof n=="number"&&(n=Fc(n));var h=n==17||n==18||Kt&&n==91;if((!r||Kt)&&h||Kt&&n==16&&(o||l))return!1}if((xe||Gt)&&o&&r)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(de&&o&&n==e)return!1;switch(e){case 13:return ct?l||c?!1:!(r&&o):!0;case 27:return!(xe||Gt||ct)}return ct&&(o||c||l)?!1:kr(e)}function kr(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(xe||Gt)&&e==0)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return ct;default:return!1}}function Fc(e){if(ct)e=y0(e);else if(Kt&&xe)switch(e){case 93:e=91}return e}function y0(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}function gi(e){_e.call(this),this.a=e,ut(e,"keydown",this.g,!1,this),ut(e,"click",this.h,!1,this)}U(gi,_e),gi.prototype.g=function(e){(e.keyCode==13||xe&&e.keyCode==3)&&Dh(this,e)},gi.prototype.h=function(e){Dh(this,e)};function Dh(e,n){var r=new Mh(n);if(Zt(e,r)){r=new Lh(n);try{Zt(e,r)}finally{n.stopPropagation()}}}gi.prototype.o=function(){gi.K.o.call(this),Tn(this.a,"keydown",this.g,!1,this),Tn(this.a,"click",this.h,!1,this),delete this.a};function Lh(e){Fe.call(this,e.a),this.type="action"}U(Lh,Fe);function Mh(e){Fe.call(this,e.a),this.type="beforeaction"}U(Mh,Fe);function vi(e){_e.call(this),this.a=e,e=de?"focusout":"blur",this.g=ut(this.a,de?"focusin":"focus",this,!de),this.h=ut(this.a,e,this,!de)}U(vi,_e),vi.prototype.handleEvent=function(e){var n=new Fe(e.a);n.type=e.type=="focusin"||e.type=="focus"?"focusin":"focusout",Zt(this,n)},vi.prototype.o=function(){vi.K.o.call(this),Xt(this.g),Xt(this.h),delete this.a};function Eo(e,n){_e.call(this),this.g=e||1,this.a=n||w,this.h=J(this.gc,this),this.j=gn()}U(Eo,_e),i=Eo.prototype,i.Ka=!1,i.aa=null,i.gc=function(){if(this.Ka){var e=gn()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),Zt(this,"tick"),this.Ka&&(So(this),this.start()))}},i.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=gn())};function So(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}i.o=function(){Eo.K.o.call(this),So(this),delete this.a};function b0(e,n){if(K(e))n&&(e=J(e,n));else if(e&&typeof e.handleEvent=="function")e=J(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<0?-1:w.setTimeout(e,0)}function yi(e){kn.call(this),this.g=e,this.a={}}U(yi,kn);var xh=[];function bi(e,n,r,o){j(r)||(r&&(xh[0]=r.toString()),r=xh);for(var c=0;c<r.length;c++){var l=ut(n,r[c],o||e.handleEvent,!1,e.g||e);if(!l)break;e.a[l.key]=l}}function Uh(e){bl(e.a,function(n,r){this.a.hasOwnProperty(r)&&Xt(n)},e),e.a={}}yi.prototype.o=function(){yi.K.o.call(this),Uh(this)},yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tr(e){_e.call(this),this.a=null,this.g=e,e=de||Gt||xe&&!In("531")&&e.tagName=="TEXTAREA",this.h=new yi(this),bi(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}U(Tr,_e),Tr.prototype.handleEvent=function(e){if(e.type=="input")de&&In(10)&&e.keyCode==0&&e.j==0||(jc(this),Zt(this,Fh(e)));else if(e.type!="keydown"||v0(e)){var n=e.type=="keydown"?this.g.value:null;de&&e.keyCode==229&&(n=null);var r=Fh(e);jc(this),this.a=b0(function(){this.a=null,this.g.value!=n&&Zt(this,r)},this)}};function jc(e){e.a!=null&&(w.clearTimeout(e.a),e.a=null)}function Fh(e){return e=new Fe(e.a),e.type="input",e}Tr.prototype.o=function(){Tr.K.o.call(this),this.h.m(),jc(this),delete this.g};function Cr(e,n){_e.call(this),e&&(this.Oa&&$h(this),this.qa=e,this.Na=ut(this.qa,"keypress",this,n),this.Ya=ut(this.qa,"keydown",this.Jb,n,this),this.Oa=ut(this.qa,"keyup",this.Kb,n,this))}U(Cr,_e),i=Cr.prototype,i.qa=null,i.Na=null,i.Ya=null,i.Oa=null,i.R=-1,i.X=-1,i.Ua=!1;var jh={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Bh={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Vh=!xe||In("525"),Hh=Kt&&ct;i=Cr.prototype,i.Jb=function(e){(xe||Gt)&&(this.R==17&&!e.ctrlKey||this.R==18&&!e.altKey||Kt&&this.R==91&&!e.metaKey)&&(this.X=this.R=-1),this.R==-1&&(e.ctrlKey&&e.keyCode!=17?this.R=17:e.altKey&&e.keyCode!=18?this.R=18:e.metaKey&&e.keyCode!=91&&(this.R=91)),Vh&&!Nh(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=Fc(e.keyCode),Hh&&(this.Ua=e.altKey))},i.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},i.handleEvent=function(e){var n=e.a,r=n.altKey;if(de&&e.type=="keypress")var o=this.X,c=o!=13&&o!=27?n.keyCode:0;else(xe||Gt)&&e.type=="keypress"?(o=this.X,c=0<=n.charCode&&63232>n.charCode&&kr(o)?n.charCode:0):Nl&&!xe?(o=this.X,c=kr(o)?n.keyCode:0):(e.type=="keypress"?(Hh&&(r=this.Ua),n.keyCode==n.charCode?32>n.keyCode?(o=n.keyCode,c=0):(o=this.X,c=n.charCode):(o=n.keyCode||this.X,c=n.charCode||0)):(o=n.keyCode||this.X,c=n.charCode||0),Kt&&c==63&&o==224&&(o=191));var l=o=Fc(o);o?63232<=o&&o in jh?l=jh[o]:o==25&&e.shiftKey&&(l=9):n.keyIdentifier&&n.keyIdentifier in Bh&&(l=Bh[n.keyIdentifier]),ct&&Vh&&e.type=="keypress"&&!Nh(l,this.R,e.shiftKey,e.ctrlKey,r,e.metaKey)||(e=l==this.R,this.R=l,n=new Wh(l,c,e,n),n.altKey=r,Zt(this,n))},i.N=function(){return this.qa};function $h(e){e.Na&&(Xt(e.Na),Xt(e.Ya),Xt(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}i.o=function(){Cr.K.o.call(this),$h(this)};function Wh(e,n,r,o){Fe.call(this,o),this.type="key",this.keyCode=e,this.j=n,this.repeat=r}U(Wh,Fe);function wi(e,n,r,o){this.top=e,this.right=n,this.bottom=r,this.left=o}wi.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},wi.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},wi.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},wi.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};function ko(e,n){var r=rr(e);return r.defaultView&&r.defaultView.getComputedStyle&&(e=r.defaultView.getComputedStyle(e,null))&&(e[n]||e.getPropertyValue(n))||""}function Gh(e){try{var n=e.getBoundingClientRect()}catch{return{left:0,top:0,right:0,bottom:0}}return de&&e.ownerDocument.body&&(e=e.ownerDocument,n.left-=e.documentElement.clientLeft+e.body.clientLeft,n.top-=e.documentElement.clientTop+e.body.clientTop),n}function w0(e,n){n=n||js(document);var r=n||js(document),o=Kh(e),c=Kh(r);if(!de||9<=Number(nr)){h=ko(r,"borderLeftWidth");var l=ko(r,"borderRightWidth");g=ko(r,"borderTopWidth"),b=ko(r,"borderBottomWidth"),l=new wi(parseFloat(g),parseFloat(l),parseFloat(b),parseFloat(h))}else{var h=To(r,"borderLeft");l=To(r,"borderRight");var g=To(r,"borderTop"),b=To(r,"borderBottom");l=new wi(g,l,b,h)}r==js(document)?(h=o.a-r.scrollLeft,o=o.g-r.scrollTop,!de||10<=Number(nr)||(h+=l.left,o+=l.top)):(h=o.a-c.a-l.left,o=o.g-c.g-l.top),c=e.offsetWidth,l=e.offsetHeight,g=xe&&!c&&!l,L(c)&&!g||!e.getBoundingClientRect?e=new ja(c,l):(e=Gh(e),e=new ja(e.right-e.left,e.bottom-e.top)),c=r.clientHeight-e.height,l=r.scrollLeft,g=r.scrollTop,l+=Math.min(h,Math.max(h-(r.clientWidth-e.width),0)),g+=Math.min(o,Math.max(o-c,0)),r=new Yt(l,g),n.scrollLeft=r.a,n.scrollTop=r.g}function Kh(e){var n=rr(e),r=new Yt(0,0),o=n?rr(n):document;return o=!de||9<=Number(nr)||Fs(o).a.compatMode=="CSS1Compat"?o.documentElement:o.body,e==o||(e=Gh(e),o=Fs(n).a,n=js(o),o=o.parentWindow||o.defaultView,n=de&&In("10")&&o.pageYOffset!=n.scrollTop?new Yt(n.scrollLeft,n.scrollTop):new Yt(o.pageXOffset||n.scrollLeft,o.pageYOffset||n.scrollTop),r.a=e.left+n.a,r.g=e.top+n.g),r}var qh={thin:2,medium:4,thick:6};function To(e,n){if((e.currentStyle?e.currentStyle[n+"Style"]:null)=="none")return 0;var r=e.currentStyle?e.currentStyle[n+"Width"]:null;if(r in qh)e=qh[r];else if(/^\d+px?$/.test(r))e=parseInt(r,10);else{n=e.style.left;var o=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=r,r=e.style.pixelLeft,e.style.left=n,e.runtimeStyle.left=o,e=+r}return e}function Bc(){}S(Bc),Bc.prototype.a=0;function Dn(e){_e.call(this),this.s=e||Fs(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}U(Dn,_e),i=Dn.prototype,i.Lb=Bc.Xa(),i.N=function(){return this.g};function W(e,n){return e.g?Va(n,e.g||e.s.a):null}function Ar(e){return e.L||(e.L=new yi(e)),e.L}i.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");Dn.K.Za.call(this,e)},i.kb=function(){this.g=this.s.a.createElement("DIV")},i.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},i.v=function(){this.na=!0,Vc(this,function(e){!e.na&&e.N()&&e.v()})},i.ya=function(){Vc(this,function(e){e.na&&e.ya()}),this.L&&Uh(this.L),this.na=!1},i.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Vc(this,function(e){e.m()}),this.g&&En(this.g),this.Y=this.g=this.oa=this.Ea=null,Dn.K.o.call(this)};function Vc(e,n){e.Ea&&Zi(e.Ea,n,void 0)}i.removeChild=function(e,n){if(e){var r=D(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&r?(e=this.oa,e=(e!==null&&r in e?e[r]:void 0)||null):e=null,r&&e){var o=this.oa;if(r in o&&delete o[r],gl(this.Ea,e),n&&(e.ya(),e.g&&En(e.g)),n=e,n==null)throw Error("Unable to set parent component");n.Y=null,Dn.K.Za.call(n,null)}}if(!e)throw Error("Child is not in parent component");return e};function pe(e,n){var r=Kl(e,"firebaseui-textfield");n?(wt(e,"firebaseui-input-invalid"),bt(e,"firebaseui-input"),r&&wt(r,"firebaseui-textfield-invalid")):(wt(e,"firebaseui-input"),bt(e,"firebaseui-input-invalid"),r&&bt(r,"firebaseui-textfield-invalid"))}function Ii(e,n,r){n=new Tr(n),ar(e,it(cr,n)),bi(Ar(e),n,"input",r)}function Rr(e,n,r){n=new Cr(n),ar(e,it(cr,n)),bi(Ar(e),n,"key",function(o){o.keyCode==13&&(o.stopPropagation(),o.preventDefault(),r(o))})}function I0(e,n,r){n=new vi(n),ar(e,it(cr,n)),bi(Ar(e),n,"focusin",r)}function _0(e,n,r){n=new vi(n),ar(e,it(cr,n)),bi(Ar(e),n,"focusout",r)}function ce(e,n,r){n=new gi(n),ar(e,it(cr,n)),bi(Ar(e),n,"action",function(o){o.stopPropagation(),o.preventDefault(),r(o)})}function Xe(e){bt(e,"firebaseui-hidden")}function Pe(e,n){n&&Ha(e,n),wt(e,"firebaseui-hidden")}function _i(e){return!Sr(e,"firebaseui-hidden")&&e.style.display!="none"}function Ei(e){e=e||{};var n=e.email,r=e.disabled,o='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return o=e.wc?o+"Enter new email address":o+"Email",o+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+Ue(n??"")+'"'+(r?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',A(o)}function He(e){e=e||{},e=e.label;var n='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return n=e?n+x(e):n+"Next",A(n+"</button>")}function Hc(){var e=""+He({label:he("Sign In")});return A(e)}function zh(){var e=""+He({label:he("Save")});return A(e)}function lt(){var e=""+He({label:he("Continue")});return A(e)}function Yh(e){e=e||{},e=e.label;var n='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return n=e?n+x(e):n+"Choose password",A(n+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function Jh(){var e={},n='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return n=e.current?n+"Current password":n+"Password",A(n+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function Xh(){return A('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function Ze(e){e=e||{},e=e.label;var n='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return n=e?n+x(e):n+"Cancel",A(n+"</button>")}function De(e){var n="";return e.F&&e.D&&(n+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),A(n)}function Si(e){var n="";return e.F&&e.D&&(n+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),A(n)}function Zh(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+x(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',A(e)}Zh.a="firebaseui.auth.soy2.element.infoBar";function Qh(e){var n=e.content;return e=e.Ab,A('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+Ue(e):"")+'">'+x(n)+"</dialog>")}function ef(e){var n=e.message;return A(Qh({content:Yl('<div class="firebaseui-dialog-icon-wrapper"><div class="'+Ue(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+x(n)+"</div>")}))}ef.a="firebaseui.auth.soy2.element.progressDialog";function tf(e){var n='<div class="firebaseui-list-box-actions">';e=e.items;for(var r=e.length,o=0;o<r;o++){var c=e[o];n+='<button type="button" data-listboxid="'+Ue(c.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(c.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+Ue(c.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+x(c.label)+"</div></button>"}return n=""+Qh({Ab:he("firebaseui-list-box-dialog"),content:Yl(n+"</div>")}),A(n)}tf.a="firebaseui.auth.soy2.element.listBoxDialog";function Co(e){return e=e||{},A(e.tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}Co.a="firebaseui.auth.soy2.element.busyIndicator";function tn(e,n){return e=e||{},e=e.ga,z(e.S?e.S:n.hb[e.providerId]?""+n.hb[e.providerId]:e.providerId&&e.providerId.indexOf("saml.")==0||e.providerId&&e.providerId.indexOf("oidc.")==0?e.providerId.substring(5):""+e.providerId)}function $c(e){nf(e,"upgradeElement")}function Wc(e){nf(e,"downgradeElements")}var E0=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function nf(e,n){e&&window.componentHandler&&window.componentHandler[n]&&E0.forEach(function(r){Sr(e,r)&&window.componentHandler[n](e),Zi(Ba(r,e),function(o){window.componentHandler[n](o)})})}function rf(e,n,r){if(Ao.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),$c(e),n&&ce(this,e,function(l){var h=e.getBoundingClientRect();(l.clientX<h.left||h.left+h.width<l.clientX||l.clientY<h.top||h.top+h.height<l.clientY)&&Ao.call(this)}),!r){var o=this.N().parentElement||this.N().parentNode;if(o){var c=this;this.da=function(){if(e.open){var l=e.getBoundingClientRect().height,h=o.getBoundingClientRect().height,g=o.getBoundingClientRect().top-document.body.getBoundingClientRect().top,b=o.getBoundingClientRect().left-document.body.getBoundingClientRect().left,T=e.getBoundingClientRect().width,N=o.getBoundingClientRect().width;e.style.top=(g+(h-l)/2).toString()+"px",l=b+(N-T)/2,e.style.left=l.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-l-T).toString()+"px"}else window.removeEventListener("resize",c.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Ao(){var e=Gc.call(this);e&&(Wc(e),e.open&&e.close(),En(e),this.da&&window.removeEventListener("resize",this.da))}function Gc(){return Va("firebaseui-id-dialog")}function sf(){En(of.call(this))}function of(){return W(this,"firebaseui-id-info-bar")}function af(){return W(this,"firebaseui-id-dismiss-info-bar")}var S0={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Kc(e,n,r){Rt.call(this,e,n);for(var o in r)this[o]=r[o]}U(Kc,Rt);function _(e,n,r,o,c){Dn.call(this,r),this.fb=e,this.eb=n,this.Fa=!1,this.Ga=o||null,this.A=this.ca=null,this.Z=Ra(S0),Os(this.Z,c||{})}U(_,Dn),i=_.prototype,i.kb=function(){var e=sr(this.fb,this.eb,this.Z,this.s);$c(e),this.g=e},i.v=function(){if(_.K.v.call(this),cd(oe(this),new Kc("pageEnter",oe(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;ce(this,this.bb(),function(){e()})}if(this.ab()&&this.Z.D){var n=this.Z.D;ce(this,this.ab(),function(){n()})}},i.ya=function(){cd(oe(this),new Kc("pageExit",oe(this),{pageId:this.Ga})),_.K.ya.call(this)},i.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Wc(this.N()),_.K.o.call(this)};function k0(e){e.Fa=!0;var n=Sr(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout(function(){e.N()&&e.A===null&&(e.A=sr(Co,{tb:n},null,e.s),e.N().appendChild(e.A),$c(e.A))},500)}i.I=function(e,n,r,o){function c(){if(l.T)return null;l.Fa=!1,window.clearTimeout(l.ca),l.ca=null,l.A&&(Wc(l.A),En(l.A),l.A=null)}var l=this;return l.Fa?null:(k0(l),e.apply(null,n).then(r,o).then(c,c))};function oe(e){return e.N().parentElement||e.N().parentNode}function Pr(e,n,r){Rr(e,n,function(){r.focus()})}function ki(e,n,r){Rr(e,n,function(){r()})}re(_.prototype,{a:function(e){sf.call(this);var n=sr(Zh,{message:e},null,this.s);this.N().appendChild(n),ce(this,af.call(this),function(){En(n)})},yc:sf,Ac:of,zc:af,$:function(e,n){e=sr(ef,{Ma:e,message:n},null,this.s),rf.call(this,e)},h:Ao,Cb:Gc,Cc:function(){return W(this,"firebaseui-tos")},bb:function(){return W(this,"firebaseui-tos-link")},ab:function(){return W(this,"firebaseui-pp-link")},Dc:function(){return W(this,"firebaseui-tos-list")}});function cf(e,n,r){e=e||{},n=e.Va;var o=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Ei(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(n?Ze(null):"")+He(null)+'</div></div><div class="firebaseui-card-footer">'+(o?Si(r):De(r))+"</div></form></div>",A(e)}cf.a="firebaseui.auth.soy2.page.signIn";function uf(e,n,r){return e=e||{},n=e.ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+Ei(e)+Jh()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+Xh()+'</div><div class="firebaseui-form-actions">'+Hc()+'</div></div><div class="firebaseui-card-footer">'+(n?Si(r):De(r))+"</div></form></div>",A(e)}uf.a="firebaseui.auth.soy2.page.passwordSignIn";function lf(e,n,r){e=e||{};var o=e.Tb;n=e.Ta;var c=e.ia,l='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+Ei(e);return o?(e=e||{},e=e.name,e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+Ue(e??"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=A(e)):e="",r=l+e+Yh(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(n?Ze(null):"")+zh()+'</div></div><div class="firebaseui-card-footer">'+(c?Si(r):De(r))+"</div></form></div>",A(r)}lf.a="firebaseui.auth.soy2.page.passwordSignUp";function df(e,n,r){return e=e||{},n=e.Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+Ei(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(n?Ze(null):"")+He({label:he("Send")})+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(e)}df.a="firebaseui.auth.soy2.page.passwordRecovery";function hf(e,n,r){n=e.G;var o="";return e="Follow the instructions sent to <strong>"+(x(e.email)+"</strong> to recover your password"),o+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+'</p></div><div class="firebaseui-card-actions">',n&&(o+='<div class="firebaseui-form-actions">'+He({label:he("Done")})+"</div>"),o+='</div><div class="firebaseui-card-footer">'+De(r)+"</div></div>",A(o)}hf.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent";function ff(e,n,r){return A('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+Co(null)+"</div></div>")}ff.a="firebaseui.auth.soy2.page.callback";function pf(e,n,r){return A('<div class="firebaseui-container firebaseui-id-page-spinner">'+Co({tb:!0})+"</div>")}pf.a="firebaseui.auth.soy2.page.spinner";function mf(){return A('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}mf.a="firebaseui.auth.soy2.page.blank";function gf(e,n,r){n="",e="A sign-in email with additional instructions was sent to <strong>"+(x(e.email)+"</strong>. Check your email to complete sign-in.");var o=A('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+e+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+o+'</div><div class="firebaseui-form-actions">'+Ze({label:he("Back")})+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(n)}gf.a="firebaseui.auth.soy2.page.emailLinkSignInSent";function vf(e,n,r){return e=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn't work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">`+A('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+Ze({label:he("Back")})+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(e)}vf.a="firebaseui.auth.soy2.page.emailNotReceived";function yf(e,n,r){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+Ei(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Ze(null)+He(null)+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(e)}yf.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation";function bf(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Ze({label:he("Dismiss")})+"</div></div></div>";return A(e)}bf.a="firebaseui.auth.soy2.page.differentDeviceError";function wf(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Ze({label:he("Dismiss")})+"</div></div></div>";return A(e)}wf.a="firebaseui.auth.soy2.page.anonymousUserMismatch";function If(e,n,r){return n="",e="You’ve already used <strong>"+(x(e.email)+"</strong> to sign in. Enter your password for that account."),n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+e+"</p>"+Jh()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+Xh()+'</div><div class="firebaseui-form-actions">'+Hc()+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(n)}If.a="firebaseui.auth.soy2.page.passwordLinking";function _f(e,n,r){var o=e.email;return n="",e=""+tn(e,r),e=he(e),o="You’ve already used <strong>"+(x(o)+("</strong>. You can connect your <strong>"+(x(e)+("</strong> account with <strong>"+(x(o)+"</strong> by signing in with email link below."))))),e="For this flow to successfully connect your "+(x(e)+" account with this email, you have to open the link on the same device or browser."),n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+o+'<p class="firebaseui-text firebaseui-text-justify">'+e+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Hc()+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(n)}_f.a="firebaseui.auth.soy2.page.emailLinkSignInLinking";function Ef(e,n,r){n="";var o=""+tn(e,r);return o=he(o),e="You originally intended to connect <strong>"+(x(o)+"</strong> to your email account but have opened the link on a different device where you are not signed in."),o="If you still want to connect your <strong>"+(x(o)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device."),n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+e+'</p><p class="firebaseui-text firebaseui-text-justify">'+o+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+lt()+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(n)}Ef.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";function Sf(e,n,r){var o=e.email;return n="",e=""+tn(e,r),e=he(e),o="You’ve already used <strong>"+(x(o)+("</strong>. Sign in with "+(x(e)+" to continue."))),n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+o+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+He({label:he("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(n)}Sf.a="firebaseui.auth.soy2.page.federatedLinking";function kf(e,n,r){e=e||{};var o=e.kc;n=e.yb,e=e.Eb;var c='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return o?(o="<strong>"+(x(o)+"</strong> is not authorized to view the requested page."),c+=o):c+="User is not authorized to view the requested page.",c+="</p>",n&&(n="Please contact <strong>"+(x(n)+"</strong> for authorization."),c+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+n+"</p>"),c+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(c+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),c+='</div><div class="firebaseui-form-actions">'+Ze({label:he("Back")})+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(c)}kf.a="firebaseui.auth.soy2.page.unauthorizedUser";function Tf(e,n,r){return n="",e="To continue sign in with <strong>"+(x(e.email)+"</strong> on this device, you have to recover the password."),n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Ze(null)+He({label:he("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(n)}Tf.a="firebaseui.auth.soy2.page.unsupportedProvider";function Cf(e){var n="",r='<p class="firebaseui-text">for <strong>'+(x(e.email)+"</strong></p>");return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+r+Yh(fy(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+zh()+"</div></div></form></div>",A(n)}Cf.a="firebaseui.auth.soy2.page.passwordReset";function Af(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+lt()+"</div>":"")+"</div></div>",A(e)}Af.a="firebaseui.auth.soy2.page.passwordResetSuccess";function Rf(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+lt()+"</div>":"")+"</div></div>",A(e)}Rf.a="firebaseui.auth.soy2.page.passwordResetFailure";function Pf(e){var n=e.G,r="";return e="Your sign-in email address has been changed back to <strong>"+(x(e.email)+"</strong>."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(n?'<div class="firebaseui-form-actions">'+lt()+"</div>":"")+"</div></form></div>",A(r)}Pf.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess";function Of(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+lt()+"</div>":"")+"</div></div>",A(e)}Of.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure";function Nf(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+lt()+"</div>":"")+"</div></div>",A(e)}Nf.a="firebaseui.auth.soy2.page.emailVerificationSuccess";function Df(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+lt()+"</div>":"")+"</div></div>",A(e)}Df.a="firebaseui.auth.soy2.page.emailVerificationFailure";function Lf(e){var n=e.G,r="";return e="You can now sign in with your new email <strong>"+(x(e.email)+"</strong>."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+'</p></div><div class="firebaseui-card-actions">'+(n?'<div class="firebaseui-form-actions">'+lt()+"</div>":"")+"</div></div>",A(r)}Lf.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";function Mf(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+lt()+"</div>":"")+"</div></div>",A(e)}Mf.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";function xf(e){var n=e.factorId,r=e.phoneNumber;e=e.G;var o='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';switch(n){case"phone":n="The <strong>"+(x(n)+(" "+(x(r)+"</strong> was removed as a second authentication step."))),o+=n;break;default:o+="The device or app was removed as a second authentication step."}return o+=`</p><p class="firebaseui-text">If you don't recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">`+(e?'<div class="firebaseui-form-actions">'+lt()+"</div>":"")+"</div></form></div>",A(o)}xf.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";function Uf(e){return e=e||{},e=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn't remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn't work, contact support for assistance.</p></div><div class="firebaseui-card-actions">`+(e.G?'<div class="firebaseui-form-actions">'+lt()+"</div>":"")+"</div></div>",A(e)}Uf.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";function Ff(e){var n=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+x(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',n&&(e+=He({label:he("Retry")})),A(e+"</div></div></div>")}Ff.a="firebaseui.auth.soy2.page.recoverableError";function jf(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+x(e.errorMessage)+"</p></div></div>",A(e)}jf.a="firebaseui.auth.soy2.page.unrecoverableError";function Bf(e,n,r){var o=e.Qb;return n="",e="Continue with "+(x(e.jc)+"?"),o="You originally wanted to sign in with "+x(o),n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+e+'</h2><p class="firebaseui-text">'+o+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Ze(null)+He({label:he("Continue")})+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form></div>",A(n)}Bf.a="firebaseui.auth.soy2.page.emailMismatch";function Vf(e,n,r){var o='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';e=e.Sb,n=e.length;for(var c=0;c<n;c++){var l={ga:e[c]},h=r;l=l||{};var g=l.ga,b=l;b=b||{};var T="";switch(b.ga.providerId){case"google.com":T+="firebaseui-idp-google";break;case"github.com":T+="firebaseui-idp-github";break;case"facebook.com":T+="firebaseui-idp-facebook";break;case"twitter.com":T+="firebaseui-idp-twitter";break;case"phone":T+="firebaseui-idp-phone";break;case"anonymous":T+="firebaseui-idp-anonymous";break;case"password":T+="firebaseui-idp-password";break;default:T+="firebaseui-idp-generic"}b='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+Ue(z(T))+' firebaseui-id-idp-button" data-provider-id="'+Ue(g.providerId)+'" style="background-color:',T=(T=l)||{},T=T.ga,b=b+Ue(Jl(z(T.ta?T.ta:h.wa[T.providerId]?""+h.wa[T.providerId]:T.providerId.indexOf("saml.")==0?""+h.wa.saml:T.providerId.indexOf("oidc.")==0?""+h.wa.oidc:""+h.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var N=l;T=h,N=N||{},N=N.ga,T=hy(N.za?Sn(N.za):T.xa[N.providerId]?Sn(T.xa[N.providerId]):N.providerId.indexOf("saml.")==0?Sn(T.xa.saml):N.providerId.indexOf("oidc.")==0?Sn(T.xa.oidc):Sn(T.xa.password)),b=b+Ue(Sn(T))+'"></span>',g.providerId=="password"?(b+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',g.V?b+=x(g.V):g.S?(l="Sign in with "+x(tn(l,h)),b+=l):b+="Sign in with email",b+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',b=g.S?b+x(g.S):b+"Email",b+="</span>"):g.providerId=="phone"?(b+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',g.V?b+=x(g.V):g.S?(l="Sign in with "+x(tn(l,h)),b+=l):b+="Sign in with phone",b+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',b=g.S?b+x(g.S):b+"Phone",b+="</span>"):g.providerId=="anonymous"?(b+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',g.V?b+=x(g.V):g.S?(l="Sign in with "+x(tn(l,h)),b+=l):b+="Continue as guest",b+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',b=g.S?b+x(g.S):b+"Guest",b+="</span>"):(b+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',g.V?b+=x(g.V):(T="Sign in with "+x(tn(l,h)),b+=T),b+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(g.S?x(g.S):x(tn(l,h)))+"</span>"),g=A(b+"</button>"),o+='<li class="firebaseui-list-item">'+g+"</li>"}return o+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Si(r)+"</div></div>",A(o)}Vf.a="firebaseui.auth.soy2.page.providerSignIn";function Hf(e,n,r){e=e||{};var o=e.Gb,c=e.Va;n=e.ia,e=e||{},e=e.Aa,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+Ue(e??"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+A(e);var l;return o?l=A('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):l="",l=e+l+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(c?Ze(null):"")+He({label:he("Verify")})+'</div></div><div class="firebaseui-card-footer">',n?(n='<p class="firebaseui-tos firebaseui-phone-tos">',n=r.F&&r.D?n+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':n+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",r=A(n+"</p>")):r=A('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+De(r),A(l+r+"</div></form></div>")}Hf.a="firebaseui.auth.soy2.page.phoneSignInStart";function $f(e,n,r){e=e||{},n=e.phoneNumber;var o="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+(x(n)+"</a>"),x(n),n=o,o=A('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'),r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+o+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Ze(null)+He({label:he("Continue")})+'</div></div><div class="firebaseui-card-footer">'+De(r)+"</div></form>",e=A('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),A(n+(r+e+"</div>"))}$f.a="firebaseui.auth.soy2.page.phoneSignInFinish";function Wf(){return A('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}Wf.a="firebaseui.auth.soy2.page.signOut";function Gf(e,n,r){var o='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';e=e.ec,n=e.length;for(var c=0;c<n;c++){var l=e[c],h="",g=x(l.displayName),b=l.tenantId?l.tenantId:"top-level-project";b=he(b),h+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+Ue(b)+' firebaseui-id-tenant-selection-button"'+(l.tenantId?'data-tenant-id="'+Ue(l.tenantId)+'"':"")+'style="background-color:'+Ue(Jl(l.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+Ue(Sn(l.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',l.V?h+=x(l.V):(l="Sign in to "+x(l.displayName),h+=l),h=A(h+('</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+g+"</span></button>")),o+='<li class="firebaseui-list-item">'+h+"</li>"}return o+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Si(r)+"</div></div>",A(o)}Gf.a="firebaseui.auth.soy2.page.selectTenant";function Kf(e,n,r){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Ei(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+He(null)+'</div></div><div class="firebaseui-card-footer">'+Si(r)+"</div></form></div>",A(e)}Kf.a="firebaseui.auth.soy2.page.providerMatchByEmail";function Ae(){return W(this,"firebaseui-id-submit")}function Se(){return W(this,"firebaseui-id-secondary-link")}function Oe(e,n){ce(this,Ae.call(this),function(o){e(o)});var r=Se.call(this);r&&n&&ce(this,r,function(o){n(o)})}function Ro(){return W(this,"firebaseui-id-password")}function Po(){return W(this,"firebaseui-id-password-error")}function qf(){var e=Ro.call(this),n=Po.call(this);Ii(this,e,function(){_i(n)&&(pe(e,!0),Xe(n))})}function zf(){var e=Ro.call(this),n=Po.call(this);return Re(e)?(pe(e,!0),Xe(n),n=!0):(pe(e,!1),Pe(n,z("Enter your password").toString()),n=!1),n?Re(e):null}function Ti(e,n,r,o,c,l){_.call(this,If,{email:e},l,"passwordLinking",{F:o,D:c}),this.w=n,this.H=r}p(Ti,_),Ti.prototype.v=function(){this.P(),this.M(this.w,this.H),ki(this,this.i(),this.w),this.i().focus(),_.prototype.v.call(this)},Ti.prototype.o=function(){this.w=null,_.prototype.o.call(this)},Ti.prototype.j=function(){return Re(W(this,"firebaseui-id-email"))},re(Ti.prototype,{i:Ro,B:Po,P:qf,u:zf,ea:Ae,ba:Se,M:Oe});var T0=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Nt(){return W(this,"firebaseui-id-email")}function nn(){return W(this,"firebaseui-id-email-error")}function Ci(e){var n=Nt.call(this),r=nn.call(this);Ii(this,n,function(){_i(r)&&(pe(n,!0),Xe(r))}),e&&Rr(this,n,function(){e()})}function Ai(){return Ke(Re(Nt.call(this))||"")}function Ri(){var e=Nt.call(this),n=nn.call(this),r=Re(e)||"";return r?T0.test(r)?(pe(e,!0),Xe(n),n=!0):(pe(e,!1),Pe(n,z("That email address isn't correct").toString()),n=!1):(pe(e,!1),Pe(n,z("Enter your email address to continue").toString()),n=!1),n?Ke(Re(e)):null}function Or(e,n,r,o,c,l,h){_.call(this,uf,{email:r,ia:!!l},h,"passwordSignIn",{F:o,D:c}),this.w=e,this.H=n}p(Or,_),Or.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Pr(this,this.l(),this.i()),ki(this,this.i(),this.w),Re(this.l())?this.i().focus():this.l().focus(),_.prototype.v.call(this)},Or.prototype.o=function(){this.H=this.w=null,_.prototype.o.call(this)},re(Or.prototype,{l:Nt,U:nn,P:Ci,M:Ai,j:Ri,i:Ro,B:Po,ea:qf,u:zf,ua:Ae,pa:Se,ba:Oe});function Z(e,n,r,o,c,l){_.call(this,e,n,o,c||"notice",l),this.i=r||null}U(Z,_),Z.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Z.K.v.call(this)},Z.prototype.o=function(){this.i=null,Z.K.o.call(this)},re(Z.prototype,{l:Ae,w:Se,u:Oe});function Oo(e,n,r,o,c){Z.call(this,hf,{email:e,G:!!n},n,c,"passwordRecoveryEmailSent",{F:r,D:o})}U(Oo,Z);function Yf(e,n){Z.call(this,Nf,{G:!!e},e,n,"emailVerificationSuccess")}U(Yf,Z);function Jf(e,n){Z.call(this,Df,{G:!!e},e,n,"emailVerificationFailure")}U(Jf,Z);function Xf(e,n,r){Z.call(this,Lf,{email:e,G:!!n},n,r,"verifyAndChangeEmailSuccess")}U(Xf,Z);function Zf(e,n){Z.call(this,Mf,{G:!!e},e,n,"verifyAndChangeEmailFailure")}U(Zf,Z);function Qf(e,n){Z.call(this,Uf,{G:!!e},e,n,"revertSecondFactorAdditionFailure")}U(Qf,Z);function ep(e){Z.call(this,Wf,void 0,void 0,e,"signOut")}U(ep,Z);function tp(e,n){Z.call(this,Af,{G:!!e},e,n,"passwordResetSuccess")}U(tp,Z);function np(e,n){Z.call(this,Rf,{G:!!e},e,n,"passwordResetFailure")}U(np,Z);function ip(e,n){Z.call(this,Of,{G:!!e},e,n,"emailChangeRevokeFailure")}U(ip,Z);function rp(e,n,r){Z.call(this,Ff,{errorMessage:e,zb:!!n},n,r,"recoverableError")}U(rp,Z);function sp(e,n){Z.call(this,jf,{errorMessage:e},void 0,n,"unrecoverableError")}U(sp,Z);function Nr(e){if(e.code==="auth/invalid-credential"&&e.message&&e.message.indexOf("error=consent_required")!==-1)return{code:"auth/user-cancelled"};if(e.message&&e.message.indexOf("HTTP Cloud Function returned an error:")!==-1){var n=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:n&&n.error&&n.error.message||e.message}}return e}function Dt(e,n,r,o){function c(h){if(!h.name||h.name!="cancel"){e:{var g=h.message;try{var b=((JSON.parse(g).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(b&&b.length){var T=!0;break e}}catch{}T=!1}if(T)h=oe(n),n.m(),ie(e,h,void 0,z("Your sign-in session has expired. Please try again.").toString());else{if(T=h&&h.message||"",h.code){if(h.code=="auth/email-already-in-use"||h.code=="auth/credential-already-in-use")return;T=ee(h)}n.a(T)}}}if(Cp(e),o)return op(e,r),fe();if(!r.credential)throw Error("No credential found!");if(!H(e).currentUser&&!r.user)throw Error("User not logged in.");try{var l=rb(e,r)}catch(h){return Ye(h.code||h.message,h),n.a(h.code||h.message),fe()}return r=l.then(function(h){op(e,h)},c).then(void 0,c),F(e,l),fe(r)}function op(e,n){if(!n.user)throw Error("No user found");var r=Ch(E(e));if(Nc(E(e))&&r&&en("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),r){r=Ch(E(e));var o=oh(M(e))||void 0;Ve(yr,M(e));var c=!1;Td()?((!r||r(n,o))&&(c=!0,ei(window.opener.location,No(e,o))),r||window.close()):(!r||r(n,o))&&(c=!0,ei(window.location,No(e,o))),c||e.reset()}else{r=n.user,n=n.credential,o=Nc(E(e)),c=oh(M(e))||void 0,Ve(yr,M(e));var l=!1;Td()?((!o||o(r,n,c))&&(l=!0,ei(window.opener.location,No(e,c))),o||window.close()):(!o||o(r,n,c))&&(l=!0,ei(window.location,No(e,c))),l||e.reset()}}function No(e,n){if(e=n||E(e).a.get("signInSuccessUrl"),!e)throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function ee(e){var n={code:e.code};n=n||{};var r="";switch(n.code){case"auth/email-already-in-use":r+="The email address is already used by another account";break;case"auth/requires-recent-login":r+=td();break;case"auth/too-many-requests":r+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":r+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":r+="That email address doesn't match an existing account";break;case"auth/user-token-expired":r+=td();break;case"auth/weak-password":r+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":r+="The email and password you entered don't match";break;case"auth/network-request-failed":r+="A network error has occurred";break;case"auth/invalid-phone-number":r+=Ka();break;case"auth/invalid-verification-code":r+=z("Wrong code. Try again.");break;case"auth/code-expired":r+="This code is no longer valid";break;case"auth/expired-action-code":r+="This code has expired.";break;case"auth/invalid-action-code":r+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(n=z(r).toString())return n;try{return JSON.parse(e.message),Ye("Internal error: "+e.message,void 0),Zl().toString()}catch{return e.message}}function C0(e,n,r){var o=hi[n]&&O.auth[hi[n]]?new O.auth[hi[n]]:n.indexOf("saml.")==0?new O.auth.SAMLAuthProvider(n):new O.auth.OAuthProvider(n);if(!o)throw Error("Invalid Firebase Auth provider!");var c=_h(E(e),n);if(o.addScope)for(var l=0;l<c.length;l++)o.addScope(c[l]);return c=Eh(E(e),n)||{},r&&(n==O.auth.GoogleAuthProvider.PROVIDER_ID?e="login_hint":n==O.auth.GithubAuthProvider.PROVIDER_ID?e="login":e=(e=Ir(E(e),n))&&e.Ob,e&&(c[e]=r)),o.setCustomParameters&&o.setCustomParameters(c),o}function Dr(e,n,r,o){function c(){t0(new Wd(e.h.tenantId||null),M(e)),F(e,n.I(J(e.dc,e),[b],function(){if((window.location&&window.location.protocol)==="file:")return F(e,_p(e).then(function(T){n.m(),Ve(Pn,M(e)),P("callback",e,g,fe(T))},l))},h))}function l(T){if(Ve(Pn,M(e)),!T.name||T.name!="cancel")switch(T=Nr(T),T.code){case"auth/popup-blocked":c();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":break;case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":n.a(ee(T));break;case"auth/admin-restricted-operation":n.m(),Nn(E(e))?P("handleUnauthorizedUser",e,g,null,r):P("callback",e,g,ti(T));break;default:n.m(),P("callback",e,g,ti(T))}}function h(T){Ve(Pn,M(e)),T.name&&T.name=="cancel"||(Ye("signInWithRedirect: "+T.code,void 0),T=ee(T),n.Ga=="blank"&&Oc(E(e))?(n.m(),P("providerSignIn",e,g,T)):n.a(T))}var g=oe(n),b=C0(e,r,o);Th(E(e))==_o?c():F(e,ib(e,b).then(function(T){n.m(),P("callback",e,g,fe(T))},l))}function A0(e,n){F(e,n.I(J(e.$b,e),[],function(r){return n.m(),Dt(e,n,r,!0)},function(r){r.name&&r.name=="cancel"||(Ye("ContinueAsGuest: "+r.code,void 0),r=ee(r),n.a(r))}))}function R0(e,n,r){function o(l){var h=!1;return l=n.I(J(e.ac,e),[l],function(g){var b=oe(n);n.m(),P("callback",e,b,fe(g)),h=!0},function(g){if((!g.name||g.name!="cancel")&&(!g||g.code!="auth/credential-already-in-use"))if(g&&g.code=="auth/email-already-in-use"&&g.email&&g.credential){var b=oe(n);n.m(),P("callback",e,b,ti(g))}else g&&g.code=="auth/admin-restricted-operation"&&Nn(E(e))?(g=oe(n),n.m(),P("handleUnauthorizedUser",e,g,null,O.auth.GoogleAuthProvider.PROVIDER_ID)):(g=ee(g),n.a(g))}),F(e,l),l.then(function(){return h},function(){return!1})}if(r&&r.credential&&r.clientId===wh(E(e))){if(_h(E(e),O.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var c=JSON.parse(atob(r.credential.split(".")[1])).email}catch{}return Dr(e,n,O.auth.GoogleAuthProvider.PROVIDER_ID,c),fe(!0)}return o(O.auth.GoogleAuthProvider.credential(r.credential))}return r&&n.a(z("The selected credential for the authentication provider is not supported!").toString()),fe(!1)}function P0(e,n){var r=n.j(),o=n.u();if(r)if(o){var c=O.auth.EmailAuthProvider.credential(r,o);F(e,n.I(J(e.bc,e),[r,o],function(l){return Dt(e,n,{user:l.user,credential:c,operationType:l.operationType,additionalUserInfo:l.additionalUserInfo})},function(l){if(!l.name||l.name!="cancel")switch(l.code){case"auth/email-already-in-use":break;case"auth/email-exists":pe(n.l(),!1),Pe(n.U(),ee(l));break;case"auth/too-many-requests":case"auth/wrong-password":pe(n.i(),!1),Pe(n.B(),ee(l));break;default:Ye("verifyPassword: "+l.message,void 0),n.a(ee(l))}}))}else n.i().focus();else n.l().focus()}function Do(e){return e=fi(E(e)),e.length==1&&e[0]==O.auth.EmailAuthProvider.PROVIDER_ID}function ap(e){return e=fi(E(e)),e.length==1&&e[0]==O.auth.PhoneAuthProvider.PROVIDER_ID}function ie(e,n,r,o){Do(e)?o?P("signIn",e,n,r,o):zc(e,n,r):e&&ap(e)&&!o?P("phoneSignInStart",e,n):e&&Oc(E(e))&&!o?P("federatedRedirect",e,n,r):P("providerSignIn",e,n,o,r)}function cp(e,n,r,o){var c=oe(n);F(e,n.I(J(H(e).fetchSignInMethodsForEmail,H(e)),[r],function(l){n.m(),up(e,c,l,r,o)},function(l){l=ee(l),n.a(l)}))}function up(e,n,r,o,c,l){r.length||pi(E(e))&&!pi(E(e))?rt(r,O.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?P("passwordSignIn",e,n,o,l):r.length==1&&r[0]===O.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?pi(E(e))?P("sendEmailLinkForSignIn",e,n,o,function(){P("signIn",e,n)}):P("unsupportedProvider",e,n,o):(r=vh(r,fi(E(e))))?(ah(new yc(o),M(e)),P("federatedSignIn",e,n,o,r,c)):P("unsupportedProvider",e,n,o):Ih(E(e))?P("handleUnauthorizedUser",e,n,o,O.auth.EmailAuthProvider.PROVIDER_ID):pi(E(e))?P("sendEmailLinkForSignIn",e,n,o,function(){P("signIn",e,n)}):P("passwordSignUp",e,n,o,void 0,void 0,l)}function qc(e,n,r,o,c,l){var h=oe(n);F(e,n.I(J(e.Ib,e),[r,l],function(){n.m(),P("emailLinkSignInSent",e,h,r,o,l)},c))}function zc(e,n,r){r?P("prefilledEmailSignIn",e,n,r):P("signIn",e,n)}function Lr(){return Ls(Ot(),"oobCode")}function Yc(){var e=Ls(Ot(),"continueUrl");return e?function(){ei(window.location,e)}:null}function Mr(e,n){_.call(this,wf,void 0,n,"anonymousUserMismatch"),this.i=e}p(Mr,_),Mr.prototype.v=function(){var e=this;ce(this,this.l(),function(){e.i()}),this.l().focus(),_.prototype.v.call(this)},Mr.prototype.o=function(){this.i=null,_.prototype.o.call(this)},re(Mr.prototype,{l:Se}),X.anonymousUserMismatch=function(e,n){var r=new Mr(function(){r.m(),ie(e,n)});r.render(n),B(e,r)};function Lo(e){_.call(this,ff,void 0,e,"callback")}p(Lo,_),Lo.prototype.I=function(e,n,r,o){return e.apply(null,n).then(r,o)};function lp(e,n,r){if(r.user){var o={user:r.user,credential:r.credential,operationType:r.operationType,additionalUserInfo:r.additionalUserInfo},c=vt(M(e)),l=c&&c.g;if(l&&!N0(r.user,l))O0(e,n,o);else{var h=c&&c.a;h?F(e,r.user.linkWithCredential(h).then(function(g){o={user:g.user,credential:h,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo},dp(e,n,o)},function(g){Mo(e,n,g)})):dp(e,n,o)}}else r=oe(n),n.m(),yt(M(e)),ie(e,r)}function dp(e,n,r){yt(M(e)),Dt(e,n,r)}function Mo(e,n,r){var o=oe(n);yt(M(e)),r=ee(r),n.m(),ie(e,o,void 0,r)}function hp(e,n,r,o){var c=oe(n);F(e,H(e).fetchSignInMethodsForEmail(r).then(function(l){n.m(),l.length?rt(l,O.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?P("passwordLinking",e,c,r):l.length==1&&l[0]===O.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?P("emailLinkSignInLinking",e,c,r):(l=vh(l,fi(E(e))))?P("federatedLinking",e,c,r,l,o):(yt(M(e)),P("unsupportedProvider",e,c,r)):(yt(M(e)),P("passwordRecovery",e,c,r,!1,Ql().toString()))},function(l){Mo(e,n,l)}))}function O0(e,n,r){var o=oe(n);F(e,rn(e).then(function(){n.m(),P("emailMismatch",e,o,r)},function(c){c.name&&c.name=="cancel"||(c=ee(c.code),n.a(c))}))}function N0(e,n){if(n==e.email)return!0;if(e.providerData){for(var r=0;r<e.providerData.length;r++)if(n==e.providerData[r].email)return!0}return!1}X.callback=function(e,n,r){var o=new Lo;o.render(n),B(e,o),r=r||_p(e),F(e,r.then(function(c){lp(e,o,c)},function(c){if((c=Nr(c))&&(c.code=="auth/account-exists-with-different-credential"||c.code=="auth/email-already-in-use")&&c.email&&c.credential)ah(new yc(c.email,c.credential),M(e)),hp(e,o,c.email);else if(c&&c.code=="auth/user-cancelled"){var l=vt(M(e)),h=ee(c);l&&l.a?hp(e,o,l.g,h):l?cp(e,o,l.g,h):Mo(e,o,c)}else c&&c.code=="auth/credential-already-in-use"||(c&&c.code=="auth/operation-not-supported-in-this-environment"&&Do(e)?lp(e,o,{user:null,credential:null}):c&&c.code=="auth/admin-restricted-operation"&&Nn(E(e))?(o.m(),yt(M(e)),P("handleUnauthorizedUser",e,n,null,null)):Mo(e,o,c))}))};function xr(e,n){_.call(this,bf,void 0,n,"differentDeviceError"),this.i=e}p(xr,_),xr.prototype.v=function(){var e=this;ce(this,this.l(),function(){e.i()}),this.l().focus(),_.prototype.v.call(this)},xr.prototype.o=function(){this.i=null,_.prototype.o.call(this)},re(xr.prototype,{l:Se}),X.differentDeviceError=function(e,n){var r=new xr(function(){r.m(),ie(e,n)});r.render(n),B(e,r)};function Ur(e,n,r,o){_.call(this,Pf,{email:e,G:!!r},o,"emailChangeRevoke"),this.l=n,this.i=r||null}p(Ur,_),Ur.prototype.v=function(){var e=this;ce(this,W(this,"firebaseui-id-reset-password-link"),function(){e.l()}),this.i&&(this.w(this.i),this.u().focus()),_.prototype.v.call(this)},Ur.prototype.o=function(){this.l=this.i=null,_.prototype.o.call(this)},re(Ur.prototype,{u:Ae,B:Se,w:Oe});function Fr(){return W(this,"firebaseui-id-new-password")}function xo(){return W(this,"firebaseui-id-password-toggle")}function D0(){this.Ra=!this.Ra;var e=xo.call(this),n=Fr.call(this);this.Ra?(n.type="text",bt(e,"firebaseui-input-toggle-off"),wt(e,"firebaseui-input-toggle-on")):(n.type="password",bt(e,"firebaseui-input-toggle-on"),wt(e,"firebaseui-input-toggle-off")),n.focus()}function Uo(){return W(this,"firebaseui-id-new-password-error")}function fp(){this.Ra=!1;var e=Fr.call(this);e.type="password";var n=Uo.call(this);Ii(this,e,function(){_i(n)&&(pe(e,!0),Xe(n))});var r=xo.call(this);bt(r,"firebaseui-input-toggle-on"),wt(r,"firebaseui-input-toggle-off"),I0(this,e,function(){bt(r,"firebaseui-input-toggle-focus"),wt(r,"firebaseui-input-toggle-blur")}),_0(this,e,function(){bt(r,"firebaseui-input-toggle-blur"),wt(r,"firebaseui-input-toggle-focus")}),ce(this,r,J(D0,this))}function pp(){var e=Fr.call(this),n=Uo.call(this);return Re(e)?(pe(e,!0),Xe(n),n=!0):(pe(e,!1),Pe(n,z("Enter your password").toString()),n=!1),n?Re(e):null}function jr(e,n,r){_.call(this,Cf,{email:e},r,"passwordReset"),this.l=n}p(jr,_),jr.prototype.v=function(){this.H(),this.B(this.l),ki(this,this.i(),this.l),this.i().focus(),_.prototype.v.call(this)},jr.prototype.o=function(){this.l=null,_.prototype.o.call(this)},re(jr.prototype,{i:Fr,w:Uo,M:xo,H:fp,u:pp,U:Ae,P:Se,B:Oe});function Br(e,n,r,o,c){_.call(this,xf,{factorId:e,phoneNumber:r||null,G:!!o},c,"revertSecondFactorAdditionSuccess"),this.l=n,this.i=o||null}p(Br,_),Br.prototype.v=function(){var e=this;ce(this,W(this,"firebaseui-id-reset-password-link"),function(){e.l()}),this.i&&(this.w(this.i),this.u().focus()),_.prototype.v.call(this)},Br.prototype.o=function(){this.l=this.i=null,_.prototype.o.call(this)},re(Br.prototype,{u:Ae,B:Se,w:Oe});function L0(e,n,r,o,c){var l=r.u();l&&F(e,r.I(J(H(e).confirmPasswordReset,H(e)),[o,l],function(){r.m();var h=new tp(c);h.render(n),B(e,h)},function(h){mp(e,n,r,h)}))}function mp(e,n,r,o){(o&&o.code)=="auth/weak-password"?(e=ee(o),pe(r.i(),!1),Pe(r.w(),e),r.i().focus()):(r&&r.m(),r=new np,r.render(n),B(e,r))}function M0(e,n,r){var o=new Ur(r,function(){F(e,o.I(J(H(e).sendPasswordResetEmail,H(e)),[r],function(){o.m(),o=new Oo(r,void 0,be(E(e)),we(E(e))),o.render(n),B(e,o)},function(){o.a(Xl().toString())}))});o.render(n),B(e,o)}function x0(e,n,r,o){var c=new Br(o.factorId,function(){c.I(J(H(e).sendPasswordResetEmail,H(e)),[r],function(){c.m(),c=new Oo(r,void 0,be(E(e)),we(E(e))),c.render(n),B(e,c)},function(){c.a(Xl().toString())})},o.phoneNumber);c.render(n),B(e,c)}X.passwordReset=function(e,n,r,o){F(e,H(e).verifyPasswordResetCode(r).then(function(c){var l=new jr(c,function(){L0(e,n,l,r,o)});l.render(n),B(e,l)},function(){mp(e,n)}))},X.emailChangeRevocation=function(e,n,r){var o=null;F(e,H(e).checkActionCode(r).then(function(c){return o=c.data.email,H(e).applyActionCode(r)}).then(function(){M0(e,n,o)},function(){var c=new ip;c.render(n),B(e,c)}))},X.emailVerification=function(e,n,r,o){F(e,H(e).applyActionCode(r).then(function(){var c=new Yf(o);c.render(n),B(e,c)},function(){var c=new Jf;c.render(n),B(e,c)}))},X.revertSecondFactorAddition=function(e,n,r){var o=null,c=null;F(e,H(e).checkActionCode(r).then(function(l){return o=l.data.email,c=l.data.multiFactorInfo,H(e).applyActionCode(r)}).then(function(){x0(e,n,o,c)},function(){var l=new Qf;l.render(n),B(e,l)}))},X.verifyAndChangeEmail=function(e,n,r,o){var c=null;F(e,H(e).checkActionCode(r).then(function(l){return c=l.data.email,H(e).applyActionCode(r)}).then(function(){var l=new Xf(c,o);l.render(n),B(e,l)},function(){var l=new Zf;l.render(n),B(e,l)}))};function Fo(e,n){try{var r=typeof e.selectionStart=="number"}catch{r=!1}r?(e.selectionStart=n,e.selectionEnd=n):de&&!In("9")&&(e.type=="textarea"&&(n=e.value.substring(0,n).replace(/(\r\n|\r|\n)/g,`
`).length),e=e.createTextRange(),e.collapse(!0),e.move("character",n),e.select())}function Vr(e,n,r,o,c,l){_.call(this,yf,{email:r},l,"emailLinkSignInConfirmation",{F:o,D:c}),this.l=e,this.u=n}p(Vr,_),Vr.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Fo(this.i(),(this.i().value||"").length),_.prototype.v.call(this)},Vr.prototype.o=function(){this.u=this.l=null,_.prototype.o.call(this)},re(Vr.prototype,{i:Nt,M:nn,w:Ci,H:Ai,j:Ri,U:Ae,P:Se,B:Oe}),X.emailLinkConfirmation=function(e,n,r,o,c,l){var h=new Vr(function(){var g=h.j();g?(h.m(),o(e,n,g,r)):h.i().focus()},function(){h.m(),ie(e,n,c||void 0)},c||void 0,be(E(e)),we(E(e)));h.render(n),B(e,h),l&&h.a(l)};function Hr(e,n,r,o,c){_.call(this,Ef,{ga:e},c,"emailLinkSignInLinkingDifferentDevice",{F:r,D:o}),this.i=n}p(Hr,_),Hr.prototype.v=function(){this.u(this.i),this.l().focus(),_.prototype.v.call(this)},Hr.prototype.o=function(){this.i=null,_.prototype.o.call(this)},re(Hr.prototype,{l:Ae,u:Oe}),X.emailLinkNewDeviceLinking=function(e,n,r,o){var c=new wn(r);if(r=c.a.a.get(Ie.PROVIDER_ID)||null,Al(c,null),r){var l=new Hr(Ir(E(e),r),function(){l.m(),o(e,n,c.toString())},be(E(e)),we(E(e)));l.render(n),B(e,l)}else ie(e,n)};function jo(e){_.call(this,mf,void 0,e,"blank")}p(jo,_);function Jc(e,n,r,o,c){var l=new jo,h=new wn(r),g=h.a.a.get(Ie.$a)||"",b=h.a.a.get(Ie.Sa)||"",T=h.a.a.get(Ie.Qa)==="1",N=Cl(h),Q=h.a.a.get(Ie.PROVIDER_ID)||null;h=h.a.a.get(Ie.vb)||null,Ap(e,h);var ft=!li(ui,M(e)),Dp=o||n0(b,M(e)),ts=(o=i0(b,M(e)))&&o.a;Q&&ts&&ts.providerId!==Q&&(ts=null),l.render(n),B(e,l),F(e,l.I(function(){var st=fe(null);st=N&&ft||ft&&T?ti(Error("anonymous-user-not-found")):eb(e,r).then(function(au){if(Q&&!ts)throw Error("pending-credential-not-found");return au});var ns=null;return st.then(function(au){return ns=au,c?null:H(e).checkActionCode(g)}).then(function(){return ns})},[],function(st){Dp?F0(e,l,Dp,r,ts,st):T?(l.m(),P("differentDeviceError",e,n)):(l.m(),P("emailLinkConfirmation",e,n,r,gp))},function(st){var ns=void 0;if(!st||!st.name||st.name!="cancel")switch(l.m(),st&&st.message){case"anonymous-user-not-found":P("differentDeviceError",e,n);break;case"anonymous-user-mismatch":P("anonymousUserMismatch",e,n);break;case"pending-credential-not-found":P("emailLinkNewDeviceLinking",e,n,r,U0);break;default:st&&(ns=ee(st)),ie(e,n,void 0,ns)}}))}function gp(e,n,r,o){Jc(e,n,o,r,!0)}function U0(e,n,r){Jc(e,n,r)}function F0(e,n,r,o,c,l){var h=oe(n);n.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",z("Signing in...").toString());var g=null;c=(l?tb(e,l,r,o,c):nb(e,r,o,c)).then(function(b){Ve(br,M(e)),Ve(ui,M(e)),n.h(),n.$("firebaseui-icon-done",z("Signed in!").toString()),g=setTimeout(function(){n.h(),Dt(e,n,b,!0)},1e3),F(e,function(){n&&(n.h(),n.m()),clearTimeout(g)})},function(b){if(n.h(),n.m(),!b.name||b.name!="cancel"){b=Nr(b);var T=ee(b);b.code=="auth/email-already-in-use"||b.code=="auth/credential-already-in-use"?(Ve(br,M(e)),Ve(ui,M(e))):b.code=="auth/invalid-email"?(T=z("The email provided does not match the current sign-in session.").toString(),P("emailLinkConfirmation",e,h,o,gp,null,T)):ie(e,h,r,T)}}),F(e,c)}X.emailLinkSignInCallback=Jc;function $r(e,n,r,o,c,l){_.call(this,_f,{email:e,ga:n},l,"emailLinkSignInLinking",{F:o,D:c}),this.i=r}p($r,_),$r.prototype.v=function(){this.u(this.i),this.l().focus(),_.prototype.v.call(this)},$r.prototype.o=function(){this.i=null,_.prototype.o.call(this)},re($r.prototype,{l:Ae,u:Oe});function j0(e,n,r,o){var c=oe(n);qc(e,n,r,function(){ie(e,c,r)},function(l){if(!l.name||l.name!="cancel"){var h=ee(l);l&&l.code=="auth/network-request-failed"?n.a(h):(n.m(),ie(e,c,r,h))}},o)}X.emailLinkSignInLinking=function(e,n,r){var o=vt(M(e));if(yt(M(e)),o){var c=o.a.providerId,l=new $r(r,Ir(E(e),c),function(){j0(e,l,r,o)},be(E(e)),we(E(e)));l.render(n),B(e,l)}else ie(e,n)};function Wr(e,n,r,o,c,l){_.call(this,gf,{email:e},l,"emailLinkSignInSent",{F:o,D:c}),this.u=n,this.i=r}p(Wr,_),Wr.prototype.v=function(){var e=this;ce(this,this.l(),function(){e.i()}),ce(this,W(this,"firebaseui-id-trouble-getting-email-link"),function(){e.u()}),this.l().focus(),_.prototype.v.call(this)},Wr.prototype.o=function(){this.i=this.u=null,_.prototype.o.call(this)},re(Wr.prototype,{l:Se}),X.emailLinkSignInSent=function(e,n,r,o,c){var l=new Wr(r,function(){l.m(),P("emailNotReceived",e,n,r,o,c)},function(){l.m(),o()},be(E(e)),we(E(e)));l.render(n),B(e,l)};function Gr(e,n,r,o,c,l,h){_.call(this,Bf,{jc:e,Qb:n},h,"emailMismatch",{F:c,D:l}),this.l=r,this.i=o}p(Gr,_),Gr.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),_.prototype.v.call(this)},Gr.prototype.o=function(){this.i=null,_.prototype.o.call(this)},re(Gr.prototype,{u:Ae,B:Se,w:Oe}),X.emailMismatch=function(e,n,r){var o=vt(M(e));if(o){var c=new Gr(r.user.email,o.g,function(){var l=c;yt(M(e)),Dt(e,l,r)},function(){var l=r.credential.providerId,h=oe(c);c.m(),o.a?P("federatedLinking",e,h,o.g,l):P("federatedSignIn",e,h,o.g,l)},be(E(e)),we(E(e)));c.render(n),B(e,c)}else ie(e,n)};function Pi(e,n,r,o,c){_.call(this,vf,void 0,c,"emailNotReceived",{F:r,D:o}),this.l=e,this.i=n}p(Pi,_),Pi.prototype.v=function(){var e=this;ce(this,this.u(),function(){e.i()}),ce(this,this.Da(),function(){e.l()}),this.u().focus(),_.prototype.v.call(this)},Pi.prototype.Da=function(){return W(this,"firebaseui-id-resend-email-link")},Pi.prototype.o=function(){this.i=this.l=null,_.prototype.o.call(this)},re(Pi.prototype,{u:Se}),X.emailNotReceived=function(e,n,r,o,c){var l=new Pi(function(){qc(e,l,r,o,function(h){h=ee(h),l.a(h)},c)},function(){l.m(),ie(e,n,r)},be(E(e)),we(E(e)));l.render(n),B(e,l)};function Oi(e,n,r,o,c,l){_.call(this,Sf,{email:e,ga:n},l,"federatedLinking",{F:o,D:c}),this.i=r}p(Oi,_),Oi.prototype.v=function(){this.u(this.i),this.l().focus(),_.prototype.v.call(this)},Oi.prototype.o=function(){this.i=null,_.prototype.o.call(this)},re(Oi.prototype,{l:Ae,u:Oe}),X.federatedLinking=function(e,n,r,o,c){var l=vt(M(e));if(l&&l.a){var h=new Oi(r,Ir(E(e),o),function(){Dr(e,h,o,r)},be(E(e)),we(E(e)));h.render(n),B(e,h),c&&h.a(c)}else ie(e,n)},X.federatedRedirect=function(e,n,r){var o=new jo;o.render(n),B(e,o),n=fi(E(e))[0],Dr(e,o,n,r)},X.federatedSignIn=function(e,n,r,o,c){var l=new Oi(r,Ir(E(e),o),function(){Dr(e,l,o,r)},be(E(e)),we(E(e)));l.render(n),B(e,l),c&&l.a(c)};function B0(e,n,r,o){var c=n.u();c?F(e,n.I(J(e.Xb,e),[r,c],function(l){return l=l.user.linkWithCredential(o).then(function(h){return Dt(e,n,{user:h.user,credential:o,operationType:h.operationType,additionalUserInfo:h.additionalUserInfo})}),F(e,l),l},function(l){if(!l.name||l.name!="cancel")switch(l.code){case"auth/wrong-password":pe(n.i(),!1),Pe(n.B(),ee(l));break;case"auth/too-many-requests":n.a(ee(l));break;default:Ye("signInWithEmailAndPassword: "+l.message,void 0),n.a(ee(l))}})):n.i().focus()}X.passwordLinking=function(e,n,r){var o=vt(M(e));yt(M(e));var c=o&&o.a;if(c){var l=new Ti(r,function(){B0(e,l,r,c)},function(){l.m(),P("passwordRecovery",e,n,r)},be(E(e)),we(E(e)));l.render(n),B(e,l)}else ie(e,n)};function Kr(e,n,r,o,c,l){_.call(this,df,{email:r,Ta:!!n},l,"passwordRecovery",{F:o,D:c}),this.l=e,this.u=n}p(Kr,_),Kr.prototype.v=function(){this.B(),this.H(this.l,this.u),Re(this.i())||this.i().focus(),ki(this,this.i(),this.l),_.prototype.v.call(this)},Kr.prototype.o=function(){this.u=this.l=null,_.prototype.o.call(this)},re(Kr.prototype,{i:Nt,w:nn,B:Ci,M:Ai,j:Ri,U:Ae,P:Se,H:Oe});function V0(e,n){var r=n.j();if(r){var o=oe(n);F(e,n.I(J(H(e).sendPasswordResetEmail,H(e)),[r],function(){n.m();var c=new Oo(r,function(){c.m(),ie(e,o)},be(E(e)),we(E(e)));c.render(o),B(e,c)},function(c){pe(n.i(),!1),Pe(n.w(),ee(c))}))}else n.i().focus()}X.passwordRecovery=function(e,n,r,o,c){var l=new Kr(function(){V0(e,l)},o?void 0:function(){l.m(),ie(e,n)},r,be(E(e)),we(E(e)));l.render(n),B(e,l),c&&l.a(c)},X.passwordSignIn=function(e,n,r,o){var c=new Or(function(){P0(e,c)},function(){var l=c.M();c.m(),P("passwordRecovery",e,n,l)},r,be(E(e)),we(E(e)),o);c.render(n),B(e,c)};function Xc(){return W(this,"firebaseui-id-name")}function Zc(){return W(this,"firebaseui-id-name-error")}function qr(e,n,r,o,c,l,h,g,b){_.call(this,lf,{email:o,Tb:e,name:c,Ta:!!r,ia:!!g},b,"passwordSignUp",{F:l,D:h}),this.w=n,this.H=r,this.B=e}p(qr,_),qr.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Pr(this,this.i(),this.u()),Pr(this,this.u(),this.l())):Pr(this,this.i(),this.l()),this.w&&ki(this,this.l(),this.w),Re(this.i())?this.B&&!Re(this.u())?this.u().focus():this.l().focus():this.i().focus(),_.prototype.v.call(this)},qr.prototype.o=function(){this.H=this.w=null,_.prototype.o.call(this)},re(qr.prototype,{i:Nt,U:nn,ea:Ci,jb:Ai,j:Ri,u:Xc,Bc:Zc,Ja:function(){var e=Xc.call(this),n=Zc.call(this);Ii(this,e,function(){_i(n)&&(pe(e,!0),Xe(n))})},M:function(){var e=Xc.call(this),n=Zc.call(this),r=Re(e);return r=!/^[\s\xa0]*$/.test(r==null?"":String(r)),pe(e,r),r?(Xe(n),n=!0):(Pe(n,z("Enter your account name").toString()),n=!1),n?Ke(Re(e)):null},l:Fr,ba:Uo,lb:xo,ua:fp,P:pp,Nb:Ae,Mb:Se,pa:Oe});function H0(e,n){var r=kh(E(e)),o=n.j(),c=null;r&&(c=n.M());var l=n.P();if(o){if(r)if(c)c=zn(c);else{n.u().focus();return}if(l){var h=O.auth.EmailAuthProvider.credential(o,l);F(e,n.I(J(e.Yb,e),[o,l],function(g){var b={user:g.user,credential:h,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo};return r?(g=g.user.updateProfile({displayName:c}).then(function(){return Dt(e,n,b)}),F(e,g),g):Dt(e,n,b)},function(g){if(!g.name||g.name!="cancel"){var b=Nr(g);switch(g=ee(b),b.code){case"auth/email-already-in-use":return $0(e,n,o,b);case"auth/too-many-requests":g=z("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":pe(n.l(),!1),Pe(n.ba(),g);break;case"auth/admin-restricted-operation":Nn(E(e))?(g=oe(n),n.m(),P("handleUnauthorizedUser",e,g,o,O.auth.EmailAuthProvider.PROVIDER_ID)):n.a(g);break;default:b="setAccountInfo: "+th(b),Ye(b,void 0),n.a(g)}}}))}else n.l().focus()}else n.i().focus()}function $0(e,n,r,o){function c(){var h=ee(o);pe(n.i(),!1),Pe(n.U(),h),n.i().focus()}var l=H(e).fetchSignInMethodsForEmail(r).then(function(h){h.length?c():(h=oe(n),n.m(),P("passwordRecovery",e,h,r,!1,Ql().toString()))},function(){c()});return F(e,l),l}X.passwordSignUp=function(e,n,r,o,c,l){function h(){g.m(),ie(e,n)}var g=new qr(kh(E(e)),function(){H0(e,g)},c?void 0:h,r,o,be(E(e)),we(E(e)),l);g.render(n),B(e,g)};function Qc(){return W(this,"firebaseui-id-phone-confirmation-code")}function vp(){return W(this,"firebaseui-id-phone-confirmation-code-error")}function yp(){return W(this,"firebaseui-id-resend-countdown")}function Ni(e,n,r,o,c,l,h,g,b){_.call(this,$f,{phoneNumber:c},b,"phoneSignInFinish",{F:h,D:g}),this.jb=l,this.i=new Eo(1e3),this.B=l,this.P=e,this.l=n,this.H=r,this.M=o}p(Ni,_),Ni.prototype.v=function(){var e=this;this.U(this.jb),ut(this.i,"tick",this.w,!1,this),this.i.start(),ce(this,W(this,"firebaseui-id-change-phone-number-link"),function(){e.P()}),ce(this,this.Da(),function(){e.M()}),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),_.prototype.v.call(this)},Ni.prototype.o=function(){this.M=this.H=this.l=this.P=null,So(this.i),Tn(this.i,"tick",this.w),this.i=null,_.prototype.o.call(this)},Ni.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(So(this.i),Tn(this.i,"tick",this.w),this.ua(),this.lb())},re(Ni.prototype,{u:Qc,pa:vp,Ja:function(e){var n=Qc.call(this),r=vp.call(this);Ii(this,n,function(){_i(r)&&(pe(n,!0),Xe(r))}),e&&Rr(this,n,function(){e()})},ba:function(){var e=Ke(Re(Qc.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:yp,U:function(e){Ha(yp.call(this),z("Resend code in "+((9<e?"0:":"0:0")+e)).toString())},ua:function(){Xe(this.Fb())},Da:function(){return W(this,"firebaseui-id-resend-link")},lb:function(){Pe(this.Da())},Nb:Ae,Mb:Se,ea:Oe});function W0(e,n,r,o){function c(h){n.u().focus(),pe(n.u(),!1),Pe(n.pa(),h)}var l=n.ba();l?(n.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",z("Verifying...").toString()),F(e,n.I(J(o.confirm,o),[l],function(h){n.h(),n.$("firebaseui-icon-done",z("Verified!").toString());var g=setTimeout(function(){n.h(),n.m();var b={user:dt(e).currentUser,credential:null,operationType:h.operationType,additionalUserInfo:h.additionalUserInfo};Dt(e,n,b,!0)},1e3);F(e,function(){n&&n.h(),clearTimeout(g)})},function(h){if(h.name&&h.name=="cancel")n.h();else{var g=Nr(h);switch(h=ee(g),g.code){case"auth/credential-already-in-use":n.h();break;case"auth/code-expired":g=oe(n),n.h(),n.m(),P("phoneSignInStart",e,g,r,h);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":n.h(),c(h);break;default:n.h(),n.a(h)}}}))):c(z("Wrong code. Try again.").toString())}X.phoneSignInFinish=function(e,n,r,o,c,l){var h=new Ni(function(){h.m(),P("phoneSignInStart",e,n,r)},function(){W0(e,h,r,c)},function(){h.m(),ie(e,n)},function(){h.m(),P("phoneSignInStart",e,n,r)},Rc(r),o,be(E(e)),we(E(e)));h.render(n),B(e,h),l&&h.a(l)};var G0=!de&&!(V("Safari")&&!(Ol()||V("Coast")||V("Opera")||V("Edge")||V("Firefox")||V("FxiOS")||V("Silk")||V("Android")));function Bo(e,n){return/-[a-z]/.test(n)?null:G0&&e.dataset?!V("Android")||Ol()||V("Firefox")||V("FxiOS")||V("Opera")||V("Silk")||n in e.dataset?(e=e.dataset[n],e===void 0?null:e):null:e.getAttribute("data-"+String(n).replace(/([A-Z])/g,"-$1").toLowerCase())}function K0(e,n,r){var o=this;e=sr(tf,{items:e},null,this.s),rf.call(this,e,!0,!0),r&&(r=q0(e,r))&&(r.focus(),w0(r,e)),ce(this,e,function(c){(c=(c=Kl(c.target,"firebaseui-id-list-box-dialog-button"))&&Bo(c,"listboxid"))&&(Ao.call(o),n(c))})}function q0(e,n){e=(e||document).getElementsByTagName("BUTTON");for(var r=0;r<e.length;r++)if(Bo(e[r],"listboxid")===n)return e[r];return null}function Ln(){return W(this,"firebaseui-id-phone-number")}function bp(){return W(this,"firebaseui-id-country-selector")}function eu(){return W(this,"firebaseui-id-phone-number-error")}function z0(e,n){var r=e.a,o=tu("1-US-0",r),c=null;if(n&&tu(n,r)?c=n:o?c="1-US-0":c=0<r.length?r[0].c:null,!c)throw Error("No available default country");Vo.call(this,c,e)}function tu(e,n){return e=On(e),!(!e||!rt(n,e))}function Y0(e){return e.map(function(n){return{id:n.c,Ma:"firebaseui-flag "+nu(n),label:n.name+" "+("‎+"+n.b)}})}function nu(e){return"firebaseui-flag-"+e.f}function J0(e){var n=this;K0.call(this,Y0(e.a),function(r){Vo.call(n,r,e,!0),n.O().focus()},this.Ba)}function Vo(e,n,r){var o=On(e);o&&(r&&(r=Ke(Re(Ln.call(this))||""),n=yo(n,r),n.length&&n[0].b!=o.b&&(r="+"+o.b+r.substr(n[0].b.length+1),Oh(Ln.call(this),r))),n=On(this.Ba),this.Ba=e,e=W(this,"firebaseui-id-country-selector-flag"),n&&wt(e,nu(n)),bt(e,nu(o)),Ha(W(this,"firebaseui-id-country-selector-code"),"‎+"+o.b))}function zr(e,n,r,o,c,l,h,g,b,T){_.call(this,Hf,{Gb:n,Aa:b||null,Va:!!r,ia:!!l},T,"phoneSignInStart",{F:o,D:c}),this.H=g||null,this.M=n,this.l=e,this.w=r||null,this.pa=h||null}p(zr,_),zr.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Pr(this,this.O(),this.i()),ki(this,this.i(),this.l),this.O().focus(),Fo(this.O(),(this.O().value||"").length),_.prototype.v.call(this)},zr.prototype.o=function(){this.w=this.l=null,_.prototype.o.call(this)},re(zr.prototype,{Cb:Gc,O:Ln,B:eu,ea:function(e,n,r){var o=this,c=Ln.call(this),l=bp.call(this),h=eu.call(this),g=e||wr,b=g.a;if(b.length==0)throw Error("No available countries provided.");z0.call(o,g,n),ce(this,l,function(){J0.call(o,g)}),Ii(this,c,function(){_i(h)&&(pe(c,!0),Xe(h));var T=Ke(Re(c)||""),N=On(this.Ba),Q=yo(g,T);T=tu("1-US-0",b),Q.length&&Q[0].b!=N.b&&(N=Q[0],Vo.call(o,N.b=="1"&&T?"1-US-0":N.c,g))}),r&&Rr(this,c,function(){r()})},U:function(e){var n=Ke(Re(Ln.call(this))||"");e=e||wr;var r=e.a,o=yo(wr,n);if(o.length&&!rt(r,o[0]))throw Oh(Ln.call(this)),Ln.call(this).focus(),Pe(eu.call(this),z("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return r=On(this.Ba),o.length&&o[0].b!=r.b&&Vo.call(this,o[0].c,e),o.length&&(n=n.substr(o[0].b.length+1)),n?new mh(this.Ba,n):null},Ja:bp,ba:function(){return W(this,"firebaseui-recaptcha-container")},u:function(){return W(this,"firebaseui-id-recaptcha-error")},i:Ae,ua:Se,P:Oe});function wp(e,n,r,o){try{var c=n.U(Uc)}catch{return}c?Er?(n.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",z("Verifying...").toString()),F(e,n.I(J(e.cc,e),[Rc(c),r],function(l){var h=oe(n);n.$("firebaseui-icon-done",z("Code sent!").toString());var g=setTimeout(function(){n.h(),n.m(),P("phoneSignInFinish",e,h,c,15,l)},1e3);F(e,function(){n&&n.h(),clearTimeout(g)})},function(l){if(n.h(),!l.name||l.name!="cancel"){grecaptcha.reset(Rh),Er=null;var h=l&&l.message||"";if(l.code)switch(l.code){case"auth/too-many-requests":h=z("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":n.O().focus(),Pe(n.B(),Ka().toString());return;case"auth/admin-restricted-operation":if(Nn(E(e))){l=oe(n),n.m(),P("handleUnauthorizedUser",e,l,Rc(c),O.auth.PhoneAuthProvider.PROVIDER_ID);return}h=ee(l);break;default:h=ee(l)}n.a(h)}}))):mi?Pe(n.u(),z("Solve the reCAPTCHA").toString()):!mi&&o&&n.i().click():(n.O().focus(),Pe(n.B(),Ka().toString()))}X.phoneSignInStart=function(e,n,r,o){var c=o0(E(e))||{};Er=null,mi=!(c&&c.size==="invisible");var l=ap(e),h=h0(E(e)),g=l?d0(E(e)):null;h=r&&r.a||h&&h.c||null,r=r&&r.Aa||g,(g=Pc(E(e)))&&ph(g),Uc=g?new dh(Pc(E(e))):wr;var b=new zr(function(N){wp(e,b,T,!(!N||!N.keyCode))},mi,l?null:function(){T.clear(),b.m(),ie(e,n)},be(E(e)),we(E(e)),l,Uc,h,r);b.render(n),B(e,b),o&&b.a(o),c.callback=function(N){b.u()&&Xe(b.u()),Er=N,mi||wp(e,b,T)},c["expired-callback"]=function(){Er=null};var T=new O.auth.RecaptchaVerifier(mi?b.ba():b.i(),c,dt(e).app);F(e,b.I(J(T.render,T),[],function(N){Rh=N},function(N){N.name&&N.name=="cancel"||(N=ee(N),b.m(),ie(e,n,void 0,N))}))},X.prefilledEmailSignIn=function(e,n,r){var o=new jo;o.render(n),B(e,o),F(e,o.I(J(H(e).fetchSignInMethodsForEmail,H(e)),[r],function(c){o.m();var l=!(!Do(e)||!Ep(e));up(e,n,c,r,void 0,l)},function(c){c=ee(c),o.m(),P("signIn",e,n,r,c)}))};function Yr(e,n,r,o,c){_.call(this,Vf,{Sb:n},c,"providerSignIn",{F:r,D:o}),this.i=e}p(Yr,_),Yr.prototype.v=function(){this.l(this.i),_.prototype.v.call(this)},Yr.prototype.o=function(){this.i=null,_.prototype.o.call(this)},re(Yr.prototype,{l:function(e){function n(h){e(h)}for(var r=this.g?Ba("firebaseui-id-idp-button",this.g||this.s.a):[],o=0;o<r.length;o++){var c=r[o],l=Bo(c,"providerId");ce(this,c,it(n,l))}}}),X.providerSignIn=function(e,n,r,o){var c=new Yr(function(l){l==O.auth.EmailAuthProvider.PROVIDER_ID?(c.m(),zc(e,n,o)):l==O.auth.PhoneAuthProvider.PROVIDER_ID?(c.m(),P("phoneSignInStart",e,n)):l=="anonymous"?A0(e,c):Dr(e,c,l,o),G(e),e.l.cancel()},bh(E(e)),be(E(e)),we(E(e)));c.render(n),B(e,c),r&&c.a(r),Q0(e)},X.sendEmailLinkForSignIn=function(e,n,r,o){var c=new Lo;c.render(n),B(e,c),qc(e,c,r,o,function(l){c.m(),l&&l.code=="auth/admin-restricted-operation"&&Nn(E(e))?P("handleUnauthorizedUser",e,n,r,O.auth.EmailAuthProvider.PROVIDER_ID):(l=ee(l),P("signIn",e,n,r,l))})};function Jr(e,n,r,o,c,l,h){_.call(this,cf,{email:r,Va:!!n,ia:!!l},h,"signIn",{F:o,D:c}),this.i=e,this.u=n}p(Jr,_),Jr.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Fo(this.l(),(this.l().value||"").length),_.prototype.v.call(this)},Jr.prototype.o=function(){this.u=this.i=null,_.prototype.o.call(this)},re(Jr.prototype,{l:Nt,M:nn,w:Ci,H:Ai,j:Ri,U:Ae,P:Se,B:Oe}),X.signIn=function(e,n,r,o){var c=Do(e),l=new Jr(function(){var h=l,g=h.j()||"";g&&cp(e,h,g)},c?null:function(){l.m(),ie(e,n,r)},r,be(E(e)),we(E(e)),c);l.render(n),B(e,l),o&&l.a(o)};function Xr(e,n,r,o,c,l,h){_.call(this,kf,{kc:e,yb:r,Eb:!!o},h,"unauthorizedUser",{F:c,D:l}),this.l=n,this.i=o}p(Xr,_),Xr.prototype.v=function(){var e=this,n=W(this,"firebaseui-id-unauthorized-user-help-link");this.i&&n&&ce(this,n,function(){e.i()}),ce(this,this.u(),function(){e.l()}),this.u().focus(),_.prototype.v.call(this)},Xr.prototype.o=function(){this.i=this.l=null,_.prototype.o.call(this)},re(Xr.prototype,{u:Se}),X.handleUnauthorizedUser=function(e,n,r,o){function c(){ie(e,n)}o===O.auth.EmailAuthProvider.PROVIDER_ID?c=function(){zc(e,n)}:o===O.auth.PhoneAuthProvider.PROVIDER_ID&&(c=function(){P("phoneSignInStart",e,n)});var l=null,h=null;o===O.auth.EmailAuthProvider.PROVIDER_ID&&Ih(E(e))?(l=u0(E(e)),h=l0(E(e))):Nn(E(e))&&(l=a0(E(e)),h=c0(E(e)));var g=new Xr(r,function(){g.m(),c()},l,h,be(E(e)),we(E(e)));g.render(n),B(e,g)};function Zr(e,n,r,o,c,l){_.call(this,Tf,{email:e},l,"unsupportedProvider",{F:o,D:c}),this.l=n,this.i=r}p(Zr,_),Zr.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),_.prototype.v.call(this)},Zr.prototype.o=function(){this.i=this.l=null,_.prototype.o.call(this)},re(Zr.prototype,{u:Ae,B:Se,w:Oe}),X.unsupportedProvider=function(e,n,r){var o=new Zr(r,function(){o.m(),P("passwordRecovery",e,n,r)},function(){o.m(),ie(e,n,r)},be(E(e)),we(E(e)));o.render(n),B(e,o)};function It(e,n){this.$=!1;var r=iu(n);if(Qr[r])throw Error('An AuthUI instance already exists for the key "'+r+'"');Qr[r]=this,this.a=e,this.u=null,this.Y=!1,Ip(this.a),this.h=O.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(r=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(r===null?"":":"+r),e.options)),Ip(this.h),this.h.setPersistence&&this.h.setPersistence(O.auth.Auth.Persistence.SESSION),this.oa=n,this.ca=new s0,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=cc.Xa(),this.j=this.C=null,this.da=this.A=!1}function Ip(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}var Qr={};function iu(e){return e||"[DEFAULT]"}function _p(e){return G(e),e.i||(e.i=Lt(e,function(n){return n&&!vt(M(e))?fe(dt(e).getRedirectResult().then(function(r){return r},function(r){if(r&&r.code=="auth/email-already-in-use"&&r.email&&r.credential)throw r;return sn(e,r)})):fe(H(e).getRedirectResult().then(function(r){return bo(E(e))&&!r.user&&e.j&&!e.j.isAnonymous?dt(e).getRedirectResult():r}))})),e.i}function B(e,n){G(e),e.g=n}var Di=null;function H(e){return G(e),e.h}function dt(e){return G(e),e.a}function M(e){return G(e),e.oa}function Ep(e){return G(e),e.O?e.O.emailHint:void 0}i=It.prototype,i.nb=function(){return G(this),!!Sc(M(this))||Sp(Ot())};function Sp(e){return e=new wn(e),(e.a.a.get(Ie.ub)||null)==="signIn"&&!!e.a.a.get(Ie.$a)}i.start=function(e,n){kp(this,e,n)};function kp(e,n,r,o){G(e),typeof e.a.languageCode<"u"&&(e.u=e.a.languageCode);var c="en".replace(/_/g,"-");e.a.languageCode=c,e.h.languageCode=c,e.Y=!0,typeof e.a.tenantId<"u"&&(e.h.tenantId=e.a.tenantId),e.ib(r),e.O=o||null;var l=w.document;e.C?e.C.then(function(){l.readyState=="complete"?Ho(e,n):lr(window,"load",function(){Ho(e,n)})}):l.readyState=="complete"?Ho(e,n):lr(window,"load",function(){Ho(e,n)})}function Ho(e,n){var r=Js(n,"Could not find the FirebaseUI widget element on the page.");if(r.setAttribute("lang","en".replace(/_/g,"-")),Di){var o=Di;G(o),vt(M(o))&&en("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),Di.reset()}if(Di=e,e.T=r,Z0(e,r),vo(new wc)&&vo(new Ic)){n=Js(n,"Could not find the FirebaseUI widget element on the page."),r=Ot(),o=Cc(E(e).a,"queryParameterForSignInSuccessUrl"),r=(r=Ls(r,o))?qt(xs(r)).toString():null;e:{o=Ot();var c=Sh(E(e));o=Ls(o,c)||"";for(l in xc)if(xc[l].toLowerCase()==o.toLowerCase()){var l=xc[l];break e}l="callback"}switch(l){case"callback":r&&(l=M(e),di(yr,r,l)),e.nb()?P("callback",e,n):ie(e,n,Ep(e));break;case"resetPassword":P("passwordReset",e,n,Lr(),Yc());break;case"recoverEmail":P("emailChangeRevocation",e,n,Lr());break;case"revertSecondFactorAddition":P("revertSecondFactorAddition",e,n,Lr());break;case"verifyEmail":P("emailVerification",e,n,Lr(),Yc());break;case"verifyAndChangeEmail":P("verifyAndChangeEmail",e,n,Lr(),Yc());break;case"signIn":P("emailLinkSignInCallback",e,n,Ot()),Rp();break;case"select":r&&(l=M(e),di(yr,r,l)),ie(e,n);break;default:throw Error("Unhandled widget operation.")}n=E(e),(n=_r(n).uiShown||null)&&n()}else n=Js(n,"Could not find the FirebaseUI widget element on the page."),l=new sp(z("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()),l.render(n),B(e,l);n=e.g&&e.g.Ga=="blank"&&Oc(E(e)),Sc(M(e))&&!n&&(n=Sc(M(e)),Ap(e,n.a),Ve(Pn,M(e)))}function Lt(e,n){if(e.A)return n(Tp(e));if(F(e,function(){e.A=!1}),bo(E(e))){var r=new Ee(function(o){F(e,e.a.onAuthStateChanged(function(c){e.j=c,e.A||(e.A=!0,o(n(Tp(e))))}))});return F(e,r),r}return e.A=!0,n(null)}function Tp(e){return G(e),bo(E(e))&&e.j&&e.j.isAnonymous?e.j:null}function F(e,n){if(G(e),n){e.s.push(n);var r=function(){Rv(e.s,function(o){return o==n})};typeof n!="function"&&n.then(r,r)}}i.Db=function(){G(this),this.Z=!0};function X0(e){G(e);var n;return(n=e.Z)||(e=E(e),e=Eh(e,O.auth.GoogleAuthProvider.PROVIDER_ID),n=!(!e||e.prompt!=="select_account")),n}function Cp(e){typeof e.a.languageCode<"u"&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Ap(e,n){e.a.tenantId=n,e.h.tenantId=n}i.reset=function(){G(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&Ny(this.J),Cp(this),this.O=null,Rp(),Ve(Pn,M(this)),G(this),this.l.cancel(),this.i=fe({user:null,credential:null}),Di==this&&(Di=null),this.T=null;for(var n=0;n<this.s.length;n++)typeof this.s[n]=="function"?this.s[n]():this.s[n].cancel&&this.s[n].cancel();this.s=[],yt(M(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=rn(this).then(function(){e.C=null},function(){e.C=null}))};function Z0(e,n){e.L=null,e.J=new zs(n),e.J.register(),ut(e.J,"pageEnter",function(r){if(r=r&&r.pageId,e.L!=r){var o=E(e);(o=_r(o).uiChanged||null)&&o(e.L,r),e.L=r}})}i.ib=function(e){G(this);var n=this.ca,r;for(r in e)try{Tc(n.a,r,e[r])}catch{Ye('Invalid config: "'+r+'"',void 0)}Qv&&Tc(n.a,"popupMode",!1),Pc(n),!this.da&&Nc(E(this))&&(en("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)};function E(e){return G(e),e.ca}i.Wb=function(){G(this);var e=E(this),n=Cc(e.a,"widgetUrl");e=Sh(e);for(var r=n.search(El),o=0,c,l=[];0<=(c=_l(n,o,e,r));)l.push(n.substring(o,c)),o=Math.min(n.indexOf("&",c)+1||r,r);l.push(n.substr(o)),n=l.join("").replace(Hv,"$1"),r="="+encodeURIComponent("select"),(e+=r)?(r=n.indexOf("#"),0>r&&(r=n.length),o=n.indexOf("?"),0>o||o>r?(o=r,c=""):c=n.substring(o+1,r),n=[n.substr(0,o),c,n.substr(r)],r=n[1],n[1]=e?r?r+"&"+e:e:r,r=n[0]+(n[1]?"?"+n[1]:"")+n[2]):r=n,E(this).a.get("popupMode")?(e=(window.screen.availHeight-600)/2,n=(window.screen.availWidth-500)/2,r=r||"about:blank",e={width:500,height:600,top:0<e?e:0,left:0<n?n:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},e.target=e.target||r.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=kd(r,e))&&e.focus()):ei(window.location,r)};function G(e){if(e.$)throw Error("AuthUI instance is deleted!")}i.Wa=function(){var e=this;return G(this),this.h.app.delete().then(function(){var n=iu(M(e));delete Qr[n],e.reset(),e.$=!0})};function Q0(e){G(e);try{Od(e.l,wh(E(e)),X0(e)).then(function(n){return e.g?R0(e,e.g,n):!1})}catch{}}i.Ib=function(e,n){G(this);var r=this,o=jy();if(!pi(E(this)))return ti(Error("Email link sign-in should be enabled to trigger email sending."));var c=p0(E(this)),l=new wn(c.url);return Yv(l,o),n&&n.a&&(r0(o,n,M(this)),Al(l,n.a.providerId)),Jv(l,f0(E(this))),Lt(this,function(h){return h&&((h=h.uid)?l.a.a.set(Ie.Pa,h):bn(l.a.a,Ie.Pa)),c.url=l.toString(),H(r).sendSignInLinkToEmail(e,c)}).then(function(){var h=M(r),g={};g.email=e,di(ui,Zd(o,JSON.stringify(g)),h)},function(h){throw Ve(br,M(r)),Ve(ui,M(r)),h})};function eb(e,n){var r=Cl(new wn(n));return r?(n=new Ee(function(o,c){var l=dt(e).onAuthStateChanged(function(h){l(),h&&h.isAnonymous&&h.uid===r?o(h):h&&h.isAnonymous&&h.uid!==r?c(Error("anonymous-user-mismatch")):c(Error("anonymous-user-not-found"))});F(e,l)}),F(e,n),n):fe(null)}function tb(e,n,r,o,c){G(e);var l=c||null,h=O.auth.EmailAuthProvider.credentialWithLink(r,o);return r=l?H(e).signInWithEmailLink(r,o).then(function(g){return g.user.linkWithCredential(l)}).then(function(){return rn(e)}).then(function(){return sn(e,{code:"auth/email-already-in-use"},l)}):H(e).fetchSignInMethodsForEmail(r).then(function(g){return g.length?sn(e,{code:"auth/email-already-in-use"},h):n.linkWithCredential(h)}),F(e,r),r}function nb(e,n,r,o){G(e);var c=o||null,l;return n=H(e).signInWithEmailLink(n,r).then(function(h){if(l={user:h.user,credential:null,operationType:h.operationType,additionalUserInfo:h.additionalUserInfo},c)return h.user.linkWithCredential(c).then(function(g){l={user:g.user,credential:c,operationType:l.operationType,additionalUserInfo:g.additionalUserInfo}})}).then(function(){rn(e)}).then(function(){return dt(e).updateCurrentUser(l.user)}).then(function(){return l.user=dt(e).currentUser,l}),F(e,n),n}function Rp(){var e=Ot();if(Sp(e)){e=new wn(e);for(var n in Ie)Ie.hasOwnProperty(n)&&bn(e.a.a,Ie[n]);n={state:"signIn",mode:"emailLink",operation:"clear"};var r=w.document.title;w.history&&w.history.replaceState&&w.history.replaceState(n,r,e.toString())}}i.bc=function(e,n){G(this);var r=this;return H(this).signInWithEmailAndPassword(e,n).then(function(o){return Lt(r,function(c){return c?rn(r).then(function(){return sn(r,{code:"auth/email-already-in-use"},O.auth.EmailAuthProvider.credential(e,n))}):o})})},i.Yb=function(e,n){G(this);var r=this;return Lt(this,function(o){if(o){var c=O.auth.EmailAuthProvider.credential(e,n);return o.linkWithCredential(c)}return H(r).createUserWithEmailAndPassword(e,n)})},i.ac=function(e){G(this);var n=this;return Lt(this,function(r){return r?r.linkWithCredential(e).then(function(o){return o},function(o){if(o&&o.code=="auth/email-already-in-use"&&o.email&&o.credential)throw o;return sn(n,o,e)}):H(n).signInWithCredential(e)})};function ib(e,n){return G(e),Lt(e,function(r){return r&&!vt(M(e))?r.linkWithPopup(n).then(function(o){return o},function(o){if(o&&o.code=="auth/email-already-in-use"&&o.email&&o.credential)throw o;return sn(e,o)}):H(e).signInWithPopup(n)})}i.dc=function(e){G(this);var n=this,r=this.i;return this.i=null,Lt(this,function(o){return o&&!vt(M(n))?o.linkWithRedirect(e):H(n).signInWithRedirect(e)}).then(function(){},function(o){throw n.i=r,o})},i.cc=function(e,n){G(this);var r=this;return Lt(this,function(o){return o?o.linkWithPhoneNumber(e,n).then(function(c){return new lc(c,function(l){if(l.code=="auth/credential-already-in-use")return sn(r,l);throw l})}):dt(r).signInWithPhoneNumber(e,n).then(function(c){return new lc(c)})})},i.$b=function(){return G(this),dt(this).signInAnonymously()};function rb(e,n){return G(e),Lt(e,function(r){if(e.j&&!e.j.isAnonymous&&bo(E(e))&&!H(e).currentUser)return rn(e).then(function(){return n.credential.providerId=="password"&&(n.credential=null),n});if(r)return rn(e).then(function(){return r.linkWithCredential(n.credential)}).then(function(o){return n.user=o.user,n.credential=o.credential,n.operationType=o.operationType,n.additionalUserInfo=o.additionalUserInfo,n},function(o){if(o&&o.code=="auth/email-already-in-use"&&o.email&&o.credential)throw o;return sn(e,o,n.credential)});if(!n.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return rn(e).then(function(){return dt(e).updateCurrentUser(n.user)}).then(function(){return n.user=dt(e).currentUser,n.operationType="signIn",n.credential&&n.credential.providerId&&n.credential.providerId=="password"&&(n.credential=null),n})})}i.Xb=function(e,n){return G(this),H(this).signInWithEmailAndPassword(e,n)};function rn(e){return G(e),H(e).signOut()}function sn(e,n,r){if(G(e),n&&n.code&&(n.code=="auth/email-already-in-use"||n.code=="auth/credential-already-in-use")){var o=Ah(E(e));return fe().then(function(){return o(new or("anonymous-upgrade-merge-conflict",null,r||n.credential))}).then(function(){throw e.g&&(e.g.m(),e.g=null),n})}return ti(n)}function es(e,n,r,o){_.call(this,Kf,void 0,o,"providerMatchByEmail",{F:n,D:r}),this.i=e}p(es,_),es.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Fo(this.l(),(this.l().value||"").length),_.prototype.v.call(this)},es.prototype.o=function(){this.i=null,_.prototype.o.call(this)},re(es.prototype,{l:Nt,H:nn,u:Ci,B:Ai,j:Ri,M:Ae,w:Oe});function $o(e,n,r,o,c){_.call(this,Gf,{ec:n},c,"selectTenant",{F:r,D:o}),this.i=e}p($o,_),$o.prototype.v=function(){sb(this,this.i),_.prototype.v.call(this)},$o.prototype.o=function(){this.i=null,_.prototype.o.call(this)};function sb(e,n){function r(g){n(g)}for(var o=e.g?Ba("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],c=0;c<o.length;c++){var l=o[c],h=Bo(l,"tenantId");ce(e,l,it(r,h))}}function ru(e){_.call(this,pf,void 0,e,"spinner")}p(ru,_);function ob(e){this.a=new kc,ye(this.a,"authDomain"),ye(this.a,"displayMode",Go),ye(this.a,"tenants"),ye(this.a,"callbacks"),ye(this.a,"tosUrl"),ye(this.a,"privacyPolicyUrl");for(var n in e)if(e.hasOwnProperty(n))try{Tc(this.a,n,e[n])}catch{Ye('Invalid config: "'+n+'"',void 0)}}function ab(e){e=e.a.get("displayMode");for(var n in ou)if(ou[n]===e)return ou[n];return Go}function Wo(e){return e.a.get("callbacks")||{}}function Pp(e){var n=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,n&&!e&&en("Privacy Policy URL is missing, the link will not be displayed."),n&&e){if(typeof n=="function")return n;if(typeof n=="string")return function(){ii(n)}}return null}function Op(e){var n=e.a.get("tosUrl")||null,r=e.a.get("privacyPolicyUrl")||null;if(r&&!n&&en("Terms of Service URL is missing, the link will not be displayed."),n&&r){if(typeof r=="function")return r;if(typeof r=="string")return function(){ii(r)}}return null}function su(e,n){if(e=e.a.get("tenants"),!e||!e.hasOwnProperty(n)&&!e.hasOwnProperty(Ko))throw Error("Invalid tenant configuration!")}function Np(e,n,r){if(e=e.a.get("tenants"),!e)throw Error("Invalid tenant configuration!");var o=[];if(e=e[n]||e[Ko],!e)return Ye("Invalid tenant configuration: "+(n+" is not configured!"),void 0),o;if(n=e.signInOptions,!n)throw Error("Invalid tenant configuration: signInOptions are invalid!");return n.forEach(function(c){if(typeof c=="string")o.push(c);else if(typeof c.provider=="string"){var l=c.hd;l&&r?(l instanceof RegExp?l:new RegExp("@"+l.replace(".","\\.")+"$")).test(r)&&o.push(c.provider):o.push(c.provider)}else c="Invalid tenant configuration: signInOption "+(JSON.stringify(c)+" is invalid!"),Ye(c,void 0)}),o}function cb(e,n,r){return e=ub(e,n),(n=e.signInOptions)&&r&&(n=n.filter(function(o){return typeof o=="string"?r.includes(o):r.includes(o.provider)}),e.signInOptions=n),e}function ub(e,n){var r=lb,o=o===void 0?{}:o;return su(e,n),e=e.a.get("tenants"),By(e[n]||e[Ko],r,o)}var lb=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Go="optionFirst",ou={pc:Go,oc:"identifierFirst"},Ko="*";function ht(e,n){var r=this;this.s=Js(e),this.a={},Object.keys(n).forEach(function(o){r.a[o]=new ob(n[o])}),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(o){this.ob=o||null},enumerable:!1})}i=ht.prototype,i.Ub=function(e,n){var r=this;on(this);var o=e.apiKey;return new Ee(function(c,l){if(r.a.hasOwnProperty(o)){var h=Wo(r.a[o]).selectTenantUiHidden||null;if(ab(r.a[o])===Go){var g=[];n.forEach(function(N){N=N||"_";var Q=r.a[o].a.get("tenants");if(!Q)throw Error("Invalid tenant configuration!");(Q=Q[N]||Q[Ko])?N={tenantId:N!=="_"?N:null,V:Q.fullLabel||null,displayName:Q.displayName,za:Q.iconUrl,ta:Q.buttonColor}:(Ye("Invalid tenant configuration: "+(N+" is not configured!"),void 0),N=null),N&&g.push(N)});var b=function(N){N={tenantId:N,providerIds:Np(r.a[o],N||"_")},c(N)};if(g.length===1){b(g[0].tenantId);return}r.g=new $o(function(N){on(r),h&&h(),b(N)},g,Pp(r.a[o]),Op(r.a[o]))}else r.g=new es(function(){var N=r.g.j();if(N){for(var Q=0;Q<n.length;Q++){var ft=Np(r.a[o],n[Q]||"_",N);if(ft.length!==0){N={tenantId:n[Q],providerIds:ft,email:N},on(r),h&&h(),c(N);return}}r.g.a(ed({code:"no-matching-tenant-for-email"}).toString())}},Pp(r.a[o]),Op(r.a[o]));r.g.render(r.s),(l=Wo(r.a[o]).selectTenantUiShown||null)&&l()}else{var T=Error("Invalid project configuration: API key is invalid!");T.code="invalid-configuration",r.pb(T),l(T)}})},i.Pb=function(e,n){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var r=n||void 0;su(this.a[e],n||"_");try{this.i=O.app(r).auth()}catch{var o=this.a[e].a.get("authDomain");if(!o)throw Error("Invalid project configuration: authDomain is required!");e=O.initializeApp({apiKey:e,authDomain:o},r),e.auth().tenantId=n,this.i=e.auth()}return this.i},i.Zb=function(e,n){var r=this;return new Ee(function(o,c){function l(Q,ft){r.j=new It(e),kp(r.j,r.s,Q,ft)}var h=e.app.options.apiKey;r.a.hasOwnProperty(h)||c(Error("Invalid project configuration: API key is invalid!"));var g=cb(r.a[h],e.tenantId||"_",n&&n.providerIds);on(r),c={signInSuccessWithAuthResult:function(Q){return o(Q),!1}};var b=Wo(r.a[h]).signInUiShown||null,T=!1;c.uiChanged=function(Q,ft){Q===null&&ft==="callback"?((Q=Va("firebaseui-id-page-callback",r.s))&&Xe(Q),r.h=new ru,r.h.render(r.s)):T||Q===null&&ft==="spinner"||ft==="blank"||(r.h&&(r.h.m(),r.h=null),T=!0,b&&b(e.tenantId))},g.callbacks=c,g.credentialHelper="none";var N;n&&n.email&&(N={emailHint:n.email}),r.j?r.j.Wa().then(function(){l(g,N)}):l(g,N)})},i.reset=function(){var e=this;return fe().then(function(){e.j&&e.j.Wa()}).then(function(){e.j=null,on(e)})},i.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout(function(){on(e),e.h=new ru,e.g=e.h,e.h.render(e.s),e.A=null},500))},i.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},i.Bb=function(){return on(this),this.g=new ep,this.g.render(this.s),fe()};function on(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}i.pb=function(e){var n=this,r=ed({code:e.code}).toString()||e.message;on(this);var o;e.retry&&typeof e.retry=="function"&&(o=function(){n.reset(),e.retry()}),this.g=new rp(r,o),this.g.render(this.s)},i.Rb=function(e){var n=this;return fe().then(function(){var r=n.i&&n.i.app.options.apiKey;if(!n.a.hasOwnProperty(r))throw Error("Invalid project configuration: API key is invalid!");if(su(n.a[r],e.tenantId||"_"),!n.i.currentUser||n.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(r=Wo(n.a[r]).beforeSignInSuccess||null)?r(e):e}).then(function(r){if(r.uid!==e.uid)throw Error("User with mismatching UID returned.");return r})},se("firebaseui.auth.FirebaseUiHandler",ht),se("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",ht.prototype.Ub),se("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",ht.prototype.Pb),se("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",ht.prototype.Zb),se("firebaseui.auth.FirebaseUiHandler.prototype.reset",ht.prototype.reset),se("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",ht.prototype.Vb),se("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",ht.prototype.mb),se("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",ht.prototype.Bb),se("firebaseui.auth.FirebaseUiHandler.prototype.handleError",ht.prototype.pb),se("firebaseui.auth.FirebaseUiHandler.prototype.processUser",ht.prototype.Rb),se("firebaseui.auth.AuthUI",It),se("firebaseui.auth.AuthUI.getInstance",function(e){return e=iu(e),Qr[e]?Qr[e]:null}),se("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",It.prototype.Db),se("firebaseui.auth.AuthUI.prototype.start",It.prototype.start),se("firebaseui.auth.AuthUI.prototype.setConfig",It.prototype.ib),se("firebaseui.auth.AuthUI.prototype.signIn",It.prototype.Wb),se("firebaseui.auth.AuthUI.prototype.reset",It.prototype.reset),se("firebaseui.auth.AuthUI.prototype.delete",It.prototype.Wa),se("firebaseui.auth.AuthUI.prototype.isPendingRedirect",It.prototype.nb),se("firebaseui.auth.AuthUIError",or),se("firebaseui.auth.AuthUIError.prototype.toJSON",or.prototype.toJSON),se("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",Dc),se("firebaseui.auth.CredentialHelper.NONE",Io),se("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),Ee.prototype.catch=Ee.prototype.Ca,Ee.prototype.finally=Ee.prototype.fc}).apply(typeof global<"u"?global:typeof self<"u"?self:window)}).apply(typeof global<"u"?global:typeof self<"u"?self:window);typeof window<"u"&&(window.dialogPolyfill=ZS);var Eu=firebaseui.auth;function Sm(i){let t,s,a;return{c(){t=pt("button"),t.textContent="Logout"},m(u,d){Uu(u,t,d),s||(a=Am(t,"click",i[1]),s=!0)},p:Hi,d(u){u&&la(t),s=!1,a()}}}function QS(i){let t,s,a,u,d,f,p,m,y,k,w=i[0].displayName+"",L,D,ae,v,I,S,R,j,Y,K,te;ae=new Rb({});let q=i[0]&&Sm(i);return{c(){t=pt("main"),s=pt("div"),s.innerHTML=`<a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${Tb}" class="logo svelte svelte-11cv5lq" alt="Svelte Logo"/></a>`,a=an(),u=pt("h1"),u.textContent="Vite + Svelte",d=an(),f=pt("div"),f.textContent="I'm a loader",p=an(),m=pt("div"),y=pt("h2"),k=fs("Hi "),L=fs(w),D=an(),Eb(ae.$$.fragment),v=an(),I=pt("div"),S=an(),R=pt("p"),R.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',j=an(),q&&q.c(),Y=an(),K=pt("p"),K.textContent="Click on the Vite and Svelte logos to learn more",qo(f,"id","loader"),qo(m,"class","card"),qo(I,"id","firebaseui-auth-container"),qo(K,"class","read-the-docs svelte-11cv5lq")},m(le,Be){Uu(le,t,Be),ke(t,s),ke(t,a),ke(t,u),ke(t,d),ke(t,f),ke(t,p),ke(t,m),ke(m,y),ke(y,k),ke(y,L),ke(m,D),Nm(ae,m,null),ke(t,v),ke(t,I),ke(t,S),ke(t,R),ke(t,j),q&&q.m(t,null),ke(t,Y),ke(t,K),te=!0},p(le,[Be]){(!te||Be&1)&&w!==(w=le[0].displayName+"")&&Rm(L,w),le[0]?q?q.p(le,Be):(q=Sm(le),q.c(),q.m(t,Y)):q&&(q.d(1),q=null)},i(le){te||(Om(ae.$$.fragment,le),te=!0)},o(le){_b(ae.$$.fragment,le),te=!1},d(le){le&&la(t),Dm(ae),q&&q.d()}}}function ek(i,t,s){const a={apiKey:"AIzaSyBW65ZyKiEKVLckWCDDrVMi_7CrtgiRJTw",authDomain:"bioimageio-fb463.firebaseapp.com",projectId:"bioimageio-fb463",storageBucket:"bioimageio-fb463.appspot.com",messagingSenderId:"861528698214",appId:"1:861528698214:web:e6665d84c3b4a2086f2ca7",measurementId:"G-FCRSWHEQX0"};let u;var d={callbacks:{signInSuccessWithAuthResult(p,m){return s(0,u=p.user),p.credential,p.additionalUserInfo.isNewUser,p.additionalUserInfo.providerId,p.operationType,!1},signInFailure(p){return s(0,u=null),handleUIError(p)},uiShown(){document.getElementById("loader").style.display="none"}},credentialHelper:Eu.CredentialHelper.NONE,queryParameterForWidgetMode:"mode",queryParameterForSignInSuccessUrl:"signInSuccessUrl",signInFlow:"popup",signInOptions:[O.auth.GoogleAuthProvider.PROVIDER_ID,O.auth.FacebookAuthProvider.PROVIDER_ID,O.auth.TwitterAuthProvider.PROVIDER_ID,O.auth.GithubAuthProvider.PROVIDER_ID,{provider:O.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!0},{provider:O.auth.PhoneAuthProvider.PROVIDER_ID,recaptchaParameters:{type:"image",size:"invisible",badge:"bottomleft"}},Eu.AnonymousAuthProvider.PROVIDER_ID],immediateFederatedRedirect:!1,tosUrl:"<your-tos-url>",privacyPolicyUrl(){window.location.assign("<your-privacy-policy-url>")}};gb(()=>{const p=fa(a);DI(p);const m=oS(p);console.log(p),console.log(m);var y=new Eu.AuthUI(m);y.start("#firebaseui-auth-container",d),m.onAuthStateChanged(k=>{s(0,u=k),console.log(u)})});async function f(){await E2(firebaseAuth),s(0,u=null)}return[u,f]}class tk extends Mm{constructor(t){super(),Lm(this,t,ek,QS,Cm,{})}}new tk({target:document.getElementById("app")});
