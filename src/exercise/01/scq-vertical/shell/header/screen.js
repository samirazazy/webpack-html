/*jslint nomen: true*/
/*globals Backbone,_,console,$, class */

define(['scq-vertical/shell/magicbasescreen'], function (BaseEBHelper) {
    'use strict';
    var Helper;

    Helper = BaseEBHelper.extend({

    });

    Helper.prototype.init = function () {
        this.ScreenSuper.prototype.init.call(this);
        this.bindEvents();
    };

    Helper.prototype.ScreenSuper = BaseEBHelper;

    Helper.prototype.bindEvents = function () {
        $(".exit").unbind('click').bind('click', this.bExitClick);
        $(".home").unbind('click').bind('click', this.bHomeClick);
        $(".help").unbind('click').bind('click', this.bHelpClick);
    };

    Helper.prototype.bExitClick = function () {};

    Helper.prototype.bHomeClick = function () {};

    Helper.prototype.bHelpClick = function () {};

    Helper.prototype.hidePreloader = function () {};

    Helper.prototype.jumpToActivity = function (e) {
        var id = e.currentTarget.id;
        this.objActivity.model.attributes.curUnit = id;
        this.objActivity.jumpToActivityByID(2);
    };

    Helper.prototype.destroy = function () {
        this.ScreenSuper.prototype.destroy.call(this, true);
    };
    return Helper;
});
