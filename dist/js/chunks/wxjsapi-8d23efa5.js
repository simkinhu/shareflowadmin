import{i as k,r as v}from"../index-a1ae2b62.js";import{w as s}from"./weixin-js-sdk-75a505cb.js";import{r as p,o as S,aJ as y,a6 as g,bl as l,c as f,G as b,aS as m}from"./@vue-7e44e6dd.js";import{m as w}from"./ant-design-vue-32902922.js";import"./pinia-98ec2995.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-0e41780a.js";import"./dayjs-9df2e3b6.js";import"./@multiavatar-7283d2b3.js";import"./axios-6f43ddff.js";import"./vuetify-0a3604cc.js";/* empty css             */import"./vue3-apexcharts-fb146ff1.js";import"./vue-fdaf27ce.js";import"./apexcharts-a35677a7.js";import"./core-js-40ace11a.js";import"./@babel-8a290753.js";import"./@ant-design-bd925dbd.js";import"./@ctrl-044b369f.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-5efc5547.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-ef06c517.js";import"./dom-align-529d0cdc.js";import"./lodash-es-5af3e9d7.js";import"./async-validator-dee29e8b.js";import"./throttle-debounce-87e7e444.js";const A=b(" 确认返回 "),et={setup(x){const i=p(""),r=p(""),u=p(!1),h=()=>{const e=window.location.hash.substring(1).split("?")[1],o=new URLSearchParams(e);i.value=o.get("code"),r.value=o.get("orderno")},d=async()=>{if(!i.value){alert("微信code未获取到");return}const n=window.VITE_API_BASE_URL;try{const e=await k.post(`${n}/app/call/jsapipay`,{code:i.value,orderno:r.value}),{appId:o,timestamp:a,nonceStr:c,paySign:_,prepay_id:P}=e.data.data;s.config({debug:!1,appId:o,timestamp:a,nonceStr:c,signature:_,jsApiList:["chooseWXPay"]}),s.ready(()=>{s.checkJsApi({jsApiList:["chooseWXPay"],success:t=>{console.log("JS API check success:",t)},fail:t=>{console.log("JS API check failed:",t)}}),s.chooseWXPay({timestamp:a,nonceStr:c,package:"prepay_id="+P,signType:"RSA",paySign:_,success:t=>{console.log("Payment success:",t),w.success("你已完成支付，请点击完成支付"),u.value=!0,v.push("/user/order")},fail:t=>{alert("支付失败"),console.log("Payment failed:",t)}})}),s.error(t=>{alert("微信配置错误"),console.log("WeChat config error:",t)})}catch(e){console.error("API请求错误:",e),alert("支付请求失败")}};return S(()=>{h(),d()}),(n,e)=>{const o=m("a-result"),a=m("a-icon"),c=m("a-button");return u.value?(y(),g(o,{key:1,status:"success",title:"您已完成支付，请返回","sub-title":"您的订单号:"+r.value},{extra:l(()=>[f(c,{type:"primary",onClick:d},{default:l(()=>[f(a,{type:"reload"}),A]),_:1})]),_:1},8,["sub-title"])):(y(),g(o,{key:0,status:"success",title:"正在进行微信支付","sub-title":"您的订单号:"+r.value},{extra:l(()=>[]),_:1},8,["sub-title"]))}}};export{et as default};