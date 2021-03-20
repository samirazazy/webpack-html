define(["marionette","components/container","components/draggable/model","jqueryTouchPunch"],function(t,e,o){var i=e.extend({objData:null,template:_.template(""),dId:void 0,$draggable:void 0,containmentDiv:void 0,originalPos:void 0,currentPos:void 0,feedback:null,objHint:null,initialize:function(t){this.$draggable=void 0,this.originalPos=void 0,this.currentPos=void 0,this.objData=t,this.model=new o(t),this.componentType="draggable"},onPlayerResizeEvent:function(){this.handleScaling()},onShow:function(){this.preInitScreenElement(),this.customEventDispatcher(this.eventConst.CREATION_COMPLETE,this,this)},onAttach:function(){console.log("draggable attached....... in DOM")}});return i.prototype.preInitScreenElement=function(){if(void 0===this.objData.elementId)this.$draggable=this.$el;else{if("#"!=this.objData.elementId.toString().charAt(0))throw new Error("Error : Please pass some valid id selector");this.dId=this.objData.elementId.toString(),this.$draggable=$(this.dId),this.$el=this.$draggable,this.el=this.$draggable[0]}void 0!==this.objData.containment&&"#"==this.objData.containment.toString().charAt(0)&&(this.containmentDiv=$(this.objData.containment.toString())),void 0!==this.objData&&void 0!==this.objData.updatedScale&&this.setStageScaleValue(this.objData.updatedScale),this.$draggable.attr("class",this.styleClass()),this._makeDraggable(this.$draggable)},i.prototype.addChild=function(t){var e=t.component;"hint"===e.componentType?(this.objHint=e,this.bEditor===!1&&this.objHint.hideHint()):"feedback"===e.componentType&&(this.feedback=e,this.bEditor===!1&&this.feedback.hide()),this.Super.prototype.addChild.call(this,t)},i.prototype.showFeedback=function(t){this.feedback&&this.feedback.showFeedback(t)},i.prototype.hideFeedback=function(){this.feedback&&this.feedback.hideFeedback()},i.prototype.showHint=function(){null!==this.objHint&&this.objHint.showHint()},i.prototype.hideHint=function(){null!==this.objHint&&this.objHint.hideHint()},i.prototype.isValid=function(t){var e=!1;return e="draggable"===t||"droppable"===t||"dnd"===t?!1:!0},i.prototype._makeDraggable=function(t){var e=this;setTimeout(function(){t.css("position","absolute")},0),this.bEditor||(t.draggable({start:function(t,o){e.start={};var i={event:t,ui:o};void 0===e.originalPos&&(e.originalPos={left:o.originalPosition.left/e.getStageScaleValue(),top:o.originalPosition.top/e.getStageScaleValue()}),e.currentPos={left:o.position.left,top:o.position.top},e.start.x=t.clientX,e.start.y=t.clientY,e.customEventDispatcher("start",e,i)},drag:function(t,o){var i,a,n,s,r,l={event:t,ui:o};i=(o.originalPosition.left+t.clientX-e.start.x)/e.getStageScaleValue(),a=(o.originalPosition.top+t.clientY-e.start.y)/e.getStageScaleValue(),n=e.containementCordinates(),i<n.left?i=n.left:i>n.right&&(i=n.right),a<n.top?a=n.top:a>n.bottom&&(a=n.bottom),e.model.get("gridX")>0&&(r=i-e.originalPos.left,s=parseInt(r/e.model.get("gridX")),i=e.originalPos.left+s*e.model.get("gridX")),e.model.get("gridY")>0&&(r=a-e.originalPos.top,s=parseInt(r/e.model.get("gridY")),a=e.originalPos.top+s*e.model.get("gridY")),o.position.left=i,o.position.top=a,e.currentPos={left:i,top:a},e.customEventDispatcher("drag",e,l)},stop:function(t,o){var i={event:t,ui:o};e.currentPos={left:o.position.left,top:o.position.top},e.customEventDispatcher("stop",e,i)},scroll:!1,grid:e.getGrid()}),("true"===this.model.get("clone")||this.model.get("clone")===!0)&&t.draggable({helper:"clone"}))},i.prototype.getGrid=function(){var t=[];return t[0]=this.model.get("gridX"),t[1]=this.model.get("gridY"),t},i.prototype.setValue=function(t){this.model.set("value",t)},i.prototype.getValue=function(){return this.model.get("value")},i.prototype.enableCloning=function(){this.model.set("clone",!0),this.$draggable&&this.$draggable.draggable({helper:"clone"})},i.prototype.disableCloning=function(){this.model.set("clone",!1),this.$draggable&&this.$draggable.draggable({helper:"original"})},i.prototype.getClone=function(){var t,e=0;return("true"===this.model.get("clone")||this.model.get("clone")===!0)&&this.$draggable&&(t=this.$draggable.clone(),e=this.model.get("cloneCounter"),this.model.set("cloneCounter",parseInt(e+1,10))),t},i.prototype.containementCordinates=function(){var t,e,o,i,a=this;return a.containmentDiv?(t=0,e=0,o=t+this.containmentDiv.width()-this.$draggable.width(),i=e+this.containmentDiv.height()-this.$draggable.height()):(t=0,e=0,o=t+$(this.$el.parent()).width()-this.$draggable.width(),i=e+$(this.$el.parent()).height()-this.$draggable.height()),{left:t,top:e,right:o,bottom:i}},i.prototype.revertBack=function(t){var e=this;if(void 0!==e.originalPos)return t===!1?(this.$draggable.css("left",e.originalPos.left+"px"),this.$draggable.css("top",e.originalPos.top+"px"),e.customEventDispatcher("revertComplete",e,e),void 0):(this.$draggable.animate({left:e.originalPos.left,top:e.originalPos.top},{complete:function(t){e.customEventDispatcher("revertComplete",e,t)},progress:function(t){e.customEventDispatcher("revertProgress",e,t)}}),void 0)},i.prototype.setGrid=function(t,e){parseFloat(t)&&this.model.set("gridX",parseFloat(t)),parseFloat(e)&&this.model.set("gridY",parseFloat(e))},i.prototype.setOriginalPosition=function(t){parseFloat(t.left)!==isNaN&&parseFloat(t.top)!==isNaN&&(this.originalPos={},this.originalPos.left=parseFloat(t.left),this.originalPos.top=parseFloat(t.top))},i.prototype.setCurrentPosition=function(t){parseFloat(t.left)!==isNaN&&parseFloat(t.top)!==isNaN&&(this.currentPos={},this.currentPos.left=parseFloat(t.left),this.currentPos.top=parseFloat(t.top),this.$draggable.css("left",this.currentPos.left),this.$draggable.css("top",this.currentPos.top))},i.prototype.setCurrentPositionToOriginalPosition=function(){void 0!==this.currentPos&&(this.originalPos=this.currentPos)},i.prototype.enable=function(){this.$draggable.draggable("enable")},i.prototype.disable=function(){this.$draggable.draggable("disable")},i.prototype.setContainmentDiv=function(t){this.containmentDiv=$(t)},i.prototype.data=function(t){return t?(this.model.set("data",t),void 0):this.model.get("data")},i.prototype.styleClass=function(t){return t?(this.$el.removeClass(this.model.get("styleClass")),this.model.set("styleClass",t),this.$el.addClass(t),void 0):this.model.get("styleClass")},i.prototype.setZindex=function(t){this.$el.css("z-index",t)},i.prototype.handleScaling=function(){},i.prototype.Super=e,i.prototype.destroy=function(){return this.$draggable.draggable({}),this.$draggable.draggable("destroy"),this.Super.prototype.destroy(!0)},i});