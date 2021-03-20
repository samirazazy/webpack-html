/*jslint nomen: true*/
/*globals Backbone,_,console,$, class */

define(['scq-vertical/activities/mmcq/common/basemcq'], function (BaseMcq) {
    'use strict';
    var MCQHelper;
    MCQHelper = BaseMcq.extend({});

    MCQHelper.prototype.init = function () {
        this.loadUrl = "scq-vertical/activities/mmcq/question4/activity.xml";
        this.loadXmlData();
        this.toStart();
        if(window.LOCAL_RUN == true){
             this.handleDataLoadSuccess($.xml2json($.parseXML(question4).documentElement), this, false);
        }
    };
    return MCQHelper;
});