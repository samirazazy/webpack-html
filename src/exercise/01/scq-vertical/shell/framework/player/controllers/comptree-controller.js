define(["marionette","player/events/eventsconst","player/utils/json-manipulator"],function(e,t,i){var o,r;return r=null,o=Backbone.Marionette.Controller.extend({objJsonUtil:void 0,treeData:void 0,objCompTree:void 0,bTREE_NODE_SELECTED:!1,constructor:function(){this.objJsonUtil=new i}}),o.prototype.TREE_NODE_SELECTED="nodeselected",o.prototype.treeNodeSelected=function(e){var t="screen ByType ByAlphabet  button  case  coloraccessibility  canvas drawingbutton feedback hint droppable draggable dnd label colorpicker";-1===t.indexOf(e)&&(this.bTREE_NODE_SELECTED=!0,this.trigger(this.TREE_NODE_SELECTED,e))},o.prototype.selectTreeNode=function(e){this.objCompTree&&!this.bTREE_NODE_SELECTED&&this.objCompTree.selectTreeNode(e),this.bTREE_NODE_SELECTED=!1},o.prototype.setData=function(e,t){var i,o,r={},n=[],l=this;for(o="string"==typeof t?$.parseJSON(t):t,$.each(e,function(e,t){var a,d,p;i={},i.children=[],a=t.id,d=l.objJsonUtil.getParentId(a,o),void 0===d&&(d="_root_"),p=t.name,(void 0===p||0===p.trim().length)&&(p=a),i.id=a,i.label=p,i.pid=d,i.type=t.type,"self"!==a&&"helper"!==a&&"detached"!==t.state&&(n.push(i),r[a]=i)});n.length>0;){var i,a=n.splice(0,1);i=a[0],r[i.pid]?r[i.pid].children.push(i):r._root_=i}this.treeData=r._root_,this.objCompTree&&this.objCompTree.updateTree(this.treeData)},o.prototype.filterData=function(e,t){switch(t){case"ByAlphabet":var i,o,r,n={},l={};n.label=t,n.pid="_root_",n.id=t,n.children=[],$.each(e,function(e,t){"self"!==t.id&&"helper"!==t.id&&(l={},l.children=[],i=t.id,o="_root_",r=t.name,(void 0===r||0===r.trim().length)&&(r=i),l.id=i,l.label=r,l.pid=o,l.type=t.type,n.children.push(l))});break;case"ByType":var a,d,n={};n.label=t,n.pid="_root_",n.id=t,n.children=[],n.type="filter",$.each(e,function(e,i){a={},a.label=e,a.pid=t,a.id=e,a.children=[],a.type="filter","self"!==e&&"helper"!==e&&($.each(i,function(t,i){d={},d.type=i.type,d.label=i.id,d.pid=e,d.id=i.id,d.children=[],a.children.push(d)}),n.children.push(a))})}this.objCompTree.updateTree(n)},o.prototype.destroy=function(){delete this.treeData},{getInstance:function(){return null===r&&(r=new o),r}}});