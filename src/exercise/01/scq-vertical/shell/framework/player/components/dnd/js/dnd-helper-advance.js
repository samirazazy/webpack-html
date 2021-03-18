define(["marionette","components/option/option","jqueryUI"],function(t,e){var r=function(t){return this.members={DND_COMP_REF:t,dndType:void 0,bDropCopy:!1,bDragCopy:!1,bMultiAccept:!1,bAcceptCorrectOnly:!1,bRplaceExisting:!0,dndItemView:{},activeDroppable:void 0,activeDraggable:void 0,activeDraggableUI:void 0,revertToPosition:"flase",revertToOriginalPosition:"true",dndElements:{},itemHolder:void 0,arrDragList:void 0,arrDropList:void 0,itemCounterDrag:0,itemCounterDrop:0,itemCounter:0,zIndexValue:1,containment:void 0,click:{},removeItemRef:!1,maxCount:-1,bMatchByValue:!1},_.extend(this,Backbone.Events)};return r.prototype.ONE_TO_ONE="oneToOne",r.prototype.ONE_TO_Many="oneToMany",r.prototype.DND_INITLIZED="dndInitlize",r.prototype.DRAGGABLE="draggable",r.prototype.DROPPABLE="droppable",r.prototype.DND_ITEM_DRAG_START_EVENT="dndItemDragStartEvent",r.prototype.DND_ITEM_DROP_EVENT="dndItemDropEvent",r.prototype.DND_ITEM_DRAG_STOP_EVENT="dndItemDragStopEvent",r.prototype.DND_ITEM_DRAG_MOVE_EVENT="dndItemDragMoveEvent",r.prototype.dndType=function(t){this.members.dndType=t},r.prototype.dropCopy=function(t){this.members.bDropCopy="true"===t||t===!0?!0:!1},r.prototype.dragCopy=function(t){this.members.bDragCopy="true"===t||t===!0?!0:!1},r.prototype.multiAccept=function(t){this.members.bMultiAccept="true"===t||t===!0?!0:!1},r.prototype.acceptCorrectOnly=function(t){this.members.bAcceptCorrectOnly="true"===t||t===!0?!0:!1},r.prototype.replaceExisting=function(t){this.members.bRplaceExisting="true"===t||t===!0?!0:!1},r.prototype.setAlign=function(t){this.members.strAlign=t},r.prototype.matchByValue=function(t){this.members.bMatchByValue=void 0==t?!1:"true"==t?!0:!1},r.prototype.setMaxCount=function(t){this.members.maxCount=parseInt(t)},r.prototype.revertToPosition=function(t){this.members.revertToPosition="true"===t?!0:"false"===t?!1:t},r.prototype.revertToOriginalPosition=function(t){this.members.revertToOriginalPosition="true"===t?!0:"false"===t?!1:t},r.prototype.CreateDraggble=function(t,e){var r,o;for(o=this.members,o.arrDragList=t,r=0;r<o.arrDragList.length;r+=1)this.createElements(e,o.arrDragList[r],"draggable")},r.prototype.CreateDroppable=function(t,e){var r,o;for(o=this.members,o.arrDropList=t,r=0;r<o.arrDropList.length;r+=1)this.createElements(e,o.arrDropList[r],"droppable")},r.prototype.createElements=function(t,r,o){var i,a,s,n;void 0===this.members.itemHolder&&(this.members.itemHolder=t.find("#dndHolder")),i=o===this.DRAGGABLE?this.members.itemCounterDrag++:this.members.itemCounterDrop++,a=o+"_"+i,s=this.getElementModel(r,a),n=new e,n.model=s,this.members.itemCounter++,n.setName(a),n.render(),n.$el.attr("id",r.id),n.$el.attr("type",o),n.$el.attr("dataCID",n.cid),n.$el.attr("nCounter",i),n.$el.attr("accepttype",r.accepttype),this.members.bDropCopy===!0&&n.$el.attr("matchByValue",r.itemValue),n.$el.attr("matchByValue",r.itemValue),r.dataCID=n.cid,this.members.itemHolder.append(n.$el),this.members.dndElements[n.cid]=n,o===this.DRAGGABLE&&this.addDragEvent(n.$el),o===this.DROPPABLE&&this.addDropEvent(n.$el),this.members.dndItemView[a]=n,n.$el.removeAttr("style"),n.$el.addClass(o+i),r.styleClass&&n.$el.addClass(r.styleClass),r.styleLeft&&n.$el.css("left",r.styleLeft),r.hideOptions&&$("#optionHolder",n.$el).addClass(r.hideOptions),r.styleTop&&n.$el.css("top",r.styleTop)},r.prototype.getElementModel=function(t,e){var r,o;return r=this.members,new(o=Backbone.Model.extend({defaults:{parentCID:e,id:t.id,correctFor:t.correctFor,label:t.label,type:t.type,img:"",onlyCorrect:r.bAcceptCorrectOnly,multiAccept:r.bMultiAccept,replace:r.bRplaceExisting,filledWith:[],position:void 0,originalPosition:void 0}}))},r.prototype.addDropEvent=function(t){var e=this;t.droppable({drop:function(t,r){e.handleDropEvent(t,r)}})},r.prototype.addDragEvent=function(t){var e=this;$(t).draggable({revert:function(t){return e.handleDragRevert(t)},start:function(t,r){e.handleDragStart(t,r)},stop:function(t,r){e.handleDragStop(t,r)},drag:function(t,r){e.handleDragItemMovement(t,r)}}),(this.members.bDropCopy===!0||this.members.bDragCopy===!0)&&$(t).draggable({helper:"clone"})},r.prototype.initlizeDraggable=function(){this.trigger(this,this.DND_INITLIZED,this)},r.prototype.handleDragStart=function(t,e){var r,o,i,a,s,n,l;r=this,this.members.click.x=t.clientX,this.members.click.y=t.clientY,this.members.zIndexValue++,this.members.activeDraggable=t.currentTarget,this.members.activeDraggableUI=e,this.members.DND_COMP_REF.dispatchDnDEvent(this.DND_ITEM_DRAG_START_EVENT,this.getEventData()),$(this.members.activeDraggable).css("z-index",this.members.zIndexValue),(this.members.bDropCopy===!0||this.members.bDragCopy===!0)&&(this.members.zIndexValue++,e.helper.css("z-index",this.members.zIndexValue)),$(this.members.activeDraggable).draggable({stack:$(r.members.itemHolder)}),o=$(t.target).attr("datacid"),i=this.members.dndElements[o],void 0===i.model.get("position")&&(a={},l=e.originalPosition,s=l.left/this.members.DND_COMP_REF.getStageScaleValue(),n=l.top/this.members.DND_COMP_REF.getStageScaleValue(),a.left=s,a.top=n,i.model.set("position",a),i.model.set("originalPosition",a))},r.prototype.handleScaling=function(){var t,e,r,o,i,a,s,n,l,p;for(p=this.members.itemHolder.find("[type=droppable]"),o=this.members.DND_COMP_REF.getStageScaleValue(),i="scale("+1/o+")",r={},r.transform=i,r["-ms-transform"]=i,r["-moz-transform"]=i,r["-webkit-transform"]=i,r["-o-transform"]=i,t=0;t<p.length;t+=1){if(e=p[t],void 0===$(e).prop("oh")&&$(e).prop("oh",$(e).height()),void 0===$(e).prop("ow")&&$(e).prop("ow",$(e).width()),void 0===$(e).prop("ol")&&$(e).prop("ol",parseFloat($(e).css("left"))),void 0===$(e).prop("ot")&&$(e).prop("ot",parseFloat($(e).css("top"))),$(e).prop("scale")===o)return;$(e).prop("scale",o),i="scale("+o+")",$(e).children().css({transform:i,"-ms-transform":i,"-moz-transform":i,"-webkit-transform":i,"-o-transform":i,"transform-origin":"0% 0%","-ms-transform-origin":"0% 0%","-moz-transform-origin":"0% 0%","-webkit-transform-origin":"0% 0%","-o-transform-origin":"0% 0%"}),$(e).css(r),a=$(e).prop("ow"),s=$(e).prop("oh"),n=$(e).prop("ol"),n-=(a*o-a)/2,l=$(e).prop("ot"),l-=(s*o-s)/2,$(e).width(a*o),$(e).height(s*o),$(e).css("left",n+"px"),$(e).css("top",l+"px")}},r.prototype.handleDragStop=function(){this.members;this.members.DND_COMP_REF.dispatchDnDEvent(this.DND_ITEM_DRAG_STOP_EVENT,this.getEventData())},r.prototype.handleDragItemMovement=function(t,e){var r,o,i,a,s,n,l;i=e.originalPosition,r=(t.clientX-this.members.click.x+i.left)/this.members.DND_COMP_REF.getStageScaleValue(),o=(t.clientY-this.members.click.y+i.top)/this.members.DND_COMP_REF.getStageScaleValue(),void 0!==this.containment&&(a=$(this.containment).position().left/this.members.DND_COMP_REF.getStageScaleValue(),s=$(this.containment).position().top/this.members.DND_COMP_REF.getStageScaleValue(),n=a+$(this.containment).width()-$(this.members.activeDraggable).width(),l=s+$(this.containment).height()-$(this.members.activeDraggable).height(),a>r?r=a:r>n&&(r=n),s>o?o=s:o>l&&(o=l)),e.position.left=r,e.position.top=o,this.members.DND_COMP_REF.dispatchDnDEvent(this.DND_ITEM_DRAG_MOVE_EVENT,this.getEventData())},r.prototype.handleDropEvent=function(t){this.members.activeDroppable=t.target},r.prototype.verifyDroppedItem=function(t,e){if(void 0!=$(t).attr("accepttype")&&void 0!=$(e).attr("accepttype"))return $(t).attr("accepttype")===$(e).attr("accepttype");var r,o,i,a,s,n,l,p,d,m,g,c,h;if(o=$(t).attr("dataCID"),i=$(e).attr("dataCID"),a=this.getItemModel(o),s=this.getItemModel(i),r=a.get("id"),n=s.get("correctFor"),p=s.get("onlyCorrect"),d=s.get("multiAccept"),m=s.get("replace"),l=n.split(","),g=-1!==l.indexOf(r)?!0:!1,c=s.get("filledWith").length>0?!0:!1,h=-1!==s.get("filledWith").indexOf(o)?!0:!1,c&&!d&&!h&&!m)return!1;if(p&&!g)return!1;var b=s.get("filledWith");return-1!=this.members.maxCount&&b.length>=this.members.maxCount?(this.trigger(this,"maxLimit",b.length),!1):!0},r.prototype.getItemModel=function(t){var e,r;return r=this.members.dndElements[t],void 0!==r&&(e=r.model),e},r.prototype.addDraggableCopy=function(){var t,r,o,i,a;t=this.members,o=$(t.activeDraggable).attr("dataCID"),i=this.getItemModel(o),r={},r.nCounter=$(t.activeDraggable).attr("nCounter"),r.type=i.get("type"),r.id=i.get("id"),r.label=i.get("label"),r.img=i.get("img"),r.position=i.get("position"),r.originalPosition=i.get("originalPosition"),i=this.getElementModel(r),i.set("position",r.position),i.set("originalPosition",r.originalPosition),r.objOption=new e,r.objOption.model=i,r.objOption.render(),r.objOption.$el.attr("dataCID",r.objOption.cid),r.objOption.$el.attr("nCounter",r.nCounter),r.objOption.$el.attr("class",$(t.activeDraggable).attr("class")),r.objOption.$el.attr("matchbyvalue",$(t.activeDraggable).attr("matchbyvalue")),r.objOption.$el.attr("type",$(t.activeDraggable).attr("type")),r.objOption.$el.removeAttr("style"),r.objOption.$el.attr("copyitem","true"),r.objOption.$el.addClass(r.type+r.nCounter),t.bDropCopy=!1,t.bDragCopy===!0&&(a=t.bDragCopy,t.bDragCopy=!1),this.addDragEvent(r.objOption.$el),t.bDropCopy=!0,void 0!==a&&(t.bDragCopy=a,a=void 0),t.itemHolder.append(r.objOption.$el),t.dndElements[r.objOption.cid]=r.objOption,t.activeDraggable=r.objOption.$el},r.prototype.handleDragRevert=function(){var t,e,r,o,i,a,s,n;return e=this.members,r=$(e.activeDraggable).attr("dataCID"),i=this.getItemModel(r),void 0!==e.activeDroppable?(t=this.verifyDroppedItem(e.activeDraggable,e.activeDroppable))?(e.bDropCopy===!0&&void 0===$(e.activeDraggable).attr("droppedAt")&&this.addDraggableCopy(),r=$(e.activeDraggable).attr("dataCID"),void 0!==$(e.activeDraggable).attr("droppedAt")&&(o=$(e.activeDraggable).attr("droppedAt"),$(e.activeDraggable).removeAttr("droppedAt"),a=this.getItemModel(o),n=a.get("filledWith"),n.splice(n.indexOf(r),1)),o=$(e.activeDroppable).attr("dataCID"),$(e.activeDraggable).attr("droppedAt",o),a=this.getItemModel(o),n=a.get("filledWith"),n.length>0&&a.get("multiAccept")===!1&&a.get("replace")===!0&&this.resetItem(e.activeDroppable),n.push(r),void 0==this.members.strAlign?this.setElementInCenter(e.activeDraggable,e.activeDroppable):this.setElementPosition(e.activeDraggable,e.activeDroppable),this.members.DND_COMP_REF.dispatchDnDEvent(this.DND_ITEM_DROP_EVENT,this.getEventData()),e.activeDraggable=e.activeDroppable=void 0,!1):(this.members.DND_COMP_REF.dispatchDnDEvent(this.DND_ITEM_DROP_EVENT,this.getEventData()),r=$(e.activeDraggable).attr("dataCID"),e.activeDraggableUI.originalPosition.left=i.get("position").left,e.activeDraggableUI.originalPosition.top=i.get("position").top,void 0!==$(e.activeDraggable).attr("droppedAt")&&e.revertToOriginalPosition&&(o=$(e.activeDraggable).attr("droppedAt"),$(e.activeDraggable).removeAttr("droppedAt"),a=this.getItemModel(o),n=a.get("filledWith"),n.splice(n.indexOf(r),1),e.bDropCopy===!0?(s={},s.objOption=e.dndElements[r],$(s.objOption.$el).draggable("destroy"),$(s.objOption.$el).remove(),delete e.dndElements[r]):e.bDragCopy===!0&&(e.activeDraggableUI.helper.remove(),this.resetItem(e.activeDraggable))),e.activeDraggable=e.activeDroppable=void 0,e.revertToPosition):void 0===e.activeDroppable?(e.activeDraggableUI.originalPosition.left=i.get("originalPosition").left,e.activeDraggableUI.originalPosition.top=i.get("originalPosition").top,i.set("position",i.get("originalPosition")),void 0!==$(e.activeDraggable).attr("droppedAt")&&(o=$(e.activeDraggable).attr("droppedAt"),a=this.getItemModel(o),n=a.get("filledWith"),n.splice(n.indexOf(r),1),void 0!=this.members.strAlign&&this.setElementPosition($("[datacid="+n[0]+"]"),$("[datacid="+o+"]")),$(e.activeDraggable).removeAttr("droppedAt"),e.bDropCopy===!0?(s={},s.objOption=e.dndElements[r],$(s.objOption.$el).draggable("destroy"),$(s.objOption.$el).remove(),delete e.dndElements[r]):e.bDragCopy===!0&&(e.activeDraggableUI.helper.remove(),this.resetItem(e.activeDraggable))),this.members.DND_COMP_REF.dispatchDnDEvent(this.DND_ITEM_DROP_EVENT,this.getEventData()),e.activeDraggable=e.activeDroppable=e.activeDraggableUI=void 0,e.revertToPosition):void 0},r.prototype.setElementPosition=function(t,e){var r,o,i,a,s,n;a=$(t).attr("dataCID"),s=$(e).attr("dataCID");var l=(this.getItemModel(a),this.getItemModel(s));this.members.revertToOriginalPosition||(a=$(t).attr("datacid"),i=this.members.dndElements[a],i.model.set("position",{left:r,top:o}));var p=l.get("filledWith"),d=0;for(e=$(e),n=0;n<p.length;n+=1)t=$($("[datacid="+p[n]+"]")),r=parseFloat(e.css("left"))+(e.innerWidth()-t.innerWidth())/2,o=parseFloat(e.css("top"))+5+d,t.css("position","absolute"),t.css("left",r+"px"),t.css("top",o+"px"),t.css("z-index",this.members.zIndexValue),d=d+18+t.innerHeight()},r.prototype.checkAnswer=function(){var t,e,r,o,i;t=this.members;var a,s,n=!0;for(r=0;r<t.arrDropList.length;r+=1){if(i=t.arrDropList[r].dataCID,o=this.getItemModel(i),a=o.get("filledWith"),s=o.get("correctFor"),s=s.split(","),n!==!0){n=!1;break}for(e=0;e<s.length;e+=1){var l=$("[datacid="+a[e]+"]"),p=$("[datacid="+i+"]"),d=l.attr("id");if(t.bDropCopy===!0)n=l.attr("matchbyvalue")===p.attr("matchbyvalue");else if(1==t.bMatchByValue)n=l.attr("matchbyvalue")===p.attr("matchbyvalue");else if(n=-1!=s.indexOf(d),0==n)break}if(0==n)break}return n},r.prototype.getCorrectIncorrectList=function(){var t,e,r,o,i;t=this.members;var a,s,n=[],l=!0;for(r=0;r<t.arrDropList.length;r+=1)for(i=t.arrDropList[r].dataCID,o=this.getItemModel(i),a=o.get("filledWith"),s=o.get("correctFor"),s=s.split(","),l=a.length===s.length,e=0;e<s.length;e+=1){var p=$("[datacid="+a[e]+"]"),d=$("[datacid="+i+"]"),m=p.attr("id"),g={};l=t.bDropCopy===!0?p.attr("matchbyvalue")===d.attr("matchbyvalue"):1==t.bMatchByValue?p.attr("matchbyvalue")===d.attr("matchbyvalue"):-1!=s.indexOf(m),g.dropItem=d,g.dragItem=p,g.dragItemId=p.attr("id"),g.dropItemId=d.attr("id"),g.isCorrect=l,n.push(g)}return n},r.prototype.resetIncorrectItem=function(){var t,e=this.getCorrectIncorrectList();for(t=0;t<e.length;t+=1){var r=e[t];0==r.isCorrect&&void 0!=r.dragItemId?this.resetItem(r.dragItem):0==r.isCorrect&&1==this.members.bDropCopy&&this.resetItem(r.dragItem)}},r.prototype.setElementInCenter=function(t,e){var r,o,i,a;t=$(t),e=$(e),r=parseFloat(e.css("left"))+(e.innerWidth()-t.innerWidth())/2,o=parseFloat(e.css("top"))+(e.innerHeight()-t.innerHeight())/2,t.css("position","absolute"),t.css("left",r+"px"),t.css("top",o+"px"),t.css("z-index",this.members.zIndexValue),this.members.revertToOriginalPosition||(a=$(t).attr("datacid"),i=this.members.dndElements[a],i.model.set("position",{left:r,top:o}))},r.prototype.freezOption=function(t){$(t).draggable("disable")},r.prototype.freezCorrectOptions=function(){var t,e,r;for(r=this.getCorrectIncorrectList(),e=r.length,t=0;e>t;t++)r[t].isCorrect&&void 0!=r[t].dragItem&&this.freezOption(r[t].dragItem)},r.prototype.unfreezOption=function(t){$(t).draggable("enable")},r.prototype.removeDragFeatureFromOption=function(t){$(t).draggable("destroy")},r.prototype.setContainment=function(t){this.containment=void 0!==t&&$(t).length>0?t:void 0},r.prototype.getContainment=function(){return this.containment},r.prototype.getEventData=function(){var t,e,r,o,i,a,s={};t=this.members,s.isCorrect=!1,void 0!==t.activeDraggable&&(s.left=$(t.activeDraggableUI.helper).position().left,s.top=$(t.activeDraggableUI.helper).position().top,void 0!==t.activeDroppable&&(e=$(t.activeDraggable).attr("dataCID"),i=this.getItemModel(e),r=i.get("id"),o=$(t.activeDroppable).attr("dataCID"),a=this.getItemModel(o),-1!==a.get("correctFor").indexOf(r)&&(s.isCorrect=!0))),s.dragItem=t.activeDraggable,s.dropItem=t.activeDroppable,s.dropItemCount=0,s.totalDropItem=this.members.itemCounterDrag;var n=this;return $.each(this.members.dndElements,function(){if(this&&this.$el){{var t=this.$el.attr("dataCID");n.getItemModel(t)}n.getItemModel(this.$el.attr("dataCID")).get("type")===n.DRAGGABLE&&(s.dropItemCount=void 0==this.$el.attr("droppedAt")?s.dropItemCount:s.dropItemCount=s.dropItemCount+1)}}),s},r.prototype.resetDraggable=function(t){var e,r,o,i,a,s,n,l;e=this.members,a=this.getItemModel(t),r=a.get("id"),o=e.dndElements[t],void 0!==$(o.$el).attr("droppedAt")&&(i=$(o.$el).attr("droppedAt"),s=this.getItemModel(i),$(o.$el).removeAttr("droppedAt"),n=s.get("filledWith"),n.splice(n.indexOf(t),1),e.bDropCopy===!0&&(l={},l.objOption=e.dndElements[t],$(l.objOption.$el).remove(),e.dndElements[t]=void 0)),$(o.$el).removeAttr("style")},r.prototype.showAnswer=function(){var t,e,r,o,i,a,s=this,n=[],l=[];return $.each(this.members.dndElements,function(){t=void 0,t=this.$el.attr("dataCID"),r=s.getItemModel(t),i=r.get("type"),i===s.DRAGGABLE&&(e=void 0,a=void 0,void 0!==this.$el.attr("droppedAt")&&(e=this.$el.attr("droppedAt"),o=s.getItemModel(e),a=o.get("correctFor"),-1!==a.indexOf(r.get("id"))?n.push(r.get("id")):l.push(r.get("id"))))}),{correct:n,incorrect:l}},r.prototype.setItemtoCorrectPosition=function(){var t,e,r,o,i,a,s,n=this;$.each(this.members.dndElements,function(){if(e=void 0,this&&this.$el&&(e=this.$el.attr("dataCID"),r=n.getItemModel(e),o=r.get("type"),o===n.DROPPABLE))if(i=n.getItemModel(this.$el.attr("dataCID")).get("correctFor"),s=this.$el.parent().attr("id"),a=$("#"+i,$("#"+s)),t=$("#"+this.$el.attr("id"),$("#"+s)),1==n.members.bDropCopy){var l=$(a.clone());l.attr("matchbyvalue",a.attr("matchbyvalue")),l.attr("type",a.attr("type")),l.attr("clonedItem","true"),$("#"+s).append(l),n.setElementInCenter(l,t)}else n.setElementInCenter(a,t)})},r.prototype.resetDroppable=function(t){var e,r,o,i;for(e=this.members,r=this.getItemModel(t),o=r.get("filledWith"),i=o.length;i>0;)this.resetDraggable(o[0]),i-=1},r.prototype.resetItem=function(t){var e,r,o;e=$(t).attr("dataCID"),r=this.getItemModel(e),void 0!=r&&(o=r.get("type"),o===this.DRAGGABLE?this.resetDraggable(e):this.resetDroppable(e)),1==this.members.bDropCopy&&"true"==t.attr("copyitem")&&t.remove()},r.prototype.resetAll=function(){var t,r=this;if($.each(this.members.dndElements,function(){this instanceof e&&(r.resetItem(this.$el),t=$(this.$el).parent())}),1==this.members.bDropCopy){var o=t.find("[cloneditem=true]");o.remove()}},r.prototype.getElementByCid=function(t){var e,r;return e=this.members.dndElements[t],r=e.$el},r.prototype.changeCorrectFor=function(t,e){var r,o,i;if(r=this.members.itemHolder.find("#"+t)[0],"droppable"!==$(r).attr("type"))throw new Error("Data can only be set on droppables!!");o=$(r).attr("dataCID"),i=this.getItemModel(o),i.set("correctFor",e)},r.prototype.destroy=function(){var t=this;$.each(this.members.dndElements,function(){if(this instanceof e){t.resetItem(this.$el);try{this.model.get("type")===this.DRAGGABLE?$(this.$el).draggable("destroy"):$(this.$el).droppable("destroy")}catch(r){}this.model.set("filledWith",[]),this.model.set("position",void 0),this.model=null,$(this.$el).remove()}}),this.members.dndElements={},this.members.itemCounterDrag=0,this.members.itemCounterDrop=0,this.members.itemCounter=0,this.members.zIndexValue=1,this.members.DND_COMP_REF=void 0,delete this.members},r});