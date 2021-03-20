define(["marionette","components/case/case","components/multiplechoice/model"],function(t,e,i){var s;return s=e.extend({objData:null,answer_dict:{},template:_.template(""),feedback:null,objHint:null,count:0,objLives:null,comp_state_obj:{},model:null,clickcounter:0,clickedStatus:!1,bEditor:!1,initialize:function(t){this.answer_dict={},this.objData=t,this.model=new i(t),this.componentType="multiplechoice"},onRender:function(){void 0!==this.objData.styleClass&&($(this.$el).addClass(this.objData.styleClass),$(this.el).attr("id",this.strCompId))},onShow:function(){var t=this;this.model.get("shuffle")&&setTimeout(function(){t.shuffleOptions()},130),setTimeout(function(){_.filter(t.answer_dict,function(e){e.$el.find('[id^="button"]').parent().addClass("selectedbtntoggle").on("click",function(){t.clickcounter++,"scq"===t.objData.setstate&&t.bEditor===!1&&($(this).parent().parent().find('span[id^="button"]').parent().removeClass("defaultbtntoggle").addClass("selectedbtntoggle"),$(this).removeClass("selectedbtntoggle").addClass("defaultbtntoggle")),"mcq"===t.objData.setstate&&t.bEditor===!1&&($(this).removeClass("selectedbtntoggle").addClass("defaultbtntoggle"),t.clickcounter>1&&($(this).removeClass("defaultbtntoggle").addClass("selectedbtntoggle"),t.clickcounter=0))})})},400)}}),s.prototype.ANSWER_CHECK_COMPLETE_EVENT="answerCheckCompleteEvent",s.prototype.SHOW_FEEDBACK_EVENT="showFeedbackEvent",s.prototype.RESET_COMPLETE_EVENT="resetCompleteEvent",s.prototype.CORRECT_ANSWER_SHOWN_EVENT="correctAnswerShownEvent",s.prototype.DISABLE_COMPLETE_EVENT="disabledEvent",s.prototype.ENABLE_COMPLETE_EVENT="enabledEvent",s.prototype.ATTEMPT_OVER_EVENT="attemptOverEvent",s.prototype.GET_STATE_EVENT="getStateEvent",s.prototype.SET_STATE_EVENT="setStateEvent",s.prototype.addChild=function(t){var e,i;switch(e=t.component,i=t.component.componentType){case"answer":this.answer_dict[e.getID()]=e,this.bEditor===!1&&e.on("btnStateChange",this.onAnswerbtnStateChange,this),this.storeChilds(e);break;case"hint":this.objHint=e,this.bEditor===!1;break;case"feedback":this.feedback=e,this.bEditor===!1&&this.feedback.hide();break;case"lives":this.objLives=e;break;default:console.log("invalid component")}this.MultipleChoiceSuper.prototype.addChild.call(this,t)},s.prototype.isValid=function(t){var e=!1;return e="answer"===t||"feedback"===t||"hint"===t||"life"===t||"lives"===t?!0:!1},s.prototype.onAnswerbtnStateChange=function(t){var e=this;"scq"===this.objData.setstate&&this.bEditor===!1&&_.filter(e.answer_dict,function(e){e.getID()!==t.target.getID()&&e.changeBtnState(t.target)})},s.prototype.checkAnswer=function(){var t=!0;_.filter(this.answer_dict,function(e){e.hideHint(),e.checkAnswer()===!1&&(t=!1)}),null!==this.feedback&&this.feedback.showFeedback(t),this.attempt(),this.customEventDispatcher(this.ANSWER_CHECK_COMPLETE_EVENT,this,t)},s.prototype.showLives=function(){null!==this.objLives&&this.objLives.showLives()},s.prototype.hideLives=function(){null!==this.objLives&&this.objLives.hideLives()},s.prototype.showHint=function(){null!==this.objHint&&this.objHint.showHint(),_.filter(this.answer_dict,function(t){t.showHint()})},s.prototype.hideHint=function(){null!==this.objHint&&this.objHint.hideHint(),_.filter(this.answer_dict,function(t){t.hideHint()})},s.prototype.attempt=function(){var t=!1;this.objLives&&this.model.set("attempts",this.objLives.getTotalLivesCount()),console.log("count===",this.count),-1===this.count&&void 0===this.count||(++this.count,this.count===parseInt(this.model.get("attempts"),10)&&(t=!0,this.customEventDispatcher(this.ATTEMPT_OVER_EVENT,this,this)),this.objLives.loselife())},s.prototype.shuffleOptions=function(){var t,e,i,s,o,n;for(e=this.answerComponents(),i=e.length;0!==i;)s=Math.floor(Math.random()*i),i-=1,n=e[i],e[i]=e[s],e[s]=n;for(t=0;t<e.length;t+=1)o=this[e[t]],this.$el.append(o.$el)},s.prototype.answerComponents=function(){var t,e;return e=this.model.get("compids"),t=e.length>0?e.split("|"):[]},s.prototype.disable=function(t){_.filter(this.answer_dict,function(e){e.disable(t)}),t?this.customEventDispatcher(this.DISABLE_COMPLETE_EVENT,this,this):this.customEventDispatcher(this.ENABLE_COMPLETE_EVENT,this,this)},s.prototype.showFeedback=function(){_.filter(this.answer_dict,function(t){t.showFeedback()}),this.customEventDispatcher(this.SHOW_FEEDBACK_EVENT,this,this)},s.prototype.hideFeedback=function(){this.feedback&&this.feedback.hideFeedback(),_.filter(this.answer_dict,function(t){t.hideFeedback()}),this.customEventDispatcher(this.SHOW_FEEDBACK_EVENT,this,this)},s.prototype.showAnswer=function(){_.filter(this.answer_dict,function(t){t.showAnswer()}),this.hideFeedback(),this.customEventDispatcher(this.CORRECT_ANSWER_SHOWN_EVENT,this,this)},s.prototype.getState=function(){var t=this;return _.filter(this.answer_dict,function(e){t.comp_state_obj[e.getID()]=e.getState()}),this.customEventDispatcher(this.GET_STATE_EVENT,this,this),t.comp_state_obj},s.prototype.setState=function(t){var e=this;this.reset(),void 0!==t&&null!==t&&(e.comp_state_obj=t),_.filter(this.answer_dict,function(t){t.setState(e.comp_state_obj[t.getID()])}),this.customEventDispatcher(this.SET_STATE_EVENT,this,this)},s.prototype.reset=function(){var t,e;for(_.filter(this.answer_dict,function(t){t.reset()}),e=this.model.get("attempts"),this.count=0,t=0;e>t;t++)this.objLives.gainlife();this.feedback&&this.feedback.hideFeedback(),this.customEventDispatcher(this.RESET_COMPLETE_EVENT,this,this)},s.prototype.storeChilds=function(t){var e,i,s;return s=this.model.get("compids"),e=s.length>0?s.split("|"):[],i=e.indexOf(t.getID()),0>i?(e.push(t.getID()),this.model.set("compids",e.join("|")),!0):!1},s.prototype.MultipleChoiceSuper=e,s.prototype.destroy=function(){return this.answer_dict={},this.feedback=null,this.clickcounter=0,this.MultipleChoiceSuper.prototype.destroy.call(this,!0)},s});