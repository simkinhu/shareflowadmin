import{d as he,aS as b,aJ as n,a6 as m,bl as a,c as t,bn as ye,a9 as s,r as c,w as ke,o as we,l as xe,a8 as h,u,b2 as p,a7 as y,F as $,aQ as N,G as C,m as be,A as Ce,aT as Se,h as W}from"./@vue-7e44e6dd.js";import{u as ae}from"./userShare-d3dda1b7.js";import{i as P,u as Ae}from"../index-96439228.js";import"./loginChat.vue_vue_type_style_index_0_lang-c20dbf2e.js";import{m as f,M as se}from"./ant-design-vue-32902922.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";import{B as D,w as I,p as Be,l as z,C as Q,b as Y,j as ze,f as Le,e as Me}from"./vuetify-e7ea846c.js";import{aa as G,a6 as J,ab as Z,$ as X,ac as ee,ad as te,a as Oe,b as Pe}from"./@ant-design-bd925dbd.js";import"./pinia-98ec2995.js";import"./vue-demi-71ba0ef2.js";import"./@multiavatar-7283d2b3.js";import"./crypto-js-3b32aad8.js";import"./vue-router-0e41780a.js";import"./dayjs-9df2e3b6.js";import"./axios-6f43ddff.js";/* empty css             */import"./vue3-apexcharts-fb146ff1.js";import"./vue-fdaf27ce.js";import"./apexcharts-a35677a7.js";import"./core-js-40ace11a.js";import"./@babel-8a290753.js";import"./@ctrl-044b369f.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-5efc5547.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-ef06c517.js";import"./dom-align-529d0cdc.js";import"./lodash-es-5af3e9d7.js";import"./async-validator-dee29e8b.js";import"./throttle-debounce-87e7e444.js";const Ue="/list/assets/profilebg-44563d8e.jpg",Ve=he({setup(){return{userStore:ae()}},data(){return{usercdkInput:""}},methods:{cdkModeluse(){if(!this.userStore.isLogin)return f.warning("请先登录，再进行卡密兑换"),!1;let d=this.usercdkInput;if(!d||!/^[a-zA-Z0-9]+$/.test(d)){f.warning("请输入正确的兑换码，您输入的兑换码类型有误！");return}se.confirm({title:()=>"使用提醒：",content:()=>"您确定使用该兑换码进行激活吗？该兑换码使用过后不可再次使用！",centered:!0,onOk:()=>{const B=window.VITE_API_BASE_URL;P.post(B+"/app/user/cdkeyus",{cdkcode:d}).then(v=>{const g=v.data.data;g.code==200?(this.userStore.CdkeyModal=!1,f.success(g.msg,5),this.usercdkInput=""):g.code===400&&f.error(g.msg)}).catch(v=>{console.log(v)})},onCancel(){return f.warning("您已取消兑换码使用，如需使用请提交兑换！"),!1},zIndex:99999999})}}});function Fe(d,_,B,v,g,r){const M=b("a-alert"),w=b("a-input"),O=b("a-modal");return n(),m(O,{style:{top:"40%"},"z-index":"1009",footer:null,open:d.userStore.CdkeyModal,"onUpdate:open":_[2]||(_[2]=x=>d.userStore.CdkeyModal=x),width:"350px",title:"CDKEY兑换开通"},{default:a(()=>[t(M,{class:"mt-3",message:"请输入您的CDKEY兑换码进行兑换",type:"warning"}),t(w,{class:"mt-5",value:d.usercdkInput,"onUpdate:value":_[0]||(_[0]=x=>d.usercdkInput=x),placeholder:"请输入您的CDKEY兑换码",onKeyup:ye(d.cdkModeluse,["enter"])},null,8,["value","onKeyup"]),s("button",{class:"mt-5 loginbutton",onClick:_[1]||(_[1]=(...x)=>d.cdkModeluse&&d.cdkModeluse(...x))},"立即使用")]),_:1},8,["open"])}const Te=Ie(Ve,[["render",Fe]]);const Ee=["src"],$e={class:"px-4 py-1"},De=s("h5",{class:"text-h5"},"注册时间",-1),je={class:"text-h6 font-weight-regular"},Ke=s("h5",{class:"text-h5"},"会员到期",-1),qe={class:"text-h6 font-weight-regular"},Re=s("h5",{class:"text-h5"},"会员身份",-1),He={class:"text-h6 font-weight-regular"},Ne={class:"text-center top-spacer"},We={class:"avatar-border"},Qe=["innerHTML"],Ye={key:0,class:"text-h5 mt-10"},Ge={key:1,class:"text-h5 mt-3"},Je=s("span",{class:"text-h6 font-weight-regular"},null,-1),Ze={class:"d-flex align-center justify-space-between px-10 py-1 gap-3"},Xe=C("分享好友，获得Plus会员"),et={class:"d-flex justify-space-between"},tt=["textContent"],at=["src"],st={class:"d-flex align-center mt-4"},ot={key:0,class:"text-h6 mt-n3 pr-2"},lt={key:1,class:"display-1"},nt={key:2,class:"display-1"},rt={class:"text-medium-emphasis font-weight-medium ml-2"},it=C(" 立即购买 "),ct=C("立即兑换"),ut={key:1,style:{width:"160px",height:"160px",padding:"60px 0",margin:"0 auto"}},dt=C(" 点击使用微信在线支付 "),pt=s("h4",null,"请使用手机打开微信扫一扫",-1),_t=s("h3",{style:{"font-weight":"bold"}},"使用微信支付开通Plus会员",-1),mt={key:1,style:{width:"160px",height:"160px",padding:"60px 0",margin:"0 auto"}},ft=C("点击使用支付宝在线支付"),vt=s("h4",null,"请使用手机打开支付宝扫一扫",-1),gt=s("h3",{style:{"font-weight":"bold"}},"使用支付宝支付开通Plus会员",-1),Gt={setup(d){const _=c("loading"),B=c("loading"),v=Ae(),g=c("1"),r=ae(),M=c([]);c(!1);const w=c(!1),O=c(null),x=c(null),S=c(null),U=c(null),V=c(null),k=c(!0),A=c(!1);c(String(v.getSetting("siteTitle")||""));const j=c(!1),oe={CheckOutlined:Oe,CloseOutlined:Pe,ApiOutlined:J,HourglassOutlined:Z,FieldTimeOutlined:G,WechatOutlined:te,QrcodeOutlined:ee,CopyOutlined:X},le=()=>{se.success({zIndex:99999,centered:!0,title:()=>"支付提醒",content:()=>W("div",{},[W("p","支付成功，已为您开通会员资格!")])})},F=()=>{if(r.isLogin===!1)return f.warning("您还未登录，请先登录后获取推广链接！"),r.loginModal=!0,!1;r.invcodeModel=!0},ne=()=>{if(r.isLogin===!1)return f.warning("您还未登录，请先登录后获取推广链接！"),r.loginModal=!0,!1;const e=window.location.origin+"/list/#/?share="+r.invcode;navigator.clipboard.writeText(e).then(()=>{f.success("推广链接已复制到剪贴板，赶快去邀请好友使用吧！")}).catch(o=>{f.error("复制失败，请点击右侧按钮手动复制！")})};function re(e){return oe[e]||null}const ie=async()=>{try{const e=window.VITE_API_BASE_URL,o=await P.post(`${e}/app/share/svip`);M.value=o.data.data}catch(e){console.error("请求错误:",e)}},ce=()=>{const e=navigator.userAgent.toLowerCase();return/mobile|android|touch|webos|hpwos/.test(e)?"mobile":"pc"},ue=()=>{const e=navigator.userAgent.toLowerCase();j.value=e.indexOf("micromessenger")!==-1},K=async e=>{try{B.value="loading",_.value="loading";const o=window.VITE_API_BASE_URL,i=await P.post(`${o}/app/user/pay`,{jsapi:j.value,paytype:e,package_id:R.value,device_type:ce()});if(i.data.data.type==="error")return f.warn("支付错误请联系管理员："+i.data.data.msg,5),!1;i.data.data.type==="qrcode"?e==="1"?(O.value=i.data.data.codeurl,B.value="active",k.value=!0):e==="2"&&(x.value=i.data.data.codeurl,_.value="active",k.value=!0):i.data.data.type==="url"?e==="1"?(V.value=i.data.data.payurl,k.value=!1):(U.value=i.data.data.payurl,k.value=!1):i.data.data.type==="urlalipaymobile"&&(U.value=o+i.data.data.payurl,k.value=!1);const L=i.data.data.orderno;clearInterval(S.value),de(L)}catch(o){console.error("请求错误:",o)}},q=e=>{V.value&&e===1?window.open(V.value,"_blank"):window.open(U.value,"_blank")},de=e=>{S.value=setInterval(()=>{pe(e)},2e3)},pe=async e=>{try{const o=window.VITE_API_BASE_URL;(await P.post(`${o}/app/user/paystatus`,{orderno:e})).data.data.code==="ok"?(clearInterval(S.value),le(),await r.fetchUserData(),w.value=!1):console.log("Payment not completed yet.")}catch(o){console.error("请求错误:",o)}},R=c(0),T=c(0),_e=e=>{if(R.value=e.id,T.value=e.package_price,!r.isLogin)return f.warning("您还未登录，请先登录"),r.loginModal=!0,!1;w.value=!0,K(g.value)},me=()=>{r.CdkeyModal=!0},fe=e=>{g.value=e,w.value&&K(e)};return ke(w,e=>{!e&&S.value&&clearInterval(S.value)}),we(async()=>{if(await v.loadSettingsFromAPI(),ie(),v.getSetting("paymentSwitch")){const e=new URL(window.location.href).hostname,o=v.getSetting("domainAddress"),i=v.getSetting("navSwitchAll");e===o||i===!1?A.value=!0:A.value=!1}ue()}),xe(()=>{S.value&&clearInterval(S.value)}),(e,o)=>{const i=b("a-qrcode"),L=b("a-button"),H=b("a-tab-pane"),ve=b("a-tabs"),ge=b("a-modal");return n(),h($,null,[t(Q,{elevation:"10",class:"overflow-hidden"},{default:a(()=>[s("img",{src:u(Ue),alt:"profile",class:"w-100"},null,8,Ee),s("div",null,[t(D,{class:"mt-1 pb-5"},{default:a(()=>[t(I,{cols:"12",lg:"4",sm:"12",class:"order-sm-second"},{default:a(()=>[s("div",$e,[t(D,{class:"justify-center"},{default:a(()=>[t(I,{cols:"4",class:"text-center"},{default:a(()=>[t(u(G),{style:{"font-size":"25px","margin-bottom":"10px"}}),De,s("h6",je,p(u(r).createTime),1)]),_:1}),t(I,{cols:"4",class:"text-center"},{default:a(()=>[t(u(J),{style:{"font-size":"25px","margin-bottom":"10px"}}),Ke,s("h6",qe,p(u(r).expireTime),1)]),_:1}),t(I,{cols:"4",class:"text-center"},{default:a(()=>[t(u(Z),{style:{"font-size":"25px","margin-bottom":"10px"}}),Re,s("h6",He,p(u(r).isLogin===!0?u(r).isPlus===!0?"Plus会员":"普通会员":""),1)]),_:1})]),_:1})])]),_:1}),t(I,{cols:"12",lg:"4",sm:"12",class:"d-flex justify-center order-sml-first"},{default:a(()=>[s("div",Ne,[s("div",We,[t(Be,{size:"100",class:"userImage"},{default:a(()=>[s("div",{innerHTML:u(r).userAvatar,style:{width:"92px",height:"92px"}},null,8,Qe)]),_:1})]),u(r).useremail?(n(),h("h5",Ye,p(u(r).useremail),1)):(n(),h("h5",Ge,"您还未登录")),Je])]),_:1}),A.value?(n(),m(I,{key:0,cols:"12",lg:"4",class:"d-flex align-center justify-center justify-lg-end order-sm-third"},{default:a(()=>[s("div",Ze,[t(z,{icon:"",variant:"flat",size:"x-small",onClick:ne,color:"primary",class:"btn-brand-facebook"},{default:a(()=>[t(u(X),{style:{"font-size":"18px"}})]),_:1}),t(z,{icon:"",variant:"flat",size:"x-small",onClick:F,color:"primary",class:"btn-brand-weixin"},{default:a(()=>[t(u(ee),{style:{"font-size":"18px"}})]),_:1}),t(z,{icon:"",variant:"flat",size:"x-small",onClick:F,color:"primary",style:{"background-color":"#1AAD19!important"}},{default:a(()=>[t(u(te),{style:{"font-size":"18px"}})]),_:1}),t(z,{variant:"flat",onClick:F,color:"primary"},{default:a(()=>[Xe]),_:1})])]),_:1})):y("",!0)]),_:1})])]),_:1}),t(D,{class:"d-flex justify-center mt-8"},{default:a(()=>[(n(!0),h($,null,N(M.value,l=>be((n(),m(I,{cols:"12",md:"3",sm:"6",xl:"3",key:l.caption},{default:a(()=>[t(Q,{elevation:"10",class:"rounded-md pa-sm-8 pa-4"},{default:a(()=>[s("div",et,[s("h2",{class:"text-medium-emphasis text-uppercase mb-6",textContent:p(l.package_name)},null,8,tt),l.package_tag_status?(n(),m(Y,{key:0,size:"small",class:"mt-sm-n4 font-weight-bold",color:"warning"},{default:a(()=>[C(p(l.package_tag),1)]),_:2},1024)):y("",!0),l.package_rate!==100?(n(),m(Y,{key:1,size:"small",class:"mt-sm-n4 font-weight-bold",color:"error"},{default:a(()=>[C(" 原价："+p(l.package_price),1)]),_:2},1024)):y("",!0)]),s("img",{src:l.package_image,width:"90",height:"90",alt:"icon"},null,8,at),s("div",st,[A.value?(n(),h("sup",ot,"￥")):y("",!0),A.value&&l.package_rate===100?(n(),h("h2",lt,p(l.package_price),1)):y("",!0),A.value&&l.package_rate!==100?(n(),h("h2",nt,p((l.package_price*l.package_rate/100).toFixed(2)),1)):y("",!0),s("span",rt,p(l.package_days)+"天",1)]),t(ze,{class:"mb-0 pl-0 bg-transparent pt-5"},{default:a(()=>[(n(!0),h($,null,N(l.listtitle,E=>(n(),m(Le,{class:"px-0",key:E.listtitle},{default:a(()=>[t(Me,{class:"text-body-1 d-flex align-center font-weight-medium text-medium-emphasis"},{default:a(()=>[(n(),m(Se(re(E.feature_icon)),{class:"checkicon"})),C(" "+p(E.feature_title),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),A.value?(n(),m(z,{key:0,color:"primary",size:"large",class:"mt-6",flat:"",block:"",onClick:()=>_e(l)},{default:a(()=>[it]),_:2},1032,["onClick"])):(n(),m(z,{key:1,color:"primary",size:"large",class:"mt-6",flat:"",block:"",onClick:me},{default:a(()=>[ct]),_:1}))]),_:2},1024)]),_:2},1024)),[[Ce,l.package_active]])),128))]),_:1}),t(ge,{bodyStyle:"paybox","z-index":"9999",footer:null,centered:"true",open:w.value,"onUpdate:open":o[3]||(o[3]=l=>w.value=l),width:"500px",title:"请选择选择支付方式"},{default:a(()=>[t(ve,{activeKey:g.value,"onUpdate:activeKey":o[2]||(o[2]=l=>g.value=l),type:"card",onTabClick:fe},{default:a(()=>[t(H,{key:"1",tab:"微信支付"},{default:a(()=>[s("h2",null,"支付金额："+p(T.value)+" 元",1),k.value?(n(),m(i,{key:0,status:B.value,value:O.value,color:"#52c41a"},null,8,["status","value"])):y("",!0),k.value?y("",!0):(n(),h("div",ut,[t(L,{type:"primary",onClick:o[0]||(o[0]=l=>q(1)),style:{"background-color":"#3CB371"}},{default:a(()=>[dt]),_:1})])),pt,_t]),_:1}),t(H,{key:"2",tab:"支付宝支付"},{default:a(()=>[s("h2",null,"支付金额："+p(T.value)+" 元",1),k.value?(n(),m(i,{key:0,value:x.value,status:_.value,color:"#1677ff"},null,8,["value","status"])):y("",!0),k.value?y("",!0):(n(),h("div",mt,[t(L,{type:"primary",onClick:o[1]||(o[1]=l=>q(2))},{default:a(()=>[ft]),_:1})])),vt,gt]),_:1})]),_:1},8,["activeKey"])]),_:1},8,["open"]),t(Te)],64)}}};export{Gt as default};
