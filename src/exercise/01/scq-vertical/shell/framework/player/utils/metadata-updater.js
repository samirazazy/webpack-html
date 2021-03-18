define(["marionette","xml2json","player/utils/xml-manipulator"],function(t,o,e){var a;return a=Backbone.Marionette.Controller.extend({MetadataUpdaterInstance:void 0,metadataXml:void 0,objXMLManipulator:void 0}),a.prototype.initMetaDataUpdater=function(t){this.objXMLManipulator=new e(t)},a.prototype.update=function(t,o,e){var a,r,i,n,d,p;if(a=this.objXMLManipulator.getNodesByTag("metadata"),r=this.objXMLManipulator.getNodesByAttr("category",t,a))if(n=this.objXMLManipulator.getNodesByAttr("id",o,r))for(p in e)i=this.objXMLManipulator.getNodesByAttr("id",p,r),i?""!==e[p]&&i.html(e[p]):(d="",d+='<keyword id="'+p.toLowerCase()+'"><![CDATA['+e[p],d+="]]></keyword>",this.objXMLManipulator.appendNodeTo(d,r));else{d="",d+='<element id="'+o+'">';for(p in e)d+='<keyword id="'+p.toLowerCase()+'"><![CDATA['+e[p]+"]]></keyword>";d+="</element>",this.objXMLManipulator.appendNodeTo(d,r)}else{d='<group category="'+t+'">',d+='<element id="'+o+'">';for(p in e)d+='<keyword id="'+p.toLowerCase()+'"><![CDATA['+e[p]+"]]></keyword>";d+="</element></group>",this.objXMLManipulator.appendNodeTo(d,a)}},a.prototype.getNodesById=function(t){var o;return this.objXMLManipulator&&this.objXMLManipulator.getNodesById(t)&&(o=this.objXMLManipulator.getNodesById(t)),o},a.prototype.getNodesByCategory=function(t){var o;return this.objXMLManipulator&&this.objXMLManipulator.getNodesByAttr("category",t)&&(o=this.objXMLManipulator.getNodesByAttr("category",t)),o},a.prototype.deleteNodeById=function(t){if(this.objXMLManipulator&&this.objXMLManipulator.getNodesById(t)){var o=this.objXMLManipulator.getNodesById(t);this.objXMLManipulator.deleteNode(o)}else console.warn("Node doesn't exist")},a.prototype.getJsonDataById=function(t){var o=this.getNodesById(t);return o?$.xml2json(o[0]):void 0},a.prototype.getXMLdata=function(){var t="";return this.objXMLManipulator&&(t=this.objXMLManipulator.xmlToString(this.objXMLManipulator.xmlData)),t},a.prototype.destroy=function(){},a});