!function(chunks) {
    function __Activision_blizzard__(chunkId) {
        if (installedModules[chunkId]) return installedModules[chunkId].pear;
        var chunk = installedModules[chunkId] = {
            i: chunkId,
            l: !1,
            pear: {}
        };
        return chunks[chunkId].call(chunk.pear, chunk, chunk.pear, __Activision_blizzard__), 
        chunk.l = !0, chunk.pear;
    }
    var installedModules = {};
    __Activision_blizzard__.m = chunks, __Activision_blizzard__.c = installedModules, __Activision_blizzard__.d = function(pear, name, getter) {
        __Activision_blizzard__.o(pear, name) || Object.defineProperty(pear, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __Activision_blizzard__.n = function(chunk) {
        var getter = chunk && chunk.EP ? function() {
            return chunk.default;
        } : function() {
            return chunk;
        };
        return __Activision_blizzard__.d(getter, "a", getter), getter;
    }, __Activision_blizzard__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __Activision_blizzard__.p = "", __Activision_blizzard__(__Activision_blizzard__.s = 41);
}([ function(chunk, pear) {
    var global = chunk.pear = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = global);
}, function(chunk, pear, __Activision_blizzard__) {
    var anObject = __Activision_blizzard__(11), IE8_DOM_DEFINE = __Activision_blizzard__(28), toPrimitive = __Activision_blizzard__(16), dP = Object.defineProperty;
    pear.f = __Activision_blizzard__(2) ? Object.defineProperty : function(O, P, Attributes) {
        if (anObject(O), P = toPrimitive(P, !0), anObject(Attributes), IE8_DOM_DEFINE) try {
            return dP(O, P, Attributes);
        } catch (e) {}
        if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
        return "value" in Attributes && (O[P] = Attributes.value), O;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    chunk.pear = !__Activision_blizzard__(8)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
}, function(chunk, pear) {
    var hasOwnProperty = {}.hasOwnProperty;
    chunk.pear = function(it, key) {
        return hasOwnProperty.call(it, key);
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var IObject = __Activision_blizzard__(31), defined = __Activision_blizzard__(17);
    chunk.pear = function(it) {
        return IObject(defined(it));
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var dP = __Activision_blizzard__(1), createDesc = __Activision_blizzard__(13);
    chunk.pear = __Activision_blizzard__(2) ? function(object, key, value) {
        return dP.f(object, key, createDesc(1, value));
    } : function(object, key, value) {
        return object[key] = value, object;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var store = __Activision_blizzard__(20)("wks"), uid = __Activision_blizzard__(14), Symbol = __Activision_blizzard__(0).Symbol, USE_SYMBOL = "function" == typeof Symbol;
    (chunk.pear = function(name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
    }).store = store;
}, function(chunk, pear) {
    var core = chunk.pear = {
        version: "2.5.0"
    };
    "number" == typeof __e && (__e = core);
}, function(chunk, pear) {
    chunk.pear = function(exec) {
        try {
            return !!exec();
        } catch (e) {
            return !0;
        }
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var $keys = __Activision_blizzard__(30), enumBugKeys = __Activision_blizzard__(21);
    chunk.pear = Object.keys || function(O) {
        return $keys(O, enumBugKeys);
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var global = __Activision_blizzard__(0), core = __Activision_blizzard__(7), ctx = __Activision_blizzard__(46), hide = __Activision_blizzard__(5), $export = function(type, name, source) {
        var key, own, out, IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, pear = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = pear.prototype, target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {}).prototype;
        IS_GLOBAL && (source = name);
        for (key in source) (own = !IS_FORCED && target && void 0 !== target[key]) && key in pear || (out = own ? target[key] : source[key], 
        pear[key] = IS_GLOBAL && "function" != typeof target[key] ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
            var F = function(a, b, c) {
                if (this instanceof C) {
                    switch (arguments.length) {
                      case 0:
                        return new C();

                      case 1:
                        return new C(a);

                      case 2:
                        return new C(a, b);
                    }
                    return new C(a, b, c);
                }
                return C.apply(this, arguments);
            };
            return F.prototype = C.prototype, F;
        }(out) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out, IS_PROTO && ((pear.virtual || (pear.virtual = {}))[key] = out, 
        type & $export.R && expProto && !expProto[key] && hide(expProto, key, out)));
    };
    $export.F = 1, $export.G = 2, $export.S = 4, $export.P = 8, $export.B = 16, $export.W = 32, 
    $export.U = 64, $export.R = 128, chunk.pear = $export;
}, function(chunk, pear, __Activision_blizzard__) {
    var isObject = __Activision_blizzard__(12);
    chunk.pear = function(it) {
        if (!isObject(it)) throw TypeError(it + " is not an object!");
        return it;
    };
}, function(chunk, pear) {
    chunk.pear = function(it) {
        return "object" === typeof it ? null !== it : "function" === typeof it;
    };
}, function(chunk, pear) {
    chunk.pear = function(bitmap, value) {
        return {
            enumerable: !(1 & bitmap),
            configurable: !(2 & bitmap),
            writable: !(4 & bitmap),
            value: value
        };
    };
}, function(chunk, pear) {
    var id = 0, px = Math.random();
    chunk.pear = function(key) {
        return "Symbol(".concat(void 0 === key ? "" : key, ")_", (++id + px).toString(36));
    };
}, function(chunk, pear) {
    pear.f = {}.propertyIsEnumerable;
}, function(chunk, pear, __Activision_blizzard__) {
    var isObject = __Activision_blizzard__(12);
    chunk.pear = function(it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
        if ("function" == typeof (fn = it.valueOf) && !isObject(val = fn.call(it))) return val;
        if (!S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
    };
}, function(chunk, pear) {
    chunk.pear = function(it) {
        if (void 0 == it) throw TypeError("Can't call method on  " + it);
        return it;
    };
}, function(chunk, pear) {
    var ceil = Math.ceil, floor = Math.floor;
    chunk.pear = function(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var shared = __Activision_blizzard__(20)("keys"), uid = __Activision_blizzard__(14);
    chunk.pear = function(key) {
        return shared[key] || (shared[key] = uid(key));
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var global = __Activision_blizzard__(0), store = global["__core-js_shared__"] || (global["__core-js_shared__"] = {});
    chunk.pear = function(key) {
        return store[key] || (store[key] = {});
    };
}, function(chunk, pear) {
    chunk.pear = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function(chunk, pear) {
    pear.f = Object.getOwnPropertySymbols;
}, function(chunk, pear) {
    chunk.pear = !0;
}, function(chunk, pear) {
    chunk.pear = {};
}, function(chunk, pear, __Activision_blizzard__) {
    var def = __Activision_blizzard__(1).f, has = __Activision_blizzard__(3), TAG = __Activision_blizzard__(6)("toStringTag");
    chunk.pear = function(it, tag, stat) {
        it && !has(it = stat ? it : it.prototype, TAG) && def(it, TAG, {
            configurable: !0,
            value: tag
        });
    };
}, function(chunk, pear, __Activision_blizzard__) {
    pear.f = __Activision_blizzard__(6);
}, function(chunk, pear, __Activision_blizzard__) {
    var global = __Activision_blizzard__(0), core = __Activision_blizzard__(7), LIBRARY = __Activision_blizzard__(23), wksExt = __Activision_blizzard__(26), defineProperty = __Activision_blizzard__(1).f;
    chunk.pear = function(name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        "_" == name.charAt(0) || name in $Symbol || defineProperty($Symbol, name, {
            value: wksExt.f(name)
        });
    };
}, function(chunk, pear, __Activision_blizzard__) {
    chunk.pear = !__Activision_blizzard__(2) && !__Activision_blizzard__(8)(function() {
        return 7 != Object.defineProperty(__Activision_blizzard__(29)("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
}, function(chunk, pear, __Activision_blizzard__) {
    var isObject = __Activision_blizzard__(12), document = __Activision_blizzard__(0).document, is = isObject(document) && isObject(document.createElement);
    chunk.pear = function(it) {
        return is ? document.createElement(it) : {};
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var has = __Activision_blizzard__(3), toIObject = __Activision_blizzard__(4), arrayIndexOf = __Activision_blizzard__(49)(!1), IE_PROTO = __Activision_blizzard__(19)("IE_PROTO");
    chunk.pear = function(object, names) {
        var key, O = toIObject(object), i = 0, result = [];
        for (key in O) key != IE_PROTO && has(O, key) && result.push(key);
        for (;names.length > i; ) has(O, key = names[i++]) && (~arrayIndexOf(result, key) || result.push(key));
        return result;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var cof = __Activision_blizzard__(32);
    chunk.pear = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
        return "String" == cof(it) ? it.split("") : Object(it);
    };
}, function(chunk, pear) {
    var toString = {}.toString;
    chunk.pear = function(it) {
        return toString.call(it).slice(8, -1);
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var defined = __Activision_blizzard__(17);
    chunk.pear = function(it) {
        return Object(defined(it));
    };
}, function(chunk, pear, __Activision_blizzard__) {
    !function(global, factory) {
        factory(pear);
    }(0, function(pear) {
        "use strict";
        function ascendingComparator(f) {
            return function(d, x) {
                return ascending(f(d), x);
            };
        }
        function pair(a, b) {
            return [ a, b ];
        }
        function tickIncrement(start, stop, count) {
            var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
            return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
        }
        function tickStep(start, stop, count) {
            var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
            return error >= e10 ? step1 *= 10 : error >= e5 ? step1 *= 5 : error >= e2 && (step1 *= 2), 
            stop < start ? -step1 : step1;
        }
        function length(d) {
            return d.length;
        }
        function translateX(x) {
            return "translate(" + (x + .5) + ",0)";
        }
        function translateY(y) {
            return "translate(0," + (y + .5) + ")";
        }
        function number$1(scale) {
            return function(d) {
                return +scale(d);
            };
        }
        function center(scale) {
            var offset = Math.max(0, scale.bandwidth() - 1) / 2;
            return scale.round() && (offset = Math.round(offset)), function(d) {
                return +scale(d) + offset;
            };
        }
        function entering() {
            return !this.__axis;
        }
        function axis(orient, scale) {
            function axis(context) {
                var values = null == tickValues ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format = null == tickFormat ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$1 : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + .5, range1 = +range[range.length - 1] + .5, position = (scale.bandwidth ? center : number$1)(scale.copy()), selection = context.selection ? context.selection() : context, path = selection.selectAll(".domain").data([ null ]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
                path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), 
                tick = tick.merge(tickEnter), line = line.merge(tickEnter.append("line").attr("stroke", "#000").attr(x + "2", k * tickSizeInner)), 
                text = text.merge(tickEnter.append("text").attr("fill", "#000").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em")), 
                context !== selection && (path = path.transition(context), tick = tick.transition(context), 
                line = line.transition(context), text = text.transition(context), tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
                    return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform");
                }), tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
                    var p = this.parentNode.__axis;
                    return transform(p && isFinite(p = p(d)) ? p : position(d));
                })), tickExit.remove(), path.attr("d", orient === left || orient == right ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter), 
                tick.attr("opacity", 1).attr("transform", function(d) {
                    return transform(position(d));
                }), line.attr(x + "2", k * tickSizeInner), text.attr(x, k * spacing).text(format), 
                selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle"), 
                selection.each(function() {
                    this.__axis = position;
                });
            }
            var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform = orient === top || orient === bottom ? translateX : translateY;
            return axis.scale = function(_) {
                return arguments.length ? (scale = _, axis) : scale;
            }, axis.ticks = function() {
                return tickArguments = slice$1.call(arguments), axis;
            }, axis.tickArguments = function(_) {
                return arguments.length ? (tickArguments = null == _ ? [] : slice$1.call(_), axis) : tickArguments.slice();
            }, axis.tickValues = function(_) {
                return arguments.length ? (tickValues = null == _ ? null : slice$1.call(_), axis) : tickValues && tickValues.slice();
            }, axis.tickFormat = function(_) {
                return arguments.length ? (tickFormat = _, axis) : tickFormat;
            }, axis.tickSize = function(_) {
                return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
            }, axis.tickSizeInner = function(_) {
                return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
            }, axis.tickSizeOuter = function(_) {
                return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
            }, axis.tickPadding = function(_) {
                return arguments.length ? (tickPadding = +_, axis) : tickPadding;
            }, axis;
        }
        function axisTop(scale) {
            return axis(top, scale);
        }
        function axisRight(scale) {
            return axis(right, scale);
        }
        function axisBottom(scale) {
            return axis(bottom, scale);
        }
        function axisLeft(scale) {
            return axis(left, scale);
        }
        function dispatch() {
            for (var t, i = 0, n = arguments.length, _ = {}; i < n; ++i) {
                if (!(t = arguments[i] + "") || t in _) throw new Error("illegal type: " + t);
                _[t] = [];
            }
            return new Dispatch(_);
        }
        function Dispatch(_) {
            this._ = _;
        }
        function parseTypenames(typenames, types) {
            return typenames.trim().split(/^|\s+/).map(function(t) {
                var name = "", i = t.indexOf(".");
                if (i >= 0 && (name = t.slice(i + 1), t = t.slice(0, i)), t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: name
                };
            });
        }
        function get(type, name) {
            for (var c, i = 0, n = type.length; i < n; ++i) if ((c = type[i]).name === name) return c.value;
        }
        function set(type, name, callback) {
            for (var i = 0, n = type.length; i < n; ++i) if (type[i].name === name) {
                type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
                break;
            }
            return null != callback && type.push({
                name: name,
                value: callback
            }), type;
        }
        function creatorInherit(name) {
            return function() {
                var document = this.ownerDocument, uri = this.namespaceURI;
                return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
            };
        }
        function creatorFixed(fullname) {
            return function() {
                return this.ownerDocument.createElementNS(fullname.space, fullname.local);
            };
        }
        function local$1() {
            return new Local();
        }
        function Local() {
            this._ = "@" + (++nextId).toString(36);
        }
        function filterContextListener(listener, index, group) {
            return listener = contextListener(listener, index, group), function(event) {
                var related = event.relatedTarget;
                related && (related === this || 8 & related.compareDocumentPosition(this)) || listener.call(this, event);
            };
        }
        function contextListener(listener, index, group) {
            return function(event1) {
                var event0 = pear.event;
                pear.event = event1;
                try {
                    listener.call(this, this.__data__, index, group);
                } finally {
                    pear.event = event0;
                }
            };
        }
        function parseTypenames$1(typenames) {
            return typenames.trim().split(/^|\s+/).map(function(t) {
                var name = "", i = t.indexOf(".");
                return i >= 0 && (name = t.slice(i + 1), t = t.slice(0, i)), {
                    type: t,
                    name: name
                };
            });
        }
        function onRemove(typename) {
            return function() {
                var on = this.__on;
                if (on) {
                    for (var o, j = 0, i = -1, m = on.length; j < m; ++j) o = on[j], typename.type && o.type !== typename.type || o.name !== typename.name ? on[++i] = o : this.removeEventListener(o.type, o.listener, o.capture);
                    ++i ? on.length = i : delete this.__on;
                }
            };
        }
        function onAdd(typename, value, capture) {
            var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
            return function(d, i, group) {
                var o, on = this.__on, listener = wrap(value, i, group);
                if (on) for (var j = 0, m = on.length; j < m; ++j) if ((o = on[j]).type === typename.type && o.name === typename.name) return this.removeEventListener(o.type, o.listener, o.capture), 
                this.addEventListener(o.type, o.listener = listener, o.capture = capture), void (o.value = value);
                this.addEventListener(typename.type, listener, capture), o = {
                    type: typename.type,
                    name: typename.name,
                    value: value,
                    listener: listener,
                    capture: capture
                }, on ? on.push(o) : this.__on = [ o ];
            };
        }
        function customEvent(event1, listener, that, args) {
            var event0 = pear.event;
            event1.sourceEvent = pear.event, pear.event = event1;
            try {
                return listener.apply(that, args);
            } finally {
                pear.event = event0;
            }
        }
        function none() {}
        function empty$1() {
            return [];
        }
        function EnterNode(parent, datum) {
            this.ownerDocument = parent.ownerDocument, this.namespaceURI = parent.namespaceURI, 
            this._next = null, this._parent = parent, this.__data__ = datum;
        }
        function bindIndex(parent, group, enter, update, exit, data) {
            for (var node, i = 0, groupLength = group.length, dataLength = data.length; i < dataLength; ++i) (node = group[i]) ? (node.__data__ = data[i], 
            update[i] = node) : enter[i] = new EnterNode(parent, data[i]);
            for (;i < groupLength; ++i) (node = group[i]) && (exit[i] = node);
        }
        function bindKey(parent, group, enter, update, exit, data, key) {
            var i, node, keyValue, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength);
            for (i = 0; i < groupLength; ++i) (node = group[i]) && (keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group), 
            keyValue in nodeByKeyValue ? exit[i] = node : nodeByKeyValue[keyValue] = node);
            for (i = 0; i < dataLength; ++i) keyValue = keyPrefix + key.call(parent, data[i], i, data), 
            (node = nodeByKeyValue[keyValue]) ? (update[i] = node, node.__data__ = data[i], 
            nodeByKeyValue[keyValue] = null) : enter[i] = new EnterNode(parent, data[i]);
            for (i = 0; i < groupLength; ++i) (node = group[i]) && nodeByKeyValue[keyValues[i]] === node && (exit[i] = node);
        }
        function ascending$1(a, b) {
            return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
        }
        function attrRemove(name) {
            return function() {
                this.removeAttribute(name);
            };
        }
        function attrRemoveNS(fullname) {
            return function() {
                this.removeAttributeNS(fullname.space, fullname.local);
            };
        }
        function attrConstant(name, value) {
            return function() {
                this.setAttribute(name, value);
            };
        }
        function attrConstantNS(fullname, value) {
            return function() {
                this.setAttributeNS(fullname.space, fullname.local, value);
            };
        }
        function attrFunction(name, value) {
            return function() {
                var v = value.apply(this, arguments);
                null == v ? this.removeAttribute(name) : this.setAttribute(name, v);
            };
        }
        function attrFunctionNS(fullname, value) {
            return function() {
                var v = value.apply(this, arguments);
                null == v ? this.removeAttributeNS(fullname.space, fullname.local) : this.setAttributeNS(fullname.space, fullname.local, v);
            };
        }
        function styleRemove(name) {
            return function() {
                this.style.removeProperty(name);
            };
        }
        function styleConstant(name, value, priority) {
            return function() {
                this.style.setProperty(name, value, priority);
            };
        }
        function styleFunction(name, value, priority) {
            return function() {
                var v = value.apply(this, arguments);
                null == v ? this.style.removeProperty(name) : this.style.setProperty(name, v, priority);
            };
        }
        function styleValue(node, name) {
            return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
        }
        function propertyRemove(name) {
            return function() {
                delete this[name];
            };
        }
        function propertyConstant(name, value) {
            return function() {
                this[name] = value;
            };
        }
        function propertyFunction(name, value) {
            return function() {
                var v = value.apply(this, arguments);
                null == v ? delete this[name] : this[name] = v;
            };
        }
        function classArray(string) {
            return string.trim().split(/^|\s+/);
        }
        function classList(node) {
            return node.classList || new ClassList(node);
        }
        function ClassList(node) {
            this._node = node, this._names = classArray(node.getAttribute("class") || "");
        }
        function classedAdd(node, names) {
            for (var list = classList(node), i = -1, n = names.length; ++i < n; ) list.add(names[i]);
        }
        function classedRemove(node, names) {
            for (var list = classList(node), i = -1, n = names.length; ++i < n; ) list.remove(names[i]);
        }
        function classedTrue(names) {
            return function() {
                classedAdd(this, names);
            };
        }
        function classedFalse(names) {
            return function() {
                classedRemove(this, names);
            };
        }
        function classedFunction(names, value) {
            return function() {
                (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
            };
        }
        function textRemove() {
            this.textContent = "";
        }
        function textConstant(value) {
            return function() {
                this.textContent = value;
            };
        }
        function textFunction(value) {
            return function() {
                var v = value.apply(this, arguments);
                this.textContent = null == v ? "" : v;
            };
        }
        function htmlRemove() {
            this.innerHTML = "";
        }
        function htmlConstant(value) {
            return function() {
                this.innerHTML = value;
            };
        }
        function htmlFunction(value) {
            return function() {
                var v = value.apply(this, arguments);
                this.innerHTML = null == v ? "" : v;
            };
        }
        function raise() {
            this.nextSibling && this.parentNode.appendChild(this);
        }
        function lower() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }
        function constantNull() {
            return null;
        }
        function remove() {
            var parent = this.parentNode;
            parent && parent.removeChild(this);
        }
        function dispatchEvent(node, type, params) {
            var window = defaultView(node), event = window.CustomEvent;
            "function" === typeof event ? event = new event(type, params) : (event = window.document.createEvent("Event"), 
            params ? (event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail) : event.initEvent(type, !1, !1)), 
            node.dispatchEvent(event);
        }
        function dispatchConstant(type, params) {
            return function() {
                return dispatchEvent(this, type, params);
            };
        }
        function dispatchFunction(type, params) {
            return function() {
                return dispatchEvent(this, type, params.apply(this, arguments));
            };
        }
        function Selection(groups, parents) {
            this._groups = groups, this._parents = parents;
        }
        function selection() {
            return new Selection([ [ document.documentElement ] ], root);
        }
        function nopropagation() {
            pear.event.stopImmediatePropagation();
        }
        function yesdrag(view, noclick) {
            var root = view.document.documentElement, selection$$1 = select(view).on("dragstart.drag", null);
            noclick && (selection$$1.on("click.drag", noevent, !0), setTimeout(function() {
                selection$$1.on("click.drag", null);
            }, 0)), "onselectstart" in root ? selection$$1.on("selectstart.drag", null) : (root.style.MozUserSelect = root.__noselect, 
            delete root.__noselect);
        }
        function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
            this.target = target, this.type = type, this.subject = subject, this.identifier = id, 
            this.active = active, this.x = x, this.y = y, this.dx = dx, this.dy = dy, this._ = dispatch;
        }
        function defaultFilter$1() {
            return !pear.event.button;
        }
        function defaultContainer() {
            return this.parentNode;
        }
        function defaultSubject(d) {
            return null == d ? {
                x: pear.event.x,
                y: pear.event.y
            } : d;
        }
        function touchable() {
            return "ontouchstart" in this;
        }
        function extend(parent, definition) {
            var prototype = Object.create(parent.prototype);
            for (var key in definition) prototype[key] = definition[key];
            return prototype;
        }
        function Color() {}
        function color(format) {
            var m;
            return format = (format + "").trim().toLowerCase(), (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), 
            new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | 240 & m, (15 & m) << 4 | 15 & m, 1)) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(255 * m[1] / 100, 255 * m[2] / 100, 255 * m[3] / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(255 * m[1] / 100, 255 * m[2] / 100, 255 * m[3] / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : "transparent" === format ? new Rgb(NaN, NaN, NaN, 0) : null;
        }
        function rgbn(n) {
            return new Rgb(n >> 16 & 255, n >> 8 & 255, 255 & n, 1);
        }
        function rgba(r, g, b, a) {
            return a <= 0 && (r = g = b = NaN), new Rgb(r, g, b, a);
        }
        function rgbConvert(o) {
            return o instanceof Color || (o = color(o)), o ? (o = o.rgb(), new Rgb(o.r, o.g, o.b, o.opacity)) : new Rgb();
        }
        function rgb(r, g, b, opacity) {
            return 1 === arguments.length ? rgbConvert(r) : new Rgb(r, g, b, null == opacity ? 1 : opacity);
        }
        function Rgb(r, g, b, opacity) {
            this.r = +r, this.g = +g, this.b = +b, this.opacity = +opacity;
        }
        function hsla(h, s, l, a) {
            return a <= 0 ? h = s = l = NaN : l <= 0 || l >= 1 ? h = s = NaN : s <= 0 && (h = NaN), 
            new Hsl(h, s, l, a);
        }
        function hslConvert(o) {
            if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
            if (o instanceof Color || (o = color(o)), !o) return new Hsl();
            if (o instanceof Hsl) return o;
            o = o.rgb();
            var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
            return s ? (h = r === max ? (g - b) / s + 6 * (g < b) : g === max ? (b - r) / s + 2 : (r - g) / s + 4, 
            s /= l < .5 ? max + min : 2 - max - min, h *= 60) : s = l > 0 && l < 1 ? 0 : h, 
            new Hsl(h, s, l, o.opacity);
        }
        function hsl(h, s, l, opacity) {
            return 1 === arguments.length ? hslConvert(h) : new Hsl(h, s, l, null == opacity ? 1 : opacity);
        }
        function Hsl(h, s, l, opacity) {
            this.h = +h, this.s = +s, this.l = +l, this.opacity = +opacity;
        }
        function hsl2rgb(h, m1, m2) {
            return 255 * (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1);
        }
        function labConvert(o) {
            if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
            if (o instanceof Hcl) {
                var h = o.h * deg2rad;
                return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
            }
            o instanceof Rgb || (o = rgbConvert(o));
            var b = rgb2xyz(o.r), a = rgb2xyz(o.g), l = rgb2xyz(o.b), x = xyz2lab((.4124564 * b + .3575761 * a + .1804375 * l) / Xn), y = xyz2lab((.2126729 * b + .7151522 * a + .072175 * l) / Yn);
            return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - xyz2lab((.0193339 * b + .119192 * a + .9503041 * l) / Zn)), o.opacity);
        }
        function lab(l, a, b, opacity) {
            return 1 === arguments.length ? labConvert(l) : new Lab(l, a, b, null == opacity ? 1 : opacity);
        }
        function Lab(l, a, b, opacity) {
            this.l = +l, this.a = +a, this.b = +b, this.opacity = +opacity;
        }
        function xyz2lab(t) {
            return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
        }
        function lab2xyz(t) {
            return t > t1 ? t * t * t : t2 * (t - t0);
        }
        function xyz2rgb(x) {
            return 255 * (x <= .0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - .055);
        }
        function rgb2xyz(x) {
            return (x /= 255) <= .04045 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4);
        }
        function hclConvert(o) {
            if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
            o instanceof Lab || (o = labConvert(o));
            var h = Math.atan2(o.b, o.a) * rad2deg;
            return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
        }
        function hcl(h, c, l, opacity) {
            return 1 === arguments.length ? hclConvert(h) : new Hcl(h, c, l, null == opacity ? 1 : opacity);
        }
        function Hcl(h, c, l, opacity) {
            this.h = +h, this.c = +c, this.l = +l, this.opacity = +opacity;
        }
        function cubehelixConvert(o) {
            if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
            o instanceof Rgb || (o = rgbConvert(o));
            var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
            return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
        }
        function cubehelix(h, s, l, opacity) {
            return 1 === arguments.length ? cubehelixConvert(h) : new Cubehelix(h, s, l, null == opacity ? 1 : opacity);
        }
        function Cubehelix(h, s, l, opacity) {
            this.h = +h, this.s = +s, this.l = +l, this.opacity = +opacity;
        }
        function basis(t1, v0, v1, v2, v3) {
            var t2 = t1 * t1, t3 = t2 * t1;
            return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
        }
        function linear(a, d) {
            return function(t) {
                return a + t * d;
            };
        }
        function exponential(a, b, y) {
            return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
                return Math.pow(a + t * b, y);
            };
        }
        function hue(a, b) {
            var d = b - a;
            return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$3(isNaN(a) ? b : a);
        }
        function gamma(y) {
            return 1 === (y = +y) ? nogamma : function(a, b) {
                return b - a ? exponential(a, b, y) : constant$3(isNaN(a) ? b : a);
            };
        }
        function nogamma(a, b) {
            var d = b - a;
            return d ? linear(a, d) : constant$3(isNaN(a) ? b : a);
        }
        function rgbSpline(spline) {
            return function(colors) {
                var i, color$$1, n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n);
                for (i = 0; i < n; ++i) color$$1 = rgb(colors[i]), r[i] = color$$1.r || 0, g[i] = color$$1.g || 0, 
                b[i] = color$$1.b || 0;
                return r = spline(r), g = spline(g), b = spline(b), color$$1.opacity = 1, function(t) {
                    return color$$1.r = r(t), color$$1.g = g(t), color$$1.b = b(t), color$$1 + "";
                };
            };
        }
        function zero(b) {
            return function() {
                return b;
            };
        }
        function one(b) {
            return function(t) {
                return b(t) + "";
            };
        }
        function parseCss(value) {
            return "none" === value ? identity$2 : (cssNode || (cssNode = document.createElement("DIV"), 
            cssRoot = document.documentElement, cssView = document.defaultView), cssNode.style.transform = value, 
            value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform"), 
            cssRoot.removeChild(cssNode), value = value.slice(7, -1).split(","), decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]));
        }
        function parseSvg(value) {
            return null == value ? identity$2 : (svgNode || (svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g")), 
            svgNode.setAttribute("transform", value), (value = svgNode.transform.baseVal.consolidate()) ? (value = value.matrix, 
            decompose(value.a, value.b, value.c, value.d, value.e, value.f)) : identity$2);
        }
        function interpolateTransform(parse, pxComma, pxParen, degParen) {
            function pop(s) {
                return s.length ? s.pop() + " " : "";
            }
            function translate(xa, ya, xb, yb, s, q) {
                if (xa !== xb || ya !== yb) {
                    var i = s.push("translate(", null, pxComma, null, pxParen);
                    q.push({
                        i: i - 4,
                        x: reinterpolate(xa, xb)
                    }, {
                        i: i - 2,
                        x: reinterpolate(ya, yb)
                    });
                } else (xb || yb) && s.push("translate(" + xb + pxComma + yb + pxParen);
            }
            function rotate(a, b, s, q) {
                a !== b ? (a - b > 180 ? b += 360 : b - a > 180 && (a += 360), q.push({
                    i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                    x: reinterpolate(a, b)
                })) : b && s.push(pop(s) + "rotate(" + b + degParen);
            }
            function skewX(a, b, s, q) {
                a !== b ? q.push({
                    i: s.push(pop(s) + "skewX(", null, degParen) - 2,
                    x: reinterpolate(a, b)
                }) : b && s.push(pop(s) + "skewX(" + b + degParen);
            }
            function scale(xa, ya, xb, yb, s, q) {
                if (xa !== xb || ya !== yb) {
                    var i = s.push(pop(s) + "scale(", null, ",", null, ")");
                    q.push({
                        i: i - 4,
                        x: reinterpolate(xa, xb)
                    }, {
                        i: i - 2,
                        x: reinterpolate(ya, yb)
                    });
                } else 1 === xb && 1 === yb || s.push(pop(s) + "scale(" + xb + "," + yb + ")");
            }
            return function(a, b) {
                var s = [], q = [];
                return a = parse(a), b = parse(b), translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q), 
                rotate(a.rotate, b.rotate, s, q), skewX(a.skewX, b.skewX, s, q), scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q), 
                a = b = null, function(t) {
                    for (var o, i = -1, n = q.length; ++i < n; ) s[(o = q[i]).i] = o.x(t);
                    return s.join("");
                };
            };
        }
        function cosh(x) {
            return ((x = Math.exp(x)) + 1 / x) / 2;
        }
        function sinh(x) {
            return ((x = Math.exp(x)) - 1 / x) / 2;
        }
        function tanh(x) {
            return ((x = Math.exp(2 * x)) - 1) / (x + 1);
        }
        function hsl$1(hue$$1) {
            return function(start, end) {
                var h = hue$$1((start = hsl(start)).h, (end = hsl(end)).h), s = nogamma(start.s, end.s), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
                return function(t) {
                    return start.h = h(t), start.s = s(t), start.l = l(t), start.opacity = opacity(t), 
                    start + "";
                };
            };
        }
        function lab$1(start, end) {
            var l = nogamma((start = lab(start)).l, (end = lab(end)).l), a = nogamma(start.a, end.a), b = nogamma(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
            return function(t) {
                return start.l = l(t), start.a = a(t), start.b = b(t), start.opacity = opacity(t), 
                start + "";
            };
        }
        function hcl$1(hue$$1) {
            return function(start, end) {
                var h = hue$$1((start = hcl(start)).h, (end = hcl(end)).h), c = nogamma(start.c, end.c), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
                return function(t) {
                    return start.h = h(t), start.c = c(t), start.l = l(t), start.opacity = opacity(t), 
                    start + "";
                };
            };
        }
        function cubehelix$1(hue$$1) {
            return function cubehelixGamma(y) {
                function cubehelix$$1(start, end) {
                    var h = hue$$1((start = cubehelix(start)).h, (end = cubehelix(end)).h), s = nogamma(start.s, end.s), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
                    return function(t) {
                        return start.h = h(t), start.s = s(t), start.l = l(Math.pow(t, y)), start.opacity = opacity(t), 
                        start + "";
                    };
                }
                return y = +y, cubehelix$$1.gamma = cubehelixGamma, cubehelix$$1;
            }(1);
        }
        function now() {
            return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
        }
        function clearNow() {
            clockNow = 0;
        }
        function Timer() {
            this._call = this._time = this._next = null;
        }
        function timer(callback, delay, time) {
            var t = new Timer();
            return t.restart(callback, delay, time), t;
        }
        function timerFlush() {
            now(), ++frame;
            for (var e, t = taskHead; t; ) (e = clockNow - t._time) >= 0 && t._call.call(null, e), 
            t = t._next;
            --frame;
        }
        function wake() {
            clockNow = (clockLast = clock.now()) + clockSkew, frame = timeout = 0;
            try {
                timerFlush();
            } finally {
                frame = 0, nap(), clockNow = 0;
            }
        }
        function poke() {
            var now = clock.now(), delay = now - clockLast;
            delay > pokeDelay && (clockSkew -= delay, clockLast = now);
        }
        function nap() {
            for (var t0, t2, t1 = taskHead, time = 1 / 0; t1; ) t1._call ? (time > t1._time && (time = t1._time), 
            t0 = t1, t1 = t1._next) : (t2 = t1._next, t1._next = null, t1 = t0 ? t0._next = t2 : taskHead = t2);
            taskTail = t0, sleep(time);
        }
        function sleep(time) {
            if (!frame) {
                timeout && (timeout = clearTimeout(timeout));
                var delay = time - clockNow;
                delay > 24 ? (time < 1 / 0 && (timeout = setTimeout(wake, delay)), interval && (interval = clearInterval(interval))) : (interval || (clockLast = clockNow, 
                interval = setInterval(poke, pokeDelay)), frame = 1, setFrame(wake));
            }
        }
        function init(node, id) {
            var schedule = node.__transition;
            if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) throw new Error("too late");
            return schedule;
        }
        function set$1(node, id) {
            var schedule = node.__transition;
            if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) throw new Error("too late");
            return schedule;
        }
        function get$1(node, id) {
            var schedule = node.__transition;
            if (!schedule || !(schedule = schedule[id])) throw new Error("too late");
            return schedule;
        }
        function create(node, id, self) {
            function schedule(elapsed) {
                self.state = SCHEDULED, self.timer.restart(start, self.delay, self.time), self.delay <= elapsed && start(elapsed - self.delay);
            }
            function start(elapsed) {
                var i, j, n, o;
                if (self.state !== SCHEDULED) return stop();
                for (i in schedules) if (o = schedules[i], o.name === self.name) {
                    if (o.state === STARTED) return timeout$1(start);
                    o.state === RUNNING ? (o.state = ENDED, o.timer.stop(), o.on.call("interrupt", node, node.__data__, o.index, o.group), 
                    delete schedules[i]) : +i < id && (o.state = ENDED, o.timer.stop(), delete schedules[i]);
                }
                if (timeout$1(function() {
                    self.state === STARTED && (self.state = RUNNING, self.timer.restart(tick, self.delay, self.time), 
                    tick(elapsed));
                }), self.state = STARTING, self.on.call("start", node, node.__data__, self.index, self.group), 
                self.state === STARTING) {
                    for (self.state = STARTED, tween = new Array(n = self.tween.length), i = 0, j = -1; i < n; ++i) (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) && (tween[++j] = o);
                    tween.length = j + 1;
                }
            }
            function tick(elapsed) {
                for (var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), 
                self.state = ENDING, 1), i = -1, n = tween.length; ++i < n; ) tween[i].call(null, t);
                self.state === ENDING && (self.on.call("end", node, node.__data__, self.index, self.group), 
                stop());
            }
            function stop() {
                self.state = ENDED, self.timer.stop(), delete schedules[id];
                for (var i in schedules) return;
                delete node.__transition;
            }
            var tween, schedules = node.__transition;
            schedules[id] = self, self.timer = timer(schedule, 0, self.time);
        }
        function tweenRemove(id, name) {
            var tween0, tween1;
            return function() {
                var schedule$$1 = set$1(this, id), tween = schedule$$1.tween;
                if (tween !== tween0) {
                    tween1 = tween0 = tween;
                    for (var i = 0, n = tween1.length; i < n; ++i) if (tween1[i].name === name) {
                        tween1 = tween1.slice(), tween1.splice(i, 1);
                        break;
                    }
                }
                schedule$$1.tween = tween1;
            };
        }
        function tweenFunction(id, name, value) {
            var tween0, tween1;
            if ("function" !== typeof value) throw new Error();
            return function() {
                var schedule$$1 = set$1(this, id), tween = schedule$$1.tween;
                if (tween !== tween0) {
                    tween1 = (tween0 = tween).slice();
                    for (var t = {
                        name: name,
                        value: value
                    }, i = 0, n = tween1.length; i < n; ++i) if (tween1[i].name === name) {
                        tween1[i] = t;
                        break;
                    }
                    i === n && tween1.push(t);
                }
                schedule$$1.tween = tween1;
            };
        }
        function tweenValue(transition, name, value) {
            var id = transition._id;
            return transition.each(function() {
                var schedule$$1 = set$1(this, id);
                (schedule$$1.value || (schedule$$1.value = {}))[name] = value.apply(this, arguments);
            }), function(node) {
                return get$1(node, id).value[name];
            };
        }
        function attrRemove$1(name) {
            return function() {
                this.removeAttribute(name);
            };
        }
        function attrRemoveNS$1(fullname) {
            return function() {
                this.removeAttributeNS(fullname.space, fullname.local);
            };
        }
        function attrConstant$1(name, interpolate$$1, value1) {
            var value00, interpolate0;
            return function() {
                var value0 = this.getAttribute(name);
                return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value1);
            };
        }
        function attrConstantNS$1(fullname, interpolate$$1, value1) {
            var value00, interpolate0;
            return function() {
                var value0 = this.getAttributeNS(fullname.space, fullname.local);
                return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value1);
            };
        }
        function attrFunction$1(name, interpolate$$1, value) {
            var value00, value10, interpolate0;
            return function() {
                var value0, value1 = value(this);
                return null == value1 ? void this.removeAttribute(name) : (value0 = this.getAttribute(name), 
                value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value10 = value1));
            };
        }
        function attrFunctionNS$1(fullname, interpolate$$1, value) {
            var value00, value10, interpolate0;
            return function() {
                var value0, value1 = value(this);
                return null == value1 ? void this.removeAttributeNS(fullname.space, fullname.local) : (value0 = this.getAttributeNS(fullname.space, fullname.local), 
                value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value10 = value1));
            };
        }
        function attrTweenNS(fullname, value) {
            function tween() {
                var node = this, i = value.apply(node, arguments);
                return i && function(t) {
                    node.setAttributeNS(fullname.space, fullname.local, i(t));
                };
            }
            return tween._value = value, tween;
        }
        function attrTween(name, value) {
            function tween() {
                var node = this, i = value.apply(node, arguments);
                return i && function(t) {
                    node.setAttribute(name, i(t));
                };
            }
            return tween._value = value, tween;
        }
        function delayFunction(id, value) {
            return function() {
                init(this, id).delay = +value.apply(this, arguments);
            };
        }
        function delayConstant(id, value) {
            return value = +value, function() {
                init(this, id).delay = value;
            };
        }
        function durationFunction(id, value) {
            return function() {
                set$1(this, id).duration = +value.apply(this, arguments);
            };
        }
        function durationConstant(id, value) {
            return value = +value, function() {
                set$1(this, id).duration = value;
            };
        }
        function easeConstant(id, value) {
            if ("function" !== typeof value) throw new Error();
            return function() {
                set$1(this, id).ease = value;
            };
        }
        function start(name) {
            return (name + "").trim().split(/^|\s+/).every(function(t) {
                var i = t.indexOf(".");
                return i >= 0 && (t = t.slice(0, i)), !t || "start" === t;
            });
        }
        function onFunction(id, name, listener) {
            var on0, on1, sit = start(name) ? init : set$1;
            return function() {
                var schedule$$1 = sit(this, id), on = schedule$$1.on;
                on !== on0 && (on1 = (on0 = on).copy()).on(name, listener), schedule$$1.on = on1;
            };
        }
        function removeFunction(id) {
            return function() {
                var parent = this.parentNode;
                for (var i in this.__transition) if (+i !== id) return;
                parent && parent.removeChild(this);
            };
        }
        function styleRemove$1(name, interpolate$$1) {
            var value00, value10, interpolate0;
            return function() {
                var value0 = styleValue(this, name), value1 = (this.style.removeProperty(name), 
                styleValue(this, name));
                return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
            };
        }
        function styleRemoveEnd(name) {
            return function() {
                this.style.removeProperty(name);
            };
        }
        function styleConstant$1(name, interpolate$$1, value1) {
            var value00, interpolate0;
            return function() {
                var value0 = styleValue(this, name);
                return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value1);
            };
        }
        function styleFunction$1(name, interpolate$$1, value) {
            var value00, value10, interpolate0;
            return function() {
                var value0 = styleValue(this, name), value1 = value(this);
                return null == value1 && (this.style.removeProperty(name), value1 = styleValue(this, name)), 
                value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
            };
        }
        function styleTween(name, value, priority) {
            function tween() {
                var node = this, i = value.apply(node, arguments);
                return i && function(t) {
                    node.style.setProperty(name, i(t), priority);
                };
            }
            return tween._value = value, tween;
        }
        function textConstant$1(value) {
            return function() {
                this.textContent = value;
            };
        }
        function textFunction$1(value) {
            return function() {
                var value1 = value(this);
                this.textContent = null == value1 ? "" : value1;
            };
        }
        function Transition(groups, parents, name, id) {
            this._groups = groups, this._parents = parents, this._name = name, this._id = id;
        }
        function transition(name) {
            return selection().transition(name);
        }
        function newId() {
            return ++id;
        }
        function linear$1(t) {
            return +t;
        }
        function quadIn(t) {
            return t * t;
        }
        function quadOut(t) {
            return t * (2 - t);
        }
        function quadInOut(t) {
            return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
        }
        function cubicIn(t) {
            return t * t * t;
        }
        function cubicOut(t) {
            return --t * t * t + 1;
        }
        function cubicInOut(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        }
        function sinIn(t) {
            return 1 - Math.cos(t * halfPi);
        }
        function sinOut(t) {
            return Math.sin(t * halfPi);
        }
        function sinInOut(t) {
            return (1 - Math.cos(pi * t)) / 2;
        }
        function expIn(t) {
            return Math.pow(2, 10 * t - 10);
        }
        function expOut(t) {
            return 1 - Math.pow(2, -10 * t);
        }
        function expInOut(t) {
            return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
        }
        function circleIn(t) {
            return 1 - Math.sqrt(1 - t * t);
        }
        function circleOut(t) {
            return Math.sqrt(1 - --t * t);
        }
        function circleInOut(t) {
            return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
        }
        function bounceIn(t) {
            return 1 - bounceOut(1 - t);
        }
        function bounceOut(t) {
            return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
        }
        function bounceInOut(t) {
            return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
        }
        function inherit(node, id) {
            for (var timing; !(timing = node.__transition) || !(timing = timing[id]); ) if (!(node = node.parentNode)) return defaultTiming.time = now(), 
            defaultTiming;
            return timing;
        }
        function nopropagation$1() {
            pear.event.stopImmediatePropagation();
        }
        function type(t) {
            return {
                type: t
            };
        }
        function defaultFilter() {
            return !pear.event.button;
        }
        function defaultExtent() {
            var svg = this.ownerSVGElement || this;
            return [ [ 0, 0 ], [ svg.width.baseVal.value, svg.height.baseVal.value ] ];
        }
        function local$$1(node) {
            for (;!node.__brush; ) if (!(node = node.parentNode)) return;
            return node.__brush;
        }
        function empty(extent) {
            return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
        }
        function brushSelection(node) {
            var state = node.__brush;
            return state ? state.dim.output(state.selection) : null;
        }
        function brushX() {
            return brush$1(X);
        }
        function brushY() {
            return brush$1(Y);
        }
        function brush$1(dim) {
            function brush(group) {
                var overlay = group.property("__brush", initialize).selectAll(".overlay").data([ type("overlay") ]);
                overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function() {
                    var extent = local$$1(this).extent;
                    select(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
                }), group.selectAll(".selection").data([ type("selection") ]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
                var handle = group.selectAll(".handle").data(dim.handles, function(d) {
                    return d.type;
                });
                handle.exit().remove(), handle.enter().append("rect").attr("class", function(d) {
                    return "handle handle--" + d.type;
                }).attr("cursor", function(d) {
                    return cursors[d.type];
                }), group.each(redraw).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", started);
            }
            function redraw() {
                var group = select(this), selection = local$$1(this).selection;
                selection ? (group.selectAll(".selection").style("display", null).attr("x", selection[0][0]).attr("y", selection[0][1]).attr("width", selection[1][0] - selection[0][0]).attr("height", selection[1][1] - selection[0][1]), 
                group.selectAll(".handle").style("display", null).attr("x", function(d) {
                    return "e" === d.type[d.type.length - 1] ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2;
                }).attr("y", function(d) {
                    return "s" === d.type[0] ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2;
                }).attr("width", function(d) {
                    return "n" === d.type || "s" === d.type ? selection[1][0] - selection[0][0] + handleSize : handleSize;
                }).attr("height", function(d) {
                    return "e" === d.type || "w" === d.type ? selection[1][1] - selection[0][1] + handleSize : handleSize;
                })) : group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
            }
            function emitter(that, args) {
                return that.__brush.emitter || new Emitter(that, args);
            }
            function Emitter(that, args) {
                this.that = that, this.args = args, this.state = that.__brush, this.active = 0;
            }
            function started() {
                function moved() {
                    var point1 = mouse(that);
                    !shifting || lockX || lockY || (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1]) ? lockY = !0 : lockX = !0), 
                    point = point1, moving = !0, noevent$1(), move();
                }
                function move() {
                    var t;
                    switch (dx = point[0] - point0[0], dy = point[1] - point0[1], mode) {
                      case MODE_SPACE:
                      case MODE_DRAG:
                        signX && (dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx), 
                        signY && (dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy);
                        break;

                      case MODE_HANDLE:
                        signX < 0 ? (dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0) : signX > 0 && (dx = Math.max(W - e0, Math.min(E - e0, dx)), 
                        w1 = w0, e1 = e0 + dx), signY < 0 ? (dy = Math.max(N - n0, Math.min(S - n0, dy)), 
                        n1 = n0 + dy, s1 = s0) : signY > 0 && (dy = Math.max(N - s0, Math.min(S - s0, dy)), 
                        n1 = n0, s1 = s0 + dy);
                        break;

                      case MODE_CENTER:
                        signX && (w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX))), 
                        signY && (n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY)));
                    }
                    e1 < w1 && (signX *= -1, t = w0, w0 = e0, e0 = t, t = w1, w1 = e1, e1 = t, type in flipX && overlay.attr("cursor", cursors[type = flipX[type]])), 
                    s1 < n1 && (signY *= -1, t = n0, n0 = s0, s0 = t, t = n1, n1 = s1, s1 = t, type in flipY && overlay.attr("cursor", cursors[type = flipY[type]])), 
                    state.selection && (selection = state.selection), lockX && (w1 = selection[0][0], 
                    e1 = selection[1][0]), lockY && (n1 = selection[0][1], s1 = selection[1][1]), selection[0][0] === w1 && selection[0][1] === n1 && selection[1][0] === e1 && selection[1][1] === s1 || (state.selection = [ [ w1, n1 ], [ e1, s1 ] ], 
                    redraw.call(that), emit.brush());
                }
                function ended() {
                    if (nopropagation$1(), pear.event.touches) {
                        if (pear.event.touches.length) return;
                        touchending && clearTimeout(touchending), touchending = setTimeout(function() {
                            touchending = null;
                        }, 500), group.on("touchmove.brush touchend.brush touchcancel.brush", null);
                    } else yesdrag(pear.event.view, moving), view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                    group.attr("pointer-events", "all"), overlay.attr("cursor", cursors.overlay), state.selection && (selection = state.selection), 
                    empty(selection) && (state.selection = null, redraw.call(that)), emit.end();
                }
                function keydowned() {
                    switch (pear.event.keyCode) {
                      case 16:
                        shifting = signX && signY;
                        break;

                      case 18:
                        mode === MODE_HANDLE && (signX && (e0 = e1 - dx * signX, w0 = w1 + dx * signX), 
                        signY && (s0 = s1 - dy * signY, n0 = n1 + dy * signY), mode = MODE_CENTER, move());
                        break;

                      case 32:
                        mode !== MODE_HANDLE && mode !== MODE_CENTER || (signX < 0 ? e0 = e1 - dx : signX > 0 && (w0 = w1 - dx), 
                        signY < 0 ? s0 = s1 - dy : signY > 0 && (n0 = n1 - dy), mode = MODE_SPACE, overlay.attr("cursor", cursors.selection), 
                        move());
                        break;

                      default:
                        return;
                    }
                    noevent$1();
                }
                function keyupped() {
                    switch (pear.event.keyCode) {
                      case 16:
                        shifting && (lockX = lockY = shifting = !1, move());
                        break;

                      case 18:
                        mode === MODE_CENTER && (signX < 0 ? e0 = e1 : signX > 0 && (w0 = w1), signY < 0 ? s0 = s1 : signY > 0 && (n0 = n1), 
                        mode = MODE_HANDLE, move());
                        break;

                      case 32:
                        mode === MODE_SPACE && (pear.event.altKey ? (signX && (e0 = e1 - dx * signX, 
                        w0 = w1 + dx * signX), signY && (s0 = s1 - dy * signY, n0 = n1 + dy * signY), mode = MODE_CENTER) : (signX < 0 ? e0 = e1 : signX > 0 && (w0 = w1), 
                        signY < 0 ? s0 = s1 : signY > 0 && (n0 = n1), mode = MODE_HANDLE), overlay.attr("cursor", cursors[type]), 
                        move());
                        break;

                      default:
                        return;
                    }
                    noevent$1();
                }
                if (pear.event.touches) {
                    if (pear.event.changedTouches.length < pear.event.touches.length) return noevent$1();
                } else if (touchending) return;
                if (filter.apply(this, arguments)) {
                    var w0, w1, n0, n1, e0, e1, s0, s1, dx, dy, moving, lockX, lockY, that = this, type = pear.event.target.__data__.type, mode = "selection" === (pear.event.metaKey ? type = "overlay" : type) ? MODE_DRAG : pear.event.altKey ? MODE_CENTER : MODE_HANDLE, signX = dim === Y ? null : signsX[type], signY = dim === X ? null : signsY[type], state = local$$1(that), extent = state.extent, selection = state.selection, W = extent[0][0], N = extent[0][1], E = extent[1][0], S = extent[1][1], shifting = signX && signY && pear.event.shiftKey, point0 = mouse(that), point = point0, emit = emitter(that, arguments).beforestart();
                    "overlay" === type ? state.selection = selection = [ [ w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1] ], [ e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0 ] ] : (w0 = selection[0][0], 
                    n0 = selection[0][1], e0 = selection[1][0], s0 = selection[1][1]), w1 = w0, n1 = n0, 
                    e1 = e0, s1 = s0;
                    var group = select(that).attr("pointer-events", "none"), overlay = group.selectAll(".overlay").attr("cursor", cursors[type]);
                    if (pear.event.touches) group.on("touchmove.brush", moved, !0).on("touchend.brush touchcancel.brush", ended, !0); else {
                        var view = select(pear.event.view).on("keydown.brush", keydowned, !0).on("keyup.brush", keyupped, !0).on("mousemove.brush", moved, !0).on("mouseup.brush", ended, !0);
                        dragDisable(pear.event.view);
                    }
                    nopropagation$1(), interrupt(that), redraw.call(that), emit.start();
                }
            }
            function initialize() {
                var state = this.__brush || {
                    selection: null
                };
                return state.extent = extent.apply(this, arguments), state.dim = dim, state;
            }
            var touchending, extent = defaultExtent, filter = defaultFilter, listeners = dispatch(brush, "start", "brush", "end"), handleSize = 6;
            return brush.move = function(group, selection) {
                group.selection ? group.on("start.brush", function() {
                    emitter(this, arguments).beforestart().start();
                }).on("interrupt.brush end.brush", function() {
                    emitter(this, arguments).end();
                }).tween("brush", function() {
                    function tween(t) {
                        state.selection = 1 === t && empty(selection1) ? null : i(t), redraw.call(that), 
                        emit.brush();
                    }
                    var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input("function" === typeof selection ? selection.apply(this, arguments) : selection, state.extent), i = interpolateValue(selection0, selection1);
                    return selection0 && selection1 ? tween : tween(1);
                }) : group.each(function() {
                    var that = this, args = arguments, state = that.__brush, selection1 = dim.input("function" === typeof selection ? selection.apply(that, args) : selection, state.extent), emit = emitter(that, args).beforestart();
                    interrupt(that), state.selection = null == selection1 || empty(selection1) ? null : selection1, 
                    redraw.call(that), emit.start().brush().end();
                });
            }, Emitter.prototype = {
                beforestart: function() {
                    return 1 === ++this.active && (this.state.emitter = this, this.starting = !0), this;
                },
                start: function() {
                    return this.starting && (this.starting = !1, this.emit("start")), this;
                },
                brush: function() {
                    return this.emit("brush"), this;
                },
                end: function() {
                    return 0 === --this.active && (delete this.state.emitter, this.emit("end")), this;
                },
                emit: function(type) {
                    customEvent(new BrushEvent(brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [ type, this.that, this.args ]);
                }
            }, brush.extent = function(_) {
                return arguments.length ? (extent = "function" === typeof _ ? _ : constant$4([ [ +_[0][0], +_[0][1] ], [ +_[1][0], +_[1][1] ] ]), 
                brush) : extent;
            }, brush.filter = function(_) {
                return arguments.length ? (filter = "function" === typeof _ ? _ : constant$4(!!_), 
                brush) : filter;
            }, brush.handleSize = function(_) {
                return arguments.length ? (handleSize = +_, brush) : handleSize;
            }, brush.on = function() {
                var value = listeners.on.apply(listeners, arguments);
                return value === listeners ? brush : value;
            }, brush;
        }
        function compareValue(compare) {
            return function(a, b) {
                return compare(a.source.value + a.target.value, b.source.value + b.target.value);
            };
        }
        function Path() {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
        }
        function path() {
            return new Path();
        }
        function defaultSource(d) {
            return d.source;
        }
        function defaultTarget(d) {
            return d.target;
        }
        function defaultRadius(d) {
            return d.radius;
        }
        function defaultStartAngle(d) {
            return d.startAngle;
        }
        function defaultEndAngle(d) {
            return d.endAngle;
        }
        function Map() {}
        function map$1(object, f) {
            var map = new Map();
            if (object instanceof Map) object.each(function(value, key) {
                map.set(key, value);
            }); else if (Array.isArray(object)) {
                var o, i = -1, n = object.length;
                if (null == f) for (;++i < n; ) map.set(i, object[i]); else for (;++i < n; ) map.set(f(o = object[i], i, object), o);
            } else if (object) for (var key in object) map.set(key, object[key]);
            return map;
        }
        function createObject() {
            return {};
        }
        function setObject(object, key, value) {
            object[key] = value;
        }
        function createMap() {
            return map$1();
        }
        function setMap(map, key, value) {
            map.set(key, value);
        }
        function Set() {}
        function set$2(object, f) {
            var set = new Set();
            if (object instanceof Set) object.each(function(value) {
                set.add(value);
            }); else if (object) {
                var i = -1, n = object.length;
                if (null == f) for (;++i < n; ) set.add(object[i]); else for (;++i < n; ) set.add(f(object[i], i, object));
            }
            return set;
        }
        function objectConverter(columns) {
            return new Function("d", "return {" + columns.map(function(name, i) {
                return JSON.stringify(name) + ": d[" + i + "]";
            }).join(",") + "}");
        }
        function customConverter(columns, f) {
            var object = objectConverter(columns);
            return function(row, i) {
                return f(object(row), i, columns);
            };
        }
        function inferColumns(rows) {
            var columnSet = Object.create(null), columns = [];
            return rows.forEach(function(row) {
                for (var column in row) column in columnSet || columns.push(columnSet[column] = column);
            }), columns;
        }
        function add(tree, x, y, d) {
            if (isNaN(x) || isNaN(y)) return tree;
            var parent, xm, ym, xp, yp, right, bottom, i, j, node = tree._root, leaf = {
                data: d
            }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1;
            if (!node) return tree._root = leaf, tree;
            for (;node.length; ) if ((right = x >= (xm = (x0 + x1) / 2)) ? x0 = xm : x1 = xm, 
            (bottom = y >= (ym = (y0 + y1) / 2)) ? y0 = ym : y1 = ym, parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, 
            tree;
            if (xp = +tree._x.call(null, node.data), yp = +tree._y.call(null, node.data), x === xp && y === yp) return leaf.next = node, 
            parent ? parent[i] = leaf : tree._root = leaf, tree;
            do {
                parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4), (right = x >= (xm = (x0 + x1) / 2)) ? x0 = xm : x1 = xm, 
                (bottom = y >= (ym = (y0 + y1) / 2)) ? y0 = ym : y1 = ym;
            } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
            return parent[j] = node, parent[i] = leaf, tree;
        }
        function addAll(data) {
            var d, i, x, y, n = data.length, xz = new Array(n), yz = new Array(n), x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
            for (i = 0; i < n; ++i) isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d)) || (xz[i] = x, 
            yz[i] = y, x < x0 && (x0 = x), x > x1 && (x1 = x), y < y0 && (y0 = y), y > y1 && (y1 = y));
            for (x1 < x0 && (x0 = this._x0, x1 = this._x1), y1 < y0 && (y0 = this._y0, y1 = this._y1), 
            this.cover(x0, y0).cover(x1, y1), i = 0; i < n; ++i) add(this, xz[i], yz[i], data[i]);
            return this;
        }
        function removeAll(data) {
            for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
            return this;
        }
        function defaultX(d) {
            return d[0];
        }
        function defaultY(d) {
            return d[1];
        }
        function quadtree(nodes, x, y) {
            var tree = new Quadtree(null == x ? defaultX : x, null == y ? defaultY : y, NaN, NaN, NaN, NaN);
            return null == nodes ? tree : tree.addAll(nodes);
        }
        function Quadtree(x, y, x0, y0, x1, y1) {
            this._x = x, this._y = y, this._x0 = x0, this._y0 = y0, this._x1 = x1, this._y1 = y1, 
            this._root = void 0;
        }
        function leaf_copy(leaf) {
            for (var copy = {
                data: leaf.data
            }, next = copy; leaf = leaf.next; ) next = next.next = {
                data: leaf.data
            };
            return copy;
        }
        function x(d) {
            return d.x + d.vx;
        }
        function y(d) {
            return d.y + d.vy;
        }
        function index(d) {
            return d.index;
        }
        function find(nodeById, nodeId) {
            var node = nodeById.get(nodeId);
            if (!node) throw new Error("missing: " + nodeId);
            return node;
        }
        function x$1(d) {
            return d.x;
        }
        function y$1(d) {
            return d.y;
        }
        function formatSpecifier(specifier) {
            return new FormatSpecifier(specifier);
        }
        function FormatSpecifier(specifier) {
            if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
            var match, fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zero = !!match[5], width = match[6] && +match[6], comma = !!match[7], precision = match[8] && +match[8].slice(1), type = match[9] || "";
            "n" === type ? (comma = !0, type = "g") : formatTypes[type] || (type = ""), (zero || "0" === fill && "=" === align) && (zero = !0, 
            fill = "0", align = "="), this.fill = fill, this.align = align, this.sign = sign, 
            this.symbol = symbol, this.zero = zero, this.width = width, this.comma = comma, 
            this.precision = precision, this.type = type;
        }
        function defaultLocale(definition) {
            return locale$1 = formatLocale(definition), pear.format = locale$1.format, pear.formatPrefix = locale$1.formatPrefix, 
            locale$1;
        }
        function Adder() {
            this.reset();
        }
        function add$1(adder, a, b) {
            var x = adder.s = a + b, bv = x - a, av = x - bv;
            adder.t = a - av + (b - bv);
        }
        function acos(x) {
            return x > 1 ? 0 : x < -1 ? pi$3 : Math.acos(x);
        }
        function asin(x) {
            return x > 1 ? halfPi$2 : x < -1 ? -halfPi$2 : Math.asin(x);
        }
        function haversin(x) {
            return (x = sin$1(x / 2)) * x;
        }
        function noop$1() {}
        function streamGeometry(geometry, stream) {
            geometry && streamGeometryType.hasOwnProperty(geometry.type) && streamGeometryType[geometry.type](geometry, stream);
        }
        function streamLine(coordinates, stream, closed) {
            var coordinate, i = -1, n = coordinates.length - closed;
            for (stream.lineStart(); ++i < n; ) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
            stream.lineEnd();
        }
        function streamPolygon(coordinates, stream) {
            var i = -1, n = coordinates.length;
            for (stream.polygonStart(); ++i < n; ) streamLine(coordinates[i], stream, 1);
            stream.polygonEnd();
        }
        function areaRingStart() {
            areaStream.point = areaPointFirst;
        }
        function areaRingEnd() {
            areaPoint(lambda00, phi00);
        }
        function areaPointFirst(lambda, phi) {
            areaStream.point = areaPoint, lambda00 = lambda, phi00 = phi, lambda *= radians, 
            phi *= radians, lambda0 = lambda, cosPhi0 = cos$1(phi = phi / 2 + quarterPi), sinPhi0 = sin$1(phi);
        }
        function areaPoint(lambda, phi) {
            lambda *= radians, phi *= radians, phi = phi / 2 + quarterPi;
            var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = cos$1(phi), sinPhi = sin$1(phi), k = sinPhi0 * sinPhi, u = cosPhi0 * cosPhi + k * cos$1(adLambda), v = k * sdLambda * sin$1(adLambda);
            areaRingSum.add(atan2(v, u)), lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
        }
        function spherical(cartesian) {
            return [ atan2(cartesian[1], cartesian[0]), asin(cartesian[2]) ];
        }
        function cartesian(spherical) {
            var lambda = spherical[0], phi = spherical[1], cosPhi = cos$1(phi);
            return [ cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi) ];
        }
        function cartesianDot(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
        }
        function cartesianCross(a, b) {
            return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
        }
        function cartesianAddInPlace(a, b) {
            a[0] += b[0], a[1] += b[1], a[2] += b[2];
        }
        function cartesianScale(vector, k) {
            return [ vector[0] * k, vector[1] * k, vector[2] * k ];
        }
        function cartesianNormalizeInPlace(d) {
            var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
            d[0] /= l, d[1] /= l, d[2] /= l;
        }
        function boundsPoint(lambda, phi) {
            ranges.push(range = [ lambda0$1 = lambda, lambda1 = lambda ]), phi < phi0 && (phi0 = phi), 
            phi > phi1 && (phi1 = phi);
        }
        function linePoint(lambda, phi) {
            var p = cartesian([ lambda * radians, phi * radians ]);
            if (p0) {
                var normal = cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = cartesianCross(equatorial, normal);
                cartesianNormalizeInPlace(inflection), inflection = spherical(inflection);
                var phii, delta = lambda - lambda2, sign$$1 = delta > 0 ? 1 : -1, lambdai = inflection[0] * degrees$1 * sign$$1, antimeridian = abs(delta) > 180;
                antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda) ? (phii = inflection[1] * degrees$1) > phi1 && (phi1 = phii) : (lambdai = (lambdai + 360) % 360 - 180, 
                antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda) ? (phii = -inflection[1] * degrees$1) < phi0 && (phi0 = phii) : (phi < phi0 && (phi0 = phi), 
                phi > phi1 && (phi1 = phi))), antimeridian ? lambda < lambda2 ? angle(lambda0$1, lambda) > angle(lambda0$1, lambda1) && (lambda1 = lambda) : angle(lambda, lambda1) > angle(lambda0$1, lambda1) && (lambda0$1 = lambda) : lambda1 >= lambda0$1 ? (lambda < lambda0$1 && (lambda0$1 = lambda), 
                lambda > lambda1 && (lambda1 = lambda)) : lambda > lambda2 ? angle(lambda0$1, lambda) > angle(lambda0$1, lambda1) && (lambda1 = lambda) : angle(lambda, lambda1) > angle(lambda0$1, lambda1) && (lambda0$1 = lambda);
            } else ranges.push(range = [ lambda0$1 = lambda, lambda1 = lambda ]);
            phi < phi0 && (phi0 = phi), phi > phi1 && (phi1 = phi), p0 = p, lambda2 = lambda;
        }
        function boundsLineStart() {
            boundsStream.point = linePoint;
        }
        function boundsLineEnd() {
            range[0] = lambda0$1, range[1] = lambda1, boundsStream.point = boundsPoint, p0 = null;
        }
        function boundsRingPoint(lambda, phi) {
            if (p0) {
                var delta = lambda - lambda2;
                deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
            } else lambda00$1 = lambda, phi00$1 = phi;
            areaStream.point(lambda, phi), linePoint(lambda, phi);
        }
        function boundsRingStart() {
            areaStream.lineStart();
        }
        function boundsRingEnd() {
            boundsRingPoint(lambda00$1, phi00$1), areaStream.lineEnd(), abs(deltaSum) > epsilon$2 && (lambda0$1 = -(lambda1 = 180)), 
            range[0] = lambda0$1, range[1] = lambda1, p0 = null;
        }
        function angle(lambda0, lambda1) {
            return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
        }
        function rangeCompare(a, b) {
            return a[0] - b[0];
        }
        function rangeContains(range, x) {
            return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
        }
        function centroidPoint(lambda, phi) {
            lambda *= radians, phi *= radians;
            var cosPhi = cos$1(phi);
            centroidPointCartesian(cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi));
        }
        function centroidPointCartesian(x, y, z) {
            ++W0, X0 += (x - X0) / W0, Y0 += (y - Y0) / W0, Z0 += (z - Z0) / W0;
        }
        function centroidLineStart() {
            centroidStream.point = centroidLinePointFirst;
        }
        function centroidLinePointFirst(lambda, phi) {
            lambda *= radians, phi *= radians;
            var cosPhi = cos$1(phi);
            x0 = cosPhi * cos$1(lambda), y0 = cosPhi * sin$1(lambda), z0 = sin$1(phi), centroidStream.point = centroidLinePoint, 
            centroidPointCartesian(x0, y0, z0);
        }
        function centroidLinePoint(lambda, phi) {
            lambda *= radians, phi *= radians;
            var cosPhi = cos$1(phi), x = cosPhi * cos$1(lambda), y = cosPhi * sin$1(lambda), z = sin$1(phi), w = atan2(sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
            W1 += w, X1 += w * (x0 + (x0 = x)), Y1 += w * (y0 + (y0 = y)), Z1 += w * (z0 + (z0 = z)), 
            centroidPointCartesian(x0, y0, z0);
        }
        function centroidLineEnd() {
            centroidStream.point = centroidPoint;
        }
        function centroidRingStart() {
            centroidStream.point = centroidRingPointFirst;
        }
        function centroidRingEnd() {
            centroidRingPoint(lambda00$2, phi00$2), centroidStream.point = centroidPoint;
        }
        function centroidRingPointFirst(lambda, phi) {
            lambda00$2 = lambda, phi00$2 = phi, lambda *= radians, phi *= radians, centroidStream.point = centroidRingPoint;
            var cosPhi = cos$1(phi);
            x0 = cosPhi * cos$1(lambda), y0 = cosPhi * sin$1(lambda), z0 = sin$1(phi), centroidPointCartesian(x0, y0, z0);
        }
        function centroidRingPoint(lambda, phi) {
            lambda *= radians, phi *= radians;
            var cosPhi = cos$1(phi), x = cosPhi * cos$1(lambda), y = cosPhi * sin$1(lambda), z = sin$1(phi), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = sqrt(cx * cx + cy * cy + cz * cz), w = asin(m), v = m && -w / m;
            X2 += v * cx, Y2 += v * cy, Z2 += v * cz, W1 += w, X1 += w * (x0 + (x0 = x)), Y1 += w * (y0 + (y0 = y)), 
            Z1 += w * (z0 + (z0 = z)), centroidPointCartesian(x0, y0, z0);
        }
        function rotationIdentity(lambda, phi) {
            return [ lambda > pi$3 ? lambda - tau$3 : lambda < -pi$3 ? lambda + tau$3 : lambda, phi ];
        }
        function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
            return (deltaLambda %= tau$3) ? deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
        }
        function forwardRotationLambda(deltaLambda) {
            return function(lambda, phi) {
                return lambda += deltaLambda, [ lambda > pi$3 ? lambda - tau$3 : lambda < -pi$3 ? lambda + tau$3 : lambda, phi ];
            };
        }
        function rotationLambda(deltaLambda) {
            var rotation = forwardRotationLambda(deltaLambda);
            return rotation.invert = forwardRotationLambda(-deltaLambda), rotation;
        }
        function rotationPhiGamma(deltaPhi, deltaGamma) {
            function rotation(lambda, phi) {
                var cosPhi = cos$1(phi), x = cos$1(lambda) * cosPhi, y = sin$1(lambda) * cosPhi, z = sin$1(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
                return [ atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi), asin(k * cosDeltaGamma + y * sinDeltaGamma) ];
            }
            var cosDeltaPhi = cos$1(deltaPhi), sinDeltaPhi = sin$1(deltaPhi), cosDeltaGamma = cos$1(deltaGamma), sinDeltaGamma = sin$1(deltaGamma);
            return rotation.invert = function(lambda, phi) {
                var cosPhi = cos$1(phi), x = cos$1(lambda) * cosPhi, y = sin$1(lambda) * cosPhi, z = sin$1(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
                return [ atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi), asin(k * cosDeltaPhi - x * sinDeltaPhi) ];
            }, rotation;
        }
        function circleStream(stream, radius, delta, direction, t0, t1) {
            if (delta) {
                var cosRadius = cos$1(radius), sinRadius = sin$1(radius), step = direction * delta;
                null == t0 ? (t0 = radius + direction * tau$3, t1 = radius - step / 2) : (t0 = circleRadius(cosRadius, t0), 
                t1 = circleRadius(cosRadius, t1), (direction > 0 ? t0 < t1 : t0 > t1) && (t0 += direction * tau$3));
                for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) point = spherical([ cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t) ]), 
                stream.point(point[0], point[1]);
            }
        }
        function circleRadius(cosRadius, point) {
            point = cartesian(point), point[0] -= cosRadius, cartesianNormalizeInPlace(point);
            var radius = acos(-point[1]);
            return ((-point[2] < 0 ? -radius : radius) + tau$3 - epsilon$2) % tau$3;
        }
        function Intersection(point, points, other, entry) {
            this.x = point, this.z = points, this.o = other, this.e = entry, this.v = !1, this.n = this.p = null;
        }
        function link$1(array) {
            if (n = array.length) {
                for (var n, b, i = 0, a = array[0]; ++i < n; ) a.n = b = array[i], b.p = a, a = b;
                a.n = b = array[0], b.p = a;
            }
        }
        function clipExtent(x0, y0, x1, y1) {
            function visible(x, y) {
                return x0 <= x && x <= x1 && y0 <= y && y <= y1;
            }
            function interpolate(from, to, direction, stream) {
                var a = 0, a1 = 0;
                if (null == from || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) do {
                    stream.point(0 === a || 3 === a ? x0 : x1, a > 1 ? y1 : y0);
                } while ((a = (a + direction + 4) % 4) !== a1); else stream.point(to[0], to[1]);
            }
            function corner(p, direction) {
                return abs(p[0] - x0) < epsilon$2 ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < epsilon$2 ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < epsilon$2 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
            }
            function compareIntersection(a, b) {
                return comparePoint(a.x, b.x);
            }
            function comparePoint(a, b) {
                var ca = corner(a, 1), cb = corner(b, 1);
                return ca !== cb ? ca - cb : 0 === ca ? b[1] - a[1] : 1 === ca ? a[0] - b[0] : 2 === ca ? a[1] - b[1] : b[0] - a[0];
            }
            return function(stream) {
                function point(x, y) {
                    visible(x, y) && activeStream.point(x, y);
                }
                function polygonInside() {
                    for (var winding = 0, i = 0, n = polygon.length; i < n; ++i) for (var a0, a1, ring = polygon[i], j = 1, m = ring.length, point = ring[0], b0 = point[0], b1 = point[1]; j < m; ++j) a0 = b0, 
                    a1 = b1, point = ring[j], b0 = point[0], b1 = point[1], a1 <= y1 ? b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0) && ++winding : b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0) && --winding;
                    return winding;
                }
                function polygonStart() {
                    activeStream = bufferStream, segments = [], polygon = [], clean = !0;
                }
                function polygonEnd() {
                    var startInside = polygonInside(), cleanInside = clean && startInside, visible = (segments = merge(segments)).length;
                    (cleanInside || visible) && (stream.polygonStart(), cleanInside && (stream.lineStart(), 
                    interpolate(null, null, 1, stream), stream.lineEnd()), visible && clipPolygon(segments, compareIntersection, startInside, interpolate, stream), 
                    stream.polygonEnd()), activeStream = stream, segments = polygon = ring = null;
                }
                function lineStart() {
                    clipStream.point = linePoint, polygon && polygon.push(ring = []), first = !0, v_ = !1, 
                    x_ = y_ = NaN;
                }
                function lineEnd() {
                    segments && (linePoint(x__, y__), v__ && v_ && bufferStream.rejoin(), segments.push(bufferStream.result())), 
                    clipStream.point = point, v_ && activeStream.lineEnd();
                }
                function linePoint(x, y) {
                    var v = visible(x, y);
                    if (polygon && ring.push([ x, y ]), first) x__ = x, y__ = y, v__ = v, first = !1, 
                    v && (activeStream.lineStart(), activeStream.point(x, y)); else if (v && v_) activeStream.point(x, y); else {
                        var a = [ x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_)) ], b = [ x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y)) ];
                        clipLine(a, b, x0, y0, x1, y1) ? (v_ || (activeStream.lineStart(), activeStream.point(a[0], a[1])), 
                        activeStream.point(b[0], b[1]), v || activeStream.lineEnd(), clean = !1) : v && (activeStream.lineStart(), 
                        activeStream.point(x, y), clean = !1);
                    }
                    x_ = x, y_ = y, v_ = v;
                }
                var segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean, activeStream = stream, bufferStream = clipBuffer(), clipStream = {
                    point: point,
                    lineStart: lineStart,
                    lineEnd: lineEnd,
                    polygonStart: polygonStart,
                    polygonEnd: polygonEnd
                };
                return clipStream;
            };
        }
        function lengthLineStart() {
            lengthStream.point = lengthPointFirst, lengthStream.lineEnd = lengthLineEnd;
        }
        function lengthLineEnd() {
            lengthStream.point = lengthStream.lineEnd = noop$1;
        }
        function lengthPointFirst(lambda, phi) {
            lambda *= radians, phi *= radians, lambda0$2 = lambda, sinPhi0$1 = sin$1(phi), cosPhi0$1 = cos$1(phi), 
            lengthStream.point = lengthPoint;
        }
        function lengthPoint(lambda, phi) {
            lambda *= radians, phi *= radians;
            var sinPhi = sin$1(phi), cosPhi = cos$1(phi), delta = abs(lambda - lambda0$2), cosDelta = cos$1(delta), sinDelta = sin$1(delta), x = cosPhi * sinDelta, y = cosPhi0$1 * sinPhi - sinPhi0$1 * cosPhi * cosDelta, z = sinPhi0$1 * sinPhi + cosPhi0$1 * cosPhi * cosDelta;
            lengthSum.add(atan2(sqrt(x * x + y * y), z)), lambda0$2 = lambda, sinPhi0$1 = sinPhi, 
            cosPhi0$1 = cosPhi;
        }
        function containsGeometry(geometry, point) {
            return !(!geometry || !containsGeometryType.hasOwnProperty(geometry.type)) && containsGeometryType[geometry.type](geometry, point);
        }
        function containsPoint(coordinates, point) {
            return 0 === distance(coordinates, point);
        }
        function containsLine(coordinates, point) {
            var ab = distance(coordinates[0], coordinates[1]);
            return distance(coordinates[0], point) + distance(point, coordinates[1]) <= ab + epsilon$2;
        }
        function containsPolygon(coordinates, point) {
            return !!polygonContains(coordinates.map(ringRadians), pointRadians(point));
        }
        function ringRadians(ring) {
            return ring = ring.map(pointRadians), ring.pop(), ring;
        }
        function pointRadians(point) {
            return [ point[0] * radians, point[1] * radians ];
        }
        function graticuleX(y0, y1, dy) {
            var y = sequence(y0, y1 - epsilon$2, dy).concat(y1);
            return function(x) {
                return y.map(function(y) {
                    return [ x, y ];
                });
            };
        }
        function graticuleY(x0, x1, dx) {
            var x = sequence(x0, x1 - epsilon$2, dx).concat(x1);
            return function(y) {
                return x.map(function(x) {
                    return [ x, y ];
                });
            };
        }
        function graticule() {
            function graticule() {
                return {
                    type: "MultiLineString",
                    coordinates: lines()
                };
            }
            function lines() {
                return sequence(ceil(X0 / DX) * DX, X1, DX).map(X).concat(sequence(ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(sequence(ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
                    return abs(x % DX) > epsilon$2;
                }).map(x)).concat(sequence(ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
                    return abs(y % DY) > epsilon$2;
                }).map(y));
            }
            var x1, x0, X1, X0, y1, y0, Y1, Y0, x, y, X, Y, dx = 10, dy = dx, DX = 90, DY = 360, precision = 2.5;
            return graticule.lines = function() {
                return lines().map(function(coordinates) {
                    return {
                        type: "LineString",
                        coordinates: coordinates
                    };
                });
            }, graticule.outline = function() {
                return {
                    type: "Polygon",
                    coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
                };
            }, graticule.extent = function(_) {
                return arguments.length ? graticule.extentMajor(_).extentMinor(_) : graticule.extentMinor();
            }, graticule.extentMajor = function(_) {
                return arguments.length ? (X0 = +_[0][0], X1 = +_[1][0], Y0 = +_[0][1], Y1 = +_[1][1], 
                X0 > X1 && (_ = X0, X0 = X1, X1 = _), Y0 > Y1 && (_ = Y0, Y0 = Y1, Y1 = _), graticule.precision(precision)) : [ [ X0, Y0 ], [ X1, Y1 ] ];
            }, graticule.extentMinor = function(_) {
                return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], 
                x0 > x1 && (_ = x0, x0 = x1, x1 = _), y0 > y1 && (_ = y0, y0 = y1, y1 = _), graticule.precision(precision)) : [ [ x0, y0 ], [ x1, y1 ] ];
            }, graticule.step = function(_) {
                return arguments.length ? graticule.stepMajor(_).stepMinor(_) : graticule.stepMinor();
            }, graticule.stepMajor = function(_) {
                return arguments.length ? (DX = +_[0], DY = +_[1], graticule) : [ DX, DY ];
            }, graticule.stepMinor = function(_) {
                return arguments.length ? (dx = +_[0], dy = +_[1], graticule) : [ dx, dy ];
            }, graticule.precision = function(_) {
                return arguments.length ? (precision = +_, x = graticuleX(y0, y1, 90), y = graticuleY(x0, x1, precision), 
                X = graticuleX(Y0, Y1, 90), Y = graticuleY(X0, X1, precision), graticule) : precision;
            }, graticule.extentMajor([ [ -180, -90 + epsilon$2 ], [ 180, 90 - epsilon$2 ] ]).extentMinor([ [ -180, -80 - epsilon$2 ], [ 180, 80 + epsilon$2 ] ]);
        }
        function graticule10() {
            return graticule()();
        }
        function areaRingStart$1() {
            areaStream$1.point = areaPointFirst$1;
        }
        function areaPointFirst$1(x, y) {
            areaStream$1.point = areaPoint$1, x00 = x0$1 = x, y00 = y0$1 = y;
        }
        function areaPoint$1(x, y) {
            areaRingSum$1.add(y0$1 * x - x0$1 * y), x0$1 = x, y0$1 = y;
        }
        function areaRingEnd$1() {
            areaPoint$1(x00, y00);
        }
        function boundsPoint$1(x, y) {
            x < x0$2 && (x0$2 = x), x > x1 && (x1 = x), y < y0$2 && (y0$2 = y), y > y1 && (y1 = y);
        }
        function centroidPoint$1(x, y) {
            X0$1 += x, Y0$1 += y, ++Z0$1;
        }
        function centroidLineStart$1() {
            centroidStream$1.point = centroidPointFirstLine;
        }
        function centroidPointFirstLine(x, y) {
            centroidStream$1.point = centroidPointLine, centroidPoint$1(x0$3 = x, y0$3 = y);
        }
        function centroidPointLine(x, y) {
            var dx = x - x0$3, dy = y - y0$3, z = sqrt(dx * dx + dy * dy);
            X1$1 += z * (x0$3 + x) / 2, Y1$1 += z * (y0$3 + y) / 2, Z1$1 += z, centroidPoint$1(x0$3 = x, y0$3 = y);
        }
        function centroidLineEnd$1() {
            centroidStream$1.point = centroidPoint$1;
        }
        function centroidRingStart$1() {
            centroidStream$1.point = centroidPointFirstRing;
        }
        function centroidRingEnd$1() {
            centroidPointRing(x00$1, y00$1);
        }
        function centroidPointFirstRing(x, y) {
            centroidStream$1.point = centroidPointRing, centroidPoint$1(x00$1 = x0$3 = x, y00$1 = y0$3 = y);
        }
        function centroidPointRing(x, y) {
            var dx = x - x0$3, dy = y - y0$3, z = sqrt(dx * dx + dy * dy);
            X1$1 += z * (x0$3 + x) / 2, Y1$1 += z * (y0$3 + y) / 2, Z1$1 += z, z = y0$3 * x - x0$3 * y, 
            X2$1 += z * (x0$3 + x), Y2$1 += z * (y0$3 + y), Z2$1 += 3 * z, centroidPoint$1(x0$3 = x, y0$3 = y);
        }
        function PathContext(context) {
            this._context = context;
        }
        function lengthPointFirst$1(x, y) {
            lengthStream$1.point = lengthPoint$1, x00$2 = x0$4 = x, y00$2 = y0$4 = y;
        }
        function lengthPoint$1(x, y) {
            x0$4 -= x, y0$4 -= y, lengthSum$1.add(sqrt(x0$4 * x0$4 + y0$4 * y0$4)), x0$4 = x, 
            y0$4 = y;
        }
        function PathString() {
            this._string = [];
        }
        function circle$1(radius) {
            return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
        }
        function validSegment(segment) {
            return segment.length > 1;
        }
        function compareIntersection(a, b) {
            return ((a = a.x)[0] < 0 ? a[1] - halfPi$2 - epsilon$2 : halfPi$2 - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi$2 - epsilon$2 : halfPi$2 - b[1]);
        }
        function clipAntimeridianLine(stream) {
            var clean, lambda0 = NaN, phi0 = NaN, sign0 = NaN;
            return {
                lineStart: function() {
                    stream.lineStart(), clean = 1;
                },
                point: function(lambda1, phi1) {
                    var sign1 = lambda1 > 0 ? pi$3 : -pi$3, delta = abs(lambda1 - lambda0);
                    abs(delta - pi$3) < epsilon$2 ? (stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi$2 : -halfPi$2), 
                    stream.point(sign0, phi0), stream.lineEnd(), stream.lineStart(), stream.point(sign1, phi0), 
                    stream.point(lambda1, phi0), clean = 0) : sign0 !== sign1 && delta >= pi$3 && (abs(lambda0 - sign0) < epsilon$2 && (lambda0 -= sign0 * epsilon$2), 
                    abs(lambda1 - sign1) < epsilon$2 && (lambda1 -= sign1 * epsilon$2), phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1), 
                    stream.point(sign0, phi0), stream.lineEnd(), stream.lineStart(), stream.point(sign1, phi0), 
                    clean = 0), stream.point(lambda0 = lambda1, phi0 = phi1), sign0 = sign1;
                },
                lineEnd: function() {
                    stream.lineEnd(), lambda0 = phi0 = NaN;
                },
                clean: function() {
                    return 2 - clean;
                }
            };
        }
        function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
            var cosPhi0, cosPhi1, sinLambda0Lambda1 = sin$1(lambda0 - lambda1);
            return abs(sinLambda0Lambda1) > epsilon$2 ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1) - sin$1(phi1) * (cosPhi0 = cos$1(phi0)) * sin$1(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
        }
        function clipAntimeridianInterpolate(from, to, direction, stream) {
            var phi;
            if (null == from) phi = direction * halfPi$2, stream.point(-pi$3, phi), stream.point(0, phi), 
            stream.point(pi$3, phi), stream.point(pi$3, 0), stream.point(pi$3, -phi), stream.point(0, -phi), 
            stream.point(-pi$3, -phi), stream.point(-pi$3, 0), stream.point(-pi$3, phi); else if (abs(from[0] - to[0]) > epsilon$2) {
                var lambda = from[0] < to[0] ? pi$3 : -pi$3;
                phi = direction * lambda / 2, stream.point(-lambda, phi), stream.point(0, phi), 
                stream.point(lambda, phi);
            } else stream.point(to[0], to[1]);
        }
        function transformer(methods) {
            return function(stream) {
                var s = new TransformStream();
                for (var key in methods) s[key] = methods[key];
                return s.stream = stream, s;
            };
        }
        function TransformStream() {}
        function fitExtent(projection, extent, object) {
            var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], clip = projection.clipExtent && projection.clipExtent();
            projection.scale(150).translate([ 0, 0 ]), null != clip && projection.clipExtent(null), 
            geoStream(object, projection.stream(boundsStream$1));
            var b = boundsStream$1.result(), k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
            return null != clip && projection.clipExtent(clip), projection.scale(150 * k).translate([ x, y ]);
        }
        function fitSize(projection, size, object) {
            return fitExtent(projection, [ [ 0, 0 ], size ], object);
        }
        function resampleNone(project) {
            return transformer({
                point: function(x, y) {
                    x = project(x, y), this.stream.point(x[0], x[1]);
                }
            });
        }
        function resample$1(project, delta2) {
            function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
                var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
                if (d2 > 4 * delta2 && depth--) {
                    var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = sqrt(a * a + b * b + c * c), phi2 = asin(c /= m), lambda2 = abs(abs(c) - 1) < epsilon$2 || abs(lambda0 - lambda1) < epsilon$2 ? (lambda0 + lambda1) / 2 : atan2(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
                    (dz * dz / d2 > delta2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) && (resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream), 
                    stream.point(x2, y2), resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream));
                }
            }
            return function(stream) {
                function point(x, y) {
                    x = project(x, y), stream.point(x[0], x[1]);
                }
                function lineStart() {
                    x0 = NaN, resampleStream.point = linePoint, stream.lineStart();
                }
                function linePoint(lambda, phi) {
                    var c = cartesian([ lambda, phi ]), p = project(lambda, phi);
                    resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream), 
                    stream.point(x0, y0);
                }
                function lineEnd() {
                    resampleStream.point = point, stream.lineEnd();
                }
                function ringStart() {
                    lineStart(), resampleStream.point = ringPoint, resampleStream.lineEnd = ringEnd;
                }
                function ringPoint(lambda, phi) {
                    linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0, 
                    resampleStream.point = linePoint;
                }
                function ringEnd() {
                    resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream), 
                    resampleStream.lineEnd = lineEnd, lineEnd();
                }
                var lambda00, x00, y00, a00, b00, c00, lambda0, x0, y0, a0, b0, c0, resampleStream = {
                    point: point,
                    lineStart: lineStart,
                    lineEnd: lineEnd,
                    polygonStart: function() {
                        stream.polygonStart(), resampleStream.lineStart = ringStart;
                    },
                    polygonEnd: function() {
                        stream.polygonEnd(), resampleStream.lineStart = lineStart;
                    }
                };
                return resampleStream;
            };
        }
        function projection(project) {
            return projectionMutator(function() {
                return project;
            })();
        }
        function projectionMutator(projectAt) {
            function projection(point) {
                return point = projectRotate(point[0] * radians, point[1] * radians), [ point[0] * k + dx, dy - point[1] * k ];
            }
            function invert(point) {
                return (point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k)) && [ point[0] * degrees$1, point[1] * degrees$1 ];
            }
            function projectTransform(x, y) {
                return x = project(x, y), [ x[0] * k + dx, dy - x[1] * k ];
            }
            function recenter() {
                projectRotate = compose(rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma), project);
                var center = project(lambda, phi);
                return dx = x - center[0] * k, dy = y + center[1] * k, reset();
            }
            function reset() {
                return cache = cacheStream = null, projection;
            }
            var project, dx, dy, rotate, projectRotate, y0, x1, y1, cache, cacheStream, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, theta = null, preclip = clipAntimeridian, x0 = null, postclip = identity$4, delta2 = .5, projectResample = resample(projectTransform, delta2);
            return projection.stream = function(stream) {
                return cache && cacheStream === stream ? cache : cache = transformRadians(preclip(rotate, projectResample(postclip(cacheStream = stream))));
            }, projection.clipAngle = function(_) {
                return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians, 6 * radians) : (theta = null, 
                clipAntimeridian), reset()) : theta * degrees$1;
            }, projection.clipExtent = function(_) {
                return arguments.length ? (postclip = null == _ ? (x0 = y0 = x1 = y1 = null, identity$4) : clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), 
                reset()) : null == x0 ? null : [ [ x0, y0 ], [ x1, y1 ] ];
            }, projection.scale = function(_) {
                return arguments.length ? (k = +_, recenter()) : k;
            }, projection.translate = function(_) {
                return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [ x, y ];
            }, projection.center = function(_) {
                return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, 
                recenter()) : [ lambda * degrees$1, phi * degrees$1 ];
            }, projection.rotate = function(_) {
                return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, 
                deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [ deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1 ];
            }, projection.precision = function(_) {
                return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), 
                reset()) : sqrt(delta2);
            }, projection.fitExtent = function(extent, object) {
                return fitExtent(projection, extent, object);
            }, projection.fitSize = function(size, object) {
                return fitSize(projection, size, object);
            }, function() {
                return project = projectAt.apply(this, arguments), projection.invert = project.invert && invert, 
                recenter();
            };
        }
        function conicProjection(projectAt) {
            var phi0 = 0, phi1 = pi$3 / 3, m = projectionMutator(projectAt), p = m(phi0, phi1);
            return p.parallels = function(_) {
                return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [ phi0 * degrees$1, phi1 * degrees$1 ];
            }, p;
        }
        function cylindricalEqualAreaRaw(phi0) {
            function forward(lambda, phi) {
                return [ lambda * cosPhi0, sin$1(phi) / cosPhi0 ];
            }
            var cosPhi0 = cos$1(phi0);
            return forward.invert = function(x, y) {
                return [ x / cosPhi0, asin(y * cosPhi0) ];
            }, forward;
        }
        function conicEqualAreaRaw(y0, y1) {
            function project(x, y) {
                var r = sqrt(c - 2 * n * sin$1(y)) / n;
                return [ r * sin$1(x *= n), r0 - r * cos$1(x) ];
            }
            var sy0 = sin$1(y0), n = (sy0 + sin$1(y1)) / 2;
            if (abs(n) < epsilon$2) return cylindricalEqualAreaRaw(y0);
            var c = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c) / n;
            return project.invert = function(x, y) {
                var r0y = r0 - y;
                return [ atan2(x, abs(r0y)) / n * sign(r0y), asin((c - (x * x + r0y * r0y) * n * n) / (2 * n)) ];
            }, project;
        }
        function multiplex(streams) {
            var n = streams.length;
            return {
                point: function(x, y) {
                    for (var i = -1; ++i < n; ) streams[i].point(x, y);
                },
                sphere: function() {
                    for (var i = -1; ++i < n; ) streams[i].sphere();
                },
                lineStart: function() {
                    for (var i = -1; ++i < n; ) streams[i].lineStart();
                },
                lineEnd: function() {
                    for (var i = -1; ++i < n; ) streams[i].lineEnd();
                },
                polygonStart: function() {
                    for (var i = -1; ++i < n; ) streams[i].polygonStart();
                },
                polygonEnd: function() {
                    for (var i = -1; ++i < n; ) streams[i].polygonEnd();
                }
            };
        }
        function azimuthalRaw(scale) {
            return function(x, y) {
                var cx = cos$1(x), cy = cos$1(y), k = scale(cx * cy);
                return [ k * cy * sin$1(x), k * sin$1(y) ];
            };
        }
        function azimuthalInvert(angle) {
            return function(x, y) {
                var z = sqrt(x * x + y * y), c = angle(z), sc = sin$1(c), cc = cos$1(c);
                return [ atan2(x * sc, z * cc), asin(z && y * sc / z) ];
            };
        }
        function mercatorRaw(lambda, phi) {
            return [ lambda, log(tan((halfPi$2 + phi) / 2)) ];
        }
        function mercatorProjection(project) {
            function reclip() {
                var k = pi$3 * scale(), t = m(rotation(m.rotate()).invert([ 0, 0 ]));
                return clipExtent(null == x0 ? [ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ] : project === mercatorRaw ? [ [ Math.max(t[0] - k, x0), y0 ], [ Math.min(t[0] + k, x1), y1 ] ] : [ [ x0, Math.max(t[1] - k, y0) ], [ x1, Math.min(t[1] + k, y1) ] ]);
            }
            var y0, x1, y1, m = projection(project), center = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x0 = null;
            return m.scale = function(_) {
                return arguments.length ? (scale(_), reclip()) : scale();
            }, m.translate = function(_) {
                return arguments.length ? (translate(_), reclip()) : translate();
            }, m.center = function(_) {
                return arguments.length ? (center(_), reclip()) : center();
            }, m.clipExtent = function(_) {
                return arguments.length ? (null == _ ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], 
                y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : null == x0 ? null : [ [ x0, y0 ], [ x1, y1 ] ];
            }, reclip();
        }
        function tany(y) {
            return tan((halfPi$2 + y) / 2);
        }
        function conicConformalRaw(y0, y1) {
            function project(x, y) {
                f > 0 ? y < -halfPi$2 + epsilon$2 && (y = -halfPi$2 + epsilon$2) : y > halfPi$2 - epsilon$2 && (y = halfPi$2 - epsilon$2);
                var r = f / pow(tany(y), n);
                return [ r * sin$1(n * x), f - r * cos$1(n * x) ];
            }
            var cy0 = cos$1(y0), n = y0 === y1 ? sin$1(y0) : log(cy0 / cos$1(y1)) / log(tany(y1) / tany(y0)), f = cy0 * pow(tany(y0), n) / n;
            return n ? (project.invert = function(x, y) {
                var fy = f - y, r = sign(n) * sqrt(x * x + fy * fy);
                return [ atan2(x, abs(fy)) / n * sign(fy), 2 * atan(pow(f / r, 1 / n)) - halfPi$2 ];
            }, project) : mercatorRaw;
        }
        function equirectangularRaw(lambda, phi) {
            return [ lambda, phi ];
        }
        function conicEquidistantRaw(y0, y1) {
            function project(x, y) {
                var gy = g - y, nx = n * x;
                return [ gy * sin$1(nx), g - gy * cos$1(nx) ];
            }
            var cy0 = cos$1(y0), n = y0 === y1 ? sin$1(y0) : (cy0 - cos$1(y1)) / (y1 - y0), g = cy0 / n + y0;
            return abs(n) < epsilon$2 ? equirectangularRaw : (project.invert = function(x, y) {
                var gy = g - y;
                return [ atan2(x, abs(gy)) / n * sign(gy), g - sign(n) * sqrt(x * x + gy * gy) ];
            }, project);
        }
        function gnomonicRaw(x, y) {
            var cy = cos$1(y), k = cos$1(x) * cy;
            return [ cy * sin$1(x) / k, sin$1(y) / k ];
        }
        function scaleTranslate(kx, ky, tx, ty) {
            return 1 === kx && 1 === ky && 0 === tx && 0 === ty ? identity$4 : transformer({
                point: function(x, y) {
                    this.stream.point(x * kx + tx, y * ky + ty);
                }
            });
        }
        function orthographicRaw(x, y) {
            return [ cos$1(y) * sin$1(x), sin$1(y) ];
        }
        function stereographicRaw(x, y) {
            var cy = cos$1(y), k = 1 + cos$1(x) * cy;
            return [ cy * sin$1(x) / k, sin$1(y) / k ];
        }
        function transverseMercatorRaw(lambda, phi) {
            return [ log(tan((halfPi$2 + phi) / 2)), -lambda ];
        }
        function defaultSeparation(a, b) {
            return a.parent === b.parent ? 1 : 2;
        }
        function meanX(children) {
            return children.reduce(meanXReduce, 0) / children.length;
        }
        function meanXReduce(x, c) {
            return x + c.x;
        }
        function maxY(children) {
            return 1 + children.reduce(maxYReduce, 0);
        }
        function maxYReduce(y, c) {
            return Math.max(y, c.y);
        }
        function leafLeft(node) {
            for (var children; children = node.children; ) node = children[0];
            return node;
        }
        function leafRight(node) {
            for (var children; children = node.children; ) node = children[children.length - 1];
            return node;
        }
        function count(node) {
            var sum = 0, children = node.children, i = children && children.length;
            if (i) for (;--i >= 0; ) sum += children[i].value; else sum = 1;
            node.value = sum;
        }
        function leastCommonAncestor(a, b) {
            if (a === b) return a;
            var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
            for (a = aNodes.pop(), b = bNodes.pop(); a === b; ) c = a, a = aNodes.pop(), b = bNodes.pop();
            return c;
        }
        function hierarchy(data, children) {
            var node, child, childs, i, n, root = new Node(data), valued = +data.value && (root.value = data.value), nodes = [ root ];
            for (null == children && (children = defaultChildren); node = nodes.pop(); ) if (valued && (node.value = +node.data.value), 
            (childs = children(node.data)) && (n = childs.length)) for (node.children = new Array(n), 
            i = n - 1; i >= 0; --i) nodes.push(child = node.children[i] = new Node(childs[i])), 
            child.parent = node, child.depth = node.depth + 1;
            return root.eachBefore(computeHeight);
        }
        function node_copy() {
            return hierarchy(this).eachBefore(copyData);
        }
        function defaultChildren(d) {
            return d.children;
        }
        function copyData(node) {
            node.data = node.data.data;
        }
        function computeHeight(node) {
            var height = 0;
            do {
                node.height = height;
            } while ((node = node.parent) && node.height < ++height);
        }
        function Node(data) {
            this.data = data, this.depth = this.height = 0, this.parent = null;
        }
        function shuffle$1(array) {
            for (var t, i, m = array.length; m; ) i = Math.random() * m-- | 0, t = array[m], 
            array[m] = array[i], array[i] = t;
            return array;
        }
        function extendBasis(B, p) {
            var i, j;
            if (enclosesWeakAll(p, B)) return [ p ];
            for (i = 0; i < B.length; ++i) if (enclosesNot(p, B[i]) && enclosesWeakAll(encloseBasis2(B[i], p), B)) return [ B[i], p ];
            for (i = 0; i < B.length - 1; ++i) for (j = i + 1; j < B.length; ++j) if (enclosesNot(encloseBasis2(B[i], B[j]), p) && enclosesNot(encloseBasis2(B[i], p), B[j]) && enclosesNot(encloseBasis2(B[j], p), B[i]) && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) return [ B[i], B[j], p ];
            throw new Error();
        }
        function enclosesNot(a, b) {
            var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
            return dr < 0 || dr * dr < dx * dx + dy * dy;
        }
        function enclosesWeak(a, b) {
            var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
            return dr > 0 && dr * dr > dx * dx + dy * dy;
        }
        function enclosesWeakAll(a, B) {
            for (var i = 0; i < B.length; ++i) if (!enclosesWeak(a, B[i])) return !1;
            return !0;
        }
        function encloseBasis(B) {
            switch (B.length) {
              case 1:
                return encloseBasis1(B[0]);

              case 2:
                return encloseBasis2(B[0], B[1]);

              case 3:
                return encloseBasis3(B[0], B[1], B[2]);
            }
        }
        function encloseBasis1(a) {
            return {
                x: a.x,
                y: a.y,
                r: a.r
            };
        }
        function encloseBasis2(a, b) {
            var x1 = a.x, y1 = a.y, r1 = a.r, x2 = b.x, y2 = b.y, r2 = b.r, x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1, l = Math.sqrt(x21 * x21 + y21 * y21);
            return {
                x: (x1 + x2 + x21 / l * r21) / 2,
                y: (y1 + y2 + y21 / l * r21) / 2,
                r: (l + r1 + r2) / 2
            };
        }
        function encloseBasis3(a, b, c) {
            var x1 = a.x, y1 = a.y, r1 = a.r, x2 = b.x, y2 = b.y, r2 = b.r, x3 = c.x, y3 = c.y, r3 = c.r, a2 = x1 - x2, a3 = x1 - x3, b2 = y1 - y2, b3 = y1 - y3, c2 = r2 - r1, c3 = r3 - r1, d1 = x1 * x1 + y1 * y1 - r1 * r1, d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2, d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3, ab = a3 * b2 - a2 * b3, xa = (b2 * d3 - b3 * d2) / (2 * ab) - x1, xb = (b3 * c2 - b2 * c3) / ab, ya = (a3 * d2 - a2 * d3) / (2 * ab) - y1, yb = (a2 * c3 - a3 * c2) / ab, A = xb * xb + yb * yb - 1, B = 2 * (r1 + xa * xb + ya * yb), C = xa * xa + ya * ya - r1 * r1, r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
            return {
                x: x1 + xa + xb * r,
                y: y1 + ya + yb * r,
                r: r
            };
        }
        function place(a, b, c) {
            var ax = a.x, ay = a.y, da = b.r + c.r, db = a.r + c.r, dx = b.x - ax, dy = b.y - ay, dc = dx * dx + dy * dy;
            if (dc) {
                var x = .5 + ((db *= db) - (da *= da)) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
                c.x = ax + x * dx + y * dy, c.y = ay + x * dy - y * dx;
            } else c.x = ax + db, c.y = ay;
        }
        function intersects(a, b) {
            var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
            return dr * dr - 1e-6 > dx * dx + dy * dy;
        }
        function score(node) {
            var a = node._, b = node.next._, ab = a.r + b.r, dx = (a.x * b.r + b.x * a.r) / ab, dy = (a.y * b.r + b.y * a.r) / ab;
            return dx * dx + dy * dy;
        }
        function Node$1(circle) {
            this._ = circle, this.next = null, this.previous = null;
        }
        function packEnclose(circles) {
            if (!(n = circles.length)) return 0;
            var a, b, c, n, aa, ca, i, j, k, sj, sk;
            if (a = circles[0], a.x = 0, a.y = 0, !(n > 1)) return a.r;
            if (b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0, !(n > 2)) return a.r + b.r;
            place(b, a, c = circles[2]), a = new Node$1(a), b = new Node$1(b), c = new Node$1(c), 
            a.next = c.previous = b, b.next = a.previous = c, c.next = b.previous = a;
            pack: for (i = 3; i < n; ++i) {
                place(a._, b._, c = circles[i]), c = new Node$1(c), j = b.next, k = a.previous, 
                sj = b._.r, sk = a._.r;
                do {
                    if (sj <= sk) {
                        if (intersects(j._, c._)) {
                            b = j, a.next = b, b.previous = a, --i;
                            continue pack;
                        }
                        sj += j._.r, j = j.next;
                    } else {
                        if (intersects(k._, c._)) {
                            a = k, a.next = b, b.previous = a, --i;
                            continue pack;
                        }
                        sk += k._.r, k = k.previous;
                    }
                } while (j !== k.next);
                for (c.previous = a, c.next = b, a.next = b.previous = b = c, aa = score(a); (c = c.next) !== b; ) (ca = score(c)) < aa && (a = c, 
                aa = ca);
                b = a.next;
            }
            for (a = [ b._ ], c = b; (c = c.next) !== b; ) a.push(c._);
            for (c = enclose(a), i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;
            return c.r;
        }
        function optional(f) {
            return null == f ? null : blizzardd(f);
        }
        function blizzardd(f) {
            if ("function" !== typeof f) throw new Error();
            return f;
        }
        function constantZero() {
            return 0;
        }
        function defaultRadius$1(d) {
            return Math.sqrt(d.value);
        }
        function radiusLeaf(radius) {
            return function(node) {
                node.children || (node.r = Math.max(0, +radius(node) || 0));
            };
        }
        function packChildren(padding, k) {
            return function(node) {
                if (children = node.children) {
                    var children, i, e, n = children.length, r = padding(node) * k || 0;
                    if (r) for (i = 0; i < n; ++i) children[i].r += r;
                    if (e = packEnclose(children), r) for (i = 0; i < n; ++i) children[i].r -= r;
                    node.r = e + r;
                }
            };
        }
        function translateChild(k) {
            return function(node) {
                var parent = node.parent;
                node.r *= k, parent && (node.x = parent.x + k * node.x, node.y = parent.y + k * node.y);
            };
        }
        function defaultId(d) {
            return d.id;
        }
        function defaultParentId(d) {
            return d.parentId;
        }
        function defaultSeparation$1(a, b) {
            return a.parent === b.parent ? 1 : 2;
        }
        function nextLeft(v) {
            var children = v.children;
            return children ? children[0] : v.t;
        }
        function nextRight(v) {
            var children = v.children;
            return children ? children[children.length - 1] : v.t;
        }
        function moveSubtree(wm, wp, shift) {
            var change = shift / (wp.i - wm.i);
            wp.c -= change, wp.s += shift, wm.c += change, wp.z += shift, wp.m += shift;
        }
        function executeShifts(v) {
            for (var w, shift = 0, change = 0, children = v.children, i = children.length; --i >= 0; ) w = children[i], 
            w.z += shift, w.m += shift, shift += w.s + (change += w.c);
        }
        function nextAncestor(vim, v, ancestor) {
            return vim.a.parent === v.parent ? vim.a : ancestor;
        }
        function TreeNode(node, i) {
            this._ = node, this.parent = null, this.children = null, this.A = null, this.a = this, 
            this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = i;
        }
        function treeRoot(root) {
            for (var node, child, children, i, n, tree = new TreeNode(root, 0), nodes = [ tree ]; node = nodes.pop(); ) if (children = node._.children) for (node.children = new Array(n = children.length), 
            i = n - 1; i >= 0; --i) nodes.push(child = node.children[i] = new TreeNode(children[i], i)), 
            child.parent = node;
            return (tree.parent = new TreeNode(null, 0)).children = [ tree ], tree;
        }
        function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
            for (var row, nodeValue, dx, dy, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta, rows = [], nodes = parent.children, i0 = 0, i1 = 0, n = nodes.length, value = parent.value; i0 < n; ) {
                dx = x1 - x0, dy = y1 - y0;
                do {
                    sumValue = nodes[i1++].value;
                } while (!sumValue && i1 < n);
                for (minValue = maxValue = sumValue, alpha = Math.max(dy / dx, dx / dy) / (value * ratio), 
                beta = sumValue * sumValue * alpha, minRatio = Math.max(maxValue / beta, beta / minValue); i1 < n; ++i1) {
                    if (sumValue += nodeValue = nodes[i1].value, nodeValue < minValue && (minValue = nodeValue), 
                    nodeValue > maxValue && (maxValue = nodeValue), beta = sumValue * sumValue * alpha, 
                    (newRatio = Math.max(maxValue / beta, beta / minValue)) > minRatio) {
                        sumValue -= nodeValue;
                        break;
                    }
                    minRatio = newRatio;
                }
                rows.push(row = {
                    value: sumValue,
                    dice: dx < dy,
                    children: nodes.slice(i0, i1)
                }), row.dice ? treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1) : treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1), 
                value -= sumValue, i0 = i1;
            }
            return rows;
        }
        function lexicographicOrder(a, b) {
            return a[0] - b[0] || a[1] - b[1];
        }
        function computeUpperHullIndexes(points) {
            for (var n = points.length, indexes = [ 0, 1 ], size = 2, i = 2; i < n; ++i) {
                for (;size > 1 && cross$1(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0; ) --size;
                indexes[size++] = i;
            }
            return indexes.slice(0, size);
        }
        function Queue(size) {
            this._size = size, this._call = this._error = null, this._tasks = [], this._data = [], 
            this._waiting = this._active = this._ended = this._start = 0;
        }
        function poke$1(q) {
            if (!q._start) try {
                start$1(q);
            } catch (e) {
                if (q._tasks[q._ended + q._active - 1]) abort(q, e); else if (!q._data) throw e;
            }
        }
        function start$1(q) {
            for (;q._start = q._waiting && q._active < q._size; ) {
                var i = q._ended + q._active, t = q._tasks[i], j = t.length - 1, c = t[j];
                t[j] = end(q, i), --q._waiting, ++q._active, t = c.apply(null, t), q._tasks[i] && (q._tasks[i] = t || noabort);
            }
        }
        function end(q, i) {
            return function(e, r) {
                q._tasks[i] && (--q._active, ++q._ended, q._tasks[i] = null, null == q._error && (null != e ? abort(q, e) : (q._data[i] = r, 
                q._waiting ? poke$1(q) : maybeNotify(q))));
            };
        }
        function abort(q, e) {
            var t, i = q._tasks.length;
            for (q._error = e, q._data = void 0, q._waiting = NaN; --i >= 0; ) if ((t = q._tasks[i]) && (q._tasks[i] = null, 
            t.abort)) try {
                t.abort();
            } catch (e) {}
            q._active = NaN, maybeNotify(q);
        }
        function maybeNotify(q) {
            if (!q._active && q._call) {
                var d = q._data;
                q._data = void 0, q._call(q._error, d);
            }
        }
        function queue(concurrency) {
            if (null == concurrency) concurrency = 1 / 0; else if (!((concurrency = +concurrency) >= 1)) throw new Error("invalid concurrency");
            return new Queue(concurrency);
        }
        function fixCallback(callback) {
            return function(error, xhr) {
                callback(null == error ? xhr : null);
            };
        }
        function hasResponse(xhr) {
            var type = xhr.responseType;
            return type && "text" !== type ? xhr.response : xhr.responseText;
        }
        function responseOf(parse, row) {
            return function(request$$1) {
                return parse(request$$1.responseText, row);
            };
        }
        function ordinal(range) {
            function scale(d) {
                var key = d + "", i = index.get(key);
                if (!i) {
                    if (unknown !== implicit) return unknown;
                    index.set(key, i = domain.push(d));
                }
                return range[(i - 1) % range.length];
            }
            var index = map$1(), domain = [], unknown = implicit;
            return range = null == range ? [] : slice$5.call(range), scale.domain = function(_) {
                if (!arguments.length) return domain.slice();
                domain = [], index = map$1();
                for (var d, key, i = -1, n = _.length; ++i < n; ) index.has(key = (d = _[i]) + "") || index.set(key, domain.push(d));
                return scale;
            }, scale.range = function(_) {
                return arguments.length ? (range = slice$5.call(_), scale) : range.slice();
            }, scale.unknown = function(_) {
                return arguments.length ? (unknown = _, scale) : unknown;
            }, scale.copy = function() {
                return ordinal().domain(domain).range(range).unknown(unknown);
            }, scale;
        }
        function band() {
            function rescale() {
                var n = domain().length, reverse = range[1] < range[0], start = range[reverse - 0], stop = range[1 - reverse];
                step = (stop - start) / Math.max(1, n - paddingInner + 2 * paddingOuter), round && (step = Math.floor(step)), 
                start += (stop - start - step * (n - paddingInner)) * align, bandwidth = step * (1 - paddingInner), 
                round && (start = Math.round(start), bandwidth = Math.round(bandwidth));
                var values = sequence(n).map(function(i) {
                    return start + step * i;
                });
                return ordinalRange(reverse ? values.reverse() : values);
            }
            var step, bandwidth, scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, range = [ 0, 1 ], round = !1, paddingInner = 0, paddingOuter = 0, align = .5;
            return delete scale.unknown, scale.domain = function(_) {
                return arguments.length ? (domain(_), rescale()) : domain();
            }, scale.range = function(_) {
                return arguments.length ? (range = [ +_[0], +_[1] ], rescale()) : range.slice();
            }, scale.rangeRound = function(_) {
                return range = [ +_[0], +_[1] ], round = !0, rescale();
            }, scale.bandwidth = function() {
                return bandwidth;
            }, scale.step = function() {
                return step;
            }, scale.round = function(_) {
                return arguments.length ? (round = !!_, rescale()) : round;
            }, scale.padding = function(_) {
                return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), 
                rescale()) : paddingInner;
            }, scale.paddingInner = function(_) {
                return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
            }, scale.paddingOuter = function(_) {
                return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
            }, scale.align = function(_) {
                return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
            }, scale.copy = function() {
                return band().domain(domain()).range(range).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
            }, rescale();
        }
        function pointish(scale) {
            var copy = scale.copy;
            return scale.padding = scale.paddingOuter, delete scale.paddingInner, delete scale.paddingOuter, 
            scale.copy = function() {
                return pointish(copy());
            }, scale;
        }
        function point$1() {
            return pointish(band().paddingInner(1));
        }
        function deinterpolateLinear(a, b) {
            return (b -= a = +a) ? function(x) {
                return (x - a) / b;
            } : constant$9(b);
        }
        function deinterpolateClamp(deinterpolate) {
            return function(a, b) {
                var d = deinterpolate(a = +a, b = +b);
                return function(x) {
                    return x <= a ? 0 : x >= b ? 1 : d(x);
                };
            };
        }
        function reinterpolateClamp(reinterpolate$$1) {
            return function(a, b) {
                var r = reinterpolate$$1(a = +a, b = +b);
                return function(t) {
                    return t <= 0 ? a : t >= 1 ? b : r(t);
                };
            };
        }
        function bimap(domain, range, deinterpolate, reinterpolate$$1) {
            var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
            return d1 < d0 ? (d0 = deinterpolate(d1, d0), r0 = reinterpolate$$1(r1, r0)) : (d0 = deinterpolate(d0, d1), 
            r0 = reinterpolate$$1(r0, r1)), function(x) {
                return r0(d0(x));
            };
        }
        function polymap(domain, range, deinterpolate, reinterpolate$$1) {
            var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
            for (domain[j] < domain[0] && (domain = domain.slice().reverse(), range = range.slice().reverse()); ++i < j; ) d[i] = deinterpolate(domain[i], domain[i + 1]), 
            r[i] = reinterpolate$$1(range[i], range[i + 1]);
            return function(x) {
                var i = bisectRight(domain, x, 1, j) - 1;
                return r[i](d[i](x));
            };
        }
        function copy(source, target) {
            return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp());
        }
        function continuous(deinterpolate, reinterpolate$$1) {
            function rescale() {
                return piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap, 
                output = input = null, scale;
            }
            function scale(x) {
                return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
            }
            var piecewise, output, input, domain = unit, range = unit, interpolate = interpolateValue, clamp = !1;
            return scale.invert = function(y) {
                return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate$$1) : reinterpolate$$1)))(+y);
            }, scale.domain = function(_) {
                return arguments.length ? (domain = map$3.call(_, number$2), rescale()) : domain.slice();
            }, scale.range = function(_) {
                return arguments.length ? (range = slice$5.call(_), rescale()) : range.slice();
            }, scale.rangeRound = function(_) {
                return range = slice$5.call(_), interpolate = interpolateRound, rescale();
            }, scale.clamp = function(_) {
                return arguments.length ? (clamp = !!_, rescale()) : clamp;
            }, scale.interpolate = function(_) {
                return arguments.length ? (interpolate = _, rescale()) : interpolate;
            }, rescale();
        }
        function linearish(scale) {
            var domain = scale.domain;
            return scale.ticks = function(count) {
                var d = domain();
                return ticks(d[0], d[d.length - 1], null == count ? 10 : count);
            }, scale.tickFormat = function(count, specifier) {
                return tickFormat(domain(), count, specifier);
            }, scale.nice = function(count) {
                null == count && (count = 10);
                var step, d = domain(), i0 = 0, i1 = d.length - 1, start = d[i0], stop = d[i1];
                return stop < start && (step = start, start = stop, stop = step, step = i0, i0 = i1, 
                i1 = step), step = tickIncrement(start, stop, count), step > 0 ? (start = Math.floor(start / step) * step, 
                stop = Math.ceil(stop / step) * step, step = tickIncrement(start, stop, count)) : step < 0 && (start = Math.ceil(start * step) / step, 
                stop = Math.floor(stop * step) / step, step = tickIncrement(start, stop, count)), 
                step > 0 ? (d[i0] = Math.floor(start / step) * step, d[i1] = Math.ceil(stop / step) * step, 
                domain(d)) : step < 0 && (d[i0] = Math.ceil(start * step) / step, d[i1] = Math.floor(stop * step) / step, 
                domain(d)), scale;
            }, scale;
        }
        function linear$2() {
            var scale = continuous(deinterpolateLinear, reinterpolate);
            return scale.copy = function() {
                return copy(scale, linear$2());
            }, linearish(scale);
        }
        function identity$6() {
            function scale(x) {
                return +x;
            }
            var domain = [ 0, 1 ];
            return scale.invert = scale, scale.domain = scale.range = function(_) {
                return arguments.length ? (domain = map$3.call(_, number$2), scale) : domain.slice();
            }, scale.copy = function() {
                return identity$6().domain(domain);
            }, linearish(scale);
        }
        function deinterpolate(a, b) {
            return (b = Math.log(b / a)) ? function(x) {
                return Math.log(x / a) / b;
            } : constant$9(b);
        }
        function reinterpolate$1(a, b) {
            return a < 0 ? function(t) {
                return -Math.pow(-b, t) * Math.pow(-a, 1 - t);
            } : function(t) {
                return Math.pow(b, t) * Math.pow(a, 1 - t);
            };
        }
        function pow10(x) {
            return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
        }
        function powp(base) {
            return 10 === base ? pow10 : base === Math.E ? Math.exp : function(x) {
                return Math.pow(base, x);
            };
        }
        function logp(base) {
            return base === Math.E ? Math.log : 10 === base && Math.log10 || 2 === base && Math.log2 || (base = Math.log(base), 
            function(x) {
                return Math.log(x) / base;
            });
        }
        function reflect(f) {
            return function(x) {
                return -f(-x);
            };
        }
        function log$1() {
            function rescale() {
                return logs = logp(base), pows = powp(base), domain()[0] < 0 && (logs = reflect(logs), 
                pows = reflect(pows)), scale;
            }
            var scale = continuous(deinterpolate, reinterpolate$1).domain([ 1, 10 ]), domain = scale.domain, base = 10, logs = logp(10), pows = powp(10);
            return scale.base = function(_) {
                return arguments.length ? (base = +_, rescale()) : base;
            }, scale.domain = function(_) {
                return arguments.length ? (domain(_), rescale()) : domain();
            }, scale.ticks = function(count) {
                var r, d = domain(), u = d[0], v = d[d.length - 1];
                (r = v < u) && (i = u, u = v, v = i);
                var p, k, t, i = logs(u), j = logs(v), n = null == count ? 10 : +count, z = [];
                if (!(base % 1) && j - i < n) {
                    if (i = Math.round(i) - 1, j = Math.round(j) + 1, u > 0) {
                        for (;i < j; ++i) for (k = 1, p = pows(i); k < base; ++k) if (!((t = p * k) < u)) {
                            if (t > v) break;
                            z.push(t);
                        }
                    } else for (;i < j; ++i) for (k = base - 1, p = pows(i); k >= 1; --k) if (!((t = p * k) < u)) {
                        if (t > v) break;
                        z.push(t);
                    }
                } else z = ticks(i, j, Math.min(j - i, n)).map(pows);
                return r ? z.reverse() : z;
            }, scale.tickFormat = function(count, specifier) {
                if (null == specifier && (specifier = 10 === base ? ".0e" : ","), "function" !== typeof specifier && (specifier = pear.format(specifier)), 
                count === 1 / 0) return specifier;
                null == count && (count = 10);
                var k = Math.max(1, base * count / scale.ticks().length);
                return function(d) {
                    var i = d / pows(Math.round(logs(d)));
                    return i * base < base - .5 && (i *= base), i <= k ? specifier(d) : "";
                };
            }, scale.nice = function() {
                return domain(nice(domain(), {
                    floor: function(x) {
                        return pows(Math.floor(logs(x)));
                    },
                    ceil: function(x) {
                        return pows(Math.ceil(logs(x)));
                    }
                }));
            }, scale.copy = function() {
                return copy(scale, log$1().base(base));
            }, scale;
        }
        function raise$1(x, exponent) {
            return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
        }
        function pow$1() {
            function deinterpolate(a, b) {
                return (b = raise$1(b, exponent) - (a = raise$1(a, exponent))) ? function(x) {
                    return (raise$1(x, exponent) - a) / b;
                } : constant$9(b);
            }
            function reinterpolate(a, b) {
                return b = raise$1(b, exponent) - (a = raise$1(a, exponent)), function(t) {
                    return raise$1(a + b * t, 1 / exponent);
                };
            }
            var exponent = 1, scale = continuous(deinterpolate, reinterpolate), domain = scale.domain;
            return scale.exponent = function(_) {
                return arguments.length ? (exponent = +_, domain(domain())) : exponent;
            }, scale.copy = function() {
                return copy(scale, pow$1().exponent(exponent));
            }, linearish(scale);
        }
        function sqrt$1() {
            return pow$1().exponent(.5);
        }
        function quantile() {
            function rescale() {
                var i = 0, n = Math.max(1, range.length);
                for (thresholds = new Array(n - 1); ++i < n; ) thresholds[i - 1] = threshold(domain, i / n);
                return scale;
            }
            function scale(x) {
                if (!isNaN(x = +x)) return range[bisectRight(thresholds, x)];
            }
            var domain = [], range = [], thresholds = [];
            return scale.invertExtent = function(y) {
                var i = range.indexOf(y);
                return i < 0 ? [ NaN, NaN ] : [ i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1] ];
            }, scale.domain = function(_) {
                if (!arguments.length) return domain.slice();
                domain = [];
                for (var d, i = 0, n = _.length; i < n; ++i) null == (d = _[i]) || isNaN(d = +d) || domain.push(d);
                return domain.sort(ascending), rescale();
            }, scale.range = function(_) {
                return arguments.length ? (range = slice$5.call(_), rescale()) : range.slice();
            }, scale.quantiles = function() {
                return thresholds.slice();
            }, scale.copy = function() {
                return quantile().domain(domain).range(range);
            }, scale;
        }
        function quantize$1() {
            function scale(x) {
                if (x <= x) return range[bisectRight(domain, x, 0, n)];
            }
            function rescale() {
                var i = -1;
                for (domain = new Array(n); ++i < n; ) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
                return scale;
            }
            var x0 = 0, x1 = 1, n = 1, domain = [ .5 ], range = [ 0, 1 ];
            return scale.domain = function(_) {
                return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [ x0, x1 ];
            }, scale.range = function(_) {
                return arguments.length ? (n = (range = slice$5.call(_)).length - 1, rescale()) : range.slice();
            }, scale.invertExtent = function(y) {
                var i = range.indexOf(y);
                return i < 0 ? [ NaN, NaN ] : i < 1 ? [ x0, domain[0] ] : i >= n ? [ domain[n - 1], x1 ] : [ domain[i - 1], domain[i] ];
            }, scale.copy = function() {
                return quantize$1().domain([ x0, x1 ]).range(range);
            }, linearish(scale);
        }
        function threshold$1() {
            function scale(x) {
                if (x <= x) return range[bisectRight(domain, x, 0, n)];
            }
            var domain = [ .5 ], range = [ 0, 1 ], n = 1;
            return scale.domain = function(_) {
                return arguments.length ? (domain = slice$5.call(_), n = Math.min(domain.length, range.length - 1), 
                scale) : domain.slice();
            }, scale.range = function(_) {
                return arguments.length ? (range = slice$5.call(_), n = Math.min(domain.length, range.length - 1), 
                scale) : range.slice();
            }, scale.invertExtent = function(y) {
                var i = range.indexOf(y);
                return [ domain[i - 1], domain[i] ];
            }, scale.copy = function() {
                return threshold$1().domain(domain).range(range);
            }, scale;
        }
        function newInterval(floori, offseti, count, field) {
            function interval(date) {
                return floori(date = new Date(+date)), date;
            }
            return interval.floor = interval, interval.ceil = function(date) {
                return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
            }, interval.round = function(date) {
                var d0 = interval(date), d1 = interval.ceil(date);
                return date - d0 < d1 - date ? d0 : d1;
            }, interval.offset = function(date, step) {
                return offseti(date = new Date(+date), null == step ? 1 : Math.floor(step)), date;
            }, interval.range = function(start, stop, step) {
                var range = [];
                if (start = interval.ceil(start), step = null == step ? 1 : Math.floor(step), !(start < stop) || !(step > 0)) return range;
                do {
                    range.push(new Date(+start));
                } while (offseti(start, step), floori(start), start < stop);
                return range;
            }, interval.filter = function(test) {
                return newInterval(function(date) {
                    if (date >= date) for (;floori(date), !test(date); ) date.setTime(date - 1);
                }, function(date, step) {
                    if (date >= date) if (step < 0) for (;++step <= 0; ) for (;offseti(date, -1), !test(date); ) ; else for (;--step >= 0; ) for (;offseti(date, 1), 
                    !test(date); ) ;
                });
            }, count && (interval.count = function(start, end) {
                return t0$1.setTime(+start), t1$1.setTime(+end), floori(t0$1), floori(t1$1), Math.floor(count(t0$1, t1$1));
            }, interval.every = function(step) {
                return step = Math.floor(step), isFinite(step) && step > 0 ? step > 1 ? interval.filter(field ? function(d) {
                    return field(d) % step === 0;
                } : function(d) {
                    return interval.count(0, d) % step === 0;
                }) : interval : null;
            }), interval;
        }
        function weekday(i) {
            return newInterval(function(date) {
                date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7), date.setHours(0, 0, 0, 0);
            }, function(date, step) {
                date.setDate(date.getDate() + 7 * step);
            }, function(start, end) {
                return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationWeek$1;
            });
        }
        function utcWeekday(i) {
            return newInterval(function(date) {
                date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7), date.setUTCHours(0, 0, 0, 0);
            }, function(date, step) {
                date.setUTCDate(date.getUTCDate() + 7 * step);
            }, function(start, end) {
                return (end - start) / durationWeek$1;
            });
        }
        function localDate(d) {
            if (0 <= d.y && d.y < 100) {
                var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
                return date.setFullYear(d.y), date;
            }
            return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
        }
        function utcDate(d) {
            if (0 <= d.y && d.y < 100) {
                var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
                return date.setUTCFullYear(d.y), date;
            }
            return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
        }
        function newYear(y) {
            return {
                y: y,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            };
        }
        function formatLocale$1(locale) {
            function newFormat(specifier, formats) {
                return function(date) {
                    var c, pad, format, string = [], i = -1, j = 0, n = specifier.length;
                    for (date instanceof Date || (date = new Date(+date)); ++i < n; ) 37 === specifier.charCodeAt(i) && (string.push(specifier.slice(j, i)), 
                    null != (pad = pads[c = specifier.charAt(++i)]) ? c = specifier.charAt(++i) : pad = "e" === c ? " " : "0", 
                    (format = formats[c]) && (c = format(date, pad)), string.push(c), j = i + 1);
                    return string.push(specifier.slice(j, i)), string.join("");
                };
            }
            function newParse(specifier, newDate) {
                return function(string) {
                    var d = newYear(1900);
                    if (parseSpecifier(d, specifier, string += "", 0) != string.length) return null;
                    if ("p" in d && (d.H = d.H % 12 + 12 * d.p), "W" in d || "U" in d) {
                        "w" in d || (d.w = "W" in d ? 1 : 0);
                        var day$$1 = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
                        d.m = 0, d.d = "W" in d ? (d.w + 6) % 7 + 7 * d.W - (day$$1 + 5) % 7 : d.w + 7 * d.U - (day$$1 + 6) % 7;
                    }
                    return "Z" in d ? (d.H += d.Z / 100 | 0, d.M += d.Z % 100, utcDate(d)) : newDate(d);
                };
            }
            function parseSpecifier(d, specifier, string, j) {
                for (var c, parse, i = 0, n = specifier.length, m = string.length; i < n; ) {
                    if (j >= m) return -1;
                    if (37 === (c = specifier.charCodeAt(i++))) {
                        if (c = specifier.charAt(i++), !(parse = parses[c in pads ? specifier.charAt(i++) : c]) || (j = parse(d, string, j)) < 0) return -1;
                    } else if (c != string.charCodeAt(j++)) return -1;
                }
                return j;
            }
            function parsePeriod(d, string, i) {
                var n = periodRe.exec(string.slice(i));
                return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
            }
            function parseShortWeekday(d, string, i) {
                var n = shortWeekdayRe.exec(string.slice(i));
                return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
            }
            function parseWeekday(d, string, i) {
                var n = weekdayRe.exec(string.slice(i));
                return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
            }
            function parseShortMonth(d, string, i) {
                var n = shortMonthRe.exec(string.slice(i));
                return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
            }
            function parseMonth(d, string, i) {
                var n = monthRe.exec(string.slice(i));
                return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
            }
            function parseLocaleDateTime(d, string, i) {
                return parseSpecifier(d, locale_dateTime, string, i);
            }
            function parseLocaleDate(d, string, i) {
                return parseSpecifier(d, locale_date, string, i);
            }
            function parseLocaleTime(d, string, i) {
                return parseSpecifier(d, locale_time, string, i);
            }
            function formatShortWeekday(d) {
                return locale_shortWeekdays[d.getDay()];
            }
            function formatWeekday(d) {
                return locale_weekdays[d.getDay()];
            }
            function formatShortMonth(d) {
                return locale_shortMonths[d.getMonth()];
            }
            function formatMonth(d) {
                return locale_months[d.getMonth()];
            }
            function formatPeriod(d) {
                return locale_periods[+(d.getHours() >= 12)];
            }
            function formatUTCShortWeekday(d) {
                return locale_shortWeekdays[d.getUTCDay()];
            }
            function formatUTCWeekday(d) {
                return locale_weekdays[d.getUTCDay()];
            }
            function formatUTCShortMonth(d) {
                return locale_shortMonths[d.getUTCMonth()];
            }
            function formatUTCMonth(d) {
                return locale_months[d.getUTCMonth()];
            }
            function formatUTCPeriod(d) {
                return locale_periods[+(d.getUTCHours() >= 12)];
            }
            var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths, periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths), formats = {
                a: formatShortWeekday,
                A: formatWeekday,
                b: formatShortMonth,
                B: formatMonth,
                c: null,
                d: formatDayOfMonth,
                e: formatDayOfMonth,
                H: formatHour24,
                I: formatHour12,
                j: formatDayOfYear,
                L: formatMilliseconds,
                m: formatMonthNumber,
                M: formatMinutes,
                p: formatPeriod,
                S: formatSeconds,
                U: formatWeekNumberSunday,
                w: formatWeekdayNumber,
                W: formatWeekNumberMonday,
                x: null,
                X: null,
                y: formatYear,
                Y: formatFullYear,
                Z: formatZone,
                "%": formatLiteralPercent
            }, utcFormats = {
                a: formatUTCShortWeekday,
                A: formatUTCWeekday,
                b: formatUTCShortMonth,
                B: formatUTCMonth,
                c: null,
                d: formatUTCDayOfMonth,
                e: formatUTCDayOfMonth,
                H: formatUTCHour24,
                I: formatUTCHour12,
                j: formatUTCDayOfYear,
                L: formatUTCMilliseconds,
                m: formatUTCMonthNumber,
                M: formatUTCMinutes,
                p: formatUTCPeriod,
                S: formatUTCSeconds,
                U: formatUTCWeekNumberSunday,
                w: formatUTCWeekdayNumber,
                W: formatUTCWeekNumberMonday,
                x: null,
                X: null,
                y: formatUTCYear,
                Y: formatUTCFullYear,
                Z: formatUTCZone,
                "%": formatLiteralPercent
            }, parses = {
                a: parseShortWeekday,
                A: parseWeekday,
                b: parseShortMonth,
                B: parseMonth,
                c: parseLocaleDateTime,
                d: parseDayOfMonth,
                e: parseDayOfMonth,
                H: parseHour24,
                I: parseHour24,
                j: parseDayOfYear,
                L: parseMilliseconds,
                m: parseMonthNumber,
                M: parseMinutes,
                p: parsePeriod,
                S: parseSeconds,
                U: parseWeekNumberSunday,
                w: parseWeekdayNumber,
                W: parseWeekNumberMonday,
                x: parseLocaleDate,
                X: parseLocaleTime,
                y: parseYear,
                Y: parseFullYear,
                Z: parseZone,
                "%": parseLiteralPercent
            };
            return formats.x = newFormat(locale_date, formats), formats.X = newFormat(locale_time, formats), 
            formats.c = newFormat(locale_dateTime, formats), utcFormats.x = newFormat(locale_date, utcFormats), 
            utcFormats.X = newFormat(locale_time, utcFormats), utcFormats.c = newFormat(locale_dateTime, utcFormats), 
            {
                format: function(specifier) {
                    var f = newFormat(specifier += "", formats);
                    return f.toString = function() {
                        return specifier;
                    }, f;
                },
                parse: function(specifier) {
                    var p = newParse(specifier += "", localDate);
                    return p.toString = function() {
                        return specifier;
                    }, p;
                },
                utcFormat: function(specifier) {
                    var f = newFormat(specifier += "", utcFormats);
                    return f.toString = function() {
                        return specifier;
                    }, f;
                },
                utcParse: function(specifier) {
                    var p = newParse(specifier, utcDate);
                    return p.toString = function() {
                        return specifier;
                    }, p;
                }
            };
        }
        function pad(value, fill, width) {
            var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
            return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
        }
        function requote(s) {
            return s.replace(requoteRe, "\\$&");
        }
        function formatRe(names) {
            return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
        }
        function formatLookup(names) {
            for (var map = {}, i = -1, n = names.length; ++i < n; ) map[names[i].toLowerCase()] = i;
            return map;
        }
        function parseWeekdayNumber(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 1));
            return n ? (d.w = +n[0], i + n[0].length) : -1;
        }
        function parseWeekNumberSunday(d, string, i) {
            var n = numberRe.exec(string.slice(i));
            return n ? (d.U = +n[0], i + n[0].length) : -1;
        }
        function parseWeekNumberMonday(d, string, i) {
            var n = numberRe.exec(string.slice(i));
            return n ? (d.W = +n[0], i + n[0].length) : -1;
        }
        function parseFullYear(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 4));
            return n ? (d.y = +n[0], i + n[0].length) : -1;
        }
        function parseYear(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
        }
        function parseZone(d, string, i) {
            var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
            return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
        }
        function parseMonthNumber(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
        }
        function parseDayOfMonth(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.d = +n[0], i + n[0].length) : -1;
        }
        function parseDayOfYear(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 3));
            return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
        }
        function parseHour24(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.H = +n[0], i + n[0].length) : -1;
        }
        function parseMinutes(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.M = +n[0], i + n[0].length) : -1;
        }
        function parseSeconds(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 2));
            return n ? (d.S = +n[0], i + n[0].length) : -1;
        }
        function parseMilliseconds(d, string, i) {
            var n = numberRe.exec(string.slice(i, i + 3));
            return n ? (d.L = +n[0], i + n[0].length) : -1;
        }
        function parseLiteralPercent(d, string, i) {
            var n = percentRe.exec(string.slice(i, i + 1));
            return n ? i + n[0].length : -1;
        }
        function formatDayOfMonth(d, p) {
            return pad(d.getDate(), p, 2);
        }
        function formatHour24(d, p) {
            return pad(d.getHours(), p, 2);
        }
        function formatHour12(d, p) {
            return pad(d.getHours() % 12 || 12, p, 2);
        }
        function formatDayOfYear(d, p) {
            return pad(1 + day.count(year(d), d), p, 3);
        }
        function formatMilliseconds(d, p) {
            return pad(d.getMilliseconds(), p, 3);
        }
        function formatMonthNumber(d, p) {
            return pad(d.getMonth() + 1, p, 2);
        }
        function formatMinutes(d, p) {
            return pad(d.getMinutes(), p, 2);
        }
        function formatSeconds(d, p) {
            return pad(d.getSeconds(), p, 2);
        }
        function formatWeekNumberSunday(d, p) {
            return pad(sunday.count(year(d), d), p, 2);
        }
        function formatWeekdayNumber(d) {
            return d.getDay();
        }
        function formatWeekNumberMonday(d, p) {
            return pad(monday.count(year(d), d), p, 2);
        }
        function formatYear(d, p) {
            return pad(d.getFullYear() % 100, p, 2);
        }
        function formatFullYear(d, p) {
            return pad(d.getFullYear() % 1e4, p, 4);
        }
        function formatZone(d) {
            var z = d.getTimezoneOffset();
            return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
        }
        function formatUTCDayOfMonth(d, p) {
            return pad(d.getUTCDate(), p, 2);
        }
        function formatUTCHour24(d, p) {
            return pad(d.getUTCHours(), p, 2);
        }
        function formatUTCHour12(d, p) {
            return pad(d.getUTCHours() % 12 || 12, p, 2);
        }
        function formatUTCDayOfYear(d, p) {
            return pad(1 + utcDay.count(utcYear(d), d), p, 3);
        }
        function formatUTCMilliseconds(d, p) {
            return pad(d.getUTCMilliseconds(), p, 3);
        }
        function formatUTCMonthNumber(d, p) {
            return pad(d.getUTCMonth() + 1, p, 2);
        }
        function formatUTCMinutes(d, p) {
            return pad(d.getUTCMinutes(), p, 2);
        }
        function formatUTCSeconds(d, p) {
            return pad(d.getUTCSeconds(), p, 2);
        }
        function formatUTCWeekNumberSunday(d, p) {
            return pad(utcSunday.count(utcYear(d), d), p, 2);
        }
        function formatUTCWeekdayNumber(d) {
            return d.getUTCDay();
        }
        function formatUTCWeekNumberMonday(d, p) {
            return pad(utcMonday.count(utcYear(d), d), p, 2);
        }
        function formatUTCYear(d, p) {
            return pad(d.getUTCFullYear() % 100, p, 2);
        }
        function formatUTCFullYear(d, p) {
            return pad(d.getUTCFullYear() % 1e4, p, 4);
        }
        function formatUTCZone() {
            return "+0000";
        }
        function formatLiteralPercent() {
            return "%";
        }
        function defaultLocale$1(definition) {
            return locale$2 = formatLocale$1(definition), pear.timeFormat = locale$2.format, 
            pear.timeParse = locale$2.parse, pear.utcFormat = locale$2.utcFormat, pear.utcParse = locale$2.utcParse, 
            locale$2;
        }
        function formatIsoNative(date) {
            return date.toISOString();
        }
        function parseIsoNative(string) {
            var date = new Date(string);
            return isNaN(date) ? null : date;
        }
        function date$1(t) {
            return new Date(t);
        }
        function number$3(t) {
            return t instanceof Date ? +t : +new Date(+t);
        }
        function calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format) {
            function tickFormat(date$$1) {
                return (second$$1(date$$1) < date$$1 ? formatMillisecond : minute$$1(date$$1) < date$$1 ? formatSecond : hour$$1(date$$1) < date$$1 ? formatMinute : day$$1(date$$1) < date$$1 ? formatHour : month$$1(date$$1) < date$$1 ? week(date$$1) < date$$1 ? formatDay : formatWeek : year$$1(date$$1) < date$$1 ? formatMonth : formatYear)(date$$1);
            }
            function tickInterval(interval$$1, start, stop, step) {
                if (null == interval$$1 && (interval$$1 = 10), "number" === typeof interval$$1) {
                    var target = Math.abs(stop - start) / interval$$1, i = bisector(function(i) {
                        return i[2];
                    }).right(tickIntervals, target);
                    i === tickIntervals.length ? (step = tickStep(start / durationYear, stop / durationYear, interval$$1), 
                    interval$$1 = year$$1) : i ? (i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i], 
                    step = i[1], interval$$1 = i[0]) : (step = tickStep(start, stop, interval$$1), interval$$1 = millisecond$$1);
                }
                return null == step ? interval$$1 : interval$$1.every(step);
            }
            var scale = continuous(deinterpolateLinear, reinterpolate), invert = scale.invert, domain = scale.domain, formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y"), tickIntervals = [ [ second$$1, 1, durationSecond ], [ second$$1, 5, 5 * durationSecond ], [ second$$1, 15, 15 * durationSecond ], [ second$$1, 30, 30 * durationSecond ], [ minute$$1, 1, durationMinute ], [ minute$$1, 5, 5 * durationMinute ], [ minute$$1, 15, 15 * durationMinute ], [ minute$$1, 30, 30 * durationMinute ], [ hour$$1, 1, durationHour ], [ hour$$1, 3, 3 * durationHour ], [ hour$$1, 6, 6 * durationHour ], [ hour$$1, 12, 12 * durationHour ], [ day$$1, 1, durationDay ], [ day$$1, 2, 2 * durationDay ], [ week, 1, durationWeek ], [ month$$1, 1, durationMonth ], [ month$$1, 3, 3 * durationMonth ], [ year$$1, 1, durationYear ] ];
            return scale.invert = function(y) {
                return new Date(invert(y));
            }, scale.domain = function(_) {
                return arguments.length ? domain(map$3.call(_, number$3)) : domain().map(date$1);
            }, scale.ticks = function(interval$$1, step) {
                var t, d = domain(), t0 = d[0], t1 = d[d.length - 1], r = t1 < t0;
                return r && (t = t0, t0 = t1, t1 = t), t = tickInterval(interval$$1, t0, t1, step), 
                t = t ? t.range(t0, t1 + 1) : [], r ? t.reverse() : t;
            }, scale.tickFormat = function(count, specifier) {
                return null == specifier ? tickFormat : format(specifier);
            }, scale.nice = function(interval$$1, step) {
                var d = domain();
                return (interval$$1 = tickInterval(interval$$1, d[0], d[d.length - 1], step)) ? domain(nice(d, interval$$1)) : scale;
            }, scale.copy = function() {
                return copy(scale, calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format));
            }, scale;
        }
        function ramp(range) {
            var n = range.length;
            return function(t) {
                return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
            };
        }
        function sequential(interpolator) {
            function scale(x) {
                var t = (x - x0) / (x1 - x0);
                return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
            }
            var x0 = 0, x1 = 1, clamp = !1;
            return scale.domain = function(_) {
                return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [ x0, x1 ];
            }, scale.clamp = function(_) {
                return arguments.length ? (clamp = !!_, scale) : clamp;
            }, scale.interpolator = function(_) {
                return arguments.length ? (interpolator = _, scale) : interpolator;
            }, scale.copy = function() {
                return sequential(interpolator).domain([ x0, x1 ]).clamp(clamp);
            }, linearish(scale);
        }
        function acos$1(x) {
            return x > 1 ? 0 : x < -1 ? pi$4 : Math.acos(x);
        }
        function asin$1(x) {
            return x >= 1 ? halfPi$3 : x <= -1 ? -halfPi$3 : Math.asin(x);
        }
        function arcInnerRadius(d) {
            return d.innerRadius;
        }
        function arcOuterRadius(d) {
            return d.outerRadius;
        }
        function arcStartAngle(d) {
            return d.startAngle;
        }
        function arcEndAngle(d) {
            return d.endAngle;
        }
        function arcPadAngle(d) {
            return d && d.padAngle;
        }
        function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
            var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
            return [ x0 + t * x10, y0 + t * y10 ];
        }
        function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
            var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt$2(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt$2(max$2(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
            return dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1 && (cx0 = cx1, cy0 = cy1), 
            {
                cx: cx0,
                cy: cy0,
                x01: -ox,
                y01: -oy,
                x11: cx0 * (r1 / r - 1),
                y11: cy0 * (r1 / r - 1)
            };
        }
        function Linear(context) {
            this._context = context;
        }
        function x$3(p) {
            return p[0];
        }
        function y$3(p) {
            return p[1];
        }
        function Radial(curve) {
            this._curve = curve;
        }
        function curveRadial(curve) {
            function radial(context) {
                return new Radial(curve(context));
            }
            return radial._curve = curve, radial;
        }
        function lineRadial(l) {
            var c = l.curve;
            return l.angle = l.x, delete l.x, l.radius = l.y, delete l.y, l.curve = function(_) {
                return arguments.length ? c(curveRadial(_)) : c()._curve;
            }, l;
        }
        function linkSource(d) {
            return d.source;
        }
        function linkTarget(d) {
            return d.target;
        }
        function link$2(curve) {
            function link() {
                var buffer, argv = slice$6.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
                if (context || (context = buffer = path()), curve(context, +x.apply(this, (argv[0] = s, 
                argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv)), 
                buffer) return context = null, buffer + "" || null;
            }
            var source = linkSource, target = linkTarget, x = x$3, y = y$3, context = null;
            return link.source = function(_) {
                return arguments.length ? (source = _, link) : source;
            }, link.target = function(_) {
                return arguments.length ? (target = _, link) : target;
            }, link.x = function(_) {
                return arguments.length ? (x = "function" === typeof _ ? _ : constant$10(+_), link) : x;
            }, link.y = function(_) {
                return arguments.length ? (y = "function" === typeof _ ? _ : constant$10(+_), link) : y;
            }, link.context = function(_) {
                return arguments.length ? (context = null == _ ? null : _, link) : context;
            }, link;
        }
        function curveHorizontal(context, x0, y0, x1, y1) {
            context.moveTo(x0, y0), context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
        }
        function curveVertical(context, x0, y0, x1, y1) {
            context.moveTo(x0, y0), context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
        }
        function curveRadial$1(context, x0, y0, x1, y1) {
            var p0 = pointRadial(x0, y0), p1 = pointRadial(x0, y0 = (y0 + y1) / 2), p2 = pointRadial(x1, y0), p3 = pointRadial(x1, y1);
            context.moveTo(p0[0], p0[1]), context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
        }
        function linkHorizontal() {
            return link$2(curveHorizontal);
        }
        function linkVertical() {
            return link$2(curveVertical);
        }
        function linkRadial() {
            var l = link$2(curveRadial$1);
            return l.angle = l.x, delete l.x, l.radius = l.y, delete l.y, l;
        }
        function point$2(that, x, y) {
            that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
        }
        function Basis(context) {
            this._context = context;
        }
        function BasisClosed(context) {
            this._context = context;
        }
        function BasisOpen(context) {
            this._context = context;
        }
        function Bundle(context, beta) {
            this._basis = new Basis(context), this._beta = beta;
        }
        function point$3(that, x, y) {
            that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
        }
        function Cardinal(context, tension) {
            this._context = context, this._k = (1 - tension) / 6;
        }
        function CardinalClosed(context, tension) {
            this._context = context, this._k = (1 - tension) / 6;
        }
        function CardinalOpen(context, tension) {
            this._context = context, this._k = (1 - tension) / 6;
        }
        function point$4(that, x, y) {
            var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
            if (that._l01_a > epsilon$3) {
                var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
                x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n, y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
            }
            if (that._l23_a > epsilon$3) {
                var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
                x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m, y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
            }
            that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
        }
        function CatmullRom(context, alpha) {
            this._context = context, this._alpha = alpha;
        }
        function CatmullRomClosed(context, alpha) {
            this._context = context, this._alpha = alpha;
        }
        function CatmullRomOpen(context, alpha) {
            this._context = context, this._alpha = alpha;
        }
        function LinearClosed(context) {
            this._context = context;
        }
        function sign$1(x) {
            return x < 0 ? -1 : 1;
        }
        function slope3(that, x2, y2) {
            var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
            return (sign$1(s0) + sign$1(s1)) * Math.min(Math.abs(s0), Math.abs(s1), .5 * Math.abs(p)) || 0;
        }
        function slope2(that, t) {
            var h = that._x1 - that._x0;
            return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
        }
        function point$5(that, t0, t1) {
            var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
            that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
        }
        function MonotoneX(context) {
            this._context = context;
        }
        function MonotoneY(context) {
            this._context = new ReflectContext(context);
        }
        function ReflectContext(context) {
            this._context = context;
        }
        function monotoneX(context) {
            return new MonotoneX(context);
        }
        function monotoneY(context) {
            return new MonotoneY(context);
        }
        function Natural(context) {
            this._context = context;
        }
        function controlPoints(x) {
            var i, m, n = x.length - 1, a = new Array(n), b = new Array(n), r = new Array(n);
            for (a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1], i = 1; i < n - 1; ++i) a[i] = 1, 
            b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
            for (a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n], i = 1; i < n; ++i) m = a[i] / b[i - 1], 
            b[i] -= m, r[i] -= m * r[i - 1];
            for (a[n - 1] = r[n - 1] / b[n - 1], i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
            for (b[n - 1] = (x[n] + a[n - 1]) / 2, i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
            return [ a, b ];
        }
        function Step(context, t) {
            this._context = context, this._t = t;
        }
        function stepBefore(context) {
            return new Step(context, 0);
        }
        function stepAfter(context) {
            return new Step(context, 1);
        }
        function stackValue(d, key) {
            return d[key];
        }
        function sum$2(series) {
            for (var v, s = 0, i = -1, n = series.length; ++i < n; ) (v = +series[i][1]) && (s += v);
            return s;
        }
        function x$4(d) {
            return d[0];
        }
        function y$4(d) {
            return d[1];
        }
        function RedBlackTree() {
            this._ = null;
        }
        function RedBlackNode(node) {
            node.U = node.C = node.L = node.R = node.P = node.N = null;
        }
        function RedBlackRotateLeft(tree, node) {
            var p = node, q = node.R, parent = p.U;
            parent ? parent.L === p ? parent.L = q : parent.R = q : tree._ = q, q.U = parent, 
            p.U = q, p.R = q.L, p.R && (p.R.U = p), q.L = p;
        }
        function RedBlackRotateRight(tree, node) {
            var p = node, q = node.L, parent = p.U;
            parent ? parent.L === p ? parent.L = q : parent.R = q : tree._ = q, q.U = parent, 
            p.U = q, p.L = q.R, p.L && (p.L.U = p), q.R = p;
        }
        function RedBlackFirst(node) {
            for (;node.L; ) node = node.L;
            return node;
        }
        function createEdge(left, right, v0, v1) {
            var edge = [ null, null ], index = edges.push(edge) - 1;
            return edge.left = left, edge.right = right, v0 && setEdgeEnd(edge, left, right, v0), 
            v1 && setEdgeEnd(edge, right, left, v1), cells[left.index].halfedges.push(index), 
            cells[right.index].halfedges.push(index), edge;
        }
        function createBorderEdge(left, v0, v1) {
            var edge = [ v0, v1 ];
            return edge.left = left, edge;
        }
        function setEdgeEnd(edge, left, right, vertex) {
            edge[0] || edge[1] ? edge.left === right ? edge[1] = vertex : edge[0] = vertex : (edge[0] = vertex, 
            edge.left = left, edge.right = right);
        }
        function clipEdge(edge, x0, y0, x1, y1) {
            var r, a = edge[0], b = edge[1], ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay;
            if (r = x0 - ax, dx || !(r > 0)) {
                if (r /= dx, dx < 0) {
                    if (r < t0) return;
                    r < t1 && (t1 = r);
                } else if (dx > 0) {
                    if (r > t1) return;
                    r > t0 && (t0 = r);
                }
                if (r = x1 - ax, dx || !(r < 0)) {
                    if (r /= dx, dx < 0) {
                        if (r > t1) return;
                        r > t0 && (t0 = r);
                    } else if (dx > 0) {
                        if (r < t0) return;
                        r < t1 && (t1 = r);
                    }
                    if (r = y0 - ay, dy || !(r > 0)) {
                        if (r /= dy, dy < 0) {
                            if (r < t0) return;
                            r < t1 && (t1 = r);
                        } else if (dy > 0) {
                            if (r > t1) return;
                            r > t0 && (t0 = r);
                        }
                        if (r = y1 - ay, dy || !(r < 0)) {
                            if (r /= dy, dy < 0) {
                                if (r > t1) return;
                                r > t0 && (t0 = r);
                            } else if (dy > 0) {
                                if (r < t0) return;
                                r < t1 && (t1 = r);
                            }
                            return !(t0 > 0 || t1 < 1) || (t0 > 0 && (edge[0] = [ ax + t0 * dx, ay + t0 * dy ]), 
                            t1 < 1 && (edge[1] = [ ax + t1 * dx, ay + t1 * dy ]), !0);
                        }
                    }
                }
            }
        }
        function connectEdge(edge, x0, y0, x1, y1) {
            var v1 = edge[1];
            if (v1) return !0;
            var fm, fb, v0 = edge[0], left = edge.left, right = edge.right, lx = left[0], ly = left[1], rx = right[0], ry = right[1], fx = (lx + rx) / 2, fy = (ly + ry) / 2;
            if (ry === ly) {
                if (fx < x0 || fx >= x1) return;
                if (lx > rx) {
                    if (v0) {
                        if (v0[1] >= y1) return;
                    } else v0 = [ fx, y0 ];
                    v1 = [ fx, y1 ];
                } else {
                    if (v0) {
                        if (v0[1] < y0) return;
                    } else v0 = [ fx, y1 ];
                    v1 = [ fx, y0 ];
                }
            } else if (fm = (lx - rx) / (ry - ly), fb = fy - fm * fx, fm < -1 || fm > 1) if (lx > rx) {
                if (v0) {
                    if (v0[1] >= y1) return;
                } else v0 = [ (y0 - fb) / fm, y0 ];
                v1 = [ (y1 - fb) / fm, y1 ];
            } else {
                if (v0) {
                    if (v0[1] < y0) return;
                } else v0 = [ (y1 - fb) / fm, y1 ];
                v1 = [ (y0 - fb) / fm, y0 ];
            } else if (ly < ry) {
                if (v0) {
                    if (v0[0] >= x1) return;
                } else v0 = [ x0, fm * x0 + fb ];
                v1 = [ x1, fm * x1 + fb ];
            } else {
                if (v0) {
                    if (v0[0] < x0) return;
                } else v0 = [ x1, fm * x1 + fb ];
                v1 = [ x0, fm * x0 + fb ];
            }
            return edge[0] = v0, edge[1] = v1, !0;
        }
        function clipEdges(x0, y0, x1, y1) {
            for (var edge, i = edges.length; i--; ) connectEdge(edge = edges[i], x0, y0, x1, y1) && clipEdge(edge, x0, y0, x1, y1) && (Math.abs(edge[0][0] - edge[1][0]) > epsilon$4 || Math.abs(edge[0][1] - edge[1][1]) > epsilon$4) || delete edges[i];
        }
        function createCell(site) {
            return cells[site.index] = {
                site: site,
                halfedges: []
            };
        }
        function cellHalfedgeAngle(cell, edge) {
            var site = cell.site, va = edge.left, vb = edge.right;
            return site === vb && (vb = va, va = site), vb ? Math.atan2(vb[1] - va[1], vb[0] - va[0]) : (site === va ? (va = edge[1], 
            vb = edge[0]) : (va = edge[0], vb = edge[1]), Math.atan2(va[0] - vb[0], vb[1] - va[1]));
        }
        function cellHalfedgeStart(cell, edge) {
            return edge[+(edge.left !== cell.site)];
        }
        function cellHalfedgeEnd(cell, edge) {
            return edge[+(edge.left === cell.site)];
        }
        function sortCellHalfedges() {
            for (var cell, halfedges, j, m, i = 0, n = cells.length; i < n; ++i) if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
                var index = new Array(m), array = new Array(m);
                for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
                for (index.sort(function(i, j) {
                    return array[j] - array[i];
                }), j = 0; j < m; ++j) array[j] = halfedges[index[j]];
                for (j = 0; j < m; ++j) halfedges[j] = array[j];
            }
        }
        function clipCells(x0, y0, x1, y1) {
            var iCell, cell, site, iHalfedge, halfedges, nHalfedges, start, startX, startY, end, endX, endY, nCells = cells.length, cover = !0;
            for (iCell = 0; iCell < nCells; ++iCell) if (cell = cells[iCell]) {
                for (site = cell.site, halfedges = cell.halfedges, iHalfedge = halfedges.length; iHalfedge--; ) edges[halfedges[iHalfedge]] || halfedges.splice(iHalfedge, 1);
                for (iHalfedge = 0, nHalfedges = halfedges.length; iHalfedge < nHalfedges; ) end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), 
                endX = end[0], endY = end[1], start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), 
                startX = start[0], startY = start[1], (Math.abs(endX - startX) > epsilon$4 || Math.abs(endY - startY) > epsilon$4) && (halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end, Math.abs(endX - x0) < epsilon$4 && y1 - endY > epsilon$4 ? [ x0, Math.abs(startX - x0) < epsilon$4 ? startY : y1 ] : Math.abs(endY - y1) < epsilon$4 && x1 - endX > epsilon$4 ? [ Math.abs(startY - y1) < epsilon$4 ? startX : x1, y1 ] : Math.abs(endX - x1) < epsilon$4 && endY - y0 > epsilon$4 ? [ x1, Math.abs(startX - x1) < epsilon$4 ? startY : y0 ] : Math.abs(endY - y0) < epsilon$4 && endX - x0 > epsilon$4 ? [ Math.abs(startY - y0) < epsilon$4 ? startX : x0, y0 ] : null)) - 1), 
                ++nHalfedges);
                nHalfedges && (cover = !1);
            }
            if (cover) {
                var dx, dy, d2, dc = 1 / 0;
                for (iCell = 0, cover = null; iCell < nCells; ++iCell) (cell = cells[iCell]) && (site = cell.site, 
                dx = site[0] - x0, dy = site[1] - y0, (d2 = dx * dx + dy * dy) < dc && (dc = d2, 
                cover = cell));
                if (cover) {
                    var v00 = [ x0, y0 ], v01 = [ x0, y1 ], v11 = [ x1, y1 ], v10 = [ x1, y0 ];
                    cover.halfedges.push(edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1, edges.push(createBorderEdge(site, v01, v11)) - 1, edges.push(createBorderEdge(site, v11, v10)) - 1, edges.push(createBorderEdge(site, v10, v00)) - 1);
                }
            }
            for (iCell = 0; iCell < nCells; ++iCell) (cell = cells[iCell]) && (cell.halfedges.length || delete cells[iCell]);
        }
        function Circle() {
            RedBlackNode(this), this.x = this.y = this.arc = this.site = this.cy = null;
        }
        function attachCircle(arc) {
            var lArc = arc.P, rArc = arc.N;
            if (lArc && rArc) {
                var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
                if (lSite !== rSite) {
                    var bx = cSite[0], by = cSite[1], ax = lSite[0] - bx, ay = lSite[1] - by, cx = rSite[0] - bx, cy = rSite[1] - by, d = 2 * (ax * cy - ay * cx);
                    if (!(d >= -epsilon2$2)) {
                        var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, circle = circlePool.pop() || new Circle();
                        circle.arc = arc, circle.site = cSite, circle.x = x + bx, circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y), 
                        arc.circle = circle;
                        for (var before = null, node = circles._; node; ) if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
                            if (!node.L) {
                                before = node.P;
                                break;
                            }
                            node = node.L;
                        } else {
                            if (!node.R) {
                                before = node;
                                break;
                            }
                            node = node.R;
                        }
                        circles.insert(before, circle), before || (firstCircle = circle);
                    }
                }
            }
        }
        function detachCircle(arc) {
            var circle = arc.circle;
            circle && (circle.P || (firstCircle = circle.N), circles.remove(circle), circlePool.push(circle), 
            RedBlackNode(circle), arc.circle = null);
        }
        function Beach() {
            RedBlackNode(this), this.edge = this.site = this.circle = null;
        }
        function createBeach(site) {
            var beach = beachPool.pop() || new Beach();
            return beach.site = site, beach;
        }
        function detachBeach(beach) {
            detachCircle(beach), beaches.remove(beach), beachPool.push(beach), RedBlackNode(beach);
        }
        function removeBeach(beach) {
            var circle = beach.circle, x = circle.x, y = circle.cy, vertex = [ x, y ], previous = beach.P, next = beach.N, disappearing = [ beach ];
            detachBeach(beach);
            for (var lArc = previous; lArc.circle && Math.abs(x - lArc.circle.x) < epsilon$4 && Math.abs(y - lArc.circle.cy) < epsilon$4; ) previous = lArc.P, 
            disappearing.unshift(lArc), detachBeach(lArc), lArc = previous;
            disappearing.unshift(lArc), detachCircle(lArc);
            for (var rArc = next; rArc.circle && Math.abs(x - rArc.circle.x) < epsilon$4 && Math.abs(y - rArc.circle.cy) < epsilon$4; ) next = rArc.N, 
            disappearing.push(rArc), detachBeach(rArc), rArc = next;
            disappearing.push(rArc), detachCircle(rArc);
            var iArc, nArcs = disappearing.length;
            for (iArc = 1; iArc < nArcs; ++iArc) rArc = disappearing[iArc], lArc = disappearing[iArc - 1], 
            setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
            lArc = disappearing[0], rArc = disappearing[nArcs - 1], rArc.edge = createEdge(lArc.site, rArc.site, null, vertex), 
            attachCircle(lArc), attachCircle(rArc);
        }
        function addBeach(site) {
            for (var lArc, rArc, dxl, dxr, x = site[0], directrix = site[1], node = beaches._; node; ) if ((dxl = leftBreakPoint(node, directrix) - x) > epsilon$4) node = node.L; else {
                if (!((dxr = x - rightBreakPoint(node, directrix)) > epsilon$4)) {
                    dxl > -epsilon$4 ? (lArc = node.P, rArc = node) : dxr > -epsilon$4 ? (lArc = node, 
                    rArc = node.N) : lArc = rArc = node;
                    break;
                }
                if (!node.R) {
                    lArc = node;
                    break;
                }
                node = node.R;
            }
            createCell(site);
            var newArc = createBeach(site);
            if (beaches.insert(lArc, newArc), lArc || rArc) {
                if (lArc === rArc) return detachCircle(lArc), rArc = createBeach(lArc.site), beaches.insert(newArc, rArc), 
                newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site), attachCircle(lArc), 
                void attachCircle(rArc);
                if (!rArc) return void (newArc.edge = createEdge(lArc.site, newArc.site));
                detachCircle(lArc), detachCircle(rArc);
                var lSite = lArc.site, ax = lSite[0], ay = lSite[1], bx = site[0] - ax, by = site[1] - ay, rSite = rArc.site, cx = rSite[0] - ax, cy = rSite[1] - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = [ (cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay ];
                setEdgeEnd(rArc.edge, lSite, rSite, vertex), newArc.edge = createEdge(lSite, site, null, vertex), 
                rArc.edge = createEdge(site, rSite, null, vertex), attachCircle(lArc), attachCircle(rArc);
            }
        }
        function leftBreakPoint(arc, directrix) {
            var site = arc.site, rfocx = site[0], rfocy = site[1], pby2 = rfocy - directrix;
            if (!pby2) return rfocx;
            var lArc = arc.P;
            if (!lArc) return -1 / 0;
            site = lArc.site;
            var lfocx = site[0], lfocy = site[1], plby2 = lfocy - directrix;
            if (!plby2) return lfocx;
            var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
            return aby2 ? (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx : (rfocx + lfocx) / 2;
        }
        function rightBreakPoint(arc, directrix) {
            var rArc = arc.N;
            if (rArc) return leftBreakPoint(rArc, directrix);
            var site = arc.site;
            return site[1] === directrix ? site[0] : 1 / 0;
        }
        function triangleArea(a, b, c) {
            return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
        }
        function lexicographic(a, b) {
            return b[1] - a[1] || b[0] - a[0];
        }
        function Diagram(sites, extent) {
            var x, y, circle, site = sites.sort(lexicographic).pop();
            for (edges = [], cells = new Array(sites.length), beaches = new RedBlackTree(), 
            circles = new RedBlackTree(); ;) if (circle = firstCircle, site && (!circle || site[1] < circle.y || site[1] === circle.y && site[0] < circle.x)) site[0] === x && site[1] === y || (addBeach(site), 
            x = site[0], y = site[1]), site = sites.pop(); else {
                if (!circle) break;
                removeBeach(circle.arc);
            }
            if (sortCellHalfedges(), extent) {
                var x0 = +extent[0][0], y0 = +extent[0][1], x1 = +extent[1][0], y1 = +extent[1][1];
                clipEdges(x0, y0, x1, y1), clipCells(x0, y0, x1, y1);
            }
            this.edges = edges, this.cells = cells, beaches = circles = edges = cells = null;
        }
        function ZoomEvent(target, type, transform) {
            this.target = target, this.type = type, this.transform = transform;
        }
        function Transform(k, x, y) {
            this.k = k, this.x = x, this.y = y;
        }
        function transform$1(node) {
            return node.__zoom || identity$8;
        }
        function nopropagation$2() {
            pear.event.stopImmediatePropagation();
        }
        function defaultFilter$2() {
            return !pear.event.button;
        }
        function defaultExtent$1() {
            var w, h, e = this;
            return e instanceof SVGElement ? (e = e.ownerSVGElement || e, w = e.width.baseVal.value, 
            h = e.height.baseVal.value) : (w = e.clientWidth, h = e.clientHeight), [ [ 0, 0 ], [ w, h ] ];
        }
        function defaultTransform() {
            return this.__zoom || identity$8;
        }
        function defaultWheelDelta() {
            return -pear.event.deltaY * (pear.event.deltaMode ? 120 : 1) / 500;
        }
        function touchable$1() {
            return "ontouchstart" in this;
        }
        var ascending = function(a, b) {
            return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
        }, bisector = function(compare) {
            return 1 === compare.length && (compare = ascendingComparator(compare)), {
                left: function(a, x, lo, hi) {
                    for (null == lo && (lo = 0), null == hi && (hi = a.length); lo < hi; ) {
                        var mid = lo + hi >>> 1;
                        compare(a[mid], x) < 0 ? lo = mid + 1 : hi = mid;
                    }
                    return lo;
                },
                right: function(a, x, lo, hi) {
                    for (null == lo && (lo = 0), null == hi && (hi = a.length); lo < hi; ) {
                        var mid = lo + hi >>> 1;
                        compare(a[mid], x) > 0 ? hi = mid : lo = mid + 1;
                    }
                    return lo;
                }
            };
        }, ascendingBisect = bisector(ascending), bisectRight = ascendingBisect.right, bisectLeft = ascendingBisect.left, pairs = function(array, f) {
            null == f && (f = pair);
            for (var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n); i < n; ) pairs[i] = f(p, p = array[++i]);
            return pairs;
        }, cross = function(values0, values1, reduce) {
            var i0, i1, i, value0, n0 = values0.length, n1 = values1.length, values = new Array(n0 * n1);
            for (null == reduce && (reduce = pair), i0 = i = 0; i0 < n0; ++i0) for (value0 = values0[i0], 
            i1 = 0; i1 < n1; ++i1, ++i) values[i] = reduce(value0, values1[i1]);
            return values;
        }, descending = function(a, b) {
            return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
        }, number = function(x) {
            return null === x ? NaN : +x;
        }, variance = function(values, valueof) {
            var value, delta, n = values.length, m = 0, i = -1, mean = 0, sum = 0;
            if (null == valueof) for (;++i < n; ) isNaN(value = number(values[i])) || (delta = value - mean, 
            mean += delta / ++m, sum += delta * (value - mean)); else for (;++i < n; ) isNaN(value = number(valueof(values[i], i, values))) || (delta = value - mean, 
            mean += delta / ++m, sum += delta * (value - mean));
            if (m > 1) return sum / (m - 1);
        }, deviation = function(array, f) {
            var v = variance(array, f);
            return v ? Math.sqrt(v) : v;
        }, extent = function(values, valueof) {
            var value, min, max, n = values.length, i = -1;
            if (null == valueof) {
                for (;++i < n; ) if (null != (value = values[i]) && value >= value) for (min = max = value; ++i < n; ) null != (value = values[i]) && (min > value && (min = value), 
                max < value && (max = value));
            } else for (;++i < n; ) if (null != (value = valueof(values[i], i, values)) && value >= value) for (min = max = value; ++i < n; ) null != (value = valueof(values[i], i, values)) && (min > value && (min = value), 
            max < value && (max = value));
            return [ min, max ];
        }, array = Array.prototype, slice = array.slice, map = array.map, constant = function(x) {
            return function() {
                return x;
            };
        }, identity = function(x) {
            return x;
        }, sequence = function(start, stop, step) {
            start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, 
            start = 0, 1) : n < 3 ? 1 : +step;
            for (var i = -1, n = 0 | Math.max(0, Math.ceil((stop - start) / step)), range = new Array(n); ++i < n; ) range[i] = start + i * step;
            return range;
        }, e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2), ticks = function(start, stop, count) {
            var n, ticks, step, reverse = stop < start, i = -1;
            if (reverse && (n = start, start = stop, stop = n), 0 === (step = tickIncrement(start, stop, count)) || !isFinite(step)) return [];
            if (step > 0) for (start = Math.ceil(start / step), stop = Math.floor(stop / step), 
            ticks = new Array(n = Math.ceil(stop - start + 1)); ++i < n; ) ticks[i] = (start + i) * step; else for (start = Math.floor(start * step), 
            stop = Math.ceil(stop * step), ticks = new Array(n = Math.ceil(start - stop + 1)); ++i < n; ) ticks[i] = (start - i) / step;
            return reverse && ticks.reverse(), ticks;
        }, sturges = function(values) {
            return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
        }, histogram = function() {
            function histogram(data) {
                var i, x, n = data.length, values = new Array(n);
                for (i = 0; i < n; ++i) values[i] = value(data[i], i, data);
                var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
                Array.isArray(tz) || (tz = tickStep(x0, x1, tz), tz = sequence(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz));
                for (var m = tz.length; tz[0] <= x0; ) tz.shift(), --m;
                for (;tz[m - 1] > x1; ) tz.pop(), --m;
                var bin, bins = new Array(m + 1);
                for (i = 0; i <= m; ++i) bin = bins[i] = [], bin.x0 = i > 0 ? tz[i - 1] : x0, bin.x1 = i < m ? tz[i] : x1;
                for (i = 0; i < n; ++i) x = values[i], x0 <= x && x <= x1 && bins[bisectRight(tz, x, 0, m)].push(data[i]);
                return bins;
            }
            var value = identity, domain = extent, threshold = sturges;
            return histogram.value = function(_) {
                return arguments.length ? (value = "function" === typeof _ ? _ : constant(_), histogram) : value;
            }, histogram.domain = function(_) {
                return arguments.length ? (domain = "function" === typeof _ ? _ : constant([ _[0], _[1] ]), 
                histogram) : domain;
            }, histogram.thresholds = function(_) {
                return arguments.length ? (threshold = "function" === typeof _ ? _ : constant(Array.isArray(_) ? slice.call(_) : _), 
                histogram) : threshold;
            }, histogram;
        }, threshold = function(values, p, valueof) {
            if (null == valueof && (valueof = number), n = values.length) {
                if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
                if (p >= 1) return +valueof(values[n - 1], n - 1, values);
                var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values);
                return value0 + (+valueof(values[i0 + 1], i0 + 1, values) - value0) * (i - i0);
            }
        }, freedmanDiaconis = function(values, min, max) {
            return values = map.call(values, number).sort(ascending), Math.ceil((max - min) / (2 * (threshold(values, .75) - threshold(values, .25)) * Math.pow(values.length, -1 / 3)));
        }, scott = function(values, min, max) {
            return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
        }, max = function(values, valueof) {
            var value, max, n = values.length, i = -1;
            if (null == valueof) {
                for (;++i < n; ) if (null != (value = values[i]) && value >= value) for (max = value; ++i < n; ) null != (value = values[i]) && value > max && (max = value);
            } else for (;++i < n; ) if (null != (value = valueof(values[i], i, values)) && value >= value) for (max = value; ++i < n; ) null != (value = valueof(values[i], i, values)) && value > max && (max = value);
            return max;
        }, mean = function(values, valueof) {
            var value, n = values.length, m = n, i = -1, sum = 0;
            if (null == valueof) for (;++i < n; ) isNaN(value = number(values[i])) ? --m : sum += value; else for (;++i < n; ) isNaN(value = number(valueof(values[i], i, values))) ? --m : sum += value;
            if (m) return sum / m;
        }, median = function(values, valueof) {
            var value, n = values.length, i = -1, numbers = [];
            if (null == valueof) for (;++i < n; ) isNaN(value = number(values[i])) || numbers.push(value); else for (;++i < n; ) isNaN(value = number(valueof(values[i], i, values))) || numbers.push(value);
            return threshold(numbers.sort(ascending), .5);
        }, merge = function(arrays) {
            for (var m, merged, array, n = arrays.length, i = -1, j = 0; ++i < n; ) j += arrays[i].length;
            for (merged = new Array(j); --n >= 0; ) for (array = arrays[n], m = array.length; --m >= 0; ) merged[--j] = array[m];
            return merged;
        }, min = function(values, valueof) {
            var value, min, n = values.length, i = -1;
            if (null == valueof) {
                for (;++i < n; ) if (null != (value = values[i]) && value >= value) for (min = value; ++i < n; ) null != (value = values[i]) && min > value && (min = value);
            } else for (;++i < n; ) if (null != (value = valueof(values[i], i, values)) && value >= value) for (min = value; ++i < n; ) null != (value = valueof(values[i], i, values)) && min > value && (min = value);
            return min;
        }, permute = function(array, indexes) {
            for (var i = indexes.length, permutes = new Array(i); i--; ) permutes[i] = array[indexes[i]];
            return permutes;
        }, scan = function(values, compare) {
            if (n = values.length) {
                var n, xi, i = 0, j = 0, xj = values[j];
                for (null == compare && (compare = ascending); ++i < n; ) (compare(xi = values[i], xj) < 0 || 0 !== compare(xj, xj)) && (xj = xi, 
                j = i);
                return 0 === compare(xj, xj) ? j : void 0;
            }
        }, shuffle = function(array, i0, i1) {
            for (var t, i, m = (null == i1 ? array.length : i1) - (i0 = null == i0 ? 0 : +i0); m; ) i = Math.random() * m-- | 0, 
            t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
            return array;
        }, sum = function(values, valueof) {
            var value, n = values.length, i = -1, sum = 0;
            if (null == valueof) for (;++i < n; ) (value = +values[i]) && (sum += value); else for (;++i < n; ) (value = +valueof(values[i], i, values)) && (sum += value);
            return sum;
        }, transpose = function(matrix) {
            if (!(n = matrix.length)) return [];
            for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m; ) for (var n, j = -1, row = transpose[i] = new Array(n); ++j < n; ) row[j] = matrix[j][i];
            return transpose;
        }, zip = function() {
            return transpose(arguments);
        }, slice$1 = Array.prototype.slice, identity$1 = function(x) {
            return x;
        }, top = 1, right = 2, bottom = 3, left = 4, epsilon = 1e-6, noop = {
            value: function() {}
        };
        Dispatch.prototype = dispatch.prototype = {
            constructor: Dispatch,
            on: function(typename, callback) {
                var t, _ = this._, T = parseTypenames(typename + "", _), i = -1, n = T.length;
                {
                    if (!(arguments.length < 2)) {
                        if (null != callback && "function" !== typeof callback) throw new Error("invalid callback: " + callback);
                        for (;++i < n; ) if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback); else if (null == callback) for (t in _) _[t] = set(_[t], typename.name, null);
                        return this;
                    }
                    for (;++i < n; ) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
                }
            },
            copy: function() {
                var copy = {}, _ = this._;
                for (var t in _) copy[t] = _[t].slice();
                return new Dispatch(copy);
            },
            call: function(type, that) {
                if ((n = arguments.length - 2) > 0) for (var n, t, args = new Array(n), i = 0; i < n; ++i) args[i] = arguments[i + 2];
                if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
                for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
            },
            apply: function(type, that, args) {
                if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
                for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
            }
        };
        var xhtml = "http://www.w3.org/1999/xhtml", namespaces = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: xhtml,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }, namespace = function(name) {
            var prefix = name += "", i = prefix.indexOf(":");
            return i >= 0 && "xmlns" !== (prefix = name.slice(0, i)) && (name = name.slice(i + 1)), 
            namespaces.hasOwnProperty(prefix) ? {
                space: namespaces[prefix],
                local: name
            } : name;
        }, creator = function(name) {
            var fullname = namespace(name);
            return (fullname.local ? creatorFixed : creatorInherit)(fullname);
        }, nextId = 0;
        Local.prototype = local$1.prototype = {
            constructor: Local,
            get: function(node) {
                for (var id = this._; !(id in node); ) if (!(node = node.parentNode)) return;
                return node[id];
            },
            set: function(node, value) {
                return node[this._] = value;
            },
            remove: function(node) {
                return this._ in node && delete node[this._];
            },
            toString: function() {
                return this._;
            }
        };
        var matcher = function(selector) {
            return function() {
                return this.matches(selector);
            };
        };
        if ("undefined" !== typeof document) {
            var element = document.documentElement;
            if (!element.matches) {
                var vendorMatches = element.webkitMatchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector;
                matcher = function(selector) {
                    return function() {
                        return vendorMatches.call(this, selector);
                    };
                };
            }
        }
        var matcher$1 = matcher, filterEvents = {};
        if (pear.event = null, "undefined" !== typeof document) {
            "onmouseenter" in document.documentElement || (filterEvents = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            });
        }
        var selection_on = function(typename, value, capture) {
            var i, t, typenames = parseTypenames$1(typename + ""), n = typenames.length;
            {
                if (!(arguments.length < 2)) {
                    for (on = value ? onAdd : onRemove, null == capture && (capture = !1), i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
                    return this;
                }
                var on = this.node().__on;
                if (on) for (var o, j = 0, m = on.length; j < m; ++j) for (i = 0, o = on[j]; i < n; ++i) if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
            }
        }, sourceEvent = function() {
            for (var source, current = pear.event; source = current.sourceEvent; ) current = source;
            return current;
        }, point = function(node, event) {
            var svg = node.ownerSVGElement || node;
            if (svg.createSVGPoint) {
                var point = svg.createSVGPoint();
                return point.x = event.clientX, point.y = event.clientY, point = point.matrixTransform(node.getScreenCTM().inverse()), 
                [ point.x, point.y ];
            }
            var rect = node.getBoundingClientRect();
            return [ event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop ];
        }, mouse = function(node) {
            var event = sourceEvent();
            return event.changedTouches && (event = event.changedTouches[0]), point(node, event);
        }, selector = function(selector) {
            return null == selector ? none : function() {
                return this.querySelector(selector);
            };
        }, selection_select = function(select) {
            "function" !== typeof select && (select = selector(select));
            for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var node, subnode, group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), i = 0; i < n; ++i) (node = group[i]) && (subnode = select.call(node, node.__data__, i, group)) && ("__data__" in node && (subnode.__data__ = node.__data__), 
            subgroup[i] = subnode);
            return new Selection(subgroups, this._parents);
        }, selectorAll = function(selector) {
            return null == selector ? empty$1 : function() {
                return this.querySelectorAll(selector);
            };
        }, selection_selectAll = function(select) {
            "function" !== typeof select && (select = selectorAll(select));
            for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var node, group = groups[j], n = group.length, i = 0; i < n; ++i) (node = group[i]) && (subgroups.push(select.call(node, node.__data__, i, group)), 
            parents.push(node));
            return new Selection(subgroups, parents);
        }, selection_filter = function(match) {
            "function" !== typeof match && (match = matcher$1(match));
            for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var node, group = groups[j], n = group.length, subgroup = subgroups[j] = [], i = 0; i < n; ++i) (node = group[i]) && match.call(node, node.__data__, i, group) && subgroup.push(node);
            return new Selection(subgroups, this._parents);
        }, sparse = function(update) {
            return new Array(update.length);
        }, selection_enter = function() {
            return new Selection(this._enter || this._groups.map(sparse), this._parents);
        };
        EnterNode.prototype = {
            constructor: EnterNode,
            appendChild: function(child) {
                return this._parent.insertBefore(child, this._next);
            },
            insertBefore: function(child, next) {
                return this._parent.insertBefore(child, next);
            },
            querySelector: function(selector) {
                return this._parent.querySelector(selector);
            },
            querySelectorAll: function(selector) {
                return this._parent.querySelectorAll(selector);
            }
        };
        var constant$1 = function(x) {
            return function() {
                return x;
            };
        }, keyPrefix = "$", selection_data = function(value, key) {
            if (!value) return data = new Array(this.size()), j = -1, this.each(function(d) {
                data[++j] = d;
            }), data;
            var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
            "function" !== typeof value && (value = constant$1(value));
            for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
                var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength);
                bind(parent, group, enterGroup, updateGroup, exit[j] = new Array(groupLength), data, key);
                for (var previous, next, i0 = 0, i1 = 0; i0 < dataLength; ++i0) if (previous = enterGroup[i0]) {
                    for (i0 >= i1 && (i1 = i0 + 1); !(next = updateGroup[i1]) && ++i1 < dataLength; ) ;
                    previous._next = next || null;
                }
            }
            return update = new Selection(update, parents), update._enter = enter, update._exit = exit, 
            update;
        }, selection_exit = function() {
            return new Selection(this._exit || this._groups.map(sparse), this._parents);
        }, selection_merge = function(selection$$1) {
            for (var groups0 = this._groups, groups1 = selection$$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var node, group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), i = 0; i < n; ++i) (node = group0[i] || group1[i]) && (merge[i] = node);
            for (;j < m0; ++j) merges[j] = groups0[j];
            return new Selection(merges, this._parents);
        }, selection_order = function() {
            for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) for (var node, group = groups[j], i = group.length - 1, next = group[i]; --i >= 0; ) (node = group[i]) && (next && next !== node.nextSibling && next.parentNode.insertBefore(node, next), 
            next = node);
            return this;
        }, selection_sort = function(compare) {
            function compareNode(a, b) {
                return a && b ? compare(a.__data__, b.__data__) : !a - !b;
            }
            compare || (compare = ascending$1);
            for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
                for (var node, group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), i = 0; i < n; ++i) (node = group[i]) && (sortgroup[i] = node);
                sortgroup.sort(compareNode);
            }
            return new Selection(sortgroups, this._parents).order();
        }, selection_call = function() {
            var callback = arguments[0];
            return arguments[0] = this, callback.apply(null, arguments), this;
        }, selection_nodes = function() {
            var nodes = new Array(this.size()), i = -1;
            return this.each(function() {
                nodes[++i] = this;
            }), nodes;
        }, selection_node = function() {
            for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
                var node = group[i];
                if (node) return node;
            }
            return null;
        }, selection_size = function() {
            var size = 0;
            return this.each(function() {
                ++size;
            }), size;
        }, selection_empty = function() {
            return !this.node();
        }, selection_each = function(callback) {
            for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var node, group = groups[j], i = 0, n = group.length; i < n; ++i) (node = group[i]) && callback.call(node, node.__data__, i, group);
            return this;
        }, selection_attr = function(name, value) {
            var fullname = namespace(name);
            if (arguments.length < 2) {
                var node = this.node();
                return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
            }
            return this.each((null == value ? fullname.local ? attrRemoveNS : attrRemove : "function" === typeof value ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
        }, defaultView = function(node) {
            return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
        }, selection_style = function(name, value, priority) {
            return arguments.length > 1 ? this.each((null == value ? styleRemove : "function" === typeof value ? styleFunction : styleConstant)(name, value, null == priority ? "" : priority)) : styleValue(this.node(), name);
        }, selection_property = function(name, value) {
            return arguments.length > 1 ? this.each((null == value ? propertyRemove : "function" === typeof value ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
        };
        ClassList.prototype = {
            add: function(name) {
                this._names.indexOf(name) < 0 && (this._names.push(name), this._node.setAttribute("class", this._names.join(" ")));
            },
            remove: function(name) {
                var i = this._names.indexOf(name);
                i >= 0 && (this._names.splice(i, 1), this._node.setAttribute("class", this._names.join(" ")));
            },
            contains: function(name) {
                return this._names.indexOf(name) >= 0;
            }
        };
        var selection_classed = function(name, value) {
            var names = classArray(name + "");
            if (arguments.length < 2) {
                for (var list = classList(this.node()), i = -1, n = names.length; ++i < n; ) if (!list.contains(names[i])) return !1;
                return !0;
            }
            return this.each(("function" === typeof value ? classedFunction : value ? classedTrue : classedFalse)(names, value));
        }, selection_text = function(value) {
            return arguments.length ? this.each(null == value ? textRemove : ("function" === typeof value ? textFunction : textConstant)(value)) : this.node().textContent;
        }, selection_html = function(value) {
            return arguments.length ? this.each(null == value ? htmlRemove : ("function" === typeof value ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
        }, selection_raise = function() {
            return this.each(raise);
        }, selection_lower = function() {
            return this.each(lower);
        }, selection_append = function(name) {
            var create = "function" === typeof name ? name : creator(name);
            return this.select(function() {
                return this.appendChild(create.apply(this, arguments));
            });
        }, selection_insert = function(name, before) {
            var create = "function" === typeof name ? name : creator(name), select = null == before ? constantNull : "function" === typeof before ? before : selector(before);
            return this.select(function() {
                return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
            });
        }, selection_remove = function() {
            return this.each(remove);
        }, selection_datum = function(value) {
            return arguments.length ? this.property("__data__", value) : this.node().__data__;
        }, selection_dispatch = function(type, params) {
            return this.each(("function" === typeof params ? dispatchFunction : dispatchConstant)(type, params));
        }, root = [ null ];
        Selection.prototype = selection.prototype = {
            constructor: Selection,
            select: selection_select,
            selectAll: selection_selectAll,
            filter: selection_filter,
            data: selection_data,
            enter: selection_enter,
            exit: selection_exit,
            merge: selection_merge,
            order: selection_order,
            sort: selection_sort,
            call: selection_call,
            nodes: selection_nodes,
            node: selection_node,
            size: selection_size,
            empty: selection_empty,
            each: selection_each,
            attr: selection_attr,
            style: selection_style,
            property: selection_property,
            classed: selection_classed,
            text: selection_text,
            html: selection_html,
            raise: selection_raise,
            lower: selection_lower,
            append: selection_append,
            insert: selection_insert,
            remove: selection_remove,
            datum: selection_datum,
            on: selection_on,
            dispatch: selection_dispatch
        };
        var select = function(selector) {
            return "string" === typeof selector ? new Selection([ [ document.querySelector(selector) ] ], [ document.documentElement ]) : new Selection([ [ selector ] ], root);
        }, selectAll = function(selector) {
            return "string" === typeof selector ? new Selection([ document.querySelectorAll(selector) ], [ document.documentElement ]) : new Selection([ null == selector ? [] : selector ], root);
        }, touch = function(node, touches, identifier) {
            arguments.length < 3 && (identifier = touches, touches = sourceEvent().changedTouches);
            for (var touch, i = 0, n = touches ? touches.length : 0; i < n; ++i) if ((touch = touches[i]).identifier === identifier) return point(node, touch);
            return null;
        }, touches = function(node, touches) {
            null == touches && (touches = sourceEvent().touches);
            for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) points[i] = point(node, touches[i]);
            return points;
        }, noevent = function() {
            pear.event.preventDefault(), pear.event.stopImmediatePropagation();
        }, dragDisable = function(view) {
            var root = view.document.documentElement, selection$$1 = select(view).on("dragstart.drag", noevent, !0);
            "onselectstart" in root ? selection$$1.on("selectstart.drag", noevent, !0) : (root.__noselect = root.style.MozUserSelect, 
            root.style.MozUserSelect = "none");
        }, constant$2 = function(x) {
            return function() {
                return x;
            };
        };
        DragEvent.prototype.on = function() {
            var value = this._.on.apply(this._, arguments);
            return value === this._ ? this : value;
        };
        var drag = function() {
            function drag(selection) {
                selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
            }
            function mousedowned() {
                if (!touchending && filter.apply(this, arguments)) {
                    var gesture = beforestart("mouse", container.apply(this, arguments), mouse, this, arguments);
                    gesture && (select(pear.event.view).on("mousemove.drag", mousemoved, !0).on("mouseup.drag", mouseupped, !0), 
                    dragDisable(pear.event.view), nopropagation(), mousemoving = !1, mousedownx = pear.event.clientX, 
                    mousedowny = pear.event.clientY, gesture("start"));
                }
            }
            function mousemoved() {
                if (noevent(), !mousemoving) {
                    var dx = pear.event.clientX - mousedownx, dy = pear.event.clientY - mousedowny;
                    mousemoving = dx * dx + dy * dy > clickDistance2;
                }
                gestures.mouse("drag");
            }
            function mouseupped() {
                select(pear.event.view).on("mousemove.drag mouseup.drag", null), yesdrag(pear.event.view, mousemoving), 
                noevent(), gestures.mouse("end");
            }
            function touchstarted() {
                if (filter.apply(this, arguments)) {
                    var i, gesture, touches$$1 = pear.event.changedTouches, c = container.apply(this, arguments), n = touches$$1.length;
                    for (i = 0; i < n; ++i) (gesture = beforestart(touches$$1[i].identifier, c, touch, this, arguments)) && (nopropagation(), 
                    gesture("start"));
                }
            }
            function touchmoved() {
                var i, gesture, touches$$1 = pear.event.changedTouches, n = touches$$1.length;
                for (i = 0; i < n; ++i) (gesture = gestures[touches$$1[i].identifier]) && (noevent(), 
                gesture("drag"));
            }
            function touchended() {
                var i, gesture, touches$$1 = pear.event.changedTouches, n = touches$$1.length;
                for (touchending && clearTimeout(touchending), touchending = setTimeout(function() {
                    touchending = null;
                }, 500), i = 0; i < n; ++i) (gesture = gestures[touches$$1[i].identifier]) && (nopropagation(), 
                gesture("end"));
            }
            function beforestart(id, container, point, that, args) {
                var s, dx, dy, p = point(container, id), sublisteners = listeners.copy();
                if (customEvent(new DragEvent(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
                    return null != (pear.event.subject = s = subject.apply(that, args)) && (dx = s.x - p[0] || 0, 
                    dy = s.y - p[1] || 0, !0);
                })) return function gesture(type) {
                    var n, p0 = p;
                    switch (type) {
                      case "start":
                        gestures[id] = gesture, n = active++;
                        break;

                      case "end":
                        delete gestures[id], --active;

                      case "drag":
                        p = point(container, id), n = active;
                    }
                    customEvent(new DragEvent(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [ type, that, args ]);
                };
            }
            var mousedownx, mousedowny, mousemoving, touchending, filter = defaultFilter$1, container = defaultContainer, subject = defaultSubject, gestures = {}, listeners = dispatch("start", "drag", "end"), active = 0, clickDistance2 = 0;
            return drag.filter = function(_) {
                return arguments.length ? (filter = "function" === typeof _ ? _ : constant$2(!!_), 
                drag) : filter;
            }, drag.container = function(_) {
                return arguments.length ? (container = "function" === typeof _ ? _ : constant$2(_), 
                drag) : container;
            }, drag.subject = function(_) {
                return arguments.length ? (subject = "function" === typeof _ ? _ : constant$2(_), 
                drag) : subject;
            }, drag.on = function() {
                var value = listeners.on.apply(listeners, arguments);
                return value === listeners ? drag : value;
            }, drag.clickDistance = function(_) {
                return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
            }, drag;
        }, define = function(constructor, factory, prototype) {
            constructor.prototype = factory.prototype = prototype, prototype.constructor = constructor;
        }, reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex3 = /^#([0-9a-f]{3})$/, reHex6 = /^#([0-9a-f]{6})$/, reRgbInteger = new RegExp("^rgb\\(" + [ reI, reI, reI ] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [ reP, reP, reP ] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [ reI, reI, reI, reN ] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [ reP, reP, reP, reN ] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [ reN, reP, reP ] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [ reN, reP, reP, reN ] + "\\)$"), named = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
        define(Color, color, {
            displayable: function() {
                return this.rgb().displayable();
            },
            toString: function() {
                return this.rgb() + "";
            }
        }), define(Rgb, rgb, extend(Color, {
            brighter: function(k) {
                return k = null == k ? 1 / .7 : Math.pow(1 / .7, k), new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
            },
            darker: function(k) {
                return k = null == k ? .7 : Math.pow(.7, k), new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
            },
            rgb: function() {
                return this;
            },
            displayable: function() {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
            },
            toString: function() {
                var a = this.opacity;
                return a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a)), (1 === a ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === a ? ")" : ", " + a + ")");
            }
        })), define(Hsl, hsl, extend(Color, {
            brighter: function(k) {
                return k = null == k ? 1 / .7 : Math.pow(1 / .7, k), new Hsl(this.h, this.s, this.l * k, this.opacity);
            },
            darker: function(k) {
                return k = null == k ? .7 : Math.pow(.7, k), new Hsl(this.h, this.s, this.l * k, this.opacity);
            },
            rgb: function() {
                var h = this.h % 360 + 360 * (this.h < 0), s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < .5 ? l : 1 - l) * s, m1 = 2 * l - m2;
                return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
            }
        }));
        var deg2rad = Math.PI / 180, rad2deg = 180 / Math.PI, Xn = .95047, Yn = 1, Zn = 1.08883, t0 = 4 / 29, t1 = 6 / 29, t2 = 3 * t1 * t1, t3 = t1 * t1 * t1;
        define(Lab, lab, extend(Color, {
            brighter: function(k) {
                return new Lab(this.l + 18 * (null == k ? 1 : k), this.a, this.b, this.opacity);
            },
            darker: function(k) {
                return new Lab(this.l - 18 * (null == k ? 1 : k), this.a, this.b, this.opacity);
            },
            rgb: function() {
                var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
                return y = Yn * lab2xyz(y), x = Xn * lab2xyz(x), z = Zn * lab2xyz(z), new Rgb(xyz2rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), xyz2rgb(-.969266 * x + 1.8760108 * y + .041556 * z), xyz2rgb(.0556434 * x - .2040259 * y + 1.0572252 * z), this.opacity);
            }
        })), define(Hcl, hcl, extend(Color, {
            brighter: function(k) {
                return new Hcl(this.h, this.c, this.l + 18 * (null == k ? 1 : k), this.opacity);
            },
            darker: function(k) {
                return new Hcl(this.h, this.c, this.l - 18 * (null == k ? 1 : k), this.opacity);
            },
            rgb: function() {
                return labConvert(this).rgb();
            }
        }));
        var A = -.14861, B = 1.78277, C = -.29227, D = -.90649, E = 1.97294, ED = E * D, EB = E * B, BC_DA = B * C - D * A;
        define(Cubehelix, cubehelix, extend(Color, {
            brighter: function(k) {
                return k = null == k ? 1 / .7 : Math.pow(1 / .7, k), new Cubehelix(this.h, this.s, this.l * k, this.opacity);
            },
            darker: function(k) {
                return k = null == k ? .7 : Math.pow(.7, k), new Cubehelix(this.h, this.s, this.l * k, this.opacity);
            },
            rgb: function() {
                var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad, l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
                return new Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
            }
        }));
        var cssNode, cssRoot, cssView, svgNode, taskHead, taskTail, basis$1 = function(values) {
            var n = values.length - 1;
            return function(t) {
                var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
                return basis((t - i / n) * n, v0, v1, v2, v3);
            };
        }, basisClosed = function(values) {
            var n = values.length;
            return function(t) {
                var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
                return basis((t - i / n) * n, v0, v1, v2, v3);
            };
        }, constant$3 = function(x) {
            return function() {
                return x;
            };
        }, interpolateRgb = function rgbGamma(y) {
            function rgb$$1(start, end) {
                var r = color$$1((start = rgb(start)).r, (end = rgb(end)).r), g = color$$1(start.g, end.g), b = color$$1(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
                return function(t) {
                    return start.r = r(t), start.g = g(t), start.b = b(t), start.opacity = opacity(t), 
                    start + "";
                };
            }
            var color$$1 = gamma(y);
            return rgb$$1.gamma = rgbGamma, rgb$$1;
        }(1), rgbBasis = rgbSpline(basis$1), rgbBasisClosed = rgbSpline(basisClosed), array$1 = function(a, b) {
            var i, nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(nb), c = new Array(nb);
            for (i = 0; i < na; ++i) x[i] = interpolateValue(a[i], b[i]);
            for (;i < nb; ++i) c[i] = b[i];
            return function(t) {
                for (i = 0; i < na; ++i) c[i] = x[i](t);
                return c;
            };
        }, date = function(a, b) {
            var d = new Date();
            return a = +a, b -= a, function(t) {
                return d.setTime(a + b * t), d;
            };
        }, reinterpolate = function(a, b) {
            return a = +a, b -= a, function(t) {
                return a + b * t;
            };
        }, object = function(a, b) {
            var k, i = {}, c = {};
            null !== a && "object" === typeof a || (a = {}), null !== b && "object" === typeof b || (b = {});
            for (k in b) k in a ? i[k] = interpolateValue(a[k], b[k]) : c[k] = b[k];
            return function(t) {
                for (k in i) c[k] = i[k](t);
                return c;
            };
        }, reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g"), interpolateString = function(a, b) {
            var am, bm, bs, bi = reA.lastIndex = reB.lastIndex = 0, i = -1, s = [], q = [];
            for (a += "", b += ""; (am = reA.exec(a)) && (bm = reB.exec(b)); ) (bs = bm.index) > bi && (bs = b.slice(bi, bs), 
            s[i] ? s[i] += bs : s[++i] = bs), (am = am[0]) === (bm = bm[0]) ? s[i] ? s[i] += bm : s[++i] = bm : (s[++i] = null, 
            q.push({
                i: i,
                x: reinterpolate(am, bm)
            })), bi = reB.lastIndex;
            return bi < b.length && (bs = b.slice(bi), s[i] ? s[i] += bs : s[++i] = bs), s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, 
            function(t) {
                for (var o, i = 0; i < b; ++i) s[(o = q[i]).i] = o.x(t);
                return s.join("");
            });
        }, interpolateValue = function(a, b) {
            var c, t = typeof b;
            return null == b || "boolean" === t ? constant$3(b) : ("number" === t ? reinterpolate : "string" === t ? (c = color(b)) ? (b = c, 
            interpolateRgb) : interpolateString : b instanceof color ? interpolateRgb : b instanceof Date ? date : Array.isArray(b) ? array$1 : "function" !== typeof b.valueOf && "function" !== typeof b.toString || isNaN(b) ? object : reinterpolate)(a, b);
        }, interpolateRound = function(a, b) {
            return a = +a, b -= a, function(t) {
                return Math.round(a + b * t);
            };
        }, degrees = 180 / Math.PI, identity$2 = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        }, decompose = function(a, b, c, d, e, f) {
            var scaleX, scaleY, skewX;
            return (scaleX = Math.sqrt(a * a + b * b)) && (a /= scaleX, b /= scaleX), (skewX = a * c + b * d) && (c -= a * skewX, 
            d -= b * skewX), (scaleY = Math.sqrt(c * c + d * d)) && (c /= scaleY, d /= scaleY, 
            skewX /= scaleY), a * d < b * c && (a = -a, b = -b, skewX = -skewX, scaleX = -scaleX), 
            {
                translateX: e,
                translateY: f,
                rotate: Math.atan2(b, a) * degrees,
                skewX: Math.atan(skewX) * degrees,
                scaleX: scaleX,
                scaleY: scaleY
            };
        }, interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)"), interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")"), rho = Math.SQRT2, interpolateZoom = function(p0, p1) {
            var i, S, ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy;
            if (d2 < 1e-12) S = Math.log(w1 / w0) / rho, i = function(t) {
                return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S) ];
            }; else {
                var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + 4 * d2) / (2 * w0 * 2 * d1), b1 = (w1 * w1 - w0 * w0 - 4 * d2) / (2 * w1 * 2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
                S = (r1 - r0) / rho, i = function(t) {
                    var s = t * S, coshr0 = cosh(r0), u = w0 / (2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                    return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0) ];
                };
            }
            return i.duration = 1e3 * S, i;
        }, hsl$2 = hsl$1(hue), hslLong = hsl$1(nogamma), hcl$2 = hcl$1(hue), hclLong = hcl$1(nogamma), cubehelix$2 = cubehelix$1(hue), cubehelixLong = cubehelix$1(nogamma), quantize = function(interpolator, n) {
            for (var samples = new Array(n), i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
            return samples;
        }, frame = 0, timeout = 0, interval = 0, pokeDelay = 1e3, clockLast = 0, clockNow = 0, clockSkew = 0, clock = "object" === typeof performance && performance.now ? performance : Date, setFrame = "object" === typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
            setTimeout(f, 17);
        };
        Timer.prototype = timer.prototype = {
            constructor: Timer,
            restart: function(callback, delay, time) {
                if ("function" !== typeof callback) throw new TypeError("callback is not a function");
                time = (null == time ? now() : +time) + (null == delay ? 0 : +delay), this._next || taskTail === this || (taskTail ? taskTail._next = this : taskHead = this, 
                taskTail = this), this._call = callback, this._time = time, sleep();
            },
            stop: function() {
                this._call && (this._call = null, this._time = 1 / 0, sleep());
            }
        };
        var timeout$1 = function(callback, delay, time) {
            var t = new Timer();
            return delay = null == delay ? 0 : +delay, t.restart(function(elapsed) {
                t.stop(), callback(elapsed + delay);
            }, delay, time), t;
        }, interval$1 = function(callback, delay, time) {
            var t = new Timer(), total = delay;
            return null == delay ? (t.restart(callback, delay, time), t) : (delay = +delay, 
            time = null == time ? now() : +time, t.restart(function tick(elapsed) {
                elapsed += total, t.restart(tick, total += delay, time), callback(elapsed);
            }, delay, time), t);
        }, emptyOn = dispatch("start", "end", "interrupt"), emptyTween = [], CREATED = 0, SCHEDULED = 1, STARTING = 2, STARTED = 3, RUNNING = 4, ENDING = 5, ENDED = 6, schedule = function(node, name, id, index, group, timing) {
            var schedules = node.__transition;
            if (schedules) {
                if (id in schedules) return;
            } else node.__transition = {};
            create(node, id, {
                name: name,
                index: index,
                group: group,
                on: emptyOn,
                tween: emptyTween,
                time: timing.time,
                delay: timing.delay,
                duration: timing.duration,
                ease: timing.ease,
                timer: null,
                state: CREATED
            });
        }, interrupt = function(node, name) {
            var schedule$$1, active, i, schedules = node.__transition, empty = !0;
            if (schedules) {
                name = null == name ? null : name + "";
                for (i in schedules) (schedule$$1 = schedules[i]).name === name ? (active = schedule$$1.state > STARTING && schedule$$1.state < ENDING, 
                schedule$$1.state = ENDED, schedule$$1.timer.stop(), active && schedule$$1.on.call("interrupt", node, node.__data__, schedule$$1.index, schedule$$1.group), 
                delete schedules[i]) : empty = !1;
                empty && delete node.__transition;
            }
        }, selection_interrupt = function(name) {
            return this.each(function() {
                interrupt(this, name);
            });
        }, transition_tween = function(name, value) {
            var id = this._id;
            if (name += "", arguments.length < 2) {
                for (var t, tween = get$1(this.node(), id).tween, i = 0, n = tween.length; i < n; ++i) if ((t = tween[i]).name === name) return t.value;
                return null;
            }
            return this.each((null == value ? tweenRemove : tweenFunction)(id, name, value));
        }, interpolate = function(a, b) {
            var c;
            return ("number" === typeof b ? reinterpolate : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, 
            interpolateRgb) : interpolateString)(a, b);
        }, transition_attr = function(name, value) {
            var fullname = namespace(name), i = "transform" === fullname ? interpolateTransformSvg : interpolate;
            return this.attrTween(name, "function" === typeof value ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value)) : null == value ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname) : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value + ""));
        }, transition_attrTween = function(name, value) {
            var key = "attr." + name;
            if (arguments.length < 2) return (key = this.tween(key)) && key._value;
            if (null == value) return this.tween(key, null);
            if ("function" !== typeof value) throw new Error();
            var fullname = namespace(name);
            return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
        }, transition_delay = function(value) {
            var id = this._id;
            return arguments.length ? this.each(("function" === typeof value ? delayFunction : delayConstant)(id, value)) : get$1(this.node(), id).delay;
        }, transition_duration = function(value) {
            var id = this._id;
            return arguments.length ? this.each(("function" === typeof value ? durationFunction : durationConstant)(id, value)) : get$1(this.node(), id).duration;
        }, transition_ease = function(value) {
            var id = this._id;
            return arguments.length ? this.each(easeConstant(id, value)) : get$1(this.node(), id).ease;
        }, transition_filter = function(match) {
            "function" !== typeof match && (match = matcher$1(match));
            for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var node, group = groups[j], n = group.length, subgroup = subgroups[j] = [], i = 0; i < n; ++i) (node = group[i]) && match.call(node, node.__data__, i, group) && subgroup.push(node);
            return new Transition(subgroups, this._parents, this._name, this._id);
        }, transition_merge = function(transition$$1) {
            if (transition$$1._id !== this._id) throw new Error();
            for (var groups0 = this._groups, groups1 = transition$$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var node, group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), i = 0; i < n; ++i) (node = group0[i] || group1[i]) && (merge[i] = node);
            for (;j < m0; ++j) merges[j] = groups0[j];
            return new Transition(merges, this._parents, this._name, this._id);
        }, transition_on = function(name, listener) {
            var id = this._id;
            return arguments.length < 2 ? get$1(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
        }, transition_remove = function() {
            return this.on("end.remove", removeFunction(this._id));
        }, transition_select = function(select$$1) {
            var name = this._name, id = this._id;
            "function" !== typeof select$$1 && (select$$1 = selector(select$$1));
            for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var node, subnode, group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), i = 0; i < n; ++i) (node = group[i]) && (subnode = select$$1.call(node, node.__data__, i, group)) && ("__data__" in node && (subnode.__data__ = node.__data__), 
            subgroup[i] = subnode, schedule(subgroup[i], name, id, i, subgroup, get$1(node, id)));
            return new Transition(subgroups, this._parents, name, id);
        }, transition_selectAll = function(select$$1) {
            var name = this._name, id = this._id;
            "function" !== typeof select$$1 && (select$$1 = selectorAll(select$$1));
            for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var node, group = groups[j], n = group.length, i = 0; i < n; ++i) if (node = group[i]) {
                for (var child, children = select$$1.call(node, node.__data__, i, group), inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) (child = children[k]) && schedule(child, name, id, k, children, inherit);
                subgroups.push(children), parents.push(node);
            }
            return new Transition(subgroups, parents, name, id);
        }, Selection$1 = selection.prototype.constructor, transition_selection = function() {
            return new Selection$1(this._groups, this._parents);
        }, transition_style = function(name, value, priority) {
            var i = "transform" === (name += "") ? interpolateTransformCss : interpolate;
            return null == value ? this.styleTween(name, styleRemove$1(name, i)).on("end.style." + name, styleRemoveEnd(name)) : this.styleTween(name, "function" === typeof value ? styleFunction$1(name, i, tweenValue(this, "style." + name, value)) : styleConstant$1(name, i, value + ""), priority);
        }, transition_styleTween = function(name, value, priority) {
            var key = "style." + (name += "");
            if (arguments.length < 2) return (key = this.tween(key)) && key._value;
            if (null == value) return this.tween(key, null);
            if ("function" !== typeof value) throw new Error();
            return this.tween(key, styleTween(name, value, null == priority ? "" : priority));
        }, transition_text = function(value) {
            return this.tween("text", "function" === typeof value ? textFunction$1(tweenValue(this, "text", value)) : textConstant$1(null == value ? "" : value + ""));
        }, transition_transition = function() {
            for (var name = this._name, id0 = this._id, id1 = newId(), groups = this._groups, m = groups.length, j = 0; j < m; ++j) for (var node, group = groups[j], n = group.length, i = 0; i < n; ++i) if (node = group[i]) {
                var inherit = get$1(node, id0);
                schedule(node, name, id1, i, group, {
                    time: inherit.time + inherit.delay + inherit.duration,
                    delay: 0,
                    duration: inherit.duration,
                    ease: inherit.ease
                });
            }
            return new Transition(groups, this._parents, name, id1);
        }, id = 0, selection_prototype = selection.prototype;
        Transition.prototype = transition.prototype = {
            constructor: Transition,
            select: transition_select,
            selectAll: transition_selectAll,
            filter: transition_filter,
            merge: transition_merge,
            selection: transition_selection,
            transition: transition_transition,
            call: selection_prototype.call,
            nodes: selection_prototype.nodes,
            node: selection_prototype.node,
            size: selection_prototype.size,
            empty: selection_prototype.empty,
            each: selection_prototype.each,
            on: transition_on,
            attr: transition_attr,
            attrTween: transition_attrTween,
            style: transition_style,
            styleTween: transition_styleTween,
            text: transition_text,
            remove: transition_remove,
            tween: transition_tween,
            delay: transition_delay,
            duration: transition_duration,
            ease: transition_ease
        };
        var polyIn = function custom(e) {
            function polyIn(t) {
                return Math.pow(t, e);
            }
            return e = +e, polyIn.exponent = custom, polyIn;
        }(3), polyOut = function custom(e) {
            function polyOut(t) {
                return 1 - Math.pow(1 - t, e);
            }
            return e = +e, polyOut.exponent = custom, polyOut;
        }(3), polyInOut = function custom(e) {
            function polyInOut(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
            }
            return e = +e, polyInOut.exponent = custom, polyInOut;
        }(3), pi = Math.PI, halfPi = pi / 2, b1 = 4 / 11, b2 = 6 / 11, b3 = 8 / 11, b4 = .75, b5 = 9 / 11, b6 = 10 / 11, b7 = .9375, b8 = 21 / 22, b9 = 63 / 64, b0 = 1 / b1 / b1, backIn = function custom(s) {
            function backIn(t) {
                return t * t * ((s + 1) * t - s);
            }
            return s = +s, backIn.overshoot = custom, backIn;
        }(1.70158), backOut = function custom(s) {
            function backOut(t) {
                return --t * t * ((s + 1) * t + s) + 1;
            }
            return s = +s, backOut.overshoot = custom, backOut;
        }(1.70158), backInOut = function custom(s) {
            function backInOut(t) {
                return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
            }
            return s = +s, backInOut.overshoot = custom, backInOut;
        }(1.70158), tau = 2 * Math.PI, elasticIn = function custom(a, p) {
            function elasticIn(t) {
                return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
            }
            var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
            return elasticIn.amplitude = function(a) {
                return custom(a, p * tau);
            }, elasticIn.period = function(p) {
                return custom(a, p);
            }, elasticIn;
        }(1, .3), elasticOut = function custom(a, p) {
            function elasticOut(t) {
                return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
            }
            var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
            return elasticOut.amplitude = function(a) {
                return custom(a, p * tau);
            }, elasticOut.period = function(p) {
                return custom(a, p);
            }, elasticOut;
        }(1, .3), elasticInOut = function custom(a, p) {
            function elasticInOut(t) {
                return ((t = 2 * t - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
            }
            var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
            return elasticInOut.amplitude = function(a) {
                return custom(a, p * tau);
            }, elasticInOut.period = function(p) {
                return custom(a, p);
            }, elasticInOut;
        }(1, .3), defaultTiming = {
            time: null,
            delay: 0,
            duration: 250,
            ease: cubicInOut
        }, selection_transition = function(name) {
            var id, timing;
            name instanceof Transition ? (id = name._id, name = name._name) : (id = newId(), 
            (timing = defaultTiming).time = now(), name = null == name ? null : name + "");
            for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) for (var node, group = groups[j], n = group.length, i = 0; i < n; ++i) (node = group[i]) && schedule(node, name, id, i, group, timing || inherit(node, id));
            return new Transition(groups, this._parents, name, id);
        };
        selection.prototype.interrupt = selection_interrupt, selection.prototype.transition = selection_transition;
        var root$1 = [ null ], active = function(node, name) {
            var schedule$$1, i, schedules = node.__transition;
            if (schedules) {
                name = null == name ? null : name + "";
                for (i in schedules) if ((schedule$$1 = schedules[i]).state > SCHEDULED && schedule$$1.name === name) return new Transition([ [ node ] ], root$1, name, +i);
            }
            return null;
        }, constant$4 = function(x) {
            return function() {
                return x;
            };
        }, BrushEvent = function(target, type, selection) {
            this.target = target, this.type = type, this.selection = selection;
        }, noevent$1 = function() {
            pear.event.preventDefault(), pear.event.stopImmediatePropagation();
        }, MODE_DRAG = {
            name: "drag"
        }, MODE_SPACE = {
            name: "space"
        }, MODE_HANDLE = {
            name: "handle"
        }, MODE_CENTER = {
            name: "center"
        }, X = {
            name: "x",
            handles: [ "e", "w" ].map(type),
            input: function(x, e) {
                return x && [ [ x[0], e[0][1] ], [ x[1], e[1][1] ] ];
            },
            output: function(xy) {
                return xy && [ xy[0][0], xy[1][0] ];
            }
        }, Y = {
            name: "y",
            handles: [ "n", "s" ].map(type),
            input: function(y, e) {
                return y && [ [ e[0][0], y[0] ], [ e[1][0], y[1] ] ];
            },
            output: function(xy) {
                return xy && [ xy[0][1], xy[1][1] ];
            }
        }, XY = {
            name: "xy",
            handles: [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ].map(type),
            input: function(xy) {
                return xy;
            },
            output: function(xy) {
                return xy;
            }
        }, cursors = {
            overlay: "crosshair",
            selection: "move",
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        }, flipX = {
            e: "w",
            w: "e",
            nw: "ne",
            ne: "nw",
            se: "sw",
            sw: "se"
        }, flipY = {
            n: "s",
            s: "n",
            nw: "sw",
            ne: "se",
            se: "ne",
            sw: "nw"
        }, signsX = {
            overlay: 1,
            selection: 1,
            n: null,
            e: 1,
            s: null,
            w: -1,
            nw: -1,
            ne: 1,
            se: 1,
            sw: -1
        }, signsY = {
            overlay: 1,
            selection: 1,
            n: -1,
            e: null,
            s: 1,
            w: null,
            nw: -1,
            ne: -1,
            se: 1,
            sw: 1
        }, brush = function() {
            return brush$1(XY);
        }, cos = Math.cos, sin = Math.sin, pi$1 = Math.PI, halfPi$1 = pi$1 / 2, tau$1 = 2 * pi$1, max$1 = Math.max, chord = function() {
            function chord(matrix) {
                var k, x, x0, dx, i, j, n = matrix.length, groupSums = [], groupIndex = sequence(n), subgroupIndex = [], chords = [], groups = chords.groups = new Array(n), subgroups = new Array(n * n);
                for (k = 0, i = -1; ++i < n; ) {
                    for (x = 0, j = -1; ++j < n; ) x += matrix[i][j];
                    groupSums.push(x), subgroupIndex.push(sequence(n)), k += x;
                }
                for (sortGroups && groupIndex.sort(function(a, b) {
                    return sortGroups(groupSums[a], groupSums[b]);
                }), sortSubgroups && subgroupIndex.forEach(function(d, i) {
                    d.sort(function(a, b) {
                        return sortSubgroups(matrix[i][a], matrix[i][b]);
                    });
                }), k = max$1(0, tau$1 - padAngle * n) / k, dx = k ? padAngle : tau$1 / n, x = 0, 
                i = -1; ++i < n; ) {
                    for (x0 = x, j = -1; ++j < n; ) {
                        var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
                        subgroups[dj * n + di] = {
                            index: di,
                            subindex: dj,
                            startAngle: a0,
                            endAngle: a1,
                            value: v
                        };
                    }
                    groups[di] = {
                        index: di,
                        startAngle: x0,
                        endAngle: x,
                        value: groupSums[di]
                    }, x += dx;
                }
                for (i = -1; ++i < n; ) for (j = i - 1; ++j < n; ) {
                    var source = subgroups[j * n + i], target = subgroups[i * n + j];
                    (source.value || target.value) && chords.push(source.value < target.value ? {
                        source: target,
                        target: source
                    } : {
                        source: source,
                        target: target
                    });
                }
                return sortChords ? chords.sort(sortChords) : chords;
            }
            var padAngle = 0, sortGroups = null, sortSubgroups = null, sortChords = null;
            return chord.padAngle = function(_) {
                return arguments.length ? (padAngle = max$1(0, _), chord) : padAngle;
            }, chord.sortGroups = function(_) {
                return arguments.length ? (sortGroups = _, chord) : sortGroups;
            }, chord.sortSubgroups = function(_) {
                return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
            }, chord.sortChords = function(_) {
                return arguments.length ? (null == _ ? sortChords = null : (sortChords = compareValue(_))._ = _, 
                chord) : sortChords && sortChords._;
            }, chord;
        }, slice$2 = Array.prototype.slice, constant$5 = function(x) {
            return function() {
                return x;
            };
        }, pi$2 = Math.PI, tau$2 = 2 * pi$2, tauEpsilon = tau$2 - 1e-6;
        Path.prototype = path.prototype = {
            constructor: Path,
            moveTo: function(x, y) {
                this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
            },
            closePath: function() {
                null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
            },
            lineTo: function(x, y) {
                this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
            },
            quadraticCurveTo: function(x1, y1, x, y) {
                this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
            },
            bezierCurveTo: function(x1, y1, x2, y2, x, y) {
                this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
            },
            arcTo: function(x1, y1, x2, y2, r) {
                x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
                var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
                if (r < 0) throw new Error("negative radius: " + r);
                if (null === this._x1) this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1); else if (l01_2 > 1e-6) if (Math.abs(y01 * x21 - y21 * x01) > 1e-6 && r) {
                    var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi$2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
                    Math.abs(t01 - 1) > 1e-6 && (this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01)), 
                    this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
                } else this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1); else ;
            },
            arc: function(x, y, r, a0, a1, ccw) {
                x = +x, y = +y, r = +r;
                var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
                if (r < 0) throw new Error("negative radius: " + r);
                null === this._x1 ? this._ += "M" + x0 + "," + y0 : (Math.abs(this._x1 - x0) > 1e-6 || Math.abs(this._y1 - y0) > 1e-6) && (this._ += "L" + x0 + "," + y0), 
                r && (da < 0 && (da = da % tau$2 + tau$2), da > tauEpsilon ? this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0) : da > 1e-6 && (this._ += "A" + r + "," + r + ",0," + +(da >= pi$2) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1))));
            },
            rect: function(x, y, w, h) {
                this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
            },
            toString: function() {
                return this._;
            }
        };
        var ribbon = function() {
            function ribbon() {
                var buffer, argv = slice$2.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv), sr = +radius.apply(this, (argv[0] = s, 
                argv)), sa0 = startAngle.apply(this, argv) - halfPi$1, sa1 = endAngle.apply(this, argv) - halfPi$1, sx0 = sr * cos(sa0), sy0 = sr * sin(sa0), tr = +radius.apply(this, (argv[0] = t, 
                argv)), ta0 = startAngle.apply(this, argv) - halfPi$1, ta1 = endAngle.apply(this, argv) - halfPi$1;
                if (context || (context = buffer = path()), context.moveTo(sx0, sy0), context.arc(0, 0, sr, sa0, sa1), 
                sa0 === ta0 && sa1 === ta1 || (context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0)), 
                context.arc(0, 0, tr, ta0, ta1)), context.quadraticCurveTo(0, 0, sx0, sy0), context.closePath(), 
                buffer) return context = null, buffer + "" || null;
            }
            var source = defaultSource, target = defaultTarget, radius = defaultRadius, startAngle = defaultStartAngle, endAngle = defaultEndAngle, context = null;
            return ribbon.radius = function(_) {
                return arguments.length ? (radius = "function" === typeof _ ? _ : constant$5(+_), 
                ribbon) : radius;
            }, ribbon.startAngle = function(_) {
                return arguments.length ? (startAngle = "function" === typeof _ ? _ : constant$5(+_), 
                ribbon) : startAngle;
            }, ribbon.endAngle = function(_) {
                return arguments.length ? (endAngle = "function" === typeof _ ? _ : constant$5(+_), 
                ribbon) : endAngle;
            }, ribbon.source = function(_) {
                return arguments.length ? (source = _, ribbon) : source;
            }, ribbon.target = function(_) {
                return arguments.length ? (target = _, ribbon) : target;
            }, ribbon.context = function(_) {
                return arguments.length ? (context = null == _ ? null : _, ribbon) : context;
            }, ribbon;
        };
        Map.prototype = map$1.prototype = {
            constructor: Map,
            has: function(key) {
                return "$" + key in this;
            },
            get: function(key) {
                return this["$" + key];
            },
            set: function(key, value) {
                return this["$" + key] = value, this;
            },
            remove: function(key) {
                var property = "$" + key;
                return property in this && delete this[property];
            },
            clear: function() {
                for (var property in this) "$" === property[0] && delete this[property];
            },
            keys: function() {
                var keys = [];
                for (var property in this) "$" === property[0] && keys.push(property.slice(1));
                return keys;
            },
            values: function() {
                var values = [];
                for (var property in this) "$" === property[0] && values.push(this[property]);
                return values;
            },
            entries: function() {
                var entries = [];
                for (var property in this) "$" === property[0] && entries.push({
                    key: property.slice(1),
                    value: this[property]
                });
                return entries;
            },
            size: function() {
                var size = 0;
                for (var property in this) "$" === property[0] && ++size;
                return size;
            },
            empty: function() {
                for (var property in this) if ("$" === property[0]) return !1;
                return !0;
            },
            each: function(f) {
                for (var property in this) "$" === property[0] && f(this[property], property.slice(1), this);
            }
        };
        var nest = function() {
            function apply(array, depth, createResult, setResult) {
                if (depth >= keys.length) return null != sortValues && array.sort(sortValues), null != rollup ? rollup(array) : array;
                for (var keyValue, value, values, i = -1, n = array.length, key = keys[depth++], valuesByKey = map$1(), result = createResult(); ++i < n; ) (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) ? values.push(value) : valuesByKey.set(keyValue, [ value ]);
                return valuesByKey.each(function(values, key) {
                    setResult(result, key, apply(values, depth, createResult, setResult));
                }), result;
            }
            function entries(map, depth) {
                if (++depth > keys.length) return map;
                var array, sortKey = sortKeys[depth - 1];
                return null != rollup && depth >= keys.length ? array = map.entries() : (array = [], 
                map.each(function(v, k) {
                    array.push({
                        key: k,
                        values: entries(v, depth)
                    });
                })), null != sortKey ? array.sort(function(a, b) {
                    return sortKey(a.key, b.key);
                }) : array;
            }
            var sortValues, rollup, nest, keys = [], sortKeys = [];
            return nest = {
                object: function(array) {
                    return apply(array, 0, createObject, setObject);
                },
                map: function(array) {
                    return apply(array, 0, createMap, setMap);
                },
                entries: function(array) {
                    return entries(apply(array, 0, createMap, setMap), 0);
                },
                key: function(d) {
                    return keys.push(d), nest;
                },
                sortKeys: function(order) {
                    return sortKeys[keys.length - 1] = order, nest;
                },
                sortValues: function(order) {
                    return sortValues = order, nest;
                },
                rollup: function(f) {
                    return rollup = f, nest;
                }
            };
        }, proto = map$1.prototype;
        Set.prototype = set$2.prototype = {
            constructor: Set,
            has: proto.has,
            add: function(value) {
                return value += "", this["$" + value] = value, this;
            },
            remove: proto.remove,
            clear: proto.clear,
            values: proto.keys,
            size: proto.size,
            empty: proto.empty,
            each: proto.each
        };
        var keys = function(map) {
            var keys = [];
            for (var key in map) keys.push(key);
            return keys;
        }, values = function(map) {
            var values = [];
            for (var key in map) values.push(map[key]);
            return values;
        }, entries = function(map) {
            var entries = [];
            for (var key in map) entries.push({
                key: key,
                value: map[key]
            });
            return entries;
        }, dsv = function(delimiter) {
            function parse(text, f) {
                var convert, columns, rows = parseRows(text, function(row, i) {
                    if (convert) return convert(row, i - 1);
                    columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
                });
                return rows.columns = columns, rows;
            }
            function parseRows(text, f) {
                function token() {
                    if (I >= N) return EOF;
                    if (eol) return eol = !1, EOL;
                    var c, j = I;
                    if (34 === text.charCodeAt(j)) {
                        for (var i = j; i++ < N; ) if (34 === text.charCodeAt(i)) {
                            if (34 !== text.charCodeAt(i + 1)) break;
                            ++i;
                        }
                        return I = i + 2, c = text.charCodeAt(i + 1), 13 === c ? (eol = !0, 10 === text.charCodeAt(i + 2) && ++I) : 10 === c && (eol = !0), 
                        text.slice(j + 1, i).replace(/""/g, '"');
                    }
                    for (;I < N; ) {
                        var k = 1;
                        if (10 === (c = text.charCodeAt(I++))) eol = !0; else if (13 === c) eol = !0, 10 === text.charCodeAt(I) && (++I, 
                        ++k); else if (c !== delimiterCode) continue;
                        return text.slice(j, I - k);
                    }
                    return text.slice(j);
                }
                for (var t, eol, EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0; (t = token()) !== EOF; ) {
                    for (var a = []; t !== EOL && t !== EOF; ) a.push(t), t = token();
                    f && null == (a = f(a, n++)) || rows.push(a);
                }
                return rows;
            }
            function format(rows, columns) {
                return null == columns && (columns = inferColumns(rows)), [ columns.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
                    return columns.map(function(column) {
                        return formatValue(row[column]);
                    }).join(delimiter);
                })).join("\n");
            }
            function formatRows(rows) {
                return rows.map(formatRow).join("\n");
            }
            function formatRow(row) {
                return row.map(formatValue).join(delimiter);
            }
            function formatValue(text) {
                return null == text ? "" : reFormat.test(text += "") ? '"' + text.replace(/\"/g, '""') + '"' : text;
            }
            var reFormat = new RegExp('["' + delimiter + "\n\r]"), delimiterCode = delimiter.charCodeAt(0);
            return {
                parse: parse,
                parseRows: parseRows,
                format: format,
                formatRows: formatRows
            };
        }, csv = dsv(","), csvParse = csv.parse, csvParseRows = csv.parseRows, csvFormat = csv.format, csvFormatRows = csv.formatRows, tsv = dsv("\t"), tsvParse = tsv.parse, tsvParseRows = tsv.parseRows, tsvFormat = tsv.format, tsvFormatRows = tsv.formatRows, center$1 = function(x, y) {
            function force() {
                var i, node, n = nodes.length, sx = 0, sy = 0;
                for (i = 0; i < n; ++i) node = nodes[i], sx += node.x, sy += node.y;
                for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) node = nodes[i], node.x -= sx, 
                node.y -= sy;
            }
            var nodes;
            return null == x && (x = 0), null == y && (y = 0), force.initialize = function(_) {
                nodes = _;
            }, force.x = function(_) {
                return arguments.length ? (x = +_, force) : x;
            }, force.y = function(_) {
                return arguments.length ? (y = +_, force) : y;
            }, force;
        }, constant$6 = function(x) {
            return function() {
                return x;
            };
        }, jiggle = function() {
            return 1e-6 * (Math.random() - .5);
        }, tree_add = function(d) {
            var x = +this._x.call(null, d), y = +this._y.call(null, d);
            return add(this.cover(x, y), x, y, d);
        }, tree_cover = function(x, y) {
            if (isNaN(x = +x) || isNaN(y = +y)) return this;
            var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
            if (isNaN(x0)) x1 = (x0 = Math.floor(x)) + 1, y1 = (y0 = Math.floor(y)) + 1; else {
                if (!(x0 > x || x > x1 || y0 > y || y > y1)) return this;
                var parent, i, z = x1 - x0, node = this._root;
                switch (i = (y < (y0 + y1) / 2) << 1 | x < (x0 + x1) / 2) {
                  case 0:
                    do {
                        parent = new Array(4), parent[i] = node, node = parent;
                    } while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
                    break;

                  case 1:
                    do {
                        parent = new Array(4), parent[i] = node, node = parent;
                    } while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
                    break;

                  case 2:
                    do {
                        parent = new Array(4), parent[i] = node, node = parent;
                    } while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
                    break;

                  case 3:
                    do {
                        parent = new Array(4), parent[i] = node, node = parent;
                    } while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
                }
                this._root && this._root.length && (this._root = node);
            }
            return this._x0 = x0, this._y0 = y0, this._x1 = x1, this._y1 = y1, this;
        }, tree_data = function() {
            var data = [];
            return this.visit(function(node) {
                if (!node.length) do {
                    data.push(node.data);
                } while (node = node.next);
            }), data;
        }, tree_extent = function(_) {
            return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? void 0 : [ [ this._x0, this._y0 ], [ this._x1, this._y1 ] ];
        }, Quad = function(node, x0, y0, x1, y1) {
            this.node = node, this.x0 = x0, this.y0 = y0, this.x1 = x1, this.y1 = y1;
        }, tree_find = function(x, y, radius) {
            var data, x1, y1, x2, y2, q, i, x0 = this._x0, y0 = this._y0, x3 = this._x1, y3 = this._y1, quads = [], node = this._root;
            for (node && quads.push(new Quad(node, x0, y0, x3, y3)), null == radius ? radius = 1 / 0 : (x0 = x - radius, 
            y0 = y - radius, x3 = x + radius, y3 = y + radius, radius *= radius); q = quads.pop(); ) if (!(!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0)) if (node.length) {
                var xm = (x1 + x2) / 2, ym = (y1 + y2) / 2;
                quads.push(new Quad(node[3], xm, ym, x2, y2), new Quad(node[2], x1, ym, xm, y2), new Quad(node[1], xm, y1, x2, ym), new Quad(node[0], x1, y1, xm, ym)), 
                (i = (y >= ym) << 1 | x >= xm) && (q = quads[quads.length - 1], quads[quads.length - 1] = quads[quads.length - 1 - i], 
                quads[quads.length - 1 - i] = q);
            } else {
                var dx = x - +this._x.call(null, node.data), dy = y - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
                if (d2 < radius) {
                    var d = Math.sqrt(radius = d2);
                    x0 = x - d, y0 = y - d, x3 = x + d, y3 = y + d, data = node.data;
                }
            }
            return data;
        }, tree_remove = function(d) {
            if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this;
            var parent, retainer, previous, next, x, y, xm, ym, right, bottom, i, j, node = this._root, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
            if (!node) return this;
            if (node.length) for (;;) {
                if ((right = x >= (xm = (x0 + x1) / 2)) ? x0 = xm : x1 = xm, (bottom = y >= (ym = (y0 + y1) / 2)) ? y0 = ym : y1 = ym, 
                parent = node, !(node = node[i = bottom << 1 | right])) return this;
                if (!node.length) break;
                (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) && (retainer = parent, 
                j = i);
            }
            for (;node.data !== d; ) if (previous = node, !(node = node.next)) return this;
            return (next = node.next) && delete node.next, previous ? (next ? previous.next = next : delete previous.next, 
            this) : parent ? (next ? parent[i] = next : delete parent[i], (node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length && (retainer ? retainer[j] = node : this._root = node), 
            this) : (this._root = next, this);
        }, tree_root = function() {
            return this._root;
        }, tree_size = function() {
            var size = 0;
            return this.visit(function(node) {
                if (!node.length) do {
                    ++size;
                } while (node = node.next);
            }), size;
        }, tree_visit = function(callback) {
            var q, child, x0, y0, x1, y1, quads = [], node = this._root;
            for (node && quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1)); q = quads.pop(); ) if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
                var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
                (child = node[3]) && quads.push(new Quad(child, xm, ym, x1, y1)), (child = node[2]) && quads.push(new Quad(child, x0, ym, xm, y1)), 
                (child = node[1]) && quads.push(new Quad(child, xm, y0, x1, ym)), (child = node[0]) && quads.push(new Quad(child, x0, y0, xm, ym));
            }
            return this;
        }, tree_visitAfter = function(callback) {
            var q, quads = [], next = [];
            for (this._root && quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1)); q = quads.pop(); ) {
                var node = q.node;
                if (node.length) {
                    var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
                    (child = node[0]) && quads.push(new Quad(child, x0, y0, xm, ym)), (child = node[1]) && quads.push(new Quad(child, xm, y0, x1, ym)), 
                    (child = node[2]) && quads.push(new Quad(child, x0, ym, xm, y1)), (child = node[3]) && quads.push(new Quad(child, xm, ym, x1, y1));
                }
                next.push(q);
            }
            for (;q = next.pop(); ) callback(q.node, q.x0, q.y0, q.x1, q.y1);
            return this;
        }, tree_x = function(_) {
            return arguments.length ? (this._x = _, this) : this._x;
        }, tree_y = function(_) {
            return arguments.length ? (this._y = _, this) : this._y;
        }, treeProto = quadtree.prototype = Quadtree.prototype;
        treeProto.copy = function() {
            var nodes, child, copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root;
            if (!node) return copy;
            if (!node.length) return copy._root = leaf_copy(node), copy;
            for (nodes = [ {
                source: node,
                target: copy._root = new Array(4)
            } ]; node = nodes.pop(); ) for (var i = 0; i < 4; ++i) (child = node.source[i]) && (child.length ? nodes.push({
                source: child,
                target: node.target[i] = new Array(4)
            }) : node.target[i] = leaf_copy(child));
            return copy;
        }, treeProto.add = tree_add, treeProto.addAll = addAll, treeProto.cover = tree_cover, 
        treeProto.data = tree_data, treeProto.extent = tree_extent, treeProto.find = tree_find, 
        treeProto.remove = tree_remove, treeProto.removeAll = removeAll, treeProto.root = tree_root, 
        treeProto.size = tree_size, treeProto.visit = tree_visit, treeProto.visitAfter = tree_visitAfter, 
        treeProto.x = tree_x, treeProto.y = tree_y;
        var prefixExponent, collide = function(radius) {
            function force() {
                function apply(quad, x0, y0, x1, y1) {
                    var data = quad.data, rj = quad.r, r = ri + rj;
                    {
                        if (!data) return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
                        if (data.index > node.index) {
                            var x = xi - data.x - data.vx, y = yi - data.y - data.vy, l = x * x + y * y;
                            l < r * r && (0 === x && (x = jiggle(), l += x * x), 0 === y && (y = jiggle(), l += y * y), 
                            l = (r - (l = Math.sqrt(l))) / l * strength, node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj)), 
                            node.vy += (y *= l) * r, data.vx -= x * (r = 1 - r), data.vy -= y * r);
                        }
                    }
                }
                for (var i, tree, node, xi, yi, ri, ri2, n = nodes.length, k = 0; k < iterations; ++k) for (tree = quadtree(nodes, x, y).visitAfter(prepare), 
                i = 0; i < n; ++i) node = nodes[i], ri = radii[node.index], ri2 = ri * ri, xi = node.x + node.vx, 
                yi = node.y + node.vy, tree.visit(apply);
            }
            function prepare(quad) {
                if (quad.data) return quad.r = radii[quad.data.index];
                for (var i = quad.r = 0; i < 4; ++i) quad[i] && quad[i].r > quad.r && (quad.r = quad[i].r);
            }
            function initialize() {
                if (nodes) {
                    var i, node, n = nodes.length;
                    for (radii = new Array(n), i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
                }
            }
            var nodes, radii, strength = 1, iterations = 1;
            return "function" !== typeof radius && (radius = constant$6(null == radius ? 1 : +radius)), 
            force.initialize = function(_) {
                nodes = _, initialize();
            }, force.iterations = function(_) {
                return arguments.length ? (iterations = +_, force) : iterations;
            }, force.strength = function(_) {
                return arguments.length ? (strength = +_, force) : strength;
            }, force.radius = function(_) {
                return arguments.length ? (radius = "function" === typeof _ ? _ : constant$6(+_), 
                initialize(), force) : radius;
            }, force;
        }, link = function(links) {
            function defaultStrength(link) {
                return 1 / Math.min(count[link.source.index], count[link.target.index]);
            }
            function force(alpha) {
                for (var k = 0, n = links.length; k < iterations; ++k) for (var link, source, target, x, y, l, b, i = 0; i < n; ++i) link = links[i], 
                source = link.source, target = link.target, x = target.x + target.vx - source.x - source.vx || jiggle(), 
                y = target.y + target.vy - source.y - source.vy || jiggle(), l = Math.sqrt(x * x + y * y), 
                l = (l - distances[i]) / l * alpha * strengths[i], x *= l, y *= l, target.vx -= x * (b = bias[i]), 
                target.vy -= y * b, source.vx += x * (b = 1 - b), source.vy += y * b;
            }
            function initialize() {
                if (nodes) {
                    var i, link, n = nodes.length, m = links.length, nodeById = map$1(nodes, id);
                    for (i = 0, count = new Array(n); i < m; ++i) link = links[i], link.index = i, "object" !== typeof link.source && (link.source = find(nodeById, link.source)), 
                    "object" !== typeof link.target && (link.target = find(nodeById, link.target)), 
                    count[link.source.index] = (count[link.source.index] || 0) + 1, count[link.target.index] = (count[link.target.index] || 0) + 1;
                    for (i = 0, bias = new Array(m); i < m; ++i) link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
                    strengths = new Array(m), initializeStrength(), distances = new Array(m), initializeDistance();
                }
            }
            function initializeStrength() {
                if (nodes) for (var i = 0, n = links.length; i < n; ++i) strengths[i] = +strength(links[i], i, links);
            }
            function initializeDistance() {
                if (nodes) for (var i = 0, n = links.length; i < n; ++i) distances[i] = +distance(links[i], i, links);
            }
            var strengths, distances, nodes, count, bias, id = index, strength = defaultStrength, distance = constant$6(30), iterations = 1;
            return null == links && (links = []), force.initialize = function(_) {
                nodes = _, initialize();
            }, force.links = function(_) {
                return arguments.length ? (links = _, initialize(), force) : links;
            }, force.id = function(_) {
                return arguments.length ? (id = _, force) : id;
            }, force.iterations = function(_) {
                return arguments.length ? (iterations = +_, force) : iterations;
            }, force.strength = function(_) {
                return arguments.length ? (strength = "function" === typeof _ ? _ : constant$6(+_), 
                initializeStrength(), force) : strength;
            }, force.distance = function(_) {
                return arguments.length ? (distance = "function" === typeof _ ? _ : constant$6(+_), 
                initializeDistance(), force) : distance;
            }, force;
        }, initialRadius = 10, initialAngle = Math.PI * (3 - Math.sqrt(5)), simulation = function(nodes) {
            function step() {
                tick(), event.call("tick", simulation), alpha < alphaMin && (stepper.stop(), event.call("end", simulation));
            }
            function tick() {
                var i, node, n = nodes.length;
                for (alpha += (alphaTarget - alpha) * alphaDecay, forces.each(function(force) {
                    force(alpha);
                }), i = 0; i < n; ++i) node = nodes[i], null == node.fx ? node.x += node.vx *= velocityDecay : (node.x = node.fx, 
                node.vx = 0), null == node.fy ? node.y += node.vy *= velocityDecay : (node.y = node.fy, 
                node.vy = 0);
            }
            function initializeNodes() {
                for (var node, i = 0, n = nodes.length; i < n; ++i) {
                    if (node = nodes[i], node.index = i, isNaN(node.x) || isNaN(node.y)) {
                        var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
                        node.x = radius * Math.cos(angle), node.y = radius * Math.sin(angle);
                    }
                    (isNaN(node.vx) || isNaN(node.vy)) && (node.vx = node.vy = 0);
                }
            }
            function initializeForce(force) {
                return force.initialize && force.initialize(nodes), force;
            }
            var simulation, alpha = 1, alphaMin = .001, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = .6, forces = map$1(), stepper = timer(step), event = dispatch("tick", "end");
            return null == nodes && (nodes = []), initializeNodes(), simulation = {
                tick: tick,
                restart: function() {
                    return stepper.restart(step), simulation;
                },
                stop: function() {
                    return stepper.stop(), simulation;
                },
                nodes: function(_) {
                    return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), 
                    simulation) : nodes;
                },
                alpha: function(_) {
                    return arguments.length ? (alpha = +_, simulation) : alpha;
                },
                alphaMin: function(_) {
                    return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
                },
                alphaDecay: function(_) {
                    return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
                },
                alphaTarget: function(_) {
                    return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
                },
                velocityDecay: function(_) {
                    return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
                },
                force: function(name, _) {
                    return arguments.length > 1 ? (null == _ ? forces.remove(name) : forces.set(name, initializeForce(_)), 
                    simulation) : forces.get(name);
                },
                find: function(x, y, radius) {
                    var dx, dy, d2, node, closest, i = 0, n = nodes.length;
                    for (null == radius ? radius = 1 / 0 : radius *= radius, i = 0; i < n; ++i) node = nodes[i], 
                    dx = x - node.x, dy = y - node.y, (d2 = dx * dx + dy * dy) < radius && (closest = node, 
                    radius = d2);
                    return closest;
                },
                on: function(name, _) {
                    return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
                }
            };
        }, manyBody = function() {
            function force(_) {
                var i, n = nodes.length, tree = quadtree(nodes, x$1, y$1).visitAfter(accumulate);
                for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
            }
            function initialize() {
                if (nodes) {
                    var i, node, n = nodes.length;
                    for (strengths = new Array(n), i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
                }
            }
            function accumulate(quad) {
                var q, c, x, y, i, strength = 0;
                if (quad.length) {
                    for (x = y = i = 0; i < 4; ++i) (q = quad[i]) && (c = q.value) && (strength += c, 
                    x += c * q.x, y += c * q.y);
                    quad.x = x / strength, quad.y = y / strength;
                } else {
                    q = quad, q.x = q.data.x, q.y = q.data.y;
                    do {
                        strength += strengths[q.data.index];
                    } while (q = q.next);
                }
                quad.value = strength;
            }
            function apply(quad, x1, _, x2) {
                if (!quad.value) return !0;
                var x = quad.x - node.x, y = quad.y - node.y, w = x2 - x1, l = x * x + y * y;
                if (w * w / theta2 < l) return l < distanceMax2 && (0 === x && (x = jiggle(), l += x * x), 
                0 === y && (y = jiggle(), l += y * y), l < distanceMin2 && (l = Math.sqrt(distanceMin2 * l)), 
                node.vx += x * quad.value * alpha / l, node.vy += y * quad.value * alpha / l), !0;
                if (!(quad.length || l >= distanceMax2)) {
                    (quad.data !== node || quad.next) && (0 === x && (x = jiggle(), l += x * x), 0 === y && (y = jiggle(), 
                    l += y * y), l < distanceMin2 && (l = Math.sqrt(distanceMin2 * l)));
                    do {
                        quad.data !== node && (w = strengths[quad.data.index] * alpha / l, node.vx += x * w, 
                        node.vy += y * w);
                    } while (quad = quad.next);
                }
            }
            var nodes, node, alpha, strengths, strength = constant$6(-30), distanceMin2 = 1, distanceMax2 = 1 / 0, theta2 = .81;
            return force.initialize = function(_) {
                nodes = _, initialize();
            }, force.strength = function(_) {
                return arguments.length ? (strength = "function" === typeof _ ? _ : constant$6(+_), 
                initialize(), force) : strength;
            }, force.distanceMin = function(_) {
                return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
            }, force.distanceMax = function(_) {
                return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
            }, force.theta = function(_) {
                return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
            }, force;
        }, x$2 = function(x) {
            function force(alpha) {
                for (var node, i = 0, n = nodes.length; i < n; ++i) node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
            }
            function initialize() {
                if (nodes) {
                    var i, n = nodes.length;
                    for (strengths = new Array(n), xz = new Array(n), i = 0; i < n; ++i) strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
                }
            }
            var nodes, strengths, xz, strength = constant$6(.1);
            return "function" !== typeof x && (x = constant$6(null == x ? 0 : +x)), force.initialize = function(_) {
                nodes = _, initialize();
            }, force.strength = function(_) {
                return arguments.length ? (strength = "function" === typeof _ ? _ : constant$6(+_), 
                initialize(), force) : strength;
            }, force.x = function(_) {
                return arguments.length ? (x = "function" === typeof _ ? _ : constant$6(+_), initialize(), 
                force) : x;
            }, force;
        }, y$2 = function(y) {
            function force(alpha) {
                for (var node, i = 0, n = nodes.length; i < n; ++i) node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
            }
            function initialize() {
                if (nodes) {
                    var i, n = nodes.length;
                    for (strengths = new Array(n), yz = new Array(n), i = 0; i < n; ++i) strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
                }
            }
            var nodes, strengths, yz, strength = constant$6(.1);
            return "function" !== typeof y && (y = constant$6(null == y ? 0 : +y)), force.initialize = function(_) {
                nodes = _, initialize();
            }, force.strength = function(_) {
                return arguments.length ? (strength = "function" === typeof _ ? _ : constant$6(+_), 
                initialize(), force) : strength;
            }, force.y = function(_) {
                return arguments.length ? (y = "function" === typeof _ ? _ : constant$6(+_), initialize(), 
                force) : y;
            }, force;
        }, formatDecimal = function(x, p) {
            if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null;
            var i, coefficient = x.slice(0, i);
            return [ coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1) ];
        }, exponent$1 = function(x) {
            return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
        }, formatGroup = function(grouping, thousands) {
            return function(value, width) {
                for (var i = value.length, t = [], j = 0, g = grouping[0], length = 0; i > 0 && g > 0 && (length + g + 1 > width && (g = Math.max(1, width - length)), 
                t.push(value.substring(i -= g, i + g)), !((length += g + 1) > width)); ) g = grouping[j = (j + 1) % grouping.length];
                return t.reverse().join(thousands);
            };
        }, formatNumerals = function(numerals) {
            return function(value) {
                return value.replace(/[0-9]/g, function(i) {
                    return numerals[+i];
                });
            };
        }, formatDefault = function(x, p) {
            x = x.toPrecision(p);
            out: for (var i1, n = x.length, i = 1, i0 = -1; i < n; ++i) switch (x[i]) {
              case ".":
                i0 = i1 = i;
                break;

              case "0":
                0 === i0 && (i0 = i), i1 = i;
                break;

              case "e":
                break out;

              default:
                i0 > 0 && (i0 = 0);
            }
            return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
        }, formatPrefixAuto = function(x, p) {
            var d = formatDecimal(x, p);
            if (!d) return x + "";
            var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = 3 * Math.max(-8, Math.min(8, Math.floor(exponent / 3)))) + 1, n = coefficient.length;
            return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0];
        }, formatRounded = function(x, p) {
            var d = formatDecimal(x, p);
            if (!d) return x + "";
            var coefficient = d[0], exponent = d[1];
            return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
        }, formatTypes = {
            "": formatDefault,
            "%": function(x, p) {
                return (100 * x).toFixed(p);
            },
            b: function(x) {
                return Math.round(x).toString(2);
            },
            c: function(x) {
                return x + "";
            },
            d: function(x) {
                return Math.round(x).toString(10);
            },
            e: function(x, p) {
                return x.toExponential(p);
            },
            f: function(x, p) {
                return x.toFixed(p);
            },
            g: function(x, p) {
                return x.toPrecision(p);
            },
            o: function(x) {
                return Math.round(x).toString(8);
            },
            p: function(x, p) {
                return formatRounded(100 * x, p);
            },
            r: formatRounded,
            s: formatPrefixAuto,
            X: function(x) {
                return Math.round(x).toString(16).toUpperCase();
            },
            x: function(x) {
                return Math.round(x).toString(16);
            }
        }, re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
        formatSpecifier.prototype = FormatSpecifier.prototype, FormatSpecifier.prototype.toString = function() {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
        };
        var locale$1, identity$3 = function(x) {
            return x;
        }, prefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ], formatLocale = function(locale) {
            function newFormat(specifier) {
                function format(value) {
                    var i, n, c, valuePrefix = prefix, valueSuffix = suffix;
                    if ("c" === type) valueSuffix = formatType(value) + valueSuffix, value = ""; else {
                        value = +value;
                        var valueNegative = value < 0;
                        if (value = formatType(Math.abs(value), precision), valueNegative && 0 === +value && (valueNegative = !1), 
                        valuePrefix = (valueNegative ? "(" === sign ? sign : "-" : "-" === sign || "(" === sign ? "" : sign) + valuePrefix, 
                        valueSuffix = valueSuffix + ("s" === type ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && "(" === sign ? ")" : ""), 
                        maybeSuffix) for (i = -1, n = value.length; ++i < n; ) if (48 > (c = value.charCodeAt(i)) || c > 57) {
                            valueSuffix = (46 === c ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix, 
                            value = value.slice(0, i);
                            break;
                        }
                    }
                    comma && !zero && (value = group(value, 1 / 0));
                    var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
                    switch (comma && zero && (value = group(padding + value, padding.length ? width - valueSuffix.length : 1 / 0), 
                    padding = ""), align) {
                      case "<":
                        value = valuePrefix + value + valueSuffix + padding;
                        break;

                      case "=":
                        value = valuePrefix + padding + value + valueSuffix;
                        break;

                      case "^":
                        value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                        break;

                      default:
                        value = padding + valuePrefix + value + valueSuffix;
                    }
                    return numerals(value);
                }
                specifier = formatSpecifier(specifier);
                var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, type = specifier.type, prefix = "$" === symbol ? currency[0] : "#" === symbol && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = "$" === symbol ? currency[1] : /[%p]/.test(type) ? percent : "", formatType = formatTypes[type], maybeSuffix = !type || /[defgprs%]/.test(type);
                return precision = null == precision ? type ? 6 : 12 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision)), 
                format.toString = function() {
                    return specifier + "";
                }, format;
            }
            function formatPrefix(specifier, value) {
                var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", 
                specifier)), e = 3 * Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))), k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
                return function(value) {
                    return f(k * value) + prefix;
                };
            }
            var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$3, currency = locale.currency, decimal = locale.decimal, numerals = locale.numerals ? formatNumerals(locale.numerals) : identity$3, percent = locale.percent || "%";
            return {
                format: newFormat,
                formatPrefix: formatPrefix
            };
        };
        defaultLocale({
            decimal: ".",
            thousands: ",",
            grouping: [ 3 ],
            currency: [ "$", "" ]
        });
        var precisionFixed = function(step) {
            return Math.max(0, -exponent$1(Math.abs(step)));
        }, precisionPrefix = function(step, value) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) - exponent$1(Math.abs(step)));
        }, precisionRound = function(step, max) {
            return step = Math.abs(step), max = Math.abs(max) - step, Math.max(0, exponent$1(max) - exponent$1(step)) + 1;
        }, adder = function() {
            return new Adder();
        };
        Adder.prototype = {
            constructor: Adder,
            reset: function() {
                this.s = this.t = 0;
            },
            add: function(y) {
                add$1(temp, y, this.t), add$1(this, temp.s, this.s), this.s ? this.t += temp.t : this.s = temp.t;
            },
            valueOf: function() {
                return this.s;
            }
        };
        var lambda00, phi00, lambda0, cosPhi0, sinPhi0, lambda0$1, phi0, lambda1, phi1, lambda2, lambda00$1, phi00$1, p0, ranges, range, W0, W1, X0, Y0, Z0, X1, Y1, Z1, X2, Y2, Z2, lambda00$2, phi00$2, x0, y0, z0, temp = new Adder(), epsilon$2 = 1e-6, pi$3 = Math.PI, halfPi$2 = pi$3 / 2, quarterPi = pi$3 / 4, tau$3 = 2 * pi$3, degrees$1 = 180 / pi$3, radians = pi$3 / 180, abs = Math.abs, atan = Math.atan, atan2 = Math.atan2, cos$1 = Math.cos, ceil = Math.ceil, exp = Math.exp, log = Math.log, pow = Math.pow, sin$1 = Math.sin, sign = Math.sign || function(x) {
            return x > 0 ? 1 : x < 0 ? -1 : 0;
        }, sqrt = Math.sqrt, tan = Math.tan, streamObjectType = {
            Feature: function(object, stream) {
                streamGeometry(object.geometry, stream);
            },
            FeatureCollection: function(object, stream) {
                for (var features = object.features, i = -1, n = features.length; ++i < n; ) streamGeometry(features[i].geometry, stream);
            }
        }, streamGeometryType = {
            Sphere: function(object, stream) {
                stream.sphere();
            },
            Point: function(object, stream) {
                object = object.coordinates, stream.point(object[0], object[1], object[2]);
            },
            MultiPoint: function(object, stream) {
                for (var coordinates = object.coordinates, i = -1, n = coordinates.length; ++i < n; ) object = coordinates[i], 
                stream.point(object[0], object[1], object[2]);
            },
            LineString: function(object, stream) {
                streamLine(object.coordinates, stream, 0);
            },
            MultiLineString: function(object, stream) {
                for (var coordinates = object.coordinates, i = -1, n = coordinates.length; ++i < n; ) streamLine(coordinates[i], stream, 0);
            },
            Polygon: function(object, stream) {
                streamPolygon(object.coordinates, stream);
            },
            MultiPolygon: function(object, stream) {
                for (var coordinates = object.coordinates, i = -1, n = coordinates.length; ++i < n; ) streamPolygon(coordinates[i], stream);
            },
            GeometryCollection: function(object, stream) {
                for (var geometries = object.geometries, i = -1, n = geometries.length; ++i < n; ) streamGeometry(geometries[i], stream);
            }
        }, geoStream = function(object, stream) {
            object && streamObjectType.hasOwnProperty(object.type) ? streamObjectType[object.type](object, stream) : streamGeometry(object, stream);
        }, areaRingSum = adder(), areaSum = adder(), areaStream = {
            point: noop$1,
            lineStart: noop$1,
            lineEnd: noop$1,
            polygonStart: function() {
                areaRingSum.reset(), areaStream.lineStart = areaRingStart, areaStream.lineEnd = areaRingEnd;
            },
            polygonEnd: function() {
                var areaRing = +areaRingSum;
                areaSum.add(areaRing < 0 ? tau$3 + areaRing : areaRing), this.lineStart = this.lineEnd = this.point = noop$1;
            },
            sphere: function() {
                areaSum.add(tau$3);
            }
        }, area = function(object) {
            return areaSum.reset(), geoStream(object, areaStream), 2 * areaSum;
        }, deltaSum = adder(), boundsStream = {
            point: boundsPoint,
            lineStart: boundsLineStart,
            lineEnd: boundsLineEnd,
            polygonStart: function() {
                boundsStream.point = boundsRingPoint, boundsStream.lineStart = boundsRingStart, 
                boundsStream.lineEnd = boundsRingEnd, deltaSum.reset(), areaStream.polygonStart();
            },
            polygonEnd: function() {
                areaStream.polygonEnd(), boundsStream.point = boundsPoint, boundsStream.lineStart = boundsLineStart, 
                boundsStream.lineEnd = boundsLineEnd, areaRingSum < 0 ? (lambda0$1 = -(lambda1 = 180), 
                phi0 = -(phi1 = 90)) : deltaSum > epsilon$2 ? phi1 = 90 : deltaSum < -epsilon$2 && (phi0 = -90), 
                range[0] = lambda0$1, range[1] = lambda1;
            }
        }, bounds = function(feature) {
            var i, n, a, b, merged, deltaMax, delta;
            if (phi1 = lambda1 = -(lambda0$1 = phi0 = 1 / 0), ranges = [], geoStream(feature, boundsStream), 
            n = ranges.length) {
                for (ranges.sort(rangeCompare), i = 1, a = ranges[0], merged = [ a ]; i < n; ++i) b = ranges[i], 
                rangeContains(a, b[0]) || rangeContains(a, b[1]) ? (angle(a[0], b[1]) > angle(a[0], a[1]) && (a[1] = b[1]), 
                angle(b[0], a[1]) > angle(a[0], a[1]) && (a[0] = b[0])) : merged.push(a = b);
                for (deltaMax = -1 / 0, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, 
                ++i) b = merged[i], (delta = angle(a[1], b[0])) > deltaMax && (deltaMax = delta, 
                lambda0$1 = b[0], lambda1 = a[1]);
            }
            return ranges = range = null, lambda0$1 === 1 / 0 || phi0 === 1 / 0 ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ lambda0$1, phi0 ], [ lambda1, phi1 ] ];
        }, centroidStream = {
            sphere: noop$1,
            point: centroidPoint,
            lineStart: centroidLineStart,
            lineEnd: centroidLineEnd,
            polygonStart: function() {
                centroidStream.lineStart = centroidRingStart, centroidStream.lineEnd = centroidRingEnd;
            },
            polygonEnd: function() {
                centroidStream.lineStart = centroidLineStart, centroidStream.lineEnd = centroidLineEnd;
            }
        }, centroid = function(object) {
            W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0, geoStream(object, centroidStream);
            var x = X2, y = Y2, z = Z2, m = x * x + y * y + z * z;
            return m < 1e-12 && (x = X1, y = Y1, z = Z1, W1 < epsilon$2 && (x = X0, y = Y0, 
            z = Z0), (m = x * x + y * y + z * z) < 1e-12) ? [ NaN, NaN ] : [ atan2(y, x) * degrees$1, asin(z / sqrt(m)) * degrees$1 ];
        }, constant$7 = function(x) {
            return function() {
                return x;
            };
        }, compose = function(a, b) {
            function compose(x, y) {
                return x = a(x, y), b(x[0], x[1]);
            }
            return a.invert && b.invert && (compose.invert = function(x, y) {
                return (x = b.invert(x, y)) && a.invert(x[0], x[1]);
            }), compose;
        };
        rotationIdentity.invert = rotationIdentity;
        var lambda0$2, sinPhi0$1, cosPhi0$1, x00, y00, x0$1, y0$1, x00$1, y00$1, x0$3, y0$3, rotation = function(rotate) {
            function forward(coordinates) {
                return coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians), 
                coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
            }
            return rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0), 
            forward.invert = function(coordinates) {
                return coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians), 
                coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
            }, forward;
        }, circle = function() {
            function point(x, y) {
                ring.push(x = rotate(x, y)), x[0] *= degrees$1, x[1] *= degrees$1;
            }
            function circle() {
                var c = center.apply(this, arguments), r = radius.apply(this, arguments) * radians, p = precision.apply(this, arguments) * radians;
                return ring = [], rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert, 
                circleStream(stream, r, p, 1), c = {
                    type: "Polygon",
                    coordinates: [ ring ]
                }, ring = rotate = null, c;
            }
            var ring, rotate, center = constant$7([ 0, 0 ]), radius = constant$7(90), precision = constant$7(6), stream = {
                point: point
            };
            return circle.center = function(_) {
                return arguments.length ? (center = "function" === typeof _ ? _ : constant$7([ +_[0], +_[1] ]), 
                circle) : center;
            }, circle.radius = function(_) {
                return arguments.length ? (radius = "function" === typeof _ ? _ : constant$7(+_), 
                circle) : radius;
            }, circle.precision = function(_) {
                return arguments.length ? (precision = "function" === typeof _ ? _ : constant$7(+_), 
                circle) : precision;
            }, circle;
        }, clipBuffer = function() {
            var line, lines = [];
            return {
                point: function(x, y) {
                    line.push([ x, y ]);
                },
                lineStart: function() {
                    lines.push(line = []);
                },
                lineEnd: noop$1,
                rejoin: function() {
                    lines.length > 1 && lines.push(lines.pop().concat(lines.shift()));
                },
                result: function() {
                    var result = lines;
                    return lines = [], line = null, result;
                }
            };
        }, clipLine = function(a, b, x0, y0, x1, y1) {
            var r, ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay;
            if (r = x0 - ax, dx || !(r > 0)) {
                if (r /= dx, dx < 0) {
                    if (r < t0) return;
                    r < t1 && (t1 = r);
                } else if (dx > 0) {
                    if (r > t1) return;
                    r > t0 && (t0 = r);
                }
                if (r = x1 - ax, dx || !(r < 0)) {
                    if (r /= dx, dx < 0) {
                        if (r > t1) return;
                        r > t0 && (t0 = r);
                    } else if (dx > 0) {
                        if (r < t0) return;
                        r < t1 && (t1 = r);
                    }
                    if (r = y0 - ay, dy || !(r > 0)) {
                        if (r /= dy, dy < 0) {
                            if (r < t0) return;
                            r < t1 && (t1 = r);
                        } else if (dy > 0) {
                            if (r > t1) return;
                            r > t0 && (t0 = r);
                        }
                        if (r = y1 - ay, dy || !(r < 0)) {
                            if (r /= dy, dy < 0) {
                                if (r > t1) return;
                                r > t0 && (t0 = r);
                            } else if (dy > 0) {
                                if (r < t0) return;
                                r < t1 && (t1 = r);
                            }
                            return t0 > 0 && (a[0] = ax + t0 * dx, a[1] = ay + t0 * dy), t1 < 1 && (b[0] = ax + t1 * dx, 
                            b[1] = ay + t1 * dy), !0;
                        }
                    }
                }
            }
        }, pointEqual = function(a, b) {
            return abs(a[0] - b[0]) < epsilon$2 && abs(a[1] - b[1]) < epsilon$2;
        }, clipPolygon = function(segments, compareIntersection, startInside, interpolate, stream) {
            var i, n, subject = [], clip = [];
            if (segments.forEach(function(segment) {
                if (!((n = segment.length - 1) <= 0)) {
                    var n, x, p0 = segment[0], p1 = segment[n];
                    if (pointEqual(p0, p1)) {
                        for (stream.lineStart(), i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
                        return void stream.lineEnd();
                    }
                    subject.push(x = new Intersection(p0, segment, null, !0)), clip.push(x.o = new Intersection(p0, null, x, !1)), 
                    subject.push(x = new Intersection(p1, segment, null, !1)), clip.push(x.o = new Intersection(p1, null, x, !0));
                }
            }), subject.length) {
                for (clip.sort(compareIntersection), link$1(subject), link$1(clip), i = 0, n = clip.length; i < n; ++i) clip[i].e = startInside = !startInside;
                for (var points, point, start = subject[0]; ;) {
                    for (var current = start, isSubject = !0; current.v; ) if ((current = current.n) === start) return;
                    points = current.z, stream.lineStart();
                    do {
                        if (current.v = current.o.v = !0, current.e) {
                            if (isSubject) for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]); else interpolate(current.x, current.n.x, 1, stream);
                            current = current.n;
                        } else {
                            if (isSubject) for (points = current.p.z, i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]); else interpolate(current.x, current.p.x, -1, stream);
                            current = current.p;
                        }
                        current = current.o, points = current.z, isSubject = !isSubject;
                    } while (!current.v);
                    stream.lineEnd();
                }
            }
        }, clipMax = 1e9, clipMin = -clipMax, extent$1 = function() {
            var cache, cacheStream, clip, x0 = 0, y0 = 0, x1 = 960, y1 = 500;
            return clip = {
                stream: function(stream) {
                    return cache && cacheStream === stream ? cache : cache = clipExtent(x0, y0, x1, y1)(cacheStream = stream);
                },
                extent: function(_) {
                    return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], 
                    cache = cacheStream = null, clip) : [ [ x0, y0 ], [ x1, y1 ] ];
                }
            };
        }, sum$1 = adder(), polygonContains = function(polygon, point) {
            var lambda = point[0], phi = point[1], normal = [ sin$1(lambda), -cos$1(lambda), 0 ], angle = 0, winding = 0;
            sum$1.reset();
            for (var i = 0, n = polygon.length; i < n; ++i) if (m = (ring = polygon[i]).length) for (var ring, m, point0 = ring[m - 1], lambda0 = point0[0], phi0 = point0[1] / 2 + quarterPi, sinPhi0 = sin$1(phi0), cosPhi0 = cos$1(phi0), j = 0; j < m; ++j, 
            lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
                var point1 = ring[j], lambda1 = point1[0], phi1 = point1[1] / 2 + quarterPi, sinPhi1 = sin$1(phi1), cosPhi1 = cos$1(phi1), delta = lambda1 - lambda0, sign$$1 = delta >= 0 ? 1 : -1, absDelta = sign$$1 * delta, antimeridian = absDelta > pi$3, k = sinPhi0 * sinPhi1;
                if (sum$1.add(atan2(k * sign$$1 * sin$1(absDelta), cosPhi0 * cosPhi1 + k * cos$1(absDelta))), 
                angle += antimeridian ? delta + sign$$1 * tau$3 : delta, antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                    var arc = cartesianCross(cartesian(point0), cartesian(point1));
                    cartesianNormalizeInPlace(arc);
                    var intersection = cartesianCross(normal, arc);
                    cartesianNormalizeInPlace(intersection);
                    var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
                    (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) && (winding += antimeridian ^ delta >= 0 ? 1 : -1);
                }
            }
            return (angle < -epsilon$2 || angle < epsilon$2 && sum$1 < -epsilon$2) ^ 1 & winding;
        }, lengthSum = adder(), lengthStream = {
            sphere: noop$1,
            point: noop$1,
            lineStart: lengthLineStart,
            lineEnd: noop$1,
            polygonStart: noop$1,
            polygonEnd: noop$1
        }, length$1 = function(object) {
            return lengthSum.reset(), geoStream(object, lengthStream), +lengthSum;
        }, coordinates = [ null, null ], object$1 = {
            type: "LineString",
            coordinates: coordinates
        }, distance = function(a, b) {
            return coordinates[0] = a, coordinates[1] = b, length$1(object$1);
        }, containsObjectType = {
            Feature: function(object, point) {
                return containsGeometry(object.geometry, point);
            },
            FeatureCollection: function(object, point) {
                for (var features = object.features, i = -1, n = features.length; ++i < n; ) if (containsGeometry(features[i].geometry, point)) return !0;
                return !1;
            }
        }, containsGeometryType = {
            Sphere: function() {
                return !0;
            },
            Point: function(object, point) {
                return containsPoint(object.coordinates, point);
            },
            MultiPoint: function(object, point) {
                for (var coordinates = object.coordinates, i = -1, n = coordinates.length; ++i < n; ) if (containsPoint(coordinates[i], point)) return !0;
                return !1;
            },
            LineString: function(object, point) {
                return containsLine(object.coordinates, point);
            },
            MultiLineString: function(object, point) {
                for (var coordinates = object.coordinates, i = -1, n = coordinates.length; ++i < n; ) if (containsLine(coordinates[i], point)) return !0;
                return !1;
            },
            Polygon: function(object, point) {
                return containsPolygon(object.coordinates, point);
            },
            MultiPolygon: function(object, point) {
                for (var coordinates = object.coordinates, i = -1, n = coordinates.length; ++i < n; ) if (containsPolygon(coordinates[i], point)) return !0;
                return !1;
            },
            GeometryCollection: function(object, point) {
                for (var geometries = object.geometries, i = -1, n = geometries.length; ++i < n; ) if (containsGeometry(geometries[i], point)) return !0;
                return !1;
            }
        }, contains = function(object, point) {
            return (object && containsObjectType.hasOwnProperty(object.type) ? containsObjectType[object.type] : containsGeometry)(object, point);
        }, interpolate$1 = function(a, b) {
            var x0 = a[0] * radians, y0 = a[1] * radians, x1 = b[0] * radians, y1 = b[1] * radians, cy0 = cos$1(y0), sy0 = sin$1(y0), cy1 = cos$1(y1), sy1 = sin$1(y1), kx0 = cy0 * cos$1(x0), ky0 = cy0 * sin$1(x0), kx1 = cy1 * cos$1(x1), ky1 = cy1 * sin$1(x1), d = 2 * asin(sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))), k = sin$1(d), interpolate = d ? function(t) {
                var B = sin$1(t *= d) / k, A = sin$1(d - t) / k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
                return [ atan2(y, x) * degrees$1, atan2(z, sqrt(x * x + y * y)) * degrees$1 ];
            } : function() {
                return [ x0 * degrees$1, y0 * degrees$1 ];
            };
            return interpolate.distance = d, interpolate;
        }, identity$4 = function(x) {
            return x;
        }, areaSum$1 = adder(), areaRingSum$1 = adder(), areaStream$1 = {
            point: noop$1,
            lineStart: noop$1,
            lineEnd: noop$1,
            polygonStart: function() {
                areaStream$1.lineStart = areaRingStart$1, areaStream$1.lineEnd = areaRingEnd$1;
            },
            polygonEnd: function() {
                areaStream$1.lineStart = areaStream$1.lineEnd = areaStream$1.point = noop$1, areaSum$1.add(abs(areaRingSum$1)), 
                areaRingSum$1.reset();
            },
            result: function() {
                var area = areaSum$1 / 2;
                return areaSum$1.reset(), area;
            }
        }, x0$2 = 1 / 0, y0$2 = x0$2, x1 = -x0$2, y1 = x1, boundsStream$1 = {
            point: boundsPoint$1,
            lineStart: noop$1,
            lineEnd: noop$1,
            polygonStart: noop$1,
            polygonEnd: noop$1,
            result: function() {
                var bounds = [ [ x0$2, y0$2 ], [ x1, y1 ] ];
                return x1 = y1 = -(y0$2 = x0$2 = 1 / 0), bounds;
            }
        }, X0$1 = 0, Y0$1 = 0, Z0$1 = 0, X1$1 = 0, Y1$1 = 0, Z1$1 = 0, X2$1 = 0, Y2$1 = 0, Z2$1 = 0, centroidStream$1 = {
            point: centroidPoint$1,
            lineStart: centroidLineStart$1,
            lineEnd: centroidLineEnd$1,
            polygonStart: function() {
                centroidStream$1.lineStart = centroidRingStart$1, centroidStream$1.lineEnd = centroidRingEnd$1;
            },
            polygonEnd: function() {
                centroidStream$1.point = centroidPoint$1, centroidStream$1.lineStart = centroidLineStart$1, 
                centroidStream$1.lineEnd = centroidLineEnd$1;
            },
            result: function() {
                var centroid = Z2$1 ? [ X2$1 / Z2$1, Y2$1 / Z2$1 ] : Z1$1 ? [ X1$1 / Z1$1, Y1$1 / Z1$1 ] : Z0$1 ? [ X0$1 / Z0$1, Y0$1 / Z0$1 ] : [ NaN, NaN ];
                return X0$1 = Y0$1 = Z0$1 = X1$1 = Y1$1 = Z1$1 = X2$1 = Y2$1 = Z2$1 = 0, centroid;
            }
        };
        PathContext.prototype = {
            _radius: 4.5,
            pointRadius: function(_) {
                return this._radius = _, this;
            },
            polygonStart: function() {
                this._line = 0;
            },
            polygonEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._point = 0;
            },
            lineEnd: function() {
                0 === this._line && this._context.closePath(), this._point = NaN;
            },
            point: function(x, y) {
                switch (this._point) {
                  case 0:
                    this._context.moveTo(x, y), this._point = 1;
                    break;

                  case 1:
                    this._context.lineTo(x, y);
                    break;

                  default:
                    this._context.moveTo(x + this._radius, y), this._context.arc(x, y, this._radius, 0, tau$3);
                }
            },
            result: noop$1
        };
        var lengthRing, x00$2, y00$2, x0$4, y0$4, lengthSum$1 = adder(), lengthStream$1 = {
            point: noop$1,
            lineStart: function() {
                lengthStream$1.point = lengthPointFirst$1;
            },
            lineEnd: function() {
                lengthRing && lengthPoint$1(x00$2, y00$2), lengthStream$1.point = noop$1;
            },
            polygonStart: function() {
                lengthRing = !0;
            },
            polygonEnd: function() {
                lengthRing = null;
            },
            result: function() {
                var length = +lengthSum$1;
                return lengthSum$1.reset(), length;
            }
        };
        PathString.prototype = {
            _radius: 4.5,
            _circle: circle$1(4.5),
            pointRadius: function(_) {
                return (_ = +_) !== this._radius && (this._radius = _, this._circle = null), this;
            },
            polygonStart: function() {
                this._line = 0;
            },
            polygonEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._point = 0;
            },
            lineEnd: function() {
                0 === this._line && this._string.push("Z"), this._point = NaN;
            },
            point: function(x, y) {
                switch (this._point) {
                  case 0:
                    this._string.push("M", x, ",", y), this._point = 1;
                    break;

                  case 1:
                    this._string.push("L", x, ",", y);
                    break;

                  default:
                    null == this._circle && (this._circle = circle$1(this._radius)), this._string.push("M", x, ",", y, this._circle);
                }
            },
            result: function() {
                if (this._string.length) {
                    var result = this._string.join("");
                    return this._string = [], result;
                }
                return null;
            }
        };
        var index$1 = function(projection, context) {
            function path(object) {
                return object && ("function" === typeof pointRadius && contextStream.pointRadius(+pointRadius.apply(this, arguments)), 
                geoStream(object, projectionStream(contextStream))), contextStream.result();
            }
            var projectionStream, contextStream, pointRadius = 4.5;
            return path.area = function(object) {
                return geoStream(object, projectionStream(areaStream$1)), areaStream$1.result();
            }, path.measure = function(object) {
                return geoStream(object, projectionStream(lengthStream$1)), lengthStream$1.result();
            }, path.bounds = function(object) {
                return geoStream(object, projectionStream(boundsStream$1)), boundsStream$1.result();
            }, path.centroid = function(object) {
                return geoStream(object, projectionStream(centroidStream$1)), centroidStream$1.result();
            }, path.projection = function(_) {
                return arguments.length ? (projectionStream = null == _ ? (projection = null, identity$4) : (projection = _).stream, 
                path) : projection;
            }, path.context = function(_) {
                return arguments.length ? (contextStream = null == _ ? (context = null, new PathString()) : new PathContext(context = _), 
                "function" !== typeof pointRadius && contextStream.pointRadius(pointRadius), path) : context;
            }, path.pointRadius = function(_) {
                return arguments.length ? (pointRadius = "function" === typeof _ ? _ : (contextStream.pointRadius(+_), 
                +_), path) : pointRadius;
            }, path.projection(projection).context(context);
        }, clip = function(pointVisible, clipLine, interpolate, start) {
            return function(rotate, sink) {
                function point(lambda, phi) {
                    var point = rotate(lambda, phi);
                    pointVisible(lambda = point[0], phi = point[1]) && sink.point(lambda, phi);
                }
                function pointLine(lambda, phi) {
                    var point = rotate(lambda, phi);
                    line.point(point[0], point[1]);
                }
                function lineStart() {
                    clip.point = pointLine, line.lineStart();
                }
                function lineEnd() {
                    clip.point = point, line.lineEnd();
                }
                function pointRing(lambda, phi) {
                    ring.push([ lambda, phi ]);
                    var point = rotate(lambda, phi);
                    ringSink.point(point[0], point[1]);
                }
                function ringStart() {
                    ringSink.lineStart(), ring = [];
                }
                function ringEnd() {
                    pointRing(ring[0][0], ring[0][1]), ringSink.lineEnd();
                    var i, m, segment, point, clean = ringSink.clean(), ringSegments = ringBuffer.result(), n = ringSegments.length;
                    if (ring.pop(), polygon.push(ring), ring = null, n) if (1 & clean) {
                        if (segment = ringSegments[0], (m = segment.length - 1) > 0) {
                            for (polygonStarted || (sink.polygonStart(), polygonStarted = !0), sink.lineStart(), 
                            i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
                            sink.lineEnd();
                        }
                    } else n > 1 && 2 & clean && ringSegments.push(ringSegments.pop().concat(ringSegments.shift())), 
                    segments.push(ringSegments.filter(validSegment));
                }
                var polygon, segments, ring, line = clipLine(sink), rotatedStart = rotate.invert(start[0], start[1]), ringBuffer = clipBuffer(), ringSink = clipLine(ringBuffer), polygonStarted = !1, clip = {
                    point: point,
                    lineStart: lineStart,
                    lineEnd: lineEnd,
                    polygonStart: function() {
                        clip.point = pointRing, clip.lineStart = ringStart, clip.lineEnd = ringEnd, segments = [], 
                        polygon = [];
                    },
                    polygonEnd: function() {
                        clip.point = point, clip.lineStart = lineStart, clip.lineEnd = lineEnd, segments = merge(segments);
                        var startInside = polygonContains(polygon, rotatedStart);
                        segments.length ? (polygonStarted || (sink.polygonStart(), polygonStarted = !0), 
                        clipPolygon(segments, compareIntersection, startInside, interpolate, sink)) : startInside && (polygonStarted || (sink.polygonStart(), 
                        polygonStarted = !0), sink.lineStart(), interpolate(null, null, 1, sink), sink.lineEnd()), 
                        polygonStarted && (sink.polygonEnd(), polygonStarted = !1), segments = polygon = null;
                    },
                    sphere: function() {
                        sink.polygonStart(), sink.lineStart(), interpolate(null, null, 1, sink), sink.lineEnd(), 
                        sink.polygonEnd();
                    }
                };
                return clip;
            };
        }, clipAntimeridian = clip(function() {
            return !0;
        }, clipAntimeridianLine, clipAntimeridianInterpolate, [ -pi$3, -halfPi$2 ]), clipCircle = function(radius, delta) {
            function interpolate(from, to, direction, stream) {
                circleStream(stream, radius, delta, direction, from, to);
            }
            function visible(lambda, phi) {
                return cos$1(lambda) * cos$1(phi) > cr;
            }
            function clipLine(stream) {
                var point0, c0, v0, v00, clean;
                return {
                    lineStart: function() {
                        v00 = v0 = !1, clean = 1;
                    },
                    point: function(lambda, phi) {
                        var point2, point1 = [ lambda, phi ], v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? pi$3 : -pi$3), phi) : 0;
                        if (!point0 && (v00 = v0 = v) && stream.lineStart(), v !== v0 && (!(point2 = intersect(point0, point1)) || pointEqual(point0, point2) || pointEqual(point1, point2)) && (point1[0] += epsilon$2, 
                        point1[1] += epsilon$2, v = visible(point1[0], point1[1])), v !== v0) clean = 0, 
                        v ? (stream.lineStart(), point2 = intersect(point1, point0), stream.point(point2[0], point2[1])) : (point2 = intersect(point0, point1), 
                        stream.point(point2[0], point2[1]), stream.lineEnd()), point0 = point2; else if (notHemisphere && point0 && smallRadius ^ v) {
                            var t;
                            c & c0 || !(t = intersect(point1, point0, !0)) || (clean = 0, smallRadius ? (stream.lineStart(), 
                            stream.point(t[0][0], t[0][1]), stream.point(t[1][0], t[1][1]), stream.lineEnd()) : (stream.point(t[1][0], t[1][1]), 
                            stream.lineEnd(), stream.lineStart(), stream.point(t[0][0], t[0][1])));
                        }
                        !v || point0 && pointEqual(point0, point1) || stream.point(point1[0], point1[1]), 
                        point0 = point1, v0 = v, c0 = c;
                    },
                    lineEnd: function() {
                        v0 && stream.lineEnd(), point0 = null;
                    },
                    clean: function() {
                        return clean | (v00 && v0) << 1;
                    }
                };
            }
            function intersect(a, b, two) {
                var pa = cartesian(a), pb = cartesian(b), n1 = [ 1, 0, 0 ], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
                if (!determinant) return !two && a;
                var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A = cartesianScale(n1, c1);
                cartesianAddInPlace(A, cartesianScale(n2, c2));
                var u = n1xn2, w = cartesianDot(A, u), uu = cartesianDot(u, u), t2 = w * w - uu * (cartesianDot(A, A) - 1);
                if (!(t2 < 0)) {
                    var t = sqrt(t2), q = cartesianScale(u, (-w - t) / uu);
                    if (cartesianAddInPlace(q, A), q = spherical(q), !two) return q;
                    var z, lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1];
                    lambda1 < lambda0 && (z = lambda0, lambda0 = lambda1, lambda1 = z);
                    var delta = lambda1 - lambda0, polar = abs(delta - pi$3) < epsilon$2, meridian = polar || delta < epsilon$2;
                    if (!polar && phi1 < phi0 && (z = phi0, phi0 = phi1, phi1 = z), meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon$2 ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > pi$3 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
                        var q1 = cartesianScale(u, (-w + t) / uu);
                        return cartesianAddInPlace(q1, A), [ q, spherical(q1) ];
                    }
                }
            }
            function code(lambda, phi) {
                var r = smallRadius ? radius : pi$3 - radius, code = 0;
                return lambda < -r ? code |= 1 : lambda > r && (code |= 2), phi < -r ? code |= 4 : phi > r && (code |= 8), 
                code;
            }
            var cr = cos$1(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > epsilon$2;
            return clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -pi$3, radius - pi$3 ]);
        }, transform = function(methods) {
            return {
                stream: transformer(methods)
            };
        };
        TransformStream.prototype = {
            constructor: TransformStream,
            point: function(x, y) {
                this.stream.point(x, y);
            },
            sphere: function() {
                this.stream.sphere();
            },
            lineStart: function() {
                this.stream.lineStart();
            },
            lineEnd: function() {
                this.stream.lineEnd();
            },
            polygonStart: function() {
                this.stream.polygonStart();
            },
            polygonEnd: function() {
                this.stream.polygonEnd();
            }
        };
        var maxDepth = 16, cosMinDistance = cos$1(30 * radians), resample = function(project, delta2) {
            return +delta2 ? resample$1(project, delta2) : resampleNone(project);
        }, transformRadians = transformer({
            point: function(x, y) {
                this.stream.point(x * radians, y * radians);
            }
        }), conicEqualArea = function() {
            return conicProjection(conicEqualAreaRaw).scale(155.424).center([ 0, 33.6442 ]);
        }, albers = function() {
            return conicEqualArea().parallels([ 29.5, 45.5 ]).scale(1070).translate([ 480, 250 ]).rotate([ 96, 0 ]).center([ -.6, 38.7 ]);
        }, albersUsa = function() {
            function albersUsa(coordinates) {
                var x = coordinates[0], y = coordinates[1];
                return point = null, lower48Point.point(x, y), point || (alaskaPoint.point(x, y), 
                point) || (hawaiiPoint.point(x, y), point);
            }
            function reset() {
                return cache = cacheStream = null, albersUsa;
            }
            var cache, cacheStream, lower48Point, alaskaPoint, hawaiiPoint, point, lower48 = albers(), alaska = conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]), hawaii = conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]), pointStream = {
                point: function(x, y) {
                    point = [ x, y ];
                }
            };
            return albersUsa.invert = function(coordinates) {
                var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
                return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
            }, albersUsa.stream = function(stream) {
                return cache && cacheStream === stream ? cache : cache = multiplex([ lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream) ]);
            }, albersUsa.precision = function(_) {
                return arguments.length ? (lower48.precision(_), alaska.precision(_), hawaii.precision(_), 
                reset()) : lower48.precision();
            }, albersUsa.scale = function(_) {
                return arguments.length ? (lower48.scale(_), alaska.scale(.35 * _), hawaii.scale(_), 
                albersUsa.translate(lower48.translate())) : lower48.scale();
            }, albersUsa.translate = function(_) {
                if (!arguments.length) return lower48.translate();
                var k = lower48.scale(), x = +_[0], y = +_[1];
                return lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream), 
                alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + epsilon$2, y + .12 * k + epsilon$2 ], [ x - .214 * k - epsilon$2, y + .234 * k - epsilon$2 ] ]).stream(pointStream), 
                hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + epsilon$2, y + .166 * k + epsilon$2 ], [ x - .115 * k - epsilon$2, y + .234 * k - epsilon$2 ] ]).stream(pointStream), 
                reset();
            }, albersUsa.fitExtent = function(extent, object) {
                return fitExtent(albersUsa, extent, object);
            }, albersUsa.fitSize = function(size, object) {
                return fitSize(albersUsa, size, object);
            }, albersUsa.scale(1070);
        }, azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
            return sqrt(2 / (1 + cxcy));
        });
        azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
            return 2 * asin(z / 2);
        });
        var azimuthalEqualArea = function() {
            return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(179.999);
        }, azimuthalEquidistantRaw = azimuthalRaw(function(c) {
            return (c = acos(c)) && c / sin$1(c);
        });
        azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
            return z;
        });
        var azimuthalEquidistant = function() {
            return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(179.999);
        };
        mercatorRaw.invert = function(x, y) {
            return [ x, 2 * atan(exp(y)) - halfPi$2 ];
        };
        var mercator = function() {
            return mercatorProjection(mercatorRaw).scale(961 / tau$3);
        }, conicConformal = function() {
            return conicProjection(conicConformalRaw).scale(109.5).parallels([ 30, 30 ]);
        };
        equirectangularRaw.invert = equirectangularRaw;
        var equirectangular = function() {
            return projection(equirectangularRaw).scale(152.63);
        }, conicEquidistant = function() {
            return conicProjection(conicEquidistantRaw).scale(131.154).center([ 0, 13.9389 ]);
        };
        gnomonicRaw.invert = azimuthalInvert(atan);
        var gnomonic = function() {
            return projection(gnomonicRaw).scale(144.049).clipAngle(60);
        }, identity$5 = function() {
            function reset() {
                return cache = cacheStream = null, projection;
            }
            var y0, x1, y1, cache, cacheStream, projection, k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform$$1 = identity$4, x0 = null, clip = identity$4;
            return projection = {
                stream: function(stream) {
                    return cache && cacheStream === stream ? cache : cache = transform$$1(clip(cacheStream = stream));
                },
                clipExtent: function(_) {
                    return arguments.length ? (clip = null == _ ? (x0 = y0 = x1 = y1 = null, identity$4) : clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), 
                    reset()) : null == x0 ? null : [ [ x0, y0 ], [ x1, y1 ] ];
                },
                scale: function(_) {
                    return arguments.length ? (transform$$1 = scaleTranslate((k = +_) * sx, k * sy, tx, ty), 
                    reset()) : k;
                },
                translate: function(_) {
                    return arguments.length ? (transform$$1 = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), 
                    reset()) : [ tx, ty ];
                },
                reflectX: function(_) {
                    return arguments.length ? (transform$$1 = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), 
                    reset()) : sx < 0;
                },
                reflectY: function(_) {
                    return arguments.length ? (transform$$1 = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), 
                    reset()) : sy < 0;
                },
                fitExtent: function(extent, object) {
                    return fitExtent(projection, extent, object);
                },
                fitSize: function(size, object) {
                    return fitSize(projection, size, object);
                }
            };
        };
        orthographicRaw.invert = azimuthalInvert(asin);
        var orthographic = function() {
            return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon$2);
        };
        stereographicRaw.invert = azimuthalInvert(function(z) {
            return 2 * atan(z);
        });
        var stereographic = function() {
            return projection(stereographicRaw).scale(250).clipAngle(142);
        };
        transverseMercatorRaw.invert = function(x, y) {
            return [ -y, 2 * atan(exp(x)) - halfPi$2 ];
        };
        var transverseMercator = function() {
            var m = mercatorProjection(transverseMercatorRaw), center = m.center, rotate = m.rotate;
            return m.center = function(_) {
                return arguments.length ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
            }, m.rotate = function(_) {
                return arguments.length ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
                [ _[0], _[1], _[2] - 90 ]);
            }, rotate([ 0, 0, 90 ]).scale(159.155);
        }, cluster = function() {
            function cluster(root) {
                var previousNode, x = 0;
                root.eachAfter(function(node) {
                    var children = node.children;
                    children ? (node.x = meanX(children), node.y = maxY(children)) : (node.x = previousNode ? x += separation(node, previousNode) : 0, 
                    node.y = 0, previousNode = node);
                });
                var left = leafLeft(root), right = leafRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
                return root.eachAfter(nodeSize ? function(node) {
                    node.x = (node.x - root.x) * dx, node.y = (root.y - node.y) * dy;
                } : function(node) {
                    node.x = (node.x - x0) / (x1 - x0) * dx, node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
                });
            }
            var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = !1;
            return cluster.separation = function(x) {
                return arguments.length ? (separation = x, cluster) : separation;
            }, cluster.size = function(x) {
                return arguments.length ? (nodeSize = !1, dx = +x[0], dy = +x[1], cluster) : nodeSize ? null : [ dx, dy ];
            }, cluster.nodeSize = function(x) {
                return arguments.length ? (nodeSize = !0, dx = +x[0], dy = +x[1], cluster) : nodeSize ? [ dx, dy ] : null;
            }, cluster;
        }, node_count = function() {
            return this.eachAfter(count);
        }, node_each = function(callback) {
            var current, children, i, n, node = this, next = [ node ];
            do {
                for (current = next.reverse(), next = []; node = current.pop(); ) if (callback(node), 
                children = node.children) for (i = 0, n = children.length; i < n; ++i) next.push(children[i]);
            } while (next.length);
            return this;
        }, node_eachBefore = function(callback) {
            for (var children, i, node = this, nodes = [ node ]; node = nodes.pop(); ) if (callback(node), 
            children = node.children) for (i = children.length - 1; i >= 0; --i) nodes.push(children[i]);
            return this;
        }, node_eachAfter = function(callback) {
            for (var children, i, n, node = this, nodes = [ node ], next = []; node = nodes.pop(); ) if (next.push(node), 
            children = node.children) for (i = 0, n = children.length; i < n; ++i) nodes.push(children[i]);
            for (;node = next.pop(); ) callback(node);
            return this;
        }, node_sum = function(value) {
            return this.eachAfter(function(node) {
                for (var sum = +value(node.data) || 0, children = node.children, i = children && children.length; --i >= 0; ) sum += children[i].value;
                node.value = sum;
            });
        }, node_sort = function(compare) {
            return this.eachBefore(function(node) {
                node.children && node.children.sort(compare);
            });
        }, node_path = function(end) {
            for (var start = this, ancestor = leastCommonAncestor(start, end), nodes = [ start ]; start !== ancestor; ) start = start.parent, 
            nodes.push(start);
            for (var k = nodes.length; end !== ancestor; ) nodes.splice(k, 0, end), end = end.parent;
            return nodes;
        }, node_ancestors = function() {
            for (var node = this, nodes = [ node ]; node = node.parent; ) nodes.push(node);
            return nodes;
        }, node_descendants = function() {
            var nodes = [];
            return this.each(function(node) {
                nodes.push(node);
            }), nodes;
        }, node_leaves = function() {
            var leaves = [];
            return this.eachBefore(function(node) {
                node.children || leaves.push(node);
            }), leaves;
        }, node_links = function() {
            var root = this, links = [];
            return root.each(function(node) {
                node !== root && links.push({
                    source: node.parent,
                    target: node
                });
            }), links;
        };
        Node.prototype = hierarchy.prototype = {
            constructor: Node,
            count: node_count,
            each: node_each,
            eachAfter: node_eachAfter,
            eachBefore: node_eachBefore,
            sum: node_sum,
            sort: node_sort,
            path: node_path,
            ancestors: node_ancestors,
            descendants: node_descendants,
            leaves: node_leaves,
            links: node_links,
            copy: node_copy
        };
        var slice$3 = Array.prototype.slice, enclose = function(circles) {
            for (var p, e, i = 0, n = (circles = shuffle$1(slice$3.call(circles))).length, B = []; i < n; ) p = circles[i], 
            e && enclosesWeak(e, p) ? ++i : (e = encloseBasis(B = extendBasis(B, p)), i = 0);
            return e;
        }, siblings = function(circles) {
            return packEnclose(circles), circles;
        }, constant$8 = function(x) {
            return function() {
                return x;
            };
        }, index$2 = function() {
            function pack(root) {
                return root.x = dx / 2, root.y = dy / 2, radius ? root.eachBefore(radiusLeaf(radius)).eachAfter(packChildren(padding, .5)).eachBefore(translateChild(1)) : root.eachBefore(radiusLeaf(defaultRadius$1)).eachAfter(packChildren(constantZero, 1)).eachAfter(packChildren(padding, root.r / Math.min(dx, dy))).eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r))), 
                root;
            }
            var radius = null, dx = 1, dy = 1, padding = constantZero;
            return pack.radius = function(x) {
                return arguments.length ? (radius = optional(x), pack) : radius;
            }, pack.size = function(x) {
                return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [ dx, dy ];
            }, pack.padding = function(x) {
                return arguments.length ? (padding = "function" === typeof x ? x : constant$8(+x), 
                pack) : padding;
            }, pack;
        }, roundNode = function(node) {
            node.x0 = Math.round(node.x0), node.y0 = Math.round(node.y0), node.x1 = Math.round(node.x1), 
            node.y1 = Math.round(node.y1);
        }, treemapDice = function(parent, x0, y0, x1, y1) {
            for (var node, nodes = parent.children, i = -1, n = nodes.length, k = parent.value && (x1 - x0) / parent.value; ++i < n; ) node = nodes[i], 
            node.y0 = y0, node.y1 = y1, node.x0 = x0, node.x1 = x0 += node.value * k;
        }, partition = function() {
            function partition(root) {
                var n = root.height + 1;
                return root.x0 = root.y0 = padding, root.x1 = dx, root.y1 = dy / n, root.eachBefore(positionNode(dy, n)), 
                round && root.eachBefore(roundNode), root;
            }
            function positionNode(dy, n) {
                return function(node) {
                    node.children && treemapDice(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
                    var x0 = node.x0, y0 = node.y0, x1 = node.x1 - padding, y1 = node.y1 - padding;
                    x1 < x0 && (x0 = x1 = (x0 + x1) / 2), y1 < y0 && (y0 = y1 = (y0 + y1) / 2), node.x0 = x0, 
                    node.y0 = y0, node.x1 = x1, node.y1 = y1;
                };
            }
            var dx = 1, dy = 1, padding = 0, round = !1;
            return partition.round = function(x) {
                return arguments.length ? (round = !!x, partition) : round;
            }, partition.size = function(x) {
                return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [ dx, dy ];
            }, partition.padding = function(x) {
                return arguments.length ? (padding = +x, partition) : padding;
            }, partition;
        }, keyPrefix$1 = "$", preroot = {
            depth: -1
        }, ambiguous = {}, stratify = function() {
            function stratify(data) {
                var d, i, root, parent, node, nodeId, nodeKey, n = data.length, nodes = new Array(n), nodeByKey = {};
                for (i = 0; i < n; ++i) d = data[i], node = nodes[i] = new Node(d), null != (nodeId = id(d, i, data)) && (nodeId += "") && (nodeKey = keyPrefix$1 + (node.id = nodeId), 
                nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node);
                for (i = 0; i < n; ++i) if (node = nodes[i], null != (nodeId = parentId(data[i], i, data)) && (nodeId += "")) {
                    if (!(parent = nodeByKey[keyPrefix$1 + nodeId])) throw new Error("missing: " + nodeId);
                    if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
                    parent.children ? parent.children.push(node) : parent.children = [ node ], node.parent = parent;
                } else {
                    if (root) throw new Error("multiple roots");
                    root = node;
                }
                if (!root) throw new Error("no root");
                if (root.parent = preroot, root.eachBefore(function(node) {
                    node.depth = node.parent.depth + 1, --n;
                }).eachBefore(computeHeight), root.parent = null, n > 0) throw new Error("cycle");
                return root;
            }
            var id = defaultId, parentId = defaultParentId;
            return stratify.id = function(x) {
                return arguments.length ? (id = blizzardd(x), stratify) : id;
            }, stratify.parentId = function(x) {
                return arguments.length ? (parentId = blizzardd(x), stratify) : parentId;
            }, stratify;
        };
        TreeNode.prototype = Object.create(Node.prototype);
        var tree = function() {
            function tree(root) {
                var t = treeRoot(root);
                if (t.eachAfter(firstWalk), t.parent.m = -t.z, t.eachBefore(secondWalk), nodeSize) root.eachBefore(sizeNode); else {
                    var left = root, right = root, bottom = root;
                    root.eachBefore(function(node) {
                        node.x < left.x && (left = node), node.x > right.x && (right = node), node.depth > bottom.depth && (bottom = node);
                    });
                    var s = left === right ? 1 : separation(left, right) / 2, tx = s - left.x, kx = dx / (right.x + s + tx), ky = dy / (bottom.depth || 1);
                    root.eachBefore(function(node) {
                        node.x = (node.x + tx) * kx, node.y = node.depth * ky;
                    });
                }
                return root;
            }
            function firstWalk(v) {
                var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
                if (children) {
                    executeShifts(v);
                    var midpoint = (children[0].z + children[children.length - 1].z) / 2;
                    w ? (v.z = w.z + separation(v._, w._), v.m = v.z - midpoint) : v.z = midpoint;
                } else w && (v.z = w.z + separation(v._, w._));
                v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
            }
            function secondWalk(v) {
                v._.x = v.z + v.parent.m, v.m += v.parent.m;
            }
            function apportion(v, w, ancestor) {
                if (w) {
                    for (var shift, vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m; vim = nextRight(vim), 
                    vip = nextLeft(vip), vim && vip; ) vom = nextLeft(vom), vop = nextRight(vop), vop.a = v, 
                    shift = vim.z + sim - vip.z - sip + separation(vim._, vip._), shift > 0 && (moveSubtree(nextAncestor(vim, v, ancestor), v, shift), 
                    sip += shift, sop += shift), sim += vim.m, sip += vip.m, som += vom.m, sop += vop.m;
                    vim && !nextRight(vop) && (vop.t = vim, vop.m += sim - sop), vip && !nextLeft(vom) && (vom.t = vip, 
                    vom.m += sip - som, ancestor = v);
                }
                return ancestor;
            }
            function sizeNode(node) {
                node.x *= dx, node.y = node.depth * dy;
            }
            var separation = defaultSeparation$1, dx = 1, dy = 1, nodeSize = null;
            return tree.separation = function(x) {
                return arguments.length ? (separation = x, tree) : separation;
            }, tree.size = function(x) {
                return arguments.length ? (nodeSize = !1, dx = +x[0], dy = +x[1], tree) : nodeSize ? null : [ dx, dy ];
            }, tree.nodeSize = function(x) {
                return arguments.length ? (nodeSize = !0, dx = +x[0], dy = +x[1], tree) : nodeSize ? [ dx, dy ] : null;
            }, tree;
        }, treemapSlice = function(parent, x0, y0, x1, y1) {
            for (var node, nodes = parent.children, i = -1, n = nodes.length, k = parent.value && (y1 - y0) / parent.value; ++i < n; ) node = nodes[i], 
            node.x0 = x0, node.x1 = x1, node.y0 = y0, node.y1 = y0 += node.value * k;
        }, phi = (1 + Math.sqrt(5)) / 2, squarify = function custom(ratio) {
            function squarify(parent, x0, y0, x1, y1) {
                squarifyRatio(ratio, parent, x0, y0, x1, y1);
            }
            return squarify.ratio = function(x) {
                return custom((x = +x) > 1 ? x : 1);
            }, squarify;
        }(phi), index$3 = function() {
            function treemap(root) {
                return root.x0 = root.y0 = 0, root.x1 = dx, root.y1 = dy, root.eachBefore(positionNode), 
                paddingStack = [ 0 ], round && root.eachBefore(roundNode), root;
            }
            function positionNode(node) {
                var p = paddingStack[node.depth], x0 = node.x0 + p, y0 = node.y0 + p, x1 = node.x1 - p, y1 = node.y1 - p;
                x1 < x0 && (x0 = x1 = (x0 + x1) / 2), y1 < y0 && (y0 = y1 = (y0 + y1) / 2), node.x0 = x0, 
                node.y0 = y0, node.x1 = x1, node.y1 = y1, node.children && (p = paddingStack[node.depth + 1] = paddingInner(node) / 2, 
                x0 += paddingLeft(node) - p, y0 += paddingTop(node) - p, x1 -= paddingRight(node) - p, 
                y1 -= paddingBottom(node) - p, x1 < x0 && (x0 = x1 = (x0 + x1) / 2), y1 < y0 && (y0 = y1 = (y0 + y1) / 2), 
                tile(node, x0, y0, x1, y1));
            }
            var tile = squarify, round = !1, dx = 1, dy = 1, paddingStack = [ 0 ], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
            return treemap.round = function(x) {
                return arguments.length ? (round = !!x, treemap) : round;
            }, treemap.size = function(x) {
                return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [ dx, dy ];
            }, treemap.tile = function(x) {
                return arguments.length ? (tile = blizzardd(x), treemap) : tile;
            }, treemap.padding = function(x) {
                return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
            }, treemap.paddingInner = function(x) {
                return arguments.length ? (paddingInner = "function" === typeof x ? x : constant$8(+x), 
                treemap) : paddingInner;
            }, treemap.paddingOuter = function(x) {
                return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
            }, treemap.paddingTop = function(x) {
                return arguments.length ? (paddingTop = "function" === typeof x ? x : constant$8(+x), 
                treemap) : paddingTop;
            }, treemap.paddingRight = function(x) {
                return arguments.length ? (paddingRight = "function" === typeof x ? x : constant$8(+x), 
                treemap) : paddingRight;
            }, treemap.paddingBottom = function(x) {
                return arguments.length ? (paddingBottom = "function" === typeof x ? x : constant$8(+x), 
                treemap) : paddingBottom;
            }, treemap.paddingLeft = function(x) {
                return arguments.length ? (paddingLeft = "function" === typeof x ? x : constant$8(+x), 
                treemap) : paddingLeft;
            }, treemap;
        }, binary = function(parent, x0, y0, x1, y1) {
            function partition(i, j, value, x0, y0, x1, y1) {
                if (i >= j - 1) {
                    var node = nodes[i];
                    return node.x0 = x0, node.y0 = y0, node.x1 = x1, node.y1 = y1, void 0;
                }
                for (var valueOffset = sums[i], valueTarget = value / 2 + valueOffset, k = i + 1, hi = j - 1; k < hi; ) {
                    var mid = k + hi >>> 1;
                    sums[mid] < valueTarget ? k = mid + 1 : hi = mid;
                }
                valueTarget - sums[k - 1] < sums[k] - valueTarget && i + 1 < k && --k;
                var valueLeft = sums[k] - valueOffset, valueRight = value - valueLeft;
                if (x1 - x0 > y1 - y0) {
                    var xk = (x0 * valueRight + x1 * valueLeft) / value;
                    partition(i, k, valueLeft, x0, y0, xk, y1), partition(k, j, valueRight, xk, y0, x1, y1);
                } else {
                    var yk = (y0 * valueRight + y1 * valueLeft) / value;
                    partition(i, k, valueLeft, x0, y0, x1, yk), partition(k, j, valueRight, x0, yk, x1, y1);
                }
            }
            var i, sum, nodes = parent.children, n = nodes.length, sums = new Array(n + 1);
            for (sums[0] = sum = i = 0; i < n; ++i) sums[i + 1] = sum += nodes[i].value;
            partition(0, n, parent.value, x0, y0, x1, y1);
        }, sliceDice = function(parent, x0, y0, x1, y1) {
            (1 & parent.depth ? treemapSlice : treemapDice)(parent, x0, y0, x1, y1);
        }, resquarify = function custom(ratio) {
            function resquarify(parent, x0, y0, x1, y1) {
                if ((rows = parent._squarify) && rows.ratio === ratio) for (var rows, row, nodes, i, n, j = -1, m = rows.length, value = parent.value; ++j < m; ) {
                    for (row = rows[j], nodes = row.children, i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
                    row.dice ? treemapDice(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value) : treemapSlice(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1), 
                    value -= row.value;
                } else parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1), rows.ratio = ratio;
            }
            return resquarify.ratio = function(x) {
                return custom((x = +x) > 1 ? x : 1);
            }, resquarify;
        }(phi), area$1 = function(polygon) {
            for (var a, i = -1, n = polygon.length, b = polygon[n - 1], area = 0; ++i < n; ) a = b, 
            b = polygon[i], area += a[1] * b[0] - a[0] * b[1];
            return area / 2;
        }, centroid$1 = function(polygon) {
            for (var a, c, i = -1, n = polygon.length, x = 0, y = 0, b = polygon[n - 1], k = 0; ++i < n; ) a = b, 
            b = polygon[i], k += c = a[0] * b[1] - b[0] * a[1], x += (a[0] + b[0]) * c, y += (a[1] + b[1]) * c;
            return k *= 3, [ x / k, y / k ];
        }, cross$1 = function(a, b, c) {
            return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
        }, hull = function(points) {
            if ((n = points.length) < 3) return null;
            var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
            for (i = 0; i < n; ++i) sortedPoints[i] = [ +points[i][0], +points[i][1], i ];
            for (sortedPoints.sort(lexicographicOrder), i = 0; i < n; ++i) flippedPoints[i] = [ sortedPoints[i][0], -sortedPoints[i][1] ];
            var upperIndexes = computeUpperHullIndexes(sortedPoints), lowerIndexes = computeUpperHullIndexes(flippedPoints), skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
            for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
            for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
            return hull;
        }, contains$1 = function(polygon, point) {
            for (var x1, y1, n = polygon.length, p = polygon[n - 1], x = point[0], y = point[1], x0 = p[0], y0 = p[1], inside = !1, i = 0; i < n; ++i) p = polygon[i], 
            x1 = p[0], y1 = p[1], y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1 && (inside = !inside), 
            x0 = x1, y0 = y1;
            return inside;
        }, length$2 = function(polygon) {
            for (var xa, ya, i = -1, n = polygon.length, b = polygon[n - 1], xb = b[0], yb = b[1], perimeter = 0; ++i < n; ) xa = xb, 
            ya = yb, b = polygon[i], xb = b[0], yb = b[1], xa -= xb, ya -= yb, perimeter += Math.sqrt(xa * xa + ya * ya);
            return perimeter;
        }, slice$4 = [].slice, noabort = {};
        Queue.prototype = queue.prototype = {
            constructor: Queue,
            defer: function(callback) {
                if ("function" !== typeof callback) throw new Error("invalid callback");
                if (this._call) throw new Error("defer after await");
                if (null != this._error) return this;
                var t = slice$4.call(arguments, 1);
                return t.push(callback), ++this._waiting, this._tasks.push(t), poke$1(this), this;
            },
            abort: function() {
                return null == this._error && abort(this, new Error("abort")), this;
            },
            await: function(callback) {
                if ("function" !== typeof callback) throw new Error("invalid callback");
                if (this._call) throw new Error("multiple await");
                return this._call = function(error, results) {
                    callback.apply(null, [ error ].concat(results));
                }, maybeNotify(this), this;
            },
            awaitAll: function(callback) {
                if ("function" !== typeof callback) throw new Error("invalid callback");
                if (this._call) throw new Error("multiple await");
                return this._call = callback, maybeNotify(this), this;
            }
        };
        var defaultSource$1 = function() {
            return Math.random();
        }, uniform = function sourceRandomUniform(source) {
            function randomUniform(min, max) {
                return min = null == min ? 0 : +min, max = null == max ? 1 : +max, 1 === arguments.length ? (max = min, 
                min = 0) : max -= min, function() {
                    return source() * max + min;
                };
            }
            return randomUniform.source = sourceRandomUniform, randomUniform;
        }(defaultSource$1), normal = function sourceRandomNormal(source) {
            function randomNormal(mu, sigma) {
                var x, r;
                return mu = null == mu ? 0 : +mu, sigma = null == sigma ? 1 : +sigma, function() {
                    var y;
                    if (null != x) y = x, x = null; else do {
                        x = 2 * source() - 1, y = 2 * source() - 1, r = x * x + y * y;
                    } while (!r || r > 1);
                    return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
                };
            }
            return randomNormal.source = sourceRandomNormal, randomNormal;
        }(defaultSource$1), logNormal = function sourceRandomLogNormal(source) {
            function randomLogNormal() {
                var randomNormal = normal.source(source).apply(this, arguments);
                return function() {
                    return Math.exp(randomNormal());
                };
            }
            return randomLogNormal.source = sourceRandomLogNormal, randomLogNormal;
        }(defaultSource$1), irwinHall = function sourceRandomIrwinHall(source) {
            function randomIrwinHall(n) {
                return function() {
                    for (var sum = 0, i = 0; i < n; ++i) sum += source();
                    return sum;
                };
            }
            return randomIrwinHall.source = sourceRandomIrwinHall, randomIrwinHall;
        }(defaultSource$1), bates = function sourceRandomBates(source) {
            function randomBates(n) {
                var randomIrwinHall = irwinHall.source(source)(n);
                return function() {
                    return randomIrwinHall() / n;
                };
            }
            return randomBates.source = sourceRandomBates, randomBates;
        }(defaultSource$1), exponential$1 = function sourceRandomExponential(source) {
            function randomExponential(lambda) {
                return function() {
                    return -Math.log(1 - source()) / lambda;
                };
            }
            return randomExponential.source = sourceRandomExponential, randomExponential;
        }(defaultSource$1), request = function(url, callback) {
            function respond(o) {
                var result, status = xhr.status;
                if (!status && hasResponse(xhr) || status >= 200 && status < 300 || 304 === status) {
                    if (response) try {
                        result = response.call(request, xhr);
                    } catch (e) {
                        return void event.call("error", request, e);
                    } else result = xhr;
                    event.call("load", request, result);
                } else event.call("error", request, o);
            }
            var request, mimeType, response, responseType, event = dispatch("beforesend", "progress", "load", "error"), headers = map$1(), xhr = new XMLHttpRequest(), user = null, password = null, timeout = 0;
            if ("undefined" === typeof XDomainRequest || "withCredentials" in xhr || !/^(http(s)?:)?\/\//.test(url) || (xhr = new XDomainRequest()), 
            "onload" in xhr ? xhr.onload = xhr.onerror = xhr.ontimeout = respond : xhr.onreadystatechange = function(o) {
                xhr.readyState > 3 && respond(o);
            }, xhr.onprogress = function(e) {
                event.call("progress", request, e);
            }, request = {
                header: function(name, value) {
                    return name = (name + "").toLowerCase(), arguments.length < 2 ? headers.get(name) : (null == value ? headers.remove(name) : headers.set(name, value + ""), 
                    request);
                },
                mimeType: function(value) {
                    return arguments.length ? (mimeType = null == value ? null : value + "", request) : mimeType;
                },
                responseType: function(value) {
                    return arguments.length ? (responseType = value, request) : responseType;
                },
                timeout: function(value) {
                    return arguments.length ? (timeout = +value, request) : timeout;
                },
                user: function(value) {
                    return arguments.length < 1 ? user : (user = null == value ? null : value + "", 
                    request);
                },
                password: function(value) {
                    return arguments.length < 1 ? password : (password = null == value ? null : value + "", 
                    request);
                },
                response: function(value) {
                    return response = value, request;
                },
                get: function(data, callback) {
                    return request.send("GET", data, callback);
                },
                post: function(data, callback) {
                    return request.send("POST", data, callback);
                },
                send: function(method, data, callback) {
                    return xhr.open(method, url, !0, user, password), null == mimeType || headers.has("accept") || headers.set("accept", mimeType + ",*/*"), 
                    xhr.setRequestHeader && headers.each(function(value, name) {
                        xhr.setRequestHeader(name, value);
                    }), null != mimeType && xhr.overrideMimeType && xhr.overrideMimeType(mimeType), 
                    null != responseType && (xhr.responseType = responseType), timeout > 0 && (xhr.timeout = timeout), 
                    null == callback && "function" === typeof data && (callback = data, data = null), 
                    null != callback && 1 === callback.length && (callback = fixCallback(callback)), 
                    null != callback && request.on("error", callback).on("load", function(xhr) {
                        callback(null, xhr);
                    }), event.call("beforesend", request, xhr), xhr.send(null == data ? null : data), 
                    request;
                },
                abort: function() {
                    return xhr.abort(), request;
                },
                on: function() {
                    var value = event.on.apply(event, arguments);
                    return value === event ? request : value;
                }
            }, null != callback) {
                if ("function" !== typeof callback) throw new Error("invalid callback: " + callback);
                return request.get(callback);
            }
            return request;
        }, type$1 = function(defaultMimeType, response) {
            return function(url, callback) {
                var r = request(url).mimeType(defaultMimeType).response(response);
                if (null != callback) {
                    if ("function" !== typeof callback) throw new Error("invalid callback: " + callback);
                    return r.get(callback);
                }
                return r;
            };
        }, html = type$1("text/html", function(xhr) {
            return document.createRange().createContextualFragment(xhr.responseText);
        }), json = type$1("application/json", function(xhr) {
            return JSON.parse(xhr.responseText);
        }), text = type$1("text/plain", function(xhr) {
            return xhr.responseText;
        }), xml = type$1("application/xml", function(xhr) {
            var xml = xhr.responseXML;
            if (!xml) throw new Error("parse error");
            return xml;
        }), dsv$1 = function(defaultMimeType, parse) {
            return function(url, row, callback) {
                arguments.length < 3 && (callback = row, row = null);
                var r = request(url).mimeType(defaultMimeType);
                return r.row = function(_) {
                    return arguments.length ? r.response(responseOf(parse, row = _)) : row;
                }, r.row(row), callback ? r.get(callback) : r;
            };
        }, csv$1 = dsv$1("text/csv", csvParse), tsv$1 = dsv$1("text/tab-separated-values", tsvParse), array$2 = Array.prototype, map$3 = array$2.map, slice$5 = array$2.slice, implicit = {
            name: "implicit"
        }, constant$9 = function(x) {
            return function() {
                return x;
            };
        }, number$2 = function(x) {
            return +x;
        }, unit = [ 0, 1 ], tickFormat = function(domain, count, specifier) {
            var precision, start = domain[0], stop = domain[domain.length - 1], step = tickStep(start, stop, null == count ? 10 : count);
            switch (specifier = formatSpecifier(null == specifier ? ",f" : specifier), specifier.type) {
              case "s":
                var value = Math.max(Math.abs(start), Math.abs(stop));
                return null != specifier.precision || isNaN(precision = precisionPrefix(step, value)) || (specifier.precision = precision), 
                pear.formatPrefix(specifier, value);

              case "":
              case "e":
              case "g":
              case "p":
              case "r":
                null != specifier.precision || isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop)))) || (specifier.precision = precision - ("e" === specifier.type));
                break;

              case "f":
              case "%":
                null != specifier.precision || isNaN(precision = precisionFixed(step)) || (specifier.precision = precision - 2 * ("%" === specifier.type));
            }
            return pear.format(specifier);
        }, nice = function(domain, interval) {
            domain = domain.slice();
            var t, i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1];
            return x1 < x0 && (t = i0, i0 = i1, i1 = t, t = x0, x0 = x1, x1 = t), domain[i0] = interval.floor(x0), 
            domain[i1] = interval.ceil(x1), domain;
        }, t0$1 = new Date(), t1$1 = new Date(), millisecond = newInterval(function() {}, function(date, step) {
            date.setTime(+date + step);
        }, function(start, end) {
            return end - start;
        });
        millisecond.every = function(k) {
            return k = Math.floor(k), isFinite(k) && k > 0 ? k > 1 ? newInterval(function(date) {
                date.setTime(Math.floor(date / k) * k);
            }, function(date, step) {
                date.setTime(+date + step * k);
            }, function(start, end) {
                return (end - start) / k;
            }) : millisecond : null;
        };
        var milliseconds = millisecond.range, durationMinute$1 = 6e4, durationWeek$1 = 6048e5, second = newInterval(function(date) {
            date.setTime(1e3 * Math.floor(date / 1e3));
        }, function(date, step) {
            date.setTime(+date + 1e3 * step);
        }, function(start, end) {
            return (end - start) / 1e3;
        }, function(date) {
            return date.getUTCSeconds();
        }), seconds = second.range, minute = newInterval(function(date) {
            date.setTime(Math.floor(date / durationMinute$1) * durationMinute$1);
        }, function(date, step) {
            date.setTime(+date + step * durationMinute$1);
        }, function(start, end) {
            return (end - start) / durationMinute$1;
        }, function(date) {
            return date.getMinutes();
        }), minutes = minute.range, hour = newInterval(function(date) {
            var offset = date.getTimezoneOffset() * durationMinute$1 % 36e5;
            offset < 0 && (offset += 36e5), date.setTime(36e5 * Math.floor((+date - offset) / 36e5) + offset);
        }, function(date, step) {
            date.setTime(+date + 36e5 * step);
        }, function(start, end) {
            return (end - start) / 36e5;
        }, function(date) {
            return date.getHours();
        }), hours = hour.range, day = newInterval(function(date) {
            date.setHours(0, 0, 0, 0);
        }, function(date, step) {
            date.setDate(date.getDate() + step);
        }, function(start, end) {
            return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / 864e5;
        }, function(date) {
            return date.getDate() - 1;
        }), days = day.range, sunday = weekday(0), monday = weekday(1), tuesday = weekday(2), wednesday = weekday(3), thursday = weekday(4), friday = weekday(5), saturday = weekday(6), sundays = sunday.range, mondays = monday.range, tuesdays = tuesday.range, wednesdays = wednesday.range, thursdays = thursday.range, fridays = friday.range, saturdays = saturday.range, month = newInterval(function(date) {
            date.setDate(1), date.setHours(0, 0, 0, 0);
        }, function(date, step) {
            date.setMonth(date.getMonth() + step);
        }, function(start, end) {
            return end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear());
        }, function(date) {
            return date.getMonth();
        }), months = month.range, year = newInterval(function(date) {
            date.setMonth(0, 1), date.setHours(0, 0, 0, 0);
        }, function(date, step) {
            date.setFullYear(date.getFullYear() + step);
        }, function(start, end) {
            return end.getFullYear() - start.getFullYear();
        }, function(date) {
            return date.getFullYear();
        });
        year.every = function(k) {
            return isFinite(k = Math.floor(k)) && k > 0 ? newInterval(function(date) {
                date.setFullYear(Math.floor(date.getFullYear() / k) * k), date.setMonth(0, 1), date.setHours(0, 0, 0, 0);
            }, function(date, step) {
                date.setFullYear(date.getFullYear() + step * k);
            }) : null;
        };
        var years = year.range, utcMinute = newInterval(function(date) {
            date.setUTCSeconds(0, 0);
        }, function(date, step) {
            date.setTime(+date + step * durationMinute$1);
        }, function(start, end) {
            return (end - start) / durationMinute$1;
        }, function(date) {
            return date.getUTCMinutes();
        }), utcMinutes = utcMinute.range, utcHour = newInterval(function(date) {
            date.setUTCMinutes(0, 0, 0);
        }, function(date, step) {
            date.setTime(+date + 36e5 * step);
        }, function(start, end) {
            return (end - start) / 36e5;
        }, function(date) {
            return date.getUTCHours();
        }), utcHours = utcHour.range, utcDay = newInterval(function(date) {
            date.setUTCHours(0, 0, 0, 0);
        }, function(date, step) {
            date.setUTCDate(date.getUTCDate() + step);
        }, function(start, end) {
            return (end - start) / 864e5;
        }, function(date) {
            return date.getUTCDate() - 1;
        }), utcDays = utcDay.range, utcSunday = utcWeekday(0), utcMonday = utcWeekday(1), utcTuesday = utcWeekday(2), utcWednesday = utcWeekday(3), utcThursday = utcWeekday(4), utcFriday = utcWeekday(5), utcSaturday = utcWeekday(6), utcSundays = utcSunday.range, utcMondays = utcMonday.range, utcTuesdays = utcTuesday.range, utcWednesdays = utcWednesday.range, utcThursdays = utcThursday.range, utcFridays = utcFriday.range, utcSaturdays = utcSaturday.range, utcMonth = newInterval(function(date) {
            date.setUTCDate(1), date.setUTCHours(0, 0, 0, 0);
        }, function(date, step) {
            date.setUTCMonth(date.getUTCMonth() + step);
        }, function(start, end) {
            return end.getUTCMonth() - start.getUTCMonth() + 12 * (end.getUTCFullYear() - start.getUTCFullYear());
        }, function(date) {
            return date.getUTCMonth();
        }), utcMonths = utcMonth.range, utcYear = newInterval(function(date) {
            date.setUTCMonth(0, 1), date.setUTCHours(0, 0, 0, 0);
        }, function(date, step) {
            date.setUTCFullYear(date.getUTCFullYear() + step);
        }, function(start, end) {
            return end.getUTCFullYear() - start.getUTCFullYear();
        }, function(date) {
            return date.getUTCFullYear();
        });
        utcYear.every = function(k) {
            return isFinite(k = Math.floor(k)) && k > 0 ? newInterval(function(date) {
                date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k), date.setUTCMonth(0, 1), 
                date.setUTCHours(0, 0, 0, 0);
            }, function(date, step) {
                date.setUTCFullYear(date.getUTCFullYear() + step * k);
            }) : null;
        };
        var locale$2, utcYears = utcYear.range, pads = {
            "-": "",
            _: " ",
            "0": "0"
        }, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
        defaultLocale$1({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: [ "AM", "PM" ],
            days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        });
        var formatIso = Date.prototype.toISOString ? formatIsoNative : pear.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ"), parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : pear.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"), durationSecond = 1e3, durationMinute = 60 * durationSecond, durationHour = 60 * durationMinute, durationDay = 24 * durationHour, durationWeek = 7 * durationDay, durationMonth = 30 * durationDay, durationYear = 365 * durationDay, time = function() {
            return calendar(year, month, sunday, day, hour, minute, second, millisecond, pear.timeFormat).domain([ new Date(2e3, 0, 1), new Date(2e3, 0, 2) ]);
        }, utcTime = function() {
            return calendar(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, millisecond, pear.utcFormat).domain([ Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2) ]);
        }, colors = function(s) {
            return s.match(/.{6}/g).map(function(x) {
                return "#" + x;
            });
        }, category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), category20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), category20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), category20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), cubehelix$3 = cubehelixLong(cubehelix(300, .5, 0), cubehelix(-240, .5, 1)), warm = cubehelixLong(cubehelix(-100, .75, .35), cubehelix(80, 1.5, .8)), cool = cubehelixLong(cubehelix(260, .75, .35), cubehelix(80, 1.5, .8)), rainbow = cubehelix(), rainbow$1 = function(t) {
            (t < 0 || t > 1) && (t -= Math.floor(t));
            var ts = Math.abs(t - .5);
            return rainbow.h = 360 * t - 100, rainbow.s = 1.5 - 1.5 * ts, rainbow.l = .8 - .9 * ts, 
            rainbow + "";
        }, viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")), constant$10 = function(x) {
            return function() {
                return x;
            };
        }, abs$1 = Math.abs, atan2$1 = Math.atan2, cos$2 = Math.cos, max$2 = Math.max, min$1 = Math.min, sin$2 = Math.sin, sqrt$2 = Math.sqrt, epsilon$3 = 1e-12, pi$4 = Math.PI, halfPi$3 = pi$4 / 2, tau$4 = 2 * pi$4, arc = function() {
            function arc() {
                var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi$3, a1 = endAngle.apply(this, arguments) - halfPi$3, da = abs$1(a1 - a0), cw = a1 > a0;
                if (context || (context = buffer = path()), r1 < r0 && (r = r1, r1 = r0, r0 = r), 
                r1 > epsilon$3) if (da > tau$4 - epsilon$3) context.moveTo(r1 * cos$2(a0), r1 * sin$2(a0)), 
                context.arc(0, 0, r1, a0, a1, !cw), r0 > epsilon$3 && (context.moveTo(r0 * cos$2(a1), r0 * sin$2(a1)), 
                context.arc(0, 0, r0, a1, a0, cw)); else {
                    var t0, t1, a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon$3 && (padRadius ? +padRadius.apply(this, arguments) : sqrt$2(r0 * r0 + r1 * r1)), rc = min$1(abs$1(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc;
                    if (rp > epsilon$3) {
                        var p0 = asin$1(rp / r0 * sin$2(ap)), p1 = asin$1(rp / r1 * sin$2(ap));
                        (da0 -= 2 * p0) > epsilon$3 ? (p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0) : (da0 = 0, 
                        a00 = a10 = (a0 + a1) / 2), (da1 -= 2 * p1) > epsilon$3 ? (p1 *= cw ? 1 : -1, a01 += p1, 
                        a11 -= p1) : (da1 = 0, a01 = a11 = (a0 + a1) / 2);
                    }
                    var x01 = r1 * cos$2(a01), y01 = r1 * sin$2(a01), x10 = r0 * cos$2(a10), y10 = r0 * sin$2(a10);
                    if (rc > epsilon$3) {
                        var x11 = r1 * cos$2(a11), y11 = r1 * sin$2(a11), x00 = r0 * cos$2(a00), y00 = r0 * sin$2(a00);
                        if (da < pi$4) {
                            var oc = da0 > epsilon$3 ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [ x10, y10 ], ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin$2(acos$1((ax * bx + ay * by) / (sqrt$2(ax * ax + ay * ay) * sqrt$2(bx * bx + by * by))) / 2), lc = sqrt$2(oc[0] * oc[0] + oc[1] * oc[1]);
                            rc0 = min$1(rc, (r0 - lc) / (kc - 1)), rc1 = min$1(rc, (r1 - lc) / (kc + 1));
                        }
                    }
                    da1 > epsilon$3 ? rc1 > epsilon$3 ? (t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw), 
                    t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw), context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01), 
                    rc1 < rc ? context.arc(t0.cx, t0.cy, rc1, atan2$1(t0.y01, t0.x01), atan2$1(t1.y01, t1.x01), !cw) : (context.arc(t0.cx, t0.cy, rc1, atan2$1(t0.y01, t0.x01), atan2$1(t0.y11, t0.x11), !cw), 
                    context.arc(0, 0, r1, atan2$1(t0.cy + t0.y11, t0.cx + t0.x11), atan2$1(t1.cy + t1.y11, t1.cx + t1.x11), !cw), 
                    context.arc(t1.cx, t1.cy, rc1, atan2$1(t1.y11, t1.x11), atan2$1(t1.y01, t1.x01), !cw))) : (context.moveTo(x01, y01), 
                    context.arc(0, 0, r1, a01, a11, !cw)) : context.moveTo(x01, y01), r0 > epsilon$3 && da0 > epsilon$3 ? rc0 > epsilon$3 ? (t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw), 
                    t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw), context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01), 
                    rc0 < rc ? context.arc(t0.cx, t0.cy, rc0, atan2$1(t0.y01, t0.x01), atan2$1(t1.y01, t1.x01), !cw) : (context.arc(t0.cx, t0.cy, rc0, atan2$1(t0.y01, t0.x01), atan2$1(t0.y11, t0.x11), !cw), 
                    context.arc(0, 0, r0, atan2$1(t0.cy + t0.y11, t0.cx + t0.x11), atan2$1(t1.cy + t1.y11, t1.cx + t1.x11), cw), 
                    context.arc(t1.cx, t1.cy, rc0, atan2$1(t1.y11, t1.x11), atan2$1(t1.y01, t1.x01), !cw))) : context.arc(0, 0, r0, a10, a00, cw) : context.lineTo(x10, y10);
                } else context.moveTo(0, 0);
                if (context.closePath(), buffer) return context = null, buffer + "" || null;
            }
            var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant$10(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
            return arc.centroid = function() {
                var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$4 / 2;
                return [ cos$2(a) * r, sin$2(a) * r ];
            }, arc.innerRadius = function(_) {
                return arguments.length ? (innerRadius = "function" === typeof _ ? _ : constant$10(+_), 
                arc) : innerRadius;
            }, arc.outerRadius = function(_) {
                return arguments.length ? (outerRadius = "function" === typeof _ ? _ : constant$10(+_), 
                arc) : outerRadius;
            }, arc.cornerRadius = function(_) {
                return arguments.length ? (cornerRadius = "function" === typeof _ ? _ : constant$10(+_), 
                arc) : cornerRadius;
            }, arc.padRadius = function(_) {
                return arguments.length ? (padRadius = null == _ ? null : "function" === typeof _ ? _ : constant$10(+_), 
                arc) : padRadius;
            }, arc.startAngle = function(_) {
                return arguments.length ? (startAngle = "function" === typeof _ ? _ : constant$10(+_), 
                arc) : startAngle;
            }, arc.endAngle = function(_) {
                return arguments.length ? (endAngle = "function" === typeof _ ? _ : constant$10(+_), 
                arc) : endAngle;
            }, arc.padAngle = function(_) {
                return arguments.length ? (padAngle = "function" === typeof _ ? _ : constant$10(+_), 
                arc) : padAngle;
            }, arc.context = function(_) {
                return arguments.length ? (context = null == _ ? null : _, arc) : context;
            }, arc;
        };
        Linear.prototype = {
            areaStart: function() {
                this._line = 0;
            },
            areaEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._point = 0;
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), 
                this._line = 1 - this._line;
            },
            point: function(x, y) {
                switch (x = +x, y = +y, this._point) {
                  case 0:
                    this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                    break;

                  case 1:
                    this._point = 2;

                  default:
                    this._context.lineTo(x, y);
                }
            }
        };
        var curveLinear = function(context) {
            return new Linear(context);
        }, line = function() {
            function line(data) {
                var i, d, buffer, n = data.length, defined0 = !1;
                for (null == context && (output = curve(buffer = path())), i = 0; i <= n; ++i) !(i < n && defined(d = data[i], i, data)) === defined0 && ((defined0 = !defined0) ? output.lineStart() : output.lineEnd()), 
                defined0 && output.point(+x(d, i, data), +y(d, i, data));
                if (buffer) return output = null, buffer + "" || null;
            }
            var x = x$3, y = y$3, defined = constant$10(!0), context = null, curve = curveLinear, output = null;
            return line.x = function(_) {
                return arguments.length ? (x = "function" === typeof _ ? _ : constant$10(+_), line) : x;
            }, line.y = function(_) {
                return arguments.length ? (y = "function" === typeof _ ? _ : constant$10(+_), line) : y;
            }, line.defined = function(_) {
                return arguments.length ? (defined = "function" === typeof _ ? _ : constant$10(!!_), 
                line) : defined;
            }, line.curve = function(_) {
                return arguments.length ? (curve = _, null != context && (output = curve(context)), 
                line) : curve;
            }, line.context = function(_) {
                return arguments.length ? (null == _ ? context = output = null : output = curve(context = _), 
                line) : context;
            }, line;
        }, area$2 = function() {
            function area(data) {
                var i, j, k, d, buffer, n = data.length, defined0 = !1, x0z = new Array(n), y0z = new Array(n);
                for (null == context && (output = curve(buffer = path())), i = 0; i <= n; ++i) {
                    if (!(i < n && defined(d = data[i], i, data)) === defined0) if (defined0 = !defined0) j = i, 
                    output.areaStart(), output.lineStart(); else {
                        for (output.lineEnd(), output.lineStart(), k = i - 1; k >= j; --k) output.point(x0z[k], y0z[k]);
                        output.lineEnd(), output.areaEnd();
                    }
                    defined0 && (x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data), output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]));
                }
                if (buffer) return output = null, buffer + "" || null;
            }
            function arealine() {
                return line().defined(defined).curve(curve).context(context);
            }
            var x0 = x$3, x1 = null, y0 = constant$10(0), y1 = y$3, defined = constant$10(!0), context = null, curve = curveLinear, output = null;
            return area.x = function(_) {
                return arguments.length ? (x0 = "function" === typeof _ ? _ : constant$10(+_), x1 = null, 
                area) : x0;
            }, area.x0 = function(_) {
                return arguments.length ? (x0 = "function" === typeof _ ? _ : constant$10(+_), area) : x0;
            }, area.x1 = function(_) {
                return arguments.length ? (x1 = null == _ ? null : "function" === typeof _ ? _ : constant$10(+_), 
                area) : x1;
            }, area.y = function(_) {
                return arguments.length ? (y0 = "function" === typeof _ ? _ : constant$10(+_), y1 = null, 
                area) : y0;
            }, area.y0 = function(_) {
                return arguments.length ? (y0 = "function" === typeof _ ? _ : constant$10(+_), area) : y0;
            }, area.y1 = function(_) {
                return arguments.length ? (y1 = null == _ ? null : "function" === typeof _ ? _ : constant$10(+_), 
                area) : y1;
            }, area.lineX0 = area.lineY0 = function() {
                return arealine().x(x0).y(y0);
            }, area.lineY1 = function() {
                return arealine().x(x0).y(y1);
            }, area.lineX1 = function() {
                return arealine().x(x1).y(y0);
            }, area.defined = function(_) {
                return arguments.length ? (defined = "function" === typeof _ ? _ : constant$10(!!_), 
                area) : defined;
            }, area.curve = function(_) {
                return arguments.length ? (curve = _, null != context && (output = curve(context)), 
                area) : curve;
            }, area.context = function(_) {
                return arguments.length ? (null == _ ? context = output = null : output = curve(context = _), 
                area) : context;
            }, area;
        }, descending$1 = function(a, b) {
            return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
        }, identity$7 = function(d) {
            return d;
        }, pie = function() {
            function pie(data) {
                var i, j, k, a1, v, n = data.length, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau$4, Math.max(-tau$4, endAngle.apply(this, arguments) - a0)), p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1);
                for (i = 0; i < n; ++i) (v = arcs[index[i] = i] = +value(data[i], i, data)) > 0 && (sum += v);
                for (null != sortValues ? index.sort(function(i, j) {
                    return sortValues(arcs[i], arcs[j]);
                }) : null != sort && index.sort(function(i, j) {
                    return sort(data[i], data[j]);
                }), i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) j = index[i], 
                v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
                    data: data[j],
                    index: i,
                    value: v,
                    startAngle: a0,
                    endAngle: a1,
                    padAngle: p
                };
                return arcs;
            }
            var value = identity$7, sortValues = descending$1, sort = null, startAngle = constant$10(0), endAngle = constant$10(tau$4), padAngle = constant$10(0);
            return pie.value = function(_) {
                return arguments.length ? (value = "function" === typeof _ ? _ : constant$10(+_), 
                pie) : value;
            }, pie.sortValues = function(_) {
                return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
            }, pie.sort = function(_) {
                return arguments.length ? (sort = _, sortValues = null, pie) : sort;
            }, pie.startAngle = function(_) {
                return arguments.length ? (startAngle = "function" === typeof _ ? _ : constant$10(+_), 
                pie) : startAngle;
            }, pie.endAngle = function(_) {
                return arguments.length ? (endAngle = "function" === typeof _ ? _ : constant$10(+_), 
                pie) : endAngle;
            }, pie.padAngle = function(_) {
                return arguments.length ? (padAngle = "function" === typeof _ ? _ : constant$10(+_), 
                pie) : padAngle;
            }, pie;
        }, curveRadialLinear = curveRadial(curveLinear);
        Radial.prototype = {
            areaStart: function() {
                this._curve.areaStart();
            },
            areaEnd: function() {
                this._curve.areaEnd();
            },
            lineStart: function() {
                this._curve.lineStart();
            },
            lineEnd: function() {
                this._curve.lineEnd();
            },
            point: function(a, r) {
                this._curve.point(r * Math.sin(a), r * -Math.cos(a));
            }
        };
        var lineRadial$1 = function() {
            return lineRadial(line().curve(curveRadialLinear));
        }, areaRadial = function() {
            var a = area$2().curve(curveRadialLinear), c = a.curve, x0 = a.lineX0, x1 = a.lineX1, y0 = a.lineY0, y1 = a.lineY1;
            return a.angle = a.x, delete a.x, a.startAngle = a.x0, delete a.x0, a.endAngle = a.x1, 
            delete a.x1, a.radius = a.y, delete a.y, a.innerRadius = a.y0, delete a.y0, a.outerRadius = a.y1, 
            delete a.y1, a.lineStartAngle = function() {
                return lineRadial(x0());
            }, delete a.lineX0, a.lineEndAngle = function() {
                return lineRadial(x1());
            }, delete a.lineX1, a.lineInnerRadius = function() {
                return lineRadial(y0());
            }, delete a.lineY0, a.lineOuterRadius = function() {
                return lineRadial(y1());
            }, delete a.lineY1, a.curve = function(_) {
                return arguments.length ? c(curveRadial(_)) : c()._curve;
            }, a;
        }, pointRadial = function(x, y) {
            return [ (y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x) ];
        }, slice$6 = Array.prototype.slice, circle$2 = {
            draw: function(context, size) {
                var r = Math.sqrt(size / pi$4);
                context.moveTo(r, 0), context.arc(0, 0, r, 0, tau$4);
            }
        }, cross$2 = {
            draw: function(context, size) {
                var r = Math.sqrt(size / 5) / 2;
                context.moveTo(-3 * r, -r), context.lineTo(-r, -r), context.lineTo(-r, -3 * r), 
                context.lineTo(r, -3 * r), context.lineTo(r, -r), context.lineTo(3 * r, -r), context.lineTo(3 * r, r), 
                context.lineTo(r, r), context.lineTo(r, 3 * r), context.lineTo(-r, 3 * r), context.lineTo(-r, r), 
                context.lineTo(-3 * r, r), context.closePath();
            }
        }, tan30 = Math.sqrt(1 / 3), tan30_2 = 2 * tan30, diamond = {
            draw: function(context, size) {
                var y = Math.sqrt(size / tan30_2), x = y * tan30;
                context.moveTo(0, -y), context.lineTo(x, 0), context.lineTo(0, y), context.lineTo(-x, 0), 
                context.closePath();
            }
        }, kr = Math.sin(pi$4 / 10) / Math.sin(7 * pi$4 / 10), kx = Math.sin(tau$4 / 10) * kr, ky = -Math.cos(tau$4 / 10) * kr, star = {
            draw: function(context, size) {
                var r = Math.sqrt(.8908130915292852 * size), x = kx * r, y = ky * r;
                context.moveTo(0, -r), context.lineTo(x, y);
                for (var i = 1; i < 5; ++i) {
                    var a = tau$4 * i / 5, c = Math.cos(a), s = Math.sin(a);
                    context.lineTo(s * r, -c * r), context.lineTo(c * x - s * y, s * x + c * y);
                }
                context.closePath();
            }
        }, square = {
            draw: function(context, size) {
                var w = Math.sqrt(size), x = -w / 2;
                context.rect(x, x, w, w);
            }
        }, sqrt3 = Math.sqrt(3), triangle = {
            draw: function(context, size) {
                var y = -Math.sqrt(size / (3 * sqrt3));
                context.moveTo(0, 2 * y), context.lineTo(-sqrt3 * y, -y), context.lineTo(sqrt3 * y, -y), 
                context.closePath();
            }
        }, c = -.5, s = Math.sqrt(3) / 2, k = 1 / Math.sqrt(12), a = 3 * (k / 2 + 1), wye = {
            draw: function(context, size) {
                var r = Math.sqrt(size / a), x0 = r / 2, y0 = r * k, x1 = x0, y1 = r * k + r, x2 = -x1, y2 = y1;
                context.moveTo(x0, y0), context.lineTo(x1, y1), context.lineTo(x2, y2), context.lineTo(c * x0 - s * y0, s * x0 + c * y0), 
                context.lineTo(c * x1 - s * y1, s * x1 + c * y1), context.lineTo(c * x2 - s * y2, s * x2 + c * y2), 
                context.lineTo(c * x0 + s * y0, c * y0 - s * x0), context.lineTo(c * x1 + s * y1, c * y1 - s * x1), 
                context.lineTo(c * x2 + s * y2, c * y2 - s * x2), context.closePath();
            }
        }, symbols = [ circle$2, cross$2, diamond, square, star, triangle, wye ], symbol = function() {
            function symbol() {
                var buffer;
                if (context || (context = buffer = path()), type.apply(this, arguments).draw(context, +size.apply(this, arguments)), 
                buffer) return context = null, buffer + "" || null;
            }
            var type = constant$10(circle$2), size = constant$10(64), context = null;
            return symbol.type = function(_) {
                return arguments.length ? (type = "function" === typeof _ ? _ : constant$10(_), 
                symbol) : type;
            }, symbol.size = function(_) {
                return arguments.length ? (size = "function" === typeof _ ? _ : constant$10(+_), 
                symbol) : size;
            }, symbol.context = function(_) {
                return arguments.length ? (context = null == _ ? null : _, symbol) : context;
            }, symbol;
        }, noop$2 = function() {};
        Basis.prototype = {
            areaStart: function() {
                this._line = 0;
            },
            areaEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
            },
            lineEnd: function() {
                switch (this._point) {
                  case 3:
                    point$2(this, this._x1, this._y1);

                  case 2:
                    this._context.lineTo(this._x1, this._y1);
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), 
                this._line = 1 - this._line;
            },
            point: function(x, y) {
                switch (x = +x, y = +y, this._point) {
                  case 0:
                    this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                    break;

                  case 1:
                    this._point = 2;
                    break;

                  case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);

                  default:
                    point$2(this, x, y);
                }
                this._x0 = this._x1, this._x1 = x, this._y0 = this._y1, this._y1 = y;
            }
        };
        var basis$2 = function(context) {
            return new Basis(context);
        };
        BasisClosed.prototype = {
            areaStart: noop$2,
            areaEnd: noop$2,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, 
                this._point = 0;
            },
            lineEnd: function() {
                switch (this._point) {
                  case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath();
                    break;

                  case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), 
                    this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), 
                    this._context.closePath();
                    break;

                  case 3:
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
                }
            },
            point: function(x, y) {
                switch (x = +x, y = +y, this._point) {
                  case 0:
                    this._point = 1, this._x2 = x, this._y2 = y;
                    break;

                  case 1:
                    this._point = 2, this._x3 = x, this._y3 = y;
                    break;

                  case 2:
                    this._point = 3, this._x4 = x, this._y4 = y, this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
                    break;

                  default:
                    point$2(this, x, y);
                }
                this._x0 = this._x1, this._x1 = x, this._y0 = this._y1, this._y1 = y;
            }
        };
        var basisClosed$1 = function(context) {
            return new BasisClosed(context);
        };
        BasisOpen.prototype = {
            areaStart: function() {
                this._line = 0;
            },
            areaEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), 
                this._line = 1 - this._line;
            },
            point: function(x, y) {
                switch (x = +x, y = +y, this._point) {
                  case 0:
                    this._point = 1;
                    break;

                  case 1:
                    this._point = 2;
                    break;

                  case 2:
                    this._point = 3;
                    var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6;
                    this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
                    break;

                  case 3:
                    this._point = 4;

                  default:
                    point$2(this, x, y);
                }
                this._x0 = this._x1, this._x1 = x, this._y0 = this._y1, this._y1 = y;
            }
        };
        var basisOpen = function(context) {
            return new BasisOpen(context);
        };
        Bundle.prototype = {
            lineStart: function() {
                this._x = [], this._y = [], this._basis.lineStart();
            },
            lineEnd: function() {
                var x = this._x, y = this._y, j = x.length - 1;
                if (j > 0) for (var t, x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i = -1; ++i <= j; ) t = i / j, 
                this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
                this._x = this._y = null, this._basis.lineEnd();
            },
            point: function(x, y) {
                this._x.push(+x), this._y.push(+y);
            }
        };
        var bundle = function custom(beta) {
            function bundle(context) {
                return 1 === beta ? new Basis(context) : new Bundle(context, beta);
            }
            return bundle.beta = function(beta) {
                return custom(+beta);
            }, bundle;
        }(.85);
        Cardinal.prototype = {
            areaStart: function() {
                this._line = 0;
            },
            areaEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
            },
            lineEnd: function() {
                switch (this._point) {
                  case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;

                  case 3:
                    point$3(this, this._x1, this._y1);
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), 
                this._line = 1 - this._line;
            },
            point: function(x, y) {
                switch (x = +x, y = +y, this._point) {
                  case 0:
                    this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                    break;

                  case 1:
                    this._point = 2, this._x1 = x, this._y1 = y;
                    break;

                  case 2:
                    this._point = 3;

                  default:
                    point$3(this, x, y);
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, this._y0 = this._y1, this._y1 = this._y2, 
                this._y2 = y;
            }
        };
        var cardinal = function custom(tension) {
            function cardinal(context) {
                return new Cardinal(context, tension);
            }
            return cardinal.tension = function(tension) {
                return custom(+tension);
            }, cardinal;
        }(0);
        CardinalClosed.prototype = {
            areaStart: noop$2,
            areaEnd: noop$2,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, 
                this._point = 0;
            },
            lineEnd: function() {
                switch (this._point) {
                  case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;

                  case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;

                  case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
                }
            },
            point: function(x, y) {
                switch (x = +x, y = +y, this._point) {
                  case 0:
                    this._point = 1, this._x3 = x, this._y3 = y;
                    break;

                  case 1:
                    this._point = 2, this._context.moveTo(this._x4 = x, this._y4 = y);
                    break;

                  case 2:
                    this._point = 3, this._x5 = x, this._y5 = y;
                    break;

                  default:
                    point$3(this, x, y);
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, this._y0 = this._y1, this._y1 = this._y2, 
                this._y2 = y;
            }
        };
        var cardinalClosed = function custom(tension) {
            function cardinal$$1(context) {
                return new CardinalClosed(context, tension);
            }
            return cardinal$$1.tension = function(tension) {
                return custom(+tension);
            }, cardinal$$1;
        }(0);
        CardinalOpen.prototype = {
            areaStart: function() {
                this._line = 0;
            },
            areaEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), 
                this._line = 1 - this._line;
            },
            point: function(x, y) {
                switch (x = +x, y = +y, this._point) {
                  case 0:
                    this._point = 1;
                    break;

                  case 1:
                    this._point = 2;
                    break;

                  case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;

                  case 3:
                    this._point = 4;

                  default:
                    point$3(this, x, y);
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, this._y0 = this._y1, this._y1 = this._y2, 
                this._y2 = y;
            }
        };
        var cardinalOpen = function custom(tension) {
            function cardinal$$1(context) {
                return new CardinalOpen(context, tension);
            }
            return cardinal$$1.tension = function(tension) {
                return custom(+tension);
            }, cardinal$$1;
        }(0);
        CatmullRom.prototype = {
            areaStart: function() {
                this._line = 0;
            },
            areaEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
            },
            lineEnd: function() {
                switch (this._point) {
                  case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;

                  case 3:
                    this.point(this._x2, this._y2);
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), 
                this._line = 1 - this._line;
            },
            point: function(x, y) {
                if (x = +x, y = +y, this._point) {
                    var x23 = this._x2 - x, y23 = this._y2 - y;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
                }
                switch (this._point) {
                  case 0:
                    this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                    break;

                  case 1:
                    this._point = 2;
                    break;

                  case 2:
                    this._point = 3;

                  default:
                    point$4(this, x, y);
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, 
                this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, 
                this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
            }
        };
        var catmullRom = function custom(alpha) {
            function catmullRom(context) {
                return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
            }
            return catmullRom.alpha = function(alpha) {
                return custom(+alpha);
            }, catmullRom;
        }(.5);
        CatmullRomClosed.prototype = {
            areaStart: noop$2,
            areaEnd: noop$2,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, 
                this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
            },
            lineEnd: function() {
                switch (this._point) {
                  case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;

                  case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;

                  case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
                }
            },
            point: function(x, y) {
                if (x = +x, y = +y, this._point) {
                    var x23 = this._x2 - x, y23 = this._y2 - y;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
                }
                switch (this._point) {
                  case 0:
                    this._point = 1, this._x3 = x, this._y3 = y;
                    break;

                  case 1:
                    this._point = 2, this._context.moveTo(this._x4 = x, this._y4 = y);
                    break;

                  case 2:
                    this._point = 3, this._x5 = x, this._y5 = y;
                    break;

                  default:
                    point$4(this, x, y);
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, 
                this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, 
                this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
            }
        };
        var catmullRomClosed = function custom(alpha) {
            function catmullRom$$1(context) {
                return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
            }
            return catmullRom$$1.alpha = function(alpha) {
                return custom(+alpha);
            }, catmullRom$$1;
        }(.5);
        CatmullRomOpen.prototype = {
            areaStart: function() {
                this._line = 0;
            },
            areaEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), 
                this._line = 1 - this._line;
            },
            point: function(x, y) {
                if (x = +x, y = +y, this._point) {
                    var x23 = this._x2 - x, y23 = this._y2 - y;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
                }
                switch (this._point) {
                  case 0:
                    this._point = 1;
                    break;

                  case 1:
                    this._point = 2;
                    break;

                  case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;

                  case 3:
                    this._point = 4;

                  default:
                    point$4(this, x, y);
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, 
                this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = x, 
                this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
            }
        };
        var catmullRomOpen = function custom(alpha) {
            function catmullRom$$1(context) {
                return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
            }
            return catmullRom$$1.alpha = function(alpha) {
                return custom(+alpha);
            }, catmullRom$$1;
        }(.5);
        LinearClosed.prototype = {
            areaStart: noop$2,
            areaEnd: noop$2,
            lineStart: function() {
                this._point = 0;
            },
            lineEnd: function() {
                this._point && this._context.closePath();
            },
            point: function(x, y) {
                x = +x, y = +y, this._point ? this._context.lineTo(x, y) : (this._point = 1, this._context.moveTo(x, y));
            }
        };
        var linearClosed = function(context) {
            return new LinearClosed(context);
        };
        MonotoneX.prototype = {
            areaStart: function() {
                this._line = 0;
            },
            areaEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
            },
            lineEnd: function() {
                switch (this._point) {
                  case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;

                  case 3:
                    point$5(this, this._t0, slope2(this, this._t0));
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), 
                this._line = 1 - this._line;
            },
            point: function(x, y) {
                var t1 = NaN;
                if (x = +x, y = +y, x !== this._x1 || y !== this._y1) {
                    switch (this._point) {
                      case 0:
                        this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                        break;

                      case 1:
                        this._point = 2;
                        break;

                      case 2:
                        this._point = 3, point$5(this, slope2(this, t1 = slope3(this, x, y)), t1);
                        break;

                      default:
                        point$5(this, this._t0, t1 = slope3(this, x, y));
                    }
                    this._x0 = this._x1, this._x1 = x, this._y0 = this._y1, this._y1 = y, this._t0 = t1;
                }
            }
        }, (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
            MonotoneX.prototype.point.call(this, y, x);
        }, ReflectContext.prototype = {
            moveTo: function(x, y) {
                this._context.moveTo(y, x);
            },
            closePath: function() {
                this._context.closePath();
            },
            lineTo: function(x, y) {
                this._context.lineTo(y, x);
            },
            bezierCurveTo: function(x1, y1, x2, y2, x, y) {
                this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
            }
        }, Natural.prototype = {
            areaStart: function() {
                this._line = 0;
            },
            areaEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._x = [], this._y = [];
            },
            lineEnd: function() {
                var x = this._x, y = this._y, n = x.length;
                if (n) if (this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]), 
                2 === n) this._context.lineTo(x[1], y[1]); else for (var px = controlPoints(x), py = controlPoints(y), i0 = 0, i1 = 1; i1 < n; ++i0, 
                ++i1) this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
                (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, 
                this._x = this._y = null;
            },
            point: function(x, y) {
                this._x.push(+x), this._y.push(+y);
            }
        };
        var natural = function(context) {
            return new Natural(context);
        };
        Step.prototype = {
            areaStart: function() {
                this._line = 0;
            },
            areaEnd: function() {
                this._line = NaN;
            },
            lineStart: function() {
                this._x = this._y = NaN, this._point = 0;
            },
            lineEnd: function() {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), 
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), 
                this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
            },
            point: function(x, y) {
                switch (x = +x, y = +y, this._point) {
                  case 0:
                    this._point = 1, this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                    break;

                  case 1:
                    this._point = 2;

                  default:
                    if (this._t <= 0) this._context.lineTo(this._x, y), this._context.lineTo(x, y); else {
                        var x1 = this._x * (1 - this._t) + x * this._t;
                        this._context.lineTo(x1, this._y), this._context.lineTo(x1, y);
                    }
                }
                this._x = x, this._y = y;
            }
        };
        var step = function(context) {
            return new Step(context, .5);
        }, none$1 = function(series, order) {
            if ((n = series.length) > 1) for (var j, s0, n, i = 1, s1 = series[order[0]], m = s1.length; i < n; ++i) for (s0 = s1, 
            s1 = series[order[i]], j = 0; j < m; ++j) s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
        }, none$2 = function(series) {
            for (var n = series.length, o = new Array(n); --n >= 0; ) o[n] = n;
            return o;
        }, stack = function() {
            function stack(data) {
                var i, oz, kz = keys.apply(this, arguments), m = data.length, n = kz.length, sz = new Array(n);
                for (i = 0; i < n; ++i) {
                    for (var sij, ki = kz[i], si = sz[i] = new Array(m), j = 0; j < m; ++j) si[j] = sij = [ 0, +value(data[j], ki, j, data) ], 
                    sij.data = data[j];
                    si.key = ki;
                }
                for (i = 0, oz = order(sz); i < n; ++i) sz[oz[i]].index = i;
                return offset(sz, oz), sz;
            }
            var keys = constant$10([]), order = none$2, offset = none$1, value = stackValue;
            return stack.keys = function(_) {
                return arguments.length ? (keys = "function" === typeof _ ? _ : constant$10(slice$6.call(_)), 
                stack) : keys;
            }, stack.value = function(_) {
                return arguments.length ? (value = "function" === typeof _ ? _ : constant$10(+_), 
                stack) : value;
            }, stack.order = function(_) {
                return arguments.length ? (order = null == _ ? none$2 : "function" === typeof _ ? _ : constant$10(slice$6.call(_)), 
                stack) : order;
            }, stack.offset = function(_) {
                return arguments.length ? (offset = null == _ ? none$1 : _, stack) : offset;
            }, stack;
        }, expand = function(series, order) {
            if ((n = series.length) > 0) {
                for (var i, n, y, j = 0, m = series[0].length; j < m; ++j) {
                    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
                    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
                }
                none$1(series, order);
            }
        }, diverging = function(series, order) {
            if ((n = series.length) > 1) for (var i, d, dy, yp, yn, n, j = 0, m = series[order[0]].length; j < m; ++j) for (yp = yn = 0, 
            i = 0; i < n; ++i) (dy = (d = series[order[i]][j])[1] - d[0]) >= 0 ? (d[0] = yp, 
            d[1] = yp += dy) : dy < 0 ? (d[1] = yn, d[0] = yn += dy) : d[0] = yp;
        }, silhouette = function(series, order) {
            if ((n = series.length) > 0) {
                for (var n, j = 0, s0 = series[order[0]], m = s0.length; j < m; ++j) {
                    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
                    s0[j][1] += s0[j][0] = -y / 2;
                }
                none$1(series, order);
            }
        }, wiggle = function(series, order) {
            if ((n = series.length) > 0 && (m = (s0 = series[order[0]]).length) > 0) {
                for (var s0, m, n, y = 0, j = 1; j < m; ++j) {
                    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
                        for (var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2, k = 0; k < i; ++k) {
                            var sk = series[order[k]];
                            s3 += (sk[j][1] || 0) - (sk[j - 1][1] || 0);
                        }
                        s1 += sij0, s2 += s3 * sij0;
                    }
                    s0[j - 1][1] += s0[j - 1][0] = y, s1 && (y -= s2 / s1);
                }
                s0[j - 1][1] += s0[j - 1][0] = y, none$1(series, order);
            }
        }, ascending$2 = function(series) {
            var sums = series.map(sum$2);
            return none$2(series).sort(function(a, b) {
                return sums[a] - sums[b];
            });
        }, descending$2 = function(series) {
            return ascending$2(series).reverse();
        }, insideOut = function(series) {
            var i, j, n = series.length, sums = series.map(sum$2), order = none$2(series).sort(function(a, b) {
                return sums[b] - sums[a];
            }), top = 0, bottom = 0, tops = [], bottoms = [];
            for (i = 0; i < n; ++i) j = order[i], top < bottom ? (top += sums[j], tops.push(j)) : (bottom += sums[j], 
            bottoms.push(j));
            return bottoms.reverse().concat(tops);
        }, reverse = function(series) {
            return none$2(series).reverse();
        }, constant$11 = function(x) {
            return function() {
                return x;
            };
        };
        RedBlackTree.prototype = {
            constructor: RedBlackTree,
            insert: function(after, node) {
                var parent, grandpa, uncle;
                if (after) {
                    if (node.P = after, node.N = after.N, after.N && (after.N.P = node), after.N = node, 
                    after.R) {
                        for (after = after.R; after.L; ) after = after.L;
                        after.L = node;
                    } else after.R = node;
                    parent = after;
                } else this._ ? (after = RedBlackFirst(this._), node.P = null, node.N = after, after.P = after.L = node, 
                parent = after) : (node.P = node.N = null, this._ = node, parent = null);
                for (node.L = node.R = null, node.U = parent, node.C = !0, after = node; parent && parent.C; ) grandpa = parent.U, 
                parent === grandpa.L ? (uncle = grandpa.R, uncle && uncle.C ? (parent.C = uncle.C = !1, 
                grandpa.C = !0, after = grandpa) : (after === parent.R && (RedBlackRotateLeft(this, parent), 
                after = parent, parent = after.U), parent.C = !1, grandpa.C = !0, RedBlackRotateRight(this, grandpa))) : (uncle = grandpa.L, 
                uncle && uncle.C ? (parent.C = uncle.C = !1, grandpa.C = !0, after = grandpa) : (after === parent.L && (RedBlackRotateRight(this, parent), 
                after = parent, parent = after.U), parent.C = !1, grandpa.C = !0, RedBlackRotateLeft(this, grandpa))), 
                parent = after.U;
                this._.C = !1;
            },
            remove: function(node) {
                node.N && (node.N.P = node.P), node.P && (node.P.N = node.N), node.N = node.P = null;
                var sibling, next, red, parent = node.U, left = node.L, right = node.R;
                if (next = left ? right ? RedBlackFirst(right) : left : right, parent ? parent.L === node ? parent.L = next : parent.R = next : this._ = next, 
                left && right ? (red = next.C, next.C = node.C, next.L = left, left.U = next, next !== right ? (parent = next.U, 
                next.U = node.U, node = next.R, parent.L = node, next.R = right, right.U = next) : (next.U = parent, 
                parent = next, node = next.R)) : (red = node.C, node = next), node && (node.U = parent), 
                !red) {
                    if (node && node.C) return void (node.C = !1);
                    do {
                        if (node === this._) break;
                        if (node === parent.L) {
                            if (sibling = parent.R, sibling.C && (sibling.C = !1, parent.C = !0, RedBlackRotateLeft(this, parent), 
                            sibling = parent.R), sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                                sibling.R && sibling.R.C || (sibling.L.C = !1, sibling.C = !0, RedBlackRotateRight(this, sibling), 
                                sibling = parent.R), sibling.C = parent.C, parent.C = sibling.R.C = !1, RedBlackRotateLeft(this, parent), 
                                node = this._;
                                break;
                            }
                        } else if (sibling = parent.L, sibling.C && (sibling.C = !1, parent.C = !0, RedBlackRotateRight(this, parent), 
                        sibling = parent.L), sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                            sibling.L && sibling.L.C || (sibling.R.C = !1, sibling.C = !0, RedBlackRotateLeft(this, sibling), 
                            sibling = parent.L), sibling.C = parent.C, parent.C = sibling.L.C = !1, RedBlackRotateRight(this, parent), 
                            node = this._;
                            break;
                        }
                        sibling.C = !0, node = parent, parent = parent.U;
                    } while (!node.C);
                    node && (node.C = !1);
                }
            }
        };
        var firstCircle, beaches, cells, circles, edges, circlePool = [], beachPool = [], epsilon$4 = 1e-6, epsilon2$2 = 1e-12;
        Diagram.prototype = {
            constructor: Diagram,
            polygons: function() {
                var edges = this.edges;
                return this.cells.map(function(cell) {
                    var polygon = cell.halfedges.map(function(i) {
                        return cellHalfedgeStart(cell, edges[i]);
                    });
                    return polygon.data = cell.site.data, polygon;
                });
            },
            triangles: function() {
                var triangles = [], edges = this.edges;
                return this.cells.forEach(function(cell, i) {
                    if (m = (halfedges = cell.halfedges).length) for (var halfedges, m, s0, site = cell.site, j = -1, e1 = edges[halfedges[m - 1]], s1 = e1.left === site ? e1.right : e1.left; ++j < m; ) s0 = s1, 
                    e1 = edges[halfedges[j]], s1 = e1.left === site ? e1.right : e1.left, s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0 && triangles.push([ site.data, s0.data, s1.data ]);
                }), triangles;
            },
            links: function() {
                return this.edges.filter(function(edge) {
                    return edge.right;
                }).map(function(edge) {
                    return {
                        source: edge.left.data,
                        target: edge.right.data
                    };
                });
            },
            find: function(x, y, radius) {
                for (var i0, cell, that = this, i1 = that._found || 0, n = that.cells.length; !(cell = that.cells[i1]); ) if (++i1 >= n) return null;
                var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;
                do {
                    cell = that.cells[i0 = i1], i1 = null, cell.halfedges.forEach(function(e) {
                        var edge = that.edges[e], v = edge.left;
                        if (v !== cell.site && v || (v = edge.right)) {
                            var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
                            v2 < d2 && (d2 = v2, i1 = v.index);
                        }
                    });
                } while (null !== i1);
                return that._found = i0, null == radius || d2 <= radius * radius ? cell.site : null;
            }
        };
        var voronoi = function() {
            function voronoi(data) {
                return new Diagram(data.map(function(d, i) {
                    var s = [ Math.round(x(d, i, data) / epsilon$4) * epsilon$4, Math.round(y(d, i, data) / epsilon$4) * epsilon$4 ];
                    return s.index = i, s.data = d, s;
                }), extent);
            }
            var x = x$4, y = y$4, extent = null;
            return voronoi.polygons = function(data) {
                return voronoi(data).polygons();
            }, voronoi.links = function(data) {
                return voronoi(data).links();
            }, voronoi.triangles = function(data) {
                return voronoi(data).triangles();
            }, voronoi.x = function(_) {
                return arguments.length ? (x = "function" === typeof _ ? _ : constant$11(+_), voronoi) : x;
            }, voronoi.y = function(_) {
                return arguments.length ? (y = "function" === typeof _ ? _ : constant$11(+_), voronoi) : y;
            }, voronoi.extent = function(_) {
                return arguments.length ? (extent = null == _ ? null : [ [ +_[0][0], +_[0][1] ], [ +_[1][0], +_[1][1] ] ], 
                voronoi) : extent && [ [ extent[0][0], extent[0][1] ], [ extent[1][0], extent[1][1] ] ];
            }, voronoi.size = function(_) {
                return arguments.length ? (extent = null == _ ? null : [ [ 0, 0 ], [ +_[0], +_[1] ] ], 
                voronoi) : extent && [ extent[1][0] - extent[0][0], extent[1][1] - extent[0][1] ];
            }, voronoi;
        }, constant$12 = function(x) {
            return function() {
                return x;
            };
        };
        Transform.prototype = {
            constructor: Transform,
            scale: function(k) {
                return 1 === k ? this : new Transform(this.k * k, this.x, this.y);
            },
            translate: function(x, y) {
                return 0 === x & 0 === y ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
            },
            apply: function(point) {
                return [ point[0] * this.k + this.x, point[1] * this.k + this.y ];
            },
            applyX: function(x) {
                return x * this.k + this.x;
            },
            applyY: function(y) {
                return y * this.k + this.y;
            },
            invert: function(location) {
                return [ (location[0] - this.x) / this.k, (location[1] - this.y) / this.k ];
            },
            invertX: function(x) {
                return (x - this.x) / this.k;
            },
            invertY: function(y) {
                return (y - this.y) / this.k;
            },
            rescaleX: function(x) {
                return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
            },
            rescaleY: function(y) {
                return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
            },
            toString: function() {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
            }
        };
        var identity$8 = new Transform(1, 0, 0);
        transform$1.prototype = Transform.prototype;
        var noevent$2 = function() {
            pear.event.preventDefault(), pear.event.stopImmediatePropagation();
        }, zoom = function() {
            function zoom(selection$$1) {
                selection$$1.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable$1).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
            }
            function scale(transform$$1, k) {
                return k = Math.max(k0, Math.min(k1, k)), k === transform$$1.k ? transform$$1 : new Transform(k, transform$$1.x, transform$$1.y);
            }
            function translate(transform$$1, p0, p1) {
                var x = p0[0] - p1[0] * transform$$1.k, y = p0[1] - p1[1] * transform$$1.k;
                return x === transform$$1.x && y === transform$$1.y ? transform$$1 : new Transform(transform$$1.k, x, y);
            }
            function constrain(transform$$1, extent) {
                var dx0 = transform$$1.invertX(extent[0][0]) - x0, dx1 = transform$$1.invertX(extent[1][0]) - x1, dy0 = transform$$1.invertY(extent[0][1]) - y0, dy1 = transform$$1.invertY(extent[1][1]) - y1;
                return transform$$1.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
            }
            function centroid(extent) {
                return [ (+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2 ];
            }
            function schedule(transition$$1, transform$$1, center) {
                transition$$1.on("start.zoom", function() {
                    gesture(this, arguments).start();
                }).on("interrupt.zoom end.zoom", function() {
                    gesture(this, arguments).end();
                }).tween("zoom", function() {
                    var that = this, args = arguments, g = gesture(that, args), e = extent.apply(that, args), p = center || centroid(e), w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = "function" === typeof transform$$1 ? transform$$1.apply(that, args) : transform$$1, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
                    return function(t) {
                        if (1 === t) t = b; else {
                            var l = i(t), k = w / l[2];
                            t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
                        }
                        g.zoom(null, t);
                    };
                });
            }
            function gesture(that, args) {
                for (var g, i = 0, n = gestures.length; i < n; ++i) if ((g = gestures[i]).that === that) return g;
                return new Gesture(that, args);
            }
            function Gesture(that, args) {
                this.that = that, this.args = args, this.index = -1, this.active = 0, this.extent = extent.apply(that, args);
            }
            function wheeled() {
                function wheelidled() {
                    g.wheel = null, g.end();
                }
                if (filter.apply(this, arguments)) {
                    var g = gesture(this, arguments), t = this.__zoom, k = Math.max(k0, Math.min(k1, t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = mouse(this);
                    if (g.wheel) g.mouse[0][0] === p[0] && g.mouse[0][1] === p[1] || (g.mouse[1] = t.invert(g.mouse[0] = p)), 
                    clearTimeout(g.wheel); else {
                        if (t.k === k) return;
                        g.mouse = [ p, t.invert(p) ], interrupt(this), g.start();
                    }
                    noevent$2(), g.wheel = setTimeout(wheelidled, wheelDelay), g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent));
                }
            }
            function mousedowned() {
                function mousemoved() {
                    if (noevent$2(), !g.moved) {
                        var dx = pear.event.clientX - x0, dy = pear.event.clientY - y0;
                        g.moved = dx * dx + dy * dy > clickDistance2;
                    }
                    g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = mouse(g.that), g.mouse[1]), g.extent));
                }
                function mouseupped() {
                    v.on("mousemove.zoom mouseup.zoom", null), yesdrag(pear.event.view, g.moved), 
                    noevent$2(), g.end();
                }
                if (!touchending && filter.apply(this, arguments)) {
                    var g = gesture(this, arguments), v = select(pear.event.view).on("mousemove.zoom", mousemoved, !0).on("mouseup.zoom", mouseupped, !0), p = mouse(this), x0 = pear.event.clientX, y0 = pear.event.clientY;
                    dragDisable(pear.event.view), nopropagation$2(), g.mouse = [ p, this.__zoom.invert(p) ], 
                    interrupt(this), g.start();
                }
            }
            function dblclicked() {
                if (filter.apply(this, arguments)) {
                    var t0 = this.__zoom, p0 = mouse(this), p1 = t0.invert(p0), k1 = t0.k * (pear.event.shiftKey ? .5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments));
                    noevent$2(), duration > 0 ? select(this).transition().duration(duration).call(schedule, t1, p0) : select(this).call(zoom.transform, t1);
                }
            }
            function touchstarted() {
                if (filter.apply(this, arguments)) {
                    var started, i, t, p, g = gesture(this, arguments), touches$$1 = pear.event.changedTouches, n = touches$$1.length;
                    for (nopropagation$2(), i = 0; i < n; ++i) t = touches$$1[i], p = touch(this, touches$$1, t.identifier), 
                    p = [ p, this.__zoom.invert(p), t.identifier ], g.touch0 ? g.touch1 || (g.touch1 = p) : (g.touch0 = p, 
                    started = !0);
                    if (touchstarting && (touchstarting = clearTimeout(touchstarting), !g.touch1)) return g.end(), 
                    void ((p = select(this).on("dblclick.zoom")) && p.apply(this, arguments));
                    started && (touchstarting = setTimeout(function() {
                        touchstarting = null;
                    }, touchDelay), interrupt(this), g.start());
                }
            }
            function touchmoved() {
                var i, t, p, l, g = gesture(this, arguments), touches$$1 = pear.event.changedTouches, n = touches$$1.length;
                for (noevent$2(), touchstarting && (touchstarting = clearTimeout(touchstarting)), 
                i = 0; i < n; ++i) t = touches$$1[i], p = touch(this, touches$$1, t.identifier), 
                g.touch0 && g.touch0[2] === t.identifier ? g.touch0[0] = p : g.touch1 && g.touch1[2] === t.identifier && (g.touch1[0] = p);
                if (t = g.that.__zoom, g.touch1) {
                    var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
                    t = scale(t, Math.sqrt(dp / dl)), p = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ], 
                    l = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
                } else {
                    if (!g.touch0) return;
                    p = g.touch0[0], l = g.touch0[1];
                }
                g.zoom("touch", constrain(translate(t, p, l), g.extent));
            }
            function touchended() {
                var i, t, g = gesture(this, arguments), touches$$1 = pear.event.changedTouches, n = touches$$1.length;
                for (nopropagation$2(), touchending && clearTimeout(touchending), touchending = setTimeout(function() {
                    touchending = null;
                }, touchDelay), i = 0; i < n; ++i) t = touches$$1[i], g.touch0 && g.touch0[2] === t.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === t.identifier && delete g.touch1;
                g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0 ? g.touch0[1] = this.__zoom.invert(g.touch0[0]) : g.end();
            }
            var touchstarting, touchending, filter = defaultFilter$2, extent = defaultExtent$1, wheelDelta = defaultWheelDelta, k0 = 0, k1 = 1 / 0, x0 = -k1, x1 = k1, y0 = x0, y1 = x1, duration = 250, interpolate = interpolateZoom, gestures = [], listeners = dispatch("start", "zoom", "end"), touchDelay = 500, wheelDelay = 150, clickDistance2 = 0;
            return zoom.transform = function(collection, transform$$1) {
                var selection$$1 = collection.selection ? collection.selection() : collection;
                selection$$1.property("__zoom", defaultTransform), collection !== selection$$1 ? schedule(collection, transform$$1) : selection$$1.interrupt().each(function() {
                    gesture(this, arguments).start().zoom(null, "function" === typeof transform$$1 ? transform$$1.apply(this, arguments) : transform$$1).end();
                });
            }, zoom.scaleBy = function(selection$$1, k) {
                zoom.scaleTo(selection$$1, function() {
                    return this.__zoom.k * ("function" === typeof k ? k.apply(this, arguments) : k);
                });
            }, zoom.scaleTo = function(selection$$1, k) {
                zoom.transform(selection$$1, function() {
                    var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = centroid(e), p1 = t0.invert(p0);
                    return constrain(translate(scale(t0, "function" === typeof k ? k.apply(this, arguments) : k), p0, p1), e);
                });
            }, zoom.translateBy = function(selection$$1, x, y) {
                zoom.transform(selection$$1, function() {
                    return constrain(this.__zoom.translate("function" === typeof x ? x.apply(this, arguments) : x, "function" === typeof y ? y.apply(this, arguments) : y), extent.apply(this, arguments));
                });
            }, zoom.translateTo = function(selection$$1, x, y) {
                zoom.transform(selection$$1, function() {
                    var e = extent.apply(this, arguments), t = this.__zoom, p = centroid(e);
                    return constrain(identity$8.translate(p[0], p[1]).scale(t.k).translate("function" === typeof x ? -x.apply(this, arguments) : -x, "function" === typeof y ? -y.apply(this, arguments) : -y), e);
                });
            }, Gesture.prototype = {
                start: function() {
                    return 1 === ++this.active && (this.index = gestures.push(this) - 1, this.emit("start")), 
                    this;
                },
                zoom: function(key, transform$$1) {
                    return this.mouse && "mouse" !== key && (this.mouse[1] = transform$$1.invert(this.mouse[0])), 
                    this.touch0 && "touch" !== key && (this.touch0[1] = transform$$1.invert(this.touch0[0])), 
                    this.touch1 && "touch" !== key && (this.touch1[1] = transform$$1.invert(this.touch1[0])), 
                    this.that.__zoom = transform$$1, this.emit("zoom"), this;
                },
                end: function() {
                    return 0 === --this.active && (gestures.splice(this.index, 1), this.index = -1, 
                    this.emit("end")), this;
                },
                emit: function(type) {
                    customEvent(new ZoomEvent(zoom, type, this.that.__zoom), listeners.apply, listeners, [ type, this.that, this.args ]);
                }
            }, zoom.wheelDelta = function(_) {
                return arguments.length ? (wheelDelta = "function" === typeof _ ? _ : constant$12(+_), 
                zoom) : wheelDelta;
            }, zoom.filter = function(_) {
                return arguments.length ? (filter = "function" === typeof _ ? _ : constant$12(!!_), 
                zoom) : filter;
            }, zoom.extent = function(_) {
                return arguments.length ? (extent = "function" === typeof _ ? _ : constant$12([ [ +_[0][0], +_[0][1] ], [ +_[1][0], +_[1][1] ] ]), 
                zoom) : extent;
            }, zoom.scaleExtent = function(_) {
                return arguments.length ? (k0 = +_[0], k1 = +_[1], zoom) : [ k0, k1 ];
            }, zoom.translateExtent = function(_) {
                return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], 
                zoom) : [ [ x0, y0 ], [ x1, y1 ] ];
            }, zoom.duration = function(_) {
                return arguments.length ? (duration = +_, zoom) : duration;
            }, zoom.interpolate = function(_) {
                return arguments.length ? (interpolate = _, zoom) : interpolate;
            }, zoom.on = function() {
                var value = listeners.on.apply(listeners, arguments);
                return value === listeners ? zoom : value;
            }, zoom.clickDistance = function(_) {
                return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
            }, zoom;
        };
        pear.version = "4.10.0", pear.bisect = bisectRight, pear.bisectRight = bisectRight, 
        pear.bisectLeft = bisectLeft, pear.ascending = ascending, pear.bisector = bisector, 
        pear.cross = cross, pear.descending = descending, pear.deviation = deviation, 
        pear.extent = extent, pear.histogram = histogram, pear.thresholdFreedmanDiaconis = freedmanDiaconis, 
        pear.thresholdScott = scott, pear.thresholdSturges = sturges, pear.max = max, 
        pear.mean = mean, pear.median = median, pear.merge = merge, pear.min = min, 
        pear.pairs = pairs, pear.permute = permute, pear.quantile = threshold, 
        pear.range = sequence, pear.scan = scan, pear.shuffle = shuffle, pear.sum = sum, 
        pear.ticks = ticks, pear.tickIncrement = tickIncrement, pear.tickStep = tickStep, 
        pear.transpose = transpose, pear.variance = variance, pear.zip = zip, pear.axisTop = axisTop, 
        pear.axisRight = axisRight, pear.axisBottom = axisBottom, pear.axisLeft = axisLeft, 
        pear.brush = brush, pear.brushX = brushX, pear.brushY = brushY, pear.brushSelection = brushSelection, 
        pear.chord = chord, pear.ribbon = ribbon, pear.nest = nest, pear.set = set$2, 
        pear.map = map$1, pear.keys = keys, pear.values = values, pear.entries = entries, 
        pear.color = color, pear.rgb = rgb, pear.hsl = hsl, pear.lab = lab, 
        pear.hcl = hcl, pear.cubehelix = cubehelix, pear.dispatch = dispatch, pear.drag = drag, 
        pear.dragDisable = dragDisable, pear.dragEnable = yesdrag, pear.dsvFormat = dsv, 
        pear.csvParse = csvParse, pear.csvParseRows = csvParseRows, pear.csvFormat = csvFormat, 
        pear.csvFormatRows = csvFormatRows, pear.tsvParse = tsvParse, pear.tsvParseRows = tsvParseRows, 
        pear.tsvFormat = tsvFormat, pear.tsvFormatRows = tsvFormatRows, pear.easeLinear = linear$1, 
        pear.easeQuad = quadInOut, pear.easeQuadIn = quadIn, pear.easeQuadOut = quadOut, 
        pear.easeQuadInOut = quadInOut, pear.easeCubic = cubicInOut, pear.easeCubicIn = cubicIn, 
        pear.easeCubicOut = cubicOut, pear.easeCubicInOut = cubicInOut, pear.easePoly = polyInOut, 
        pear.easePolyIn = polyIn, pear.easePolyOut = polyOut, pear.easePolyInOut = polyInOut, 
        pear.easeSin = sinInOut, pear.easeSinIn = sinIn, pear.easeSinOut = sinOut, 
        pear.easeSinInOut = sinInOut, pear.easeExp = expInOut, pear.easeExpIn = expIn, 
        pear.easeExpOut = expOut, pear.easeExpInOut = expInOut, pear.easeCircle = circleInOut, 
        pear.easeCircleIn = circleIn, pear.easeCircleOut = circleOut, pear.easeCircleInOut = circleInOut, 
        pear.easeBounce = bounceOut, pear.easeBounceIn = bounceIn, pear.easeBounceOut = bounceOut, 
        pear.easeBounceInOut = bounceInOut, pear.easeBack = backInOut, pear.easeBackIn = backIn, 
        pear.easeBackOut = backOut, pear.easeBackInOut = backInOut, pear.easeElastic = elasticOut, 
        pear.easeElasticIn = elasticIn, pear.easeElasticOut = elasticOut, pear.easeElasticInOut = elasticInOut, 
        pear.forceCenter = center$1, pear.forceCollide = collide, pear.forceLink = link, 
        pear.forceManyBody = manyBody, pear.forceSimulation = simulation, pear.forceX = x$2, 
        pear.forceY = y$2, pear.formatDefaultLocale = defaultLocale, pear.formatLocale = formatLocale, 
        pear.formatSpecifier = formatSpecifier, pear.precisionFixed = precisionFixed, 
        pear.precisionPrefix = precisionPrefix, pear.precisionRound = precisionRound, 
        pear.geoArea = area, pear.geoBounds = bounds, pear.geoCentroid = centroid, 
        pear.geoCircle = circle, pear.geoClipExtent = extent$1, pear.geoContains = contains, 
        pear.geoDistance = distance, pear.geoGraticule = graticule, pear.geoGraticule10 = graticule10, 
        pear.geoInterpolate = interpolate$1, pear.geoLength = length$1, pear.geoPath = index$1, 
        pear.geoAlbers = albers, pear.geoAlbersUsa = albersUsa, pear.geoAzimuthalEqualArea = azimuthalEqualArea, 
        pear.geoAzimuthalEqualAreaRaw = azimuthalEqualAreaRaw, pear.geoAzimuthalEquidistant = azimuthalEquidistant, 
        pear.geoAzimuthalEquidistantRaw = azimuthalEquidistantRaw, pear.geoConicConformal = conicConformal, 
        pear.geoConicConformalRaw = conicConformalRaw, pear.geoConicEqualArea = conicEqualArea, 
        pear.geoConicEqualAreaRaw = conicEqualAreaRaw, pear.geoConicEquidistant = conicEquidistant, 
        pear.geoConicEquidistantRaw = conicEquidistantRaw, pear.geoEquirectangular = equirectangular, 
        pear.geoEquirectangularRaw = equirectangularRaw, pear.geoGnomonic = gnomonic, 
        pear.geoGnomonicRaw = gnomonicRaw, pear.geoIdentity = identity$5, pear.geoProjection = projection, 
        pear.geoProjectionMutator = projectionMutator, pear.geoMercator = mercator, 
        pear.geoMercatorRaw = mercatorRaw, pear.geoOrthographic = orthographic, pear.geoOrthographicRaw = orthographicRaw, 
        pear.geoStereographic = stereographic, pear.geoStereographicRaw = stereographicRaw, 
        pear.geoTransverseMercator = transverseMercator, pear.geoTransverseMercatorRaw = transverseMercatorRaw, 
        pear.geoRotation = rotation, pear.geoStream = geoStream, pear.geoTransform = transform, 
        pear.cluster = cluster, pear.hierarchy = hierarchy, pear.pack = index$2, 
        pear.packSiblings = siblings, pear.packEnclose = enclose, pear.partition = partition, 
        pear.stratify = stratify, pear.tree = tree, pear.treemap = index$3, pear.treemapBinary = binary, 
        pear.treemapDice = treemapDice, pear.treemapSlice = treemapSlice, pear.treemapSliceDice = sliceDice, 
        pear.treemapSquarify = squarify, pear.treemapResquarify = resquarify, pear.interpolate = interpolateValue, 
        pear.interpolateArray = array$1, pear.interpolateBasis = basis$1, pear.interpolateBasisClosed = basisClosed, 
        pear.interpolateDate = date, pear.interpolateNumber = reinterpolate, pear.interpolateObject = object, 
        pear.interpolateRound = interpolateRound, pear.interpolateString = interpolateString, 
        pear.interpolateTransformCss = interpolateTransformCss, pear.interpolateTransformSvg = interpolateTransformSvg, 
        pear.interpolateZoom = interpolateZoom, pear.interpolateRgb = interpolateRgb, 
        pear.interpolateRgbBasis = rgbBasis, pear.interpolateRgbBasisClosed = rgbBasisClosed, 
        pear.interpolateHsl = hsl$2, pear.interpolateHslLong = hslLong, pear.interpolateLab = lab$1, 
        pear.interpolateHcl = hcl$2, pear.interpolateHclLong = hclLong, pear.interpolateCubehelix = cubehelix$2, 
        pear.interpolateCubehelixLong = cubehelixLong, pear.quantize = quantize, pear.path = path, 
        pear.polygonArea = area$1, pear.polygonCentroid = centroid$1;
        pear.polygonHull = hull, pear.polygonContains = contains$1, pear.polygonLength = length$2, 
        pear.quadtree = quadtree, pear.queue = queue, pear.randomUniform = uniform, 
        pear.randomNormal = normal, pear.randomLogNormal = logNormal, pear.randomBates = bates, 
        pear.randomIrwinHall = irwinHall, pear.randomExponential = exponential$1, 
        pear.request = request, pear.html = html, pear.json = json, pear.text = text, 
        pear.xml = xml, pear.csv = csv$1, pear.tsv = tsv$1, pear.scaleBand = band, 
        pear.scalePoint = point$1, pear.scaleIdentity = identity$6, pear.scaleLinear = linear$2, 
        pear.scaleLog = log$1, pear.scaleOrdinal = ordinal, pear.scaleImplicit = implicit, 
        pear.scalePow = pow$1, pear.scaleSqrt = sqrt$1, pear.scaleQuantile = quantile, 
        pear.scaleQuantize = quantize$1, pear.scaleThreshold = threshold$1, pear.scaleTime = time, 
        pear.scaleUtc = utcTime, pear.schemeCategory10 = category10, pear.schemeCategory20b = category20b, 
        pear.schemeCategory20c = category20c, pear.schemeCategory20 = category20, 
        pear.interpolateCubehelixDefault = cubehelix$3, pear.interpolateRainbow = rainbow$1, 
        pear.interpolateWarm = warm, pear.interpolateCool = cool, pear.interpolateViridis = viridis, 
        pear.interpolateMagma = magma, pear.interpolateInferno = inferno, pear.interpolatePlasma = plasma, 
        pear.scaleSequential = sequential, pear.creator = creator, pear.local = local$1, 
        pear.matcher = matcher$1, pear.mouse = mouse, pear.namespace = namespace, 
        pear.namespaces = namespaces, pear.select = select, pear.selectAll = selectAll, 
        pear.selection = selection, pear.selector = selector, pear.selectorAll = selectorAll, 
        pear.style = styleValue, pear.touch = touch, pear.touches = touches, pear.window = defaultView, 
        pear.customEvent = customEvent, pear.arc = arc, pear.area = area$2, pear.line = line, 
        pear.pie = pie, pear.areaRadial = areaRadial, pear.radialArea = areaRadial, 
        pear.lineRadial = lineRadial$1, pear.radialLine = lineRadial$1, pear.pointRadial = pointRadial, 
        pear.linkHorizontal = linkHorizontal, pear.linkVertical = linkVertical, pear.linkRadial = linkRadial, 
        pear.symbol = symbol, pear.symbols = symbols, pear.symbolCircle = circle$2, 
        pear.symbolCross = cross$2, pear.symbolDiamond = diamond, pear.symbolSquare = square, 
        pear.symbolStar = star, pear.symbolTriangle = triangle, pear.symbolWye = wye, 
        pear.curveBasisClosed = basisClosed$1, pear.curveBasisOpen = basisOpen, pear.curveBasis = basis$2, 
        pear.curveBundle = bundle, pear.curveCardinalClosed = cardinalClosed, pear.curveCardinalOpen = cardinalOpen, 
        pear.curveCardinal = cardinal, pear.curveCatmullRomClosed = catmullRomClosed, 
        pear.curveCatmullRomOpen = catmullRomOpen, pear.curveCatmullRom = catmullRom, 
        pear.curveLinearClosed = linearClosed, pear.curveLinear = curveLinear, pear.curveMonotoneX = monotoneX, 
        pear.curveMonotoneY = monotoneY, pear.curveNatural = natural, pear.curveStep = step, 
        pear.curveStepAfter = stepAfter, pear.curveStepBefore = stepBefore, pear.stack = stack, 
        pear.stackOffsetExpand = expand, pear.stackOffsetDiverging = diverging, pear.stackOffsetNone = none$1, 
        pear.stackOffsetSilhouette = silhouette, pear.stackOffsetWiggle = wiggle, 
        pear.stackOrderAscending = ascending$2, pear.stackOrderDescending = descending$2, 
        pear.stackOrderInsideOut = insideOut, pear.stackOrderNone = none$2, pear.stackOrderReverse = reverse, 
        pear.timeInterval = newInterval, pear.timeMillisecond = millisecond, pear.timeMilliseconds = milliseconds, 
        pear.utcMillisecond = millisecond, pear.utcMilliseconds = milliseconds, pear.timeSecond = second, 
        pear.timeSeconds = seconds, pear.utcSecond = second, pear.utcSeconds = seconds, 
        pear.timeMinute = minute, pear.timeMinutes = minutes, pear.timeHour = hour, 
        pear.timeHours = hours, pear.timeDay = day, pear.timeDays = days, pear.timeWeek = sunday, 
        pear.timeWeeks = sundays, pear.timeSunday = sunday, pear.timeSundays = sundays, 
        pear.timeMonday = monday, pear.timeMondays = mondays, pear.timeTuesday = tuesday, 
        pear.timeTuesdays = tuesdays, pear.timeWednesday = wednesday, pear.timeWednesdays = wednesdays, 
        pear.timeThursday = thursday, pear.timeThursdays = thursdays, pear.timeFriday = friday, 
        pear.timeFridays = fridays, pear.timeSaturday = saturday, pear.timeSaturdays = saturdays, 
        pear.timeMonth = month, pear.timeMonths = months, pear.timeYear = year, 
        pear.timeYears = years, pear.utcMinute = utcMinute, pear.utcMinutes = utcMinutes, 
        pear.utcHour = utcHour, pear.utcHours = utcHours, pear.utcDay = utcDay, 
        pear.utcDays = utcDays, pear.utcWeek = utcSunday, pear.utcWeeks = utcSundays, 
        pear.utcSunday = utcSunday, pear.utcSundays = utcSundays, pear.utcMonday = utcMonday, 
        pear.utcMondays = utcMondays, pear.utcTuesday = utcTuesday, pear.utcTuesdays = utcTuesdays, 
        pear.utcWednesday = utcWednesday, pear.utcWednesdays = utcWednesdays, pear.utcThursday = utcThursday, 
        pear.utcThursdays = utcThursdays, pear.utcFriday = utcFriday, pear.utcFridays = utcFridays, 
        pear.utcSaturday = utcSaturday, pear.utcSaturdays = utcSaturdays, pear.utcMonth = utcMonth, 
        pear.utcMonths = utcMonths, pear.utcYear = utcYear, pear.utcYears = utcYears, 
        pear.timeFormatDefaultLocale = defaultLocale$1, pear.timeFormatLocale = formatLocale$1, 
        pear.isoFormat = formatIso, pear.isoParse = parseIso, pear.now = now, pear.timer = timer, 
        pear.timerFlush = timerFlush, pear.timeout = timeout$1, pear.interval = interval$1, 
        pear.transition = transition, pear.active = active, pear.interrupt = interrupt, 
        pear.voronoi = voronoi, pear.zoom = zoom, pear.zoomTransform = transform$1, 
        pear.zoomIdentity = identity$8, Object.defineProperty(pear, "EP", {
            value: !0
        });
    });
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    var LIBRARY = __Activision_blizzard__(23), $export = __Activision_blizzard__(10), redefine = __Activision_blizzard__(36), hide = __Activision_blizzard__(5), has = __Activision_blizzard__(3), Iterators = __Activision_blizzard__(24), $iterCreate = __Activision_blizzard__(66), setToStringTag = __Activision_blizzard__(25), getPrototypeOf = __Activision_blizzard__(69), ITERATOR = __Activision_blizzard__(6)("iterator"), BUGGY = !([].keys && "next" in [].keys()), returnThis = function() {
        return this;
    };
    chunk.pear = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);
        var methods, key, IteratorPrototype, getMethod = function(kind) {
            if (!BUGGY && kind in proto) return proto[kind];
            switch (kind) {
              case "keys":
              case "values":
                return function() {
                    return new Constructor(this, kind);
                };
            }
            return function() {
                return new Constructor(this, kind);
            };
        }, TAG = NAME + " Iterator", DEF_VALUES = "values" == DEFAULT, VALUES_BUG = !1, proto = Base.prototype, $native = proto[ITERATOR] || proto["@@iterator"] || DEFAULT && proto[DEFAULT], $default = $native || getMethod(DEFAULT), $entries = DEFAULT ? DEF_VALUES ? getMethod("entries") : $default : void 0, $anyNative = "Array" == NAME ? proto.entries || $native : $native;
        if ($anyNative && (IteratorPrototype = getPrototypeOf($anyNative.call(new Base()))) !== Object.prototype && IteratorPrototype.next && (setToStringTag(IteratorPrototype, TAG, !0), 
        LIBRARY || has(IteratorPrototype, ITERATOR) || hide(IteratorPrototype, ITERATOR, returnThis)), 
        DEF_VALUES && $native && "values" !== $native.name && (VALUES_BUG = !0, $default = function() {
            return $native.call(this);
        }), LIBRARY && !FORCED || !BUGGY && !VALUES_BUG && proto[ITERATOR] || hide(proto, ITERATOR, $default), 
        Iterators[NAME] = $default, Iterators[TAG] = returnThis, DEFAULT) if (methods = {
            values: DEF_VALUES ? $default : getMethod("values"),
            keys: IS_SET ? $default : getMethod("keys"),
            entries: $entries
        }, FORCED) for (key in methods) key in proto || redefine(proto, key, methods[key]); else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        return methods;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    chunk.pear = __Activision_blizzard__(5);
}, function(chunk, pear, __Activision_blizzard__) {
    var anObject = __Activision_blizzard__(11), dPs = __Activision_blizzard__(67), enumBugKeys = __Activision_blizzard__(21), IE_PROTO = __Activision_blizzard__(19)("IE_PROTO"), Empty = function() {}, createDict = function() {
        var iframeDocument, iframe = __Activision_blizzard__(29)("iframe"), i = enumBugKeys.length;
        for (iframe.style.display = "none", __Activision_blizzard__(68).appendChild(iframe), 
        iframe.src = "javascript:", iframeDocument = iframe.contentWindow.document, iframeDocument.open(), 
        iframeDocument.write("<script>document.F=Object<\/script>"), iframeDocument.close(), 
        createDict = iframeDocument.F; i--; ) delete createDict.prototype[enumBugKeys[i]];
        return createDict();
    };
    chunk.pear = Object.create || function(O, Properties) {
        var result;
        return null !== O ? (Empty.prototype = anObject(O), result = new Empty(), Empty.prototype = null, 
        result[IE_PROTO] = O) : result = createDict(), void 0 === Properties ? result : dPs(result, Properties);
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var $keys = __Activision_blizzard__(30), hiddenKeys = __Activision_blizzard__(21).concat("length", "prototype");
    pear.f = Object.getOwnPropertyNames || function(O) {
        return $keys(O, hiddenKeys);
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    (chunk.pear = {}).forEach = function(collection, callback) {
        for (var i = 0; i < collection.length; i++) {
            var result = callback(collection[i]);
            if (result) return result;
        }
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    var detector = chunk.pear = {};
    detector.isIE = function(version) {
        return !!function() {
            var agent = navigator.userAgent.toLowerCase();
            return -1 !== agent.indexOf("msie") || -1 !== agent.indexOf("trident") || -1 !== agent.indexOf(" edge/");
        }() && (!version || version === function() {
            var v = 3, div = document.createElement("div"), all = div.getElementsByTagName("i");
            do {
                div.innerHTML = "\x3c!--[if gt IE " + ++v + "]><i></i><![endif]--\x3e";
            } while (all[0]);
            return v > 4 ? v : void 0;
        }());
    }, detector.isLegacyOpera = function() {
        return !!window.opera;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.EP ? obj : {
            default: obj
        };
    }
    Object.defineProperty(pear, "EP", {
        value: !0
    });
    var _extends2 = __Activision_blizzard__(42), _extends3 = _interopRequireDefault(_extends2), _classCallCheck2 = __Activision_blizzard__(52), _classCallCheck3 = _interopRequireDefault(_classCallCheck2), _createClass2 = __Activision_blizzard__(53), _createClass3 = _interopRequireDefault(_createClass2), _d = __Activision_blizzard__(34), d3 = function(obj) {
        if (obj && obj.EP) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj;
    }(_d), _lodash = __Activision_blizzard__(57), _elementResizeDetector = (_interopRequireDefault(_lodash), 
    __Activision_blizzard__(60), __Activision_blizzard__(86)), _elementResizeDetector2 = _interopRequireDefault(_elementResizeDetector), erd = (0, 
    _elementResizeDetector2.default)(), HKChart = function() {
        function HKChart(id, obj) {
            (0, _classCallCheck3.default)(this, HKChart), this.props = (0, _extends3.default)({
                bgColor: "#0c0e33",
                bgCircle: "#232c45",
                percent: 96,
                space: 30,
                txt: {
                    title: "PM2.5",
                    intro: "空气质量：中度污染",
                    topValue: "300",
                    botValue: "AQI:A60"
                }
            }, obj), this.el = document.querySelector(id), this.resize();
        }
        return (0, _createClass3.default)(HKChart, [ {
            key: "resize",
            value: function() {
                var _this = this;
                this.props.width && (this.el.style.width = this.props.width + "px"), this.props.height && (this.el.style.height = this.props.height + "px"), 
                erd.listenTo(this.el, function(element) {
                    _this.props.width = element.offsetWidth ? element.offsetWidth : _this.props.width, 
                    _this.props.height = element.offsetHeight ? element.offsetHeight : _this.props.height, 
                    _this.props.radius = Math.min(_this.props.width, _this.props.height);
                    try {
                        _this.el.removeChild(element.querySelector("svg"));
                    } catch (e) {}
                    _this.init();
                });
            }
        }, {
            key: "init",
            value: function() {
                var _props = this.props, width = _props.width, height = _props.height;
                this.svg = d3.select(this.el).append("svg").attr("width", width).attr("height", height), 
                this.bg(), this.ring();
            }
        }, {
            key: "bg",
            value: function() {
                var svg = this.svg, props = this.props, width = props.width, height = props.height, bgColor = props.bgColor, bgCircle = props.bgCircle, bg = svg.append("g");
                bg.append("rect").attr("width", width).attr("height", height).style("fill", bgColor), 
                bg.append("circle").attr("cx", width / 2).attr("cy", height / 2).attr("r", this.props.radius / 2 * .7).style("fill", bgCircle);
            }
        }, {
            key: "ring",
            value: function() {
                var _props2 = this.props, width = _props2.width, height = _props2.height, radius = _props2.radius, percent = _props2.percent, space = _props2.space, txt = _props2.txt, svg = this.svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"), defs = svg.append("defs"), pieData = d3.pie()([ percent / 100 ]), outerRadius = radius / 2 * .66, innerRadius = radius / 2 * .66 - space, arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(Math.PI).endAngle(function(d) {
                    return Math.PI + 2 * d.value * Math.PI;
                }), field = svg.selectAll("g").data(pieData).enter().append("g"), aw = function() {
                    var triangle = d3.symbol().type(d3.symbolTriangle), arrow = svg.append("g");
                    return arrow.append("path").attr("d", triangle.size(138)).attr("fill", "#fff").attr("transform", "translate(0," + (innerRadius - 5) + ")"), 
                    arrow.append("rect").attr("width", 16).attr("height", space).attr("fill", "#fff").attr("transform", "translate(-8," + innerRadius + ")"), 
                    arrow;
                }();
                field.append("path").transition().attrTween("d", function(d) {
                    var i = d3.interpolateNumber(0, d.value);
                    return function(t) {
                        return d.value = i(t), aw.attr("transform", "rotate(" + 360 * d.value + ")"), svg.select("#ringValue").text(parseInt(txt.topValue / percent * d.value * 100)), 
                        arc(d);
                    };
                }).duration(2e3).style("fill", "url(#" + function() {
                    var linearGradient = defs.append("linearGradient").attr("id", "linearColor").attr("x1", "0%").attr("y1", "0%").attr("x2", "0%").attr("y2", "100%");
                    return linearGradient.append("stop").attr("offset", "0%").style("stop-color", "#ff0000"), 
                    linearGradient.append("stop").attr("offset", "20%").style("stop-color", "#ffff00"), 
                    linearGradient.append("stop").attr("offset", "40%").style("stop-color", "#00ff00"), 
                    linearGradient.append("stop").attr("offset", "60%").style("stop-color", "#00ffff"), 
                    linearGradient.append("stop").attr("offset", "80%").style("stop-color", "#0000ff"), 
                    linearGradient.append("stop").attr("offset", "100%").style("stop-color", "#800080"), 
                    linearGradient;
                }().attr("id") + ")").attr("filter", "url(#" + function() {
                    var filter = defs.append("filter").attr("id", "drop-shadow");
                    return filter.html('\n          \x3c!-- COLORS --\x3e\n          <feFlood flood-color="#551C0B" result="COLOR-outline" />\n          <feFlood flood-color="#551C0B" flood-opacity="0" result="TRANSPARENT" />\n          \x3c!-- COLORS END--\x3e\n\n          \x3c!-- OUTLINE --\x3e\n          <feMorphology operator="dilate" radius="5" in="SourceAlpha" result="OUTLINE_10" />\n          <feComposite operator="in" in="COLOR-outline" in2="OUTLINE_10" result="OUTLINE_20" />\n          \x3c!-- OUTLINE END--\x3e\n\n          \x3c!-- LIGHTING EFFECTS --\x3e\n          <feGaussianBlur stdDeviation="4" in="SourceAlpha" result="LIGHTING-EFFECTS_10" />\n          <feSpecularLighting surfaceScale="7" specularConstant="0.8" specularExponent="7" lighting-color="#white" in="LIGHTING-EFFECTS_10" result="LIGHTING-EFFECTS_20">\n            <fePointLight x="-100" y="-150" z="200" />\n          </feSpecularLighting>\n          <feComposite operator="in" in="LIGHTING-EFFECTS_20" in2="SourceAlpha" result="LIGHTING-EFFECTS_30" />\n          <feComposite operator="arithmetic" k1="0" k2="1" k3="1" k4="0" in="SourceGraphic" in2="LIGHTING-EFFECTS_30" result="LIGHTING-EFFECTS_40" />\n          \x3c!-- LIGHTING EFFECTS END--\x3e\n\n          \x3c!-- COLOR EFFECTS --\x3e\n          <feComponentTransfer in="LIGHTING-EFFECTS_40" result="COLOR-EFFECTS_10">\n            <feFuncR type="identity"></feFuncR>\n            <feFuncG type="identity"></feFuncG>\n            <feFuncB type="identity"></feFuncB>\n            <feFuncA type="identity"></feFuncA>\n          </feComponentTransfer>\n          \x3c!-- COLOR EFFECTS END--\x3e\n\n          <femerge>\n            \x3c!--<feMergeNode in="OUTLINE_20" />--\x3e\n            <feMergeNode in="COLOR-EFFECTS_10" />\n            \x3c!--<feMergeNode in="TRANSPARENT" />--\x3e\n          </femerge>\n      '), 
                    filter;
                }().attr("id") + ")"), function() {
                    var fontSize = 14 + radius / 100, fontSizeBig = 14 + radius / 10, text = svg.append("g");
                    text.style("font-size", fontSize), text.append("text").attr("transform", "translate(" + (-width / 2 + fontSize) + "," + (-height / 2 + 1.5 * fontSize) + ")").text(txt.title).style("fill", "#fff"), 
                    text.append("text").attr("transform", "translate(0," + (height / 2 - fontSize) + ")").attr("text-anchor", "middle").text(txt.intro).style("fill", "#fff"), 
                    text.append("text").attr("id", "ringValue").attr("text-anchor", "middle").style("fill", "#fff").style("font-size", fontSizeBig), 
                    text.append("text").attr("transform", "translate(0," + 2 * fontSize + ")").attr("text-anchor", "middle").text(txt.botValue).style("fill", "#fff");
                }();
            }
        }, {
            key: "draw",
            value: function() {
                var _props3 = this.props, width = _props3.width, height = _props3.height, svg = this.svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"), dataset = [ .7 ], pie = d3.pie(), piedata = pie(dataset), arc = d3.arc().innerRadius(100).outerRadius(150).startAngle(Math.PI).endAngle(function(d) {
                    return Math.PI + 2 * d.value * Math.PI;
                }), field = svg.selectAll("g").data(piedata).enter().append("g");
                field.append("path"), field.append("text"), field.select("path").transition().attrTween("d", function(d) {
                    var i = d3.interpolateNumber(0, d.value);
                    return function(t) {
                        return d.value = i(t), arc(d);
                    };
                }).duration(2e3).style("fill", "url(#" + gradient().attr("id") + ")");
            }
        } ]), HKChart;
    }();
    window.HKChart = HKChart, pear.default = HKChart;
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    pear.EP = !0;
    var _assign = __Activision_blizzard__(43), _assign2 = function(obj) {
        return obj && obj.EP ? obj : {
            default: obj
        };
    }(_assign);
    pear.default = _assign2.default || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    chunk.pear = {
        default: __Activision_blizzard__(44),
        EP: !0
    };
}, function(chunk, pear, __Activision_blizzard__) {
    __Activision_blizzard__(45), chunk.pear = __Activision_blizzard__(7).Object.assign;
}, function(chunk, pear, __Activision_blizzard__) {
    var $export = __Activision_blizzard__(10);
    $export($export.S + $export.F, "Object", {
        assign: __Activision_blizzard__(48)
    });
}, function(chunk, pear, __Activision_blizzard__) {
    var aFunction = __Activision_blizzard__(47);
    chunk.pear = function(fn, that, length) {
        if (aFunction(fn), void 0 === that) return fn;
        switch (length) {
          case 1:
            return function(a) {
                return fn.call(that, a);
            };

          case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };

          case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
        }
        return function() {
            return fn.apply(that, arguments);
        };
    };
}, function(chunk, pear) {
    chunk.pear = function(it) {
        if ("function" != typeof it) throw TypeError(it + " is not a function!");
        return it;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    var getKeys = __Activision_blizzard__(9), gOPS = __Activision_blizzard__(22), pIE = __Activision_blizzard__(15), toObject = __Activision_blizzard__(33), IObject = __Activision_blizzard__(31), $assign = Object.assign;
    chunk.pear = !$assign || __Activision_blizzard__(8)(function() {
        var A = {}, B = {}, S = Symbol(), K = "abcdefghijklmnopqrst";
        return A[S] = 7, K.split("").forEach(function(k) {
            B[k] = k;
        }), 7 != $assign({}, A)[S] || Object.keys($assign({}, B)).join("") != K;
    }) ? function(target, source) {
        for (var T = toObject(target), aLen = arguments.length, index = 1, getSymbols = gOPS.f, isEnum = pIE.f; aLen > index; ) for (var key, S = IObject(arguments[index++]), keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S), length = keys.length, j = 0; length > j; ) isEnum.call(S, key = keys[j++]) && (T[key] = S[key]);
        return T;
    } : $assign;
}, function(chunk, pear, __Activision_blizzard__) {
    var toIObject = __Activision_blizzard__(4), toLength = __Activision_blizzard__(50), toAbsoluteIndex = __Activision_blizzard__(51);
    chunk.pear = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
            var value, O = toIObject($this), length = toLength(O.length), index = toAbsoluteIndex(fromIndex, length);
            if (IS_INCLUDES && el != el) {
                for (;length > index; ) if ((value = O[index++]) != value) return !0;
            } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            return !IS_INCLUDES && -1;
        };
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var toInteger = __Activision_blizzard__(18), min = Math.min;
    chunk.pear = function(it) {
        return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var toInteger = __Activision_blizzard__(18), max = Math.max, min = Math.min;
    chunk.pear = function(index, length) {
        return index = toInteger(index), index < 0 ? max(index + length, 0) : min(index, length);
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    pear.EP = !0, pear.default = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    pear.EP = !0;
    var _defineProperty = __Activision_blizzard__(54), _defineProperty2 = function(obj) {
        return obj && obj.EP ? obj : {
            default: obj
        };
    }(_defineProperty);
    pear.default = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), (0, _defineProperty2.default)(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }();
}, function(chunk, pear, __Activision_blizzard__) {
    chunk.pear = {
        default: __Activision_blizzard__(55),
        EP: !0
    };
}, function(chunk, pear, __Activision_blizzard__) {
    __Activision_blizzard__(56);
    var $Object = __Activision_blizzard__(7).Object;
    chunk.pear = function(it, key, desc) {
        return $Object.defineProperty(it, key, desc);
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var $export = __Activision_blizzard__(10);
    $export($export.S + $export.F * !__Activision_blizzard__(2), "Object", {
        defineProperty: __Activision_blizzard__(1).f
    });
}, function(chunk, pear, __Activision_blizzard__) {
    (function(global, chunk) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        (function() {
            function addMapEntry(map, pair) {
                return map.set(pair[0], pair[1]), map;
            }
            function addSetEntry(set, value) {
                return set.add(value), set;
            }
            function apply(func, thisArg, args) {
                switch (args.length) {
                  case 0:
                    return func.call(thisArg);

                  case 1:
                    return func.call(thisArg, args[0]);

                  case 2:
                    return func.call(thisArg, args[0], args[1]);

                  case 3:
                    return func.call(thisArg, args[0], args[1], args[2]);
                }
                return func.apply(thisArg, args);
            }
            function arrayAggregator(array, setter, iteratee, accumulator) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) {
                    var value = array[index];
                    setter(accumulator, value, iteratee(value), array);
                }
                return accumulator;
            }
            function arrayEach(array, iteratee) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length && !1 !== iteratee(array[index], index, array); ) ;
                return array;
            }
            function arrayEachRight(array, iteratee) {
                for (var length = null == array ? 0 : array.length; length-- && !1 !== iteratee(array[length], length, array); ) ;
                return array;
            }
            function arrayEvery(array, predicate) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (!predicate(array[index], index, array)) return !1;
                return !0;
            }
            function arrayFilter(array, predicate) {
                for (var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
                    var value = array[index];
                    predicate(value, index, array) && (result[resIndex++] = value);
                }
                return result;
            }
            function arrayIncludes(array, value) {
                return !!(null == array ? 0 : array.length) && baseIndexOf(array, value, 0) > -1;
            }
            function arrayIncludesWith(array, value, comparator) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (comparator(value, array[index])) return !0;
                return !1;
            }
            function arrayMap(array, iteratee) {
                for (var index = -1, length = null == array ? 0 : array.length, result = Array(length); ++index < length; ) result[index] = iteratee(array[index], index, array);
                return result;
            }
            function arrayPush(array, values) {
                for (var index = -1, length = values.length, offset = array.length; ++index < length; ) array[offset + index] = values[index];
                return array;
            }
            function arrayReduce(array, iteratee, accumulator, initAccum) {
                var index = -1, length = null == array ? 0 : array.length;
                for (initAccum && length && (accumulator = array[++index]); ++index < length; ) accumulator = iteratee(accumulator, array[index], index, array);
                return accumulator;
            }
            function arrayReduceRight(array, iteratee, accumulator, initAccum) {
                var length = null == array ? 0 : array.length;
                for (initAccum && length && (accumulator = array[--length]); length--; ) accumulator = iteratee(accumulator, array[length], length, array);
                return accumulator;
            }
            function arraySome(array, predicate) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (predicate(array[index], index, array)) return !0;
                return !1;
            }
            function asciiToArray(string) {
                return string.split("");
            }
            function asciiWords(string) {
                return string.match(reAsciiWord) || [];
            }
            function baseFindKey(collection, predicate, eachFunc) {
                var result;
                return eachFunc(collection, function(value, key, collection) {
                    if (predicate(value, key, collection)) return result = key, !1;
                }), result;
            }
            function baseFindIndex(array, predicate, fromIndex, fromRight) {
                for (var length = array.length, index = fromIndex + (fromRight ? 1 : -1); fromRight ? index-- : ++index < length; ) if (predicate(array[index], index, array)) return index;
                return -1;
            }
            function baseIndexOf(array, value, fromIndex) {
                return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
            }
            function baseIndexOfWith(array, value, fromIndex, comparator) {
                for (var index = fromIndex - 1, length = array.length; ++index < length; ) if (comparator(array[index], value)) return index;
                return -1;
            }
            function baseIsNaN(value) {
                return value !== value;
            }
            function baseMean(array, iteratee) {
                var length = null == array ? 0 : array.length;
                return length ? baseSum(array, iteratee) / length : NAN;
            }
            function baseProperty(key) {
                return function(object) {
                    return null == object ? undefined : object[key];
                };
            }
            function basePropertyOf(object) {
                return function(key) {
                    return null == object ? undefined : object[key];
                };
            }
            function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
                return eachFunc(collection, function(value, index, collection) {
                    accumulator = initAccum ? (initAccum = !1, value) : iteratee(accumulator, value, index, collection);
                }), accumulator;
            }
            function baseSortBy(array, comparer) {
                var length = array.length;
                for (array.sort(comparer); length--; ) array[length] = array[length].value;
                return array;
            }
            function baseSum(array, iteratee) {
                for (var result, index = -1, length = array.length; ++index < length; ) {
                    var current = iteratee(array[index]);
                    current !== undefined && (result = result === undefined ? current : result + current);
                }
                return result;
            }
            function baseTimes(n, iteratee) {
                for (var index = -1, result = Array(n); ++index < n; ) result[index] = iteratee(index);
                return result;
            }
            function baseToPairs(object, props) {
                return arrayMap(props, function(key) {
                    return [ key, object[key] ];
                });
            }
            function baseUnary(func) {
                return function(value) {
                    return func(value);
                };
            }
            function baseValues(object, props) {
                return arrayMap(props, function(key) {
                    return object[key];
                });
            }
            function cacheHas(cache, key) {
                return cache.has(key);
            }
            function charsStartIndex(strSymbols, chrSymbols) {
                for (var index = -1, length = strSymbols.length; ++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1; ) ;
                return index;
            }
            function charsEndIndex(strSymbols, chrSymbols) {
                for (var index = strSymbols.length; index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1; ) ;
                return index;
            }
            function countHolders(array, placeholder) {
                for (var length = array.length, result = 0; length--; ) array[length] === placeholder && ++result;
                return result;
            }
            function escapeStringChar(chr) {
                return "\\" + stringEscapes[chr];
            }
            function getValue(object, key) {
                return null == object ? undefined : object[key];
            }
            function hasUnicode(string) {
                return reHasUnicode.test(string);
            }
            function hasUnicodeWord(string) {
                return reHasUnicodeWord.test(string);
            }
            function iteratorToArray(iterator) {
                for (var data, result = []; !(data = iterator.next()).done; ) result.push(data.value);
                return result;
            }
            function mapToArray(map) {
                var index = -1, result = Array(map.size);
                return map.forEach(function(value, key) {
                    result[++index] = [ key, value ];
                }), result;
            }
            function overArg(func, transform) {
                return function(arg) {
                    return func(transform(arg));
                };
            }
            function replaceHolders(array, placeholder) {
                for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length; ) {
                    var value = array[index];
                    value !== placeholder && value !== PLACEHOLDER || (array[index] = PLACEHOLDER, result[resIndex++] = index);
                }
                return result;
            }
            function setToArray(set) {
                var index = -1, result = Array(set.size);
                return set.forEach(function(value) {
                    result[++index] = value;
                }), result;
            }
            function setToPairs(set) {
                var index = -1, result = Array(set.size);
                return set.forEach(function(value) {
                    result[++index] = [ value, value ];
                }), result;
            }
            function strictIndexOf(array, value, fromIndex) {
                for (var index = fromIndex - 1, length = array.length; ++index < length; ) if (array[index] === value) return index;
                return -1;
            }
            function strictLastIndexOf(array, value, fromIndex) {
                for (var index = fromIndex + 1; index--; ) if (array[index] === value) return index;
                return index;
            }
            function stringSize(string) {
                return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
            }
            function stringToArray(string) {
                return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
            }
            function unicodeSize(string) {
                for (var result = reUnicode.lastIndex = 0; reUnicode.test(string); ) ++result;
                return result;
            }
            function unicodeToArray(string) {
                return string.match(reUnicode) || [];
            }
            function unicodeWords(string) {
                return string.match(reUnicodeWord) || [];
            }
            var undefined, LARGE_ARRAY_SIZE = 200, CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", HASH_UNDEFINED = "__lodash_hash_undefined__", MAX_MEMOIZE_SIZE = 500, PLACEHOLDER = "__lodash_placeholder__", CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4, COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2, WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512, DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...", HOT_COUNT = 800, HOT_SPAN = 16, LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e308, NAN = NaN, MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1, wrapFlags = [ [ "ary", WRAP_ARY_FLAG ], [ "bind", WRAP_BIND_FLAG ], [ "bindKey", WRAP_BIND_KEY_FLAG ], [ "curry", WRAP_CURRY_FLAG ], [ "curryRight", WRAP_CURRY_RIGHT_FLAG ], [ "flip", WRAP_FLIP_FLAG ], [ "partial", WRAP_PARTIAL_FLAG ], [ "partialRight", WRAP_PARTIAL_RIGHT_FLAG ], [ "rearg", WRAP_REARG_FLAG ] ], argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g, reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source), reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g, reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source), reTrim = /^\s+|\s+$/g, reTrimStart = /^\s+/, reTrimEnd = /\s+$/, reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /, reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, reEscapeChar = /\\(\\)?/g, reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, reFlags = /\w*$/, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsHostCtor = /^\[object .+?Constructor\]$/, reIsOctal = /^0o[0-7]+$/i, reIsUint = /^(?:0|[1-9]\d*)$/, reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, reNoMatch = /($^)/, reUnescapedString = /['\n\r\u2028\u2029\\]/g, rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", rsBreakRange = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsLower = "[a-z\\xdf-\\xf6\\xf8-\\xff]", rsMisc = "[^\\ud800-\\udfff" + rsBreakRange + "\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[A-Z\\xc0-\\xd6\\xd8-\\xde]", rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", reOptMod = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?", rsOptJoin = "(?:\\u200d(?:" + [ "[^\\ud800-\\udfff]", rsRegional, rsSurrPair ].join("|") + ")[\\ufe0e\\ufe0f]?" + reOptMod + ")*", rsSeq = "[\\ufe0e\\ufe0f]?" + reOptMod + rsOptJoin, rsEmoji = "(?:" + [ "[\\u2700-\\u27bf]", rsRegional, rsSurrPair ].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [ "[^\\ud800-\\udfff]" + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, "[\\ud800-\\udfff]" ].join("|") + ")", reApos = RegExp("['’]", "g"), reComboMark = RegExp(rsCombo, "g"), reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g"), reUnicodeWord = RegExp([ rsUpper + "?" + rsLower + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [ rsBreak, rsUpper, "$" ].join("|") + ")", "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [ rsBreak, rsUpper + rsMiscLower, "$" ].join("|") + ")", rsUpper + "?" + rsMiscLower + "+(?:['’](?:d|ll|m|re|s|t|ve))?", rsUpper + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", "\\d+", rsEmoji ].join("|"), "g"), reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff" + rsComboRange + "\\ufe0e\\ufe0f]"), reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, contextProps = [ "Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout" ], templateCounter = -1, typedArrayTags = {};
            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, 
            typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
            var cloneableTags = {};
            cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0, 
            cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;
            var deburredLetters = {
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }, htmlEscapes = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }, htmlUnescapes = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            }, stringEscapes = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, freeParseFloat = parseFloat, freeParseInt = parseInt, freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), freeExports = "object" == typeof pear && pear && !pear.nodeType && pear, freeModule = freeExports && "object" == typeof chunk && chunk && !chunk.nodeType && chunk, chunkExports = freeModule && freeModule.pear === freeExports, freeProcess = chunkExports && freeGlobal.process, nodeUtil = function() {
                try {
                    return freeProcess && freeProcess.binding && freeProcess.binding("util");
                } catch (e) {}
            }(), nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray, asciiSize = baseProperty("length"), deburrLetter = basePropertyOf(deburredLetters), escapeHtmlChar = basePropertyOf(htmlEscapes), unescapeHtmlChar = basePropertyOf(htmlUnescapes), _ = function runInContext(context) {
                function lodash(value) {
                    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                        if (value instanceof LodashWrapper) return value;
                        if (hasOwnProperty.call(value, "__wrapped__")) return wrapperClone(value);
                    }
                    return new LodashWrapper(value);
                }
                function baseLodash() {}
                function LodashWrapper(value, chainAll) {
                    this.__wrapped__ = value, this.__actions__ = [], this.__chain__ = !!chainAll, this.__index__ = 0, 
                    this.__values__ = undefined;
                }
                function LazyWrapper(value) {
                    this.__wrapped__ = value, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, 
                    this.__iteratees__ = [], this.__takeCount__ = MAX_ARRAY_LENGTH, this.__views__ = [];
                }
                function lazyClone() {
                    var result = new LazyWrapper(this.__wrapped__);
                    return result.__actions__ = copyArray(this.__actions__), result.__dir__ = this.__dir__, 
                    result.__filtered__ = this.__filtered__, result.__iteratees__ = copyArray(this.__iteratees__), 
                    result.__takeCount__ = this.__takeCount__, result.__views__ = copyArray(this.__views__), 
                    result;
                }
                function lazyReverse() {
                    if (this.__filtered__) {
                        var result = new LazyWrapper(this);
                        result.__dir__ = -1, result.__filtered__ = !0;
                    } else result = this.clone(), result.__dir__ *= -1;
                    return result;
                }
                function lazyValue() {
                    var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
                    if (!isArr || !isRight && arrLength == length && takeCount == length) return baseWrapperValue(array, this.__actions__);
                    var result = [];
                    outer: for (;length-- && resIndex < takeCount; ) {
                        index += dir;
                        for (var iterIndex = -1, value = array[index]; ++iterIndex < iterLength; ) {
                            var data = iteratees[iterIndex], iteratee = data.iteratee, type = data.type, computed = iteratee(value);
                            if (type == LAZY_MAP_FLAG) value = computed; else if (!computed) {
                                if (type == LAZY_FILTER_FLAG) continue outer;
                                break outer;
                            }
                        }
                        result[resIndex++] = value;
                    }
                    return result;
                }
                function Hash(entries) {
                    var index = -1, length = null == entries ? 0 : entries.length;
                    for (this.clear(); ++index < length; ) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }
                function hashClear() {
                    this.__data__ = nativeCreate ? nativeCreate(null) : {}, this.size = 0;
                }
                function hashDelete(key) {
                    var result = this.has(key) && delete this.__data__[key];
                    return this.size -= result ? 1 : 0, result;
                }
                function hashGet(key) {
                    var data = this.__data__;
                    if (nativeCreate) {
                        var result = data[key];
                        return result === HASH_UNDEFINED ? undefined : result;
                    }
                    return hasOwnProperty.call(data, key) ? data[key] : undefined;
                }
                function hashHas(key) {
                    var data = this.__data__;
                    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
                }
                function hashSet(key, value) {
                    var data = this.__data__;
                    return this.size += this.has(key) ? 0 : 1, data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value, 
                    this;
                }
                function ListCache(entries) {
                    var index = -1, length = null == entries ? 0 : entries.length;
                    for (this.clear(); ++index < length; ) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }
                function listCacheClear() {
                    this.__data__ = [], this.size = 0;
                }
                function listCacheDelete(key) {
                    var data = this.__data__, index = assocIndexOf(data, key);
                    return !(index < 0) && (index == data.length - 1 ? data.pop() : splice.call(data, index, 1), 
                    --this.size, !0);
                }
                function listCacheGet(key) {
                    var data = this.__data__, index = assocIndexOf(data, key);
                    return index < 0 ? undefined : data[index][1];
                }
                function listCacheHas(key) {
                    return assocIndexOf(this.__data__, key) > -1;
                }
                function listCacheSet(key, value) {
                    var data = this.__data__, index = assocIndexOf(data, key);
                    return index < 0 ? (++this.size, data.push([ key, value ])) : data[index][1] = value, 
                    this;
                }
                function MapCache(entries) {
                    var index = -1, length = null == entries ? 0 : entries.length;
                    for (this.clear(); ++index < length; ) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }
                function mapCacheClear() {
                    this.size = 0, this.__data__ = {
                        hash: new Hash(),
                        map: new (Map || ListCache)(),
                        string: new Hash()
                    };
                }
                function mapCacheDelete(key) {
                    var result = getMapData(this, key).delete(key);
                    return this.size -= result ? 1 : 0, result;
                }
                function mapCacheGet(key) {
                    return getMapData(this, key).get(key);
                }
                function mapCacheHas(key) {
                    return getMapData(this, key).has(key);
                }
                function mapCacheSet(key, value) {
                    var data = getMapData(this, key), size = data.size;
                    return data.set(key, value), this.size += data.size == size ? 0 : 1, this;
                }
                function SetCache(values) {
                    var index = -1, length = null == values ? 0 : values.length;
                    for (this.__data__ = new MapCache(); ++index < length; ) this.add(values[index]);
                }
                function setCacheAdd(value) {
                    return this.__data__.set(value, HASH_UNDEFINED), this;
                }
                function setCacheHas(value) {
                    return this.__data__.has(value);
                }
                function Stack(entries) {
                    var data = this.__data__ = new ListCache(entries);
                    this.size = data.size;
                }
                function stackClear() {
                    this.__data__ = new ListCache(), this.size = 0;
                }
                function stackDelete(key) {
                    var data = this.__data__, result = data.delete(key);
                    return this.size = data.size, result;
                }
                function stackGet(key) {
                    return this.__data__.get(key);
                }
                function stackHas(key) {
                    return this.__data__.has(key);
                }
                function stackSet(key, value) {
                    var data = this.__data__;
                    if (data instanceof ListCache) {
                        var pairs = data.__data__;
                        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) return pairs.push([ key, value ]), 
                        this.size = ++data.size, this;
                        data = this.__data__ = new MapCache(pairs);
                    }
                    return data.set(key, value), this.size = data.size, this;
                }
                function arrayLikeKeys(value, inherited) {
                    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
                    for (var key in value) !inherited && !hasOwnProperty.call(value, key) || skipIndexes && ("length" == key || isBuff && ("offset" == key || "parent" == key) || isType && ("buffer" == key || "byteLength" == key || "byteOffset" == key) || isIndex(key, length)) || result.push(key);
                    return result;
                }
                function arraySample(array) {
                    var length = array.length;
                    return length ? array[baseRandom(0, length - 1)] : undefined;
                }
                function arraySampleSize(array, n) {
                    return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
                }
                function arrayShuffle(array) {
                    return shuffleSelf(copyArray(array));
                }
                function assignMergeValue(object, key, value) {
                    (value === undefined || eq(object[key], value)) && (value !== undefined || key in object) || baseAssignValue(object, key, value);
                }
                function assignValue(object, key, value) {
                    var objValue = object[key];
                    hasOwnProperty.call(object, key) && eq(objValue, value) && (value !== undefined || key in object) || baseAssignValue(object, key, value);
                }
                function assocIndexOf(array, key) {
                    for (var length = array.length; length--; ) if (eq(array[length][0], key)) return length;
                    return -1;
                }
                function baseAggregator(collection, setter, iteratee, accumulator) {
                    return baseEach(collection, function(value, key, collection) {
                        setter(accumulator, value, iteratee(value), collection);
                    }), accumulator;
                }
                function baseAssign(object, source) {
                    return object && copyObject(source, keys(source), object);
                }
                function baseAssignIn(object, source) {
                    return object && copyObject(source, keysIn(source), object);
                }
                function baseAssignValue(object, key, value) {
                    "__proto__" == key && defineProperty ? defineProperty(object, key, {
                        configurable: !0,
                        enumerable: !0,
                        value: value,
                        writable: !0
                    }) : object[key] = value;
                }
                function baseAt(object, paths) {
                    for (var index = -1, length = paths.length, result = Array(length), skip = null == object; ++index < length; ) result[index] = skip ? undefined : get(object, paths[index]);
                    return result;
                }
                function baseClamp(number, lower, upper) {
                    return number === number && (upper !== undefined && (number = number <= upper ? number : upper), 
                    lower !== undefined && (number = number >= lower ? number : lower)), number;
                }
                function baseClone(value, bitmask, customizer, key, object, stack) {
                    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
                    if (customizer && (result = object ? customizer(value, key, object, stack) : customizer(value)), 
                    result !== undefined) return result;
                    if (!isObject(value)) return value;
                    var isArr = isArray(value);
                    if (isArr) {
                        if (result = initCloneArray(value), !isDeep) return copyArray(value, result);
                    } else {
                        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
                        if (isBuffer(value)) return cloneBuffer(value, isDeep);
                        if (tag == objectTag || tag == argsTag || isFunc && !object) {
                            if (result = isFlat || isFunc ? {} : initCloneObject(value), !isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
                        } else {
                            if (!cloneableTags[tag]) return object ? value : {};
                            result = initCloneByTag(value, tag, baseClone, isDeep);
                        }
                    }
                    stack || (stack = new Stack());
                    var stacked = stack.get(value);
                    if (stacked) return stacked;
                    stack.set(value, result);
                    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys, props = isArr ? undefined : keysFunc(value);
                    return arrayEach(props || value, function(subValue, key) {
                        props && (key = subValue, subValue = value[key]), assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
                    }), result;
                }
                function baseConforms(source) {
                    var props = keys(source);
                    return function(object) {
                        return baseConformsTo(object, source, props);
                    };
                }
                function baseConformsTo(object, source, props) {
                    var length = props.length;
                    if (null == object) return !length;
                    for (object = Object(object); length--; ) {
                        var key = props[length], predicate = source[key], value = object[key];
                        if (value === undefined && !(key in object) || !predicate(value)) return !1;
                    }
                    return !0;
                }
                function baseDelay(func, wait, args) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return setTimeout(function() {
                        func.apply(undefined, args);
                    }, wait);
                }
                function baseDifference(array, values, iteratee, comparator) {
                    var index = -1, includes = arrayIncludes, isCommon = !0, length = array.length, result = [], valuesLength = values.length;
                    if (!length) return result;
                    iteratee && (values = arrayMap(values, baseUnary(iteratee))), comparator ? (includes = arrayIncludesWith, 
                    isCommon = !1) : values.length >= LARGE_ARRAY_SIZE && (includes = cacheHas, isCommon = !1, 
                    values = new SetCache(values));
                    outer: for (;++index < length; ) {
                        var value = array[index], computed = null == iteratee ? value : iteratee(value);
                        if (value = comparator || 0 !== value ? value : 0, isCommon && computed === computed) {
                            for (var valuesIndex = valuesLength; valuesIndex--; ) if (values[valuesIndex] === computed) continue outer;
                            result.push(value);
                        } else includes(values, computed, comparator) || result.push(value);
                    }
                    return result;
                }
                function baseEvery(collection, predicate) {
                    var result = !0;
                    return baseEach(collection, function(value, index, collection) {
                        return result = !!predicate(value, index, collection);
                    }), result;
                }
                function baseExtremum(array, iteratee, comparator) {
                    for (var index = -1, length = array.length; ++index < length; ) {
                        var value = array[index], current = iteratee(value);
                        if (null != current && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) var computed = current, result = value;
                    }
                    return result;
                }
                function baseFill(array, value, start, end) {
                    var length = array.length;
                    for (start = toInteger(start), start < 0 && (start = -start > length ? 0 : length + start), 
                    end = end === undefined || end > length ? length : toInteger(end), end < 0 && (end += length), 
                    end = start > end ? 0 : toLength(end); start < end; ) array[start++] = value;
                    return array;
                }
                function baseFilter(collection, predicate) {
                    var result = [];
                    return baseEach(collection, function(value, index, collection) {
                        predicate(value, index, collection) && result.push(value);
                    }), result;
                }
                function baseFlatten(array, depth, predicate, isStrict, result) {
                    var index = -1, length = array.length;
                    for (predicate || (predicate = isFlattenable), result || (result = []); ++index < length; ) {
                        var value = array[index];
                        depth > 0 && predicate(value) ? depth > 1 ? baseFlatten(value, depth - 1, predicate, isStrict, result) : arrayPush(result, value) : isStrict || (result[result.length] = value);
                    }
                    return result;
                }
                function baseForOwn(object, iteratee) {
                    return object && baseFor(object, iteratee, keys);
                }
                function baseForOwnRight(object, iteratee) {
                    return object && baseForRight(object, iteratee, keys);
                }
                function baseFunctions(object, props) {
                    return arrayFilter(props, function(key) {
                        return isFunction(object[key]);
                    });
                }
                function baseGet(object, path) {
                    path = castPath(path, object);
                    for (var index = 0, length = path.length; null != object && index < length; ) object = object[toKey(path[index++])];
                    return index && index == length ? object : undefined;
                }
                function baseGetAllKeys(object, keysFunc, symbolsFunc) {
                    var result = keysFunc(object);
                    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
                }
                function baseGetTag(value) {
                    return null == value ? value === undefined ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
                }
                function baseGt(value, other) {
                    return value > other;
                }
                function baseHas(object, key) {
                    return null != object && hasOwnProperty.call(object, key);
                }
                function baseHasIn(object, key) {
                    return null != object && key in Object(object);
                }
                function baseInRange(number, start, end) {
                    return number >= nativeMin(start, end) && number < nativeMax(start, end);
                }
                function baseIntersection(arrays, iteratee, comparator) {
                    for (var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = 1 / 0, result = []; othIndex--; ) {
                        var array = arrays[othIndex];
                        othIndex && iteratee && (array = arrayMap(array, baseUnary(iteratee))), maxLength = nativeMin(array.length, maxLength), 
                        caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
                    }
                    array = arrays[0];
                    var index = -1, seen = caches[0];
                    outer: for (;++index < length && result.length < maxLength; ) {
                        var value = array[index], computed = iteratee ? iteratee(value) : value;
                        if (value = comparator || 0 !== value ? value : 0, !(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                            for (othIndex = othLength; --othIndex; ) {
                                var cache = caches[othIndex];
                                if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) continue outer;
                            }
                            seen && seen.push(computed), result.push(value);
                        }
                    }
                    return result;
                }
                function baseInverter(object, setter, iteratee, accumulator) {
                    return baseForOwn(object, function(value, key, object) {
                        setter(accumulator, iteratee(value), key, object);
                    }), accumulator;
                }
                function baseInvoke(object, path, args) {
                    path = castPath(path, object), object = parent(object, path);
                    var func = null == object ? object : object[toKey(last(path))];
                    return null == func ? undefined : apply(func, object, args);
                }
                function baseIsArguments(value) {
                    return isObjectLike(value) && baseGetTag(value) == argsTag;
                }
                function baseIsArrayBuffer(value) {
                    return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
                }
                function baseIsDate(value) {
                    return isObjectLike(value) && baseGetTag(value) == dateTag;
                }
                function baseIsEqual(value, other, bitmask, customizer, stack) {
                    return value === other || (null == value || null == other || !isObjectLike(value) && !isObjectLike(other) ? value !== value && other !== other : baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack));
                }
                function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
                    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
                    objTag = objTag == argsTag ? objectTag : objTag, othTag = othTag == argsTag ? objectTag : othTag;
                    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
                    if (isSameTag && isBuffer(object)) {
                        if (!isBuffer(other)) return !1;
                        objIsArr = !0, objIsObj = !1;
                    }
                    if (isSameTag && !objIsObj) return stack || (stack = new Stack()), objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
                    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
                        if (objIsWrapped || othIsWrapped) {
                            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                            return stack || (stack = new Stack()), equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                        }
                    }
                    return !!isSameTag && (stack || (stack = new Stack()), equalObjects(object, other, bitmask, customizer, equalFunc, stack));
                }
                function baseIsMap(value) {
                    return isObjectLike(value) && getTag(value) == mapTag;
                }
                function baseIsMatch(object, source, matchData, customizer) {
                    var index = matchData.length, length = index, noCustomizer = !customizer;
                    if (null == object) return !length;
                    for (object = Object(object); index--; ) {
                        var data = matchData[index];
                        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return !1;
                    }
                    for (;++index < length; ) {
                        data = matchData[index];
                        var key = data[0], objValue = object[key], srcValue = data[1];
                        if (noCustomizer && data[2]) {
                            if (objValue === undefined && !(key in object)) return !1;
                        } else {
                            var stack = new Stack();
                            if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
                            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return !1;
                        }
                    }
                    return !0;
                }
                function baseIsNative(value) {
                    return !(!isObject(value) || isMasked(value)) && (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
                }
                function baseIsRegExp(value) {
                    return isObjectLike(value) && baseGetTag(value) == regexpTag;
                }
                function baseIsSet(value) {
                    return isObjectLike(value) && getTag(value) == setTag;
                }
                function baseIsTypedArray(value) {
                    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
                }
                function baseIteratee(value) {
                    return "function" == typeof value ? value : null == value ? identity : "object" == typeof value ? isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value) : property(value);
                }
                function baseKeys(object) {
                    if (!isPrototype(object)) return nativeKeys(object);
                    var result = [];
                    for (var key in Object(object)) hasOwnProperty.call(object, key) && "constructor" != key && result.push(key);
                    return result;
                }
                function baseKeysIn(object) {
                    if (!isObject(object)) return nativeKeysIn(object);
                    var isProto = isPrototype(object), result = [];
                    for (var key in object) ("constructor" != key || !isProto && hasOwnProperty.call(object, key)) && result.push(key);
                    return result;
                }
                function baseLt(value, other) {
                    return value < other;
                }
                function baseMap(collection, iteratee) {
                    var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
                    return baseEach(collection, function(value, key, collection) {
                        result[++index] = iteratee(value, key, collection);
                    }), result;
                }
                function baseMatches(source) {
                    var matchData = getMatchData(source);
                    return 1 == matchData.length && matchData[0][2] ? matchesStrictComparable(matchData[0][0], matchData[0][1]) : function(object) {
                        return object === source || baseIsMatch(object, source, matchData);
                    };
                }
                function baseMatchesProperty(path, srcValue) {
                    return isKey(path) && isStrictComparable(srcValue) ? matchesStrictComparable(toKey(path), srcValue) : function(object) {
                        var objValue = get(object, path);
                        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
                    };
                }
                function baseMerge(object, source, srcIndex, customizer, stack) {
                    object !== source && baseFor(source, function(srcValue, key) {
                        if (isObject(srcValue)) stack || (stack = new Stack()), baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack); else {
                            var newValue = customizer ? customizer(object[key], srcValue, key + "", object, source, stack) : undefined;
                            newValue === undefined && (newValue = srcValue), assignMergeValue(object, key, newValue);
                        }
                    }, keysIn);
                }
                function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
                    var objValue = object[key], srcValue = source[key], stacked = stack.get(srcValue);
                    if (stacked) return void assignMergeValue(object, key, stacked);
                    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined, isCommon = newValue === undefined;
                    if (isCommon) {
                        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
                        newValue = srcValue, isArr || isBuff || isTyped ? isArray(objValue) ? newValue = objValue : isArrayLikeObject(objValue) ? newValue = copyArray(objValue) : isBuff ? (isCommon = !1, 
                        newValue = cloneBuffer(srcValue, !0)) : isTyped ? (isCommon = !1, newValue = cloneTypedArray(srcValue, !0)) : newValue = [] : isPlainObject(srcValue) || isArguments(srcValue) ? (newValue = objValue, 
                        isArguments(objValue) ? newValue = toPlainObject(objValue) : (!isObject(objValue) || srcIndex && isFunction(objValue)) && (newValue = initCloneObject(srcValue))) : isCommon = !1;
                    }
                    isCommon && (stack.set(srcValue, newValue), mergeFunc(newValue, srcValue, srcIndex, customizer, stack), 
                    stack.delete(srcValue)), assignMergeValue(object, key, newValue);
                }
                function baseNth(array, n) {
                    var length = array.length;
                    if (length) return n += n < 0 ? length : 0, isIndex(n, length) ? array[n] : undefined;
                }
                function baseOrderBy(collection, iteratees, orders) {
                    var index = -1;
                    return iteratees = arrayMap(iteratees.length ? iteratees : [ identity ], baseUnary(getIteratee())), 
                    baseSortBy(baseMap(collection, function(value, key, collection) {
                        return {
                            criteria: arrayMap(iteratees, function(iteratee) {
                                return iteratee(value);
                            }),
                            index: ++index,
                            value: value
                        };
                    }), function(object, other) {
                        return compareMultiple(object, other, orders);
                    });
                }
                function basePick(object, paths) {
                    return basePickBy(object, paths, function(value, path) {
                        return hasIn(object, path);
                    });
                }
                function basePickBy(object, paths, predicate) {
                    for (var index = -1, length = paths.length, result = {}; ++index < length; ) {
                        var path = paths[index], value = baseGet(object, path);
                        predicate(value, path) && baseSet(result, castPath(path, object), value);
                    }
                    return result;
                }
                function basePropertyDeep(path) {
                    return function(object) {
                        return baseGet(object, path);
                    };
                }
                function basePullAll(array, values, iteratee, comparator) {
                    var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
                    for (array === values && (values = copyArray(values)), iteratee && (seen = arrayMap(array, baseUnary(iteratee))); ++index < length; ) for (var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value; (fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1; ) seen !== array && splice.call(seen, fromIndex, 1), 
                    splice.call(array, fromIndex, 1);
                    return array;
                }
                function basePullAt(array, indexes) {
                    for (var length = array ? indexes.length : 0, lastIndex = length - 1; length--; ) {
                        var index = indexes[length];
                        if (length == lastIndex || index !== previous) {
                            var previous = index;
                            isIndex(index) ? splice.call(array, index, 1) : baseUnset(array, index);
                        }
                    }
                    return array;
                }
                function baseRandom(lower, upper) {
                    return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
                }
                function baseRange(start, end, step, fromRight) {
                    for (var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length); length--; ) result[fromRight ? length : ++index] = start, 
                    start += step;
                    return result;
                }
                function baseRepeat(string, n) {
                    var result = "";
                    if (!string || n < 1 || n > MAX_SAFE_INTEGER) return result;
                    do {
                        n % 2 && (result += string), (n = nativeFloor(n / 2)) && (string += string);
                    } while (n);
                    return result;
                }
                function baseRest(func, start) {
                    return setToString(overRest(func, start, identity), func + "");
                }
                function baseSample(collection) {
                    return arraySample(values(collection));
                }
                function baseSampleSize(collection, n) {
                    var array = values(collection);
                    return shuffleSelf(array, baseClamp(n, 0, array.length));
                }
                function baseSet(object, path, value, customizer) {
                    if (!isObject(object)) return object;
                    path = castPath(path, object);
                    for (var index = -1, length = path.length, lastIndex = length - 1, nested = object; null != nested && ++index < length; ) {
                        var key = toKey(path[index]), newValue = value;
                        if (index != lastIndex) {
                            var objValue = nested[key];
                            newValue = customizer ? customizer(objValue, key, nested) : undefined, newValue === undefined && (newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {});
                        }
                        assignValue(nested, key, newValue), nested = nested[key];
                    }
                    return object;
                }
                function baseShuffle(collection) {
                    return shuffleSelf(values(collection));
                }
                function baseSlice(array, start, end) {
                    var index = -1, length = array.length;
                    start < 0 && (start = -start > length ? 0 : length + start), end = end > length ? length : end, 
                    end < 0 && (end += length), length = start > end ? 0 : end - start >>> 0, start >>>= 0;
                    for (var result = Array(length); ++index < length; ) result[index] = array[index + start];
                    return result;
                }
                function baseSome(collection, predicate) {
                    var result;
                    return baseEach(collection, function(value, index, collection) {
                        return !(result = predicate(value, index, collection));
                    }), !!result;
                }
                function baseSortedIndex(array, value, retHighest) {
                    var low = 0, high = null == array ? low : array.length;
                    if ("number" == typeof value && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                        for (;low < high; ) {
                            var mid = low + high >>> 1, computed = array[mid];
                            null !== computed && !isSymbol(computed) && (retHighest ? computed <= value : computed < value) ? low = mid + 1 : high = mid;
                        }
                        return high;
                    }
                    return baseSortedIndexBy(array, value, identity, retHighest);
                }
                function baseSortedIndexBy(array, value, iteratee, retHighest) {
                    value = iteratee(value);
                    for (var low = 0, high = null == array ? 0 : array.length, valIsNaN = value !== value, valIsNull = null === value, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined; low < high; ) {
                        var mid = nativeFloor((low + high) / 2), computed = iteratee(array[mid]), othIsDefined = computed !== undefined, othIsNull = null === computed, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
                        if (valIsNaN) var setLow = retHighest || othIsReflexive; else setLow = valIsUndefined ? othIsReflexive && (retHighest || othIsDefined) : valIsNull ? othIsReflexive && othIsDefined && (retHighest || !othIsNull) : valIsSymbol ? othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol) : !othIsNull && !othIsSymbol && (retHighest ? computed <= value : computed < value);
                        setLow ? low = mid + 1 : high = mid;
                    }
                    return nativeMin(high, MAX_ARRAY_INDEX);
                }
                function baseSortedUniq(array, iteratee) {
                    for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length; ) {
                        var value = array[index], computed = iteratee ? iteratee(value) : value;
                        if (!index || !eq(computed, seen)) {
                            var seen = computed;
                            result[resIndex++] = 0 === value ? 0 : value;
                        }
                    }
                    return result;
                }
                function baseToNumber(value) {
                    return "number" == typeof value ? value : isSymbol(value) ? NAN : +value;
                }
                function baseToString(value) {
                    if ("string" == typeof value) return value;
                    if (isArray(value)) return arrayMap(value, baseToString) + "";
                    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
                    var result = value + "";
                    return "0" == result && 1 / value == -INFINITY ? "-0" : result;
                }
                function baseUniq(array, iteratee, comparator) {
                    var index = -1, includes = arrayIncludes, length = array.length, isCommon = !0, result = [], seen = result;
                    if (comparator) isCommon = !1, includes = arrayIncludesWith; else if (length >= LARGE_ARRAY_SIZE) {
                        var set = iteratee ? null : createSet(array);
                        if (set) return setToArray(set);
                        isCommon = !1, includes = cacheHas, seen = new SetCache();
                    } else seen = iteratee ? [] : result;
                    outer: for (;++index < length; ) {
                        var value = array[index], computed = iteratee ? iteratee(value) : value;
                        if (value = comparator || 0 !== value ? value : 0, isCommon && computed === computed) {
                            for (var seenIndex = seen.length; seenIndex--; ) if (seen[seenIndex] === computed) continue outer;
                            iteratee && seen.push(computed), result.push(value);
                        } else includes(seen, computed, comparator) || (seen !== result && seen.push(computed), 
                        result.push(value));
                    }
                    return result;
                }
                function baseUnset(object, path) {
                    return path = castPath(path, object), null == (object = parent(object, path)) || delete object[toKey(last(path))];
                }
                function baseUpdate(object, path, updater, customizer) {
                    return baseSet(object, path, updater(baseGet(object, path)), customizer);
                }
                function baseWhile(array, predicate, isDrop, fromRight) {
                    for (var length = array.length, index = fromRight ? length : -1; (fromRight ? index-- : ++index < length) && predicate(array[index], index, array); ) ;
                    return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
                }
                function baseWrapperValue(value, actions) {
                    var result = value;
                    return result instanceof LazyWrapper && (result = result.value()), arrayReduce(actions, function(result, action) {
                        return action.func.apply(action.thisArg, arrayPush([ result ], action.args));
                    }, result);
                }
                function baseXor(arrays, iteratee, comparator) {
                    var length = arrays.length;
                    if (length < 2) return length ? baseUniq(arrays[0]) : [];
                    for (var index = -1, result = Array(length); ++index < length; ) for (var array = arrays[index], othIndex = -1; ++othIndex < length; ) othIndex != index && (result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator));
                    return baseUniq(baseFlatten(result, 1), iteratee, comparator);
                }
                function baseZipObject(props, values, assignFunc) {
                    for (var index = -1, length = props.length, valsLength = values.length, result = {}; ++index < length; ) {
                        var value = index < valsLength ? values[index] : undefined;
                        assignFunc(result, props[index], value);
                    }
                    return result;
                }
                function castArrayLikeObject(value) {
                    return isArrayLikeObject(value) ? value : [];
                }
                function castFunction(value) {
                    return "function" == typeof value ? value : identity;
                }
                function castPath(value, object) {
                    return isArray(value) ? value : isKey(value, object) ? [ value ] : stringToPath(toString(value));
                }
                function castSlice(array, start, end) {
                    var length = array.length;
                    return end = end === undefined ? length : end, !start && end >= length ? array : baseSlice(array, start, end);
                }
                function cloneBuffer(buffer, isDeep) {
                    if (isDeep) return buffer.slice();
                    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
                    return buffer.copy(result), result;
                }
                function cloneArrayBuffer(arrayBuffer) {
                    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
                    return new Uint8Array(result).set(new Uint8Array(arrayBuffer)), result;
                }
                function cloneDataView(dataView, isDeep) {
                    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
                    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
                }
                function cloneMap(map, isDeep, cloneFunc) {
                    return arrayReduce(isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map), addMapEntry, new map.constructor());
                }
                function cloneRegExp(regexp) {
                    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
                    return result.lastIndex = regexp.lastIndex, result;
                }
                function cloneSet(set, isDeep, cloneFunc) {
                    return arrayReduce(isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set), addSetEntry, new set.constructor());
                }
                function cloneSymbol(symbol) {
                    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
                }
                function cloneTypedArray(typedArray, isDeep) {
                    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
                    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
                }
                function compareAscending(value, other) {
                    if (value !== other) {
                        var valIsDefined = value !== undefined, valIsNull = null === value, valIsReflexive = value === value, valIsSymbol = isSymbol(value), othIsDefined = other !== undefined, othIsNull = null === other, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
                        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
                        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
                    }
                    return 0;
                }
                function compareMultiple(object, other, orders) {
                    for (var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length; ++index < length; ) {
                        var result = compareAscending(objCriteria[index], othCriteria[index]);
                        if (result) {
                            if (index >= ordersLength) return result;
                            return result * ("desc" == orders[index] ? -1 : 1);
                        }
                    }
                    return object.index - other.index;
                }
                function composeArgs(args, partials, holders, isCurried) {
                    for (var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried; ++leftIndex < leftLength; ) result[leftIndex] = partials[leftIndex];
                    for (;++argsIndex < holdersLength; ) (isUncurried || argsIndex < argsLength) && (result[holders[argsIndex]] = args[argsIndex]);
                    for (;rangeLength--; ) result[leftIndex++] = args[argsIndex++];
                    return result;
                }
                function composeArgsRight(args, partials, holders, isCurried) {
                    for (var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried; ++argsIndex < rangeLength; ) result[argsIndex] = args[argsIndex];
                    for (var offset = argsIndex; ++rightIndex < rightLength; ) result[offset + rightIndex] = partials[rightIndex];
                    for (;++holdersIndex < holdersLength; ) (isUncurried || argsIndex < argsLength) && (result[offset + holders[holdersIndex]] = args[argsIndex++]);
                    return result;
                }
                function copyArray(source, array) {
                    var index = -1, length = source.length;
                    for (array || (array = Array(length)); ++index < length; ) array[index] = source[index];
                    return array;
                }
                function copyObject(source, props, object, customizer) {
                    var isNew = !object;
                    object || (object = {});
                    for (var index = -1, length = props.length; ++index < length; ) {
                        var key = props[index], newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
                        newValue === undefined && (newValue = source[key]), isNew ? baseAssignValue(object, key, newValue) : assignValue(object, key, newValue);
                    }
                    return object;
                }
                function copySymbols(source, object) {
                    return copyObject(source, getSymbols(source), object);
                }
                function copySymbolsIn(source, object) {
                    return copyObject(source, getSymbolsIn(source), object);
                }
                function createAggregator(setter, initializer) {
                    return function(collection, iteratee) {
                        var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
                        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
                    };
                }
                function createAssigner(assigner) {
                    return baseRest(function(object, sources) {
                        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
                        for (customizer = assigner.length > 3 && "function" == typeof customizer ? (length--, 
                        customizer) : undefined, guard && isIterateeCall(sources[0], sources[1], guard) && (customizer = length < 3 ? undefined : customizer, 
                        length = 1), object = Object(object); ++index < length; ) {
                            var source = sources[index];
                            source && assigner(object, source, index, customizer);
                        }
                        return object;
                    });
                }
                function createBaseEach(eachFunc, fromRight) {
                    return function(collection, iteratee) {
                        if (null == collection) return collection;
                        if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
                        for (var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection); (fromRight ? index-- : ++index < length) && !1 !== iteratee(iterable[index], index, iterable); ) ;
                        return collection;
                    };
                }
                function createBaseFor(fromRight) {
                    return function(object, iteratee, keysFunc) {
                        for (var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length; length--; ) {
                            var key = props[fromRight ? length : ++index];
                            if (!1 === iteratee(iterable[key], key, iterable)) break;
                        }
                        return object;
                    };
                }
                function createBind(func, bitmask, thisArg) {
                    function wrapper() {
                        return (this && this !== root && this instanceof wrapper ? Ctor : func).apply(isBind ? thisArg : this, arguments);
                    }
                    var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
                    return wrapper;
                }
                function createCaseFirst(methodName) {
                    return function(string) {
                        string = toString(string);
                        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined, chr = strSymbols ? strSymbols[0] : string.charAt(0), trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
                        return chr[methodName]() + trailing;
                    };
                }
                function createCompounder(callback) {
                    return function(string) {
                        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
                    };
                }
                function createCtor(Ctor) {
                    return function() {
                        var args = arguments;
                        switch (args.length) {
                          case 0:
                            return new Ctor();

                          case 1:
                            return new Ctor(args[0]);

                          case 2:
                            return new Ctor(args[0], args[1]);

                          case 3:
                            return new Ctor(args[0], args[1], args[2]);

                          case 4:
                            return new Ctor(args[0], args[1], args[2], args[3]);

                          case 5:
                            return new Ctor(args[0], args[1], args[2], args[3], args[4]);

                          case 6:
                            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);

                          case 7:
                            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                        }
                        var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
                        return isObject(result) ? result : thisBinding;
                    };
                }
                function createCurry(func, bitmask, arity) {
                    function wrapper() {
                        for (var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper); index--; ) args[index] = arguments[index];
                        var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
                        return (length -= holders.length) < arity ? createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length) : apply(this && this !== root && this instanceof wrapper ? Ctor : func, this, args);
                    }
                    var Ctor = createCtor(func);
                    return wrapper;
                }
                function createFind(findIndexFunc) {
                    return function(collection, predicate, fromIndex) {
                        var iterable = Object(collection);
                        if (!isArrayLike(collection)) {
                            var iteratee = getIteratee(predicate, 3);
                            collection = keys(collection), predicate = function(key) {
                                return iteratee(iterable[key], key, iterable);
                            };
                        }
                        var index = findIndexFunc(collection, predicate, fromIndex);
                        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
                    };
                }
                function createFlow(fromRight) {
                    return flatRest(function(funcs) {
                        var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
                        for (fromRight && funcs.reverse(); index--; ) {
                            var func = funcs[index];
                            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                            if (prereq && !wrapper && "wrapper" == getFuncName(func)) var wrapper = new LodashWrapper([], !0);
                        }
                        for (index = wrapper ? index : length; ++index < length; ) {
                            func = funcs[index];
                            var funcName = getFuncName(func), data = "wrapper" == funcName ? getData(func) : undefined;
                            wrapper = data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && 1 == data[9] ? wrapper[getFuncName(data[0])].apply(wrapper, data[3]) : 1 == func.length && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                        }
                        return function() {
                            var args = arguments, value = args[0];
                            if (wrapper && 1 == args.length && isArray(value)) return wrapper.plant(value).value();
                            for (var index = 0, result = length ? funcs[index].apply(this, args) : value; ++index < length; ) result = funcs[index].call(this, result);
                            return result;
                        };
                    });
                }
                function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
                    function wrapper() {
                        for (var length = arguments.length, args = Array(length), index = length; index--; ) args[index] = arguments[index];
                        if (isCurried) var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
                        if (partials && (args = composeArgs(args, partials, holders, isCurried)), partialsRight && (args = composeArgsRight(args, partialsRight, holdersRight, isCurried)), 
                        length -= holdersCount, isCurried && length < arity) {
                            var newHolders = replaceHolders(args, placeholder);
                            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
                        }
                        var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
                        return length = args.length, argPos ? args = reorder(args, argPos) : isFlip && length > 1 && args.reverse(), 
                        isAry && ary < length && (args.length = ary), this && this !== root && this instanceof wrapper && (fn = Ctor || createCtor(fn)), 
                        fn.apply(thisBinding, args);
                    }
                    var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
                    return wrapper;
                }
                function createInverter(setter, toIteratee) {
                    return function(object, iteratee) {
                        return baseInverter(object, setter, toIteratee(iteratee), {});
                    };
                }
                function createMathOperation(operator, defaultValue) {
                    return function(value, other) {
                        var result;
                        if (value === undefined && other === undefined) return defaultValue;
                        if (value !== undefined && (result = value), other !== undefined) {
                            if (result === undefined) return other;
                            "string" == typeof value || "string" == typeof other ? (value = baseToString(value), 
                            other = baseToString(other)) : (value = baseToNumber(value), other = baseToNumber(other)), 
                            result = operator(value, other);
                        }
                        return result;
                    };
                }
                function createOver(arrayFunc) {
                    return flatRest(function(iteratees) {
                        return iteratees = arrayMap(iteratees, baseUnary(getIteratee())), baseRest(function(args) {
                            var thisArg = this;
                            return arrayFunc(iteratees, function(iteratee) {
                                return apply(iteratee, thisArg, args);
                            });
                        });
                    });
                }
                function createPadding(length, chars) {
                    chars = chars === undefined ? " " : baseToString(chars);
                    var charsLength = chars.length;
                    if (charsLength < 2) return charsLength ? baseRepeat(chars, length) : chars;
                    var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
                    return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length);
                }
                function createPartial(func, bitmask, thisArg, partials) {
                    function wrapper() {
                        for (var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func; ++leftIndex < leftLength; ) args[leftIndex] = partials[leftIndex];
                        for (;argsLength--; ) args[leftIndex++] = arguments[++argsIndex];
                        return apply(fn, isBind ? thisArg : this, args);
                    }
                    var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
                    return wrapper;
                }
                function createRange(fromRight) {
                    return function(start, end, step) {
                        return step && "number" != typeof step && isIterateeCall(start, end, step) && (end = step = undefined), 
                        start = toFinite(start), end === undefined ? (end = start, start = 0) : end = toFinite(end), 
                        step = step === undefined ? start < end ? 1 : -1 : toFinite(step), baseRange(start, end, step, fromRight);
                    };
                }
                function createRelationalOperation(operator) {
                    return function(value, other) {
                        return "string" == typeof value && "string" == typeof other || (value = toNumber(value), 
                        other = toNumber(other)), operator(value, other);
                    };
                }
                function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
                    var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
                    bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG, (bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG)) & WRAP_CURRY_BOUND_FLAG || (bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG));
                    var newData = [ func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity ], result = wrapFunc.apply(undefined, newData);
                    return isLaziable(func) && setData(result, newData), result.placeholder = placeholder, 
                    setWrapToString(result, func, bitmask);
                }
                function createRound(methodName) {
                    var func = Math[methodName];
                    return function(number, precision) {
                        if (number = toNumber(number), precision = null == precision ? 0 : nativeMin(toInteger(precision), 292)) {
                            var pair = (toString(number) + "e").split("e");
                            return pair = (toString(func(pair[0] + "e" + (+pair[1] + precision))) + "e").split("e"), 
                            +(pair[0] + "e" + (+pair[1] - precision));
                        }
                        return func(number);
                    };
                }
                function createToPairs(keysFunc) {
                    return function(object) {
                        var tag = getTag(object);
                        return tag == mapTag ? mapToArray(object) : tag == setTag ? setToPairs(object) : baseToPairs(object, keysFunc(object));
                    };
                }
                function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
                    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
                    if (!isBindKey && "function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    var length = partials ? partials.length : 0;
                    if (length || (bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG), partials = holders = undefined), 
                    ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0), arity = arity === undefined ? arity : toInteger(arity), 
                    length -= holders ? holders.length : 0, bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
                        var partialsRight = partials, holdersRight = holders;
                        partials = holders = undefined;
                    }
                    var data = isBindKey ? undefined : getData(func), newData = [ func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity ];
                    if (data && mergeData(newData, data), func = newData[0], bitmask = newData[1], thisArg = newData[2], 
                    partials = newData[3], holders = newData[4], arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0), 
                    !arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG) && (bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)), 
                    bitmask && bitmask != WRAP_BIND_FLAG) result = bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG ? createCurry(func, bitmask, arity) : bitmask != WRAP_PARTIAL_FLAG && bitmask != (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG) || holders.length ? createHybrid.apply(undefined, newData) : createPartial(func, bitmask, thisArg, partials); else var result = createBind(func, bitmask, thisArg);
                    return setWrapToString((data ? baseSetData : setData)(result, newData), func, bitmask);
                }
                function customDefaultsAssignIn(objValue, srcValue, key, object) {
                    return objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key) ? srcValue : objValue;
                }
                function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
                    return isObject(objValue) && isObject(srcValue) && (stack.set(srcValue, objValue), 
                    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack), stack.delete(srcValue)), 
                    objValue;
                }
                function customOmitClone(value) {
                    return isPlainObject(value) ? undefined : value;
                }
                function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
                    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return !1;
                    var stacked = stack.get(array);
                    if (stacked && stack.get(other)) return stacked == other;
                    var index = -1, result = !0, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
                    for (stack.set(array, other), stack.set(other, array); ++index < arrLength; ) {
                        var arrValue = array[index], othValue = other[index];
                        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                        if (compared !== undefined) {
                            if (compared) continue;
                            result = !1;
                            break;
                        }
                        if (seen) {
                            if (!arraySome(other, function(othValue, othIndex) {
                                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
                            })) {
                                result = !1;
                                break;
                            }
                        } else if (arrValue !== othValue && !equalFunc(arrValue, othValue, bitmask, customizer, stack)) {
                            result = !1;
                            break;
                        }
                    }
                    return stack.delete(array), stack.delete(other), result;
                }
                function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
                    switch (tag) {
                      case dataViewTag:
                        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return !1;
                        object = object.buffer, other = other.buffer;

                      case arrayBufferTag:
                        return !(object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other)));

                      case boolTag:
                      case dateTag:
                      case numberTag:
                        return eq(+object, +other);

                      case errorTag:
                        return object.name == other.name && object.message == other.message;

                      case regexpTag:
                      case stringTag:
                        return object == other + "";

                      case mapTag:
                        var convert = mapToArray;

                      case setTag:
                        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                        if (convert || (convert = setToArray), object.size != other.size && !isPartial) return !1;
                        var stacked = stack.get(object);
                        if (stacked) return stacked == other;
                        bitmask |= COMPARE_UNORDERED_FLAG, stack.set(object, other);
                        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                        return stack.delete(object), result;

                      case symbolTag:
                        if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
                    }
                    return !1;
                }
                function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length;
                    if (objLength != getAllKeys(other).length && !isPartial) return !1;
                    for (var index = objLength; index--; ) {
                        var key = objProps[index];
                        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return !1;
                    }
                    var stacked = stack.get(object);
                    if (stacked && stack.get(other)) return stacked == other;
                    var result = !0;
                    stack.set(object, other), stack.set(other, object);
                    for (var skipCtor = isPartial; ++index < objLength; ) {
                        key = objProps[index];
                        var objValue = object[key], othValue = other[key];
                        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                            result = !1;
                            break;
                        }
                        skipCtor || (skipCtor = "constructor" == key);
                    }
                    if (result && !skipCtor) {
                        var objCtor = object.constructor, othCtor = other.constructor;
                        objCtor != othCtor && "constructor" in object && "constructor" in other && !("function" == typeof objCtor && objCtor instanceof objCtor && "function" == typeof othCtor && othCtor instanceof othCtor) && (result = !1);
                    }
                    return stack.delete(object), stack.delete(other), result;
                }
                function flatRest(func) {
                    return setToString(overRest(func, undefined, flatten), func + "");
                }
                function getAllKeys(object) {
                    return baseGetAllKeys(object, keys, getSymbols);
                }
                function getAllKeysIn(object) {
                    return baseGetAllKeys(object, keysIn, getSymbolsIn);
                }
                function getFuncName(func) {
                    for (var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0; length--; ) {
                        var data = array[length], otherFunc = data.func;
                        if (null == otherFunc || otherFunc == func) return data.name;
                    }
                    return result;
                }
                function getHolder(func) {
                    return (hasOwnProperty.call(lodash, "placeholder") ? lodash : func).placeholder;
                }
                function getIteratee() {
                    var result = lodash.iteratee || iteratee;
                    return result = result === iteratee ? baseIteratee : result, arguments.length ? result(arguments[0], arguments[1]) : result;
                }
                function getMapData(map, key) {
                    var data = map.__data__;
                    return isKeyable(key) ? data["string" == typeof key ? "string" : "hash"] : data.map;
                }
                function getMatchData(object) {
                    for (var result = keys(object), length = result.length; length--; ) {
                        var key = result[length], value = object[key];
                        result[length] = [ key, value, isStrictComparable(value) ];
                    }
                    return result;
                }
                function getNative(object, key) {
                    var value = getValue(object, key);
                    return baseIsNative(value) ? value : undefined;
                }
                function getRawTag(value) {
                    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
                    try {
                        value[symToStringTag] = undefined;
                        var unmasked = !0;
                    } catch (e) {}
                    var result = nativeObjectToString.call(value);
                    return unmasked && (isOwn ? value[symToStringTag] = tag : delete value[symToStringTag]), 
                    result;
                }
                function getView(start, end, transforms) {
                    for (var index = -1, length = transforms.length; ++index < length; ) {
                        var data = transforms[index], size = data.size;
                        switch (data.type) {
                          case "drop":
                            start += size;
                            break;

                          case "dropRight":
                            end -= size;
                            break;

                          case "take":
                            end = nativeMin(end, start + size);
                            break;

                          case "takeRight":
                            start = nativeMax(start, end - size);
                        }
                    }
                    return {
                        start: start,
                        end: end
                    };
                }
                function getWrapDetails(source) {
                    var match = source.match(reWrapDetails);
                    return match ? match[1].split(reSplitDetails) : [];
                }
                function hasPath(object, path, hasFunc) {
                    path = castPath(path, object);
                    for (var index = -1, length = path.length, result = !1; ++index < length; ) {
                        var key = toKey(path[index]);
                        if (!(result = null != object && hasFunc(object, key))) break;
                        object = object[key];
                    }
                    return result || ++index != length ? result : !!(length = null == object ? 0 : object.length) && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
                }
                function initCloneArray(array) {
                    var length = array.length, result = array.constructor(length);
                    return length && "string" == typeof array[0] && hasOwnProperty.call(array, "index") && (result.index = array.index, 
                    result.input = array.input), result;
                }
                function initCloneObject(object) {
                    return "function" != typeof object.constructor || isPrototype(object) ? {} : baseCreate(getPrototype(object));
                }
                function initCloneByTag(object, tag, cloneFunc, isDeep) {
                    var Ctor = object.constructor;
                    switch (tag) {
                      case arrayBufferTag:
                        return cloneArrayBuffer(object);

                      case boolTag:
                      case dateTag:
                        return new Ctor(+object);

                      case dataViewTag:
                        return cloneDataView(object, isDeep);

                      case float32Tag:
                      case float64Tag:
                      case int8Tag:
                      case int16Tag:
                      case int32Tag:
                      case uint8Tag:
                      case uint8ClampedTag:
                      case uint16Tag:
                      case uint32Tag:
                        return cloneTypedArray(object, isDeep);

                      case mapTag:
                        return cloneMap(object, isDeep, cloneFunc);

                      case numberTag:
                      case stringTag:
                        return new Ctor(object);

                      case regexpTag:
                        return cloneRegExp(object);

                      case setTag:
                        return cloneSet(object, isDeep, cloneFunc);

                      case symbolTag:
                        return cloneSymbol(object);
                    }
                }
                function insertWrapDetails(source, details) {
                    var length = details.length;
                    if (!length) return source;
                    var lastIndex = length - 1;
                    return details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex], details = details.join(length > 2 ? ", " : " "), 
                    source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
                }
                function isFlattenable(value) {
                    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
                }
                function isIndex(value, length) {
                    return !!(length = null == length ? MAX_SAFE_INTEGER : length) && ("number" == typeof value || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
                }
                function isIterateeCall(value, index, object) {
                    if (!isObject(object)) return !1;
                    var type = typeof index;
                    return !!("number" == type ? isArrayLike(object) && isIndex(index, object.length) : "string" == type && index in object) && eq(object[index], value);
                }
                function isKey(value, object) {
                    if (isArray(value)) return !1;
                    var type = typeof value;
                    return !("number" != type && "symbol" != type && "boolean" != type && null != value && !isSymbol(value)) || (reIsPlainProp.test(value) || !reIsDeepProp.test(value) || null != object && value in Object(object));
                }
                function isKeyable(value) {
                    var type = typeof value;
                    return "string" == type || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== value : null === value;
                }
                function isLaziable(func) {
                    var funcName = getFuncName(func), other = lodash[funcName];
                    if ("function" != typeof other || !(funcName in LazyWrapper.prototype)) return !1;
                    if (func === other) return !0;
                    var data = getData(other);
                    return !!data && func === data[0];
                }
                function isMasked(func) {
                    return !!maskSrcKey && maskSrcKey in func;
                }
                function isPrototype(value) {
                    var Ctor = value && value.constructor;
                    return value === ("function" == typeof Ctor && Ctor.prototype || objectProto);
                }
                function isStrictComparable(value) {
                    return value === value && !isObject(value);
                }
                function matchesStrictComparable(key, srcValue) {
                    return function(object) {
                        return null != object && (object[key] === srcValue && (srcValue !== undefined || key in Object(object)));
                    };
                }
                function mergeData(data, source) {
                    var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG), isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
                    if (!isCommon && !isCombo) return data;
                    srcBitmask & WRAP_BIND_FLAG && (data[2] = source[2], newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG);
                    var value = source[3];
                    if (value) {
                        var partials = data[3];
                        data[3] = partials ? composeArgs(partials, value, source[4]) : value, data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
                    }
                    return value = source[5], value && (partials = data[5], data[5] = partials ? composeArgsRight(partials, value, source[6]) : value, 
                    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6]), value = source[7], 
                    value && (data[7] = value), srcBitmask & WRAP_ARY_FLAG && (data[8] = null == data[8] ? source[8] : nativeMin(data[8], source[8])), 
                    null == data[9] && (data[9] = source[9]), data[0] = source[0], data[1] = newBitmask, 
                    data;
                }
                function nativeKeysIn(object) {
                    var result = [];
                    if (null != object) for (var key in Object(object)) result.push(key);
                    return result;
                }
                function objectToString(value) {
                    return nativeObjectToString.call(value);
                }
                function overRest(func, start, transform) {
                    return start = nativeMax(start === undefined ? func.length - 1 : start, 0), function() {
                        for (var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length); ++index < length; ) array[index] = args[start + index];
                        index = -1;
                        for (var otherArgs = Array(start + 1); ++index < start; ) otherArgs[index] = args[index];
                        return otherArgs[start] = transform(array), apply(func, this, otherArgs);
                    };
                }
                function parent(object, path) {
                    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
                }
                function reorder(array, indexes) {
                    for (var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array); length--; ) {
                        var index = indexes[length];
                        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
                    }
                    return array;
                }
                function setWrapToString(wrapper, reference, bitmask) {
                    var source = reference + "";
                    return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
                }
                function shortOut(func) {
                    var count = 0, lastCalled = 0;
                    return function() {
                        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
                        if (lastCalled = stamp, remaining > 0) {
                            if (++count >= HOT_COUNT) return arguments[0];
                        } else count = 0;
                        return func.apply(undefined, arguments);
                    };
                }
                function shuffleSelf(array, size) {
                    var index = -1, length = array.length, lastIndex = length - 1;
                    for (size = size === undefined ? length : size; ++index < size; ) {
                        var rand = baseRandom(index, lastIndex), value = array[rand];
                        array[rand] = array[index], array[index] = value;
                    }
                    return array.length = size, array;
                }
                function toKey(value) {
                    if ("string" == typeof value || isSymbol(value)) return value;
                    var result = value + "";
                    return "0" == result && 1 / value == -INFINITY ? "-0" : result;
                }
                function toSource(func) {
                    if (null != func) {
                        try {
                            return funcToString.call(func);
                        } catch (e) {}
                        try {
                            return func + "";
                        } catch (e) {}
                    }
                    return "";
                }
                function updateWrapDetails(details, bitmask) {
                    return arrayEach(wrapFlags, function(pair) {
                        var value = "_." + pair[0];
                        bitmask & pair[1] && !arrayIncludes(details, value) && details.push(value);
                    }), details.sort();
                }
                function wrapperClone(wrapper) {
                    if (wrapper instanceof LazyWrapper) return wrapper.clone();
                    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
                    return result.__actions__ = copyArray(wrapper.__actions__), result.__index__ = wrapper.__index__, 
                    result.__values__ = wrapper.__values__, result;
                }
                function chunk(array, size, guard) {
                    size = (guard ? isIterateeCall(array, size, guard) : size === undefined) ? 1 : nativeMax(toInteger(size), 0);
                    var length = null == array ? 0 : array.length;
                    if (!length || size < 1) return [];
                    for (var index = 0, resIndex = 0, result = Array(nativeCeil(length / size)); index < length; ) result[resIndex++] = baseSlice(array, index, index += size);
                    return result;
                }
                function compact(array) {
                    for (var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
                        var value = array[index];
                        value && (result[resIndex++] = value);
                    }
                    return result;
                }
                function concat() {
                    var length = arguments.length;
                    if (!length) return [];
                    for (var args = Array(length - 1), array = arguments[0], index = length; index--; ) args[index - 1] = arguments[index];
                    return arrayPush(isArray(array) ? copyArray(array) : [ array ], baseFlatten(args, 1));
                }
                function drop(array, n, guard) {
                    var length = null == array ? 0 : array.length;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n), baseSlice(array, n < 0 ? 0 : n, length)) : [];
                }
                function dropRight(array, n, guard) {
                    var length = null == array ? 0 : array.length;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n), n = length - n, 
                    baseSlice(array, 0, n < 0 ? 0 : n)) : [];
                }
                function dropRightWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !0, !0) : [];
                }
                function dropWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !0) : [];
                }
                function fill(array, value, start, end) {
                    var length = null == array ? 0 : array.length;
                    return length ? (start && "number" != typeof start && isIterateeCall(array, value, start) && (start = 0, 
                    end = length), baseFill(array, value, start, end)) : [];
                }
                function findIndex(array, predicate, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length) return -1;
                    var index = null == fromIndex ? 0 : toInteger(fromIndex);
                    return index < 0 && (index = nativeMax(length + index, 0)), baseFindIndex(array, getIteratee(predicate, 3), index);
                }
                function findLastIndex(array, predicate, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length) return -1;
                    var index = length - 1;
                    return fromIndex !== undefined && (index = toInteger(fromIndex), index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)), 
                    baseFindIndex(array, getIteratee(predicate, 3), index, !0);
                }
                function flatten(array) {
                    return (null == array ? 0 : array.length) ? baseFlatten(array, 1) : [];
                }
                function flattenDeep(array) {
                    return (null == array ? 0 : array.length) ? baseFlatten(array, INFINITY) : [];
                }
                function flattenDepth(array, depth) {
                    return (null == array ? 0 : array.length) ? (depth = depth === undefined ? 1 : toInteger(depth), 
                    baseFlatten(array, depth)) : [];
                }
                function fromPairs(pairs) {
                    for (var index = -1, length = null == pairs ? 0 : pairs.length, result = {}; ++index < length; ) {
                        var pair = pairs[index];
                        result[pair[0]] = pair[1];
                    }
                    return result;
                }
                function head(array) {
                    return array && array.length ? array[0] : undefined;
                }
                function indexOf(array, value, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length) return -1;
                    var index = null == fromIndex ? 0 : toInteger(fromIndex);
                    return index < 0 && (index = nativeMax(length + index, 0)), baseIndexOf(array, value, index);
                }
                function initial(array) {
                    return (null == array ? 0 : array.length) ? baseSlice(array, 0, -1) : [];
                }
                function join(array, separator) {
                    return null == array ? "" : nativeJoin.call(array, separator);
                }
                function last(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? array[length - 1] : undefined;
                }
                function lastIndexOf(array, value, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length) return -1;
                    var index = length;
                    return fromIndex !== undefined && (index = toInteger(fromIndex), index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)), 
                    value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, !0);
                }
                function nth(array, n) {
                    return array && array.length ? baseNth(array, toInteger(n)) : undefined;
                }
                function pullAll(array, values) {
                    return array && array.length && values && values.length ? basePullAll(array, values) : array;
                }
                function pullAllBy(array, values, iteratee) {
                    return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
                }
                function pullAllWith(array, values, comparator) {
                    return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
                }
                function remove(array, predicate) {
                    var result = [];
                    if (!array || !array.length) return result;
                    var index = -1, indexes = [], length = array.length;
                    for (predicate = getIteratee(predicate, 3); ++index < length; ) {
                        var value = array[index];
                        predicate(value, index, array) && (result.push(value), indexes.push(index));
                    }
                    return basePullAt(array, indexes), result;
                }
                function reverse(array) {
                    return null == array ? array : nativeReverse.call(array);
                }
                function slice(array, start, end) {
                    var length = null == array ? 0 : array.length;
                    return length ? (end && "number" != typeof end && isIterateeCall(array, start, end) ? (start = 0, 
                    end = length) : (start = null == start ? 0 : toInteger(start), end = end === undefined ? length : toInteger(end)), 
                    baseSlice(array, start, end)) : [];
                }
                function sortedIndex(array, value) {
                    return baseSortedIndex(array, value);
                }
                function sortedIndexBy(array, value, iteratee) {
                    return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
                }
                function sortedIndexOf(array, value) {
                    var length = null == array ? 0 : array.length;
                    if (length) {
                        var index = baseSortedIndex(array, value);
                        if (index < length && eq(array[index], value)) return index;
                    }
                    return -1;
                }
                function sortedLastIndex(array, value) {
                    return baseSortedIndex(array, value, !0);
                }
                function sortedLastIndexBy(array, value, iteratee) {
                    return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), !0);
                }
                function sortedLastIndexOf(array, value) {
                    if (null == array ? 0 : array.length) {
                        var index = baseSortedIndex(array, value, !0) - 1;
                        if (eq(array[index], value)) return index;
                    }
                    return -1;
                }
                function sortedUniq(array) {
                    return array && array.length ? baseSortedUniq(array) : [];
                }
                function sortedUniqBy(array, iteratee) {
                    return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
                }
                function tail(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? baseSlice(array, 1, length) : [];
                }
                function take(array, n, guard) {
                    return array && array.length ? (n = guard || n === undefined ? 1 : toInteger(n), 
                    baseSlice(array, 0, n < 0 ? 0 : n)) : [];
                }
                function takeRight(array, n, guard) {
                    var length = null == array ? 0 : array.length;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n), n = length - n, 
                    baseSlice(array, n < 0 ? 0 : n, length)) : [];
                }
                function takeRightWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !1, !0) : [];
                }
                function takeWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
                }
                function uniq(array) {
                    return array && array.length ? baseUniq(array) : [];
                }
                function uniqBy(array, iteratee) {
                    return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
                }
                function uniqWith(array, comparator) {
                    return comparator = "function" == typeof comparator ? comparator : undefined, array && array.length ? baseUniq(array, undefined, comparator) : [];
                }
                function unzip(array) {
                    if (!array || !array.length) return [];
                    var length = 0;
                    return array = arrayFilter(array, function(group) {
                        if (isArrayLikeObject(group)) return length = nativeMax(group.length, length), !0;
                    }), baseTimes(length, function(index) {
                        return arrayMap(array, baseProperty(index));
                    });
                }
                function unzipWith(array, iteratee) {
                    if (!array || !array.length) return [];
                    var result = unzip(array);
                    return null == iteratee ? result : arrayMap(result, function(group) {
                        return apply(iteratee, undefined, group);
                    });
                }
                function zipObject(props, values) {
                    return baseZipObject(props || [], values || [], assignValue);
                }
                function zipObjectDeep(props, values) {
                    return baseZipObject(props || [], values || [], baseSet);
                }
                function chain(value) {
                    var result = lodash(value);
                    return result.__chain__ = !0, result;
                }
                function tap(value, interceptor) {
                    return interceptor(value), value;
                }
                function thru(value, interceptor) {
                    return interceptor(value);
                }
                function wrapperChain() {
                    return chain(this);
                }
                function wrapperCommit() {
                    return new LodashWrapper(this.value(), this.__chain__);
                }
                function wrapperNext() {
                    this.__values__ === undefined && (this.__values__ = toArray(this.value()));
                    var done = this.__index__ >= this.__values__.length;
                    return {
                        done: done,
                        value: done ? undefined : this.__values__[this.__index__++]
                    };
                }
                function wrapperToIterator() {
                    return this;
                }
                function wrapperPlant(value) {
                    for (var result, parent = this; parent instanceof baseLodash; ) {
                        var clone = wrapperClone(parent);
                        clone.__index__ = 0, clone.__values__ = undefined, result ? previous.__wrapped__ = clone : result = clone;
                        var previous = clone;
                        parent = parent.__wrapped__;
                    }
                    return previous.__wrapped__ = value, result;
                }
                function wrapperReverse() {
                    var value = this.__wrapped__;
                    if (value instanceof LazyWrapper) {
                        var wrapped = value;
                        return this.__actions__.length && (wrapped = new LazyWrapper(this)), wrapped = wrapped.reverse(), 
                        wrapped.__actions__.push({
                            func: thru,
                            args: [ reverse ],
                            thisArg: undefined
                        }), new LodashWrapper(wrapped, this.__chain__);
                    }
                    return this.thru(reverse);
                }
                function wrapperValue() {
                    return baseWrapperValue(this.__wrapped__, this.__actions__);
                }
                function every(collection, predicate, guard) {
                    var func = isArray(collection) ? arrayEvery : baseEvery;
                    return guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined), 
                    func(collection, getIteratee(predicate, 3));
                }
                function filter(collection, predicate) {
                    return (isArray(collection) ? arrayFilter : baseFilter)(collection, getIteratee(predicate, 3));
                }
                function flatMap(collection, iteratee) {
                    return baseFlatten(map(collection, iteratee), 1);
                }
                function flatMapDeep(collection, iteratee) {
                    return baseFlatten(map(collection, iteratee), INFINITY);
                }
                function flatMapDepth(collection, iteratee, depth) {
                    return depth = depth === undefined ? 1 : toInteger(depth), baseFlatten(map(collection, iteratee), depth);
                }
                function forEach(collection, iteratee) {
                    return (isArray(collection) ? arrayEach : baseEach)(collection, getIteratee(iteratee, 3));
                }
                function forEachRight(collection, iteratee) {
                    return (isArray(collection) ? arrayEachRight : baseEachRight)(collection, getIteratee(iteratee, 3));
                }
                function includes(collection, value, fromIndex, guard) {
                    collection = isArrayLike(collection) ? collection : values(collection), fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
                    var length = collection.length;
                    return fromIndex < 0 && (fromIndex = nativeMax(length + fromIndex, 0)), isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
                }
                function map(collection, iteratee) {
                    return (isArray(collection) ? arrayMap : baseMap)(collection, getIteratee(iteratee, 3));
                }
                function orderBy(collection, iteratees, orders, guard) {
                    return null == collection ? [] : (isArray(iteratees) || (iteratees = null == iteratees ? [] : [ iteratees ]), 
                    orders = guard ? undefined : orders, isArray(orders) || (orders = null == orders ? [] : [ orders ]), 
                    baseOrderBy(collection, iteratees, orders));
                }
                function reduce(collection, iteratee, accumulator) {
                    var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
                    return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
                }
                function reduceRight(collection, iteratee, accumulator) {
                    var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
                    return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
                }
                function reject(collection, predicate) {
                    return (isArray(collection) ? arrayFilter : baseFilter)(collection, negate(getIteratee(predicate, 3)));
                }
                function sample(collection) {
                    return (isArray(collection) ? arraySample : baseSample)(collection);
                }
                function sampleSize(collection, n, guard) {
                    return n = (guard ? isIterateeCall(collection, n, guard) : n === undefined) ? 1 : toInteger(n), 
                    (isArray(collection) ? arraySampleSize : baseSampleSize)(collection, n);
                }
                function shuffle(collection) {
                    return (isArray(collection) ? arrayShuffle : baseShuffle)(collection);
                }
                function size(collection) {
                    if (null == collection) return 0;
                    if (isArrayLike(collection)) return isString(collection) ? stringSize(collection) : collection.length;
                    var tag = getTag(collection);
                    return tag == mapTag || tag == setTag ? collection.size : baseKeys(collection).length;
                }
                function some(collection, predicate, guard) {
                    var func = isArray(collection) ? arraySome : baseSome;
                    return guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined), 
                    func(collection, getIteratee(predicate, 3));
                }
                function after(n, func) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return n = toInteger(n), function() {
                        if (--n < 1) return func.apply(this, arguments);
                    };
                }
                function ary(func, n, guard) {
                    return n = guard ? undefined : n, n = func && null == n ? func.length : n, createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
                }
                function before(n, func) {
                    var result;
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return n = toInteger(n), function() {
                        return --n > 0 && (result = func.apply(this, arguments)), n <= 1 && (func = undefined), 
                        result;
                    };
                }
                function curry(func, arity, guard) {
                    arity = guard ? undefined : arity;
                    var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
                    return result.placeholder = curry.placeholder, result;
                }
                function curryRight(func, arity, guard) {
                    arity = guard ? undefined : arity;
                    var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
                    return result.placeholder = curryRight.placeholder, result;
                }
                function debounce(func, wait, options) {
                    function invokeFunc(time) {
                        var args = lastArgs, thisArg = lastThis;
                        return lastArgs = lastThis = undefined, lastInvokeTime = time, result = func.apply(thisArg, args);
                    }
                    function leadingEdge(time) {
                        return lastInvokeTime = time, timerId = setTimeout(timerExpired, wait), leading ? invokeFunc(time) : result;
                    }
                    function remainingWait(time) {
                        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
                        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
                    }
                    function shouldInvoke(time) {
                        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
                    }
                    function timerExpired() {
                        var time = now();
                        if (shouldInvoke(time)) return trailingEdge(time);
                        timerId = setTimeout(timerExpired, remainingWait(time));
                    }
                    function trailingEdge(time) {
                        return timerId = undefined, trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = undefined, 
                        result);
                    }
                    function cancel() {
                        timerId !== undefined && clearTimeout(timerId), lastInvokeTime = 0, lastArgs = lastCallTime = lastThis = timerId = undefined;
                    }
                    function flush() {
                        return timerId === undefined ? result : trailingEdge(now());
                    }
                    function debounced() {
                        var time = now(), isInvoking = shouldInvoke(time);
                        if (lastArgs = arguments, lastThis = this, lastCallTime = time, isInvoking) {
                            if (timerId === undefined) return leadingEdge(lastCallTime);
                            if (maxing) return timerId = setTimeout(timerExpired, wait), invokeFunc(lastCallTime);
                        }
                        return timerId === undefined && (timerId = setTimeout(timerExpired, wait)), result;
                    }
                    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = !1, maxing = !1, trailing = !0;
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return wait = toNumber(wait) || 0, isObject(options) && (leading = !!options.leading, 
                    maxing = "maxWait" in options, maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait, 
                    trailing = "trailing" in options ? !!options.trailing : trailing), debounced.cancel = cancel, 
                    debounced.flush = flush, debounced;
                }
                function flip(func) {
                    return createWrap(func, WRAP_FLIP_FLAG);
                }
                function memoize(func, resolver) {
                    if ("function" != typeof func || null != resolver && "function" != typeof resolver) throw new TypeError(FUNC_ERROR_TEXT);
                    var memoized = function() {
                        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                        if (cache.has(key)) return cache.get(key);
                        var result = func.apply(this, args);
                        return memoized.cache = cache.set(key, result) || cache, result;
                    };
                    return memoized.cache = new (memoize.Cache || MapCache)(), memoized;
                }
                function negate(predicate) {
                    if ("function" != typeof predicate) throw new TypeError(FUNC_ERROR_TEXT);
                    return function() {
                        var args = arguments;
                        switch (args.length) {
                          case 0:
                            return !predicate.call(this);

                          case 1:
                            return !predicate.call(this, args[0]);

                          case 2:
                            return !predicate.call(this, args[0], args[1]);

                          case 3:
                            return !predicate.call(this, args[0], args[1], args[2]);
                        }
                        return !predicate.apply(this, args);
                    };
                }
                function once(func) {
                    return before(2, func);
                }
                function rest(func, start) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return start = start === undefined ? start : toInteger(start), baseRest(func, start);
                }
                function spread(func, start) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return start = null == start ? 0 : nativeMax(toInteger(start), 0), baseRest(function(args) {
                        var array = args[start], otherArgs = castSlice(args, 0, start);
                        return array && arrayPush(otherArgs, array), apply(func, this, otherArgs);
                    });
                }
                function throttle(func, wait, options) {
                    var leading = !0, trailing = !0;
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return isObject(options) && (leading = "leading" in options ? !!options.leading : leading, 
                    trailing = "trailing" in options ? !!options.trailing : trailing), debounce(func, wait, {
                        leading: leading,
                        maxWait: wait,
                        trailing: trailing
                    });
                }
                function unary(func) {
                    return ary(func, 1);
                }
                function wrap(value, wrapper) {
                    return partial(castFunction(wrapper), value);
                }
                function castArray() {
                    if (!arguments.length) return [];
                    var value = arguments[0];
                    return isArray(value) ? value : [ value ];
                }
                function clone(value) {
                    return baseClone(value, CLONE_SYMBOLS_FLAG);
                }
                function cloneWith(value, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
                }
                function cloneDeep(value) {
                    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
                }
                function cloneDeepWith(value, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
                }
                function conformsTo(object, source) {
                    return null == source || baseConformsTo(object, source, keys(source));
                }
                function eq(value, other) {
                    return value === other || value !== value && other !== other;
                }
                function isArrayLike(value) {
                    return null != value && isLength(value.length) && !isFunction(value);
                }
                function isArrayLikeObject(value) {
                    return isObjectLike(value) && isArrayLike(value);
                }
                function isBoolean(value) {
                    return !0 === value || !1 === value || isObjectLike(value) && baseGetTag(value) == boolTag;
                }
                function isElement(value) {
                    return isObjectLike(value) && 1 === value.nodeType && !isPlainObject(value);
                }
                function isEmpty(value) {
                    if (null == value) return !0;
                    if (isArrayLike(value) && (isArray(value) || "string" == typeof value || "function" == typeof value.splice || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
                    var tag = getTag(value);
                    if (tag == mapTag || tag == setTag) return !value.size;
                    if (isPrototype(value)) return !baseKeys(value).length;
                    for (var key in value) if (hasOwnProperty.call(value, key)) return !1;
                    return !0;
                }
                function isEqual(value, other) {
                    return baseIsEqual(value, other);
                }
                function isEqualWith(value, other, customizer) {
                    customizer = "function" == typeof customizer ? customizer : undefined;
                    var result = customizer ? customizer(value, other) : undefined;
                    return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
                }
                function isError(value) {
                    if (!isObjectLike(value)) return !1;
                    var tag = baseGetTag(value);
                    return tag == errorTag || tag == domExcTag || "string" == typeof value.message && "string" == typeof value.name && !isPlainObject(value);
                }
                function isFinite(value) {
                    return "number" == typeof value && nativeIsFinite(value);
                }
                function isFunction(value) {
                    if (!isObject(value)) return !1;
                    var tag = baseGetTag(value);
                    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
                }
                function isInteger(value) {
                    return "number" == typeof value && value == toInteger(value);
                }
                function isLength(value) {
                    return "number" == typeof value && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
                }
                function isObject(value) {
                    var type = typeof value;
                    return null != value && ("object" == type || "function" == type);
                }
                function isObjectLike(value) {
                    return null != value && "object" == typeof value;
                }
                function isMatch(object, source) {
                    return object === source || baseIsMatch(object, source, getMatchData(source));
                }
                function isMatchWith(object, source, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, baseIsMatch(object, source, getMatchData(source), customizer);
                }
                function isNaN(value) {
                    return isNumber(value) && value != +value;
                }
                function isNative(value) {
                    if (isMaskable(value)) throw new Error(CORE_ERROR_TEXT);
                    return baseIsNative(value);
                }
                function isNull(value) {
                    return null === value;
                }
                function isNil(value) {
                    return null == value;
                }
                function isNumber(value) {
                    return "number" == typeof value || isObjectLike(value) && baseGetTag(value) == numberTag;
                }
                function isPlainObject(value) {
                    if (!isObjectLike(value) || baseGetTag(value) != objectTag) return !1;
                    var proto = getPrototype(value);
                    if (null === proto) return !0;
                    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
                    return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
                }
                function isSafeInteger(value) {
                    return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
                }
                function isString(value) {
                    return "string" == typeof value || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
                }
                function isSymbol(value) {
                    return "symbol" == typeof value || isObjectLike(value) && baseGetTag(value) == symbolTag;
                }
                function isUndefined(value) {
                    return value === undefined;
                }
                function isWeakMap(value) {
                    return isObjectLike(value) && getTag(value) == weakMapTag;
                }
                function isWeakSet(value) {
                    return isObjectLike(value) && baseGetTag(value) == weakSetTag;
                }
                function toArray(value) {
                    if (!value) return [];
                    if (isArrayLike(value)) return isString(value) ? stringToArray(value) : copyArray(value);
                    if (symIterator && value[symIterator]) return iteratorToArray(value[symIterator]());
                    var tag = getTag(value);
                    return (tag == mapTag ? mapToArray : tag == setTag ? setToArray : values)(value);
                }
                function toFinite(value) {
                    if (!value) return 0 === value ? value : 0;
                    if ((value = toNumber(value)) === INFINITY || value === -INFINITY) {
                        return (value < 0 ? -1 : 1) * MAX_INTEGER;
                    }
                    return value === value ? value : 0;
                }
                function toInteger(value) {
                    var result = toFinite(value), remainder = result % 1;
                    return result === result ? remainder ? result - remainder : result : 0;
                }
                function toLength(value) {
                    return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
                }
                function toNumber(value) {
                    if ("number" == typeof value) return value;
                    if (isSymbol(value)) return NAN;
                    if (isObject(value)) {
                        var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                        value = isObject(other) ? other + "" : other;
                    }
                    if ("string" != typeof value) return 0 === value ? value : +value;
                    value = value.replace(reTrim, "");
                    var isBinary = reIsBinary.test(value);
                    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
                }
                function toPlainObject(value) {
                    return copyObject(value, keysIn(value));
                }
                function toSafeInteger(value) {
                    return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : 0 === value ? value : 0;
                }
                function toString(value) {
                    return null == value ? "" : baseToString(value);
                }
                function create(prototype, properties) {
                    var result = baseCreate(prototype);
                    return null == properties ? result : baseAssign(result, properties);
                }
                function findKey(object, predicate) {
                    return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
                }
                function findLastKey(object, predicate) {
                    return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
                }
                function forIn(object, iteratee) {
                    return null == object ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
                }
                function forInRight(object, iteratee) {
                    return null == object ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
                }
                function forOwn(object, iteratee) {
                    return object && baseForOwn(object, getIteratee(iteratee, 3));
                }
                function forOwnRight(object, iteratee) {
                    return object && baseForOwnRight(object, getIteratee(iteratee, 3));
                }
                function functions(object) {
                    return null == object ? [] : baseFunctions(object, keys(object));
                }
                function functionsIn(object) {
                    return null == object ? [] : baseFunctions(object, keysIn(object));
                }
                function get(object, path, defaultValue) {
                    var result = null == object ? undefined : baseGet(object, path);
                    return result === undefined ? defaultValue : result;
                }
                function has(object, path) {
                    return null != object && hasPath(object, path, baseHas);
                }
                function hasIn(object, path) {
                    return null != object && hasPath(object, path, baseHasIn);
                }
                function keys(object) {
                    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
                }
                function keysIn(object) {
                    return isArrayLike(object) ? arrayLikeKeys(object, !0) : baseKeysIn(object);
                }
                function mapKeys(object, iteratee) {
                    var result = {};
                    return iteratee = getIteratee(iteratee, 3), baseForOwn(object, function(value, key, object) {
                        baseAssignValue(result, iteratee(value, key, object), value);
                    }), result;
                }
                function mapValues(object, iteratee) {
                    var result = {};
                    return iteratee = getIteratee(iteratee, 3), baseForOwn(object, function(value, key, object) {
                        baseAssignValue(result, key, iteratee(value, key, object));
                    }), result;
                }
                function omitBy(object, predicate) {
                    return pickBy(object, negate(getIteratee(predicate)));
                }
                function pickBy(object, predicate) {
                    if (null == object) return {};
                    var props = arrayMap(getAllKeysIn(object), function(prop) {
                        return [ prop ];
                    });
                    return predicate = getIteratee(predicate), basePickBy(object, props, function(value, path) {
                        return predicate(value, path[0]);
                    });
                }
                function result(object, path, defaultValue) {
                    path = castPath(path, object);
                    var index = -1, length = path.length;
                    for (length || (length = 1, object = undefined); ++index < length; ) {
                        var value = null == object ? undefined : object[toKey(path[index])];
                        value === undefined && (index = length, value = defaultValue), object = isFunction(value) ? value.call(object) : value;
                    }
                    return object;
                }
                function set(object, path, value) {
                    return null == object ? object : baseSet(object, path, value);
                }
                function setWith(object, path, value, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, null == object ? object : baseSet(object, path, value, customizer);
                }
                function transform(object, iteratee, accumulator) {
                    var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
                    if (iteratee = getIteratee(iteratee, 4), null == accumulator) {
                        var Ctor = object && object.constructor;
                        accumulator = isArrLike ? isArr ? new Ctor() : [] : isObject(object) && isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
                    }
                    return (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
                        return iteratee(accumulator, value, index, object);
                    }), accumulator;
                }
                function unset(object, path) {
                    return null == object || baseUnset(object, path);
                }
                function update(object, path, updater) {
                    return null == object ? object : baseUpdate(object, path, castFunction(updater));
                }
                function updateWith(object, path, updater, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, null == object ? object : baseUpdate(object, path, castFunction(updater), customizer);
                }
                function values(object) {
                    return null == object ? [] : baseValues(object, keys(object));
                }
                function valuesIn(object) {
                    return null == object ? [] : baseValues(object, keysIn(object));
                }
                function clamp(number, lower, upper) {
                    return upper === undefined && (upper = lower, lower = undefined), upper !== undefined && (upper = toNumber(upper), 
                    upper = upper === upper ? upper : 0), lower !== undefined && (lower = toNumber(lower), 
                    lower = lower === lower ? lower : 0), baseClamp(toNumber(number), lower, upper);
                }
                function inRange(number, start, end) {
                    return start = toFinite(start), end === undefined ? (end = start, start = 0) : end = toFinite(end), 
                    number = toNumber(number), baseInRange(number, start, end);
                }
                function random(lower, upper, floating) {
                    if (floating && "boolean" != typeof floating && isIterateeCall(lower, upper, floating) && (upper = floating = undefined), 
                    floating === undefined && ("boolean" == typeof upper ? (floating = upper, upper = undefined) : "boolean" == typeof lower && (floating = lower, 
                    lower = undefined)), lower === undefined && upper === undefined ? (lower = 0, upper = 1) : (lower = toFinite(lower), 
                    upper === undefined ? (upper = lower, lower = 0) : upper = toFinite(upper)), lower > upper) {
                        var temp = lower;
                        lower = upper, upper = temp;
                    }
                    if (floating || lower % 1 || upper % 1) {
                        var rand = nativeRandom();
                        return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
                    }
                    return baseRandom(lower, upper);
                }
                function capitalize(string) {
                    return upperFirst(toString(string).toLowerCase());
                }
                function deburr(string) {
                    return (string = toString(string)) && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
                }
                function endsWith(string, target, position) {
                    string = toString(string), target = baseToString(target);
                    var length = string.length;
                    position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
                    var end = position;
                    return (position -= target.length) >= 0 && string.slice(position, end) == target;
                }
                function escape(string) {
                    return string = toString(string), string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
                }
                function escapeRegExp(string) {
                    return string = toString(string), string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
                }
                function pad(string, length, chars) {
                    string = toString(string), length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    if (!length || strLength >= length) return string;
                    var mid = (length - strLength) / 2;
                    return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
                }
                function padEnd(string, length, chars) {
                    string = toString(string), length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
                }
                function padStart(string, length, chars) {
                    string = toString(string), length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
                }
                function parseInt(string, radix, guard) {
                    return guard || null == radix ? radix = 0 : radix && (radix = +radix), nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
                }
                function repeat(string, n, guard) {
                    return n = (guard ? isIterateeCall(string, n, guard) : n === undefined) ? 1 : toInteger(n), 
                    baseRepeat(toString(string), n);
                }
                function replace() {
                    var args = arguments, string = toString(args[0]);
                    return args.length < 3 ? string : string.replace(args[1], args[2]);
                }
                function split(string, separator, limit) {
                    return limit && "number" != typeof limit && isIterateeCall(string, separator, limit) && (separator = limit = undefined), 
                    (limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0) ? (string = toString(string), 
                    string && ("string" == typeof separator || null != separator && !isRegExp(separator)) && !(separator = baseToString(separator)) && hasUnicode(string) ? castSlice(stringToArray(string), 0, limit) : string.split(separator, limit)) : [];
                }
                function startsWith(string, target, position) {
                    return string = toString(string), position = null == position ? 0 : baseClamp(toInteger(position), 0, string.length), 
                    target = baseToString(target), string.slice(position, position + target.length) == target;
                }
                function template(string, options, guard) {
                    var settings = lodash.templateSettings;
                    guard && isIterateeCall(string, options, guard) && (options = undefined), string = toString(string), 
                    options = assignInWith({}, options, settings, customDefaultsAssignIn);
                    var isEscaping, isEvaluating, imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys), index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '", reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g"), sourceURL = "//# sourceURL=" + ("sourceURL" in options ? options.sourceURL : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
                    string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                        return interpolateValue || (interpolateValue = esTemplateValue), source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar), 
                        escapeValue && (isEscaping = !0, source += "' +\n__e(" + escapeValue + ") +\n'"), 
                        evaluateValue && (isEvaluating = !0, source += "';\n" + evaluateValue + ";\n__p += '"), 
                        interpolateValue && (source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'"), 
                        index = offset + match.length, match;
                    }), source += "';\n";
                    var variable = options.variable;
                    variable || (source = "with (obj) {\n" + source + "\n}\n"), source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;"), 
                    source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
                    var result = attempt(function() {
                        return Function(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues);
                    });
                    if (result.source = source, isError(result)) throw result;
                    return result;
                }
                function toLower(value) {
                    return toString(value).toLowerCase();
                }
                function toUpper(value) {
                    return toString(value).toUpperCase();
                }
                function trim(string, chars, guard) {
                    if ((string = toString(string)) && (guard || chars === undefined)) return string.replace(reTrim, "");
                    if (!string || !(chars = baseToString(chars))) return string;
                    var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars);
                    return castSlice(strSymbols, charsStartIndex(strSymbols, chrSymbols), charsEndIndex(strSymbols, chrSymbols) + 1).join("");
                }
                function trimEnd(string, chars, guard) {
                    if ((string = toString(string)) && (guard || chars === undefined)) return string.replace(reTrimEnd, "");
                    if (!string || !(chars = baseToString(chars))) return string;
                    var strSymbols = stringToArray(string);
                    return castSlice(strSymbols, 0, charsEndIndex(strSymbols, stringToArray(chars)) + 1).join("");
                }
                function trimStart(string, chars, guard) {
                    if ((string = toString(string)) && (guard || chars === undefined)) return string.replace(reTrimStart, "");
                    if (!string || !(chars = baseToString(chars))) return string;
                    var strSymbols = stringToArray(string);
                    return castSlice(strSymbols, charsStartIndex(strSymbols, stringToArray(chars))).join("");
                }
                function truncate(string, options) {
                    var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
                    if (isObject(options)) {
                        var separator = "separator" in options ? options.separator : separator;
                        length = "length" in options ? toInteger(options.length) : length, omission = "omission" in options ? baseToString(options.omission) : omission;
                    }
                    string = toString(string);
                    var strLength = string.length;
                    if (hasUnicode(string)) {
                        var strSymbols = stringToArray(string);
                        strLength = strSymbols.length;
                    }
                    if (length >= strLength) return string;
                    var end = length - stringSize(omission);
                    if (end < 1) return omission;
                    var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
                    if (separator === undefined) return result + omission;
                    if (strSymbols && (end += result.length - end), isRegExp(separator)) {
                        if (string.slice(end).search(separator)) {
                            var match, substring = result;
                            for (separator.global || (separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g")), 
                            separator.lastIndex = 0; match = separator.exec(substring); ) var newEnd = match.index;
                            result = result.slice(0, newEnd === undefined ? end : newEnd);
                        }
                    } else if (string.indexOf(baseToString(separator), end) != end) {
                        var index = result.lastIndexOf(separator);
                        index > -1 && (result = result.slice(0, index));
                    }
                    return result + omission;
                }
                function unescape(string) {
                    return string = toString(string), string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
                }
                function words(string, pattern, guard) {
                    return string = toString(string), pattern = guard ? undefined : pattern, pattern === undefined ? hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string) : string.match(pattern) || [];
                }
                function cond(pairs) {
                    var length = null == pairs ? 0 : pairs.length, toIteratee = getIteratee();
                    return pairs = length ? arrayMap(pairs, function(pair) {
                        if ("function" != typeof pair[1]) throw new TypeError(FUNC_ERROR_TEXT);
                        return [ toIteratee(pair[0]), pair[1] ];
                    }) : [], baseRest(function(args) {
                        for (var index = -1; ++index < length; ) {
                            var pair = pairs[index];
                            if (apply(pair[0], this, args)) return apply(pair[1], this, args);
                        }
                    });
                }
                function conforms(source) {
                    return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
                }
                function constant(value) {
                    return function() {
                        return value;
                    };
                }
                function defaultTo(value, defaultValue) {
                    return null == value || value !== value ? defaultValue : value;
                }
                function identity(value) {
                    return value;
                }
                function iteratee(func) {
                    return baseIteratee("function" == typeof func ? func : baseClone(func, CLONE_DEEP_FLAG));
                }
                function matches(source) {
                    return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
                }
                function matchesProperty(path, srcValue) {
                    return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
                }
                function mixin(object, source, options) {
                    var props = keys(source), methodNames = baseFunctions(source, props);
                    null != options || isObject(source) && (methodNames.length || !props.length) || (options = source, 
                    source = object, object = this, methodNames = baseFunctions(source, keys(source)));
                    var chain = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
                    return arrayEach(methodNames, function(methodName) {
                        var func = source[methodName];
                        object[methodName] = func, isFunc && (object.prototype[methodName] = function() {
                            var chainAll = this.__chain__;
                            if (chain || chainAll) {
                                var result = object(this.__wrapped__);
                                return (result.__actions__ = copyArray(this.__actions__)).push({
                                    func: func,
                                    args: arguments,
                                    thisArg: object
                                }), result.__chain__ = chainAll, result;
                            }
                            return func.apply(object, arrayPush([ this.value() ], arguments));
                        });
                    }), object;
                }
                function noConflict() {
                    return root._ === this && (root._ = oldDash), this;
                }
                function noop() {}
                function nthArg(n) {
                    return n = toInteger(n), baseRest(function(args) {
                        return baseNth(args, n);
                    });
                }
                function property(path) {
                    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
                }
                function propertyOf(object) {
                    return function(path) {
                        return null == object ? undefined : baseGet(object, path);
                    };
                }
                function stubArray() {
                    return [];
                }
                function stubFalse() {
                    return !1;
                }
                function stubObject() {
                    return {};
                }
                function stubString() {
                    return "";
                }
                function stubTrue() {
                    return !0;
                }
                function times(n, iteratee) {
                    if ((n = toInteger(n)) < 1 || n > MAX_SAFE_INTEGER) return [];
                    var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
                    iteratee = getIteratee(iteratee), n -= MAX_ARRAY_LENGTH;
                    for (var result = baseTimes(length, iteratee); ++index < n; ) iteratee(index);
                    return result;
                }
                function toPath(value) {
                    return isArray(value) ? arrayMap(value, toKey) : isSymbol(value) ? [ value ] : copyArray(stringToPath(toString(value)));
                }
                function uniqueId(prefix) {
                    var id = ++idCounter;
                    return toString(prefix) + id;
                }
                function max(array) {
                    return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
                }
                function maxBy(array, iteratee) {
                    return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
                }
                function mean(array) {
                    return baseMean(array, identity);
                }
                function meanBy(array, iteratee) {
                    return baseMean(array, getIteratee(iteratee, 2));
                }
                function min(array) {
                    return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
                }
                function minBy(array, iteratee) {
                    return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
                }
                function sum(array) {
                    return array && array.length ? baseSum(array, identity) : 0;
                }
                function sumBy(array, iteratee) {
                    return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
                }
                context = null == context ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
                var Array = context.Array, Date = context.Date, Error = context.Error, Function = context.Function, Math = context.Math, Object = context.Object, RegExp = context.RegExp, String = context.String, TypeError = context.TypeError, arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = context["__core-js_shared__"], funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, idCounter = 0, maskSrcKey = function() {
                    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
                    return uid ? "Symbol(src)_1." + uid : "";
                }(), nativeObjectToString = objectProto.toString, objectCtorString = funcToString.call(Object), oldDash = root._, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Buffer = chunkExports ? context.Buffer : undefined, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined, symIterator = Symbol ? Symbol.iterator : undefined, symToStringTag = Symbol ? Symbol.toStringTag : undefined, defineProperty = function() {
                    try {
                        var func = getNative(Object, "defineProperty");
                        return func({}, "", {}), func;
                    } catch (e) {}
                }(), ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout, nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse, DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object, "create"), metaMap = WeakMap && new WeakMap(), realNames = {}, dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap), symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined, baseCreate = function() {
                    function object() {}
                    return function(proto) {
                        if (!isObject(proto)) return {};
                        if (objectCreate) return objectCreate(proto);
                        object.prototype = proto;
                        var result = new object();
                        return object.prototype = undefined, result;
                    };
                }();
                lodash.templateSettings = {
                    escape: reEscape,
                    evaluate: reEvaluate,
                    interpolate: reInterpolate,
                    variable: "",
                    imports: {
                        _: lodash
                    }
                }, lodash.prototype = baseLodash.prototype, lodash.prototype.constructor = lodash, 
                LodashWrapper.prototype = baseCreate(baseLodash.prototype), LodashWrapper.prototype.constructor = LodashWrapper, 
                LazyWrapper.prototype = baseCreate(baseLodash.prototype), LazyWrapper.prototype.constructor = LazyWrapper, 
                Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, 
                Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, 
                ListCache.prototype.delete = listCacheDelete, ListCache.prototype.get = listCacheGet, 
                ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, 
                MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, 
                MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, 
                SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas, 
                Stack.prototype.clear = stackClear, Stack.prototype.delete = stackDelete, Stack.prototype.get = stackGet, 
                Stack.prototype.has = stackHas, Stack.prototype.set = stackSet;
                var baseEach = createBaseEach(baseForOwn), baseEachRight = createBaseEach(baseForOwnRight, !0), baseFor = createBaseFor(), baseForRight = createBaseFor(!0), baseSetData = metaMap ? function(func, data) {
                    return metaMap.set(func, data), func;
                } : identity, baseSetToString = defineProperty ? function(func, string) {
                    return defineProperty(func, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: constant(string),
                        writable: !0
                    });
                } : identity, castRest = baseRest, clearTimeout = ctxClearTimeout || function(id) {
                    return root.clearTimeout(id);
                }, createSet = Set && 1 / setToArray(new Set([ , -0 ]))[1] == INFINITY ? function(values) {
                    return new Set(values);
                } : noop, getData = metaMap ? function(func) {
                    return metaMap.get(func);
                } : noop, getSymbols = nativeGetSymbols ? function(object) {
                    return null == object ? [] : (object = Object(object), arrayFilter(nativeGetSymbols(object), function(symbol) {
                        return propertyIsEnumerable.call(object, symbol);
                    }));
                } : stubArray, getSymbolsIn = nativeGetSymbols ? function(object) {
                    for (var result = []; object; ) arrayPush(result, getSymbols(object)), object = getPrototype(object);
                    return result;
                } : stubArray, getTag = baseGetTag;
                (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && "[object Promise]" != getTag(Promise.resolve()) || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(value) {
                    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
                    if (ctorString) switch (ctorString) {
                      case dataViewCtorString:
                        return dataViewTag;

                      case mapCtorString:
                        return mapTag;

                      case promiseCtorString:
                        return "[object Promise]";

                      case setCtorString:
                        return setTag;

                      case weakMapCtorString:
                        return weakMapTag;
                    }
                    return result;
                });
                var isMaskable = coreJsData ? isFunction : stubFalse, setData = shortOut(baseSetData), setTimeout = ctxSetTimeout || function(func, wait) {
                    return root.setTimeout(func, wait);
                }, setToString = shortOut(baseSetToString), stringToPath = function(func) {
                    var result = memoize(func, function(key) {
                        return cache.size === MAX_MEMOIZE_SIZE && cache.clear(), key;
                    }), cache = result.cache;
                    return result;
                }(function(string) {
                    var result = [];
                    return reLeadingDot.test(string) && result.push(""), string.replace(rePropName, function(match, number, quote, string) {
                        result.push(quote ? string.replace(reEscapeChar, "$1") : number || match);
                    }), result;
                }), difference = baseRest(function(array, values) {
                    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0)) : [];
                }), differenceBy = baseRest(function(array, values) {
                    var iteratee = last(values);
                    return isArrayLikeObject(iteratee) && (iteratee = undefined), isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0), getIteratee(iteratee, 2)) : [];
                }), differenceWith = baseRest(function(array, values) {
                    var comparator = last(values);
                    return isArrayLikeObject(comparator) && (comparator = undefined), isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0), undefined, comparator) : [];
                }), intersection = baseRest(function(arrays) {
                    var mapped = arrayMap(arrays, castArrayLikeObject);
                    return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
                }), intersectionBy = baseRest(function(arrays) {
                    var iteratee = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
                    return iteratee === last(mapped) ? iteratee = undefined : mapped.pop(), mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
                }), intersectionWith = baseRest(function(arrays) {
                    var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
                    return comparator = "function" == typeof comparator ? comparator : undefined, comparator && mapped.pop(), 
                    mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
                }), pull = baseRest(pullAll), pullAt = flatRest(function(array, indexes) {
                    var length = null == array ? 0 : array.length, result = baseAt(array, indexes);
                    return basePullAt(array, arrayMap(indexes, function(index) {
                        return isIndex(index, length) ? +index : index;
                    }).sort(compareAscending)), result;
                }), union = baseRest(function(arrays) {
                    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0));
                }), unionBy = baseRest(function(arrays) {
                    var iteratee = last(arrays);
                    return isArrayLikeObject(iteratee) && (iteratee = undefined), baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0), getIteratee(iteratee, 2));
                }), unionWith = baseRest(function(arrays) {
                    var comparator = last(arrays);
                    return comparator = "function" == typeof comparator ? comparator : undefined, baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0), undefined, comparator);
                }), without = baseRest(function(array, values) {
                    return isArrayLikeObject(array) ? baseDifference(array, values) : [];
                }), xor = baseRest(function(arrays) {
                    return baseXor(arrayFilter(arrays, isArrayLikeObject));
                }), xorBy = baseRest(function(arrays) {
                    var iteratee = last(arrays);
                    return isArrayLikeObject(iteratee) && (iteratee = undefined), baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
                }), xorWith = baseRest(function(arrays) {
                    var comparator = last(arrays);
                    return comparator = "function" == typeof comparator ? comparator : undefined, baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
                }), zip = baseRest(unzip), zipWith = baseRest(function(arrays) {
                    var length = arrays.length, iteratee = length > 1 ? arrays[length - 1] : undefined;
                    return iteratee = "function" == typeof iteratee ? (arrays.pop(), iteratee) : undefined, 
                    unzipWith(arrays, iteratee);
                }), wrapperAt = flatRest(function(paths) {
                    var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
                        return baseAt(object, paths);
                    };
                    return !(length > 1 || this.__actions__.length) && value instanceof LazyWrapper && isIndex(start) ? (value = value.slice(start, +start + (length ? 1 : 0)), 
                    value.__actions__.push({
                        func: thru,
                        args: [ interceptor ],
                        thisArg: undefined
                    }), new LodashWrapper(value, this.__chain__).thru(function(array) {
                        return length && !array.length && array.push(undefined), array;
                    })) : this.thru(interceptor);
                }), countBy = createAggregator(function(result, value, key) {
                    hasOwnProperty.call(result, key) ? ++result[key] : baseAssignValue(result, key, 1);
                }), find = createFind(findIndex), findLast = createFind(findLastIndex), groupBy = createAggregator(function(result, value, key) {
                    hasOwnProperty.call(result, key) ? result[key].push(value) : baseAssignValue(result, key, [ value ]);
                }), invokeMap = baseRest(function(collection, path, args) {
                    var index = -1, isFunc = "function" == typeof path, result = isArrayLike(collection) ? Array(collection.length) : [];
                    return baseEach(collection, function(value) {
                        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
                    }), result;
                }), keyBy = createAggregator(function(result, value, key) {
                    baseAssignValue(result, key, value);
                }), partition = createAggregator(function(result, value, key) {
                    result[key ? 0 : 1].push(value);
                }, function() {
                    return [ [], [] ];
                }), sortBy = baseRest(function(collection, iteratees) {
                    if (null == collection) return [];
                    var length = iteratees.length;
                    return length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1]) ? iteratees = [] : length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2]) && (iteratees = [ iteratees[0] ]), 
                    baseOrderBy(collection, baseFlatten(iteratees, 1), []);
                }), now = ctxNow || function() {
                    return root.Date.now();
                }, bind = baseRest(function(func, thisArg, partials) {
                    var bitmask = WRAP_BIND_FLAG;
                    if (partials.length) {
                        var holders = replaceHolders(partials, getHolder(bind));
                        bitmask |= WRAP_PARTIAL_FLAG;
                    }
                    return createWrap(func, bitmask, thisArg, partials, holders);
                }), bindKey = baseRest(function(object, key, partials) {
                    var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
                    if (partials.length) {
                        var holders = replaceHolders(partials, getHolder(bindKey));
                        bitmask |= WRAP_PARTIAL_FLAG;
                    }
                    return createWrap(key, bitmask, object, partials, holders);
                }), defer = baseRest(function(func, args) {
                    return baseDelay(func, 1, args);
                }), delay = baseRest(function(func, wait, args) {
                    return baseDelay(func, toNumber(wait) || 0, args);
                });
                memoize.Cache = MapCache;
                var overArgs = castRest(function(func, transforms) {
                    transforms = 1 == transforms.length && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
                    var funcsLength = transforms.length;
                    return baseRest(function(args) {
                        for (var index = -1, length = nativeMin(args.length, funcsLength); ++index < length; ) args[index] = transforms[index].call(this, args[index]);
                        return apply(func, this, args);
                    });
                }), partial = baseRest(function(func, partials) {
                    var holders = replaceHolders(partials, getHolder(partial));
                    return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
                }), partialRight = baseRest(function(func, partials) {
                    var holders = replaceHolders(partials, getHolder(partialRight));
                    return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
                }), rearg = flatRest(function(func, indexes) {
                    return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
                }), gt = createRelationalOperation(baseGt), gte = createRelationalOperation(function(value, other) {
                    return value >= other;
                }), isArguments = baseIsArguments(function() {
                    return arguments;
                }()) ? baseIsArguments : function(value) {
                    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
                }, isArray = Array.isArray, isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer, isBuffer = nativeIsBuffer || stubFalse, isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate, isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap, isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp, isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet, isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray, lt = createRelationalOperation(baseLt), lte = createRelationalOperation(function(value, other) {
                    return value <= other;
                }), assign = createAssigner(function(object, source) {
                    if (isPrototype(source) || isArrayLike(source)) return void copyObject(source, keys(source), object);
                    for (var key in source) hasOwnProperty.call(source, key) && assignValue(object, key, source[key]);
                }), assignIn = createAssigner(function(object, source) {
                    copyObject(source, keysIn(source), object);
                }), assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
                    copyObject(source, keysIn(source), object, customizer);
                }), assignWith = createAssigner(function(object, source, srcIndex, customizer) {
                    copyObject(source, keys(source), object, customizer);
                }), at = flatRest(baseAt), defaults = baseRest(function(args) {
                    return args.push(undefined, customDefaultsAssignIn), apply(assignInWith, undefined, args);
                }), defaultsDeep = baseRest(function(args) {
                    return args.push(undefined, customDefaultsMerge), apply(mergeWith, undefined, args);
                }), invert = createInverter(function(result, value, key) {
                    result[value] = key;
                }, constant(identity)), invertBy = createInverter(function(result, value, key) {
                    hasOwnProperty.call(result, value) ? result[value].push(key) : result[value] = [ key ];
                }, getIteratee), invoke = baseRest(baseInvoke), merge = createAssigner(function(object, source, srcIndex) {
                    baseMerge(object, source, srcIndex);
                }), mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
                    baseMerge(object, source, srcIndex, customizer);
                }), omit = flatRest(function(object, paths) {
                    var result = {};
                    if (null == object) return result;
                    var isDeep = !1;
                    paths = arrayMap(paths, function(path) {
                        return path = castPath(path, object), isDeep || (isDeep = path.length > 1), path;
                    }), copyObject(object, getAllKeysIn(object), result), isDeep && (result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone));
                    for (var length = paths.length; length--; ) baseUnset(result, paths[length]);
                    return result;
                }), pick = flatRest(function(object, paths) {
                    return null == object ? {} : basePick(object, paths);
                }), toPairs = createToPairs(keys), toPairsIn = createToPairs(keysIn), camelCase = createCompounder(function(result, word, index) {
                    return word = word.toLowerCase(), result + (index ? capitalize(word) : word);
                }), kebabCase = createCompounder(function(result, word, index) {
                    return result + (index ? "-" : "") + word.toLowerCase();
                }), lowerCase = createCompounder(function(result, word, index) {
                    return result + (index ? " " : "") + word.toLowerCase();
                }), lowerFirst = createCaseFirst("toLowerCase"), snakeCase = createCompounder(function(result, word, index) {
                    return result + (index ? "_" : "") + word.toLowerCase();
                }), startCase = createCompounder(function(result, word, index) {
                    return result + (index ? " " : "") + upperFirst(word);
                }), upperCase = createCompounder(function(result, word, index) {
                    return result + (index ? " " : "") + word.toUpperCase();
                }), upperFirst = createCaseFirst("toUpperCase"), attempt = baseRest(function(func, args) {
                    try {
                        return apply(func, undefined, args);
                    } catch (e) {
                        return isError(e) ? e : new Error(e);
                    }
                }), bindAll = flatRest(function(object, methodNames) {
                    return arrayEach(methodNames, function(key) {
                        key = toKey(key), baseAssignValue(object, key, bind(object[key], object));
                    }), object;
                }), flow = createFlow(), flowRight = createFlow(!0), method = baseRest(function(path, args) {
                    return function(object) {
                        return baseInvoke(object, path, args);
                    };
                }), methodOf = baseRest(function(object, args) {
                    return function(path) {
                        return baseInvoke(object, path, args);
                    };
                }), over = createOver(arrayMap), overEvery = createOver(arrayEvery), overSome = createOver(arraySome), range = createRange(), rangeRight = createRange(!0), add = createMathOperation(function(augend, addend) {
                    return augend + addend;
                }, 0), ceil = createRound("ceil"), divide = createMathOperation(function(dividend, divisor) {
                    return dividend / divisor;
                }, 1), floor = createRound("floor"), multiply = createMathOperation(function(multiplier, multiplicand) {
                    return multiplier * multiplicand;
                }, 1), round = createRound("round"), subtract = createMathOperation(function(minuend, subtrahend) {
                    return minuend - subtrahend;
                }, 0);
                return lodash.after = after, lodash.ary = ary, lodash.assign = assign, lodash.assignIn = assignIn, 
                lodash.assignInWith = assignInWith, lodash.assignWith = assignWith, lodash.at = at, 
                lodash.before = before, lodash.bind = bind, lodash.bindAll = bindAll, lodash.bindKey = bindKey, 
                lodash.castArray = castArray, lodash.chain = chain, lodash.chunk = chunk, lodash.compact = compact, 
                lodash.concat = concat, lodash.cond = cond, lodash.conforms = conforms, lodash.constant = constant, 
                lodash.countBy = countBy, lodash.create = create, lodash.curry = curry, lodash.curryRight = curryRight, 
                lodash.debounce = debounce, lodash.defaults = defaults, lodash.defaultsDeep = defaultsDeep, 
                lodash.defer = defer, lodash.delay = delay, lodash.difference = difference, lodash.differenceBy = differenceBy, 
                lodash.differenceWith = differenceWith, lodash.drop = drop, lodash.dropRight = dropRight, 
                lodash.dropRightWhile = dropRightWhile, lodash.dropWhile = dropWhile, lodash.fill = fill, 
                lodash.filter = filter, lodash.flatMap = flatMap, lodash.flatMapDeep = flatMapDeep, 
                lodash.flatMapDepth = flatMapDepth, lodash.flatten = flatten, lodash.flattenDeep = flattenDeep, 
                lodash.flattenDepth = flattenDepth, lodash.flip = flip, lodash.flow = flow, lodash.flowRight = flowRight, 
                lodash.fromPairs = fromPairs, lodash.functions = functions, lodash.functionsIn = functionsIn, 
                lodash.groupBy = groupBy, lodash.initial = initial, lodash.intersection = intersection, 
                lodash.intersectionBy = intersectionBy, lodash.intersectionWith = intersectionWith, 
                lodash.invert = invert, lodash.invertBy = invertBy, lodash.invokeMap = invokeMap, 
                lodash.iteratee = iteratee, lodash.keyBy = keyBy, lodash.keys = keys, lodash.keysIn = keysIn, 
                lodash.map = map, lodash.mapKeys = mapKeys, lodash.mapValues = mapValues, lodash.matches = matches, 
                lodash.matchesProperty = matchesProperty, lodash.memoize = memoize, lodash.merge = merge, 
                lodash.mergeWith = mergeWith, lodash.method = method, lodash.methodOf = methodOf, 
                lodash.mixin = mixin, lodash.negate = negate, lodash.nthArg = nthArg, lodash.omit = omit, 
                lodash.omitBy = omitBy, lodash.once = once, lodash.orderBy = orderBy, lodash.over = over, 
                lodash.overArgs = overArgs, lodash.overEvery = overEvery, lodash.overSome = overSome, 
                lodash.partial = partial, lodash.partialRight = partialRight, lodash.partition = partition, 
                lodash.pick = pick, lodash.pickBy = pickBy, lodash.property = property, lodash.propertyOf = propertyOf, 
                lodash.pull = pull, lodash.pullAll = pullAll, lodash.pullAllBy = pullAllBy, lodash.pullAllWith = pullAllWith, 
                lodash.pullAt = pullAt, lodash.range = range, lodash.rangeRight = rangeRight, lodash.rearg = rearg, 
                lodash.reject = reject, lodash.remove = remove, lodash.rest = rest, lodash.reverse = reverse, 
                lodash.sampleSize = sampleSize, lodash.set = set, lodash.setWith = setWith, lodash.shuffle = shuffle, 
                lodash.slice = slice, lodash.sortBy = sortBy, lodash.sortedUniq = sortedUniq, lodash.sortedUniqBy = sortedUniqBy, 
                lodash.split = split, lodash.spread = spread, lodash.tail = tail, lodash.take = take, 
                lodash.takeRight = takeRight, lodash.takeRightWhile = takeRightWhile, lodash.takeWhile = takeWhile, 
                lodash.tap = tap, lodash.throttle = throttle, lodash.thru = thru, lodash.toArray = toArray, 
                lodash.toPairs = toPairs, lodash.toPairsIn = toPairsIn, lodash.toPath = toPath, 
                lodash.toPlainObject = toPlainObject, lodash.transform = transform, lodash.unary = unary, 
                lodash.union = union, lodash.unionBy = unionBy, lodash.unionWith = unionWith, lodash.uniq = uniq, 
                lodash.uniqBy = uniqBy, lodash.uniqWith = uniqWith, lodash.unset = unset, lodash.unzip = unzip, 
                lodash.unzipWith = unzipWith, lodash.update = update, lodash.updateWith = updateWith, 
                lodash.values = values, lodash.valuesIn = valuesIn, lodash.without = without, lodash.words = words, 
                lodash.wrap = wrap, lodash.xor = xor, lodash.xorBy = xorBy, lodash.xorWith = xorWith, 
                lodash.zip = zip, lodash.zipObject = zipObject, lodash.zipObjectDeep = zipObjectDeep, 
                lodash.zipWith = zipWith, lodash.entries = toPairs, lodash.entriesIn = toPairsIn, 
                lodash.extend = assignIn, lodash.extendWith = assignInWith, mixin(lodash, lodash), 
                lodash.add = add, lodash.attempt = attempt, lodash.camelCase = camelCase, lodash.capitalize = capitalize, 
                lodash.ceil = ceil, lodash.clamp = clamp, lodash.clone = clone, lodash.cloneDeep = cloneDeep, 
                lodash.cloneDeepWith = cloneDeepWith, lodash.cloneWith = cloneWith, lodash.conformsTo = conformsTo, 
                lodash.deburr = deburr, lodash.defaultTo = defaultTo, lodash.divide = divide, lodash.endsWith = endsWith, 
                lodash.eq = eq, lodash.escape = escape, lodash.escapeRegExp = escapeRegExp, lodash.every = every, 
                lodash.find = find, lodash.findIndex = findIndex, lodash.findKey = findKey, lodash.findLast = findLast, 
                lodash.findLastIndex = findLastIndex, lodash.findLastKey = findLastKey, lodash.floor = floor, 
                lodash.forEach = forEach, lodash.forEachRight = forEachRight, lodash.forIn = forIn, 
                lodash.forInRight = forInRight, lodash.forOwn = forOwn, lodash.forOwnRight = forOwnRight, 
                lodash.get = get, lodash.gt = gt, lodash.gte = gte, lodash.has = has, lodash.hasIn = hasIn, 
                lodash.head = head, lodash.identity = identity, lodash.includes = includes, lodash.indexOf = indexOf, 
                lodash.inRange = inRange, lodash.invoke = invoke, lodash.isArguments = isArguments, 
                lodash.isArray = isArray, lodash.isArrayBuffer = isArrayBuffer, lodash.isArrayLike = isArrayLike, 
                lodash.isArrayLikeObject = isArrayLikeObject, lodash.isBoolean = isBoolean, lodash.isBuffer = isBuffer, 
                lodash.isDate = isDate, lodash.isElement = isElement, lodash.isEmpty = isEmpty, 
                lodash.isEqual = isEqual, lodash.isEqualWith = isEqualWith, lodash.isError = isError, 
                lodash.isFinite = isFinite, lodash.isFunction = isFunction, lodash.isInteger = isInteger, 
                lodash.isLength = isLength, lodash.isMap = isMap, lodash.isMatch = isMatch, lodash.isMatchWith = isMatchWith, 
                lodash.isNaN = isNaN, lodash.isNative = isNative, lodash.isNil = isNil, lodash.isNull = isNull, 
                lodash.isNumber = isNumber, lodash.isObject = isObject, lodash.isObjectLike = isObjectLike, 
                lodash.isPlainObject = isPlainObject, lodash.isRegExp = isRegExp, lodash.isSafeInteger = isSafeInteger, 
                lodash.isSet = isSet, lodash.isString = isString, lodash.isSymbol = isSymbol, lodash.isTypedArray = isTypedArray, 
                lodash.isUndefined = isUndefined, lodash.isWeakMap = isWeakMap, lodash.isWeakSet = isWeakSet, 
                lodash.join = join, lodash.kebabCase = kebabCase, lodash.last = last, lodash.lastIndexOf = lastIndexOf, 
                lodash.lowerCase = lowerCase, lodash.lowerFirst = lowerFirst, lodash.lt = lt, lodash.lte = lte, 
                lodash.max = max, lodash.maxBy = maxBy, lodash.mean = mean, lodash.meanBy = meanBy, 
                lodash.min = min, lodash.minBy = minBy, lodash.stubArray = stubArray, lodash.stubFalse = stubFalse, 
                lodash.stubObject = stubObject, lodash.stubString = stubString, lodash.stubTrue = stubTrue, 
                lodash.multiply = multiply, lodash.nth = nth, lodash.noConflict = noConflict, lodash.noop = noop, 
                lodash.now = now, lodash.pad = pad, lodash.padEnd = padEnd, lodash.padStart = padStart, 
                lodash.parseInt = parseInt, lodash.random = random, lodash.reduce = reduce, lodash.reduceRight = reduceRight, 
                lodash.repeat = repeat, lodash.replace = replace, lodash.result = result, lodash.round = round, 
                lodash.runInContext = runInContext, lodash.sample = sample, lodash.size = size, 
                lodash.snakeCase = snakeCase, lodash.some = some, lodash.sortedIndex = sortedIndex, 
                lodash.sortedIndexBy = sortedIndexBy, lodash.sortedIndexOf = sortedIndexOf, lodash.sortedLastIndex = sortedLastIndex, 
                lodash.sortedLastIndexBy = sortedLastIndexBy, lodash.sortedLastIndexOf = sortedLastIndexOf, 
                lodash.startCase = startCase, lodash.startsWith = startsWith, lodash.subtract = subtract, 
                lodash.sum = sum, lodash.sumBy = sumBy, lodash.template = template, lodash.times = times, 
                lodash.toFinite = toFinite, lodash.toInteger = toInteger, lodash.toLength = toLength, 
                lodash.toLower = toLower, lodash.toNumber = toNumber, lodash.toSafeInteger = toSafeInteger, 
                lodash.toString = toString, lodash.toUpper = toUpper, lodash.trim = trim, lodash.trimEnd = trimEnd, 
                lodash.trimStart = trimStart, lodash.truncate = truncate, lodash.unescape = unescape, 
                lodash.uniqueId = uniqueId, lodash.upperCase = upperCase, lodash.upperFirst = upperFirst, 
                lodash.each = forEach, lodash.eachRight = forEachRight, lodash.first = head, mixin(lodash, function() {
                    var source = {};
                    return baseForOwn(lodash, function(func, methodName) {
                        hasOwnProperty.call(lodash.prototype, methodName) || (source[methodName] = func);
                    }), source;
                }(), {
                    chain: !1
                }), lodash.VERSION = "4.17.4", arrayEach([ "bind", "bindKey", "curry", "curryRight", "partial", "partialRight" ], function(methodName) {
                    lodash[methodName].placeholder = lodash;
                }), arrayEach([ "drop", "take" ], function(methodName, index) {
                    LazyWrapper.prototype[methodName] = function(n) {
                        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
                        var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
                        return result.__filtered__ ? result.__takeCount__ = nativeMin(n, result.__takeCount__) : result.__views__.push({
                            size: nativeMin(n, MAX_ARRAY_LENGTH),
                            type: methodName + (result.__dir__ < 0 ? "Right" : "")
                        }), result;
                    }, LazyWrapper.prototype[methodName + "Right"] = function(n) {
                        return this.reverse()[methodName](n).reverse();
                    };
                }), arrayEach([ "filter", "map", "takeWhile" ], function(methodName, index) {
                    var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || 3 == type;
                    LazyWrapper.prototype[methodName] = function(iteratee) {
                        var result = this.clone();
                        return result.__iteratees__.push({
                            iteratee: getIteratee(iteratee, 3),
                            type: type
                        }), result.__filtered__ = result.__filtered__ || isFilter, result;
                    };
                }), arrayEach([ "head", "last" ], function(methodName, index) {
                    var takeName = "take" + (index ? "Right" : "");
                    LazyWrapper.prototype[methodName] = function() {
                        return this[takeName](1).value()[0];
                    };
                }), arrayEach([ "initial", "tail" ], function(methodName, index) {
                    var dropName = "drop" + (index ? "" : "Right");
                    LazyWrapper.prototype[methodName] = function() {
                        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
                    };
                }), LazyWrapper.prototype.compact = function() {
                    return this.filter(identity);
                }, LazyWrapper.prototype.find = function(predicate) {
                    return this.filter(predicate).head();
                }, LazyWrapper.prototype.findLast = function(predicate) {
                    return this.reverse().find(predicate);
                }, LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
                    return "function" == typeof path ? new LazyWrapper(this) : this.map(function(value) {
                        return baseInvoke(value, path, args);
                    });
                }), LazyWrapper.prototype.reject = function(predicate) {
                    return this.filter(negate(getIteratee(predicate)));
                }, LazyWrapper.prototype.slice = function(start, end) {
                    start = toInteger(start);
                    var result = this;
                    return result.__filtered__ && (start > 0 || end < 0) ? new LazyWrapper(result) : (start < 0 ? result = result.takeRight(-start) : start && (result = result.drop(start)), 
                    end !== undefined && (end = toInteger(end), result = end < 0 ? result.dropRight(-end) : result.take(end - start)), 
                    result);
                }, LazyWrapper.prototype.takeRightWhile = function(predicate) {
                    return this.reverse().takeWhile(predicate).reverse();
                }, LazyWrapper.prototype.toArray = function() {
                    return this.take(MAX_ARRAY_LENGTH);
                }, baseForOwn(LazyWrapper.prototype, function(func, methodName) {
                    var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + ("last" == methodName ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
                    lodashFunc && (lodash.prototype[methodName] = function() {
                        var value = this.__wrapped__, args = isTaker ? [ 1 ] : arguments, isLazy = value instanceof LazyWrapper, iteratee = args[0], useLazy = isLazy || isArray(value), interceptor = function(value) {
                            var result = lodashFunc.apply(lodash, arrayPush([ value ], args));
                            return isTaker && chainAll ? result[0] : result;
                        };
                        useLazy && checkIteratee && "function" == typeof iteratee && 1 != iteratee.length && (isLazy = useLazy = !1);
                        var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
                        if (!retUnwrapped && useLazy) {
                            value = onlyLazy ? value : new LazyWrapper(this);
                            var result = func.apply(value, args);
                            return result.__actions__.push({
                                func: thru,
                                args: [ interceptor ],
                                thisArg: undefined
                            }), new LodashWrapper(result, chainAll);
                        }
                        return isUnwrapped && onlyLazy ? func.apply(this, args) : (result = this.thru(interceptor), 
                        isUnwrapped ? isTaker ? result.value()[0] : result.value() : result);
                    });
                }), arrayEach([ "pop", "push", "shift", "sort", "splice", "unshift" ], function(methodName) {
                    var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
                    lodash.prototype[methodName] = function() {
                        var args = arguments;
                        if (retUnwrapped && !this.__chain__) {
                            var value = this.value();
                            return func.apply(isArray(value) ? value : [], args);
                        }
                        return this[chainName](function(value) {
                            return func.apply(isArray(value) ? value : [], args);
                        });
                    };
                }), baseForOwn(LazyWrapper.prototype, function(func, methodName) {
                    var lodashFunc = lodash[methodName];
                    if (lodashFunc) {
                        var key = lodashFunc.name + "";
                        (realNames[key] || (realNames[key] = [])).push({
                            name: methodName,
                            func: lodashFunc
                        });
                    }
                }), realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [ {
                    name: "wrapper",
                    func: undefined
                } ], LazyWrapper.prototype.clone = lazyClone, LazyWrapper.prototype.reverse = lazyReverse, 
                LazyWrapper.prototype.value = lazyValue, lodash.prototype.at = wrapperAt, lodash.prototype.chain = wrapperChain, 
                lodash.prototype.commit = wrapperCommit, lodash.prototype.next = wrapperNext, lodash.prototype.plant = wrapperPlant, 
                lodash.prototype.reverse = wrapperReverse, lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue, 
                lodash.prototype.first = lodash.prototype.head, symIterator && (lodash.prototype[symIterator] = wrapperToIterator), 
                lodash;
            }();
            root._ = _, (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return _;
            }.call(pear, __Activision_blizzard__, pear, chunk)) !== undefined && (chunk.pear = __WEBPACK_AMD_DEFINE_RESULT__);
        }).call(this);
    }).call(pear, __Activision_blizzard__(58), __Activision_blizzard__(59)(chunk));
}, function(chunk, pear) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || Function("return this")() || (0, eval)("this");
    } catch (e) {
        "object" === typeof window && (g = window);
    }
    chunk.pear = g;
}, function(chunk, pear) {
    chunk.pear = function(chunk) {
        return chunk.ActivisionPolyfill || (chunk.deprecate = function() {}, chunk.paths = [], 
        chunk.children || (chunk.children = []), Object.defineProperty(chunk, "loaded", {
            enumerable: !0,
            get: function() {
                return chunk.l;
            }
        }), Object.defineProperty(chunk, "id", {
            enumerable: !0,
            get: function() {
                return chunk.i;
            }
        }), chunk.ActivisionPolyfill = 1), chunk;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, _typeof2 = __Activision_blizzard__(61), _typeof3 = function(obj) {
        return obj && obj.EP ? obj : {
            default: obj
        };
    }(_typeof2), _d = __Activision_blizzard__(34), d3 = function(obj) {
        if (obj && obj.EP) return obj;
        var newObj = {};
        if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
        return newObj.default = obj, newObj;
    }(_d);
    !function(global, factory) {
        "object" === (0, _typeof3.default)(pear) && "undefined" !== typeof chunk ? factory(pear) : (__WEBPACK_AMD_DEFINE_ARRAY__ = [ pear ], 
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" === typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(pear, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (chunk.pear = __WEBPACK_AMD_DEFINE_RESULT__));
    }(0, function(pear) {
        function RingGradient(options) {
            if (options.svg instanceof d3.selection) this.container = options.svg; else {
                if (!(d3.select(options.svg) instanceof d3.selection)) throw new Error("container unavailable !");
                this.container = d3.select(options.svg);
            }
            return this.cx = options.cx ? options.cx : 0, this.cy = options.cy ? options.cy : 0, 
            this.r = options.radius ? options.radius : 100, this.color = options.color ? options.color : d3.scaleSequential(d3.interpolate("blue", "red")), 
            this.ringWidth = options.ringWidth ? options.ringWidth : 5, this.dotR = options.dotRadius ? options.dotRadius : 10, 
            this.dotW = options.dotStrokeWidth ? options.dotStrokeWidth : 3, this.dotFill = options.dotFill ? options.dotFill : "#FFF", 
            this.textFormat = options.textFormat ? options.textFormat : d3.format(".1%"), this.t = options.t ? options.t : 0, 
            this.defs = this.container.select("defs").empty() ? this.container.append("defs") : this.container.select("defs"), 
            this.uuid = "s_" + uuid(), this.init = function() {
                var linear1 = this.defs.append("linearGradient").attr("x1", "0%").attr("x2", "0%").attr("y1", "0%").attr("y2", "100%").attr("class", this.uuid).attr("id", this.uuid + "_1"), linear2 = this.defs.append("linearGradient").attr("x1", "0%").attr("x2", "0%").attr("y1", "100%").attr("y2", "0%").attr("class", this.uuid).attr("id", this.uuid + "_2");
                linear1.append("stop").attr("offset", "0%").attr("stop-color", this.color(0)), linear1.append("stop").attr("offset", "100%").attr("class", "ringGradient_linear_1_stop").attr("stop-color", this.color(this.t)), 
                linear2.append("stop").attr("offset", "0%").attr("stop-color", this.color(.5)), 
                linear2.append("stop").attr("offset", "100%").attr("class", "ringGradient_linear_2_stop").attr("stop-color", this.color(.5)), 
                this.g = this.container.append("g").attr("class", "ringGradient_g").attr("transform", "translate(" + this.cx + "," + this.cy + ")"), 
                this.ring1 = this.g.append("path").attr("class", "ringGradient_ring_1").style("stroke", "url(#" + this.uuid + "_1)").attr("stroke-width", this.ringWidth).attr("fill", "none"), 
                this.ring2 = this.g.append("path").attr("class", "ringGradient_ring_2").style("stroke", "url(#" + this.uuid + "_2)").attr("stroke-width", this.ringWidth).attr("fill", "none"), 
                this.dot = this.g.append("circle").attr("class", "ringGradient_dot").attr("r", this.dotR).attr("cx", 0).attr("cy", -this.r).attr("stroke-width", this.dotW).attr("fill", this.dotFill).attr("stroke", this.color(0)), 
                this.text = this.g.append("text").attr("class", "ringGradient_text").attr("font-size", this.r / 3).attr("font-weight", "bold").attr("dy", ".3em").attr("text-anchor", "middle").text(this.textFormat(this.t)), 
                this.update(this.t);
            }, this.update = function(t) {
                this.t = t;
                var deltaAngle = 2 * Math.PI * t, dx = Math.sin(deltaAngle) * this.r, dy = Math.cos(deltaAngle) * this.r, selector2 = "#" + this.uuid + "_2", selector1 = "#" + this.uuid + "_1";
                t >= 1 ? (this.container.select(selector1).select(".ringGradient_linear_1_stop").attr("stop-color", this.color(.5)), 
                this.container.select(selector2).select(".ringGradient_linear_2_stop").attr("stop-color", this.color(1)), 
                this.ring2.attr("d", "M0 " + this.r + "A" + this.r + " " + this.r + " 180 0 1 0 " + -this.r), 
                this.ring1.attr("d", "M0 " + -this.r + "A" + this.r + " " + this.r + " 180 0 1 0 " + this.r), 
                this.dot.attr("cx", 0).attr("cy", -this.r).attr("stroke", this.color(1)), this.text.text(this.textFormat(t))) : t >= .5 ? (this.container.select(selector1).select(".ringGradient_linear_1_stop").attr("stop-color", this.color(.5)), 
                this.container.select(selector2).select(".ringGradient_linear_2_stop").attr("stop-color", this.color(t)), 
                this.ring1.attr("d", "M0 " + -this.r + "A" + this.r + " " + this.r + " 180 0 1 0 " + this.r), 
                this.ring2.attr("d", "M0 " + this.r + "A" + this.r + " " + this.r + " " + 360 * (t - .5) + " 0 1 " + dx + " " + -dy), 
                this.dot.attr("cx", dx).attr("cy", -dy).attr("stroke", this.color(t)), this.text.text(this.textFormat(t))) : (this.container.select(selector1).select(".ringGradient_linear_1_stop").attr("stop-color", this.color(t)), 
                this.container.select(selector2).select(".ringGradient_linear_2_stop").attr("stop-color", this.color(.5)), 
                this.ring2.attr("d", ""), this.ring1.attr("d", "M0 " + -this.r + "A" + this.r + " " + this.r + " " + 360 * t + " 0 1 " + dx + " " + -dy), 
                this.dot.attr("cx", dx).attr("cy", -dy).attr("stroke", this.color(t)), this.text.text(this.textFormat(t)));
            }, this.delete = function() {
                this.container && (this.defs.selectAll("." + this.uuid).remove(), this.g.remove());
            }, this.init(), this;
        }
        function uuid() {
            for (var s = [], hexDigits = "0123456789abcdef", i = 0; i < 36; i++) s[i] = hexDigits.substr(Math.floor(16 * Math.random()), 1);
            return s[14] = "4", s[19] = hexDigits.substr(3 & s[19] | 8, 1), s[8] = s[13] = s[18] = s[23] = "_", 
            s.join("");
        }
        pear.RingGradient = RingGradient;
    });
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.EP ? obj : {
            default: obj
        };
    }
    pear.EP = !0;
    var _iterator = __Activision_blizzard__(62), _iterator2 = _interopRequireDefault(_iterator), _symbol = __Activision_blizzard__(74), _symbol2 = _interopRequireDefault(_symbol), _typeof = "function" === typeof _symbol2.default && "symbol" === typeof _iterator2.default ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" === typeof _symbol2.default && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
    };
    pear.default = "function" === typeof _symbol2.default && "symbol" === _typeof(_iterator2.default) ? function(obj) {
        return "undefined" === typeof obj ? "undefined" : _typeof(obj);
    } : function(obj) {
        return obj && "function" === typeof _symbol2.default && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : "undefined" === typeof obj ? "undefined" : _typeof(obj);
    };
}, function(chunk, pear, __Activision_blizzard__) {
    chunk.pear = {
        default: __Activision_blizzard__(63),
        EP: !0
    };
}, function(chunk, pear, __Activision_blizzard__) {
    __Activision_blizzard__(64), __Activision_blizzard__(70), chunk.pear = __Activision_blizzard__(26).f("iterator");
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    var $at = __Activision_blizzard__(65)(!0);
    __Activision_blizzard__(35)(String, "String", function(iterated) {
        this._t = String(iterated), this._i = 0;
    }, function() {
        var point, O = this._t, index = this._i;
        return index >= O.length ? {
            value: void 0,
            done: !0
        } : (point = $at(O, index), this._i += point.length, {
            value: point,
            done: !1
        });
    });
}, function(chunk, pear, __Activision_blizzard__) {
    var toInteger = __Activision_blizzard__(18), defined = __Activision_blizzard__(17);
    chunk.pear = function(TO_STRING) {
        return function(that, pos) {
            var a, b, s = String(defined(that)), i = toInteger(pos), l = s.length;
            return i < 0 || i >= l ? TO_STRING ? "" : void 0 : (a = s.charCodeAt(i), a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : b - 56320 + (a - 55296 << 10) + 65536);
        };
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    var create = __Activision_blizzard__(37), descriptor = __Activision_blizzard__(13), setToStringTag = __Activision_blizzard__(25), IteratorPrototype = {};
    __Activision_blizzard__(5)(IteratorPrototype, __Activision_blizzard__(6)("iterator"), function() {
        return this;
    }), chunk.pear = function(Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, {
            next: descriptor(1, next)
        }), setToStringTag(Constructor, NAME + " Iterator");
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var dP = __Activision_blizzard__(1), anObject = __Activision_blizzard__(11), getKeys = __Activision_blizzard__(9);
    chunk.pear = __Activision_blizzard__(2) ? Object.defineProperties : function(O, Properties) {
        anObject(O);
        for (var P, keys = getKeys(Properties), length = keys.length, i = 0; length > i; ) dP.f(O, P = keys[i++], Properties[P]);
        return O;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var document = __Activision_blizzard__(0).document;
    chunk.pear = document && document.documentElement;
}, function(chunk, pear, __Activision_blizzard__) {
    var has = __Activision_blizzard__(3), toObject = __Activision_blizzard__(33), IE_PROTO = __Activision_blizzard__(19)("IE_PROTO"), ObjectProto = Object.prototype;
    chunk.pear = Object.getPrototypeOf || function(O) {
        return O = toObject(O), has(O, IE_PROTO) ? O[IE_PROTO] : "function" == typeof O.constructor && O instanceof O.constructor ? O.constructor.prototype : O instanceof Object ? ObjectProto : null;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    __Activision_blizzard__(71);
    for (var global = __Activision_blizzard__(0), hide = __Activision_blizzard__(5), Iterators = __Activision_blizzard__(24), TO_STRING_TAG = __Activision_blizzard__(6)("toStringTag"), DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), i = 0; i < DOMIterables.length; i++) {
        var NAME = DOMIterables[i], Collection = global[NAME], proto = Collection && Collection.prototype;
        proto && !proto[TO_STRING_TAG] && hide(proto, TO_STRING_TAG, NAME), Iterators[NAME] = Iterators.Array;
    }
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    var addToUnscopables = __Activision_blizzard__(72), step = __Activision_blizzard__(73), Iterators = __Activision_blizzard__(24), toIObject = __Activision_blizzard__(4);
    chunk.pear = __Activision_blizzard__(35)(Array, "Array", function(iterated, kind) {
        this._t = toIObject(iterated), this._i = 0, this._k = kind;
    }, function() {
        var O = this._t, kind = this._k, index = this._i++;
        return !O || index >= O.length ? (this._t = void 0, step(1)) : "keys" == kind ? step(0, index) : "values" == kind ? step(0, O[index]) : step(0, [ index, O[index] ]);
    }, "values"), Iterators.Arguments = Iterators.Array, addToUnscopables("keys"), addToUnscopables("values"), 
    addToUnscopables("entries");
}, function(chunk, pear) {
    chunk.pear = function() {};
}, function(chunk, pear) {
    chunk.pear = function(done, value) {
        return {
            value: value,
            done: !!done
        };
    };
}, function(chunk, pear, __Activision_blizzard__) {
    chunk.pear = {
        default: __Activision_blizzard__(75),
        EP: !0
    };
}, function(chunk, pear, __Activision_blizzard__) {
    __Activision_blizzard__(76), __Activision_blizzard__(83), __Activision_blizzard__(84), __Activision_blizzard__(85), 
    chunk.pear = __Activision_blizzard__(7).Symbol;
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    var global = __Activision_blizzard__(0), has = __Activision_blizzard__(3), DESCRIPTORS = __Activision_blizzard__(2), $export = __Activision_blizzard__(10), redefine = __Activision_blizzard__(36), META = __Activision_blizzard__(77).KEY, $fails = __Activision_blizzard__(8), shared = __Activision_blizzard__(20), setToStringTag = __Activision_blizzard__(25), uid = __Activision_blizzard__(14), wks = __Activision_blizzard__(6), wksExt = __Activision_blizzard__(26), wksDefine = __Activision_blizzard__(27), keyOf = __Activision_blizzard__(78), enumKeys = __Activision_blizzard__(79), isArray = __Activision_blizzard__(80), anObject = __Activision_blizzard__(11), toIObject = __Activision_blizzard__(4), toPrimitive = __Activision_blizzard__(16), createDesc = __Activision_blizzard__(13), _create = __Activision_blizzard__(37), gOPNExt = __Activision_blizzard__(81), $GOPD = __Activision_blizzard__(82), $DP = __Activision_blizzard__(1), $keys = __Activision_blizzard__(9), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, HIDDEN = wks("_hidden"), TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"), AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object.prototype, USE_NATIVE = "function" == typeof $Symbol, QObject = global.QObject, setter = !QObject || !QObject.prototype || !QObject.prototype.findChild, setSymbolDesc = DESCRIPTORS && $fails(function() {
        return 7 != _create(dP({}, "a", {
            get: function() {
                return dP(this, "a", {
                    value: 7
                }).a;
            }
        })).a;
    }) ? function(it, key, D) {
        var protoDesc = gOPD(ObjectProto, key);
        protoDesc && delete ObjectProto[key], dP(it, key, D), protoDesc && it !== ObjectProto && dP(ObjectProto, key, protoDesc);
    } : dP, wrap = function(tag) {
        var sym = AllSymbols[tag] = _create($Symbol.prototype);
        return sym._k = tag, sym;
    }, isSymbol = USE_NATIVE && "symbol" == typeof $Symbol.iterator ? function(it) {
        return "symbol" == typeof it;
    } : function(it) {
        return it instanceof $Symbol;
    }, $defineProperty = function(it, key, D) {
        return it === ObjectProto && $defineProperty(OPSymbols, key, D), anObject(it), key = toPrimitive(key, !0), 
        anObject(D), has(AllSymbols, key) ? (D.enumerable ? (has(it, HIDDEN) && it[HIDDEN][key] && (it[HIDDEN][key] = !1), 
        D = _create(D, {
            enumerable: createDesc(0, !1)
        })) : (has(it, HIDDEN) || dP(it, HIDDEN, createDesc(1, {})), it[HIDDEN][key] = !0), 
        setSymbolDesc(it, key, D)) : dP(it, key, D);
    }, $defineProperties = function(it, P) {
        anObject(it);
        for (var key, keys = enumKeys(P = toIObject(P)), i = 0, l = keys.length; l > i; ) $defineProperty(it, key = keys[i++], P[key]);
        return it;
    }, $create = function(it, P) {
        return void 0 === P ? _create(it) : $defineProperties(_create(it), P);
    }, $propertyIsEnumerable = function(key) {
        var E = isEnum.call(this, key = toPrimitive(key, !0));
        return !(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) && (!(E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]) || E);
    }, $getOwnPropertyDescriptor = function(it, key) {
        if (it = toIObject(it), key = toPrimitive(key, !0), it !== ObjectProto || !has(AllSymbols, key) || has(OPSymbols, key)) {
            var D = gOPD(it, key);
            return !D || !has(AllSymbols, key) || has(it, HIDDEN) && it[HIDDEN][key] || (D.enumerable = !0), 
            D;
        }
    }, $getOwnPropertyNames = function(it) {
        for (var key, names = gOPN(toIObject(it)), result = [], i = 0; names.length > i; ) has(AllSymbols, key = names[i++]) || key == HIDDEN || key == META || result.push(key);
        return result;
    }, $getOwnPropertySymbols = function(it) {
        for (var key, IS_OP = it === ObjectProto, names = gOPN(IS_OP ? OPSymbols : toIObject(it)), result = [], i = 0; names.length > i; ) !has(AllSymbols, key = names[i++]) || IS_OP && !has(ObjectProto, key) || result.push(AllSymbols[key]);
        return result;
    };
    USE_NATIVE || ($Symbol = function() {
        if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
        var tag = uid(arguments.length > 0 ? arguments[0] : void 0), $set = function(value) {
            this === ObjectProto && $set.call(OPSymbols, value), has(this, HIDDEN) && has(this[HIDDEN], tag) && (this[HIDDEN][tag] = !1), 
            setSymbolDesc(this, tag, createDesc(1, value));
        };
        return DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
            configurable: !0,
            set: $set
        }), wrap(tag);
    }, redefine($Symbol.prototype, "toString", function() {
        return this._k;
    }), $GOPD.f = $getOwnPropertyDescriptor, $DP.f = $defineProperty, __Activision_blizzard__(38).f = gOPNExt.f = $getOwnPropertyNames, 
    __Activision_blizzard__(15).f = $propertyIsEnumerable, __Activision_blizzard__(22).f = $getOwnPropertySymbols, 
    DESCRIPTORS && !__Activision_blizzard__(23) && redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, !0), 
    wksExt.f = function(name) {
        return wrap(wks(name));
    }), $export($export.G + $export.W + $export.F * !USE_NATIVE, {
        Symbol: $Symbol
    });
    for (var es6Symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; ) wks(es6Symbols[j++]);
    for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; ) wksDefine(wellKnownSymbols[k++]);
    $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
        for: function(key) {
            return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
        },
        keyFor: function(key) {
            if (isSymbol(key)) return keyOf(SymbolRegistry, key);
            throw TypeError(key + " is not a symbol!");
        },
        useSetter: function() {
            setter = !0;
        },
        useSimple: function() {
            setter = !1;
        }
    }), $export($export.S + $export.F * !USE_NATIVE, "Object", {
        create: $create,
        defineProperty: $defineProperty,
        defineProperties: $defineProperties,
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        getOwnPropertyNames: $getOwnPropertyNames,
        getOwnPropertySymbols: $getOwnPropertySymbols
    }), $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
        var S = $Symbol();
        return "[null]" != _stringify([ S ]) || "{}" != _stringify({
            a: S
        }) || "{}" != _stringify(Object(S));
    })), "JSON", {
        stringify: function(it) {
            if (void 0 !== it && !isSymbol(it)) {
                for (var replacer, $replacer, args = [ it ], i = 1; arguments.length > i; ) args.push(arguments[i++]);
                return replacer = args[1], "function" == typeof replacer && ($replacer = replacer), 
                !$replacer && isArray(replacer) || (replacer = function(key, value) {
                    if ($replacer && (value = $replacer.call(this, key, value)), !isSymbol(value)) return value;
                }), args[1] = replacer, _stringify.apply($JSON, args);
            }
        }
    }), $Symbol.prototype[TO_PRIMITIVE] || __Activision_blizzard__(5)($Symbol.prototype, TO_PRIMITIVE, $Symbol.prototype.valueOf), 
    setToStringTag($Symbol, "Symbol"), setToStringTag(Math, "Math", !0), setToStringTag(global.JSON, "JSON", !0);
}, function(chunk, pear, __Activision_blizzard__) {
    var META = __Activision_blizzard__(14)("meta"), isObject = __Activision_blizzard__(12), has = __Activision_blizzard__(3), setDesc = __Activision_blizzard__(1).f, id = 0, isExtensible = Object.isExtensible || function() {
        return !0;
    }, FREEZE = !__Activision_blizzard__(8)(function() {
        return isExtensible(Object.preventExtensions({}));
    }), setMeta = function(it) {
        setDesc(it, META, {
            value: {
                i: "O" + ++id,
                w: {}
            }
        });
    }, fastKey = function(it, create) {
        if (!isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
        if (!has(it, META)) {
            if (!isExtensible(it)) return "F";
            if (!create) return "E";
            setMeta(it);
        }
        return it[META].i;
    }, getWeak = function(it, create) {
        if (!has(it, META)) {
            if (!isExtensible(it)) return !0;
            if (!create) return !1;
            setMeta(it);
        }
        return it[META].w;
    }, onFreeze = function(it) {
        return FREEZE && meta.NEED && isExtensible(it) && !has(it, META) && setMeta(it), 
        it;
    }, meta = chunk.pear = {
        KEY: META,
        NEED: !1,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var getKeys = __Activision_blizzard__(9), toIObject = __Activision_blizzard__(4);
    chunk.pear = function(object, el) {
        for (var key, O = toIObject(object), keys = getKeys(O), length = keys.length, index = 0; length > index; ) if (O[key = keys[index++]] === el) return key;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var getKeys = __Activision_blizzard__(9), gOPS = __Activision_blizzard__(22), pIE = __Activision_blizzard__(15);
    chunk.pear = function(it) {
        var result = getKeys(it), getSymbols = gOPS.f;
        if (getSymbols) for (var key, symbols = getSymbols(it), isEnum = pIE.f, i = 0; symbols.length > i; ) isEnum.call(it, key = symbols[i++]) && result.push(key);
        return result;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var cof = __Activision_blizzard__(32);
    chunk.pear = Array.isArray || function(arg) {
        return "Array" == cof(arg);
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var toIObject = __Activision_blizzard__(4), gOPN = __Activision_blizzard__(38).f, toString = {}.toString, windowNames = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], getWindowNames = function(it) {
        try {
            return gOPN(it);
        } catch (e) {
            return windowNames.slice();
        }
    };
    chunk.pear.f = function(it) {
        return windowNames && "[object Window]" == toString.call(it) ? getWindowNames(it) : gOPN(toIObject(it));
    };
}, function(chunk, pear, __Activision_blizzard__) {
    var pIE = __Activision_blizzard__(15), createDesc = __Activision_blizzard__(13), toIObject = __Activision_blizzard__(4), toPrimitive = __Activision_blizzard__(16), has = __Activision_blizzard__(3), IE8_DOM_DEFINE = __Activision_blizzard__(28), gOPD = Object.getOwnPropertyDescriptor;
    pear.f = __Activision_blizzard__(2) ? gOPD : function(O, P) {
        if (O = toIObject(O), P = toPrimitive(P, !0), IE8_DOM_DEFINE) try {
            return gOPD(O, P);
        } catch (e) {}
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
}, function(chunk, pear) {}, function(chunk, pear, __Activision_blizzard__) {
    __Activision_blizzard__(27)("asyncIterator");
}, function(chunk, pear, __Activision_blizzard__) {
    __Activision_blizzard__(27)("observable");
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    function isCollection(obj) {
        return Array.isArray(obj) || void 0 !== obj.length;
    }
    function toArray(collection) {
        if (Array.isArray(collection)) return collection;
        var array = [];
        return forEach(collection, function(obj) {
            array.push(obj);
        }), array;
    }
    function isElement(obj) {
        return obj && 1 === obj.nodeType;
    }
    function getOption(options, name, defaultValue) {
        var value = options[name];
        return void 0 !== value && null !== value || void 0 === defaultValue ? value : defaultValue;
    }
    var forEach = __Activision_blizzard__(39).forEach, elementUtilsMaker = __Activision_blizzard__(87), listenerHandlerMaker = __Activision_blizzard__(88), idGeneratorMaker = __Activision_blizzard__(89), idHandlerMaker = __Activision_blizzard__(90), reporterMaker = __Activision_blizzard__(91), browserDetector = __Activision_blizzard__(40), batchProcessorMaker = __Activision_blizzard__(92), stateHandler = __Activision_blizzard__(94), objectStrategyMaker = __Activision_blizzard__(95), scrollStrategyMaker = __Activision_blizzard__(96);
    chunk.pear = function(options) {
        function listenTo(options, elements, listener) {
            function onResizeCallback(element) {
                var listeners = eventListenerHandler.get(element);
                forEach(listeners, function(listener) {
                    listener(element);
                });
            }
            function addListener(callOnAdd, element, listener) {
                eventListenerHandler.add(element, listener), callOnAdd && listener(element);
            }
            if (listener || (listener = elements, elements = options, options = {}), !elements) throw new Error("At least one element blizzardd.");
            if (!listener) throw new Error("Listener blizzardd.");
            if (isElement(elements)) elements = [ elements ]; else {
                if (!isCollection(elements)) return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                elements = toArray(elements);
            }
            var elementsReady = 0, callOnAdd = getOption(options, "callOnAdd", globalOptions.callOnAdd), onReadyCallback = getOption(options, "onReady", function() {}), debug = getOption(options, "debug", globalOptions.debug);
            forEach(elements, function(element) {
                stateHandler.getState(element) || (stateHandler.initState(element), idHandler.set(element));
                var id = idHandler.get(element);
                if (debug && reporter.log("Attaching listener to element", id, element), !elementUtils.isDetectable(element)) return debug && reporter.log(id, "Not detectable."), 
                elementUtils.isBusy(element) ? (debug && reporter.log(id, "System busy making it detectable"), 
                addListener(callOnAdd, element, listener), onReadyCallbacks[id] = onReadyCallbacks[id] || [], 
                void onReadyCallbacks[id].push(function() {
                    ++elementsReady === elements.length && onReadyCallback();
                })) : (debug && reporter.log(id, "Making detectable..."), elementUtils.markBusy(element, !0), 
                detectionStrategy.makeDetectable({
                    debug: debug
                }, element, function(element) {
                    if (debug && reporter.log(id, "onElementDetectable"), stateHandler.getState(element)) {
                        elementUtils.markAsDetectable(element), elementUtils.markBusy(element, !1), detectionStrategy.addListener(element, onResizeCallback), 
                        addListener(callOnAdd, element, listener);
                        var state = stateHandler.getState(element);
                        if (state && state.startSize) {
                            var width = element.offsetWidth, height = element.offsetHeight;
                            state.startSize.width === width && state.startSize.height === height || onResizeCallback(element);
                        }
                        onReadyCallbacks[id] && forEach(onReadyCallbacks[id], function(callback) {
                            callback();
                        });
                    } else debug && reporter.log(id, "Element uninstalled before being detectable.");
                    delete onReadyCallbacks[id], ++elementsReady === elements.length && onReadyCallback();
                }));
                debug && reporter.log(id, "Already detecable, adding listener."), addListener(callOnAdd, element, listener), 
                elementsReady++;
            }), elementsReady === elements.length && onReadyCallback();
        }
        function uninstall(elements) {
            if (!elements) return reporter.error("At least one element is blizzardd.");
            if (isElement(elements)) elements = [ elements ]; else {
                if (!isCollection(elements)) return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                elements = toArray(elements);
            }
            forEach(elements, function(element) {
                eventListenerHandler.removeAllListeners(element), detectionStrategy.uninstall(element), 
                stateHandler.cleanState(element);
            });
        }
        options = options || {};
        var idHandler;
        if (options.idHandler) idHandler = {
            get: function(element) {
                return options.idHandler.get(element, !0);
            },
            set: options.idHandler.set
        }; else {
            var idGenerator = idGeneratorMaker(), defaultIdHandler = idHandlerMaker({
                idGenerator: idGenerator,
                stateHandler: stateHandler
            });
            idHandler = defaultIdHandler;
        }
        var reporter = options.reporter;
        if (!reporter) {
            reporter = reporterMaker(!1 === reporter);
        }
        var batchProcessor = getOption(options, "batchProcessor", batchProcessorMaker({
            reporter: reporter
        })), globalOptions = {};
        globalOptions.callOnAdd = !!getOption(options, "callOnAdd", !0), globalOptions.debug = !!getOption(options, "debug", !1);
        var detectionStrategy, eventListenerHandler = listenerHandlerMaker(idHandler), elementUtils = elementUtilsMaker({
            stateHandler: stateHandler
        }), desiredStrategy = getOption(options, "strategy", "object"), strategyOptions = {
            reporter: reporter,
            batchProcessor: batchProcessor,
            stateHandler: stateHandler,
            idHandler: idHandler
        };
        if ("scroll" === desiredStrategy && (browserDetector.isLegacyOpera() ? (reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), 
        desiredStrategy = "object") : browserDetector.isIE(9) && (reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), 
        desiredStrategy = "object")), "scroll" === desiredStrategy) detectionStrategy = scrollStrategyMaker(strategyOptions); else {
            if ("object" !== desiredStrategy) throw new Error("Invalid strategy name: " + desiredStrategy);
            detectionStrategy = objectStrategyMaker(strategyOptions);
        }
        var onReadyCallbacks = {};
        return {
            listenTo: listenTo,
            removeListener: eventListenerHandler.removeListener,
            removeAllListeners: eventListenerHandler.removeAllListeners,
            uninstall: uninstall
        };
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    chunk.pear = function(options) {
        function isDetectable(element) {
            var state = getState(element);
            return state && !!state.isDetectable;
        }
        function markAsDetectable(element) {
            getState(element).isDetectable = !0;
        }
        function isBusy(element) {
            return !!getState(element).busy;
        }
        function markBusy(element, busy) {
            getState(element).busy = !!busy;
        }
        var getState = options.stateHandler.getState;
        return {
            isDetectable: isDetectable,
            markAsDetectable: markAsDetectable,
            isBusy: isBusy,
            markBusy: markBusy
        };
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    chunk.pear = function(idHandler) {
        function getListeners(element) {
            var id = idHandler.get(element);
            return void 0 === id ? [] : eventListeners[id] || [];
        }
        function addListener(element, listener) {
            var id = idHandler.get(element);
            eventListeners[id] || (eventListeners[id] = []), eventListeners[id].push(listener);
        }
        function removeListener(element, listener) {
            for (var listeners = getListeners(element), i = 0, len = listeners.length; i < len; ++i) if (listeners[i] === listener) {
                listeners.splice(i, 1);
                break;
            }
        }
        function removeAllListeners(element) {
            var listeners = getListeners(element);
            listeners && (listeners.length = 0);
        }
        var eventListeners = {};
        return {
            get: getListeners,
            add: addListener,
            removeListener: removeListener,
            removeAllListeners: removeAllListeners
        };
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    chunk.pear = function() {
        function generate() {
            return idCount++;
        }
        var idCount = 1;
        return {
            generate: generate
        };
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    chunk.pear = function(options) {
        function getId(element) {
            var state = getState(element);
            return state && void 0 !== state.id ? state.id : null;
        }
        function setId(element) {
            var state = getState(element);
            if (!state) throw new Error("setId blizzardd the element to have a resize detection state.");
            var id = idGenerator.generate();
            return state.id = id, id;
        }
        var idGenerator = options.idGenerator, getState = options.stateHandler.getState;
        return {
            get: getId,
            set: setId
        };
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    chunk.pear = function(quiet) {
        function noop() {}
        var reporter = {
            log: noop,
            warn: noop,
            error: noop
        };
        if (!quiet && window.console) {
            var attachFunction = function(reporter, name) {
                reporter[name] = function() {
                    var f = console[name];
                    if (f.apply) f.apply(console, arguments); else for (var i = 0; i < arguments.length; i++) f(arguments[i]);
                };
            };
            attachFunction(reporter, "log"), attachFunction(reporter, "warn"), attachFunction(reporter, "error");
        }
        return reporter;
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    function Batch() {
        function add(level, fn) {
            fn || (fn = level, level = 0), level > topLevel ? topLevel = level : level < bottomLevel && (bottomLevel = level), 
            batch[level] || (batch[level] = []), batch[level].push(fn), size++;
        }
        function process() {
            for (var level = bottomLevel; level <= topLevel; level++) for (var fns = batch[level], i = 0; i < fns.length; i++) {
                var fn = fns[i];
                fn();
            }
        }
        function getSize() {
            return size;
        }
        var batch = {}, size = 0, topLevel = 0, bottomLevel = 0;
        return {
            add: add,
            process: process,
            size: getSize
        };
    }
    var utils = __Activision_blizzard__(93);
    chunk.pear = function(options) {
        function addFunction(level, fn) {
            !isProcessing && autoProcess && asyncProcess && 0 === batch.size() && processBatchAsync(), 
            batch.add(level, fn);
        }
        function processBatch() {
            for (isProcessing = !0; batch.size(); ) {
                var processingBatch = batch;
                batch = Batch(), processingBatch.process();
            }
            isProcessing = !1;
        }
        function forceProcessBatch(localAsyncProcess) {
            isProcessing || (void 0 === localAsyncProcess && (localAsyncProcess = asyncProcess), 
            asyncFrameHandler && (cancelFrame(asyncFrameHandler), asyncFrameHandler = null), 
            localAsyncProcess ? processBatchAsync() : processBatch());
        }
        function processBatchAsync() {
            asyncFrameHandler = requestFrame(processBatch);
        }
        function cancelFrame(listener) {
            return clearTimeout(listener);
        }
        function requestFrame(callback) {
            return function(fn) {
                return setTimeout(fn, 0);
            }(callback);
        }
        options = options || {};
        var reporter = options.reporter, asyncProcess = utils.getOption(options, "async", !0), autoProcess = utils.getOption(options, "auto", !0);
        autoProcess && !asyncProcess && (reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), 
        asyncProcess = !0);
        var asyncFrameHandler, batch = Batch(), isProcessing = !1;
        return {
            add: addFunction,
            force: forceProcessBatch
        };
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    function getOption(options, name, defaultValue) {
        var value = options[name];
        return void 0 !== value && null !== value || void 0 === defaultValue ? value : defaultValue;
    }
    (chunk.pear = {}).getOption = getOption;
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    function initState(element) {
        return element[prop] = {}, getState(element);
    }
    function getState(element) {
        return element[prop];
    }
    function cleanState(element) {
        delete element[prop];
    }
    var prop = "_erd";
    chunk.pear = {
        initState: initState,
        getState: getState,
        cleanState: cleanState
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    var browserDetector = __Activision_blizzard__(40);
    chunk.pear = function(options) {
        function addListener(element, listener) {
            function listenerProxy() {
                listener(element);
            }
            if (!getObject(element)) throw new Error("Element is not detectable by this strategy.");
            if (browserDetector.isIE(8)) getState(element).object = {
                proxy: listenerProxy
            }, element.attachEvent("onresize", listenerProxy); else {
                getObject(element).contentDocument.defaultView.addEventListener("resize", listenerProxy);
            }
        }
        function makeDetectable(options, element, callback) {
            callback || (callback = element, element = options, options = null), options = options || {};
            options.debug;
            browserDetector.isIE(8) ? callback(element) : function(element, callback) {
                function mutateDom() {
                    function alterPositionStyles() {
                        if ("static" === style.position) {
                            element.style.position = "relative";
                            var removeRelativeStyles = function(reporter, element, style, property) {
                                var value = style[property];
                                "auto" !== value && "0" !== function(value) {
                                    return value.replace(/[^-\d\.]/g, "");
                                }(value) && (reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element), 
                                element.style[property] = 0);
                            };
                            removeRelativeStyles(reporter, element, style, "top"), removeRelativeStyles(reporter, element, style, "right"), 
                            removeRelativeStyles(reporter, element, style, "bottom"), removeRelativeStyles(reporter, element, style, "left");
                        }
                    }
                    function onObjectLoad() {
                        function getDocument(element, callback) {
                            if (!element.contentDocument) return void setTimeout(function() {
                                getDocument(element, callback);
                            }, 100);
                            callback(element.contentDocument);
                        }
                        positionCheckPerformed || alterPositionStyles(), getDocument(this, function(objectDocument) {
                            callback(element);
                        });
                    }
                    "" !== style.position && (alterPositionStyles(style), positionCheckPerformed = !0);
                    var object = document.createElement("object");
                    object.style.cssText = OBJECT_STYLE, object.tabIndex = -1, object.type = "text/html", 
                    object.onload = onObjectLoad, browserDetector.isIE() || (object.data = "about:blank"), 
                    element.appendChild(object), getState(element).object = object, browserDetector.isIE() && (object.data = "about:blank");
                }
                var OBJECT_STYLE = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;", positionCheckPerformed = !1, style = window.getComputedStyle(element), width = element.offsetWidth, height = element.offsetHeight;
                getState(element).startSize = {
                    width: width,
                    height: height
                }, batchProcessor ? batchProcessor.add(mutateDom) : mutateDom();
            }(element, callback);
        }
        function getObject(element) {
            return getState(element).object;
        }
        function uninstall(element) {
            browserDetector.isIE(8) ? element.detachEvent("onresize", getState(element).object.proxy) : element.removeChild(getObject(element)), 
            delete getState(element).object;
        }
        options = options || {};
        var reporter = options.reporter, batchProcessor = options.batchProcessor, getState = options.stateHandler.getState;
        if (!reporter) throw new Error("Missing blizzardd dependency: reporter.");
        return {
            makeDetectable: makeDetectable,
            addListener: addListener,
            uninstall: uninstall
        };
    };
}, function(chunk, pear, __Activision_blizzard__) {
    "use strict";
    var forEach = __Activision_blizzard__(39).forEach;
    chunk.pear = function(options) {
        function addAnimationClass(element) {
            element.className += " " + detectionContainerClass + "_animation_active";
        }
        function addEvent(el, name, cb) {
            if (el.addEventListener) el.addEventListener(name, cb); else {
                if (!el.attachEvent) return reporter.error("[scroll] Don't know how to add event listeners.");
                el.attachEvent("on" + name, cb);
            }
        }
        function removeEvent(el, name, cb) {
            if (el.removeEventListener) el.removeEventListener(name, cb); else {
                if (!el.detachEvent) return reporter.error("[scroll] Don't know how to remove event listeners.");
                el.detachEvent("on" + name, cb);
            }
        }
        function getExpandElement(element) {
            return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
        }
        function getShrinkElement(element) {
            return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
        }
        function addListener(element, listener) {
            if (!getState(element).listeners.push) throw new Error("Cannot add listener to an element that is not detectable.");
            getState(element).listeners.push(listener);
        }
        function makeDetectable(options, element, callback) {
            function debug() {
                if (options.debug) {
                    var args = Array.prototype.slice.call(arguments);
                    if (args.unshift(idHandler.get(element), "Scroll: "), reporter.log.apply) reporter.log.apply(null, args); else for (var i = 0; i < args.length; i++) reporter.log(args[i]);
                }
            }
            function isUnrendered(element) {
                var container = getState(element).container.childNodes[0], style = getComputedStyle(container);
                return !style.width || -1 === style.width.indexOf("px");
            }
            function getStyle() {
                var elementStyle = getComputedStyle(element), style = {};
                return style.position = elementStyle.position, style.width = element.offsetWidth, 
                style.height = element.offsetHeight, style.top = elementStyle.top, style.right = elementStyle.right, 
                style.bottom = elementStyle.bottom, style.left = elementStyle.left, style.widthCSS = elementStyle.width, 
                style.heightCSS = elementStyle.height, style;
            }
            function storeStartSize() {
                var style = getStyle();
                getState(element).startSize = {
                    width: style.width,
                    height: style.height
                }, debug("Element start size", getState(element).startSize);
            }
            function initListeners() {
                getState(element).listeners = [];
            }
            function storeStyle() {
                if (debug("storeStyle invoked."), !getState(element)) return void debug("Aborting because element has been uninstalled");
                var style = getStyle();
                getState(element).style = style;
            }
            function storeCurrentSize(element, width, height) {
                getState(element).lastWidth = width, getState(element).lastHeight = height;
            }
            function getExpandChildElement(element) {
                return getExpandElement(element).childNodes[0];
            }
            function getWidthOffset() {
                return 2 * scrollbarSizes.width + 1;
            }
            function getHeightOffset() {
                return 2 * scrollbarSizes.height + 1;
            }
            function getExpandWidth(width) {
                return width + 10 + getWidthOffset();
            }
            function getExpandHeight(height) {
                return height + 10 + getHeightOffset();
            }
            function getShrinkWidth(width) {
                return 2 * width + getWidthOffset();
            }
            function getShrinkHeight(height) {
                return 2 * height + getHeightOffset();
            }
            function positionScrollbars(element, width, height) {
                var expand = getExpandElement(element), shrink = getShrinkElement(element), expandWidth = getExpandWidth(width), expandHeight = getExpandHeight(height), shrinkWidth = getShrinkWidth(width), shrinkHeight = getShrinkHeight(height);
                expand.scrollLeft = expandWidth, expand.scrollTop = expandHeight, shrink.scrollLeft = shrinkWidth, 
                shrink.scrollTop = shrinkHeight;
            }
            function injectContainerElement() {
                var container = getState(element).container;
                if (!container) {
                    container = document.createElement("div"), container.className = detectionContainerClass, 
                    container.style.cssText = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;", 
                    getState(element).container = container, addAnimationClass(container), element.appendChild(container);
                    var onAnimationStart = function() {
                        getState(element).onRendered && getState(element).onRendered();
                    };
                    addEvent(container, "animationstart", onAnimationStart), getState(element).onAnimationStart = onAnimationStart;
                }
                return container;
            }
            function injectScrollElements() {
                function onExpandScroll() {
                    getState(element).onExpand && getState(element).onExpand();
                }
                function onShrinkScroll() {
                    getState(element).onShrink && getState(element).onShrink();
                }
                if (debug("Injecting elements"), !getState(element)) return void debug("Aborting because element has been uninstalled");
                !function() {
                    var style = getState(element).style;
                    if ("static" === style.position) {
                        element.style.position = "relative";
                        var removeRelativeStyles = function(reporter, element, style, property) {
                            var value = style[property];
                            "auto" !== value && "0" !== function(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }(value) && (reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element), 
                            element.style[property] = 0);
                        };
                        removeRelativeStyles(reporter, element, style, "top"), removeRelativeStyles(reporter, element, style, "right"), 
                        removeRelativeStyles(reporter, element, style, "bottom"), removeRelativeStyles(reporter, element, style, "left");
                    }
                }();
                var rootContainer = getState(element).container;
                rootContainer || (rootContainer = injectContainerElement());
                var scrollbarWidth = scrollbarSizes.width, scrollbarHeight = scrollbarSizes.height, containerStyle = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; " + function(left, top, bottom, right) {
                    return left = left ? left + "px" : "0", top = top ? top + "px" : "0", bottom = bottom ? bottom + "px" : "0", 
                    right = right ? right + "px" : "0", "left: " + left + "; top: " + top + "; right: " + right + "; bottom: " + bottom + ";";
                }(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth), containerContainer = document.createElement("div"), container = document.createElement("div"), expand = document.createElement("div"), expandChild = document.createElement("div"), shrink = document.createElement("div"), shrinkChild = document.createElement("div");
                containerContainer.dir = "ltr", containerContainer.style.cssText = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;", 
                containerContainer.className = detectionContainerClass, container.className = detectionContainerClass, 
                container.style.cssText = containerStyle, expand.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", 
                expandChild.style.cssText = "position: absolute; left: 0; top: 0;", shrink.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", 
                shrinkChild.style.cssText = "position: absolute; width: 200%; height: 200%;", expand.appendChild(expandChild), 
                shrink.appendChild(shrinkChild), container.appendChild(expand), container.appendChild(shrink), 
                containerContainer.appendChild(container), rootContainer.appendChild(containerContainer), 
                addEvent(expand, "scroll", onExpandScroll), addEvent(shrink, "scroll", onShrinkScroll), 
                getState(element).onExpandScroll = onExpandScroll, getState(element).onShrinkScroll = onShrinkScroll;
            }
            function registerListenersAndPositionElements() {
                function updateChildSizes(element, width, height) {
                    var expandChild = getExpandChildElement(element), expandWidth = getExpandWidth(width), expandHeight = getExpandHeight(height);
                    expandChild.style.width = expandWidth + "px", expandChild.style.height = expandHeight + "px";
                }
                function updateDetectorElements(done) {
                    var width = element.offsetWidth, height = element.offsetHeight;
                    debug("Storing current size", width, height), storeCurrentSize(element, width, height), 
                    batchProcessor.add(0, function() {
                        if (!getState(element)) return void debug("Aborting because element has been uninstalled");
                        if (!areElementsInjected()) return void debug("Aborting because element container has not been initialized");
                        if (options.debug) {
                            var w = element.offsetWidth, h = element.offsetHeight;
                            w === width && h === height || reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                        }
                        updateChildSizes(element, width, height);
                    }), batchProcessor.add(1, function() {
                        return getState(element) ? areElementsInjected() ? void positionScrollbars(element, width, height) : void debug("Aborting because element container has not been initialized") : void debug("Aborting because element has been uninstalled");
                    }), done && batchProcessor.add(2, function() {
                        return getState(element) ? areElementsInjected() ? void done() : void debug("Aborting because element container has not been initialized") : void debug("Aborting because element has been uninstalled");
                    });
                }
                function areElementsInjected() {
                    return !!getState(element).container;
                }
                function notifyListenersIfNeeded() {
                    debug("notifyListenersIfNeeded invoked");
                    var state = getState(element);
                    return function() {
                        return void 0 === getState(element).lastNotifiedWidth;
                    }() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height ? debug("Not notifying: Size is the same as the start size, and there has been no notification yet.") : state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight ? debug("Not notifying: Size already notified") : (debug("Current size not notified, notifying..."), 
                    state.lastNotifiedWidth = state.lastWidth, state.lastNotifiedHeight = state.lastHeight, 
                    void forEach(getState(element).listeners, function(listener) {
                        listener(element);
                    }));
                }
                function handleRender() {
                    if (debug("startanimation triggered."), isUnrendered(element)) return void debug("Ignoring since element is still unrendered...");
                    debug("Element rendered.");
                    var expand = getExpandElement(element), shrink = getShrinkElement(element);
                    0 !== expand.scrollLeft && 0 !== expand.scrollTop && 0 !== shrink.scrollLeft && 0 !== shrink.scrollTop || (debug("Scrollbars out of sync. Updating detector elements..."), 
                    updateDetectorElements(notifyListenersIfNeeded));
                }
                function handleScroll() {
                    if (debug("Scroll detected."), isUnrendered(element)) return void debug("Scroll event fired while unrendered. Ignoring...");
                    var width = element.offsetWidth, height = element.offsetHeight;
                    width !== element.lastWidth || height !== element.lastHeight ? (debug("Element size changed."), 
                    updateDetectorElements(notifyListenersIfNeeded)) : debug("Element size has not changed (" + width + "x" + height + ").");
                }
                if (debug("registerListenersAndPositionElements invoked."), !getState(element)) return void debug("Aborting because element has been uninstalled");
                getState(element).onRendered = handleRender, getState(element).onExpand = handleScroll, 
                getState(element).onShrink = handleScroll;
                var style = getState(element).style;
                updateChildSizes(element, style.width, style.height);
            }
            function finalizeDomMutation() {
                if (debug("finalizeDomMutation invoked."), !getState(element)) return void debug("Aborting because element has been uninstalled");
                var style = getState(element).style;
                storeCurrentSize(element, style.width, style.height), positionScrollbars(element, style.width, style.height);
            }
            function ready() {
                callback(element);
            }
            function install() {
                debug("Installing..."), initListeners(), storeStartSize(), batchProcessor.add(0, storeStyle), 
                batchProcessor.add(1, injectScrollElements), batchProcessor.add(2, registerListenersAndPositionElements), 
                batchProcessor.add(3, finalizeDomMutation), batchProcessor.add(4, ready);
            }
            callback || (callback = element, element = options, options = null), options = options || {}, 
            debug("Making detectable..."), !function(element) {
                return !function(element) {
                    return element === element.ownerDocument.body || element.ownerDocument.body.contains(element);
                }(element) || null === getComputedStyle(element);
            }(element) ? install() : (debug("Element is detached"), injectContainerElement(), 
            debug("Waiting until element is attached..."), getState(element).onRendered = function() {
                debug("Element is now attached"), install();
            });
        }
        function uninstall(element) {
            var state = getState(element);
            state && (state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll), 
            state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll), 
            state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart), 
            state.container && element.removeChild(state.container));
        }
        options = options || {};
        var reporter = options.reporter, batchProcessor = options.batchProcessor, getState = options.stateHandler.getState, idHandler = (options.stateHandler.hasState, 
        options.idHandler);
        if (!batchProcessor) throw new Error("Missing blizzardd dependency: batchProcessor");
        if (!reporter) throw new Error("Missing blizzardd dependency: reporter.");
        var scrollbarSizes = function() {
            var child = document.createElement("div");
            child.style.cssText = "position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";
            var container = document.createElement("div");
            container.style.cssText = "position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;", 
            container.appendChild(child), document.body.insertBefore(container, document.body.firstChild);
            var widthSize = 500 - container.clientWidth, heightSize = 500 - container.clientHeight;
            return document.body.removeChild(container), {
                width: widthSize,
                height: heightSize
            };
        }(), detectionContainerClass = "erd_scroll_detection_container";
        return function(styleId, containerClass) {
            if (!document.getElementById(styleId)) {
                var containerAnimationClass = containerClass + "_animation", containerAnimationActiveClass = containerClass + "_animation_active", style = "/* Created by the element-resize-detector library. */\n";
                style += "." + containerClass + " > div::-webkit-scrollbar { display: none; }\n\n", 
                style += "." + containerAnimationActiveClass + " { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + containerAnimationClass + "; animation-name: " + containerAnimationClass + "; }\n", 
                style += "@-webkit-keyframes " + containerAnimationClass + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n", 
                style += "@keyframes " + containerAnimationClass + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }", 
                function(style, method) {
                    method = method || function(element) {
                        document.head.appendChild(element);
                    };
                    var styleElement = document.createElement("style");
                    styleElement.innerHTML = style, styleElement.id = styleId, method(styleElement);
                }(style);
            }
        }("erd_scroll_detection_scrollbar_style", detectionContainerClass), {
            makeDetectable: makeDetectable,
            addListener: addListener,
            uninstall: uninstall
        };
    };
} ]);