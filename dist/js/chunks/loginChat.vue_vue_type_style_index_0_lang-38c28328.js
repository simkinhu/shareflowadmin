import{u as a}from"./userShare-3443f802.js";import{d as i}from"./@vue-7e44e6dd.js";import{m as e}from"./ant-design-vue-32902922.js";const c=i({setup(){return{userStore:a()}},data(){return{useremail:"",password:""}},methods:{async userlogin(){const s=this.useremail||null,r=this.password||null;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))return e.warning("请输入有效的电子邮箱"),!1;if(this.password.length<8){e.warning("用户密码必须大于8位字符，请重新输入");return}if(!r)return e.warning("请输入您的账户密码"),!1;try{await this.userStore.fetchUserData(s,r)?(this.userStore.loginModal=!1,e.success("登录成功"),this.useremail=null,this.password=null,this.calculateDaysBetween()):e.error("登录失败，请检查您的账户和密码")}catch(o){console.error("登录错误:",o),e.error("登录过程中出现错误")}},registModel(){this.userStore.registModel=!0,this.userStore.loginModal=!1},passModel(){this.userStore.passModel=!0,this.userStore.loginModal=!1},usertoeknModel(){this.userStore.loginModal=!1,this.userStore.userTokenModel=!0},calculateDaysBetween(){const s=new Date,t=new Date(this.userStore.expireTime).getTime()-s.getTime();this.userStore.daysBetween=Math.floor(t/(1e3*60*60*24)),this.userStore.expired=this.userStore.daysBetween<=0}}});export{c as _};