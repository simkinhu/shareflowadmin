import{aS as m,aJ as n,a6 as u,bl as a,a9 as r,c as o,b2 as w,j as U,aT as Le,u as s,r as y,w as j,ae as oe,aC as x,G as p,a8 as _,a7 as b,aB as Z,aQ as B,F as C,o as S,d as A,aD as Se,aq as Ie,aM as ze,aK as De,bn as Me,h as ae,B as Q}from"./@vue-7e44e6dd.js";import{u as ge,b as Ve,d as J,R as se}from"./vue-router-0e41780a.js";import{u as T,a as ye,i as ke,r as be}from"../index-fc077a7f.js";import{V as Be,b as O,e as W,f as D,g as Re,h as we,i as R,j as X,k as K,l as Fe,m as Ue,n as g,o as ee,p as P,q as $e,r as G,s as He,t as Ne,u as Pe,v as N,w as ne,x as le,y as ie,z as re,A as ue,B as ce}from"./vuetify-0a3604cc.js";import{A as Ce,C as Oe,a as Ke,b as Ge,F as je,Q as qe,U as Qe,G as We,M as Ye,c as Ze,d as Je,e as Xe,T as et,f as tt,g as de,L as ot,h as at,i as me,S as _e}from"./vue-tabler-icons-2346ab27.js";import{u as te,g as st}from"./userShare-caffbbf0.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{a5 as nt,h as lt}from"./@ant-design-bd925dbd.js";import{_ as it,l as rt,R as ut}from"./Password.vue_vue_type_script_lang-f221a800.js";import{m as E,M as ct}from"./ant-design-vue-32902922.js";import"./pinia-98ec2995.js";import"./vue-demi-71ba0ef2.js";import"./dayjs-9df2e3b6.js";import"./@multiavatar-7283d2b3.js";import"./axios-6f43ddff.js";/* empty css             */import"./vue3-apexcharts-fb146ff1.js";import"./vue-fdaf27ce.js";import"./apexcharts-a35677a7.js";import"./core-js-40ace11a.js";import"./@babel-8a290753.js";import"./@ctrl-044b369f.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-5efc5547.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-ef06c517.js";import"./dom-align-529d0cdc.js";import"./lodash-es-5af3e9d7.js";import"./async-validator-dee29e8b.js";import"./throttle-debounce-87e7e444.js";import"./crypto-js-3b32aad8.js";import"./loginChat.vue_vue_type_style_index_0_lang-9d4d8aba.js";const dt={class:"mini-icon"},mt={class:"mini-text"},_t={props:{item:Object},setup(t){const e=t;return(i,l)=>{const c=m("DotsIcon");return n(),u(Be,{class:"smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold d-flex align-items-center"},{default:a(()=>[r("span",dt,[o(c,{size:"16","stroke-width":"1.5",class:"iconClass"})]),r("span",mt,w(i.$t(e.item.header)),1)]),_:1})}}},F={props:{iconName:String,width:{type:Number,default:24},strokeWidth:{type:Number,default:1.5}},setup(t){const e=t,i={AppsIcon:Ce,CircleIcon:Oe,CreditCardIcon:Ke,ClipboardIcon:Ge,FileDescriptionIcon:je,QrcodeIcon:qe,UserCircleIcon:Qe,GiftIcon:We},l=U(()=>i[e.iconName]||null);return(c,d)=>(n(),u(Le(s(l)),{width:t.width,"stroke-width":t.strokeWidth},null,8,["width","stroke-width"]))}};const pt=["href"],Ee={props:{item:Object,level:Number},setup(t){const e=t;ge();const i=Ve(),l=y(!1);return j(()=>i.path,c=>{l.value=c===e.item.url},{immediate:!0}),(c,d)=>{const k=m("router-link");return t.item.status?(n(),u(k,{key:0,to:t.item.url,class:"no-style-link"},{default:a(()=>[o(D,{class:x([{"v-list-item-active":l.value},"mb-1"]),rounded:""},oe({prepend:a(()=>[o(F,{"icon-name":t.item.icon,width:21,"stroke-width":1.5},null,8,["icon-name","stroke-width"])]),default:a(()=>[o(W,null,{default:a(()=>[p(w(t.item.title),1)]),_:1})]),_:2},[t.item.chip?{name:"append",fn:a(()=>[o(O,{color:t.item.chipColor,class:x("sidebarchip hide-menu bg-"+t.item.chipBgColor),size:(t.item.chipIcon,"small"),variant:t.item.chipVariant,"prepend-icon":t.item.chipIcon},{default:a(()=>[p(w(t.item.chip),1)]),_:1},8,["color","class","size","variant","prepend-icon"])])}:void 0]),1032,["class"])]),_:1},8,["to"])):(n(),_("a",{key:1,href:t.item.url,target:"_blank",class:"no-style-link"},[o(D,{rounded:"",class:"mb-1"},oe({prepend:a(()=>[o(F,{"icon-name":t.item.icon,width:21,"stroke-width":1.5},null,8,["icon-name","stroke-width"])]),default:a(()=>[o(W,null,{default:a(()=>[p(w(t.item.title),1)]),_:1})]),_:2},[t.item.chip?{name:"append",fn:a(()=>[o(O,{color:t.item.chipColor,class:x("sidebarchip hide-menu bg-"+t.item.chipBgColor),size:(t.item.chipIcon,"small"),variant:t.item.chipVariant,"prepend-icon":t.item.chipIcon},{default:a(()=>[p(w(t.item.chip),1)]),_:1},8,["color","class","size","variant","prepend-icon"])])}:void 0]),1024)],8,pt))}}},ht={props:{item:Object,level:Number},setup(t){return(e,i)=>{const l=m("NavCollapse",!0);return n(),u(we,{"no-action":""},{activator:a(({props:c})=>[o(D,Z(c,{value:t.item.title,rounded:"",class:"mb-1"}),{prepend:a(()=>[o(F,{item:t.item.icon,level:t.level},null,8,["item","level"])]),default:a(()=>[o(W,{class:"mr-auto"},{default:a(()=>[p(w(e.$t(t.item.title)),1)]),_:1}),t.item.subCaption?(n(),u(Re,{key:0,class:"text-caption mt-n1 hide-menu"},{default:a(()=>[p(w(t.item.subCaption),1)]),_:1})):b("",!0)]),_:2},1040,["value"])]),default:a(()=>[t.item.children?(n(!0),_(C,{key:0},B(t.item.children,(c,d)=>(n(),_(C,{key:d},[c.children?(n(),u(l,{key:0,item:c,level:t.level+1},null,8,["item","level"])):(n(),u(Ee,{key:1,item:c,level:t.level+1},null,8,["item","level"]))],64))),128)):b("",!0)]),_:1})}}};const V="/list/assets/dark-logo-b5f0d1d5.svg",ft={class:"logo"},vt=["src"],gt={setup(t){y("rgb(var(--v-theme-primary))"),y("rgb(var(--v-theme-secondary))");const e=T(),i=y(V);return S(async()=>{await e.loadSettingsFromAPI(),i.value=String(e.getSetting("fileListDark")=="null"?V:e.getSetting("fileListDark"))}),(l,c)=>(n(),_("div",ft,[o(s(J),{to:"/"},{default:a(()=>[r("img",{src:i.value,alt:"home",width:"180"},null,8,vt)]),_:1})]))}},yt={setup(){const t=y("rgb(var(--v-theme-primary))"),e=y("rgb(var(--v-theme-secondary))"),i=T(),l=y(V);return S(async()=>{await i.loadSettingsFromAPI(),l.value=String(i.getSetting("fileListDark")=="null"?V:i.getSetting("fileListDark"))}),{logourl:l,primary:t,secondary:e,RtlDarklogo:V}}},kt={class:"logo"},bt=["src"];function wt(t,e,i,l,c,d){const k=m("RouterLink");return n(),_("div",kt,[o(k,{to:"/"},{default:a(()=>[r("img",{src:l.logourl,alt:"home",width:"180"},null,8,bt)]),_:1})])}const $t=M(yt,[["render",wt]]),xe={setup(t){const e=T(),i=U(()=>e.actTheme==="DARK_BLUE_THEME"||e.actTheme==="DARK_AQUA_THEME"||e.actTheme==="DARK_ORANGE_THEME"||e.actTheme==="DARK_PURPLE_THEME"||e.actTheme==="DARK_GREEN_THEME"||e.actTheme==="DARK_CYAN_THEME");return(l,c)=>s(i)?(n(),u(gt,{key:0})):(n(),u($t,{key:1}))}},Ct={class:"logo"},Et=["src"],xt=A({setup(t){const e=T(),i=y(V);return S(async()=>{await e.loadSettingsFromAPI(),i.value=String(e.getSetting("fileListDark")=="null"?V:e.getSetting("fileListDark"))}),(l,c)=>(n(),_("div",Ct,[o(s(J),{to:"/"},{default:a(()=>[r("img",{src:i.value,alt:"home",width:"180"},null,8,Et)]),_:1})]))}}),At={class:"logo"},Tt=["src"],Lt=A({setup(t){const e=T(),i=U(()=>{const l=e.getSetting("fileListDark");return l==="null"?V:String(l)});return(l,c)=>(n(),_("div",At,[o(s(J),{to:"/"},{default:a(()=>[r("img",{src:s(i),alt:"home",width:"180"},null,8,Tt)]),_:1})]))}}),Ae={setup(t){const e=T(),i=U(()=>e.actTheme==="DARK_BLUE_THEME"||e.actTheme==="DARK_AQUA_THEME"||e.actTheme==="DARK_ORANGE_THEME"||e.actTheme==="DARK_PURPLE_THEME"||e.actTheme==="DARK_GREEN_THEME"||e.actTheme==="DARK_CYAN_THEME");return(l,c)=>s(i)?(n(),u(xt,{key:0})):(n(),u(Lt,{key:1}))}},St={class:"pa-5"},It={class:"pa-5"},Y=A({props:{item:Object,level:Number},setup(t){const e=T(),i=ye(),l=U(()=>i.sidebarMenu);return S(()=>{i.fetchNavItems()}),S(()=>{i.fetchNavItems()}),(c,d)=>{const k=m("perfect-scrollbar");return n(),u(K,{left:"",modelValue:s(e).Sidebar_drawer,"onUpdate:modelValue":d[0]||(d[0]=v=>s(e).Sidebar_drawer=v),elevation:"0","rail-width":"75","mobile-breakpoint":"960",app:"",class:"leftSidebar",rail:s(e).mini_sidebar,"expand-on-hover":"",width:"270"},{default:a(()=>[s(e).setRTLLayout?(n(),u(R,{key:0,rtl:""},{default:a(()=>[r("div",St,[o(Ae)])]),_:1})):(n(),u(R,{key:1},{default:a(()=>[r("div",It,[o(xe)])]),_:1})),o(k,{class:"scrollnavbar"},{default:a(()=>[o(X,{class:"pa-6"},{default:a(()=>[(n(!0),_(C,null,B(s(l),(v,h)=>(n(),_(C,{key:h},[v.header?(n(),u(_t,{key:0,item:v},null,8,["item"])):b("",!0),v.children?(n(),u(ht,{key:1,class:"leftPadding",item:v,level:0},null,8,["item"])):(n(),u(Ee,{key:2,item:v,class:"leftPadding"},null,8,["item"]))],64))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","rail"])}}}),zt={};function Dt(t,e){return n(),u(Fe)}const Mt=M(zt,[["render",Dt]]),Vt={};function Bt(t,e){return null}const Rt=M(Vt,[["render",Bt]]),H=t=>(ze("data-v-a1866f41"),t=t(),De(),t),Ft={class:"pt-6"},Ut=H(()=>r("h5",{class:"text-h5 mb-4 px-5"},"Navigation",-1)),Ht=H(()=>r("h5",{class:"text-subtitle-1 ml-2"},"Apps",-1)),Nt=H(()=>r("h5",{class:"text-subtitle-1 ml-2"},"Chats",-1)),Pt=H(()=>r("h5",{class:"text-subtitle-1 ml-2"},"Calendar",-1)),Ot=H(()=>r("h5",{class:"text-subtitle-1 ml-2"},"Mail",-1)),Kt={class:"px-5"},Gt=H(()=>r("h5",{class:"text-h5 my-4"},"Quick Links",-1)),jt=A({setup(t){const e=y(["Apps"]);return(i,l)=>(n(),_("div",Ft,[Ut,o(X,{opened:e.value,"onUpdate:opened":l[0]||(l[0]=c=>e.value=c),class:"right-sidebar"},{default:a(()=>[o(we,{value:"Apps"},{activator:a(({props:c})=>[o(D,Se(Ie(c)),{prepend:a(()=>[o(s(Ce),{width:"21","stroke-width":"1.5"})]),default:a(()=>[Ht]),_:2},1040)]),default:a(()=>[o(D,{class:"pl-6 pb-6"},{default:a(()=>[r("div",null,[o(Mt)])]),_:1})]),_:1}),o(D,null,{prepend:a(()=>[o(s(Ye),{width:"21","stroke-width":"1.5"})]),default:a(()=>[Nt]),_:1}),o(D,null,{prepend:a(()=>[o(s(Ze),{width:"21","stroke-width":"1.5"})]),default:a(()=>[Pt]),_:1}),o(D,null,{prepend:a(()=>[o(s(Je),{width:"21","stroke-width":"1.5"})]),default:a(()=>[Ot]),_:1})]),_:1},8,["opened"]),r("div",Kt,[Gt,o(Rt)])]))}});const qt=M(jt,[["__scopeId","data-v-a1866f41"]]),pe=A({setup(t){y(!1);const e=y(!1);return(i,l)=>(n(),u(K,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=c=>e.value=c),location:"right",temporary:""},{default:a(()=>[o(qt)]),_:1},8,["modelValue"]))}}),Qt=A({components:{MessageOutlined:nt},created(){this.fetchData()},data(){return{noticelist:[],noticeCount:0,menuOpen:!1}},methods:{fetchData(){const t=window.VITE_API_BASE_URL;ke.post(t+"/app/share/notification").then(e=>{this.noticelist=e.data.data,this.noticeCount=this.noticelist.length}).catch(e=>{console.error("请求错误:",e)})},stripHtmlAndTruncate(t,e){const i=document.createElement("div");i.innerHTML=t;const l=i.textContent||i.innerText||"";return l.length>e?l.slice(0,e)+"...":l},viewAllNotices(t){be.push("/user/notice?id="+t),this.menuOpen=!1}}}),Wt={class:"px-8 pb-4 pt-6"},Yt={class:"d-flex align-center justify-space-between"},Zt=r("h6",{class:"text-h5"},"系统公告",-1),Jt={class:"text-subtitle-1 font-weight-bold mb-1"},Xt={class:"text-subtitle-1 font-weight-regular textSecondary"},eo={class:"py-4 px-6 text-center"},to=p("查看所有的公告");function oo(t,e,i,l,c,d){const k=m("MessageOutlined"),v=m("perfect-scrollbar");return n(),u($e,{modelValue:t.menuOpen,"onUpdate:modelValue":e[0]||(e[0]=h=>t.menuOpen=h),"close-on-content-click":!1},{activator:a(({props:h})=>[o(g,Z({icon:"",variant:"text",color:"primary",class:"custom-hover-primary"},h),{default:a(()=>[o(Ue,{dot:"",color:"primary"},{default:a(()=>[o(k,{style:{"font-size":"20px"}})]),_:1})]),_:2},1040)]),default:a(()=>[o(P,{rounded:"md",width:"360",elevation:"10"},{default:a(()=>[r("div",Wt,[r("div",Yt,[Zt,o(O,{color:"primary",variant:"flat",size:"small",class:"text-white"},{default:a(()=>[p(w(t.noticeCount)+"条消息",1)]),_:1})])]),o(v,{style:{height:"400px"}},{default:a(()=>[o(X,{class:"py-0 theme-list",lines:"two"},{default:a(()=>[(n(!0),_(C,null,B(t.noticelist,h=>(n(),u(D,{key:h.notice_id,"active-color":"primary",class:"py-4 px-8",onClick:I=>t.viewAllNotices(h.notice_id)},{default:a(()=>[r("div",null,[r("h6",Jt,w(h.notice_title),1)]),r("p",Xt,w(t.stripHtmlAndTruncate(h.notice_content,20)),1)]),_:2},1032,["onClick"]))),128)),(n(!0),_(C,null,B(t.noticelist,h=>(n(),u(ee,{key:h.id+"-divider"}))),128))]),_:1})]),_:1}),r("div",eo,[o(g,{color:"primary",variant:"outlined",block:"",onClick:t.viewAllNotices},{default:a(()=>[to]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"])}const ao=M(Qt,[["render",oo]]),so="/list/assets/unlimited-bg-34c15610.png",no=p("立即找回"),lo=p("OR"),io=p("记得密码？");function ro(t,e,i,l,c,d){const k=m("a-alert"),v=m("a-input"),h=m("a-col"),I=m("a-row"),f=m("a-input-group"),z=m("a-input-password"),L=m("a-divider"),q=m("a-modal");return n(),u(q,{style:{top:"25%"},"z-index":"1009",footer:null,open:t.userStore.passModel,"onUpdate:open":e[3]||(e[3]=$=>t.userStore.passModel=$),width:"350px",title:"找回密码"},{default:a(()=>[o(k,{class:"mt-3",message:"使用您之前注册时使用的邮箱进行找回密码",type:"success"}),o(v,{class:"mt-5",value:t.useremail,"onUpdate:value":e[0]||(e[0]=$=>t.useremail=$),placeholder:"请输入您的电子邮箱"},null,8,["value"]),o(f,{class:"mt-5"},{default:a(()=>[o(I,{gutter:24},{default:a(()=>[o(h,{span:12},{default:a(()=>[o(v,{value:t.emailcode,"onUpdate:value":e[1]||(e[1]=$=>t.emailcode=$),placeholder:"请输入邮箱验证码"},null,8,["value"])]),_:1}),o(h,{span:12},{default:a(()=>[o(g,{block:"true",size:"small",outlined:"","x-small":"",class:"loginbutton",onClick:t.emailget},{default:a(()=>[p(w(t.emailmsg),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),o(z,{class:"mt-5",value:t.userpassword,"onUpdate:value":e[2]||(e[2]=$=>t.userpassword=$),placeholder:"请输入您的新密码",onKeyup:Me(t.resetPassword,["enter"])},null,8,["value","onKeyup"]),o(g,{class:"mt-5 loginbutton",onClick:t.forgetbutton},{default:a(()=>[no]),_:1},8,["onClick"]),o(L,null,{default:a(()=>[lo]),_:1}),o(g,{class:"mt-5 loginbutton",onClick:t.loginModel},{default:a(()=>[io]),_:1},8,["onClick"])]),_:1},8,["open"])}const uo=M(it,[["render",ro]]),co=A({setup(){const t=te(),e=T(),i=y(t.invcode),l=y(""),c=y(!1),d=y(0),k=y(!1),v=y(0);j(()=>t.invcode,f=>{i.value=f,l.value=window.location.origin+"/list/#/?share="+f});const h=()=>{navigator.clipboard.writeText(l.value).then(()=>{E.success("推广链接已复制到剪贴板")}).catch(f=>{E.error("复制失败，请手动复制")})};return S(async()=>{await e.loadSettingsFromAPI(),c.value=e.getSetting("invitation_day_enable")===!0,k.value=e.getSetting("invitation_prop_enable")===!0,d.value=Number(e.getSetting("invitation_day_days")),v.value=Number(e.getSetting("invitation_prop_percent"))}),{userStore:t,invcode:i,fullUrl:l,copyToClipboard:h,getAlertMessage:()=>c.value&&k.value?`您的邀请码为 ${i.value}，邀请好友注册后您的好友成功购买套餐，您将获得 ${d.value} 天的会员时间续期，以及该套餐的 ${v.value}% 的会员时间续期。`:c.value?`您的邀请码为 ${i.value}，邀请好友注册后您的好友成功购买套餐，您将获得 ${d.value} 天的会员时间续期。`:k.value?`您的邀请码为 ${i.value}，邀请好友注册后您的好友成功购买套餐，您将获得该套餐的 ${v.value}% 的会员时间续期。`:`您的邀请码为 ${i.value}，邀请好友注册后您的好友成功购买套餐，您将获得奖励。`}},data(){return{password:""}},async mounted(){this.fullUrl=window.location.origin+"/list/#/?share="+this.invcode},methods:{registModel(){this.userStore.registModel=!0,this.userStore.loginModal=!1},passModel(){this.userStore.passModel=!0,this.userStore.loginModal=!1}}}),mo=r("p",{class:"text-h3"},"邀请好友",-1),_o=p("复制推广连接");function po(t,e,i,l,c,d){const k=m("a-alert"),v=m("a-qrcode"),h=m("a-input"),I=m("a-button"),f=m("a-input-group"),z=m("a-modal");return n(),u(z,{style:{top:"30%"},"z-index":"1009",footer:null,open:t.userStore.invcodeModel,"onUpdate:open":e[1]||(e[1]=L=>t.userStore.invcodeModel=L),width:"400px"},{default:a(()=>[mo,o(k,{class:"mt-3 mb-5",message:t.getAlertMessage(),type:"success"},null,8,["message"]),o(v,{value:t.fullUrl,color:"#1aad19"},null,8,["value"]),o(f,{class:"mt-5 pb-5",compact:""},{default:a(()=>[o(h,{disabled:"true",value:t.fullUrl,"onUpdate:value":e[0]||(e[0]=L=>t.fullUrl=L),style:{width:"calc(100% - 115px)"}},null,8,["value"]),o(I,{style:{"background-color":"rgb(var(--v-theme-primary)) !important",color:"white"},onClick:t.copyToClipboard},{default:a(()=>[_o]),_:1},8,["onClick"])]),_:1})]),_:1},8,["open"])}const ho=M(co,[["render",po]]),fo=A({setup(){const t=te(),e=T(),i=y(0);return S(async()=>{await e.loadSettingsFromAPI(),i.value=Number(e.getSetting("new_user_days"))}),{userStore:t,newuserdays:i}},data(){return{usertoken:null,useremail:null,emailcode:null,userpassword:null,useremailmsg:"获取验证码",countdown:null,countdownTime:30}},methods:{validateInputs(){const t=/^\d{6}$/,e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return t.test(this.emailcode)?e.test(this.useremail)?this.userpassword.length<8?(E.warning("用户密码不得小于8位字符，请重新输入"),!1):!0:(E.warning("请输入有效的电子邮箱"),!1):(E.warning("验证码必须是6位纯数字"),!1)},usertokenget(){if(this.usertoken===null){E.warning("请输入您的UserToken");return}this.usetokenuppost(1)},useremailget(){if(this.countdown===null){if(this.useremail===null){E.warning("请输入您的电子邮箱");return}this.emailcode=null,this.startCountdown(),this.usetokenuppost(0)}},startCountdown(){this.countdownTime=30,this.useremailmsg=`${this.countdownTime}秒后重新获取`,this.countdown=setInterval(()=>{this.countdownTime--,this.countdownTime>0?this.useremailmsg=`${this.countdownTime}秒后重新获取`:(this.useremailmsg="获取验证码",clearInterval(this.countdown),this.countdown=null)},1e3)},registclick(){this.validateInputs()&&this.usetokenuppost(0)},usetokenuppost(t){const e=window.VITE_API_BASE_URL,i=st(this.useremail);ke.post(e+"/app/user/tokenupdate"+i,{type:t,usertoken:this.usertoken,useremail:this.useremail,emailcode:this.emailcode,password:this.userpassword}).then(l=>{if(l.data.data.code===200){E.success(l.data.data.msg);return}if(l.data.data.code===202){setTimeout(()=>{E.warning(l.data.data.msg),this.userStore.userTokenModel=!1,this.userStore.loginModal=!0},1e3);return}if(l.data.data.code===400){E.warning(l.data.data.msg),this.countdown!==null&&(clearInterval(this.countdown),this.countdown=null,this.useremailmsg="获取验证码");return}}).catch(l=>{console.error("请求错误:",l)})},loginModel(){this.userStore.userTokenModel=!1,this.userStore.loginModal=!0}}});const vo=p("验证"),go=p("立即注册"),yo=p("OR"),ko=p("已有账户？");function bo(t,e,i,l,c,d){const k=m("a-alert"),v=m("a-input"),h=m("a-col"),I=m("a-row"),f=m("a-input-group"),z=m("a-input-password"),L=m("a-divider"),q=m("a-modal");return n(),u(q,{style:{top:"22%"},"z-index":"1009",footer:null,open:t.userStore.userTokenModel,"onUpdate:open":e[4]||(e[4]=$=>t.userStore.userTokenModel=$),width:"350px",title:"账户升级"},{default:a(()=>[t.newuserdays>=0?(n(),u(k,{key:0,class:"mt-3",message:"平台已升级至账户密码体系，您的会员权益不受影响，安全升级，服务更优！",type:"warning"})):b("",!0),o(f,{class:"mt-5"},{default:a(()=>[o(I,{gutter:24},{default:a(()=>[o(h,{span:16},{default:a(()=>[o(v,{value:t.usertoken,"onUpdate:value":e[0]||(e[0]=$=>t.usertoken=$),placeholder:"请输入您的UserToken"},null,8,["value"])]),_:1}),o(h,{span:8},{default:a(()=>[o(g,{block:"true",size:"small",class:"loginbutton qrcodebutton",onClick:t.usertokenget},{default:a(()=>[vo]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),o(v,{class:"mt-5",value:t.useremail,"onUpdate:value":e[1]||(e[1]=$=>t.useremail=$),placeholder:"请输入您的电子邮箱"},null,8,["value"]),o(f,{class:"mt-5"},{default:a(()=>[o(I,{gutter:24},{default:a(()=>[o(h,{span:12},{default:a(()=>[o(v,{value:t.emailcode,"onUpdate:value":e[2]||(e[2]=$=>t.emailcode=$),placeholder:"请输入邮箱验证码"},null,8,["value"])]),_:1}),o(h,{span:12},{default:a(()=>[o(g,{block:"true",size:"small",class:"loginbutton qrcodebutton",onClick:t.useremailget},{default:a(()=>[p(w(t.useremailmsg),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),o(z,{class:"mt-5",value:t.userpassword,"onUpdate:value":e[3]||(e[3]=$=>t.userpassword=$),placeholder:"请输入您的账户密码"},null,8,["value"]),o(g,{class:"mt-5 loginbutton",onClick:t.registclick},{default:a(()=>[go]),_:1},8,["onClick"]),o(L,null,{default:a(()=>[yo]),_:1}),o(g,{class:"mt-5 loginbutton",onClick:t.loginModel},{default:a(()=>[ko]),_:1},8,["onClick"])]),_:1},8,["open"])}const wo=M(fo,[["render",bo]]),$o=["innerHTML"],Co={class:"px-8 pt-6"},Eo=r("h6",{class:"text-h5 font-weight-medium"},"用户信息：",-1),xo={class:"d-flex align-center mt-4 pb-6"},Ao=["innerHTML"],To={class:"ml-3 pb-3"},Lo={key:0,class:"text-h6 mb-n1"},So={class:"d-flex align-center mt-3"},Io={key:0,class:"text-subtitle-1 font-weight-regular textSecondary"},zo={key:1,class:"text-subtitle-1 font-weight-regular textSecondary"},Do={class:"px-8 py-3"},Mo={class:"bg-lightprimary rounded-md pa-5 overflow-hidden position-relative"},Vo={key:0,class:"text-h6"},Bo={key:1,class:"text-h6"},Ro=p("续费Plus"),Fo=p("开通Plus"),Uo=r("img",{src:so,alt:"bg-img",class:"right-pos-img"},null,-1),Ho={class:"pt-4 pb-6 px-8 text-center"},No=p("安全退出"),Po=p("立即登录"),Oo=A({setup(t){const e=te(),i=y(!1);function l(){if(e.userToken==null)return E.error("您还没有登录哦"),!1;i.value=!1,ct.confirm({centered:!0,title:"提示？",icon:ae(lt),content:ae("div",{style:"color:red;"},"你确定退出登录吗？"),onOk(){e.logout(),E.success("已退出登录，如需再次使用请重新登录")},onCancel(){E.warning("您取消了退出！")}})}function c(){e.loginModal=!0,i.value=!1}function d(){be.push("/user/plus"),i.value=!1}return S(()=>{e.fetchUserData()}),(k,v)=>(n(),_(C,null,[o($e,{modelValue:i.value,"onUpdate:modelValue":v[0]||(v[0]=h=>i.value=h),"close-on-content-click":!1},{activator:a(({props:h})=>[o(g,Z({class:"custom-hover-primary",variant:"text"},h,{icon:""}),{default:a(()=>[o(G,{size:"35"},{default:a(()=>[r("div",{innerHTML:s(e).userAvatar,style:{width:"35px",height:"35px"}},null,8,$o)]),_:1})]),_:2},1040)]),default:a(()=>[o(P,{rounded:"md",width:"360",elevation:"10"},{default:a(()=>[r("div",Co,[Eo,r("div",xo,[o(G,{size:"80"},{default:a(()=>[r("div",{class:"avaimg",innerHTML:s(e).userAvatar},null,8,Ao)]),_:1}),r("div",To,[s(e).useremail?(n(),_("h6",Lo,w(s(e).useremail),1)):b("",!0),r("div",So,[s(e).useremail?(n(),_("span",Io," 到期时间："+w(s(e).expireTime),1)):(n(),_("span",zo," 欢迎回来，即时畅享4.0对话 "))])])]),o(ee)]),r("div",Do,[r("div",Mo,[s(e).isLogin?(n(),_("h5",Vo," 您当前属于Plus会员 ")):(n(),_("h5",Bo," 立即登录，即刻畅享 ")),s(e).isPlus&&s(e).isLogin?(n(),u(g,{key:2,variant:"flat",color:"primary",class:"mt-3",onClick:d},{default:a(()=>[Ro]),_:1})):b("",!0),!s(e).isPlus&&s(e).isLogin?(n(),u(g,{key:3,variant:"flat",color:"primary",class:"mt-3",onClick:d},{default:a(()=>[Fo]),_:1})):b("",!0),Uo])]),r("div",Ho,[s(e).isLogin?(n(),u(g,{key:0,color:"primary",block:"",onClick:l},{default:a(()=>[No]),_:1})):(n(),u(g,{key:1,color:"primary",block:"",onClick:c},{default:a(()=>[Po]),_:1}))])]),_:1})]),_:1},8,["modelValue"]),o(rt),o(ut),o(uo),o(ho),o(wo)],64))}});const Ko={},Go={class:"hidden-md-and-down"},jo={class:"hidden-md-and-down"},qo={class:"hidden-md-and-down"},Qo={class:"ml-3 mr-sm-0 mr-3"},he=A({setup(t){const e=T();y(!1),y(!1),y(!1);const i=y((e.setHorizontalLayout,0));return j(i,l=>{i.value=l}),(l,c)=>(n(),u(Ne,{elevation:"10",priority:i.value,height:"70",class:"horizontal-header"},{default:a(()=>[r("div",{class:x(s(e).boxed?"maxWidth v-toolbar__content":"v-toolbar__content px-6")},[s(e).setRTLLayout?(n(),u(R,{key:0,rtl:""},{default:a(()=>[r("div",Go,[o(Ae)])]),_:1})):(n(),u(R,{key:1},{default:a(()=>[r("div",jo,[o(xe)])]),_:1})),o(g,{class:"hidden-lg-and-up ms-3",icon:"",rounded:"sm",variant:"flat",onClick:Q(s(e).SET_SIDEBAR_DRAWER,["stop"]),size:"small"},{default:a(()=>[o(s(Xe),{size:"20","stroke-width":"1.5"})]),_:1},8,["onClick"]),r("div",qo,[o(Ko)]),o(He),o(ao),r("div",Qo,[o(Oo)])],2)]),_:1},8,["priority"]))}});const Wo=["href"],Yo={class:"navIcon"},Zo={key:0,class:"text-caption mt-n1 hide-menu"},Jo={class:"navIcon"},Xo={key:0,class:"text-caption mt-n1 hide-menu"},ea={key:1},ta={props:{item:{type:Object,required:!0},level:{type:Number,default:1}},setup(t){const e=ge();function i(l){e.push(l).catch(c=>{})}return(l,c)=>{const d=m("router-link");return t.item&&t.item.url?(n(),_(C,{key:0},[t.item.status?(n(),u(d,{key:1,to:t.item.url,class:"navItemLink rounded-md",onClick:c[0]||(c[0]=k=>i(t.item.url))},{default:a(()=>[r("i",Jo,[o(F,{"icon-name":t.item.icon,width:21,"stroke-width":1.5},null,8,["icon-name","stroke-width"])]),r("span",null,w(t.item.title),1),t.item.subCaption?(n(),_("small",Xo,w(t.item.subCaption),1)):b("",!0),t.item.chip?(n(),u(O,{key:1,color:t.item.chipColor,class:x("sidebarchip hide-menu bg-"+t.item.chipBgColor),size:(t.item.chipIcon,"small"),variant:t.item.chipVariant,"prepend-icon":t.item.chipIcon},{default:a(()=>[p(w(t.item.chip),1)]),_:1},8,["color","class","size","variant","prepend-icon"])):b("",!0)]),_:1},8,["to"])):(n(),_("a",{key:0,href:t.item.url,target:"_blank",class:"navItemLink rounded-md"},[r("i",Yo,[o(F,{"icon-name":t.item.icon,width:21,"stroke-width":1.5},null,8,["icon-name","stroke-width"])]),r("span",null,w(t.item.title),1),t.item.subCaption?(n(),_("small",Zo,w(t.item.subCaption),1)):b("",!0),t.item.chip?(n(),u(O,{key:1,color:t.item.chipColor,class:"sidebarchip hide-menu ml-auto",size:(t.item.chipIcon,"small"),variant:t.item.chipVariant,"prepend-icon":t.item.chipIcon},{default:a(()=>[p(w(t.item.chip),1)]),_:1},8,["color","size","variant","prepend-icon"])):b("",!0)],8,Wo))],64)):(n(),_("p",ea,"Error: Invalid item data"))}}},Te=M(ta,[["__scopeId","data-v-4bcba158"]]),oa={class:"navItemLink rounded-md cursor-pointer"},aa={class:"navIcon"},sa={class:"mr-auto"},na={key:0,class:"text-caption mt-n1 hide-menu"},la={class:"ddIcon ml-2 d-flex align-center"},ia={props:{item:Object,level:Number},setup(t){return(e,i)=>{const l=m("ChevronDownIcon"),c=m("Index",!0);return n(),_(C,null,[r("a",oa,[r("i",aa,[o(F,{item:t.item.icon,level:t.level},null,8,["item","level"])]),r("span",sa,w(t.item.title),1),t.item.subCaption?(n(),_("small",na,w(t.item.subCaption),1)):b("",!0),r("i",la,[o(l,{size:"15"})])]),r("ul",{class:x(`ddMenu ddLevel-${t.level+1}`)},[t.item.children?(n(!0),_(C,{key:0},B(t.item.children,(d,k)=>(n(),_("li",{key:k,class:"navItem"},[d.children?(n(),u(c,{key:0,item:d,level:t.level+1},null,8,["item","level"])):(n(),u(Te,{key:1,item:d,level:t.level+1},null,8,["item","level"]))]))),128)):b("",!0)],2)],64)}}},ra={key:0,class:"horizontalMenu border-bottom"},ua={class:"gap-1 horizontal-navbar mx-0"},ca={key:1,class:"mobile-menu"},fe=A({setup(t){const e=T(),{mdAndUp:i}=Pe(),l=ye(),c=U(()=>l.sidebarMenu);return S(()=>{l.fetchNavItems()}),S(()=>{l.fetchNavItems()}),(d,k)=>s(i)?(n(),_("div",ra,[r("div",{class:x(s(e).boxed?"maxWidth":"px-6")},[r("ul",ua,[(n(!0),_(C,null,B(s(c),(v,h)=>(n(),_("li",{key:h,class:"navItem"},[v.children?(n(),u(ia,{key:0,item:v,level:0},null,8,["item"])):(n(),u(Te,{key:1,item:v,level:0},null,8,["item"]))]))),128))])],2)])):(n(),_("div",ca,[o(Y)]))}}),da=r("div",{class:"pa-6"},[r("h5",{class:"text-h5"},"主题设置")],-1),ma={class:"pa-6"},_a=r("h6",{class:"text-h6 mb-2"},"菜单布局",-1),pa=p(" 左侧 "),ha=p(" 顶部 "),fa=r("h6",{class:"text-h6 mt-8 mb-5"},"主题方向",-1),va=p(" 正向 "),ga=p(" 反向 "),ya=r("h6",{class:"text-h6 mt-8 mb-5"},"主题颜色（浅色）",-1),ka=r("h6",{class:"text-h6 mt-11 mb-5"},"主题颜色（深色）",-1),ba=r("h6",{class:"text-h6 mt-11 mb-2"},"宽窄选择",-1),wa=p(" 窄屏 "),$a=p(" 宽屏 "),Ca=r("h6",{class:"text-h6 mt-11 mb-2"},"边栏类型",-1),Ea=p(" 展开 "),xa=p(" 折叠 "),Aa=r("h6",{class:"text-h6 mt-11 mb-2"},"卡片轮廓",-1),Ta=p(" 阴影 "),La=p(" 边距 "),ve=A({setup(t){const e=T(),i=y([{name:"BLUE_THEME",bg:"themeBlue"},{name:"AQUA_THEME",bg:"themeAqua"},{name:"PURPLE_THEME",bg:"themePurple"},{name:"GREEN_THEME",bg:"themeGreen"},{name:"CYAN_THEME",bg:"themeCyan"},{name:"ORANGE_THEME",bg:"themeOrange"}]),l=y([{name:"DARK_BLUE_THEME",bg:"themeDarkBlue"},{name:"DARK_AQUA_THEME",bg:"themeDarkAqua"},{name:"DARK_PURPLE_THEME",bg:"themeDarkPurple"},{name:"DARK_GREEN_THEME",bg:"themeDarkGreen"},{name:"DARK_CYAN_THEME",bg:"themeDarkCyan"},{name:"DARK_ORANGE_THEME",bg:"themeDarkOrange"}]);return S(async()=>{e.loadSettingsFromLocalStorage(),(localStorage.getItem("setHorizontalLayout")===null||localStorage.getItem("customizerRTLLayout")===null||localStorage.getItem("customizerTheme")===null||localStorage.getItem("customizerHorizontalLayout")===null||localStorage.getItem("customizerMiniSidebar")===null||localStorage.getItem("customizerBoxed")===null||localStorage.getItem("customizerBorderCard")===null)&&await e.loadSettingsFromAPI()}),j(()=>[e.actTheme,e.setRTLLayout,e.setHorizontalLayout,e.mini_sidebar,e.boxed,e.setBorderCard],(c,d)=>{e.saveSettingsToLocalStorage()},{deep:!0}),(c,d)=>{const k=m("LayoutColumnsIcon"),v=m("LayoutNavbarIcon"),h=m("LayoutSidebarIcon"),I=m("perfect-scrollbar");return n(),_(C,null,[da,o(ee),o(I,{style:{height:"calc(100vh - 90px)"}},{default:a(()=>[r("div",ma,[_a,o(N,{modelValue:s(e).setHorizontalLayout,"onUpdate:modelValue":d[0]||(d[0]=f=>s(e).setHorizontalLayout=f),color:"primary",class:"my-2 btn-group-custom gap-3",rounded:"0",group:""},{default:a(()=>[o(g,{value:!1,variant:"text",elevation:"9",class:"rounded-md"},{default:a(()=>[o(k,{"stroke-width":"1.5",size:"21",class:"mr-2"}),pa]),_:1}),o(g,{value:!0,variant:"text",elevation:"9",class:"rounded-md"},{default:a(()=>[o(v,{"stroke-width":"1.5",size:"21",class:"mr-2"}),ha]),_:1})]),_:1},8,["modelValue"]),fa,o(N,{modelValue:s(e).setRTLLayout,"onUpdate:modelValue":d[1]||(d[1]=f=>s(e).setRTLLayout=f),color:"primary",class:"my-2 btn-group-custom gap-3",rounded:"0",group:""},{default:a(()=>[o(g,{value:!1,variant:"text",elevation:"9",class:"rounded-md"},{default:a(()=>[o(s(et),{"stroke-width":"1.5",size:"21"}),va]),_:1}),o(g,{value:!0,variant:"text",elevation:"9",class:"rounded-md"},{default:a(()=>[o(s(tt),{"stroke-width":"1.5",size:"21"}),ga]),_:1})]),_:1},8,["modelValue"]),ya,o(ne,{mandatory:"",modelValue:s(e).actTheme,"onUpdate:modelValue":d[2]||(d[2]=f=>s(e).actTheme=f),class:"ml-n2 v-row"},{default:a(()=>[(n(!0),_(C,null,B(i.value,f=>(n(),u(ie,{cols:"4",key:f.name,class:"pa-2"},{default:a(()=>[o(le,{value:f.name},{default:a(({isSelected:z,toggle:L})=>[o(P,{rounded:"md",class:"border cursor-pointer d-block text-center px-5 py-4 hover-btns",elevation:"9",onClick:L},{default:a(()=>[o(G,{class:x(f.bg),size:"25"},{default:a(()=>[z?(n(),u(s(de),{key:0,color:"white",size:"18"})):b("",!0)]),_:2},1032,["class"])]),_:2},1032,["onClick"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1},8,["modelValue"]),ka,o(ne,{mandatory:"",modelValue:s(e).actTheme,"onUpdate:modelValue":d[3]||(d[3]=f=>s(e).actTheme=f),class:"ml-n2 v-row"},{default:a(()=>[(n(!0),_(C,null,B(l.value,f=>(n(),u(ie,{cols:"4",key:f.name,class:"pa-2"},{default:a(()=>[o(le,{value:f.name},{default:a(({isSelected:z,toggle:L})=>[o(P,{rounded:"md",class:"border cursor-pointer d-block text-center px-5 py-4 hover-btns",elevation:"9",onClick:L},{default:a(()=>[o(G,{class:x(f.bg),size:"25"},{default:a(()=>[z?(n(),u(s(de),{key:0,color:"white",size:"18"})):b("",!0)]),_:2},1032,["class"])]),_:2},1032,["onClick"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1},8,["modelValue"]),ba,o(N,{modelValue:s(e).boxed,"onUpdate:modelValue":d[4]||(d[4]=f=>s(e).boxed=f),color:"primary",class:"my-2 btn-group-custom gap-3",rounded:"0",group:""},{default:a(()=>[o(g,{value:!0,variant:"text",elevation:"9",class:"rounded-md"},{default:a(()=>[o(s(ot),{"stroke-width":"1.5",size:"21",class:"mr-2"}),wa]),_:1}),o(g,{value:!1,variant:"text",elevation:"9",class:"rounded-md"},{default:a(()=>[o(s(at),{"stroke-width":"1.5",size:"21",class:"mr-2"}),$a]),_:1})]),_:1},8,["modelValue"]),s(e).setHorizontalLayout!=!0?(n(),u(P,{key:0},{default:a(()=>[Ca,o(N,{modelValue:s(e).mini_sidebar,"onUpdate:modelValue":d[5]||(d[5]=f=>s(e).mini_sidebar=f),color:"primary",class:"my-2 btn-group-custom gap-3",rounded:"0",group:""},{default:a(()=>[o(g,{value:!1,variant:"text",elevation:"9",class:"rounded-md"},{default:a(()=>[o(h,{"stroke-width":"1.5",size:"21",class:"mr-2"}),Ea]),_:1}),o(g,{value:!0,variant:"text",elevation:"9",class:"rounded-md"},{default:a(()=>[o(s(me),{"stroke-width":"1.5",size:"21",class:"mr-2"}),xa]),_:1})]),_:1},8,["modelValue"])]),_:1})):b("",!0),Aa,o(N,{modelValue:s(e).setBorderCard,"onUpdate:modelValue":d[6]||(d[6]=f=>s(e).setBorderCard=f),color:"primary",class:"my-2 btn-group-custom gap-3",rounded:"0",group:""},{default:a(()=>[o(g,{value:!1,variant:"text",elevation:"9",class:"rounded-md"},{default:a(()=>[o(s(me),{"stroke-width":"1.5",size:"21",class:"mr-2"}),Ta]),_:1}),o(g,{value:!0,variant:"text",elevation:"9",class:"rounded-md"},{default:a(()=>[o(h,{"stroke-width":"1.5",size:"21",class:"mr-2"}),La]),_:1})]),_:1},8,["modelValue"])])]),_:1})],64)}}}),cs=A({setup(t){const e=T();return(i,l)=>s(e).setRTLLayout?(n(),u(R,{key:0,rtl:""},{default:a(()=>[o(ce,{theme:s(e).actTheme,class:x([s(e).actTheme,s(e).mini_sidebar?"mini-sidebar":"",s(e).setHorizontalLayout?"horizontalLayout":"verticalLayout",s(e).setBorderCard?"cardBordered":""])},{default:a(()=>[o(K,{app:"",temporary:"",elevation:"10",location:"left",modelValue:s(e).Customizer_drawer,"onUpdate:modelValue":l[0]||(l[0]=c=>s(e).Customizer_drawer=c),width:"320",class:"left-customizer"},{default:a(()=>[o(ve)]),_:1},8,["modelValue"]),s(e).setHorizontalLayout?b("",!0):(n(),u(Y,{key:0})),s(e).setHorizontalLayout?b("",!0):(n(),u(pe,{key:1})),s(e).setHorizontalLayout?(n(),u(he,{key:2})):b("",!0),s(e).setHorizontalLayout?(n(),u(fe,{key:3})):b("",!0),o(re,null,{default:a(()=>[o(ue,{fluid:"",class:"page-wrapper pb-sm-15 pb-10"},{default:a(()=>[r("div",{class:x(s(e).boxed?"maxWidth":"")},[o(s(se)),o(g,{class:"customizer-btn",size:"large",icon:"",variant:"flat",color:"primary",onClick:l[1]||(l[1]=Q(c=>s(e).SET_CUSTOMIZER_DRAWER(!s(e).Customizer_drawer),["stop"]))},{default:a(()=>[o(s(_e))]),_:1})],2)]),_:1})]),_:1})]),_:1},8,["theme","class"])]),_:1})):(n(),u(R,{key:1},{default:a(()=>[o(ce,{theme:s(e).actTheme,class:x([s(e).actTheme,s(e).mini_sidebar?"mini-sidebar":"",s(e).setHorizontalLayout?"horizontalLayout":"verticalLayout",s(e).setBorderCard?"cardBordered":""])},{default:a(()=>[o(K,{app:"",temporary:"",elevation:"10",location:"right",modelValue:s(e).Customizer_drawer,"onUpdate:modelValue":l[2]||(l[2]=c=>s(e).Customizer_drawer=c),width:"320"},{default:a(()=>[o(ve)]),_:1},8,["modelValue"]),s(e).setHorizontalLayout?b("",!0):(n(),u(Y,{key:0})),s(e).setHorizontalLayout?b("",!0):(n(),u(pe,{key:1})),s(e).setHorizontalLayout?(n(),u(he,{key:2})):b("",!0),s(e).setHorizontalLayout?(n(),u(fe,{key:3})):b("",!0),o(re,null,{default:a(()=>[o(ue,{fluid:"",class:"page-wrapper pb-sm-15 pb-10"},{default:a(()=>[r("div",{class:x(s(e).boxed?"maxWidth":"")},[o(s(se)),o(g,{class:"customizer-btn",size:"large",icon:"",variant:"flat",color:"primary",onClick:l[3]||(l[3]=Q(c=>s(e).SET_CUSTOMIZER_DRAWER(!s(e).Customizer_drawer),["stop"]))},{default:a(()=>[o(s(_e))]),_:1})],2)]),_:1})]),_:1})]),_:1},8,["theme","class"])]),_:1}))}});export{cs as default};
