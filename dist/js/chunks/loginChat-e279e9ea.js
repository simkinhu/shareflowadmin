import{u as p}from"./usershare-65317741.js";import{d as c,aS as r,aJ as m,a6 as d,bl as g,c as n,bn as f,a9 as k}from"./@vue-7e44e6dd.js";import{m as o}from"./ant-design-vue-84efdadc.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const h=c({setup(){return{userStore:p()}},data(){return{userTokenInput:""}},methods:{async userlogin(){const e=this.userTokenInput||null;if(!e)return o.warning("请输入您的UserToken"),!1;try{await this.userStore.fetchUserData(e)?(this.userStore.loginModal=!1,o.success("登录成功"),this.userTokenInput=null,this.calculateDaysBetween()):o.error("登录失败，请检查您的UserToken")}catch(s){console.error("登录错误:",s),o.error("登录过程中出现错误")}},calculateDaysBetween(){const e=new Date,u=new Date(this.userStore.expireTime).getTime()-e.getTime();this.userStore.daysBetween=Math.floor(u/(1e3*60*60*24)),this.userStore.expired=this.userStore.daysBetween<=0}}});function w(e,s,u,y,B,C){const a=r("a-alert"),l=r("a-input-password"),i=r("a-modal");return m(),d(i,{style:{top:"40%"},"z-index":"1009",footer:null,open:e.userStore.loginModal,"onUpdate:open":s[2]||(s[2]=t=>e.userStore.loginModal=t),width:"350px",title:"UserToken登录"},{default:g(()=>[n(a,{class:"mt-3",message:"登录自动注册UserToken，有Token直接登录",type:"warning"}),n(a,{class:"mt-3",message:"UserToken：属唯一标识，丢失无法找回",type:"error"}),n(l,{class:"mt-5",value:e.userTokenInput,"onUpdate:value":s[0]||(s[0]=t=>e.userTokenInput=t),placeholder:"请输入您的UserToken",onKeyup:f(e.userlogin,["enter"])},null,8,["value","onKeyup"]),k("button",{class:"mt-5 loginbutton",onClick:s[1]||(s[1]=(...t)=>e.userlogin&&e.userlogin(...t))},"立即登录")]),_:1},8,["open"])}const D=T(h,[["render",w]]);export{D as l};