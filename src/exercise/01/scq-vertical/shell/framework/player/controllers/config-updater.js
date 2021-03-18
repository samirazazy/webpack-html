define(["marionette","player/utils/xml-manipulator","player/utils/data-loader"],function(t,e){var o;return o=Backbone.Marionette.Controller.extend({objXmlManipulator:null,objConfigXml:null,constructor:function(t){t&&(this.objConfigXml="string"==typeof t?$.parseXML(t):t),this.objXmlManipulator=new e(this.objConfigXml)}}),o.prototype.REGION_DATA_CHANGE_EVENT="regionDataChangeEvent",o.prototype.validateNodeAttribute=function(t){var e={};return t&&"string"==typeof t&&t.trim().length?(e.attr=t,e.valid=!0):(e.attr="",e.valid=!1),e},o.prototype.setDefaultLaunchActivity=function(t,e){var o=this.objXmlManipulator.getNodesById(e);this.objXmlManipulator.setNodeAttrVal(o,"defaultLaunchID",t)},o.prototype.createNewActivityNode=function(t,e,o,a,i,l,r,s,n){var d,h;return d='<activity id="',this.validateNodeAttribute(t).valid?(d+=t,d+='" name="',d+=this.validateNodeAttribute(e).attr,d+='" modelPath="',d+=this.validateNodeAttribute(o).attr,d+='" class="',d+=this.validateNodeAttribute(l).valid?l:"sim-pictor",d+='">',this.validateNodeAttribute(r).valid&&(d+='<html source="'+r+'"/>'),this.validateNodeAttribute(n).valid&&(d+='<data source="'+n+'"/>'),this.validateNodeAttribute(s).valid&&(d+='<style source="'+s+'"/>'),h=this.objXmlManipulator.stringToXml(d)):(console.error("Please provide valid id string for activity Node"),void 0)},o.prototype.getConfigString=function(){var t=this.objXmlManipulator.xmlToString(this.objConfigXml);return t},o.prototype.addActivityInRegion=function(t,e,o){var a,i,l,r,s=this.objXmlManipulator.getNodesById(e);if(s.length){if(a=this.objXmlManipulator.getNodeAttrVal(t,"id"),i=this.objXmlManipulator.getNodesById(a),i&&i.length){if(!o)return;this.objXmlManipulator.deleteNode(i)}l=this.objXmlManipulator.getNodesByTag("activities",s),this.objXmlManipulator.appendNodeTo(t,l),r=this.objXmlManipulator.getNodesById(e,this.objConfigXml)[0].outerHTML}},o.prototype.removeActivityFromRegion=function(t){var e,o,a,i,l,r;o=t.regionId,e=t.data,l=this.objXmlManipulator.getNodesById(o),i=this.objXmlManipulator.getNodesByTag("activities",l),this.objXmlManipulator.removeNodeAttr(i,"defaultLaunchID"),l.length&&(a=this.objXmlManipulator.getNodesById(e,l),this.objXmlManipulator.deleteNode(a),r=this.objXmlManipulator.getNodesById(o,this.objConfigXml)[0].outerHTML,this.trigger(this.REGION_DATA_CHANGE_EVENT,r))},o.prototype.setAspectRatio=function(t,e){var o,a,i;o=this.objXmlManipulator.getNodesByTag("size"),a=this.objXmlManipulator.getNodesByTag("width",o),i=this.objXmlManipulator.getNodesByTag("height",o),this.objXmlManipulator.setNodeText(a,t),this.objXmlManipulator.setNodeText(i,e)},o.prototype.getAspectRatio=function(){var t,e,o;return t=this.objXmlManipulator.getNodesByTag("size"),e=this.objXmlManipulator.getNodesByTag("width",t),o=this.objXmlManipulator.getNodesByTag("height",t),{width:this.objXmlManipulator.getNodeText(e),height:this.objXmlManipulator.getNodeText(o)}},o.prototype.setScale=function(t,e,o){var a,i;a=this.objXmlManipulator.getNodesByTag("size"),i=this.objXmlManipulator.getNodesByTag("scale",a),this.objXmlManipulator.setNodeAttrVal(i,"isScalable",t),this.objXmlManipulator.setNodeAttrVal(i,"maxScale",e),this.objXmlManipulator.setNodeAttrVal(i,"minScale",o)},o.prototype.getScale=function(){var t,e;return t=this.objXmlManipulator.getNodesByTag("size"),e=this.objXmlManipulator.getNodesByTag("scale",t),{bScale:this.objXmlManipulator.getNodeAttrVal(e,"isScalable"),maxScale:this.objXmlManipulator.getNodeAttrVal(e,"maxScale"),minScale:this.objXmlManipulator.getNodeAttrVal(e,"minScale")}},o.prototype.setLanguageSupport=function(t,e,o){var a,i,l,r;a=this.objXmlManipulator.getNodesByTag("language"),i=this.objXmlManipulator.getNodesByTag("support",a),l=this.objXmlManipulator.getNodesByTag("rootPath",a),r=this.objXmlManipulator.getNodesByTag("default",a),this.objXmlManipulator.setNodeText(i,t),this.objXmlManipulator.setNodeText(l,e),this.objXmlManipulator.setNodeText(r,o)},o.prototype.getLanguages=function(){var t,e,o,a;return t=this.objXmlManipulator.getNodesByTag("language"),o=this.objXmlManipulator.getNodesByTag("rootPath",t),a=this.objXmlManipulator.getNodesByTag("default",t),e=this.objXmlManipulator.getNodesByTag("support",t),{bLanguage:this.objXmlManipulator.getNodeText(e),rootpath:this.objXmlManipulator.getNodeText(o),languages:[this.objXmlManipulator.getNodeText(a)]}},o.prototype.getThemes=function(){var t,e,o,a,i,l,r,s=this;return t=this.objXmlManipulator.getNodesByTag("themes").get(0),r=this.objXmlManipulator.getNodeAttrVal(t,"defaultTheme"),e=this.objXmlManipulator.getNodesByTag("theme",t),a=[],$.each(e,function(t,e){l=s.objXmlManipulator.getNodeAttrVal(e,"id"),o=s.objXmlManipulator.getNodesByTag("path",e),r===l&&(i=s.objXmlManipulator.getNodeText(o)),a.push(s.objXmlManipulator.getNodeText(o))}),{defaultId:r,defaultPath:i,arrPaths:a}},o.prototype.addTheme=function(t,e,o,a,i,l){var r,s;r=this.objXmlManipulator.getNodesByTag("themes"),s=this.objXmlManipulator.getNodesById(t),void 0!==s&&i&&0!==s.length&&this.objXmlManipulator.deleteNode(s),s=this.objXmlManipulator.getNodesById(t),void 0==s&&(s='<theme id="'+t+'" prefix="'+e+'">',s+="<label>"+this.validateNodeAttribute(l).attr+"</label>",s+="<path>"+this.validateNodeAttribute(o).attr+"</path></theme>",this.objXmlManipulator.appendNodeTo(s,r)),a&&this.objXmlManipulator.setNodeAttrVal(r,"defaultTheme",t)},o.prototype.modify=function(t){var e=this;switch(t.action){case"addActivityInRegion":$.each(t.data,function(o,a){e.addActivityInRegion(a,t.regionId)}),this.trigger(this.REGION_DATA_CHANGE_EVENT,this.objXmlManipulator.getNodesById(t.regionId,this.objConfigXml)[0].outerHTML);break;case"removeActivityNode":this.removeActivityFromRegion(t);break;case"renameScreen":this.renameTemplate(t);break;case"updateActivitiesInRegion":this.reorderActivitiesInRegion(t);break;case"changeProjectSettings":this.changeProjectSettings(t)}},o.prototype.changeProjectSettings=function(t){var e,o,a;a=t.data,e=a.theme.path+"theme"+a.theme.id+"/theme"+a.theme.id+".css",this.addTheme(a.theme.id,a.theme.prefix,e,a.theme.isDefault,a.theme.bReplace,a.theme.label),this.setAspectRatio(a.size.width,a.size.height),this.setScale(a.scale.support,a.scale.max,a.scale.min),this.setLanguageSupport(a.language.support,a.language.rootPath,a.language.defaultlang),o=this.objXmlManipulator.getNodesById(t.regionId,this.objConfigXml)[0].outerHTML,this.trigger(this.REGION_DATA_CHANGE_EVENT,o)},o.prototype.reorderActivitiesInRegion=function(t){var e,o,a,i,l,r,s=this;e=this.objXmlManipulator.getNodesById(t.regionId),a=this.objXmlManipulator.getNodesByTag("activities",e),o=this.objXmlManipulator.cloneNode(a),i=this.objXmlManipulator.getNodesByTag("activity",o),this.objXmlManipulator.deleteNode(i),$.each(t.data,function(t,a){l=s.objXmlManipulator.getNodesById(a.id,e),s.objXmlManipulator.appendNodeTo(l,o),0===t&&s.objXmlManipulator.setNodeAttrVal(o,"defaultLaunchID",a.id)}),this.objXmlManipulator.deleteNode(a),this.objXmlManipulator.appendNodeTo(o,e),r=this.objXmlManipulator.getNodesById(t.regionId,this.objConfigXml)[0].outerHTML,this.trigger(this.REGION_DATA_CHANGE_EVENT,r)},o.prototype.renameTemplate=function(t){var e,o,a;e=this.objXmlManipulator.getNodesById(t.regionId),o=this.objXmlManipulator.getNodesById(t.data.screenId,e),this.objXmlManipulator.setNodeAttrVal(o,"name",t.data.newName),a=this.objXmlManipulator.getNodesById(t.regionId,this.objConfigXml)[0].outerHTML,this.trigger(this.REGION_DATA_CHANGE_EVENT,a)},o.prototype.destroy=function(){var t=!0;return t},o});