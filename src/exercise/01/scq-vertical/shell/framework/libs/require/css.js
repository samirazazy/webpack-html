!function(){var e=document,t=e.getElementsByTagName("head")[0],r=30,n={version:"0.1.0",maxAttempts:10,_jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},_getIEVersion:function(){var e=-1;if("Microsoft Internet Explorer"===navigator.appName){var t=navigator.userAgent,r=new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");null!==r.exec(t)&&(e=parseFloat(RegExp.$1))}return e},_checkIeLimitWorkaround:function(t,n){{var o=!1;this._getIEVersion()}try{if(e.createStyleSheet&&e.styleSheets&&e.styleSheets.length>r){var i=e.styleSheets[e.styleSheets.length-1];i.addImport(t,e.styleSheets.length-1),o=!0,n()}}catch(a){this._onerror(n,a),o=!1}return o},_getUniqueId:function(){return"cssPreloader_"+Math.round(9999999999*Math.random())},_createLink:function(t){var r=e.createElement("link");return r.rel="stylesheet",r.type="text/css",r.id=this._getUniqueId(),r.href=t,r},_isEventSupported:function(e,t){var r=document.createElement(e);t="on"+t;var n=t in r;return n||(r.setAttribute(t,"return;"),n="function"==typeof r[t],r=null),n},_loadNative:function(e,r){var n=this._createLink(e);n.onload=function(){r()};var o=this;n.onerror=function(){o._onerror(r)},t.appendChild(n),n.load()},_onerror:function(e,t){if("[object Function]"===Object.prototype.toString.call(e.error)){var r={message:"Failed to load stylesheet",innerException:t};e.error(r)}},_loadWhenNotSupported:function(e,r){var n=function(e,t,r){try{if(!(r<this.maxAttempts))return this._onerror(t),void 0;for(var o=document.styleSheets,i=0;i<o.length;i++){var a=o[i],s=a.ownerNode?a.ownerNode:a.owningElement;if(s&&s.id===e.id){var c=!0,l=null;try{a.cssRules?l=a.cssRules:a.rules?l=a.rules:c=!1}catch(u){c=!1}if(c)return l&&l.length&&l.length>0?(t(),void 0):(this._onerror(t),void 0);t()}}var h=this;setTimeout(function(){n.call(h,e,t,++r)},100)}catch(u){return this._onerror(t,u),void 0}},o=this._createLink(e);t.appendChild(o);var i=this,a=0;setTimeout(function(){n.call(i,o,r,a)},100)},loadStylesheet:function(e,t){var r=this._checkIeLimitWorkaround(e,t);r||(this._isEventSupported("link","load")?this._loadNative(e,t):this._loadWhenNotSupported(e,t))},load:function(e,t,r){try{var n=t.toUrl(-1===e.search(/\.(css)$/i)?e+".css":e);this.loadStylesheet(n,r)}catch(o){r()}}};"function"==typeof define?define(["module"],function(){return n}):window.css=n}();