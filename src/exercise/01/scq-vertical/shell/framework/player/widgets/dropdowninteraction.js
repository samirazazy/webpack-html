!function(e){e.widget("Template.DropDown",e.custom.BASEWIDGET,{options:{totalQuestion:0,$arrInputField:null,answerArray:null,result:null,responseSeperator:"|",groups:{},styleIncorrect:void 0,styleCorrect:void 0,feedbackType:1},_create:function(){},_init:function(){var t=this;this._trigger("ON_INIT"),this.options.answerArray=[],this.options.result={totalAttempt:0,totalIncorrect:0,totalCorrect:0,totalQuestions:0},this.options.widgetData.caseSenstive&&(this.options.caseSenstive=this.options.widgetData.caseSenstive),this.options.widgetData.caseSenstive&&(this.options.responseSeperator=this.options.widgetData.responseSeperator),this.options.widgetData.responseSeperator&&(this.options.styleIncorrect=this.options.widgetData.styleIncorrect),this.options.widgetData.styleCorrect&&(this.options.styleCorrect=this.options.widgetData.styleCorrect),this.options.widgetData.feedbackType&&(this.options.feedbackType=this.options.widgetData.feedbackType),$arrInputField=e(".FIB"),this.options.result.totalQuestions=$arrInputField.length,e.each($arrInputField,function(s){var o,i,r,n,a;o=e(this),r="input"+s,i=e("<select class='FIB'><option id='_blank'></option></select>"),i.attr("id",r),i.attr("grp",o.attr("grp")),n=o.attr("ans").split(t.options.responseSeperator),a=o.attr("data-provider").split(t.options.responseSeperator),e.each(a,function(t,s){i.append(e("<option value='"+s+"'>"+s+"</option>"))}),i.prop("arrOptions",a),o.after(i),o.remove(),$arrInputField[s]=i,1===t.options.feedbackType&&($feedback=e("<div style='position:relative; display:inline-block;'></div>"),$feedback.prop("correct",e("<div class='"+t.options.styleCorrect+"'></div>")),$feedback.append($feedback.prop("correct")),$feedback.prop("incorrect",e("<div class='"+t.options.styleIncorrect+"'></div>")),$feedback.append($feedback.prop("incorrect")),i.prop("feedback",$feedback)),t.options.answerArray.push(n),i.on("change",function(){var s={};e(this).find("#_blank").length&&e(this).find("#_blank").hide(),s.isAllfilled=t._isAllfilled(),t._trigger("ON_CHANGE",{},s)})}),e(t.element).show()},_isAllfilled:function(){var t,s,o=!0;return e.each($arrInputField,function(){t=this[0],s=t.options[t.selectedIndex].id,"_blank"==s&&(o=!1)}),o},checkAnswer:function(t){var s,o,i,r=this;this.options.result.totalAttempt+=1,this.options.result.totalCorrect=0,this.options.result.totalIncorrect=0,void 0!==t&&this.disable(!0,t),this.options.groups={},e.each($arrInputField,function(t){s=r.options.answerArray[t],i=this[0],o=i.options[i.selectedIndex].text,r._checkMatch(s,o)&&r._checkGroupUniqueResponse(e(this),o)?(r.options.result.totalCorrect+=1,r._showCorrectFeedback(e(this))):(r.options.result.totalIncorrect+=1,r._showIncorrectFeedback(e(this)))}),this._trigger("ON_CHECK_ANSWER")},_checkMatch:function(t,s){var o=this,i=[];return o.options.caseSenstive?(i=null,i=t):(e.each(t,function(e,t){i.push(t.toLowerCase())}),s=s.toLowerCase()),-1==i.indexOf(s)?!1:!0},_checkGroupUniqueResponse:function(e,t){var s,o=e.attr("grp");return this.options.caseSenstive||(t=t.toLowerCase()),void 0!==o&&0!==o.length?void 0===this.options.groups[o]?(this.options.groups[o]=[t],!0):(s=this.options.groups[o],-1===s.indexOf(t)?(s.push(t),!0):!1):!0},reset:function(t){var s,o,i,r,n=this;void 0!==t&&"ALL"!==t&&(this.options.groups={}),e.each($arrInputField,function(a){"ALL"===t||void 0===t?(e(this).find("#_blank").show(),e(this).val("").removeAttr("disabled"),n._resetFeedback(e(this)),this[0].selectedIndex=0):(s=n.options.answerArray[a],i=this[0],r=i.options[i.selectedIndex].text,o=n._checkMatch(s,r)&&n._checkGroupUniqueResponse(e(this),r),"CORRECT"===t?o&&(e(this).find("#_blank").show(),e(this).val("").removeAttr("disabled"),n._resetFeedback(e(this)),this[0].selectedIndex=0):"INCORRECT"===t&&(o||(e(this).find("#_blank").show(),e(this).val("").removeAttr("disabled"),n._resetFeedback(e(this)),this[0].selectedIndex=0)))}),this._trigger("ON_RESET")},_showCorrectFeedback:function(t){1===this.options.feedbackType?(e(t).prop("feedback").prop("correct").show(),e(t).prop("feedback").prop("incorrect").hide(),e(t).after(e(t).prop("feedback"))):2===this.options.feedbackType&&(e(t).removeClass(this.options.styleIncorrect),e(t).addClass(this.options.styleCorrect))},_showIncorrectFeedback:function(t){1===this.options.feedbackType?(e(t).prop("feedback").prop("incorrect").show(),e(t).prop("feedback").prop("correct").hide(),e(t).after(e(t).prop("feedback"))):2===this.options.feedbackType&&(e(t).removeClass(this.options.styleCorrect),e(t).addClass(this.options.styleIncorrect))},_resetFeedback:function(t){1===this.options.feedbackType?e(t).prop("feedback").remove():2===this.options.feedbackType&&(e(t).removeClass(this.options.styleCorrect),e(t).removeClass(this.options.styleIncorrect))},disable:function(t,s){var o,i,r,t,n=this;this.options.groups={},e.each($arrInputField,function(a){"ALL"===s||void 0===s?t?e(this).attr("disabled","true"):e(this).removeAttr("disabled"):(i=n.options.answerArray[a],r=this[0],t=r.options[r.selectedIndex].text,o=n._checkMatch(i,t)&&n._checkGroupUniqueResponse(e(this),t),"CORRECT"===s?o&&(t?e(this).attr("disabled","true"):e(this).removeAttr("disabled")):"INCORRECT"===s&&(o||(t?e(this).attr("disabled","true"):e(this).removeAttr("disabled"))))})},hideFeedback:function(t){var s,o,i=this;this.options.groups={},e.each($arrInputField,function(r){"ALL"===t||void 0===t?i._resetFeedback(this):(o=i.options.answerArray[r],select=this[0],val=select.options[select.selectedIndex].text,s=i._checkMatch(o,val)&&i._checkGroupUniqueResponse(e(this),val),"CORRECT"===t?s&&i._resetFeedback(this):"INCORRECT"===t&&(s||i._resetFeedback(this)))})},showAnswer:function(t,s){var o,i,r=this;void 0!==t&&this.disable(!0,t),void 0!==s&&this.hideFeedback(s),answerArray=r.options.answerArray.slice(0),o=[],this.options.groups={},e.each($arrInputField,function(t){arrAns=r.options.answerArray[t],i=this[0],val=i.options[i.selectedIndex].text,o[t]=r._checkMatch(arrAns,val)&&r._checkGroupUniqueResponse(e(this),val)?null:i}),e.each(o,function(t){var s,i,n,a=0;if(o[t])for(arrAns=r.options.answerArray[t],a=arrAns.length,s=0;a>s;){if(i=arrAns[s],r._checkMatch(arrAns,i)&&r._checkGroupUniqueResponse(e(this),i)){n=e(this).prop("arrOptions"),this.selectedIndex=n.indexOf(i)+1;break}s+=1}}),this._trigger("ON_SHOW_ANSWER")},result:function(){return this.options.result},destroy:function(){}})}(jQuery);