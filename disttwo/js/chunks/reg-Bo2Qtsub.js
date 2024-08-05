import{a as E,u as L,_ as R,b as j,c as M,g as x,d as z,i as D}from"../index-CS5YVAQi.js";import{_ as V,a as _}from"./Label.vue_vue_type_script_setup_true_lang-D1cXxl5O.js";import{u as F}from"./useConfigStore-DcLyot55.js";import{a as s}from"./ant-design-vue-CyiF9e54.js";import{d as H,r,q as G,j as C,k as U,c as t,_ as i,u as l,ac as d,aa as k,a4 as J,l as g}from"./@vue-Ca6oPw20.js";import"./pinia-B0xTW-XS.js";import"./vue-demi-Dq6ymT-8.js";import"./@vueuse-BnZciM7y.js";import"./axios-DTyqpfTh.js";import"./@multiavatar-dxrVjIoY.js";import"./crypto-js-l0AFIALE.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-BkWO730n.js";import"./radix-vue-B6u9mWk8.js";import"./@floating-ui-DW8MF69D.js";import"./@radix-icons--IQtXok_.js";import"./@iconify-DzGEP68A.js";import"./lucide-vue-next-BGOoG6k-.js";import"./@ant-design-C6rk-XVk.js";import"./@ctrl-DOFZgDuz.js";import"./vue-router-Dial6ibt.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@babel-BiFW4_mA.js";import"./lodash-es-D9ej4-U1.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";const K={class:"lg:min-h-[934px] xm:py-8 inline-flex items-center justify-center"},O={key:0,class:"mt-3 text-sm text-green-600"},Q={class:"grid gap-4"},W={class:"grid gap-2"},X={class:"flex items-center gap-1.5"},Y={class:"grid gap-2"},Z={class:"grid gap-2"},be=H({__name:"reg",setup(ee){const A=E(),{setActiveTab:S}=A;L();const p=F(),n=r(""),u=r(""),c=r(""),w=r(""),y=r(""),m=r("获取验证码"),o=r(null),f=r(30),h=r(0),I=r(!1);G(async()=>{if(await p.loadSettingsFromAPI(),h.value=Number(p.getSetting("new_user_days")),p.getSetting("paymentSwitch")){const a=new URL(window.location.href).hostname,e=p.getSetting("domainAddress"),q=p.getSetting("navSwitchAll");I.value=a===e||q===!1}const v=new URLSearchParams(window.location.search);y.value=v.get("share")||""});const b=()=>{const v=/^\d{6}$/,a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return v.test(u.value)?a.test(n.value)?c.value.length<8?(s.warning("用户密码不得小于8位字符，请重新输入"),!1):c.value!==w.value?(s.warning("两次输入的密码不一致"),!1):!0:(s.warning("请输入有效的电子邮箱"),!1):(s.warning("验证码必须是6位纯数字"),!1)},P=()=>{if(o.value===null){if(n.value===""){s.warning("请输入您的电子邮箱");return}u.value="",B(),$(!0)}},B=()=>{f.value=30,m.value=`${f.value}秒后重新获取`,o.value=setInterval(()=>{f.value--,f.value>0?m.value=`${f.value}秒后重新获取`:(m.value="获取验证码",clearInterval(o.value),o.value=null)},1e3)},N=()=>{b()&&$(!1)},$=v=>{const a=window.VITE_API_BASE_URL;D.post(a+"/app/user/regeister",{email:n.value,emailcode:u.value,password:c.value,invcode:y.value}).then(e=>{if(e.data.data.code===200){v&&s.success("验证码已发送，请查收邮件");return}if(e.data.data.code===201){s.success(e.data.data.msg),S("login"),c.value="",n.value="",u.value="";return}if(e.data.data.code===401){s.warning(e.data.data.msg),u.value="",o.value!==null&&(clearInterval(o.value),o.value=null,m.value="获取验证码");return}if(e.data.data.code===400){s.warning(e.data.data.msg),n.value="",o.value!==null&&(clearInterval(o.value),o.value=null,m.value="获取验证码");return}}).catch(e=>{console.error("请求错误:",e),s.error("操作失败，请稍后重试")})},T=()=>{S("login")};return(v,a)=>(C(),U("div",K,[t(l(z),{class:"mx-auto w-full"},{default:i(()=>[t(l(R),null,{default:i(()=>[t(l(j),{class:"text-2xl"},{default:i(()=>[d("开始注册")]),_:1}),h.value>=0?(C(),U("div",O," 新用户注册立即赠送"+k(h.value)+"天普通会员资格 ",1)):J("",!0)]),_:1}),t(l(M),null,{default:i(()=>[g("div",Q,[g("div",W,[t(l(V),{for:"email"},{default:i(()=>[d("您的邮箱")]),_:1}),t(l(_),{id:"email",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),type:"email",placeholder:"helloai@example.com",required:""},null,8,["modelValue"])]),g("div",X,[t(l(_),{id:"verificationCode",modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=e=>u.value=e),type:"text",placeholder:"输入验证码"},null,8,["modelValue"]),t(l(x),{onClick:P,disabled:o.value!==null,class:"w-[150px]"},{default:i(()=>[d(k(m.value),1)]),_:1},8,["disabled"])]),g("div",Y,[t(l(V),{for:"password"},{default:i(()=>[d("设置密码")]),_:1}),t(l(_),{id:"password",modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=e=>c.value=e),type:"password",placeholder:"****************",required:""},null,8,["modelValue"])]),g("div",Z,[t(l(V),{for:"confirmPassword"},{default:i(()=>[d("确认密码")]),_:1}),t(l(_),{id:"confirmPassword",modelValue:w.value,"onUpdate:modelValue":a[3]||(a[3]=e=>w.value=e),type:"password",placeholder:"****************",required:""},null,8,["modelValue"])]),t(l(x),{onClick:N,type:"submit",class:"w-full"},{default:i(()=>[d(" 立即注册 ")]),_:1}),t(l(x),{onClick:T,variant:"outline",class:"w-full"},{default:i(()=>[d(" 已有账户？去登录 ")]),_:1})])]),_:1})]),_:1})]))}});export{be as default};
