define(["marionette","components/container","components/sortable/model"],function(t,e,o){var n=e.extend({objData:null,feedback:null,template:_.template(""),initialize:function(t){this.objData=t,this.model=new o(t),this.componentType="sortable"},onRender:function(){this.$el.attr("class",this.styleClass())},onShow:function(){this.customEventDispatcher(this.eventConst.CREATION_COMPLETE,this,this)}});return n.prototype.isValid=function(t){var e=!1;return e="label"===t||"case"===t||"image"===t||"feedback"===t?!0:!1},n.prototype.addChild=function(t){var e=t.component;switch(e.componentType){case"feedback":this.feedback=e}this.Super.prototype.addChild.call(this,t)},n.prototype.enable=function(){this.$Sortable.Sortable("enable")},n.prototype.disable=function(){this.$Sortable.Sortable("disable")},n.prototype.value=function(t){return t?(this.model.set("value",t),void 0):this.model.get("value")},n.prototype.reset=function(){this.hideFeedback()},n.prototype.hideFeedback=function(){this.feedback&&this.feedback.hide()},n.prototype.checkAnswer=function(t){return null!==this.feedback&&this.feedback.showFeedback(t),t},n.prototype.data=function(t){return t?(this.model.set("data",t),void 0):this.model.get("data")},n.prototype.styleClass=function(t){return t?(this.model.set("styleClass",t),void 0):this.model.get("styleClass")},n.prototype.Super=e,n.prototype.destroy=function(){return this.Super.prototype.destroy(!0)},n});