define(["player/editor/base-editor"],function(t){var o;return o=t.extend({defaultCompData:{}}),o.prototype.getComponent=function(t,o){this.isSimComp=o;var e=void 0!==t.data?t:$(t);this.createCompData(e)},o.prototype.createCompData=function(t){if(this.defaultCompData=this.prepareDefaultData(t),void 0===this.defaultCompData)throw new Error(this.errorConst.SCREEN_NAV_DEFAULT_DATA_MISSING);this.createComponent(t)},o.prototype.onComponentCreationComplete=function(t){this.objComp=t,this.objComp.defaultData=this.defaultCompData,this.componentCreated()},o.prototype.ScreenNavigatorEditorSuper=t,o.prototype.destroy=function(){return this.ScreenNavigatorEditorSuper.prototype.destroy(this,!0)},o});