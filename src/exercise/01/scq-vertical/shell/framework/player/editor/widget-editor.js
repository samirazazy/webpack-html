define(["marionette","player/editor/base-editor"],function(t,o){var e;return e=o.extend({defaultCompData:{}}),e.prototype.getComponent=function(t,o){this.isSimComp=o;var e=void 0!==t.data?t:$(t);this.createCompData(e)},e.prototype.createCompData=function(t){if(this.defaultCompData=this.prepareDefaultData(t),void 0===this.defaultCompData)throw new Error(this.errorConst.DEFUALT_DATA_MISSING_IN_WIDGET);this.createComponent(t)},e.prototype.onComponentCreationComplete=function(t){this.objComp=t,this.objComp.defaultData=this.defaultCompData,this.componentCreated()},e.prototype.WidgetCompEditorSuper=o,e.prototype.destroy=function(){return this.WidgetCompEditorSuper.prototype.destroy(this,!0)},e});