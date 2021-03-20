define(["player/base/base-simulation-activity","player/utils/data-loader","frameworkRoot/activities/simulation-model","utiljs/json-helper"],function(t,e,o,i){var a=t.extend({template:_.template("<div>simulation activity</div>"),activityData:void 0,jsonData:void 0,objDataLoader:void 0,userData:{},objJsonHelper:void 0,arrCompFileToLoad:void 0,counterIndex1:5,isScreeenEdited:!1,styleClassRef:void 0,regions:{screenHolder:"#screenHolder",globalCompHolder:"#globalCompHolder"},initialize:function(t){this.objJsonHelper=new i,this.initBaseActivity(),this.activityData=t,this.userData=this.activityData.activityData,this.SimulationActivitySuper.prototype.initialize.call(this,!0)}});return a.prototype.onActivityCreationComplete=function(){this.SimulationActivitySuper.prototype.onActivityCreationComplete.call(this,!0);var t,o=this.activityData;this.objDataLoader=new e,this.bEditor===!0,this.broadcastEventReceiver(this.ActivityEventConst.MANAGE_COMMON_BROADCAST_EVENT,this,"manageCommonBroadcastEvent"),this.objPathUpdater.setRootPath(this.strRegionName,o.dataPath),void 0!==o.dataPath&&(t=this.bEditor===!0?o.dataPath+"?"+(new Date).getTime():o.dataPath,t=this.objPathUpdater.resolvePath(t),this.loadJSONData(t,"json","application/json","json",this.handleJsonDataLoadComplete,this.dataLoadErrorHandler)),this.bEditor===!0&&(this.objSimPictor.objActRef=this)},a.prototype.activityInitInEditMode=function(){var t={};t.task=this.ActivityEventConst.SIM_PICTOR_INITALIZED,t.type=this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT,t.simPictor=this.objSimPictor,t.regionToUpdate=this.strRegionName,this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT,t)},a.prototype.manageCommonBroadcastEvent=function(t){if(this.strRegionName===t.data.region)switch(t.type){case this.ActivityEventConst.MANAGE_COMMON_BROADCAST_EVENT:switch(t.data.subTask){case this.ActivityEventConst.CALL_AND_UPDATE_COMPONENT:delete t.data.region,this.objSimPictor.callAndUpdateComponent(t.data)}}},a.prototype.SimulationActivitySuper=t,a.prototype.setPictorRef=function(t){this.objSimPictor=t},a.prototype.handleJsonDataLoadComplete=function(t,e){e.jsonData=t,e.objDataLoader.off(e.objDataLoader.DATA_LOAD_SUCCESS),e.objDataLoader.off(e.objDataLoader.DATA_LOAD_FAILED),void 0!==t.defaults&&$.each(t.defaults,function(t,o){e.model.set(t,o)}),void 0!==e.activityData.stylePath?e.loadCSSData(e.activityData.stylePath):e.onAllDataLoadComplete()},a.prototype.onAllDataLoadComplete=function(){var t=this.objJsonHelper.searchCompJsonFilePath(this.jsonData,"compjsonsrc");this.arrCompFileToLoad=t,this.counterIndex1=0,0===t.length?(this.initlizeControls(),this.startScreenInitlization()):this.prepareScreenComponentsList(t[this.counterIndex1]),this.objSimPictor.onActivityCreationComplete()},a.prototype.prepareScreenComponentsList=function(t){this.loadJSONData(t.path,"json","application/json","json",this.onCompJsonLoadDone,this.dataLoadErrorHandler)},a.prototype.onCompJsonLoadDone=function(t,e){e.objDataLoader.off(e.objDataLoader.DATA_LOAD_SUCCESS),e.objDataLoader.off(e.objDataLoader.DATA_LOAD_FAILED),e.arrCompFileToLoad[e.counterIndex1].loadedData=t,e.arrCompFileToLoad.length>e.counterIndex1+1?(e.counterIndex1=e.counterIndex1+1,e.prepareScreenComponentsList(e.arrCompFileToLoad[e.counterIndex1])):e.combineArray()},a.prototype.combineArray=function(){var t,e,o,i=this.jsonData.screens[0].components,a=[];for(this.counterIndex1=0,t=this.arrCompFileToLoad.length-1,a=i,t=this.arrCompFileToLoad.length-1;t>=0;t-=1)e=Number(this.arrCompFileToLoad[t].index),o=this.arrCompFileToLoad[t].loadedData.components,a=this.mergeArrays(a,o,e);this.jsonData.screens[0].components=a,this.initlizeControls(),this.startScreenInitlization()},a.prototype.mergeArrays=function(t,e,o){var i=0,a=[];for(i=0;o>i;i+=1)a.push(t[i]);for(i=0;i<e.length;i+=1)a.push(e[i]);for(i=o+1;i<t.length;i+=1)a.push(t[i]);return a},a.prototype.dataLoadErrorHandler=function(){throw this.objDataLoader.off(this.objDataLoader.DATA_LOAD_SUCCESS),this.objDataLoader.off(this.objDataLoader.DATA_LOAD_FAILED),new Error(this.objErrConst.ERROR_WHILE_LOADING_FILE)},a.prototype.loadCSSData=function(t){var e,o,i=this;e=this.objPathUpdater.resolvePath(t),o=this.bEditor===!0?"text!":"css!",e=o+e+"?"+(new Date).getTime(),require([e],function(e){void 0!==e&&(e=e.replace(/assets\/media/g,i.objPathUpdater.dloRootPath()+t.slice(0,t.lastIndexOf("/"))+"/assets/media"),i.styleClassRef=$("<style id='"+t+"'>"+e+"</style>").appendTo("head")),i.onAllDataLoadComplete()})},a.prototype.showAlertMsg=function(t,e,o,i,a,n,r,s){var c={};return c.title=i,c.message=t,void 0!==a&&(c.yesBtnLabel=a),void 0!==n&&(c.noBtnLabel=n),void 0!==r&&(c.cancelBtnLabel=r),void 0!==o&&(c.button=o),c.styles=s,c.htmlTemplate=e,this.showAlert(c)},a.prototype.showMessage=function(t,e,o,i,a,n,r){this.showAlertMsg(t,this.getInlineTemplateById("msgBoxTemplate"),o,e,i,a,n,r)},a.prototype.setScreenText=function(t,e){e&&e.data&&e.data.screenText&&"setScreenText"in t&&"function"==typeof t.setScreenText&&t.setScreenText(this.getScreenText(e.data.screenText))},a.prototype.changeWizardView=function(t){this.objSimPictor.changeWizardView(t.customData)},a.prototype.handleEditorEvents=function(t,e){var o={};o.task=t,o.type=this.ActivityEventConst.PLAYER_EDIT_COMPONENT_EVENT,o.compData=e,o.regionToUpdate=this.strRegionName,this.trigger(this.ActivityEventConst.PLAYER_EDIT_COMPONENT_EVENT,o)},a.prototype.broadcastEditorTask=function(t,e){var o={},i={};i.compData=e,i.task=t,o.data=i,o.type=this.ActivityEventConst.HANDLE_EDITOR_TASK_EVENT,o.task=this.ActivityEventConst.HANDLE_EDITOR_TASK_EVENT,this.trigger(this.ActivityEventConst.HANDLE_EDITOR_TASK_EVENT,o)},a.prototype.receivePropertyManagerEvents=function(t){this.objScreenHelper&&void 0!==this.objScreenHelper.receivePropertyManagerEvents&&this.objScreenHelper.receivePropertyManagerEvents(t)},a.prototype.launchActivityInEditor=function(t){this.objScreenHelper&&void 0!==this.objScreenHelper.receivePropertyManagerEvents&&this.objScreenHelper.receivePropertyManagerEvents(t)},a.prototype.launchActivityInEditor=function(t,e,o,i){var a={};i=void 0===i?!1:i,a.regionId=t,a.regionToChange=t,a.data=o,a.strActivityID=e,a.bLaunchByIndex=i,a.editorOnly=!0,a.task=this.ActivityEventConst.LAUNCH_ACTIVITY_IN_REGION,a.type=this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT,this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT,a)},a.prototype.onPlayerStop=function(t){this.objScreenHelper&&void 0!==this.objScreenHelper.onPlayerStop&&this.objScreenHelper.onPlayerStop(t)},a.prototype.destroy=function(){return this.flush(),this.bEditor===!0&&this.styleClassRef.remove(),this.screenHolder.close(),void 0!==this.activityData.stylePath&&this.removeCSS(this.activityData.stylePath.split(".css")[0]),this.objSimPictor&&this.objSimPictor.destroy(),delete this.objSimPictor,this.removeJS("player/base/base-simulation-activity"),this.SimulationActivitySuper.prototype.destroy.call(this,!0)},a});