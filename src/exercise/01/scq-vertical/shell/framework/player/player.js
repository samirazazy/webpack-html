define(["marionette","player/mplayer-helper","player/mplayer-initalizer","player/constants/playerconst","jqueryUI"],function(t,e,i,o){var a;return a=new Backbone.Marionette.Controller.extend({objConfigData:void 0,objActivityConfigData:void 0,objPopupTemplates:void 0,objRouter:void 0,objActivityManager:void 0,objPlayerHelper:void 0,initalize:function(){}}),a.prototype.startPlayer=function(t){var i,a,r;if(console.log("player start.........."),this.objActivityConfigData=t.activityConfig,r=this.objActivityConfigData.regions.region,this.objConfigData=t.playerConfig,this.objRouter=t.router,this.objPopupTemplates=t.popupTemplates,r.length>0)for(i=0;i<r.length;i+=1)void 0!==t.queryData&&r[i].id===t.queryData.region&&void 0!==t.queryData.defaultAct&&(r[i].activities.defaultLaunchID=t.queryData.defaultAct);if(this.objPlayerHelper=new e(this),this.objPlayerHelper.initlize(),r.length>0)for(i=0;i<r.length;i+=1)a=!0,r[i].type===o.REGION_TYPE_HEADER&&"false"===this.objConfigData.header.visible&&(a=!1),r[i].type===o.REGION_TYPE_FOOTER&&"false"===this.objConfigData.footer.visible&&(a=!1)},a.onPlayerInitlizeComplete=function(t){t.target=this,this.trigger(t.type,t)},a.getPlayerHelper=function(){return this.objPlayerHelper},a.getPlayerConfig=function(){return this.objConfigData},a.getActivityConfig=function(){return this.objActivityConfigData},a.getPopupTemplatesData=function(){return this.objPopupTemplates},a.startPlayerInitalizer=function(t){console.log("in start player initalizer..."),new i(t,this)},a.destroy=function(){return objPlayerHelper.destroy()},a});