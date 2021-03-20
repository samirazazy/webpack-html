/*jslint nomen: true*/
/*globals Backbone,_,console,$, class */

define(['marionette'], function(Marionette) {'use strict';
	var EBController, objInstance = null;

	EBController = function() {

	};

	EBController.prototype.mode = function() {

	};

	return {
		getInstance : function() {
			if (objInstance === null) {
				objInstance = new EBController();
			}
			return objInstance;
		}
	};

});

