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
        var getActivityLen = this.objActivity.allRegionData.mActivity.activityLength;
        var addHTML = '';
        var addWith = 0;
        if (getActivityLen <= 1) {
            $(".backBtn").hide();
            $(".nextBtn").hide();
        } else {
            for (var i = 0; i < getActivityLen; i++) {
                addWith = addWith + 32;
                addHTML = addHTML + '<div class="navBar" id="navBar' + i + '" ></div>';
            }
            $("#navigationInnerBox").html(addHTML).width(addWith);
        }
        if (navigator.userAgent.match(/iPad/i)) {
            $(".printBtn").hide();
        } else if (navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i)) {
            $(".printBtn").hide();
        } else {
            $(".printBtn").show();
        }
		$("#navBar0").addClass("selected");
    };

    Helper.prototype.ScreenSuper = BaseEBHelper;

    Helper.prototype.hidePreloader = function () {};

    Helper.prototype.bindEvents = function () {
        $(".left").unbind('click').bind('click', this.bLeftClick);
        $(".refresh").unbind('click').bind('click', this.bRefreshClick);
        $(".right").unbind('click').bind('click', this.bRightClick);
    };
    Helper.prototype.onReset = function () {};

    Helper.prototype.bLeftClick = function () {};

    Helper.prototype.bRefreshClick = function () {};

    Helper.prototype.bRightClick = function () {};

    Helper.prototype.getRegionChangeNotification = function (objData) {
        var getActivityLen = objData.mActivity.activityLength;
        setTimeout(function () {
            if (getActivityLen <= 1) {
                //$("#contentArea").addClass("contentAreaMax");
                $("#contentArea").css('top', '175px');
                console.log("getActivityLen><<><", getActivityLen);
            } else {
                //$("#contentArea").removeClass("contentAreaMax");
            }
        }, 100);

        var getIndex = objData.mActivity.currentActivityIndex;
        var getValue = (objData.mActivity.currentActivityIndex);
        if (objData.mActivity.currentActivityIndex == 0) {
            $(".backBtn").addClass("backBtnDisabled");
        } else {
            $(".backBtn").removeClass("backBtnDisabled");
        }
        if (objData.mActivity.isLastActivity == true) {
            $(".nextBtn").addClass("nextBtnDisabled");
        } else {
            $(".nextBtn").removeClass("nextBtnDisabled");
        }
        $(".navBar").removeClass("selected");
        for (var i = 0; i <= getValue; i++) {
            $(".navigationBar" + i).addClass("selected");
            $("#navBar" + i).addClass("selected");
        }
    };

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
