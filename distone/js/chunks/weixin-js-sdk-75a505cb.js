var q={},X={get exports(){return q},set exports(d){q=d}};(function(d,L){X.exports=L(d)})(typeof window=="object"&&window,function(d,L){if(!d){console.warn("can't use weixin-js-sdk in server side");return}var c,M,T,h,S,W,R,O,_,N,P,x,y,l,u,p,v,V,A,k,J,C;if(d.jWeixin)return d.jWeixin;return c={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},M=function(){var e,n={};for(e in c)n[c[e]]=e;return n}(),T=d.document,h=T.title,S=navigator.userAgent.toLowerCase(),x=navigator.platform.toLowerCase(),W=!(!x.match("mac")&&!x.match("win")),R=S.indexOf("wxdebugger")!=-1,O=S.indexOf("micromessenger")!=-1,_=S.indexOf("android")!=-1,N=S.indexOf("iphone")!=-1||S.indexOf("ipad")!=-1,P=(x=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/))?x[1]:"",y={initStartTime:B(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},l={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:N?1:_?2:-1,clientVersion:P,url:encodeURIComponent(location.href)},u={},p={_completes:[]},v={state:0,data:{}},m(function(){y.initEndTime=B()}),V=!1,A=[],k={config:function(e){E("config",u=e);var n=u.check!==!1;m(function(){if(n)o(c.config,{verifyJsApiList:b(u.jsApiList),verifyOpenTagList:b(u.openTagList)},(p._complete=function(f){y.preVerifyEndTime=B(),v.state=1,v.data=f},p.success=function(f){l.isPreVerifyOk=0},p.fail=function(f){p._fail?p._fail(f):v.state=-1},(s=p._completes).push(function(){j()}),p.complete=function(f){for(var r=0,w=s.length;r<w;++r)s[r]();p._completes=[]},p)),y.preVerifyStartTime=B();else{v.state=1;for(var i=p._completes,t=0,a=i.length;t<a;++t)i[t]();p._completes=[]}var s}),k.invoke||(k.invoke=function(i,t,a){d.WeixinJSBridge&&WeixinJSBridge.invoke(i,D(t),a)},k.on=function(i,t){d.WeixinJSBridge&&WeixinJSBridge.on(i,t)})},ready:function(e){(v.state!=0||(p._completes.push(e),!O&&u.debug))&&e()},error:function(e){P<"6.0.2"||(v.state==-1?e(v.data):p._fail=e)},checkJsApi:function(e){o("checkJsApi",{jsApiList:b(e.jsApiList)},(e._complete=function(n){_&&(t=n.checkResult)&&(n.checkResult=JSON.parse(t));var i,t=n,a=t.checkResult;for(i in a){var s=M[i];s&&(a[s]=a[i],delete a[i])}},e))},onMenuShareTimeline:function(e){I(c.onMenuShareTimeline,{complete:function(){o("shareTimeline",{title:e.title||h,desc:e.title||h,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){I(c.onMenuShareAppMessage,{complete:function(n){n.scene==="favorite"?o("sendAppMessage",{title:e.title||h,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):o("sendAppMessage",{title:e.title||h,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){I(c.onMenuShareQQ,{complete:function(){o("shareQQ",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){I(c.onMenuShareWeibo,{complete:function(){o("shareWeiboApp",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){I(c.onMenuShareQZone,{complete:function(){o("shareQZone",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){o("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){o("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){o("startRecord",{},e)},stopRecord:function(e){o("stopRecord",{},e)},onVoiceRecordEnd:function(e){I("onVoiceRecordEnd",e)},playVoice:function(e){o("playVoice",{localId:e.localId},e)},pauseVoice:function(e){o("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){o("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){I("onVoicePlayEnd",e)},uploadVoice:function(e){o("uploadVoice",{localId:e.localId,isShowProgressTips:e.isShowProgressTips==0?0:1},e)},downloadVoice:function(e){o("downloadVoice",{serverId:e.serverId,isShowProgressTips:e.isShowProgressTips==0?0:1},e)},translateVoice:function(e){o("translateVoice",{localId:e.localId,isShowProgressTips:e.isShowProgressTips==0?0:1},e)},chooseImage:function(e){o("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(n){if(_){var i=n.localIds;try{i&&(n.localIds=JSON.parse(i))}catch{}}},e))},getLocation:function(e){e=e||{},o(c.getLocation,{type:e.type||"wgs84"},(e._complete=function(n){delete n.type},e))},previewImage:function(e){o(c.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){o("uploadImage",{localId:e.localId,isShowProgressTips:e.isShowProgressTips==0?0:1},e)},downloadImage:function(e){o("downloadImage",{serverId:e.serverId,isShowProgressTips:e.isShowProgressTips==0?0:1},e)},getLocalImgData:function(e){V===!1?(V=!0,o("getLocalImgData",{localId:e.localId},(e._complete=function(n){var i;V=!1,0<A.length&&(i=A.shift(),wx.getLocalImgData(i))},e))):A.push(e)},getNetworkType:function(e){o("getNetworkType",{},(e._complete=function(t){var i=t,t=i.errMsg,a=(i.errMsg="getNetworkType:ok",i.subtype);if(delete i.subtype,a)i.networkType=a;else{var a=t.indexOf(":"),s=t.substring(a+1);switch(s){case"wifi":case"edge":case"wwan":i.networkType=s;break;default:i.errMsg="getNetworkType:fail"}}},e))},openLocation:function(e){o("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},hideOptionMenu:function(e){o("hideOptionMenu",{},e)},showOptionMenu:function(e){o("showOptionMenu",{},e)},closeWindow:function(e){o("closeWindow",{},e=e||{})},hideMenuItems:function(e){o("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){o("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){o("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){o("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){o("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(n){var i;N&&(i=n.resultStr)&&(i=JSON.parse(i),n.resultStr=i&&i.scan_code&&i.scan_code.scan_result)},e))},openAddress:function(e){o(c.openAddress,{},(e._complete=function(n){(n=n).postalCode=n.addressPostalCode,delete n.addressPostalCode,n.provinceName=n.proviceFirstStageName,delete n.proviceFirstStageName,n.cityName=n.addressCitySecondStageName,delete n.addressCitySecondStageName,n.countryName=n.addressCountiesThirdStageName,delete n.addressCountiesThirdStageName,n.detailInfo=n.addressDetailInfo,delete n.addressDetailInfo},e))},openProductSpecificView:function(e){o(c.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],t=0,a=n.length;t<a;++t){var s=n[t],s={card_id:s.cardId,card_ext:s.cardExt};i.push(s)}o(c.addCard,{card_list:i},(e._complete=function(f){if(r=f.card_list){for(var r,w=0,Z=(r=JSON.parse(r)).length;w<Z;++w){var g=r[w];g.cardId=g.card_id,g.cardExt=g.card_ext,g.isSuccess=!!g.is_succ,delete g.card_id,delete g.card_ext,delete g.is_succ}f.cardList=r,delete f.card_list}},e))},chooseCard:function(e){o("chooseCard",{app_id:u.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(n){n.cardList=n.choose_card_info,delete n.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],t=0,a=n.length;t<a;++t){var s=n[t],s={card_id:s.cardId,code:s.code};i.push(s)}o(c.openCard,{card_list:i},e)},consumeAndShareCard:function(e){o(c.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){o(c.chooseWXPay,U(e),e),j({jsApiName:"chooseWXPay"})},openEnterpriseRedPacket:function(e){o(c.openEnterpriseRedPacket,U(e),e)},startSearchBeacons:function(e){o(c.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){o(c.stopSearchBeacons,{},e)},onSearchBeacons:function(e){I(c.onSearchBeacons,e)},openEnterpriseChat:function(e){o("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){o("launchMiniProgram",{targetAppId:e.targetAppId,path:function(n){var i;if(typeof n=="string"&&0<n.length)return i=n.split("?")[0],i+=".html",(n=n.split("?")[1])!==void 0?i+"?"+n:i}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){o("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(n){if(_){var i=n.extraData;if(i)try{n.extraData=JSON.parse(i)}catch{n.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},m(function(){o("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){m(function(){o("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){m(function(){o("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){m(function(){o("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){m(function(){o("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){m(function(){o("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(e){m(function(){e({miniprogram:d.__wxjs_environment==="miniprogram"})})}}},J=1,C={},T.addEventListener("error",function(e){var n,i,t;_||(t=(n=e.target).tagName,i=n.src,t!="IMG"&&t!="VIDEO"&&t!="AUDIO"&&t!="SOURCE")||i.indexOf("wxlocalresource://")!=-1&&(e.preventDefault(),e.stopPropagation(),(t=n["wx-id"])||(t=J++,n["wx-id"]=t),C[t]||(C[t]=!0,wx.ready(function(){wx.getLocalImgData({localId:i,success:function(a){n.src=a.localData}})})))},!0),T.addEventListener("load",function(e){var n;_||(n=(e=e.target).tagName,e.src,n!="IMG"&&n!="VIDEO"&&n!="AUDIO"&&n!="SOURCE")||(n=e["wx-id"])&&(C[n]=!1)},!0),L&&(d.wx=d.jWeixin=k),k;function o(e,n,i){d.WeixinJSBridge?WeixinJSBridge.invoke(e,D(n),function(t){Q(e,t,i)}):E(e,i)}function I(e,n,i){d.WeixinJSBridge?WeixinJSBridge.on(e,function(t){i&&i.trigger&&i.trigger(t),Q(e,t,n)}):E(e,i||n)}function D(e){return(e=e||{}).appId=u.appId,e.verifyAppId=u.appId,e.verifySignType="sha1",e.verifyTimestamp=u.timestamp+"",e.verifyNonceStr=u.nonceStr,e.verifySignature=u.signature,e}function U(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function Q(a,n,i){a!="openEnterpriseChat"&&a!=="openBusinessView"||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg,a=(t||(t=n.err_msg,delete n.err_msg,t=function(s,f){var r=M[s];r&&(s=r),r="ok";{var w;f&&(w=f.indexOf(":"),(r=(r=(r=(r=(r=(r=(r=f.substring(w+1))=="confirm"?"ok":r)=="failed"?"fail":r).indexOf("failed_")!=-1?r.substring(7):r).indexOf("fail_")!=-1?r.substring(5):r).replace(/_/g," ")).toLowerCase())!="access denied"&&r!="no permission to execute"||(r="permission denied"),(r=s=="config"&&r=="function not exist"?"ok":r)=="")&&(r="fail")}return f=s+":"+r}(a,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",u.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n)),t.indexOf(":"));switch(t.substring(a+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function b(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],t=c[t];t&&(e[n]=t)}return e}}function E(e,n){var i;!u.debug||n&&n.isInnerInvoke||((i=M[e])&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||""))}function j(e){var n;W||R||u.debug||P<"6.0.2"||l.systemType<0||(n=new Image,l.appId=u.appId,l.initTime=y.initEndTime-y.initStartTime,l.preVerifyTime=y.preVerifyEndTime-y.preVerifyStartTime,k.getNetworkType({isInnerInvoke:!0,success:function(i){l.networkType=i.networkType,i="https://open.weixin.qq.com/sdk/report?v="+l.version+"&o="+l.isPreVerifyOk+"&s="+l.systemType+"&c="+l.clientVersion+"&a="+l.appId+"&n="+l.networkType+"&i="+l.initTime+"&p="+l.preVerifyTime+"&u="+l.url+"&jsapi_name="+(e?e.jsApiName:""),n.src=i}}))}function B(){return new Date().getTime()}function m(e){O&&(d.WeixinJSBridge?e():T.addEventListener&&T.addEventListener("WeixinJSBridgeReady",e,!1))}});export{q as w};