import{u as Q,i as K}from"../index-a145e6cf.js";import{u as X}from"./userShare-4a70d299.js";import{s as Y}from"./pinia-98ec2995.js";import{_ as Z,a as tt}from"./welcome-bg-2f0dab02.js";import{R as et,l as st}from"./Password.vue_vue_type_script_lang-cc2e4bcc.js";import{a6 as at,a7 as lt,a8 as ot,m as it,a9 as nt,h as ut}from"./@ant-design-bd925dbd.js";import{m as y,M as rt}from"./ant-design-vue-32902922.js";import{d as dt,r as c,o as ct,h as N,aJ as i,a6 as d,bl as e,c as s,a9 as a,a8 as n,G as u,b2 as r,a7 as m,aQ as $,F as I,aS as p,aC as H,aE as W}from"./@vue-7e44e6dd.js";import{_ as pt}from"./ChatBc-abd90dc1.js";import{_ as _t}from"./_plugin-vue_export-helper-c27b6911.js";import{x as v,B as q,l as U,b as S,n as ht,C as R,q as mt,m as b,D as gt,E as j,o as J,F as ft,G as vt,H as G}from"./vuetify-c962898f.js";import"./vue-router-0e41780a.js";import"./dayjs-9df2e3b6.js";import"./@multiavatar-7283d2b3.js";import"./axios-6f43ddff.js";/* empty css             */import"./vue3-apexcharts-fb146ff1.js";import"./vue-fdaf27ce.js";import"./apexcharts-a35677a7.js";import"./core-js-40ace11a.js";import"./vue-demi-71ba0ef2.js";import"./@babel-8a290753.js";import"./@ctrl-044b369f.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-5efc5547.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-ef06c517.js";import"./dom-align-529d0cdc.js";import"./lodash-es-5af3e9d7.js";import"./async-validator-dee29e8b.js";import"./throttle-debounce-87e7e444.js";import"./crypto-js-3b32aad8.js";import"./loginChat.vue_vue_type_style_index_0_lang-8f7b9816.js";const bt=dt({components:{Regist:et,Usercout:Z,loginChat:st,ApiOutlined:at,ThunderboltOutlined:lt,TrophyOutlined:ot,SwapRightOutlined:it,SwapLeftOutlined:nt},setup(){const t=X(),o=Q(),{useremail:h,userToken:f,userAvatar:_,expireTime:P,isPlus:g,isLogin:k,expired:M,daysBetween:z}=Y(t),O=c(""),L=c(""),T=c(!0),F=c(!1),x=c(""),D=c(!1),C=c(!1),A=c(""),E=c(""),B=c(!1),w=c(""),l=c(""),V=c([]);return ct(async()=>{await o.loadSettingsFromAPI(),O.value=String(o.getSetting("siteTitle")||""),L.value=String(o.getSetting("siteDescription")||""),T.value=o.getSetting("isbanner")!==void 0?o.getSetting("isbanner")===!0:!1,F.value=o.getSetting("isannoun")!==void 0?o.getSetting("isannoun")===!0:!1,D.value=o.getSetting("teamopen")!==void 0?o.getSetting("teamopen")===!0:!1,x.value=String(o.getSetting("isannoun_content")||""),C.value=o.getSetting("car_name_enable")===!0,A.value=String(o.getSetting("car_plus_name_content")||""),E.value=String(o.getSetting("car_gpt_name_content")||""),B.value=o.getSetting("tab_url_enable")===!0,w.value=String(o.getSetting("tab_url_name")||""),l.value=String(o.getSetting("tab_url_content")||""),V.value=o.bannerList}),{siteTitle:O,isbanner:T,isannoun:F,isannoun_content:x,teamopen:D,car_name_enable:C,car_plus_name_content:A,car_gpt_name_content:E,tab_url_enable:B,tab_url_name:w,tab_url_content:l,userStore:t,outlogin:()=>{rt.confirm({zIndex:99999,centered:!0,title:"提示？",icon:N(ut),content:N("div",{style:"color:red;"},"你确定退出登录吗？"),onOk(){t.logout(),y.success("已退出登录，如需再次使用请重新登录")},onCancel(){y.warning("您取消了退出！")}})},userToken:f,useremail:h,userAvatar:_,expireTime:P,isPlus:g,isLogin:k,expired:M,daysBetween:z,bannerList:V}},data(){return{activeTab:c("isplus"),userToken:c(null),segmented:{content:"soft",footer:"soft"},currentDate:new Date().toISOString().split("T")[0],pluslist:[],islist:[],notice:"",plustotal:0,istotal:0,ispage:1,pluspage:1,plushasMoreData:!0,ishasMoreData:!0,plusTotalPages:1,isTotalPages:1,pageSize:36,showgpt:"isplus",noticeisenable:!1,showOverlay:!0,loadingplus:!0,loadinggpt:!0}},created(){this.fetchAllData()},methods:{shouldShowTeam(t){return this.teamopen&&/t/i.test(t)},hideOverlay(){this.showOverlay=!1},goToSite(){let t=this.tab_url_content;window.open(t,"_blank")},clicktab(t){t==="isgpt"?this.showgpt="isgpt":t==="isplus"?this.showgpt="isplus":this.showgpt=""},toggleModal(){this.userStore.loginModal=!0},regtoggleModal(){this.userStore.registModel=!0},plusredirectTo(t){const o=new Date(this.expireTime),h=new Date,f=this.userToken;if(f===null){y.error("您还没有登录，请先登录"),this.userStore.loginModal=!0;return}else if(h>o){y.warning("您的UserToken账户已过期，请续费");return}else if(this.isPlus)window.open(`/auth/logintoken?usertoken=${f}&carid=${t}`,"_blank");else{y.error("您还不是Plus会员，请在线开通Plus会员专属频道权限");return}},isredirectTo(t){const o=this.userToken,h=new Date(this.expireTime),f=new Date;if(o===null){y.warning("您还没有登录，请先登录"),this.userStore.loginModal=!0;return}else if(f>h){y.warning("您的Token账户已过期，请续费");return}else window.open(`/auth/logintoken?usertoken=${o}&carid=${t}`,"_blank")},getlistpages(t){this.loadinggpt=!0;const o=this.showgpt,{pluspage:h,ispage:f,plusTotalPages:_,isTotalPages:P}=this;let g,k;if(o==="isplus"?(g=h+t,k=_):o==="isgpt"&&(g=f+t,k=P),g<1){y.info("已经是第一页了"),this.loadinggpt=!1;return}if(g>k){y.info("没有更多的频道了"),this.loadinggpt=!1;return}o==="isplus"?(this.pluspage=g,this.pluslist=[],this.fetchOtherData(g,"pluspage")):o==="isgpt"&&(this.ispage=g,this.islist=[],this.fetchOtherData(g,"ispage"))},fetchAllData(){this.fetchOtherData()},fetchOtherData(t=1,o="pluspage"){const h=this.pageSize,f=window.VITE_API_BASE_URL;K.post(f+"/app/share/list",{[o]:t,size:h}).then(_=>{this.notice=_.data.data.notice,o==="pluspage"&&(this.pluslist=_.data.data.pluslist||[],this.plustotal=_.data.data.plustotal||0,this.plusTotalPages=Math.ceil(this.plustotal/h),this.plushasMoreData=t<this.plusTotalPages,this.islist=_.data.data.islist||[],this.istotal=_.data.data.istotal||0,this.isTotalPages=Math.ceil(this.istotal/h),this.ishasMoreData=t<this.isTotalPages,this.loadingplus=!1,this.loadinggpt=!1),o==="ispage"&&(this.islist=_.data.data.islist||[],this.istotal=_.data.data.istotal||0,this.isTotalPages=Math.ceil(this.istotal/h),this.ishasMoreData=t<this.isTotalPages,this.loadingplus=!1,this.loadinggpt=!1),this.loadingplus=!1,this.loadinggpt=!1}).catch(_=>{this.loadingplus=!1,this.loadinggpt=!1,console.error("请求错误:",_)})}}});const yt={class:"d-flex align-center"},kt={key:0,class:"text-h5"},Ct=u(" Plus会员 "),St=u("普通会员"),wt=u("注销"),Tt={key:1,class:"text-h5"},Ft=u(" 欢迎回来， "),xt=u("立即登录 "),Dt={class:"text-subtitle-1 textSecondary mt-2"},At={class:"mt-8"},Et={class:"d-flex"},Bt={key:0,class:"text-subtitle-1 textPrimary mt-1"},Pt={key:1,class:"d-flex"},Ot={class:"text-h4 textPrimary"},Vt={key:0},Mt={key:1},zt={key:2,class:"d-flex"},Lt=a("h2",{class:"text-h5 textPrimary"},[a("div",null,"开通Plus会员可畅享4.0对话")],-1),$t=[Lt],It={key:0},Ut=a("div",{class:"text-subtitle-1 textPrimary mt-1"},"到期时间",-1),Rt={class:"d-flex"},jt={class:"text-h4 textPrimary"},Gt=a("div",{class:"mb-n2"},[a("img",{src:tt,alt:"image",width:"340"})],-1),Nt={key:0},Ht=["href"],Wt=["src","alt"],qt=["src","alt"],Jt=a("h5",{class:"text-h5"},"欢迎回来，",-1),Qt=a("div",{class:"text-subtitle-1 text-medium-emphasis mt-0"},"在此可以登录或注销您的账户",-1),Kt={class:"text-center mt-2 mb-3"},Xt=["innerHTML"],Yt={key:0},Zt={class:"text-h5 text-medium-emphasis text-center mt-3"},te={class:"text-h6 text-medium-emphasis text-center mb-5"},ee={class:"d-flex justify-center"},se=u("安全注销"),ae={key:1},le=a("div",{class:"text-h5 text-medium-emphasis text-center mt-3"},"游客",-1),oe=a("div",{class:"text-h6 text-medium-emphasis text-center mb-5"},"开通Plus会员可畅享4.0对话",-1),ie={class:"d-flex justify-center"},ne=u("立即登录"),ue=u("免费注册"),re=u(" ChatGPT 4.0 Plus频道 "),de=u(" ChatGPT 3.5 普通频道 "),ce=u("丝滑顺畅体验AIGC"),pe={class:"ml-auto d-flex justify-end"},_e={class:"ml-auto d-flex justify-end"},he={key:0,class:"loadingbox"},me={key:1,class:"loadingbox"},ge=a("div",{class:"d-sm-flex align-center mb-5"},null,-1),fe={key:0,class:"type",style:{background:"#3dd9eb"}},ve={class:"cartitle"},be={class:"message-with-dot"},ye={class:"progress-wrapper"},ke={key:0,class:"loadingbox"},Ce={key:1,class:"loadingbox"},Se=a("div",{class:"d-sm-flex align-center mb-5"},null,-1),we={class:"cartitle"},Te={class:"message-with-dot"},Fe={class:"progress-wrapper"},xe=a("div",{class:"d-sm-flex align-center mb-5"},null,-1),De={class:"embed-container"},Ae=["data"],Ee={key:0,class:"overlay"},Be=u("立即前往该站点"),Pe=u("关闭遮罩"),Oe={class:"px-8 py-8 py-lg-0"},Ve={class:"d-flex justify-space-between"},Me={class:"d-flex py-5 align-center notice"},ze=["innerHTML"],Le=a("div",{class:"d-none py-0 d-lg-block overflow-hidden"},[a("div",{class:"mb-n16 mt-3"},[a("img",{src:pt,alt:"breadcrumb"})])],-1);function $e(t,o,h,f,_,P){const g=p("a-carousel"),k=p("Usercout"),M=p("TrophyOutlined"),z=p("GhostIcon"),O=p("ThunderboltOutlined"),L=p("ApiOutlined"),T=p("SwapLeftOutlined"),F=p("SwapRightOutlined"),x=p("a-spin"),D=p("a-empty"),C=p("n-text"),A=p("a-progress"),E=p("a-card"),B=p("a-col"),w=p("a-row");return i(),d(U,null,{default:e(()=>[t.isbanner?(i(),d(v,{key:1,cols:"12",lg:"9",sm:"12"},{default:e(()=>[s(g,{autoplay:"",effect:"fade"},{default:e(()=>[(i(!0),n(I,null,$(t.bannerList,l=>(i(),n("div",{class:"homebanner",key:l.id},[l.is_enabled?(i(),n("div",Nt,[l.image_url!=="#"?(i(),n("a",{key:0,href:l.link_url,target:"_blank"},[a("img",{src:l.image_url,alt:l.title},null,8,Wt)],8,Ht)):(i(),n("img",{key:1,src:l.image_url,alt:l.title},null,8,qt))])):m("",!0)]))),128))]),_:1})]),_:1})):(i(),d(v,{key:0,cols:"12",lg:"8",sm:"6"},{default:e(()=>[s(R,{elevation:"0",rounded:"md",class:"bg-lightprimary border-0"},{default:e(()=>[s(q,{class:"pt-3 pb-0"},{default:e(()=>[s(U,null,{default:e(()=>[s(v,{cols:"12",sm:"6",class:"pt-sm-10 pt-5"},{default:e(()=>[a("div",yt,[a("div",null,[t.userStore.isLogin?(i(),n("h5",kt,[u(r(t.userStore.useremail)+" ",1),t.isPlus?(i(),d(S,{key:0,size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"red"},{default:e(()=>[Ct]),_:1})):(i(),d(S,{key:1,size:"small",class:"ml-2 elevation-0",variant:"elevated",color:""},{default:e(()=>[St]),_:1})),s(S,{size:"small",class:"ml-2 elevation-0",variant:"elevated",onClick:t.outlogin},{default:e(()=>[wt]),_:1},8,["onClick"])])):(i(),n("h5",Tt,[Ft,s(S,{class:"ml-2 elevation-0",size:"small",variant:"elevated",onClick:t.toggleModal},{default:e(()=>[xt]),_:1},8,["onClick"])])),a("h6",Dt,"注意，今天已经是 "+r(t.currentDate)+"了",1)])]),a("div",At,[a("div",Et,[a("div",null,[t.userStore.isLogin?(i(),n("div",Bt,"剩余天数")):m("",!0),t.userStore.isLogin?(i(),n("div",Pt,[a("h2",Ot,[t.userStore.expired?(i(),n("div",Vt,"已过期")):(i(),n("div",Mt,r(t.userStore.daysBetween),1))])])):(i(),n("div",zt,$t))]),s(ht,{vertical:"",class:"mx-5"}),t.userStore.isLogin?(i(),n("div",It,[Ut,a("div",Rt,[a("h2",jt,r(t.userStore.expireTime),1)])])):m("",!0)])])]),_:1}),s(v,{cols:"12",sm:"6",class:"text-sm-right"},{default:e(()=>[Gt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})),t.isbanner?(i(),d(v,{key:3,cols:"12",lg:"3",sm:"12"},{default:e(()=>[s(R,{elevation:"10"},{default:e(()=>[s(q,null,{default:e(()=>[Jt,Qt,a("div",Kt,[s(mt,{size:"120"},{default:e(()=>[a("div",{innerHTML:t.userStore.userAvatar,style:{width:"90px"}},null,8,Xt)]),_:1})]),t.isLogin?(i(),n("div",Yt,[a("div",Zt,r(t.useremail),1),a("div",te,"距离"+r(t.isPlus?"Plus":"普通")+"会员到期还剩"+r(t.daysBetween)+"天 ",1),a("div",ee,[s(b,{color:"primary",class:"mx-2",flat:"",to:"/user/plus"},{default:e(()=>[u(r(t.isPlus?"续费":"开通")+"会员",1)]),_:1}),s(b,{color:"error",class:"mx-2",variant:"outlined",flat:"",onClick:t.outlogin},{default:e(()=>[se]),_:1},8,["onClick"])])])):(i(),n("div",ae,[le,oe,a("div",ie,[s(b,{color:"primary",class:"mx-2",flat:"",onClick:t.toggleModal},{default:e(()=>[ne]),_:1},8,["onClick"]),s(b,{color:"error",class:"mx-2",variant:"outlined",flat:"",onClick:t.regtoggleModal},{default:e(()=>[ue]),_:1},8,["onClick"])])]))]),_:1})]),_:1})]),_:1})):(i(),d(v,{key:2,cols:"12",lg:"4",sm:"6"},{default:e(()=>[s(k)]),_:1})),s(v,{cols:"12"},{default:e(()=>[s(U,{class:"align-center"},{default:e(()=>[s(v,{cols:"12",md:"10"},{default:e(()=>[s(gt,{modelValue:t.activeTab,"onUpdate:modelValue":[o[0]||(o[0]=l=>t.activeTab=l),t.clicktab]},{default:e(()=>[s(j,{value:"isplus",color:"#a07be6"},{default:e(()=>[s(M,{style:{"font-size":"18px","margin-right":"8px"}}),re,s(S,{size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"#a07be6"},{default:e(()=>[u("共计 "+r(t.plustotal)+" 个频道 ",1)]),_:1})]),_:1}),s(j,{value:"isgpt",color:"#24d4ae"},{default:e(()=>[s(z,{"stroke-width":"2",width:"20",class:"v-icon--start"}),s(O,{style:{"font-size":"18px","margin-right":"8px"}}),de,s(S,{size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"#24d4ae"},{default:e(()=>[u("共计 "+r(t.istotal)+" 个频道 ",1)]),_:1})]),_:1}),t.tab_url_enable?(i(),d(j,{key:0,value:"isurl",color:"#3dd5e7"},{default:e(()=>[s(L,{style:{"font-size":"18px","margin-right":"8px"}}),u(" "+r(t.tab_url_name)+" ",1),s(S,{size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"#3dd5e7"},{default:e(()=>[ce]),_:1})]),_:1})):m("",!0)]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),t.showgpt=="isplus"&&t.plustotal>t.pageSize?(i(),d(v,{key:0,cols:"12",md:"2"},{default:e(()=>[s(J,{width:"100",class:"ml-0 ml-md-auto mt-3 mt-md-0"},{default:e(()=>[a("div",pe,[s(b,{icon:"",variant:"text",class:"text-medium-emphasis",onClick:o[1]||(o[1]=l=>t.getlistpages(-1))},{default:e(()=>[s(T)]),_:1}),s(b,{icon:"",variant:"text",class:"text-medium-emphasis",onClick:o[2]||(o[2]=l=>t.getlistpages(1))},{default:e(()=>[s(F)]),_:1})])]),_:1})]),_:1})):m("",!0),t.showgpt=="isgpt"?(i(),d(v,{key:1,cols:"12",md:"2"},{default:e(()=>[s(J,{width:"100",class:"ml-0 ml-md-auto mt-3 mt-md-0"},{default:e(()=>[a("div",_e,[s(b,{icon:"",variant:"text",class:"text-medium-emphasis",onClick:o[3]||(o[3]=l=>t.getlistpages(-1))},{default:e(()=>[s(T,{style:{"font-size":"30px"}})]),_:1}),s(b,{icon:"",variant:"text",class:"text-medium-emphasis",onClick:o[4]||(o[4]=l=>t.getlistpages(1))},{default:e(()=>[s(F,{style:{"font-size":"30px"}})]),_:1})])]),_:1})]),_:1})):m("",!0)]),_:1}),s(ft,{class:"rounded-md"},{default:e(()=>[s(vt,{modelValue:t.activeTab,"onUpdate:modelValue":o[5]||(o[5]=l=>t.activeTab=l)},{default:e(()=>[s(G,{value:"isplus"},{default:e(()=>[t.loadingplus?(i(),n("div",he,[s(x)])):m("",!0),t.pluslist.length==0?(i(),n("div",me,[s(D)])):m("",!0),ge,s(w,{gutter:[10,10]},{default:e(()=>[(i(!0),n(I,null,$(t.pluslist,l=>(i(),d(B,{class:"cardclss",xs:12,sm:12,md:8,lg:8,xl:4,key:l.carid},{default:e(()=>[s(E,{bodyStyle:{padding:"12px 16px"},class:H("boxclass "+(l.isplus?"pluscolor":"nopluscolor")),onClick:V=>t.plusredirectTo(l.carid)},{default:e(()=>[t.shouldShowTeam(l.remark)?(i(),n("div",fe,"Team")):m("",!0),a("div",{class:"type",style:W({background:l.endpoint.labelColor})},r(l.endpoint.label!=""?l.endpoint.label:"NO"),5),a("div",ve,[t.car_name_enable?(i(),d(C,{key:0,class:"title"},{default:e(()=>[u(r(t.car_plus_name_content)+r(l.id),1)]),_:2},1024)):(i(),d(C,{key:1,class:"title"},{default:e(()=>[u(r(l.carid),1)]),_:2},1024))]),a("div",be,"实时状态："+r(l.endpoint.message),1),a("div",ye,[s(A,{class:"progress-bar",size:[0,6],percent:l.statusinfo.percent,steps:4,"stroke-color":l.endpoint.color,"show-info":!1,trailColor:l.endpoint.labelColor},null,8,["percent","stroke-color","trailColor"])])]),_:2},1032,["class","onClick"])]),_:2},1024))),128))]),_:1})]),_:1}),s(G,{value:"isgpt"},{default:e(()=>[t.loadinggpt?(i(),n("div",ke,[s(x)])):m("",!0),t.islist.length===0?(i(),n("div",Ce,[s(D)])):m("",!0),Se,s(w,{gutter:[10,10]},{default:e(()=>[(i(!0),n(I,null,$(t.islist,l=>(i(),d(B,{class:"cardclss",xs:12,sm:12,md:8,lg:8,xl:4,key:l.carid},{default:e(()=>[s(E,{bodyStyle:{padding:"12px 16px"},class:H("boxclass "+(l.isplus?"pluscolor":"nopluscolor")),onClick:V=>t.isredirectTo(l.carid)},{default:e(()=>[a("div",{class:"type",style:W({background:l.endpoint.labelColor})},r(l.endpoint.label!=""?l.endpoint.label:"NO"),5),a("div",we,[t.car_name_enable?(i(),d(C,{key:0,class:"title"},{default:e(()=>[u(r(t.car_gpt_name_content)+r(l.id),1)]),_:2},1024)):(i(),d(C,{key:1,class:"title"},{default:e(()=>[u(r(l.carid),1)]),_:2},1024))]),a("div",Te,"实时状态："+r(l.endpoint.message),1),a("div",Fe,[s(A,{class:"progress-bar",size:[0,6],percent:l.statusinfo.percent,steps:4,"stroke-color":l.endpoint.color,"show-info":!1,trailColor:l.endpoint.labelColor},null,8,["percent","stroke-color","trailColor"])])]),_:2},1032,["class","onClick"])]),_:2},1024))),128))]),_:1})]),_:1}),s(G,{value:"isurl"},{default:e(()=>[xe,s(w,{gutter:[10,10]},{default:e(()=>[a("div",De,[a("object",{data:t.tab_url_content,class:"styled-object",type:"text/html",width:"100%",height:"720px"},null,8,Ae),t.showOverlay?(i(),n("div",Ee,[s(b,{color:"info",rounded:"",onClick:t.goToSite},{default:e(()=>[Be]),_:1},8,["onClick"]),s(b,{class:"ml-3",rounded:"",onClick:t.hideOverlay},{default:e(()=>[Pe]),_:1},8,["onClick"])])):m("",!0)])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t.isannoun?(i(),d(v,{key:4,cols:"12",lg:"12",sm:"12"},{default:e(()=>[s(R,{class:"bg-lightprimary elevation-0 rounded-md"},{default:e(()=>[a("div",Oe,[a("div",Ve,[a("div",Me,[a("div",{innerHTML:t.isannoun_content},null,8,ze)]),Le])])]),_:1})]),_:1})):m("",!0)]),_:1})}const ks=_t(bt,[["render",$e]]);export{ks as default};
