!function(t){t.widget("Template.REORDERING",t.custom.BASEWIDGET,{options:{arrQuestion:[],totalQuestion:0,answerArray:null,result:null,startX:0,startY:0,functionList:["checkAnswer","reset","disable","hideFeedback","showAnswer"]},_create:function(){},_init:function(){this.options.answerArray=[],this.options.result={totalAttempt:0,totalIncorrect:0,totalCorrect:0,totalQuestions:0},this.options.widgetData.feedbackType||(this.options.widgetData.feedbackType=1),t(this.element).show(),this.options.arrQuestion=t(this.element).find("[type = REORDER]"),this.options.totalQuestion=this.options.arrQuestion.length,this._createSortablesDiv(),this._applySortableFeature(),this.dispatchEvent("ON_INIT")},_createSortablesDiv:function(){var e=this;t.each(this.options.arrQuestion,function(s,r){var i,o=t(r).html().split(" ");t(this).prop("ans",o.slice(0)),e._shuffle(o),o.join("")==t(r).html().replace(/\s/g,"")&&e._shuffle(o),i=t(r).text().replace(/\s/g,""),e.options.answerArray.push(i),t(r).html(""),t(r).attr("serial")&&t("<div class='"+e.options.widgetData.styleSerial+"'> "+t(r).attr("serial")+"</div>").insertBefore(t(r)),e._processWordsArray(r,o),e._applySortableFeature(r),1===e.options.widgetData.feedbackType&&($feedback=t("<div style='position:relative; display:inline-block;'></div>"),$feedback.prop("correct",t("<div class='"+e.options.widgetData.styleCorrect+"'></div>")),$feedback.append($feedback.prop("correct")),$feedback.prop("incorrect",t("<div class='"+e.options.widgetData.styleIncorrect+"'></div>")),$feedback.append($feedback.prop("incorrect")),t(this).prop("feedback",$feedback))})},_processWordsArray:function(e,s){var r=this;t.each(s,function(s,i){var o;o=t("<div class='"+r.options.widgetData.styleClass+"'>"+i+" </div>"),t(e).append(o)})},_applySortableFeature:function(e){var s=this;t(e).sortable({start:function(e){s.options.startX=e.clientX,s.options.startY=e.clientY,s.options.widgetData.stylePlaceHolder&&(t(".ui-sortable-placeholder").css("visibility","visible"),t(".ui-sortable-placeholder").addClass(s.options.widgetData.stylePlaceHolder))},update:function(e,s){t(this).append(s.helper)},sort:function(t,e){var r,i,o;o=s._getScale(),1!==o&&(r=(t.clientX-s.options.startX)/o,i=(t.clientY-s.options.startY)/o,e.helper.css("position","relative"),e.helper.css("left",r+"px"),e.helper.css("top",i+"px"))},change:function(){t(this).sortable("refreshPositions")}})},_getScale:function(){var e,s,r=/matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;return t("#mPlayer").css("-webkit-transform")?s=t("#mPlayer").css("-webkit-transform").match(r):t("#mPlayer").css("transform")?s=t("#mPlayer").css("transform").match(r):t("#mPlayer").css("-ms-transform")&&(s=t("#mPlayer").css("-ms-transform").match(r)),e=s?parseFloat(s[1]):1},_shuffle:function(t){t.sort(function(){return Math.round(Math.random())-.5})},checkAnswer:function(e){var s=this;t.each(this.options.arrQuestion,function(r){s.options.answerArray[r]==t(this).text().replace(/\s/g,"")?(s._showCorrectFeedback(this),"CORRECT"==e&&t(this).sortable("disable")):(s._showIncorrectFeedback(this),"INCORRECT"==e&&t(this).sortable("disable"))}),this.dispatchEvent("ON_CHECK_ANSWER")},reset:function(e){var s,r=this;(void 0===e||0===e.length)&&(e="ALL"),t.each(this.options.arrQuestion,function(i){r.options.answerArray[i]==t(this).text().replace(/\s/g,"")?("CORRECT"==e||"ALL"==e)&&(t(this).sortable("destroy"),t(this).html(""),s=t(this).prop("ans").slice(0),r._shuffle(s),r._processWordsArray(this,s),r._applySortableFeature(this)):("INCORRECT"==e||"ALL"==e)&&(t(this).sortable("destroy"),t(this).html(""),s=t(this).prop("ans").slice(0),r._shuffle(s),r._shuffle(s),r._processWordsArray(this,s),r._applySortableFeature(this))}),this.dispatchEvent("ON_RESET")},_showCorrectFeedback:function(e){1===this.options.widgetData.feedbackType&&(t(e).prop("feedback").prop("correct").show(),t(e).prop("feedback").prop("incorrect").hide(),t(e).append(t(e).prop("feedback")))},_showIncorrectFeedback:function(e){1===this.options.widgetData.feedbackType&&(t(e).prop("feedback").prop("incorrect").show(),t(e).prop("feedback").prop("correct").hide(),t(e).append(t(e).prop("feedback")))},_resetFeedback:function(e){1===this.options.widgetData.feedbackType&&t(e).prop("feedback").remove()},disable:function(e,s){var r=this;(void 0===s||0===s.length)&&(s="ALL"),e="true"==e||e===!0?!0:!1,t.each(this.options.arrQuestion,function(i){r.options.answerArray[i]==t(this).text().replace(/\s/g,"")?("CORRECT"==s||"ALL"==s)&&(e?t(this).sortable("disable"):t(this).sortable("enable")):("INCORRECT"==s||"ALL"==s)&&(e?t(this).sortable("disable"):t(this).sortable("enable"))})},hideFeedback:function(){},showAnswer:function(e,s){var r,i=this;t.each(this.options.arrQuestion,function(o){i.options.answerArray[o]==t(this).text().replace(/\s/g,"")?(("CORRECT"==e||"ALL"==e)&&t(this).sortable("disable"),("CORRECT"==s||"ALL"==s)&&i._resetFeedback(this)):(t(this).sortable("destroy"),t(this).html(""),r=t(this).prop("ans"),i._processWordsArray(this,r),i._applySortableFeature(this),("INCORRECT"==e||"ALL"==e)&&t(this).sortable("disable"),("INCORRECT"==s||"ALL"==s)&&i._resetFeedback(this))}),this.dispatchEvent("ON_SHOW_ANSWER")},result:function(){return this.options.result},destroy:function(){t.each(this.options.arrQuestion,function(){t(this).sortable("destroy")}),this.options.arrQuestion=null}})}(jQuery);