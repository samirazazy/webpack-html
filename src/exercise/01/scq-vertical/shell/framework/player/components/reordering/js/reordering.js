define(["marionette","player/base/base-layout-comp","components/reordering/js/reordering-helper"],function(e,r){var n;return n=r.extend({initialize:function(e){if(this.objData=e,!e.hasOwnProperty("reorderingEl"))throw new Error("No reordering element provided!");$(e.reorderingEl).sortable({containment:e.reorderingEl}),$(e.reorderingEl).disableSelection(),console.log(" Reordering component initialization!! ")}})});