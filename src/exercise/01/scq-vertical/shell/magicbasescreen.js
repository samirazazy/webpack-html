/*jslint nomen: true*/
/*globals Backbone,_,console,$, class */

define(['player/screen/screen-helper','player/utils/data-loader'], function(ScreenHelper,DataLoader) {'use strict';
	var BaseEBHelper;

	BaseEBHelper = ScreenHelper.extend({
		CHANGE_ACTIVITY:"change_activity_event",
		objDataLoader : null,
		dataCallback : null
	});
	/* @Name :  
	 * @Description : 
	 * @Param : 
	 */
	BaseEBHelper.prototype.init = function() {
		this.recieveEvent();
		this.objDataLoader = new DataLoader();
		//console.log('this.objDataLoader', this.objDataLoader);
	};
	BaseEBHelper.prototype.EBBaseSuper = ScreenHelper;
	BaseEBHelper.prototype.bindEvents = function() {

	};
	/* @Name :  recieveEvent
	 * @Description : This method receive events from the framework.
	 * @Param : None 
	 */
	BaseEBHelper.prototype.recieveEvent = function() {
		this.objActivity.broadcastEventReceiver(this.CHANGE_ACTIVITY, this, "onChangeActivityRequest");
	};
	
	/* @Name :  recieveEvent
	 * @Description : This method receive events from the framework.
	 * @Param : eventName Name of the evnet,  data : that will have the parameters
	 */
	BaseEBHelper.prototype.sendEvent = function(eventName, data) {
		this.objActivity.broadcastEvent(eventName,data);
	};
	
	/* @Name :  addEvent
	 * @Description : This method add event of the activity.
	 * @Param : eSelector : element selector(like id/class), eName : Name of the event(like click), 
	 * fName : Function Name which function will call when this event fired.
	 */
	BaseEBHelper.prototype.addEvent = function(objTarget, strEventType, strCallBack) {
		this.objActivity.attachListener(this, objTarget, strEventType, strCallBack);
	};
	
	/* @Name : launchBySkill
	 * @Description : This method launch the activiy skill wise.
	 * @Param : 
	 */
	BaseEBHelper.prototype.launchBySkill = function() {
	
	};
	
	/* @Name :  
	 * @Description : 
	 * @Param : 
	 */
	BaseEBHelper.prototype.launchByList = function() {
	
	};
	
	/* @Name : launchBySkill
	 * @Description : This method launch the activiy skill wise.
	 * @Param : 
	 */
	BaseEBHelper.prototype.launchActivity = function() {
	
	};
	
	/* @Name :  
	 * @Description : 
	 * @Param : 
	 */
	BaseEBHelper.prototype.launchActInRegion = function() {
	
	};
	
	/* @Name : launchByList
	 * @Description : This method launch the activity list wise.
	 * @Param : 
	 */
	BaseEBHelper.prototype.setStateOfElement = function() {
	
	};
	
	BaseEBHelper.prototype.changeActivity = function(regionId, screenId, isIndex) {
		var objDataToSend = {};
		objDataToSend.regionId = regionId;
		objDataToSend.screenId = screenId;
		objDataToSend.isIndex = (isIndex === undefined)?false:true;
		this.sendEvent(this.CHANGE_ACTIVITY, objDataToSend);
	};
	
	
	BaseEBHelper.prototype.onChangeActivityRequest = function(eventData) {
		
	};
	
	BaseEBHelper.prototype.getRegionChangeNotification = function(objData) {
		
	};
	
	/* @Name :  
	 * @Description : 
	 * @Param : 
	 */
	BaseEBHelper.prototype.loadData = function(dataurl,callbackF) {
		this.dataCallback = callbackF;
		this.objDataLoader.on(this.objDataLoader.DATA_LOAD_SUCCESS, this.handleLoadSuccess);
		this.objDataLoader.on(this.objDataLoader.DATA_LOAD_FAILED, this.handleLoadFailed);
		this.objDataLoader.load({
			url : dataurl, //"activity/assets/factorData.json",
			dataType : "json",
			contentType : "application/xml",
			returnType : "json"
		});
	};
	
	BaseEBHelper.prototype.handleLoadSuccess = function(objData) {
		this.objDataLoader.off(this.objDataLoader.DATA_LOAD_SUCCESS);
		this.objDataLoader.off(this.objDataLoader.DATA_LOAD_FAILED);
		this.dataCallback.call(this,objData);
	};
	/**
	 *
	 */
	BaseEBHelper.prototype.handleLoadFailed = function() {
		this.objDataLoader.off(this.objDataLoader.DATA_LOAD_SUCCESS);
		this.objDataLoader.off(this.objDataLoader.DATA_LOAD_FAILED);
		//alert('mcq data loading failed;');
	};
	//To add for 
	// 1) Navigtor
	// 2) Data Loader
	// 3) Communicator
	// 4) Message Popup a) as an alert b) or as an message 
	
	BaseEBHelper.prototype.launchShellActivityById =  function(strActivityId){
		console.log(' Shell Screen loaded for global purposes ');
		//To do for Navigation
	};
	
	
	return BaseEBHelper;
});

