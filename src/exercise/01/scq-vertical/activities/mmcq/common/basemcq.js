/*jslint nomen: true*/
/*globals Backbone,_,console,$, class */

define(['player/screen/screen-helper', 'player/utils/data-loader'], function (ScreenHelper, Data_Loadernew) {
    'use strict';

    var Helper, mySelf, counter = 0,
        loadUrl = '',
        xmlData;
    var lenOpt;
    var ansOptions;

    Helper = ScreenHelper.extend({
        loadUrl: null,
        Data_Loader: new Data_Loadernew()
    });

    Helper.prototype.toStart = function () {
        $('<img src="scq-vertical/activities/mmcq/assets/images/hover.png"/>');
        $('<img src="scq-vertical/activities/mmcq/assets/images/radio.png"/>');
        $('<img src="scq-vertical/activities/mmcq/assets/images/radioinactive.png"/>');
        $('<img src="scq-vertical/activities/mmcq/assets/images/right.png"/>');
        $('<img src="scq-vertical/activities/mmcq/assets/images/wrong.png"/>');
        $('<img src="scq-vertical/activities/mmcq/assets/images/red.png"/>');
        $('<img src="scq-vertical/activities/mmcq/assets/images/blue.png"/>');
        $('<img src="scq-vertical/activities/mmcq/assets/images/green.png"/>');
        mySelf = this;
        mySelf.onReset();
        this.enableDisable();

        $(".imageCont").on("click", function () {
            $(".show1").css("display", "block");
            if(imgPath =="")
            {
                $(".img-show").append(videopath);
                $(".img-show").css({"width":"unset","height":"unset"});
            }
            else{
                $(".img-show").append(imgPath);
            }
        });
        $(".cross, .overlay, .img-show").click(function () {
            $(".show1").fadeOut();
            if(imgPath =="")
            {
                //$('.show1 video').remove();
            }
            else{
                //$('.show1 img').remove();
            }
        });
    };

    Helper.prototype.hidePreloader = function () {
        $("#preloader").hide();
    };

    Helper.prototype.loadXmlData = function () {
        if (window.LOCAL_RUN !== undefined && window.LOCAL_RUN != true) {
            var objClassRef = this;
            objClassRef.Data_Loader.on(objClassRef.Data_Loader.DATA_LOAD_SUCCESS, this.handleDataLoadSuccess);
            objClassRef.Data_Loader.on(objClassRef.Data_Loader.DATA_LOAD_FAILED, this.handleDataLoadFailed);
            objClassRef.Data_Loader.load({
                url: this.loadUrl,
                dataType: "xml",
                contentType: "application/xml",
                returnType: "json",
                scope: objClassRef
            });
        }
    };

    Helper.prototype.handleDataLoadSuccess = function (objData, scope) {
        scope.Data_Loader.off(scope.Data_Loader.DATA_LOAD_SUCCESS);
        scope.Data_Loader.off(scope.Data_Loader.DATA_LOAD_FAILED);
        xmlData = mySelf.shuffleData(objData.questions);
        mySelf.createQnsContent(xmlData);
        var scaleval = mySelf.objActivity.nScaleValue;
        setInterval(function () {
            mySelf.objActivity.updatePlayerSize({});
        }, 100);
    };

    Helper.prototype.handleDataLoadFailed = function () {
        Data_Loader.off(Data_Loader.DATA_LOAD_SUCCESS);
        Data_Loader.off(Data_Loader.DATA_LOAD_FAILED);
    };

    Helper.prototype.shuffleData = function (objData) {
        var array = objData.question;
        var counter = array.length,
            temp, index;
        while (counter--) {
            index = (Math.random() * counter) | 0;
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    };

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }


    Helper.prototype.createQnsContent = function (getExeData) {
        $("#prag").html(getExeData.qnsText);
        var divHe = ($("#questionContainer").height() - $("#prag").height()) / 2;
        $("#prag").css("top", "40px").css("opacity", "1");
        var allHTML = '<div class="rows">';
        lenOpt = getExeData.options.length;
        var shuffleVar = getExeData.shuffleData;
        if (shuffleVar == "True") {

            ansOptions = shuffle(getExeData.options);
        } else {
            ansOptions = getExeData.options;
        }

        var radioOpt = '';
        for (var x = 0; x < lenOpt; x++) {
            var idno = ansOptions[x].id;
            radioOpt = radioOpt + '<div class="checkBoxRows">';
            radioOpt = radioOpt + '<div class="checkBoxImg checkBox' + idno + '" data-no="' + idno + '" ></div>';
            radioOpt = radioOpt + '<input type="radio" name="chkBox" id="chkBox_' + idno + '" data-no="' + idno + '" value="' + ansOptions[x].id + '"/>';
            radioOpt = radioOpt + '<div class="newClass">' + '</div>';
            radioOpt = radioOpt + '<label class="checkBox" id="lbl_' + idno + '" for="chkBox_' + idno + '" >' + ansOptions[x].label + '</label>';
            radioOpt = radioOpt + '</div>';
        }
        allHTML = allHTML + radioOpt + '<div class="clearBoth"></div></div>';
        $("#contentArea").html(allHTML);
        this.addEvents();
        setTimeout(function () {
            for (var x = 0; x < lenOpt; x++) {
                var idno = ansOptions[x].id;
                if ($("#lbl_" + idno).height() > 54) {
                    console.log(' ansOptions[x].label ', ansOptions[x].label.length);
                    /* $("#lbl_" + idno).css('line-height', '40px');*/
                } else {
                    /*$("#lbl_" + idno).css('height', 'auto');*/
                }
            }
        }, 10);
        for (var x = 0; x < lenOpt; x++) {
            var idno = ansOptions[x].id;
            var len = $('#lbl_' + idno).height();
            console.log("[[[[[]]]]]", len);
            if (len < 70) {

            } else if (len > 70 && len < 150) {
                $(".checkBox" + idno).siblings('.newClass').css("margin-top", "38px");
                $(".checkBox" + idno).css("margin-top", "40px");
            } else if (len > 150 && len < 250) {
                $(".checkBox" + idno).siblings('.newClass').css("margin-top", "60px");
                $(".checkBox" + idno).css("margin-top", "66px");
            } else if (len > 250 && len < 350) {

                $(".checkBox" + idno).siblings('.newClass').css("margin-top", "80px");
                $(".checkBox" + idno).css("margin-top", "85px");
            }
        }

    };


    Helper.prototype.addEvents = function () {
        $("input[type=radio]").on("click", function () {
            var getCheckStatus = $(this);
            $(".checkBoxImg").parent('.checkBoxRows').removeClass("checkBoxSelected");
            var getNo = getCheckStatus.attr("data-no");
            var valueOfCheckBox = getCheckStatus.attr("value");
            if (getCheckStatus.is(':checked')) {
                $('.newClass').css("visibility", "hidden");
                $(".checkBox" + getNo).parent('.checkBoxRows').addClass("checkBoxSelected");
                $(".checkBox" + getNo).siblings('.newClass').css("visibility", "visible");
                $(".checkBox" + getNo).attr("value", valueOfCheckBox);
            } else {
                $(".checkBox" + getNo).parent('.checkBoxRows').removeClass("checkBoxSelected");
                $(".checkBox" + getNo).removeAttr("value");
                $('.newClass').css("visibility", "hidden");
            }
            var getLen = $("input:checked").length;
            if (getLen > 0) {
                $(".submitButton").removeClass("buttonDisabled");
            } else {
                $(".submitButton").addClass("buttonDisabled");
            }
        });

        $(".checkBoxImg").on("click", function () {
            var getCheckStatus = $(this);
            $(".checkBoxImg").parent('.checkBoxRows').removeClass("checkBoxSelected");
            var getNo = getCheckStatus.attr("data-no");
            var valueOfCheckBox = getCheckStatus.parent('.checkBoxRows').hasClass("checkBoxSelected");
            if (valueOfCheckBox) {
                $(".checkBox" + getNo).parent('.checkBoxRows').removeClass("checkBoxSelected");
                $(".checkBox" + getNo).removeAttr("value");
                $("#chkBox_" + getNo).prop("checked", false);
                $('.newClass').css("visibility", "hidden");
            } else {
                $('.newClass').css("visibility", "hidden");
                $(".checkBox" + getNo).parent('.checkBoxRows').addClass("checkBoxSelected");
                $(".checkBox" + getNo).siblings('.newClass').css("visibility", "visible");
                $(".checkBox" + getNo).attr("value", getNo);
                $("#chkBox_" + getNo).prop("checked", true);
            }
            var getLen = $("input:checked").length;
            if (getLen > 0) {
                $(".submitButton").removeClass("buttonDisabled");
            } else {
                $(".submitButton").addClass("buttonDisabled");
            }
        });
    };
    Helper.prototype.onPrevious = function () {
        $(".nextBtn").css("pointer-events", "none");
        $(".backBtn").css("pointer-events", "none");
        this.objActivity.launchPreviousActivity();
        $(".showanswerBtn").addClass("buttonDisabled");
    };

    Helper.prototype.onNext = function () {
        $(".nextBtn").css("pointer-events", "none");
        $(".backBtn").css("pointer-events", "none");
        this.objActivity.launchNextActivity();
        $(".showanswerBtn").addClass("buttonDisabled");
    };
    Helper.prototype.enableDisable = function () {
        setTimeout(function () {
            if ($(".backBtn").hasClass("backBtnDisabled")) {
                $(".backBtn").css("pointer-events", "none");
            } else {
                $(".backBtn").css("pointer-events", "auto");
            }
            if ($(".nextBtn").hasClass("nextBtnDisabled")) {
                $(".nextBtn").css("pointer-events", "none");
            } else {
                $(".nextBtn").css("pointer-events", "auto");
            }
        }, 100);
    };
    Helper.prototype.onPrint = function () {
        $('#mPlayer').addClass('printIE');
        $("#footer").css("display", "none");
        $("#workArea").addClass('styleBorder');
        $('#workArea').css('border-bottom', 'solid 2px #73C3F8');
        $(".printBtn").addClass("printBtnDisabled");
        this.objActivity.print("mActivity", true);
        $('#mPlayer').removeClass('printIE');
        $("#footer").css("display", "block");
        $(".printBtn").removeClass("printBtnDisabled");
    };

    Helper.prototype.onReset = function (getExeData) {
        $('.checkBoxRows').removeClass('checkBoxSelected');
        $(".checkBoxImg").removeClass("disableClick");
        $(".checkBox").removeClass("disableClick correctAns inCorrectAns ");
        $("input[type=radio]").prop("checked", false);
        $(".tryAgainBtn").addClass("buttonDisabled");
        $(".submitButton").addClass("buttonDisabled");
        $(".resetBtn").addClass("buttonDisabled");
        $(".showanswerBtn").addClass("buttonDisabled");

        $(".newClass").css("visibility", "hidden");
        $(".newClass").css('background-image', 'url(scq-vertical/activities/mmcq/assets/images/blue.png)');
        $(".checkBoxImg").removeAttr('style');
        //lenOpt = getExeData.options.length;
        for (var x = 0; x < lenOpt; x++) {
            var idno = ansOptions[x].id;
            var len = $('#lbl_' + idno).height();
            console.log("[[[[[]]]]]", len);
            if (len < 70) {

            } else if (len > 70 && len < 150) {
                $(".checkBox" + idno).siblings('.newClass').css("margin-top", "38px");
                $(".checkBox" + idno).css("margin-top", "40px");
            } else if (len > 150 && len < 250) {
                $(".checkBox" + idno).siblings('.newClass').css("margin-top", "60px");
                $(".checkBox" + idno).css("margin-top", "66px");
            } else if (len > 250 && len < 350) {

                $(".checkBox" + idno).siblings('.newClass').css("margin-top", "80px");
                $(".checkBox" + idno).css("margin-top", "85px");
            }
        }
    };

    Helper.prototype.onTryAgain = function () {
        $(".inCorrectAns").each(function (index) {
            var thisData = $(this).attr("id");
            var thisNo = thisData.split("_");
            $(".checkBox" + thisNo[1]).removeClass("checkBoxSelected disableClick");
            $("#chkBox_" + thisNo[1]).prop("checked", false);
            $("#lbl_" + thisNo[1]).removeClass("inCorrectAns correctAns disableClick");
        });
        $(".tryAgainBtn").addClass("buttonDisabled");
        $(".showanswerBtn").addClass("buttonDisabled");
    };

    Helper.prototype.onSubmit = function () {
        var ansArr = xmlData.correctAns;
        ansArr = parseInt(ansArr);
        var checkAns = $('.checkBoxRows.checkBoxSelected').find("input[type='radio']").val();
        checkAns = parseInt(checkAns);
        $("#lbl_" + checkAns).removeClass("correctAns inCorrectAns");
        if (checkAns == ansArr) {
            $("#lbl_" + checkAns).addClass("correctAns");
            // $(".newClass").css("border-color", "transparent #a8ffa8 transparent transparent");
            $(".newClass").css('background-image', 'url(scq-vertical/activities/mmcq/assets/images/green.png)');
        } else {
            $("#lbl_" + checkAns).addClass("inCorrectAns");
            $(".showanswerBtn").removeClass("buttonDisabled");
            //$(".newClass").css("border-color", "transparent #fb535e transparent transparent");
            $(".newClass").css('background-image', 'url(scq-vertical/activities/mmcq/assets/images/red.png)');
        }
        $(".checkBoxImg").addClass("disableClick");
        $(".checkBox").addClass("disableClick");
        $(".tryAgainBtn").removeClass("buttonDisabled");
        $(".submitButton").addClass("buttonDisabled");
        $(".resetBtn").removeClass("resetBtnDisabled");
        $(".resetBtn").removeClass("buttonDisabled");
    };
    Helper.prototype.onshowanswer = function () {
        $(".showanswerBtn").addClass("buttonDisabled");
        var ansArr = xmlData.correctAns;
        ansArr = parseInt(ansArr);
        $('.newClass').css("visibility", "hidden");
        $("label").removeClass("inCorrectAns").parent().removeClass("checkBoxSelected");
        $("#lbl_" + ansArr).addClass("correctAns");
        $("#lbl_" + ansArr).parent().addClass("checkBoxSelected");
        $("#lbl_" + ansArr).siblings($(".newClass")).css("visibility", "visible");
        //alert();
        //$("#lbl_" + ansArr).siblings($(".newClass")).css('background-image', '');
        $(".newClass").css('background-image', 'url(scq-vertical/activities/mmcq/assets/images/green.png)');

    };

    Helper.prototype.handleNavigation = function (no) {
        $(".navBar").removeClass("selected");
        for (var x = 1; x <= no; x++) {
            $("#navBar" + x).addClass("selected");
        }
        $(".tryAgainBtn").addClass("buttonDisabled");
        $(".submitButton").addClass("buttonDisabled");
        $(".resetBtn").addClass("buttonDisabled");
    };

    Helper.prototype.destroy = function () {};

    return Helper;
});