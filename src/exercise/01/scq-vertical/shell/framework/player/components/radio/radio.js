define(["marionette","player/base/base-item-comp","components/radio/model"],function(t,e,i){var s;return s=e.extend({objData:null,template:_.template("<input id='' name='' type='{{view}}'  />"),$input:null,tagName:"div'",initialize:function(t){this.objData=t,this.model=new i(t),this.componentType="radio"},onRender:function(){var t=this;this.$input=this.$el.find("input"),this.$input.attr("name",this.model.get("name")),("true"===this.model.get("checked")||this.model.get("checked")===!0)&&this.$input.attr("checked",!0),("true"===this.model.get("disabled")||this.model.get("disabled")===!0)&&this.$input.attr("disabled",!0),this.bEditor===!1?(this.$input.attr("class",this.model.get("styleClass")),this.$input.off("click").on("click",$.proxy(t.compClick,t)),this.$input.off("mouseover").on("mouseover",$.proxy(t.compRollover,t)),this.$input.off("mouseout").on("mouseout",$.proxy(t.compRollout,t))):(void 0!==this.model.get("styleClass")&&this.$el.attr("class",this.model.get("styleClass")),this.$input.attr("class",this.model.get("styleClass")),this.$input.css("left","0px"),this.$input.css("top","0px"),this.$input.css("display","inherit"),this.$input.css("pointer-events","none"))},getValue:function(){return this.model.get("value")},isSelected:function(){return this.$input.is(":checked")},onShow:function(){this.customEventDispatcher(this.eventConst.CREATION_COMPLETE,this,this)}}),s.prototype.compClick=function(){this.customEventDispatcher("compClick",this,this.getValue()),this.customEventDispatcher("click",this,this.getValue())},s.prototype.compRollover=function(){this.customEventDispatcher("mouseover",this,this.getValue()),this.customEventDispatcher("rollover",this,this.getValue())},s.prototype.compRollout=function(){this.customEventDispatcher("mouseout",this,this.getValue()),this.customEventDispatcher("rollout",this,this.getValue())},s.prototype.__super__=e,s.prototype.isValid=function(){return!1},s.prototype.destroy=function(){return this.$el.off("click"),this.$el.off("mouseover"),this.$el.off("mouseout"),this.__super__.prototype.destroy.call(this,!0)},s});