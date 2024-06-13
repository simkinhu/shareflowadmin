import{a as K}from"./axios-6f43ddff.js";import{u as X}from"./usershare-65317741.js";import{u as Y}from"../index-90b5883d.js";import{s as Z}from"./pinia-98ec2995.js";import{_ as tt,a as et}from"./welcome-bg-dffa49d4.js";import{l as st}from"./loginChat-e279e9ea.js";import{a6 as at,a7 as ot,a8 as lt,m as it,a9 as nt,h as ut}from"./@ant-design-05eaf6fc.js";import{m as y,M as rt}from"./ant-design-vue-84efdadc.js";import{d as dt,r as p,o as ct,h as R,aJ as i,a8 as n,c as e,bl as s,a6 as d,a9 as a,G as u,b2 as r,a7 as h,F as M,aQ as I,aS as c,aC as H,aE as J}from"./@vue-7e44e6dd.js";import{_ as pt}from"./ChatBc-abd90dc1.js";import{_ as _t}from"./_plugin-vue_export-helper-c27b6911.js";import{D as U,E as W,p as G,z as g,b as C,r as ht,i as mt,k as f,F as gt,G as j,l as Q,H as ft,I as vt,J as N}from"./vuetify-574a8d14.js";import"./@multiavatar-7283d2b3.js";import"./crypto-js-3b32aad8.js";import"./vue-router-0e41780a.js";import"./dayjs-c3e478c5.js";/* empty css             */import"./vue3-apexcharts-fb146ff1.js";import"./vue-fdaf27ce.js";import"./apexcharts-a35677a7.js";import"./core-js-40ace11a.js";import"./vue-demi-71ba0ef2.js";import"./@ctrl-044b369f.js";import"./@babel-692ca2d6.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-5efc5547.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-ef06c517.js";import"./dom-align-529d0cdc.js";import"./lodash-es-5af3e9d7.js";import"./async-validator-dee29e8b.js";import"./throttle-debounce-87e7e444.js";const kt=dt({components:{Usercout:tt,loginChat:st,ApiOutlined:at,ThunderboltOutlined:ot,TrophyOutlined:lt,SwapRightOutlined:it,SwapLeftOutlined:nt},setup(){const t=X(),o=Y(),{userToken:v,userAvatar:S,expireTime:_,isPlus:O,isLogin:m,expired:k,daysBetween:L}=Z(t),w=p(""),$=p(""),V=p(!0),F=p(!1),x=p(""),D=p(!1),A=p(!1),b=p(""),E=p(""),B=p(!1),P=p(""),T=p(""),z=p([]);return ct(async()=>{await o.loadSettingsFromAPI(),w.value=String(o.getSetting("siteTitle")||""),$.value=String(o.getSetting("siteDescription")||""),V.value=o.getSetting("isbanner")!==void 0?o.getSetting("isbanner")===!0:!1,F.value=o.getSetting("isannoun")!==void 0?o.getSetting("isannoun")===!0:!1,D.value=o.getSetting("teamopen")!==void 0?o.getSetting("teamopen")===!0:!1,x.value=String(o.getSetting("isannoun_content")||""),A.value=o.getSetting("car_name_enable")===!0,b.value=String(o.getSetting("car_plus_name_content")||""),E.value=String(o.getSetting("car_gpt_name_content")||""),B.value=o.getSetting("tab_url_enable")===!0,P.value=String(o.getSetting("tab_url_name")||""),T.value=String(o.getSetting("tab_url_content")||""),z.value=o.bannerList,document.title=w.value}),{siteTitle:w,isbanner:V,isannoun:F,isannoun_content:x,teamopen:D,car_name_enable:A,car_plus_name_content:b,car_gpt_name_content:E,tab_url_enable:B,tab_url_name:P,tab_url_content:T,userStore:t,outlogin:()=>{rt.confirm({zIndex:99999,centered:!0,title:"提示？",icon:R(ut),content:R("div",{style:"color:red;"},"你确定退出登录吗？"),onOk(){t.logout(),y.success("已退出登录，如需再次使用请重新登录")},onCancel(){y.warning("您取消了退出！")}})},userToken:v,userAvatar:S,expireTime:_,isPlus:O,isLogin:m,expired:k,daysBetween:L,bannerList:z}},data(){return{activeTab:p("isplus"),userToken:p(null),segmented:{content:"soft",footer:"soft"},currentDate:new Date().toISOString().split("T")[0],pluslist:[],islist:[],notice:"",plustotal:0,istotal:0,ispage:1,pluspage:1,plushasMoreData:!0,ishasMoreData:!0,plusTotalPages:1,isTotalPages:1,pageSize:36,showgpt:"isplus",noticeisenable:!1,showOverlay:!0,loadingplus:!0,loadinggpt:!0}},created(){const t=this.userToken||null;this.userStore.fetchUserData(t),this.fetchAllData()},methods:{shouldShowTeam(t){return this.teamopen&&/t/i.test(t)},hideOverlay(){this.showOverlay=!1},goToSite(){let t=this.tab_url_content;window.open(t,"_blank")},clicktab(t){t==="isgpt"?this.showgpt="isgpt":t==="isplus"?this.showgpt="isplus":this.showgpt=""},toggleModal(){this.userStore.loginModal=!0},plusredirectTo(t){const o=this.userToken;if(o===null){y.error("您还没有登录，请先登录"),this.userStore.loginModal=!0;return}else if(this.isPlus)window.open(`/auth/logintoken?usertoken=${o}&carid=${t}`,"_blank");else{y.error("您还不是Plus会员，请在线开通Plus会员专属频道权限");return}},isredirectTo(t){const o=this.userToken;if(o===null){y.warning("您还没有登录，请先登录"),this.userStore.loginModal=!0;return}else window.open(`/auth/logintoken?usertoken=${o}&carid=${t}`,"_blank")},getlistpages(t){this.loadinggpt=!0;const o=this.showgpt,{pluspage:v,ispage:S,plusTotalPages:_,isTotalPages:O}=this;let m,k;if(o==="isplus"?(m=v+t,k=_):o==="isgpt"&&(m=S+t,k=O),m<1){y.info("已经是第一页了"),this.loadinggpt=!1;return}if(m>k){y.info("没有更多的频道了"),this.loadinggpt=!1;return}o==="isplus"?(this.pluspage=m,this.fetchOtherData(m,"pluspage")):o==="isgpt"&&(this.ispage=m,this.fetchOtherData(m,"ispage"))},fetchAllData(){this.fetchOtherData()},fetchOtherData(t=1,o="pluspage"){const v=this.pageSize,S=window.VITE_API_BASE_URL;K.post(S+"/app/share/list",{[o]:t,size:v}).then(_=>{this.notice=_.data.data.notice,o==="pluspage"&&(this.pluslist=_.data.data.pluslist||[],this.plustotal=_.data.data.plustotal||0,this.plusTotalPages=Math.ceil(this.plustotal/v),this.plushasMoreData=t<this.plusTotalPages,this.islist=_.data.data.islist||[],this.istotal=_.data.data.istotal||0,this.isTotalPages=Math.ceil(this.istotal/v),this.ishasMoreData=t<this.isTotalPages,this.loadingplus=!1,this.loadinggpt=!1),o==="ispage"&&(this.islist=_.data.data.islist||[],this.istotal=_.data.data.istotal||0,this.isTotalPages=Math.ceil(this.istotal/v),this.ishasMoreData=t<this.isTotalPages,this.loadingplus=!1,this.loadinggpt=!1),this.loadingplus=!1,this.loadinggpt=!1}).catch(_=>{this.loadingplus=!1,this.loadinggpt=!1,console.error("请求错误:",_)})}}});const bt={class:"d-flex align-center"},yt={key:0,class:"text-h5"},Ct=u(" Plus会员 "),St=u("普通会员"),Tt=u("注销"),wt={key:1,class:"text-h5"},Ft=u(" 欢迎回来， "),xt=u("登录 / 注册"),Dt={class:"text-subtitle-1 textSecondary mt-2"},At={class:"mt-8"},Et={class:"d-flex"},Bt={key:0,class:"text-subtitle-1 textPrimary mt-1"},Pt={key:1,class:"d-flex"},Ot={class:"text-h4 textPrimary"},Vt={key:0},zt={key:1},Mt={key:2,class:"d-flex"},Lt=a("h2",{class:"text-h5 textPrimary"},[a("div",null,"开通Plus会员可畅享4.0对话")],-1),$t=[Lt],It={key:0},Ut=a("div",{class:"text-subtitle-1 textPrimary mt-1"},"到期时间",-1),Gt={class:"d-flex"},jt={class:"text-h4 textPrimary"},Nt=a("div",{class:"mb-n2"},[a("img",{src:et,alt:"image",width:"340"})],-1),Rt=["href"],Ht=["src","alt"],Jt=a("h5",{class:"text-h5"},"欢迎回来，",-1),Wt=a("div",{class:"text-subtitle-1 text-medium-emphasis mt-0"},"在此登录或注销您的Usertoken账户",-1),Qt={class:"text-center mt-2 mb-3"},qt=["innerHTML"],Kt={key:0},Xt={class:"text-h5 text-medium-emphasis text-center mt-3"},Yt={class:"text-h6 text-medium-emphasis text-center mb-5"},Zt={class:"d-flex justify-center"},te=u("安全注销"),ee={key:1},se=a("div",{class:"text-h5 text-medium-emphasis text-center mt-3"},"Token：ChatGPT",-1),ae=a("div",{class:"text-h6 text-medium-emphasis text-center mb-5"},"开通Plus会员可畅享4.0对话",-1),oe={class:"d-flex justify-center"},le=u("立即登录"),ie=u("免费注册"),ne=u(" ChatGPT 4.0 Plus频道 "),ue=u(" ChatGPT 3.5 普通频道 "),re=u("丝滑顺畅体验AIGC"),de={class:"ml-auto d-flex justify-end"},ce={class:"ml-auto d-flex justify-end"},pe={key:0,class:"loadingbox"},_e={key:1,class:"loadingbox"},he=a("div",{class:"d-sm-flex align-center mb-5"},null,-1),me={key:0,class:"type",style:{background:"#3dd9eb"}},ge={class:"cartitle"},fe={class:"message-with-dot"},ve={class:"progress-wrapper"},ke={key:0,class:"loadingbox"},be={key:1,class:"loadingbox"},ye=a("div",{class:"d-sm-flex align-center mb-5"},null,-1),Ce={class:"cartitle"},Se={class:"message-with-dot"},Te={class:"progress-wrapper"},we=a("div",{class:"d-sm-flex align-center mb-5"},null,-1),Fe={class:"embed-container"},xe=["data"],De={key:0,class:"overlay"},Ae=u("立即前往该站点"),Ee=u("关闭遮罩"),Be={class:"px-8 py-8 py-lg-0"},Pe={class:"d-flex justify-space-between"},Oe={class:"d-flex py-5 align-center notice"},Ve=["innerHTML"],ze=a("div",{class:"d-none py-0 d-lg-block overflow-hidden"},[a("div",{class:"mb-n16 mt-3"},[a("img",{src:pt,alt:"breadcrumb"})])],-1);function Me(t,o,v,S,_,O){const m=c("a-carousel"),k=c("Usercout"),L=c("TrophyOutlined"),w=c("GhostIcon"),$=c("ThunderboltOutlined"),V=c("ApiOutlined"),F=c("SwapLeftOutlined"),x=c("SwapRightOutlined"),D=c("a-spin"),A=c("a-empty"),b=c("n-text"),E=c("a-progress"),B=c("a-card"),P=c("a-col"),T=c("a-row"),z=c("loginChat");return i(),n(M,null,[e(G,null,{default:s(()=>[t.isbanner?(i(),d(g,{key:1,cols:"12",lg:"9",sm:"12"},{default:s(()=>[e(m,{autoplay:"",effect:"fade"},{default:s(()=>[(i(!0),n(M,null,I(t.bannerList,l=>(i(),n("div",{class:"homebanner",key:l.id},[l.is_enabled?(i(),n("a",{key:0,href:l.link_url,target:"_blank"},[a("img",{src:l.image_url,alt:l.title},null,8,Ht)],8,Rt)):h("",!0)]))),128))]),_:1})]),_:1})):(i(),d(g,{key:0,cols:"12",lg:"8",sm:"6"},{default:s(()=>[e(U,{elevation:"0",rounded:"md",class:"bg-lightprimary border-0"},{default:s(()=>[e(W,{class:"pt-3 pb-0"},{default:s(()=>[e(G,null,{default:s(()=>[e(g,{cols:"12",sm:"6",class:"pt-sm-10 pt-5"},{default:s(()=>[a("div",bt,[a("div",null,[t.userStore.isLogin?(i(),n("h5",yt,[u(r(t.userStore.userToken)+" ",1),t.isPlus?(i(),d(C,{key:0,size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"red"},{default:s(()=>[Ct]),_:1})):(i(),d(C,{key:1,size:"small",class:"ml-2 elevation-0",variant:"elevated",color:""},{default:s(()=>[St]),_:1})),e(C,{size:"small",class:"ml-2 elevation-0",variant:"elevated",onClick:t.outlogin},{default:s(()=>[Tt]),_:1},8,["onClick"])])):(i(),n("h5",wt,[Ft,e(C,{class:"ml-2 elevation-0",size:"small",variant:"elevated",onClick:t.toggleModal},{default:s(()=>[xt]),_:1},8,["onClick"])])),a("h6",Dt,"注意，今天已经是 "+r(t.currentDate)+"了",1)])]),a("div",At,[a("div",Et,[a("div",null,[t.userStore.isLogin?(i(),n("div",Bt,"剩余天数")):h("",!0),t.userStore.isLogin?(i(),n("div",Pt,[a("h2",Ot,[t.userStore.expired?(i(),n("div",Vt,"已过期")):(i(),n("div",zt,r(t.userStore.daysBetween),1))])])):(i(),n("div",Mt,$t))]),e(ht,{vertical:"",class:"mx-5"}),t.userStore.isLogin?(i(),n("div",It,[Ut,a("div",Gt,[a("h2",jt,r(t.userStore.expireTime),1)])])):h("",!0)])])]),_:1}),e(g,{cols:"12",sm:"6",class:"text-sm-right"},{default:s(()=>[Nt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})),t.isbanner?(i(),d(g,{key:3,cols:"12",lg:"3",sm:"12"},{default:s(()=>[e(U,{elevation:"10"},{default:s(()=>[e(W,null,{default:s(()=>[Jt,Wt,a("div",Qt,[e(mt,{size:"120"},{default:s(()=>[a("div",{innerHTML:t.userStore.userAvatar,style:{width:"90px"}},null,8,qt)]),_:1})]),t.isLogin?(i(),n("div",Kt,[a("div",Xt,"Token："+r(t.userToken),1),a("div",Yt,"距离"+r(t.isPlus?"Plus":"普通")+"会员到期还剩"+r(t.daysBetween)+"天",1),a("div",Zt,[e(f,{color:"primary",class:"mx-2",flat:"",to:"/user/plus"},{default:s(()=>[u(r(t.isPlus?"续费":"开通")+"会员",1)]),_:1}),e(f,{color:"error",class:"mx-2",variant:"outlined",flat:"",onClick:t.outlogin},{default:s(()=>[te]),_:1},8,["onClick"])])])):(i(),n("div",ee,[se,ae,a("div",oe,[e(f,{color:"primary",class:"mx-2",flat:"",onClick:t.toggleModal},{default:s(()=>[le]),_:1},8,["onClick"]),e(f,{color:"error",class:"mx-2",variant:"outlined",flat:"",onClick:t.toggleModal},{default:s(()=>[ie]),_:1},8,["onClick"])])]))]),_:1})]),_:1})]),_:1})):(i(),d(g,{key:2,cols:"12",lg:"4",sm:"6"},{default:s(()=>[e(k)]),_:1})),e(g,{cols:"12"},{default:s(()=>[e(G,{class:"align-center"},{default:s(()=>[e(g,{cols:"12",md:"10"},{default:s(()=>[e(gt,{modelValue:t.activeTab,"onUpdate:modelValue":[o[0]||(o[0]=l=>t.activeTab=l),t.clicktab]},{default:s(()=>[e(j,{value:"isplus",color:"#a07be6"},{default:s(()=>[e(L,{style:{"font-size":"18px","margin-right":"8px"}}),ne,e(C,{size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"#a07be6"},{default:s(()=>[u("共计 "+r(t.plustotal)+" 个频道 ",1)]),_:1})]),_:1}),e(j,{value:"isgpt",color:"#24d4ae"},{default:s(()=>[e(w,{"stroke-width":"2",width:"20",class:"v-icon--start"}),e($,{style:{"font-size":"18px","margin-right":"8px"}}),ue,e(C,{size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"#24d4ae"},{default:s(()=>[u("共计 "+r(t.istotal)+" 个频道 ",1)]),_:1})]),_:1}),t.tab_url_enable?(i(),d(j,{key:0,value:"isurl",color:"#3dd5e7"},{default:s(()=>[e(V,{style:{"font-size":"18px","margin-right":"8px"}}),u(" "+r(t.tab_url_name)+" ",1),e(C,{size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"#3dd5e7"},{default:s(()=>[re]),_:1})]),_:1})):h("",!0)]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),t.showgpt=="isplus"&&t.plustotal>t.pageSize?(i(),d(g,{key:0,cols:"12",md:"2"},{default:s(()=>[e(Q,{width:"100",class:"ml-0 ml-md-auto mt-3 mt-md-0"},{default:s(()=>[a("div",de,[e(f,{icon:"",variant:"text",class:"text-medium-emphasis",onClick:o[1]||(o[1]=l=>t.getlistpages(-1))},{default:s(()=>[e(F)]),_:1}),e(f,{icon:"",variant:"text",class:"text-medium-emphasis",onClick:o[2]||(o[2]=l=>t.getlistpages(1))},{default:s(()=>[e(x)]),_:1})])]),_:1})]),_:1})):h("",!0),t.showgpt=="isgpt"?(i(),d(g,{key:1,cols:"12",md:"2"},{default:s(()=>[e(Q,{width:"100",class:"ml-0 ml-md-auto mt-3 mt-md-0"},{default:s(()=>[a("div",ce,[e(f,{icon:"",variant:"text",class:"text-medium-emphasis",onClick:o[3]||(o[3]=l=>t.getlistpages(-1))},{default:s(()=>[e(F,{style:{"font-size":"30px"}})]),_:1}),e(f,{icon:"",variant:"text",class:"text-medium-emphasis",onClick:o[4]||(o[4]=l=>t.getlistpages(1))},{default:s(()=>[e(x,{style:{"font-size":"30px"}})]),_:1})])]),_:1})]),_:1})):h("",!0)]),_:1}),e(ft,{class:"rounded-md"},{default:s(()=>[e(vt,{modelValue:t.activeTab,"onUpdate:modelValue":o[5]||(o[5]=l=>t.activeTab=l)},{default:s(()=>[e(N,{value:"isplus"},{default:s(()=>[t.loadingplus?(i(),n("div",pe,[e(D)])):h("",!0),t.pluslist.length==0?(i(),n("div",_e,[e(A)])):h("",!0),he,e(T,{gutter:[10,10]},{default:s(()=>[(i(!0),n(M,null,I(t.pluslist,l=>(i(),d(P,{class:"cardclss",xs:24,sm:12,md:8,lg:8,xl:4,key:l.carid},{default:s(()=>[e(B,{bodyStyle:{padding:"12px 16px"},class:H("boxclass "+(l.isplus?"pluscolor":"nopluscolor")),onClick:q=>t.plusredirectTo(l.carid)},{default:s(()=>[t.shouldShowTeam(l.remark)?(i(),n("div",me,"Team")):h("",!0),a("div",{class:"type",style:J({background:l.endpoint.labelColor})},r(l.endpoint.label!=""?l.endpoint.label:"NO"),5),a("div",ge,[t.car_name_enable?(i(),d(b,{key:0,class:"title"},{default:s(()=>[u(r(t.car_plus_name_content)+r(l.id),1)]),_:2},1024)):(i(),d(b,{key:1,class:"title"},{default:s(()=>[u(r(l.carid),1)]),_:2},1024))]),a("div",fe,"实时状态："+r(l.endpoint.message),1),a("div",ve,[e(E,{class:"progress-bar",size:[0,6],percent:l.statusinfo.percent,steps:4,"stroke-color":l.endpoint.color,"show-info":!1,trailColor:l.endpoint.labelColor},null,8,["percent","stroke-color","trailColor"])])]),_:2},1032,["class","onClick"])]),_:2},1024))),128))]),_:1})]),_:1}),e(N,{value:"isgpt"},{default:s(()=>[t.loadinggpt?(i(),n("div",ke,[e(D)])):h("",!0),t.islist.length===0?(i(),n("div",be,[e(A)])):h("",!0),ye,e(T,{gutter:[10,10]},{default:s(()=>[(i(!0),n(M,null,I(t.islist,l=>(i(),d(P,{class:"cardclss",xs:24,sm:12,md:8,lg:8,xl:4,key:l.carid},{default:s(()=>[e(B,{bodyStyle:{padding:"12px 16px"},class:H("boxclass "+(l.isplus?"pluscolor":"nopluscolor")),onClick:q=>t.isredirectTo(l.carid)},{default:s(()=>[a("div",{class:"type",style:J({background:l.endpoint.labelColor})},r(l.endpoint.label!=""?l.endpoint.label:"NO"),5),a("div",Ce,[t.car_name_enable?(i(),d(b,{key:0,class:"title"},{default:s(()=>[u(r(t.car_gpt_name_content)+r(l.id),1)]),_:2},1024)):(i(),d(b,{key:1,class:"title"},{default:s(()=>[u(r(l.carid),1)]),_:2},1024))]),a("div",Se,"实时状态："+r(l.endpoint.message),1),a("div",Te,[e(E,{class:"progress-bar",size:[0,6],percent:l.statusinfo.percent,steps:4,"stroke-color":l.endpoint.color,"show-info":!1,trailColor:l.endpoint.labelColor},null,8,["percent","stroke-color","trailColor"])])]),_:2},1032,["class","onClick"])]),_:2},1024))),128))]),_:1})]),_:1}),e(N,{value:"isurl"},{default:s(()=>[we,e(T,{gutter:[10,10]},{default:s(()=>[a("div",Fe,[a("object",{data:t.tab_url_content,class:"styled-object",type:"text/html",width:"100%",height:"720px"},null,8,xe),t.showOverlay?(i(),n("div",De,[e(f,{color:"info",rounded:"",onClick:t.goToSite},{default:s(()=>[Ae]),_:1},8,["onClick"]),e(f,{class:"ml-3",rounded:"",onClick:t.hideOverlay},{default:s(()=>[Ee]),_:1},8,["onClick"])])):h("",!0)])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t.isannoun?(i(),d(g,{key:4,cols:"12",lg:"12",sm:"12"},{default:s(()=>[e(U,{class:"bg-lightprimary elevation-0 rounded-md"},{default:s(()=>[a("div",Be,[a("div",Pe,[a("div",Oe,[a("div",{innerHTML:t.isannoun_content},null,8,Ve)]),ze])])]),_:1})]),_:1})):h("",!0)]),_:1}),e(z)],64)}const fs=_t(kt,[["render",Me]]);export{fs as default};
