define(["marionette","player/events/eventsconst","player/utils/data-loader","player/constants/errorconst","player/components/toolbox/toolbox"],function(o,t,e,n,r){var a;return a=Backbone.Marionette.Controller.extend({toolboxData:void 0,objToolbox:void 0,constructor:function(o){this.toolboxData=o,this.objToolbox=new r(o)}}),a.prototype.destroy=function(){},a});