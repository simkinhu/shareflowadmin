import{d as y}from"./pinia-98ec2995.js";import{a as l}from"./axios-6f43ddff.js";import{b as m}from"./@multiavatar-7283d2b3.js";import{C as P}from"./crypto-js-3b32aad8.js";import{m as A}from"./ant-design-vue-84efdadc.js";const x="ekmdIrnqOs0YivHfQXRCPGTcX8Y1uan4";function C(e){return P.MD5(e).toString()}function I(e=32){let t="";for(;t.length<e;)t+=Math.random().toString(36).substring(2);return t.substring(0,e)}function L(e){const t=Date.now(),s=I(),n=`nonce=${s}&timestamp=${t}&usertoken=${e}&key=${x}`,i=C(n);return`?usertoken=${e}&nonce=${s}&timestamp=${t}&sign=${i}`}const c=m("3388ai"),U=y("userStore",{state:()=>({userToken:null,userAvatar:c,createTime:null,updateTime:null,expireTime:null,isPlus:!1,userCount:null,userArray:[],isLogin:JSON.parse(localStorage.getItem("isLogin")||"false"),expired:!1,daysBetween:0,loginModal:!1,CdkeyModal:!1,fetching:!1,fetchPromise:null}),actions:{async fetchUserData(e){const t=L(e);return this.fetching?this.fetchPromise:(this.fetching=!0,this.fetchPromise=new Promise(async(s,n)=>{try{const i=window.VITE_API_BASE_URL,a=await l.post(`${i}/app/user/userlogin`+t,{usertoken:e},{withCredentials:!0});console.log(a);const{userToken:r,expireTime:o,isPlus:h,count:f,userarray:g,updateTime:p,createTime:d}=a.data.data;if(r){const T=new Date,w=new Date(o).getTime()-T.getTime(),u=Math.floor(w/(1e3*60*60*24)),S=u<=0;this.userToken=r,this.createTime=d,this.updateTime=p,this.expireTime=o,this.isPlus=h,this.userCount=f,this.userArray=g,this.isLogin=!0,this.userAvatar=m(r),this.daysBetween=u,this.expired=S,localStorage.setItem("isLogin","true"),s(!0)}else localStorage.setItem("isLogin","false"),s(!1)}catch{localStorage.setItem("isLogin","false"),s(!1),A.warning("用户接口请求错误，请检查接口地址是否正确！")}finally{this.fetching=!1,this.fetchPromise=null}}),this.fetchPromise)},logout(){const e=window.VITE_API_BASE_URL;l.post(`${e}/app/user/logout`,{},{withCredentials:!0}),this.userToken=null,this.userAvatar=c,this.createTime=null,this.updateTime=null,this.expireTime=null,this.isPlus=!1,this.userCount=0,this.userArray=[],this.isLogin=!1,this.expired=!1,this.daysBetween=0,localStorage.removeItem("isLogin")}}});export{U as u};