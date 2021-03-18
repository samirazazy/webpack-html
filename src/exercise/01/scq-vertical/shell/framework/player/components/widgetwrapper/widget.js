define(["marionette", "player/base/base-layout-comp", "player/widgets/base-widget", "player/widgets/dndonetoone", "player/widgets/dndonetomany"], function (t, e) {
    var i;
    return i = e.extend({
        widgetObject: void 0,
        PATH_PREFIX: "player/widgets/",
        widgetData: null,
        template: _.template("<div></div>"),
        initialize: function (t) {
            var e = this.PATH_PREFIX + t.type,
                i = this;
            this.type = "widget", this.widgetData = t, console.log(e), require([e], function () {
                i.$el.append(i.widgetData.templateId), i.initliazeWidget()
            }), this.objData = t
        },
        onShow: function () {
            this.customEventDispatcher(this.eventConst.CREATION_COMPLETE, this, this)
        }
    }), i.prototype.initliazeWidget = function () {
        var t = this,
            e = this.$el.find("[type=" + this.widgetData.widgetName + "]");
        this.widgetObject = e[this.widgetData.widgetName]({
            WIDGET_EVENT: t.handleWidgetEvent,
            feedbackType: 1,
            widgetData: t.widgetData.widgetData,
            parentDiv: e,
            parentObject: t,
            updatedScale: t.widgetData.updatedScale
        }), this.initWidgetMethod(this.widgetObject[this.widgetData.widgetName]("getFunctionList"))
    }, i.prototype.initWidgetMethod = function (t) {
        var e, a = 0;
        for (a = 0; a < t.length; a++) e = t[a], i.prototype[e] = this.createFunction(e)
    }, i.prototype.createFunction = function (t) {
        var e, i = this;
        return function () {
            e = i.getWidgetRef(), e.widget[e.name]("handleWidgetWrapperCall", t, arguments)
        }
    }, i.prototype.setStageScaleValue = function (t) {
        var e;
        if (this.nStageScale = t, e = this.getWidgetRef(), void 0 != e.widget) try {
            e.widget[e.name]("setStageScaleValue", t)
        } catch (i) {
            console.log("Error received....", i)
        }
    }, i.prototype.getWidgetRef = function () {
        var t = {};
        return t.widget = this.widgetObject, t.name = this.widgetData.widgetName, t
    }, i.prototype.WidgetWrapperSuper = e, i.prototype.handleWidgetEvent = function () {
        var t, e = arguments[1].strEventName;
        t = arguments[1].parent, t.customEventDispatcher(e, t, arguments[1].data)
    }, i.prototype.destroy = function () {
        return this.WidgetWrapperSuper.prototype.destroy.call(this, !0)
    }, i
});
