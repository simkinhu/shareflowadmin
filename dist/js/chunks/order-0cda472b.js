import{i as L}from"../index-c284de7c.js";import{_ as M}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-5ab39e07.js";import{u as U}from"./userShare-0e918012.js";import{s as A}from"./pinia-98ec2995.js";import{E as $}from"./ant-design-vue-6548dd29.js";import{b as j,J as h,y as z,K as F,l as G,D as V}from"./vuetify-0a3604cc.js";import{d as J,r as i,j as K,w as Q,aS as q,aJ as a,a8 as n,c as d,a6 as x,bl as p,a9 as l,F as o,aQ as c,b2 as m,G as _,u as w}from"./@vue-7e44e6dd.js";import"./vue-router-0e41780a.js";import"./dayjs-869360bd.js";import"./@multiavatar-7283d2b3.js";import"./axios-6f43ddff.js";/* empty css             */import"./vue3-apexcharts-fb146ff1.js";import"./vue-fdaf27ce.js";import"./apexcharts-a35677a7.js";import"./core-js-40ace11a.js";import"./vue-demi-71ba0ef2.js";import"./@babel-8a290753.js";import"./@ant-design-bd925dbd.js";import"./@ctrl-044b369f.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-5efc5547.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-ef06c517.js";import"./dom-align-529d0cdc.js";import"./lodash-es-5af3e9d7.js";import"./async-validator-dee29e8b.js";import"./throttle-debounce-87e7e444.js";import"./ChatBc-abd90dc1.js";import"./crypto-js-3b32aad8.js";const Se=J({setup(H){const E=$.PRESENTED_IMAGE_SIMPLE,P=U(),{isLogin:S}=A(P),s=i([]),v=i(0),u=i(1),f=i(10),b=i(new Map),C=K(()=>Math.ceil(v.value/f.value)),I=async(t=1,y=10)=>{const k=window.VITE_API_BASE_URL;try{const[e]=await Promise.all([L.post(k+`/app/user/order?page=${t}&size=${y}`)]);e.data.code===1?(s.value=e.data.data.list||[],v.value=e.data.data.total||0):(s.value=[],console.error("请求错误:",e.data.message))}catch(e){s.value=[],console.error("请求错误:",e)}};Q(S,t=>{t?I(u.value,f.value):s.value=[]},{immediate:!0});const T=t=>t===1?"微信支付":t===2?"支付宝支付":"第三方支付",B=t=>t===1?"已支付":t===0?"未支付":t,N=i({title:"订单历史"}),R=[{text:"系统主页",href:"/"},{text:"订单历史",href:"/user/order",disabled:!0}],g=[{title:"用户名",dataIndex:"user",key:"user"},{title:"订单号",dataIndex:"order_no",key:"order_no"},{title:"创建时间",dataIndex:"pay_datatime",key:"pay_datatime"},{title:"激活套餐",dataIndex:"package_name",key:"package_name",width:100},{title:"支付金额",dataIndex:"payment_amount",key:"payment_amount",width:100},{title:"支付状态",dataIndex:"payment_status",key:"payment_status"},{title:"支付渠道",dataIndex:"payment_type",key:"payment_type"},{title:"支付时间",dataIndex:"payment_completed_at",key:"payment_completed_at",width:210}],D=t=>{u.value=t,I(u.value,f.value)};return(t,y)=>{const k=q("a-empty");return a(),n(o,null,[d(M,{title:N.value.title,breadcrumbs:R},null,8,["title"]),s.value&&s.value.length>0?(a(),x(V,{key:0},{default:p(()=>[d(h,null,{default:p(()=>[l("thead",null,[l("tr",null,[(a(),n(o,null,c(g,e=>l("th",{key:e.title},m(e.title),1)),64))])]),l("tbody",null,[(a(!0),n(o,null,c(s.value,e=>(a(),n("tr",{key:e.id},[(a(),n(o,null,c(g,r=>l("td",{key:r.key},[r.dataIndex==="pay_datatime"||r.dataIndex==="payment_completed_at"?(a(),n(o,{key:0},[_(m(e[r.dataIndex]?e[r.dataIndex].replace("T"," "):r.dataIndex==="payment_completed_at"?"未支付":""),1)],64)):r.dataIndex==="product_id"?(a(),n(o,{key:1},[_(m(b.value.get(e.product_id)||"未知套餐"),1)],64)):r.dataIndex==="payment_status"?(a(),x(j,{key:2,color:e.payment_status===1?"green":"red"},{default:p(()=>[_(m(B(e.payment_status)),1)]),_:2},1032,["color"])):r.dataIndex==="payment_type"?(a(),n(o,{key:3},[_(m(T(e.payment_type)),1)],64)):(a(),n(o,{key:4},[_(m(e[r.dataIndex]),1)],64))])),64))]))),128))])]),_:1}),d(G,{justify:"center"},{default:p(()=>[d(z,{cols:"12"},{default:p(()=>[d(F,{modelValue:u.value,"onUpdate:modelValue":[y[0]||(y[0]=e=>u.value=e),D],length:w(C)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})):(a(),x(V,{key:1},{default:p(()=>[d(h,null,{default:p(()=>[l("thead",null,[l("tr",null,[(a(),n(o,null,c(g,e=>l("th",{key:e.title},m(e.title),1)),64))])])]),_:1}),d(k,{image:w(E)},null,8,["image"])]),_:1}))],64)}}});export{Se as default};
