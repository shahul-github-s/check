import{j as b,r as L}from"./mui-810d7cba.js";import{S as Ue}from"./Spring-9bd2cf4e.js";import{n as ct}from"./helpers-fc71785b.js";import{c as lt}from"./index-934a3f4f.js";import{B as ut}from"./BasicTable-f2375e33.js";import{P as Ee}from"./Pagination-f38a0c00.js";import{S as ft}from"./Search-78c8077b.js";import{u as dt}from"./index-208b6034.js";const ke=({item:e,index:t,data:n})=>b.jsxs("div",{className:lt("flex gap-4 px-4 md:h-full md:!p-0 md:justify-center",{"pt-4":t===0,"pb-4":t===n.length-1,"md:border-r":t!==n.length-1}),children:[b.jsx("i",{className:`icon-${e.icon}-regular text-turquoise text-[24px] mt-[15px]`}),b.jsxs("div",{className:"flex flex-col gap-[3px]",children:[b.jsx("span",{className:"counter",children:ct(e.value)}),b.jsx("span",{className:"uppercase text-xs font-medium text-label",children:e.label})]})]}),ee=[{icon:"square-list",value:2e3,label:"All"},{icon:"loader",value:70,label:"Pending"},{icon:"box-check",value:120,label:"Completed"},{icon:"bars-progress",value:60,label:"Progress"}],nr=()=>b.jsxs(Ue,{className:"bg-turquoise md:h-[180px] rounded-[20px] p-5 xs:p-6",children:[b.jsx("p",{className:"text-white text-[15px] font-semibold uppercase mb-2.5",children:"Order Statuses"}),b.jsx("div",{className:`grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4
                 md:items-center md:gap-0`,children:ee.map((e,t)=>b.jsxs(L.Fragment,{children:[b.jsx(ke,{index:t,data:ee,item:e}),t!==ee.length-1&&b.jsx("div",{className:"h-[1px] bg-border md:hidden"})]},e.label))})]}),te=[{icon:"cart-circle-xmark",value:160,label:"Abandoned"},{icon:"arrow-right-arrow-left",value:222,label:"Returned"},{icon:"ban",value:78,label:"Canceled"},{icon:"square-fragile",value:35,label:"Damaged"}],rr=()=>b.jsxs(Ue,{className:"bg-blue md:h-[180px] rounded-[20px] p-5 xs:p-6",children:[b.jsx("p",{className:"text-white text-[15px] font-semibold uppercase mb-2.5",children:"Failed Orders"}),b.jsx("div",{className:`grid grid-cols-1 gap-4 bg-widget rounded-2xl md:grid-cols-4 md:h-[100px] md:py-4
                 md:items-center md:gap-0`,children:te.map((e,t)=>b.jsxs(L.Fragment,{children:[b.jsx(ke,{item:e,index:t,data:te}),t!==te.length-1&&b.jsx("div",{className:"h-[1px] bg-border md:hidden"})]},e.label))})]});function qe(e,t){return function(){return e.apply(t,arguments)}}const{toString:pt}=Object.prototype,{getPrototypeOf:pe}=Object,K=(e=>t=>{const n=pt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>K(t)===e),G=e=>t=>typeof t===e,{isArray:U}=Array,I=G("undefined");function ht(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ie=N("ArrayBuffer");function mt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ie(e.buffer),t}const yt=G("string"),A=G("function"),Me=G("number"),X=e=>e!==null&&typeof e=="object",bt=e=>e===!0||e===!1,H=e=>{if(K(e)!=="object")return!1;const t=pe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},gt=N("Date"),wt=N("File"),St=N("Blob"),Et=N("FileList"),xt=e=>X(e)&&A(e.pipe),Rt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=K(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},Ot=N("URLSearchParams"),[Tt,At,Ct,Nt]=["ReadableStream","Request","Response","Headers"].map(N),Pt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function ve(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const B=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),He=e=>!I(e)&&e!==B;function ie(){const{caseless:e}=He(this)&&this||{},t={},n=(r,s)=>{const o=e&&ve(t,s)||s;H(t[o])&&H(r)?t[o]=ie(t[o],r):H(r)?t[o]=ie({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&M(arguments[r],n);return t}const Ft=(e,t,n,{allOwnKeys:r}={})=>(M(t,(s,o)=>{n&&A(s)?e[o]=qe(s,n):e[o]=s},{allOwnKeys:r}),e),_t=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),jt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Bt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&pe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Dt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Lt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Me(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ut=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&pe(Uint8Array)),kt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},qt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},It=N("HTMLFormElement"),Mt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),xe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),vt=N("RegExp"),ze=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Ht=e=>{ze(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},zt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Jt=()=>{},$t=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",Re="0123456789",Je={DIGIT:Re,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+Re},Vt=(e=16,t=Je.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Wt(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Kt=e=>{const t=new Array(10),n=(r,s)=>{if(X(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return M(r,(i,c)=>{const d=n(i,s+1);!I(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Gt=N("AsyncFunction"),Xt=e=>e&&(X(e)||A(e))&&A(e.then)&&A(e.catch),$e=((e,t)=>e?setImmediate:t?((n,r)=>(B.addEventListener("message",({source:s,data:o})=>{s===B&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),B.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",A(B.postMessage)),Zt=typeof queueMicrotask<"u"?queueMicrotask.bind(B):typeof process<"u"&&process.nextTick||$e,a={isArray:U,isArrayBuffer:Ie,isBuffer:ht,isFormData:Rt,isArrayBufferView:mt,isString:yt,isNumber:Me,isBoolean:bt,isObject:X,isPlainObject:H,isReadableStream:Tt,isRequest:At,isResponse:Ct,isHeaders:Nt,isUndefined:I,isDate:gt,isFile:wt,isBlob:St,isRegExp:vt,isFunction:A,isStream:xt,isURLSearchParams:Ot,isTypedArray:Ut,isFileList:Et,forEach:M,merge:ie,extend:Ft,trim:Pt,stripBOM:_t,inherits:jt,toFlatObject:Bt,kindOf:K,kindOfTest:N,endsWith:Dt,toArray:Lt,forEachEntry:kt,matchAll:qt,isHTMLForm:It,hasOwnProperty:xe,hasOwnProp:xe,reduceDescriptors:ze,freezeMethods:Ht,toObjectSet:zt,toCamelCase:Mt,noop:Jt,toFiniteNumber:$t,findKey:ve,global:B,isContextDefined:He,ALPHABET:Je,generateString:Vt,isSpecCompliantForm:Wt,toJSONObject:Kt,isAsyncFn:Gt,isThenable:Xt,setImmediate:$e,asap:Zt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Ve=y.prototype,We={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{We[e]={value:e}});Object.defineProperties(y,We);Object.defineProperty(Ve,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Ve);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Qt=null;function ae(e){return a.isPlainObject(e)||a.isArray(e)}function Ke(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Oe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ke(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Yt(e){return a.isArray(e)&&!e.some(ae)}const en=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,f){return!a.isUndefined(f[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,m,f){let S=p;if(p&&!f&&typeof p=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Yt(p)||(a.isFileList(p)||a.endsWith(m,"[]"))&&(S=a.toArray(p)))return m=Ke(m),S.forEach(function(R,P){!(a.isUndefined(R)||R===null)&&t.append(i===!0?Oe([m],P,o):i===null?m:m+"[]",l(R))}),!1}return ae(p)?!0:(t.append(Oe(f,m,o),l(p)),!1)}const h=[],g=Object.assign(en,{defaultVisitor:u,convertValue:l,isVisitable:ae});function w(p,m){if(!a.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(p),a.forEach(p,function(S,x){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(x)?x.trim():x,m,g))===!0&&w(S,m?m.concat(x):[x])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Te(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function he(e,t){this._pairs=[],e&&Z(e,this,t)}const Ge=he.prototype;Ge.append=function(t,n){this._pairs.push([t,n])};Ge.toString=function(t){const n=t?function(r){return t.call(this,r,Te)}:Te;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function tn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xe(e,t,n){if(!t)return e;const r=n&&n.encode||tn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new he(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class nn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ae=nn,Ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rn=typeof URLSearchParams<"u"?URLSearchParams:he,sn=typeof FormData<"u"?FormData:null,on=typeof Blob<"u"?Blob:null,an={isBrowser:!0,classes:{URLSearchParams:rn,FormData:sn,Blob:on},protocols:["http","https","file","blob","url","data"]},me=typeof window<"u"&&typeof document<"u",ce=typeof navigator=="object"&&navigator||void 0,cn=me&&(!ce||["ReactNative","NativeScript","NS"].indexOf(ce.product)<0),ln=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),un=me&&window.location.href||"http://localhost",fn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:me,hasStandardBrowserEnv:cn,hasStandardBrowserWebWorkerEnv:ln,navigator:ce,origin:un},Symbol.toStringTag,{value:"Module"})),T={...fn,...an};function dn(e,t){return Z(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function pn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function hn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Qe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=hn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(pn(r),s,n,0)}),n}return null}function mn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ye={transitional:Ze,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return dn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),mn(t)):t}],transformResponse:[function(t){const n=this.transitional||ye.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ye.headers[e]={}});const be=ye,yn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&yn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ce=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function z(e){return e===!1||e==null?e:a.isArray(e)?e.map(z):String(e)}function gn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const wn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function re(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Sn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function En(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,l){const u=q(d);if(!u)throw new Error("header name must be a non-empty string");const h=a.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||d]=z(c))}const i=(c,d)=>a.forEach(c,(l,u)=>o(l,u,d));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!wn(t))i(bn(t),n);else if(a.isHeaders(t))for(const[c,d]of t.entries())o(d,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return gn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||re(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=q(i),i){const c=a.findKey(r,i);c&&(!n||re(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||re(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=z(s),delete n[o];return}const c=t?Sn(o):String(o).trim();c!==o&&delete n[o],n[c]=z(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ce]=this[Ce]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=q(i);r[c]||(En(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Q.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Q);const C=Q;function se(e,t){const n=this||be,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ye(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,y,{__CANCEL__:!0});function et(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function xn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Rn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[o];i||(i=l),n[s]=d,r[s]=l;let h=o,g=0;for(;h!==s;)g+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const w=u&&l-u;return w?Math.round(g*1e3/w):void 0}}function On(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),h=u-n;h>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-h)))},()=>s&&i(s)]}const $=(e,t,n=3)=>{let r=0;const s=Rn(50,250);return On(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,d=i-r,l=s(d),u=i<=c;r=i;const h={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(h)},n)},Ne=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Pe=e=>(...t)=>a.asap(()=>e(...t)),Tn=T.hasStandardBrowserEnv?function(){const t=T.navigator&&/(msie|trident)/i.test(T.navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),An=T.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Cn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Nn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function tt(e,t){return e&&!Cn(t)?Nn(e,t):t}const Fe=e=>e instanceof C?{...e}:e;function D(e,t){t=t||{};const n={};function r(l,u,h){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:h},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,h){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,h){if(h in t)return r(l,u);if(h in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(Fe(l),Fe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const h=d[u]||s,g=h(e[u],t[u],u);a.isUndefined(g)&&h!==c||(n[u]=g)}),n}const nt=e=>{const t=D({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=C.from(i),t.url=Xe(tt(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(a.isFormData(n)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((d=i.getContentType())!==!1){const[l,...u]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(T.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Tn(t.url))){const l=s&&o&&An.read(o);l&&i.set(s,l)}return t},Pn=typeof XMLHttpRequest<"u",Fn=Pn&&function(e){return new Promise(function(n,r){const s=nt(e);let o=s.data;const i=C.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:l}=s,u,h,g,w,p;function m(){w&&w(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let f=new XMLHttpRequest;f.open(s.method.toUpperCase(),s.url,!0),f.timeout=s.timeout;function S(){if(!f)return;const R=C.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),O={data:!c||c==="text"||c==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:R,config:e,request:f};et(function(j){n(j),m()},function(j){r(j),m()},O),f=null}"onloadend"in f?f.onloadend=S:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(S)},f.onabort=function(){f&&(r(new y("Request aborted",y.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const O=s.transitional||Ze;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new y(P,O.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,f)),f=null},o===void 0&&i.setContentType(null),"setRequestHeader"in f&&a.forEach(i.toJSON(),function(P,O){f.setRequestHeader(O,P)}),a.isUndefined(s.withCredentials)||(f.withCredentials=!!s.withCredentials),c&&c!=="json"&&(f.responseType=s.responseType),l&&([g,p]=$(l,!0),f.addEventListener("progress",g)),d&&f.upload&&([h,w]=$(d),f.upload.addEventListener("progress",h),f.upload.addEventListener("loadend",w)),(s.cancelToken||s.signal)&&(u=R=>{f&&(r(!R||R.type?new k(null,e,f):R),f.abort(),f=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const x=xn(s.url);if(x&&T.protocols.indexOf(x)===-1){r(new y("Unsupported protocol "+x+":",y.ERR_BAD_REQUEST,e));return}f.send(o||null)})},_n=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof y?u:new k(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:d}=r;return d.unsubscribe=()=>a.asap(c),d}},jn=_n,Bn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Dn=async function*(e,t){for await(const n of Ln(e))yield*Bn(n,t)},Ln=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},_e=(e,t,n,r)=>{const s=Dn(e,t);let o=0,i,c=d=>{i||(i=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:l,value:u}=await s.next();if(l){c(),d.close();return}let h=u.byteLength;if(n){let g=o+=h;n(g)}d.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",rt=Y&&typeof ReadableStream=="function",Un=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),st=(e,...t)=>{try{return!!e(...t)}catch{return!1}},kn=rt&&st(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),je=64*1024,le=rt&&st(()=>a.isReadableStream(new Response("").body)),V={stream:le&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!V[t]&&(V[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const qn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(T.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Un(e)).byteLength},In=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??qn(t)},Mn=Y&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:d,responseType:l,headers:u,withCredentials:h="same-origin",fetchOptions:g}=nt(e);l=l?(l+"").toLowerCase():"text";let w=jn([s,o&&o.toAbortSignal()],i),p;const m=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let f;try{if(d&&kn&&n!=="get"&&n!=="head"&&(f=await In(u,r))!==0){let O=new Request(t,{method:"POST",body:r,duplex:"half"}),F;if(a.isFormData(r)&&(F=O.headers.get("content-type"))&&u.setContentType(F),O.body){const[j,v]=Ne(f,$(Pe(d)));r=_e(O.body,je,j,v)}}a.isString(h)||(h=h?"include":"omit");const S="credentials"in Request.prototype;p=new Request(t,{...g,signal:w,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:S?h:void 0});let x=await fetch(p);const R=le&&(l==="stream"||l==="response");if(le&&(c||R&&m)){const O={};["status","statusText","headers"].forEach(Se=>{O[Se]=x[Se]});const F=a.toFiniteNumber(x.headers.get("content-length")),[j,v]=c&&Ne(F,$(Pe(c),!0))||[];x=new Response(_e(x.body,je,j,()=>{v&&v(),m&&m()}),O)}l=l||"text";let P=await V[a.findKey(V,l)||"text"](x,e);return!R&&m&&m(),await new Promise((O,F)=>{et(O,F,{data:P,headers:C.from(x.headers),status:x.status,statusText:x.statusText,config:e,request:p})})}catch(S){throw m&&m(),S&&S.name==="TypeError"&&/fetch/i.test(S.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,p),{cause:S.cause||S}):y.from(S,S&&S.code,e,p)}}),ue={http:Qt,xhr:Fn,fetch:Mn};a.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Be=e=>`- ${e}`,vn=e=>a.isFunction(e)||e===null||e===!1,ot={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!vn(n)&&(r=ue[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Be).join(`
`):" "+Be(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ue};function oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function De(e){return oe(e),e.headers=C.from(e.headers),e.data=se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ot.getAdapter(e.adapter||be.adapter)(e).then(function(r){return oe(e),r.data=se.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Ye(r)||(oe(e),r&&r.response&&(r.response.data=se.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const it="1.7.7",ge={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ge[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Le={};ge.transitional=function(t,n,r){function s(o,i){return"[Axios v"+it+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Le[i]&&(Le[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Hn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new y("option "+o+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const fe={assertOptions:Hn,validators:ge},_=fe.validators;class W{constructor(t){this.defaults=t,this.interceptors={request:new Ae,response:new Ae}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&fe.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:fe.assertOptions(s,{encode:_.function,serialize:_.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=C.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,h=0,g;if(!d){const p=[De.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),g=p.length,u=Promise.resolve(n);h<g;)u=u.then(p[h++],p[h++]);return u}g=c.length;let w=n;for(h=0;h<g;){const p=c[h++],m=c[h++];try{w=p(w)}catch(f){m.call(this,f);break}}try{u=De.call(this,w)}catch(p){return Promise.reject(p)}for(h=0,g=l.length;h<g;)u=u.then(l[h++],l[h++]);return u}getUri(t){t=D(this.defaults,t);const n=tt(t.baseURL,t.url);return Xe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){W.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(D(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}W.prototype[t]=n(),W.prototype[t+"Form"]=n(!0)});const J=W;class we{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new we(function(s){t=s}),cancel:t}}}const zn=we;function Jn(e){return function(n){return e.apply(null,n)}}function $n(e){return a.isObject(e)&&e.isAxiosError===!0}const de={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(de).forEach(([e,t])=>{de[t]=e});const Vn=de;function at(e){const t=new J(e),n=qe(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return at(D(e,s))},n}const E=at(be);E.Axios=J;E.CanceledError=k;E.CancelToken=zn;E.isCancel=Ye;E.VERSION=it;E.toFormData=Z;E.AxiosError=y;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Jn;E.isAxiosError=$n;E.mergeConfig=D;E.AxiosHeaders=C;E.formToJSON=e=>Qe(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=ot.getAdapter;E.HttpStatusCode=Vn;E.default=E;const Wn=E,sr=()=>{const{width:e}=dt(),[t,n]=L.useState([]),[r,s]=L.useState({currentPage:0,itemsPerPage:10}),[o,i]=L.useState("");L.useEffect(()=>{Wn.get("https://script.google.com/macros/s/AKfycbx300sNNOBDLagVaE0fdF3cl9Aq92AjZZNf1_Tt6N0U9oP_LvaG2Pn4JzKPFEtz5EnCUg/exec").then(f=>{n(f.data)}).catch(f=>console.error("Error fetching data:",f))},[]);const{currentPage:c,itemsPerPage:d}=r,l=t.length,u=Math.ceil(l/d),g=t.filter(f=>f["Service Unit Report "].toLowerCase().includes(o.toLowerCase())).slice(c*d,(c+1)*d),w=f=>{f>=0&&f<u&&s({...r,currentPage:f})},p=["Ration Card","Voter Id","Aadhar Card","Pan Card","College Application","License and RTO Services","Money Transfer Services","Counselling Apply","TN Police","TNEB","Online Payments","Dharisanam Bookings","Typing Services","MSME","UDAY Scheme","Income Certificate","Community Certificate","Nativity Certificate","Intercaste Marriage Certificate","Obc Certificate","No Male Child Certificate","First Graduate Certificate","Small/Marginal Farmer Certificate","Widow Certificate","Deserted Women Certificate","Disability Pension Scheme","Widow Pension Scheme","Deserted Women Pension Scheme","Unmarried Women Pension Scheme","Old Age Pension Scheme","TN Employment Registration","Government Job Application","Passport","Flight Ticket","Visa","Certificate Attestation","Bus Booking","Visa Stamping","Cruise Booking","Hotel Booking","Medical Appointment","Tour Services","Total"],m=[{title:"Service Unit Report",dataIndex:"Service Unit Report ",key:"Service Unit Report ",fixed:"left",render:f=>p.includes(f)?f:""},...Object.keys(t[0]||{}).filter(f=>f!=="Service Unit Report ").map(f=>({title:f.trim(),dataIndex:f.trim(),key:f.trim()}))];return b.jsx("div",{className:"orders-table",children:b.jsxs("div",{className:"flex flex-col flex-1 gap-6 py-4 px-5 xs:px-6",children:[b.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[b.jsx(ft,{wrapperClass:"flex-1",value:o,onChange:i,placeholder:"Search for Service..."}),b.jsxs("button",{className:"btn btn--base h-[50px] px-5 gap-2",children:[b.jsx("i",{className:"icon-arrow-down-to-line-regular text-[16px]"}),"Export"]})]}),b.jsx(ut,{columns:m,dataSource:g,rowKey:"Service Unit Report ",pagination:!1,scroll:{x:"max-content"}}),e<768?b.jsx(Ee,{currentPage:c,totalItems:l,itemsPerPage:d,onPageChange:w}):b.jsx(Ee,{currentPage:c,totalItems:l,itemsPerPage:d,onPageChange:w})]})})};export{rr as F,nr as O,sr as a};
