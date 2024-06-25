import{u as S,A as m,P as R,G as p,C as M,O as g,D as T,b as H,c as D,d as N,e as K,f as v,B as A}from"../index-c284de7c.js";import{j as o,d as z,r as d,k as V,aS as C,aJ as n,a6 as f,bl as c,c as i,a9 as E,u as h,G,b2 as y,a8 as x,a7 as I,n as F}from"./@vue-7e44e6dd.js";import{u as $}from"./userShare-0e918012.js";import{L as j,b,r as L,C as J,D as W}from"./vuetify-0a3604cc.js";const e=S(),w=o(()=>e.actTheme==="AQUA_THEME"?m.colors.primary:e.actTheme==="PURPLE_THEME"?R.colors.primary:e.actTheme==="GREEN_THEME"?p.colors.primary:e.actTheme==="CYAN_THEME"?M.colors.primary:e.actTheme==="ORANGE_THEME"?g.colors.primary:e.actTheme==="DARK_AQUA_THEME"?T.colors.primary:e.actTheme==="DARK_PURPLE_THEME"?H.colors.primary:e.actTheme==="DARK_GREEN_THEME"?D.colors.primary:e.actTheme==="DARK_CYAN_THEME"?N.colors.primary:e.actTheme==="DARK_ORANGE_THEME"?K.colors.primary:e.actTheme==="DARK_BLUE_THEME"?v.colors.primary:A.colors.primary);o(()=>e.actTheme==="AQUA_THEME"?m.colors.lightprimary:e.actTheme==="PURPLE_THEME"?R.colors.lightprimary:e.actTheme==="GREEN_THEME"?p.colors.lightprimary:e.actTheme==="CYAN_THEME"?M.colors.lightprimary:e.actTheme==="ORANGE_THEME"?g.colors.lightprimary:e.actTheme==="DARK_AQUA_THEME"?T.colors.lightprimary:e.actTheme==="DARK_PURPLE_THEME"?H.colors.lightprimary:e.actTheme==="DARK_GREEN_THEME"?D.colors.lightprimary:e.actTheme==="DARK_CYAN_THEME"?N.colors.lightprimary:e.actTheme==="DARK_ORANGE_THEME"?K.colors.lightprimary:e.actTheme==="DARK_BLUE_THEME"?v.colors.lightprimary:A.colors.lightprimary);o(()=>e.actTheme==="AQUA_THEME"?m.colors.secondary:e.actTheme==="PURPLE_THEME"?R.colors.secondary:e.actTheme==="GREEN_THEME"?p.colors.secondary:e.actTheme==="CYAN_THEME"?M.colors.secondary:e.actTheme==="ORANGE_THEME"?g.colors.secondary:e.actTheme==="DARK_AQUA_THEME"?T.colors.secondary:e.actTheme==="DARK_PURPLE_THEME"?H.colors.secondary:e.actTheme==="DARK_GREEN_THEME"?D.colors.secondary:e.actTheme==="DARK_CYAN_THEME"?N.colors.secondary:e.actTheme==="DARK_ORANGE_THEME"?K.colors.secondary:e.actTheme==="DARK_BLUE_THEME"?v.colors.secondary:A.colors.secondary);o(()=>e.actTheme==="AQUA_THEME"?m.colors.lightsecondary:e.actTheme==="PURPLE_THEME"?R.colors.lightsecondary:e.actTheme==="GREEN_THEME"?p.colors.lightsecondary:e.actTheme==="CYAN_THEME"?M.colors.lightsecondary:e.actTheme==="ORANGE_THEME"?g.colors.lightsecondary:e.actTheme==="DARK_AQUA_THEME"?T.colors.lightsecondary:e.actTheme==="DARK_PURPLE_THEME"?H.colors.lightsecondary:e.actTheme==="DARK_GREEN_THEME"?D.colors.lightsecondary:e.actTheme==="DARK_CYAN_THEME"?N.colors.lightsecondary:e.actTheme==="DARK_ORANGE_THEME"?K.colors.lightsecondary:e.actTheme==="DARK_BLUE_THEME"?v.colors.lightsecondary:A.colors.lightsecondary);o(()=>e.actTheme==="AQUA_THEME"||e.actTheme==="PURPLE_THEME"||e.actTheme==="GREEN_THEME"||e.actTheme==="CYAN_THEME"||e.actTheme==="ORANGE_THEME"?m.colors.grey100:e.actTheme==="DARK_AQUA_THEME"||e.actTheme==="DARK_PURPLE_THEME"||e.actTheme==="DARK_GREEN_THEME"||e.actTheme==="DARK_CYAN_THEME"||e.actTheme==="DARK_ORANGE_THEME"||e.actTheme==="DARK_BLUE_THEME"?T.colors.grey100:A.colors.grey100);const q={class:"d-flex align-center justify-space-between"},X=G("对话窗口数据概览"),Z=G("即时呈现您的会话窗口总数"),ee={class:"mb-sm-1 mb-6 d-flex align-center"},re={class:"text-h5 font-weight-bold"},te={key:0,class:"d-flex align-center"},se={class:"text-subtitle-1 ml-2 textSecondary"},ae={key:1,class:"d-flex align-center"},oe={class:"text-subtitle-1 ml-2 textSecondary"},ce={class:"p-5"},ue=z({setup(le){const t=$(),k=()=>{const r=[],s=new Date;for(let a=5;a>=0;a--){const u=new Date(s);u.setDate(s.getDate()-a),r.push({date:`${(u.getMonth()+1).toString().padStart(2,"0")}-${u.getDate().toString().padStart(2,"0")}`,count:0})}return r},O=o(()=>(t.userArray&&t.userArray.length>0?t.userArray:k()).map(r=>({x:r.date,y:r.count}))),l=d(0),_=d(""),U=d(0),P=d(!1);V(()=>{if(t.userArray.length>=2){const r=t.userArray[t.userArray.length-1].count,s=t.userArray[t.userArray.length-2].count;if(U.value=r,r>s){const a=r-s;l.value=Number((a/s*100).toFixed(2)),_.value="up"}else if(r<s){const a=s-r;l.value=Number((a/s*100).toFixed(2)),_.value="down"}else l.value=0,_.value=""}else U.value=t.userArray.length?t.userArray[t.userArray.length-1].count:0,l.value=0,_.value="";F(()=>{P.value=!0})});const B=o(()=>({chart:{type:"area",chart:{height:87,type:"donut",foreColor:"#adb0bb",fontFamily:"inherit"},fontFamily:"inherit",foreColor:"#a1aab2",toolbar:{show:!1},sparkline:{enabled:!0}},xaxis:{type:"category",labels:{rotate:-45,rotateAlways:!0,padding:{left:0,right:0},formatter:function(r){return r}}},grid:{padding:{left:1,right:1,top:1,bottom:1}},colors:[w.value],stroke:{curve:"smooth",width:2},fill:{type:"solid",opacity:.3},markers:{size:0,strokeWidth:2,fillOpacity:.9,strokeColor:"#fff",hover:{size:8}},tooltip:{theme:"dark",x:{show:!0},y:{formatter:function(r){return`${r} 个对话窗口`}}}})),Q=o(()=>({series:[{name:"共创建",data:O.value}]}));return(r,s)=>{const a=C("ArrowDownRightIcon"),u=C("ArrowUpRightIcon"),Y=C("apexchart");return n(),f(W,{elevation:"10"},{default:c(()=>[i(J,null,{default:c(()=>[E("div",q,[i(j,{class:"text-h5"},{default:c(()=>[X]),_:1}),h(t).isLogin?(n(),f(b,{key:0,size:"small",class:"ml-2 elevation-0",variant:"elevated"},{default:c(()=>[G("会话总量："+y(h(t).userCount)+" 个",1)]),_:1})):(n(),f(b,{key:1,size:"small",class:"ml-2 elevation-0",variant:"elevated"},{default:c(()=>[Z]),_:1}))]),E("div",ee,[E("h4",re,y(U.value),1),_.value==="down"?(n(),x("div",te,[i(L,{class:"bg-lightsuccess text-success ml-2",size:"20"},{default:c(()=>[i(a,{size:"18"})]),_:1}),E("span",se,"比昨天下降 "+y(l.value)+"%",1)])):(n(),x("div",ae,[i(L,{class:"bg-lightsuccess text-success ml-2",size:"20"},{default:c(()=>[i(u,{size:"18"})]),_:1}),E("span",oe,"比昨天上升 "+y(l.value)+"%",1)]))])]),_:1}),E("div",ce,[P.value?(n(),f(Y,{height:"87",key:h(w),type:"area",options:h(B),series:h(Q).series},null,8,["options","series"])):I("",!0)])]),_:1})}}}),he="/list/assets/welcome-bg-53f194a9.svg";export{ue as _,he as a};
