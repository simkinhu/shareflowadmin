import{_ as W,a as X}from"./welcome-bg-e8584d2e.js";import{u as H,i as K}from"../index-451927d2.js";import{s as Y}from"./pinia-98ec2995.js";import{u as Q}from"./userShare-3887ce2e.js";import{_ as Z}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-c8f847d6.js";import{_ as tt}from"./_plugin-vue_export-helper-c27b6911.js";import{f as et}from"./date-fns-8e15a9c0.js";import{o as st,C as P,I as O,J as at,x as h,B as z,l as R,b as G,n as ot,m as J,K as lt}from"./vuetify-c962898f.js";import{r as d,o as j,aS as B,aJ as a,a8 as n,c as e,bl as s,b2 as i,a9 as t,a6 as k,F as C,aQ as M,G as f,d as nt,k as it,u as c,a7 as A,aC as rt,h as $}from"./@vue-7e44e6dd.js";import{m as U,M as ct}from"./ant-design-vue-32902922.js";import{h as dt}from"./@ant-design-bd925dbd.js";import"./vue-router-0e41780a.js";import"./dayjs-9df2e3b6.js";import"./@multiavatar-7283d2b3.js";import"./axios-6f43ddff.js";/* empty css             */import"./vue3-apexcharts-fb146ff1.js";import"./vue-fdaf27ce.js";import"./apexcharts-a35677a7.js";import"./core-js-40ace11a.js";import"./vue-demi-71ba0ef2.js";import"./@babel-8a290753.js";import"./@ctrl-044b369f.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-5efc5547.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-ef06c517.js";import"./dom-align-529d0cdc.js";import"./lodash-es-5af3e9d7.js";import"./async-validator-dee29e8b.js";import"./throttle-debounce-87e7e444.js";import"./crypto-js-3b32aad8.js";import"./ChatBc-abd90dc1.js";const ut="/list/assets/gold-afe5fc99.png",q="/list/assets/silver-9ec10c43.png";const _t={methods:{format:et},setup(){const w=[{text:"邀请会员",value:"payer_id"},{text:"奖励类型",value:"reward_type"},{text:"奖励天数",value:"reward_days"},{text:"奖励时间",value:"reward_time"}],_=d([]),m=d(1),l=d(5),N=d(0),S=d(0),V=d(0),r=d(""),v=Q(),g=H(),o=d(v.invcode),I=d(""),L=()=>{if(!v.isLogin)return U.error("请先登录后再获取复制邀请链接！"),!1;navigator.clipboard.writeText(I.value).then(()=>{U.success("推广链接已复制到剪贴板")}).catch(u=>{U.error("复制失败，请手动复制")})},D=async u=>{const x=new URLSearchParams;x.append("page",u),x.append("size",l.value);try{const y=window.VITE_API_BASE_URL,p=await K.post(y+"/app/user/invcode",x.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});_.value=p.data.data.invlist.list,N.value=p.data.data.invlist.total,S.value=p.data.data.count,V.value=Math.ceil(N.value/l.value),o.value=v.invcode,I.value=window.location.origin+"/list/#/?share="+v.invcode}catch(y){console.error("Error fetching data:",y)}},F=u=>{m.value=u,D(u)};return j(async()=>{o.value=v.invcode,await D(m.value),await g.loadSettingsFromAPI();let u=g.getSetting("invitation_day_enable"),x=g.getSetting("invitation_prop_enable"),y=Number(g.getSetting("invitation_day_days")),p=Number(g.getSetting("invitation_prop_percent"));u&&x?r.value=`邀请好友注册后您的好友成功购买套餐，您将获得 ${y} 天的会员时间续期，以及该套餐的 ${p}% 的会员时间续期。`:u?r.value=`邀请好友注册后您的好友成功购买套餐，您将获得 ${y} 天的会员时间续期。`:x?r.value=`邀请好友注册后您的好友成功购买套餐，您将获得该套餐的 ${p}% 的会员时间续期。`:r.value="邀请好友注册后您的好友成功购买套餐，您将获得奖励。"}),{headers:w,invlist:_,invcode:o,invcontent:r,fullUrl:I,currentPage:m,totalPages:V,usercount:S,userStore:v,copyToClipboard:L,handlePageChange:F}}},mt=t("h3",{class:"mt-5",style:{"font-weight":"bold"}},"邀请好友使用",-1),pt={key:0,class:"text-h6"},ht={key:1,class:"text-h6"},ft={class:"d-flex mt-3 align-center"},vt={class:"text-subtitle-2 opacity-25"},gt=f("复制推广连接"),xt={class:"mt-5 pb-5"};function yt(w,_,m,l,N,S){const V=B("a-input"),r=B("a-button"),v=B("a-input-group"),g=B("a-empty");return a(),n(C,null,[e(P,{class:"mt-5",elevation:"10"},{default:s(()=>[e(st,{class:"note-sheet pa-5 pb-4 rounded-md cursor-pointer mb-4"},{default:s(()=>[mt,l.userStore.isLogin?(a(),n("h6",pt," 您已累计邀请 "+i(l.usercount)+" 位好友， 您的邀请码为 "+i(l.invcode)+"， "+i(l.invcontent),1)):(a(),n("h6",ht," 登录即可获取您的专属邀请码， "+i(l.invcontent),1)),t("div",ft,[t("small",vt,i(w.selectedNotice?S.format(new Date(w.selectedNotice.update_time),"yyyy-MM-dd"):""),1)]),e(v,{class:"mt-5",compact:""},{default:s(()=>[e(V,{disabled:"true",value:l.fullUrl,"onUpdate:value":_[0]||(_[0]=o=>l.fullUrl=o),style:{width:"calc(100% - 115px)"}},null,8,["value"]),e(r,{style:{"background-color":"rgb(var(--v-theme-primary)) !important",color:"white"},onClick:l.copyToClipboard},{default:s(()=>[gt]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),l.invlist&&l.invlist.length>0?(a(),k(P,{key:0,elevation:"10",class:"mt-5"},{default:s(()=>[e(O,{class:"month-table"},{default:s(()=>[t("thead",null,[t("tr",null,[(a(!0),n(C,null,M(l.headers,o=>(a(),n("th",{key:o.value},i(o.text),1))),128))])]),t("tbody",null,[(a(!0),n(C,null,M(l.invlist,o=>(a(),n("tr",{key:o.id},[t("td",null,i(o.user),1),t("td",null,i(o.reward_type===1?"Plus会员":"普通会员"),1),t("td",null,i(o.reward_days),1),t("td",null,i(o.reward_time),1)]))),128))])]),_:1}),e(at,{modelValue:l.currentPage,"onUpdate:modelValue":[_[1]||(_[1]=o=>l.currentPage=o),l.handlePageChange],length:l.totalPages},null,8,["modelValue","length","onUpdate:modelValue"])]),_:1})):(a(),k(P,{key:1,elevation:"10",class:"mt-5"},{default:s(()=>[e(O,{class:"month-table"},{default:s(()=>[t("thead",null,[t("tr",null,[(a(!0),n(C,null,M(l.headers,o=>(a(),n("th",{key:o.value},i(o.text),1))),128))])])]),_:1}),e(O,null,{default:s(()=>[t("thead",null,[t("tr",null,[(a(!0),n(C,null,M(w.columns,o=>(a(),n("th",{key:o.title},i(o.title),1))),128))])])]),_:1}),t("div",xt,[e(g,{image:w.simpleImage},null,8,["image"])])]),_:1}))],64)}const bt=tt(_t,[["render",yt]]),wt={class:"d-flex align-center"},St={key:0,class:"text-h5 mb-0"},kt=f("注销"),Ct={key:1,class:"text-h5"},Pt=f(" 欢迎访问用户中心， "),Vt=f("立即登录 "),Tt=f("免费注册 "),Ut={class:"mt-8"},It={key:0,class:"d-flex"},Lt=t("div",{class:"text-subtitle-1 textPrimary mt-1"},"剩余天数",-1),zt={class:"d-flex"},At={class:"text-h3 textPrimary"},Bt=t("div",{class:"text-subtitle-1 textPrimary mt-1"},"到期时间",-1),Mt={class:"d-flex"},Nt={class:"text-h3 textPrimary"},Dt={key:1,class:"d-flex"},Et=t("div",null,[t("div",{class:"d-flex"},[t("h2",{class:"text-h5 textPrimary"},"开通Plus会员可畅享4.0对话 ")]),t("p",{class:"text-subtitle-1"},"GPT4回答次数限制为Open AI限制不保障GPT4回答次数")],-1),Rt=[Et],Ft=t("div",{class:"mb-n2"},[t("img",{src:X,class:"",alt:"image",width:"340"})],-1),Ot={key:0},Gt=t("h6",{class:"text-subtitle-1 text-medium-emphasis mb-4"},"会员等级",-1),Jt=t("img",{src:ut,alt:"image",width:"150"},null,-1),$t=t("h5",{class:"text-h5 pt-3"},"您是尊贵的Plus会员",-1),Ht=t("h6",{class:"text-subtitle-1 text-13 my-4 textSecondary"}," 您已开通Plus会员，全站特权轻松享 ",-1),Kt=f("续费Plus会员"),Qt=t("h6",{class:"text-subtitle-1 text-medium-emphasis mb-4"},"会员等级",-1),jt=t("img",{src:q,alt:"image",width:"150"},null,-1),qt=t("h5",{class:"text-h5 pt-3"},"您是普通会员",-1),Wt=t("h6",{class:"text-subtitle-1 text-13 my-4 textSecondary"}," 开通Plus会员，尊享多种特权 ",-1),Xt=f("开通Plus会员"),Yt=t("h6",{class:"text-subtitle-1 text-medium-emphasis mb-4"},"用户标识",-1),Zt=t("img",{src:q,alt:"image",width:"150"},null,-1),te=t("h5",{class:"text-h5 pt-3"},"您还没有登录",-1),ee=t("h6",{class:"text-subtitle-1 text-13 my-4 textSecondary"}," 开通Plus会员，尊享多种特权 ",-1),se=f("立即登录开通Plus会员"),ae=f("最近对话窗口标题概览"),oe={class:"recent-transaction mt-10 px-3"},le={class:"text-body-1 textSecondary text-no-wrap"},ne=t("div",{class:"line mx-auto bg-grey100"},null,-1),ie={key:0,class:"text-body-1 font-weight-bold"},re={key:1,class:"text-body-1 textSecondary"},ce={key:1},de={class:"text-body-1 textSecondary text-no-wrap"},ue=t("div",{class:"line mx-auto bg-grey100"},null,-1),_e=t("h6",{class:"text-body-1 font-weight-bold"},"登录查看对话窗口历史",-1),je=nt({setup(w){const _=H(),m=Q(),{useremail:l,userAvatar:N,expireTime:S,isPlus:V,isLogin:r,expired:v,daysBetween:g}=Y(m),o=d([]),I=d({title:"用户中心"}),L=d(!1),D=d([{text:"系统主页",disabled:!1,href:"#"},{text:"用户中心",disabled:!0,href:"#"}]);function F(){const p=window.VITE_API_BASE_URL;K.post(p+"/app/user/message",{}).then(T=>{o.value=T.data.data}).catch(T=>{console.error("请求错误:",T)})}function u(){m.loginModal=!0}function x(){m.registModel=!0}function y(){ct.confirm({zIndex:99999,centered:!0,title:"提示？",icon:$(dt),content:$("div",{style:"color:red;"},"你确定退出登录吗？"),onOk(){m.logout(),U.warn("已退出登录，如需再次使用请重新登录")},onCancel(){U.warning("您取消了退出！")}})}return j(()=>{if(JSON.parse(localStorage.getItem("isLogin")||"false")||(U.warning("您还未登录，清先登录！"),u()),r.value&&S.value&&m.fetchUserData(),_.getSetting("paymentSwitch")){const T=new URL(window.location.href).hostname,E=_.getSetting("domainAddress"),b=_.getSetting("navSwitchAll");T===E||b===!1?L.value=!0:L.value=!1}}),it(()=>{r.value?F():o.value=[]}),(p,T)=>{const E=B("CircleIcon");return a(),n(C,null,[e(Z,{title:I.value.title,breadcrumbs:D.value},null,8,["title","breadcrumbs"]),e(R,null,{default:s(()=>[e(h,{cols:"12",lg:"8"},{default:s(()=>[e(P,{elevation:"0",rounded:"md",class:"bg-lightprimary border-0"},{default:s(()=>[e(z,{class:"pt-3 pb-0"},{default:s(()=>[e(R,null,{default:s(()=>[e(h,{cols:"12",sm:"6",class:"pt-sm-10 pt-5"},{default:s(()=>[t("div",wt,[c(l)?(a(),n("h5",St,[f(" 欢迎，"+i(c(l))+" ",1),e(G,{size:"small",class:"ml-2 elevation-0",variant:"elevated",onClick:y},{default:s(()=>[kt]),_:1})])):(a(),n("h5",Ct,[Pt,e(G,{class:"ml-2 elevation-0",size:"small",variant:"elevated",onClick:u},{default:s(()=>[Vt]),_:1}),e(G,{class:"ml-2 elevation-0",size:"small",variant:"elevated",onClick:x},{default:s(()=>[Tt]),_:1})]))]),t("div",Ut,[c(r)?(a(),n("div",It,[t("div",null,[Lt,t("div",zt,[t("h2",At,i(c(g)),1)])]),e(ot,{vertical:"",class:"mx-5"}),t("div",null,[Bt,t("div",Mt,[t("h2",Nt,i(c(S)),1)])])])):A("",!0),c(r)?A("",!0):(a(),n("div",Dt,Rt))])]),_:1}),e(h,{cols:"12",sm:"6",class:"text-sm-right"},{default:s(()=>[Ft]),_:1})]),_:1})]),_:1})]),_:1}),e(P,{elevation:"0",rounded:"md",class:"bg-lightsecondary mt-6"},{default:s(()=>[(a(),k(W,{key:`${c(r)}`}))]),_:1}),L.value?(a(),n("div",Ot,[(a(),k(bt,{key:`${c(r)}`}))])):A("",!0)]),_:1}),e(h,{cols:"12",lg:"4"},{default:s(()=>[e(P,{elevation:"10",class:"mt-sm-0 mt-6"},{default:s(()=>[c(V)&&c(r)?(a(),k(z,{key:0,class:"text-center"},{default:s(()=>[Gt,Jt,$t,Ht,e(J,{flat:"",color:"primary",to:"/user/plus"},{default:s(()=>[Kt]),_:1})]),_:1})):c(r)?(a(),k(z,{key:1,class:"text-center"},{default:s(()=>[Qt,jt,qt,Wt,e(J,{flat:"",color:"primary",to:"/user/plus"},{default:s(()=>[Xt]),_:1})]),_:1})):A("",!0),c(r)?A("",!0):(a(),k(z,{key:2,class:"text-center"},{default:s(()=>[Yt,Zt,te,ee,e(J,{flat:"",onClick:u,color:"primary"},{default:s(()=>[se]),_:1})]),_:1}))]),_:1}),e(P,{class:"mt-5",elevation:"10"},{default:s(()=>[e(z,null,{default:s(()=>[e(lt,{class:"text-h5"},{default:s(()=>[ae]),_:1}),t("div",oe,[c(r)?(a(!0),n(C,{key:0},M(o.value,b=>(a(),n("div",{key:b.title},[e(R,{class:"d-flex mb-4"},{default:s(()=>[e(h,{cols:"4",lg:"3",md:"auto",sm:"auto",class:"px-0 pt-0 pb-1 d-flex align-start"},{default:s(()=>[t("h6",le,i(b.updateTime_ymd),1)]),_:2},1024),e(h,{cols:"1",sm:"1",class:"px-0 text-center pt-0 pb-1"},{default:s(()=>[e(E,{size:"13",class:rt("text-"+b.textcolor)},null,8,["class"]),ne]),_:2},1024),e(h,{cols:"7",sm:"8",class:"pt-0 pb-1"},{default:s(()=>[b.boldtext?(a(),n("h6",ie,i(b.title),1)):(a(),n("h6",re,i(b.title),1))]),_:2},1024)]),_:2},1024)]))),128)):(a(),n("div",ce,[e(R,{class:"d-flex mb-4"},{default:s(()=>[e(h,{cols:"4",lg:"3",md:"auto",sm:"auto",class:"px-0 pt-0 pb-1 d-flex align-start"},{default:s(()=>[t("h6",de,i(new Date().toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})),1)]),_:1}),e(h,{cols:"1",sm:"1",class:"px-0 text-center pt-0 pb-1"},{default:s(()=>[e(E,{size:"13"}),ue]),_:1}),e(h,{cols:"7",sm:"8",class:"pt-0 pb-1"},{default:s(()=>[_e]),_:1})]),_:1})]))])]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{je as default};
