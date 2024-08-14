import{_ as Q}from"./Skeleton.vue_vue_type_script_setup_true_lang-B5trHyCI.js";import{u as W,a as X,_ as A,b as L,c as Y,d as D,e as ee,i as te,f as se}from"../index-9lME9WWa.js";import{s as oe}from"./pinia-R2irzhdd.js";import{u as ae}from"./useConfigStore-BM64SnVO.js";import{L as re}from"./@ant-design-C6rk-XVk.js";import{d as le}from"./lodash-es-D9ej4-U1.js";import{b as ne,c as ce,A as ie,I as de,G as ue,K as pe}from"./lucide-vue-next-BGOoG6k-.js";import{P as me,a as i}from"./ant-design-vue-CyiF9e54.js";import{d as ge,h as fe,r,b as N,q as _e,j as l,k as n,c as o,_ as c,u as s,ac as V,l as h,F as q,ab as z,Z as ve,a6 as y,a4 as he,aa as g}from"./@vue-Ca6oPw20.js";import"./@vueuse-BnZciM7y.js";import"./axios-DTyqpfTh.js";import"./@multiavatar-dxrVjIoY.js";import"./crypto-js-l0AFIALE.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-BkWO730n.js";import"./radix-vue-B6u9mWk8.js";import"./@floating-ui-DW8MF69D.js";import"./@radix-icons--IQtXok_.js";import"./@iconify-DzGEP68A.js";import"./vue-router-Dial6ibt.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@babel-BiFW4_mA.js";import"./@ctrl-DOFZgDuz.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";const ye={class:"chatbox"},be={key:0,class:"grid gap-3 xm:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2x:grid-cols-5 p-1"},ke={class:"flex items-center justify-between"},we={key:1,class:"title"},xe={key:2,class:"title"},Se={class:"pb-4 w-10/12 m-auto"},Ce={key:1,class:"grid gap-3 xm:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2x:grid-cols-5 p-1"},Te=ge({__name:"chatgpt",setup($e){fe(re,{style:{fontSize:"24px"},spin:!0});const u=ae(),E=r(!0),p=r([]),b=r(0),f=r(1),_=r(!1),k=r(!1),w=r(!1),x=r(""),S=r(!1),C=r(""),R=N(()=>f.value<b.value),F=N(()=>p.value.length>0),O=W(),{useremail:Be,userAvatar:Me,userToken:T,expireTime:U,isPlus:Ie,isLogin:Pe,expired:Ae,daysBetween:Le}=oe(O),j=X(),{setActiveTab:G}=j,$=async(t,a,e)=>{if(k.value){i.info("没有更多数据了");return}_.value=!0;try{f.value>1&&i.loading({content:"正在加载数据，请稍候...",key:"loadingMessage"});const d=window.VITE_API_BASE_URL,M=await te.post(`${d}/app/box/islist`,{type:t,page:a,size:e}),m=M.data.data.list||[];if(a===1?p.value=m:m.length>0?(p.value=[...p.value,...m],i.success({content:"数据加载完成，网页下滑查看更多频道!",key:"loadingMessage",duration:2})):(i.info("没有更多数据了"),k.value=!0),m.length>0){const J=m.reduce((I,P)=>P.statusinfo.count<I.statusinfo.count?P:I);C.value=J.carid}b.value=M.data.data.totalPages||0,E.value=!1}catch(d){console.error("Request error:",d),i.error("加载数据失败，请稍后重试")}finally{_.value=!1}},H=le(()=>{const t=document.querySelector(".chatbox");t&&t.scrollTop+t.clientHeight>=t.scrollHeight-100&&!R.value&&!_.value&&(f.value+=1,$("page",f.value,10))},300);_e(async()=>{$("page",1,43);const t=document.querySelector(".chatbox");t&&t.addEventListener("scroll",H),await u.loadSettingsFromAPI(),w.value=u.getSetting("car_name_enable")===!0,x.value=String(u.getSetting("car_gpt_name_content")||""),S.value=u.getSetting("teamopen")!==void 0?u.getSetting("teamopen")===!0:!1});const v=r(null),K=t=>{const a={border:"3px rgba(255, 0, 0, 0) solid",transition:"border-color 0.3s, box-shadow 0.3s",cursor:"pointer"};return v.value===t.id?{...a,border:`3px solid ${t.endpoint.labelColor}`,boxShadow:`1px 1px 10px ${t.endpoint.labelColor}`}:a},B=t=>{if(T.value===null){i.warning("您还没有登录，请先登录"),G("login");return}if(new Date>new Date(U.value)){i.warning("您的Token账户已过期，请续费");return}window.open(`/auth/logintoken?usertoken=${T.value}&carid=${t}`,"_blank")},Z=t=>S.value&&/t/i.test(t);return(t,a)=>(l(),n("div",ye,[F.value?(l(),n("div",be,[o(s(D),{class:"card cardonline",onClick:a[0]||(a[0]=e=>B(C.value))},{default:c(()=>[o(s(A),{class:"grid pt-5 !pb-3 items-start gap-2 space-y-0"},{default:c(()=>[o(s(L),{class:"text-sm pt-2"},{default:c(()=>[V("极速：快速自动选择节点")]),_:1})]),_:1}),o(s(Y),{class:"pb-6 pt-3"},{default:c(()=>[h("div",ke,[o(s(ne),{class:"h-5 w-5",color:"hsl(var(--primary))",style:{"stroke-width":"2"}}),o(s(ce),{class:"h-5 w-5",color:"hsl(var(--primary))",style:{"stroke-width":"2"}}),o(s(ie),{class:"h-5 w-5",color:"hsl(var(--primary))",style:{"stroke-width":"2"}}),o(s(de),{class:"h-5 w-6",color:"hsl(var(--primary))",style:{"stroke-width":"2"}}),o(s(ue),{class:"h-5 w-6",color:"hsl(var(--primary))",style:{"stroke-width":"2"}}),o(s(pe),{class:"h-5 w-6",color:"hsl(var(--primary))",style:{"stroke-width":"2"}})])]),_:1})]),_:1}),(l(!0),n(q,null,z(p.value,e=>(l(),ve(s(D),{key:e.id,class:"card",onMouseover:d=>v.value=e.id,onMouseleave:a[1]||(a[1]=d=>v.value=null),style:y(K(e)),onClick:d=>B(e.carid)},{default:c(()=>[o(s(A),{class:"grid pt-5 !pb-1.5 items-start p-5 gap-2 space-y-0"},{default:c(()=>[o(s(L),{class:"text-sm font-bold"},{default:c(()=>[Z(e.remark)?(l(),n("span",{key:0,class:"tag",style:y([{backgroundColor:e.endpoint.labelColor},{background:"#2dd4bf"}])},"Team",4)):he("",!0),h("span",{class:"tag",style:y({backgroundColor:e.endpoint.labelColor})},g(e.endpoint.label||"NO"),5),w.value?(l(),n("span",we,g(x.value)+g(e.id),1)):(l(),n("span",xe,g(e.carid),1))]),_:2},1024),o(s(ee),{class:"text-xs"},{default:c(()=>[V(" 实时状态："+g(e.endpoint.message),1)]),_:2},1024)]),_:2},1024),h("div",Se,[o(s(me),{percent:e.statusinfo.percent,size:[0,8],steps:4,"show-info":!1,"stroke-color":e.endpoint.color,"trail-color":e.endpoint.labelColor},null,8,["percent","stroke-color","trail-color"])])]),_:2},1032,["onMouseover","style","onClick"]))),128))])):(l(),n("div",Ce,[(l(),n(q,null,z(5,e=>o(s(Q),{key:e,class:"h-28"})),64))]))]))}}),ct=se(Te,[["__scopeId","data-v-2192f6e4"]]);export{ct as default};
