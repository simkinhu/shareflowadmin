import{d as b,r as d,w as y,q as w,j as u,k as g,l as t,F as k,ab as $,Z as S,_ as n,c as f,u as r,ac as B,aa as i,B as I,K as D,ad as j,ae as C}from"./@vue-Ca6oPw20.js";import{_ as E,b as F,c as V,d as M,i as N,f as z}from"../index-D5LF8NUt.js";import"./pinia-B0xTW-XS.js";import"./vue-demi-Dq6ymT-8.js";import"./@vueuse-BnZciM7y.js";import"./axios-DTyqpfTh.js";import"./ant-design-vue-CyiF9e54.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@babel-BiFW4_mA.js";import"./@ant-design-C6rk-XVk.js";import"./@ctrl-DOFZgDuz.js";import"./lodash-es-D9ej4-U1.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";import"./@multiavatar-dxrVjIoY.js";import"./crypto-js-l0AFIALE.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-BkWO730n.js";import"./radix-vue-B6u9mWk8.js";import"./@floating-ui-DW8MF69D.js";import"./@radix-icons--IQtXok_.js";import"./@iconify-DzGEP68A.js";import"./lucide-vue-next-BGOoG6k-.js";import"./vue-router-Dial6ibt.js";const l=c=>(j("data-v-9328de25"),c=c(),C(),c),A={class:"md:min-h-[927px] max-h-[927px] pt-10 xm:px-5 sm:px-5 xm:pt-5 sm:pt-5"},L={class:"grid sm:grid-cols-2 md:gap-2 lg:grid-cols-5 xl:grid-cols-5 gap-3 pt-5 px-5"},P={class:"space-y-2"},T={class:"flex flex-col space-y-2"},U={class:"flex items-center justify-between"},q=l(()=>t("span",{class:"text-sm font-medium"},"创建时间:",-1)),H={class:"text-sm"},K={class:"flex items-center justify-between"},R=l(()=>t("span",{class:"text-sm font-medium"},"激活时间:",-1)),Y={class:"text-sm"},Z=l(()=>t("div",{class:"lg:w-[270px]"},null,-1)),G={class:"flex items-center justify-between"},J=l(()=>t("span",{class:"text-sm font-medium"},"激活套餐:",-1)),O={class:"text-sm"},Q={class:"mt-4 flex flex-col sm:flex-row items-center justify-between px-5"},W={class:"text-sm text-gray-600 mb-2 sm:mb-0"},X={class:"space-x-2"},tt=["disabled"],st=["disabled"],et=b({__name:"cdkuse",setup(c){const p=d([]),m=d(0),a=d(1),_=d(12),x=async()=>{try{const e=window.VITE_API_BASE_URL,s=await N.post(`${e}/app/user/cdklist?page=${a.value}&size=${_.value}`);s.data.code===200?(p.value=s.data.data.list,m.value=s.data.data.total):console.error("Failed to fetch data:",s.data.message)}catch(e){console.error("Error fetching data:",e)}},v=e=>{const s=new Date(e);return`${s.getFullYear()}/${s.getMonth()+1}/${s.getDate()} ${s.getHours()}:${String(s.getMinutes()).padStart(2,"0")}:${String(s.getSeconds()).padStart(2,"0")}`},h=e=>{a.value=e};return y([a,_],x),w(x),(e,s)=>(u(),g("div",A,[t("div",L,[(u(!0),g(k,null,$(p.value,o=>(u(),S(r(M),{key:o.id,class:"card cardonline"},{default:n(()=>[f(r(E),{class:"grid pt-5 !pb-3 items-start gap-2 space-y-0 cdkcard"},{default:n(()=>[t("div",P,[f(r(F),{class:"text-sm"},{default:n(()=>[B(i(o.cdkey_code),1)]),_:2},1024)])]),_:2},1024),f(r(V),{class:"pb-4 pt-3 w-full"},{default:n(()=>[t("div",T,[t("div",U,[q,t("span",H,i(v(o.cdkey_cretetime)),1)]),t("div",K,[R,t("span",Y,i(v(o.cdkey_activetime)),1)]),Z,t("div",G,[J,t("span",O,i(o.package_name),1)])])]),_:2},1024)]),_:2},1024))),128))]),I(t("div",Q,[t("div",W," 共 "+i(m.value)+" 个累计激活 ",1),t("div",X,[t("button",{class:"px-3 py-1 border rounded disabled:opacity-50",disabled:a.value===1,onClick:s[0]||(s[0]=o=>h(a.value-1))}," 上一页 ",8,tt),t("button",{class:"px-3 py-1 border rounded disabled:opacity-50",disabled:a.value*_.value>=m.value,onClick:s[1]||(s[1]=o=>h(a.value+1))}," 下一页 ",8,st)])],512),[[D,p.value]])]))}}),Ct=z(et,[["__scopeId","data-v-9328de25"]]);export{Ct as default};