import{d as n}from"./pinia-B0xTW-XS.js";import{i as a}from"../index-CS5YVAQi.js";import{a as l}from"./ant-design-vue-CyiF9e54.js";let i=null;const g=n({id:"customizer",state:()=>({noticeisenable:!0,notices:"",settings:{},settingsByType:{},settingsLoaded:!1,loading:!1,loadError:null}),actions:{async loadSettingsFromAPI(){if(!this.settingsLoaded)return i||(i=this.fetchSettingsFromAPI()),i},async fetchSettingsFromAPI(){this.loading=!0,this.loadError=null;try{const t=window.VITE_API_BASE_URL,s=await a.post(`${t}/app/share/theme`);if(s.data.code===200){const{shareset:o}=s.data.data,r=o.find(e=>e.config_key==="siteTitle");document.title=r?r.config_value:"Title is Null",o.forEach(e=>{e.config_key==="isannoun"?this.noticeisenable=e.config_value==="1":e.config_key==="isannoun_content"&&(this.notices=e.config_value),this.settingsByType[e.config_type]||(this.settingsByType[e.config_type]=[]),this.settingsByType[e.config_type].push(e),this.settings[e.config_key]=this.parseConfigValue(e.config_value)}),this.settingsLoaded=!0}else this.loadError=`Error fetching data: ${s.data.message}`,console.error(this.loadError)}catch(t){this.loadError="配置接口请求错误，请检查接口地址是否正确！",l.warning(this.loadError),console.error(this.loadError,t)}finally{this.loading=!1,i=null}},parseConfigValue(t){return t==="1"||t==="0"?t==="1":t},getSetting(t){return this.settings[t]},getSettingsByType(t){return this.settingsByType[t]||[]}}});export{g as u};
