import{d as A}from"./pinia-98ec2995.js";import{i as u}from"../index-dd91c33b.js";import{b as h}from"./@multiavatar-7283d2b3.js";import{C as a}from"./crypto-js-3b32aad8.js";import{m as L}from"./ant-design-vue-84efdadc.js";const f="ekmdIrnqOs0YivHfQXRCPGTcX8Y1uan4";function $(e){return a.MD5(e).toString()}function v(e=32){let t="";for(;t.length<e;)t+=Math.random().toString(36).substring(2);return t.substring(0,e)}function B(e){const t=Date.now(),s=v(),n=`nonce=${s}&timestamp=${t}&usertoken=${e}&key=${f}`,r=$(n);return`?usertoken=${e}&nonce=${s}&timestamp=${t}&sign=${r}`}function m(e){const t=a.enc.Utf8.parse(f);return a.AES.decrypt(e,t,{mode:a.mode.ECB,padding:a.pad.Pkcs7}).toString(a.enc.Utf8)}const g=h("3388ai"),R=A("userStore",{state:()=>({userToken:null,userAvatar:g,createTime:null,updateTime:null,expireTime:null,isPlus:!1,userCount:null,userArray:[],isLogin:JSON.parse(localStorage.getItem("isLogin")||"false"),expired:!1,daysBetween:0,loginModal:!1,CdkeyModal:!1,fetching:!1,fetchPromise:null}),actions:{async fetchUserData(e){const t=B(e);return this.fetching?this.fetchPromise:(this.fetching=!0,this.fetchPromise=new Promise(async(s,n)=>{try{const r=window.VITE_API_BASE_URL,i=await u.post(`${r}/app/user/userlogin`+t,{usertoken:e}),{userToken:o,expireTime:c,isPlus:d,count:p,userarray:T,updateTime:S,createTime:k}=i.data.data;if(o){const y=new Date,w=new Date(c).getTime()-y.getTime(),l=Math.floor(w/(1e3*60*60*24)),I=l<=0;this.userToken=o,this.createTime=k,this.updateTime=S,this.expireTime=c,this.isPlus=d,this.userCount=p,this.userArray=T,this.isLogin=!0,this.userAvatar=h(o),this.daysBetween=l,this.expired=I;let P=m(i.data.data.xauthorization.resfreshtoken),x=m(i.data.data.xauthorization.accesstoken);localStorage.setItem("accesstokenname",P),localStorage.setItem("accesstokenvalue",x),localStorage.setItem("isLogin","true"),s(!0)}else localStorage.setItem("isLogin","false"),s(!1)}catch{localStorage.setItem("isLogin","false"),s(!1),L.warning("用户接口请求错误，请检查接口地址是否正确！")}finally{this.fetching=!1,this.fetchPromise=null}}),this.fetchPromise)},logout(){const e=window.VITE_API_BASE_URL;u.post(`${e}/app/user/logout`),this.userToken=null,this.userAvatar=g,this.createTime=null,this.updateTime=null,this.expireTime=null,this.isPlus=!1,this.userCount=0,this.userArray=[],this.isLogin=!1,this.expired=!1,this.daysBetween=0,localStorage.removeItem("isLogin"),localStorage.removeItem("accesstokenname"),localStorage.removeItem("accesstokenvalue")}}});export{R as u};