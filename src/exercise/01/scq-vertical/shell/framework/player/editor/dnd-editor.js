define(["marionette","player/editor/base-editor"],function(t,o){var e;return e=o.extend({defaultCompData:{}}),e.prototype.getComponent=function(t,o){this.isSimComp=o;var e=void 0!==t.data?t:$(t);this.createCompData(e)},e.prototype.createCompData=function(t){if(this.defaultCompData=this.prepareDefaultData(t),void 0===this.defaultCompData)throw new Error("DndComp data missing");this.createComponent(t)},e.prototype.onComponentCreationComplete=function(t){this.objComp=t,this.objComp.defaultData=this.defaultCompData,this.componentCreated()},e.prototype.DndEditorSuper=o,e.prototype.destroy=function(){return this.DndEditorSuper.prototype.destroy(this,!0)},e});