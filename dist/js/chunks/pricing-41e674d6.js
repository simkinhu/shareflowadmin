import{d as he,aS as m,aJ as l,a6 as g,bl as s,c as e,bn as fe,a9 as a,r as c,w as ve,o as ge,l as ye,a8 as h,u as f,b2 as _,G as b,a7 as w,F as T,aQ as H,m as ke,A as we,aT as xe,h as W}from"./@vue-7e44e6dd.js";import{u as G}from"./userShare-37435da6.js";import{i as U,u as Ce}from"../index-dd91c33b.js";import{l as be}from"./loginChat-abc539b1.js";import{m as C,M as Q}from"./ant-design-vue-84efdadc.js";import{_ as Se}from"./_plugin-vue_export-helper-c27b6911.js";import{p as F,z as x,i as Ie,b as D,D as Y,n as Ae,f as Be,e as Le,k as J}from"./vuetify-574a8d14.js";import{a as Ue,b as Me}from"./@ant-design-05eaf6fc.js";import"./pinia-98ec2995.js";import"./vue-demi-71ba0ef2.js";import"./@multiavatar-7283d2b3.js";import"./crypto-js-3b32aad8.js";import"./vue-router-0e41780a.js";import"./dayjs-c3e478c5.js";import"./axios-6f43ddff.js";/* empty css             */import"./vue3-apexcharts-fb146ff1.js";import"./vue-fdaf27ce.js";import"./apexcharts-a35677a7.js";import"./core-js-40ace11a.js";import"./@ctrl-044b369f.js";import"./@babel-692ca2d6.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-5efc5547.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-ef06c517.js";import"./dom-align-529d0cdc.js";import"./lodash-es-5af3e9d7.js";import"./async-validator-dee29e8b.js";import"./throttle-debounce-87e7e444.js";const ze="/list/assets/profilebg-44563d8e.jpg",Pe=he({setup(){return{userStore:G()}},data(){return{usercdkInput:""}},methods:{cdkModeluse(){if(!this.userStore.isLogin)return C.warning("请先登录，再进行卡密兑换"),!1;let u=this.usercdkInput;if(!u||!/^[a-zA-Z0-9]+$/.test(u)){C.warning("请输入正确的兑换码，您输入的兑换码类型有误！");return}Q.confirm({title:()=>"使用提醒：",content:()=>"您确定使用该兑换码进行激活吗？该兑换码使用过后不可再次使用！",centered:!0,onOk:()=>{const S=window.VITE_API_BASE_URL;U.post(S+"/app/user/cdkeyus",{cdkcode:u}).then(o=>{const y=o.data.data;y.code==200?(this.userStore.CdkeyModal=!1,C.success(y.msg,5),this.usercdkInput=""):y.code===400&&C.error(y.msg)}).catch(o=>{console.log(o)})},onCancel(){return C.warning("您已取消兑换码使用，如需使用请提交兑换！"),!1},zIndex:99999999})}}});function Ve(u,d,S,o,y,E){const k=m("a-alert"),B=m("a-input"),L=m("a-modal");return l(),g(L,{style:{top:"40%"},"z-index":"1009",footer:null,open:u.userStore.CdkeyModal,"onUpdate:open":d[2]||(d[2]=p=>u.userStore.CdkeyModal=p),width:"350px",title:"CDKEY兑换开通"},{default:s(()=>[e(k,{class:"mt-3",message:"请输入您的CDKEY兑换码进行兑换",type:"warning"}),e(B,{class:"mt-5",value:u.usercdkInput,"onUpdate:value":d[0]||(d[0]=p=>u.usercdkInput=p),placeholder:"请输入您的CDKEY兑换码",onKeyup:fe(u.cdkModeluse,["enter"])},null,8,["value","onKeyup"]),a("button",{class:"mt-5 loginbutton",onClick:d[1]||(d[1]=(...p)=>u.cdkModeluse&&u.cdkModeluse(...p))},"立即使用")]),_:1},8,["open"])}const Te=Se(Pe,[["render",Ve]]);const Fe=["src"],De={class:"text-center top-spacer"},Ee={class:"avatar-border"},$e=["innerHTML"],Ke={key:0,class:"text-h5 mt-5"},Oe=b("点击登录"),je={key:1,class:"mt-6"},qe=a("span",{class:"text-h6 font-weight-regular"},"UserToken",-1),Ne={class:"text-h5"},Re={class:"px-4 py-1"},He=a("h6",{class:"text-h6 mt-1"},"会员类型",-1),We={key:0,class:"mt-1"},Ye=a("h6",{class:"text-h6 mt-1"},"对话窗口",-1),Je={class:"text-h6 mt-2"},Ge=a("h6",{class:"text-h6 mt-1"},"会员到期",-1),Qe={class:"text-h6 mt-2"},Ze=a("h6",{class:"text-h6 mt-1"},"注册时间",-1),Xe={class:"text-h6 mt-2"},et=a("h6",{class:"text-h6 mt-1"},"最后登录",-1),tt={class:"text-h6 mt-2"},st={class:"d-flex justify-space-between"},at=["textContent"],ot=["src"],nt={class:"d-flex align-center mt-4"},lt={key:0,class:"text-h6 mt-n3 pr-2"},rt={key:1,class:"display-1"},it={key:2,class:"text-medium-emphasis font-weight-medium mt-4 ml-2"},ct={key:3,class:"text-medium-emphasis font-weight-medium ml-2"},ut=b("立即购买"),dt=b("立即兑换"),pt={key:1,style:{width:"160px",height:"160px",padding:"60px 0",margin:"0 auto"}},_t=b("点击新窗口支付"),mt=a("h4",null,"请使用手机打开微信扫一扫",-1),ht=a("h3",{style:{"font-weight":"bold"}},"使用微信支付开通Plus会员",-1),ft={key:1,style:{width:"160px",height:"160px",padding:"60px 0",margin:"0 auto"}},vt=b("点击新窗口支付"),gt=a("h4",null,"请使用手机打开支付宝扫一扫",-1),yt=a("h3",{style:{"font-weight":"bold"}},"使用支付宝支付开通Plus会员",-1),Zt={setup(u){const d=Ce(),S=c("1"),o=G(),y=c([]),E=c(!1),k=c(!1),B=c(null),L=c(null),p=c(null),M=c(null),z=c(null),v=c(!0),A=c(!1);c(String(d.getSetting("siteTitle")||""));const $=c(!1);c("CheckOutlined");const Z={CheckOutlined:Ue,CloseOutlined:Me},X=()=>{Q.success({zIndex:99999,centered:!0,title:()=>"支付提醒",content:()=>W("div",{},[W("p","支付成功，已为您开通会员资格!")])})};function ee(t){return Z[t]||null}const te=async()=>{try{const t=window.VITE_API_BASE_URL,n=await U.post(`${t}/app/user/svip`);y.value=n.data.data}catch(t){console.error("请求错误:",t)}},se=()=>{o.loginModal=!0},ae=()=>{const t=navigator.userAgent.toLowerCase();return/mobile|android|touch|webos|hpwos/.test(t)?"mobile":"pc"},oe=()=>{const t=navigator.userAgent.toLowerCase();$.value=t.indexOf("micromessenger")!==-1},K=async t=>{try{const n=window.VITE_API_BASE_URL,r=await U.post(`${n}/app/user/pay`,{jsapi:$.value,paytype:t,package_id:j.value,device_type:ae()});if(r.data.data.type==="error")return C.warn("支付错误请联系管理员："+r.data.data.msg,5),!1;r.data.data.type==="qrcode"?t==="1"?(B.value=r.data.data.codeurl,v.value=!0):t==="2"&&(L.value=r.data.data.codeurl,v.value=!0):r.data.data.type==="url"?t==="1"?(z.value=r.data.data.payurl,v.value=!1):(M.value=r.data.data.payurl,v.value=!1):r.data.data.type==="urlalipaymobile"&&(M.value=n+r.data.data.payurl,v.value=!1);const I=r.data.data.orderno;clearInterval(p.value),ne(I)}catch(n){console.error("请求错误:",n)}},O=t=>{z.value&&t===1?window.open(z.value,"_blank"):window.open(M.value,"_blank")},ne=t=>{p.value=setInterval(()=>{le(t)},2e3)},le=async t=>{try{const n=window.VITE_API_BASE_URL;(await U.post(`${n}/app/user/paystatus`,{orderno:t})).data.data.code==="ok"?(clearInterval(p.value),X(),await o.fetchUserData(o.userToken),k.value=!1):console.log("Payment not completed yet.")}catch(n){console.error("请求错误:",n)}},j=c(0),P=c(0),re=t=>{if(j.value=t.id,P.value=t.package_price,!o.isLogin)return C.warning("您还未登录，请先登录"),o.loginModal=!0,!1;k.value=!0,K(S.value)},ie=()=>{o.CdkeyModal=!0},ce=t=>{S.value=t,k.value&&K(t)};return ve(k,t=>{!t&&p.value&&clearInterval(p.value)}),ge(async()=>{if(await d.loadSettingsFromAPI(),te(),o.fetchUserData(null),JSON.parse(localStorage.getItem("isLogin")||"false")||(C.warning("您还未登录，清先登录！"),o.loginModal=!0),d.getSetting("paymentSwitch")){const n=new URL(window.location.href).hostname,r=d.getSetting("domainAddress"),I=d.getSetting("navSwitchAll");n===r||I===!1?A.value=!0:A.value=!1}oe()}),ye(()=>{p.value&&clearInterval(p.value)}),(t,n)=>{const r=m("crown-icon"),I=m("message-circle-icon"),ue=m("calendar-event-icon"),de=m("history-icon"),pe=m("calendar-time-icon"),q=m("a-qrcode"),N=m("a-button"),R=m("a-tab-pane"),_e=m("a-tabs"),me=m("a-modal");return l(),h(T,null,[e(Y,{elevation:"10",class:"overflow-hidden"},{default:s(()=>[a("img",{src:f(ze),alt:"profile",class:"w-100"},null,8,Fe),a("div",null,[e(F,{class:"mt-1"},{default:s(()=>[e(x,{cols:"12",lg:"2",sm:"12",class:"d-flex justify-center order-sml-first"},{default:s(()=>[a("div",De,[a("div",Ee,[e(Ie,{size:"100",class:"userImage"},{default:s(()=>[a("div",{innerHTML:f(o).userAvatar,style:{width:"92px",height:"92px"}},null,8,$e)]),_:1})]),f(o).isLogin?(l(),h("div",je,[qe,a("h5",Ne,_(f(o).userToken),1)])):(l(),h("h5",Ke,[e(D,{class:"elevation-0",variant:"elevated",onClick:se},{default:s(()=>[Oe]),_:1})]))])]),_:1}),e(x,{cols:"12",lg:"10",sm:"12",class:"order-sm-second pb-10"},{default:s(()=>[a("div",Re,[e(F,{class:"justify-center"},{default:s(()=>[e(x,{cols:"12",sm:"6",md:"4",lg:"2",class:"text-center"},{default:s(()=>[e(r,{size:"30"}),He,f(o).isLogin?(l(),h("div",We,[e(D,{rounded:"md",class:"font-weight-bold",color:f(o).isPlus?"error":"success",size:"small",label:""},{default:s(()=>[b(_(f(o).isPlus?"Plus会员":"普通会员"),1)]),_:1},8,["color"])])):w("",!0)]),_:1}),e(x,{cols:"12",sm:"6",md:"4",lg:"2",class:"text-center"},{default:s(()=>[e(I,{size:"30"}),Ye,a("h4",Je,_(f(o).userCount),1)]),_:1}),e(x,{cols:"12",sm:"6",md:"4",lg:"2",class:"text-center"},{default:s(()=>[e(ue,{size:"30"}),Ge,a("h4",Qe,_(f(o).expireTime),1)]),_:1}),e(x,{cols:"12",sm:"6",md:"4",lg:"2",class:"text-center"},{default:s(()=>[e(de,{size:"30"}),Ze,a("h4",Xe,_(f(o).createTime),1)]),_:1}),e(x,{cols:"12",sm:"6",md:"4",lg:"2",class:"text-center"},{default:s(()=>[e(pe,{size:"30"}),et,a("h4",tt,_(f(o).updateTime),1)]),_:1})]),_:1})])]),_:1})]),_:1})])]),_:1}),e(F,{class:"d-flex justify-center mt-8"},{default:s(()=>[(l(!0),h(T,null,H(y.value,i=>ke((l(),g(x,{cols:"12",md:"3",sm:"6",xl:"3",key:i.caption},{default:s(()=>[e(Y,{elevation:"10",class:"rounded-md pa-sm-8 pa-4"},{default:s(()=>[a("div",st,[a("h2",{class:"text-medium-emphasis text-uppercase mb-6",textContent:_(i.package_name)},null,8,at),i.package_tag_status?(l(),g(D,{key:0,size:"small",class:"mt-sm-n4 font-weight-bold",color:"warning"},{default:s(()=>[b(_(i.package_tag),1)]),_:2},1024)):w("",!0)]),a("img",{src:i.package_image,width:"90",height:"90",alt:"icon"},null,8,ot),a("div",nt,[A.value?(l(),h("sup",lt,"￥")):w("",!0),A.value?(l(),h("h2",rt,_(i.package_price),1)):w("",!0),E.value?(l(),h("span",it,"/年")):(l(),h("span",ct,_(i.package_days)+"天",1))]),e(Ae,{class:"mb-0 pl-0 bg-transparent pt-5"},{default:s(()=>[(l(!0),h(T,null,H(i.listtitle,V=>(l(),g(Be,{class:"px-0",key:V.listtitle},{default:s(()=>[e(Le,{class:"text-body-1 d-flex align-center font-weight-medium text-medium-emphasis"},{default:s(()=>[(l(),g(xe(ee(V.feature_icon)),{class:"checkicon"})),b(" "+_(V.feature_title),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),A.value?(l(),g(J,{key:0,color:"primary",size:"large",class:"mt-6",flat:"",block:"",onClick:()=>re(i)},{default:s(()=>[ut]),_:2},1032,["onClick"])):(l(),g(J,{key:1,color:"primary",size:"large",class:"mt-6",flat:"",block:"",onClick:ie},{default:s(()=>[dt]),_:1}))]),_:2},1024)]),_:2},1024)),[[we,i.package_active]])),128))]),_:1}),e(me,{bodyStyle:"paybox","z-index":"9999",footer:null,centered:"true",open:k.value,"onUpdate:open":n[3]||(n[3]=i=>k.value=i),width:"500px",title:"请选择选择支付方式"},{default:s(()=>[e(_e,{activeKey:S.value,"onUpdate:activeKey":n[2]||(n[2]=i=>S.value=i),type:"card",onTabClick:ce},{default:s(()=>[e(R,{key:"1",tab:"微信支付"},{default:s(()=>[a("h2",null,"支付金额："+_(P.value)+" 元",1),v.value?(l(),g(q,{key:0,value:B.value,color:"#52c41a"},null,8,["value"])):w("",!0),v.value?w("",!0):(l(),h("div",pt,[e(N,{type:"primary",onClick:n[0]||(n[0]=i=>O(1))},{default:s(()=>[_t]),_:1})])),mt,ht]),_:1}),e(R,{key:"2",tab:"支付宝支付"},{default:s(()=>[a("h2",null,"支付金额："+_(P.value)+" 元",1),v.value?(l(),g(q,{key:0,value:L.value,color:"#1677ff"},null,8,["value"])):w("",!0),v.value?w("",!0):(l(),h("div",ft,[e(N,{type:"primary",onClick:n[1]||(n[1]=i=>O(2))},{default:s(()=>[vt]),_:1})])),gt,yt]),_:1})]),_:1},8,["activeKey"])]),_:1},8,["open"]),e(Te),e(be)],64)}}};export{Zt as default};
