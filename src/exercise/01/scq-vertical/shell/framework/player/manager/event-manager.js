define(["marionette","player/constants/errorconst"],function(e,t){var r=function(){this.members.objDictonary={}};return r.prototype.members={EVENT_TYPE:"eventType",EVENT_CONTEXT:"eventContext",EVENT_TARGET:"eventTarget",EVENT_CALLBACK:"eventCallback",objDictonary:void 0},r.prototype.addEventListener=function(e,r,n,o){var i,E,T;if(T=this.getTargetID(r),void 0===T)throw new Error(t.ID_IS_NOT_ASSOCIATED_WITH_OBJECT,r);if(this.searchEventReference()===!0)throw new Error(n+t.IS_ALREADY_REGISTERED+T);i=this.members,E={},E[i.EVENT_CONTEXT]=e,E[i.EVENT_TARGET]=r,E[i.EVENT_TARGET]=n,E[i.EVENT_CALLBACK]=o,i.objDictonary[T+"_"+n]=E,r.bind(n,e,e[o])},r.prototype.removeEventListener=function(e,t){var r=this.getTargetID(e);e.unbind(t),delete this.members.members.objDictonary[r+"_"+t]},r.prototype.getTargetID=function(e){var t;return t=void 0,t=void 0===$(e[0]).attr("id")?e.getID():e.attr("id")},r.prototype.searchEventReference=function(e,t){var r,n;return r=!1,n=this.members.objDictonary[e+"_"+t],void 0!==n},r.prototype.destroy=function(){return!0},r});