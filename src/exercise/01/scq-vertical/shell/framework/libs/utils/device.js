(function(){var e,i,n,o,d,t,c,r,a;window.device={},i=window.document.documentElement,a=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return n("iphone")},device.ipod=function(){return n("ipod")},device.ipad=function(){return n("ipad")},device.android=function(){return n("android")},device.androidPhone=function(){return device.android()&&n("mobile")},device.androidTablet=function(){return device.android()&&!n("mobile")},device.blackberry=function(){return n("blackberry")||n("bb10")||n("rim")},device.blackberryPhone=function(){return device.blackberry()&&!n("tablet")},device.blackberryTablet=function(){return device.blackberry()&&n("tablet")},device.windows=function(){return n("windows")},device.windowsPhone=function(){return device.windows()&&n("phone")},device.windowsTablet=function(){return device.windows()&&n("touch")},device.fxos=function(){return n("(mobile; rv:")||n("(tablet; rv:")},device.fxosPhone=function(){return device.fxos()&&n("mobile")},device.fxosTablet=function(){return device.fxos()&&n("tablet")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},device.ie9=function(){return n("msie")&&n("9.0")},device.getUserAgent=function(){return a},n=function(e){return-1!==a.indexOf(e)},d=function(e){var n;return n=new RegExp(e,"i"),i.className.match(n)},e=function(e){return d(e)?void 0:i.className+=" "+e},c=function(e){return d(e)?i.className=i.className.replace(e,""):void 0},device.ios()?device.ipad()?e("ios ipad tablet"):device.iphone()?e("ios iphone mobile"):device.ipod()&&e("ios ipod mobile"):device.android()?device.androidTablet()?e("android tablet"):e("android mobile"):device.blackberry()?device.blackberryTablet()?e("blackberry tablet"):e("blackberry mobile"):device.windows()?device.windowsTablet()?e("windows tablet"):device.windowsPhone()?e("windows mobile"):e("desktop"):device.fxos()?device.fxosTablet()?e("fxos tablet"):e("fxos mobile"):e("desktop"),o=function(){return device.landscape()?(c("portrait"),e("landscape")):(c("landscape"),e("portrait"))},r="onorientationchange"in window,t=r?"orientationchange":"resize",window.addEventListener?window.addEventListener(t,o,!1):window.attachEvent?window.attachEvent(t,o):window[t]=o,o()}).call(this);