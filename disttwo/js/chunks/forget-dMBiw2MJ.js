import{d as C,r as p,j as B,k as P,c as t,_ as o,u as e,ac as r,l as i,L as S,aa as T}from"./@vue-Ca6oPw20.js";import{a as E,u as q,_ as A,b as N,e as j,c as D,g as x,d as K,i as L}from"../index-9lME9WWa.js";import{_ as V,a as g}from"./Label.vue_vue_type_script_setup_true_lang-BWoSaepq.js";import{a as n}from"./ant-design-vue-CyiF9e54.js";import"./pinia-R2irzhdd.js";import"./@vueuse-BnZciM7y.js";import"./axios-DTyqpfTh.js";import"./@multiavatar-dxrVjIoY.js";import"./crypto-js-l0AFIALE.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-BkWO730n.js";import"./radix-vue-B6u9mWk8.js";import"./@floating-ui-DW8MF69D.js";import"./@radix-icons--IQtXok_.js";import"./@iconify-DzGEP68A.js";import"./lucide-vue-next-BGOoG6k-.js";import"./@ant-design-C6rk-XVk.js";import"./@ctrl-DOFZgDuz.js";import"./vue-router-Dial6ibt.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@babel-BiFW4_mA.js";import"./lodash-es-D9ej4-U1.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";const M={class:"lg:min-h-[934px] inline-flex items-center justify-center"},R={class:"grid gap-4"},z={class:"grid gap-2"},F={class:"flex w-full max-w-sm items-center gap-1.5"},G={class:"grid gap-2"},H={class:"grid gap-2"},J={class:"mt-4 text-center text-sm"},ye=C({__name:"forget",setup(O){const b=E(),{setActiveTab:w}=b;q();const f=p(""),u=p(""),d=p(""),_=p(""),m=p("获取验证码");let s=null;const v=p(30),h=()=>{v.value=30,m.value=`${v.value}秒后重新获取`,s=window.setInterval(()=>{v.value--,v.value>0?m.value=`${v.value}秒后重新获取`:(m.value="获取验证码",clearInterval(s),s=null)},1e3)},k=()=>{if(s!==null)return;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value))return n.warning("请输入有效的电子邮箱"),!1;u.value="",h(),y(!0)},$=()=>{I()&&y(!1)},I=()=>/^\d{6}$/.test(u.value)?d.value.length<8?(n.warning("用户密码不得小于8位字符，请重新输入"),!1):d.value!==_.value?(n.warning("两次输入的密码不一致"),!1):!0:(n.warning("验证码必须是6位纯数字"),!1),y=c=>{const l=window.VITE_API_BASE_URL;L.post(l+"/app/user/forget",{useremail:f.value,emailcode:u.value,password:d.value,isGetCode:c}).then(a=>{if(a.data.data.code===400){n.warning(a.data.data.msg),s!==null&&(clearInterval(s),s=null,m.value="获取验证码");return}if(a.data.data.code===201){n.success(a.data.data.msg),w("login"),f.value="",d.value="",_.value="",u.value="",s!==null&&(clearInterval(s),s=null,m.value="获取验证码");return}}).catch(a=>{console.error("请求错误:",a),n.error("重置密码失败，请稍后重试")})},U=c=>{c.key==="Enter"&&$()};return(c,l)=>(B(),P("div",M,[t(e(K),{class:"mx-auto max-w-sm"},{default:o(()=>[t(e(A),null,{default:o(()=>[t(e(N),{class:"text-2xl"},{default:o(()=>[r("忘记密码")]),_:1}),t(e(j),{class:"text-xs"},{default:o(()=>[r(" 在下面输入您的电子邮件以找回您的密码 ")]),_:1})]),_:1}),t(e(D),null,{default:o(()=>[i("form",{onSubmit:S($,["prevent"]),onKeydown:U},[i("div",R,[i("div",z,[t(e(V),{for:"email"},{default:o(()=>[r("您的邮箱")]),_:1}),t(e(g),{id:"email",modelValue:f.value,"onUpdate:modelValue":l[0]||(l[0]=a=>f.value=a),type:"email",placeholder:"helloai@example.com",required:""},null,8,["modelValue"])]),i("div",F,[t(e(g),{id:"emailcode",modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=a=>u.value=a),type:"text",placeholder:"输入验证码"},null,8,["modelValue"]),t(e(x),{onClick:k,disabled:e(s)!==null,type:"button",class:"w-[150px]"},{default:o(()=>[r(T(m.value),1)]),_:1},8,["disabled"])]),i("div",G,[t(e(V),{for:"password"},{default:o(()=>[r("新密码")]),_:1}),t(e(g),{id:"password",modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=a=>d.value=a),type:"password",placeholder:"****************",required:""},null,8,["modelValue"])]),i("div",H,[t(e(V),{for:"confirmPassword"},{default:o(()=>[r("确认新密码")]),_:1}),t(e(g),{id:"confirmPassword",modelValue:_.value,"onUpdate:modelValue":l[3]||(l[3]=a=>_.value=a),type:"password",placeholder:"****************",required:""},null,8,["modelValue"])]),t(e(x),{type:"submit",class:"w-full"},{default:o(()=>[r("立即找回")]),_:1}),t(e(x),{onClick:l[4]||(l[4]=a=>e(w)("login")),type:"button",variant:"outline",class:"w-full"},{default:o(()=>[r(" 记得密码？去登录 ")]),_:1})])],32),i("div",J,[r(" 没有账号？ "),i("button",{onClick:l[5]||(l[5]=a=>e(w)("reg")),class:"underline"},"开始注册")])]),_:1})]),_:1})]))}});export{ye as default};