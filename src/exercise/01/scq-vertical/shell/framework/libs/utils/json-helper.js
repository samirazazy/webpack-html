define(["marionette"],function(){var e;return e=function(){return _.extend(this,Backbone.Events)},e.prototype.searchByProperty=function(e,n){this.searchByKey(n,e,this)},e.prototype.searchCompJsonFilePath=function(e,n){var t,o=[],r=e.screens[0].components;if(r)for(t=0;t<r.length;t+=1)void 0!==r[t][n]&&o.push({index:t,path:r[t][n]});return o},e.prototype.searchInJSON=function(e,n){var t,o,r,i,s=this;if(e.id===n)i={},i.index=0,i.node=e;else if(void 0!==e.components)i=this.searchInJSON(n,e.components);else for(o=0;o<e.length&&(t=e[o],void 0===i);o+=1)if(r=s.compareById(n,t),r===!1&&t.components)i=this.searchInJSON(n,t.components);else if(r===!0){i={},i.index=o,i.node=t,i.parent=e;break}return i},e});