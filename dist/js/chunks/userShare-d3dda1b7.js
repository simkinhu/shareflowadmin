import{d as B}from"./pinia-98ec2995.js";import{i as u}from"../index-96439228.js";import{b as L}from"./@multiavatar-7283d2b3.js";import{C as i}from"./crypto-js-3b32aad8.js";import{m as M}from"./ant-design-vue-32902922.js";const T="ekmdIrnqOs0YivHfQXRCPGTcX8Y1uan4";function C(e){return i.MD5(e).toString()}function E(e=32){let t="";for(;t.length<e;)t+=Math.random().toString(36).substring(2);return t.substring(0,e)}function U(e){const t=Date.now(),n=E(),s=`nonce=${n}&timestamp=${t}&useremail=${e}&key=${T}`,c=C(s);return`?useremail=${e}&nonce=${n}&timestamp=${t}&sign=${c}`}function d(e){const t=i.enc.Utf8.parse(T);return i.AES.decrypt(e,t,{mode:i.mode.ECB,padding:i.pad.Pkcs7}).toString(i.enc.Utf8)}const p=L("shareflowadmin"),z=B("userStore",{state:()=>({useremail:null,invcode:null,userToken:null,userID:0,userAvatar:p,createTime:null,updateTime:null,expireTime:null,isPlus:!1,userCount:null,userArray:[],isLogin:JSON.parse(localStorage.getItem("isLogin")||"false"),expired:!1,daysBetween:null,loginModal:!1,registModel:!1,passModel:!1,invcodeModel:!1,userTokenModel:!1,CdkeyModal:!1,fetching:!1,userplusstatus:!1,fetchPromise:null}),actions:{async fetchUserData(e,t,n){return this.fetching?this.fetchPromise:(this.fetching=!0,this.fetchPromise=new Promise(async(s,c)=>{try{const o=window.VITE_API_BASE_URL;let a;if(e&&t){const l=U(e);a=await u.post(`${o}/app/user/login${l}`,{useremail:e,password:t,share:n})}else a=await u.post(`${o}/app/user/info`);const{useremail:S,invcode:y,userToken:m,expireTime:f,isPlus:k,count:w,userarray:I,updateTime:$,createTime:P}=a.data.data;if(a.data.data.code===400&&(this.isLogin=!1,s(!1)),m){const l=new Date,r=new Date(f).getTime()-l.getTime();if(this.userplusstatus=!0,r<=0)this.daysBetween="已过期",this.userplusstatus=!1;else{const h=Math.floor(r/864e5),g=Math.floor(r%(1e3*60*60*24)/(1e3*60*60)),A=Math.floor(r%(1e3*60*60)/(1e3*60));h>0?this.daysBetween=`${h}天`:g>0?this.daysBetween=`${g}小时`:this.daysBetween=`${A}分钟`}this.useremail=S,this.userToken=m,this.invcode=y,this.createTime=P,this.updateTime=$,this.expireTime=f,this.expireTime=this.expireTime.split(" ")[0],this.isPlus=k,this.userCount=w,this.userArray=I,this.isLogin=!0;let x=d(a.data.data.xauthorization.resfreshtoken),v=d(a.data.data.xauthorization.accesstoken);localStorage.setItem("accesstokenname",x),localStorage.setItem("accesstokenvalue",v),localStorage.setItem("isLogin","true"),s(!0)}else localStorage.setItem("isLogin","false"),s(!1)}catch{localStorage.setItem("isLogin","false"),s(!1),M.warning("用户接口请求错误，请检查接口地址是否正确！")}finally{this.fetching=!1,this.fetchPromise=null}}),this.fetchPromise)},logout(){const e=window.VITE_API_BASE_URL;u.post(`${e}/app/user/logout`),this.resetState()},resetState(){this.userToken=null,this.useremail=null,this.invcode=null,this.userAvatar=p,this.createTime=null,this.updateTime=null,this.expireTime=null,this.isPlus=!1,this.userCount=0,this.userArray=[],this.isLogin=!1,this.expired=!1,this.daysBetween=null,localStorage.removeItem("isLogin"),localStorage.removeItem("accesstokenname"),localStorage.removeItem("accesstokenvalue")}}});export{U as g,z as u};
