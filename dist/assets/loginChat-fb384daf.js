import{u as p}from"./usershare-32ed4ae5.js";import{d as c,W as m,X as d,Y as g,c as r,bn as f,$ as k,a4 as n}from"./@vue-c9a03ce3.js";import{m as o}from"./ant-design-vue-a7ef973d.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const h=c({setup(){return{userStore:p()}},data(){return{userTokenInput:""}},methods:{async userlogin(){const e=this.userTokenInput||null;if(!e)return o.warning("请输入您的UserToken"),!1;try{await this.userStore.fetchUserData(e)?(this.userStore.loginModal=!1,o.success("登录成功"),this.userTokenInput=null,this.calculateDaysBetween()):o.error("登录失败，请检查您的UserToken")}catch(s){console.error("登录错误:",s),o.error("登录过程中出现错误")}},calculateDaysBetween(){const e=new Date,u=new Date(this.userStore.expireTime).getTime()-e.getTime();this.userStore.daysBetween=Math.floor(u/(1e3*60*60*24)),this.userStore.expired=this.userStore.daysBetween<=0}}});function w(e,s,u,y,B,C){const a=n("a-alert"),l=n("a-input-password"),i=n("a-modal");return m(),d(i,{style:{top:"40%"},"z-index":"1009",footer:null,open:e.userStore.loginModal,"onUpdate:open":s[2]||(s[2]=t=>e.userStore.loginModal=t),width:"350px",title:"UserToken登录"},{default:g(()=>[r(a,{class:"mt-3",message:"登录自动注册UserToken，有Token直接登录",type:"warning"}),r(a,{class:"mt-3",message:"UserToken：属唯一标识，丢失无法找回",type:"error"}),r(l,{class:"mt-5",value:e.userTokenInput,"onUpdate:value":s[0]||(s[0]=t=>e.userTokenInput=t),placeholder:"请输入您的UserToken",onKeyup:f(e.userlogin,["enter"])},null,8,["value","onKeyup"]),k("button",{class:"mt-5 loginbutton",onClick:s[1]||(s[1]=(...t)=>e.userlogin&&e.userlogin(...t))},"立即登录")]),_:1},8,["open"])}const D=T(h,[["render",w]]);export{D as l};
