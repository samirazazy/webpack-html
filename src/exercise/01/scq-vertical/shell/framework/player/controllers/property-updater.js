define(["marionette","player/constants/errorconst","player/events/eventsconst","player/constants/default-comp-data","player/constants/default-comp-style","player/utils/json-manipulator","player/utils/metadata-updater"],function(t,e,a,s,o,i,r){var n;return n=Backbone.Marionette.Controller.extend({objJsonUtil:void 0,objMetadataUpdater:void 0,arrStyleClasses:null,objDefaultCompData:{},objDefaultStyleClass:{},objStyleSheet:null,objJSONData:null,arrAssetsToSave:[],arrMediaSource:[],arrMediaSourceList:["src","path","source"],memoryObjRef:void 0,canUpdateLayout:!0,worker:void 0,constructor:function(t){this.objJsonUtil=new i,this.objMetadataUpdater=new r,this.arrMediaSource=[],this.arrAssetsToSave=[],this.objJSONData={},this.arrStyleClasses=[],this.memoryObjRef=void 0,this.objDefaultCompData=new s,this.objDefaultStyleClass=new o,t&&(this.objJSONData=$.parseJSON(t.jsonData),this.objDefaultCompData=new s,this.objDefaultStyleClass=new o,this.initializeWorkerObject())}}),n.COMP_PROPERTY_UPDATED="compPropertyUpdated",n.CSS_PROPERTY="cssProperty",n.JSON_PROPERTY="jsonProperty",n.CREATE_NEW_COMPONENT="createNewComponent",n.INVALID_COMPONENT_CREATION="invalidComponentCreation",n.REMOVE_SELECTED_COMPONENT="removeSelectedComponent",n.DOM_LAYOUT_UPDATE_EVENT="domLayoutUpdateEvent",n.DOM_CHANGE_VIEW_EVENT="domChangeViewEvent",n.DESELECT_COMPONENT="deselectComponent",n.SELECT_COMPONENT="selectComponent",n.DATA_COPIED_IN_MEMORY="dataCopiedInMemory",n.prototype.start=function(t){this.objJSONData=$.parseJSON(t.jsonData),this.initializeWorkerObject()},n.prototype.updateMetadata=function(t){this.objMetadataUpdater.initMetaDataUpdater(t)},n.prototype.getMetadataXml=function(){return this.objMetadataUpdater.getXMLdata()},n.prototype.initializeWorkerObject=function(){this.worker=new Worker("framework/player/web-workers/property-updator-worker.js"),this.worker.addEventListener("message",this.handleWorkerEvent.bind(this),!1)},n.prototype.handleWorkerEvent=function(t){var e,a;switch(e=t.data.action,a=t.data.data,e){case"createNewComponent":this.eventDispatcher(n.CREATE_NEW_COMPONENT,a)}},n.prototype.addDataToWorker=function(t){this.worker.postMessage(this.getWorkerData("addDataInQue",t))},n.prototype.getWorkerData=function(t,e){var a={};return a.action=t,a.data=e,a},n.prototype.onComponentCreationCompleteInEditMode=function(){this.worker.postMessage(this.getWorkerData("removeDataFromQue",null)),this.worker.postMessage(this.getWorkerData("getNextDataFromQue",null))},n.prototype.updateComponentData=function(t,s,o){var i,r,l;switch(r=s.data.task,l=s.data.updatedValue,i=r.split("_"),i[0]){case a.EDIT_ACTION_UPDATE:this.updatedExistingComponent(i,t,s);break;case a.EDIT_ACTION_DELETE:this.removeSelectedComponent(t);break;case a.EDIT_ACTION_ADD:this.getNewComponentData(i[2],t.id,o);break;case a.EDIT_DOM_LAYOUT:if(this.canUpdateLayout!==!0)return this.eventDispatcher(n.INVALID_COMPONENT_CREATION,{message:e.IN_PROCESS_PLEASE_WAIT}),this.canUpdateLayout=!0,void 0;this.updateDomLayout(i,t,o);break;case a.EDIT_ACTION_CHANGE:this.eventDispatcher(n.DOM_CHANGE_VIEW_EVENT,s)}},n.prototype.updateJsonNodePosition=function(t){var e=t.data.compData;void 0===e||e.task!==a.EDIT_DOM_LAYOUT_MOVE_UP&&e.task!==a.EDIT_DOM_LAYOUT_MOVE_DOWN||this.objJsonUtil.moveElementPosition(e.parent,e.newIndex,e.index),this.canUpdateLayout=!0},n.prototype.getMetaDataById=function(t){return this.objMetadataUpdater.getJsonDataById(t)},n.prototype.getComponentJSONDataById=function(t){return this.objJsonUtil.getComponentJSONDataById(t,this.objJSONData).node},n.prototype.updateDomLayout=function(t,e,s){var o,i,r,l=e.id,d={};switch(i=this.objJsonUtil.getComponentJSONDataById(l,this.objJSONData),i.task=t[2],t[2]){case a.EDIT_DOM_LAYOUT_MOVE_UP:i.index>0&&(this.canUpdateLayout=!1,i.newIndex=i.index-1,this.eventDispatcher(n.DOM_LAYOUT_UPDATE_EVENT,i));break;case a.EDIT_DOM_LAYOUT_MOVE_DOWN:i.index<i.parent.length-1&&(this.canUpdateLayout=!1,i.newIndex=i.index+1,this.eventDispatcher(n.DOM_LAYOUT_UPDATE_EVENT,i));break;case a.EDIT_DOM_LAYOUT_CUT:this.eventDispatcher(n.DOM_LAYOUT_UPDATE_EVENT,i),this.memoryObjRef={},this.memoryObjRef.type=a.EDIT_DOM_LAYOUT_CUT,this.memoryObjRef.node=i.node;break;case a.EDIT_DOM_LAYOUT_COPY:for(this.eventDispatcher(n.DOM_LAYOUT_UPDATE_EVENT,i),this.memoryObjRef={},this.memoryObjRef.type=a.EDIT_DOM_LAYOUT_COPY,this.memoryObjRef.node=this.objJsonUtil.getCloneObject(i.node),r=this.objJsonUtil.cleanJSONData(this.memoryObjRef.node),this.memoryObjRef.filteredData=r,o=0;o<r.styleList.length;o+=1)r.styleList[o]=this.getStyleClass(r.styleList[o]).cssText,r.styleList[o]=r.styleList[o].substr(r.styleList[o].indexOf("{")+1,r.styleList[o].length),r.styleList[o]=r.styleList[o].substr(0,r.styleList[o].lastIndexOf("}"));this.eventDispatcher(n.DATA_COPIED_IN_MEMORY,this.memoryObjRef);break;case a.EDIT_DOM_LAYOUT_PASTE:this.canUpdateLayout=!1,void 0!==this.memoryObjRef&&(this.memoryObjRef.type===a.EDIT_DOM_LAYOUT_CUT?(d.compJSON=$.parseJSON(JSON.stringify(this.memoryObjRef.node)),d.parentId=s.strCompId,this.addDataToWorker(d),this.memoryObjRef=void 0,this.canUpdateLayout=!0):this.prepareCopiedJsonData(this.memoryObjRef,s,e.id))}},n.prototype.setMemoryData=function(t){this.memoryObjRef=t},n.prototype.prepareCopiedJsonData=function(t,e,a){var s;s=this.objDefaultCompData.prepareExistingData(t),this.createAndAddNewComponent(s.compJSON,this.memoryObjRef.filteredData.styleList,e,a,s),this.canUpdateLayout=!0},n.prototype.createAndAddNewComponent=function(t,a,s,o,i){var r,l,d={};if(r=s.getID(),void 0!==s.isValid&&s.isValid(t.type)===!0){if(this.appendComponentJSONData(t,r),d.compJSON=$.parseJSON(JSON.stringify(t)),d.parentId=r,a instanceof Array)for(l=0;l<a.length;l+=1)this.updateStyleSheet(a[l],i.arrayComp[l].id);else this.updateStyleSheet(a,o);this.addDataToWorker(d)}else this.eventDispatcher(n.INVALID_COMPONENT_CREATION,{message:e.COMPONENT_NOT_ALLOWED_AS_CHILD_COMPONENT}),this.canUpdateLayout=!0},n.prototype.updatedExistingComponent=function(t,e,s){var o,i,r=void 0,l=this;switch(t[1]){case a.EDIT_CSS_DATA:s.data.selectorText&&(i=this.getStyleClass(s.data.selectorText," : ",t[2]),i?"cssText"===t[2]?this.updateStyleClass(i.selectorText,s.data.updatedValue):i.style[t[2]]=s.data.updatedValue:this.addStyleClass("."+s.data.selectorText,s.data.updatedValue));break;case a.EDIT_HTML_DATA:o=this.objJsonUtil.getComponentJSONDataById(e.id,this.objJSONData),r=this.objJsonUtil.getJSONDataNode(t,o.node),void 0===r[t[t.length-2].toLowerCase()]&&(r[t[t.length-2].toLowerCase()]={}),r=r[t[t.length-2].toLowerCase()],r&&(r[t[t.length-1].toLowerCase()]=s.data.updatedValue,r=this.objJsonUtil.getJSONDataNode(t,e),void 0===r[t[t.length-2].toLowerCase()]&&(r[t[t.length-2].toLowerCase()]={}),r=r[t[t.length-2].toLowerCase()],r[t[t.length-1].toLowerCase()]=s.data.updatedValue,this.eventDispatcher(n.COMP_PROPERTY_UPDATED,{compId:e.id,data:e.html,actionKeys:t,type:"html"}));break;case a.EDIT_JSON_DATA:o=this.objJsonUtil.getComponentJSONDataById(e.id,this.objJSONData),r=this.objJsonUtil.getJSONDataNode(t,o.node),r[t[t.length-1]]=s.data.updatedValue,r=this.objJsonUtil.getJSONDataNode(t,e),r[t[t.length-1]]=s.data.updatedValue,-1!==this.arrMediaSourceList.indexOf(t[t.length-1].toLowerCase())&&("string"==typeof s.data.updatedValue?this.arrMediaSource.push(s.data.updatedValue):$.each(s.data.updatedValue,function(t,e){e.path.length>0&&l.arrMediaSource.push(e.path)})),this.eventDispatcher(n.COMP_PROPERTY_UPDATED,{compId:e.id,data:e.data,actionKeys:t});break;case a.UPDATE_METADTA:this.objMetadataUpdater.update(e.type,e.id,s.data.updatedValue)}},n.prototype.collectStyles=function(t){var e,a,s,o;for(this.arrStyleClasses=[],s=document.styleSheets,e=s.length-1;e>=0&&(a=s[e],!a.href||-1===a.href.indexOf(t))&&("STYLE"!==a.ownerNode.nodeName||(o=$(a.ownerNode).attr("id"),-1===o.indexOf(t)));e-=1)a=void 0;a&&(this.objStyleSheet=a,this.arrStyleClasses=null!==a.cssRules?a.cssRules:a.rules)},n.prototype.getStyleClass=function(t){var e,a;for(e=0;e<this.arrStyleClasses.length;e+=1)if(a=this.arrStyleClasses[e],a.selectorText==="."+t)return a;return null},n.prototype.removeStyles=function(t){var e,a;for(e=0;e<t.length;e+=1)a="."+t[e],this.removeStyle(a)},n.prototype.removeStyle=function(t){var e,a;for(e=0;e<this.arrStyleClasses.length;e+=1)if(a=this.arrStyleClasses[e],a.selectorText===t){this.objStyleSheet.deleteRule(e),this.arrStyleClasses=null!==this.objStyleSheet.cssRules?this.objStyleSheet.cssRules:this.objStyleSheet.rules;break}},n.prototype.updateStyleClass=function(t,e){var a,s;for(a=0;a<this.arrStyleClasses.length;a+=1)s=this.arrStyleClasses[a],s.selectorText===t&&(this.objStyleSheet.deleteRule(a),this.objStyleSheet.insertRule(t+e,a),this.arrStyleClasses=null!==this.objStyleSheet.cssRules?this.objStyleSheet.cssRules:this.objStyleSheet.rules)},n.prototype.addStyleClass=function(t,e){var a,s=0;a=t.split("_"),$.each(this.arrStyleClasses,function(t,e){-1!==e.selectorText.indexOf(a[0])&&(s=t)}),this.objStyleSheet.insertRule(t+e,s+1),this.arrStyleClasses=null!==this.objStyleSheet.cssRules?this.objStyleSheet.cssRules:this.objStyleSheet.rules},n.prototype.getCssText=function(){var t,e,a,s="";if(this.arrAssetsToSave=[],!this.arrStyleClasses)return s;for(t=0;t<this.arrStyleClasses.length;t+=1)e=this.arrStyleClasses[t].cssText,-1!==e.indexOf("http")&&(e=e.substr(0,e.indexOf("http"))+"assets/media"+e.substr(e.lastIndexOf("/")),a=e.split("url(").pop(),a=a.split(")")[0].split("/"),this.arrAssetsToSave.push(a.pop())),s+=e;return s},n.prototype.getAssetsToSaveList=function(){return this.arrAssetsToSave},n.prototype.getJSONMediaList=function(){return this.arrMediaSource},n.prototype.eventDispatcher=function(t,e){var a={};a.type=t,a.compData=e,this.trigger(a.type,a)},n.prototype.getScreenJSONData=function(){var t,e,a='{"screens": [',s="]}";return t=this.objJsonUtil.cleanJsonData([this.objJSONData],0,"parentObject"),e=a+JSON.stringify(this.objJSONData)+s},n.prototype.removeSelectedComponent=function(t){var e,a=this.objJsonUtil.getParentId(t.id,this.objJSONData);this.objJsonUtil.removeJSONNode(t.id,this.objJSONData)===!0&&(e={},e.componentId=t.id,void 0===t.parentObject&&(t.parentObject={}),e.parentId=t.parentObject.parentId,t.jsonData="",void 0===e.parentId&&(t.parentObject.parentId=a,e.parentId=a),this.eventDispatcher(n.REMOVE_SELECTED_COMPONENT,e))},n.prototype.appendComponentJSONData=function(t,e){var a=this.objJsonUtil.getComponentJSONDataById(e,this.objJSONData);return void 0!==a.node?(a.node.components=void 0!==a.node.components?a.node.components:[],a.node.components.push(t),!0):!1},n.prototype.getNewComponentData=function(t,e,a){var s,o,i,r,l="",d={};if(r=this.objDefaultCompData.getDefaultData(t,l,l),s=r.JsonData,void 0!==a.isValid&&a.isValid(s.type)===!0){if(o=this.objDefaultStyleClass.getDefaultStyleClass(t),this.appendComponentJSONData(s,e),d.compJSON=$.parseJSON(JSON.stringify(s)),d.parentId=e,o instanceof Array)for(i=0;i<o.length;i+=1)this.updateStyleSheet(o[i],r.arrayComp[i].id);else this.updateStyleSheet(o,s.id);this.addDataToWorker(d)}else this.eventDispatcher(n.INVALID_COMPONENT_CREATION)},n.prototype.updateStyleSheet=function(t,e){"insertRule"in this.objStyleSheet?this.objStyleSheet.insertRule("."+e+"{"+t+"}",1):"addRule"in this.objStyleSheet&&this.objStyleSheet.addRule("."+e,t,1)},n.prototype.getHelperFilePath=function(){return this.objJSONData.script},n.prototype.destroy=function(){var t=!0;return this.objJsonUtil=void 0,this.arrMediaSource=void 0,this.arrAssetsToSave=void 0,this.objJSONData=void 0,this.objJSONData=void 0,this.objDefaultCompData=void 0,this.objDefaultStyleClass=void 0,this.arrStyleClasses=void 0,this.memoryObjRef=void 0,t},n});