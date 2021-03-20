/*jslint nomen: true*/
/*globals Backbone,_,console,$, class */

define(['player/screen/screen-helper', 'player/utils/data-loader'], function (ScreenHelper, Data_Loadernew) {
    'use strict';

    var Helper, mySelf, loadUrl = '';
    var Data_Loader = new Data_Loadernew();

    Helper = ScreenHelper.extend({

    });

    Helper.prototype.init = function () {
        mySelf = this;
        loadUrl = "mcq/activities/mmcq/start/activity.xml";
        mySelf.loadXmlData();
        $(".mPlayer").addClass("start");

        $("#startButton").unbind("click").on("click", function () {
            $(".mPlayer").removeClass("start");
            mySelf.objActivity.showHideRegionById("footer", true);
            mySelf.objActivity.jumpToActivityByID("question1");
            if ("multipleChoice") {
                $(".tryAgainBtn3, .tryAgainBtn").css("display", "none");
                $(".submitButton3").css("left", "286px");
            }
        });



    };

    Helper.prototype.hidePreloader = function () {
        $("#preloader").hide();
    };

    Helper.prototype.loadXmlData = function () {
        Data_Loader.on(Data_Loader.DATA_LOAD_SUCCESS, this.handleDataLoadSuccess);
        Data_Loader.on(Data_Loader.DATA_LOAD_FAILED, this.handleDataLoadFailed);
        Data_Loader.load({
            url: loadUrl
            , dataType: "xml"
            , contentType: "application/xml"
            , returnType: "json"
        });
    };

    Helper.prototype.handleDataLoadSuccess = function (objData) {
        Data_Loader.off(Data_Loader.DATA_LOAD_SUCCESS);
        Data_Loader.off(Data_Loader.DATA_LOAD_FAILED);
        $("#templateName").removeAttr("class");
        var xmlData = objData.templateName;
        var lenOf = xmlData.length;

        if (lenOf <= 26) {
            $("#templateName").addClass("templateName1");
        } else {
            $("#templateName").addClass("templateName2");
        }

        $("#templateName").html(xmlData);
        $("#playerContainer").show();

    };

    Helper.prototype.handleDataLoadFailed = function () {
        Data_Loader.off(Data_Loader.DATA_LOAD_SUCCESS);
        Data_Loader.off(Data_Loader.DATA_LOAD_FAILED);
    };



    Helper.prototype.jumpToActivitySelector = function (e) {
    };

    Helper.prototype.onSubmitClick = function () {};


    Helper.prototype.destroy = function () {};

    return Helper;
});