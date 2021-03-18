define(["marionette"],function(){var t;return t=Backbone.Marionette.Controller.extend({objActivity:null,screenId:void 0,model:void 0}),t.prototype.manageWebServiceCall=function(t,o,e,i,n){var r={};r.serviceName=t,r.context=e,r.successFunction=i,r.failFunction=n,r.userData=o,this.objActivity.manageWebServiceCall(r)},t.prototype.stopAllRegion=function(t,o){this.objActivity.stopAllRegion(t,o)},t.prototype.startAllRegion=function(t,o,e){this.objActivity.stopAllRegion(!t,o,e)},t.prototype.showAlert=function(t){return this.objActivity.showAlert(t)},t.prototype.showAlertMsg=function(t,o,e,i,n,r,a,s){var c={};return c.title=i,c.message=t,void 0!==n&&(c.yesBtnLabel=n),void 0!==r&&(c.noBtnLabel=r),void 0!==a&&(c.cancelBtnLabel=a),void 0!==e&&(c.button=e),c.styles=s,c.htmlTemplate=o,this.showAlert(c)},t.prototype.onConfigDataModified=function(t,o){var e;e={},e.activeRegion=this.activeRegion,e.action=t,e.data=o,this.objActivity.broadcastEditorTask("modifyConfig",e)},t.prototype.startStopRegions=function(t,o,e,i){var n={};n.regionToStart=t,n.task=o,n.strActivityID=e,n.bLaunchByIndex=i,this.objActivity.playerBubbleEvent(n)},t.prototype.destroy=function(){return!0},t});