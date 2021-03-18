function StringBuffer() {
    this.buffer = []
}

function Utf8EncodeEnumerator(t) {
    this._input = t, this._index = -1, this._buffer = []
}

function Base64DecodeEnumerator(t) {
    this._input = t, this._index = -1, this._buffer = []
}! function(t, e) {
    function i(t) {
        var e = t.length,
            i = re.type(t);
        return re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t) {
        var e = fe[t] = {};
        return re.each(t.match(ae) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = re.expando + Math.random()
    }

    function r(t, i, n) {
        var o;
        if (n === e && 1 === t.nodeType)
            if (o = "data-" + i.replace(ve, "-$1").toLowerCase(), n = t.getAttribute(o), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ye.test(n) ? JSON.parse(n) : n
                } catch (r) {}
                me.set(t, i, n)
            } else n = e;
        return n
    }

    function s() {
        return !0
    }

    function a() {
        return !1
    }

    function l() {
        try {
            return W.activeElement
        } catch (t) {}
    }

    function c(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function h(t, e, i) {
        if (re.isFunction(e)) return re.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return re.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (Ie.test(e)) return re.filter(e, t, i);
            e = re.filter(e, t)
        }
        return re.grep(t, function(t) {
            return ee.call(e, t) >= 0 !== i
        })
    }

    function p(t, e) {
        return re.nodeName(t, "table") && re.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function d(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function u(t) {
        var e = Ve.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function f(t, e) {
        for (var i = t.length, n = 0; i > n; n++) ge.set(t[n], "globalEval", !e || ge.get(e[n], "globalEval"))
    }

    function m(t, e) {
        var i, n, o, r, s, a, l, c;
        if (1 === e.nodeType) {
            if (ge.hasData(t) && (r = ge.access(t), s = ge.set(e, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (i = 0, n = c[o].length; n > i; i++) re.event.add(e, o, c[o][i])
            }
            me.hasData(t) && (a = me.access(t), l = re.extend({}, a), me.set(e, l))
        }
    }

    function g(t, i) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(i || "*") : t.querySelectorAll ? t.querySelectorAll(i || "*") : [];
        return i === e || i && re.nodeName(t, i) ? re.merge([t], n) : n
    }

    function y(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Me.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
    }

    function v(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, o = Ze.length; o--;)
            if (e = Ze[o] + i, e in t) return e;
        return n
    }

    function b(t, e) {
        return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
    }

    function C(e) {
        return t.getComputedStyle(e, null)
    }

    function E(t, e) {
        for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (r[s] = ge.get(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && b(n) && (r[s] = ge.access(n, "olddisplay", S(n.nodeName)))) : r[s] || (o = b(n), (i && "none" !== i || !o) && ge.set(n, "olddisplay", o ? i : re.css(n, "display"))));
        for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function _(t, e, i) {
        var n = Ye.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function T(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += re.css(t, i + Qe[r], !0, o)), n ? ("content" === i && (s -= re.css(t, "padding" + Qe[r], !0, o)), "margin" !== i && (s -= re.css(t, "border" + Qe[r] + "Width", !0, o))) : (s += re.css(t, "padding" + Qe[r], !0, o), "padding" !== i && (s += re.css(t, "border" + Qe[r] + "Width", !0, o)));
        return s
    }

    function A(t, e, i) {
        var n = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = C(t),
            s = re.support.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = $e(t, e, r), (0 > o || null == o) && (o = t.style[e]), Ge.test(o)) return o;
            n = s && (re.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + T(t, e, i || (s ? "border" : "content"), n, r) + "px"
    }

    function S(t) {
        var e = W,
            i = Je[t];
        return i || (i = D(t, e), "none" !== i && i || (Fe = (Fe || re("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (Fe[0].contentWindow || Fe[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), i = D(t, e), Fe.detach()), Je[t] = i), i
    }

    function D(t, e) {
        var i = re(e.createElement(t)).appendTo(e.body),
            n = re.css(i[0], "display");
        return i.remove(), n
    }

    function w(t, e, i, n) {
        var o;
        if (re.isArray(e)) re.each(e, function(e, o) {
            i || ei.test(t) ? n(t, o) : w(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
        });
        else if (i || "object" !== re.type(e)) n(t, e);
        else
            for (o in e) w(t + "[" + o + "]", e[o], i, n)
    }

    function I(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0,
                r = e.toLowerCase().match(ae) || [];
            if (re.isFunction(i))
                for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function P(t, i, n, o) {
        function r(l) {
            var c;
            return s[l] = !0, re.each(t[l] || [], function(t, l) {
                var h = l(i, n, o);
                return "string" != typeof h || a || s[h] ? a ? !(c = h) : e : (i.dataTypes.unshift(h), r(h), !1)
            }), c
        }
        var s = {},
            a = t === vi;
        return r(i.dataTypes[0]) || !s["*"] && r("*")
    }

    function R(t, i) {
        var n, o, r = re.ajaxSettings.flatOptions || {};
        for (n in i) i[n] !== e && ((r[n] ? t : o || (o = {}))[n] = i[n]);
        return o && re.extend(!0, t, o), t
    }

    function O(t, i, n) {
        for (var o, r, s, a, l = t.contents, c = t.dataTypes;
            "*" === c[0];) c.shift(), o === e && (o = t.mimeType || i.getResponseHeader("Content-Type"));
        if (o)
            for (r in l)
                if (l[r] && l[r].test(o)) {
                    c.unshift(r);
                    break
                }
        if (c[0] in n) s = c[0];
        else {
            for (r in n) {
                if (!c[0] || t.converters[r + " " + c[0]]) {
                    s = r;
                    break
                }
                a || (a = r)
            }
            s = s || a
        }
        return s ? (s !== c[0] && c.unshift(s), n[s]) : e
    }

    function x(t, e, i, n) {
        var o, r, s, a, l, c = {},
            h = t.dataTypes.slice();
        if (h[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (r = h.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = h.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], h.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: s ? p : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function j() {
        return setTimeout(function() {
            wi = e
        }), wi = re.now()
    }

    function N(t, e, i) {
        for (var n, o = (ji[e] || []).concat(ji["*"]), r = 0, s = o.length; s > r; r++)
            if (n = o[r].call(i, e, t)) return n
    }

    function L(t, e, i) {
        var n, o, r = 0,
            s = xi.length,
            a = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = wi || j(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, r = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(t, [c, r, i]), 1 > r && l ? i : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: re.extend({}, e),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: wi || j(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = re.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }),
            h = c.props;
        for (M(h, c.opts.specialEasing); s > r; r++)
            if (n = xi[r].call(c, t, h, c.opts)) return n;
        return re.map(h, N, c), re.isFunction(c.opts.start) && c.opts.start.call(t, c), re.fx.timer(re.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function M(t, e) {
        var i, n, o, r, s;
        for (i in t)
            if (n = re.camelCase(i), o = e[n], r = t[i], re.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = re.cssHooks[n], s && "expand" in s) {
                r = s.expand(r), delete t[n];
                for (i in r) i in t || (t[i] = r[i], e[i] = o)
            } else e[n] = o
    }

    function k(t, i, n) {
        var o, r, s, a, l, c, h = this,
            p = {},
            d = t.style,
            u = t.nodeType && b(t),
            f = ge.get(t, "fxshow");
        n.queue || (l = re._queueHooks(t, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, re.queue(t, "fx").length || l.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in i || "width" in i) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === re.css(t, "display") && "none" === re.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (o in i)
            if (r = i[o], Pi.exec(r)) {
                if (delete i[o], s = s || "toggle" === r, r === (u ? "hide" : "show")) {
                    if ("show" !== r || !f || f[o] === e) continue;
                    u = !0
                }
                p[o] = f && f[o] || re.style(t, o)
            }
        if (!re.isEmptyObject(p)) {
            f ? "hidden" in f && (u = f.hidden) : f = ge.access(t, "fxshow", {}), s && (f.hidden = !u), u ? re(t).show() : h.done(function() {
                re(t).hide()
            }), h.done(function() {
                var e;
                ge.remove(t, "fxshow");
                for (e in p) re.style(t, e, p[e])
            });
            for (o in p) a = N(u ? f[o] : 0, o, h), o in f || (f[o] = a.start, u && (a.end = a.start, a.start = "width" === o || "height" === o ? 1 : 0))
        }
    }

    function H(t, e, i, n, o) {
        return new H.prototype.init(t, e, i, n, o)
    }

    function V(t, e) {
        var i, n = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) i = Qe[o], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function B(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var U, $, F = typeof e,
        z = t.location,
        W = t.document,
        Y = W.documentElement,
        G = t.jQuery,
        q = t.$,
        J = {},
        X = [],
        K = "2.0.3",
        Q = X.concat,
        Z = X.push,
        te = X.slice,
        ee = X.indexOf,
        ie = J.toString,
        ne = J.hasOwnProperty,
        oe = K.trim,
        re = function(t, e) {
            return new re.fn.init(t, e, U)
        },
        se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ae = /\S+/g,
        le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^-ms-/,
        pe = /-([\da-z])/gi,
        de = function(t, e) {
            return e.toUpperCase()
        },
        ue = function() {
            W.removeEventListener("DOMContentLoaded", ue, !1), t.removeEventListener("load", ue, !1), re.ready()
        };
    re.fn = re.prototype = {
            jquery: K,
            constructor: re,
            init: function(t, i, n) {
                var o, r;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : le.exec(t), !o || !o[1] && i) return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
                    if (o[1]) {
                        if (i = i instanceof re ? i[0] : i, re.merge(this, re.parseHTML(o[1], i && i.nodeType ? i.ownerDocument || i : W, !0)), ce.test(o[1]) && re.isPlainObject(i))
                            for (o in i) re.isFunction(this[o]) ? this[o](i[o]) : this.attr(o, i[o]);
                        return this
                    }
                    return r = W.getElementById(o[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = W, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return te.call(this)
            },
            get: function(t) {
                return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
            },
            pushStack: function(t) {
                var e = re.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return re.each(this, t, e)
            },
            ready: function(t) {
                return re.ready.promise().done(t), this
            },
            slice: function() {
                return this.pushStack(te.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            map: function(t) {
                return this.pushStack(re.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Z,
            sort: [].sort,
            splice: [].splice
        }, re.fn.init.prototype = re.fn, re.extend = re.fn.extend = function() {
            var t, i, n, o, r, s, a = arguments[0] || {},
                l = 1,
                c = arguments.length,
                h = !1;
            for ("boolean" == typeof a && (h = a, a = arguments[1] || {}, l = 2), "object" == typeof a || re.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++)
                if (null != (t = arguments[l]))
                    for (i in t) n = a[i], o = t[i], a !== o && (h && o && (re.isPlainObject(o) || (r = re.isArray(o))) ? (r ? (r = !1, s = n && re.isArray(n) ? n : []) : s = n && re.isPlainObject(n) ? n : {}, a[i] = re.extend(h, s, o)) : o !== e && (a[i] = o));
            return a
        }, re.extend({
            expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
            noConflict: function(e) {
                return t.$ === re && (t.$ = q), e && t.jQuery === re && (t.jQuery = G), re
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? re.readyWait++ : re.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0, t !== !0 && --re.readyWait > 0 || ($.resolveWith(W, [re]), re.fn.trigger && re(W).trigger("ready").off("ready")))
            },
            isFunction: function(t) {
                return "function" === re.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[ie.call(t)] || "object" : typeof t
            },
            isPlainObject: function(t) {
                if ("object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ne.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                return !0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            error: function(t) {
                throw Error(t)
            },
            parseHTML: function(t, e, i) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (i = e, e = !1), e = e || W;
                var n = ce.exec(t),
                    o = !i && [];
                return n ? [e.createElement(n[1])] : (n = re.buildFragment([t], e, o), o && re(o).remove(), re.merge([], n.childNodes))
            },
            parseJSON: JSON.parse,
            parseXML: function(t) {
                var i, n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = new DOMParser, i = n.parseFromString(t, "text/xml")
                } catch (o) {
                    i = e
                }
                return (!i || i.getElementsByTagName("parsererror").length) && re.error("Invalid XML: " + t), i
            },
            noop: function() {},
            globalEval: function(t) {
                var e, i = eval;
                t = re.trim(t), t && (1 === t.indexOf("use strict") ? (e = W.createElement("script"), e.text = t, W.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(he, "ms-").replace(pe, de)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var o, r = 0,
                    s = t.length,
                    a = i(t);
                if (n) {
                    if (a)
                        for (; s > r && (o = e.apply(t[r], n), o !== !1); r++);
                    else
                        for (r in t)
                            if (o = e.apply(t[r], n), o === !1) break
                } else if (a)
                    for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.call(t[r], r, t[r]), o === !1) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : oe.call(t)
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? re.merge(n, "string" == typeof t ? [t] : t) : Z.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : ee.call(e, t, i)
            },
            merge: function(t, i) {
                var n = i.length,
                    o = t.length,
                    r = 0;
                if ("number" == typeof n)
                    for (; n > r; r++) t[o++] = i[r];
                else
                    for (; i[r] !== e;) t[o++] = i[r++];
                return t.length = o, t
            },
            grep: function(t, e, i) {
                var n, o = [],
                    r = 0,
                    s = t.length;
                for (i = !!i; s > r; r++) n = !!e(t[r], r), i !== n && o.push(t[r]);
                return o
            },
            map: function(t, e, n) {
                var o, r = 0,
                    s = t.length,
                    a = i(t),
                    l = [];
                if (a)
                    for (; s > r; r++) o = e(t[r], r, n), null != o && (l[l.length] = o);
                else
                    for (r in t) o = e(t[r], r, n), null != o && (l[l.length] = o);
                return Q.apply([], l)
            },
            guid: 1,
            proxy: function(t, i) {
                var n, o, r;
                return "string" == typeof i && (n = t[i], i = t, t = n), re.isFunction(t) ? (o = te.call(arguments, 2), r = function() {
                    return t.apply(i || this, o.concat(te.call(arguments)))
                }, r.guid = t.guid = t.guid || re.guid++, r) : e
            },
            access: function(t, i, n, o, r, s, a) {
                var l = 0,
                    c = t.length,
                    h = null == n;
                if ("object" === re.type(n)) {
                    r = !0;
                    for (l in n) re.access(t, i, l, n[l], !0, s, a)
                } else if (o !== e && (r = !0, re.isFunction(o) || (a = !0), h && (a ? (i.call(t, o), i = null) : (h = i, i = function(t, e, i) {
                        return h.call(re(t), i)
                    })), i))
                    for (; c > l; l++) i(t[l], n, a ? o : o.call(t[l], l, i(t[l], n)));
                return r ? t : h ? i.call(t) : c ? i(t[0], n) : s
            },
            now: Date.now,
            swap: function(t, e, i, n) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                o = i.apply(t, n || []);
                for (r in e) t.style[r] = s[r];
                return o
            }
        }), re.ready.promise = function(e) {
            return $ || ($ = re.Deferred(), "complete" === W.readyState ? setTimeout(re.ready) : (W.addEventListener("DOMContentLoaded", ue, !1), t.addEventListener("load", ue, !1))), $.promise(e)
        }, re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            J["[object " + e + "]"] = e.toLowerCase()
        }), U = re(W),
        function(t, e) {
            function i(t, e, i, n) {
                var o, r, s, a, l, c, h, p, f, m;
                if ((e ? e.ownerDocument || e : B) !== x && O(e), e = e || x, i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (N && !n) {
                    if (o = be.exec(t))
                        if (s = o[1]) {
                            if (9 === a) {
                                if (r = e.getElementById(s), !r || !r.parentNode) return i;
                                if (r.id === s) return i.push(r), i
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && H(e, r) && r.id === s) return i.push(r), i
                        } else {
                            if (o[2]) return te.apply(i, e.getElementsByTagName(t)), i;
                            if ((s = o[3]) && T.getElementsByClassName && e.getElementsByClassName) return te.apply(i, e.getElementsByClassName(s)), i
                        }
                    if (T.qsa && (!L || !L.test(t))) {
                        if (p = h = V, f = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = d(t), (h = e.getAttribute("id")) ? p = h.replace(_e, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + u(c[l]);
                            f = ue.test(t) && e.parentNode || e, m = c.join(",")
                        }
                        if (m) try {
                            return te.apply(i, f.querySelectorAll(m)), i
                        } catch (g) {} finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(he, "$1"), e, i, n)
            }

            function n() {
                function t(i, n) {
                    return e.push(i += " ") > S.cacheLength && delete t[e.shift()], t[i] = n
                }
                var e = [];
                return t
            }

            function o(t) {
                return t[V] = !0, t
            }

            function r(t) {
                var e = x.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) S.attrHandle[i[n]] = e
            }

            function a(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || J) - (~t.sourceIndex || J);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function c(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function h(t) {
                return o(function(e) {
                    return e = +e, o(function(i, n) {
                        for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }

            function p() {}

            function d(t, e) {
                var n, o, r, s, a, l, c, h = z[t + " "];
                if (h) return e ? 0 : h.slice(0);
                for (a = t, l = [], c = S.preFilter; a;) {
                    (!n || (o = pe.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = de.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(he, " ")
                    }), a = a.slice(n.length));
                    for (s in S.filter) !(o = ye[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                        value: n,
                        type: s,
                        matches: o
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return e ? a.length : a ? i.error(t) : z(t, l).slice(0)
            }

            function u(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function f(t, e, i) {
                var n = e.dir,
                    o = i && "parentNode" === n,
                    r = $++;
                return e.first ? function(e, i, r) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) return t(e, i, r)
                } : function(e, i, s) {
                    var a, l, c, h = U + " " + r;
                    if (s) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || o) && t(e, i, s)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || o)
                                if (c = e[V] || (e[V] = {}), (l = c[n]) && l[0] === h) {
                                    if ((a = l[1]) === !0 || a === A) return a === !0
                                } else if (l = c[n] = [h], l[1] = t(e, i, s) || A, l[1] === !0) return !0
                }
            }

            function m(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, e, i, n, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!i || i(r, n, o)) && (s.push(r), c && e.push(a));
                return s
            }

            function y(t, e, i, n, r, s) {
                return n && !n[V] && (n = y(n)), r && !r[V] && (r = y(r, s)), o(function(o, s, a, l) {
                    var c, h, p, d = [],
                        u = [],
                        f = s.length,
                        m = o || C(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !o && e ? m : g(m, d, t, a, l),
                        v = i ? r || (o ? t : f || n) ? [] : s : y;
                    if (i && i(y, v, a, l), n)
                        for (c = g(v, u), n(c, [], a, l), h = c.length; h--;)(p = c[h]) && (v[u[h]] = !(y[u[h]] = p));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (c = [], h = v.length; h--;)(p = v[h]) && c.push(y[h] = p);
                                r(null, v = [], c, l)
                            }
                            for (h = v.length; h--;)(p = v[h]) && (c = r ? ie.call(o, p) : d[h]) > -1 && (o[c] = !(s[c] = p))
                        }
                    } else v = g(v === s ? v.splice(f, v.length) : v), r ? r(null, s, v, l) : te.apply(s, v)
                })
            }

            function v(t) {
                for (var e, i, n, o = t.length, r = S.relative[t[0].type], s = r || S.relative[" "], a = r ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, s, !0), c = f(function(t) {
                        return ie.call(e, t) > -1
                    }, s, !0), h = [function(t, i, n) {
                        return !r && (n || i !== P) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n))
                    }]; o > a; a++)
                    if (i = S.relative[t[a].type]) h = [f(m(h), i)];
                    else {
                        if (i = S.filter[t[a].type].apply(null, t[a].matches), i[V]) {
                            for (n = ++a; o > n && !S.relative[t[n].type]; n++);
                            return y(a > 1 && m(h), a > 1 && u(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(he, "$1"), i, n > a && v(t.slice(a, n)), o > n && v(t = t.slice(n)), o > n && u(t))
                        }
                        h.push(i)
                    }
                return m(h)
            }

            function b(t, e) {
                var n = 0,
                    r = e.length > 0,
                    s = t.length > 0,
                    a = function(o, a, l, c, h) {
                        var p, d, u, f = [],
                            m = 0,
                            y = "0",
                            v = o && [],
                            b = null != h,
                            C = P,
                            E = o || s && S.find.TAG("*", h && a.parentNode || a),
                            _ = U += null == C ? 1 : Math.random() || .1;
                        for (b && (P = a !== x && a, A = n); null != (p = E[y]); y++) {
                            if (s && p) {
                                for (d = 0; u = t[d++];)
                                    if (u(p, a, l)) {
                                        c.push(p);
                                        break
                                    }
                                b && (U = _, A = ++n)
                            }
                            r && ((p = !u && p) && m--, o && v.push(p))
                        }
                        if (m += y, r && y !== m) {
                            for (d = 0; u = e[d++];) u(v, f, a, l);
                            if (o) {
                                if (m > 0)
                                    for (; y--;) v[y] || f[y] || (f[y] = Q.call(c));
                                f = g(f)
                            }
                            te.apply(c, f), b && !o && f.length > 0 && m + e.length > 1 && i.uniqueSort(c)
                        }
                        return b && (U = _, P = C), v
                    };
                return r ? o(a) : a
            }

            function C(t, e, n) {
                for (var o = 0, r = e.length; r > o; o++) i(t, e[o], n);
                return n
            }

            function E(t, e, i, n) {
                var o, r, s, a, l, c = d(t);
                if (!n && 1 === c.length) {
                    if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && T.getById && 9 === e.nodeType && N && S.relative[r[1].type]) {
                        if (e = (S.find.ID(s.matches[0].replace(Te, Ae), e) || [])[0], !e) return i;
                        t = t.slice(r.shift().value.length)
                    }
                    for (o = ye.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !S.relative[a = s.type]);)
                        if ((l = S.find[a]) && (n = l(s.matches[0].replace(Te, Ae), ue.test(r[0].type) && e.parentNode || e))) {
                            if (r.splice(o, 1), t = n.length && u(r), !t) return te.apply(i, n), i;
                            break
                        }
                }
                return I(t, c)(n, e, !N, i, ue.test(t)), i
            }
            var _, T, A, S, D, w, I, P, R, O, x, j, N, L, M, k, H, V = "sizzle" + -new Date,
                B = t.document,
                U = 0,
                $ = 0,
                F = n(),
                z = n(),
                W = n(),
                Y = !1,
                G = function(t, e) {
                    return t === e ? (Y = !0, 0) : 0
                },
                q = typeof e,
                J = 1 << 31,
                X = {}.hasOwnProperty,
                K = [],
                Q = K.pop,
                Z = K.push,
                te = K.push,
                ee = K.slice,
                ie = K.indexOf || function(t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                oe = "[\\x20\\t\\r\\n\\f]",
                se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ae = se.replace("w", "w#"),
                le = "\\[" + oe + "*(" + se + ")" + oe + "*(?:([*^$|!~]?=)" + oe + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ae + ")|)|)" + oe + "*\\]",
                ce = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + le.replace(3, 8) + ")*)|.*)\\)|)",
                he = RegExp("^" + oe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + oe + "+$", "g"),
                pe = RegExp("^" + oe + "*," + oe + "*"),
                de = RegExp("^" + oe + "*([>+~]|" + oe + ")" + oe + "*"),
                ue = RegExp(oe + "*[+~]"),
                fe = RegExp("=" + oe + "*([^\\]'\"]*)" + oe + "*\\]", "g"),
                me = RegExp(ce),
                ge = RegExp("^" + ae + "$"),
                ye = {
                    ID: RegExp("^#(" + se + ")"),
                    CLASS: RegExp("^\\.(" + se + ")"),
                    TAG: RegExp("^(" + se.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + le),
                    PSEUDO: RegExp("^" + ce),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + oe + "*(even|odd|(([+-]|)(\\d*)n|)" + oe + "*(?:([+-]|)" + oe + "*(\\d+)|))" + oe + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: RegExp("^" + oe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + oe + "*((?:-\\d)?\\d*)" + oe + "*\\)|)(?=[^-]|$)", "i")
                },
                ve = /^[^{]+\{\s*\[native \w/,
                be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Ce = /^(?:input|select|textarea|button)$/i,
                Ee = /^h\d$/i,
                _e = /'|\\/g,
                Te = RegExp("\\\\([\\da-f]{1,6}" + oe + "?|(" + oe + ")|.)", "ig"),
                Ae = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                te.apply(K = ee.call(B.childNodes), B.childNodes), K[B.childNodes.length].nodeType
            } catch (Se) {
                te = {
                    apply: K.length ? function(t, e) {
                        Z.apply(t, ee.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            w = i.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, T = i.support = {}, O = i.setDocument = function(t) {
                var i = t ? t.ownerDocument || t : B,
                    n = i.defaultView;
                return i !== x && 9 === i.nodeType && i.documentElement ? (x = i, j = i.documentElement, N = !w(i), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                    O()
                }), T.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), T.getElementsByTagName = r(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), T.getElementsByClassName = r(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), T.getById = r(function(t) {
                    return j.appendChild(t).id = V, !i.getElementsByName || !i.getElementsByName(V).length
                }), T.getById ? (S.find.ID = function(t, e) {
                    if (typeof e.getElementById !== q && N) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, S.filter.ID = function(t) {
                    var e = t.replace(Te, Ae);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete S.find.ID, S.filter.ID = function(t) {
                    var e = t.replace(Te, Ae);
                    return function(t) {
                        var i = typeof t.getAttributeNode !== q && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), S.find.TAG = T.getElementsByTagName ? function(t, i) {
                    return typeof i.getElementsByTagName !== q ? i.getElementsByTagName(t) : e
                } : function(t, e) {
                    var i, n = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, S.find.CLASS = T.getElementsByClassName && function(t, i) {
                    return typeof i.getElementsByClassName !== q && N ? i.getElementsByClassName(t) : e
                }, M = [], L = [], (T.qsa = ve.test(i.querySelectorAll)) && (r(function(t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || L.push("\\[" + oe + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || L.push(":checked")
                }), r(function(t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && L.push("[*^$]=" + oe + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (T.matchesSelector = ve.test(k = j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(t) {
                    T.disconnectedMatch = k.call(t, "div"), k.call(t, "[s!='']:x"), M.push("!=", ce)
                }), L = L.length && RegExp(L.join("|")), M = M.length && RegExp(M.join("|")), H = ve.test(j.contains) || j.compareDocumentPosition ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, G = j.compareDocumentPosition ? function(t, e) {
                    if (t === e) return Y = !0, 0;
                    var n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                    return n ? 1 & n || !T.sortDetached && e.compareDocumentPosition(t) === n ? t === i || H(B, t) ? -1 : e === i || H(B, e) ? 1 : R ? ie.call(R, t) - ie.call(R, e) : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function(t, e) {
                    var n, o = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        l = [t],
                        c = [e];
                    if (t === e) return Y = !0, 0;
                    if (!r || !s) return t === i ? -1 : e === i ? 1 : r ? -1 : s ? 1 : R ? ie.call(R, t) - ie.call(R, e) : 0;
                    if (r === s) return a(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) c.unshift(n);
                    for (; l[o] === c[o];) o++;
                    return o ? a(l[o], c[o]) : l[o] === B ? -1 : c[o] === B ? 1 : 0
                }, i) : x
            }, i.matches = function(t, e) {
                return i(t, null, null, e)
            }, i.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== x && O(t), e = e.replace(fe, "='$1']"), !(!T.matchesSelector || !N || M && M.test(e) || L && L.test(e))) try {
                    var n = k.call(t, e);
                    if (n || T.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (o) {}
                return i(e, x, null, [t]).length > 0
            }, i.contains = function(t, e) {
                return (t.ownerDocument || t) !== x && O(t), H(t, e)
            }, i.attr = function(t, i) {
                (t.ownerDocument || t) !== x && O(t);
                var n = S.attrHandle[i.toLowerCase()],
                    o = n && X.call(S.attrHandle, i.toLowerCase()) ? n(t, i, !N) : e;
                return o === e ? T.attributes || !N ? t.getAttribute(i) : (o = t.getAttributeNode(i)) && o.specified ? o.value : null : o
            }, i.error = function(t) {
                throw Error("Syntax error, unrecognized expression: " + t)
            }, i.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    o = 0;
                if (Y = !T.detectDuplicates, R = !T.sortStable && t.slice(0), t.sort(G), Y) {
                    for (; e = t[o++];) e === t[o] && (n = i.push(o));
                    for (; n--;) t.splice(i[n], 1)
                }
                return t
            }, D = i.getText = function(t) {
                var e, i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += D(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[n]; n++) i += D(e);
                return i
            }, S = i.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: ye,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(Te, Ae), t[3] = (t[4] || t[5] || "").replace(Te, Ae), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || i.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && i.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var i, n = !t[5] && t[2];
                        return ye.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : n && me.test(n) && (i = d(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (t[0] = t[0].slice(0, i), t[2] = n.slice(0, i)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(Te, Ae).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = F[t + " "];
                        return e || (e = RegExp("(^|" + oe + ")" + t + "(" + oe + "|$)")) && F(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== q && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(o) {
                            var r = i.attr(o, t);
                            return null == r ? "!=" === e : e ? (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r + " ").indexOf(n) > -1 : "|=" === e ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, n, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var c, h, p, d, u, f, m = r !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                y = a && e.nodeName.toLowerCase(),
                                v = !l && !a;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (p = e; p = p[m];)
                                            if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? g.firstChild : g.lastChild], s && v) {
                                    for (h = g[V] || (g[V] = {}), c = h[t] || [], u = c[0] === U && c[1], d = c[0] === U && c[2], p = u && g.childNodes[u]; p = ++u && p && p[m] || (d = u = 0) || f.pop();)
                                        if (1 === p.nodeType && ++d && p === e) {
                                            h[t] = [U, u, d];
                                            break
                                        }
                                } else if (v && (c = (e[V] || (e[V] = {}))[t]) && c[0] === U) d = c[1];
                                else
                                    for (;
                                        (p = ++u && p && p[m] || (d = u = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++d || (v && ((p[V] || (p[V] = {}))[t] = [U, d]), p !== e)););
                                return d -= o, d === n || 0 === d % n && d / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, r = S.pseudos[t] || S.setFilters[t.toLowerCase()] || i.error("unsupported pseudo: " + t);
                        return r[V] ? r(e) : r.length > 1 ? (n = [t, t, "", e], S.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, i) {
                            for (var n, o = r(t, e), s = o.length; s--;) n = ie.call(t, o[s]), t[n] = !(i[n] = o[s])
                        }) : function(t) {
                            return r(t, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: o(function(t) {
                        var e = [],
                            i = [],
                            n = I(t.replace(he, "$1"));
                        return n[V] ? o(function(t, e, i, o) {
                            for (var r, s = n(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, o, r) {
                            return e[0] = t, n(e, null, r, i), !i.pop()
                        }
                    }),
                    has: o(function(t) {
                        return function(e) {
                            return i(t, e).length > 0
                        }
                    }),
                    contains: o(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || D(e)).indexOf(t) > -1
                        }
                    }),
                    lang: o(function(t) {
                        return ge.test(t || "") || i.error("unsupported lang: " + t), t = t.replace(Te, Ae).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === j
                    },
                    focus: function(t) {
                        return t === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !S.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Ee.test(t.nodeName)
                    },
                    input: function(t) {
                        return Ce.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    },
                    first: h(function() {
                        return [0]
                    }),
                    last: h(function(t, e) {
                        return [e - 1]
                    }),
                    eq: h(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: h(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: h(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: h(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: h(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; e > ++n;) t.push(n);
                        return t
                    })
                }
            }, S.pseudos.nth = S.pseudos.eq;
            for (_ in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) S.pseudos[_] = l(_);
            for (_ in {
                    submit: !0,
                    reset: !0
                }) S.pseudos[_] = c(_);
            p.prototype = S.filters = S.pseudos, S.setFilters = new p, I = i.compile = function(t, e) {
                var i, n = [],
                    o = [],
                    r = W[t + " "];
                if (!r) {
                    for (e || (e = d(t)), i = e.length; i--;) r = v(e[i]), r[V] ? n.push(r) : o.push(r);
                    r = W(t, b(o, n))
                }
                return r
            }, T.sortStable = V.split("").sort(G).join("") === V, T.detectDuplicates = Y, O(), T.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(x.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(t, i, n) {
                return n ? e : t.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
            }), T.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function(t, i, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? e : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || s(ne, function(t, i, n) {
                var o;
                return n ? e : (o = t.getAttributeNode(i)) && o.specified ? o.value : t[i] === !0 ? i.toLowerCase() : null
            }), re.find = i, re.expr = i.selectors, re.expr[":"] = re.expr.pseudos, re.unique = i.uniqueSort, re.text = i.getText, re.isXMLDoc = i.isXML, re.contains = i.contains
        }(t);
    var fe = {};
    re.Callbacks = function(t) {
        t = "string" == typeof t ? fe[t] || n(t) : re.extend({}, t);
        var i, o, r, s, a, l, c = [],
            h = !t.once && [],
            p = function(e) {
                for (i = t.memory && e, o = !0, l = s || 0, s = 0, a = c.length, r = !0; c && a > l; l++)
                    if (c[l].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                r = !1, c && (h ? h.length && p(h.shift()) : i ? c = [] : d.disable())
            },
            d = {
                add: function() {
                    if (c) {
                        var e = c.length;
                        ! function n(e) {
                            re.each(e, function(e, i) {
                                var o = re.type(i);
                                "function" === o ? t.unique && d.has(i) || c.push(i) : i && i.length && "string" !== o && n(i)
                            })
                        }(arguments), r ? a = c.length : i && (s = e, p(i))
                    }
                    return this
                },
                remove: function() {
                    return c && re.each(arguments, function(t, e) {
                        for (var i;
                            (i = re.inArray(e, c, i)) > -1;) c.splice(i, 1), r && (a >= i && a--, l >= i && l--)
                    }), this
                },
                has: function(t) {
                    return t ? re.inArray(t, c) > -1 : !(!c || !c.length)
                },
                empty: function() {
                    return c = [], a = 0, this
                },
                disable: function() {
                    return c = h = i = e, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return h = e, i || d.disable(), this
                },
                locked: function() {
                    return !h
                },
                fireWith: function(t, e) {
                    return !c || o && !h || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? h.push(e) : p(e)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, re.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return re.Deferred(function(i) {
                            re.each(e, function(e, r) {
                                var s = r[0],
                                    a = re.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && re.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? re.extend(t, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, re.each(e, function(t, r) {
                var s = r[2],
                    a = r[3];
                n[r[1]] = s.add, a && s.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? n : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), n.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, i, n, o = 0,
                r = te.call(arguments),
                s = r.length,
                a = 1 !== s || t && re.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : re.Deferred(),
                c = function(t, i, n) {
                    return function(o) {
                        i[t] = this, n[t] = arguments.length > 1 ? te.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (s > 1)
                for (e = Array(s), i = Array(s), n = Array(s); s > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().done(c(o, n, r)).fail(l.reject).progress(c(o, i, e)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    }), re.support = function(e) {
        var i = W.createElement("input"),
            n = W.createDocumentFragment(),
            o = W.createElement("div"),
            r = W.createElement("select"),
            s = r.appendChild(W.createElement("option"));
        return i.type ? (i.type = "checkbox", e.checkOn = "" !== i.value, e.optSelected = s.selected, e.reliableMarginRight = !0, e.boxSizingReliable = !0, e.pixelPosition = !1, i.checked = !0, e.noCloneChecked = i.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !s.disabled, i = W.createElement("input"), i.value = "t", i.type = "radio", e.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), n.appendChild(i), e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, e.focusinBubbles = "onfocusin" in t, o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === o.style.backgroundClip, re(function() {
            var i, n, r = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                s = W.getElementsByTagName("body")[0];
            s && (i = W.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(i).appendChild(o), o.innerHTML = "", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", re.swap(s, null != s.style.zoom ? {
                zoom: 1
            } : {}, function() {
                e.boxSizing = 4 === o.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(o, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(o, null) || {
                width: "4px"
            }).width, n = o.appendChild(W.createElement("div")), n.style.cssText = o.style.cssText = r, n.style.marginRight = n.style.width = "0", o.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), s.removeChild(i))
        }), e) : e
    }({});
    var me, ge, ye = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        ve = /([A-Z])/g;
    o.uid = 1, o.accepts = function(t) {
        return t.nodeType ? 1 === t.nodeType || 9 === t.nodeType : !0
    }, o.prototype = {
        key: function(t) {
            if (!o.accepts(t)) return 0;
            var e = {},
                i = t[this.expando];
            if (!i) {
                i = o.uid++;
                try {
                    e[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, e)
                } catch (n) {
                    e[this.expando] = i, re.extend(t, e)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(t, e, i) {
            var n, o = this.key(t),
                r = this.cache[o];
            if ("string" == typeof e) r[e] = i;
            else if (re.isEmptyObject(r)) re.extend(this.cache[o], e);
            else
                for (n in e) r[n] = e[n];
            return r
        },
        get: function(t, i) {
            var n = this.cache[this.key(t)];
            return i === e ? n : n[i]
        },
        access: function(t, i, n) {
            var o;
            return i === e || i && "string" == typeof i && n === e ? (o = this.get(t, i), o !== e ? o : this.get(t, re.camelCase(i))) : (this.set(t, i, n), n !== e ? n : i)
        },
        remove: function(t, i) {
            var n, o, r, s = this.key(t),
                a = this.cache[s];
            if (i === e) this.cache[s] = {};
            else {
                re.isArray(i) ? o = i.concat(i.map(re.camelCase)) : (r = re.camelCase(i), i in a ? o = [i, r] : (o = r, o = o in a ? [o] : o.match(ae) || [])), n = o.length;
                for (; n--;) delete a[o[n]]
            }
        },
        hasData: function(t) {
            return !re.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    }, me = new o, ge = new o, re.extend({
        acceptData: o.accepts,
        hasData: function(t) {
            return me.hasData(t) || ge.hasData(t)
        },
        data: function(t, e, i) {
            return me.access(t, e, i)
        },
        removeData: function(t, e) {
            me.remove(t, e)
        },
        _data: function(t, e, i) {
            return ge.access(t, e, i)
        },
        _removeData: function(t, e) {
            ge.remove(t, e)
        }
    }), re.fn.extend({
        data: function(t, i) {
            var n, o, s = this[0],
                a = 0,
                l = null;
            if (t === e) {
                if (this.length && (l = me.get(s), 1 === s.nodeType && !ge.get(s, "hasDataAttrs"))) {
                    for (n = s.attributes; n.length > a; a++) o = n[a].name, 0 === o.indexOf("data-") && (o = re.camelCase(o.slice(5)), r(s, o, l[o]));
                    ge.set(s, "hasDataAttrs", !0)
                }
                return l
            }
            return "object" == typeof t ? this.each(function() {
                me.set(this, t)
            }) : re.access(this, function(i) {
                var n, o = re.camelCase(t);
                if (s && i === e) {
                    if (n = me.get(s, t), n !== e) return n;
                    if (n = me.get(s, o), n !== e) return n;
                    if (n = r(s, o, e), n !== e) return n
                } else this.each(function() {
                    var n = me.get(this, o);
                    me.set(this, o, i), -1 !== t.indexOf("-") && n !== e && me.set(this, t, i)
                })
            }, null, i, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                me.remove(this, t)
            })
        }
    }), re.extend({
        queue: function(t, i, n) {
            var o;
            return t ? (i = (i || "fx") + "queue", o = ge.get(t, i), n && (!o || re.isArray(n) ? o = ge.access(t, i, re.makeArray(n)) : o.push(n)), o || []) : e
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = re.queue(t, e),
                n = i.length,
                o = i.shift(),
                r = re._queueHooks(t, e),
                s = function() {
                    re.dequeue(t, e)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return ge.get(t, i) || ge.access(t, i, {
                empty: re.Callbacks("once memory").add(function() {
                    ge.remove(t, [e + "queue", i])
                })
            })
        }
    }), re.fn.extend({
        queue: function(t, i) {
            var n = 2;
            return "string" != typeof t && (i = t, t = "fx", n--), n > arguments.length ? re.queue(this[0], t) : i === e ? this : this.each(function() {
                var e = re.queue(this, t, i);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && re.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                re.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, i) {
            var n, o = 1,
                r = re.Deferred(),
                s = this,
                a = this.length,
                l = function() {
                    --o || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (i = t, t = e), t = t || "fx"; a--;) n = ge.get(s[a], t + "queueHooks"), n && n.empty && (o++, n.empty.add(l));
            return l(), r.promise(i)
        }
    });
    var be, Ce, Ee = /[\t\r\n\f]/g,
        _e = /\r/g,
        Te = /^(?:input|select|textarea|button)$/i;
    re.fn.extend({
        attr: function(t, e) {
            return re.access(this, re.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                re.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return re.access(this, re.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[re.propFix[t] || t]
            })
        },
        addClass: function(t) {
            var e, i, n, o, r, s = 0,
                a = this.length,
                l = "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ae) || []; a > s; s++)
                    if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : " ")) {
                        for (r = 0; o = e[r++];) 0 > n.indexOf(" " + o + " ") && (n += o + " ");
                        i.className = re.trim(n)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, o, r, s = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ae) || []; a > s; s++)
                    if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                        i.className = t ? re.trim(n) : ""
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : re.isFunction(t) ? this.each(function(i) {
                re(this).toggleClass(t.call(this, i, this.className, e), e)
            }) : this.each(function() {
                if ("string" === i)
                    for (var e, n = 0, o = re(this), r = t.match(ae) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(i === F || "boolean" === i) && (this.className && ge.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ge.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ee, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function(t) {
            var i, n, o, r = this[0];
            return arguments.length ? (o = re.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = o ? t.call(this, n, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), i = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, r, "value") !== e || (this.value = r))
            })) : r ? (i = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], i && "get" in i && (n = i.get(r, "value")) !== e ? n : (n = r.value, "string" == typeof n ? n.replace(_e, "") : null == n ? "" : n)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== o || (re.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && re.nodeName(i.parentNode, "optgroup"))) {
                            if (e = re(i).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var i, n, o = t.options, r = re.makeArray(e), s = o.length; s--;) n = o[s], (n.selected = re.inArray(re(n).val(), r) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        },
        attr: function(t, i, n) {
            var o, r, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? typeof t.getAttribute === F ? re.prop(t, i, n) : (1 === s && re.isXMLDoc(t) || (i = i.toLowerCase(), o = re.attrHooks[i] || (re.expr.match.bool.test(i) ? Ce : be)), n === e ? o && "get" in o && null !== (r = o.get(t, i)) ? r : (r = re.find.attr(t, i), null == r ? e : r) : null !== n ? o && "set" in o && (r = o.set(t, n, i)) !== e ? r : (t.setAttribute(i, n + ""), n) : (re.removeAttr(t, i), e)) : void 0
        },
        removeAttr: function(t, e) {
            var i, n, o = 0,
                r = e && e.match(ae);
            if (r && 1 === t.nodeType)
                for (; i = r[o++];) n = re.propFix[i] || i, re.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!re.support.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, i, n) {
            var o, r, s, a = t.nodeType;
            return t && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a || !re.isXMLDoc(t), s && (i = re.propFix[i] || i, r = re.propHooks[i]), n !== e ? r && "set" in r && (o = r.set(t, n, i)) !== e ? o : t[i] = n : r && "get" in r && null !== (o = r.get(t, i)) ? o : t[i]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || Te.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), Ce = {
        set: function(t, e, i) {
            return e === !1 ? re.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(t, i) {
        var n = re.expr.attrHandle[i] || re.find.attr;
        re.expr.attrHandle[i] = function(t, i, o) {
            var r = re.expr.attrHandle[i],
                s = o ? e : (re.expr.attrHandle[i] = e) != n(t, i, o) ? i.toLowerCase() : null;
            return re.expr.attrHandle[i] = r, s
        }
    }), re.support.optSelected || (re.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(t, i) {
                return re.isArray(i) ? t.checked = re.inArray(re(t).val(), i) >= 0 : e
            }
        }, re.support.checkOn || (re.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Ae = /^key/,
        Se = /^(?:mouse|contextmenu)|click/,
        De = /^(?:focusinfocus|focusoutblur)$/,
        we = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(t, i, n, o, r) {
            var s, a, l, c, h, p, d, u, f, m, g, y = ge.get(t);
            if (y) {
                for (n.handler && (s = n, n = s.handler, r = s.selector), n.guid || (n.guid = re.guid++), (c = y.events) || (c = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                        return typeof re === F || t && re.event.triggered === t.type ? e : re.event.dispatch.apply(a.elem, arguments)
                    }, a.elem = t), i = (i || "").match(ae) || [""], h = i.length; h--;) l = we.exec(i[h]) || [], f = g = l[1], m = (l[2] || "").split(".").sort(), f && (d = re.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = re.event.special[f] || {}, p = re.extend({
                    type: f,
                    origType: g,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: m.join(".")
                }, s), (u = c[f]) || (u = c[f] = [], u.delegateCount = 0, d.setup && d.setup.call(t, o, m, a) !== !1 || t.addEventListener && t.addEventListener(f, a, !1)), d.add && (d.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), r ? u.splice(u.delegateCount++, 0, p) : u.push(p), re.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, o) {
            var r, s, a, l, c, h, p, d, u, f, m, g = ge.hasData(t) && ge.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(ae) || [""], c = e.length; c--;)
                    if (a = we.exec(e[c]) || [], u = m = a[1], f = (a[2] || "").split(".").sort(), u) {
                        for (p = re.event.special[u] || {}, u = (n ? p.delegateType : p.bindType) || u, d = l[u] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;) h = d[r], !o && m !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(r, 1), h.selector && d.delegateCount--, p.remove && p.remove.call(t, h));
                        s && !d.length && (p.teardown && p.teardown.call(t, f, g.handle) !== !1 || re.removeEvent(t, u, g.handle), delete l[u])
                    } else
                        for (u in l) re.event.remove(t, u + e[c], i, n, !0);
                re.isEmptyObject(l) && (delete g.handle, ge.remove(t, "events"))
            }
        },
        trigger: function(i, n, o, r) {
            var s, a, l, c, h, p, d, u = [o || W],
                f = ne.call(i, "type") ? i.type : i,
                m = ne.call(i, "namespace") ? i.namespace.split(".") : [];
            if (a = l = o = o || W, 3 !== o.nodeType && 8 !== o.nodeType && !De.test(f + re.event.triggered) && (f.indexOf(".") >= 0 && (m = f.split("."), f = m.shift(), m.sort()), h = 0 > f.indexOf(":") && "on" + f, i = i[re.expando] ? i : new re.Event(f, "object" == typeof i && i), i.isTrigger = r ? 2 : 3, i.namespace = m.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = o), n = null == n ? [i] : re.makeArray(n, [i]), d = re.event.special[f] || {}, r || !d.trigger || d.trigger.apply(o, n) !== !1)) {
                if (!r && !d.noBubble && !re.isWindow(o)) {
                    for (c = d.delegateType || f, De.test(c + f) || (a = a.parentNode); a; a = a.parentNode) u.push(a), l = a;
                    l === (o.ownerDocument || W) && u.push(l.defaultView || l.parentWindow || t)
                }
                for (s = 0;
                    (a = u[s++]) && !i.isPropagationStopped();) i.type = s > 1 ? c : d.bindType || f, p = (ge.get(a, "events") || {})[i.type] && ge.get(a, "handle"), p && p.apply(a, n), p = h && a[h], p && re.acceptData(a) && p.apply && p.apply(a, n) === !1 && i.preventDefault();
                return i.type = f, r || i.isDefaultPrevented() || d._default && d._default.apply(u.pop(), n) !== !1 || !re.acceptData(o) || h && re.isFunction(o[f]) && !re.isWindow(o) && (l = o[h], l && (o[h] = null), re.event.triggered = f, o[f](), re.event.triggered = e, l && (o[h] = l)), i.result
            }
        },
        dispatch: function(t) {
            t = re.event.fix(t);
            var i, n, o, r, s, a = [],
                l = te.call(arguments),
                c = (ge.get(this, "events") || {})[t.type] || [],
                h = re.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                for (a = re.event.handlers.call(this, t, c), i = 0;
                    (r = a[i++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, o = ((re.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), o !== e && (t.result = o) === !1 && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, i) {
            var n, o, r, s, a = [],
                l = i.delegateCount,
                c = t.target;
            if (l && c.nodeType && (!t.button || "click" !== t.type))
                for (; c !== this; c = c.parentNode || this)
                    if (c.disabled !== !0 || "click" !== t.type) {
                        for (o = [], n = 0; l > n; n++) s = i[n], r = s.selector + " ", o[r] === e && (o[r] = s.needsContext ? re(r, this).index(c) >= 0 : re.find(r, this, null, [c]).length), o[r] && o.push(s);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return i.length > l && a.push({
                elem: this,
                handlers: i.slice(l)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, i) {
                var n, o, r, s = i.button;
                return null == t.pageX && null != i.clientX && (n = t.target.ownerDocument || W, o = n.documentElement, r = n.body, t.pageX = i.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), t.pageY = i.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[re.expando]) return t;
            var e, i, n, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Se.test(o) ? this.mouseHooks : Ae.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new re.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
            return t.target || (t.target = W), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : e
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : e
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : e
                },
                _default: function(t) {
                    return re.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var o = re.extend(new re.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? re.event.trigger(o, null, e) : re.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
        }
    }, re.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }, re.Event = function(t, i) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.getPreventDefault && t.getPreventDefault() ? s : a) : this.type = t, i && re.extend(this, i), this.timeStamp = t && t.timeStamp || re.now(), this[re.expando] = !0, e) : new re.Event(t, i)
    }, re.Event.prototype = {
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = s, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = s, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = s, this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        re.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return (!o || o !== n && !re.contains(n, o)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), re.support.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = 0,
            n = function(t) {
                re.event.simulate(e, t.target, re.event.fix(t), !0)
            };
        re.event.special[e] = {
            setup: function() {
                0 === i++ && W.addEventListener(t, n, !0)
            },
            teardown: function() {
                0 === --i && W.removeEventListener(t, n, !0)
            }
        }
    }), re.fn.extend({
        on: function(t, i, n, o, r) {
            var s, l;
            if ("object" == typeof t) {
                "string" != typeof i && (n = n || i, i = e);
                for (l in t) this.on(l, i, n, t[l], r);
                return this
            }
            if (null == n && null == o ? (o = i, n = i = e) : null == o && ("string" == typeof i ? (o = n, n = e) : (o = n, n = i, i = e)), o === !1) o = a;
            else if (!o) return this;
            return 1 === r && (s = o, o = function(t) {
                return re().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = re.guid++)), this.each(function() {
                re.event.add(this, t, o, n, i)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, i, n) {
            var o, r;
            if (t && t.preventDefault && t.handleObj) return o = t.handleObj, re(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, i, t[r]);
                return this
            }
            return (i === !1 || "function" == typeof i) && (n = i, i = e), n === !1 && (n = a), this.each(function() {
                re.event.remove(this, t, n, i)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                re.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, i) {
            var n = this[0];
            return n ? re.event.trigger(t, i, n, !0) : e
        }
    });
    var Ie = /^.[^:#\[\.,]*$/,
        Pe = /^(?:parents|prev(?:Until|All))/,
        Re = re.expr.match.needsContext,
        Oe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.fn.extend({
        find: function(t) {
            var e, i = [],
                n = this,
                o = n.length;
            if ("string" != typeof t) return this.pushStack(re(t).filter(function() {
                for (e = 0; o > e; e++)
                    if (re.contains(n[e], this)) return !0
            }));
            for (e = 0; o > e; e++) re.find(t, n[e], i);
            return i = this.pushStack(o > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        has: function(t) {
            var e = re(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (re.contains(this, e[t])) return !0
            })
        },
        not: function(t) {
            return this.pushStack(h(this, t || [], !0))
        },
        filter: function(t) {
            return this.pushStack(h(this, t || [], !1))
        },
        is: function(t) {
            return !!h(this, "string" == typeof t && Re.test(t) ? re(t) : t || [], !1).length
        },
        closest: function(t, e) {
            for (var i, n = 0, o = this.length, r = [], s = Re.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (11 > i.nodeType && (s ? s.index(i) > -1 : 1 === i.nodeType && re.find.matchesSelector(i, t))) {
                        i = r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? re.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ee.call(re(t), this[0]) : ee.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            var i = "string" == typeof t ? re(t, e) : re.makeArray(t && t.nodeType ? [t] : t),
                n = re.merge(this.get(), i);
            return this.pushStack(re.unique(n))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return re.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return re.dir(t, "parentNode", i)
        },
        next: function(t) {
            return c(t, "nextSibling")
        },
        prev: function(t) {
            return c(t, "previousSibling")
        },
        nextAll: function(t) {
            return re.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return re.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return re.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return re.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return re.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || re.merge([], t.childNodes)
        }
    }, function(t, e) {
        re.fn[t] = function(i, n) {
            var o = re.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = re.filter(n, o)), this.length > 1 && (Oe[t] || re.unique(o), Pe.test(t) && o.reverse()), this.pushStack(o)
        }
    }), re.extend({
        filter: function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? re.find.matchesSelector(n, t) ? [n] : [] : re.find.matches(t, re.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        },
        dir: function(t, i, n) {
            for (var o = [], r = n !== e;
                (t = t[i]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && re(t).is(n)) break;
                    o.push(t)
                }
            return o
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    });
    var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        je = /<([\w:]+)/,
        Ne = /<|&#?\w+;/,
        Le = /<(?:script|style|link)/i,
        Me = /^(?:checkbox|radio)$/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td, re.fn.extend({
        text: function(t) {
            return re.access(this, function(t) {
                return t === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? re.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || re.cleanData(g(i)), i.parentNode && (e && re.contains(i.ownerDocument, i) && f(g(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (re.cleanData(g(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return re.clone(this, t, e)
            })
        },
        html: function(t) {
            return re.access(this, function(t) {
                var i = this[0] || {},
                    n = 0,
                    o = this.length;
                if (t === e && 1 === i.nodeType) return i.innerHTML;
                if ("string" == typeof t && !Le.test(t) && !Ue[(je.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(xe, "<$1></$2>");
                    try {
                        for (; o > n; n++) i = this[n] || {}, 1 === i.nodeType && (re.cleanData(g(i, !1)), i.innerHTML = t);
                        i = 0
                    } catch (r) {}
                }
                i && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = re.map(this, function(t) {
                    return [t.nextSibling, t.parentNode]
                }),
                e = 0;
            return this.domManip(arguments, function(i) {
                var n = t[e++],
                    o = t[e++];
                o && (n && n.parentNode !== o && (n = this.nextSibling), re(this).remove(), o.insertBefore(i, n))
            }, !0), e ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e, i) {
            t = Q.apply([], t);
            var n, o, r, s, a, l, c = 0,
                h = this.length,
                p = this,
                f = h - 1,
                m = t[0],
                y = re.isFunction(m);
            if (y || !(1 >= h || "string" != typeof m || re.support.checkClone) && ke.test(m)) return this.each(function(n) {
                var o = p.eq(n);
                y && (t[0] = m.call(this, n, o.html())), o.domManip(t, e, i)
            });
            if (h && (n = re.buildFragment(t, this[0].ownerDocument, !1, !i && this), o = n.firstChild, 1 === n.childNodes.length && (n = o), o)) {
                for (r = re.map(g(n, "script"), d), s = r.length; h > c; c++) a = n, c !== f && (a = re.clone(a, !0, !0), s && re.merge(r, g(a, "script"))), e.call(this[c], a, c);
                if (s)
                    for (l = r[r.length - 1].ownerDocument, re.map(r, u), c = 0; s > c; c++) a = r[c], He.test(a.type || "") && !ge.access(a, "globalEval") && re.contains(l, a) && (a.src ? re._evalUrl(a.src) : re.globalEval(a.textContent.replace(Be, "")))
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        re.fn[t] = function(t) {
            for (var i, n = [], o = re(t), r = o.length - 1, s = 0; r >= s; s++) i = s === r ? this : this.clone(!0), re(o[s])[e](i), Z.apply(n, i.get());
            return this.pushStack(n)
        }
    }), re.extend({
        clone: function(t, e, i) {
            var n, o, r, s, a = t.cloneNode(!0),
                l = re.contains(t.ownerDocument, t);
            if (!(re.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (s = g(a), r = g(t), n = 0, o = r.length; o > n; n++) y(r[n], s[n]);
            if (e)
                if (i)
                    for (r = r || g(t), s = s || g(a), n = 0, o = r.length; o > n; n++) m(r[n], s[n]);
                else m(t, a);
            return s = g(a, "script"), s.length > 0 && f(s, !l && g(t, "script")), a
        },
        buildFragment: function(t, e, i, n) {
            for (var o, r, s, a, l, c, h = 0, p = t.length, d = e.createDocumentFragment(), u = []; p > h; h++)
                if (o = t[h], o || 0 === o)
                    if ("object" === re.type(o)) re.merge(u, o.nodeType ? [o] : o);
                    else if (Ne.test(o)) {
                for (r = r || d.appendChild(e.createElement("div")), s = (je.exec(o) || ["", ""])[1].toLowerCase(), a = Ue[s] || Ue._default, r.innerHTML = a[1] + o.replace(xe, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
                re.merge(u, r.childNodes), r = d.firstChild, r.textContent = ""
            } else u.push(e.createTextNode(o));
            for (d.textContent = "", h = 0; o = u[h++];)
                if ((!n || -1 === re.inArray(o, n)) && (l = re.contains(o.ownerDocument, o), r = g(d.appendChild(o), "script"), l && f(r), i))
                    for (c = 0; o = r[c++];) He.test(o.type || "") && i.push(o);
            return d
        },
        cleanData: function(t) {
            for (var i, n, r, s, a, l, c = re.event.special, h = 0;
                (n = t[h]) !== e; h++) {
                if (o.accepts(n) && (a = n[ge.expando], a && (i = ge.cache[a]))) {
                    if (r = Object.keys(i.events || {}), r.length)
                        for (l = 0;
                            (s = r[l]) !== e; l++) c[s] ? re.event.remove(n, s) : re.removeEvent(n, s, i.handle);
                    ge.cache[a] && delete ge.cache[a]
                }
                delete me.cache[n[me.expando]]
            }
        },
        _evalUrl: function(t) {
            return re.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), re.fn.extend({
        wrapAll: function(t) {
            var e;
            return re.isFunction(t) ? this.each(function(e) {
                re(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = re(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return re.isFunction(t) ? this.each(function(e) {
                re(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = re(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = re.isFunction(t);
            return this.each(function(i) {
                re(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var $e, Fe, ze = /^(none|table(?!-c[ea]).+)/,
        We = /^margin/,
        Ye = RegExp("^(" + se + ")(.*)$", "i"),
        Ge = RegExp("^(" + se + ")(?!px)[a-z%]+$", "i"),
        qe = RegExp("^([+-])=(" + se + ")", "i"),
        Je = {
            BODY: "block"
        },
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Qe = ["Top", "Right", "Bottom", "Left"],
        Ze = ["Webkit", "O", "Moz", "ms"];
    re.fn.extend({
        css: function(t, i) {
            return re.access(this, function(t, i, n) {
                var o, r, s = {},
                    a = 0;
                if (re.isArray(i)) {
                    for (o = C(t), r = i.length; r > a; a++) s[i[a]] = re.css(t, i[a], !1, o);
                    return s
                }
                return n !== e ? re.style(t, i, n) : re.css(t, i)
            }, t, i, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                b(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = $e(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, i, n, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, a, l = re.camelCase(i),
                    c = t.style;
                return i = re.cssProps[l] || (re.cssProps[l] = v(c, l)), a = re.cssHooks[i] || re.cssHooks[l], n === e ? a && "get" in a && (r = a.get(t, !1, o)) !== e ? r : c[i] : (s = typeof n, "string" === s && (r = qe.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(t, i)), s = "number"), null == n || "number" === s && isNaN(n) || ("number" !== s || re.cssNumber[l] || (n += "px"), re.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (c[i] = "inherit"), a && "set" in a && (n = a.set(t, n, o)) === e || (c[i] = n)), e)
            }
        },
        css: function(t, i, n, o) {
            var r, s, a, l = re.camelCase(i);
            return i = re.cssProps[l] || (re.cssProps[l] = v(t.style, l)), a = re.cssHooks[i] || re.cssHooks[l], a && "get" in a && (r = a.get(t, !0, n)), r === e && (r = $e(t, i, o)), "normal" === r && i in Ke && (r = Ke[i]), "" === n || n ? (s = parseFloat(r), n === !0 || re.isNumeric(s) ? s || 0 : r) : r
        }
    }), $e = function(t, i, n) {
        var o, r, s, a = n || C(t),
            l = a ? a.getPropertyValue(i) || a[i] : e,
            c = t.style;
        return a && ("" !== l || re.contains(t.ownerDocument, t) || (l = re.style(t, i)), Ge.test(l) && We.test(i) && (o = c.width, r = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = o, c.minWidth = r, c.maxWidth = s)), l
    }, re.each(["height", "width"], function(t, i) {
        re.cssHooks[i] = {
            get: function(t, n, o) {
                return n ? 0 === t.offsetWidth && ze.test(re.css(t, "display")) ? re.swap(t, Xe, function() {
                    return A(t, i, o)
                }) : A(t, i, o) : e
            },
            set: function(t, e, n) {
                var o = n && C(t);
                return _(t, e, n ? T(t, i, n, re.support.boxSizing && "border-box" === re.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), re(function() {
        re.support.reliableMarginRight || (re.cssHooks.marginRight = {
            get: function(t, i) {
                return i ? re.swap(t, {
                    display: "inline-block"
                }, $e, [t, "marginRight"]) : e
            }
        }), !re.support.pixelPosition && re.fn.position && re.each(["top", "left"], function(t, i) {
            re.cssHooks[i] = {
                get: function(t, n) {
                    return n ? (n = $e(t, i), Ge.test(n) ? re(t).position()[i] + "px" : n) : e
                }
            }
        })
    }), re.expr && re.expr.filters && (re.expr.filters.hidden = function(t) {
        return 0 >= t.offsetWidth && 0 >= t.offsetHeight
    }, re.expr.filters.visible = function(t) {
        return !re.expr.filters.hidden(t)
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        re.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + Qe[n] + e] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, We.test(t) || (re.cssHooks[t + e].set = _)
    });
    var ti = /%20/g,
        ei = /\[\]$/,
        ii = /\r?\n/g,
        ni = /^(?:submit|button|image|reset|file)$/i,
        oi = /^(?:input|select|textarea|keygen)/i;
    re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && oi.test(this.nodeName) && !ni.test(t) && (this.checked || !Me.test(t))
            }).map(function(t, e) {
                var i = re(this).val();
                return null == i ? null : re.isArray(i) ? re.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ii, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(ii, "\r\n")
                }
            }).get()
        }
    }), re.param = function(t, i) {
        var n, o = [],
            r = function(t, e) {
                e = re.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (i === e && (i = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) w(n, t[n], i, r);
        return o.join("&").replace(ti, "+")
    }, re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        re.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var ri, si, ai = re.now(),
        li = /\?/,
        ci = /#.*$/,
        hi = /([?&])_=[^&]*/,
        pi = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        di = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ui = /^(?:GET|HEAD)$/,
        fi = /^\/\//,
        mi = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        gi = re.fn.load,
        yi = {},
        vi = {},
        bi = "*/".concat("*");
    try {
        si = z.href
    } catch (Ci) {
        si = W.createElement("a"), si.href = "", si = si.href
    }
    ri = mi.exec(si.toLowerCase()) || [], re.fn.load = function(t, i, n) {
        if ("string" != typeof t && gi) return gi.apply(this, arguments);
        var o, r, s, a = this,
            l = t.indexOf(" ");
        return l >= 0 && (o = t.slice(l), t = t.slice(0, l)), re.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (r = "POST"), a.length > 0 && re.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: i
        }).done(function(t) {
            s = arguments, a.html(o ? re("<div>").append(re.parseHTML(t)).find(o) : t)
        }).complete(n && function(t, e) {
            a.each(n, s || [t.responseText, e, t])
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        re.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: si,
            type: "GET",
            isLocal: di.test(ri[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? R(R(t, re.ajaxSettings), e) : R(re.ajaxSettings, t)
        },
        ajaxPrefilter: I(yi),
        ajaxTransport: I(vi),
        ajax: function(t, i) {
            function n(t, i, n, a) {
                var c, p, v, b, E, T = i;
                2 !== C && (C = 2, l && clearTimeout(l), o = e, s = a || "", _.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, n && (b = O(d, _, n)), b = x(d, b, _, c), c ? (d.ifModified && (E = _.getResponseHeader("Last-Modified"), E && (re.lastModified[r] = E), E = _.getResponseHeader("etag"), E && (re.etag[r] = E)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, v = b.error, c = !v)) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), _.status = t, _.statusText = (i || T) + "", c ? m.resolveWith(u, [p, T, _]) : m.rejectWith(u, [_, T, v]), _.statusCode(y), y = e, h && f.trigger(c ? "ajaxSuccess" : "ajaxError", [_, d, c ? p : v]), g.fireWith(u, [_, T]), h && (f.trigger("ajaxComplete", [_, d]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = e), i = i || {};
            var o, r, s, a, l, c, h, p, d = re.ajaxSetup({}, i),
                u = d.context || d,
                f = d.context && (u.nodeType || u.jquery) ? re(u) : re.event,
                m = re.Deferred(),
                g = re.Callbacks("once memory"),
                y = d.statusCode || {},
                v = {},
                b = {},
                C = 0,
                E = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === C) {
                            if (!a)
                                for (a = {}; e = pi.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === C ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return C || (t = b[i] = b[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return C || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > C)
                                for (e in t) y[e] = [y[e], t[e]];
                            else _.always(t[_.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || E;
                        return o && o.abort(e), n(0, e), this
                    }
                };
            if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, d.url = ((t || d.url || si) + "").replace(ci, "").replace(fi, ri[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(ae) || [""], null == d.crossDomain && (c = mi.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === ri[1] && c[2] === ri[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (ri[3] || ("http:" === ri[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), P(yi, d, i, _), 2 === C) return _;
            h = d.global, h && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ui.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (li.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = hi.test(r) ? r.replace(hi, "$1_=" + ai++) : r + (li.test(r) ? "&" : "?") + "_=" + ai++)), d.ifModified && (re.lastModified[r] && _.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && _.setRequestHeader("If-None-Match", re.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + bi + "; q=0.01" : "") : d.accepts["*"]);
            for (p in d.headers) _.setRequestHeader(p, d.headers[p]);
            if (d.beforeSend && (d.beforeSend.call(u, _, d) === !1 || 2 === C)) return _.abort();
            E = "abort";
            for (p in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[p](d[p]);
            if (o = P(vi, d, i, _)) {
                _.readyState = 1, h && f.trigger("ajaxSend", [_, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                    _.abort("timeout")
                }, d.timeout));
                try {
                    C = 1, o.send(v, n)
                } catch (T) {
                    if (!(2 > C)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return _
        },
        getJSON: function(t, e, i) {
            return re.get(t, e, i, "json")
        },
        getScript: function(t, i) {
            return re.get(t, e, i, "script")
        }
    }), re.each(["get", "post"], function(t, i) {
        re[i] = function(t, n, o, r) {
            return re.isFunction(n) && (r = r || o, o = n, n = e), re.ajax({
                url: t,
                type: i,
                dataType: r,
                data: n,
                success: o
            })
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), re.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, o) {
                    e = re("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), W.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Ei = [],
        _i = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ei.pop() || re.expando + "_" + ai++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function(i, n, o) {
        var r, s, a, l = i.jsonp !== !1 && (_i.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && _i.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (r = i.jsonpCallback = re.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(_i, "$1" + r) : i.jsonp !== !1 && (i.url += (li.test(i.url) ? "&" : "?") + i.jsonp + "=" + r), i.converters["script json"] = function() {
            return a || re.error(r + " was not called"), a[0]
        }, i.dataTypes[0] = "json", s = t[r], t[r] = function() {
            a = arguments
        }, o.always(function() {
            t[r] = s, i[r] && (i.jsonpCallback = n.jsonpCallback, Ei.push(r)), a && re.isFunction(s) && s(a[0]), a = s = e
        }), "script") : e
    }), re.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Ti = re.ajaxSettings.xhr(),
        Ai = {
            0: 200,
            1223: 204
        },
        Si = 0,
        Di = {};
    t.ActiveXObject && re(t).on("unload", function() {
        for (var t in Di) Di[t]();
        Di = e
    }), re.support.cors = !!Ti && "withCredentials" in Ti, re.support.ajax = Ti = !!Ti, re.ajaxTransport(function(t) {
        var i;
        return re.support.cors || Ti && !t.crossDomain ? {
            send: function(n, o) {
                var r, s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) a[r] = t.xhrFields[r];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) a.setRequestHeader(r, n[r]);
                i = function(t) {
                    return function() {
                        i && (delete Di[s], i = a.onload = a.onerror = null, "abort" === t ? a.abort() : "error" === t ? o(a.status || 404, a.statusText) : o(Ai[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                            text: a.responseText
                        } : e, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), a.onerror = i("error"), i = Di[s = Si++] = i("abort"), a.send(t.hasContent && t.data || null)
            },
            abort: function() {
                i && i()
            }
        } : e
    });
    var wi, Ii, Pi = /^(?:toggle|show|hide)$/,
        Ri = RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$", "i"),
        Oi = /queueHooks$/,
        xi = [k],
        ji = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    o = Ri.exec(e),
                    r = o && o[3] || (re.cssNumber[t] ? "" : "px"),
                    s = (re.cssNumber[t] || "px" !== r && +n) && Ri.exec(re.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +n || 1;
                    do a = a || ".5", s /= a, re.style(i.elem, t, s + r); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return o && (s = i.start = +s || +n || 0, i.unit = r, i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), i
            }]
        };
    re.Animation = re.extend(L, {
        tweener: function(t, e) {
            re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, o = t.length; o > n; n++) i = t[n], ji[i] = ji[i] || [], ji[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? xi.unshift(t) : xi.push(t)
        }
    }), re.Tween = H, H.prototype = {
        constructor: H,
        init: function(t, e, i, n, o, r) {
            this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (re.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = H.propHooks[this.prop];
            return t && t.get ? t.get(this) : H.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = H.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.each(["toggle", "show", "hide"], function(t, e) {
        var i = re.fn[e];
        re.fn[e] = function(t, n, o) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(V(e, !0), t, n, o)
        }
    }), re.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(b).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var o = re.isEmptyObject(t),
                r = re.speed(e, i, n),
                s = function() {
                    var e = L(this, re.extend({}, t), r);
                    (o || ge.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(t, i, n) {
            var o = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    i = null != t && t + "queueHooks",
                    r = re.timers,
                    s = ge.get(this);
                if (i) s[i] && s[i].stop && o(s[i]);
                else
                    for (i in s) s[i] && s[i].stop && Oi.test(i) && o(s[i]);
                for (i = r.length; i--;) r[i].elem !== this || null != t && r[i].queue !== t || (r[i].anim.stop(n), e = !1, r.splice(i, 1));
                (e || !n) && re.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, i = ge.get(this),
                    n = i[t + "queue"],
                    o = i[t + "queueHooks"],
                    r = re.timers,
                    s = n ? n.length : 0;
                for (i.finish = !0, re.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), re.each({
        slideDown: V("show"),
        slideUp: V("hide"),
        slideToggle: V("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        re.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), re.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? re.extend({}, t) : {
            complete: i || !i && e || re.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !re.isFunction(e) && e
        };
        return n.duration = re.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in re.fx.speeds ? re.fx.speeds[n.duration] : re.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            re.isFunction(n.old) && n.old.call(this), n.queue && re.dequeue(this, n.queue)
        }, n
    }, re.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.timers = [], re.fx = H.prototype.init, re.fx.tick = function() {
        var t, i = re.timers,
            n = 0;
        for (wi = re.now(); i.length > n; n++) t = i[n], t() || i[n] !== t || i.splice(n--, 1);
        i.length || re.fx.stop(), wi = e
    }, re.fx.timer = function(t) {
        t() && re.timers.push(t) && re.fx.start()
    }, re.fx.interval = 13, re.fx.start = function() {
        Ii || (Ii = setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function() {
        clearInterval(Ii), Ii = null
    }, re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, re.fx.step = {}, re.expr && re.expr.filters && (re.expr.filters.animated = function(t) {
        return re.grep(re.timers, function(e) {
            return t === e.elem
        }).length
    }), re.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            re.offset.setOffset(this, t, e)
        });
        var i, n, o = this[0],
            r = {
                top: 0,
                left: 0
            },
            s = o && o.ownerDocument;
        return s ? (i = s.documentElement, re.contains(i, o) ? (typeof o.getBoundingClientRect !== F && (r = o.getBoundingClientRect()), n = B(s), {
            top: r.top + n.pageYOffset - i.clientTop,
            left: r.left + n.pageXOffset - i.clientLeft
        }) : r) : void 0
    }, re.offset = {
        setOffset: function(t, e, i) {
            var n, o, r, s, a, l, c, h = re.css(t, "position"),
                p = re(t),
                d = {};
            "static" === h && (t.style.position = "relative"), a = p.offset(), r = re.css(t, "top"), l = re.css(t, "left"), c = ("absolute" === h || "fixed" === h) && (r + l).indexOf("auto") > -1, c ? (n = p.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : p.css(d)
        }
    }, re.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - re.css(i, "marginTop", !0),
                    left: e.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Y; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                return t || Y
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(i, n) {
        var o = "pageYOffset" === n;
        re.fn[i] = function(r) {
            return re.access(this, function(i, r, s) {
                var a = B(i);
                return s === e ? a ? a[n] : i[r] : (a ? a.scrollTo(o ? t.pageXOffset : s, o ? s : t.pageYOffset) : i[r] = s, e)
            }, i, r, arguments.length, null)
        }
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(t, i) {
        re.each({
            padding: "inner" + t,
            content: i,
            "": "outer" + t
        }, function(n, o) {
            re.fn[o] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (o === !0 || r === !0 ? "margin" : "border");
                return re.access(this, function(i, n, o) {
                    var r;
                    return re.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (r = i.documentElement, Math.max(i.body["scroll" + t], r["scroll" + t], i.body["offset" + t], r["offset" + t], r["client" + t])) : o === e ? re.css(i, n, a) : re.style(i, n, o, a)
                }, i, s ? o : e, s, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = re : "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    }), "object" == typeof t && "object" == typeof t.document && (t.jQuery = t.$ = re)
}(window),
function() {
    var t = this,
        e = t._,
        i = {},
        n = Array.prototype,
        o = Object.prototype,
        r = Function.prototype,
        s = n.push,
        a = n.slice,
        l = n.concat,
        c = o.toString,
        h = o.hasOwnProperty,
        p = n.forEach,
        d = n.map,
        u = n.reduce,
        f = n.reduceRight,
        m = n.filter,
        g = n.every,
        y = n.some,
        v = n.indexOf,
        b = n.lastIndexOf,
        C = Array.isArray,
        E = Object.keys,
        _ = r.bind,
        T = function(t) {
            return t instanceof T ? t : this instanceof T ? (this._wrapped = t, void 0) : new T(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = T), exports._ = T) : t._ = T, T.VERSION = "1.5.2";
    var A = T.each = T.forEach = function(t, e, n) {
        if (null != t)
            if (p && t.forEach === p) t.forEach(e, n);
            else if (t.length === +t.length) {
            for (var o = 0, r = t.length; r > o; o++)
                if (e.call(n, t[o], o, t) === i) return
        } else
            for (var s = T.keys(t), o = 0, r = s.length; r > o; o++)
                if (e.call(n, t[s[o]], s[o], t) === i) return
    };
    T.map = T.collect = function(t, e, i) {
        var n = [];
        return null == t ? n : d && t.map === d ? t.map(e, i) : (A(t, function(t, o, r) {
            n.push(e.call(i, t, o, r))
        }), n)
    };
    var S = "Reduce of empty array with no initial value";
    T.reduce = T.foldl = T.inject = function(t, e, i, n) {
        var o = arguments.length > 2;
        if (null == t && (t = []), u && t.reduce === u) return n && (e = T.bind(e, n)), o ? t.reduce(e, i) : t.reduce(e);
        if (A(t, function(t, r, s) {
                o ? i = e.call(n, i, t, r, s) : (i = t, o = !0)
            }), !o) throw new TypeError(S);
        return i
    }, T.reduceRight = T.foldr = function(t, e, i, n) {
        var o = arguments.length > 2;
        if (null == t && (t = []), f && t.reduceRight === f) return n && (e = T.bind(e, n)), o ? t.reduceRight(e, i) : t.reduceRight(e);
        var r = t.length;
        if (r !== +r) {
            var s = T.keys(t);
            r = s.length
        }
        if (A(t, function(a, l, c) {
                l = s ? s[--r] : --r, o ? i = e.call(n, i, t[l], l, c) : (i = t[l], o = !0)
            }), !o) throw new TypeError(S);
        return i
    }, T.find = T.detect = function(t, e, i) {
        var n;
        return D(t, function(t, o, r) {
            return e.call(i, t, o, r) ? (n = t, !0) : void 0
        }), n
    }, T.filter = T.select = function(t, e, i) {
        var n = [];
        return null == t ? n : m && t.filter === m ? t.filter(e, i) : (A(t, function(t, o, r) {
            e.call(i, t, o, r) && n.push(t)
        }), n)
    }, T.reject = function(t, e, i) {
        return T.filter(t, function(t, n, o) {
            return !e.call(i, t, n, o)
        }, i)
    }, T.every = T.all = function(t, e, n) {
        e || (e = T.identity);
        var o = !0;
        return null == t ? o : g && t.every === g ? t.every(e, n) : (A(t, function(t, r, s) {
            return (o = o && e.call(n, t, r, s)) ? void 0 : i
        }), !!o)
    };
    var D = T.some = T.any = function(t, e, n) {
        e || (e = T.identity);
        var o = !1;
        return null == t ? o : y && t.some === y ? t.some(e, n) : (A(t, function(t, r, s) {
            return o || (o = e.call(n, t, r, s)) ? i : void 0
        }), !!o)
    };
    T.contains = T.include = function(t, e) {
        return null == t ? !1 : v && t.indexOf === v ? -1 != t.indexOf(e) : D(t, function(t) {
            return t === e
        })
    }, T.invoke = function(t, e) {
        var i = a.call(arguments, 2),
            n = T.isFunction(e);
        return T.map(t, function(t) {
            return (n ? e : t[e]).apply(t, i)
        })
    }, T.pluck = function(t, e) {
        return T.map(t, function(t) {
            return t[e]
        })
    }, T.where = function(t, e, i) {
        return T.isEmpty(e) ? i ? void 0 : [] : T[i ? "find" : "filter"](t, function(t) {
            for (var i in e)
                if (e[i] !== t[i]) return !1;
            return !0
        })
    }, T.findWhere = function(t, e) {
        return T.where(t, e, !0)
    }, T.max = function(t, e, i) {
        if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        if (!e && T.isEmpty(t)) return -1 / 0;
        var n = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(t, function(t, o, r) {
            var s = e ? e.call(i, t, o, r) : t;
            s > n.computed && (n = {
                value: t,
                computed: s
            })
        }), n.value
    }, T.min = function(t, e, i) {
        if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        if (!e && T.isEmpty(t)) return 1 / 0;
        var n = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(t, function(t, o, r) {
            var s = e ? e.call(i, t, o, r) : t;
            s < n.computed && (n = {
                value: t,
                computed: s
            })
        }), n.value
    }, T.shuffle = function(t) {
        var e, i = 0,
            n = [];
        return A(t, function(t) {
            e = T.random(i++), n[i - 1] = n[e], n[e] = t
        }), n
    }, T.sample = function(t, e, i) {
        return arguments.length < 2 || i ? t[T.random(t.length - 1)] : T.shuffle(t).slice(0, Math.max(0, e))
    };
    var w = function(t) {
        return T.isFunction(t) ? t : function(e) {
            return e[t]
        }
    };
    T.sortBy = function(t, e, i) {
        var n = w(e);
        return T.pluck(T.map(t, function(t, e, o) {
            return {
                value: t,
                index: e,
                criteria: n.call(i, t, e, o)
            }
        }).sort(function(t, e) {
            var i = t.criteria,
                n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var I = function(t) {
        return function(e, i, n) {
            var o = {},
                r = null == i ? T.identity : w(i);
            return A(e, function(i, s) {
                var a = r.call(n, i, s, e);
                t(o, a, i)
            }), o
        }
    };
    T.groupBy = I(function(t, e, i) {
        (T.has(t, e) ? t[e] : t[e] = []).push(i)
    }), T.indexBy = I(function(t, e, i) {
        t[e] = i
    }), T.countBy = I(function(t, e) {
        T.has(t, e) ? t[e]++ : t[e] = 1
    }), T.sortedIndex = function(t, e, i, n) {
        i = null == i ? T.identity : w(i);
        for (var o = i.call(n, e), r = 0, s = t.length; s > r;) {
            var a = r + s >>> 1;
            i.call(n, t[a]) < o ? r = a + 1 : s = a
        }
        return r
    }, T.toArray = function(t) {
        return t ? T.isArray(t) ? a.call(t) : t.length === +t.length ? T.map(t, T.identity) : T.values(t) : []
    }, T.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : T.keys(t).length
    }, T.first = T.head = T.take = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : a.call(t, 0, e)
    }, T.initial = function(t, e, i) {
        return a.call(t, 0, t.length - (null == e || i ? 1 : e))
    }, T.last = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, T.rest = T.tail = T.drop = function(t, e, i) {
        return a.call(t, null == e || i ? 1 : e)
    }, T.compact = function(t) {
        return T.filter(t, T.identity)
    };
    var P = function(t, e, i) {
        return e && T.every(t, T.isArray) ? l.apply(i, t) : (A(t, function(t) {
            T.isArray(t) || T.isArguments(t) ? e ? s.apply(i, t) : P(t, e, i) : i.push(t)
        }), i)
    };
    T.flatten = function(t, e) {
        return P(t, e, [])
    }, T.without = function(t) {
        return T.difference(t, a.call(arguments, 1))
    }, T.uniq = T.unique = function(t, e, i, n) {
        T.isFunction(e) && (n = i, i = e, e = !1);
        var o = i ? T.map(t, i, n) : t,
            r = [],
            s = [];
        return A(o, function(i, n) {
            (e ? n && s[s.length - 1] === i : T.contains(s, i)) || (s.push(i), r.push(t[n]))
        }), r
    }, T.union = function() {
        return T.uniq(T.flatten(arguments, !0))
    }, T.intersection = function(t) {
        var e = a.call(arguments, 1);
        return T.filter(T.uniq(t), function(t) {
            return T.every(e, function(e) {
                return T.indexOf(e, t) >= 0
            })
        })
    }, T.difference = function(t) {
        var e = l.apply(n, a.call(arguments, 1));
        return T.filter(t, function(t) {
            return !T.contains(e, t)
        })
    }, T.zip = function() {
        for (var t = T.max(T.pluck(arguments, "length").concat(0)), e = new Array(t), i = 0; t > i; i++) e[i] = T.pluck(arguments, "" + i);
        return e
    }, T.object = function(t, e) {
        if (null == t) return {};
        for (var i = {}, n = 0, o = t.length; o > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, T.indexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = 0,
            o = t.length;
        if (i) {
            if ("number" != typeof i) return n = T.sortedIndex(t, e), t[n] === e ? n : -1;
            n = 0 > i ? Math.max(0, o + i) : i
        }
        if (v && t.indexOf === v) return t.indexOf(e, i);
        for (; o > n; n++)
            if (t[n] === e) return n;
        return -1
    }, T.lastIndexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = null != i;
        if (b && t.lastIndexOf === b) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
        for (var o = n ? i : t.length; o--;)
            if (t[o] === e) return o;
        return -1
    }, T.range = function(t, e, i) {
        arguments.length <= 1 && (e = t || 0, t = 0), i = arguments[2] || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), o = 0, r = new Array(n); n > o;) r[o++] = t, t += i;
        return r
    };
    var R = function() {};
    T.bind = function(t, e) {
        var i, n;
        if (_ && t.bind === _) return _.apply(t, a.call(arguments, 1));
        if (!T.isFunction(t)) throw new TypeError;
        return i = a.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
            R.prototype = t.prototype;
            var o = new R;
            R.prototype = null;
            var r = t.apply(o, i.concat(a.call(arguments)));
            return Object(r) === r ? r : o
        }
    }, T.partial = function(t) {
        var e = a.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(a.call(arguments)))
        }
    }, T.bindAll = function(t) {
        var e = a.call(arguments, 1);
        if (0 === e.length) throw new Error("bindAll must be passed function names");
        return A(e, function(e) {
            t[e] = T.bind(t[e], t)
        }), t
    }, T.memoize = function(t, e) {
        var i = {};
        return e || (e = T.identity),
            function() {
                var n = e.apply(this, arguments);
                return T.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
            }
    }, T.delay = function(t, e) {
        var i = a.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, i)
        }, e)
    }, T.defer = function(t) {
        return T.delay.apply(T, [t, 1].concat(a.call(arguments, 1)))
    }, T.throttle = function(t, e, i) {
        var n, o, r, s = null,
            a = 0;
        i || (i = {});
        var l = function() {
            a = i.leading === !1 ? 0 : new Date, s = null, r = t.apply(n, o)
        };
        return function() {
            var c = new Date;
            a || i.leading !== !1 || (a = c);
            var h = e - (c - a);
            return n = this, o = arguments, 0 >= h ? (clearTimeout(s), s = null, a = c, r = t.apply(n, o)) : s || i.trailing === !1 || (s = setTimeout(l, h)), r
        }
    }, T.debounce = function(t, e, i) {
        var n, o, r, s, a;
        return function() {
            r = this, o = arguments, s = new Date;
            var l = function() {
                    var c = new Date - s;
                    e > c ? n = setTimeout(l, e - c) : (n = null, i || (a = t.apply(r, o)))
                },
                c = i && !n;
            return n || (n = setTimeout(l, e)), c && (a = t.apply(r, o)), a
        }
    }, T.once = function(t) {
        var e, i = !1;
        return function() {
            return i ? e : (i = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, T.wrap = function(t, e) {
        return function() {
            var i = [t];
            return s.apply(i, arguments), e.apply(this, i)
        }
    }, T.compose = function() {
        var t = arguments;
        return function() {
            for (var e = arguments, i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
            return e[0]
        }
    }, T.after = function(t, e) {
        return function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, T.keys = E || function(t) {
        if (t !== Object(t)) throw new TypeError("Invalid object");
        var e = [];
        for (var i in t) T.has(t, i) && e.push(i);
        return e
    }, T.values = function(t) {
        for (var e = T.keys(t), i = e.length, n = new Array(i), o = 0; i > o; o++) n[o] = t[e[o]];
        return n
    }, T.pairs = function(t) {
        for (var e = T.keys(t), i = e.length, n = new Array(i), o = 0; i > o; o++) n[o] = [e[o], t[e[o]]];
        return n
    }, T.invert = function(t) {
        for (var e = {}, i = T.keys(t), n = 0, o = i.length; o > n; n++) e[t[i[n]]] = i[n];
        return e
    }, T.functions = T.methods = function(t) {
        var e = [];
        for (var i in t) T.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, T.extend = function(t) {
        return A(a.call(arguments, 1), function(e) {
            if (e)
                for (var i in e) t[i] = e[i]
        }), t
    }, T.pick = function(t) {
        var e = {},
            i = l.apply(n, a.call(arguments, 1));
        return A(i, function(i) {
            i in t && (e[i] = t[i])
        }), e
    }, T.omit = function(t) {
        var e = {},
            i = l.apply(n, a.call(arguments, 1));
        for (var o in t) T.contains(i, o) || (e[o] = t[o]);
        return e
    }, T.defaults = function(t) {
        return A(a.call(arguments, 1), function(e) {
            if (e)
                for (var i in e) void 0 === t[i] && (t[i] = e[i])
        }), t
    }, T.clone = function(t) {
        return T.isObject(t) ? T.isArray(t) ? t.slice() : T.extend({}, t) : t
    }, T.tap = function(t, e) {
        return e(t), t
    };
    var O = function(t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof T && (t = t._wrapped), e instanceof T && (e = e._wrapped);
        var o = c.call(t);
        if (o != c.call(e)) return !1;
        switch (o) {
            case "[object String]":
                return t == String(e);
            case "[object Number]":
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +e;
            case "[object RegExp]":
                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var r = i.length; r--;)
            if (i[r] == t) return n[r] == e;
        var s = t.constructor,
            a = e.constructor;
        if (s !== a && !(T.isFunction(s) && s instanceof s && T.isFunction(a) && a instanceof a)) return !1;
        i.push(t), n.push(e);
        var l = 0,
            h = !0;
        if ("[object Array]" == o) {
            if (l = t.length, h = l == e.length)
                for (; l-- && (h = O(t[l], e[l], i, n)););
        } else {
            for (var p in t)
                if (T.has(t, p) && (l++, !(h = T.has(e, p) && O(t[p], e[p], i, n)))) break;
            if (h) {
                for (p in e)
                    if (T.has(e, p) && !l--) break;
                h = !l
            }
        }
        return i.pop(), n.pop(), h
    };
    T.isEqual = function(t, e) {
        return O(t, e, [], [])
    }, T.isEmpty = function(t) {
        if (null == t) return !0;
        if (T.isArray(t) || T.isString(t)) return 0 === t.length;
        for (var e in t)
            if (T.has(t, e)) return !1;
        return !0
    }, T.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, T.isArray = C || function(t) {
        return "[object Array]" == c.call(t)
    }, T.isObject = function(t) {
        return t === Object(t)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        T["is" + t] = function(e) {
            return c.call(e) == "[object " + t + "]"
        }
    }), T.isArguments(arguments) || (T.isArguments = function(t) {
        return !(!t || !T.has(t, "callee"))
    }), "function" != typeof /./ && (T.isFunction = function(t) {
        return "function" == typeof t
    }), T.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, T.isNaN = function(t) {
        return T.isNumber(t) && t != +t
    }, T.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" == c.call(t)
    }, T.isNull = function(t) {
        return null === t
    }, T.isUndefined = function(t) {
        return void 0 === t
    }, T.has = function(t, e) {
        return h.call(t, e)
    }, T.noConflict = function() {
        return t._ = e, this
    }, T.identity = function(t) {
        return t
    }, T.times = function(t, e, i) {
        for (var n = Array(Math.max(0, t)), o = 0; t > o; o++) n[o] = e.call(i, o);
        return n
    }, T.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    };
    var x = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    x.unescape = T.invert(x.escape);
    var j = {
        escape: new RegExp("[" + T.keys(x.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + T.keys(x.unescape).join("|") + ")", "g")
    };
    T.each(["escape", "unescape"], function(t) {
        T[t] = function(e) {
            return null == e ? "" : ("" + e).replace(j[t], function(e) {
                return x[t][e]
            })
        }
    }), T.result = function(t, e) {
        if (null == t) return void 0;
        var i = t[e];
        return T.isFunction(i) ? i.call(t) : i
    }, T.mixin = function(t) {
        A(T.functions(t), function(e) {
            var i = T[e] = t[e];
            T.prototype[e] = function() {
                var t = [this._wrapped];
                return s.apply(t, arguments), H.call(this, i.apply(T, t))
            }
        })
    };
    var N = 0;
    T.uniqueId = function(t) {
        var e = ++N + "";
        return t ? t + e : e
    }, T.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/,
        M = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        k = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    T.template = function(t, e, i) {
        var n;
        i = T.defaults({}, i, T.templateSettings);
        var o = new RegExp([(i.escape || L).source, (i.interpolate || L).source, (i.evaluate || L).source].join("|") + "|$", "g"),
            r = 0,
            s = "__p+='";
        t.replace(o, function(e, i, n, o, a) {
            return s += t.slice(r, a).replace(k, function(t) {
                return "\\" + M[t]
            }), i && (s += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), o && (s += "';\n" + o + "\n__p+='"), r = a + e.length, e
        }), s += "';\n", i.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            n = new Function(i.variable || "obj", "_", s)
        } catch (a) {
            throw a.source = s, a
        }
        if (e) return n(e, T);
        var l = function(t) {
            return n.call(this, t, T)
        };
        return l.source = "function(" + (i.variable || "obj") + "){\n" + s + "}", l
    }, T.chain = function(t) {
        return T(t).chain()
    };
    var H = function(t) {
        return this._chain ? T(t).chain() : t
    };
    T.mixin(T), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = n[t];
        T.prototype[t] = function() {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" != t && "splice" != t || 0 !== i.length || delete i[0], H.call(this, i)
        }
    }), A(["concat", "join", "slice"], function(t) {
        var e = n[t];
        T.prototype[t] = function() {
            return H.call(this, e.apply(this._wrapped, arguments))
        }
    }), T.extend(T.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this), define("underscore", function(t) {
        return function() {
            var e;
            return e || t._
        }
    }(this)),
    function() {
        {
            var t, e = this,
                i = e.Backbone,
                n = [],
                o = (n.push, n.slice);
            n.splice
        }
        t = "undefined" != typeof exports ? exports : e.Backbone = {}, t.VERSION = "1.1.0";
        var r = e._;
        r || "undefined" == typeof require || (r = require("underscore")), t.$ = e.jQuery || e.Zepto || e.ender || e.$, t.noConflict = function() {
            return e.Backbone = i, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var s = t.Events = {
                on: function(t, e, i) {
                    if (!l(this, "on", t, [e, i]) || !e) return this;
                    this._events || (this._events = {});
                    var n = this._events[t] || (this._events[t] = []);
                    return n.push({
                        callback: e,
                        context: i,
                        ctx: i || this
                    }), this
                },
                once: function(t, e, i) {
                    if (!l(this, "once", t, [e, i]) || !e) return this;
                    var n = this,
                        o = r.once(function() {
                            n.off(t, o), e.apply(this, arguments)
                        });
                    return o._callback = e, this.on(t, o, i)
                },
                off: function(t, e, i) {
                    var n, o, s, a, c, h, p, d;
                    if (!this._events || !l(this, "off", t, [e, i])) return this;
                    if (!t && !e && !i) return this._events = {}, this;
                    for (a = t ? [t] : r.keys(this._events), c = 0, h = a.length; h > c; c++)
                        if (t = a[c], s = this._events[t]) {
                            if (this._events[t] = n = [], e || i)
                                for (p = 0, d = s.length; d > p; p++) o = s[p], (e && e !== o.callback && e !== o.callback._callback || i && i !== o.context) && n.push(o);
                            n.length || delete this._events[t]
                        }
                    return this
                },
                trigger: function(t) {
                    if (!this._events) return this;
                    var e = o.call(arguments, 1);
                    if (!l(this, "trigger", t, e)) return this;
                    var i = this._events[t],
                        n = this._events.all;
                    return i && c(i, e), n && c(n, arguments), this
                },
                stopListening: function(t, e, i) {
                    var n = this._listeningTo;
                    if (!n) return this;
                    var o = !e && !i;
                    i || "object" != typeof e || (i = this), t && ((n = {})[t._listenId] = t);
                    for (var s in n) t = n[s], t.off(e, i, this), (o || r.isEmpty(t._events)) && delete this._listeningTo[s];
                    return this
                }
            },
            a = /\s+/,
            l = function(t, e, i, n) {
                if (!i) return !0;
                if ("object" == typeof i) {
                    for (var o in i) t[e].apply(t, [o, i[o]].concat(n));
                    return !1
                }
                if (a.test(i)) {
                    for (var r = i.split(a), s = 0, l = r.length; l > s; s++) t[e].apply(t, [r[s]].concat(n));
                    return !1
                }
                return !0
            },
            c = function(t, e) {
                var i, n = -1,
                    o = t.length,
                    r = e[0],
                    s = e[1],
                    a = e[2];
                switch (e.length) {
                    case 0:
                        for (; ++n < o;)(i = t[n]).callback.call(i.ctx);
                        return;
                    case 1:
                        for (; ++n < o;)(i = t[n]).callback.call(i.ctx, r);
                        return;
                    case 2:
                        for (; ++n < o;)(i = t[n]).callback.call(i.ctx, r, s);
                        return;
                    case 3:
                        for (; ++n < o;)(i = t[n]).callback.call(i.ctx, r, s, a);
                        return;
                    default:
                        for (; ++n < o;)(i = t[n]).callback.apply(i.ctx, e)
                }
            },
            h = {
                listenTo: "on",
                listenToOnce: "once"
            };
        r.each(h, function(t, e) {
            s[e] = function(e, i, n) {
                var o = this._listeningTo || (this._listeningTo = {}),
                    s = e._listenId || (e._listenId = r.uniqueId("l"));
                return o[s] = e, n || "object" != typeof i || (n = this), e[t](i, n, this), this
            }
        }), s.bind = s.on, s.unbind = s.off, r.extend(t, s);
        var p = t.Model = function(t, e) {
            var i = t || {};
            e || (e = {}), this.cid = r.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {}), i = r.defaults({}, i, r.result(this, "defaults")), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
        };
        r.extend(p.prototype, s, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function() {
                return r.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(t) {
                return this.attributes[t]
            },
            escape: function(t) {
                return r.escape(this.get(t))
            },
            has: function(t) {
                return null != this.get(t)
            },
            set: function(t, e, i) {
                var n, o, s, a, l, c, h, p;
                if (null == t) return this;
                if ("object" == typeof t ? (o = t, i = e) : (o = {})[t] = e, i || (i = {}), !this._validate(o, i)) return !1;
                s = i.unset, l = i.silent, a = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = r.clone(this.attributes), this.changed = {}), p = this.attributes, h = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                for (n in o) e = o[n], r.isEqual(p[n], e) || a.push(n), r.isEqual(h[n], e) ? delete this.changed[n] : this.changed[n] = e, s ? delete p[n] : p[n] = e;
                if (!l) {
                    a.length && (this._pending = !0);
                    for (var d = 0, u = a.length; u > d; d++) this.trigger("change:" + a[d], this, p[a[d]], i)
                }
                if (c) return this;
                if (!l)
                    for (; this._pending;) this._pending = !1, this.trigger("change", this, i);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(t, e) {
                return this.set(t, void 0, r.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function(t) {
                var e = {};
                for (var i in this.attributes) e[i] = void 0;
                return this.set(e, r.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function(t) {
                return null == t ? !r.isEmpty(this.changed) : r.has(this.changed, t)
            },
            changedAttributes: function(t) {
                if (!t) return this.hasChanged() ? r.clone(this.changed) : !1;
                var e, i = !1,
                    n = this._changing ? this._previousAttributes : this.attributes;
                for (var o in t) r.isEqual(n[o], e = t[o]) || ((i || (i = {}))[o] = e);
                return i
            },
            previous: function(t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function() {
                return r.clone(this._previousAttributes)
            },
            fetch: function(t) {
                t = t ? r.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = this,
                    i = t.success;
                return t.success = function(n) {
                    return e.set(e.parse(n, t), t) ? (i && i(e, n, t), e.trigger("sync", e, n, t), void 0) : !1
                }, M(this, t), this.sync("read", this, t)
            },
            save: function(t, e, i) {
                var n, o, s, a = this.attributes;
                if (null == t || "object" == typeof t ? (n = t, i = e) : (n = {})[t] = e, i = r.extend({
                        validate: !0
                    }, i), n && !i.wait) {
                    if (!this.set(n, i)) return !1
                } else if (!this._validate(n, i)) return !1;
                n && i.wait && (this.attributes = r.extend({}, a, n)), void 0 === i.parse && (i.parse = !0);
                var l = this,
                    c = i.success;
                return i.success = function(t) {
                    l.attributes = a;
                    var e = l.parse(t, i);
                    return i.wait && (e = r.extend(n || {}, e)), r.isObject(e) && !l.set(e, i) ? !1 : (c && c(l, t, i), l.trigger("sync", l, t, i), void 0)
                }, M(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = n), s = this.sync(o, this, i), n && i.wait && (this.attributes = a), s
            },
            destroy: function(t) {
                t = t ? r.clone(t) : {};
                var e = this,
                    i = t.success,
                    n = function() {
                        e.trigger("destroy", e, e.collection, t)
                    };
                if (t.success = function(o) {
                        (t.wait || e.isNew()) && n(), i && i(e, o, t), e.isNew() || e.trigger("sync", e, o, t)
                    }, this.isNew()) return t.success(), !1;
                M(this, t);
                var o = this.sync("delete", this, t);
                return t.wait || n(), o
            },
            url: function() {
                var t = r.result(this, "urlRoot") || r.result(this.collection, "url") || L();
                return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(t) {
                return t
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return null == this.id
            },
            isValid: function(t) {
                return this._validate({}, r.extend(t || {}, {
                    validate: !0
                }))
            },
            _validate: function(t, e) {
                if (!e.validate || !this.validate) return !0;
                t = r.extend({}, this.attributes, t);
                var i = this.validationError = this.validate(t, e) || null;
                return i ? (this.trigger("invalid", this, i, r.extend(e, {
                    validationError: i
                })), !1) : !0
            }
        });
        var d = ["keys", "values", "pairs", "invert", "pick", "omit"];
        r.each(d, function(t) {
            p.prototype[t] = function() {
                var e = o.call(arguments);
                return e.unshift(this.attributes), r[t].apply(r, e)
            }
        });
        var u = t.Collection = function(t, e) {
                e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, r.extend({
                    silent: !0
                }, e))
            },
            f = {
                add: !0,
                remove: !0,
                merge: !0
            },
            m = {
                add: !0,
                remove: !1
            };
        r.extend(u.prototype, s, {
            model: p,
            initialize: function() {},
            toJSON: function(t) {
                return this.map(function(e) {
                    return e.toJSON(t)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(t, e) {
                return this.set(t, r.extend({
                    merge: !1
                }, e, m))
            },
            remove: function(t, e) {
                var i = !r.isArray(t);
                t = i ? [t] : r.clone(t), e || (e = {});
                var n, o, s, a;
                for (n = 0, o = t.length; o > n; n++) a = t[n] = this.get(t[n]), a && (delete this._byId[a.id], delete this._byId[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, e.silent || (e.index = s, a.trigger("remove", a, this, e)), this._removeReference(a));
                return i ? t[0] : t
            },
            set: function(t, e) {
                e = r.defaults({}, e, f), e.parse && (t = this.parse(t, e));
                var i = !r.isArray(t);
                t = i ? t ? [t] : [] : r.clone(t);
                var n, o, s, a, l, c, h, d = e.at,
                    u = this.model,
                    m = this.comparator && null == d && e.sort !== !1,
                    g = r.isString(this.comparator) ? this.comparator : null,
                    y = [],
                    v = [],
                    b = {},
                    C = e.add,
                    E = e.merge,
                    _ = e.remove,
                    T = !m && C && _ ? [] : !1;
                for (n = 0, o = t.length; o > n; n++) {
                    if (l = t[n], s = l instanceof p ? a = l : l[u.prototype.idAttribute], c = this.get(s)) _ && (b[c.cid] = !0), E && (l = l === a ? a.attributes : l, e.parse && (l = c.parse(l, e)), c.set(l, e), m && !h && c.hasChanged(g) && (h = !0)), t[n] = c;
                    else if (C) {
                        if (a = t[n] = this._prepareModel(l, e), !a) continue;
                        y.push(a), a.on("all", this._onModelEvent, this), this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a)
                    }
                    T && T.push(c || a)
                }
                if (_) {
                    for (n = 0, o = this.length; o > n; ++n) b[(a = this.models[n]).cid] || v.push(a);
                    v.length && this.remove(v, e)
                }
                if (y.length || T && T.length)
                    if (m && (h = !0), this.length += y.length, null != d)
                        for (n = 0, o = y.length; o > n; n++) this.models.splice(d + n, 0, y[n]);
                    else {
                        T && (this.models.length = 0);
                        var A = T || y;
                        for (n = 0, o = A.length; o > n; n++) this.models.push(A[n])
                    }
                if (h && this.sort({
                        silent: !0
                    }), !e.silent) {
                    for (n = 0, o = y.length; o > n; n++)(a = y[n]).trigger("add", a, this, e);
                    (h || T && T.length) && this.trigger("sort", this, e)
                }
                return i ? t[0] : t
            },
            reset: function(t, e) {
                e || (e = {});
                for (var i = 0, n = this.models.length; n > i; i++) this._removeReference(this.models[i]);
                return e.previousModels = this.models, this._reset(), t = this.add(t, r.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), t
            },
            push: function(t, e) {
                return this.add(t, r.extend({
                    at: this.length
                }, e))
            },
            pop: function(t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t), e
            },
            unshift: function(t, e) {
                return this.add(t, r.extend({
                    at: 0
                }, e))
            },
            shift: function(t) {
                var e = this.at(0);
                return this.remove(e, t), e
            },
            slice: function() {
                return o.apply(this.models, arguments)
            },
            get: function(t) {
                return null == t ? void 0 : this._byId[t.id] || this._byId[t.cid] || this._byId[t]
            },
            at: function(t) {
                return this.models[t]
            },
            where: function(t, e) {
                return r.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                    for (var i in t)
                        if (t[i] !== e.get(i)) return !1;
                    return !0
                })
            },
            findWhere: function(t) {
                return this.where(t, !0)
            },
            sort: function(t) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}), r.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(r.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
            },
            pluck: function(t) {
                return r.invoke(this.models, "get", t)
            },
            fetch: function(t) {
                t = t ? r.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = t.success,
                    i = this;
                return t.success = function(n) {
                    var o = t.reset ? "reset" : "set";
                    i[o](n, t), e && e(i, n, t), i.trigger("sync", i, n, t)
                }, M(this, t), this.sync("read", this, t)
            },
            create: function(t, e) {
                if (e = e ? r.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
                e.wait || this.add(t, e);
                var i = this,
                    n = e.success;
                return e.success = function(t, e, o) {
                    o.wait && i.add(t, o), n && n(t, e, o)
                }, t.save(null, e), t
            },
            parse: function(t) {
                return t
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(t, e) {
                if (t instanceof p) return t.collection || (t.collection = this), t;
                e = e ? r.clone(e) : {}, e.collection = this;
                var i = new this.model(t, e);
                return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
            },
            _removeReference: function(t) {
                this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(t, e, i, n) {
                ("add" !== t && "remove" !== t || i === this) && ("destroy" === t && this.remove(e, n), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
            }
        });
        var g = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
        r.each(g, function(t) {
            u.prototype[t] = function() {
                var e = o.call(arguments);
                return e.unshift(this.models), r[t].apply(r, e)
            }
        });
        var y = ["groupBy", "countBy", "sortBy"];
        r.each(y, function(t) {
            u.prototype[t] = function(e, i) {
                var n = r.isFunction(e) ? e : function(t) {
                    return t.get(e)
                };
                return r[t](this.models, n, i)
            }
        });
        var v = t.View = function(t) {
                this.cid = r.uniqueId("view"), t || (t = {}), r.extend(this, r.pick(t, C)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            b = /^(\S+)\s*(.*)$/,
            C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        r.extend(v.prototype, s, {
            tagName: "div",
            $: function(t) {
                return this.$el.find(t)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(e, i) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], i !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(t) {
                if (!t && !(t = r.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var e in t) {
                    var i = t[e];
                    if (r.isFunction(i) || (i = this[t[e]]), i) {
                        var n = e.match(b),
                            o = n[1],
                            s = n[2];
                        i = r.bind(i, this), o += ".delegateEvents" + this.cid, "" === s ? this.$el.on(o, i) : this.$el.on(o, s, i)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el) this.setElement(r.result(this, "el"), !1);
                else {
                    var e = r.extend({}, r.result(this, "attributes"));
                    this.id && (e.id = r.result(this, "id")), this.className && (e["class"] = r.result(this, "className"));
                    var i = t.$("<" + r.result(this, "tagName") + ">").attr(e);
                    this.setElement(i, !1)
                }
            }
        }), t.sync = function(e, i, n) {
            var o = _[e];
            r.defaults(n || (n = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var s = {
                type: o,
                dataType: "json"
            };
            if (n.url || (s.url = r.result(i, "url") || L()), null != n.data || !i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(n.attrs || i.toJSON(n))), n.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                    model: s.data
                } : {}), n.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                s.type = "POST", n.emulateJSON && (s.data._method = o);
                var a = n.beforeSend;
                n.beforeSend = function(t) {
                    return t.setRequestHeader("X-HTTP-Method-Override", o), a ? a.apply(this, arguments) : void 0
                }
            }
            "GET" === s.type || n.emulateJSON || (s.processData = !1), "PATCH" === s.type && E && (s.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var l = n.xhr = t.ajax(r.extend(s, n));
            return i.trigger("request", i, l, n), l
        };
        var E = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            _ = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var T = t.Router = function(t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            A = /\((.*?)\)/g,
            S = /(\(\?)?:\w+/g,
            D = /\*\w+/g,
            w = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        r.extend(T.prototype, s, {
            initialize: function() {},
            route: function(e, i, n) {
                r.isRegExp(e) || (e = this._routeToRegExp(e)), r.isFunction(i) && (n = i, i = ""), n || (n = this[i]);
                var o = this;
                return t.history.route(e, function(r) {
                    var s = o._extractParameters(e, r);
                    n && n.apply(o, s), o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), t.history.trigger("route", o, i, s)
                }), this
            },
            navigate: function(e, i) {
                return t.history.navigate(e, i), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = r.result(this, "routes");
                    for (var t, e = r.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function(t) {
                return t = t.replace(w, "\\$&").replace(A, "(?:$1)?").replace(S, function(t, e) {
                    return e ? t : "([^/]+)"
                }).replace(D, "(.*?)"), new RegExp("^" + t + "$")
            },
            _extractParameters: function(t, e) {
                var i = t.exec(e).slice(1);
                return r.map(i, function(t) {
                    return t ? decodeURIComponent(t) : null
                })
            }
        });
        var I = t.History = function() {
                this.handlers = [], r.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            P = /^[#\/]|\s+$/g,
            R = /^\/+|\/+$/g,
            O = /msie [\w.]+/,
            x = /\/$/,
            j = /[?#].*$/;
        I.started = !1, r.extend(I.prototype, s, {
            interval: 50,
            getHash: function(t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getFragment: function(t, e) {
                if (null == t)
                    if (this._hasPushState || !this._wantsHashChange || e) {
                        t = this.location.pathname;
                        var i = this.root.replace(x, "");
                        t.indexOf(i) || (t = t.slice(i.length))
                    } else t = this.getHash();
                return t.replace(P, "")
            },
            start: function(e) {
                if (I.started) throw new Error("Backbone.history has already been started");
                I.started = !0, this.options = r.extend({
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var i = this.getFragment(),
                    n = document.documentMode,
                    o = O.exec(navigator.userAgent.toLowerCase()) && (!n || 7 >= n);
                this.root = ("/" + this.root + "/").replace(R, "/"), o && this._wantsHashChange && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(i)), this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                var s = this.location,
                    a = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !a) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                    this._hasPushState && a && s.hash && (this.fragment = this.getHash().replace(P, ""), this.history.replaceState({}, document.title, this.root + this.fragment + s.search))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function() {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), I.started = !1
            },
            route: function(t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function() {
                var t = this.getFragment();
                return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), this.loadUrl(), void 0)
            },
            loadUrl: function(t) {
                return t = this.fragment = this.getFragment(t), r.any(this.handlers, function(e) {
                    return e.route.test(t) ? (e.callback(t), !0) : void 0
                })
            },
            navigate: function(t, e) {
                if (!I.started) return !1;
                e && e !== !0 || (e = {
                    trigger: !!e
                });
                var i = this.root + (t = this.getFragment(t || ""));
                if (t = t.replace(j, ""), this.fragment !== t) {
                    if (this.fragment = t, "" === t && "/" !== i && (i = i.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(i);
                        this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                    }
                    return e.trigger ? this.loadUrl(t) : void 0
                }
            },
            _updateHash: function(t, e, i) {
                if (i) {
                    var n = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(n + "#" + e)
                } else t.hash = "#" + e
            }
        }), t.history = new I;
        var N = function(t, e) {
            var i, n = this;
            i = t && r.has(t, "constructor") ? t.constructor : function() {
                return n.apply(this, arguments)
            }, r.extend(i, n, e);
            var o = function() {
                this.constructor = i
            };
            return o.prototype = n.prototype, i.prototype = new o, t && r.extend(i.prototype, t), i.__super__ = n.prototype, i
        };
        p.extend = u.extend = T.extend = v.extend = I.extend = N;
        var L = function() {
                throw new Error('A "url" property or function must be specified')
            },
            M = function(t, e) {
                var i = e.error;
                e.error = function(n) {
                    i && i(t, n, e), t.trigger("error", t, n, e)
                }
            }
    }.call(this), define("backbone", ["underscore", "jquery"], function(t) {
        return function() {
            var e;
            return e || t.Backbone
        }
    }(this)), Backbone.ChildViewContainer = function(t, e) {
        var i = function(t) {
            this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), e.each(t, this.add, this)
        };
        e.extend(i.prototype, {
            add: function(t, e) {
                var i = t.cid;
                this._views[i] = t, t.model && (this._indexByModel[t.model.cid] = i), e && (this._indexByCustom[e] = i), this._updateLength()
            },
            findByModel: function(t) {
                return this.findByModelCid(t.cid)
            },
            findByModelCid: function(t) {
                var e = this._indexByModel[t];
                return this.findByCid(e)
            },
            findByCustom: function(t) {
                var e = this._indexByCustom[t];
                return this.findByCid(e)
            },
            findByIndex: function(t) {
                return e.values(this._views)[t]
            },
            findByCid: function(t) {
                return this._views[t]
            },
            remove: function(t) {
                var i = t.cid;
                t.model && delete this._indexByModel[t.model.cid], e.any(this._indexByCustom, function(t, e) {
                    return t === i ? (delete this._indexByCustom[e], !0) : void 0
                }, this), delete this._views[i], this._updateLength()
            },
            call: function(t) {
                this.apply(t, e.tail(arguments))
            },
            apply: function(t, i) {
                e.each(this._views, function(n) {
                    e.isFunction(n[t]) && n[t].apply(n, i || [])
                })
            },
            _updateLength: function() {
                this.length = e.size(this._views)
            }
        });
        var n = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        return e.each(n, function(t) {
            i.prototype[t] = function() {
                var i = e.values(this._views),
                    n = [i].concat(e.toArray(arguments));
                return e[t].apply(e, n)
            }
        }), i
    }(Backbone, _), Backbone.Wreqr = function(t, e, i) {
        var n = {};
        return n.Handlers = function(t, e) {
            var i = function(t) {
                this.options = t, this._wreqrHandlers = {}, e.isFunction(this.initialize) && this.initialize(t)
            };
            return i.extend = t.Model.extend, e.extend(i.prototype, t.Events, {
                setHandlers: function(t) {
                    e.each(t, function(t, i) {
                        var n = null;
                        e.isObject(t) && !e.isFunction(t) && (n = t.context, t = t.callback), this.setHandler(i, t, n)
                    }, this)
                },
                setHandler: function(t, e, i) {
                    var n = {
                        callback: e,
                        context: i
                    };
                    this._wreqrHandlers[t] = n, this.trigger("handler:add", t, e, i)
                },
                hasHandler: function(t) {
                    return !!this._wreqrHandlers[t]
                },
                getHandler: function(t) {
                    var e = this._wreqrHandlers[t];
                    if (!e) throw new Error("Handler not found for '" + t + "'");
                    return function() {
                        var t = Array.prototype.slice.apply(arguments);
                        return e.callback.apply(e.context, t)
                    }
                },
                removeHandler: function(t) {
                    delete this._wreqrHandlers[t]
                },
                removeAllHandlers: function() {
                    this._wreqrHandlers = {}
                }
            }), i
        }(t, i), n.CommandStorage = function() {
            var e = function(t) {
                this.options = t, this._commands = {}, i.isFunction(this.initialize) && this.initialize(t)
            };
            return i.extend(e.prototype, t.Events, {
                getCommands: function(t) {
                    var e = this._commands[t];
                    return e || (e = {
                        command: t,
                        instances: []
                    }, this._commands[t] = e), e
                },
                addCommand: function(t, e) {
                    var i = this.getCommands(t);
                    i.instances.push(e)
                },
                clearCommands: function(t) {
                    var e = this.getCommands(t);
                    e.instances = []
                }
            }), e
        }(), n.Commands = function(t) {
            return t.Handlers.extend({
                storageType: t.CommandStorage,
                constructor: function(e) {
                    this.options = e || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                    var i = Array.prototype.slice.call(arguments);
                    t.Handlers.prototype.constructor.apply(this, i)
                },
                execute: function(t, e) {
                    t = arguments[0], e = Array.prototype.slice.call(arguments, 1), this.hasHandler(t) ? this.getHandler(t).apply(this, e) : this.storage.addCommand(t, e)
                },
                _executeCommands: function(t, e, n) {
                    var o = this.storage.getCommands(t);
                    i.each(o.instances, function(t) {
                        e.apply(n, t)
                    }), this.storage.clearCommands(t)
                },
                _initializeStorage: function(t) {
                    var e, n = t.storageType || this.storageType;
                    e = i.isFunction(n) ? new n : n, this.storage = e
                }
            })
        }(n), n.RequestResponse = function(t) {
            return t.Handlers.extend({
                request: function() {
                    var t = arguments[0],
                        e = Array.prototype.slice.call(arguments, 1);
                    return this.getHandler(t).apply(this, e)
                }
            })
        }(n), n.EventAggregator = function(t, e) {
            var i = function() {};
            return i.extend = t.Model.extend, e.extend(i.prototype, t.Events), i
        }(t, i), n
    }(Backbone, Backbone.Marionette, _);
var Marionette = function(t, e, i) {
    function n(t) {
        return s.call(t)
    }

    function o(t, e) {
        var i = new Error(t);
        throw i.name = e || "Error", i
    }
    var r = {};
    e.Marionette = r, r.$ = e.$;
    var s = Array.prototype.slice;
    return r.extend = e.Model.extend, r.getOption = function(t, e) {
            if (t && e) {
                var i;
                return i = t.options && e in t.options && void 0 !== t.options[e] ? t.options[e] : t[e]
            }
        }, r.triggerMethod = function() {
            function t(t, e, i) {
                return i.toUpperCase()
            }
            var e = /(^|:)(\w)/gi,
                n = function(n) {
                    var o = "on" + n.replace(e, t),
                        r = this[o];
                    return i.isFunction(this.trigger) && this.trigger.apply(this, arguments), i.isFunction(r) ? r.apply(this, i.tail(arguments)) : void 0
                };
            return n
        }(), r.MonitorDOMRefresh = function(t) {
            function e(t) {
                t._isShown = !0, o(t)
            }

            function n(t) {
                t._isRendered = !0, o(t)
            }

            function o(t) {
                t._isShown && t._isRendered && r(t) && i.isFunction(t.triggerMethod) && t.triggerMethod("dom:refresh")
            }

            function r(e) {
                return t.contains(e.el)
            }
            return function(t) {
                t.listenTo(t, "show", function() {
                    e(t)
                }), t.listenTo(t, "render", function() {
                    n(t)
                })
            }
        }(document.documentElement),
        function(t) {
            function e(t, e, n, r) {
                var s = r.split(/\s+/);
                i.each(s, function(i) {
                    var r = t[i];
                    r || o("Method '" + i + "' was configured as an event handler, but does not exist."), t.listenTo(e, n, r, t)
                })
            }

            function n(t, e, i, n) {
                t.listenTo(e, i, n, t)
            }

            function r(t, e, n, o) {
                var r = o.split(/\s+/);
                i.each(r, function(i) {
                    var o = t[i];
                    t.stopListening(e, n, o, t)
                })
            }

            function s(t, e, i, n) {
                t.stopListening(e, i, n, t)
            }

            function a(t, e, n, o, r) {
                e && n && (i.isFunction(n) && (n = n.call(t)), i.each(n, function(n, s) {
                    i.isFunction(n) ? o(t, e, s, n) : r(t, e, s, n)
                }))
            }
            t.bindEntityEvents = function(t, i, o) {
                a(t, i, o, n, e)
            }, t.unbindEntityEvents = function(t, e, i) {
                a(t, e, i, s, r)
            }
        }(r), r.Callbacks = function() {
            this._deferred = r.$.Deferred(), this._callbacks = []
        }, i.extend(r.Callbacks.prototype, {
            add: function(t, e) {
                this._callbacks.push({
                    cb: t,
                    ctx: e
                }), this._deferred.done(function(i, n) {
                    e && (i = e), t.call(i, n)
                })
            },
            run: function(t, e) {
                this._deferred.resolve(e, t)
            },
            reset: function() {
                var t = this._callbacks;
                this._deferred = r.$.Deferred(), this._callbacks = [], i.each(t, function(t) {
                    this.add(t.cb, t.ctx)
                }, this)
            }
        }), r.Controller = function(t) {
            this.triggerMethod = r.triggerMethod, this.options = t || {}, i.isFunction(this.initialize) && this.initialize(this.options)
        }, r.Controller.extend = r.extend, i.extend(r.Controller.prototype, e.Events, {
            close: function() {
                this.stopListening(), this.triggerMethod("close"), this.unbind()
            }
        }), r.Region = function(t) {
            if (this.options = t || {}, this.el = r.getOption(this, "el"), !this.el) {
                var e = new Error("An 'el' must be specified for a region.");
                throw e.name = "NoElError", e
            }
            if (this.initialize) {
                var i = Array.prototype.slice.apply(arguments);
                this.initialize.apply(this, i)
            }
        }, i.extend(r.Region, {
            buildRegion: function(t, e) {
                var n = "string" == typeof t,
                    o = "string" == typeof t.selector,
                    r = "undefined" == typeof t.regionType,
                    s = "function" == typeof t;
                if (!s && !n && !o) throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");
                var a, l;
                n && (a = t), t.selector && (a = t.selector, delete t.selector), s && (l = t), !s && r && (l = e), t.regionType && (l = t.regionType, delete t.regionType), (n || s) && (t = {}), t.el = a;
                var c = new l(t);
                return t.parentEl && (c.getEl = function(e) {
                    var n = t.parentEl;
                    return i.isFunction(n) && (n = n()), n.find(e)
                }), c
            }
        }), i.extend(r.Region.prototype, e.Events, {
            show: function(t) {
                this.ensureEl();
                var e = t.isClosed || i.isUndefined(t.$el),
                    n = t !== this.currentView;
                n && this.close(), t.render(), (n || e) && this.open(t), this.currentView = t, r.triggerMethod.call(this, "show", t), r.triggerMethod.call(t, "show")
            },
            ensureEl: function() {
                this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el))
            },
            getEl: function(t) {
                return r.$(t)
            },
            open: function(t) {
                this.$el.empty().append(t.el)
            },
            close: function() {
                var t = this.currentView;
                t && !t.isClosed && (t.close ? t.close() : t.remove && t.remove(), r.triggerMethod.call(this, "close", t), delete this.currentView)
            },
            attachView: function(t) {
                this.currentView = t
            },
            reset: function() {
                this.close(), delete this.$el
            }
        }), r.Region.extend = r.extend, r.RegionManager = function(t) {
            var e = t.Controller.extend({
                    constructor: function(e) {
                        this._regions = {}, t.Controller.prototype.constructor.call(this, e)
                    },
                    addRegions: function(t, e) {
                        var n = {};
                        return i.each(t, function(t, o) {
                            "string" == typeof t && (t = {
                                selector: t
                            }), t.selector && (t = i.defaults({}, t, e));
                            var r = this.addRegion(o, t);
                            n[o] = r
                        }, this), n
                    },
                    addRegion: function(e, n) {
                        var o, r = i.isObject(n),
                            s = i.isString(n),
                            a = !!n.selector;
                        return o = s || r && a ? t.Region.buildRegion(n, t.Region) : i.isFunction(n) ? t.Region.buildRegion(n, t.Region) : n, this._store(e, o), this.triggerMethod("region:add", e, o), o
                    },
                    get: function(t) {
                        return this._regions[t]
                    },
                    removeRegion: function(t) {
                        var e = this._regions[t];
                        this._remove(t, e)
                    },
                    removeRegions: function() {
                        i.each(this._regions, function(t, e) {
                            this._remove(e, t)
                        }, this)
                    },
                    closeRegions: function() {
                        i.each(this._regions, function(t) {
                            t.close()
                        }, this)
                    },
                    close: function() {
                        this.removeRegions();
                        var e = Array.prototype.slice.call(arguments);
                        t.Controller.prototype.close.apply(this, e)
                    },
                    _store: function(t, e) {
                        this._regions[t] = e, this._setLength()
                    },
                    _remove: function(t, e) {
                        e.close(), delete this._regions[t], this._setLength(), this.triggerMethod("region:remove", t, e)
                    },
                    _setLength: function() {
                        this.length = i.size(this._regions)
                    }
                }),
                n = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
            return i.each(n, function(t) {
                e.prototype[t] = function() {
                    var e = i.values(this._regions),
                        n = [e].concat(i.toArray(arguments));
                    return i[t].apply(i, n)
                }
            }), e
        }(r), r.TemplateCache = function(t) {
            this.templateId = t
        }, i.extend(r.TemplateCache, {
            templateCaches: {},
            get: function(t) {
                var e = this.templateCaches[t];
                return e || (e = new r.TemplateCache(t), this.templateCaches[t] = e), e.load()
            },
            clear: function() {
                var t, e = n(arguments),
                    i = e.length;
                if (i > 0)
                    for (t = 0; i > t; t++) delete this.templateCaches[e[t]];
                else this.templateCaches = {}
            }
        }), i.extend(r.TemplateCache.prototype, {
            load: function() {
                if (this.compiledTemplate) return this.compiledTemplate;
                var t = this.loadTemplate(this.templateId);
                return this.compiledTemplate = this.compileTemplate(t), this.compiledTemplate
            },
            loadTemplate: function(t) {
                var e = r.$(t).html();
                return e && 0 !== e.length || o("Could not find template: '" + t + "'", "NoTemplateError"), e
            },
            compileTemplate: function(t) {
                return i.template(t)
            }
        }), r.Renderer = {
            render: function(t, e) {
                if (!t) {
                    var i = new Error("Cannot render the template since it's false, null or undefined.");
                    throw i.name = "TemplateNotFoundError", i
                }
                var n;
                return (n = "function" == typeof t ? t : r.TemplateCache.get(t))(e)
            }
        }, r.View = e.View.extend({
            constructor: function(t) {
                i.bindAll(this, "render");
                var n = Array.prototype.slice.apply(arguments);
                this.options = i.extend({}, i.result(this, "options"), i.isFunction(t) ? t.call(this) : t), this.events = this.normalizeUIKeys(i.result(this, "events")), e.View.prototype.constructor.apply(this, n), r.MonitorDOMRefresh(this), this.listenTo(this, "show", this.onShowCalled, this)
            },
            triggerMethod: r.triggerMethod,
            getTemplate: function() {
                return r.getOption(this, "template")
            },
            mixinTemplateHelpers: function(t) {
                t = t || {};
                var e = r.getOption(this, "templateHelpers");
                return i.isFunction(e) && (e = e.call(this)), i.extend(t, e)
            },
            normalizeUIKeys: function(t) {
                return "undefined" != typeof t ? (i.each(i.keys(t), function(e) {
                    var i = e.split("@ui.");
                    2 === i.length && (t[i[0] + this.ui[i[1]]] = t[e], delete t[e])
                }, this), t) : void 0
            },
            configureTriggers: function() {
                if (this.triggers) {
                    var t = {},
                        e = this.normalizeUIKeys(i.result(this, "triggers"));
                    return i.each(e, function(e, n) {
                        var o = i.isObject(e),
                            r = o ? e.event : e;
                        t[n] = function(t) {
                            if (t) {
                                var i = t.preventDefault,
                                    n = t.stopPropagation,
                                    s = o ? e.preventDefault : i,
                                    a = o ? e.stopPropagation : n;
                                s && i && i.apply(t), a && n && n.apply(t)
                            }
                            var l = {
                                view: this,
                                model: this.model,
                                collection: this.collection
                            };
                            this.triggerMethod(r, l)
                        }
                    }, this), t
                }
            },
            delegateEvents: function(t) {
                this._delegateDOMEvents(t), r.bindEntityEvents(this, this.model, r.getOption(this, "modelEvents")), r.bindEntityEvents(this, this.collection, r.getOption(this, "collectionEvents"))
            },
            _delegateDOMEvents: function(t) {
                t = t || this.events, i.isFunction(t) && (t = t.call(this));
                var n = {},
                    o = this.configureTriggers();
                i.extend(n, t, o), e.View.prototype.delegateEvents.call(this, n)
            },
            undelegateEvents: function() {
                var t = Array.prototype.slice.call(arguments);
                e.View.prototype.undelegateEvents.apply(this, t), r.unbindEntityEvents(this, this.model, r.getOption(this, "modelEvents")), r.unbindEntityEvents(this, this.collection, r.getOption(this, "collectionEvents"))
            },
            onShowCalled: function() {},
            close: function() {
                if (!this.isClosed) {
                    var t = this.triggerMethod("before:close");
                    t !== !1 && (this.isClosed = !0, this.triggerMethod("close"), this.unbindUIElements(), this.remove())
                }
            },
            bindUIElements: function() {
                if (this.ui) {
                    this._uiBindings || (this._uiBindings = this.ui);
                    var t = i.result(this, "_uiBindings");
                    this.ui = {}, i.each(i.keys(t), function(e) {
                        var i = t[e];
                        this.ui[e] = this.$(i)
                    }, this)
                }
            },
            unbindUIElements: function() {
                this.ui && this._uiBindings && (i.each(this.ui, function(t, e) {
                    delete this.ui[e]
                }, this), this.ui = this._uiBindings, delete this._uiBindings)
            }
        }), r.ItemView = r.View.extend({
            constructor: function() {
                r.View.prototype.constructor.apply(this, n(arguments))
            },
            serializeData: function() {
                var t = {};
                return this.model ? t = this.model.toJSON() : this.collection && (t = {
                    items: this.collection.toJSON()
                }), t
            },
            render: function() {
                this.isClosed = !1, this.triggerMethod("before:render", this), this.triggerMethod("item:before:render", this);
                var t = this.serializeData();
                t = this.mixinTemplateHelpers(t);
                var e = this.getTemplate(),
                    i = r.Renderer.render(e, t);
                return this.$el.html(i), this.bindUIElements(), this.triggerMethod("render", this), this.triggerMethod("item:rendered", this), this
            },
            close: function() {
                this.isClosed || (this.triggerMethod("item:before:close"), r.View.prototype.close.apply(this, n(arguments)), this.triggerMethod("item:closed"))
            }
        }), r.CollectionView = r.View.extend({
            itemViewEventPrefix: "itemview",
            constructor: function() {
                this._initChildViewStorage(), r.View.prototype.constructor.apply(this, n(arguments)), this._initialEvents(), this.initRenderBuffer()
            },
            initRenderBuffer: function() {
                this.elBuffer = document.createDocumentFragment(), this._bufferedChildren = []
            },
            startBuffering: function() {
                this.initRenderBuffer(), this.isBuffering = !0
            },
            endBuffering: function() {
                this.isBuffering = !1, this.appendBuffer(this, this.elBuffer), this._triggerShowBufferedChildren(), this.initRenderBuffer()
            },
            _triggerShowBufferedChildren: function() {
                this._isShown && (i.each(this._bufferedChildren, function(t) {
                    r.triggerMethod.call(t, "show")
                }), this._bufferedChildren = [])
            },
            _initialEvents: function() {
                this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this.render, this))
            },
            addChildView: function(t) {
                this.closeEmptyView();
                var e = this.getItemView(t),
                    i = this.collection.indexOf(t);
                this.addItemView(t, e, i)
            },
            onShowCalled: function() {
                this.children.each(function(t) {
                    r.triggerMethod.call(t, "show")
                })
            },
            triggerBeforeRender: function() {
                this.triggerMethod("before:render", this), this.triggerMethod("collection:before:render", this)
            },
            triggerRendered: function() {
                this.triggerMethod("render", this), this.triggerMethod("collection:rendered", this)
            },
            render: function() {
                return this.isClosed = !1, this.triggerBeforeRender(), this._renderChildren(), this.triggerRendered(), this
            },
            _renderChildren: function() {
                this.startBuffering(), this.closeEmptyView(), this.closeChildren(), this.collection && this.collection.length > 0 ? this.showCollection() : this.showEmptyView(), this.endBuffering()
            },
            showCollection: function() {
                var t;
                this.collection.each(function(e, i) {
                    t = this.getItemView(e), this.addItemView(e, t, i)
                }, this)
            },
            showEmptyView: function() {
                var t = this.getEmptyView();
                if (t && !this._showingEmptyView) {
                    this._showingEmptyView = !0;
                    var i = new e.Model;
                    this.addItemView(i, t, 0)
                }
            },
            closeEmptyView: function() {
                this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
            },
            getEmptyView: function() {
                return r.getOption(this, "emptyView")
            },
            getItemView: function() {
                var t = r.getOption(this, "itemView");
                return t || o("An `itemView` must be specified", "NoItemViewError"), t
            },
            addItemView: function(t, e, n) {
                var o = r.getOption(this, "itemViewOptions");
                i.isFunction(o) && (o = o.call(this, t, n));
                var s = this.buildItemView(t, e, o);
                return this.addChildViewEventForwarding(s), this.triggerMethod("before:item:added", s), this.children.add(s), this.renderItemView(s, n), this._isShown && !this.isBuffering && r.triggerMethod.call(s, "show"), this.triggerMethod("after:item:added", s), s
            },
            addChildViewEventForwarding: function(t) {
                var e = r.getOption(this, "itemViewEventPrefix");
                this.listenTo(t, "all", function() {
                    var o = n(arguments),
                        s = o[0],
                        a = this.getItemEvents();
                    o[0] = e + ":" + s, o.splice(1, 0, t), "undefined" != typeof a && i.isFunction(a[s]) && a[s].apply(this, o), r.triggerMethod.apply(this, o)
                }, this)
            },
            getItemEvents: function() {
                return i.isFunction(this.itemEvents) ? this.itemEvents.call(this) : this.itemEvents
            },
            renderItemView: function(t, e) {
                t.render(), this.appendHtml(this, t, e)
            },
            buildItemView: function(t, e, n) {
                var o = i.extend({
                    model: t
                }, n);
                return new e(o)
            },
            removeItemView: function(t) {
                var e = this.children.findByModel(t);
                this.removeChildView(e), this.checkEmpty()
            },
            removeChildView: function(t) {
                t && (this.stopListening(t), t.close ? t.close() : t.remove && t.remove(), this.children.remove(t)), this.triggerMethod("item:removed", t)
            },
            checkEmpty: function() {
                this.collection && 0 !== this.collection.length || this.showEmptyView()
            },
            appendBuffer: function(t, e) {
                t.$el.append(e)
            },
            appendHtml: function(t, e) {
                t.isBuffering ? (t.elBuffer.appendChild(e.el), t._bufferedChildren.push(e)) : t.$el.append(e.el)
            },
            _initChildViewStorage: function() {
                this.children = new e.ChildViewContainer
            },
            close: function() {
                this.isClosed || (this.triggerMethod("collection:before:close"), this.closeChildren(), this.triggerMethod("collection:closed"), r.View.prototype.close.apply(this, n(arguments)))
            },
            closeChildren: function() {
                this.children.each(function(t) {
                    this.removeChildView(t)
                }, this), this.checkEmpty()
            }
        }), r.CompositeView = r.CollectionView.extend({
            constructor: function() {
                r.CollectionView.prototype.constructor.apply(this, n(arguments))
            },
            _initialEvents: function() {
                this.once("render", function() {
                    this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this._renderChildren, this))
                })
            },
            getItemView: function() {
                var t = r.getOption(this, "itemView") || this.constructor;
                return t || o("An `itemView` must be specified", "NoItemViewError"), t
            },
            serializeData: function() {
                var t = {};
                return this.model && (t = this.model.toJSON()), t
            },
            render: function() {
                this.isRendered = !0, this.isClosed = !1, this.resetItemViewContainer(), this.triggerBeforeRender();
                var t = this.renderModel();
                return this.$el.html(t), this.bindUIElements(), this.triggerMethod("composite:model:rendered"), this._renderChildren(), this.triggerMethod("composite:rendered"), this.triggerRendered(), this
            },
            _renderChildren: function() {
                this.isRendered && (r.CollectionView.prototype._renderChildren.call(this), this.triggerMethod("composite:collection:rendered"))
            },
            renderModel: function() {
                var t = {};
                t = this.serializeData(), t = this.mixinTemplateHelpers(t);
                var e = this.getTemplate();
                return r.Renderer.render(e, t)
            },
            appendBuffer: function(t, e) {
                var i = this.getItemViewContainer(t);
                i.append(e)
            },
            appendHtml: function(t, e) {
                if (t.isBuffering) t.elBuffer.appendChild(e.el), t._bufferedChildren.push(e);
                else {
                    var i = this.getItemViewContainer(t);
                    i.append(e.el)
                }
            },
            getItemViewContainer: function(t) {
                if ("$itemViewContainer" in t) return t.$itemViewContainer;
                var e, n = r.getOption(t, "itemViewContainer");
                if (n) {
                    var s = i.isFunction(n) ? n.call(this) : n;
                    e = t.$(s), e.length <= 0 && o("The specified `itemViewContainer` was not found: " + t.itemViewContainer, "ItemViewContainerMissingError")
                } else e = t.$el;
                return t.$itemViewContainer = e, e
            },
            resetItemViewContainer: function() {
                this.$itemViewContainer && delete this.$itemViewContainer
            }
        }), r.Layout = r.ItemView.extend({
            regionType: r.Region,
            constructor: function(t) {
                t = t || {}, this._firstRender = !0, this._initializeRegions(t), r.ItemView.prototype.constructor.call(this, t)
            },
            render: function() {
                this.isClosed && this._initializeRegions(), this._firstRender ? this._firstRender = !1 : this.isClosed || this._reInitializeRegions();
                var t = Array.prototype.slice.apply(arguments),
                    e = r.ItemView.prototype.render.apply(this, t);
                return e
            },
            close: function() {
                if (!this.isClosed) {
                    this.regionManager.close();
                    var t = Array.prototype.slice.apply(arguments);
                    r.ItemView.prototype.close.apply(this, t)
                }
            },
            addRegion: function(t, e) {
                var i = {};
                return i[t] = e, this._buildRegions(i)[t]
            },
            addRegions: function(t) {
                return this.regions = i.extend({}, this.regions, t), this._buildRegions(t)
            },
            removeRegion: function(t) {
                return delete this.regions[t], this.regionManager.removeRegion(t)
            },
            _buildRegions: function(t) {
                var e = this,
                    i = {
                        regionType: r.getOption(this, "regionType"),
                        parentEl: function() {
                            return e.$el
                        }
                    };
                return this.regionManager.addRegions(t, i)
            },
            _initializeRegions: function(t) {
                var e;
                this._initRegionManager(), e = i.isFunction(this.regions) ? this.regions(t) : this.regions || {}, this.addRegions(e)
            },
            _reInitializeRegions: function() {
                this.regionManager.closeRegions(), this.regionManager.each(function(t) {
                    t.reset()
                })
            },
            _initRegionManager: function() {
                this.regionManager = new r.RegionManager, this.listenTo(this.regionManager, "region:add", function(t, e) {
                    this[t] = e, this.trigger("region:add", t, e)
                }), this.listenTo(this.regionManager, "region:remove", function(t, e) {
                    delete this[t], this.trigger("region:remove", t, e)
                })
            }
        }), r.AppRouter = e.Router.extend({
            constructor: function(t) {
                e.Router.prototype.constructor.apply(this, n(arguments)), this.options = t || {};
                var i = r.getOption(this, "appRoutes"),
                    o = this._getController();
                this.processAppRoutes(o, i)
            },
            appRoute: function(t, e) {
                var i = this._getController();
                this._addAppRoute(i, t, e)
            },
            processAppRoutes: function(t, e) {
                if (e) {
                    var n = i.keys(e).reverse();
                    i.each(n, function(i) {
                        this._addAppRoute(t, i, e[i])
                    }, this)
                }
            },
            _getController: function() {
                return r.getOption(this, "controller")
            },
            _addAppRoute: function(t, e, n) {
                var o = t[n];
                if (!o) throw new Error("Method '" + n + "' was not found on the controller");
                this.route(e, n, i.bind(o, t))
            }
        }), r.Application = function(t) {
            this._initRegionManager(), this._initCallbacks = new r.Callbacks, this.vent = new e.Wreqr.EventAggregator, this.commands = new e.Wreqr.Commands, this.reqres = new e.Wreqr.RequestResponse, this.submodules = {}, i.extend(this, t), this.triggerMethod = r.triggerMethod
        }, i.extend(r.Application.prototype, e.Events, {
            execute: function() {
                var t = Array.prototype.slice.apply(arguments);
                this.commands.execute.apply(this.commands, t)
            },
            request: function() {
                var t = Array.prototype.slice.apply(arguments);
                return this.reqres.request.apply(this.reqres, t)
            },
            addInitializer: function(t) {
                this._initCallbacks.add(t)
            },
            start: function(t) {
                this.triggerMethod("initialize:before", t), this._initCallbacks.run(t, this), this.triggerMethod("initialize:after", t), this.triggerMethod("start", t)
            },
            addRegions: function(t) {
                return this._regionManager.addRegions(t)
            },
            closeRegions: function() {
                this._regionManager.closeRegions()
            },
            removeRegion: function(t) {
                this._regionManager.removeRegion(t)
            },
            getRegion: function(t) {
                return this._regionManager.get(t)
            },
            module: function() {
                var t = n(arguments);
                return t.unshift(this), r.Module.create.apply(r.Module, t)
            },
            _initRegionManager: function() {
                this._regionManager = new r.RegionManager, this.listenTo(this._regionManager, "region:add", function(t, e) {
                    this[t] = e
                }), this.listenTo(this._regionManager, "region:remove", function(t) {
                    delete this[t]
                })
            }
        }), r.Application.extend = r.extend, r.Module = function(t, e) {
            this.moduleName = t, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = e, this.startWithParent = !0, this.triggerMethod = r.triggerMethod
        }, i.extend(r.Module.prototype, e.Events, {
            addInitializer: function(t) {
                this._initializerCallbacks.add(t)
            },
            addFinalizer: function(t) {
                this._finalizerCallbacks.add(t)
            },
            start: function(t) {
                this._isInitialized || (i.each(this.submodules, function(e) {
                    e.startWithParent && e.start(t)
                }), this.triggerMethod("before:start", t), this._initializerCallbacks.run(t, this), this._isInitialized = !0, this.triggerMethod("start", t))
            },
            stop: function() {
                this._isInitialized && (this._isInitialized = !1, r.triggerMethod.call(this, "before:stop"), i.each(this.submodules, function(t) {
                    t.stop()
                }), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), r.triggerMethod.call(this, "stop"))
            },
            addDefinition: function(t, e) {
                this._runModuleDefinition(t, e)
            },
            _runModuleDefinition: function(t, n) {
                if (t) {
                    var o = i.flatten([this, this.app, e, r, r.$, i, n]);
                    t.apply(this, o)
                }
            },
            _setupInitializersAndFinalizers: function() {
                this._initializerCallbacks = new r.Callbacks, this._finalizerCallbacks = new r.Callbacks
            }
        }), i.extend(r.Module, {
            create: function(t, e, o) {
                var r = t,
                    s = n(arguments);
                s.splice(0, 3), e = e.split(".");
                var a = e.length,
                    l = [];
                return l[a - 1] = o, i.each(e, function(e, i) {
                    var n = r;
                    r = this._getModule(n, e, t), this._addModuleDefinition(n, r, l[i], s)
                }, this), r
            },
            _getModule: function(t, e, i) {
                var n = t[e];
                return n || (n = new r.Module(e, i), t[e] = n, t.submodules[e] = n), n
            },
            _addModuleDefinition: function(t, e, n, o) {
                var r, s;
                i.isFunction(n) ? (r = n, s = !0) : i.isObject(n) ? (r = n.define, s = n.startWithParent) : s = !0, r && e.addDefinition(r, o), e.startWithParent = e.startWithParent && s, e.startWithParent && !e.startWithParentIsConfigured && (e.startWithParentIsConfigured = !0, t.addInitializer(function(t) {
                    e.startWithParent && e.start(t)
                }))
            }
        }), r
}(this, Backbone, _);
define("marionette", ["jquery", "underscore", "backbone"], function(t) {
    return function() {
        var e;
        return e || t.Backbone.Marionette
    }
}(this)), define("player/constants/playerconst", [], function() {
    var t = {
        REGION_TYPE_HEADER: "header",
        REGION_TYPE_FOOTER: "footer",
        WEB_SERVICE_MANAGER: "webServiceManager",
        REGION_MANAGER: "regionManager",
        MANAGE_MANAGERS_EVENTS: "manageManagersEvents",
        REGION_CHANGE_NOTIFICATION: "regionChangeNotification",
        MANAGE_PLAYER_COMMON_REQUEST: "managePlayerCommonRequest",
        SIM_PICTOR_CREATED: "simPictorCreatedInEditMode",
        EVENTS_FOR_PROPERTY_MANAGER: "eventsForPorpertyManager",
        COMPONENT_DATA_PROPERTY_UPDATED: "componentDataPropertyUpdated",
        WEB_SERVICE_CALL: "webservicecall",
        HOST: "PORTAL",
        REST_SERVICE_CALL: "restservicecall",
        JSONP_CALL: "jsonpcall",
        JSON_CALL: "jsoncall",
        TEXT_CONTENT_CALL: "textfilecall",
        HTML_CONTENT_CALL: "htmlfilecall",
        SOAP_WEB_SERVICE: "soapwebservice",
        REST_WEB_SERVICE: "restwebservice",
        AUDIO_MEDIA_PLAYER: "audioMediaPlayer",
        VIDEO_MEDIA_PLAYER: "videoMediaPlayer",
        ANIMATION_MEDIA_PLAYER: "animationMediaPlayer"
    };
    return t
}), define("player/events/eventsconst", ["require", "exports", "module"], function() {
    var t = {
        SIM_PICTOR_INIT_COMPLETE_EVENT: "simPictorInitCompleteEvent",
        SIM_PICTOR_COMP_SELECTED: "onPictorCompSelectEvent",
        DATA_LOADED: "dataLoaded",
        ACTIVITY_END_EVENT: "activityEndEvent",
        ACTIVITY_GO_TO_NEXT_ACTIVITY_EVENT: "activiytyGoToNextActivityEvent",
        EXECUTE_USER_LAST_ACTION_FROM_ANOTHER_REGION: "executeUserLastActionFromOtherRegion",
        USER_LAST_ACTION: "useractiontrigger",
        ACTIVITY_GO_TO_PREVIOUS_ACTIVITY_EVENT: "activiytyGoToPreviousActivityEvent",
        JUMP_TO_ACTIVITY_BY_INDEX_EVENT: "jumpToActivityByIndexEvent",
        JUMP_TO_ACTIVITY_BY_ID_EVENT: "jumpToActivityByIDEvent",
        CREATE_COMPONENT_EVENT: "createComponentEvent",
        ON_ACTIVITY_SUCCESSFULLY_ADDED_IN_REGION: "onActivitySuccessfullyAddedInRegion",
        CREATE_AND_INIT_ACTIVITY_HTML: "createAndInitActivityHtml",
        SET_DRAWING_CANVAS: "setDrawingCanvas",
        DRAWING_COMMON_TASK: "drawingCommonTask",
        REGION_INITLIZE_UPATE_EVENT: "regionInitlizeAndUpdateEvent",
        PLAYER_INITLIZE_COMPLETE_EVENT: "playerInitlizeCompleteEvent",
        SIM_PICTOR_INITALIZED: "simPictorInitialized",
        REGION_INITLIZE_COMPLETE_EVENT: "regionInitlizeCompleteEvent",
        REGION_INITLIZE_START_EVENT: "regionInitlizeStartEvent",
        UPDATE_PLAYER_SIZE_EVENT: "updatePlayerSizeEvent",
        LAUNCH_NEXT_ACTVITY: "launchNextActivity",
        LAUNCH_PREVIOUS_ACTIVITY: "launchPreviousActivity",
        ACTIVITY_PREINIT_TASK: "activityPreinitTask",
        PREPARE_INLINE_TEMPLATE_DATA: "prepareInlineTemplateDataTask",
        UPDATE_COMPLETE_EVENT: "updateCompleteEvent",
        PLAY_AUDIO: "initAndPlayAudio",
        RESTART_AUDIO: "restartAudio",
        STOP_AUDIO: "stopAudio",
        PAUSE_AUDIO: "pauseAudio",
        RESUME_AUDIO: "resumeAudio",
        VOLUME_CHANGE: "volumeChange",
        DEFAULT_VOLUME_CHANGE: "defaultVolumeChange",
        PLAY_WEB_API_AUDIO: "playWebApiAudio",
        INIT_WEB_API_AUDIO: "initWebApiAudio",
        UNLOAD_WEB_API_BUFFERS_AUDIO: "unloadWebApiBuffersAudio",
        PAUSE_ALL_MEDIA: "pauseAllMedia",
        RESUME_ALL_MEDIA: "resumeAllMedia",
        EXECUTE_WEB_SERVICE_CALL: "executeWebServiceCall",
        PLAYER_COMMON_TASK_EVENT: "playerCommonTaskEvent",
        BROADCAST_EVENT: "broadcastEvent",
        BROADCAST_EVENT_RECEIVER: "broadcastEventReceiver",
        STOP_BROADCAST_EVENT_RECEIVER: "stopBroadcastEventReceiver",
        SHOW_HIDE_REGION: "showHideRegion",
        LAUNCH_ACTIVITY_IN_REGION: "launchActivityInRegion",
        START_REGION_FROM_OTHER_REGION: "startRegionFromOtherRegionEvent",
        UPDATE_REGION_ACTIVITY_LIST: "updateRegionActivityList",
        REMOVE_COMPONENT_EDITORS: "removeComponentEditorFootprints",
        APPEND_ACTIVITY_IN_REGION: "appendActiivityInRegion",
        CHANGE_VIEW: "changeWizardView",
        WIZARD_VIEW_CHANGE: "wizardViewChange",
        WIZARD_VIEW_RENDER_COMPLETE: "wizardViewRenderComplete",
        SHOW_PRELOADER: "showPreloader",
        HIDE_PRELOADER: "hidePreloader",
        REMVOE_REFERENCE: "removeScriptAndCSSReference",
        TYPE_CSS: "css",
        TYPE_JS: "js",
        HREF: "href",
        NONE: "none",
        LINK: "link",
        SCRIPT: "script",
        SRC: "src",
        STOP_ALL_REGIONS: "stopAllRegions",
        START_STOP_REGION: "startStopRegion",
        HIDE_ALL_REGION: "hideAllRegions",
        MANAGE_COMMON_BROADCAST_EVENT: "manageCommonBroadcastEvent",
        CALL_AND_UPDATE_COMPONENT: "callAndUpdateComponent",
        FIRST_SCREEN_LOAD_EVENT: "firstScreenLoadEvent",
        LAST_SCREEN_LOAD_EVENT: "lastScreenLoadEvent",
        MIDDLE_SCREEN_LOAD_EVENT: "middleScreenLoadEvent",
        MANAGE_NEXT_BACK_NEVIGATION_BUTTON: "manageNextBackNevigationButton",
        COMP_EVENT_REGISTER_COMPLETE: "compEventRegisterComplete",
        SIM_PICTOR_CREATION_COMPLETE: "simPictorCreationComplete",
        CREATION_COMPLETE: "creationComplete",
        UPDATE_COMPLETE: "updateComplete",
        SELECTOR_CLICK_EVENT: "onSelectorClicked",
        EDITOR_TAB_BTN_CLICK: "editorComponentTabClicked",
        COMPONENT_SELECTED: "componentSelected",
        COMPONENT_DESELECTED: "componentDeselected",
        COMPONENT_DATA_PROPERTY_UPDATED: "componentDataPropertyUpdated",
        HANDLE_EDITOR_TASK_EVENT: "editorTaskEvent",
        PLAYER_EDIT_COMPONENT_EVENT: "playerEditComponentEvent",
        EDIT_ACTION_UPDATE: "UPDATE",
        EDIT_ACTION_CHANGE: "CHANGE",
        EDIT_ACTION_ADD: "ADD",
        EDIT_ACTION_DELETE: "DELETE",
        EDIT_CSS_DATA: "CSS",
        EDIT_JSON_DATA: "JSON",
        EDIT_HTML_DATA: "HTML",
        EDIT_JSON_DATA_DATA: "DATA",
        EDIT_JSON_DATA_ANSWER: "answer",
        EDIT_JSON_DATA_SOURCE: "SOURCE",
        EDIT_JSON_DATA_SOURCE_MP4: "MP4",
        EDIT_JSON_DATA_SOURCE_OGG: "OGG",
        EDIT_EVENT_DATA: "EVENTS",
        EDIT_DOM_LAYOUT_UPDATED: "editDomLayoutUpdated",
        EDIT_DOM_LAYOUT_MOVE: "MOVE",
        EDIT_DOM_LAYOUT_MOVE_UP: "UP",
        EDIT_DOM_LAYOUT_MOVE_DOWN: "DOWN",
        EDIT_DOM_LAYOUT_CUT: "CUT",
        EDIT_DOM_LAYOUT_COPY: "COPY",
        EDIT_DOM_LAYOUT_PASTE: "PASTE",
        EDIT_DOM_LAYOUT: "LAYOUT",
        PLAYER_BUBBLE_EVENT: "playerBubbleEvent",
        PLAYER_INIT_FROM_CONTROLLER_EVENT: "playerInitFromControllerEvent",
        SELECTOR_RIGHT_CLICK_EVENT: "rightClickEventOnComponent",
        DATA_COPIED_IN_MEMORY: "dataCopiedInMemory",
        SHOW_CONTEXT_MENU_EVENT: "showContextMenuEvent",
        EVENT_NEVIGATE_ACTIVITY_IN_CACHE_MODE: "nevigateActivityInCacheModeEvent",
        UPDATE_METADTA: "METADTA",
        PLAYER_IN_STRICT_MODE: "playerInStrictMode"
    };
    return t
}), define("player/constants/errorconst", [], function() {
    var t = {
        CONFIG_MISSING_ACTIVITY_DATA: "Activity config does not have any activity data!",
        ACTIVITY_NOT_FOUND_BY_THIS_ID: "No activity found by this id!!!",
        ACITIVITY_MUST_EXTEND_BASE_CLASS: "You need to extend BaseActivity to add this activity in view.",
        ACTIVITY_ALREADY_REGISTERED: " is already registered with the view.",
        LOCALIZATION_LANGUAGE_LOAD_FAILD: "Localization language load failed.",
        ALL_ACTIVITY_COMPONENT_NOT_DESTROYED: "Created component(s) in this activity is not destroyed. Call destroy method of each component(s).",
        BASE_ACTIVITY_DESTROY_NOT_CALLED: "Pleaes call BaseActivity 'destroy' method before to unload the activity.",
        DESTROY_NOT_IMPLMENENTED_IN_EDIOTR_CHILD_CLASS: "Destroy is not implemented in Editor child class.",
        PLEASE_CALL_SUPER_CLASS_DESTORY_FROM_COMPONENT_EDITOR: "Please call super class destroy method from comp editor class",
        DESTROY_NOT_IMPLMENENTED_IN_CHILD_CLASS: "Destroy is not implemented in child class.",
        ID_IS_NOT_ASSOCIATED_WITH_OBJECT: " 'id' keyword is not associated with given object, Please add in - ",
        IS_ALREADY_REGISTERED: " is already registered with ",
        CALLBACK_METHOD_IS: "' callback method is '",
        REMOVE_REFERENCE_BEFOER_TO_UNLOAD: "' remove reference before to unload this activity",
        IS_ATTACHED_WITH: "' is attached with ",
        NO_REGION_FIND: "No 'Region' find with this id ",
        UNKNOW_ERROR_WHILE_CONVERTING_DATA: "DATA_LOADER!! An unknown error occurred, kindly check file format.......",
        NO_URL: "No url has been specified!",
        UNKNOW_ERROR: "DATA_LOADER!! an unknow error occured",
        ERROR_WHILE_LOADING_FILE: "DATA LOADER!! Error received while loading file....",
        SLIDER_DEFAULT_DATA_MISSING: "Slider can not be initlized without default data.",
        SCREEN_NAV_DEFAULT_DATA_MISSING: "Slider can not be initlized without default data.",
        IMAGE_DEFAULT_DATA_MISSING: "Image Component can not be initlized without src data.",
        LABEL_DEFAULT_DATA_MISSING: "Label Component can not be initlized without src data.",
        BUTTON_DEFAULT_DATA_MISSING: "Button Component can not be initlized without src data.",
        LIFEMETER_DEFAUTL_DATA_MISSING: "LifeMeter can not be initlized without default data.",
        COUNTDOWN_TIMER_DEFAUTL_DATA_MISSING: "Countdown timer can not be initlized without default data.",
        MCQ_DEFAULT_DATA_MISSING: "MCQ can not be initialized without default data.",
        ANIMATION_PLAYER_DEFAUTL_DATA_MISSING: "Animation player can not be initlized without default data.",
        DUPLICATE_COMPONENT_ID_FOUND_IN_HTML: "Duplicate mComp id found in HTML.",
        DUPLICATE_COMPONENT_ID_FOUND_IN_JSON: "Duplicate mComp id found in JSON.",
        ERROR_OCCURED_WHILE_DESTROYING_SCREEN_AND_ITS_EVENTS: "Error occured!!!!! while destroying screen, screen's components and its events.",
        REQUIRED_DATA_MISSING: "Please provide required data!",
        UNEXPECTED_ERROR: "An unexpected error occurred!",
        SAME_LOAD_PRIORITY_DEFINED: "Same load priority found, Please check activityConfig xml file!",
        DEFUALT_DATA_MISSING_IN_WIDGET: "Default Data is Missing while creating widget!",
        ACTIVITY_CAN_NOT_EDIT: "This 'activity' is created with the older version, hence edit will not work with this activity.",
        COMPONENT_NOT_ALLOWED_AS_CHILD_COMPONENT: "Invalid Action!, Selected Component can not hold created component as its child. See help for more info.",
        IN_PROCESS_PLEASE_WAIT: "In process. Please wait!!!!",
        CIRCULAR_SLIDER_DEFAULT_DATA_MISSING: "Circular Slider Component can not be initlized without src data.",
        ADVANCED_SLIDER_DEFAULT_DATA_MISSING: "Slider Component can not be initlized without src data.",
        PATH_ANIMATOR_DEFAULT_DATA_MISSING: "Path Animator can not be initlized without src data.",
        PROJECT_TITLE: "Editor"
    };
    return t
}), define("player/controllers/activity-event-controller", ["marionette", "player/constants/errorconst"], function(t, e) {
    var i = function() {
        this.objDictonary = {}
    };
    return i.prototype.members = {
        EVENT_TYPE: "eventType",
        EVENT_CONTEXT: "eventContext",
        EVENT_TARGET: "eventTarget",
        EVENT_CALLBACK: "eventCallback"
    }, i.prototype.addEventListener = function(t, e, i, n) {
        var o, r = [];
        for (0 === e.length || void 0 === e.length ? r.push(e) : r = e, o = 0; o < r.length; o += 1) this.addEventsToTarget(t, r[o], i, n)
    }, i.prototype.addEventsToTarget = function(t, i, n, o) {
        if (0 === i.length) throw new Error("not a valid object to register events");
        var r, s, a, l, c;
        if (c = this.getTargetID(i), l = void 0 === i.getID ? 2 : 1, void 0 === c) throw new Error(e.ID_IS_NOT_ASSOCIATED_WITH_OBJECT, i);
        if (this.searchEventReference(c, n) === !0) throw new Error("[" + n + "]" + e.IS_ALREADY_REGISTERED + "[" + c + "]");
        s = this.members, a = {}, a[s.EVENT_CONTEXT] = t, a[s.EVENT_TARGET] = i, a[s.EVENT_TYPE] = n, a[s.EVENT_CALLBACK] = o, this.objDictonary[c + "_" + n] = a, r = this, 1 === l ? i.on(n, r, r.handleCallBack) : $(i).on(n, function(t) {
            var e = {};
            e.eventTarget = t, e.data = r, r.handleCallBack(e)
        })
    }, i.prototype.getTargetID = function(t) {
        var e;
        return e = void 0, void 0 === t.id ? t.hasOwnProperty("getID") === !0 ? e = t.getID() : console.warn("Please check Object ", t) : e = t.id, e
    }, i.prototype.handleCallBack = function(t) {
        var e, i, n, o, r;
        r = t.data, t.eventTarget && (n = t.eventTarget.id), n = void 0 === n ? t.eventTarget.currentTarget.id : n, n = void 0 === n ? t.eventTarget.data.getID() : n, o = t.eventTarget.type, t.type = o, t.target = t.eventTarget.data, o = t.type, i = r.members, e = r.objDictonary[n + "_" + o], e[i.EVENT_CONTEXT][e[i.EVENT_CALLBACK]](t.eventTarget)
    }, i.prototype.removeEventListener = function(t, e) {
        var i, n, o = [];
        for (o = _.toArray(t), i = 0; i < o.length; i += 1) n = this.getTargetID(o[i]), o[i] = void 0 !== o[i].jquery ? o[i] : $(o[i]), o[i].off(e), delete this.objDictonary[n + "_" + e]
    }, i.prototype.searchEventReference = function(t, e) {
        var i = this.objDictonary[t + "_" + e];
        return void 0 !== i
    }, i.prototype.isAllRegisteredListenerDeattached = function() {
        var t, e, i, n;
        for (i = this.objDictonary, e = _.filter(i, function(t) {
                return t
            }), t = this.members, n = 0; n < e.length; n += 1) this.removeEventListener(e[n][t.EVENT_TARGET], e[n][t.EVENT_TYPE], e[n][t.EVENT_CALLBACK]);
        return !0
    }, i
}), window.jQuery && function(t) {
    t.extend({
        json2xml: function(t, e) {
            var i = function(t, e, n) {
                if ("__tagsList" === t) return "";
                if (!(e instanceof Object)) return n && n.__tagsList && n.__tagsList instanceof Object && n.__tagsList.hasOwnProperty(t) ? "<" + t + ">" + String(e) + "</" + t + ">" : t + "='" + String(e) + "'";
                if (void 0 == e.length) {
                    var o = "<" + t,
                        r = "";
                    for (var s in e) e[s] instanceof Object || e[s] instanceof Array ? r += i(s, e[s], e) : e.__tagsList && e.__tagsList instanceof Object && e.__tagsList.hasOwnProperty(s) ? r += i(s, e[s], e) : o += " " + i(s, e[s], e);
                    return o += ">" + r + "</" + t + ">"
                }
                if (e.length > 0) {
                    for (var o = "", a = e.length, s = 0; a > s; s++)(e[s] instanceof Object || e[s] instanceof Array) && (o += i(t, e[s], e));
                    return o
                }
                return ""
            };
            return null == e || "object" != typeof e ? null : i(t, e)
        },
        escapeXmlChars: function(t) {
            return "string" == typeof t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") : t
        },
        unescapeXmlChars: function(t) {
            return t.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/")
        }
    })
}(jQuery), define("json2xml", ["jquery"], function() {}), window.jQuery && function(t) {
    t.extend({
        xml2json: function(e, i) {
            function n(e, s) {
                if (!e) return null; {
                    var a = {},
                        l = "",
                        c = null,
                        h = null;
                    e.nodeType, o(e.localName || e.nodeName), e.text || e.nodeValue || ""
                }
                e.childNodes && e.childNodes.length > 0 && t.each(e.childNodes, function(t, e) {
                    var i = e.nodeType,
                        s = o(e.localName || e.nodeName),
                        h = e.text || e.nodeValue || "";
                    if (8 != i)
                        if (3 != i && 4 != i && s)("#text" != e.nodeName || null != e.localName) && (a.hasOwnProperty(e.nodeName) || (a[e.nodeName] = e.nodeName)), c = c || {}, c[s] ? (c[s].length || (c[s] = r(c[s])), c[s] = r(c[s]), c[s][c[s].length] = n(e, !0), c[s].length = c[s].length) : c[s] = n(e);
                        else {
                            if (h.match(/^\s+$/)) return;
                            l += h.replace(/^\s+/, "").replace(/\s+$/, "")
                        }
                }), e.attributes && e.attributes.length > 0 && (h = {}, c = c || {}, t.each(e.attributes, function(t, e) {
                    var i = o(e.name),
                        n = e.value;
                    h[i] = n, c[i] ? (c[cnn] = r(c[cnn]), c[i][c[i].length] = n, c[i].length = c[i].length) : c[i] = n
                })), c && (c = t.extend("" != l ? new String(l) : {}, c || {}), l = c.text ? ("object" == typeof c.text ? c.text : [c.text || ""]).concat([l]) : l, l && (c.text = l), l = "");
                var p = c || l;
                return i && (l && (p = {}), l = p.text || l || "", l && (p.text = l), s || (p = r(p))), p.__tagsList = a, p
            }
            if (!e) return {};
            var o = function(t) {
                    return "text" === t && (t = "sText"), String(t || "").replace(/-/g, "_")
                },
                r = function(e) {
                    return t.isArray(e) || (e = [e]), e.length = e.length, e
                };
            if ("string" == typeof e && (e = t.text2xml(e)), e.nodeType) {
                if (3 == e.nodeType || 4 == e.nodeType) return e.nodeValue;
                var s = 9 == e.nodeType ? e.documentElement : e,
                    a = n(s, !0);
                return e = null, s = null, a
            }
        },
        text2xml: function(e) {
            var i;
            try {
                var n = t.browser.msie ? new ActiveXObject("Microsoft.XMLDOM") : new DOMParser;
                n.async = !1
            } catch (o) {
                throw new Error("XML Parser could not be instantiated")
            }
            try {
                i = t.browser.msie ? n.loadXML(e) ? n : !1 : n.parseFromString(e, "text/xml")
            } catch (o) {
                throw new Error("Error parsing XML string")
            }
            return i
        }
    })
}(jQuery), define("xml2json", ["jquery"], function() {}), define("player/utils/data-loader", ["marionette", "json2xml", "xml2json", "player/constants/errorconst"], function(t, e, i, n) {
    var o, r, s, a;
    return o = function() {
        return _.extend(this, Backbone.Events)
    }, o.prototype = {
        DATA_LOAD_SUCCESS: "dataLoadSuccess",
        DATA_LOAD_FAILED: "dataLoadFailed",
        SCOPE: "",
        load: function(t, e) {
            var i, o = t.url;
            for (o = o.split("/"), i = 0; i < o.length; i += 1) void 0 !== requirejs.s.contexts._.config.paths[o[i]] && (o[i] = requirejs.s.contexts._.config.paths[o[i]]);
            if (t.url = o.join("/"), this.SCOPE = t.scope, e === !0) {
                if (!t || !t.hasOwnProperty("url") || "" === t.url || void 0 === t.url) throw console.log("------>>>>>>", t), new Error(n.NO_URL);
                var a, l, c, h, p, d, u, f;
                c = this, d = t.hasOwnProperty("headers") ? t.headers : {}, p = t.hasOwnProperty("data") ? t.data : {}, h = t.hasOwnProperty("type") ? t.type : "GET", a = t.hasOwnProperty("dataType") ? t.dataType : "json", f = t.hasOwnProperty("enctype") ? t.enctype : "text/plain", l = t.hasOwnProperty("contentType") ? t.contentType : "application/json", u = {
                    url: t.url,
                    data: p,
                    type: h,
                    enctype: f,
                    headers: d,
                    dataType: a,
                    async: !1,
                    success: function(e, i, o) {
                        if ("success" === i) {
                            var s = null;
                            switch (t.returnType) {
                                case "json":
                                    s = r(a, e);
                                    break;
                                case "xml":
                                    s = e;
                                    break;
                                default:
                                    s = e
                            }
                            "object" == typeof s && (s.jqXHR = o), c.trigger(c.DATA_LOAD_SUCCESS, s, c.SCOPE)
                        } else alert(n.UNKNOW_ERROR), c.trigger(c.DATA_LOAD_FAILED, o, i, e, c.SCOPE)
                    },
                    error: function(t, e, i) {
                        c.trigger(c.DATA_LOAD_FAILED, t, e, i, c.SCOPE)
                    }
                }, t && "true" === t.async.toString() && (u.async = !0), t && "saveActivity" === t.url && (u.async = !1), "multipart/form-data" === t.enctype && (u.cache = !1, u.contentType = !1, u.processData = !1), $.ajax(u)
            } else s(t, this)
        }
    }, r = function(t, e) {
        var i = null;
        switch (t) {
            case "xml":
                i = $.xml2json(e);
                break;
            case "text":
                i = $.parseJSON(e);
                break;
            case "json":
                i = e;
                break;
            default:
                alert(n.UNKNOW_ERROR_WHILE_CONVERTING_DATA)
        }
        return i
    }, s = function(t, e) {
        $.ajax({
            type: "HEAD",
            url: t.url,
            crossDomain: !0,
            success: function() {},
            error: function() {
                return e.trigger(e.DATA_LOAD_FAILED, "NO DATA", e.SCOPE), !1
            }
        }), require(["text!" + t.url], function(i) {
            a(t, i, e)
        })
    }, a = function(t, e, i) {
        var n, o;
        "txt" === t.returnType || "text" === t.returnType ? o = e : "xml" === t.dataType && "json" === t.returnType ? (n = $.parseXML(e).documentElement, o = $.xml2json(n)) : "json" === t.returnType ? o = $.parseJSON(e) : "xml" === t.returnType && (o = $.parseXML(e).documentElement), i.trigger(i.DATA_LOAD_SUCCESS, o, i.SCOPE)
    }, o
}), define("player/controllers/audio-controller", [], function() {
    var t, e, i, n, o, r, s;
    return i = null, r = 1, s = window.AudioContext || window.webkitAudioContext, t = function() {
        var t;
        e = {}, o = [], s && (this.bufferList = {}, this.loadCount = 0, this.gainNode = null, this.context = new s, this.audioSourcesObj = {}, this.helperContext = null), setInterval(function() {
            for (t = 0; t < o.length; t += 1) {
                var e = o[t];
                if (void 0 !== e)
                    if (isNaN(e.data.duration) === !1) {
                        if (e.data.isPaused === !0) return;
                        e.missed = void 0, void 0 === e.data.cTime ? e.data.cTime = e.currentTime : e.data.cTime === e.currentTime && (e.volume = r, e.play()), e.data.cTime = e.currentTime
                    } else e.missed = void 0 === e.missed ? 0 : e.missed + 1, e.missed % 2 === 0 && e.load()
            }
        }, 1e3), n = 0
    }, t.prototype.playAudio = function(t) {
        var i, s, a;
        s = function() {
            var t = this;
            this.loadStart = function() {
                this.addEventListener("loadedmetadata", t.metaLoaded), this.addEventListener("canplay", t.canPlay)
            }, this.metaLoaded = function() {
                this.removeEventListener("loadedmetadata", t.metaLoaded), this.data.duration = this.duration
            }, this.canPlay = function() {
                this.removeEventListener("canplay", t.canPlay), this.volume = r, this.play(), this.data.bLoop === !0 && -1 === o.indexOf(this) && o.push(this), void 0 !== this.data.onStart && this.data.onStart()
            }, this.audioEnded = function() {
                var t;
                return this.pause(), this.currentTime = 0, this.data.bLoop ? (this.volume = r, this.play(), void 0) : (void 0 !== this.data.onFinish && (t = this.data.onFinish, this.data.onFinish = void 0, t()), void 0)
            }
        }, void 0 === e[t.strTrack] ? (i = document.createElement("audio"), i.uid = n += 1, a = new s, i.data = t, this.setSource(i, t.strPath), console.log(i.getAttribute("src")), i.addEventListener("loadstart", a.loadStart), i.addEventListener("ended", a.audioEnded), i.load(), e[t.strTrack] = i) : t.reload ? (e[t.strTrack].data = t, e[t.strTrack].pause(), e[t.strTrack].data.isPaused = void 0, -1 === e[t.strTrack].src.indexOf(t.strPath) ? (e[t.strTrack].src = "", this.setSource(e[t.strTrack], t.strPath), e[t.strTrack].load()) : (e[t.strTrack].volume = r, e[t.strTrack].play(), void 0 !== t.onStart && t.onStart())) : this.restartAudio(t.strTrack)
    }, t.prototype.setSource = function(t, e) {
        var i;
        if (e instanceof Array) {
            for (i = 0; i < e.length; i += 1)
                if ("mp3" === e[i].type) {
                    if (t.canPlayType("audio/mpeg;")) {
                        t.setAttribute("src", e[i].path);
                        break
                    }
                } else if ("ogg" === e[i].type && t.canPlayType("audio/ogg;")) {
                t.setAttribute("src", e[i].path);
                break
            }
        } else t.setAttribute("src", e)
    }, t.prototype.restartAudio = function(t) {
        try {
            e[t].currentTime = 0, e[t].pause(), e[t].volume = r, e[t].play()
        } catch (i) {
            console.error("//" + t + "// track not found.")
        }
    }, t.prototype.stopAudio = function(t, i) {
        try {
            e[t].currentTime = 0, e[t].pause(), e[t].data.isPaused = !0, i && delete e[t]
        } catch (n) {
            console.error("//" + t + "// track not found.")
        }
        this.stop(t.id)
    }, t.prototype.stopAllAudio = function(t) {
        var i, n;
        n = t.bDestroy;
        for (i in e) e.hasOwnProperty(i) && this.stopAudio(i, n)
    }, t.prototype.pauseAudio = function(t) {
        try {
            e[t].data.isPaused = !0, e[t].pause()
        } catch (i) {
            console.error("//" + t + "// track not found.")
        }
        "object" == typeof t && this.pause(t.id)
    }, t.prototype.resumeAudio = function(t) {
        try {
            e[t].data.isPaused = !1, e[t].volume = r, e[t].play()
        } catch (i) {
            console.error("//" + t + "// track not found.")
        }
        "object" == typeof t && (t.type = "resume", this.playWebAudio(t))
    }, t.prototype.setVolume = function(t) {
        var i;
        try {
            e[t.strTrackID].volume = t.volume
        } catch (n) {}
        "audioApi" === t.type && (i = parseInt(t.volume) / 100, this.gainNode.gain.value = i * i)
    }, t.prototype.setDefaultVolume = function(t) {
        var i, n;
        r = t.volume;
        for (i in e) e.hasOwnProperty(i) && (n = e[i], void 0 !== n && (n.volume = r))
    }, t.prototype.unloadWebApiBufferAudio = function(t) {
        var e, i = this.helperContext;
        t.context && (i = this.helperContext), t.hasOwnProperty("id") ? (e = t.id, delete this.bufferList[e], delete this.audioSourcesObj[e], i && t.unLoad && "function" == typeof i[t.unLoad] && i[t.unLoad].call(i, e)) : (this.bufferList = {}, this.audioSourcesObj = {}, i && t.unLoad && "function" == typeof i[t.unLoad] && i[t.unLoad].call(i, null))
    }, t.prototype.loadBuffer = function(t, e) {
        var i, n;
        i = new XMLHttpRequest, i.open("GET", t, !0), i.responseType = "arraybuffer", n = this, i.onload = function() {
            n.context.decodeAudioData(i.response, function(i) {
                return i ? (n.bufferList[e] = i, n.audioSourcesObj[e] = {}, ++n.loadCount === Object.keys(n.urlList).length - 2 && n.helperContext && n.urlList.onLoad && "function" == typeof n.helperContext[n.urlList.onLoad] && n.helperContext[n.urlList.onLoad].call(n.helperContext, n.bufferList), void 0) : (console.log("error decoding file data: " + t), void 0)
            }, function(t) {
                console.error("decodeAudioData error", t)
            })
        }, i.onerror = function() {
            console.log("BufferLoader: XHR error")
        }, i.send()
    }, t.prototype.initWebAudio = function(t) {
        var e;
        this.urlList = t, this.helperContext = t.context;
        for (e in this.urlList) "context" != e && "onLoad" != e && this.loadBuffer(this.urlList[e], e)
    }, t.prototype.stop = function(t) {
        void 0 !== this.audioSourcesObj[t].source && (this.audioSourcesObj[t].source.stop || (this.audioSourcesObj[t].source.stop = source.noteOff), this.audioSourcesObj[t].source.stop(0), this.audioSourcesObj[t].paused = !1, this.audioSourcesObj[t].started = !1)
    }, t.prototype.playWebAudio = function(t) {
        var e, i, n, o = !1,
            r = t.id,
            s = this.helperConext;
        if (t && !this.bufferList.hasOwnProperty(r)) return console.log("This audio not loaded yet"), void 0;
        if (t.hasOwnProperty("type")) {
            if (void 0 === this.audioSourcesObj[r].source) return
        } else this.audioSourcesObj[r].paused = !1;
        if (t.loop && (o = !0), this.audioSourcesObj[r].started && this.stop(r), this.context.createGain || (this.context.createGain = this.context.createGainNode), this.gainNode = this.context.createGain(), this.audioSourcesObj[r].source = this.context.createBufferSource(), this.audioSourcesObj[r].source.buffer = this.bufferList[r], this.audioSourcesObj[r].source.connect(this.gainNode), this.gainNode.connect(this.context.destination), this.audioSourcesObj[r].source.loop = o, this.audioSourcesObj[r].paused) this.audioSourcesObj[r].startedAt = Date.now() - this.audioSourcesObj[r].pausedAt, this.audioSourcesObj[r].source.start(0, this.audioSourcesObj[r].pausedAt / 1e3);
        else {
            if (n = e = this.audioSourcesObj[r].source.buffer.duration, i = 0, t.startTime && (i = parseFloat(t.startTime / 1e3)), t.endTime && (n = parseFloat(t.endTime / 1e3)), i > n || n > e || 0 > i) return console.log("Please enter correct start and end time"), void 0;
            this.audioSourcesObj[r].source.start || (this.audioSourcesObj[r].source.start = this.audioSourcesObj[r].source.noteOn), this.audioSourcesObj[r].source.start(0, i, n - i), this.audioSourcesObj[r].startedAt = Date.now()
        }
        this.audioSourcesObj[r].started = !0, t.context && (s = t.context), s && t.onStart && "function" == typeof s[t.onStart] && s[t.onStart].call(s, r), this.audioSourcesObj[r].source.onended = function() {
            s && t.onFinish && "function" == typeof s[t.onFinish] && s[t.onFinish].call(s, r)
        }
    }, t.prototype.pause = function(t) {
        void 0 !== this.audioSourcesObj[t].source && (this.audioSourcesObj[t].source.stop || (this.audioSourcesObj[t].source.stop = source.noteOff), this.audioSourcesObj[t].source.stop(0), this.audioSourcesObj[t].pausedAt = Date.now() - this.audioSourcesObj[t].startedAt, this.audioSourcesObj[t].paused = !0, this.audioSourcesObj[t].started = !1)
    }, {
        getInstance: function() {
            return null === i && (i = new t), i
        }
    }
}), define("player/controllers/activity-controller", ["marionette", "player/events/eventsconst", "player/controllers/activity-event-controller", "player/utils/data-loader", "player/controllers/audio-controller", "player/constants/errorconst"], function(t, e, i, n, o, r) {
    function s(t) {
        o.getInstance().playAudio(t)
    }

    function a(t) {
        o.getInstance().playWebAudio(t)
    }

    function l(t) {
        o.getInstance().unloadWebApiBufferAudio(t)
    }

    function c(t) {
        o.getInstance().initWebAudio(t)
    }

    function h(t) {
        o.getInstance().stopAllAudio(t)
    }

    function p(t) {
        o.getInstance().restartAudio(t)
    }

    function d(t) {
        o.getInstance().stopAudio(t.trackId, t.destroy)
    }

    function u(t) {
        o.getInstance().pauseAudio(t)
    }

    function f(t) {
        o.getInstance().resumeAudio(t)
    }

    function m(t) {
        o.getInstance().setVolume(t)
    }

    function g(t) {
        o.getInstance().setDefaultVolume(t)
    }
    var y;
    return y = Backbone.Marionette.Controller.extend({
        bEditor: !1,
        SEARCH_BY_ID: "searchByID",
        SEARCH_BY_INDEX: "searchByIndex",
        COMP_SUFFIX: "COMP_",
        SIM_PICTOR: "sim-pictor",
        SIM_PICTOR_PATH: "components/sim-act/simulation-activity",
        MPLAYER: "mPlayer",
        editorData: void 0,
        objEventController: void 0,
        objEventBroadcaster: void 0,
        objCompDict: void 0,
        regionData: void 0,
        allActivities: void 0,
        arrActivity: void 0,
        groupModelDict: void 0,
        activityRegion: void 0,
        objActivityList: void 0,
        objEventConst: void 0,
        playerConfig: void 0,
        localLanguageName: void 0,
        objActRef: void 0,
        compCounter: 0,
        nActivityIndex: 0,
        strRegionName: "",
        broadcastEventDict: void 0,
        showPreloader: !1,
        stageScaleValue: 1,
        mPlayerModel: void 0,
        nTotalActivityLength: -1,
        data_loader: void 0,
        html_comp_list: void 0,
        allRegionActivityList: void 0,
        bDrawingMode: void 0,
        isReady: void 0,
        activityPreloadedData: void 0,
        actPreloadedData: {},
        objActivityRef: void 0,
        isPictorInitliazed: !1,
        isActivityInitalized: !0,
        objPathUpdater: void 0,
        creationMode: void 0,
        cacheModeOn: !1,
        objTinCanHelperRef: void 0,
        constructor: function(t, o, r, s, a, l, c, h) {
            this.html_comp_list = [], this.objEventController = new i, this.groupModelDict = {}, this.activityRegion = t, this.objEventConst = e, this.playerConfig = o, this.objActivityList = {}, this.objCompDict = {}, this.nActivityIndex = 0, this.arrActivity = [], this.strRegionName = r, this.objEventBroadcaster = s, this.broadcastEventDict = {}, this.data_loader = new n, this.bDrawingMode = a, this.actPreloadedData = void 0, this.bEditor = l, this.creationMode = h, this.cacheModeOn = void 0 !== c ? c : !1, this.dispatchInitEvent(this.objEventConst.REGION_INITLIZE_START_EVENT)
        }
    }), y.prototype.onComponentCreated = function(t) {
        var e, i;
        i = t.componentRef, void 0 !== t && void 0 !== t.data && (t.data.updatedScale = this.stageScaleValue, t.data.objInlineTmplDict = this.objActivityRef.objInlineTmplDict), e = new i(t.data, this.stageScaleValue), this.objCompDict[t.id] = e, e.setID(t.id), t.context[t.strCallback](e), t = void 0, e.setStageScaleValue(this.stageScaleValue)
    }, y.prototype.initController = function(t) {
        var e;
        if (this.regionData = t, this.allActivities = this.regionData.activities, void 0 === this.allActivities.activity) return !1;
        if (void 0 === this.allActivities.activity.length) this.arrActivity.push(this.allActivities.activity);
        else
            for (e = 0; e < this.allActivities.activity.length; e++) this.arrActivity.push(this.allActivities.activity[e]);
        return this.nTotalActivityLength = this.arrActivity.length, !0
    }, y.prototype.launchDefaultActivity = function(t) {
        if (!(this.arrActivity.length > 0)) throw new Error(r.CONFIG_MISSING_ACTIVITY_DATA);
        this.allActivities.hasOwnProperty("defaultLaunchID") ? this.launchActivityById(this.allActivities.defaultLaunchID, t) : this.launchActivityByIndex(0, t)
    }, y.prototype.start = function(t, e, i) {
        var n = {};
        if (n.data = t, void 0 !== e) switch (i) {
            case !0:
                this.launchActivityByIndex(Number(e), n);
                break;
            case !1:
                this.launchActivityById(String(e), n)
        } else this.launchDefaultActivity(n);
        this.nTotalActivityLength = this.arrActivity.length
    }, y.prototype.stopAndUnload = function() {
        this.handleEndActvityEvent()
    }, y.prototype.launchActivityByIndex = function(t, e) {
        this.activityPreloadedData = void 0, void 0 !== e && (this.activityPreloadedData = e.data);
        var i = this.arrActivity[t];
        void 0 !== i && (this.nActivityIndex = t, this.launchActivity(i))
    }, y.prototype.launchActivityById = function(t, e) {
        this.activityPreloadedData = void 0, void 0 !== e && (this.activityPreloadedData = e.data);
        var i = _.filter(this.arrActivity, function(e) {
            return e.id === String(t)
        });
        if (!(i.length > 0)) throw new Error(r.ACTIVITY_NOT_FOUND_BY_THIS_ID + "...." + t);
        this.nActivityIndex = this.arrActivity.indexOf(i[0]), this.launchActivity(i[0])
    }, y.prototype.dispatchInitEvent = function(t) {
        var e = {};
        e.type = this.objEventConst.REGION_INITLIZE_UPATE_EVENT, e.progressType = t, e.target = this, this.trigger(this.objEventConst.REGION_INITLIZE_UPATE_EVENT, e)
    }, y.prototype.onPlayerInitComplete = function() {
        _.filter(this.objActivityList, function(t) {
            t.onPlayerInitComplete()
        })
    }, y.prototype.launchActivity = function(t) {
        var e, i, n, o, r, s = {};
        this.isActivityInitalized = !1, this.nTotalActivityLength = this.arrActivity.length, this.dispatchInitEvent(this.objEventConst.REGION_INITLIZE_START_EVENT), this.bEditor === !1 && (s.task = this.showPreloader === !0 ? this.objEventConst.SHOW_PRELOADER : this.objEventConst.HIDE_PRELOADER), s.type = this.objEventConst.PLAYER_COMMON_TASK_EVENT, this.trigger(this.objEventConst.PLAYER_COMMON_TASK_EVENT, s), r = this, o = t["class"], this.MPLAYER !== o ? (this.isPictorInitliazed = o === this.SIM_PICTOR, o = o === this.SIM_PICTOR ? this.SIM_PICTOR_PATH : this.objPathUpdater.resolvePath(o), void 0 !== t.groupName && (n = void 0 !== t.modelPath && void 0 === this.groupModelDict[t.groupName], i = void 0 !== this.groupModelDict[t.groupName]), e = this.groupModelDict[t.groupName], void 0 === e && void 0 !== t.modelPath && t.modelPath.length > 0 ? require([o, t.modelPath], function(o, s) {
            e = new s, r.groupModelDict[t.groupName] = e, r.initLoadedActivity(t, n, i, o, e)
        }) : require([o], function(o) {
            r.initLoadedActivity(t, n, i, o, e)
        })) : this.trigger(this.objEventConst.PLAYER_INIT_FROM_CONTROLLER_EVENT, {
            testData: "testDAta"
        }), this.mPlayerModel.set(this.strRegionName + "__index", this.nActivityIndex)
    }, y.prototype.initLoadedActivity = function(t, e, i, n, o) {
        if (void 0 === t.html) this.loadAndRegisterActivity(t, e, i, n, o);
        else {
            var r = {};
            t.html.source = this.objPathUpdater.resolvePath(t.html.source), r.controller = this, r.actData = t, r.bCreateModel = e, r.bUseModel = i, r.ObjActivity = n, r.objModel = o, this.trigger(this.objEventConst.CREATE_AND_INIT_ACTIVITY_HTML, r)
        }
    }, y.prototype.onHtmlLoadComplete = function(t) {
        var e = this.editorData,
            i = {};
        void 0 !== t.inlineTemplates ? (i.task = this.objEventConst.PREPARE_INLINE_TEMPLATE_DATA, i.data = t, i.callback = !0, this.trigger(this.objEventConst.PLAYER_COMMON_TASK_EVENT, i)) : this.loadAndRegisterActivity(e.actData, e.bCreateModel, e.bUseModel, e.ObjActivity, e.objModel, t)
    }, y.prototype.appendComponentDiv = function(t, e) {
        var i, n, o, s, a, l, c = e.createdCompList;
        for (t.mComp = {}, i = 0; i < c.length; i += 1) {
            if (s = c[i], o = s.id, void 0 !== t.mComp[o]) throw new Error('"id= ' + o + '"!!!!! ' + r.DUPLICATE_COMPONENT_ID_FOUND_IN_HTML);
            l = t.$el, a = new s.componentRef(s.defaultData), n = s.target.appendChild(l, s, a), n === !0 && (a.render(), void 0 !== a.onShow && a.onShow()), this.html_comp_list.push(a), a.id = o, t.mComp[o] = a
        }
        return !0
    }, y.prototype.loadAndRegisterActivity = function(t, e, i, n, o, r) {
        var s, a, l, c, h, p, d = this;
        h = void 0, h = o, c = new n({
            model: h,
            activityData: this.activityPreloadedData,
            dataPath: void 0 !== t.data ? t.data.source : void 0,
            stylePath: void 0 !== t.style ? t.style.source : void 0
        }), c.creationMode = this.creationMode, this.objActivityRef = c, this.objActivityRef.objPathUpdater = this.objPathUpdater, this.objActivityRef.strRegionName = this.strRegionName, this.objActivityRef.setTinCanHelper(this.objTinCanHelperRef), this.objActivityRef.strName = t.name, void 0 !== r && r.hasOwnProperty("activityTemplate") && (c.template = _.template(r.activityTemplate)), c.v3Html = void 0 === r.v3html ? !1 : r.v3html, c.setID(t.id), c.groupName = t.groupName, c.modelName = t.modelName, s = this.registerActivity(c), s === !0 && (void 0 !== r && r.hasOwnProperty("processData") && c.setData(r.processData), this.bEditor === !1 ? (this.playerConfig.tinCan && (c.sendTincanData = "true" === this.playerConfig.tinCan.sendTincanData ? !0 : !1), c.preinitialize(), c.postInitialize(), this.setStageScaleValue(this.stageScaleValue), d.checkForLanguageSupport() === !0 && "" !== t.lang ? (l = "screentext.xml", p = $(this.playerConfig.language).attr("commonSource"), a = "true" === p ? t.lang + ".xml" : t.lang + "/" + this.getLocalLanguage() + "/" + l, this.playerConfig.language.rootPath.length > 0 && (a = this.playerConfig.language.rootPath + a), this.objActRef = c, this.objActRef.languageSupport = d.checkForLanguageSupport(), this.loadData(a, "xml", "application/xml", "xml", this.handleLangDataLoadComplete, this.handleDataLoadFailed)) : d.appendActivity(c, r)) : d.appendActivity(c, r))
    }, y.prototype.registerActivity = function(t) {
        if (t.isBaseActivity !== !0) throw new Error(r.ACITIVITY_MUST_EXTEND_BASE_CLASS);
        if (this.objActivityList[t.getID()]) throw new Error(this.objActivityList[t.getID()].getID() + r.ACTIVITY_ALREADY_REGISTERED);
        return t.strRegionName = this.strRegionName, t.localLangName = this.localLanguageName, this.objActivityList[t.getID()] = t, t.setEventController(this.objEventController), this.attachActivityEvents(t), !0
    }, y.prototype.appendActivity = function(t, e) {
        var i, n = {};
        this.activityRegion.show(t), void 0 !== e && this.appendComponentDiv(t, e), n.regionName = this.strRegionName, n.activityLength = this.nTotalActivityLength, n.currentActivityIndex = this.nActivityIndex, n.isLastActivity = this.nTotalActivityLength === this.nActivityIndex + 1, n.isFirstActivity = 0 === this.nActivityIndex, _.filter(this.objActivityList, function(t) {
            i = t.getID()
        }), n.activityId = i, this.trigger(this.objEventConst.ON_ACTIVITY_SUCCESSFULLY_ADDED_IN_REGION, n), t.bEditor = this.bEditor, this.bEditor === !1 && (this.trigger(this.objEventConst.REMOVE_COMPONENT_EDITORS, this.strRegionName), t.allRegionActivityList = this.allRegionActivityList), this.dispatchInitEvent(this.objEventConst.REGION_INITLIZE_COMPLETE_EVENT), this.isActivityInitalized = !0, t.onActivityCreationComplete()
    }, y.prototype.checkForLanguageSupport = function() {
        var t = !1;
        return this.playerConfig.language && (t = "true" === this.playerConfig.language.support), t
    }, y.prototype.setLocalLanguage = function(t) {
        this.localLanguageName = t
    }, y.prototype.getLocalLanguage = function() {
        return this.localLanguageName
    }, y.prototype.showPreloaderBeforeActivityLaunch = function(t) {
        this.showPreloader = t
    }, y.prototype.loadData = function(t, e, i, n, o, r) {
        var s = this;
        this.data_loader.on(this.data_loader.DATA_LOAD_SUCCESS, o), this.data_loader.on(this.data_loader.DATA_LOAD_FAILED, r), this.data_loader.load({
            url: t,
            dataType: e,
            contentType: i,
            returnType: n,
            scope: s
        })
    }, y.prototype.handleLangDataLoadComplete = function(t, e) {
        var i, n = $(t).attr("lang"),
            o = {};
        n ? (i = $(t).find(e.getLocalLanguage()).get(0), o = $(t).find("commonMedia").get(0)) : i = t, e.objActRef.localText = i, e.objActRef.commonMediaNode = o, e.appendActivity(e.objActRef), e.data_loader.off(e.data_loader.DATA_LOAD_SUCCESS), e.data_loader.off(e.data_loader.DATA_LOAD_FAILED)
    }, y.prototype.handleDataLoadFailed = function() {
        throw this.data_loader.off(this.data_loader.DATA_LOAD_SUCCESS), this.data_loader.off(this.data_loader.DATA_LOAD_FAILED), new Error(r.LOCALIZATION_LANGUAGE_LOAD_FAILD)
    }, y.prototype.handleGoToNextActivityEvent = function(t) {
        var e;
        return this.isValidIndexOrId(this.nActivityIndex + 1, this.SEARCH_BY_INDEX) === !1 ? (console.warn("Invalid activity index"), void 0) : (this.runningInCacheMode() === !1 ? (e = this.handleEndActvityEvent(t), e === !0 && (this.nActivityIndex = this.nActivityIndex + 1, this.launchActivityByIndex(this.nActivityIndex))) : this.launchThroughRegionManager(this.nActivityIndex + 1), void 0)
    }, y.prototype.moveToNextActivity = function(t) {
        var e;
        return this.isValidIndexOrId(this.nActivityIndex + 1, this.SEARCH_BY_INDEX) === !1 ? (console.warn("Invalid activity index"), void 0) : (this.runningInCacheMode() === !1 ? (e = this.handleEndActvityEvent(t), e && (this.nActivityIndex = this.nActivityIndex + 1, this.launchActivityByIndex(this.nActivityIndex))) : this.launchThroughRegionManager(this.nActivityIndex + 1), void 0)
    }, y.prototype.moveToPreviousActivity = function(t) {
        var e;
        return this.isValidIndexOrId(this.nActivityIndex - 1, this.SEARCH_BY_INDEX) === !1 ? (console.warn("Invalid activity index"), void 0) : (this.runningInCacheMode() === !1 ? (e = this.handleEndActvityEvent(t), e && (this.nActivityIndex = this.nActivityIndex - 1, this.launchActivityByIndex(this.nActivityIndex))) : this.launchThroughRegionManager(this.nActivityIndex - 1), void 0)
    }, y.prototype.handleGoToPreviousActivityEvent = function(t) {
        var e;
        return this.isValidIndexOrId(this.nActivityIndex - 1, this.SEARCH_BY_INDEX) === !1 ? (console.warn("Invalid activity index"), void 0) : (this.runningInCacheMode() === !1 ? (e = this.handleEndActvityEvent(t), e === !0 && (this.nActivityIndex = this.nActivityIndex - 1, this.launchActivityByIndex(this.nActivityIndex))) : this.launchThroughRegionManager(this.nActivityIndex - 1), void 0)
    }, y.prototype.runningInCacheMode = function() {
        return this.cacheModeOn
    }, y.prototype.launchThroughRegionManager = function(t) {
        var e = {};
        e.screenIndexToLaunch = t, e.controllerRef = this, this.trigger(this.objEventConst.EVENT_NEVIGATE_ACTIVITY_IN_CACHE_MODE, e)
    }, y.prototype.handleEndActvityEvent = function() {
        var t, e;
        return this.objActivityRef && this.objActivityRef.isScreenInitalized === !1 ? !1 : (e = this.classReference.classRef, t = this.objActivityRef, void 0 === t ? !0 : this.destroyActivity(t))
    }, y.prototype.destroyActivity = function(t) {
        var e, i, n = t.destroy();
        _.filter(this.objCompDict, function(t) {
            if (t.isDestroyCalled === !1) throw new Error(r.ALL_ACTIVITY_COMPONENT_NOT_DESTROYED)
        });
        for (i in this.broadcastEventDict) this.broadcastEventDict.hasOwnProperty(i) && this.objEventBroadcaster.off(this.broadcastEventDict[i].eventToListen);
        if (t.objEventController.isAllRegisteredListenerDeattached() === !1) return !1;
        if (n === !0 && t.isDestroyCalled !== !0 || n !== !0) throw new Error(r.BASE_ACTIVITY_DESTROY_NOT_CALLED);
        for (e = 0; e < this.html_comp_list.length; e += 1) this.html_comp_list[e].destroy();
        return this.html_comp_list = [], this.actPreloadedData = {}, this.detachActivityEvents(t), this.broadcastEventDict = {}, t.close(), delete this.objActivityList[t.getID()], t = null, n
    }, y.prototype.handleJumpToActivityByIndexEvent = function(t) {
        var e, i;
        return this.isValidIndexOrId(t.activityIndex, this.SEARCH_BY_INDEX) === !1 ? (console.warn("invalid activity index ", t.activityIndex), void 0) : (i = this.handleEndActvityEvent(t), i === !0 && (_.filter(this.objActivityList, function(t) {
            t.mComp = {}
        }), e = Number(t.activityIndex), this.launchActivityByIndex(e)), void 0)
    }, y.prototype.isValidIndexOrId = function(t, e) {
        var i, n = !1;
        switch (e) {
            case this.SEARCH_BY_ID:
                i = _.filter(this.arrActivity, function(e) {
                    return e.id === String(t)
                }), n = i.length > 0;
                break;
            case this.SEARCH_BY_INDEX:
                n = Number(t) < 0 ? !1 : Number(t) >= this.nTotalActivityLength ? !1 : !0
        }
        return n
    }, y.prototype.handleJumpToActivityByIDEvent = function(t) {
        var e, i;
        return this.isValidIndexOrId(t.activityID, this.SEARCH_BY_ID) === !1 ? (console.warn("invalid activity id ", t.activityID), void 0) : (i = this.handleEndActvityEvent(t), i === !0 && (e = t.activityID, this.launchActivityById(e), this.trigger(this.objEventConst.JUMP_TO_ACTIVITY_BY_ID_EVENT, t)), void 0)
    }, y.prototype.detachActivityEvents = function(t) {
        t.off(this.objEventConst.JUMP_TO_ACTIVITY_BY_ID_EVENT), t.off(this.objEventConst.JUMP_TO_ACTIVITY_BY_INDEX_EVENT), t.off(this.objEventConst.ACTIVITY_END_EVENT), t.off(this.objEventConst.ACTIVITY_GO_TO_NEXT_ACTIVITY_EVENT), t.off(this.objEventConst.ACTIVITY_GO_TO_PREVIOUS_ACTIVITY_EVENT), t.off(this.objEventConst.CREATE_COMPONENT_EVENT), t.off(this.objEventConst.PLAYER_COMMON_TASK_EVENT), t.off(this.objEventConst.PLAYER_BUBBLE_EVENT), t.off(this.objEventConst.PLAYER_EDIT_COMPONENT_EVENT), t.off(this.objEventConst.HANDLE_EDITOR_TASK_EVENT), t.off(this.objEventConst.BROADCAST_EVENT), t.off(this.objEventConst.BROADCAST_EVENT_RECEIVER), t.off(this.objEventConst.STOP_BROADCAST_EVENT_RECEIVER), t.off(this.objEventConst.REMVOE_CSS_REFERENCE), t.off(this.objEventConst.PLAY_AUDIO), t.off(this.objEventConst.PLAY_WEB_API_AUDIO), t.off(this.objEventConst.UNLOAD_WEB_API_BUFFERS_AUDIO), t.off(this.objEventConst.INIT_WEB_API_AUDIO), t.off(this.objEventConst.RESTART_AUDIO), t.off(this.objEventConst.STOP_AUDIO), t.off(this.objEventConst.PAUSE_AUDIO), t.off(this.objEventConst.RESUME_AUDIO), t.off(this.objEventConst.VOLUME_CHANGE), t.off(this.objEventConst.DEFAULT_VOLUME_CHANGE), t.off(this.objEventConst.REMVOE_REFERENCE), t.off(this.objEventConst.SET_DRAWING_CANVAS), t.off(this.objEventConst.DRAWING_COMMON_TASK)
    }, y.prototype.handleCreateComponentEvent = function(t) {
        t.id = this.COMP_SUFFIX + this.compCounter, t.actController = this, this.trigger(this.objEventConst.CREATE_COMPONENT_EVENT, t), this.compCounter += 1
    }, y.prototype.handleActivityCommonTask = function(t) {
        t.regionId = this.strRegionName, this.trigger(t.type, t)
    }, y.prototype.handlePlayerBubbleEvents = function(t) {
        t.regionId = this.strRegionName, this.trigger(t.type, t)
    }, y.prototype.handlePlayerEditorTask = function(t) {
        t.regionId = this.strRegionName, this.trigger(t.type, t)
    }, y.prototype.handleAndBroadcastEvent = function(t) {
        t.type = this.objEventConst.BROADCAST_EVENT, t.regionId = this.strRegionName, this.trigger(t.type, t)
    }, y.prototype.broadcastEventReceiver = function(t) {
        this.broadcastEventDict[t.eventToListen] = t
    }, y.prototype.stopBroadcastEventReceiver = function(t) {
        delete this.broadcastEventDict[t.eventToListen]
    }, y.prototype.broadcastEventHandler = function(t) {
        this.trigger(this.objEventConst.BROADCAST_EVENT_IN_AIR, t)
    }, y.prototype.bubbleEvent = function(t) {
        var e = this.broadcastEventDict[t.eventToBroadcast],
            i = {};
        if (void 0 !== e) {
            if (t.regionId === this.strRegionName) return;
            i.type = t.eventToBroadcast, i.data = t.data, e.context[e.callback](i)
        }
    }, y.prototype.handleBroadcastEventFromOtherPlayer = function(t) {
        var e = this.broadcastEventDict[t.eventToBroadcast],
            i = {};
        void 0 !== e && (i.type = t.eventToBroadcast, i.data = t.data, e.context[e.callback](i))
    }, y.prototype.onActivityLaunchRequestByAnotherRegion = function(t) {
        var e = this.handleEndActvityEvent();
        if (e !== !1) switch (t.bLaunchByIndex) {
            case !0:
                this.launchActivityByIndex(Number(t.strActivityID), t);
                break;
            case !1:
                this.launchActivityById(String(t.strActivityID), t)
        }
    }, y.prototype.updateNevigationControl = function(t) {
        this.objActivityRef.updateNevigationControl(t)
    }, y.prototype.setDrawingCanvas = function(t) {
        var e = {};
        e.canvas = t, this.trigger(this.objEventConst.SET_DRAWING_CANVAS, e)
    }, y.prototype.handleDrawingTask = function() {}, y.prototype.removeJSCSSFileRefernece = function(t) {
        var e, i, n, o, r, s, a = this.objEventConst;
        for (r = t.fileName, s = t.type, e = s === a.TYPE_JS ? a.SCRIPT : s === a.TYPE_CSS ? a.LINK : a.NONE, i = s === a.TYPE_JS ? a.SRC : s === a.TYPE_CSS ? a.HREF : a.NONE, n = document.getElementsByTagName(e), o = n.length; o >= 0; o -= 1) n[o] && null !== n[o].getAttribute(i) && -1 !== n[o].getAttribute(i).indexOf(r) && n[o].parentNode.removeChild(n[o])
    }, y.prototype.setStageScaleValue = function(t) {
        var e;
        for (_.filter(this.objCompDict, function(e) {
                e.setStageScaleValue(t), void 0 !== e.onPlayerResizeEvent && e.onPlayerResizeEvent()
            }), _.filter(this.objActivityList, function(e) {
                e.nStageScale = t
            }), this.stageScaleValue !== t && (this.stageScaleValue = t), e = 0; e < this.html_comp_list.length; e += 1) this.html_comp_list[e].nStageScale = t;
        this.isPictorInitliazed === !0 && this.objActivityRef.setStageValue(this.stageScaleValue)
    }, y.prototype.setInlineTemplates = function(t) {
        var e = this;
        $.each(this.objActivityList, function(i, n) {
            n.objInlineTmplDict = t, e.actPreloadedData = t
        })
    }, y.prototype.onRegionUpdate = function(t, e) {
        _.filter(this.objActivityList, function(i) {
            e !== !0 && (i.allRegionData = t), i.getRegionChangeNotification(t)
        })
    }, y.prototype.onPlayerStop = function(t) {
        this.objActivityRef.onPlayerStop(t)
    }, y.prototype.attachActivityEvents = function(t) {
        var e = {},
            i = this;
        e.classRef = i, t.on(i.objEventConst.ACTIVITY_GO_TO_NEXT_ACTIVITY_EVENT, this.handleGoToNextActivityEvent, this), t.on(i.objEventConst.ACTIVITY_GO_TO_PREVIOUS_ACTIVITY_EVENT, this.handleGoToPreviousActivityEvent, this), t.on(i.objEventConst.JUMP_TO_ACTIVITY_BY_INDEX_EVENT, this.handleJumpToActivityByIndexEvent, this), t.on(i.objEventConst.JUMP_TO_ACTIVITY_BY_ID_EVENT, this.handleJumpToActivityByIDEvent, this), t.on(i.objEventConst.CREATE_COMPONENT_EVENT, this.handleCreateComponentEvent, this), t.on(i.objEventConst.ACTIVITY_END_EVENT, i.handleEndActvityEvent, this), t.on(i.objEventConst.PLAYER_COMMON_TASK_EVENT, i.handleActivityCommonTask, this), t.on(i.objEventConst.PLAYER_BUBBLE_EVENT, i.handlePlayerBubbleEvents, this), t.on(i.objEventConst.PLAYER_EDIT_COMPONENT_EVENT, i.handlePlayerEditorTask, this), t.on(i.objEventConst.HANDLE_EDITOR_TASK_EVENT, i.handlePlayerEditorTask, this), t.on(i.objEventConst.BROADCAST_EVENT, i.handleAndBroadcastEvent, this), t.on(i.objEventConst.BROADCAST_EVENT_RECEIVER, i.broadcastEventReceiver, this), t.on(i.objEventConst.STOP_BROADCAST_EVENT_RECEIVER, i.stopBroadcastEventReceiver, this), t.on(i.objEventConst.PLAY_WEB_API_AUDIO, a), t.on(i.objEventConst.UNLOAD_WEB_API_BUFFERS_AUDIO, l), t.on(i.objEventConst.INIT_WEB_API_AUDIO, c), t.on(i.objEventConst.PLAY_AUDIO, s), t.on(i.objEventConst.RESTART_AUDIO, p), t.on(i.objEventConst.STOP_AUDIO, d), t.on(i.objEventConst.PAUSE_AUDIO, u), t.on(i.objEventConst.RESUME_AUDIO, f), t.on(i.objEventConst.VOLUME_CHANGE, m), t.on(i.objEventConst.DEFAULT_VOLUME_CHANGE, g), t.on(i.objEventConst.STOP_ALL_AUDIO, h), t.on(this.objEventConst.REMVOE_REFERENCE, i.removeJSCSSFileRefernece, this), this.bDrawingMode === !0 && (t.on(i.objEventConst.SET_DRAWING_CANVAS, i.setDrawingCanvas, this), t.on(i.objEventConst.DRAWING_COMMON_TASK, i.handleDrawingTask, this))
    }, y.prototype.componentPropertyDataUpdated = function(t) {
        void 0 !== this.objActivityRef.componentPropertyDataUpdated ? this.objActivityRef.componentPropertyDataUpdated(t) : console.warn(r.ACTIVITY_CAN_NOT_EDIT)
    }, y.prototype.refreshActivityData = function(t) {
        this.objActivityRef.refreshActivityData(t)
    }, y.prototype.handlePlayerCommonBubbleEvent = function(t) {
        this.objActivityRef.handlePlayerCommonBubbleEvent(t)
    }, y.prototype.selectComponent = function() {}, y.prototype.deselectComponent = function() {
        this.objActivityRef.deselectComponent()
    }, y.prototype.getSelectedCompRef = function() {}, y.prototype.receivePropertyManagerEvents = function(t) {
        void 0 !== this.objActivityRef && this.objActivityRef.receivePropertyManagerEvents(t)
    }, y.prototype.setPathUpdater = function(t) {
        this.objPathUpdater = t
    }, y.prototype.setTinCanHelper = function(t) {
        this.objTinCanHelperRef = t, this.objActivityRef && this.objActivityRef.setTinCanHelper(t)
    }, y.prototype.destroy = function() {
        var t = !1;
        if (t = this.objActivityRef ? this.destroyActivity(this.objActivityRef) : !0, t === !1) throw new Error("destroy unsucessful.. " + this.strRegionName);
        return t
    }, y
}), define("player/events/event-broadcaster", ["marionette"], function() {
    var t = function() {
        return _.extend(this, Backbone.Events)
    };
    return t.prototype.BROADCAST_EVENT = "broadcastEvent", t.prototype.BUBBLE_EVENT = "bubbleEvent", t.prototype.broadcastEvent = function(t) {
        var e, i;
        e = t.eventToBroadcast, i = t.data, this.trigger(this.BUBBLE_EVENT, t)
    }, t
}), define("player/factory/complist", [], function() {
    var t = {
        components: {
            mComp: [{
                id: "ImageComp",
                name: "ImageComp",
                classpath: "components/image/image"
            }, {
                id: "StickynotesComp",
                name: "StickynotesComp",
                classpath: "components/stickynotes/stickynotes"
            }, {
                id: "StickyTitleBarComp",
                name: "StickyTitleBarComp",
                classpath: "components/stickytitlebar/stickytitlebar"
            }, {
                id: "WordSearchComp",
                name: "WordSearchComp",
                classpath: "components/wordsearch/wordsearch"
            }, {
                id: "RadioComp",
                name: "RadioComp",
                classpath: "components/radio/radio"
            }, {
                id: "ColorAccessibilityComp",
                name: "coloraccessibilityComp",
                classpath: "components/coloraccessibility/coloraccessibility"
            }, {
                id: "DropdownComp",
                name: "DropdownComp",
                classpath: "components/dropdown/dropdown"
            }, {
                id: "AnswerComp",
                name: "AnswerComp",
                classpath: "components/answer/answer"
            }, {
                id: "MultipleChoiceComp",
                name: "MultipleChoiceComp",
                classpath: "components/multiplechoice/multiplechoice"
            }, {
                id: "ContainerComp",
                name: "containerComp",
                classpath: "components/container"
            }, {
                id: "ScreenComp",
                name: "screenComp",
                classpath: "components/screen"
            }, {
                id: "AnimationPlayerComp",
                name: "animationPlayerComp",
                classpath: "components/animationplayer/animation-player"
            }, {
                id: "CountDownTimerComp",
                name: "countDownTimerComp",
                classpath: "components/countdowntimer/countdown-timer"
            }, {
                id: "DnDAdvanceComp",
                name: "DnDAdvanceComp",
                classpath: "components/dnd/js/dnd-advance"
            }, {
                id: "MCQComp",
                name: "MCQComp",
                classpath: "components/mcq/js/mcq"
            }, {
                id: "AudioPlayerComp",
                name: "AudioPlayerComp",
                classpath: "components/audioplayer/source/js/audio-player"
            }, {
                id: "AudioHotSpotComp",
                name: "AudioHotSpotComp",
                classpath: "components/audiohotspot/audio-hotspot"
            }, {
                id: "VideoPlayerComp",
                name: "VideoPlayerComp",
                classpath: "components/videoplayer/videoplayer"
            }, {
                id: "LifeMeterComp",
                name: "LifeMeterComp",
                classpath: "components/lifemeter/lifemeter"
            }, {
                id: "SliderComp",
                name: "SliderComp",
                classpath: "components/slider/slider"
            }, {
                id: "IdentifierComp",
                name: "IdentifierComp",
                classpath: "components/identifier/identifier"
            }, {
                id: "CarouselComp",
                name: "CarouselComp",
                classpath: "components/carousel/carousel"
            }, {
                id: "TextEditorComp",
                name: "TextEditorComp",
                classpath: "components/texteditor/texteditor"
            }, {
                id: "ToggleButtonComp",
                name: "ToggleButtonComp",
                classpath: "components/togglebutton/toggle-button"
            }, {
                id: "ToggleButtonGroupComp",
                name: "ToggleButtonGroupComp",
                classpath: "components/togglebuttongroup/js/toggle-button-group"
            }, {
                id: "ReadAloudPlayerComp",
                name: "ReadAloudPlayerComp",
                classpath: "components/readaloudplayer/read-aloud-player"
            }, {
                id: "RadioButtonComp",
                name: "RadioButtonComp",
                classpath: "components/radiobutton/js/radiobutton"
            }, {
                id: "CheckBoxComp",
                name: "CheckBoxComp",
                classpath: "components/checkbox/js/checkbox"
            }, {
                id: "TableComp",
                name: "TableComp",
                classpath: "components/table/js/custom-table"
            }, {
                id: "CalculatorComp",
                name: "CalculatorComp",
                classpath: "components/calculator/calculator"
            }, {
                id: "PhysicsEngineComp",
                name: "PhysicsEngineComp",
                classpath: "components/physicsengine/physics-engine"
            }, {
                id: "SectionNavigatorComp",
                name: "SectionNavigatorComp",
                classpath: "components/sectionnavigator/section-navigator"
            }, {
                id: "ViewStackComp",
                name: "ViewStackComp",
                classpath: "components/viewstack/js/view-stack"
            }, {
                id: "ReorderingComp",
                name: "ReorderingComp",
                classpath: "components/reordering/js/reordering"
            }, {
                id: "OmMeterComp",
                name: "OmMeterComp",
                classpath: "components/ommeter/js/om-meter"
            }, {
                id: "ConnectorComp",
                name: "ConnectorComp",
                classpath: "components/connector/connector"
            }, {
                id: "ButtonComp",
                name: "ButtonComp",
                classpath: "components/button/button"
            }, {
                id: "ImagePuzzleComp",
                name: "ImagePuzzleComp",
                classpath: "components/imagepuzzle/imagepuzzle"
            }, {
                id: "LabelComp",
                name: "LabelComp",
                classpath: "components/label/label"
            }, {
                id: "CloseCaptionComp",
                name: "CloseCaptionComp",
                classpath: "components/closecaption/js/close-caption"
            }, {
                id: "ScreenNavigatorComp",
                name: "ScreenNavigatorComp",
                classpath: "components/screennavigator/js/screen-navigator"
            }, {
                id: "MessageBoxComp",
                name: "MessageBoxComp",
                classpath: "components/messagebox/js/message-box"
            }, {
                id: "SVGComp",
                name: "SVGComp",
                classpath: "components/svg/svg"
            }, {
                id: "TimerComp",
                name: "TimerComp",
                classpath: "components/nonvisualtimer/non-visual-timer"
            }, {
                id: "TreeComp",
                name: "TreeComp",
                classpath: "components/tree/tree"
            }, {
                id: "CalloutComp",
                name: "CalloutComp",
                classpath: "components/callout/callout"
            }, {
                id: "DndComp",
                name: "DndComp",
                classpath: "components/dndcomp/dndcomp"
            }, {
                id: "DraggableComp",
                name: "DraggableComp",
                classpath: "components/draggable/draggable"
            }, {
                id: "DroppableComp",
                name: "DroppableComp",
                classpath: "components/droppable/droppable"
            }, {
                id: "GridComp",
                name: "GridComp",
                classpath: "components/gallery/grid"
            }, {
                id: "GalleryComp",
                name: "GalleryComp",
                classpath: "components/gallery/gallery"
            }, {
                id: "WidgetComp",
                name: "WidgetComp",
                classpath: "components/widgetwrapper/widget"
            }, {
                id: "AdvancedVideoPlayerComp",
                name: "AdvancedVideoPlayerComp",
                classpath: "components/advancedvideoplayer/advanced-videoplayer"
            }, {
                id: "InputTextComp",
                name: "InputTextComp",
                classpath: "components/inputtext/inputtext"
            }, {
                id: "CaseComp",
                name: "CaseComp",
                classpath: "components/case/case"
            }, {
                id: "PelmanismComp",
                name: "PelmanismComp",
                classpath: "components/pelmanism/pelmanism"
            }, {
                id: "ListComp",
                name: "ListComp",
                classpath: "components/list/list"
            }, {
                id: "FibComp",
                name: "FibComp",
                classpath: "components/fibcomp/fib"
            }, {
                id: "DatapickerComp",
                name: "DatapickerComp",
                classpath: "components/datapicker/datapicker"
            }, {
                id: "FibinputComp",
                name: "FibinputComp",
                classpath: "components/fibinput/fibinput"
            }, {
                id: "feedbackComp",
                name: "feedbackComp",
                classpath: "components/feedback/feedback"
            }, {
                id: "popupComp",
                name: "popupComp",
                classpath: "components/popup/popup"
            }, {
                id: "sortableComp",
                name: "sortableComp",
                classpath: "components/sortable/sortable"
            }, {
                id: "hintComp",
                name: "hintComp",
                classpath: "components/hint/hint"
            }, {
                id: "sortingComp",
                name: "sortingComp",
                classpath: "components/sorting/sorting"
            }, {
                id: "wizardComp",
                name: "wizardComp",
                classpath: "components/wizard/wizard"
            }, {
                id: "livesComp",
                name: "livesComp",
                classpath: "components/lives/lives"
            }, {
                id: "tabComp",
                name: "tabComp",
                classpath: "components/tab/tab"
            }, {
                id: "flipcardComp",
                name: "flipcardComp",
                classpath: "components/flipcard/flipcard"
            }, {
                id: "canvasComp",
                name: "canvasComp",
                classpath: "components/canvas/canvas"
            }, {
                id: "drawingbuttonComp",
                name: "drawingbuttonComp",
                classpath: "components/drawingbutton/drawingbutton"
            }, {
                id: "colorpickerComp",
                name: "colorpickerComp",
                classpath: "components/colorpicker/colorpicker"
            }, {
                id: "lifeComp",
                name: "lifeComp",
                classpath: "components/life/life"
            }, {
                id: "matchingChildComp",
                name: "matchingChildComp",
                classpath: "components/matchingChild/matchingChild"
            }, {
                id: "matchingComp",
                name: "matchingComp",
                classpath: "components/matching/matching"
            }, {
                id: "animationComp",
                name: "animationComp",
                classpath: "components/animation/animation"
            }, {
                id: "circularsliderComp",
                name: "circularsliderComp",
                classpath: "components/circularslider/circularslider"
            }, {
                id: "circularsliderslideComp",
                name: "circularsliderslideComp",
                classpath: "components/circularsliderslide/circularsliderslide"
            }, {
                id: "searchComp",
                name: "searchComp",
                classpath: "components/search/search"
            }, {
                id: "msliderComp",
                name: "msliderComp",
                classpath: "components/mslider/mslider"
            }, {
                id: "mslidertrackComp",
                name: "mslidertrackComp",
                classpath: "components/mslidertrack/mslidertrack"
            }, {
                id: "msliderthumbComp",
                name: "msliderthumbComp",
                classpath: "components/msliderthumb/msliderthumb"
            }, {
                id: "mpathanimatorComp",
                name: "mpathanimatorComp",
                classpath: "components/mpathanimator/mpathanimator"
            }, {
                id: "colorpaletteComp",
                name: "colorpaletteComp",
                classpath: "components/colorpalette/colorpalette"
            }]
        }
    };
    return t
}), define("player/factory/factory", ["marionette", "player/factory/complist"], function(t, e) {
    var i = function() {
        return this.initFactory(), _.extend(this, Backbone.Events)
    };
    return i.prototype.COMP_CREATION_COMPLETE_EVENT = "compCreationCompleteEvent", i.prototype.members = {
        compDict: null,
        compRawData: null
    }, i.prototype.initFactory = function() {
        this.members.compDict = {}, this.members.compRawData = e
    }, i.prototype.successHandler = function(t) {
        this.members.compRawData = t
    }, i.prototype.getRawData = function() {
        return this.members.compRawData.components
    }, i.prototype.getComponent = function(t) {
        return this.createComponent(t)
    }, i.prototype.createComponent = function(t) {
        var e, i, n, o, r, s, a, l;
        return e = t.strCompType, l = "Comp", i = l, n = this.getRawData().mComp, o = String(e + l).replace(/-/g, ""), r = _.filter(n, function(t) {
            return t.id.toLowerCase() === o.toLowerCase()
        }), s = r[0].classpath, a = this, require([s], function(e) {
            a.onCompCreationComplete(e, t)
        })
    }, i.prototype.onCompCreationComplete = function(t, e) {
        var i = e.strCompType;
        e.componentRef = t, this.members.compDict[i] = t, this.trigger(this.COMP_CREATION_COMPLETE_EVENT, e)
    }, i.prototype.destroy = function() {
        return this.members.compDict = null, !0
    }, i
}), define("simPictor/factory/sim-factory", ["marionette", "player/factory/factory"], function(t, e) {
    var i;
    return i = function() {
        return _.extend(this, new e)
    }, i.prototype.getSimComponent = function(t, e) {
        e.strCompType = t, this.getComponent(e)
    }, i
}), define("simPictor/pictor-const", ["require", "exports", "module"], function() {
    var t = {
        GLOBAL_COMP_LAYOUT_SCRIPT: "globalCompLayout",
        ANIMATION_PLAYER: "animation-player",
        SCREEN: "screen",
        ERROR_WHILE_DESTROY_ASSEMBLER: "Error while destroying Assembler!!!"
    };
    return t
}), define("player/utils/json-manipulator", ["marionette", "json2xml", "xml2json", "player/constants/errorconst"], function() {
    var t;
    return t = function() {
        return _.extend(this, Backbone.Events)
    }, t.prototype.arrStyleClassList = [], t.prototype.getChildrenList = function(t, e, i, n, o) {
        var r, s = t[e];
        return r = i, void 0 === r && (r = []), o === !0 && s && (s.id = "", this.arrStyleClassList.push(s.data.styleClass), s.data.styleClass = ""), s.parentObject = {
            parentId: n
        }, r.push(s), void 0 !== s.components && s.components.length > 0 && this.getChildrenList(s.components, 0, r, s.id, o), e += 1, t.length > e ? this.getChildrenList(t, e, r, n, o) : r
    }, t.prototype.getScreenCreationCompList = function(t, e, i, n, o) {
        var r, s = t[e];
        return r = i, void 0 === r && (r = []), o === !0 && s && (s.id = "", this.arrStyleClassList.push(s.data.styleClass), s.data.styleClass = ""), s.parentObject = {
            parentId: n
        }, r.push(s), void 0 !== s.components && s.components.length > 0 && this.getScreenCreationCompList(s.components, 0, r, s.id, o), e += 1, t.length > e ? this.getScreenCreationCompList(t, e, r, n, o) : r
    }, t.prototype.getComponentJSONDataById = function(t, e) {
        return this.searchInJSON(t, e)
    }, t.prototype.compareById = function(t, e) {
        return t === e.id
    }, t.prototype.searchInJSON = function(t, e, i) {
        var n, o, r, s, a = this;
        if (e.id === t) s = {}, s.index = 0, s.node = e, i && (s.parent = i.id);
        else if (void 0 !== e.components) s = this.searchInJSON(t, e.components, e);
        else
            for (o = 0; o < e.length && (n = e[o], void 0 === s); o += 1)
                if (r = a.compareById(t, n), r === !1 && n.components) s = this.searchInJSON(t, n.components, n);
                else if (r === !0) {
            s = {}, s.index = o, s.node = n, s.parent = e, s.parentId = i.id;
            break
        }
        return s
    }, t.prototype.getCloneObject = function(t) {
        return t = JSON.stringify(t), t = $.parseJSON(t)
    }, t.prototype.cleanJSONData = function(t) {
        var e = {};
        return this.arrStyleClassList = [], e.arrJsonList = this.getChildrenList([t], 0, void 0, void 0, !0), e.jsonElement = t, e.styleList = this.arrStyleClassList.slice(0), e
    }, t.prototype.appendChildComponent = function(t, e) {
        void 0 === t.components && (t.components = []), t.components.push(e)
    }, t.prototype.moveElementPosition = function(t, e, i) {
        return t.splice(i, 0, t.splice(e, 1)[0]), t
    }, t.prototype.removeJSONNode = function(t, e) {
        var i = this.getComponentJSONDataById(t, e);
        return void 0 !== i ? (i.parent.splice(i.index, 1), !0) : !1
    }, t.prototype.getJSONDataNode = function(t, e) {
        var i = 2,
            n = e;
        for (i = 2; i < t.length - 1; i += 1) n = n[t[i]];
        return n
    }, t.prototype.getParentId = function(t, e) {
        var i = this.getComponentJSONDataById(t, e);
        return void 0 !== i ? this.searchInJSON(t, e).parentId : void 0
    }, t.prototype.getParentObject = function(t, e) {
        var i = this.getComponentJSONDataById(t, e);
        return void 0 !== i ? this.searchInJSON(t, e) : void 0
    }, t.prototype.updateAttachState = function(t, e, i, n, o) {
        var r, s = t[e];
        return r = i, void 0 === r && (r = []), s.state = o, r.push(s), void 0 !== s.components && s.components.length > 0 && this.updateAttachState(s.components, 0, r, s.id, o), e += 1, e < t.length ? this.updateAttachState(t, e, r, n, o) : r
    }, t.prototype.sortByAlphabet = function(t) {
        var e = t;
        return e.sort(function(t, e) {
            return t.id < e.id ? -1 : t.id > e.id ? 1 : 0
        }), e
    }, t.prototype.filterByType = function(t) {
        var e = t,
            i = {};
        return e.forEach(function(t) {
            i[t.type] ? i[t.type].push(t) : (i[t.type] = [], i[t.type].push(t))
        }), e = i
    }, t.prototype.cleanJsonData = function(t, e, i) {
        var n = t[e];
        return delete n[i], void 0 !== n.components && n.components.length > 0 && this.cleanJsonData(n.components, 0, i), e += 1, t.length > e ? this.cleanJsonData(t, e, i) : "done"
    }, t
}), define("player/base/base-layout-comp", ["marionette", "player/events/eventsconst"], function(t, e) {
    var i;
    return i = Backbone.Marionette.Layout.extend({
        eventConst: e,
        isBaseLayoutComp: !0,
        isDestroyCalled: !1,
        nStageScale: 1,
        strCompId: void 0,
        bEditor: !1,
        parentDiv: null,
        componentType: void 0,
        existingScreenElem: void 0,
        $existingScreenElem: void 0
    }), i.prototype.initBaseLayoutComp = function() {}, i.prototype.getName = function() {
        return this.strName
    }, i.prototype.beforeRender = function(t, e) {
        this.$el = e, this.existingScreenElem = t, this.$existingScreenElem = e
    }, i.prototype.onBeforeRender = function() {
        void 0 !== this.existingScreenElem && (this.$el = this.$existingScreenElem, this.template = _.template(this.$el.innerHTML))
    }, i.prototype.setName = function(t) {
        this.strName = t
    }, i.prototype.setID = function(t) {
        this.strCompId = t
    }, i.prototype.getID = function() {
        return this.strCompId
    }, i.prototype.setState = function() {}, i.prototype.setStageScaleValue = function(t) {
        this.nStageScale = t
    }, i.prototype.getStageScaleValue = function() {
        return this.nStageScale
    }, i.prototype.destroy = function(t) {
        if (t !== !0) throw new Error("Destroy must be implemented in child class.");
        return this.isDestroyCalled = !0, this.isDestroyCalled
    }, i.prototype.setState = function() {}, i.prototype.resetActivity = function() {}, i.prototype.customEventDispatcher = function(t, e, i) {
        var n = {};
        n.data = e, n.customData = i, n.target = e, n.type = t, e.trigger(t, n)
    }, i.prototype.onPlayerResizeEvent = function() {}, i.prototype.show = function() {
        this.$el.show()
    }, i.prototype.hide = function() {
        this.$el.hide()
    }, i.prototype.compClick = function() {
        this.customEventDispatcher("compClick", this)
    }, i.prototype.compRollover = function() {
        this.customEventDispatcher("compRollover", this)
    }, i.prototype.compRollout = function() {
        this.customEventDispatcher("compRollout", this)
    }, i.prototype.setStyle = function(t) {
        void 0 !== t && $($(this.$el).children()[0]).css(t)
    }, i.prototype.selectComponent = function() {
        var t = this;
        this.parentDiv = this.$el, this.parentDiv.off("contextmenu").on("contextmenu", t, t.handelContextMenu), this.parentDiv.off("click").on("click", t, t.onCompClickInEditMode)
    }, i.prototype.handelContextMenu = function(t) {
        var e = t.data,
            i = {};
        i.compID = e.getID(), i.eventData = t, t.stopPropagation && (t.stopPropagation(), t.preventDefault()), e.customEventDispatcher(e.eventConst.SELECTOR_RIGHT_CLICK_EVENT, e, i)
    }, i.prototype.onCompClickInEditMode = function(t) {
        var e = t.data;
        t.stopPropagation && t.stopPropagation(), e.customEventDispatcher(e.eventConst.SELECTOR_CLICK_EVENT, e, e.getID())
    }, i.prototype.setHtmlAttr = function(t) {
        var e = this;
        _.filter(t, function(t, i) {
            e.$el.attr(i, t)
        })
    }, i.prototype.onUpdateComplete = function() {}, i.prototype.sendStatementToLRS = function(t, e) {
        var i = {};
        i.statement = e, i.compid = this.strCompId, i.type = this.componentType, i.action = t, this.bEditor === !1 && this.customEventDispatcher("sendtincandataevent", this, i)
    }, i.prototype.destroy = function(t) {
        if (t !== !0) throw new Error("Destroy must be implemented in child class.");
        return this.parentDiv && (this.parentDiv.off("click"), this.parentDiv.off("contextmenu")), this.isDestroyCalled = !0, this.isDestroyCalled
    }, i
}), define("player/base/base-display-comp", ["player/base/base-layout-comp", "player/events/eventsconst"], function(t, e) {
    var i = t.extend({
        ALL_CHILDREND_ADDED_IN_DOM: "allChildAddedInDom",
        displayObject: !0,
        EventConst: e,
        initialize: function() {
            this.componentType = "ContainerComp"
        }
    });
    return i.prototype.__super__ = t, i.prototype.addChild = function(t) {
        var e, i = this;
        $.isArray(t) && t.length > 0 ? _.each(t, function(t) {
            t.hasOwnProperty("index") && (e = t.index), t.hasOwnProperty("parent") && t.hasOwnProperty("component") && i.doAddChild(t.component, t.parent, e)
        }) : (t.hasOwnProperty("index") && (e = t.index), t.hasOwnProperty("parent") && t.hasOwnProperty("component") ? i.doAddChild(t.component, t.parent, e) : i.doAddChild(t, this.$el))
    }, i.prototype.removeChild = function(t) {
        var e = this;
        $.isArray(t) ? _.each(t, function(t) {
            t.hasOwnProperty("parent") && t.hasOwnProperty("component") && e.doRemoveChild(t.component, t.parent)
        }) : t.hasOwnProperty("parent") && t.hasOwnProperty("component") && e.doRemoveChild(t.component, t.parent)
    }, i.prototype.addChildAt = function() {}, i.prototype.removeChildAt = function() {}, i.prototype.doAddChild = function(t) {
        this.$el.append(t.el), t.render(), void 0 !== t.onShow && t.onShow()
    }, i.prototype.doRemoveChild = function(t, e) {
        t && e && (e instanceof jQuery || (e = $(e)), $(t.el).remove())
    }, i.prototype.childCreationComplete = function() {
        this.customEventDispatcher(this.ALL_CHILDREND_ADDED_IN_DOM, this, {})
    }, i.prototype.dispatchScreenEvent = function(t, e) {
        this.customEventDispatcher(t, this, e)
    }, i.prototype.destroy = function(t) {
        return this.__super__.prototype.destroy(t)
    }, i
}), define("components/componentselector/component-selector", ["marionette", "player/base/base-display-comp", "player/events/eventsconst"], function(t, e, i) {
    var n = e.extend({
        template: _.template(""),
        selectedStyle: "currentSelected",
        childElement: void 0,
        bSelected: !1,
        bSetFocus: void 0,
        str: null,
        ctrlDown: !1,
        keyBackspace: 8,
        ctrlKey: 17,
        keyMoveUp: 38,
        keyMoveDown: 40,
        keyDelete: 46,
        keyC: 67,
        keyV: 86,
        keyX: 88,
        strRegionName: void 0,
        bEnable: !0,
        bStrictMode: !1
    });
    return n.SELECTOR_ACTIVE_STYLE = "selectorActive", n.prototype.DOUBLE_CLICK_EVENT = "doubleClick", n.DOUBLE_CLICK_EVENT = "doubleClick", n.prototype.getComponent = function() {
        return this.childElement
    }, n.prototype.onShow = function() {}, n.prototype.setChildElement = function(t) {
        this.childElement = t, "screen" !== t.componentType && this.makeDraggable(t.$el), "screen" === t.componentType, this.addDoubleClick()
    }, n.prototype.setEditingMode = function(t) {
        return t && (this.bStrictMode = t, this.manageEditingMode()), this.bStrictMode
    }, n.prototype.addOnScreen = function(t) {
        var e = this;
        t.$el.on("keydown", function(i) {
            i.keyCode === e.ctrlKey ? e.ctrlDown = !0 : i.keyCode === e.keyV && e.performKeyAction(t, i)
        }).keyup(function(t) {
            t.keyCode === e.ctrlKey && (e.ctrlDown = !1)
        }), t.$el.on("keyup", function(i) {
            e.ctrlDown && i.which === e.keyV && (e.str = "LAYOUT_ELEMENT_PASTE", e.callCutCopyPaste(t, e.str, i))
        })
    }, n.prototype.addKeyboardClick = function(t) {
        var e = this;
        t.$el.on("keyup", function(i) {
            (i.which === e.keyDelete || i.which === e.keyBackspace && device.windows() === !1) && (t.$el.off("keyup"), e.str = "DELETE_COMPOPNENT", e.callCutCopyPaste(t, e.str), i.stopPropagation())
        }), t.$el.on("keydown", function(i) {
            i.keyCode === e.ctrlKey ? e.ctrlDown = !0 : e.performKeyAction(t, i)
        }).keyup(function(t) {
            t.keyCode === e.ctrlKey && (e.ctrlDown = !1)
        }), t.$el.on("keyup", function() {})
    }, n.prototype.performKeyAction = function(t, e) {
        var i = this.ctrlDown === !0 || e.metaKey === !0;
        i && e.which === this.keyC ? (this.str = "LAYOUT_ELEMENT_COPY", this.callCutCopyPaste(t, this.str), e.stopPropagation()) : i === !0 && e.which === this.keyV ? (this.str = "LAYOUT_ELEMENT_PASTE", this.callCutCopyPaste(t, this.str), e.stopPropagation()) : i === !0 && e.which === this.keyX ? (this.str = "LAYOUT_ELEMENT_CUT", this.callCutCopyPaste(t, this.str), e.stopPropagation()) : i === !0 && e.which === this.keyMoveUp ? (e.preventDefault(), this.str = "LAYOUT_MOVE_UP", this.callCutCopyPaste(t, this.str), e.stopPropagation()) : i === !0 && e.which === this.keyMoveDown && (e.preventDefault(), this.str = "LAYOUT_MOVE_DOWN", this.callCutCopyPaste(t, this.str), e.stopPropagation())
    }, n.prototype.callCutCopyPaste = function(t, e) {
        var n = {},
            o = this.prepareData();
        o.data.task = e, o.compId = t.getID(), n.task = e, o.regionToUpdate = this.regionName(), n.compData = o, this.customEventDispatcher(i.COMPONENT_DATA_PROPERTY_UPDATED, t, n)
    }, n.prototype.isSelected = function(t) {
        return void 0 !== t && (t === !0 ? (this.bSelected === !1 && t === !0 && (this.getComponent().setFocus !== !1 && this.$el.parent("div").focus(), this.getComponent().setFocus = void 0), this.$el.addClass(n.SELECTOR_ACTIVE_STYLE)) : (this.$el.removeClass(n.SELECTOR_ACTIVE_STYLE), this.childElement.customEventDispatcher(this.EventConst.COMPONENT_DESELECTED, this.childElement, this.childElement.getID())), this.bSelected = t), !this.bSelected || "label" !== this.getComponent().componentType && "button" !== this.getComponent().componentType ? this.$editFld && (this.$editFld.prop("contentEditable", "false"), this.$editFld.off("click keyup blur"), this.$editFld.blur(), this.$editFld.removeAttr("style"), this.$editBtn.remove(), this.$el.show()) : this.makeFieldEditable(), this.bSelected
    }, n.prototype.makeFieldEditable = function() {
        var t, e, i = this;
        e = this.$el.next(), e.off("click keyup blur").on("click keyup blur", $.proxy(this.updateTextValue, this)), t = $("<div class='btnUpdateFld glyphicon glyphicon-edit'></div>"), t.off("click").on("click", function() {
            t.hide(), e.prop("contentEditable", "true"), e.attr("style", "border:1px solid black; background-color:black; color:white; padding: 2px;letter-spacing:2px;"), e.focus(), document.execCommand("selectAll", !1, null), i.$el.hide()
        }), this.$el.append(t), this.$editBtn = t, this.$editFld = e
    }, n.prototype.updateTextValue = function(t) {
        var e = {},
            n = this.prepareData();
        if (t.stopPropagation(), "click" !== t.type && (13 === t.keyCode || "blur" === t.type)) {
            switch (this.$el.show(), this.$editBtn.show(), this.$editFld.prop("contentEditable", "false"), this.$editFld.removeAttr("style"), this.getComponent().componentType) {
                case "button":
                    n.data.task = "UPDATE_JSON_data_label";
                    break;
                case "label":
                    n.data.task = "UPDATE_JSON_data_text"
            }
            n.compId = this.getComponent().getID(), n.data.updatedValue = this.$editFld.text(), e.task = i.COMPONENT_DATA_PROPERTY_UPDATED, n.regionToUpdate = this.regionName(), e.compData = n, this.customEventDispatcher(i.COMPONENT_DATA_PROPERTY_UPDATED, this.childElement, e)
        }
    }, n.prototype.populatePropertyPanelData = function() {
        this.childElement.customEventDispatcher(this.childElement.eventConst.SELECTOR_CLICK_EVENT, this.childElement, this.childElement.getID())
    }, n.prototype.select = function(t) {
        this.getComponent().setFocus = t, this.getComponent().onCompClickInEditMode({
            data: this.getComponent()
        })
    }, n.prototype.makeDraggable = function(t) {
        var e = this,
            i = {};
        t.draggable({
            containment: "parnet",
            handle: e.$el,
            stop: function(t, n) {
                i.event = t, i.ui = n, i.type = "stop", e.handleChangesFromSelector(i)
            },
            drag: function(t, n) {
                i.event = t, i.ui = n, i.type = "drag", e.handleChangesFromSelector(i)
            }
        }), this.manageEditingMode()
    }, n.prototype.manageEditingMode = function() {
        "screen" !== this.childElement.componentType && (this.bStrictMode === !0 ? this.childElement.$el.draggable("disable") : this.childElement.$el.draggable("enable"))
    }, n.prototype.handleChangesFromSelector = function(t) {
        var e = {},
            n = this.prepareData();
        n.data.task = "UPDATE_CSS_left", n.compId = this.childElement.getID(), n.data.updatedValue = t.ui.position.left + "px", n.data.selectorText = this.childElement.objData.styleClass, e.task = i.COMPONENT_DATA_PROPERTY_UPDATED, n.regionToUpdate = this.regionName(), e.compData = n, this.customEventDispatcher(i.COMPONENT_DATA_PROPERTY_UPDATED, this.childElement, e), n.data.task = "UPDATE_CSS_top", n.compId = this.childElement.getID(), n.data.updatedValue = t.ui.position.top + "px", n.data.selectorText = this.childElement.objData.styleClass, e.task = i.COMPONENT_DATA_PROPERTY_UPDATED, n.regionToUpdate = this.regionName(), e.compData = n, this.customEventDispatcher(i.COMPONENT_DATA_PROPERTY_UPDATED, this.childElement, e), this.childElement.$el.attr("style", ""), this.select(!0)
    }, n.prototype.regionName = function(t) {
        return void 0 === t ? this.strRegionName : (this.strRegionName = t, void 0)
    }, n.prototype.prepareData = function() {
        var t = {};
        return t.compId = this.childElement.getID(), t.data = {}, t
    }, n.prototype.enable = function(t) {
        var e = t === !0 ? "auto" : "none";
        this.bEnable = t, this.childElement.$el.css("pointer-events", e), t === !1 ? this.$el.addClass("selectordisable") : this.$el.removeClass("selectordisable")
    }, n.prototype.addDoubleClick = function() {
        var t = this;
        this.$el.off("dblclick").on("dblclick", t, t.handleDoubleClick)
    }, n.prototype.handleDoubleClick = function(t) {
        var e = t.data;
        e.trigger(e.DOUBLE_CLICK_EVENT, e)
    }, n.prototype.SelectorSuper = e, n.prototype.destroy = function() {
        return this.childElement.$el.off("keyup"), this.childElement.$el.off("keydown"), this.SelectorSuper.prototype.destroy.call(this, !0)
    }, n
}), define("simPictor/assembler", ["marionette", "simPictor/factory/sim-factory", "simPictor/pictor-const", "player/utils/json-manipulator", "components/componentselector/component-selector"], function(t, e, i, n, o) {
    var r;
    return r = Backbone.Marionette.Controller.extend({
        arrCreatedCompList: void 0,
        wizardChildRoot: void 0,
        objCurrentCompJson: void 0,
        objJsonUtil: void 0,
        jsonDictById: {},
        screenDict: {},
        objEditorManager: null,
        arrCompToBeCreated: [],
        arrScreenCompList: [],
        objWarehouse: null,
        jsonData: null,
        objFactory: null,
        objActivity: null,
        editorController: null,
        objSimEventController: null,
        compCounter: 0,
        compDict: void 0,
        screenJsPath: void 0,
        objScreenHelper: void 0,
        objScreenClassDefinitation: void 0,
        objGlobalScreenRef: void 0,
        globalCompDict: void 0,
        bEditor: !1,
        bEditorModeCompCreation: !1,
        objEditorModeComponent: null,
        objSelectorDict: null,
        objScreenRef: void 0,
        objChildrenTab: {},
        memoryObjRef: {},
        nTabIndex: 0,
        cacheMode: !1,
        strCurrentSelectedId: void 0,
        bStrictMode: !1,
        v3Html: !1,
        jsonCopy: void 0,
        constructor: function(t, e, i, o, r, s) {
            this.objJsonUtil = new n, this.jsonDictById = {}, this.resetAllVariable(), this.jsonData = t, this.objEditorManager = o, this.htmlTemplates = e, this.objActivity = i, this.objSimEventController = r, this.objSimEventController.objActivityRef = this.objActivity, this.objSelectorDict = {}, this.objScreenRef = {}, this.objChildrenTab = {}, this.bEditor = s, this.memoryObjRef = {}, this.arrCreatedCompList = [], this.init()
        }
    }), r.COMP_CREATION_COMPLETE = "comp_creation_complete", r.COMP_READY_TO_ATTACH = "comp_ready_to_attach", r.GLOBAL_COMP_CREATED = "gloabl_components_created", r.COMP_CREATED_IN_EDITOR_MODE = "comp_created_in_editor_mode", r.COMPONENT_REMOVED_FROM_DOM = "component_removed_from_dom", r.EDIT_DOM_LAYOUT_UPDATED = "editDomLayoutUpdated", r.prototype.resetAllVariable = function() {
        this.arrScreenCompList.splice(0, this.arrScreenCompList.length), this.objActivity = null, this.objEditorManager = null, this.jsonData = null, this.objSimEventController = null
    }, r.prototype.init = function() {
        var t = this;
        this.objFactory = new e, this.objFactory.on(t.objFactory.COMP_CREATION_COMPLETE_EVENT, t.onComponentCreated), this.objSimEventController.on(o.DOUBLE_CLICK_EVENT, t.onCompDoubleClick, t)
    }, r.prototype.start = function() {
        var t = this;
        this.compDict = {}, this.editorController = this.objEditorManager.getEditorController(this.objActivity.strRegionName), this.editorController.off(this.editorController.SIM_COMP_CREATION_COMPLETE).on(this.editorController.SIM_COMP_CREATION_COMPLETE, t.onSimCompCreationComplete, this), this.assembleComponent(this.jsonData)
    }, r.prototype.assembleComponent = function(t) {
        var e = [],
            i = [],
            e = JSON.stringify(t, function(t, e) {
                if ("object" == typeof e && null !== e) {
                    if (-1 !== i.indexOf(e)) return;
                    i.push(e)
                }
                return e
            });
        i = null, this.jsonCopy = JSON.parse(e), this.compCounter = 0, this.arrCompToBeCreated = this.v3Html === !0 ? t.components : this.getComponentList(t, []), void 0 !== this.jsonData.script && this.bEditor === !1 ? (this.jsonData.script = this.objActivity.objPathUpdater.getValidatedPath(this.objActivity.strRegionName, this.jsonData.script), this.requireHelper(this.jsonData.script)) : "undefined" == typeof this.arrCompToBeCreated[0].script ? this.getComponent(this.arrCompToBeCreated[0]) : (this.arrCompToBeCreated[0].script = this.objActivity.objPathUpdater.getValidatedPath(this.objActivity.strRegionName, this.arrCompToBeCreated[0].script.replace(/"/g, "")), this.requireHelper(this.arrCompToBeCreated[0].script))
    }, r.prototype.getComponentList = function(t) {
        return this.objJsonUtil.getChildrenList([t], 0)
    }, r.prototype.getComponent = function(t) {
        var e = t;
        if ("detached" === t.state) {
            if (t.components && this.objJsonUtil.updateAttachState(t.components, 0, void 0, void 0, "detached"), e = void 0, this.compCounter = this.compCounter + 1, this.compCounter < this.arrCompToBeCreated.length) return e = this.arrCompToBeCreated[this.compCounter], this.getComponent(e), 0;
            this.handleCompCreation()
        }
        "wizard" === t.type && t.components.length > 0 && (this.objCurrentCompJson = t, this.objJsonUtil.updateAttachState(t.components, 0, void 0, void 0, "detached"), this.objJsonUtil.updateAttachState([t.components[Number(t.data["default"])]], 0, void 0, void 0, "attached"), this.objCurrentCompJson.currentIndex = this.objCurrentCompJson.data["default"]), void 0 !== e && (e.classRef = this, this.jsonDictById[t.id] = t, this.getComponentEditor(t.type, t))
    }, r.prototype.getComponentEditor = function(t, e) {
        this.editorController.createSimComp(t, e)
    }, r.prototype.onSimCompCreationComplete = function(t) {
        var e, n, o, r, s = {},
            a = {};
        if (void 0 !== this.compDict[t.compData.id]) throw new Error(" '" + t.compData.id + "'!!!! " + this.objActivity.objErrConst.DUPLICATE_COMPONENT_ID_FOUND_IN_JSON);
        switch (e = t.jsonData.parentId, t.compData.defaultData = void 0 === t.compData.defaultData ? {} : t.compData.defaultData, t.compData.defaultData.updatedScale = this.objActivity.nStageScale, this.bEditor = t.bEditor, t.jsonData.type !== i.SCREEN && (n = new t.compData.componentRef(t.compData.defaultData), this.v3Html === !0 && (n.v3Html = !0, n.beforeRender(t.jsonData.htmlData.innerHTML, t.jsonData.htmlData)), n.bEditor = t.bEditor, s.component = n, s.parent = e), t.jsonData.type) {
            case i.SCREEN:
                this.objScreenClassDefinitation = t.compData.componentRef, this.v3Html === !0 ? (n = new t.compData.componentRef, n.v3Html = !0, n.beforeRender(t.jsonData.htmlData.innerHTML, t.jsonData.htmlData)) : n = new t.compData.componentRef({
                    template: _.template(this.htmlTemplates[t.jsonData.templateId])
                }), this.objActivity[t.compData.id] = n, this.objActivity.objScreen = n, this.objActivity.isScreenInitalized = !1, this.v3Html !== !0 && this.objActivity.screenHolder.show(n), void 0 !== t.compData.defaultData && void 0 !== t.compData.defaultData.styleClass && $(n.$el).addClass(t.compData.defaultData.styleClass), this.objScreenRef = n, this.objScreenRef.PopupManager = this.objActivity.PopupManager, this.bEditor === !1 && $(n.$el).addClass("hide"), this.applyHtmlAttributes(n, t.jsonData.html);
                break;
            default:
                if (void 0 !== t.compData.defaultData && void 0 !== t.compData.defaultData.templateId && (t.compData.defaultData.templateId = this.objActivity.getInlineTemplateById(t.compData.defaultData.templateId)), this.objEditorModeComponent && void 0 !== this.objEditorModeComponent.parentId ? (o = this.compDict[this.objEditorModeComponent.parentId].objComp, this.objEditorModeComponent.parentData = this.objEditorModeComponent.parentId, this.objEditorModeComponent.parentId = void 0) : o = this.compDict[t.jsonData.parentObject.parentId].objComp, n.setID(t.jsonData.id), !o.displayObject) throw r = "parent must be a display object! parent:" + o.getID() + " Child:" + t.compData.id, new Error(r);
                o[t.jsonData.id] = n, o.addChild(s), void 0 !== t.jsonData.style && this.applyStyleProperty(n, t.jsonData.style), this.applyHtmlAttributes(n, t.jsonData.html), n.setStageScaleValue(this.objActivity.nStageScale)
        }
        a = {}, a.parentId = e, a.objComp = n, a.jsonData = t.jsonData, a.type = t.jsonData.type, void 0 !== this.objScreenHelper && (this.objScreenHelper[t.jsonData.id] = n, void 0 !== t.jsonData.name && (this.objScreenHelper[t.jsonData.name] = n)), void 0 === n.getID() && a.objComp.setID(t.jsonData.id), $(n.el).attr("id", t.jsonData.id), this.arrScreenCompList.push(a), this.compDict[a.objComp.getID()] = a, this.compCounter = this.compCounter + 1, this.bEditor === !1 ? (this.arrCreatedCompList.push(a), this.createNextComponent()) : (n.$el.attr("tabindex", this.nTabIndex), this.nTabIndex = this.nTabIndex + 1, this.enableCompEditMode(n, "screen" === t.jsonData.type), this.handleCompCreation()), "wizard" === a.jsonData.type && (this.bEditor === !0 && (this.objCurrentCompJson.wizardDataInEditMode = this.objCurrentCompJson), a.objComp.setWizardScreenData(this.objCurrentCompJson)), this.bEditor && this.isWizardChildAdded && (this.compCounter >= this.arrCompToBeCreated.length ? (void 0 === this.wizardChildRoot && (this.wizardChildRoot = a), this.checkIfCompAddedInWizard(this.wizardChildRoot)) : void 0 === this.wizardChildRoot && (this.wizardChildRoot = a)), this.bEditor || this.objActivity.setScreenText(a.objComp, a.jsonData), delete t.compData.target
    }, r.prototype.createGlobalComponents = function() {
        var t, e = this;
        t = new this.objScreenClassDefinitation({
            template: _.template(this.htmlTemplates[i.GLOBAL_COMP_LAYOUT_SCRIPT])
        }), this.objActivity.globalCompHolder.show(t), this.objGlobalScreenRef = t, this.objActivity[t.id] = t, this.arrCompToBeCreated = this.getComponentList(this.objActivity.jsonData.globalComponents, [])[0], this.compCounter = 0, this.editorController = this.objEditorManager.getEditorController(this.objActivity.strRegionName), this.editorController.off(this.editorController.SIM_COMP_CREATION_COMPLETE), this.editorController.on(this.editorController.SIM_COMP_CREATION_COMPLETE, e.onGlobalCompCreationComplete, this), this.getComponent(this.arrCompToBeCreated[0])
    }, r.prototype.onGlobalCompCreationComplete = function(t) {
        var e, n = {},
            o = {};
        switch (void 0 === this.globalCompDict && (this.globalCompDict = {}), t.jsonData.type !== i.SCREEN && (e = new t.compData.componentRef(t.compData.defaultData), n.component = e, n.parent = t.jsonData.parentId), t.jsonData.type) {
            default: this.objGlobalScreenRef.addChild(n),
            this.objGlobalScreenRef[t.jsonData.id] = e,
            void 0 !== t.jsonData.style && this.applyStyleProperty(e, t.jsonData.style),
            this.applyHtmlAttributes(e, t.jsonData.html)
        }
        o = {}, o.parentId = t.jsonData.parentId, o.objComp = e, o.jsonData = t.jsonData, o.type = t.jsonData.type, e.setID(t.jsonData.id), $($(e.el).children()[0]).attr("id", t.jsonData.id), this.globalCompDict[e.getID()] = o, this.compCounter = this.compCounter + 1, this.objSimEventController.registerComponentEvents(o, !0)
    }, r.prototype.requireHelper = function(t) {
        var e = this;
        require([t], function(t) {
            e.objScreenHelper = new t, e.objScreenHelper.model = e.objActivity.model, e.objActivity.objScreenHelper = e.objScreenHelper, e.objScreenHelper.objActivity = e.objActivity, e.getComponent(e.arrCompToBeCreated[0]), void 0 !== e.objScreenHelper.onScreenPreInitalization && e.bEditor === !1 && e.objScreenHelper.onScreenPreInitalization.apply(e.objScreenHelper)
        })
    }, r.prototype.handleCompCreation = function() {
        var t;
        this.arrCompToBeCreated.length > this.compCounter ? this.getComponent(this.arrCompToBeCreated[this.compCounter]) : this.bEditorModeCompCreation !== !0 ? this.onComponentsCreationFinish() : (this.compCounter >= this.arrCompToBeCreated.length && (this.bEditorModeCompCreation = !1, this.objEditorModeComponent.parentId = this.objEditorModeComponent.parentData, t = this.objJsonUtil.getComponentJSONDataById(this.objEditorModeComponent.parentId, this.jsonData), void 0 !== t && (t.node.components = void 0 === t.node.components ? [] : t.node.components, -1 === t.node.components.indexOf(this.objEditorModeComponent.compJSON) && t.node.components.push(this.objEditorModeComponent.compJSON)), this.eventDispatcher(r.COMP_CREATED_IN_EDITOR_MODE, t.node), this.eventDispatcher(r.EDIT_DOM_LAYOUT_UPDATED, {})), this.objEditorModeComponent = null)
    }, r.prototype.executeAllChildAddedEvent = function() {
        var t, e = this,
            n = [];
        for ($.each(this.compDict, function(t, o) {
                o.type !== i.SCREEN && (void 0 !== o.jsonData.data.linked && o.objComp.linkedWith(e.compDict[o.jsonData.data.linked].objComp), n.push(o.objComp))
            }), t = n.length - 1; t >= 0; t -= 1) n[t].onUpdateComplete();
        void 0 != window.LOCAL_RUN && window.LOCAL_RUN === !0 && this.v3Html === !1 && this.getV3ScreenTemplate()
    }, r.prototype.getV3ScreenTemplate = function() {
        var t, e, i, n, o, r;
        if (t = this.objScreenRef, e = $.parseHTML(t.$el.parent().parent()[0].innerHTML), n = this.getComponentList(this.jsonCopy, []), n.forEach(function(t) {
                if (i = $("#" + t.id, e), "undefined" != typeof i) {
                    i.attr("component", "mgcomp"), i.attr("data-json-classname", t.type);
                    for (r in t) "id" !== r && "components" !== r && "html" !== r && "type" !== r && (o = "data-json-" + r, i.attr(o, JSON.stringify(t[r])))
                }
            }), $(e).prop("outerHTML")) var s = '<script type="text/template" id="' + this.objActivity.getID() + ' " data-js="" data-css="' + this.objActivity.activityData.stylePath + '" screenJsonId="' + this.objActivity.getID() + '" component="mgcomp-screen-block">';
        var a = "</script>";
        $(e).prop("outerHTML") && console.log("<!-- " + this.objActivity.getID() + " Screen -->\n" + s + $(e).prop("outerHTML") + a + "\n<!-- END " + this.objActivity.getID() + " Screen -->")
    }, r.prototype.createNextComponent = function(t) {
        t !== !0 ? this.arrCompToBeCreated.length > this.compCounter ? this.getComponent(this.arrCompToBeCreated[this.compCounter]) : this.onComponentsCreationFinish() : this.arrCompToBeCreated.length > this.compCounter ? this.getComponent(this.arrCompToBeCreated[this.compCounter]) : (this.eventDispatcher(r.GLOBAL_COMP_CREATED, {}), this.arrCompToBeCreated = [])
    }, r.prototype.onComponentsCreationFinish = function() {
        var t = 0;
        if (this.cacheMode === !1) {
            for (t = 0; t < this.arrCreatedCompList.length; t += 1) this.objSimEventController.registerComponentEvents(this.arrCreatedCompList[t]);
            void 0 !== this.objScreenHelper ? this.initScreenHelperData() : (this.eventDispatcher(r.COMP_CREATION_COMPLETE), $(this.objScreenRef.$el).removeClass("hide"), this.objActivity.isScreenInitalized = !0), this.bEditor === !1 && this.executeAllChildAddedEvent(), this.arrCompToBeCreated = [], this.compCounter = 0, this.arrCreatedCompList = []
        }
        this.bEditor
    }, r.prototype.enableComponentSelector = function(t) {
        var e, i, n, o, r = 0;
        if (o = this.jsonData, i = this.jsonData.components, this.jsonData.id === t && (this.strCurrentSelectedId = this.objJsonUtil.getParentId(this.strCurrentSelectedId, this.jsonData), t = this.strCurrentSelectedId), void 0 !== t && (o = this.objJsonUtil.getComponentJSONDataById(t, this.jsonData).node, i = o.components), e = this.objJsonUtil.getChildrenList([this.jsonData], 0))
            for (r = 0; r < e.length; r += 1) n = i.indexOf(e[r]), this.objSelectorDict[e[r].id].enable(!0);
        this.objSelectorDict[this.jsonData.id].enable(!0), this.strCurrentSelectedId = o.id
    }, r.prototype.onCompDoubleClick = function() {}, r.prototype.initScreenHelperData = function() {
        this.objScreenHelper.PopupManager = this.objActivity.PopupManager, this.objActivity.objScreenHelper = this.objScreenHelper, this.objScreenHelper.objActivity = this.objActivity, this.eventDispatcher(r.COMP_CREATION_COMPLETE), $(this.objScreenRef.$el).removeClass("hide"), this.objActivity.isScreenInitalized = !0, void 0 !== this.objScreenHelper.onScreenInitComplete && this.objScreenHelper.onScreenInitComplete.apply(this.objScreenHelper), void 0 !== this.objScreenHelper.init && this.objScreenHelper.init.apply(this.objScreenHelper)
    }, r.prototype.applyStyleProperty = function(t, e) {
        void 0 !== e && void 0 !== t.setStyle && t.setStyle(e)
    }, r.prototype.applyHtmlAttributes = function(t, e) {
        void 0 !== e && void 0 !== t.setHtmlAttr && t.setHtmlAttr(e)
    }, r.prototype.eventDispatcher = function(t, e) {
        var i = {};
        i.type = t, i.data = e, this.trigger(i.type, i)
    }, r.prototype.setStageScaleValue = function(t) {
        $.each(this.compDict, function(e, n) {
            n.type !== i.SCREEN && (void 0 !== n.objComp.setStageScaleValue && n.objComp.getID().indexOf("matchingComp") > -1 && n.objComp.setStageScaleValue(t), void 0 !== n.objComp.onPlayerResizeEvent && n.objComp.onPlayerResizeEvent())
        })
    }, r.prototype.enableCompEditMode = function(t) {
        var e;
        e = new o, t.$el.prepend(e.$el), e.$el.addClass("selectorStyle"), e.regionName(this.objActivity.strRegionName), e.render(), e.onShow && e.onShow(), this.objSelectorDict[t.getID()] = e, e.setChildElement(t), t.compSelector = e, t.selectComponent(), t.componentSelector = e, this.objSimEventController.registerSelectorEvent(t), e.enable(!0), e.setEditingMode(this.bStrictMode)
    }, r.prototype.setEditingMode = function(t) {
        this.bStrictMode = t;
        return $.each(this.objSelectorDict, function(e, i) {
            i.setEditingMode(t)
        }), t
    }, r.prototype.getSelectorRef = function(t) {
        return this.objSelectorDict[t]
    }, r.prototype.editComponent = function(t) {
        var e = t.compData;
        this.editorController.editComponent(this.getCompRefById(e.compId), e)
    }, r.prototype.createComponent = function(t) {
        var e = this.objJsonUtil.getComponentJSONDataById(t.parentId, this.jsonData).node;
        t.wizardExistingChild !== !0 && e && "wizard" === e.type && (this.isWizardChildAdded = !0, e.components.length > 0 && this.detachComponent(e.components[e.currentIndex].id, e.id)), this.arrCompToBeCreated = this.getComponentList(t.compJSON, []), this.compCounter = 0, this.bEditorModeCompCreation = !0, this.objEditorModeComponent = t, this.getComponent(this.arrCompToBeCreated[0])
    }, r.prototype.checkIfCompAddedInWizard = function(t) {
        this.isWizardChildAdded = !1;
        var e, i = this.objJsonUtil.getParentId(t.jsonData.id, this.jsonData);
        i = this.objJsonUtil.getComponentJSONDataById(i, this.jsonData).node, e = this.objJsonUtil.getComponentJSONDataById(t.jsonData.id, this.jsonData), i.currentIndex = e.index, this.wizardChildRoot = void 0
    }, r.prototype.getComponentDataById = function(t) {
        return this.jsonDictById[t]
    }, r.prototype.getCompRefById = function(t) {
        return this.compDict[t].objComp
    }, r.prototype.removeComponent = function(t, e, i) {
        var n, o, s, a, l, c = [],
            h = [];
        for (c = this.getComponentList(this.jsonDictById[t], []), n = c.length - 1; n >= 0; n -= 1) "detached" !== c[n].state && (s = this.getCompRefById(c[n].id), t = s.getID(), this.bEditor === !1 && (s.jsonData = c[n], this.objSimEventController.unregisterComponentEvents(this.compDict[t])), this.bEditor === !0 && (l = this.compDict[this.objJsonUtil.getParentId(c[n].id, this.jsonData)].objComp, l.displayObject && l.removeChild(s.getID()), this.objJsonUtil.removeJSONNode(t, this.jsonData), delete this.jsonDictById[t], this.objSimEventController.removeSelectorEvent(s), o = this.objSelectorDict[t], $(o.el).remove(), o = null, delete this.objSelectorDict[s.getID()], h.push(s.getID())), delete this.compDict[t], s.destroy(), $(s.el).remove(), s = null);
        "wizard" === this.jsonDictById[e].type && this.bEditor === !0 && void 0 === i && this.setWizardViewAfterDelete(e, a, this.jsonData, t), this.eventDispatcher(r.COMPONENT_REMOVED_FROM_DOM, {
            compId: t,
            styleClasses: h
        })
    }, r.prototype.domLayoutUpdateEvent = function(t) {
        var e, i = this.getCompRefById(t.compData.node.id);
        switch (t.compData.task) {
            case this.objActivity.ActivityEventConst.EDIT_DOM_LAYOUT_MOVE_UP:
                i.$el.after(i.$el.prev()), this.eventDispatcher(r.EDIT_DOM_LAYOUT_UPDATED, t);
                break;
            case this.objActivity.ActivityEventConst.EDIT_DOM_LAYOUT_MOVE_DOWN:
                i.$el.before(i.$el.next()), this.eventDispatcher(r.EDIT_DOM_LAYOUT_UPDATED, t);
                break;
            case this.objActivity.ActivityEventConst.EDIT_DOM_LAYOUT_CUT:
                this.memoryObjRef.type = this.objActivity.ActivityEventConst.EDIT_DOM_LAYOUT_CUT, this.memoryObjRef.element = i.$el.detach(), e = this.objJsonUtil.getComponentJSONDataById(t.compData.node.id, this.jsonData), this.removeComponent(e.node.id, e.parentId);
                break;
            case this.objActivity.ActivityEventConst.EDIT_DOM_LAYOUT_PASTE:
                this.memoryObjRef.type === this.objActivity.ActivityEventConst.EDIT_DOM_LAYOUT_CUT && (i.$el.append(this.memoryObjRef.element), this.memoryObjRef = {}, this.memoryObjRef.type = "", e = this.objJsonUtil.getComponentJSONDataById(t.compData.node.id, this.jsonData), this.objJsonUtil.appendChildComponent(e.node, t.compData.childElement), this.eventDispatcher(r.EDIT_DOM_LAYOUT_UPDATED, t))
        }
    }, r.prototype.getChildComponentListAndData = function() {
        var t = [],
            e = {};
        return $.each(this.compDict, function(i, n) {
            e = {}, e.id = i, e.type = n.objComp.componentType, e.name = n.jsonData.name, e.events = n.jsonData.events, t.push(e)
        }), e = {}, e.id = "self", e.type = "self", t.push(e), e = {}, e.id = "helper", e.type = "helper", t.push(e), t
    }, r.prototype.filterComponentListAndData = function(t, e) {
        switch (t) {
            case "ByAlphabet":
                return this.objJsonUtil.sortByAlphabet(e);
            case "ByType":
                return this.objJsonUtil.filterByType(e)
        }
    }, r.prototype.detachComponent = function(t) {
        var e, i, n, o = [],
            s = [];
        for (o = this.getComponentList(this.jsonDictById[t], []), e = o.length - 1; e >= 0; e -= 1) n = this.getCompRefById(o[e].id), t = n.getID(), this.bEditor === !1 && (n.jsonData = o[e], this.objSimEventController.unregisterComponentEvents(this.compDict[t])), this.bEditor === !0 && (this.objSimEventController.removeSelectorEvent(n), i = this.objSelectorDict[t], $(i.el).remove(), i = null, delete this.objSelectorDict[n.getID()], s.push(n.getID())), delete this.compDict[t], n.destroy(), $(n.el).remove(), n = null;
        this.eventDispatcher(r.COMPONENT_REMOVED_FROM_DOM, {
            compId: t,
            styleClasses: s
        })
    }, r.prototype.setWizardViewAfterDelete = function(t, e, i, n) {
        var o, r, s = this.getComponentDataById(t),
            a = {};
        o = s.currentIndex, this.objJsonUtil.removeJSONNode(n, s), (0 > o || o >= s.components.length) && (0 > o ? o = 0 : o >= s.components.length && (o = s.components.length - 1)), s.currentIndex = o, r = s.components, r.length > 0 && (this.objJsonUtil.updateAttachState(r, 0, void 0, void 0, "detached"), this.objJsonUtil.updateAttachState([r[o]], 0, void 0, void 0, "attached"), a.wizardExistingChild = !0, a.compJSON = r[o], a.parentId = t, this.createComponent(a), this.getComponentDataById(t).components = s.components)
    }, r.prototype.changeWizardView = function(t) {
        var e, i, n = {};
        e = this.getComponentDataById(t.compId).components, this.objJsonUtil.updateAttachState(e, 0, void 0, void 0, "detached"), this.objJsonUtil.updateAttachState([e[t.nextIndex]], 0, void 0, void 0, "attached"), i = e[this.getComponentDataById(t.compId).currentIndex].id, this.detachComponent(i, t.parentId), this.getComponentDataById(t.compId).currentIndex = t.nextIndex, n.compJSON = e[t.nextIndex], n.parentId = t.compId, n.wizardExistingChild = !0, this.createComponent(n)
    }, r.prototype.getHtmlText = function() {
        var t = "";
        return $.each(this.objActivity.objScreen.$el, function() {
            var e = $(this);
            t = e.html()
        }), t
    }, r.prototype.flush = function() {
        var t, e, n = this;
        return this.compCounter = 0, $.each(this.compDict, function(e, o) {
            o.type !== i.SCREEN && (t = n.objSimEventController.unregisterComponentEvents(o))
        }), $.each(this.compDict, function(t, i) {
            e = {}, e.component = i.objComp, n.objSimEventController.removeSelectorEvent(i.objComp), e.parent = i.parentId, n.objActivity.objScreen.removeChild(e), i.objComp.destroy()
        }), t = this.objSimEventController.unregisterScreenCompEvnets(this.compDict[this.objActivity.objScreen.getID()]), t === !0 && (void 0 !== this.objScreenHelper && (this.objScreenHelper.destroy(), this.objScreenHelper = null), this.objSelectorDict = {}, this.objActivity.screenHolder.close(), this.objActivity.objScreen.destroy(), this.objActivity.objScreen = null, this.arrScreenCompList = [], this.compDict = {}), t
    }, r.prototype.destroy = function() {
        var t;
        if (t = this.flush(), t === !1) throw new Error(i.ERROR_WHILE_DESTROY_ASSEMBLER);
        return this.objFactory.off(this.objFactory.COMP_CREATION_COMPLETE_EVENT), this.editorController.off(this.editorController.SIM_COMP_CREATION_COMPLETE), this.objSimEventController.off(o.DOUBLE_CLICK_EVENT), this.editorController = null, this.objActivity.objScreen = null, t
    }, r
}), define("simPictor/sim-event-controller", ["marionette"], function() {
    var t = Backbone.Marionette.Controller.extend({
        EVENT_TYPE: "type",
        ID: "id",
        objEvent_dict: null,
        objComp_dict: null,
        objActivityRef: null,
        objActivityHelper: null,
        objSelectorDict: null,
        constructor: function() {
            this.objSelectorDict = {}, this.objEvent_dict = {}, this.objComp_dict = {}
        }
    });
    return t.prototype.registerComponentEvents = function(t, e) {
        var i, n, o, r = {},
            s = [],
            a = this,
            l = [];
        i = t.objComp, i.on("sendtincandataevent", $.proxy(a.sendTincanData, a)), void 0 !== t.jsonData.events && (s = Array.isArray(t.jsonData.events) === !1 ? [t.jsonData.events] : t.jsonData.events, _.each(s, function(t) {
            if (_.each(t, function(t, e) {
                    if (n = e, l = [], Array.isArray(t) === !0)
                        for (o = 0; o < t.length; o += 1) r = a.createEventDict(i, t[o]), l.push(r);
                    else r = a.createEventDict(i, t), l.push(r);
                    i.on(n, $.proxy(a.handleSimComponentEvents, a))
                }), void 0 !== a.objEvent_dict[i.getID() + "_" + n]) throw new Error(i.getID() + " " + a.objActivityRef.objErrConst.IS_ALREADY_REGISTERED + " " + n);
            if (void 0 !== a.objEvent_dict[i.getID() + "_" + n]) throw new Error(i.getID() + " is alreay registred with " + n);
            a.objEvent_dict[i.getID() + "_" + n] = l
        })), a.objComp_dict[i.getID()] = i, this.trigger(a.objActivityRef.ActivityEventConst.COMP_EVENT_REGISTER_COMPLETE, e)
    }, t.prototype.unregisterScreenCompEvnets = function(t) {
        var e = !1,
            i = this;
        return e = i.unregisterComponentEvents(t)
    }, t.prototype.unregisterComponentEvents = function(t) {
        var e, i, n, o = this,
            r = !1;
        return t.objComp.off("sendtincandataevent"), r = void 0 === t.jsonData.events, void 0 !== t.jsonData.events && (e = t.jsonData.events, i = t.objComp, _.each(e, function(t, e) {
            n = e, i.off(n), _.each(t, function(t, e) {
                delete o.objEvent_dict[i.getID() + "_" + e]
            }), delete o.objComp_dict[i.getID()]
        }), r = !0), r
    }, t.prototype.createEventDict = function(t, e) {
        var i = [],
            n = {},
            o = [];
        return n.targetId = e.target, n.methodName = e.method, n.region = e.region, _.each(e.params, function(t, e) {
            if (i.push("true" === t ? !0 : "false" === t ? !1 : t), "self" === e) {
                var n = {};
                n.target = e, n.variableName = t, o.push(n)
            }
        }), n.params = i, n.calculate = o, n
    }, t.prototype.handleSimComponentEvents = function(t) {
        {
            var e, i, n;
            t.target
        }
        if (i = t.target.getID() + "_" + t.type, void 0 !== t.target)
            for (i = t.target.getID() + "_" + t.type, e = this.objEvent_dict[i], n = 0; n < e.length; n += 1) this.executeTask($.extend(!0, {}, e[n]), t)
    }, t.prototype.sendTincanData = function(t) {
        this.objActivityRef.sendJSONCompTincanData(t)
    }, t.prototype.executeTask = function(t, e) {
        var i;
        switch (t.targetId) {
            case "self":
                t.region = this.objActivityRef.strRegionName === t.region ? void 0 : t.region, void 0 !== t.region ? (t.subTask = this.objActivityRef.ActivityEventConst.CALL_AND_UPDATE_COMPONENT, void 0 !== e && void 0 !== e.customData && (t.params.push(e.customData), t.eventTarget = e.target), this.objActivityRef.broadcastEvent(this.objActivityRef.ActivityEventConst.MANAGE_COMMON_BROADCAST_EVENT, t)) : (void 0 !== e && t.params.push(e), this.calculateAndSetParameter(t), this.objActivityRef[t.methodName].apply(this.objActivityRef, t.params));
                break;
            case "helper":
                void 0 !== t.region ? (t.subTask = this.objActivityRef.ActivityEventConst.CALL_AND_UPDATE_COMPONENT, void 0 !== e && void 0 !== e.customData && (t.params.push(e.customData), t.eventTarget = e.target), this.objActivityRef.broadcastEvent(this.objActivityRef.ActivityEventConst.MANAGE_COMMON_BROADCAST_EVENT, t)) : (void 0 !== e && t.params.push(e), this.calculateAndSetParameter(t), this.objActivityRef.objScreenHelper[t.methodName].apply(this.objActivityRef.objScreenHelper, t.params));
                break;
            default:
                if (void 0 === e || void 0 === e.customData || $.isEmptyObject(e.customData) || t.params.push(e.customData), void 0 !== t.region) t.subTask = this.objActivityRef.ActivityEventConst.CALL_AND_UPDATE_COMPONENT, void 0 !== e && void 0 !== e.customData && t.params.push(e.customData), this.objActivityRef.broadcastEvent(this.objActivityRef.ActivityEventConst.MANAGE_COMMON_BROADCAST_EVENT, t);
                else try {
                    this.objComp_dict[t.targetId][t.methodName].apply(this.objComp_dict[t.targetId], t.params)
                } catch (n) {
                    console.warn("'" + t.methodName + "' not found in (" + t.targetId + ")" + i + " widget.", t.params)
                }
        }
    }, t.prototype.registerSelectorEvent = function(t) {
        var e = this;
        t.on(this.objActivityRef.ActivityEventConst.SELECTOR_RIGHT_CLICK_EVENT, e.objActivityRef.onComponentRightClick, e.objActivityRef), t.on(this.objActivityRef.ActivityEventConst.SELECTOR_CLICK_EVENT, e.objActivityRef.onComponentSelected, e.objActivityRef), t.on(this.objActivityRef.ActivityEventConst.COMPONENT_DESELECTED, e.objActivityRef.onComponentDeselected, e.objActivityRef), t.on(this.objActivityRef.ActivityEventConst.COMPONENT_DATA_PROPERTY_UPDATED, e.objActivityRef.onCompUpdatedFromSelector, e.objActivityRef), t.compSelector && t.compSelector.on(t.compSelector.DOUBLE_CLICK_EVENT, e.onSelectorDoubleClick, e)
    }, t.prototype.removeSelectorEvent = function(t) {
        t.on(this.objActivityRef.ActivityEventConst.SELECTOR_RIGHT_CLICK_EVENT), t.off(this.objActivityRef.ActivityEventConst.SELECTOR_CLICK_EVENT), t.off(this.objActivityRef.ActivityEventConst.COMPONENT_DESELECTED), t.off(this.objActivityRef.ActivityEventConst.COMPONENT_DATA_PROPERTY_UPDATED), t.compSelector && t.compSelector.off(t.compSelector.DOUBLE_CLICK_EVENT)
    }, t.prototype.onSelectorDoubleClick = function(t) {
        this.trigger(t.DOUBLE_CLICK_EVENT, t)
    }, t.prototype.registerTabBtnEvent = function(t) {
        var e = this;
        t.on("click", e, e.handleComponentTabBtn)
    }, t.prototype.handleComponentTabBtn = function(t) {
        var e, i = t.data;
        t.stopPropagation(), e = t.currentTarget.id.split("TabBtnEditor_")[1], i.objActivityRef.onComponentTabBtnClick.apply(i.objActivityRef, [e])
    }, t.prototype.removeTabBtnEvent = function(t) {
        t && t.off("click")
    }, t.prototype.calculateAndSetParameter = function(t) {
        var e, i, n = 0;
        for (n = 0; n < t.calculate.length; n += 1) switch (t.calculate[n].target) {
            case "self":
                e = t.eventTarget[t.calculate[n].variableName], i = t.params.indexOf(t.calculate[n].variableName), t.params[i] = e
        }
    }, t
}), define("simPictor/sim-pictor", ["marionette", "simPictor/assembler", "simPictor/sim-event-controller", "player/constants/errorconst"], function(t, e, i, n) {
    var o;
    return o = Backbone.Marionette.Controller.extend({
        objData: null,
        objAssembler: null,
        objEventManager: null,
        objWarehouse: null,
        objScreen: null,
        objEditorManager: null,
        objSimActivityRef: null,
        objSimEventController: null,
        bEditor: !1,
        objActRef: null,
        objWizardViewRef: void 0,
        isChildCreationInvoked: !1,
        v3Html: !1,
        strJSONData: void 0,
        strSelectedCompId: void 0,
        constructor: function(t) {
            this.objEditorManager = t.editorManager, this.objSimActivityRef = t.simActRef, this.bEditor = t.bEditor
        }
    }), o.prototype.initalize = function(t, e) {
        this.isChildCreationInvoked = !1, this.objData = t, this.bEditor === !0 && (this.strJSONData = JSON.stringify(this.objData.jsonData)), this.objActRef = e, this.initSimEventController(), this.initalizeAssembler()
    }, o.prototype.setStageScaleValue = function(t) {
        void 0 !== this.objAssembler && null !== this.objAssembler && this.objAssembler.setStageScaleValue(t)
    }, o.prototype.initalizeAssembler = function() {
        var t = this;
        this.objSimActivityRef = this.objActRef, this.objAssembler = new e(this.objData.jsonData, this.objData.template, this.objSimActivityRef, this.objEditorManager, this.objSimEventController, this.bEditor), this.objAssembler.v3Html = this.v3Html, this.objAssembler.off(e.COMP_CREATION_COMPLETE), this.objAssembler.on(e.COMP_CREATION_COMPLETE, t.handleAssemblerEvent, t), this.objAssembler.cacheMode = "inactive" === this.objActRef.creationMode ? !0 : !1, this.objAssembler.start(), this.objSimActivityRef.screenEventName = this.objSimActivityRef.ActivityEventConst.MIDDLE_SCREEN_LOAD_EVENT, 0 === this.objSimActivityRef.nScreenIndex ? this.objSimActivityRef.screenEventName = this.objSimActivityRef.ActivityEventConst.FIRST_SCREEN_LOAD_EVENT : this.objSimActivityRef.nScreenIndex === this.objSimActivityRef.nTotalScreen - 1 && (this.objSimActivityRef.screenEventName = this.objSimActivityRef.ActivityEventConst.LAST_SCREEN_LOAD_EVENT)
    }, o.prototype.handleAssemblerEvent = function() {
        var t = this;
        this.objSimActivityRef.objScreen.dispatchScreenEvent(this.objSimActivityRef.screenEventName, {}), this.bEditor === !1 && this.isChildCreationInvoked === !1 ? (this.isChildCreationInvoked = !0, this.objSimActivityRef.objScreen.childCreationComplete(), this.wizardViewRendered()) : this.bEditor === !1 && this.objWizardViewRef && void 0 !== this.objWizardViewRef.wizardCompId && (this.wizardViewRendered(this.objWizardViewRef.wizardCompId), this.objWizardViewRef.wizardCompId = void 0), this.objSimActivityRef.objScreen.globalComp = this.objAssembler.globalCompDict, this.objSimActivityRef.bGlobalComponents === !0 && (this.objSimActivityRef.bGlobalComponents = !1, this.objAssembler.on(e.GLOBAL_COMP_CREATED, t.onGlobalCompCreationComplete, t), this.objAssembler.createGlobalComponents()), this.bEditor === !0 && (this.trigger(this.objSimActivityRef.ActivityEventConst.SIM_PICTOR_INIT_COMPLETE_EVENT), t.objAssembler.on(e.COMPONENT_REMOVED_FROM_DOM, t.assemblerEventInEditMode, t), t.objAssembler.on(e.COMP_CREATED_IN_EDITOR_MODE, t.assemblerEventInEditMode, t), t.objAssembler.on(e.EDIT_DOM_LAYOUT_UPDATED, t.assemblerEventInEditMode, t))
    }, o.prototype.assemblerEventInEditMode = function(t) {
        this.trigger(t.type, t)
    }, o.prototype.wizardViewRendered = function(t) {
        $.each(this.objSimActivityRef.objScreen, function(e, i) {
            if (i instanceof Object && "wizard" === i.componentType) {
                if (t && t === i.getID()) return i.wizardViewRenderComplete(), void 0;
                i.wizardViewRenderComplete()
            }
        })
    }, o.prototype.onActivityCreationComplete = function() {
        this.bEditor === !0 && this.objActRef.activityInitInEditMode()
    }, o.prototype.onGlobalCompCreationComplete = function() {
        this.objSimActivityRef.objScreen.globalComp = this.objAssembler.globalCompDict
    }, o.prototype.initSimEventController = function() {
        this.objSimEventController = new i
    }, o.prototype.destroyCurrentScreen = function() {
        return this.objAssembler.flushScreen()
    }, o.prototype.callAndUpdateComponent = function(t) {
        this.objSimEventController.executeTask(t)
    }, o.prototype.selectComponent = function(t, e) {
        this.objAssembler.getSelectorRef(t).select(e)
    }, o.prototype.invalidComponentCreation = function(t) {
        var e = {};
        e.btnYesStyle = "btn-skyBlue", e.btnNoStyle = "", e.btnCancelStyle = "", t.compData && t.compData.message ? this.objActRef.showMessage(t.compData.message, n.PROJECT_TITLE, 1, "OK", void 0, void 0, e) : this.objActRef.showMessage(n.COMPONENT_NOT_ALLOWED_AS_CHILD_COMPONENT, n.PROJECT_TITLE, 1, "OK", void 0, void 0, e)
    }, o.prototype.removeSelectedComponent = function(t) {
        this.objActRef.deselectComponent(), this.objAssembler.removeComponent(t.compData.componentId, t.compData.parentId)
    }, o.prototype.changeWizardView = function(t) {
        this.objWizardViewRef = {}, this.objWizardViewRef.wizardCompId = t.compId, this.objAssembler.changeWizardView(t)
    }, o.prototype.domLayoutUpdateEvent = function(t) {
        this.objAssembler.domLayoutUpdateEvent(t), t.task = t.compData.task, this.objActRef.playerBubbleEvent(t)
    }, o.prototype.destroy = function() {
        this.objActRef = null, this.objAssembler.off(e.COMPONENT_REMOVED_FROM_DOM), this.objAssembler.off(e.COMP_CREATION_COMPLETE), this.objData = void 0, this.objEventManager = void 0, this.objWarehouse = void 0, this.objScreen = void 0, this.objEditorManager = void 0, this.objAssembler.destroy(), this.objAssembler.off(e.COMP_CREATION_COMPLETE), this.objAssembler = void 0
    }, o
}), define("player/controllers/media-controller", ["marionette"], function() {
    var t, e;
    return e = null, t = Backbone.Marionette.Controller.extend({
        clickElementId: null,
        media_dict: {}
    }), t.prototype.registerMedia = function(t, e) {
        var i = {};
        if (i.target = t, i.type = e, void 0 !== this.media_dict[t.getID()]) throw new Error("Already registered.....", t.getID());
        this.media_dict[t.getID()] = i, this.checkMedia(t)
    }, t.prototype.unregisterMedia = function(t) {
        delete this.media_dict[t.getID()]
    }, t.prototype.checkMedia = function(t) {
        "audiohotspot" === t.componentType && t.on(t.AUDIO_START_EVENT, this.handlerEventFunction, this), "video" === t.componentType && t.on(t.VIDEO_START_EVENT, this.handlerEventFunction, this)
    }, t.prototype.handlerEventFunction = function(t) {
        this.clickElementId = t.target.strCompId, "false" === t.target.options.passiveaudio && this.pauseAllMedia(), "false" === t.target.options.passivevideo && this.pauseAllMedia()
    }, t.prototype.pauseAllMedia = function() {
        var t = this;
        $.each(this.media_dict, function(e, i) {
            e === t.clickElementId || i.target.stop()
        })
    }, t.prototype.resumeAllMedia = function() {
        $.each(this.media_dict, function(t, e) {
            e.target.resume()
        })
    }, t.prototype.stopAllMedia = function() {
        $.each(this.media_dict, function(t, e) {
            e.target.resume()
        })
    }, {
        getInstance: function() {
            return null === e && (e = new t), e
        }
    }
}), define("player/manager/region-manager", ["marionette", "backbone", "player/controllers/activity-controller", "player/events/eventsconst", "player/events/event-broadcaster", "simPictor/sim-pictor", "player/controllers/media-controller", "player/constants/errorconst", "player/constants/playerconst"], function(t, e, i, n, o, r, s, a, l) {
    var c = e.Marionette.Controller.extend({
        regionState: {},
        mPlayerModel: void 0,
        objMPlayer: void 0,
        objPlayerConfig: void 0,
        objActConfig: void 0,
        objActivityController: void 0,
        objEventConst: void 0,
        groupModelDict: {},
        nActivityIndex: void 0,
        objActControllerDict: void 0,
        objEventBroadcaster: void 0,
        objInlineTemplates: {},
        objInlineTmplDict: {},
        bAllRegionReady: !1,
        arrKey: [],
        objActivtyToLaunch: {},
        bDrawingMode: !1,
        objToolController: void 0,
        objTemplateData: void 0,
        objSelectedRegion: void 0,
        objPathUpdater: void 0,
        creationMode: "active",
        cache: !1,
        objActivityCacheController: void 0,
        objCacheControllerRef: void 0,
        objTinCanHelperRef: void 0,
        constructor: function(t, e, i, r, s, a) {
            var l, c;
            if (this.regionState = {}, this.mPlayerModel = r, this.objMPlayer = t, this.objPlayerConfig = e, this.objActConfig = i, this.objActControllerDict = {}, this.objInlineTemplates = {}, this.objEventConst = n, this.groupModelDict = {}, this.objEventBroadcaster = new o, this.objEventBroadcaster.on(this.objEventBroadcaster.BUBBLE_EVENT, this.bubbleEvent, this), this.bDrawingMode = s, this.objToolController = void 0, this.objTemplateData = a, this.objCacheControllerRef = {}, void 0 !== this.objTemplateData)
                for (l = 0; l < this.objTemplateData.length; l += 1) c = $(this.objTemplateData[l]), this.objInlineTmplDict[c.attr("id")] = c.html()
        }
    });
    return c.prototype.initlizeAllRegions = function() {
        var t, e = 0,
            i = [],
            n = {};
        for (void 0 === this.objActConfig.regions.region.length ? i.push(this.objActConfig.regions.region) : i = this.objActConfig.regions.region, this.mPlayerModel.set("arrRegionList", []), this.mPlayerModel.set("objRegions", {}), e = 0; e < i.length; e++) t = i[e].id, n[t] = this.initRegion(i[e]);
        this.mPlayerModel.set("objRegions", this.objActControllerDict), this.initlizeAllActivity(n), void 0 !== this.objActConfig.toolbox && this.initlizeToolbox()
    }, c.prototype.addRemoveActListInRegion = function(t) {
        var e, i, n, o = -1,
            r = this.objActControllerDict[t.regionToUpdate];
        switch (t.bAdd) {
            case !0:
                n = $.parseXML(t.strActList).documentElement, n = $.xml2json(n), r.arrActivity.push(n), r.allActivities.activity = r.arrActivity, t.immediateStart === !0 && r.launchActivityByIndex(r.arrActivity.length - 1, t.data);
                break;
            case !1:
                for (r.allActivities.activity = r.arrActivity, i = 0; i < r.arrActivity.length; i += 1)
                    if (t.strActList === r.arrActivity[i].id) {
                        o = i;
                        break
                    } - 1 !== o && (e = o, o === r.arrActivity.length - 2 && (e = r.arrActivity.length - 2), r.arrActivity.splice(o, 1), r.nActivityIndex === e && r.launchActivityByIndex(e, t.data))
        }
    }, c.prototype.prepareRegionDataFromXML = function(t) {
        var e, i, n = {},
            o = this.objActControllerDict[t.regionId];
        return e = t.strActList, e = $.parseXML(e).documentElement, n = $.xml2json(e), i = $.makeArray(n.activities.activity).slice(), o.arrActivity = i, o.allActivities.activity = i, void 0 !== t.defaultActId ? o.allActivities.defaultLaunchID = t.defaultActId : delete o.allActivities.defaultLaunchID, void 0 !== t.immediateStart && (o.immediateStart = t.immediateStart), t.immediateStart === !0 && this.startActivityController(o, t.data), i
    }, c.prototype.initRegion = function(t) {
        var e, n, o, r, s, a = this,
            l = t.id;
        return this.mPlayerModel.get("arrRegionList").push(t.id), this.creationMode = t.creationMode, o = this.objMPlayer.bInEditMode, e = new i(this.objMPlayer.getRegion(l), this.objPlayerConfig, l, this.objEventBroadcaster, this.bDrawingMode, o, t.cache, t.creationMode), o !== !0 && t.cache === !0 && (s = this.objCacheControllerRef[l.split("_")[0]], void 0 === s && (s = []), s.push(e), this.objCacheControllerRef[l.split("_")[0]] = s), e.setPathUpdater(this.objPathUpdater), n = {}, n.classRef = e, n.testID = l, e.classReference = n, e.mPlayerModel = this.mPlayerModel, e.regionJSON = t, this.objActControllerDict[l] = e, this.objActControllerDict[l].setLocalLanguage(this.objMPlayer.getPlayerHelper().getLocalLanguage()), this.objActControllerDict[l].showPreloaderBeforeActivityLaunch(this.objMPlayer.getPlayerHelper().getPreloaderSetting()), r = this.objActControllerDict[l].initController(t), e.on(this.objEventConst.REGION_INITLIZE_UPATE_EVENT, a.handleActivityInitProcess, a), e.on(this.objEventConst.CREATE_COMPONENT_EVENT, a.createComponent, a), e.on(this.objEventConst.PLAYER_COMMON_TASK_EVENT, a.handlePlayerCommonTaskEvent, a), e.on(this.objEventConst.PLAYER_BUBBLE_EVENT, a.handlePlayerBubbleEvents, a), e.on(this.objEventConst.PLAYER_EDIT_COMPONENT_EVENT, a.handlePlayerEditorTask, a), e.on(this.objEventConst.HANDLE_EDITOR_TASK_EVENT, a.handlePlayerEditorTask, a), e.on(this.objEventConst.BROADCAST_EVENT, a.broadcastEvent, a), e.on(this.objEventConst.ON_ACTIVITY_SUCCESSFULLY_ADDED_IN_REGION, a.onActivityAddedInRegion, a), e.on(this.objEventConst.REMOVE_COMPONENT_EDITORS, a.flushEditor, a), e.on(this.objEventConst.CREATE_AND_INIT_ACTIVITY_HTML, a.createHTMLComponent, a), e.on(this.objEventConst.PLAYER_INIT_FROM_CONTROLLER_EVENT, a.createPlayerFromControllerEvent, a), this.bDrawingMode === !0 && (e.on(this.objEventConst.SET_DRAWING_CANVAS, a.setDrawingCanvasEvent, a), e.on(this.objEventConst.DRAWING_COMMON_TASK, a.handleDrawingCommonTask, a)), e.on(this.objEventConst.EVENT_NEVIGATE_ACTIVITY_IN_CACHE_MODE, a.handleNevigationInCacheMode, a), this.objMPlayer.getPlayerHelper().onActivityInitlized(l, o), e.loadPriority = t.loadPriority, e.immediateStart = void 0 === t.immediateStart ? !0 : "false" === t.immediateStart ? !1 : !0, $.makeArray(t.activities.activity).slice()
    }, c.prototype.initlizeAllActivity = function(t) {
        var e;
        this.arrKey = [];
        for (e in this.objActControllerDict)
            if (this.objActControllerDict.hasOwnProperty(e))
                if (void 0 === this.objActControllerDict[e].loadPriority) this.objActControllerDict[e].allRegionActivityList = t, this.startActivityController(this.objActControllerDict[e]);
                else {
                    if (this.objActControllerDict[e].loadPriority = Number(this.objActControllerDict[e].loadPriority), this.objActivtyToLaunch[this.objActControllerDict[e].loadPriority] = e, -1 !== this.arrKey.indexOf(this.objActControllerDict[e].loadPriority)) throw new Error(a.SAME_LOAD_PRIORITY_DEFINED);
                    this.arrKey.push(Number(this.objActControllerDict[e].loadPriority))
                }
        this.arrKey.length > 0 && (this.arrKey = this.arrKey.sort(this.sortRule), this.initActivityControllerByPriorityList(0))
    }, c.prototype.startActivityController = function(t, e, i, n) {
        t.immediateStart === !0 ? (t.immediateStart = "done", t.start(e, i, n)) : this.objMPlayer.getPlayerHelper().showHideRegionById(t.strRegionName, !1)
    }, c.prototype.sortRule = function(t, e) {
        return t - e
    }, c.prototype.initActivityControllerByPriorityList = function(t) {
        t < this.arrKey.length && this.startActivityController(this.objActControllerDict[this.objActivtyToLaunch[this.arrKey[t]]])
    }, c.prototype.initlizeToolbox = function() {
        this.objActConfig.toolbox
    }, c.prototype.createComponent = function(t) {
        this.objMPlayer.getPlayerHelper().getFactoryManager().getComponent(t)
    }, c.prototype.createHTMLComponent = function(t) {
        t.controller.editorData = t, this.objMPlayer.getPlayerHelper().getEditorManager().renderActivityHTML(t.controller.strRegionName, t.actData)
    }, c.prototype.setDrawingCanvasEvent = function(t) {
        this.objMPlayer.getPlayerHelper().getDrawingManager().setUserCanvas(t)
    }, c.prototype.handleDrawingCommonTask = function() {}, c.prototype.handleNevigationInCacheMode = function(t) {
        var e, i, n, o, r, s, a = t.controllerRef,
            l = "none";
        if (a.cacheModeOn === !0 && (i = a.strRegionName.split("_")[0]), n = a.screenIndexToLaunch, o = 2 * a.regionJSON.cacheLength + 1, l = a.nActivityIndex > n ? "previous" : "next", s = this.objCacheControllerRef[i])
            for (r = 0; r < s.length; r += 1)
                if ("active" === s[r].creationMode) {
                    e = r;
                    break
                }
    }, c.prototype.handleActivityInitProcess = function(t) {
        var e, i, n = !1,
            o = {},
            s = {},
            a = this,
            l = 0;
        switch (e = t.progressType) {
            case this.objEventConst.REGION_INITLIZE_START_EVENT:
                t.target.isReady = !1;
                break;
            case this.objEventConst.REGION_INITLIZE_COMPLETE_EVENT:
                n = !0, t.target.isReady = !0, "simulation" === t.target.objActivityRef.type && (s.editorManager = a.objMPlayer.getPlayerHelper().getEditorManager(), s.simActRef = t.target.objActivityRef, s.bEditor = t.target.bEditor, t.target.objActivityRef.setPictorRef(new r(s)), a.objMPlayer.getPlayerHelper().onRegionCreationComplete(s.simActRef.strRegionName));
                for (i in a.objActControllerDict)
                    if (a.objActControllerDict.hasOwnProperty(i) && a.objActControllerDict[i].immediateStart === !0 && a.objActControllerDict[i].isReady !== !0) return n = !1, -1 !== a.arrKey.indexOf(t.target.loadPriority) && a.initActivityControllerByPriorityList(this.arrKey.indexOf(t.target.loadPriority) + 1), void 0;
                if (n === !0) {
                    o = {}, o.type = a.objEventConst.PLAYER_INITLIZE_COMPLETE_EVENT, o.target = a, a.objMPlayer.getPlayerHelper().onPlayerCreationComplete(o);
                    for (i in a.objActControllerDict) l += 1;
                    for (i in a.objActControllerDict) a.objActControllerDict.hasOwnProperty(i) && (void 0 === a.objActControllerDict[i].initCounter && (a.objActControllerDict[i].initCounter = 0), a.objActControllerDict[i].initCounter++, a.objActControllerDict[i].initCounter === l && a.objActControllerDict[i].onPlayerInitComplete(), $("#playerContainer").css("display", "block"))
                }
        }
        this.bAllRegionReady = n
    }, c.prototype.handlePlayerBubbleEvents = function(t) {
        this.trigger(t.type, t)
    }, c.prototype.handlePlayerCommonTaskEvent = function(t) {
        var e = t.task;
        switch (e) {
            case this.objEventConst.SHOW_HIDE_REGION:
                this.objMPlayer.getPlayerHelper().showHideRegionById(t.regionToHIde, t.state);
                break;
            case this.objEventConst.SHOW_PRELOADER:
                this.objMPlayer.getPlayerHelper().showPreloader(t);
                break;
            case this.objEventConst.HIDE_PRELOADER:
                this.objMPlayer.getPlayerHelper().hidePreloader();
                break;
            case this.objEventConst.LAUNCH_ACTIVITY_IN_REGION:
                this.objActControllerDict[t.regionToChange] && void 0 === t.editorOnly ? this.objActControllerDict[t.regionToChange].onActivityLaunchRequestByAnotherRegion(t) : this.objMPlayer.getPlayerHelper().launchActivityInRegion(t);
                break;
            case this.objEventConst.UPDATE_PLAYER_SIZE_EVENT:
                this.objMPlayer.getPlayerHelper().onPlayerUpdateComplete(t);
                break;
            case this.objEventConst.PREPARE_INLINE_TEMPLATE_DATA:
                t.data.inlineTemplates = void 0, this.prepareInlineTemplates(t);
                break;
            case this.objEventConst.PAUSE_ALL_MEDIA:
                s.getInstance().pause();
                break;
            case this.objEventConst.RESUME_ALL_MEDIA:
                s.getInstance().resume();
                break;
            case this.objEventConst.MANAGE_NEXT_BACK_NEVIGATION_BUTTON:
                this.manageNextBackNevigationEvent(t);
                break;
            case this.objEventConst.START_REGION_FROM_OTHER_REGION:
                this.startRegion(t);
                break;
            case this.objEventConst.UPDATE_REGION_ACTIVITY_LIST:
                this.prepareRegionDataFromXML(t);
                break;
            case this.objEventConst.EXECUTE_WEB_SERVICE_CALL:
                t.requestTo = l.WEB_SERVICE_MANAGER, this.trigger(l.MANAGE_MANAGERS_EVENTS, t);
                break;
            case this.objEventConst.STOP_ALL_REGIONS:
                this.stopAllRegions(t.state, t.ignoreCaller === !0 ? t.regionId : void 0, t);
                break;
            case this.objEventConst.APPEND_ACTIVITY_IN_REGION:
                this.addRemoveActListInRegion(t);
                break;
            case this.objEventConst.HIDE_ALL_REGION:
                this.hideAllRegion(t);
                break;
            case this.objEventConst.START_STOP_REGION:
                t.state === !1 ? this.stopRegion(t.regionToStart) : this.startRegion(t);
                break;
            case this.objEventConst.SIM_PICTOR_INITALIZED:
                this.dispatchManagerEvents(l.SIM_PICTOR_CREATED, t)
        }
    }, c.prototype.startRegion = function(t) {
        void 0 !== t.regionToStart && (t.regionId = t.regionToStart);
        var e, i = this.objActControllerDict[t.regionId];
        i && (i.immediateStart = !0, this.objMPlayer.getPlayerHelper().showHideRegionById(t.regionId, !0), e = t.data, t.dataToActivity && (e = t.dataToActivity), this.startActivityController(this.objActControllerDict[t.regionId], e, t.strActivityID, t.bLaunchByIndex))
    }, c.prototype.stopRegion = function(t) {
        this.objActControllerDict[t].stopAndUnload(), this.objMPlayer.getPlayerHelper().showHideRegionById(t, !1)
    }, c.prototype.stopAllRegions = function(t, e, i) {
        var n, o = this,
            r = {},
            s = i.activitiesData;
        t = void 0 !== t ? t : !1, $.each(o.objActControllerDict, function(i) {
            switch (t) {
                case !0:
                    e !== i && o.stopRegion(i);
                    break;
                case !1:
                    if (r = {}, r.regionId = i, e !== i)
                        if (void 0 !== s && (n = s[i]), void 0 === n || void 0 === n.regionData) o.startRegion(r);
                        else {
                            var a = {};
                            a.regionId = i, a.strActList = n.regionData, a.immediateStart = !0, a.data = n.deliverToActivity, a.defaultActId = n.defaultLaunchId, o.prepareRegionDataFromXML(a), o.objMPlayer.getPlayerHelper().showHideRegionById(a.regionId, !0)
                        }
                    else o.stopRegion(i)
            }
        })
    }, c.prototype.manageNextBackNevigationEvent = function(t) {
        var e, i, n, o, r = t.controls;
        for (e = 0; e < r.length; e += 1) i = r[e].id, n = r[e].region, o = r[e], o.param = t[r[e].param], this.objActControllerDict[n].updateNevigationControl(o)
    }, c.prototype.bubbleEvent = function(t) {
        var e;
        for (e in this.objActControllerDict) this.objActControllerDict.hasOwnProperty(e) && this.objActControllerDict[e].bubbleEvent(t);
        this.trigger(t.type, t)
    }, c.prototype.handleBroadcastEventFromOtherPlayer = function(t) {
        var e;
        for (e in this.objActControllerDict) this.objActControllerDict.hasOwnProperty(e) && this.objActControllerDict[e].handleBroadcastEventFromOtherPlayer(t)
    }, c.prototype.broadcastEvent = function(t) {
        this.objEventBroadcaster.broadcastEvent(t)
    }, c.prototype.flushEditor = function(t) {
        this.objMPlayer.getPlayerHelper().getEditorManager().flushEditor(t)
    }, c.prototype.onActivityAddedInRegion = function(t) {
        this.regionState[t.regionName] = t;
        var e;
        for (e in this.objActControllerDict) this.objActControllerDict.hasOwnProperty(e) && this.objActControllerDict[e].onRegionUpdate(this.regionState);
        t.requestTo = l.REGION_CHANGE_NOTIFICATION, t.task = l.REGION_CHANGE_NOTIFICATION, t.regionState = this.regionState, this.trigger(l.MANAGE_MANAGERS_EVENTS, t)
    }, c.prototype.OnHTMLCreationCompleteComponent = function(t) {
        var e = this.objActControllerDict[t.regionId];
        this.setInlineTemplates(t.regionId, t), e.onHtmlLoadComplete(t)
    }, c.prototype.setInlineTemplates = function(t, e) {
        e.hasOwnProperty("inlineTemplates") && (this.objInlineTemplates[t] = e.inlineTemplates, this.bAllRegionReady && this.prepareInlineTemplates())
    }, c.prototype.prepareInlineTemplates = function(t) {
        var e, i = this;
        $.each(i.objInlineTemplates, function(t, n) {
            if (i.objInlineTemplates.hasOwnProperty(t))
                for (e = 0; e < n.length; e += 1) {
                    var o = $(n[e]);
                    i.objInlineTmplDict[o.attr("id")] = o.html()
                }
        }), $.each(i.objActControllerDict, function(t) {
            i.objActControllerDict.hasOwnProperty(t) && i.objActControllerDict[t].setInlineTemplates(i.objInlineTmplDict)
        }), void 0 !== t && t.callback === !0 && (t.data.processData = i.objInlineTmplDict, i.objActControllerDict[t.data.regionId].onHtmlLoadComplete(t.data))
    }, c.prototype.onComponentCreationComplete = function(t) {
        t.actController.onComponentCreated(t)
    }, c.prototype.setStageScaleValue = function(t) {
        var e, i = this;
        for (e in i.objActControllerDict) i.objActControllerDict.hasOwnProperty(e) && i.objActControllerDict[e].setStageScaleValue(t)
    }, c.prototype.getInlineTemplateData = function() {
        return this.objInlineTmplDict
    }, c.prototype.handlePlayerEditorTask = function(t) {
        var e = t.task;
        switch (e) {
            case this.objEventConst.HANDLE_EDITOR_TASK_EVENT:
            case this.objEventConst.COMPONENT_SELECTED:
                this.dispatchManagerEvents(l.EVENTS_FOR_PROPERTY_MANAGER, t);
                break;
            case this.objEventConst.COMPONENT_DESELECTED:
                break;
            case this.objEventConst.COMPONENT_DATA_PROPERTY_UPDATED:
        }
    }, c.prototype.dispatchManagerEvents = function(t, e) {
        e.requestTo = t, this.trigger(l.MANAGE_MANAGERS_EVENTS, e)
    }, c.prototype.onPlayerStop = function(t) {
        var e;
        for (e in this.objActControllerDict) this.objActControllerDict.hasOwnProperty(e) && this.objActControllerDict[e].onPlayerStop(t)
    }, c.prototype.managePlayerCommonTask = function(t) {
        var e, i, n;
        switch (e = t.task) {
            case this.objEventConst.LAUNCH_ACTIVITY_IN_REGION:
                i = this.objActControllerDict[t.regionToChange], void 0 !== i && i.onActivityLaunchRequestByAnotherRegion(t);
                break;
            case l.REGION_CHANGE_NOTIFICATION:
                for (n in this.objActControllerDict) this.objActControllerDict.hasOwnProperty(n) && this.objActControllerDict[n].onRegionUpdate(t.regionState, !0)
        }
    }, c.prototype.managePlayerCommand = function(t) {
        var e, i = t.customData.task,
            n = {},
            o = {};
        switch (i) {
            case "startRegion":
                n.regionId = t.customData.regionToStart, t.customData.data && this.objActControllerDict[t.customData.regionToStart] ? (n.strActList = t.customData.data[t.customData.regionToStart].regionData, n.immediateStart = !0, n.data = t.customData.data[t.customData.regionToStart].deliverToActivity, n.defaultActId = t.customData.data[t.customData.regionToStart].defaultLaunchId, this.prepareRegionDataFromXML(n), this.objMPlayer.getPlayerHelper().showHideRegionById(t.customData.regionToStart, !0)) : this.startRegion(t.customData);
                break;
            case "stopRegion":
                this.objActControllerDict[t.customData.regionToStart] && this.stopRegion(t.customData.regionToStart);
                break;
            case "startAllRegion":
                this.stopAllRegions(!0);
                break;
            case "refreshRegion":
                o.regionId = t.customData.regionToStart, o.strActList = t.customData.data[t.customData.regionToStart].regionData, e = this.prepareRegionDataFromXML(o), this.objActControllerDict[o.regionId].immediateStart = !0, this.startActivityController(this.objActControllerDict[o.regionId])
        }
    }, c.prototype.onPlayerBubbleEvent = function(t) {
        var e = this;
        $.each(e.objActControllerDict, function(i) {
            e.objActControllerDict[i].handlePlayerCommonBubbleEvent(t)
        })
    }, c.prototype.hideAllRegion = function() {
        var t = this;
        $.each(t.objActControllerDict, function(e) {
            t.objMPlayer.getPlayerHelper().showHideRegionById(t.objActControllerDict[e].strRegionName, !1)
        })
    }, c.prototype.onDataReceivedFromWrapper = function(t, e) {
        _.isArray(e) ? e : [e]
    }, c.prototype.createPlayerFromControllerEvent = function(t) {
        this.objMPlayer.getPlayerHelper().handleNewPlayerCreation(t)
    }, c.prototype.handleEditorDataChange = function(t) {
        var e = {};
        e.regionId = t.data.regionId, e.strActList = t.data.regionData, this.prepareRegionDataFromXML(e)
    }, c.prototype.receivePropertyManagerEvents = function(t) {
        var e;
        for (e in this.objActControllerDict) this.objActControllerDict.hasOwnProperty(e) && this.objActControllerDict[e].receivePropertyManagerEvents(t)
    }, c.prototype.setPathUpdater = function(t) {
        this.objPathUpdater = t
    }, c.prototype.setTinCanHelper = function(t) {
        var e, i = this;
        if (this.objTinCanHelperRef = t, i.objActControllerDict)
            for (e in i.objActControllerDict) i.objActControllerDict[e].setTinCanHelper(t)
    }, c.prototype.destroy = function() {
        var t, e, i = this,
            n = !1;
        i.objEventBroadcaster.off(i.objEventBroadcaster.BUBBLE_EVENT);
        for (t in i.objActControllerDict) i.objActControllerDict.hasOwnProperty(t) && (e = i.objActControllerDict[t], e.off(i.objEventConst.CREATE_COMPONENT_EVENT), e.off(i.objEventConst.PLAYER_COMMON_TASK_EVENT), e.off(i.objEventConst.PLAYER_EDIT_COMPONENT_EVENT), e.off(i.objEventConst.HANDLE_EDITOR_TASK_EVENT), e.off(i.objEventConst.BROADCAST_EVENT), e.off(i.objEventConst.ON_ACTIVITY_SUCCESSFULLY_ADDED_IN_REGION), e.off(i.objEventConst.REMOVE_COMPONENT_EDITORS), e.off(i.objEventConst.CREATE_AND_INIT_ACTIVITY_HTML), e.off(i.objEventConst.SET_DRAWING_CANVAS), e.off(i.objEventConst.DRAWING_COMMON_TASK), e.off(i.objEventConst.DRAWING_COMMON_TASK), e.off(i.objEventConst.REGION_INITLIZE_START_EVENT), e.off(i.objEventConst.PLAYER_INIT_FROM_CONTROLLER_EVENT), e.off(this.objEventConst.EVENT_NEVIGATE_ACTIVITY_IN_CACHE_MODE), n = e.destroy());
        return n
    }, c
}), define("components/container", ["player/base/base-layout-comp"], function(t) {
    var e = t.extend({
        displayObject: !0,
        ALL_CHILDREND_ADDED_IN_DOM: "allChildAddedInDom",
        PRE_SCREEN_INIT_EVENT: "screenPreInitEvent",
        childComponent: {},
        initialize: function() {
            this.childComponent = {}
        }
    });
    return e.prototype.ContainerCompSuper = t, e.prototype.addChild = function(t) {
        "case" == this.componentType, this.addChildComponent(t)
    }, e.prototype.addChildComponent = function(t) {
        var e, i = this;
        t.hasOwnProperty("index") && (e = t.index), t.hasOwnProperty("parent") && t.hasOwnProperty("component") ? i.doAddChild(t.component, t.parent, e) : i.doAddChild(t, this.$el)
    }, e.prototype.removeChild = function(t) {
        var e, i = this;
        return t.hasOwnProperty("parent") && t.hasOwnProperty("component") ? e = i.doRemoveChild(t.component, t.parent) : ($(this.childComponent[t].el).remove(), e = this.childComponent[t], delete this.childComponent[t]), e
    }, e.prototype.addChildAt = function() {}, e.prototype.removeChildAt = function() {}, e.prototype.doAddChild = function(t, e, i) {
        if (t && e) i && i > 0 ? console.log("has index") : (e instanceof jQuery || (e = $(e, this.$el)), e.append(t.el), t.render(), void 0 !== t.onShow && t.onShow(), t.attach && t.attach());
        else {
            if (!t) throw new Error("Either child or parent is missing!");
            t.v3Html !== !0 && (this.$el.append(t.el), t.render()), this.childComponent[t.getID()] = t, void 0 !== t.onShow && t.onShow()
        }
    }, e.prototype.doRemoveChild = function(t, e) {
        return t && e && (e instanceof jQuery || (e = $(e)), $(t.el).remove()), t
    }, e.prototype.screenInitalizationStart = function() {
        this.customEventDispatcher(this.PRE_SCREEN_INIT_EVENT, this, {})
    }, e.prototype.childCreationComplete = function() {
        this.customEventDispatcher(this.ALL_CHILDREND_ADDED_IN_DOM, this, {})
    }, e.prototype.dispatchScreenEvent = function(t, e) {
        this.customEventDispatcher(t, this, e)
    }, e.prototype.destroy = function(t) {
        return this.ContainerCompSuper.prototype.destroy.call(this, t)
    }, e
}), define("components/case/case", ["marionette", "components/container"], function(t, e) {
    var i;
    return i = e.extend({
        objData: null,
        template: _.template(""),
        initialize: function(t) {
            this.objData = t, this.componentType = "case"
        },
        onRender: function() {
            void 0 !== this.objData.styleClass && ($(this.$el).addClass(this.objData.styleClass), $(this.el).attr("id", this.strCompId))
        },
        isValid: function(t) {
            var e = !0;
            return ("radio" === t || "answer" === t || "hint" === t) && (e = !1), e
        },
        onShow: function() {}
    }), i.prototype.CaseBoxSuper = e, i.prototype.destroy = function() {
        return this.CaseBoxSuper.prototype.destroy.call(this, !0)
    }, i
}), define("player/editor/base-editor", ["marionette", "player/factory/factory", "player/constants/errorconst"], function(t, e, i) {
    var n, o;
    return n = function(t) {
        return this.bEditor = !1, this.objComp = void 0, this.compType = void 0, this.regionId = t, this.objPathUpdater = void 0, this.objFactory = new e, this.rootRef = this, this.errorConst = i, this.isDestroyCalled = !1, this.objFactory.on(this.objFactory.COMP_CREATION_COMPLETE_EVENT, this.rootRef.onComponentCreationComplete, this), _.extend(this, Backbone.Events)
    }, n.prototype.ID = "id", n.prototype.COMP_NAME = "compname", n.prototype.ON_COMP_CREATED = "onComponentCreationComplete", n.prototype.prepareDefaultData = function(t, e, i) {
        var n = {};
        if (n.target = this, void 0 === t.attr) n = t.data;
        else {
            if (void 0 === t.attr("defaultData")) return void 0;
            n = $.parseJSON(t.attr("defaultData"))
        }
        return void 0 === e ? n : (e(i, n), void 0)
    }, n.prototype.onComponentCreationComplete = function() {}, n.prototype.createComponent = function(t) {
        "undefined" != typeof t.length && (t = t[0]);
        var e = {};
        void 0 === t.attr ? (e[this.ID] = t.id, e.strCompType = t.type) : (e[this.ID] = t.attr(this.ID), e.strCompType = t.attr(this.COMP_NAME)), this.objFactory.createComponent(e)
    }, n.prototype.appendChild = function(t, e, i) {
        var n, o, r, s;
        return n = $(t).find("[id=" + e.id + "]"), o = n.parent(), r = n.attr("style"), s = n.attr("class"), void 0 !== s && i.$el.addClass(s), void 0 !== r && i.$el.attr("style", r), i.$el.insertBefore(n), $(n).remove(), n = void 0, !0
    }, n.prototype.componentCreated = function() {
        this.objComp.target = this, this.trigger(this.ON_COMP_CREATED, this.objComp)
    }, n.prototype.destroy = function(t, e) {
        if (t !== !0) throw new Error(i.DESTROY_NOT_IMPLMENENTED_IN_CHILD_CLASS);
        return void 0 !== e.objFactory && e.objFactory.off(e.objFactory.COMP_CREATION_COMPLETE_EVENT), e.objComp = void 0, e.compType = void 0, e.objFactory = void 0, e.rootRef = void 0, e.errorConst = void 0, e.isDestroyCalled = !0, e.isDestroyCalled
    }, o = function(t, e) {
        var i, n, o = this;
        return n = t && _.has(t, "constructor") ? t.constructor : function() {
            return o.apply(this, arguments)
        }, _.extend(n, o, e), i = function() {
            this.constructor = n
        }, i.prototype = o.prototype, n.prototype = new i, t && _.extend(n.prototype, t), n.__super__ = o.prototype, n
    }, n.prototype.loadData = function(t, e, i) {
        var n = this;
        Data_Loader.on(Data_Loader.DATA_LOAD_SUCCESS, $.proxy(n.successHandler, n)), Data_Loader.on(Data_Loader.DATA_LOAD_FAILED, $.proxy(n.errorHandler, n)), Data_Loader.load({
            url: t,
            dataType: e,
            contentType: "application/xml",
            returnType: i,
            scope: n
        })
    }, n.prototype.successHandler = function(t) {
        Data_Loader.off(Data_Loader.DATA_LOAD_SUCCESS), Data_Loader.off(Data_Loader.DATA_LOAD_FAILED), this.onDataLoadSuccess(t)
    }, n.prototype.errorHandler = function() {
        Data_Loader.off(Data_Loader.DATA_LOAD_SUCCESS), Data_Loader.off(Data_Loader.DATA_LOAD_FAILED)
    }, n.prototype.setEditorMode = function(t) {
        this.bEditor = t
    }, n.prototype.onDataLoadSuccess = function() {}, n.prototype.updateExistingComponent = function(t, e) {
        var i = e.actionKeys[1];
        "HTML" === i ? void 0 !== t.setHtmlAttr ? t.setHtmlAttr(e.data) : console.warn("no setHtmlAttr method found!!!!") : this.updateComponent(t, e)
    }, n.prototype.updateComponent = function() {}, n.extend = o, n
}), define("editorroot/case-editor", ["marionette", "player/editor/base-editor"], function(t, e) {
    var i;
    return i = e.extend({
        defaultCompData: {}
    }), i.prototype.getComponent = function(t, e) {
        this.isSimComp = e;
        var i = void 0 !== t.data ? t : $(t);
        this.createCompData(i)
    }, i.prototype.createCompData = function(t) {
        this.defaultCompData = this.prepareDefaultData(t), this.createComponent(t)
    }, i.prototype.onComponentCreationComplete = function(t) {
        this.objComp = t, this.objComp.defaultData = this.defaultCompData, this.componentCreated()
    }, i.prototype.CaseEditorSuper = e, i.prototype.destroy = function() {
        return this.CaseEditorSuper.prototype.destroy(this, !0)
    }, i
}), define("player/base/base-item-comp", ["marionette", "player/events/eventsconst"], function(t, e) {
    var i;
    return i = Backbone.Marionette.ItemView.extend({
        eventConst: e,
        isBaseItemComp: !0,
        isDestroyCalled: !1,
        strName: void 0,
        nStageScale: 1,
        strCompId: void 0,
        isEnabled: !0,
        bEditor: !1,
        parentDiv: null,
        componentType: void 0,
        existingScreenElem: void 0,
        $existingScreenElem: void 0
    }), i.prototype.initBaseItemComp = function() {}, i.prototype.beforeRender = function(t, e) {
        this.existingScreenElem = t, this.$existingScreenElem = e, this.$el = e
    }, i.prototype.onBeforeRender = function() {
        void 0 !== this.existingScreenElem && (this.$el = this.$existingScreenElem, this.template = _.template(this.existingScreenElem))
    }, i.prototype.onShow = function() {}, i.prototype.show = function() {
        this.$el.show()
    }, i.prototype.hide = function() {
        this.$el.hide()
    }, i.prototype.setID = function(t) {
        this.strCompId = t
    }, i.prototype.getName = function() {
        return this.strName
    }, i.prototype.setStageScaleValue = function(t) {
        this.nStageScale = t
    }, i.prototype.getStageScaleValue = function() {
        return this.nStageScale
    }, i.prototype.setName = function(t) {
        this.strName = t
    }, i.prototype.getID = function() {
        return this.strCompId
    }, i.prototype.setState = function() {}, i.prototype.resetActivity = function() {}, i.prototype.customEventDispatcher = function(t, e, i) {
        var n = {};
        n.data = e, n.customData = i, n.target = e, n.type = t, e.trigger(t, n)
    }, i.prototype.onPlayerResizeEvent = function() {}, i.prototype.toggleMe = function() {
        $(this.el).toggle()
    }, i.prototype.hide = function() {
        $(this.el).hide()
    }, i.prototype.showElement = function() {
        $(this.el).show()
    }, i.prototype.compClick = function() {
        this.customEventDispatcher("compClick", this)
    }, i.prototype.compRollover = function() {
        this.customEventDispatcher("compRollover", this)
    }, i.prototype.compRollout = function() {
        this.customEventDispatcher("compRollout", this)
    }, i.prototype.compOnchange = function() {
        this.customEventDispatcher("compOnchange", this)
    }, i.prototype.enable = function(t) {
        t === !0 || "true" === t ? (this.isEnabled = !0, this.$el.removeAttr("disabled"), $(this.$el).children().removeAttr("disabled"), this.$el.css("cursor", "pointer")) : (this.isEnabled = !1, this.$el.attr("disabled", "disabled"), $(this.$el).children().attr("disabled", "disabled"), this.$el.css("cursor", "auto"))
    }, i.prototype.setStyle = function(t) {
        void 0 !== t && $($(this.$el).children()[0]).css(t)
    }, i.prototype.selectComponent = function() {
        var t = this;
        this.parentDiv = this.$el, this.parentDiv.off("click").on("click", t, t.onCompClickInEditMode), this.parentDiv.off("contextmenu").on("contextmenu", t, t.handelContextMenu)
    }, i.prototype.onCompClickInEditMode = function(t) {
        var e = t.data;
        t.stopPropagation && t.stopPropagation(), e.customEventDispatcher(e.eventConst.SELECTOR_CLICK_EVENT, e, e.getID())
    }, i.prototype.handelContextMenu = function(t) {
        var e = t.data,
            i = {};
        i.compID = e.getID(), i.eventData = t, t.stopPropagation && (t.stopPropagation(), t.preventDefault()), e.customEventDispatcher(e.eventConst.SELECTOR_RIGHT_CLICK_EVENT, e, i)
    }, i.prototype.setHtmlAttr = function(t) {
        var e = this;
        _.filter(t, function(t, i) {
            "inputtext" === e.componentType ? e.$el.find("input").attr(i, t) : e.$el.attr(i, t)
        })
    }, i.prototype.onUpdateComplete = function() {}, i.prototype.sendStatementToLRS = function(t, e) {
        var i = {};
        i.statement = e, i.compid = this.strCompId, i.type = this.componentType, i.action = t, this.bEditor === !1 && this.customEventDispatcher("sendtincandataevent", this, i)
    }, i.prototype.destroy = function(t) {
        if (t !== !0) throw new Error("Destroy must be implemented in child class.");
        return this.parentDiv && (this.parentDiv.off("click"), this.parentDiv.off("contextmenu")), this.isDestroyCalled = !0, this.isDestroyCalled
    }, i
}), define("components/commonmodel", ["backbone"], function(t) {
    var e = t.Model.extend({
        defaults: {
            styleClass: "",
            selectedStyleClass: "",
            data: {}
        }
    });
    return e
}), define("components/label/label-model", ["components/commonmodel"], function(t) {
    var e = t.extend({
        defaults: {
            text: ""
        }
    });
    return e
}), define("components/label/label", ["marionette", "player/base/base-item-comp", "components/label/label-model"], function(t, e, i) {
    var n;
    return n = e.extend({
        template: _.template("<span>{{text}}</span>"),
        tagName: "span",
        initialize: function(t) {
            this.objData = t, this.model = new i(t), this.componentType = "label"
        },
        onShow: function() {
            var t = this;
            this.bEditor === !1 && (this.$el.on("click", $.proxy(t.compClick, t)), this.$el.on("mouseover", $.proxy(t.compRollover, t)), this.$el.on("mouseout", $.proxy(t.compRollout, t))), this.$el.addClass(this.styleClass()), this.customEventDispatcher(this.eventConst.CREATION_COMPLETE, this, this)
        },
        onRender: function() {
            this._changeText(this.model.get("text"))
        }
    }), n.prototype.compClick = function() {
        this.isEnabled === !0 && this.customEventDispatcher("click", this, this.data())
    }, n.prototype.compRollover = function() {
        if (this.isEnabled === !0) {
            var t = this.getClassForState("over");
            t.length > 0 && this.$el.addClass(t), this.customEventDispatcher("rollover", this, this.data())
        }
    }, n.prototype.compRollout = function() {
        if (this.isEnabled === !0) {
            var t = this.getClassForState("over");
            t.length > 0 && this.$el.removeClass(t), this.customEventDispatcher("rollout", this, this.data())
        }
    }, n.prototype.getClassForState = function(t) {
        var e = this.model.get("stylelist");
        return e && e[t] ? e[t] : ""
    }, n.prototype.isValid = function() {
        return !1
    }, n.prototype.data = function(t) {
        return t ? (this.model.set("data", t), void 0) : this.model.get("data")
    }, n.prototype.setScreenText = function(t) {
        this.text(t)
    }, n.prototype.text = function(t) {
        return t ? (this.model.set("text", t), this.render(), void 0) : this.model.get("text")
    }, n.prototype.styleClass = function(t) {
        return t ? (this.model.set("styleClass", t), void 0) : this.model.get("styleClass")
    }, n.prototype.LabelSuper = e, n.prototype._changeText = function(t) {
        var e;
        e = this.$el.find("span"), e.html(t)
    }, n.prototype.destroy = function() {
        var t;
        return t = this, this.$el.off("click"), this.$el.off("mouseover"), this.$el.off("mouseout"), this.LabelSuper.prototype.destroy.call(this, !0)
    }, n
}), define("editorroot/label-editor", ["marionette", "player/editor/base-editor"], function(t, e) {
    var i;
    return i = e.extend({
        defaultCompData: {}
    }), i.prototype.getComponent = function(t, e) {
        this.isSimComp = e;
        var i = void 0 !== t.data ? t : $(t);
        this.createCompData(i)
    }, i.prototype.createCompData = function(t) {
        if (this.defaultCompData = this.prepareDefaultData(t), void 0 === this.defaultCompData) throw new Error(this.errorConst.LABEL_DEFAULT_DATA_MISSING);
        this.createComponent(t)
    }, i.prototype.onComponentCreationComplete = function(t) {
        this.objComp = t, this.objComp.defaultData = this.defaultCompData, this.componentCreated()
    }, i.prototype.updateComponent = function(t, e) {
        var i = e.actionKeys[e.actionKeys.length - 1].toLowerCase();
        t.model.set(i, e.data[i]), "text" === i && t._changeText(e.data[i])
    }, i.prototype.LabelEditorSuper = e, i.prototype.destroy = function() {
        return this.LabelEditorSuper.prototype.destroy(this, !0)
    }, i
}), define("player/components/button/model", ["components/commonmodel"], function(t) {
    var e = t.extend({
        defaults: {
            label: "",
            stylelist: null
        }
    });
    return e
}), define("components/button/button", ["marionette", "player/base/base-item-comp", "player/components/button/model"], function(t, e, i) {
    var n;
    return n = e.extend({
        template: _.template('<span style="pointer-events:none" textAlign="center">{{label}}</span>'),
        tagName: "div",
        toggle: !1,
        bSelected: !1,
        isEnabled: !0,
        initialize: function(t) {
            this.objData = t, this.toggle = "true" === t.toggle ? !0 : !1, this.model = new i(t), this.componentType = "button"
        },
        onRender: function() {
            void 0 === this.objData.useDefaultTemplate || this.objData.useDefaultTemplate === !0 ? (this.$el.attr("class", this.styleClass()), this._changeText(this.model.get("label"))) : this.$el.html(this.template())
        },
        onShow: function() {
            var t = this;
            this.bEditor === !1 && (this.$el.on("click", $.proxy(t.compClick, t)), this.$el.on("mouseover", $.proxy(t.compRollover, t)), this.$el.on("mouseout", $.proxy(t.compRollout, t)), this.$el.on("tap", $.proxy(t.compTap, t))), this.customEventDispatcher(this.eventConst.CREATION_COMPLETE, this, this)
        }
    }), n.prototype.BUTTON_STATE_CHANGE = "btnStateChange", n.prototype.isValid = function() {
        return !1
    }, n.prototype._changeText = function(t) {
        var e;
        e = this.$el.find("span"), e.html(t)
    }, n.prototype.ButtonSuper = e, n.prototype.compClick = function() {
        this.bEditor === !1, this.isEnabled === !0 && (this.toggle === !0 && (this.setSelected(!this.bSelected), this.customEventDispatcher("stateChanged", this, this.data())), this.customEventDispatcher("compClick", this, this.data()), this.customEventDispatcher("click", this, this.data()))
    }, n.prototype.compRollover = function() {
        if (this.isEnabled === !0) {
            var t = this.getClassForState("over");
            t.length > 0 && this.$el.addClass(t), this.customEventDispatcher("mouseover", this, this.data()), this.customEventDispatcher("rollover", this, this.data())
        }
    }, n.prototype.sendStatement = function() {
        this.sendStatementToLRS("stateChanged_", this.bSelected)
    }, n.prototype.compRollout = function() {
        if (this.isEnabled === !0) {
            var t = this.getClassForState("over");
            t.length > 0 && this.$el.removeClass(t), this.customEventDispatcher("mouseout", this, this.data()), this.customEventDispatcher("rollout", this, this.data())
        }
    }, n.prototype.compTap = function() {
        this.isEnabled === !0 && (this.customEventDispatcher("compTap", this, this.data()), this.customEventDispatcher("tap", this, this.data()))
    }, n.prototype.getClassForState = function(t) {
        var e = this.model.get("stylelist");
        return e && e[t] ? e[t] : ""
    }, n.prototype.setSelected = function(t) {
        var e = this.getClassForState("selected");
        t = "true" === t || t === !0 ? !0 : !1, t === !0 && e.length > 0 ? this.$el.addClass(e) : this.$el.removeClass(e), this.bSelected = t
    }, n.prototype.enable = function() {
        this.isEnabled = !0, this.$el.attr("class", this.styleClass())
    }, n.prototype.disable = function() {
        var t = this.getClassForState("disabled");
        this.isEnabled = !1, t.length > 0 ? this.$el.addClass(t) : this.$el.removeClass(t)
    }, n.prototype.data = function(t) {
        return t ? (this.model.set("data", t), void 0) : this.model.get("data")
    }, n.prototype.setScreenText = function(t) {
        this.label(t)
    }, n.prototype.label = function(t) {
        return t ? (this.model.set("label", t), this.render(), void 0) : this.model.get("label")
    }, n.prototype.styleClass = function(t) {
        return t ? (this.model.set("styleClass", t), void 0) : this.model.get("styleClass")
    }, n.prototype.show = function() {
        this.$el.show()
    }, n.prototype.hide = function() {
        this.$el.hide()
    }, n.prototype._changeLabel = function(t) {
        var e;
        e = this.$el.find("span"), e.html(t)
    }, n.prototype.getState = function() {
        var t = {};
        t.enabled = this.isEnabled, t.selected = this.bSelected
    }, n.prototype.setState = function(t) {
        t.enabled ? this.enable() : this.disable(), t.selected ? this.setSelected(!0) : this.setSelected(!1)
    }, n.prototype.isReady = function() {
        return this.bSelected
    }, n.prototype.destroy = function() {
        return this.$el.off("click"), this.$el.off("mouseover"), this.$el.off("mouseout"), this.$el.off("tap"), this.$el.off("stateChanged"), this.ButtonSuper.prototype.destroy.call(this, !0)
    }, n
}), define("editorroot/button-editor", ["marionette", "player/editor/base-editor"], function(t, e) {
    var i;
    return i = e.extend({
        defaultCompData: {}
    }), i.prototype.getComponent = function(t, e) {
        this.isSimComp = e;
        var i = void 0 !== t.data ? t : $(t);
        this.createCompData(i)
    }, i.prototype.createCompData = function(t) {
        if (this.defaultCompData = this.prepareDefaultData(t), void 0 === this.defaultCompData) throw new Error(this.errorConst.BUTTON_DEFAULT_DATA_MISSING);
        this.createComponent(t)
    }, i.prototype.onComponentCreationComplete = function(t) {
        this.objComp = t, this.objComp.defaultData = this.defaultCompData, this.componentCreated()
    }, i.prototype.updateComponent = function(t, e) {
        var i = e.actionKeys[e.actionKeys.length - 1];
        t.model.set(i, e.data[i]), "label" === i && t._changeLabel(e.data[i])
    }, i.prototype.replaceClassProp = function(t, e, i) {
        return t && e && i ? void 0 : (console.error("Wrong function arguments"), !1)
    }, i.prototype.ButtonEditorSuper = e, i.prototype.destroy = function() {
        return this.ButtonEditorSuper.prototype.destroy(this, !0)
    }, i
}), define("components/screen", ["components/container"], function(t) {
    var e = t.extend({
        isScreenInitalized: !0,
        initialize: function() {
            this.componentType = "screen"
        }
    });
    return e.prototype.isValid = function() {
        return !0
    }, e.prototype.ScreenSuper = t, e.prototype.destroy = function() {
        return this.ScreenSuper.prototype.destroy.call(this, !0)
    }, e
}), define("editorroot/screen-editor", ["marionette", "player/editor/base-editor"], function(t, e) {
    var i;
    return i = e.extend({
        defaultCompData: {}
    }), i.prototype.getComponent = function(t, e) {
        this.isSimComp = e;
        var i = void 0 !== t.data ? t : $(t);
        i = void 0 === i.length ? i : i[0], this.createCompData(i)
    }, i.prototype.createCompData = function(t) {
        this.defaultCompData = this.prepareDefaultData(t), this.createComponent(t)
    }, i.prototype.onComponentCreationComplete = function(t) {
        this.objComp = t, this.objComp.defaultData = this.defaultCompData, this.componentCreated()
    }, i.prototype.ScreenEditorSuper = e, i.prototype.destroy = function() {
        return this.ScreenEditorSuper.prototype.destroy(this, !0)
    }, i
}), define("components/image/model", ["components/commonmodel"], function(t) {
    var e = t.extend({
        defaults: {
            src: "",
            alttext: ""
        }
    });
    return e
}), define("components/image/image", ["marionette", "player/base/base-item-comp", "components/image/model"], function(t, e, i) {
    var n;
    return n = e.extend({
        objData: null,
        template: _.template('<img src="{{src}}" alt="{{alttext}}"/>'),
        tagName: "div",
        initialize: function(t) {
            this.objData = t, this.model = new i(t), this.componentType = "image"
        },
        onRender: function() {
            var t = this.$el.children()[0];
            $(t).attr("src", this.model.get("src")), $(t).attr("alt", this.model.get("alttext")), void 0 !== this.objData.styleClass && (this.$el.attr("class", this.objData.styleClass), $(t).css("width", "inherit"), $(t).css("height", "inherit"), $(t).css("border-raidus", "inherit"), $(t).css("opacity", "inherit"))
        },
        onShow: function() {
            var t = this;
            this.bEditor === !1 && (this.$el.on("click", $.proxy(t.compClick, t)), this.$el.on("mouseover", $.proxy(t.compRollover, t)), this.$el.on("mouseout", $.proxy(t.compRollout, t))), this.customEventDispatcher(this.eventConst.CREATION_COMPLETE, this, this)
        }
    }), n.prototype.isValid = function() {
        return !1
    }, n.prototype.changeSrc = function(t) {
        this.model.set("src", t), this.render()
    }, n.prototype._changeSource = function(t) {
        var e;
        e = this.$el.find("img"), e.attr("src", t)
    }, n.prototype.__super__ = e, n.prototype.destroy = function() {
        return this.$el.off("click"), this.$el.off("mouseover"), this.$el.off("mouseout"), this.__super__.prototype.destroy.call(this, !0)
    }, n
}), define("editorroot/image-editor", ["marionette", "player/editor/base-editor"], function(t, e) {
    var i;
    return i = e.extend({
        defaultCompData: {}
    }), i.prototype.getComponent = function(t, e) {
        this.isSimComp = e;
        var i = void 0 !== t.data ? t : $(t);
        this.createCompData(i)
    }, i.prototype.createCompData = function(t) {
        if (this.defaultCompData = this.prepareDefaultData(t), this.checkSource(this.defaultCompData), void 0 === this.defaultCompData) throw new Error(this.errorConst.IMAGE_DEFAULT_DATA_MISSING);
        this.createComponent(t)
    }, i.prototype.checkSource = function(t) {
        t.src = this.objPathUpdater.getValidatedPath(this.regionId.classRef.editorController.regionId, t.src), t.src = this.objPathUpdater.resolvePath(t.src), !t.rootPath && this.objPathUpdater && (t.rootPath = this.objPathUpdater.rootPathDict[this.regionId.classRef.editorController.regionId])
    }, i.prototype.onComponentCreationComplete = function(t) {
        this.objComp = t, this.objComp.defaultData = this.defaultCompData, this.componentCreated()
    }, i.prototype.updateComponent = function(t, e) {
        var i = e.actionKeys[e.actionKeys.length - 1];
        "src" === i && (e.data[i] = this.objPathUpdater.getValidatedPath(this.regionId.classRef.editorController.regionId, e.data[i]), e.data[i] = this.objPathUpdater.resolvePath(e.data[i]), e.data.rootPath = this.objPathUpdater.rootPathDict[this.regionId.classRef.editorController.regionId]), t.model.set(i, e.data[i]), "src" === i && t._changeSource(e.data[i])
    }, i.prototype.ImageEditorSuper = e, i.prototype.destroy = function() {
        return this.ImageEditorSuper.prototype.destroy(this, !0)
    }, i
}), define("components/multiplechoice/model", ["components/commonmodel"], function(t) {
    var e = t.extend({
        defaults: {
            value: "",
            compids: "",
            attempts: "",
            shuffle: !1
        }
    });
    return e
}), define("components/multiplechoice/multiplechoice", ["marionette", "components/case/case", "components/multiplechoice/model"], function(t, e, i) {
    var n;
    return n = e.extend({
        objData: null,
        answer_dict: {},
        template: _.template(""),
        feedback: null,
        objHint: null,
        count: 0,
        objLives: null,
        comp_state_obj: {},
        model: null,
        clickcounter: 0,
        clickedStatus: !1,
        bEditor: !1,
        currentSelectedOption: void 0,
        nCounterRightAnswer: void 0,
        initialize: function(t) {
            this.answer_dict = {}, this.objData = t, this.model = new i(t), this.componentType = "multiplechoice"
        },
        onRender: function() {
            void 0 !== this.objData.styleClass && ($(this.$el).addClass(this.objData.styleClass), $(this.el).attr("id", this.strCompId)), this.reset()
        },
        onShow: function() {
            var t = this;
            this.model.get("shuffle") && setTimeout(function() {
                t.shuffleOptions()
            }, 130), setTimeout(function() {
                _.filter(t.answer_dict, function(e) {
                    e.$el.find('[id^="button"]').parent().addClass("selectedbtntoggle").on("click", function() {
                        t.clickcounter++, "scq" === t.objData.setstate && t.bEditor === !1 && ($(this).parent().parent().find('span[id^="button"]').parent().removeClass("defaultbtntoggle").addClass("selectedbtntoggle"), $(this).removeClass("selectedbtntoggle").addClass("defaultbtntoggle")), "mcq" === t.objData.setstate && t.bEditor === !1 && ($(this).removeClass("selectedbtntoggle").addClass("defaultbtntoggle"), t.clickcounter > 1 && ($(this).removeClass("defaultbtntoggle").addClass("selectedbtntoggle"), t.clickcounter = 0))
                    })
                })
            }, 400)
        }
    }), n.prototype.ANSWER_CHECK_COMPLETE_EVENT = "answerCheckCompleteEvent", n.prototype.SHOW_FEEDBACK_EVENT = "showFeedbackEvent", n.prototype.RESET_COMPLETE_EVENT = "resetCompleteEvent", n.prototype.CORRECT_ANSWER_SHOWN_EVENT = "correctAnswerShownEvent", n.prototype.DISABLE_COMPLETE_EVENT = "disabledEvent", n.prototype.ENABLE_COMPLETE_EVENT = "enabledEvent", n.prototype.ATTEMPT_OVER_EVENT = "attemptOverEvent", n.prototype.GET_STATE_EVENT = "getStateEvent", n.prototype.SET_STATE_EVENT = "setStateEvent", n.prototype.ON_ASSESMENT_COMPLETE = "onAssessmentComplete", n.prototype.ON_ASSESMENT_READY = "onAssesmentReady", n.prototype.ON_ASSESMENT_NOT_READY = "onAssessmentNotReady", n.prototype.CLEAR_COMPLETE_EVENT = "clearCompleteEvent", n.prototype.addChild = function(t) {
        var e, i;
        switch (e = t.component, i = t.component.componentType) {
            case "answer":
                this.answer_dict[e.getID()] = e, this.bEditor === !1 && e.on("btnStateChange", this.onAnswerbtnStateChange, this), e.singleSelection = this.objData.singleselection, this.storeChilds(e), e.on("stateChanged", $.proxy(this.stateChanged, this));
                break;
            case "hint":
                this.objHint = e, this.bEditor === !1;
                break;
            case "feedback":
                this.feedback = e, this.bEditor === !1 && this.feedback.hide();
                break;
            case "lives":
                this.objLives = e;
                break;
            case "label":
                break;
            default:
                console.log("invalid component")
        }
        this.MultipleChoiceSuper.prototype.addChild.call(this, t)
    }, n.prototype.stateChanged = function(t) {
        this.objData.singleselection = "true" === this.objData.singleselection ? !0 : this.objData.singleselection, this.objData.singleselection === !0 && (this.currentSelectedOption && this.currentSelectedOption !== t.target && this.currentSelectedOption.handleSingleSelection(this.objData.singleselection), this.currentSelectedOption = t.target), this.customEventDispatcher("stateChanged", this, t), this.isReady()
    }, n.prototype.isValid = function(t) {
        var e = !1;
        return e = "answer" === t || "label" === t || "feedback" === t || "hint" === t || "life" === t || "lives" === t ? !0 : !1
    }, n.prototype.onAnswerbtnStateChange = function(t) {
        var e = this;
        "scq" === this.objData.setstate && this.bEditor === !1 && _.filter(e.answer_dict, function(e) {
            e.getID() !== t.target.getID() && e.changeBtnState(t.target)
        })
    }, n.prototype.checkAnswer = function() {
        var t, e = !0,
            i = this;
        this.nCounterRightAnswer = 0, this.hideFeedback(), _.filter(this.answer_dict, function(n) {
            n.hideHint(), t = n.checkAnswer(), t === !1 ? e = !1 : t === !0 && "" !== n.objData.answer && (i.nCounterRightAnswer = i.nCounterRightAnswer + 1)
        }), null !== this.feedback && this.feedback.showFeedback(e), e === !1 && this.attempt(), this.customEventDispatcher("onCheckAnswer", this, e), this.customEventDispatcher(this.ANSWER_CHECK_COMPLETE_EVENT, this, e), this.sendStatementToLRS("checkAnswer_", e === !0 ? "correct" : "incorrect")
    }, n.prototype.showLives = function() {
        this.objLives || this.objLives.showLives()
    }, n.prototype.hideLives = function() {
        this.objLives || this.objLives.hideLives()
    }, n.prototype.showHint = function() {
        null !== this.objHint && this.objHint.showHint(), _.filter(this.answer_dict, function(t) {
            t.showHint()
        })
    }, n.prototype.hideHint = function() {
        null !== this.objHint && this.objHint.hideHint(), _.filter(this.answer_dict, function(t) {
            t.hideHint()
        })
    }, n.prototype.attempt = function() {
        var t = !1;
        this.objLives && this.model.set("attempts", this.objLives.getTotalLivesCount()), -1 === this.count && void 0 === this.count || (++this.count, this.count === parseInt(this.model.get("attempts"), 10) && (t = !0, this.customEventDispatcher(this.ATTEMPT_OVER_EVENT, this, this)), this.objLives && this.objLives.loselife())
    }, n.prototype.shuffleOptions = function() {
        var t, e, i, n, o, r;
        for (e = this.answerComponents(), i = e.length; 0 !== i;) n = Math.floor(Math.random() * i), i -= 1, r = e[i], e[i] = e[n], e[n] = r;
        for (t = 0; t < e.length; t += 1) o = this[e[t]], this.$el.append(o.$el)
    }, n.prototype.answerComponents = function() {
        var t, e;
        return e = this.model.get("compids"), t = e.length > 0 ? e.split("|") : []
    }, n.prototype.getTotalCorrectOptions = function() {
        var t = 0,
            e = {};
        return _.filter(this.answer_dict, function(e) {
            "" !== e.objData.answer && (t += 1)
        }), e.totalCorrectAnswer = t, e.userCorrectAnswer = this.nCounterRightAnswer, e
    }, n.prototype.disable = function(t) {
        _.filter(this.answer_dict, function(e) {
            e.disable(t)
        }), t ? this.customEventDispatcher(this.ENABLE_COMPLETE_EVENT, this, this) : this.customEventDispatcher(this.DISABLE_COMPLETE_EVENT, this, this)
    }, n.prototype.enable = function(t) {
        _.filter(this.answer_dict, function(e) {
            e.enable(t)
        }), t || this.customEventDispatcher(this.ENABLE_COMPLETE_EVENT, this, this)
    }, n.prototype.showFeedback = function() {
        _.filter(this.answer_dict, function(t) {
            t.showFeedback()
        }), this.customEventDispatcher(this.SHOW_FEEDBACK_EVENT, this, this)
    }, n.prototype.hideFeedback = function() {
        this.feedback && this.feedback.hideFeedback(), _.filter(this.answer_dict, function(t) {
            t.hideFeedback()
        }), this.customEventDispatcher(this.SHOW_FEEDBACK_EVENT, this, this)
    }, n.prototype.showAnswer = function() {
        _.filter(this.answer_dict, function(t) {
            t.showAnswer()
        }), this.hideFeedback(), this.customEventDispatcher(this.CORRECT_ANSWER_SHOWN_EVENT, this, this), this.sendStatementToLRS("showAnswer_", "")
    }, n.prototype.getState = function() {
        var t = {};
        return _.filter(this.answer_dict, function(e) {
            t[e.getID()] = e.getState()
        }), this.customEventDispatcher(this.GET_STATE_EVENT, this, this), this.feedback && (t[this.feedback.strCompId] = this.feedback.getState()), t
    }, n.prototype.setState = function(t) {
        var e = this;
        this.reset(), void 0 !== t && null !== t && (e.comp_state_obj = t), this.feedback && this.feedback.setState(t[this.feedback.strCompId]), _.filter(this.answer_dict, function(e) {
            e.setState(t[e.getID()])
        }), this.customEventDispatcher(this.SET_STATE_EVENT, this, this)
    }, n.prototype.isReady = function() {
        var t, e, i, n, o = [];
        switch (_.filter(this.answer_dict, function(i) {
            e = i.isReady(), t = e.readyState, o.push(t)
        }), i = e.type) {
            case "inputtext":
            case "dropdown":
                for (n = 0; n < o.length; n += 1)
                    if (0 == o[n]) return this.customEventDispatcher(this.ON_ASSESMENT_NOT_READY, this, this), void 0;
                this.customEventDispatcher(this.ON_ASSESMENT_READY, this, this);
                break;
            case "radio":
            case "button":
                for (n = 0; n < o.length; n += 1)
                    if (1 == o[n]) return this.customEventDispatcher(this.ON_ASSESMENT_READY, this, this), void 0;
                this.customEventDispatcher(this.ON_ASSESMENT_NOT_READY, this, this)
        }
    }, n.prototype.reset = function() {
        var t, e;
        for (_.filter(this.answer_dict, function(t) {
                t.reset()
            }), e = this.model.get("attempts"), this.bIgnoreAttempt || (this.count = 0), t = 0; e > t; t++) this.objLives && this.objLives.gainlife();
        this.feedback && this.feedback.hideFeedback(), this.customEventDispatcher(this.RESET_COMPLETE_EVENT, this, this)
    }, n.prototype.clear = function() {
        _.filter(this.answer_dict, function(t) {
            t.clear()
        }), this.feedback && this.feedback.hideFeedback(), this.customEventDispatcher(this.CLEAR_COMPLETE_EVENT, this, this)
    }, n.prototype.resetIncorrect = function() {
        _.filter(this.answer_dict, function(t) {
            t.checkAnswer() === !1 ? t.reset() : t.hideFeedback()
        })
    }, n.prototype.freezeCorrect = function() {
        _.filter(this.answer_dict, function(t) {
            t.freezeCorrect()
        })
    }, n.prototype.showCorrectFeedback = function() {
        _.filter(this.answer_dict, function(t) {
            t.showCorrectFeedback()
        })
    }, n.prototype.hideCorrectFeedback = function() {
        _.filter(this.answer_dict, function(t) {
            t.hideCorrectFeedback()
        })
    }, n.prototype.hideIncorrectFeedback = function() {
        _.filter(this.answer_dict, function(t) {
            t.hideIncorrectFeedback()
        })
    }, n.prototype.showIncorrectFeedback = function() {
        _.filter(this.answer_dict, function(t) {
            t.showIncorrectFeedback()
        })
    }, n.prototype.storeChilds = function(t) {
        var e, i, n;
        return n = this.model.get("compids"), e = n.length > 0 ? n.split("|") : [], i = e.indexOf(t.getID()), 0 > i ? (e.push(t.getID()), this.model.set("compids", e.join("|")), !0) : !1
    }, n.prototype.MultipleChoiceSuper = e, n.prototype.destroy = function() {
        return this.answer_dict = {}, this.feedback = null, this.clickcounter = 0, this.MultipleChoiceSuper.prototype.destroy.call(this, !0)
    }, n
}), define("editorroot/multiplechoice-editor", ["marionette", "editorroot/case-editor"], function(t, e) {
    var i;
    return i = e.extend({}), i.prototype.MultipleChoiceEditorSuper = e, i.prototype.destroy = function() {
        return this.MultipleChoiceEditorSuper.prototype.destroy(this, !0)
    }, i
}), define("player/screen/screen-helper", ["marionette"], function() {
    var t;
    return t = Backbone.Marionette.Controller.extend({
        objActivity: null,
        screenId: void 0,
        model: void 0,
        objTinCanHelper: void 0
    }), t.prototype.manageWebServiceCall = function(t, e, i, n, o) {
        var r = {};
        r.serviceName = t, r.context = i, r.successFunction = n, r.failFunction = o, r.userData = e, this.objActivity.manageWebServiceCall(r)
    }, t.prototype.stopAllRegion = function(t, e) {
        this.objActivity.stopAllRegion(t, e)
    }, t.prototype.startAllRegion = function(t, e, i) {
        this.objActivity.stopAllRegion(!t, e, i)
    }, t.prototype.showAlertMsg = function(t, e, i, n, o, r, s, a) {
        var l = {};
        return l.title = n, l.message = t, void 0 !== o && (l.yesBtnLabel = o), void 0 !== r && (l.noBtnLabel = r), void 0 !== s && (l.cancelBtnLabel = s), void 0 !== i && (l.button = i), l.styles = a, l.htmlTemplate = e, this.showAlert(l)
    }, t.prototype.showAlert = function(t) {
        return this.objActivity.showAlert(t)
    }, t.prototype.onConfigDataModified = function(t, e) {
        var i;
        i = {}, i.activeRegion = this.activeRegion, i.action = t, i.data = e, this.objActivity.broadcastEditorTask("modifyConfig", i)
    }, t.prototype.startStopRegions = function(t, e, i, n) {
        var o = {};
        o.regionToStart = t, o.task = e, o.strActivityID = i, o.bLaunchByIndex = n, this.objActivity.playerBubbleEvent(o)
    }, t.prototype.getTinCanHelper = function() {
        var t = null;
        return this.objActivity.objTinCanHelper && (t = this.objActivity.objTinCanHelper), t
    }, t.prototype.sendTinCanStatement = function(t) {
        this.getTinCanHelper() && this.getTinCanHelper().getInstance() && this.getTinCanHelper().getInstance().sendStatement(t)
    }, t.prototype.destroy = function() {
        return !0
    }, t
}), define("player/base/base-popup-comp", ["player/base/base-display-comp"], function(t) {
    var e;
    return e = t.extend({
        type: "popup"
    }), e.prototype.POPUP_CLOSE_EVENT = "popupCloseEvent", e.prototype.closePopup = function(t) {
        this.customEventDispatcher(this.POPUP_CLOSE_EVENT, this, t)
    }, e.prototype.BasePopupCompSuper = t, e.prototype.destroy = function(t) {
        return this.BasePopupCompSuper.prototype.destroy.call(this, t)
    }, e
}), define("components/confirmpopup/confirm-popup", ["player/base/base-popup-comp"], function(t) {
    var e;
    return e = t.extend({
        template: _.template(""),
        objPopupData: void 0,
        btnYes: void 0,
        btnNo: void 0,
        btnCancel: void 0,
        initialize: function(t) {
            this.objData = t, this.objPopupData = t, this.template = _.template(this.objPopupData.htmlTemplate), this.componentType = "confirm-popup"
        },
        onRender: function() {
            var t = this;
            this.$el.attr("style", "text-align: center; vertical-align: middle; display: table-cell;"), $("#titleBar", this.$el).html(this.objPopupData.title).css("text-align", "center"), $("#message", this.$el).html(this.objPopupData.message), this.btnYes = $("#btnYes", this.$el), this.btnNo = $("#btnNo", this.$el), this.btnCancel = $("#btnCancel", this.$el), this.btnYes.on("click", t, t.handleButtonClick), this.btnNo.on("click", t, t.handleButtonClick), this.btnCancel.on("click", t, t.handleButtonClick), this.setPopupLayout(), this.setButtonLabel()
        }
    }), e.prototype.setPopupLayout = function() {
        switch (this.objPopupData.button) {
            case e.YES_NO_CANCEL:
                this.btnYes.css("display", "inline-block"), this.btnNo.css("display", "inline-block"), this.btnCancel.css("display", "inline-block"), this.btnYes.html("Yes"), this.btnNo.html("No"), this.btnCancel.html("Cancel");
                break;
            case e.OK_CANCEL:
                this.btnYes.css("display", "inline-block"), this.btnCancel.css("display", "inline-block"), this.btnYes.html("OK"), this.btnCancel.html("Cancel"), this.btnNo.hide();
                break;
            case e.OK:
            default:
                this.btnYes.html("OK"), this.btnYes.css({
                    display: "inline-block",
                    "text-align": "center"
                }), this.btnNo.hide(), this.btnCancel.hide()
        }
    }, e.prototype.setButtonLabel = function() {
        void 0 !== this.objPopupData.yesBtnLabel && this.btnYes.html(this.objPopupData.yesBtnLabel), void 0 !== this.objPopupData.noBtnLabel && this.btnNo.html(this.objPopupData.noBtnLabel), void 0 !== this.objPopupData.cancelBtnLabel && this.btnCancel.html(this.objPopupData.cancelBtnLabel), this.objPopupData.styles && this.objPopupData.styles.btnYesStyle && this.btnYes.css("display", "inline-block").addClass(this.objPopupData.styles.btnYesStyle), this.objPopupData.styles && this.objPopupData.styles.btnNoStyle && this.btnNo.css("display", "inline-block").addClass(this.objPopupData.styles.btnNoStyle), this.objPopupData.styles && this.objPopupData.styles.btnCancelStyle && this.btnCancel.css("display", "inline-block").addClass(this.objPopupData.styles.btnCancelStyle)
    }, e.prototype.handleButtonClick = function(t) {
        var e = {};
        e.button = t.currentTarget.id, t.data.closePopup(e)
    }, e.prototype.ConfirmPopupSuper = t, e.YES_NO_CANCEL = 3, e.OK_CANCEL = 2, e.OK = 1, e.YES_BUTTON = "yesButton", e.NO_BUTTON = "noButton", e.CANCEL_BUTTON = "cancelButton", e.prototype.destroy = function() {
        return this.btnYes.off("click"), this.btnNo.off("click"), this.btnCancel.off("click"), this.btnYes = void 0, this.btnNo = void 0, this.btnCancel = void 0, this.ConfirmPopupSuper.prototype.destroy.call(this, !0)
    }, e
}), define("player/manager/popup-manager", ["marionette"], function() {
    var t, e;
    return t = null, e = Backbone.View.extend({
        popupObjectDict: {},
        rootPopupDiv: void 0,
        blockerDivRef: void 0,
        popupTemplDict: {},
        popupRefDict: {},
        popupAnimationsRef: {},
        LAUNCH_ANIMATION: "launchAnimation",
        CLOSE_ANIMATION: "closeAnimation",
        members: {
            objPopup: null,
            strPopupParent: null,
            popupContent: $("#popupContent"),
            popupHolder: $("#popupHolder"),
            objScreenBlocker: $("#screenBlocker")
        },
        intialize: function() {},
        showPopup: function(t) {
            this.members.objPopup = t, this.members.objPopupParent = $(this.members.objPopup.parent()), this.members.popupContent.append(this.members.objPopup), this.members.popupHolder.show(), this.setScreenInCenter(), this.members.objPopup.show(), this.members.objScreenBlocker.show()
        },
        setScreenInCenter: function() {
            var t, e, i, n;
            t = this.members.objPopup, this.isPopupOpen() !== !1 && (e = $(t.parent()), i = (this.members.popupHolder.width() - t.width()) / 2, n = (this.members.popupHolder.height() - t.height()) / 2, t.css({
                left: i + "px",
                top: n + "px"
            }))
        },
        disabledScreen: function(t) {
            t ? this.members.objScreenBlocker.show() : this.members.objScreenBlocker.hide()
        },
        isPopupOpen: function() {
            return null !== this.members.objPopup
        },
        setBlockerDivRef: function(t) {
            this.blockerDivRef = t
        },
        setPopupTemplateRef: function(t) {
            this.popupTemplDict = t
        },
        setAnimationObjects: function(t) {
            this.popupAnimationsRef = t
        },
        launchPopup: function(t, e) {
            var i, n = this;
            return this.rootPopupDiv = void 0 === this.rootPopupDiv ? $("#popupHolder") : this.rootPopupDiv, i = this.rootPopupDiv, void 0 !== e && (i = e), i.css("display", "table"), this.rootPopupDiv.append(t.$el), t.render(), t.show(), this.popupObjectDict[t.cid] = t, t.on(t.POPUP_CLOSE_EVENT, n.handleConfirmPopupEvent, n), t
        },
        handleConfirmPopupEvent: function(t) {
            var e = this.popupObjectDict[t.target.cid];
            e.off(e.POPUP_CLOSE_EVENT), e.destroy(), e.$el.remove(), delete this.popupObjectDict[t.target.cid], this.rootPopupDiv.css("display", "none"), e = null
        },
        launchPopupComponent: function(t, e) {
            var i, n;
            this.popupObjectDict[t.$el.attr("id")] = t.$el, i = this.popupObjectDict[t.$el.attr("id")], i.show(), t.isModel() && (n = $(this.blockerDivRef), n = $(e), t.objData.blockerStyleBG && n.css("background-color", t.objData.blockerStyleBG), n.parent().append(i), t.blocker = n, n.parent().show()), t.popupLaunched()
        },
        removePopupComponent: function(t) {
            var e = this.popupObjectDict[t.$el.attr("id")];
            e && (e.hide(), delete this.popupObjectDict[t.$el.attr("id")], t.isModel() && t.blocker.parent().hide()), t.popupRemoved()
        },
        launchAsPopup: function(t, e, i, n, o, r, s) {
            var a, l, c = {},
                h = $("body").find("#" + e);
            h.length < 1 && (h = $("body")), a = {}, i === !0 && (a.blocker = $(this.blockerDivRef), h.append(a.blocker)), a.id = t, a.parentId = e, a.popup = $(this.popupTemplDict[t]), a.context = n, a.strCallback = o, a.launchAnimation = r, a.closeAnimation = s, void 0 !== a.popup.attr(this.LAUNCH_ANIMATION) && (l = this.popupAnimationsRef.animations[a.popup.attr(this.LAUNCH_ANIMATION)]), void 0 === l ? a.popup.appendTo(h).show() : (a.popup.hide().appendTo(h).show(), a.popup.animate(l, parseInt(l.duration))), void 0 !== a.strCallback && void 0 !== a.context && (c.state = "popupOpen", c.popupId = t, c.popupRef = a.popup, a.context[a.strCallback].apply(a.context, [c])), a.closeBtn = $.find("#btnClose", a.popup[0]), a.OkBtn = $.find("#btnOk", a.popup[0]), this.popupRefDict[a.id] = a, this.addCloseButtonEvent(a)
        },
        addCloseButtonEvent: function(t) {
            var e = $(t.closeBtn),
                i = this,
                n = $(t.OkBtn);
            void 0 !== e && (e.attr("popupId", t.id), e.bind("click", i, i.handleCloseBtnClick)), void 0 !== n && (n.attr("popupId", t.id), n.bind("click", i, i.handleCloseBtnClick))
        },
        handleCloseBtnClick: function(t) {
            var e, i, n = t.data,
                o = $(t.target).attr("popupId");
            e = n.popupRefDict[o], i = $(n.popupRefDict[o].popup).attr(n.CLOSE_ANIMATION), void 0 !== i && (i = n.popupAnimationsRef.animations[i]), void 0 !== i ? $(n.popupRefDict[o].popup).animate(i, parseInt(i.duration), function() {
                n.removePopup(o)
            }) : n.removePopup(o)
        },
        removePopup: function(t) {
            var e = {},
                i = this.popupRefDict[t];
            i.popup.remove(), void 0 !== i.blocker && i.blocker.remove(), void 0 !== i.strCallback && void 0 !== i.context && (e.state = "popupClose", e.popupId = i.id, e.Id = $(i.closeBtn).attr("id"), i.context[i.strCallback].apply(i.context, [e])), void 0 !== i.strCallback && void 0 !== i.context && (e.state = "popupClose", e.popupId = i.id, e.Id = $(i.OkBtn).attr("id"), i.context[i.strCallback].apply(i.context, [e])), void 0 !== $(i.closeBtn) && $(i.closeBtn).unbind("click"), void 0 !== $(i.OkBtn) && $(i.OkBtn).unbind("click"), delete this.popupRefDict[t]
        }
    }), {
        getInstance: function() {
            return t || (t = new e), t
        }
    }
});
var CryptoJS = CryptoJS || function(t, e) {
    var i = {},
        n = i.lib = {},
        o = n.Base = function() {
            function t() {}
            return {
                extend: function(e) {
                    t.prototype = this;
                    var i = new t;
                    return e && i.mixIn(e), i.$super = this, i
                },
                create: function() {
                    var t = this.extend();
                    return t.init.apply(t, arguments), t
                },
                init: function() {},
                mixIn: function(t) {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                },
                clone: function() {
                    return this.$super.extend(this)
                }
            }
        }(),
        r = n.WordArray = o.extend({
            init: function(t, i) {
                t = this.words = t || [], this.sigBytes = i != e ? i : 4 * t.length
            },
            toString: function(t) {
                return (t || a).stringify(this)
            },
            concat: function(t) {
                var e = this.words,
                    i = t.words,
                    n = this.sigBytes,
                    t = t.sigBytes;
                if (this.clamp(), n % 4)
                    for (var o = 0; t > o; o++) e[n + o >>> 2] |= (i[o >>> 2] >>> 24 - 8 * (o % 4) & 255) << 24 - 8 * ((n + o) % 4);
                else if (65535 < i.length)
                    for (o = 0; t > o; o += 4) e[n + o >>> 2] = i[o >>> 2];
                else e.push.apply(e, i);
                return this.sigBytes += t, this
            },
            clamp: function() {
                var e = this.words,
                    i = this.sigBytes;
                e[i >>> 2] &= 4294967295 << 32 - 8 * (i % 4), e.length = t.ceil(i / 4)
            },
            clone: function() {
                var t = o.clone.call(this);
                return t.words = this.words.slice(0), t
            },
            random: function(e) {
                for (var i = [], n = 0; e > n; n += 4) i.push(4294967296 * t.random() | 0);
                return r.create(i, e)
            }
        }),
        s = i.enc = {},
        a = s.Hex = {
            stringify: function(t) {
                for (var e = t.words, t = t.sigBytes, i = [], n = 0; t > n; n++) {
                    var o = e[n >>> 2] >>> 24 - 8 * (n % 4) & 255;
                    i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16))
                }
                return i.join("")
            },
            parse: function(t) {
                for (var e = t.length, i = [], n = 0; e > n; n += 2) i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - 4 * (n % 8);
                return r.create(i, e / 2)
            }
        },
        l = s.Latin1 = {
            stringify: function(t) {
                for (var e = t.words, t = t.sigBytes, i = [], n = 0; t > n; n++) i.push(String.fromCharCode(e[n >>> 2] >>> 24 - 8 * (n % 4) & 255));
                return i.join("")
            },
            parse: function(t) {
                for (var e = t.length, i = [], n = 0; e > n; n++) i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - 8 * (n % 4);
                return r.create(i, e)
            }
        },
        c = s.Utf8 = {
            stringify: function(t) {
                try {
                    return decodeURIComponent(escape(l.stringify(t)))
                } catch (e) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(t) {
                return l.parse(unescape(encodeURIComponent(t)))
            }
        },
        h = n.BufferedBlockAlgorithm = o.extend({
            reset: function() {
                this._data = r.create(), this._nDataBytes = 0
            },
            _append: function(t) {
                "string" == typeof t && (t = c.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
            },
            _process: function(e) {
                var i = this._data,
                    n = i.words,
                    o = i.sigBytes,
                    s = this.blockSize,
                    a = o / (4 * s),
                    a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0),
                    e = a * s,
                    o = t.min(4 * e, o);
                if (e) {
                    for (var l = 0; e > l; l += s) this._doProcessBlock(n, l);
                    l = n.splice(0, e), i.sigBytes -= o
                }
                return r.create(l, o)
            },
            clone: function() {
                var t = o.clone.call(this);
                return t._data = this._data.clone(), t
            },
            _minBufferSize: 0
        });
    n.Hasher = h.extend({
        init: function() {
            this.reset()
        },
        reset: function() {
            h.reset.call(this), this._doReset()
        },
        update: function(t) {
            return this._append(t), this._process(), this
        },
        finalize: function(t) {
            return t && this._append(t), this._doFinalize(), this._hash
        },
        clone: function() {
            var t = h.clone.call(this);
            return t._hash = this._hash.clone(), t
        },
        blockSize: 16,
        _createHelper: function(t) {
            return function(e, i) {
                return t.create(i).finalize(e)
            }
        },
        _createHmacHelper: function(t) {
            return function(e, i) {
                return p.HMAC.create(t, i).finalize(e)
            }
        }
    });
    var p = i.algo = {};
    return i
}(Math);
! function() {
    var t = CryptoJS,
        e = t.lib,
        i = e.WordArray,
        e = e.Hasher,
        n = [],
        o = t.algo.SHA1 = e.extend({
            _doReset: function() {
                this._hash = i.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(t, e) {
                for (var i = this._hash.words, o = i[0], r = i[1], s = i[2], a = i[3], l = i[4], c = 0; 80 > c; c++) {
                    if (16 > c) n[c] = 0 | t[e + c];
                    else {
                        var h = n[c - 3] ^ n[c - 8] ^ n[c - 14] ^ n[c - 16];
                        n[c] = h << 1 | h >>> 31
                    }
                    h = (o << 5 | o >>> 27) + l + n[c], h = 20 > c ? h + ((r & s | ~r & a) + 1518500249) : 40 > c ? h + ((r ^ s ^ a) + 1859775393) : 60 > c ? h + ((r & s | r & a | s & a) - 1894007588) : h + ((r ^ s ^ a) - 899497514), l = a, a = s, s = r << 30 | r >>> 2, r = o, o = h
                }
                i[0] = i[0] + o | 0, i[1] = i[1] + r | 0, i[2] = i[2] + s | 0, i[3] = i[3] + a | 0, i[4] = i[4] + l | 0
            },
            _doFinalize: function() {
                var t = this._data,
                    e = t.words,
                    i = 8 * this._nDataBytes,
                    n = 8 * t.sigBytes;
                e[n >>> 5] |= 128 << 24 - n % 32, e[(n + 64 >>> 9 << 4) + 15] = i, t.sigBytes = 4 * e.length, this._process()
            }
        });
    t.SHA1 = e._createHelper(o), t.HmacSHA1 = e._createHmacHelper(o)
}(),
function() {
    {
        var t = CryptoJS,
            e = t.lib,
            i = e.WordArray,
            n = t.enc;
        n.Base64 = {
            stringify: function(t) {
                var e = t.words,
                    i = t.sigBytes,
                    n = this._map;
                t.clamp();
                for (var o = [], r = 0; i > r; r += 3)
                    for (var s = e[r >>> 2] >>> 24 - r % 4 * 8 & 255, a = e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255, l = e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, c = s << 16 | a << 8 | l, h = 0; 4 > h && i > r + .75 * h; h++) o.push(n.charAt(c >>> 6 * (3 - h) & 63));
                var p = n.charAt(64);
                if (p)
                    for (; o.length % 4;) o.push(p);
                return o.join("")
            },
            parse: function(t) {
                t = t.replace(/\s/g, "");
                var e = t.length,
                    n = this._map,
                    o = n.charAt(64);
                if (o) {
                    var r = t.indexOf(o); - 1 != r && (e = r)
                }
                for (var s = [], a = 0, l = 0; e > l; l++)
                    if (l % 4) {
                        var c = n.indexOf(t.charAt(l - 1)) << l % 4 * 2,
                            h = n.indexOf(t.charAt(l)) >>> 6 - l % 4 * 2;
                        s[a >>> 2] |= (c | h) << 24 - a % 4 * 8, a++
                    }
                return i.create(s, a)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }
}();
var TinCan;
! function() {
    var t = {
        statementId: !0,
        voidedStatementId: !0,
        verb: !0,
        object: !0,
        registration: !0,
        context: !0,
        actor: !0,
        since: !0,
        until: !0,
        limit: !0,
        authoritative: !0,
        sparse: !0,
        instructor: !0,
        ascending: !0,
        continueToken: !0,
        agent: !0,
        activityId: !0,
        stateId: !0,
        profileId: !0,
        activity_platform: !0,
        grouping: !0,
        "Accept-Language": !0
    };
    TinCan = function(t) {
        this.log("constructor"), this.recordStores = [], this.actor = null, this.activity = null, this.registration = null, this.context = null, this.init(t)
    }, TinCan.prototype = {
        LOG_SRC: "TinCan",
        log: function(t, e) {
            TinCan.DEBUG && "undefined" != typeof console && console.log && (e = e || this.LOG_SRC || "TinCan", console.log("TinCan." + e + ": " + t))
        },
        init: function(t) {
            this.log("init");
            var e;
            if (t = t || {}, t.hasOwnProperty("url") && "" !== t.url && this._initFromQueryString(t.url), t.hasOwnProperty("recordStores") && void 0 !== t.recordStores)
                for (e = 0; e < t.recordStores.length; e += 1) this.addRecordStore(t.recordStores[e]);
            t.hasOwnProperty("activity") && (this.activity = t.activity instanceof TinCan.Activity ? t.activity : new TinCan.Activity(t.activity)), t.hasOwnProperty("actor") && (this.actor = t.actor instanceof TinCan.Agent ? t.actor : new TinCan.Agent(t.actor)), t.hasOwnProperty("context") && (this.context = t.context instanceof TinCan.Context ? t.context : new TinCan.Context(t.context)), t.hasOwnProperty("registration") && (this.registration = t.registration)
        },
        _initFromQueryString: function(e) {
            this.log("_initFromQueryString");
            var i, n, o, r = TinCan.Utils.parseURL(e).params,
                s = ["endpoint", "auth"],
                a = {},
                l = null;
            if (r.hasOwnProperty("actor")) {
                this.log("_initFromQueryString - found actor: " + r.actor);
                try {
                    this.actor = TinCan.Agent.fromJSON(r.actor), delete r.actor
                } catch (c) {
                    this.log("_initFromQueryString - failed to set actor: " + c)
                }
            }
            if (r.hasOwnProperty("activity_id") && (this.activity = new TinCan.Activity({
                    id: r.activity_id
                }), delete r.activity_id), (r.hasOwnProperty("activity_platform") || r.hasOwnProperty("registration") || r.hasOwnProperty("grouping")) && (o = {}, r.hasOwnProperty("activity_platform") && (o.platform = r.activity_platform, delete r.activity_platform), r.hasOwnProperty("registration") && (o.registration = this.registration = r.registration, delete r.registration), r.hasOwnProperty("grouping") && (o.contextActivities = {}, o.contextActivities.grouping = r.grouping, delete r.grouping), this.context = new TinCan.Context(o)), r.hasOwnProperty("endpoint")) {
                for (i = 0; i < s.length; i += 1) n = s[i], r.hasOwnProperty(n) && (a[n] = r[n], delete r[n]);
                for (i in r) r.hasOwnProperty(i) && (t.hasOwnProperty(i) ? delete r[i] : (l = l || {}, l[i] = r[i]));
                null !== l && (a.extended = l), a.allowFail = !1, this.addRecordStore(a)
            }
        },
        addRecordStore: function(t) {
            this.log("addRecordStore");
            var e;
            e = t instanceof TinCan.LRS ? t : new TinCan.LRS(t), this.recordStores.push(e)
        },
        prepareStatement: function(t) {
            return t instanceof TinCan.Statement || (t = new TinCan.Statement(t)), null === t.actor && null !== this.actor && (t.actor = this.actor), null === t.target && null !== this.activity && (t.target = this.activity), null !== this.context && (null === t.context ? t.context = this.context : (null === t.context.registration && (t.context.registration = this.context.registration), null === t.context.platform && (t.context.platform = this.context.platform), null !== this.context.contextActivities && (null === t.context.contextActivities ? t.context.contextActivities = this.context.contextActivities : (null !== this.context.contextActivities.grouping && null === t.context.contextActivities.grouping && (t.context.contextActivities.grouping = this.context.contextActivities.grouping), null !== this.context.contextActivities.parent && null === t.context.contextActivities.parent && (t.context.contextActivities.parent = this.context.contextActivities.parent), null !== this.context.contextActivities.other && null === t.context.contextActivities.other && (t.context.contextActivities.other = this.context.contextActivities.other))))), t
        },
        sendStatement: function(t, e) {
            this.log("sendStatement");
            var i, n, o, r = this,
                s = this.prepareStatement(t),
                a = this.recordStores.length,
                l = [],
                c = [];
            if (a > 0)
                for ("function" == typeof e && (o = function(t, i) {
                        var n;
                        r.log("sendStatement - callbackWrapper: " + a), a > 1 ? (a -= 1, c.push({
                            err: t,
                            xhr: i
                        })) : 1 === a ? (c.push({
                            err: t,
                            xhr: i
                        }), n = [c, s], e.apply(this, n)) : r.log("sendStatement - unexpected record store count: " + a)
                    }), n = 0; a > n; n += 1) i = this.recordStores[n], l.push(i.saveStatement(s, {
                    callback: o
                }));
            else this.log("[warning] sendStatement: No LRSs added yet (statement not sent)"), "function" == typeof e && e.apply(this, [null, s]);
            return {
                statement: s,
                results: l
            }
        },
        getStatement: function(t, e) {
            this.log("getStatement");
            var i;
            return this.recordStores.length > 0 ? (i = this.recordStores[0], i.retrieveStatement(t, {
                callback: e
            })) : (this.log("[warning] getStatement: No LRSs added yet (statement not retrieved)"), void 0)
        },
        voidStatement: function(t, e, i) {
            this.log("voidStatement");
            var n, o, r, s, a, l = this,
                c = this.recordStores.length,
                h = [],
                p = [];
            if (t instanceof TinCan.Statement && (t = t.id), "undefined" != typeof i.actor ? o = i.actor : null !== this.actor && (o = this.actor), r = new TinCan.Statement({
                    actor: o,
                    verb: {
                        id: "http://adlnet.gov/expapi/verbs/voided"
                    },
                    target: {
                        objectType: "StatementRef",
                        id: t
                    }
                }), c > 0)
                for ("function" == typeof e && (a = function(t, i) {
                        var n;
                        l.log("voidStatement - callbackWrapper: " + c), c > 1 ? (c -= 1, p.push({
                            err: t,
                            xhr: i
                        })) : 1 === c ? (p.push({
                            err: t,
                            xhr: i
                        }), n = [p, r], e.apply(this, n)) : l.log("voidStatement - unexpected record store count: " + c)
                    }), s = 0; c > s; s += 1) n = this.recordStores[s], h.push(n.saveStatement(r, {
                    callback: a
                }));
            else this.log("[warning] voidStatement: No LRSs added yet (statement not sent)"), "function" == typeof e && e.apply(this, [null, r]);
            return {
                statement: r,
                results: h
            }
        },
        getVoidedStatement: function(t, e) {
            this.log("getVoidedStatement");
            var i;
            return this.recordStores.length > 0 ? (i = this.recordStores[0], i.retrieveVoidedStatement(t, {
                callback: e
            })) : (this.log("[warning] getVoidedStatement: No LRSs added yet (statement not retrieved)"), void 0)
        },
        sendStatements: function(t, e) {
            this.log("sendStatements");
            var i, n, o, r = this,
                s = [],
                a = this.recordStores.length,
                l = [],
                c = [];
            if (0 === t.length) "function" == typeof e && e.apply(this, [null, s]);
            else {
                for (n = 0; n < t.length; n += 1) s.push(this.prepareStatement(t[n]));
                if (a > 0)
                    for ("function" == typeof e && (o = function(t, i) {
                            var n;
                            r.log("sendStatements - callbackWrapper: " + a), a > 1 ? (a -= 1, c.push({
                                err: t,
                                xhr: i
                            })) : 1 === a ? (c.push({
                                err: t,
                                xhr: i
                            }), n = [c, s], e.apply(this, n)) : r.log("sendStatements - unexpected record store count: " + a)
                        }), n = 0; a > n; n += 1) i = this.recordStores[n], l.push(i.saveStatements(s, {
                        callback: o
                    }));
                else this.log("[warning] sendStatements: No LRSs added yet (statements not sent)"), "function" == typeof e && e.apply(this, [null, s])
            }
            return {
                statements: s,
                results: l
            }
        },
        getStatements: function(t) {
            this.log("getStatements");
            var e, i, n = {};
            return this.recordStores.length > 0 ? (e = this.recordStores[0], t = t || {}, i = t.params || {}, t.sendActor && null !== this.actor && ("0.9" === e.version || "0.95" === e.version ? i.actor = this.actor : i.agent = this.actor), t.sendActivity && null !== this.activity && ("0.9" === e.version || "0.95" === e.version ? i.target = this.activity : i.activity = this.activity), "undefined" == typeof i.registration && null !== this.registration && (i.registration = this.registration), n = {
                params: i
            }, "undefined" != typeof t.callback && (n.callback = t.callback), e.queryStatements(n)) : (this.log("[warning] getStatements: No LRSs added yet (statements not read)"), void 0)
        },
        getState: function(t, e) {
            this.log("getState");
            var i, n;
            return this.recordStores.length > 0 ? (n = this.recordStores[0], e = e || {}, i = {
                agent: "undefined" != typeof e.agent ? e.agent : this.actor,
                activity: "undefined" != typeof e.activity ? e.activity : this.activity
            }, "undefined" != typeof e.registration ? i.registration = e.registration : null !== this.registration && (i.registration = this.registration), "undefined" != typeof e.callback && (i.callback = e.callback), n.retrieveState(t, i)) : (this.log("[warning] getState: No LRSs added yet (state not retrieved)"), void 0)
        },
        setState: function(t, e, i) {
            this.log("setState");
            var n, o;
            return this.recordStores.length > 0 ? (o = this.recordStores[0], i = i || {}, n = {
                agent: "undefined" != typeof i.agent ? i.agent : this.actor,
                activity: "undefined" != typeof i.activity ? i.activity : this.activity
            }, "undefined" != typeof i.registration ? n.registration = i.registration : null !== this.registration && (n.registration = this.registration), "undefined" != typeof i.lastSHA1 && (n.lastSHA1 = i.lastSHA1), "undefined" != typeof i.contentType && (n.contentType = i.contentType), "undefined" != typeof i.callback, o.saveState(t, e, n)) : (this.log("[warning] setState: No LRSs added yet (state not saved)"), void 0)
        },
        deleteState: function(t, e) {
            this.log("deleteState");
            var i, n;
            return this.recordStores.length > 0 ? (n = this.recordStores[0], e = e || {}, i = {
                agent: "undefined" != typeof e.agent ? e.agent : this.actor,
                activity: "undefined" != typeof e.activity ? e.activity : this.activity
            }, "undefined" != typeof e.registration ? i.registration = e.registration : null !== this.registration && (i.registration = this.registration), "undefined" != typeof e.callback && (i.callback = e.callback), n.dropState(t, i)) : (this.log("[warning] deleteState: No LRSs added yet (state not deleted)"), void 0)
        },
        getActivityProfile: function(t, e) {
            this.log("getActivityProfile");
            var i, n;
            return this.recordStores.length > 0 ? (n = this.recordStores[0], e = e || {}, i = {
                activity: "undefined" != typeof e.activity ? e.activity : this.activity
            }, "undefined" != typeof e.callback && (i.callback = e.callback), n.retrieveActivityProfile(t, i)) : (this.log("[warning] getActivityProfile: No LRSs added yet (activity profile not retrieved)"), void 0)
        },
        setActivityProfile: function(t, e, i) {
            this.log("setActivityProfile");
            var n, o;
            return this.recordStores.length > 0 ? (o = this.recordStores[0], i = i || {}, n = {
                activity: "undefined" != typeof i.activity ? i.activity : this.activity
            }, "undefined" != typeof i.callback && (n.callback = i.callback), "undefined" != typeof i.lastSHA1 && (n.lastSHA1 = i.lastSHA1), "undefined" != typeof i.contentType && (n.contentType = i.contentType), o.saveActivityProfile(t, e, n)) : (this.log("[warning] setActivityProfile: No LRSs added yet (activity profile not saved)"), void 0)
        },
        deleteActivityProfile: function(t, e) {
            this.log("deleteActivityProfile");
            var i, n;
            return this.recordStores.length > 0 ? (n = this.recordStores[0], e = e || {}, i = {
                activity: "undefined" != typeof e.activity ? e.activity : this.activity
            }, "undefined" != typeof e.callback && (i.callback = e.callback), n.dropActivityProfile(t, i)) : (this.log("[warning] deleteActivityProfile: No LRSs added yet (activity profile not deleted)"), void 0)
        },
        getAgentProfile: function(t, e) {
            this.log("getAgentProfile");
            var i, n;
            return this.recordStores.length > 0 ? (n = this.recordStores[0], e = e || {}, i = {
                agent: "undefined" != typeof e.agent ? e.agent : this.actor
            }, "undefined" != typeof e.callback && (i.callback = e.callback), n.retrieveAgentProfile(t, i)) : (this.log("[warning] getAgentProfile: No LRSs added yet (agent profile not retrieved)"), void 0)
        },
        setAgentProfile: function(t, e, i) {
            this.log("setAgentProfile");
            var n, o;
            return this.recordStores.length > 0 ? (o = this.recordStores[0], i = i || {}, n = {
                agent: "undefined" != typeof i.agent ? i.agent : this.actor
            }, "undefined" != typeof i.callback && (n.callback = i.callback), "undefined" != typeof i.lastSHA1 && (n.lastSHA1 = i.lastSHA1), "undefined" != typeof i.contentType && (n.contentType = i.contentType), o.saveAgentProfile(t, e, n)) : (this.log("[warning] setAgentProfile: No LRSs added yet (agent profile not saved)"), void 0)
        },
        deleteAgentProfile: function(t, e) {
            this.log("deleteAgentProfile");
            var i, n;
            return this.recordStores.length > 0 ? (n = this.recordStores[0], e = e || {}, i = {
                agent: "undefined" != typeof e.agent ? e.agent : this.actor
            }, "undefined" != typeof e.callback && (i.callback = e.callback), n.dropAgentProfile(t, i)) : (this.log("[warning] deleteAgentProfile: No LRSs added yet (agent profile not deleted)"), void 0)
        }
    }, TinCan.DEBUG = !1, TinCan.enableDebug = function() {
        TinCan.DEBUG = !0
    }, TinCan.disableDebug = function() {
        TinCan.DEBUG = !1
    }, TinCan.versions = function() {
        return ["1.0.1", "1.0.0", "0.95", "0.9"]
    }, "object" == typeof module && (module.exports = TinCan)
}(),
function() {
    TinCan.Utils = {
        getUUID: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var e = 16 * Math.random() | 0,
                    i = "x" == t ? e : 3 & e | 8;
                return i.toString(16)
            })
        },
        getISODateString: function(t) {
            function e(t, e) {
                var i, n;
                for (("undefined" == typeof t || null === t) && (t = 0), ("undefined" == typeof e || null === e) && (e = 2), i = Math.pow(10, e - 1), n = t.toString(); i > t && i > 1;) n = "0" + n, i /= 10;
                return n
            }
            return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1) + "-" + e(t.getUTCDate()) + "T" + e(t.getUTCHours()) + ":" + e(t.getUTCMinutes()) + ":" + e(t.getUTCSeconds()) + "." + e(t.getUTCMilliseconds(), 3) + "Z"
        },
        getSHA1String: function(t) {
            return CryptoJS.SHA1(t).toString(CryptoJS.enc.Hex)
        },
        getBase64String: function(t) {
            return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Latin1.parse(t))
        },
        getLangDictionaryValue: function(t, e) {
            var i, n = this[t];
            if ("undefined" != typeof e && "undefined" != typeof n[e]) return n[e];
            if ("undefined" != typeof n.und) return n.und;
            if ("undefined" != typeof n["en-US"]) return n["en-US"];
            for (i in n)
                if (n.hasOwnProperty(i)) return n[i];
            return ""
        },
        parseURL: function(t) {
            var e, i, n, o = String(t).split("?"),
                r = {};
            if (2 === o.length)
                for (e = o[1].split("&"), n = 0; n < e.length; n += 1) i = e[n].split("="), 2 === i.length && i[0] && (r[i[0]] = decodeURIComponent(i[1]));
            return {
                path: o[0],
                params: r
            }
        },
        getServerRoot: function(t) {
            var e = t.split("/");
            return e[0] + "//" + e[2]
        },
        getContentTypeFromHeader: function(t) {
            return String(t).split(";")[0]
        },
        isApplicationJSON: function(t) {
            return 0 === TinCan.Utils.getContentTypeFromHeader(t).toLowerCase().indexOf("application/json")
        }
    }
}(),
function() {
    var t = TinCan.LRS = function(t) {
        this.log("constructor"), this.endpoint = null, this.version = null, this.auth = null, this.allowFail = !0, this.extended = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "LRS",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = TinCan.versions(),
                n = !1;
            if (t = t || {}, t.hasOwnProperty("alertOnRequestFailure") && this.log("'alertOnRequestFailure' is deprecated (alerts have been removed) no need to set it now"), !t.hasOwnProperty("endpoint") || null === t.endpoint || "" === t.endpoint) throw this.log("[error] LRS invalid: no endpoint"), {
                code: 3,
                mesg: "LRS invalid: no endpoint"
            };
            if (this.endpoint = String(t.endpoint), "/" !== this.endpoint.slice(-1) && (this.log("adding trailing slash to endpoint"), this.endpoint += "/"), t.hasOwnProperty("allowFail") && (this.allowFail = t.allowFail), t.hasOwnProperty("auth") ? this.auth = t.auth : t.hasOwnProperty("username") && t.hasOwnProperty("password") && (this.auth = "Basic " + TinCan.Utils.getBase64String(t.username + ":" + t.password)), t.hasOwnProperty("extended") && (this.extended = t.extended), this._initByEnvironment(t), "undefined" != typeof t.version) {
                for (this.log("version: " + t.version), e = 0; e < i.length; e += 1)
                    if (i[e] === t.version) {
                        n = !0;
                        break
                    }
                if (!n) throw this.log("[error] LRS invalid: version not supported (" + t.version + ")"), {
                    code: 5,
                    mesg: "LRS invalid: version not supported (" + t.version + ")"
                };
                this.version = t.version
            } else this.version = i[0]
        },
        _initByEnvironment: function() {
            this.log("_initByEnvironment not overloaded - no environment loaded?")
        },
        _makeRequest: function() {
            this.log("_makeRequest not overloaded - no environment loaded?")
        },
        _IEModeConversion: function() {
            this.log("_IEModeConversion not overloaded - browser environment not loaded.")
        },
        sendRequest: function(t) {
            this.log("sendRequest");
            var e, i = this.endpoint + t.url,
                n = {};
            if (0 === t.url.indexOf("http") && (i = t.url), null !== this.extended) {
                t.params = t.params || {};
                for (e in this.extended) this.extended.hasOwnProperty(e) && (t.params.hasOwnProperty(e) || null !== this.extended[e] && (t.params[e] = this.extended[e]))
            }
            n.Authorization = this.auth, "0.9" !== this.version && (n["X-Experience-API-Version"] = this.version);
            for (e in t.headers) t.headers.hasOwnProperty(e) && (n[e] = t.headers[e]);
            return this._makeRequest(i, n, t)
        },
        about: function(t) {
            this.log("about");
            var e, i, n;
            return t = t || {}, e = {
                url: "about",
                method: "GET",
                params: {}
            }, "undefined" != typeof t.callback && (n = function(e, i) {
                var n = i;
                null === e && (n = TinCan.About.fromJSON(i.responseText)), t.callback(e, n)
            }, e.callback = n), i = this.sendRequest(e), n ? void 0 : (null === i.err && (i.xhr = TinCan.About.fromJSON(i.xhr.responseText)), i)
        },
        saveStatement: function(t, e) {
            this.log("saveStatement");
            var i, n;
            e = e || {};
            try {
                n = t.asVersion(this.version)
            } catch (o) {
                return this.allowFail ? (this.log("[warning] statement could not be serialized in version (" + this.version + "): " + o), "undefined" != typeof e.callback ? (e.callback(null, null), void 0) : {
                    err: null,
                    xhr: null
                }) : (this.log("[error] statement could not be serialized in version (" + this.version + "): " + o), "undefined" != typeof e.callback ? (e.callback(o, null), void 0) : {
                    err: o,
                    xhr: null
                })
            }
            return i = {
                url: "statements",
                data: JSON.stringify(n),
                headers: {
                    "Content-Type": "application/json"
                }
            }, null !== t.id ? (i.method = "PUT", i.params = {
                statementId: t.id
            }) : i.method = "POST", "undefined" != typeof e.callback && (i.callback = e.callback), this.sendRequest(i)
        },
        retrieveStatement: function(t, e) {
            this.log("retrieveStatement");
            var i, n, o;
            return e = e || {}, i = {
                url: "statements",
                method: "GET",
                params: {
                    statementId: t
                }
            }, "undefined" != typeof e.callback && (o = function(t, i) {
                var n = i;
                null === t && (n = TinCan.Statement.fromJSON(i.responseText)), e.callback(t, n)
            }, i.callback = o), n = this.sendRequest(i), o || (n.statement = null, null === n.err && (n.statement = TinCan.Statement.fromJSON(n.xhr.responseText))), n
        },
        retrieveVoidedStatement: function(t, e) {
            this.log("retrieveVoidedStatement");
            var i, n, o;
            return e = e || {}, i = {
                url: "statements",
                method: "GET",
                params: {}
            }, "0.9" === this.version || "0.95" === this.version ? i.params.statementId = t : i.params.voidedStatementId = t, "undefined" != typeof e.callback && (o = function(t, i) {
                var n = i;
                null === t && (n = TinCan.Statement.fromJSON(i.responseText)), e.callback(t, n)
            }, i.callback = o), n = this.sendRequest(i), o || (n.statement = null, null === n.err && (n.statement = TinCan.Statement.fromJSON(n.xhr.responseText))), n
        },
        saveStatements: function(t, e) {
            this.log("saveStatements");
            var i, n, o, r = [];
            if (e = e || {}, 0 === t.length) return "undefined" != typeof e.callback ? (e.callback(new Error("no statements"), null), void 0) : {
                err: new Error("no statements"),
                xhr: null
            };
            for (o = 0; o < t.length; o += 1) {
                try {
                    n = t[o].asVersion(this.version)
                } catch (s) {
                    return this.allowFail ? (this.log("[warning] statement could not be serialized in version (" + this.version + "): " + s), "undefined" != typeof e.callback ? (e.callback(null, null), void 0) : {
                        err: null,
                        xhr: null
                    }) : (this.log("[error] statement could not be serialized in version (" + this.version + "): " + s), "undefined" != typeof e.callback ? (e.callback(s, null), void 0) : {
                        err: s,
                        xhr: null
                    })
                }
                r.push(n)
            }
            return i = {
                url: "statements",
                method: "POST",
                data: JSON.stringify(r),
                headers: {
                    "Content-Type": "application/json"
                }
            }, "undefined" != typeof e.callback && (i.callback = e.callback), this.sendRequest(i)
        },
        queryStatements: function(t) {
            this.log("queryStatements");
            var e, i, n;
            t = t || {}, t.params = t.params || {};
            try {
                e = this._queryStatementsRequestCfg(t)
            } catch (o) {
                return this.log("[error] Query statements failed - " + o), "undefined" != typeof t.callback && t.callback(o, {}), {
                    err: o,
                    statementsResult: null
                }
            }
            return "undefined" != typeof t.callback && (n = function(e, i) {
                var n = i;
                null === e && (n = TinCan.StatementsResult.fromJSON(i.responseText)), t.callback(e, n)
            }, e.callback = n), i = this.sendRequest(e), i.config = e, n || (i.statementsResult = null, null === i.err && (i.statementsResult = TinCan.StatementsResult.fromJSON(i.xhr.responseText))), i
        },
        _queryStatementsRequestCfg: function(t) {
            this.log("_queryStatementsRequestCfg");
            var e, i, n = {},
                o = {
                    url: "statements",
                    method: "GET",
                    params: n
                },
                r = ["agent", "actor", "object", "instructor"],
                s = ["verb", "activity"],
                a = ["registration", "context", "since", "until", "limit", "authoritative", "sparse", "ascending", "related_activities", "related_agents", "format", "attachments"],
                l = {
                    verb: !0,
                    registration: !0,
                    since: !0,
                    until: !0,
                    limit: !0,
                    ascending: !0
                },
                c = {
                    .9: {
                        supported: {
                            actor: !0,
                            instructor: !0,
                            target: !0,
                            object: !0,
                            context: !0,
                            authoritative: !0,
                            sparse: !0
                        }
                    },
                    "1.0.0": {
                        supported: {
                            agent: !0,
                            activity: !0,
                            related_activities: !0,
                            related_agents: !0,
                            format: !0,
                            attachments: !0
                        }
                    }
                };
            c["0.95"] = c["0.9"], c["1.0.1"] = c["1.0.0"], t.params.hasOwnProperty("target") && (t.params.object = t.params.target);
            for (i in t.params)
                if (t.params.hasOwnProperty(i) && "undefined" == typeof l[i] && "undefined" == typeof c[this.version].supported[i]) throw "Unrecognized query parameter configured: " + i;
            for (e = 0; e < r.length; e += 1) "undefined" != typeof t.params[r[e]] && (n[r[e]] = JSON.stringify(t.params[r[e]].asVersion(this.version)));
            for (e = 0; e < s.length; e += 1) "undefined" != typeof t.params[s[e]] && (n[s[e]] = t.params[s[e]].id);
            for (e = 0; e < a.length; e += 1) "undefined" != typeof t.params[a[e]] && (n[a[e]] = t.params[a[e]]);
            return o
        },
        moreStatements: function(t) {
            this.log("moreStatements: " + t.url);
            var e, i, n, o, r;
            return t = t || {}, o = TinCan.Utils.parseURL(t.url), r = TinCan.Utils.getServerRoot(this.endpoint), 0 === o.path.indexOf("/statements") && (o.path = this.endpoint.replace(r, "") + o.path, this.log("converting non-standard more URL to " + o.path)), 0 !== o.path.indexOf("/") && (o.path = "/" + o.path), e = {
                method: "GET",
                url: r + o.path,
                params: o.params
            }, "undefined" != typeof t.callback && (n = function(e, i) {
                var n = i;
                null === e && (n = TinCan.StatementsResult.fromJSON(i.responseText)), t.callback(e, n)
            }, e.callback = n), i = this.sendRequest(e), i.config = e, n || (i.statementsResult = null, null === i.err && (i.statementsResult = TinCan.StatementsResult.fromJSON(i.xhr.responseText))), i
        },
        retrieveState: function(t, e) {
            this.log("retrieveState");
            var i, n, o = {},
                r = {};
            if (o = {
                    stateId: t,
                    activityId: e.activity.id
                }, "0.9" === this.version ? o.actor = JSON.stringify(e.agent.asVersion(this.version)) : o.agent = JSON.stringify(e.agent.asVersion(this.version)), "undefined" != typeof e.registration && ("0.9" === this.version ? o.registrationId = e.registration : o.registration = e.registration), r = {
                    url: "activities/state",
                    method: "GET",
                    params: o,
                    ignore404: !0
                }, "undefined" != typeof e.callback && (n = function(i, n) {
                    var o = n;
                    if (null === i)
                        if (404 === n.status) o = null;
                        else if (o = new TinCan.State({
                            id: t,
                            contents: n.responseText
                        }), o.etag = "undefined" != typeof n.getResponseHeader && null !== n.getResponseHeader("ETag") && "" !== n.getResponseHeader("ETag") ? n.getResponseHeader("ETag") : TinCan.Utils.getSHA1String(n.responseText), "undefined" != typeof n.contentType ? o.contentType = n.contentType : "undefined" != typeof n.getResponseHeader && null !== n.getResponseHeader("Content-Type") && "" !== n.getResponseHeader("Content-Type") && (o.contentType = n.getResponseHeader("Content-Type")), TinCan.Utils.isApplicationJSON(o.contentType)) try {
                        o.contents = JSON.parse(o.contents)
                    } catch (r) {
                        this.log("retrieveState - failed to deserialize JSON: " + r)
                    }
                    e.callback(i, o)
                }, r.callback = n), i = this.sendRequest(r), !n && (i.state = null, null === i.err && 404 !== i.xhr.status && (i.state = new TinCan.State({
                    id: t,
                    contents: i.xhr.responseText
                }), i.state.etag = "undefined" != typeof i.xhr.getResponseHeader && null !== i.xhr.getResponseHeader("ETag") && "" !== i.xhr.getResponseHeader("ETag") ? i.xhr.getResponseHeader("ETag") : TinCan.Utils.getSHA1String(i.xhr.responseText), "undefined" != typeof i.xhr.contentType ? i.state.contentType = i.xhr.contentType : "undefined" != typeof i.xhr.getResponseHeader && null !== i.xhr.getResponseHeader("Content-Type") && "" !== i.xhr.getResponseHeader("Content-Type") && (i.state.contentType = i.xhr.getResponseHeader("Content-Type")), TinCan.Utils.isApplicationJSON(i.state.contentType)))) try {
                i.state.contents = JSON.parse(i.state.contents)
            } catch (s) {
                this.log("retrieveState - failed to deserialize JSON: " + s)
            }
            return i
        },
        saveState: function(t, e, i) {
            this.log("saveState");
            var n, o;
            return "undefined" == typeof i.contentType && (i.contentType = "application/octet-stream"), "object" == typeof e && TinCan.Utils.isApplicationJSON(i.contentType) && (e = JSON.stringify(e)), n = {
                stateId: t,
                activityId: i.activity.id
            }, "0.9" === this.version ? n.actor = JSON.stringify(i.agent.asVersion(this.version)) : n.agent = JSON.stringify(i.agent.asVersion(this.version)), "undefined" != typeof i.registration && ("0.9" === this.version ? n.registrationId = i.registration : n.registration = i.registration), o = {
                url: "activities/state",
                method: "PUT",
                params: n,
                data: e,
                headers: {
                    "Content-Type": i.contentType
                }
            }, "undefined" != typeof i.callback && (o.callback = i.callback), "undefined" != typeof i.lastSHA1 && null !== i.lastSHA1 && (o.headers["If-Match"] = i.lastSHA1), this.sendRequest(o)
        },
        dropState: function(t, e) {
            this.log("dropState");
            var i, n;
            return i = {
                activityId: e.activity.id
            }, "0.9" === this.version ? i.actor = JSON.stringify(e.agent.asVersion(this.version)) : i.agent = JSON.stringify(e.agent.asVersion(this.version)), null !== t && (i.stateId = t), "undefined" != typeof e.registration && ("0.9" === this.version ? i.registrationId = e.registration : i.registration = e.registration), n = {
                url: "activities/state",
                method: "DELETE",
                params: i
            }, "undefined" != typeof e.callback && (n.callback = e.callback), this.sendRequest(n)
        },
        retrieveActivityProfile: function(t, e) {
            this.log("retrieveActivityProfile");
            var i, n, o = {};
            if (o = {
                    url: "activities/profile",
                    method: "GET",
                    params: {
                        profileId: t,
                        activityId: e.activity.id
                    },
                    ignore404: !0
                }, "undefined" != typeof e.callback && (n = function(i, n) {
                    var o = n;
                    if (null === i)
                        if (404 === n.status) o = null;
                        else if (o = new TinCan.ActivityProfile({
                            id: t,
                            activity: e.activity,
                            contents: n.responseText
                        }), o.etag = "undefined" != typeof n.getResponseHeader && null !== n.getResponseHeader("ETag") && "" !== n.getResponseHeader("ETag") ? n.getResponseHeader("ETag") : TinCan.Utils.getSHA1String(n.responseText), "undefined" != typeof n.contentType ? o.contentType = n.contentType : "undefined" != typeof n.getResponseHeader && null !== n.getResponseHeader("Content-Type") && "" !== n.getResponseHeader("Content-Type") && (o.contentType = n.getResponseHeader("Content-Type")), TinCan.Utils.isApplicationJSON(o.contentType)) try {
                        o.contents = JSON.parse(o.contents)
                    } catch (r) {
                        this.log("retrieveActivityProfile - failed to deserialize JSON: " + r)
                    }
                    e.callback(i, o)
                }, o.callback = n), i = this.sendRequest(o), !n && (i.profile = null, null === i.err && 404 !== i.xhr.status && (i.profile = new TinCan.ActivityProfile({
                    id: t,
                    activity: e.activity,
                    contents: i.xhr.responseText
                }), i.profile.etag = "undefined" != typeof i.xhr.getResponseHeader && null !== i.xhr.getResponseHeader("ETag") && "" !== i.xhr.getResponseHeader("ETag") ? i.xhr.getResponseHeader("ETag") : TinCan.Utils.getSHA1String(i.xhr.responseText), "undefined" != typeof i.xhr.contentType ? i.profile.contentType = i.xhr.contentType : "undefined" != typeof i.xhr.getResponseHeader && null !== i.xhr.getResponseHeader("Content-Type") && "" !== i.xhr.getResponseHeader("Content-Type") && (i.profile.contentType = i.xhr.getResponseHeader("Content-Type")), TinCan.Utils.isApplicationJSON(i.profile.contentType)))) try {
                i.profile.contents = JSON.parse(i.profile.contents)
            } catch (r) {
                this.log("retrieveActivityProfile - failed to deserialize JSON: " + r)
            }
            return i
        },
        saveActivityProfile: function(t, e, i) {
            this.log("saveActivityProfile");
            var n;
            return "undefined" == typeof i.contentType && (i.contentType = "application/octet-stream"), "object" == typeof e && TinCan.Utils.isApplicationJSON(i.contentType) && (e = JSON.stringify(e)), n = {
                url: "activities/profile",
                method: "PUT",
                params: {
                    profileId: t,
                    activityId: i.activity.id
                },
                data: e,
                headers: {
                    "Content-Type": i.contentType
                }
            }, "undefined" != typeof i.callback && (n.callback = i.callback), "undefined" != typeof i.lastSHA1 && null !== i.lastSHA1 ? n.headers["If-Match"] = i.lastSHA1 : n.headers["If-None-Match"] = "*", this.sendRequest(n)
        },
        dropActivityProfile: function(t, e) {
            this.log("dropActivityProfile");
            var i, n;
            return i = {
                profileId: t,
                activityId: e.activity.id
            }, n = {
                url: "activities/profile",
                method: "DELETE",
                params: i
            }, "undefined" != typeof e.callback && (n.callback = e.callback), this.sendRequest(n)
        },
        retrieveAgentProfile: function(t, e) {
            this.log("retrieveAgentProfile");
            var i, n, o = {};
            if (o = {
                    method: "GET",
                    params: {
                        profileId: t
                    },
                    ignore404: !0
                }, "0.9" === this.version ? (o.url = "actors/profile", o.params.actor = JSON.stringify(e.agent.asVersion(this.version))) : (o.url = "agents/profile", o.params.agent = JSON.stringify(e.agent.asVersion(this.version))), "undefined" != typeof e.callback && (n = function(i, n) {
                    var o = n;
                    if (null === i)
                        if (404 === n.status) o = null;
                        else if (o = new TinCan.AgentProfile({
                            id: t,
                            agent: e.agent,
                            contents: n.responseText
                        }), o.etag = "undefined" != typeof n.getResponseHeader && null !== n.getResponseHeader("ETag") && "" !== n.getResponseHeader("ETag") ? n.getResponseHeader("ETag") : TinCan.Utils.getSHA1String(n.responseText), "undefined" != typeof n.contentType ? o.contentType = n.contentType : "undefined" != typeof n.getResponseHeader && null !== n.getResponseHeader("Content-Type") && "" !== n.getResponseHeader("Content-Type") && (o.contentType = n.getResponseHeader("Content-Type")), TinCan.Utils.isApplicationJSON(o.contentType)) try {
                        o.contents = JSON.parse(o.contents)
                    } catch (r) {
                        this.log("retrieveAgentProfile - failed to deserialize JSON: " + r)
                    }
                    e.callback(i, o)
                }, o.callback = n), i = this.sendRequest(o), !n && (i.profile = null, null === i.err && 404 !== i.xhr.status && (i.profile = new TinCan.AgentProfile({
                    id: t,
                    agent: e.agent,
                    contents: i.xhr.responseText
                }), i.profile.etag = "undefined" != typeof i.xhr.getResponseHeader && null !== i.xhr.getResponseHeader("ETag") && "" !== i.xhr.getResponseHeader("ETag") ? i.xhr.getResponseHeader("ETag") : TinCan.Utils.getSHA1String(i.xhr.responseText), "undefined" != typeof i.xhr.contentType ? i.profile.contentType = i.xhr.contentType : "undefined" != typeof i.xhr.getResponseHeader && null !== i.xhr.getResponseHeader("Content-Type") && "" !== i.xhr.getResponseHeader("Content-Type") && (i.profile.contentType = i.xhr.getResponseHeader("Content-Type")), TinCan.Utils.isApplicationJSON(i.profile.contentType)))) try {
                i.profile.contents = JSON.parse(i.profile.contents)
            } catch (r) {
                this.log("retrieveAgentProfile - failed to deserialize JSON: " + r)
            }
            return i
        },
        saveAgentProfile: function(t, e, i) {
            this.log("saveAgentProfile");
            var n;
            return "undefined" == typeof i.contentType && (i.contentType = "application/octet-stream"), "object" == typeof e && TinCan.Utils.isApplicationJSON(i.contentType) && (e = JSON.stringify(e)), n = {
                method: "PUT",
                params: {
                    profileId: t
                },
                data: e,
                headers: {
                    "Content-Type": i.contentType
                }
            }, "0.9" === this.version ? (n.url = "actors/profile", n.params.actor = JSON.stringify(i.agent.asVersion(this.version))) : (n.url = "agents/profile", n.params.agent = JSON.stringify(i.agent.asVersion(this.version))), "undefined" != typeof i.callback && (n.callback = i.callback), "undefined" != typeof i.lastSHA1 && null !== i.lastSHA1 ? n.headers["If-Match"] = i.lastSHA1 : n.headers["If-None-Match"] = "*", this.sendRequest(n)
        },
        dropAgentProfile: function(t, e) {
            this.log("dropAgentProfile");
            var i, n;
            return i = {
                profileId: t
            }, n = {
                method: "DELETE",
                params: i
            }, "0.9" === this.version ? (n.url = "actors/profile", i.actor = JSON.stringify(e.agent.asVersion(this.version))) : (n.url = "agents/profile", i.agent = JSON.stringify(e.agent.asVersion(this.version))), "undefined" != typeof e.callback && (n.callback = e.callback), this.sendRequest(n)
        }
    }, t.syncEnabled = null
}(),
function() {
    var t = TinCan.AgentAccount = function(t) {
        this.log("constructor"), this.homePage = null, this.name = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "AgentAccount",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["name", "homePage"];
            for (t = t || {}, "undefined" != typeof t.accountServiceHomePage && (t.homePage = t.accountServiceHomePage), "undefined" != typeof t.accountName && (t.name = t.accountName), e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]])
        },
        toString: function() {
            this.log("toString");
            var t = "";
            return null !== this.name || null !== this.homePage ? (t += null !== this.name ? this.name : "-", t += ":", t += null !== this.homePage ? this.homePage : "-") : t = "AgentAccount: unidentified", t
        },
        asVersion: function(t) {
            this.log("asVersion: " + t);
            var e = {};
            return t = t || TinCan.versions()[0], "0.9" === t ? (e.accountName = this.name, e.accountServiceHomePage = this.homePage) : (e.name = this.name, e.homePage = this.homePage), e
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.Agent = function(t) {
        this.log("constructor"), this.name = null, this.mbox = null, this.mbox_sha1sum = null, this.openid = null, this.account = null, this.degraded = !1, this.init(t)
    };
    t.prototype = {
        objectType: "Agent",
        LOG_SRC: "Agent",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i, n = ["name", "mbox", "mbox_sha1sum", "openid"];
            for (t = t || {}, "undefined" != typeof t.lastName || "undefined" != typeof t.firstName ? (t.name = "", "undefined" != typeof t.firstName && t.firstName.length > 0 && (t.name = t.firstName[0], t.firstName.length > 1 && (this.degraded = !0)), "" !== t.name && (t.name += " "), "undefined" != typeof t.lastName && t.lastName.length > 0 && (t.name += t.lastName[0], t.lastName.length > 1 && (this.degraded = !0))) : ("undefined" != typeof t.familyName || "undefined" != typeof t.givenName) && (t.name = "", "undefined" != typeof t.givenName && t.givenName.length > 0 && (t.name = t.givenName[0], t.givenName.length > 1 && (this.degraded = !0)), "" !== t.name && (t.name += " "), "undefined" != typeof t.familyName && t.familyName.length > 0 && (t.name += t.familyName[0], t.familyName.length > 1 && (this.degraded = !0))), "object" == typeof t.name && null !== t.name && (t.name.length > 1 && (this.degraded = !0), t.name = t.name[0]), "object" == typeof t.mbox && null !== t.mbox && (t.mbox.length > 1 && (this.degraded = !0), t.mbox = t.mbox[0]), "object" == typeof t.mbox_sha1sum && null !== t.mbox_sha1sum && (t.mbox_sha1sum.length > 1 && (this.degraded = !0), t.mbox_sha1sum = t.mbox_sha1sum[0]), "object" == typeof t.openid && null !== t.openid && (t.openid.length > 1 && (this.degraded = !0), t.openid = t.openid[0]), "object" == typeof t.account && null !== t.account && "undefined" == typeof t.account.homePage && "undefined" == typeof t.account.name && (0 === t.account.length ? delete t.account : (t.account.length > 1 && (this.degraded = !0), t.account = t.account[0])), t.hasOwnProperty("account") && (this.account = t.account instanceof TinCan.AgentAccount ? t.account : new TinCan.AgentAccount(t.account)), e = 0; e < n.length; e += 1) t.hasOwnProperty(n[e]) && null !== t[n[e]] && (i = t[n[e]], "mbox" === n[e] && -1 === i.indexOf("mailto:") && (i = "mailto:" + i), this[n[e]] = i)
        },
        toString: function() {
            return this.log("toString"), null !== this.name ? this.name : null !== this.mbox ? this.mbox.replace("mailto:", "") : null !== this.mbox_sha1sum ? this.mbox_sha1sum : null !== this.openid ? this.openid : null !== this.account ? this.account.toString() : this.objectType + ": unidentified"
        },
        asVersion: function(t) {
            this.log("asVersion: " + t);
            var e = {
                objectType: this.objectType
            };
            return t = t || TinCan.versions()[0], "0.9" === t ? (null !== this.mbox ? e.mbox = [this.mbox] : null !== this.mbox_sha1sum ? e.mbox_sha1sum = [this.mbox_sha1sum] : null !== this.openid ? e.openid = [this.openid] : null !== this.account && (e.account = [this.account.asVersion(t)]), null !== this.name && (e.name = [this.name])) : (null !== this.mbox ? e.mbox = this.mbox : null !== this.mbox_sha1sum ? e.mbox_sha1sum = this.mbox_sha1sum : null !== this.openid ? e.openid = this.openid : null !== this.account && (e.account = this.account.asVersion(t)), null !== this.name && (e.name = this.name)), e
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.Group = function(t) {
        this.log("constructor"), this.name = null, this.mbox = null, this.mbox_sha1sum = null, this.openid = null, this.account = null, this.member = [], this.init(t)
    };
    t.prototype = {
        objectType: "Group",
        LOG_SRC: "Group",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e;
            if (t = t || {}, TinCan.Agent.prototype.init.call(this, t), "undefined" != typeof t.member)
                for (e = 0; e < t.member.length; e += 1) t.member[e] instanceof TinCan.Agent ? this.member.push(t.member[e]) : this.member.push(new TinCan.Agent(t.member[e]))
        },
        toString: function(t) {
            this.log("toString");
            var e = TinCan.Agent.prototype.toString.call(this, t);
            return e !== this.objectType + ": unidentified" && (e = this.objectType + ": " + e), e
        },
        asVersion: function(t) {
            this.log("asVersion: " + t);
            var e, i;
            if (t = t || TinCan.versions()[0], e = TinCan.Agent.prototype.asVersion.call(this, t), this.member.length > 0)
                for (e.member = [], i = 0; i < this.member.length; i += 1) e.member.push(this.member[i].asVersion(t));
            return e
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = {
            "http://adlnet.gov/expapi/verbs/experienced": "experienced",
            "http://adlnet.gov/expapi/verbs/attended": "attended",
            "http://adlnet.gov/expapi/verbs/attempted": "attempted",
            "http://adlnet.gov/expapi/verbs/completed": "completed",
            "http://adlnet.gov/expapi/verbs/passed": "passed",
            "http://adlnet.gov/expapi/verbs/failed": "failed",
            "http://adlnet.gov/expapi/verbs/answered": "answered",
            "http://adlnet.gov/expapi/verbs/interacted": "interacted",
            "http://adlnet.gov/expapi/verbs/imported": "imported",
            "http://adlnet.gov/expapi/verbs/created": "created",
            "http://adlnet.gov/expapi/verbs/shared": "shared",
            "http://adlnet.gov/expapi/verbs/voided": "voided"
        },
        e = TinCan.Verb = function(t) {
            this.log("constructor"), this.id = null, this.display = null, this.init(t)
        };
    e.prototype = {
        LOG_SRC: "Verb",
        log: TinCan.prototype.log,
        init: function(e) {
            this.log("init");
            var i, n, o = ["id", "display"];
            if ("string" == typeof e) {
                this.id = e, this.display = {
                    und: this.id
                };
                for (n in t)
                    if (t.hasOwnProperty(n) && t[n] === e) {
                        this.id = n;
                        break
                    }
            } else {
                for (e = e || {}, i = 0; i < o.length; i += 1) e.hasOwnProperty(o[i]) && null !== e[o[i]] && (this[o[i]] = e[o[i]]);
                null === this.display && "undefined" != typeof t[this.id] && (this.display = {
                    und: t[this.id]
                })
            }
        },
        toString: function(t) {
            return this.log("toString"), null !== this.display ? this.getLangDictionaryValue("display", t) : this.id
        },
        asVersion: function(e) {
            this.log("asVersion");
            var i;
            return e = e || TinCan.versions()[0], "0.9" === e ? i = t[this.id] : (i = {
                id: this.id
            }, null !== this.display && (i.display = this.display)), i
        },
        getLangDictionaryValue: TinCan.Utils.getLangDictionaryValue
    }, e.fromJSON = function(t) {
        e.prototype.log("fromJSON");
        var i = JSON.parse(t);
        return new e(i)
    }
}(),
function() {
    var t = TinCan.Result = function(t) {
        this.log("constructor"), this.score = null, this.success = null, this.completion = null, this.duration = null, this.response = null, this.extensions = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "Result",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["completion", "duration", "extensions", "response", "success"];
            for (t = t || {}, t.hasOwnProperty("score") && null !== t.score && (this.score = t.score instanceof TinCan.Score ? t.score : new TinCan.Score(t.score)), e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]]);
            "Completed" === this.completion && (this.completion = !0)
        },
        asVersion: function(t) {
            this.log("asVersion");
            var e, i = {},
                n = ["success", "duration", "response", "extensions"],
                o = ["score"];
            for (t = t || TinCan.versions()[0], e = 0; e < n.length; e += 1) null !== this[n[e]] && (i[n[e]] = this[n[e]]);
            for (e = 0; e < o.length; e += 1) null !== this[o[e]] && (i[o[e]] = this[o[e]].asVersion(t));
            return null !== this.completion && ("0.9" === t ? this.completion && (i.completion = "Completed") : i.completion = this.completion), i
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.Score = function(t) {
        this.log("constructor"), this.scaled = null, this.raw = null, this.min = null, this.max = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "Score",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["scaled", "raw", "min", "max"];
            for (t = t || {}, e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]])
        },
        asVersion: function(t) {
            this.log("asVersion");
            var e, i = {},
                n = ["scaled", "raw", "min", "max"];
            for (t = t || TinCan.versions()[0], e = 0; e < n.length; e += 1) null !== this[n[e]] && (i[n[e]] = this[n[e]]);
            return i
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.InteractionComponent = function(t) {
        this.log("constructor"), this.id = null, this.description = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "InteractionComponent",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["id", "description"];
            for (t = t || {}, e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]])
        },
        asVersion: function(t) {
            this.log("asVersion");
            var e, i, n = {
                    id: this.id
                },
                o = ["description"];
            for (t = t || TinCan.versions()[0], e = 0; e < o.length; e += 1) i = o[e], null !== this[i] && (n[i] = this[i]);
            return n
        },
        getLangDictionaryValue: TinCan.Utils.getLangDictionaryValue
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = {
            "http://adlnet.gov/expapi/activities/course": "course",
            "http://adlnet.gov/expapi/activities/module": "module",
            "http://adlnet.gov/expapi/activities/meeting": "meeting",
            "http://adlnet.gov/expapi/activities/media": "media",
            "http://adlnet.gov/expapi/activities/performance": "performance",
            "http://adlnet.gov/expapi/activities/simulation": "simulation",
            "http://adlnet.gov/expapi/activities/assessment": "assessment",
            "http://adlnet.gov/expapi/activities/interaction": "interaction",
            "http://adlnet.gov/expapi/activities/cmi.interaction": "cmi.interaction",
            "http://adlnet.gov/expapi/activities/question": "question",
            "http://adlnet.gov/expapi/activities/objective": "objective",
            "http://adlnet.gov/expapi/activities/link": "link"
        },
        e = TinCan.ActivityDefinition = function(t) {
            this.log("constructor"), this.name = null, this.description = null, this.type = null, this.moreInfo = null, this.extensions = null, this.interactionType = null, this.correctResponsesPattern = null, this.choices = null, this.scale = null, this.source = null, this.target = null, this.steps = null, this.init(t)
        };
    e.prototype = {
        LOG_SRC: "ActivityDefinition",
        log: TinCan.prototype.log,
        init: function(e) {
            this.log("init");
            var i, n, o, r = ["name", "description", "moreInfo", "extensions", "correctResponsesPattern"],
                s = [];
            if (e = e || {}, e.hasOwnProperty("type") && null !== e.type) {
                for (o in t) t.hasOwnProperty(o) && t[o] === e.type && (e.type = t[o]);
                this.type = e.type
            }
            if (e.hasOwnProperty("interactionType") && null !== e.interactionType && (this.interactionType = e.interactionType, "choice" === e.interactionType || "sequencing" === e.interactionType ? s.push("choices") : "likert" === e.interactionType ? s.push("scale") : "matching" === e.interactionType ? (s.push("source"), s.push("target")) : "performance" === e.interactionType && s.push("steps"), s.length > 0))
                for (i = 0; i < s.length; i += 1)
                    if (o = s[i], e.hasOwnProperty(o) && null !== e[o])
                        for (this[o] = [], n = 0; n < e[o].length; n += 1) e[o][n] instanceof TinCan.InteractionComponent ? this[o].push(e[o][n]) : this[o].push(new TinCan.InteractionComponent(e[o][n]));
            for (i = 0; i < r.length; i += 1) e.hasOwnProperty(r[i]) && null !== e[r[i]] && (this[r[i]] = e[r[i]])
        },
        toString: function(t) {
            return this.log("toString"), null !== this.name ? this.getLangDictionaryValue("name", t) : null !== this.description ? this.getLangDictionaryValue("description", t) : ""
        },
        asVersion: function(e) {
            this.log("asVersion");
            var i, n, o, r = {},
                s = ["name", "description", "interactionType", "correctResponsesPattern", "extensions"],
                a = ["choices", "scale", "source", "target", "steps"];
            for (e = e || TinCan.versions()[0], null !== this.type && (r.type = "0.9" === e ? t[this.type] : this.type), i = 0; i < s.length; i += 1) o = s[i], null !== this[o] && (r[o] = this[o]);
            for (i = 0; i < a.length; i += 1)
                if (o = a[i], null !== this[o])
                    for (r[o] = [], n = 0; n < this[o].length; n += 1) r[o].push(this[o][n].asVersion(e));
            return 0 !== e.indexOf("0.9") && null !== this.moreInfo && (r.moreInfo = this.moreInfo), r
        },
        getLangDictionaryValue: TinCan.Utils.getLangDictionaryValue
    }, e.fromJSON = function(t) {
        e.prototype.log("fromJSON");
        var i = JSON.parse(t);
        return new e(i)
    }
}(),
function() {
    var t = TinCan.Activity = function(t) {
        this.log("constructor"), this.objectType = "Activity", this.id = null, this.definition = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "Activity",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["id"];
            for (t = t || {}, t.hasOwnProperty("definition") ? this.definition = t.definition instanceof TinCan.ActivityDefinition ? t.definition : new TinCan.ActivityDefinition(t.definition) : t.hasOwnProperty("display") && (t.definition instanceof TinCan.ActivityDefinition ? this.definition = t.cfg : this.display = new TinCan.ActivityDefinition(t.definition)), e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]])
        },
        toString: function(t) {
            this.log("toString");
            var e = "";
            return null !== this.definition && (e = this.definition.toString(t), "" !== e) ? e : null !== this.id ? this.id : "Activity: unidentified"
        },
        asVersion: function(t) {
            this.log("asVersion");
            var e = {
                id: this.id,
                objectType: this.objectType
            };
            return t = t || TinCan.versions()[0], null !== this.definition && (e.definition = this.definition.asVersion(t)), e
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.ContextActivities = function(t) {
        this.log("constructor"), this.category = null, this.parent = null, this.grouping = null, this.other = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "ContextActivities",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i, n, o, r = ["category", "parent", "grouping", "other"];
            for (t = t || {}, e = 0; e < r.length; e += 1)
                if (n = r[e], t.hasOwnProperty(n) && null !== t[n])
                    if ("[object Array]" === Object.prototype.toString.call(t[n]))
                        for (i = 0; i < t[n].length; i += 1) this.add(n, t[n][i]);
                    else o = t[n], this.add(n, o)
        },
        add: function(t, e) {
            return "category" === t || "parent" === t || "grouping" === t || "other" === t ? (null === this[t] && (this[t] = []), e instanceof TinCan.Activity || (e = "string" == typeof e ? {
                id: e
            } : e, e = new TinCan.Activity(e)), this[t].push(e), this[t].length - 1) : void 0
        },
        asVersion: function(t) {
            this.log("asVersion");
            var e, i, n = {},
                o = ["parent", "grouping", "other"];
            for (t = t || TinCan.versions()[0], e = 0; e < o.length; e += 1)
                if (null !== this[o[e]] && this[o[e]].length > 0)
                    if ("0.9" === t || "0.95" === t) this[o[e]].length > 1 && this.log("[warning] version does not support multiple values in: " + o[e]), n[o[e]] = this[o[e]][0].asVersion(t);
                    else
                        for (n[o[e]] = [], i = 0; i < this[o[e]].length; i += 1) n[o[e]].push(this[o[e]][i].asVersion(t));
            if (null !== this.category && this.category.length > 0) {
                if ("0.9" === t || "0.95" === t) throw this.log("[error] version does not support the 'category' property: " + t), new Error(t + " does not support the 'category' property");
                for (n.category = [], e = 0; e < this.category.length; e += 1) n.category.push(this.category[e].asVersion(t))
            }
            return n
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.Context = function(t) {
        this.log("constructor"), this.registration = null, this.instructor = null, this.team = null, this.contextActivities = null, this.revision = null, this.platform = null, this.language = null, this.statement = null, this.extensions = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "Context",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i, n, o = ["registration", "revision", "platform", "language", "statement", "extensions"],
                r = ["instructor", "team"];
            for (t = t || {}, e = 0; e < o.length; e += 1) i = o[e], t.hasOwnProperty(i) && null !== t[i] && (this[i] = t[i]);
            for (e = 0; e < r.length; e += 1) i = r[e], t.hasOwnProperty(i) && null !== t[i] && (n = t[i], ("undefined" == typeof n.objectType || "Person" === n.objectType) && (n.objectType = "Agent"), "Agent" !== n.objectType || n instanceof TinCan.Agent ? "Group" !== n.objectType || n instanceof TinCan.Group || (n = new TinCan.Group(n)) : n = new TinCan.Agent(n), this[i] = n);
            t.hasOwnProperty("contextActivities") && null !== t.contextActivities && (this.contextActivities = t.contextActivities instanceof TinCan.ContextActivities ? t.contextActivities : new TinCan.ContextActivities(t.contextActivities))
        },
        asVersion: function(t) {
            this.log("asVersion");
            var e, i = {},
                n = ["registration", "revision", "platform", "language", "extensions"],
                o = ["instructor", "team", "contextActivities", "statement"];
            for (t = t || TinCan.versions()[0], e = 0; e < n.length; e += 1) null !== this[n[e]] && (i[n[e]] = this[n[e]]);
            for (e = 0; e < o.length; e += 1) null !== this[o[e]] && (i[o[e]] = this[o[e]].asVersion(t));
            return i
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.StatementRef = function(t) {
        this.log("constructor"), this.id = null, this.init(t)
    };
    t.prototype = {
        objectType: "StatementRef",
        LOG_SRC: "StatementRef",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["id"];
            for (t = t || {}, e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]])
        },
        toString: function() {
            return this.log("toString"), this.id
        },
        asVersion: function(t) {
            this.log("asVersion");
            var e = {
                objectType: this.objectType,
                id: this.id
            };
            return "0.9" === t && (e.objectType = "Statement"), e
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.SubStatement = function(t) {
        this.log("constructor"), this.actor = null, this.verb = null, this.target = null, this.result = null, this.context = null, this.timestamp = null, this.init(t)
    };
    t.prototype = {
        objectType: "SubStatement",
        LOG_SRC: "SubStatement",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["timestamp"];
            for (t = t || {}, t.hasOwnProperty("object") && (t.target = t.object), t.hasOwnProperty("actor") && (("undefined" == typeof t.actor.objectType || "Person" === t.actor.objectType) && (t.actor.objectType = "Agent"), "Agent" === t.actor.objectType ? this.actor = t.actor instanceof TinCan.Agent ? t.actor : new TinCan.Agent(t.actor) : "Group" === t.actor.objectType && (this.actor = t.actor instanceof TinCan.Group ? t.actor : new TinCan.Group(t.actor))), t.hasOwnProperty("verb") && (this.verb = t.verb instanceof TinCan.Verb ? t.verb : new TinCan.Verb(t.verb)), t.hasOwnProperty("target") && (t.target instanceof TinCan.Activity || t.target instanceof TinCan.Agent || t.target instanceof TinCan.Group || t.target instanceof TinCan.SubStatement || t.target instanceof TinCan.StatementRef ? this.target = t.target : ("undefined" == typeof t.target.objectType && (t.target.objectType = "Activity"), "Activity" === t.target.objectType ? this.target = new TinCan.Activity(t.target) : "Agent" === t.target.objectType ? this.target = new TinCan.Agent(t.target) : "Group" === t.target.objectType ? this.target = new TinCan.Group(t.target) : "SubStatement" === t.target.objectType ? this.target = new TinCan.SubStatement(t.target) : "StatementRef" === t.target.objectType ? this.target = new TinCan.StatementRef(t.target) : this.log("Unrecognized target type: " + t.target.objectType))), t.hasOwnProperty("result") && (this.result = t.result instanceof TinCan.Result ? t.result : new TinCan.Result(t.result)), t.hasOwnProperty("context") && (this.context = t.context instanceof TinCan.Context ? t.context : new TinCan.Context(t.context)), e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]])
        },
        toString: function(t) {
            return this.log("toString"), (null !== this.actor ? this.actor.toString(t) : "") + " " + (null !== this.verb ? this.verb.toString(t) : "") + " " + (null !== this.target ? this.target.toString(t) : "")
        },
        asVersion: function(t) {
            this.log("asVersion");
            var e, i, n = ["timestamp"],
                o = ["actor", "verb", "result", "context"];
            for (e = {
                    objectType: this.objectType
                }, t = t || TinCan.versions()[0], i = 0; i < n.length; i += 1) null !== this[n[i]] && (e[n[i]] = this[n[i]]);
            for (i = 0; i < o.length; i += 1) null !== this[o[i]] && (e[o[i]] = this[o[i]].asVersion(t));
            return null !== this.target && (e.object = this.target.asVersion(t)), e
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.Statement = function(t, e) {
        this.log("constructor"), e = "number" == typeof e ? {
            storeOriginal: e
        } : e || {}, "undefined" == typeof e.storeOriginal && (e.storeOriginal = null), "undefined" == typeof e.doStamp && (e.doStamp = !0), this.id = null, this.actor = null, this.verb = null, this.target = null, this.result = null, this.context = null, this.timestamp = null, this.stored = null, this.authority = null, this.version = null, this.degraded = !1, this.voided = null, this.inProgress = null, this.originalJSON = null, this.init(t, e)
    };
    t.prototype = {
        LOG_SRC: "Statement",
        log: TinCan.prototype.log,
        init: function(t, e) {
            this.log("init");
            var i, n = ["id", "stored", "timestamp", "version", "inProgress", "voided"];
            for (t = t || {}, e.storeOriginal && (this.originalJSON = JSON.stringify(t, null, e.storeOriginal)), t.hasOwnProperty("object") && (t.target = t.object), t.hasOwnProperty("actor") && (("undefined" == typeof t.actor.objectType || "Person" === t.actor.objectType) && (t.actor.objectType = "Agent"), "Agent" === t.actor.objectType ? this.actor = t.actor instanceof TinCan.Agent ? t.actor : new TinCan.Agent(t.actor) : "Group" === t.actor.objectType && (this.actor = t.actor instanceof TinCan.Group ? t.actor : new TinCan.Group(t.actor))), t.hasOwnProperty("authority") && (("undefined" == typeof t.authority.objectType || "Person" === t.authority.objectType) && (t.authority.objectType = "Agent"), "Agent" === t.authority.objectType ? this.authority = t.authority instanceof TinCan.Agent ? t.authority : new TinCan.Agent(t.authority) : "Group" === t.authority.objectType && (this.authority = t.actor instanceof TinCan.Group ? t.authority : new TinCan.Group(t.authority))), t.hasOwnProperty("verb") && (this.verb = t.verb instanceof TinCan.Verb ? t.verb : new TinCan.Verb(t.verb)), t.hasOwnProperty("target") && (t.target instanceof TinCan.Activity || t.target instanceof TinCan.Agent || t.target instanceof TinCan.Group || t.target instanceof TinCan.SubStatement || t.target instanceof TinCan.StatementRef ? this.target = t.target : ("undefined" == typeof t.target.objectType && (t.target.objectType = "Activity"), "Activity" === t.target.objectType ? this.target = new TinCan.Activity(t.target) : "Agent" === t.target.objectType ? this.target = new TinCan.Agent(t.target) : "Group" === t.target.objectType ? this.target = new TinCan.Group(t.target) : "SubStatement" === t.target.objectType ? this.target = new TinCan.SubStatement(t.target) : "StatementRef" === t.target.objectType ? this.target = new TinCan.StatementRef(t.target) : this.log("Unrecognized target type: " + t.target.objectType))), t.hasOwnProperty("result") && (this.result = t.result instanceof TinCan.Result ? t.result : new TinCan.Result(t.result)), t.hasOwnProperty("context") && (this.context = t.context instanceof TinCan.Context ? t.context : new TinCan.Context(t.context)), i = 0; i < n.length; i += 1) t.hasOwnProperty(n[i]) && null !== t[n[i]] && (this[n[i]] = t[n[i]]);
            e.doStamp && this.stamp()
        },
        toString: function(t) {
            return this.log("toString"), (null !== this.actor ? this.actor.toString(t) : "") + " " + (null !== this.verb ? this.verb.toString(t) : "") + " " + (null !== this.target ? this.target.toString(t) : "")
        },
        asVersion: function(t) {
            this.log("asVersion");
            var e, i = {},
                n = ["id", "timestamp"],
                o = ["actor", "verb", "result", "context", "authority"];
            for (t = t || TinCan.versions()[0], e = 0; e < n.length; e += 1) null !== this[n[e]] && (i[n[e]] = this[n[e]]);
            for (e = 0; e < o.length; e += 1) null !== this[o[e]] && (i[o[e]] = this[o[e]].asVersion(t));
            return null !== this.target && (i.object = this.target.asVersion(t)), ("0.9" === t || "0.95" === t) && null !== this.voided && (i.voided = this.voided), "0.9" === t && null !== this.inProgress && (i.inProgress = this.inProgress), i
        },
        stamp: function() {
            this.log("stamp"), null === this.id && (this.id = TinCan.Utils.getUUID()), null === this.timestamp && (this.timestamp = TinCan.Utils.getISODateString(new Date))
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.StatementsResult = function(t) {
        this.log("constructor"), this.statements = null, this.more = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "StatementsResult",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init"), t = t || {}, t.hasOwnProperty("statements") && (this.statements = t.statements), t.hasOwnProperty("more") && (this.more = t.more)
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i, n, o, r = [];
        try {
            i = JSON.parse(e)
        } catch (s) {
            t.prototype.log("fromJSON - JSON.parse error: " + s)
        }
        if (i) {
            for (o = 0; o < i.statements.length; o += 1) {
                try {
                    n = new TinCan.Statement(i.statements[o], 4)
                } catch (a) {
                    t.prototype.log("fromJSON - statement instantiation failed: " + a + " (" + JSON.stringify(i.statements[o]) + ")"), n = new TinCan.Statement({
                        id: i.statements[o].id
                    }, 4)
                }
                r.push(n)
            }
            i.statements = r
        }
        return new t(i)
    }
}(),
function() {
    var t = TinCan.State = function(t) {
        this.log("constructor"), this.id = null, this.updated = null, this.contents = null, this.etag = null, this.contentType = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "State",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["id", "contents", "etag", "contentType"];
            for (t = t || {}, e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]]);
            this.updated = !1
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.ActivityProfile = function(t) {
        this.log("constructor"), this.id = null, this.activity = null, this.updated = null, this.contents = null, this.etag = null, this.contentType = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "ActivityProfile",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["id", "contents", "etag", "contentType"];
            for (t = t || {}, t.hasOwnProperty("activity") && (this.activity = t.activity instanceof TinCan.Activity ? t.activity : new TinCan.Activity(t.activity)), e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]]);
            this.updated = !1
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.AgentProfile = function(t) {
        this.log("constructor"), this.id = null, this.agent = null, this.updated = null, this.contents = null, this.etag = null, this.contentType = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "AgentProfile",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["id", "contents", "etag", "contentType"];
            for (t = t || {}, t.hasOwnProperty("agent") && (this.agent = t.agent instanceof TinCan.Agent ? t.agent : new TinCan.Agent(t.agent)), e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]]);
            this.updated = !1
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var t = TinCan.About = function(t) {
        this.log("constructor"), this.version = null, this.init(t)
    };
    t.prototype = {
        LOG_SRC: "About",
        log: TinCan.prototype.log,
        init: function(t) {
            this.log("init");
            var e, i = ["version"];
            for (t = t || {}, e = 0; e < i.length; e += 1) t.hasOwnProperty(i[e]) && null !== t[i[e]] && (this[i[e]] = t[i[e]])
        }
    }, t.fromJSON = function(e) {
        t.prototype.log("fromJSON");
        var i = JSON.parse(e);
        return new t(i)
    }
}(),
function() {
    var LOG_SRC = "Environment.Browser",
        nativeRequest, xdrRequest, requestComplete, __delay, __IEModeConversion, env = {},
        log = TinCan.prototype.log;
    return "undefined" == typeof window ? (log("'window' not defined", LOG_SRC), void 0) : (window.JSON || (window.JSON = {
        parse: function(sJSON) {
            return eval("(" + sJSON + ")")
        },
        stringify: function(t) {
            var e, i, n = "";
            if (t instanceof Object) {
                if (t.constructor === Array) {
                    for (e = 0; e < t.length; e += 1) n += this.stringify(t[e]) + ",";
                    return "[" + n.substr(0, n.length - 1) + "]"
                }
                if (t.toString !== Object.prototype.toString) return '"' + t.toString().replace(/"/g, "\\$&") + '"';
                for (i in t) t.hasOwnProperty(i) && (n += '"' + i.replace(/"/g, "\\$&") + '":' + this.stringify(t[i]) + ",");
                return "{" + n.substr(0, n.length - 1) + "}"
            }
            return "string" == typeof t ? '"' + t.replace(/"/g, "\\$&") + '"' : String(t)
        }
    }), Date.now || (Date.now = function() {
        return +new Date
    }), env.hasCORS = !1, env.useXDR = !1, "undefined" != typeof XMLHttpRequest && "undefined" != typeof(new XMLHttpRequest).withCredentials ? env.hasCORS = !0 : "undefined" != typeof XDomainRequest && (env.hasCORS = !0, env.useXDR = !0), requestComplete = function(t, e, i) {
        log("requestComplete: " + i.finished + ", xhr.status: " + t.status, LOG_SRC);
        var n, o, r;
        return r = "undefined" == typeof t.status ? i.fakeStatus : 1223 === t.status ? 204 : t.status, i.finished ? n : (i.finished = !0, o = e.ignore404 && 404 === r, r >= 200 && 400 > r || o ? e.callback ? (e.callback(null, t), void 0) : n = {
            err: null,
            xhr: t
        } : (n = {
            err: r,
            xhr: t
        }, 0 === r ? log("[warning] There was a problem communicating with the Learning Record Store. Aborted, offline, or invalid CORS endpoint (" + r + ")", LOG_SRC) : log("[warning] There was a problem communicating with the Learning Record Store. (" + r + " | " + t.responseText + ")", LOG_SRC), e.callback && e.callback(r, t), n))
    }, __IEModeConversion = function(t, e, i, n) {
        var o;
        for (o in e) e.hasOwnProperty(o) && i.push(o + "=" + encodeURIComponent(e[o]));
        return "undefined" != typeof n.data && i.push("content=" + encodeURIComponent(n.data)), e["Content-Type"] = "application/x-www-form-urlencoded", t += "?method=" + n.method, n.method = "POST", n.params = {}, i.length > 0 && (n.data = i.join("&")), t
    }, nativeRequest = function(t, e, i) {
        log("sendRequest using XMLHttpRequest", LOG_SRC);
        var n, o, r, s, a = this,
            l = [],
            c = {
                finished: !1,
                fakeStatus: null
            },
            h = !0,
            p = t,
            d = 2048;
        log("sendRequest using XMLHttpRequest - async: " + h, LOG_SRC);
        for (o in i.params) i.params.hasOwnProperty(o) && l.push(o + "=" + encodeURIComponent(i.params[o]));
        if (l.length > 0 && (p += "?" + l.join("&")), p.length >= d) {
            if ("undefined" != typeof e["Content-Type"] && "application/json" !== e["Content-Type"]) return s = new Error("Unsupported content type for IE Mode request"), "undefined" != typeof i.callback && i.callback(s, null), {
                err: s,
                xhr: null
            };
            if ("undefined" == typeof i.method) return s = new Error("method must not be undefined for an IE Mode Request conversion"), "undefined" != typeof i.callback && i.callback(s, null), {
                err: s,
                xhr: null
            };
            t = __IEModeConversion(t, e, l, i)
        } else t = p;
        n = "undefined" != typeof XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), n.open(i.method, t, h);
        for (o in e) e.hasOwnProperty(o) && n.setRequestHeader(o, e[o]);
        "undefined" != typeof i.data && (i.data += ""), r = i.data, h && (n.onreadystatechange = function() {
            log("xhr.onreadystatechange - xhr.readyState: " + n.readyState, LOG_SRC), 4 === n.readyState && requestComplete.call(a, n, i, c)
        });
        try {
            n.send(r)
        } catch (u) {
            log("sendRequest caught send exception: " + u, LOG_SRC)
        }
        return h ? n : requestComplete.call(this, n, i, c)
    }, xdrRequest = function(t, e, i) {
        log("sendRequest using XDomainRequest", LOG_SRC);
        var n, o, r, s, a, l = this,
            c = [],
            h = {
                finished: !1,
                fakeStatus: null
            };
        if ("undefined" != typeof e["Content-Type"] && "application/json" !== e["Content-Type"]) return a = new Error("Unsupported content type for IE Mode request"), i.callback ? (i.callback(a, null), null) : {
            err: a,
            xhr: null
        };
        t += "?method=" + i.method;
        for (r in i.params) i.params.hasOwnProperty(r) && c.push(r + "=" + encodeURIComponent(i.params[r]));
        for (r in e) e.hasOwnProperty(r) && c.push(r + "=" + encodeURIComponent(e[r]));
        null !== i.data && c.push("content=" + encodeURIComponent(i.data)), o = c.join("&"), n = new XDomainRequest, n.open("POST", t), i.callback ? (n.onload = function() {
            h.fakeStatus = 200, requestComplete.call(l, n, i, h)
        }, n.onerror = function() {
            h.fakeStatus = 400, requestComplete.call(l, n, i, h)
        }, n.ontimeout = function() {
            h.fakeStatus = 0, requestComplete.call(l, n, i, h)
        }) : (n.onload = function() {
            h.fakeStatus = 200
        }, n.onerror = function() {
            h.fakeStatus = 400
        }, n.ontimeout = function() {
            h.fakeStatus = 0
        }), n.onprogress = function() {}, n.timeout = 0;
        try {
            n.send(o)
        } catch (p) {
            log("sendRequest caught send exception: " + p, LOG_SRC)
        }
        if (!i.callback) {
            for (s = 1e4 + Date.now(), log("sendRequest - until: " + s + ", finished: " + h.finished, LOG_SRC); Date.now() < s && null === h.fakeStatus;) __delay();
            return requestComplete.call(l, n, i, h)
        }
        return n
    }, TinCan.LRS.prototype._initByEnvironment = function(t) {
        log("_initByEnvironment", LOG_SRC);
        var e, i, n, o;
        if (t = t || {}, this._makeRequest = nativeRequest, this._IEModeConversion = __IEModeConversion, e = this.endpoint.toLowerCase().match(/([A-Za-z]+:)\/\/([^:\/]+):?(\d+)?(\/.*)?$/), null === e) throw log("[error] LRS invalid: failed to divide URL parts", LOG_SRC), {
            code: 4,
            mesg: "LRS invalid: failed to divide URL parts"
        };
        if (n = location.port, i = location.protocol.toLowerCase() === e[1], "" === n && (n = "http:" === location.protocol.toLowerCase() ? "80" : "https:" === location.protocol.toLowerCase() ? "443" : ""), o = !i || location.hostname.toLowerCase() !== e[2] || n !== (null !== e[3] && "undefined" != typeof e[3] && "" !== e[3] ? e[3] : "http:" === e[1] ? "80" : "https:" === e[1] ? "443" : ""))
            if (env.hasCORS) {
                if (env.useXDR && i) this._makeRequest = xdrRequest;
                else if (env.useXDR && !i) {
                    if (!t.allowFail) throw log("[error] LRS invalid: cross domain request for differing scheme in IE with XDR", LOG_SRC), {
                        code: 2,
                        mesg: "LRS invalid: cross domain request for differing scheme in IE with XDR"
                    };
                    log("[warning] LRS invalid: cross domain request for differing scheme in IE with XDR (allowed to fail)", LOG_SRC)
                }
            } else {
                if (!t.allowFail) throw log("[error] LRS invalid: cross domain requests not supported in this browser", LOG_SRC), {
                    code: 1,
                    mesg: "LRS invalid: cross domain requests not supported in this browser"
                };
                log("[warning] LRS invalid: cross domain requests not supported in this browser (allowed to fail)", LOG_SRC)
            }
    }, __delay = function() {
        var t = new XMLHttpRequest,
            e = window.location + "?forcenocache=" + TinCan.Utils.getUUID();
        t.open("GET", e, !1), t.send(null)
    }, TinCan.LRS.syncEnabled = !0, void 0)
}(), define("libs/tincan/tincan", function() {}), StringBuffer.prototype.append = function(t) {
    return this.buffer.push(t), this
}, StringBuffer.prototype.toString = function() {
    return this.buffer.join("")
};
var Base64 = {
    codex: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(t) {
        for (var e = new StringBuffer, i = new Utf8EncodeEnumerator(t); i.moveNext();) {
            var n = i.current;
            i.moveNext();
            var o = i.current;
            i.moveNext();
            var r = i.current,
                s = n >> 2,
                a = (3 & n) << 4 | o >> 4,
                l = (15 & o) << 2 | r >> 6,
                c = 63 & r;
            isNaN(o) ? l = c = 64 : isNaN(r) && (c = 64), e.append(this.codex.charAt(s) + this.codex.charAt(a) + this.codex.charAt(l) + this.codex.charAt(c))
        }
        return e.toString()
    },
    decode: function(t) {
        for (var e = new StringBuffer, i = new Base64DecodeEnumerator(t); i.moveNext();) {
            var n = i.current;
            if (128 > n) e.append(String.fromCharCode(n));
            else if (n > 191 && 224 > n) {
                i.moveNext();
                var o = i.current;
                e.append(String.fromCharCode((31 & n) << 6 | 63 & o))
            } else {
                i.moveNext();
                var o = i.current;
                i.moveNext();
                var r = i.current;
                e.append(String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | 63 & r))
            }
        }
        return e.toString()
    }
};
Utf8EncodeEnumerator.prototype = {
        current: Number.NaN,
        moveNext: function() {
            if (this._buffer.length > 0) return this.current = this._buffer.shift(), !0;
            if (this._index >= this._input.length - 1) return this.current = Number.NaN, !1;
            var t = this._input.charCodeAt(++this._index);
            return 13 == t && 10 == this._input.charCodeAt(this._index + 1) && (t = 10, this._index += 2), 128 > t ? this.current = t : t > 127 && 2048 > t ? (this.current = t >> 6 | 192, this._buffer.push(63 & t | 128)) : (this.current = t >> 12 | 224, this._buffer.push(t >> 6 & 63 | 128), this._buffer.push(63 & t | 128)), !0
        }
    }, Base64DecodeEnumerator.prototype = {
        current: 64,
        moveNext: function() {
            if (this._buffer.length > 0) return this.current = this._buffer.shift(), !0;
            if (this._index >= this._input.length - 1) return this.current = 64, !1;
            var t = Base64.codex.indexOf(this._input.charAt(++this._index)),
                e = Base64.codex.indexOf(this._input.charAt(++this._index)),
                i = Base64.codex.indexOf(this._input.charAt(++this._index)),
                n = Base64.codex.indexOf(this._input.charAt(++this._index)),
                o = t << 2 | e >> 4,
                r = (15 & e) << 4 | i >> 2,
                s = (3 & i) << 6 | n;
            return this.current = o, 64 != i && this._buffer.push(r), 64 != n && this._buffer.push(s), !0
        }
    }, define("libs/tincan/base64", function() {}), define("player/controllers/tincan-controller", ["marionette", "libs/tincan/tincan", "libs/tincan/base64"], function() {
        var t, e, i;
        return e = null, t = Backbone.Marionette.Controller.extend({
            arrConf: null,
            worker: void 0,
            constructor: function(t) {
                this.arrConf = [], i = new TinCan, this.initializeWorkerObject(), t && this.setConfigurations(t)
            }
        }), t.prototype.initializeWorkerObject = function() {
            this.worker = new Worker("framework/player/web-workers/tincan-worker.js"), this.worker.addEventListener("message", this.handleWorkerEvent.bind(this), !1)
        }, t.prototype.handleWorkerEvent = function(t) {
            var e, i;
            switch (e = t.data.action, i = t.data.data, e) {
                case "sendStatement":
                    this.tincanSendData(i)
            }
        }, t.prototype.addDataToWorker = function(t) {
            this.worker.postMessage(this.getWorkerData("addDataInQue", t))
        }, t.prototype.getWorkerData = function(t, e) {
            var i = {};
            return i.action = t, i.data = e, i
        }, t.prototype.tincanOperation = function(t) {
            this.addDataToWorker(t)
        }, t.prototype.tincanSendData = function(t) {
            var e;
            t && t.length && (e = t.shift(), "getStatements" === e && $.each(t[0], function(t, e) {
                return e.agent ? (e.agent = new TinCan.Agent(e.agent), void 0) : void 0
            }), i[e].apply(i, t), this.worker.postMessage(this.getWorkerData("removeDataFromQue", null)), this.worker.postMessage(this.getWorkerData("getNextDataFromQue", null)))
        }, t.prototype.setConfigurations = function(t) {
            var e = this;
            t instanceof Array ? this.arrConf = t : this.arrConf[0] = t, $.each(this.arrConf, function(t, n) {
                var o = {};
                o.endpoint = n.endpoint, o.version = n.version, "Basic" === n.auth.type && (o.auth = "Basic " + e.encodeBase64(n.auth.user + ":" + n.auth.password)), i.addRecordStore(e.createLRS(o))
            })
        }, t.prototype.createLRS = function(t) {
            var e = new TinCan.LRS(t);
            return e
        }, t.prototype.encodeBase64 = function(t) {
            return Base64.encode(t)
        }, t.prototype.decodeBase64 = function(t) {
            return Base64.decode(t)
        }, t.prototype.destroy = function() {}, {
            getInstance: function(n) {
                return null === e ? e = new t(n) : n && e.setConfigurations(n), e.tincan = i, e
            }
        }
    }),
    function(t) {
        var e = 0,
            i = {
                iframe: "iframe",
                popup: "popup"
            },
            n = {
                strict: "strict",
                loose: "loose",
                html5: "html5"
            },
            o = {
                mode: i.iframe,
                standard: n.html5,
                popHt: 500,
                popWd: 400,
                popX: 200,
                popY: 200,
                popTitle: "",
                popClose: !1,
                extraCss: "",
                extraHead: "",
                retainAttr: ["id", "class", "style"]
            },
            r = {};
        t.fn.printArea = function(i) {
            t.extend(r, o, i), e++;
            var n = "printArea_";
            t("[id^=" + n + "]").remove(), r.id = n + e;
            var a = t(this),
                l = s.getPrintWindow();
            s.write(l.doc, a), setTimeout(function() {
                s.print(l)
            }, 1e3)
        };
        var s = {
            print: function(e) {
                var n = e.win;
                t(e.doc).ready(function() {
                    n.focus(), n.print(), r.mode == i.popup && r.popClose && setTimeout(function() {
                        n.close()
                    }, 2e3)
                })
            },
            write: function(t, e) {
                t.open(), t.write(s.docType() + "<html>" + s.getHead() + s.getBody(e) + "</html>"), t.close()
            },
            docType: function() {
                if (r.mode == i.iframe) return "";
                if (r.standard == n.html5) return "<!DOCTYPE html>";
                var t = r.standard == n.loose ? " Transitional" : "",
                    e = r.standard == n.loose ? "loose" : "strict";
                return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01' + t + '//EN" "http://www.w3.org/TR/html4/' + e + '.dtd">'
            },
            getHead: function() {
                var e = "",
                    i = "";
                return r.extraHead && r.extraHead.replace(/([^,]+)/g, function(t) {
                    e += t
                }), t(document).find("link").filter(function() {
                    var e = t(this).attr("rel");
                    return "undefined" === t.type(e) == 0 && "stylesheet" == e.toLowerCase()
                }).filter(function() {
                    var e = t(this).attr("media");
                    return "undefined" === t.type(e) || "" == e || "print" == e.toLowerCase() || "all" == e.toLowerCase()
                }).each(function() {
                    i += '<link type="text/css" rel="stylesheet" href="' + t(this).attr("href") + '" >'
                }), r.extraCss && r.extraCss.replace(/([^,\s]+)/g, function(t) {
                    i += '<link type="text/css" rel="stylesheet" href="' + t + '">'
                }), "<head><title>" + r.popTitle + "</title>" + e + i + "</head>"
            },
            getBody: function(e) {
                var i = "",
                    n = r.retainAttr;
                return e.each(function() {
                    for (var e = s.getFormData(t(this)), o = "", r = 0; r < n.length; r++) {
                        var a = t(e).attr(n[r]);
                        a && (o += (o.length > 0 ? " " : "") + n[r] + "='" + a + "'")
                    }
                    i += "<div " + o + ">" + t(e).html() + "</div>"
                }), "<body>" + i + "</body>"
            },
            getFormData: function(e) {
                var i = e.clone(),
                    n = t("input,select,textarea", i);
                return t("input,select,textarea", e).each(function(e) {
                    var i = t(this).attr("type");
                    "undefined" === t.type(i) && (i = t(this).is("select") ? "select" : t(this).is("textarea") ? "textarea" : "");
                    var o = n.eq(e);
                    "radio" == i || "checkbox" == i ? o.attr("checked", t(this).is(":checked")) : "text" == i ? o.attr("value", t(this).val()) : "select" == i ? t(this).find("option").each(function(e) {
                        t(this).is(":selected") && t("option", o).eq(e).attr("selected", !0)
                    }) : "textarea" == i && o.text(t(this).val())
                }), i
            },
            getPrintWindow: function() {
                switch (r.mode) {
                    case i.iframe:
                        var t = new s.Iframe;
                        return {
                            win: t.contentWindow || t,
                            doc: t.doc
                        };
                    case i.popup:
                        var e = new s.Popup;
                        return {
                            win: e,
                            doc: e.doc
                        }
                }
            },
            Iframe: function() {
                var e, i = r.id,
                    n = "border:0;position:absolute;width:0px;height:0px;right:0px;top:0px;";
                try {
                    e = document.createElement("iframe"), document.body.appendChild(e), t(e).attr({
                        style: n,
                        id: i,
                        src: "#" + (new Date).getTime()
                    }), e.doc = null, e.doc = e.contentDocument ? e.contentDocument : e.contentWindow ? e.contentWindow.document : e.document
                } catch (o) {
                    throw o + ". iframes may not be supported in this browser."
                }
                if (null == e.doc) throw "Cannot find document.";
                return e
            },
            Popup: function() {
                var t = "location=yes,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no";
                t += ",width=" + r.popWd + ",height=" + r.popHt, t += ",resizable=yes,screenX=" + r.popX + ",screenY=" + r.popY + ",personalbar=no,scrollbars=yes";
                var e = window.open("", "_blank", t);
                return e.doc = e.document, e
            }
        }
    }(jQuery), define("printArea", ["jquery"], function() {}), ! function(t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define("html2canvasRef", [], t);
        else {
            var e;
            "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.html2canvas = t()
        }
    }(function() {
        var t;
        return function e(t, i, n) {
            function o(s, a) {
                if (!i[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(s, !0);
                        if (r) return r(s, !0);
                        var c = new Error("Cannot find module '" + s + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var h = i[s] = {
                        exports: {}
                    };
                    t[s][0].call(h.exports, function(e) {
                        var i = t[s][1][e];
                        return o(i ? i : e)
                    }, h, h.exports, e, t, i, n)
                }
                return i[s].exports
            }
            for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
            return o
        }({
            1: [function(e, i, n) {
                (function(e) {
                    ! function(o) {
                        function r(t) {
                            throw RangeError(N[t])
                        }

                        function s(t, e) {
                            for (var i = t.length; i--;) t[i] = e(t[i]);
                            return t
                        }

                        function a(t, e) {
                            return s(t.split(j), e).join(".")
                        }

                        function l(t) {
                            for (var e, i, n = [], o = 0, r = t.length; r > o;) e = t.charCodeAt(o++), e >= 55296 && 56319 >= e && r > o ? (i = t.charCodeAt(o++), 56320 == (64512 & i) ? n.push(((1023 & e) << 10) + (1023 & i) + 65536) : (n.push(e), o--)) : n.push(e);
                            return n
                        }

                        function c(t) {
                            return s(t, function(t) {
                                var e = "";
                                return t > 65535 && (t -= 65536, e += k(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += k(t)
                            }).join("")
                        }

                        function h(t) {
                            return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : T
                        }

                        function p(t, e) {
                            return t + 22 + 75 * (26 > t) - ((0 != e) << 5)
                        }

                        function d(t, e, i) {
                            var n = 0;
                            for (t = i ? M(t / w) : t >> 1, t += M(t / e); t > L * S >> 1; n += T) t = M(t / L);
                            return M(n + (L + 1) * t / (t + D))
                        }

                        function u(t) {
                            var e, i, n, o, s, a, l, p, u, f, m = [],
                                g = t.length,
                                y = 0,
                                v = P,
                                b = I;
                            for (i = t.lastIndexOf(R), 0 > i && (i = 0), n = 0; i > n; ++n) t.charCodeAt(n) >= 128 && r("not-basic"), m.push(t.charCodeAt(n));
                            for (o = i > 0 ? i + 1 : 0; g > o;) {
                                for (s = y, a = 1, l = T; o >= g && r("invalid-input"), p = h(t.charCodeAt(o++)), (p >= T || p > M((_ - y) / a)) && r("overflow"), y += p * a, u = b >= l ? A : l >= b + S ? S : l - b, !(u > p); l += T) f = T - u, a > M(_ / f) && r("overflow"), a *= f;
                                e = m.length + 1, b = d(y - s, e, 0 == s), M(y / e) > _ - v && r("overflow"), v += M(y / e), y %= e, m.splice(y++, 0, v)
                            }
                            return c(m)
                        }

                        function f(t) {
                            var e, i, n, o, s, a, c, h, u, f, m, g, y, v, b, C = [];
                            for (t = l(t), g = t.length, e = P, i = 0, s = I, a = 0; g > a; ++a) m = t[a], 128 > m && C.push(k(m));
                            for (n = o = C.length, o && C.push(R); g > n;) {
                                for (c = _, a = 0; g > a; ++a) m = t[a], m >= e && c > m && (c = m);
                                for (y = n + 1, c - e > M((_ - i) / y) && r("overflow"), i += (c - e) * y, e = c, a = 0; g > a; ++a)
                                    if (m = t[a], e > m && ++i > _ && r("overflow"), m == e) {
                                        for (h = i, u = T; f = s >= u ? A : u >= s + S ? S : u - s, !(f > h); u += T) b = h - f, v = T - f, C.push(k(p(f + b % v, 0))), h = M(b / v);
                                        C.push(k(p(h, 0))), s = d(i, y, n == o), i = 0, ++n
                                    }++i, ++e
                            }
                            return C.join("")
                        }

                        function m(t) {
                            return a(t, function(t) {
                                return O.test(t) ? u(t.slice(4).toLowerCase()) : t
                            })
                        }

                        function g(t) {
                            return a(t, function(t) {
                                return x.test(t) ? "xn--" + f(t) : t
                            })
                        }
                        var y = "object" == typeof n && n,
                            v = "object" == typeof i && i && i.exports == y && i,
                            b = "object" == typeof e && e;
                        (b.global === b || b.window === b) && (o = b);
                        var C, E, _ = 2147483647,
                            T = 36,
                            A = 1,
                            S = 26,
                            D = 38,
                            w = 700,
                            I = 72,
                            P = 128,
                            R = "-",
                            O = /^xn--/,
                            x = /[^ -~]/,
                            j = /\x2E|\u3002|\uFF0E|\uFF61/g,
                            N = {
                                overflow: "Overflow: input needs wider integers to process",
                                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                "invalid-input": "Invalid input"
                            },
                            L = T - A,
                            M = Math.floor,
                            k = String.fromCharCode;
                        if (C = {
                                version: "1.2.4",
                                ucs2: {
                                    decode: l,
                                    encode: c
                                },
                                decode: u,
                                encode: f,
                                toASCII: g,
                                toUnicode: m
                            }, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function() {
                            return C
                        });
                        else if (y && !y.nodeType)
                            if (v) v.exports = C;
                            else
                                for (E in C) C.hasOwnProperty(E) && (y[E] = C[E]);
                        else o.punycode = C
                    }(this)
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            2: [function(t, e) {
                function i(t, e, i) {
                    !t.defaultView || e === t.defaultView.pageXOffset && i === t.defaultView.pageYOffset || t.defaultView.scrollTo(e, i)
                }

                function n(t, e) {
                    try {
                        e && (e.width = t.width, e.height = t.height, e.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0))
                    } catch (i) {
                        s("Unable to copy canvas content from", t, i)
                    }
                }

                function o(t, e) {
                    for (var i = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), r = t.firstChild; r;)(e === !0 || 1 !== r.nodeType || "SCRIPT" !== r.nodeName) && i.appendChild(o(r, e)), r = r.nextSibling;
                    return 1 === t.nodeType && (i._scrollTop = t.scrollTop, i._scrollLeft = t.scrollLeft, "CANVAS" === t.nodeName ? n(t, i) : ("TEXTAREA" === t.nodeName || "SELECT" === t.nodeName) && (i.value = t.value)), i
                }

                function r(t) {
                    if (1 === t.nodeType) {
                        t.scrollTop = t._scrollTop, t.scrollLeft = t._scrollLeft;
                        for (var e = t.firstChild; e;) r(e), e = e.nextSibling
                    }
                }
                var s = t("./log");
                e.exports = function(t, e, n, s, a, l, c) {
                    var h = o(t.documentElement, a.javascriptEnabled),
                        p = e.createElement("iframe");
                    return p.className = "html2canvas-container", p.style.visibility = "hidden", p.style.position = "fixed", p.style.left = "-10000px", p.style.top = "0px", p.style.border = "0", p.width = n, p.height = s, p.scrolling = "no", e.body.appendChild(p), new Promise(function(e) {
                        var n = p.contentWindow.document;
                        p.contentWindow.onload = p.onload = function() {
                            var t = setInterval(function() {
                                n.body.childNodes.length > 0 && (r(n.documentElement), clearInterval(t), "view" === a.type && (p.contentWindow.scrollTo(l, c), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || p.contentWindow.scrollY === c && p.contentWindow.scrollX === l || (n.documentElement.style.top = -c + "px", n.documentElement.style.left = -l + "px", n.documentElement.style.position = "absolute")), e(p))
                            }, 50)
                        }, n.open(), n.write("<!DOCTYPE html><html></html>"), i(t, l, c), n.replaceChild(n.adoptNode(h), n.documentElement), n.close()
                    })
                }
            }, {
                "./log": 13
            }],
            3: [function(t, e) {
                function i(t) {
                    this.r = 0, this.g = 0, this.b = 0, this.a = null;
                    this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t)
                }
                i.prototype.darken = function(t) {
                    var e = 1 - t;
                    return new i([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a])
                }, i.prototype.isTransparent = function() {
                    return 0 === this.a
                }, i.prototype.isBlack = function() {
                    return 0 === this.r && 0 === this.g && 0 === this.b
                }, i.prototype.fromArray = function(t) {
                    return Array.isArray(t) && (this.r = Math.min(t[0], 255), this.g = Math.min(t[1], 255), this.b = Math.min(t[2], 255), t.length > 3 && (this.a = t[3])), Array.isArray(t)
                };
                var n = /^#([a-f0-9]{3})$/i;
                i.prototype.hex3 = function(t) {
                    var e = null;
                    return null !== (e = t.match(n)) && (this.r = parseInt(e[1][0] + e[1][0], 16), this.g = parseInt(e[1][1] + e[1][1], 16), this.b = parseInt(e[1][2] + e[1][2], 16)), null !== e
                };
                var o = /^#([a-f0-9]{6})$/i;
                i.prototype.hex6 = function(t) {
                    var e = null;
                    return null !== (e = t.match(o)) && (this.r = parseInt(e[1].substring(0, 2), 16), this.g = parseInt(e[1].substring(2, 4), 16), this.b = parseInt(e[1].substring(4, 6), 16)), null !== e
                };
                var r = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
                i.prototype.rgb = function(t) {
                    var e = null;
                    return null !== (e = t.match(r)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3])), null !== e
                };
                var s = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
                i.prototype.rgba = function(t) {
                    var e = null;
                    return null !== (e = t.match(s)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3]), this.a = Number(e[4])), null !== e
                }, i.prototype.toString = function() {
                    return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")"
                }, i.prototype.namedColor = function(t) {
                    t = t.toLowerCase();
                    var e = a[t];
                    if (e) this.r = e[0], this.g = e[1], this.b = e[2];
                    else if ("transparent" === t) return this.r = this.g = this.b = this.a = 0, !0;
                    return !!e
                }, i.prototype.isColor = !0;
                var a = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                };
                e.exports = i
            }, {}],
            4: [function(e, i) {
                function n(t, e) {
                    var i = _++;
                    if (e = e || {}, e.logging && (g.options.logging = !0, g.options.start = Date.now()), e.async = "undefined" == typeof e.async ? !0 : e.async, e.allowTaint = "undefined" == typeof e.allowTaint ? !1 : e.allowTaint, e.removeContainer = "undefined" == typeof e.removeContainer ? !0 : e.removeContainer, e.javascriptEnabled = "undefined" == typeof e.javascriptEnabled ? !1 : e.javascriptEnabled, e.imageTimeout = "undefined" == typeof e.imageTimeout ? 1e4 : e.imageTimeout, e.renderer = "function" == typeof e.renderer ? e.renderer : d, e.strict = !!e.strict, "string" == typeof t) {
                        if ("string" != typeof e.proxy) return Promise.reject("Proxy must be used when rendering url");
                        var n = null != e.width ? e.width : window.innerWidth,
                            s = null != e.height ? e.height : window.innerHeight;
                        return b(h(t), e.proxy, document, n, s, e).then(function(t) {
                            return r(t.contentWindow.document.documentElement, t, e, n, s)
                        })
                    }
                    var a = (void 0 === t ? [document.documentElement] : t.length ? t : [t])[0];
                    return a.setAttribute(E + i, i), o(a.ownerDocument, e, a.ownerDocument.defaultView.innerWidth, a.ownerDocument.defaultView.innerHeight, i).then(function(t) {
                        return "function" == typeof e.onrendered && (g("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), e.onrendered(t)), t
                    })
                }

                function o(t, e, i, n, o) {
                    return v(t, t, i, n, e, t.defaultView.pageXOffset, t.defaultView.pageYOffset).then(function(s) {
                        g("Document cloned");
                        var a = E + o,
                            l = "[" + a + "='" + o + "']";
                        t.querySelector(l).removeAttribute(a);
                        var c = s.contentWindow,
                            h = c.document.querySelector(l),
                            p = "function" == typeof e.onclone ? Promise.resolve(e.onclone(c.document)) : Promise.resolve(!0);
                        return p.then(function() {
                            return r(h, s, e, i, n)
                        })
                    })
                }

                function r(t, e, i, n, o) {
                    var r = e.contentWindow,
                        h = new p(r.document),
                        d = new u(i, h),
                        m = C(t),
                        y = "view" === i.type ? n : l(r.document),
                        v = "view" === i.type ? o : c(r.document),
                        b = new i.renderer(y, v, d, i, document),
                        E = new f(t, b, h, d, i);
                    return E.ready.then(function() {
                        g("Finished rendering");
                        var n;
                        return n = "view" === i.type ? a(b.canvas, {
                            width: b.canvas.width,
                            height: b.canvas.height,
                            top: 0,
                            left: 0,
                            x: 0,
                            y: 0
                        }) : t === r.document.body || t === r.document.documentElement || null != i.canvas ? b.canvas : a(b.canvas, {
                            width: null != i.width ? i.width : m.width,
                            height: null != i.height ? i.height : m.height,
                            top: m.top,
                            left: m.left,
                            x: 0,
                            y: 0
                        }), s(e, i), n
                    })
                }

                function s(t, e) {
                    e.removeContainer && (t.parentNode.removeChild(t), g("Cleaned up container"))
                }

                function a(t, e) {
                    var i = document.createElement("canvas"),
                        n = Math.min(t.width - 1, Math.max(0, e.left)),
                        o = Math.min(t.width, Math.max(1, e.left + e.width)),
                        r = Math.min(t.height - 1, Math.max(0, e.top)),
                        s = Math.min(t.height, Math.max(1, e.top + e.height));
                    i.width = e.width, i.height = e.height;
                    var a = o - n,
                        l = s - r;
                    return g("Cropping canvas at:", "left:", e.left, "top:", e.top, "width:", a, "height:", l), g("Resulting crop with width", e.width, "and height", e.height, "with x", n, "and y", r), i.getContext("2d").drawImage(t, n, r, a, l, e.x, e.y, a, l), i
                }

                function l(t) {
                    return Math.max(Math.max(t.body.scrollWidth, t.documentElement.scrollWidth), Math.max(t.body.offsetWidth, t.documentElement.offsetWidth), Math.max(t.body.clientWidth, t.documentElement.clientWidth))
                }

                function c(t) {
                    return Math.max(Math.max(t.body.scrollHeight, t.documentElement.scrollHeight), Math.max(t.body.offsetHeight, t.documentElement.offsetHeight), Math.max(t.body.clientHeight, t.documentElement.clientHeight))
                }

                function h(t) {
                    var e = document.createElement("a");
                    return e.href = t, e.href = e.href, e
                }
                var p = e("./support"),
                    d = e("./renderers/canvas"),
                    u = e("./imageloader"),
                    f = e("./nodeparser"),
                    m = e("./nodecontainer"),
                    g = e("./log"),
                    y = e("./utils"),
                    v = e("./clone"),
                    b = e("./proxy").loadUrlDocument,
                    C = y.getBounds,
                    E = "data-html2canvas-node",
                    _ = 0;
                n.CanvasRenderer = d, n.NodeContainer = m, n.log = g, n.utils = y;
                var T = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ? function() {
                    return Promise.reject("No canvas support")
                } : n;
                i.exports = T, "function" == typeof t && t.amd && t("html2canvas", [], function() {
                    return T
                })
            }, {
                "./clone": 2,
                "./imageloader": 11,
                "./log": 13,
                "./nodecontainer": 14,
                "./nodeparser": 15,
                "./proxy": 16,
                "./renderers/canvas": 20,
                "./support": 22,
                "./utils": 26
            }],
            5: [function(t, e) {
                function i(t) {
                    if (this.src = t, n("DummyImageContainer for", t), !this.promise || !this.image) {
                        n("Initiating DummyImageContainer"), i.prototype.image = new Image;
                        var e = this.image;
                        i.prototype.promise = new Promise(function(t, i) {
                            e.onload = t, e.onerror = i, e.src = o(), e.complete === !0 && t(e)
                        })
                    }
                }
                var n = t("./log"),
                    o = t("./utils").smallImage;
                e.exports = i
            }, {
                "./log": 13,
                "./utils": 26
            }],
            6: [function(t, e) {
                function i(t, e) {
                    var i, o, r = document.createElement("div"),
                        s = document.createElement("img"),
                        a = document.createElement("span"),
                        l = "Hidden Text";
                    r.style.visibility = "hidden", r.style.fontFamily = t, r.style.fontSize = e, r.style.margin = 0, r.style.padding = 0, document.body.appendChild(r), s.src = n(), s.width = 1, s.height = 1, s.style.margin = 0, s.style.padding = 0, s.style.verticalAlign = "baseline", a.style.fontFamily = t, a.style.fontSize = e, a.style.margin = 0, a.style.padding = 0, a.appendChild(document.createTextNode(l)), r.appendChild(a), r.appendChild(s), i = s.offsetTop - a.offsetTop + 1, r.removeChild(a), r.appendChild(document.createTextNode(l)), r.style.lineHeight = "normal", s.style.verticalAlign = "super", o = s.offsetTop - r.offsetTop + 1, document.body.removeChild(r), this.baseline = i, this.lineWidth = 1, this.middle = o
                }
                var n = t("./utils").smallImage;
                e.exports = i
            }, {
                "./utils": 26
            }],
            7: [function(t, e) {
                function i() {
                    this.data = {}
                }
                var n = t("./font");
                i.prototype.getMetrics = function(t, e) {
                    return void 0 === this.data[t + "-" + e] && (this.data[t + "-" + e] = new n(t, e)), this.data[t + "-" + e]
                }, e.exports = i
            }, {
                "./font": 6
            }],
            8: [function(t, e) {
                function i(e, i, n) {
                    this.image = null, this.src = e;
                    var r = this,
                        s = o(e);
                    this.promise = (i ? new Promise(function(t) {
                        "about:blank" === e.contentWindow.document.URL || null == e.contentWindow.document.documentElement ? e.contentWindow.onload = e.onload = function() {
                            t(e)
                        } : t(e)
                    }) : this.proxyLoad(n.proxy, s, n)).then(function(e) {
                        var i = t("./core");
                        return i(e.contentWindow.document.documentElement, {
                            type: "view",
                            width: e.width,
                            height: e.height,
                            proxy: n.proxy,
                            javascriptEnabled: n.javascriptEnabled,
                            removeContainer: n.removeContainer,
                            allowTaint: n.allowTaint,
                            imageTimeout: n.imageTimeout / 2
                        })
                    }).then(function(t) {
                        return r.image = t
                    })
                }
                var n = t("./utils"),
                    o = n.getBounds,
                    r = t("./proxy").loadUrlDocument;
                i.prototype.proxyLoad = function(t, e, i) {
                    var n = this.src;
                    return r(n.src, t, n.ownerDocument, e.width, e.height, i)
                }, e.exports = i
            }, {
                "./core": 4,
                "./proxy": 16,
                "./utils": 26
            }],
            9: [function(t, e) {
                function i(t) {
                    this.src = t.value, this.colorStops = [], this.type = null, this.x0 = .5, this.y0 = .5, this.x1 = .5, this.y1 = .5, this.promise = Promise.resolve(!0)
                }
                i.TYPES = {
                    LINEAR: 1,
                    RADIAL: 2
                }, i.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i, e.exports = i
            }, {}],
            10: [function(t, e) {
                function i(t, e) {
                    this.src = t, this.image = new Image;
                    var i = this;
                    this.tainted = null, this.promise = new Promise(function(n, o) {
                        i.image.onload = n, i.image.onerror = o, e && (i.image.crossOrigin = "anonymous"), i.image.src = t, i.image.complete === !0 && n(i.image)
                    })
                }
                e.exports = i
            }, {}],
            11: [function(t, e) {
                function i(t, e) {
                    this.link = null, this.options = t, this.support = e, this.origin = this.getOrigin(window.location.href)
                }
                var n = t("./log"),
                    o = t("./imagecontainer"),
                    r = t("./dummyimagecontainer"),
                    s = t("./proxyimagecontainer"),
                    a = t("./framecontainer"),
                    l = t("./svgcontainer"),
                    c = t("./svgnodecontainer"),
                    h = t("./lineargradientcontainer"),
                    p = t("./webkitgradientcontainer"),
                    d = t("./utils").bind;
                i.prototype.findImages = function(t) {
                    var e = [];
                    return t.reduce(function(t, e) {
                        switch (e.node.nodeName) {
                            case "IMG":
                                return t.concat([{
                                    args: [e.node.src],
                                    method: "url"
                                }]);
                            case "svg":
                            case "IFRAME":
                                return t.concat([{
                                    args: [e.node],
                                    method: e.node.nodeName
                                }])
                        }
                        return t
                    }, []).forEach(this.addImage(e, this.loadImage), this), e
                }, i.prototype.findBackgroundImage = function(t, e) {
                    return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this), t
                }, i.prototype.addImage = function(t, e) {
                    return function(i) {
                        i.args.forEach(function(o) {
                            this.imageExists(t, o) || (t.splice(0, 0, e.call(this, i)), n("Added image #" + t.length, "string" == typeof o ? o.substring(0, 100) : o))
                        }, this)
                    }
                }, i.prototype.hasImageBackground = function(t) {
                    return "none" !== t.method
                }, i.prototype.loadImage = function(t) {
                    if ("url" === t.method) {
                        var e = t.args[0];
                        return !this.isSVG(e) || this.support.svg || this.options.allowTaint ? e.match(/data:image\/.*;base64,/i) ? new o(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1) : this.isSameOrigin(e) || this.options.allowTaint === !0 || this.isSVG(e) ? new o(e, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new o(e, !0) : this.options.proxy ? new s(e, this.options.proxy) : new r(e) : new l(e)
                    }
                    return "linear-gradient" === t.method ? new h(t) : "gradient" === t.method ? new p(t) : "svg" === t.method ? new c(t.args[0], this.support.svg) : "IFRAME" === t.method ? new a(t.args[0], this.isSameOrigin(t.args[0].src), this.options) : new r(t)
                }, i.prototype.isSVG = function(t) {
                    return "svg" === t.substring(t.length - 3).toLowerCase() || l.prototype.isInline(t)
                }, i.prototype.imageExists = function(t, e) {
                    return t.some(function(t) {
                        return t.src === e
                    })
                }, i.prototype.isSameOrigin = function(t) {
                    return this.getOrigin(t) === this.origin
                }, i.prototype.getOrigin = function(t) {
                    var e = this.link || (this.link = document.createElement("a"));
                    return e.href = t, e.href = e.href, e.protocol + e.hostname + e.port
                }, i.prototype.getPromise = function(t) {
                    return this.timeout(t, this.options.imageTimeout)["catch"](function() {
                        var e = new r(t.src);
                        return e.promise.then(function(e) {
                            t.image = e
                        })
                    })
                }, i.prototype.get = function(t) {
                    var e = null;
                    return this.images.some(function(i) {
                        return (e = i).src === t
                    }) ? e : null
                }, i.prototype.fetch = function(t) {
                    return this.images = t.reduce(d(this.findBackgroundImage, this), this.findImages(t)), this.images.forEach(function(t, e) {
                        t.promise.then(function() {
                            n("Succesfully loaded image #" + (e + 1), t)
                        }, function(i) {
                            n("Failed loading image #" + (e + 1), t, i)
                        })
                    }), this.ready = Promise.all(this.images.map(this.getPromise, this)), n("Finished searching images"), this
                }, i.prototype.timeout = function(t, e) {
                    var i, o = Promise.race([t.promise, new Promise(function(o, r) {
                        i = setTimeout(function() {
                            n("Timed out loading image", t), r(t)
                        }, e)
                    })]).then(function(t) {
                        return clearTimeout(i), t
                    });
                    return o["catch"](function() {
                        clearTimeout(i)
                    }), o
                }, e.exports = i
            }, {
                "./dummyimagecontainer": 5,
                "./framecontainer": 8,
                "./imagecontainer": 10,
                "./lineargradientcontainer": 12,
                "./log": 13,
                "./proxyimagecontainer": 17,
                "./svgcontainer": 23,
                "./svgnodecontainer": 24,
                "./utils": 26,
                "./webkitgradientcontainer": 27
            }],
            12: [function(t, e) {
                function i(t) {
                    n.apply(this, arguments), this.type = n.TYPES.LINEAR;
                    var e = i.REGEXP_DIRECTION.test(t.args[0]) || !n.REGEXP_COLORSTOP.test(t.args[0]);
                    e ? t.args[0].split(/\s+/).reverse().forEach(function(t, e) {
                        switch (t) {
                            case "left":
                                this.x0 = 0, this.x1 = 1;
                                break;
                            case "top":
                                this.y0 = 0, this.y1 = 1;
                                break;
                            case "right":
                                this.x0 = 1, this.x1 = 0;
                                break;
                            case "bottom":
                                this.y0 = 1, this.y1 = 0;
                                break;
                            case "to":
                                var i = this.y0,
                                    n = this.x0;
                                this.y0 = this.y1, this.x0 = this.x1, this.x1 = n, this.y1 = i;
                                break;
                            case "center":
                                break;
                            default:
                                var o = .01 * parseFloat(t, 10);
                                if (isNaN(o)) break;
                                0 === e ? (this.y0 = o, this.y1 = 1 - this.y0) : (this.x0 = o, this.x1 = 1 - this.x0)
                        }
                    }, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = t.args.slice(e ? 1 : 0).map(function(t) {
                        var e = t.match(n.REGEXP_COLORSTOP),
                            i = +e[2],
                            r = 0 === i ? "%" : e[3];
                        return {
                            color: new o(e[1]),
                            stop: "%" === r ? i / 100 : null
                        }
                    }), null === this.colorStops[0].stop && (this.colorStops[0].stop = 0), null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function(t, e) {
                        null === t.stop && this.colorStops.slice(e).some(function(i, n) {
                            return null !== i.stop ? (t.stop = (i.stop - this.colorStops[e - 1].stop) / (n + 1) + this.colorStops[e - 1].stop, !0) : !1
                        }, this)
                    }, this)
                }
                var n = t("./gradientcontainer"),
                    o = t("./color");
                i.prototype = Object.create(n.prototype), i.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i, e.exports = i
            }, {
                "./color": 3,
                "./gradientcontainer": 9
            }],
            13: [function(t, e) {
                var i = function() {
                    i.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - i.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
                };
                i.options = {
                    logging: !1
                }, e.exports = i
            }, {}],
            14: [function(t, e) {
                function i(t, e) {
                    this.node = t, this.parent = e, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = !1, this.opacity = null
                }

                function n(t) {
                    var e = t.options[t.selectedIndex || 0];
                    return e ? e.text || "" : ""
                }

                function o(t) {
                    if (t && "matrix" === t[1]) return t[2].split(",").map(function(t) {
                        return parseFloat(t.trim())
                    });
                    if (t && "matrix3d" === t[1]) {
                        var e = t[2].split(",").map(function(t) {
                            return parseFloat(t.trim())
                        });
                        return [e[0], e[1], e[4], e[5], e[12], e[13]]
                    }
                }

                function r(t) {
                    return -1 !== t.toString().indexOf("%")
                }

                function s(t) {
                    return t.replace("px", "")
                }

                function a(t) {
                    return parseFloat(t)
                }
                var l = t("./color"),
                    c = t("./utils"),
                    h = c.getBounds,
                    p = c.parseBackgrounds,
                    d = c.offsetBounds;
                i.prototype.cloneTo = function(t) {
                    t.visible = this.visible, t.borders = this.borders, t.bounds = this.bounds, t.clip = this.clip, t.backgroundClip = this.backgroundClip, t.computedStyles = this.computedStyles, t.styles = this.styles, t.backgroundImages = this.backgroundImages, t.opacity = this.opacity
                }, i.prototype.getOpacity = function() {
                    return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
                }, i.prototype.assignStack = function(t) {
                    this.stack = t, t.children.push(this)
                }, i.prototype.isElementVisible = function() {
                    return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
                }, i.prototype.css = function(t) {
                    return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[t] || (this.styles[t] = this.computedStyles[t])
                }, i.prototype.prefixedCss = function(t) {
                    var e = ["webkit", "moz", "ms", "o"],
                        i = this.css(t);
                    return void 0 === i && e.some(function(e) {
                        return i = this.css(e + t.substr(0, 1).toUpperCase() + t.substr(1)), void 0 !== i
                    }, this), void 0 === i ? null : i
                }, i.prototype.computedStyle = function(t) {
                    return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t)
                }, i.prototype.cssInt = function(t) {
                    var e = parseInt(this.css(t), 10);
                    return isNaN(e) ? 0 : e
                }, i.prototype.color = function(t) {
                    return this.colors[t] || (this.colors[t] = new l(this.css(t)))
                }, i.prototype.cssFloat = function(t) {
                    var e = parseFloat(this.css(t));
                    return isNaN(e) ? 0 : e
                }, i.prototype.fontWeight = function() {
                    var t = this.css("fontWeight");
                    switch (parseInt(t, 10)) {
                        case 401:
                            t = "bold";
                            break;
                        case 400:
                            t = "normal"
                    }
                    return t
                }, i.prototype.parseClip = function() {
                    var t = this.css("clip").match(this.CLIP);
                    return t ? {
                        top: parseInt(t[1], 10),
                        right: parseInt(t[2], 10),
                        bottom: parseInt(t[3], 10),
                        left: parseInt(t[4], 10)
                    } : null
                }, i.prototype.parseBackgroundImages = function() {
                    return this.backgroundImages || (this.backgroundImages = p(this.css("backgroundImage")))
                }, i.prototype.cssList = function(t, e) {
                    var i = (this.css(t) || "").split(",");
                    return i = i[e || 0] || i[0] || "auto", i = i.trim().split(" "), 1 === i.length && (i = [i[0], r(i[0]) ? "auto" : i[0]]), i
                }, i.prototype.parseBackgroundSize = function(t, e, i) {
                    var n, o, s = this.cssList("backgroundSize", i);
                    if (r(s[0])) n = t.width * parseFloat(s[0]) / 100;
                    else {
                        if (/contain|cover/.test(s[0])) {
                            var a = t.width / t.height,
                                l = e.width / e.height;
                            return l > a ^ "contain" === s[0] ? {
                                width: t.height * l,
                                height: t.height
                            } : {
                                width: t.width,
                                height: t.width / l
                            }
                        }
                        n = parseInt(s[0], 10)
                    }
                    return o = "auto" === s[0] && "auto" === s[1] ? e.height : "auto" === s[1] ? n / e.width * e.height : r(s[1]) ? t.height * parseFloat(s[1]) / 100 : parseInt(s[1], 10), "auto" === s[0] && (n = o / e.height * e.width), {
                        width: n,
                        height: o
                    }
                }, i.prototype.parseBackgroundPosition = function(t, e, i, n) {
                    var o, s, a = this.cssList("backgroundPosition", i);
                    return o = r(a[0]) ? (t.width - (n || e).width) * (parseFloat(a[0]) / 100) : parseInt(a[0], 10), s = "auto" === a[1] ? o / e.width * e.height : r(a[1]) ? (t.height - (n || e).height) * parseFloat(a[1]) / 100 : parseInt(a[1], 10), "auto" === a[0] && (o = s / e.height * e.width), {
                        left: o,
                        top: s
                    }
                }, i.prototype.parseBackgroundRepeat = function(t) {
                    return this.cssList("backgroundRepeat", t)[0]
                }, i.prototype.parseTextShadows = function() {
                    var t = this.css("textShadow"),
                        e = [];
                    if (t && "none" !== t)
                        for (var i = t.match(this.TEXT_SHADOW_PROPERTY), n = 0; i && n < i.length; n++) {
                            var o = i[n].match(this.TEXT_SHADOW_VALUES);
                            e.push({
                                color: new l(o[0]),
                                offsetX: o[1] ? parseFloat(o[1].replace("px", "")) : 0,
                                offsetY: o[2] ? parseFloat(o[2].replace("px", "")) : 0,
                                blur: o[3] ? o[3].replace("px", "") : 0
                            })
                        }
                    return e
                }, i.prototype.parseTransform = function() {
                    if (!this.transformData)
                        if (this.hasTransform()) {
                            var t = this.parseBounds(),
                                e = this.prefixedCss("transformOrigin").split(" ").map(s).map(a);
                            e[0] += t.left, e[1] += t.top, this.transformData = {
                                origin: e,
                                matrix: this.parseTransformMatrix()
                            }
                        } else this.transformData = {
                            origin: [0, 0],
                            matrix: [1, 0, 0, 1, 0, 0]
                        };
                    return this.transformData
                }, i.prototype.parseTransformMatrix = function() {
                    if (!this.transformMatrix) {
                        var t = this.prefixedCss("transform"),
                            e = t ? o(t.match(this.MATRIX_PROPERTY)) : null;
                        this.transformMatrix = e ? e : [1, 0, 0, 1, 0, 0]
                    }
                    return this.transformMatrix
                }, i.prototype.parseBounds = function() {
                    return this.bounds || (this.bounds = this.hasTransform() ? d(this.node) : h(this.node))
                }, i.prototype.hasTransform = function() {
                    return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
                }, i.prototype.getValue = function() {
                    var t = this.node.value || "";
                    return "SELECT" === this.node.tagName ? t = n(this.node) : "password" === this.node.type && (t = Array(t.length + 1).join("â€¢")), 0 === t.length ? this.node.placeholder || "" : t
                }, i.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/, i.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, i.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, i.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, e.exports = i
            }, {
                "./color": 3,
                "./utils": 26
            }],
            15: [function(t, e) {
                function i(t, e, i, n, o) {
                    V("Starting NodeParser"), this.renderer = e, this.options = o, this.range = null, this.support = i, this.renderQueue = [], this.stack = new Y(!0, 1, t.ownerDocument, null);
                    var r = new U(t, null);
                    if (o.background && e.rectangle(0, 0, e.width, e.height, new W(o.background)), t === t.ownerDocument.documentElement) {
                        var s = new U(r.color("backgroundColor").isTransparent() ? t.ownerDocument.body : t.ownerDocument.documentElement, null);
                        e.rectangle(0, 0, e.width, e.height, s.color("backgroundColor"))
                    }
                    r.visibile = r.isElementVisible(), this.createPseudoHideStyles(t.ownerDocument), this.disableAnimations(t.ownerDocument), this.nodes = N([r].concat(this.getChildren(r)).filter(function(t) {
                        return t.visible = t.isElementVisible()
                    }).map(this.getPseudoElements, this)), this.fontMetrics = new z, V("Fetched nodes, total:", this.nodes.length), V("Calculate overflow clips"), this.calculateOverflowClips(), V("Start fetching images"), this.images = n.fetch(this.nodes.filter(D)), this.ready = this.images.ready.then(q(function() {
                        return V("Images loaded, starting parsing"), V("Creating stacking contexts"), this.createStackingContexts(), V("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), V("Render queue created with " + this.renderQueue.length + " items"), new Promise(q(function(t) {
                            o.async ? "function" == typeof o.async ? o.async.call(this, this.renderQueue, t) : this.renderQueue.length > 0 ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, t)) : t() : (this.renderQueue.forEach(this.paint, this), t())
                        }, this))
                    }, this))
                }

                function n(t) {
                    return t.parent && t.parent.clip.length
                }

                function o(t) {
                    return t.replace(/(\-[a-z])/g, function(t) {
                        return t.toUpperCase().replace("-", "")
                    })
                }

                function r() {}

                function s(t, e, i, n) {
                    return t.map(function(o, r) {
                        if (o.width > 0) {
                            var s = e.left,
                                a = e.top,
                                l = e.width,
                                c = e.height - t[2].width;
                            switch (r) {
                                case 0:
                                    c = t[0].width, o.args = h({
                                        c1: [s, a],
                                        c2: [s + l, a],
                                        c3: [s + l - t[1].width, a + c],
                                        c4: [s + t[3].width, a + c]
                                    }, n[0], n[1], i.topLeftOuter, i.topLeftInner, i.topRightOuter, i.topRightInner);
                                    break;
                                case 1:
                                    s = e.left + e.width - t[1].width, l = t[1].width, o.args = h({
                                        c1: [s + l, a],
                                        c2: [s + l, a + c + t[2].width],
                                        c3: [s, a + c],
                                        c4: [s, a + t[0].width]
                                    }, n[1], n[2], i.topRightOuter, i.topRightInner, i.bottomRightOuter, i.bottomRightInner);
                                    break;
                                case 2:
                                    a = a + e.height - t[2].width, c = t[2].width, o.args = h({
                                        c1: [s + l, a + c],
                                        c2: [s, a + c],
                                        c3: [s + t[3].width, a],
                                        c4: [s + l - t[3].width, a]
                                    }, n[2], n[3], i.bottomRightOuter, i.bottomRightInner, i.bottomLeftOuter, i.bottomLeftInner);
                                    break;
                                case 3:
                                    l = t[3].width, o.args = h({
                                        c1: [s, a + c + t[2].width],
                                        c2: [s, a],
                                        c3: [s + l, a + t[0].width],
                                        c4: [s + l, a + c]
                                    }, n[3], n[0], i.bottomLeftOuter, i.bottomLeftInner, i.topLeftOuter, i.topLeftInner)
                            }
                        }
                        return o
                    })
                }

                function a(t, e, i, n) {
                    var o = 4 * ((Math.sqrt(2) - 1) / 3),
                        r = i * o,
                        s = n * o,
                        a = t + i,
                        l = e + n;
                    return {
                        topLeft: c({
                            x: t,
                            y: l
                        }, {
                            x: t,
                            y: l - s
                        }, {
                            x: a - r,
                            y: e
                        }, {
                            x: a,
                            y: e
                        }),
                        topRight: c({
                            x: t,
                            y: e
                        }, {
                            x: t + r,
                            y: e
                        }, {
                            x: a,
                            y: l - s
                        }, {
                            x: a,
                            y: l
                        }),
                        bottomRight: c({
                            x: a,
                            y: e
                        }, {
                            x: a,
                            y: e + s
                        }, {
                            x: t + r,
                            y: l
                        }, {
                            x: t,
                            y: l
                        }),
                        bottomLeft: c({
                            x: a,
                            y: l
                        }, {
                            x: a - r,
                            y: l
                        }, {
                            x: t,
                            y: e + s
                        }, {
                            x: t,
                            y: e
                        })
                    }
                }

                function l(t, e, i) {
                    var n = t.left,
                        o = t.top,
                        r = t.width,
                        s = t.height,
                        l = e[0][0] < r / 2 ? e[0][0] : r / 2,
                        c = e[0][1] < s / 2 ? e[0][1] : s / 2,
                        h = e[1][0] < r / 2 ? e[1][0] : r / 2,
                        p = e[1][1] < s / 2 ? e[1][1] : s / 2,
                        d = e[2][0] < r / 2 ? e[2][0] : r / 2,
                        u = e[2][1] < s / 2 ? e[2][1] : s / 2,
                        f = e[3][0] < r / 2 ? e[3][0] : r / 2,
                        m = e[3][1] < s / 2 ? e[3][1] : s / 2,
                        g = r - h,
                        y = s - u,
                        v = r - d,
                        b = s - m;
                    return {
                        topLeftOuter: a(n, o, l, c).topLeft.subdivide(.5),
                        topLeftInner: a(n + i[3].width, o + i[0].width, Math.max(0, l - i[3].width), Math.max(0, c - i[0].width)).topLeft.subdivide(.5),
                        topRightOuter: a(n + g, o, h, p).topRight.subdivide(.5),
                        topRightInner: a(n + Math.min(g, r + i[3].width), o + i[0].width, g > r + i[3].width ? 0 : h - i[3].width, p - i[0].width).topRight.subdivide(.5),
                        bottomRightOuter: a(n + v, o + y, d, u).bottomRight.subdivide(.5),
                        bottomRightInner: a(n + Math.min(v, r - i[3].width), o + Math.min(y, s + i[0].width), Math.max(0, d - i[1].width), u - i[2].width).bottomRight.subdivide(.5),
                        bottomLeftOuter: a(n, o + b, f, m).bottomLeft.subdivide(.5),
                        bottomLeftInner: a(n + i[3].width, o + b, Math.max(0, f - i[3].width), m - i[2].width).bottomLeft.subdivide(.5)
                    }
                }

                function c(t, e, i, n) {
                    var o = function(t, e, i) {
                        return {
                            x: t.x + (e.x - t.x) * i,
                            y: t.y + (e.y - t.y) * i
                        }
                    };
                    return {
                        start: t,
                        startControl: e,
                        endControl: i,
                        end: n,
                        subdivide: function(r) {
                            var s = o(t, e, r),
                                a = o(e, i, r),
                                l = o(i, n, r),
                                h = o(s, a, r),
                                p = o(a, l, r),
                                d = o(h, p, r);
                            return [c(t, s, h, d), c(d, p, l, n)]
                        },
                        curveTo: function(t) {
                            t.push(["bezierCurve", e.x, e.y, i.x, i.y, n.x, n.y])
                        },
                        curveToReversed: function(n) {
                            n.push(["bezierCurve", i.x, i.y, e.x, e.y, t.x, t.y])
                        }
                    }
                }

                function h(t, e, i, n, o, r, s) {
                    var a = [];
                    return e[0] > 0 || e[1] > 0 ? (a.push(["line", n[1].start.x, n[1].start.y]), n[1].curveTo(a)) : a.push(["line", t.c1[0], t.c1[1]]), i[0] > 0 || i[1] > 0 ? (a.push(["line", r[0].start.x, r[0].start.y]), r[0].curveTo(a), a.push(["line", s[0].end.x, s[0].end.y]), s[0].curveToReversed(a)) : (a.push(["line", t.c2[0], t.c2[1]]), a.push(["line", t.c3[0], t.c3[1]])), e[0] > 0 || e[1] > 0 ? (a.push(["line", o[1].end.x, o[1].end.y]), o[1].curveToReversed(a)) : a.push(["line", t.c4[0], t.c4[1]]), a
                }

                function p(t, e, i, n, o, r, s) {
                    e[0] > 0 || e[1] > 0 ? (t.push(["line", n[0].start.x, n[0].start.y]), n[0].curveTo(t), n[1].curveTo(t)) : t.push(["line", r, s]), (i[0] > 0 || i[1] > 0) && t.push(["line", o[0].start.x, o[0].start.y])
                }

                function d(t) {
                    return t.cssInt("zIndex") < 0
                }

                function u(t) {
                    return t.cssInt("zIndex") > 0
                }

                function f(t) {
                    return 0 === t.cssInt("zIndex")
                }

                function m(t) {
                    return -1 !== ["inline", "inline-block", "inline-table"].indexOf(t.css("display"))
                }

                function g(t) {
                    return t instanceof Y
                }

                function y(t) {
                    return t.node.data.trim().length > 0
                }

                function v(t) {
                    return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))
                }

                function b(t) {
                    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(e) {
                        var i = t.css("border" + e + "Radius"),
                            n = i.split(" ");
                        return n.length <= 1 && (n[1] = n[0]), n.map(O)
                    })
                }

                function C(t) {
                    return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE
                }

                function E(t) {
                    var e = t.css("position"),
                        i = -1 !== ["absolute", "relative", "fixed"].indexOf(e) ? t.css("zIndex") : "auto";
                    return "auto" !== i
                }

                function _(t) {
                    return "static" !== t.css("position")
                }

                function T(t) {
                    return "none" !== t.css("float")
                }

                function A(t) {
                    return -1 !== ["inline-block", "inline-table"].indexOf(t.css("display"))
                }

                function S(t) {
                    var e = this;
                    return function() {
                        return !t.apply(e, arguments)
                    }
                }

                function D(t) {
                    return t.node.nodeType === Node.ELEMENT_NODE
                }

                function w(t) {
                    return t.isPseudoElement === !0
                }

                function I(t) {
                    return t.node.nodeType === Node.TEXT_NODE
                }

                function P(t) {
                    return function(e, i) {
                        return e.cssInt("zIndex") + t.indexOf(e) / t.length - (i.cssInt("zIndex") + t.indexOf(i) / t.length)
                    }
                }

                function R(t) {
                    return t.getOpacity() < 1
                }

                function O(t) {
                    return parseInt(t, 10)
                }

                function x(t) {
                    return t.width
                }

                function j(t) {
                    return t.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName)
                }

                function N(t) {
                    return [].concat.apply([], t)
                }

                function L(t) {
                    var e = t.substr(0, 1);
                    return e === t.substr(t.length - 1) && e.match(/'|"/) ? t.substr(1, t.length - 2) : t
                }

                function M(t) {
                    for (var e, i = [], n = 0, o = !1; t.length;) k(t[n]) === o ? (e = t.splice(0, n), e.length && i.push(B.ucs2.encode(e)), o = !o, n = 0) : n++, n >= t.length && (e = t.splice(0, n), e.length && i.push(B.ucs2.encode(e)));
                    return i
                }

                function k(t) {
                    return -1 !== [32, 13, 10, 9, 45].indexOf(t)
                }

                function H(t) {
                    return /[^\u0000-\u00ff]/.test(t)
                }
                var V = t("./log"),
                    B = t("punycode"),
                    U = t("./nodecontainer"),
                    $ = t("./textcontainer"),
                    F = t("./pseudoelementcontainer"),
                    z = t("./fontmetrics"),
                    W = t("./color"),
                    Y = t("./stackingcontext"),
                    G = t("./utils"),
                    q = G.bind,
                    J = G.getBounds,
                    X = G.parseBackgrounds,
                    K = G.offsetBounds;
                i.prototype.calculateOverflowClips = function() {
                    this.nodes.forEach(function(t) {
                        if (D(t)) {
                            w(t) && t.appendToDOM(), t.borders = this.parseBorders(t);
                            var e = "hidden" === t.css("overflow") ? [t.borders.clip] : [],
                                i = t.parseClip();
                            i && -1 !== ["absolute", "fixed"].indexOf(t.css("position")) && e.push([
                                ["rect", t.bounds.left + i.left, t.bounds.top + i.top, i.right - i.left, i.bottom - i.top]
                            ]), t.clip = n(t) ? t.parent.clip.concat(e) : e, t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip, w(t) && t.cleanDOM()
                        } else I(t) && (t.clip = n(t) ? t.parent.clip : []);
                        w(t) || (t.bounds = null)
                    }, this)
                }, i.prototype.asyncRenderer = function(t, e, i) {
                    i = i || Date.now(), this.paint(t[this.renderIndex++]), t.length === this.renderIndex ? e() : i + 20 > Date.now() ? this.asyncRenderer(t, e, i) : setTimeout(q(function() {
                        this.asyncRenderer(t, e)
                    }, this), 0)
                }, i.prototype.createPseudoHideStyles = function(t) {
                    this.createStyles(t, "." + F.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + F.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
                }, i.prototype.disableAnimations = function(t) {
                    this.createStyles(t, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
                }, i.prototype.createStyles = function(t, e) {
                    var i = t.createElement("style");
                    i.innerHTML = e, t.body.appendChild(i)
                }, i.prototype.getPseudoElements = function(t) {
                    var e = [
                        [t]
                    ];
                    if (t.node.nodeType === Node.ELEMENT_NODE) {
                        var i = this.getPseudoElement(t, ":before"),
                            n = this.getPseudoElement(t, ":after");
                        i && e.push(i), n && e.push(n)
                    }
                    return N(e)
                }, i.prototype.getPseudoElement = function(t, e) {
                    var i = t.computedStyle(e);
                    if (!i || !i.content || "none" === i.content || "-moz-alt-content" === i.content || "none" === i.display) return null;
                    for (var n = L(i.content), r = "url" === n.substr(0, 3), s = document.createElement(r ? "img" : "html2canvaspseudoelement"), a = new F(s, t, e), l = i.length - 1; l >= 0; l--) {
                        var c = o(i.item(l));
                        s.style[c] = i[c]
                    }
                    if (s.className = F.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + F.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, r) return s.src = X(n)[0].args[0], [a];
                    var h = document.createTextNode(n);
                    return s.appendChild(h), [a, new $(h, a)]
                }, i.prototype.getChildren = function(t) {
                    return N([].filter.call(t.node.childNodes, C).map(function(e) {
                        var i = [e.nodeType === Node.TEXT_NODE ? new $(e, t) : new U(e, t)].filter(j);
                        return e.nodeType === Node.ELEMENT_NODE && i.length && "TEXTAREA" !== e.tagName ? i[0].isElementVisible() ? i.concat(this.getChildren(i[0])) : [] : i
                    }, this))
                }, i.prototype.newStackingContext = function(t, e) {
                    var i = new Y(e, t.getOpacity(), t.node, t.parent);
                    t.cloneTo(i);
                    var n = e ? i.getParentStack(this) : i.parent.stack;
                    n.contexts.push(i), t.stack = i
                }, i.prototype.createStackingContexts = function() {
                    this.nodes.forEach(function(t) {
                        D(t) && (this.isRootElement(t) || R(t) || E(t) || this.isBodyWithTransparentRoot(t) || t.hasTransform()) ? this.newStackingContext(t, !0) : D(t) && (_(t) && f(t) || A(t) || T(t)) ? this.newStackingContext(t, !1) : t.assignStack(t.parent.stack)
                    }, this)
                }, i.prototype.isBodyWithTransparentRoot = function(t) {
                    return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent()
                }, i.prototype.isRootElement = function(t) {
                    return null === t.parent
                }, i.prototype.sortStackingContexts = function(t) {
                    t.contexts.sort(P(t.contexts.slice(0))), t.contexts.forEach(this.sortStackingContexts, this)
                }, i.prototype.parseTextBounds = function(t) {
                    return function(e, i, n) {
                        if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                            if (this.support.rangeBounds && !t.parent.hasTransform()) {
                                var o = n.slice(0, i).join("").length;
                                return this.getRangeBounds(t.node, o, e.length)
                            }
                            if (t.node && "string" == typeof t.node.data) {
                                var r = t.node.splitText(e.length),
                                    s = this.getWrapperBounds(t.node, t.parent.hasTransform());
                                return t.node = r, s
                            }
                        } else(!this.support.rangeBounds || t.parent.hasTransform()) && (t.node = t.node.splitText(e.length));
                        return {}
                    }
                }, i.prototype.getWrapperBounds = function(t, e) {
                    var i = t.ownerDocument.createElement("html2canvaswrapper"),
                        n = t.parentNode,
                        o = t.cloneNode(!0);
                    i.appendChild(t.cloneNode(!0)), n.replaceChild(i, t);
                    var r = e ? K(i) : J(i);
                    return n.replaceChild(o, i), r
                }, i.prototype.getRangeBounds = function(t, e, i) {
                    var n = this.range || (this.range = t.ownerDocument.createRange());
                    return n.setStart(t, e), n.setEnd(t, e + i), n.getBoundingClientRect()
                }, i.prototype.parse = function(t) {
                    var e = t.contexts.filter(d),
                        i = t.children.filter(D),
                        n = i.filter(S(T)),
                        o = n.filter(S(_)).filter(S(m)),
                        s = i.filter(S(_)).filter(T),
                        a = n.filter(S(_)).filter(m),
                        l = t.contexts.concat(n.filter(_)).filter(f),
                        c = t.children.filter(I).filter(y),
                        h = t.contexts.filter(u);
                    e.concat(o).concat(s).concat(a).concat(l).concat(c).concat(h).forEach(function(t) {
                        this.renderQueue.push(t), g(t) && (this.parse(t), this.renderQueue.push(new r))
                    }, this)
                }, i.prototype.paint = function(t) {
                    try {
                        t instanceof r ? this.renderer.ctx.restore() : I(t) ? (w(t.parent) && t.parent.appendToDOM(), this.paintText(t), w(t.parent) && t.parent.cleanDOM()) : this.paintNode(t)
                    } catch (e) {
                        if (V(e), this.options.strict) throw e
                    }
                }, i.prototype.paintNode = function(t) {
                    g(t) && (this.renderer.setOpacity(t.opacity), this.renderer.ctx.save(), t.hasTransform() && this.renderer.setTransform(t.parseTransform())), "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t)
                }, i.prototype.paintElement = function(t) {
                    var e = t.parseBounds();
                    this.renderer.clip(t.backgroundClip, function() {
                        this.renderer.renderBackground(t, e, t.borders.borders.map(x))
                    }, this), this.renderer.clip(t.clip, function() {
                        this.renderer.renderBorders(t.borders.borders)
                    }, this), this.renderer.clip(t.backgroundClip, function() {
                        switch (t.node.nodeName) {
                            case "svg":
                            case "IFRAME":
                                var i = this.images.get(t.node);
                                i ? this.renderer.renderImage(t, e, t.borders, i) : V("Error loading <" + t.node.nodeName + ">", t.node);
                                break;
                            case "IMG":
                                var n = this.images.get(t.node.src);
                                n ? this.renderer.renderImage(t, e, t.borders, n) : V("Error loading <img>", t.node.src);
                                break;
                            case "CANVAS":
                                this.renderer.renderImage(t, e, t.borders, {
                                    image: t.node
                                });
                                break;
                            case "SELECT":
                            case "INPUT":
                            case "TEXTAREA":
                                this.paintFormValue(t)
                        }
                    }, this)
                }, i.prototype.paintCheckbox = function(t) {
                    var e = t.parseBounds(),
                        i = Math.min(e.width, e.height),
                        n = {
                            width: i - 1,
                            height: i - 1,
                            top: e.top,
                            left: e.left
                        },
                        o = [3, 3],
                        r = [o, o, o, o],
                        a = [1, 1, 1, 1].map(function(t) {
                            return {
                                color: new W("#A5A5A5"),
                                width: t
                            }
                        }),
                        c = l(n, r, a);
                    this.renderer.clip(t.backgroundClip, function() {
                        this.renderer.rectangle(n.left + 1, n.top + 1, n.width - 2, n.height - 2, new W("#DEDEDE")), this.renderer.renderBorders(s(a, n, c, r)), t.node.checked && (this.renderer.font(new W("#424242"), "normal", "normal", "bold", i - 3 + "px", "arial"), this.renderer.text("âœ”", n.left + i / 6, n.top + i - 1))
                    }, this)
                }, i.prototype.paintRadio = function(t) {
                    var e = t.parseBounds(),
                        i = Math.min(e.width, e.height) - 2;
                    this.renderer.clip(t.backgroundClip, function() {
                        this.renderer.circleStroke(e.left + 1, e.top + 1, i, new W("#DEDEDE"), 1, new W("#A5A5A5")), t.node.checked && this.renderer.circle(Math.ceil(e.left + i / 4) + 1, Math.ceil(e.top + i / 4) + 1, Math.floor(i / 2), new W("#424242"))
                    }, this)
                }, i.prototype.paintFormValue = function(t) {
                    var e = t.getValue();
                    if (e.length > 0) {
                        var i = t.node.ownerDocument,
                            n = i.createElement("html2canvaswrapper"),
                            o = ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"];
                        o.forEach(function(e) {
                            try {
                                n.style[e] = t.css(e)
                            } catch (i) {
                                V("html2canvas: Parse: Exception caught in renderFormValue: " + i.message)
                            }
                        });
                        var r = t.parseBounds();
                        n.style.position = "fixed", n.style.left = r.left + "px", n.style.top = r.top + "px", n.textContent = e, i.body.appendChild(n), this.paintText(new $(n.firstChild, t)), i.body.removeChild(n)
                    }
                }, i.prototype.paintText = function(t) {
                    t.applyTextTransform();
                    var e = B.ucs2.decode(t.node.data),
                        i = this.options.letterRendering && !v(t) || H(t.node.data) ? e.map(function(t) {
                            return B.ucs2.encode([t])
                        }) : M(e),
                        n = t.parent.fontWeight(),
                        o = t.parent.css("fontSize"),
                        r = t.parent.css("fontFamily"),
                        s = t.parent.parseTextShadows();
                    this.renderer.font(t.parent.color("color"), t.parent.css("fontStyle"), t.parent.css("fontVariant"), n, o, r), s.length ? this.renderer.fontShadow(s[0].color, s[0].offsetX, s[0].offsetY, s[0].blur) : this.renderer.clearShadow(), this.renderer.clip(t.parent.clip, function() {
                        i.map(this.parseTextBounds(t), this).forEach(function(e, n) {
                            e && (this.renderer.text(i[n], e.left, e.bottom), this.renderTextDecoration(t.parent, e, this.fontMetrics.getMetrics(r, o)))
                        }, this)
                    }, this)
                }, i.prototype.renderTextDecoration = function(t, e, i) {
                    switch (t.css("textDecoration").split(" ")[0]) {
                        case "underline":
                            this.renderer.rectangle(e.left, Math.round(e.top + i.baseline + i.lineWidth), e.width, 1, t.color("color"));
                            break;
                        case "overline":
                            this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                            break;
                        case "line-through":
                            this.renderer.rectangle(e.left, Math.ceil(e.top + i.middle + i.lineWidth), e.width, 1, t.color("color"))
                    }
                };
                var Q = {
                    inset: [
                        ["darken", .6],
                        ["darken", .1],
                        ["darken", .1],
                        ["darken", .6]
                    ]
                };
                i.prototype.parseBorders = function(t) {
                    var e = t.parseBounds(),
                        i = b(t),
                        n = ["Top", "Right", "Bottom", "Left"].map(function(e, i) {
                            var n = t.css("border" + e + "Style"),
                                o = t.color("border" + e + "Color");
                            "inset" === n && o.isBlack() && (o = new W([255, 255, 255, o.a]));
                            var r = Q[n] ? Q[n][i] : null;
                            return {
                                width: t.cssInt("border" + e + "Width"),
                                color: r ? o[r[0]](r[1]) : o,
                                args: null
                            }
                        }),
                        o = l(e, i, n);
                    return {
                        clip: this.parseBackgroundClip(t, o, n, i, e),
                        borders: s(n, e, o, i)
                    }
                }, i.prototype.parseBackgroundClip = function(t, e, i, n, o) {
                    var r = t.css("backgroundClip"),
                        s = [];
                    switch (r) {
                        case "content-box":
                        case "padding-box":
                            p(s, n[0], n[1], e.topLeftInner, e.topRightInner, o.left + i[3].width, o.top + i[0].width), p(s, n[1], n[2], e.topRightInner, e.bottomRightInner, o.left + o.width - i[1].width, o.top + i[0].width), p(s, n[2], n[3], e.bottomRightInner, e.bottomLeftInner, o.left + o.width - i[1].width, o.top + o.height - i[2].width), p(s, n[3], n[0], e.bottomLeftInner, e.topLeftInner, o.left + i[3].width, o.top + o.height - i[2].width);
                            break;
                        default:
                            p(s, n[0], n[1], e.topLeftOuter, e.topRightOuter, o.left, o.top), p(s, n[1], n[2], e.topRightOuter, e.bottomRightOuter, o.left + o.width, o.top), p(s, n[2], n[3], e.bottomRightOuter, e.bottomLeftOuter, o.left + o.width, o.top + o.height), p(s, n[3], n[0], e.bottomLeftOuter, e.topLeftOuter, o.left, o.top + o.height)
                    }
                    return s
                }, e.exports = i
            }, {
                "./color": 3,
                "./fontmetrics": 7,
                "./log": 13,
                "./nodecontainer": 14,
                "./pseudoelementcontainer": 18,
                "./stackingcontext": 21,
                "./textcontainer": 25,
                "./utils": 26,
                punycode: 1
            }],
            16: [function(t, e, i) {
                function n(t, e, i) {
                    var n = "withCredentials" in new XMLHttpRequest;
                    if (!e) return Promise.reject("No proxy configured");
                    var o = s(n),
                        l = a(e, t, o);
                    return n ? h(l) : r(i, l, o).then(function(t) {
                        return f(t.content)
                    })
                }

                function o(t, e, i) {
                    var n = "crossOrigin" in new Image,
                        o = s(n),
                        l = a(e, t, o);
                    return n ? Promise.resolve(l) : r(i, l, o).then(function(t) {
                        return "data:" + t.type + ";base64," + t.content
                    })
                }

                function r(t, e, i) {
                    return new Promise(function(n, o) {
                        var r = t.createElement("script"),
                            s = function() {
                                delete window.html2canvas.proxy[i], t.body.removeChild(r)
                            };
                        window.html2canvas.proxy[i] = function(t) {
                            s(), n(t)
                        }, r.src = e, r.onerror = function(t) {
                            s(), o(t)
                        }, t.body.appendChild(r)
                    })
                }

                function s(t) {
                    return t ? "" : "html2canvas_" + Date.now() + "_" + ++m + "_" + Math.round(1e5 * Math.random())
                }

                function a(t, e, i) {
                    return t + "?url=" + encodeURIComponent(e) + (i.length ? "&callback=html2canvas.proxy." + i : "")
                }

                function l(t) {
                    return function(e) {
                        var i, n = new DOMParser;
                        try {
                            i = n.parseFromString(e, "text/html")
                        } catch (o) {
                            d("DOMParser not supported, falling back to createHTMLDocument"), i = document.implementation.createHTMLDocument("");
                            try {
                                i.open(), i.write(e), i.close()
                            } catch (r) {
                                d("createHTMLDocument write not supported, falling back to document.body.innerHTML"), i.body.innerHTML = e
                            }
                        }
                        var s = i.querySelector("base");
                        if (!s || !s.href.host) {
                            var a = i.createElement("base");
                            a.href = t, i.head.insertBefore(a, i.head.firstChild)
                        }
                        return i
                    }
                }

                function c(t, e, i, o, r, s) {
                    return new n(t, e, window.document).then(l(t)).then(function(t) {
                        return u(t, i, o, r, s, 0, 0)
                    })
                }
                var h = t("./xhr"),
                    p = t("./utils"),
                    d = t("./log"),
                    u = t("./clone"),
                    f = p.decode64,
                    m = 0;
                i.Proxy = n, i.ProxyURL = o, i.loadUrlDocument = c
            }, {
                "./clone": 2,
                "./log": 13,
                "./utils": 26,
                "./xhr": 28
            }],
            17: [function(t, e) {
                function i(t, e) {
                    var i = document.createElement("a");
                    i.href = t, t = i.href, this.src = t, this.image = new Image;
                    var o = this;
                    this.promise = new Promise(function(i, r) {
                        o.image.crossOrigin = "Anonymous", o.image.onload = i, o.image.onerror = r, new n(t, e, document).then(function(t) {
                            o.image.src = t
                        })["catch"](r)
                    })
                }
                var n = t("./proxy").ProxyURL;
                e.exports = i
            }, {
                "./proxy": 16
            }],
            18: [function(t, e) {
                function i(t, e, i) {
                    n.call(this, t, e), this.isPseudoElement = !0, this.before = ":before" === i
                }
                var n = t("./nodecontainer");
                i.prototype.cloneTo = function(t) {
                    i.prototype.cloneTo.call(this, t), t.isPseudoElement = !0, t.before = this.before
                }, i.prototype = Object.create(n.prototype), i.prototype.appendToDOM = function() {
                    this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass()
                }, i.prototype.cleanDOM = function() {
                    this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
                }, i.prototype.getHideClass = function() {
                    return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")]
                }, i.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", i.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", e.exports = i
            }, {
                "./nodecontainer": 14
            }],
            19: [function(t, e) {
                function i(t, e, i, n, o) {
                    this.width = t, this.height = e, this.images = i, this.options = n, this.document = o
                }
                var n = t("./log");
                i.prototype.renderImage = function(t, e, i, n) {
                    var o = t.cssInt("paddingLeft"),
                        r = t.cssInt("paddingTop"),
                        s = t.cssInt("paddingRight"),
                        a = t.cssInt("paddingBottom"),
                        l = i.borders,
                        c = e.width - (l[1].width + l[3].width + o + s),
                        h = e.height - (l[0].width + l[2].width + r + a);
                    this.drawImage(n, 0, 0, n.image.width || c, n.image.height || h, e.left + o + l[3].width, e.top + r + l[0].width, c, h)
                }, i.prototype.renderBackground = function(t, e, i) {
                    e.height > 0 && e.width > 0 && (this.renderBackgroundColor(t, e), this.renderBackgroundImage(t, e, i))
                }, i.prototype.renderBackgroundColor = function(t, e) {
                    var i = t.color("backgroundColor");
                    i.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, i)
                }, i.prototype.renderBorders = function(t) {
                    t.forEach(this.renderBorder, this)
                }, i.prototype.renderBorder = function(t) {
                    t.color.isTransparent() || null === t.args || this.drawShape(t.args, t.color)
                }, i.prototype.renderBackgroundImage = function(t, e, i) {
                    var o = t.parseBackgroundImages();
                    o.reverse().forEach(function(o, r, s) {
                        switch (o.method) {
                            case "url":
                                var a = this.images.get(o.args[0]);
                                a ? this.renderBackgroundRepeating(t, e, a, s.length - (r + 1), i) : n("Error loading background-image", o.args[0]);
                                break;
                            case "linear-gradient":
                            case "gradient":
                                var l = this.images.get(o.value);
                                l ? this.renderBackgroundGradient(l, e, i) : n("Error loading background-image", o.args[0]);
                                break;
                            case "none":
                                break;
                            default:
                                n("Unknown background-image type", o.args[0])
                        }
                    }, this)
                }, i.prototype.renderBackgroundRepeating = function(t, e, i, n, o) {
                    var r = t.parseBackgroundSize(e, i.image, n),
                        s = t.parseBackgroundPosition(e, i.image, n, r),
                        a = t.parseBackgroundRepeat(n);
                    switch (a) {
                        case "repeat-x":
                        case "repeat no-repeat":
                            this.backgroundRepeatShape(i, s, r, e, e.left + o[3], e.top + s.top + o[0], 99999, r.height, o);
                            break;
                        case "repeat-y":
                        case "no-repeat repeat":
                            this.backgroundRepeatShape(i, s, r, e, e.left + s.left + o[3], e.top + o[0], r.width, 99999, o);
                            break;
                        case "no-repeat":
                            this.backgroundRepeatShape(i, s, r, e, e.left + s.left + o[3], e.top + s.top + o[0], r.width, r.height, o);
                            break;
                        default:
                            this.renderBackgroundRepeat(i, s, r, {
                                top: e.top,
                                left: e.left
                            }, o[3], o[0])
                    }
                }, e.exports = i
            }, {
                "./log": 13
            }],
            20: [function(t, e) {
                function i(t, e) {
                    o.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = t, this.canvas.height = e), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, s("Initialized CanvasRenderer with size", t, "x", e)
                }

                function n(t) {
                    return t.length > 0
                }
                var o = t("../renderer"),
                    r = t("../lineargradientcontainer"),
                    s = t("../log");
                i.prototype = Object.create(o.prototype), i.prototype.setFillStyle = function(t) {
                    return this.ctx.fillStyle = "object" == typeof t && t.isColor ? t.toString() : t, this.ctx
                }, i.prototype.rectangle = function(t, e, i, n, o) {
                    this.setFillStyle(o).fillRect(t, e, i, n)
                }, i.prototype.circle = function(t, e, i, n) {
                    this.setFillStyle(n), this.ctx.beginPath(), this.ctx.arc(t + i / 2, e + i / 2, i / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill()
                }, i.prototype.circleStroke = function(t, e, i, n, o, r) {
                    this.circle(t, e, i, n), this.ctx.strokeStyle = r.toString(), this.ctx.stroke()
                }, i.prototype.drawShape = function(t, e) {
                    this.shape(t), this.setFillStyle(e).fill()
                }, i.prototype.taints = function(t) {
                    if (null === t.tainted) {
                        this.taintCtx.drawImage(t.image, 0, 0);
                        try {
                            this.taintCtx.getImageData(0, 0, 1, 1), t.tainted = !1
                        } catch (e) {
                            this.taintCtx = document.createElement("canvas").getContext("2d"), t.tainted = !0
                        }
                    }
                    return t.tainted
                }, i.prototype.drawImage = function(t, e, i, n, o, r, s, a, l) {
                    (!this.taints(t) || this.options.allowTaint) && this.ctx.drawImage(t.image, e, i, n, o, r, s, a, l)
                }, i.prototype.clip = function(t, e, i) {
                    this.ctx.save(), t.filter(n).forEach(function(t) {
                        this.shape(t).clip()
                    }, this), e.call(i), this.ctx.restore()
                }, i.prototype.shape = function(t) {
                    return this.ctx.beginPath(), t.forEach(function(t, e) {
                        "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(this.ctx, t.slice(1))
                    }, this), this.ctx.closePath(), this.ctx
                }, i.prototype.font = function(t, e, i, n, o, r) {
                    this.setFillStyle(t).font = [e, i, n, o, r].join(" ").split(",")[0]
                }, i.prototype.fontShadow = function(t, e, i, n) {
                    this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", i).setVariable("shadowBlur", n)
                }, i.prototype.clearShadow = function() {
                    this.setVariable("shadowColor", "rgba(0,0,0,0)")
                }, i.prototype.setOpacity = function(t) {
                    this.ctx.globalAlpha = t
                }, i.prototype.setTransform = function(t) {
                    this.ctx.translate(t.origin[0], t.origin[1]), this.ctx.transform.apply(this.ctx, t.matrix), this.ctx.translate(-t.origin[0], -t.origin[1])
                }, i.prototype.setVariable = function(t, e) {
                    return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e), this
                }, i.prototype.text = function(t, e, i) {
                    this.ctx.fillText(t, e, i)
                }, i.prototype.backgroundRepeatShape = function(t, e, i, n, o, r, s, a, l) {
                    var c = [
                        ["line", Math.round(o), Math.round(r)],
                        ["line", Math.round(o + s), Math.round(r)],
                        ["line", Math.round(o + s), Math.round(a + r)],
                        ["line", Math.round(o), Math.round(a + r)]
                    ];
                    this.clip([c], function() {
                        this.renderBackgroundRepeat(t, e, i, n, l[3], l[0])
                    }, this)
                }, i.prototype.renderBackgroundRepeat = function(t, e, i, n, o, r) {
                    var s = Math.round(n.left + e.left + o),
                        a = Math.round(n.top + e.top + r);
                    this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, i), "repeat")), this.ctx.translate(s, a), this.ctx.fill(), this.ctx.translate(-s, -a)
                }, i.prototype.renderBackgroundGradient = function(t, e) {
                    if (t instanceof r) {
                        var i = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
                        t.colorStops.forEach(function(t) {
                            i.addColorStop(t.stop, t.color.toString())
                        }), this.rectangle(e.left, e.top, e.width, e.height, i)
                    }
                }, i.prototype.resizeImage = function(t, e) {
                    var i = t.image;
                    if (i.width === e.width && i.height === e.height) return i;
                    var n, o = document.createElement("canvas");
                    return o.width = e.width, o.height = e.height, n = o.getContext("2d"), n.drawImage(i, 0, 0, i.width, i.height, 0, 0, e.width, e.height), o
                }, e.exports = i
            }, {
                "../lineargradientcontainer": 12,
                "../log": 13,
                "../renderer": 19
            }],
            21: [function(t, e) {
                function i(t, e, i, o) {
                    n.call(this, i, o), this.ownStacking = t, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * e
                }
                var n = t("./nodecontainer");
                i.prototype = Object.create(n.prototype), i.prototype.getParentStack = function(t) {
                    var e = this.parent ? this.parent.stack : null;
                    return e ? e.ownStacking ? e : e.getParentStack(t) : t.stack
                }, e.exports = i
            }, {
                "./nodecontainer": 14
            }],
            22: [function(t, e) {
                function i(t) {
                    this.rangeBounds = this.testRangeBounds(t), this.cors = this.testCORS(), this.svg = this.testSVG()
                }
                i.prototype.testRangeBounds = function(t) {
                    var e, i, n, o, r = !1;
                    return t.createRange && (e = t.createRange(), e.getBoundingClientRect && (i = t.createElement("boundtest"), i.style.height = "123px", i.style.display = "block", t.body.appendChild(i), e.selectNode(i), n = e.getBoundingClientRect(), o = n.height, 123 === o && (r = !0), t.body.removeChild(i))), r
                }, i.prototype.testCORS = function() {
                    return "undefined" != typeof(new Image).crossOrigin
                }, i.prototype.testSVG = function() {
                    var t = new Image,
                        e = document.createElement("canvas"),
                        i = e.getContext("2d");
                    t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                    try {
                        i.drawImage(t, 0, 0), e.toDataURL()
                    } catch (n) {
                        return !1
                    }
                    return !0
                }, e.exports = i
            }, {}],
            23: [function(t, e) {
                function i(t) {
                    this.src = t, this.image = null;
                    var e = this;
                    this.promise = this.hasFabric().then(function() {
                        return e.isInline(t) ? Promise.resolve(e.inlineFormatting(t)) : n(t)
                    }).then(function(t) {
                        return new Promise(function(i) {
                            window.html2canvas.svg.fabric.loadSVGFromString(t, e.createCanvas.call(e, i))
                        })
                    })
                }
                var n = t("./xhr"),
                    o = t("./utils").decode64;
                i.prototype.hasFabric = function() {
                    return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
                }, i.prototype.inlineFormatting = function(t) {
                    return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t)
                }, i.prototype.removeContentType = function(t) {
                    return t.replace(/^data:image\/svg\+xml(;base64)?,/, "")
                }, i.prototype.isInline = function(t) {
                    return /^data:image\/svg\+xml/i.test(t)
                }, i.prototype.createCanvas = function(t) {
                    var e = this;
                    return function(i, n) {
                        var o = new window.html2canvas.svg.fabric.StaticCanvas("c");
                        e.image = o.lowerCanvasEl, o.setWidth(n.width).setHeight(n.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(i, n)).renderAll(), t(o.lowerCanvasEl)
                    }
                }, i.prototype.decode64 = function(t) {
                    return "function" == typeof window.atob ? window.atob(t) : o(t)
                }, e.exports = i
            }, {
                "./utils": 26,
                "./xhr": 28
            }],
            24: [function(t, e) {
                function i(t, e) {
                    this.src = t, this.image = null;
                    var i = this;
                    this.promise = e ? new Promise(function(e, n) {
                        i.image = new Image, i.image.onload = e, i.image.onerror = n, i.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(t), i.image.complete === !0 && e(i.image)
                    }) : this.hasFabric().then(function() {
                        return new Promise(function(e) {
                            window.html2canvas.svg.fabric.parseSVGDocument(t, i.createCanvas.call(i, e))
                        })
                    })
                }
                var n = t("./svgcontainer");
                i.prototype = Object.create(n.prototype), e.exports = i
            }, {
                "./svgcontainer": 23
            }],
            25: [function(t, e) {
                function i(t, e) {
                    o.call(this, t, e)
                }

                function n(t, e, i) {
                    return t.length > 0 ? e + i.toUpperCase() : void 0
                }
                var o = t("./nodecontainer");
                i.prototype = Object.create(o.prototype), i.prototype.applyTextTransform = function() {
                    this.node.data = this.transform(this.parent.css("textTransform"))
                }, i.prototype.transform = function(t) {
                    var e = this.node.data;
                    switch (t) {
                        case "lowercase":
                            return e.toLowerCase();
                        case "capitalize":
                            return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, n);
                        case "uppercase":
                            return e.toUpperCase();
                        default:
                            return e
                    }
                }, e.exports = i
            }, {
                "./nodecontainer": 14
            }],
            26: [function(t, e, i) {
                i.smallImage = function() {
                    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }, i.bind = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }, i.decode64 = function(t) {
                    var e, i, n, o, r, s, a, l, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        h = t.length,
                        p = "";
                    for (e = 0; h > e; e += 4) i = c.indexOf(t[e]), n = c.indexOf(t[e + 1]), o = c.indexOf(t[e + 2]), r = c.indexOf(t[e + 3]), s = i << 2 | n >> 4, a = (15 & n) << 4 | o >> 2, l = (3 & o) << 6 | r, p += 64 === o ? String.fromCharCode(s) : 64 === r || -1 === r ? String.fromCharCode(s, a) : String.fromCharCode(s, a, l);
                    return p
                }, i.getBounds = function(t) {
                    if (t.getBoundingClientRect) {
                        var e = t.getBoundingClientRect(),
                            i = null == t.offsetWidth ? e.width : t.offsetWidth;
                        return {
                            top: e.top,
                            bottom: e.bottom || e.top + e.height,
                            right: e.left + i,
                            left: e.left,
                            width: i,
                            height: null == t.offsetHeight ? e.height : t.offsetHeight
                        }
                    }
                    return {}
                }, i.offsetBounds = function(t) {
                    var e = t.offsetParent ? i.offsetBounds(t.offsetParent) : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.offsetTop + e.top,
                        bottom: t.offsetTop + t.offsetHeight + e.top,
                        right: t.offsetLeft + e.left + t.offsetWidth,
                        left: t.offsetLeft + e.left,
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }
                }, i.parseBackgrounds = function(t) {
                    var e, i, n, o, r, s, a, l = " \r\n	",
                        c = [],
                        h = 0,
                        p = 0,
                        d = function() {
                            e && ('"' === i.substr(0, 1) && (i = i.substr(1, i.length - 2)), i && a.push(i), "-" === e.substr(0, 1) && (o = e.indexOf("-", 1) + 1) > 0 && (n = e.substr(0, o), e = e.substr(o)), c.push({
                                prefix: n,
                                method: e.toLowerCase(),
                                value: r,
                                args: a,
                                image: null
                            })), a = [], e = n = i = r = ""
                        };
                    return a = [], e = n = i = r = "", t.split("").forEach(function(t) {
                        if (!(0 === h && l.indexOf(t) > -1)) {
                            switch (t) {
                                case '"':
                                    s ? s === t && (s = null) : s = t;
                                    break;
                                case "(":
                                    if (s) break;
                                    if (0 === h) return h = 1, r += t, void 0;
                                    p++;
                                    break;
                                case ")":
                                    if (s) break;
                                    if (1 === h) {
                                        if (0 === p) return h = 0, r += t, d(), void 0;
                                        p--
                                    }
                                    break;
                                case ",":
                                    if (s) break;
                                    if (0 === h) return d(), void 0;
                                    if (1 === h && 0 === p && !e.match(/^url$/i)) return a.push(i), i = "", r += t, void 0
                            }
                            r += t, 0 === h ? e += t : i += t
                        }
                    }), d(), c
                }
            }, {}],
            27: [function(t, e) {
                function i(t) {
                    n.apply(this, arguments), this.type = "linear" === t.args[0] ? n.TYPES.LINEAR : n.TYPES.RADIAL
                }
                var n = t("./gradientcontainer");
                i.prototype = Object.create(n.prototype), e.exports = i
            }, {
                "./gradientcontainer": 9
            }],
            28: [function(t, e) {
                function i(t) {
                    return new Promise(function(e, i) {
                        var n = new XMLHttpRequest;
                        n.open("GET", t), n.onload = function() {
                            200 === n.status ? e(n.responseText) : i(new Error(n.statusText))
                        }, n.onerror = function() {
                            i(new Error("Network Error"))
                        }, n.send()
                    })
                }
                e.exports = i
            }, {}]
        }, {}, [4])(4)
    }), define("player/base/base-activity", ["marionette", "player/events/eventsconst", "player/manager/popup-manager", "player/constants/errorconst", "player/controllers/tincan-controller", "printArea", "html2canvasRef"], function(t, e, i, n, o, r, s) {
        var a;
        return a = Backbone.Marionette.Layout.extend({
            bEditor: !1,
            className: "defaultActivityStyle",
            ActivityEventConst: e,
            strActivityName: void 0,
            nActivityIndex: void 0,
            isBaseActivity: !0,
            isDestroyCalled: !1,
            nStageScale: 1,
            localLangName: void 0,
            objEventController: void 0,
            groupName: void 0,
            modelName: void 0,
            localText: void 0,
            commonMediaNode: void 0,
            strName: void 0,
            allRegionData: void 0,
            allRegionActivityList: void 0,
            mComp: {},
            activityRegionId: void 0,
            objErrConst: n,
            PopupManager: void 0,
            toolbox: void 0,
            objInlineTmplDict: void 0,
            strRegionName: void 0,
            popupData: null,
            popupCounter: 0,
            popupDiv_dict: {},
            broadcastEventDict: void 0,
            bCache: !1,
            objTinCanHelper: void 0,
            sendTincanData: void 0,
            componentType: "screen"
        }), a.prototype.preinitialize = function() {}, a.prototype.postInitialize = function() {}, a.prototype.onActivityCreationComplete = function() {}, a.prototype.getRegionChangeNotification = function() {}, a.prototype.onPlayerInitComplete = function() {}, a.prototype.setData = function(t) {
            this.objInlineTmplDict = t
        }, a.prototype.setID = function(t) {
            this.strActivityName = t
        }, a.prototype.getID = function() {
            return this.strActivityName
        }, a.prototype.initBaseActivity = function() {
            var t;
            this.broadcastEventDict = {}, this.broadcastEventReceiver(this.ActivityEventConst.MANAGE_COMMON_BROADCAST_EVENT, this, "manageCommonBroadcastEvent"), this.PopupManager = i, this.ActivityEventConst = e, t = window.AudioContext || window.webkitAudioContext, t && (this.bWebApiEnable = !0)
        }, a.prototype.getToolbox = function() {
            return this.toolbox
        }, a.prototype.setState = function() {}, a.prototype.resetActivity = function() {}, a.prototype.endActivity = function() {
            this.trigger(this.ActivityEventConst.ACTIVITY_END_EVENT, this)
        }, a.prototype.jumpToActivityByIndex = function(t) {
            this.activityIndex = t, this.trigger(this.ActivityEventConst.JUMP_TO_ACTIVITY_BY_INDEX_EVENT, this)
        }, a.prototype.jumpToActivityByID = function(t) {
            this.activityID = t, this.trigger(this.ActivityEventConst.JUMP_TO_ACTIVITY_BY_ID_EVENT, this)
        }, a.prototype.launchNextActivity = function() {
            this.trigger(this.ActivityEventConst.ACTIVITY_GO_TO_NEXT_ACTIVITY_EVENT, this)
        }, a.prototype.userActionPerform = function() {
            this.trigger(this.ActivityEventConst.USER_ACTION, this)
        }, a.prototype.launchPreviousActivity = function() {
            this.trigger(this.ActivityEventConst.ACTIVITY_GO_TO_PREVIOUS_ACTIVITY_EVENT, this)
        }, a.prototype.setEventController = function(t) {
            this.objEventController = t
        }, a.prototype.showHideRegionById = function(t, e) {
            var i = {};
            i.task = this.ActivityEventConst.SHOW_HIDE_REGION, i.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, i.regionToHIde = t, i.state = e, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, i)
        }, a.prototype.attachListener = function(t, e, i, n) {
            this.objEventController.addEventListener(t, e, i, n)
        }, a.prototype.detachListener = function(t, e, i) {
            this.objEventController.removeEventListener(t, e, i)
        }, a.prototype.getComponent = function(t, e, i, n) {
            var o = {};
            o.context = t, o.strCompType = e, o.strCallback = i, o.data = n, this.trigger(this.ActivityEventConst.CREATE_COMPONENT_EVENT, o)
        }, a.prototype.getScreenText = function(t) {
            var e, i;
            return e = $(this.localText).find("text[id=" + t + "]"), i = $(e[0]).text()
        }, a.prototype.customEventDispatcher = function(t, e, i) {
            var n = {};
            n.data = e, n.customData = i, n.target = e, n.type = t, e.trigger(t, n)
        }, a.prototype.broadcastEvent = function(t, e) {
            var i = {};
            i.eventToBroadcast = t, i.data = e, this.trigger(this.ActivityEventConst.BROADCAST_EVENT, i)
        }, a.prototype.broadcastEventReceiver = function(t, e, i) {
            var n = {};
            n.eventToListen = t, n.context = e, n.callback = i, this.trigger(this.ActivityEventConst.BROADCAST_EVENT_RECEIVER, n)
        }, a.prototype.stopBroadcastEventReceiver = function(t, e, i) {
            var n = {};
            n.eventToListen = t, n.context = e, n.callback = i, this.trigger(this.ActivityEventConst.STOP_BROADCAST_EVENT_RECEIVER, n)
        }, a.prototype.playAudio = function(t, e, i, n, o, r) {
            var s = {};
            s.strPath = t, s.bLoop = e, s.strTrack = i, s.reload = n, s.onStart = r, s.onFinish = o, this.trigger(this.ActivityEventConst.PLAY_AUDIO, s)
        }, a.prototype.isWebApiEnable = function() {
            return this.bWebApiEnable
        }, a.prototype.initWebApi = function(t) {
            this.bWebApiEnable === !0 && this.trigger(this.ActivityEventConst.INIT_WEB_API_AUDIO, t)
        }, a.prototype.playWebAudio = function(t) {
            this.bWebApiEnable === !0 && this.trigger(this.ActivityEventConst.PLAY_WEB_API_AUDIO, t)
        }, a.prototype.unloadBuffers = function(t) {
            this.bWebApiEnable === !0 && this.trigger(this.ActivityEventConst.UNLOAD_WEB_API_BUFFERS_AUDIO, t)
        }, a.prototype.stopAllAudio = function(t) {
            var e = {};
            e.bDestroy = t, this.trigger(this.ActivityEventConst.STOP_ALL_AUDIO, e)
        }, a.prototype.restart = function(t) {
            this.trigger(this.ActivityEventConst.RESTART_AUDIO, t)
        }, a.prototype.pauseAudio = function(t) {
            this.trigger(this.ActivityEventConst.PAUSE_AUDIO, t)
        }, a.prototype.resumeAudio = function(t) {
            this.trigger(this.ActivityEventConst.RESUME_AUDIO, t)
        }, a.prototype.stopAudio = function(t, e) {
            var i = {};
            i.trackId = t, i.destroy = e, this.trigger(this.ActivityEventConst.STOP_AUDIO, i)
        }, a.prototype.setVolume = function(t, e) {
            this.trigger(this.ActivityEventConst.VOLUME_CHANGE, {
                strTrackID: t,
                volume: e
            })
        }, a.prototype.setDefaultVolume = function(t) {
            this.trigger(this.ActivityEventConst.DEFAULT_VOLUME_CHANGE, {
                volume: t
            })
        }, a.prototype.showPreloader = function(t) {
            var e = {};
            e.message = t, e.task = this.ActivityEventConst.SHOW_PRELOADER, e.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, e)
        }, a.prototype.hidePreloader = function() {
            var t = {};
            t.task = this.ActivityEventConst.HIDE_PRELOADER, t.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, t)
        }, a.prototype.updatePlayerSize = function(t) {
            t.task = this.ActivityEventConst.UPDATE_PLAYER_SIZE_EVENT, t.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, t)
        }, a.prototype.getStageScaleValue = function() {
            return this.nStageScale
        }, a.prototype.getActivityListByRegion = function(t) {
            return this.allRegionActivityList[t].slice()
        }, a.prototype.launchActivityInRegion = function(t, e, i, n) {
            n = void 0 === n ? !1 : n;
            var o = {};
            o.regionId = t, o.regionToChange = t, o.data = i, o.strActivityID = e, o.bLaunchByIndex = n, o.task = this.ActivityEventConst.LAUNCH_ACTIVITY_IN_REGION, o.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, o)
        }, a.prototype.startRegion = function(t, e, i, n) {
            n = void 0 === n ? !1 : n;
            var o = {};
            o.regionToStart = t, o.regionId = "", o.data = e, o.strActivityID = i, o.bLaunchByIndex = n, o.task = this.ActivityEventConst.START_REGION_FROM_OTHER_REGION, o.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, o)
        }, a.prototype.changeRegionActivities = function(t, e, i, n, o) {
            var r = {};
            r.regionId = t, r.strActList = e, r.immediateStart = i, r.defaultActId = n, r.data = o, r.task = this.ActivityEventConst.UPDATE_REGION_ACTIVITY_LIST, r.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, r)
        }, a.prototype.getLanguageName = function() {
            return this.localLangName
        }, a.prototype.removeJS = function(t) {
            var e = {};
            e.fileName = t + ".js", e.type = this.ActivityEventConst.TYPE_JS, this.trigger(this.ActivityEventConst.REMVOE_REFERENCE, e)
        }, a.prototype.removeCSS = function(t) {
            var e = {};
            e.fileName = t + ".css", e.type = this.ActivityEventConst.TYPE_CSS, this.trigger(this.ActivityEventConst.REMVOE_REFERENCE, e)
        }, a.prototype.setDrawingCanvas = function(t) {
            this.trigger(this.ActivityEventConst.SET_DRAWING_CANVAS, t)
        }, a.prototype.getInlineTemplateById = function(t) {
            if (this.objInlineTmplDict) {
                var e = this.objInlineTmplDict[t];
                e = void 0 != e ? e : t
            }
            return 1 == this.v3Html && (e = $(this.$el.find("[type='text/template']")[0]).text()), e
        }, a.prototype.createRegion = function(t) {
            var e = {};
            e[t] = "#" + t, void 0 !== this.regions[t] ? console.warn(t + n.ACTIVITY_ALREADY_REGISTERED) : this.addRegions(e)
        }, a.prototype.launchAsPopup = function(t, e, i, n, o, r) {
            var s, a, l, c, h, p = this,
                d = "#" + e,
                u = this.getInlineTemplateById("screenPopupBlockerDiv");
            void 0 === this.popupDiv_dict[t] && (s = $(this.getInlineTemplateById(t)).attr("class"), u = this.getInlineTemplateById("screenPopupBlockerDiv"), this.popupData = {}, i === !0 && (c = $(u), $("#" + e).append(c), this.popupData.blockerDiv = c), u = this.getInlineTemplateById(t), this.popupData.templateId = t, this.popupData.popupRef = $(u), this.popupData.targetArea = $("#" + e), this.popupData.popupParent = d, o ? this.popupData.popupRef.hide().appendTo(this.popupData.targetArea).show().animate(o, parseInt(o.duration)) : this.popupData.popupRef.hide().appendTo(this.popupData.targetArea).show(), p.onPopupAddedInDom(p.popupData), i === !0 && (this.popupCounter = this.popupCounter + 1, c.attr("id", c.attr("id") + this.popupCounter), this.popupData.blockerDiv = c), void 0 !== r && void 0 !== r.styleClass && (c.removeClass(), c.addClass(r.styleClass)), this.popupData.popupRef.attr("tempId", this.popupData.templateId), this.popupData.objClassRef = this, this.popupDiv_dict[t] = this.popupData, void 0 !== n && (l = t + "___" + n, h = "#" + n, a = $("#" + n, "#" + this.popupData.popupRef.attr("id")), a.attr("id", l), a.on("click", function(t) {
                $(t.target).off("click"), p.removePopupWindow(t.target.id.split("___")[0])
            }), p.popupDiv_dict[t].strCloseId = l))
        }, a.prototype.onPopupAddedInDom = function() {}, a.prototype.onPopupClose = function() {}, a.prototype.removeAllPopupWindow = function() {
            var t = this;
            _.filter(this.popupDiv_dict, function(e) {
                t.removePopupWindow(e.templateId)
            })
        }, a.prototype.closePopup = function(t) {
            var e = t.data.objClassRef;
            e.removePopupWindow(t.data.templateId)
        }, a.prototype.removePopupWindow = function(t) {
            if (void 0 !== t) {
                var e, i = this;
                e = this.popupDiv_dict[t], void 0 !== e && null !== e && (i.onPopupClose(e.templateId), void 0 !== e.strCloseId && $("#" + e.strCloseId, $(e.popupRef)).off("click"), e.popupRef.remove(), (null !== e.blockerDiv || void 0 !== e.blockerDiv) && ($(e.blockerDiv).css("display", "none"), $(e.blockerDiv).remove()), this.popupDiv_dict[t] = null, delete this.popupDiv_dict[t])
            }
        }, a.prototype.manageCommonBroadcastEvent = function(t) {
            if (this.strRegionName === t.data.region) {
                var e;
                switch (t.type) {
                    case this.ActivityEventConst.MANAGE_COMMON_BROADCAST_EVENT:
                        switch (t.data.subTask) {
                            case this.ActivityEventConst.CALL_AND_UPDATE_COMPONENT:
                                e = "self" === t.data.targetId ? this : this[t.data.targetId], e[t.data.methodName].apply(this, t.data.params)
                        }
                }
            }
        }, a.prototype.stopAllRegion = function(t, e, i) {
            var n = {};
            n.task = this.ActivityEventConst.STOP_ALL_REGIONS, n.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, n.state = t, n.ignoreCaller = e, n.activitiesData = i, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, n)
        }, a.prototype.startRegion = function(t, e, i) {
            var n = {};
            n.task = this.ActivityEventConst.START_STOP_REGION, n.regionToStart = t, n.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, n.state = e, n.activitiesData = i, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, n)
        }, a.prototype.hideAllRegions = function(t) {
            var e = {};
            e.task = this.ActivityEventConst.HIDE_ALL_REGION, e.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, e.state = t, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, e)
        }, a.prototype.playerBubbleEvent = function(t) {
            var e = {};
            e.task = t.task, e.type = this.ActivityEventConst.PLAYER_BUBBLE_EVENT, e.customData = t, this.trigger(this.ActivityEventConst.PLAYER_BUBBLE_EVENT, e)
        }, a.prototype.handlePlayerCommonBubbleEvent = function() {}, a.prototype.performTinCanOperation = function(t) {
            o.getInstance().tincanOperation(t)
        }, a.prototype.print = function(t, e, i) {
            t = void 0 !== t ? t : "screenHolder", i = i instanceof Object ? i : {}, e === !0 || "true" === e ? this.printCanvas(t, i) : $("#" + t, this.$el).printArea(i)
        }, a.prototype.printCanvas = function(t, e) {
            var i, n = this,
                o = $("#" + t, this.$el),
                r = o.find("video"),
                a = {};
            s(o[0], {
                useCORS: !0,
                onrendered: function(t) {
                    a = o.offset(), _.filter(r, function(e) {
                        var i, o, r, s, l, c, h, p = $(e),
                            d = {};
                        r = p[0].videoWidth, s = p[0].videoHeight, h = n.greatestCommonDiv(r, s), d.w = r / h, d.h = s / h, l = p.height() / d.h * d.w, c = p.height(), i = p.offset().left - a.left + (p.width() - l) / 2, o = p.offset().top - a.top + (p.height() - c) / 2, t.getContext("2d").drawImage(p[0], i, o, l, c)
                    }), $("#printFrame").remove(), i = $('<iframe id="printFrame" style="height: 1px; border: 0px none; position: absolute; top: 0px; left: 0px;"></iframe>'), i.appendTo($("body")), $('<div id="printDiv" style="overflow: hidden;"><img src=' + t.toDataURL() + "></img></div>").appendTo($("#printFrame")), setTimeout(function() {
                        $("#printFrame").printArea(e)
                    }, 0)
                }
            })
        }, a.prototype.greatestCommonDiv = function(t, e) {
            return 0 === e ? t : this.greatestCommonDiv(e, t % e)
        }, a.prototype.setTinCanHelper = function(t) {
            this.objTinCanHelper = t
        }, a.prototype.sendJSONCompTincanData = function(t, e) {
            var i;
            this.objTinCanHelper && this.sendTincanData === !0 && (e && (i = e), this.bEditor === !1 && this.objTinCanHelper.getInstance().sendStatement(t.customData))
        }, a.prototype.sendStatementToLRS = function(t, e) {
            var i = {};
            i.statement = e, i.compid = this.getID(), i.type = this.componentType, i.action = t, i.name = this.strName, this.bEditor === !1 && this.objTinCanHelper && this.objTinCanHelper.getInstance() && this.objTinCanHelper.getInstance().sendStatement(i)
        }, a.prototype.destroy = function(t) {
            if (this.removeAllPopupWindow(), t !== !0) throw new Error(n.DESTROY_NOT_IMPLMENENTED_IN_CHILD_CLASS);
            return this.isDestroyCalled = !0, this.isDestroyCalled
        }, a
    }), define("player/base/base-simulation-activity", ["player/base/base-activity", "player/controllers/media-controller", "components/confirmpopup/confirm-popup"], function(t, e, i) {
        var n;
        return n = t.extend({
            bEditor: !1,
            objSimPictor: void 0,
            type: "simulation",
            nScreenIndex: 0,
            nTotalScreen: 0,
            screenEventName: void 0,
            bGlobalControls: !1,
            bGlobalComponents: !1,
            objScreen: null,
            objSelectedComp: null,
            objPathUpdater: null
        }), n.prototype.moveToNextScreen = function() {
            var t = this.nScreenIndex;
            return t = this.nScreenIndex + 1, t >= this.nTotalScreen ? (t = this.nTotalScreen - 1, void 0) : (this.launchScreen(t), void 0)
        }, n.prototype.moveToPreviousScreen = function() {
            var t = this.nScreenIndex;
            return t -= 1, 0 > t ? (t = 0, !1) : (this.launchScreen(t), void 0)
        }, n.prototype.jumpToScreenByIndex = function(t) {
            return 0 > t && t >= this.nTotalScreen ? (console.warn("Provided screen index is not within range!!!!!"), !1) : (this.launchScreen(t), void 0)
        }, n.prototype.resetScreen = function() {
            this.launchScreen(this.nScreenIndex)
        }, n.prototype.launchScreen = function(t) {
            var e = this.endCurrentScreen(),
                i = this.ActivityEventConst.MIDDLE_SCREEN_LOAD_EVENT;
            if (this.screenEventName = i, this.removeAllPopupWindow(), e !== !0) throw new Error(this.objErrConst.ERROR_OCCURED_WHILE_DESTROYING_SCREEN_AND_ITS_EVENTS);
            this.nScreenIndex = t, this.startScreenInitlization()
        }, n.prototype.startScreenInitlization = function() {
            var t, e = {};
            e.activityRef = this, this.nTotalScreen = this.jsonData.screens.length, e.jsonData = this.jsonData.screens[this.nScreenIndex], this.languageSupport && (t = this.getScreenText("templateId" + this.nScreenIndex), t && t.length > 0 && (e.jsonData.templateId = t)), void 0 === e.jsonData.jsonSource ? (e.template = this.objInlineTmplDict, this.objSimPictor.initalize(e, this)) : this.loadScreenData(e.jsonData.jsonSource)
        }, n.prototype.loadScreenData = function(t) {
            this.loadJSONData(t, "json", "application/json", "json", this.onScreenJSONLoadComplete, this.dataLoadErrorHandler)
        }, n.prototype.onScreenJSONLoadComplete = function(t, e) {
            e.jsonData.screens[e.nScreenIndex] = t, e.objDataLoader.off(e.objDataLoader.DATA_LOAD_SUCCESS), e.objDataLoader.off(e.objDataLoader.DATA_LOAD_FAILED), e.startScreenInitlization()
        }, n.prototype.onScreenJSONLoadFailed = function() {
            throw this.objDataLoader.off(this.objDataLoader.DATA_LOAD_SUCCESS), this.objDataLoader.off(this.objDataLoader.DATA_LOAD_FAILED), new Error(this.objErrConst.ERROR_WHILE_LOADING_FILE)
        }, n.prototype.loadJSONData = function(t, e, i, n, o, r) {
            var s = this;
            this.objDataLoader.on(this.objDataLoader.DATA_LOAD_SUCCESS, o), this.objDataLoader.on(this.objDataLoader.DATA_LOAD_FAILED, r), this.objDataLoader.load({
                url: t,
                dataType: e,
                contentType: i,
                returnType: n,
                scope: s
            })
        }, n.prototype.onScreenChangeComplete = function() {
            var t = {};
            t.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, t.task = this.ActivityEventConst.MANAGE_NEXT_BACK_NEVIGATION_BUTTON, t.isFirstScreen = 0 === this.nScreenIndex, t.screenIndex = this.nScreenIndex, t.controls = this.getNavButtonData(), t.isLastScreen = this.nTotalScreen - 1 === this.nScreenIndex, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, t)
        }, n.prototype.initlizeControls = function() {
            this.bGlobalControls = void 0 !== this.jsonData.controls, this.bGlobalComponents = void 0 !== this.jsonData.globalComponents
        }, n.prototype.endCurrentScreen = function() {
            return this.objSimPictor.destroyCurrentScreen()
        }, n.prototype.getNavButtonData = function() {
            var t, e, i, n = [];
            for (e = this.jsonData.controls.nevigation.buttons, t = 0; t < e.length; t += 1) i = {}, i.id = e[t].id, i.region = e[t].region, i.method = e[t].methodName, i.param = "nextButton" === e[t].type ? "isFirstScreen" : "isLastScreen", n.push(i);
            return i = {}, i.id = this.jsonData.controls.nevigation.id, i.region = this.jsonData.controls.nevigation.region, i.method = this.jsonData.controls.nevigation.methodName, i.param = "screenIndex", n.push(i), n
        }, n.prototype.updateNevigationControl = function(t) {
            return void 0 === this.objScreen[t.id] ? (console.warn(t.id + " not found!!!!!"), void 0) : (this.objScreen[t.id][t.method].apply(this.objScreen[t.id], [t.param]), void 0)
        }, n.prototype.setStageValue = function(t) {
            this.nScaleValue = t, void 0 !== this.objSimPictor && this.objSimPictor.setStageScaleValue(this.nScaleValue)
        }, n.prototype.onScreenChangEvent = function(t) {
            this.launchScreen(t.screenIndex)
        }, n.prototype.toggleMedia = function(t) {
            t === !0 ? e.getInstance().pauseAllMedia() : e.getInstance().resumeAllMedia()
        }, n.prototype.setLocalText = function() {}, n.prototype.onPopupClose = function(t) {
            void 0 !== this.objScreen.onPopupClose ? this.objScreen.onPopupClose(t) : void 0 !== this.objScreenHelper.onPopupClose && this.objScreenHelper.onPopupClose(t)
        }, n.prototype.onPopupAddedInDom = function(t) {
            void 0 !== this.objScreenHelper.onPopupAddedInDom && this.objScreenHelper.onPopupAddedInDom(t)
        }, n.prototype.onCompUpdatedFromSelector = function(t) {
            t.customData.regionToUpdate = t.customData.compData.regionToUpdate, this.broadcastEvent(t.type, t.customData)
        }, n.prototype.onComponentSelected = function(t) {
            var e = t.target.componentSelector;
            t.selectorRef = e, this.handleEditorEvents(this.ActivityEventConst.COMPONENT_SELECTED, t)
        }, n.prototype.onComponentRightClick = function(t) {
            this.broadcastEvent("onComponentRightClickEvent", t.customData)
        }, t.prototype.modifyActivityListInRegion = function(t, e, i, n, o) {
            var r = {};
            r.regionId = t, r.strActList = e, r.regionToUpdate = t, r.immediateStart = n, r.bAdd = i, r.data = o, r.task = this.ActivityEventConst.APPEND_ACTIVITY_IN_REGION, r.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, r)
        }, n.prototype.onComponentTabBtnClick = function(t) {
            this.objSimPictor.selectComponent(t)
        }, n.prototype.onComponentDeselected = function(t) {
            this.handleEditorEvents(this.ActivityEventConst.COMPONENT_DESELECTED, t)
        }, n.prototype.deselectComponent = function() {
            this.objSelectedComp && (this.objSelectedComp.isSelected(!1), this.objSelectedComp = void 0)
        }, n.prototype.manageWebServiceCall = function(t) {
            var e = {};
            e.task = this.ActivityEventConst.EXECUTE_WEB_SERVICE_CALL, e.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, e.customData = t, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, e)
        }, n.prototype.executeUserLastActionFromOtherRegion = function(t) {
            var e = {};
            e.task = this.ActivityEventConst.EXECUTE_USER_LAST_ACTION_FROM_ANOTHER_REGION, e.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, e.customData = t, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, e)
        }, n.prototype.getRegionChangeNotification = function(t) {
            this.objScreenHelper && void 0 !== this.objScreenHelper.getRegionChangeNotification && this.objScreenHelper.getRegionChangeNotification(t)
        }, n.prototype.flush = function() {
            this.deselectComponent()
        }, n.prototype.showAlert = function(t) {
            var e = new i(t);
            return this.PopupManager.getInstance().launchPopup(e), e
        }, n.prototype.refreshActivityData = function(t) {
            this.objScreenHelper.refreshHelperScreen(t)
        }, n.prototype.handlePlayerCommonBubbleEvent = function(t) {
            this.objScreenHelper && this.objScreenHelper.handlePlayerCommonBubbleEvent && this.objScreenHelper.handlePlayerCommonBubbleEvent.call(this.objScreenHelper, t)
        }, n.prototype.BaseSimulationActivitySuper = t, n.prototype.destroy = function(t) {
            return this.BaseSimulationActivitySuper.prototype.destroy.call(this, t)
        }, n
    }), define("components/answer/model", ["components/commonmodel"], function(t) {
        var e = t.extend({
            defaults: {
                value: "",
                compids: ""
            }
        });
        return e
    }), define("components/answer/answer", ["marionette", "components/case/case", "components/answer/model"], function(t, e, i) {
        var n;
        return n = e.extend({
            objData: null,
            comp_dict: [],
            template: _.template(""),
            feedback: null,
            optionButton: null,
            feed_list: {},
            checkAnswerOptionClicked: null,
            objHintRef: void 0,
            isAnswerCorrect: void 0,
            initialize: function(t) {
                this.comp_dict = [], this.feed_list = {}, this.drop_list = {}, this.btn_list = {}, this.objData = t, this.model = new i(t), this.componentType = "answer"
            },
            onRender: function() {
                void 0 !== this.objData.styleClass && ($(this.$el).addClass(this.objData.styleClass), $(this.el).attr("id", this.strCompId))
            },
            onShow: function() {}
        }), n.prototype.isValid = function(t) {
            var e = !1;
            return e = "radio" === t || "inputtext" === t || "image" === t || "label" === t || "feedback" === t || "hint" === t || "button" === t || "audiohotspot" === t || "dropdown" === t ? !0 : !1
        }, n.prototype.addChild = function(t) {
            var e = t.component;
            switch (e.componentType) {
                case "radio":
                case "inputtext":
                case "dropdown":
                    this.comp_dict.push(e), this.storeChilds(e), e.on("stateChanged", $.proxy(this.stateChanged, this));
                    break;
                case "hint":
                    this.objHintRef = e;
                    break;
                case "feedback":
                    this.feedback = e;
                    break;
                case "button":
                    this.comp_dict.push(e), this.storeChilds(e), this.optionButton = e, e.on("stateChanged", $.proxy(this.stateChanged, this))
            }
            this.AnswerSuper.prototype.addChild.call(this, t)
        }, n.prototype.stateChanged = function(t) {
            this.customEventDispatcher("stateChanged", this, t), t.target.sendStatement()
        }, n.prototype.checkAnswer = function(t) {
            var e, i, n, o, r = !1,
                s = this,
                a = !1;
            if (o = s.comp_dict.length, n = this.objData.answer, null !== this.optionButton) return this.verifyToggleButton(t);
            if (void 0 === n || 1 > n || "" === n) {
                if (t === !0) return "ignore";
                for (i = 0; o > i; i += 1) {
                    switch (c = s.comp_dict[i].componentType) {
                        case "inputtext":
                        case "dropdown":
                            var l = s.comp_dict[i].getValue();
                            "" === l && (r = !0);
                            break;
                        case "button":
                            r = !s.optionButton.bSelected;
                            break;
                        case "radio":
                            r = !s.comp_dict[i].isSelected()
                    }
                    null !== this.feedback && s.comp_dict[i].isSelected() && this.feedback.showFeedback(r)
                }
                return r
            }
            var c, h, p = [];
            if (e = n, o > 1) {
                for (i = 0; o > i; i += 1) switch (c = s.comp_dict[i].componentType) {
                    case "inputtext":
                    case "dropdown":
                        a = !0, compVal = s.comp_dict[i].getValue(), h = compVal, p = "" == p ? h : p + "|" + h
                }
                r = e === p ? !0 : !1
            } else {
                var c, d;
                switch (d = s.comp_dict[0], c = s.comp_dict[0].componentType) {
                    case "inputtext":
                        a = !0, e.toLowerCase() === d.getValue().toLowerCase() && (r = !0);
                        break;
                    case "dropdown":
                        "" !== d.getValue() ? (a = !0, e === d.getValue() && (r = !0)) : r = !0;
                        break;
                    case "radio":
                        d.isSelected() ? (e === d.getValue() && (r = !0), a = !0) : r = !0
                }
            }
            return null !== this.feedback && a === !0 && this.feedback.showFeedback(r), r
        }, n.prototype.isRetrnIgnore = function(t) {
            var e = this.objData.answer;
            return (void 0 === e || e.length < 1 || "" === e) && t === !0 ? "ignore" : !1
        }, n.prototype.verifyToggleButton = function(t) {
            var e = !1,
                i = this.objData.answer.toString(),
                n = this.optionButton.bSelected.toString(),
                t = this.isRetrnIgnore(t);
            return t !== !1 ? t : (e = void 0 === i || i.length < 1 || "" === i ? "false" === n : n === i, null !== this.feedback && this.optionButton.bSelected && (this.feedback.showFeedback(e), e === !0 ? this.optionButton.$el.addClass(this.objData.correctstyle) : this.optionButton.$el.addClass(this.objData.incorrectstyle)), e)
        }, n.prototype.buttonStateChange = function(t) {
            t.customData === !0 && this.customEventDispatcher(t.type, this, t.customData)
        }, n.prototype.changeBtnState = function(t) {
            this.checkAnswerOptionClicked = t.options.answer, this.optionButton.setSelected(!1)
        }, n.prototype.getState = function() {
            var t, e = this.comp_dict.length,
                i = {};
            if (e >= 1)
                for (t = 0; e > t; t += 1) i[this.comp_dict[t].strCompId] = this.comp_dict[t].getState();
            return this.feedback && (i[this.feedback.strCompId] = this.feedback.getState()), i
        }, n.prototype.setState = function(t) {
            var e = this;
            $.each(t, function(t, i) {
                e[t].setState(i)
            })
        }, n.prototype.isReady = function() {
            var t, e, i, n, o, r = [],
                s = {};
            for (i = this.model.get("compids"), e = i.split("|"), t = this.comp_dict[0].componentType, n = 0; n < e.length; n += 1) r.push(this.comp_dict[n].isReady());
            for (o = 0; o < r.length; o += 1)
                if (0 == r[o]) return s = {
                    readyState: !1,
                    type: t
                };
            return s = {
                readyState: !0,
                type: t
            }
        }, n.prototype.disable = function() {
            var t, e, i;
            for (e = this.model.get("compids"), t = e.split("|"), this.$el.removeClass("selectedAnswer"), i = 0; i < t.length; i += 1) $("#" + t[i]).attr("disabled", !0);
            _.filter(this.comp_dict, function(t) {
                t.enable(!1)
            })
        }, n.prototype.enable = function() {
            var t, e, i;
            for (e = this.model.get("compids"), t = e.split("|"), i = 0; i < t.length; i += 1) $("#" + t[i]).attr("disabled", !1);
            _.filter(this.comp_dict, function(t) {
                t.enable(!0)
            })
        }, n.prototype.showAnswer = function() {
            var t, e = this.objData.answer.split("|"),
                i = this.comp_dict[0].componentType,
                n = this.comp_dict.length,
                o = this.objData.answer;
            if (1 == n) {
                switch (i) {
                    case "inputtext":
                        this.comp_dict[0].setText(o);
                        break;
                    case "button":
                        this.comp_dict[0].setSelected(o);
                        break;
                    case "dropdown":
                        this.comp_dict[0].setValue(o);
                        break;
                    default:
                        this.comp_dict[0].$input[0].checked = this.checkAnswer(!0) === !1 ? !0 : !1, this.comp_dict[0].$input[0].checked = this.comp_dict[0].getValue() === o && o && this.comp_dict[0].getValue() ? !0 : !1
                }
                this.hideFeedback()
            } else if (n > 1 && "inputtext" === i) {
                for (t = 0; n > t; t++) this.comp_dict[t].setText(e[t]);
                this.hideFeedback()
            }
        }, n.prototype.reset = function() {
            var t, e, i, n, o = this.comp_dict[0].componentType;
            for (e = this.model.get("compids"), t = e.split("|"), n = 0; n < t.length; n += 1) switch (i = this[t[n]], o) {
                case "inputtext":
                    i.$el.children().removeAttr("disabled"), i.setText("");
                    break;
                case "dropdown":
                    i.$el.children().removeAttr("disabled"), i.defaultState();
                    break;
                case "button":
                    i.$el.children().removeAttr("disabled"), i.setSelected("false"), i.$el.removeClass(this.objData.correctstyle), i.$el.removeClass(this.objData.incorrectstyle);
                    break;
                default:
                    i.$el.children().removeAttr("disabled"), i.$input.removeAttr("checked"), "image" == i.objData.subtype && i.$input.parent().css("background-image", "url(" + i.objData.defaultimgpath + ")")
            }
            this.hideHint(), this.hideFeedback()
        }, n.prototype.clear = function() {
            var t, e, i, n, o = this.comp_dict[0].componentType;
            for (e = this.model.get("compids"), t = e.split("|"), n = 0; n < t.length; n += 1) switch (i = this[t[n]], o) {
                case "inputtext":
                    i.$el.children().removeAttr("disabled"), i.setText("");
                    break;
                case "dropdown":
                    i.$el.children().removeAttr("disabled"), i.defaultState();
                    break;
                case "button":
                    i.$el.children().removeAttr("disabled"), i.setSelected("false");
                    break;
                default:
                    i.$el.children().removeAttr("disabled"), i.$input.removeAttr("checked"), "image" == i.objData.subtype && i.$input.parent().css("background-image", "url(" + i.objData.defaultimgpath + ")")
            }
            this.hideHint(), this.hideFeedback()
        }, n.prototype.showCorrectFeedback = function() {
            var t, e, i, n, o, r;
            for (o = this.comp_dict[0].componentType, e = this.model.get("compids"), t = e.split("|"), i = 0; i < t.length; i += 1) switch (n = $("#" + t[i]), o) {
                case "inputtext":
                    this.checkAnswer() === !0 ? this.showFeedback() : this.hideFeedback();
                    break;
                case "dropdown":
                    r = this.comp_dict[0].getValue(), this.checkAnswer() === !0 && r === this.objData.answer ? this.showFeedback() : this.hideFeedback();
                    break;
                case "button":
                    this.checkAnswer() === !0 ? this.showFeedback() : this.hideFeedback();
                    break;
                default:
                    this.checkAnswer() === !0 ? this.showFeedback() : this.hideFeedback()
            }
        }, n.prototype.hideCorrectFeedback = function() {
            var t, e, i, n, o, r;
            for (o = this.comp_dict[0].componentType, e = this.model.get("compids"), t = e.split("|"), i = 0; i < t.length; i += 1) switch (n = $("#" + t[i]), o) {
                case "inputtext":
                    this.checkAnswer() === !0 && n.val() && this.hideFeedback();
                    break;
                case "dropdown":
                    r = this.comp_dict[0].getValue(), this.checkAnswer() === !0 && r === this.objData.answer && this.hideFeedback();
                    break;
                case "button":
                    this.checkAnswer() === !0 && this.hideFeedback();
                    break;
                default:
                    this.checkAnswer() === !0 && n.is(":checked") && this.hideFeedback()
            }
        }, n.prototype.showIncorrectFeedback = function() {
            var t, e, i, n, o;
            for (o = this.comp_dict[0].componentType, e = this.model.get("compids"), t = e.split("|"), i = 0; i < t.length; i += 1) switch (n = $("#" + t[i]), o) {
                case "inputtext":
                    this.checkAnswer() === !1 && n.val() ? this.showFeedback() : this.hideFeedback();
                    break;
                case "dropdown":
                case "button":
                    this.checkAnswer() === !1 ? this.showFeedback() : this.hideFeedback();
                    break;
                default:
                    this.checkAnswer() === !1 && n.is(":checked") ? this.showFeedback() : this.hideFeedback()
            }
        }, n.prototype.hideIncorrectFeedback = function() {
            var t, e, i, n, o;
            for (o = this.comp_dict[0].componentType, e = this.model.get("compids"), t = e.split("|"), i = 0; i < t.length; i += 1) switch (n = $("#" + t[i]), o) {
                case "inputtext":
                    this.checkAnswer() === !1 && n.val() && this.hideFeedback();
                    break;
                case "dropdown":
                    this.checkAnswer() === !1 && this.hideFeedback();
                    break;
                case "button":
                    this.checkAnswer() === !1 && this.hideFeedback();
                    break;
                default:
                    this.checkAnswer() === !1 && n.is(":checked") && this.hideFeedback()
            }
        }, n.prototype.handleSingleSelection = function(t) {
            this.optionButton && this.optionButton.setSelected(!t)
        }, n.prototype.freezeCorrect = function() {
            var t, e, i, n, o = this.comp_dict[0].componentType;
            for (e = this.model.get("compids"), t = e.split("|"), i = 0; i < t.length; i += 1) {
                switch (n = $("#" + t[i]), o) {
                    case "inputtext":
                        this.checkAnswer() === !0 && n.val() && n.prop("disabled", !0);
                        break;
                    case "dropdown":
                        this.checkAnswer() === !0 && n.find("dl").attr("disabled", !0);
                        break;
                    case "button":
                        this.checkAnswer() === !0 && this.comp_dict[0].$el.prop("disabled", !0);
                        break;
                    default:
                        this.checkAnswer() === !0 && n.is(":checked") && n.prop("disabled", !0)
                }
                this.hideFeedback()
            }
        }, n.prototype.showFeedback = function() {
            this.checkAnswer(!0)
        }, n.prototype.hideFeedback = function() {
            this.feedback && this.feedback.hide()
        }, n.prototype.showHint = function() {
            this.objHintRef && this.objHintRef.showHint()
        }, n.prototype.hideHint = function() {
            this.objHintRef && this.objHintRef.hideHint()
        }, n.prototype.selectedState = function() {
            this.optionButton.bSelected || (this.customEventDispatcher("click", this, this), this.customEventDispatcher("compClick", this, this))
        }, n.prototype.storeChilds = function(t) {
            var e, i, n;
            return n = this.model.get("compids"), e = n.length > 0 ? n.split("|") : [], i = e.indexOf(t.getID()), 0 > i ? (e.push(t.getID()), this.model.set("compids", e.join("|")), !0) : !1
        }, n.prototype.AnswerSuper = e, n.prototype.destroy = function() {
            return this.comp_dict = [], this.feedback = null, this.AnswerSuper.prototype.destroy.call(this, !0)
        }, n
    }), define("components/radio/model", ["components/commonmodel"], function(t) {
        var e = t.extend({
            defaults: {
                view: "",
                checked: "",
                disabled: ""
            }
        });
        return e
    }), define("components/radio/radio", ["marionette", "player/base/base-item-comp", "components/radio/model"], function(t, e, i) {
        var n;
        return n = e.extend({
            objData: null,
            template: _.template("<span><input id='' name='' type='{{view}}'  /></span>"),
            $input: null,
            tagName: "div'",
            initialize: function(t) {
                this.objData = t, this.model = new i(t), this.componentType = "radio"
            },
            onRender: function() {
                var t = this;
                this.$input = this.$el.find("input"), this.$input.attr("name", this.model.get("name")), ("true" === this.model.get("checked") || this.model.get("checked") === !0) && this.$input.attr("checked", !0), ("true" === this.model.get("disabled") || this.model.get("disabled") === !0) && this.$input.attr("disabled", !0), this.bEditor === !1 ? (this.$input.attr("class", this.model.get("styleClass")), this.$input.off("click").on("click", $.proxy(t.compClick, t)), this.$input.off("mouseover").on("mouseover", $.proxy(t.compRollover, t)), this.$input.off("mouseout").on("mouseout", $.proxy(t.compRollout, t))) : (void 0 !== this.model.get("styleClass") && this.$el.attr("class", this.model.get("styleClass")), this.$input.attr("class", this.model.get("styleClass")), this.$input.css("left", "0px"), this.$input.css("top", "0px"), this.$input.css("display", "inherit"), this.$input.css("pointer-events", "none")), "image" === this.objData.subtype && (this.$input.css("opacity", "0"), this.$input.parent().css("position", "relative"), this.$input.parent().css("width", this.objData.width), this.$input.parent().css("height", this.objData.height), this.$input.css("width", this.objData.width), this.$input.css("height", this.objData.height), this.$input.parent().css("background-size", "100% 100%"), this.$input.parent().css("background-position", "center center"), this.$input.parent().css("display", "inline-block"), this.$input.parent().css("background-repeat", "no-repeat"), this.$input.parent().css("background-image", "url(" + this.objData.defaultimgpath + ")"), "true" === this.model.get("checked") || this.model.get("checked") === !0 ? (this.$input.attr("checked", !0), this.$input.parent().css("background-image", "url(" + this.objData.selectedimgpath + ")")) : (this.$input.attr("checked", !1), this.$input.parent().css("background-image", "url(" + this.objData.defaultimgpath + ")")), "true" === this.model.get("disabled") || this.model.get("disabled") === !0 ? this.$input.parent().css("pointer-events", "none") : this.$input.parent().css("pointer-events", "auto"))
            },
            getValue: function() {
                return this.model.get("value")
            },
            isSelected: function() {
                return this.$input.is(":checked")
            },
            onShow: function() {
                this.customEventDispatcher(this.eventConst.CREATION_COMPLETE, this, this)
            }
        }), n.prototype.enable = function(t) {
            t === !0 || "true" === t ? (this.isEnabled = !0, this.$input.removeAttr("disabled"), this.$el.css("cursor", "pointer")) : (this.isEnabled = !1, this.$input.attr("disabled", "disabled"), $(this.$el).children().attr("disabled", "disabled"), this.$el.css("cursor", "auto"))
        }, n.prototype.compClick = function() {
            "radio" === this.componentType && void 0 !== this.objData.name && "" !== this.objData.name && $("input[name = " + this.objData.name + "]").parent().css("background-image", "url(" + this.objData.defaultimgpath + ")"), "image" !== this.objData.subtype || "true" !== this.getState() && this.getState() !== !0 || this.$input.parent().css("background-image", "url(" + this.objData.selectedimgpath + ")"), this.customEventDispatcher("compClick", this, this.getValue()), this.customEventDispatcher("click", this, this.getValue()), this.customEventDispatcher("stateChanged", this, this.getValue())
        }, n.prototype.compRollover = function() {
            this.customEventDispatcher("mouseover", this, this.getValue()), this.customEventDispatcher("rollover", this, this.getValue())
        }, n.prototype.compRollout = function() {
            this.customEventDispatcher("mouseout", this, this.getValue()), this.customEventDispatcher("rollout", this, this.getValue())
        }, n.prototype.getState = function() {
            return this.isSelected()
        }, n.prototype.setState = function(t) {
            this.$input.prop("checked", t)
        }, n.prototype.sendStatement = function() {
            this.sendStatementToLRS("stateChanged_", this.getValue())
        }, n.prototype.isReady = function() {
            return this.isSelected()
        }, n.prototype.__super__ = e, n.prototype.isValid = function() {
            return !1
        }, n.prototype.destroy = function() {
            return this.$el.off("click"), this.$el.off("mouseover"), this.$el.off("mouseout"), this.$el.off("stateChanged"), this.__super__.prototype.destroy.call(this, !0)
        }, n
    }), define("components/popup/popup", ["marionette", "player/base/base-popup-comp", "player/manager/popup-manager"], function(t, e, i) {
        var n;
        return n = e.extend({
            objData: null,
            template: _.template(""),
            popupParent: void 0,
            bModel: !1,
            popManagerInstance: null,
            initialize: function(t) {
                this.objData = t, this.popManagerInstance = i.getInstance(), ("true" === this.objData.modal || this.objData.modal === !0) && (this.bModel = !0), this.componentType = "popup"
            },
            onRender: function() {
                void 0 !== this.objData.styleClass && $(this.$el).addClass(this.objData.styleClass), this.popupParent = $(this.$el).parent(), $(this.el).attr("id", this.strCompId), "hide" === this.objData.default ? this.bEditor === !1 && $(this.$el).hide() : this.launch()
            }
        }), n.prototype.isValid = function(t) {
            var e = !1;
            return e = "radio" === t || "answer" === t ? !1 : !0
        }, n.prototype.isModel = function() {
            return this.bModel
        }, n.prototype.launch = function() {
            var t = "#screenBlocker";
            this.objData.parent && (t = this.objData.parent), this.popManagerInstance.launchPopupComponent(this, t)
        }, n.prototype.remove = function() {
            this.popManagerInstance.removePopupComponent(this)
        }, n.prototype.popupRemoved = function() {
            this.customEventDispatcher("close", this, this)
        }, n.prototype.popupLaunched = function() {
            this.customEventDispatcher("open", this, this)
        }, n.prototype.flush = function() {
            this.popupParent && !this.popupParent.find(this.$el) && this.popupParent.append(this.$el)
        }, n.prototype.__super__ = e, n.prototype.destroy = function() {
            return this.flush(), this.__super__.prototype.destroy(!0)
        }, n
    }), define("editorroot/answer-editor", ["marionette", "editorroot/case-editor"], function(t, e) {
        var i;
        return i = e.extend({}), i.prototype.AnswerEditorSuper = e, i.prototype.destroy = function() {
            return this.AnswerEditorSuper.prototype.destroy(this, !0)
        }, i
    }), define("editorroot/animation-player-editor", ["marionette", "player/editor/base-editor"], function(t, e) {
        var i;
        return i = e.extend({
            defaultCompData: {}
        }), i.prototype.getComponent = function(t, e) {
            this.isSimComp = e;
            var i = void 0 !== t.data ? t : $(t);
            this.createCompData(i)
        }, i.prototype.createCompData = function(t) {
            if (this.defaultCompData = this.prepareDefaultData(t), void 0 === this.defaultCompData) throw new Error(this.errorConst.ANIMATION_PLAYER_DEFAUTL_DATA_MISSING);
            this.createComponent(t)
        }, i.prototype.onComponentCreationComplete = function(t) {
            this.objComp = t, this.objComp.defaultData = this.defaultCompData, this.componentCreated()
        }, i.prototype.appendChild = function(t, e) {
            var i;
            return i = $(t).find("[id=" + e.id + "]"), i.removeAttr("type"), i.removeAttr("defaultData"), i.removeAttr("compname"), i = void 0, !1
        }, i.prototype.AnimationPlayerEditorSuper = e, i.prototype.destroy = function() {
            return this.AnimationPlayerEditorSuper.prototype.destroy(this, !0)
        }, i
    }), define("editorroot/audiohotspot-editor", ["marionette", "player/editor/base-editor"], function(t, e) {
        var i;
        return i = e.extend({
            defaultCompData: {}
        }), i.prototype.getComponent = function(t, e) {
            this.isSimComp = e;
            var i = void 0 !== t.data ? t : $(t);
            i.data && ("true" === i.data.loop ? i.data.loop = !0 : "false" === i.data.loop && (i.data.loop = !1), "true" === i.data.ui ? i.data.ui = !0 : "false" === i.data.ui && (i.data.ui = !1)), this.createCompData(i)
        }, i.prototype.createCompData = function(t) {
            if (this.defaultCompData = this.prepareDefaultData(t), this.checkSource(this.defaultCompData), void 0 === this.defaultCompData) throw new Error(this.errorConst.SLIDER_DEFAULT_DATA_MISSING);
            this.createComponent(t)
        }, i.prototype.checkSource = function(t) {
            var e, i, n = t.source;
            for (e = 0; e < n.length; e += 1) i = n[e], this.bEditor === !1 && (i.path = this.objPathUpdater.getValidatedPath(this.regionId.classRef.editorController.regionId, i.path))
        }, i.prototype.onComponentCreationComplete = function(t) {
            this.objComp = t, this.objComp.defaultData = this.defaultCompData, this.componentCreated()
        }, i.prototype.AudioHotSpotEditorSuper = e, i.prototype.destroy = function() {
            return this.AudioHotSpotEditorSuper.prototype.destroy(this, !0)
        }, i
    }), define("libs/utils/json-helper", ["marionette"], function() {
        var t;
        return t = function() {
            return _.extend(this, Backbone.Events)
        }, t.prototype.searchByProperty = function(t, e) {
            this.searchByKey(e, t, this)
        }, t.prototype.searchCompJsonFilePath = function(t, e) {
            var i, n = [],
                o = t.screens[0].components;
            if (o)
                for (i = 0; i < o.length; i += 1) void 0 !== o[i][e] && n.push({
                    index: i,
                    path: o[i][e]
                });
            return n
        }, t.prototype.searchInJSON = function(t, e) {
            var i, n, o, r, s = this;
            if (t.id === e) r = {}, r.index = 0, r.node = t;
            else if (void 0 !== t.components) r = this.searchInJSON(e, t.components);
            else
                for (n = 0; n < t.length && (i = t[n], void 0 === r); n += 1)
                    if (o = s.compareById(e, i), o === !1 && i.components) r = this.searchInJSON(e, i.components);
                    else if (o === !0) {
                r = {}, r.index = n, r.node = i, r.parent = t;
                break
            }
            return r
        }, t
    }), define("player/base/base-activity-model", ["require", "exports", "module"], function() {
        var t = Backbone.Model.extend({
            defaults: {
                appetizer: "caesar salad",
                entree: "ravioli",
                dessert: "cheesecake"
            }
        });
        return t
    }), define("components/sim-act/simulation-model", ["player/base/base-activity-model"], function(t) {
        var e = t.extend({});
        return e.prototype.__super__ = t, e
    }), define("components/sim-act/simulation-activity", ["player/base/base-simulation-activity", "player/utils/data-loader", "components/sim-act/simulation-model", "libs/utils/json-helper"], function(t, e, i, n) {
        var o = t.extend({
            template: _.template("<div>simulation activity</div>"),
            activityData: void 0,
            jsonData: void 0,
            objDataLoader: void 0,
            userData: {},
            objJsonHelper: void 0,
            arrCompFileToLoad: void 0,
            counterIndex1: 5,
            isScreeenEdited: !1,
            styleClassRef: void 0,
            regions: {
                screenHolder: "#screenHolder",
                globalCompHolder: "#globalCompHolder"
            },
            initialize: function(t) {
                this.objJsonHelper = new n, this.initBaseActivity(), this.activityData = t, this.userData = this.activityData.activityData, this.SimulationActivitySuper.prototype.initialize.call(this, !0)
            }
        });
        return o.prototype.onActivityCreationComplete = function() {
            this.SimulationActivitySuper.prototype.onActivityCreationComplete.call(this, !0);
            var t, i = this.activityData;
            this.objDataLoader = new e, this.broadcastEventReceiver(this.ActivityEventConst.MANAGE_COMMON_BROADCAST_EVENT, this, "manageCommonBroadcastEvent"), this.objPathUpdater.setRootPath(this.strRegionName, i.dataPath), this.v3Html === !1 && void 0 !== i.dataPath ? (t = i.dataPath, t = this.objPathUpdater.resolvePath(t), this.loadJSONData(t, "json", "application/json", "json", this.handleJsonDataLoadComplete, this.dataLoadErrorHandler)) : this.v3Html === !0 && (this.objSimPictor.v3Html = !0, this.prepareJsonDataFromHTML(i)), this.bEditor === !0 && (this.objSimPictor.objActRef = this)
        }, o.prototype.prepareJsonDataFromHTML = function(t) {
            var e, i = t.stylePath,
                n = {},
                o = this.$el.find("[component=mgcomp]");
            for (n.screens = [], n.screens.push({
                    components: []
                }), e = 0; e < o.length; e += 1) {
                var r, s, a, t = {},
                    l = o[e];
                s = $(l).data();
                for (r in s) switch (a = r.split("json")[1].toLowerCase()) {
                    case "parentobject":
                        t.parentObject = {}, t.parentObject.parentId = s[r].parentId;
                        break;
                    case "data":
                        t.data = s[r], "undefined" == typeof s[r] && (t.data = {});
                        break;
                    case "name":
                        t.name = s[r].split('"')[1];
                        break;
                    case "classname":
                        t.type = s[r];
                        break;
                    case "templateid":
                        t.templateId = s[r];
                        break;
                    default:
                        t[a] = s[r]
                }
                t.htmlData = $(this.getHtmlForComp(l)), t.id = $(l).attr("id"), n.screens[0].components.push(t)
            }
            this.jsonData = n, this.onAllDataLoadComplete();
            var c, h = i;
            c = this.bEditor === !0 ? "text!" : "css!", h = c + h + "?" + (new Date).getTime(), require([h], function(t) {})
        }, o.prototype.getHtmlForComp = function(t) {
            var e, i, n, o, r, s = [];
            for (e = t, i = e.attributes, r = i.length, n = 0; r > n; n++) s.push(i[n].nodeName);
            for (o = 0; o < s.length; o++) switch (s[o]) {
                case "data-json-event":
                case "data-json-data":
                    e.removeAttribute(s[o])
            }
            return e
        }, o.prototype.activityInitInEditMode = function() {
            var t = {};
            t.task = this.ActivityEventConst.SIM_PICTOR_INITALIZED, t.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, t.simPictor = this.objSimPictor, t.regionToUpdate = this.strRegionName, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, t)
        }, o.prototype.manageCommonBroadcastEvent = function(t) {
            if (this.strRegionName === t.data.region) switch (t.type) {
                case this.ActivityEventConst.MANAGE_COMMON_BROADCAST_EVENT:
                    switch (t.data.subTask) {
                        case this.ActivityEventConst.CALL_AND_UPDATE_COMPONENT:
                            delete t.data.region, this.objSimPictor.callAndUpdateComponent(t.data)
                    }
            }
        }, o.prototype.SimulationActivitySuper = t, o.prototype.setPictorRef = function(t) {
            this.objSimPictor = t
        }, o.prototype.handleJsonDataLoadComplete = function(t, e) {
            e.jsonData = t, e.objDataLoader.off(e.objDataLoader.DATA_LOAD_SUCCESS), e.objDataLoader.off(e.objDataLoader.DATA_LOAD_FAILED), void 0 !== t.defaults && $.each(t.defaults, function(t, i) {
                e.model.set(t, i)
            }), void 0 !== e.activityData.stylePath ? (console.lo, e.loadCSSData(e.activityData.stylePath + "?" + (new Date).getTime())) : e.onAllDataLoadComplete()
        }, o.prototype.onAllDataLoadComplete = function() {
            var t = [];
            this.v3Html === !0 || (t = this.objJsonHelper.searchCompJsonFilePath(this.jsonData, "compjsonsrc")), this.arrCompFileToLoad = t, this.counterIndex1 = 0, 0 === t.length ? (this.initlizeControls(), this.startScreenInitlization()) : this.prepareScreenComponentsList(t[this.counterIndex1]), this.objSimPictor.onActivityCreationComplete()
        }, o.prototype.prepareScreenComponentsList = function(t) {
            this.loadJSONData(t.path, "json", "application/json", "json", this.onCompJsonLoadDone, this.dataLoadErrorHandler)
        }, o.prototype.onCompJsonLoadDone = function(t, e) {
            e.objDataLoader.off(e.objDataLoader.DATA_LOAD_SUCCESS), e.objDataLoader.off(e.objDataLoader.DATA_LOAD_FAILED), e.arrCompFileToLoad[e.counterIndex1].loadedData = t, e.arrCompFileToLoad.length > e.counterIndex1 + 1 ? (e.counterIndex1 = e.counterIndex1 + 1, e.prepareScreenComponentsList(e.arrCompFileToLoad[e.counterIndex1])) : e.combineArray()
        }, o.prototype.combineArray = function() {
            var t, e, i, n = this.jsonData.screens[0].components,
                o = [];
            for (this.counterIndex1 = 0, t = this.arrCompFileToLoad.length - 1, o = n, t = this.arrCompFileToLoad.length - 1; t >= 0; t -= 1) e = Number(this.arrCompFileToLoad[t].index), i = this.arrCompFileToLoad[t].loadedData.components, o = this.mergeArrays(o, i, e);
            this.jsonData.screens[0].components = o, this.initlizeControls(), this.startScreenInitlization()
        }, o.prototype.mergeArrays = function(t, e, i) {
            var n = 0,
                o = [];
            for (n = 0; i > n; n += 1) o.push(t[n]);
            for (n = 0; n < e.length; n += 1) o.push(e[n]);
            for (n = i + 1; n < t.length; n += 1) o.push(t[n]);
            return o
        }, o.prototype.dataLoadErrorHandler = function() {
            throw this.objDataLoader.off(this.objDataLoader.DATA_LOAD_SUCCESS), this.objDataLoader.off(this.objDataLoader.DATA_LOAD_FAILED), new Error(this.objErrConst.ERROR_WHILE_LOADING_FILE)
        }, o.prototype.loadCSSData = function(t) {
            var e, i, n = this;
            e = this.objPathUpdater.resolvePath(t), i = this.bEditor === !0 ? "text!" : "css!", e = i + e, require([e], function(e) {
                void 0 !== e && (e = e.replace(/assets\/media/g, n.objPathUpdater.dloRootPath() + t.slice(0, t.lastIndexOf("/")) + "/assets/media")), n.onAllDataLoadComplete()
            })
        }, o.prototype.showAlertMsg = function(t, e, i, n, o, r, s, a) {
            var l = {};
            return l.title = n, l.message = t, void 0 !== o && (l.yesBtnLabel = o), void 0 !== r && (l.noBtnLabel = r), void 0 !== s && (l.cancelBtnLabel = s), void 0 !== i && (l.button = i), l.styles = a, l.htmlTemplate = e, this.showAlert(l)
        }, o.prototype.showMessage = function(t, e, i, n, o, r, s) {
            this.showAlertMsg(t, this.getInlineTemplateById("msgBoxTemplate"), i, e, n, o, r, s)
        }, o.prototype.setScreenText = function(t, e) {
            e && e.data && e.data.screenText ? "setScreenText" in t && "function" == typeof t.setScreenText && t.setScreenText(this.getScreenText(e.data.screenText)) : e && e.data && e.data.sourceId && t.setExternalAssetsId(this.getMediaAssetsPath(e.data.sourceId))
        }, o.prototype.getMediaAssetsPath = function(t) {
            var e, i, n, o;
            return n = $(this.commonMediaNode).find("assets[id=" + t + "]"), e = $(this.localText).find("assets[id=" + t + "]"), o = $(n[0]).attr("path"), i = $(e[0]).attr("path"), void 0 === i && (i = o), i
        }, o.prototype.changeWizardView = function(t) {
            this.objSimPictor.changeWizardView(t.customData)
        }, o.prototype.handleEditorEvents = function(t, e) {
            var i = {};
            i.task = t, i.type = this.ActivityEventConst.PLAYER_EDIT_COMPONENT_EVENT, i.compData = e, i.regionToUpdate = this.strRegionName, this.trigger(this.ActivityEventConst.PLAYER_EDIT_COMPONENT_EVENT, i)
        }, o.prototype.broadcastEditorTask = function(t, e) {
            var i = {},
                n = {};
            n.compData = e, n.task = t, i.data = n, i.type = this.ActivityEventConst.HANDLE_EDITOR_TASK_EVENT, i.task = this.ActivityEventConst.HANDLE_EDITOR_TASK_EVENT, this.trigger(this.ActivityEventConst.HANDLE_EDITOR_TASK_EVENT, i)
        }, o.prototype.receivePropertyManagerEvents = function(t) {
            this.objScreenHelper && void 0 !== this.objScreenHelper.receivePropertyManagerEvents && this.objScreenHelper.receivePropertyManagerEvents(t)
        }, o.prototype.launchActivityInEditor = function(t) {
            this.objScreenHelper && void 0 !== this.objScreenHelper.receivePropertyManagerEvents && this.objScreenHelper.receivePropertyManagerEvents(t)
        }, o.prototype.launchActivityInEditor = function(t, e, i, n) {
            var o = {};
            n = void 0 === n ? !1 : n, o.regionId = t, o.regionToChange = t, o.data = i, o.strActivityID = e, o.bLaunchByIndex = n, o.editorOnly = !0, o.task = this.ActivityEventConst.LAUNCH_ACTIVITY_IN_REGION, o.type = this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, this.trigger(this.ActivityEventConst.PLAYER_COMMON_TASK_EVENT, o)
        }, o.prototype.onPlayerStop = function(t) {
            this.objScreenHelper && void 0 !== this.objScreenHelper.onPlayerStop && this.objScreenHelper.onPlayerStop(t)
        }, o.prototype.destroy = function() {
            return this.flush(), this.bEditor === !0 && this.styleClassRef.remove(), this.screenHolder.close(), void 0 !== this.activityData.stylePath && this.removeCSS(this.activityData.stylePath.split(".css")[0]), this.objSimPictor && this.objSimPictor.destroy(), delete this.objSimPictor, this.SimulationActivitySuper.prototype.destroy.call(this, !0)
        }, o
    }), define("components/animation/model", ["components/commonmodel"], function(t) {
        var e = t.extend({
            defaults: {
                CurrentPoint: "0",
                options: ""
            }
        });
        return e
    }), define("components/animation/animation", ["marionette", "components/case/case", "components/animation/model"], function(t, e, i) {
        var n = e.extend({
            objData: null,
            template: _.template(""),
            refChild: null,
            speed: null,
            continuous: null,
            workingState: !1,
            currentIndex: 0,
            objDraggable: void 0,
            objDestination: null,
            initialize: function(t) {
                this.objData = t, this.model = new i(t), this.componentType = "animation", this.speed = t.speed, this.continuous = "true" === t.continuous ? !0 : !1, this.dindex = t.dindex, this.objDestination = t.animation, "" === t.speed && (this.speed = 1e3)
            },
            onRender: function() {
                this.$el.addClass(this.styleClass())
            },
            onShow: function() {
                this.customEventDispatcher(this.eventConst.CREATION_COMPLETE, this, this)
            },
            stateDict: {}
        });
        return n.prototype.AnimationSuper = e, n.prototype.ANIMATION_START = "onAnimationStart", n.prototype.ANIMATION_COMPLETE = "onAnimationComplete", n.prototype.addChild = function(t) {
            var e = t.component;
            this.refChild = e, this.AnimationSuper.prototype.addChild.call(this, t)
        }, n.prototype.isValid = function(t) {
            var e = !0;
            return ("radio" === t || "answer" === t || "hint" === t) && (e = !1), e
        }, n.prototype.storeChilds = function(t, e) {
            var i, n, o;
            return o = this.model.get(e), i = o.length > 0 ? o.split("|") : [], n = i.indexOf(t.getID()), 0 > n ? (i.push(t.getID()), this.model.set(e, i.join("|")), this.stateDict[t.getID()] = 1, !0) : !1
        }, n.prototype.startAnimation = function(t, e) {
            if (t || (t = 0), void 0 !== typeof this.objDestination[t] && (this.workingState === !1 || e === !0)) {
                this.currentIndex = t, this.workingState = !0, this.customEventDispatcher(this.ANIMATION_START, this, this);
                var i = this.objDestination[t].startx,
                    n = this.objDestination[t].starty,
                    o = this.objDestination[t].left,
                    r = this.objDestination[t].top,
                    s = this.objDestination[t].rotate;
                this.startPosition(i, n), void 0 !== s ? this.animateRotate(s, o, r) : this.doAnimate(o, r)
            }
        }, n.prototype.startPosition = function(t, e) {
            this.$el.css({
                position: "absolute",
                top: e,
                left: t
            })
        }, n.prototype.animateRotate = function(t, e, i) {
            var n = this;
            this.$el.animate({
                deg: t
            }, {
                duration: parseInt(n.speed),
                step: function(t) {
                    n.$el.css({
                        transform: "rotate(" + t + "deg)",
                        "-moz-transform": "rotate(" + t + "deg)",
                        "-webkit-transform": "rotate(" + t + "deg)",
                        "-o-transform": "rotate(" + t + "deg)",
                        "-ms-transform": "rotate(" + t + "deg)"
                    })
                },
                complete: function() {
                    n.doAnimate(e, i)
                }
            })
        }, n.prototype.doAnimate = function(t, e) {
            var i = this;
            i.$el.animate({
                position: "absolute",
                top: e,
                left: t
            }, parseInt(i.speed), function() {
                i.continuous ? (i.currentIndex++, i.currentIndex < i.objDestination.length ? i.startAnimation(i.currentIndex, !0) : (i.customEventDispatcher(i.ANIMATION_COMPLETE, i, i), i.workingState = !1, i.$el.prop("deg", 0))) : (i.customEventDispatcher(i.ANIMATION_COMPLETE, i, i), i.workingState = !1, i.$el.prop("deg", 0))
            })
        }, n.prototype.resetAnimation = function() {
            this.currentIndex = 0, this.stopAnimation(), this.$el.attr("style", ""), this.$el.prop("deg", 0)
        }, n.prototype.stopAnimation = function() {
            this.workingState = !1, this.$el.stop(!0, !1)
        }, n.prototype.styleClass = function(t) {
            return t ? (this.model.set("styleClass", t), void 0) : this.model.get("styleClass")
        }, n.prototype.destroy = function() {
            return this.AnimationSuper.prototype.destroy.call(this, !0)
        }, n
    }), define("player/base/base-media-player", ["marionette", "player/base/base-item-comp", "player/constants/playerconst", "player/controllers/media-controller"], function(t, e, i, n) {
        var o;
        return o = e.extend({
            objMediaControllers: n.getInstance(),
            PlayerConstants: i,
            isMediaPlayer: !0,
            mediaPlayerType: "hello",
            MediaPlayerObject: void 0,
            isDestroyCalled: !1,
            hasCuePoints: !1,
            cuePoints: [],
            eventPrefix: "cuepoint_",
            orgCuePoints: null,
            nStageScale: 1,
            lastCuePoint: -1,
            bEditor: !1
        }), o.prototype.setStageScaleValue = function(t) {
            this.nStageScale = t
        }, o.prototype.getStageScaleValue = function() {
            return this.nStageScale
        }, o.prototype.initBaseMediaPlayer = function(t, e) {
            this.mediaPlayerType = e, this.MediaPlayerObject = t
        }, o.prototype.customEventDispatcher = function(t, e, i) {
            var n = {};
            n.data = e, n.customData = i, n.target = e, n.type = t, e.trigger(t, n)
        }, o.prototype.setID = function(t) {
            this.strCompId = t, this.objMediaControllers.registerMedia(this.MediaPlayerObject, this.mediaPlayerType)
        }, o.prototype.setEventPrefix = function(t) {
            this.eventPrefix = t
        }, o.prototype.cuePointEventDispatcher = function(t, e) {
            var i, n, o, r;
            for (r = 1e3 * e, i = 0; i < this.cuePoints.length && r >= this.cuePoints[i]; i += 1) o = this.cuePoints[i];
            o && this.lastCuePoint !== o && (n = this.eventPrefix + o, this.customEventDispatcher(n, t, e), this.lastCuePoint = o, o = void 0)
        }, o.prototype.playMeida = function() {}, o.prototype.pauseMedia = function() {}, o.prototype.stopMedia = function() {}, o.prototype.resume = function() {}, o.prototype.__super__ = e, o.prototype.unregisterMedia = function() {
            this.objMediaControllers.unregisterMedia(this.MediaPlayerObject, this.mediaPlayerType)
        }, o.prototype.destroy = function(t) {
            if (t !== !0) throw new Error("Base Media Player child Destroy must be implemented in child class.");
            return this.isDestroyCalled = !0, this.__super__.prototype.destroy(!0)
        }, o
    }), define("components/audioplayer/audio-player-model", ["player/base/base-activity-model"], function(t) {
        var e = t.extend({
            defaults: {
                data: {},
                loop: !1,
                withUi: !1
            }
        });
        return e.prototype.__super__ = t, e
    }), define("components/audioplayer/audio-player", ["marionette", "player/base/base-media-player", "components/audioplayer/audio-player-model"], function(t, e, i) {
        var n = e.extend({
            template: _.template(""),
            initialize: function(t) {
                this.objData = t, this.members = {
                    tag: void 0,
                    ui_play: void 0,
                    ui_pause: void 0,
                    ui_stop: void 0,
                    ui_seekBar: void 0,
                    ui_display: void 0,
                    ui_volume: void 0,
                    ui_volumeBar: void 0,
                    objSeekBar: void 0,
                    objVolumeBar: void 0,
                    constants: void 0,
                    totalDuration: 0,
                    currentTime: 0,
                    isPlaying: !1,
                    isPaused: !1,
                    currentVolume: 1,
                    isVolumeChanging: !1,
                    endTime: void 0,
                    bready: !1
                }, this.members.tag = null, this.model = new i, void 0 !== t && (void 0 !== t.loop && this.model.set("loop", t.loop), void 0 !== t.source && this.model.set("data", t.source), void 0 !== t.ui && (this.model.set("withUi", t.ui), void 0 !== t.context && (this.members.base_activity = t.context)), this.storeCuePoints(t), this.members.tag = document.createElement("audio"), this.setSource(this.model.get("data")), this.applyAudioEvents()), this.componentType = "audio", this.initBaseMediaPlayer(this, this.PlayerConstants.AUDIO_MEDIA_PLAYER)
            },
            storeCuePoints: function(t) {
                t.hasOwnProperty("cuePoints") && t.cuePoints.length > 0 && (this.hasCuePoints = !0, this.cuePoints = t.cuePoints.slice(0, t.cuePoints.length), this.orgCuePoints = _.extend({}, t.cuePoints), this.cuePoints.sort(function(t, e) {
                    return t - e
                })), t.hasOwnProperty("eventPrefix") && void 0 !== t.eventPrefix && (this.eventPrefix = t.eventPrefix)
            },
            setSource: function(t) {
                var e, i;
                if (i = this.members.tag, t instanceof Array) {
                    for (e = 0; e < t.length; e += 1)
                        if ("mp3" === t[e].type) {
                            if (i.canPlayType("audio/mpeg;")) {
                                i.setAttribute("src", t[e].path);
                                break
                            }
                        } else if ("ogg" === t[e].type && i.canPlayType("audio/ogg;")) {
                        i.setAttribute("src", t[e].path);
                        break
                    }
                } else i.setAttribute("src", t)
            },
            applyAudioEvents: function() {
                var t, e, i;
                e = this, t = e.members, i = t.tag, void 0 !== i && (i.loadStart = function() {
                    this.addEventListener("canplay", i.canPlay), this.addEventListener("loadedmetadata", i.metaLoaded)
                }, i.metaLoaded = function() {
                    this.removeEventListener("loadedmetadata", i.metaLoaded), t.totalDuration = this.duration, t.currentTime = 0, e.updatePlayerUIValues()
                }, i.canPlay = function() {
                    this.removeEventListener("canplay", i.canPlay), this.volume = t.currentVolume, e.customEventDispatcher("readyToPlay", e, this.duration), t.bready && (t.bready = !1, e.play())
                }, i.timeUpdate = function() {
                    e.customEventDispatcher(e.AUDIO_PROGRESS_EVENT, e, this.currentTime), e.hasCuePoints && e.cuePointEventDispatcher(e, this.currentTime), t.currentTime = this.currentTime, e.updatePlayerUIValues(), t.endTime && t.endTime <= t.currentTime && (e.customEventDispatcher(e.AUDIO_FINISH_EVENT, e, this.currentTime), e.pause())
                }, i.audioEnded = function() {
                    return e.customEventDispatcher(e.AUDIO_FINISH_EVENT, e, this.currentTime), this.currentTime = 0, t.currentTime = 0, e.model.get("loop") ? (this.volume = t.currentVolume, e.play(), void 0) : (e.stop(), void 0)
                }, i.addEventListener("loadstart", i.loadStart), i.addEventListener("ended", i.audioEnded), i.addEventListener("timeupdate", i.timeUpdate))
            },
            onShow: function() {
                this.model.get("withUi") && this.showUi()
            },
            onPlayerResizeEvent: function() {
                var t, e;
                t = this, e = this.members, e.objSeekBar && e.objSeekBar.setStageScaleValue(this.getStageScaleValue()), e.objVolumeBar && e.objVolumeBar.setStageScaleValue(this.getStageScaleValue())
            },
            showUi: function() {
                var t, e;
                t = this, e = this.members, e.ui_play = $("<div class='play'></div>"), e.ui_pause = $("<div class='pause'></div>"), e.ui_stop = $("<div class='stop'></div>"), e.ui_display = $("<div class='display'></div>"), e.ui_volume = $("<div class='volume'></div>")
            },
            createSliders: function(t, e) {
                var i, n, o, r;
                n = this, o = this.members, i = {}, r = $("<div class='seekbarSlider' style='visibility:hidden;'></div>"), this.$el.append(r), i.sliderLength = parseFloat(r.css("width")), 0 === i.sliderLength && (i.sliderLength = 100), r.remove(), i.allignment = e.CONSTANTS.HORIZONTAL, i.sliderWrapperStyle = "seekbarSlider", o.objSeekBar = new t(i), o.objSeekBar.render(), o.ui_seekBar = o.objSeekBar.$el, i = {}, r = $("<div class='volumebarSlider' style='visibility:hidden;'></div>"), this.$el.append(r), i.sliderLength = parseFloat(r.css("height")), 0 === i.sliderLength && (i.sliderLength = 100), r.remove(), i.allignment = e.CONSTANTS.VERTICAL, i.sliderWrapperStyle = "volumebarSlider", o.objVolumeBar = new t(i), o.objVolumeBar.render(), o.ui_volumeBar = o.objVolumeBar.$el, this.$el.append(o.ui_play), this.$el.append(o.ui_pause), this.$el.append(o.ui_stop), this.$el.append(o.ui_seekBar), this.$el.append(o.ui_display), this.$el.append(o.ui_volume), o.ui_volume.append(o.ui_volumeBar), o.objSeekBar.configureView(o.objSeekBar), o.objVolumeBar.configureView(o.objVolumeBar), o.objSeekBar.setStageScaleValue(this.getStageScaleValue()), o.objVolumeBar.setStageScaleValue(this.getStageScaleValue()), n.decorateUi()
            },
            decorateUi: function() {
                var t;
                t = this.members, t.ui_volumeBar.css("width", "100%"), t.ui_volumeBar.css("height", "100%"), t.ui_seekBar.css("width", "100%"), t.ui_seekBar.css("height", "100%"), t.ui_volumeBar.hide(), this.applyUiEvents(), this.updatePlayerUIValues()
            },
            applyUiEvents: function() {
                var t, e;
                t = this.members, e = this, t.objSeekBar.on(t.constants.EVENTS.SLIDING_STARTED, function() {
                    t.tag.pause()
                }), t.objSeekBar.on(t.constants.EVENTS.SLIDING_IN_PROGRESS, function() {}), t.objSeekBar.on(t.constants.EVENTS.SLIDING_STOPPED, function(i) {
                    t.tag.currentTime = i * t.totalDuration / 100, e.members.isPlaying && t.tag.play()
                }), t.objVolumeBar.on(t.constants.EVENTS.SLIDING_STARTED, function(e) {
                    t.isVolumeChanging = !0, t.tag.volume = e / 100, t.currentVolume = e / 100
                }), t.objVolumeBar.on(t.constants.EVENTS.SLIDING_IN_PROGRESS, function(e) {
                    t.isVolumeChanging = !0, t.tag.volume = e / 100, t.currentVolume = e / 100
                }), t.objVolumeBar.on(t.constants.EVENTS.SLIDING_STOPPED, function(e) {
                    t.isVolumeChanging = !1, t.tag.volume = e / 100, t.currentVolume = e / 100
                }), t.ui_play.on("click", this.uiPlay.bind(this)), t.ui_pause.on("click", this.uiPause.bind(this)), t.ui_stop.on("click", this.uiStop.bind(this)), t.ui_volume.on("click", function() {
                    t.ui_volumeBar.toggle()
                }), t.ui_volume.on("mouseover", function() {
                    t.ui_volumeBar.show()
                }), t.ui_volume.on("mouseout", function() {
                    t.ui_volumeBar.hide()
                })
            },
            uiPlay: function() {
                this.play()
            },
            uiPause: function() {
                this.pause()
            },
            uiStop: function() {
                this.stop()
            },
            updatePlayerUIValues: function() {
                var t, e;
                t = this.members, t.objVolumeBar && !t.isVolumeChanging && t.objVolumeBar.setCurrentPosition(100 * t.currentVolume), t.objSeekBar && t.objSeekBar.setCurrentPosition(t.currentTime / t.totalDuration * 100), t.ui_display && t.ui_display.length && (e = t.currentTime.toFixed(2).toString(), e.length < 5 && (e = "0" + e), t.ui_display.text(e)), t.ui_play && (t.isPlaying ? t.ui_play.addClass("active") : t.ui_play.removeClass("active")), t.ui_pause && (t.isPaused ? t.ui_pause.addClass("active") : t.ui_pause.removeClass("active"))
            }
        });
        return n.prototype.__super__ = e, _.extend(n.prototype, {
            AUDIO_START_EVENT: "audiostart",
            AUDIO_PAUSE_EVENT: "audiopause",
            AUDIO_PROGRESS_EVENT: "audioprogress",
            AUDIO_STOP_EVENT: "audiostop",
            AUDIO_FINISH_EVENT: "audiofinish",
            changeAudio: function(t) {
                this.model.set("data", t.source), this.model.set("loop", t.loop), this.stop(), this.members.bready = !1, t.playOnReady === !0 && (this.members.bready = !0), this.setSource(this.model.get("data")), this.storeCuePoints(t)
            },
            playAudio: function() {
                this.play()
            },
            play: function(t, e) {
                this.members.bready = !1, this.members.endTime = void 0, t && (this.setCurrentTime(t), e && e > t && (this.members.endTime = e)), this.members.isPlaying = !0, this.members.isPaused = !1, this.members.tag.play(), this.customEventDispatcher(this.AUDIO_START_EVENT, this)
            },
            resume: function() {
                this.play()
            },
            pause: function() {
                this.members.isPlaying && (this.members.isPlaying = !1, this.members.isPaused = !0, this.members.tag.pause(), this.customEventDispatcher(this.AUDIO_PAUSE_EVENT, this))
            },
            stop: function() {
                if (this.members.isPlaying) {
                    this.members.isPlaying = !1, this.members.isPaused = !1;
                    try {
                        this.members.tag.pause(), this.members.tag.currentTime = 0
                    } catch (t) {}
                    this.customEventDispatcher(this.AUDIO_STOP_EVENT, this)
                }
            },
            setCurrentTime: function(t) {
                this.members.tag.currentTime = t, this.members.currentTime = t
            },
            getCurrentTime: function() {
                return this.members.tag.currentTime
            },
            setVolume: function(t) {
                this.members.tag.volume = t, this.members.currentVolume = t
            },
            getVolume: function() {
                return this.members.tag.volume
            },
            destroy: function() {
                this.unregisterMedia();
                var t = this.members;
                return this.stop(), t.tag.removeEventListener("loadstart", t.tag.loadStart), t.tag.removeEventListener("ended", t.tag.audioEnded), t.tag.removeEventListener("timeupdate", t.tag.timeUpdate), t.tag.removeAttribute("src"), this.model.get("withUi") && (t.ui_play.off("click"), t.ui_pause.off("click"), t.ui_stop.off("click"), t.ui_volume.off("click"), t.objSeekBar.off(t.constants.EVENTS.SLIDING_STARTED), t.objSeekBar.off(t.constants.EVENTS.SLIDING_IN_PROGRESS), t.objSeekBar.off(t.constants.EVENTS.SLIDING_STOPPED), t.objSeekBar.destroy(), t.objVolumeBar.off(t.constants.EVENTS.SLIDING_STARTED), t.objVolumeBar.off(t.constants.EVENTS.SLIDING_IN_PROGRESS), t.objVolumeBar.off(t.constants.EVENTS.SLIDING_STOPPED), t.objVolumeBar.destroy()), this.model.destroy(), t.tag = null, this.__super__.prototype.destroy(!0)
            }
        }), n
    }), define("components/audiohotspot/audio-hotspot", ["marionette", "components/audioplayer/audio-player"], function(t, e) {
        var i = e.extend({
            template: _.template("<div/>"),
            objData: null,
            counter: 0,
            bShowMediaControl: !1,
            objMediaPanelData: null,
            objMediaPlayer: void 0,
            audioState: null,
            initialize: function(t) {
                this.objMediaPlayer = null, this.AudiotHotspotSuper.prototype.initialize.call(this, t), this.objData = t, this.componentType = "audiohotspot", void 0 !== this.objData.mediacontroller && (this.bShowMediaControl = this.objData.mediacontroller === !0 ? !0 : !1, this.bShowMediaControl === !0 && (this.objMediaPanelData = this.objData.mediapaneldata)), "object" == typeof this.objData.state && this.setState(this.objData.state)
            },
            setExternalAssetsId: function(t) {
                this.objData.source[0].path = t, this.changeAudio(this.objData)
            },
            onRender: function() {
                this.$el.addClass(""), this.bEditor === !1 ? this.objData.hidden === !1 || "false" === this.objData.hidden ? this.$el.addClass(this.objData.styleClass) : this.$el.css("display", "none") : $("." + this.objData.styleClass).css("display", "block")
            },
            isValid: function() {
                return !1
            },
            onShow: function() {
                this.$el.attr("id", this.getID());
                var t = this;
                this.addEvents(), this.bEditor === !1 && this.$el.on("click", $.proxy(t.play, t)), this.objData.styleClass && $(this.$el).addClass(this.objData.styleClass), this.bShowMediaControl === !0 && this.initMediaControls(), this.setLayout(this.objData), this.customEventDispatcher(this.eventConst.CREATION_COMPLETE, this, this)
            }
        });
        return i.prototype.initMediaControls = function() {
            this.objMediaPlayer = new MediaControl(this.objMediaPanelData), this.objMediaPlayer.bEditor = this.bEditor, this.$el.append($(this.objMediaPlayer.$el)), this.objMediaPlayer.render(), this.objMediaPlayer.onShow(), this.bEditor === !1 && (this.objMediaPlayer.on(MediaControl.MEDIA_PLAY_EVENT, this.onMediaControlEvent, this), this.objMediaPlayer.on(MediaControl.MEDIA_PAUSE_EVENT, this.onMediaControlEvent, this), this.objMediaPlayer.on(MediaControl.MEDIA_VOLUME_EVENT, this.onMediaControlEvent, this), this.objMediaPlayer.on(MediaControl.MEDIA_MUTE_EVENT, this.onMediaControlEvent, this), this.objMediaPlayer.on(MediaControl.MEDIA_SET_VIDEO_POSITION, this.onMediaControlEvent, this))
        }, i.prototype.onMediaControlEvent = function(t) {
            switch (t.type) {
                case MediaControl.MEDIA_PLAY_EVENT:
                    this.play(!0);
                    break;
                case MediaControl.MEDIA_PAUSE_EVENT:
                    this.pause();
                    break;
                case MediaControl.MEDIA_VOLUME_EVENT:
                    this.changeVolume(t.customData);
                    break;
                case MediaControl.MEDIA_MUTE_EVENT:
                    break;
                case MediaControl.MEDIA_SET_AUDIO_POSITION:
                    this.setTime(t.customData)
            }
        }, i.prototype.getState = function() {
            var t = {};
            return t.currentTime = this.getCurrentTime(), t.volume = this.getVolume(), t.state = this.audioState, t
        }, i.prototype.addEvents = function() {
            var t = this.members.tag;
            t.removeEventListener("loadedmetadata", $.proxy(this.loadedmetadata, this)), t.removeEventListener("timeupdate", $.proxy(this.timeupdate, this)), t.addEventListener("loadedmetadata", $.proxy(this.loadedmetadata, this)), t.addEventListener("timeupdate", $.proxy(this.timeupdate, this))
        }, i.prototype.loadedmetadata = function() {
            var t;
            t = this.pad(parseInt(this.members.tag.duration)), $("#totalDuration").html(t)
        }, i.prototype.pad = function(t) {
            var e, i;
            if (10 > t) t = "00:0" + t;
            else if (60 >= t) t = t % 60 == 0 ? "01:00" : "00:" + t;
            else if (t > 60) return e = parseInt(t / 60), e = parseInt(e) < 10 ? "0" + e : e, i = t % 60, i = parseInt(i) < 10 ? "0" + i : i, e + ":" + i;
            return t
        }, i.prototype.timeupdate = function() {
            var t, e;
            this.bShowMediaControl === !0 && (t = this.pad(parseInt(this.members.tag.currentTime)), $("#currentTime").html(t), e = this.members.tag.currentTime / this.members.tag.duration * 100, this.objMediaPlayer.updateSeekbarThumbPosition(e))
        }, i.prototype.setState = function(t) {
            if ("object" == typeof t && void 0 !== typeof t.currentTime && void 0 !== typeof t.volume && void 0 !== typeof t.state && null !== typeof t.state) switch (this.setCurrentTime(t.currentTime), this.setVolume(t.volume), t.state) {
                case "play":
                    this.play();
                    break;
                case "pause":
                    this.pause()
            }
        }, i.prototype.play = function(t) {
            this.bShowMediaControl && this.objMediaPlayer.setState("play"), !this.members.isPlaying || 1 != t || 0 != this.objData.hidden && "false" != this.objData.hidden ? this.AudiotHotspotSuper.prototype.play.call(this) : this.stop(), (this.objData.hidden === !1 || "false" === this.objData.hidden) && this.setUIState(), this.audioState = "play"
        }, i.prototype.pause = function() {
            this.bShowMediaControl && this.objMediaPlayer.setState("pause"), this.AudiotHotspotSuper.prototype.pause.call(this), !this.objData || this.objData.hidden !== !1 && "false" !== this.objData.hidden || this.setUIState(), this.audioState = "pause"
        }, i.prototype.setUIState = function() {
            this.members.isPlaying ? (this.$el.removeClass("glyphicon-play"), this.$el.addClass("glyphicon-stop")) : (this.$el.removeClass("glyphicon-stop"), this.$el.addClass("glyphicon-play"))
        }, i.prototype.show = function() {
            this.$el.show()
        }, i.prototype.disable = function() {
            this.$el.prop("disabled", !0).css("pointer-events", "none")
        }, i.prototype.hide = function() {
            this.$el.hide()
        }, i.prototype.setLayout = function(t) {
            t.hasOwnProperty("outerDiv") && void 0 !== t.outerDiv ? this.$el.addClass(t.outerDiv) : (t.hasOwnProperty("width") && this.$el.css("width", t.width), t.hasOwnProperty("height") && this.$el.css("height", t.height), t.hasOwnProperty("margin") && this.$el.css("margin", t.margin)), t.hasOwnProperty("margin") && ($(this.objData).attr("margin", t.margin), this.$el.css("margin", t.margin)), t.hasOwnProperty("poster") && t.poster.length > 0 && $(this.objData).attr("poster", t.poster), t.hasOwnProperty("controls") && void 0 !== t.controls && $(this.objData).attr("controls", "")
        }, i.prototype.AudiotHotspotSuper = e, i.prototype.destroy = function() {
            return this.stop(), this.$el.off("click"), this.objData = null, this.AudiotHotspotSuper.prototype.destroy.call(this, !0)
        }, i
    }), define("components/component-references", ["marionette", "components/case/case", "editorroot/case-editor", "components/label/label", "editorroot/label-editor", "components/button/button", "editorroot/button-editor", "components/screen", "editorroot/screen-editor", "components/image/image", "editorroot/image-editor", "components/multiplechoice/multiplechoice", "editorroot/multiplechoice-editor", "player/screen/screen-helper", "components/confirmpopup/confirm-popup", "player/base/base-activity", "player/base/base-simulation-activity", "components/multiplechoice/multiplechoice", "components/answer/answer", "components/radio/radio", "components/popup/popup", "editorroot/answer-editor", "editorroot/animation-player-editor", "editorroot/audiohotspot-editor", "libs/utils/json-helper", "components/sim-act/simulation-activity", "components/animation/animation", "player/base/base-media-player", "components/audioplayer/audio-player", "components/audiohotspot/audio-hotspot"], function() {
        var t;
        return t = Backbone.Marionette.Controller.extend({})
    }), define("player/editor/editor-controller", ["marionette", "player/utils/data-loader", "player/constants/errorconst", "components/component-references"], function(t, e, i) {
        var n;
        return n = Backbone.Marionette.Controller.extend({
            objEditorDict: {},
            objPlayerRef: void 0,
            compEditor: void 0,
            data_loader: void 0,
            regionId: void 0,
            activityTemplate: void 0,
            activityData: void 0,
            arrCompList: void 0,
            arrCreatedCompList: void 0,
            ACTIVITY_CREATED_SUCCESSFULLY: "activitytCreationSuccess",
            SIM_COMP_CREATION_COMPLETE: "simCompCreationComplete",
            EDITOR_PATH: "editorroot/",
            EDITOR_SUFFIX: "-editor",
            COMP_NAME: "compName",
            jsonData: void 0,
            bEditor: !1,
            v3HtmlData: void 0,
            isV3Mode: !1,
            constructor: function(t, i, n) {
                this.objEditorDict = {}, this.objPlayerRef = i, this.data_loader = new e, this.regionId = t, this.arrCreatedCompList = [], this.bEditor = n
            },
            initialize: function(t, e) {
                var i, n = this;
                this.activityData = e, i = "text!" + this.activityData.html.source, this.v3HtmlData = void 0, this.getMCompTemplateList() === !0 ? (this.isV3Mode = !1, $("script[overrideHtmlId='" + this.activityData.id + "']").length > 0 ? (n.activityTemplate = $("script[overrideHtmlId='" + this.activityData.id + "']").html(), n.getComponentList()) : require([i], function(t) {
                    n.activityTemplate = t, n.getComponentList()
                })) : (this.isV3Mode = !0, n.activityTemplate = $("body").html(), n.getComponentList())
            }
        }), n.prototype.getMCompTemplateList = function() {
            return 0 === $("script[screenJsonId='" + this.activityData.id + "']").length
        }, n.prototype.getComponentList = function() {
            -1 !== this.activityTemplate.search("mComp") && (this.arrCompList = $("<div>" + this.activityTemplate + "<div>").find("[type=mComp]")), void 0 !== this.arrCompList && this.arrCompList.length > 0 ? (this.arrCreatedCompList = [], this.createMCompComponents(this.arrCompList)) : this.isV3Mode === !0 && -1 !== this.activityTemplate.search(this.activityData.id) ? this.prepareV3Screen() : this.onHTMLParsingComplete()
        }, n.prototype.prepareV3Screen = function() {
            {
                var t = this;
                $("<div>" + this.activityTemplate + "</div>")
            }
            this.v3HtmlData = $("script[screenJsonId='" + this.activityData.id + "']"), require(["css!" + this.v3HtmlData.data().css], function() {
                t.onHTMLParsingComplete()
            })
        }, n.prototype.createMCompComponents = function(t) {
            var e, i = this;
            e = $(t[0]).attr(this.COMP_NAME) + this.EDITOR_SUFFIX, require([this.EDITOR_PATH + e], function(t) {
                i.onEditorCreationComplete(t)
            })
        }, n.prototype.onComponentCreationComplete = function(t) {
            t.target.off(this.compEditor.ON_COMP_CREATED), this.arrCreatedCompList.push(t), this.arrCompList.splice(0, 1), this.arrCompList.length > 0 ? this.createMCompComponents(this.arrCompList) : this.onHTMLParsingComplete()
        }, n.prototype.flush = function() {
            var t, e, n;
            for (t = 0; t < this.arrCreatedCompList.length; t += 1)
                if (e = this.arrCreatedCompList[t].target, n = e.destroy(), e.isDestroyCalled !== !0) throw new Error(i.PLEASE_CALL_SUPER_CLASS_DESTORY_FROM_COMPONENT_EDITOR)
        }, n.prototype.onEditorCreationComplete = function(t) {
            this.compEditor = new t, this.compEditor.setEditorMode(this.bEditor), this.compEditor.on(this.compEditor.ON_COMP_CREATED, this.onComponentCreationComplete, this), this.compEditor.getComponent(this.arrCompList[0], this.objPlayerRef.getPlayerHelper().nUpdatedScaleValue)
        }, n.prototype.onHTMLParsingComplete = function() {
            var t, e = {},
                i = !1;
            void 0 === this.v3HtmlData ? (-1 !== this.activityTemplate.search("text/template") && (i = !0, this.activityTemplate = $("<div>" + this.activityTemplate + "</div>"), t = this.activityTemplate.find("[type='text/template']")), void 0 !== t && t.length > 0 && (e.inlineTemplates = t, t.remove())) : (i = !0, this.activityTemplate = this.v3HtmlData, e.v3html = !0), e.regionId = this.regionId, e.activityTemplate = i ? this.activityTemplate.html() : this.activityTemplate, e.createdCompList = this.arrCreatedCompList, void 0 !== this.compEditor && this.compEditor.off(this.compEditor.ON_COMP_CREATED), this.trigger(this.ACTIVITY_CREATED_SUCCESSFULLY, e)
        }, n.prototype.createSimComp = function(t, e) {
            var i, n = this;
            i = t + this.EDITOR_SUFFIX, require([this.EDITOR_PATH + i], function(t) {
                n.onSimCompEditorCreationComplete(t, e)
            })
        }, n.prototype.onSimCompEditorCreationComplete = function(t, e) {
            this.jsonData = e;
            var i = new t(e, this.regionId);
            i.bEditor = this.bEditor, i.objPathUpdater = this.objPlayerRef.objPathUpdater, i.on(i.ON_COMP_CREATED, this.onSimCompCreationComplete, this), i.getComponent(e, !0), this.objEditorDict[e.id] = i
        }, n.prototype.onSimCompCreationComplete = function(t) {
            var e = {};
            e.jsonData = this.jsonData, e.compData = t, e.bEditor = this.bEditor, this.objEditorDict[t.id].off(t.target.ON_COMP_CREATED), this.bEditor === !1 && delete this.objEditorDict[t.id], this.trigger(this.SIM_COMP_CREATION_COMPLETE, e)
        }, n.prototype.editComponent = function(t, e) {
            this.objEditorDict[t.getID()].updateExistingComponent(t, e)
        }, n.prototype.destroy = function() {
            this.v3HtmlData = void 0, void 0 !== this.compEditor && this.compEditor.off(this.compEditor.ON_COMP_CREATED)
        }, n
    }), define("player/manager/editor-manager", ["marionette", "player/editor/editor-controller", "player/factory/factory"], function(t, e) {
        var i;
        return i = Backbone.Marionette.Controller.extend({
            objMPlayer: null,
            editor_dict: null,
            constructor: function(t) {
                this.editor_dict = {}, this.objMPlayer = t, this.initialize()
            }
        }), i.prototype.initialize = function() {}, i.prototype.createEditorController = function(t, i) {
            var n = this,
                o = new e(t, this.objMPlayer, i);
            o.on(o.ACTIVITY_CREATED_SUCCESSFULLY, n.onActivityCreationSuccess, n), this.editor_dict[t] = o
        }, i.prototype.getEditorController = function(t) {
            var e = this.editor_dict[t];
            return e
        }, i.prototype.renderActivityHTML = function(t, e) {
            this.editor_dict[t].initialize(t, e)
        }, i.prototype.onActivityCreationSuccess = function(t) {
            this.objMPlayer.getPlayerHelper().getRegionManager().OnHTMLCreationCompleteComponent(t)
        }, i.prototype.flushEditor = function(t) {
            var e = this.editor_dict[t];
            e.flush(), e = void 0
        }, i.prototype.destroy = function() {
            var t, e, i = this;
            for (t in i.editor_dict) this.editor_dict.hasOwnProperty(t) && (e = i.editor_dict[t], e.off(e.ACTIVITY_CREATED_SUCCESSFULLY), e.destroy(), e = void 0);
            return i.editor_dict = void 0, !0
        }, i
    }), define("player/manager/media-manager", ["marionette", "player/events/eventsconst"], function() {
        var t;
        return t = Backbone.Marionette.Controller.extend({
            objMPlayer: void 0,
            mediaDict: void 0,
            constructor: function(t) {
                this.objMPlayer = t, this.mediaDict = {}
            }
        }), t.prototype.registerMediaController = function() {}, t.prototype.destroy = function() {}, t
    }), define("player/model/mplayer-model", ["require", "exports", "module", "marionette"], function(t) {
        var e, i, n;
        return n = t("marionette"), i = null, e = Backbone.Model.extend({
            defaults: {
                nActivityIndex: 0,
                arrRegionList: [],
                objRegions: {},
                activityIndex: {}
            }
        }), e.prototype.getValue = function() {}, {
            getInstance: function() {
                return i || (i = new e), i
            }
        }
    }), define("player/manager/factory-manager", ["marionette", "player/factory/factory"], function(t, e) {
        var i;
        return i = Backbone.Marionette.Controller.extend({
            objFactory: void 0,
            objMPlayer: void 0,
            constructor: function(t) {
                this.objFactory = void 0, this.objMPlayer = t, this.initlize()
            }
        }), i.prototype.onComponentCreationComplete = function(t) {
            this.objMPlayer.getPlayerHelper().getRegionManager().onComponentCreationComplete(t)
        }, i.prototype.initlize = function() {
            var t = this;
            this.objFactory = new e, this.objFactory.on(this.objFactory.COMP_CREATION_COMPLETE_EVENT, this.onComponentCreationComplete, t)
        }, i.prototype.createComponent = function(t) {
            console.log(">>>>>>>>>>", t), this.objFactory.getComponent(t)
        }, i.prototype.getComponent = function(t) {
            this.createComponent(t)
        }, i.prototype.destroy = function() {
            return this.objFactory.off(this.objFactory.COMP_CREATION_COMPLETE_EVENT), this.objFactory.destroy(), this.objFactory = void 0, !0
        }, i
    }), define("player/controllers/webservice-controller", ["marionette"], function() {
        var t, e;
        return t = Backbone.Marionette.Controller.extend({
            serviceHelper: void 0,
            objTinCanHelperRef: void 0,
            initialize: function() {}
        }), t.prototype.initWebService = function(t, e, i, n) {
            var o = this;
            t.helper && t.helper.trim().length && require([t.helper], function(r) {
                o.serviceHelper = new r, o.serviceHelper.init(t, e, i, n), o.serviceHelper.setTinCanReference(o.objTinCanHelperRef)
            })
        }, t.prototype.manageServiceRequest = function(t) {
            return this.serviceHelper && "function" == typeof this.serviceHelper.manageServiceRequest ? this.serviceHelper.manageServiceRequest(t) : void 0
        }, t.prototype.setTinCanReference = function(t) {
            this.objTinCanHelperRef = t, this.serviceHelper && this.serviceHelper.setTinCanReference(this.objTinCanHelperRef)
        }, t.prototype.destroy = function() {
            return this.serviceHelper ? this.serviceHelper.destroy() : void 0
        }, {
            getInstance: function() {
                return (null === e || void 0 === e) && (e = new t), e
            }
        }
    }), define("player/constants/webservice-const", [], function() {
        var t = {
            SERVICE_USER_LOGIN: "userLogin",
            SERVICE_USER_FORCE_LOGIN: "userForceLogin",
            SERVICE_USER_LOGOUT: "uesrLogout",
            SERVICE_USER_CREATE_ACCOUNT: "userCreateAccount",
            SERVICE_USER_CHANGE_PASSWORD: "userChangePassword",
            SERVICE_USER_CREATE_ACTIVITY: "userCreateActivity",
            SERVICE_USER_DELETE_ACTIVITY: "uesrDeleteActivity",
            SERVICE_USER_EXPORT_ACTIVITY: "userExportActivity",
            SERVICE_USER_SAVE_ACTIVITY: "userSaveActivity",
            SERVICE_USER_COPY_ACTIVITY: "userCopyActivity",
            SERVICE_USER_MARK_ACTIVITY: "userMarkActivity",
            SERVICE_USER_PREVIEW_ACTIVITY: "userPreviewActivity",
            SERVICE_SAVE_AS_NEW_DLO: "saveAsNewDlo",
            SERVICE_USER_EDIT_ACTIVITY: "userEditActivity",
            SERVICE_USER_UPLOAD_ASSETS: "userUploadAssets",
            SERVICE_USER_COPY_ASSETS: "userCopyAssets",
            SERVICE_USER_DELETE_ASSETS: "userDeleteAssets",
            SERVICE_USERS_IMPORT_PROJECT: "userImportProject",
            SERVICE_USER_GET_ASSETS: "userGetAssets",
            SERVICE_USER_DASHBOARD_DATA: "userDashboardData",
            SERVICE_GET_DEFAULT_LIBRARY_TEMPLATE: "userGetAllTemplate",
            SERVICE_USER_DELETE_TEMPLATE: "userDeleteTemplate",
            SERVICE_USERS_DELETE_TEMPLATE: "userDeleteUserTemplate",
            SERVICE_USER_SAVE_TEMPLATE: "userSaveTemplate",
            SERVICE_USER_GET_USER_TEMPLATE: "userGetUserTemplate",
            SERVICE_USER_SAVE_FILE: "userSaveFile",
            SERVICE_USER_RENAME_DLO: "userRenameDlo",
            SERVICE_USER_SAVE_SETTINGS: "userSaveSettings",
            SERVICE_SAVE: "saveService",
            SERVICE_DELETE: "deleteService",
            SERVICE_OPEN: "openService",
            SERVICE_PREVIEW: "previewService",
            SERVICE_EXPORT: "exportService",
            SERVICE_COPY: "copyService",
            SERVICE_USER_RENAME_PUBSLIH_DLO: "userPublishDLO",
            SERVICE_GET_DLO_TEMPLATE: "getDloTemplate"
        };
        return t
    }), define("player/manager/webservice-manager", ["marionette", "backbone", "player/controllers/webservice-controller", "player/events/eventsconst", "player/constants/errorconst", "player/constants/webservice-const", "player/constants/playerconst"], function(t, e, i, n, o, r) {
        var s = e.Marionette.Controller.extend({
            objPlayerRef: void 0,
            objWebConfigData: void 0,
            objServiceController: void 0,
            constructor: function(t, e) {
                this.objWebConfigData = e, this.objPlayerRef = t, this.initServiceController()
            },
            managerTask: function(t) {
                this.objServiceController.manageServiceRequest(t)
            },
            initServiceController: function() {
                (void 0 === this.objServiceController || null === this.objServiceController) && (this.objServiceController = i.getInstance(), this.objServiceController.initWebService(this.objWebConfigData, n, o, r))
            },
            setTinCanReference: function(t) {
                this.objServiceController.setTinCanReference(t)
            }
        });
        return s
    }), define("player/manager/tincan-manager", ["marionette", "player/controllers/tincan-controller"], function(t, e) {
        var i;
        return i = Backbone.Marionette.Controller.extend({
            playerRef: void 0,
            objTinCanController: void 0,
            objTinCanData: void 0,
            objTinCanHelper: void 0,
            constructor: function(t, e) {
                this.playerRef = t, this.objTinCanData = e, this.initlize()
            }
        }), i.prototype.initlize = function() {
            var t = this;
            this.objTinCanController = e.getInstance(this.objTinCanData), this.objTinCanData.helper && require([this.objTinCanData.helper], function(e) {
                t.objTinCanHelper = e, t.objTinCanHelper.getInstance().setController(t.objTinCanController), t.trigger("tincanHelperInitalized", t)
            })
        }, i.prototype.getTinCanHelper = function() {
            return this.objTinCanHelper
        }, i.prototype.destroy = function() {
            return this.objTinCanHelper && this.objTinCanHelper.getInstance().destroy && this.objTinCanHelper.getInstance().destroy(), !0
        }, i
    }), define("player/mplayer-helper", ["marionette", "player/constants/playerconst", "player/manager/region-manager", "player/manager/editor-manager", "player/manager/media-manager", "underscore", "player/model/mplayer-model", "player/manager/factory-manager", "player/factory/factory", "player/constants/errorconst", "player/manager/webservice-manager", "player/manager/tincan-manager"], function(t, e, i, n, o, r, s, a, l, c, h, p) {
        var d;
        return d = Backbone.Marionette.Controller.extend({
            objPlayerRef: void 0,
            objWebServiceManager: void 0,
            objRegionManager: void 0,
            objMediaManager: void 0,
            objEditorManager: void 0,
            objFactoryManager: void 0,
            objDrawingManager: void 0,
            bDrawingMode: void 0,
            nUpdatedScaleValue: void 0,
            objTinCanManager: void 0,
            objPropertyManager: void 0,
            themeCSSPath: void 0,
            constructor: function(t) {
                this.objPlayerRef = t, this.objDrawingManager = void 0, this.bDrawingMode = !1, this.nUpdatedScaleValue = 1
            }
        }), d.prototype.initlize = function() {
            return this.objPlayerRef.bInEditMode === !0 ? (this.initPropertyManager(), void 0) : (this.initAllManagers(), void 0)
        }, d.prototype.initAllManagers = function() {
            this.setTheme(), this.getTinCanManager(), this.initWebServiceManager(), this.bDrawingMode = this.initDrawingManager(), this.initlizeActivityManager(), this.initlizeFactoryManager(), this.initEditor(), this.launchDefaultActivity()
        }, d.prototype.initWebServiceManager = function() {
            this.objPlayerRef.getPlayerConfig().webService && (this.objWebServiceManager = new h(this.objPlayerRef, this.objPlayerRef.getPlayerConfig().webService), this.registerManagersEvent(this.objWebServiceManager))
        }, d.prototype.getTinCanManager = function() {
            var t = this;
            this.objPlayerRef.getPlayerConfig().tinCan && (t.objTinCanManager = new p(t.objPlayerRef, t.objPlayerRef.getPlayerConfig().tinCan), t.objTinCanManager.on("tincanHelperInitalized", t.onTinCanHelperInitalized, this), t.registerManagersEvent(t.objTinCanManager))
        }, d.prototype.onTinCanHelperInitalized = function() {
            this.objTinCanManager.off("tincanHelperInitalized"), this.objPlayerRef.onTinCanHelperInitialized(this.getTinCanHelper()), this.objWebServiceManager && this.objWebServiceManager.setTinCanReference(this.getTinCanHelper())
        }, d.prototype.setTinCanHelper = function(t) {
            this.objRegionManager.setTinCanHelper(t)
        }, d.prototype.getTinCanHelper = function() {
            var t;
            return this.objTinCanManager && (t = this.objTinCanManager.getTinCanHelper()), t
        }, d.prototype.registerManagersEvent = function(t) {
            var i = this;
            t.on(e.MANAGE_MANAGERS_EVENTS, i.handleManagerRequest, i), t.on("playerBubbleEvent", i.handlePlayerBubbleEvents, i), t.on("broadcastEvent", i.bubbleEvent, i)
        }, d.prototype.initlizeActivityManager = function() {
            this.objRegionManager = new i(this.objPlayerRef, this.objPlayerRef.getPlayerConfig(), this.objPlayerRef.getActivityConfig(), s.getInstance(), this.bDrawingMode, this.objPlayerRef.getPopupTemplatesData()), this.objRegionManager.setPathUpdater(this.objPlayerRef.getPathUpdater()), this.registerManagersEvent(this.objRegionManager)
        }, d.prototype.initPropertyManager = function() {}, d.prototype.initMediaManager = function() {
            this.objMediaManager = new o(this.objPlayerRef)
        }, d.prototype.initEditor = function() {
            this.objEditorManager = new n(this.objPlayerRef)
        }, d.prototype.initlizeFactoryManager = function() {
            this.objFactoryManager = new a(this.objPlayerRef)
        }, d.prototype.onActivityInitlized = function(t, e) {
            this.objEditorManager.createEditorController(t, e)
        }, d.prototype.launchDefaultActivity = function() {
            this.objPlayerRef.getActivityConfig();
            this.objRegionManager.initlizeAllRegions()
        }, d.prototype.launchActivityInRegion = function(t) {
            t.playerId = this.objPlayerRef.getId(), this.objPlayerRef.trigger(e.MANAGE_PLAYER_COMMON_REQUEST, t)
        }, d.prototype.onPlayerUpdateComplete = function(t) {
            this.objPlayerRef.onPlayerUpdateComplete(t)
        }, d.prototype.initDrawingManager = function() {
            var t = !1;
            return void 0 !== this.objPlayerRef.getPlayerConfig().drawing && (t = "true" === this.objPlayerRef.getPlayerConfig().drawing.enable ? !0 : !1), t
        }, d.prototype.onPlayerCreationComplete = function(t) {
            this.objPlayerRef.onPlayerInitlizeComplete(t)
        }, d.prototype.onRegionCreationComplete = function(t) {
            this.objPlayerRef.bInEditMode === !0 && this.objPropertyManager.onRegionCreatedInEditMode(t)
        }, d.prototype.onPlayerInitlizationComplete = function(t) {
            this.objPlayerRef.onPlayerInitlizeComplete(t)
        }, d.prototype.getDrawingManager = function() {
            return this.objDrawingManager
        }, d.prototype.getEditorManager = function() {
            return this.objEditorManager
        }, d.prototype.getRegionManager = function() {
            return this.objRegionManager
        }, d.prototype.getFactoryManager = function() {
            return this.objFactoryManager
        }, d.prototype.showHideRegionById = function(t, e) {
            var i = $("#" + t);
            if (!i) throw new Error(c.NO_REGION_FIND + "[" + t + "]!!!");
            e === !0 ? i.show() : i.hide()
        }, d.prototype.showPreloader = function(t) {
            t && void 0 !== t.message && $("#messageBody", $("#preloader")).html(t.message).show(), $("#preloader").show()
        }, d.prototype.hidePreloader = function() {
            $("#messageBody", $("#preloader")).hide(), $("#preloader").hide()
        }, d.prototype.getLocalLanguage = function() {
            if (this.objPlayerRef.getPlayerConfig().language) {
                var t = this.objPlayerRef.getPlayerConfig().language["default"];
                return void 0 !== jQuery.url.param("language") && (t = jQuery.url.param("language")), t
            }
        }, d.prototype.getPreloaderSetting = function() {
            var t = !1;
            return void 0 !== this.objPlayerRef.getPlayerConfig().showPreloader && (t = "true" === this.objPlayerRef.getPlayerConfig().showPreloader), t
        }, d.prototype.setTheme = function() {
            var t, e, i, n, o, r, s, a, l = this;
            if (i = this.objPlayerRef.getPlayerConfig().themes, void 0 !== i) {
                for (void 0 !== jQuery.url && (n = jQuery.url.param("theme")), void 0 === n && (n = i.defaultTheme), o = i.prefix, r = o + n, s = void 0 !== i.theme && void 0 === i.theme.length ? i.theme : this.getThemeObject(i, n), e = this.objPlayerRef.getPathUpdater().resolvePath(s.path).split("/"), t = 0; t < e.length; t += 1) void 0 !== requirejs.s.contexts._.config.paths[e[t]] && (e[t] = requirejs.s.contexts._.config.paths[e[t]]);
                e = e.join("/"), a = "css!" + e + "?" + (new Date).getTime(), this.themeCSSPath = this.objPlayerRef.getPathUpdater().resolvePath(s.path), require([a], function() {
                    $(l.objPlayerRef.playerDiv).addClass(r)
                })
            }
        }, d.prototype.getThemeObject = function(t, e) {
            var i = r.filter(t.theme, function(t) {
                return t.id === e ? t : void 0
            });
            return i[0]
        }, d.prototype.removeAllTheme = function(t, e) {
            r.filter(t.theme, function(t) {
                e + t.id
            })
        }, d.prototype.updatePlayerScaleValue = function(t) {
            this.nUpdatedScaleValue = t, this.objRegionManager.setStageScaleValue(t)
        }, d.prototype.bubbleEvent = function(t) {
            t.playerId = this.objPlayerRef.getId(), this.objPlayerRef.trigger(t.type, t)
        }, d.prototype.handlePlayerBubbleEvents = function(t) {
            var e = {};
            e.target = this.objPlayerRef, e.customData = t.customData, this.objPlayerRef.trigger(t.type, e)
        }, d.prototype.handleManagerRequest = function(t) {
            switch (t.requestTo) {
                case e.WEB_SERVICE_MANAGER:
                    this.objWebServiceManager.managerTask(t);
                    break;
                case e.REGION_MANAGER:
                    break;
                case e.REGION_CHANGE_NOTIFICATION:
                    t.playerId = this.objPlayerRef.getId(), this.objPlayerRef.trigger(e.MANAGE_PLAYER_COMMON_REQUEST, t);
                    break;
                case e.SIM_PICTOR_CREATED:
                    this.objPropertyManager.onSimPictorCreated(t);
                    break;
                case e.EVENTS_FOR_PROPERTY_MANAGER:
                    this.objPlayerRef.bInEditMode === !1 ? this.bubbleEvent(t) : this.objPropertyManager.handleRegionManagerEvents(t);
                    break;
                default:
                    t.playerId = this.objPlayerRef.getId(), this.objPlayerRef.trigger(e.MANAGE_PLAYER_COMMON_REQUEST, t)
            }
        }, d.prototype.handlePlayerEditorEvents = function(t) {
            this.objPropertyManager.manageAllEditorEvents(t)
        }, d.prototype.broadcastEventHandler = function(t) {
            if (t.playerId !== this.objPlayerRef.getId() || t.playerId === this.objPlayerRef.getId() && this.objPlayerRef.bInEditMode === !0) switch (t.eventToBroadcast) {
                case e.COMPONENT_DATA_PROPERTY_UPDATED:
                    this.objPlayerRef.bInEditMode === !0 && this.objPropertyManager.handleCompUpdateEvents(t);
                    break;
                default:
                    this.objRegionManager.handleBroadcastEventFromOtherPlayer(t)
            }
        }, d.prototype.managePlayerCommonTask = function(t) {
            this.objPlayerRef.getId() !== t.playerId && this.objRegionManager && this.objRegionManager.managePlayerCommonTask(t)
        }, d.prototype.handleOutsideCall = function(t) {
            var e = {};
            e.customData = t.customData, this.objRegionManager.managePlayerCommand(e)
        }, d.prototype.onPlayerStop = function(t) {
            this.objRegionManager.onPlayerStop(t)
        }, d.prototype.setPlayerData = function(t, e) {
            this.getRegionManager().onDataReceivedFromWrapper(t, e)
        }, d.prototype.handleNewPlayerCreation = function(t) {
            console.log("handleNewPlayerCreation!!!!!!!!!!!!!!!!!!!!  ", t)
        }, d.prototype.handlePropertyManagerEvents = function(t) {
            var e = t.type;
            switch (e) {
                case "editorDataUpdateEvent":
                    this.objRegionManager.handleEditorDataChange(t);
                    break;
                default:
                    this.objPlayerRef.trigger(t.type, t)
            }
        }, d.prototype.receivePropertyManagerEvents = function(t) {
            this.objRegionManager.receivePropertyManagerEvents(t)
        }, d.prototype.destroy = function() {
            var t, e, i = !1,
                n = "href";
            if (i = this.objFactoryManager.destroy(), i === !0 && (i = this.objEditorManager.destroy()), i === !0 && void 0 !== this.objDrawingManager && (i = this.objDrawingManager.destroy()), i === !0 && void 0 !== this.objTinCanManager && (i = this.objTinCanManager.destroy()), i === !0 && void 0 !== this.objPropertyManager && (i = this.objPropertyManager.destroy()), i === !0 && (i = this.objRegionManager.destroy()), i && void 0 !== this.themeCSSPath)
                for (t = document.getElementsByTagName("link"), e = t.length; e >= 0; e -= 1) t[e] && null !== t[e].getAttribute(n) && -1 !== t[e].getAttribute(n).indexOf(this.themeCSSPath) && t[e].parentNode.removeChild(t[e]);
            return i
        }, d
    }), define("player/controllers/router-helper", [], function() {
        var t = {
            changeIndex: function() {},
            activityLaunchByIndex: function() {
                var t;
                this.launchActivity(t)
            },
            activityLaunchByName: function() {
                var t;
                this.launchActivity(t)
            },
            launchActivity: function() {},
            appendActivity: function() {}
        };
        return t
    }), define("player/router", ["marionette"], function(t) {
        var e = t.AppRouter.extend({
            appRoutes: {}
        });
        return e
    }),
    function(t, e) {
        function i(e, i) {
            var o, r, s, a = e.nodeName.toLowerCase();
            return "area" === a ? (o = e.parentNode, r = o.name, e.href && r && "map" === o.nodeName.toLowerCase() ? (s = t("img[usemap=#" + r + "]")[0], !!s && n(s)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e)
        }

        function n(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        var o = 0,
            r = /^ui-id-\d+$/;
        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.10.3",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            focus: function(e) {
                return function(i, n) {
                    return "number" == typeof i ? this.each(function() {
                        var e = this;
                        setTimeout(function() {
                            t(e).focus(), n && n.call(e)
                        }, i)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus),
            scrollParent: function() {
                var e;
                return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
            },
            zIndex: function(i) {
                if (i !== e) return this.css("zIndex", i);
                if (this.length)
                    for (var n, o, r = t(this[0]); r.length && r[0] !== document;) {
                        if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (o = parseInt(r.css("zIndex"), 10), !isNaN(o) && 0 !== o)) return o;
                        r = r.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++o)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    r.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(i) {
                    return !!t.data(i, e)
                }
            }) : function(e, i, n) {
                return !!t.data(e, n[3])
            },
            focusable: function(e) {
                return i(e, !isNaN(t.attr(e, "tabindex")))
            },
            tabbable: function(e) {
                var n = t.attr(e, "tabindex"),
                    o = isNaN(n);
                return (o || n >= 0) && i(e, !o)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, n) {
            function o(e, i, n, o) {
                return t.each(r, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                s = n.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + n] = function(i) {
                return i === e ? a["inner" + n].call(this) : this.each(function() {
                    t(this).css(s, o(this, i) + "px")
                })
            }, t.fn["outer" + n] = function(e, i) {
                return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function() {
                    t(this).css(s, o(this, e, !0, i) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(i) {
                return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
            disableSelection: function() {
                return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), t.extend(t.ui, {
            plugin: {
                add: function(e, i, n) {
                    var o, r = t.ui[e].prototype;
                    for (o in n) r.plugins[o] = r.plugins[o] || [], r.plugins[o].push([i, n[o]])
                },
                call: function(t, e, i) {
                    var n, o = t.plugins[e];
                    if (o && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                        for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
                }
            },
            hasScroll: function(e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    o = !1;
                return e[n] > 0 ? !0 : (e[n] = 1, o = e[n] > 0, e[n] = 0, o)
            }
        })
    }(jQuery),
    function(t, e) {
        var i = 0,
            n = Array.prototype.slice,
            o = t.cleanData;
        t.cleanData = function(e) {
            for (var i, n = 0; null != (i = e[n]); n++) try {
                t(i).triggerHandler("remove")
            } catch (r) {}
            o(e)
        }, t.widget = function(i, n, o) {
            var r, s, a, l, c = {},
                h = i.split(".")[0];
            i = i.split(".")[1], r = h + "-" + i, o || (o = n, n = t.Widget), t.expr[":"][r.toLowerCase()] = function(e) {
                return !!t.data(e, r)
            }, t[h] = t[h] || {}, s = t[h][i], a = t[h][i] = function(t, i) {
                return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new a(t, i)
            }, t.extend(a, s, {
                version: o.version,
                _proto: t.extend({}, o),
                _childConstructors: []
            }), l = new n, l.options = t.widget.extend({}, l.options), t.each(o, function(i, o) {
                return t.isFunction(o) ? (c[i] = function() {
                    var t = function() {
                            return n.prototype[i].apply(this, arguments)
                        },
                        e = function(t) {
                            return n.prototype[i].apply(this, t)
                        };
                    return function() {
                        var i, n = this._super,
                            r = this._superApply;
                        return this._super = t, this._superApply = e, i = o.apply(this, arguments), this._super = n, this._superApply = r, i
                    }
                }(), e) : (c[i] = o, e)
            }), a.prototype = t.widget.extend(l, {
                widgetEventPrefix: s ? l.widgetEventPrefix : i
            }, c, {
                constructor: a,
                namespace: h,
                widgetName: i,
                widgetFullName: r
            }), s ? (t.each(s._childConstructors, function(e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, a, i._proto)
            }), delete s._childConstructors) : n._childConstructors.push(a), t.widget.bridge(i, a)
        }, t.widget.extend = function(i) {
            for (var o, r, s = n.call(arguments, 1), a = 0, l = s.length; l > a; a++)
                for (o in s[a]) r = s[a][o], s[a].hasOwnProperty(o) && r !== e && (i[o] = t.isPlainObject(r) ? t.isPlainObject(i[o]) ? t.widget.extend({}, i[o], r) : t.widget.extend({}, r) : r);
            return i
        }, t.widget.bridge = function(i, o) {
            var r = o.prototype.widgetFullName || i;
            t.fn[i] = function(s) {
                var a = "string" == typeof s,
                    l = n.call(arguments, 1),
                    c = this;
                return s = !a && l.length ? t.widget.extend.apply(null, [s].concat(l)) : s, a ? this.each(function() {
                    var n, o = t.data(this, r);
                    return o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (n = o[s].apply(o, l), n !== o && n !== e ? (c = n && n.jquery ? c.pushStack(n.get()) : n, !1) : e) : t.error("no such method '" + s + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + s + "'")
                }) : this.each(function() {
                    var e = t.data(this, r);
                    e ? e.option(s || {})._init() : t.data(this, r, new o(s, this))
                }), c
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(e, n) {
                n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === n && this.destroy()
                    }
                }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(i, n) {
                var o, r, s, a = i;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof i)
                    if (a = {}, o = i.split("."), i = o.shift(), o.length) {
                        for (r = a[i] = t.widget.extend({}, this.options[i]), s = 0; o.length - 1 > s; s++) r[o[s]] = r[o[s]] || {}, r = r[o[s]];
                        if (i = o.pop(), n === e) return r[i] === e ? null : r[i];
                        r[i] = n
                    } else {
                        if (n === e) return this.options[i] === e ? null : this.options[i];
                        a[i] = n
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(i, n, o) {
                var r, s = this;
                "boolean" != typeof i && (o = n, n = i, i = !1), o ? (n = r = t(n), this.bindings = this.bindings.add(n)) : (o = n, n = this.element, r = this.widget()), t.each(o, function(o, a) {
                    function l() {
                        return i || s.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : e
                    }
                    "string" != typeof a && (l.guid = a.guid = a.guid || l.guid || t.guid++);
                    var c = o.match(/^(\w+)\s*(.*)$/),
                        h = c[1] + s.eventNamespace,
                        p = c[2];
                    p ? r.delegate(p, h, l) : n.bind(h, l)
                })
            },
            _off: function(t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
            },
            _delay: function(t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(e, i, n) {
                var o, r, s = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], r = i.originalEvent)
                    for (o in r) o in i || (i[o] = r[o]);
                return this.element.trigger(i, n), !(t.isFunction(s) && s.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, i) {
            t.Widget.prototype["_" + e] = function(n, o, r) {
                "string" == typeof o && (o = {
                    effect: o
                });
                var s, a = o ? o === !0 || "number" == typeof o ? i : o.effect || i : e;
                o = o || {}, "number" == typeof o && (o = {
                    duration: o
                }), s = !t.isEmptyObject(o), o.complete = r, o.delay && n.delay(o.delay), s && t.effects && t.effects.effect[a] ? n[e](o) : a !== e && n[a] ? n[a](o.duration, o.easing, r) : n.queue(function(i) {
                    t(this)[e](), r && r.call(n[0]), i()
                })
            }
        })
    }(jQuery),
    function(t) {
        var e = !1;
        t(document).mouseup(function() {
            e = !1
        }), t.widget("ui.mouse", {
            version: "1.10.3",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.bind("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).bind("click." + this.widgetName, function(i) {
                    return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(i) {
                if (!e) {
                    this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                    var n = this,
                        o = 1 === i.which,
                        r = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                    return o && !r && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return n._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return n._mouseUp(t)
                    }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
                }
            },
            _mouseMove: function(e) {
                return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(e) {
                return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }(jQuery),
    function(t, e) {
        function i(t, e, i) {
            return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
        }

        function n(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }

        function o(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }
        }
        t.ui = t.ui || {};
        var r, s = Math.max,
            a = Math.abs,
            l = Math.round,
            c = /left|center|right/,
            h = /top|center|bottom/,
            p = /[\+\-]\d+(\.[\d]+)?%?/,
            d = /^\w+/,
            u = /%$/,
            f = t.fn.position;
        t.position = {
                scrollbarWidth: function() {
                    if (r !== e) return r;
                    var i, n, o = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        s = o.children()[0];
                    return t("body").append(o), i = s.offsetWidth, o.css("overflow", "scroll"), n = s.offsetWidth, i === n && (n = o[0].clientWidth), o.remove(), r = i - n
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow ? "" : e.element.css("overflow-x"),
                        n = e.isWindow ? "" : e.element.css("overflow-y"),
                        o = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                        r = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                    return {
                        width: r ? t.position.scrollbarWidth() : 0,
                        height: o ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]);
                    return {
                        element: i,
                        isWindow: n,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: n ? i.width() : i.outerWidth(),
                        height: n ? i.height() : i.outerHeight()
                    }
                }
            }, t.fn.position = function(e) {
                if (!e || !e.of) return f.apply(this, arguments);
                e = t.extend({}, e);
                var r, u, m, g, y, v, b = t(e.of),
                    C = t.position.getWithinInfo(e.within),
                    E = t.position.getScrollInfo(C),
                    _ = (e.collision || "flip").split(" "),
                    T = {};
                return v = o(b), b[0].preventDefault && (e.at = "left top"), u = v.width, m = v.height, g = v.offset, y = t.extend({}, g), t.each(["my", "at"], function() {
                    var t, i, n = (e[this] || "").split(" ");
                    1 === n.length && (n = c.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = c.test(n[0]) ? n[0] : "center", n[1] = h.test(n[1]) ? n[1] : "center", t = p.exec(n[0]), i = p.exec(n[1]), T[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(n[0])[0], d.exec(n[1])[0]]
                }), 1 === _.length && (_[1] = _[0]), "right" === e.at[0] ? y.left += u : "center" === e.at[0] && (y.left += u / 2), "bottom" === e.at[1] ? y.top += m : "center" === e.at[1] && (y.top += m / 2), r = i(T.at, u, m), y.left += r[0], y.top += r[1], this.each(function() {
                    var o, c, h = t(this),
                        p = h.outerWidth(),
                        d = h.outerHeight(),
                        f = n(this, "marginLeft"),
                        v = n(this, "marginTop"),
                        A = p + f + n(this, "marginRight") + E.width,
                        S = d + v + n(this, "marginBottom") + E.height,
                        D = t.extend({}, y),
                        w = i(T.my, h.outerWidth(), h.outerHeight());
                    "right" === e.my[0] ? D.left -= p : "center" === e.my[0] && (D.left -= p / 2), "bottom" === e.my[1] ? D.top -= d : "center" === e.my[1] && (D.top -= d / 2), D.left += w[0], D.top += w[1], t.support.offsetFractions || (D.left = l(D.left), D.top = l(D.top)), o = {
                        marginLeft: f,
                        marginTop: v
                    }, t.each(["left", "top"], function(i, n) {
                        t.ui.position[_[i]] && t.ui.position[_[i]][n](D, {
                            targetWidth: u,
                            targetHeight: m,
                            elemWidth: p,
                            elemHeight: d,
                            collisionPosition: o,
                            collisionWidth: A,
                            collisionHeight: S,
                            offset: [r[0] + w[0], r[1] + w[1]],
                            my: e.my,
                            at: e.at,
                            within: C,
                            elem: h
                        })
                    }), e.using && (c = function(t) {
                        var i = g.left - D.left,
                            n = i + u - p,
                            o = g.top - D.top,
                            r = o + m - d,
                            l = {
                                target: {
                                    element: b,
                                    left: g.left,
                                    top: g.top,
                                    width: u,
                                    height: m
                                },
                                element: {
                                    element: h,
                                    left: D.left,
                                    top: D.top,
                                    width: p,
                                    height: d
                                },
                                horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                                vertical: 0 > r ? "top" : o > 0 ? "bottom" : "middle"
                            };
                        p > u && u > a(i + n) && (l.horizontal = "center"), d > m && m > a(o + r) && (l.vertical = "middle"), l.important = s(a(i), a(n)) > s(a(o), a(r)) ? "horizontal" : "vertical", e.using.call(this, t, l)
                    }), h.offset(t.extend(D, {
                        using: c
                    }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i, n = e.within,
                            o = n.isWindow ? n.scrollLeft : n.offset.left,
                            r = n.width,
                            a = t.left - e.collisionPosition.marginLeft,
                            l = o - a,
                            c = a + e.collisionWidth - r - o;
                        e.collisionWidth > r ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - r - o, t.left += l - i) : t.left = c > 0 && 0 >= l ? o : l > c ? o + r - e.collisionWidth : o : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = s(t.left - a, t.left)
                    },
                    top: function(t, e) {
                        var i, n = e.within,
                            o = n.isWindow ? n.scrollTop : n.offset.top,
                            r = e.within.height,
                            a = t.top - e.collisionPosition.marginTop,
                            l = o - a,
                            c = a + e.collisionHeight - r - o;
                        e.collisionHeight > r ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - r - o, t.top += l - i) : t.top = c > 0 && 0 >= l ? o : l > c ? o + r - e.collisionHeight : o : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = s(t.top - a, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, n, o = e.within,
                            r = o.offset.left + o.scrollLeft,
                            s = o.width,
                            l = o.isWindow ? o.scrollLeft : o.offset.left,
                            c = t.left - e.collisionPosition.marginLeft,
                            h = c - l,
                            p = c + e.collisionWidth - s - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            u = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        0 > h ? (i = t.left + d + u + f + e.collisionWidth - s - r, (0 > i || a(h) > i) && (t.left += d + u + f)) : p > 0 && (n = t.left - e.collisionPosition.marginLeft + d + u + f - l, (n > 0 || p > a(n)) && (t.left += d + u + f))
                    },
                    top: function(t, e) {
                        var i, n, o = e.within,
                            r = o.offset.top + o.scrollTop,
                            s = o.height,
                            l = o.isWindow ? o.scrollTop : o.offset.top,
                            c = t.top - e.collisionPosition.marginTop,
                            h = c - l,
                            p = c + e.collisionHeight - s - l,
                            d = "top" === e.my[1],
                            u = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            m = -2 * e.offset[1];
                        0 > h ? (n = t.top + u + f + m + e.collisionHeight - s - r, t.top + u + f + m > h && (0 > n || a(h) > n) && (t.top += u + f + m)) : p > 0 && (i = t.top - e.collisionPosition.marginTop + u + f + m - l, t.top + u + f + m > p && (i > 0 || p > a(i)) && (t.top += u + f + m))
                    }
                },
                flipfit: {
                    left: function() {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var e, i, n, o, r, s = document.getElementsByTagName("body")[0],
                    a = document.createElement("div");
                e = document.createElement(s ? "div" : "body"), n = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, s && t.extend(n, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (r in n) e.style[r] = n[r];
                e.appendChild(a), i = s || document.documentElement, i.insertBefore(e, i.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", o = t(a).offset().left, t.support.offsetFractions = o > 10 && 11 > o, e.innerHTML = "", i.removeChild(e)
            }()
    }(jQuery),
    function(t) {
        t.widget("ui.draggable", t.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i = this.options;
                return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                    t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(t(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function(e) {
                var i = this.options;
                return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.offset.scroll = !1, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
            },
            _mouseDrag: function(e, i) {
                if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var n = this._uiHash();
                    if (this._trigger("drag", e, n) === !1) return this._mouseUp({}), !1;
                    this.position = n.position
                }
                return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function(e) {
                var i = this,
                    n = !1;
                return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    i._trigger("stop", e) !== !1 && i._clear()
                }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
            },
            _mouseUp: function(e) {
                return t("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(e) {
                return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _createHelper: function(e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.element.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, n, o = this.options;
                return o.containment ? "window" === o.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === o.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : o.containment.constructor === Array ? (this.containment = o.containment, void 0) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), i = t(o.containment), n = i[0], n && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), void 0) : (this.containment = null, void 0)
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1,
                    o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
                return this.offset.scroll || (this.offset.scroll = {
                    top: o.scrollTop(),
                    left: o.scrollLeft()
                }), {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * n
                }
            },
            _generatePosition: function(e) {
                var i, n, o, r, s = this.options,
                    a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = e.pageX,
                    c = e.pageY;
                return this.offset.scroll || (this.offset.scroll = {
                    top: a.scrollTop(),
                    left: a.scrollLeft()
                }), this.originalPosition && (this.containment && (this.relative_container ? (n = this.relative_container.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), s.grid && (o = s.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY, c = i ? o - this.offset.click.top >= i[1] || o - this.offset.click.top > i[3] ? o : o - this.offset.click.top >= i[1] ? o - s.grid[1] : o + s.grid[1] : o, r = s.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX, l = i ? r - this.offset.click.left >= i[0] || r - this.offset.click.left > i[2] ? r : r - this.offset.click.left >= i[0] ? r - s.grid[0] : r + s.grid[0] : r)), {
                    top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function(e, i, n) {
                return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, n)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), t.ui.plugin.add("draggable", "connectToSortable", {
            start: function(e, i) {
                var n = t(this).data("ui-draggable"),
                    o = n.options,
                    r = t.extend({}, i, {
                        item: n.element
                    });
                n.sortables = [], t(o.connectToSortable).each(function() {
                    var i = t.data(this, "ui-sortable");
                    i && !i.options.disabled && (n.sortables.push({
                        instance: i,
                        shouldRevert: i.options.revert
                    }), i.refreshPositions(), i._trigger("activate", e, r))
                })
            },
            stop: function(e, i) {
                var n = t(this).data("ui-draggable"),
                    o = t.extend({}, i, {
                        item: n.element
                    });
                t.each(n.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === n.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, o))
                })
            },
            drag: function(e, i) {
                var n = t(this).data("ui-draggable"),
                    o = this;
                t.each(n.sortables, function() {
                    var r = !1,
                        s = this;
                    this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (r = !0, t.each(n.sortables, function() {
                        return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this !== s && this.instance._intersectsWith(this.instance.containerCache) && t.contains(s.instance.element[0], this.instance.element[0]) && (r = !1), r
                    })), r ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(o).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return i.helper[0]
                    }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", e), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", e), n.dropped = !1)
                })
            }
        }), t.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var e = t("body"),
                    i = t(this).data("ui-draggable").options;
                e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
            },
            stop: function() {
                var e = t(this).data("ui-draggable").options;
                e._cursor && t("body").css("cursor", e._cursor)
            }
        }), t.ui.plugin.add("draggable", "opacity", {
            start: function(e, i) {
                var n = t(i.helper),
                    o = t(this).data("ui-draggable").options;
                n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
            },
            stop: function(e, i) {
                var n = t(this).data("ui-draggable").options;
                n._opacity && t(i.helper).css("opacity", n._opacity)
            }
        }), t.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var e = t(this).data("ui-draggable");
                e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
            },
            drag: function(e) {
                var i = t(this).data("ui-draggable"),
                    n = i.options,
                    o = !1;
                i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = o = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = o = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = o = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = o = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? o = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (o = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? o = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (o = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
            }
        }), t.ui.plugin.add("draggable", "snap", {
            start: function() {
                var e = t(this).data("ui-draggable"),
                    i = e.options;
                e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                    var i = t(this),
                        n = i.offset();
                    this !== e.element[0] && e.snapElements.push({
                        item: this,
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                        top: n.top,
                        left: n.left
                    })
                })
            },
            drag: function(e, i) {
                var n, o, r, s, a, l, c, h, p, d, u = t(this).data("ui-draggable"),
                    f = u.options,
                    m = f.snapTolerance,
                    g = i.offset.left,
                    y = g + u.helperProportions.width,
                    v = i.offset.top,
                    b = v + u.helperProportions.height;
                for (p = u.snapElements.length - 1; p >= 0; p--) a = u.snapElements[p].left, l = a + u.snapElements[p].width, c = u.snapElements[p].top, h = c + u.snapElements[p].height, a - m > y || g > l + m || c - m > b || v > h + m || !t.contains(u.snapElements[p].item.ownerDocument, u.snapElements[p].item) ? (u.snapElements[p].snapping && u.options.snap.release && u.options.snap.release.call(u.element, e, t.extend(u._uiHash(), {
                    snapItem: u.snapElements[p].item
                })), u.snapElements[p].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(c - b), o = m >= Math.abs(h - v), r = m >= Math.abs(a - y), s = m >= Math.abs(l - g), n && (i.position.top = u._convertPositionTo("relative", {
                    top: c - u.helperProportions.height,
                    left: 0
                }).top - u.margins.top), o && (i.position.top = u._convertPositionTo("relative", {
                    top: h,
                    left: 0
                }).top - u.margins.top), r && (i.position.left = u._convertPositionTo("relative", {
                    top: 0,
                    left: a - u.helperProportions.width
                }).left - u.margins.left), s && (i.position.left = u._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left - u.margins.left)), d = n || o || r || s, "outer" !== f.snapMode && (n = m >= Math.abs(c - v), o = m >= Math.abs(h - b), r = m >= Math.abs(a - g), s = m >= Math.abs(l - y), n && (i.position.top = u._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top - u.margins.top), o && (i.position.top = u._convertPositionTo("relative", {
                    top: h - u.helperProportions.height,
                    left: 0
                }).top - u.margins.top), r && (i.position.left = u._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - u.margins.left), s && (i.position.left = u._convertPositionTo("relative", {
                    top: 0,
                    left: l - u.helperProportions.width
                }).left - u.margins.left)), !u.snapElements[p].snapping && (n || o || r || s || d) && u.options.snap.snap && u.options.snap.snap.call(u.element, e, t.extend(u._uiHash(), {
                    snapItem: u.snapElements[p].item
                })), u.snapElements[p].snapping = n || o || r || s || d)
            }
        }), t.ui.plugin.add("draggable", "stack", {
            start: function() {
                var e, i = this.data("ui-draggable").options,
                    n = t.makeArray(t(i.stack)).sort(function(e, i) {
                        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                    });
                n.length && (e = parseInt(t(n[0]).css("zIndex"), 10) || 0, t(n).each(function(i) {
                    t(this).css("zIndex", e + i)
                }), this.css("zIndex", e + n.length))
            }
        }), t.ui.plugin.add("draggable", "zIndex", {
            start: function(e, i) {
                var n = t(i.helper),
                    o = t(this).data("ui-draggable").options;
                n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
            },
            stop: function(e, i) {
                var n = t(this).data("ui-draggable").options;
                n._zIndex && t(i.helper).css("zIndex", n._zIndex)
            }
        })
    }(jQuery),
    function(t) {
        function e(t, e, i) {
            return t > e && e + i > t
        }
        t.widget("ui.droppable", {
            version: "1.10.3",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var e = this.options,
                    i = e.accept;
                this.isover = !1, this.isout = !0, this.accept = t.isFunction(i) ? i : function(t) {
                    return t.is(i)
                }, this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
            },
            _destroy: function() {
                for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++) i[e] === this && i.splice(e, 1);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(e, i) {
                "accept" === e && (this.accept = t.isFunction(i) ? i : function(t) {
                    return t.is(i)
                }), t.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function(e) {
                var i = t.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
            },
            _deactivate: function(e) {
                var i = t.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
            },
            _over: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
            },
            _out: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
            },
            _drop: function(e, i) {
                var n = i || t.ui.ddmanager.current,
                    o = !1;
                return n && (n.currentItem || n.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var e = t.data(this, "ui-droppable");
                    return e.options.greedy && !e.options.disabled && e.options.scope === n.options.scope && e.accept.call(e.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(e, {
                        offset: e.element.offset()
                    }), e.options.tolerance) ? (o = !0, !1) : void 0
                }), o ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1) : !1
            },
            ui: function(t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            }
        }), t.ui.intersect = function(t, i, n) {
            if (!i.offset) return !1;
            var o, r, s = (t.positionAbs || t.position.absolute).left,
                a = s + t.helperProportions.width,
                l = (t.positionAbs || t.position.absolute).top,
                c = l + t.helperProportions.height,
                h = i.offset.left,
                p = h + i.proportions.width,
                d = i.offset.top,
                u = d + i.proportions.height;
            switch (n) {
                case "fit":
                    return s >= h && p >= a && l >= d && u >= c;
                case "intersect":
                    return s + t.helperProportions.width / 2 > h && p > a - t.helperProportions.width / 2 && l + t.helperProportions.height / 2 > d && u > c - t.helperProportions.height / 2;
                case "pointer":
                    return o = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, r = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(r, d, i.proportions.height) && e(o, h, i.proportions.width);
                case "touch":
                    return (l >= d && u >= l || c >= d && u >= c || d > l && c > u) && (s >= h && p >= s || a >= h && p >= a || h > s && a > p);
                default:
                    return !1
            }
        }, t.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(e, i) {
                var n, o, r = t.ui.ddmanager.droppables[e.options.scope] || [],
                    s = i ? i.type : null,
                    a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t: for (n = 0; r.length > n; n++)
                    if (!(r[n].options.disabled || e && !r[n].accept.call(r[n].element[0], e.currentItem || e.element))) {
                        for (o = 0; a.length > o; o++)
                            if (a[o] === r[n].element[0]) {
                                r[n].proportions.height = 0;
                                continue t
                            }
                        r[n].visible = "none" !== r[n].element.css("display"), r[n].visible && ("mousedown" === s && r[n]._activate.call(r[n], i), r[n].offset = r[n].element.offset(), r[n].proportions = {
                            width: r[n].element[0].offsetWidth,
                            height: r[n].element[0].offsetHeight
                        })
                    }
            },
            drop: function(e, i) {
                var n = !1;
                return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), n
            },
            dragStart: function(e, i) {
                e.element.parentsUntil("body").bind("scroll.droppable", function() {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                })
            },
            drag: function(e, i) {
                e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var n, o, r, s = t.ui.intersect(e, this, this.options.tolerance),
                            a = !s && this.isover ? "isout" : s && !this.isover ? "isover" : null;
                        a && (this.options.greedy && (o = this.options.scope, r = this.element.parents(":data(ui-droppable)").filter(function() {
                            return t.data(this, "ui-droppable").options.scope === o
                        }), r.length && (n = t.data(r[0], "ui-droppable"), n.greedyChild = "isover" === a)), n && "isover" === a && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), n && "isout" === a && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                    }
                })
            },
            dragStop: function(e, i) {
                e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
        }
    }(jQuery),
    function(t) {
        function e(t) {
            return parseInt(t, 10) || 0
        }

        function i(t) {
            return !isNaN(parseInt(t, 10))
        }
        t.widget("ui.resizable", t.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function() {
                var e, i, n, o, r, s = this,
                    a = this.options;
                if (this.element.addClass("ui-resizable"), t.extend(this, {
                        _aspectRatio: !!a.aspectRatio,
                        aspectRatio: a.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++) n = t.trim(e[i]), r = "ui-resizable-" + n, o = t("<div class='ui-resizable-handle " + r + "'></div>"), o.css({
                        zIndex: a.zIndex
                    }), "se" === n && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(o);
                this._renderAxis = function(e) {
                    var i, n, o, r;
                    e = e || this.element;
                    for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (n = t(this.handles[i], this.element), r = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(o, r), this._proportionallyResize()), t(this.handles[i]).length
                }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    s.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), s.axis = o && o[1] ? o[1] : "se")
                }), a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    a.disabled || (t(this).removeClass("ui-resizable-autohide"), s._handles.show())
                }).mouseleave(function() {
                    a.disabled || s.resizing || (t(this).addClass("ui-resizable-autohide"), s._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var e, i = function(e) {
                    t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _mouseCapture: function(e) {
                var i, n, o = !1;
                for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (o = !0);
                return !this.options.disabled && o
            },
            _mouseStart: function(i) {
                var n, o, r, s = this.options,
                    a = this.element.position(),
                    l = this.element;
                return this.resizing = !0, /absolute/.test(l.css("position")) ? l.css({
                    position: "absolute",
                    top: l.css("top"),
                    left: l.css("left")
                }) : l.is(".ui-draggable") && l.css({
                    position: "absolute",
                    top: a.top,
                    left: a.left
                }), this._renderProxy(), n = e(this.helper.css("left")), o = e(this.helper.css("top")), s.containment && (n += t(s.containment).scrollLeft() || 0, o += t(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: n,
                    top: o
                }, this.size = this._helper ? {
                    width: l.outerWidth(),
                    height: l.outerHeight()
                } : {
                    width: l.width(),
                    height: l.height()
                }, this.originalSize = this._helper ? {
                    width: l.outerWidth(),
                    height: l.outerHeight()
                } : {
                    width: l.width(),
                    height: l.height()
                }, this.originalPosition = {
                    left: n,
                    top: o
                }, this.sizeDiff = {
                    width: l.outerWidth() - l.width(),
                    height: l.outerHeight() - l.height()
                }, this.originalMousePosition = {
                    left: i.pageX,
                    top: i.pageY
                }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, r = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === r ? this.axis + "-resize" : r), l.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
            },
            _mouseDrag: function(e) {
                var i, n = this.helper,
                    o = {},
                    r = this.originalMousePosition,
                    s = this.axis,
                    a = this.position.top,
                    l = this.position.left,
                    c = this.size.width,
                    h = this.size.height,
                    p = e.pageX - r.left || 0,
                    d = e.pageY - r.top || 0,
                    u = this._change[s];
                return u ? (i = u.apply(this, [e, p, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== a && (o.top = this.position.top + "px"), this.position.left !== l && (o.left = this.position.left + "px"), this.size.width !== c && (o.width = this.size.width + "px"), this.size.height !== h && (o.height = this.size.height + "px"), n.css(o), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(o) || this._trigger("resize", e, this.ui()), !1) : !1
            },
            _mouseStop: function(e) {
                this.resizing = !1;
                var i, n, o, r, s, a, l, c = this.options,
                    h = this;
                return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), o = n && t.ui.hasScroll(i[0], "left") ? 0 : h.sizeDiff.height, r = n ? 0 : h.sizeDiff.width, s = {
                    width: h.helper.width() - r,
                    height: h.helper.height() - o
                }, a = parseInt(h.element.css("left"), 10) + (h.position.left - h.originalPosition.left) || null, l = parseInt(h.element.css("top"), 10) + (h.position.top - h.originalPosition.top) || null, c.animate || this.element.css(t.extend(s, {
                    top: l,
                    left: a
                })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !c.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
            },
            _updateVirtualBoundaries: function(t) {
                var e, n, o, r, s, a = this.options;
                s = {
                    minWidth: i(a.minWidth) ? a.minWidth : 0,
                    maxWidth: i(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: i(a.minHeight) ? a.minHeight : 0,
                    maxHeight: i(a.maxHeight) ? a.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = s.minHeight * this.aspectRatio, o = s.minWidth / this.aspectRatio, n = s.maxHeight * this.aspectRatio, r = s.maxWidth / this.aspectRatio, e > s.minWidth && (s.minWidth = e), o > s.minHeight && (s.minHeight = o), s.maxWidth > n && (s.maxWidth = n), s.maxHeight > r && (s.maxHeight = r)), this._vBoundaries = s
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function(t) {
                var e = this.position,
                    n = this.size,
                    o = this.axis;
                return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === o && (t.left = e.left + (n.width - t.width), t.top = null), "nw" === o && (t.top = e.top + (n.height - t.height), t.left = e.left + (n.width - t.width)), t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries,
                    n = this.axis,
                    o = i(t.width) && e.maxWidth && e.maxWidth < t.width,
                    r = i(t.height) && e.maxHeight && e.maxHeight < t.height,
                    s = i(t.width) && e.minWidth && e.minWidth > t.width,
                    a = i(t.height) && e.minHeight && e.minHeight > t.height,
                    l = this.originalPosition.left + this.originalSize.width,
                    c = this.position.top + this.size.height,
                    h = /sw|nw|w/.test(n),
                    p = /nw|ne|n/.test(n);
                return s && (t.width = e.minWidth), a && (t.height = e.minHeight), o && (t.width = e.maxWidth), r && (t.height = e.maxHeight), s && h && (t.left = l - e.minWidth), o && h && (t.left = l - e.maxWidth), a && p && (t.top = c - e.minHeight), r && p && (t.top = c - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length) {
                    var t, e, i, n, o, r = this.helper || this.element;
                    for (t = 0; this._proportionallyResizeElements.length > t; t++) {
                        if (o = this._proportionallyResizeElements[t], !this.borderDif)
                            for (this.borderDif = [], i = [o.css("borderTopWidth"), o.css("borderRightWidth"), o.css("borderBottomWidth"), o.css("borderLeftWidth")], n = [o.css("paddingTop"), o.css("paddingRight"), o.css("paddingBottom"), o.css("paddingLeft")], e = 0; i.length > e; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(n[e], 10) || 0);
                        o.css({
                            height: r.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: r.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
                }
            },
            _renderProxy: function() {
                var e = this.element,
                    i = this.options;
                this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(t, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function(t, e) {
                    var i = this.originalSize,
                        n = this.originalPosition;
                    return {
                        left: n.left + e,
                        width: i.width - e
                    }
                },
                n: function(t, e, i) {
                    var n = this.originalSize,
                        o = this.originalPosition;
                    return {
                        top: o.top + i,
                        height: n.height - i
                    }
                },
                s: function(t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                sw: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                },
                ne: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                nw: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                }
            },
            _propagate: function(e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), t.ui.plugin.add("resizable", "animate", {
            stop: function(e) {
                var i = t(this).data("ui-resizable"),
                    n = i.options,
                    o = i._proportionallyResizeElements,
                    r = o.length && /textarea/i.test(o[0].nodeName),
                    s = r && t.ui.hasScroll(o[0], "left") ? 0 : i.sizeDiff.height,
                    a = r ? 0 : i.sizeDiff.width,
                    l = {
                        width: i.size.width - a,
                        height: i.size.height - s
                    },
                    c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, h && c ? {
                    top: h,
                    left: c
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function() {
                        var n = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        o && o.length && t(o[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", e)
                    }
                })
            }
        }), t.ui.plugin.add("resizable", "containment", {
            start: function() {
                var i, n, o, r, s, a, l, c = t(this).data("ui-resizable"),
                    h = c.options,
                    p = c.element,
                    d = h.containment,
                    u = d instanceof t ? d.get(0) : /parent/.test(d) ? p.parent().get(0) : d;
                u && (c.containerElement = t(u), /document/.test(d) || d === document ? (c.containerOffset = {
                    left: 0,
                    top: 0
                }, c.containerPosition = {
                    left: 0,
                    top: 0
                }, c.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                }) : (i = t(u), n = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, o) {
                    n[t] = e(i.css("padding" + o))
                }), c.containerOffset = i.offset(), c.containerPosition = i.position(), c.containerSize = {
                    height: i.innerHeight() - n[3],
                    width: i.innerWidth() - n[1]
                }, o = c.containerOffset, r = c.containerSize.height, s = c.containerSize.width, a = t.ui.hasScroll(u, "left") ? u.scrollWidth : s, l = t.ui.hasScroll(u) ? u.scrollHeight : r, c.parentData = {
                    element: u,
                    left: o.left,
                    top: o.top,
                    width: a,
                    height: l
                }))
            },
            resize: function(e) {
                var i, n, o, r, s = t(this).data("ui-resizable"),
                    a = s.options,
                    l = s.containerOffset,
                    c = s.position,
                    h = s._aspectRatio || e.shiftKey,
                    p = {
                        top: 0,
                        left: 0
                    },
                    d = s.containerElement;
                d[0] !== document && /static/.test(d.css("position")) && (p = l), c.left < (s._helper ? l.left : 0) && (s.size.width = s.size.width + (s._helper ? s.position.left - l.left : s.position.left - p.left), h && (s.size.height = s.size.width / s.aspectRatio), s.position.left = a.helper ? l.left : 0), c.top < (s._helper ? l.top : 0) && (s.size.height = s.size.height + (s._helper ? s.position.top - l.top : s.position.top), h && (s.size.width = s.size.height * s.aspectRatio), s.position.top = s._helper ? l.top : 0), s.offset.left = s.parentData.left + s.position.left, s.offset.top = s.parentData.top + s.position.top, i = Math.abs((s._helper ? s.offset.left - p.left : s.offset.left - p.left) + s.sizeDiff.width), n = Math.abs((s._helper ? s.offset.top - p.top : s.offset.top - l.top) + s.sizeDiff.height), o = s.containerElement.get(0) === s.element.parent().get(0), r = /relative|absolute/.test(s.containerElement.css("position")), o && r && (i -= s.parentData.left), i + s.size.width >= s.parentData.width && (s.size.width = s.parentData.width - i, h && (s.size.height = s.size.width / s.aspectRatio)), n + s.size.height >= s.parentData.height && (s.size.height = s.parentData.height - n, h && (s.size.width = s.size.height * s.aspectRatio))
            },
            stop: function() {
                var e = t(this).data("ui-resizable"),
                    i = e.options,
                    n = e.containerOffset,
                    o = e.containerPosition,
                    r = e.containerElement,
                    s = t(e.helper),
                    a = s.offset(),
                    l = s.outerWidth() - e.sizeDiff.width,
                    c = s.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(r.css("position")) && t(this).css({
                    left: a.left - o.left - n.left,
                    width: l,
                    height: c
                }), e._helper && !i.animate && /static/.test(r.css("position")) && t(this).css({
                    left: a.left - o.left - n.left,
                    width: l,
                    height: c
                })
            }
        }), t.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var e = t(this).data("ui-resizable"),
                    i = e.options,
                    n = function(e) {
                        t(e).each(function() {
                            var e = t(this);
                            e.data("ui-resizable-alsoresize", {
                                width: parseInt(e.width(), 10),
                                height: parseInt(e.height(), 10),
                                left: parseInt(e.css("left"), 10),
                                top: parseInt(e.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                    n(t)
                })
            },
            resize: function(e, i) {
                var n = t(this).data("ui-resizable"),
                    o = n.options,
                    r = n.originalSize,
                    s = n.originalPosition,
                    a = {
                        height: n.size.height - r.height || 0,
                        width: n.size.width - r.width || 0,
                        top: n.position.top - s.top || 0,
                        left: n.position.left - s.left || 0
                    },
                    l = function(e, n) {
                        t(e).each(function() {
                            var e = t(this),
                                o = t(this).data("ui-resizable-alsoresize"),
                                r = {},
                                s = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            t.each(s, function(t, e) {
                                var i = (o[e] || 0) + (a[e] || 0);
                                i && i >= 0 && (r[e] = i || null)
                            }), e.css(r)
                        })
                    };
                "object" != typeof o.alsoResize || o.alsoResize.nodeType ? l(o.alsoResize) : t.each(o.alsoResize, function(t, e) {
                    l(t, e)
                })
            },
            stop: function() {
                t(this).removeData("resizable-alsoresize")
            }
        }), t.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var e = t(this).data("ui-resizable"),
                    i = e.options,
                    n = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: n.height,
                    width: n.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
            },
            resize: function() {
                var e = t(this).data("ui-resizable");
                e.ghost && e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width
                })
            },
            stop: function() {
                var e = t(this).data("ui-resizable");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }), t.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var e = t(this).data("ui-resizable"),
                    i = e.options,
                    n = e.size,
                    o = e.originalSize,
                    r = e.originalPosition,
                    s = e.axis,
                    a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                    l = a[0] || 1,
                    c = a[1] || 1,
                    h = Math.round((n.width - o.width) / l) * l,
                    p = Math.round((n.height - o.height) / c) * c,
                    d = o.width + h,
                    u = o.height + p,
                    f = i.maxWidth && d > i.maxWidth,
                    m = i.maxHeight && u > i.maxHeight,
                    g = i.minWidth && i.minWidth > d,
                    y = i.minHeight && i.minHeight > u;
                i.grid = a, g && (d += l), y && (u += c), f && (d -= l), m && (u -= c), /^(se|s|e)$/.test(s) ? (e.size.width = d, e.size.height = u) : /^(ne)$/.test(s) ? (e.size.width = d, e.size.height = u, e.position.top = r.top - p) : /^(sw)$/.test(s) ? (e.size.width = d, e.size.height = u, e.position.left = r.left - h) : (e.size.width = d, e.size.height = u, e.position.top = r.top - p, e.position.left = r.left - h)
            }
        })
    }(jQuery),
    function(t) {
        t.widget("ui.selectable", t.ui.mouse, {
            version: "1.10.3",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var e, i = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                        var e = t(this),
                            i = e.offset();
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: e,
                            left: i.left,
                            top: i.top,
                            right: i.left + e.outerWidth(),
                            bottom: i.top + e.outerHeight(),
                            startselected: !1,
                            selected: e.hasClass("ui-selected"),
                            selecting: e.hasClass("ui-selecting"),
                            unselecting: e.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function(e) {
                var i = this,
                    n = this.options;
                this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var n = t.data(this, "selectable-item");
                    n.startselected = !0, e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: n.element
                    }))
                }), t(e.target).parents().addBack().each(function() {
                    var n, o = t.data(this, "selectable-item");
                    return o ? (n = !e.metaKey && !e.ctrlKey || !o.$element.hasClass("ui-selected"), o.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), o.unselecting = !n, o.selecting = n, o.selected = n, n ? i._trigger("selecting", e, {
                        selecting: o.element
                    }) : i._trigger("unselecting", e, {
                        unselecting: o.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function(e) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, n = this,
                        o = this.options,
                        r = this.opos[0],
                        s = this.opos[1],
                        a = e.pageX,
                        l = e.pageY;
                    return r > a && (i = a, a = r, r = i), s > l && (i = l, l = s, s = i), this.helper.css({
                        left: r,
                        top: s,
                        width: a - r,
                        height: l - s
                    }), this.selectees.each(function() {
                        var i = t.data(this, "selectable-item"),
                            c = !1;
                        i && i.element !== n.element[0] && ("touch" === o.tolerance ? c = !(i.left > a || r > i.right || i.top > l || s > i.bottom) : "fit" === o.tolerance && (c = i.left > r && a > i.right && i.top > s && l > i.bottom), c ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                            selecting: i.element
                        }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                            unselecting: i.element
                        }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                            unselecting: i.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(e) {
                var i = this;
                return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                    var n = t.data(this, "selectable-item");
                    n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                        unselected: n.element
                    })
                }), t(".ui-selecting", this.element[0]).each(function() {
                    var n = t.data(this, "selectable-item");
                    n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                        selected: n.element
                    })
                }), this._trigger("stop", e), this.helper.remove(), !1
            }
        })
    }(jQuery),
    function(t) {
        function e(t, e, i) {
            return t > e && e + i > t
        }

        function i(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        }
        t.widget("ui.sortable", t.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function() {
                var t = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function(e, i) {
                "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(e, i) {
                var n = null,
                    o = !1,
                    r = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                    return t.data(this, r.widgetName + "-item") === r ? (n = t(this), !1) : void 0
                }), t.data(e.target, r.widgetName + "-item") === r && (n = t(e.target)), n ? !this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function() {
                    this === e.target && (o = !0)
                }), o) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1 : !1)
            },
            _mouseStart: function(e, i, n) {
                var o, r, s = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, t.extend(this.offset, {
                        click: {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && "auto" !== s.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", s.cursor), this.storedStylesheet = t("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(r)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function(e) {
                var i, n, o, r, s = this.options,
                    a = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed)), e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed))), a !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (n = this.items[i], o = n.item[0], r = this._intersectsWithPointer(n), r && n.instance === this.currentContainer && o !== this.currentItem[0] && this.placeholder[1 === r ? "next" : "prev"]()[0] !== o && !t.contains(this.placeholder[0], o) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], o) : !0)) {
                        if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this,
                            o = this.placeholder.offset(),
                            r = this.options.axis,
                            s = {};
                        r && "x" !== r || (s.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (s.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
                            n._clear(e)
                        })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, t(i).each(function() {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !n.length && e.key && n.push(e.key + "="), n.join("&")
            },
            toArray: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, i.each(function() {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    o = n + this.helperProportions.height,
                    r = t.left,
                    s = r + t.width,
                    a = t.top,
                    l = a + t.height,
                    c = this.offset.click.top,
                    h = this.offset.click.left,
                    p = "x" === this.options.axis || n + c > a && l > n + c,
                    d = "y" === this.options.axis || e + h > r && s > e + h,
                    u = p && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : e + this.helperProportions.width / 2 > r && s > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > o - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(t) {
                var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    n = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    o = i && n,
                    r = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return o ? this.floating ? s && "right" === s || "down" === r ? 2 : 1 : r && ("down" === r ? 2 : 1) : !1
            },
            _intersectsWithSides: function(t) {
                var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    n = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    o = this._getDragVerticalDirection(),
                    r = this._getDragHorizontalDirection();
                return this.floating && r ? "right" === r && n || "left" === r && !n : o && ("down" === o && i || "up" === o && !i)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function(t) {
                return this._refreshItems(t), this.refreshPositions(), this
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(e) {
                var i, n, o, r, s = [],
                    a = [],
                    l = this._connectWith();
                if (l && e)
                    for (i = l.length - 1; i >= 0; i--)
                        for (o = t(l[i]), n = o.length - 1; n >= 0; n--) r = t.data(o[n], this.widgetFullName), r && r !== this && !r.options.disabled && a.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
                for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--) a[i][0].each(function() {
                    s.push(this)
                });
                return t(s)
            },
            _removeCurrentsFromItems: function() {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function(t) {
                    for (var i = 0; e.length > i; i++)
                        if (e[i] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(e) {
                this.items = [], this.containers = [this];
                var i, n, o, r, s, a, l, c, h = this.items,
                    p = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (o = t(d[i]), n = o.length - 1; n >= 0; n--) r = t.data(o[n], this.widgetFullName), r && r !== this && !r.options.disabled && (p.push([t.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {
                            item: this.currentItem
                        }) : t(r.options.items, r.element), r]), this.containers.push(r));
                for (i = p.length - 1; i >= 0; i--)
                    for (s = p[i][1], a = p[i][0], n = 0, c = a.length; c > n; n++) l = t(a[n]), l.data(this.widgetName + "-item", s), h.push({
                        item: l,
                        instance: s,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(e) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, n, o, r;
                for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = o.outerWidth(), n.height = o.outerHeight()), r = o.offset(), n.left = r.left, n.top = r.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) r = this.containers[i].element.offset(), this.containers[i].containerCache.left = r.left, this.containers[i].containerCache.top = r.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(e) {
                e = e || this;
                var i, n = e.options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                    element: function() {
                        var n = e.currentItem[0].nodeName.toLowerCase(),
                            o = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === n ? e.currentItem.children().each(function() {
                            t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(o)
                        }) : "img" === n && o.attr("src", e.currentItem.attr("src")), i || o.css("visibility", "hidden"), o
                    },
                    update: function(t, o) {
                        (!i || n.forcePlaceholderSize) && (o.height() || o.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), o.width() || o.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
            },
            _contactContainers: function(n) {
                var o, r, s, a, l, c, h, p, d, u, f = null,
                    m = null;
                for (o = this.containers.length - 1; o >= 0; o--)
                    if (!t.contains(this.currentItem[0], this.containers[o].element[0]))
                        if (this._intersectsWith(this.containers[o].containerCache)) {
                            if (f && t.contains(this.containers[o].element[0], f.element[0])) continue;
                            f = this.containers[o], m = o
                        } else this.containers[o].containerCache.over && (this.containers[o]._trigger("out", n, this._uiHash(this)), this.containers[o].containerCache.over = 0);
                if (f)
                    if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", n, this._uiHash(this)), this.containers[m].containerCache.over = 1);
                    else {
                        for (s = 1e4, a = null, u = f.floating || i(this.currentItem), l = u ? "left" : "top", c = u ? "width" : "height", h = this.positionAbs[l] + this.offset.click[l], r = this.items.length - 1; r >= 0; r--) t.contains(this.containers[m].element[0], this.items[r].item[0]) && this.items[r].item[0] !== this.currentItem[0] && (!u || e(this.positionAbs.top + this.offset.click.top, this.items[r].top, this.items[r].height)) && (p = this.items[r].item.offset()[l], d = !1, Math.abs(p - h) > Math.abs(p + this.items[r][c] - h) && (d = !0, p += this.items[r][c]), s > Math.abs(p - h) && (s = Math.abs(p - h), a = this.items[r], this.direction = d ? "up" : "down"));
                        if (!a && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[m]) return;
                        a ? this._rearrange(n, a, null, !0) : this._rearrange(n, null, this.containers[m].element, !0), this._trigger("change", n, this._uiHash()), this.containers[m]._trigger("change", n, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", n, this._uiHash(this)), this.containers[m].containerCache.over = 1
                    }
            },
            _createHelper: function(e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, n, o = this.options;
                "parent" === o.containment && (o.containment = this.helper[0].parentNode), ("document" === o.containment || "window" === o.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === o.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === o.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(o.containment) || (e = t(o.containment)[0], i = t(o.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1,
                    o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    r = /(html|body)/i.test(o[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft()) * n
                }
            },
            _generatePosition: function(e) {
                var i, n, o = this.options,
                    r = e.pageX,
                    s = e.pageY,
                    a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(a[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), o.grid && (i = this.originalPageY + Math.round((s - this.originalPageY) / o.grid[1]) * o.grid[1], s = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - o.grid[1] : i + o.grid[1] : i, n = this.originalPageX + Math.round((r - this.originalPageX) / o.grid[0]) * o.grid[0], r = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - o.grid[0] : n + o.grid[0] : n)), {
                    top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                    left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var o = this.counter;
                this._delay(function() {
                    o === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function(t, e) {
                this.reverting = !1;
                var i, n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && n.push(function(t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                        this._trigger("update", t, this._uiHash())
                    }), this !== this.currentContainer && (e || (n.push(function(t) {
                        this._trigger("remove", t, this._uiHash())
                    }), n.push(function(t) {
                        return function(e) {
                            t._trigger("receive", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), n.push(function(t) {
                        return function(e) {
                            t._trigger("update", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || n.push(function(t) {
                    return function(e) {
                        t._trigger("deactivate", e, this._uiHash(this))
                    }
                }.call(this, this.containers[i])), this.containers[i].containerCache.over && (n.push(function(t) {
                    return function(e) {
                        t._trigger("out", e, this._uiHash(this))
                    }
                }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!e) {
                        for (this._trigger("beforeStop", t, this._uiHash()), i = 0; n.length > i; i++) n[i].call(this, t);
                        this._trigger("stop", t, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                    for (i = 0; n.length > i; i++) n[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
    }(jQuery), define("jqueryUI", ["jquery"], function() {}),
    function(t) {
        function e(t, e) {
            if (!(t.originalEvent.touches.length > 1)) {
                t.preventDefault();
                var i = t.originalEvent.changedTouches[0],
                    n = document.createEvent("MouseEvents");
                n.initMouseEvent(e, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(n)
            }
        }
        if (t.support.touch = "ontouchend" in document, t.support.touch) {
            var i, n = t.ui.mouse.prototype,
                o = n._mouseInit;
            n._touchStart = function(t) {
                var n = this;
                !i && n._mouseCapture(t.originalEvent.changedTouches[0]) && (i = !0, n._touchMoved = !1, e(t, "mouseover"), e(t, "mousemove"), e(t, "mousedown"))
            }, n._touchMove = function(t) {
                i && (this._touchMoved = !0, e(t, "mousemove"))
            }, n._touchEnd = function(t) {
                i && (e(t, "mouseup"), e(t, "mouseout"), this._touchMoved || e(t, "click"), i = !1)
            }, n._mouseInit = function() {
                var e = this;
                e.element.bind("touchstart", t.proxy(e, "_touchStart")).bind("touchmove", t.proxy(e, "_touchMove")).bind("touchend", t.proxy(e, "_touchEnd")), o.call(e)
            }
        }
    }(jQuery), define("jqueryTouchPunch", ["jqueryUI"], function() {}), define("player/utils/debugger", ["marionette", "jqueryTouchPunch"], function() {
        var t = function(t) {
            this.FONT_SIZE = 12, this.TEXT_COLOR = "black", this.WARNING_COLOR = "green", this.ERROR_COLOR = "red", this.OBJECT_KEY_COLOR = "#8080CC", this.OBJECT_TEXT_COLOR = "#1919A3", this.DEBUGGER_SIZE = {}, this.DEBUGGER_SIZE.maxHeight = 600, this.DEBUGGER_SIZE.maxWidth = 800, this.DEBUGGER_SIZE.minHeight = 150, this.DEBUGGER_SIZE.minWidth = 250, this.domElement = $("#" + t), this.debuggerArea = this.domElement.find("#debugTextHeaderAndTextArea"), this.bEnableDebugger = !1, this.consoleHolder = console, this.errorHolder = window.onerror, this.txtDebugger = this.domElement.find("#debugTextArea"), this.btnHide = this.domElement.find("#btnHideDebugger"), this.btnShow = this.domElement.find("#btnShowDebugger"), this.btnClear = this.domElement.find("#btnClearDebugger"), this.isDragging = !1, this.isMinimize = void 0
        };
        return t.prototype.enableDebugger = function(t, e, i) {
            this.isMinimize = i, this.bEnableDebugger = t, this.bEnableErrorLogger = e, this.strErrorLoggerData = "", this.overrideConsole(t, e), this.initDebuggerButtons()
        }, t.prototype.initDebuggerButtons = function() {
            var t, e = this,
                i = "none";
            this.btnClear.bind("click", this, function() {
                e.txtDebugger.html("")
            }), t = e.domElement.find("#debugTextHeaderAndTextArea"), this.btnShow.bind("click", this, function() {
                return e.isDragging === !0 ? !1 : (i = "block", t = e.domElement.find("#debugTextHeaderAndTextArea"), t.css("left", e.btnShow.css("left")), t.css("top", e.btnShow.css("top")), t.css("display", i), e.btnShow.css("display", "none"), void 0)
            }), this.btnHide.bind("click", this, function() {
                i = "none", t = e.domElement.find("#debugTextHeaderAndTextArea"), t.css("display", i), e.btnShow.css("left", t.css("left")), e.btnShow.css("top", t.css("top")), e.btnShow.css("display", "block")
            }), this.isMinimize === !0 && (t.css("display", i), e.btnShow.css("left", t.css("left")), e.btnShow.css("top", t.css("top")), e.btnShow.css("display", "block"))
        }, t.prototype.overrideConsole = function(t, e) {
            window.console = {}, t === !0 || e === !0 ? (console.warn = $.proxy(this.showWarning, this), console.log = $.proxy(this.consoleLog, this), window.onerror = $.proxy(this.errorLog, this), this.addResizer(this.debuggerArea), this.makeDraggable(this.debuggerArea)) : (window.console = this.consoleHolder, window.onerror = this.errorHolder), t === !0 && this.domElement.css("display", "block")
        }, t.prototype.consoleLog = function() {
            var t, e, i = "";
            for (t = 0; t < arguments.length; t += 1)
                if (_.isObject(arguments[t]) && _.isArray(arguments[t]) === !1)
                    for (e in arguments[t]) arguments[t].hasOwnProperty(e) && (i = i + "<I><B><font color='" + this.OBJECT_KEY_COLOR + "'>" + e + "</font></B></I>:<font color='" + this.OBJECT_TEXT_COLOR + "'>" + arguments[t][e] + "</font>   ");
                else _.isArray(arguments[t]) ? (i = i + "[ " + arguments[t] + " ] ", i = i + "> length:" + arguments[t].length) : i = i + arguments[t] + " ";
            this.txtDebugger.append("<font color='" + this.TEXT_COLOR + "'>" + i + "</font><br>"), this.strErrorLoggerData = this.strErrorLoggerData + "\n " + i, void 0 !== this.consoleHolder.log && this.consoleHolder.log.apply(this.consoleHolder, arguments), this.txtDebugger.scrollTop(this.txtDebugger.innerHeight())
        }, t.prototype.errorLog = function(t, e, i) {
            var n = t + " > " + e + ":" + i;
            this.txtDebugger.append("<font color='red'>" + n + "</font><br>"), this.strErrorLoggerData = this.strErrorLoggerData + "\n " + n, this.txtDebugger.scrollTop(this.txtDebugger.innerHeight())
        }, t.prototype.showWarning = function(t, e, i) {
            this.txtDebugger.append("<font color='" + this.WARNING_COLOR + "'>Warning: " + t + "</font><br>"), this.strErrorLoggerData = this.strErrorLoggerData + "\n " + t + " ::: " + e + " ::: " + i, this.consoleHolder.warn(t), this.txtDebugger.scrollTop(this.txtDebugger.innerHeight())
        }, t.prototype.addResizer = function(t) {
            var e, i = this;
            t.resizable({
                maxHeight: i.DEBUGGER_SIZE.maxHeight,
                maxWidth: i.DEBUGGER_SIZE.maxWidth,
                minHeight: i.DEBUGGER_SIZE.minHeight,
                minWidth: i.DEBUGGER_SIZE.minWidth
            }), e = this.domElement.find(".ui-resizable-handle"), e.removeClass(), e.addClass("resizerHandler")
        }, t.prototype.makeDraggable = function(t) {
            t.draggable({
                handle: "#objHeadaer",
                containment: "document"
            });
            var e = this;
            this.btnShow.draggable({
                containment: "document",
                drag: function() {
                    e.isDragging = !0
                },
                stop: _.debounce(function() {
                    e.isDragging = !1
                }, 100)
            })
        }, t.prototype.getErrorLogData = function() {
            return this.strErrorLoggerData
        }, t
    }), define("player/mplayer-initalizer", ["marionette", "player/controllers/router-helper", "player/utils/data-loader", "player/manager/popup-manager", "player/router", "player/constants/playerconst", "player/constants/errorconst"], function(t, e, i, n, o) {
        var r;
        return r = Backbone.Marionette.Controller.extend({
            PLAYER_DATA_INIT_COMPLETE: "playerDataInitComplete",
            DEFAULT_PLAYER_WIDTH: 800,
            DEFAULT_PLAYER_HEIGHT: 600,
            PRODUCT_CONFIG_PATH: "data/product-config.xml",
            DATA_TYPE: "xml",
            RETURN_TYPE: "json",
            CONTENT_TYPE: "application/xml",
            popupAnimObjects: void 0,
            popupTemplates: void 0,
            dataLoader: void 0,
            playerConfigData: void 0,
            productConfigData: void 0,
            activityConfigData: void 0,
            objRouter: void 0,
            Popup_Manager: void 0,
            totalRegion: void 0,
            tempRegionCount: void 0,
            delayTime: 50,
            playerContainerDiv: void 0,
            playerDiv: void 0,
            objProductConfig: void 0,
            bEditMode: !1,
            configInXml: void 0,
            dataForPlayer: void 0,
            constructor: function(t) {
                this.mPlayer = t, this.mPlayer.on(this.mPlayer.PLAYER_INITIALIZE_COMPLETE_EVENT, this.onPlayerInitlizeCompleteEvent, this), this.mPlayer.on("playerCommonTaskEvent", this.handlePlayerCommonTask, this)
            }
        }), r.prototype.start = function(t, e, i) {
            var n, o = String("#" + this.mPlayer.id);
            this.bEditMode = i, this.objProductConfig = t, this.playerContainerDiv = $(t.containerDiv), this.playerDiv = $(o, t.containerDiv), this.isCompactMode() === !0 ? this.getConfigNodeFromHtml() : void 0 === t.activityConfig ? this.loadData(this.objProductConfig.pathUpdater.resolvePath(t.configPath), this.DATA_TYPE, this.CONTENT_TYPE, this.RETURN_TYPE, this.handleProductConfigLoadSuccess, this.handleDataLoadFailed) : (n = this.objProductConfig.pathUpdater.resolvePath(t.activityConfig) + "?" + (new Date).getTime(), this.loadData(n, this.DATA_TYPE, this.CONTENT_TYPE, this.RETURN_TYPE, this.onMergedActConfigLoaded, this.handleDataLoadFailed))
        }, r.prototype.onMergedActConfigLoaded = function(t, e) {
            var i = e.dataLoader.SCOPE;
            i.activityConfigData = t, void 0 != window.LOCAL_RUN && 1 == LOCAL_RUN && (console.log("copy and config data as it is\n..........\n\n", '<script type="text/template" id="activityconfigjsondata"><div id="confignode" activity-config-src="" data-json=\'' + JSON.stringify(i.activityConfigData) + "'></script>"), console.log("\n............")), i.dataLoader.off(i.dataLoader.DATA_LOAD_SUCCESS), i.dataLoader.off(i.dataLoader.DATA_LOAD_FAILED), i.handlePlayerConfigLoadSuccess(t.playerSettings)
        }, r.prototype.isCompactMode = function() {
            return -1 !== $("body").html().search("activityconfigjsondata")
        }, r.prototype.getConfigNodeFromHtml = function() {
            var t, e = $("<div>" + $("body").html() + "</div>");
            e = $(e.find("[id=activityconfigjsondata]").html()), t = e.attr("data-json"), this.activityConfigData = $.parseJSON(t), this.handlePlayerConfigLoadSuccess(this.activityConfigData.playerSettings)
        }, r.prototype.loadPlayerConfig = function() {
            this.loadData(this.objProductConfig.pathUpdater.resolvePath(this.productConfigData.playerConfig.src), this.DATA_TYPE, this.CONTENT_TYPE, this.RETURN_TYPE, this.onPlayerConfigLoaderSucccess, this.handleDataLoadFailed)
        }, r.prototype.onPlayerConfigLoaderSucccess = function(t, e) {
            var i = e.dataLoader.SCOPE;
            i.handlePlayerConfigLoadSuccess(t)
        }, r.prototype.handleActivityConfigLoadSuccess = function(t) {
            this.activityConfigData = t, this.dataLoader.off(this.dataLoader.DATA_LOAD_SUCCESS), this.dataLoader.off(this.dataLoader.DATA_LOAD_FAILED)
        }, r.prototype.handlePlayerConfigLoadSuccess = function(t) {
            var e;
            this.playerConfigData = t, this.dataLoader && (this.dataLoader.off(this.dataLoader.DATA_LOAD_SUCCESS), this.dataLoader.off(this.dataLoader.DATA_LOAD_FAILED)), e = void 0 === this.playerConfigData.release ? !1 : "true" === this.playerConfigData.release ? !0 : !1, this.launchInDebugMode() === !0 ? (this.playerConfigData.debug.mode = "true", this.loadDebugger()) : e === !0 && this.overrideConsole(), this.loadUtilities()
        }, r.prototype.loadUtilities = function() {
            var t, e, i = [],
                n = this;
            void 0 !== this.activityConfigData.utilities ? (this.popupTemplates = this.activityConfigData.utilities.popupTemplate, t = this.popupTemplates.html.source, e = this.popupTemplates.animation, e = void 0 !== e ? e.source : void 0, (void 0 !== t || null !== t) && i.push("text!" + t), void 0 !== e && i.push("text!" + e), require(i, function(t, e) {
                e && (e = jQuery.parseJSON(e)), n.onUtilInitComplete(t, e)
            })) : this.onUtilInitComplete()
        }, r.prototype.onUtilInitComplete = function(t, e) {
            this.popupTemplates = t, void 0 !== t && -1 !== t.search("text/template") && (t = $("<div>" + this.popupTemplates + "</div>"), this.popupTemplates = t.find("[type='text/template']")), void 0 !== e && (this.popupAnimObjects = e), this.initalizePlayerAndRegions()
        }, r.prototype.overrideConsole = function() {
            window.console;
            console.log = function() {}
        }, r.prototype.loadDebugger = function() {
            var t = this;
            require(["player/utils/debugger"], function(e) {
                t.initializeDebugger(e)
            })
        }, r.prototype.initializeDebugger = function(t) {
            var e, i, n = new t("debuggerHolder");
            e = "true" === this.playerConfigData.debug.lunchInMinimizedMode ? !0 : !1, i = "true" === this.playerConfigData.debug.errorLogger ? !0 : !1, n.enableDebugger(this.launchInDebugMode(), i, e)
        }, r.prototype.launchInDebugMode = function() {
            var t, e = !1;
            return void 0 !== jQuery.url && (t = jQuery.url.param("debug")), e = void 0 === t ? "true" === this.playerConfigData.debug.mode ? !0 : !1 : "true" === t ? !0 : !1
        }, r.prototype.loadData = function(t, e, n, o, r, s) {
            var a = this;
            null !== this.dataLoader && (this.dataLoader = new i), this.dataLoader.on(this.dataLoader.DATA_LOAD_SUCCESS, r), this.dataLoader.on(this.dataLoader.DATA_LOAD_FAILED, s), this.dataLoader.load({
                url: t,
                dataType: e,
                contentType: n,
                returnType: o,
                scope: a
            })
        }, r.prototype.handleProductConfigLoadSuccess = function(t, e) {
            var i = e.dataLoader.SCOPE;
            i.productConfigData = t, void 0 !== i.productConfigData.playerConfig ? (void 0 === i.productConfigData.regions ? i.loadData(i.productConfigData.activityConfig.src, i.DATA_TYPE, i.CONTENT_TYPE, i.RETURN_TYPE, i.handleActivityConfigLoadSuccess, i.handleDataLoadFailed) : i.handleActivityConfigLoadSuccess(t.regions), void 0 === i.productConfigData.player ? i.loadPlayerConfig() : i.handlePlayerConfigLoadSuccess(i.productConfigData.player)) : i.loadData(i.productConfigData.activityConfig.src, i.DATA_TYPE, i.CONTENT_TYPE, i.RETURN_TYPE, i.onMergedActConfigLoaded, i.handleDataLoadFailed)
        }, r.prototype.initalizePlayerAndRegions = function() {
            var t, i, r, s = {},
                a = {};
            this.objRouter = new o(e), s.playerConfig = this.playerConfigData, s.activityConfig = this.activityConfigData, s.router = this.objRouter, s.popupTemplates = this.popupTemplates, this.Popup_Manager = n.getInstance(), this.Popup_Manager.setAnimationObjects(this.popupAnimObjects), void 0 !== this.playerConfigData.activityPath && this.setRootNameSpace(this.playerConfigData.activityPath), this.createDynamicRegions(), i = window.location.search.replace("?", ""), t = i.split("&"), $.each(t, function(t, e) {
                var i = e.split("=");
                a[i[0]] = i[1]
            }), s.queryData = a, s.target = this, this.bEditMode === !0 ? (this.dataForPlayer = s, r = this.objProductConfig.pathUpdater.resolvePath(this.objProductConfig.activityConfig) + "?" + (new Date).getTime(), this.loadData(r, this.DATA_TYPE, this.CONTENT_TYPE, this.DATA_TYPE, this.handleConfigLoadInXmlMode, this.handleDataLoadFailed)) : this.trigger(this.PLAYER_DATA_INIT_COMPLETE, s)
        }, r.prototype.handleConfigLoadInXmlMode = function(t, e) {
            var i = e.dataLoader.SCOPE;
            i.dataForPlayer.configInXmlFormat = t, i.dataLoader.off(i.dataLoader.DATA_LOAD_SUCCESS), i.dataLoader.off(i.dataLoader.DATA_LOAD_FAILED), i.trigger(i.PLAYER_DATA_INIT_COMPLETE, i.dataForPlayer)
        }, r.prototype.handlePlayerRegionsShow = function(t) {
            var e = "resize",
                i = navigator.userAgent,
                n = this;
            t && (this.tempRegionCount = this.tempRegionCount + 1), i.indexOf("iPad") > -1 && (e = "onorientationchange"), this.totalRegion === this.tempRegionCount && void 0 !== this.playerConfigData.size && this.playerConfigData.hasOwnProperty("size") && ("true" === this.playerConfigData.size.scale.isScalable ? (window.onorientationchange = function() {}, $(window).resize(function() {
                n.scaleMPlayer(n.playerConfigData.size, n)
            }), n.scaleMPlayer(n.playerConfigData.size, n)) : ($(window).resize(function() {
                n.updatePlayerSize(n.playerConfigData.size, n)
            }), n.updatePlayerSize(n.playerConfigData.size, n)))
        }, r.prototype.createDynamicRegions = function() {
            var t, e, i, n, t, o, r, s = this;
            for (void 0 === this.activityConfigData.regions && (this.activityConfigData.regions = {}, this.activityConfigData.regions.region = this.activityConfigData.region, delete this.activityConfigData.region), void 0 === this.activityConfigData.regions.region.length ? (o = [], o.push(this.activityConfigData.regions.region)) : o = this.activityConfigData.regions.region, (this.activityConfigData.regions.cache === !0 || "true" === this.activityConfigData.regions.cache) && (o = this.getCacheData(o), this.activityConfigData.regions.region = o), this.totalRegion = o.length, i = {}, t = this.totalRegion - 1; t >= 0; t -= 1) o[t].id = this.objProductConfig.prefixId + o[t].id, n = $("<div></div>").attr({
                id: o[t].id,
                "class": o[t].styleClass
            }), this.playerDiv.prepend(n), i[o[t].id] = "#" + o[t].id, ("true" === o[t].drag || o[t].drag === !0) && this.makeDraggable(n);
            r = s.mPlayer, s.objApplication ? (r = s.objApplication, s.objApplication.addRegions(i)) : s.mPlayer.addRegions(i), s.tempRegionCount = 0;
            for (e in i) i.hasOwnProperty(e) && r.getRegion(e).on("show", s.handlePlayerRegionsShow, s)
        }, r.prototype.getCacheData = function(t) {
            var e, i, n;
            for (i = Number(this.activityConfigData.regions.range), e = this.activityConfigData.regions.regionList.split(","), n = 0; n < e.length; n += 1) e[n] = e[n].trim(), t = this.getRegionNode(t, e[n], i);
            return t
        }, r.prototype.getRegionNode = function(t, e, i) {
            var n, o, r, s, a = 0,
                l = [];
            for (a = 0; a < t.length; a += 1)
                if (t[a].id === e) {
                    s = t[a], s.cache = !0, s.creationMode = "active", s.cacheLength = i, n = jQuery.extend(!0, {}, s);
                    break
                }
            if (void 0 !== n) {
                if (void 0 === n.activities.defaultLaunchId) n.activities.defaultLaunchID = n.activities.activity[0].id, o = 0;
                else
                    for (a = 0; a < n.activities.activity.length; a += 1)
                        if (n.activities.activity[0].id === n.activities.defaultLaunchID) {
                            o = a;
                            break
                        } for (a = 0; 2 * i >= a; a += 1) l.push(o + a);
                for (a = 1; a < l.length; a += 1) r = jQuery.extend(!0, {}, n), r.activities.defaultLaunchID = r.activities.activity[l[a]].id, r.id = r.id + "_" + a, r.creationMode = "inactive", t.splice(t.indexOf(s) + a, 0, r)
            }
            return t
        }, r.prototype.setRootNameSpace = function(t) {
            var e, i, n = 0;
            if (t.path)
                for (e = t.path, void 0 === e.length && (e = [e]), n = 0; n < e.length; n += 1) i = e[n], void 0 !== i.keyword && void 0 !== i.relativePath && (requirejs.s.contexts._.config.paths[i.keyword] = i.relativePath);
            else void 0 !== t.keyword && void 0 !== t.relativePath && (requirejs.s.contexts._.config.paths[t.keyword] = t.relativePath)
        }, r.prototype.makeDraggable = function(t) {
            t.draggable({
                containment: "document"
            })
        }, r.prototype.handleDataLoadFailed = function() {
            this.dataLoader.off(this.dataLoader.DATA_LOAD_SUCCESS), this.dataLoader.off(this.dataLoader.DATA_LOAD_FAILED)
        }, r.prototype.scaleMPlayer = _.debounce(function(t, e) {
            var i, n, o, r, s, a, l, c, h = 0,
                p = 0;
            i = 1, n = e.playerDiv, o = e.playerContainerDiv.width(), r = e.playerContainerDiv.height(), s = this.DEFAULT_PLAYER_WIDTH, a = this.DEFAULT_PLAYER_HEIGHT, t.hasOwnProperty("width") && (s = t.width), t.hasOwnProperty("height") && (a = t.height), i = s / a > o / r ? o / s : r / a, i > t.scale.maxScale && (i = t.scale.maxScale), i < t.scale.minScale && (i = t.scale.minScale), l = "scale(" + i + ")", c = {}, "center" === t.align.horizontal ? p = (o - n.width() * i) / 2 : "left" === t.align.horizontal && (p = 0), 0 > p && (p = 0), c.left = p + "px", "middle" === t.align.vertical ? h = (r - n.height() * i) / 2 : "top" === t.align.vertical && (h = 0), 0 > h && (h = 0), c.top = h + "px", c.transform = l, c["-ms-transform"] = l, c["-moz-transform"] = l, c["-webkit-transform"] = l, c["-o-transform"] = l, c["transform-origin"] = "0% 0%", c["-ms-transform-origin"] = "0% 0%", c["-moz-transform-origin"] = "0% 0%", c["-webkit-transform-origin"] = "0% 0%", c["-o-transform-origin"] = "0% 0%", $(n).css(c), e.updateNewScaledValue(i), e.Popup_Manager.setScreenInCenter(), e.setPreloaderInCenter(), e.playerDiv.show()
        }, 50), r.prototype.updatePlayerSize = _.debounce(function(t, e) {
            var i, n, o, r, s, a, l, c;
            i = this.DEFAULT_PLAYER_WIDTH, n = this.DEFAULT_PLAYER_HEIGHT, a = e.playerContainerDiv.width(), l = e.playerContainerDiv.height(), s = e.playerDiv, t && (t.hasOwnProperty("width") ? (i = parseInt(t.width, 10), isNaN(i) || 0 >= i ? s.css("width", "100%") : s.width(i)) : s.css("width", "100%"), t.hasOwnProperty("height") ? (n = parseInt(t.height, 10), isNaN(n) || 0 >= n ? s.css("height", "100%") : s.height(n)) : s.css("height", "100%")), c = {}, "center" === t.align.horizontal ? o = (a - s.width()) / 2 : "left" === t.align.horizontal && (o = 0), 0 > o && (o = 0), c.left = o + "px", "middle" === t.align.vertical ? r = (l - s.height()) / 2 : "top" === t.align.vertical && (r = 0), 0 > r && (r = 0), c.top = r + "px", s.css(c), e.playerDiv.show(), e.Popup_Manager.setScreenInCenter(), e.setPreloaderInCenter()
        }, 50), r.prototype.updateNewScaledValue = function(t) {
            t = Number(t).toFixed(2), this.mPlayer.getPlayerHelper().updatePlayerScaleValue(t)
        }, r.prototype.setPreloaderInCenter = function() {
            var t, e, i = $("#preloaderContent");
            i.hasClass("container") && i.removeClass("container"), t = (window.innerWidth - i.width()) / 2, e = (window.innerHeight - i.height()) / 2, i.css("left", t + "px"), i.css("top", e + "px")
        }, r.prototype.handlePlayerCommonTask = function(t) {
            var e = t.task;
            switch (e) {
                case "updatePlayerSizeEvent":
                    this.handlePlayerRegionsShow()
            }
        }, r.prototype.onPlayerInitlizeCompleteEvent = function() {
            this.handlePlayerRegionsShow(), this.mPlayer.off("playerInitlizeCompleteEvent"), this.launchPopup()
        }, r.prototype.launchPopup = function() {
            var t, e;
            e = this.mPlayer.getPlayerHelper().getRegionManager().getInlineTemplateData(), this.Popup_Manager.setBlockerDivRef(e.templatePopupBlocker), this.Popup_Manager.setPopupTemplateRef(e), void 0 !== jQuery.url.param("popupId") && (t = jQuery.url.param("popupId"), this.Popup_Manager.launchAsPopup(t, null, !0, this, "testinMain"))
        }, r.prototype.destroy = function() {
            this.mPlayer.mActivity.off("show"), this.mPlayer.mActivity.off("UPDATE_ACTIVITY_SIZE"), this.mPlayer.off("playerInitlizeCompleteEvent"), this.mPlayer.off("playerCommonTaskEvent")
        }, r
    }), define("player/controllers/path-updater", ["marionette", "player/events/eventsconst", "player/constants/errorconst"], function() {
        var t;
        return t = Backbone.Marionette.Controller.extend({
            rootPathDict: {},
            strDLORootPath: "",
            getValidatedPath: function(t, e) {
                var i, n, o = "";
                return void 0 !== t && void 0 !== this.rootPathDict[t] && (i = this.rootPathDict[t], void 0 !== e && e.length > 0 && (n = e.indexOf(i)), o = -1 === n ? i + "/" + e : e), o
            },
            getTemplatePath: function() {
                return "authoring/wrapper/" + this.strTemplatePath
            },
            getTemplateImagePath: function() {
                return "authoring/wrapper/selectedTemplates/templateImages/"
            },
            dloRootPath: function(t) {
                return void 0 !== t && (this.strDLORootPath = t), this.strDLORootPath
            },
            resolvePath: function(t) {
                var e = t;
                return -1 === e.indexOf(this.strDLORootPath) && (e = this.strDLORootPath + t), e
            },
            setRootPath: function(t, e) {
                var i, n;
                void 0 !== t && t.length > 0 && (this.rootPathDict || (this.rootPathDict = {}), void 0 !== e && e.length > 0 && (i = e.split("/"), i.pop(), n = i.join("/"), this.rootPathDict[t] = n))
            }
        })
    }), define("player/mplayer", ["marionette", "player/mplayer-helper", "player/mplayer-initalizer", "player/constants/playerconst", "jqueryUI", "player/controllers/path-updater"], function(t, e, i, n, o, r) {
        var s;
        return s = Backbone.Marionette.Layout.extend({
            objConfigData: void 0,
            objActivityConfigData: void 0,
            objPopupTemplates: void 0,
            objRouter: void 0,
            objActivityManager: void 0,
            objPlayerHelper: void 0,
            objPlayerInitalizer: void 0,
            objApplication: void 0,
            playerDiv: void 0,
            playerId: void 0,
            objPlayerData: void 0,
            bInEditMode: !1,
            playerInitializer: void 0,
            objPathUpdater: void 0,
            objConfigInXmlFormat: void 0,
            bStop: !1,
            objTincanHelperRef: void 0,
            PLAYER_INITIALIZE_COMPLETE_EVENT: "playerInitlizeCompleteEvent",
            PLAYER_INIT_COMPLETE: "playerInitComplete",
            BROADCAST_EVENT: "broadcastEvent",
            PLAYER_COMMON_EVENT: "managePlayerCommonRequest",
            EDITOR_EVNETS: "editorTaskEvent",
            initialize: function(t) {
                this.objPathUpdater = new r, this.objPlayerData = t, this.objPlayerData.pathUpdater = this.objPathUpdater, this.bInEditMode = "true" === this.objPlayerData.productNode.edit, this.playerDiv = t.containerDiv, this.setId(t.playerId), this.template = _.template("<div id='" + this.playerId + "' class='mPlayer'></div>")
            },
            onRender: function() {
                this.startPlayerInitalizer(this.objPlayerData)
            }
        }), s.prototype.stopPlayer = function() {
            return this.destroy()
        }, s.prototype.onPlayerStop = function(t) {
            this.objPlayerHelper.onPlayerStop(t)
        }, s.prototype.changeConfig = function(t) {
            this.objPlayerData.pathUpdater = this.objPathUpdater, this.objPlayerData.pathUpdater.dloRootPath(t.compData.loRootPath), this.objPlayerData.activityConfig = t.compData.configPath, this.startPlayerInitalizer(this.objPlayerData)
        }, s.prototype.start = function(t) {
            var i, o, r;
            if (this.bStop = !1, this.objActivityConfigData = t.activityConfig, r = this.objActivityConfigData.regions.region, this.objConfigData = t.playerConfig, this.objRouter = t.router, this.objConfigInXmlFormat = t.configInXmlFormat, this.objPopupTemplates = t.popupTemplates, r = _.isArray(r) === !1 ? [r] : r, r.length > 0)
                for (i = 0; i < r.length; i += 1) void 0 !== t.queryData && r[i].id === t.queryData.region && void 0 !== t.queryData.defaultAct && (r[i].activities.defaultLaunchID = t.queryData.defaultAct);
            if (this.objPlayerHelper = new e(this, this.objApplication), this.objPlayerHelper.initlize(), r.length > 0)
                for (i = 0; i < r.length; i += 1) o = !0, r[i].type === n.REGION_TYPE_HEADER && "false" === this.objConfigData.header.visible && (o = !1), r[i].type === n.REGION_TYPE_FOOTER && "false" === this.objConfigData.footer.visible && (o = !1), this.objPlayerHelper.showHideRegionById(r[i].id, o)
        }, s.prototype.getPathUpdater = function() {
            return this.objPathUpdater
        }, s.prototype.onPlayerInitlizeComplete = function(t) {
            t.target = this, this.trigger(t.type, t)
        }, s.prototype.onPlayerCreationComplete = function(t) {
            t.target = this, this.trigger(t.type, t)
        }, s.prototype.onPlayerUpdateComplete = function(t) {
            t.target = this, this.trigger(t.type, t)
        }, s.prototype.getPlayerHelper = function() {
            return this.objPlayerHelper
        }, s.prototype.editorPlayerInitComplete = function() {
            this.objPlayerHelper.objPropertyManager.editorPlayerInitComplete()
        }, s.prototype.onTinCanHelperInitialized = function(t) {
            this.objTincanHelperRef = t, this.trigger("tinCanHelperInitalized", this)
        }, s.prototype.broadcastEventHandler = function(t) {
            this.objPlayerHelper.broadcastEventHandler(t)
        }, s.prototype.handlePlayerEditorEvents = function(t) {
            this.bInEditMode === !0 && this.objPlayerHelper.handlePlayerEditorEvents(t)
        }, s.prototype.getPlayerConfig = function() {
            return this.objConfigData
        }, s.prototype.getActivityConfig = function() {
            return this.objActivityConfigData
        }, s.prototype.getPopupTemplatesData = function() {
            return this.objPopupTemplates
        }, s.prototype.startPlayerInitalizer = function(t) {
            var e = new i(this);
            this.playerInitializer = e, e.on(e.PLAYER_DATA_INIT_COMPLETE, this.onPlayerDataInitComplete, this), e.start(t, this.objApplication, this.bInEditMode)
        }, s.prototype.onPlayerDataInitComplete = function(t) {
            t.target.off(t.target.PLAYER_DATA_INIT_COMPLETE), this.start(t)
        }, s.prototype.onConfigLoadInXml = function() {
            return this.playerId
        }, s.prototype.getId = function() {
            return this.playerId
        }, s.prototype.setId = function(t) {
            this.playerId = t, this.id = this.playerId
        }, s.prototype.getRegion = function(t) {
            var e;
            return e = this.objApplication ? this.objApplication[t] : this[t]
        }, s.prototype.managePlayerCommonTask = function(t) {
            this.objPlayerHelper && this.objPlayerHelper.managePlayerCommonTask(t)
        }, s.prototype.handleOutsideCall = function(t) {
            this.objPlayerHelper.handleOutsideCall(t)
        }, s.prototype.receivePropertyManagerEvents = function(t) {
            this.objPlayerHelper.receivePropertyManagerEvents(t)
        }, s.prototype.setPlayerData = function(t, e) {
            this.objPlayerHelper.setPlayerData(t, e)
        }, s.prototype.destroy = function() {
            var t = this;
            return this.playerInitializer.destroy(), this.objPlayerHelper.destroy(), this.mHeader && this.mHeader.close(), _.filter(t.regions, function(e, i) {
                t[i].close()
            }), $("#" + this.playerId, this.$el).empty(), !0
        }, s
    }), define("player/player-app", ["marionette", "player/mplayer", "player/mplayer-helper", "player/mplayer-initalizer", "player/constants/playerconst", "jqueryUI"], function(t, e) {
        var i;
        return i = new Backbone.Marionette.Application({
            objConfigData: void 0,
            objActivityConfigData: void 0,
            objPopupTemplates: void 0,
            objPlayerInitalizer: void 0,
            arrProductConfig: void 0,
            objPlayerDict: void 0,
            playerIndex: 0,
            tinCanHelperRef: void 0,
            initalize: function() {}
        }), i.addInitializer(function() {
            this.objPlayerDict = {}, window.playersRef = {}, this.getMPlayer(this.arrProductConfig[this.playerIndex])
        }), i.getMPlayer = function(t) {
            var i, n, o = {};
            o.containerDiv = void 0 === t.containerDiv ? "#playerContainer" : t.containerDiv, o.activityConfig = t.src, o.prefixId = void 0 === t.prefixId ? "" : t.prefixId, o.productNode = t, o.mainApp = this, o.el = o.containerDiv, i = o.playerId = void 0 === t.playerId ? "mPlayer" : t.playerId, n = new e(o), this.objPlayerDict[i] = n, this.initPlayerEvents(this.arrProductConfig[this.playerIndex], this.objPlayerDict[i]), window.playersRef[i] = this.objPlayerDict[i], n.on(n.BROADCAST_EVENT, this.bubbleEvent, this), n.on(n.EDITOR_EVNETS, this.handlePlayerEditorEvents, this), n.on(n.PLAYER_COMMON_EVENT, this.managePlayerCommonRequest, this), n.on("propertyManagerUpdateEvent", this.receivePropertyManagerEvents, this), n.on(n.PLAYER_INITIALIZE_COMPLETE_EVENT, this.onPlayerCreationComplete, this), n.on("tinCanHelperInitalized", this.onTinCanHelperEvent, this), n.render()
        }, i.onTinCanHelperEvent = function(t) {
            this.tinCanHelperRef = t.objTincanHelperRef
        }, i.handlePlayerEditorEvents = function(t) {
            var e, i;
            switch (t.data.task) {
                case "openDLO":
                    i = this.getEditorPlayer(), $(i.playerDiv).hide(), i.on(i.PLAYER_INITIALIZE_COMPLETE_EVENT, this.onPlayerCreationComplete, this), i.changeConfig(t.data);
                    break;
                default:
                    for (e in this.objPlayerDict) this.objPlayerDict.hasOwnProperty(e) && this.objPlayerDict[e].handlePlayerEditorEvents(t)
            }
        }, i.getEditorPlayer = function() {
            var t, e;
            for (t in this.objPlayerDict)
                if (this.objPlayerDict.hasOwnProperty(t) && this.objPlayerDict[t].bInEditMode === !0) {
                    e = this.objPlayerDict[t];
                    break
                }
            return e
        }, i.bubbleEvent = function(t) {
            var e;
            for (e in this.objPlayerDict) this.objPlayerDict.hasOwnProperty(e) && void 0 !== this.objPlayerDict[e].getPlayerConfig() && this.objPlayerDict[e].broadcastEventHandler(t)
        }, i.managePlayerCommonRequest = function(t) {
            var e, i = void 0 === t.editorOnly ? !1 : t.editorOnly;
            for (e in this.objPlayerDict) this.objPlayerDict.hasOwnProperty(e) && (i === !0 && this.objPlayerDict[e].bInEditMode === !0 ? this.objPlayerDict[e].managePlayerCommonTask(t) : i === !1 && this.objPlayerDict[e].managePlayerCommonTask(t))
        }, i.receivePropertyManagerEvents = function(t) {
            var e;
            for (e in this.objPlayerDict) this.objPlayerDict.hasOwnProperty(e) && this.objPlayerDict[e].bInEditMode === !1 && this.objPlayerDict[e].receivePropertyManagerEvents(t)
        }, i.onPlayerCreationComplete = function(t) {
            t && (this.objPlayerDict[t.target.getId()].off(this.objPlayerDict[t.target.getId()].PLAYER_INITIALIZE_COMPLETE_EVENT), t.target.bInEditMode === !0 && ($(this.objPlayerDict[t.target.getId()].playerDiv).show(), this.objPlayerDict[t.target.getId()].editorPlayerInitComplete())), this.objPlayerDict[t.target.getId()].objPlayerHelper.setTinCanHelper(this.tinCanHelperRef), this.playerIndex = this.playerIndex + 1, void 0 !== this.arrProductConfig[this.playerIndex] && this.getMPlayer(this.arrProductConfig[this.playerIndex])
        }, i.handlePlayerBubbleEvents = function(t) {
            var e, i, n = t.customData.task;
            switch (n) {
                case "stopPlayer":
                    if (i = this.objPlayerDict[t.customData.playerToStop].stopPlayer(), i === !0) {
                        this.objPlayerDict[t.customData.playerToStop].bStop = !0, $(this.objPlayerDict[t.customData.playerToStop].playerDiv).hide();
                        for (e in this.objPlayerDict)
                            if (this.objPlayerDict.hasOwnProperty(e) && this.objPlayerDict[e].bInEditMode !== !0) {
                                this.objPlayerDict[e].onPlayerStop(t.customData.playerToStop);
                                break
                            }
                    }
                    break;
                default:
                    window.handleEditorPlayerEvent(t)
            }
        }, i.initPlayerEvents = function(t, e) {
            "true" === t.drag && this.makeDraggable(t.containerDiv), void 0 !== t.onEventBubble && e.on("playerBubbleEvent", this.handlePlayerBubbleEvents, this)
        }, i.makeDraggable = function(t) {
            $(t).draggable({
                containment: "document"
            })
        }, i.onPlayerInitlizeComplete = function(t) {
            t.target = this, this.trigger(t.type, t)
        }, i.getPlayerConfig = function() {
            return this.objConfigData
        }, i.getActivityConfig = function() {
            return this.objActivityConfigData
        }, i.getPopupTemplatesData = function() {
            return this.objPopupTemplates
        }, i.startPlayerInitalizer = function(t) {
            this.arrProductConfig = _.isArray(t) === !0 ? t : [t], this.start()
        }, i.onPlayerInitializeComplete = function() {}, i.onPlayerDataInitComplete = function(t) {
            this.start(t)
        }, i.destroy = function() {
            var t, e;
            for (e in this.objPlayerDict) this.objPlayerDict.hasOwnProperty(e) && (t = this.objPlayerDict[e], t.off("tinCanHelperInitalized"), t.off(t.PLAYER_INITIALIZE_COMPLETE_EVENT), t.off(t.BROADCAST_EVENT), t.off(t.PLAYER_COMMON_EVENT), t.off("propertyManagerUpdateEvent"));
            this.objPlayerDict = {}
        }, i
    }), jQuery.url = function() {
        var t = {},
            e = {},
            i = {
                url: window.location,
                strictMode: !1,
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            },
            n = function() {
                str = decodeURI(i.url);
                for (var t = i.parser[i.strictMode ? "strict" : "loose"].exec(str), e = {}, n = 14; n--;) e[i.key[n]] = t[n] || "";
                return e[i.q.name] = {}, e[i.key[12]].replace(i.q.parser, function(t, n, o) {
                    n && (e[i.q.name][n] = o)
                }), e
            },
            o = function(t) {
                return e.length || s(), "base" == t ? null !== e.port && "" !== e.port ? e.protocol + "://" + e.host + ":" + e.port + "/" : e.protocol + "://" + e.host + "/" : "" === e[t] ? null : e[t]
            },
            r = function(t) {
                return e.length || s(), null === e.queryKey[t] ? null : e.queryKey[t]
            },
            s = function() {
                e = n(), a()
            },
            a = function() {
                var i = e.path;
                t = [], t = 1 == e.path.length ? {} : ("/" == i.charAt(i.length - 1) ? i.substring(1, i.length - 1) : path = i.substring(1)).split("/")
            };
        return {
            setMode: function(t) {
                return strictMode = "strict" == t ? !0 : !1, this
            },
            setUrl: function(t) {
                return i.url = void 0 === t ? window.location : t, s(), this
            },
            segment: function(i) {
                return e.length || s(), void 0 === i ? t.length : "" === t[i] || void 0 === t[i] ? null : t[i]
            },
            attr: o,
            param: r
        }
    }(), define("jqueryURL", ["jquery"], function() {});
var Data_Loader, mPlayer, Popup_Manager, CONSOLE, pPath, PlayerApplication, dataLoader, ignoreProductConfig, objRequireConfigData = {
    baseUrl: reqBaseUrl,
    mhafbasepath: "hello",
    waitSeconds: 0,
    paths: {
        libs: basePath + "framework/libs",
        player: basePath + "framework/player",
        simPictor: basePath + "framework/pictor",
        jquery: basePath + "framework/libs/jquery/jquery-min",
        jqueryUI: basePath + "framework/libs/jquery/plugins/jquery-ui-custom-min",
        jqueryUIAccordion: basePath + "framework/libs/jquery/plugins/jquery-ui-accordion.min",
        jqueryTouchPunch: basePath + "framework/libs/jquery/plugins/jquery.ui.touch-punch.min",
        jqueryURL: basePath + "framework/libs/jquery/plugins/jquery.url",
        json2xml: basePath + "framework/libs/jquery/plugins/jquery.json2xml",
        xml2json: basePath + "framework/libs/jquery/plugins/jquery.xml2json",
        html2canvasRef: basePath + "framework/libs/html2canvas",
        printthisref: basePath + "framework/libs/print-this",
        html2canvassvgRef: basePath + "framework/libs/html2canvas.svg",
        printArea: basePath + "framework/libs/jquery/plugins/jquery.printarea",
        underscore: basePath + "framework/libs/underscore/underscore-min",
        backbone: basePath + "framework/libs/backbone/backbone-min",
        marionette: basePath + "framework/libs/backbone/backbone.marionette",
        text: basePath + "framework/libs/require/text",
        css: basePath + "framework/libs/require/css",
        image: basePath + "framework/libs/require/image",
        templates: basePath + "framework/player/templates",
        components: basePath + "framework/player/components",
        editorroot: basePath + "framework/player/editor",
        activity: "activity",
        eventsConst: basePath + "framework/player/events/eventsconst",
        frameworkRoot: basePath + "framework",
        utiljs: basePath + "framework/libs/utils",
        appInit: "app-initializer"
    },
    shim: {
        jqueryUI: {
            deps: ["jquery"]
        },
        jqueryURL: {
            deps: ["jquery"]
        },
        jqueryTouchPunch: {
            deps: ["jqueryUI"]
        },
        xml2json: {
            deps: ["jquery"]
        },
        json2xml: {
            deps: ["jquery"]
        },
        printArea: {
            deps: ["jquery"]
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        marionette: {
            deps: ["jquery", "underscore", "backbone"],
            exports: "Backbone.Marionette"
        }
    },
    deps: ["jquery", "underscore"]
};
require.config(objRequireConfigData), require(["player/player-app", "player/mplayer", "player/utils/data-loader", "player/manager/popup-manager", "jqueryURL"], function(t, e, i) {
    function n(t) {
        PlayerApplication.startPlayerInitalizer(t.activityConfig)
    }

    function o(t) {
        console.log("Error while loading product config!!! ", t)
    }

    function r(t) {
        var e = this,
            r = {}; - 1 !== $("body").html().search("activityconfigjsondata") ? (r.activityConfig = {}, r.activityConfig.src = "web/data/activity-config.xml", n(r)) : (null !== dataLoader && (dataLoader = new i), dataLoader.on(dataLoader.DATA_LOAD_SUCCESS, n), dataLoader.on(dataLoader.DATA_LOAD_FAILED, o), dataLoader.load({
            url: t,
            dataType: "xml",
            contentType: "application/xml",
            returnType: "json",
            scope: e
        }))
    }

    function s() {
        var t = configPath;
        return (void 0 === configPath || "" === configPath) && (t = "data/product-config.xml"), void 0 !== jQuery.url.param("product") && (t = jQuery.url.param("product") + ".xml"), t
    }

    function a() {
        var t = {
            activityConfig: {}
        };
        ignoreProductConfig && ignoreProductConfig === !0 ? (t.activityConfig.src = configPath, n(t)) : r(s())
    }
    _.templateSettings = {
        evaluate: /\{\{#(.+?)\}\}/g,
        interpolate: /\{\{([^#].*?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g
    }, PlayerApplication = t, mPlayer = e, dataLoader = new i, a()
}), define("player/main", function() {});