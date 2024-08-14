import{R as M,r as B,S as D,w as $,a as T,Q as E,U as W,V as J,e as tt,o as et,n as st,i as nt,W as ot,b as ct,X as rt,t as ut}from"./@vue-Ca6oPw20.js";var at=!1;/*!
 * pinia v2.2.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let K;const p=t=>K=t,Q=Symbol();function L(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var x;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(x||(x={}));function vt(){const t=M(!0),o=t.run(()=>B({}));let s=[],e=[];const r=D({install(u){p(r),r._a=u,u.provide(Q,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!at?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const U=()=>{};function A(t,o,s,e=U){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&tt()&&et(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const ft=t=>t(),H=Symbol(),I=Symbol();function O(t,o){t instanceof Map&&o instanceof Map?o.forEach((s,e)=>t.set(e,s)):t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];L(r)&&L(e)&&t.hasOwnProperty(s)&&!E(e)&&!W(e)?t[s]=O(r,e):t[s]=e}return t}const it=Symbol();function lt(t){return!L(t)||!t.hasOwnProperty(it)}const{assign:y}=Object;function ht(t){return!!(E(t)&&t.effect)}function bt(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let C;function b(){a||(s.state.value[t]=r?r():{});const S=ot(s.state.value[t]);return y(S,u,Object.keys(f||{}).reduce((v,_)=>(v[_]=D(ct(()=>{p(s);const m=s._s.get(t);return f[_].call(m,m)})),v),{}))}return C=X(t,b,o,s,e,!0),C}function X(t,o,s={},e,r,u){let f;const a=y({actions:{}},s),C={deep:!0};let b,S,v=[],_=[],m;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),B({});let N;function V(c){let n;b=S=!1,typeof c=="function"?(c(e.state.value[t]),n={type:x.patchFunction,storeId:t,events:m}):(O(e.state.value[t],c),n={type:x.patchObject,payload:c,storeId:t,events:m});const i=N=Symbol();st().then(()=>{N===i&&(b=!0)}),S=!0,P(v,n,e.state.value[t])}const q=u?function(){const{state:n}=s,i=n?n():{};this.$patch(j=>{y(j,i)})}:U;function z(){f.stop(),v=[],_=[],e._s.delete(t)}const F=(c,n="")=>{if(H in c)return c[I]=n,c;const i=function(){p(e);const j=Array.from(arguments),g=[],k=[];function Z(l){g.push(l)}function G(l){k.push(l)}P(_,{args:j,name:i[I],store:h,after:Z,onError:G});let w;try{w=c.apply(this&&this.$id===t?this:h,j)}catch(l){throw P(k,l),l}return w instanceof Promise?w.then(l=>(P(g,l),l)).catch(l=>(P(k,l),Promise.reject(l))):(P(g,w),w)};return i[H]=!0,i[I]=n,i},Y={_p:e,$id:t,$onAction:A.bind(null,_),$patch:V,$reset:q,$subscribe(c,n={}){const i=A(v,c,n.detached,()=>j()),j=f.run(()=>$(()=>e.state.value[t],g=>{(n.flush==="sync"?S:b)&&c({storeId:t,type:x.direct,events:m},g)},y({},C,n)));return i},$dispose:z},h=T(Y);e._s.set(t,h);const R=(e._a&&e._a.runWithContext||ft)(()=>e._e.run(()=>(f=M()).run(()=>o({action:F}))));for(const c in R){const n=R[c];if(E(n)&&!ht(n)||W(n))u||(d&&lt(n)&&(E(n)?n.value=d[c]:O(n,d[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const i=F(n,c);R[c]=i,a.actions[c]=n}}return y(h,R),y(J(h),R),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:c=>{V(n=>{y(n,c)})}}),e._p.forEach(c=>{y(h,f.run(()=>c({store:h,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(h.$state,d),b=!0,S=!0,h}function _t(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,C){const b=rt();return a=a||(b?nt(Q,null):null),a&&p(a),a=K,a._s.has(e)||(u?X(e,o,r,a):bt(e,r,a)),a._s.get(e)}return f.$id=e,f}function mt(t){{t=J(t);const o={};for(const s in t){const e=t[s];(E(e)||W(e))&&(o[s]=ut(t,s))}return o}}export{vt as c,_t as d,mt as s};